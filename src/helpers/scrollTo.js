

export const scrollTo = ( path ) => {

    const threePath = ['about', 'knowledge', 'projects']
    let twoPath;


    switch (path) {
        case '/about':
        twoPath = threePath.filter( p => p !== 'about')
        return twoPath
        case '/projects':
        twoPath = threePath.filter( p => p !== 'projects')
        return twoPath
        case '/knowledge':
        twoPath = threePath.filter( p => p !== 'knowledge')
        return twoPath
    
        default:
        break;
    }

}
