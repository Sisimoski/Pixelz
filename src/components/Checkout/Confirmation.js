import { Container, Typography, Button, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import "../Basket/style.css";
import happy from "../../media/happy.png";

const Confirmation = ({ handleEmptyBasket, }) => {
    return (
        <div className="basketBannerContainer" onLoad={handleEmptyBasket}>
            <div className="emptyButton">
                <Button className="shopping-button" component={Link} to="/">
                    Kontynuuj zakupy!
            </Button>
            </div>
            <div className="emptyTekst">
                <Typography className="title" variant="h2">
                    Dziękujemy
                    za Twój udany zakup!
        </Typography>
                <img src={happy}></img>
            </div>
        </div >
    )
}

export default Confirmation
