"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// PurchaseAmountComponent.tsx
const react_1 = __importDefault(require("react"));
const userContext_1 = __importDefault(require("./userContext"));
const PurchaseAmountComponent = () => {
    const role = react_1.default.useContext(userContext_1.default);
    if (role !== 'admin') {
        return null;
    }
    //...
    function setPurchaseAmount(value) {
        throw new Error('Function not implemented.');
    }
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("h2", null, "Purchase Amount"),
        react_1.default.createElement("input", { type: "number", value: purchaseAmount, onChange: (e) => setPurchaseAmount(e.target.value) })));
};
exports.default = PurchaseAmountComponent;
