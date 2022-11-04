# CSS Exercise

With this plugin you can add a CSS exercise that includes a code editor. You can provide additional hidden files with the class `hidden-file`.

!!! exercise css-exercise
    Change the value of the `flex-direction` such that the children match the expected result:

    ```{.html .hidden-file}
    <div class="parent">
      <div class="child a">A</div>
      <div class="child b">B</div>
      <div class="child c">C</div>
    </div>
    ```

    ```{.css .hidden-file .filename-base}
    p {
      margin: 1rem 1rem 0;
    }

    .parent {
        box-sizing: border-box;
        height: 100vh;
    }
    ```

    ```css
    .parent {
      display: flex;
      flex-direction: row;
      padding: .5rem;
      background-color: #49D49D;
    }

    .child {
      margin: .5rem;
      padding: .5rem;
      background-color: #E15A97;
      color: white;
    }
    ```

    !!! answer
        ```css
        .parent {
            display: flex;
            flex-direction: column-reverse;
            padding: .5rem;
            background-color: #49D49D;
        }

        .child {
            margin: .5rem;
            padding: .5rem;
            background-color: #E15A97;
            color: white;
        }
        ```
