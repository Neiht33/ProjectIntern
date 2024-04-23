const path = require('path');

module.exports = {
  // ...Các cài đặt khác của webpack
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/', // Thư mục đích để lưu trữ ảnh biên dịch
              publicPath: 'images/', // Đường dẫn công cộng đến thư mục ảnh
            },
          },
        ],
      },
    ],
  },
};
