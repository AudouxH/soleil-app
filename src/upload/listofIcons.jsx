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
import sunrise from './sunrise.png'
import sunset from './sunset.png'
import temperature from './thermometer.png'
import pressure from './pressure-gauge.png'

const ListofIcons = (iconID) => {
    const icons = new Map([
        ["01d", sun],
        ["01n", cloudy],
        ["02d", cloudy],
        ["03d", cloud],
        ["04d", cloud],
        ["05d", humidity],
        ["06d", wind],
        ["07d", wind_direction],
        ["09d", rain],
        ["10d", rainy],
        ["11d", lightning],
        ["12d", temperature],
        ["13d", snowy],
        ["14d", sunrise],
        ["15d", sunset],
        ["16d", pressure]
    ])
    return (icons);
}

export default ListofIcons;