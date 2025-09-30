import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

interface ContactFormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactFormProps {
  onSubmit: (values: ContactFormValues) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  const formik = useFormik<ContactFormValues>({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email').required('Required'),
      subject: Yup.string().required('Required'),
      message: Yup.string().required('Required'),
    }),
    onSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      {(['name', 'email', 'subject'] as const).map((name) => {
        const fieldProps = {
          name,
          label:
            name === 'name'
              ? 'Name'
              : name === 'email'
              ? 'Email'
              : 'Subject',
          type: name === 'email' ? 'email' : 'text',
          placeholder:
            name === 'name'
              ? 'Your Name'
              : name === 'email'
              ? 'Your Email'
              : 'Subject',
        };
        return (
          <div key={name} className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label className="flex flex-col min-w-40 flex-1">
              <p className="text-[#0d1b15] text-base font-medium leading-normal pb-2">
                {fieldProps.label}
              </p>
              <input
                type={fieldProps.type}
                name={fieldProps.name}
                placeholder={fieldProps.placeholder}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values[fieldProps.name]}
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0d1b15] focus:outline-0 focus:ring-0 border border-[#cfe7dd] bg-[#f8fcfa] focus:border-[#cfe7dd] h-14 placeholder:text-[#4c9a77] p-[15px] text-base font-normal leading-normal"
              />
              {formik.touched[fieldProps.name] && formik.errors[fieldProps.name] && (
                <span className="text-red-500 text-sm pt-1">{formik.errors[fieldProps.name]}</span>
              )}
            </label>
          </div>
        );
      })}

      {/* Message textarea */}
      <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
        <label className="flex flex-col min-w-40 flex-1">
          <p className="text-[#0d1b15] text-base font-medium leading-normal pb-2">Message</p>
          <textarea
            name="message"
            placeholder="Your Message"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0d1b15] focus:outline-0 focus:ring-0 border border-[#cfe7dd] bg-[#f8fcfa] focus:border-[#cfe7dd] min-h-36 placeholder:text-[#4c9a77] p-[15px] text-base font-normal leading-normal"
          />
          {formik.touched.message && formik.errors.message && (
            <span className="text-red-500 text-sm pt-1">{formik.errors.message}</span>
          )}
        </label>
      </div>

      {/* Submit button */}
      <div className="flex px-4 py-3 justify-start">
        <button
          type="submit"
          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#13eb8a] text-[#0d1b15] text-sm font-bold leading-normal tracking-[0.015em]"
        >
          <span className="truncate">Send Message</span>
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
