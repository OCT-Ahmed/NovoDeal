'use client'
import { useState } from "react";
import Link from "next/link";
import { Search ,UserCircle, Heart, ShoppingCart } from "lucide-react";


const Header = () => {

    const [language, setLanguage] = useState<"English" | "العربية">("English");
    const switchLang = () => {
        setLanguage(language === "English" ? "العربية" : "English");
    };

    return (
        <header>
            <nav className="fixed z-100 top-0 flex items-center justify-between gap-6 px-6 backdrop-blur-xl h-20 w-full">
                {/* brand logo */}
                <Link href="/">
                    <span className="bg-accent p-3">NovoDeal</span>
                </Link>
                
                {/* search */}
                <div className="relative flex items-stretch justify-center w-90 h-auto overflow-hidden ">
                    {/* Make PlaceHolder changes by time */}
                    <input
                        className="text-sm bg-surface/50 backdrop-blur-lg w-90 flex-1 flex-shrink py-2 px-6 pr-4 rounded-full outline-none focus:outline-none focus:border focus:border-accent-hover rounded-r-none overflow-hidden transition-all duration-300"
                        id="search-field"
                        type="text"
                        placeholder="find products.."
                        onChange={() => console.log("hi")}   
                    />
                    <button className="flex items-center justify-center bg-surface/50 backdrop-blur-lg h-10 w-10 rounded-l-none rounded-r-full cursor-pointer transition-colors duration-300">
                        <Search 
                            className="text-gray-400 active:text-accent-hover "
                            size={20}
                        />
                    </button>
                    
                </div>
                {/* links */}
                <div className="flex items-center justify-center gap-6">
                    <Link href="/" className="hover:text-accent-hover transition-colors duration-300">Home</Link>
                    <Link href="/products" className="hover:text-accent-hover transition-colors duration-300">The Collection</Link>
                    <Link href="/smartdeals" className="hover:text-accent-hover transition-colors duration-300">Smart Deals</Link>
                    {/*
                         (Main Shop - Dropdown by Categories) Smart Deals (Limited Time/Featured Offers)
                         to footer
                        Our Story (About Us)
                        Support
                    */}
 

                </div>
                {/* lang */}
                <div className="flex items-center justify-center md:gap-10">
                    <div className="flex items-center justify-center gap-1">
                        <div 
                            className="hidden md:flex items-center justify-center w-10 cursor-pointer"
                            onClick={switchLang}
                        >
                            {language}
                        </div> 
                        <span className="hidden md:block font-[100] text-lg mx-2 hover:opacity-50 transition-colors duration-300">|</span>
                        <Heart size={20} className="hover:opacity-50 cursor-pointer transition-all duration-300" />
                        <span className="hidden md:block font-[100] text-lg mx-2">|</span>
                        <div className="relative hover:opacity-50 cursor-pointer transition-all duration-300">
                            <ShoppingCart size={20} className="" />
                            <div className="absolute -top-2 -right-2 flex items-center justify-center font-semibold bg-accent-hover text-white w-3 h-3 rounded-full p-2">
                                <span className="text-xs">13</span>
                            </div>
                        </div>
                        
                        
                    </div>
                    {/* PROFILE - add blured bg-accent circle when hover */}
                    <Link 
                    href="/profile"
                    className="hidden md:block hover:opacity-70 cursor-pointer transition-all duration-300"
                    >
                        <UserCircle size={28}  />
                    </Link>
                   
                </div>
            </nav>
            
        </header>
    )
}

export default Header;