import storage from '@/assets/storage.json';

export const getDiscordInvite = (fullUrl?: boolean) => {
  if (fullUrl) return `https://discord.com/invite/mVEwUrBNZ4`;
  return storage.discord_inv;
};
