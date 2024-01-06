import { auth } from "@clerk/nextjs";
import {NextResponse } from "next/server";
import { Configuration, OpenAIApi} from "openai";

import { increaseApiLimit, checkApiLimit } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";
import Replicate from "replicate";


const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN!
});

export async function POST(
    req:Request
){
    try {
      const {userId} = auth();
      const body = await req.json();
      const { prompt } = body;

      if (!userId){
        return new NextResponse("Unauthorized", {status: 401});
      }

      if(!prompt){
        return new NextResponse("Messages are required.",{ status:400})
      }

      const freeTrial = await checkApiLimit();
      const isPro = await checkSubscription();

      if (!freeTrial && !isPro) {
        return new NextResponse("free trial has expired.", { status: 403});
      }

      const response = await replicate.run(
        "asiryan/meina-mix-v11:f0eba373c70464e12e48defa5520bef59f727018779afb9c5b6bddb80523a8f7",
  {
    input: {
      prompt,
    }
  }
      );

      if (!isPro) {
        
        await increaseApiLimit();
      }

      return NextResponse.json(response);

    } catch(error) {
        console.log("[CONVERSATION_ERROR]", error );
        return new NextResponse("Internal error", {status: 500});
        
    }
};

