export const tierToClassName = (n: number) => {
    if(n >= 1 && n <= 5) return 'tier-bronze'
    else if(n >= 6 && n <= 10) return 'tier-silver'
    else if(n >= 11 && n <= 15) return 'tier-gold'
    else if(n >= 16 && n <= 20) return 'tier-platinum'
    else if(n >= 21 && n <= 25) return 'tier-diamond'
    else if(n >= 26 && n <= 30) return 'tier-ruby'
    else if(n == 31) return 'tier-master'
}

export const tierToAltText = (n: number): string => {
    const tierNum = (n - 1) % 5 + 1

    if(n == 0) return 'Unrated'
    else if(n >= 1 && n <= 5) return `Bronze ${tierNum}`
    else if(n >= 6 && n <= 10) return `Silver ${tierNum}`
    else if(n >= 11 && n <= 15) return `Gold ${tierNum}`
    else if(n >= 16 && n <= 20) return `Platinum ${tierNum}`
    else if(n >= 21 && n <= 25) return `Diamond ${tierNum}`
    else if(n >= 26 && n <= 30) return `Ruby ${tierNum}`
    else if(n == 31) return 'Master'
    else return 'Unknown'
}