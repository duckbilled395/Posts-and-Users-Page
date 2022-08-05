import React from 'react'
import styled from 'styled-components'

const StyledErrorBoundary = styled.div`
  width: 700px;
  margin: 50px auto;
  text-align: center;
  color: #ffffff;
  font-size: 24px;
`

const ErrorBoundary: React.FC = () => <StyledErrorBoundary>Error... Something went wrong</StyledErrorBoundary>

export default ErrorBoundary
