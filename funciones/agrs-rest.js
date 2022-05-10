"use strict";
(() => {
    const fullName = (firstName, ...restAgrs) => {
        return `${firstName} ${restAgrs.join(' ')}`;
    };
    const superman = fullName('clark', 'Joseph', 'Kent');
    console.log({ superman });
})();
