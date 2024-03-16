import HomeIcon from "../../assets/icons/icon-nav-home.svg"
import MovieIcon from "../../assets/icons/icon-nav-movies.svg"
import TvSeriesIcon from "../../assets/icons/icon-nav-tv-series.svg"
import BookmarkIcon from "../../assets/icons/icon-nav-bookmark.svg"
import { Link, useLocation } from "react-router-dom"
import { Box, Hidden, Typography } from "@mui/material"

const navLinks = [
    {
        name: "Home",
        icon: HomeIcon,
        link: "/"
    },
    {
        name: "Movies",
        icon: MovieIcon,
        link: "/movies"
    },
    {
        name: "Tv Series",
        icon: TvSeriesIcon,
        link: "/tv-series"
    },
    {
        name: "Bookmark",
        icon: BookmarkIcon,
        link: "/bookmark"
    },
]

const Sidebar = () => {
    const { pathname } = useLocation();
  return (
      <Box
          sx={{
              backgroundColor: "#161d2f",
              padding: 2,
              borderRadius: 2,
              display: "flex",
              flexDirection: {
                  xs: "row",
                  lg: "column",
              },
              alignItems: "center",
              justifyContent: "space-between",
              width: {
                  sm: "100%",
                  lg: 200,
              },
          }}
      >
          <Box sx={{
              display: "flex",
              flexDirection: {
                  xs: "row",
                  lg: "column",
              },
              gap: 5,
              alignItems: {
                  xs: "center",
                  ls: "start"
              },
              width: "100%",
          }}>
              <Hidden smDown>
                  <Typography
                      variant="h5"
                      component="h1"
                      my={2}
                      fontWeight={400}
                      fontSize={18}
                  >
                      Movies Scoop
                  </Typography>
              </Hidden> 
              <Box sx={{
                  py: {
                      xs: "0px",
                      ls: "16px"
                  },
                  display: "flex",
                  flexDirection: {
                      xs: "row",
                      lg: "column"
                  },
                  gap: 4,
              }}
              >
                  {navLinks.map((item) => (
                      <Link key={item.name} to={item.link} style={{ textDecoration: "none" }}
                      >
                          <Box sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: 2,
                              color: "white",
                              textDecoration: "none"
                          }}>
                              <img
                                  src={item.icon}
                                  alt={item.name}
                                  style={{
                                      width: "18px",
                                      filter: `${pathname === item.link
                                          ? "invert(58%) sepia(14%) saturate(3166%) hue-rotate(215deg) brightness(91%) contrast(87%)"
                                          : "invert(84%)"
                                          }`,
                                  }} />
                              <Hidden mdDown>
                                  <Typography>{item.name}</Typography>
                              </Hidden>
                          </Box>
                      </Link>
                  ))}
              </Box>
          </Box>
      </Box>
  )
}

export default Sidebar