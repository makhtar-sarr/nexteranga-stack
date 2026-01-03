export const dynamic = "force-dynamic";

import { auth } from "@nexteranga/auth";
import { toNextJsHandler } from "better-auth/next-js";

export const { GET, POST } = toNextJsHandler(auth);
