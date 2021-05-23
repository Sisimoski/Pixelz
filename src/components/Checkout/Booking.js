import React from "react";
import {
    List,
    ListItem,
    Button,
    Typography,
    ListItemText,
} from "@material-ui/core";

const Booking = ({ user, checkoutData, handleBackStep, handleNextStep }) => {
    console.log({ user });
    var shippingId = user.shippingOption.id;
    console.log(shippingId);
    var i = 0;
    while (shippingId != user.shippingOptions[i].id) {
        i++
    }
    var shippingCost = user.shippingOptions[i].price.raw;
    const shippingCurrency = checkoutData.live.currency.code;
    const totalShippingCost = checkoutData.live.line_items.reduce((acc, product) => {
        return acc
    }, 0) + shippingCost

    const totalPrice = checkoutData.live.subtotal.raw + totalShippingCost;
    const totalPriceWithCurrency = (`${totalPrice.toFixed(2)} ${shippingCurrency}`);

    return (
        <>
            <List>
                {checkoutData.live.line_items.map((item) => (
                    <ListItem key={item.id}>
                        <ListItemText
                            primary={item.name}
                            secondary={`Ilość: ${item.quantity}`}
                        />
                        <Typography variant="body2">
                            {item.line_total.formatted_with_code}
                        </Typography>

                    </ListItem>

                ))}
                <ListItem>
                    <ListItemText primary="Koszt dostawy" />
                    <Typography variant="body2">
                        {shippingCost} {shippingCurrency}
                    </Typography>
                </ListItem>
                <ListItem>
                    <ListItemText primary="Całkowity koszt" />
                    <Typography variant="body2">
                        {totalPriceWithCurrency}
                    </Typography>
                </ListItem>
            </List>

            <div className="actions">
                <Button
                    size="medium"
                    onClick={(e) => handleBackStep(e, "dane-zamówienia")}
                    variant="contained"
                >
                    Powrót
  </Button>
                <Button
                    onClick={(e) => handleNextStep(e, "płatność")}
                    size="medium"
                    color="secondary"
                    variant="contained"
                >
                    Dalej
  </Button>
            </div>
        </>
    );
};



export default Booking;