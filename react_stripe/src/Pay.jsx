import StripeCheckout from 'react-stripe-checkout';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';

const KEY = "pk_test_51JnetXCyKne5vhrwv3LPEFwIsFlkEEWQhsBs44opwUta9LGiBwDmtKeHMM798xLFvkkMbfqiN9b9Hs8ftCliUyEg00x54ntCmi"

const Pay = () => {
    
    const [stripeToken, setStripeToken] = useState(null);
    const history = useHistory();

    const onToken = (token) => {
        setStripeToken(token);
    };

    useEffect(() => {
        const makeRequest = async () =>{
            try{
                const res = await axios.post(
                    "http://localhost:5000/api/checkout/payment",
                    {
                        tokenId:stripeToken.id,
                        amount:2000,
                    }
                );
                console.log(res.data);
                history.push("/sucess");
            } catch(err) {
                console.log(err)
            }
        };
        stripeToken && makeRequest();
    }, [stripeToken, history]);
    
    return (
        <div
            style={{
                height:"100vh",
                display:"flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            {stripeToken ? (
                <span>Processing. Please wait...</span>
                    ) : (
                <StripeCheckout 
                    name="Lama Shop"
                    image="https://images.unsplash.com/photo-1634662405202-3c3e2472bb15?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
                    billingAddress
                    shippingAddress
                    description = "Your total is $20"
                    amount={2000}
                    token={onToken}
                    stripeKey={KEY}
                >
                    <button
                        style={{
                            border:"none",
                            width:120,
                            borderRadius: 5,
                            padding:"20px",
                            backgroundColor: "black",
                            color: "white",
                            fontWeight: "600",
                            cursor: "pointer",
                        }}
                    >
                        Pay Now
                    </button>
                </StripeCheckout>
            )}
        </div>
    );
};

export default Pay;