export interface ImageThumbnail {
	url: string,
	width: number,
	height: number,
}

export interface Image {
	url: string,
	width: number,
	height: number,
	thumbnails?: ImageThumbnail[],
	alternateText?: string,
}

export interface EntityReference {
	entityId: string,
	name: string,
}

export default interface Ce_collection {
	slug?: string,
	description?: string,
	name: string,
	c_coverPhoto?: Image,
	c_products?: EntityReference[],
	id: string,
}
