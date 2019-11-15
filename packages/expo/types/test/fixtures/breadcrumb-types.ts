import bugsnag from "../../..";
const bugsnagClient = bugsnag({
  apiKey: 'api_key',
  beforeSend: (event) => {
    event.breadcrumbs.map(breadcrumb => {
      console.log(breadcrumb.type)
      console.log(breadcrumb.name)
      console.log(breadcrumb.metaData)
      console.log(breadcrumb.timestamp)
    })
  }
});
