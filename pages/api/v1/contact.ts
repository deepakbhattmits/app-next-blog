import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../../helpers";
import { isValidEmail } from "../../../utils";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (!!req?.method?.match(/post/i)) {
    const { email, name, message } = req?.body;

    if (
      !email ||
      !name ||
      !isValidEmail(email) ||
      name?.trim() === "" ||
      !message ||
      message?.trim() === ""
    ) {
      res
        .status(422)
        .json({ message: "Something wrong with inputs, please try again" });
      return;
    }

    const client = await connectToDatabase();
    const db = client.db();
    try {
      await db.collection("conacts").insertOne({
        email,
        name,
        message,
      });
    } catch (err) {
      // console.error("If some error : ", err);
    }
    res.status(201).json({
      message: "Data stored successfully",
      data: { email, name, message },
    });
  } else {
    res.status(200).send({ messgae: "request reached" });
  }
};
export default handler;
