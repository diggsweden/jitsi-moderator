// SPDX-FileCopyrightText: 2023 Havs- och vattenmyndigheten
//
// SPDX-License-Identifier: Apache-2.0

import { css, styled } from "styled-components";
import Theme, { ColorType } from "../../utils/styles/Theme";

interface IInfoCard {
	$color: ColorType;
}

const InfoCard = styled.article<IInfoCard>`
	border-radius: ${Theme.borderRadiuses.m};
	box-sizing: border-box;
	padding: ${Theme.spacing.s};

	${({ $color }) => css`
		background-color: ${Theme.colors[$color].normal};
	`};
`;

export default InfoCard;
