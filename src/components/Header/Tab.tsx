import Link from "next/link";
import React from "react";

function Tab({ link,content }: TabProp) {
  return (
    <li>
      <Link href={link} className="nav">
        {content}
      </Link>
    </li>
  );
}

export default Tab;
