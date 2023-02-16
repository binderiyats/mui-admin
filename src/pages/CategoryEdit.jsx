import { Home, Edit } from "@mui/icons-material";
import { Stack, Typography, Box, TextField, Button } from "@mui/material";
import { BreadCrumbs } from "../components";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

const breadcrumbs = [
  { label: "", link: "/", icon: <Home /> },
  { label: "Categories", link: "/categories" },
  { label: "Edit", link: "/categories/edit" },
];

export const CategoryEdit = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8000/categories/${id}`).then((res) => {
      setName(res.data.name);
      setDescription(res.data.description);
    });
  }, []);

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
          Edit
        </Typography>
        <Box
          component="form"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <TextField
            sx={{ width: "100%", mb: 2 }}
            label="Name"
            variant="filled"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <TextField
            sx={{ width: "100%", mb: 2 }}
            label="Description"
            variant="filled"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <Stack sx={{ flexDirection: "row", gap: 2 }}>
            <Button type="submit" variant="contained">
              Save
            </Button>
            <Button
              variant="outlined"
              onClick={() => {
                navigate("/categories");
              }}
            >
              Cancel
            </Button>
          </Stack>
        </Box>
      </Stack>
    </>
  );
};
