function sorted(array) {
    let k = 0;
	let newTable = [];
	while (array.length > 0){
		let min = array[k];
		let minindex = k;
		for (let i = 0; i < array.length; i++){
			if (array[i] < min){
				min = array[i];
				minindex = i;
			}
        }
		if (min !== undefined){
			newTable.push(min);
			array.splice(minindex, 1);
        }
		if (k > array.length){
			k=0
		} else {
			k++
		}
    }
	return newTable
}
function median(data) {
    var median = 0, numsLen = data.length;
    data = sorted(data);
 
    if (
        numsLen % 2 === 0
    ) {
        median = (data[numsLen / 2 - 1] + data[numsLen / 2]) / 2;
    } else { 
        median = data[(numsLen - 1) / 2];
    }
 
    return median;
}
