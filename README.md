# NodeApp

node app Yargs helps you build interactive command line tools by parsing arguments and generating an elegant user interface.

Yargs gives you:

commands and (grouped) options (like module run -n --force),
a dynamically generated help menu based on your arguments,
bash-completion shortcuts for commands and options,
and much more.
With these features, and many more, yargs allows you to focus on building your program without worrying about your args.

Install
Open your terminal, navigate to your project, and run using npm:

\$ npm install --save yargs
Getting Started
After creating example.js start with the following code to get you going:

#!/usr/bin/env node

require('yargs')
.scriptName("pirate-parser")
.usage('\$0 <cmd> [args]')
.command('hello [name]', 'welcome ter yargs!', (yargs) => {
yargs.positional('name', {
type: 'string',
default: 'Cambi',
describe: 'the name to say hello to'
})
}, function (argv) {
console.log('hello', argv.name, 'welcome to yargs!')
})
.help()
.argv

And in your terminal run:

\$ node example.js --help

To get this output:

pirate-parser <cmd> [args]

Commands:
pirate-parser hello [name] welcome ter yargs!

Options:
--help Show help [boolean]

Run hello command:

\$ node example.js hello --name Parrot
hello Parrot welcome to yargs!

Setting up the project
Let's start by creating a new directory and setting up the project using npm:

$ mkdir twenty
$ npm init
Press enter for all of the prompts in the last command, and you should have your package.json file.

Note that since I've already taken the package name twenty on npm, you'll have to rename it to something else if you actually want to publish. Or you could also scope your project.

Then, create the index.js file:

\$ touch index.js
This is all we really need to get started for now, and we'll be adding to the project as we move on.

Parsing arguments
Most CLI apps take in arguments from the user, which is the most common way of getting input. For most cases, parsing the arguments isn't too difficult since there are usually only a handful of commands and flags. But as the tool becomes more complex, more flags and commands will be added, and argument parsing can become surprisingly difficult.

To help us with this, we'll be using a package called yargs, which is the successor to the popular optimist package.

yargs was created to help you parse commands from the user, like this:

var argv = require('yargs').argv;
Now complex optstrings like node index.js install -v --a=22 -cde -x derp can be easily accessed:

var argv = require('yargs').argv;

argv.\_[0] // 'install'
argv.v // true
argv.a // 22
argv.c // true
argv.d // true
argv.e // true
argv.x // 'derp'
yargs will even help you with specifying the command interface, so if the user's input doesn't meet certain requirements it'll show them an error message. So, for example, we can tell yargs we want at least 2 arguments:

var argv = require('yargs')
.demand(2)
.argv
And if the user doesn't provide at least two, they'll see this default error message:

\$ node index.js foo

Not enough non-option arguments: got 1, need at least 2
There is a lot more to yargs than just this, so check out the readme for more info.

For twenty, we'll be taking in a few optional arguments, like an IP address and some flags. For now, we'll be using yargs like this:

var argv = require('yargs')
.alias('d', 'distance')
.alias('j', 'json')
.alias('i', 'info')
.usage('Usage: $0 [options]')
    .example('$0 -d 8.8.8.8', 'find the distance (km) between you and Google DNS')
.describe('d', 'Get distance between IP addresses')
.describe('j', 'Print location data as JSON')
.describe('i', 'Print location data in human readable form')
.help('h')
.alias('h', 'help')
.argv;
