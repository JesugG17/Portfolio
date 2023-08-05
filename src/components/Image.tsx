import { FC } from 'react'
import { animated, useSpring } from '@react-spring/web';

export const Image: FC<Props> = ({ src }) => {

    const springs = useSpring({
        from: {opacity: 0},
        to: {opacity: 1}
    });

    console.log(springs);

  return (
    <animated.img
        className='rounded object-contain min-h-92 w-full'
        src={src}
        style={{
            ...springs
        }}
    />
  )
}

type Props = {
    src: string;
}
