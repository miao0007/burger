// import orm.js
const orm = require("../config/orm.js");

//  Call the ORM functions using burger specific input for the ORM
const burgers = {
    // call orm.selectAll method
    selectAll: (callback) => {
        orm.selectAll("burgers", (res) =>{
            callback(res);
        });
    },

    // call insertOne method from orm.js

    insertOne: (burger_name, devoured, callback) => {
        orm.insertOne("burgers", "burger_name", "devoured", burger_name,devoured, (res)=>{
            callback(res);
        });
    },

    // call update method from orm.js
    updateOne: (id, devoured, callback) => {
        orm.updateOne("burgers", "devoured", devoured, "id", id, (res)=>{
            callback(res);
        });
    },

    // call delete method from orm.js

    delete: (id, callback) => {
        orm.delete("burgers", "id", id, (res)=>{
            callback(res);
        });
    }
};

// Export model for controller to use