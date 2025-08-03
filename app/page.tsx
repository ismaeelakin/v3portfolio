import Head from "../extras/head";
import Modal from "@/components/Modal/Modal";
import Animation from "@/components/Animation/Animation";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ismaeel Akin</title>
        <meta
          name="description"
          content="Hello there, I'm Ismaeel Akin. I'm a Software Engineer and a Writer."
        />
      </Head>
      <main
        style={{ backgroundImage: "url('/bg-blur.svg')" }}
        className="bg-right bg-no-repeat bg-contain h-full bg-[#011627] flex items-center md:h-[90.5%] md:mt-14"
      >
        <div className="m-auto w-3/4 md:w-11/12">
          <div className="text-[#e5e9f0]">
            <span className="md:text-sm">Hi all. I am</span>
            <h1 className=" text-[4em] my-0.5 -mt-1.5">Ismaeel Akin</h1>
            <h2 className="text-[#4d5bce] text-2xl">
              &gt; <Animation />
            </h2>
          </div>

          <div className=" mt-20">
            <span className="text-textColor md:text-sm">
              {`//`} Download my resume:
            </span>
            <p className="text-white md:text-sm">
              <span className="text-[#4d5bce]">const</span>{" "}
              <span className="text-[#43d9ad]">myresume</span> ={" "}
              <span className="text-[#e99287]">
                &quot;
                <a target="_blank" href="myresume.pdf" rel="noreferrer">
                  myresume.pdf
                </a>
                &quot;
              </span>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
