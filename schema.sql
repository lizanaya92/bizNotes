DROP DATABASE IF EXISTS biznote; 

CREATE DATABASE biznote; 

\c biznote; 

CREATE TABLE IF NOT EXISTS customer(
  customerID SERIAL NOT NULL PRIMARY KEY,
  firstName VARCHAR(50) NOT NULL,
  lastName VARCHAR(50) NOT NULL,
  address TEXT, 
  phoneNumber VARCHAR(15), 
  emailAddress VARCHAR(50), 
  customerPersonalDetails TEXT, 
  customerProductDetails TEXT,
  lastInteraction DATE, 
  lastInteractionDetails TEXT
); 

-- \dt

INSERT INTO customer ( 
  firstName,
  lastName,
  address, 
  phoneNumber, 
  emailAddress, 
  customerPersonalDetails, 
  customerProductDetails,
  lastInteraction, 
  lastInteractionDetails
) VALUES (
  'Matthew',
  'Metzler', 
  '1967 Monarch Drive, Thornton, CO 80229', 
  '(456)970-1357',
  'metzler.matthew23@gmail.com', 
  'Has two kids. He is a manager at an Ed Tech company. Going to Hawaii in July.',
  'Like natural products. One of his kids is allergic to nuts. Will be looking to buy a new kitchen set around 03/15/2020',
  '2019-11-29', 
  'Bought a case of AllNature soap and got his wife the Rose Lipstick' 
)