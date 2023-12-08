/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-undef
const express = require('express');
// eslint-disable-next-line no-undef
const cors = require('cors');
// eslint-disable-next-line no-undef
const colors = require('colors');
const app = new express();
// eslint-disable-next-line no-undef
const oracledb = require('oracledb');

// Oracle DB Thin Driver Configuration
oracledb.initOracleClient({ libDir: '' });

// Oracle DB Configuration
const dbConfig = {
    user: 'puppy',
    password: 'puppy',
    connectString: 'localhost:1521/xe'
};


app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(express.json({ limit: '50mb' }));
app.use(cors())

app.get('/', (req, res) => {
    res.send('Server is UP and Running');
});


// Register User API
app.post('/register', async (req, res) => {
    const { email, password } = req.body;
    let username = email.split('@')[0];
    let user_id = Math.floor(Math.random() * 1000000000) + username;
    let connection;
    try {
        connection = await oracledb.getConnection(dbConfig);
        const sql = `INSERT INTO USERS (user_id, username, email, password) 
                     VALUES (:user_id, :username, :email, :password)`;
        const result = await connection.execute(sql, [user_id, username, email, password], { autoCommit: true });
        console.log("Row inserted", result.rowsAffected);
    }
    catch (err) {
        console.error(err);
    }
    finally {
        if (connection) {
            try {
                await connection.close();
            } catch (err) {
                console.error(err);
            }
        }
    }
    res.status(200).send({ message: 'Registration Successful' });
});


// Login User API
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    let connection;
    try {
        connection = await oracledb.getConnection(dbConfig);
        const sql = `SELECT * FROM USERS WHERE email = :email`;
        const result = await connection.execute(sql, [email]);
        if (result.rows.length === 0) {
            return res.status(400).send({ message: 'User does not exist' });
        }
        else if (result.rows[0][3] !== password) {
            return res.status(401).send({ message: 'Invalid Credentials' });
        }
        const userid = result.rows[0][0];
        const username = result.rows[0][1];
        const useremail = result.rows[0][2];
        const user = { userid, username, useremail };
        res.status(200).send({ message: 'Login Successful', user });
    }
    catch (err) {
        console.error(err);
    }
    finally {
        if (connection) {
            try {
                await connection.close();
            } catch (err) {
                console.error(err);
            }
        }
    }
});



app.listen(3000, () => {
    console.clear();
    console.log('Server running on port 3000'.green);
    console.log('http://localhost:3000'.yellow);
});

oracledb.getConnection(dbConfig, (err, connection) => {
    if (err) {
        console.log(err.message.red);
        return;
    }
    console.log('Database connection was successful'.green);
    connection.close();
});