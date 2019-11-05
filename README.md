# useAlert - in development
WIP - Custom React Hook for showing Bootstrap Alerts

Usage example:
```javascript
import { useAlert } from './useAlert'; 

...

const classes = "mx-2 p-4" // String of custom classes to add to the alert element
const [alertState, alertApi] = useAlert("alertsRoot", classes); // Get the alert state (type, message, visibility) and API

...

<div id="alertsRoot">
</div>

```

## API

- show(type, message)
- hide()

```javascript

  <button className="btn" onClick={() => alertApi.show('success','This is a success Message')}>Show success</button>
  <button className="btn" onClick={() => alertApi.show('warning','This is a warning Message')}>Show warning</button>
  <button className="btn" onClick={() => alertApi.show('danger','This is a danger Message')}>Show danger</button>
  <button className="btn" onClick={() => alertApi.hide()}>Hide</button>

```
