function addUniqueValues(arr){

    const hash_map = {}

    for( const num of arr ){

        if ( !hash_map[num] ) 
        {
            hash_map[num] = 0;
        }
        hash_map[num] ++

    }
    let output = 0;
    for ( const num in hash_map ){
        if( hash_map[num] === 1) output += parseInt(num)
    }

    return output;
}


console.log( addUniqueValues([22,22,5,3,5,2]));