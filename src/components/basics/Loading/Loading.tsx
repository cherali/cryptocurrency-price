import type { FC } from 'react'
import { LoadingContainer, StyledLoading } from './Loading.styles'
import type { LoadingProps } from './index.d'

const Loading: FC<LoadingProps> = ({ fullScreen = false }) => {
	return (
		<LoadingContainer fullScreen={fullScreen}>
			<StyledLoading />
		</LoadingContainer>
	)
}

export default Loading
