import React from 'react'
import { ColumnWrapper, Heading } from '../styles'

interface ColumnProps {
    title: string,
    children: JSX.Element | JSX.Element[]
}
export const FooterColumn = ({title, children}:ColumnProps) => (
    <ColumnWrapper>
        <Heading>{title}</Heading>
        <ul>{children}</ul>
    </ColumnWrapper>
)


