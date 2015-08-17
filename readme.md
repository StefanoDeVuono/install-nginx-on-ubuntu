# install-nginx-on-ubuntu

Inspired by [Max Ogden's work](https://github.com/maxogden/install-nginx-on-ubuntu), I decided to make my own automated nginx installer.

Installs Nginx on Ubuntu locally. Also starts Nginx as a service.

Uses the [Nginx PPA](https://launchpad.net/~nginx/+archive/development)

Tested w/ Ubuntu 15.04 x64, but should work with other modern Ubuntus. YMMV. Took about 17 seconds to install and start nginx on a fresh Ubuntu droplet on Digital Ocean

## CLI usage

```
npm install install-nginx-on-ubuntu -g
install-nginx-on-ubuntu
```

### see also

- https://github.com/maxogden/install-nginx-on-ubuntu
- https://github.com/DamonOehlman/ngineer
- https://github.com/maxogden/install-node-on-ubuntu
