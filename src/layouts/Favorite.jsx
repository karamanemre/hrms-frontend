import React from "react";
import { Dropdown, Label } from "semantic-ui-react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Favorite() {
  const { favoriteItems } = useSelector((state) => state.favorite);

  return (
    <div>
      <Dropdown item text="Favoriler">
        <Dropdown.Menu>
          {favoriteItems.map((favoriteItem) => (
            <Link to={`/favoritedetail/${favoriteItem.jobPosting.id}`}>
              
              <Dropdown.Item>
                {favoriteItem.jobPosting.companyName} -{" "}
                {favoriteItem.jobPosting.jobPosition}
              </Dropdown.Item>
            </Link>
          ))}
          {/* <Dropdown.Item>
              <Link to={}>{"Detaylar>>"}</Link> 
          </Dropdown.Item> */}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
