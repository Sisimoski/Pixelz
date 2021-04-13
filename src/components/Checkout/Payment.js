import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import {
    Elements,
    CardElement,
    ElementsConsumer,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe('pk_test_51IZxdyKd6cRkqrqn11O40GnDdjWp2EF9O82AR3B2WWKmrbJE98rqLBepfEGMvDNDkOjtCNsCEsawHzLuJecloRcb00Krfqn8H6');
const Payment = ({
    user,
    checkoutData,
    handleBackStep,
    handleNextStep,
    handleCheckout,
}) => {
    var shippingId = user.shippingOption.id;
    var i = 0;
    while (shippingId != user.shippingOptions[i].id) {
        i++
    }
    var shippingCost = user.shippingOptions[i].price.raw;
    const shippingCurrency = checkoutData.live.currency.code;
    const totalShippingCost = checkoutData.live.line_items.reduce((acc, product) => {
        return acc
    }, 0) + shippingCost;
    const totalPrice = checkoutData.live.subtotal.raw + totalShippingCost;
    const totalPriceWithCurrency = (`${totalPrice.toFixed(2)} ${shippingCurrency}`);
    const handleSubmit = async (e, elements, stripe) => {
        e.preventDefault();

        if (!stripe || !elements) return;

        const cardElement = elements.getElement(CardElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: cardElement,
        });

        if (error) {
            console.log("Error ======>>>>", error);
        } else {
            const orderData = {
                payment: {
                    gateway: "stripe",
                    stripe: {
                        payment_method_id: paymentMethod.id,
                    },
                },
                shipping: {
                    name: "stander",
                    street: user.address,
                    town_city: user.city,
                    county_state: user.shippingSubdivision,
                    postal_zip_code: user.postcode,
                    country: user.shippingCountry,
                },
                customer: {
                    firstname: user.firstName,
                    lastname: user.lastName,
                    email: user.email,
                },
                line_items: checkoutData.live.line_items,
                fulfillment: { shipping_method: user.shippingOptions },
            };

            handleCheckout(checkoutData.id, orderData);

        }
    };

    return (
        <>
            <Elements stripe={stripePromise}>
                <ElementsConsumer>
                    {({ elements, stripe }) => (
                        <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
                            <CardElement />
                            <div className="space" />
                            <div className="actions payment-actions">
                                <Button
                                    variant="outlined"
                                    onClick={(e) => handleBackStep(e, "szczegóły-zamówienia")}
                                >
                                    Powrót
                </Button>
                                <Button
                                    component={Link}
                                    to="/Confirmation"
                                    variant="contained"
                                    disabled={!stripe}
                                    color="primary"
                                >
                                    Zapłać {totalPriceWithCurrency}
                                </Button>
                            </div>
                        </form>
                    )}
                </ElementsConsumer>
            </Elements>
        </>
    );
};

export default Payment;