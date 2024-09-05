import React from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import { createUser } from "../../../Services/UsersService/usersServices";

const useStyles = makeStyles()({
  textField: {
    margin: 10,
    backgroundColor: "#fefefe",
    borderRadius: 4,
    width: "98%",
  },
});
const LoginForm = () => {
  interface IFormInputs {
    full_name: string;
    email: string;
    profile_picture: File;
    bio: string;
    username: string;
    password: string;
  }

  const { handleSubmit, control, getValues } = useForm<IFormInputs>();
  const { classes } = useStyles();
  const [attachment, setAttachment] = React.useState<any>(null);
  const onSubmit: SubmitHandler<IFormInputs> = async (data) => {
    const values = data || getValues();
    console.log(values);
    const payload = { ...data, profile_picture: attachment };
    const res = await createUser(payload);
    console.log(res);
  };
  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    setAttachment(file);
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          handleSubmit(onSubmit);
        }}
      >
        <Controller
          name="full_name"
          control={control}
          rules={{ required: true }}
          render={({ field, formState }) => (
            <TextField
              placeholder="Enter your full name"
              variant="outlined"
              {...field}
              error={!!formState.errors.full_name}
              type="text"
              className={classes.textField}
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          rules={{ required: true }}
          render={({ field, formState }) => (
            <TextField
              placeholder="Enter your email"
              variant="outlined"
              {...field}
              error={!!formState.errors.email}
              type="text"
              className={classes.textField}
            />
          )}
        />
        <Controller
          name="profile_picture"
          control={control}
          render={({ field }) => (
            <TextField
              variant="outlined"
              {...field}
              type="file"
              className={classes.textField}
              onChange={(props) => {
                field.onChange({ ...props });
                handleFileChange(props);
              }}
            />
          )}
        />
        <Controller
          name="bio"
          control={control}
          render={({ field }) => (
            <TextField
              placeholder="Tell us something about yourself"
              variant="outlined"
              {...field}
              type="text"
              className={classes.textField}
            />
          )}
        />
        <Controller
          name="username"
          control={control}
          rules={{ required: true }}
          render={({ field, formState }) => (
            <TextField
              placeholder="Enter a username"
              variant="outlined"
              {...field}
              error={!!formState.errors.username}
              type="text"
              className={classes.textField}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          rules={{ required: true }}
          render={({ field, formState }) => (
            <TextField
              placeholder="Enter your password"
              variant="outlined"
              {...field}
              error={!!formState.errors.password}
              type="password"
              className={classes.textField}
            />
          )}
        />
        <Button variant="contained" onClick={handleSubmit(onSubmit)}>
          Sign up
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
