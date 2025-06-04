const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 absolute inset-x-0 bottom-10 mx-auto  w-[40%] text-white text-center overflow-hidden">
      <h1 className="text-lg md:text-5xl md:leading-[60px] font-bold overflow-hidden">
        The fastest way to send mobile top-up worldwide
      </h1>
      <p className="font-bold max-w-xl text-center mx-auto tracking-wider text-balance sm:text-pretty">
        99% of mobile recharges sent online with Ding arrive in 3 seconds.
      </p>
    </div>
  );
};

export default HeroText;
