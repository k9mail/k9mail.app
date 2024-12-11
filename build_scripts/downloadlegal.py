#!/usr/bin/env python

import urllib.request as request

# Download the Thunderbird Privacy Policy and fit it into our layout

THUNDERBIRD_PRIVACY_POLICY_URL = "https://raw.githubusercontent.com/mozilla/legal-docs/main/en/thunderbird_privacy_policy.md"

JEKYLL_HEADER = """
---
layout: doc
title: K-9 Mail Privacy Notice
---
""".strip()


def main():
    url = f"{THUNDERBIRD_PRIVACY_POLICY_URL}"
    with request.urlopen(url) as response:
        contents = (
            response.read()
            .decode("utf-8")
            .replace("Thunderbird Privacy Notice", "K-9 Mail Privacy Notice")
        )

    with open("privacy.md", "w") as file:
        file.write(f"{JEKYLL_HEADER}\n\n{contents}")


if __name__ == "__main__":
    main()
