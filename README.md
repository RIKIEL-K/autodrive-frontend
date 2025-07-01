# frontend of the web-app to order taxi - React

## Nginx configuration

Use the provided `nginx.conf` to serve the production build and proxy API
requests to the backend running on `localhost:8082`. With this configuration,
the frontend can call endpoints using relative paths such as `/api/users`.

```
nginx -c /path/to/nginx.conf
```

The `/api/` location is forwarded to `http://localhost:8082/api/`, so the code no
longer needs to include the full `http://localhost:8082/api` prefix.

