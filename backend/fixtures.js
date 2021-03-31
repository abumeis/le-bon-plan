const mongoose = require("mongoose");
const UserModel = require("./models/User");
const ProductModel = require("./models/Product");

mongoose.connect("mongodb://localhost:27017/lebonplan", () => {
  console.log("DB Connectée");
});

async function createUser() {
  await UserModel.deleteMany({}).exec();
  await UserModel.create(
    {
      username: "evidorus",
      password: "dadadada",
      firstname: "damir",
      surname: "saga",
      profilePicture: "Photo de profil de damir",
    },
    {
      username: "sauravus",
      password: "sasasasa",
      firstname: "Saurav",
      surname: "Barua",
      profilePicture: "Photo de profil de Saurav",
    },
    {
      username: "ahmedorus",
      password: "ahmeahme",
      firstname: "Ahmed",
      surname: "FamilyName",
      profilePicture: "Photo de profil d'Ahmed",
    }
  );
}

async function createProducts() {
  await ProductModel.deleteMany({}).exec();
  ProductModel.create([
    {
      name: "iphone20",
      price: 999999,
      Description: "T'est grave énervé si tu l'achete a ce prix la",
      productPicture: "Productimg1",
    },
    {
      name: "iphone10",
      price: 999,
      Description: "Avec ce prix t'est dans la moyenne du pigeon",
      productPicture: "Productimg2",
    },
    {
      name: "huawei p30",
      price: 400,
      Description: "C'est une offre en or, fonce bg",
      productPicture: "Productimg3",
    },
  ]);
}
createProducts();
createUser();
