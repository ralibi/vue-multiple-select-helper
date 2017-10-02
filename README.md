Universal multiple select helper component for Vue

## Demo

[Demo on jsfiddle](https://jsfiddle.net/raymondralibi/o2s9pufa/)

## Installation

npm:

```shell
npm install vue-multiple-select-helper --save
```

## Usage

```js
import VueMultipleSelectHelper from 'vue-multiple-select-helper'
Vue.use(VueMultipleSelectHelper)
```

Using `multiple-select-helper` wrapped in a component
```js
Vue.component('cmyk-select-demo', {
  template: `
    <div class="c-cmyk-select-demo">

      <h5>CMYK Single</h5>

      <table>
        <tr>
          <th>
            Collection
          </th>
          <th>
            Recent Single Clicked
          </th>
          <th>
            Current Single Selection
          </th>
        </tr>
        <tr>
          <td>
            <multiple-select-helper
              :data="colors"
              :initialSelection="preselectedSingleColor"
              :multiple="false"
              v-model="clickedSingleColor"
              @selection-change="handleSingleSelectionChange">
              <ul v-for="color in colors">
                <li :class="{selected: isSingleSelected(color)}">
                  <p>
                    {{ color.name }}
                    <button @click.prevent="clickedSingleColor = color">
                      {{ isSingleSelected(color) ? "Deselect" : "Select" }}
                    </button>
                  </p>
                </li>
              </ul>
            </multiple-select-helper>
          </td>
          <td>
            <pre>{{ recentSingleColor }}</pre>
          </td>

          <td>
            <pre>{{ currentSingleSelection }}</pre>
          </td>
        </tr>
      </table>

      <h5>CMYK Multiple</h5>

      <table>
        <tr>
          <th>
            Collection
          </th>
          <th>
            Recent Multiple Clicked
          </th>
          <th>
            Current Multiple Selection
          </th>
        </tr>
        <tr>
          <td>
            <multiple-select-helper
              :data="colors"
              :initialSelection="preselectedMultipleColors"
              v-model="clickedMultipleColor"
              @selection-change="handleMultipleSelectionChange">
              <ul v-for="color in colors">
                <li :class="{selected: isMultipleSelected(color)}">
                  <p>
                    {{ color.name }}
                    <button @click.prevent="clickedMultipleColor = color">
                      {{ isMultipleSelected(color) ? "Deselect" : "Select" }}
                    </button>
                  </p>
                </li>
              </ul>
            </multiple-select-helper>
          </td>

          <td>
            <pre>{{ recentMultipleColor }}</pre>
          </td>

          <td>
            <pre>{{ currentMultipleSelection }}</pre>
          </td>
        </tr>
      </table>

    </div>
  `,
  
  data () {
    return {
      colors: [
        { id: '1', name: 'Cyan' },
        { id: '2', name: 'Magenta' },
        { id: '3', name: 'Yellow' },
        { id: '4', name: 'Black' }
      ],

      // Single selection
      preselectedSingleColor: { id: '4', name: 'Black' },
      clickedSingleColor: {},
      currentSingleSelection: {},
      recentSingleColor: null,

      // Multiple selection
      preselectedMultipleColors: [{ id: '2', name: 'Magenta' }],
      currentMultipleSelection: [],
      clickedMultipleColor: {},
      recentMultipleColor: null
    }
  },

  methods: {
    // Single selection
    handleSingleSelectionChange (selection, recent) {
      this.currentSingleSelection = selection
      this.recentSingleColor = recent
    },
    isSingleSelected (val) {
      return this.currentSingleSelection.id === val.id
    },
    
    // Multiple selection
    handleMultipleSelectionChange (selection, recent) {
      this.currentMultipleSelection = selection
      this.recentMultipleColor = recent
    },
    isMultipleSelected (val) {
      return this.currentMultipleSelection.findIndex((item) => item.id === val.id) !== -1
    }
  }
})
```

### Attributes
| Attribute | Description | Required | Type | Accepted values | Default |
|---|---|---|---|---|---|
| `data` | Selection domain | Yes | `Array` of object | — | — |
| `multiple` | Selection mode | No | `Boolean` | — | `true` |
| `initialSelection` | Initial selection | Yes | `Array` of object if multiple is `true` or `Object` if multiple is `false` | — | — |
| `selectionKey` | — | No | `String` | — | `'id'` |
| `value` (`v-model`) | — | Yes | `Object` | `{}` | `{}` |
### Slot
| Name | Description |
|---|---|
| — | Content of wrapped table/list |
### Events
| Name | Description | Parameters |
|---|---|---|
| `selection-change` | Triggers when user change `v-model` value (by clicking an item) | current selection array/object and object of clicked item |
