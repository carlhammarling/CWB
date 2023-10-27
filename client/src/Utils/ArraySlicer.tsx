//A function that takes 2 arguments. 1: An array you want to slice. 2: How many per slice. 
//For example: if you have an Array: const array = [ 1, 2, 3, 4 ] 
//and you pass in const slicedArray = arraySlicer(array, 2) it will return slicedArray = [[1, 2],[3, 4]]

export const arraySlicer = (array: any[], QtyPerSlice: number) => {
    const chunks: any[][] = [];
    for (let i = 0; i < array.length; i += QtyPerSlice) {
      chunks.push(array.slice(i, i + QtyPerSlice));
    }
    return chunks;
  };

