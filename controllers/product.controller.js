//ສົ່ງອອກ ໂມດູລທີ່ຊື່ວ່າ getAllProducts
exports.getAllProducts = (req, res) => {
  //ຕອບກັບໄປຫາ client ສະຖານະ 200 ແລະ ຂໍ້ຄວາ Get all products ໃນຮູບແບບ json
  res.status(200).json({
    message: "Get all products",
  });
};
