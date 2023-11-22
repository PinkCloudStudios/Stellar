import { ApplicationCommandTypes } from "oceanic.js"
import CommandManager from "../managers/CommandManager"
import { ApplicationCommandBuilder } from "@oceanicjs/builders"

const Suggest: CommandManager = {
    data: new ApplicationCommandBuilder(ApplicationCommandTypes.CHAT_INPUT, "suggpingest")
        .setDescription("Get the bots latency and heartbeat"),

    execute: async(client, interaction) => {
        return interaction.createMessage({ content: "Pong!" });
    }
}