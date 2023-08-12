import { styled } from 'styled-components';
import tw from 'twin.macro';

export const Title = styled.h1`
	font-size: 1.5em;
	text-align: center;
	color: #bf4f74;
`;

export const Wrapper = styled.section`
	${tw`
    flex
    text-red-500
  `}
	padding: 4em;
	background: papayawhip;
`;
