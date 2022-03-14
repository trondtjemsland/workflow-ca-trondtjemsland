import { BASE_URL } from "./api/";
import { query } from "./api/query.graphql";
import {orderBy} from 'lodash'


const getData = async () => {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  });
  const data = await response.json();
  
  const dataArray = orderBy(data.data.characters.results, ['name'], ['desc'])

  dataArray.map(({name, species, status}) => {
    document.querySelector('.results').innerHTML += `
        <div class="card">
          <h2>${name}</h2>
          <p>${species}</p>
          <p>${status}</p>
        </div>
    `
  })
  
  console.log(dataArray)



  console.log(data);
  return data;
};

getData();
