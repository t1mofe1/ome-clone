export type PublicMemberInfo = {
  nickname?: string;
  // avatar?: string;

  user: string;

  online: boolean;
};

export type PrivateMemberInfo = PublicMemberInfo & {
  // description?: string;
};
