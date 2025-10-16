// app/page.tsx
import { redirect } from "next/navigation";

export default function Home() {
  // Redirige inmediatamente a /login
  redirect("/login");

  // Este return no se renderiza, pero Next lo requiere
  return null;
}
