import {
  Box,
  Button,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import * as React from "react";
import { tokens } from "../../theme";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import Topbar from "../global/topbar";
import TagsInput from "../../components/TagSelector";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Changepassword from '../changepassowrd/changepassword';

const Profile = ({ isCollapsed }) => {
  const navigate = useNavigate();
  const [lastName, setLastName] = React.useState("lastName");
  const [email, setEmail] = React.useState("email@gmail.com");
  const [password, setPassword] = React.useState("password");
  const [tags, setTags] = React.useState(["action", "puzzle"]);
  const [showPassword, setShowPassword] = React.useState(false);
  const [openDialog, setOpenDialog] = React.useState(false);
  const userName = localStorage.getItem("username") || "";

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleFormSubmit = (values) => {
    console.log(values);
    console.log(tags);
    setOpenDialog(true);
    // navigate("/login");
  };


  const clearLocalStorage = () => {
    localStorage.clear();
    navigate("/login");
  };


  const Changepassword = () => {
    navigate("/changePassword");
  };


  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const checkoutSchema = yup.object().shape({
    userName: yup.string().required("required"),
    lastName: yup.string().required("required"),
    email: yup.string().email("invalid email").required("required"),
  });
  const initialValues = {
    userName: userName,
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
                  disabled
                  variant="filled"
                  type="text"
                  label="User Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.userName}
                  name="userName"
                  error={!!touched.userName && !!errors.userName}
                  helperText={touched.userName && errors.userName}
                  sx={{
                    gridColumn: "span 2",
                    input: { color: colors.grey[100] },
                  }}
                />
                <Box
                  sx={{
                    gridColumn: "span 4",
                  }}
                >
                  <Typography style={{ color: colors.grey[100] }}>
                    Self Interested Tags
                  </Typography>
                  <TagsInput tags={tags} setTags={setTags} />
                </Box>
              </Box>
            </form>
          )}
        </Formik>
        <Button
          onClick={Changepassword}
          color="secondary"
          variant="contained"
          sx={{
            marginTop: "30px",
            color: colors.grey[100],
            backgroundColor: colors.blueAccent[500],
          }}
        >
          Change Password
        </Button>
        <br />
        <Button
          onClick={clearLocalStorage}
          color="secondary"
          variant="contained"
          sx={{
            marginTop: "30px",
            color: colors.grey[100],
            backgroundColor: colors.blueAccent[500],
          }}
        >
          Log out
        </Button>
      </Box>
    </div>
  );
};

export default Profile;
