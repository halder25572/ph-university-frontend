export const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

export const genderOptions = ['male', 'female', 'other'].map(item => ({
  value: item,
  label: item.charAt(0).toUpperCase() + item.slice(1),
}));



export const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

export const bloodGroupOptions = bloodGroups.map((item) => ({
  value: item,
  label: item,
}));

export const monthOptions = monthNames.map((item) => ({
    value: item,
    label: item,
}));