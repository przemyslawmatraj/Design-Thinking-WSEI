const messages = {
  validation: {
    success: {
      title: 'Konto zostało potwierdzone',
      description: 'Możesz się teraz zalogować.',
      buttons: [
        {
          name: 'Przejdź do panelu',
          path: '/user/dashboard',
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
          name: 'Powrót do strony głównej',
          path: '/',
          type: 'link',
        },
      ],
    },
    closed: {
      title: 'Rejestracja zespołów została zamknięta',
      description: 'Rejestracja zespołów została zamknięta. Skontaktuj się z administratorem.',
      buttons: [
        {
          name: 'Powrót do strony głównej',
          path: '/',
          type: 'link',
        },
        {
          name: 'Zaloguj się',
          path: '/login',
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
  ideaSend: {
    success: {
      title: 'Pomyślna rejestracja pomysłu',
      description: 'Pomyślna rejestracja pomysłu.',
      buttons: [
        {
          name: 'Powrót do strony głównej',
          path: '/user/dashboard',
          type: 'link',
        },
      ],
    },
  },
  deleteAccount: {
    success: {
      title: 'Konto zostało usunięte',
      description: 'Twoje konto zostało usunięte.',
      buttons: [
        {
          name: 'Powrót do strony głównej',
          path: '/',
          type: 'link',
        },
      ],
    },
    question: {
      title: 'Czy na pewno chcesz usunąć swoje konto?',
      description: 'Usunięcie konta jest nieodwracalne.',
      buttons: [
        {
          name: 'Tak',
          path: '/user/deleteAccount',
          type: 'link',
        },
        {
          name: 'Nie',
          path: '/user/dashboard',
          type: 'link',
        },
      ],
    },
    error: {
      title: 'Nie udało się usunąć konta',
      description: 'Wystąpił błąd podczas usuwania konta. Spróbuj ponownie lub skontaktuj się z administratorem.',
      buttons: [
        {
          name: 'Powrót do strony głównej',
          path: '/user/dashboard',
          type: 'link',
        },
      ],
    },
  },
  changePassword: {
    success: {
      title: 'Hasło zostało zmienione',
      description: 'Twoje hasło zostało zmienione.',
      buttons: [
        {
          name: 'Powrót do strony głównej',
          path: '/dashboard',
          type: 'link',
        },
      ],
    },
    error: {
      title: 'Nie udało się zmienić hasła',
      description: 'Wystąpił błąd podczas zmiany hasła. Spróbuj ponownie lub skontaktuj się z administratorem.',
      buttons: [
        {
          name: 'Powrót do strony głównej',
          path: '/dashboard',
          type: 'link',
        },
      ],
    },
  },
  testUser: {
    error: {
      title: 'Testowy uytkownik ma zablokowaną tą możliwość',
      description: 'Przepraszamy, ale testowy użytkownik ma zablokowaną tą możliwość.',
      buttons: [
        {
          name: 'Powrót do strony głównej',
          path: '/user/dashboard',
          type: 'link',
        },
      ],
    },
  },
}

const getMessages = (type) => {
  return messages[type]
}
export default getMessages
