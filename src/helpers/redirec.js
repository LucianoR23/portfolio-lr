

export const redirec = (name) => {

    switch ( name ) {
        case 'About me':
            return '/about'
        
        case 'Projects':
            return '/projects'
        
        case 'Knowledge':
            return '/knowledge'

        default:
            break;
    }

}
