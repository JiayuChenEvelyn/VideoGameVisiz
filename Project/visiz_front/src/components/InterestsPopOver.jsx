import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { tokens } from "../theme";
import { useTheme } from "@mui/material";
import TagsInput from "./TagSelector";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const theme = useTheme();
  const color = tokens(theme.palette.mode);
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: color.grey[100],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

export default function InterestsPopOver({ open, setOpen }) {
  const [tags, setTags] = React.useState([]);
  const theme = useTheme();
  const color = tokens(theme.palette.mode);

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    console.log(tags);
    setOpen(false);
  };

  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
          sx={{width: "400px"}}
        >
          Select your interest games, games genre and topic
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <TagsInput tags={tags} setTags={setTags}/>
        </DialogContent>
        <DialogActions>
          <Button sx={{color:color.grey[100]}} autoFocus onClick={handleSave}>
            Save
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
