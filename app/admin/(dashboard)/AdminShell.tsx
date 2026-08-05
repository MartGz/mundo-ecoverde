'use client';

import { ReactNode, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  LayoutDashboard,
  Users,
  MessageSquare,
  Briefcase,
  Leaf,
  LogOut,
  Menu,
  X,
  ChevronRight,
  Settings,
  Home,
  Heart,
  Recycle,
} from 'lucide-react';

const navItems = [
  { href: '/admin', icon: LayoutDashboard, label: 'Dashboard', exact: true },
  { href: '/admin/mensajes', icon: MessageSquare, label: 'Mensajes' },
  { href: '/admin/servicios', icon: Briefcase, label: 'Servicios' },
  { href: '/admin/iniciativas', icon: Leaf, label: 'Iniciativas' },
  { href: '/admin/inicio', icon: Home, label: 'Inicio' },
  { href: '/admin/nosotros', icon: Heart, label: 'Nosotros' },
  { href: '/admin/proceso', icon: Recycle, label: 'Proceso' },
  { href: '/admin/usuarios', icon: Users, label: 'Usuarios' },
  { href: '/admin/ajustes', icon: Settings, label: 'Ajustes' },
];

const roleLabels: Record<string, string> = { ADMIN: 'Admin', USER: 'Usuario' };

function NavItem({ href, icon: Icon, label, exact, onClick }: { href: string; icon: React.ElementType; label: string; exact?: boolean; onClick?: () => void }) {
  const pathname = usePathname();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`group flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 relative
        ${isActive
          ? 'bg-gradient-to-r from-[#49a739] to-[#3d8f2f] text-white shadow-[0_8px_24px_rgba(73,167,57,0.35)]'
          : 'text-[#6b7280] hover:text-[#111827] hover:bg-[#e5e9e5]'
        }`}
    >
      {isActive && (
        <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-white rounded-r-full" />
      )}
      <Icon size={18} className={isActive ? 'text-white' : 'text-[#4b5563] group-hover:text-[#111827] transition-colors'} />
      <span>{label}</span>
      {isActive && <ChevronRight size={14} className="ml-auto opacity-70" />}
    </Link>
  );
}

interface AdminShellUser {
  name: string | null;
  email: string;
  role: string;
}

export default function AdminShell({ children, user }: { children: ReactNode; user: AdminShellUser }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/admin/login');
    router.refresh();
  };

  const displayName = user.name || user.email;
  const initial = displayName.charAt(0).toUpperCase();

  return (
    <div className="flex h-screen bg-[#f7f9f7] overflow-hidden font-[\'Plus_Jakarta_Sans\',system-ui,sans-serif]">

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed lg:relative z-30 h-full w-64 bg-[#ffffff] border-r border-[#e5e9e5] flex flex-col
        transition-transform duration-300 ease-in-out
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Logo */}
        <div className="h-18 flex items-center px-6 py-5 border-b border-[#e5e9e5]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#49a739] to-[#2e7d32] flex items-center justify-center shadow-[0_4px_16px_rgba(73,167,57,0.4)]">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-[#111827] font-extrabold text-base leading-none">EcoVerde</p>
              <p className="text-[#4b5563] text-xs mt-0.5 font-medium">Panel Admin</p>
            </div>
          </div>
          <button onClick={() => setSidebarOpen(false)} className="lg:hidden ml-auto text-[#6b7280] hover:text-[#111827]">
            <X size={18} />
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto py-5 px-3 space-y-1">
          <p className="text-[#374151] text-xs font-bold uppercase tracking-widest px-4 mb-3">Navegación</p>
          {navItems.map((item) => (
            <NavItem key={item.href} {...item} onClick={() => setSidebarOpen(false)} />
          ))}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-[#e5e9e5] space-y-2">
          <div className="flex items-center gap-3 px-3 py-2 min-w-0">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#49a739] to-[#2e7d32] flex items-center justify-center text-white text-sm font-bold shadow-[0_4px_12px_rgba(73,167,57,0.3)] flex-shrink-0">
              {initial}
            </div>
            <div className="min-w-0">
              <p className="text-[#111827] text-sm font-bold leading-none truncate">{displayName}</p>
              <p className="text-[#4b5563] text-xs mt-0.5">{roleLabels[user.role] || user.role}</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-semibold text-red-600 hover:bg-red-100 hover:text-red-300 transition-all"
          >
            <LogOut size={16} />
            <span>Cerrar Sesión</span>
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Topbar */}
        <header className="h-16 bg-[#ffffff] border-b border-[#e5e9e5] flex items-center px-6 gap-4 flex-shrink-0">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden text-[#6b7280] hover:text-[#111827] transition-colors"
          >
            <Menu size={22} />
          </button>
          <div className="flex-1" />
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#49a739]/10 border border-[#49a739]/20">
            <span className="w-2 h-2 rounded-full bg-[#49a739] animate-pulse" />
            <span className="text-xs font-semibold text-[#49a739]">Sistema Activo</span>
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 overflow-auto p-6 bg-[#f7f9f7]">
          {children}
        </div>
      </main>
    </div>
  );
}
