import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@email.com',
    password: bcrypt.hashSync('123456', 10), // hash the password sync way
    isAdmin: true,
  },
  {
    name: 'Abhishek Sharma',
    email: 'abhishek@email.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Ketan Patel',
    email: 'ketan@email.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Om Patel',
    email: 'om@email.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;