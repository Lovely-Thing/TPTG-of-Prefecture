import styled from 'styled-components'

type TitleComponentProps = {
  label: string
}

export const TitleComponent = (props: TitleComponentProps) => {
  return <Container>{props.label}</Container>
}

export default TitleComponent

const Container = styled.h1`
  background: #9d9d9d;
  width: 100%;
  text-align: center;
  color: #000;
  margin-top: 0;
  margin-bottom: 0;
  @media (max-width: 600px) {
    font-size: 23px;
  }
`
