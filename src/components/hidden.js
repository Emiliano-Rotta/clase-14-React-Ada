import { Button, Hidden } from '@mui/material';

function Hiddenn(props) {

    //smDown oculta cuando sea sm o inferior
    //mdUp oculta cuando sea md o superior
    //only="lg" oculta solo en lg   {["lg", "md"]}
    
    return (
        <div>
            <Hidden smDown>
                <Button>dsds</Button>
            </Hidden>
        </div>
    );
  }
  
  export default Hiddenn;