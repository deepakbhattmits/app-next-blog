import { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import fs from "fs/promises";
import { isValidEmail } from "../../../utils";
export const fetchContacts = async () => {
  const postsFilePath = path.join(process.cwd(), "db", "contacts.json");
  const postsJsonData = await fs.readFile(postsFilePath);
  const { data } = JSON.parse(postsJsonData.toString());

  return data;
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  //POST
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
    const newMessage = { email, name, message };

    // write email to whole file
    const contacts = await fetchContacts();
    const contactFilePath = path.join(process.cwd(), "db", "contacts.json");
    const postContact: { email: string }[] = [...contacts, newMessage];
    const postContactJson = JSON.stringify({
      status: "Request Completed",
      statusCode: 200,
      data: postContact,
    });

    fs.writeFile(contactFilePath, postContactJson);
    res
      .status(201)
      .json({ message: "Data stored successfully", data: newMessage });
  }
};
export default handler;
