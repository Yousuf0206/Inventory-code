"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PRIVILEGES_MOCKS = exports.Features = exports.Permissions = void 0;
// privileges.ts
var Permissions;
(function (Permissions) {
    Permissions[Permissions["READ"] = 0] = "READ";
    Permissions[Permissions["WRITE"] = 1] = "WRITE";
    Permissions[Permissions["PUBLISH"] = 2] = "PUBLISH";
})(Permissions || (exports.Permissions = Permissions = {}));
var Features;
(function (Features) {
    Features[Features["FEATURE_A"] = 0] = "FEATURE_A";
    Features[Features["FEATURE_B"] = 1] = "FEATURE_B";
})(Features || (exports.Features = Features = {}));
exports.PRIVILEGES_MOCKS = {
    [Permissions.READ]: {
        [Features.FEATURE_A]: [Permissions.READ],
    },
    [Permissions.WRITE]: {
        [Features.FEATURE_A]: [Permissions.READ, Permissions.WRITE],
    },
    [Permissions.PUBLISH]: {
        [Features.FEATURE_A]: [Permissions.READ, Permissions.WRITE, Permissions.PUBLISH],
    },
};
