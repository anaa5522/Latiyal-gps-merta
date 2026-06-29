"use client";

import { Suspense } from "react";
import Buy from "../component/Buy";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Buy/>
    </Suspense>
  );
}