import { connect } from "datocms-plugin-sdk";
import { render } from "./utils/render";
import ConfigScreen from "./entrypoints/ConfigScreen";
import FieldExtension from "./entrypoints/FieldExtension";
import { PluginAttributes } from "datocms-plugin-sdk/dist/types/SiteApiSchema";
import "datocms-react-ui/styles.css";

connect({
  renderConfigScreen(ctx) {
    return render(<ConfigScreen ctx={ctx} />);
  },
  manualFieldExtensions() {
    return [
      {
        id: "yandexTranslate",
        name: "Yandex Translate",
        type: "addon",
        fieldTypes: ["text", "string"] as NonNullable<
          PluginAttributes["field_types"]
        >,
      },
    ];
  },
  renderFieldExtension(id, ctx) {
    render(<FieldExtension ctx={ctx} />);
  },
});
