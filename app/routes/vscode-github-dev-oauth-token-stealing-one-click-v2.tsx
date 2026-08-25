import { redirect } from "react-router";

export function loader() {
  return redirect("/vscode-bug-github-dev-token-stealing-one-click", { status: 301 });
}
