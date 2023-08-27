"use client";

import { ReactNode, useEffect } from "react";
import { useClientOnly } from "../store/ClientOnly";

interface Props {
  children: ReactNode;
}

export default function ClientOnly({ children }: Props) {
  const [hasMounted, setHasMounted] = useClientOnly((state) => [
    state.hasMounted,
    state.setHasMounted,
  ]);
  useEffect(() => {
    setHasMounted();
  }, []);

  if (!hasMounted) {
    return null;
  }

  return <>{children}</>;
}
