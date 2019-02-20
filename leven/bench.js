/* globals bench suite */
"use strict";
var levenshteinEditDistance = require("levenshtein-edit-distance");
var fastLevenshtein = require("fast-levenshtein").get;
var levenshteinComponent = require("levenshtein-component");
var ld = require("ld").computeDistance;
var levdist = require("levdist");
var levenshtein = require("levenshtein");
var talisman = require("talisman/metrics/distance/levenshtein");
var leven = require("./");
var leven_wasm = require("../pkg/leven_wasm").levenshtein;

var Benchmark = require("benchmark");
var suite = new Benchmark.Suite();

function run(fn) {
	fn("a", "b");
	fn("ab", "ac");
	fn("ac", "bc");
	fn("abc", "axc");
	fn("kitten", "sitting");
	fn("xabxcdxxefxgx", "1ab2cd34ef5g6");
	fn("cat", "cow");
	fn("xabxcdxxefxgx", "abcdefg");
	fn("javawasneat", "scalaisgreat");
	fn("example", "samples");
	fn("sturgeon", "urgently");
	fn("levenshtein", "frankenstein");
	fn("distance", "difference");
	fn("因為我是中國人所以我會說中文", "因為我是英國人所以我會說英文");
}

suite
	.add("leven", function() {
		run(leven);
	})
	.add("leven_wasm", function() {
		run(leven_wasm);
	})
	.add("talisman", function() {
		run(talisman);
	})
	.add("levenshtein-edit-distance", function() {
		run(levenshteinEditDistance);
	})
	.add("fast-levenshtein", function() {
		run(fastLevenshtein);
	})
	.add("levenshtein-component", function() {
		run(levenshteinComponent);
	})
	.add("levdist", function() {
		run(levdist);
	})
	.add("ld", function() {
		run(ld);
	})
	.add("natural", function() {
		run(natural);
	})
	.add("levenshtein", function() {
		run(levenshtein);
	})
	.on("cycle", function(event) {
		console.log(String(event.target));
	})
	.on("complete", function() {
		console.log("Fastest is " + this.filter("fastest").map("name"));
	})
	.run({ async: true });
