import Cards from "./Cards";
import { useState , useEffect} from "react";

const Body = () => {
    const [listOfJobData, setFetchJobData] = useState([]);

    // fetch the data from the request
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

    useEffect(() => {
      FetchJobData();
    }, []);

    const FetchJobData =() => {
      fetch(
        "https://api.weekday.technology/adhoc/getSampleJdJSON",
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          const data = result.jdList;
            setFetchJobData(data);
            console.log(data);
        })
        .catch((error) => console.error(error));
    };

    return (
        <div className="body-container">
            {listOfJobData.map((list) => (
                <Cards key={ list.jdUid } res={ list } />
            ))}
           
        </div>
    );

}

export default Body;