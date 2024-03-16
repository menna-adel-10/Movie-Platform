import { Box, Paper } from "@mui/material"
import Layout from "../../Layout"

const Home = () => {
  return <Layout>
    <Box>
      <Paper component="form"
        sx={{
          display: "flex",
          alignItems: "center",
          borderRadius: "default",
          p: 1,
          backgroundColor: "#10141f",
          border: "none"
      }}></Paper>
    </Box>
  </Layout>
}

export default Home