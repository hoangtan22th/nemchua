import glob
import os

html_files = glob.glob("*.html")
updated_count = 0

for f in html_files:
    if f in ["cart.html", "checkout.html", "order-complete.html"]:
        continue
    with open(f, "r", encoding="utf-8") as fp:
        content = fp.read()

    changed = False

    # 1. Update header__cart href
    if '<a href="#" class="header__cart">' in content:
        content = content.replace('<a href="#" class="header__cart">', '<a href="./cart.html" class="header__cart">')
        changed = True
    if '<a href="#cart" class="header__cart">' in content:
        content = content.replace('<a href="#cart" class="header__cart">', '<a href="./cart.html" class="header__cart">')
        changed = True

    # 2. Add cart.js if missing
    if "assets/js/cart.js" not in content:
        if '<script src="./assets/js/main.js"></script>' in content:
            content = content.replace(
                '<script src="./assets/js/main.js"></script>',
                '<script src="./assets/js/cart.js"></script>\n  <script src="./assets/js/main.js"></script>'
            )
            changed = True
        elif '<script src="assets/js/main.js"></script>' in content:
            content = content.replace(
                '<script src="assets/js/main.js"></script>',
                '<script src="assets/js/cart.js"></script>\n  <script src="assets/js/main.js"></script>'
            )
            changed = True

    if changed:
        with open(f, "w", encoding="utf-8") as fp:
            fp.write(content)
        updated_count += 1
        print(f"Updated {f}")

print(f"Finished. Total files updated: {updated_count}")

