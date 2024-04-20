const tierColor = [
    '#2d2d2d',
    '#9d4900',
    '#a54f00',
    '#ad5600',
    '#b55d0a',
    '#c67739',
    '#38546e',
    '#3d5a74',
    '#435f7a',
    '#496580',
    '#4e6a86',
    '#d28500',
    '#df8f00',
    '#ec9a00',
    '#f9a518',
    '#ffb028',
    '#00c78b',
    '#00d497',
    '#27e2a4',
    '#3ef0b1',
    '#51fdbd',
    '#009ee5',
    '#00a9f0',
    '#00b4fc',
    '#2bbfff',
    '#41caff',
    '#e0004c',
    '#ea0053',
    '#f5005a',
    '#ff0062',
    '#ff3071',
    '#b491ff',
];

export const tierToClassName = (n: number) => {
    if(n == 31) return 'tier-master'
    else return ''
}

export const tierToColor = (n: number): string => {
    if(n >= 0 && n <= 31) return tierColor[n]
    else return '#ffffff'
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