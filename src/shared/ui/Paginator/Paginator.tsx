import React from 'react'
import styled from 'styled-components'

const StyledPaginatorContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  width: 300px;
  justify-content: space-between;
  cursor: pointer;
`
const StyledActivePageButton = styled.span`
  color: #ffffff
`

interface PropsType {
	currentPage: number,
	itemsAmount: number,
	pageSize: number
	setCurrentPage: (page: number) => void
}

const Paginator: React.FC<PropsType> = React.memo(({ itemsAmount, setCurrentPage, currentPage, pageSize = 10 }) => {

	let pagesAmount: number = (itemsAmount / pageSize)

	let pages: Array<number> = [...Array(pagesAmount)].map((el, i) => i + 1)

	let pageButtons = pages.map(page => {
		return currentPage === page
			? <StyledActivePageButton key={page} onClick={() => setCurrentPage(page)}>{page}</StyledActivePageButton>
			: <span key={page} onClick={() => setCurrentPage(page)}>{page}</span>
	})

	return <StyledPaginatorContainer>{pageButtons}</StyledPaginatorContainer>
}, (prevProps, nextProps) => {
	return prevProps.currentPage === nextProps.currentPage
})

export default Paginator
