import React, { useState, useMemo } from 'react';
import ProductBreadcrumb from '../ProductBreadcrumb';
import SpecsTable from '../SpecsTable';
import InquiryForm from '../InquiryForm';
import RelatedProducts from '../RelatedProducts';
import { getProductCategory, getRelatedProducts, DIVISIONS } from '../../../data/productCatalogData';
import './ProductDetailView.css';

/**
 * Bright White Product Detail View
 * Complete industrial product page with high-res imagery, metallurgy, full engineering specifications,
 * compliance standards, industry applications, RFQ form, and compatible products.
 */
export default function ProductDetailView({
  divisionSlug,
  groupSlug,
  productSlug,
  onNavigate
}) {
  const product = useMemo(() => {
    return getProductCategory(divisionSlug, groupSlug, productSlug);
  }, [divisionSlug, groupSlug, productSlug]);

  const related = useMemo(() => {
    if (!product) return [];
    return getRelatedProducts(product.groupSlug, product.slug, 4);
  }, [product]);

  const division = useMemo(() => {
    if (!product) return null;
    return DIVISIONS[product.divisionSlug] || null;
  }, [product]);

  const [activeGradeIndex, setActiveGradeIndex] = useState(0);
  const currentGrade = product?.gradeBreakdown?.[activeGradeIndex] || product?.gradeBreakdown?.[0];

  if (!product) {
    return (
      <div className="product-detail-not-found">
        <div className="not-found-card">
          <h2>Product Specification Not Found</h2>
          <p>
            The requested product specification could not be located. It may have been updated or restructured.
          </p>
          <div className="not-found-actions">
            <button
              type="button"
              className="btn-back-cat"
              onClick={() => onNavigate && onNavigate(`/products/${divisionSlug}/${groupSlug}`)}
            >
              Back to Product Family
            </button>
            <button
              type="button"
              className="btn-back-all"
              onClick={() => onNavigate && onNavigate('/products')}
            >
              All Products
            </button>
          </div>
        </div>
      </div>
    );
  }

  const breadcrumbItems = [
    { label: 'Products', path: '/products' },
    {
      label: division ? division.title : (product.divisionSlug === 'manufacturer' ? 'Manufacturer Division' : 'Supplier Division'),
      path: `/products/${product.divisionSlug}`
    },
    {
      label: product.groupName,
      path: `/products/${product.divisionSlug}/${product.groupSlug}`
    },
    { label: product.name, path: null }
  ];

  const scrollToRFQ = () => {
    const el = document.getElementById('product-rfq-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hello KPTRON, I am interested in inquiring about ${product.name} (Grade: ${product.grade}). Please share pricing and dispatch availability.`
  );

  return (
    <div className="bright-detail-view">
      <main className="detail-main-content">
        <div className="detail-container">
          <ProductBreadcrumb items={breadcrumbItems} onNavigate={onNavigate} />

          {/* Top Showcase: 2-Column Industrial Layout */}
          <section className="product-showcase-grid">
            
            {/* Left: Product Visual Card */}
            <div className="showcase-visual-col">
              <div className="showcase-media-box">
                <img
                  src={product.image}
                  alt={product.name}
                  className="showcase-img"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                />
                <div className="showcase-floating-badge">
                  <span>{product.materialName || 'PREMIUM ALLOY'}</span>
                </div>
              </div>

              {/* Quality & Metallurgical Verification Badges */}
              <div className="quality-assurance-row">
                <div className="qa-badge">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1F3862" strokeWidth="2.2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <div>
                    <strong>PMI Tested</strong>
                    <span>100% Alloy Verified</span>
                  </div>
                </div>

                <div className="qa-badge">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1F3862" strokeWidth="2.2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                  <div>
                    <strong>EN 10204 3.1 & 3.2</strong>
                    <span>Full MTC Supplied</span>
                  </div>
                </div>

                <div className="qa-badge">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1F3862" strokeWidth="2.2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m4.93 4.93 4.24 4.24"></path>
                    <path d="m14.83 9.17 4.24-4.24"></path>
                    <path d="m14.83 14.83 4.24 4.24"></path>
                    <path d="m9.17 14.83-4.24 4.24"></path>
                    <circle cx="12" cy="12" r="4"></circle>
                  </svg>
                  <div>
                    <strong>Pressure Tested</strong>
                    <span>Hydro & Ultrasonic</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Commercial & Technical Product Summary */}
            <div className="showcase-info-col">
              <div className="info-division-tag">
                <span>{product.division}</span>
                <span className="dot-sep">•</span>
                <span>{product.groupName}</span>
              </div>

              <h1 className="product-title">{product.name}</h1>

              <div className="product-grade-badge">
                <span className="grade-prefix">Governing Grade:</span>
                <span className="grade-val">{product.grade}</span>
              </div>

              <p className="product-desc-text">
                {product.description || product.shortDesc}
              </p>

              {/* Quick Specs Matrix */}
              <div className="quick-specs-matrix">
                {product.specs?.size && (
                  <div className="matrix-cell">
                    <span className="cell-label">Size Range</span>
                    <span className="cell-val">{product.specs.size}</span>
                  </div>
                )}
                {(product.specs?.schedule || product.specs?.thickness || product.specs?.class) && (
                  <div className="matrix-cell">
                    <span className="cell-label">Schedule / Rating</span>
                    <span className="cell-val">{product.specs.schedule || product.specs.thickness || product.specs.class}</span>
                  </div>
                )}
                {product.specs?.standards && (
                  <div className="matrix-cell">
                    <span className="cell-label">Governing Code</span>
                    <span className="cell-val">{product.specs.standards}</span>
                  </div>
                )}
                <div className="matrix-cell">
                  <span className="cell-label">Stock Availability</span>
                  <span className="cell-val stock-ready">Ex-Stock & Mill Make</span>
                </div>
              </div>

              {/* Primary Call to Actions */}
              <div className="product-cta-group">
                <button
                  type="button"
                  className="btn-detail-rfq"
                  onClick={scrollToRFQ}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                  <span>Request Instant Quotation</span>
                </button>

                <a
                  href={`https://wa.me/919967616124?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-detail-whatsapp"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                  </svg>
                  <span>WhatsApp Inquiry</span>
                </a>
              </div>

              {/* Sourcing Guarantee Snippet */}
              <div className="sourcing-guarantee">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Third-Party Inspection (TPI) accepted: Lloyd's, BV, DNV, TUV, SGS</span>
              </div>
            </div>
          </section>

          {/* Section: Technical Specs Table */}
          <section className="detail-specs-section">
            <SpecsTable
              specs={product.specs}
              standards={product.standards || []}
            />
          </section>

          {/* Section: Grade Metallurgy & Technical Properties (If available) */}
          {product.gradeBreakdown && product.gradeBreakdown.length > 0 && (
            <section className="detail-metallurgy-section">
              <div className="section-head-card">
                <span className="section-eyebrow">ALLOY METALLURGY & CHEMICAL PROFILES</span>
                <h3 className="section-title">{product.gradeMatrixTitle || `${product.name} Grade Engineering Matrix`}</h3>
                <p className="section-desc">
                  {product.gradeMatrixDesc || 'High-temperature creep-resistant Chrome-Moly grades engineered for supercritical steam lines, hydroprocessing, and refinery cracking.'}
                </p>
              </div>

              {/* Interactive Grade Tab Selector */}
              <div className="grade-selector-tabs" role="tablist" aria-label="Select alloy grade">
                {product.gradeBreakdown.map((g, idx) => (
                  <button
                    key={g.grade}
                    type="button"
                    role="tab"
                    aria-selected={activeGradeIndex === idx}
                    className={`grade-tab-btn ${activeGradeIndex === idx ? 'active' : ''}`}
                    onClick={() => setActiveGradeIndex(idx)}
                  >
                    <span className="tab-grade-tag">Grade</span>
                    <span className="tab-grade-num">{g.grade}</span>
                  </button>
                ))}
              </div>

              {/* Active Grade Deep Profile Card */}
              {currentGrade && (
                <div className="active-grade-panel">
                  <div className="grade-profile-header">
                    <div className="profile-identity">
                      <span className="grade-pill-badge">GRADE {currentGrade.grade}</span>
                      <h4 className="grade-full-name">{currentGrade.commonName}</h4>
                      <div className="grade-ref-tags">
                        <span className="ref-tag">UNS: <strong>{currentGrade.uns}</strong></span>
                        <span className="ref-tag">DIN / EN: <strong>{currentGrade.dinEn}</strong></span>
                      </div>
                    </div>
                    <div className="profile-metrics-grid">
                      <div className="metric-box">
                        <span className="metric-label">Max Service Temp</span>
                        <span className="metric-val highlight-temp">{currentGrade.serviceTemp}</span>
                      </div>
                      <div className="metric-box">
                        <span className="metric-label">Min Tensile Strength</span>
                        <span className="metric-val">{currentGrade.tensileMpa}</span>
                      </div>
                      <div className="metric-box">
                        <span className="metric-label">Min Yield Strength</span>
                        <span className="metric-val">{currentGrade.yieldMpa}</span>
                      </div>
                      <div className="metric-box">
                        <span className="metric-label">Max Hardness</span>
                        <span className="metric-val">{currentGrade.hardness}</span>
                      </div>
                    </div>
                  </div>

                  <div className="grade-details-body">
                    <div className="chemistry-col">
                      <h5 className="sub-heading">Nominal Chemical Composition (% Weight)</h5>
                      <div className="chem-table-wrap">
                        <table className="chem-table">
                          <thead>
                            <tr>
                              <th>Element</th>
                              <th>Specified Limits</th>
                            </tr>
                          </thead>
                          <tbody>
                            {Object.entries(currentGrade.chemistry).map(([el, val]) => (
                              <tr key={el}>
                                <td className="chem-el-name">{el.toUpperCase()}</td>
                                <td className="chem-el-val">{val}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="treatment-col">
                      <div className="treatment-block">
                        <h5 className="sub-heading">Heat Treatment Condition</h5>
                        <p className="treatment-text">{currentGrade.heatTreatment}</p>
                      </div>

                      <div className="treatment-block">
                        <h5 className="sub-heading">Minimum Elongation</h5>
                        <p className="treatment-text"><strong>{currentGrade.elongation}</strong> in 2 inches (50mm)</p>
                      </div>

                      <div className="treatment-block highlight-app-block">
                        <h5 className="sub-heading">Target Industrial Service</h5>
                        <p className="app-note-text">{currentGrade.applicationNote}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Master Comparative Chemical Composition Table */}
              <div className="master-chem-overview">
                <h4 className="master-table-title">{product.comparisonTableTitle || `Full ${product.name} Chemical Composition Comparison`}</h4>
                <div className="master-table-scroll">
                  <table className="master-chem-table">
                    <thead>
                      <tr>
                        <th>Grade</th>
                        <th>UNS</th>
                        <th>Carbon (C)</th>
                        <th>Manganese (Mn)</th>
                        <th>Chromium (Cr)</th>
                        <th>Molybdenum (Mo)</th>
                        <th>Silicon (Si)</th>
                        <th>Micro-Alloys (V, Nb, W, B, N)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {product.gradeBreakdown.map(g => (
                        <tr key={g.grade} className={currentGrade?.grade === g.grade ? 'row-active' : ''}>
                          <td className="td-grade-bold">Gr. {g.grade}</td>
                          <td>{g.uns}</td>
                          <td>{g.chemistry.c}</td>
                          <td>{g.chemistry.mn}</td>
                          <td className="td-cr-highlight">{g.chemistry.cr}</td>
                          <td className="td-mo-highlight">{g.chemistry.mo}</td>
                          <td>{g.chemistry.si}</td>
                          <td>
                            {[
                              g.chemistry.v ? `V: ${g.chemistry.v}` : null,
                              g.chemistry.nb ? `Nb: ${g.chemistry.nb}` : null,
                              g.chemistry.w ? `W: ${g.chemistry.w}` : null,
                              g.chemistry.b ? `B: ${g.chemistry.b}` : null,
                              g.chemistry.n ? `N: ${g.chemistry.n}` : null
                            ].filter(Boolean).join(', ') || '—'}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          )}

          {/* Section: Engineering Advantages & Creep Performance */}
          {product.engineeringAdvantages && product.engineeringAdvantages.length > 0 && (
            <section className="detail-advantages-section">
              <div className="section-head-card">
                <span className="section-eyebrow">METALLURGICAL ADVANTAGES</span>
                <h3 className="section-title">Engineered For High-Temperature Integrity</h3>
                <p className="section-desc">
                  {product.advantagesSubtitle || `Key technical and metallurgical advantages for specifying ${product.name} over standard material grades in demanding operations.`}
                </p>
              </div>

              <div className="advantages-grid">
                {product.engineeringAdvantages.map((adv, idx) => (
                  <div key={idx} className="advantage-card">
                    <div className="adv-icon-badge">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                        <polyline points="9 12 11 14 15 10"></polyline>
                      </svg>
                    </div>
                    <h4 className="adv-title">{adv.title}</h4>
                    <p className="adv-desc">{adv.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Section: Quality & Inspection Protocols */}
          {product.qualityProtocols && product.qualityProtocols.length > 0 && (
            <section className="detail-quality-section">
              <div className="section-head-card">
                <span className="section-eyebrow">NON-DESTRUCTIVE & STATUTORY TESTING</span>
                <h3 className="section-title">Quality Verification & Testing Protocols</h3>
                <p className="section-desc">
                  {product.qualitySubtitle || `Every ${product.name.toLowerCase()} production lot is subjected to rigorous metallurgical testing and third-party inspection standards.`}
                </p>
              </div>

              <div className="quality-grid">
                {product.qualityProtocols.map((qp, idx) => (
                  <div key={idx} className="quality-item-card">
                    <div className="quality-header">
                      <span className="quality-num">0{idx + 1}</span>
                      <h4 className="quality-title">{qp.item}</h4>
                    </div>
                    <p className="quality-desc">{qp.detail}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Section: Industrial Applications */}
          <section className="detail-applications-section">
            <div className="apps-header">
              <span className="apps-eyebrow">SECTOR COMPATIBILITY</span>
              <h3 className="apps-title">Engineered For Critical Operating Environments</h3>
              <p className="apps-desc">
                High mechanical integrity and chemical resistance across severe industrial services.
              </p>
            </div>

            <div className="apps-grid">
              {(product.customApplications || [
                {
                  title: 'Oil, Gas & Petrochemical',
                  desc: 'Refinery pipework, offshore topsides, high-pressure process manifolds, and sour crude handling.'
                },
                {
                  title: 'Chemical & Fertilizer Plants',
                  desc: 'Severe corrosive environments, nitric/sulfuric acid circuits, reactors, and heat exchangers.'
                },
                {
                  title: 'Power & Thermal Generation',
                  desc: 'Supercritical boiler tubing, steam headers, nuclear coolant circuits, and turbine auxiliaries.'
                },
                {
                  title: 'Pharmaceutical & Dairy',
                  desc: 'Ultra-clean sanitary fluid transfer, electro-polished piping, bio-processing vessels, and CIP lines.'
                }
              ]).map((app, idx) => (
                <div key={idx} className="app-card">
                  <div className="app-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  </div>
                  <h4>{app.title}</h4>
                  <p>{app.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Pre-Filled RFQ Form */}
          <section id="product-rfq-section" className="detail-rfq-section">
            <InquiryForm
              productName={product.name}
              materialGrade={product.grade}
              division={product.division}
            />
          </section>

          {/* Section: Compatible Related Products */}
          {related && related.length > 0 && (
            <section className="detail-related-section">
              <RelatedProducts
                products={related}
                title={`Related Components in ${product.groupName}`}
                onSelect={onNavigate}
              />
            </section>
          )}

        </div>
      </main>
    </div>
  );
}
