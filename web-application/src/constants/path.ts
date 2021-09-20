import Logo from 'assets/images/developulse-logo.png';
import ImageBackground from 'assets/images/image-background.jpg';

import Success from 'assets/icons/success.svg';
import Error from 'assets/icons/error.svg';

enum RoutesPath {
    HOME = '/',
}

const ImagesPath = {
    LOGO: Logo,
    IMAGE_BACKGROUND: ImageBackground
}

const IconsPath = {
    success: Success,
    error: Error
}

const path = {
    routes:RoutesPath,
    images: ImagesPath,
    icons: IconsPath
}

export default path;