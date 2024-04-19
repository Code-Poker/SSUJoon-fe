export type Organization = {
  organizationId: number,
  name: string,
  type: string,
  bojUserCount: number,
  rating: number,
  userCount: number,
  voteCount: number,
  solvedCount: number,
  color: string,
}

export type SolvedUser = {
  handle: string,
  bio: string,
  badgeId?: string,
  backgroundId: string,
  profileImageUrl: string,
  solvedCount: number,
  voteCount: number,
  tier: number,
  rating: number,
  ratingByProblemsSum: number,
  ratingByClass: number,
  ratingBySolvedCount: number,
  ratingByVoteCount: number,
  class: number,
  classDecoration: number,
  rivalCount: number,
  reverseRivalCount: number,
  maxStreak: number,
  coins: number,
  stardusts: number,
  joinedAt: Date,
  bannedUntil: Date,
  proUntil: Date,
  rank: number,
  isRival?: boolean,
  isReverseRival?: boolean,
}

export type SolvedProblemTag = {
  key?: string,
  isMeta?: boolean,
  bojTagId?: number,
  problemCount?: number,
  displayNames?: {
    language?: string,
    name?: string,
    short?: string,
  }[],
  aliases?: {
    alias?: string,
  }[]
}

export type SolvedProblem = {
  problemId?: number,
  titleKo?: string,
  titles?: {
    language?: string,
    languageDisplayName?: string,
    title?: string,
    isOriginal?: boolean,
  }[],
  isSolvable?: boolean,
  isPartial?: boolean,
  acceptedUserCount?: number,
  level?: number,
  votedUserCount?: number,
  sprout?: boolean,
  givesNoRating?: boolean,
  isLevelLocked?: boolean,
  averageTries?: number,
  official?: boolean,
  tags?: SolvedProblemTag[],
}