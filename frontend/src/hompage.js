import React from "react";
import {Navbar,Collapse,Typography,IconButton,} from "@material-tailwind/react";
import {Popover,PopoverHandler,PopoverContent,Button,Chip} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Routes, Route, Link } from 'react-router-dom';
import HeaderContest from "./components/componentMBTI/contest/headerContest";
// import MBTI from "./componentMBTI/mbti/mbtigroup";
import StoreCoverLetter from "./components/componentCL/StoreCoverLetter";
import Preview from "./components/componentCL/Preview";
import EditCoverLetter from "./components/componentCL/EditCoverLetter";
import Themsmain from "./components/componentCL/Themsmain";
import CoverLetter from "./components/componentCL/CoverLetter";
import Header from "./components/componentMBTI/header";
import Home from './components/componentTools/tinhlai';
import Lapkehoachtietkiem from './components/componentTools/lapkehoachtietkiem';
import Thatnghiep from './components/componentTools/thatnghiep';
import Tinhbaohiemxahoi1lan from './components/componentTools/tinhbaohiemxahoi1lan';

 
function PopoverWithDescriptionCL() {

  const [openPopover, setOpenPopover] = React.useState(false);
 
  const triggers = {
    onMouseEnter: () => setOpenPopover(true),
    onMouseLeave: () => setOpenPopover(false),
  };

  return (
    <Popover open={openPopover} handler={setOpenPopover}>
      <PopoverHandler {...triggers}>
        <Button style={{backgroundColor: '#fff', color: '#000'}}>
          <Link to={'/'}>
            CoverLetter
          </Link>
        </Button>
      </PopoverHandler>
      <PopoverContent {...triggers} className="z-50 max-w-[26rem]">
        <div className="mb-2 flex items-center gap-3">
          <Typography
            as="a"
            href="#"
            variant="h6"
            color="blue-gray"
            className="font-bold transition-colors hover:text-gray-900"
            style={{fontWeight: '400'}}
          >
            <Link to={'/'}>
            <i class="fa-solid fa-pager" style={{marginRight: '10px'}}></i>
              Mẫu Cover Letter
          </Link>
          </Typography>
        </div>
        <div className="mb-2 flex items-center gap-3">
          <Typography
            as="a"
            href="#"
            variant="h6"
            color="blue-gray"
            className="font-bold transition-colors hover:text-gray-900"
            style={{fontWeight: '400'}}
          >
            <Link to={'/Cover-Letter-list/'}>
            <i class="fa-solid fa-newspaper" style={{marginRight: '10px'}}></i>
              Quản Lý Cover Letter
          </Link>
          </Typography>
        </div>
      </PopoverContent>
    </Popover>
  );
}

function PopoverWithDescriptionTools() {

  const [openPopover, setOpenPopover] = React.useState(false);
 
  const triggers = {
    onMouseEnter: () => setOpenPopover(true),
    onMouseLeave: () => setOpenPopover(false),
  };

  return (
    <Popover open={openPopover} handler={setOpenPopover}>
      <PopoverHandler {...triggers}>
        <Button style={{backgroundColor: '#fff', color: '#000'}}>
          <Link to={'/tools'}>
            Công cụ
          </Link>
        </Button>
      </PopoverHandler>
      <PopoverContent {...triggers} className="z-50 max-w-[26rem]">
        <div className="mb-2 flex items-center gap-3">
          <Typography
            as="a"
            href="#"
            variant="h6"
            color="blue-gray"
            className="font-bold transition-colors hover:text-gray-900"
            style={{fontWeight: '400'}}
          >
            <Link to={'/tools'}>
              <i class="fa-solid fa-pager" style={{marginRight: '10px'}}></i>
              Tính lãi xuất kép
          </Link>
          </Typography>
        </div>
        <div className="mb-2 flex items-center gap-3">
          <Typography
            as="a"
            href="#"
            variant="h6"
            color="blue-gray"
            className="font-bold transition-colors hover:text-gray-900"
            style={{fontWeight: '400'}}
          >
            <Link to={'/tools/tietkiem'}>
            <i class="fa-solid fa-newspaper" style={{marginRight: '10px'}}></i>
              Lập kế hoạch tiết kiệm
          </Link>
          </Typography>
        </div>
        <div className="mb-2 flex items-center gap-3">
          <Typography
            as="a"
            href="#"
            variant="h6"
            color="blue-gray"
            className="font-bold transition-colors hover:text-gray-900"
            style={{fontWeight: '400'}}
          >
            <Link to={'/tools/that-nghiep'}>
            <i class="fa-solid fa-newspaper" style={{marginRight: '10px'}}></i>
              Tính bảo hiểm thất nghiệp
          </Link>
          </Typography>
        </div><div className="mb-2 flex items-center gap-3">
          <Typography
            as="a"
            href="#"
            variant="h6"
            color="blue-gray"
            className="font-bold transition-colors hover:text-gray-900"
            style={{fontWeight: '400'}}
          >
            <Link to={'/tools/bao-hiem'}>
              <i class="fa-solid fa-newspaper" style={{marginRight: '10px'}}></i>
              Tính bảo hiểm xã hội một lần
          </Link>
          </Typography>
        </div>
      </PopoverContent>
    </Popover>
  );
}
 
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
          {PopoverWithDescriptionCL()}
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
        <Link to={'/tools'} className="flex items-center hover:text-blue-500 transition-colors">
          {PopoverWithDescriptionTools()}
        </Link>
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
            href="http://localhost:3000/"
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
          <Route path="/" element={<CoverLetter />} />
          <Route path="/create/*" element={<Themsmain />} />
          <Route path="/Cover-Letter-list/" element={<StoreCoverLetter />} />
          <Route path="/Cover-Letter-list/Preview/:id" element={<Preview />} />
          <Route path="/Cover-Letter-list/Edit/:id" element={<EditCoverLetter />}/>
          <Route path="/mbti/*" element={<Header />} />
          <Route path='/mbti/contest' element={<HeaderContest />} />
          {/* <Route path='/mbti/MBTI' element={<MBTI />} /> */}
          <Route path='/tools' element={<Home />} />
          <Route path='/tools/tietkiem' element={<Lapkehoachtietkiem />} />
          <Route path='/tools/that-nghiep' element={<Thatnghiep />} />
          <Route path='/tools/bao-hiem' element={<Tinhbaohiemxahoi1lan />} />
        </Routes>
    </>
  );
}