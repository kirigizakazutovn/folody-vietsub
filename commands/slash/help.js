const {MessageEmbed} = require('discord.js');

exports.help = {
  name: 'help',
  description: 'Cần trợ giúp?Gọi ngay!',
  type: 'CHAT_INPUT',
  func_status: false,
  func: [
    Number,
    {},
  ],
  init: async (client, interaction, player, utils) => {
    interaction.reply({
      embeds: [
        new MessageEmbed()
            .setColor('#34eb56')
        // eslint-disable-next-line max-len
            .addField('Commands', client.cores.map((c) => `\`${c.name}\``).join(', ')),
      ],
      ephemeral: true,
    });
  },
};
