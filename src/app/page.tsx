import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="flex gap-5 ml-5">
        <div>
          <Link href={"configuration"}>Configure</Link>
        </div>
        <div>
          <Link href={"transaction"}>Transactions</Link>
        </div>
      </div>
    </div>
  );
}
