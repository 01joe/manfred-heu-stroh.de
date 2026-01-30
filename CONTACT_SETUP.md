# Configuration du formulaire de contact

## Configuration requise

Le formulaire de contact envoie maintenant les emails à **info@manfred-heu-stroh.de**.

### Étapes de configuration :

1. **Ouvrez le fichier `.env.local`** et configurez vos paramètres SMTP :

   ```
   SMTP_HOST=smtp.gmail.com          # Serveur SMTP (Gmail dans cet exemple)
   SMTP_PORT=587                     # Port SMTP (587 pour TLS)
   SMTP_SECURE=false                 # false pour TLS, true pour SSL
   SMTP_USER=your-email@gmail.com    # Votre adresse email
   SMTP_PASSWORD=your-app-password   # Votre mot de passe d'application
   SMTP_FROM=noreply@manfred-heu-stroh.de  # Adresse d'envoi
   CONTACT_EMAIL=info@manfred-heu-stroh.de # Adresse de réception
   ```

### Utiliser Gmail :

1. Activez la vérification en deux étapes sur votre compte Gmail
2. Générez un mot de passe d'application : https://myaccount.google.com/apppasswords
3. Utilisez ce mot de passe dans `SMTP_PASSWORD`

### Utiliser un autre service SMTP :

Vous pouvez utiliser n'importe quel service SMTP (Outlook, SendGrid, etc.). Consultez la documentation de votre fournisseur pour les paramètres SMTP.

### Exemple avec SendGrid :

```
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=apikey
SMTP_PASSWORD=SG.xxx...
SMTP_FROM=noreply@manfred-heu-stroh.de
CONTACT_EMAIL=info@manfred-heu-stroh.de
```

## Fonctionnalités implémentées :

✅ Formulaire entièrement fonctionnel avec validation
✅ État de chargement pendant l'envoi
✅ Messages de succès et d'erreur
✅ Reinitialisation du formulaire après envoi
✅ Sécurité : les données sont envoyées via POST
✅ Route API : `/api/contact`

## Champs collectés :

- Nom (obligatoire)
- Entreprise (optionnel)
- Téléphone (obligatoire)
- WhatsApp (optionnel)
- Email (obligatoire)
- Pays (optionnel)
- Ville (optionnel)
- Code postal (optionnel)
- Intérêt (Foin/Paille)

Tous les emails reçus incluront un bouton de réponse directe vers l'adresse email du client.
