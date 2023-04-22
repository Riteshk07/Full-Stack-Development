let user = [ { "firstName": "Raghu", "lastName": "Anand", "subjects": [ { "name":"Maths","marks":94}, { "name":"Science","marks":67}, { "name":"Hindi","marks":64} ] }, { "firstName": "Ram", "lastName": "Singh", "subjects": [ { "name":"Maths","marks":84}, { "name":"Science","marks":84}, { "name":"Hindi","marks":91} ] } ];
    let tmp = 0;
    let high = 0;
    let ans  = [];
    let b  = 2;
    for(let i=0; i<user.length; i++){
        for(let j=0; j<user[i].subjects.length; j++){
            let t  = user[i].subjects[j].marks;
            tmp+=t;
            if(high<t){
                high = t;
            }
        }
        ans.push({Name:user[i].firstName+" "+user[i].lastName, "Total Marks": tmp/b, "Max marks": high});
        tmp =0 ;
        high = 0;
    }
    console.log(ans);