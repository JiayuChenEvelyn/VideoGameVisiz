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

const Login = ({setAuth}) => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleFormSubmit = (values) => {
    console.log(values);

    fetch(
      "http://localhost:8080/users/login?username="+values.username+"&password="+values.password
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("http://localhost:8080/users/login?username=", data);
        if (data.state === 200) {
          localStorage.setItem("auth", "true");
          localStorage.setItem("username", data.data.username);
          navigate("/dashboard");

        }else{
          return Promise.reject("Invalid login attempt, state is not 200");
        }
      })
      .catch((e) => {
        console.log("Error:", e);
        alert(e);
      });
      // localStorage.setItem("auth", "true");
      // localStorage.setItem("username", values.username);
      // navigate("/dashboard");

  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100%"
    >
      <Card
        sx={{
          m: "20px",
          width: "40%",
          margin: "20px",
          padding: "20px",
          borderRadius: "10px",
          backgroundColor: "transparent",
        }}
      >
        <Header title="Login" subtitle="Welcome to Visiz" />
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
                // sx={{
                //   "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                // }}
              >
                {/* <TextField
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
                  sx={{ gridColumn: "span 2" }}
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
                  sx={{ gridColumn: "span 2" }}
                /> */}
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Username"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.username}
                  name="username"
                  error={!!touched.username && !!errors.username}
                  helperText={touched.username && errors.username}
                  sx={{ gridColumn: "span 4" }}
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
                  sx={{ gridColumn: "span 4" }}
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
                <Link
                  href="/register"
                  width="200px"
                  underline="none"
                  color={colors.grey[100]}
                >
                  {"Click here to register"}
                </Link>
              </Box>
              <Box display="flex" justifyContent="end" mt="20px">
                <Button type="submit" color="secondary" variant="contained">
                  Log in
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </Card>
    </Box>
  );
};

const checkoutSchema = yup.object().shape({
  //   firstName: yup.string().required("required"),
  username: yup.string().required("required"),
  password: yup.string().required("required"),
  // email: yup.string().email("invalid email").required("required"),
});
const initialValues = {
  username: "",
  password: "",
};

export default Login;
