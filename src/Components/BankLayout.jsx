import React, { useState } from 'react';
import { Navigate, NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import {
  ArrowLeftRight,
  ChartNoAxesCombined,
  CircleHelp,
  CreditCard,
  LayoutDashboard,
  LogOut,
  Menu,
  ReceiptText,
  Settings2,
  Smartphone,
  UserRound,
  Wallet,
  X,
} from 'lucide-react';
import './BankLayout.css';

const navigation = [
  {
    title: 'Workspace',
    links: [
      { label: 'Overview', to: '/Dashboard', icon: LayoutDashboard },
      { label: 'Transactions', to: '/transactions', icon: ReceiptText },
      { label: 'Transfers', to: '/transfers', icon: ArrowLeftRight },
      { label: 'Add money', to: '/Deposit', icon: Wallet },
      { label: 'Airtime & bills', to: '/payments', icon: Smartphone },
      { label: 'Cards', to: '/cards', icon: CreditCard },
      { label: 'Spending', to: '/Analysis', icon: ChartNoAxesCombined },
    ],
  },
  {
    title: 'Manage',
    links: [
      { label: 'My profile', to: '/Account', icon: UserRound },
      { label: 'Settings', to: '/settings', icon: Settings2 },
      { label: 'Help & support', to: '/Support', icon: CircleHelp },
    ],
  },
];

const pageNames = Object.fromEntries(
  navigation.flatMap((section) => section.links.map((link) => [link.to, link.label]))
);

function getInitials(user) {
  return [user?.firstName, user?.surName]
    .filter(Boolean)
    .map((name) => name[0])
    .join('')
    .toUpperCase() || 'PB';
}

export default function BankLayout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  if (!localStorage.getItem('authToken')) return <Navigate to="/Login" replace />;
  let user = {};

  try {
    user = JSON.parse(localStorage.getItem('authUser') || '{}');
  } catch {
    user = {};
  }

  const title = pageNames[location.pathname] || 'Overview';
  const displayName = [user.firstName, user.surName].filter(Boolean).join(' ') || 'Your account';

  function logout() {
    localStorage.removeItem('authToken');
    localStorage.removeItem('authUser');
    navigate('/Login');
  }

  return (
    <div className="bank-layout">
      {menuOpen && (
        <button
          className="bank-sidebar-backdrop"
          type="button"
          aria-label="Close navigation"
          onClick={() => setMenuOpen(false)}
        />
      )}
      <aside className={`bank-sidebar${menuOpen ? ' is-open' : ''}`}>
        <NavLink className="bank-brand" to="/Dashboard" onClick={() => setMenuOpen(false)}>
          <span className="bank-brand-mark"><Wallet size={19} strokeWidth={2.5} /></span>
          <span>privo<span className="bank-brand-accent">bank</span><small>PERSONAL BANKING</small></span>
        </NavLink>

        <div className="bank-sidebar-label">MENU</div>
        {navigation.map((section) => (
          <div className="bank-nav-section" key={section.title}>
            <div className="bank-nav-heading">{section.title}</div>
            {section.links.map(({ label, to, icon: Icon }) => (
              <NavLink
                key={to}
                to={to}
                end={to !== '/payments'}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) => `bank-nav-link${isActive ? ' is-active' : ''}`}
              >
                <Icon size={18} strokeWidth={1.9} />
                <span>{label}</span>
              </NavLink>
            ))}
          </div>
        ))}

        <div className="bank-sidebar-spacer" />
        <div className="bank-sidebar-help">
          <div className="bank-help-icon"><CircleHelp size={18} /></div>
          <strong>Need a hand?</strong>
          <span>Our support team is here for you.</span>
          <NavLink to="/Support" onClick={() => setMenuOpen(false)}>Get support <span>↗</span></NavLink>
        </div>
        <button className="bank-logout" type="button" onClick={logout}>
          <LogOut size={18} /> Sign out
        </button>
      </aside>

      <div className="bank-main">
        <header className="bank-topbar">
          <div className="bank-topbar-left">
            <button className="bank-menu-button" type="button" aria-label="Open navigation" onClick={() => setMenuOpen(true)}>
              {menuOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
            <div>
              <div className="bank-breadcrumb">Your banking <span>/</span> <strong>{title}</strong></div>
              <h1>{title}</h1>
            </div>
          </div>
          <div className="bank-topbar-user">
            <div className="bank-user-copy"><strong>{displayName}</strong><span>Personal account</span></div>
            <NavLink className="bank-avatar" to="/Account" aria-label="Open profile">{getInitials(user)}</NavLink>
          </div>
        </header>
        <div className="bank-content">
          <Outlet />
        </div>
        <footer className="bank-footer">
          <span>© {new Date().getFullYear()} PrivoBank</span>
          <span className="bank-demo-note"><span /> Demo banking experience · No real funds</span>
        </footer>
      </div>
    </div>
  );
}
