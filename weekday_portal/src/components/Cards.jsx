import { Button } from "@mui/material";
import DialogBox from "./DialogBox";
import BoltIcon from "@mui/icons-material/Bolt";
import WarningIcon from "@mui/icons-material/Warning";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

const Cards = (props) => {
  
  // ***** Getting Data from the parent components to render the data in cards dynamically
  const { res } = props;

  return (
    <div className="card-container">
      <div className="cards">
        <div className="posted">1 days ago</div>
        <div className="company">
          <img className="logo" src={res.logoUrl} alt="logo" />
          <div className="company-info">
            <a className="company-link" href={res.jdLink}>
              <div className="company-name">{res.companyName}</div>
            </a>
            <div className="position">{res.jobRole}</div>
            <div className="location">{res.location}</div>
            <div
              className="salary"
              endIcon={<WarningIcon sx={{ color: "yellow" }} />}
            >
              Estimated Salary: {res.maxJdSalary} {res.salaryCurrencyCode}
              <CheckBoxIcon
                sx={{
                  color: "green",
                  alignSelf: "center",
                  justifySelf: "center",
                }}
              />
            </div>
          </div>
        </div>
        <div className="about">
          <span>About Company:</span>
          {res.jobDetailsFromCompany}
        </div>
        <div className="show-more">
          <DialogBox res={res} />
        </div>
        <div className="experience">
          Minimum Experience
          <p> {res.minExp} years</p>
        </div>

        <div className="apply-btn">
          <Button
            variant="contained"
            startIcon={<BoltIcon sx={{ color: "yellow" }} />}
          >
            Easy Apply
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
