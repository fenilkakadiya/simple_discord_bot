const { REST, Routes } = require("discord.js");
const clientId = "1257977636974628875";

const commands = [
  {
    name: "ping",
    description: "Replies with Pong!",
  },
  {
    name: "links",
    description: "Provides useful links",
  },
];

const rest = new REST({ version: "10" }).setToken(
  "MTI1Nzk3NzYzNjk3NDYyODg3NQ.Gm8UGD.vXQY93CivpdLKhfzZ2pavWO4uEPdr3MvLox9cg"
);

(async () => {
  try {
    console.log("Started refreshing application (/) commands.");

    await rest.put(Routes.applicationCommands(clientId), { body: commands });

    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
})();
