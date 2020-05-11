(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    RXBc: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "pageQuery", function () {
          return m;
        });
      var a = n("q1tI"),
        l = n.n(a),
        r = n("SbOt"),
        o = n("oVTX"),
        u = n("Wbzz"),
        i = function (e) {
          var t = e.post.node,
            n = t.frontmatter,
            a = t.fields,
            r = t.excerpt;
          return l.a.createElement(
            "div",
            { style: { margin: "15px 10px 30px 10px" } },
            l.a.createElement(
              u.Link,
              { to: a.slug },
              l.a.createElement("h3", null, n.date),
              l.a.createElement("h2", null, n.title),
              l.a.createElement("p", null, r)
            )
          );
        },
        s = n("7oih"),
        c = function (e) {
          var t = [],
            n = null;
          for (var a in e) {
            var l = e[a],
              r = l.node.frontmatter.month;
            if (null !== n) {
              if (n.tag === r) {
                (n.posts[n.posts.length - 1].isMore = !0), n.posts.push(l);
                continue;
              }
              n = null;
            }
            null === n && (n = { tag: r, posts: [l] }), t.push(n);
          }
          return t;
        },
        m =
          ((t.default = function (e) {
            var t = e.data,
              n = (e.locations, t.trending.edges.slice(0, 3)),
              a = c(t.all.edges);
            return l.a.createElement(
              s.a,
              null,
              l.a.createElement("div", null, l.a.createElement(r.a, null)),
              l.a.createElement(
                "div",
                null,
                l.a.createElement(
                  "div",
                  null,
                  l.a.createElement("h3", null, "🔥 Trending posts"),
                  l.a.createElement(
                    o.a,
                    { row: !0 },
                    n.map(function (e, t) {
                      return l.a.createElement(
                        "div",
                        { className: (t + 1) % 3 != 0 ? "item" : "last" },
                        l.a.createElement(i, {
                          key: e.node.fields.slug,
                          post: e,
                        })
                      );
                    })
                  )
                )
              ),
              l.a.createElement(
                "div",
                null,
                l.a.createElement(
                  "div",
                  null,
                  l.a.createElement("h3", null, "🗄 Archive"),
                  a.map(function (e) {
                    return l.a.createElement(
                      o.a,
                      { key: e.tag, header: e.tag, light: !0 },
                      e.posts.map(function (e) {
                        var t = e.isMore
                          ? { borderBottom: "2px solid #777" }
                          : {};
                        return l.a.createElement(
                          "div",
                          { style: t },
                          l.a.createElement(i, {
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
//# sourceMappingURL=component---src-pages-index-js-e36e767b56a7e0bdadbb.js.map
