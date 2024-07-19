import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <div>
      <Link href="/">
        <Image src="/logo.png" alt="logo" width={48} height={48} />
      </Link>
    </div>
  );
}
