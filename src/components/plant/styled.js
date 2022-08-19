import styled from "styled-components";
import back from "./배경.png";

export const UserSection = styled.div`
	// background-color: red;
	width: 20rem;
	height: 15rem;
	padding: 0.5rem;
	border-bottom-style: solid;
	border-bottom-color: grey;
`;

export const LogoDiv = styled.div`
	color: white;
	font-size: 23pt;
	font-weight: bold;
	text-shadow: 2px 2px 2px gray;
`;
export const NameDiv = styled.div`
	padding-top: 3rem;
	padding-bottom: 3rem;
	font-weight: bold;
	padding-left: 1rem;
	font-size: 35pt;
	text-align: center;
`;

export const NavItem = styled.div`
	padding-left: 13.9rem;
	padding-top: 0.3rem;
	font-size: 10pt;
`;

export const PlantSection = styled.div`
	// background-color: blue;
	width: 21rem;
	font-size: 14pt;
	line-height: 2.5rem;
	padding: 1rem;
`;

export const LeftSection = styled.div`
	// background-color: green;
	width: 21rem;
	height: 62.5rem;
	border-right-style: solid;
	border-right-color: grey;
`;

export const RightSection = styled.div`
	// background-color: red;
	background-image: url(${back});
	background-repeat: no-repeat;
	background-position: top center;
	background-size: cover;
	width: 100%;
	height: 100%;
`;

export const PlantsInfo = styled.div`
	padding: 3rem;
	font-size: 25pt;
	font-weight: bold;
`;

export const Wrap = styled.div`
	display: flex;
	flex-direction: row;
`;

export const PlantName = styled.div`
	width: 25rem;
	height: 44rem;
	float: left;
	padding-top: 10rem;
	text-align: center;
	// background-color: blue;
	img {
		width: 14rem;
		border-radius: 50rem;
	}

	div {
		font-size: 14pt;
		padding-top: 1rem;
	}
`;

export const RightInSection = styled.div``;

export const DesItem = styled.div`
	background-color: white;
	opacity: 0.9;
	float: left;
	width: 30rem;
	height: 13rem;
	margin-left: 4rem;
	margin-top: 2rem;
	hr {
		width: 28rem;
	}
`;

export const TitleDiv = styled.div`
	font-size: 20pt;
	padding-top: 1rem;
	padding-left: 1.5rem;
	padding-bottom: 0.2rem;
`;

export const SubTitleDiv = styled.div`
	// background-color: pink;
	width: 11rem;
	height: 2rem;
	line-height: 2rem;
	font-size: 13pt;
	margin-left: 1rem;
	text-align: center;
	float: left;
`;

export const ImgDiv = styled.div`
	// background-color: red;
	float: left;
	width: 16rem;
	img {
		margin-left: 0.7rem;
		width: 1.7rem;
	}
`;

export const Img2Div = styled.div`
	// background-color: red;
	float: left;
	width: 16rem;
	img {
		margin-left: 1rem;
		width: 1.5rem;
	}
`;

export const SelectDiv = styled.div`
	margin-top: 1.1rem;
`;

export const Img3Div = styled.div`
	// background-color: red;
	margin-top: 0.1rem;
	float: left;
	width: 16rem;
	height: 2rem;
	line-height: 2rem;
	padding-left: 0.8rem;
	img {
		width: 12rem;
		height: 1.5rem;
		margin-left: 0.4rem;
		margin-right: 0.4rem;
	}
`;

export const CircleItem = styled.div`
	background-color: #ced4da;
	font-size: 15pt;
	text-align: center;
	line-height: 5rem;
	width: 5rem;
	height: 5rem;
	border-radius: 50rem;
`;

export const CircleDiv = styled.div`
	// background-color: blue;
	width: 5rem;
	margin-left: 3.2rem;
`;

export const CircleText = styled.div`
	// background-color: red;
	width: 5rem;
	text-align: center;
	margin-top: 0.3rem;
	font-size: 12pt;
`;

export const CircleSection = styled.div`
	display: flex;
	flex-direction: row;
	margin-left: 1rem;
	margin-top: 1rem;
`;

export const DesItem2 = styled.div`
	background-color: white;
	opacity: 0.9;
	float: left;
	width: 30rem;
	height: 14rem;
	margin-left: 4rem;
	margin-top: 2rem;
	hr {
		width: 28rem;
	}
`;

export const DiarySection = styled.div``;

export const TextDiv = styled.div`
	margin-top: 1.5rem;
	// background-color: red;
	width: 28rem;
	text-align: center;
	margin-left: 1rem;
`;

export const ButtonDiv = styled.div`
	background-color: rgba(14, 107, 94, 0.5);
	color: white;
	width: 7rem;
	height: 3rem;
	line-height: 3rem;
	font-size: 14pt;
	text-align: center;
	// border-radius: 10rem;
	margin: 0 auto;
	margin-top: 1.6rem;
`;
