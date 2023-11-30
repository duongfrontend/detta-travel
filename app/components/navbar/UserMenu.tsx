/* eslint-disable react/jsx-no-comment-textnodes */
"use client";

import { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import "../media.css";

import useLoginModal from "@/app/hooks/useLoginModal";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useRentModal from "@/app/hooks/useRentModal";
import { SafeUser } from "@/app/types";

import MenuItem from "./MenuItem";
import Avatar from "../Avatar";

interface UserMenuProps {
  currentUser?: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const router = useRouter();

  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const rentModal = useRentModal();

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  const onRent = useCallback(() => {
    if (!currentUser) {
      return loginModal.onOpen();
    }

    rentModal.onOpen();
  }, [loginModal, rentModal, currentUser]);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={onRent}
          className="
          bg-rose-500
          text-white
            hidden
            md:block
            text-sm
            font-semibold
            py-3
            px-4
            rounded-full
            hover:opacity-80
            transition
            cursor-pointer
          ">
          Thêm Tour Của Bạn
        </div>
        <div
          onClick={toggleOpen}
          className="
          p-4
          md:py-1
          md:px-2
          border-[1px]
          border-neutral-200
          flex
          flex-row
          items-center
          gap-3
          rounded-full
          cursor-pointer
          hover:shadow-md
          transition
          ">
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar src={currentUser?.image} />
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className="
            absolute
            rounded-xl
            shadow-md
            w-[50vw]
            md:w-3/4
            bg-white
            overflow-hidden
            right-0

            text-sm
          "
          style={{ top: "70px" }}>
          <div className="flex flex-col cursor-pointer">
            {currentUser ? (
              <>
                <div className="flex justify-center items-center flex-col p-4 cursor-default">
                  <Avatar src={currentUser?.image} />
                  {/* <Image src={currentUser.image} /> */}
                  <div className="mt-2 font-bold text-rose-500">
                    {currentUser?.name}
                  </div>
                </div>
                <MenuItem
                  label="Tour Đã Đặt"
                  onClick={() => router.push("/trips")}
                />
                <MenuItem
                  label="Tour Yêu Thích"
                  onClick={() => router.push("/favorites")}
                />
                <MenuItem
                  label="Theo Dõi Tour Của Tôi"
                  onClick={() => router.push("/reservations")}
                />
                <MenuItem
                  label="Tour Của Tôi"
                  onClick={() => router.push("/properties")}
                />
                <button
                  className=" flex    px-4    py-3 bg-fuchsia-900 font-bold text-white    hover:opacity-70    transition button-media   "
                  onClick={rentModal.onOpen}>
                  Thêm Tour Của Bạn
                </button>

                <hr />
                <button
                  className="px-4    py-3 bg-red-700 text-white font-semibold hover:bg-red-900 transition"
                  onClick={() => signOut()}>
                  Đăng Xuất{" "}
                </button>
              </>
            ) : (
              <>
                <MenuItem label="Đăng Nhập" onClick={loginModal.onOpen} />
                <MenuItem label="Đăng Ký" onClick={registerModal.onOpen} />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
