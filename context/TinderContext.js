import { useState, createContext, useEffect } from "react";
import { faker } from "@faker-js/faker";
import { useMoralis } from "react-moralis";

export const TinderContext = createContext();

export const TinderProvider = ({ children }) => {
  const { authenticate, isAuthenticated, user, Moralis } = useMoralis();
  const [cardsData, setCardsData] = useState([]);
  const [currentAccount, setCurrentAccount] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    checkWalletConnection();

    if (isAuthenticated) {
      requestUsersData(user.get("ethAddress"));
      requestCurrentUserData(user.get("ethAddress"));
    }
  }, [isAuthenticated]);

  const checkWalletConnection = async () => {
    if (isAuthenticated) {
      const address = user.get("ethAddress");
      setCurrentAccount(address);
      requestToCreateUserProfile(address, faker.name.findName());
    } else {
      setCurrentAccount("");
    }
  };

  const connectWallet = async () => {
    if (!isAuthenticated) {
      try {
        await authenticate({
          signingMessage: "Log in using Moralis",
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const disconnectWallet = async () => {
    await Moralis.User.logOut();
    setCurrentUser("");
  };

  return (
    <TinderContext.Provider
      value={{
        connectWallet,
        disconnectWallet,
        currentUser,
        currentAccount,
      }}
    >
      {children}
    </TinderContext.Provider>
  );
};
