import { ifWe, ifWeMight, iReckon, respecfully } from '@ibgib/helper-gib/dist/respec-gib/respec-gib.mjs';
const maam = `[${import.meta.url}]`, sir = maam;

import { foo } from './helper.mjs';

await respecfully(sir, `nada yet`, async () => {
    // unsure if these would change when not in V1...(these tests are outside V1 atow)

    await ifWe(maam, `do a reckoning or something`, async () => {
        foo();
        iReckon(maam, true).isGonnaBeTrue();
    });

});
