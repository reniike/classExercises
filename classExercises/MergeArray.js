let list1 = [1, 3, 4, 5]
let list2 = [2, 6, 7, 8]
let newList = [];
let x = 0
let y = 0

while(x <= list1.length  && y <= list2.length)
if (list1[x] < list2[y]){
    newList.push(list1[x])
    x += 1
} else{
    newList.push(list2[y])
    y += 1
}

console.log(newList)