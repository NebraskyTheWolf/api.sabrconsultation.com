module.exports = {
    // Calendrier réservation

    'get /api/calendar/fetch': { 'function': 'CalendarController.index', protected: true },

    // Réservation ( utilisateurs )

    'post /api/booking/create': { 'function': 'BookingControlle.create', protected: true },
    'get /api/booking/cancel/:reference': { 'function': 'BookingControlle.cancel', protected: true },
    'get /api/booking/edit/:reference': { 'function': 'BookingControlle.edit', protected: true },
    'get /api/booking/confirm/:id/:reference': { 'function': 'BookingControlle.confirm', protected: true },

    // Connexion

    'post /api/admin/login': { 'function': 'AdminController.login', protected: true },

    // Utilisateurs 

    'get /api/admin/users': { 'function': 'AdminController.login', protected: true },
    'post /api/admin/users/create': { 'function': 'AdminController.create', protected: true },
    'get /api/admin/users/delete/:userId': { 'function': 'AdminController.delete', protected: true },
    'get /api/admin/users/edit/:userId': { 'function': 'AdminController.edit', protected: true },

    // Audit

    'get /api/admin/users/sessions': { 'function': 'AdminController.fetchAudit', protected: true },
    'get /api/admin/users/session/:sessionId': { 'function': 'AdminController.fetchAuditId', protected: true },

    // Configuration

    'get /api/admin/config': { 'function': 'ConfigController.fetchConfif', protected: true },
    'patch /api/admin/config/edit': { 'function': 'ConfigController.editConfig', protected: true },

    // Réservations

    'get /api/admin/booking': { 'function': 'BookingController.fetch', protected: true },
    'get /api/admin/booking/cancel/:bookingId': { 'function': 'BookingController.cancel', protected: true },
    'get /api/admin/booking/edit/:bookingId': { 'function': 'BookingController.edit', protected: true },

};