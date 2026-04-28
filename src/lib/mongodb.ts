import { MongoClient, ServerApiVersion } from "mongodb";

declare global {
  // eslint-disable-next-line no-var
  var __mongoClientPromise: Promise<MongoClient> | undefined;
}

function createMongoClient(): MongoClient {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error("MONGODB_URI is not configured.");
  }

  return new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
    // Conservative defaults suitable for this low-to-medium traffic web app.
    maxPoolSize: 20,
    minPoolSize: 0,
    serverSelectionTimeoutMS: 5000,
    connectTimeoutMS: 10000,
  });
}

export async function getMongoClient(): Promise<MongoClient> {
  if (!global.__mongoClientPromise) {
    const client = createMongoClient();
    global.__mongoClientPromise = client.connect();
  }

  return global.__mongoClientPromise;
}

export async function getMongoDb() {
  const client = await getMongoClient();
  return client.db(process.env.MONGODB_DB || "doctor-clinic");
}
