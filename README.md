Explanation by Nix Black:

#Page Renderers

The site dynamically render pages based on data from prismic.

gatsby-node.js sends an 'actions' object which contains a 'create page' action to
every page creator defined in /utils/page-creators/index.js.
Each page creator queries prismic for data, then renders a page using a page-template defined in
/src/templates/
the templates need to be accessible by the client, which is why they're in the src directory.


#Slice Renderers
a slice renderer is the default export from /src/components/slices/index.js.
it detects a slices type and renders it. Supports two slices, image-paragraph, and rich-text-paragraph.


#RichText
I made a component that renders rich text. /src/components/handleRichText.js Yes! there's an already existing one, this is a wrapper for that with backups in case something breaks. It tries every possible thing I know to make text appear.
  