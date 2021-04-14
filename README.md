## my_ember_study
# 21/4/9 quick start
# scientists
> npm install -g ember-cli  
> ember new my_ember_study  
> ember server
> ember generate route scientists  

# person
> ember generate component people-list
```shell
installing component
  create app\components\people-list.hbs
  skip app/components/people-list.js
  tip to add a class, run `ember generate component-class people-list`
installing component-test
  create tests\integration\components\people-list-test.js
```
> ember generate component-class people-list

# on person click

### tutorial
## part1 
# Orientation
> delete the app/templates/application.hbs file.  
> Create a app/templates/index.hbs file.  
> copy it into app/styles/app.css file.  
> download the teaching-tomster.png image  

# Building Pages
> ember generate route about  
> ember generate route contact  
> Ember provides an alternative called <LinkTo> instead of the plain-old <a> tag
```
<a> tag with the appropriate href would require the browser to make a full-page refresh,
```

# Automated Testing
> ember generate acceptance-test my_ember_study
> ember test --server or ember t -s
```
In this case, we generated an acceptance test located at tests\acceptance\my-ember-study-test.js
```

# Component Basics
Passing Content to Components with {{yield}}
> ember generate component jumbo
> ember generate component-class jumbo
> ember generate component-test jumbo

> ember generate component nav-bar
> ember generate component-class nav-bar

# Using the Application Template and {{outlet}}s



