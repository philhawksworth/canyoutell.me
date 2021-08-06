# Can you tell me..?

https://canyoutell.me/

    
A bit of fun (and a little demonstration of <a href="https://jamstack.org/glossary/dpr/">DPR</a> using <a href="https://www.netlify.com/">Netlify</a>'s <a href="https://www.netlify.com/blog/2021/04/14/faster-builds-for-large-sites-on-netlify-with-on-demand-builders-now-in-early-access/#main">On Demand Builder</a> functions)


## Local development

```
# install the Netlify CLI
npm i -g netlify

# clone this repo
git clone https://github.com/philhawksworth/canyoutell.me

# move into the project repo and install dependencies
cd canyoutell.me
npm install

# run the build and bootstrap the serverless functions with Netlify dev
netlify dev
```
    
## Quick clone and deploy

Clickety click

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/philhawksworth/canyoutell.me&utm_medium=social&utm_source=github&utm_campaign=devex-ph&utm_content=canyoutellme
)
    