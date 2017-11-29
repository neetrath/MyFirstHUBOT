"use strict";
 
module.exports = function(robot){
    robot.respond(/hello/i, function(res){
        res.reply('world');
    });
}