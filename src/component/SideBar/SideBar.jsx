import React, { useEffect, useRef, useState } from 'react';
import { BsFillPersonFill } from 'react-icons/bs';
import { AiOutlineDollar } from 'react-icons/ai';

const SideBar = ({ showSideBar }) => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const isMounted = useRef(false);
    useEffect(() => {
        if (!isMounted.current) {
            isMounted.current = true;
        } else {
            if (window.innerWidth > 768) {
                setIsSmallScreen(false);
            }
        }

        function handleResize() {
            if (window.innerWidth <= 768) {
                setIsSmallScreen(true);
            } else {
                setIsSmallScreen(false);
            }
        }

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return (
        <div className={`mt-[96px] px-24 col-span-1 ${isSmallScreen && showSideBar ? 'md:block sm:block transition-opacity duration-300 z-50 top-0 left-0 bottom-0 w-[50%] px-3 absolute bg-black transition-opacity h-screen' : 'md:hidden'}`}>
            <div className='h-[60px] flex items-center'>
                <h3 className='intern-text text-[25px] text-[#DBCCDC]'>Personal Account</h3>
            </div>
            <ul className='flex flex-col gap-2 pl-2'>
                <li className='intern-text text-[16px] text-[#DBCCDC] font-[500] h-[40px] flex items-center gap-3 pl-3'>
                    <BsFillPersonFill />
                    <span>General</span>
                </li>
                <li className='intern-text text-[16px] text-[#DBCCDC] font-[500] h-[40px] bg-[#1D171D] flex items-center gap-3 pl-3'>
                    <AiOutlineDollar />
                    <span>Resource Usage</span>
                </li>
                <li className='intern-text text-[16px] text-[#DBCCDC] font-[500] h-[40px] flex items-center gap-3 pl-3'>
                    <AiOutlineDollar />
                    <span>Billing</span>
                </li>
            </ul>
        </div>
    )
}

export default SideBar