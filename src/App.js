import { Stack } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import { Route, Routes } from "react-router";
import { CategoryCreate } from "./pages/CategoryCreate";
import { CategoryEdit } from "./pages/CategoryEdit";
import { Layout } from "./components/Layout";
import { CategoriesScreen, HomeScreen } from "./pages";

const bgColor = blueGrey[50];

const wrapperStyle = {
  p: 5,
  bgcolor: bgColor,
  width: "calc(100vw - 65px)",
  minHeight: "calc(100vh - 65px)",
  boxSizing: "border-box",
};

function App() {
  return (
    <Layout>
      <Stack sx={wrapperStyle}>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/categories" element={<CategoriesScreen />} />
          <Route path="/categories/edit/:id" element={<CategoryEdit />} />
          <Route path="/categories/create" element={<CategoryCreate />} />
        </Routes>
      </Stack>
    </Layout>
  );
}

export default App;
