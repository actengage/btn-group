const plugin = require('tailwindcss/plugin');
const sizes = require('@vue-interface/btn/tailwindcss/sizes');

module.exports = plugin(function({ addComponents, matchComponents, theme }) {
    // const component = {
    //     // stylelint-disable selector-no-qualifying-type
    //     // Make the div behave like a button
    //     '.btn-group, .btn-group-vertical': {
    //         position: 'relative',
    //         display: 'inline-flex',
    //         verticalAlign: 'middle', // match .btn alignment given font-size hack above

    //         '> .btn': {
    //             position: 'relative',
    //             flex: '1 1 auto',

    //             // Bring the hover, focused, and "active" buttons to the front to overlay
    //             // the borders properly
    //             '&:hover, &:focus, &:active, &.active': {
    //                 zIndex: 1
    //             }
    //         }
    //     },

    //     // Optional: Group multiple button groups together for a toolbar
    //     '.btn-toolbar': {
    //         display: 'flex',
    //         flexWrap: 'wrap',
    //         justifyContent: 'flex-start',

    //         '.input-group': {
    //             width: 'auto'
    //         }
    //     },

    //     '.btn-group': {
    //         // Prevent double borders when buttons are next to each other
    //         '> .btn:not(:first-child), > .btn-group:not(:first-child)': {
    //             marginLeft: `-${theme('btn.borderWidth')}`
    //         },

    //         // Reset rounded corners
    //         '> .btn:not(:last-child):not(.dropdown-toggle), > .btn-group:not(:last-child) > .btn': {
    //             borderTopRightRadius: 0,
    //             borderBottomRightRadius: 0
    //         },

    //         '> .btn:not(:first-child), > .btn-group:not(:first-child) > .btn': {
    //             borderTopLeftRadius: 0,
    //             borderBottomLeftRadius: 0
    //         }
    //     },

    //     //
    //     // Split button dropdowns
    //     //
    //     '.dropdown-toggle-split': {
    //         paddingRight: `calc(${theme('btn.paddingX')} * .75)`,
    //         paddingLeft: `calc(${theme('btn.paddingX')} * .75)`,

    //         '&::after, .dropup &::after, .dropright &::after': {
    //             marginLeft: 0
    //         },

    //         '.dropleft &::before': {
    //             marginRight: 0
    //         }
    //     },

    //     // The clickable button for toggling the menu
    //     // Set the same inset shadow as the :active state
    //     '.btn-group.show .dropdown-toggle': {
    //         boxShadow: theme('btn.active.boxShadow'),

    //         // Show no shadow for `.btn-link` since it has no other button styles.
    //         '&.btn-link': {
    //             boxShadow: 'none'
    //         }
    //     },

    //     //
    //     // Vertical button groups
    //     //

    //     '.btn-group-vertical': {
    //         flexDirection: 'column',
    //         alignItems: 'flex-start',
    //         justifyContent: 'center',

    //         '> .btn, > .btn-group': {
    //             width: '100%'
    //         },

    //         '> .btn:not(:first-child), > .btn-group:not(:first-child)': {
    //             marginTop: `-${theme('btn.borderWidth')}`
    //         },

    //         // Reset rounded corners
    //         '> .btn:not(:last-child):not(.dropdown-toggle), > .btn-group:not(:last-child) > .btn': {
    //             borderBottomLeftRadius: 0,
    //             borderBottomRightRadius: 0
    //         },

    //         '> .btn:not(:first-child), > .btn-group:not(:first-child) > .btn': {
    //             borderTopLeftRadius: 0,
    //             borderTopRightRadius: 0
    //         }
    //     },


    //     // Checkbox and radio options
    //     //
    //     // In order to support the browser's form validation feedback, powered by the
    //     // `required` attribute, we have to "hide" the inputs via `clip`. We cannot use
    //     // `display: none;` or `visibility: hidden;` as that also hides the popover.
    //     // Simply visually hiding the inputs via `opacity` would leave them clickable in
    //     // certain cases which is prevented by using `clip` and `pointer-events`.
    //     // This way, we ensure a DOM element is visible to position the popover from.
    //     //
    //     // See https://github.com/twbs/bootstrap/pull/12794 and
    //     // https://github.com/twbs/bootstrap/pull/14559 for more information.

    //     '.btn-group-toggle': {
    //         '> .btn, > .btn-group > .btn': {
    //             'input[type="radio"], input[type="checkbox"]': {
    //                 position: 'absolute',
    //                 clip: 'rect(0, 0, 0, 0)',
    //                 pointerEvents: 'none'
    //             }
    //         }
    //     }
    // };

    addComponents(theme('btnGroup.css'));

    // addComponents({
    //     '.btn-dropdown': theme('btnGroup.css')
    // });

    matchComponents({
        'btn-group': ({ padding, paddingX, borderRadius, fontSize }) => ({
            '&.btn-group, &.BtnGroup, &.btn-dropdown.btn-group': {
                '.btn': {
                    padding,
                    borderRadius,
                    fontSize,
                },

                '.dropdown-toggle:not(.dropdown-toggle-split)::after': {
                    marginLeft: `calc(${padding.split(' ')[0]} * .75)`
                },

                '.dropdown-toggle-split': {
                    paddingRight: `calc(${padding.split(' ')[0]} * .75)`,
                    paddingLeft: `calc(${padding.split(' ')[0]} * .75)`
                }
            },
        })
    }, {
        values: theme('btnGroup.sizes')
    });
}, {
    theme: {
        btnGroup: theme => ({
            css: {
                // stylelint-disable selector-no-qualifying-type
                // Make the div behave like a button
                // stylelint-disable selector-no-qualifying-type
                // Make the div behave like a button
                '.btn-group, .BtnGroup, .btn-dropdown.btn-group, .BtnDropdown.btn-group': {
                    position: 'relative',
                    display: 'inline-flex',
                    verticalAlign: 'middle', // match .btn alignment given font-size hack above

                    //
                    // Horizontal button groups
                    //
                    '&:not(.btn-group-vertical)': {
                        // Prevent double borders when buttons are next to each other
                        '> .btn:not(:first-child), > .btn-group:not(:first-child)': {
                            marginLeft: `-1px`
                        },

                        // Reset rounded corners
                        '> .btn:not(:last-child):not(.dropdown-toggle), > .btn-group:not(:last-child) .btn': {
                            borderTopRightRadius: 0,
                            borderBottomRightRadius: 0
                        },

                        '> .btn:not(:first-child), > .btn-group:not(:first-child) .btn': {
                            borderTopLeftRadius: 0,
                            borderBottomLeftRadius: 0
                        },
                    },

                    //
                    // Vertical button groups
                    //
                    '&.btn-group-vertical': {
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        justifyContent: 'center',

                        '> .btn, > .btn-group': {
                            width: '100%'
                        },

                        '> .btn:not(:first-child), > .btn-group:not(:first-child)': {
                            marginTop: `-1px`
                        },

                        // Reset rounded corners
                        '> .btn:not(:last-child):not(.dropdown-toggle), > .btn-group:not(:last-child) .btn': {
                            borderBottomLeftRadius: 0,
                            borderBottomRightRadius: 0
                        },

                        '> .btn:not(:first-child), > .btn-group:not(:first-child) .btn': {
                            borderTopLeftRadius: 0,
                            borderTopRightRadius: 0
                        }
                    },

                    '> .btn': {
                        position: 'relative',
                        flex: '1 1 auto',

                        // Bring the hover, focused, and "active" buttons to the front to overlay
                        // the borders properly
                        '&:hover, &:focus, &:active, &.active': {
                            zIndex: 1
                        }
                    },

                    // Split button dropdowns
                    //
                    '.dropdown-toggle-split': {
                        paddingRight: 'calc(.375rem * .75)',
                        paddingLeft: 'calc(.375rem * .75)',

                        '&::after, .dropup &::after, .dropright &::after': {
                            marginLeft: 0
                        },

                        '.dropleft &::before': {
                            marginRight: 0
                        }
                    },

                    '.dropdown-toggle': {
                        whiteSpace: 'nowrap',
                    },
                
                    '.dropdown-toggle::after': {
                        display: 'inline-block',
                        verticalAlign: 'calc(.3em * .85)',
                        content: '""',
                        margin: '0 .15em',
                        borderTop: '.3em solid',
                        borderRight: '.3em solid transparent',
                        borderBottom: 0,
                        borderLeft: '.3em solid transparent',
                    },

                    '.dropdown-toggle:not(.dropdown-toggle-split)::after': {
                        marginLeft: 'calc(.375rem * .75)'
                    },

                    // Allow for dropdowns to go bottom up (aka, dropup-menu)
                    // Just add .dropup after the standard .dropdown class and you're set.
                    // '&.dropup': {
                    // },
    
                    '&.dropup .dropdown-toggle::after': {
                        display: 'inline-block',
                        verticalAlign: 'calc(.3em * .85)',
                        content: '""',
                        borderTop: 0,
                        borderRight: '.3em solid transparent',
                        borderBottom: '.3em solid',
                        borderLeft: '.3em solid transparent',
                        top: 'auto',
                        bottom: '100%',
                        marginTop: 0,
                    },
        
                    '&.dropright .dropdown-toggle::after': {
                        display: 'inline-block',
                        verticalAlign: 'calc(.3em * .85)',
                        content: '""',
                        borderTop: '.3em solid transparent',
                        borderRight: 0,
                        borderBottom: '.3em solid transparent',
                        borderLeft: '.3em solid',
                        verticalAlign: 0,
                        top: 0,
                        right: 'auto',
                        left: '100%',
                        marginTop: 0,
                    },
        
                    '&.dropleft .dropdown-toggle::after': {
                        display: 'none'
                    }, 

                    '&.dropleft .dropdown-toggle::before': {
                        display: 'inline-block',
                        verticalAlign: 'calc(.3em * .85)',
                        content: '""',
                        margin: '0 .15em',
                        borderTop: '.3em solid transparent',
                        borderLeft: 0,
                        borderBottom: '.3em solid transparent',
                        borderRight: '.3em solid',
                        verticalAlign: 0,
                        top: 0,
                        right: '100%',
                        left: 'auto',
                        marginTop: 0,
                    },
                },
            },
            sizes: theme('btn.sizes', sizes)
        })
    }
});