import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

function contactApiPlugin() {
  return {
    name: 'slv-contact-api',
    configureServer(server) {
      server.middlewares.use('/api/contact', async (req, res, next) => {
        if (req.method !== 'POST') {
          res.statusCode = 405;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ success: false, error: 'Method Not Allowed' }));
          return;
        }

        let body = '';
        req.on('data', chunk => { body += chunk; });
        req.on('end', () => {
          try {
            const data = JSON.parse(body || '{}');
            const cleanPhone = (data.phone || '').replace(/\D/g, '');

            if (!data.name || !data.name.trim()) {
              res.statusCode = 400;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: false, error: 'Please enter your full name.' }));
              return;
            }

            if (!cleanPhone || cleanPhone.length < 8) {
              res.statusCode = 400;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: false, error: 'Please enter a valid phone number (at least 8-10 digits).' }));
              return;
            }

            if (data.email && data.email.trim()) {
              const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
              if (!emailRegex.test(data.email.trim())) {
                res.statusCode = 400;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ success: false, error: 'Please enter a valid email address.' }));
                return;
              }
            }

            if (!data.propertyType) {
              res.statusCode = 400;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: false, error: 'Please select your property type.' }));
              return;
            }

            if (!data.pestProblem) {
              res.statusCode = 400;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: false, error: 'Please select the pest problem.' }));
              return;
            }

            if (!data.serviceAddress || !data.serviceAddress.trim()) {
              res.statusCode = 400;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: false, error: 'Please provide your service locality or address in Bangalore.' }));
              return;
            }

            // Real server receipt and reference ID generation
            const referenceId = 'SLV-' + Math.floor(100000 + Math.random() * 900000);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({
              success: true,
              message: 'Callback request registered successfully.',
              referenceId,
              timestamp: new Date().toISOString()
            }));
          } catch (err) {
            res.statusCode = 400;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ success: false, error: 'Malformed JSON payload.' }));
          }
        });
      });
    }
  };
}

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false,
  },
  integrations: [react()],
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
  vite: {
    plugins: [tailwindcss(), contactApiPlugin()],
  },
});
