function bracesValid(braces){
    var pair = {
        ')' : '(',
        ']' : '[',
        '}' : '{'
    };
    var stack = [];
    for(var i = 0; i < braces.length; i++){
        if(braces[i] === '(' || braces[i] === '[' || braces[i] === '{'){
            stack.push(braces[i]);
        }
        else if(stack[stack.length-1] === pair[braces[i]]){
            stack.pop()
        }
        else {
            console.log("False")
            return false;
        }
    }
    console.log("True")
    return stack.length === 0;
}
console.log(bracesValid("{{()}}[]"));
console.log(bracesValid("{(})"));