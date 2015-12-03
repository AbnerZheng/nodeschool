function *upper(items) {
    for(ele of items){
        try {
            yield ele.toUpperCase();
        } catch (e) {
            /* handle error */
            yield null;
        }
    }
}

var bad_items = ['a', 'B', 1, 'c']

for (var item of upper(bad_items)){
    console.log(item);
};
