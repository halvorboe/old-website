(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    RXBc: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "pageQuery", function () {
          return d;
        });
      var l = n("q1tI"),
        a = n.n(l),
        r = n("SbOt"),
        o = n("oVTX"),
        i = n("Wbzz"),
        s = function (e) {
          var t = e.post.node,
            n = t.frontmatter,
            l = t.fields,
            r = t.excerpt;
          return a.a.createElement(
            "div",
            { style: { margin: "15px 10px 30px 10px" } },
            a.a.createElement(
              i.Link,
              { to: l.slug },
              a.a.createElement("h3", null, n.date),
              a.a.createElement("h2", null, n.title),
              a.a.createElement("p", null, r)
            )
          );
        },
        u = n("7oih"),
        c = function (e) {
          var t = [],
            n = null;
          for (var l in e) {
            var a = e[l],
              r = a.node.frontmatter.month;
            if (null !== n) {
              if (n.tag === r) {
                (n.posts[n.posts.length - 1].isMore = !0), n.posts.push(a);
                continue;
              }
              n = null;
            }
            null === n && (n = { tag: r, posts: [a] }), t.push(n);
          }
          return t;
        },
        d =
          ((t.default = function (e) {
            var t = e.data,
              n = (e.locations, t.trending.edges.slice(0, 3)),
              l = c(t.all.edges);
            return a.a.createElement(
              u.a,
              null,
              a.a.createElement("div", null, a.a.createElement(r.a, null)),
              a.a.createElement(
                "div",
                null,
                a.a.createElement(
                  "div",
                  null,
                  a.a.createElement("h3", null, "🔥 Trending posts"),
                  a.a.createElement(
                    o.a,
                    { row: !0 },
                    n.map(function (e, t) {
                      console.log(t);
                      var n = {};
                      return (
                        (t + 1) % 3 != 0 &&
                          (window.innerWidth >= 800
                            ? (n.borderRight = "2px solid white")
                            : (n.borderBottom = "2px solid white")),
                        a.a.createElement(
                          "div",
                          { style: n },
                          a.a.createElement(s, {
                            key: e.node.fields.slug,
                            post: e,
                          })
                        )
                      );
                    })
                  )
                )
              ),
              a.a.createElement(
                "div",
                null,
                a.a.createElement(
                  "div",
                  null,
                  a.a.createElement("h3", null, "🗄 Archive"),
                  l.map(function (e) {
                    return a.a.createElement(
                      o.a,
                      { key: e.tag, header: e.tag, light: !0 },
                      e.posts.map(function (e) {
                        var t = e.isMore
                          ? { borderBottom: "2px solid #777" }
                          : {};
                        return a.a.createElement(
                          "div",
                          { style: t },
                          a.a.createElement(s, {
                            key: e.node.fields.slug,
                            post: e,
                          })
                        );
                      })
                    );
                  })
                )
              )
            );
          }),
          "2892033579");
    },
  },
]);
//# sourceMappingURL=component---src-pages-index-js-c3c5accd01dd0ea72ca0.js.map
