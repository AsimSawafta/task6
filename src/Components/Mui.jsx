import React, { useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Switch from '@mui/material/Switch';
import { Container } from '@mui/material';
export default function Mui() {
    let [change, setChange]=useState(false);
    const BigHeight = {
        height:"250px",
        };
        const smallHeight = {
            height:"50px",
            };

  return (
<Container maxWidth="sm">


        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          
          <Switch 
          value={change}
          onChange={(e)=>setChange(e.target.checked)}
           />
          
        </AccordionDetails>
      </Accordion>
      <Typography variant="h3" component="h3" style={{transition:"0.7s",backgroundColor:'red',height:`${change?BigHeight.height:smallHeight.height}`}}>Hello Word!</Typography>
      </Container>
   
  )
}
