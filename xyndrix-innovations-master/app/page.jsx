import { redirect } from "next/navigation";

export default function Home() {
  // This redirects the user from the root path (/) to the Home page (/Home)
  redirect("/Home");
  
  // The below return statement won't execute due to the redirect
  return null;
}
