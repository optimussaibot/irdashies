import { useMemo, useRef, useEffect } from 'react';
import {
  DefaultB,
  DefaultW,
  FormulaB,
  FormulaW,
  LmpB,
  LmpW,
  NascarB,
  NascarW,
  UshapeB,
  UshapeW,
  MozaFsr2B,
  MozaFsr2W
} from './wheels';
import { RotationIndicator } from './RotationIndicator';
import { SteerDial } from './SteerDial';
import type { SteerDialProps } from './SteerDial';

export type WheelStyle =
  | 'formula'
  | 'lmp'
  | 'nascar'
  | 'ushape'
  | 'default'
  | 'ring'
  | 'moza-fsr2';

const wheelComponentMap = {
  default: {
    dark: DefaultB,
    light: DefaultW,
  },
  formula: {
    dark: FormulaB,
    light: FormulaW,
  },
  lmp: {
    dark: LmpB,
    light: LmpW,
  },
  nascar: {
    dark: NascarB,
    light: NascarW,
  },
  ushape: {
    dark: UshapeB,
    light: UshapeW,
  },
  'moza-fsr2': {
    dark: MozaFsr2B,
    light: MozaFsr2W,
  },
};

export interface InputSteerProps {
  angleRad?: number;
  wheelStyle?: WheelStyle;
  wheelColor?: 'dark' | 'light';
  gear?: number;
  speedMs?: number;
  unit?: number;
  gearSettings?: SteerDialProps['gearSettings'];
}

export function InputSteer({
  angleRad = 0,
  wheelStyle = 'default',
  wheelColor = 'light',
  gear,
  speedMs,
  unit,
  gearSettings,
}: InputSteerProps) {
  const wheelRef = useRef<HTMLDivElement>(null);

  const WheelComponent = useMemo(() => {
    const entry =
      wheelComponentMap[wheelStyle as keyof typeof wheelComponentMap];
    return (entry ?? wheelComponentMap.default)[wheelColor];
  }, [wheelStyle, wheelColor]);

  useEffect(() => {
    if (wheelRef.current) {
      wheelRef.current.style.setProperty(
        '--wheel-rotation',
        `${angleRad * -1}rad`
      );
    }
  }, [angleRad]);

  if (wheelStyle === 'ring') {
    return (
      <SteerDial
        angleRad={angleRad}
        gear={gear}
        speedMs={speedMs}
        unit={unit}
        wheelColor={wheelColor}
        gearSettings={gearSettings}
      />
    );
  }

    return (
    <div className="w-full h-full flex fill-white relative">
      <div
        ref={wheelRef}
        className="w-full h-full flex justify-center"
        style={{
          transform: 'rotate(var(--wheel-rotation, 0rad))',
          transformBox: 'fill-box',
          transformOrigin: 'center',
          willChange: 'transform',
        }}
      >
        <WheelComponent />
      </div>
      <RotationIndicator currentAngleRad={angleRad} />
    </div>
  );
}