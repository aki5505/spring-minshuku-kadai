const stripe = Stripe('pk_test_51PooYLAKC7nubNu4e0fL7HkQcdpxnrhfVIrEneU4FmJzP1hrp2UhtqS95G27ZOkkeH3SRelrJXRmSarCmbRd7nen006A05HrV5');
 const paymentButton = document.querySelector('#paymentButton');
 
 paymentButton.addEventListener('click', () => {
   stripe.redirectToCheckout({
     sessionId: sessionId
   })
 });