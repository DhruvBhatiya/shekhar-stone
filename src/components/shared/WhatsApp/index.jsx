import React from "react";
import "./whatsapp.css"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Whatsapp = () => {
    const handleWhatsAppClick = () => {
        const whatsappNumber = "+919829545808"; // Replace with your WhatsApp number
        const message = "Hello, I would like to inquire about your services.";
        window.open(
            `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
            "_blank"
        );
    };

    return (
        <>

            <div style={{ position: "fixed", bottom: "20px", left: "20px", zIndex: 1000 }}>
                <WhatsAppIcon
                    className="whatsapp-button"
                    size="3x"
                    color="#25D366"
                    style={{ cursor: "pointer" }}
                    onClick={handleWhatsAppClick}
                />
            </div>

            {/* <div className="whatsapp-button" onClick={handleWhatsAppClick}>
                <WhatsAppIcon  size="2x" color="#ffffff" />
            </div> */}
        </>
    );
};

export default Whatsapp;
