(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
	["chunk-2d0d6af1"], {
		7431: function(e, t, n) {
			"use strict";
			n.r(t);
			var o = function() {
					var e = this,
						t = e.$createElement,
						n = e._self._c || t;
					return n("div", {
						staticClass: "app-container"
					}, [n("div", {
						staticClass: "layout-content"
					}, [e.$route.meta.keepAlive ? n("keep-alive", [n("router-view")], 1) : n("router-view")], 1)])
				},
				a = [],
				i = {
					name: "AppLayout",
					data: function() {
						return {
							tabbars: [{
								title: "首页",
								to: {
									name: "Home"
								},
								icon: "home-o"
							}, {
								title: "关于我",
								to: {
									name: "About"
								},
								icon: "user-o"
							}]
						}
					},
					components: {},
					methods: {
						handleChange: function(e) {}
					}
				},
				u = i,
				c = n("2877"),
				r = Object(c["a"])(u, o, a, !1, null, null, null);
			t["default"] = r.exports
		}
	}
]);
