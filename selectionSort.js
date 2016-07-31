var swap = function(array, firstIndex, secondIndex) {
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
};

var indexOfMinimum = function(array, startIndex) {

    var minValue = array[startIndex];
    var minIndex = startIndex;

    for(var i = minIndex + 1; i < array.length; i++) {
        if(array[i] < minValue) {
            minIndex = i;
            minValue = array[i];
        }
    } 
    return minIndex;
}; 

var selectionSort = function(array) {
    for (var j = 0; j < array.length; j++){
        var subMinIndex = indexOfMinimum(array, j);
        if (array[subMinIndex] < array[j]) {
            swap(array, j, subMinIndex);
        }
    }
};

var array = [22, 11, 99, 88, 9, 7, 42];
selectionSort(array);
println("Array after sorting:  " + array);

Program.assertEqual(array, [7, 9, 11, 22, 42, 88, 99]);

var array = [0, 11, 99, -17, 9, 7, -99];
selectionSort(array);
Program.assertEqual(array, [-99, -17, 0, 7, 9, 11, 99]);

