# Spyre

This is going to be a command line tool that allows you to have a folder of Markdown files which can be transformed into a static website and deployed to AWS.

It doesn't do most of those things right now, so it's more serving as a learning opportunity!

## Installation

Spyre works best installed as a global package. I've made an [example app](https://github.com/jkup/spyre-example) which you can use to get a feel for how Spyre works.

```sh
npm install spyre -g
git clone https://github.com/jkup/spyre-example
cd spyre-example
spyre
```

## Contributions

If you feel like helping out, just hop on in! Feel free to create an issue or send a PR.

## Documentation

### Getting Started

Spyre requires two folders in order to run:

+ posts/ This is where you will write and save your blog posts in markdown format.
+ site/ This is where Spyre will write HTML after it converts your posts.

### Creating Posts

All that is required to create a spyre post is a markdown file in the posts/ directory. If you want to keep chronological order, you should name your file in the following format:

```
YEAR-MONTH-DAY-title.md
```

For example:

```
2015-12-31-new-years-eve-is-awesome.md
2016-07-17-how-to-write-a-blog.md
```
