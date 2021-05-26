import axios from "axios";

const url = "https://randomuser.me/api/?inc=name,email,dob,phone,picture&results=20";

// Export an object with a "search" method that searches the Giphy API for the passed query

// eslint-disable-next-line
export default {
    search : function() {
        return axios.get(url)
}};
