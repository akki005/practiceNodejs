const EventEmitter = require('events');


class Server extends EventEmitter {
    constructor(client) {
        super();
        this.taskList = [];
        this.taskId = 1;

        process.nextTick(() => {
            /**
             * 
             * if 'response' event s written outside the process.nextTick. It wont be listened by response listener because response listener will not be instantiated at the time of execution of below line so keeping it inside process.nextTick. so it'll e executed after finishing all other operation in client.js file.
             */
            this.emit('response', 'Type Help to list the commands');
        });
        client.on('command', (command, args) => {
            //console.log(`command: ${command}`);
            if (typeof this[command] === 'function') {
                this[command](args);
            } else {
                console.log('unknown Command');
            }
        });
    }

    help() {
        this.emit('response', `Available Commands :
        ls
        add task
        delete :id`);
    }

    add(tasks) {
        this.taskList[this.taskId] = tasks.join(' ');
        this.emit('response', `Added task ${this.taskId}`);
        this.taskId++;
    }

    delete(taskId) {
        delete this.taskList[taskId];
        this.emit('response', `Deleted task ${taskId}`);
        this.taskId--;
    }

    ls() {
        let tasks = ['List of tasks'];
        Object.entries(this.taskList).forEach(([key, value]) => {
            tasks.push(`${key} : ${value}`);
        });
        this.emit('response', tasks.join("\n"));
    }
};


module.exports = function (client) {
    return new Server(client);
};