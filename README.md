
# Deploying a React Application with Nginx

## 1. Install Nginx

First, you need to install Nginx on your server. Here’s how you can do it on different operating systems:

### Linux

#### For Debian-based systems:

```sh
sudo apt update
sudo apt install nginx
```
## 2.Build Your React Application

Ensure your React application is built and ready for production. Run the following command in your React project directory: 

```sh 
npm run build
```

This command will create a build directory containing the optimized static files.

## 3. Configure Nginx
Edit the Nginx configuration file to serve your React application. The primary configuration file is usually located at /etc/nginx/nginx.conf or you may create a new configuration file in /etc/nginx/sites-available/ and link it to /etc/nginx/sites-enabled/.

Here is a sample configuration for serving a React application:

```nginx
server {
    listen 80;
    server_name your_domain.com;

    root /path/to/your/react/app/build;

    index index.html;

    location / {
        try_files $uri /index.html;
    }
}
```

- server_name your_domain.com;: Replace your_domain.com with your domain name.
- root /path/to/your/react/app/build;: Set this to the path of your React application's build directory.
- try_files $uri /index.html;: Ensures that all routes in your React application are served by index.html.


### 4. Enable and Restart Nginx

After configuring Nginx, you need to enable the configuration and restart the Nginx service:

```sh
sudo ln -s /etc/nginx/sites-available/your_config_file /etc/nginx/sites-enabled/
sudo systemctl restart nginx
```
