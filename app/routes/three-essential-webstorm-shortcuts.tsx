import { redirect } from "react-router";

export function loader() {
  return redirect("/guides/three-webstorm-shortcuts", { status: 301 });
}
