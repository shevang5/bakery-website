import React from "react";

const MainPage = () => {
  const obj = [
    {
      img: "./src/assets/images/main1.png",
      title: "Milk Chocolate Chip Cookie",
      subtitle:
        "The classic—you can't go wrong. Thick, soft, and packed with milk chocolate chips.",
      left: "true",
      flipHorizontal: "true",
      hover: "#EBAC5A",
    },
    {
      img: "./src/assets/images/main3.png",
      title: "The Original Pink Sugar Cookie",
      subtitle:
        "An almond sugar cookie topped with a perfect pink swoop of real almond frosting.",
      left: "false",
      flipHorizontal: "false",
      hover: "#FFB9CD",
    },
    {
      img: "./src/assets/images/main2.png",
      title: "Confetti Cake",
      subtitle:
        "Two fluffy tiers of cake batter confetti cake generously layered with smooth vanilla buttercream and crowned with a dash of vibrant rainbow sprinkles.",
      left: "true",
      flipHorizontal: "true",
      hover: "#2CAF6D",
    },
    {
      img: "./src/assets/images/main4.png",
      title: "Birthday Cake Cookie ft. OREO®",
      subtitle:
        "A thick cookie made with OREO® cookie pieces, covered in cake batter cream cheese frosting and topped with more OREO® cookie pieces and rainbow sprinkles. OREO is a trademark of Mondelēz International group, used with permission.",
      left: "false",
      flipHorizontal: "false",
      hover: "#FF6FC2",
    },
    {
      img: "./src/assets/images/main5.png",
      title: "Hazelnut Sea Salt Cookie",
      subtitle:
        "A chocolate cookie loaded with hazelnut pieces, topped with a hazelnut spread frosting and a sprinkle of sea salt.",
      left: "true",
      flipHorizontal: "true",
      hover: "#6A4731",
    },
  ];

  return (
    <div className=" h-full w-full md:px-[15vw]  py-28 border-b-[1px] border-[#FFB9CD]">
      <div className="bg-[#FFB9CD] md:text-2xl w-fit px-5 py-2 rounded-lg">
        Week of Sep 23 - 28
      </div>
      <h1 className="font-extrabold md:text-[7em] text-6xl font-[crumbl1]">
        National Flavors
      </h1>
      <div className="flex flex-col gap-32 py-28">
        {obj.map((item, index) => (
          <div
            key={index}
            style={{
              transition: "background 0.3s",
              background: undefined,
              color: undefined,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = item.hover;
              if (item.hover === "#6A4731") {
                e.currentTarget.style.color = "#fff";
              } else {
                e.currentTarget.style.color = "";
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "";
              e.currentTarget.style.color = "";
            }}
            className={`flex flex-col h-96 md:flex-row  rounded-[2vw] items-center justify-center gap-10 my-20 ${
              item.left === "true" ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            <img
              src={item.img}
              alt="cookie"
              className={`w-[300px] md:w-[400px] lg:w-[570px] ${
                item.flipHorizontal === "true" && "scale-x-[-1]"
              }`}
            />
            <div className="md:w-[50%] text-center md:text-left">
              <h1 className="text-[3.5vw] leading-[65px] font-[crumbl1] mb-5">
                {item.title}
              </h1>
              <p className="text-xl">{item.subtitle}</p>
              <div>
                <button className="mt-5 px-5 py-2 bg-black text-white rounded-full hover:bg-pink-600 transition">
                  Order Now
                </button>
                <button className="mt-5 ml-5 px-5 py-2 bg-white text-black rounded-full shadow hover:bg-gray-200 transition">
                  Find a Store
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-black h-80 text-white  text-center p-10 rounded-[2vw]">
        <div className=" w-full h-full rounded-xl p-[2px] bg-gradient-to-r from-[#ffffff] to-[#FFBBCE]" >
          <div className="w-full h-full flex flex-col gap-3 justify-center items-center  rounded-xl bg-black">
          <h2 className="font-extrabold leading-none text-[3.5vw] font-[crumbl1] bg-gradient-to-r from-white to-[#FFBBCE] bg-clip-text text-transparent">
            NEW WEEKLY SECRET MENU
          </h2>
          <p className=" bg-gradient-to-r from-white to-[#FFBBCE] bg-clip-text text-transparent">
            Follow the Flavor Map to discover your store's exclusive flavor!
          </p>
          {/* <div className='bg-linear text-black px-10 py-3 ' >Go to secret menu</div> */}
          <div className="px-10 py-3  text-black rounded-full font-semibold bg-gradient-to-r from-[#ffffff] to-[#FFBBCE]">
            Go to secret menu
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
