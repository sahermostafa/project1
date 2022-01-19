import * as React from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import FilterList from '@mui/icons-material/FilterList';
import { Settings } from '@material-ui/icons';
import Tables1 from "../Table/Tables1";
import DeleteIcon from '@mui/icons-material/Delete';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ContentPasteGoIcon from '@mui/icons-material/ContentPasteGo';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import Modal2 from "../Modal/Modal2";
import Modals from "../Modal/Modals";
import Modal3 from "../Modal/Modal3";
import Table1 from "../Table/Table1";
import Table3 from "../Table/Table3";
import "./Display.css";

function Display() {
  
  return (
    <div>
     <div className="top1" style={{marginLeft:`0px`}}>
          <TextField
          id="filled-search input-with-icon-textfield"
          label="Variant Table"
          type="search"
          defaultValue="AVC-BASECMB-VXX"
          InputProps={{
            endAdornment: (
             <InputAdornment position="end">
               <SearchIcon style={{color:`black`}} />
             </InputAdornment>
            ),
          }}
          helperText="FORKLIFTER MODEL REST.XX"
          variant="filled"
          sx={{marginLeft:'50px'}}
        />
      </div>
     <div className="buttom">
      <div className="button-control" style={{display:`flex`, flexDirection: `row-reverse`,marginRight:`25px`}}>
       <Settings />
       <Modals />
       <Button  ><FilterList style={{color:`black`}}  /></Button>
       <Button  ><FilterList style={{transform: `rotate(-180deg)`,color:`black`}}/></Button>
       <Modal3 />
       
         <DeleteIcon/>
         <ContentCopyIcon />
         <Modal2/>
         <ContentPasteGoIcon />
         <ErrorOutlineIcon />
      </div>
      
          <Table3  />
        
      <div style={{display: `flex`,flexDirection: `row-reverse`,height: `100px`,alignItems:` center`}}>
        <Button variant="contained" size="small" color="primary"  sx={{mx:'3rem', bgcolor:'chartreuse'}}>
           CANCEL
         </Button>
      </div>
     </div>
    </div>
    
  );
}
export default Display;
/*
 <Button size="small"  variant="contained" color="primary" sx={{ textTransform: 'none',width:`10px`,mx:'1rem',marginBottom:'20px',bgcolor:'black'}}>
           Filter
         </Button>
         */