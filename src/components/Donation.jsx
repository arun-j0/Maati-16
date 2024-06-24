<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Donate to Bank of Baroda</title>
    <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Lora:wght@400;700&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Lora', serif;
            background-color: #e0c9a1; /* Light Brown */
            margin: 0;
            padding: 0;
        }
        .container {
            width: 90%;
            max-width: 600px;
            margin: 50px auto;
            background: #f2e5d2; /* Lighter Brown */
            padding: 20px;
            box-shadow: 0 0 15px rgba(139, 69, 19, 0.3); /* Saddle Brown shadow */
            border-radius: 12px;
            color: #5d493e; /* Dark Brown text */
        }
        h1 {
            text-align: center;
            color: #8b5a2b; /* Brown */
            margin-bottom: 20px;
            font-family: 'Great Vibes', cursive;
            font-size: 36px;
        }
        .account-info, .form-section {
            margin-bottom: 20px;
        }
        .account-info p, .form-section p {
            margin: 5px 0;
            color: #5d493e; /* Dark Brown */
            font-size: 16px;
        }
        .form-section {
            background-color: #d9c1a3; /* Tan */
            padding: 20px;
            border-radius: 8px;
            background-image: url('https://www.transparenttextures.com/patterns/escheresque.png'); /* Pattern URL */
        }
        .form-section label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
            color: #5d493e; /* Dark Brown */
        }
        .form-section input, .form-section select {
            width: 100%;
            padding: 10px;
            margin-bottom: 10px;
            border: 1px solid #8b5a2b; /* Brown */
            border-radius: 4px;
            box-sizing: border-box;
            font-family: 'Lora', serif;
        }
        .form-section button {
            width: 100%;
            padding: 12px;
            background: #8b5a2b; /* Brown */
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
            font-family: 'Lora', serif;
        }
        .form-section button:hover {
            background: #5d493e; /* Darker Brown */
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Donate to Bank of Baroda</h1>
        <div class="account-info">
            <h2>Bank Account Details</h2>
            <p><strong>Account no:</strong> 49918100000881</p>
            <p><strong>Account Holder Name:</strong> Hemanshu</p>
            <p><strong>IFSC:</strong> BARB0BUDDHA (5th Character is ZERO)</p>
            <p><strong>Branch:</strong> Buddha Colony</p>
            <p><strong>Pay Online:</strong> 6205415221@ybl</p>
        </div>
        <div class="form-section">
            <h2>Donation Details</h2>
            <form action="your_backend_script.php" method="post">
                <label for="name">Name</label>
                <input type="text" id="name" name="name" required>
                
                <label for="address">Address</label>
                <input type="text" id="address" name="address" required>
                
                <label for="email">Email ID</label>
                <input type="email" id="email" name="email" required>
                
                <label for="pan">PAN</label>
                <input type="text" id="pan" name="pan" required>
                
                <label for="amount">Amount Donated</label>
                <input type="number" id="amount" name="amount" required>
                
                <label for="payment">Payment Method</label>
                <select id="payment" name="payment" required>
                    <option value="">Select Payment Method</option>
                    <option value="creditCard">Credit Card</option>
                    <option value="debitCard">Debit Card</option>
                    <option value="upi">UPI</option>
                    <option value="paypal">PayPal</option>
                    <option value="bankTransfer">Bank Transfer</option>
                </select>
                
                <button type="submit">Donate</button>
            </form>
        </div>
    </div>
</body>
</html>
