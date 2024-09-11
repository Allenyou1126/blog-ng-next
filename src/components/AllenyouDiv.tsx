import AllenyouLink from "./AllenyouLink";
import LazyloadImage from "./LazyloadImage";
import BilibiliVideo from "./MarkdownExtend/BilibiliVideo";
import NeteaseMusic from "./MarkdownExtend/NeteaseMusic";

const customComponents: {
	[prop: string]: // | JSX.Element
	// | React.ComponentType<ComponentProps<any>>
	React.ElementType;
} = {
	Default: FallbackComponent,
	Link: AllenyouLink,
	Image: LazyloadImage,
	Bilibili: BilibiliVideo,
	NeteaseMusic: NeteaseMusic,
};

export function FallbackComponent(
	props: JSX.IntrinsicElements["div"] &
		Readonly<{
			children?: React.ReactNode;
		}>
) {
	return <div {...props}>{props.children}</div>;
}

export default function AllenyouDiv(
	props: JSX.IntrinsicElements["div"] & {
		component?: string;
		children?: React.ReactNode;
	}
) {
	if (props === undefined || !props.hasOwnProperty("component")) {
		return <div>{props.children}</div>;
	}
	if (!customComponents.hasOwnProperty(props.component!)) {
		return <FallbackComponent {...props}>{props.children}</FallbackComponent>;
	}
	const Target = customComponents[props.component!];
	if (props.children === undefined || props.children === null) {
		return <Target {...props} />;
	} else {
		return <Target {...props}>{props.children}</Target>;
	}
}
