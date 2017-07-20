$(function() {
        try {
        var count;
        $.getJSON('https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=0xf69cD472e4EfB38aa320470422C133Ff546B16CC&address=0xf69cD472e4EfB38aa320470422C133Ff546B16CC&tag=latest&apikey=W2ACMICUPD21AWX4CAGESQAAGMYUECSN8P', function (jsonData) {
            count = jsonData.result;
            if(count > 0) {
                $("#tokenscount").html("<b>" + count + "</b>" + " ELT are still available!");
                $("#tokenhowtobuy").html("To buy ELT, send an amount of ETH that equals the amount of ELT you want to buy to the address below. </br><b>Warning!</b> Token is indivisible! Send an integer!");
                $("#contractaddress").html("<a class='text-white' href='https://etherscan.io/address/0xf69cD472e4EfB38aa320470422C133Ff546B16CC'>0xf69cD472e4EfB38aa320470422C133Ff546B16CC</a>");
            }
            else {
                $("#tokenscount").html("All ELT were sold!");
                $("#tokenhowtobuy").html("Thanks everyone. Soon on exchanges.");
            }
        }.bind(this));
    } catch (err) { }
});
