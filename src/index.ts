import {AbstractLoginPlugin, LoginContext, LoginHookTypes} from '@wharfkit/session'

/** Import JSON localization strings */
import defaultTranslations from './translations'

export class LoginPluginTemplate extends AbstractLoginPlugin {
    /** A unique ID for this plugin */
    id = 'login-plugin-template'

    /** Optional - The translation strings to use for the plugin */
    translations = defaultTranslations

    /**
     * Register the hooks required for this plugin to function
     *
     * @param context The LoginContext of the login process being performed
     */
    register(context: LoginContext): void {
        // Optional - Retrieve the translation function from the UI if it exists
        let t
        if (context.ui) {
            t = context.ui.getTranslate()
        }

        // Register any desired beforeSign hooks
        context.addHook(LoginHookTypes.beforeLogin, async (context): Promise<void> => {
            // If this plugin is interacting with the UI, throw an error since this is an undefined function
            if (context.ui) {
                throw new Error(
                    // Translate the error message against the given key or use the default value as English
                    t('beforelogin', {
                        default: 'undefined beforeSign hook called from plugin template',
                    })
                )
            } else {
                // eslint-disable-next-line no-console
                console.log('undefined beforeSign hook called with', context)
            }
            return
        })

        // Register any desired afterSign hooks
        context.addHook(LoginHookTypes.afterLogin, async (context): Promise<void> => {
            // If this plugin is interacting with the UI, throw an error since this is an undefined function
            if (context.ui) {
                throw new Error(
                    // Translate the error message against the given key or use the default value as English
                    t('afterlogin', {
                        default: 'undefined afterSign hook called from plugin template',
                    })
                )
            } else {
                // eslint-disable-next-line no-console
                console.log('undefined afterSign hook called with', context)
            }
            return
        })
    }
}
