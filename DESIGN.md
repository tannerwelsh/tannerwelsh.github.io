# Design notes

## Themes

big list of themes: https://github.com/jekyll/jekyll/wiki/Themes

top choice!!!: https://github.com/broccolini/athena

http://broccolini.net/swiss/ - also this is pretty good

https://andrewbanchich.github.io/forty-jekyll-theme/ - a little too colorful maybe, more content than needed
http://hyde.getpoole.com/ - the original Hyde, 2 column
https://qwtel.com/hydejack/projects/ - too heavy? good and simple design tho
https://pages-themes.github.io/cayman/ - basic, supported by GH pages

## Inspiration

- http://www.paperplanes.de/ - way too simple probs
- http://www.nathanielkoloc.com/ - below the fold is not so great, but good header
- http://www.pascalvangemert.nl/#/profile - menu kinda cool, layout not so much
- http://ellensriley.com/#work - typography is not so great, but the overall feel is nice
- http://www.laurenicolesmith.com/ - super basic but cool
- http://www.garicruze.com/ - nice photo focus, too flashy tho
- http://www.quinntonharris.com/ - beautiful entry, tho more photo heavy than i could pull off

Good reading: https://medium.com/@strikingly/10-killer-examples-of-personal-branding-websites-81a6005bd1c4

## Notes

### Website structure

- Focus
  - Home page
  - Who I am
  - What this site is about
- writings (On learning)
  - To be a better self
  - To be a better human
  - To be a better animal
- archives (the library)
  - Of books
  - Of pictures
  - Of people

---

or...
- inspiration
  - words
  - people
  - concepts
  - projects
- education
  - self
    - learner
    - body
    - thinker
    - feeler
    - observer
    - creator
  - human
    - friend
    - citizen
    - lover
    - white person
    - man
    - colleague
    - designer
    - educator
    - writer
    - leader
  - animal
    - eater
    - consumer
    - producer
    - node (in the ecosystem)
    - inhabitant
    - terraformer
- creation
  - ideas
  - writings


### Resources to use

[http://codepen.io/openspectrum/pen/bwvuG](http://codepen.io/openspectrum/pen/bwvuG)

### Design ideas

personal website
- flocks of birds/nodes/circles representing: tweets, books read, Facebook posts, commits to open-source repo's, tumblr posts, etc.

- color the circles differently depending on their content

- overlay transparent column on left side of screen w/ text content, introduction, links, etc

- when mouse over a node, it pauses and a snapshot of its content is displayed in the background

- background is used to randomly display content from nodes, which are highlighted

flocking algorithm

source/inspiration: [http://harry.me/2011/02/17/neat-algorithms---flocking/](http://harry.me/2011/02/17/neat-algorithms---flocking/)

modify the above to include a modifier for semantic attraction: each boid contains semantic markers (could be as simple as set of tags describing the content) and boids are given a behavior whereby they gravitate towards others with similar semantic closeness. attraction == number of shared tags / total number of mutual tags.

example: given a "flock" of five boids with the following tags:

1\. education, philosophy

2\. programming, education

3\. mathematics, politics, sociology

4\. sociology, programming

5\. philosophy, education

boids 1 and 5 would have a 100% attraction rate and would maintain consistency in their movement despite the presence of other boids.

boids 2 and 4 would have a 33% attraction rate and would flock together but would fall into other flocks with boids of a higher attraction rate.
boids 3 and 4 would have a 25% attraction rate
