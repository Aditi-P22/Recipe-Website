import { Box,  Stack, styled, Typography } from "@mui/material";

import drink from '../../static/drink.jpg';
import dessert from '../../static/dessert.jpg';
import dinner from '../../static/dinner.jpg';
import breakfast from '../../static/breakfast.jpg';
import appetizer from '../../static/appetizer.jpg';
import salad from '../../static/salad.jpg';



const Category = () => {
 const StyledCard = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    borderRadius: "100%",
    overflow: "hidden",
    width: "100px",
    cursor: "pointer",
    [theme.breakpoints.up("md")]: {
      height: 100,
    },
    [theme.breakpoints.down("md")]: {
      height: 100,
    },
    "&:hover": {
      opacity: 0.8,
      boxSizing: "borderBox",
      zIndex: 1,
      transition: `all 0.45s ease`,
    },
  }));
  const StyledTypography = styled(Typography)({
    textAlign: "center",
    color: "black",
    fontSize: 20,
  });
  const CardBox = styled(Box)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  });
  return (
    <Stack
      Container
      direction={"row"}
      mt={4}
      spacing={3}
      ml={3}
      sx={{ maxWidth: "100%", overflow: "auto" }}
    >
      
          <CardBox>
            <StyledCard sx={{ backgroundImage: `url(${drink})` }} />
            <StyledTypography>Drinks</StyledTypography>
          </CardBox>

          <CardBox>
            <StyledCard sx={{ backgroundImage: `url(${dessert})` }} />
            <StyledTypography>dessert</StyledTypography>
          </CardBox>

          <CardBox>
            <StyledCard sx={{ backgroundImage: `url(${dinner})` }} />
            <StyledTypography>dinner</StyledTypography>
          </CardBox>

          <CardBox>
            <StyledCard sx={{ backgroundImage: `url(${breakfast})` }} />
            <StyledTypography>breakfast</StyledTypography>
          </CardBox>

          <CardBox>
            <StyledCard sx={{ backgroundImage: `url(${appetizer})` }} />
            <StyledTypography>appetizer</StyledTypography>
          </CardBox>

          <CardBox>
            <StyledCard sx={{ backgroundImage: `url(${salad})` }} />
            <StyledTypography>salad</StyledTypography>
          </CardBox>
        
     
    </Stack>
  );
};

export default Category;