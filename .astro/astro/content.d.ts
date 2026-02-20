declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"articles": {
"fr/auteur.md": {
	id: "fr/auteur.md";
  slug: "fr/auteur";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"fr/birkath-halebana-date.md": {
	id: "fr/birkath-halebana-date.md";
  slug: "fr/birkath-halebana-date";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"fr/choix-siddour.md": {
	id: "fr/choix-siddour.md";
  slug: "fr/choix-siddour";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"fr/chronologie-histoire-juive.md": {
	id: "fr/chronologie-histoire-juive.md";
  slug: "fr/chronologie-histoire-juive";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"fr/dix-commandements-debout.md": {
	id: "fr/dix-commandements-debout.md";
  slug: "fr/dix-commandements-debout";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"fr/hallel-brakha.md": {
	id: "fr/hallel-brakha.md";
  slug: "fr/hallel-brakha";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"fr/hannoukah-benediction-lumieres.md": {
	id: "fr/hannoukah-benediction-lumieres.md";
  slug: "fr/hannoukah-benediction-lumieres";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"fr/kaddich-vendredi-debout-assis.md": {
	id: "fr/kaddich-vendredi-debout-assis.md";
  slug: "fr/kaddich-vendredi-debout-assis";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"fr/lettre-ouverte-galia-miller-sprung.md": {
	id: "fr/lettre-ouverte-galia-miller-sprung.md";
  slug: "fr/lettre-ouverte-galia-miller-sprung";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"fr/lettre-ouverte-juifs-adn.md": {
	id: "fr/lettre-ouverte-juifs-adn.md";
  slug: "fr/lettre-ouverte-juifs-adn";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"fr/rabbins-constantinois.md": {
	id: "fr/rabbins-constantinois.md";
  slug: "fr/rabbins-constantinois";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"he/birkath-halebana-date.md": {
	id: "he/birkath-halebana-date.md";
  slug: "he/birkath-halebana-date";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"he/chronology-to-print-jewish-history.md": {
	id: "he/chronology-to-print-jewish-history.md";
  slug: "he/chronology-to-print-jewish-history";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"he/hallel-standing-sitting.md": {
	id: "he/hallel-standing-sitting.md";
  slug: "he/hallel-standing-sitting";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"he/hannukah-brakha.md": {
	id: "he/hannukah-brakha.md";
  slug: "he/hannukah-brakha";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"he/kiddush-ereb-shabbath-standing-sitting.md": {
	id: "he/kiddush-ereb-shabbath-standing-sitting.md";
  slug: "he/kiddush-ereb-shabbath-standing-sitting";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"he/opened-letter-jews-north-africa.md": {
	id: "he/opened-letter-jews-north-africa.md";
  slug: "he/opened-letter-jews-north-africa";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"he/ten-commandments-standing.md": {
	id: "he/ten-commandments-standing.md";
  slug: "he/ten-commandments-standing";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
};
"cuisine": {
"fr/astuces-reussir-pain.md": {
	id: "fr/astuces-reussir-pain.md";
  slug: "fr/astuces-reussir-pain";
  body: string;
  collection: "cuisine";
  data: InferEntrySchema<"cuisine">
} & { render(): Render[".md"] };
"fr/ayl-leuk-harosseth.md": {
	id: "fr/ayl-leuk-harosseth.md";
  slug: "fr/ayl-leuk-harosseth";
  body: string;
  collection: "cuisine";
  data: InferEntrySchema<"cuisine">
} & { render(): Render[".md"] };
"fr/boulettes-petits-pois-langues-oiseau.md": {
	id: "fr/boulettes-petits-pois-langues-oiseau.md";
  slug: "fr/boulettes-petits-pois-langues-oiseau";
  body: string;
  collection: "cuisine";
  data: InferEntrySchema<"cuisine">
} & { render(): Render[".md"] };
"fr/cigares-miel.md": {
	id: "fr/cigares-miel.md";
  slug: "fr/cigares-miel";
  body: string;
  collection: "cuisine";
  data: InferEntrySchema<"cuisine">
} & { render(): Render[".md"] };
"fr/confiture-coings.md": {
	id: "fr/confiture-coings.md";
  slug: "fr/confiture-coings";
  body: string;
  collection: "cuisine";
  data: InferEntrySchema<"cuisine">
} & { render(): Render[".md"] };
"fr/couronnes.md": {
	id: "fr/couronnes.md";
  slug: "fr/couronnes";
  body: string;
  collection: "cuisine";
  data: InferEntrySchema<"cuisine">
} & { render(): Render[".md"] };
"fr/couscous.md": {
	id: "fr/couscous.md";
  slug: "fr/couscous";
  body: string;
  collection: "cuisine";
  data: InferEntrySchema<"cuisine">
} & { render(): Render[".md"] };
"fr/croquets.md": {
	id: "fr/croquets.md";
  slug: "fr/croquets";
  body: string;
  collection: "cuisine";
  data: InferEntrySchema<"cuisine">
} & { render(): Render[".md"] };
"fr/galettes-salees.md": {
	id: "fr/galettes-salees.md";
  slug: "fr/galettes-salees";
  body: string;
  collection: "cuisine";
  data: InferEntrySchema<"cuisine">
} & { render(): Render[".md"] };
"fr/gateaux-sables-glaces-colores.md": {
	id: "fr/gateaux-sables-glaces-colores.md";
  slug: "fr/gateaux-sables-glaces-colores";
  body: string;
  collection: "cuisine";
  data: InferEntrySchema<"cuisine">
} & { render(): Render[".md"] };
"fr/haloth.md": {
	id: "fr/haloth.md";
  slug: "fr/haloth";
  body: string;
  collection: "cuisine";
  data: InferEntrySchema<"cuisine">
} & { render(): Render[".md"] };
"fr/knedlettes-corbeilles.md": {
	id: "fr/knedlettes-corbeilles.md";
  slug: "fr/knedlettes-corbeilles";
  body: string;
  collection: "cuisine";
  data: InferEntrySchema<"cuisine">
} & { render(): Render[".md"] };
"fr/makrouds.md": {
	id: "fr/makrouds.md";
  slug: "fr/makrouds";
  body: string;
  collection: "cuisine";
  data: InferEntrySchema<"cuisine">
} & { render(): Render[".md"] };
"fr/mela.md": {
	id: "fr/mela.md";
  slug: "fr/mela";
  body: string;
  collection: "cuisine";
  data: InferEntrySchema<"cuisine">
} & { render(): Render[".md"] };
"fr/nougat-tmarmarchiya.md": {
	id: "fr/nougat-tmarmarchiya.md";
  slug: "fr/nougat-tmarmarchiya";
  body: string;
  collection: "cuisine";
  data: InferEntrySchema<"cuisine">
} & { render(): Render[".md"] };
"fr/pessah-petit-dejeuner.md": {
	id: "fr/pessah-petit-dejeuner.md";
  slug: "fr/pessah-petit-dejeuner";
  body: string;
  collection: "cuisine";
  data: InferEntrySchema<"cuisine">
} & { render(): Render[".md"] };
"fr/poulet-bsol-madnoss.md": {
	id: "fr/poulet-bsol-madnoss.md";
  slug: "fr/poulet-bsol-madnoss";
  body: string;
  collection: "cuisine";
  data: InferEntrySchema<"cuisine">
} & { render(): Render[".md"] };
"fr/preparer-semoule-couscous.md": {
	id: "fr/preparer-semoule-couscous.md";
  slug: "fr/preparer-semoule-couscous";
  body: string;
  collection: "cuisine";
  data: InferEntrySchema<"cuisine">
} & { render(): Render[".md"] };
"fr/rmo.md": {
	id: "fr/rmo.md";
  slug: "fr/rmo";
  body: string;
  collection: "cuisine";
  data: InferEntrySchema<"cuisine">
} & { render(): Render[".md"] };
"fr/ronds-confiture.md": {
	id: "fr/ronds-confiture.md";
  slug: "fr/ronds-confiture";
  body: string;
  collection: "cuisine";
  data: InferEntrySchema<"cuisine">
} & { render(): Render[".md"] };
"fr/roules-aux-dattes.md": {
	id: "fr/roules-aux-dattes.md";
  slug: "fr/roules-aux-dattes";
  body: string;
  collection: "cuisine";
  data: InferEntrySchema<"cuisine">
} & { render(): Render[".md"] };
"fr/rssess.md": {
	id: "fr/rssess.md";
  slug: "fr/rssess";
  body: string;
  collection: "cuisine";
  data: InferEntrySchema<"cuisine">
} & { render(): Render[".md"] };
"fr/salade-cuite-matboukha-mekbouba.md": {
	id: "fr/salade-cuite-matboukha-mekbouba.md";
  slug: "fr/salade-cuite-matboukha-mekbouba";
  body: string;
  collection: "cuisine";
  data: InferEntrySchema<"cuisine">
} & { render(): Render[".md"] };
"fr/seulk-tfina-epinards-blettes.md": {
	id: "fr/seulk-tfina-epinards-blettes.md";
  slug: "fr/seulk-tfina-epinards-blettes";
  body: string;
  collection: "cuisine";
  data: InferEntrySchema<"cuisine">
} & { render(): Render[".md"] };
"fr/sfinj.md": {
	id: "fr/sfinj.md";
  slug: "fr/sfinj";
  body: string;
  collection: "cuisine";
  data: InferEntrySchema<"cuisine">
} & { render(): Render[".md"] };
"fr/tbeih-plat-mariee.md": {
	id: "fr/tbeih-plat-mariee.md";
  slug: "fr/tbeih-plat-mariee";
  body: string;
  collection: "cuisine";
  data: InferEntrySchema<"cuisine">
} & { render(): Render[".md"] };
"fr/tfina-cardes.md": {
	id: "fr/tfina-cardes.md";
  slug: "fr/tfina-cardes";
  body: string;
  collection: "cuisine";
  data: InferEntrySchema<"cuisine">
} & { render(): Render[".md"] };
"fr/tfina-courgettes.md": {
	id: "fr/tfina-courgettes.md";
  slug: "fr/tfina-courgettes";
  body: string;
  collection: "cuisine";
  data: InferEntrySchema<"cuisine">
} & { render(): Render[".md"] };
"fr/tfina-guide.md": {
	id: "fr/tfina-guide.md";
  slug: "fr/tfina-guide";
  body: string;
  collection: "cuisine";
  data: InferEntrySchema<"cuisine">
} & { render(): Render[".md"] };
"he/ayl-leuk-harosseth.md": {
	id: "he/ayl-leuk-harosseth.md";
  slug: "he/ayl-leuk-harosseth";
  body: string;
  collection: "cuisine";
  data: InferEntrySchema<"cuisine">
} & { render(): Render[".md"] };
"he/boulettes-peas-birds-tongues.md": {
	id: "he/boulettes-peas-birds-tongues.md";
  slug: "he/boulettes-peas-birds-tongues";
  body: string;
  collection: "cuisine";
  data: InferEntrySchema<"cuisine">
} & { render(): Render[".md"] };
"he/breakfast-pessah-matsa-milk.md": {
	id: "he/breakfast-pessah-matsa-milk.md";
  slug: "he/breakfast-pessah-matsa-milk";
  body: string;
  collection: "cuisine";
  data: InferEntrySchema<"cuisine">
} & { render(): Render[".md"] };
"he/chicken-bsol-madnoss.md": {
	id: "he/chicken-bsol-madnoss.md";
  slug: "he/chicken-bsol-madnoss";
  body: string;
  collection: "cuisine";
  data: InferEntrySchema<"cuisine">
} & { render(): Render[".md"] };
"he/cooked-salad-matbukha-mekbuba.md": {
	id: "he/cooked-salad-matbukha-mekbuba.md";
  slug: "he/cooked-salad-matbukha-mekbuba";
  body: string;
  collection: "cuisine";
  data: InferEntrySchema<"cuisine">
} & { render(): Render[".md"] };
"he/cookies-iced-colored.md": {
	id: "he/cookies-iced-colored.md";
  slug: "he/cookies-iced-colored";
  body: string;
  collection: "cuisine";
  data: InferEntrySchema<"cuisine">
} & { render(): Render[".md"] };
"he/couscous.md": {
	id: "he/couscous.md";
  slug: "he/couscous";
  body: string;
  collection: "cuisine";
  data: InferEntrySchema<"cuisine">
} & { render(): Render[".md"] };
"he/croquets.md": {
	id: "he/croquets.md";
  slug: "he/croquets";
  body: string;
  collection: "cuisine";
  data: InferEntrySchema<"cuisine">
} & { render(): Render[".md"] };
"he/crowns.md": {
	id: "he/crowns.md";
  slug: "he/crowns";
  body: string;
  collection: "cuisine";
  data: InferEntrySchema<"cuisine">
} & { render(): Render[".md"] };
"he/datte-rolls.md": {
	id: "he/datte-rolls.md";
  slug: "he/datte-rolls";
  body: string;
  collection: "cuisine";
  data: InferEntrySchema<"cuisine">
} & { render(): Render[".md"] };
"he/discs-jam.md": {
	id: "he/discs-jam.md";
  slug: "he/discs-jam";
  body: string;
  collection: "cuisine";
  data: InferEntrySchema<"cuisine">
} & { render(): Render[".md"] };
"he/halloth.md": {
	id: "he/halloth.md";
  slug: "he/halloth";
  body: string;
  collection: "cuisine";
  data: InferEntrySchema<"cuisine">
} & { render(): Render[".md"] };
"he/honey-cigars.md": {
	id: "he/honey-cigars.md";
  slug: "he/honey-cigars";
  body: string;
  collection: "cuisine";
  data: InferEntrySchema<"cuisine">
} & { render(): Render[".md"] };
"he/knedlet.md": {
	id: "he/knedlet.md";
  slug: "he/knedlet";
  body: string;
  collection: "cuisine";
  data: InferEntrySchema<"cuisine">
} & { render(): Render[".md"] };
"he/makrud.md": {
	id: "he/makrud.md";
  slug: "he/makrud";
  body: string;
  collection: "cuisine";
  data: InferEntrySchema<"cuisine">
} & { render(): Render[".md"] };
"he/mela.md": {
	id: "he/mela.md";
  slug: "he/mela";
  body: string;
  collection: "cuisine";
  data: InferEntrySchema<"cuisine">
} & { render(): Render[".md"] };
"he/nougat-tmarmarchiya.md": {
	id: "he/nougat-tmarmarchiya.md";
  slug: "he/nougat-tmarmarchiya";
  body: string;
  collection: "cuisine";
  data: InferEntrySchema<"cuisine">
} & { render(): Render[".md"] };
"he/prepare-semolina-couscous.md": {
	id: "he/prepare-semolina-couscous.md";
  slug: "he/prepare-semolina-couscous";
  body: string;
  collection: "cuisine";
  data: InferEntrySchema<"cuisine">
} & { render(): Render[".md"] };
"he/quince-jam.md": {
	id: "he/quince-jam.md";
  slug: "he/quince-jam";
  body: string;
  collection: "cuisine";
  data: InferEntrySchema<"cuisine">
} & { render(): Render[".md"] };
"he/rmo.md": {
	id: "he/rmo.md";
  slug: "he/rmo";
  body: string;
  collection: "cuisine";
  data: InferEntrySchema<"cuisine">
} & { render(): Render[".md"] };
"he/rssess.md": {
	id: "he/rssess.md";
  slug: "he/rssess";
  body: string;
  collection: "cuisine";
  data: InferEntrySchema<"cuisine">
} & { render(): Render[".md"] };
"he/salted-cookies.md": {
	id: "he/salted-cookies.md";
  slug: "he/salted-cookies";
  body: string;
  collection: "cuisine";
  data: InferEntrySchema<"cuisine">
} & { render(): Render[".md"] };
"he/seulk-tfina-spinach-chard.md": {
	id: "he/seulk-tfina-spinach-chard.md";
  slug: "he/seulk-tfina-spinach-chard";
  body: string;
  collection: "cuisine";
  data: InferEntrySchema<"cuisine">
} & { render(): Render[".md"] };
"he/sfinj.md": {
	id: "he/sfinj.md";
  slug: "he/sfinj";
  body: string;
  collection: "cuisine";
  data: InferEntrySchema<"cuisine">
} & { render(): Render[".md"] };
"he/tbeih.md": {
	id: "he/tbeih.md";
  slug: "he/tbeih";
  body: string;
  collection: "cuisine";
  data: InferEntrySchema<"cuisine">
} & { render(): Render[".md"] };
"he/tfina-cardoon.md": {
	id: "he/tfina-cardoon.md";
  slug: "he/tfina-cardoon";
  body: string;
  collection: "cuisine";
  data: InferEntrySchema<"cuisine">
} & { render(): Render[".md"] };
"he/tfina-guide.md": {
	id: "he/tfina-guide.md";
  slug: "he/tfina-guide";
  body: string;
  collection: "cuisine";
  data: InferEntrySchema<"cuisine">
} & { render(): Render[".md"] };
"he/tfina-zucchini.md": {
	id: "he/tfina-zucchini.md";
  slug: "he/tfina-zucchini";
  body: string;
  collection: "cuisine";
  data: InferEntrySchema<"cuisine">
} & { render(): Render[".md"] };
"he/tips-succeed-bread.md": {
	id: "he/tips-succeed-bread.md";
  slug: "he/tips-succeed-bread";
  body: string;
  collection: "cuisine";
  data: InferEntrySchema<"cuisine">
} & { render(): Render[".md"] };
};
"general": {
"fr/56mopx0drrhgql4krfqx.md": {
	id: "fr/56mopx0drrhgql4krfqx.md";
  slug: "fr/56mopx0drrhgql4krfqx";
  body: string;
  collection: "general";
  data: InferEntrySchema<"general">
} & { render(): Render[".md"] };
"fr/crxgbshlalxsrrmx0apz.md": {
	id: "fr/crxgbshlalxsrrmx0apz.md";
  slug: "fr/crxgbshlalxsrrmx0apz";
  body: string;
  collection: "general";
  data: InferEntrySchema<"general">
} & { render(): Render[".md"] };
"fr/hwhhdcrux34idispzokp.md": {
	id: "fr/hwhhdcrux34idispzokp.md";
  slug: "fr/hwhhdcrux34idispzokp";
  body: string;
  collection: "general";
  data: InferEntrySchema<"general">
} & { render(): Render[".md"] };
"he/56mopx0drrhgql4krfqx.md": {
	id: "he/56mopx0drrhgql4krfqx.md";
  slug: "he/56mopx0drrhgql4krfqx";
  body: string;
  collection: "general";
  data: InferEntrySchema<"general">
} & { render(): Render[".md"] };
"he/crxgbshlalxsrrmx0apz.md": {
	id: "he/crxgbshlalxsrrmx0apz.md";
  slug: "he/crxgbshlalxsrrmx0apz";
  body: string;
  collection: "general";
  data: InferEntrySchema<"general">
} & { render(): Render[".md"] };
"he/hwhhdcrux34idispzokp.md": {
	id: "he/hwhhdcrux34idispzokp.md";
  slug: "he/hwhhdcrux34idispzokp";
  body: string;
  collection: "general";
  data: InferEntrySchema<"general">
} & { render(): Render[".md"] };
};
"halakha": {
"fr/amida-chemona-essrei.md": {
	id: "fr/amida-chemona-essrei.md";
  slug: "fr/amida-chemona-essrei";
  body: string;
  collection: "halakha";
  data: InferEntrySchema<"halakha">
} & { render(): Render[".md"] };
"fr/ben-hamecarim.md": {
	id: "fr/ben-hamecarim.md";
  slug: "fr/ben-hamecarim";
  body: string;
  collection: "halakha";
  data: InferEntrySchema<"halakha">
} & { render(): Render[".md"] };
"fr/benedictions-apres-repas.md": {
	id: "fr/benedictions-apres-repas.md";
  slug: "fr/benedictions-apres-repas";
  body: string;
  collection: "halakha";
  data: InferEntrySchema<"halakha">
} & { render(): Render[".md"] };
"fr/benedictions-diverses.md": {
	id: "fr/benedictions-diverses.md";
  slug: "fr/benedictions-diverses";
  body: string;
  collection: "halakha";
  data: InferEntrySchema<"halakha">
} & { render(): Render[".md"] };
"fr/benedictions-matin.md": {
	id: "fr/benedictions-matin.md";
  slug: "fr/benedictions-matin";
  body: string;
  collection: "halakha";
  data: InferEntrySchema<"halakha">
} & { render(): Render[".md"] };
"fr/birkath-hamazone.md": {
	id: "fr/birkath-hamazone.md";
  slug: "fr/birkath-hamazone";
  body: string;
  collection: "halakha";
  data: InferEntrySchema<"halakha">
} & { render(): Render[".md"] };
"fr/birkath-kohanim.md": {
	id: "fr/birkath-kohanim.md";
  slug: "fr/birkath-kohanim";
  body: string;
  collection: "halakha";
  data: InferEntrySchema<"halakha">
} & { render(): Render[".md"] };
"fr/brit-mila-pidyon-zebed.md": {
	id: "fr/brit-mila-pidyon-zebed.md";
  slug: "fr/brit-mila-pidyon-zebed";
  body: string;
  collection: "halakha";
  data: InferEntrySchema<"halakha">
} & { render(): Render[".md"] };
"fr/chabbath-lois.md": {
	id: "fr/chabbath-lois.md";
  slug: "fr/chabbath-lois";
  body: string;
  collection: "halakha";
  data: InferEntrySchema<"halakha">
} & { render(): Render[".md"] };
"fr/chabouoth-lois.md": {
	id: "fr/chabouoth-lois.md";
  slug: "fr/chabouoth-lois";
  body: string;
  collection: "halakha";
  data: InferEntrySchema<"halakha">
} & { render(): Render[".md"] };
"fr/chema-yisrael.md": {
	id: "fr/chema-yisrael.md";
  slug: "fr/chema-yisrael";
  body: string;
  collection: "halakha";
  data: InferEntrySchema<"halakha">
} & { render(): Render[".md"] };
"fr/cicioth.md": {
	id: "fr/cicioth.md";
  slug: "fr/cicioth";
  body: string;
  collection: "halakha";
  data: InferEntrySchema<"halakha">
} & { render(): Render[".md"] };
"fr/deuil.md": {
	id: "fr/deuil.md";
  slug: "fr/deuil";
  body: string;
  collection: "halakha";
  data: InferEntrySchema<"halakha">
} & { render(): Render[".md"] };
"fr/edot-mizrah-yalkout-yossef.md": {
	id: "fr/edot-mizrah-yalkout-yossef.md";
  slug: "fr/edot-mizrah-yalkout-yossef";
  body: string;
  collection: "halakha";
  data: InferEntrySchema<"halakha">
} & { render(): Render[".md"] };
"fr/guide-minhagim-annee.md": {
	id: "fr/guide-minhagim-annee.md";
  slug: "fr/guide-minhagim-annee";
  body: string;
  collection: "halakha";
  data: InferEntrySchema<"halakha">
} & { render(): Render[".md"] };
"fr/hannoukah-lois.md": {
	id: "fr/hannoukah-lois.md";
  slug: "fr/hannoukah-lois";
  body: string;
  collection: "halakha";
  data: InferEntrySchema<"halakha">
} & { render(): Render[".md"] };
"fr/histoire-minhagim-et-pourquoi-garder.md": {
	id: "fr/histoire-minhagim-et-pourquoi-garder.md";
  slug: "fr/histoire-minhagim-et-pourquoi-garder";
  body: string;
  collection: "halakha";
  data: InferEntrySchema<"halakha">
} & { render(): Render[".md"] };
"fr/kippour.md": {
	id: "fr/kippour.md";
  slug: "fr/kippour";
  body: string;
  collection: "halakha";
  data: InferEntrySchema<"halakha">
} & { render(): Render[".md"] };
"fr/lois-mariage.md": {
	id: "fr/lois-mariage.md";
  slug: "fr/lois-mariage";
  body: string;
  collection: "halakha";
  data: InferEntrySchema<"halakha">
} & { render(): Render[".md"] };
"fr/loulab-lois.md": {
	id: "fr/loulab-lois.md";
  slug: "fr/loulab-lois";
  body: string;
  collection: "halakha";
  data: InferEntrySchema<"halakha">
} & { render(): Render[".md"] };
"fr/meghila-esther-pourim-lois.md": {
	id: "fr/meghila-esther-pourim-lois.md";
  slug: "fr/meghila-esther-pourim-lois";
  body: string;
  collection: "halakha";
  data: InferEntrySchema<"halakha">
} & { render(): Render[".md"] };
"fr/mezouza.md": {
	id: "fr/mezouza.md";
  slug: "fr/mezouza";
  body: string;
  collection: "halakha";
  data: InferEntrySchema<"halakha">
} & { render(): Render[".md"] };
"fr/moci-lois.md": {
	id: "fr/moci-lois.md";
  slug: "fr/moci-lois";
  body: string;
  collection: "halakha";
  data: InferEntrySchema<"halakha">
} & { render(): Render[".md"] };
"fr/netilath-yadaim.md": {
	id: "fr/netilath-yadaim.md";
  slug: "fr/netilath-yadaim";
  body: string;
  collection: "halakha";
  data: InferEntrySchema<"halakha">
} & { render(): Render[".md"] };
"fr/pessah-lois.md": {
	id: "fr/pessah-lois.md";
  slug: "fr/pessah-lois";
  body: string;
  collection: "halakha";
  data: InferEntrySchema<"halakha">
} & { render(): Render[".md"] };
"fr/priere-arbith.md": {
	id: "fr/priere-arbith.md";
  slug: "fr/priere-arbith";
  body: string;
  collection: "halakha";
  data: InferEntrySchema<"halakha">
} & { render(): Render[".md"] };
"fr/priere-minha.md": {
	id: "fr/priere-minha.md";
  slug: "fr/priere-minha";
  body: string;
  collection: "halakha";
  data: InferEntrySchema<"halakha">
} & { render(): Render[".md"] };
"fr/prononciation.md": {
	id: "fr/prononciation.md";
  slug: "fr/prononciation";
  body: string;
  collection: "halakha";
  data: InferEntrySchema<"halakha">
} & { render(): Render[".md"] };
"fr/roch-hachana-lois.md": {
	id: "fr/roch-hachana-lois.md";
  slug: "fr/roch-hachana-lois";
  body: string;
  collection: "halakha";
  data: InferEntrySchema<"halakha">
} & { render(): Render[".md"] };
"fr/roch-hodech-lois.md": {
	id: "fr/roch-hodech-lois.md";
  slug: "fr/roch-hodech-lois";
  body: string;
  collection: "halakha";
  data: InferEntrySchema<"halakha">
} & { render(): Render[".md"] };
"fr/seoudat-siyoum-yitro.md": {
	id: "fr/seoudat-siyoum-yitro.md";
  slug: "fr/seoudat-siyoum-yitro";
  body: string;
  collection: "halakha";
  data: InferEntrySchema<"halakha">
} & { render(): Render[".md"] };
"fr/soukkah-lois.md": {
	id: "fr/soukkah-lois.md";
  slug: "fr/soukkah-lois";
  body: string;
  collection: "halakha";
  data: InferEntrySchema<"halakha">
} & { render(): Render[".md"] };
"fr/tefilines.md": {
	id: "fr/tefilines.md";
  slug: "fr/tefilines";
  body: string;
  collection: "halakha";
  data: InferEntrySchema<"halakha">
} & { render(): Render[".md"] };
"fr/textes-piyoutim.md": {
	id: "fr/textes-piyoutim.md";
  slug: "fr/textes-piyoutim";
  body: string;
  collection: "halakha";
  data: InferEntrySchema<"halakha">
} & { render(): Render[".md"] };
"fr/torah-lecture.md": {
	id: "fr/torah-lecture.md";
  slug: "fr/torah-lecture";
  body: string;
  collection: "halakha";
  data: InferEntrySchema<"halakha">
} & { render(): Render[".md"] };
"fr/tou-bichvath.md": {
	id: "fr/tou-bichvath.md";
  slug: "fr/tou-bichvath";
  body: string;
  collection: "halakha";
  data: InferEntrySchema<"halakha">
} & { render(): Render[".md"] };
"fr/yom-tob-lois.md": {
	id: "fr/yom-tob-lois.md";
  slug: "fr/yom-tob-lois";
  body: string;
  collection: "halakha";
  data: InferEntrySchema<"halakha">
} & { render(): Render[".md"] };
"he/amida-shemona-essrei.md": {
	id: "he/amida-shemona-essrei.md";
  slug: "he/amida-shemona-essrei";
  body: string;
  collection: "halakha";
  data: InferEntrySchema<"halakha">
} & { render(): Render[".md"] };
"he/ben-hametsarim.md": {
	id: "he/ben-hametsarim.md";
  slug: "he/ben-hametsarim";
  body: string;
  collection: "halakha";
  data: InferEntrySchema<"halakha">
} & { render(): Render[".md"] };
"he/birkath-hamazon.md": {
	id: "he/birkath-hamazon.md";
  slug: "he/birkath-hamazon";
  body: string;
  collection: "halakha";
  data: InferEntrySchema<"halakha">
} & { render(): Render[".md"] };
"he/birkath-kohanim.md": {
	id: "he/birkath-kohanim.md";
  slug: "he/birkath-kohanim";
  body: string;
  collection: "halakha";
  data: InferEntrySchema<"halakha">
} & { render(): Render[".md"] };
"he/blessings-after-meal.md": {
	id: "he/blessings-after-meal.md";
  slug: "he/blessings-after-meal";
  body: string;
  collection: "halakha";
  data: InferEntrySchema<"halakha">
} & { render(): Render[".md"] };
"he/blessings-mix.md": {
	id: "he/blessings-mix.md";
  slug: "he/blessings-mix";
  body: string;
  collection: "halakha";
  data: InferEntrySchema<"halakha">
} & { render(): Render[".md"] };
"he/brakhoth-morning.md": {
	id: "he/brakhoth-morning.md";
  slug: "he/brakhoth-morning";
  body: string;
  collection: "halakha";
  data: InferEntrySchema<"halakha">
} & { render(): Render[".md"] };
"he/brith-pidyion-zebed-he.md": {
	id: "he/brith-pidyion-zebed-he.md";
  slug: "he/brith-pidyion-zebed-he";
  body: string;
  collection: "halakha";
  data: InferEntrySchema<"halakha">
} & { render(): Render[".md"] };
"he/cicioth.md": {
	id: "he/cicioth.md";
  slug: "he/cicioth";
  body: string;
  collection: "halakha";
  data: InferEntrySchema<"halakha">
} & { render(): Render[".md"] };
"he/edoth-hamirakh-yalkout-yossef.md": {
	id: "he/edoth-hamirakh-yalkout-yossef.md";
  slug: "he/edoth-hamirakh-yalkout-yossef";
  body: string;
  collection: "halakha";
  data: InferEntrySchema<"halakha">
} & { render(): Render[".md"] };
"he/hannukah-laws.md": {
	id: "he/hannukah-laws.md";
  slug: "he/hannukah-laws";
  body: string;
  collection: "halakha";
  data: InferEntrySchema<"halakha">
} & { render(): Render[".md"] };
"he/history-minhagim-and-why-keep-them.md": {
	id: "he/history-minhagim-and-why-keep-them.md";
  slug: "he/history-minhagim-and-why-keep-them";
  body: string;
  collection: "halakha";
  data: InferEntrySchema<"halakha">
} & { render(): Render[".md"] };
"he/kippur.md": {
	id: "he/kippur.md";
  slug: "he/kippur";
  body: string;
  collection: "halakha";
  data: InferEntrySchema<"halakha">
} & { render(): Render[".md"] };
"he/laws-wedding.md": {
	id: "he/laws-wedding.md";
  slug: "he/laws-wedding";
  body: string;
  collection: "halakha";
  data: InferEntrySchema<"halakha">
} & { render(): Render[".md"] };
"he/lulab-laws.md": {
	id: "he/lulab-laws.md";
  slug: "he/lulab-laws";
  body: string;
  collection: "halakha";
  data: InferEntrySchema<"halakha">
} & { render(): Render[".md"] };
"he/mezuza.md": {
	id: "he/mezuza.md";
  slug: "he/mezuza";
  body: string;
  collection: "halakha";
  data: InferEntrySchema<"halakha">
} & { render(): Render[".md"] };
"he/minha-prayer.md": {
	id: "he/minha-prayer.md";
  slug: "he/minha-prayer";
  body: string;
  collection: "halakha";
  data: InferEntrySchema<"halakha">
} & { render(): Render[".md"] };
"he/minhagim-quick-guide.md": {
	id: "he/minhagim-quick-guide.md";
  slug: "he/minhagim-quick-guide";
  body: string;
  collection: "halakha";
  data: InferEntrySchema<"halakha">
} & { render(): Render[".md"] };
"he/moci-laws.md": {
	id: "he/moci-laws.md";
  slug: "he/moci-laws";
  body: string;
  collection: "halakha";
  data: InferEntrySchema<"halakha">
} & { render(): Render[".md"] };
"he/mourning.md": {
	id: "he/mourning.md";
  slug: "he/mourning";
  body: string;
  collection: "halakha";
  data: InferEntrySchema<"halakha">
} & { render(): Render[".md"] };
"he/netilath-yadaim.md": {
	id: "he/netilath-yadaim.md";
  slug: "he/netilath-yadaim";
  body: string;
  collection: "halakha";
  data: InferEntrySchema<"halakha">
} & { render(): Render[".md"] };
"he/pessah-laws.md": {
	id: "he/pessah-laws.md";
  slug: "he/pessah-laws";
  body: string;
  collection: "halakha";
  data: InferEntrySchema<"halakha">
} & { render(): Render[".md"] };
"he/prayer-arbith.md": {
	id: "he/prayer-arbith.md";
  slug: "he/prayer-arbith";
  body: string;
  collection: "halakha";
  data: InferEntrySchema<"halakha">
} & { render(): Render[".md"] };
"he/pronunciation.md": {
	id: "he/pronunciation.md";
  slug: "he/pronunciation";
  body: string;
  collection: "halakha";
  data: InferEntrySchema<"halakha">
} & { render(): Render[".md"] };
"he/purim-meguila-esther-laws.md": {
	id: "he/purim-meguila-esther-laws.md";
  slug: "he/purim-meguila-esther-laws";
  body: string;
  collection: "halakha";
  data: InferEntrySchema<"halakha">
} & { render(): Render[".md"] };
"he/rosh-hashana-laws.md": {
	id: "he/rosh-hashana-laws.md";
  slug: "he/rosh-hashana-laws";
  body: string;
  collection: "halakha";
  data: InferEntrySchema<"halakha">
} & { render(): Render[".md"] };
"he/rosh-hodesh-laws.md": {
	id: "he/rosh-hodesh-laws.md";
  slug: "he/rosh-hodesh-laws";
  body: string;
  collection: "halakha";
  data: InferEntrySchema<"halakha">
} & { render(): Render[".md"] };
"he/seudat-siyum-yitro.md": {
	id: "he/seudat-siyum-yitro.md";
  slug: "he/seudat-siyum-yitro";
  body: string;
  collection: "halakha";
  data: InferEntrySchema<"halakha">
} & { render(): Render[".md"] };
"he/shabbath-laws.md": {
	id: "he/shabbath-laws.md";
  slug: "he/shabbath-laws";
  body: string;
  collection: "halakha";
  data: InferEntrySchema<"halakha">
} & { render(): Render[".md"] };
"he/shabuoth-laws.md": {
	id: "he/shabuoth-laws.md";
  slug: "he/shabuoth-laws";
  body: string;
  collection: "halakha";
  data: InferEntrySchema<"halakha">
} & { render(): Render[".md"] };
"he/shema-yisrael.md": {
	id: "he/shema-yisrael.md";
  slug: "he/shema-yisrael";
  body: string;
  collection: "halakha";
  data: InferEntrySchema<"halakha">
} & { render(): Render[".md"] };
"he/sukkah-laws.md": {
	id: "he/sukkah-laws.md";
  slug: "he/sukkah-laws";
  body: string;
  collection: "halakha";
  data: InferEntrySchema<"halakha">
} & { render(): Render[".md"] };
"he/tefilin.md": {
	id: "he/tefilin.md";
  slug: "he/tefilin";
  body: string;
  collection: "halakha";
  data: InferEntrySchema<"halakha">
} & { render(): Render[".md"] };
"he/texts-piyutim.md": {
	id: "he/texts-piyutim.md";
  slug: "he/texts-piyutim";
  body: string;
  collection: "halakha";
  data: InferEntrySchema<"halakha">
} & { render(): Render[".md"] };
"he/torah-reading.md": {
	id: "he/torah-reading.md";
  slug: "he/torah-reading";
  body: string;
  collection: "halakha";
  data: InferEntrySchema<"halakha">
} & { render(): Render[".md"] };
"he/tu-bishvath.md": {
	id: "he/tu-bishvath.md";
  slug: "he/tu-bishvath";
  body: string;
  collection: "halakha";
  data: InferEntrySchema<"halakha">
} & { render(): Render[".md"] };
"he/yom-tob-laws.md": {
	id: "he/yom-tob-laws.md";
  slug: "he/yom-tob-laws";
  body: string;
  collection: "halakha";
  data: InferEntrySchema<"halakha">
} & { render(): Render[".md"] };
};
"hazanout": {
"fr/hazanout-differences-mizrahi.md": {
	id: "fr/hazanout-differences-mizrahi.md";
  slug: "fr/hazanout-differences-mizrahi";
  body: string;
  collection: "hazanout";
  data: InferEntrySchema<"hazanout">
} & { render(): Render[".md"] };
"fr/hazanout-enfants.md": {
	id: "fr/hazanout-enfants.md";
  slug: "fr/hazanout-enfants";
  body: string;
  collection: "hazanout";
  data: InferEntrySchema<"hazanout">
} & { render(): Render[".md"] };
"fr/hazanout-liturgie.md": {
	id: "fr/hazanout-liturgie.md";
  slug: "fr/hazanout-liturgie";
  body: string;
  collection: "hazanout";
  data: InferEntrySchema<"hazanout">
} & { render(): Render[".md"] };
"fr/melodies-tanakh.md": {
	id: "fr/melodies-tanakh.md";
  slug: "fr/melodies-tanakh";
  body: string;
  collection: "hazanout";
  data: InferEntrySchema<"hazanout">
} & { render(): Render[".md"] };
"fr/taamim-cantillation.md": {
	id: "fr/taamim-cantillation.md";
  slug: "fr/taamim-cantillation";
  body: string;
  collection: "hazanout";
  data: InferEntrySchema<"hazanout">
} & { render(): Render[".md"] };
"fr/tehilim-psaumes.md": {
	id: "fr/tehilim-psaumes.md";
  slug: "fr/tehilim-psaumes";
  body: string;
  collection: "hazanout";
  data: InferEntrySchema<"hazanout">
} & { render(): Render[".md"] };
"he/children.md": {
	id: "he/children.md";
  slug: "he/children";
  body: string;
  collection: "hazanout";
  data: InferEntrySchema<"hazanout">
} & { render(): Render[".md"] };
"he/difference-edot-hamizrah-yerushalmi.md": {
	id: "he/difference-edot-hamizrah-yerushalmi.md";
  slug: "he/difference-edot-hamizrah-yerushalmi";
  body: string;
  collection: "hazanout";
  data: InferEntrySchema<"hazanout">
} & { render(): Render[".md"] };
"he/hazanout.md": {
	id: "he/hazanout.md";
  slug: "he/hazanout";
  body: string;
  collection: "hazanout";
  data: InferEntrySchema<"hazanout">
} & { render(): Render[".md"] };
"he/taamim-cantillation.md": {
	id: "he/taamim-cantillation.md";
  slug: "he/taamim-cantillation";
  body: string;
  collection: "hazanout";
  data: InferEntrySchema<"hazanout">
} & { render(): Render[".md"] };
"he/tanakh-melodies.md": {
	id: "he/tanakh-melodies.md";
  slug: "he/tanakh-melodies";
  body: string;
  collection: "hazanout";
  data: InferEntrySchema<"hazanout">
} & { render(): Render[".md"] };
"he/tehilim-psalms.md": {
	id: "he/tehilim-psalms.md";
  slug: "he/tehilim-psalms";
  body: string;
  collection: "hazanout";
  data: InferEntrySchema<"hazanout">
} & { render(): Render[".md"] };
};
"pages": {
"fr/a-propos.md": {
	id: "fr/a-propos.md";
  slug: "fr/a-propos";
  body: string;
  collection: "pages";
  data: InferEntrySchema<"pages">
} & { render(): Render[".md"] };
"fr/contact.md": {
	id: "fr/contact.md";
  slug: "fr/contact";
  body: string;
  collection: "pages";
  data: InferEntrySchema<"pages">
} & { render(): Render[".md"] };
"fr/donate.md": {
	id: "fr/donate.md";
  slug: "fr/donate";
  body: string;
  collection: "pages";
  data: InferEntrySchema<"pages">
} & { render(): Render[".md"] };
"fr/english.md": {
	id: "fr/english.md";
  slug: "fr/english";
  body: string;
  collection: "pages";
  data: InferEntrySchema<"pages">
} & { render(): Render[".md"] };
"fr/fiches-a-imprimer.md": {
	id: "fr/fiches-a-imprimer.md";
  slug: "fr/fiches-a-imprimer";
  body: string;
  collection: "pages";
  data: InferEntrySchema<"pages">
} & { render(): Render[".md"] };
"fr/rabbins.md": {
	id: "fr/rabbins.md";
  slug: "fr/rabbins";
  body: string;
  collection: "pages";
  data: InferEntrySchema<"pages">
} & { render(): Render[".md"] };
"fr/siddour.md": {
	id: "fr/siddour.md";
  slug: "fr/siddour";
  body: string;
  collection: "pages";
  data: InferEntrySchema<"pages">
} & { render(): Render[".md"] };
"he/about.md": {
	id: "he/about.md";
  slug: "he/about";
  body: string;
  collection: "pages";
  data: InferEntrySchema<"pages">
} & { render(): Render[".md"] };
"he/contact-network.md": {
	id: "he/contact-network.md";
  slug: "he/contact-network";
  body: string;
  collection: "pages";
  data: InferEntrySchema<"pages">
} & { render(): Render[".md"] };
"he/donate.md": {
	id: "he/donate.md";
  slug: "he/donate";
  body: string;
  collection: "pages";
  data: InferEntrySchema<"pages">
} & { render(): Render[".md"] };
"he/english.md": {
	id: "he/english.md";
  slug: "he/english";
  body: string;
  collection: "pages";
  data: InferEntrySchema<"pages">
} & { render(): Render[".md"] };
"he/print.md": {
	id: "he/print.md";
  slug: "he/print";
  body: string;
  collection: "pages";
  data: InferEntrySchema<"pages">
} & { render(): Render[".md"] };
"he/rabbanim.md": {
	id: "he/rabbanim.md";
  slug: "he/rabbanim";
  body: string;
  collection: "pages";
  data: InferEntrySchema<"pages">
} & { render(): Render[".md"] };
"he/siddur.md": {
	id: "he/siddur.md";
  slug: "he/siddur";
  body: string;
  collection: "pages";
  data: InferEntrySchema<"pages">
} & { render(): Render[".md"] };
};
"siddur": {
"fr/siddour.md": {
	id: "fr/siddour.md";
  slug: "fr/siddour";
  body: string;
  collection: "siddur";
  data: InferEntrySchema<"siddur">
} & { render(): Render[".md"] };
"he/siddur.md": {
	id: "he/siddur.md";
  slug: "he/siddur";
  body: string;
  collection: "siddur";
  data: InferEntrySchema<"siddur">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("./../../src/content/config.js");
}
