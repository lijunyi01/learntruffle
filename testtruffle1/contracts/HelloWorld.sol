pragma solidity ^0.4.18;

contract HelloWorld {

    //say hello world
    function say() public pure returns (string) {
        return "Hello World";
    }

    //print name
    function print(string name) public pure returns (string) {
        return name;
    }
}