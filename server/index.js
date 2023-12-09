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
// eslint-disable-next-line no-undef
const path = require('path');

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
app.use(cors());
// eslint-disable-next-line no-undef
app.use(express.static(path.join(__dirname, '/dist'))); // For deployment

app.get('/', (req, res) => {
    res.send('Server is UP and Running');
    // eslint-disable-next-line no-undef
    res.sendFile(path.join(__dirname, '/dist/index.html')); // For deployment
});


// Register User API
app.post('/api/auth/register', async (req, res) => {
    const { email, password } = req.body;
    let username = email.split('@')[0];
    let user_id = Math.floor(Math.random() * 1000000000) + username;
    let connection;
    try {
        connection = await oracledb.getConnection(dbConfig);
        // Check if user already exists
        const sql = `SELECT * FROM USERS WHERE email = :email`;
        const result = await connection.execute(sql, [email]);
        if (result.rows.length !== 0) {
            return res.status(200).send({ message: 'Account already exist' });
        }
        const sqlinsert = `INSERT INTO USERS (user_id, username, email, password) 
                     VALUES (:user_id, :username, :email, :password)`;
        const resultinsert = await connection.execute(sqlinsert, [user_id, username, email, password], { autoCommit: true });
        const returnresult = await connection.execute(sql, [email]);
        const userid = returnresult.rows[0][0];
        const username1 = returnresult.rows[0][1];
        const useremail = returnresult.rows[0][2];
        const user = { userid, username1, useremail };
        res.status(200).send({ message: 'Account Created', user });
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


// Login User API
app.post('/api/auth/login', async (req, res) => {
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


// Team API
app.post('/api/team/create', async (req, res) => {
    const { userid, teamnameorg, coachname } = req.body;
    // convert teamname to lowercase
    const team_name = teamnameorg.toLowerCase();
    const teamid = Math.floor(Math.random() * 1000000000) + team_name;
    let connection;
    try {
        connection = await oracledb.getConnection(dbConfig);
        const sql = `SELECT * FROM TEAMS WHERE team_name = :team_name`;
        const result = await connection.execute(sql, [team_name]);
        if (result.rows.length !== 0) {
            return res.status(200).send({ message: 'Team already exists' });
        }
        const sqlinsert = `INSERT INTO TEAMS (userid, team_name, coachname, teamid) 
                     VALUES (:userid, :teamname, :coachname, :teamid)`;
        const resultinsert = await connection.execute(sqlinsert, [userid, team_name, coachname, teamid], { autoCommit: true });
        const returnresult = await connection.execute(sql, [team_name]);
        const teamid1 = returnresult.rows[0][0];
        const teamname1 = returnresult.rows[0][1];
        const teamuserid = returnresult.rows[0][2];

        const teamdata = { teamid1, teamname1, teamuserid };
        res.status(200).send({ message: 'Team Created', teamdata });
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

// Get all teams API
app.get('/api/team/getall', async (req, res) => {
    let connection;
    try {
        connection = await oracledb.getConnection(dbConfig);
        const sql = `SELECT * FROM TEAMS`;
        const result = await connection.execute(sql);
        // bind the title and content
        const teams = result.rows.map((team) => {
            return {
                teamid: team[0],
                teamname: team[1],
                userid: team[2],
                coachname: team[3]
            };
        });
        res.status(200).send({ message: 'Teams Fetched', teams });
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


// Create Player API
app.post('/api/player/create', async (req, res) => {
    const { teamid, playername, playerposition } = req.body;
    const playerid = Math.floor(Math.random() * 1000000000) + playername;
    let connection;
    try {
        connection = await oracledb.getConnection(dbConfig);
        const sql = `SELECT * FROM PLAYERS WHERE playername = :playername`;
        const result = await connection.execute(sql, [playername]);
        if (result.rows.length !== 0) {
            return res.status(200).send({ message: 'Player already exists' });
        }
        const sqlinsert = `INSERT INTO PLAYERS (playerid, teamid, playername, playerposition) 
                     VALUES (:playerid, :teamid, :playername, :playerposition)`;
        const resultinsert = await connection.execute(sqlinsert, [playerid, teamid, playername, playerposition], { autoCommit: true });
        const returnresult = await connection.execute(sql, [playername]);
        const playerid1 = returnresult.rows[0][0];
        const playername1 = returnresult.rows[0][1];
        const playerposition1 = returnresult.rows[0][2];
        const teamid1 = returnresult.rows[0][3];

        const playerdata = { playerid1, playername1, playerposition1, teamid1 };
        res.status(200).send({ message: 'Player Created', playerdata });
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


// Register for tournament API
app.post('/api/tournament/register', async (req, res) => {
    const { userid, teamid, tournamentid } = req.body;
    const registrationid = Math.floor(Math.random() * 1000000000) + userid;
    let connection;
    try {
        connection = await oracledb.getConnection(dbConfig);
        const sql = `SELECT * FROM TOURNAMENTS WHERE userid = :userid AND tournamentid = :tournamentid`;
        const result = await connection.execute(sql, [userid, tournamentid]);
        if (result.rows.length !== 0) {
            return res.status(200).send({ message: 'Already Registered' });
        }
        const sqlinsert = `INSERT INTO TOURNAMENTS (registrationid, userid, teamid, tournamentid) 
                     VALUES (:registrationid, :userid, :teamid, :tournamentid)`;
        const resultinsert = await connection.execute(sqlinsert, [registrationid, userid, teamid, tournamentid], { autoCommit: true });
        const returnresult = await connection.execute(sql, [userid, tournamentid]);
        const registrationid1 = returnresult.rows[0][0];
        const userid1 = returnresult.rows[0][1];
        const teamid1 = returnresult.rows[0][2];
        const tournamentid1 = returnresult.rows[0][3];

        const registrationdata = { registrationid1, userid1, teamid1, tournamentid1 };
        res.status(200).send({ message: 'Registration Successful', registrationdata });
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
        console.log('Database connection failed'.red);
        console.log(err.message.red);
        return;
    }
    console.log('Database connection was successful'.green);
    connection.close();
});