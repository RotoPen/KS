// By Westbrook Johnson @westbrookj

import {
  LitElement,
  html,
  TemplateResult,
  css,
} from "lit-element";
import {
  customElement,
} from 'lit/decorators.js';
import "@spectrum-web-components/tabs/sp-tabs.js";
import "@spectrum-web-components/tabs/sp-tab.js";
import "@spectrum-web-components/tabs/sp-tab-panel.js";
import '@spectrum-web-components/tabs/sp-tabs-overflow.js';

@customElement("my-tabs")
export default class MyTabs extends LitElement {
  protected render(): TemplateResult {
    return html`
      <sp-tabs selected="1" size="xl">
        <sp-tab label="Tab 1" value="1"></sp-tab>
        <sp-tab label="Tab 2" value="2"></sp-tab>
        <sp-tab label="Tab 3" value="3"></sp-tab>
        <sp-tab label="Tab 4" value="4"></sp-tab>
        <sp-tab-panel value="1">Content for Tab 1</sp-tab-panel>
        <sp-tab-panel value="2">Content for Tab 2</sp-tab-panel>
        <sp-tab-panel value="3">Content for Tab 3</sp-tab-panel>
        <sp-tab-panel value="4">Content for Tab 4</sp-tab-panel>
    </sp-tabs>
    <div class="container" style="max-width: 250px">
    <sp-tabs-overflow>
        <sp-tabs selected="1" size="m">
            <sp-tab label="Tab 1" value="1"></sp-tab>
            <sp-tab label="Tab 2" value="2"></sp-tab>
            <sp-tab label="Tab 3" value="3"></sp-tab>
            <sp-tab label="Tab 4" value="4"></sp-tab>
            <sp-tab label="Tab 5" value="5"></sp-tab>
            <sp-tab label="Tab 6" value="6"></sp-tab>
            <sp-tab label="Tab 7" value="7"></sp-tab>
            <sp-tab label="Tab 8" value="8"></sp-tab>
            <sp-tab-panel value="1">Content for Tab 1</sp-tab-panel>
            <sp-tab-panel value="2">Content for Tab 2</sp-tab-panel>
            <sp-tab-panel value="3">Content for Tab 3</sp-tab-panel>
            <sp-tab-panel value="4">Content for Tab 4</sp-tab-panel>
            <sp-tab-panel value="5">Content for Tab 5</sp-tab-panel>
            <sp-tab-panel value="6">Content for Tab 6</sp-tab-panel>
            <sp-tab-panel value="7">Content for Tab 7</sp-tab-panel>
            <sp-tab-panel value="8">Content for Tab 8</sp-tab-panel>
        </sp-tabs>
    </sp-tabs-overflow>
</div>
    `;
  }
}
