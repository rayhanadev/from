# Cloudflare Workers Template

This template makes it easy to build and run [Cloudflare Workers](https://developers.cloudflare.com/workers/), which can be published to the [Cloudflare Global Network](https://www.cloudflare.com/network/), or run directly from Replit using `wrangler dev` (no Cloudflare account required.) In the future, `wrangler dev` will be powered by [Workerd](https://github.com/cloudflare/workerd), our Open-Source Workers runtime.

## Setup

### Initialize a Workers project

Click **Run** in your Replit workspace to set up a Workers project with customizable settings. By default, it will initialize a git repository, set up a TypeScript project, and create a Fetch handler.

### Add Cloudflare credentials to Replit secrets (Optional)
This is only needed for publishing the Worker to Cloudflare - it is not needed for running dev mode in Replit.

#### First, add your Cloudflare API token:

1. Log in to the [Cloudflare Dashboard](https://dash.cloudflare.com/).
2. In **Account Home**, select **My Profile** on the top right.
3. Select **API Tokens** on the left-hand navigation.
4. Select **Create Token**.
5. Go to **Edit Cloudflare Workers** under **API Token Templates** and select **Use Template**.
6. Under **Account Resources**, select *All accounts* (or a specific account).
7. Under **Zone Resources**, change *Specific zone* to *All zones*.
8. Select **Continue to summary**.
9. Select  **Create Token**.
10. This gives you the API token needed. Copy it to [Replit secrets](https://docs.replit.com/programming-ide/storing-sensitive-information-environment-variables) with the name `CLOUDFLARE_API_TOKEN`.

#### Next, add your Cloudflare Account ID:

1. Log in to the Cloudflare dashboard > [**Workers**](https://dash.cloudflare.com/?to=/:account/workers/overview).
2. In **Workers**, find your **Account ID** on the right side of the screen.
3. Select **Click to copy** to copy your Account ID.
4. Add this to [Replit secrets](https://docs.replit.com/programming-ide/storing-sensitive-information-environment-variables) with the name `CLOUDFLARE_ACCOUNT_ID`.

#### You should have three secrets added to Replit secrets:

- `CLOUDFLARE_ACCOUNT_ID`
- `CLOUDFLARE_API_TOKEN`
- `WRANGLER_SEND_METRICS`

### Silence Wrangler metrics prompts
By default, Wrangler will prompt for sending metrics every time a Repl is booted up. To silence this prompt:

1. [Add a Replit secret](https://docs.replit.com/programming-ide/storing-sensitive-information-environment-variables) with the name `WRANGLER_SEND_METRICS`
2. Use value `true` to send anonymous metrics to Cloudflare, or `false` to opt-out.

### Update the name of your Worker in `wrangler.toml` (optional)

```toml
name = "YOUR-WORKER-NAME"
```

## Commands

### Deploy Worker to Cloudflare
Before deploying your Worker to Cloudflare, make sure that you have completed the **Add Cloudflare credentials to Replit secrets** step. If you do not add Cloudflare credentials, your project will deploy to a Replit subdomain. After adding Cloudflare credentials to Replit secrets, publish your Worker to the Cloudflare global network. You can publish to a custom domain, or, if not configured, the Worker will publish to a `*.workers.dev` subdomain by default. To set up a `*.workers.dev` subdomain, go to the Cloudflare dashboard > **Workers** > Your subdomain > Change. To set up a custom domain, go to **Workers** in the Cloudflare dashboard > select your Worker > **Triggers** > **Add Custom Domain**. To publish your project, run:

```shell
npm run deploy
```

### Develop and run in Replit

By default, the Run button in your Replit workspace will run your Worker in dev mode, which allows Replit to run your Worker. In the future, this will be backed by our  [Open-source Runtime, Workerd](https://github.com/cloudflare/workerd).

When you deploy your project using the Replit workspace without configuring Cloudflare credentials as secrets, your project will be available on a Replit subdomain as long as the Replit workspace is open. To keep your Worker running when the Replit workspace is closed, enable Always On in your Replit workspace settings.

If you chose to set the **Run** button to publish to Cloudflare, you can still run the Worker in local development mode with:

```shell
npm run start
```

### Develop with persistent data

To persist development data between sessions, run:

```shell
npm run start-persist
```

### Run tests

Tests are a great way to ensure your project works as expected. To run tests at any time, run:

```shell
npm run test
```

### Update Replit's Run button

By default, `replit-run-command` is set to `npm run start`, but it can be set to any of the above commands. To change the  Run command:

1. Open `package.json`.
2. Update `replit-run-command` to any of the above commands (or any custom command).

## Discord

Join the Cloudflare Developers community Discord:
https://discord.gg/cloudflaredev
