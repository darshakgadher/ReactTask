import React, { useState } from "react";
import {
  Box,
  Chip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


const ModalDetails = ({ spellInfo, isOpen }) => {
  return (
    <Box sx={{ width: 400 }} className="modalContainer">
      {spellInfo?.name ? (
        <div>
          <div className="title">
            <h2>{spellInfo?.name}</h2>
            <CloseIcon onClick={() => isOpen(false)} />
          </div>
          <div className="content">
            <div>
              <Chip label={`Casting Time: ${spellInfo?.casting_time}`} />
              <Chip label={`Level: ${spellInfo?.level}`} />
              <Chip label={`Duration: ${spellInfo?.duration}`} />
              <Chip
                label={`Attack Type: ${
                  spellInfo?.attack_type ? spellInfo?.attack_type : "None"
                }`}
              />
              <Chip
                label={`Concentration: ${
                  spellInfo?.concentration ? "Required" : "Not needed"
                }`}
              />
              <Chip label={`Duration: ${spellInfo?.duration}`} />
              <Chip label={`Components: ${spellInfo?.components.join(" ,")}`} />
            </div>
            <div>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Description</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{spellInfo?.desc[0]}</Typography>
                </AccordionDetails>
              </Accordion>
              {spellInfo?.higher_level[0] && (
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>Higher Level</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>{spellInfo?.higher_level[0]}</Typography>
                  </AccordionDetails>
                </Accordion>
              )}
              {spellInfo?.material && (
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>Material</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>{spellInfo?.material}</Typography>
                  </AccordionDetails>
                </Accordion>
              )}
            </div>
          </div>
        </div>
      ) : (
        <>
          <CloseIcon onClick={() => isOpen(false)} />
          <h1>No data found</h1>
        </>
      )}
    </Box>
  );
};

export default ModalDetails;
