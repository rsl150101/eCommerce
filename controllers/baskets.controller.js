const BasketSevice = require('../services/baskets.service');

class BasketController {
  basketSevice = new BasketSevice();

  //* 장바구니 목록 가져오기
  getBaskets = async (req, res) => {
    const userId = 1;
    const basketData = await this.basketSevice.getBaskets(userId);
    return res.send(JSON.stringify(basketData));
  };

  patchBasketQuantity = async (req, res) => {
    const { id } = req.params;
    const { quantity } = req.body;

    const msg = await this.basketSevice.patchBasketQuantity(id, quantity);
    return res.send(msg);
  };
}

module.exports = BasketController;
