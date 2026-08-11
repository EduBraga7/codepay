import type { HTMLAttributes } from 'react';

type SkeletonProps = HTMLAttributes<HTMLDivElement>;

export default function Skeleton({ className = '', style = {}, ...props }: SkeletonProps) {
  return (
    <div
      className={`skeleton ${className}`}
      style={style}
      {...props}
    />
  );
}
