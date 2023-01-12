import { ThemeProvider,createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';
import FuncionRuta from "./components/FuncionRuta"


function App() {

  const theme = createTheme({
    palette: {
      primary: {
        main: purple[500],
      },
      secondary: {
        main: green[500],
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <FuncionRuta />

    </ThemeProvider>
  );
}

export default App;