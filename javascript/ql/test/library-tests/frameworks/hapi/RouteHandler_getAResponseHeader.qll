import semmle.javascript.frameworks.Express

query predicate test_RouteHandler_getAResponseHeader(
  Hapi::RouteHandler rh, string name, https::HeaderDefinition res
) {
  res = rh.getAResponseHeader(name)
}
