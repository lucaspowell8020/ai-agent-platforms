"""Filter and rank the platforms dataset.

    python python.py

Standard library only. Python 3.8+.
"""

import json
import urllib.request
from collections import defaultdict

URL = "https://raw.githubusercontent.com/lucaspowell8020/ai-agent-platforms/main/platforms.json"

data = json.loads(urllib.request.urlopen(URL).read())

print(f"Verified: {data['verifiedDate']}")
print(f"Total platforms: {len(data['platforms'])}\n")

# Top pick per category
by_category = defaultdict(list)
for p in data["platforms"]:
    by_category[p["category"]].append(p)

for category, plist in by_category.items():
    top = max(plist, key=lambda p: p["rating"])
    print(f"{category.upper():<12} {top['name']} ({top['rating']}) — {top['bestFor']}")

print("\nOpen-source picks for builders comfortable with code:\n")
oss = [p for p in data["platforms"] if p["openSource"] and p["techLevel"] != "no-code"]
for p in sorted(oss, key=lambda p: -p["rating"]):
    print(f"  {p['name']:<20} {p['rating']}  {p['tagline']}")
