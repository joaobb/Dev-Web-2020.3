import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Logo from '../../assets/tender_logo.png';

import SignIn from './SignIn';
import SignUp from './SignUp';
import { Container, AccessForm, TenderLogo } from './styles';

const Access = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <Container isSignIn={isSignIn}>
      <Router>
        <AccessForm>
          <TenderLogo alt="Tender" src={Logo} />

          <div>
            <Route
              exact
              path="/login"
              render={(props) => <SignIn {...props} />}
            />
            <Route path="/register" render={(props) => <SignUp {...props} />} />
          </div>

          <Link
            to={isSignIn ? '/register' : '/login'}
            className="accessTypes"
            onClick={toggleSignIn}
          >
            {isSignIn ? 'I still have no' : 'I already have an'} account
          </Link>
        </AccessForm>
      </Router>
    </Container>
  );
};

export default Access;
