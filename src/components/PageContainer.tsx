import { ReactElement } from 'react'
import styled from 'styled-components'

type PageContainerProps = {
  children: ReactElement
}

export const PageContainer = (props: PageContainerProps) => {
  return <Container>{props.children}</Container>
}

export default PageContainer

const Container = styled.div`
  max-width: 1120px;
  width: 100%;
  margin: 0 auto;
  padding: 12px;
`
