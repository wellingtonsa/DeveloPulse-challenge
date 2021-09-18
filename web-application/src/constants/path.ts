import Logo from 'assets/images/developulse-logo.png';
import ImageBackground from 'assets/images/image-background.jpg';

enum RoutesPath {
    HOME = '/',
}

const ImagesPath = {
    LOGO: Logo,
    IMAGE_BACKGROUND: ImageBackground
}

enum IconsPath {
}

export const path = {
    routes:RoutesPath,
    images: ImagesPath,
    icons: IconsPath
}
