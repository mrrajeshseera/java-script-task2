
    

        //array methods
        let fruits = ["Apple", "Banana"];
        fruits.push("Orange");
        console.log(fruits); // ["Apple", "Banana", "Orange"]

        let numbers = [1, 2, 3];
        numbers.push(4, 5);
        console.log(numbers); // [1, 2, 3, 4, 5]

        let colors = ["Red"];
        let newLength = colors.push("Blue", "Green");
        console.log(colors); // ["Red", "Blue", "Green"]
        console.log(newLength); // 3

        console.log(colors.pop())
        console.log(colors); // ["Red", "Blue"]

        colors.unshift("pink");
        console.log(colors); // ["pink", "Red", "Blue"]

        console.log(colors.shift());
        console.log(colors); // ["Red", "Blue"]

        console.log(colors.splice(1, 1));
        console.log(colors); // ["Red"]

        console.log(colors.splice(0, 0, "Yellow", "Green"));

        arr1 = [1, 2, 3, 4, 34, 65, 5, 4, 9, 77, 22, 6];   //output [1,2,22,3,34,4,5,6,65,77]
        arr1.sort();
        console.log(arr1);

        arr1.reverse();
        console.log(arr1);


        ar = ["abhi", "abhi", "abhi"];
        console.log(ar.join(" "));


        arr3 = [1, 2, 3];
        arr4 = [4, 5, 6];
        console.log(arr3.concat(arr4));

        ar = ["abhi", "abhi", "abhi"];
        console.log(ar.indexOf("abhi"));

        console.log(ar.lastIndexOf("abhi"));

        console.log(ar.includes("abhi"));

        console.log(ar.includes("abhi", 2));

        console.log(ar.includes("abhi", 1));


        // print the even numbers in the array

        let evenarr = [1, 2, 5, 6, 8, 9, 21, 22, 33, 54, 65, 78]
        for (let i = 0; i < evenarr.length; i++) {
            if (evenarr[i] % 2 == 0) {
                console.log("even number :-",evenarr[i]);
            }
        }


        // sum of odd number in array
        let arr = [1, 2, 3, 4, 5]
        let sum = 0;
        for (i = 0; i < arr.length; i++) {
            if (arr[i] % 2 == 1) {
                sum += arr[i];
            }
        }
        console.log(sum);


        // sum of odd nums and sum  of even nums

        function ofSum(arrs) {  ///index are in i values are in arr[i]
            let oddSum = 0, evenSum = 0;
            for (i = 0; i < arrs.length; i++) {
                if (arrs[i] % 2 == 1) {
                    oddSum = oddSum + arrs[i];
                }
                else {
                    evenSum = evenSum + arrs[i];
                }
            }
            return ([evenSum, oddSum]);
        }
        let array = [5, 6, 7, 8, 9, 10];
        console.log(ofSum(array));
    