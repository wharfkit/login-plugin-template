# @wharfkit/login-plugin-template

A template to create a `LoginPlugin` for use during a `login` call within the `@wharfkit/session` library.

## Usage

-   [Use this as a template.](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template)
-   Write your plugin's logic. For more information on how to do this, see the [Wharf Login Plugin Documentation](https://wharfkit.com/docs/session-kit/plugin-login)
-   Publish it on Github or npmjs.com
-   Include it in your Wharf project and use it:
    
```ts
    import { SessionKit } from "@wharfkit/session";
    import { YourLoginPlugin } from "your-login-plugin";

    const sessionKit = new SessionKit(
        {
            // ...arguments
        },
        {
            loginPlugins: [new YourLoginPlugin()],
        }
    );
```

## Developing

You need [Make](https://www.gnu.org/software/make/), [node.js](https://nodejs.org/en/) and [yarn](https://classic.yarnpkg.com/en/docs/install) installed.

Clone the repository and run `make` to checkout all dependencies and build the project. See the [Makefile](./Makefile) for other useful targets. Before submitting a pull request make sure to run `make lint`.

---

Made with ☕️ & ❤️ by [Greymass](https://greymass.com), if you find this useful please consider [supporting us](https://greymass.com/support-us).
