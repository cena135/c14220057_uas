'use client';

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getUserSession } from "@/utils/auth";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const user = getUserSession();
    if (user) router.replace("/dashboard");
    else router.replace("/signin");
  }, [router]);

  return <div className="flex items-center justify-center h-screen">Redirecting...</div>;
}