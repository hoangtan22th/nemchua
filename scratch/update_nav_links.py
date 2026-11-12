import glob

html_files = glob.glob("*.html")
updated = []

for f in html_files:
    with open(f, "r", encoding="utf-8") as fp:
        content = fp.read()

    changed = False

    # 1. Update GIỚI THIỆU link in header navbar
    if '<a href="#" class="header__nav-link">GIỚI THIỆU</a>' in content:
        content = content.replace('<a href="#" class="header__nav-link">GIỚI THIỆU</a>', '<a href="./about.html" class="header__nav-link">GIỚI THIỆU</a>')
        changed = True

    # 2. Update LIÊN HỆ link in header navbar
    if '<a href="#footer" class="header__nav-link">LIÊN HỆ</a>' in content:
        content = content.replace('<a href="#footer" class="header__nav-link">LIÊN HỆ</a>', '<a href="./contact.html" class="header__nav-link">LIÊN HỆ</a>')
        changed = True

    # 3. Update footer Giới thiệu link
    if '<li><a href="./index.html#storeSystem">Giới thiệu</a></li>' in content:
        content = content.replace('<li><a href="./index.html#storeSystem">Giới thiệu</a></li>', '<li><a href="./about.html">Giới thiệu</a></li>')
        changed = True

    if changed:
        with open(f, "w", encoding="utf-8") as fp:
            fp.write(content)
        updated.append(f)

print(f"Updated nav links in {len(updated)} files:", updated)

