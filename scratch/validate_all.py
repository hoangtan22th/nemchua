import glob
import os
import re

html_files = glob.glob("*.html")
errors = []

for html_file in html_files:
    with open(html_file, "r", encoding="utf-8") as f:
        content = f.read()

    # Find src and href attributes referencing local files
    local_refs = re.findall(r'(?:src|href)=["\'](\./[^"\']+|assets/[^"\']+)["\']', content)
    for ref in local_refs:
        # Strip query parameters or hashes
        clean_ref = ref.split("?")[0].split("#")[0]
        if clean_ref.startswith("./"):
            clean_ref = clean_ref[2:]
        if not os.path.exists(clean_ref):
            errors.append(f"{html_file}: Reference not found -> {ref} (cleaned: {clean_ref})")

if errors:
    print(f"FAILED with {len(errors)} errors:")
    for err in errors:
        print("  -", err)
else:
    print(f"SUCCESS: All {len(html_files)} HTML files verified! 0 broken asset references.")

