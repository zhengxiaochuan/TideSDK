describe("php tests",
{
	test_evaluate: function()
	{
		value_of(window.php_add).should_be_function();
	}
});