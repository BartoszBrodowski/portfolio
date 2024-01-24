import { IconProps } from '@/interfaces/Icon-props.interface';
import { FunctionComponent } from 'react';

const AngularIcon: FunctionComponent<IconProps> = ({ size }) => (
	<svg xmlns='http://www.w3.org/2000/svg' width={size || 64} height={size || 64}>
		<path
			width={size || 64}
			height={size || 64}
			fill='#c4002b'
			d='M15.953 1.281c-.07 0-.14.012-.207.035L2.352 5.98a.632.632 0 0 0-.426.68l2.117 17.36a.631.631 0 0 0 .328.484l11.297 6.137a.6.6 0 0 0 .305.078.6.6 0 0 0 .304-.078l11.356-6.223a.63.63 0 0 0 .324-.484l2.117-17.356a.635.635 0 0 0-.43-.683l-13.48-4.582a.788.788 0 0 0-.21-.032Zm.047 3.2 8.32 17.917h-2.84l-1.78-3.832h-7.4l-1.78 3.832H7.68Zm0 6.078L13.492 16h5.016Zm0 0'
		/>
	</svg>
);
export default AngularIcon;
