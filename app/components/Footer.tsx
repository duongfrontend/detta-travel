import React from "react";
import "../components/media.css";

const Footer = () => {
  return (
    <div className="p-28 flex justify-center items-center footer-media">
      @2023{" "}
      <a
        href="https://facebook.com/DangHoangDuong.19"
        target="_blank"
        className="font-bold text-rose-500 ml-2 mr-2 hover:opacity-80 transition">
        ĐẶNG HOÀNG DƯƠNG
      </a>{" "}
      ĐÃ ĐĂNG KÝ BẢN QUYỀN
    </div>
  );
};

export default Footer;
