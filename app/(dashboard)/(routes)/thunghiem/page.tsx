import React from 'react'
import { auth } from "@clerk/nextjs"
import { Heading } from "@/components/heading";
import { BookCopyIcon } from "lucide-react";

const ThuNghiem = () => {
    const {userId} = auth();

  return (
    <div>
        {/* {userId} */}
        <Heading 
            title="Reading Document"
             description="Up file PDF and question about your documents"
             icon={BookCopyIcon}
             iconColor="text-emerald-500"
             bgColor="bg-emerald-500/10"
            />
        <iframe
            title="Streamlit App"
            width="100%"
            height="600"
            src="http://localhost:8501/"
            frameBorder="0"
            scrolling="no"
        />
    </div> 
  )
}

export default ThuNghiem
