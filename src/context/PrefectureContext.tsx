import { createContext, useContext, ReactNode, useState } from 'react'

type originAlDataType = {
  id: number
  name: string
  data: serieDataType[]
}

type serieDataType = {
  year: number
  value: number
}

const useValue = () => {
  const [prefectureList, setPrefectureList] = useState<number[]>([])
  const [allPrefectureList, setAllPrefectureList] = useState<number[]>([])
  const [originalPrefectureList, setOriginalPrefectureList] = useState<
    originAlDataType[]
  >([])

  return {
    prefectureList,
    setPrefectureList,
    originalPrefectureList,
    setOriginalPrefectureList,
    allPrefectureList,
    setAllPrefectureList,
  }
}

const PrefectureContext = createContext({} as ReturnType<typeof useValue>)

export function usePrefectureContext() {
  return useContext(PrefectureContext)
}

type Props = {
  children: ReactNode
}

export default function PrefectureContextProvider({ children }: Props) {
  return (
    <PrefectureContext.Provider value={useValue()}>
      {children}
    </PrefectureContext.Provider>
  )
}
