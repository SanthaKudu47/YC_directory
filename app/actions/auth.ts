"use server";
import "server-only";

import { signIn, signOut } from "@/auth";

async function signInAction() {
  await signIn("github");
}

async function signOutAction() {
  await signOut();
}

export { signInAction,signOutAction };
