import { BadgeOutlined, Code, MenuBook } from "@mui/icons-material";


export const Icon = ( name, fontSi ) => {
    switch ( name ) {
        case 'About me':
            return <BadgeOutlined sx={{ fontSize: fontSi, color: 'primary.light' }} />
        
        case 'Projects':
            return <Code sx={{ fontSize: fontSi, color: 'primary.light' }} />
        
        case 'Knowledge':
            return <MenuBook sx={{ fontSize: fontSi, color: 'primary.light' }} />

        default:
            break;
    }
}
