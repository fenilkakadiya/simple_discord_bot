const { REST, Routes } = require("discord.js");
const clientId = "enter_your_client_id";

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
  "enter_your_token"
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
