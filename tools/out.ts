
export function YGNodeStyleSetDirection(node: YGNode, direction: YGDirection): void {
    if(node.getStyle().direction != direction) {
        const style: YGStyle = node.getStyle();
        style.direction = direction;
        node.setStyle(style);
        node.markDirtyAndPropogate();
    }
}

export function YGNodeStyleGetDirection(node: YGNode): YGDirection {
    return node.getStyle().direction;
}

export function YGNodeStyleSetFlexDirection(node: YGNode, flexDirection: YGFlexDirection): void {
    if(node.getStyle().flexDirection != flexDirection) {
        const style: YGStyle = node.getStyle();
        style.flexDirection = flexDirection;
        node.setStyle(style);
        node.markDirtyAndPropogate();
    }
}

export function YGNodeStyleGetFlexDirection(node: YGNode): YGFlexDirection {
    return node.getStyle().flexDirection;
}

export function YGNodeStyleSetJustifyContent(node: YGNode, justifyContent: YGJustify): void {
    if(node.getStyle().justifyContent != justifyContent) {
        const style: YGStyle = node.getStyle();
        style.justifyContent = justifyContent;
        node.setStyle(style);
        node.markDirtyAndPropogate();
    }
}

export function YGNodeStyleGetJustifyContent(node: YGNode): YGJustify {
    return node.getStyle().justifyContent;
}

export function YGNodeStyleSetAlignContent(node: YGNode, alignContent: YGAlign): void {
    if(node.getStyle().alignContent != alignContent) {
        const style: YGStyle = node.getStyle();
        style.alignContent = alignContent;
        node.setStyle(style);
        node.markDirtyAndPropogate();
    }
}

export function YGNodeStyleGetAlignContent(node: YGNode): YGAlign {
    return node.getStyle().alignContent;
}

export function YGNodeStyleSetAlignItems(node: YGNode, alignItems: YGAlign): void {
    if(node.getStyle().alignItems != alignItems) {
        const style: YGStyle = node.getStyle();
        style.alignItems = alignItems;
        node.setStyle(style);
        node.markDirtyAndPropogate();
    }
}

export function YGNodeStyleGetAlignItems(node: YGNode): YGAlign {
    return node.getStyle().alignItems;
}

export function YGNodeStyleSetAlignSelf(node: YGNode, alignSelf: YGAlign): void {
    if(node.getStyle().alignSelf != alignSelf) {
        const style: YGStyle = node.getStyle();
        style.alignSelf = alignSelf;
        node.setStyle(style);
        node.markDirtyAndPropogate();
    }
}

export function YGNodeStyleGetAlignSelf(node: YGNode): YGAlign {
    return node.getStyle().alignSelf;
}

export function YGNodeStyleSetPositionType(node: YGNode, positionType: YGPositionType): void {
    if(node.getStyle().positionType != positionType) {
        const style: YGStyle = node.getStyle();
        style.positionType = positionType;
        node.setStyle(style);
        node.markDirtyAndPropogate();
    }
}

export function YGNodeStyleGetPositionType(node: YGNode): YGPositionType {
    return node.getStyle().positionType;
}

export function YGNodeStyleSetFlexWrap(node: YGNode, flexWrap: YGWrap): void {
    if(node.getStyle().flexWrap != flexWrap) {
        const style: YGStyle = node.getStyle();
        style.flexWrap = flexWrap;
        node.setStyle(style);
        node.markDirtyAndPropogate();
    }
}

export function YGNodeStyleGetFlexWrap(node: YGNode): YGWrap {
    return node.getStyle().flexWrap;
}

export function YGNodeStyleSetOverflow(node: YGNode, overflow: YGOverflow): void {
    if(node.getStyle().overflow != overflow) {
        const style: YGStyle = node.getStyle();
        style.overflow = overflow;
        node.setStyle(style);
        node.markDirtyAndPropogate();
    }
}

export function YGNodeStyleGetOverflow(node: YGNode): YGOverflow {
    return node.getStyle().overflow;
}

export function YGNodeStyleSetDisplay(node: YGNode, display: YGDisplay): void {
    if(node.getStyle().display != display) {
        const style: YGStyle = node.getStyle();
        style.display = display;
        node.setStyle(style);
        node.markDirtyAndPropogate();
    }
}

export function YGNodeStyleGetDisplay(node: YGNode): YGDisplay {
    return node.getStyle().display;
}

export function YGNodeStyleSetPosition(node: YGNode, edge: YGEdge, position: number): void {
    const value: YGValue = new YGValue(
        YGFloatSanitize(position),
        YGFloatIsUndefined(position) ? YGUnit.Undefined : YGUnit.Point,
    );

    if ((node.getStyle().position[edge].value != value.value &&
        value.unit != YGUnit.Undefined) ||
        node.getStyle().position[edge].unit != value.unit) {
        const style: YGStyle = node.getStyle();
        style.position[edge] = value;
        node.setStyle(style);
        node.markDirtyAndPropogate();
    }
}


export function YGNodeStyleSetPositionPercent(node: YGNode, edge: YGEdge, position: number): void {
    const value: YGValue = new YGValue(
        YGFloatSanitize(position),
        YGFloatIsUndefined(position) ? YGUnit.Undefined : YGUnit.Percent,
    );

    if ((node.getStyle().position[edge].value != value.value &&
         value.unit != YGUnit.Undefined) ||
        node.getStyle().position[edge].unit != value.unit) {
        const style: YGStyle = node.getStyle();
        style.position[edge] = value;
        node.setStyle(style);
        node.markDirtyAndPropogate();
    }
}

export function YGNodeStyleGetPosition(node: YGNode, edge: YGEdge): YGValue {
    const value: YGValue = node.getStyle().position[edge];
    if (value.unit == YGUnit.Undefined || value.unit == YGUnit.Auto) {
        value.value = YGUndefined;
    }

    return value;
}

export function YGNodeStyleSetMargin(node: YGNode, edge: YGEdge, margin: number): void {
    const value: YGValue = new YGValue(
        YGFloatSanitize(margin),
        YGFloatIsUndefined(margin) ? YGUnit.Undefined : YGUnit.Point,
    );

    if ((node.getStyle().margin[edge].value != value.value &&
        value.unit != YGUnit.Undefined) ||
        node.getStyle().margin[edge].unit != value.unit) {
        const style: YGStyle = node.getStyle();
        style.margin[edge] = value;
        node.setStyle(style);
        node.markDirtyAndPropogate();
    }
}


export function YGNodeStyleSetMarginPercent(node: YGNode, edge: YGEdge, margin: number): void {
    const value: YGValue = new YGValue(
        YGFloatSanitize(margin),
        YGFloatIsUndefined(margin) ? YGUnit.Undefined : YGUnit.Percent,
    );

    if ((node.getStyle().margin[edge].value != value.value &&
         value.unit != YGUnit.Undefined) ||
        node.getStyle().margin[edge].unit != value.unit) {
        const style: YGStyle = node.getStyle();
        style.margin[edge] = value;
        node.setStyle(style);
        node.markDirtyAndPropogate();
    }
}

export function YGNodeStyleGetMargin(node: YGNode, edge: YGEdge): YGValue {
    const value: YGValue = node.getStyle().margin[edge];
    if (value.unit == YGUnit.Undefined || value.unit == YGUnit.Auto) {
        value.value = YGUndefined;
    }

    return value;
}

export function YGNodeStyleSetPadding(node: YGNode, edge: YGEdge, padding: number): void {
    const value: YGValue = new YGValue(
        YGFloatSanitize(padding),
        YGFloatIsUndefined(padding) ? YGUnit.Undefined : YGUnit.Point,
    );

    if ((node.getStyle().padding[edge].value != value.value &&
        value.unit != YGUnit.Undefined) ||
        node.getStyle().padding[edge].unit != value.unit) {
        const style: YGStyle = node.getStyle();
        style.padding[edge] = value;
        node.setStyle(style);
        node.markDirtyAndPropogate();
    }
}


export function YGNodeStyleSetPaddingPercent(node: YGNode, edge: YGEdge, padding: number): void {
    const value: YGValue = new YGValue(
        YGFloatSanitize(padding),
        YGFloatIsUndefined(padding) ? YGUnit.Undefined : YGUnit.Percent,
    );

    if ((node.getStyle().padding[edge].value != value.value &&
         value.unit != YGUnit.Undefined) ||
        node.getStyle().padding[edge].unit != value.unit) {
        const style: YGStyle = node.getStyle();
        style.padding[edge] = value;
        node.setStyle(style);
        node.markDirtyAndPropogate();
    }
}

export function YGNodeStyleGetPadding(node: YGNode, edge: YGEdge): YGValue {
    const value: YGValue = node.getStyle().padding[edge];
    if (value.unit == YGUnit.Undefined || value.unit == YGUnit.Auto) {
        value.value = YGUndefined;
    }

    return value;
}

export function YGNodeStyleSetMarginAuto(node: YGNode, edge: YGEdge): void {
    if (node.getStyle().margin[edge].unit != YGUnit.Auto) {
        const style: YGStyle = node.getStyle();
        style.margin[edge].value = 0;
        style.margin[edge].unit = YGUnit.Auto;
        node.setStyle(style);
        node.markDirtyAndPropogate();
    }
}
export function YGNodeStyleSetWidth(node: YGNode, width: number): void {
    const value: YGValue = new YGValue(
        YGFloatSanitize(width),
        YGFloatIsUndefined(width) ? YGUnit.Undefined : YGUnit.Point,
    );

    if ((node.getStyle().dimensions[YGDimension.Width].value != value.value && value.unit != YGUnit.Undefined) ||
        node.getStyle().dimensions[YGDimension.Width].unit != value.unit) {
        const style: YGStyle = node.getStyle();
        style.dimensions[YGDimension.Width] = value;
        node.setStyle(style);
        node.markDirtyAndPropogate();
    }
}

export function YGNodeStyleSetWidthPercent(node: YGNode, width: number): void {
    if (node.getStyle().dimensions[YGDimension.Width].value != YGFloatSanitize(width) ||
        node.getStyle().dimensions[YGDimension.Width].unit != YGUnit.Percent) {
        const style: YGStyle = node.getStyle();
        style.dimensions[YGDimension.Width].value = YGFloatSanitize(width);
        style.dimensions[YGDimension.Width].unit = YGFloatIsUndefined(width) ? YGUnit.Auto : YGUnit.Percent;
        node.setStyle(style);
        node.markDirtyAndPropogate();
    }
}

export function YGNodeStyleSetWidthAuto(node: YGNode): void {
    if (node.getStyle().dimensions[YGDimension.Width].unit != YGUnit.Auto) {
        const style: YGStyle = node.getStyle();
        style.dimensions[YGDimension.Width].value = 0;
        style.dimensions[YGDimension.Width].unit = YGUnit.Auto;
        node.setStyle(style);
        node.markDirtyAndPropogate();
    }
}

export function YGNodeStyleGetWidth(node: YGNode): YGValue {
    const value: YGValue = node.getStyle().dimensions[YGDimension.Width];
    if (value.unit == YGUnit.Undefined || value.unit == YGUnit.Auto) {
        value.value = YGUndefined;
    }
    return value;
}
export function YGNodeStyleSetHeight(node: YGNode, height: number): void {
    const value: YGValue = new YGValue(
        YGFloatSanitize(height),
        YGFloatIsUndefined(height) ? YGUnit.Undefined : YGUnit.Point,
    );

    if ((node.getStyle().dimensions[YGDimension.Height].value != value.value && value.unit != YGUnit.Undefined) ||
        node.getStyle().dimensions[YGDimension.Height].unit != value.unit) {
        const style: YGStyle = node.getStyle();
        style.dimensions[YGDimension.Height] = value;
        node.setStyle(style);
        node.markDirtyAndPropogate();
    }
}

export function YGNodeStyleSetHeightPercent(node: YGNode, height: number): void {
    if (node.getStyle().dimensions[YGDimension.Height].value != YGFloatSanitize(height) ||
        node.getStyle().dimensions[YGDimension.Height].unit != YGUnit.Percent) {
        const style: YGStyle = node.getStyle();
        style.dimensions[YGDimension.Height].value = YGFloatSanitize(height);
        style.dimensions[YGDimension.Height].unit = YGFloatIsUndefined(height) ? YGUnit.Auto : YGUnit.Percent;
        node.setStyle(style);
        node.markDirtyAndPropogate();
    }
}

export function YGNodeStyleSetHeightAuto(node: YGNode): void {
    if (node.getStyle().dimensions[YGDimension.Height].unit != YGUnit.Auto) {
        const style: YGStyle = node.getStyle();
        style.dimensions[YGDimension.Height].value = 0;
        style.dimensions[YGDimension.Height].unit = YGUnit.Auto;
        node.setStyle(style);
        node.markDirtyAndPropogate();
    }
}

export function YGNodeStyleGetHeight(node: YGNode): YGValue {
    const value: YGValue = node.getStyle().dimensions[YGDimension.Height];
    if (value.unit == YGUnit.Undefined || value.unit == YGUnit.Auto) {
        value.value = YGUndefined;
    }
    return value;
}
export function YGNodeStyleSetMinWidth(node: YGNode, minWidth: number): void {
    const value: YGValue = new YGValue(
        YGFloatSanitize(minWidth),
        YGFloatIsUndefined(minWidth) ? YGUnit.Undefined : YGUnit.Point
    );

    if ((node.getStyle().minDimensions[YGDimension.Width].value != value.value && value.unit != YGUnit.Undefined) ||
        node.getStyle().minDimensions[YGDimension.Width].unit != value.unit) {
        const style: YGStyle = node.getStyle();
        style.minDimensions[YGDimension.Width] = value;
        node.setStyle(style);
        node.markDirtyAndPropogate();
    }
}

export function YGNodeStyleSetMinWidthPercent(node: YGNode, minWidth: number): void {
    const value: YGValue = new YGValue(
        YGFloatSanitize(minWidth),
        YGFloatIsUndefined(minWidth) ? YGUnit.Undefined : YGUnit.Percent,
    );

    if ((node.getStyle().minDimensions[YGDimension.Width].value != value.value && value.unit != YGUnit.Undefined) ||
        node.getStyle().minDimensions[YGDimension.Width].unit != value.unit) {
        const style: YGStyle = node.getStyle();
        style.minDimensions[YGDimension.Width] = value;                  
        node.setStyle(style);                       
        node.markDirtyAndPropogate();               
    }
}

export function YGNodeStyleGetMinWidth(node: YGNode): YGValue {
    const value: YGValue = node.getStyle().minDimensions[YGDimension.Width];
    if (value.unit == YGUnit.Undefined || value.unit == YGUnit.Auto) {
        value.value = YGUndefined;
    }
    return value;
}
export function YGNodeStyleSetMinHeight(node: YGNode, minHeight: number): void {
    const value: YGValue = new YGValue(
        YGFloatSanitize(minHeight),
        YGFloatIsUndefined(minHeight) ? YGUnit.Undefined : YGUnit.Point
    );

    if ((node.getStyle().minDimensions[YGDimension.Height].value != value.value && value.unit != YGUnit.Undefined) ||
        node.getStyle().minDimensions[YGDimension.Height].unit != value.unit) {
        const style: YGStyle = node.getStyle();
        style.minDimensions[YGDimension.Height] = value;
        node.setStyle(style);
        node.markDirtyAndPropogate();
    }
}

export function YGNodeStyleSetMinHeightPercent(node: YGNode, minHeight: number): void {
    const value: YGValue = new YGValue(
        YGFloatSanitize(minHeight),
        YGFloatIsUndefined(minHeight) ? YGUnit.Undefined : YGUnit.Percent,
    );

    if ((node.getStyle().minDimensions[YGDimension.Height].value != value.value && value.unit != YGUnit.Undefined) ||
        node.getStyle().minDimensions[YGDimension.Height].unit != value.unit) {
        const style: YGStyle = node.getStyle();
        style.minDimensions[YGDimension.Height] = value;                  
        node.setStyle(style);                       
        node.markDirtyAndPropogate();               
    }
}

export function YGNodeStyleGetMinHeight(node: YGNode): YGValue {
    const value: YGValue = node.getStyle().minDimensions[YGDimension.Height];
    if (value.unit == YGUnit.Undefined || value.unit == YGUnit.Auto) {
        value.value = YGUndefined;
    }
    return value;
}
export function YGNodeStyleSetMaxWidth(node: YGNode, maxWidth: number): void {
    const value: YGValue = new YGValue(
        YGFloatSanitize(maxWidth),
        YGFloatIsUndefined(maxWidth) ? YGUnit.Undefined : YGUnit.Point
    );

    if ((node.getStyle().maxDimensions[YGDimension.Width].value != value.value && value.unit != YGUnit.Undefined) ||
        node.getStyle().maxDimensions[YGDimension.Width].unit != value.unit) {
        const style: YGStyle = node.getStyle();
        style.maxDimensions[YGDimension.Width] = value;
        node.setStyle(style);
        node.markDirtyAndPropogate();
    }
}

export function YGNodeStyleSetMaxWidthPercent(node: YGNode, maxWidth: number): void {
    const value: YGValue = new YGValue(
        YGFloatSanitize(maxWidth),
        YGFloatIsUndefined(maxWidth) ? YGUnit.Undefined : YGUnit.Percent,
    );

    if ((node.getStyle().maxDimensions[YGDimension.Width].value != value.value && value.unit != YGUnit.Undefined) ||
        node.getStyle().maxDimensions[YGDimension.Width].unit != value.unit) {
        const style: YGStyle = node.getStyle();
        style.maxDimensions[YGDimension.Width] = value;                  
        node.setStyle(style);                       
        node.markDirtyAndPropogate();               
    }
}

export function YGNodeStyleGetMaxWidth(node: YGNode): YGValue {
    const value: YGValue = node.getStyle().maxDimensions[YGDimension.Width];
    if (value.unit == YGUnit.Undefined || value.unit == YGUnit.Auto) {
        value.value = YGUndefined;
    }
    return value;
}
export function YGNodeStyleSetMaxHeight(node: YGNode, maxHeight: number): void {
    const value: YGValue = new YGValue(
        YGFloatSanitize(maxHeight),
        YGFloatIsUndefined(maxHeight) ? YGUnit.Undefined : YGUnit.Point
    );

    if ((node.getStyle().maxDimensions[YGDimension.Height].value != value.value && value.unit != YGUnit.Undefined) ||
        node.getStyle().maxDimensions[YGDimension.Height].unit != value.unit) {
        const style: YGStyle = node.getStyle();
        style.maxDimensions[YGDimension.Height] = value;
        node.setStyle(style);
        node.markDirtyAndPropogate();
    }
}

export function YGNodeStyleSetMaxHeightPercent(node: YGNode, maxHeight: number): void {
    const value: YGValue = new YGValue(
        YGFloatSanitize(maxHeight),
        YGFloatIsUndefined(maxHeight) ? YGUnit.Undefined : YGUnit.Percent,
    );

    if ((node.getStyle().maxDimensions[YGDimension.Height].value != value.value && value.unit != YGUnit.Undefined) ||
        node.getStyle().maxDimensions[YGDimension.Height].unit != value.unit) {
        const style: YGStyle = node.getStyle();
        style.maxDimensions[YGDimension.Height] = value;                  
        node.setStyle(style);                       
        node.markDirtyAndPropogate();               
    }
}

export function YGNodeStyleGetMaxHeight(node: YGNode): YGValue {
    const value: YGValue = node.getStyle().maxDimensions[YGDimension.Height];
    if (value.unit == YGUnit.Undefined || value.unit == YGUnit.Auto) {
        value.value = YGUndefined;
    }
    return value;
}
export function YGNodeLayoutGetLeft(node: YGNode): number {
    return node.getLayout().position[YGEdge.Left];
}
export function YGNodeLayoutGetTop(node: YGNode): number {
    return node.getLayout().position[YGEdge.Top];
}
export function YGNodeLayoutGetRight(node: YGNode): number {
    return node.getLayout().position[YGEdge.Right];
}
export function YGNodeLayoutGetBottom(node: YGNode): number {
    return node.getLayout().position[YGEdge.Bottom];
}
export function YGNodeLayoutGetWidth(node: YGNode): number {
    return node.getLayout().dimensions[YGDimension.Width];
}
export function YGNodeLayoutGetHeight(node: YGNode): number {
    return node.getLayout().dimensions[YGDimension.Height];
}
export function YGNodeLayoutGetDirection(node: YGNode): YGDirection {
    return node.getLayout().direction;
}
export function YGNodeLayoutGetHadOverflow(node: YGNode): boolean {
    return node.getLayout().hadOverflow;
}
export function YGNodeLayoutGetMargin(node: YGNode, edge: YGEdge): number {
    // YGAssertWithNode(node, edge <= YGEdge.End, "Cannot get layout properties of multi-edge shorthands");

    if (edge == YGEdge.Left) {
        if (node.getLayout().direction == YGDirection.RTL) {
            return node.getLayout().margin[YGEdge.End];
        } else {
            return node.getLayout().margin[YGEdge.Start];
        }
    }

    if (edge == YGEdge.Right) {
        if (node.getLayout().direction == YGDirection.RTL) {
            return node.getLayout().margin[YGEdge.Start];
        } else {
            return node.getLayout().margin[YGEdge.End];
        }
    }

    return node.getLayout().margin[edge];
}
export function YGNodeLayoutGetBorder(node: YGNode, edge: YGEdge): number {
    // YGAssertWithNode(node, edge <= YGEdge.End, "Cannot get layout properties of multi-edge shorthands");

    if (edge == YGEdge.Left) {
        if (node.getLayout().direction == YGDirection.RTL) {
            return node.getLayout().border[YGEdge.End];
        } else {
            return node.getLayout().border[YGEdge.Start];
        }
    }

    if (edge == YGEdge.Right) {
        if (node.getLayout().direction == YGDirection.RTL) {
            return node.getLayout().border[YGEdge.Start];
        } else {
            return node.getLayout().border[YGEdge.End];
        }
    }

    return node.getLayout().border[edge];
}
export function YGNodeLayoutGetPadding(node: YGNode, edge: YGEdge): number {
    // YGAssertWithNode(node, edge <= YGEdge.End, "Cannot get layout properties of multi-edge shorthands");

    if (edge == YGEdge.Left) {
        if (node.getLayout().direction == YGDirection.RTL) {
            return node.getLayout().padding[YGEdge.End];
        } else {
            return node.getLayout().padding[YGEdge.Start];
        }
    }

    if (edge == YGEdge.Right) {
        if (node.getLayout().direction == YGDirection.RTL) {
            return node.getLayout().padding[YGEdge.Start];
        } else {
            return node.getLayout().padding[YGEdge.End];
        }
    }

    return node.getLayout().padding[edge];
}
