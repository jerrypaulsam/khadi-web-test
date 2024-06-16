import axios from "axios";

const BaseUrl = {
    development: process.env.NEXT_PUBLIC_TEST_URL,
    production: process.env.NEXT_PUBLIC_BASE_URL,
  }[process.env.NODE_ENV];


  export async function subscriptionEmail(email) {
    let statusCode = 200;
    const res = await axios.post(
        `${BaseUrl}base/subscribe/`,
        {"email": email,},
        {headers: {"Content-Type": "multipart/form-data"}}

        ).catch(function (error) {
            if (error.response) {
                statusCode = error.response.status;
                console.log(error.response.status);
            } else {
              // Something happened in setting up the request that triggered an Error
              statusCode = 111;
              console.log('Error', error.message);
            }
            
          });
    return statusCode;
}

export async function contactFormAPI(name, email, message) {
    let statusCode = 200;

    const res = await axios.post(
        `${BaseUrl}base/contact/`,
       {"email": email, "name": name, "message": message},
       {headers: {"Content-Type": "multipart/form-data"}}

    ).catch(function (error) {
        if (error.response) {
            statusCode = error.response.status;
            console.log(error.response.status);
        } else {
          // Something happened in setting up the request that triggered an Error
          statusCode = 111;
          console.log('Error', error.message);
        }
        
      });

      
    if (statusCode === 201 || statusCode === 200) {
        return "Success";

    } else {
        return "Error";
    }
    
}

