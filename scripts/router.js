function hashChecker() {
    $(window).on('hashchange', (ev) => {
        const hashUrl = location.hash;
        console.log(hashUrl);
    });
}

export { hashChecker };