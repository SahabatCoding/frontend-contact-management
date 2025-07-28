import Swal from "sweetalert2"

export const alertSuccess = async (messege) =>{
    return Swal.fire({
        icon: 'success',
        title : 'success',
        text : messege,
    })
}

export const alertError = async (messege) =>{
    return Swal.fire({
        icon: 'error',
        title : 'Ups',
        text : messege,
    })
}