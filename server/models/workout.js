const conn = require('./mysql_connection');

const model = {
    get(date, cb){
        conn.query("SELECT * FROM 2019Spring_Workouts WHERE date=?", date, (err, data) => {
            cb(err, data[0]);
        });   
    },
    getWeek(input, cb){
        conn.query("SELECT * FROM 2019Spring_Workouts WHERE user_id=?, AND date BETWEEN ? AND ?",
        [[input.id, input.date1, input.date2]], 
        (err, data) => {
            cb(err, data[0]);
        });    
    },
    add(input, cb){
        conn.query("INSERT INTO 2019Spring_Workouts (user_id, date) VALUES (?)" 
                    [[input.user_id, input.date]],
                    (err, data) => {
                        if(err){
                            cb(err);
                            return;
                        }
                        model.get(data.insertDate, (err, data)=>{
                            cb(err, data);
                        })
                    }
        );    
    }
}

mmodule.exports = model;