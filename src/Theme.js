/**
 * @details
 *  Declaracion de temas
 */

const container = {
  MuiContainer: {
    styleOverrides: {
      root: {
        margin: 5,
      },
    },
  },
};

const dark = {
  palette: {
    mode: "dark",
  },
  components: {
    ...container,
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "hsl(209, 23%, 22%)",
          padding: "2vh 5vw",
          fontWeight: 800,
          width: "100",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "hsl(207, 26%, 17%)",
          padding: "15vh 5vw",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          padding: 0,
          margin: 0,
          backgroundColor: "hsl(209, 23%, 22%)",
        },
      },
    },
    MuiCardMedia: {
      styleOverrides: {
        root: {
          height: "200px",
        },
      },
    },
  },
};

module.exports = { dark };
