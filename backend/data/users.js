import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Arnav Ajey',
        email: 'arnavajey@example.com',
        password: bcrypt.hashSync('123456', 10),
        
    },
    {
        name: 'Rakshak Singh',
        email: 'rakshak@example.com',
        password: bcrypt.hashSync('123456', 10),
        
    },
]

export default users
