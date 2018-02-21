class Sorter {

constructor() {
this.array = [];
}

add(element)
{
this.array.push(element);
}

toArray()
{
return(this.array);

}

at(index) {
return(this.array[index]);
// your implementation
}

get length() {
return(this.array.length);
// your implementation
}

sort(indices)
{
  var m=[];
   for (var i=0; i<indices.length;i++)
   		{
   			m[i]=this.array[indices[i]];
   		}
   		function compare(a, b)
   			{
   				if (a > b) return 1;
   				if (a < b) return -1;
   			}
   m.sort(compare);
   	indices.sort(compare);
     	for (var i=0; i<indices.length;i++)
   		{
   			this.array[indices[i]]=m[i];
   		}
   	return this.array;

}

setComparator(compareFunction) {
// your implementation
}
}

module.exports = Sorter;
