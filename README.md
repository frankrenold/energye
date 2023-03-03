# energye

*Minimalistic energy efficient theme for [hugo static site generator]([https://gohugo.io/](https://github.com/gohugoio/hugo))*

## SETUP

### As a HUGO module ([preferred](https://www.nickgracilla.com/posts/master-hugo-modules-managing-themes-as-modules/))

#### Install

Make your project a HUGO module

```
hugo mod init your-project-repo
```

Add this theme as a HUGO module

```
#config.yaml
module:
  imports:
  - path: github.com/frankrenold/energye
```

[Read more](https://www.nickgracilla.com/posts/master-hugo-modules-managing-themes-as-modules/)

#### Update after installation
```
hugo mod get
```

### Into a git controlled hugo project

#### Install
```
git submodule add https://github.com/frankrenold/energye.git themes/energye
```

#### Update after installation
```
git submodule foreach git pull
```

#### Remove
```
git rm -r themes/energye
rm -rf .git/modules/themes/energye
```

## Create new E-Mail Update
```
hugo new updates/220525
```
