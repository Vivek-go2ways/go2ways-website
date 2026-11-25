#!/bin/bash
set -euo pipefail
BASE=/var/www/go2ways
R="$BASE/releases/$SHA"
PREV="$(readlink -f "$BASE/current" 2>/dev/null || true)"

mkdir -p "$R"
tar -xzf /home/ubuntu/release.tar.gz -C "$R"
rm -f /home/ubuntu/release.tar.gz
chown -R www-data:www-data "$R"

ln -sfn "$R" "$BASE/current"
systemctl restart go2ways-web
sleep 5

if curl -fsS http://127.0.0.1:3000/ > /dev/null; then
  echo "Health check passed"
else
  echo "Health check FAILED, rolling back"
  if [ -n "$PREV" ] && [ -d "$PREV" ]; then
    ln -sfn "$PREV" "$BASE/current"
    systemctl restart go2ways-web
  fi
  exit 1
fi

cd "$BASE/releases" && ls -1t | tail -n +4 | xargs -r rm -rf