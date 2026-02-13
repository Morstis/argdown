<template>
  <div class="cheat-sheet-item">
    <div class="source-view">
      <slot name="source"></slot>
    </div>
    <div class="explanation">
      <h3 class="title">
        <slot name="title"></slot>
      </h3>
      <slot name="explanation"></slot>
    </div>
  </div>
</template>
<style lang="css">
/* Style the argdown-webcomponent */
.cheat-sheet-item .source-view ::part(argdown-webcomponent) {
  border: 0 !important;
  padding: 0;
  /*background: var(--vp-code-block-bg);*/
}
.cheat-sheet-item {
  box-sizing: border-box;
  color: var(--vp-code-block-color);
  display: flex;
  flex-direction: row;
  border: 1px solid var(--vp-code-lang-color);
  margin-top: -1px;
  /*background: var(--vp-code-block-bg);*/
}
@media (max-width: 419px) {
  .cheat-sheet-item .language-argdown.extra-class {
    margin: 0;
  }
}
@media (max-width: 1024px) and (orientation: portrait) {
  .cheat-sheet-item {
    flex-direction: column;
  }
}
.cheat-sheet-item pre {
  margin: 0;
  padding: 0;
  /*background-color: var(--vp-code-block-bg);*/
}
.cheat-sheet-item .source-view {
  box-sizing: border-box;
  flex-grow: 1;
  flex-basis: 0;
  width: 50%;
  padding: 1rem 0rem;
  overflow: auto;
}
@media (max-width: 1024px) and (orientation: portrait) {
  .cheat-sheet-item .source-view {
    width: 100%;
    height: auto;
    flex-basis: inherit;
    overflow: auto;
  }
}
.cheat-sheet-item .source-view pre.language-argdown {
  overflow: inherit;
}
.cheat-sheet-item .explanation .title {
  display: none;
  font-size: 0.8rem;
  color: #999;
}
.cheat-sheet-item .explanation {
  box-sizing: border-box;
  flex-grow: 1;
  flex-basis: 0;
  width: 50%;
  border-left: 1px solid var(--vp-code-lang-color);
  padding: 1rem;
  line-height: 1.5rem;
}
@media (max-width: 1024px) and (orientation: portrait) {
  .cheat-sheet-item .explanation {
    width: 100%;
    height: auto;
  }
}
</style>
