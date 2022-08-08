import createHandler from "next-connect";
import { jsonify } from "@/modules/db";
import dbPromise from "@/modules/db";

const handler = createHandler();
export default handler;

handler.get(async (req, res) => {
  res.json(await getTodos());
});

handler.post(async (req, res) => {
  const { _id, text, status } = JSON.parse(req.body);

  const { insertedId } = await (await dbPromise)
    .db()
    .collection(`todos`)
    .insertOne({ text, status });
  res.json({ _id: insertedId });
});

export async function getTodos() {
  return await (await dbPromise)
    .db()
    .collection("todos")
    .aggregate([])
    .toArray();
}
