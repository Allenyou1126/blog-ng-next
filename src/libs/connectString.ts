export const connectString = (list: string[] | null) => {
	if (list === null) {
		return "";
	}
	var ret = "";
	list.forEach((val: string) => {
		ret = ret.concat(` ${val}`);
	});
	return ret;
};
