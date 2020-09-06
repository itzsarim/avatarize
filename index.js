function avatarize(options) {
    let images = document.querySelectorAll('.avatarize');

    if(options) {
        if(options.shape === 'round') {
            options.shape = '50%';
        } else {
            options.shape = '15%';
        }
    }

    images.forEach(image => {
        if(options.shadow) {
            image.style.boxShadow = `0px 0px 10px 1px rgba(0, 0, 0, 0.12)`;
        }
        
        if(options.color) {
            image.style.border = `solid 1px ${options.color}`;
        }

        if(options.shape) {
            image.style.borderRadius = `${options.shape}`;
        }
    })
}

module.exports.avatarize = avatarize;