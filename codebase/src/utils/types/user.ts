import { ReactNode } from "react"

export type ROLE = 'admin' | 'lecturer' | 'student' 

export interface UserRole {
  children: ReactNode,
  role: ROLE
}