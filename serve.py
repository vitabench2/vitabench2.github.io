#!/usr/bin/env python3
"""Tiny static file server that avoids os.getcwd() at import time."""
import os, sys
ROOT = os.path.dirname(os.path.abspath(__file__))
os.chdir(ROOT)
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8765
with ThreadingHTTPServer(("127.0.0.1", PORT), SimpleHTTPRequestHandler) as httpd:
    print(f"Serving {ROOT} on http://127.0.0.1:{PORT}/", flush=True)
    httpd.serve_forever()
