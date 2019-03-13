// @flow strict

import diskusage from 'diskusage';
import { describe, it } from 'flow-typed-test';

describe('diskusage tests', function() {
    it('returns disk usage synchronously', function() {
        const usage = diskusage.checkSync('./');

        const available: number = usage.available;
        const free: number = usage.free;
        const total: number = usage.total;

        // $ExpectError
        diskusage.checkSync(1);
        // $ExpectError
        diskusage.checkSync('./', () => {});
        // $ExpectError
        (usage.space: number);
    });

    it('returns disk usage via callback', function() {
        let available: number = 0;
        let free: number = 0;
        let total: number = 0;

        diskusage.check('./', (error, result) => {
            available = result.available;
            free = result.free;
            total = result.total;

            // $ExpectError
            available = result.space;
        })

        // $ExpectError
        diskusage.check('./', '');
        // $ExpectError
        diskusage.check(1, () => {});
    });

    it('returns disk usage via promise', async function() {
        const usage = await diskusage.check('./');

        const available: number = usage.available;
        const free: number = usage.free;
        const total: number = usage.total;

        // $ExpectError
        await diskusage.check(1);
        // $ExpectError
        (usage.space: number);
    });
});
