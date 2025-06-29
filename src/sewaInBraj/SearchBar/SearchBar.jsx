import SearchIcon from "@mui/icons-material/Search";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";
import { useDispatch } from "react-redux";
import { setItemSearch } from "../app/reducer/tabSlice";

export const SearchBar = () => {
  const dispatch = useDispatch();
  return (
    <Paper
      component="form"
      sx={{ p: "0px 4px", display: "flex", alignItems: "center", width: '50%' }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Your Item"
        inputProps={{ "aria-label": "search items" }}
        onChange={(e) =>
          dispatch(setItemSearch(e.target.value.replace(/^\s+/, "")))
        }
      />
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
    </Paper>
  );
};
