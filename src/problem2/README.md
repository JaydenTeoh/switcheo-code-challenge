## Task 2
Create a transaction form based on the following template.

```html
<html>

<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Fancy Form</title>

  <!-- You may add more stuff here -->
  <link href="style.css" rel="stylesheet" />
</head>

<body>

  <!-- You may reorganise the whole HTML, as long as your form achieves the same effect. -->
  <form onsubmit="return !1">
    <label for="input-address">ETH Address</label>
    <input id="input-address" />

    <label for="input-amount">Amount to send</label>
    <input id="input-amount" />

    <label for="input-otp">OTP Authentication</label>
    <input type="number" id="input-otp" />

    <button>SEND TOKENS</button>
  </form>
  <script src="script.js"></script>
</body>

</html>
```

*You may use any third party plugin, library, and/or framework for this problem.*

1. You may add input validation/error messages to make the form interactive.
2. Your submission will be rated on its usage intuitiveness and visual attractiveness.
3. Show us your frontend development and design skills, feel free to totally disregard the provided files for this problem.

Please submit your solution using the files provided in the skeletal repo, including any additional files your solution may use.


## Demo

[Live Demo](https://switcheo-code-challenge.vercel.app/)


## Languages & Tools

### HTML

### CSS
  * TailwindCSS for inline-styling

### UI Tools
  * NextJS for building reusable components and introducing state to the app <br />
  * Framer Motion for React-compatible motion elements<br />
  * React-moralis for access to Moralis SDK and ease of connection to the Ethereum Network<br />
  * web3uikit for lightweight UI components for Web3 developing<br />
  
## Approach
 
Although this was a mainly front-end challenge, I wanted to implement backend logic to showcase how Web3 functions can be implemented as attractive UI components. I decided to make the ETH transaction form functional using `ethers`. The ConnectButton from `web3uikit` allows users connect their wallets to the application to transact ETH easily. The NotificationProvider from `web3uikit` allows for input validation/error messages, further adding to the functionality of the website. As the form is actually functional, I decided to remove the OTP validation input as it would be a huge inconvenience for users who are looking to transact seamlessly and repetively. <br />

Once the backend logic of the application was in place, I began working on the aesthetics and user experience of the website. The components of the website are mainly styled using `TailwindCSS`. I didn't want the form to occupy the majority of the page, thus I decided to let it be toggle on and off using a button placed in the center of the page. The animation the button to toggle the form as well as the entry and exit of the form was built using `Framer Motion`. This leaves a sleek website that has space for aesthetics without taking focus away from the purpose of the website which is a form to transfer ETH. 

## Screenshots

Here are some screenshots of the website to showcase the functionalities of the website.

