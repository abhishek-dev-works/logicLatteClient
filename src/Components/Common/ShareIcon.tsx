import ReplyIcon from "@mui/icons-material/Reply";
import { makeStyles } from "tss-react/mui";
import clsx from "clsx";

const useStyles = makeStyles()({
  replyIcon: {
    transform: "scaleX(-1)",
  },
});

interface IShareIconProps {
  customClasses?: string;
}
const ShareIcon = (props: IShareIconProps) => {
  const { classes } = useStyles();
  return <ReplyIcon className={clsx(classes.replyIcon, props.customClasses)} />;
};

export default ShareIcon;
