const uuid = require("uuid");
const messages = require("../data/messages");

const message = {
    generateId: function() {return uuid.v4();},
    push: function({ text, user, added = new Date}) {
        const generatedId = this.generateId();
        messages.push({id: generatedId, text: text, user: user, added: added});
        return generatedId;
    },
    getMessageById: function(id) {
        for (let i = 0; i < messages.length; i++) {
            if (messages[i].id == id) return messages[i];
        }
        return null;
    }
};

module.exports = message;