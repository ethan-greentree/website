---
title: "Homelab"
summary: "An old desktop PC repurposed as a Proxmox host, running Pi-hole and a Minecraft server at home."
status: "Live"
tech:
  - "Proxmox"
  - "Pi-hole"
  - "Minecraft server"
  - "Tailscale (planned)"
order: 3
diagram: "homelab"
---

My homelab is an old Lenovo desktop that I've repurposed as a Proxmox host, so I can run my own services at home.

Today it runs Pi-hole, which blocks ads and trackers for the home network, and a Minecraft server for my wife and me. Next, I plan to add Tailscale so I can reach the services privately from anywhere, and to host more of my projects on it over time.

Setup was mostly smooth. At first the SSD didn't work with one of the BIOS settings. Changing it was an easy fix, Proxmox installed cleanly, and it's run without issues since.
