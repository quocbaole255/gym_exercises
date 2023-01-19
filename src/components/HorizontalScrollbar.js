import React from "react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import { Box, Typography } from "@mui/material";

import ExerciseCard from "./ExerciseCard";
import BodyPart from "./BodyPart";
import RightArrowIcon from "../assets/icons/right-arrow.png";
import LeftArrowIcon from "../assets/icons/left-arrow.png";

const LeftArrow = ({ onClick }) => (
  <Typography onClick={onClick} className="left-arrow">
    <img src={LeftArrowIcon} alt="left-arrow" />
  </Typography>
);

const RightArrow = ({ onClick }) => (
  <Typography onClick={onClick} className="right-arrow">
    <img src={RightArrowIcon} alt="right-arrow" />
  </Typography>
);

const HorizontalScrollbar = ({
  data,
  bodyParts,
  setBodyPart,
  bodyPart,
  scrollPrev,
  scrollNext,
}) => {
  return (
    <ScrollMenu
      LeftArrow={() => <LeftArrow onClick={scrollPrev} />}
      RightArrow={() => <RightArrow onClick={scrollNext} />}
    >
      {data.map((item) => (
        <Box
          key={item.id || item}
          itemID={item.id || item}
          title={item.id || item}
          m="0 40px"
        >
          {bodyParts ? (
            <BodyPart
              item={item}
              setBodyPart={setBodyPart}
              bodyPart={bodyPart}
            />
          ) : (
            <ExerciseCard exercise={item} />
          )}
        </Box>
      ))}
    </ScrollMenu>
  );
};

export default HorizontalScrollbar;
