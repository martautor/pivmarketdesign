import { Box } from "@mui/material";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <Box component='div' >
      <Header/>
      <Content/>
      <Footer/>
    </Box>
  );
}

export default App
