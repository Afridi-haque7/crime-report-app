import {PrismaClient} from "@prisma/client";

declare global {
    var prisma: PrismaClient | undefined;
}

// let prisma: any;
// if(process.env.NODE_ENV === 'production') {
//     prisma = new PrismaClient();
// }else{
//     if (!global.prisma) {
//       global.prisma = new PrismaClient();
//     }
//     prisma = global.prisma;
// }

// export default prisma;

const db = globalThis.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalThis.prisma = db;

export default db;