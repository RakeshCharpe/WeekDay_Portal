import Cards from "./Cards";
import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";

const Body = () => {
  const [listOfJobData, setFetchJobData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const location = [{ location: "remote" }, { location: "In-Office" }, { location: "Hybrid" }];

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
          setFilterData(data);
            console.log(data);
        })
        .catch((error) => console.error(error));
    };
  console.log(listOfJobData);
    return (
      <div className="body-container">
        <div className="search-bar">
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          ></Box>
          <div>
            <TextField
              id="outlined-select-roles"
              select
              label="Roles"
              defaultValue="Roles"
              helperText="select Roles"
              sx={{ width: "25ch" }}
              onChange={(event) => {
                console.log(event.target.value);
                const filterValue = listOfJobData.filter(
                  (item) => item.jobRole === event.target.value
                );
               
                setFilterData(filterValue );
              }}
            >
              {listOfJobData.map((option) => (
                <MenuItem key={option.jdUid} value={option.jobRole}>
                  {option.jobRole}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="outlined-select-experience"
              select
              label="Experience"
              defaultValue="Experience"
              helperText="select Experience"
              sx={{ width: "25ch" }}
              onChange={(event) => {
                console.log(event.target.value);
                const filterValue = listOfJobData.filter(
                  (item) => item.minExp === event.target.value
                );
               
                setFilterData(filterValue);
              }}
            >
              {listOfJobData.map((option) => (
                <MenuItem key={option.jdUid} value={option.minExp}>
                  {option.minExp}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="outlined-select-location"
              select
              label="Location"
              defaultValue="Remote"
              helperText="select "
              sx={{ width: "25ch" }}
              onChange={(event) => {
                console.log(event.target.value);
                const filterValueforRemote = listOfJobData.filter(function (item) {
                  if (item.location === event.target.value) {
                    return true;
                  }
                },
                );
               const filterValueforOtherLocation = listOfJobData.filter(function (
                 item
               ) {
                 if (item.location !== event.target.value) {
                   return true;
                 }
               });
                if (event.target.value === "remote") {
                  setFilterData(filterValueforRemote);
                } else {
                  setFilterData(filterValueforOtherLocation);
                }
              }}
            >
              {location.map((option) => (
                <MenuItem key={option.jdUid} value={option.location}>
                  {option.location}
                </MenuItem>
              ))}
            </TextField>
          </div>
        </div>

        <div className="cards-body">
          {filterData.map(
            (list) => (
              (<Cards key={list.jdUid} res={list} />)
            )
          )}
        </div>
      </div>
    );

}

export default Body;






