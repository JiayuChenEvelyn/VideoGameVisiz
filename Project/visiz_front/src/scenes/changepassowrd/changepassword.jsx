// import {
//   Box,
//   Button,
//   TextField,
//   Card,
//   Typography,
//   useTheme,
// } from "@mui/material";
// import * as React from "react";
// import IconButton from "@mui/material/IconButton";
// import { tokens } from "../../theme";
// import { Formik } from "formik";
// import Visibility from "@mui/icons-material/Visibility";
// import VisibilityOff from "@mui/icons-material/VisibilityOff";
// import * as yup from "yup";
// import useMediaQuery from "@mui/material/useMediaQuery";
// import Header from "../../components/Header";
// import Link from "@mui/material/Link";
// import InputLabel from "@mui/material/InputLabel";
// import InputAdornment from "@mui/material/InputAdornment";
// import { useNavigate } from "react-router-dom";
// import Dialog from "@mui/material/Dialog";
// import DialogActions from "@mui/material/DialogActions";
// import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
// import DialogTitle from "@mui/material/DialogTitle";
// import { useState, useEffect } from "react";

// const Changepassword = () => {
//   const navigate = useNavigate();

//   const [showPassword, setShowPassword] = React.useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
//   const [success, setSuccess] = React.useState(false);

//   const handleClickShowPassword = () => setShowPassword((show) => !show);
//   const handleClickShowConfirmPassword = () =>
//     setShowConfirmPassword((showConfirmPassword) => !showConfirmPassword);

//   const handleFormSubmit = (values) => {
//     console.log(values);
//     // fetch(
//     //   "http://localhost:8080/users/login?old=" +
//     //     oldPassword +
//     //     "&new=" +
//     //     newPassword
//     // )
//     //   .then((response) => {
//     //     if (response.state === 200) {
//     //       navigate("/login");
//     //     } else {
//     //       return Promise.reject("Invalid login attempt, state is not 200");
//     //     }
//     //   })
//     //   .catch((message) => {
//     //     alert(message);
//     //   });
//     var result = 200;
//     if (result === 200) {
//       handleClickOpen();
//     }
//   };
//   const handleMouseDownPassword = (event) => {
//     event.preventDefault();
//   };
//   const handleMouseDownConfirmPassword = (event) => {
//     event.preventDefault();
//   };
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);

//   const handleClickOpen = () => {
//     setSuccess(true);
//   };

//   const handleClose = () => {
//     setSuccess(false);
//   };
//   const handleCloseNav = () => {
//     setSuccess(false);
//     navigate("/login");
//   };

//   return (
//     <Box
//       display="flex"
//       justifyContent="center"
//       alignItems="center"
//       height="100%"
//     >
//       <Card
//         sx={{
//           m: "20px",
//           width: "50%",
//           margin: "20px",
//           padding: "20px",
//           borderRadius: "10px",
//           backgroundColor: "transparent",
//         }}
//       >
//         <Header title="Register" subtitle="Welcome to Visiz" />
//         <Formik
//           onSubmit={handleFormSubmit}
//           initialValues={initialValues}
//           validationSchema={checkoutSchema}
//         >
//           {({
//             values,
//             errors,
//             touched,
//             handleBlur,
//             handleChange,
//             handleSubmit,
//           }) => (
//             <form onSubmit={handleSubmit}>
//               <Box
//                 display="grid"
//                 gap="30px"
//                 gridTemplateColumns="repeat(4, minmax(0, 1fr))"
//               >
//                 <TextField
//                   fullWidth
//                   variant="filled"
//                   type="text"
//                   label="Username"
//                   onBlur={handleBlur}
//                   onChange={handleChange}
//                   value={values.username}
//                   name="username"
//                   error={!!touched.username && !!errors.username}
//                   helperText={touched.username && errors.username}
//                   sx={{ gridColumn: "span 4" }}
//                 />
//                 <TextField
//                   fullWidth
//                   variant="filled"
//                   label="Password"
//                   onBlur={handleBlur}
//                   onChange={handleChange}
//                   value={values.password}
//                   name="password"
//                   error={!!touched.password && !!errors.password}
//                   helperText={touched.password && errors.password}
//                   sx={{ gridColumn: "span 4" }}
//                   type={showPassword ? "text" : "password"}
//                   InputProps={{
//                     endAdornment: (
//                       <InputAdornment position="end">
//                         <IconButton
//                           aria-label="toggle password visibility"
//                           onClick={handleClickShowPassword}
//                           onMouseDown={handleMouseDownPassword}
//                         >
//                           {showPassword ? <VisibilityOff /> : <Visibility />}
//                         </IconButton>
//                       </InputAdornment>
//                     ),
//                   }}
//                 />
//                 <TextField
//                   fullWidth
//                   variant="filled"
//                   label="Confirm Password"
//                   onBlur={handleBlur}
//                   onChange={handleChange}
//                   value={values.confirmPassword}
//                   name="confirmPassword"
//                   error={!!touched.confirmPassword && !!errors.confirmPassword}
//                   helperText={touched.confirmPassword && errors.confirmPassword}
//                   sx={{ gridColumn: "span 4" }}
//                   type={showConfirmPassword ? "text" : "password"}
//                   InputProps={{
//                     endAdornment: (
//                       <InputAdornment position="end">
//                         <IconButton
//                           aria-label="toggle password visibility"
//                           onClick={handleClickShowConfirmPassword}
//                           onMouseDown={handleMouseDownConfirmPassword}
//                         >
//                           {showConfirmPassword ? (
//                             <VisibilityOff />
//                           ) : (
//                             <Visibility />
//                           )}
//                         </IconButton>
//                       </InputAdornment>
//                     ),
//                   }}
//                 />
//                 <Link
//                   href="/login"
//                   width="200px"
//                   underline="none"
//                   color={colors.grey[100]}
//                 >
//                   {"Click here to log in"}
//                 </Link>
//               </Box>
//               <Box display="flex" justifyContent="end" mt="20px">
//                 <Button type="submit" color="secondary" variant="contained">
//                   Register
//                 </Button>
//               </Box>
//               <Dialog
//                 open={success}
//                 onClose={handleClose}
//                 aria-labelledby="alert-dialog-title"
//                 aria-describedby="alert-dialog-description"
//               >
//                 <DialogTitle variant="bold" id="alert-dialog-title">
//                   {"Successfully Registered!"}
//                 </DialogTitle>
//                 <DialogContent>
//                   <DialogContentText id="alert-dialog-description">
//                     You can now login to your account.
//                   </DialogContentText>
//                 </DialogContent>
//                 <DialogActions>
//                   <Button onClick={handleCloseNav} color="secondary">
//                     OK
//                   </Button>
//                 </DialogActions>
//               </Dialog>
//             </form>
//           )}
//         </Formik>
//       </Card>
//     </Box>
//   );
// };

// const checkoutSchema = yup.object().shape({
//   username: yup.string().required("required"),
//   password: yup.string().required("required"),
//   confirmPassword: yup
//     .string()
//     .oneOf([yup.ref("password"), null], "Passwords must match")
//     .required("required"),
// });
// const initialValues = {
//   username: "",
//   password: "",
//   confirmPassword: "",
// };

// export default Changepassword;
