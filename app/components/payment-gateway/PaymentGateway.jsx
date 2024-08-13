// 'use client'
// import React, { useEffect, useState } from 'react';

// const PaymentTest = () => {
//   const amount = 500; // Amount in paise (100 paise = ₹1)
//   const [rzp1, setRzp1] = useState(null); // State variable for Razorpay instance
//   const [orderId, setOrderId] = useState(null); // State variable for order ID

// // /order/validate
//   useEffect(() => {
    
//     const script = document.createElement('script');
//     script.src = 'https://checkout.razorpay.com/v1/checkout.js';
//     script.async = true;
//     script.onload = () => {
//       const options = {
//         "key": 'rzp_test_QjgXchzWkXV70B', // Replace with your test key
//         "amount": amount,
//         "currency": "INR", // Assuming INR currency
//         "name": "Kreatr",
//         "description": "Test Transaction",
//         "image": "https://example.com/your_logo",
//         "order_id": orderId,
//         "handler": async function (response) {
//           const body = {
//             ...response,
//           };
//           const validateRes = await fetch("https://xbhfkqpomc.execute-api.ap-south-1.amazonaws.com/dev/order/validate",{
//             method:"POST",
//             body: JSON.stringify(body),
//             headers:{
//               "Content-Type":"application/json",
//             }
//           });
//           const jsonRes = await validateRes.json();
//           console.log(jsonRes)
//         },
//         "prefill": {
//           "name": "Arnav Kulshrestha",
//           "email": "arnav@theKreatr.com",
//           "contact": "9358600733"
//         },
//         "notes": {
//           "address": "Razorpay Corporate Office"
//         },
//         "theme": {
//           "color": "#3399cc"
//         }
//       };

//       setRzp1(new window.Razorpay(options));
      
//     };
//     document.body.appendChild(script);
//   }, [orderId]);

//   const fetchOrderId = async () => {
//     try {
//       const response = await fetch("https://xbhfkqpomc.execute-api.ap-south-1.amazonaws.com/dev/order", {
//         method: "POST",
//         body: JSON.stringify({
//           amount: amount,
//         }),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });

//       if (!response.ok) {
//         throw new Error('Failed to fetch order ID');
//       }

//       const orderData = await response.json();
//       setOrderId(orderData.id);
//     } catch (error) {
//       console.error('Error fetching order ID:', error);
//       // Handle error appropriately, e.g., display an error message to the user
//     }
//   };

//   const paymentHandler = async (e) => {
//     e.preventDefault();

//     if (!rzp1) {
//       console.error('Razorpay instance not yet created. Waiting for script to load.');
//       return;
//     }else{
//       rzp1.on('payment.failed', function (response){
//         alert(response.error.code);
//         alert(response.error.description);
//         alert(response.error.source);
//         alert(response.error.step);
//         alert(response.error.reason);
//         alert(response.error.metadata.order_id);
//         alert(response.error.metadata.payment_id);
// });
//     }

//     if (!orderId) {
//       await fetchOrderId(); // Fetch order ID before opening Razorpay
//       if (!orderId) {
//         console.error('Failed to retrieve order ID. Please try again.');
//         return;
//       }
//     }

//     const options = { ...rzp1.options }; // Clone options to avoid mutation
//     options.order_id = orderId;

//     rzp1.open(options);
//   };

//   return (
//     <div className="product">
//     </div>
//   );
// };

// export default PaymentTest;