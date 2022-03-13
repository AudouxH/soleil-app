import sun from './sun.png'
import cloudy from './cloudy.png'
import cloud from './cloud.png'
import rain from './rain.png'
import rainy from './rainy.png'
import lightning from './lightning.png'
import snowy from './snowy.png'
import humidity from './humidity.png'
import wind from './autumn.png'
import wind_direction from './compass.png'

const ListofIcons = (iconID) => {
    const icons = new Map([
        ["01d", sun],
        ["02d", cloudy],
        ["03d", cloud],
        ["04d", cloud],
        ["05d", humidity],
        ["06d", wind],
        ["07d", wind_direction],
        ["09d", rain],
        ["10d", rainy],
        ["11d", lightning],
        ["13d", snowy],
    ])
    return (icons);
}

export default ListofIcons;