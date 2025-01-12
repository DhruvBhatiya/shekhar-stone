import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ContactForm from "../../pages/contact/ContactForm";

const InquiryModal = ({ open, onClose, product }) => {
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
    <Dialog open={open} onClose={onClose} maxWidth={product ? 'md' : 'sm'} fullWidth>
      <DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <h1 className="text-2xl font-semibold uppercase">Product Inquiry</h1>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Box display="flex" flexDirection={{ xs: "column", md: "row" }} gap={4}>
          {/* Left Side: Product Details */}
          {product && (
            <Box className="hidden md:hidden lg:block xl:block"  borderRight={{ md: "1px solid #ccc" }} pr={{ md: 4 }}>
              <h2 className="text-xl font-bold">{product.title}</h2>
              {/* <p><strong>Price:</strong> ${product.price}</p> */}
              {/* <p><strong>Description:</strong> {product.content}</p> */}
              <img
                src={product.image}
                alt={product.name}
                style={{ width: "auto", minWidth: '300px', height: '400px', objectFit: 'cover', borderRadius: "8px", marginTop: "16px" }}
              />
            </Box>
          )}

          {/* Right Side: Inquiry Form */}
          <Box >
            <h3 className="text-lg font-semibold mb-4">Please Fill the Inquiry Form</h3>
            <ContactForm product={product ? product.title : ''} />
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default InquiryModal;
