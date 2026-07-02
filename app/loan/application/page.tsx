import { redirect } from "next/navigation";

export default function LoanApplicationRedirectPage() {
  redirect("/loan/details");
}
