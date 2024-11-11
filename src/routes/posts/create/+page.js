import { error } from "@sveltejs/kit";

/** @type {import('./$types').PageLoad} */
export async function load() {
  // throw new Error("Ouhhh!");

  throw error(404, { message: "Ouh!!!" });
}
