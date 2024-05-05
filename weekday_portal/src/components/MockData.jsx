const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
const body = JSON.stringify({
  limit: 10,
  offset: 0,
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body,
};

const FetchData = async () => {  
fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions)
  .then((response) => response.json()
)
    .then((result) => {
        const data = result.jdList;
        data.map((e)=> console.log(e));

    })
  .catch((error) => console.error(error));
}

export default FetchData;