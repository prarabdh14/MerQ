import { motion } from "framer-motion";
import { ArrowUpRight, ShoppingBag, LayoutDashboard, User, LogOut, Home, Shirt, Info, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";

export default function Dashboard() {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-24 pb-16 bg-muted/40">
        <div className="container-wide">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <p className="text-caption text-accent mb-3 flex items-center gap-2">
                <LayoutDashboard className="h-4 w-4" />
                Dashboard
              </p>
              <h1 className="heading-section mb-2">Welcome back</h1>
              <p className="text-muted-foreground max-w-xl">
                This is your starting point. From here you can explore the storefront, browse products,
                and manage your future account areas once the backend is added.
              </p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" onClick={handleLogout} className="gap-2">
                <LogOut className="h-4 w-4" />
                Log out
              </Button>
              <Link to="/">
                <Button className="btn-accent gap-2">
                  Go to landing
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Quick navigation cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <DashboardLinkCard
              to="/shop"
              icon={ShoppingBag}
              title="Browse shop"
              description="View all products, filter by category, and explore the catalog."
            />
            <DashboardLinkCard
              to="/custom"
              icon={Shirt}
              title="Custom prints"
              description="Start from the custom prints page once it’s wired to real data."
            />
            <DashboardLinkCard
              to="/about"
              icon={Info}
              title="About"
              description="Read the story and positioning of the brand once it’s finalized."
            />
            <DashboardLinkCard
              to="/contact"
              icon={Phone}
              title="Contact"
              description="Contact page for future support, inquiries, or collaborations."
            />
          </div>

          {/* Placeholder for future account sections */}
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] gap-6">
            <section className="rounded-2xl border border-border bg-card p-6 md:p-8">
              <h2 className="heading-card mb-3">Next steps for this dashboard</h2>
              <p className="text-sm text-muted-foreground mb-4">
                When you add a backend and real authentication, this area can show:
              </p>
              <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-5">
                <li>Recent orders and order status</li>
                <li>Saved items or wishlists</li>
                <li>Profile details and shipping addresses</li>
                <li>Settings for notifications and security</li>
              </ul>
            </section>

            <section className="rounded-2xl border border-border bg-card p-6 md:p-8 flex flex-col justify-between">
              <div>
                <p className="text-caption text-accent mb-2">Shortcuts</p>
                <p className="text-sm text-muted-foreground mb-4">
                  Use these links while you&apos;re building:
                </p>
                <div className="flex flex-wrap gap-2">
                  <QuickLink to="/" label="Landing" icon={Home} />
                  <QuickLink to="/shop" label="Shop" icon={ShoppingBag} />
                  <QuickLink to="/account" label="Login" icon={User} />
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

type DashboardLinkCardProps = {
  to: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
};

function DashboardLinkCard({ to, icon: Icon, title, description }: DashboardLinkCardProps) {
  return (
    <Link to={to}>
      <motion.div
        whileHover={{ y: -4, scale: 1.01 }}
        className="h-full rounded-2xl border border-border bg-card p-5 md:p-6 flex flex-col justify-between"
      >
        <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-accent/10 text-accent">
          <Icon className="h-4 w-4" />
        </div>
        <div>
          <h3 className="font-semibold mb-1">{title}</h3>
          <p className="text-xs text-muted-foreground">{description}</p>
        </div>
      </motion.div>
    </Link>
  );
}

type QuickLinkProps = {
  to: string;
  label: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

function QuickLink({ to, label, icon: Icon }: QuickLinkProps) {
  return (
    <Link
      to={to}
      className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5 text-xs hover:border-accent hover:text-accent transition-colors"
    >
      <Icon className="h-3 w-3" />
      <span>{label}</span>
    </Link>
  );
}

