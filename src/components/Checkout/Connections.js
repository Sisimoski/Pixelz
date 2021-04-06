import CheckoutForm from "./CheckoutForm";
import Booking from "./Booking";
//import Confirmation from "./Confirmation";
import Payment from "./Payment";
import Confirmation from "./Confirmation";

export const Connections = ({
    user,
    orderInfo,
    orderError,
    totalPrice,
    bookingStep,
    handleChange,
    handleSubmit,
    checkoutData,
    handleBackStep,
    handleNextStep,
    setTotalPrice,
    handleCheckout,
    handleSelectChange,
    totalPriceWithCurrency,
    setTotalPriceWithCurrency,
}) => {
    switch (bookingStep) {
        case "dane-zamówienia":
            return (
                <CheckoutForm
                    user={user}
                    orderInfo={orderInfo}
                    checkoutData={checkoutData}
                    handleSubmit={handleSubmit}
                    handleChange={handleChange}
                    handleSelectChange={handleSelectChange}
                />
            );
        case "szczegóły-zamówienia":
            return (
                <Booking
                    user={user}
                    checkoutData={checkoutData}
                    setTotalPrice={setTotalPrice}
                    handleBackStep={handleBackStep}
                    handleNextStep={handleNextStep}
                    handleCheckout={handleCheckout}
                    setTotalPriceWithCurrency={setTotalPriceWithCurrency}
                />
            );
        case "płatność":
            return (
                <Payment
                    user={user}
                    totalPrice={totalPrice}
                    checkoutData={checkoutData}
                    handleBackStep={handleBackStep}
                    handleNextStep={handleNextStep}
                    handleCheckout={handleCheckout}
                    totalPriceWithCurrency={totalPriceWithCurrency}
                />
            );
        default:
            return null;
    }
};