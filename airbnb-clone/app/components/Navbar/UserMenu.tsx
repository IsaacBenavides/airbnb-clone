"use client";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import { useUserMenu } from "@/app/store/UserMenu";
import MenuItem from "./MenuItem";
import { useRegisterModal } from "@/app/store/useRegisterModal";

export default function UserMenu() {
  const onOpen = useRegisterModal((state) => state.onOpen);
  const [isOpen, toggleIsOpen] = useUserMenu((state) => [
    state.isOpen,
    state.toogleIsOpen,
  ]);

  return (
    <section className="relative">
      <div className="flex flex-row items-center gap-3">
        <article
          onClick={() => {}}
          className="hidden md:block text-sm font-semibold py-3 hover:bg-neutral-100 transition cursor-pointer"
        >
          Airbnb your home
        </article>
        <article
          onClick={toggleIsOpen}
          className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
        >
          <AiOutlineMenu />
          <article className="hidden md:block">
            <Avatar />
          </article>
        </article>
      </div>

      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
          <article className="flex flex-col cursor-pointer">
            <>
              <MenuItem onClick={() => {}} label="Login" />
              <div className="border-y-[1px]"></div>
              <MenuItem onClick={onOpen} label="Sign up" />
            </>
          </article>
        </div>
      )}
    </section>
  );
}
