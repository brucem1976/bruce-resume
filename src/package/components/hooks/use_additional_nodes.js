import { useContext } from 'react';
import { get } from 'lodash';

import { StaticDataContext } from '../../utils/context/contexts';

export const useAdditionalNodes = (path = '', defaultValue = {}) => {
    const { additionalNodes } = useContext(StaticDataContext);
    return [get(additionalNodes, path, defaultValue)];
};
