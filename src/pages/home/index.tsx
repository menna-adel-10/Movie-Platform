import { Box, InputAdornment, Paper, Typography } from "@mui/material"
import Layout from "../../Layout"
import { SetStateAction, useState } from "react"
import SearchIcon from "../../assets/icons/icon-search.svg"
import MovieTrendList from "../../components/movie-list/movieTrendList"
import MovieList from "../../components/movie-list"
const Home = () => {
  const [search, setSearch] = useState("");
  const handleSearch = (e: { target: { value: SetStateAction<string> } }) => {
    setSearch(e.target.value);
  };
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
        }}
        value={search}
        onChange={handleSearch}
        startAdornment={
          <InputAdornment position="start">
            <img
              src={SearchIcon}
              alt="search icon"
              width={20}
              height={20}
            />
          </InputAdornment>
      }></Paper>
    </Box>
    <Box py={2} px={4}>
      {search === "" ? (
        <Box width="100%">
          <Box width="100%">
            <Typography variant="h5" component="h1" my={6} fontWeight={400}>
              Trending
            </Typography>
            <MovieTrendList trendingList={trendingList} />
          </Box>
          <Box width="100%">
            <Typography variant="h5" component="h1" my={6} fontWeight={400}>
              Recommended For You
            </Typography>
            <MovieList recommendList={recommendList} />
          </Box>
        </Box>
      ) : (
          <Box width="100%">
            <Typography>Found</Typography>
          </Box>
      )}
    </Box>
  </Layout>
}

export default Home