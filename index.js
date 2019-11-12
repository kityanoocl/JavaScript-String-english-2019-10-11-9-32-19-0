// Complete the following procedure, the 'name' variable in all letters to uppercase, output: ' 'HELLO' '.
var name = 'hello';
// TODO write your code here...
name = name.toUpperCase();
document.write(name);

// Complete the following procedure, capitalizing all the words in the variable sentence and printing: 'Good Afternoon, Mr Mike.'
var sentence = 'good afternoon, mr mike.';
//TODO write your code here...
function convert(input)
{
    let need = true;
    var output = '';
    for (let i = 0; i < sentence.length; i++)
    {
        if (need == true)
        {
            output += input[i].toUpperCase();
            need = false;
        }
        else
        {
            output += input[i];
        }
        if (input[i] == ' ')
        {
            need = true;
        }
    }
    document.write(output);
}
convert(sentence);
// Complete the following procedure to extract the amount of money variable, output: 20.
var money = '￥20';

var moneyInt = parseInt(money.substr(3, money.length - 1));

document.write(moneyInt);
//TODO write your code here...
