import { Typography, Box, useTheme, Input } from "@mui/material";
import { useRef, useState, FormEvent, useEffect, SetStateAction } from "react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import InputMask from 'react-input-mask';

import {IoIosArrowForward} from 'react-icons/io'
import { useDrawerContext } from "../contexts/MainContext";
import { ContainerHome } from "../components/ContainerHome";

import { MdOutlineDoubleArrow } from 'react-icons/md'
import { useNavigate } from "react-router-dom";






export function Home() {

    const navigate = useNavigate()

    function tokenCheck() {
      const token = localStorage.getItem('key')

      if (token == null) {
          navigate('/login')
      }
      }

       useEffect(() => {
        tokenCheck()
      }, [])

    const { 
        
    setWeight, setWeight2, setWeight3, setWeight4, setWeight5, setWeight6, setWeight7, setWeight8, setWeight9, setWeight10, setWeight11, setWeight12, setWeight13, setWeight14, setWeight15, setWeight16, setWeight17, setWeight18, setWeight19,
    setPrice, setPrice2, setPrice3, setPrice4, setPrice5, setPrice6, setPrice7, setPrice8, setPrice9, setPrice10, setPrice11, setPrice12, setPrice13, setPrice14, setPrice15, setPrice16, setPrice17, setPrice18, setPrice19,
    percentage, percentage2, percentage3, percentage4, percentage5, percentage6, percentage7, percentage8, percentage9, percentage10, percentage11, percentage12, percentage13, percentage14, percentage15, percentage16, percentage17, percentage18, percentage19,
    total, total2, total3, total4, total5, total6, total7, total8, total9, total10, total11, total12, total13, total14, total15, total16, total17, total18, total19,
    totalWeight,
    weight, weight2, weight3, weight4, weight5, weight6, weight7, weight8, weight9, weight10, weight11, weight12, weight13, weight14, weight15, weight16, weight17, weight18, weight19, 
    price, price2, price3, price4, price5, price6, price7, price8, price9, price10, price11, price12, price13, price14, price15, price16, price17, price18, price19,
    setPesoTotal,
    sidebarOpen,
    toggleSideBar,

    labelStyledAgulha, labelStyledAgulha2,
    setLabelStyledAgulha, setLabelStyledAgulha2,

    labelStyledPonta, labelStyledPonta2,
    setLabelStyledPonta, setLabelStyledPonta2,

    labelStyledDianteiro, labelStyledDianteiro2,
    setLabelStyledDianteiro, setLabelStyledDianteiro2,

    labelStyledPaleta, labelStyledPaleta2,
    setLabelStyledPaleta, setLabelStyledPaleta2,

    labelStyledMoida, labelStyledMoida2,
    setLabelStyledMoida, setLabelStyledMoida2,

    labelStyledChuleta, labelStyledChuleta2,
    setLabelStyledChuleta, setLabelStyledChuleta2,

    labelStyledVazio, labelStyledVazio2,
    setLabelStyledVazio, setLabelStyledVazio2,

    labelStyledPatinho, labelStyledPatinho2,
    setLabelStyledPatinho, setLabelStyledPatinho2,

    labelStyledCoxao, labelStyledCoxao2,
    setLabelStyledCoxao, setLabelStyledCoxao2,

    labelStyledTatu, labelStyledTatu2,
    setLabelStyledTatu, setLabelStyledTatu2,

    labelStyledCoxaoMole, labelStyledCoxaoMole2,
    setLabelStyledCoxaoMole, setLabelStyledCoxaoMole2,

    labelStyledMaminha, labelStyledMaminha2,
    setLabelStyledMaminha, setLabelStyledMaminha2,

    labelStyledAlcatra, labelStyledAlcatra2,
    setLabelStyledAlcatra, setLabelStyledAlcatra2,

    labelStyledPicanha, labelStyledPicanha2,
    setLabelStyledPicanha, setLabelStyledPicanha2,

    labelStyledFile, labelStyledFile2,
    setLabelStyledFile, setLabelStyledFile2,

    labelStyledCostela, labelStyledCostela2,
    setLabelStyledCostela, setLabelStyledCostela2,

    labelStyledMinga, labelStyledMinga2,
    setLabelStyledMinga, setLabelStyledMinga2,

    labelStyledFraldinha, labelStyledFraldinha2,
    setLabelStyledFraldinha, setLabelStyledFraldinha2,

    labelStyledBuco, labelStyledBuco2,
    setLabelStyledBuco, setLabelStyledBuco2,


    } = useDrawerContext()

    const carousel = useRef<any>()

    const [estado, setEstado] = useState(1)

    

    const prevSlide = (e: { preventDefault: () => void; }) => {
        e.preventDefault()

        carousel.current.scrollLeft -= 370

        if (estado == 1) {
            setEstado(1)
        } else {
            setEstado(estado-1)
        }

        console.log(estado)
    }



    const nextSlide = (e: { preventDefault: () => void; }) => {
        e.preventDefault()

        carousel.current.scrollLeft += 370

        if (estado == 19) {
            setEstado(19)
        } else {
            setEstado(estado+1)
        }

        
        

        console.log(estado)

       
    }


    


    
    

    const calcTotal = () => {
        setPesoTotal(totalWeight)
    }

    const weightPressed = (e: any) => {

        setWeight(e.currentTarget.value)

        if (e.currentTarget.value.length > 0) {
            setLabelStyledAgulha(true)
          } else {
            setLabelStyledAgulha(false)
          }

    }


    const weightPressed2 = (e: any) => {

        setWeight2(e.currentTarget.value)

        if (e.currentTarget.value.length > 0) {
            setLabelStyledPonta(true)
          } else {
            setLabelStyledPonta(false)
          }
    }

    const weightPressed3 = (e: any) => {

        setWeight3(e.currentTarget.value)

        if (e.currentTarget.value.length > 0) {
            setLabelStyledDianteiro(true)
          } else {
            setLabelStyledDianteiro(false)
          }
    }

    const weightPressed4 = (e: any) => {

        setWeight4(e.currentTarget.value)

        if (e.currentTarget.value.length > 0) {
            setLabelStyledPaleta(true)
          } else {
            setLabelStyledPaleta(false)
          }
    }

    const weightPressed5 = (e: any) => {

        setWeight5(e.currentTarget.value)

        if (e.currentTarget.value.length > 0) {
            setLabelStyledMoida(true)
          } else {
            setLabelStyledMoida(false)
          }
    }

    const weightPressed6 = (e: any) => {

        setWeight6(e.currentTarget.value)

        if (e.currentTarget.value.length > 0) {
            setLabelStyledChuleta(true)
          } else {
            setLabelStyledChuleta(false)
          }
    }

    const weightPressed7 = (e: any) => {

        setWeight7(e.currentTarget.value)

        if (e.currentTarget.value.length > 0) {
            setLabelStyledVazio(true)
          } else {
            setLabelStyledVazio(false)
          }
    }

    const weightPressed8 = (e: any) => {

        setWeight8(e.currentTarget.value)

        if (e.currentTarget.value.length > 0) {
            setLabelStyledPatinho(true)
          } else {
            setLabelStyledPatinho(false)
          }
    }

    const weightPressed9 = (e: any) => {

        setWeight9(e.currentTarget.value)

        if (e.currentTarget.value.length > 0) {
            setLabelStyledCoxao(true)
          } else {
            setLabelStyledCoxao(false)
          }
    }

    const weightPressed10 = (e: any) => {

        setWeight10(e.currentTarget.value)

        if (e.currentTarget.value.length > 0) {
            setLabelStyledTatu(true)
          } else {
            setLabelStyledTatu(false)
          }
    }

    const weightPressed11 = (e: any) => {

        setWeight11(e.currentTarget.value)

        if (e.currentTarget.value.length > 0) {
            setLabelStyledCoxaoMole(true)
          } else {
            setLabelStyledCoxaoMole(false)
          }
    }

    const weightPressed12 = (e: any) => {

        setWeight12(e.currentTarget.value)

        if (e.currentTarget.value.length > 0) {
            setLabelStyledMaminha(true)
          } else {
            setLabelStyledMaminha(false)
          }
    }

    const weightPressed13 = (e: any) => {

        setWeight13(e.currentTarget.value)

        if (e.currentTarget.value.length > 0) {
            setLabelStyledAlcatra(true)
          } else {
            setLabelStyledAlcatra(false)
          }
    }

    const weightPressed14 = (e: any) => {

        setWeight14(e.currentTarget.value)

        if (e.currentTarget.value.length > 0) {
            setLabelStyledPicanha(true)
          } else {
            setLabelStyledPicanha(false)
          }
    }

    const weightPressed15 = (e: any) => {

        setWeight15(e.currentTarget.value)

        if (e.currentTarget.value.length > 0) {
            setLabelStyledFile(true)
          } else {
            setLabelStyledFile(false)
          }
    }

    const weightPressed16 = (e: any) => {

        setWeight16(e.currentTarget.value)

        if (e.currentTarget.value.length > 0) {
            setLabelStyledCostela(true)
          } else {
            setLabelStyledCostela(false)
          }
    }

    const weightPressed17 = (e: any) => {

        setWeight17(e.currentTarget.value)

        if (e.currentTarget.value.length > 0) {
            setLabelStyledMinga(true)
          } else {
            setLabelStyledMinga(false)
          }
    }

    const weightPressed18 = (e: any) => {

        setWeight18(e.currentTarget.value)

        if (e.currentTarget.value.length > 0) {
            setLabelStyledFraldinha(true)
          } else {
            setLabelStyledFraldinha(false)
          }
    }

    const weightPressed19 = (e: any) => {

        setWeight19(e.currentTarget.value)

        if (e.currentTarget.value.length > 0) {
            setLabelStyledBuco(true)
          } else {
            setLabelStyledBuco(false)
          }
    }



    const pricePressed = (e: any) => {

        setPrice(e.currentTarget.value)

        if (e.currentTarget.value.length > 0) {
            setLabelStyledAgulha2(true)
          } else {
            setLabelStyledAgulha2(false)
          }

    }

    const pricePressed2 = (e: any) => {
        setPrice2(e.currentTarget.value)

        if (e.currentTarget.value.length > 0) {
            setLabelStyledPonta2(true)
          } else {
            setLabelStyledPonta2(false)
          }

    }

    const pricePressed3 = (e: any) => {

        setPrice3(e.currentTarget.value)

        if (e.currentTarget.value.length > 0) {
            setLabelStyledDianteiro2(true)
          } else {
            setLabelStyledDianteiro2(false)
          }

    }

    const pricePressed4 = (e: any) => {

        setPrice4(e.currentTarget.value)

        if (e.currentTarget.value.length > 0) {
            setLabelStyledPaleta2(true)
          } else {
            setLabelStyledPaleta2(false)
          }

    }

    const pricePressed5 = (e: any) => {

        setPrice5(e.currentTarget.value)

        if (e.currentTarget.value.length > 0) {
            setLabelStyledMoida2(true)
          } else {
            setLabelStyledMoida2(false)
          }

    }

    const pricePressed6 = (e: any) => {

        setPrice6(e.currentTarget.value)

        if (e.currentTarget.value.length > 0) {
            setLabelStyledChuleta2(true)
          } else {
            setLabelStyledChuleta2(false)
          }

    }

    const pricePressed7 = (e: any) => {

        setPrice7(e.currentTarget.value)

        if (e.currentTarget.value.length > 0) {
            setLabelStyledVazio2(true)
          } else {
            setLabelStyledVazio2(false)
          }

    }

    const pricePressed8 = (e: any) => {

        setPrice8(e.currentTarget.value)

        if (e.currentTarget.value.length > 0) {
            setLabelStyledPatinho2(true)
          } else {
            setLabelStyledPatinho2(false)
          }

    }

    const pricePressed9 = (e: any) => {

        setPrice9(e.currentTarget.value)

        if (e.currentTarget.value.length > 0) {
            setLabelStyledCoxao2(true)
          } else {
            setLabelStyledCoxao2(false)
          }

    }

    const pricePressed10 = (e: any) => {

        setPrice10(e.currentTarget.value)

        if (e.currentTarget.value.length > 0) {
            setLabelStyledTatu2(true)
          } else {
            setLabelStyledTatu2(false)
          }

    }

    const pricePressed11 = (e: any) => {

        setPrice11(e.currentTarget.value)

        if (e.currentTarget.value.length > 0) {
            setLabelStyledCoxaoMole2(true)
          } else {
            setLabelStyledCoxaoMole2(false)
          }

    }

    const pricePressed12 = (e: any) => {

        setPrice12(e.currentTarget.value)

        if (e.currentTarget.value.length > 0) {
            setLabelStyledMaminha2(true)
          } else {
            setLabelStyledMaminha2(false)
          }

    }

    const pricePressed13 = (e: any) => {

        setPrice13(e.currentTarget.value)

        if (e.currentTarget.value.length > 0) {
            setLabelStyledAlcatra2(true)
          } else {
            setLabelStyledAlcatra2(false)
          }

    }

    const pricePressed14 = (e: any) => {

        setPrice14(e.currentTarget.value)

        if (e.currentTarget.value.length > 0) {
            setLabelStyledPicanha2(true)
          } else {
            setLabelStyledPicanha2(false)
          }

    }

    const pricePressed15 = (e: any) => {

        setPrice15(e.currentTarget.value)

        if (e.currentTarget.value.length > 0) {
            setLabelStyledFile2(true)
          } else {
            setLabelStyledFile2(false)
          }

    }

    const pricePressed16 = (e: any) => {

        setPrice16(e.currentTarget.value)

        if (e.currentTarget.value.length > 0) {
            setLabelStyledCostela2(true)
          } else {
            setLabelStyledCostela2(false)
          }

    }

    const pricePressed17 = (e: any) => {

        setPrice17(e.currentTarget.value)

        if (e.currentTarget.value.length > 0) {
            setLabelStyledMinga2(true)
          } else {
            setLabelStyledMinga2(false)
          }

    }

    const pricePressed18 = (e: any) => {

        setPrice18(e.currentTarget.value)

        if (e.currentTarget.value.length > 0) {
            setLabelStyledFraldinha2(true)
          } else {
            setLabelStyledFraldinha2(false)
          }

    }

    const pricePressed19 = (e: any) => {

        setPrice19(e.currentTarget.value)

        if (e.currentTarget.value.length > 0) {
            setLabelStyledBuco2(true)
          } else {
            setLabelStyledBuco2(false)
          }

    }
  



    return (
        <Box className="flex flex-col">
        <Navbar />
        <Box className="flex flex-1 h-screen overflow-hidden">
        <Box className="flex m-0 gap-0">
        <Sidebar />
        <Box className="relative 2xl:hidden">
          <span onClick={toggleSideBar} className={`w-[40px] h-[40px] top-4 flex justify-center items-center rounded-full bg-red-500 absolute -left-[18px] cursor-pointer ${sidebarOpen? 'rotate-180 -left-[25px]' : ''}`}>
            <MdOutlineDoubleArrow color="#FFF" size={30}/>
          </span>
        </Box>
        </Box>
        <ContainerHome>

        <Box className="overflow-hidden max-h-screen">
        <Box className="overflow-y-auto h-screen px-4">
        <Box className="wrapper mt-5 flex flex-wrap mx-auto max-w-full gap-5 pb-10">

            <Box className={`single ${sidebarOpen? 'single-open' : null}`}>
                <Box className="single-image">
                    <img className=" hover:scale-150 duration-500 " src="https://uploaddeimagens.com.br/images/003/970/655/full/O_A%C3%A7ougue-23.png?1659725782" alt="carne-agulha" />
                </Box>

                <Box className="single-inputs ml-3">
                    <span className="text-[#D00000] font-bold cut-name">Agulha</span>

                    
                    <Box className={`input-container ${labelStyledAgulha? 'mt-5' : ''}`}>
                    <InputMask maskChar={null} mask='99.999' className="input-single bg-transparent outline-none text-black w-[80%] border border-[#023047] rounded-full h-[35px] px-3  mt-2" onChange={weightPressed} />
                    <label className={`${labelStyledAgulha? 'label-active' : ''}`} htmlFor="">Peso (KG)</label>
                    </Box>

                    <Box className={`input-container ${labelStyledAgulha2? 'mt-5' : ''}`}>
                    <InputMask maskChar={null} mask='99.99' className="input-single bg-transparent outline-none text-black w-[80%] border border-[#023047] rounded-full h-[35px] px-3  mt-2" onChange={pricePressed} />
                    <label className={`${labelStyledAgulha2? 'label-active' : ''}`} htmlFor="">R$ Praticado</label>
                    </Box>
                </Box>
            </Box>

            <Box className={`single ${sidebarOpen? 'single-open' : null}`}>
                <Box className="single-image">
                    <img className="w-full h-full hover:scale-150 duration-500 cursor-pointer" src="https://uploaddeimagens.com.br/images/003/970/052/full/1563918703.jpg?1659704256" alt="carne-agulha" />
                </Box>

                <Box className="single-inputs">
                    <span className="text-[#830C0B] font-bold cut-name">Ponta de Peito</span>

                    <Box className={`input-container ${labelStyledPonta? 'mt-5' : ''}`}>
                    <InputMask maskChar={null} mask='99.999' className="input-single bg-transparent outline-none text-black w-[80%] border border-[#023047] rounded-full h-[35px] px-3  mt-2" onChange={weightPressed2} />
                    <label className={`${labelStyledPonta? 'label-active' : ''}`} htmlFor="">Peso (KG)</label>
                    </Box>

                    <Box className={`input-container ${labelStyledPonta2? 'mt-5' : ''}`}>
                    <InputMask maskChar={null} mask='99.99' className="input-single bg-transparent outline-none text-black w-[80%] border border-[#023047] rounded-full h-[35px] px-3  mt-2" onChange={pricePressed2} />
                    <label className={`${labelStyledPonta2? 'label-active' : ''}`} htmlFor="">R$ Praticado</label>
                    </Box>
                </Box>
            </Box>

            <Box className={`single ${sidebarOpen? 'single-open' : null}`}>
                <Box className="single-image">
                    <img className="w-full h-full hover:scale-150 duration-500 cursor-pointer" src="https://uploaddeimagens.com.br/images/003/970/411/full/O_A%C3%A7ougue-53.png?1659715964" alt="carne-agulha" />
                </Box>

                <Box className="single-inputs">
                    <span className="text-[#830C0B] font-bold cut-name">Costela Dianteiro</span>

                    <Box className={`input-container ${labelStyledDianteiro? 'mt-5' : ''}`}>
                    <InputMask maskChar={null} mask='99.999' className="input-single bg-transparent outline-none text-black w-[80%] border border-[#023047] rounded-full h-[35px] px-3  mt-2" onChange={weightPressed3} />
                    <label className={`${labelStyledDianteiro? 'label-active' : ''}`} htmlFor="">Peso (KG)</label>
                    </Box>

                    <Box className={`input-container ${labelStyledDianteiro2? 'mt-5' : ''}`}>
                    <InputMask maskChar={null} mask='99.99' className="input-single bg-transparent outline-none text-black w-[80%] border border-[#023047] rounded-full h-[35px] px-3  mt-2" onChange={pricePressed3} />
                    <label className={`${labelStyledDianteiro2? 'label-active' : ''}`} htmlFor="">R$ Praticado</label>
                    </Box>
                </Box>
            </Box>

            <Box className={`single ${sidebarOpen? 'single-open' : null}`}>
                <Box className="single-image">
                    <img className="w-[100%] hover:scale-150 duration-500 cursor-pointer" src="https://uploaddeimagens.com.br/images/003/970/420/full/WhatsApp_Image_2022-08-05_at_13.24.04.jpeg?1659716675" alt="carne-agulha" />
                </Box>

                <Box className="single-inputs">
                    <span className="text-[#830C0B] font-bold cut-name">Paleta S/Osso</span>
                    <Box className={`input-container ${labelStyledPaleta? 'mt-5' : ''}`}>
                    <InputMask maskChar={null} mask='99.999' className="input-single bg-transparent outline-none text-black w-[80%] border border-[#023047] rounded-full h-[35px] px-3 mt-2" onChange={weightPressed4} />
                    <label className={`${labelStyledPaleta? 'label-active' : ''}`} htmlFor="">Peso (KG)</label>
                    </Box>

                    <Box className={`input-container ${labelStyledPaleta2? 'mt-5' : ''}`}>
                    <InputMask maskChar={null} mask='99.99' className="input-single bg-transparent outline-none text-black w-[80%] border border-[#023047] rounded-full h-[35px] px-3 mt-2" onChange={pricePressed4} />
                    <label className={`${labelStyledPaleta2? 'label-active' : ''}`} htmlFor="">R$ Praticado</label>
                    </Box>
                </Box>
            </Box>

            <Box className={`single ${sidebarOpen? 'single-open' : null}`}>
                <Box className="single-image">
                    <img className="w-[100%] hover:scale-150 duration-500 cursor-pointer" src="https://uploaddeimagens.com.br/images/003/970/652/full/O_A%C3%A7ougue-49.png?1659725649" alt="carne-agulha" />
                </Box>

                <Box className="single-inputs">
                    <span className="text-[#830C0B] font-bold cut-name">Moida 2ª</span>
                    <Box className={`input-container ${labelStyledMoida? 'mt-5' : ''}`}>
                    <InputMask maskChar={null} mask='99.999' className="input-single bg-transparent outline-none text-black w-[80%] border border-[#023047] rounded-full h-[35px] px-3 mt-2" onChange={weightPressed5} />
                    <label className={`${labelStyledMoida? 'label-active' : ''}`} htmlFor="">Peso (KG)</label>
                    </Box>

                    <Box className={`input-container ${labelStyledMoida2? 'mt-5' : ''}`}>
                    <InputMask maskChar={null} mask='99.99' className="input-single bg-transparent outline-none text-black w-[80%] border border-[#023047] rounded-full h-[35px] px-3 mt-2" onChange={pricePressed5} />
                    <label className={`${labelStyledMoida2? 'label-active' : ''}`} htmlFor="">R$ Praticado</label>
                    </Box>
                </Box>
            </Box>

            <Box className={`single ${sidebarOpen? 'single-open' : null}`}>
                <Box className="single-image">
                    <img className="w-[100%] hover:scale-150 duration-500 cursor-pointer" src="https://uploaddeimagens.com.br/images/003/970/430/full/4chuleta.jpg?1659717527" alt="carne-agulha" />
                </Box>

                <Box className="single-inputs">
                    <span className="text-[#830C0B] font-bold cut-name">Chuleta</span>
                    <Box className={`input-container ${labelStyledChuleta? 'mt-5' : ''}`}>
                    <InputMask maskChar={null} mask='99.999' className="input-single bg-transparent outline-none text-black w-[80%] border border-[#023047] rounded-full h-[35px] px-3 mt-2" onChange={weightPressed6} />
                    <label className={`${labelStyledChuleta? 'label-active' : ''}`} htmlFor="">Peso (KG)</label>
                    </Box>

                    <Box className={`input-container ${labelStyledChuleta2? 'mt-5' : ''}`}>
                    <InputMask maskChar={null} mask='99.99' className="input-single bg-transparent outline-none text-black w-[80%] border border-[#023047] rounded-full h-[35px] px-3 mt-2" onChange={pricePressed6} />
                    <label className={`${labelStyledChuleta2? 'label-active' : ''}`} htmlFor="">R$ Praticado</label>
                    </Box>
                </Box>
            </Box>

            <Box className={`single ${sidebarOpen? 'single-open' : null}`}>
                <Box className="single-image">
                    <img className="w-[100%] hover:scale-150 duration-500 cursor-pointer" src="https://uploaddeimagens.com.br/images/003/970/447/full/BifeDoVazio_triciavieira.jpg?1659718281" alt="carne-agulha" />
                </Box>

                <Box className="single-inputs">
                    <span className="text-[#830C0B] font-bold cut-name">Vazio</span>
                    <Box className={`input-container ${labelStyledVazio? 'mt-5' : ''}`}>
                    <InputMask maskChar={null} mask='99.999' className="input-single bg-transparent outline-none text-black w-[80%] border border-[#023047] rounded-full h-[35px] px-3 mt-2" onChange={weightPressed7} />
                    <label className={`${labelStyledVazio? 'label-active' : ''}`} htmlFor="">Peso (KG)</label>
                    </Box>

                    <Box className={`input-container ${labelStyledVazio2? 'mt-5' : ''}`}>
                    <InputMask maskChar={null} mask='99.99' className="input-single bg-transparent outline-none text-black w-[80%] border border-[#023047] rounded-full h-[35px] px-3 mt-2" onChange={pricePressed7} />
                    <label className={`${labelStyledVazio2? 'label-active' : ''}`} htmlFor="">R$ Praticado</label>
                    </Box>
                </Box>
            </Box>

            <Box className={`single ${sidebarOpen? 'single-open' : null}`}>
                <Box className="single-image">
                    <img className="w-[100%] hover:scale-150 duration-500 cursor-pointer" src="https://uploaddeimagens.com.br/images/003/970/457/full/patinho_bovino_592c2f24ca2c0.jpg?1659718778" alt="carne-agulha" />
                </Box>

                <Box className="single-inputs">
                    <span className="text-[#830C0B] font-bold cut-name">Patinho</span>
                    <Box className={`input-container ${labelStyledPatinho? 'mt-5' : ''}`}>
                    <InputMask maskChar={null} mask='99.999' className="input-single bg-transparent outline-none text-black w-[80%] border border-[#023047] rounded-full h-[35px] px-3 mt-2" onChange={weightPressed8} />
                    <label className={`${labelStyledPatinho? 'label-active' : ''}`} htmlFor="">Peso (KG)</label>
                    </Box>

                    <Box className={`input-container ${labelStyledPatinho2? 'mt-5' : ''}`}>
                    <InputMask maskChar={null} mask='99.99' className="input-single bg-transparent outline-none text-black w-[80%] border border-[#023047] rounded-full h-[35px] px-3 mt-2" onChange={pricePressed8} />
                    <label className={`${labelStyledPatinho2? 'label-active' : ''}`} htmlFor="">R$ Praticado</label>
                    </Box>
                </Box>
            </Box>

            <Box className={`single ${sidebarOpen? 'single-open' : null}`}>
                <Box className="single-image">
                    <img className="w-[100%] hover:scale-150 duration-500 cursor-pointer" src="https://uploaddeimagens.com.br/images/003/970/472/full/O_A%C3%A7ougue-46.png?1659719580" alt="carne-agulha" />
                </Box>

                <Box className="single-inputs">
                    <span className="text-[#830C0B] font-bold cut-name">Coxão de Fora</span>
                    <Box className={`input-container ${labelStyledCoxao? 'mt-5' : ''}`}>
                    <InputMask maskChar={null} mask='99.999' className="input-single bg-transparent outline-none text-black w-[80%] border border-[#023047] rounded-full h-[35px] px-3 mt-2" onChange={weightPressed9} />
                    <label className={`${labelStyledCoxao? 'label-active' : ''}`} htmlFor="">Peso (KG)</label>
                    </Box>

                    <Box className={`input-container ${labelStyledCoxao2? 'mt-5' : ''}`}>
                    <InputMask maskChar={null} mask='99.99' className="input-single bg-transparent outline-none text-black w-[80%] border border-[#023047] rounded-full h-[35px] px-3 mt-2" onChange={pricePressed9} />
                    <label className={`${labelStyledCoxao2? 'label-active' : ''}`} htmlFor="">R$ Praticado</label>
                    </Box>
                </Box>
            </Box>

            <Box className={`single ${sidebarOpen? 'single-open' : null}`}>
                <Box className="single-image">
                    <img className="w-[100%] hover:scale-150 duration-500 cursor-pointer" src="https://uploaddeimagens.com.br/images/003/970/503/full/O_A%C3%A7ougue-24.png?1659720457" alt="carne-agulha" />
                </Box>

                <Box className="single-inputs">
                    <span className="text-[#830C0B] font-bold cut-name">Tatu</span>
                    <Box className={`input-container ${labelStyledTatu? 'mt-5' : ''}`}>
                    <InputMask maskChar={null} mask='99.999' className="input-single bg-transparent outline-none text-black w-[80%] border border-[#023047] rounded-full h-[35px] px-3 mt-2" onChange={weightPressed10} />
                    <label className={`${labelStyledTatu? 'label-active' : ''}`} htmlFor="">Peso (KG)</label>
                    </Box>

                    <Box className={`input-container ${labelStyledTatu2? 'mt-5' : ''}`}>
                    <InputMask maskChar={null} mask='99.99' className="input-single bg-transparent outline-none text-black w-[80%] border border-[#023047] rounded-full h-[35px] px-3 mt-2" onChange={pricePressed10} />
                    <label className={`${labelStyledTatu2? 'label-active' : ''}`} htmlFor="">R$ Praticado</label>
                    </Box>
                </Box>
            </Box>

            <Box className={`single ${sidebarOpen? 'single-open' : null}`}>
                <Box className="single-image">
                    <img className="w-[100%] hover:scale-150 duration-500 cursor-pointer" src="https://uploaddeimagens.com.br/images/003/970/522/full/O_A%C3%A7ougue-45.png?1659721101" alt="carne-agulha" />
                </Box>

                <Box className="single-inputs">
                    <span className="text-[#830C0B] font-bold cut-name">Coxão Mole</span>
                    <Box className={`input-container ${labelStyledCoxaoMole? 'mt-5' : ''}`}>
                    <InputMask maskChar={null} mask='99.999' className="input-single bg-transparent outline-none text-black w-[80%] border border-[#023047] rounded-full h-[35px] px-3 mt-2" onChange={weightPressed11} />
                    <label className={`${labelStyledCoxaoMole? 'label-active' : ''}`} htmlFor="">Peso (KG)</label>
                    </Box>

                    <Box className={`input-container ${labelStyledCoxaoMole2? 'mt-5' : ''}`}>
                    <InputMask maskChar={null} mask='99.99' className="input-single bg-transparent outline-none text-black w-[80%] border border-[#023047] rounded-full h-[35px] px-3 mt-2" onChange={pricePressed11} />
                    <label className={`${labelStyledCoxaoMole2? 'label-active' : ''}`} htmlFor="">R$ Praticado</label>
                    </Box>
                </Box>
            </Box>

            <Box className={`single ${sidebarOpen? 'single-open' : null}`}>
                <Box className="single-image">
                    <img className="w-[100%] hover:scale-150 duration-500 cursor-pointer" src="https://uploaddeimagens.com.br/images/003/970/528/full/O_A%C3%A7ougue-27.png?1659721279" alt="carne-agulha" />
                </Box>

                <Box className="single-inputs">
                    <span className="text-[#830C0B] font-bold cut-name">Maminha</span>
                    <Box className={`input-container ${labelStyledMaminha? 'mt-5' : ''}`}>
                    <InputMask maskChar={null} mask='99.999' className="input-single bg-transparent outline-none text-black w-[80%] border border-[#023047] rounded-full h-[35px] px-3 mt-2" onChange={weightPressed12} />
                    <label className={`${labelStyledMaminha? 'label-active' : ''}`} htmlFor="">Peso (KG)</label>
                    </Box>

                    <Box className={`input-container ${labelStyledMaminha2? 'mt-5' : ''}`}>
                    <InputMask maskChar={null} mask='99.99' className="input-single bg-transparent outline-none text-black w-[80%] border border-[#023047] rounded-full h-[35px] px-3 mt-2" onChange={pricePressed12} />
                    <label className={`${labelStyledMaminha2? 'label-active' : ''}`} htmlFor="">R$ Praticado</label>
                    </Box>
                </Box>
            </Box>

            <Box className={`single ${sidebarOpen? 'single-open' : null}`}>
                <Box className="single-image">
                    <img className="w-[100%] hover:scale-150 duration-500 cursor-pointer" src="https://uploaddeimagens.com.br/images/003/970/586/full/O_A%C3%A7ougue-42.png?1659722334" alt="carne-agulha" />
                </Box>

                <Box className="single-inputs">
                    <span className="text-[#830C0B] font-bold cut-name">Alcatra</span>
                    <Box className={`input-container ${labelStyledAlcatra? 'mt-5' : ''}`}>
                    <InputMask maskChar={null} mask='99.999' className="input-single bg-transparent outline-none text-black w-[80%] border border-[#023047] rounded-full h-[35px] px-3 mt-2" onChange={weightPressed13} />
                    <label className={`${labelStyledAlcatra? 'label-active' : ''}`} htmlFor="">Peso (KG)</label>
                    </Box>

                    <Box className={`input-container ${labelStyledAlcatra2? 'mt-5' : ''}`}>
                    <InputMask maskChar={null} mask='99.99' className="input-single bg-transparent outline-none text-black w-[80%] border border-[#023047] rounded-full h-[35px] px-3 mt-2" onChange={pricePressed13} />
                    <label className={`${labelStyledAlcatra2? 'label-active' : ''}`} htmlFor="">R$ Praticado</label>
                    </Box>
                </Box>
            </Box>

            <Box className={`single ${sidebarOpen? 'single-open' : null}`}>
                <Box className="single-image">
                    <img className="w-[100%] hover:scale-150 duration-500 cursor-pointer" src="https://uploaddeimagens.com.br/images/003/970/591/full/O_A%C3%A7ougue-29.png?1659722431" alt="carne-agulha" />
                </Box>

                <Box className="single-inputs">
                    <span className="text-[#830C0B] font-bold cut-name">Picanha</span>
                    <Box className={`input-container ${labelStyledPicanha? 'mt-5' : ''}`}>
                    <InputMask maskChar={null} mask='99.999' className="input-single bg-transparent outline-none text-black w-[80%] border border-[#023047] rounded-full h-[35px] px-3 mt-2" onChange={weightPressed14} />
                    <label className={`${labelStyledPicanha? 'label-active' : ''}`} htmlFor="">Peso (KG)</label>
                    </Box>

                    <Box className={`input-container ${labelStyledPicanha2? 'mt-5' : ''}`}>
                    <InputMask maskChar={null} mask='99.99' className="input-single bg-transparent outline-none text-black w-[80%] border border-[#023047] rounded-full h-[35px] px-3 mt-2" onChange={pricePressed14} />
                    <label className={`${labelStyledPicanha2? 'label-active' : ''}`} htmlFor="">R$ Praticado</label>
                    </Box>
                </Box>
            </Box>

            <Box className={`single ${sidebarOpen? 'single-open' : null}`}>
                <Box className="single-image">
                    <img className="w-[100%] hover:scale-150 duration-500 cursor-pointer" src="https://uploaddeimagens.com.br/images/003/970/597/full/O_A%C3%A7ougue-50.png?1659722563" alt="carne-agulha" />
                </Box>

                <Box className="single-inputs">
                    <span className="text-[#830C0B] font-bold cut-name">Filé</span>
                    <Box className={`input-container ${labelStyledFile? 'mt-5' : ''}`}>
                    <InputMask maskChar={null} mask='99.999' className="input-single bg-transparent outline-none text-black w-[80%] border border-[#023047] rounded-full h-[35px] px-3 mt-2" onChange={weightPressed15} />
                    <label className={`${labelStyledFile? 'label-active' : ''}`} htmlFor="">Peso (KG)</label>
                    </Box>

                    <Box className={`input-container ${labelStyledFile2? 'mt-5' : ''}`}>
                    <InputMask maskChar={null} mask='99.99' className="input-single bg-transparent outline-none text-black w-[80%] border border-[#023047] rounded-full h-[35px] px-3 mt-2" onChange={pricePressed15} />
                    <label className={`${labelStyledFile2? 'label-active' : ''}`} htmlFor="">R$ Praticado</label>
                    </Box>
                </Box>
            </Box>

            <Box className={`single ${sidebarOpen? 'single-open' : null}`}>
                <Box className="single-image">
                    <img className="w-[100%] hover:scale-150 duration-500 cursor-pointer" src="https://uploaddeimagens.com.br/images/003/970/616/full/O_A%C3%A7ougue-54.png?1659723556" alt="carne-agulha" />
                </Box>

                <Box className="single-inputs">
                    <span className="text-[#830C0B] font-bold cut-name">Costela</span>
                    <Box className={`input-container ${labelStyledCostela? 'mt-5' : ''}`}>
                    <InputMask maskChar={null} mask='99.999' className="input-single bg-transparent outline-none text-black w-[80%] border border-[#023047] rounded-full h-[35px] px-3 mt-2" onChange={weightPressed16} />
                    <label className={`${labelStyledCostela? 'label-active' : ''}`} htmlFor="">Peso (KG)</label>
                    </Box>

                    <Box className={`input-container ${labelStyledCostela2? 'mt-5' : ''}`}>
                    <InputMask maskChar={null} mask='99.99' className="input-single bg-transparent outline-none text-black w-[80%] border border-[#023047] rounded-full h-[35px] px-3 mt-2" onChange={pricePressed16} />
                    <label className={`${labelStyledCostela2? 'label-active' : ''}`} htmlFor="">R$ Praticado</label>
                    </Box>
                </Box>
            </Box>

            <Box className={`single ${sidebarOpen? 'single-open' : null}`}>
                <Box className="single-image">
                    <img className="w-[100%] hover:scale-150 duration-500 cursor-pointer" src="https://uploaddeimagens.com.br/images/003/970/621/full/O_A%C3%A7ougue-52.png?1659723649" alt="carne-agulha" />
                </Box>

                <Box className="single-inputs">
                    <span className="text-[#830C0B] font-bold cut-name">Costela Minga</span>
                    <Box className={`input-container ${labelStyledMinga? 'mt-5' : ''}`}>
                    <InputMask maskChar={null} mask='99.999' className="input-single bg-transparent outline-none text-black w-[80%] border border-[#023047] rounded-full h-[35px] px-3 mt-2" onChange={weightPressed17} />
                    <label className={`${labelStyledMinga? 'label-active' : ''}`} htmlFor="">Peso (KG)</label>
                    </Box>

                    <Box className={`input-container ${labelStyledMinga2? 'mt-5' : ''}`}>
                    <InputMask maskChar={null} mask='99.99' className="input-single bg-transparent outline-none text-black w-[80%] border border-[#023047] rounded-full h-[35px] px-3 mt-2" onChange={pricePressed17} />
                    <label className={`${labelStyledMinga2? 'label-active' : ''}`} htmlFor="">R$ Praticado</label>
                    </Box>
                </Box>
            </Box>

            <Box className={`single ${sidebarOpen? 'single-open' : null}`}>
                <Box className="single-image">
                    <img className="w-[100%] hover:scale-150 duration-500 cursor-pointer" src="https://uploaddeimagens.com.br/images/003/970/622/full/O_A%C3%A7ougue-26.png?1659723762" alt="carne-agulha" />
                </Box>

                <Box className="single-inputs">
                    <span className="text-[#830C0B] font-bold cut-name">Fraldinha</span>
                    <Box className={`input-container ${labelStyledFraldinha? 'mt-5' : ''}`}>
                    <InputMask maskChar={null} mask='99.999' className="input-single bg-transparent outline-none text-black w-[80%] border border-[#023047] rounded-full h-[35px] px-3 mt-2" onChange={weightPressed18} />
                    <label className={`${labelStyledFraldinha? 'label-active' : ''}`} htmlFor="">Peso (KG)</label>
                    </Box>

                    <Box className={`input-container ${labelStyledFraldinha2? 'mt-5' : ''}`}>
                    <InputMask maskChar={null} mask='99.99' className="input-single bg-transparent outline-none text-black w-[80%] border border-[#023047] rounded-full h-[35px] px-3 mt-2" onChange={pricePressed18} />
                    <label className={`${labelStyledFraldinha2? 'label-active' : ''}`} htmlFor="">R$ Praticado</label>
                    </Box>
                </Box>
            </Box>

            <Box className={`single ${sidebarOpen? 'single-open' : null}`}>
                <Box className="single-image">
                    <img className="w-[100%] hover:scale-150 duration-500 cursor-pointer" src="https://uploaddeimagens.com.br/images/003/970/636/full/O_A%C3%A7ougue-51.png?1659724396" alt="carne-agulha" />
                </Box>

                <Box className="single-inputs">
                    <span className="text-[#830C0B] font-bold cut-name">Osso Buco</span>
                    <Box className={`input-container ${labelStyledBuco? 'mt-5' : ''}`}>
                    <InputMask maskChar={null} mask='99.999' className="input-single bg-transparent outline-none text-black w-[80%] border border-[#023047] rounded-full h-[35px] px-3 mt-2" onChange={weightPressed19} />
                    <label className={`${labelStyledBuco? 'label-active' : ''}`} htmlFor="">Peso (KG)</label>
                    </Box>

                    <Box className={`input-container ${labelStyledBuco2? 'mt-5' : ''}`}>
                    <InputMask maskChar={null} mask='99.99' className="input-single bg-transparent outline-none text-black w-[80%] border border-[#023047] rounded-full h-[35px] px-3 mt-2" onChange={pricePressed19} />
                    <label className={`${labelStyledBuco2? 'label-active' : ''}`} htmlFor="">R$ Praticado</label>
                    </Box>
                </Box>
            </Box>

        </Box>
        

        </Box>
        </Box>
        </ContainerHome>
        </Box>
        
        <Footer />
        </Box>
    )
}


