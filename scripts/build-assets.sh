#!/usr/bin/env bash
#
# Regenerates the two static binary assets that are authored as HTML:
#
#   scripts/cv.html        ->  src/assets/resume/Yomna_Salah_Flutter_Mobile_Developer_CV.pdf
#   scripts/og-image.html  ->  public/og-image.jpg
#
# Requires Google Chrome (installed on macOS) and Python 3 with Pillow.
#
# Usage:  ./scripts/build-assets.sh
#
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
BUILD="$(mktemp -d)"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

if [[ ! -x "$CHROME" ]]; then
  echo "error: Chrome not found at $CHROME" >&2
  exit 1
fi

echo "==> Building CV PDF"
cp "$ROOT/scripts/cv.html" "$BUILD/cv.html"
"$CHROME" --headless=new --disable-gpu --no-sandbox --no-pdf-header-footer \
  --print-to-pdf="$BUILD/cv.pdf" --virtual-time-budget=20000 \
  "file://$BUILD/cv.html" 2>/dev/null
cp "$BUILD/cv.pdf" "$ROOT/src/assets/resume/Yomna_Salah_Flutter_Mobile_Developer_CV.pdf"
echo "    -> src/assets/resume/Yomna_Salah_Flutter_Mobile_Developer_CV.pdf"

echo "==> Building OG image"
cp "$ROOT/scripts/og-image.html" "$BUILD/og.html"
"$CHROME" --headless=new --disable-gpu --no-sandbox --hide-scrollbars \
  --force-device-scale-factor=1 --window-size=1200,630 --virtual-time-budget=15000 \
  --screenshot="$BUILD/og.png" "file://$BUILD/og.html" 2>/dev/null
python3 - "$BUILD/og.png" "$ROOT/public/og-image.jpg" <<'PY'
import sys
from PIL import Image
src, dst = sys.argv[1], sys.argv[2]
Image.open(src).convert("RGB").save(dst, "JPEG", quality=90, optimize=True, progressive=True)
PY
echo "    -> public/og-image.jpg"

rm -rf "$BUILD"
echo "==> Done"
