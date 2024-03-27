import AllenyouLink from "./AllenyouLink";

const customComponents: {
	[prop: string]: // | JSX.Element
	// | React.ComponentType<ComponentProps<any>>
	React.ElementType;
} = {
	FallbackComponent: FallbackComponent,
	AllenyouLink: AllenyouLink,
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
	props: JSX.IntrinsicElements["div"] & { componenttype?: string },
	{
		children,
	}: Readonly<{
		children?: React.ReactNode;
	}> = {}
) {
	if (props === undefined || !props.hasOwnProperty("componenttype")) {
		return <div>{children}</div>;
	}
	if (!customComponents.hasOwnProperty(props.componenttype!)) {
		return <FallbackComponent {...props}>{children}</FallbackComponent>;
	}
	const Target = customComponents[props.componenttype!];
	if (children === undefined || children === null) {
		return <Target {...props} />;
	} else {
		return <Target {...props}>{children}</Target>;
	}
}
