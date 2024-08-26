export function validateForm(formData) {
  const errors = {};
  if (!formData.name) errors.name = 'Name is required';
  if (!formData.date) errors.date = 'Date is required';
  if (!formData.time) errors.time = 'Time is required';
  if (formData.guests <= 0) errors.guests = 'Number of guests must be a positive number';
  return errors;
}
