import { PublicMemberInfo } from '../channelMembers/channelMember';

export const ChannelType = {
  Public: 'public',
  Private: 'private',
} as const;

export type PublicChannelInfo = {
  id: string;
  type: keyof typeof ChannelType;
  name: string;
};

export type PrivateChannelInfo = PublicChannelInfo & {
  description: string;
  owner: string;
  members: PublicMemberInfo[];
};
