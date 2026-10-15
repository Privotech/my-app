import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowDownLeft,
  ArrowRight,
  ArrowUpRight,
  Eye,
  EyeOff,
  Lightbulb,
  Phone,
  Plus,
  ReceiptText,
  Send,
  ShieldCheck,
  Wallet,
} from 'lucide-react';
import { api, money } from '../api';
import './BankPages.css';

const quickActions = [
  { label: 'Send money', description: 'Transfer to an account', to: '/transfers', icon: Send },
  { label: 'Airtime & data', description: 'Top up any network', to: '/payments?type=airtime', icon: Phone },
  { label: 'Pay a bill', description: 'Power, TV and more', to: '/payments?type=electricity', icon: Lightbulb },
  { label: 'Add money', description: 'Top up your balance', to: '/Deposit', icon: Plus },
  { label: 'My cards', description: 'Manage your cards', to: '/cards', icon: Wallet },
  { label: 'Transactions', description: 'View account activity', to: '/transactions', icon: ReceiptText },
];

function getWeekActivity(transactions) {
  const days = Array.from({ length: 7 }, (_, index) => {
    const date = new Date();
    date.setHours(0, 0, 0, 0);
    date.setDate(date.getDate() - (6 - index));
    return { date, label: date.toLocaleDateString('en', { weekday: 'short' }), total: 0 };
  });

  transactions.forEach((transaction) => {
    const date = new Date(transaction.createdAt);
    const day = days.find((item) => item.date.toDateString() === date.toDateString());
    if (day) day.total += Math.abs(Number(transaction.amount) || 0);
  });

  const highest = Math.max(...days.map((day) => day.total), 1);
  return days.map((day) => ({ ...day, height: day.total ? Math.max(8, (day.total / highest) * 100) : 4 }));
}

export default function Dashboard() {
  const [account, setAccount] = useState(null);
  const [user, setUser] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [notice, setNotice] = useState('');
  const [balanceVisible, setBalanceVisible] = useState(true);

  useEffect(() => {
    Promise.all([api('/me'), api('/transactions')])
      .then(([profile, history]) => {
        setAccount(profile.account);
        setUser(profile.user);
        setTransactions(history.transactions || []);
        localStorage.setItem('authUser', JSON.stringify(profile.user));
      })
      .catch((error) => setNotice(error.message));
  }, []);

  const displayName = user?.firstName || 'there';
  const weekActivity = useMemo(() => getWeekActivity(transactions), [transactions]);
  const weekTransactions = transactions.filter((item) => Date.now() - new Date(item.createdAt).getTime() < 7 * 24 * 60 * 60 * 1000);
  const incoming = weekTransactions.reduce((total, item) => total + (Number(item.amount) > 0 ? Number(item.amount) : 0), 0);
  const outgoing = weekTransactions.reduce((total, item) => total + (Number(item.amount) < 0 ? Math.abs(Number(item.amount)) : 0), 0);

  return (
    <main className="bank-page">
      <div className="bank-page-heading">
        <div>
          <div className="bank-eyebrow">YOUR MONEY, AT A GLANCE</div>
          <h2>Good to see you, {displayName} <span className="bank-wave">✦</span></h2>
          <p>Here’s what’s happening with your account today.</p>
        </div>
        <div className="bank-secure-pill"><ShieldCheck size={15} /> Your account is secure</div>
      </div>

      <div className="bank-demo-banner">
        <span className="bank-demo-banner-icon">i</span>
        <span><strong>Demo account</strong> — balances and transactions are simulated. No real funds are moved.</span>
      </div>
      {notice && <div className="bank-notice" role="alert">{notice}</div>}

      <section className="bank-dashboard-grid">
        <article className="bank-balance-card">
          <div className="bank-balance-card-top">
            <div className="bank-balance-label"><span className="bank-balance-icon"><Wallet size={17} /></span> Available balance</div>
            <button className="bank-visibility-button" type="button" onClick={() => setBalanceVisible((visible) => !visible)} aria-label={balanceVisible ? 'Hide balance' : 'Show balance'}>
              {balanceVisible ? <Eye size={17} /> : <EyeOff size={17} />}
            </button>
          </div>
          <div className="bank-balance-amount">{balanceVisible ? money(account?.balance) : '₦ ••••••••'}</div>
          <div className="bank-account-number">
            <span>Account number</span>
            <strong>{account?.number || '•••• •••• ••••'}</strong>
          </div>
          <div className="bank-balance-card-bottom">
            <span><span className="bank-live-dot" /> Account active</span>
            <Link to="/Account">Account details <ArrowRight size={14} /></Link>
          </div>
          <span className="bank-card-decoration bank-card-decoration-one" />
          <span className="bank-card-decoration bank-card-decoration-two" />
        </article>

        <article className="bank-activity-card">
          <div className="bank-card-heading">
            <div><h3>Money movement</h3><p>Activity over the last 7 days</p></div>
            <Link to="/Analysis" aria-label="View spending analysis"><ArrowUpRight size={17} /></Link>
          </div>
          <div className="bank-activity-summary">
            <div><span className="bank-activity-dot incoming" /> <span>Received</span><strong>{money(incoming)}</strong></div>
            <div><span className="bank-activity-dot outgoing" /> <span>Sent</span><strong>{money(outgoing)}</strong></div>
          </div>
          <div className="bank-mini-chart" role="img" aria-label="Transaction activity during the last seven days">
            {weekActivity.map((day) => (
              <div className="bank-chart-day" key={day.label}>
                <div className="bank-chart-track"><span style={{ height: `${day.height}%` }} /></div>
                <span className="bank-chart-label">{day.label}</span>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="bank-quick-section">
        <div className="bank-section-heading"><div><div className="bank-eyebrow">SHORTCUTS</div><h3>Quick actions</h3></div></div>
        <div className="bank-quick-grid">
          {quickActions.map(({ label, description, to, icon: Icon }) => (
            <Link className="bank-quick-action" to={to} key={to}>
              <span className="bank-quick-icon"><Icon size={18} /></span>
              <span className="bank-quick-copy"><strong>{label}</strong><small>{description}</small></span>
              <ArrowRight className="bank-quick-arrow" size={16} />
            </Link>
          ))}
        </div>
      </section>

      <section className="bank-transactions-card">
        <div className="bank-section-heading bank-transactions-heading">
          <div><div className="bank-eyebrow">YOUR ACCOUNT</div><h3>Recent transactions</h3></div>
          <Link className="bank-text-link" to="/transactions">View all <ArrowRight size={14} /></Link>
        </div>
        {transactions.length ? (
          <div className="bank-transaction-list">
            {transactions.slice(0, 5).map((transaction) => {
              const isIncoming = Number(transaction.amount) > 0;
              const title = transaction.description || (isIncoming ? 'Money received' : 'Payment');
              return (
                <div className="bank-transaction-row" key={transaction.id}>
                  <span className={`bank-transaction-icon${isIncoming ? ' is-incoming' : ''}`}>
                    {isIncoming ? <ArrowDownLeft size={17} /> : <ArrowUpRight size={17} />}
                  </span>
                  <span className="bank-transaction-copy">
                    <strong>{title}</strong>
                    <small>{new Date(transaction.createdAt).toLocaleDateString('en', { day: 'numeric', month: 'short', year: 'numeric' })} <span>·</span> {transaction.type?.replaceAll('_', ' ') || 'Transaction'}</small>
                  </span>
                  <span className={`bank-transaction-amount${isIncoming ? ' is-incoming' : ''}`}>
                    {isIncoming ? '+' : '−'}{money(Math.abs(Number(transaction.amount) || 0))}
                  </span>
                  <span className="bank-transaction-status">{transaction.status || 'Completed'}</span>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="bank-empty-state">
            <span className="bank-empty-icon"><Wallet size={20} /></span>
            <strong>No transactions yet</strong>
            <span>Your demo account activity will appear here.</span>
          </div>
        )}
      </section>
    </main>
  );
}
