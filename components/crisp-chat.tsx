"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("e6a26b3a-7193-4c71-a311-6909b668edb5");
    },[])

    return null;
}