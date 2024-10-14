---
title: Local Setup
icon: TbDeviceDesktop
info: Mostly for contributors or curious developers
---

Follow this guide if you would like to setup the project locally to contribute.

## Prerequisites

<ArticleTabs label1="Ryserve API" label2="NodeJs Postgres">
<ArticleTab>

Before you can install and use Twenty, make sure you install the following on your computer:

<ArticleWarning>
`npm` instead. npm is now shipped with Node.js, so you don't need to install it separately.
</ArticleWarning>

</ArticleTab>

<ArticleTab>

1. Install NPM
Open PowerShell and run: 
```powershell
npm install
```
You should now see a prompt to restart your computer. If not, restart it manually.

Upon restart, a powershell window will open and install Ubuntu. This may take up some time.
You'll see a prompt to create a username and password for your Ubuntu installation.

2. Install and configure git

```bash
sudo apt-get install git

git config --global user.name "Your Name"

git config --global user.email "youremail@domain.com"
```

3. Install Node.js
```bash
sudo apt-get install curl
```

</ArticleTab>
</ArticleTabs>

---

## Step 1: Git Clone

In your terminal, run the following command. 


<ArticleTabs label1="SSH (Recommended)" label2="HTTPS">
<ArticleTab>
If you haven't already set up SSH keys, you can learn how to do so [here](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/about-ssh). 
```bash
git clone https://github.com/arifuzzaman31/ryserve-node
```
</ArticleTab>
<ArticleTab>

```bash
git clone https://github.com/arifuzzaman31/ryserve-node
```

</ArticleTab>
</ArticleTabs>

## Step 2: Position yourself at the root

```bash
cd ryserve-node
```

You should run all commands in the following steps from the root of the project.

## Step 3: Set up a PostgreSQL Database
We rely on [postgresql](postgresql://user:password@localhost:5432/ryserve?schema=public) and recommend you use the scripts below to provision a database with the right extensions.  
You can access the database at [localhost:5432](localhost:5432), with user `ryserve-node` and password `ryserve-node` .
</ArticleTabs>

## Step 4: Setup environment variables

Use environment variables or `.env` files to configure your project.

Copy the `.env.local`:
```bash
cp .env.local .env
```