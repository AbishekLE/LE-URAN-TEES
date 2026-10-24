import type { InvoiceData, InvoiceErrors } from '../types';
import { FieldError } from './fields';

interface Props {
  data: InvoiceData;
  errors: InvoiceErrors;
  onChange: (patch: Partial<InvoiceData>) => void;
  onNumberBlur: () => void;
}

export function InvoiceDetails({ data, errors, onChange, onNumberBlur }: Props) {
  return (
    <section className="card" aria-labelledby="details-title">
      <h2 id="details-title" className="card-title">
        Invoice Details
      </h2>
      <div className="details-grid">
        <div className="field">
          <label htmlFor="invoice-number">Invoice Number</label>
          <input
            id="invoice-number"
            className="input"
            type="text"
            value={data.invoiceNumber}
            onChange={(e) => onChange({ invoiceNumber: e.target.value })}
            onBlur={onNumberBlur}
            autoComplete="off"
            aria-invalid={errors.invoiceNumber ? true : undefined}
          />
          <p className="hint">Generated automatically. You can edit it if needed.</p>
          <FieldError message={errors.invoiceNumber} />
        </div>

        <div className="field">
          <label htmlFor="invoice-date">Invoice Date</label>
          <input
            id="invoice-date"
            className="input"
            type="date"
            value={data.invoiceDate}
            onChange={(e) => onChange({ invoiceDate: e.target.value })}
            aria-invalid={errors.invoiceDate ? true : undefined}
          />
          <p className="hint">Defaults to today. Change it for an earlier invoice.</p>
          <FieldError message={errors.invoiceDate} />
        </div>

        <div className="field field-wide">
          <label htmlFor="bill-to">Bill To</label>
          <textarea
            id="bill-to"
            className="input"
            rows={3}
            placeholder="Customer name and details"
            value={data.billTo}
            onChange={(e) => onChange({ billTo: e.target.value })}
          />
        </div>
      </div>
    </section>
  );
}
