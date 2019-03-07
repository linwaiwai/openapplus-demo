export default {
    handleErrorButtonTap(e) {
        const { dataset } = e.currentTarget;
        if (dataset.href) {
            my.redirectTo({url: dataset.href});
        } else {
            console.warn('no href specified');
        }
    }
}