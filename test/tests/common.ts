import {mockFetch} from '$test/utils/mock-fetch'
import {MockUserInterface} from '$test/utils/mock-ui'

import {LoginPluginTemplate} from '../../src/index'

import {SessionKit, SessionKitOptions} from '@wharfkit/session'
import {WalletPluginPrivateKey} from '@wharfkit/wallet-plugin-privatekey'

const wallet = new WalletPluginPrivateKey('5Jtoxgny5tT7NiNFp1MLogviuPJ9NniWjnU4wKzaX4t7pL4kJ8s')

const mockSessionKitOptions: SessionKitOptions = {
    appName: 'myapp',
    chains: [
        {
            id: '73e4385a2708e6d7048834fbc1079f2fabb17b3c125b146af438971e90716c4d',
            url: 'http://jungle4.greymass.com',
        },
    ],
    fetch: mockFetch,
    loginPlugins: [new LoginPluginTemplate()],
    ui: new MockUserInterface(),
    walletPlugins: [wallet],
}

suite('example', function () {
    test('plugin usage', async function () {
        const kit = new SessionKit(mockSessionKitOptions)
        const result = await kit.login()
        console.log(result)
    })
})
