import axios from "axios";

const url = "https://randomuser.me/api/?inc=name,email,dob,phone,picture&results="

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
    search : function() {
    return axios.get(url)
}}
