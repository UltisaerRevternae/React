import React from "react";

const ItemsContainer = ({ children }) => {

  return (
    <div className="ItemsContainer">
      {React.Children.map(children, child => 
        child && React.cloneElement(child)
      )}
    </div>
  );
};

export { ItemsContainer };
