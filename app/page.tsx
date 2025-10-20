// app/page.tsx
import { redirect } from "next/navigation";

export default async function Home() {
  // Redirige inmediatamente a /login
  redirect("/dashboard");

}
