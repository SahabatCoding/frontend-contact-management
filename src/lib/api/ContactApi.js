export const createContact = async (token, contact)=>{
    return fetch(`${import.meta.env.VITE_API_PATH}/contacts`,{
        method : "POST",
        headers : {
            "Content-Type" : "application/json",
            "Accept" : "application/json",
            "Authorization" : token
        },
        body : JSON.stringify({
            first_name : contact.first_name,
            last_name : contact.last_name,
            email : contact.email,
            phone : contact.phone
        })
    })
}