export const divisionNodes = [
    {
        id: 'RTM_MICRO',
        type: 'multiPort',
        data: { nodeIp: '1.1.1.1', status: 'down', label: 'RTM_MICRO' },
        style: { width: '100px', height: '34px' },
        position: { x: -1488, y: 1288 },
        data: {
            nodeIp: '1.1.1.1',
            status: 'down',
            label: 'RTM_MICRO',

            // ✅ Racks inside the node
            racks: [
                {
                    label: 'Rack A',
                    size: 42, // 42U, full-size
                    devices: [
                        {
                            id: 'test1',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test1', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1520, y: 1090 },
                        },
                        {
                            id: 'test2',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test2', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1500, y: 1000 },
                        },
                    ],
                    edges: [
                        {
                            id: 'test1-test2',
                            source: 'test1',
                            target: 'test2',
                            type: 'custom',
                            sourceLabel: 'Gi0/1',
                            targetLabel: 'Gi0/2',
                            status: 'up',
                            sourceIP: '2.2.2.2',
                            targetIP: '3.3.3.3',
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'RTM_EXCH',
        type: 'mainNode',
        data: { nodeIp: '1.1.1.1', status: 'up', label: 'RTM_EXCH' },
        style: { width: '100px', height: '34px' },
        position: { x: -1520, y: 1090 },
        data: {
            nodeIp: '1.1.1.1',
            status: 'down',
            label: 'RTM_EXCH',

            // ✅ Racks inside the node
            racks: [
                {
                    label: 'Rack A',
                    size: 42, // 42U, full-size
                    devices: [
                        {
                            id: 'test1',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test1', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1520, y: 1090 },
                        },
                        {
                            id: 'test2',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test2', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1500, y: 1000 },
                        },
                    ],
                    edges: [
                        {
                            id: 'test1-test2',
                            source: 'test1',
                            target: 'test2',
                            type: 'custom',
                            sourceLabel: 'Gi0/1',
                            targetLabel: 'Gi0/2',
                            status: 'up',
                            sourceIP: '2.2.2.2',
                            targetIP: '3.3.3.3',
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'RTM_NOCC',
        type: 'mainNode',
        data: { nodeIp: '1.1.1.1', status: 'down', label: 'RTM_NOCC' },
        style: { width: '100px', height: '34px' },
        position: { x: -1330, y: 1008 },
        data: {
            nodeIp: '1.1.1.1',
            status: 'down',
            label: 'RTM_NOCC',

            // ✅ Racks inside the node
            racks: [
                {
                    label: 'Rack A',
                    size: 42, // 42U, full-size
                    devices: [
                        {
                            id: 'test1',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test1', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1520, y: 1090 },
                        },
                        {
                            id: 'test2',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test2', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1500, y: 1000 },
                        },
                    ],
                    edges: [
                        {
                            id: 'test1-test2',
                            source: 'test1',
                            target: 'test2',
                            type: 'custom',
                            sourceLabel: 'Gi0/1',
                            targetLabel: 'Gi0/2',
                            status: 'up',
                            sourceIP: '2.2.2.2',
                            targetIP: '3.3.3.3',
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'RTM_STATION',
        type: 'mainNode',
        data: { nodeIp: '1.1.1.1', status: 'down', label: 'RTM_STATION' },
        style: { width: '120px', height: '34px' },
        position: { x: -1284, y: 1360 },
        data: {
            nodeIp: '1.1.1.1',
            status: 'down',
            label: 'RTM_STATION',

            // ✅ Racks inside the node
            racks: [
                {
                    label: 'Rack A',
                    size: 42, // 42U, full-size
                    devices: [
                        {
                            id: 'test1',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test1', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1520, y: 1090 },
                        },
                        {
                            id: 'test2',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test2', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1500, y: 1000 },
                        },
                    ],
                    edges: [
                        {
                            id: 'test1-test2',
                            source: 'test1',
                            target: 'test2',
                            type: 'custom',
                            sourceLabel: 'Gi0/1',
                            targetLabel: 'Gi0/2',
                            status: 'up',
                            sourceIP: '2.2.2.2',
                            targetIP: '3.3.3.3',
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'RTM_A',
        type: 'mainNode',
        data: { nodeIp: '1.1.1.1', status: 'up', label: 'RTM_A' },
        style: { width: '70px', height: '34px' },
        position: { x: -1572, y: 1378 },
        data: {
            nodeIp: '1.1.1.1',
            status: 'down',
            label: 'RTM_A',

            // ✅ Racks inside the node
            racks: [
                {
                    label: 'Rack A',
                    size: 42, // 42U, full-size
                    devices: [
                        {
                            id: 'test1',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test1', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1520, y: 1090 },
                        },
                        {
                            id: 'test2',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test2', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1500, y: 1000 },
                        },
                    ],
                    edges: [
                        {
                            id: 'test1-test2',
                            source: 'test1',
                            target: 'test2',
                            type: 'custom',
                            sourceLabel: 'Gi0/1',
                            targetLabel: 'Gi0/2',
                            status: 'up',
                            sourceIP: '2.2.2.2',
                            targetIP: '3.3.3.3',
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'MRN',
        type: 'mainNode',
        data: { nodeIp: '1.1.1.1', status: 'up', label: 'MRN' },
        style: { width: '70px', height: '34px' },
        position: { x: -1494, y: 1452 },
        data: {
            nodeIp: '1.1.1.1',
            status: 'down',
            label: 'MRN',

            // ✅ Racks inside the node
            racks: [
                {
                    label: 'Rack A',
                    size: 42, // 42U, full-size
                    devices: [
                        {
                            id: 'test1',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test1', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1520, y: 1090 },
                        },
                        {
                            id: 'test2',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test2', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1500, y: 1000 },
                        },
                    ],
                    edges: [
                        {
                            id: 'test1-test2',
                            source: 'test1',
                            target: 'test2',
                            type: 'custom',
                            sourceLabel: 'Gi0/1',
                            targetLabel: 'Gi0/2',
                            status: 'up',
                            sourceIP: '2.2.2.2',
                            targetIP: '3.3.3.3',
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'BILD',
        type: 'mainNode',
        data: { nodeIp: '1.1.1.1', status: 'down', label: 'BILD' },
        style: { width: '70px', height: '34px' },
        position: { x: -1534, y: 1525 },
        data: {
            nodeIp: '1.1.1.1',
            status: 'down',
            label: 'BILD',

            // ✅ Racks inside the node
            racks: [
                {
                    label: 'Rack A',
                    size: 42, // 42U, full-size
                    devices: [
                        {
                            id: 'test1',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test1', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1520, y: 1090 },
                        },
                        {
                            id: 'test2',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test2', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1500, y: 1000 },
                        },
                    ],
                    edges: [
                        {
                            id: 'test1-test2',
                            source: 'test1',
                            target: 'test2',
                            type: 'custom',
                            sourceLabel: 'Gi0/1',
                            targetLabel: 'Gi0/2',
                            status: 'up',
                            sourceIP: '2.2.2.2',
                            targetIP: '3.3.3.3',
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'RTI',
        type: 'mainNode', // or 'internalNode', etc.
        position: { x: -1594, y: 1600 },
        style: { width: '70px', height: '34px' },
        data: {
            nodeIp: '1.1.1.1',
            status: 'down',
            label: 'RTI',

            // ✅ Racks inside the node
            racks: [
                {
                    label: 'Rack A',
                    size: 42, // 42U, full-size
                    devices: [
                        {
                            id: 'test1',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test1', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1520, y: 1090 },
                        },
                        {
                            id: 'test2',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test2', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1500, y: 1000 },
                        },
                    ],
                    edges: [
                        {
                            id: 'test1-test2',
                            source: 'test1',
                            target: 'test2',
                            type: 'custom',
                            sourceLabel: 'Gi0/1',
                            targetLabel: 'Gi0/2',
                            status: 'up',
                            sourceIP: '2.2.2.2',
                            targetIP: '3.3.3.3',
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'BOG',
        type: 'mainNode',
        data: { nodeIp: '1.1.1.1', status: 'up', label: 'BOG' },
        style: { width: '70px', height: '34px' },
        position: { x: -1655, y: 1672 },
        data: {
            nodeIp: '1.1.1.1',
            status: 'down',
            label: 'BOG',

            // ✅ Racks inside the node
            racks: [
                {
                    label: 'Rack A',
                    size: 42, // 42U, full-size
                    devices: [
                        {
                            id: 'test1',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test1', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1520, y: 1090 },
                        },
                        {
                            id: 'test2',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test2', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1500, y: 1000 },
                        },
                    ],
                    edges: [
                        {
                            id: 'test1-test2',
                            source: 'test1',
                            target: 'test2',
                            type: 'custom',
                            sourceLabel: 'Gi0/1',
                            targetLabel: 'Gi0/2',
                            status: 'up',
                            sourceIP: '2.2.2.2',
                            targetIP: '3.3.3.3',
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'BMI',
        type: 'mainNode',
        data: { nodeIp: '1.1.1.1', status: 'down', label: 'BMI' },
        style: { width: '70px', height: '34px' },
        position: { x: -1705, y: 1741 },
        data: {
            nodeIp: '1.1.1.1',
            status: 'down',
            label: 'BMI',

            // ✅ Racks inside the node
            racks: [
                {
                    label: 'Rack A',
                    size: 42, // 42U, full-size
                    devices: [
                        {
                            id: 'test1',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test1', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1520, y: 1090 },
                        },
                        {
                            id: 'test2',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test2', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1500, y: 1000 },
                        },
                    ],
                    edges: [
                        {
                            id: 'test1-test2',
                            source: 'test1',
                            target: 'test2',
                            type: 'custom',
                            sourceLabel: 'Gi0/1',
                            targetLabel: 'Gi0/2',
                            status: 'up',
                            sourceIP: '2.2.2.2',
                            targetIP: '3.3.3.3',
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'AGR',
        type: 'mainNode',
        data: { nodeIp: '1.1.1.1', status: 'down', label: 'AGR' },
        style: { width: '70px', height: '34px' },
        position: { x: -1767, y: 1813 },
        data: {
            nodeIp: '1.1.1.1',
            status: 'down',
            label: 'AGR',

            // ✅ Racks inside the node
            racks: [
                {
                    label: 'Rack A',
                    size: 42, // 42U, full-size
                    devices: [
                        {
                            id: 'test1',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test1', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1520, y: 1090 },
                        },
                        {
                            id: 'test2',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test2', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1500, y: 1000 },
                        },
                    ],
                    edges: [
                        {
                            id: 'test1-test2',
                            source: 'test1',
                            target: 'test2',
                            type: 'custom',
                            sourceLabel: 'Gi0/1',
                            targetLabel: 'Gi0/2',
                            status: 'up',
                            sourceIP: '2.2.2.2',
                            targetIP: '3.3.3.3',
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'PCN',
        type: 'mainNode',
        data: { nodeIp: '1.1.1.1', status: 'down', label: 'PCN' },
        style: { width: '70px', height: '34px' },
        position: { x: -1832, y: 1879 },
        data: {
            nodeIp: '1.1.1.1',
            status: 'down',
            label: 'PCN',

            // ✅ Racks inside the node
            racks: [
                {
                    label: 'Rack A',
                    size: 42, // 42U, full-size
                    devices: [
                        {
                            id: 'test1',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test1', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1520, y: 1090 },
                        },
                        {
                            id: 'test2',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test2', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1500, y: 1000 },
                        },
                    ],
                    edges: [
                        {
                            id: 'test1-test2',
                            source: 'test1',
                            target: 'test2',
                            type: 'custom',
                            sourceLabel: 'Gi0/1',
                            targetLabel: 'Gi0/2',
                            status: 'up',
                            sourceIP: '2.2.2.2',
                            targetIP: '3.3.3.3',
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'BJG',
        type: 'mainNode',
        data: { nodeIp: '1.1.1.1', status: 'down', label: 'BJG' },
        style: { width: '70px', height: '34px' },
        position: { x: -1912, y: 1948 },
        data: {
            nodeIp: '1.1.1.1',
            status: 'down',
            label: 'BJG',

            // ✅ Racks inside the node
            racks: [
                {
                    label: 'Rack A',
                    size: 42, // 42U, full-size
                    devices: [
                        {
                            id: 'test1',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test1', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1520, y: 1090 },
                        },
                        {
                            id: 'test2',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test2', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1500, y: 1000 },
                        },
                    ],
                    edges: [
                        {
                            id: 'test1-test2',
                            source: 'test1',
                            target: 'test2',
                            type: 'custom',
                            sourceLabel: 'Gi0/1',
                            targetLabel: 'Gi0/2',
                            status: 'up',
                            sourceIP: '2.2.2.2',
                            targetIP: '3.3.3.3',
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'THDR',
        type: 'mainNode',
        data: { nodeIp: '1.1.1.1', status: 'down', label: 'THDR' },
        style: { width: '70px', height: '34px' },
        position: { x: -2018, y: 2016 },
        data: {
            nodeIp: '1.1.1.1',
            status: 'down',
            label: 'THDR',

            // ✅ Racks inside the node
            racks: [
                {
                    label: 'Rack A',
                    size: 42, // 42U, full-size
                    devices: [
                        {
                            id: 'test1',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test1', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1520, y: 1090 },
                        },
                        {
                            id: 'test2',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test2', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1500, y: 1000 },
                        },
                    ],
                    edges: [
                        {
                            id: 'test1-test2',
                            source: 'test1',
                            target: 'test2',
                            type: 'custom',
                            sourceLabel: 'Gi0/1',
                            targetLabel: 'Gi0/2',
                            status: 'up',
                            sourceIP: '2.2.2.2',
                            targetIP: '3.3.3.3',
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'MGN',
        type: 'mainNode',
        data: { nodeIp: '1.1.1.1', status: 'down', label: 'MGN' },
        style: { width: '70px', height: '34px' },
        position: { x: -2126, y: 2094 },
        data: {
            nodeIp: '1.1.1.1',
            status: 'down',
            label: 'MGN',

            // ✅ Racks inside the node
            racks: [
                {
                    label: 'Rack A',
                    size: 42, // 42U, full-size
                    devices: [
                        {
                            id: 'test1',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test1', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1520, y: 1090 },
                        },
                        {
                            id: 'test2',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test2', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1500, y: 1000 },
                        },
                    ],
                    edges: [
                        {
                            id: 'test1-test2',
                            source: 'test1',
                            target: 'test2',
                            type: 'custom',
                            sourceLabel: 'Gi0/1',
                            targetLabel: 'Gi0/2',
                            status: 'up',
                            sourceIP: '2.2.2.2',
                            targetIP: '3.3.3.3',
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'ANS',
        type: 'mainNode',
        data: { nodeIp: '1.1.1.1', status: 'down', label: 'ANS' },
        style: { width: '70px', height: '34px' },
        position: { x: -2194, y: 2169 },
        data: {
            nodeIp: '1.1.1.1',
            status: 'down',
            label: 'RTI',

            // ✅ Racks inside the node
            racks: [
                {
                    label: 'Rack A',
                    size: 42, // 42U, full-size
                    devices: [
                        {
                            id: 'test1',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test1', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1520, y: 1090 },
                        },
                        {
                            id: 'test2',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test2', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1500, y: 1000 },
                        },
                    ],
                    edges: [
                        {
                            id: 'test1-test2',
                            source: 'test1',
                            target: 'test2',
                            type: 'custom',
                            sourceLabel: 'Gi0/1',
                            targetLabel: 'Gi0/2',
                            status: 'up',
                            sourceIP: '2.2.2.2',
                            targetIP: '3.3.3.3',
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'BIO',
        type: 'mainNode',
        data: { nodeIp: '1.1.1.1', status: 'down', label: 'BIO' },
        style: { width: '70px', height: '34px' },
        position: { x: -2298, y: 2245 },
        data: {
            nodeIp: '1.1.1.1',
            status: 'down',
            label: 'RTI',

            // ✅ Racks inside the node
            racks: [
                {
                    label: 'Rack A',
                    size: 42, // 42U, full-size
                    devices: [
                        {
                            id: 'test1',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test1', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1520, y: 1090 },
                        },
                        {
                            id: 'test2',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test2', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1500, y: 1000 },
                        },
                    ],
                    edges: [
                        {
                            id: 'test1-test2',
                            source: 'test1',
                            target: 'test2',
                            type: 'custom',
                            sourceLabel: 'Gi0/1',
                            targetLabel: 'Gi0/2',
                            status: 'up',
                            sourceIP: '2.2.2.2',
                            targetIP: '3.3.3.3',
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'DHD',
        type: 'mainNode',
        data: { nodeIp: '1.1.1.1', status: 'down', label: 'DHD' },
        style: { width: '70px', height: '34px' },
        position: { x: -2363, y: 2316 },
        data: {
            nodeIp: '1.1.1.1',
            status: 'down',
            label: 'RTI',

            // ✅ Racks inside the node
            racks: [
                {
                    label: 'Rack A',
                    size: 42, // 42U, full-size
                    devices: [
                        {
                            id: 'test1',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test1', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1520, y: 1090 },
                        },
                        {
                            id: 'test2',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test2', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1500, y: 1000 },
                        },
                    ],
                    edges: [
                        {
                            id: 'test1-test2',
                            source: 'test1',
                            target: 'test2',
                            type: 'custom',
                            sourceLabel: 'Gi0/1',
                            targetLabel: 'Gi0/2',
                            status: 'up',
                            sourceIP: '2.2.2.2',
                            targetIP: '3.3.3.3',
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'RET',
        type: 'mainNode',
        data: { nodeIp: '1.1.1.1', status: 'down', label: 'RET' },
        style: { width: '70px', height: '34px' },
        position: { x: -2452, y: 2394 },
        data: {
            nodeIp: '1.1.1.1',
            status: 'down',
            label: 'RTI',

            // ✅ Racks inside the node
            racks: [
                {
                    label: 'Rack A',
                    size: 42, // 42U, full-size
                    devices: [
                        {
                            id: 'test1',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test1', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1520, y: 1090 },
                        },
                        {
                            id: 'test2',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test2', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1500, y: 1000 },
                        },
                    ],
                    edges: [
                        {
                            id: 'test1-test2',
                            source: 'test1',
                            target: 'test2',
                            type: 'custom',
                            sourceLabel: 'Gi0/1',
                            targetLabel: 'Gi0/2',
                            status: 'up',
                            sourceIP: '2.2.2.2',
                            targetIP: '3.3.3.3',
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'JKT',
        type: 'mainNode',
        data: { nodeIp: '1.1.1.1', status: 'down', label: 'JKT' },
        style: { width: '70px', height: '34px' },
        position: { x: -2512, y: 2461 },
        data: {
            nodeIp: '1.1.1.1',
            status: 'down',
            label: 'RTI',

            // ✅ Racks inside the node
            racks: [
                {
                    label: 'Rack A',
                    size: 42, // 42U, full-size
                    devices: [
                        {
                            id: 'test1',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test1', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1520, y: 1090 },
                        },
                        {
                            id: 'test2',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test2', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1500, y: 1000 },
                        },
                    ],
                    edges: [
                        {
                            id: 'test1-test2',
                            source: 'test1',
                            target: 'test2',
                            type: 'custom',
                            sourceLabel: 'Gi0/1',
                            targetLabel: 'Gi0/2',
                            status: 'up',
                            sourceIP: '2.2.2.2',
                            targetIP: '3.3.3.3',
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'USRA',
        type: 'mainNode',
        data: { nodeIp: '1.1.1.1', status: 'down', label: 'USRA' },
        style: { width: '70px', height: '34px' },
        position: { x: -2588, y: 2537 },
        data: {
            nodeIp: '1.1.1.1',
            status: 'down',
            label: 'RTI',

            // ✅ Racks inside the node
            racks: [
                {
                    label: 'Rack A',
                    size: 42, // 42U, full-size
                    devices: [
                        {
                            id: 'test1',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test1', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1520, y: 1090 },
                        },
                        {
                            id: 'test2',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test2', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1500, y: 1000 },
                        },
                    ],
                    edges: [
                        {
                            id: 'test1-test2',
                            source: 'test1',
                            target: 'test2',
                            type: 'custom',
                            sourceLabel: 'Gi0/1',
                            targetLabel: 'Gi0/2',
                            status: 'up',
                            sourceIP: '2.2.2.2',
                            targetIP: '3.3.3.3',
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'MAM',
        type: 'mainNode',
        data: { nodeIp: '1.1.1.1', status: 'down', label: 'MAM' },
        style: { width: '70px', height: '34px' },
        position: { x: -2702, y: 2624 },
        data: {
            nodeIp: '1.1.1.1',
            status: 'down',
            label: 'RTI',

            // ✅ Racks inside the node
            racks: [
                {
                    label: 'Rack A',
                    size: 42, // 42U, full-size
                    devices: [
                        {
                            id: 'test1',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test1', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1520, y: 1090 },
                        },
                        {
                            id: 'test2',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test2', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1500, y: 1000 },
                        },
                    ],
                    edges: [
                        {
                            id: 'test1-test2',
                            source: 'test1',
                            target: 'test2',
                            type: 'custom',
                            sourceLabel: 'Gi0/1',
                            targetLabel: 'Gi0/2',
                            status: 'up',
                            sourceIP: '2.2.2.2',
                            targetIP: '3.3.3.3',
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'LMK',
        type: 'mainNode',
        data: { nodeIp: '1.1.1.1', status: 'down', label: 'LMK' },
        style: { width: '70px', height: '34px' },
        position: { x: -2762, y: 2702 },
        data: {
            nodeIp: '1.1.1.1',
            status: 'down',
            label: 'RTI',

            // ✅ Racks inside the node
            racks: [
                {
                    label: 'Rack A',
                    size: 42, // 42U, full-size
                    devices: [
                        {
                            id: 'test1',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test1', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1520, y: 1090 },
                        },
                        {
                            id: 'test2',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test2', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1500, y: 1000 },
                        },
                    ],
                    edges: [
                        {
                            id: 'test1-test2',
                            source: 'test1',
                            target: 'test2',
                            type: 'custom',
                            sourceLabel: 'Gi0/1',
                            targetLabel: 'Gi0/2',
                            status: 'up',
                            sourceIP: '2.2.2.2',
                            targetIP: '3.3.3.3',
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'PPD',
        type: 'mainNode',
        data: { nodeIp: '1.1.1.1', status: 'down', label: 'PPD' },
        style: { width: '70px', height: '34px' },
        position: { x: -2826, y: 2781 },
        data: {
            nodeIp: '1.1.1.1',
            status: 'down',
            label: 'RTI',

            // ✅ Racks inside the node
            racks: [
                {
                    label: 'Rack A',
                    size: 42, // 42U, full-size
                    devices: [
                        {
                            id: 'test1',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test1', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1520, y: 1090 },
                        },
                        {
                            id: 'test2',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test2', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1500, y: 1000 },
                        },
                    ],
                    edges: [
                        {
                            id: 'test1-test2',
                            source: 'test1',
                            target: 'test2',
                            type: 'custom',
                            sourceLabel: 'Gi0/1',
                            targetLabel: 'Gi0/2',
                            status: 'up',
                            sourceIP: '2.2.2.2',
                            targetIP: '3.3.3.3',
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'SAT',
        type: 'mainNode',
        data: { nodeIp: '1.1.1.1', status: 'down', label: 'SAT' },
        style: { width: '70px', height: '34px' },
        position: { x: -2906, y: 2863 },
        data: {
            nodeIp: '1.1.1.1',
            status: 'down',
            label: 'RTI',

            // ✅ Racks inside the node
            racks: [
                {
                    label: 'Rack A',
                    size: 42, // 42U, full-size
                    devices: [
                        {
                            id: 'test1',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test1', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1520, y: 1090 },
                        },
                        {
                            id: 'test2',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test2', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1500, y: 1000 },
                        },
                    ],
                    edges: [
                        {
                            id: 'test1-test2',
                            source: 'test1',
                            target: 'test2',
                            type: 'custom',
                            sourceLabel: 'Gi0/1',
                            targetLabel: 'Gi0/2',
                            status: 'up',
                            sourceIP: '2.2.2.2',
                            targetIP: '3.3.3.3',
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'CCL',
        type: 'mainNode',
        data: { nodeIp: '1.1.1.1', status: 'down', label: 'CCL' },
        style: { width: '70px', height: '34px' },
        position: { x: -2996, y: 2947 },
        data: {
            nodeIp: '1.1.1.1',
            status: 'down',
            label: 'RTI',

            // ✅ Racks inside the node
            racks: [
                {
                    label: 'Rack A',
                    size: 42, // 42U, full-size
                    devices: [
                        {
                            id: 'test1',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test1', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1520, y: 1090 },
                        },
                        {
                            id: 'test2',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test2', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1500, y: 1000 },
                        },
                    ],
                    edges: [
                        {
                            id: 'test1-test2',
                            source: 'test1',
                            target: 'test2',
                            type: 'custom',
                            sourceLabel: 'Gi0/1',
                            targetLabel: 'Gi0/2',
                            status: 'up',
                            sourceIP: '2.2.2.2',
                            targetIP: '3.3.3.3',
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'KIZ',
        type: 'mainNode',
        data: { nodeIp: '1.1.1.1', status: 'down', label: 'KIZ' },
        style: { width: '70px', height: '34px' },
        position: { x: -3120, y: 3032 },
        data: {
            nodeIp: '1.1.1.1',
            status: 'down',
            label: 'RTI',

            // ✅ Racks inside the node
            racks: [
                {
                    label: 'Rack A',
                    size: 42, // 42U, full-size
                    devices: [
                        {
                            id: 'test1',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test1', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1520, y: 1090 },
                        },
                        {
                            id: 'test2',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test2', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1500, y: 1000 },
                        },
                    ],
                    edges: [
                        {
                            id: 'test1-test2',
                            source: 'test1',
                            target: 'test2',
                            type: 'custom',
                            sourceLabel: 'Gi0/1',
                            targetLabel: 'Gi0/2',
                            status: 'up',
                            sourceIP: '2.2.2.2',
                            targetIP: '3.3.3.3',
                        },
                    ],
                },
            ],
        },
    },
    // COR SECTION
    {
        id: 'DHWS',
        type: 'mainNode',
        data: { nodeIp: '1.1.1.1', status: 'down', label: 'DHWS' },
        style: { width: '70px', height: '34px' },
        position: { x: -1678, y: 1204 },
        data: {
            nodeIp: '1.1.1.1',
            status: 'down',
            label: 'RTI',

            // ✅ Racks inside the node
            racks: [
                {
                    label: 'Rack A',
                    size: 42, // 42U, full-size
                    devices: [
                        {
                            id: 'test1',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test1', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1520, y: 1090 },
                        },
                        {
                            id: 'test2',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test2', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1500, y: 1000 },
                        },
                    ],
                    edges: [
                        {
                            id: 'test1-test2',
                            source: 'test1',
                            target: 'test2',
                            type: 'custom',
                            sourceLabel: 'Gi0/1',
                            targetLabel: 'Gi0/2',
                            status: 'up',
                            sourceIP: '2.2.2.2',
                            targetIP: '3.3.3.3',
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'NLI',
        type: 'mainNode',
        data: { nodeIp: '1.1.1.1', status: 'down', label: 'NLI' },
        style: { width: '70px', height: '34px' },
        position: { x: -1776, y: 1136 },
        data: {
            nodeIp: '1.1.1.1',
            status: 'down',
            label: 'RTI',

            // ✅ Racks inside the node
            racks: [
                {
                    label: 'Rack A',
                    size: 42, // 42U, full-size
                    devices: [
                        {
                            id: 'test1',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test1', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1520, y: 1090 },
                        },
                        {
                            id: 'test2',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test2', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1500, y: 1000 },
                        },
                    ],
                    edges: [
                        {
                            id: 'test1-test2',
                            source: 'test1',
                            target: 'test2',
                            type: 'custom',
                            sourceLabel: 'Gi0/1',
                            targetLabel: 'Gi0/2',
                            status: 'up',
                            sourceIP: '2.2.2.2',
                            targetIP: '3.3.3.3',
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'BRLA',
        type: 'mainNode',
        data: { nodeIp: '1.1.1.1', status: 'down', label: 'BRLA' },
        style: { width: '70px', height: '34px' },
        position: { x: -1900, y: 1064 },
        data: {
            nodeIp: '1.1.1.1',
            status: 'down',
            label: 'RTI',

            // ✅ Racks inside the node
            racks: [
                {
                    label: 'Rack A',
                    size: 42, // 42U, full-size
                    devices: [
                        {
                            id: 'test1',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test1', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1520, y: 1090 },
                        },
                        {
                            id: 'test2',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test2', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1500, y: 1000 },
                        },
                    ],
                    edges: [
                        {
                            id: 'test1-test2',
                            source: 'test1',
                            target: 'test2',
                            type: 'custom',
                            sourceLabel: 'Gi0/1',
                            targetLabel: 'Gi0/2',
                            status: 'up',
                            sourceIP: '2.2.2.2',
                            targetIP: '3.3.3.3',
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'JAO',
        type: 'mainNode',
        data: { nodeIp: '1.1.1.1', status: 'down', label: 'JAO' },
        style: { width: '70px', height: '34px' },
        position: { x: -1980, y: 990 },
        data: {
            nodeIp: '1.1.1.1',
            status: 'down',
            label: 'RTI',

            // ✅ Racks inside the node
            racks: [
                {
                    label: 'Rack A',
                    size: 42, // 42U, full-size
                    devices: [
                        {
                            id: 'test1',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test1', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1520, y: 1090 },
                        },
                        {
                            id: 'test2',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test2', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1500, y: 1000 },
                        },
                    ],
                    edges: [
                        {
                            id: 'test1-test2',
                            source: 'test1',
                            target: 'test2',
                            type: 'custom',
                            sourceLabel: 'Gi0/1',
                            targetLabel: 'Gi0/2',
                            status: 'up',
                            sourceIP: '2.2.2.2',
                            targetIP: '3.3.3.3',
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'DOD',
        type: 'mainNode',
        data: { nodeIp: '1.1.1.1', status: 'down', label: 'DOD' },
        style: { width: '70px', height: '34px' },
        position: { x: -2040, y: 916 },
        data: {
            nodeIp: '1.1.1.1',
            status: 'down',
            label: 'RTI',

            // ✅ Racks inside the node
            racks: [
                {
                    label: 'Rack A',
                    size: 42, // 42U, full-size
                    devices: [
                        {
                            id: 'test1',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test1', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1520, y: 1090 },
                        },
                        {
                            id: 'test2',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test2', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1500, y: 1000 },
                        },
                    ],
                    edges: [
                        {
                            id: 'test1-test2',
                            source: 'test1',
                            target: 'test2',
                            type: 'custom',
                            sourceLabel: 'Gi0/1',
                            targetLabel: 'Gi0/2',
                            status: 'up',
                            sourceIP: '2.2.2.2',
                            targetIP: '3.3.3.3',
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'KCNR',
        type: 'mainNode',
        data: { nodeIp: '1.1.1.1', status: 'down', label: 'KCNR' },
        style: { width: '70px', height: '34px' },
        position: { x: -2104, y: 834 },
        data: {
            nodeIp: '1.1.1.1',
            status: 'down',
            label: 'RTI',

            // ✅ Racks inside the node
            racks: [
                {
                    label: 'Rack A',
                    size: 42, // 42U, full-size
                    devices: [
                        {
                            id: 'test1',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test1', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1520, y: 1090 },
                        },
                        {
                            id: 'test2',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test2', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1500, y: 1000 },
                        },
                    ],
                    edges: [
                        {
                            id: 'test1-test2',
                            source: 'test1',
                            target: 'test2',
                            type: 'custom',
                            sourceLabel: 'Gi0/1',
                            targetLabel: 'Gi0/2',
                            status: 'up',
                            sourceIP: '2.2.2.2',
                            targetIP: '3.3.3.3',
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'DLD',
        type: 'mainNode',
        data: { nodeIp: '1.1.1.1', status: 'down', label: 'DLD' },
        style: { width: '70px', height: '34px' },
        position: { x: -2167, y: 748 },
        data: {
            nodeIp: '1.1.1.1',
            status: 'down',
            label: 'RTI',

            // ✅ Racks inside the node
            racks: [
                {
                    label: 'Rack A',
                    size: 42, // 42U, full-size
                    devices: [
                        {
                            id: 'test1',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test1', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1520, y: 1090 },
                        },
                        {
                            id: 'test2',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test2', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1500, y: 1000 },
                        },
                    ],
                    edges: [
                        {
                            id: 'test1-test2',
                            source: 'test1',
                            target: 'test2',
                            type: 'custom',
                            sourceLabel: 'Gi0/1',
                            targetLabel: 'Gi0/2',
                            status: 'up',
                            sourceIP: '2.2.2.2',
                            targetIP: '3.3.3.3',
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'MDS',
        type: 'mainNode',
        data: { nodeIp: '1.1.1.1', status: 'down', label: 'MDS' },
        style: { width: '70px', height: '34px' },
        position: { x: -2258, y: 674 },
        data: {
            nodeIp: '1.1.1.1',
            status: 'down',
            label: 'RTI',

            // ✅ Racks inside the node
            racks: [
                {
                    label: 'Rack A',
                    size: 42, // 42U, full-size
                    devices: [
                        {
                            id: 'test1',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test1', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1520, y: 1090 },
                        },
                        {
                            id: 'test2',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test2', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1500, y: 1000 },
                        },
                    ],
                    edges: [
                        {
                            id: 'test1-test2',
                            source: 'test1',
                            target: 'test2',
                            type: 'custom',
                            sourceLabel: 'Gi0/1',
                            targetLabel: 'Gi0/2',
                            status: 'up',
                            sourceIP: '2.2.2.2',
                            targetIP: '3.3.3.3',
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'PIP',
        type: 'mainNode',
        data: { nodeIp: '1.1.1.1', status: 'down', label: 'PIP' },
        style: { width: '70px', height: '34px' },
        position: { x: -2340, y: 598 },
        data: {
            nodeIp: '1.1.1.1',
            status: 'down',
            label: 'RTI',

            // ✅ Racks inside the node
            racks: [
                {
                    label: 'Rack A',
                    size: 42, // 42U, full-size
                    devices: [
                        {
                            id: 'test1',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test1', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1520, y: 1090 },
                        },
                        {
                            id: 'test2',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test2', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1500, y: 1000 },
                        },
                    ],
                    edges: [
                        {
                            id: 'test1-test2',
                            source: 'test1',
                            target: 'test2',
                            type: 'custom',
                            sourceLabel: 'Gi0/1',
                            targetLabel: 'Gi0/2',
                            status: 'up',
                            sourceIP: '2.2.2.2',
                            targetIP: '3.3.3.3',
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'MLG',
        type: 'mainNode',
        data: { nodeIp: '1.1.1.1', status: 'down', label: 'MLG' },
        style: { width: '70px', height: '34px' },
        position: { x: -2412, y: 522 },
        data: {
            nodeIp: '1.1.1.1',
            status: 'down',
            label: 'RTI',

            // ✅ Racks inside the node
            racks: [
                {
                    label: 'Rack A',
                    size: 42, // 42U, full-size
                    devices: [
                        {
                            id: 'test1',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test1', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1520, y: 1090 },
                        },
                        {
                            id: 'test2',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test2', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1500, y: 1000 },
                        },
                    ],
                    edges: [
                        {
                            id: 'test1-test2',
                            source: 'test1',
                            target: 'test2',
                            type: 'custom',
                            sourceLabel: 'Gi0/1',
                            targetLabel: 'Gi0/2',
                            status: 'up',
                            sourceIP: '2.2.2.2',
                            targetIP: '3.3.3.3',
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'HKL',
        type: 'mainNode',
        data: { nodeIp: '1.1.1.1', status: 'down', label: 'HKL' },
        style: { width: '70px', height: '34px' },
        position: { x: -2492, y: 448 },
        data: {
            nodeIp: '1.1.1.1',
            status: 'down',
            label: 'RTI',

            // ✅ Racks inside the node
            racks: [
                {
                    label: 'Rack A',
                    size: 42, // 42U, full-size
                    devices: [
                        {
                            id: 'test1',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test1', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1520, y: 1090 },
                        },
                        {
                            id: 'test2',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test2', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1500, y: 1000 },
                        },
                    ],
                    edges: [
                        {
                            id: 'test1-test2',
                            source: 'test1',
                            target: 'test2',
                            type: 'custom',
                            sourceLabel: 'Gi0/1',
                            targetLabel: 'Gi0/2',
                            status: 'up',
                            sourceIP: '2.2.2.2',
                            targetIP: '3.3.3.3',
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'NMH',
        type: 'mainNode',
        data: { nodeIp: '1.1.1.1', status: 'down', label: 'NMH' },
        style: { width: '70px', height: '34px' },
        position: { x: -2550, y: 376 },
        data: {
            nodeIp: '1.1.1.1',
            status: 'down',
            label: 'RTI',

            // ✅ Racks inside the node
            racks: [
                {
                    label: 'Rack A',
                    size: 42, // 42U, full-size
                    devices: [
                        {
                            id: 'test1',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test1', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1520, y: 1090 },
                        },
                        {
                            id: 'test2',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test2', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1500, y: 1000 },
                        },
                    ],
                    edges: [
                        {
                            id: 'test1-test2',
                            source: 'test1',
                            target: 'test2',
                            type: 'custom',
                            sourceLabel: 'Gi0/1',
                            targetLabel: 'Gi0/2',
                            status: 'up',
                            sourceIP: '2.2.2.2',
                            targetIP: '3.3.3.3',
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'BIWK',
        type: 'mainNode',
        data: { nodeIp: '1.1.1.1', status: 'down', label: 'BIWK' },
        style: { width: '70px', height: '34px' },
        position: { x: -2610, y: 306 },
        data: {
            nodeIp: '1.1.1.1',
            status: 'down',
            label: 'RTI',

            // ✅ Racks inside the node
            racks: [
                {
                    label: 'Rack A',
                    size: 42, // 42U, full-size
                    devices: [
                        {
                            id: 'test1',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test1', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1520, y: 1090 },
                        },
                        {
                            id: 'test2',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test2', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1500, y: 1000 },
                        },
                    ],
                    edges: [
                        {
                            id: 'test1-test2',
                            source: 'test1',
                            target: 'test2',
                            type: 'custom',
                            sourceLabel: 'Gi0/1',
                            targetLabel: 'Gi0/2',
                            status: 'up',
                            sourceIP: '2.2.2.2',
                            targetIP: '3.3.3.3',
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'JWO',
        type: 'mainNode',
        data: { nodeIp: '1.1.1.1', status: 'down', label: 'JWO' },
        style: { width: '70px', height: '34px' },
        position: { x: -2652, y: 236 },
        data: {
            nodeIp: '1.1.1.1',
            status: 'down',
            label: 'RTI',

            // ✅ Racks inside the node
            racks: [
                {
                    label: 'Rack A',
                    size: 42, // 42U, full-size
                    devices: [
                        {
                            id: 'test1',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test1', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1520, y: 1090 },
                        },
                        {
                            id: 'test2',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test2', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1500, y: 1000 },
                        },
                    ],
                    edges: [
                        {
                            id: 'test1-test2',
                            source: 'test1',
                            target: 'test2',
                            type: 'custom',
                            sourceLabel: 'Gi0/1',
                            targetLabel: 'Gi0/2',
                            status: 'up',
                            sourceIP: '2.2.2.2',
                            targetIP: '3.3.3.3',
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'NBH',
        type: 'mainNode',
        data: { nodeIp: '1.1.1.1', status: 'down', label: 'NBH' },
        style: { width: '70px', height: '34px' },
        position: { x: -2696, y: 162 },
        data: {
            nodeIp: '1.1.1.1',
            status: 'down',
            label: 'RTI',

            // ✅ Racks inside the node
            racks: [
                {
                    label: 'Rack A',
                    size: 42, // 42U, full-size
                    devices: [
                        {
                            id: 'test1',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test1', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1520, y: 1090 },
                        },
                        {
                            id: 'test2',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test2', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1500, y: 1000 },
                        },
                    ],
                    edges: [
                        {
                            id: 'test1-test2',
                            source: 'test1',
                            target: 'test2',
                            type: 'custom',
                            sourceLabel: 'Gi0/1',
                            targetLabel: 'Gi0/2',
                            status: 'up',
                            sourceIP: '2.2.2.2',
                            targetIP: '3.3.3.3',
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'GRF',
        type: 'mainNode',
        data: { nodeIp: '1.1.1.1', status: 'down', label: 'GRF' },
        style: { width: '70px', height: '34px' },
        position: { x: -2772, y: 90 },
        data: {
            nodeIp: '1.1.1.1',
            status: 'down',
            label: 'RTI',

            // ✅ Racks inside the node
            racks: [
                {
                    label: 'Rack A',
                    size: 42, // 42U, full-size
                    devices: [
                        {
                            id: 'test1',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test1', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1520, y: 1090 },
                        },
                        {
                            id: 'test2',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test2', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1500, y: 1000 },
                        },
                    ],
                    edges: [
                        {
                            id: 'test1-test2',
                            source: 'test1',
                            target: 'test2',
                            type: 'custom',
                            sourceLabel: 'Gi0/1',
                            targetLabel: 'Gi0/2',
                            status: 'up',
                            sourceIP: '2.2.2.2',
                            targetIP: '3.3.3.3',
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'SMP',
        type: 'mainNode',
        data: { nodeIp: '1.1.1.1', status: 'down', label: 'SMP' },
        style: { width: '70px', height: '34px' },
        position: { x: -2832, y: 14 },
        data: {
            nodeIp: '1.1.1.1',
            status: 'down',
            label: 'RTI',

            // ✅ Racks inside the node
            racks: [
                {
                    label: 'Rack A',
                    size: 42, // 42U, full-size
                    devices: [
                        {
                            id: 'test1',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test1', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1520, y: 1090 },
                        },
                        {
                            id: 'test2',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test2', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1500, y: 1000 },
                        },
                    ],
                    edges: [
                        {
                            id: 'test1-test2',
                            source: 'test1',
                            target: 'test2',
                            type: 'custom',
                            sourceLabel: 'Gi0/1',
                            targetLabel: 'Gi0/2',
                            status: 'up',
                            sourceIP: '2.2.2.2',
                            targetIP: '3.3.3.3',
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'ORDI',
        type: 'mainNode',
        data: { nodeIp: '1.1.1.1', status: 'down', label: 'ORDI' },
        style: { width: '70px', height: '34px' },
        position: { x: -2896, y: -56 },
        data: {
            nodeIp: '1.1.1.1',
            status: 'down',
            label: 'RTI',

            // ✅ Racks inside the node
            racks: [
                {
                    label: 'Rack A',
                    size: 42, // 42U, full-size
                    devices: [
                        {
                            id: 'test1',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test1', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1520, y: 1090 },
                        },
                        {
                            id: 'test2',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test2', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1500, y: 1000 },
                        },
                    ],
                    edges: [
                        {
                            id: 'test1-test2',
                            source: 'test1',
                            target: 'test2',
                            type: 'custom',
                            sourceLabel: 'Gi0/1',
                            targetLabel: 'Gi0/2',
                            status: 'up',
                            sourceIP: '2.2.2.2',
                            targetIP: '3.3.3.3',
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'COR',
        type: 'mainNode',
        data: { nodeIp: '1.1.1.1', status: 'down', label: 'COR' },
        style: { width: '70px', height: '34px' },
        position: { x: -2940, y: -128 },
        data: {
            nodeIp: '1.1.1.1',
            status: 'down',
            label: 'RTI',

            // ✅ Racks inside the node
            racks: [
                {
                    label: 'Rack A',
                    size: 42, // 42U, full-size
                    devices: [
                        {
                            id: 'test1',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test1', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1520, y: 1090 },
                        },
                        {
                            id: 'test2',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test2', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1500, y: 1000 },
                        },
                    ],
                    edges: [
                        {
                            id: 'test1-test2',
                            source: 'test1',
                            target: 'test2',
                            type: 'custom',
                            sourceLabel: 'Gi0/1',
                            targetLabel: 'Gi0/2',
                            status: 'up',
                            sourceIP: '2.2.2.2',
                            targetIP: '3.3.3.3',
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'BEC',
        type: 'mainNode',
        data: { nodeIp: '1.1.1.1', status: 'down', label: 'BEC' },
        style: { width: '70px', height: '34px' },
        position: { x: -2936, y: -204 },
        data: {
            nodeIp: '1.1.1.1',
            status: 'down',
            label: 'RTI',

            // ✅ Racks inside the node
            racks: [
                {
                    label: 'Rack A',
                    size: 42, // 42U, full-size
                    devices: [
                        {
                            id: 'test1',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test1', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1520, y: 1090 },
                        },
                        {
                            id: 'test2',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test2', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1500, y: 1000 },
                        },
                    ],
                    edges: [
                        {
                            id: 'test1-test2',
                            source: 'test1',
                            target: 'test2',
                            type: 'custom',
                            sourceLabel: 'Gi0/1',
                            targetLabel: 'Gi0/2',
                            status: 'up',
                            sourceIP: '2.2.2.2',
                            targetIP: '3.3.3.3',
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'CNA',
        type: 'mainNode',
        data: { nodeIp: '1.1.1.1', status: 'down', label: 'CNA' },
        style: { width: '70px', height: '34px' },
        position: { x: -2986, y: -282 },
        data: {
            nodeIp: '1.1.1.1',
            status: 'down',
            label: 'RTI',

            // ✅ Racks inside the node
            racks: [
                {
                    label: 'Rack A',
                    size: 42, // 42U, full-size
                    devices: [
                        {
                            id: 'test1',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test1', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1520, y: 1090 },
                        },
                        {
                            id: 'test2',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test2', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1500, y: 1000 },
                        },
                    ],
                    edges: [
                        {
                            id: 'test1-test2',
                            source: 'test1',
                            target: 'test2',
                            type: 'custom',
                            sourceLabel: 'Gi0/1',
                            targetLabel: 'Gi0/2',
                            status: 'up',
                            sourceIP: '2.2.2.2',
                            targetIP: '3.3.3.3',
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'BSSI',
        type: 'mainNode',
        data: { nodeIp: '1.1.1.1', status: 'down', label: 'BSSI' },
        style: { width: '70px', height: '34px' },
        position: { x: -3072, y: -360 },
        data: {
            nodeIp: '1.1.1.1',
            status: 'down',
            label: 'RTI',

            // ✅ Racks inside the node
            racks: [
                {
                    label: 'Rack A',
                    size: 42, // 42U, full-size
                    devices: [
                        {
                            id: 'test1',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test1', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1520, y: 1090 },
                        },
                        {
                            id: 'test2',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test2', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1500, y: 1000 },
                        },
                    ],
                    edges: [
                        {
                            id: 'test1-test2',
                            source: 'test1',
                            target: 'test2',
                            type: 'custom',
                            sourceLabel: 'Gi0/1',
                            targetLabel: 'Gi0/2',
                            status: 'up',
                            sourceIP: '2.2.2.2',
                            targetIP: '3.3.3.3',
                        },
                    ],
                },
            ],
        },
    },
    // IDU
    {
        id: 'UJN',
        type: 'mainNode',
        data: { nodeIp: '1.1.1.1', status: 'down', label: 'UJN' },
        style: { width: '70px', height: '34px' },
        position: { x: -330, y: 1302 },
        data: {
            nodeIp: '1.1.1.1',
            status: 'down',
            label: 'RTI',

            // ✅ Racks inside the node
            racks: [
                {
                    label: 'Rack A',
                    size: 42, // 42U, full-size
                    devices: [
                        {
                            id: 'test1',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test1', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1520, y: 1090 },
                        },
                        {
                            id: 'test2',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test2', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1500, y: 1000 },
                        },
                    ],
                    edges: [
                        {
                            id: 'test1-test2',
                            source: 'test1',
                            target: 'test2',
                            type: 'custom',
                            sourceLabel: 'Gi0/1',
                            targetLabel: 'Gi0/2',
                            status: 'up',
                            sourceIP: '2.2.2.2',
                            targetIP: '3.3.3.3',
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'VRG',
        type: 'mainNode',
        data: { nodeIp: '1.1.1.1', status: 'down', label: 'VRG' },
        style: { width: '70px', height: '34px' },
        position: { x: -256, y: 1376 },
        data: {
            nodeIp: '1.1.1.1',
            status: 'down',
            label: 'RTI',

            // ✅ Racks inside the node
            racks: [
                {
                    label: 'Rack A',
                    size: 42, // 42U, full-size
                    devices: [
                        {
                            id: 'test1',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test1', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1520, y: 1090 },
                        },
                        {
                            id: 'test2',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test2', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1500, y: 1000 },
                        },
                    ],
                    edges: [
                        {
                            id: 'test1-test2',
                            source: 'test1',
                            target: 'test2',
                            type: 'custom',
                            sourceLabel: 'Gi0/1',
                            targetLabel: 'Gi0/2',
                            status: 'up',
                            sourceIP: '2.2.2.2',
                            targetIP: '3.3.3.3',
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'KDHA',
        type: 'mainNode',
        data: { nodeIp: '1.1.1.1', status: 'down', label: 'KDHA' },
        style: { width: '70px', height: '34px' },
        position: { x: -152, y: 1450 },
        data: {
            nodeIp: '1.1.1.1',
            status: 'down',
            label: 'RTI',

            // ✅ Racks inside the node
            racks: [
                {
                    label: 'Rack A',
                    size: 42, // 42U, full-size
                    devices: [
                        {
                            id: 'test1',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test1', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1520, y: 1090 },
                        },
                        {
                            id: 'test2',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test2', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1500, y: 1000 },
                        },
                    ],
                    edges: [
                        {
                            id: 'test1-test2',
                            source: 'test1',
                            target: 'test2',
                            type: 'custom',
                            sourceLabel: 'Gi0/1',
                            targetLabel: 'Gi0/2',
                            status: 'up',
                            sourceIP: '2.2.2.2',
                            targetIP: '3.3.3.3',
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'NRGR',
        type: 'mainNode',
        data: { nodeIp: '1.1.1.1', status: 'down', label: 'NRGR' },
        style: { width: '70px', height: '34px' },
        position: { x: -94, y: 1518 },
        data: {
            nodeIp: '1.1.1.1',
            status: 'down',
            label: 'RTI',

            // ✅ Racks inside the node
            racks: [
                {
                    label: 'Rack A',
                    size: 42, // 42U, full-size
                    devices: [
                        {
                            id: 'test1',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test1', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1520, y: 1090 },
                        },
                        {
                            id: 'test2',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test2', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1500, y: 1000 },
                        },
                    ],
                    edges: [
                        {
                            id: 'test1-test2',
                            source: 'test1',
                            target: 'test2',
                            type: 'custom',
                            sourceLabel: 'Gi0/1',
                            targetLabel: 'Gi0/2',
                            status: 'up',
                            sourceIP: '2.2.2.2',
                            targetIP: '3.3.3.3',
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'DWX',
        type: 'mainNode',
        data: { nodeIp: '1.1.1.1', status: 'down', label: 'DWX' },
        style: { width: '70px', height: '34px' },
        position: { x: -24, y: 1594 },
        data: {
            nodeIp: '1.1.1.1',
            status: 'down',
            label: 'RTI',

            // ✅ Racks inside the node
            racks: [
                {
                    label: 'Rack A',
                    size: 42, // 42U, full-size
                    devices: [
                        {
                            id: 'test1',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test1', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1520, y: 1090 },
                        },
                        {
                            id: 'test2',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test2', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1500, y: 1000 },
                        },
                    ],
                    edges: [
                        {
                            id: 'test1-test2',
                            source: 'test1',
                            target: 'test2',
                            type: 'custom',
                            sourceLabel: 'Gi0/1',
                            targetLabel: 'Gi0/2',
                            status: 'up',
                            sourceIP: '2.2.2.2',
                            targetIP: '3.3.3.3',
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'BNJN',
        type: 'mainNode',
        data: { nodeIp: '1.1.1.1', status: 'down', label: 'BNJN' },
        style: { width: '70px', height: '34px' },
        position: { x: -112, y: 1678 },
        data: {
            nodeIp: '1.1.1.1',
            status: 'down',
            label: 'RTI',

            // ✅ Racks inside the node
            racks: [
                {
                    label: 'Rack A',
                    size: 42, // 42U, full-size
                    devices: [
                        {
                            id: 'test1',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test1', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1520, y: 1090 },
                        },
                        {
                            id: 'test2',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test2', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1500, y: 1000 },
                        },
                    ],
                    edges: [
                        {
                            id: 'test1-test2',
                            source: 'test1',
                            target: 'test2',
                            type: 'custom',
                            sourceLabel: 'Gi0/1',
                            targetLabel: 'Gi0/2',
                            status: 'up',
                            sourceIP: '2.2.2.2',
                            targetIP: '3.3.3.3',
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'BLAX',
        type: 'mainNode',
        data: { nodeIp: '1.1.1.1', status: 'down', label: 'BLAX' },
        style: { width: '70px', height: '34px' },
        position: { x: -216, y: 1758 },
        data: {
            nodeIp: '1.1.1.1',
            status: 'down',
            label: 'RTI',

            // ✅ Racks inside the node
            racks: [
                {
                    label: 'Rack A',
                    size: 42, // 42U, full-size
                    devices: [
                        {
                            id: 'test1',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test1', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1520, y: 1090 },
                        },
                        {
                            id: 'test2',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test2', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1500, y: 1000 },
                        },
                    ],
                    edges: [
                        {
                            id: 'test1-test2',
                            source: 'test1',
                            target: 'test2',
                            type: 'custom',
                            sourceLabel: 'Gi0/1',
                            targetLabel: 'Gi0/2',
                            status: 'up',
                            sourceIP: '2.2.2.2',
                            targetIP: '3.3.3.3',
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'MGG',
        type: 'mainNode',
        data: { nodeIp: '1.1.1.1', status: 'down', label: 'MGG' },
        style: { width: '70px', height: '34px' },
        position: { x: -370, y: 1858 },
        data: {
            nodeIp: '1.1.1.1',
            status: 'down',
            label: 'RTI',

            // ✅ Racks inside the node
            racks: [
                {
                    label: 'Rack A',
                    size: 42, // 42U, full-size
                    devices: [
                        {
                            id: 'test1',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test1', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1520, y: 1090 },
                        },
                        {
                            id: 'test2',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test2', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1500, y: 1000 },
                        },
                    ],
                    edges: [
                        {
                            id: 'test1-test2',
                            source: 'test1',
                            target: 'test2',
                            type: 'custom',
                            sourceLabel: 'Gi0/1',
                            targetLabel: 'Gi0/2',
                            status: 'up',
                            sourceIP: '2.2.2.2',
                            targetIP: '3.3.3.3',
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'LMNR',
        type: 'mainNode',
        data: { nodeIp: '1.1.1.1', status: 'down', label: 'LMNR' },
        style: { width: '70px', height: '34px' },
        position: { x: -510, y: 1960 },
        data: {
            nodeIp: '1.1.1.1',
            status: 'down',
            label: 'RTI',

            // ✅ Racks inside the node
            racks: [
                {
                    label: 'Rack A',
                    size: 42, // 42U, full-size
                    devices: [
                        {
                            id: 'test1',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test1', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1520, y: 1090 },
                        },
                        {
                            id: 'test2',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test2', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1500, y: 1000 },
                        },
                    ],
                    edges: [
                        {
                            id: 'test1-test2',
                            source: 'test1',
                            target: 'test2',
                            type: 'custom',
                            sourceLabel: 'Gi0/1',
                            targetLabel: 'Gi0/2',
                            status: 'up',
                            sourceIP: '2.2.2.2',
                            targetIP: '3.3.3.3',
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'INDB',
        type: 'mainNode',
        data: { nodeIp: '1.1.1.1', status: 'down', label: 'INDB' },
        style: { width: '70px', height: '34px' },
        position: { x: -508, y: 2042 },
        data: {
            nodeIp: '1.1.1.1',
            status: 'down',
            label: 'RTI',

            // ✅ Racks inside the node
            racks: [
                {
                    label: 'Rack A',
                    size: 42, // 42U, full-size
                    devices: [
                        {
                            id: 'test1',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test1', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1520, y: 1090 },
                        },
                        {
                            id: 'test2',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test2', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1500, y: 1000 },
                        },
                    ],
                    edges: [
                        {
                            id: 'test1-test2',
                            source: 'test1',
                            target: 'test2',
                            type: 'custom',
                            sourceLabel: 'Gi0/1',
                            targetLabel: 'Gi0/2',
                            status: 'up',
                            sourceIP: '2.2.2.2',
                            targetIP: '3.3.3.3',
                        },
                    ],
                },
            ],
        },
    },
    // BPL
    {
        id: 'RTM_E',
        type: 'mainNode',
        data: { nodeIp: '1.1.1.1', status: 'down', label: 'RTM_E' },
        style: { width: '70px', height: '34px' },
        position: { x: -1184, y: 1158 },
        data: {
            nodeIp: '1.1.1.1',
            status: 'down',
            label: 'RTI',

            // ✅ Racks inside the node
            racks: [
                {
                    label: 'Rack A',
                    size: 42, // 42U, full-size
                    devices: [
                        {
                            id: 'test1',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test1', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1520, y: 1090 },
                        },
                        {
                            id: 'test2',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test2', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1500, y: 1000 },
                        },
                    ],
                    edges: [
                        {
                            id: 'test1-test2',
                            source: 'test1',
                            target: 'test2',
                            type: 'custom',
                            sourceLabel: 'Gi0/1',
                            targetLabel: 'Gi0/2',
                            status: 'up',
                            sourceIP: '2.2.2.2',
                            targetIP: '3.3.3.3',
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'BOD',
        type: 'mainNode',
        data: { nodeIp: '1.1.1.1', status: 'down', label: 'BOD' },
        style: { width: '70px', height: '34px' },
        position: { x: -1108, y: 1088 },
        data: {
            nodeIp: '1.1.1.1',
            status: 'down',
            label: 'RTI',

            // ✅ Racks inside the node
            racks: [
                {
                    label: 'Rack A',
                    size: 42, // 42U, full-size
                    devices: [
                        {
                            id: 'test1',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test1', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1520, y: 1090 },
                        },
                        {
                            id: 'test2',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test2', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1500, y: 1000 },
                        },
                    ],
                    edges: [
                        {
                            id: 'test1-test2',
                            source: 'test1',
                            target: 'test2',
                            type: 'custom',
                            sourceLabel: 'Gi0/1',
                            targetLabel: 'Gi0/2',
                            status: 'up',
                            sourceIP: '2.2.2.2',
                            targetIP: '3.3.3.3',
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'RNH',
        type: 'mainNode',
        data: { nodeIp: '1.1.1.1', status: 'down', label: 'RNH' },
        style: { width: '70px', height: '34px' },
        position: { x: -1014, y: 1014 },
        data: {
            nodeIp: '1.1.1.1',
            status: 'down',
            label: 'RTI',

            // ✅ Racks inside the node
            racks: [
                {
                    label: 'Rack A',
                    size: 42, // 42U, full-size
                    devices: [
                        {
                            id: 'test1',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test1', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1520, y: 1090 },
                        },
                        {
                            id: 'test2',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test2', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1500, y: 1000 },
                        },
                    ],
                    edges: [
                        {
                            id: 'test1-test2',
                            source: 'test1',
                            target: 'test2',
                            type: 'custom',
                            sourceLabel: 'Gi0/1',
                            targetLabel: 'Gi0/2',
                            status: 'up',
                            sourceIP: '2.2.2.2',
                            targetIP: '3.3.3.3',
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'KUH',
        type: 'mainNode',
        data: { nodeIp: '1.1.1.1', status: 'down', label: 'KUH' },
        style: { width: '70px', height: '34px' },
        position: { x: -960, y: 930 },
        data: {
            nodeIp: '1.1.1.1',
            status: 'down',
            label: 'RTI',

            // ✅ Racks inside the node
            racks: [
                {
                    label: 'Rack A',
                    size: 42, // 42U, full-size
                    devices: [
                        {
                            id: 'test1',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test1', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1520, y: 1090 },
                        },
                        {
                            id: 'test2',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test2', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1500, y: 1000 },
                        },
                    ],
                    edges: [
                        {
                            id: 'test1-test2',
                            source: 'test1',
                            target: 'test2',
                            type: 'custom',
                            sourceLabel: 'Gi0/1',
                            targetLabel: 'Gi0/2',
                            status: 'up',
                            sourceIP: '2.2.2.2',
                            targetIP: '3.3.3.3',
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'BRNA',
        type: 'mainNode',
        data: { nodeIp: '1.1.1.1', status: 'down', label: 'BRNA' },
        style: { width: '70px', height: '34px' },
        position: { x: -892, y: 846 },
        data: {
            nodeIp: '1.1.1.1',
            status: 'down',
            label: 'RTI',

            // ✅ Racks inside the node
            racks: [
                {
                    label: 'Rack A',
                    size: 42, // 42U, full-size
                    devices: [
                        {
                            id: 'test1',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test1', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1520, y: 1090 },
                        },
                        {
                            id: 'test2',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test2', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1500, y: 1000 },
                        },
                    ],
                    edges: [
                        {
                            id: 'test1-test2',
                            source: 'test1',
                            target: 'test2',
                            type: 'custom',
                            sourceLabel: 'Gi0/1',
                            targetLabel: 'Gi0/2',
                            status: 'up',
                            sourceIP: '2.2.2.2',
                            targetIP: '3.3.3.3',
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'NAD',
        type: 'mainNode',
        data: { nodeIp: '1.1.1.1', status: 'down', label: 'NAD' },
        style: { width: '70px', height: '34px' },
        position: { x: -732, y: 768 },
        data: {
            nodeIp: '1.1.1.1',
            status: 'down',
            label: 'RTI',

            // ✅ Racks inside the node
            racks: [
                {
                    label: 'Rack A',
                    size: 42, // 42U, full-size
                    devices: [
                        {
                            id: 'test1',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test1', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1520, y: 1090 },
                        },
                        {
                            id: 'test2',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test2', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1500, y: 1000 },
                        },
                    ],
                    edges: [
                        {
                            id: 'test1-test2',
                            source: 'test1',
                            target: 'test2',
                            type: 'custom',
                            sourceLabel: 'Gi0/1',
                            targetLabel: 'Gi0/2',
                            status: 'up',
                            sourceIP: '2.2.2.2',
                            targetIP: '3.3.3.3',
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'PPG',
        type: 'mainNode',
        data: { nodeIp: '1.1.1.1', status: 'down', label: 'PPG' },
        style: { width: '70px', height: '34px' },
        position: { x: -690, y: 890 },
        data: {
            nodeIp: '1.1.1.1',
            status: 'down',
            label: 'RTI',

            // ✅ Racks inside the node
            racks: [
                {
                    label: 'Rack A',
                    size: 42, // 42U, full-size
                    devices: [
                        {
                            id: 'test1',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test1', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1520, y: 1090 },
                        },
                        {
                            id: 'test2',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test2', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1500, y: 1000 },
                        },
                    ],
                    edges: [
                        {
                            id: 'test1-test2',
                            source: 'test1',
                            target: 'test2',
                            type: 'custom',
                            sourceLabel: 'Gi0/1',
                            targetLabel: 'Gi0/2',
                            status: 'up',
                            sourceIP: '2.2.2.2',
                            targetIP: '3.3.3.3',
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'UNL',
        type: 'mainNode',
        data: { nodeIp: '1.1.1.1', status: 'down', label: 'UNL' },
        style: { width: '70px', height: '34px' },
        position: { x: -650, y: 980 },
        data: {
            nodeIp: '1.1.1.1',
            status: 'down',
            label: 'RTI',

            // ✅ Racks inside the node
            racks: [
                {
                    label: 'Rack A',
                    size: 42, // 42U, full-size
                    devices: [
                        {
                            id: 'test1',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test1', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1520, y: 1090 },
                        },
                        {
                            id: 'test2',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test2', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1500, y: 1000 },
                        },
                    ],
                    edges: [
                        {
                            id: 'test1-test2',
                            source: 'test1',
                            target: 'test2',
                            type: 'custom',
                            sourceLabel: 'Gi0/1',
                            targetLabel: 'Gi0/2',
                            status: 'up',
                            sourceIP: '2.2.2.2',
                            targetIP: '3.3.3.3',
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'PSO',
        type: 'mainNode',
        data: { nodeIp: '1.1.1.1', status: 'down', label: 'PSO' },
        style: { width: '70px', height: '34px' },
        position: { x: -596, y: 1058 },
        data: {
            nodeIp: '1.1.1.1',
            status: 'down',
            label: 'RTI',

            // ✅ Racks inside the node
            racks: [
                {
                    label: 'Rack A',
                    size: 42, // 42U, full-size
                    devices: [
                        {
                            id: 'test1',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test1', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1520, y: 1090 },
                        },
                        {
                            id: 'test2',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test2', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1500, y: 1000 },
                        },
                    ],
                    edges: [
                        {
                            id: 'test1-test2',
                            source: 'test1',
                            target: 'test2',
                            type: 'custom',
                            sourceLabel: 'Gi0/1',
                            targetLabel: 'Gi0/2',
                            status: 'up',
                            sourceIP: '2.2.2.2',
                            targetIP: '3.3.3.3',
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'ASL',
        type: 'mainNode',
        data: { nodeIp: '1.1.1.1', status: 'down', label: 'ASL' },
        style: { width: '70px', height: '34px' },
        position: { x: -542, y: 1132 },
        data: {
            nodeIp: '1.1.1.1',
            status: 'down',
            label: 'RTI',

            // ✅ Racks inside the node
            racks: [
                {
                    label: 'Rack A',
                    size: 42, // 42U, full-size
                    devices: [
                        {
                            id: 'test1',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test1', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1520, y: 1090 },
                        },
                        {
                            id: 'test2',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test2', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1500, y: 1000 },
                        },
                    ],
                    edges: [
                        {
                            id: 'test1-test2',
                            source: 'test1',
                            target: 'test2',
                            type: 'custom',
                            sourceLabel: 'Gi0/1',
                            targetLabel: 'Gi0/2',
                            status: 'up',
                            sourceIP: '2.2.2.2',
                            targetIP: '3.3.3.3',
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'NKI',
        type: 'mainNode',
        data: { nodeIp: '1.1.1.1', status: 'down', label: 'NKI' },
        style: { width: '70px', height: '34px' },
        position: { x: -506, y: 1212 },
        data: {
            nodeIp: '1.1.1.1',
            status: 'down',
            label: 'RTI',

            // ✅ Racks inside the node
            racks: [
                {
                    label: 'Rack A',
                    size: 42, // 42U, full-size
                    devices: [
                        {
                            id: 'test1',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test1', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1520, y: 1090 },
                        },
                        {
                            id: 'test2',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test2', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1500, y: 1000 },
                        },
                    ],
                    edges: [
                        {
                            id: 'test1-test2',
                            source: 'test1',
                            target: 'test2',
                            type: 'custom',
                            sourceLabel: 'Gi0/1',
                            targetLabel: 'Gi0/2',
                            status: 'up',
                            sourceIP: '2.2.2.2',
                            targetIP: '3.3.3.3',
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'SPBG',
        type: 'mainNode',
        data: { nodeIp: '1.1.1.1', status: 'down', label: 'SPBG' },
        style: { width: '70px', height: '34px' },
        position: { x: -526, y: 1301 },
        data: {
            nodeIp: '1.1.1.1',
            status: 'down',
            label: 'RTI',

            // ✅ Racks inside the node
            racks: [
                {
                    label: 'Rack A',
                    size: 42, // 42U, full-size
                    devices: [
                        {
                            id: 'test1',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test1', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1520, y: 1090 },
                        },
                        {
                            id: 'test2',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test2', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1500, y: 1000 },
                        },
                    ],
                    edges: [
                        {
                            id: 'test1-test2',
                            source: 'test1',
                            target: 'test2',
                            type: 'custom',
                            sourceLabel: 'Gi0/1',
                            targetLabel: 'Gi0/2',
                            status: 'up',
                            sourceIP: '2.2.2.2',
                            targetIP: '3.3.3.3',
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'PLW',
        type: 'mainNode',
        data: { nodeIp: '1.1.1.1', status: 'down', label: 'PLW' },
        style: { width: '70px', height: '34px' },
        position: { x: -124, y: 1194 },
        data: {
            nodeIp: '1.1.1.1',
            status: 'down',
            label: 'RTI',

            // ✅ Racks inside the node
            racks: [
                {
                    label: 'Rack A',
                    size: 42, // 42U, full-size
                    devices: [
                        {
                            id: 'test1',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test1', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1520, y: 1090 },
                        },
                        {
                            id: 'test2',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test2', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1500, y: 1000 },
                        },
                    ],
                    edges: [
                        {
                            id: 'test1-test2',
                            source: 'test1',
                            target: 'test2',
                            type: 'custom',
                            sourceLabel: 'Gi0/1',
                            targetLabel: 'Gi0/2',
                            status: 'up',
                            sourceIP: '2.2.2.2',
                            targetIP: '3.3.3.3',
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'TJP',
        type: 'mainNode',
        data: { nodeIp: '1.1.1.1', status: 'down', label: 'TJP' },
        style: { width: '70px', height: '34px' },
        position: { x: -34, y: 1116 },
        data: {
            nodeIp: '1.1.1.1',
            status: 'down',
            label: 'RTI',

            // ✅ Racks inside the node
            racks: [
                {
                    label: 'Rack A',
                    size: 42, // 42U, full-size
                    devices: [
                        {
                            id: 'test1',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test1', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1520, y: 1090 },
                        },
                        {
                            id: 'test2',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test2', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1500, y: 1000 },
                        },
                    ],
                    edges: [
                        {
                            id: 'test1-test2',
                            source: 'test1',
                            target: 'test2',
                            type: 'custom',
                            sourceLabel: 'Gi0/1',
                            targetLabel: 'Gi0/2',
                            status: 'up',
                            sourceIP: '2.2.2.2',
                            targetIP: '3.3.3.3',
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'TAN',
        type: 'mainNode',
        data: { nodeIp: '1.1.1.1', status: 'down', label: 'TAN' },
        style: { width: '70px', height: '34px' },
        position: { x: 50, y: 1038 },
        data: {
            nodeIp: '1.1.1.1',
            status: 'down',
            label: 'RTI',

            // ✅ Racks inside the node
            racks: [
                {
                    label: 'Rack A',
                    size: 42, // 42U, full-size
                    devices: [
                        {
                            id: 'test1',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test1', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1520, y: 1090 },
                        },
                        {
                            id: 'test2',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test2', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1500, y: 1000 },
                        },
                    ],
                    edges: [
                        {
                            id: 'test1-test2',
                            source: 'test1',
                            target: 'test2',
                            type: 'custom',
                            sourceLabel: 'Gi0/1',
                            targetLabel: 'Gi0/2',
                            status: 'up',
                            sourceIP: '2.2.2.2',
                            targetIP: '3.3.3.3',
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'MKC',
        type: 'mainNode',
        data: { nodeIp: '1.1.1.1', status: 'down', label: 'MKC' },
        style: { width: '70px', height: '34px' },
        position: { x: 140, y: 948 },
        data: {
            nodeIp: '1.1.1.1',
            status: 'down',
            label: 'RTI',

            // ✅ Racks inside the node
            racks: [
                {
                    label: 'Rack A',
                    size: 42, // 42U, full-size
                    devices: [
                        {
                            id: 'test1',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test1', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1520, y: 1090 },
                        },
                        {
                            id: 'test2',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test2', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1500, y: 1000 },
                        },
                    ],
                    edges: [
                        {
                            id: 'test1-test2',
                            source: 'test1',
                            target: 'test2',
                            type: 'custom',
                            sourceLabel: 'Gi0/1',
                            targetLabel: 'Gi0/2',
                            status: 'up',
                            sourceIP: '2.2.2.2',
                            targetIP: '3.3.3.3',
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'PUO',
        type: 'mainNode',
        data: { nodeIp: '1.1.1.1', status: 'down', label: 'PUO' },
        style: { width: '70px', height: '34px' },
        position: { x: 236, y: 860 },
        data: {
            nodeIp: '1.1.1.1',
            status: 'down',
            label: 'RTI',

            // ✅ Racks inside the node
            racks: [
                {
                    label: 'Rack A',
                    size: 42, // 42U, full-size
                    devices: [
                        {
                            id: 'test1',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test1', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1520, y: 1090 },
                        },
                        {
                            id: 'test2',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test2', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1500, y: 1000 },
                        },
                    ],
                    edges: [
                        {
                            id: 'test1-test2',
                            source: 'test1',
                            target: 'test2',
                            type: 'custom',
                            sourceLabel: 'Gi0/1',
                            targetLabel: 'Gi0/2',
                            status: 'up',
                            sourceIP: '2.2.2.2',
                            targetIP: '3.3.3.3',
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'BCH',
        type: 'mainNode',
        data: { nodeIp: '1.1.1.1', status: 'down', label: 'BCH' },
        style: { width: '70px', height: '34px' },
        position: { x: 318, y: 770 },
        data: {
            nodeIp: '1.1.1.1',
            status: 'down',
            label: 'RTI',

            // ✅ Racks inside the node
            racks: [
                {
                    label: 'Rack A',
                    size: 42, // 42U, full-size
                    devices: [
                        {
                            id: 'test1',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test1', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1520, y: 1090 },
                        },
                        {
                            id: 'test2',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test2', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1500, y: 1000 },
                        },
                    ],
                    edges: [
                        {
                            id: 'test1-test2',
                            source: 'test1',
                            target: 'test2',
                            type: 'custom',
                            sourceLabel: 'Gi0/1',
                            targetLabel: 'Gi0/2',
                            status: 'up',
                            sourceIP: '2.2.2.2',
                            targetIP: '3.3.3.3',
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'KSH',
        type: 'mainNode',
        data: { nodeIp: '1.1.1.1', status: 'down', label: 'KSH' },
        style: { width: '70px', height: '34px' },
        position: { x: 410, y: 694 },
        data: {
            nodeIp: '1.1.1.1',
            status: 'down',
            label: 'RTI',

            // ✅ Racks inside the node
            racks: [
                {
                    label: 'Rack A',
                    size: 42, // 42U, full-size
                    devices: [
                        {
                            id: 'test1',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test1', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1520, y: 1090 },
                        },
                        {
                            id: 'test2',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test2', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1500, y: 1000 },
                        },
                    ],
                    edges: [
                        {
                            id: 'test1-test2',
                            source: 'test1',
                            target: 'test2',
                            type: 'custom',
                            sourceLabel: 'Gi0/1',
                            targetLabel: 'Gi0/2',
                            status: 'up',
                            sourceIP: '2.2.2.2',
                            targetIP: '3.3.3.3',
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'BLX',
        type: 'mainNode',
        data: { nodeIp: '1.1.1.1', status: 'down', label: 'BLX' },
        style: { width: '70px', height: '34px' },
        position: { x: 502, y: 624 },
        data: {
            nodeIp: '1.1.1.1',
            status: 'down',
            label: 'RTI',

            // ✅ Racks inside the node
            racks: [
                {
                    label: 'Rack A',
                    size: 42, // 42U, full-size
                    devices: [
                        {
                            id: 'test1',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test1', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1520, y: 1090 },
                        },
                        {
                            id: 'test2',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test2', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1500, y: 1000 },
                        },
                    ],
                    edges: [
                        {
                            id: 'test1-test2',
                            source: 'test1',
                            target: 'test2',
                            type: 'custom',
                            sourceLabel: 'Gi0/1',
                            targetLabel: 'Gi0/2',
                            status: 'up',
                            sourceIP: '2.2.2.2',
                            targetIP: '3.3.3.3',
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'AKD',
        type: 'mainNode',
        data: { nodeIp: '1.1.1.1', status: 'down', label: 'AKD' },
        style: { width: '70px', height: '34px' },
        position: { x: 626, y: 560 },
        data: {
            nodeIp: '1.1.1.1',
            status: 'down',
            label: 'RTI',

            // ✅ Racks inside the node
            racks: [
                {
                    label: 'Rack A',
                    size: 42, // 42U, full-size
                    devices: [
                        {
                            id: 'test1',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test1', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1520, y: 1090 },
                        },
                        {
                            id: 'test2',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test2', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1500, y: 1000 },
                        },
                    ],
                    edges: [
                        {
                            id: 'test1-test2',
                            source: 'test1',
                            target: 'test2',
                            type: 'custom',
                            sourceLabel: 'Gi0/1',
                            targetLabel: 'Gi0/2',
                            status: 'up',
                            sourceIP: '2.2.2.2',
                            targetIP: '3.3.3.3',
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'SJP',
        type: 'mainNode',
        data: { nodeIp: '1.1.1.1', status: 'down', label: 'SJP' },
        style: { width: '70px', height: '34px' },
        position: { x: 790, y: 490 },
        data: {
            nodeIp: '1.1.1.1',
            status: 'down',
            label: 'RTI',

            // ✅ Racks inside the node
            racks: [
                {
                    label: 'Rack A',
                    size: 42, // 42U, full-size
                    devices: [
                        {
                            id: 'test1',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test1', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1520, y: 1090 },
                        },
                        {
                            id: 'test2',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test2', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1500, y: 1000 },
                        },
                    ],
                    edges: [
                        {
                            id: 'test1-test2',
                            source: 'test1',
                            target: 'test2',
                            type: 'custom',
                            sourceLabel: 'Gi0/1',
                            targetLabel: 'Gi0/2',
                            status: 'up',
                            sourceIP: '2.2.2.2',
                            targetIP: '3.3.3.3',
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'KPP',
        type: 'mainNode',
        data: { nodeIp: '1.1.1.1', status: 'down', label: 'KPP' },
        style: { width: '70px', height: '34px' },
        position: { x: 918, y: 422 },
        data: {
            nodeIp: '1.1.1.1',
            status: 'down',
            label: 'RTI',

            // ✅ Racks inside the node
            racks: [
                {
                    label: 'Rack A',
                    size: 42, // 42U, full-size
                    devices: [
                        {
                            id: 'test1',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test1', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1520, y: 1090 },
                        },
                        {
                            id: 'test2',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test2', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1500, y: 1000 },
                        },
                    ],
                    edges: [
                        {
                            id: 'test1-test2',
                            source: 'test1',
                            target: 'test2',
                            type: 'custom',
                            sourceLabel: 'Gi0/1',
                            targetLabel: 'Gi0/2',
                            status: 'up',
                            sourceIP: '2.2.2.2',
                            targetIP: '3.3.3.3',
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'JBX',
        type: 'mainNode',
        data: { nodeIp: '1.1.1.1', status: 'down', label: 'JBX' },
        style: { width: '70px', height: '34px' },
        position: { x: 1060, y: 356 },
        data: {
            nodeIp: '1.1.1.1',
            status: 'down',
            label: 'RTI',

            // ✅ Racks inside the node
            racks: [
                {
                    label: 'Rack A',
                    size: 42, // 42U, full-size
                    devices: [
                        {
                            id: 'test1',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test1', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1520, y: 1090 },
                        },
                        {
                            id: 'test2',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test2', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1500, y: 1000 },
                        },
                    ],
                    edges: [
                        {
                            id: 'test1-test2',
                            source: 'test1',
                            target: 'test2',
                            type: 'custom',
                            sourceLabel: 'Gi0/1',
                            targetLabel: 'Gi0/2',
                            status: 'up',
                            sourceIP: '2.2.2.2',
                            targetIP: '3.3.3.3',
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'PRB',
        type: 'mainNode',
        data: { nodeIp: '1.1.1.1', status: 'down', label: 'PRB' },
        style: { width: '70px', height: '34px' },
        position: { x: 1210, y: 288 },
        data: {
            nodeIp: '1.1.1.1',
            status: 'down',
            label: 'RTI',

            // ✅ Racks inside the node
            racks: [
                {
                    label: 'Rack A',
                    size: 42, // 42U, full-size
                    devices: [
                        {
                            id: 'test1',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test1', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1520, y: 1090 },
                        },
                        {
                            id: 'test2',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test2', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1500, y: 1000 },
                        },
                    ],
                    edges: [
                        {
                            id: 'test1-test2',
                            source: 'test1',
                            target: 'test2',
                            type: 'custom',
                            sourceLabel: 'Gi0/1',
                            targetLabel: 'Gi0/2',
                            status: 'up',
                            sourceIP: '2.2.2.2',
                            targetIP: '3.3.3.3',
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'BKTL',
        type: 'mainNode',
        data: { nodeIp: '1.1.1.1', status: 'down', label: 'BKTL' },
        style: { width: '70px', height: '34px' },
        position: { x: 1360, y: 222 },
        data: {
            nodeIp: '1.1.1.1',
            status: 'down',
            label: 'RTI',

            // ✅ Racks inside the node
            racks: [
                {
                    label: 'Rack A',
                    size: 42, // 42U, full-size
                    devices: [
                        {
                            id: 'test1',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test1', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1520, y: 1090 },
                        },
                        {
                            id: 'test2',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test2', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1500, y: 1000 },
                        },
                    ],
                    edges: [
                        {
                            id: 'test1-test2',
                            source: 'test1',
                            target: 'test2',
                            type: 'custom',
                            sourceLabel: 'Gi0/1',
                            targetLabel: 'Gi0/2',
                            status: 'up',
                            sourceIP: '2.2.2.2',
                            targetIP: '3.3.3.3',
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'SEH',
        type: 'mainNode',
        data: { nodeIp: '1.1.1.1', status: 'down', label: 'SEH' },
        style: { width: '70px', height: '34px' },
        position: { x: 1540, y: 156 },
        data: {
            nodeIp: '1.1.1.1',
            status: 'down',
            label: 'RTI',

            // ✅ Racks inside the node
            racks: [
                {
                    label: 'Rack A',
                    size: 42, // 42U, full-size
                    devices: [
                        {
                            id: 'test1',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test1', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1520, y: 1090 },
                        },
                        {
                            id: 'test2',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test2', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1500, y: 1000 },
                        },
                    ],
                    edges: [
                        {
                            id: 'test1-test2',
                            source: 'test1',
                            target: 'test2',
                            type: 'custom',
                            sourceLabel: 'Gi0/1',
                            targetLabel: 'Gi0/2',
                            status: 'up',
                            sourceIP: '2.2.2.2',
                            targetIP: '3.3.3.3',
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'PNWN',
        type: 'mainNode',
        data: { nodeIp: '1.1.1.1', status: 'down', label: 'PNWN' },
        style: { width: '70px', height: '34px' },
        position: { x: 1674, y: 80 },
        data: {
            nodeIp: '1.1.1.1',
            status: 'down',
            label: 'RTI',

            // ✅ Racks inside the node
            racks: [
                {
                    label: 'Rack A',
                    size: 42, // 42U, full-size
                    devices: [
                        {
                            id: 'test1',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test1', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1520, y: 1090 },
                        },
                        {
                            id: 'test2',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test2', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1500, y: 1000 },
                        },
                    ],
                    edges: [
                        {
                            id: 'test1-test2',
                            source: 'test1',
                            target: 'test2',
                            type: 'custom',
                            sourceLabel: 'Gi0/1',
                            targetLabel: 'Gi0/2',
                            status: 'up',
                            sourceIP: '2.2.2.2',
                            targetIP: '3.3.3.3',
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'PUD',
        type: 'mainNode',
        data: { nodeIp: '1.1.1.1', status: 'down', label: 'PUD' },
        style: { width: '70px', height: '34px' },
        position: { x: 1832, y: 4 },
        data: {
            nodeIp: '1.1.1.1',
            status: 'down',
            label: 'RTI',

            // ✅ Racks inside the node
            racks: [
                {
                    label: 'Rack A',
                    size: 42, // 42U, full-size
                    devices: [
                        {
                            id: 'test1',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test1', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1520, y: 1090 },
                        },
                        {
                            id: 'test2',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test2', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1500, y: 1000 },
                        },
                    ],
                    edges: [
                        {
                            id: 'test1-test2',
                            source: 'test1',
                            target: 'test2',
                            type: 'custom',
                            sourceLabel: 'Gi0/1',
                            targetLabel: 'Gi0/2',
                            status: 'up',
                            sourceIP: '2.2.2.2',
                            targetIP: '3.3.3.3',
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'BQE',
        type: 'mainNode',
        data: { nodeIp: '1.1.1.1', status: 'down', label: 'BQE' },
        style: { width: '70px', height: '34px' },
        position: { x: 1660, y: -68 },
        data: {
            nodeIp: '1.1.1.1',
            status: 'down',
            label: 'RTI',

            // ✅ Racks inside the node
            racks: [
                {
                    label: 'Rack A',
                    size: 42, // 42U, full-size
                    devices: [
                        {
                            id: 'test1',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test1', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1520, y: 1090 },
                        },
                        {
                            id: 'test2',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test2', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1500, y: 1000 },
                        },
                    ],
                    edges: [
                        {
                            id: 'test1-test2',
                            source: 'test1',
                            target: 'test2',
                            type: 'custom',
                            sourceLabel: 'Gi0/1',
                            targetLabel: 'Gi0/2',
                            status: 'up',
                            sourceIP: '2.2.2.2',
                            targetIP: '3.3.3.3',
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'SHRN',
        type: 'mainNode',
        data: { nodeIp: '1.1.1.1', status: 'down', label: 'SHRN' },
        style: { width: '70px', height: '34px' },
        position: { x: 2170, y: -124 },
        data: {
            nodeIp: '1.1.1.1',
            status: 'down',
            label: 'RTI',

            // ✅ Racks inside the node
            racks: [
                {
                    label: 'Rack A',
                    size: 42, // 42U, full-size
                    devices: [
                        {
                            id: 'test1',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test1', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1520, y: 1090 },
                        },
                        {
                            id: 'test2',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test2', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1500, y: 1000 },
                        },
                    ],
                    edges: [
                        {
                            id: 'test1-test2',
                            source: 'test1',
                            target: 'test2',
                            type: 'custom',
                            sourceLabel: 'Gi0/1',
                            targetLabel: 'Gi0/2',
                            status: 'up',
                            sourceIP: '2.2.2.2',
                            targetIP: '3.3.3.3',
                        },
                    ],
                },
            ],
        },
    },
    // KNW
    {
        id: 'NGW',
        type: 'mainNode',
        data: { nodeIp: '1.1.1.1', status: 'down', label: 'NGW' },
        style: { width: '70px', height: '34px' },
        position: { x: -1224, y: 1442 },
        data: {
            nodeIp: '1.1.1.1',
            status: 'down',
            label: 'RTI',

            // ✅ Racks inside the node
            racks: [
                {
                    label: 'Rack A',
                    size: 42, // 42U, full-size
                    devices: [
                        {
                            id: 'test1',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test1', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1520, y: 1090 },
                        },
                        {
                            id: 'test2',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test2', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1500, y: 1000 },
                        },
                    ],
                    edges: [
                        {
                            id: 'test1-test2',
                            source: 'test1',
                            target: 'test2',
                            type: 'custom',
                            sourceLabel: 'Gi0/1',
                            targetLabel: 'Gi0/2',
                            status: 'up',
                            sourceIP: '2.2.2.2',
                            targetIP: '3.3.3.3',
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'RNJ',
        type: 'mainNode',
        data: { nodeIp: '1.1.1.1', status: 'down', label: 'RNJ' },
        style: { width: '70px', height: '34px' },
        position: { x: -1136, y: 1515 },
        data: {
            nodeIp: '1.1.1.1',
            status: 'down',
            label: 'RTI',

            // ✅ Racks inside the node
            racks: [
                {
                    label: 'Rack A',
                    size: 42, // 42U, full-size
                    devices: [
                        {
                            id: 'test1',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test1', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1520, y: 1090 },
                        },
                        {
                            id: 'test2',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test2', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1500, y: 1000 },
                        },
                    ],
                    edges: [
                        {
                            id: 'test1-test2',
                            source: 'test1',
                            target: 'test2',
                            type: 'custom',
                            sourceLabel: 'Gi0/1',
                            targetLabel: 'Gi0/2',
                            status: 'up',
                            sourceIP: '2.2.2.2',
                            targetIP: '3.3.3.3',
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'BNG',
        type: 'mainNode',
        data: { nodeIp: '1.1.1.1', status: 'down', label: 'BNG' },
        style: { width: '70px', height: '34px' },
        position: { x: -1046, y: 1586 },
        data: {
            nodeIp: '1.1.1.1',
            status: 'down',
            label: 'RTI',

            // ✅ Racks inside the node
            racks: [
                {
                    label: 'Rack A',
                    size: 42, // 42U, full-size
                    devices: [
                        {
                            id: 'test1',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test1', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1520, y: 1090 },
                        },
                        {
                            id: 'test2',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test2', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1500, y: 1000 },
                        },
                    ],
                    edges: [
                        {
                            id: 'test1-test2',
                            source: 'test1',
                            target: 'test2',
                            type: 'custom',
                            sourceLabel: 'Gi0/1',
                            targetLabel: 'Gi0/2',
                            status: 'up',
                            sourceIP: '2.2.2.2',
                            targetIP: '3.3.3.3',
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'GPX',
        type: 'mainNode',
        data: { nodeIp: '1.1.1.1', status: 'down', label: 'GPX' },
        style: { width: '70px', height: '34px' },
        position: { x: -976, y: 1660 },
        data: {
            nodeIp: '1.1.1.1',
            status: 'down',
            label: 'RTI',

            // ✅ Racks inside the node
            racks: [
                {
                    label: 'Rack A',
                    size: 42, // 42U, full-size
                    devices: [
                        {
                            id: 'test1',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test1', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1520, y: 1090 },
                        },
                        {
                            id: 'test2',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test2', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1500, y: 1000 },
                        },
                    ],
                    edges: [
                        {
                            id: 'test1-test2',
                            source: 'test1',
                            target: 'test2',
                            type: 'custom',
                            sourceLabel: 'Gi0/1',
                            targetLabel: 'Gi0/2',
                            status: 'up',
                            sourceIP: '2.2.2.2',
                            targetIP: '3.3.3.3',
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'FTD',
        type: 'mainNode',
        data: { nodeIp: '1.1.1.1', status: 'down', label: 'FTD' },
        style: { width: '70px', height: '34px' },
        position: { x: -898, y: 1735 },
        data: {
            nodeIp: '1.1.1.1',
            status: 'down',
            label: 'RTI',

            // ✅ Racks inside the node
            racks: [
                {
                    label: 'Rack A',
                    size: 42, // 42U, full-size
                    devices: [
                        {
                            id: 'test1',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test1', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1520, y: 1090 },
                        },
                        {
                            id: 'test2',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test2', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1500, y: 1000 },
                        },
                    ],
                    edges: [
                        {
                            id: 'test1-test2',
                            source: 'test1',
                            target: 'test2',
                            type: 'custom',
                            sourceLabel: 'Gi0/1',
                            targetLabel: 'Gi0/2',
                            status: 'up',
                            sourceIP: '2.2.2.2',
                            targetIP: '3.3.3.3',
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'AJN',
        type: 'mainNode',
        data: { nodeIp: '1.1.1.1', status: 'down', label: 'AJN' },
        style: { width: '70px', height: '34px' },
        position: { x: -786, y: 1804 },
        data: {
            nodeIp: '1.1.1.1',
            status: 'down',
            label: 'RTI',

            // ✅ Racks inside the node
            racks: [
                {
                    label: 'Rack A',
                    size: 42, // 42U, full-size
                    devices: [
                        {
                            id: 'test1',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test1', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1520, y: 1090 },
                        },
                        {
                            id: 'test2',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test2', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1500, y: 1000 },
                        },
                    ],
                    edges: [
                        {
                            id: 'test1-test2',
                            source: 'test1',
                            target: 'test2',
                            type: 'custom',
                            sourceLabel: 'Gi0/1',
                            targetLabel: 'Gi0/2',
                            status: 'up',
                            sourceIP: '2.2.2.2',
                            targetIP: '3.3.3.3',
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'PLA',
        type: 'mainNode',
        data: { nodeIp: '1.1.1.1', status: 'down', label: 'PLA' },
        style: { width: '70px', height: '34px' },
        position: { x: -660, y: 1883 },
        data: {
            nodeIp: '1.1.1.1',
            status: 'down',
            label: 'RTI',

            // ✅ Racks inside the node
            racks: [
                {
                    label: 'Rack A',
                    size: 42, // 42U, full-size
                    devices: [
                        {
                            id: 'test1',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test1', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1520, y: 1090 },
                        },
                        {
                            id: 'test2',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test2', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1500, y: 1000 },
                        },
                    ],
                    edges: [
                        {
                            id: 'test1-test2',
                            source: 'test1',
                            target: 'test2',
                            type: 'custom',
                            sourceLabel: 'Gi0/1',
                            targetLabel: 'Gi0/2',
                            status: 'up',
                            sourceIP: '2.2.2.2',
                            targetIP: '3.3.3.3',
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'RJQ',
        type: 'mainNode',
        data: { nodeIp: '1.1.1.1', status: 'down', label: 'RJQ' },
        style: { width: '70px', height: '34px' },
        position: { x: -602, y: 2122 },
        data: {
            nodeIp: '1.1.1.1',
            status: 'down',
            label: 'RTI',

            // ✅ Racks inside the node
            racks: [
                {
                    label: 'Rack A',
                    size: 42, // 42U, full-size
                    devices: [
                        {
                            id: 'test1',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test1', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1520, y: 1090 },
                        },
                        {
                            id: 'test2',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test2', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1500, y: 1000 },
                        },
                    ],
                    edges: [
                        {
                            id: 'test1-test2',
                            source: 'test1',
                            target: 'test2',
                            type: 'custom',
                            sourceLabel: 'Gi0/1',
                            targetLabel: 'Gi0/2',
                            status: 'up',
                            sourceIP: '2.2.2.2',
                            targetIP: '3.3.3.3',
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'RAU',
        type: 'mainNode',
        data: { nodeIp: '1.1.1.1', status: 'down', label: 'RAU' },
        style: { width: '70px', height: '34px' },
        position: { x: -696, y: 2205 },
        data: {
            nodeIp: '1.1.1.1',
            status: 'down',
            label: 'RTI',

            // ✅ Racks inside the node
            racks: [
                {
                    label: 'Rack A',
                    size: 42, // 42U, full-size
                    devices: [
                        {
                            id: 'test1',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test1', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1520, y: 1090 },
                        },
                        {
                            id: 'test2',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test2', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1500, y: 1000 },
                        },
                    ],
                    edges: [
                        {
                            id: 'test1-test2',
                            source: 'test1',
                            target: 'test2',
                            type: 'custom',
                            sourceLabel: 'Gi0/1',
                            targetLabel: 'Gi0/2',
                            status: 'up',
                            sourceIP: '2.2.2.2',
                            targetIP: '3.3.3.3',
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'TIHI',
        type: 'mainNode',
        data: { nodeIp: '1.1.1.1', status: 'down', label: 'TIHI' },
        style: { width: '70px', height: '34px' },
        position: { x: -876, y: 2300 },
        data: {
            nodeIp: '1.1.1.1',
            status: 'down',
            label: 'RTI',

            // ✅ Racks inside the node
            racks: [
                {
                    label: 'Rack A',
                    size: 42, // 42U, full-size
                    devices: [
                        {
                            id: 'test1',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test1', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1520, y: 1090 },
                        },
                        {
                            id: 'test2',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test2', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1500, y: 1000 },
                        },
                    ],
                    edges: [
                        {
                            id: 'test1-test2',
                            source: 'test1',
                            target: 'test2',
                            type: 'custom',
                            sourceLabel: 'Gi0/1',
                            targetLabel: 'Gi0/2',
                            status: 'up',
                            sourceIP: '2.2.2.2',
                            targetIP: '3.3.3.3',
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'DADN',
        type: 'mainNode',
        data: { nodeIp: '1.1.1.1', status: 'down', label: 'DADN' },
        style: { width: '70px', height: '34px' },
        position: { x: -618, y: 2315 },
        data: {
            nodeIp: '1.1.1.1',
            status: 'down',
            label: 'RTI',

            // ✅ Racks inside the node
            racks: [
                {
                    label: 'Rack A',
                    size: 42, // 42U, full-size
                    devices: [
                        {
                            id: 'test1',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test1', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1520, y: 1090 },
                        },
                        {
                            id: 'test2',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test2', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1500, y: 1000 },
                        },
                    ],
                    edges: [
                        {
                            id: 'test1-test2',
                            source: 'test1',
                            target: 'test2',
                            type: 'custom',
                            sourceLabel: 'Gi0/1',
                            targetLabel: 'Gi0/2',
                            status: 'up',
                            sourceIP: '2.2.2.2',
                            targetIP: '3.3.3.3',
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'SWD',
        type: 'mainNode',
        data: { nodeIp: '1.1.1.1', status: 'down', label: 'SWD' },
        style: { width: '70px', height: '34px' },
        position: { x: -316, y: 2498 },
        data: {
            nodeIp: '1.1.1.1',
            status: 'down',
            label: 'RTI',

            // ✅ Racks inside the node
            racks: [
                {
                    label: 'Rack A',
                    size: 42, // 42U, full-size
                    devices: [
                        {
                            id: 'test1',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test1', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1520, y: 1090 },
                        },
                        {
                            id: 'test2',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test2', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1500, y: 1000 },
                        },
                    ],
                    edges: [
                        {
                            id: 'test1-test2',
                            source: 'test1',
                            target: 'test2',
                            type: 'custom',
                            sourceLabel: 'Gi0/1',
                            targetLabel: 'Gi0/2',
                            status: 'up',
                            sourceIP: '2.2.2.2',
                            targetIP: '3.3.3.3',
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'NKR',
        type: 'mainNode',
        data: { nodeIp: '1.1.1.1', status: 'down', label: 'NKR' },
        style: { width: '70px', height: '34px' },
        position: { x: -170, y: 2588 },
        data: {
            nodeIp: '1.1.1.1',
            status: 'down',
            label: 'RTI',

            // ✅ Racks inside the node
            racks: [
                {
                    label: 'Rack A',
                    size: 42, // 42U, full-size
                    devices: [
                        {
                            id: 'test1',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test1', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1520, y: 1090 },
                        },
                        {
                            id: 'test2',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test2', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1500, y: 1000 },
                        },
                    ],
                    edges: [
                        {
                            id: 'test1-test2',
                            source: 'test1',
                            target: 'test2',
                            type: 'custom',
                            sourceLabel: 'Gi0/1',
                            targetLabel: 'Gi0/2',
                            status: 'up',
                            sourceIP: '2.2.2.2',
                            targetIP: '3.3.3.3',
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'ATR',
        type: 'mainNode',
        data: { nodeIp: '1.1.1.1', status: 'down', label: 'ATR' },
        style: { width: '70px', height: '34px' },
        position: { x: -48, y: 2674 },
        data: {
            nodeIp: '1.1.1.1',
            status: 'down',
            label: 'RTI',

            // ✅ Racks inside the node
            racks: [
                {
                    label: 'Rack A',
                    size: 42, // 42U, full-size
                    devices: [
                        {
                            id: 'test1',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test1', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1520, y: 1090 },
                        },
                        {
                            id: 'test2',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test2', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1500, y: 1000 },
                        },
                    ],
                    edges: [
                        {
                            id: 'test1-test2',
                            source: 'test1',
                            target: 'test2',
                            type: 'custom',
                            sourceLabel: 'Gi0/1',
                            targetLabel: 'Gi0/2',
                            status: 'up',
                            sourceIP: '2.2.2.2',
                            targetIP: '3.3.3.3',
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'ANI',
        type: 'mainNode',
        data: { nodeIp: '1.1.1.1', status: 'down', label: 'ANI' },
        style: { width: '70px', height: '34px' },
        position: { x: 78, y: 2762 },
        data: {
            nodeIp: '1.1.1.1',
            status: 'down',
            label: 'RTI',

            // ✅ Racks inside the node
            racks: [
                {
                    label: 'Rack A',
                    size: 42, // 42U, full-size
                    devices: [
                        {
                            id: 'test1',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test1', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1520, y: 1090 },
                        },
                        {
                            id: 'test2',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test2', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1500, y: 1000 },
                        },
                    ],
                    edges: [
                        {
                            id: 'test1-test2',
                            source: 'test1',
                            target: 'test2',
                            type: 'custom',
                            sourceLabel: 'Gi0/1',
                            targetLabel: 'Gi0/2',
                            status: 'up',
                            sourceIP: '2.2.2.2',
                            targetIP: '3.3.3.3',
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'KBCB',
        type: 'mainNode',
        data: { nodeIp: '1.1.1.1', status: 'down', label: 'KBCB' },
        style: { width: '70px', height: '34px' },
        position: { x: 254, y: 2842 },
        data: {
            nodeIp: '1.1.1.1',
            status: 'down',
            label: 'RTI',

            // ✅ Racks inside the node
            racks: [
                {
                    label: 'Rack A',
                    size: 42, // 42U, full-size
                    devices: [
                        {
                            id: 'test1',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test1', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1520, y: 1090 },
                        },
                        {
                            id: 'test2',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test2', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1500, y: 1000 },
                        },
                    ],
                    edges: [
                        {
                            id: 'test1-test2',
                            source: 'test1',
                            target: 'test2',
                            type: 'custom',
                            sourceLabel: 'Gi0/1',
                            targetLabel: 'Gi0/2',
                            status: 'up',
                            sourceIP: '2.2.2.2',
                            targetIP: '3.3.3.3',
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'KNW',
        type: 'mainNode',
        data: { nodeIp: '1.1.1.1', status: 'down', label: 'KNW' },
        style: { width: '70px', height: '34px' },
        position: { x: 364, y: 2934 },
        data: {
            nodeIp: '1.1.1.1',
            status: 'down',
            label: 'RTI',

            // ✅ Racks inside the node
            racks: [
                {
                    label: 'Rack A',
                    size: 42, // 42U, full-size
                    devices: [
                        {
                            id: 'test1',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test1', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1520, y: 1090 },
                        },
                        {
                            id: 'test2',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test2', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1500, y: 1000 },
                        },
                    ],
                    edges: [
                        {
                            id: 'test1-test2',
                            source: 'test1',
                            target: 'test2',
                            type: 'custom',
                            sourceLabel: 'Gi0/1',
                            targetLabel: 'Gi0/2',
                            status: 'up',
                            sourceIP: '2.2.2.2',
                            targetIP: '3.3.3.3',
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'MTA',
        type: 'mainNode',
        data: { nodeIp: '1.1.1.1', status: 'down', label: 'MTA' },
        style: { width: '70px', height: '34px' },
        position: { x: 422, y: 2720 },
        data: {
            nodeIp: '1.1.1.1',
            status: 'down',
            label: 'RTI',

            // ✅ Racks inside the node
            racks: [
                {
                    label: 'Rack A',
                    size: 42, // 42U, full-size
                    devices: [
                        {
                            id: 'test1',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test1', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1520, y: 1090 },
                        },
                        {
                            id: 'test2',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test2', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1500, y: 1000 },
                        },
                    ],
                    edges: [
                        {
                            id: 'test1-test2',
                            source: 'test1',
                            target: 'test2',
                            type: 'custom',
                            sourceLabel: 'Gi0/1',
                            targetLabel: 'Gi0/2',
                            status: 'up',
                            sourceIP: '2.2.2.2',
                            targetIP: '3.3.3.3',
                        },
                    ],
                },
            ],
        },
    },
    // others
    {
        id: 'CNN',
        type: 'mainNode',
        data: { nodeIp: '1.1.1.1', status: 'down', label: 'CNN' },
        style: { width: '70px', height: '34px' },
        position: { x: -638, y: 1450 },
        data: {
            nodeIp: '1.1.1.1',
            status: 'down',
            label: 'RTI',

            // ✅ Racks inside the node
            racks: [
                {
                    label: 'Rack A',
                    size: 42, // 42U, full-size
                    devices: [
                        {
                            id: 'test1',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test1', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1520, y: 1090 },
                        },
                        {
                            id: 'test2',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test2', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1500, y: 1000 },
                        },
                    ],
                    edges: [
                        {
                            id: 'test1-test2',
                            source: 'test1',
                            target: 'test2',
                            type: 'custom',
                            sourceLabel: 'Gi0/1',
                            targetLabel: 'Gi0/2',
                            status: 'up',
                            sourceIP: '2.2.2.2',
                            targetIP: '3.3.3.3',
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'LOD',
        type: 'mainNode',
        data: { nodeIp: '1.1.1.1', status: 'down', label: 'LOD' },
        style: { width: '70px', height: '34px' },
        position: { x: -722, y: 1592 },
        data: {
            nodeIp: '1.1.1.1',
            status: 'down',
            label: 'RTI',

            // ✅ Racks inside the node
            racks: [
                {
                    label: 'Rack A',
                    size: 42, // 42U, full-size
                    devices: [
                        {
                            id: 'test1',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test1', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1520, y: 1090 },
                        },
                        {
                            id: 'test2',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test2', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1500, y: 1000 },
                        },
                    ],
                    edges: [
                        {
                            id: 'test1-test2',
                            source: 'test1',
                            target: 'test2',
                            type: 'custom',
                            sourceLabel: 'Gi0/1',
                            targetLabel: 'Gi0/2',
                            status: 'up',
                            sourceIP: '2.2.2.2',
                            targetIP: '3.3.3.3',
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'RCJ',
        type: 'mainNode',
        data: { nodeIp: '1.1.1.1', status: 'down', label: 'RCJ' },
        style: { width: '70px', height: '34px' },
        position: { x: 218, y: 1328 },
        data: {
            nodeIp: '1.1.1.1',
            status: 'down',
            label: 'RTI',

            // ✅ Racks inside the node
            racks: [
                {
                    label: 'Rack A',
                    size: 42, // 42U, full-size
                    devices: [
                        {
                            id: 'test1',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test1', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1520, y: 1090 },
                        },
                        {
                            id: 'test2',
                            type: 'mainNode', // optional
                            height: 1, // takes 1U
                            data: { status: 'up', label: 'test2', nodeIp: '10.0.0.1' },
                            style: { width: '100px', height: '34px' },
                            position: { x: -1500, y: 1000 },
                        },
                    ],
                    edges: [
                        {
                            id: 'test1-test2',
                            source: 'test1',
                            target: 'test2',
                            type: 'custom',
                            sourceLabel: 'Gi0/1',
                            targetLabel: 'Gi0/2',
                            status: 'up',
                            sourceIP: '2.2.2.2',
                            targetIP: '3.3.3.3',
                        },
                    ],
                },
            ],
        },
    },
];
