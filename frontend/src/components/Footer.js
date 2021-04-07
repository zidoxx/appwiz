import React from "react";

export const Footer = () => {
    return (
        <div>
            <footer>
                <h3>Precios estan en pesos colombianos</h3>
                <div className="iconos">
                    <img
                        src="/img/facebook-circled-shake.gif"
                        alt="icono facebook"
                    />
                    <img src="/img/whatsapp-shake.gif" alt="icono facebook" />
                </div>
                <a className="arrow" href="#inicio">
                    <img src="/img/arrowup.png" alt="icon arrow up" /> Ir Arriba
                </a>
            </footer>
        </div>
    );
};

export default Footer;
