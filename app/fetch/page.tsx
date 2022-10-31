// Caching data at the edge with Next.js 13 and Supabase
// See the docs: https://beta.nextjs.org/docs/data-fetching/caching
import "server-only";

export const config = {
  runtime: "experimental-edge",
};

const getData = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/articles?select=*`,
    {
      headers: {
        apiKey: process.env.SUPABASE_SERVICE_ROLE_KEY!,
        Authorization: `Bearer ${process.env.SUPABASE_SERVICE_ROLE_KEY!}`,
      },
      next: {
        revalidate: 60,
      },
    }
  );
  return res.json();
};

export default async function Page() {
  const data = await getData();
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
