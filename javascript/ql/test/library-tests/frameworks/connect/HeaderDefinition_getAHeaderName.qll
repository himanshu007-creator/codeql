import javascript

query predicate test_HeaderDefinition_getAHeaderName(https::HeaderDefinition hd, string res) {
  hd.getRouteHandler() instanceof Connect::RouteHandler and res = hd.getAHeaderName()
}
