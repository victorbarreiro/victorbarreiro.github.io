'use client'

import 'katex/dist/katex.min.css'
import { InlineMath, BlockMath } from 'react-katex'

interface MathExpressionProps {
  expression: string
  display?: 'inline' | 'block'
  className?: string
}

export default function MathExpression({ 
  expression, 
  display = 'inline',
  className = ''
}: MathExpressionProps) {
  const Component = display === 'inline' ? InlineMath : BlockMath
  
  return (
    <div className={`${display === 'block' ? 'my-4' : ''} ${className}`}>
      <Component math={expression} />
    </div>
  )
}

// Helper components for common use cases
export function Equation({ children, className = '' }: { children: string, className?: string }) {
  return (
    <div className={`my-6 p-4 bg-neutral-50 rounded-lg overflow-x-auto ${className}`}>
      <BlockMath math={children} />
    </div>
  )
}

export function MathText({ children, className = '' }: { children: string, className?: string }) {
  return (
    <span className={`font-mono ${className}`}>
      <InlineMath math={children} />
    </span>
  )
} 