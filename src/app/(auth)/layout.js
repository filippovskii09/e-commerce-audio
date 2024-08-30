import Image from "next/image";

const AuthLayout = ({ children }) => {
  return (
    <div className="auth-wrapper w-full h-screen object-center relative px-6">
      <Image
        alt="auth-image"
        src="/auth/main.png"
        layout="fill"
        objectFit="cover"
				loading="lazy"
        className="-z-10 absolute left-0 top-0 w-full h-full"
      />
      <h1 className="font-bold text-[51px] text-center mb-2 text-white">
        Audio
      </h1>
      <p className="text-sm font-bold text-center text-white">
        It's modular and designed to last
      </p>
      {children}
    </div>
  );
};

export default AuthLayout;
