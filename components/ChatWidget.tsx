"use client";

import { useEffect } from "react";
import { initChat } from "@/lib/chat-widget";

export default function ChatWidget() {
  useEffect(() => initChat({ endpoint: "/api/chat" }), []);
  return null;
}
