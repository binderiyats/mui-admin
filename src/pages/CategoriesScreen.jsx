import { useEffect, useState } from "react";
import axios from "axios";
import { Delete, Edit, Home } from "@mui/icons-material";
import { BreadCrumbs } from "../components";
import {
  Button,
  IconButton,
  Tooltip,
  Typography,
  Box,
  Stack,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useNavigate } from "react-router";

const breadcrumbs = [
  { label: "", link: "/", icon: <Home /> },
  { label: "Categories" },
];

export const CategoriesScreen = () => {
  const [categories, setCategories] = useState([]);
  const [pageSize, setPageSize] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8000/categories").then((res) => {
      setCategories(res.data);
    });
  }, []);

  const columns = [
    { field: "id", headerName: "#", width: 50 },
    { field: "name", headerName: "Name", flex: 1 },
    { field: "description", headerName: "Description", flex: 3 },
    {
      field: "",
      headerName: "Actions",
      width: 100,
      sortable: false,
      headerAlign: "center",
      renderCell: (params) => (
        <Stack sx={{ flexDirection: "row" }}>
          <Tooltip title="Edit">
            <IconButton
              aria-label="edit"
              color="primary"
              onClick={() => {
                navigate(`/categories/edit/${params.row.id}`);
              }}
            >
              <Edit fontSize="inherit" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete">
            <IconButton aria-label="delete" color="secondary">
              <Delete fontSize="inherit" />
            </IconButton>
          </Tooltip>
        </Stack>
      ),
    },
  ];

  return (
    <>
      <BreadCrumbs items={breadcrumbs} />
      <Stack
        sx={{
          mt: 3,
          bgcolor: "white",
          p: 3,
          borderRadius: 2,
          boxShadow: "0 0 5px rgba(0,0,0,.1)",
        }}
      >
        <Typography variant="h4" sx={{ mb: 3 }}>
          Categories
        </Typography>
        <Stack sx={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Button
            variant="contained"
            onClick={() => {
              navigate("/categories/create");
            }}
          >
            New
          </Button>
          <Button variant="contained">Filter</Button>
        </Stack>
        <Box sx={{ height: 400, width: "100%", mt: 3 }}>
          <DataGrid
            rows={categories}
            columns={columns}
            pageSize={pageSize}
            onPageSizeChange={(size) => setPageSize(size)}
            rowsPerPageOptions={[5, 10, 20]}
          ></DataGrid>
        </Box>
      </Stack>
    </>
  );
};
