/*
//tham chiếu thư viện
const MongoClient = require('mongodb').MongoClient;

//liên kết mongoDB
var link = "mongodb+srv://quocanh0508:quocanh0508@cluster0.d16b2yy.mongodb.net/CatDog-Platform?retryWrites=true&w=majority";

//tạo 1 đối tượng truyền dữ liệu qua url
var mongo = new MongoClient(link, { userNewUrlParser : true})

//kết nối đến database

mongo.connect(function(err, db) {
    if (err) throw err;
    console.log("Connected to MongoDB");
});
*/

//-------//

const { MongoClient, ServerApiVersion } = require('mongodb');
const url = "mongodb+srv://quocanh0508:quocanh0508@cluster0.d16b2yy.mongodb.net/CatDog-Platform?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(url, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
      console.log("You successfully connected to MongoDB!");

  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

/*
// Tạo collection mới
async function createCollection() {
  const client = new MongoClient(url);

  try {
    await client.connect();

    const db = client.db("Follower");

    // Tạo collection mới
    await db.createCollection('CatDog-Platform');

    console.log('Collection đã được tạo thành công');
  } catch (error) {
    console.error('Lỗi khi tạo collection: ', error);
  } finally {
    await client.close();
  }
}
// Gọi hàm để tạo collection
createCollection();
*/

// Tạo document mới
async function createDocument() {
  const client = new MongoClient(url);

  try {
    await client.connect();

    const db = client.db("CatDog-Platform");
    const collection = db.collection("Follower"); // Thay đổi tên collection của bạn

    // Dữ liệu cho document mới
    const newDocument  = {
      username: 'John Doe'
    };

    // Thêm document vào collection
    const result = await collection.insertOne(newDocument);

    console.log('Document đã được tạo thành công:', result.insertedId);
  } catch (error) {
    console.error('Lỗi khi tạo document:', error);
  } finally {
    await client.close();
  }
}

// Gọi hàm để tạo document
createDocument();