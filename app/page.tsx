// Caching data at the edge with Next.js 13 and Supabase
// See the docs: https://beta.nextjs.org/docs/data-fetching/caching
import "server-only";

export const config = {
  runtime: "experimental-edge",
};

const decodeBase64URL = (value: string): string => {
  return Buffer.from(value, "base64").toString("utf-8");
};

const jwt =
  "eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNjY3Mjc0NzAzLCJzdWIiOiI2NDI5ZjM1Ny04OGIxLTRmZDItYWY2Mi0xNjc5OGY1MWY5ODIiLCJlbWFpbCI6InRob3JAc3VwYWJhc2UuaW8iLCJwaG9uZSI6IiIsImFwcF9tZXRhZGF0YSI6eyJwcm92aWRlciI6ImVtYWlsIiwicHJvdmlkZXJzIjpbImdvb2dsZSJdfSwidXNlcl9tZXRhZGF0YSI6eyJhdmF0YXJfdXJsIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUxtNXd1MTNwVnZOcHFuMVRYSzZ3ejFvcUJwbTlKcUJpOHl0WTRQcTEwS3Y9czk2LWMiLCJlbWFpbCI6InRob3JAc3VwYWJhc2UuaW8iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZnVsbF9uYW1lIjoiVGhvciBTY2hhZWZmIiwiaXNzIjoiaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vdXNlcmluZm8vdjIvbWUiLCJuYW1lIjoiVGhvciBTY2hhZWZmIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FMbTV3dTEzcFZ2TnBxbjFUWEs2d3oxb3FCcG05SnFCaTh5dFk0UHExMEt2PXM5Ni1jIiwicHJvdmlkZXJfaWQiOiIxMTExNjAwODI5NTY5NTM0NDI4NDkiLCJzdWIiOiIxMTExNjAwODI5NTY5NTM0NDI4NDkifSwicm9sZSI6ImF1dGhlbnRpY2F0ZWQiLCJzZXNzaW9uX2lkIjoiMjkwMGE3YTEtY2NkYy00YmMyLThlNWQtNTJjOWJhMzBiNmMyIn0";

export default async function PostList() {
  const data = JSON.parse(decodeBase64URL(jwt));

  return <pre>{JSON.stringify({ data }, null, 2)}</pre>;
}
