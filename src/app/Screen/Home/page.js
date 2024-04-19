import Link from "next/link";

export default function HomePage() {
  //  throw new Error("this is a new err!!!")
  return (
    <>
      <div>Shoukai NextJS</div>
      <Link href="/" style={{ color: "red" }}>
        Link to Shoukai NextJS
      </Link>
    </>
  );
}
