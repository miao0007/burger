// require dependencies

const connection =  require("./connection.js");

const orm = {
    // selectAll() method
    selectAll: (tableInput, callback) => {
        // return all records from selected table
        const queryString = "SELECT * FROM ??";

        connection.query(queryString, [tableInput], (err, result) =>{
            if(err) throw err;
            callback(result);
        });
    },

    // insertOne() method
    insertOne: (tableInput, colOneInput,colTwoInput, colOneValue, colTwoValue, callback)=> {
        // Insert new record into table
        const queryString = "INSERT INTO ?? (??,??) VALUES (?, ?)";

        connection.query(queryString, [tableInput, colOneInput,colTwoInput, colOneValue, colTwoValue], (err,result)=>{
            if(err) throw err;
            callback(result);
        });
    },

    // updateOne() Method

    updateOne: (tableInput, setCol, setColVal, whereCol, whereColVal, callback) => {
        // Update selected record
        const queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";

        connection.query(queryString,[tableInput, setCol, setColVal, whereCol, whereColVal], (err,result)=>{
            if(err) throw err;
            callback(result);
        });

    },

    // delete() method
    delete: (tableInput, whereCol, whereColVal, callback) =>{
        // delete selected table column
        const queryString = "DELETE FROM ?? WHERE ?? = ?";
        connection.query(queryString,[tableInput, whereCol, whereColVal],(err,result)=>{
            if(err) throw err;
            callback(result);
        });
    }


};

// Export orm
module.exports = orm;