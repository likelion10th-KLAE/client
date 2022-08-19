import React from "react";
import {
	UserSection,
	PlantSection,
	NameDiv,
	NavItem,
	LogoDiv,
	LeftSection,
	RightSection,
	PlantsInfo,
	Wrap,
	PlantName,
	RightInSection,
	DesItem,
	DesItem2,
	TitleDiv,
	SubTitleDiv,
	ImgDiv,
	Img2Div,
	Img3Div,
	SelectDiv,
	CircleDiv,
	CircleItem,
	CircleText,
	CircleSection,
	DiarySection,
	TextDiv,
	ButtonDiv,
} from "./styled";
import plant1 from "../../assets/식물1.jpg";
import sun from "../../assets/sun.png";
import water from "../../assets/water.png";

const Plant = () => {
	const sample = [
		{ id: 1, name: "알로카시아 밤비노", info: "~~" },
		{ id: 2, name: "식물 2", info: "~~" },
	];
	const sample2 = {
		id: 1,
		plant: "알로카시아 밤비노",
		name: "겸둥이",
	};
	return (
		<Wrap>
			<LeftSection>
				<UserSection>
					<LogoDiv>KLAE</LogoDiv>
					<NameDiv>엄소현 님</NameDiv>
					<NavItem>식물 등록하기 {">"}</NavItem>
					<NavItem>식물 추천받기 {">"}</NavItem>
				</UserSection>
				<PlantSection>
					<ul>
						{sample.map((p) => (
							<li key={p.id}>{p.name}</li>
						))}
					</ul>
				</PlantSection>
			</LeftSection>
			<RightSection>
				<RightInSection>
					<PlantsInfo>
						<div>{sample2.name} </div>
					</PlantsInfo>
					<PlantName>
						<img src={plant1} />
						<div>{sample2.plant}</div>
					</PlantName>
					<DesItem>
						<TitleDiv>Like</TitleDiv>
						<hr />
						<SelectDiv>
							<SubTitleDiv>햇빛</SubTitleDiv>
							<ImgDiv>
								<img src={sun} /> <img src={sun} /> <img src={sun} />{" "}
								<img src={sun} /> <img src={sun} />
							</ImgDiv>
						</SelectDiv>
						<br />
						<SelectDiv>
							<SubTitleDiv>물</SubTitleDiv>
							<Img2Div>
								<img src={water} />
								<img src={water} />
								<img src={water} />
								<img src={water} />
								<img src={water} />
							</Img2Div>
						</SelectDiv>
						<br />
						<SelectDiv>
							<SubTitleDiv>온도</SubTitleDiv>
							<Img3Div>
								22° ~ {/* <img src={range} /> */}
								25°
							</Img3Div>
						</SelectDiv>
					</DesItem>
					<DesItem>
						<TitleDiv>D-Day</TitleDiv>
						<hr />
						<CircleSection>
							<CircleDiv>
								<CircleItem>D-90</CircleItem>
								<CircleText>물</CircleText>
							</CircleDiv>
							<CircleDiv>
								<CircleItem>D-90</CircleItem>
								<CircleText>물</CircleText>
							</CircleDiv>
							<CircleDiv>
								<CircleItem>D-90</CircleItem>
								<CircleText>물</CircleText>
							</CircleDiv>
						</CircleSection>
					</DesItem>
					<DesItem2>
						<TitleDiv>식물일지</TitleDiv>
						<hr />
						<DiarySection>
							<TextDiv>
								알로카시아 밤비노의 상태를 기록하세요!
								<br />
								물주기 알림 및 다양한 정보를 제공해드립니다.
							</TextDiv>
						</DiarySection>
						<ButtonDiv>+ 식물일지</ButtonDiv>
					</DesItem2>
				</RightInSection>
			</RightSection>
		</Wrap>
	);
};

export default Plant;
