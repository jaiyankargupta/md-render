// components/mdx-remote.js
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import { JSX, ClassAttributes, HTMLAttributes } from "react";
import { FaExternalLinkAlt } from "react-icons/fa"; // Example: Importing an external link icon

// Define custom components for MDX elements
const components = {
  // Headings
  h1: (
    props: JSX.IntrinsicAttributes &
      ClassAttributes<HTMLHeadingElement> &
      HTMLAttributes<HTMLHeadingElement>
  ) => (
    <h1 {...props} className="text-3xl font-black text-center pt-4">
      {props.children}
      <hr className="mt-4 mb-2 font-thin shadow-xl ml-12 mr-12" />
    </h1>
  ),

  h2: (
    props: JSX.IntrinsicAttributes &
      ClassAttributes<HTMLHeadingElement> &
      HTMLAttributes<HTMLHeadingElement>
  ) => (
    <h2 {...props} className="pl-3 font-semibold text-2xl mt-8 ">
      {props.children}
    </h2>
  ),

  h3: (
    props: JSX.IntrinsicAttributes &
      ClassAttributes<HTMLHeadingElement> &
      HTMLAttributes<HTMLHeadingElement>
  ) => (
    <h3 {...props} className="text-xl font-semibold mt-8 pl-3">
      {props.children}
    </h3>
  ),

  h4: (
    props: JSX.IntrinsicAttributes &
      ClassAttributes<HTMLHeadingElement> &
      HTMLAttributes<HTMLHeadingElement>
  ) => <h4 {...props}>{props.children}</h4>,

  h5: (
    props: JSX.IntrinsicAttributes &
      ClassAttributes<HTMLHeadingElement> &
      HTMLAttributes<HTMLHeadingElement>
  ) => <h5 {...props}>{props.children}</h5>,

  h6: (
    props: JSX.IntrinsicAttributes &
      ClassAttributes<HTMLHeadingElement> &
      HTMLAttributes<HTMLHeadingElement>
  ) => <h6 {...props}>{props.children}</h6>,

  // Lists
  ul: (
    props: JSX.IntrinsicAttributes &
      ClassAttributes<HTMLUListElement> &
      HTMLAttributes<HTMLUListElement>
  ) => (
    <ul {...props} className="list-disc ml-4 pl-4">
      {props.children}
    </ul>
  ),

  ol: (
    props: JSX.IntrinsicAttributes &
      ClassAttributes<HTMLOListElement> &
      HTMLAttributes<HTMLOListElement>
  ) => (
    <ol {...props} className="list-decimal ml-4">
      {props.children}
    </ol>
  ),

  li: (
    props: JSX.IntrinsicAttributes &
      ClassAttributes<HTMLLIElement> &
      HTMLAttributes<HTMLLIElement>
  ) => (
    <li {...props} className="">
      {props.children}
    </li>
  ),

  // Blockquote
  blockquote: (
    props: JSX.IntrinsicAttributes &
      ClassAttributes<HTMLQuoteElement> &
      HTMLAttributes<HTMLQuoteElement>
  ) => (
    <blockquote {...props} className="border-l-4 pl-4 italic">
      {props.children}
    </blockquote>
  ),

  // Emphasis and Strong
  em: (
    props: JSX.IntrinsicAttributes &
      ClassAttributes<HTMLElement> &
      HTMLAttributes<HTMLElement>
  ) => (
    <em {...props} className="italic">
      {props.children}
    </em>
  ),

  strong: (
    props: JSX.IntrinsicAttributes &
      ClassAttributes<HTMLElement> &
      HTMLAttributes<HTMLElement>
  ) => (
    <strong {...props} className="font-bold">
      {props.children}
    </strong>
  ),

  // Code
code: (
  props: JSX.IntrinsicAttributes &
    ClassAttributes<HTMLElement> &
    HTMLAttributes<HTMLElement>
) => {
  const isBlockCode = (props.children as string).includes('\n');
  
  return (
    <code
      {...props}
      className={`${
        isBlockCode
          ? 'bg-blue-100 text-red-800 p-4 rounded-md font-mono block my-2 mx-12'
          : 'bg-gray-100 text-red-800 px-1 rounded-sm font-mono'
      }`}
    >
      {props.children}
    </code>
  );
},

  // Paragraph
  p: (
    props: JSX.IntrinsicAttributes &
      ClassAttributes<HTMLParagraphElement> &
      HTMLAttributes<HTMLParagraphElement>
  ) => (
    <p {...props} className="pl-3 mt-2">
      {props.children}
    </p>
  ),

  // Horizontal Rule
  hr: (
    props: JSX.IntrinsicAttributes &
      ClassAttributes<HTMLHRElement> &
      HTMLAttributes<HTMLHRElement>
  ) => <hr {...props} className="my-4 border-gray-300" />,

  // Images
  img: (
    props: JSX.IntrinsicAttributes &
      ClassAttributes<HTMLImageElement> &
      HTMLAttributes<HTMLImageElement>
  ) => <img {...props} className="mt-7 w-33 h-20" />,

  // Table
  table: (
    props: JSX.IntrinsicAttributes &
      ClassAttributes<HTMLTableElement> &
      HTMLAttributes<HTMLTableElement>
  ) => (
    <table {...props} className="border-collapse border">
      {props.children}
    </table>
  ),

  tr: (
    props: JSX.IntrinsicAttributes &
      ClassAttributes<HTMLTableRowElement> &
      HTMLAttributes<HTMLTableRowElement>
  ) => (
    <tr {...props} className="">
      {props.children}
    </tr>
  ),

  th: (
    props: JSX.IntrinsicAttributes &
      ClassAttributes<HTMLTableHeaderCellElement> &
      HTMLAttributes<HTMLTableHeaderCellElement>
  ) => (
    <th {...props} className="border p-2 bg-gray-200 font-bold text-left">
      {props.children}
    </th>
  ),

  td: (
    props: JSX.IntrinsicAttributes &
      ClassAttributes<HTMLTableDataCellElement> &
      HTMLAttributes<HTMLTableDataCellElement>
  ) => (
    <td {...props} className="border p-2">
      {props.children}
    </td>
  ),

  // Link
  a: (
    props: JSX.IntrinsicAttributes &
      ClassAttributes<HTMLAnchorElement> &
      HTMLAttributes<HTMLAnchorElement>
  ) => (
    <a {...props} className="text-blue-500 underline ">
      {props.children} <FaExternalLinkAlt className="inline-block ml-1" />
    </a>
  ),

  // Div
  div: (
    props: JSX.IntrinsicAttributes &
      ClassAttributes<HTMLDivElement> &
      HTMLAttributes<HTMLDivElement>
  ) => (
    <div {...props} className="">
      {props.children}
    </div>
  ),
};

// Custom component for rendering MDX content
export function CustomMDX(props: JSX.IntrinsicAttributes & MDXRemoteProps) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}
