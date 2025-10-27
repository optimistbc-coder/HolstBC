export default function getImageWidthAndHeight(width, height) {
    const ratio = width / height;

    let extraSizeForWidth;
    let extraSizeForHeight;

    if (width > 1600) {
        if (ratio >= 1.4) {
            extraSizeForWidth = 80 * width / 4500;
        } else {
            extraSizeForWidth = 80 * width / 3000;
        }
    } else {
        extraSizeForWidth = 80 * width / 2000;
    }

    if (height >= 1500) {
        extraSizeForHeight = 80 * height / 3000;
    } else {
        extraSizeForHeight = 80 * height / 2000;
    }

    let newWidth;
    let newHeight;
    if(ratio >=1.5) {
        newWidth = 200 * (ratio-(ratio-1.2)/ratio) + extraSizeForWidth;
        newHeight = 200 + extraSizeForHeight;
    }else{
        newWidth = 200 * ratio + extraSizeForWidth;
        newHeight = 200 + extraSizeForHeight;
    }
    return {height: newHeight, width: newWidth};
}