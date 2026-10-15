import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ArrowLeft, Check, CircleHelp, Lightbulb, Phone, ShieldCheck, Smartphone, Tv } from 'lucide-react';
import { api, money } from '../api';
import './BankPages.css';

const services = [
  { id: 'airtime', label: 'Airtime', description: 'Top up a phone', icon: Phone },
  { id: 'data', label: 'Data', description: 'Stay connected', icon: Smartphone },
  { id: 'electricity', label: 'Electricity', description: 'Pay your power bill', icon: Lightbulb },
  { id: 'tv', label: 'TV', description: 'Renew your subscription', icon: Tv },
];

const providersByService = {
  airtime: ['MTN', 'Airtel', 'Glo', '9mobile'],
  data: ['MTN', 'Airtel', 'Glo', '9mobile'],
  electricity: ['Ikeja Electric', 'Eko Electric', 'Abuja Electric', 'Ibadan Electric'],
  tv: ['DStv', 'GOtv', 'Showmax'],
};

const detailsByService = {
  airtime: { label: 'Phone number', hint: 'Enter the mobile number to top up', placeholder: '080 0000 0000' },
  data: { label: 'Phone number', hint: 'Enter the number receiving the data', placeholder: '080 0000 0000' },
  electricity: { label: 'Meter number', hint: 'Enter your electricity meter number', placeholder: 'Enter meter number' },
  tv: { label: 'Smartcard / account number', hint: 'Enter your decoder smartcard number', placeholder: 'Enter account number' },
};

export default function Payments() {
  const [searchParams, setSearchParams] = useSearchParams();
  const selected = services.some((service) => service.id === searchParams.get('type'))
    ? searchParams.get('type')
    : 'airtime';
  const [form, setForm] = useState({ provider: '', recipient: '', amount: '', plan: '' });
  const [balance, setBalance] = useState(null);
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState('');
  const [busy, setBusy] = useState(false);
  const service = services.find((item) => item.id === selected);
  const detail = detailsByService[selected];

  useEffect(() => {
    api('/me').then(({ account }) => setBalance(account.balance)).catch((error) => setMessage(error.message));
  }, []);

  useEffect(() => {
    setForm({ provider: providersByService[selected][0], recipient: '', amount: '', plan: '' });
    setMessage('');
    setSuccess('');
  }, [selected]);

  function selectService(type) {
    setSearchParams({ type });
  }

  function update(event) {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  }

  async function submit(event) {
    event.preventDefault();
    setBusy(true);
    setMessage('');
    setSuccess('');
    try {
      const result = await api('/bill-payments', {
        method: 'POST',
        body: JSON.stringify({ ...form, type: selected, amount: Number(form.amount) }),
      });
      setBalance(result.balance);
      setSuccess(result.message);
      setForm((current) => ({ ...current, recipient: '', amount: '', plan: '' }));
    } catch (error) {
      setMessage(error.message);
    } finally {
      setBusy(false);
    }
  }

  return (
    <main className="container bank-page py-5">
      <Link to="/Dashboard" className="bank-back-link"><ArrowLeft size={15} /> Back to overview</Link>
      <div className="bank-page-heading">
        <div>
          <div className="bank-eyebrow">EVERYDAY PAYMENTS</div>
          <h2>Payments &amp; top-ups</h2>
          <p>Take care of your everyday essentials in one place.</p>
        </div>
        {balance !== null && <div className="bank-payment-balance"><span>Available balance</span><strong>{money(balance)}</strong></div>}
      </div>
      <div className="bank-demo-banner">
        <span className="bank-demo-banner-icon">i</span>
        <span><strong>Demo payments only.</strong> This records a simulated transaction and does not purchase a service or move real funds.</span>
      </div>

      <div className="bank-payments-layout">
        <section className="bank-service-picker">
          <div className="bank-service-intro"><span>SELECT A SERVICE</span><strong>What would you like to pay for?</strong></div>
          <div className="bank-service-options">
            {services.map(({ id, label, description, icon: Icon }) => (
              <button className={`bank-service-option${selected === id ? ' is-selected' : ''}`} type="button" key={id} onClick={() => selectService(id)}>
                <span className="bank-service-icon"><Icon size={21} /></span>
                <span><strong>{label}</strong><small>{description}</small></span>
                {selected === id && <Check size={16} className="bank-service-check" />}
              </button>
            ))}
          </div>
          <div className="bank-service-footnote"><CircleHelp size={15} /> Payments are simulated for this demo app.</div>
        </section>

        <form className="bank-payment-form" onSubmit={submit}>
          <div className="bank-payment-form-heading">
            <span className="bank-payment-form-icon"><service.icon size={20} /></span>
            <div><h3>{service.label} payment</h3><p>Fill in the details to continue</p></div>
          </div>

          <label className="bank-payment-field">
            <span>Provider</span>
            <select className="form-select" name="provider" value={form.provider} onChange={update} required>
              {providersByService[selected].map((provider) => <option key={provider}>{provider}</option>)}
            </select>
          </label>

          <label className="bank-payment-field">
            <span>{detail.label}</span>
            <input className="form-control" name="recipient" value={form.recipient} onChange={update} placeholder={detail.placeholder} required maxLength={40} inputMode={selected === 'airtime' || selected === 'data' ? 'tel' : 'numeric'} />
            <small>{detail.hint}</small>
          </label>

          {selected !== 'airtime' && (
            <label className="bank-payment-field">
              <span>{selected === 'data' ? 'Data plan' : selected === 'tv' ? 'Subscription package' : 'Meter type'}</span>
              {selected === 'data' ? (
                <select className="form-select" name="plan" value={form.plan} onChange={update} required>
                  <option value="">Select a data plan</option>
                  <option>1 GB · 30 days</option>
                  <option>3 GB · 30 days</option>
                  <option>5 GB · 30 days</option>
                  <option>10 GB · 30 days</option>
                </select>
              ) : selected === 'tv' ? (
                <select className="form-select" name="plan" value={form.plan} onChange={update} required>
                  <option value="">Select a package</option>
                  <option>Compact</option>
                  <option>Family</option>
                  <option>Premium</option>
                </select>
              ) : (
                <select className="form-select" name="plan" value={form.plan} onChange={update} required>
                  <option value="">Select meter type</option>
                  <option>Prepaid</option>
                  <option>Postpaid</option>
                </select>
              )}
            </label>
          )}

          <label className="bank-payment-field">
            <span>Amount</span>
            <div className="bank-amount-input"><span>₦</span><input className="form-control" name="amount" type="number" min="1" max="10000000" step="0.01" value={form.amount} onChange={update} placeholder="0.00" required /></div>
            <small>Payments are deducted from your demo account balance.</small>
          </label>

          {message && <div className="bank-notice" role="alert">{message}</div>}
          {success && <div className="bank-payment-success" role="status"><Check size={17} />{success}</div>}
          <button className="bank-payment-submit" type="submit" disabled={busy || balance === null}>
            {busy ? 'Processing…' : `Continue · ${form.amount ? money(Number(form.amount)) : '₦0.00'}`}
          </button>
          <div className="bank-payment-security"><ShieldCheck size={14} /> Secure, simulated demo transaction</div>
        </form>
      </div>
    </main>
  );
}
