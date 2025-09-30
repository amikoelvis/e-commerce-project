import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ContactFormProps, ContactFormValues } from '@/interfaces';

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
    <form
      onSubmit={formik.handleSubmit}
      className="w-full max-w-xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6"
    >
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
          <div key={name} className="flex flex-col gap-2">
            <label className="text-[#0d1b15] text-base font-medium leading-normal">
              {fieldProps.label}
            </label>
            <input
              type={fieldProps.type}
              name={fieldProps.name}
              placeholder={fieldProps.placeholder}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values[fieldProps.name]}
              className="w-full rounded-xl border border-[#cfe7dd] bg-[#f8fcfa] h-12 px-4 text-[#0d1b15] placeholder:text-[#4c9a77] focus:border-[#4b9b78] focus:ring-1 focus:ring-[#4b9b78] text-base"
            />
            {formik.touched[fieldProps.name] && formik.errors[fieldProps.name] && (
              <span className="text-red-500 text-sm">{formik.errors[fieldProps.name]}</span>
            )}
          </div>
        );
      })}

      {/* Message textarea */}
      <div className="flex flex-col gap-2">
        <label className="text-[#0d1b15] text-base font-medium leading-normal">
          Message
        </label>
        <textarea
          name="message"
          placeholder="Your Message"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
          className="w-full rounded-xl border border-[#cfe7dd] bg-[#f8fcfa] min-h-[150px] px-4 py-3 text-[#0d1b15] placeholder:text-[#4c9a77] focus:border-[#4b9b78] focus:ring-1 focus:ring-[#4b9b78] text-base resize-y"
        />
        {formik.touched.message && formik.errors.message && (
          <span className="text-red-500 text-sm">{formik.errors.message}</span>
        )}
      </div>

      {/* Submit button */}
      <div className="flex justify-start">
        <button
          type="submit"
          className="rounded-full bg-[#13eb8a] text-[#0d1b15] text-sm font-bold px-6 py-2 hover:bg-[#10d97e] transition-colors"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
