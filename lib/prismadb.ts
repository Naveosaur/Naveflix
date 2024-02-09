import { PrismaClient } from "@prisma/client";

// So when the code update, prisma client wont create another clients
const client = global.prismadb || new PrismaClient();
if (process.env.NODE_ENV == "production") global.prismadb = client;

export default client;
