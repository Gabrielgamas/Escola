import type { MetaFunction } from "@remix-run/node";
import BannerIntroduction from "~/components/bannerIntroduction/BannerIntroduction";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div
      className="h-full bg-[#fffdf5] w-full flex justify-center  "
      style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}
    >
      <BannerIntroduction />
    </div>
  );
}
