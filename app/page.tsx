import Link from "next/link";

export default function Home() {
  return (
    <main className="font-3xl py-6 px-12">
      <ul className="list-disc">
        <li className="mb-5">
          <Link href="/local">Local and Fine Grained Reactivity</Link>
        </li>
        <li className="mb-5">
          <Link href="/context">Context and Computed</Link>
        </li>
        <li className="mb-5">
          <Link href="/global">Global and More Reactivity</Link>
        </li>
      </ul>
    </main>
  );
}
