"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("2af15a9a-4783-4a70-9b5e-6b65c44265e3");
    },[])

    return null;
}