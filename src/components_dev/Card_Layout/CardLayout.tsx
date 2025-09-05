import { ReactNode } from "react";

interface Props {
  link_url: string;
  img_url: string;
  title: string;
  desc: string;
  cont: ReactNode;
  go_btn: ReactNode;
}

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function CardLayout({
  link_url,
  img_url,
  title,
  desc,
  cont,
  go_btn,
}: Props) {
  return (
    <Link href={link_url}>
      <Card className="shadow-md/10 flex-col items-stretch h-full justify-stretch">
        <CardHeader className="py-0">
          <div className="bg-gray-500 w-full h-36 rounded-tl-xl rounded-tr-xl"></div>
        </CardHeader>
        <CardContent className="w-full h-full">
          <CardTitle>{title}</CardTitle>
          <CardDescription className="overflow-hidden text-ellipsis whitespace-nowrap mb-2">
            {desc}
          </CardDescription>
          {cont}
        </CardContent>
        <CardFooter>{go_btn}</CardFooter>
      </Card>
    </Link>
  );
}
