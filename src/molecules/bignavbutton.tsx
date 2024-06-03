import { Button, Card as MuiCard, Icon, Typography as MuiTypography } from '../atoms'
import { IconType } from '../atoms/icon-store';

import nextHrTheme from '../theme/theme';

interface BigNavButtonProps {
  bgColor?: string;
  customColor?: string; 
  icon: IconType;
  onClickCallback: (value: string) => void;
  subtitle?: string;
  title?: string;
}

export default function BigNavButton({bgColor, customColor, icon, onClickCallback, subtitle, title = ''}: BigNavButtonProps) {    
  const buttonId = title.toLowerCase().replace(' ', '-');
  const layout = {width: '130px', height: '104px'};
  const iconStyles = {style: {borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", width: "48px", height: "48px"}};
  const palette = nextHrTheme.palette.custom;

  return (
    <Button onClick={() => onClickCallback(buttonId)}>
      <MuiCard bgColor={palette.paper}
        content={
          <div style={layout}>
            <Icon name={icon} {...iconStyles} bgColor={bgColor} customColor={customColor}/>
            <MuiTypography variant='h5'>
              <span style={{color: palette.title, fontWeight: 600}}>
                {title}
              </span>
            </MuiTypography>
            <MuiTypography variant='h6'>
              <span style={{color: palette.subtitle, fontWeight: 400}}>
                {subtitle}
              </span>
            </MuiTypography>
          </div>
        }
      />
    </Button>
  )
}