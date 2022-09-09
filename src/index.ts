import { HDict, HMarker, HNum } from 'haystack-core'
import { Site, isSite } from './haystack/types'
import { resolveDefaultNamespace } from 'haystack-codegen/dist/namespace'

async function run() {
	const namespace = await resolveDefaultNamespace()

	const site = new HDict({}) as Site

	site.site = HMarker.make()
	site.area = HNum.make(123)

	if (isSite(site, namespace)) {
		console.log('Dict is a site record -> ', site.toZinc())
	} else {
		console.log('Dict is NOT a valid site!')
	}
}

run()
