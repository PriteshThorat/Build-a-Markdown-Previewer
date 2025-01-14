import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  markedText: `
  # Header 1

## Header 2

[Click here](https://github.com/PriteshThorat) to visit a link.

Here is some \`inline code\`.

\`\`\`
console.log("This is a code block");
\`\`\`

- List item

> This is a blockquote.

![Image](https://images.unsplash.com/photo-1672307974995-cd253f7f7eeb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)

**This text is bolded.**
  `
};

const markedTextSlice = createSlice({
  name: "marked",
  initialState,
  reducers: {
    change: (state, actions) => {
      state.markedText = actions.payload;
    }
  }
});

export const { change } = markedTextSlice.actions;

export default markedTextSlice.reducer;