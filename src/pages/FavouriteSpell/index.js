import React, { useEffect, useState } from "react";
import { Modal } from "@mui/material";
import ModalDetails from "../../components/Modal";
import SpellList from "../../components/SpellList";
import axios from "axios";

const FavouriteSpell = () => {
  const [open, setOpen] = useState(false);
  const [spellInfo, setSpellInfo] = useState({});
  const [spell, setSpell] = useState(
    JSON.parse(localStorage.getItem("fav")) || []
  );

  const isOpen = (val) => {
    setOpen(val);
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
  const removeToFavourite = (val) => {
    const likeSpell = JSON.parse(localStorage.getItem("fav"));
    localStorage.setItem(
      "fav",
      JSON.stringify(likeSpell.filter((data) => data.name !== val.name))
    );
    setSpell(JSON.parse(localStorage.getItem("fav")) || []);
  };
  return (
    <>
      {spell?.length > 0 ? (
        <SpellList
          values={spell}
          spellDetails={spellDetails}
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

export default FavouriteSpell;
