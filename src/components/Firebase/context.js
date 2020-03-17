import React from 'react';
//this is for not initialize Firebase in our all components
const FirebaseContext = React.createContext(null);

export const withFirebase = Component => props => (
    <FirebaseContext.Consumer>
      {firebase => <Component {...props} firebase={firebase} />}
    </FirebaseContext.Consumer>
  );
  
//thanks to FirebaseContext.Provider componment, we have firebase in a top level of the tree 
export default FirebaseContext;