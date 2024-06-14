import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import { AppDispatch, Rootstate } from "./type"


export const useAppDispatch = () => {
    return useDispatch<AppDispatch>()
}

export const useAppSelector: TypedUseSelectorHook<Rootstate> = useSelector;