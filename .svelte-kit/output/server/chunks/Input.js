import { c as create_ssr_component, f as compute_rest_props, b as add_attribute, h as spread, i as escape_object, j as escape_attribute_value, e as escape, l as compute_slots, v as validate_component, d as each } from "./ssr.js";
import { c as classnames } from "./utils.js";
const FormCheck = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classes;
  let inputClasses;
  let idFor;
  let $$restProps = compute_rest_props($$props, [
    "class",
    "checked",
    "disabled",
    "group",
    "id",
    "inline",
    "inner",
    "invalid",
    "label",
    "name",
    "reverse",
    "size",
    "type",
    "valid",
    "value"
  ]);
  let { class: className = "" } = $$props;
  let { checked = false } = $$props;
  let { disabled = false } = $$props;
  let { group = void 0 } = $$props;
  let { id = void 0 } = $$props;
  let { inline = false } = $$props;
  let { inner = void 0 } = $$props;
  let { invalid = false } = $$props;
  let { label = "" } = $$props;
  let { name = "" } = $$props;
  let { reverse = false } = $$props;
  let { size = "" } = $$props;
  let { type = "checkbox" } = $$props;
  let { valid = false } = $$props;
  let { value = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.checked === void 0 && $$bindings.checked && checked !== void 0)
    $$bindings.checked(checked);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.group === void 0 && $$bindings.group && group !== void 0)
    $$bindings.group(group);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.inline === void 0 && $$bindings.inline && inline !== void 0)
    $$bindings.inline(inline);
  if ($$props.inner === void 0 && $$bindings.inner && inner !== void 0)
    $$bindings.inner(inner);
  if ($$props.invalid === void 0 && $$bindings.invalid && invalid !== void 0)
    $$bindings.invalid(invalid);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.reverse === void 0 && $$bindings.reverse && reverse !== void 0)
    $$bindings.reverse(reverse);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.valid === void 0 && $$bindings.valid && valid !== void 0)
    $$bindings.valid(valid);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  classes = classnames(className, "form-check", {
    "form-check-reverse": reverse,
    "form-switch": type === "switch",
    "form-check-inline": inline,
    [`form-control-${size}`]: size
  });
  inputClasses = classnames("form-check-input", { "is-invalid": invalid, "is-valid": valid });
  idFor = id || label;
  return `<div${add_attribute("class", classes, 0)}>${type === "radio" ? `<input${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(inputClasses)
      },
      { id: escape_attribute_value(idFor) },
      { type: "radio" },
      { disabled: disabled || null },
      { name: escape_attribute_value(name) },
      { value: escape_attribute_value(value) }
    ],
    {}
  )}${value === group ? add_attribute("checked", true, 1) : ""}${add_attribute("this", inner, 0)}>` : `${type === "switch" ? `<input${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(inputClasses)
      },
      { id: escape_attribute_value(idFor) },
      { type: "checkbox" },
      { disabled: disabled || null },
      { name: escape_attribute_value(name) },
      { value: escape_attribute_value(value) }
    ],
    {}
  )}${add_attribute("checked", checked, 1)}${add_attribute("this", inner, 0)}>` : `<input${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(inputClasses)
      },
      { id: escape_attribute_value(idFor) },
      { type: "checkbox" },
      { disabled: disabled || null },
      { name: escape_attribute_value(name) },
      { value: escape_attribute_value(value) }
    ],
    {}
  )}${add_attribute("checked", checked, 1)}${add_attribute("this", inner, 0)}>`}`} ${label ? `<label class="form-check-label"${add_attribute("for", idFor, 0)}>${slots.label ? slots.label({}) : `${escape(label)}`}</label>` : ``}</div>`;
});
const FormFeedback = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "valid", "tooltip"]);
  let { class: className = "" } = $$props;
  let { valid = void 0 } = $$props;
  let { tooltip = false } = $$props;
  let classes;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.valid === void 0 && $$bindings.valid && valid !== void 0)
    $$bindings.valid(valid);
  if ($$props.tooltip === void 0 && $$bindings.tooltip && tooltip !== void 0)
    $$bindings.tooltip(tooltip);
  {
    {
      const validMode = tooltip ? "tooltip" : "feedback";
      classes = classnames(className, valid ? `valid-${validMode}` : `invalid-${validMode}`);
    }
  }
  return `<div${spread([escape_object($$restProps), { class: escape_attribute_value(classes) }], {})}>${slots.default ? slots.default({}) : ``}</div>`;
});
const FormGroup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classes;
  let $$restProps = compute_rest_props($$props, ["class", "check", "disabled", "floating", "inline", "label", "row", "spacing", "tag"]);
  let $$slots = compute_slots(slots);
  let { class: className = "" } = $$props;
  let { check = false } = $$props;
  let { disabled = false } = $$props;
  let { floating = false } = $$props;
  let { inline = false } = $$props;
  let { label = "" } = $$props;
  let { row = false } = $$props;
  let { spacing = "mb-3" } = $$props;
  let { tag = null } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.check === void 0 && $$bindings.check && check !== void 0)
    $$bindings.check(check);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.floating === void 0 && $$bindings.floating && floating !== void 0)
    $$bindings.floating(floating);
  if ($$props.inline === void 0 && $$bindings.inline && inline !== void 0)
    $$bindings.inline(inline);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.row === void 0 && $$bindings.row && row !== void 0)
    $$bindings.row(row);
  if ($$props.spacing === void 0 && $$bindings.spacing && spacing !== void 0)
    $$bindings.spacing(spacing);
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  classes = classnames(className, spacing, {
    row,
    "form-check": check,
    "form-check-inline": check && inline,
    "form-floating": floating,
    disabled: check && disabled
  });
  return `${tag === "fieldset" ? `<fieldset${spread([escape_object($$restProps), { class: escape_attribute_value(classes) }], {})}>${slots.default ? slots.default({}) : ``} ${label || $$slots.label ? ` <label>${escape(label)} ${slots.label ? slots.label({}) : ``}</label>` : ``}</fieldset>` : `<div${spread([escape_object($$restProps), { class: escape_attribute_value(classes) }], {})}>${slots.default ? slots.default({}) : ``} ${label || $$slots.label ? ` <label>${escape(label)} ${slots.label ? slots.label({}) : ``}</label>` : ``}</div>`}`;
});
const Input = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "class",
    "bsSize",
    "checked",
    "color",
    "disabled",
    "feedback",
    "files",
    "group",
    "inner",
    "invalid",
    "label",
    "max",
    "min",
    "multiple",
    "name",
    "placeholder",
    "plaintext",
    "readonly",
    "reverse",
    "size",
    "theme",
    "type",
    "valid",
    "value"
  ]);
  let { class: className = "" } = $$props;
  let { bsSize = void 0 } = $$props;
  let { checked = false } = $$props;
  let { color = void 0 } = $$props;
  let { disabled = void 0 } = $$props;
  let { feedback = void 0 } = $$props;
  let { files = void 0 } = $$props;
  let { group = void 0 } = $$props;
  let { inner = void 0 } = $$props;
  let { invalid = false } = $$props;
  let { label = void 0 } = $$props;
  let { max = void 0 } = $$props;
  let { min = void 0 } = $$props;
  let { multiple = void 0 } = $$props;
  let { name = "" } = $$props;
  let { placeholder = "" } = $$props;
  let { plaintext = false } = $$props;
  let { readonly = void 0 } = $$props;
  let { reverse = false } = $$props;
  let { size = void 0 } = $$props;
  let { theme = void 0 } = $$props;
  let { type = "text" } = $$props;
  let { valid = false } = $$props;
  let { value = void 0 } = $$props;
  let classes;
  let tag;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.bsSize === void 0 && $$bindings.bsSize && bsSize !== void 0)
    $$bindings.bsSize(bsSize);
  if ($$props.checked === void 0 && $$bindings.checked && checked !== void 0)
    $$bindings.checked(checked);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.feedback === void 0 && $$bindings.feedback && feedback !== void 0)
    $$bindings.feedback(feedback);
  if ($$props.files === void 0 && $$bindings.files && files !== void 0)
    $$bindings.files(files);
  if ($$props.group === void 0 && $$bindings.group && group !== void 0)
    $$bindings.group(group);
  if ($$props.inner === void 0 && $$bindings.inner && inner !== void 0)
    $$bindings.inner(inner);
  if ($$props.invalid === void 0 && $$bindings.invalid && invalid !== void 0)
    $$bindings.invalid(invalid);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.max === void 0 && $$bindings.max && max !== void 0)
    $$bindings.max(max);
  if ($$props.min === void 0 && $$bindings.min && min !== void 0)
    $$bindings.min(min);
  if ($$props.multiple === void 0 && $$bindings.multiple && multiple !== void 0)
    $$bindings.multiple(multiple);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.plaintext === void 0 && $$bindings.plaintext && plaintext !== void 0)
    $$bindings.plaintext(plaintext);
  if ($$props.readonly === void 0 && $$bindings.readonly && readonly !== void 0)
    $$bindings.readonly(readonly);
  if ($$props.reverse === void 0 && $$bindings.reverse && reverse !== void 0)
    $$bindings.reverse(reverse);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.theme === void 0 && $$bindings.theme && theme !== void 0)
    $$bindings.theme(theme);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.valid === void 0 && $$bindings.valid && valid !== void 0)
    $$bindings.valid(valid);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      {
        const isNotaNumber = new RegExp("\\D", "g");
        let isBtn = false;
        let formControlClass = "form-control";
        tag = "input";
        switch (type) {
          case "color":
            formControlClass = `form-control form-control-color`;
            break;
          case "range":
            formControlClass = "form-range";
            break;
          case "select":
            formControlClass = `form-select`;
            tag = "select";
            break;
          case "textarea":
            tag = "textarea";
            break;
          case "button":
          case "reset":
          case "submit":
            formControlClass = `btn btn-${color || "secondary"}`;
            isBtn = true;
            break;
          case "hidden":
          case "image":
            formControlClass = void 0;
            break;
          default:
            formControlClass = "form-control";
            tag = "input";
        }
        if (plaintext) {
          formControlClass = `${formControlClass}-plaintext`;
          tag = "input";
        }
        if (size && isNotaNumber.test(size)) {
          console.warn(`Please use the prop "bsSize" instead of the "size" to bootstrap's input sizing.`);
          bsSize = size;
          size = void 0;
        }
        classes = classnames(className, formControlClass, {
          "is-invalid": invalid,
          "is-valid": valid,
          [`form-control-${bsSize}`]: bsSize && !isBtn && tag !== "select",
          [`form-select-${bsSize}`]: bsSize && tag === "select",
          [`btn-${bsSize}`]: bsSize && isBtn
        });
      }
    }
    $$rendered = `${tag === "input" ? `${type === "text" || type === "password" || type === "search" || type === "tel" || type === "url" ? `<input${spread(
      [
        escape_object($$restProps),
        escape_object({ type }),
        {
          "data-bs-theme": escape_attribute_value(theme)
        },
        { class: escape_attribute_value(classes) },
        { disabled: disabled || null },
        { name: escape_attribute_value(name) },
        {
          placeholder: escape_attribute_value(placeholder)
        },
        { readonly: readonly || null },
        { size: escape_attribute_value(size) }
      ],
      {}
    )}${add_attribute("value", value, 0)}${add_attribute("this", inner, 0)}>` : `${type === "color" ? `<input${spread(
      [
        escape_object($$restProps),
        {
          "data-bs-theme": escape_attribute_value(theme)
        },
        { class: escape_attribute_value(classes) },
        { type: "color" },
        { disabled: disabled || null },
        { name: escape_attribute_value(name) },
        {
          placeholder: escape_attribute_value(placeholder)
        },
        { readonly: readonly || null }
      ],
      {}
    )}${add_attribute("value", value, 0)}${add_attribute("this", inner, 0)}>` : `${type === "email" ? `<input${spread(
      [
        escape_object($$restProps),
        {
          "data-bs-theme": escape_attribute_value(theme)
        },
        { class: escape_attribute_value(classes) },
        { type: "email" },
        { disabled: disabled || null },
        { multiple: multiple || null },
        { name: escape_attribute_value(name) },
        {
          placeholder: escape_attribute_value(placeholder)
        },
        { readonly: readonly || null },
        { size: escape_attribute_value(size) }
      ],
      {}
    )}${add_attribute("value", value, 0)}${add_attribute("this", inner, 0)}>` : `${type === "file" ? `<input${spread(
      [
        escape_object($$restProps),
        {
          "data-bs-theme": escape_attribute_value(theme)
        },
        { class: escape_attribute_value(classes) },
        { type: "file" },
        { disabled: disabled || null },
        { invalid: escape_attribute_value(invalid) },
        { multiple: multiple || null },
        { name: escape_attribute_value(name) },
        {
          placeholder: escape_attribute_value(placeholder)
        },
        { readonly: readonly || null },
        { valid: escape_attribute_value(valid) }
      ],
      {}
    )}>` : `${type === "checkbox" || type === "radio" || type === "switch" ? `${validate_component(FormCheck, "FormCheck").$$render(
      $$result,
      Object.assign({}, $$restProps, { "data-bs-theme": theme }, { class: className }, { size: bsSize }, { type }, { disabled }, { invalid }, { label }, { name }, { placeholder }, { reverse }, { readonly }, { valid }, { checked }, { inner }, { group }, { value }),
      {
        checked: ($$value) => {
          checked = $$value;
          $$settled = false;
        },
        inner: ($$value) => {
          inner = $$value;
          $$settled = false;
        },
        group: ($$value) => {
          group = $$value;
          $$settled = false;
        },
        value: ($$value) => {
          value = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${type === "date" || type === "datetime" || type === "datetime-local" || type === "month" || type === "number" || type === "time" || type === "range" || type === "week" ? `<input${spread(
      [
        escape_object($$restProps),
        escape_object({ type }),
        {
          "data-bs-theme": escape_attribute_value(theme)
        },
        { class: escape_attribute_value(classes) },
        { disabled: disabled || null },
        { max: escape_attribute_value(max) },
        { min: escape_attribute_value(min) },
        { name: escape_attribute_value(name) },
        {
          placeholder: escape_attribute_value(placeholder)
        },
        { readonly: readonly || null }
      ],
      {}
    )}${add_attribute("value", value, 0)}${add_attribute("this", inner, 0)}>` : `<input${spread(
      [
        escape_object($$restProps),
        {
          "data-bs-theme": escape_attribute_value(theme)
        },
        { class: escape_attribute_value(classes) },
        { type: escape_attribute_value(type) },
        { name: escape_attribute_value(name) },
        { disabled: disabled || null },
        {
          placeholder: escape_attribute_value(placeholder)
        },
        { readonly: readonly || null },
        { value: escape_attribute_value(value) }
      ],
      {}
    )}>`}`}`}`}`}`}` : `${tag === "textarea" ? `<textarea${spread(
      [
        escape_object($$restProps),
        {
          "data-bs-theme": escape_attribute_value(theme)
        },
        { class: escape_attribute_value(classes) },
        { disabled: disabled || null },
        { name: escape_attribute_value(name) },
        {
          placeholder: escape_attribute_value(placeholder)
        },
        { readonly: readonly || null }
      ],
      {}
    )}${add_attribute("this", inner, 0)}>${escape(value || "")}</textarea>` : `${tag === "select" && !multiple ? `<select${spread(
      [
        escape_object($$restProps),
        {
          "data-bs-theme": escape_attribute_value(theme)
        },
        { class: escape_attribute_value(classes) },
        { name: escape_attribute_value(name) },
        { disabled: disabled || null },
        { readonly: readonly || null }
      ],
      {}
    )}${add_attribute("this", inner, 0)}>${slots.default ? slots.default({}) : ``}</select>` : ``}`}`} ${feedback ? `${Array.isArray(feedback) ? `${each(feedback, (msg) => {
      return `${validate_component(FormFeedback, "FormFeedback").$$render($$result, { valid }, {}, {
        default: () => {
          return `${escape(msg)}`;
        }
      })}`;
    })}` : `${validate_component(FormFeedback, "FormFeedback").$$render($$result, { valid }, {}, {
      default: () => {
        return `${escape(feedback)}`;
      }
    })}`}` : ``}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  FormGroup as F,
  Input as I
};
