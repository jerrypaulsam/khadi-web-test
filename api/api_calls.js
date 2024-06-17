import axios from "axios";

const BaseUrl = {
    development: process.env.NEXT_PUBLIC_TEST_URL,
    production: process.env.NEXT_PUBLIC_BASE_URL,
  }[process.env.NODE_ENV];


  export async function getVisitorCount() {
    const res = await fetch(`${BaseUrl}base/visitor-count/`);

    if (res.status != 200) {
        return 2580;
    } else {
        const visitor_count = await res.json();
        console.log(visitor_count['visitor_cnt']);

        return visitor_count['visitor_cnt'];
    }

}

export async function getScrollText() {
  const res = await fetch(`${BaseUrl}base/scroll_text/`);

  if (res.status != 200) {
      return "Error";
  } else {
      const text = await res.json();
      return text.results;
  }
}

export async function getNewsBoard() {
  const res = await fetch(`${BaseUrl}base/news_board/`);

  if (res.status != 200) {
      return "Error";
  } else {
      const news = await res.json();
      return news.results;
  }
}

export async function getKhadiSchemes() {
  const res = await fetch(`${BaseUrl}base/khadi_schemes/`);

  if (res.status != 200) {
      return "Error";
  } else {
      const schemes = await res.json();
      return schemes.results;
  }
}

export async function getSneakPeaks() {
  const res = await fetch(`${BaseUrl}base/khadi_sneak_peaks/`);

  if (res.status != 200) {
      return "Error";
  } else {
      const sneaks = await res.json();

      return sneaks.results;
  }
}

export async function getAlbums() {
  const res = await fetch(`${BaseUrl}base/albums/`);

  if (res.status != 200) {
      return "Error";
  } else {
      const albums = await res.json();
      // console.log(visitor_count['visitor_cnt']);

      return albums.results;
  }
}

export async function getAlbumPhotos(slug) {
  const res = await fetch(`${BaseUrl}base/khadi_photos/${slug}/photos/`);
  
  if (res.status != 200) {
      return "Error";
  } else {
      const photos = await res.json();
      return photos.results;
  }
}



export async function getImportantOfficials() {
  const res = await fetch(`${BaseUrl}base/important_officials/`);

  if (res.status != 200) {
      return "Error";
  } else {
      const officials = await res.json();
      // console.log(visitor_count['visitor_cnt']);

      return officials.results;
  }
}

export async function getProjectOfficials() {
  const res = await fetch(`${BaseUrl}base/project_officers/`);

  if (res.status != 200) {
      return "Error";
  } else {
      const officials = await res.json();
      // console.log(visitor_count['visitor_cnt']);

      return officials.results;
  }
}

export async function getTenderNotices() {
  const res = await fetch(`${BaseUrl}base/tender_notices`);

  if (res.status != 200) {
      return "Error";
  } else {
      const notices = await res.json();
      // console.log(visitor_count['visitor_cnt']);

      return notices.results;
  }
}


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

