import { Home } from "@mui/icons-material";
import { Stack, Typography, Box, TextField, Button } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { BreadCrumbs } from "../components";
import { useToast } from "../hooks/useToast";

const breadcrumbs = [
  { label: "", link: "/", icon: <Home /> },
  { label: "Categories", link: "/categories" },
  { label: "Create", link: "/categories/create" },
];

export const CategoryCreate = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const show = useToast();
  const navigate = useNavigate();

  const newCategory = () => {
    axios
      .post("http://localhost:8000/categories", { name, description })
      .then((res) => {
        show("Created Category!", "success");
        navigate("/categories");
      });
  };

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
          Create
        </Typography>
        <Box
          component="form"
          onSubmit={(e) => {
            e.preventDefault();
            newCategory();
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
