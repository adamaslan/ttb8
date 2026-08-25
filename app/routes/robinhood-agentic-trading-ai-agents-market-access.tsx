import { redirect } from "react-router";

export function loader() {
  return redirect("/robinhood-agentic-trading", { status: 301 });
}
