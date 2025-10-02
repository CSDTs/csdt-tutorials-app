# Loops

Time to make our gliding loop until Lebron hits the floor:

- Now let's move Lebron using his initial velocity and acceleration. Use the **"Repeat Until \_\_"** and **"Set y to \_\_"** blocks in CSnap.
- To make him stop at the floor, set the condition in the repeat block to `y < -67`. This way, when Lebron's y position drops below -67, the loop will stop.
- The **"Set y to \_\_"** block should use the formula:  
  `initial velocity * time - (gravity / 2) * (time * time)`
- Change the `time` variable by `0.03` each loop to animate the jump smoothly.
- Use the **"Go to x: x position y: y"** block to update Lebron's position on the stage using the calculated y value at each step.
