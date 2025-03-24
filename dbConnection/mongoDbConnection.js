const mongoose = require('mongoose')

const mongoDbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI,{ 
     useNewUrlParser : true, 
     useUnifiedTopology : true 
     });
    console.log("✅ Connexion réussie à MongoDB Atlas");
  } catch (error) {
    console.error("❌ Erreur lors de la connexion à MongoDB :", error.message);
  }
};

// const mongoDbConnection = () => {
//    mongoose
//    .connect(process.env.MONGO_URI)
//    .then(() => console.log("Connexion réussie à MongoDB Atlas"))
//    .catch((err) => console.error("Erreur lors de la connexion à MongoDB :", err.message));
// }


module.exports = mongoDbConnection;