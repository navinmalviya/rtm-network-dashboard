'use client';

import { StyleSheetManager } from 'styled-components';
import React, { useState } from 'react';

export default function StyledComponentsRegistry({ children }) {
    const [stylisPlugins] = useState(() => []);
    return <StyleSheetManager stylisPlugins={stylisPlugins}>{children}</StyleSheetManager>;
}
