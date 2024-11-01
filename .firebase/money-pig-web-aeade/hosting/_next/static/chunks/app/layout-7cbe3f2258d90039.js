(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [185],
  {
    2431: function () {},
    5228: function (e, r, s) {
      Promise.resolve().then(s.bind(s, 2702)),
        Promise.resolve().then(s.t.bind(s, 1086, 23)),
        Promise.resolve().then(s.t.bind(s, 4648, 23));
    },
    2702: function (e, r, s) {
      'use strict';
      s.r(r),
        s.d(r, {
          default: function () {
            return _;
          },
        });
      var t = s(9268),
        a = s(8709),
        o = s(5846),
        l = s.n(o),
        i = s(601),
        n = s(7805),
        c = s(7701),
        h = s(6182),
        d = s(7355),
        x = s(3092),
        m = s(5620),
        f = s(6924),
        b = s(6006),
        v = s(6394),
        p = s.n(v),
        u = () => {
          let [e, r] = (0, b.useState)(!1),
            [s, o] = (0, b.useState)('/'),
            { theme: v, setTheme: u } = (0, a.F)(),
            [j, w] = (0, b.useState)(!1),
            N = (0, b.useRef)();
          return (
            (0, b.useEffect)(() => {
              window.onscroll = () => {
                w(!0),
                  window.pageYOffset >= 200
                    ? N.current.classList.add('shadow')
                    : N.current.classList.remove('shadow');
              };
            }, []),
            (0, t.jsx)('div', {
              ref: N,
              className: ''.concat(
                'dark' === v ? 'bg-[#121212]' : 'bg-white text-black',
                ' w-full z-50 fixed top-0 left-0 py-4 mb-10'
              ),
              children: (0, t.jsxs)('div', {
                className:
                  'container px-5 md:px-16 flex items-center justify-between mx-auto',
                children: [
                  (0, t.jsx)(l(), {
                    href: '/',
                    children: (0, t.jsx)(p(), {
                      src: '/logo.png',
                      width: 0,
                      height: 0,
                      sizes: '100vw',
                      style: { width: '200px', height: 'auto' },
                      alt: 'hero Image',
                      className: 'object-contain mx-auto',
                    }),
                  }),
                  (0, t.jsx)('div', {
                    children: (0, t.jsxs)('ul', {
                      className: ''
                        .concat(!0 === e ? 'left-0' : '-left-full', ' ')
                        .concat(
                          'dark' === v ? 'text-white' : 'text-black',
                          ' z-50 flex md:items-center gap-1 md:gap-5 lg:gap-10 md:relative absolute top-0 md:left-0 w-80 transition-all duration-500 h-screen md:w-auto md:h-auto flex-col md:flex-row shadow-2xl py-24 px-10 md:p-0 md:shadow-none'
                        ),
                      children: [
                        (0, t.jsx)('button', {
                          className: ''.concat(
                            'dark' === v ? 'text-white' : 'text-black',
                            ' md:hidden absolute top-6 right-5'
                          ),
                          onClick: () => r(!1),
                          children: (0, t.jsx)(n.Z, {}),
                        }),
                        ['home', 'features', 'pricing', 'testimonial'].map(
                          (e) =>
                            (0, t.jsx)(
                              'li',
                              {
                                className: ''.concat(
                                  s === e ? 'text-rose-600' : '',
                                  ' capitalize border-b py-4 md:border-none md:py-0 hover:text-rose-600'
                                ),
                                onClick: () => o(e),
                                children: (0, t.jsx)(l(), {
                                  href: '#'.concat(e),
                                  children: e,
                                }),
                              },
                              e
                            )
                        ),
                        (0, t.jsxs)('div', {
                          className:
                            'md:hidden mx-auto absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-3',
                          children: [
                            (0, t.jsx)(l(), {
                              href: 'https://www.facebook.com/profile.php?id=100017192357822&sk',
                              target: '_blank',
                              children: (0, t.jsx)(c.Z, {
                                className:
                                  'cursor-pointer hover:text-rose-600 text-xl',
                              }),
                            }),
                            (0, t.jsx)(l(), {
                              target: '_blank',
                              href: 'https://www.linkedin.com/in/naseem-khan-275275258/',
                              children: (0, t.jsx)(h.Z, {
                                className:
                                  'cursor-pointer hover:text-rose-600 text-xl',
                              }),
                            }),
                            (0, t.jsx)(l(), {
                              target: '_blank',
                              href: 'https://github.com/NaseemKhan005/',
                              children: (0, t.jsx)(d.Z, {
                                className:
                                  'cursor-pointer hover:text-rose-600 text-xl',
                              }),
                            }),
                            (0, t.jsx)(l(), {
                              target: '_blank',
                              href: 'https://www.instagram.com/naseem_khan005/',
                              children: (0, t.jsx)(x.Z, {
                                className:
                                  'cursor-pointer hover:text-rose-600 text-xl',
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, t.jsxs)('div', {
                    className:
                      'flex items-center gap-2 sm:gap-4 md:gap-2 lg:gap-4',
                    children: [
                      (0, t.jsx)('button', {
                        className:
                          'capitalize text-sm sm:text-base border-2 hover:border-2 font-semibold sm:py-3 py-2 px-3 sm:px-6 text-rose-600 border-rose-600 hover:border-rose-600 hover:bg-rose-600 hover:text-white rounded-full',
                        children: (0, t.jsx)(l(), {
                          href: '#pricing',
                          children: 'Get Started',
                        }),
                      }),
                      (0, t.jsx)('button', {
                        children:
                          'dark' === v
                            ? (0, t.jsx)(f.Z, {
                                onClick: () => u('light'),
                                className: 'text-white',
                              })
                            : (0, t.jsx)(m.Z, { onClick: () => u('dark') }),
                      }),
                      (0, t.jsx)('button', {
                        'aria-label': 'menu',
                        className: ''.concat(
                          'dark' === v ? 'text-white' : 'text-black',
                          ' md:hidden'
                        ),
                        onClick: () => r(!0),
                        children: (0, t.jsx)(i.Z, {}),
                      }),
                    ],
                  }),
                ],
              }),
            })
          );
        },
        j = s(5311),
        w = () =>
          (0, t.jsx)('footer', {
            className:
              'border-t border-neutral-200 mt-16 px-5 md:px-16 py-10 md:py-16',
            children: (0, t.jsxs)('div', {
              className: 'container mx-auto',
              children: [
                (0, t.jsxs)('div', {
                  className: 'grid grid-cols-1 gap-8 lg:grid-cols-3',
                  children: [
                    (0, t.jsxs)('div', {
                      children: [
                        (0, t.jsxs)(l(), {
                          href: '/',
                          className: 'text-3xl',
                          children: [
                            (0, t.jsx)('span', {
                              className: 'text-rose-600',
                              children: 'N',
                            }),
                            'aseem.',
                          ],
                        }),
                        (0, t.jsx)('p', {
                          className: 'max-w-xs mt-4 text-sm',
                          children:
                            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, accusantium.',
                        }),
                        (0, t.jsxs)('div', {
                          className: 'flex mt-8 space-x-6',
                          children: [
                            (0, t.jsx)(l(), {
                              href: 'https://www.facebook.com/profile.php?id=100017192357822&sk',
                              target: '_blank',
                              children: (0, t.jsx)(c.Z, {
                                className:
                                  'hover:text-rose-600 hover:-translate-y-1 transition-all',
                              }),
                            }),
                            (0, t.jsx)(l(), {
                              href: 'https://github.com/NaseemKhan005',
                              target: '_blank',
                              children: (0, t.jsx)(d.Z, {
                                className:
                                  'hover:text-rose-600 hover:-translate-y-1 transition-all',
                              }),
                            }),
                            (0, t.jsx)(l(), {
                              href: 'https://www.linkedin.com/in/naseem-khan-275275258/',
                              target: '_blank',
                              children: (0, t.jsx)(h.Z, {
                                className:
                                  'hover:text-rose-600 hover:-translate-y-1 transition-all',
                              }),
                            }),
                            (0, t.jsx)(l(), {
                              href: 'https://twitter.com/NaseemK69128903',
                              target: '_blank',
                              children: (0, t.jsx)(j.Z, {
                                className:
                                  'hover:text-rose-600 hover:-translate-y-1 transition-all',
                              }),
                            }),
                            (0, t.jsx)(l(), {
                              href: 'https://www.instagram.com/naseem_khan005/',
                              target: '_blank',
                              children: (0, t.jsx)(x.Z, {
                                className:
                                  'hover:text-rose-600 hover:-translate-y-1 transition-all',
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, t.jsxs)('div', {
                      className:
                        'grid gap-8 lg:col-span-2 grid-cols-2 md:grid-cols-4',
                      children: [
                        (0, t.jsxs)('div', {
                          children: [
                            (0, t.jsx)('p', {
                              className: 'font-medium',
                              children: 'Company',
                            }),
                            (0, t.jsxs)('nav', {
                              className: 'flex flex-col mt-4 space-y-2 text-sm',
                              children: [
                                (0, t.jsx)(l(), {
                                  href: '/',
                                  className:
                                    'hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit',
                                  children: 'About',
                                }),
                                (0, t.jsx)(l(), {
                                  href: '/',
                                  className:
                                    'hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit',
                                  children: 'Meet the Team',
                                }),
                                (0, t.jsx)(l(), {
                                  href: '/',
                                  className:
                                    'hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit',
                                  children: 'History',
                                }),
                                (0, t.jsx)(l(), {
                                  href: '/',
                                  className:
                                    'hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit',
                                  children: 'Careers',
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, t.jsxs)('div', {
                          children: [
                            (0, t.jsx)('p', {
                              className: 'font-medium',
                              children: 'Services',
                            }),
                            (0, t.jsxs)('nav', {
                              className:
                                'flex flex-col mt-4 space-y-2 text-sm ',
                              children: [
                                (0, t.jsx)(l(), {
                                  href: '/',
                                  className:
                                    'hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit',
                                  children: 'Coaching',
                                }),
                                (0, t.jsx)(l(), {
                                  href: '/',
                                  className:
                                    'hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit',
                                  children: 'Company Review',
                                }),
                                (0, t.jsx)(l(), {
                                  href: '/',
                                  className:
                                    'hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit',
                                  children: 'Accounts Review',
                                }),
                                (0, t.jsx)(l(), {
                                  href: '/',
                                  className:
                                    'hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit',
                                  children: 'HR Consulting',
                                }),
                                (0, t.jsx)(l(), {
                                  href: '/',
                                  className:
                                    'hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit',
                                  children: 'SEO Optimisation',
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, t.jsxs)('div', {
                          children: [
                            (0, t.jsx)('p', {
                              className: 'font-medium',
                              children: 'Helpful Links',
                            }),
                            (0, t.jsxs)('nav', {
                              className:
                                'flex flex-col mt-4 space-y-2 text-sm ',
                              children: [
                                (0, t.jsx)(l(), {
                                  href: '/',
                                  className:
                                    'hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit',
                                  children: 'Contact',
                                }),
                                (0, t.jsx)(l(), {
                                  href: '/',
                                  className:
                                    'hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit',
                                  children: 'FAQs',
                                }),
                                (0, t.jsx)(l(), {
                                  href: '/',
                                  className:
                                    'hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit',
                                  children: 'Live Chat',
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, t.jsxs)('div', {
                          children: [
                            (0, t.jsx)('p', {
                              className: 'font-medium',
                              children: 'Legal',
                            }),
                            (0, t.jsxs)('nav', {
                              className:
                                'flex flex-col mt-4 space-y-2 text-sm ',
                              children: [
                                (0, t.jsx)(l(), {
                                  href: '/',
                                  className:
                                    'hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit',
                                  children: 'Privacy Policy',
                                }),
                                (0, t.jsx)(l(), {
                                  href: '/',
                                  className:
                                    'hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit',
                                  children: 'Terms & Conditions',
                                }),
                                (0, t.jsx)(l(), {
                                  href: '/',
                                  className:
                                    'hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit',
                                  children: 'Returns Policy',
                                }),
                                (0, t.jsx)(l(), {
                                  href: '/',
                                  className:
                                    'hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit',
                                  children: 'Accessibility',
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, t.jsx)('p', {
                  className: 'mt-8 text-xs',
                  children: '\xa9 2022 Naseem Khan - All rights reserved',
                }),
              ],
            }),
          }),
        N = s(6249),
        g = () => {
          let e = (0, b.useRef)();
          return (
            (0, b.useEffect)(() => {
              window.onscroll = () => {
                window.pageYOffset >= 200
                  ? e.current.classList.add('right-8')
                  : e.current.classList.remove('right-8');
              };
            }, []),
            (0, t.jsx)('div', {
              className: 'overflow-hidden',
              children: (0, t.jsx)('button', {
                'aria-label': 'arrow',
                className:
                  'fixed bottom-4 -right-full transition-all duration-500 shadow-2xl shadow-black text-gray-500 bg-white hover:bg-[#ececec] p-2 rounded',
                onClick: () => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                },
                ref: e,
                children: (0, t.jsx)(N.Z, {}),
              }),
            })
          );
        },
        y = s(4576),
        k = s.n(y),
        _ = (e) => {
          let { children: r } = e,
            [s, o] = (0, b.useState)(!1);
          return ((0, b.useEffect)(() => {
            o(!0);
          }, []),
          s)
            ? (0, t.jsxs)(a.f, {
                attribute: 'class',
                enableSystem: !1,
                children: [
                  (0, t.jsx)(k(), {
                    color: '#FF79A7',
                    startPosition: 0.3,
                    stopDelayMs: 200,
                    height: 3,
                    showOnShallow: !0,
                    options: { easing: 'ease-in-out', speed: 500 },
                  }),
                  (0, t.jsx)(u, {}),
                  r,
                  (0, t.jsx)(g, {}),
                  (0, t.jsx)(w, {}),
                ],
              })
            : (0, t.jsx)(t.Fragment, { children: r });
        };
    },
    4648: function () {},
  },
  function (e) {
    e.O(0, [154, 69, 253, 769, 744], function () {
      return e((e.s = 5228));
    }),
      (_N_E = e.O());
  },
]);
