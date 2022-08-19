import { Box } from "@mui/material";

import { AiFillExclamationCircle } from 'react-icons/ai'
import { useDrawerContext } from "../contexts/MainContext";

export function Toast() {

  const { toast } = useDrawerContext()

  return (
    <Box className={`absolute right-5 top-3 bg-red-600 border border-white w-[320px] h-[35px] rounded-md px-2 flex items-center ${toast? 'opacity-100 toast-animation' : 'opacity-0'}`}>
      <span className="text-white font-semibold flex items-center gap-2">
        <Box>
          <AiFillExclamationCircle size={20}/>
        </Box>
        Função ainda em desenvolvimento!
      </span>
    </Box>
  )
}