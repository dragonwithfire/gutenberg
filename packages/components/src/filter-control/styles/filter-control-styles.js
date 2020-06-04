/**
 * External dependencies
 */
import styled from '@emotion/styled';

/**
 * Internal dependencies
 */
import { space } from '../../utils/style-mixins';

export const Root = styled.div`
	box-sizing: border-box;

	> .components-base-control {
		margin-bottom: ${ space( 1.5 ) };
	}
`;