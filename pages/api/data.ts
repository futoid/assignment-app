import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse){
  const data = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "User",
        data: [30, 24, 27, 21],
        backgroundColor: ["#98D89E"],
      },
      {
        label: "Guest",
        data: [15, 20, 25, 40],
        backgroundColor: ["#EE8484"],
      },
    ],
  };
  if (req.method !== "GET") {
    return res.status(405).end();
  }
  try {
    setTimeout(() => {
      return res.status(200).json(data);
    }, 4000)
  } catch (error) {
    console.log(error);
    return res.status(400).end();
  }
};
