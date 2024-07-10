import { useDispatch, useSelector } from "react-redux";

// Create a custom useDispatch hook
export const useAppDispatch = () => useDispatch();
// Use the existing useSelector hook
export const useAppSelector = useSelector;
