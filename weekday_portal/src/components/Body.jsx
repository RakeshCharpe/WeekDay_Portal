import Cards from "./Cards";
import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import InfiniteScroll from "react-infinite-scroll-component";

const Body = () => {

  const [listOfJobData, setFetchJobData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const location = [
    { location: "remote" },
    { location: "In-Office" },
    { location: "Hybrid" },
  ];
  const roles = [
    {jobRole:"frontend"},
    {jobRole:"ios"},
    {jobRole:"backend"},
    {jobRole:"tech lead"},
    {jobRole:"android"},
  ]
  const experience = [
    {minExp:1},
    {minExp:2},
    {minExp:3},
    {minExp:4},
    {minExp:5},
    {minExp:6},
    {minExp:7},
    {minExp:8},
  ]

  // ****** fetch the data from API 
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

  // **** function to add feature of search in header
  function searching() {
    const filterValue = listOfJobData.filter(
      (item) => item.companyName === searchText
    );
    setFilterData(filterValue);
  }
  const FetchJobData = () => {
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
        <div className="searchFilter-container">
          <TextField
            id="outlined-select-roles"
            className="textfield"
            select
            label="Roles"
            defaultValue="Roles"
            helperText=""
            sx={{ width: "25ch" }}
            onChange={(event) => {
              console.log(event.target.value);
              const filterValue = listOfJobData.filter(
                (item) => item.jobRole === event.target.value
              );

              setFilterData(filterValue);
            }}
          >
            {roles.map((option) => (
              <MenuItem key={option.jdUid} value={option.jobRole}>
                {option.jobRole}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="outlined-select-experience"
            className="textfield"
            select
            label="Experience"
            defaultValue="Experience"
            helperText=""
            sx={{ width: "25ch" }}
            onChange={(event) => {
              console.log(event.target.value);
              const filterValue = listOfJobData.filter(
                (item) => item.minExp === event.target.value
              );

              setFilterData(filterValue);
            }}
          >
            {experience.map((option) => (
              <MenuItem key={option.jdUid} value={option.minExp}>
                {option.minExp}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="outlined-select-location"
            className="textfield"
            select
            label="Location"
            defaultValue="Remote"
            helperText=""
            sx={{ width: "25ch" }}
            onChange={(event) => {
              console.log(event.target.value);
              const filterValueforRemote = listOfJobData.filter(function (
                item
              ) {
                if (item.location === event.target.value) {
                  return true;
                }
              });
              const filterValueforOtherLocation = listOfJobData.filter(
                function (item) {
                  if (item.location !== event.target.value) {
                    return true;
                  }
                }
              );
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
          <TextField
            //select
            id="outlined-select-company"
            className="textfield"
            label="Company Name"
            defaultValue=""
            helperText=""
            sx={{ width: "25ch" }}
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
            onKeyDown={searching}
            onMouseUpCapture={searching}
          >
          </TextField>
        </div>
      </div>

      <InfiniteScroll dataLength={1000}>
        <div className="cards-body">
          {filterData.map((list) => (
            <Cards key={list.jdUid} res={list} />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default Body;
