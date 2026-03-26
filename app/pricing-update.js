// Pricing section replacement
const pricingData = [
  {
    name: 'Starter',
    price: 'Free',
    verifications: '50',
    period: '/month',
    highlight: false,
  },
  {
    name: 'Professional',
    price: '€6',
    verifications: '1,000',
    period: '/month',
    highlight: false,
  },
  {
    name: 'Enterprise',
    price: '€18',
    verifications: '10,000',
    period: '/month',
    highlight: true,
  },
  {
    name: 'Scale',
    price: '€49',
    verifications: '100,000',
    period: '/month',
    highlight: false,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" style={{ marginBottom: '100px' }}>
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h2>Simple Pricing</h2>
        <p style={{ marginTop: '16px', maxWidth: '600px', margin: '16px auto 0' }}>
          Choose the plan that fits your needs
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '24px',
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        {pricingData.map((plan, idx) => (
          <div
            key={idx}
            className={`panel ${plan.highlight ? 'accent' : ''}`}
            style={{
              border: plan.highlight ? '2px solid #3b82f6' : '1px solid rgba(226, 232, 240, 0.1)',
              transform: plan.highlight ? 'scale(1.05)' : 'scale(1)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '400px',
              padding: '32px',
              textAlign: 'center',
            }}
          >
            {plan.highlight && (
              <span className="badge" style={{ display: 'inline-block', alignSelf: 'center', marginBottom: '16px' }}>
                Popular
              </span>
            )}

            <div>
              <h4 style={{ marginBottom: '16px', fontSize: '24px', fontWeight: '700' }}>
                {plan.name}
              </h4>

              <div style={{ marginBottom: '24px' }}>
                <div style={{
                  fontSize: '48px',
                  fontWeight: '800',
                  color: plan.highlight ? '#3b82f6' : '#f3f6fb',
                  lineHeight: '1',
                  marginBottom: '8px',
                }}>
                  {plan.price}
                </div>
                <div style={{
                  fontSize: '14px',
                  color: 'rgba(148, 163, 184, 1)',
                  fontWeight: '500',
                }}>
                  {plan.period}
                </div>
              </div>

              <div style={{
                fontSize: '28px',
                fontWeight: '700',
                color: plan.highlight ? '#06b6d4' : '#cbd5e1',
                marginBottom: '12px',
              }}>
                {plan.verifications}
              </div>
              <div style={{
                fontSize: '13px',
                color: 'rgba(148, 163, 184, 1)',
                marginBottom: '24px',
              }}>
                verifications/month
              </div>
            </div>

            <button
              className={`btn ${plan.highlight ? 'primary' : 'secondary'}`}
              style={{
                width: '100%',
                marginTop: 'auto',
                justifyContent: 'center',
              }}
            >
              Get Started
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
