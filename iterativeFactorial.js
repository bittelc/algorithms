var insert = function(array, rightIndex, value) {

    for(var j = rightIndex;
        j >= 0 && array[j] > value;
        j--) {
        array[j + 1] = array[j];
    }   
    array[j + 1] = value; 
};

var insertionSort = function(array) {
    for (var i = 0; i < array.length-1; i++) {
        insert(array, i, array[i+1]);   
    }
};

var array = [22, 11, 99, 88, 9, 7, 42];
insertionSort(array);
Program.assertEqual(array, [7, 9, 11, 22, 42, 88, 99]);


var array = [4, 11, 16, 88, 9, -1, 42];
insertionSort(array);
Program.assertEqual(array, [-1, 4, 9, 11, 16, 42, 88]);

