const swagger = async () => {
  try {
    const express = require("express");
    const swaggerJSDoc = require("swagger-jsdoc");
    const swaggerUi = require("swagger-ui-express");

    const app = express(); // Tạo một ứng dụng Express

    const options = {
      definition: {
        open: "3.0.0",
        info: {
          title: "Node JS Cat Dog Platform for mongodb",
          version: "1.0.0",
        },
        servers: [
          {
            url: "http://localhost:5000/",
          }
        ],
      },
      apis: ["./swagger.js"],
    };

    const swaggerSpec = swaggerJSDoc(options);

    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });

  } catch (error) {

  }
};

export default swagger;
