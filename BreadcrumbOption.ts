export class BreadcrumbOption extends BaseOptionComponent {
    static id = "breadcrumb_option";
    static template = "website.BreadcrumbOption";
    static components = { BaseVisibilityOption };
}

registry.category("website-options").add(BreadcrumbOption.id, BreadcrumbOption);
