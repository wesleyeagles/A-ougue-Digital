import { colorChannel } from '@mui/system';
import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useGetUserByEmailQuery } from '../graphql/generated';

/* Context para o toggle do menu lateral nas versões mobile */


interface IDrawerContextData {
    isMenuOpen: boolean;
    handleMenuClick: () => void;
    scrollToTop: () => void;
    totalWeight: number;
    totalPrice: number;
    custoKGLost: number;
    price: number; price2: number; price3: number; price4: number; price5: number; price6: number; price7: number; price8: number; price9: number; price10: number; price11: number; price12: number; price13: number; price14: number; price15: number; price16: number; price17: number; price18: number; price19: number; 
    weight: number; weight2: number; weight3: number; weight4: number; weight5: number; weight6: number; weight7: number; weight8: number; weight9: number; weight10: number; weight11: number; weight12: number; weight13: number; weight14: number; weight15: number; weight16: number; weight17: number; weight18: number; weight19: number;
    weightLost: number;
    percentageLost: number;
    pesoTotal: number;
    totalPercentage: number;
    cost: string;
    totalCost: number;
    CustoKGFormated: number;
    totalProfitInteger: number;
    totalProfit: string;
    ST: number;
    labelStyled: boolean;
    labelStyledAgulha: boolean; labelStyledAgulha2: boolean;
    labelStyledPonta: boolean; labelStyledPonta2: boolean;
    labelStyledDianteiro: boolean; labelStyledDianteiro2: boolean;
    labelStyledPaleta: boolean; labelStyledPaleta2: boolean;
    labelStyledMoida: boolean; labelStyledMoida2: boolean;
    labelStyledChuleta: boolean; labelStyledChuleta2: boolean;
    labelStyledVazio: boolean; labelStyledVazio2: boolean;
    labelStyledPatinho: boolean; labelStyledPatinho2: boolean;
    labelStyledCoxao: boolean; labelStyledCoxao2: boolean;
    labelStyledTatu: boolean; labelStyledTatu2: boolean;
    labelStyledCoxaoMole: boolean; labelStyledCoxaoMole2: boolean;
    labelStyledMaminha: boolean; labelStyledMaminha2: boolean;
    labelStyledAlcatra: boolean; labelStyledAlcatra2: boolean;
    labelStyledPicanha: boolean; labelStyledPicanha2: boolean;
    labelStyledFile: boolean; labelStyledFile2: boolean;
    labelStyledCostela: boolean; labelStyledCostela2: boolean;
    labelStyledMinga: boolean; labelStyledMinga2: boolean;
    labelStyledFraldinha: boolean; labelStyledFraldinha2: boolean;
    labelStyledBuco: boolean; labelStyledBuco2: boolean;
    isDrawerOpen: boolean;
    setIsDrawerOpen:( isDrawerOpen: boolean) => void;
    setLabelStyled: (labelStyled: boolean) => void;
    setLabelStyledAgulha: (labelStyledAgulha: boolean) => void; setLabelStyledAgulha2: (labelStyledAgulha2: boolean) => void;
    setLabelStyledPonta: (labelStyledPonta: boolean) => void; setLabelStyledPonta2: (labelStyledPonta2: boolean) => void;
    setLabelStyledDianteiro: (labelStyledDianteiro: boolean) => void; setLabelStyledDianteiro2: (labelStyledDianteiro2: boolean) => void;
    setLabelStyledPaleta: (labelStyledPaleta: boolean) => void; setLabelStyledPaleta2: (labelStyledPaleta2: boolean) => void;
    setLabelStyledMoida: (labelStyledMoida: boolean) => void; setLabelStyledMoida2: (labelStyledMoida2: boolean) => void;
    setLabelStyledChuleta: (labelStyledChuleta: boolean) => void; setLabelStyledChuleta2: (labelStyledChuleta2: boolean) => void;
    setLabelStyledVazio: (labelStyledVazio: boolean) => void; setLabelStyledVazio2: (labelStyledVazio2: boolean) => void;
    setLabelStyledPatinho: (labelStyledPatinho: boolean) => void; setLabelStyledPatinho2: (labelStyledPatinho2: boolean) => void;
    setLabelStyledCoxao: (labelStyledCoxao: boolean) => void; setLabelStyledCoxao2: (labelStyledCoxao2: boolean) => void;
    setLabelStyledTatu: (labelStyledTatu: boolean) => void; setLabelStyledTatu2: (labelStyledTatu2: boolean) => void;
    setLabelStyledCoxaoMole: (labelStyledCoxaoMole: boolean) => void; setLabelStyledCoxaoMole2: (labelStyledCoxaoMole2: boolean) => void;
    setLabelStyledMaminha: (labelStyledMaminha: boolean) => void; setLabelStyledMaminha2: (labelStyledMaminha2: boolean) => void;
    setLabelStyledAlcatra: (labelStyledAlcatra: boolean) => void; setLabelStyledAlcatra2: (labelStyledAlcatra2: boolean) => void;
    setLabelStyledPicanha: (labelStyledPicanha: boolean) => void; setLabelStyledPicanha2: (labelStyledPicanha2: boolean) => void;
    setLabelStyledFile: (labelStyledFile: boolean) => void; setLabelStyledFile2: (labelStyledFile2: boolean) => void;
    setLabelStyledCostela: (labelStyledCostela: boolean) => void; setLabelStyledCostela2: (labelStyledCostela2: boolean) => void;
    setLabelStyledMinga: (labelStyledMinga: boolean) => void; setLabelStyledMinga2: (labelStyledMinga2: boolean) => void;
    setLabelStyledFraldinha: (labelStyledFraldinha: boolean) => void; setLabelStyledFraldinha2: (labelStyledFraldinha2: boolean) => void;
    setLabelStyledBuco: (labelStyledBuco: boolean) => void; setLabelStyledBuco2: (labelStyledBuco2: boolean) => void;
    sidebarOpen: boolean;
    setSideBarOpen: (sidebarOpen: boolean) => void;
    toggleSideBar: () => void; 
    handleToast: () => void; 
    removeToken: () => void;
    setToast: (toast: boolean) => void;
    toast: boolean;
    keyPressed: (e: any) => void;
    setCost: (cost: string) => void; 
    setPesoTotal: (pesoTotal: number) => void;
    setWeight: (weight: number) => void; setWeight2: (weight2: number) => void; setWeight3: (weight3: number) => void; setWeight4: (weight4: number) => void; setWeight5: (weight5: number) => void; setWeight6: (weight6: number) => void; setWeight7: (weight7: number) => void; setWeight8: (weight8: number) => void; setWeight9: (weight9: number) => void; setWeight10: (weight10: number) => void; setWeight11: (weight11: number) => void; setWeight12: (weight12: number) => void; setWeight13: (weight13: number) => void; setWeight14: (weight14: number) => void; setWeight15: (weight15: number) => void; setWeight16: (weight16: number) => void; setWeight17: (weight17: number) => void; setWeight18: (weight18: number) => void; setWeight19: (weight19: number) => void;
    setPrice: (price: number) => void; setPrice2: (price2: number) => void; setPrice3: (price3: number) => void; setPrice4: (price4: number) => void; setPrice5: (price5: number) => void; setPrice6: (price6: number) => void; setPrice7: (price7: number) => void; setPrice8: (price8: number) => void; setPrice9: (price9: number) => void; setPrice10: (price10: number) => void; setPrice11: (price11: number) => void; setPrice12: (price12: number) => void; setPrice13: (price13: number) => void; setPrice14: (price14: number) => void; setPrice15: (price15: number) => void; setPrice16: (price16: number) => void; setPrice17: (price17: number) => void; setPrice18: (price18: number) => void; setPrice19: (price19: number) => void; 
    percentage: number; percentage2: number; percentage3: number; percentage4: number; percentage5: number; percentage6: number; percentage7: number; percentage8: number; percentage9: number; percentage10: number; percentage11: number; percentage12: number; percentage13: number; percentage14: number; percentage15: number; percentage16: number; percentage17: number; percentage18: number; percentage19: number; 
    total: number; total2: number; total3: number; total4: number; total5: number; total6: number; total7: number; total8: number; total9: number; total10: number; total11: number; total12: number; total13: number; total14: number; total15: number; total16: number; total17: number; total18: number; total19: number; 

}

const DrawerContext = createContext ({} as IDrawerContextData)

const responsive = window.matchMedia('(max-width: 1024px)');

export const useDrawerContext = () => {
    return useContext(DrawerContext);

}


const removeToken = () => {
  localStorage.removeItem('accountEmail')
}




const body = document.querySelector("body")

body?.classList.add('overflow-auto')



type Props = {
    children: React.ReactNode
};
export const MenuContext = ({children}:Props) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    const [isMenuOpen, setMenuOpen] = useState(false);

    const [sidebarOpen, setSideBarOpen] = useState(false)

    const toggleSideBar = () => {
        setSideBarOpen(!sidebarOpen)
    }

    const [toast, setToast] = useState(false)

    const handleToast = () => {
      setToast(true)

      setTimeout(() => {
        setToast(false)
      }, 3000);
    }


    const [cost, setCost] = useState("")
    const [labelStyled, setLabelStyled] = useState(false)

    const [labelStyledAgulha, setLabelStyledAgulha] = useState(false)
    const [labelStyledAgulha2, setLabelStyledAgulha2] = useState(false)

    const [labelStyledPonta, setLabelStyledPonta] = useState(false)
    const [labelStyledPonta2, setLabelStyledPonta2] = useState(false)

    const [labelStyledDianteiro, setLabelStyledDianteiro] = useState(false)
    const [labelStyledDianteiro2, setLabelStyledDianteiro2] = useState(false)

    const [labelStyledPaleta, setLabelStyledPaleta] = useState(false)
    const [labelStyledPaleta2, setLabelStyledPaleta2] = useState(false)

    const [labelStyledMoida, setLabelStyledMoida] = useState(false)
    const [labelStyledMoida2, setLabelStyledMoida2] = useState(false)

    const [labelStyledChuleta, setLabelStyledChuleta] = useState(false)
    const [labelStyledChuleta2, setLabelStyledChuleta2] = useState(false)

    const [labelStyledVazio, setLabelStyledVazio] = useState(false)
    const [labelStyledVazio2, setLabelStyledVazio2] = useState(false)

    const [labelStyledPatinho, setLabelStyledPatinho] = useState(false)
    const [labelStyledPatinho2, setLabelStyledPatinho2] = useState(false)

    const [labelStyledCoxao, setLabelStyledCoxao] = useState(false)
    const [labelStyledCoxao2, setLabelStyledCoxao2] = useState(false)

    const [labelStyledTatu, setLabelStyledTatu] = useState(false)
    const [labelStyledTatu2, setLabelStyledTatu2] = useState(false)

    const [labelStyledCoxaoMole, setLabelStyledCoxaoMole] = useState(false)
    const [labelStyledCoxaoMole2, setLabelStyledCoxaoMole2] = useState(false)

    const [labelStyledMaminha, setLabelStyledMaminha] = useState(false)
    const [labelStyledMaminha2, setLabelStyledMaminha2] = useState(false)

    const [labelStyledAlcatra, setLabelStyledAlcatra] = useState(false)
    const [labelStyledAlcatra2, setLabelStyledAlcatra2] = useState(false)

    const [labelStyledPicanha, setLabelStyledPicanha] = useState(false)
    const [labelStyledPicanha2, setLabelStyledPicanha2] = useState(false)

    const [labelStyledFile, setLabelStyledFile] = useState(false)
    const [labelStyledFile2, setLabelStyledFile2] = useState(false)

    const [labelStyledCostela, setLabelStyledCostela] = useState(false)
    const [labelStyledCostela2, setLabelStyledCostela2] = useState(false)

    const [labelStyledMinga, setLabelStyledMinga] = useState(false)
    const [labelStyledMinga2, setLabelStyledMinga2] = useState(false)

    const [labelStyledFraldinha, setLabelStyledFraldinha] = useState(false)
    const [labelStyledFraldinha2, setLabelStyledFraldinha2] = useState(false)

    const [labelStyledBuco, setLabelStyledBuco] = useState(false)
    const [labelStyledBuco2, setLabelStyledBuco2] = useState(false)



    let ST = parseFloat(cost) * 2.1 / 100

    const keyPressed = (e: any) => {

      setCost(e.currentTarget.value)

      if (e.currentTarget.value.length > 0) {
        setLabelStyled(true)
      } else {
        setLabelStyled(false)
      }
      
    }
    

    

    let CustoKGFormated = parseFloat(ST.toFixed(2)) + parseFloat(cost)
    let totalCost = (parseFloat(CustoKGFormated.toFixed(2)) * 113)

   


    const [weight, setWeight] = useState(0)
    const [weight2, setWeight2] = useState(0)
    const [weight3, setWeight3] = useState(0)
    const [weight4, setWeight4] = useState(0)
    const [weight5, setWeight5] = useState(0)
    const [weight6, setWeight6] = useState(0)
    const [weight7, setWeight7] = useState(0)
    const [weight8, setWeight8] = useState(0)
    const [weight9, setWeight9] = useState(0)
    const [weight10, setWeight10] = useState(0)
    const [weight11, setWeight11] = useState(0)
    const [weight12, setWeight12] = useState(0)
    const [weight13, setWeight13] = useState(0)
    const [weight14, setWeight14] = useState(0)
    const [weight15, setWeight15] = useState(0)
    const [weight16, setWeight16] = useState(0)
    const [weight17, setWeight17] = useState(0)
    const [weight18, setWeight18] = useState(0)
    const [weight19, setWeight19] = useState(0)

    const convertedWeight = weight
    const convertedWeight2 = weight2
    const convertedWeight3 = weight3
    const convertedWeight4 = weight4
    const convertedWeight5 = weight5
    const convertedWeight6 = weight6
    const convertedWeight7 = weight7
    const convertedWeight8 = weight8
    const convertedWeight9 = weight9
    const convertedWeight10 = weight10
    const convertedWeight11 = weight11
    const convertedWeight12 = weight12
    const convertedWeight13 = weight13
    const convertedWeight14 = weight14
    const convertedWeight15 = weight15
    const convertedWeight16 = weight16
    const convertedWeight17 = weight17
    const convertedWeight18 = weight18
    const convertedWeight19 = weight19

    let totalWeight = Number(weight) + Number(weight2) + Number(weight3) + Number(weight4) + Number(weight5) + Number(weight6) + Number(weight7) + Number(weight8) + Number(weight9) + Number(weight10) + Number(weight11) + Number(weight12) + Number(weight13) + Number(weight14) + Number(weight15) + Number(weight16) + Number(weight17) + Number(weight18) + Number(weight19)
    
    const weightLost = 113.000 - totalWeight
    

    const [pesoTotal, setPesoTotal] = useState(totalWeight)


    const percentage = convertedWeight / 113
    const percentage2 = convertedWeight2 / 113
    const percentage3 = convertedWeight3 / 113
    const percentage4 = convertedWeight4 / 113
    const percentage5 = convertedWeight5 / 113
    const percentage6 = convertedWeight6 / 113
    const percentage7 = convertedWeight7 / 113
    const percentage8 = convertedWeight8 / 113
    const percentage9 = convertedWeight9 / 113
    const percentage10 = convertedWeight10 / 113
    const percentage11 = convertedWeight11 / 113
    const percentage12 = convertedWeight12 / 113
    const percentage13 = convertedWeight13 / 113
    const percentage14 = convertedWeight14 / 113
    const percentage15 = convertedWeight15 / 113
    const percentage16 = convertedWeight16 / 113
    const percentage17 = convertedWeight17 / 113
    const percentage18 = convertedWeight18 / 113
    const percentage19 = convertedWeight19 / 113

    const totalPercentage = percentage + percentage2 + percentage3 + percentage4 + percentage5 + percentage6 + percentage7 + percentage8 + percentage9 + percentage10 + percentage11 + percentage12 + percentage13 + percentage14 + percentage15 + percentage16 + percentage17 + percentage18 + percentage19


    const percentageLost = (100 - (totalPercentage * 100))

    const custoKGLost = weightLost * 1.3



    const [price, setPrice] = useState(0)
    const [price2, setPrice2] = useState(0)
    const [price3, setPrice3] = useState(0)
    const [price4, setPrice4] = useState(0)
    const [price5, setPrice5] = useState(0)
    const [price6, setPrice6] = useState(0)
    const [price7, setPrice7] = useState(0)
    const [price8, setPrice8] = useState(0)
    const [price9, setPrice9] = useState(0)
    const [price10, setPrice10] = useState(0)
    const [price11, setPrice11] = useState(0)
    const [price12, setPrice12] = useState(0)
    const [price13, setPrice13] = useState(0)
    const [price14, setPrice14] = useState(0)
    const [price15, setPrice15] = useState(0)
    const [price16, setPrice16] = useState(0)
    const [price17, setPrice17] = useState(0)
    const [price18, setPrice18] = useState(0)
    const [price19, setPrice19] = useState(0)


    
    const total = weight * price
    const total2 = weight2 * price2
    const total3 = weight3 * price3
    const total4 = weight4 * price4
    const total5 = weight5 * price5
    const total6 = weight6 * price6
    const total7 = weight7 * price7
    const total8 = weight8 * price8
    const total9 = weight9 * price9
    const total10 = weight10 * price10
    const total11 = weight11 * price11
    const total12 = weight12 * price12
    const total13 = weight13 * price13
    const total14 = weight14 * price14
    const total15 = weight15 * price15
    const total16 = weight16 * price16
    const total17 = weight17 * price17
    const total18 = weight18 * price18
    const total19 = weight19 * price19

    const totalPrice = total + total2 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11 + total12 + total13 + total14 + total15 + total16 + total17 + total18 + total19

    const totalProfit = (((totalPrice / totalCost) - 1) * 100).toFixed(2)

    const totalProfitInteger = totalPrice - totalCost

  


    /* Usado useCallback para previnir possiveis loops infinitos */
    const handleMenuClick = useCallback(() => {

    
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });

        setTimeout(() => {

          if (body?.classList.contains('overflow-auto')) {
              body?.classList.add('overflow-hidden')
              body?.classList.remove('overflow-auto')
  
            } else {
              body?.classList.remove('overflow-hidden')
              body?.classList.add('overflow-auto')
              
            }

            
        }, 600)

        setMenuOpen(oldMenuOpen => !oldMenuOpen)


    }, [])


    const scrollToTop = () => {
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }, 100);
        
      };


    return (
        <DrawerContext.Provider value={{isMenuOpen, handleMenuClick, scrollToTop, 
        setWeight, setWeight2, setWeight3, setWeight4, setWeight5, setWeight6, setWeight7, setWeight8, setWeight9, setWeight10, setWeight11, setWeight12, setWeight13, setWeight14, setWeight15, setWeight16, setWeight17, setWeight18, setWeight19,
        setPrice, setPrice2, setPrice3, setPrice4, setPrice5, setPrice6, setPrice7, setPrice8, setPrice9, setPrice10, setPrice11, setPrice12, setPrice13, setPrice14, setPrice15, setPrice16, setPrice17, setPrice18, setPrice19, 
        percentage, percentage2, percentage3, percentage4, percentage5, percentage6, percentage7, percentage8, percentage9, percentage10, percentage11, percentage12, percentage13, percentage14, percentage15, percentage16, percentage17, percentage18, percentage19, 
        total, total2, total3, total4, total5, total6, total7, total8, total9, total10, total11, total12, total13, total14, total15, total16, total17, total18, total19,
        totalWeight,
        totalPrice,
        weight, weight2, weight3, weight4, weight5, weight6, weight7, weight8, weight9, weight10, weight11, weight12, weight13, weight14, weight15, weight16, weight17, weight18, weight19,
        weightLost,
        setPesoTotal,
        price, price2, price3, price4, price5, price6, price7, price8, price9, price10, price11, price12, price13, price14, price15, price16, price17, price18, price19,
        pesoTotal,
        custoKGLost,
        keyPressed,
        setLabelStyled,
        totalPercentage,
        percentageLost,
        labelStyled,
        setCost,
        totalCost,
        CustoKGFormated,
        ST,
        cost,
        totalProfitInteger,
        totalProfit,
        sidebarOpen,
        setSideBarOpen,
        toggleSideBar,
        removeToken,

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

        toast, setToast, handleToast,
        isDrawerOpen, setIsDrawerOpen,


        

        
        }}>



          {children}
        </DrawerContext.Provider>
    )
}