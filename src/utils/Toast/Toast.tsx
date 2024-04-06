import { toast } from "react-toastify";

//Toaster for Sucessfully Auth
export const ToastOnSuccess = (str: string) => {
  toast.success(str);
};
//Toaster for Failure Auth

export const ToastOnFailure = (str: string) => {
  toast.error(str);
};
