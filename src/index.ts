/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `wrangler dev src/index.ts` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `wrangler publish src/index.ts --name my-worker` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export interface Env {
	REDIRECTS: KVNamespace;
}

export default {
	async fetch(
		request: Request,
		env: Env,
		_ctx: ExecutionContext
	): Promise<Response> {
		const url = new URL(request.url);
		const { pathname } = url;

		if(pathname === '/') {
			return Response.redirect('https://www.furret.dev', 301);
		}

		if(pathname.startsWith('/to/')) {
			const key = pathname.replace('/to/', '');
			if(!key) return new Response(null, { status: 404 });
			
			const redirectURL = await env.REDIRECTS.get(key);

			if (!redirectURL) {
				return new Response(null, { status: 404 });
			}
		
			return Response.redirect(redirectURL, 301);
		}
	
		return new Response(null, { status: 404 });
	},
};