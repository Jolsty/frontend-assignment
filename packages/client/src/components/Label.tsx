import React from 'react';

import { LabelProps } from '../@types/CustomTypes';

const Label: React.FC<LabelProps> = ({ text }: LabelProps) => <span className="label">{text}</span>;

export default Label;
