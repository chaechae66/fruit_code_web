interface Basic {
  id: number;
  img_url: string;
  title: string;
  desc: string;
  normal_price: number;
  saled_price: number;
  link_url: string;
}

interface Tag {
  type: "배송" | "적립";
  cont: string;
}

interface Shared extends Basic {
  total_cnt: number;
  cur_cnt: number;
}

interface Fruits extends Basic {
  tags: Tag[];
}

interface Gifts extends Basic {
  cont: string[];
  days: string[];
}

const dummy_shared: Shared[] = [
  {
    id: 0,
    img_url: "Text",
    title: "과일01",
    desc: "과일01 상세정보 여러 줄 TEST 과일01 상세정보 여러 줄 TEST 과일01 상세정보 여러 줄 TEST 과일01 상세정보 여러 줄 TEST",
    normal_price: 13000,
    saled_price: 10000,
    total_cnt: 100,
    cur_cnt: 83,
    link_url: "/",
  },
  {
    id: 1,
    img_url: "Text",
    title: "과일02",
    desc: "과일02 상세정보",
    normal_price: 15000,
    saled_price: 12000,
    total_cnt: 100,
    cur_cnt: 14,
    link_url: "/",
  },
  {
    id: 2,
    img_url: "Text",
    title: "과일03",
    desc: "과일03 상세정보",
    normal_price: 13000,
    saled_price: 9000,
    total_cnt: 100,
    cur_cnt: 58,
    link_url: "/",
  },
];

const dummy_fruits: Fruits[] = [
  {
    id: 0,
    img_url: "Text",
    title: "과일01",
    desc: "과일01 상세정보 여러 줄 TEST 과일01 상세정보 여러 줄 TEST 과일01 상세정보 여러 줄 TEST 과일01 상세정보 여러 줄 TEST",
    normal_price: 13000,
    saled_price: 10000,
    tags: [
      {
        type: "배송",
        cont: "무료배송",
      },
      {
        type: "적립",
        cont: "적립 2560p",
      },
    ],
    link_url: "/",
  },
  {
    id: 1,
    img_url: "Text",
    title: "과일02",
    desc: "과일02 상세정보",
    normal_price: 13000,
    saled_price: 10000,
    tags: [
      {
        type: "적립",
        cont: "적립 1060p",
      },
    ],
    link_url: "/",
  },
  {
    id: 2,
    img_url: "Text",
    title: "과일03",
    desc: "과일03 상세정보",
    normal_price: 13000,
    saled_price: 10000,
    tags: [
      {
        type: "적립",
        cont: "적립 3060p",
      },
    ],
    link_url: "/",
  },
  {
    id: 3,
    img_url: "Text",
    title: "과일04",
    desc: "과일04 상세정보",
    normal_price: 13000,
    saled_price: 10000,
    tags: [
      {
        type: "적립",
        cont: "적립 160p",
      },
    ],
    link_url: "/",
  },
  {
    id: 4,
    img_url: "Text",
    title: "과일05",
    desc: "과일05 상세정보",
    normal_price: 13000,
    saled_price: 10000,
    tags: [
      {
        type: "적립",
        cont: "적립 2060p",
      },
    ],
    link_url: "/",
  },
  {
    id: 5,
    img_url: "Text",
    title: "과일06",
    desc: "과일06 상세정보",
    normal_price: 13000,
    saled_price: 10000,
    tags: [
      {
        type: "적립",
        cont: "적립 560p",
      },
    ],
    link_url: "/",
  },
];

const dummy_gifts: Gifts[] = [
  {
    id: 0,
    img_url: "Text",
    title: "과일01",
    desc: "과일01 상세정보 여러 줄 TEST 과일01 상세정보 여러 줄 TEST 과일01 상세정보 여러 줄 TEST 과일01 상세정보 여러 줄 TEST",
    normal_price: 13000,
    saled_price: 10000,
    cont: ["구성품01", "구성품02", "구성품03", "구성품04"],
    days: ["기념일01", "기념일02", "기념일03", "기념일04"],
    link_url: "/",
  },
  {
    id: 1,
    img_url: "Text",
    title: "과일02",
    desc: "과일02 상세정보",
    normal_price: 13000,
    saled_price: 10000,
    cont: ["구성품01", "구성품02", "구성품03", "구성품04"],
    days: ["기념일01", "기념일02", "기념일03", "기념일04"],
    link_url: "/",
  },
  {
    id: 2,
    img_url: "Text",
    title: "과일03",
    desc: "과일03 상세정보",
    normal_price: 13000,
    saled_price: 10000,
    cont: ["구성품01", "구성품02", "구성품03", "구성품04"],
    days: ["기념일01", "기념일02", "기념일03", "기념일04"],
    link_url: "/",
  },
  {
    id: 3,
    img_url: "Text",
    title: "과일04",
    desc: "과일04 상세정보",
    normal_price: 13000,
    saled_price: 10000,
    cont: ["구성품01", "구성품02", "구성품03", "구성품04"],
    days: ["기념일01", "기념일02", "기념일03", "기념일04"],
    link_url: "/",
  },
];

import { HeartHandshake } from "lucide-react";
import { Users } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import CardLayout from "@/components_dev/Card_Layout/CardLayout";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";
import { it } from "node:test";

export default function Home() {
  return (
    <div className={``}>
      <article>
        <Carousel className="w-full h-fit">
          <CarouselContent type="banner" className="w-full h-52 p-4">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="bg-gray-500 w-full rounded-2xl"
              >
                <div className="p-1"></div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </article>
      <main className="pl-4 mb-8">
        <h2 className="title_txt flex">
          <div>
            <HeartHandshake color="#fff" />
          </div>{" "}
          <span>공구 온당</span>
        </h2>
        <p className="mb-3">함께하면 더 달콤해지는 과일 공구</p>
        <div className="">
          <Carousel orientation="horizontal">
            <CarouselContent className="">
              {dummy_shared.map((item) => (
                <div key={item.id}>
                  <CarouselItem className="w-72 h-full">
                    <CardLayout
                      img_url={item.img_url}
                      title={item.title}
                      desc={item.desc}
                      link_url={item.link_url}
                      cont={
                        <>
                          <div>
                            <s className="text-main-gray-text text-sm">
                              {item.normal_price}원
                            </s>
                            <p className="price_txt">{item.saled_price}원</p>
                          </div>
                          <div className="mt-1">
                            <div className="mb-1.5 flex justify-between text-sm">
                              <div className="flex">
                                <Users size={15} color="#ff8802" />
                                <span className="ml-1">
                                  {item.cur_cnt}명 참여
                                </span>
                              </div>
                              <span className="text-main-gray-text">
                                단,{" "}
                                <span className="text-primary">
                                  {item.total_cnt - item.cur_cnt}명
                                </span>{" "}
                                남음!
                              </span>
                            </div>
                            <Progress
                              value={(item.cur_cnt / item.total_cnt) * 100}
                            />
                          </div>
                        </>
                      }
                      go_btn={
                        <div className="flex w-full">
                          <button className="comm_btn second_btn w-full mr-2">
                            공유하기
                          </button>
                          <button className="comm_btn main_btn w-full">
                            공구참여
                          </button>
                        </div>
                      }
                    />
                  </CarouselItem>
                </div>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </main>
      <div className="px-4">
        <section className="mb-8">
          <h2 className="title_txt flex">
            <div>
              <HeartHandshake color="#fff" />
            </div>{" "}
            <span>신선한 과일</span>
          </h2>
          <p className="mb-3">엄선된 프리미엄 과일을 만나보세요</p>
          <div className="grid grid-cols-2 gap-4">
            {dummy_fruits.map((item) => (
              <div key={item.id}>
                <CardLayout
                  link_url={item.link_url}
                  img_url={item.img_url}
                  title={item.title}
                  desc={item.desc}
                  cont={
                    <div>
                      <div className="price_txt mt-2">
                        <p>{item.saled_price}원</p>
                      </div>
                      <div className="flex w-full flex-wrap gap-1">
                        {(item.tags as Tag[]).map((tag) => (
                          <div key={item.id + tag.type} className="flex">
                            <Badge
                              variant="outline"
                              className={cn(
                                tag.type === "배송" &&
                                  "text-teal-500 border-[1px] border-solid border-teal-500",
                                tag.type === "적립" &&
                                  "text-blue-500 border-[1px] border-solid border-blue-500"
                              )}
                            >
                              {tag.cont}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </div>
                  }
                  go_btn={
                    <>
                      <button className="comm_btn main_btn w-full">
                        장바구니 담기
                      </button>
                    </>
                  }
                />
              </div>
            ))}
          </div>
        </section>
      </div>
      <section className="w-full mb-12 pl-4">
        <h2 className="title_txt flex">
          <div>
            <HeartHandshake color="#fff" />
          </div>{" "}
          <span>선물 하기</span>
        </h2>
        <p className="mb-3">마음을 전하는 특별한 과일 선물</p>
        <Carousel orientation="horizontal">
          <CarouselContent className="">
            {dummy_gifts.map((item) => (
              <div key={item.id} className="w-1/2">
                <CarouselItem className="w-full">
                  <CardLayout
                    link_url={item.link_url}
                    img_url={item.img_url}
                    title={item.title}
                    desc={item.desc}
                    cont={
                      <>
                        <div>
                          <p>{item.saled_price}</p>
                        </div>
                      </>
                    }
                    go_btn={
                      <>
                        <button>선물하기</button>
                      </>
                    }
                  />
                </CarouselItem>
              </div>
            ))}
          </CarouselContent>
        </Carousel>
      </section>
    </div>
  );
}
