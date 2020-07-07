import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51H2DeLFBjV6Nxfl0QI0FTcxWKtImTITXZLDSvyvF6IUw1vvzmuoBRYRyVILPRCVSRY8DCtuDWudxj9dgotiN1ULr00JuPhfXxU'

const onToken = token => {
  console.log(token)
  alert('Payment Successful!')
}
  return (
    <StripeCheckout
      label='Pay Now'
      name='Crown Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://sendeyo.com/up/d/f3eb2117da'
      description={`Your total price is ${price}`}
      amout={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey = {publishableKey}
    />
  )
}

export default StripeCheckoutButton
