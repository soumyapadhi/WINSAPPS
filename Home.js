import React from "react";
 import { createMuiTheme } from "@material-ui/core";
 import { ThemeProvider } from "@material-ui/styles";
 import PostCard01 from './ui/PostCard01';
 import SimplePaper from './ui/paper';
 import createOverrides from './ui/Hometheme';


 const baseTheme = createMuiTheme();

 const Home = () => (
   // Normally, you need just one <ThemeProvider /> at root component
   <ThemeProvider
     theme={{
       ...baseTheme,
       overrides: createOverrides(baseTheme)
     }}
   >
   <SimplePaper />
   </ThemeProvider>
 )

 export default Home


 // <PostCard01 />
