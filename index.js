function avatarize(options) {
    let images = document.querySelectorAll('.avatarize');

    if(options && options.shadow_type === 'hard') {
        options.shadow_type = '0px';
    } else {
        options.shadow_type = '15px';
    }

    images.forEach(image => {
        image.getElementsByClassName.boxShadow = `10px 10px ${options.shadow_type} 10px rgba(0, 0, 0, 0.12)`;
        if(image.padding) {
            image.style.padding = '1em';
        }
    })
}

module.exports.avatarize = avatarize;