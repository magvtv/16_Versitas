import axios from "axios"


const signupRest = async(username, secret, email, first_name, last_name) => {
    return await axios.post("https://api.chatengine.io/users/", 
    {username, email, secret, first_name, last_name},
    {
        headers: {
            "private-key": import.meta.env.VITE_CHAT_ENGINE_PRIVATE_KEY
        };
    })
} 


const loginRest = async(username, secret) => {
    return await axios.get("https://api.chatengine.io/users/me/", {
        headers: {
            "project-id": import meta.env.VITE_CHAT_ENGINE_PROJECT_ID,
            "user-name": username,
            "user-secret": secret
        }
    })
}