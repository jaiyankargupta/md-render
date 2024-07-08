// app/page.js
import { Suspense } from "react";
import { CustomMDX } from "../components/mdx-remote";

export default function Home() {
  const source = `# Hello World

        This is from Server Components!

        ---

        \`\`\`js
        console.log("Hello World");
        \`\`\`
        `;

  return (
    <Suspense fallback={<>Loading...</>}>
      <CustomMDX source={source} />
    </Suspense>
  );
}
