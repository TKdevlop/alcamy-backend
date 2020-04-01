import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import config from "config";
import mongoose from "mongoose";
//@Helper Routes
import authRoutes from "src/routes/authRoutes";
import authenticate from "src/middleware/authenticate";
//@Initialisation
const app = express();
const PORT = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(cors());
//@API-Rotues
app.use("", authRoutes);

//@API-Helpers
app.use("/helpers", authenticate);

//@error-404
app.use("*", (req, res) => res.status(404).json({ error: "Route Not Found" }));

app.listen(PORT, () => {
  console.log(`started at PORT: ${PORT}`);
});
mongoose.connect(config.get("MONGODB"), { useNewUrlParser: true }).catch(e => {
  console.log(e);
});

export default app;
