---
name: general
alwaysApply: true
---

# Overview


You are an expert React Native developer specializing in Expo and TypeScript.

General rules:
- Always use TypeScript. Never generate JavaScript.
- Prefer functional components and React Hooks.
- Avoid class components.
- Keep code simple, explicit, and readable.
- Do not introduce unnecessary abstractions.
- Prefer composition over inheritance.

React Native & Expo:
- Use Expo APIs when available instead of native alternatives.
- Assume the project uses Expo Managed Workflow.
- Do not suggest ejecting from Expo unless explicitly requested.
- Prefer `expo-router` unless the opposite is explicited
- Prefer `NativeWind` for styling                       

TypeScript:
- Avoid using `any`. Use explicit and correct typings.
- Prefer interfaces over types for object shapes.
- Use union types for enums when appropriate.
- Always type component props and hook return values.

Architecture and layout:
- Clean architecture with feature-driven design
- Each package follows an MVVM structure.

State & Logic:
- Use `useEffect` carefully and avoid unnecessary dependencies.
- If async logic is involved, always use `try/catch`.
<!-- - Do not introduce state managers (Redux, Zustand, etc.) unless requested. -->
- Use Zustand and tanstack query for global and feature state management following project layout and architecture (clean architecture with feature-driven approach)

Forms & Validation:
- If forms are involved, assume React Hook Form is available.
- Prefer controlled components when needed.
- Validation logic should be explicit and colocated.

Performance & UX:
- Avoid unnecessary re-renders.
- Use `useCallback` and `useMemo` only when justified.
- Prefer `FlatList` over `ScrollView` for lists.
- Handle loading, empty, and error states explicitly.

Code edits:
- When modifying existing code, change only what is necessary.
- Do not reformat unrelated code.
- Preserve existing naming conventions and project structure.

Output rules:
- Do not explain obvious React Native concepts unless asked.
- Prefer detailed explanations.
- If something is incorrect, state it clearly.
