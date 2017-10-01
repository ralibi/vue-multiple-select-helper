Universal multiple select helper component for Vue

## Installation

npm:

```shell
npm install vue-multiple-select-helper --save
```

## Usage

```js
import VueMultipleSelectionHelper from 'vue-multiple-select-helper'
Vue.use(VueMultipleSelectionHelper)
```

```vue
<template>
  <div class="c-cmyk-select-demo">

    <h2>CMYK Multiple</h2>

    <multiple-select-helper
      :data="colors"
      :initialSelection="preselectedMultipleColors"
      v-model="clickedMultipleColor"
      @selection-change="handleMultipleSelectionChange">
      <ul v-for="color in colors">
        <li :class="{selected: isMultipleSelected(color)}">
          <h5>{{ color.name }}</h5>
          <button @click.prevent="clickedMultipleColor = color">
            {{ isMultipleSelected(color) ? "Deselect" : "Select" }}
          </button>
        </li>
      </ul>
    </multiple-select-helper>

    <h3>Recent Multiple Clicked</h3>
    <pre>{{ recentMultipleColor }}</pre>
    <h3>Current Multiple Selection</h3>
    <pre>{{ currentMultipleSelection }}</pre>

    <hr/>

    <h2>CMYK Single</h2>

    <multiple-select-helper
      :data="colors"
      :initialSelection="preselectedSingleColor"
      :multiple="false"
      v-model="clickedSingleColor"
      @selection-change="handleSingleSelectionChange">
      <ul v-for="color in colors">
        <li :class="{selected: isSingleSelected(color)}">
          <h5>{{ color.name }}</h5>
          <button @click.prevent="clickedSingleColor = color">
            {{ isSingleSelected(color) ? "Deselect" : "Select" }}
          </button>
        </li>
      </ul>
    </multiple-select-helper>

    <h3>Recent Single Clicked</h3>
    <pre>{{ recentSingleColor }}</pre>
    <h3>Current Single Selection</h3>
    <pre>{{ currentSingleSelection }}</pre>

  </div>
</template>

<script>
  export default {
    name: 'c-cmyk-select-demo',
    data () {
      return {
        colors: [
          {
            id: '1',
            name: 'Cyan'
          },
          {
            id: '2',
            name: 'Magenta'
          },
          {
            id: '3',
            name: 'Yellow'
          },
          {
            id: '4',
            name: 'Black'
          }
        ],

        // Multiple selection
        preselectedMultipleColors: [
          {
            id: '2',
            name: 'Magenta'
          }
        ],
        currentMultipleSelection: [],
        clickedMultipleColor: {},
        recentMultipleColor: null,

        // Single selection
        preselectedSingleColor: {
          id: '4',
          name: 'Black'
        },
        clickedSingleColor: {},
        currentSingleSelection: {},
        recentSingleColor: null
      }
    },

    methods: {
      // Multiple selection
      handleMultipleSelectionChange (selection, recent) {
        this.currentMultipleSelection = selection
        this.recentMultipleColor = recent
      },
      isMultipleSelected (val) {
        return this.currentMultipleSelection.findIndex((item) => item.id === val.id) !== -1
      },

      // Single selection
      handleSingleSelectionChange (selection, recent) {
        this.currentSingleSelection = selection
        this.recentSingleColor = recent
      },
      isSingleSelected (val) {
        return this.currentSingleSelection.id === val.id
      }
    }
  }
</script>

<style scoped>
  li.selected h5,
  li.selected button {
    font-weight: bold;
  }
</style>
```

### Attributes
| Attribute | Description | Required | Type | Accepted values | Default |
|---|---|---|---|---|---|
| `data` | Selection domain | Yes | `Array` of object | — | — |
| `multiple` | Selection mode | No | `Boolean` | — | `true` |
| `initialSelection` | Initial selection | Yes | `Array` of object if multiple is `true` or `Object` if multiple is `false` | — | — |
| `selectionKey` | — | No | `String` | — | `'id'` |
| `value` (`v-model`) | — | Yes | `Object` | `null` | `null` |
### Slot
| Name | Description |
|---|---|
| — | Content of wrapped table/list |
### Events
| Name | Description | Parameters |
|---|---|---|
| `selection-change` | Triggers when user change `v-model` value (by clicking an item) | current selection array/object and object of clicked item |
