# Extra plugins

Here a cureted list of extra/external mkdocs plugin that can be useful. To disable you must remove this lines from `mkdocs.yml`

```diff
plugins:
-  - glightbox
-  - termynal
```

## Termynal

- https://github.com/daxartio/termynal

```
    <!-- termynal -->
    
    ```console
    $ show progress
    ---> 100%
    Done!
    ```
```

<!-- termynal -->

```
$ show progress
---> 100%
Done!
```

```
    <!-- termynal -->

    ```
    // code
    ```
```

<!-- termynal -->

```
// code
```

## mkdocs-glightbox
 
 - https://github.com/blueswen/mkdocs-glightbox
 
 >  A MkDocs plugin supports image lightbox with GLightbox.

## cards

::cards::

[
  {
    "title": "Zeus",
    "content": "Lorem ipsum dolor sit amet.",
    "image": "./img/icons/001-zeus.png"
  },
  {
    "title": "Athena",
    "content": "Lorem ipsum dolor sit amet.",
    "image": "./img/icons/003-athena.png"
  },
  {
    "title": "Poseidon",
    "content": "Lorem ipsum dolor sit amet.",
    "image": "./img/icons/007-poseidon.png"
  },
  {
    "title": "Artemis",
    "content": "Lorem ipsum dolor sit amet.",
    "image": "./img/icons/021-artemis.png"
  },
  {
    "title": "Ares",
    "content": "Lorem ipsum dolor sit amet.",
    "image": "./img/icons/006-ares.png"
  },
  {
    "title": "Nike",
    "content": "Lorem ipsum dolor sit amet.",
    "image": "./img/icons/027-nike.png"
  }
]

::/cards::
