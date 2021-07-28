import Image from "next/image";
import HeaderItem from "./HeaderItem";
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";
function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem title="Home" Icon={HomeIcon}></HeaderItem>
        <HeaderItem title="verified" Icon={BadgeCheckIcon}></HeaderItem>
        <HeaderItem title="Collections" Icon={CollectionIcon}></HeaderItem>
        <HeaderItem title="Trending" Icon={LightningBoltIcon}></HeaderItem>
        <HeaderItem title="Search" Icon={SearchIcon}></HeaderItem>
        <HeaderItem title="Account" Icon={UserIcon}></HeaderItem>
      </div>
      
    </header>
  );
}

export default Header;
