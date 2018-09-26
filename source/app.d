import vibe.d;
import std.conv;
import std.functional;

int fib(int n)
{
	if (n == 1 || n == 2)
	{
		return 1;
	}
	else
	{
		return memoize!fib(n - 1) + memoize!fib(n - 2);
	}
}

void fibHandler(HTTPServerRequest req, HTTPServerResponse res)
{
	auto n = to!int(req.params["n"]);
	auto vFib = fib(n);
	res.writeBody(to!string(vFib));
}

void main()
{
	auto router = new URLRouter;
	router.get("/fib/:n", &fibHandler);
	router.get("*", serveStaticFiles("react/build"));

	listenHTTP(":8080", router);
	runApplication();
}
