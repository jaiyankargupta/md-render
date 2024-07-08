// components/mdx-remote.js
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import { JSX, ClassAttributes, HTMLAttributes } from "react";

const components = {
  h1: (
    props: JSX.IntrinsicAttributes &
      ClassAttributes<HTMLHeadingElement> &
      HTMLAttributes<HTMLHeadingElement>
  ) => (
    <h1 {...props} className="large-text">
      {props.children}
    </h1>
  ),
  pre: (
    props: JSX.IntrinsicAttributes &
      ClassAttributes<HTMLPreElement> &
      HTMLAttributes<HTMLPreElement>
  ) => (
    <pre {...props} className=" mx-5">
      {props.children}
    </pre>
  ),
  code: (
    props: JSX.IntrinsicAttributes &
      ClassAttributes<HTMLElement> &
      HTMLAttributes<HTMLElement>
  ) => (
    <code {...props} className="">
      {props.children}
    </code>
  ),
  p: (
    props: JSX.IntrinsicAttributes &
      ClassAttributes<HTMLParagraphElement> &
      HTMLAttributes<HTMLParagraphElement>
  ) => (
    <p {...props} className="">
      {props.children}
    </p>
  ),
};

export function CustomMDX(props: JSX.IntrinsicAttributes & MDXRemoteProps) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}
