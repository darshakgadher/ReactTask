import React from "react";
import { Container, Box } from "@mui/material";
import { Col, Row } from "react-bootstrap";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./style.css";

const SpellList = ({
  values,
  spellDetails,
  addToFavourite,
  removeToFavourite,
}) => {
  const spellLIst = JSON.parse(localStorage.getItem("fav"));

  return (
    <Container className="container">
      <Box>
        <Row className="spellList">
          {values.map((val) => (
            <Col className="spellItem" md={2}>
              <p name={val.url} onClick={(e) => spellDetails(e)}>
                {val.name}
              </p>
              {spellLIst?.length > 0 ? (
                spellLIst.findIndex((data) => data.name === val.name) === -1 ? (
                  <FavoriteBorderIcon onClick={() => addToFavourite(val)} />
                ) : (
                  <FavoriteIcon onClick={() => removeToFavourite(val)} />
                )
              ) : (
                <FavoriteBorderIcon onClick={() => addToFavourite(val)} />
              )}
            </Col>
          ))}
        </Row>
      </Box>
    </Container>
  );
};

export default SpellList;
