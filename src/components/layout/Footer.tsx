import Link from "next/link";
import Image from "next/image";
import { Mail, Instagram, Linkedin, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/site";
import { services } from "@/data/services";
import { projects } from "@/data/projects";

export default function Footer() {
  const featured = projects.slice(0, 6);

  return (
    <footer className="relative border-t border-primary/15 bg-card/30 backdrop-blur-xl">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container-wide pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <Image src="/logoupdate.png" alt="DevSphere Solutions" width={64} height={64} className="h-14 w-14 mb-4" />
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">{siteConfig.description}</p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
            >
              <Mail className="w-4 h-4" /> {siteConfig.email}
            </a>
            <div className="flex gap-3 mt-6">
              <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl glass-card flex items-center justify-center hover:border-primary/50 transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl glass-card flex items-center justify-center hover:border-primary/50 transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-3">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link href="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 group">
                    {s.title}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Projects</h4>
            <ul className="space-y-3">
              {featured.map((p) => (
                <li key={p.slug}>
                  <Link href={`/projects/${p.slug}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-primary">About</Link></li>
              <li><Link href="/case-studies" className="hover:text-primary">Case Studies</Link></li>
              <li><Link href="/blog" className="hover:text-primary">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-primary">Contact</Link></li>
              <li><Link href="/privacy" className="hover:text-primary">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-primary">Terms</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p>{siteConfig.address}</p>
        </div>
      </div>
    </footer>
  );
}
