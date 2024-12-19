import Image from "next/image";

const MainFooter = (): React.ReactElement => {
  return (
    <section
      className="w-screen h-[400px] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center"
      style={{ backgroundImage: "url('/images/footer-img.webp')" }}
    >
      <Image src={"/icons/sol-selva.svg"} alt="" width={400} height={450} />
      <section className="flex w-3/5 justify-between">
        <span className="tracking-[5px] text-m text-background">BURITACA</span>
        <span className="tracking-[5px] text-m text-background">COLOMBIA</span>
      </section>
    </section>
  );
};

export default MainFooter;
