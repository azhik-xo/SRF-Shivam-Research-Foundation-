import Image from "next/image";
import Link from "next/link";

const Button = () => {
  return (
    <Link
      href=""
      className="inline-flex items-center justify-center gap-3 bg-[#15bf5f] text-black font-medium px-6 
      py-3 max-sm:px-6 max-sm:py-3 rounded-full text-sm max-sm:text-sm"
    >
      <span>Book Free Consultation</span>
      <Image
        src="/images/icons/arrow.png"
        alt="arrow icon"
        width={20}
        height={20}
        className="w-4 h-3 max-sm:w-4 max-sm:h-3"
      />
    </Link>
    
  );
};

export default Button;
