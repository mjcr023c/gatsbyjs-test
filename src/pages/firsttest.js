import { useState, useEffect } from "react"
//import { ContextExclusionPlugin } from "webpack";
console.log(process.env.NODE_ENV);
/*if (process.env.NODE_ENV === 'development') {
  require('dotenv').config({
    path: `.env.development`,
  });
}*/

export default function Firsttest() {
  const [countryCode, setCountryCode] = useState(0)
  useEffect(() => {
    fetch(`${process.env.API_RELOCATION}`)
      .then(response => response.json()) // parse JSON from request
      .then(resultData => {
        setCountryCode(resultData.country_code)
      })
  }, [])
  console.log("Country",countryCode);
  console.log(countryCode === 'CL');
  console.log(countryCode === 'CO');
  console.log(countryCode === 'PE');
  if(countryCode === 'CL') {
    window.location = '/chile';
  }else if(countryCode === 'CO') {
    window.location = '/colombia';
  }else if(countryCode === 'PE') {
    window.location = '/peru';
  }else{
    window.location = '/corporate';
  }
  return null 
}
