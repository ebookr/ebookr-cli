# ebookr-cli

A command-line interface of [ebookr](https://github.com/ebookr/ebookr). Requires [Pandoc (and LaTeX, if you want PDF)](http://johnmacfarlane.net/pandoc/installing.html).

## Installation

    npm install -g ebookr-cli

## Examples

`ebookr README.md` converts the contents of README.md to html, and outputs the converted text to console.

`ebookr README.md -o test.pdf` converts README.md to PDF and outputs it to the file test.pdf.