
n(array, p, q, r) {
    var lowHalf = [];
    var highHalf = [];

    var k = p;
    var i;
    var j;
    for (i = 0; k <= q; i++, k++) {
        lowHalf[i] = array[k];
    }
    for (j = 0; k <= r; j++, k++) {
        highHalf[j] = array[k];
    }
    k = p;
    i = 0;
    j = 0;
    
    while (i <= lowHalf.length-1 && j <= highHalf.length-1) {
        if (lowHalf[i] < highHalf[j]) {
            array[k] = lowHalf[i];
            i++;
        }
        else {
            array[k] = highHalf[j];
            j++;
        }
        k++;
    }
    while (i <= lowHalf.length-1) {
        array[k] = lowHalf[i];
        i++;
        k++;
    }
    while (j <= highHalf.length-1) {
        array[k] = highHalf[j];
        j++;
        k++;
    }
};


var array = [3, 7, 12, 14, 2, 6, 9, 11];
merge(array, 0,
    Math.floor((0 + array.length-1) / 2),
    array.length-1);
println("Array after merging: " + array);

Program.assertEqual(array, [2, 3, 6, 7, 9, 11, 12, 14]);

var anotherArray = [-1, 7, 12, 14, 0, 9, 11, 40];
merge(anotherArray, 0,
    Math.floor((0 + anotherArray.length-1) / 2),
    anotherArray.length-1);
println("Array after merging: " + anotherArray);

Program.assertEqual(anotherArray, [-1, 0, 7, 9, 11, 12, 14, 40]);
