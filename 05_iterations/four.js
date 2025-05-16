const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    // console.log(`${key} shotcut is for ${myObject[key]}`); 
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const keys in programming) {
    // console.log(programming[keys]);   
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
    console.log(key);
}