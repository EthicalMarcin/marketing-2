import React from 'react';
export const Nav20DataSource = {
  isScrollLink: true,
  wrapper: { className: 'header2 home-page-wrapper' },
  page: { className: 'home-page' },
  logo: {
    className: 'header2-logo',
    children: 'https://i.imgur.com/pLF6X63.png',
  },
  LinkMenu: {
    className: 'header2-menu',
    children: [
      {
        name: 'Banner1_1',
        to: 'Banner1_1',
        children: 'Home',
        className: 'menu-item',
      },
      {
        name: 'Feature2_0',
        to: 'Feature2_0',
        children: 'Kontakt',
        className: 'menu-item',
      },
      {
        name: 'Feature6_0',
        to: 'Feature6_0',
        children: 'Oferta',
        className: 'menu-item',
      },
      {
        name: 'Feature5_0',
        to: 'Feature5_0',
        children: 'Ciekawostki',
        className: 'menu-item',
      },
      {
        name: 'Contact0_0',
        to: 'Contact0_0',
        children: 'Mapa  Dojazdu',
        className: 'menu-item',
      },
      {
        name: 'Feature0_0',
        to: 'Feature0_0',
        children: 'Ostatnie Realizacje',
        className: 'menu-item',
      },
      {
        name: 'Feature4_0',
        to: 'Feature4_0',
        children: 'Praca',
        className: 'menu-item',
      },
    ],
  },
  mobileMenu: { className: 'header2-mobile-menu' },
};
export const Banner11DataSource = {
  wrapper: { className: 'banner1' },
  BannerAnim: {
    children: [
      {
        name: 'elem0',
        BannerElement: { className: 'banner-user-elem' },
        textWrapper: { className: 'banner1-text-wrapper' },
        bg: { className: 'bg bg0 k3gq4epk0sh-editor_css' },
        title: {
          className: 'banner1-title',
          children:
            'https://www.freelogodesign.org/file/app/client/thumb/06d6aa41-819c-42e9-9593-20a64f04e519_200x200.png?1574800543967',
        },
        content: {
          className: 'banner1-content k3gq79tijw-editor_css',
          children: (
            <>
              <p>Dowieziemy Wszystko</p>
            </>
          ),
        },
        button: {
          className: 'banner1-button',
          children: (
            <>
              <p>Contact Us</p>
            </>
          ),
          href: 'Contact Us',
        },
      },
      {
        name: 'elem1',
        BannerElement: { className: 'banner-user-elem' },
        textWrapper: {
          className: 'banner1-text-wrapper k3gr6221a9k-editor_css',
        },
        bg: { className: 'bg bg1 k3gqawc5p5k-editor_css' },
        title: {
          className: 'banner1-title k3grfhenfm9-editor_css',
          children: (
            <>
              <p>O nas</p>
            </>
          ),
        },
        content: {
          className: 'banner1-content k3grad3h40a-editor_css',
          children: (
            <>
              <p>

              </p>
            </>
          ),
        },
        button: {
          className: 'banner1-button',
          children: (
            <>
              <p>Skontaktuj się z nami</p>
            </>
          ),
          href: 'https://docs.google.com/forms/d/1lKZl0V1i8PZPOuayQrG5CpYeBK-LaGSmc64_Xf-uLsI/viewform?edit_requested=true',
        },
      },
      {
        name: 'elem2',
        BannerElement: { className: 'banner-user-elem' },
        textWrapper: {
          className: 'banner1-text-wrapper k3gs9wr60f7-editor_css',
        },
        bg: { className: 'bg bg1 k3gr896x7oj-editor_css' },
        title: {
          className: 'banner1-title',
          children: (
            <>
              <p>Oferta</p>
            </>
          ),
        },
        content: {
          className: 'banner1-content k3gs8pbae7n-editor_css',
          children: (
            <>
              <p>
                dsadasdadadsafdsafdsasdfadfsfdsafdsfafsdadfsadfsdfsdfadafsasdfdfsadfsaadfsdfsadfsdfsaadsfdfsaadfsdfsdfsadfsafffffffffffffffffffdfsadff&nbsp;
                afsfasdfsadfsdafsda fasfadfsdsdffsadsafd fdfsaddfsafdsdfsaafsdfa
                afafsdfadsdfsfsaddfas ffasfdsaadfsfadsa afsdffadssfadfds
                affasdafsdafdsfadsfadfadsfads afdsfadsfadsfdasafdsfdas
                ffadafsdfsadfdsafdasfadsffad adfsfadsfadsfadsaf
                adfsadfsfdafdasfdas adfsadfsfdafdas afdfadsfadsfadsafd
                adfafdfadfadsaf affadsafsdfadsafdsafds afdsafsdasdfafdsafd
                afdafdsdfsaadfsadf afsdsadfafdsfsadafdaf afdsdsafdfasdfsaasdf
                dfafaddfasfadafds af
              </p>
            </>
          ),
        },
        button: { className: 'banner1-button', children: 'Learn More' },
      },
    ],
    type: ['across'],
  },
};
export const Feature20DataSource = {
  wrapper: {
    className: 'home-page-wrapper content2-wrapper k3gav5xhs4i-editor_css',
  },
  OverPack: { className: 'home-page content2', playScale: 0.3 },
  imgWrapper: { className: 'content2-img', md: 10, xs: 24 },
  img: {
    children:
      'https://www.freelogodesign.org/file/app/client/thumb/06d6aa41-819c-42e9-9593-20a64f04e519_200x200.png?1574800543967',
    className: 'k3gaw3wr4e7-editor_css',
  },
  textWrapper: {
    className: 'content2-text k3g9rdhjsau-editor_css',
    md: 14,
    xs: 24,
  },
  title: {
    className: 'content2-title k3g9ozbf1c-editor_css',
    children: (
      <>
        <p>Kontakt:</p>
      </>
    ),
  },
  content: {
    className: 'content2-content k3g9omebxy-editor_css',
    children: (
      <>
        <p>Adres: Wólczańska 226 Łódź</p>
        <p>tel: 737 737 737</p>
        <p>email: Trans@bart.com</p>
        <p>
          <br />
        </p>
      </>
    ),
  },
};
export const Feature50DataSource = {
  wrapper: { className: 'home-page-wrapper content7-wrapper' },
  page: { className: 'home-page content7' },
  OverPack: {},
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <>
            <p>Oferta</p>
          </>
        ),
        className: 'title-h1',
      },
      { name: 'content', children: '基于阿里云计算强大的基础资源' },
    ],
  },
  tabsWrapper: { className: 'content7-tabs-wrapper' },
  block: {
    children: [
      {
        name: 'block0',
        tag: {
          className: 'content7-tag',
          text: {
            children: (
              <>
                <p>Przewozy Krajowe</p>
              </>
            ),
            className: 'content7-tag-name',
          },
          icon: { children: 'mobile' },
        },
        content: {
          className: 'content7-content',
          text: {
            className: 'content7-text',
            md: 14,
            xs: 24,
            children: (
              <>
                <span>
                  <h3>技术</h3>
                  <p>
                    丰富的技术组件，简单组装即可快速搭建金融级应用，丰富的技术组件，简单组装即可快速搭建金融级应用。
                  </p>
                  <br />
                  <h3>融合</h3>
                  <p>
                    解放业务及技术生产力，推动金融服务底层创新，推动金融服务底层创新。解放业务及技术生产力，推动金融服务底层创新。
                  </p>
                  <br />
                  <h3>
                    开放
                  </h3>符合金融及要求的安全可靠、高可用、高性能的服务能力，符合金融及要求的安全可靠、高可用、高性能的服务能力。
                </span>
              </>
            ),
          },
          img: {
            className: 'content7-img',
            children:
              'https://zos.alipayobjects.com/rmsportal/xBrUaDROgtFBRRL.png',
            md: 10,
            xs: 24,
          },
        },
      },
      {
        name: 'block1',
        tag: {
          className: 'content7-tag',
          icon: { children: 'tablet' },
          text: {
            className: 'content7-tag-name',
            children: (
              <>
                <p>Przewozy Międzynarodowe</p>
              </>
            ),
          },
        },
        content: {
          className: 'content7-content',
          text: {
            className: 'content7-text',
            md: 14,
            xs: 24,
            children: (
              <>
                <span>
                  <h3>技术</h3>
                  <p>
                    丰富的技术组件，简单组装即可快速搭建金融级应用，丰富的技术组件，简单组装即可快速搭建金融级应用。
                  </p>
                  <br />
                  <h3>融合</h3>
                  <p>
                    解放业务及技术生产力，推动金融服务底层创新，推动金融服务底层创新。解放业务及技术生产力，推动金融服务底层创新。
                  </p>
                  <br />
                  <h3>
                    开放
                  </h3>符合金融及要求的安全可靠、高可用、高性能的服务能力，符合金融及要求的安全可靠、高可用、高性能的服务能力。
                </span>
              </>
            ),
          },
          img: {
            className: 'content7-img',
            md: 10,
            xs: 24,
            children:
              'https://zos.alipayobjects.com/rmsportal/xBrUaDROgtFBRRL.png',
          },
        },
      },
      {
        name: 'block2',
        tag: {
          className: 'content7-tag',
          text: {
            children: (
              <>
                <p>Spedycja</p>
              </>
            ),
            className: 'content7-tag-name',
          },
          icon: { children: 'laptop' },
        },
        content: {
          className: 'content7-content',
          text: {
            className: 'content7-text',
            md: 14,
            xs: 24,
            children: (
              <>
                <span>
                  <h3>技术</h3>
                  <p>
                    丰富的技术组件，简单组装即可快速搭建金融级应用，丰富的技术组件，简单组装即可快速搭建金融级应用。
                  </p>
                  <br />
                  <h3>融合</h3>
                  <p>
                    解放业务及技术生产力，推动金融服务底层创新，推动金融服务底层创新。解放业务及技术生产力，推动金融服务底层创新。
                  </p>
                  <br />
                  <h3>
                    开放
                  </h3>符合金融及要求的安全可靠、高可用、高性能的服务能力，符合金融及要求的安全可靠、高可用、高性能的服务能力。
                </span>
              </>
            ),
          },
          img: {
            className: 'content7-img',
            md: 10,
            xs: 24,
            children:
              'https://zos.alipayobjects.com/rmsportal/xBrUaDROgtFBRRL.png',
          },
        },
      },
    ],
  },
};
export const Feature60DataSource = {
  wrapper: {
    className: 'home-page-wrapper feature6-wrapper k3g54688jz7-editor_css',
  },
  OverPack: { className: 'home-page feature6', playScale: 0.3 },
  Carousel: {
    className: 'feature6-content k3g1yx7i8m-editor_css k3g2e5xf7mc-editor_css',
    dots: false,
    wrapper: { className: 'feature6-content-wrapper' },
    titleWrapper: {
      className: 'feature6-title-wrapper',
      barWrapper: {
        className: 'feature6-title-bar-wrapper',
        children: { className: 'feature6-title-bar' },
      },
      title: { className: 'feature6-title' },
    },
    children: [
      {
        title: {
          className: 'feature6-title-text k3ga7vfcz4-editor_css',
          children: (
            <>
              <p>Nasza Firma w Liczbach</p>
            </>
          ),
        },
        className: 'feature6-item k3gdzs9zs7d-editor_css',
        name: 'block0',
        children: [
          {
            md: 8,
            xs: 24,
            className: 'feature6-number-wrapper',
            name: 'child0',
            number: {
              className: 'feature6-number',
              unit: {
                className: 'feature6-unit',
                children: (
                  <>
                    <p>
                      <br />
                    </p>
                  </>
                ),
              },
              toText: true,
              children: '16',
            },
            children: {
              className: 'feature6-text',
              children: (
                <>
                  <p>Ciągników Siodłowych</p>
                </>
              ),
            },
          },
          {
            md: 8,
            xs: 24,
            className: 'feature6-number-wrapper',
            name: 'child1',
            number: {
              className: 'feature6-number',
              unit: {
                className: 'feature6-unit',
                children: (
                  <>
                    <p>
                      <br />
                    </p>
                  </>
                ),
              },
              toText: true,
              children: '5 ',
            },
            children: {
              className: 'feature6-text',
              children: (
                <>
                  <p>Lat na rynku</p>
                </>
              ),
            },
          },
          {
            md: 8,
            xs: 24,
            className: 'feature6-number-wrapper',
            name: 'child2',
            number: {
              className: 'feature6-number',
              unit: {
                className: 'feature6-unit',
                children: (
                  <>
                    <p>
                      <br />
                    </p>
                  </>
                ),
              },
              toText: true,
              children: '1000',
            },
            children: {
              className: 'feature6-text',
              children: (
                <>
                  <p>Przeprowadzanych kursów rocznie</p>
                </>
              ),
            },
          },
        ],
      },
    ],
  },
};
export const Contact00DataSource = {
  wrapper: {
    className: 'home-page-wrapper content10-wrapper k3fx2y3y3o9-editor_css',
  },
  Content: {
    className: 'icon-wrapper',
    children: {
      icon: {
        className: 'icon',
        children:
          'https://gw.alipayobjects.com/zos/rmsportal/zIUVomgdcKEKcnnQdOzw.svg',
        name: '主要图标',
      },
      iconShadow: {
        className: 'icon-shadow',
        children:
          'https://gw.alipayobjects.com/zos/rmsportal/WIePwurYppfVvDNASZRN.svg',
        name: '图标影阴',
      },
      url: { children: '', name: '跳转地址' },
      title: { children: 'TransBart z o.o.', name: '弹框标题' },
      content: { children: 'Wólczańska 226, Łódź', name: '弹框内容' },
    },
  },
};
export const Feature00DataSource = {
  wrapper: {
    className: 'home-page-wrapper content0-wrapper k3galcfu51b-editor_css',
  },
  page: { className: 'home-page content0 k3gbynkg4va-editor_css' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <>
            <p>Ostatnio Dostarczaliśmy:</p>
          </>
        ),
        className: 'k3gck639wg-editor_css',
      },
    ],
  },
  childWrapper: {
    className: 'content0-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'jzjn8afnsxb-editor_css content0-block',
        md: 6,
        xs: 24,
        children: {
          className: 'content0-block-item jzjgrrupf2c-editor_css',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon jzjgrlz134-editor_css',
              children:
                'https://d1dcnte8mfzkpv.cloudfront.net/uploads/2018/09/9667452ed6be2f69d4278f14494c.jpg',
            },
            {
              name: 'title',
              className: 'content0-block-title jzj8xt5kgv7-editor_css',
              children: (
                <>
                  <p>Łódź-Hamburg</p>
                </>
              ),
            },
            {
              name: 'content~k3ga057bbr',
              className: '',
              children: (
                <>
                  <p>Przewóz Żywego Inwentarzu</p>
                </>
              ),
            },
            {
              name: 'content',
              children: (
                <>
                  <p>750km&nbsp;</p>
                </>
              ),
              className: 'jzj8z9sya9-editor_css',
            },
          ],
        },
      },
      {
        name: 'block1',
        className: 'content0-block',
        md: 6,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon jzjncn210ql-editor_css',
              children:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwsofISUXdhWn0GH5CGLU9vI5IaeQBv995h76fwTJGACUAx2QVJg&s',
            },
            {
              name: 'title',
              className: 'content0-block-title jzjne54fwqm-editor_css',
              children: (
                <>
                  <p>Hamburg - Berlin</p>
                </>
              ),
            },
            {
              name: 'content~k3ga0i05q1u',
              className: '',
              children: (
                <>
                  <p>Materiały Budowlane</p>
                </>
              ),
            },
            {
              name: 'content',
              children: (
                <>
                  <p>500km</p>
                </>
              ),
            },
          ],
        },
      },
      {
        name: 'block2',
        className: 'content0-block',
        md: 6,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon jzjndq0dueg-editor_css',
              children:
                'https://www.oxyhr.eu/uploads/2018/06/pexels-photo-590839.jpeg',
            },
            {
              name: 'title',
              className: 'content0-block-title jzjne24af8c-editor_css',
              children: (
                <>
                  <p>Brema-Schlezwig - Holstein</p>
                </>
              ),
            },
            {
              name: 'content~k3ga0pmcoxn',
              className: '',
              children: (
                <>
                  <p>Przewóz Ryb</p>
                </>
              ),
            },
            {
              name: 'content',
              children: (
                <>
                  <p>150km</p>
                </>
              ),
            },
          ],
        },
      },
      {
        name: 'block~jzjn87bmyc7',
        className: 'content0-block',
        md: 6,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon jzjndsyw8sf-editor_css',
              children:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDrQldfxXamXQX6PEieIKvaqXscbk0-DwSz2X6SzMdDIxVWOES&s',
            },
            {
              name: 'title',
              className: 'content0-block-title jzjndw5oerk-editor_css',
              children: (
                <>
                  <p>Schlezwig-Holstein - Łódź</p>
                </>
              ),
            },
            {
              name: 'content~k3ga10g4r6',
              className: '',
              children: (
                <>
                  <p>Owoce</p>
                </>
              ),
            },
            {
              name: 'content',
              children: (
                <>
                  <p>900km</p>
                </>
              ),
            },
          ],
        },
      },
    ],
  },
};
export const Feature40DataSource = {
  wrapper: { className: 'home-page-wrapper content6-wrapper' },
  OverPack: { className: 'home-page content6' },
  textWrapper: { className: 'content6-text', xs: 24, md: 10 },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <>
            <p>Dołącz do Nas już dziś!!!</p>
          </>
        ),
        className: 'title-h1',
      },
      {
        name: 'content',
        className: 'title-content k3gsymwnqe-editor_css',
        children: (
          <>
            <p>Poszukujemy kierowców na trasy między narodowe</p>
          </>
        ),
      },
    ],
  },
  img: {
    children:
      'http://media.istockphoto.com/photos/transporter-for-branding-isolated-on-white-picture-id576595346?k=6&m=576595346&s=612x612&w=0&h=6WligoEPV0LBBdY_Lq0PX4dEBkHQBxdqq5BVw0Yrez8=',
    className: 'content6-img',
    xs: 24,
    md: 14,
  },
  block: {
    children: [
      {
        name: 'block0',
        img: {
          children:
            'https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png',
          className: 'content6-icon',
        },
        title: {
          className: 'content6-title',
          children: (
            <>
              <p>Wymagania</p>
            </>
          ),
        },
        content: {
          className: 'content6-content',
          children: (
            <>
              <p>
                -udokumentowane doświadczenie w zawodzie na stanowisku kierowca
                międzynarodowy
              </p>
              <p>-znajomość języka angielskiego w stopniu komunikatywnym</p>
              <p>-dyspozycyjność</p>
              <p>
                <br />
              </p>
            </>
          ),
        },
      },
      {
        name: 'block1',
        img: {
          className: 'content6-icon',
          children:
            'https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png',
        },
        title: {
          className: 'content6-title',
          children: (
            <>
              <p>Oferujemy</p>
            </>
          ),
        },
        content: {
          className: 'content6-content',
          children: (
            <>
              <p>-dobre regularne wynagrodzenie</p>
              <p>-miłą atmosferę&nbsp;</p>
              <p>-Pracę w systemie 3 tygodniowym</p>
            </>
          ),
        },
      },
      {
        name: 'block2',
        img: {
          className: 'content6-icon',
          children:
            'https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png',
        },
        title: {
          className: 'content6-title k3gsufbu28d-editor_css',
          children: (
            <>
              <p>Cv prosimy kierować na adres Rekrutacja@Bart.com</p>
            </>
          ),
        },
        content: {
          className: 'content6-content',
          children: (
            <>
              <p>
                <br />
              </p>
            </>
          ),
        },
      },
    ],
  },
};
export const Footer10DataSource = {
  wrapper: { className: 'home-page-wrapper footer1-wrapper' },
  OverPack: { className: 'footer1', playScale: 0.2 },
  block: {
    className: 'home-page',
    gutter: 0,
    children: [
      {
        name: 'block0',
        xs: 24,
        md: 8,
        className: 'block k3gedkswlgd-editor_css',
        title: {
          className: 'logo jzl0qcpyjra-editor_css',
          children:
            'https://www.freelogodesign.org/file/app/client/thumb/06d6aa41-819c-42e9-9593-20a64f04e519_200x200.png?1574800543967',
        },
        childWrapper: {
          className: 'slogan',
          children: [
            {
              name: 'content0',
              children: (
                <>
                  <p>
                    <br />
                  </p>
                </>
              ),
              className: 'k3g6efuap0i-editor_css',
            },
          ],
        },
      },
      {
        name: 'block2',
        xs: 24,
        md: 8,
        className: 'block',
        title: {
          children: (
            <>
              <p>Napisz do nas na Trans@Bart.com</p>
            </>
          ),
          className: 'k3gehn23r8k-editor_css',
        },
        childWrapper: {
          children: [
            {
              name: 'image~jzl0tcm4f1d',
              className: '',
              children:
                'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*NoENTI5uyn4AAAAAAAAAAABkARQnAQ',
            },
            {
              href: '#',
              name: 'link0',
              children: (
                <>
                  <p>Skopiuj ten quercode aby&nbsp;</p>
                  <p>dodać nas do kontaktów</p>
                </>
              ),
              className: 'jzl0u1bko6-editor_css',
            },
            {
              href: '#',
              name: 'link1',
              children: (
                <>
                  <p>
                    <br />
                  </p>
                </>
              ),
            },
          ],
        },
      },
      {
        name: 'block3',
        xs: 24,
        md: 8,
        className: 'block k3geiccsmlt-editor_css',
        title: {
          children: (
            <>
              <p>TransBart SP. Z O.O.</p>
            </>
          ),
          className: 'k3ge4g56r28-editor_css',
        },
        childWrapper: {
          children: [
            {
              name: 'title~k3ge7prgqnc',
              className: 'k3ge9iykzl-editor_css',
              children: (
                <>
                  <p>ul. Wólczańska 226</p>
                </>
              ),
            },
            {
              href: '#',
              name: 'link1',
              children: (
                <>
                  <p>+48 737 444 444</p>
                </>
              ),
              className: 'k3gea94fyv7-editor_css',
            },
          ],
        },
      },
      {
        name: 'block~k3grtu2p9ag',
        xs: 24,
        md: 8,
        className: 'block k3geiccsmlt-editor_css',
        title: {
          children: (
            <>
              <p>NIP: 6948239541</p>
            </>
          ),
          className: 'k3ge4g56r28-editor_css',
        },
        childWrapper: {
          children: [
            {
              name: 'title~k3ge7prgqnc',
              className: 'k3ge9iykzl-editor_css',
              children: (
                <>
                  <p>REGON: 956174834</p>
                </>
              ),
            },
            {
              href: '#',
              name: 'link1',
              children: (
                <>
                  <p>+48 737 444 444</p>
                </>
              ),
              className: 'k3gea94fyv7-editor_css',
            },
            {
              name: 'title~k3grtzsxzqi',
              className: '',
              children: (
                <>
                  <p>
                    <br />
                  </p>
                </>
              ),
            },
          ],
        },
      },
    ],
  },
  copyrightWrapper: { className: 'copyright-wrapper' },
  copyrightPage: { className: 'home-page' },
  copyright: {
    className: 'copyright',
    children:
      'Autorzy: Marcin Markiewicz i Bartłomiej Wójcik TransBart © 2019<br />',
  },
};
