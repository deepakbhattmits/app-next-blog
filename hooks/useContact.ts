import { useMutation } from "react-query";

import { api } from "../utils";

const useContact = () => {
  const contactFunc = async (requestData: {
    name: string;
    email: string;
    message: string;
  }) => {
    const { name, email, message } = requestData;
    await new Promise((resolve) => setTimeout(resolve, 2000)); //lag for 2 sec.
    const { data } = await api.post("/api/v1/contact", {
      name,
      email,
      message,
    });
    return data;
  };
  const contactMutation = useMutation(contactFunc, {
    onMutate: (values) => {},
    onSuccess: (data, values) => {},
    onError: (error: any, values, rollbackValue) => {
      return error?.message;
    },
    onSettled: () => {},
  });
  return contactMutation;
};
export default useContact;
