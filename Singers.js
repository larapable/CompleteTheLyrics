import Button from '@mui/material/Button';
import { Grid } from "@mui/material";
import './Lyrics.css';
import { Link } from 'react-router-dom';
import { Outlet} from "react-router-dom";

export default function Singer() {
 
  return (
    <Grid container spacing={1} className="centered-container">
      <Grid container spacing={0} alignItems="center" sx={{ justifyContent: "center", paddingBottom: '20px' }}>
        <Grid>
          <Link to="/singers/first">
            <Button variant="contained" color="primary" size="large" sx={{
              width: '210px',
              height: '60px',
              backgroundColor: 'violet',
              '&:hover': {
                backgroundColor: 'violet'
              },
              borderRadius: 0
            }} >
              FIRST SINGER
            </Button>
          </Link>
        </Grid>

        <Grid item>
        <Link to="/singers/second">
          <Button variant="contained" color="primary" size="large" sx={{
            width: '210px',
            height: '60px',
            backgroundColor: 'yellowgreen',
            '&:hover': { backgroundColor: 'yellowgreen' },
            borderRadius: 0
          }}>
            SECOND SINGER
          </Button>
          </Link>
        </Grid>

        <Grid item>
        <Link to="/singers/third">
          <Button variant="contained" color="primary" size="large" sx={{
            width: '210px',
            height: '60px',
            backgroundColor: 'green',
            '&:hover': { backgroundColor: 'green' },
            borderRadius: 0
          }}>
            THIRD SINGER
          </Button>
          </Link>
        </Grid>

        <Grid item>
        <Link to="/singers/fourth">
          <Button variant="contained" color="primary" size="large" sx={{
            width: '210px',
            height: '60px',
            backgroundColor: 'pink',
            '&:hover': { backgroundColor: 'pink' },
            borderRadius: 0,
          }}>
            FOURTH SINGER
          </Button>
          </Link>
        </Grid>
        </Grid>

        <Outlet/>
</Grid>
  );
}
