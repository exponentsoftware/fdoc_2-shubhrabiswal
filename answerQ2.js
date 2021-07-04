

// 	```js
	const users = [
	{
		name:'Brook', 
		scores:75,
		skills:['HTM', 'CSS', 'JS'],
		age:16
	},
	{
		name:'Alex', 
		scores:80,
		skills:['HTM', 'CSS', 'JS'],
		age:18
	}, 
	{
		name:'David', 
		scores:75,
		skills:['HTM', 'CSS'],
		age:22
	}, 
	{
		name:'John', 
		scores:85,
		skills:['HTM'],
		age:25
	},
	{
		name:'Sara',
		scores:95,
		skills:['HTM', 'CSS', 'JS'],
		age: 26
	},
	{
		name:'Martha', 
		scores:80,
		skills:['HTM', 'CSS', 'JS'],
		age:18
	},
	{
		name:'Thomas',
		scores:90,
		skills:['HTM', 'CSS', 'JS'],
		age:20
	}
	];
// Write a function which filter users who has  scoresGreaterThan85,  
function filter(users){
    let output = []
    for(let per of users){
        if(per.scores > 85){
            output.push(per)
        }
    }
    return output
}

// console.log(filter(users))


// 	Write a function which addUser  to the user array only if the user does not exist.   

function addUser(users,newuser){
    let count = 0
    for(let per of users){
        if(per.name == newuser.name){
            count++
            return "User already exists"
        }
    }
    if(count == 0){
        users.push(newuser)
        return users
    }
    
}
const newuser = {
    name:'T',
    scores:90,
    skills:['HTM', 'CSS', 'JS'],
    age:20
}
// console.log(addUser(users,newuser))
// console.log(addUser(users,newuser))


// 	Write a function which addUserSkill which can add skill to a user only if the user exist.

function addUserSkill(users,newSkill){
    let count = 0;
    for(let per of users){
        if(per.name == newSkill.name){
            count = 1;
            for(let sub of newSkill.skills){
                per.skills.push(sub)
            }  
        }
    }
    if(count == 0){
        return "User doesnot exists"
    }
    return users
    
}
const newSkill = {
    name:'Alx', 
    scores:80,
    skills:['node'],
    age:18
}
// console.log(addUserSkill(users,newSkill))

   
// 	Write a function which editUser if the user exist in the users array.  


function editUser(users,newdata){
    let count = 0;
    for(let per of users){
        if(per.name == newdata.name){
            count = 1;
            per.name = newdata.newname;
            per.scores = newdata.scores;
            per.age = newdata.age;
            for(let sub of newdata.skills){
                per.skills.push(sub);
            } 
        }
    }
    if(count == 0){
        return "User doesnot exists"
    }
    return users
    
}
const newdata = {
    name:'Alex', 
    newname:'Alex new',
    scores:70,
    skills:['node','node2','node3'],
    age:60
}

console.log(editUser(users,newdata)) 
console.log(editUser(users,newdata))
