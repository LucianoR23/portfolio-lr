

export const actualView = ( path ) => {

    switch ( path ) {
        case '/about':
            return 'About me'
        
        case '/projects':
            return 'Projects'
        
        case '/knowledge':
            return 'Knowledge'

        default:
            break;
    }

}