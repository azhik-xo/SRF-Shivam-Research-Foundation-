import Image from "next/image";
import Link from "next/link";

const Button2 = () => {
  return (
    <Link
      href=""
      className="inline-flex items-center justify-center gap-3 border-2 border-white text-white font-medium px-6 
      py-3 max-sm:px-6 max-sm:py-3 rounded-full text-sm max-sm:text-sm"
    >
      <Image
        src="/images/icons/playvid.png"
        alt="arrow icon"
        width={20}
        height={20}
        className="w-5 h-5 max-sm:w-5 max-sm:h-5"
      />
      <span>Watch How It Works</span>
    </Link>
    
  );
};

export default Button2;
