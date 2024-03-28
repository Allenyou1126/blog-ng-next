import AllenyouLink from "./AllenyouLink";
import LazyloadImage from "./LazyloadImage";
import BilibiliVideo from "./MarkdownExtend/BilibiliVideo";

const customComponents: {
	[prop: string]: // | JSX.Element
	// | React.ComponentType<ComponentProps<any>>
	React.ElementType;
} = {
	Default: FallbackComponent,
	Link: AllenyouLink,
	Image: LazyloadImage,
	Bilibili: BilibiliVideo,
};

export function FallbackComponent(
	{
		children,
	}: Readonly<{
		children?: React.ReactNode;
	}>,
	props: JSX.IntrinsicElements["div"]
) {
	return <div {...props}>{children}</div>;
}

export default function AllenyouDiv(
	props: JSX.IntrinsicElements["div"] & { component?: string },
	{
		children,
	}: Readonly<{
		children?: React.ReactNode;
	}> = {}
) {
	if (props === undefined || !props.hasOwnProperty("component")) {
		return <div>{children}</div>;
	}
	if (!customComponents.hasOwnProperty(props.component!)) {
		return <FallbackComponent {...props}>{children}</FallbackComponent>;
	}
	const Target = customComponents[props.component!];
	if (children === undefined || children === null) {
		return <Target {...props} />;
	} else {
		return <Target {...props}>{children}</Target>;
	}
}
