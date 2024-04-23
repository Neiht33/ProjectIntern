import React from "react";
import {Navbar,Collapse,Typography,IconButton,} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Routes, Route, Link } from 'react-router-dom';
import CoverLetterApp from "./CoverLetterApp";
import MBTIApp from "./MBTIApp";
import HeaderContest from "./componentMBTI/contest/headerContest";
import MBTI from "./componentMBTI/mbti/mbtigroup";
import StoreCoverLetter from "./componentCL/StoreCoverLetter";
import Preview from "./componentCL/Preview";
import EditCoverLetter from "./componentCL/EditCoverLetter";
import Themsmain from "./componentCL/Themsmain";
 
function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link to={'/'} className="flex items-center hover:text-blue-500 transition-colors">
          CoverLetter
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link to={'/mbti'} className="flex items-center hover:text-blue-500 transition-colors">
          MBTI
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a href="#" className="flex items-center hover:text-blue-500 transition-colors">
          Công cụ
        </a>
      </Typography>
    </ul>
  );
}
 
export default function NavbarSimple() {
  const [openNav, setOpenNav] = React.useState(false);
 
  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);
 
  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
 
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
 
  return (
    <>
        <Navbar className="mx-auto max-w-screen-xl px-6 py-3" style={{maxWidth: '100%', borderRadius: '0'}}>
        <div className="flex items-center justify-between text-blue-gray-900">
            <Typography
            as="a"
            href="#"
            variant="h6"
            className="mr-4 cursor-pointer py-1.5"
            >
            Jobsnew
            </Typography>
            <div className="hidden lg:block">
            <NavList />
            </div>
            <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
            >
            {openNav ? (
                <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
                <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
            </IconButton>
        </div>
        <Collapse open={openNav}>
            <NavList />
        </Collapse>
        </Navbar>
        <Routes>
          <Route path="/" element={<CoverLetterApp />} />
          <Route path="/create/*" element={<Themsmain />} />
          <Route path="/Cover-Letter-list/" element={<StoreCoverLetter />} />
          <Route path="/Cover-Letter-list/Preview/:id" element={<Preview />} />
          <Route path="/Cover-Letter-list/Edit/:id" element={<EditCoverLetter />}/>
          <Route path="/mbti/*" element={<MBTIApp />} />
          <Route path='/contest' element={<HeaderContest />} />
          {/* <Route path='/mbti/MBTI' element={<MBTI />} /> */}
        </Routes>
    </>
  );
}