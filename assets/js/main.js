// Toggle Menú Mòbil
        const mobileBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');

        if (mobileBtn && mobileMenu) {
            mobileBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });
        }

        // Filtrar Menú de la Carta
        function filterMenu(category) {
            const buttons = document.querySelectorAll('.tab-btn');
            buttons.forEach(btn => {
                if (btn.getAttribute('data-tab') === category) {
                    btn.classList.add('bg-brand-accent', 'text-brand-dark', 'shadow-md');
                    btn.classList.remove('glass-panel', 'text-brand-cream');
                } else {
                    btn.classList.remove('bg-brand-accent', 'text-brand-dark', 'shadow-md');
                    btn.classList.add('glass-panel', 'text-brand-cream');
                }
            });

            const items = document.querySelectorAll('.menu-item');
            items.forEach(item => {
                if (item.classList.contains(category)) {
                    item.classList.remove('hidden');
                } else {
                    item.classList.add('hidden');
                }
            });
        }

        // Formulari de Reserva Lògica
        function handleBooking(event) {
            event.preventDefault();
            document.getElementById('booking-form').classList.add('hidden');
            document.getElementById('booking-success').classList.remove('hidden');
        }

        function resetBooking() {
            document.getElementById('booking-form').reset();
            document.getElementById('booking-form').classList.remove('hidden');
            document.getElementById('booking-success').classList.add('hidden');
        }

        // Data mínima al formulari de reserva
        const dateInput = document.getElementById('reserve-date');
        if (dateInput) {
            const today = new Date().toISOString().split('T')[0];
            dateInput.setAttribute('min', today);
        }
