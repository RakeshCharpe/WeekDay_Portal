import * as React from 'react';
import MenuCard from './MenuCard';

const Header = () => {
   
const array = [5,6,7,4];

  return (
    <div className="header-container">
      <div className="title">
        <h3>Search Jobs</h3>
      </div>
      <div className="filter-container">
       {array.map((e)=>(<MenuCard placeholder="Roles" />))}
      </div>
    </div>
  );
};

export default Header;
