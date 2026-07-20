/**
 * Prefix for raw asset URLs (<video>, <img>, CSS url()) that Next does not
 * rewrite automatically. `next/image` already applies basePath on its own,
 * so only hand-written absolute asset paths need this.
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const asset = (path: string) => `${BASE_PATH}${path}`;
