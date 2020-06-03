export default ({ palette, spacing }) => ({
    MuiCard: {
      root: {
        '&.MuiPostCard--01': {
          transition: '0.3s',
          maxWidth: 300,
          margin: 'auto',
          height: '210px',
          backgroundColor: '#b3cde0',
          color: '#00243f',
          boxShadow: '0 0 20px 0 rgba(0,0,0,0.12)',
          '&:hover': {
            transform: 'translateY(-3px)',
            boxShadow: '0 4px 20px 0 rgba(0,0,0,0.12)',
          },
          '& .MuiCardMedia-root': {
            paddingTop: '30px',
            paddingBottom: '20px',
            position: 'relative',
            '& .MuiTag--ribbon': {
              position: 'absolute',
              top: spacing(2),
              left: spacing(2),
              backgroundColor: palette.primary.main,
              color: '#00243f !important',
              padding: '0px 5px',
              filter: 'drop-shadow(2px 2px 2px rgba(0,0,0,0.6))',
              borderTopLeftRadius: 2,
              borderBottomLeftRadius: 2,
              '&:before, &:after': {
                position: 'absolute',
                right: -16,
                content: '" "',
                borderLeft: `16px solid ${palette.primary.main}`,
              },
              '&:before': {
                top: 0,
                borderBottom: '12px solid transparent',
              },
              '&:after': {
                bottom: 0,
                borderTop: '12px solid transparent',
              },
              '& .MuiTypography-root': {
                fontWeight: 'bold',
                color: 'white'
              },
            },
            '&:after': {
              content: '" "',
              position: 'absolute',
              left: 0,
              bottom: 0,
              width: '100%',
              borderBottom: '32px solid #ffffff',
              borderLeft: '400px solid transparent',
            },
          },
          '& .MuiCardContent-root': {
            textAlign: 'left',
            padding: spacing(4),
            height: '50px'
          },
          '& .MuiTypography--heading': {
            fontWeight: 'bold',
          },
          '& .MuiTypography--subheading': {
            lineHeight: 1.8,
          },
          '& .MuiCardActions-root': {
            padding: 'spacing(0, 3, 3)',
            justifyContent: 'space-between',
            height: '30px',
            alignItems: 'center',
          },
        },
      },
    },
  });
