// import React, { useState, useRef } from "react";
// import { Link } from "react-router-dom";
// import { HiOutlineChevronDown } from "react-icons/hi";
// import { IoIosNotificationsOutline } from "react-icons/io";
// import { BiSupport } from "react-icons/bi";

// function Sidemenu() {
//   const [activeItem, setActiveItem] = useState("Dashboard");
//   const [isOpen, setIsOpen] = useState(true);
//   const sidebarRef = useRef(null);

//   const handleItemClick = (item) => {
//     setActiveItem(item);
//   };

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="flex">
//       <button
//         onClick={toggleMenu}
//         className="fixed top-2 left-2 bg-blue-500 text-white p-2 rounded"
//       >
//         Toggle Menu
//       </button>

//       <div
//         ref={sidebarRef}
//         className={`w-[235px] h-full z-10 top-0 fixed bg-neutral-800 overflow-y-scroll transition-transform duration-500 ${
//           isOpen ? "translate-y-0" : "-translate-y-full"
//         }`}
//       >
//         <div className="flex flex-wrap mt-2">
//           <img
//             src="1629896997118.webp"
//             className="w-9 h-9 mt-3 rounded-full left[36px] ml-3 cursor-pointer"
//             alt="logo"
//           />
//           <p className="flex mt-5 ml-3 text-white font-semibold text-sm">
//             Tanutra
//             <HiOutlineChevronDown className="ml-20 h-5 w-5 opacity-85 cursor-pointer" />
//           </p>

//           <div className="w-[230px] h-11 bg-neutral-800 mt-6 flex cursor-pointer">
//             <div
//               className={`w-[115px] h-11 border flex items-center ${
//                 activeItem === "Notices" ? "bg-neutral-500 text-white" : ""
//               }`}
//               onClick={() => handleItemClick("Notices")}
//             >
//               <IoIosNotificationsOutline className="h-5 w-5 ml-5 text-white cursor-pointer" />
//               <p className="text-white text-sm opacity-85 ml-2">Notices</p>
//             </div>

//             <div
//               className={`w-[115px] h-11 border flex items-center ${
//                 activeItem === "Support" ? "bg-neutral-500 text-white" : ""
//               }`}
//               onClick={() => handleItemClick("Support")}
//             >
//               <BiSupport className="h-4 w-4 ml-5 text-white cursor-pointer" />
//               <p className="text-white text-sm opacity-85 ml-2">Support</p>
//             </div>
//           </div>

//           <div className="text-white mt-4 text-sm">
//             {/* Sidebar Items */}
//             <div
//               className={`flex items-center cursor-pointer w-60 p-1 h-10 ${
//                 activeItem === "Home" ? "bg-neutral-500 text-white" : ""
//               }`}
//               onClick={() => handleItemClick("Home")}
//             >
//               <Link
//                 to="Home"
//                 className="flex ml-3 gap-2 text-white font-semibold items-center"
//               >
//                 <img
//                   src="home.svg"
//                   className="w-5 h-5 rounded-full ml-1 cursor-pointer"
//                   alt="logo"
//                 />
//                 Home
//               </Link>
//             </div>

//             <p className="opacity-45 p-2 ml-2 mt-3 text-xs">Manage Business</p>

//             <div
//               className={`flex items-center cursor-pointer w-60 p-1 h-10 ${
//                 activeItem === "Orders" ? "bg-neutral-500 text-white" : ""
//               }`}
//               onClick={() => handleItemClick("Orders")}
//             >
//               <Link
//                 to="Orders"
//                 className="flex ml-3 gap-2 text-white font-semibold items-center"
//               >
//                 <img
//                   src="Orders.svg"
//                   className="w-5 h-5 ml-1 cursor-pointer"
//                   alt="logo"
//                 />
//                 Orders
//                 <img
//                   src="order_new.svg"
//                   className="w-8 h-8 ml-[90px] cursor-pointer"
//                   alt="logo"
//                 />
//               </Link>
//             </div>

//             <div
//               className={`flex items-center cursor-pointer w-60 p-1 h-10 ${
//                 activeItem === "Returns" ? "bg-neutral-500 text-white" : ""
//               }`}
//               onClick={() => handleItemClick("Returns")}
//             >
//               <Link
//                 to="Returns"
//                 className="flex ml-3 gap-2 text-white font-semibold items-center"
//               >
//                 <img
//                   src="returns.svg"
//                   className="w-5 h-5 rounded-full ml-1 cursor-pointer"
//                   alt="logo"
//                 />
//                 Returns
//               </Link>
//             </div>

//             <div
//               className={`flex items-center cursor-pointer w-60 p-1 h-10 ${
//                 activeItem === "Pricing" ? "bg-neutral-500 text-white" : ""
//               }`}
//               onClick={() => handleItemClick("Pricing")}
//             >
//               <Link
//                 to="Pricing"
//                 className="flex ml-3 gap-2 text-white font-semibold items-center"
//               >
//                 <img
//                   src="Pricing.svg"
//                   className="w-5 h-5 rounded-full ml-1 cursor-pointer"
//                   alt="logo"
//                 />
//                 Pricing
//               </Link>
//             </div>

//             <div
//               className={`flex items-center cursor-pointer w-60 p-1 h-10 ${
//                 activeItem === "Inventory" ? "bg-neutral-500 text-white" : ""
//               }`}
//               onClick={() => handleItemClick("Inventory")}
//             >
//               <Link
//                 to="Inventory"
//                 className="flex ml-3 gap-2 text-white font-semibold items-center"
//               >
//                 <img
//                   src="Inventory.svg"
//                   className="w-5 h-5 rounded-full ml-1 cursor-pointer"
//                   alt="logo"
//                 />
//                 Inventory
//               </Link>
//             </div>

//             <div
//               className={`flex items-center cursor-pointer w-60 p-1 h-10 ${
//                 activeItem === "Catalog Uploads"
//                   ? "bg-neutral-500 text-white"
//                   : ""
//               }`}
//               onClick={() => handleItemClick("Catalog Uploads")}
//             >
//               <Link
//                 to="Catalog Uploads"
//                 className="flex ml-3 gap-2 text-white font-semibold items-center"
//               >
//                 <img
//                   src="catelogupload.svg"
//                   className="w-5 h-5 rounded-full ml-1 cursor-pointer"
//                   alt="logo"
//                 />
//                 Catalog Uploads
//               </Link>
//             </div>

//             <div
//               className={`flex items-center cursor-pointer w-60 p-1 h-10 ${
//                 activeItem === "Image Bulk Upload"
//                   ? "bg-neutral-500 text-white"
//                   : ""
//               }`}
//               onClick={() => handleItemClick("Image Bulk Upload")}
//             >
//               <Link
//                 to="Image Bulk Upload "
//                 className="flex ml-3 gap-2 text-white font-semibold items-center"
//               >
//                 <img
//                   src="bulk_image.svg"
//                   className="w-5 h-5 rounded-full ml-1 cursor-pointer"
//                   alt="logo"
//                 />
//                 Image Bulk Upload
//               </Link>
//             </div>

//             <div
//               className={`flex items-center cursor-pointer w-60 p-1 h-10 ${
//                 activeItem === "Payments" ? "bg-neutral-500 text-white" : ""
//               }`}
//               onClick={() => handleItemClick("Payments")}
//             >
//               <Link
//                 to="Payments"
//                 className="flex ml-3 gap-2 text-white font-semibold items-center"
//               >
//                 <img
//                   src="Payments.svg"
//                   className="w-5 h-5 rounded-full ml-1 cursor-pointer"
//                   alt="logo"
//                 />
//                 Payments
//               </Link>
//             </div>

//             <p className="opacity-45 p-4 ml-1 text-xs ">Boost Sales</p>

//             <div
//               className={`flex items-center cursor-pointer w-60 p-1 h-10 ${
//                 activeItem === "Influencer Marketing"
//                   ? "bg-neutral-500 text-white"
//                   : ""
//               }`}
//               onClick={() => handleItemClick("Influencer Marketing")}
//             >
//               <Link
//                 to=" Influencer Marketing"
//                 className="flex ml-3 gap-2 text-white font-semibold items-center"
//               >
//                 <img
//                   src="influencer_marketing.svg"
//                   className="w-5 h-5 rounded-full ml-1 cursor-pointer"
//                   alt="logo"
//                 />
//                 Influencer Marketing
//                 <img
//                   src="order_new.svg"
//                   className="w-8 h-8 cursor-pointer"
//                   alt="logo"
//                 />
//               </Link>
//             </div>

//             <div
//               className={`flex items-center cursor-pointer w-60 p-1 h-10 ${
//                 activeItem === "Advertisement"
//                   ? "bg-neutral-500 text-white"
//                   : ""
//               }`}
//               onClick={() => handleItemClick("Advertisement")}
//             >
//               <Link
//                 to="Advertisement"
//                 className="flex ml-3 gap-2 text-white font-semibold items-center"
//               >
//                 <img
//                   src="advettisement.svg"
//                   className="w-5 h-5 rounded-full ml-1 cursor-pointer"
//                   alt="logo"
//                 />
//                 Advertisement
//               </Link>
//             </div>

//             <div
//               className={`flex items-center cursor-pointer w-60 p-1 h-10 ${
//                 activeItem === "Promotions" ? "bg-neutral-500 text-white" : ""
//               }`}
//               onClick={() => handleItemClick("Promotions")}
//             >
//               <Link
//                 to="Promotions"
//                 className="flex ml-3 gap-2 text-white font-semibold items-center"
//               >
//                 <img
//                   src="Promotions.svg"
//                   className="w-5 h-5 rounded-full ml-1 cursor-pointer"
//                   alt="logo"
//                 />
//                 Promotions
//               </Link>
//             </div>

//             <div
//               className={`flex items-center cursor-pointer w-60 p-1 h-10 ${
//                 activeItem === "Instant Cash" ? "bg-neutral-500 text-white" : ""
//               }`}
//               onClick={() => handleItemClick("Instant Cash")}
//             >
//               <Link
//                 to="Instant Cash"
//                 className="flex ml-3 gap-2 text-white font-semibold items-center"
//               >
//                 <img
//                   src="Instant_Cash.svg"
//                   className="w-5 h-5 rounded-full ml-1 cursor-pointer"
//                   alt="logo"
//                 />
//                 Instant Cash
//                 <img
//                   src="order_new.svg"
//                   className="w-8 h-8 ml-[54px] cursor-pointer"
//                   alt="logo"
//                 />
//               </Link>
//             </div>

//             <div
//               className={`flex items-center cursor-pointer w-60 p-1 h-10 ${
//                 activeItem === "Quality" ? "bg-neutral-500 text-white" : ""
//               }`}
//               onClick={() => handleItemClick("Quality")}
//             >
//               <Link
//                 to="Quality"
//                 className="flex ml-3 gap-2 text-white font-semibold items-center"
//               >
//                 <img
//                   src="Quality.svg"
//                   className="w-5 h-5 rounded-full ml-1 cursor-pointer"
//                   alt="logo"
//                 />
//                 Quality
//                 <img
//                   src="order_new.svg"
//                   className="w-8 h-8 ml-[87px] cursor-pointer"
//                   alt="logo"
//                 />
//               </Link>
//             </div>

//             <p className="opacity-45 p-4 ml-1 text-xs text-white">
//               Performance
//             </p>

//             <div
//               className={`flex items-center cursor-pointer w-60 p-1 h-10 ${
//                 activeItem === "Business Dashboard"
//                   ? "bg-neutral-500 text-white"
//                   : ""
//               }`}
//               onClick={() => handleItemClick("Business Dashboard")}
//             >
//               <Link
//                 to="Quality"
//                 className="flex ml-3 gap-2 text-white font-semibold items-center"
//               >
//                 <img
//                   src="business_dashboard.svg"
//                   className="w-5 h-5 rounded-full ml-1 cursor-pointer"
//                   alt="logo"
//                 />
//                 Business Dashboard
//               </Link>
//             </div>

//             <div className="border-y mt-4 border-y-slate-600">
//               <div className="p-2 flex gap-2 items-center">
//                 <p className="font-sans font-semibold text-xl ml-5 text-neutral-400">
//                   meesho
//                 </p>
//                 <p className="font-sans font-semibold text-xs text-neutral-400">
//                   Supplier Hub
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Sidemenu;


import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { HiOutlineChevronDown } from "react-icons/hi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BiSupport } from "react-icons/bi";

function Sidemenu() {
  const [activeItem, setActiveItem] = useState("Dashboard");
  const [isOpen, setIsOpen] = useState(true);
  const sidebarRef = useRef(null);

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      <button
        onClick={toggleMenu}
        className="fixed top-2 left-2 bg-blue-500 text-white p-2 rounded"
      >
        Toggle Menu
      </button>

      <div
        ref={sidebarRef}
        className={`w-[235px] h-full z-10 top-0 fixed bg-neutral-800 overflow-y-scroll transition-transform duration-500 ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex flex-wrap mt-2">
          <img
            src="1629896997118.webp"
            className="w-9 h-9 mt-3 rounded-full left[36px] ml-3 cursor-pointer"
            alt="logo"
          />
          <p className="flex mt-5 ml-3 text-white font-semibold text-sm">
            Tanutra
            <HiOutlineChevronDown className="ml-20 h-5 w-5 opacity-85 cursor-pointer" />
          </p>

          <div className="w-[230px] h-11 bg-neutral-800 mt-6 flex cursor-pointer">
            <div
              className={`w-[115px] h-11 border flex items-center ${
                activeItem === "Notices" ? "bg-neutral-500 text-white" : ""
              }`}
              onClick={() => handleItemClick("Notices")}
            >
              <IoIosNotificationsOutline className="h-5 w-5 ml-5 text-white cursor-pointer" />
              <p className="text-white text-sm opacity-85 ml-2">Notices</p>
            </div>

            <div
              className={`w-[115px] h-11 border flex items-center ${
                activeItem === "Support" ? "bg-neutral-500 text-white" : ""
              }`}
              onClick={() => handleItemClick("Support")}
            >
              <BiSupport className="h-4 w-4 ml-5 text-white cursor-pointer" />
              <p className="text-white text-sm opacity-85 ml-2">Support</p>
            </div>
          </div>

          <div className="text-white mt-4 text-sm">
            {/* Sidebar Items */}
            <div
              className={`flex items-center cursor-pointer w-60 p-1 h-10 ${
                activeItem === "Home" ? "bg-neutral-500 text-white" : ""
              }`}
              onClick={() => handleItemClick("Home")}
            >
              <Link
                to="Home"
                className="flex ml-3 gap-2 text-white font-semibold items-center"
              >
                <img
                  src="home.svg"
                  className="w-5 h-5 rounded-full ml-1 cursor-pointer"
                  alt="logo"
                />
                Home
              </Link>
            </div>

            <p className="opacity-45 p-2 ml-2 mt-3 text-xs">Manage Business</p>

            <div
              className={`flex items-center cursor-pointer w-60 p-1 h-10 ${
                activeItem === "Orders" ? "bg-neutral-500 text-white" : ""
              }`}
              onClick={() => handleItemClick("Orders")}
            >
              <Link
                to="Orders"
                className="flex ml-3 gap-2 text-white font-semibold items-center"
              >
                <img
                  src="Orders.svg"
                  className="w-5 h-5 ml-1 cursor-pointer"
                  alt="logo"
                />
                Orders
                <img
                  src="order_new.svg"
                  className="w-8 h-8 ml-[90px] cursor-pointer"
                  alt="logo"
                />
              </Link>
            </div>

            <div
              className={`flex items-center cursor-pointer w-60 p-1 h-10 ${
                activeItem === "Returns" ? "bg-neutral-500 text-white" : ""
              }`}
              onClick={() => handleItemClick("Returns")}
            >
              <Link
                to="Returns"
                className="flex ml-3 gap-2 text-white font-semibold items-center"
              >
                <img
                  src="returns.svg"
                  className="w-5 h-5 rounded-full ml-1 cursor-pointer"
                  alt="logo"
                />
                Returns
              </Link>
            </div>

            <div
              className={`flex items-center cursor-pointer w-60 p-1 h-10 ${
                activeItem === "Pricing" ? "bg-neutral-500 text-white" : ""
              }`}
              onClick={() => handleItemClick("Pricing")}
            >
              <Link
                to="Pricing"
                className="flex ml-3 gap-2 text-white font-semibold items-center"
              >
                <img
                  src="Pricing.svg"
                  className="w-5 h-5 rounded-full ml-1 cursor-pointer"
                  alt="logo"
                />
                Pricing
              </Link>
            </div>

            <div
              className={`flex items-center cursor-pointer w-60 p-1 h-10 ${
                activeItem === "Inventory" ? "bg-neutral-500 text-white" : ""
              }`}
              onClick={() => handleItemClick("Inventory")}
            >
              <Link
                to="Inventory"
                className="flex ml-3 gap-2 text-white font-semibold items-center"
              >
                <img
                  src="Inventory.svg"
                  className="w-5 h-5 rounded-full ml-1 cursor-pointer"
                  alt="logo"
                />
                Inventory
              </Link>
            </div>

            <div
              className={`flex items-center cursor-pointer w-60 p-1 h-10 ${
                activeItem === "Catalog Uploads"
                  ? "bg-neutral-500 text-white"
                  : ""
              }`}
              onClick={() => handleItemClick("Catalog Uploads")}
            >
              <Link
                to="Catalog Uploads"
                className="flex ml-3 gap-2 text-white font-semibold items-center"
              >
                <img
                  src="catelogupload.svg"
                  className="w-5 h-5 rounded-full ml-1 cursor-pointer"
                  alt="logo"
                />
                Catalog Uploads
              </Link>
            </div>

            <div
              className={`flex items-center cursor-pointer w-60 p-1 h-10 ${
                activeItem === "Image Bulk Upload"
                  ? "bg-neutral-500 text-white"
                  : ""
              }`}
              onClick={() => handleItemClick("Image Bulk Upload")}
            >
              <Link
                to="Image Bulk Upload "
                className="flex ml-3 gap-2 text-white font-semibold items-center"
              >
                <img
                  src="bulk_image.svg"
                  className="w-5 h-5 rounded-full ml-1 cursor-pointer"
                  alt="logo"
                />
                Image Bulk Upload
              </Link>
            </div>

            <div
              className={`flex items-center cursor-pointer w-60 p-1 h-10 ${
                activeItem === "Payments" ? "bg-neutral-500 text-white" : ""
              }`}
              onClick={() => handleItemClick("Payments")}
            >
              <Link
                to="Payments"
                className="flex ml-3 gap-2 text-white font-semibold items-center"
              >
                <img
                  src="Payments.svg"
                  className="w-5 h-5 rounded-full ml-1 cursor-pointer"
                  alt="logo"
                />
                Payments
              </Link>
            </div>

            <p className="opacity-45 p-4 ml-1 text-xs ">Boost Sales</p>

            <div
              className={`flex items-center cursor-pointer w-60 p-1 h-10 ${
                activeItem === "Influencer Marketing"
                  ? "bg-neutral-500 text-white"
                  : ""
              }`}
              onClick={() => handleItemClick("Influencer Marketing")}
            >
              <Link
                to=" Influencer Marketing"
                className="flex ml-3 gap-2 text-white font-semibold items-center"
              >
                <img
                  src="influencer_marketing.svg"
                  className="w-5 h-5 rounded-full ml-1 cursor-pointer"
                  alt="logo"
                />
                Influencer Marketing
                <img
                  src="order_new.svg"
                  className="w-8 h-8 cursor-pointer"
                  alt="logo"
                />
              </Link>
            </div>

            <div
              className={`flex items-center cursor-pointer w-60 p-1 h-10 ${
                activeItem === "Advertisement"
                  ? "bg-neutral-500 text-white"
                  : ""
              }`}
              onClick={() => handleItemClick("Advertisement")}
            >
              <Link
                to="Advertisement"
                className="flex ml-3 gap-2 text-white font-semibold items-center"
              >
                <img
                  src="advettisement.svg"
                  className="w-5 h-5 rounded-full ml-1 cursor-pointer"
                  alt="logo"
                />
                Advertisement
              </Link>
            </div>

            <div
              className={`flex items-center cursor-pointer w-60 p-1 h-10 ${
                activeItem === ""
                  ? "bg-neutral-500 text-white"
                  : ""
              }`}
              onClick={() => handleItemClick("Promotion")}
            >
              <Link
                to="Promotion"
                className="flex ml-3 gap-2 text-white font-semibold items-center"
              >
                <img
                  src="Promotions.svg"
                  className="w-5 h-5 rounded-full ml-1 cursor-pointer"
                  alt="logo"
                />
               Promotion
              </Link>
            </div>

            <div
              className={`flex items-center cursor-pointer w-60 p-1 h-10 ${
                activeItem === "  Instant Cash"
                  ? "bg-neutral-500 text-white"
                  : ""
              }`}
              onClick={() => handleItemClick("Instant Cash")}
            >
              <Link
                to="Instant Cash"
                className="flex ml-3 gap-2 text-white font-semibold items-center"
              >
                <img
                  src="Instant_Cash.svg"
                  className="w-5 h-5 rounded-full ml-1 cursor-pointer"
                  alt="logo"
                />
                Instant Cash
                <img
                  src="order_new.svg"
                  className="w-8 h-8 cursor-pointer ml-[55px]"
                  alt="logo"
                />
              </Link>
            </div>

            
            <div
              className={`flex items-center cursor-pointer w-60 p-1 h-10 ${
                activeItem === "  Instant Cash"
                  ? "bg-neutral-500 text-white"
                  : ""
              }`}
              onClick={() => handleItemClick("Quality")}
            >
              <Link
                to="Quality"
                className="flex ml-3 gap-2 text-white font-semibold items-center"
              >
                <img
                  src="Quality.svg"
                  className="w-5 h-5 rounded-full ml-1 cursor-pointer"
                  alt="logo"
                />
               Quality
                <img
                  src="order_new.svg"
                  className="w-8 h-8 cursor-pointer ml-[87px]"
                  alt="logo"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidemenu;










