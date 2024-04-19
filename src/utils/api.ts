import { Organization, SolvedProblem, SolvedUser } from '@/utils/types'

// TODO: cache the response

export const getOrganization = async () => {
  const res = await fetch(`${process.env.API_URL}/info`)

  if(!res.ok) {
    throw new Error('failed to fetch data')
  }

  return (await res.json()) as Organization
}

export const getBojRanking = async (page: number) => {
  const res = await fetch(`${process.env.API_URL}/ranking/boj?page=${page}`)

  if(!res.ok) {
    throw new Error('failed to fetch data')
  }

  return (await res.json()) as string[]
}

export const getSolvedRanking = async (page: number) => {
  const res = await fetch(`${process.env.API_URL}/ranking/solved`)

  if(!res.ok) {
    throw new Error('failed to fetch data')
  }

  return (await res.json())['items'] as SolvedUser[]
}

export const getArenaRanking = async (page: number) => {
  const res = await fetch(`${process.env.API_URL}/ranking/arena`)

  if(!res.ok) {
    throw new Error('failed to fetch data')
  }

  return (await res.json())['items'] as SolvedUser[]
}

export const getProblems = async (isSolved: boolean, page: number, sortCriteria?: string, sortDirection?: string) => {
  // TODO: use enum for isSolved, sortCriteria and sortDirection

  const res = await fetch(`${process.env.API_URL}/solvedProblems?solved=${isSolved}&page=${page}&sort=${sortCriteria}&direction=${sortDirection}`)
  
  if(!res.ok) {
    throw new Error('failed to fetch data')
  }

  return (await res.json())['items'] as SolvedProblem[]
}