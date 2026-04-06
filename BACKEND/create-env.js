// Script to create .env file
import fs from 'fs';

const envContent = `PORT=5000
MONGO_URI=mongodb+srv://miguel:miguelito12@lostandfound.tpd9hq2.mongodb.net/lostAndFound?appName=lostandfound
JWT_SECRET=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30
NODE_ENV=development
ALLOWED_ORIGINS=http://localhost:5000,http://localhost:3000
`;

fs.writeFileSync('.env', envContent);
console.log('.env file created successfully!');
