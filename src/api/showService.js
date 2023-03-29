import axios from "axios";

const baseUrl ='http://127.0.0.1:5000'

export const getShows = async () => {
  const data =  await fetch(`${baseUrl}/api/shows`)
  console.log("data ==>", data);
  return data 
}