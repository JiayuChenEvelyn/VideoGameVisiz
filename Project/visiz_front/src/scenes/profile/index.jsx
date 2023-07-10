import {
  Box,
  Button,
  TextField,
  Card,
  Typography,
  useTheme,
} from "@mui/material";
import * as React from "react";
import IconButton from "@mui/material/IconButton";
import { tokens } from "../../theme";
import { Formik } from "formik";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import Link from "@mui/material/Link";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import { useNavigate } from "react-router-dom";
import Topbar from "../global/topbar";
import TagsInput from "../../components/TagSelector";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";


const Profile = ({ isCollapsed }) => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = React.useState("firstName");
  const [lastName, setLastName] = React.useState("lastName");
  const [email, setEmail] = React.useState("email@gmail.com");
  const [password, setPassword] = React.useState("password");
  const [tags, setTags] = React.useState(["action", "puzzle"]);
  const [showPassword, setShowPassword] = React.useState(false);
  const [openDialog, setOpenDialog] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleFormSubmit = (values) => {
    console.log(values);
    console.log(tags);
    setOpenDialog(true);
    // navigate("/login");
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  const clearLocalStorage = () => {
    localStorage.clear();
    navigate("/login");
  };

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const checkoutSchema = yup.object().shape({
    firstName: yup.string().required("required"),
    lastName: yup.string().required("required"),
    email: yup.string().email("invalid email").required("required"),
  });
  const initialValues = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
  };

  return (
    <div
      id="rightContent"
      style={isCollapsed ? { marginLeft: "80px" } : { marginLeft: "250px" }}
    >
      <Topbar title="Profile" subtitle="Edit your profile here" />
      <Box padding="30px">
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          validationSchema={checkoutSchema}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              <Box
                display="grid"
                gap="30px"
                gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              >
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="First Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.firstName}
                  name="firstName"
                  error={!!touched.firstName && !!errors.firstName}
                  helperText={touched.firstName && errors.firstName}
                  sx={{
                    gridColumn: "span 2",
                    input: { color: colors.grey[100] },
                  }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Last Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.lastName}
                  name="lastName"
                  error={!!touched.lastName && !!errors.lastName}
                  helperText={touched.lastName && errors.lastName}
                  sx={{
                    gridColumn: "span 2",
                    input: { color: colors.grey[100] },
                  }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                  name="email"
                  error={!!touched.email && !!errors.email}
                  helperText={touched.email && errors.email}
                  sx={{
                    gridColumn: "span 4",
                    input: { color: colors.grey[100] },
                  }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  label="Password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.password}
                  name="password"
                  error={!!touched.password && !!errors.password}
                  helperText={touched.password && errors.password}
                  sx={{
                    gridColumn: "span 4",
                    input: { color: colors.grey[100] },
                  }}
                  type={showPassword ? "text" : "password"}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                <Box
                  sx={{
                    gridColumn: "span 4",
                  }}
                >
                  <TagsInput tags={tags} setTags={setTags} />
                </Box>
              </Box>
              <Box display="flex" justifyContent="end" mt="20px">
                <Button type="submit" color="secondary" variant="contained">
                  Save
                </Button>
              </Box>
            </form>
          )}
        </Formik>
        <Button
          onClick={clearLocalStorage}
          variant="text"
          sx={{
            marginTop: "30px",
            color: colors.grey[100],
            backgroundColor: colors.grey[500],
          }}
        >
          Log out
        </Button>
      </Box>
      <Dialog
        open={openDialog}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          id="alert-dialog-title"
          sx={{ fontSize: "20px", color: colors.grey[100] }}
        >
          {"Successfully updated!"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            sx={{ color: colors.grey[100] }}
          >
            You have updated your profile data.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            autoFocus
            sx={{ color: colors.grey[100] }}
          >
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Profile;
