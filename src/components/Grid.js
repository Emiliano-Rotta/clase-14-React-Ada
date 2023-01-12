import { Box, Grid } from '@mui/material';

function Gridd() {
    
    return (
        <div>
            <Grid container>
                <Grid item xs={12} sm={6}>
                    <Box border={5} color={"purple"}>
                        ADA
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box border={5} bgcolor={"purple"}>
                        ADA
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
  }
  
  export default Gridd;