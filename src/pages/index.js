import { useState, useEffect } from "react"
//import { ContextExclusionPlugin } from "webpack";

export default function Home() {
  const [countryCode, setCountryCode] = useState(0)
  useEffect(() => {
    fetch(`${process.env.API_RELOCATION}`)
      .then(response => response.json()) // parse JSON from request
      .then(resultData => {
        setCountryCode(resultData.country_code)
      })
  }, [])
  console.log("Country",countryCode);
  console.log(countryCode=== 'CL');
  if(countryCode === 'CL') {
    window.location = '/chile';
    //window.location = 'https://www.mallplaza.com/cl';
  }else if(countryCode === 'CO') {
    window.location = '/colombia';
      //window.location = 'https://www.mallplaza.com/co';
  }else if(countryCode === 'PE') {
    window.location = '/peru';
    //window.location = 'https://www.mallplaza.com/pe';  
  }else{
    //window.location = 'https://corporativo.mallplaza.com';
    window.location = '/chile';
  }
  return null 
}
