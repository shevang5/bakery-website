
const Footer = () => {
    const link = [
{ name: "Order", url: "/order" },
{ name: "Our story", url: "/our-story" },
{ name: "Rewards", url: "/rewards" },
{ name: "Nutrition & Allergy", url: "/nutrition-allergy" },
{ name: "Support", url: "/support" },
{ name: "Gift Card Balance", url: "/gift-card-balance" },
{ name: "Flavors Map", url: "/flavors-map" }
  ]

const link2 = [
    { name: "Press", url: "/press" },
    { name: "Collaborate", url: "/collaborate" },
    { name: "Franchising", url: "/franchising" },
    { name: "Franchise Store Jobs", url: "/franchise-store-jobs" },
    { name: "HQ Careers", url: "/hq-careers" },
    { name: "Crumbl Cares", url: "/crumbl-cares" },
]


  return (
    <div className='w-full  flex flex-col justify-center items-center gap-10'>
        <div className="flex pt-20 justify-center items-center" >
            <p className="font-bold text-[18px] leading-[20px] 2xl:text-[20px] 2xl:leading-[22px] mb-2 lg:mb-0">Company</p>
            {link.map((item, index)=>{
                return (
                    <p
                        key={index}
                        href={item.url}
                        className="hover:underline hover:bg-[#FFBBCE] px-2 py-2 no-underline rounded-md transition-transform mx-4 text-[16px] leading-[18px] 2xl:text-[18px] 2xl:leading-[20px] cursor-pointer"
                    >
                        {item.name}
                    </p>
                )
            })}
        </div>
        <div className="flex  justify-center items-center" >
            <p className="font-bold text-[18px] leading-[20px] 2xl:text-[20px] 2xl:leading-[22px] mb-2 lg:mb-0">Get Involved</p>
            {link2.map((item, index)=>{
                return (
                    <p key={index} href={item.url} className=" hover:bg-[#FFBBCE] px-2 py-2 no-underline rounded-md mx-4 text-[16px] leading-[18px] 2xl:text-[18px] 2xl:leading-[20px] hover:underline cursor-pointer">{item.name}</p>
                )
            })}
        </div>
        <div className="pb-14" >
            <i style={
                { fontSize: "30px", margin: "10px", cursor: "pointer" }
            } className="ri-instagram-fill"></i>
        <i style={
                { fontSize: "30px", margin: "10px", cursor: "pointer" }
            } className="ri-facebook-circle-fill"></i>
        <i style={
                { fontSize: "30px", margin: "10px", cursor: "pointer" }
            } className="ri-twitter-x-line"></i>
        <i style={
                { fontSize: "30px", margin: "10px", cursor: "pointer" }
            } className="ri-tiktok-line"></i>
        <i style={
                { fontSize: "30px", margin: "10px", cursor: "pointer" }
            } className="ri-youtube-fill"></i>
        <i style={
                { fontSize: "30px", margin: "10px", cursor: "pointer" }
            } className="ri-linkedin-box-fill"></i>
        <i style={
                { fontSize: "30px", margin: "10px", cursor: "pointer" }
            } className="ri-pinterest-fill"></i>
        </div>

        <div className="w-full bg-[#FFB9CD] flex flex-col justify-center items-center p-24" >
            <h1 className="text-[6vw] font-[crumbl1] text-center" >CRUMBL</h1>
            <p>© 2025 all rights reserved.</p>
            <p>

Privacy policy
|
Terms and Conditions
|
Non-edible Cookie Preferences</p>
        </div>
        
    </div>
  )
}

export default Footer
