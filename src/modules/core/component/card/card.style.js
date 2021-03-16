import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(5),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      height: '50px',
      border: '1px solid green'

    },
    img: {
      width: '100%',
      height:'120px',
      position: 'static'
    },
    cardItem: {
      border: '1px solid green'
    }

  }),
);


export default useStyles;