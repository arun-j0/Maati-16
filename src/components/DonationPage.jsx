import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
  margin-top: 50px;
`;

const HomeContainer = styled.div`
  text-align: center;
  margin-top: 50px;
`;

const DonateButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #45a049;
  }
`;

const DonationContainer = styled.div`
  width: 300px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #45a049;
  }
`;

const DonationPage = () => {
  const [showDonationForm, setShowDonationForm] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('');

  const handleDonateClick = () => {
    setShowDonationForm(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for your donation, ${name}!`);
  };

  return (
    <Container>
      {!showDonationForm ? (
        <HomeContainer>
          <h1>Welcome to Our Site</h1>
          <DonateButton onClick={handleDonateClick}>
            Donate Here
          </DonateButton>
        </HomeContainer>
      ) : (
        <DonationContainer>
          <h1>Donate to Our Cause</h1>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label>Name:</Label>
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>Email:</Label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>Donation Amount:</Label>
              <Input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
              />
            </FormGroup>
            <SubmitButton type="submit">Donate</SubmitButton>
          </Form>
        </DonationContainer>
      )}
    </Container>
  );
};

export default DonationPage;

