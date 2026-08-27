import { redirect } from "react-router";

export function loader() {
  return redirect("/snapstate-persistent-state-for-ai-agents", { status: 301 });
}
