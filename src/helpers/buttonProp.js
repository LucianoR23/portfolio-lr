

export const buttonProp = ( path ) => {

    const pages = ['About me', 'Projects', 'Knowledge']
    let twoPages;

    switch ( path ) {
        case '/about':
        twoPages = pages.filter( page => page !== 'About me')
        return twoPages
        case '/projects':
        twoPages = pages.filter( page => page !== 'Projects')
        return twoPages
        case '/knowledge':
        twoPages = pages.filter( page => page !== 'Knowledge')
        return twoPages
    
        default:
        break;
    }


}
