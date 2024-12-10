import { db } from "~/server/db";

const mockUrls = [
  "https://utfs.io/f/ac55f207-5d9b-483f-97d7-1e6bf1b3f3f3-w3uih8.jpg",
  "https://utfs.io/f/02ac3c07-f841-4fe6-989b-c2770a56d775-8xo4bv.jpg",
  "https://utfs.io/f/48e2095e-d8e9-4a4c-96e8-9a596066097e-4zmrs0.jpg",
  "https://utfs.io/f/589e2f4a-3ddb-4fdb-b207-e42685791ff5-mt1p01.avif",
  "https://utfs.io/f/46a25e83-a338-43b3-afae-77ec72a36d58-e2n7p6.jpg",
  "https://utfs.io/f/e1e14409-68fa-4d4e-b81f-b3b4066ad198-91mrpt.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany({
    orderBy: (posts, { desc }) => [desc(posts.createdAt)],
  });

  return (
    <main className="container mx-auto px-4">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="aspect-square">
            <img
              src={image.url}
              alt=""
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </main>
  );
}
