export interface EntityReference {
	entityId: string,
	name: string,
}

export default interface Ce_productCategory {
	slug?: string,
	name: string,
	c_parentCategory?: EntityReference[],
	c_products?: EntityReference[],
	c_searchSlug?: string,
	c_subCategories?: EntityReference[],
	id: string,
}
