// SPDX-FileCopyrightText: 2023 Havs- och vattenmyndigheten
//
// SPDX-License-Identifier: Apache-2.0

import styled from "styled-components";
import Theme from "../../utils/styles/Theme";

const ButtonGrid = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: ${Theme.spacing.xs};
`;

export default ButtonGrid;
