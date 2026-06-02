import {ToastContainer, toast, Bounce} from 'react-toastify'

//notrfication handling with toastify
const noteSuccessHandler = (message) =>{
    toast.success(message,{
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true, 
        progress: undefined,
        theme: "colored",
        transition: Bounce,
    })
}
const noteWarningHandler = (message) =>{
    toast.warn(message,{
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
    })
}
const noteErrorHandler = (message) =>{
    toast.error(message,{
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    transition: Bounce,
    })
}
const notify = {
    error: noteErrorHandler,
    success: noteSuccessHandler,
    warn: noteWarningHandler 
}
export{
    notify
}