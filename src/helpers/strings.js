export const truncateString = (value, limit) => {
	if(value === undefined) return ''
	if(value === '') return ''
	
	if(value.length < limit) return value;

	return `${value.slice(0, limit)}...`
}