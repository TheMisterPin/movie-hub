
interface Theme {
    typography: {
      sizes: {
        h1: string;
        h2: string;
        h3: string;
        h4: string;
        h5: string;
        h6: string;
        h7: string;
        body: string;
        cardTitle: string;
      };
      weights: {
        semibold: number;
        medium: number;
        regular: number;
      };
    };
    colors: {
      primary: {
        dark: string;
        soft: string;
        blueAccent: string;
      };
      secondary: {
        green: string;
        orange: string;
        red: string;
      };
      text: {
        black: string;
        darkGrey: string;
        grey: string;
        whiteGrey: string;
        white: string;
        lineDark: string;
      };
    };
  }
  

  const theme: Theme = {
    typography: {
      sizes: {
        h1: '28px',
        h2: '24px',
        h3: '18px',
        h4: '16px',
        h5: '14px',
        h6: '12px',
        h7: '10px',
        body: '12px',
        cardTitle: '36px',
      },
      weights: {
        semibold: 600,
        medium: 500,
        regular: 400,
      },
    },
    colors: {
      primary: {
        dark: '#1F1D2B',
        soft: '#252836',
        blueAccent: '#21B2D3',
      },
      secondary: {
        green: '#22B07D',
        orange: '#FF8700',
        red: '#FF7256',
      },
      text: {
        black: '#171725',
        darkGrey: '#9696A4',
        grey: '#92929D',
        whiteGrey: '#F1F1F5',
        white: '#FFFFFF',
        lineDark: '#EAEEEA',
      },
    },
  };
  
  export default theme;
  