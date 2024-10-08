'use client'
// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import * as JsxRuntime from "react/jsx-runtime";

function reducer(state, action) {
  if (action === "Inc") {
    return {
            count: state.count + 1 | 0
          };
  } else {
    return {
            count: state.count - 1 | 0
          };
  }
}

function Counter(props) {
  var match = React.useReducer(reducer, {
        count: 0
      });
  var dispatch = match[1];
  var className = "bg-teal-600 hover:bg-teal-500 px-4 py-1 min-w-8";
  return JsxRuntime.jsxs(JsxRuntime.Fragment, {
              children: [
                "Count: " + String(match[0].count),
                JsxRuntime.jsxs("div", {
                      children: [
                        JsxRuntime.jsx("button", {
                              children: "-",
                              className: className,
                              onClick: (function (param) {
                                  dispatch("Dec");
                                })
                            }),
                        JsxRuntime.jsx("button", {
                              children: "+",
                              className: className,
                              onClick: (function (param) {
                                  dispatch("Inc");
                                })
                            })
                      ],
                      className: "flex gap-2"
                    })
              ]
            });
}

var make = Counter;

export {
  reducer ,
  make ,
}
/* react Not a pure module */
