import type { ActionFunction } from "react-router";
import { redirect } from "react-router";
import { logout } from "~/session.server";

export const action: ActionFunction = async ({ request }) => {
  return logout(request);
};

export async function loader() {
  return redirect("/");
};
