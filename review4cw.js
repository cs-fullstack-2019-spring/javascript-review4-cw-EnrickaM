main();
function main()
{

}

function problem1() {

    function replace(str) {
        var phrase = str.split('my day was aweful today');
 console.log(phrase);
        for (var i = 0; i < phrase.length; i++) {

            var word = phrase[i];

            if(i%2===0)
            {
                word = word.toUpperCase();
            }

            console.log(word);
        }

    }
};
main();