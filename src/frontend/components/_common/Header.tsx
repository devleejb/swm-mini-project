import {
  AppBar,
  Button,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { FunctionComponent } from "react";
import { useRouter } from "next/router";

export const DRAWER_WIDTH = 300;

const Header: FunctionComponent = () => {
  const router = useRouter();

  const handleToHome = () => {
    router.push("/");
  };

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{
            width: 1,
          }}
        >
          <Stack direction="row">
            <Button color="inherit" onClick={handleToHome}>
              <Typography variant="h6">SW Maestro</Typography>
            </Button>
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
