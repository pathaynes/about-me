function isYes(words) {
    words = words.toLowerCase();
    if(words === 'yes') {
        return true;
    }

    else if(words === 'no') {
        return false;
    }

    else if(words === '')
        return false;
}

export default isYes;