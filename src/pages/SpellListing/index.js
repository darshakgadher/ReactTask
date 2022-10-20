import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import "./style.css";
import axios from "axios";
import SpellList from "../../components/SpellList";
import { Modal } from "@mui/material";
import ModalDetails from "../../components/Modal";
import { json } from "react-router-dom";

const SpellListing = () => {
  const [values, setValues] = useState([]);
  const [open, setOpen] = useState(false);
  const [spellInfo, setSpellInfo] = useState({});
  const [likeSpell, setLikeSpell] = useState(
    JSON.parse(localStorage.getItem("fav") || [])
  );
  const getSpellList = async () => {
    try {
      const spellList = await axios.get("https://www.dnd5eapi.co/api/spells");
      setValues(spellList?.data?.results);
    } catch (error) {
      console.log(error);
    }
  };

  const isOpen = (val) => {
    setOpen(val);
  };
  const addToFavourite = (val) => {
    setLikeSpell((pre) => [...pre, val]);
    localStorage.setItem("fav", JSON.stringify([...likeSpell, val]));
  };
  const removeToFavourite = (val) => {
    setLikeSpell(likeSpell.filter((data) => data.name !== val.name));
    localStorage.setItem(
      "fav",
      JSON.stringify(likeSpell.filter((data) => data.name !== val.name))
    );
  };

  const spellDetails = async (e) => {
    const url = e.target.getAttribute("name");
    try {
      const spellDetails = await axios.get(`https://www.dnd5eapi.co${url}`);
      setOpen(true);
      setSpellInfo(spellDetails?.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSpellList();
  }, []);

  return (
    <>
      {values?.length > 0 ? (
        <SpellList
          values={values}
          spellDetails={spellDetails}
          addToFavourite={addToFavourite}
          removeToFavourite={removeToFavourite}
        />
      ) : (
        <h1>No data found</h1>
      )}
      <Modal
        open={open}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <ModalDetails isOpen={isOpen} spellInfo={spellInfo} />
      </Modal>
    </>
  );
};

export default SpellListing;
