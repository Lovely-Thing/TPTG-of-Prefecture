import styled from 'styled-components'
import { usePrefectureContext } from '@/context/PrefectureContext'

type PrefectureItemProps = {
  label: string
  id: string
  code: number
}

export const PrefectureItem = (props: PrefectureItemProps) => {
  const {
    prefectureList,
    setPrefectureList,
    originalPrefectureList,
    setOriginalPrefectureList,
    allPrefectureList,
    setAllPrefectureList,
  } = usePrefectureContext()

  const handleClick = (dataId: number, dataName: string) => {
    // remove unselected data
    if (prefectureList.indexOf(dataId) !== -1) {
      let prefArr = prefectureList.filter(function (item) {
        return item !== dataId
      })
      setPrefectureList(prefArr)
    } // store selected data
    else {
      setPrefectureList([...prefectureList, dataId])
      // store all data
      if (allPrefectureList.indexOf(dataId) === -1) {
        setAllPrefectureList([...allPrefectureList, dataId])
        const url =
          'https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=' +
          dataId
        const apiKey = process.env.X_API_KEY || ''

        fetch(url, { headers: { 'X-API-KEY': apiKey } })
          .then((res) => {
            res.json().then((res) => {
              const perPrefectures = res.result
              console.log(dataId, perPrefectures)
              setOriginalPrefectureList([
                ...originalPrefectureList,
                {
                  id: dataId,
                  name: dataName,
                  data: perPrefectures.data[0].data,
                },
              ])
            })
          })
          .catch((error) => {
            console.log(error)
          })
      }
    }
  }

  return (
    <Container>
      <input
        type="checkbox"
        name="profecture_check"
        id={props.id}
        onClick={() => handleClick(props.code, props.label)}
      />
      <label htmlFor={props.id}>{props.label}</label>
    </Container>
  )
}

export default PrefectureItem

const Container = styled.div`
  padding: 5px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 600px) {
    padding: 2px 6px;
    label {
      font-size: 12px;
    }
  }
`
