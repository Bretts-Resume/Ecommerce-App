import { PrismaClient } from '@prisma/client';
import sampleData from './sample-data';

async function main() {
    const prisma = new PrismaClient();
    
    // Clear existing data
    await prisma.product.deleteMany();
    
    // Seed products
    const products = await prisma.product.createMany({
        data: sampleData.products,
    });
    
    
    console.log('Database seeded successfully!');
}

main();
