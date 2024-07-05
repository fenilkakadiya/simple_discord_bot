const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return;
  let m = message.content.toLowerCase();
  if (m == "hello" || m == "hi") {
    message.reply({
      content: "Hello!",
    });
  }

  if (m == "morning" || m == "good morning") {
    message.reply({
      content: "Good morning mate",
    });
  }

  if (m == "evening" || m == "good evening") {
    message.reply({
      content: "Good evening mate",
    });
  }
  if (m == "night" || m == "good night") {
    message.reply({
      content: "Good night mate",
    });
  }

  if (m == "byy" || m == "byyy") {
    message.reply({
      content: "good byy",
    });
  }

  if (m === "link" || m === "url") {
    message.reply({
      content: `
            **Telegram channel link:** [Join our Telegram channel](https://t.me/earning_from_crypto_1)\n
            **Website link:** [Visit our website](https://masoom.fun/)\n
            **Twitter link:** [Follow us on Twitter](https://x.com/Fenil077)
        `,
    });
  }
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;

  const { commandName } = interaction;

  if (commandName === "ping") {
    const sent = await interaction.reply({
      content: "Pinging...",
      fetchReply: true,
    });
    interaction.editReply(
      `Latency is ${
        sent.createdTimestamp - interaction.createdTimestamp
      }ms. API Latency is ${Math.round(client.ws.ping)}ms.`
    );
  }

  if (commandName === "links") {
    await interaction.reply({
      content: `
             **Telegram channel link:** [Join our Telegram channel](https://t.me/earning_from_crypto_1)\n
            **Website link:** [Visit our website](https://masoom.fun/)\n
            **Twitter link:** [Follow us on Twitter](https://x.com/Fenil077)
        `,
    });
  }
});

client.login(
  "MTI1Nzk3NzYzNjk3NDYyODg3NQ.Gm8UGD.vXQY93CivpdLKhfzZ2pavWO4uEPdr3MvLox9cg"
);
