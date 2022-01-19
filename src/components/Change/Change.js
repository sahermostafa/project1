import * as React from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import FilterList from '@mui/icons-material/FilterList';
import { Settings } from '@material-ui/icons';
import Tables1 from "../Table/Tables1";
import Table3 from "../Table/Table3";
import DeleteIcon from '@mui/icons-material/Delete';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ContentPasteGoIcon from '@mui/icons-material/ContentPasteGo';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import Modal2 from "../Modal/Modal2";
import Modals from "../Modal/Modals";
import Modal3 from "../Modal/Modal3";
import "./Change.css";

function Change() {
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
       <FilterList />
        <FilterList style={{transform: `rotate(-180deg)`,color:`black`}}/>
         <Modal3 />
         <DeleteIcon/>
         <ContentCopyIcon />
         <Modal2/>
         <ContentPasteGoIcon />
         <ErrorOutlineIcon />
      </div>
      <Table3 />
      <div style={{display: `flex`,flexDirection: `row-reverse`,height: `100px`,alignItems:` center`}}>
        <Button variant="contained" size="small" color="primary"  sx={{mx:'1rem', bgcolor:'chartreuse'}}>
           CANCEL
         </Button>
         <Button variant="contained" size="small" color="primary"  sx={{mx:'1rem' ,bgcolor:'chartreuse'}}>
            SAVE
         </Button>
      </div>
     </div>
    </div>
    
  );
}
export default Change;