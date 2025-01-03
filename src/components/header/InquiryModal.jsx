import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Box,
} from "@mui/material";
import ContactForm from "../../pages/contact/ContactForm";

const InquiryModal = ({ open, onClose }) => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = () => {
    console.log("Form Data:", form);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <Box className="p-10">
        <h1 className="text-4xl font-semibold uppercase mb-5">Send Inquiry</h1>
        <ContactForm />
      </Box>

      {/* <DialogContent>
        <TextField
          fullWidth
          label="Name"
          name="name"
          value={form.name}
          onChange={handleInputChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Email"
          name="email"
          value={form.email}
          onChange={handleInputChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Message"
          name="message"
          value={form.message}
          onChange={handleInputChange}
          margin="normal"
          multiline
          rows={4}
        />
      </DialogContent> */}


      {/* <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary" variant="contained">
          Submit
        </Button>
      </DialogActions> */}
    </Dialog>
  );
};

export default InquiryModal;
