import javascript

query predicate test_RequestInputAccess(
  https::RequestInputAccess ria, string res, Restify::RouteHandler rh
) {
  ria.getRouteHandler() = rh and res = ria.getKind()
}
