const messages = {
  validation: {
    success: {
      title: 'Konto zostało potwierdzone',
      description: 'Możesz się teraz zalogować.',
      buttons: [
        {
          name: 'Zaloguj się',
          path: '/login',
          type: 'link',
        },
      ],
    },
    error: {
      title: 'Nie udało się potwierdzić konta',
      description: 'Wystąpił błąd podczas potwierdzania konta. Spróbuj ponownie lub skontaktuj się z administratorem.',
      buttons: [
        {
          name: 'Wyślij ponownie',
          path: '',
          type: 'button',
        },
        {
          name: 'Powrót',
          path: '/',
          type: 'link',
        },
      ],
    },
  },
  signUp: {
    success: {
      title: 'Udało ci się zarejestrować zespół',
      description: 'Potwierdź swój adres email, aby zakończyć proces rejestracji.',
      buttons: [
        {
          name: 'Wyśli ponownie',
          path: '',
          type: 'button',
        },
        {
          name: 'Zaloguj się',
          path: '/login',
          type: 'link',
        },
      ],
    },
    error: {
      title: 'Nie udało się zarejestrować zespołu',
      description: 'Wystąpił błąd podczas rejestracji. Spróbuj ponownie lub skontaktuj się z administratorem.',
      buttons: [
        {
          name: 'Zarejestruj się ponownie',
          path: '/register',
          type: 'link',
        },
        {
          name: 'Powrót',
          path: '',
          type: 'link',
        },
      ],
    },
  },
  signIn: {
    error: {
      title: 'Potwierdź swój adres email',
      description:
        'Aby kontynuować, potwierdź swój adres email. Sprawdź swoją skrzynkę pocztową. Jeśli nie widzisz wiadomości, sprawdź folder spam lub wyślij ponownie.',
      buttons: [
        {
          name: 'Wyślij ponownie',
          path: '',
          type: 'button',
        },
      ],
    },
  },
  logOut: {
    success: {
      title: 'Wylogowano',
      description: 'Zostałeś wylogowany z platformy.',
      buttons: [
        {
          name: 'Zaloguj się',
          path: '/login',
          type: 'link',
        },
        {
          name: 'Powrót do strony głównej',
          path: '/',
          type: 'link',
        },
      ],
    },
  },

  resend: {
    success: {
      title: 'Wysłano ponownie link aktywacyjny',
      description: 'Sprawdź swoją skrzynkę pocztową.',
      buttons: [
        {
          name: 'Powrót',
          path: '/',
          type: 'link',
        },
      ],
    },
    error: {
      title: 'Nie udało się wysłać linku aktywacyjnego',
      description:
        'Wystąpił błąd podczas wysyłania linku aktywacyjnego. Spróbuj ponownie lub skontaktuj się z administratorem.',
      buttons: [
        {
          name: 'Wyślij ponownie',
          path: '',
          type: 'button',
        },
      ],
    },
  },
}

const getMessages = (type) => {
  return messages[type]
}
export default getMessages
