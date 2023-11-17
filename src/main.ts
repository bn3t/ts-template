#!/usr/bin/env node

import yargs from "yargs";
import { hideBin } from "yargs/helpers";

import { helloWorld, helloWorldAsync, MyClass } from "@/lib";

const test = () => {
  console.log(helloWorld());

  helloWorldAsync().then(console.log);

  const myclass = new MyClass("test");
  console.log(
    myclass.type === "test"
      ? "Classes are working *with* properties in constructors"
      : "Classes are NOT working *with* properties in constructors",
  );
};

yargs(hideBin(process.argv))
  .command("*", "Test application", test, () => {})
  .command("another-task", "Run another task", () =>
    console.log("Running another task"),
  )
  .help("h")
  .alias("h", "help")
  .epilog("copyright 2023")
  .parse();
