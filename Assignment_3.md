Problem 1:
void main() {                               
var x = 10; 
void innerFunction() { 
print(x); 
var x = 20; 
print(x); 
} 
innerFunction(); 
print(x);  
output: 10
              20
              10
Problem 2:
 void main() { 
var x = 'outer'; 
void firstLevel() { 
var y = 'middle'; 
print('First level: x = $x, y = $y'); 
void secondLevel() { 
var z = 'inner'; 
print('Second level: x = $x, y = $y, z = $z'); 
} 
var x = 'shadowed'; 
print('After shadowing: x = $x, y = $y, z = $z'); 
secondLevel(); 
print('Back to first level: x = $x, y = $y'); 
} 
firstLevel(); 
print('Back to main: x = $x');
}
Output:
First level: x = outer, y = middle
After shadowing: x = shadowed, y = middle	
Second level: x = shadowed, y = middle, z = inner
Back to first level: x = shadowed, y = middle
Back to main: x = outer
Problem 3:
void main() {
  var x = 5;
  {
    print('Block start: x = $x'); 
    var x = 10;
    print('In block: x = $x');
  }
  print('After block: x = $x'); 
}
Output:
Error because after declaring the variable inside the main function the empty block in created so the print statement will not work inside the scope.so the following print also never executed.
Problem 4:
void main() { 
var numbers = [1, 2, 3, 4, 5]; 
var functions = []; 
for (var i = 0; i < numbers.length; i++) { 
var number = numbers[i]; 
if (number % 2 == 0){ 
functions.add(() { 
var message = 'Even number: $number at index $i'; 
return message; 
}); 
} else { 
functions.add(() { 
var message = 'Odd number: $number at index $i'; 
return message; 
}); 
} 
} 
for (var function in functions) { 
print(function()); 
} 
} 
Output:
Problem 5:
void main() { 
final bool condition = false; 
final String message; 
if (condition) { 	
message = 'Condition is true'; 
var detail = 'Set in true branch'; 
print(detail); 
} else { 
message = 'Condition is false'; 
var detail = 'Set in false branch'; 
print(detail); 
} 
} 
print(message);
output: set in false branch
              condition in false
problem 6:
void main() { 
var x = 'global'; 
for (var i = 0; i < 2; i++) { 
var x = 'outer loop $i'; 

print('Outer loop: x = $x'); 
for (var j = 0; j < 2; j++) { 
var x = 'inner loop $j in outer loop $i'; 
print('Inner loop: x = $x'); 
} 
print('After inner loop: x = $x'); 
} 	
print('After all loops: x = $x');} 
output:
problem 7:
void main() { 
for (var i = 0; i < 5; i++) { 
print('Start of iteration $i'); 
if (i ==2){ 
i++; 
} 
print('End of iteration $i');}}
output:
Start of iteration 0
End of iteration 0
Start of iteration 1
End of iteration 1
Start of iteration 2
End of iteration 3
Start of iteration 4
End of iteration 4
Problem 8:
 void main() { 
var items = [1, 2, 3]; 
var result = []; 
var x = 'outer'; 
for (var i = 0; i < items.length; i++) { 
var y = 'loop $i'; 
void processItem(item) { 
var z = 'item $item'; 
print('Processing: x = $x, y = $y, z = $z, i = $i'); 
if (item % 2 == 0) { 
var x = 'even item'; 
print('Even item: x = $x, y = $y, z = $z'); 
result.add(() { 
var capturedI = i; 
return 'Result for $item at position $capturedI: x = $x, y = $y, z = $z'; 
}); 
} else { 
var y = 'odd item'; 
print('Odd item: x = $x, y = $y, z = $z'); 
result.add(() { 
return 'Result for $item at position $i: x = $x, y = $y, z = $z'; 
}); 
} 
} 
processItem(items[i]); 
} 
x = 'modified outer'; 
for (var i = 0; i < result.length; i++) { 
print('Result $i: ${result[i]()}'); 
} 
} 
Output:
Problem 9:
 void main() { 
var condition = true; 
var x = 5; 
if (condition) { 
var y = 10; 
print('If block: x = $x, y = $y'); 
if (y > x) { 
var z = 15; 
print('Nested if: x = $x, y = $y, z = $z'); 
x=25; 
} 
print('After nested if: x = $x, y = $y'); 
} else { 
var y = 20; 
print('Else block: x = $x, y = $y'); 
} 
print('After if-else: x = $x');}
output:
 If block: x = 5, y = 10
 Nested if: x = 5, y = 10, z = 15
After nested if: x = 25, y = 10
After if-else: x = 25 
Problem 10:
 void main() { 
var sum = 0; 
for (var i = 0; i < 3; i++) { 
var sum = i * 2; 
print('Inside loop $i: sum = $sum'); 
} 
print('Final sum = $sum');}
output:
Inside loop 0: sum = 0
Inside loop 1: sum = 2 
Inside loop 2: sum = 4
Final sum = 0
Problem 11:
 void main() { 
var flag = true; 
var value = 'outside'; 
if (flag) { 
print('Before declaration: $value'); 
var value = 'inside'; 
print('After declaration: $value'); 
} 
print('Outside condition: $value');} 
output:
After declaration: inside
 Outside condition: outside
Problem 12:
void main() { 
var x = 10; 
void updateValue(x) { 
x= 20; 
print('Inside function: x = $x'); 
} 
updateValue(x); 
print('After function call: x = $x');}
output: Inside function: x = 20
 After function call: x = 10
Problem 13: void main() { 
var counter = 0; 
while (counter < 3) { 
print('Before shadowing: counter = $counter'); 
var counter = 10; 
print('After shadowing: counter = $counter'); 
counter++; 
} 
print('After loop: counter = $counter');} 
output:
Before shadowing: counter = 0
After shadowing: counter = 10 
Before shadowing: counter = 0 
After shadowing: counter = 10
Before shadowing: counter = 0
After shadowing: counter = 10
After loop: counter = 0
Problem 14:
void main() { 	
var options = {'title': 'Original Title', 'size': 100; 
void configure({title, size}) { 
var title = title ?? 'Default Title'; 
var size = size ?? 50; 
print('Configured with: title = $title, size = $size'); 
} 
configure(title: options['title'], size: options['size']);}
output: Configured with: title = Original Title, size = 100
problem 15:
problem 16:
 void main() { 	
for (var i = 0; i < 3; i++) { 
print('Start of iteration $i'); 
{ 
var j = i * 2; 
print('Inner block: i = $i, j = $j'); 
} 
print('End of iteration $i'); 
} }
Output:
Start of iteration 0
 Inner block: i = 0, j = 0
 End of iteration 0
 Start of iteration 1
 Inner block: i = 1, j = 2
 End of iteration 1
 Start of iteration 2
 Inner block: i = 2, j = 4
 End of iteration 2
Problem 17:
class Counter { 	
int count = 0; 
void increment(count) { 
count += 1; 
print('Inside increment: count = $count'); 
} 
void display() { 
print('Counter value: $count'); 
} 
} 
void main() { 
var counter = Counter(); 
counter.increment(5); 
counter.display();  } 
output:
Inside increment: count = 6
Counter value: 0

Problem 18:
void main() { 
var value = 'outer'; 
var items = [1, 2, 3]; 
for (var i =0; i < items.length; i++) { 
print('Loop $i - Before condition: value = $value'); 
if (items[i] % 2 == 0) { 
var value = 'inner even';
print('Loop $i - Even condition: value = $value'); 
} else { 
var value = 'inner odd'; 
print('Loop $i - Odd condition: value = $value'); 
} 
print('Loop $i - After condition: value = $value'); 
} 
print('After loop: value = $value'); 
}
Output:
Loop 0 - Before condition: value = outer
Loop 0 - Odd condition: value = inner odd
Loop 0 - After condition: value = inner odd
Loop 1 - Before condition: value = outer
Loop 1 - Even condition: value = inner even
Loop 1 - After condition: value = inner even
Loop 2 - Before condition: value = outer
Loop 2 - Odd condition: value = inner odd
Loop 2 - After condition: value = inner odd
After loop: value = outer

Problem 19:
 void main() { 
var value = 42; 
var functions = []; 
void addFunction() { 
var multiplier = value; 
functions.add((x) { 
var result = x * multiplier; 
return (y) { 
var sum = result + y; 
return (z) { 
var total = sum + z + value; 
return () ⇒ 'x: $x, y: $y, z: $z, multiplier: $multiplier, value: $value, total: $t 
}; 
}; 
}); 
} 
addFunction(); 
value = 100; 
addFunction(); 
var chain1 =functions[0](2)(3)(4); 
var chain2 = functions[1](2)(3)(4); 
value = 200; 
print(chain1()); 
print(chain2()); 
} 
Output:
Problem 20:
  void main() { 
for (var i = 0; i < 3; i++) { 
print('Loop iteration $i'); 
if (i % 2 == 0) { 
void evenFunction() { 
print('This is an even iteration: $i'); 
} 
evenFunction(); 
} else { 
void oddFunction() { 
print('This is an odd iteration: $i'); 
} 
oddFunction(); 
} 
} 
}
Output:
Loop iteration 0 
This is an even iteration: 0
 Loop iteration 1	
 This is an odd iteration: 1
 Loop iteration 2
 This is an even iteration: 2
Problem 21:
 void main() { 
var multiplier = 2; 
var numbers = [1, 2, 3, 4]; 
var result = numbers.map((multiplier) ⇒ multiplier * multiplier).toList(); 
print('Original multiplier: $multiplier'); 
print('Result: $result'); 
} 
Output:
Original multiplier: 2
 Result: [1, 4, 9, 16]
Problem 22:
void main() { 	
var x = 10; 
var y = 20; 
void outer(x) { 
print('Outer start: x = $x, y = $y'); 
void inner(y) { 
var x = 30; 
print('Inner: x = $x, y = $y'); 
} 
inner(x * 2); 
print('Outer end: x = $x, y = $y'); 
} 
outer(y); 
print('Main end: x = $x, y = $y');}
output:
Outer start: x = 20, y = 20
 Inner: x = 30, y = 40	
 Outer end: x = 20, y = 20
 Main end: x = 10, y = 20
Problem 23:
 void main() { 
var items = ['apple', 'banana', 'cherry']; 
var count = 0; 
for (var item in items) { 
count++; 
var message = 'Item $count: $item'; 
print(message); 
} 
print('Total items: $count'); 
} 
Output:
Item 1: apple
 Item 2: banana
 Item 3: cherry
 Total items: 3
Problem 24:  void main() { 
var counter = 0; 
void incrementCounter() { 
counter++; 
print('Counter incremented to: $counter'); 
} 
void resetCounter() { 
counter = 0; 
print('Counter reset to: $counter'); 
} 
void performOperations() { 
var operationCount = 0; 
void logOperation(String operation) { 
operationCount++; 
print('Operation $operationCount: $operation'); 
} 
incrementCounter(); 
logOperation('increment'); 
incrementCounter(); 
logOperation('increment'); 
resetCounter(); 
logOperation('reset'); 
} 
performOperations(); 
print('Final counter value: $counter'); 
} 
Output: Counter incremented to: 1
 Operation 1: increment
 Counter incremented to: 2
 Operation 2: increment 
Counter reset to: 0
 Operation 3: reset
 Final counter value: 0
Problem 25: void main() { 	
var flag = true; 
if (flag) { 
var message = 'Flag is true'; 
print(message); 
} else { 
var message = 'Flag is false'; 
print(message); 
} 
var message = 'This is a different message';
print(message);
}
Output: Flag is true 
This is a different message
Problem 26: void main() { 
Function makeAdder(int amount) { 
return (int n) { 
return n + amount; 
}; 
} 
var add2 = makeAdder(2); 
var add5 = makeAdder(5); 
print(add2(10)); 
print(add5(10)); 
amount = 10; 
print(add2(10)); 
print(add5(10)); 
}
Output: 12 
15
12
15
Problem 27: void main() { 
var value = 'global'; 
void level1() { 
print('Level 1 - Before shadowing: $value'); 
var value = 'level 1'; 
print('Level 1 - After shadowing: $value'); 
void level2() { 
print('Level 2 - Before shadowing: $value'); 
var value = 'level 2'; 
print('Level 2 - After shadowing: $value'); 
void level3() { 
print('Level 3 - Accessing: $value'); 
value = 'modified level 2'; 
print('Level 3 - After modifying: $value'); 
} 
level3(); 
print('Level 2 - After level3 call: $value'); 
} 
level2(); 
print('Level 1 - After level2 call: $value'); 
} 
level1(); 
print('Global  After level1 call: $value'); 
} 
Output: Level 1 - Before shadowing: global
 Level 1 - After shadowing: level 1
 Level 2 - Before shadowing: level 1 
Level 2 - After shadowing: level 2
 Level 3 - Accessing: level 2
 Level 3 - After modifying: modified level 2 
Level 2 - After level3 call: level 2
 Level 1 - After level2 call: level 1
 Global - After level1 call: global
Problem 28: output: Processing value 1
Processed value: 10 
Processing value 2
Processed value: 20 
Processing value 3
Processed value: 30
Problem 29: output: Result 0: Processing apple at index 2
 Result 1: Processing banana at index 2	
 Result 2: Processing cherry at index 2
Problem 30:output:
Operation completed successfully
Problem 31:
void main() {
  var count = 0;

  Function createCounter(int start) {
    var localCount = start;
    return () {
      count++;
      localCount += count;
      return () {
        var snapshot = localCount;
        localCount = localCount * 2;
        return () {
          return 'Global count: $count, Local count: $localCount, Snapshot: $snapshot';
        };
      };
    };
  }

  var counter1 = createCounter(5);
  var counter2 = createCounter(10);

  var result1 = counter1();
  var result2 = counter2();

  count = 100;

  var finalResult1 = result1()();
  var finalResult2 = result2()();

  print(finalResult1);
  print(finalResult2);
}
Output: Global count: 100, Local count: 12, Snapshot: 6
Global count: 100, Local count: 24, Snapshot: 12
Problem:32
void main() {
  var a = 1;
  var b = 2;
  var c = 3;

  if (a < b) {
    var d = a + b;
    print('First if: a = $a, b = $b, c = $c, d = $d');

    if (b < c) {
      var e = b + c;
      var a = 10; 
      print('Second if: a = $a, b = $b, c = $c, d = $d, e = $e');

      if (a > c) {
        var f = a + e;
        var d = 20; 
        print('Third if: a = $a, b = $b, c = $c, d = $d, e = $e, f = $f');

        a = 30;
        d = 40;
      }

      print('After third if: a = $a, b = $b, c = $c, d = $d, e = $e');
    }

    print('After second if: a = $a, b = $b, c = $c, d = $d');
  }

  print('After all if: a = $a, b = $b, c = $c');
}
Output: First if: a = 1, b = 2, c = 3, d = 3
Second if: a = 10, b = 2, c = 3, d = 3, e = 5
Third if: a = 10, b = 2, c = 3, d = 20, e = 5, f = 15
After third if: a = 30, b = 2, c = 3, d = 3, e = 5
After second if: a = 1, b = 2, c = 3, d = 3
After all if: a = 1, b = 2, c = 3
Problem 33: void main() {
  for (var i = 0; i < 3; i++) {
    print('Outer loop $i start');

    for (var i = 0; i < 2; i++) {
      print('  Inner loop $i');
    }

    print('Outer loop $i end');
  }
}
Output:
Outer loop 0 start
  Inner loop 0
  Inner loop 1
Outer loop 0 end
Outer loop 1 start
  Inner loop 0
  Inner loop 1
Outer loop 1 end
Outer loop 2 start
  Inner loop 0
  Inner loop 1
Outer loop 2 end
Problem:34 void main() {
    Var functions = [];

  for (var i = 0; i < 3; i++) {
    void createFunction() {
      var multiplier = i + 1;
      functions.add(() => 'Function $i with multiplier $multiplier');
    }

    createFunction();
  }

  for (var function in functions) {
    print(function());
  }
}
Output: Function 0 with multiplier 1
Function 1 with multiplier 2
Function 2 with multiplier 3
Problem 35: void main() {
  var functions = [];

  for (var outerI = 0; outerI < 3; outerI++) {
    void addFunction(int outerI) {
      functions.add(() => 'Outer i: $outerI');

      for (var innerI = 0; innerI < 2; innerI++) {
        void captureI() {
          var captured = innerI;
          functions.add(() => 'Inner i: $innerI, Captured: $captured, Outer i: ${outerI + captured}');
        }

        captureI();
      }
    }

    addFunction(outerI);
  }

  for (var f in functions) {
    print(f());
  }
}
Output: Outer i: 0
Inner i: 0, Captured: 0, Outer i: 0
Inner i: 1, Captured: 1, Outer i: 1
Outer i: 1
Inner i: 0, Captured: 0, Outer i: 1
Inner i: 1, Captured: 1, Outer i: 2
Outer i: 2
Inner i: 0, Captured: 0, Outer i: 2
Inner i: 1, Captured: 1, Outer i: 3
Problem:36
void main() {
  var i = 0;
  do {
    print('Iteration $i starts');
    if (i > 0) {
      var previousValue = i - 1;
      print('Previous value was $previousValue');
    }
    print('Iteration $i ends');
    i++;
  } while (i < 3);
}
Output: Iteration 0 starts
Iteration 1 ends
Iteration 1 starts
Previous value was 0
Iteration 2 ends
Iteration 2 starts
Previous value was 1
Iteration 3 ends









