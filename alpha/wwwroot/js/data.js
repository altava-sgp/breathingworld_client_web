'use strict';
const Data = {
    Weed: {
        CacheExpireMillis: 60000,
        DistrictDataUpdateTime: [],
        DistrictData: [],
        DistrictIdsBucket: new Set(),
        UserPaused: false,
    },
    AnimalMoving: {
        timeouts: [],
        timeoutIntervals: [],
        movingTileIds: [],
        reservedTiles: [],
    },
};