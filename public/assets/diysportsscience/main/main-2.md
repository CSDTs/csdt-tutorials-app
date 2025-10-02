# Setting Up Variables: Gravity and Initial Velocity

To simulate jumping, we need to set up two key variables: **gravity** and **initial velocity**.

1. **Create Variables**:

   - You'll need at least two variables: `gravity` (for acceleration) and `initial velocity`.
   - In CSnap, drag in a `Set __ to __` block.
   - Set `gravity` to Earth's gravity: **9.8 (m/s²)**.

   ![Set variable block example](https://csdt.org/media/cms_page_media/842/set%20var.PNG)

2. **Find Your Jump Height**:

   - Use your jump height in meters (measured with the photo gate sensor) to determine your initial velocity.
   - If you don't have a photo gate sensor, you can use a meter stick and a friend to help measure your jump height.

3. **Calculate Initial Velocity**:

   - The energy of your jump is given by the equation:  
     \[
     \frac{1}{2}mv^2 = mgh
     \]
     where:
     - _m_ = mass (kg)
     - _g_ = gravity (9.8 m/s²)
     - _h_ = jump height (meters)
   - Solving for initial velocity (_v_):  
     \[
     v = \sqrt{2gh}
     \]
     (Notice that your mass cancels out!)

4. **Try It Yourself!**  
   Use the calculator below to find your initial velocity:

   ```
   Height of jump in meters: [           ] (Enter your value)
   [Calculate]
   Result: v = sqrt(2 × 9.8 × height) m/s
   ```

   _(If you are using this in a web page, you can add a calculator widget. Otherwise, use a calculator to compute the value.)_

5. **Convert to Pixels**:
   - Multiply your initial velocity (in m/s) by **12** to convert it to pixels for CSnap.
   - Set your `initial velocity` variable using the `Set __ to __` block.
   - Click the green flag to run your simulation!
