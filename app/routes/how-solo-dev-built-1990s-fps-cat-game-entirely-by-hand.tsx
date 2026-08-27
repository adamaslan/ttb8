import { redirect } from "react-router";

export function loader() {
  return redirect("/how-one-dev-built-catlantean-3d-by-hand", { status: 301 });
}
