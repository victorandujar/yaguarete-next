import Image from "next/image";

const MainFooter = (): React.ReactElement => {
  return (
    <section
      className="w-screen h-[500px] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center"
      style={{ backgroundImage: "url('/images/footer-img.webp')" }}
    >
      <Image src={"/icons/sol-selva.svg"} alt="" width={450} height={450} />
      <section className="flex w-3/5 justify-between">
        <span className="tracking-[5px] text-ml text-background">BURITACA</span>
        <span className="tracking-[5px] text-ml text-background">COLOMBIA</span>
      </section>
    </section>
  );
};

export default MainFooter;
