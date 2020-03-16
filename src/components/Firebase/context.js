import React from 'react';
//this is for not initialize Firebase in our all components
const FirebaseContext = React.createContext(null);
//thanks to FirebaseContext.Provider componment, we have firebase in a top level of the tree 
export default FirebaseContext;