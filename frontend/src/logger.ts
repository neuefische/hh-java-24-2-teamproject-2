import { Logtail } from "@logtail/browser";

export const logtail: Logtail = new Logtail(
  import.meta.env.VITE_BETTERSTACK_TOKEN
);
