import emailjs from 'emailjs-com';

export const sendEmail = (e) => {
    e.preventDefault();

    const timeInput = document.getElementById('time');
    if (timeInput) {
        timeInput.value = new Date().toLocaleString();
    }

    return emailjs.sendForm(
        'service_d2ulgfi',
        'template_aa82g8l',
        e.target,
        'M4NoDuyTS2FmCi4xF'
    );
};
