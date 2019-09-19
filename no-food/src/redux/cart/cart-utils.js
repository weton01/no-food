export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    item => item._id === cartItemToAdd._id
  );

  if (existingCartItem) {
    return cartItems.map(item =>
      item._id === cartItemToAdd._id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemFromRemove) => {
  const existingCartItem = cartItems.find(
    item => item._id === cartItemFromRemove._id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.find(item => item._id !== cartItemFromRemove._id);
  }

  if (existingCartItem) {
    return cartItems.map(item =>
      item._id === cartItemFromRemove._id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
  }
};
