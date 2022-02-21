export const mergeItemsPrice = (items, itemsPrice) => {
  let itemsWithPrice = [];
  items.forEach((item) => {
    let itemWithPrice = itemsPrice.find((itemPrice) => itemPrice.ID === item.sys.id);
    if (itemWithPrice) {
      itemsWithPrice.push({
        ...item,
        price: itemWithPrice.Price,
      })
    }
  })
  return itemsWithPrice;
}