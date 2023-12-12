import { useLocation } from 'react-router-dom';
import { Box, IconButton } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

const SearchComponent = () => {
  
    const location = useLocation();
    const shouldShowSearch = location.pathname === '/invoices';

  return (
    <>
      {shouldShowSearch && (
        <Box
          display="flex"
          backgroundColor={"#ffffff"}
          borderRadius="3px"
        >
          <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
          <IconButton type="button" sx={{ p: 1 }}>
            <SearchIcon />
          </IconButton>
        </Box>
      )}
    </>
  );
};

export default SearchComponent;