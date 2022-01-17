// 1.Declare four variables without assigning
//   values and print them in console.
var a;
var b;
var c;
var d;
console.log(a, b, c, d);

// 2.How to get value of the variable myvar as output.
var myvar = 1;
console.log("myvar");
console.log(myvar);

// 3. Declare variables to store your first name, last name,
//    marital status, country and age in multiple lines.
var name = "shahid";
var lastname = "kapoor";
var marital_status = "married";
var country = "india";
var age = 40;

// 4. Declare variables to store your first name, last name,
//    marital status, country and age in a single.
var name = "shahid",
  lastname = "kapoor",
  marital_status = "married",
  country = "india",
  age = 40;

// 5. Declare variables and assign string,
//    boolean, undefined and null data types.
var string = "abc";
var boolean = true;
var undefined = undefined;
var null1 = null;
console.log(string, boolean, undefined, null1);

// 6. Convert the string to integer.
var string_To_No = "10";
console.log(parseInt(string_To_No), Number(string_To_No), +string_To_No);

// 7. Write 6 statement which provide truthy & falsey values.
// Truthy values
console.log(1 == "1");
console.log(1 == [1]);
console.log("1" == [1]);
// Falsey values
console.log(1 === "1");
console.log(1 === [1]);
console.log("1" === [1]);

// Task 2

// 1.Square of a number
var square = 12;
console.log(square * square);
// 2.Swapping 2 numbers
var swap1 = 10,
  swap2 = 20;
[swap1, swap2] = [swap2, swap1];
console.log(swap1, swap2);
// 3.Addition of 3 numbers
console.log(1 + 2 + 3);
// 4.Celsius to Fahrenheit conversion
var celsius = 50;
console.log(celsius * 1.8 + 32);
// 5.Meter to miles
console.log(5000 * 0.000621371192);
// 6.Pounds to kg
console.log(50 * 0.453592);
// 7.Calculate Batting Average
let runs = 10000;
let matches = 250;
let notout = 50;
console.log(runs / (matches - notout));
// 8.Calculate five test scores and print their average
let day_1_runs = 50;
let day_2_runs = 60;
let day_3_runs = 70;
let day_4_runs = 80;
let day_5_runs = 90;
var totalRuns = day_1_runs + day_2_runs + day_3_runs + day_4_runs + day_5_runs;
let notout1 = 3; // out of five
console.log("avg = ", totalRuns / notout);
// 9.Power of any number x ^ y.
let x = 5;
let y = 3;
console.log(Math.pow(x, y));
// 10.Calculate Simple Interest
var p = 20; // principle Amount
var t = 9; // time
var r = 8; // rate
var SI = (p * t * r) / 100; // Simple Intrest
console.log(SI);
// 11.Calculate area of an equilateral triangle
let side1 = 5;
let area = (Math.sqrt(3) / 4) * (side1 * side1);
console.log(area);
// 12.Area Of Isosceles Triangle
let sides = 2; //equal sides
let base = 3; // base of triangle
let altitude = Math.sqrt(Math.pow(sides, 2) - Math.pow(base, 2) / 4);
let area_of_Isosceles_Triangle = (1 * base * altitude) / 2;
console.log(area_of_Isosceles_Triangle);
// 13.Volume Of Sphere
let radius_of_sphere = 5;
var volume_of_sphere = (4 / 3) * 3.14 * Math.pow(radius_of_sphere, 3);
console.log(volume_of_sphere);
// 14.Volume Of Prism
let length_of_prism = 18,
  width_of_prism = 12,
  height_of_prism = 9;
volume_of_prism = (length_of_prism * width_of_prism * height_of_prism) / 2;
console.log(volume_of_prism);
// 15.Find area of a triangle
let base_of_triangle = 3;
let height_of_triangle = 4;
var area_of_triangle = (base_of_triangle * height_of_triangle) / 2;
console.log(area_of_triangle);
// 17.Given their radius of a circle and
//    find its diameter, circumference and area.
let radius_of_circle = 5;
let diameter = radius_of_circle + radius_of_circle;
let circumference = 2 * 3.14 * radius_of_circle;
let area_of_circle = 3.14 * radius_of_circle * radius_of_circle;
console.log(diameter, circumference, area_of_circle);
// 18.Given two numbers and perform all arithmetic operations.
let num1 = 10;
let num2 = 5;
let addition = num1 + num2;
let subtraction = num1 - num2;
let multiplication = num1 * num2;
let division = num1 / num2;
console.log(addition, subtraction, multiplication, division);
// 19.Display the asterisk pattern as shown below(No loop needed):
// *****
// *****
// *****
// *****
// *****
console.log(`
*****
*****
*****
*****
*****`);
// 21.Program To Calculate CGPA
let English = 9.1;
let Hindi = 8.5;
let Maths = 9.5;
var CGPA = (English + Hindi + Maths) / 3;
console.log(CGPA);

