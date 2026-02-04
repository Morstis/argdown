# Release Notes 2025


## v2.0.x (December 2025)

More than 10 years ago, [Christian Voigt](https://github.com/christianvoigt) presented his idea of "a simple
markup syntax for incorporating argument semantics into online text messages" at COMMA 2014 ([Voigt 2014](https://dblp.org/rec/conf/comma/Voigt14.html)): Argdown was born. Christian has since built an elegant and highly functional ecosystem of tools and plugins around the Argdown syntax—widely recognized, and beloved by its users. ♥️

To make Argdown future-proof and ensure it be available for another 10 years, we, i.e., [Kushal](https://github.com/Kushal12341997), [Hatim](https://github.com/5HATIM5) and [Gregor](https://github.com/ggbetz), have been renovating Argdown since the beginning of 2025. Our guiding maxim—at least from a user's perspective—has been: conservation "as found." Christian's Argdown being a mature and polished application suite, we've refrained from adding more features and tinkering with UX, focusing instead on systematically updating deep dependencies, fixing the framework, and refactoring code where required.

In consequence:

* If you use Argdown apps (e.g., the VS Code extension) for argument analysis, you will (ideally) not notice any changes when switching to the new 2.0 release.
* If you're a developer building applications or sites with Argdown, however, some changes and adjustments might be required on your side. Most notably, Argdown 2.0 is, firstly, a pure `esm` library (with some standard `commonjs` apps) and is, secondly, now requiring Node 22 to work properly.

Our maintenance commitment for the future includes:

* Fix upcoming future bugs
* Replace problematic dependencies (e.g., outdated, unmaintained, or vulnerable ones) step by step
* Add features as opportunities arise (low hanging fruits)

