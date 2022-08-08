import createHandler from "next-connect";
import { ObjectId } from "mongodb";

import dbPromise from "@/modules/db";

const handler = createHandler();
export default handler;

handler.get(async (req, res) => {
  res.json({ todo: await getTodo(req.query._id) });
});

handler.put(async (req, res) => {
  const { text, status } = JSON.parse(req.body);

  const { upsertedId } = await (
    await dbPromise
  )
    .db()
    .collection(`todos`)
    .updateOne(
      { _id: ObjectId(req.query._id) },
      {
        $set: { text, status },
      }
    );

  res.json({ _id: upsertedId });
});

export async function getTodo(_id) {
  const todo = await (
    await dbPromise
  )
    .db()
    .collection("todos")
    .aggregate([
      {
        $match: { _id: ObjectId(_id) },
      },
    ])
    .toArray();

  return {
    todo: todo[0],
  };
}
