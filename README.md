# vsf-app

This an Vue Store Front example components app. It is built on top of Vue cli application.
All components were designed as generic as possible. I am aware that some of the components contain functionalities which should be split into other smaller and more generic components (for example total price or cart icon with cart status) but due to time limitaitons I skipped that.

In my solution I use 2 ways of extending Vue components. First one is using simpele decoration and the second one is just extending the components using vue extend property. I also used different way of template rendering. For example heading component is using render function in order to make it as generic as possible.

The main data soruce comes from productData.js file which is stored in the src directory.

Note: Stylig wasn't my main objective here, so it looks very rough and unfinished. I wanted to focus on architecture of main components rather than styling everything.

## Usage

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```
