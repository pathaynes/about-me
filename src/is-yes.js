function isYes(words) {
    words = words.toLowerCase();
    if(words === 'yes') {
        return true;
    }

    else if(words === 'no') {
        return false;
    }
}

export default isYes;