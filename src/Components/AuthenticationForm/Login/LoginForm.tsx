import React from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { makeStyles } from "tss-react/mui";
import { Button } from "@mui/material";
import { Authenticate } from "../../../Services/UsersService/usersServices";

const useStyles = makeStyles()({
  textField: {
    margin: 10,
    backgroundColor: "#fefefe",
    borderRadius: 4,
  },
});
interface IFormInputs {
  email: string;
  password: string;
}
const LoginForm = () => {
  const { classes } = useStyles();
  const { handleSubmit, control, getValues } = useForm<IFormInputs>();
  const onSubmit: SubmitHandler<IFormInputs> = async (data) => {
    const values = data || getValues();
    const auth = await Authenticate(values);
    console.log(auth)
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          handleSubmit(onSubmit);
        }}
      >
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextField
              placeholder="Email"
              variant="outlined"
              className={classes.textField}
              fullWidth
              {...field}
              type="text"
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <TextField
              placeholder="Password"
              fullWidth
              className={classes.textField}
              variant="outlined"
              {...field}
              type="password"
            />
          )}
        />
        <Button variant="contained" onClick={handleSubmit(onSubmit)}>
          Log in
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
