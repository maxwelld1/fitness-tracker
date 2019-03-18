const conn = require('./mysql_connection');

const model = {
    get(date, cb){
        conn.query("SELECT * FROM 2019Spring_Workouts WHERE date=?", date, (err, data) => {
            cb(err, data[0]);
        });   
    },
    getHighest(exercise, cb){
        conn.exercise("SELECT MAX(sets * reps) FROM 2019Spring_Exercises WHERE exercise=?", exercise, 
        (err, data) => {
            cb(err, data[0]);
        });    
    },
    add(input, cb){
        conn.query("INSERT INTO 2019Spring_Workouts (exercise, sets, reps, workout) VALUES (?)" 
                    [[input.exercise, input.sets, input.reps, input.date]],
                    (err, data) => {
                        if(err){
                            cb(err);
                            return;
                        }
                        model.get(data.insertExc, (err, data)=>{
                            cb(err, data);
                        })
                    }
        );    
    }
}

mmodule.exports = model;