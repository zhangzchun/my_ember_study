# my_ember_study
2021年4月30日11:35:27
### Core Concepts
## Components
# Templates are HTML
> + The Application Template
> app/templates/application.hbs   styles/app.css

> + Self-Closing Tags
```
Supported Features
This means that all of the following HTML features work as-is:

Web components
SVG
HTML comments
White space (following the same rules as normal HTML)
Special HTML elements like <table> and <select>
Restrictions
There are a handful of restrictions on the HTML that you can put in an Ember template:

Only valid HTML elements in a <body> tag can be used
No <script> tags
Other than that, go to town!
```

# Introducing Components
> + Breaking it into pieces
>>> The Received Message
> ember generate component received-message
>>> The Sent Message
> ember generate component sent-message
>>> The New Message Input
> ember generate component new-message-input
>>> 

> + Breaking Components Down Further
```
app/
  components/
-    received-message.hbs
+    received-message/
+      index.hbs
+      avatar.hbs
+      username.hbs
tests/
  integrat/
    com/
-      rece-----test
```
> ember generate component received-message/index
> ember generate component received-message/avatar
> ember generate component received-message/username
>>>>
> ember generate component sent-message/index
> ember generate component sent-message/avatar
> ember generate component sent-message/username

# Component Arguments and HTML Attributes
> + Arguments
> ember generate component avatar
> + HTML Attributes

# Conditional Content
> + Block if
>>> Motivation
> ember generate component username
> + Inline if
>>> Motivation
> ember generate component username

# Block Content
> ember generate component message
> + Conditional Blocks
> ember generate component error-dialog
> + Block Parameters
> ember generate component blog-post

# 
