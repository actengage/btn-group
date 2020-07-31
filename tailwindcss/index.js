const plugin = require('tailwindcss/plugin');

module.exports = plugin(function({ addComponents, theme }) {
    const component = {
        // stylelint-disable selector-no-qualifying-type
        // Make the div behave like a button
        '.btn-group, .btn-group-vertical': {
            position: 'relative',
            display: 'inline-flex',
            verticalAlign: 'middle', // match .btn alignment given font-size hack above

            '> .btn': {
                position: 'relative',
                flex: '1 1 auto',

                // Bring the hover, focused, and "active" buttons to the front to overlay
                // the borders properly
                '&:hover, &:focus, &:active, &.active': {
                    zIndex: 1
                }
            }
        },

        // Optional: Group multiple button groups together for a toolbar
        '.btn-toolbar': {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'flex-start',

            '.input-group': {
                width: 'auto'
            }
        },

        '.btn-group': {
            // Prevent double borders when buttons are next to each other
            '> .btn:not(:first-child), > .btn-group:not(:first-child)': {
                marginLeft: -theme('btn.borderWidth')
            },

            // Reset rounded corners
            '> .btn:not(:last-child):not(.dropdown-toggle), > .btn-group:not(:last-child) > .btn': {
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0
            },

            '> .btn:not(:first-child), > .btn-group:not(:first-child) > .btn': {
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0
            }
        },

        // Sizing
        //
        // Remix the default button sizing classes into new ones for easier manipulation.

        '.btn-group-sm > .btn': {
            padding: `${theme('btn.sm.paddingY')} ${theme('btn.sm.paddingX')}`,
            borderRadius: theme('btn.sm.borderRadius'),
            fontSize: theme('btn.sm.fontSize'),
        },

        '.btn-group-lg > .btn': {
            padding: `${theme('btn.lg.paddingY')} ${theme('btn.lg.paddingX')}`,
            borderRadius: theme('btn.lg.borderRadius'),
            fontSize: theme('btn.lg.fontSize'),
        },

        //
        // Split button dropdowns
        //
        '.dropdown-toggle-split': {
            'paddingRight': `calc(${theme('btn.paddingX')} * .75)`,
            'paddingLeft': `calc(${theme('btn.paddingX')} * .75)`,

            '&::after, .dropup &::after, .dropright &::after': {
                marginLeft: 0
            },

            '.dropleft &::before': {
                marginRight: 0
            }
        },

        '.btn-sm + .dropdown-toggle-split': {
            'paddingRight': `calc(${theme('btn.sm.paddingX')} * .75)`,
            'paddingLeft': `calc(${theme('btn.sm.paddingX')} * .75)`,
        },

        '.btn-lg + .dropdown-toggle-split': {
            'paddingRight': `calc(${theme('btn.lg.paddingX')} * .75)`,
            'paddingLeft': `calc(${theme('btn.lg.paddingX')} * .75)`,
        },

        // The clickable button for toggling the menu
        // Set the same inset shadow as the :active state
        '.btn-group.show .dropdown-toggle': {
            boxShadow: theme('btn.active.boxShadow'),

            // Show no shadow for `.btn-link` since it has no other button styles.
            '&.btn-link': {
                boxShadow: 'none'
            }
        },

        //
        // Vertical button groups
        //

        '.btn-group-vertical': {
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',

            '> .btn, > .btn-group': {
                width: '100%'
            },

            '> .btn:not(:first-child), > .btn-group:not(:first-child)': {
                marginTop: -theme('btn.borderWidth')
            },

            // Reset rounded corners
            '> .btn:not(:last-child):not(.dropdown-toggle), > .btn-group:not(:last-child) > .btn': {
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0
            },

            '> .btn:not(:first-child), > .btn-group:not(:first-child) > .btn': {
                borderTopLeftRadius: 0,
                borderTopRightRadius: 0
            }
        },


        // Checkbox and radio options
        //
        // In order to support the browser's form validation feedback, powered by the
        // `required` attribute, we have to "hide" the inputs via `clip`. We cannot use
        // `display: none;` or `visibility: hidden;` as that also hides the popover.
        // Simply visually hiding the inputs via `opacity` would leave them clickable in
        // certain cases which is prevented by using `clip` and `pointer-events`.
        // This way, we ensure a DOM element is visible to position the popover from.
        //
        // See https://github.com/twbs/bootstrap/pull/12794 and
        // https://github.com/twbs/bootstrap/pull/14559 for more information.

        '.btn-group-toggle': {
            '> .btn, > .btn-group > .btn': {
                'input[type="radio"], input[type="checkbox"]': {
                    position: 'absolute',
                    clip: 'rect(0, 0, 0, 0)',
                    pointerEvents: 'none'
                }
            }
        }
    };

    addComponents(component);
}, {
    theme: {
        btnGroup: theme => ({
            //
        })
    }
});