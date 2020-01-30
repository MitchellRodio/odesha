const webhook = require("webhook-discord");
 
const Hook = new webhook.Webhook("https://discordapp.com/api/webhooks/659629166467088404/2xiJEl1mEvripEzBw1vvSEyZ4kmDw2u9yRBLFuM19IfZ4-NZYPZ3JRMdFR52jhXi-RaR");
 
const msg = new webhook.MessageBuilder()
                .setName("Bruh!")
                .setColor("#aabbcc")
                .setText("This is my webhook!")
                .addField("This", "is")
                .addField("my", "webhook!")
 
Hook.send(msg);