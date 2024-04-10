const totalPrice = (data) => {
  return data.reduce((acc, cur) => acc + cur.price, 0)
}

const randomDate = (start, end) => {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
}

export { totalPrice, randomDate }