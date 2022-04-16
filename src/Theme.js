/**
 * @details
 *  Declaracion de temas
 */

const dark = {
  palette: {
    mode: "dark",
  },
  components: {
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
    MuiInputBase: {
      styleOverrides: {
        root: {
          backgroundColor: "hsl(209, 23%, 22%)",
          borderColor: "hsl(209, 23%, 22%)",
          border: 0,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#2b3945",
          color: "white",
          padding: "5px 30px",
        },
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "white",
          },
        },
      },
    },
  },
};

const light = {
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "hsl(0, 0%, 100%)",
          padding: "2vh 5vw",
          fontWeight: 800,
          width: "100",
          flexDirection: "row",
          alignItems: "center",
          color: "black",
          justifyContent: "space-between",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "hsl(0, 0%, 98%)",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          padding: 0,
          margin: 0,
          backgroundColor: "hsl(0, 0%, 100%)",
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
    MuiInputBase: {
      styleOverrides: {
        root: {
          height: "100%",
          padding: "0 10px",
          backgroundColor: "hsl(0, 0%, 100%)",
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          backgroundColor: "hsl(0, 0%, 100%)",
          borderColor: "hsl(0, 0%, 100%)",
          border: 0,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "hsl(0, 0%, 100%)",
          color: "black",
          padding: "5px 30px",
        },
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "white",
          },
        },
      },
    },
  },
};

module.exports = { dark, light };
