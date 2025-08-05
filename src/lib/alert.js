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

export const alertConfirm = async(message) =>{
    const result = await Swal.fire({
        icon : "question",
        title : "Are you sure?",
        text : message,
        showCancelButton : true,
        confirmButtonColor : "#d33",
        cancelButtonColor : "#3085d6",
        confirmButtonText : "Yes"
    })
    return result.isConfirmed

}