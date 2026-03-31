'use client'
import { useState } from "react";
import Link from "next/link";
import { Search ,UserCircle, Heart, ShoppingCart } from "lucide-react";
import CartButton from "../../features/cart/components/CartButton";



const Header = () => {
    // move these states to UIStore and make this a server component
    const [language, setLanguage] = useState<"English" | "العربية">("English");
    const switchLang = () => {
        setLanguage(language === "English" ? "العربية" : "English");
    };

    return (
        <header>
            <nav className="fixed z-100 top-0 flex items-center justify-between md:gap-6 md:px-6 backdrop-blur-xl h-20 w-full">
                {/* brand logo */}
                <Link href="/">
                    <span className="bg-accent p-3">NovoDeal</span>
                </Link>
                
                {/* search */}
                <div className="relative flex items-stretch justify-center w-90 h-auto overflow-hidden ">
                    {/* Make PlaceHolder changes by time */}
                    <input
                        className="hidden md:block text-sm bg-surface/50 backdrop-blur-lg w-90 flex-1 flex-shrink py-2 px-6 pr-4 rounded-full outline-none focus:outline-none focus:border focus:border-accent-hover rounded-r-none overflow-hidden transition-all duration-300"
                        id="search-field"
                        type="text"
                        placeholder="find products.."
                        onChange={() => console.log("hi")}   
                    />
                    <button className="flex items-center justify-center bg-surface/50 backdrop-blur-lg h-10 w-10 rounded-full md:rounded-l-none md:rounded-r-full cursor-pointer transition-colors duration-300">
                        <Search 
                            className="text-gray-400 active:text-accent-hover "
                            size={20}
                        />
                    </button>
                    
                </div>
                {/* links */}
                <div className=" flex items-center justify-center gap-6">
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
                        <Link href="/favourites">
                        <Heart size={20} className="hover:opacity-50 transition-all duration-300" />
                        </Link>
                        <span className="hidden md:block font-[100] text-lg mx-2">|</span>

                       <CartButton />
                        
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