import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [info, setinfo] = React.useState({
    Firstname: "",
    Lastname: "",
    UserName: "",
    Age: "",
    phone_number: "",
    Email: "",
    password: "",
  });
  const [checked, setChecked] = React.useState(false);
  const handleClick = () => setChecked(!checked);
  const handleReset = (e) => {
    setinfo({
      Firstname: "",
      Lastname: "",
      UserName: "",
      Age: "",
      phone_number: "",
      Email: "",
      password: "",
    });
    setChecked(false);
  };
  const handleChange = (event) => {
    setinfo({ ...info, [event.target.name]: event.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      var response = await axios.post(
        "https://simplebloggerguvi.herokuapp.com/register/signup",
        {
          ...info,
        }
      );
      console.log(response.data);
      toast.success("Succesfully Signed - Please go Back and Sign in");
      handleReset();
    } catch (err) {
      toast.warning("Email already registered");
    }
  };

  toast.configure();

  return (
    <div>
      <Container maxWidth="sm">
        <br></br>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <Typography className="orange" mt={2} variant="h4">
            {" "}
            BLOGGER
          </Typography>
          <Typography className="green" mt={2} color="success">
            Please Fill the Required Details*
          </Typography>
          <br></br>

          <Stack spacing={2} direction="row">
            <Box
              sx={{
                width: 250,
                maxWidth: "100%",
                marginLeft: "10",
              }}
            >
              <TextField
                fullWidth
                label="First Name"
                sx={{ ml: "0.5em" }}
                onChange={(event) => {
                  handleChange(event);
                }}
                value={info.Firstname}
                required
                name="Firstname"
              />
            </Box>
            <Box
              sx={{
                width: 240,

                maxWidth: "100%",
                marginLeft: "10",
              }}
            >
              <TextField
                fullWidth
                label="Last Name"
                required
                onChange={(event) => {
                  handleChange(event);
                }}
                value={info.Lastname}
                name="Lastname"
              />
            </Box>
          </Stack>
          <Box
            sx={{
              width: 500,
              m: 1,
              maxWidth: "100%",
              marginLeft: "10",
            }}
          >
            <TextField
              fullWidth
              required
              label="Username"
              onChange={(event) => {
                handleChange(event);
              }}
              value={info.UserName}
              name="UserName"
            />
          </Box>

          <Box
            sx={{
              width: 500,
              m: 1,
              maxWidth: "100%",
              marginLeft: "10",
            }}
          >
            <TextField
              fullWidth
              label="Age"
              required
              onChange={(event) => {
                handleChange(event);
              }}
              value={info.Age}
              name="Age"
            />
          </Box>
          <Box
            sx={{
              width: 500,
              m: 1,
              maxWidth: "100%",
              marginLeft: "10",
            }}
          >
            <TextField
              fullWidth
              type="number"
              required
              label="Phone number"
              onChange={(event) => {
                handleChange(event);
              }}
              value={info.phone_number}
              name="phone_number"
            />
          </Box>
          <Box
            sx={{
              width: 500,
              m: 1,
              maxWidth: "100%",
              marginLeft: "10",
            }}
          >
            <TextField
              fullWidth
              type="email"
              required
              label="Email"
              onChange={(event) => {
                handleChange(event);
              }}
              value={info.Email}
              name="Email"
            />
          </Box>
          <Box
            sx={{
              width: 500,
              m: 1,
              maxWidth: "100%",
              marginLeft: "10",
            }}
          >
            <TextField
              fullWidth
              type="password"
              required
              label="Password"
              onChange={(event) => {
                handleChange(event);
              }}
              value={info.password}
              name="password"
            />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </Box>

          <Stack spacing={15} direction="row">
            <Button
              variant="contained"
              sx={{ ml: "0.5em" }}
              onClick={(e) => handleReset(e)}
            >
              Reset
            </Button>
            <Button
              variant="contained"
              type="submit"
              color="success"
              endIcon={<SendIcon />}
            >
              Send
            </Button>
            <Link to="/">
              <Button variant="contained">Back</Button>
            </Link>
          </Stack>
        </form>
      </Container>
    </div>
  );
}
