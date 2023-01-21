echo -n "Path: "
read -r path

echo -n "Redirect: "
read -r redirect

npx wrangler kv:key put "$path" "$redirect" --binding REDIRECTS --preview false
npx wrangler kv:key put "$path" "$redirect" --binding REDIRECTS --preview