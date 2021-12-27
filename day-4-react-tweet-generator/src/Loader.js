import React from 'react';
import ContentLoader from 'react-content-loader';
const Loader = () => {
	return (
		<ContentLoader
			speed={2}
			width={60}
			height={48}
			viewBox="0 0 60 48"
			backgroundColor="#f3f3f3"
			foregroundColor="#ecebeb"
		>
			<rect x="527" y="177" rx="3" ry="3" width="88" height="10" />
			<rect x="552" y="183" rx="3" ry="3" width="52" height="6" />
			<rect x="504" y="213" rx="3" ry="3" width="410" height="6" />
			<rect x="504" y="229" rx="3" ry="3" width="380" height="6" />
			<rect x="504" y="245" rx="3" ry="3" width="178" height="6" />
			<circle cx="595" cy="183" r="20" />
			<rect x="512" y="135" rx="0" ry="0" width="102" height="67" />
			<rect x="551" y="157" rx="0" ry="0" width="110" height="33" />
			<rect x="577" y="127" rx="0" ry="0" width="7" height="57" />
			<rect x="49" y="54" rx="0" ry="0" width="1" height="0" />
			<rect x="549" y="163" rx="0" ry="0" width="70" height="41" />
			<rect x="516" y="164" rx="0" ry="0" width="70" height="41" />
			<circle cx="589" cy="123" r="20" />
			<circle cx="24" cy="24" r="24" />
		</ContentLoader>
	);
};

export default Loader;
