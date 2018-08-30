webpackJsonp([1],{

/***/ 442:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuListAddPageModule", function() { return MenuListAddPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_list_add__ = __webpack_require__(526);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MenuListAddPageModule = /** @class */ (function () {
    function MenuListAddPageModule() {
    }
    MenuListAddPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__menu_list_add__["a" /* MenuListAddPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__menu_list_add__["a" /* MenuListAddPage */]),
            ],
        })
    ], MenuListAddPageModule);
    return MenuListAddPageModule;
}());

//# sourceMappingURL=menu-list-add.module.js.map

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isDef;
/* harmony export (immutable) */ __webpack_exports__["c"] = isJustDef;
/* harmony export (immutable) */ __webpack_exports__["b"] = isFunction;
/* harmony export (immutable) */ __webpack_exports__["i"] = isObject;
/* harmony export (immutable) */ __webpack_exports__["g"] = isNonNullObject;
/* harmony export (immutable) */ __webpack_exports__["f"] = isNonArrayObject;
/* harmony export (immutable) */ __webpack_exports__["j"] = isString;
/* harmony export (immutable) */ __webpack_exports__["h"] = isNumber;
/* harmony export (immutable) */ __webpack_exports__["d"] = isNativeBlob;
/* harmony export (immutable) */ __webpack_exports__["e"] = isNativeBlobDefined;
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @return False if the object is undefined or null, true otherwise.
 */
function isDef(p) {
    return p != null;
}
function isJustDef(p) {
    return p !== void 0;
}
function isFunction(p) {
    return typeof p === 'function';
}
function isObject(p) {
    return typeof p === 'object';
}
function isNonNullObject(p) {
    return isObject(p) && p !== null;
}
function isNonArrayObject(p) {
    return isObject(p) && !Array.isArray(p);
}
function isString(p) {
    return typeof p === 'string' || p instanceof String;
}
function isNumber(p) {
    return typeof p === 'number' || p instanceof Number;
}
function isNativeBlob(p) {
    return isNativeBlobDefined() && p instanceof Blob;
}
function isNativeBlobDefined() {
    return typeof Blob !== 'undefined';
}

//# sourceMappingURL=type.js.map


/***/ }),

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export FirebaseStorageError */
/* unused harmony export errors */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Code; });
/* unused harmony export prependCode */
/* harmony export (immutable) */ __webpack_exports__["s"] = unknown;
/* harmony export (immutable) */ __webpack_exports__["m"] = objectNotFound;
/* unused harmony export bucketNotFound */
/* unused harmony export projectNotFound */
/* harmony export (immutable) */ __webpack_exports__["n"] = quotaExceeded;
/* harmony export (immutable) */ __webpack_exports__["q"] = unauthenticated;
/* harmony export (immutable) */ __webpack_exports__["r"] = unauthorized;
/* harmony export (immutable) */ __webpack_exports__["o"] = retryLimitExceeded;
/* unused harmony export invalidChecksum */
/* harmony export (immutable) */ __webpack_exports__["c"] = canceled;
/* unused harmony export invalidEventName */
/* harmony export (immutable) */ __webpack_exports__["k"] = invalidUrl;
/* harmony export (immutable) */ __webpack_exports__["h"] = invalidDefaultBucket;
/* unused harmony export noDefaultBucket */
/* harmony export (immutable) */ __webpack_exports__["d"] = cannotSliceBlob;
/* harmony export (immutable) */ __webpack_exports__["p"] = serverFileWrongSize;
/* harmony export (immutable) */ __webpack_exports__["l"] = noDownloadURL;
/* harmony export (immutable) */ __webpack_exports__["f"] = invalidArgument;
/* harmony export (immutable) */ __webpack_exports__["g"] = invalidArgumentCount;
/* harmony export (immutable) */ __webpack_exports__["b"] = appDeleted;
/* harmony export (immutable) */ __webpack_exports__["j"] = invalidRootOperation;
/* harmony export (immutable) */ __webpack_exports__["i"] = invalidFormat;
/* harmony export (immutable) */ __webpack_exports__["e"] = internalError;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(461);
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var FirebaseStorageError = /** @class */ (function () {
    function FirebaseStorageError(code, message) {
        this.code_ = prependCode(code);
        this.message_ = 'Firebase Storage: ' + message;
        this.serverResponse_ = null;
        this.name_ = 'FirebaseError';
    }
    FirebaseStorageError.prototype.codeProp = function () {
        return this.code;
    };
    FirebaseStorageError.prototype.codeEquals = function (code) {
        return prependCode(code) === this.codeProp();
    };
    FirebaseStorageError.prototype.serverResponseProp = function () {
        return this.serverResponse_;
    };
    FirebaseStorageError.prototype.setServerResponseProp = function (serverResponse) {
        this.serverResponse_ = serverResponse;
    };
    Object.defineProperty(FirebaseStorageError.prototype, "name", {
        get: function () {
            return this.name_;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FirebaseStorageError.prototype, "code", {
        get: function () {
            return this.code_;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FirebaseStorageError.prototype, "message", {
        get: function () {
            return this.message_;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FirebaseStorageError.prototype, "serverResponse", {
        get: function () {
            return this.serverResponse_;
        },
        enumerable: true,
        configurable: true
    });
    return FirebaseStorageError;
}());

var errors = {};
var Code = {
    // Shared between all platforms
    UNKNOWN: 'unknown',
    OBJECT_NOT_FOUND: 'object-not-found',
    BUCKET_NOT_FOUND: 'bucket-not-found',
    PROJECT_NOT_FOUND: 'project-not-found',
    QUOTA_EXCEEDED: 'quota-exceeded',
    UNAUTHENTICATED: 'unauthenticated',
    UNAUTHORIZED: 'unauthorized',
    RETRY_LIMIT_EXCEEDED: 'retry-limit-exceeded',
    INVALID_CHECKSUM: 'invalid-checksum',
    CANCELED: 'canceled',
    // JS specific
    INVALID_EVENT_NAME: 'invalid-event-name',
    INVALID_URL: 'invalid-url',
    INVALID_DEFAULT_BUCKET: 'invalid-default-bucket',
    NO_DEFAULT_BUCKET: 'no-default-bucket',
    CANNOT_SLICE_BLOB: 'cannot-slice-blob',
    SERVER_FILE_WRONG_SIZE: 'server-file-wrong-size',
    NO_DOWNLOAD_URL: 'no-download-url',
    INVALID_ARGUMENT: 'invalid-argument',
    INVALID_ARGUMENT_COUNT: 'invalid-argument-count',
    APP_DELETED: 'app-deleted',
    INVALID_ROOT_OPERATION: 'invalid-root-operation',
    INVALID_FORMAT: 'invalid-format',
    INTERNAL_ERROR: 'internal-error'
};
function prependCode(code) {
    return 'storage/' + code;
}
function unknown() {
    var message = 'An unknown error occurred, please check the error payload for ' +
        'server response.';
    return new FirebaseStorageError(Code.UNKNOWN, message);
}
function objectNotFound(path) {
    return new FirebaseStorageError(Code.OBJECT_NOT_FOUND, "Object '" + path + "' does not exist.");
}
function bucketNotFound(bucket) {
    return new FirebaseStorageError(Code.BUCKET_NOT_FOUND, "Bucket '" + bucket + "' does not exist.");
}
function projectNotFound(project) {
    return new FirebaseStorageError(Code.PROJECT_NOT_FOUND, "Project '" + project + "' does not exist.");
}
function quotaExceeded(bucket) {
    return new FirebaseStorageError(Code.QUOTA_EXCEEDED, "Quota for bucket '" +
        bucket +
        "' exceeded, please view quota on " +
        'https://firebase.google.com/pricing/.');
}
function unauthenticated() {
    var message = 'User is not authenticated, please authenticate using Firebase ' +
        'Authentication and try again.';
    return new FirebaseStorageError(Code.UNAUTHENTICATED, message);
}
function unauthorized(path) {
    return new FirebaseStorageError(Code.UNAUTHORIZED, "User does not have permission to access '" + path + "'.");
}
function retryLimitExceeded() {
    return new FirebaseStorageError(Code.RETRY_LIMIT_EXCEEDED, 'Max retry time for operation exceeded, please try again.');
}
function invalidChecksum(path, checksum, calculated) {
    return new FirebaseStorageError(Code.INVALID_CHECKSUM, "Uploaded/downloaded object '" +
        path +
        "' has checksum '" +
        checksum +
        "' which does not match '" +
        calculated +
        "'. Please retry the upload/download.");
}
function canceled() {
    return new FirebaseStorageError(Code.CANCELED, 'User canceled the upload/download.');
}
function invalidEventName(name) {
    return new FirebaseStorageError(Code.INVALID_EVENT_NAME, "Invalid event name '" + name + "'.");
}
function invalidUrl(url) {
    return new FirebaseStorageError(Code.INVALID_URL, "Invalid URL '" + url + "'.");
}
function invalidDefaultBucket(bucket) {
    return new FirebaseStorageError(Code.INVALID_DEFAULT_BUCKET, "Invalid default bucket '" + bucket + "'.");
}
function noDefaultBucket() {
    return new FirebaseStorageError(Code.NO_DEFAULT_BUCKET, 'No default bucket ' +
        "found. Did you set the '" +
        __WEBPACK_IMPORTED_MODULE_0__constants__["c" /* configOption */] +
        "' property when initializing the app?");
}
function cannotSliceBlob() {
    return new FirebaseStorageError(Code.CANNOT_SLICE_BLOB, 'Cannot slice blob for upload. Please retry the upload.');
}
function serverFileWrongSize() {
    return new FirebaseStorageError(Code.SERVER_FILE_WRONG_SIZE, 'Server recorded incorrect upload file size, please retry the upload.');
}
function noDownloadURL() {
    return new FirebaseStorageError(Code.NO_DOWNLOAD_URL, 'The given file does not have any download URLs.');
}
function invalidArgument(index, fnName, message) {
    return new FirebaseStorageError(Code.INVALID_ARGUMENT, 'Invalid argument in `' + fnName + '` at index ' + index + ': ' + message);
}
function invalidArgumentCount(argMin, argMax, fnName, real) {
    var countPart;
    var plural;
    if (argMin === argMax) {
        countPart = argMin;
        plural = argMin === 1 ? 'argument' : 'arguments';
    }
    else {
        countPart = 'between ' + argMin + ' and ' + argMax;
        plural = 'arguments';
    }
    return new FirebaseStorageError(Code.INVALID_ARGUMENT_COUNT, 'Invalid argument count in `' +
        fnName +
        '`: Expected ' +
        countPart +
        ' ' +
        plural +
        ', received ' +
        real +
        '.');
}
function appDeleted() {
    return new FirebaseStorageError(Code.APP_DELETED, 'The Firebase app was deleted.');
}
/**
 * @param name The name of the operation that was invalid.
 */
function invalidRootOperation(name) {
    return new FirebaseStorageError(Code.INVALID_ROOT_OPERATION, "The operation '" +
        name +
        "' cannot be performed on a root reference, create a non-root " +
        "reference using child, such as .child('file.png').");
}
/**
 * @param format The format that was not valid.
 * @param message A message describing the format violation.
 */
function invalidFormat(format, message) {
    return new FirebaseStorageError(Code.INVALID_FORMAT, "String does not match format '" + format + "': " + message);
}
/**
 * @param message A message describing the internal error.
 */
function internalError(message) {
    throw new FirebaseStorageError(Code.INTERNAL_ERROR, 'Internal error: ' + message);
}

//# sourceMappingURL=error.js.map


/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var CODES = {
    AVAILABLE_IN_WINDOW: 'only-available-in-window',
    AVAILABLE_IN_SW: 'only-available-in-sw',
    SHOULD_BE_INHERITED: 'should-be-overriden',
    BAD_SENDER_ID: 'bad-sender-id',
    INCORRECT_GCM_SENDER_ID: 'incorrect-gcm-sender-id',
    PERMISSION_DEFAULT: 'permission-default',
    PERMISSION_BLOCKED: 'permission-blocked',
    UNSUPPORTED_BROWSER: 'unsupported-browser',
    NOTIFICATIONS_BLOCKED: 'notifications-blocked',
    FAILED_DEFAULT_REGISTRATION: 'failed-serviceworker-registration',
    SW_REGISTRATION_EXPECTED: 'sw-registration-expected',
    GET_SUBSCRIPTION_FAILED: 'get-subscription-failed',
    INVALID_SAVED_TOKEN: 'invalid-saved-token',
    SW_REG_REDUNDANT: 'sw-reg-redundant',
    TOKEN_SUBSCRIBE_FAILED: 'token-subscribe-failed',
    TOKEN_SUBSCRIBE_NO_TOKEN: 'token-subscribe-no-token',
    TOKEN_SUBSCRIBE_NO_PUSH_SET: 'token-subscribe-no-push-set',
    TOKEN_UNSUBSCRIBE_FAILED: 'token-unsubscribe-failed',
    TOKEN_UPDATE_FAILED: 'token-update-failed',
    TOKEN_UPDATE_NO_TOKEN: 'token-update-no-token',
    USE_SW_BEFORE_GET_TOKEN: 'use-sw-before-get-token',
    INVALID_DELETE_TOKEN: 'invalid-delete-token',
    DELETE_TOKEN_NOT_FOUND: 'delete-token-not-found',
    DELETE_SCOPE_NOT_FOUND: 'delete-scope-not-found',
    BG_HANDLER_FUNCTION_EXPECTED: 'bg-handler-function-expected',
    NO_WINDOW_CLIENT_TO_MSG: 'no-window-client-to-msg',
    UNABLE_TO_RESUBSCRIBE: 'unable-to-resubscribe',
    NO_FCM_TOKEN_FOR_RESUBSCRIBE: 'no-fcm-token-for-resubscribe',
    FAILED_TO_DELETE_TOKEN: 'failed-to-delete-token',
    NO_SW_IN_REG: 'no-sw-in-reg',
    BAD_SCOPE: 'bad-scope',
    BAD_VAPID_KEY: 'bad-vapid-key',
    BAD_SUBSCRIPTION: 'bad-subscription',
    BAD_TOKEN: 'bad-token',
    BAD_PUSH_SET: 'bad-push-set',
    FAILED_DELETE_VAPID_KEY: 'failed-delete-vapid-key',
    INVALID_PUBLIC_VAPID_KEY: 'invalid-public-vapid-key',
    USE_PUBLIC_KEY_BEFORE_GET_TOKEN: 'use-public-key-before-get-token',
    PUBLIC_KEY_DECRYPTION_FAILED: 'public-vapid-key-decryption-failed'
};
var ERROR_MAP = (_a = {},
    _a[CODES.AVAILABLE_IN_WINDOW] = 'This method is available in a Window context.',
    _a[CODES.AVAILABLE_IN_SW] = 'This method is available in a service worker ' + 'context.',
    _a[CODES.SHOULD_BE_INHERITED] = 'This method should be overriden by ' + 'extended classes.',
    _a[CODES.BAD_SENDER_ID] = "Please ensure that 'messagingSenderId' is set " +
        'correctly in the options passed into firebase.initializeApp().',
    _a[CODES.PERMISSION_DEFAULT] = 'The required permissions were not granted and ' + 'dismissed instead.',
    _a[CODES.PERMISSION_BLOCKED] = 'The required permissions were not granted and ' + 'blocked instead.',
    _a[CODES.UNSUPPORTED_BROWSER] = "This browser doesn't support the API's " +
        'required to use the firebase SDK.',
    _a[CODES.NOTIFICATIONS_BLOCKED] = 'Notifications have been blocked.',
    _a[CODES.FAILED_DEFAULT_REGISTRATION] = 'We are unable to register the ' +
        'default service worker. {$browserErrorMessage}',
    _a[CODES.SW_REGISTRATION_EXPECTED] = 'A service worker registration was the ' + 'expected input.',
    _a[CODES.GET_SUBSCRIPTION_FAILED] = 'There was an error when trying to get ' +
        'any existing Push Subscriptions.',
    _a[CODES.INVALID_SAVED_TOKEN] = 'Unable to access details of the saved token.',
    _a[CODES.SW_REG_REDUNDANT] = 'The service worker being used for push was made ' + 'redundant.',
    _a[CODES.TOKEN_SUBSCRIBE_FAILED] = 'A problem occured while subscribing the ' + 'user to FCM: {$message}',
    _a[CODES.TOKEN_SUBSCRIBE_NO_TOKEN] = 'FCM returned no token when subscribing ' + 'the user to push.',
    _a[CODES.TOKEN_SUBSCRIBE_NO_PUSH_SET] = 'FCM returned an invalid response ' + 'when getting an FCM token.',
    _a[CODES.TOKEN_UNSUBSCRIBE_FAILED] = 'A problem occured while unsubscribing the ' + 'user from FCM: {$message}',
    _a[CODES.TOKEN_UPDATE_FAILED] = 'A problem occured while updating the ' + 'user from FCM: {$message}',
    _a[CODES.TOKEN_UPDATE_NO_TOKEN] = 'FCM returned no token when updating ' + 'the user to push.',
    _a[CODES.USE_SW_BEFORE_GET_TOKEN] = 'The useServiceWorker() method may only be called once and must be ' +
        'called before calling getToken() to ensure your service worker is used.',
    _a[CODES.INVALID_DELETE_TOKEN] = 'You must pass a valid token into ' +
        'deleteToken(), i.e. the token from getToken().',
    _a[CODES.DELETE_TOKEN_NOT_FOUND] = 'The deletion attempt for token could not ' +
        'be performed as the token was not found.',
    _a[CODES.DELETE_SCOPE_NOT_FOUND] = 'The deletion attempt for service worker ' +
        'scope could not be performed as the scope was not found.',
    _a[CODES.BG_HANDLER_FUNCTION_EXPECTED] = 'The input to ' + 'setBackgroundMessageHandler() must be a function.',
    _a[CODES.NO_WINDOW_CLIENT_TO_MSG] = 'An attempt was made to message a ' + 'non-existant window client.',
    _a[CODES.UNABLE_TO_RESUBSCRIBE] = 'There was an error while re-subscribing ' +
        'the FCM token for push messaging. Will have to resubscribe the ' +
        'user on next visit. {$message}',
    _a[CODES.NO_FCM_TOKEN_FOR_RESUBSCRIBE] = 'Could not find an FCM token ' +
        'and as a result, unable to resubscribe. Will have to resubscribe the ' +
        'user on next visit.',
    _a[CODES.FAILED_TO_DELETE_TOKEN] = 'Unable to delete the currently saved token.',
    _a[CODES.NO_SW_IN_REG] = 'Even though the service worker registration was ' +
        'successful, there was a problem accessing the service worker itself.',
    _a[CODES.INCORRECT_GCM_SENDER_ID] = "Please change your web app manifest's " +
        "'gcm_sender_id' value to '103953800507' to use Firebase messaging.",
    _a[CODES.BAD_SCOPE] = 'The service worker scope must be a string with at ' +
        'least one character.',
    _a[CODES.BAD_VAPID_KEY] = 'The public VAPID key is not a Uint8Array with 65 bytes.',
    _a[CODES.BAD_SUBSCRIPTION] = 'The subscription must be a valid ' + 'PushSubscription.',
    _a[CODES.BAD_TOKEN] = 'The FCM Token used for storage / lookup was not ' +
        'a valid token string.',
    _a[CODES.BAD_PUSH_SET] = 'The FCM push set used for storage / lookup was not ' +
        'not a valid push set string.',
    _a[CODES.FAILED_DELETE_VAPID_KEY] = 'The VAPID key could not be deleted.',
    _a[CODES.INVALID_PUBLIC_VAPID_KEY] = 'The public VAPID key must be a string.',
    _a[CODES.PUBLIC_KEY_DECRYPTION_FAILED] = 'The public VAPID key did not equal ' + '65 bytes when decrypted.',
    _a);
/* harmony default export */ __webpack_exports__["a"] = ({
    codes: CODES,
    map: ERROR_MAP
});
var _a;

//# sourceMappingURL=errors.js.map


/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = make;
/* harmony export (immutable) */ __webpack_exports__["c"] = resolve;
/* harmony export (immutable) */ __webpack_exports__["b"] = reject;
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @fileoverview Implements the promise abstraction interface for external
 * (public SDK) packaging, which just passes through to the firebase-app impl.
 */
/**
 * @template T
 * @param {function((function(T): void),
 *                  (function(!Error): void))} resolver
 */
function make(resolver) {
    return new Promise(resolver);
}
/**
 * @template T
 */
function resolve(value) {
    return Promise.resolve(value);
}
function reject(error) {
    return Promise.reject(error);
}

//# sourceMappingURL=promise_external.js.map


/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export contains */
/* harmony export (immutable) */ __webpack_exports__["b"] = forEach;
/* harmony export (immutable) */ __webpack_exports__["a"] = clone;
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @fileoverview Contains methods for working with objects.
 */
function contains(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
}
function forEach(obj, f) {
    for (var key in obj) {
        if (contains(obj, key)) {
            f(key, obj[key]);
        }
    }
}
function clone(obj) {
    if (obj == null) {
        return {};
    }
    var c = {};
    forEach(obj, function (key, val) {
        c[key] = val;
    });
    return c;
}

//# sourceMappingURL=object.js.map


/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StringFormat; });
/* harmony export (immutable) */ __webpack_exports__["c"] = formatValidator;
/* unused harmony export StringData */
/* harmony export (immutable) */ __webpack_exports__["b"] = dataFromString;
/* unused harmony export utf8Bytes_ */
/* unused harmony export percentEncodedBytes_ */
/* unused harmony export base64Bytes_ */
/* unused harmony export dataURLBytes_ */
/* unused harmony export dataURLContentType_ */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__error__ = __webpack_require__(455);
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var StringFormat = {
    RAW: 'raw',
    BASE64: 'base64',
    BASE64URL: 'base64url',
    DATA_URL: 'data_url'
};
function formatValidator(stringFormat) {
    switch (stringFormat) {
        case StringFormat.RAW:
        case StringFormat.BASE64:
        case StringFormat.BASE64URL:
        case StringFormat.DATA_URL:
            return;
        default:
            throw 'Expected one of the event types: [' +
                StringFormat.RAW +
                ', ' +
                StringFormat.BASE64 +
                ', ' +
                StringFormat.BASE64URL +
                ', ' +
                StringFormat.DATA_URL +
                '].';
    }
}
/**
 * @struct
 */
var StringData = /** @class */ (function () {
    function StringData(data, opt_contentType) {
        this.data = data;
        this.contentType = opt_contentType || null;
    }
    return StringData;
}());

function dataFromString(format, string) {
    switch (format) {
        case StringFormat.RAW:
            return new StringData(utf8Bytes_(string));
        case StringFormat.BASE64:
        case StringFormat.BASE64URL:
            return new StringData(base64Bytes_(format, string));
        case StringFormat.DATA_URL:
            return new StringData(dataURLBytes_(string), dataURLContentType_(string));
    }
    // assert(false);
    throw __WEBPACK_IMPORTED_MODULE_0__error__["s" /* unknown */]();
}
function utf8Bytes_(string) {
    var b = [];
    for (var i = 0; i < string.length; i++) {
        var c = string.charCodeAt(i);
        if (c <= 127) {
            b.push(c);
        }
        else {
            if (c <= 2047) {
                b.push(192 | (c >> 6), 128 | (c & 63));
            }
            else {
                if ((c & 64512) == 55296) {
                    // The start of a surrogate pair.
                    var valid = i < string.length - 1 &&
                        (string.charCodeAt(i + 1) & 64512) == 56320;
                    if (!valid) {
                        // The second surrogate wasn't there.
                        b.push(239, 191, 189);
                    }
                    else {
                        var hi = c;
                        var lo = string.charCodeAt(++i);
                        c = 65536 | ((hi & 1023) << 10) | (lo & 1023);
                        b.push(240 | (c >> 18), 128 | ((c >> 12) & 63), 128 | ((c >> 6) & 63), 128 | (c & 63));
                    }
                }
                else {
                    if ((c & 64512) == 56320) {
                        // Invalid low surrogate.
                        b.push(239, 191, 189);
                    }
                    else {
                        b.push(224 | (c >> 12), 128 | ((c >> 6) & 63), 128 | (c & 63));
                    }
                }
            }
        }
    }
    return new Uint8Array(b);
}
function percentEncodedBytes_(string) {
    var decoded;
    try {
        decoded = decodeURIComponent(string);
    }
    catch (e) {
        throw __WEBPACK_IMPORTED_MODULE_0__error__["i" /* invalidFormat */](StringFormat.DATA_URL, 'Malformed data URL.');
    }
    return utf8Bytes_(decoded);
}
function base64Bytes_(format, string) {
    switch (format) {
        case StringFormat.BASE64: {
            var hasMinus = string.indexOf('-') !== -1;
            var hasUnder = string.indexOf('_') !== -1;
            if (hasMinus || hasUnder) {
                var invalidChar = hasMinus ? '-' : '_';
                throw __WEBPACK_IMPORTED_MODULE_0__error__["i" /* invalidFormat */](format, "Invalid character '" +
                    invalidChar +
                    "' found: is it base64url encoded?");
            }
            break;
        }
        case StringFormat.BASE64URL: {
            var hasPlus = string.indexOf('+') !== -1;
            var hasSlash = string.indexOf('/') !== -1;
            if (hasPlus || hasSlash) {
                var invalidChar = hasPlus ? '+' : '/';
                throw __WEBPACK_IMPORTED_MODULE_0__error__["i" /* invalidFormat */](format, "Invalid character '" + invalidChar + "' found: is it base64 encoded?");
            }
            string = string.replace(/-/g, '+').replace(/_/g, '/');
            break;
        }
    }
    var bytes;
    try {
        bytes = atob(string);
    }
    catch (e) {
        throw __WEBPACK_IMPORTED_MODULE_0__error__["i" /* invalidFormat */](format, 'Invalid character found');
    }
    var array = new Uint8Array(bytes.length);
    for (var i = 0; i < bytes.length; i++) {
        array[i] = bytes.charCodeAt(i);
    }
    return array;
}
/**
 * @struct
 */
var DataURLParts = /** @class */ (function () {
    function DataURLParts(dataURL) {
        this.base64 = false;
        this.contentType = null;
        var matches = dataURL.match(/^data:([^,]+)?,/);
        if (matches === null) {
            throw __WEBPACK_IMPORTED_MODULE_0__error__["i" /* invalidFormat */](StringFormat.DATA_URL, "Must be formatted 'data:[<mediatype>][;base64],<data>");
        }
        var middle = matches[1] || null;
        if (middle != null) {
            this.base64 = endsWith(middle, ';base64');
            this.contentType = this.base64
                ? middle.substring(0, middle.length - ';base64'.length)
                : middle;
        }
        this.rest = dataURL.substring(dataURL.indexOf(',') + 1);
    }
    return DataURLParts;
}());
function dataURLBytes_(string) {
    var parts = new DataURLParts(string);
    if (parts.base64) {
        return base64Bytes_(StringFormat.BASE64, parts.rest);
    }
    else {
        return percentEncodedBytes_(parts.rest);
    }
}
function dataURLContentType_(string) {
    var parts = new DataURLParts(string);
    return parts.contentType;
}
function endsWith(s, end) {
    var longEnough = s.length >= end.length;
    if (!longEnough) {
        return false;
    }
    return s.substring(s.length - end.length) === end;
}

//# sourceMappingURL=string.js.map


/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TaskEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InternalTaskState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return TaskState; });
/* harmony export (immutable) */ __webpack_exports__["d"] = taskStateFromInternalTaskState;
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var TaskEvent = {
    /** Triggered whenever the task changes or progress is updated. */
    STATE_CHANGED: 'state_changed'
};
var InternalTaskState = {
    RUNNING: 'running',
    PAUSING: 'pausing',
    PAUSED: 'paused',
    SUCCESS: 'success',
    CANCELING: 'canceling',
    CANCELED: 'canceled',
    ERROR: 'error'
};
var TaskState = {
    /** The task is currently transferring data. */
    RUNNING: 'running',
    /** The task was paused by the user. */
    PAUSED: 'paused',
    /** The task completed successfully. */
    SUCCESS: 'success',
    /** The task was canceled. */
    CANCELED: 'canceled',
    /** The task failed with an error. */
    ERROR: 'error'
};
function taskStateFromInternalTaskState(state) {
    switch (state) {
        case InternalTaskState.RUNNING:
        case InternalTaskState.PAUSING:
        case InternalTaskState.CANCELING:
            return TaskState.RUNNING;
        case InternalTaskState.PAUSED:
            return TaskState.PAUSED;
        case InternalTaskState.SUCCESS:
            return TaskState.SUCCESS;
        case InternalTaskState.CANCELED:
            return TaskState.CANCELED;
        case InternalTaskState.ERROR:
            return TaskState.ERROR;
        default:
            // TODO(andysoto): assert(false);
            return TaskState.ERROR;
    }
}

//# sourceMappingURL=taskenums.js.map


/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return domainBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return downloadBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return apiBaseUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return apiUploadBaseUrl; });
/* unused harmony export setDomainBase */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return configOption; });
/* unused harmony export shortMaxOperationRetryTime */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return defaultMaxOperationRetryTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return defaultMaxUploadRetryTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return minSafeInteger; });
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @fileoverview Constants used in the Firebase Storage library.
 */
/**
 * Domain and scheme for API calls.
 */
var domainBase = 'https://firebasestorage.googleapis.com';
/**
 * Domain and scheme for object downloads.
 */
var downloadBase = 'https://firebasestorage.googleapis.com';
/**
 * Base URL for non-upload calls to the API.
 */
var apiBaseUrl = '/v0';
/**
 * Base URL for upload calls to the API.
 */
var apiUploadBaseUrl = '/v0';
function setDomainBase(domainBase) {
    domainBase = domainBase;
}
var configOption = 'storageBucket';
/**
 * 1 minute
 */
var shortMaxOperationRetryTime = 1 * 60 * 1000;
/**
 * 2 minutes
 */
var defaultMaxOperationRetryTime = 2 * 60 * 1000;
/**
 * 10 minutes
 */
var defaultMaxUploadRetryTime = 10 * 60 * 100;
/**
 * This is the value of Number.MIN_SAFE_INTEGER, which is not well supported
 * enough for us to use it directly.
 */
var minSafeInteger = -9007199254740991;

//# sourceMappingURL=constants.js.map


/***/ }),

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Location; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__error__ = __webpack_require__(455);
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @fileoverview Functionality related to the parsing/composition of bucket/
 * object location.
 */

/**
 * @struct
 */
var Location = /** @class */ (function () {
    function Location(bucket, path) {
        this.bucket = bucket;
        this.path_ = path;
    }
    Object.defineProperty(Location.prototype, "path", {
        get: function () {
            return this.path_;
        },
        enumerable: true,
        configurable: true
    });
    Location.prototype.fullServerUrl = function () {
        var encode = encodeURIComponent;
        return '/b/' + encode(this.bucket) + '/o/' + encode(this.path);
    };
    Location.prototype.bucketOnlyServerUrl = function () {
        var encode = encodeURIComponent;
        return '/b/' + encode(this.bucket) + '/o';
    };
    Location.makeFromBucketSpec = function (bucketString) {
        var bucketLocation;
        try {
            bucketLocation = Location.makeFromUrl(bucketString);
        }
        catch (e) {
            // Not valid URL, use as-is. This lets you put bare bucket names in
            // config.
            return new Location(bucketString, '');
        }
        if (bucketLocation.path === '') {
            return bucketLocation;
        }
        else {
            throw __WEBPACK_IMPORTED_MODULE_0__error__["h" /* invalidDefaultBucket */](bucketString);
        }
    };
    Location.makeFromUrl = function (url) {
        var location = null;
        var bucketDomain = '([A-Za-z0-9.\\-]+)';
        function gsModify(loc) {
            if (loc.path.charAt(loc.path.length - 1) === '/') {
                loc.path_ = loc.path_.slice(0, -1);
            }
        }
        var gsPath = '(/(.*))?$';
        var path = '(/([^?#]*).*)?$';
        var gsRegex = new RegExp('^gs://' + bucketDomain + gsPath, 'i');
        var gsIndices = { bucket: 1, path: 3 };
        function httpModify(loc) {
            loc.path_ = decodeURIComponent(loc.path);
        }
        var version = 'v[A-Za-z0-9_]+';
        var httpRegex = new RegExp('^https?://firebasestorage\\.googleapis\\.com/' +
            version +
            '/b/' +
            bucketDomain +
            '/o' +
            path, 'i');
        var httpIndices = { bucket: 1, path: 3 };
        var groups = [
            { regex: gsRegex, indices: gsIndices, postModify: gsModify },
            { regex: httpRegex, indices: httpIndices, postModify: httpModify }
        ];
        for (var i = 0; i < groups.length; i++) {
            var group = groups[i];
            var captures = group.regex.exec(url);
            if (captures) {
                var bucketValue = captures[group.indices.bucket];
                var pathValue = captures[group.indices.path];
                if (!pathValue) {
                    pathValue = '';
                }
                location = new Location(bucketValue, pathValue);
                group.postModify(location);
                break;
            }
        }
        if (location == null) {
            throw __WEBPACK_IMPORTED_MODULE_0__error__["k" /* invalidUrl */](url);
        }
        return location;
    };
    return Location;
}());


//# sourceMappingURL=location.js.map


/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function toBase64(arrayBuffer) {
    var uint8Version = new Uint8Array(arrayBuffer);
    return window.btoa(String.fromCharCode.apply(null, uint8Version));
}
/* harmony default export */ __webpack_exports__["a"] = (function (arrayBuffer) {
    var base64String = toBase64(arrayBuffer);
    return base64String
        .replace(/=/g, '')
        .replace(/\+/g, '-')
        .replace(/\//g, '_');
});

//# sourceMappingURL=array-buffer-to-base64.js.map


/***/ }),

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var DEFAULT_PUBLIC_VAPID_KEY = new Uint8Array([
    0x04,
    0x33,
    0x94,
    0xf7,
    0xdf,
    0xa1,
    0xeb,
    0xb1,
    0xdc,
    0x03,
    0xa2,
    0x5e,
    0x15,
    0x71,
    0xdb,
    0x48,
    0xd3,
    0x2e,
    0xed,
    0xed,
    0xb2,
    0x34,
    0xdb,
    0xb7,
    0x47,
    0x3a,
    0x0c,
    0x8f,
    0xc4,
    0xcc,
    0xe1,
    0x6f,
    0x3c,
    0x8c,
    0x84,
    0xdf,
    0xab,
    0xb6,
    0x66,
    0x3e,
    0xf2,
    0x0c,
    0xd4,
    0x8b,
    0xfe,
    0xe3,
    0xf9,
    0x76,
    0x2f,
    0x14,
    0x1c,
    0x63,
    0x08,
    0x6a,
    0x6f,
    0x2d,
    0xb1,
    0x1a,
    0x95,
    0xb0,
    0xce,
    0x37,
    0xc0,
    0x9c,
    0x6e
]);
var SUBSCRIPTION_DETAILS = {
    userVisibleOnly: true,
    applicationServerKey: DEFAULT_PUBLIC_VAPID_KEY
};
/* harmony default export */ __webpack_exports__["a"] = ({
    DEFAULT_PUBLIC_VAPID_KEY: DEFAULT_PUBLIC_VAPID_KEY,
    SUBSCRIPTION_DETAILS: SUBSCRIPTION_DETAILS,
    ENDPOINT: 'https://fcm.googleapis.com'
    // ENDPOINT: 'https://jmt17.google.com'
});

//# sourceMappingURL=fcm-details.js.map


/***/ }),

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["g"] = validate;
/* unused harmony export ArgSpec */
/* unused harmony export and_ */
/* harmony export (immutable) */ __webpack_exports__["e"] = stringSpec;
/* harmony export (immutable) */ __webpack_exports__["f"] = uploadDataSpec;
/* harmony export (immutable) */ __webpack_exports__["b"] = metadataSpec;
/* harmony export (immutable) */ __webpack_exports__["c"] = nonNegativeNumberSpec;
/* harmony export (immutable) */ __webpack_exports__["a"] = looseObjectSpec;
/* harmony export (immutable) */ __webpack_exports__["d"] = nullFunctionSpec;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__error__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__metadata__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__type__ = __webpack_require__(454);
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



/**
 * @param name Name of the function.
 * @param specs Argument specs.
 * @param passed The actual arguments passed to the function.
 * @throws {fbs.Error} If the arguments are invalid.
 */
function validate(name, specs, passed) {
    var minArgs = specs.length;
    var maxArgs = specs.length;
    for (var i = 0; i < specs.length; i++) {
        if (specs[i].optional) {
            minArgs = i;
            break;
        }
    }
    var validLength = minArgs <= passed.length && passed.length <= maxArgs;
    if (!validLength) {
        throw __WEBPACK_IMPORTED_MODULE_0__error__["g" /* invalidArgumentCount */](minArgs, maxArgs, name, passed.length);
    }
    for (var i = 0; i < passed.length; i++) {
        try {
            specs[i].validator(passed[i]);
        }
        catch (e) {
            if (e instanceof Error) {
                throw __WEBPACK_IMPORTED_MODULE_0__error__["f" /* invalidArgument */](i, name, e.message);
            }
            else {
                throw __WEBPACK_IMPORTED_MODULE_0__error__["f" /* invalidArgument */](i, name, e);
            }
        }
    }
}
/**
 * @struct
 */
var ArgSpec = /** @class */ (function () {
    function ArgSpec(validator, opt_optional) {
        var self = this;
        this.validator = function (p) {
            if (self.optional && !__WEBPACK_IMPORTED_MODULE_2__type__["c" /* isJustDef */](p)) {
                return;
            }
            validator(p);
        };
        this.optional = !!opt_optional;
    }
    return ArgSpec;
}());

function and_(v1, v2) {
    return function (p) {
        v1(p);
        v2(p);
    };
}
function stringSpec(opt_validator, opt_optional) {
    function stringValidator(p) {
        if (!__WEBPACK_IMPORTED_MODULE_2__type__["j" /* isString */](p)) {
            throw 'Expected string.';
        }
    }
    var validator;
    if (opt_validator) {
        validator = and_(stringValidator, opt_validator);
    }
    else {
        validator = stringValidator;
    }
    return new ArgSpec(validator, opt_optional);
}
function uploadDataSpec() {
    function validator(p) {
        var valid = p instanceof Uint8Array ||
            p instanceof ArrayBuffer ||
            (__WEBPACK_IMPORTED_MODULE_2__type__["e" /* isNativeBlobDefined */]() && p instanceof Blob);
        if (!valid) {
            throw 'Expected Blob or File.';
        }
    }
    return new ArgSpec(validator);
}
function metadataSpec(opt_optional) {
    return new ArgSpec(__WEBPACK_IMPORTED_MODULE_1__metadata__["c" /* metadataValidator */], opt_optional);
}
function nonNegativeNumberSpec() {
    function validator(p) {
        var valid = __WEBPACK_IMPORTED_MODULE_2__type__["h" /* isNumber */](p) && p >= 0;
        if (!valid) {
            throw 'Expected a number 0 or greater.';
        }
    }
    return new ArgSpec(validator);
}
function looseObjectSpec(opt_validator, opt_optional) {
    function validator(p) {
        var isLooseObject = p === null || (__WEBPACK_IMPORTED_MODULE_2__type__["a" /* isDef */](p) && p instanceof Object);
        if (!isLooseObject) {
            throw 'Expected an Object.';
        }
        if (opt_validator !== undefined && opt_validator !== null) {
            opt_validator(p);
        }
    }
    return new ArgSpec(validator, opt_optional);
}
function nullFunctionSpec(opt_optional) {
    function validator(p) {
        var valid = p === null || __WEBPACK_IMPORTED_MODULE_2__type__["b" /* isFunction */](p);
        if (!valid) {
            throw 'Expected a Function.';
        }
    }
    return new ArgSpec(validator, opt_optional);
}

//# sourceMappingURL=args.js.map


/***/ }),

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export noXform_ */
/* unused harmony export Mapping */
/* unused harmony export xformPath */
/* harmony export (immutable) */ __webpack_exports__["b"] = getMappings;
/* unused harmony export addRef */
/* unused harmony export fromResource */
/* harmony export (immutable) */ __webpack_exports__["a"] = fromResourceString;
/* harmony export (immutable) */ __webpack_exports__["d"] = toResourceString;
/* harmony export (immutable) */ __webpack_exports__["c"] = metadataValidator;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__json__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__location__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__path__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__type__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__url__ = __webpack_require__(467);
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */





function noXform_(metadata, value) {
    return value;
}
/**
 * @struct
 */
var Mapping = /** @class */ (function () {
    function Mapping(server, opt_local, opt_writable, opt_xform) {
        this.server = server;
        this.local = opt_local || server;
        this.writable = !!opt_writable;
        this.xform = opt_xform || noXform_;
    }
    return Mapping;
}());

var mappings_ = null;
function xformPath(fullPath) {
    var valid = __WEBPACK_IMPORTED_MODULE_3__type__["j" /* isString */](fullPath);
    if (!valid || fullPath.length < 2) {
        return fullPath;
    }
    else {
        fullPath = fullPath;
        return __WEBPACK_IMPORTED_MODULE_2__path__["b" /* lastComponent */](fullPath);
    }
}
function getMappings() {
    if (mappings_) {
        return mappings_;
    }
    var mappings = [];
    mappings.push(new Mapping('bucket'));
    mappings.push(new Mapping('generation'));
    mappings.push(new Mapping('metageneration'));
    mappings.push(new Mapping('name', 'fullPath', true));
    function mappingsXformPath(metadata, fullPath) {
        return xformPath(fullPath);
    }
    var nameMapping = new Mapping('name');
    nameMapping.xform = mappingsXformPath;
    mappings.push(nameMapping);
    /**
     * Coerces the second param to a number, if it is defined.
     */
    function xformSize(metadata, size) {
        if (__WEBPACK_IMPORTED_MODULE_3__type__["a" /* isDef */](size)) {
            return +size;
        }
        else {
            return size;
        }
    }
    var sizeMapping = new Mapping('size');
    sizeMapping.xform = xformSize;
    mappings.push(sizeMapping);
    mappings.push(new Mapping('timeCreated'));
    mappings.push(new Mapping('updated'));
    mappings.push(new Mapping('md5Hash', null, true));
    mappings.push(new Mapping('cacheControl', null, true));
    mappings.push(new Mapping('contentDisposition', null, true));
    mappings.push(new Mapping('contentEncoding', null, true));
    mappings.push(new Mapping('contentLanguage', null, true));
    mappings.push(new Mapping('contentType', null, true));
    mappings.push(new Mapping('metadata', 'customMetadata', true));
    /**
     * Transforms a comma-separated string of tokens into a list of download
     * URLs.
     */
    function xformTokens(metadata, tokens) {
        var valid = __WEBPACK_IMPORTED_MODULE_3__type__["j" /* isString */](tokens) && tokens.length > 0;
        if (!valid) {
            // This can happen if objects are uploaded through GCS and retrieved
            // through list, so we don't want to throw an Error.
            return [];
        }
        var encode = encodeURIComponent;
        var tokensList = tokens.split(',');
        var urls = tokensList.map(function (token) {
            var bucket = metadata['bucket'];
            var path = metadata['fullPath'];
            var urlPart = '/b/' + encode(bucket) + '/o/' + encode(path);
            var base = __WEBPACK_IMPORTED_MODULE_4__url__["a" /* makeDownloadUrl */](urlPart);
            var queryString = __WEBPACK_IMPORTED_MODULE_4__url__["c" /* makeQueryString */]({
                alt: 'media',
                token: token
            });
            return base + queryString;
        });
        return urls;
    }
    mappings.push(new Mapping('downloadTokens', 'downloadURLs', false, xformTokens));
    mappings_ = mappings;
    return mappings_;
}
function addRef(metadata, authWrapper) {
    function generateRef() {
        var bucket = metadata['bucket'];
        var path = metadata['fullPath'];
        var loc = new __WEBPACK_IMPORTED_MODULE_1__location__["a" /* Location */](bucket, path);
        return authWrapper.makeStorageReference(loc);
    }
    Object.defineProperty(metadata, 'ref', { get: generateRef });
}
function fromResource(authWrapper, resource, mappings) {
    var metadata = {};
    metadata['type'] = 'file';
    var len = mappings.length;
    for (var i = 0; i < len; i++) {
        var mapping = mappings[i];
        metadata[mapping.local] = mapping.xform(metadata, resource[mapping.server]);
    }
    addRef(metadata, authWrapper);
    return metadata;
}
function fromResourceString(authWrapper, resourceString, mappings) {
    var obj = __WEBPACK_IMPORTED_MODULE_0__json__["a" /* jsonObjectOrNull */](resourceString);
    if (obj === null) {
        return null;
    }
    var resource = obj;
    return fromResource(authWrapper, resource, mappings);
}
function toResourceString(metadata, mappings) {
    var resource = {};
    var len = mappings.length;
    for (var i = 0; i < len; i++) {
        var mapping = mappings[i];
        if (mapping.writable) {
            resource[mapping.server] = metadata[mapping.local];
        }
    }
    return JSON.stringify(resource);
}
function metadataValidator(p) {
    var validType = p && __WEBPACK_IMPORTED_MODULE_3__type__["i" /* isObject */](p);
    if (!validType) {
        throw 'Expected Metadata object.';
    }
    for (var key in p) {
        var val = p[key];
        if (key === 'customMetadata') {
            if (!__WEBPACK_IMPORTED_MODULE_3__type__["i" /* isObject */](val)) {
                throw 'Expected object for \'customMetadata\' mapping.';
            }
        }
        else {
            if (__WEBPACK_IMPORTED_MODULE_3__type__["g" /* isNonNullObject */](val)) {
                throw "Mapping for '" + key + "' cannot be an object.";
            }
        }
    }
}

//# sourceMappingURL=metadata.js.map


/***/ }),

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = makeNormalUrl;
/* harmony export (immutable) */ __webpack_exports__["a"] = makeDownloadUrl;
/* harmony export (immutable) */ __webpack_exports__["d"] = makeUploadUrl;
/* harmony export (immutable) */ __webpack_exports__["c"] = makeQueryString;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__object__ = __webpack_require__(458);
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @fileoverview Functions to create and manipulate URLs for the server API.
 */


function makeNormalUrl(urlPart) {
    return __WEBPACK_IMPORTED_MODULE_0__constants__["f" /* domainBase */] + __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* apiBaseUrl */] + urlPart;
}
function makeDownloadUrl(urlPart) {
    return __WEBPACK_IMPORTED_MODULE_0__constants__["g" /* downloadBase */] + __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* apiBaseUrl */] + urlPart;
}
function makeUploadUrl(urlPart) {
    return __WEBPACK_IMPORTED_MODULE_0__constants__["f" /* domainBase */] + __WEBPACK_IMPORTED_MODULE_0__constants__["b" /* apiUploadBaseUrl */] + urlPart;
}
function makeQueryString(params) {
    var encode = encodeURIComponent;
    var queryPart = '?';
    __WEBPACK_IMPORTED_MODULE_1__object__["b" /* forEach */](params, function (key, val) {
        var nextPart = encode(key) + '=' + encode(val);
        queryPart = queryPart + nextPart + '&';
    });
    // Chop off the extra '&' or '?' on the end
    queryPart = queryPart.slice(0, -1);
    return queryPart;
}

//# sourceMappingURL=url.js.map


/***/ }),

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = contains;
/* harmony export (immutable) */ __webpack_exports__["a"] = clone;
/* harmony export (immutable) */ __webpack_exports__["c"] = remove;
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns true if the object is contained in the array (compared with ===).
 * @template T
 */
function contains(array, elem) {
    return array.indexOf(elem) !== -1;
}
/**
 * Returns a shallow copy of the array or array-like object (e.g. arguments).
 * @template T
 */
function clone(arraylike) {
    return Array.prototype.slice.call(arraylike);
}
/**
 * Removes the given element from the given array, if it is contained.
 * Directly modifies the passed-in array.
 * @template T
 */
function remove(array, elem) {
    var i = array.indexOf(elem);
    if (i !== -1) {
        array.splice(i, 1);
    }
}

//# sourceMappingURL=array.js.map


/***/ }),

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TOKEN_EXPIRATION_MILLIS */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__firebase_util__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__firebase_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__firebase_util__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_errors__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_token_details_model__ = __webpack_require__(494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_vapid_details_model__ = __webpack_require__(496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_notification_permission__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_iid_model__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__helpers_array_buffer_to_base64__ = __webpack_require__(463);
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */









var SENDER_ID_OPTION_NAME = 'messagingSenderId';
// Database cache should be invalidated once a week.
var TOKEN_EXPIRATION_MILLIS = 7 * 24 * 60 * 60 * 1000; // 7 days
var ControllerInterface = /** @class */ (function () {
    /**
     * An interface of the Messaging Service API
     * @param {!firebase.app.App} app
     */
    function ControllerInterface(app) {
        var _this = this;
        this.errorFactory_ = new __WEBPACK_IMPORTED_MODULE_1__firebase_util__["ErrorFactory"]('messaging', 'Messaging', __WEBPACK_IMPORTED_MODULE_2__models_errors__["a" /* default */].map);
        if (!app.options[SENDER_ID_OPTION_NAME] ||
            typeof app.options[SENDER_ID_OPTION_NAME] !== 'string') {
            throw this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_2__models_errors__["a" /* default */].codes.BAD_SENDER_ID);
        }
        this.messagingSenderId_ = app.options[SENDER_ID_OPTION_NAME];
        this.tokenDetailsModel_ = new __WEBPACK_IMPORTED_MODULE_3__models_token_details_model__["a" /* default */]();
        this.vapidDetailsModel_ = new __WEBPACK_IMPORTED_MODULE_4__models_vapid_details_model__["a" /* default */]();
        this.iidModel_ = new __WEBPACK_IMPORTED_MODULE_6__models_iid_model__["a" /* default */]();
        this.app = app;
        this.INTERNAL = {};
        this.INTERNAL.delete = function () { return _this.delete(); };
    }
    /**
     * @export
     */
    ControllerInterface.prototype.getToken = function () {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["__awaiter"](this, void 0, void 0, function () {
            var currentPermission, swReg, publicVapidKey, pushSubscription, tokenDetails;
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        currentPermission = this.getNotificationPermission_();
                        if (currentPermission !== __WEBPACK_IMPORTED_MODULE_5__models_notification_permission__["a" /* default */].granted) {
                            if (currentPermission === __WEBPACK_IMPORTED_MODULE_5__models_notification_permission__["a" /* default */].denied) {
                                return [2 /*return*/, Promise.reject(this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_2__models_errors__["a" /* default */].codes.NOTIFICATIONS_BLOCKED))];
                            }
                            // We must wait for permission to be granted
                            return [2 /*return*/, Promise.resolve(null)];
                        }
                        return [4 /*yield*/, this.getSWRegistration_()];
                    case 1:
                        swReg = _a.sent();
                        return [4 /*yield*/, this.getPublicVapidKey_()];
                    case 2:
                        publicVapidKey = _a.sent();
                        return [4 /*yield*/, this.getPushSubscription(swReg, publicVapidKey)];
                    case 3:
                        pushSubscription = _a.sent();
                        return [4 /*yield*/, this.tokenDetailsModel_.getTokenDetailsFromSWScope(swReg.scope)];
                    case 4:
                        tokenDetails = _a.sent();
                        if (tokenDetails) {
                            return [2 /*return*/, this.manageExistingToken(swReg, pushSubscription, publicVapidKey, tokenDetails)];
                        }
                        return [2 /*return*/, this.getNewToken(swReg, pushSubscription, publicVapidKey)];
                }
            });
        });
    };
    /**
     * manageExistingToken is triggered if there's an existing FCM token in the
     * database and it can take 3 different actions:
     * 1) Retrieve the existing FCM token from the database.
     * 2) If VAPID details have changed: Delete the existing token and create a
     * new one with the new VAPID key.
     * 3) If the database cache is invalidated: Send a request to FCM to update
     * the token, and to check if the token is still valid on FCM-side.
     */
    ControllerInterface.prototype.manageExistingToken = function (swReg, pushSubscription, publicVapidKey, tokenDetails) {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["__awaiter"](this, void 0, void 0, function () {
            var isTokenValid, now;
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        isTokenValid = this.isTokenStillValid(pushSubscription, publicVapidKey, tokenDetails);
                        if (isTokenValid) {
                            now = Date.now();
                            if (now < tokenDetails['createTime'] + TOKEN_EXPIRATION_MILLIS) {
                                return [2 /*return*/, tokenDetails['fcmToken']];
                            }
                            else {
                                return [2 /*return*/, this.updateToken(swReg, pushSubscription, publicVapidKey, tokenDetails)];
                            }
                        }
                        // If the token is no longer valid (for example if the VAPID details
                        // have changed), delete the existing token, and create a new one.
                        return [4 /*yield*/, this.deleteToken(tokenDetails['fcmToken'])];
                    case 1:
                        // If the token is no longer valid (for example if the VAPID details
                        // have changed), delete the existing token, and create a new one.
                        _a.sent();
                        return [2 /*return*/, this.getNewToken(swReg, pushSubscription, publicVapidKey)];
                }
            });
        });
    };
    /*
     * Checks if the tokenDetails match the details provided in the clients.
     */
    ControllerInterface.prototype.isTokenStillValid = function (pushSubscription, publicVapidKey, tokenDetails) {
        if (Object(__WEBPACK_IMPORTED_MODULE_7__helpers_array_buffer_to_base64__["a" /* default */])(publicVapidKey) !== tokenDetails['vapidKey']) {
            return false;
        }
        // getKey() isn't defined in the PushSubscription externs file, hence
        // subscription['getKey']('<key name>').
        return (pushSubscription.endpoint === tokenDetails['endpoint'] &&
            Object(__WEBPACK_IMPORTED_MODULE_7__helpers_array_buffer_to_base64__["a" /* default */])(pushSubscription['getKey']('auth')) ===
                tokenDetails['auth'] &&
            Object(__WEBPACK_IMPORTED_MODULE_7__helpers_array_buffer_to_base64__["a" /* default */])(pushSubscription['getKey']('p256dh')) ===
                tokenDetails['p256dh']);
    };
    ControllerInterface.prototype.updateToken = function (swReg, pushSubscription, publicVapidKey, tokenDetails) {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["__awaiter"](this, void 0, void 0, function () {
            var updatedToken, allDetails, e_1;
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 6]);
                        return [4 /*yield*/, this.iidModel_.updateToken(this.messagingSenderId_, tokenDetails['fcmToken'], tokenDetails['fcmPushSet'], pushSubscription, publicVapidKey)];
                    case 1:
                        updatedToken = _a.sent();
                        allDetails = {
                            swScope: swReg.scope,
                            vapidKey: publicVapidKey,
                            subscription: pushSubscription,
                            fcmSenderId: this.messagingSenderId_,
                            fcmToken: updatedToken,
                            fcmPushSet: tokenDetails['fcmPushSet']
                        };
                        return [4 /*yield*/, this.tokenDetailsModel_.saveTokenDetails(allDetails)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.vapidDetailsModel_.saveVapidDetails(swReg.scope, publicVapidKey)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, updatedToken];
                    case 4:
                        e_1 = _a.sent();
                        return [4 /*yield*/, this.deleteToken(tokenDetails['fcmToken'])];
                    case 5:
                        _a.sent();
                        throw e_1;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    ControllerInterface.prototype.getNewToken = function (swReg, pushSubscription, publicVapidKey) {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["__awaiter"](this, void 0, void 0, function () {
            var tokenDetails, allDetails;
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.iidModel_.getToken(this.messagingSenderId_, pushSubscription, publicVapidKey)];
                    case 1:
                        tokenDetails = _a.sent();
                        allDetails = {
                            swScope: swReg.scope,
                            vapidKey: publicVapidKey,
                            subscription: pushSubscription,
                            fcmSenderId: this.messagingSenderId_,
                            fcmToken: tokenDetails['token'],
                            fcmPushSet: tokenDetails['pushSet']
                        };
                        return [4 /*yield*/, this.tokenDetailsModel_.saveTokenDetails(allDetails)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.vapidDetailsModel_.saveVapidDetails(swReg.scope, publicVapidKey)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, tokenDetails['token']];
                }
            });
        });
    };
    /**
     * This method deletes tokens that the token manager looks after,
     * unsubscribes the token from FCM  and then unregisters the push
     * subscription if it exists. It returns a promise that indicates
     * whether or not the unsubscribe request was processed successfully.
     * @export
     */
    ControllerInterface.prototype.deleteToken = function (token) {
        var _this = this;
        return this.tokenDetailsModel_
            .deleteToken(token)
            .then(function (details) {
            return _this.iidModel_.deleteToken(details['fcmSenderId'], details['fcmToken'], details['fcmPushSet']);
        })
            .then(function () {
            return _this.getSWRegistration_()
                .then(function (registration) {
                if (registration) {
                    return registration.pushManager.getSubscription();
                }
            })
                .then(function (subscription) {
                if (subscription) {
                    return subscription.unsubscribe();
                }
            });
        });
    };
    ControllerInterface.prototype.getSWRegistration_ = function () {
        throw this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_2__models_errors__["a" /* default */].codes.SHOULD_BE_INHERITED);
    };
    ControllerInterface.prototype.getPublicVapidKey_ = function () {
        throw this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_2__models_errors__["a" /* default */].codes.SHOULD_BE_INHERITED);
    };
    //
    // The following methods should only be available in the window.
    //
    ControllerInterface.prototype.requestPermission = function () {
        throw this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_2__models_errors__["a" /* default */].codes.AVAILABLE_IN_WINDOW);
    };
    /**
     * Gets a PushSubscription for the current user.
     */
    ControllerInterface.prototype.getPushSubscription = function (swRegistration, publicVapidKey) {
        return swRegistration.pushManager.getSubscription().then(function (subscription) {
            if (subscription) {
                return subscription;
            }
            return swRegistration.pushManager.subscribe({
                userVisibleOnly: true,
                applicationServerKey: publicVapidKey
            });
        });
    };
    /**
     * @export
     * @param {!ServiceWorkerRegistration} registration
     */
    ControllerInterface.prototype.useServiceWorker = function (registration) {
        throw this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_2__models_errors__["a" /* default */].codes.AVAILABLE_IN_WINDOW);
    };
    /**
     * @export
     * @param {!string} b64PublicKey
     */
    ControllerInterface.prototype.usePublicVapidKey = function (b64PublicKey) {
        throw this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_2__models_errors__["a" /* default */].codes.AVAILABLE_IN_WINDOW);
    };
    /**
     * @export
     * @param {!firebase.Observer|function(*)} nextOrObserver
     * @param {function(!Error)=} optError
     * @param {function()=} optCompleted
     * @return {!function()}
     */
    ControllerInterface.prototype.onMessage = function (nextOrObserver, optError, optCompleted) {
        throw this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_2__models_errors__["a" /* default */].codes.AVAILABLE_IN_WINDOW);
    };
    /**
     * @export
     * @param {!firebase.Observer|function()} nextOrObserver An observer object
     * or a function triggered on token refresh.
     * @param {function(!Error)=} optError Optional A function
     * triggered on token refresh error.
     * @param {function()=} optCompleted Optional function triggered when the
     * observer is removed.
     * @return {!function()} The unsubscribe function for the observer.
     */
    ControllerInterface.prototype.onTokenRefresh = function (nextOrObserver, optError, optCompleted) {
        throw this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_2__models_errors__["a" /* default */].codes.AVAILABLE_IN_WINDOW);
    };
    //
    // The following methods are used by the service worker only.
    //
    /**
     * @export
     * @param {function(Object)} callback
     */
    ControllerInterface.prototype.setBackgroundMessageHandler = function (callback) {
        throw this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_2__models_errors__["a" /* default */].codes.AVAILABLE_IN_SW);
    };
    //
    // The following methods are used by the service themselves and not exposed
    // publicly or not expected to be used by developers.
    //
    /**
     * This method is required to adhere to the Firebase interface.
     * It closes any currently open indexdb database connections.
     */
    ControllerInterface.prototype.delete = function () {
        return Promise.all([
            this.tokenDetailsModel_.closeDatabase(),
            this.vapidDetailsModel_.closeDatabase()
        ]);
    };
    /**
     * Returns the current Notification Permission state.
     * @private
     * @return {string} The currenct permission state.
     */
    ControllerInterface.prototype.getNotificationPermission_ = function () {
        return Notification.permission;
    };
    ControllerInterface.prototype.getTokenDetailsModel = function () {
        return this.tokenDetailsModel_;
    };
    ControllerInterface.prototype.getVapidDetailsModel = function () {
        return this.vapidDetailsModel_;
    };
    /**
     * @protected
     * @returns {IIDModel}
     */
    ControllerInterface.prototype.getIIDModel = function () {
        return this.iidModel_;
    };
    return ControllerInterface;
}());
/* harmony default export */ __webpack_exports__["a"] = (ControllerInterface);

//# sourceMappingURL=controller-interface.js.map


/***/ }),

/***/ 470:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__firebase_util__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__firebase_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__firebase_util__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__errors__ = __webpack_require__(456);
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



var DBInterface = /** @class */ (function () {
    /**
     * @param {string} dbName
     * @param {number} dbVersion
     */
    function DBInterface(dbName, dbVersion) {
        this.errorFactory_ = new __WEBPACK_IMPORTED_MODULE_0__firebase_util__["ErrorFactory"]('messaging', 'Messaging', __WEBPACK_IMPORTED_MODULE_1__errors__["a" /* default */].map);
        this.DB_NAME_ = dbName;
        this.dbVersion_ = dbVersion;
        this.openDbPromise_ = null;
        this.TRANSACTION_READ_WRITE = 'readwrite';
    }
    /**
     * Get the indexedDB as a promsie.
     * @protected
     * @return {!Promise<!IDBDatabase>} The IndexedDB database
     */
    DBInterface.prototype.openDatabase = function () {
        var _this = this;
        if (this.openDbPromise_) {
            return this.openDbPromise_;
        }
        this.openDbPromise_ = new Promise(function (resolve, reject) {
            var request = indexedDB.open(_this.DB_NAME_, _this.dbVersion_);
            request.onerror = function (event) {
                reject(event.target.error);
            };
            request.onsuccess = function (event) {
                resolve(event.target.result);
            };
            request.onupgradeneeded = function (event) {
                try {
                    var db = event.target.result;
                    _this.onDBUpgrade(db, event);
                }
                catch (err) {
                    // close the database as it can't be used.
                    db.close();
                    reject(err);
                }
            };
        });
        return this.openDbPromise_;
    };
    /**
     * Close the currently open database.
     * @return {!Promise} Returns the result of the promise chain.
     */
    DBInterface.prototype.closeDatabase = function () {
        var _this = this;
        return Promise.resolve().then(function () {
            if (_this.openDbPromise_) {
                return _this.openDbPromise_.then(function (db) {
                    db.close();
                    _this.openDbPromise_ = null;
                });
            }
        });
    };
    /**
     * @protected
     * @param {!IDBDatabase} db
     */
    DBInterface.prototype.onDBUpgrade = function (db, event) {
        throw this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__errors__["a" /* default */].codes.SHOULD_BE_INHERITED);
    };
    return DBInterface;
}());
/* harmony default export */ __webpack_exports__["a"] = (DBInterface);

//# sourceMappingURL=db-interface.js.map


/***/ }),

/***/ 471:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__firebase_util__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__firebase_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__firebase_util__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__errors__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_array_buffer_to_base64__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fcm_details__ = __webpack_require__(464);
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */





var IIDModel = /** @class */ (function () {
    function IIDModel() {
        this.errorFactory_ = new __WEBPACK_IMPORTED_MODULE_0__firebase_util__["ErrorFactory"]('messaging', 'Messaging', __WEBPACK_IMPORTED_MODULE_1__errors__["a" /* default */].map);
    }
    /**
     * Given a PushSubscription and messagingSenderId, get an FCM token.
     * @public
     * @param  {string} senderId The 'messagingSenderId' to tie the token to.
     * @param  {PushSubscription} subscription The PushSusbcription to "federate".
     * @param  {Uint8Array} publicVapidKey The public VAPID key.
     * @return {Promise<!Object>} Returns the FCM token to be used in place
     * of the PushSubscription.
     */
    IIDModel.prototype.getToken = function (senderId, subscription, publicVapidKey) {
        var _this = this;
        var p256dh = Object(__WEBPACK_IMPORTED_MODULE_2__helpers_array_buffer_to_base64__["a" /* default */])(subscription['getKey']('p256dh'));
        var auth = Object(__WEBPACK_IMPORTED_MODULE_2__helpers_array_buffer_to_base64__["a" /* default */])(subscription['getKey']('auth'));
        var fcmSubscribeBody = "authorized_entity=" + senderId + "&" +
            ("endpoint=" + subscription.endpoint + "&") +
            ("encryption_key=" + p256dh + "&") +
            ("encryption_auth=" + auth);
        if (publicVapidKey !== __WEBPACK_IMPORTED_MODULE_3__fcm_details__["a" /* default */].DEFAULT_PUBLIC_VAPID_KEY) {
            var applicationPubKey = Object(__WEBPACK_IMPORTED_MODULE_2__helpers_array_buffer_to_base64__["a" /* default */])(publicVapidKey);
            fcmSubscribeBody += "&application_pub_key=" + applicationPubKey;
        }
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var subscribeOptions = {
            method: 'POST',
            headers: headers,
            body: fcmSubscribeBody
        };
        return fetch(__WEBPACK_IMPORTED_MODULE_3__fcm_details__["a" /* default */].ENDPOINT + '/fcm/connect/subscribe', subscribeOptions)
            .then(function (response) { return response.json(); })
            .catch(function () {
            throw _this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__errors__["a" /* default */].codes.TOKEN_SUBSCRIBE_FAILED);
        })
            .then(function (response) {
            var fcmTokenResponse = response;
            if (fcmTokenResponse['error']) {
                var message = fcmTokenResponse['error']['message'];
                throw _this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__errors__["a" /* default */].codes.TOKEN_SUBSCRIBE_FAILED, {
                    message: message
                });
            }
            if (!fcmTokenResponse['token']) {
                throw _this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__errors__["a" /* default */].codes.TOKEN_SUBSCRIBE_NO_TOKEN);
            }
            if (!fcmTokenResponse['pushSet']) {
                throw _this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__errors__["a" /* default */].codes.TOKEN_SUBSCRIBE_NO_PUSH_SET);
            }
            return {
                token: fcmTokenResponse['token'],
                pushSet: fcmTokenResponse['pushSet']
            };
        });
    };
    /**
     * Update the underlying token details for fcmToken.
     */
    IIDModel.prototype.updateToken = function (senderId, fcmToken, fcmPushSet, subscription, publicVapidKey) {
        var _this = this;
        var p256dh = Object(__WEBPACK_IMPORTED_MODULE_2__helpers_array_buffer_to_base64__["a" /* default */])(subscription['getKey']('p256dh'));
        var auth = Object(__WEBPACK_IMPORTED_MODULE_2__helpers_array_buffer_to_base64__["a" /* default */])(subscription['getKey']('auth'));
        var fcmUpdateBody = "push_set=" + fcmPushSet + "&" +
            ("token=" + fcmToken + "&") +
            ("authorized_entity=" + senderId + "&") +
            ("endpoint=" + subscription.endpoint + "&") +
            ("encryption_key=" + p256dh + "&") +
            ("encryption_auth=" + auth);
        if (publicVapidKey !== __WEBPACK_IMPORTED_MODULE_3__fcm_details__["a" /* default */].DEFAULT_PUBLIC_VAPID_KEY) {
            var applicationPubKey = Object(__WEBPACK_IMPORTED_MODULE_2__helpers_array_buffer_to_base64__["a" /* default */])(publicVapidKey);
            fcmUpdateBody += "&application_pub_key=" + applicationPubKey;
        }
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var updateOptions = {
            method: 'POST',
            headers: headers,
            body: fcmUpdateBody
        };
        var updateFetchRes;
        return fetch(__WEBPACK_IMPORTED_MODULE_3__fcm_details__["a" /* default */].ENDPOINT + '/fcm/connect/subscribe', updateOptions)
            .then(function (fetchResponse) {
            updateFetchRes = fetchResponse;
            return fetchResponse.json();
        })
            .catch(function () {
            throw _this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__errors__["a" /* default */].codes.TOKEN_UPDATE_FAILED);
        })
            .then(function (fcmTokenResponse) {
            if (!updateFetchRes.ok) {
                var message = fcmTokenResponse['error']['message'];
                throw _this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__errors__["a" /* default */].codes.TOKEN_UPDATE_FAILED, {
                    message: message
                });
            }
            if (!fcmTokenResponse['token']) {
                throw _this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__errors__["a" /* default */].codes.TOKEN_UPDATE_NO_TOKEN);
            }
            return fcmTokenResponse['token'];
        });
    };
    /**
     * Given a fcmToken, pushSet and messagingSenderId, delete an FCM token.
     */
    IIDModel.prototype.deleteToken = function (senderId, fcmToken, fcmPushSet) {
        var _this = this;
        var fcmUnsubscribeBody = "authorized_entity=" + senderId + "&" +
            ("token=" + fcmToken + "&") +
            ("pushSet=" + fcmPushSet);
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var unsubscribeOptions = {
            method: 'POST',
            headers: headers,
            body: fcmUnsubscribeBody
        };
        return fetch(__WEBPACK_IMPORTED_MODULE_3__fcm_details__["a" /* default */].ENDPOINT + '/fcm/connect/unsubscribe', unsubscribeOptions).then(function (fetchResponse) {
            if (!fetchResponse.ok) {
                return fetchResponse.json().then(function (fcmTokenResponse) {
                    if (fcmTokenResponse['error']) {
                        var message = fcmTokenResponse['error']['message'];
                        throw _this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__errors__["a" /* default */].codes.TOKEN_UNSUBSCRIBE_FAILED, {
                            message: message
                        });
                    }
                }, function (err) {
                    throw _this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__errors__["a" /* default */].codes.TOKEN_UNSUBSCRIBE_FAILED);
                });
            }
        });
    };
    return IIDModel;
}());
/* harmony default export */ __webpack_exports__["a"] = (IIDModel);

//# sourceMappingURL=iid-model.js.map


/***/ }),

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* harmony default export */ __webpack_exports__["a"] = ({
    granted: 'granted',
    default: 'default',
    denied: 'denied'
});

//# sourceMappingURL=notification-permission.js.map


/***/ }),

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// These fields are strings to prevent closure from thinking goog.getMsg
// should be used to initialise the values
var PARAMS = {
    TYPE_OF_MSG: 'firebase-messaging-msg-type',
    DATA: 'firebase-messaging-msg-data'
};
// This value isn't using the TYPE_OF_MSG short hand as closure
// expects the variable to be defined via goog.getMsg
var msgType = {
    PUSH_MSG_RECEIVED: 'push-msg-received',
    NOTIFICATION_CLICKED: 'notification-clicked'
};
var createNewMsg = function (msgType, msgData) {
    var message = (_a = {},
        _a[PARAMS.TYPE_OF_MSG] = msgType,
        _a[PARAMS.DATA] = msgData,
        _a);
    return message;
    var _a;
};
/* harmony default export */ __webpack_exports__["a"] = ({
    PARAMS: PARAMS,
    TYPES_OF_MSG: msgType,
    createNewMsg: createNewMsg
});

//# sourceMappingURL=worker-page-message.js.map


/***/ }),

/***/ 474:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorCode; });
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @enum{number}
 */
var ErrorCode;
(function (ErrorCode) {
    ErrorCode[ErrorCode["NO_ERROR"] = 0] = "NO_ERROR";
    ErrorCode[ErrorCode["NETWORK_ERROR"] = 1] = "NETWORK_ERROR";
    ErrorCode[ErrorCode["ABORT"] = 2] = "ABORT";
})(ErrorCode || (ErrorCode = {}));

//# sourceMappingURL=xhrio.js.map


/***/ }),

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Reference; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__implementation_args__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__implementation_blob__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__implementation_error__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__implementation_location__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__implementation_metadata__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__implementation_object__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__implementation_path__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__implementation_requests__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__implementation_string__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__implementation_type__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__task__ = __webpack_require__(507);
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @fileoverview Defines the Firebase Storage Reference class.
 */












/**
 * Provides methods to interact with a bucket in the Firebase Storage service.
 * @param location An fbs.location, or the URL at
 *     which to base this object, in one of the following forms:
 *         gs://<bucket>/<object-path>
 *         http[s]://firebasestorage.googleapis.com/
 *                     <api-version>/b/<bucket>/o/<object-path>
 *     Any query or fragment strings will be ignored in the http[s]
 *     format. If no value is passed, the storage object will use a URL based on
 *     the project ID of the base firebase.App instance.
 */
var Reference = /** @class */ (function () {
    function Reference(authWrapper, location) {
        this.authWrapper = authWrapper;
        if (location instanceof __WEBPACK_IMPORTED_MODULE_3__implementation_location__["a" /* Location */]) {
            this.location = location;
        }
        else {
            this.location = __WEBPACK_IMPORTED_MODULE_3__implementation_location__["a" /* Location */].makeFromUrl(location);
        }
    }
    /**
     * @return The URL for the bucket and path this object references,
     *     in the form gs://<bucket>/<object-path>
     * @override
     */
    Reference.prototype.toString = function () {
        __WEBPACK_IMPORTED_MODULE_0__implementation_args__["g" /* validate */]('toString', [], arguments);
        return 'gs://' + this.location.bucket + '/' + this.location.path;
    };
    Reference.prototype.newRef = function (authWrapper, location) {
        return new Reference(authWrapper, location);
    };
    Reference.prototype.mappings = function () {
        return __WEBPACK_IMPORTED_MODULE_4__implementation_metadata__["b" /* getMappings */]();
    };
    /**
     * @return A reference to the object obtained by
     *     appending childPath, removing any duplicate, beginning, or trailing
     *     slashes.
     */
    Reference.prototype.child = function (childPath) {
        __WEBPACK_IMPORTED_MODULE_0__implementation_args__["g" /* validate */]('child', [__WEBPACK_IMPORTED_MODULE_0__implementation_args__["e" /* stringSpec */]()], arguments);
        var newPath = __WEBPACK_IMPORTED_MODULE_6__implementation_path__["a" /* child */](this.location.path, childPath);
        var location = new __WEBPACK_IMPORTED_MODULE_3__implementation_location__["a" /* Location */](this.location.bucket, newPath);
        return this.newRef(this.authWrapper, location);
    };
    Object.defineProperty(Reference.prototype, "parent", {
        /**
         * @return A reference to the parent of the
         *     current object, or null if the current object is the root.
         */
        get: function () {
            var newPath = __WEBPACK_IMPORTED_MODULE_6__implementation_path__["c" /* parent */](this.location.path);
            if (newPath === null) {
                return null;
            }
            var location = new __WEBPACK_IMPORTED_MODULE_3__implementation_location__["a" /* Location */](this.location.bucket, newPath);
            return this.newRef(this.authWrapper, location);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Reference.prototype, "root", {
        /**
         * @return An reference to the root of this
         *     object's bucket.
         */
        get: function () {
            var location = new __WEBPACK_IMPORTED_MODULE_3__implementation_location__["a" /* Location */](this.location.bucket, '');
            return this.newRef(this.authWrapper, location);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Reference.prototype, "bucket", {
        get: function () {
            return this.location.bucket;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Reference.prototype, "fullPath", {
        get: function () {
            return this.location.path;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Reference.prototype, "name", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_6__implementation_path__["b" /* lastComponent */](this.location.path);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Reference.prototype, "storage", {
        get: function () {
            return this.authWrapper.service();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Uploads a blob to this object's location.
     * @param data The blob to upload.
     * @return An UploadTask that lets you control and
     *     observe the upload.
     */
    Reference.prototype.put = function (data, metadata) {
        if (metadata === void 0) { metadata = null; }
        __WEBPACK_IMPORTED_MODULE_0__implementation_args__["g" /* validate */]('put', [__WEBPACK_IMPORTED_MODULE_0__implementation_args__["f" /* uploadDataSpec */](), __WEBPACK_IMPORTED_MODULE_0__implementation_args__["b" /* metadataSpec */](true)], arguments);
        this.throwIfRoot_('put');
        return new __WEBPACK_IMPORTED_MODULE_10__task__["a" /* UploadTask */](this, this.authWrapper, this.location, this.mappings(), new __WEBPACK_IMPORTED_MODULE_1__implementation_blob__["a" /* FbsBlob */](data), metadata);
    };
    /**
     * Uploads a string to this object's location.
     * @param string The string to upload.
     * @param opt_format The format of the string to upload.
     * @return An UploadTask that lets you control and
     *     observe the upload.
     */
    Reference.prototype.putString = function (string, format, opt_metadata) {
        if (format === void 0) { format = __WEBPACK_IMPORTED_MODULE_8__implementation_string__["a" /* StringFormat */].RAW; }
        __WEBPACK_IMPORTED_MODULE_0__implementation_args__["g" /* validate */]('putString', [
            __WEBPACK_IMPORTED_MODULE_0__implementation_args__["e" /* stringSpec */](),
            __WEBPACK_IMPORTED_MODULE_0__implementation_args__["e" /* stringSpec */](__WEBPACK_IMPORTED_MODULE_8__implementation_string__["c" /* formatValidator */], true),
            __WEBPACK_IMPORTED_MODULE_0__implementation_args__["b" /* metadataSpec */](true)
        ], arguments);
        this.throwIfRoot_('putString');
        var data = __WEBPACK_IMPORTED_MODULE_8__implementation_string__["b" /* dataFromString */](format, string);
        var metadata = __WEBPACK_IMPORTED_MODULE_5__implementation_object__["a" /* clone */](opt_metadata);
        if (!__WEBPACK_IMPORTED_MODULE_9__implementation_type__["a" /* isDef */](metadata['contentType']) && __WEBPACK_IMPORTED_MODULE_9__implementation_type__["a" /* isDef */](data.contentType)) {
            metadata['contentType'] = data.contentType;
        }
        return new __WEBPACK_IMPORTED_MODULE_10__task__["a" /* UploadTask */](this, this.authWrapper, this.location, this.mappings(), new __WEBPACK_IMPORTED_MODULE_1__implementation_blob__["a" /* FbsBlob */](data.data, true), metadata);
    };
    /**
     * Deletes the object at this location.
     * @return A promise that resolves if the deletion succeeds.
     */
    Reference.prototype.delete = function () {
        __WEBPACK_IMPORTED_MODULE_0__implementation_args__["g" /* validate */]('delete', [], arguments);
        this.throwIfRoot_('delete');
        var self = this;
        return this.authWrapper.getAuthToken().then(function (authToken) {
            var requestInfo = __WEBPACK_IMPORTED_MODULE_7__implementation_requests__["d" /* deleteObject */](self.authWrapper, self.location);
            return self.authWrapper.makeRequest(requestInfo, authToken).getPromise();
        });
    };
    /**
     *     A promise that resolves with the metadata for this object. If this
     *     object doesn't exist or metadata cannot be retreived, the promise is
     *     rejected.
     */
    Reference.prototype.getMetadata = function () {
        __WEBPACK_IMPORTED_MODULE_0__implementation_args__["g" /* validate */]('getMetadata', [], arguments);
        this.throwIfRoot_('getMetadata');
        var self = this;
        return this.authWrapper.getAuthToken().then(function (authToken) {
            var requestInfo = __WEBPACK_IMPORTED_MODULE_7__implementation_requests__["e" /* getMetadata */](self.authWrapper, self.location, self.mappings());
            return self.authWrapper.makeRequest(requestInfo, authToken).getPromise();
        });
    };
    /**
     * Updates the metadata for this object.
     * @param metadata The new metadata for the object.
     *     Only values that have been explicitly set will be changed. Explicitly
     *     setting a value to null will remove the metadata.
     * @return A promise that resolves
     *     with the new metadata for this object.
     *     @see firebaseStorage.Reference.prototype.getMetadata
     */
    Reference.prototype.updateMetadata = function (metadata) {
        __WEBPACK_IMPORTED_MODULE_0__implementation_args__["g" /* validate */]('updateMetadata', [__WEBPACK_IMPORTED_MODULE_0__implementation_args__["b" /* metadataSpec */]()], arguments);
        this.throwIfRoot_('updateMetadata');
        var self = this;
        return this.authWrapper.getAuthToken().then(function (authToken) {
            var requestInfo = __WEBPACK_IMPORTED_MODULE_7__implementation_requests__["i" /* updateMetadata */](self.authWrapper, self.location, metadata, self.mappings());
            return self.authWrapper.makeRequest(requestInfo, authToken).getPromise();
        });
    };
    /**
     * @return A promise that resolves with the download
     *     URL for this object.
     */
    Reference.prototype.getDownloadURL = function () {
        __WEBPACK_IMPORTED_MODULE_0__implementation_args__["g" /* validate */]('getDownloadURL', [], arguments);
        this.throwIfRoot_('getDownloadURL');
        return this.getMetadata().then(function (metadata) {
            var url = metadata['downloadURLs'][0];
            if (__WEBPACK_IMPORTED_MODULE_9__implementation_type__["a" /* isDef */](url)) {
                return url;
            }
            else {
                throw __WEBPACK_IMPORTED_MODULE_2__implementation_error__["l" /* noDownloadURL */]();
            }
        });
    };
    Reference.prototype.throwIfRoot_ = function (name) {
        if (this.location.path === '') {
            throw __WEBPACK_IMPORTED_MODULE_2__implementation_error__["j" /* invalidRootOperation */](name);
        }
    };
    return Reference;
}());


//# sourceMappingURL=reference.js.map


/***/ }),

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = parent;
/* harmony export (immutable) */ __webpack_exports__["a"] = child;
/* harmony export (immutable) */ __webpack_exports__["b"] = lastComponent;
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @fileoverview Contains helper methods for manipulating paths.
 */
/**
 * @return Null if the path is already at the root.
 */
function parent(path) {
    if (path.length == 0) {
        return null;
    }
    var index = path.lastIndexOf('/');
    if (index === -1) {
        return '';
    }
    var newPath = path.slice(0, index);
    return newPath;
}
function child(path, childPath) {
    var canonicalChildPath = childPath
        .split('/')
        .filter(function (component) {
        return component.length > 0;
    })
        .join('/');
    if (path.length === 0) {
        return canonicalChildPath;
    }
    else {
        return path + '/' + canonicalChildPath;
    }
}
/**
 * Returns the last component of a path.
 * '/foo/bar' -> 'bar'
 * '/foo/bar/baz/' -> 'baz/'
 * '/a' -> 'a'
 */
function lastComponent(path) {
    var index = path.lastIndexOf('/', path.length - 2);
    if (index === -1) {
        return path;
    }
    else {
        return path.slice(index + 1);
    }
}

//# sourceMappingURL=path.js.map


/***/ }),

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FbsBlob; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fs__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__string__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__type__ = __webpack_require__(454);
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @file Provides a Blob-like wrapper for various binary types (including the
 * native Blob type). This makes it possible to upload types like ArrayBuffers,
 * making uploads possible in environments without the native Blob type.
 */




/**
 * @param opt_elideCopy If true, doesn't copy mutable input data
 *     (e.g. Uint8Arrays). Pass true only if you know the objects will not be
 *     modified after this blob's construction.
 */
var FbsBlob = /** @class */ (function () {
    function FbsBlob(data, opt_elideCopy) {
        var size = 0;
        var blobType = '';
        if (__WEBPACK_IMPORTED_MODULE_2__type__["d" /* isNativeBlob */](data)) {
            this.data_ = data;
            size = data.size;
            blobType = data.type;
        }
        else if (data instanceof ArrayBuffer) {
            if (opt_elideCopy) {
                this.data_ = new Uint8Array(data);
            }
            else {
                this.data_ = new Uint8Array(data.byteLength);
                this.data_.set(new Uint8Array(data));
            }
            size = this.data_.length;
        }
        else if (data instanceof Uint8Array) {
            if (opt_elideCopy) {
                this.data_ = data;
            }
            else {
                this.data_ = new Uint8Array(data.length);
                this.data_.set(data);
            }
            size = data.length;
        }
        this.size_ = size;
        this.type_ = blobType;
    }
    FbsBlob.prototype.size = function () {
        return this.size_;
    };
    FbsBlob.prototype.type = function () {
        return this.type_;
    };
    FbsBlob.prototype.slice = function (startByte, endByte) {
        if (__WEBPACK_IMPORTED_MODULE_2__type__["d" /* isNativeBlob */](this.data_)) {
            var realBlob = this.data_;
            var sliced = __WEBPACK_IMPORTED_MODULE_0__fs__["b" /* sliceBlob */](realBlob, startByte, endByte);
            if (sliced === null) {
                return null;
            }
            return new FbsBlob(sliced);
        }
        else {
            var slice = new Uint8Array(this.data_.buffer, startByte, endByte - startByte);
            return new FbsBlob(slice, true);
        }
    };
    FbsBlob.getBlob = function () {
        var var_args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            var_args[_i] = arguments[_i];
        }
        if (__WEBPACK_IMPORTED_MODULE_2__type__["e" /* isNativeBlobDefined */]()) {
            var blobby = var_args.map(function (val) {
                if (val instanceof FbsBlob) {
                    return val.data_;
                }
                else {
                    return val;
                }
            });
            return new FbsBlob(__WEBPACK_IMPORTED_MODULE_0__fs__["a" /* getBlob */].apply(null, blobby));
        }
        else {
            var uint8Arrays = var_args.map(function (val) {
                if (__WEBPACK_IMPORTED_MODULE_2__type__["j" /* isString */](val)) {
                    return __WEBPACK_IMPORTED_MODULE_1__string__["b" /* dataFromString */](__WEBPACK_IMPORTED_MODULE_1__string__["a" /* StringFormat */].RAW, val).data;
                }
                else {
                    // Blobs don't exist, so this has to be a Uint8Array.
                    return val.data_;
                }
            });
            var finalLength_1 = 0;
            uint8Arrays.forEach(function (array) {
                finalLength_1 += array.byteLength;
            });
            var merged_1 = new Uint8Array(finalLength_1);
            var index_1 = 0;
            uint8Arrays.forEach(function (array) {
                for (var i = 0; i < array.length; i++) {
                    merged_1[index_1++] = array[i];
                }
            });
            return new FbsBlob(merged_1, true);
        }
    };
    FbsBlob.prototype.uploadData = function () {
        return this.data_;
    };
    return FbsBlob;
}());


//# sourceMappingURL=blob.js.map


/***/ }),

/***/ 478:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export handlerCheck */
/* unused harmony export metadataHandler */
/* unused harmony export sharedErrorHandler */
/* unused harmony export objectErrorHandler */
/* harmony export (immutable) */ __webpack_exports__["e"] = getMetadata;
/* harmony export (immutable) */ __webpack_exports__["i"] = updateMetadata;
/* harmony export (immutable) */ __webpack_exports__["d"] = deleteObject;
/* unused harmony export determineContentType_ */
/* unused harmony export metadataForUpload_ */
/* harmony export (immutable) */ __webpack_exports__["g"] = multipartUpload;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResumableUploadStatus; });
/* unused harmony export checkResumeHeader_ */
/* harmony export (immutable) */ __webpack_exports__["c"] = createResumableUpload;
/* harmony export (immutable) */ __webpack_exports__["f"] = getResumableUploadStatus;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return resumableUploadChunkSize; });
/* harmony export (immutable) */ __webpack_exports__["b"] = continueResumableUpload;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__blob__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__error__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__metadata__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__object__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__requestinfo__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__type__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__url__ = __webpack_require__(467);
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */








/**
 * Throws the UNKNOWN FirebaseStorageError if cndn is false.
 */
function handlerCheck(cndn) {
    if (!cndn) {
        throw __WEBPACK_IMPORTED_MODULE_2__error__["s" /* unknown */]();
    }
}
function metadataHandler(authWrapper, mappings) {
    function handler(xhr, text) {
        var metadata = __WEBPACK_IMPORTED_MODULE_3__metadata__["a" /* fromResourceString */](authWrapper, text, mappings);
        handlerCheck(metadata !== null);
        return metadata;
    }
    return handler;
}
function sharedErrorHandler(location) {
    function errorHandler(xhr, err) {
        var newErr;
        if (xhr.getStatus() === 401) {
            newErr = __WEBPACK_IMPORTED_MODULE_2__error__["q" /* unauthenticated */]();
        }
        else {
            if (xhr.getStatus() === 402) {
                newErr = __WEBPACK_IMPORTED_MODULE_2__error__["n" /* quotaExceeded */](location.bucket);
            }
            else {
                if (xhr.getStatus() === 403) {
                    newErr = __WEBPACK_IMPORTED_MODULE_2__error__["r" /* unauthorized */](location.path);
                }
                else {
                    newErr = err;
                }
            }
        }
        newErr.setServerResponseProp(err.serverResponseProp());
        return newErr;
    }
    return errorHandler;
}
function objectErrorHandler(location) {
    var shared = sharedErrorHandler(location);
    function errorHandler(xhr, err) {
        var newErr = shared(xhr, err);
        if (xhr.getStatus() === 404) {
            newErr = __WEBPACK_IMPORTED_MODULE_2__error__["m" /* objectNotFound */](location.path);
        }
        newErr.setServerResponseProp(err.serverResponseProp());
        return newErr;
    }
    return errorHandler;
}
function getMetadata(authWrapper, location, mappings) {
    var urlPart = location.fullServerUrl();
    var url = __WEBPACK_IMPORTED_MODULE_7__url__["b" /* makeNormalUrl */](urlPart);
    var method = 'GET';
    var timeout = authWrapper.maxOperationRetryTime();
    var requestInfo = new __WEBPACK_IMPORTED_MODULE_5__requestinfo__["a" /* RequestInfo */](url, method, metadataHandler(authWrapper, mappings), timeout);
    requestInfo.errorHandler = objectErrorHandler(location);
    return requestInfo;
}
function updateMetadata(authWrapper, location, metadata, mappings) {
    var urlPart = location.fullServerUrl();
    var url = __WEBPACK_IMPORTED_MODULE_7__url__["b" /* makeNormalUrl */](urlPart);
    var method = 'PATCH';
    var body = __WEBPACK_IMPORTED_MODULE_3__metadata__["d" /* toResourceString */](metadata, mappings);
    var headers = { 'Content-Type': 'application/json; charset=utf-8' };
    var timeout = authWrapper.maxOperationRetryTime();
    var requestInfo = new __WEBPACK_IMPORTED_MODULE_5__requestinfo__["a" /* RequestInfo */](url, method, metadataHandler(authWrapper, mappings), timeout);
    requestInfo.headers = headers;
    requestInfo.body = body;
    requestInfo.errorHandler = objectErrorHandler(location);
    return requestInfo;
}
function deleteObject(authWrapper, location) {
    var urlPart = location.fullServerUrl();
    var url = __WEBPACK_IMPORTED_MODULE_7__url__["b" /* makeNormalUrl */](urlPart);
    var method = 'DELETE';
    var timeout = authWrapper.maxOperationRetryTime();
    function handler(xhr, text) { }
    var requestInfo = new __WEBPACK_IMPORTED_MODULE_5__requestinfo__["a" /* RequestInfo */](url, method, handler, timeout);
    requestInfo.successCodes = [200, 204];
    requestInfo.errorHandler = objectErrorHandler(location);
    return requestInfo;
}
function determineContentType_(metadata, blob) {
    return ((metadata && metadata['contentType']) ||
        (blob && blob.type()) ||
        'application/octet-stream');
}
function metadataForUpload_(location, blob, opt_metadata) {
    var metadata = __WEBPACK_IMPORTED_MODULE_4__object__["a" /* clone */](opt_metadata);
    metadata['fullPath'] = location.path;
    metadata['size'] = blob.size();
    if (!metadata['contentType']) {
        metadata['contentType'] = determineContentType_(null, blob);
    }
    return metadata;
}
function multipartUpload(authWrapper, location, mappings, blob, opt_metadata) {
    var urlPart = location.bucketOnlyServerUrl();
    var headers = {
        'X-Goog-Upload-Protocol': 'multipart'
    };
    function genBoundary() {
        var str = '';
        for (var i = 0; i < 2; i++) {
            str =
                str +
                    Math.random()
                        .toString()
                        .slice(2);
        }
        return str;
    }
    var boundary = genBoundary();
    headers['Content-Type'] = 'multipart/related; boundary=' + boundary;
    var metadata = metadataForUpload_(location, blob, opt_metadata);
    var metadataString = __WEBPACK_IMPORTED_MODULE_3__metadata__["d" /* toResourceString */](metadata, mappings);
    var preBlobPart = '--' +
        boundary +
        '\r\n' +
        'Content-Type: application/json; charset=utf-8\r\n\r\n' +
        metadataString +
        '\r\n--' +
        boundary +
        '\r\n' +
        'Content-Type: ' +
        metadata['contentType'] +
        '\r\n\r\n';
    var postBlobPart = '\r\n--' + boundary + '--';
    var body = __WEBPACK_IMPORTED_MODULE_1__blob__["a" /* FbsBlob */].getBlob(preBlobPart, blob, postBlobPart);
    if (body === null) {
        throw __WEBPACK_IMPORTED_MODULE_2__error__["d" /* cannotSliceBlob */]();
    }
    var urlParams = { name: metadata['fullPath'] };
    var url = __WEBPACK_IMPORTED_MODULE_7__url__["d" /* makeUploadUrl */](urlPart);
    var method = 'POST';
    var timeout = authWrapper.maxUploadRetryTime();
    var requestInfo = new __WEBPACK_IMPORTED_MODULE_5__requestinfo__["a" /* RequestInfo */](url, method, metadataHandler(authWrapper, mappings), timeout);
    requestInfo.urlParams = urlParams;
    requestInfo.headers = headers;
    requestInfo.body = body.uploadData();
    requestInfo.errorHandler = sharedErrorHandler(location);
    return requestInfo;
}
/**
 * @param current The number of bytes that have been uploaded so far.
 * @param total The total number of bytes in the upload.
 * @param opt_finalized True if the server has finished the upload.
 * @param opt_metadata The upload metadata, should
 *     only be passed if opt_finalized is true.
 * @struct
 */
var ResumableUploadStatus = /** @class */ (function () {
    function ResumableUploadStatus(current, total, finalized, metadata) {
        this.current = current;
        this.total = total;
        this.finalized = !!finalized;
        this.metadata = metadata || null;
    }
    return ResumableUploadStatus;
}());

function checkResumeHeader_(xhr, opt_allowed) {
    var status;
    try {
        status = xhr.getResponseHeader('X-Goog-Upload-Status');
    }
    catch (e) {
        handlerCheck(false);
    }
    var allowed = opt_allowed || ['active'];
    handlerCheck(__WEBPACK_IMPORTED_MODULE_0__array__["b" /* contains */](allowed, status));
    return status;
}
function createResumableUpload(authWrapper, location, mappings, blob, opt_metadata) {
    var urlPart = location.bucketOnlyServerUrl();
    var metadata = metadataForUpload_(location, blob, opt_metadata);
    var urlParams = { name: metadata['fullPath'] };
    var url = __WEBPACK_IMPORTED_MODULE_7__url__["d" /* makeUploadUrl */](urlPart);
    var method = 'POST';
    var headers = {
        'X-Goog-Upload-Protocol': 'resumable',
        'X-Goog-Upload-Command': 'start',
        'X-Goog-Upload-Header-Content-Length': blob.size(),
        'X-Goog-Upload-Header-Content-Type': metadata['contentType'],
        'Content-Type': 'application/json; charset=utf-8'
    };
    var body = __WEBPACK_IMPORTED_MODULE_3__metadata__["d" /* toResourceString */](metadata, mappings);
    var timeout = authWrapper.maxUploadRetryTime();
    function handler(xhr, text) {
        checkResumeHeader_(xhr);
        var url;
        try {
            url = xhr.getResponseHeader('X-Goog-Upload-URL');
        }
        catch (e) {
            handlerCheck(false);
        }
        handlerCheck(__WEBPACK_IMPORTED_MODULE_6__type__["j" /* isString */](url));
        return url;
    }
    var requestInfo = new __WEBPACK_IMPORTED_MODULE_5__requestinfo__["a" /* RequestInfo */](url, method, handler, timeout);
    requestInfo.urlParams = urlParams;
    requestInfo.headers = headers;
    requestInfo.body = body;
    requestInfo.errorHandler = sharedErrorHandler(location);
    return requestInfo;
}
/**
 * @param url From a call to fbs.requests.createResumableUpload.
 */
function getResumableUploadStatus(authWrapper, location, url, blob) {
    var headers = { 'X-Goog-Upload-Command': 'query' };
    function handler(xhr, text) {
        var status = checkResumeHeader_(xhr, ['active', 'final']);
        var sizeString;
        try {
            sizeString = xhr.getResponseHeader('X-Goog-Upload-Size-Received');
        }
        catch (e) {
            handlerCheck(false);
        }
        var size = parseInt(sizeString, 10);
        handlerCheck(!isNaN(size));
        return new ResumableUploadStatus(size, blob.size(), status === 'final');
    }
    var method = 'POST';
    var timeout = authWrapper.maxUploadRetryTime();
    var requestInfo = new __WEBPACK_IMPORTED_MODULE_5__requestinfo__["a" /* RequestInfo */](url, method, handler, timeout);
    requestInfo.headers = headers;
    requestInfo.errorHandler = sharedErrorHandler(location);
    return requestInfo;
}
/**
 * Any uploads via the resumable upload API must transfer a number of bytes
 * that is a multiple of this number.
 */
var resumableUploadChunkSize = 256 * 1024;
/**
 * @param url From a call to fbs.requests.createResumableUpload.
 * @param chunkSize Number of bytes to upload.
 * @param opt_status The previous status.
 *     If not passed or null, we start from the beginning.
 * @throws fbs.Error If the upload is already complete, the passed in status
 *     has a final size inconsistent with the blob, or the blob cannot be sliced
 *     for upload.
 */
function continueResumableUpload(location, authWrapper, url, blob, chunkSize, mappings, opt_status, opt_progressCallback) {
    // TODO(andysoto): standardize on internal asserts
    // assert(!(opt_status && opt_status.finalized));
    var status = new ResumableUploadStatus(0, 0);
    if (opt_status) {
        status.current = opt_status.current;
        status.total = opt_status.total;
    }
    else {
        status.current = 0;
        status.total = blob.size();
    }
    if (blob.size() !== status.total) {
        throw __WEBPACK_IMPORTED_MODULE_2__error__["p" /* serverFileWrongSize */]();
    }
    var bytesLeft = status.total - status.current;
    var bytesToUpload = bytesLeft;
    if (chunkSize > 0) {
        bytesToUpload = Math.min(bytesToUpload, chunkSize);
    }
    var startByte = status.current;
    var endByte = startByte + bytesToUpload;
    var uploadCommand = bytesToUpload === bytesLeft ? 'upload, finalize' : 'upload';
    var headers = {
        'X-Goog-Upload-Command': uploadCommand,
        'X-Goog-Upload-Offset': status.current
    };
    var body = blob.slice(startByte, endByte);
    if (body === null) {
        throw __WEBPACK_IMPORTED_MODULE_2__error__["d" /* cannotSliceBlob */]();
    }
    function handler(xhr, text) {
        // TODO(andysoto): Verify the MD5 of each uploaded range:
        // the 'x-range-md5' header comes back with status code 308 responses.
        // We'll only be able to bail out though, because you can't re-upload a
        // range that you previously uploaded.
        var uploadStatus = checkResumeHeader_(xhr, ['active', 'final']);
        var newCurrent = status.current + bytesToUpload;
        var size = blob.size();
        var metadata;
        if (uploadStatus === 'final') {
            metadata = metadataHandler(authWrapper, mappings)(xhr, text);
        }
        else {
            metadata = null;
        }
        return new ResumableUploadStatus(newCurrent, size, uploadStatus === 'final', metadata);
    }
    var method = 'POST';
    var timeout = authWrapper.maxUploadRetryTime();
    var requestInfo = new __WEBPACK_IMPORTED_MODULE_5__requestinfo__["a" /* RequestInfo */](url, method, handler, timeout);
    requestInfo.headers = headers;
    requestInfo.body = body.uploadData();
    requestInfo.progressCallback = opt_progressCallback || null;
    requestInfo.errorHandler = sharedErrorHandler(location);
    return requestInfo;
}

//# sourceMappingURL=requests.js.map


/***/ }),

/***/ 479:
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var firebase = __webpack_require__(480);
__webpack_require__(488);
__webpack_require__(490);
__webpack_require__(491);
__webpack_require__(500);

module.exports = firebase;


/***/ }),

/***/ 480:
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

__webpack_require__(481);
module.exports = __webpack_require__(54).default;


/***/ }),

/***/ 481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_polyfills_promise__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_polyfills_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__src_polyfills_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_shims_Array__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_shims_Array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__src_shims_Array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_shims_String__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_shims_String___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__src_shims_String__);
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




//# sourceMappingURL=index.js.map


/***/ }),

/***/ 482:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __global = (function () {
    if (typeof global !== 'undefined') {
        return global;
    }
    if (typeof window !== 'undefined') {
        return window;
    }
    if (typeof self !== 'undefined') {
        return self;
    }
    throw new Error('unable to locate global object');
})();
// Polyfill Promise
if (typeof Promise === 'undefined') {
    // HACK: TS throws an error if I attempt to use 'dot-notation'
    __global['Promise'] = Promise = __webpack_require__(483);
}

//# sourceMappingURL=promise.js.map

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(132)))

/***/ }),

/***/ 483:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(setImmediate) {

// Store setTimeout reference so promise-polyfill will be unaffected by
// other code modifying setTimeout (like sinon.useFakeTimers())
var setTimeoutFunc = setTimeout;

function noop() {}

// Polyfill for Function.prototype.bind
function bind(fn, thisArg) {
  return function() {
    fn.apply(thisArg, arguments);
  };
}

function Promise(fn) {
  if (!(this instanceof Promise))
    throw new TypeError('Promises must be constructed via new');
  if (typeof fn !== 'function') throw new TypeError('not a function');
  this._state = 0;
  this._handled = false;
  this._value = undefined;
  this._deferreds = [];

  doResolve(fn, this);
}

function handle(self, deferred) {
  while (self._state === 3) {
    self = self._value;
  }
  if (self._state === 0) {
    self._deferreds.push(deferred);
    return;
  }
  self._handled = true;
  Promise._immediateFn(function() {
    var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;
    if (cb === null) {
      (self._state === 1 ? resolve : reject)(deferred.promise, self._value);
      return;
    }
    var ret;
    try {
      ret = cb(self._value);
    } catch (e) {
      reject(deferred.promise, e);
      return;
    }
    resolve(deferred.promise, ret);
  });
}

function resolve(self, newValue) {
  try {
    // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
    if (newValue === self)
      throw new TypeError('A promise cannot be resolved with itself.');
    if (
      newValue &&
      (typeof newValue === 'object' || typeof newValue === 'function')
    ) {
      var then = newValue.then;
      if (newValue instanceof Promise) {
        self._state = 3;
        self._value = newValue;
        finale(self);
        return;
      } else if (typeof then === 'function') {
        doResolve(bind(then, newValue), self);
        return;
      }
    }
    self._state = 1;
    self._value = newValue;
    finale(self);
  } catch (e) {
    reject(self, e);
  }
}

function reject(self, newValue) {
  self._state = 2;
  self._value = newValue;
  finale(self);
}

function finale(self) {
  if (self._state === 2 && self._deferreds.length === 0) {
    Promise._immediateFn(function() {
      if (!self._handled) {
        Promise._unhandledRejectionFn(self._value);
      }
    });
  }

  for (var i = 0, len = self._deferreds.length; i < len; i++) {
    handle(self, self._deferreds[i]);
  }
  self._deferreds = null;
}

function Handler(onFulfilled, onRejected, promise) {
  this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
  this.onRejected = typeof onRejected === 'function' ? onRejected : null;
  this.promise = promise;
}

/**
 * Take a potentially misbehaving resolver function and make sure
 * onFulfilled and onRejected are only called once.
 *
 * Makes no guarantees about asynchrony.
 */
function doResolve(fn, self) {
  var done = false;
  try {
    fn(
      function(value) {
        if (done) return;
        done = true;
        resolve(self, value);
      },
      function(reason) {
        if (done) return;
        done = true;
        reject(self, reason);
      }
    );
  } catch (ex) {
    if (done) return;
    done = true;
    reject(self, ex);
  }
}

Promise.prototype['catch'] = function(onRejected) {
  return this.then(null, onRejected);
};

Promise.prototype.then = function(onFulfilled, onRejected) {
  var prom = new this.constructor(noop);

  handle(this, new Handler(onFulfilled, onRejected, prom));
  return prom;
};

Promise.prototype['finally'] = function(callback) {
  var constructor = this.constructor;
  return this.then(
    function(value) {
      return constructor.resolve(callback()).then(function() {
        return value;
      });
    },
    function(reason) {
      return constructor.resolve(callback()).then(function() {
        return constructor.reject(reason);
      });
    }
  );
};

Promise.all = function(arr) {
  return new Promise(function(resolve, reject) {
    if (!arr || typeof arr.length === 'undefined')
      throw new TypeError('Promise.all accepts an array');
    var args = Array.prototype.slice.call(arr);
    if (args.length === 0) return resolve([]);
    var remaining = args.length;

    function res(i, val) {
      try {
        if (val && (typeof val === 'object' || typeof val === 'function')) {
          var then = val.then;
          if (typeof then === 'function') {
            then.call(
              val,
              function(val) {
                res(i, val);
              },
              reject
            );
            return;
          }
        }
        args[i] = val;
        if (--remaining === 0) {
          resolve(args);
        }
      } catch (ex) {
        reject(ex);
      }
    }

    for (var i = 0; i < args.length; i++) {
      res(i, args[i]);
    }
  });
};

Promise.resolve = function(value) {
  if (value && typeof value === 'object' && value.constructor === Promise) {
    return value;
  }

  return new Promise(function(resolve) {
    resolve(value);
  });
};

Promise.reject = function(value) {
  return new Promise(function(resolve, reject) {
    reject(value);
  });
};

Promise.race = function(values) {
  return new Promise(function(resolve, reject) {
    for (var i = 0, len = values.length; i < len; i++) {
      values[i].then(resolve, reject);
    }
  });
};

// Use polyfill for setImmediate for performance gains
Promise._immediateFn =
  (typeof setImmediate === 'function' &&
    function(fn) {
      setImmediate(fn);
    }) ||
  function(fn) {
    setTimeoutFunc(fn, 0);
  };

Promise._unhandledRejectionFn = function _unhandledRejectionFn(err) {
  if (typeof console !== 'undefined' && console) {
    console.warn('Possible Unhandled Promise Rejection:', err); // eslint-disable-line no-console
  }
};

module.exports = Promise;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(484).setImmediate))

/***/ }),

/***/ 484:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = this;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(485);
// On some exotic environments, it's not clear which object `setimmeidate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(132)))

/***/ }),

/***/ 485:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(132), __webpack_require__(276)))

/***/ }),

/***/ 486:
/***/ (function(module, exports) {

/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * This is the Array.prototype.find polyfill from MDN
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
 * https://tc39.github.io/ecma262/#sec-array.prototype.find
 */
if (!Array.prototype.find) {
    Object.defineProperty(Array.prototype, 'find', {
        value: function (predicate) {
            // 1. Let O be ? ToObject(this value).
            if (this == null) {
                throw new TypeError('"this" is null or not defined');
            }
            var o = Object(this);
            // 2. Let len be ? ToLength(? Get(O, "length")).
            var len = o.length >>> 0;
            // 3. If IsCallable(predicate) is false, throw a TypeError exception.
            if (typeof predicate !== 'function') {
                throw new TypeError('predicate must be a function');
            }
            // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
            var thisArg = arguments[1];
            // 5. Let k be 0.
            var k = 0;
            // 6. Repeat, while k < len
            while (k < len) {
                // a. Let Pk be ! ToString(k).
                // b. Let kValue be ? Get(O, Pk).
                // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
                // d. If testResult is true, return kValue.
                var kValue = o[k];
                if (predicate.call(thisArg, kValue, k, o)) {
                    return kValue;
                }
                // e. Increase k by 1.
                k++;
            }
            // 7. Return undefined.
            return undefined;
        }
    });
}
/**
 * This is the Array.prototype.findIndex polyfill from MDN
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
 * https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
 */
if (!Array.prototype.findIndex) {
    Object.defineProperty(Array.prototype, 'findIndex', {
        value: function (predicate) {
            // 1. Let O be ? ToObject(this value).
            if (this == null) {
                throw new TypeError('"this" is null or not defined');
            }
            var o = Object(this);
            // 2. Let len be ? ToLength(? Get(O, "length")).
            var len = o.length >>> 0;
            // 3. If IsCallable(predicate) is false, throw a TypeError exception.
            if (typeof predicate !== 'function') {
                throw new TypeError('predicate must be a function');
            }
            // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
            var thisArg = arguments[1];
            // 5. Let k be 0.
            var k = 0;
            // 6. Repeat, while k < len
            while (k < len) {
                // a. Let Pk be ! ToString(k).
                // b. Let kValue be ? Get(O, Pk).
                // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
                // d. If testResult is true, return k.
                var kValue = o[k];
                if (predicate.call(thisArg, kValue, k, o)) {
                    return k;
                }
                // e. Increase k by 1.
                k++;
            }
            // 7. Return -1.
            return -1;
        }
    });
}

//# sourceMappingURL=Array.js.map


/***/ }),

/***/ 487:
/***/ (function(module, exports) {

/**
 * Copyright 2018 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * This is the String.prototype.startsWith polyfill from MDN
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
 */
if (!String.prototype.startsWith) {
    String.prototype.startsWith = function (search, pos) {
        return this.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;
    };
}

//# sourceMappingURL=String.js.map


/***/ }),

/***/ 488:
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

__webpack_require__(489);


/***/ }),

/***/ 489:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {(function() {
  var firebase = __webpack_require__(54).default;
  var g,aa=aa||{},k=this;function l(a){return"string"==typeof a}function ba(a){return"boolean"==typeof a}function ca(){}
function da(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function ea(a){return null===a}function fa(a){return"array"==da(a)}function ha(a){var b=da(a);return"array"==b||"object"==b&&"number"==typeof a.length}function n(a){return"function"==da(a)}function q(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}var ia="closure_uid_"+(1E9*Math.random()>>>0),ja=0;function ka(a,b,c){return a.call.apply(a.bind,arguments)}
function la(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function r(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?r=ka:r=la;return r.apply(null,arguments)}
function ma(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}var na=Date.now||function(){return+new Date};function t(a,b){function c(){}c.prototype=b.prototype;a.lb=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.$c=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}};function oa(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0}function pa(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}};function u(a){if(Error.captureStackTrace)Error.captureStackTrace(this,u);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}t(u,Error);u.prototype.name="CustomError";function qa(a,b){a=a.split("%s");for(var c="",d=a.length-1,e=0;e<d;e++)c+=a[e]+(e<b.length?b[e]:"%s");u.call(this,c+a[d])}t(qa,u);qa.prototype.name="AssertionError";function ra(a,b){throw new qa("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));};function sa(a,b){this.c=a;this.f=b;this.b=0;this.a=null}sa.prototype.get=function(){if(0<this.b){this.b--;var a=this.a;this.a=a.next;a.next=null}else a=this.c();return a};function ta(a,b){a.f(b);100>a.b&&(a.b++,b.next=a.a,a.a=b)};function ua(){this.b=this.a=null}var wa=new sa(function(){return new va},function(a){a.reset()});ua.prototype.add=function(a,b){var c=wa.get();c.set(a,b);this.b?this.b.next=c:this.a=c;this.b=c};function xa(){var a=ya,b=null;a.a&&(b=a.a,a.a=a.a.next,a.a||(a.b=null),b.next=null);return b}function va(){this.next=this.b=this.a=null}va.prototype.set=function(a,b){this.a=a;this.b=b;this.next=null};va.prototype.reset=function(){this.next=this.b=this.a=null};var za=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(l(a))return l(b)&&1==b.length?a.indexOf(b,0):-1;for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},v=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=l(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};
function Aa(a,b){var c=a.length,d=l(a)?a.split(""):a;for(--c;0<=c;--c)c in d&&b.call(void 0,d[c],c,a)}
var Ba=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e=l(a)?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));return d},Ca=Array.prototype.some?function(a,b){return Array.prototype.some.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=l(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a))return!0;return!1};
function Da(a){a:{var b=Ea;for(var c=a.length,d=l(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:l(a)?a.charAt(b):a[b]}function Fa(a,b){return 0<=za(a,b)}function Ga(a,b){b=za(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}function Ha(a,b){var c=0;Aa(a,function(d,e){b.call(void 0,d,e,a)&&1==Array.prototype.splice.call(a,e,1).length&&c++})}function Ia(a){return Array.prototype.concat.apply([],arguments)}
function Ja(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};function Ka(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")}var La=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function Ma(a){if(!Na.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(Oa,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(Pa,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(Qa,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(Ra,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(Sa,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(Ta,"&#0;"));return a}var Oa=/&/g,Pa=/</g,Qa=/>/g,Ra=/"/g,Sa=/'/g,Ta=/\x00/g,Na=/[\x00&<>"']/;function w(a,b){return-1!=a.indexOf(b)}function Ua(a,b){return a<b?-1:a>b?1:0};var Va;a:{var Wa=k.navigator;if(Wa){var Xa=Wa.userAgent;if(Xa){Va=Xa;break a}}Va=""}function x(a){return w(Va,a)};function Ya(a,b){for(var c in a)b.call(void 0,a[c],c,a)}function Za(a){for(var b in a)return!1;return!0}function $a(a){var b={},c;for(c in a)b[c]=a[c];return b}var ab="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function bb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<ab.length;f++)c=ab[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};function cb(a){k.setTimeout(function(){throw a;},0)}var db;
function eb(){var a=k.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!x("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow;a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host;a=r(function(a){if(("*"==d||a.origin==d)&&a.data==
c)this.port1.onmessage()},this);b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});if("undefined"!==typeof a&&!x("Trident")&&!x("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var a=c.rb;c.rb=null;a()}};return function(a){d.next={rb:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};document.documentElement.appendChild(b)}:function(a){k.setTimeout(a,0)}};function fb(a,b){gb||hb();ib||(gb(),ib=!0);ya.add(a,b)}var gb;function hb(){if(-1!=String(k.Promise).indexOf("[native code]")){var a=k.Promise.resolve(void 0);gb=function(){a.then(jb)}}else gb=function(){var a=jb;!n(k.setImmediate)||k.Window&&k.Window.prototype&&!x("Edge")&&k.Window.prototype.setImmediate==k.setImmediate?(db||(db=eb()),db(a)):k.setImmediate(a)}}var ib=!1,ya=new ua;function jb(){for(var a;a=xa();){try{a.a.call(a.b)}catch(b){cb(b)}ta(wa,a)}ib=!1};function y(a,b){this.a=kb;this.i=void 0;this.f=this.b=this.c=null;this.g=this.h=!1;if(a!=ca)try{var c=this;a.call(b,function(a){lb(c,mb,a)},function(a){if(!(a instanceof nb))try{if(a instanceof Error)throw a;throw Error("Promise rejected.");}catch(e){}lb(c,ob,a)})}catch(d){lb(this,ob,d)}}var kb=0,mb=2,ob=3;function pb(){this.next=this.f=this.b=this.g=this.a=null;this.c=!1}pb.prototype.reset=function(){this.f=this.b=this.g=this.a=null;this.c=!1};var qb=new sa(function(){return new pb},function(a){a.reset()});
function rb(a,b,c){var d=qb.get();d.g=a;d.b=b;d.f=c;return d}function z(a){if(a instanceof y)return a;var b=new y(ca);lb(b,mb,a);return b}function A(a){return new y(function(b,c){c(a)})}function sb(a,b,c){tb(a,b,c,null)||fb(ma(b,a))}function ub(a){return new y(function(b,c){var d=a.length,e=[];if(d)for(var f=function(a,c){d--;e[a]=c;0==d&&b(e)},h=function(a){c(a)},m=0,p;m<a.length;m++)p=a[m],sb(p,ma(f,m),h);else b(e)})}
function vb(a){return new y(function(b){var c=a.length,d=[];if(c)for(var e=function(a,e,f){c--;d[a]=e?{Zb:!0,value:f}:{Zb:!1,reason:f};0==c&&b(d)},f=0,h;f<a.length;f++)h=a[f],sb(h,ma(e,f,!0),ma(e,f,!1));else b(d)})}y.prototype.then=function(a,b,c){return wb(this,n(a)?a:null,n(b)?b:null,c)};oa(y);g=y.prototype;g.ga=function(a,b){a=rb(a,a,b);a.c=!0;xb(this,a);return this};g.o=function(a,b){return wb(this,null,a,b)};g.cancel=function(a){this.a==kb&&fb(function(){var b=new nb(a);yb(this,b)},this)};
function yb(a,b){if(a.a==kb)if(a.c){var c=a.c;if(c.b){for(var d=0,e=null,f=null,h=c.b;h&&(h.c||(d++,h.a==a&&(e=h),!(e&&1<d)));h=h.next)e||(f=h);e&&(c.a==kb&&1==d?yb(c,b):(f?(d=f,d.next==c.f&&(c.f=d),d.next=d.next.next):zb(c),Ab(c,e,ob,b)))}a.c=null}else lb(a,ob,b)}function xb(a,b){a.b||a.a!=mb&&a.a!=ob||Bb(a);a.f?a.f.next=b:a.b=b;a.f=b}
function wb(a,b,c,d){var e=rb(null,null,null);e.a=new y(function(a,h){e.g=b?function(c){try{var e=b.call(d,c);a(e)}catch(E){h(E)}}:a;e.b=c?function(b){try{var e=c.call(d,b);void 0===e&&b instanceof nb?h(b):a(e)}catch(E){h(E)}}:h});e.a.c=a;xb(a,e);return e.a}g.Jc=function(a){this.a=kb;lb(this,mb,a)};g.Kc=function(a){this.a=kb;lb(this,ob,a)};
function lb(a,b,c){a.a==kb&&(a===c&&(b=ob,c=new TypeError("Promise cannot resolve to itself")),a.a=1,tb(c,a.Jc,a.Kc,a)||(a.i=c,a.a=b,a.c=null,Bb(a),b!=ob||c instanceof nb||Cb(a,c)))}function tb(a,b,c,d){if(a instanceof y)return xb(a,rb(b||ca,c||null,d)),!0;if(pa(a))return a.then(b,c,d),!0;if(q(a))try{var e=a.then;if(n(e))return Db(a,e,b,c,d),!0}catch(f){return c.call(d,f),!0}return!1}
function Db(a,b,c,d,e){function f(a){m||(m=!0,d.call(e,a))}function h(a){m||(m=!0,c.call(e,a))}var m=!1;try{b.call(a,h,f)}catch(p){f(p)}}function Bb(a){a.h||(a.h=!0,fb(a.Ub,a))}function zb(a){var b=null;a.b&&(b=a.b,a.b=b.next,b.next=null);a.b||(a.f=null);return b}g.Ub=function(){for(var a;a=zb(this);)Ab(this,a,this.a,this.i);this.h=!1};
function Ab(a,b,c,d){if(c==ob&&b.b&&!b.c)for(;a&&a.g;a=a.c)a.g=!1;if(b.a)b.a.c=null,Eb(b,c,d);else try{b.c?b.g.call(b.f):Eb(b,c,d)}catch(e){Fb.call(null,e)}ta(qb,b)}function Eb(a,b,c){b==mb?a.g.call(a.f,c):a.b&&a.b.call(a.f,c)}function Cb(a,b){a.g=!0;fb(function(){a.g&&Fb.call(null,b)})}var Fb=cb;function nb(a){u.call(this,a)}t(nb,u);nb.prototype.name="cancel";function Gb(){0!=Hb&&(Ib[this[ia]||(this[ia]=++ja)]=this);this.pa=this.pa;this.oa=this.oa}var Hb=0,Ib={};Gb.prototype.pa=!1;function Jb(a){if(!a.pa&&(a.pa=!0,a.ua(),0!=Hb)){var b=a[ia]||(a[ia]=++ja);if(0!=Hb&&a.oa&&0<a.oa.length)throw Error(a+" did not empty its onDisposeCallbacks queue. This probably means it overrode dispose() or disposeInternal() without calling the superclass' method.");delete Ib[b]}}Gb.prototype.ua=function(){if(this.oa)for(;this.oa.length;)this.oa.shift()()};function Kb(a){Kb[" "](a);return a}Kb[" "]=ca;function Lb(a,b){var c=Mb;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)};var Nb=x("Opera"),B=x("Trident")||x("MSIE"),Ob=x("Edge"),Pb=Ob||B,Qb=x("Gecko")&&!(w(Va.toLowerCase(),"webkit")&&!x("Edge"))&&!(x("Trident")||x("MSIE"))&&!x("Edge"),Rb=w(Va.toLowerCase(),"webkit")&&!x("Edge");function Sb(){var a=k.document;return a?a.documentMode:void 0}var Tb;
a:{var Ub="",Vb=function(){var a=Va;if(Qb)return/rv:([^\);]+)(\)|;)/.exec(a);if(Ob)return/Edge\/([\d\.]+)/.exec(a);if(B)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Rb)return/WebKit\/(\S+)/.exec(a);if(Nb)return/(?:Version)[ \/]?(\S+)/.exec(a)}();Vb&&(Ub=Vb?Vb[1]:"");if(B){var Wb=Sb();if(null!=Wb&&Wb>parseFloat(Ub)){Tb=String(Wb);break a}}Tb=Ub}var Mb={};
function Xb(a){return Lb(a,function(){for(var b=0,c=La(String(Tb)).split("."),d=La(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var h=c[f]||"",m=d[f]||"";do{h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];m=/(\d*)(\D*)(.*)/.exec(m)||["","","",""];if(0==h[0].length&&0==m[0].length)break;b=Ua(0==h[1].length?0:parseInt(h[1],10),0==m[1].length?0:parseInt(m[1],10))||Ua(0==h[2].length,0==m[2].length)||Ua(h[2],m[2]);h=h[3];m=m[3]}while(0==b)}return 0<=b})}var Yb;var Zb=k.document;
Yb=Zb&&B?Sb()||("CSS1Compat"==Zb.compatMode?parseInt(Tb,10):5):void 0;var $b=Object.freeze||function(a){return a};var ac=!B||9<=Number(Yb),bc=B&&!Xb("9"),cc=function(){if(!k.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});k.addEventListener("test",ca,b);k.removeEventListener("test",ca,b);return a}();function C(a,b){this.type=a;this.b=this.target=b;this.Eb=!0}C.prototype.c=function(){this.Eb=!1};function dc(a,b){C.call(this,a?a.type:"");this.relatedTarget=this.b=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.pointerId=0;this.pointerType="";this.a=null;if(a){var c=this.type=a.type,d=a.changedTouches?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.b=b;if(b=a.relatedTarget){if(Qb){a:{try{Kb(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=
a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;null===d?(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0):(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0);this.button=a.button;this.key=a.key||"";this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=
a.metaKey;this.pointerId=a.pointerId||0;this.pointerType=l(a.pointerType)?a.pointerType:ec[a.pointerType]||"";this.a=a;a.defaultPrevented&&this.c()}}t(dc,C);var ec=$b({2:"touch",3:"pen",4:"mouse"});dc.prototype.c=function(){dc.lb.c.call(this);var a=this.a;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,bc)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};dc.prototype.g=function(){return this.a};var fc="closure_listenable_"+(1E6*Math.random()|0),hc=0;function ic(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.La=e;this.key=++hc;this.ma=this.Ha=!1}function jc(a){a.ma=!0;a.listener=null;a.proxy=null;a.src=null;a.La=null};function kc(a){this.src=a;this.a={};this.b=0}kc.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.a[f];a||(a=this.a[f]=[],this.b++);var h=lc(a,b,d,e);-1<h?(b=a[h],c||(b.Ha=!1)):(b=new ic(b,this.src,f,!!d,e),b.Ha=c,a.push(b));return b};function mc(a,b){var c=b.type;c in a.a&&Ga(a.a[c],b)&&(jc(b),0==a.a[c].length&&(delete a.a[c],a.b--))}function lc(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.ma&&f.listener==b&&f.capture==!!c&&f.La==d)return e}return-1};var nc="closure_lm_"+(1E6*Math.random()|0),oc={},pc=0;function qc(a,b,c,d,e){if(d&&d.once)rc(a,b,c,d,e);else if(fa(b))for(var f=0;f<b.length;f++)qc(a,b[f],c,d,e);else c=sc(c),a&&a[fc]?tc(a,b,c,q(d)?!!d.capture:!!d,e):uc(a,b,c,!1,d,e)}
function uc(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var h=q(e)?!!e.capture:!!e,m=vc(a);m||(a[nc]=m=new kc(a));c=m.add(b,c,d,h,f);if(!c.proxy){d=wc();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)cc||(e=h),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(xc(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");pc++}}
function wc(){var a=yc,b=ac?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);if(!c)return c};return b}function rc(a,b,c,d,e){if(fa(b))for(var f=0;f<b.length;f++)rc(a,b[f],c,d,e);else c=sc(c),a&&a[fc]?zc(a,b,c,q(d)?!!d.capture:!!d,e):uc(a,b,c,!0,d,e)}
function D(a,b,c,d,e){if(fa(b))for(var f=0;f<b.length;f++)D(a,b[f],c,d,e);else(d=q(d)?!!d.capture:!!d,c=sc(c),a&&a[fc])?(a=a.u,b=String(b).toString(),b in a.a&&(f=a.a[b],c=lc(f,c,d,e),-1<c&&(jc(f[c]),Array.prototype.splice.call(f,c,1),0==f.length&&(delete a.a[b],a.b--)))):a&&(a=vc(a))&&(b=a.a[b.toString()],a=-1,b&&(a=lc(b,c,d,e)),(c=-1<a?b[a]:null)&&Ac(c))}
function Ac(a){if("number"!=typeof a&&a&&!a.ma){var b=a.src;if(b&&b[fc])mc(b.u,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(xc(c),d):b.addListener&&b.removeListener&&b.removeListener(d);pc--;(c=vc(b))?(mc(c,a),0==c.b&&(c.src=null,b[nc]=null)):jc(a)}}}function xc(a){return a in oc?oc[a]:oc[a]="on"+a}
function Bc(a,b,c,d){var e=!0;if(a=vc(a))if(b=a.a[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.ma&&(f=Cc(f,d),e=e&&!1!==f)}return e}function Cc(a,b){var c=a.listener,d=a.La||a.src;a.Ha&&Ac(a);return c.call(d,b)}
function yc(a,b){if(a.ma)return!0;if(!ac){if(!b)a:{b=["window","event"];for(var c=k,d=0;d<b.length;d++)if(c=c[b[d]],null==c){b=null;break a}b=c}d=b;b=new dc(d,this);c=!0;if(!(0>d.keyCode||void 0!=d.returnValue)){a:{var e=!1;if(0==d.keyCode)try{d.keyCode=-1;break a}catch(h){e=!0}if(e||void 0==d.returnValue)d.returnValue=!0}d=[];for(e=b.b;e;e=e.parentNode)d.push(e);a=a.type;for(e=d.length-1;0<=e;e--){b.b=d[e];var f=Bc(d[e],a,!0,b);c=c&&f}for(e=0;e<d.length;e++)b.b=d[e],f=Bc(d[e],a,!1,b),c=c&&f}return c}return Cc(a,
new dc(b,this))}function vc(a){a=a[nc];return a instanceof kc?a:null}var Dc="__closure_events_fn_"+(1E9*Math.random()>>>0);function sc(a){if(n(a))return a;a[Dc]||(a[Dc]=function(b){return a.handleEvent(b)});return a[Dc]};function F(){Gb.call(this);this.u=new kc(this);this.Mb=this;this.Ta=null}t(F,Gb);F.prototype[fc]=!0;F.prototype.addEventListener=function(a,b,c,d){qc(this,a,b,c,d)};F.prototype.removeEventListener=function(a,b,c,d){D(this,a,b,c,d)};
F.prototype.dispatchEvent=function(a){var b,c=this.Ta;if(c)for(b=[];c;c=c.Ta)b.push(c);c=this.Mb;var d=a.type||a;if(l(a))a=new C(a,c);else if(a instanceof C)a.target=a.target||c;else{var e=a;a=new C(d,c);bb(a,e)}e=!0;if(b)for(var f=b.length-1;0<=f;f--){var h=a.b=b[f];e=Ec(h,d,!0,a)&&e}h=a.b=c;e=Ec(h,d,!0,a)&&e;e=Ec(h,d,!1,a)&&e;if(b)for(f=0;f<b.length;f++)h=a.b=b[f],e=Ec(h,d,!1,a)&&e;return e};
F.prototype.ua=function(){F.lb.ua.call(this);if(this.u){var a=this.u,b=0,c;for(c in a.a){for(var d=a.a[c],e=0;e<d.length;e++)++b,jc(d[e]);delete a.a[c];a.b--}}this.Ta=null};function tc(a,b,c,d,e){a.u.add(String(b),c,!1,d,e)}function zc(a,b,c,d,e){a.u.add(String(b),c,!0,d,e)}
function Ec(a,b,c,d){b=a.u.a[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var h=b[f];if(h&&!h.ma&&h.capture==c){var m=h.listener,p=h.La||h.src;h.Ha&&mc(a.u,h);e=!1!==m.call(p,d)&&e}}return e&&0!=d.Eb};function Fc(a,b,c){if(n(a))c&&(a=r(a,c));else if(a&&"function"==typeof a.handleEvent)a=r(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:k.setTimeout(a,b||0)}function Gc(a){var b=null;return(new y(function(c,d){b=Fc(function(){c(void 0)},a);-1==b&&d(Error("Failed to schedule timer."))})).o(function(a){k.clearTimeout(b);throw a;})};function Ic(a){if(a.R&&"function"==typeof a.R)return a.R();if(l(a))return a.split("");if(ha(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}b=[];c=0;for(d in a)b[c++]=a[d];return b}function Jc(a){if(a.T&&"function"==typeof a.T)return a.T();if(!a.R||"function"!=typeof a.R){if(ha(a)||l(a)){var b=[];a=a.length;for(var c=0;c<a;c++)b.push(c);return b}b=[];c=0;for(var d in a)b[c++]=d;return b}}
function Kc(a,b){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,void 0);else if(ha(a)||l(a))v(a,b,void 0);else for(var c=Jc(a),d=Ic(a),e=d.length,f=0;f<e;f++)b.call(void 0,d[f],c&&c[f],a)};function Lc(a,b){this.b={};this.a=[];this.c=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Lc)for(c=a.T(),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}g=Lc.prototype;g.R=function(){Mc(this);for(var a=[],b=0;b<this.a.length;b++)a.push(this.b[this.a[b]]);return a};g.T=function(){Mc(this);return this.a.concat()};
g.clear=function(){this.b={};this.c=this.a.length=0};function Mc(a){if(a.c!=a.a.length){for(var b=0,c=0;b<a.a.length;){var d=a.a[b];Nc(a.b,d)&&(a.a[c++]=d);b++}a.a.length=c}if(a.c!=a.a.length){var e={};for(c=b=0;b<a.a.length;)d=a.a[b],Nc(e,d)||(a.a[c++]=d,e[d]=1),b++;a.a.length=c}}g.get=function(a,b){return Nc(this.b,a)?this.b[a]:b};g.set=function(a,b){Nc(this.b,a)||(this.c++,this.a.push(a));this.b[a]=b};
g.forEach=function(a,b){for(var c=this.T(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};function Nc(a,b){return Object.prototype.hasOwnProperty.call(a,b)};var Oc=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Pc(a,b){if(a){a=a.split("&");for(var c=0;c<a.length;c++){var d=a[c].indexOf("="),e=null;if(0<=d){var f=a[c].substring(0,d);e=a[c].substring(d+1)}else f=a[c];b(f,e?decodeURIComponent(e.replace(/\+/g," ")):"")}}};function Qc(a,b){this.b=this.l=this.c="";this.i=null;this.h=this.g="";this.f=!1;if(a instanceof Qc){this.f=void 0!==b?b:a.f;Rc(this,a.c);this.l=a.l;this.b=a.b;Sc(this,a.i);this.g=a.g;b=a.a;var c=new Tc;c.c=b.c;b.a&&(c.a=new Lc(b.a),c.b=b.b);Uc(this,c);this.h=a.h}else a&&(c=String(a).match(Oc))?(this.f=!!b,Rc(this,c[1]||"",!0),this.l=Vc(c[2]||""),this.b=Vc(c[3]||"",!0),Sc(this,c[4]),this.g=Vc(c[5]||"",!0),Uc(this,c[6]||"",!0),this.h=Vc(c[7]||"")):(this.f=!!b,this.a=new Tc(null,this.f))}
Qc.prototype.toString=function(){var a=[],b=this.c;b&&a.push(Wc(b,Xc,!0),":");var c=this.b;if(c||"file"==b)a.push("//"),(b=this.l)&&a.push(Wc(b,Xc,!0),"@"),a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.i,null!=c&&a.push(":",String(c));if(c=this.g)this.b&&"/"!=c.charAt(0)&&a.push("/"),a.push(Wc(c,"/"==c.charAt(0)?Yc:Zc,!0));(c=this.a.toString())&&a.push("?",c);(c=this.h)&&a.push("#",Wc(c,$c));return a.join("")};
function Rc(a,b,c){a.c=c?Vc(b,!0):b;a.c&&(a.c=a.c.replace(/:$/,""))}function Sc(a,b){if(b){b=Number(b);if(isNaN(b)||0>b)throw Error("Bad port number "+b);a.i=b}else a.i=null}function Uc(a,b,c){b instanceof Tc?(a.a=b,ad(a.a,a.f)):(c||(b=Wc(b,bd)),a.a=new Tc(b,a.f))}function G(a,b,c){a.a.set(b,c)}function cd(a,b){return a.a.get(b)}function dd(a){return a instanceof Qc?new Qc(a):new Qc(a,void 0)}function ed(a,b){var c=new Qc(null,void 0);Rc(c,"https");a&&(c.b=a);b&&(c.g=b);return c}
function Vc(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Wc(a,b,c){return l(a)?(a=encodeURI(a).replace(b,fd),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function fd(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Xc=/[#\/\?@]/g,Zc=/[#\?:]/g,Yc=/[#\?]/g,bd=/[#\?@]/g,$c=/#/g;function Tc(a,b){this.b=this.a=null;this.c=a||null;this.f=!!b}
function gd(a){a.a||(a.a=new Lc,a.b=0,a.c&&Pc(a.c,function(b,c){a.add(decodeURIComponent(b.replace(/\+/g," ")),c)}))}function hd(a){var b=Jc(a);if("undefined"==typeof b)throw Error("Keys are undefined");var c=new Tc(null,void 0);a=Ic(a);for(var d=0;d<b.length;d++){var e=b[d],f=a[d];fa(f)?id(c,e,f):c.add(e,f)}return c}g=Tc.prototype;g.add=function(a,b){gd(this);this.c=null;a=jd(this,a);var c=this.a.get(a);c||this.a.set(a,c=[]);c.push(b);this.b+=1;return this};
function kd(a,b){gd(a);b=jd(a,b);Nc(a.a.b,b)&&(a.c=null,a.b-=a.a.get(b).length,a=a.a,Nc(a.b,b)&&(delete a.b[b],a.c--,a.a.length>2*a.c&&Mc(a)))}g.clear=function(){this.a=this.c=null;this.b=0};function ld(a,b){gd(a);b=jd(a,b);return Nc(a.a.b,b)}g.forEach=function(a,b){gd(this);this.a.forEach(function(c,d){v(c,function(c){a.call(b,c,d,this)},this)},this)};g.T=function(){gd(this);for(var a=this.a.R(),b=this.a.T(),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c};
g.R=function(a){gd(this);var b=[];if(l(a))ld(this,a)&&(b=Ia(b,this.a.get(jd(this,a))));else{a=this.a.R();for(var c=0;c<a.length;c++)b=Ia(b,a[c])}return b};g.set=function(a,b){gd(this);this.c=null;a=jd(this,a);ld(this,a)&&(this.b-=this.a.get(a).length);this.a.set(a,[b]);this.b+=1;return this};g.get=function(a,b){a=a?this.R(a):[];return 0<a.length?String(a[0]):b};function id(a,b,c){kd(a,b);0<c.length&&(a.c=null,a.a.set(jd(a,b),Ja(c)),a.b+=c.length)}
g.toString=function(){if(this.c)return this.c;if(!this.a)return"";for(var a=[],b=this.a.T(),c=0;c<b.length;c++){var d=b[c],e=encodeURIComponent(String(d));d=this.R(d);for(var f=0;f<d.length;f++){var h=e;""!==d[f]&&(h+="="+encodeURIComponent(String(d[f])));a.push(h)}}return this.c=a.join("&")};function jd(a,b){b=String(b);a.f&&(b=b.toLowerCase());return b}function ad(a,b){b&&!a.f&&(gd(a),a.c=null,a.a.forEach(function(a,b){var c=b.toLowerCase();b!=c&&(kd(this,b),id(this,c,a))},a));a.f=b};var md=!B||9<=Number(Yb);function nd(){this.a="";this.b=od}nd.prototype.la=!0;nd.prototype.ja=function(){return this.a};nd.prototype.toString=function(){return"Const{"+this.a+"}"};function pd(a){if(a instanceof nd&&a.constructor===nd&&a.b===od)return a.a;ra("expected object of type Const, got '"+a+"'");return"type_error:Const"}var od={};function qd(a){var b=new nd;b.a=a;return b}qd("");function rd(){this.a="";this.b=sd}rd.prototype.la=!0;rd.prototype.ja=function(){return this.a};rd.prototype.toString=function(){return"TrustedResourceUrl{"+this.a+"}"};function td(a){if(a instanceof rd&&a.constructor===rd&&a.b===sd)return a.a;ra("expected object of type TrustedResourceUrl, got '"+a+"' of type "+da(a));return"type_error:TrustedResourceUrl"}
function ud(a,b){var c=pd(a);if(!vd.test(c))throw Error("Invalid TrustedResourceUrl format: "+c);a=c.replace(wd,function(a,e){if(!Object.prototype.hasOwnProperty.call(b,e))throw Error('Found marker, "'+e+'", in format string, "'+c+'", but no valid label mapping found in args: '+JSON.stringify(b));a=b[e];return a instanceof nd?pd(a):encodeURIComponent(String(a))});return xd(a)}var wd=/%{(\w+)}/g,vd=/^(?:https:)?\/\/[0-9a-z.:[\]-]+\/|^\/[^\/\\]|^about:blank#/i,sd={};
function xd(a){var b=new rd;b.a=a;return b};function yd(){this.a="";this.b=zd}yd.prototype.la=!0;yd.prototype.ja=function(){return this.a};yd.prototype.toString=function(){return"SafeUrl{"+this.a+"}"};function Ad(a){if(a instanceof yd&&a.constructor===yd&&a.b===zd)return a.a;ra("expected object of type SafeUrl, got '"+a+"' of type "+da(a));return"type_error:SafeUrl"}var Bd=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
function Cd(a){if(a instanceof yd)return a;a=a.la?a.ja():String(a);Bd.test(a)||(a="about:invalid#zClosurez");return Dd(a)}var zd={};function Dd(a){var b=new yd;b.a=a;return b}Dd("about:blank");function Ed(){this.a="";this.b=Fd}Ed.prototype.la=!0;Ed.prototype.ja=function(){return this.a};Ed.prototype.toString=function(){return"SafeHtml{"+this.a+"}"};function Gd(a){if(a instanceof Ed&&a.constructor===Ed&&a.b===Fd)return a.a;ra("expected object of type SafeHtml, got '"+a+"' of type "+da(a));return"type_error:SafeHtml"}var Fd={};function Hd(a){var b=new Ed;b.a=a;return b}Hd("<!DOCTYPE html>");Hd("");Hd("<br>");function Id(a){var b=document;return l(a)?b.getElementById(a):a}function Jd(a,b){Ya(b,function(b,d){b&&b.la&&(b=b.ja());"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:Kd.hasOwnProperty(d)?a.setAttribute(Kd[d],b):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,b):a[d]=b})}
var Kd={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function Ld(a,b,c){var d=arguments,e=document,f=String(d[0]),h=d[1];if(!md&&h&&(h.name||h.type)){f=["<",f];h.name&&f.push(' name="',Ma(h.name),'"');if(h.type){f.push(' type="',Ma(h.type),'"');var m={};bb(m,h);delete m.type;h=m}f.push(">");f=f.join("")}f=e.createElement(f);h&&(l(h)?f.className=h:fa(h)?f.className=h.join(" "):Jd(f,h));2<d.length&&Md(e,f,d);return f}
function Md(a,b,c){function d(c){c&&b.appendChild(l(c)?a.createTextNode(c):c)}for(var e=2;e<c.length;e++){var f=c[e];!ha(f)||q(f)&&0<f.nodeType?d(f):v(Nd(f)?Ja(f):f,d)}}function Nd(a){if(a&&"number"==typeof a.length){if(q(a))return"function"==typeof a.item||"string"==typeof a.item;if(n(a))return"function"==typeof a.item}return!1};function Od(a){var b=[];Pd(new Qd,a,b);return b.join("")}function Qd(){}
function Pd(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(fa(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Pd(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Rd(d,c),c.push(":"),Pd(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Rd(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}var Sd={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Td=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;
function Rd(a,b){b.push('"',a.replace(Td,function(a){var b=Sd[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),Sd[a]=b);return b}),'"')};function Ud(){var a=H();return B&&!!Yb&&11==Yb||/Edge\/\d+/.test(a)}function Vd(){return k.window&&k.window.location.href||self&&self.location&&self.location.href||""}function Wd(a,b){b=b||k.window;var c="about:blank";a&&(c=Ad(Cd(a)));b.location.href=c}
function Xd(a,b){var c=[],d;for(d in a)if(d in b)if(typeof a[d]!=typeof b[d])c.push(d);else if(fa(a[d])){a:{var e=void 0;var f=a[d],h=b[d];for(e in f)if(!(e in h)||f[e]!==h[e]){e=!1;break a}for(e in h)if(!(e in f)){e=!1;break a}e=!0}e||c.push(d)}else"object"==typeof a[d]&&null!=a[d]&&null!=b[d]?0<Xd(a[d],b[d]).length&&c.push(d):a[d]!==b[d]&&c.push(d);else c.push(d);for(d in b)d in a||c.push(d);return c}
function Yd(){var a=H();a=Zd(a)!=$d?null:(a=a.match(/\sChrome\/(\d+)/i))&&2==a.length?parseInt(a[1],10):null;return a&&30>a?!1:!B||!Yb||9<Yb}function ae(a){a=(a||H()).toLowerCase();return a.match(/android/)||a.match(/webos/)||a.match(/iphone|ipad|ipod/)||a.match(/blackberry/)||a.match(/windows phone/)||a.match(/iemobile/)?!0:!1}function be(a){a=a||k.window;try{a.close()}catch(b){}}
function ce(a,b,c){var d=Math.floor(1E9*Math.random()).toString();b=b||500;c=c||600;var e=(window.screen.availHeight-c)/2,f=(window.screen.availWidth-b)/2;b={width:b,height:c,top:0<e?e:0,left:0<f?f:0,location:!0,resizable:!0,statusbar:!0,toolbar:!1};c=H().toLowerCase();d&&(b.target=d,w(c,"crios/")&&(b.target="_blank"));Zd(H())==de&&(a=a||"http://localhost",b.scrollbars=!0);c=a||"";(a=b)||(a={});d=window;b=c instanceof yd?c:Cd("undefined"!=typeof c.href?c.href:String(c));c=a.target||c.target;e=[];
for(h in a)switch(h){case "width":case "height":case "top":case "left":e.push(h+"="+a[h]);break;case "target":case "noopener":case "noreferrer":break;default:e.push(h+"="+(a[h]?1:0))}var h=e.join(",");(x("iPhone")&&!x("iPod")&&!x("iPad")||x("iPad")||x("iPod"))&&d.navigator&&d.navigator.standalone&&c&&"_self"!=c?(h=d.document.createElement("A"),b instanceof yd||b instanceof yd||(b=b.la?b.ja():String(b),Bd.test(b)||(b="about:invalid#zClosurez"),b=Dd(b)),h.href=Ad(b),h.setAttribute("target",c),a.noreferrer&&
h.setAttribute("rel","noreferrer"),a=document.createEvent("MouseEvent"),a.initMouseEvent("click",!0,!0,d,1),h.dispatchEvent(a),h={}):a.noreferrer?(h=d.open("",c,h),a=Ad(b),h&&(Pb&&w(a,";")&&(a="'"+a.replace(/'/g,"%27")+"'"),h.opener=null,qd("b/12014412, meta tag with sanitized URL"),a='<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url='+Ma(a)+'">',a=Hd(a),h.document.write(Gd(a)),h.document.close())):(h=d.open(Ad(b),c,h))&&a.noopener&&(h.opener=null);if(h)try{h.focus()}catch(m){}return h}
function ee(a){return new y(function(b){function c(){Gc(2E3).then(function(){if(!a||a.closed)b();else return c()})}return c()})}var fe=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;function ge(){var a=null;return(new y(function(b){"complete"==k.document.readyState?b():(a=function(){b()},rc(window,"load",a))})).o(function(b){D(window,"load",a);throw b;})}
function he(){return ie(void 0)?ge().then(function(){return new y(function(a,b){var c=k.document,d=setTimeout(function(){b(Error("Cordova framework is not ready."))},1E3);c.addEventListener("deviceready",function(){clearTimeout(d);a()},!1)})}):A(Error("Cordova must run in an Android or iOS file scheme."))}function ie(a){a=a||H();return!("file:"!==je()||!a.toLowerCase().match(/iphone|ipad|ipod|android/))}function ke(){var a=k.window;try{return!(!a||a==a.top)}catch(b){return!1}}
function le(){return"object"!==typeof k.window&&"function"===typeof k.importScripts}function me(){return firebase.INTERNAL.hasOwnProperty("reactNative")?"ReactNative":firebase.INTERNAL.hasOwnProperty("node")?"Node":le()?"Worker":"Browser"}function ne(){var a=me();return"ReactNative"===a||"Node"===a}var de="Firefox",$d="Chrome";
function Zd(a){var b=a.toLowerCase();if(w(b,"opera/")||w(b,"opr/")||w(b,"opios/"))return"Opera";if(w(b,"iemobile"))return"IEMobile";if(w(b,"msie")||w(b,"trident/"))return"IE";if(w(b,"edge/"))return"Edge";if(w(b,"firefox/"))return de;if(w(b,"silk/"))return"Silk";if(w(b,"blackberry"))return"Blackberry";if(w(b,"webos"))return"Webos";if(!w(b,"safari/")||w(b,"chrome/")||w(b,"crios/")||w(b,"android"))if(!w(b,"chrome/")&&!w(b,"crios/")||w(b,"edge/")){if(w(b,"android"))return"Android";if((a=a.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/))&&
2==a.length)return a[1]}else return $d;else return"Safari";return"Other"}var oe={Pc:"FirebaseCore-web",Rc:"FirebaseUI-web"};function pe(a,b){b=b||[];var c=[],d={},e;for(e in oe)d[oe[e]]=!0;for(e=0;e<b.length;e++)"undefined"!==typeof d[b[e]]&&(delete d[b[e]],c.push(b[e]));c.sort();b=c;b.length||(b=["FirebaseCore-web"]);c=me();"Browser"===c?(d=H(),c=Zd(d)):"Worker"===c&&(d=H(),c=Zd(d)+"-"+c);return c+"/JsCore/"+a+"/"+b.join(",")}function H(){return k.navigator&&k.navigator.userAgent||""}
function I(a,b){a=a.split(".");b=b||k;for(var c=0;c<a.length&&"object"==typeof b&&null!=b;c++)b=b[a[c]];c!=a.length&&(b=void 0);return b}function qe(){try{var a=k.localStorage,b=re();if(a)return a.setItem(b,"1"),a.removeItem(b),Ud()?!!k.indexedDB:!0}catch(c){return le()&&!!k.indexedDB}return!1}function se(){return(te()||"chrome-extension:"===je()||ie())&&!ne()&&qe()&&!le()}function te(){return"http:"===je()||"https:"===je()}function je(){return k.location&&k.location.protocol||null}
function ue(a){a=a||H();return ae(a)||Zd(a)==de?!1:!0}function ve(a){return"undefined"===typeof a?null:Od(a)}function we(a){var b={},c;for(c in a)a.hasOwnProperty(c)&&null!==a[c]&&void 0!==a[c]&&(b[c]=a[c]);return b}function xe(a){if(null!==a)return JSON.parse(a)}function re(a){return a?a:Math.floor(1E9*Math.random()).toString()}function ye(a){a=a||H();return"Safari"==Zd(a)||a.toLowerCase().match(/iphone|ipad|ipod/)?!1:!0}
function ze(){var a=k.___jsl;if(a&&a.H)for(var b in a.H)if(a.H[b].r=a.H[b].r||[],a.H[b].L=a.H[b].L||[],a.H[b].r=a.H[b].L.concat(),a.CP)for(var c=0;c<a.CP.length;c++)a.CP[c]=null}function Ae(){var a=k.navigator;return a&&"boolean"===typeof a.onLine&&(te()||"chrome-extension:"===je()||"undefined"!==typeof a.connection)?a.onLine:!0}function Be(a,b){if(a>b)throw Error("Short delay should be less than long delay!");this.c=a;this.b=b;a=H();b=me();this.a=ae(a)||"ReactNative"===b}
Be.prototype.get=function(){return this.a?this.b:this.c};function Ce(){var a=k.document;return a&&"undefined"!==typeof a.visibilityState?"visible"==a.visibilityState:!0}function De(){var a=k.document,b=null;return Ce()||!a?z():(new y(function(c){b=function(){Ce()&&(a.removeEventListener("visibilitychange",b,!1),c())};a.addEventListener("visibilitychange",b,!1)})).o(function(c){a.removeEventListener("visibilitychange",b,!1);throw c;})}
function Ee(a){try{var b=new Date(parseInt(a,10));if(!isNaN(b.getTime())&&!/[^0-9]/.test(a))return b.toUTCString()}catch(c){}return null}function Fe(){return!(!I("fireauth.oauthhelper",k)&&!I("fireauth.iframe",k))};var Ge={};var He;try{var Ie={};Object.defineProperty(Ie,"abcd",{configurable:!0,enumerable:!0,value:1});Object.defineProperty(Ie,"abcd",{configurable:!0,enumerable:!0,value:2});He=2==Ie.abcd}catch(a){He=!1}function J(a,b,c){He?Object.defineProperty(a,b,{configurable:!0,enumerable:!0,value:c}):a[b]=c}function K(a,b){if(b)for(var c in b)b.hasOwnProperty(c)&&J(a,c,b[c])}function Je(a){var b={};K(b,a);return b}function Ke(a){var b={},c;for(c in a)a.hasOwnProperty(c)&&(b[c]=a[c]);return b}
function Le(a,b){if(!b||!b.length)return!0;if(!a)return!1;for(var c=0;c<b.length;c++){var d=a[b[c]];if(void 0===d||null===d||""===d)return!1}return!0}function Me(a){var b=a;if("object"==typeof a&&null!=a){b="length"in a?[]:{};for(var c in a)J(b,c,Me(a[c]))}return b};function Ne(a){var b={},c=a[Oe],d=a[Pe];a=a[Qe];if(!a||a!=Re&&!c)throw Error("Invalid provider user info!");b[Se]=d||null;b[Te]=c||null;J(this,Ue,a);J(this,Ve,Me(b))}var Re="EMAIL_SIGNIN",Oe="email",Pe="newEmail",Qe="requestType",Te="email",Se="fromEmail",Ve="data",Ue="operation";function L(a,b){this.code=We+a;this.message=b||Xe[a]||""}t(L,Error);L.prototype.C=function(){return{code:this.code,message:this.message}};L.prototype.toJSON=function(){return this.C()};function Ye(a){var b=a&&a.code;return b?new L(b.substring(We.length),a.message):null}
var We="auth/",Xe={"argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",
"code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",
"dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-already-in-use":"The email address is already in use by another account.","expired-action-code":"The action code has expired. ","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal error has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",
"invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal error has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure use the verification code provided by the user.",
"invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-email":"The email address is badly formatted.","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.",
"invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is malformed or has expired.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",
"invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",
"invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.",
"auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal error has occurred.",
"missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",
"network-request-failed":"A network error (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal error has occurred.","no-such-provider":"User was not linked to an account with the given provider.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',
"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.",
timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","user-cancelled":"User did not grant your application the permissions it requested.",
"user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled."};function Ze(a){var b=a[$e];if("undefined"===typeof b)throw new L("missing-continue-uri");if("string"!==typeof b||"string"===typeof b&&!b.length)throw new L("invalid-continue-uri");this.h=b;this.b=this.a=null;this.g=!1;var c=a[af];if(c&&"object"===typeof c){b=c[bf];var d=c[cf];c=c[df];if("string"===typeof b&&b.length){this.a=b;if("undefined"!==typeof d&&"boolean"!==typeof d)throw new L("argument-error",cf+" property must be a boolean when specified.");this.g=!!d;if("undefined"!==typeof c&&("string"!==
typeof c||"string"===typeof c&&!c.length))throw new L("argument-error",df+" property must be a non empty string when specified.");this.b=c||null}else{if("undefined"!==typeof b)throw new L("argument-error",bf+" property must be a non empty string when specified.");if("undefined"!==typeof d||"undefined"!==typeof c)throw new L("missing-android-pkg-name");}}else if("undefined"!==typeof c)throw new L("argument-error",af+" property must be a non null object when specified.");this.f=null;if((b=a[ef])&&"object"===
typeof b)if(b=b[ff],"string"===typeof b&&b.length)this.f=b;else{if("undefined"!==typeof b)throw new L("argument-error",ff+" property must be a non empty string when specified.");}else if("undefined"!==typeof b)throw new L("argument-error",ef+" property must be a non null object when specified.");a=a[gf];if("undefined"!==typeof a&&"boolean"!==typeof a)throw new L("argument-error",gf+" property must be a boolean when specified.");this.c=!!a}
var af="android",gf="handleCodeInApp",ef="iOS",$e="url",cf="installApp",df="minimumVersion",bf="packageName",ff="bundleId";function hf(a){var b={};b.continueUrl=a.h;b.canHandleCodeInApp=a.c;if(b.androidPackageName=a.a)b.androidMinimumVersion=a.b,b.androidInstallApp=a.g;b.iOSBundleId=a.f;for(var c in b)null===b[c]&&delete b[c];return b};function jf(a){return Ba(a,function(a){a=a.toString(16);return 1<a.length?a:"0"+a}).join("")};var kf=null,lf=null;function mf(a){var b="";nf(a,function(a){b+=String.fromCharCode(a)});return b}function nf(a,b){function c(b){for(;d<a.length;){var c=a.charAt(d++),e=lf[c];if(null!=e)return e;if(!/^[\s\xa0]*$/.test(c))throw Error("Unknown base64 encoding at char: "+c);}return b}of();for(var d=0;;){var e=c(-1),f=c(0),h=c(64),m=c(64);if(64===m&&-1===e)break;b(e<<2|f>>4);64!=h&&(b(f<<4&240|h>>2),64!=m&&b(h<<6&192|m))}}
function of(){if(!kf){kf={};lf={};for(var a=0;65>a;a++)kf[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a),lf[kf[a]]=a,62<=a&&(lf["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a)]=a)}};function pf(a){this.c=a.sub;na();this.a=a.provider_id||a.firebase&&a.firebase.sign_in_provider||null;this.b=!!a.is_anonymous||"anonymous"==this.a}pf.prototype.f=function(){return this.b};function qf(a){a=a.split(".");if(3!=a.length)return null;a=a[1];for(var b=(4-a.length%4)%4,c=0;c<b;c++)a+=".";try{var d=JSON.parse(mf(a));if(d.sub&&d.iss&&d.aud&&d.exp)return new pf(d)}catch(e){}return null};var rf="oauth_consumer_key oauth_nonce oauth_signature oauth_signature_method oauth_timestamp oauth_token oauth_version".split(" "),sf=["client_id","response_type","scope","redirect_uri","state"],tf={Qc:{Ma:"locale",Aa:500,za:600,Na:"facebook.com",cb:sf},Sc:{Ma:null,Aa:500,za:620,Na:"github.com",cb:sf},Tc:{Ma:"hl",Aa:515,za:680,Na:"google.com",cb:sf},Zc:{Ma:"lang",Aa:485,za:705,Na:"twitter.com",cb:rf}};function uf(a){for(var b in tf)if(tf[b].Na==a)return tf[b];return null};function vf(a){var b={};b["facebook.com"]=wf;b["google.com"]=xf;b["github.com"]=yf;b["twitter.com"]=zf;var c=a&&a[Af];try{if(c)return b[c]?new b[c](a):new Bf(a);if("undefined"!==typeof a[Cf])return new Df(a)}catch(d){}return null}var Cf="idToken",Af="providerId";
function Df(a){var b=a[Af];if(!b&&a[Cf]){var c=qf(a[Cf]);c&&c.a&&(b=c.a)}if(!b)throw Error("Invalid additional user info!");if("anonymous"==b||"custom"==b)b=null;c=!1;"undefined"!==typeof a.isNewUser?c=!!a.isNewUser:"identitytoolkit#SignupNewUserResponse"===a.kind&&(c=!0);J(this,"providerId",b);J(this,"isNewUser",c)}function Bf(a){Df.call(this,a);a=xe(a.rawUserInfo||"{}");J(this,"profile",Me(a||{}))}t(Bf,Df);
function wf(a){Bf.call(this,a);if("facebook.com"!=this.providerId)throw Error("Invalid provider ID!");}t(wf,Bf);function yf(a){Bf.call(this,a);if("github.com"!=this.providerId)throw Error("Invalid provider ID!");J(this,"username",this.profile&&this.profile.login||null)}t(yf,Bf);function xf(a){Bf.call(this,a);if("google.com"!=this.providerId)throw Error("Invalid provider ID!");}t(xf,Bf);
function zf(a){Bf.call(this,a);if("twitter.com"!=this.providerId)throw Error("Invalid provider ID!");J(this,"username",a.screenName||null)}t(zf,Bf);function Ef(a){this.a=dd(a)};function Ff(a){var b=dd(a),c=cd(b,"link"),d=cd(dd(c),"link");b=cd(b,"deep_link_id");return cd(dd(b),"link")||b||d||c||a};function Gf(a,b){return a.then(function(a){if(a[M]){var c=qf(a[M]);if(!c||b!=c.c)throw new L("user-mismatch");return a}throw new L("user-mismatch");}).o(function(a){throw a&&a.code&&a.code==We+"user-not-found"?new L("user-mismatch"):a;})}
function Hf(a,b,c){if(b.idToken||b.accessToken)b.idToken&&J(this,"idToken",b.idToken),b.accessToken&&J(this,"accessToken",b.accessToken);else if(b.oauthToken&&b.oauthTokenSecret)J(this,"accessToken",b.oauthToken),J(this,"secret",b.oauthTokenSecret);else throw new L("internal-error","failed to construct a credential");J(this,"providerId",a);J(this,"signInMethod",c)}Hf.prototype.xa=function(a){return If(a,Jf(this))};Hf.prototype.c=function(a,b){var c=Jf(this);c.idToken=b;return Kf(a,c)};
Hf.prototype.f=function(a,b){var c=Jf(this);return Gf(Lf(a,c),b)};function Jf(a){var b={};a.idToken&&(b.id_token=a.idToken);a.accessToken&&(b.access_token=a.accessToken);a.secret&&(b.oauth_token_secret=a.secret);b.providerId=a.providerId;return{postBody:hd(b).toString(),requestUri:"http://localhost"}}
Hf.prototype.C=function(){var a={providerId:this.providerId,signInMethod:this.signInMethod};this.idToken&&(a.oauthIdToken=this.idToken);this.accessToken&&(a.oauthAccessToken=this.accessToken);this.secret&&(a.oauthTokenSecret=this.secret);return a};function Mf(a,b){this.zc=b||[];K(this,{providerId:a,isOAuthProvider:!0});this.tb={};this.Za=(uf(a)||{}).Ma||null;this.Xa=null}Mf.prototype.Ca=function(a){this.tb=$a(a);return this};function N(a){Mf.call(this,a,sf);this.a=[]}t(N,Mf);
N.prototype.ta=function(a){Fa(this.a,a)||this.a.push(a);return this};N.prototype.yb=function(){return Ja(this.a)};N.prototype.credential=function(a,b){if(!a&&!b)throw new L("argument-error","credential failed: must provide the ID token and/or the access token.");return new Hf(this.providerId,{idToken:a||null,accessToken:b||null},this.providerId)};function Nf(){N.call(this,"facebook.com")}t(Nf,N);J(Nf,"PROVIDER_ID","facebook.com");J(Nf,"FACEBOOK_SIGN_IN_METHOD","facebook.com");
function Of(a){if(!a)throw new L("argument-error","credential failed: expected 1 argument (the OAuth access token).");var b=a;q(a)&&(b=a.accessToken);return(new Nf).credential(null,b)}function Pf(){N.call(this,"github.com")}t(Pf,N);J(Pf,"PROVIDER_ID","github.com");J(Pf,"GITHUB_SIGN_IN_METHOD","github.com");function Qf(a){if(!a)throw new L("argument-error","credential failed: expected 1 argument (the OAuth access token).");var b=a;q(a)&&(b=a.accessToken);return(new Pf).credential(null,b)}
function Rf(){N.call(this,"google.com");this.ta("profile")}t(Rf,N);J(Rf,"PROVIDER_ID","google.com");J(Rf,"GOOGLE_SIGN_IN_METHOD","google.com");function Sf(a,b){var c=a;q(a)&&(c=a.idToken,b=a.accessToken);return(new Rf).credential(c,b)}function Tf(){Mf.call(this,"twitter.com",rf)}t(Tf,Mf);J(Tf,"PROVIDER_ID","twitter.com");J(Tf,"TWITTER_SIGN_IN_METHOD","twitter.com");
function Uf(a,b){var c=a;q(c)||(c={oauthToken:a,oauthTokenSecret:b});if(!c.oauthToken||!c.oauthTokenSecret)throw new L("argument-error","credential failed: expected 2 arguments (the OAuth access token and secret).");return new Hf("twitter.com",c,"twitter.com")}function Vf(a,b,c){this.a=a;this.b=b;J(this,"providerId","password");J(this,"signInMethod",c===O.EMAIL_LINK_SIGN_IN_METHOD?O.EMAIL_LINK_SIGN_IN_METHOD:O.EMAIL_PASSWORD_SIGN_IN_METHOD)}
Vf.prototype.xa=function(a){return this.signInMethod==O.EMAIL_LINK_SIGN_IN_METHOD?P(a,Wf,{email:this.a,oobCode:this.b}):P(a,Xf,{email:this.a,password:this.b})};Vf.prototype.c=function(a,b){return this.signInMethod==O.EMAIL_LINK_SIGN_IN_METHOD?P(a,Yf,{idToken:b,email:this.a,oobCode:this.b}):P(a,Zf,{idToken:b,email:this.a,password:this.b})};Vf.prototype.f=function(a,b){return Gf(this.xa(a),b)};Vf.prototype.C=function(){return{email:this.a,password:this.b,signInMethod:this.signInMethod}};
function O(){K(this,{providerId:"password",isOAuthProvider:!1})}function $f(a,b){b=ag(b);if(!b)throw new L("argument-error","Invalid email link!");return new Vf(a,b,O.EMAIL_LINK_SIGN_IN_METHOD)}function ag(a){a=Ff(a);a=new Ef(a);var b=cd(a.a,"oobCode")||null;return"signIn"===(cd(a.a,"mode")||null)&&b?b:null}K(O,{PROVIDER_ID:"password"});K(O,{EMAIL_LINK_SIGN_IN_METHOD:"emailLink"});K(O,{EMAIL_PASSWORD_SIGN_IN_METHOD:"password"});
function bg(a){if(!(a.Ra&&a.Qa||a.Ea&&a.Y))throw new L("internal-error");this.a=a;J(this,"providerId","phone");J(this,"signInMethod","phone")}bg.prototype.xa=function(a){return a.Sa(cg(this))};bg.prototype.c=function(a,b){var c=cg(this);c.idToken=b;return P(a,dg,c)};bg.prototype.f=function(a,b){var c=cg(this);c.operation="REAUTH";a=P(a,eg,c);return Gf(a,b)};
bg.prototype.C=function(){var a={providerId:"phone"};this.a.Ra&&(a.verificationId=this.a.Ra);this.a.Qa&&(a.verificationCode=this.a.Qa);this.a.Ea&&(a.temporaryProof=this.a.Ea);this.a.Y&&(a.phoneNumber=this.a.Y);return a};function cg(a){return a.a.Ea&&a.a.Y?{temporaryProof:a.a.Ea,phoneNumber:a.a.Y}:{sessionInfo:a.a.Ra,code:a.a.Qa}}
function fg(a){try{this.a=a||firebase.auth()}catch(b){throw new L("argument-error","Either an instance of firebase.auth.Auth must be passed as an argument to the firebase.auth.PhoneAuthProvider constructor, or the default firebase App instance must be initialized via firebase.initializeApp().");}K(this,{providerId:"phone",isOAuthProvider:!1})}
fg.prototype.Sa=function(a,b){var c=this.a.b;return z(b.verify()).then(function(d){if(!l(d))throw new L("argument-error","An implementation of firebase.auth.ApplicationVerifier.prototype.verify() must return a firebase.Promise that resolves with a string.");switch(b.type){case "recaptcha":return gg(c,{phoneNumber:a,recaptchaToken:d}).then(function(a){"function"===typeof b.reset&&b.reset();return a},function(a){"function"===typeof b.reset&&b.reset();throw a;});default:throw new L("argument-error",
'Only firebase.auth.ApplicationVerifiers with type="recaptcha" are currently supported.');}})};function hg(a,b){if(!a)throw new L("missing-verification-id");if(!b)throw new L("missing-verification-code");return new bg({Ra:a,Qa:b})}K(fg,{PROVIDER_ID:"phone"});K(fg,{PHONE_SIGN_IN_METHOD:"phone"});
function ig(a){if(a.temporaryProof&&a.phoneNumber)return new bg({Ea:a.temporaryProof,Y:a.phoneNumber});var b=a&&a.providerId;if(!b||"password"===b)return null;var c=a&&a.oauthAccessToken,d=a&&a.oauthTokenSecret;a=a&&a.oauthIdToken;try{switch(b){case "google.com":return Sf(a,c);case "facebook.com":return Of(c);case "github.com":return Qf(c);case "twitter.com":return Uf(c,d);default:return(new N(b)).credential(a,c)}}catch(e){return null}}
function jg(a){if(!a.isOAuthProvider)throw new L("invalid-oauth-provider");};function kg(a,b,c,d,e){this.b=a;this.c=b||null;this.f=c||null;this.g=d||null;this.a=e||null;if(this.f||this.a){if(this.f&&this.a)throw new L("invalid-auth-event");if(this.f&&!this.g)throw new L("invalid-auth-event");}else throw new L("invalid-auth-event");}kg.prototype.C=function(){return{type:this.b,eventId:this.c,urlResponse:this.f,sessionId:this.g,error:this.a&&this.a.C()}};function lg(a){a=a||{};return a.type?new kg(a.type,a.eventId,a.urlResponse,a.sessionId,a.error&&Ye(a.error)):null};function mg(){this.b=null;this.a=[]}var ng=null;mg.prototype.subscribe=function(a){var b=this;this.a.push(a);this.b||(this.b=function(a){for(var c=0;c<b.a.length;c++)b.a[c](a)},a=I("universalLinks.subscribe",k),"function"===typeof a&&a(null,this.b))};mg.prototype.unsubscribe=function(a){Ha(this.a,function(b){return b==a})};function og(a){var b="unauthorized-domain",c=void 0,d=dd(a);a=d.b;d=d.c;"chrome-extension"==d?c=Ka("This chrome extension ID (chrome-extension://%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.",a):"http"==d||"https"==d?c=Ka("This domain (%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.",a):b="operation-not-supported-in-this-environment";
L.call(this,b,c)}t(og,L);function pg(a,b,c){L.call(this,a,c);a=b||{};a.ub&&J(this,"email",a.ub);a.Y&&J(this,"phoneNumber",a.Y);a.credential&&J(this,"credential",a.credential)}t(pg,L);pg.prototype.C=function(){var a={code:this.code,message:this.message};this.email&&(a.email=this.email);this.phoneNumber&&(a.phoneNumber=this.phoneNumber);var b=this.credential&&this.credential.C();b&&bb(a,b);return a};pg.prototype.toJSON=function(){return this.C()};
function qg(a){if(a.code){var b=a.code||"";0==b.indexOf(We)&&(b=b.substring(We.length));var c={credential:ig(a)};if(a.email)c.ub=a.email;else if(a.phoneNumber)c.Y=a.phoneNumber;else return new L(b,a.message||void 0);return new pg(b,c,a.message)}return null};var rg=/^[+a-zA-Z0-9_.!#$%&'*\/=?^`{|}~-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,63}$/;function sg(){}sg.prototype.c=null;function tg(a){return a.c||(a.c=a.b())};var ug;function vg(){}t(vg,sg);vg.prototype.a=function(){var a=wg(this);return a?new ActiveXObject(a):new XMLHttpRequest};vg.prototype.b=function(){var a={};wg(this)&&(a[0]=!0,a[1]=!0);return a};
function wg(a){if(!a.f&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.f=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.f}ug=new vg;function xg(){}t(xg,sg);xg.prototype.a=function(){var a=new XMLHttpRequest;if("withCredentials"in a)return a;if("undefined"!=typeof XDomainRequest)return new yg;throw Error("Unsupported browser");};xg.prototype.b=function(){return{}};
function yg(){this.a=new XDomainRequest;this.readyState=0;this.onreadystatechange=null;this.responseText="";this.status=-1;this.statusText="";this.a.onload=r(this.ac,this);this.a.onerror=r(this.zb,this);this.a.onprogress=r(this.bc,this);this.a.ontimeout=r(this.ec,this)}g=yg.prototype;g.open=function(a,b,c){if(null!=c&&!c)throw Error("Only async requests are supported.");this.a.open(a,b)};
g.send=function(a){if(a)if("string"==typeof a)this.a.send(a);else throw Error("Only string data is supported");else this.a.send()};g.abort=function(){this.a.abort()};g.setRequestHeader=function(){};g.getResponseHeader=function(a){return"content-type"==a.toLowerCase()?this.a.contentType:""};g.ac=function(){this.status=200;this.responseText=this.a.responseText;zg(this,4)};g.zb=function(){this.status=500;this.responseText="";zg(this,4)};g.ec=function(){this.zb()};
g.bc=function(){this.status=200;zg(this,1)};function zg(a,b){a.readyState=b;if(a.onreadystatechange)a.onreadystatechange()}g.getAllResponseHeaders=function(){return"content-type: "+this.a.contentType};function Ag(a,b,c){this.reset(a,b,c,void 0,void 0)}Ag.prototype.a=null;var Bg=0;Ag.prototype.reset=function(a,b,c,d,e){"number"==typeof e||Bg++;d||na();delete this.a};function Cg(a){this.f=a;this.b=this.c=this.a=null}function Dg(a,b){this.name=a;this.value=b}Dg.prototype.toString=function(){return this.name};var Eg=new Dg("SEVERE",1E3),Fg=new Dg("WARNING",900),Gg=new Dg("CONFIG",700),Hg=new Dg("FINE",500);function Ig(a){if(a.c)return a.c;if(a.a)return Ig(a.a);ra("Root logger has no level set.");return null}Cg.prototype.log=function(a,b,c){if(a.value>=Ig(this).value)for(n(b)&&(b=b()),a=new Ag(a,String(b),this.f),c&&(a.a=c),c=this;c;)c=c.a};var Jg={},Kg=null;
function Lg(a){Kg||(Kg=new Cg(""),Jg[""]=Kg,Kg.c=Gg);var b;if(!(b=Jg[a])){b=new Cg(a);var c=a.lastIndexOf("."),d=a.substr(c+1);c=Lg(a.substr(0,c));c.b||(c.b={});c.b[d]=b;b.a=c;Jg[a]=b}return b};function Q(a,b){a&&a.log(Hg,b,void 0)};function Mg(a){this.f=a}t(Mg,sg);Mg.prototype.a=function(){return new Ng(this.f)};Mg.prototype.b=function(a){return function(){return a}}({});function Ng(a){F.call(this);this.i=a;this.readyState=Og;this.status=0;this.responseText=this.statusText="";this.onreadystatechange=null;this.g=new Headers;this.b=null;this.h="GET";this.c="";this.a=!1;this.f=Lg("goog.net.FetchXmlHttp")}t(Ng,F);var Og=0;g=Ng.prototype;
g.open=function(a,b){if(this.readyState!=Og)throw this.abort(),Error("Error reopening a connection");this.h=a;this.c=b;this.readyState=1;Pg(this)};g.send=function(a){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.a=!0;var b={headers:this.g,method:this.h,credentials:void 0,cache:void 0};a&&(b.body=a);this.i.fetch(new Request(this.c,b)).then(this.dc.bind(this),this.Ab.bind(this))};
g.abort=function(){this.responseText="";this.g=new Headers;this.status=0;1<=this.readyState&&this.a&&4!=this.readyState&&(this.readyState=4,this.a=!1,Pg(this));this.readyState=Og};g.dc=function(a){this.a&&(this.b||(this.b=a.headers,this.readyState=2,Pg(this)),this.a&&(this.readyState=3,Pg(this),this.a&&a.text().then(this.cc.bind(this,a),this.Ab.bind(this))))};g.cc=function(a,b){this.a&&(this.status=a.status,this.statusText=a.statusText,this.responseText=b,this.readyState=4,Pg(this))};
g.Ab=function(a){var b=this.f;b&&b.log(Fg,"Failed to fetch url "+this.c,a instanceof Error?a:Error(a));this.a&&(this.readyState=4,Pg(this))};g.setRequestHeader=function(a,b){this.g.append(a,b)};g.getResponseHeader=function(a){return this.b?this.b.get(a.toLowerCase())||"":((a=this.f)&&a.log(Fg,"Attempting to get response header but no headers have been received for url: "+this.c,void 0),"")};
g.getAllResponseHeaders=function(){if(!this.b){var a=this.f;a&&a.log(Fg,"Attempting to get all response headers but no headers have been received for url: "+this.c,void 0);return""}a=[];for(var b=this.b.entries(),c=b.next();!c.done;)c=c.value,a.push(c[0]+": "+c[1]),c=b.next();return a.join("\r\n")};function Pg(a){a.onreadystatechange&&a.onreadystatechange.call(a)};function Qg(a){F.call(this);this.headers=new Lc;this.D=a||null;this.c=!1;this.A=this.a=null;this.h=this.N=this.l="";this.f=this.I=this.i=this.G=!1;this.g=0;this.s=null;this.m=Rg;this.v=this.O=!1}t(Qg,F);var Rg="";Qg.prototype.b=Lg("goog.net.XhrIo");var Sg=/^https?$/i,Tg=["POST","PUT"];
function Ug(a,b,c,d,e){if(a.a)throw Error("[goog.net.XhrIo] Object is active with another request="+a.l+"; newUri="+b);c=c?c.toUpperCase():"GET";a.l=b;a.h="";a.N=c;a.G=!1;a.c=!0;a.a=a.D?a.D.a():ug.a();a.A=a.D?tg(a.D):tg(ug);a.a.onreadystatechange=r(a.Db,a);try{Q(a.b,Vg(a,"Opening Xhr")),a.I=!0,a.a.open(c,String(b),!0),a.I=!1}catch(h){Q(a.b,Vg(a,"Error opening Xhr: "+h.message));Wg(a,h);return}b=d||"";var f=new Lc(a.headers);e&&Kc(e,function(a,b){f.set(b,a)});e=Da(f.T());d=k.FormData&&b instanceof
k.FormData;!Fa(Tg,c)||e||d||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");f.forEach(function(a,b){this.a.setRequestHeader(b,a)},a);a.m&&(a.a.responseType=a.m);"withCredentials"in a.a&&a.a.withCredentials!==a.O&&(a.a.withCredentials=a.O);try{Xg(a),0<a.g&&(a.v=Yg(a.a),Q(a.b,Vg(a,"Will abort after "+a.g+"ms if incomplete, xhr2 "+a.v)),a.v?(a.a.timeout=a.g,a.a.ontimeout=r(a.Fa,a)):a.s=Fc(a.Fa,a.g,a)),Q(a.b,Vg(a,"Sending request")),a.i=!0,a.a.send(b),a.i=!1}catch(h){Q(a.b,Vg(a,
"Send error: "+h.message)),Wg(a,h)}}function Yg(a){return B&&Xb(9)&&"number"==typeof a.timeout&&void 0!==a.ontimeout}function Ea(a){return"content-type"==a.toLowerCase()}g=Qg.prototype;g.Fa=function(){"undefined"!=typeof aa&&this.a&&(this.h="Timed out after "+this.g+"ms, aborting",Q(this.b,Vg(this,this.h)),this.dispatchEvent("timeout"),this.abort(8))};function Wg(a,b){a.c=!1;a.a&&(a.f=!0,a.a.abort(),a.f=!1);a.h=b;Zg(a);$g(a)}
function Zg(a){a.G||(a.G=!0,a.dispatchEvent("complete"),a.dispatchEvent("error"))}g.abort=function(){this.a&&this.c&&(Q(this.b,Vg(this,"Aborting")),this.c=!1,this.f=!0,this.a.abort(),this.f=!1,this.dispatchEvent("complete"),this.dispatchEvent("abort"),$g(this))};g.ua=function(){this.a&&(this.c&&(this.c=!1,this.f=!0,this.a.abort(),this.f=!1),$g(this,!0));Qg.lb.ua.call(this)};g.Db=function(){this.pa||(this.I||this.i||this.f?ah(this):this.sc())};g.sc=function(){ah(this)};
function ah(a){if(a.c&&"undefined"!=typeof aa)if(a.A[1]&&4==bh(a)&&2==ch(a))Q(a.b,Vg(a,"Local request error detected and ignored"));else if(a.i&&4==bh(a))Fc(a.Db,0,a);else if(a.dispatchEvent("readystatechange"),4==bh(a)){Q(a.b,Vg(a,"Request complete"));a.c=!1;try{var b=ch(a);a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}var d;if(!(d=c)){var e;if(e=0===b){var f=String(a.l).match(Oc)[1]||null;if(!f&&k.self&&k.self.location){var h=k.self.location.protocol;
f=h.substr(0,h.length-1)}e=!Sg.test(f?f.toLowerCase():"")}d=e}if(d)a.dispatchEvent("complete"),a.dispatchEvent("success");else{try{var m=2<bh(a)?a.a.statusText:""}catch(p){Q(a.b,"Can not get status: "+p.message),m=""}a.h=m+" ["+ch(a)+"]";Zg(a)}}finally{$g(a)}}}function $g(a,b){if(a.a){Xg(a);var c=a.a,d=a.A[0]?ca:null;a.a=null;a.A=null;b||a.dispatchEvent("ready");try{c.onreadystatechange=d}catch(e){(a=a.b)&&a.log(Eg,"Problem encountered resetting onreadystatechange: "+e.message,void 0)}}}
function Xg(a){a.a&&a.v&&(a.a.ontimeout=null);a.s&&(k.clearTimeout(a.s),a.s=null)}function bh(a){return a.a?a.a.readyState:0}function ch(a){try{return 2<bh(a)?a.a.status:-1}catch(b){return-1}}function dh(a){try{return a.a?a.a.responseText:""}catch(b){return Q(a.b,"Can not get responseText: "+b.message),""}}
g.getResponse=function(){try{if(!this.a)return null;if("response"in this.a)return this.a.response;switch(this.m){case Rg:case "text":return this.a.responseText;case "arraybuffer":if("mozResponseArrayBuffer"in this.a)return this.a.mozResponseArrayBuffer}var a=this.b;a&&a.log(Eg,"Response type "+this.m+" is not supported on this browser",void 0);return null}catch(b){return Q(this.b,"Can not get response: "+b.message),null}};function Vg(a,b){return b+" ["+a.N+" "+a.l+" "+ch(a)+"]"};/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
function eh(a,b){this.g=[];this.v=a;this.s=b||null;this.f=this.a=!1;this.c=void 0;this.u=this.A=this.i=!1;this.h=0;this.b=null;this.l=0}eh.prototype.cancel=function(a){if(this.a)this.c instanceof eh&&this.c.cancel();else{if(this.b){var b=this.b;delete this.b;a?b.cancel(a):(b.l--,0>=b.l&&b.cancel())}this.v?this.v.call(this.s,this):this.u=!0;this.a||(a=new fh(this),gh(this),hh(this,!1,a))}};eh.prototype.m=function(a,b){this.i=!1;hh(this,a,b)};function hh(a,b,c){a.a=!0;a.c=c;a.f=!b;ih(a)}
function gh(a){if(a.a){if(!a.u)throw new jh(a);a.u=!1}}eh.prototype.D=function(){gh(this);hh(this,!0,null)};function kh(a,b){lh(a,null,b,void 0)}function lh(a,b,c,d){a.g.push([b,c,d]);a.a&&ih(a)}eh.prototype.then=function(a,b,c){var d,e,f=new y(function(a,b){d=a;e=b});lh(this,d,function(a){a instanceof fh?f.cancel():e(a)});return f.then(a,b,c)};oa(eh);function mh(a){return Ca(a.g,function(a){return n(a[1])})}
function ih(a){if(a.h&&a.a&&mh(a)){var b=a.h,c=nh[b];c&&(k.clearTimeout(c.a),delete nh[b]);a.h=0}a.b&&(a.b.l--,delete a.b);b=a.c;for(var d=c=!1;a.g.length&&!a.i;){var e=a.g.shift(),f=e[0],h=e[1];e=e[2];if(f=a.f?h:f)try{var m=f.call(e||a.s,b);void 0!==m&&(a.f=a.f&&(m==b||m instanceof Error),a.c=b=m);if(pa(b)||"function"===typeof k.Promise&&b instanceof k.Promise)d=!0,a.i=!0}catch(p){b=p,a.f=!0,mh(a)||(c=!0)}}a.c=b;d&&(m=r(a.m,a,!0),d=r(a.m,a,!1),b instanceof eh?(lh(b,m,d),b.A=!0):b.then(m,d));c&&(b=
new oh(b),nh[b.a]=b,a.h=b.a)}function jh(){u.call(this)}t(jh,u);jh.prototype.message="Deferred has already fired";jh.prototype.name="AlreadyCalledError";function fh(){u.call(this)}t(fh,u);fh.prototype.message="Deferred was canceled";fh.prototype.name="CanceledError";function oh(a){this.a=k.setTimeout(r(this.c,this),0);this.b=a}oh.prototype.c=function(){delete nh[this.a];throw this.b;};var nh={};function ph(a){var b={},c=b.document||document,d=td(a),e=document.createElement("SCRIPT"),f={Fb:e,Fa:void 0},h=new eh(qh,f),m=null,p=null!=b.timeout?b.timeout:5E3;0<p&&(m=window.setTimeout(function(){rh(e,!0);var a=new sh(th,"Timeout reached for loading script "+d);gh(h);hh(h,!1,a)},p),f.Fa=m);e.onload=e.onreadystatechange=function(){e.readyState&&"loaded"!=e.readyState&&"complete"!=e.readyState||(rh(e,b.ad||!1,m),h.D())};e.onerror=function(){rh(e,!0,m);var a=new sh(uh,"Error while loading script "+
d);gh(h);hh(h,!1,a)};f=b.attributes||{};bb(f,{type:"text/javascript",charset:"UTF-8"});Jd(e,f);e.src=td(a);vh(c).appendChild(e);return h}function vh(a){var b;return(b=(a||document).getElementsByTagName("HEAD"))&&0!=b.length?b[0]:a.documentElement}function qh(){if(this&&this.Fb){var a=this.Fb;a&&"SCRIPT"==a.tagName&&rh(a,!0,this.Fa)}}
function rh(a,b,c){null!=c&&k.clearTimeout(c);a.onload=ca;a.onerror=ca;a.onreadystatechange=ca;b&&window.setTimeout(function(){a&&a.parentNode&&a.parentNode.removeChild(a)},0)}var uh=0,th=1;function sh(a,b){var c="Jsloader error (code #"+a+")";b&&(c+=": "+b);u.call(this,c);this.code=a}t(sh,u);function wh(a){this.f=a}t(wh,sg);wh.prototype.a=function(){return new this.f};wh.prototype.b=function(){return{}};
function xh(a,b,c){this.b=a;a=b||{};this.i=a.secureTokenEndpoint||"https://securetoken.googleapis.com/v1/token";this.l=a.secureTokenTimeout||yh;this.f=$a(a.secureTokenHeaders||zh);this.g=a.firebaseEndpoint||"https://www.googleapis.com/identitytoolkit/v3/relyingparty/";this.h=a.firebaseTimeout||Ah;this.a=$a(a.firebaseHeaders||Bh);c&&(this.a["X-Client-Version"]=c,this.f["X-Client-Version"]=c);c="Node"==me();c=k.XMLHttpRequest||c&&firebase.INTERNAL.node&&firebase.INTERNAL.node.XMLHttpRequest;if(!c&&
!le())throw new L("internal-error","The XMLHttpRequest compatibility library was not found.");this.c=void 0;le()?this.c=new Mg(self):ne()?this.c=new wh(c):this.c=new xg}var Ch,M="idToken",yh=new Be(3E4,6E4),zh={"Content-Type":"application/x-www-form-urlencoded"},Ah=new Be(3E4,6E4),Bh={"Content-Type":"application/json"};function Dh(a,b){b?a.a["X-Firebase-Locale"]=b:delete a.a["X-Firebase-Locale"]}
function Eh(a,b){b?(a.a["X-Client-Version"]=b,a.f["X-Client-Version"]=b):(delete a.a["X-Client-Version"],delete a.f["X-Client-Version"])}function Fh(a,b,c,d,e,f,h){Ae()?(Yd()||le()?a=r(a.m,a):(Ch||(Ch=new y(function(a,b){Gh(a,b)})),a=r(a.u,a)),a(b,c,d,e,f,h)):c&&c(null)}
xh.prototype.m=function(a,b,c,d,e,f){if(le()&&("undefined"===typeof k.fetch||"undefined"===typeof k.Headers||"undefined"===typeof k.Request))throw new L("operation-not-supported-in-this-environment","fetch, Headers and Request native APIs or equivalent Polyfills must be available to support HTTP requests from a Worker environment.");var h=new Qg(this.c);if(f){h.g=Math.max(0,f);var m=setTimeout(function(){h.dispatchEvent("timeout")},f)}tc(h,"complete",function(){m&&clearTimeout(m);var a=null;try{a=
JSON.parse(dh(this))||null}catch(E){a=null}b&&b(a)});zc(h,"ready",function(){m&&clearTimeout(m);Jb(this)});zc(h,"timeout",function(){m&&clearTimeout(m);Jb(this);b&&b(null)});Ug(h,a,c,d,e)};var Hh=qd("https://apis.google.com/js/client.js?onload=%{onload}"),Ih="__fcb"+Math.floor(1E6*Math.random()).toString();
function Gh(a,b){if(((window.gapi||{}).client||{}).request)a();else{k[Ih]=function(){((window.gapi||{}).client||{}).request?a():b(Error("CORS_UNSUPPORTED"))};var c=ud(Hh,{onload:Ih});kh(ph(c),function(){b(Error("CORS_UNSUPPORTED"))})}}
xh.prototype.u=function(a,b,c,d,e){var f=this;Ch.then(function(){window.gapi.client.setApiKey(f.b);var h=window.gapi.auth.getToken();window.gapi.auth.setToken(null);window.gapi.client.request({path:a,method:c,body:d,headers:e,authType:"none",callback:function(a){window.gapi.auth.setToken(h);b&&b(a)}})}).o(function(a){b&&b({error:{message:a&&a.message||"CORS_UNSUPPORTED"}})})};
function Jh(a,b){return new y(function(c,d){"refresh_token"==b.grant_type&&b.refresh_token||"authorization_code"==b.grant_type&&b.code?Fh(a,a.i+"?key="+encodeURIComponent(a.b),function(a){a?a.error?d(Kh(a)):a.access_token&&a.refresh_token?c(a):d(new L("internal-error")):d(new L("network-request-failed"))},"POST",hd(b).toString(),a.f,a.l.get()):d(new L("internal-error"))})}
function Lh(a,b,c,d,e,f){var h=dd(a.g+b);G(h,"key",a.b);f&&G(h,"cb",na().toString());var m="GET"==c;if(m)for(var p in d)d.hasOwnProperty(p)&&G(h,p,d[p]);return new y(function(b,f){Fh(a,h.toString(),function(a){a?a.error?f(Kh(a,e||{})):b(a):f(new L("network-request-failed"))},c,m?void 0:Od(we(d)),a.a,a.h.get())})}function Mh(a){if(!rg.test(a.email))throw new L("invalid-email");}function Nh(a){"email"in a&&Mh(a)}
function Oh(a,b){return P(a,Ph,{identifier:b,continueUri:te()?Vd():"http://localhost"}).then(function(a){return a.allProviders||[]})}function Qh(a,b){return P(a,Ph,{identifier:b,continueUri:te()?Vd():"http://localhost"}).then(function(a){return a.signinMethods||[]})}function Rh(a){return P(a,Sh,{}).then(function(a){return a.authorizedDomains||[]})}function Th(a){if(!a[M])throw new L("internal-error");}
function Uh(a){if(a.phoneNumber||a.temporaryProof){if(!a.phoneNumber||!a.temporaryProof)throw new L("internal-error");}else{if(!a.sessionInfo)throw new L("missing-verification-id");if(!a.code)throw new L("missing-verification-code");}}xh.prototype.jb=function(){return P(this,Vh,{})};xh.prototype.mb=function(a,b){return P(this,Wh,{idToken:a,email:b})};xh.prototype.nb=function(a,b){return P(this,Zf,{idToken:a,password:b})};var Xh={displayName:"DISPLAY_NAME",photoUrl:"PHOTO_URL"};g=xh.prototype;
g.ob=function(a,b){var c={idToken:a},d=[];Ya(Xh,function(a,f){var e=b[f];null===e?d.push(a):f in b&&(c[f]=e)});d.length&&(c.deleteAttribute=d);return P(this,Wh,c)};g.gb=function(a,b){a={requestType:"PASSWORD_RESET",email:a};bb(a,b);return P(this,Yh,a)};g.hb=function(a,b){a={requestType:"EMAIL_SIGNIN",email:a};bb(a,b);return P(this,Zh,a)};g.fb=function(a,b){a={requestType:"VERIFY_EMAIL",idToken:a};bb(a,b);return P(this,$h,a)};function gg(a,b){return P(a,ai,b)}g.Sa=function(a){return P(this,bi,a)};
function ci(a,b,c){return P(a,di,{idToken:b,deleteProvider:c})}function ei(a){if(!a.requestUri||!a.sessionId&&!a.postBody)throw new L("internal-error");}
function fi(a){var b=null;a.needConfirmation?(a.code="account-exists-with-different-credential",b=qg(a)):"FEDERATED_USER_ID_ALREADY_LINKED"==a.errorMessage?(a.code="credential-already-in-use",b=qg(a)):"EMAIL_EXISTS"==a.errorMessage?(a.code="email-already-in-use",b=qg(a)):a.errorMessage&&(b=gi(a.errorMessage));if(b)throw b;if(!a[M])throw new L("internal-error");}function If(a,b){b.returnIdpCredential=!0;return P(a,hi,b)}function Kf(a,b){b.returnIdpCredential=!0;return P(a,ii,b)}
function Lf(a,b){b.returnIdpCredential=!0;b.autoCreate=!1;return P(a,ji,b)}function ki(a){if(!a.oobCode)throw new L("invalid-action-code");}g.Wa=function(a,b){return P(this,li,{oobCode:a,newPassword:b})};g.Ia=function(a){return P(this,mi,{oobCode:a})};g.Ua=function(a){return P(this,ni,{oobCode:a})};
var ni={endpoint:"setAccountInfo",w:ki,$:"email"},mi={endpoint:"resetPassword",w:ki,J:function(a){if(!a.email||!a.requestType)throw new L("internal-error");}},oi={endpoint:"signupNewUser",w:function(a){Mh(a);if(!a.password)throw new L("weak-password");},J:Th,P:!0},Ph={endpoint:"createAuthUri"},pi={endpoint:"deleteAccount",S:["idToken"]},di={endpoint:"setAccountInfo",S:["idToken","deleteProvider"],w:function(a){if(!fa(a.deleteProvider))throw new L("internal-error");}},Wf={endpoint:"emailLinkSignin",
S:["email","oobCode"],w:Mh,J:Th,P:!0},Yf={endpoint:"emailLinkSignin",S:["idToken","email","oobCode"],w:Mh,J:Th,P:!0},qi={endpoint:"getAccountInfo"},Zh={endpoint:"getOobConfirmationCode",S:["requestType"],w:function(a){if("EMAIL_SIGNIN"!=a.requestType)throw new L("internal-error");Mh(a)},$:"email"},$h={endpoint:"getOobConfirmationCode",S:["idToken","requestType"],w:function(a){if("VERIFY_EMAIL"!=a.requestType)throw new L("internal-error");},$:"email"},Yh={endpoint:"getOobConfirmationCode",S:["requestType"],
w:function(a){if("PASSWORD_RESET"!=a.requestType)throw new L("internal-error");Mh(a)},$:"email"},Sh={pb:!0,endpoint:"getProjectConfig",Cb:"GET"},ri={pb:!0,endpoint:"getRecaptchaParam",Cb:"GET",J:function(a){if(!a.recaptchaSiteKey)throw new L("internal-error");}},li={endpoint:"resetPassword",w:ki,$:"email"},ai={endpoint:"sendVerificationCode",S:["phoneNumber","recaptchaToken"],$:"sessionInfo"},Wh={endpoint:"setAccountInfo",S:["idToken"],w:Nh,P:!0},Zf={endpoint:"setAccountInfo",S:["idToken"],w:function(a){Nh(a);
if(!a.password)throw new L("weak-password");},J:Th,P:!0},Vh={endpoint:"signupNewUser",J:Th,P:!0},hi={endpoint:"verifyAssertion",w:ei,J:fi,P:!0},ji={endpoint:"verifyAssertion",w:ei,J:function(a){if(a.errorMessage&&"USER_NOT_FOUND"==a.errorMessage)throw new L("user-not-found");if(a.errorMessage)throw gi(a.errorMessage);if(!a[M])throw new L("internal-error");},P:!0},ii={endpoint:"verifyAssertion",w:function(a){ei(a);if(!a.idToken)throw new L("internal-error");},J:fi,P:!0},si={endpoint:"verifyCustomToken",
w:function(a){if(!a.token)throw new L("invalid-custom-token");},J:Th,P:!0},Xf={endpoint:"verifyPassword",w:function(a){Mh(a);if(!a.password)throw new L("wrong-password");},J:Th,P:!0},bi={endpoint:"verifyPhoneNumber",w:Uh,J:Th},dg={endpoint:"verifyPhoneNumber",w:function(a){if(!a.idToken)throw new L("internal-error");Uh(a)},J:function(a){if(a.temporaryProof)throw a.code="credential-already-in-use",qg(a);Th(a)}},eg={Tb:{USER_NOT_FOUND:"user-not-found"},endpoint:"verifyPhoneNumber",w:Uh,J:Th};
function P(a,b,c){if(!Le(c,b.S))return A(new L("internal-error"));var d=b.Cb||"POST",e;return z(c).then(b.w).then(function(){b.P&&(c.returnSecureToken=!0);return Lh(a,b.endpoint,d,c,b.Tb,b.pb||!1)}).then(function(a){return e=a}).then(b.J).then(function(){if(!b.$)return e;if(!(b.$ in e))throw new L("internal-error");return e[b.$]})}function gi(a){return Kh({error:{errors:[{message:a}],code:400,message:a}})}
function Kh(a,b){var c=(a.error&&a.error.errors&&a.error.errors[0]||{}).reason||"";var d={keyInvalid:"invalid-api-key",ipRefererBlocked:"app-not-authorized"};if(c=d[c]?new L(d[c]):null)return c;c=a.error&&a.error.message||"";d={INVALID_CUSTOM_TOKEN:"invalid-custom-token",CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_EMAIL:"invalid-email",INVALID_PASSWORD:"wrong-password",USER_DISABLED:"user-disabled",
MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",INVALID_MESSAGE_PAYLOAD:"invalid-message-payload",INVALID_RECIPIENT_EMAIL:"invalid-recipient-email",INVALID_SENDER:"invalid-sender",EMAIL_NOT_FOUND:"user-not-found",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",
INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",CORS_UNSUPPORTED:"cors-unsupported",DYNAMIC_LINK_NOT_ACTIVATED:"dynamic-link-not-activated",INVALID_APP_ID:"invalid-app-id",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",WEAK_PASSWORD:"weak-password",OPERATION_NOT_ALLOWED:"operation-not-allowed",USER_CANCELLED:"user-cancelled",CAPTCHA_CHECK_FAILED:"captcha-check-failed",INVALID_APP_CREDENTIAL:"invalid-app-credential",INVALID_CODE:"invalid-verification-code",
INVALID_PHONE_NUMBER:"invalid-phone-number",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_APP_CREDENTIAL:"missing-app-credential",MISSING_CODE:"missing-verification-code",MISSING_PHONE_NUMBER:"missing-phone-number",MISSING_SESSION_INFO:"missing-verification-id",QUOTA_EXCEEDED:"quota-exceeded",SESSION_EXPIRED:"code-expired",INVALID_CONTINUE_URI:"invalid-continue-uri",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",MISSING_IOS_BUNDLE_ID:"missing-ios-bundle-id",
UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",INVALID_CERT_HASH:"invalid-cert-hash"};bb(d,b||{});b=(b=c.match(/^[^\s]+\s*:\s*(.*)$/))&&1<b.length?b[1]:void 0;for(var e in d)if(0===c.indexOf(e))return new L(d[e],b);!b&&a&&(b=ve(a));return new L("internal-error",b)};var ti={Vc:{Ya:"https://www.googleapis.com/identitytoolkit/v3/relyingparty/",eb:"https://securetoken.googleapis.com/v1/token",id:"p"},Xc:{Ya:"https://staging-www.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/",eb:"https://staging-securetoken.sandbox.googleapis.com/v1/token",id:"s"},Yc:{Ya:"https://www-googleapis-test.sandbox.google.com/identitytoolkit/v3/relyingparty/",eb:"https://test-securetoken.sandbox.googleapis.com/v1/token",id:"t"}};
function ui(a){for(var b in ti)if(ti[b].id===a)return a=ti[b],{firebaseEndpoint:a.Ya,secureTokenEndpoint:a.eb};return null}var vi;vi=ui("__EID__")?"__EID__":void 0;function wi(a){this.b=a;this.a=null;this.ab=xi(this)}
function xi(a){return yi().then(function(){return new y(function(b,c){I("gapi.iframes.getContext")().open({where:document.body,url:a.b,messageHandlersFilter:I("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"),attributes:{style:{position:"absolute",top:"-100px",width:"1px",height:"1px"}},dontclear:!0},function(d){function e(){clearTimeout(f);b()}a.a=d;a.a.restyle({setHideOnLeave:!1});var f=setTimeout(function(){c(Error("Network Error"))},zi.get());d.ping(e).then(e,function(){c(Error("Network Error"))})})})})}
function Ai(a,b){return a.ab.then(function(){return new y(function(c){a.a.send(b.type,b,c,I("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"))})})}function Bi(a,b){a.ab.then(function(){a.a.register("authEvent",b,I("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"))})}var Ci=qd("https://apis.google.com/js/api.js?onload=%{onload}"),Di=new Be(3E4,6E4),zi=new Be(5E3,15E3),Ei=null;
function yi(){return Ei?Ei:Ei=(new y(function(a,b){if(Ae()){var c=function(){ze();I("gapi.load")("gapi.iframes",{callback:a,ontimeout:function(){ze();b(Error("Network Error"))},timeout:Di.get()})};if(I("gapi.iframes.Iframe"))a();else if(I("gapi.load"))c();else{var d="__iframefcb"+Math.floor(1E6*Math.random()).toString();k[d]=function(){I("gapi.load")?c():b(Error("Network Error"))};d=ud(Ci,{onload:d});z(ph(d)).o(function(){b(Error("Network Error"))})}}else b(Error("Network Error"))})).o(function(a){Ei=
null;throw a;})};function Fi(a,b,c){this.i=a;this.g=b;this.h=c;this.f=null;this.a=ed(this.i,"/__/auth/iframe");G(this.a,"apiKey",this.g);G(this.a,"appName",this.h);this.b=null;this.c=[]}Fi.prototype.toString=function(){this.f?G(this.a,"v",this.f):kd(this.a.a,"v");this.b?G(this.a,"eid",this.b):kd(this.a.a,"eid");this.c.length?G(this.a,"fw",this.c.join(",")):kd(this.a.a,"fw");return this.a.toString()};function Gi(a,b,c,d,e){this.m=a;this.u=b;this.c=c;this.l=d;this.h=this.g=this.i=null;this.a=e;this.f=null}
Gi.prototype.toString=function(){var a=ed(this.m,"/__/auth/handler");G(a,"apiKey",this.u);G(a,"appName",this.c);G(a,"authType",this.l);if(this.a.isOAuthProvider){var b=this.a;try{var c=firebase.app(this.c).auth().aa()}catch(m){c=null}b.Xa=c;G(a,"providerId",this.a.providerId);b=this.a;c=we(b.tb);for(var d in c)c[d]=c[d].toString();d=b.zc;c=$a(c);for(var e=0;e<d.length;e++){var f=d[e];f in c&&delete c[f]}b.Za&&b.Xa&&!c[b.Za]&&(c[b.Za]=b.Xa);Za(c)||G(a,"customParameters",ve(c))}"function"===typeof this.a.yb&&
(b=this.a.yb(),b.length&&G(a,"scopes",b.join(",")));this.i?G(a,"redirectUrl",this.i):kd(a.a,"redirectUrl");this.g?G(a,"eventId",this.g):kd(a.a,"eventId");this.h?G(a,"v",this.h):kd(a.a,"v");if(this.b)for(var h in this.b)this.b.hasOwnProperty(h)&&!cd(a,h)&&G(a,h,this.b[h]);this.f?G(a,"eid",this.f):kd(a.a,"eid");h=Hi(this.c);h.length&&G(a,"fw",h.join(","));return a.toString()};function Hi(a){try{return firebase.app(a).auth().Ka()}catch(b){return[]}}
function Ii(a,b,c,d,e){this.u=a;this.f=b;this.b=c;this.c=d||null;this.h=e||null;this.m=this.s=this.v=null;this.g=[];this.l=this.a=null}
function Ji(a){var b=Vd();return Rh(a).then(function(a){a:{var c=dd(b),e=c.c;c=c.b;for(var f=0;f<a.length;f++){var h=a[f];var m=c;var p=e;0==h.indexOf("chrome-extension://")?m=dd(h).b==m&&"chrome-extension"==p:"http"!=p&&"https"!=p?m=!1:fe.test(h)?m=m==h:(h=h.split(".").join("\\."),m=(new RegExp("^(.+\\."+h+"|"+h+")$","i")).test(m));if(m){a=!0;break a}}a=!1}if(!a)throw new og(Vd());})}
function Ki(a){if(a.l)return a.l;a.l=ge().then(function(){if(!a.s){var b=a.c,c=a.h,d=Hi(a.b),e=new Fi(a.u,a.f,a.b);e.f=b;e.b=c;e.c=Ja(d||[]);a.s=e.toString()}a.i=new wi(a.s);Li(a)});return a.l}g=Ii.prototype;g.Da=function(a,b,c){var d=new L("popup-closed-by-user"),e=new L("web-storage-unsupported"),f=this,h=!1;return this.ca().then(function(){Mi(f).then(function(c){c||(a&&be(a),b(e),h=!0)})}).o(function(){}).then(function(){if(!h)return ee(a)}).then(function(){if(!h)return Gc(c).then(function(){b(d)})})};
g.Gb=function(){var a=H();return!ue(a)&&!ye(a)};g.Bb=function(){return!1};
g.xb=function(a,b,c,d,e,f,h){if(!a)return A(new L("popup-blocked"));if(h&&!ue())return this.ca().o(function(b){be(a);e(b)}),d(),z();this.a||(this.a=Ji(Ni(this)));var m=this;return this.a.then(function(){var b=m.ca().o(function(b){be(a);e(b);throw b;});d();return b}).then(function(){jg(c);if(!h){var d=Oi(m.u,m.f,m.b,b,c,null,f,m.c,void 0,m.h);Wd(d,a)}}).o(function(a){"auth/network-request-failed"==a.code&&(m.a=null);throw a;})};
function Ni(a){a.m||(a.v=a.c?pe(a.c,Hi(a.b)):null,a.m=new xh(a.f,ui(a.h),a.v));return a.m}g.Ba=function(a,b,c){this.a||(this.a=Ji(Ni(this)));var d=this;return this.a.then(function(){jg(b);var e=Oi(d.u,d.f,d.b,a,b,Vd(),c,d.c,void 0,d.h);Wd(e)}).o(function(a){"auth/network-request-failed"==a.code&&(d.a=null);throw a;})};g.ca=function(){var a=this;return Ki(this).then(function(){return a.i.ab}).o(function(){a.a=null;throw new L("network-request-failed");})};g.Lb=function(){return!0};
function Oi(a,b,c,d,e,f,h,m,p,E){a=new Gi(a,b,c,d,e);a.i=f;a.g=h;a.h=m;a.b=$a(p||null);a.f=E;return a.toString()}function Li(a){if(!a.i)throw Error("IfcHandler must be initialized!");Bi(a.i,function(b){var c={};if(b&&b.authEvent){var d=!1;b=lg(b.authEvent);for(c=0;c<a.g.length;c++)d=a.g[c](b)||d;c={};c.status=d?"ACK":"ERROR";return z(c)}c.status="ERROR";return z(c)})}
function Mi(a){var b={type:"webStorageSupport"};return Ki(a).then(function(){return Ai(a.i,b)}).then(function(a){if(a&&a.length&&"undefined"!==typeof a[0].webStorageSupport)return a[0].webStorageSupport;throw Error();})}g.va=function(a){this.g.push(a)};g.Ja=function(a){Ha(this.g,function(b){return b==a})};function Pi(a){this.a=a||firebase.INTERNAL.reactNative&&firebase.INTERNAL.reactNative.AsyncStorage;if(!this.a)throw new L("internal-error","The React Native compatibility library was not found.");this.type="asyncStorage"}g=Pi.prototype;g.get=function(a){return z(this.a.getItem(a)).then(function(a){return a&&xe(a)})};g.set=function(a,b){return z(this.a.setItem(a,ve(b)))};g.X=function(a){return z(this.a.removeItem(a))};g.ia=function(){};g.ea=function(){};function Qi(){this.a={};this.type="inMemory"}g=Qi.prototype;g.get=function(a){return z(this.a[a])};g.set=function(a,b){this.a[a]=b;return z()};g.X=function(a){delete this.a[a];return z()};g.ia=function(){};g.ea=function(){};function Ri(){try{var a=!!k.indexedDB}catch(b){a=!1}if(!a)throw new L("web-storage-unsupported");this.f={};this.c=[];this.a=0;this.h=k.indexedDB;this.type="indexedDB"}var Si;function Ti(a){return new y(function(b,c){var d=a.h.open("firebaseLocalStorageDb",1);d.onerror=function(a){c(Error(a.target.errorCode))};d.onupgradeneeded=function(a){a=a.target.result;try{a.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(f){c(f)}};d.onsuccess=function(a){b(a.target.result)}})}
function Ui(a){a.g||(a.g=Ti(a));return a.g}function Vi(a){return a.objectStore("firebaseLocalStorage")}function Wi(a,b){return a.transaction(["firebaseLocalStorage"],b?"readwrite":"readonly")}function Xi(a){return new y(function(b,c){a.onsuccess=function(a){a&&a.target?b(a.target.result):b()};a.onerror=function(a){c(Error(a.target.errorCode))}})}g=Ri.prototype;
g.set=function(a,b){var c=!1,d,e=this;return Ui(this).then(function(b){d=b;b=Vi(Wi(d,!0));return Xi(b.get(a))}).then(function(f){var h=Vi(Wi(d,!0));if(f)return f.value=b,Xi(h.put(f));e.a++;c=!0;f={};f.fbase_key=a;f.value=b;return Xi(h.add(f))}).then(function(){e.f[a]=b}).ga(function(){c&&e.a--})};g.get=function(a){return Ui(this).then(function(b){return Xi(Vi(Wi(b,!1)).get(a))}).then(function(a){return a&&a.value})};
g.X=function(a){var b=!1,c=this;return Ui(this).then(function(d){b=!0;c.a++;return Xi(Vi(Wi(d,!0))["delete"](a))}).then(function(){delete c.f[a]}).ga(function(){b&&c.a--})};
g.Ic=function(){var a=this;return Ui(this).then(function(a){var b=Vi(Wi(a,!1));return b.getAll?Xi(b.getAll()):new y(function(a,c){var d=[],e=b.openCursor();e.onsuccess=function(b){(b=b.target.result)?(d.push(b.value),b["continue"]()):a(d)};e.onerror=function(a){c(Error(a.target.errorCode))}})}).then(function(b){var c={},d=[];if(0==a.a){for(d=0;d<b.length;d++)c[b[d].fbase_key]=b[d].value;d=Xd(a.f,c);a.f=c}return d})};g.ia=function(a){0==this.c.length&&Yi(this);this.c.push(a)};
g.ea=function(a){Ha(this.c,function(b){return b==a});0==this.c.length&&this.b&&this.b.cancel("STOP_EVENT")};function Yi(a){function b(){a.b=Gc(800).then(r(a.Ic,a)).then(function(b){0<b.length&&v(a.c,function(a){a(b)})}).then(b).o(function(a){"STOP_EVENT"!=a.message&&b()});return a.b}a.b&&a.b.cancel("STOP_EVENT");b()};function Zi(){if(!$i()){if("Node"==me())throw new L("internal-error","The LocalStorage compatibility library was not found.");throw new L("web-storage-unsupported");}this.a=aj()||firebase.INTERNAL.node.localStorage;this.type="localStorage"}function aj(){try{var a=k.localStorage,b=re();a&&(a.setItem(b,"1"),a.removeItem(b));return a}catch(c){return null}}
function $i(){var a="Node"==me();a=aj()||a&&firebase.INTERNAL.node&&firebase.INTERNAL.node.localStorage;if(!a)return!1;try{return a.setItem("__sak","1"),a.removeItem("__sak"),!0}catch(b){return!1}}g=Zi.prototype;g.get=function(a){var b=this;return z().then(function(){var c=b.a.getItem(a);return xe(c)})};g.set=function(a,b){var c=this;return z().then(function(){var d=ve(b);null===d?c.X(a):c.a.setItem(a,d)})};g.X=function(a){var b=this;return z().then(function(){b.a.removeItem(a)})};
g.ia=function(a){k.window&&qc(k.window,"storage",a)};g.ea=function(a){k.window&&D(k.window,"storage",a)};function bj(){this.type="nullStorage"}g=bj.prototype;g.get=function(){return z(null)};g.set=function(){return z()};g.X=function(){return z()};g.ia=function(){};g.ea=function(){};function cj(){if(!dj()){if("Node"==me())throw new L("internal-error","The SessionStorage compatibility library was not found.");throw new L("web-storage-unsupported");}this.a=ej()||firebase.INTERNAL.node.sessionStorage;this.type="sessionStorage"}function ej(){try{var a=k.sessionStorage,b=re();a&&(a.setItem(b,"1"),a.removeItem(b));return a}catch(c){return null}}
function dj(){var a="Node"==me();a=ej()||a&&firebase.INTERNAL.node&&firebase.INTERNAL.node.sessionStorage;if(!a)return!1;try{return a.setItem("__sak","1"),a.removeItem("__sak"),!0}catch(b){return!1}}g=cj.prototype;g.get=function(a){var b=this;return z().then(function(){var c=b.a.getItem(a);return xe(c)})};g.set=function(a,b){var c=this;return z().then(function(){var d=ve(b);null===d?c.X(a):c.a.setItem(a,d)})};g.X=function(a){var b=this;return z().then(function(){b.a.removeItem(a)})};g.ia=function(){};
g.ea=function(){};function fj(){var a={};a.Browser=gj;a.Node=hj;a.ReactNative=ij;a.Worker=jj;this.a=a[me()]}var kj,gj={B:Zi,Pa:cj},hj={B:Zi,Pa:cj},ij={B:Pi,Pa:bj},jj={B:Zi,Pa:bj};var lj={Uc:"local",NONE:"none",Wc:"session"};function mj(a){var b=new L("invalid-persistence-type"),c=new L("unsupported-persistence-type");a:{for(d in lj)if(lj[d]==a){var d=!0;break a}d=!1}if(!d||"string"!==typeof a)throw b;switch(me()){case "ReactNative":if("session"===a)throw c;break;case "Node":if("none"!==a)throw c;break;default:if(!qe()&&"none"!==a)throw c;}}
function nj(){var a=!ye(H())&&ke()?!0:!1,b=ue(),c=qe();this.m=a;this.h=b;this.l=c;this.a={};kj||(kj=new fj);a=kj;try{if(!Ud()&&Fe()||!k.indexedDB)var d=new a.a.B;else Si||(Si=new Ri),d=Si;this.g=d}catch(e){this.g=new Qi,this.h=!0}try{this.i=new a.a.Pa}catch(e){this.i=new Qi}this.u=new Qi;this.f=r(this.Kb,this);this.b={}}var oj;function pj(){oj||(oj=new nj);return oj}function qj(a,b){switch(b){case "session":return a.i;case "none":return a.u;default:return a.g}}
function rj(a,b){return"firebase:"+a.name+(b?":"+b:"")}function sj(a,b,c){var d=rj(b,c),e=qj(a,b.B);return a.get(b,c).then(function(f){var h=null;try{h=xe(k.localStorage.getItem(d))}catch(m){}if(h&&!f)return k.localStorage.removeItem(d),a.set(b,h,c);h&&f&&"localStorage"!=e.type&&k.localStorage.removeItem(d)})}g=nj.prototype;g.get=function(a,b){return qj(this,a.B).get(rj(a,b))};function tj(a,b,c){c=rj(b,c);"local"==b.B&&(a.b[c]=null);return qj(a,b.B).X(c)}
g.set=function(a,b,c){var d=rj(a,c),e=this,f=qj(this,a.B);return f.set(d,b).then(function(){return f.get(d)}).then(function(b){"local"==a.B&&(e.b[d]=b)})};g.addListener=function(a,b,c){a=rj(a,b);this.l&&(this.b[a]=k.localStorage.getItem(a));Za(this.a)&&(qj(this,"local").ia(this.f),this.h||(Ud()||!Fe())&&k.indexedDB||!this.l||uj(this));this.a[a]||(this.a[a]=[]);this.a[a].push(c)};
g.removeListener=function(a,b,c){a=rj(a,b);this.a[a]&&(Ha(this.a[a],function(a){return a==c}),0==this.a[a].length&&delete this.a[a]);Za(this.a)&&(qj(this,"local").ea(this.f),vj(this))};function uj(a){vj(a);a.c=setInterval(function(){for(var b in a.a){var c=k.localStorage.getItem(b),d=a.b[b];c!=d&&(a.b[b]=c,c=new dc({type:"storage",key:b,target:window,oldValue:d,newValue:c,a:!0}),a.Kb(c))}},1E3)}function vj(a){a.c&&(clearInterval(a.c),a.c=null)}
g.Kb=function(a){if(a&&a.g){var b=a.a.key;if(null==b)for(var c in this.a){var d=this.b[c];"undefined"===typeof d&&(d=null);var e=k.localStorage.getItem(c);e!==d&&(this.b[c]=e,this.Va(c))}else if(0==b.indexOf("firebase:")&&this.a[b]){"undefined"!==typeof a.a.a?qj(this,"local").ea(this.f):vj(this);if(this.m)if(c=k.localStorage.getItem(b),d=a.a.newValue,d!==c)null!==d?k.localStorage.setItem(b,d):k.localStorage.removeItem(b);else if(this.b[b]===d&&"undefined"===typeof a.a.a)return;var f=this;c=function(){if("undefined"!==
typeof a.a.a||f.b[b]!==k.localStorage.getItem(b))f.b[b]=k.localStorage.getItem(b),f.Va(b)};B&&Yb&&10==Yb&&k.localStorage.getItem(b)!==a.a.newValue&&a.a.newValue!==a.a.oldValue?setTimeout(c,10):c()}}else v(a,r(this.Va,this))};g.Va=function(a){this.a[a]&&v(this.a[a],function(a){a()})};function wj(a){this.a=a;this.b=pj()}var xj={name:"authEvent",B:"local"};function yj(a){return a.b.get(xj,a.a).then(function(a){return lg(a)})};function zj(){this.a=pj()};function Aj(){this.b=-1};function Bj(a,b){this.b=-1;this.b=Cj;this.f=k.Uint8Array?new Uint8Array(this.b):Array(this.b);this.g=this.c=0;this.a=[];this.i=a;this.h=b;this.l=k.Int32Array?new Int32Array(64):Array(64);void 0!==Dj||(k.Int32Array?Dj=new Int32Array(Ej):Dj=Ej);this.reset()}var Dj;t(Bj,Aj);for(var Cj=64,Fj=Cj-1,Gj=[],Hj=0;Hj<Fj;Hj++)Gj[Hj]=0;var Ij=Ia(128,Gj);Bj.prototype.reset=function(){this.g=this.c=0;this.a=k.Int32Array?new Int32Array(this.h):Ja(this.h)};
function Jj(a){for(var b=a.f,c=a.l,d=0,e=0;e<b.length;)c[d++]=b[e]<<24|b[e+1]<<16|b[e+2]<<8|b[e+3],e=4*d;for(b=16;64>b;b++){e=c[b-15]|0;d=c[b-2]|0;var f=(c[b-16]|0)+((e>>>7|e<<25)^(e>>>18|e<<14)^e>>>3)|0,h=(c[b-7]|0)+((d>>>17|d<<15)^(d>>>19|d<<13)^d>>>10)|0;c[b]=f+h|0}d=a.a[0]|0;e=a.a[1]|0;var m=a.a[2]|0,p=a.a[3]|0,E=a.a[4]|0,gc=a.a[5]|0,Hc=a.a[6]|0;f=a.a[7]|0;for(b=0;64>b;b++){var Bl=((d>>>2|d<<30)^(d>>>13|d<<19)^(d>>>22|d<<10))+(d&e^d&m^e&m)|0;h=E&gc^~E&Hc;f=f+((E>>>6|E<<26)^(E>>>11|E<<21)^(E>>>
25|E<<7))|0;h=h+(Dj[b]|0)|0;h=f+(h+(c[b]|0)|0)|0;f=Hc;Hc=gc;gc=E;E=p+h|0;p=m;m=e;e=d;d=h+Bl|0}a.a[0]=a.a[0]+d|0;a.a[1]=a.a[1]+e|0;a.a[2]=a.a[2]+m|0;a.a[3]=a.a[3]+p|0;a.a[4]=a.a[4]+E|0;a.a[5]=a.a[5]+gc|0;a.a[6]=a.a[6]+Hc|0;a.a[7]=a.a[7]+f|0}
function Kj(a,b,c){void 0===c&&(c=b.length);var d=0,e=a.c;if(l(b))for(;d<c;)a.f[e++]=b.charCodeAt(d++),e==a.b&&(Jj(a),e=0);else if(ha(b))for(;d<c;){var f=b[d++];if(!("number"==typeof f&&0<=f&&255>=f&&f==(f|0)))throw Error("message must be a byte array");a.f[e++]=f;e==a.b&&(Jj(a),e=0)}else throw Error("message must be string or array");a.c=e;a.g+=c}
var Ej=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,
4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298];function Lj(){Bj.call(this,8,Mj)}t(Lj,Bj);var Mj=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225];function Nj(a,b,c,d,e){this.u=a;this.i=b;this.l=c;this.m=d||null;this.s=e||null;this.h=b+":"+c;this.v=new zj;this.g=new wj(this.h);this.f=null;this.b=[];this.a=this.c=null}function Oj(a){return new L("invalid-cordova-configuration",a)}g=Nj.prototype;
g.ca=function(){return this.ya?this.ya:this.ya=he().then(function(){if("function"!==typeof I("universalLinks.subscribe",k))throw Oj("cordova-universal-links-plugin is not installed");if("undefined"===typeof I("BuildInfo.packageName",k))throw Oj("cordova-plugin-buildinfo is not installed");if("function"!==typeof I("cordova.plugins.browsertab.openUrl",k))throw Oj("cordova-plugin-browsertab is not installed");if("function"!==typeof I("cordova.InAppBrowser.open",k))throw Oj("cordova-plugin-inappbrowser is not installed");
},function(){throw new L("cordova-not-ready");})};function Pj(){for(var a=20,b=[];0<a;)b.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62*Math.random()))),a--;return b.join("")}function Qj(a){var b=new Lj;Kj(b,a);a=[];var c=8*b.g;56>b.c?Kj(b,Ij,56-b.c):Kj(b,Ij,b.b-(b.c-56));for(var d=63;56<=d;d--)b.f[d]=c&255,c/=256;Jj(b);for(d=c=0;d<b.i;d++)for(var e=24;0<=e;e-=8)a[c++]=b.a[d]>>e&255;return jf(a)}
g.Da=function(a,b){b(new L("operation-not-supported-in-this-environment"));return z()};g.xb=function(){return A(new L("operation-not-supported-in-this-environment"))};g.Lb=function(){return!1};g.Gb=function(){return!0};g.Bb=function(){return!0};
g.Ba=function(a,b,c){if(this.c)return A(new L("redirect-operation-pending"));var d=this,e=k.document,f=null,h=null,m=null,p=null;return this.c=z().then(function(){jg(b);return Rj(d)}).then(function(){return Sj(d,a,b,c)}).then(function(){return(new y(function(a,b){h=function(){var b=I("cordova.plugins.browsertab.close",k);a();"function"===typeof b&&b();d.a&&"function"===typeof d.a.close&&(d.a.close(),d.a=null);return!1};d.va(h);m=function(){f||(f=Gc(2E3).then(function(){b(new L("redirect-cancelled-by-user"))}))};
p=function(){Ce()&&m()};e.addEventListener("resume",m,!1);H().toLowerCase().match(/android/)||e.addEventListener("visibilitychange",p,!1)})).o(function(a){return Tj(d).then(function(){throw a;})})}).ga(function(){m&&e.removeEventListener("resume",m,!1);p&&e.removeEventListener("visibilitychange",p,!1);f&&f.cancel();h&&d.Ja(h);d.c=null})};
function Sj(a,b,c,d){var e=Pj(),f=new kg(b,d,null,e,new L("no-auth-event")),h=I("BuildInfo.packageName",k);if("string"!==typeof h)throw new L("invalid-cordova-configuration");var m=I("BuildInfo.displayName",k),p={};if(H().toLowerCase().match(/iphone|ipad|ipod/))p.ibi=h;else if(H().toLowerCase().match(/android/))p.apn=h;else return A(new L("operation-not-supported-in-this-environment"));m&&(p.appDisplayName=m);e=Qj(e);p.sessionId=e;var E=Oi(a.u,a.i,a.l,b,c,null,d,a.m,p,a.s);return a.ca().then(function(){var b=
a.h;return a.v.a.set(xj,f.C(),b)}).then(function(){var b=I("cordova.plugins.browsertab.isAvailable",k);if("function"!==typeof b)throw new L("invalid-cordova-configuration");var c=null;b(function(b){if(b){c=I("cordova.plugins.browsertab.openUrl",k);if("function"!==typeof c)throw new L("invalid-cordova-configuration");c(E)}else{c=I("cordova.InAppBrowser.open",k);if("function"!==typeof c)throw new L("invalid-cordova-configuration");b=H();b=!(!b.match(/(iPad|iPhone|iPod).*OS 7_\d/i)&&!b.match(/(iPad|iPhone|iPod).*OS 8_\d/i));
a.a=c(E,b?"_blank":"_system","location=yes")}})})}function Uj(a,b){for(var c=0;c<a.b.length;c++)try{a.b[c](b)}catch(d){}}function Rj(a){a.f||(a.f=a.ca().then(function(){return new y(function(b){function c(d){b(d);a.Ja(c);return!1}a.va(c);Vj(a)})}));return a.f}function Tj(a){var b=null;return yj(a.g).then(function(c){b=c;c=a.g;return tj(c.b,xj,c.a)}).then(function(){return b})}
function Vj(a){function b(b){d=!0;e&&e.cancel();Tj(a).then(function(d){var e=c;if(d&&b&&b.url){var f=null;e=Ff(b.url);-1!=e.indexOf("/__/auth/callback")&&(f=dd(e),f=xe(cd(f,"firebaseError")||null),f=(f="object"===typeof f?Ye(f):null)?new kg(d.b,d.c,null,null,f):new kg(d.b,d.c,e,d.g));e=f||c}Uj(a,e)})}var c=new kg("unknown",null,null,null,new L("no-auth-event")),d=!1,e=Gc(500).then(function(){return Tj(a).then(function(){d||Uj(a,c)})}),f=k.handleOpenURL;k.handleOpenURL=function(a){0==a.toLowerCase().indexOf(I("BuildInfo.packageName",
k).toLowerCase()+"://")&&b({url:a});if("function"===typeof f)try{f(a)}catch(m){console.error(m)}};ng||(ng=new mg);ng.subscribe(b)}g.va=function(a){this.b.push(a);Rj(this).o(function(b){"auth/invalid-cordova-configuration"===b.code&&(b=new kg("unknown",null,null,null,new L("no-auth-event")),a(b))})};g.Ja=function(a){Ha(this.b,function(b){return b==a})};function Wj(a){this.a=a;this.b=pj()}var Xj={name:"pendingRedirect",B:"session"};function Yj(a){return a.b.set(Xj,"pending",a.a)}function Zj(a){return tj(a.b,Xj,a.a)}function ak(a){return a.b.get(Xj,a.a).then(function(a){return"pending"==a})};function bk(a,b,c){this.v=a;this.l=b;this.u=c;this.h=[];this.f=!1;this.i=r(this.m,this);this.c=new ck;this.s=new dk;this.g=new Wj(this.l+":"+this.u);this.b={};this.b.unknown=this.c;this.b.signInViaRedirect=this.c;this.b.linkViaRedirect=this.c;this.b.reauthViaRedirect=this.c;this.b.signInViaPopup=this.s;this.b.linkViaPopup=this.s;this.b.reauthViaPopup=this.s;this.a=ek(this.v,this.l,this.u,vi)}function ek(a,b,c,d){var e=firebase.SDK_VERSION||null;return ie()?new Nj(a,b,c,e,d):new Ii(a,b,c,e,d)}
bk.prototype.reset=function(){this.f=!1;this.a.Ja(this.i);this.a=ek(this.v,this.l,this.u)};function fk(a){a.f||(a.f=!0,a.a.va(a.i));var b=a.a;return a.a.ca().o(function(c){a.a==b&&a.reset();throw c;})}function gk(a){a.a.Gb()&&fk(a).o(function(b){var c=new kg("unknown",null,null,null,new L("operation-not-supported-in-this-environment"));hk(b)&&a.m(c)});a.a.Bb()||ik(a.c)}
bk.prototype.subscribe=function(a){Fa(this.h,a)||this.h.push(a);if(!this.f){var b=this;ak(this.g).then(function(a){a?Zj(b.g).then(function(){fk(b).o(function(a){var c=new kg("unknown",null,null,null,new L("operation-not-supported-in-this-environment"));hk(a)&&b.m(c)})}):gk(b)}).o(function(){gk(b)})}};bk.prototype.unsubscribe=function(a){Ha(this.h,function(b){return b==a})};
bk.prototype.m=function(a){if(!a)throw new L("invalid-auth-event");for(var b=!1,c=0;c<this.h.length;c++){var d=this.h[c];if(d.qb(a.b,a.c)){(b=this.b[a.b])&&b.h(a,d);b=!0;break}}ik(this.c);return b};var jk=new Be(2E3,1E4),kk=new Be(3E4,6E4);bk.prototype.ba=function(){return this.c.ba()};function lk(a,b,c,d,e,f){return a.a.xb(b,c,d,function(){a.f||(a.f=!0,a.a.va(a.i))},function(){a.reset()},e,f)}function hk(a){return a&&"auth/cordova-not-ready"==a.code?!0:!1}
bk.prototype.Ba=function(a,b,c){var d=this,e;return Yj(this.g).then(function(){return d.a.Ba(a,b,c).o(function(a){if(hk(a))throw new L("operation-not-supported-in-this-environment");e=a;return Zj(d.g).then(function(){throw e;})}).then(function(){return d.a.Lb()?new y(function(){}):Zj(d.g).then(function(){return d.ba()}).then(function(){}).o(function(){})})})};bk.prototype.Da=function(a,b,c,d){return this.a.Da(c,function(c){a.fa(b,null,c,d)},jk.get())};var mk={};
function nk(a,b,c){var d=b+":"+c;mk[d]||(mk[d]=new bk(a,b,c));return mk[d]}function ck(){this.b=null;this.f=[];this.c=[];this.a=null;this.g=!1}ck.prototype.reset=function(){this.b=null;this.a&&(this.a.cancel(),this.a=null)};
ck.prototype.h=function(a,b){if(a){this.reset();this.g=!0;var c=a.b,d=a.c,e=a.a&&"auth/web-storage-unsupported"==a.a.code,f=a.a&&"auth/operation-not-supported-in-this-environment"==a.a.code;"unknown"!=c||e||f?a.a?(ok(this,!0,null,a.a),z()):b.wa(c,d)?pk(this,a,b):A(new L("invalid-auth-event")):(ok(this,!1,null,null),z())}else A(new L("invalid-auth-event"))};function ik(a){a.g||(a.g=!0,ok(a,!1,null,null))}
function pk(a,b,c){c=c.wa(b.b,b.c);var d=b.f,e=b.g,f=!!b.b.match(/Redirect$/);c(d,e).then(function(b){ok(a,f,b,null)}).o(function(b){ok(a,f,null,b)})}function qk(a,b){a.b=function(){return A(b)};if(a.c.length)for(var c=0;c<a.c.length;c++)a.c[c](b)}function rk(a,b){a.b=function(){return z(b)};if(a.f.length)for(var c=0;c<a.f.length;c++)a.f[c](b)}function ok(a,b,c,d){b?d?qk(a,d):rk(a,c):rk(a,{user:null});a.f=[];a.c=[]}
ck.prototype.ba=function(){var a=this;return new y(function(b,c){a.b?a.b().then(b,c):(a.f.push(b),a.c.push(c),sk(a))})};function sk(a){var b=new L("timeout");a.a&&a.a.cancel();a.a=Gc(kk.get()).then(function(){a.b||ok(a,!0,null,b)})}function dk(){}dk.prototype.h=function(a,b){if(a){var c=a.b,d=a.c;a.a?(b.fa(a.b,null,a.a,a.c),z()):b.wa(c,d)?tk(a,b):A(new L("invalid-auth-event"))}else A(new L("invalid-auth-event"))};
function tk(a,b){var c=a.c,d=a.b;b.wa(d,c)(a.f,a.g).then(function(a){b.fa(d,a,null,c)}).o(function(a){b.fa(d,null,a,c)})};function uk(a,b){this.a=b;J(this,"verificationId",a)}uk.prototype.confirm=function(a){a=hg(this.verificationId,a);return this.a(a)};function vk(a,b,c,d){return(new fg(a)).Sa(b,c).then(function(a){return new uk(a,d)})};function wk(a,b,c){this.h=a;this.i=b;this.g=c;this.c=3E4;this.f=96E4;this.b=null;this.a=this.c;if(this.f<this.c)throw Error("Proactive refresh lower bound greater than upper bound!");}wk.prototype.start=function(){this.a=this.c;xk(this,!0)};function yk(a,b){if(b)return a.a=a.c,a.g();b=a.a;a.a*=2;a.a>a.f&&(a.a=a.f);return b}function xk(a,b){a.stop();a.b=Gc(yk(a,b)).then(function(){return De()}).then(function(){return a.h()}).then(function(){xk(a,!0)}).o(function(b){a.i(b)&&xk(a,!1)})}
wk.prototype.stop=function(){this.b&&(this.b.cancel(),this.b=null)};function zk(a){this.f=a;this.b=this.a=null;this.c=0}zk.prototype.C=function(){return{apiKey:this.f.b,refreshToken:this.a,accessToken:this.b,expirationTime:this.c}};function Ak(a,b){var c=b[M],d=b.refreshToken;b=Bk(b.expiresIn);a.b=c;a.c=b;a.a=d}function Bk(a){return na()+1E3*parseInt(a,10)}
function Ck(a,b){return Jh(a.f,b).then(function(b){a.b=b.access_token;a.c=Bk(b.expires_in);a.a=b.refresh_token;return{accessToken:a.b,expirationTime:a.c,refreshToken:a.a}}).o(function(b){"auth/user-token-expired"==b.code&&(a.a=null);throw b;})}zk.prototype.getToken=function(a){a=!!a;return this.b&&!this.a?A(new L("user-token-expired")):a||!this.b||na()>this.c-3E4?this.a?Ck(this,{grant_type:"refresh_token",refresh_token:this.a}):z(null):z({accessToken:this.b,expirationTime:this.c,refreshToken:this.a})};function Dk(a,b){this.a=a||null;this.b=b||null;K(this,{lastSignInTime:Ee(b||null),creationTime:Ee(a||null)})}function Ek(a){return new Dk(a.a,a.b)}Dk.prototype.C=function(){return{lastLoginAt:this.b,createdAt:this.a}};function Fk(a,b,c,d,e,f){K(this,{uid:a,displayName:d||null,photoURL:e||null,email:c||null,phoneNumber:f||null,providerId:b})}function Gk(a,b){C.call(this,a);for(var c in b)this[c]=b[c]}t(Gk,C);
function Hk(a,b,c){this.D=[];this.G=a.apiKey;this.s=a.appName;this.A=a.authDomain||null;a=firebase.SDK_VERSION?pe(firebase.SDK_VERSION):null;this.b=new xh(this.G,ui(vi),a);this.h=new zk(this.b);Ik(this,b[M]);Ak(this.h,b);J(this,"refreshToken",this.h.a);Jk(this,c||{});F.call(this);this.I=!1;this.A&&se()&&(this.a=nk(this.A,this.G,this.s));this.N=[];this.i=null;this.l=Kk(this);this.U=r(this.Ga,this);var d=this;this.ha=null;this.sa=function(a){d.na(a.h)};this.W=null;this.O=[];this.ra=function(a){Lk(d,
a.f)};this.V=null}t(Hk,F);Hk.prototype.na=function(a){this.ha=a;Dh(this.b,a)};Hk.prototype.aa=function(){return this.ha};function Mk(a,b){a.W&&D(a.W,"languageCodeChanged",a.sa);(a.W=b)&&qc(b,"languageCodeChanged",a.sa)}function Lk(a,b){a.O=b;Eh(a.b,firebase.SDK_VERSION?pe(firebase.SDK_VERSION,a.O):null)}Hk.prototype.Ka=function(){return Ja(this.O)};function Nk(a,b){a.V&&D(a.V,"frameworkChanged",a.ra);(a.V=b)&&qc(b,"frameworkChanged",a.ra)}Hk.prototype.Ga=function(){this.l.b&&(this.l.stop(),this.l.start())};
function Ok(a){try{return firebase.app(a.s).auth()}catch(b){throw new L("internal-error","No firebase.auth.Auth instance is available for the Firebase App '"+a.s+"'!");}}function Kk(a){return new wk(function(){return a.F(!0)},function(a){return a&&"auth/network-request-failed"==a.code?!0:!1},function(){var b=a.h.c-na()-3E5;return 0<b?b:0})}function Pk(a){a.m||a.l.b||(a.l.start(),D(a,"tokenChanged",a.U),qc(a,"tokenChanged",a.U))}function Qk(a){D(a,"tokenChanged",a.U);a.l.stop()}
function Ik(a,b){a.qa=b;J(a,"_lat",b)}function Rk(a,b){Ha(a.N,function(a){return a==b})}function Sk(a){for(var b=[],c=0;c<a.N.length;c++)b.push(a.N[c](a));return vb(b).then(function(){return a})}function Tk(a){a.a&&!a.I&&(a.I=!0,a.a.subscribe(a))}
function Jk(a,b){K(a,{uid:b.uid,displayName:b.displayName||null,photoURL:b.photoURL||null,email:b.email||null,emailVerified:b.emailVerified||!1,phoneNumber:b.phoneNumber||null,isAnonymous:b.isAnonymous||!1,metadata:new Dk(b.createdAt,b.lastLoginAt),providerData:[]})}J(Hk.prototype,"providerId","firebase");function Uk(){}function Vk(a){return z().then(function(){if(a.m)throw new L("app-deleted");})}function Wk(a){return Ba(a.providerData,function(a){return a.providerId})}
function Xk(a,b){b&&(Yk(a,b.providerId),a.providerData.push(b))}function Yk(a,b){Ha(a.providerData,function(a){return a.providerId==b})}function Zk(a,b,c){("uid"!=b||c)&&a.hasOwnProperty(b)&&J(a,b,c)}
function $k(a,b){a!=b&&(K(a,{uid:b.uid,displayName:b.displayName,photoURL:b.photoURL,email:b.email,emailVerified:b.emailVerified,phoneNumber:b.phoneNumber,isAnonymous:b.isAnonymous,providerData:[]}),b.metadata?J(a,"metadata",Ek(b.metadata)):J(a,"metadata",new Dk),v(b.providerData,function(b){Xk(a,b)}),a.h=b.h,J(a,"refreshToken",a.h.a))}g=Hk.prototype;g.reload=function(){var a=this;return R(this,Vk(this).then(function(){return al(a).then(function(){return Sk(a)}).then(Uk)}))};
function al(a){return a.F().then(function(b){var c=a.isAnonymous;return bl(a,b).then(function(){c||Zk(a,"isAnonymous",!1);return b})})}g.F=function(a){var b=this;return R(this,Vk(this).then(function(){return b.h.getToken(a)}).then(function(a){if(!a)throw new L("internal-error");a.accessToken!=b.qa&&(Ik(b,a.accessToken),b.dispatchEvent(new Gk("tokenChanged")));Zk(b,"refreshToken",a.refreshToken);return a.accessToken}))};
g.getToken=function(a){Ge["firebase.User.prototype.getToken is deprecated. Please use firebase.User.prototype.getIdToken instead."]||(Ge["firebase.User.prototype.getToken is deprecated. Please use firebase.User.prototype.getIdToken instead."]=!0,"undefined"!==typeof console&&"function"===typeof console.warn&&console.warn("firebase.User.prototype.getToken is deprecated. Please use firebase.User.prototype.getIdToken instead."));return this.F(a)};
function cl(a,b){b[M]&&a.qa!=b[M]&&(Ak(a.h,b),a.dispatchEvent(new Gk("tokenChanged")),Ik(a,b[M]),Zk(a,"refreshToken",a.h.a))}function bl(a,b){return P(a.b,qi,{idToken:b}).then(r(a.tc,a))}
g.tc=function(a){a=a.users;if(!a||!a.length)throw new L("internal-error");a=a[0];Jk(this,{uid:a.localId,displayName:a.displayName,photoURL:a.photoUrl,email:a.email,emailVerified:!!a.emailVerified,phoneNumber:a.phoneNumber,lastLoginAt:a.lastLoginAt,createdAt:a.createdAt});for(var b=dl(a),c=0;c<b.length;c++)Xk(this,b[c]);Zk(this,"isAnonymous",!(this.email&&a.passwordHash)&&!(this.providerData&&this.providerData.length))};
function dl(a){return(a=a.providerUserInfo)&&a.length?Ba(a,function(a){return new Fk(a.rawId,a.providerId,a.email,a.displayName,a.photoUrl,a.phoneNumber)}):[]}g.bb=function(a){var b=this,c=null;return R(this,a.f(this.b,this.uid).then(function(a){cl(b,a);c=el(b,a,"reauthenticate");b.i=null;return b.reload()}).then(function(){return c}),!0)};g.uc=function(a){return this.bb(a).then(function(){})};
function fl(a,b){return al(a).then(function(){if(Fa(Wk(a),b))return Sk(a).then(function(){throw new L("provider-already-linked");})})}g.$a=function(a){var b=this,c=null;return R(this,fl(this,a.providerId).then(function(){return b.F()}).then(function(c){return a.c(b.b,c)}).then(function(a){c=el(b,a,"link");return gl(b,a)}).then(function(){return c}))};g.kc=function(a){return this.$a(a).then(function(a){return a.user})};
g.mc=function(a,b){var c=this;return R(this,fl(this,"phone").then(function(){return vk(Ok(c),a,b,r(c.$a,c))}))};g.vc=function(a,b){var c=this;return R(this,z().then(function(){return vk(Ok(c),a,b,r(c.bb,c))}),!0)};function el(a,b,c){var d=ig(b);b=vf(b);return Je({user:a,credential:d,additionalUserInfo:b,operationType:c})}function gl(a,b){cl(a,b);return a.reload().then(function(){return a})}
g.mb=function(a){var b=this;return R(this,this.F().then(function(c){return b.b.mb(c,a)}).then(function(a){cl(b,a);return b.reload()}))};g.Mc=function(a){var b=this;return R(this,this.F().then(function(c){return a.c(b.b,c)}).then(function(a){cl(b,a);return b.reload()}))};g.nb=function(a){var b=this;return R(this,this.F().then(function(c){return b.b.nb(c,a)}).then(function(a){cl(b,a);return b.reload()}))};
g.ob=function(a){if(void 0===a.displayName&&void 0===a.photoURL)return Vk(this);var b=this;return R(this,this.F().then(function(c){return b.b.ob(c,{displayName:a.displayName,photoUrl:a.photoURL})}).then(function(a){cl(b,a);Zk(b,"displayName",a.displayName||null);Zk(b,"photoURL",a.photoUrl||null);v(b.providerData,function(a){"password"===a.providerId&&(J(a,"displayName",b.displayName),J(a,"photoURL",b.photoURL))});return Sk(b)}).then(Uk))};
g.Lc=function(a){var b=this;return R(this,al(this).then(function(c){return Fa(Wk(b),a)?ci(b.b,c,[a]).then(function(a){var c={};v(a.providerUserInfo||[],function(a){c[a.providerId]=!0});v(Wk(b),function(a){c[a]||Yk(b,a)});c[fg.PROVIDER_ID]||J(b,"phoneNumber",null);return Sk(b)}):Sk(b).then(function(){throw new L("no-such-provider");})}))};
g.delete=function(){var a=this;return R(this,this.F().then(function(b){return P(a.b,pi,{idToken:b})}).then(function(){a.dispatchEvent(new Gk("userDeleted"))})).then(function(){for(var b=0;b<a.D.length;b++)a.D[b].cancel("app-deleted");Mk(a,null);Nk(a,null);a.D=[];a.m=!0;Qk(a);J(a,"refreshToken",null);a.a&&a.a.unsubscribe(a)})};
g.qb=function(a,b){return"linkViaPopup"==a&&(this.g||null)==b&&this.f||"reauthViaPopup"==a&&(this.g||null)==b&&this.f||"linkViaRedirect"==a&&(this.Z||null)==b||"reauthViaRedirect"==a&&(this.Z||null)==b?!0:!1};g.fa=function(a,b,c,d){"linkViaPopup"!=a&&"reauthViaPopup"!=a||d!=(this.g||null)||(c&&this.v?this.v(c):b&&!c&&this.f&&this.f(b),this.c&&(this.c.cancel(),this.c=null),delete this.f,delete this.v)};
g.wa=function(a,b){return"linkViaPopup"==a&&b==(this.g||null)?r(this.vb,this):"reauthViaPopup"==a&&b==(this.g||null)?r(this.wb,this):"linkViaRedirect"==a&&(this.Z||null)==b?r(this.vb,this):"reauthViaRedirect"==a&&(this.Z||null)==b?r(this.wb,this):null};g.nc=function(a){var b=this;return hl(this,"linkViaPopup",a,function(){return fl(b,a.providerId).then(function(){return Sk(b)})},!1)};g.wc=function(a){return hl(this,"reauthViaPopup",a,function(){return z()},!0)};
function hl(a,b,c,d,e){if(!se())return A(new L("operation-not-supported-in-this-environment"));if(a.i&&!e)return A(a.i);var f=uf(c.providerId),h=re(a.uid+":::"),m=null;(!ue()||ke())&&a.A&&c.isOAuthProvider&&(m=Oi(a.A,a.G,a.s,b,c,null,h,firebase.SDK_VERSION||null));var p=ce(m,f&&f.Aa,f&&f.za);d=d().then(function(){il(a);if(!e)return a.F().then(function(){})}).then(function(){return lk(a.a,p,b,c,h,!!m)}).then(function(){return new y(function(c,d){a.fa(b,null,new L("cancelled-popup-request"),a.g||null);
a.f=c;a.v=d;a.g=h;a.c=a.a.Da(a,b,p,h)})}).then(function(a){p&&be(p);return a?Je(a):null}).o(function(a){p&&be(p);throw a;});return R(a,d,e)}g.oc=function(a){var b=this;return jl(this,"linkViaRedirect",a,function(){return fl(b,a.providerId)},!1)};g.xc=function(a){return jl(this,"reauthViaRedirect",a,function(){return z()},!0)};
function jl(a,b,c,d,e){if(!se())return A(new L("operation-not-supported-in-this-environment"));if(a.i&&!e)return A(a.i);var f=null,h=re(a.uid+":::");d=d().then(function(){il(a);if(!e)return a.F().then(function(){})}).then(function(){a.Z=h;return Sk(a)}).then(function(b){a.da&&(b=a.da,b=b.b.set(kl,a.C(),b.a));return b}).then(function(){return a.a.Ba(b,c,h)}).o(function(b){f=b;if(a.da)return ll(a.da);throw f;}).then(function(){if(f)throw f;});return R(a,d,e)}
function il(a){if(!a.a||!a.I){if(a.a&&!a.I)throw new L("internal-error");throw new L("auth-domain-config-required");}}g.vb=function(a,b){var c=this;this.c&&(this.c.cancel(),this.c=null);var d=null,e=this.F().then(function(d){return Kf(c.b,{requestUri:a,sessionId:b,idToken:d})}).then(function(a){d=el(c,a,"link");return gl(c,a)}).then(function(){return d});return R(this,e)};
g.wb=function(a,b){var c=this;this.c&&(this.c.cancel(),this.c=null);var d=null,e=z().then(function(){return Gf(Lf(c.b,{requestUri:a,sessionId:b}),c.uid)}).then(function(a){d=el(c,a,"reauthenticate");cl(c,a);c.i=null;return c.reload()}).then(function(){return d});return R(this,e,!0)};g.fb=function(a){var b=this,c=null;return R(this,this.F().then(function(b){c=b;return"undefined"===typeof a||Za(a)?{}:hf(new Ze(a))}).then(function(a){return b.b.fb(c,a)}).then(function(a){if(b.email!=a)return b.reload()}).then(function(){}))};
function R(a,b,c){var d=ml(a,b,c);a.D.push(d);d.ga(function(){Ga(a.D,d)});return d}function ml(a,b,c){return a.i&&!c?(b.cancel(),A(a.i)):b.o(function(b){!b||"auth/user-disabled"!=b.code&&"auth/user-token-expired"!=b.code||(a.i||a.dispatchEvent(new Gk("userInvalidated")),a.i=b);throw b;})}g.toJSON=function(){return this.C()};
g.C=function(){var a={uid:this.uid,displayName:this.displayName,photoURL:this.photoURL,email:this.email,emailVerified:this.emailVerified,phoneNumber:this.phoneNumber,isAnonymous:this.isAnonymous,providerData:[],apiKey:this.G,appName:this.s,authDomain:this.A,stsTokenManager:this.h.C(),redirectEventId:this.Z||null};this.metadata&&bb(a,this.metadata.C());v(this.providerData,function(b){a.providerData.push(Ke(b))});return a};
function nl(a){if(!a.apiKey)return null;var b={apiKey:a.apiKey,authDomain:a.authDomain,appName:a.appName},c={};if(a.stsTokenManager&&a.stsTokenManager.accessToken&&a.stsTokenManager.expirationTime)c[M]=a.stsTokenManager.accessToken,c.refreshToken=a.stsTokenManager.refreshToken||null,c.expiresIn=(a.stsTokenManager.expirationTime-na())/1E3;else return null;var d=new Hk(b,c,a);a.providerData&&v(a.providerData,function(a){a&&Xk(d,Je(a))});a.redirectEventId&&(d.Z=a.redirectEventId);return d}
function ol(a,b,c,d){var e=new Hk(a,b);c&&(e.da=c);d&&Lk(e,d);return e.reload().then(function(){return e})};function pl(a){this.a=a;this.b=pj()}var kl={name:"redirectUser",B:"session"};function ll(a){return tj(a.b,kl,a.a)}function ql(a,b){return a.b.get(kl,a.a).then(function(a){a&&b&&(a.authDomain=b);return nl(a||{})})};function rl(a){this.a=a;this.b=pj();this.c=null;this.f=sl(this);this.b.addListener(tl("local"),this.a,r(this.g,this))}rl.prototype.g=function(){var a=this,b=tl("local");ul(this,function(){return z().then(function(){return a.c&&"local"!=a.c.B?a.b.get(b,a.a):null}).then(function(c){if(c)return vl(a,"local").then(function(){a.c=b})})})};function vl(a,b){var c=[],d;for(d in lj)lj[d]!==b&&c.push(tj(a.b,tl(lj[d]),a.a));c.push(tj(a.b,wl,a.a));return ub(c)}
function sl(a){var b=tl("local"),c=tl("session"),d=tl("none");return sj(a.b,b,a.a).then(function(){return a.b.get(c,a.a)}).then(function(e){return e?c:a.b.get(d,a.a).then(function(c){return c?d:a.b.get(b,a.a).then(function(c){return c?b:a.b.get(wl,a.a).then(function(a){return a?tl(a):b})})})}).then(function(b){a.c=b;return vl(a,b.B)}).o(function(){a.c||(a.c=b)})}var wl={name:"persistence",B:"session"};function tl(a){return{name:"authUser",B:a}}
rl.prototype.ib=function(a){var b=null,c=this;mj(a);return ul(this,function(){return a!=c.c.B?c.b.get(c.c,c.a).then(function(d){b=d;return vl(c,a)}).then(function(){c.c=tl(a);if(b)return c.b.set(c.c,b,c.a)}):z()})};function xl(a){return ul(a,function(){return a.b.set(wl,a.c.B,a.a)})}function yl(a,b){return ul(a,function(){return a.b.set(a.c,b.C(),a.a)})}function zl(a){return ul(a,function(){return tj(a.b,a.c,a.a)})}
function Al(a,b){return ul(a,function(){return a.b.get(a.c,a.a).then(function(a){a&&b&&(a.authDomain=b);return nl(a||{})})})}function ul(a,b){a.f=a.f.then(b,b);return a.f};function Cl(a){this.l=!1;J(this,"app",a);if(S(this).options&&S(this).options.apiKey)a=firebase.SDK_VERSION?pe(firebase.SDK_VERSION):null,this.b=new xh(S(this).options&&S(this).options.apiKey,ui(vi),a);else throw new L("invalid-api-key");this.N=[];this.m=[];this.I=[];this.Ob=firebase.INTERNAL.createSubscribe(r(this.hc,this));this.O=void 0;this.Pb=firebase.INTERNAL.createSubscribe(r(this.ic,this));Dl(this,null);this.h=new rl(S(this).options.apiKey+":"+S(this).name);this.G=new pl(S(this).options.apiKey+
":"+S(this).name);this.U=T(this,El(this));this.i=T(this,Fl(this));this.W=!1;this.ha=r(this.Hc,this);this.Ga=r(this.ka,this);this.qa=r(this.Yb,this);this.ra=r(this.fc,this);this.sa=r(this.gc,this);Gl(this);this.INTERNAL={};this.INTERNAL["delete"]=r(this.delete,this);this.INTERNAL.logFramework=r(this.pc,this);this.s=0;F.call(this);Hl(this);this.D=[]}t(Cl,F);function Il(a){C.call(this,"languageCodeChanged");this.h=a}t(Il,C);function Jl(a){C.call(this,"frameworkChanged");this.f=a}t(Jl,C);g=Cl.prototype;
g.ib=function(a){a=this.h.ib(a);return T(this,a)};g.na=function(a){this.V===a||this.l||(this.V=a,Dh(this.b,this.V),this.dispatchEvent(new Il(this.aa())))};g.aa=function(){return this.V};g.Nc=function(){var a=k.navigator;this.na(a?a.languages&&a.languages[0]||a.language||a.userLanguage||null:null)};g.pc=function(a){this.D.push(a);Eh(this.b,firebase.SDK_VERSION?pe(firebase.SDK_VERSION,this.D):null);this.dispatchEvent(new Jl(this.D))};g.Ka=function(){return Ja(this.D)};
function Hl(a){Object.defineProperty(a,"lc",{get:function(){return this.aa()},set:function(a){this.na(a)},enumerable:!1});a.V=null}g.toJSON=function(){return{apiKey:S(this).options.apiKey,authDomain:S(this).options.authDomain,appName:S(this).name,currentUser:U(this)&&U(this).C()}};function Kl(a){return a.Nb||A(new L("auth-domain-config-required"))}
function Gl(a){var b=S(a).options.authDomain,c=S(a).options.apiKey;b&&se()&&(a.Nb=a.U.then(function(){if(!a.l){a.a=nk(b,c,S(a).name);a.a.subscribe(a);U(a)&&Tk(U(a));if(a.A){Tk(a.A);var d=a.A;d.na(a.aa());Mk(d,a);d=a.A;Lk(d,a.D);Nk(d,a);a.A=null}return a.a}}))}g.qb=function(a,b){switch(a){case "unknown":case "signInViaRedirect":return!0;case "signInViaPopup":return this.g==b&&!!this.f;default:return!1}};
g.fa=function(a,b,c,d){"signInViaPopup"==a&&this.g==d&&(c&&this.v?this.v(c):b&&!c&&this.f&&this.f(b),this.c&&(this.c.cancel(),this.c=null),delete this.f,delete this.v)};g.wa=function(a,b){return"signInViaRedirect"==a||"signInViaPopup"==a&&this.g==b&&this.f?r(this.Xb,this):null};
g.Xb=function(a,b){var c=this;a={requestUri:a,sessionId:b};this.c&&(this.c.cancel(),this.c=null);var d=null,e=null,f=If(c.b,a).then(function(a){d=ig(a);e=vf(a);return a});a=c.U.then(function(){return f}).then(function(a){return Ll(c,a)}).then(function(){return Je({user:U(c),credential:d,additionalUserInfo:e,operationType:"signIn"})});return T(this,a)};
g.Fc=function(a){if(!se())return A(new L("operation-not-supported-in-this-environment"));var b=this,c=uf(a.providerId),d=re(),e=null;(!ue()||ke())&&S(this).options.authDomain&&a.isOAuthProvider&&(e=Oi(S(this).options.authDomain,S(this).options.apiKey,S(this).name,"signInViaPopup",a,null,d,firebase.SDK_VERSION||null));var f=ce(e,c&&c.Aa,c&&c.za);c=Kl(this).then(function(b){return lk(b,f,"signInViaPopup",a,d,!!e)}).then(function(){return new y(function(a,c){b.fa("signInViaPopup",null,new L("cancelled-popup-request"),
b.g);b.f=a;b.v=c;b.g=d;b.c=b.a.Da(b,"signInViaPopup",f,d)})}).then(function(a){f&&be(f);return a?Je(a):null}).o(function(a){f&&be(f);throw a;});return T(this,c)};g.Gc=function(a){if(!se())return A(new L("operation-not-supported-in-this-environment"));var b=this,c=Kl(this).then(function(){return xl(b.h)}).then(function(){return b.a.Ba("signInViaRedirect",a)});return T(this,c)};
g.ba=function(){if(!se())return A(new L("operation-not-supported-in-this-environment"));var a=this,b=Kl(this).then(function(){return a.a.ba()}).then(function(a){return a?Je(a):null});return T(this,b)};function Ll(a,b){var c={};c.apiKey=S(a).options.apiKey;c.authDomain=S(a).options.authDomain;c.appName=S(a).name;return a.U.then(function(){return ol(c,b,a.G,a.Ka())}).then(function(b){if(U(a)&&b.uid==U(a).uid)return $k(U(a),b),a.ka(b);Dl(a,b);Tk(b);return a.ka(b)}).then(function(){Ml(a)})}
function Dl(a,b){U(a)&&(Rk(U(a),a.Ga),D(U(a),"tokenChanged",a.qa),D(U(a),"userDeleted",a.ra),D(U(a),"userInvalidated",a.sa),Qk(U(a)));b&&(b.N.push(a.Ga),qc(b,"tokenChanged",a.qa),qc(b,"userDeleted",a.ra),qc(b,"userInvalidated",a.sa),0<a.s&&Pk(b));J(a,"currentUser",b);b&&(b.na(a.aa()),Mk(b,a),Lk(b,a.D),Nk(b,a))}g.kb=function(){var a=this,b=this.i.then(function(){if(!U(a))return z();Dl(a,null);return zl(a.h).then(function(){Ml(a)})});return T(this,b)};
function Nl(a){var b=ql(a.G,S(a).options.authDomain).then(function(b){if(a.A=b)b.da=a.G;return ll(a.G)});return T(a,b)}function El(a){var b=S(a).options.authDomain,c=Nl(a).then(function(){return Al(a.h,b)}).then(function(b){return b?(b.da=a.G,a.A&&(a.A.Z||null)==(b.Z||null)?b:b.reload().then(function(){return yl(a.h,b).then(function(){return b})}).o(function(c){return"auth/network-request-failed"==c.code?b:zl(a.h)})):null}).then(function(b){Dl(a,b||null)});return T(a,c)}
function Fl(a){return a.U.then(function(){return a.ba()}).o(function(){}).then(function(){if(!a.l)return a.ha()}).o(function(){}).then(function(){if(!a.l){a.W=!0;var b=a.h;b.b.addListener(tl("local"),b.a,a.ha)}})}
g.Hc=function(){var a=this;return Al(this.h,S(this).options.authDomain).then(function(b){if(!a.l){var c;if(c=U(a)&&b){c=U(a).uid;var d=b.uid;c=void 0===c||null===c||""===c||void 0===d||null===d||""===d?!1:c==d}if(c)return $k(U(a),b),U(a).F();if(U(a)||b)Dl(a,b),b&&(Tk(b),b.da=a.G),a.a&&a.a.subscribe(a),Ml(a)}})};g.ka=function(a){return yl(this.h,a)};g.Yb=function(){Ml(this);this.ka(U(this))};g.fc=function(){this.kb()};g.gc=function(){this.kb()};
function Ol(a,b){var c=null,d=null;return T(a,b.then(function(b){c=ig(b);d=vf(b);return Ll(a,b)}).then(function(){return Je({user:U(a),credential:c,additionalUserInfo:d,operationType:"signIn"})}))}g.hc=function(a){var b=this;this.addAuthTokenListener(function(){a.next(U(b))})};g.ic=function(a){var b=this;Pl(this,function(){a.next(U(b))})};g.rc=function(a,b,c){var d=this;this.W&&firebase.Promise.resolve().then(function(){n(a)?a(U(d)):n(a.next)&&a.next(U(d))});return this.Ob(a,b,c)};
g.qc=function(a,b,c){var d=this;this.W&&firebase.Promise.resolve().then(function(){d.O=d.getUid();n(a)?a(U(d)):n(a.next)&&a.next(U(d))});return this.Pb(a,b,c)};g.$b=function(a){var b=this,c=this.i.then(function(){return U(b)?U(b).F(a).then(function(a){return{accessToken:a}}):null});return T(this,c)};g.Bc=function(a){return this.Hb(a).then(function(a){return a.user})};
g.Hb=function(a){var b=this;return this.i.then(function(){return Ol(b,P(b.b,si,{token:a}))}).then(function(a){var c=a.user;Zk(c,"isAnonymous",!1);b.ka(c);return a})};g.Ib=function(a,b){var c=this;return this.i.then(function(){return Ol(c,P(c.b,Xf,{email:a,password:b}))})};g.Cc=function(a,b){return this.Ib(a,b).then(function(a){return a.user})};g.Sb=function(a,b){return this.sb(a,b).then(function(a){return a.user})};
g.sb=function(a,b){var c=this;return this.i.then(function(){return Ol(c,P(c.b,oi,{email:a,password:b}))})};g.Ac=function(a){return this.Oa(a).then(function(a){return a.user})};g.Oa=function(a){var b=this;return this.i.then(function(){return Ol(b,a.xa(b.b))})};g.jb=function(){return this.Jb().then(function(a){return a.user})};
g.Jb=function(){var a=this;return this.i.then(function(){var b=U(a);if(b&&b.isAnonymous){var c=Je({providerId:null,isNewUser:!1});return Je({user:b,credential:null,additionalUserInfo:c,operationType:"signIn"})}return Ol(a,a.b.jb()).then(function(b){var c=b.user;Zk(c,"isAnonymous",!0);a.ka(c);return b})})};function S(a){return a.app}function U(a){return a.currentUser}g.getUid=function(){return U(this)&&U(this).uid||null};function Ql(a){return U(a)&&U(a)._lat||null}
function Ml(a){if(a.W){for(var b=0;b<a.m.length;b++)if(a.m[b])a.m[b](Ql(a));if(a.O!==a.getUid()&&a.I.length)for(a.O=a.getUid(),b=0;b<a.I.length;b++)if(a.I[b])a.I[b](Ql(a))}}g.Qb=function(a){this.addAuthTokenListener(a);this.s++;0<this.s&&U(this)&&Pk(U(this))};g.yc=function(a){var b=this;v(this.m,function(c){c==a&&b.s--});0>this.s&&(this.s=0);0==this.s&&U(this)&&Qk(U(this));this.removeAuthTokenListener(a)};
g.addAuthTokenListener=function(a){var b=this;this.m.push(a);T(this,this.i.then(function(){b.l||Fa(b.m,a)&&a(Ql(b))}))};g.removeAuthTokenListener=function(a){Ha(this.m,function(b){return b==a})};function Pl(a,b){a.I.push(b);T(a,a.i.then(function(){!a.l&&Fa(a.I,b)&&a.O!==a.getUid()&&(a.O=a.getUid(),b(Ql(a)))}))}
g.delete=function(){this.l=!0;for(var a=0;a<this.N.length;a++)this.N[a].cancel("app-deleted");this.N=[];this.h&&(a=this.h,a.b.removeListener(tl("local"),a.a,this.ha));this.a&&this.a.unsubscribe(this);return firebase.Promise.resolve()};function T(a,b){a.N.push(b);b.ga(function(){Ga(a.N,b)});return b}g.Vb=function(a){return T(this,Oh(this.b,a))};g.Wb=function(a){return T(this,Qh(this.b,a))};g.jc=function(a){return!!ag(a)};
g.hb=function(a,b){var c=this;return T(this,z().then(function(){var a=new Ze(b);if(!a.c)throw new L("argument-error",gf+" must be true when sending sign in link to email");return hf(a)}).then(function(b){return c.b.hb(a,b)}).then(function(){}))};g.Oc=function(a){return this.Ia(a).then(function(a){return a.data.email})};g.Wa=function(a,b){return T(this,this.b.Wa(a,b).then(function(){}))};g.Ia=function(a){return T(this,this.b.Ia(a).then(function(a){return new Ne(a)}))};
g.Ua=function(a){return T(this,this.b.Ua(a).then(function(){}))};g.gb=function(a,b){var c=this;return T(this,z().then(function(){return"undefined"===typeof b||Za(b)?{}:hf(new Ze(b))}).then(function(b){return c.b.gb(a,b)}).then(function(){}))};g.Ec=function(a,b){return T(this,vk(this,a,b,r(this.Oa,this)))};g.Dc=function(a,b){var c=this;return T(this,z().then(function(){var d=$f(a,b||Vd());return c.Oa(d)}))};function Rl(a,b,c,d,e,f){J(this,"type","recaptcha");this.b=this.c=null;this.m=!1;this.l=b;this.a=c||{theme:"light",type:"image"};this.g=[];if(this.a[Sl])throw new L("argument-error","sitekey should not be provided for reCAPTCHA as one is automatically provisioned for the current project.");this.h="invisible"===this.a[Tl];if(!k.document)throw new L("operation-not-supported-in-this-environment","RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment with DOM support.");if(!Id(b)||!this.h&&
Id(b).hasChildNodes())throw new L("argument-error","reCAPTCHA container is either not found or already contains inner elements!");this.u=new xh(a,f||null,e||null);this.s=d||function(){return null};var h=this;this.i=[];var m=this.a[Ul];this.a[Ul]=function(a){Vl(h,a);if("function"===typeof m)m(a);else if("string"===typeof m){var b=I(m,k);"function"===typeof b&&b(a)}};var p=this.a[Wl];this.a[Wl]=function(){Vl(h,null);if("function"===typeof p)p();else if("string"===typeof p){var a=I(p,k);"function"===
typeof a&&a()}}}var Ul="callback",Wl="expired-callback",Sl="sitekey",Tl="size";function Vl(a,b){for(var c=0;c<a.i.length;c++)try{a.i[c](b)}catch(d){}}function Xl(a,b){Ha(a.i,function(a){return a==b})}function Yl(a,b){a.g.push(b);b.ga(function(){Ga(a.g,b)});return b}g=Rl.prototype;
g.ya=function(){var a=this;return this.c?this.c:this.c=Yl(this,z().then(function(){if(te()&&!le())return ge();throw new L("operation-not-supported-in-this-environment","RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment.");}).then(function(){return Zl($l(),a.s())}).then(function(){return P(a.u,ri,{})}).then(function(b){a.a[Sl]=b.recaptchaSiteKey}).o(function(b){a.c=null;throw b;}))};
g.render=function(){am(this);var a=this;return Yl(this,this.ya().then(function(){if(null===a.b){var b=a.l;if(!a.h){var c=Id(b);b=Ld("DIV");c.appendChild(b)}a.b=grecaptcha.render(b,a.a)}return a.b}))};g.verify=function(){am(this);var a=this;return Yl(this,this.render().then(function(b){return new y(function(c){var d=grecaptcha.getResponse(b);if(d)c(d);else{var e=function(b){b&&(Xl(a,e),c(b))};a.i.push(e);a.h&&grecaptcha.execute(a.b)}})}))};g.reset=function(){am(this);null!==this.b&&grecaptcha.reset(this.b)};
function am(a){if(a.m)throw new L("internal-error","RecaptchaVerifier instance has been destroyed.");}g.clear=function(){am(this);this.m=!0;$l().b--;for(var a=0;a<this.g.length;a++)this.g[a].cancel("RecaptchaVerifier instance has been destroyed.");if(!this.h){a=Id(this.l);for(var b;b=a.firstChild;)a.removeChild(b)}};var bm=qd("https://www.google.com/recaptcha/api.js?onload=%{onload}&render=explicit&hl=%{hl}");
function cm(){this.b=k.grecaptcha?Infinity:0;this.c=null;this.a="__rcb"+Math.floor(1E6*Math.random()).toString()}
function Zl(a,b){return new y(function(c,d){if(Ae())if(!k.grecaptcha||b!==a.c&&!a.b){k[a.a]=function(){if(k.grecaptcha){a.c=b;var e=k.grecaptcha.render;k.grecaptcha.render=function(b,c){b=e(b,c);a.b++;return b};c()}else d(new L("internal-error"));delete k[a.a]};var e=ud(bm,{onload:a.a,hl:b||""});z(ph(e)).o(function(){d(new L("internal-error","Unable to load external reCAPTCHA dependencies!"))})}else c();else d(new L("network-request-failed"))})}var dm=null;
function $l(){dm||(dm=new cm);return dm}function em(a,b,c){try{this.f=c||firebase.app()}catch(f){throw new L("argument-error","No firebase.app.App instance is currently initialized.");}if(this.f.options&&this.f.options.apiKey)c=this.f.options.apiKey;else throw new L("invalid-api-key");var d=this,e=null;try{e=this.f.auth().Ka()}catch(f){}e=firebase.SDK_VERSION?pe(firebase.SDK_VERSION,e):null;Rl.call(this,c,a,b,function(){try{var a=d.f.auth().aa()}catch(h){a=null}return a},e,ui(vi))}t(em,Rl);function fm(a,b,c,d){a:{c=Array.prototype.slice.call(c);var e=0;for(var f=!1,h=0;h<b.length;h++)if(b[h].optional)f=!0;else{if(f)throw new L("internal-error","Argument validator encountered a required argument after an optional argument.");e++}f=b.length;if(c.length<e||f<c.length)d="Expected "+(e==f?1==e?"1 argument":e+" arguments":e+"-"+f+" arguments")+" but got "+c.length+".";else{for(e=0;e<c.length;e++)if(f=b[e].optional&&void 0===c[e],!b[e].M(c[e])&&!f){b=b[e];if(0>e||e>=gm.length)throw new L("internal-error",
"Argument validator received an unsupported number of arguments.");c=gm[e];d=(d?"":c+" argument ")+(b.name?'"'+b.name+'" ':"")+"must be "+b.K+".";break a}d=null}}if(d)throw new L("argument-error",a+" failed: "+d);}var gm="First Second Third Fourth Fifth Sixth Seventh Eighth Ninth".split(" ");function V(a,b){return{name:a||"",K:"a valid string",optional:!!b,M:l}}function hm(){return{name:"opt_forceRefresh",K:"a boolean",optional:!0,M:ba}}
function W(a,b){return{name:a||"",K:"a valid object",optional:!!b,M:q}}function im(a,b){return{name:a||"",K:"a function",optional:!!b,M:n}}function jm(a,b){return{name:a||"",K:"null",optional:!!b,M:ea}}function km(){return{name:"",K:"an HTML element",optional:!1,M:function(a){return!!(a&&a instanceof Element)}}}function lm(){return{name:"auth",K:"an instance of Firebase Auth",optional:!0,M:function(a){return!!(a&&a instanceof Cl)}}}
function mm(){return{name:"app",K:"an instance of Firebase App",optional:!0,M:function(a){return!!(a&&a instanceof firebase.app.App)}}}function nm(a){return{name:a?a+"Credential":"credential",K:a?"a valid "+a+" credential":"a valid credential",optional:!1,M:function(b){if(!b)return!1;var c=!a||b.providerId===a;return!(!b.xa||!c)}}}
function om(){return{name:"authProvider",K:"a valid Auth provider",optional:!1,M:function(a){return!!(a&&a.providerId&&a.hasOwnProperty&&a.hasOwnProperty("isOAuthProvider"))}}}function pm(){return{name:"applicationVerifier",K:"an implementation of firebase.auth.ApplicationVerifier",optional:!1,M:function(a){return!!(a&&l(a.type)&&n(a.verify))}}}function X(a,b,c,d){return{name:c||"",K:a.K+" or "+b.K,optional:!!d,M:function(c){return a.M(c)||b.M(c)}}};function Y(a,b){for(var c in b){var d=b[c].name;a[d]=qm(d,a[c],b[c].j)}}function Z(a,b,c,d){a[b]=qm(b,c,d)}function qm(a,b,c){function d(){var a=Array.prototype.slice.call(arguments);fm(e,c,a);return b.apply(this,a)}if(!c)return b;var e=rm(a),f;for(f in b)d[f]=b[f];for(f in b.prototype)d.prototype[f]=b.prototype[f];return d}function rm(a){a=a.split(".");return a[a.length-1]};Y(Cl.prototype,{Ua:{name:"applyActionCode",j:[V("code")]},Ia:{name:"checkActionCode",j:[V("code")]},Wa:{name:"confirmPasswordReset",j:[V("code"),V("newPassword")]},Sb:{name:"createUserWithEmailAndPassword",j:[V("email"),V("password")]},sb:{name:"createUserAndRetrieveDataWithEmailAndPassword",j:[V("email"),V("password")]},Vb:{name:"fetchProvidersForEmail",j:[V("email")]},Wb:{name:"fetchSignInMethodsForEmail",j:[V("email")]},ba:{name:"getRedirectResult",j:[]},jc:{name:"isSignInWithEmailLink",j:[V("emailLink")]},
qc:{name:"onAuthStateChanged",j:[X(W(),im(),"nextOrObserver"),im("opt_error",!0),im("opt_completed",!0)]},rc:{name:"onIdTokenChanged",j:[X(W(),im(),"nextOrObserver"),im("opt_error",!0),im("opt_completed",!0)]},gb:{name:"sendPasswordResetEmail",j:[V("email"),X(W("opt_actionCodeSettings",!0),jm(null,!0),"opt_actionCodeSettings",!0)]},hb:{name:"sendSignInLinkToEmail",j:[V("email"),W("actionCodeSettings")]},ib:{name:"setPersistence",j:[V("persistence")]},Oa:{name:"signInAndRetrieveDataWithCredential",
j:[nm()]},jb:{name:"signInAnonymously",j:[]},Jb:{name:"signInAnonymouslyAndRetrieveData",j:[]},Ac:{name:"signInWithCredential",j:[nm()]},Bc:{name:"signInWithCustomToken",j:[V("token")]},Hb:{name:"signInAndRetrieveDataWithCustomToken",j:[V("token")]},Cc:{name:"signInWithEmailAndPassword",j:[V("email"),V("password")]},Dc:{name:"signInWithEmailLink",j:[V("email"),V("emailLink",!0)]},Ib:{name:"signInAndRetrieveDataWithEmailAndPassword",j:[V("email"),V("password")]},Ec:{name:"signInWithPhoneNumber",j:[V("phoneNumber"),
pm()]},Fc:{name:"signInWithPopup",j:[om()]},Gc:{name:"signInWithRedirect",j:[om()]},kb:{name:"signOut",j:[]},toJSON:{name:"toJSON",j:[V(null,!0)]},Nc:{name:"useDeviceLanguage",j:[]},Oc:{name:"verifyPasswordResetCode",j:[V("code")]}});(function(a,b){for(var c in b){var d=b[c].name;if(d!==c){var e=b[c].Rb;Object.defineProperty(a,d,{get:function(){return this[c]},set:function(a){fm(d,[e],[a],!0);this[c]=a},enumerable:!0})}}})(Cl.prototype,{lc:{name:"languageCode",Rb:X(V(),jm(),"languageCode")}});
Cl.Persistence=lj;Cl.Persistence.LOCAL="local";Cl.Persistence.SESSION="session";Cl.Persistence.NONE="none";
Y(Hk.prototype,{"delete":{name:"delete",j:[]},F:{name:"getIdToken",j:[hm()]},getToken:{name:"getToken",j:[hm()]},$a:{name:"linkAndRetrieveDataWithCredential",j:[nm()]},kc:{name:"linkWithCredential",j:[nm()]},mc:{name:"linkWithPhoneNumber",j:[V("phoneNumber"),pm()]},nc:{name:"linkWithPopup",j:[om()]},oc:{name:"linkWithRedirect",j:[om()]},bb:{name:"reauthenticateAndRetrieveDataWithCredential",j:[nm()]},uc:{name:"reauthenticateWithCredential",j:[nm()]},vc:{name:"reauthenticateWithPhoneNumber",j:[V("phoneNumber"),
pm()]},wc:{name:"reauthenticateWithPopup",j:[om()]},xc:{name:"reauthenticateWithRedirect",j:[om()]},reload:{name:"reload",j:[]},fb:{name:"sendEmailVerification",j:[X(W("opt_actionCodeSettings",!0),jm(null,!0),"opt_actionCodeSettings",!0)]},toJSON:{name:"toJSON",j:[V(null,!0)]},Lc:{name:"unlink",j:[V("provider")]},mb:{name:"updateEmail",j:[V("email")]},nb:{name:"updatePassword",j:[V("password")]},Mc:{name:"updatePhoneNumber",j:[nm("phone")]},ob:{name:"updateProfile",j:[W("profile")]}});
Y(y.prototype,{ga:{name:"finally"},o:{name:"catch"},then:{name:"then"}});Y(uk.prototype,{confirm:{name:"confirm",j:[V("verificationCode")]}});Z(O,"credential",function(a,b){return new Vf(a,b)},[V("email"),V("password")]);Y(Nf.prototype,{ta:{name:"addScope",j:[V("scope")]},Ca:{name:"setCustomParameters",j:[W("customOAuthParameters")]}});Z(Nf,"credential",Of,[X(V(),W(),"token")]);Z(O,"credentialWithLink",$f,[V("email"),V("emailLink")]);
Y(Pf.prototype,{ta:{name:"addScope",j:[V("scope")]},Ca:{name:"setCustomParameters",j:[W("customOAuthParameters")]}});Z(Pf,"credential",Qf,[X(V(),W(),"token")]);Y(Rf.prototype,{ta:{name:"addScope",j:[V("scope")]},Ca:{name:"setCustomParameters",j:[W("customOAuthParameters")]}});Z(Rf,"credential",Sf,[X(V(),X(W(),jm()),"idToken"),X(V(),jm(),"accessToken",!0)]);Y(Tf.prototype,{Ca:{name:"setCustomParameters",j:[W("customOAuthParameters")]}});Z(Tf,"credential",Uf,[X(V(),W(),"token"),V("secret",!0)]);
Y(N.prototype,{ta:{name:"addScope",j:[V("scope")]},credential:{name:"credential",j:[X(V(),jm(),"idToken",!0),X(V(),jm(),"accessToken",!0)]},Ca:{name:"setCustomParameters",j:[W("customOAuthParameters")]}});Z(fg,"credential",hg,[V("verificationId"),V("verificationCode")]);Y(fg.prototype,{Sa:{name:"verifyPhoneNumber",j:[V("phoneNumber"),pm()]}});Y(L.prototype,{toJSON:{name:"toJSON",j:[V(null,!0)]}});Y(pg.prototype,{toJSON:{name:"toJSON",j:[V(null,!0)]}});
Y(og.prototype,{toJSON:{name:"toJSON",j:[V(null,!0)]}});Y(em.prototype,{clear:{name:"clear",j:[]},render:{name:"render",j:[]},verify:{name:"verify",j:[]}});
(function(){if("undefined"!==typeof firebase&&firebase.INTERNAL&&firebase.INTERNAL.registerService){var a={Auth:Cl,Error:L};Z(a,"EmailAuthProvider",O,[]);Z(a,"FacebookAuthProvider",Nf,[]);Z(a,"GithubAuthProvider",Pf,[]);Z(a,"GoogleAuthProvider",Rf,[]);Z(a,"TwitterAuthProvider",Tf,[]);Z(a,"OAuthProvider",N,[V("providerId")]);Z(a,"PhoneAuthProvider",fg,[lm()]);Z(a,"RecaptchaVerifier",em,[X(V(),km(),"recaptchaContainer"),W("recaptchaParameters",!0),mm()]);firebase.INTERNAL.registerService("auth",function(a,
c){a=new Cl(a);c({INTERNAL:{getUid:r(a.getUid,a),getToken:r(a.$b,a),addAuthTokenListener:r(a.Qb,a),removeAuthTokenListener:r(a.yc,a)}});return a},a,function(a,c){if("create"===a)try{c.auth()}catch(d){}});firebase.INTERNAL.extendNamespace({User:Hk})}else throw Error("Cannot find the firebase namespace; be sure to include firebase-app.js before this library.");})();
}).call(typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : {});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(132)))

/***/ }),

/***/ 490:
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

module.exports = __webpack_require__(275);


/***/ }),

/***/ 491:
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

__webpack_require__(492);


/***/ }),

/***/ 492:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["registerMessaging"] = registerMessaging;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_controllers_window_controller__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_controllers_sw_controller__ = __webpack_require__(499);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__firebase_app__ = __webpack_require__(54);
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




function registerMessaging(instance) {
    var messagingName = 'messaging';
    var factoryMethod = function (app) {
        if (self && 'ServiceWorkerGlobalScope' in self) {
            return new __WEBPACK_IMPORTED_MODULE_1__src_controllers_sw_controller__["a" /* default */](app);
        }
        // Assume we are in the window context.
        return new __WEBPACK_IMPORTED_MODULE_0__src_controllers_window_controller__["a" /* default */](app);
    };
    var namespaceExports = {
        // no-inline
        Messaging: __WEBPACK_IMPORTED_MODULE_0__src_controllers_window_controller__["a" /* default */]
    };
    instance.INTERNAL.registerService(messagingName, factoryMethod, namespaceExports);
}
registerMessaging(__WEBPACK_IMPORTED_MODULE_2__firebase_app__["firebase"]);

//# sourceMappingURL=index.js.map


/***/ }),

/***/ 493:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__controller_interface__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_errors__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_worker_page_message__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_default_sw__ = __webpack_require__(497);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_notification_permission__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_fcm_details__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__helpers_base64_to_array_buffer__ = __webpack_require__(498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__firebase_util__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__firebase_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__firebase_util__);
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */










var WindowController = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__extends"](WindowController, _super);
    /**
     * A service that provides a MessagingService instance.
     * @param {!firebase.app.App} app
     */
    function WindowController(app) {
        var _this = _super.call(this, app) || this;
        _this.messageObserver_ = null;
        _this.onMessage_ = Object(__WEBPACK_IMPORTED_MODULE_8__firebase_util__["createSubscribe"])(function (observer) {
            _this.messageObserver_ = observer;
        });
        _this.tokenRefreshObserver_ = null;
        _this.onTokenRefresh_ = Object(__WEBPACK_IMPORTED_MODULE_8__firebase_util__["createSubscribe"])(function (observer) {
            _this.tokenRefreshObserver_ = observer;
        });
        /**
         * @private
         * @type {ServiceWorkerRegistration}
         */
        _this.registrationToUse_;
        /**
         * @private
         * @type {Promise}
         */
        _this.manifestCheckPromise_;
        /**
         * @private
         * @type {firebase.Observer}
         */
        _this.messageObserver_ = null;
        /**
         * @private {!firebase.Subscribe} The subscribe function to the onMessage
         * observer.
         */
        _this.onMessage_ = Object(__WEBPACK_IMPORTED_MODULE_8__firebase_util__["createSubscribe"])(function (observer) {
            _this.messageObserver_ = observer;
        });
        /**
         * @private
         * @type {firebase.Observer}
         */
        _this.tokenRefreshObserver_ = null;
        _this.onTokenRefresh_ = Object(__WEBPACK_IMPORTED_MODULE_8__firebase_util__["createSubscribe"])(function (observer) {
            _this.tokenRefreshObserver_ = observer;
        });
        _this.setupSWMessageListener_();
        return _this;
    }
    /**
     * This method returns an FCM token if it can be generated.
     * The return promise will reject if the browser doesn't support
     * FCM, if permission is denied for notifications or it's not
     * possible to generate a token.
     * @export
     * @return {Promise<string> | Promise<null>} Returns a promise the
     * resolves to an FCM token or null if permission isn't granted.
     */
    WindowController.prototype.getToken = function () {
        var _this = this;
        // Check that the required API's are available
        if (!this.isSupported_()) {
            return Promise.reject(this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_2__models_errors__["a" /* default */].codes.UNSUPPORTED_BROWSER));
        }
        return this.manifestCheck_().then(function () {
            return _super.prototype.getToken.call(_this);
        });
    };
    /**
     * The method checks that a manifest is defined and has the correct GCM
     * sender ID.
     * @private
     * @return {Promise} Returns a promise that resolves if the manifest matches
     * our required sender ID
     */
    WindowController.prototype.manifestCheck_ = function () {
        var _this = this;
        if (this.manifestCheckPromise_) {
            return this.manifestCheckPromise_;
        }
        var manifestTag = document.querySelector('link[rel="manifest"]');
        if (!manifestTag) {
            this.manifestCheckPromise_ = Promise.resolve();
        }
        else {
            this.manifestCheckPromise_ = fetch(manifestTag.href)
                .then(function (response) {
                return response.json();
            })
                .catch(function () {
                // If the download or parsing fails allow check.
                // We only want to error if we KNOW that the gcm_sender_id is incorrect.
            })
                .then(function (manifestContent) {
                if (!manifestContent) {
                    return;
                }
                if (!manifestContent['gcm_sender_id']) {
                    return;
                }
                if (manifestContent['gcm_sender_id'] !== '103953800507') {
                    throw _this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_2__models_errors__["a" /* default */].codes.INCORRECT_GCM_SENDER_ID);
                }
            });
        }
        return this.manifestCheckPromise_;
    };
    /**
     * Request permission if it is not currently granted
     * @export
     * @returns {Promise} Resolves if the permission was granted, otherwise
     * rejects
     */
    WindowController.prototype.requestPermission = function () {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["__generator"](this, function (_a) {
                if (Notification.permission === __WEBPACK_IMPORTED_MODULE_5__models_notification_permission__["a" /* default */].granted) {
                    return [2 /*return*/];
                }
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var managePermissionResult = function (result) {
                            if (result === __WEBPACK_IMPORTED_MODULE_5__models_notification_permission__["a" /* default */].granted) {
                                return resolve();
                            }
                            else if (result === __WEBPACK_IMPORTED_MODULE_5__models_notification_permission__["a" /* default */].denied) {
                                return reject(_this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_2__models_errors__["a" /* default */].codes.PERMISSION_BLOCKED));
                            }
                            else {
                                return reject(_this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_2__models_errors__["a" /* default */].codes.PERMISSION_DEFAULT));
                            }
                        };
                        // The Notification.requestPermission API was changed to
                        // return a promise so now have to handle both in case
                        // browsers stop support callbacks for promised version
                        var permissionPromise = Notification.requestPermission(managePermissionResult);
                        if (permissionPromise) {
                            // Prefer the promise version as it's the future API.
                            permissionPromise.then(managePermissionResult);
                        }
                    })];
            });
        });
    };
    /**
     * This method allows a developer to override the default service worker and
     * instead use a custom service worker.
     * @export
     * @param {!ServiceWorkerRegistration} registration The service worker
     * registration that should be used to receive the push messages.
     */
    WindowController.prototype.useServiceWorker = function (registration) {
        if (!(registration instanceof ServiceWorkerRegistration)) {
            throw this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_2__models_errors__["a" /* default */].codes.SW_REGISTRATION_EXPECTED);
        }
        if (typeof this.registrationToUse_ !== 'undefined') {
            throw this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_2__models_errors__["a" /* default */].codes.USE_SW_BEFORE_GET_TOKEN);
        }
        this.registrationToUse_ = registration;
    };
    /**
     * This method allows a developer to override the default vapid key
     * and instead use a custom VAPID public key.
     * @export
     * @param {!string} publicKey A URL safe base64 encoded string.
     */
    WindowController.prototype.usePublicVapidKey = function (publicKey) {
        if (typeof publicKey !== 'string') {
            throw this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_2__models_errors__["a" /* default */].codes.INVALID_PUBLIC_VAPID_KEY);
        }
        if (typeof this.publicVapidKeyToUse_ !== 'undefined') {
            throw this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_2__models_errors__["a" /* default */].codes.USE_PUBLIC_KEY_BEFORE_GET_TOKEN);
        }
        var parsedKey = Object(__WEBPACK_IMPORTED_MODULE_7__helpers_base64_to_array_buffer__["a" /* default */])(publicKey);
        if (parsedKey.length !== 65) {
            throw this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_2__models_errors__["a" /* default */].codes.PUBLIC_KEY_DECRYPTION_FAILED);
        }
        this.publicVapidKeyToUse_ = parsedKey;
    };
    /**
     * @export
     * @param {!firebase.Observer|function(*)} nextOrObserver An observer object
     * or a function triggered on message.
     * @param {function(!Error)=} optError Optional A function triggered on
     * message error.
     * @param {function()=} optCompleted Optional function triggered when the
     * observer is removed.
     * @return {!function()} The unsubscribe function for the observer.
     */
    WindowController.prototype.onMessage = function (nextOrObserver, optError, optCompleted) {
        return this.onMessage_(nextOrObserver, optError, optCompleted);
    };
    /**
     * @export
     * @param {!firebase.Observer|function()} nextOrObserver An observer object
     * or a function triggered on token refresh.
     * @param {function(!Error)=} optError Optional A function
     * triggered on token refresh error.
     * @param {function()=} optCompleted Optional function triggered when the
     * observer is removed.
     * @return {!function()} The unsubscribe function for the observer.
     */
    WindowController.prototype.onTokenRefresh = function (nextOrObserver, optError, optCompleted) {
        return this.onTokenRefresh_(nextOrObserver, optError, optCompleted);
    };
    /**
     * Given a registration, wait for the service worker it relates to
     * become activer
     * @private
     * @param  {ServiceWorkerRegistration} registration Registration to wait
     * for service worker to become active
     * @return {Promise<!ServiceWorkerRegistration>} Wait for service worker
     * registration to become active
     */
    WindowController.prototype.waitForRegistrationToActivate_ = function (registration) {
        var _this = this;
        var serviceWorker = registration.installing || registration.waiting || registration.active;
        return new Promise(function (resolve, reject) {
            if (!serviceWorker) {
                // This is a rare scenario but has occured in firefox
                reject(_this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_2__models_errors__["a" /* default */].codes.NO_SW_IN_REG));
                return;
            }
            // Because the Promise function is called on next tick there is a
            // small chance that the worker became active or redundant already.
            if (serviceWorker.state === 'activated') {
                resolve(registration);
                return;
            }
            if (serviceWorker.state === 'redundant') {
                reject(_this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_2__models_errors__["a" /* default */].codes.SW_REG_REDUNDANT));
                return;
            }
            var stateChangeListener = function () {
                if (serviceWorker.state === 'activated') {
                    resolve(registration);
                }
                else if (serviceWorker.state === 'redundant') {
                    reject(_this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_2__models_errors__["a" /* default */].codes.SW_REG_REDUNDANT));
                }
                else {
                    // Return early and wait to next state change
                    return;
                }
                serviceWorker.removeEventListener('statechange', stateChangeListener);
            };
            serviceWorker.addEventListener('statechange', stateChangeListener);
        });
    };
    /**
     * This will regiater the default service worker and return the registration
     * @private
     * @return {Promise<!ServiceWorkerRegistration>} The service worker
     * registration to be used for the push service.
     */
    WindowController.prototype.getSWRegistration_ = function () {
        var _this = this;
        if (this.registrationToUse_) {
            return this.waitForRegistrationToActivate_(this.registrationToUse_);
        }
        // Make the registration null so we know useServiceWorker will not
        // use a new service worker as registrationToUse_ is no longer undefined
        this.registrationToUse_ = null;
        return navigator.serviceWorker
            .register(__WEBPACK_IMPORTED_MODULE_4__models_default_sw__["a" /* default */].path, {
            scope: __WEBPACK_IMPORTED_MODULE_4__models_default_sw__["a" /* default */].scope
        })
            .catch(function (err) {
            throw _this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_2__models_errors__["a" /* default */].codes.FAILED_DEFAULT_REGISTRATION, {
                browserErrorMessage: err.message
            });
        })
            .then(function (registration) {
            return _this.waitForRegistrationToActivate_(registration).then(function () {
                _this.registrationToUse_ = registration;
                // We update after activation due to an issue with Firefox v49 where
                // a race condition occassionally causes the service work to not
                // install
                registration.update();
                return registration;
            });
        });
    };
    /**
     * This will return the default VAPID key or the uint8array version of the public VAPID key
     * provided by the developer.
     * @private
     */
    WindowController.prototype.getPublicVapidKey_ = function () {
        if (this.publicVapidKeyToUse_) {
            return Promise.resolve(this.publicVapidKeyToUse_);
        }
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_6__models_fcm_details__["a" /* default */].DEFAULT_PUBLIC_VAPID_KEY);
    };
    /**
     * This method will set up a message listener to handle
     * events from the service worker that should trigger
     * events in the page.
     *
     * @private
     */
    WindowController.prototype.setupSWMessageListener_ = function () {
        var _this = this;
        if (!('serviceWorker' in navigator)) {
            return;
        }
        navigator.serviceWorker.addEventListener('message', function (event) {
            if (!event.data || !event.data[__WEBPACK_IMPORTED_MODULE_3__models_worker_page_message__["a" /* default */].PARAMS.TYPE_OF_MSG]) {
                // Not a message from FCM
                return;
            }
            var workerPageMessage = event.data;
            switch (workerPageMessage[__WEBPACK_IMPORTED_MODULE_3__models_worker_page_message__["a" /* default */].PARAMS.TYPE_OF_MSG]) {
                case __WEBPACK_IMPORTED_MODULE_3__models_worker_page_message__["a" /* default */].TYPES_OF_MSG.PUSH_MSG_RECEIVED:
                case __WEBPACK_IMPORTED_MODULE_3__models_worker_page_message__["a" /* default */].TYPES_OF_MSG.NOTIFICATION_CLICKED:
                    var pushMessage = workerPageMessage[__WEBPACK_IMPORTED_MODULE_3__models_worker_page_message__["a" /* default */].PARAMS.DATA];
                    if (_this.messageObserver_) {
                        _this.messageObserver_.next(pushMessage);
                    }
                    break;
                default:
                    // Noop.
                    break;
            }
        }, false);
    };
    /**
     * Checks to see if the required API's are valid or not.
     * @private
     * @return {boolean} Returns true if the desired APIs are available.
     */
    WindowController.prototype.isSupported_ = function () {
        return ('serviceWorker' in navigator &&
            'PushManager' in window &&
            'Notification' in window &&
            'fetch' in window &&
            ServiceWorkerRegistration.prototype.hasOwnProperty('showNotification') &&
            PushSubscription.prototype.hasOwnProperty('getKey'));
    };
    return WindowController;
}(__WEBPACK_IMPORTED_MODULE_1__controller_interface__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (WindowController);

//# sourceMappingURL=window-controller.js.map


/***/ }),

/***/ 494:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__db_interface__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__errors__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_array_buffer_to_base64__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__clean_v1_undefined__ = __webpack_require__(495);
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */






var FCM_TOKEN_OBJ_STORE = 'fcm_token_object_Store';
var DB_NAME = 'fcm_token_details_db';
var DB_VERSION = 2;
/** @record */
function ValidateInput() { }
/** @type {string|undefined} */
ValidateInput.prototype.fcmToken;
/** @type {string|undefined} */
ValidateInput.prototype.swScope;
/** @type {string|undefined} */
ValidateInput.prototype.vapidKey;
/** @type {PushSubscription|undefined} */
ValidateInput.prototype.subscription;
/** @type {string|undefined} */
ValidateInput.prototype.fcmSenderId;
/** @type {string|undefined} */
ValidateInput.prototype.fcmPushSet;
var TokenDetailsModel = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__extends"](TokenDetailsModel, _super);
    function TokenDetailsModel() {
        return _super.call(this, DB_NAME, DB_VERSION) || this;
    }
    TokenDetailsModel.prototype.onDBUpgrade = function (db, evt) {
        if (evt.oldVersion < 1) {
            // New IDB instance
            var objectStore = db.createObjectStore(FCM_TOKEN_OBJ_STORE, {
                keyPath: 'swScope'
            });
            // Make sure the sender ID can be searched
            objectStore.createIndex('fcmSenderId', 'fcmSenderId', {
                unique: false
            });
            objectStore.createIndex('fcmToken', 'fcmToken', {
                unique: true
            });
        }
        if (evt.oldVersion < 2) {
            // Prior to version 2, we were using either 'fcm_token_details_db'
            // or 'undefined' as the database name due to bug in the SDK
            // So remove the old tokens and databases.
            Object(__WEBPACK_IMPORTED_MODULE_4__clean_v1_undefined__["a" /* cleanV1 */])();
        }
    };
    /**
     * This method takes an object and will check for known arguments and
     * validate the input.
     * @private
     * @param {!ValidateInput} input
     * @return {!Promise} Returns promise that resolves if input is valid,
     * rejects otherwise.
     */
    TokenDetailsModel.prototype.validateInputs_ = function (input) {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["__awaiter"](this, void 0, void 0, function () {
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["__generator"](this, function (_a) {
                if (input.fcmToken) {
                    if (typeof input.fcmToken !== 'string' || input.fcmToken.length === 0) {
                        return [2 /*return*/, Promise.reject(this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_2__errors__["a" /* default */].codes.BAD_TOKEN))];
                    }
                }
                if (input.swScope) {
                    if (typeof input.swScope !== 'string' || input.swScope.length === 0) {
                        return [2 /*return*/, Promise.reject(this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_2__errors__["a" /* default */].codes.BAD_SCOPE))];
                    }
                }
                if (input.vapidKey) {
                    if (!(input.vapidKey instanceof Uint8Array) ||
                        input.vapidKey.length !== 65) {
                        return [2 /*return*/, Promise.reject(this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_2__errors__["a" /* default */].codes.BAD_VAPID_KEY))];
                    }
                }
                if (input.subscription) {
                    if (!(input.subscription instanceof PushSubscription)) {
                        return [2 /*return*/, Promise.reject(this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_2__errors__["a" /* default */].codes.BAD_SUBSCRIPTION))];
                    }
                }
                if (input.fcmSenderId) {
                    if (typeof input.fcmSenderId !== 'string' ||
                        input.fcmSenderId.length === 0) {
                        return [2 /*return*/, Promise.reject(this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_2__errors__["a" /* default */].codes.BAD_SENDER_ID))];
                    }
                }
                if (input.fcmPushSet) {
                    if (typeof input.fcmPushSet !== 'string' ||
                        input.fcmPushSet.length === 0) {
                        return [2 /*return*/, Promise.reject(this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_2__errors__["a" /* default */].codes.BAD_PUSH_SET))];
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    /**
     * Given a token, this method will look up the details in indexedDB.
     * @param {string} fcmToken
     * @return {Promise<Object>} The details associated with that token.
     */
    TokenDetailsModel.prototype.getTokenDetailsFromToken = function (fcmToken) {
        var _this = this;
        if (!fcmToken) {
            return Promise.reject(this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_2__errors__["a" /* default */].codes.BAD_TOKEN));
        }
        return this.validateInputs_({ fcmToken: fcmToken })
            .then(function () {
            return _this.openDatabase();
        })
            .then(function (db) {
            return new Promise(function (resolve, reject) {
                var transaction = db.transaction([FCM_TOKEN_OBJ_STORE]);
                var objectStore = transaction.objectStore(FCM_TOKEN_OBJ_STORE);
                var index = objectStore.index('fcmToken');
                var request = index.get(fcmToken);
                request.onerror = function (event) {
                    reject(event.target.error);
                };
                request.onsuccess = function (event) {
                    var result = event.target.result
                        ? event.target.result
                        : null;
                    resolve(result);
                };
            });
        });
    };
    /**
     * Given a service worker scope, this method will look up the details in
     * indexedDB.
     * @public
     * @param {string} swScope
     * @return {Promise<Object>} The details associated with that token.
     */
    TokenDetailsModel.prototype.getTokenDetailsFromSWScope = function (swScope) {
        var _this = this;
        if (!swScope) {
            return Promise.reject(this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_2__errors__["a" /* default */].codes.BAD_SCOPE));
        }
        return this.validateInputs_({ swScope: swScope })
            .then(function () {
            return _this.openDatabase();
        })
            .then(function (db) {
            return new Promise(function (resolve, reject) {
                var transaction = db.transaction([FCM_TOKEN_OBJ_STORE]);
                var objectStore = transaction.objectStore(FCM_TOKEN_OBJ_STORE);
                var scopeRequest = objectStore.get(swScope);
                scopeRequest.onerror = function (event) {
                    reject(event.target.error);
                };
                scopeRequest.onsuccess = function (event) {
                    var result = event.target.result
                        ? event.target.result
                        : null;
                    resolve(result);
                };
            });
        });
    };
    /**
     * Save the details for the fcm token for re-use at a later date.
     * @param {{swScope: !string, vapidKey: !string,
     * subscription: !PushSubscription, fcmSenderId: !string, fcmToken: !string,
     * fcmPushSet: !string}} input A plain js object containing args to save.
     * @return {Promise<void>}
     */
    TokenDetailsModel.prototype.saveTokenDetails = function (_a) {
        var _this = this;
        var swScope = _a.swScope, vapidKey = _a.vapidKey, subscription = _a.subscription, fcmSenderId = _a.fcmSenderId, fcmToken = _a.fcmToken, fcmPushSet = _a.fcmPushSet;
        if (!swScope) {
            return Promise.reject(this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_2__errors__["a" /* default */].codes.BAD_SCOPE));
        }
        if (!vapidKey) {
            return Promise.reject(this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_2__errors__["a" /* default */].codes.BAD_VAPID_KEY));
        }
        if (!subscription) {
            return Promise.reject(this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_2__errors__["a" /* default */].codes.BAD_SUBSCRIPTION));
        }
        if (!fcmSenderId) {
            return Promise.reject(this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_2__errors__["a" /* default */].codes.BAD_SENDER_ID));
        }
        if (!fcmToken) {
            return Promise.reject(this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_2__errors__["a" /* default */].codes.BAD_TOKEN));
        }
        if (!fcmPushSet) {
            return Promise.reject(this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_2__errors__["a" /* default */].codes.BAD_PUSH_SET));
        }
        return this.validateInputs_({
            swScope: swScope,
            vapidKey: vapidKey,
            subscription: subscription,
            fcmSenderId: fcmSenderId,
            fcmToken: fcmToken,
            fcmPushSet: fcmPushSet
        })
            .then(function () {
            return _this.openDatabase();
        })
            .then(function (db) {
            /**
             * @dict
             */
            var details = {
                swScope: swScope,
                vapidKey: Object(__WEBPACK_IMPORTED_MODULE_3__helpers_array_buffer_to_base64__["a" /* default */])(vapidKey),
                endpoint: subscription.endpoint,
                auth: Object(__WEBPACK_IMPORTED_MODULE_3__helpers_array_buffer_to_base64__["a" /* default */])(subscription['getKey']('auth')),
                p256dh: Object(__WEBPACK_IMPORTED_MODULE_3__helpers_array_buffer_to_base64__["a" /* default */])(subscription['getKey']('p256dh')),
                fcmSenderId: fcmSenderId,
                fcmToken: fcmToken,
                fcmPushSet: fcmPushSet,
                createTime: Date.now()
            };
            return new Promise(function (resolve, reject) {
                var transaction = db.transaction([FCM_TOKEN_OBJ_STORE], _this.TRANSACTION_READ_WRITE);
                var objectStore = transaction.objectStore(FCM_TOKEN_OBJ_STORE);
                var request = objectStore.put(details);
                request.onerror = function (event) {
                    reject(event.target.error);
                };
                request.onsuccess = function (event) {
                    resolve();
                };
            });
        });
    };
    /**
     * This method deletes details of the current FCM token.
     * It's returning a promise in case we need to move to an async
     * method for deleting at a later date.
     * @return {Promise<Object>} Resolves once the FCM token details have been
     * deleted and returns the deleted details.
     */
    TokenDetailsModel.prototype.deleteToken = function (token) {
        var _this = this;
        if (typeof token !== 'string' || token.length === 0) {
            return Promise.reject(this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_2__errors__["a" /* default */].codes.INVALID_DELETE_TOKEN));
        }
        return this.getTokenDetailsFromToken(token).then(function (details) {
            if (!details) {
                throw _this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_2__errors__["a" /* default */].codes.DELETE_TOKEN_NOT_FOUND);
            }
            return _this.openDatabase().then(function (db) {
                return new Promise(function (resolve, reject) {
                    var transaction = db.transaction([FCM_TOKEN_OBJ_STORE], _this.TRANSACTION_READ_WRITE);
                    var objectStore = transaction.objectStore(FCM_TOKEN_OBJ_STORE);
                    var request = objectStore.delete(details['swScope']);
                    request.onerror = function (event) {
                        reject(event.target.error);
                    };
                    request.onsuccess = function (event) {
                        if (event.target.result === 0) {
                            reject(_this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_2__errors__["a" /* default */].codes.FAILED_TO_DELETE_TOKEN));
                            return;
                        }
                        resolve(details);
                    };
                });
            });
        });
    };
    return TokenDetailsModel;
}(__WEBPACK_IMPORTED_MODULE_1__db_interface__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (TokenDetailsModel);

//# sourceMappingURL=token-details-model.js.map


/***/ }),

/***/ 495:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cleanV1; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_iid_model__ = __webpack_require__(471);
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * There seems to have been a bug in the messaging SDK versions <= 4.9.x
 * where the IndexedDB model was using a database name of 'undefined'.
 *
 * In 4.10.x we changed the model implementation, but kept the database
 * name as it should have been. This however introduced an issue where
 * two tokens were pointing to the same underlying PushSubscription.
 *
 * This code will look for the undefined database and delete any of the
 * underlying tokens.
 */

var OLD_DB_NAME = 'undefined';
var OLD_OBJECT_STORE_NAME = 'fcm_token_object_Store';
function handleDb(db) {
    if (!db.objectStoreNames.contains(OLD_OBJECT_STORE_NAME)) {
        // We found a database with the name 'undefined', but our expected object
        // store isn't defined.
        return;
    }
    var transaction = db.transaction(OLD_OBJECT_STORE_NAME);
    var objectStore = transaction.objectStore(OLD_OBJECT_STORE_NAME);
    var iidModel = new __WEBPACK_IMPORTED_MODULE_0__models_iid_model__["a" /* default */]();
    var openCursorRequest = objectStore.openCursor();
    openCursorRequest.onerror = function (event) {
        // NOOP - Nothing we can do.
        console.warn('Unable to cleanup old IDB.', event);
    };
    openCursorRequest.onsuccess = function () {
        var cursor = openCursorRequest.result;
        if (cursor) {
            // cursor.value contains the current record being iterated through
            // this is where you'd do something with the result
            var tokenDetails = cursor.value;
            iidModel.deleteToken(tokenDetails.fcmSenderId, tokenDetails.fcmToken, tokenDetails.fcmPushSet);
            cursor.continue();
        }
        else {
            db.close();
            indexedDB.deleteDatabase(OLD_DB_NAME);
        }
    };
}
function cleanV1() {
    var request = indexedDB.open(OLD_DB_NAME);
    request.onerror = function (event) {
        // NOOP - Nothing we can do.
    };
    request.onsuccess = function (event) {
        var db = request.result;
        handleDb(db);
    };
}


//# sourceMappingURL=clean-v1-undefined.js.map


/***/ }),

/***/ 496:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__db_interface__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__errors__ = __webpack_require__(456);
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




var FCM_VAPID_OBJ_STORE = 'fcm_vapid_object_Store';
var DB_NAME = 'fcm_vapid_details_db';
var DB_VERSION = 1;
var UNCOMPRESSED_PUBLIC_KEY_SIZE = 65;
var VapidDetailsModel = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__extends"](VapidDetailsModel, _super);
    function VapidDetailsModel() {
        return _super.call(this, DB_NAME, DB_VERSION) || this;
    }
    /**
     * @override
     * @param {IDBDatabase} db
     */
    VapidDetailsModel.prototype.onDBUpgrade = function (db) {
        db.createObjectStore(FCM_VAPID_OBJ_STORE, {
            keyPath: 'swScope'
        });
    };
    /**
     * Given a service worker scope, this method will look up the vapid key
     * in indexedDB.
     */
    VapidDetailsModel.prototype.getVapidFromSWScope = function (swScope) {
        if (typeof swScope !== 'string' || swScope.length === 0) {
            return Promise.reject(this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_2__errors__["a" /* default */].codes.BAD_SCOPE));
        }
        return this.openDatabase().then(function (db) {
            return new Promise(function (resolve, reject) {
                var transaction = db.transaction([FCM_VAPID_OBJ_STORE]);
                var objectStore = transaction.objectStore(FCM_VAPID_OBJ_STORE);
                var scopeRequest = objectStore.get(swScope);
                scopeRequest.onerror = function () {
                    reject(scopeRequest.error);
                };
                scopeRequest.onsuccess = function () {
                    var result = scopeRequest.result;
                    var vapidKey = null;
                    if (result) {
                        vapidKey = result.vapidKey;
                    }
                    resolve(vapidKey);
                };
            });
        });
    };
    /**
     * Save a vapid key against a swScope for later date.
     */
    VapidDetailsModel.prototype.saveVapidDetails = function (swScope, vapidKey) {
        var _this = this;
        if (typeof swScope !== 'string' || swScope.length === 0) {
            return Promise.reject(this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_2__errors__["a" /* default */].codes.BAD_SCOPE));
        }
        if (vapidKey === null || vapidKey.length !== UNCOMPRESSED_PUBLIC_KEY_SIZE) {
            return Promise.reject(this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_2__errors__["a" /* default */].codes.BAD_VAPID_KEY));
        }
        var details = {
            swScope: swScope,
            vapidKey: vapidKey
        };
        return this.openDatabase().then(function (db) {
            return new Promise(function (resolve, reject) {
                var transaction = db.transaction([FCM_VAPID_OBJ_STORE], _this.TRANSACTION_READ_WRITE);
                var objectStore = transaction.objectStore(FCM_VAPID_OBJ_STORE);
                var request = objectStore.put(details);
                request.onerror = function () {
                    reject(request.error);
                };
                request.onsuccess = function () {
                    resolve();
                };
            });
        });
    };
    /**
     * This method deletes details of the current FCM VAPID key for a SW scope.
     * Resolves once the scope/vapid details have been deleted and returns the
     * deleted vapid key.
     */
    VapidDetailsModel.prototype.deleteVapidDetails = function (swScope) {
        var _this = this;
        return this.getVapidFromSWScope(swScope).then(function (vapidKey) {
            if (!vapidKey) {
                throw _this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_2__errors__["a" /* default */].codes.DELETE_SCOPE_NOT_FOUND);
            }
            return _this.openDatabase().then(function (db) {
                return new Promise(function (resolve, reject) {
                    var transaction = db.transaction([FCM_VAPID_OBJ_STORE], _this.TRANSACTION_READ_WRITE);
                    var objectStore = transaction.objectStore(FCM_VAPID_OBJ_STORE);
                    var request = objectStore.delete(swScope);
                    request.onerror = function () {
                        reject(request.error);
                    };
                    request.onsuccess = function () {
                        if (request.result === 0) {
                            reject(_this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_2__errors__["a" /* default */].codes.FAILED_DELETE_VAPID_KEY));
                            return;
                        }
                        resolve(vapidKey);
                    };
                });
            });
        });
    };
    return VapidDetailsModel;
}(__WEBPACK_IMPORTED_MODULE_1__db_interface__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (VapidDetailsModel);

//# sourceMappingURL=vapid-details-model.js.map


/***/ }),

/***/ 497:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* harmony default export */ __webpack_exports__["a"] = ({
    path: '/firebase-messaging-sw.js',
    scope: '/firebase-cloud-messaging-push-scope'
});

//# sourceMappingURL=default-sw.js.map


/***/ }),

/***/ 498:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/* harmony default export */ __webpack_exports__["a"] = (function (base64String) {
    var padding = '='.repeat((4 - base64String.length % 4) % 4);
    var base64 = (base64String + padding)
        .replace(/\-/g, '+')
        .replace(/_/g, '/');
    var rawData = window.atob(base64);
    var outputArray = new Uint8Array(rawData.length);
    for (var i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
});

//# sourceMappingURL=base64-to-array-buffer.js.map


/***/ }),

/***/ 499:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__controller_interface__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_errors__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_fcm_details__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_worker_page_message__ = __webpack_require__(473);
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */






var FCM_MSG = 'FCM_MSG';
var SWController = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__extends"](SWController, _super);
    function SWController(app) {
        var _this = _super.call(this, app) || this;
        self.addEventListener('push', function (e) { return _this.onPush_(e); }, false);
        self.addEventListener('pushsubscriptionchange', function (e) { return _this.onSubChange_(e); }, false);
        self.addEventListener('notificationclick', function (e) { return _this.onNotificationClick_(e); }, false);
        /**
         * @private
         * @type {function(Object)|null}
         */
        _this.bgMessageHandler_ = null;
        return _this;
    }
    /**
     * A handler for push events that shows notifications based on the content of
     * the payload.
     *
     * The payload must be a JSON-encoded Object with a `notification` key. The
     * value of the `notification` property will be used as the NotificationOptions
     * object passed to showNotification. Additionally, the `title` property of the
     * notification object will be used as the title.
     *
     * If there is no notification data in the payload then no notification will be
     * shown.
     * @private
     */
    SWController.prototype.onPush_ = function (event) {
        var _this = this;
        var msgPayload;
        try {
            msgPayload = event.data.json();
        }
        catch (err) {
            // Not JSON so not an FCM message
            return;
        }
        var handleMsgPromise = this.hasVisibleClients_().then(function (hasVisibleClients) {
            if (hasVisibleClients) {
                // Do not need to show a notification.
                if (msgPayload.notification || _this.bgMessageHandler_) {
                    // Send to page
                    return _this.sendMessageToWindowClients_(msgPayload);
                }
                return;
            }
            var notificationDetails = _this.getNotificationData_(msgPayload);
            if (notificationDetails) {
                var notificationTitle_1 = notificationDetails.title || '';
                return _this.getSWRegistration_().then(function (reg) {
                    return reg.showNotification(notificationTitle_1, notificationDetails);
                });
            }
            else if (_this.bgMessageHandler_) {
                return _this.bgMessageHandler_(msgPayload);
            }
        });
        event.waitUntil(handleMsgPromise);
    };
    /**
     * @private
     */
    SWController.prototype.onSubChange_ = function (event) {
        var _this = this;
        var promiseChain = this.getSWRegistration_()
            .then(function (registration) {
            return registration.pushManager
                .getSubscription()
                .then(function (subscription) {
                // TODO: Check if it's still valid
                // TODO: If not, then update token
            })
                .catch(function (err) {
                // The best thing we can do is log this to the terminal so
                // developers might notice the error.
                var tokenDetailsModel = _this.getTokenDetailsModel();
                return tokenDetailsModel
                    .getTokenDetailsFromSWScope(registration.scope)
                    .then(function (tokenDetails) {
                    if (!tokenDetails) {
                        // This should rarely occure, but could if indexedDB
                        // is corrupted or wiped
                        throw err;
                    }
                    // Attempt to delete the token if we know it's bad
                    return _this.deleteToken(tokenDetails['fcmToken']).then(function () {
                        throw err;
                    });
                });
            });
        })
            .catch(function (err) {
            throw _this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_2__models_errors__["a" /* default */].codes.UNABLE_TO_RESUBSCRIBE, {
                message: err
            });
        });
        event.waitUntil(promiseChain);
    };
    /**
     * @private
     */
    SWController.prototype.onNotificationClick_ = function (event) {
        var _this = this;
        if (!(event.notification &&
            event.notification.data &&
            event.notification.data[FCM_MSG])) {
            // Not an FCM notification, do nothing.
            return;
        }
        // Prevent other listeners from receiving the event
        event.stopImmediatePropagation();
        event.notification.close();
        var msgPayload = event.notification.data[FCM_MSG];
        if (!msgPayload['notification']) {
            // Nothing to do.
            return;
        }
        var clickAction = msgPayload['notification']['click_action'];
        if (!clickAction) {
            // Nothing to do.
            return;
        }
        var promiseChain = this.getWindowClient_(clickAction)
            .then(function (windowClient) {
            if (!windowClient) {
                // Unable to find window client so need to open one.
                return self.clients.openWindow(clickAction);
            }
            return windowClient.focus();
        })
            .then(function (windowClient) {
            if (!windowClient) {
                // Window Client will not be returned if it's for a third party origin.
                return;
            }
            // Delete notification data from payload before sending to the page.
            var notificationData = msgPayload['notification'];
            delete msgPayload['notification'];
            var internalMsg = __WEBPACK_IMPORTED_MODULE_4__models_worker_page_message__["a" /* default */].createNewMsg(__WEBPACK_IMPORTED_MODULE_4__models_worker_page_message__["a" /* default */].TYPES_OF_MSG.NOTIFICATION_CLICKED, msgPayload);
            // Attempt to send a message to the client to handle the data
            // Is affected by: https://github.com/slightlyoff/ServiceWorker/issues/728
            return _this.attemptToMessageClient_(windowClient, internalMsg);
        });
        event.waitUntil(promiseChain);
    };
    /**
     * @private
     * @param {Object} msgPayload
     * @return {NotificationOptions|undefined}
     */
    SWController.prototype.getNotificationData_ = function (msgPayload) {
        if (!msgPayload) {
            return;
        }
        if (typeof msgPayload.notification !== 'object') {
            return;
        }
        var notificationInformation = Object.assign({}, msgPayload.notification);
        // Put the message payload under FCM_MSG name so we can identify the
        // notification as being an FCM notification vs a notification from
        // somewhere else (i.e. normal web push or developer generated
        // notification).
        notificationInformation['data'] = (_a = {},
            _a[FCM_MSG] = msgPayload,
            _a);
        return notificationInformation;
        var _a;
    };
    /**
     * Calling setBackgroundMessageHandler will opt in to some specific
     * behaviours.
     * 1.) If a notification doesn't need to be shown due to a window already
     * being visible, then push messages will be sent to the page.
     * 2.) If a notification needs to be shown, and the message contains no
     * notification data this method will be called
     * and the promise it returns will be passed to event.waitUntil.
     * If you do not set this callback then all push messages will let and the
     * developer can handle them in a their own 'push' event callback
     * @export
     * @param {function(Object)} callback The callback to be called when a push
     * message is received and a notification must be shown. The callback will
     * be given the data from the push message.
     */
    SWController.prototype.setBackgroundMessageHandler = function (callback) {
        if (!callback || typeof callback !== 'function') {
            throw this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_2__models_errors__["a" /* default */].codes.BG_HANDLER_FUNCTION_EXPECTED);
        }
        this.bgMessageHandler_ = callback;
    };
    /**
     * @private
     * @param {string} url The URL to look for when focusing a client.
     * @return {Object} Returns an existing window client or a newly opened
     * WindowClient.
     */
    SWController.prototype.getWindowClient_ = function (url) {
        // Use URL to normalize the URL when comparing to windowClients.
        // This at least handles whether to include trailing slashes or not
        var parsedURL = new URL(url, self.location).href;
        return self.clients
            .matchAll({
            type: 'window',
            includeUncontrolled: true
        })
            .then(function (clientList) {
            var suitableClient = null;
            for (var i = 0; i < clientList.length; i++) {
                var parsedClientUrl = new URL(clientList[i].url, self.location).href;
                if (parsedClientUrl === parsedURL) {
                    suitableClient = clientList[i];
                    break;
                }
            }
            if (suitableClient) {
                return suitableClient;
            }
            return null;
        });
    };
    /**
     * This message will attempt to send the message to a window client.
     * @private
     * @param {Object} client The WindowClient to send the message to.
     * @param {Object} message The message to send to the client.
     * @returns {Promise} Returns a promise that resolves after sending the
     * message. This does not guarantee that the message was successfully
     * received.
     */
    SWController.prototype.attemptToMessageClient_ = function (client, message) {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["__awaiter"](this, void 0, void 0, function () {
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["__generator"](this, function (_a) {
                // NOTE: This returns a promise in case this API is abstracted later on to
                // do additional work
                if (!client) {
                    return [2 /*return*/, Promise.reject(this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_2__models_errors__["a" /* default */].codes.NO_WINDOW_CLIENT_TO_MSG))];
                }
                client.postMessage(message);
                return [2 /*return*/];
            });
        });
    };
    /**
     * @private
     * @returns {Promise<boolean>} If there is currently a visible WindowClient,
     * this method will resolve to true, otherwise false.
     */
    SWController.prototype.hasVisibleClients_ = function () {
        return self.clients
            .matchAll({
            type: 'window',
            includeUncontrolled: true
        })
            .then(function (clientList) {
            return clientList.some(function (client) { return client.visibilityState === 'visible'; });
        });
    };
    /**
     * @private
     * @param {Object} msgPayload The data from the push event that should be sent
     * to all available pages.
     * @returns {Promise} Returns a promise that resolves once the message
     * has been sent to all WindowClients.
     */
    SWController.prototype.sendMessageToWindowClients_ = function (msgPayload) {
        var _this = this;
        return self.clients
            .matchAll({
            type: 'window',
            includeUncontrolled: true
        })
            .then(function (clientList) {
            var internalMsg = __WEBPACK_IMPORTED_MODULE_4__models_worker_page_message__["a" /* default */].createNewMsg(__WEBPACK_IMPORTED_MODULE_4__models_worker_page_message__["a" /* default */].TYPES_OF_MSG.PUSH_MSG_RECEIVED, msgPayload);
            return Promise.all(clientList.map(function (client) {
                return _this.attemptToMessageClient_(client, internalMsg);
            }));
        });
    };
    /**
     * This will register the default service worker and return the registration.
     * @private
     * @return {Promise<!ServiceWorkerRegistration>} The service worker
     * registration to be used for the push service.
     */
    SWController.prototype.getSWRegistration_ = function () {
        return Promise.resolve(self.registration);
    };
    /**
     * This will return the default VAPID key or the uint8array version of the
     * public VAPID key provided by the developer.
     */
    SWController.prototype.getPublicVapidKey_ = function () {
        var _this = this;
        return this.getSWRegistration_()
            .then(function (swReg) {
            return _this.getVapidDetailsModel().getVapidFromSWScope(swReg.scope);
        })
            .then(function (vapidKeyFromDatabase) {
            if (vapidKeyFromDatabase === null) {
                return __WEBPACK_IMPORTED_MODULE_3__models_fcm_details__["a" /* default */].DEFAULT_PUBLIC_VAPID_KEY;
            }
            return vapidKeyFromDatabase;
        });
    };
    return SWController;
}(__WEBPACK_IMPORTED_MODULE_1__controller_interface__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (SWController);

//# sourceMappingURL=sw-controller.js.map


/***/ }),

/***/ 500:
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

__webpack_require__(501);


/***/ }),

/***/ 501:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["registerStorage"] = registerStorage;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__firebase_app__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_implementation_string__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_implementation_taskenums__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_implementation_xhriopool__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_reference__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_service__ = __webpack_require__(511);
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */







/**
 * Type constant for Firebase Storage.
 */
var STORAGE_TYPE = 'storage';
function factory(app, unused, opt_url) {
    return new __WEBPACK_IMPORTED_MODULE_5__src_service__["a" /* Service */](app, new __WEBPACK_IMPORTED_MODULE_3__src_implementation_xhriopool__["a" /* XhrIoPool */](), opt_url);
}
function registerStorage(instance) {
    var namespaceExports = {
        // no-inline
        TaskState: __WEBPACK_IMPORTED_MODULE_2__src_implementation_taskenums__["c" /* TaskState */],
        TaskEvent: __WEBPACK_IMPORTED_MODULE_2__src_implementation_taskenums__["b" /* TaskEvent */],
        StringFormat: __WEBPACK_IMPORTED_MODULE_1__src_implementation_string__["a" /* StringFormat */],
        Storage: __WEBPACK_IMPORTED_MODULE_5__src_service__["a" /* Service */],
        Reference: __WEBPACK_IMPORTED_MODULE_4__src_reference__["a" /* Reference */]
    };
    instance.INTERNAL.registerService(STORAGE_TYPE, factory, namespaceExports, undefined, 
    // Allow multiple storage instances per app.
    true);
}
registerStorage(__WEBPACK_IMPORTED_MODULE_0__firebase_app__["default"]);

//# sourceMappingURL=index.js.map


/***/ }),

/***/ 502:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return XhrIoPool; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__xhrio_network__ = __webpack_require__(503);
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Factory-like class for creating XhrIo instances.
 */
var XhrIoPool = /** @class */ (function () {
    function XhrIoPool() {
    }
    XhrIoPool.prototype.createXhrIo = function () {
        return new __WEBPACK_IMPORTED_MODULE_0__xhrio_network__["a" /* NetworkXhrIo */]();
    };
    return XhrIoPool;
}());


//# sourceMappingURL=xhriopool.js.map


/***/ }),

/***/ 503:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NetworkXhrIo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__error__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__object__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__promise_external__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__type__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__xhrio__ = __webpack_require__(474);
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */





/**
 * We use this instead of goog.net.XhrIo because goog.net.XhrIo is hyuuuuge and
 * doesn't work in React Native on Android.
 */
var NetworkXhrIo = /** @class */ (function () {
    function NetworkXhrIo() {
        var _this = this;
        this.sent_ = false;
        this.xhr_ = new XMLHttpRequest();
        this.errorCode_ = __WEBPACK_IMPORTED_MODULE_4__xhrio__["a" /* ErrorCode */].NO_ERROR;
        this.sendPromise_ = __WEBPACK_IMPORTED_MODULE_2__promise_external__["a" /* make */](function (resolve, reject) {
            _this.xhr_.addEventListener('abort', function (event) {
                _this.errorCode_ = __WEBPACK_IMPORTED_MODULE_4__xhrio__["a" /* ErrorCode */].ABORT;
                resolve(_this);
            });
            _this.xhr_.addEventListener('error', function (event) {
                _this.errorCode_ = __WEBPACK_IMPORTED_MODULE_4__xhrio__["a" /* ErrorCode */].NETWORK_ERROR;
                resolve(_this);
            });
            _this.xhr_.addEventListener('load', function (event) {
                resolve(_this);
            });
        });
    }
    /**
     * @override
     */
    NetworkXhrIo.prototype.send = function (url, method, opt_body, opt_headers) {
        var _this = this;
        if (this.sent_) {
            throw __WEBPACK_IMPORTED_MODULE_0__error__["e" /* internalError */]('cannot .send() more than once');
        }
        this.sent_ = true;
        this.xhr_.open(method, url, true);
        if (__WEBPACK_IMPORTED_MODULE_3__type__["a" /* isDef */](opt_headers)) {
            var headers = opt_headers;
            __WEBPACK_IMPORTED_MODULE_1__object__["b" /* forEach */](headers, function (key, val) {
                _this.xhr_.setRequestHeader(key, val.toString());
            });
        }
        if (__WEBPACK_IMPORTED_MODULE_3__type__["a" /* isDef */](opt_body)) {
            this.xhr_.send(opt_body);
        }
        else {
            this.xhr_.send();
        }
        return this.sendPromise_;
    };
    /**
     * @override
     */
    NetworkXhrIo.prototype.getErrorCode = function () {
        if (!this.sent_) {
            throw __WEBPACK_IMPORTED_MODULE_0__error__["e" /* internalError */]('cannot .getErrorCode() before sending');
        }
        return this.errorCode_;
    };
    /**
     * @override
     */
    NetworkXhrIo.prototype.getStatus = function () {
        if (!this.sent_) {
            throw __WEBPACK_IMPORTED_MODULE_0__error__["e" /* internalError */]('cannot .getStatus() before sending');
        }
        try {
            return this.xhr_.status;
        }
        catch (e) {
            return -1;
        }
    };
    /**
     * @override
     */
    NetworkXhrIo.prototype.getResponseText = function () {
        if (!this.sent_) {
            throw __WEBPACK_IMPORTED_MODULE_0__error__["e" /* internalError */]('cannot .getResponseText() before sending');
        }
        return this.xhr_.responseText;
    };
    /**
     * Aborts the request.
     * @override
     */
    NetworkXhrIo.prototype.abort = function () {
        this.xhr_.abort();
    };
    /**
     * @override
     */
    NetworkXhrIo.prototype.getResponseHeader = function (header) {
        return this.xhr_.getResponseHeader(header);
    };
    /**
     * @override
     */
    NetworkXhrIo.prototype.addUploadProgressListener = function (listener) {
        if (__WEBPACK_IMPORTED_MODULE_3__type__["a" /* isDef */](this.xhr_.upload)) {
            this.xhr_.upload.addEventListener('progress', listener);
        }
    };
    /**
     * @override
     */
    NetworkXhrIo.prototype.removeUploadProgressListener = function (listener) {
        if (__WEBPACK_IMPORTED_MODULE_3__type__["a" /* isDef */](this.xhr_.upload)) {
            this.xhr_.upload.removeEventListener('progress', listener);
        }
    };
    return NetworkXhrIo;
}());


//# sourceMappingURL=xhrio_network.js.map


/***/ }),

/***/ 504:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = jsonObjectOrNull;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__type__ = __webpack_require__(454);
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Returns the Object resulting from parsing the given JSON, or null if the
 * given string does not represent a JSON object.
 */
function jsonObjectOrNull(s) {
    var obj;
    try {
        obj = JSON.parse(s);
    }
    catch (e) {
        return null;
    }
    if (__WEBPACK_IMPORTED_MODULE_0__type__["f" /* isNonArrayObject */](obj)) {
        return obj;
    }
    else {
        return null;
    }
}

//# sourceMappingURL=json.js.map


/***/ }),

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getBlob;
/* harmony export (immutable) */ __webpack_exports__["b"] = sliceBlob;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__type__ = __webpack_require__(454);

function getBlobBuilder() {
    if (typeof BlobBuilder !== 'undefined') {
        return BlobBuilder;
    }
    else if (typeof WebKitBlobBuilder !== 'undefined') {
        return WebKitBlobBuilder;
    }
    else {
        return undefined;
    }
}
/**
 * Concatenates one or more values together and converts them to a Blob.
 *
 * @param var_args The values that will make up the resulting blob.
 * @return The blob.
 */
function getBlob() {
    var var_args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        var_args[_i] = arguments[_i];
    }
    var BlobBuilder = getBlobBuilder();
    if (BlobBuilder !== undefined) {
        var bb = new BlobBuilder();
        for (var i = 0; i < var_args.length; i++) {
            bb.append(var_args[i]);
        }
        return bb.getBlob();
    }
    else {
        if (__WEBPACK_IMPORTED_MODULE_0__type__["e" /* isNativeBlobDefined */]()) {
            return new Blob(var_args);
        }
        else {
            throw Error("This browser doesn't seem to support creating Blobs");
        }
    }
}
/**
 * Slices the blob. The returned blob contains data from the start byte
 * (inclusive) till the end byte (exclusive). Negative indices cannot be used.
 *
 * @param blob The blob to be sliced.
 * @param start Index of the starting byte.
 * @param end Index of the ending byte.
 * @return The blob slice or null if not supported.
 */
function sliceBlob(blob, start, end) {
    if (blob.webkitSlice) {
        return blob.webkitSlice(start, end);
    }
    else if (blob.mozSlice) {
        return blob.mozSlice(start, end);
    }
    else if (blob.slice) {
        return blob.slice(start, end);
    }
    return null;
}

//# sourceMappingURL=fs.js.map


/***/ }),

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestInfo; });
var RequestInfo = /** @class */ (function () {
    function RequestInfo(url, method, 
    /**
     * Returns the value with which to resolve the request's promise. Only called
     * if the request is successful. Throw from this function to reject the
     * returned Request's promise with the thrown error.
     * Note: The XhrIo passed to this function may be reused after this callback
     * returns. Do not keep a reference to it in any way.
     */
    handler, timeout) {
        this.url = url;
        this.method = method;
        this.handler = handler;
        this.timeout = timeout;
        this.urlParams = {};
        this.headers = {};
        this.body = null;
        this.errorHandler = null;
        /**
         * Called with the current number of bytes uploaded and total size (-1 if not
         * computable) of the request body (i.e. used to report upload progress).
         */
        this.progressCallback = null;
        this.successCodes = [200];
        this.additionalRetryCodes = [];
    }
    return RequestInfo;
}());


//# sourceMappingURL=requestinfo.js.map


/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadTask; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__implementation_observer__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tasksnapshot__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__implementation_args__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__implementation_array__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__implementation_async__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__implementation_error__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__implementation_promise_external__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__implementation_requests__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__implementation_type__ = __webpack_require__(454);
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @fileoverview Defines types for interacting with blob transfer tasks.
 */












/**
 * Represents a blob being uploaded. Can be used to pause/resume/cancel the
 * upload and manage callbacks for various events.
 */
var UploadTask = /** @class */ (function () {
    /**
     * @param ref The firebaseStorage.Reference object this task came
     *     from, untyped to avoid cyclic dependencies.
     * @param blob The blob to upload.
     */
    function UploadTask(ref, authWrapper, location, mappings, blob, metadata) {
        if (metadata === void 0) { metadata = null; }
        var _this = this;
        this.transferred_ = 0;
        this.needToFetchStatus_ = false;
        this.needToFetchMetadata_ = false;
        this.observers_ = [];
        this.error_ = null;
        this.uploadUrl_ = null;
        this.request_ = null;
        this.chunkMultiplier_ = 1;
        this.resolve_ = null;
        this.reject_ = null;
        this.ref_ = ref;
        this.authWrapper_ = authWrapper;
        this.location_ = location;
        this.blob_ = blob;
        this.metadata_ = metadata;
        this.mappings_ = mappings;
        this.resumable_ = this.shouldDoResumable_(this.blob_);
        this.state_ = __WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["a" /* InternalTaskState */].RUNNING;
        this.errorHandler_ = function (error) {
            _this.request_ = null;
            _this.chunkMultiplier_ = 1;
            if (error.codeEquals(__WEBPACK_IMPORTED_MODULE_6__implementation_error__["a" /* Code */].CANCELED)) {
                _this.needToFetchStatus_ = true;
                _this.completeTransitions_();
            }
            else {
                _this.error_ = error;
                _this.transition_(__WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["a" /* InternalTaskState */].ERROR);
            }
        };
        this.metadataErrorHandler_ = function (error) {
            _this.request_ = null;
            if (error.codeEquals(__WEBPACK_IMPORTED_MODULE_6__implementation_error__["a" /* Code */].CANCELED)) {
                _this.completeTransitions_();
            }
            else {
                _this.error_ = error;
                _this.transition_(__WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["a" /* InternalTaskState */].ERROR);
            }
        };
        this.promise_ = __WEBPACK_IMPORTED_MODULE_7__implementation_promise_external__["a" /* make */](function (resolve, reject) {
            _this.resolve_ = resolve;
            _this.reject_ = reject;
            _this.start_();
        });
        // Prevent uncaught rejections on the internal promise from bubbling out
        // to the top level with a dummy handler.
        this.promise_.then(null, function () { });
    }
    UploadTask.prototype.makeProgressCallback_ = function () {
        var _this = this;
        var sizeBefore = this.transferred_;
        return function (loaded, total) {
            _this.updateProgress_(sizeBefore + loaded);
        };
    };
    UploadTask.prototype.shouldDoResumable_ = function (blob) {
        return blob.size() > 256 * 1024;
    };
    UploadTask.prototype.start_ = function () {
        if (this.state_ !== __WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["a" /* InternalTaskState */].RUNNING) {
            // This can happen if someone pauses us in a resume callback, for example.
            return;
        }
        if (this.request_ !== null) {
            return;
        }
        if (this.resumable_) {
            if (this.uploadUrl_ === null) {
                this.createResumable_();
            }
            else {
                if (this.needToFetchStatus_) {
                    this.fetchStatus_();
                }
                else {
                    if (this.needToFetchMetadata_) {
                        // Happens if we miss the metadata on upload completion.
                        this.fetchMetadata_();
                    }
                    else {
                        this.continueUpload_();
                    }
                }
            }
        }
        else {
            this.oneShotUpload_();
        }
    };
    UploadTask.prototype.resolveToken_ = function (callback) {
        var _this = this;
        this.authWrapper_.getAuthToken().then(function (authToken) {
            switch (_this.state_) {
                case __WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["a" /* InternalTaskState */].RUNNING:
                    callback(authToken);
                    break;
                case __WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["a" /* InternalTaskState */].CANCELING:
                    _this.transition_(__WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["a" /* InternalTaskState */].CANCELED);
                    break;
                case __WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["a" /* InternalTaskState */].PAUSING:
                    _this.transition_(__WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["a" /* InternalTaskState */].PAUSED);
                    break;
                default:
            }
        });
    };
    // TODO(andysoto): assert false
    UploadTask.prototype.createResumable_ = function () {
        var _this = this;
        this.resolveToken_(function (authToken) {
            var requestInfo = __WEBPACK_IMPORTED_MODULE_8__implementation_requests__["c" /* createResumableUpload */](_this.authWrapper_, _this.location_, _this.mappings_, _this.blob_, _this.metadata_);
            var createRequest = _this.authWrapper_.makeRequest(requestInfo, authToken);
            _this.request_ = createRequest;
            createRequest.getPromise().then(function (url) {
                _this.request_ = null;
                _this.uploadUrl_ = url;
                _this.needToFetchStatus_ = false;
                _this.completeTransitions_();
            }, _this.errorHandler_);
        });
    };
    UploadTask.prototype.fetchStatus_ = function () {
        var _this = this;
        // TODO(andysoto): assert(this.uploadUrl_ !== null);
        var url = this.uploadUrl_;
        this.resolveToken_(function (authToken) {
            var requestInfo = __WEBPACK_IMPORTED_MODULE_8__implementation_requests__["f" /* getResumableUploadStatus */](_this.authWrapper_, _this.location_, url, _this.blob_);
            var statusRequest = _this.authWrapper_.makeRequest(requestInfo, authToken);
            _this.request_ = statusRequest;
            statusRequest.getPromise().then(function (status) {
                status = status;
                _this.request_ = null;
                _this.updateProgress_(status.current);
                _this.needToFetchStatus_ = false;
                if (status.finalized) {
                    _this.needToFetchMetadata_ = true;
                }
                _this.completeTransitions_();
            }, _this.errorHandler_);
        });
    };
    UploadTask.prototype.continueUpload_ = function () {
        var _this = this;
        var chunkSize = __WEBPACK_IMPORTED_MODULE_8__implementation_requests__["h" /* resumableUploadChunkSize */] * this.chunkMultiplier_;
        var status = new __WEBPACK_IMPORTED_MODULE_8__implementation_requests__["a" /* ResumableUploadStatus */](this.transferred_, this.blob_.size());
        // TODO(andysoto): assert(this.uploadUrl_ !== null);
        var url = this.uploadUrl_;
        this.resolveToken_(function (authToken) {
            var requestInfo;
            try {
                requestInfo = __WEBPACK_IMPORTED_MODULE_8__implementation_requests__["b" /* continueResumableUpload */](_this.location_, _this.authWrapper_, url, _this.blob_, chunkSize, _this.mappings_, status, _this.makeProgressCallback_());
            }
            catch (e) {
                _this.error_ = e;
                _this.transition_(__WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["a" /* InternalTaskState */].ERROR);
                return;
            }
            var uploadRequest = _this.authWrapper_.makeRequest(requestInfo, authToken);
            _this.request_ = uploadRequest;
            uploadRequest
                .getPromise()
                .then(function (newStatus) {
                _this.increaseMultiplier_();
                _this.request_ = null;
                _this.updateProgress_(newStatus.current);
                if (newStatus.finalized) {
                    _this.metadata_ = newStatus.metadata;
                    _this.transition_(__WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["a" /* InternalTaskState */].SUCCESS);
                }
                else {
                    _this.completeTransitions_();
                }
            }, _this.errorHandler_);
        });
    };
    UploadTask.prototype.increaseMultiplier_ = function () {
        var currentSize = __WEBPACK_IMPORTED_MODULE_8__implementation_requests__["h" /* resumableUploadChunkSize */] * this.chunkMultiplier_;
        // Max chunk size is 32M.
        if (currentSize < 32 * 1024 * 1024) {
            this.chunkMultiplier_ *= 2;
        }
    };
    UploadTask.prototype.fetchMetadata_ = function () {
        var _this = this;
        this.resolveToken_(function (authToken) {
            var requestInfo = __WEBPACK_IMPORTED_MODULE_8__implementation_requests__["e" /* getMetadata */](_this.authWrapper_, _this.location_, _this.mappings_);
            var metadataRequest = _this.authWrapper_.makeRequest(requestInfo, authToken);
            _this.request_ = metadataRequest;
            metadataRequest.getPromise().then(function (metadata) {
                _this.request_ = null;
                _this.metadata_ = metadata;
                _this.transition_(__WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["a" /* InternalTaskState */].SUCCESS);
            }, _this.metadataErrorHandler_);
        });
    };
    UploadTask.prototype.oneShotUpload_ = function () {
        var _this = this;
        this.resolveToken_(function (authToken) {
            var requestInfo = __WEBPACK_IMPORTED_MODULE_8__implementation_requests__["g" /* multipartUpload */](_this.authWrapper_, _this.location_, _this.mappings_, _this.blob_, _this.metadata_);
            var multipartRequest = _this.authWrapper_.makeRequest(requestInfo, authToken);
            _this.request_ = multipartRequest;
            multipartRequest.getPromise().then(function (metadata) {
                _this.request_ = null;
                _this.metadata_ = metadata;
                _this.updateProgress_(_this.blob_.size());
                _this.transition_(__WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["a" /* InternalTaskState */].SUCCESS);
            }, _this.errorHandler_);
        });
    };
    UploadTask.prototype.updateProgress_ = function (transferred) {
        var old = this.transferred_;
        this.transferred_ = transferred;
        // A progress update can make the "transferred" value smaller (e.g. a
        // partial upload not completed by server, after which the "transferred"
        // value may reset to the value at the beginning of the request).
        if (this.transferred_ !== old) {
            this.notifyObservers_();
        }
    };
    UploadTask.prototype.transition_ = function (state) {
        if (this.state_ === state) {
            return;
        }
        switch (state) {
            case __WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["a" /* InternalTaskState */].CANCELING:
                // TODO(andysoto):
                // assert(this.state_ === InternalTaskState.RUNNING ||
                //        this.state_ === InternalTaskState.PAUSING);
                this.state_ = state;
                if (this.request_ !== null) {
                    this.request_.cancel();
                }
                break;
            case __WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["a" /* InternalTaskState */].PAUSING:
                // TODO(andysoto):
                // assert(this.state_ === InternalTaskState.RUNNING);
                this.state_ = state;
                if (this.request_ !== null) {
                    this.request_.cancel();
                }
                break;
            case __WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["a" /* InternalTaskState */].RUNNING:
                // TODO(andysoto):
                // assert(this.state_ === InternalTaskState.PAUSED ||
                //        this.state_ === InternalTaskState.PAUSING);
                var wasPaused = this.state_ === __WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["a" /* InternalTaskState */].PAUSED;
                this.state_ = state;
                if (wasPaused) {
                    this.notifyObservers_();
                    this.start_();
                }
                break;
            case __WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["a" /* InternalTaskState */].PAUSED:
                // TODO(andysoto):
                // assert(this.state_ === InternalTaskState.PAUSING);
                this.state_ = state;
                this.notifyObservers_();
                break;
            case __WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["a" /* InternalTaskState */].CANCELED:
                // TODO(andysoto):
                // assert(this.state_ === InternalTaskState.PAUSED ||
                //        this.state_ === InternalTaskState.CANCELING);
                this.error_ = __WEBPACK_IMPORTED_MODULE_6__implementation_error__["c" /* canceled */]();
                this.state_ = state;
                this.notifyObservers_();
                break;
            case __WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["a" /* InternalTaskState */].ERROR:
                // TODO(andysoto):
                // assert(this.state_ === InternalTaskState.RUNNING ||
                //        this.state_ === InternalTaskState.PAUSING ||
                //        this.state_ === InternalTaskState.CANCELING);
                this.state_ = state;
                this.notifyObservers_();
                break;
            case __WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["a" /* InternalTaskState */].SUCCESS:
                // TODO(andysoto):
                // assert(this.state_ === InternalTaskState.RUNNING ||
                //        this.state_ === InternalTaskState.PAUSING ||
                //        this.state_ === InternalTaskState.CANCELING);
                this.state_ = state;
                this.notifyObservers_();
                break;
        }
    };
    UploadTask.prototype.completeTransitions_ = function () {
        switch (this.state_) {
            case __WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["a" /* InternalTaskState */].PAUSING:
                this.transition_(__WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["a" /* InternalTaskState */].PAUSED);
                break;
            case __WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["a" /* InternalTaskState */].CANCELING:
                this.transition_(__WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["a" /* InternalTaskState */].CANCELED);
                break;
            case __WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["a" /* InternalTaskState */].RUNNING:
                this.start_();
                break;
            default:
                // TODO(andysoto): assert(false);
                break;
        }
    };
    Object.defineProperty(UploadTask.prototype, "snapshot", {
        get: function () {
            var externalState = __WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["d" /* taskStateFromInternalTaskState */](this.state_);
            return new __WEBPACK_IMPORTED_MODULE_2__tasksnapshot__["a" /* UploadTaskSnapshot */](this.transferred_, this.blob_.size(), externalState, this.metadata_, this, this.ref_);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Adds a callback for an event.
     * @param type The type of event to listen for.
     */
    UploadTask.prototype.on = function (type, nextOrObserver, error, completed) {
        if (nextOrObserver === void 0) { nextOrObserver = undefined; }
        if (error === void 0) { error = undefined; }
        if (completed === void 0) { completed = undefined; }
        function typeValidator(_p) {
            if (type !== __WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["b" /* TaskEvent */].STATE_CHANGED) {
                throw "Expected one of the event types: [" + __WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["b" /* TaskEvent */].STATE_CHANGED + "].";
            }
        }
        var nextOrObserverMessage = 'Expected a function or an Object with one of ' +
            '`next`, `error`, `complete` properties.';
        var nextValidator = __WEBPACK_IMPORTED_MODULE_3__implementation_args__["d" /* nullFunctionSpec */](true).validator;
        var observerValidator = __WEBPACK_IMPORTED_MODULE_3__implementation_args__["a" /* looseObjectSpec */](null, true).validator;
        function nextOrObserverValidator(p) {
            try {
                nextValidator(p);
                return;
            }
            catch (e) { }
            try {
                observerValidator(p);
                var anyDefined = __WEBPACK_IMPORTED_MODULE_9__implementation_type__["c" /* isJustDef */](p['next']) ||
                    __WEBPACK_IMPORTED_MODULE_9__implementation_type__["c" /* isJustDef */](p['error']) ||
                    __WEBPACK_IMPORTED_MODULE_9__implementation_type__["c" /* isJustDef */](p['complete']);
                if (!anyDefined) {
                    throw '';
                }
                return;
            }
            catch (e) {
                throw nextOrObserverMessage;
            }
        }
        var specs = [
            __WEBPACK_IMPORTED_MODULE_3__implementation_args__["e" /* stringSpec */](typeValidator),
            __WEBPACK_IMPORTED_MODULE_3__implementation_args__["a" /* looseObjectSpec */](nextOrObserverValidator, true),
            __WEBPACK_IMPORTED_MODULE_3__implementation_args__["d" /* nullFunctionSpec */](true),
            __WEBPACK_IMPORTED_MODULE_3__implementation_args__["d" /* nullFunctionSpec */](true)
        ];
        __WEBPACK_IMPORTED_MODULE_3__implementation_args__["g" /* validate */]('on', specs, arguments);
        var self = this;
        function makeBinder(specs) {
            function binder(nextOrObserver, error, opt_complete) {
                if (specs !== null) {
                    __WEBPACK_IMPORTED_MODULE_3__implementation_args__["g" /* validate */]('on', specs, arguments);
                }
                var observer = new __WEBPACK_IMPORTED_MODULE_1__implementation_observer__["a" /* Observer */](nextOrObserver, error, completed);
                self.addObserver_(observer);
                return function () {
                    self.removeObserver_(observer);
                };
            }
            return binder;
        }
        function binderNextOrObserverValidator(p) {
            if (p === null) {
                throw nextOrObserverMessage;
            }
            nextOrObserverValidator(p);
        }
        var binderSpecs = [
            __WEBPACK_IMPORTED_MODULE_3__implementation_args__["a" /* looseObjectSpec */](binderNextOrObserverValidator),
            __WEBPACK_IMPORTED_MODULE_3__implementation_args__["d" /* nullFunctionSpec */](true),
            __WEBPACK_IMPORTED_MODULE_3__implementation_args__["d" /* nullFunctionSpec */](true)
        ];
        var typeOnly = !(__WEBPACK_IMPORTED_MODULE_9__implementation_type__["c" /* isJustDef */](nextOrObserver) ||
            __WEBPACK_IMPORTED_MODULE_9__implementation_type__["c" /* isJustDef */](error) ||
            __WEBPACK_IMPORTED_MODULE_9__implementation_type__["c" /* isJustDef */](completed));
        if (typeOnly) {
            return makeBinder(binderSpecs);
        }
        else {
            return makeBinder(null)(nextOrObserver, error, completed);
        }
    };
    /**
     * This object behaves like a Promise, and resolves with its snapshot data
     * when the upload completes.
     * @param onFulfilled The fulfillment callback. Promise chaining works as normal.
     * @param onRejected The rejection callback.
     */
    UploadTask.prototype.then = function (onFulfilled, onRejected) {
        // These casts are needed so that TypeScript can infer the types of the
        // resulting Promise.
        return this.promise_.then(onFulfilled, onRejected);
    };
    /**
     * Equivalent to calling `then(null, onRejected)`.
     */
    UploadTask.prototype.catch = function (onRejected) {
        return this.then(null, onRejected);
    };
    /**
     * Adds the given observer.
     */
    UploadTask.prototype.addObserver_ = function (observer) {
        this.observers_.push(observer);
        this.notifyObserver_(observer);
    };
    /**
     * Removes the given observer.
     */
    UploadTask.prototype.removeObserver_ = function (observer) {
        __WEBPACK_IMPORTED_MODULE_4__implementation_array__["c" /* remove */](this.observers_, observer);
    };
    UploadTask.prototype.notifyObservers_ = function () {
        var _this = this;
        this.finishPromise_();
        var observers = __WEBPACK_IMPORTED_MODULE_4__implementation_array__["a" /* clone */](this.observers_);
        observers.forEach(function (observer) {
            _this.notifyObserver_(observer);
        });
    };
    UploadTask.prototype.finishPromise_ = function () {
        if (this.resolve_ !== null) {
            var triggered = true;
            switch (__WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["d" /* taskStateFromInternalTaskState */](this.state_)) {
                case __WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["c" /* TaskState */].SUCCESS:
                    Object(__WEBPACK_IMPORTED_MODULE_5__implementation_async__["a" /* async */])(this.resolve_.bind(null, this.snapshot))();
                    break;
                case __WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["c" /* TaskState */].CANCELED:
                case __WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["c" /* TaskState */].ERROR:
                    var toCall = this.reject_;
                    Object(__WEBPACK_IMPORTED_MODULE_5__implementation_async__["a" /* async */])(toCall.bind(null, this.error_))();
                    break;
                default:
                    triggered = false;
                    break;
            }
            if (triggered) {
                this.resolve_ = null;
                this.reject_ = null;
            }
        }
    };
    UploadTask.prototype.notifyObserver_ = function (observer) {
        var externalState = __WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["d" /* taskStateFromInternalTaskState */](this.state_);
        switch (externalState) {
            case __WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["c" /* TaskState */].RUNNING:
            case __WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["c" /* TaskState */].PAUSED:
                if (observer.next !== null) {
                    Object(__WEBPACK_IMPORTED_MODULE_5__implementation_async__["a" /* async */])(observer.next.bind(observer, this.snapshot))();
                }
                break;
            case __WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["c" /* TaskState */].SUCCESS:
                if (observer.complete !== null) {
                    Object(__WEBPACK_IMPORTED_MODULE_5__implementation_async__["a" /* async */])(observer.complete.bind(observer))();
                }
                break;
            case __WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["c" /* TaskState */].CANCELED:
            case __WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["c" /* TaskState */].ERROR:
                if (observer.error !== null) {
                    Object(__WEBPACK_IMPORTED_MODULE_5__implementation_async__["a" /* async */])(observer.error.bind(observer, this.error_))();
                }
                break;
            default:
                // TODO(andysoto): assert(false);
                if (observer.error !== null) {
                    Object(__WEBPACK_IMPORTED_MODULE_5__implementation_async__["a" /* async */])(observer.error.bind(observer, this.error_))();
                }
        }
    };
    /**
     * Resumes a paused task. Has no effect on a currently running or failed task.
     * @return True if the operation took effect, false if ignored.
     */
    UploadTask.prototype.resume = function () {
        __WEBPACK_IMPORTED_MODULE_3__implementation_args__["g" /* validate */]('resume', [], arguments);
        var valid = this.state_ === __WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["a" /* InternalTaskState */].PAUSED ||
            this.state_ === __WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["a" /* InternalTaskState */].PAUSING;
        if (valid) {
            this.transition_(__WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["a" /* InternalTaskState */].RUNNING);
        }
        return valid;
    };
    /**
     * Pauses a currently running task. Has no effect on a paused or failed task.
     * @return True if the operation took effect, false if ignored.
     */
    UploadTask.prototype.pause = function () {
        __WEBPACK_IMPORTED_MODULE_3__implementation_args__["g" /* validate */]('pause', [], arguments);
        var valid = this.state_ === __WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["a" /* InternalTaskState */].RUNNING;
        if (valid) {
            this.transition_(__WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["a" /* InternalTaskState */].PAUSING);
        }
        return valid;
    };
    /**
     * Cancels a currently running or paused task. Has no effect on a complete or
     * failed task.
     * @return True if the operation took effect, false if ignored.
     */
    UploadTask.prototype.cancel = function () {
        __WEBPACK_IMPORTED_MODULE_3__implementation_args__["g" /* validate */]('cancel', [], arguments);
        var valid = this.state_ === __WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["a" /* InternalTaskState */].RUNNING ||
            this.state_ === __WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["a" /* InternalTaskState */].PAUSING;
        if (valid) {
            this.transition_(__WEBPACK_IMPORTED_MODULE_0__implementation_taskenums__["a" /* InternalTaskState */].CANCELING);
        }
        return valid;
    };
    return UploadTask;
}());


//# sourceMappingURL=task.js.map


/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Observer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__type__ = __webpack_require__(454);
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @struct
 */
var Observer = /** @class */ (function () {
    function Observer(nextOrObserver, opt_error, opt_complete) {
        var asFunctions = __WEBPACK_IMPORTED_MODULE_0__type__["b" /* isFunction */](nextOrObserver) ||
            __WEBPACK_IMPORTED_MODULE_0__type__["a" /* isDef */](opt_error) ||
            __WEBPACK_IMPORTED_MODULE_0__type__["a" /* isDef */](opt_complete);
        if (asFunctions) {
            this.next = nextOrObserver;
            this.error = opt_error || null;
            this.complete = opt_complete || null;
        }
        else {
            var observer = nextOrObserver;
            this.next = observer.next || null;
            this.error = observer.error || null;
            this.complete = observer.complete || null;
        }
    }
    return Observer;
}());


//# sourceMappingURL=observer.js.map


/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadTaskSnapshot; });
var UploadTaskSnapshot = /** @class */ (function () {
    function UploadTaskSnapshot(bytesTransferred, totalBytes, state, metadata, task, ref) {
        this.bytesTransferred = bytesTransferred;
        this.totalBytes = totalBytes;
        this.state = state;
        this.metadata = metadata;
        this.task = task;
        this.ref = ref;
    }
    Object.defineProperty(UploadTaskSnapshot.prototype, "downloadURL", {
        get: function () {
            if (this.metadata !== null) {
                var urls = this.metadata['downloadURLs'];
                if (urls != null && urls[0] != null) {
                    return urls[0];
                }
                else {
                    return null;
                }
            }
            else {
                return null;
            }
        },
        enumerable: true,
        configurable: true
    });
    return UploadTaskSnapshot;
}());


//# sourceMappingURL=tasksnapshot.js.map


/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = async;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__promise_external__ = __webpack_require__(457);
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @fileoverview Method for invoking a callback asynchronously.
 */

/**
 * Returns a function that invokes f with its arguments asynchronously as a
 * microtask, i.e. as soon as possible after the current script returns back
 * into browser code.
 */
function async(f) {
    return function () {
        var argsToForward = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            argsToForward[_i] = arguments[_i];
        }
        __WEBPACK_IMPORTED_MODULE_0__promise_external__["c" /* resolve */](true).then(function () {
            f.apply(null, argsToForward);
        });
    };
}

//# sourceMappingURL=async.js.map


/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Service; });
/* unused harmony export ServiceInternals */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__implementation_args__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__implementation_authwrapper__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__implementation_location__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__implementation_promise_external__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__implementation_request__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reference__ = __webpack_require__(475);
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */






/**
 * A service that provides firebaseStorage.Reference instances.
 * @param opt_url gs:// url to a custom Storage Bucket
 *
 * @struct
 */
var Service = /** @class */ (function () {
    function Service(app, pool, url) {
        this.bucket_ = null;
        function maker(authWrapper, loc) {
            return new __WEBPACK_IMPORTED_MODULE_5__reference__["a" /* Reference */](authWrapper, loc);
        }
        this.authWrapper_ = new __WEBPACK_IMPORTED_MODULE_1__implementation_authwrapper__["a" /* AuthWrapper */](app, maker, __WEBPACK_IMPORTED_MODULE_4__implementation_request__["a" /* makeRequest */], this, pool);
        this.app_ = app;
        if (url != null) {
            this.bucket_ = __WEBPACK_IMPORTED_MODULE_2__implementation_location__["a" /* Location */].makeFromBucketSpec(url);
        }
        else {
            var authWrapperBucket = this.authWrapper_.bucket();
            if (authWrapperBucket != null) {
                this.bucket_ = new __WEBPACK_IMPORTED_MODULE_2__implementation_location__["a" /* Location */](authWrapperBucket, '');
            }
        }
        this.internals_ = new ServiceInternals(this);
    }
    /**
     * Returns a firebaseStorage.Reference for the given path in the default
     * bucket.
     */
    Service.prototype.ref = function (path) {
        function validator(path) {
            if (/^[A-Za-z]+:\/\//.test(path)) {
                throw 'Expected child path but got a URL, use refFromURL instead.';
            }
        }
        __WEBPACK_IMPORTED_MODULE_0__implementation_args__["g" /* validate */]('ref', [__WEBPACK_IMPORTED_MODULE_0__implementation_args__["e" /* stringSpec */](validator, true)], arguments);
        if (this.bucket_ == null) {
            throw new Error('No Storage Bucket defined in Firebase Options.');
        }
        var ref = new __WEBPACK_IMPORTED_MODULE_5__reference__["a" /* Reference */](this.authWrapper_, this.bucket_);
        if (path != null) {
            return ref.child(path);
        }
        else {
            return ref;
        }
    };
    /**
     * Returns a firebaseStorage.Reference object for the given absolute URL,
     * which must be a gs:// or http[s]:// URL.
     */
    Service.prototype.refFromURL = function (url) {
        function validator(p) {
            if (!/^[A-Za-z]+:\/\//.test(p)) {
                throw 'Expected full URL but got a child path, use ref instead.';
            }
            try {
                __WEBPACK_IMPORTED_MODULE_2__implementation_location__["a" /* Location */].makeFromUrl(p);
            }
            catch (e) {
                throw 'Expected valid full URL but got an invalid one.';
            }
        }
        __WEBPACK_IMPORTED_MODULE_0__implementation_args__["g" /* validate */]('refFromURL', [__WEBPACK_IMPORTED_MODULE_0__implementation_args__["e" /* stringSpec */](validator, false)], arguments);
        return new __WEBPACK_IMPORTED_MODULE_5__reference__["a" /* Reference */](this.authWrapper_, url);
    };
    Object.defineProperty(Service.prototype, "maxUploadRetryTime", {
        get: function () {
            return this.authWrapper_.maxUploadRetryTime();
        },
        enumerable: true,
        configurable: true
    });
    Service.prototype.setMaxUploadRetryTime = function (time) {
        __WEBPACK_IMPORTED_MODULE_0__implementation_args__["g" /* validate */]('setMaxUploadRetryTime', [__WEBPACK_IMPORTED_MODULE_0__implementation_args__["c" /* nonNegativeNumberSpec */]()], arguments);
        this.authWrapper_.setMaxUploadRetryTime(time);
    };
    Object.defineProperty(Service.prototype, "maxOperationRetryTime", {
        get: function () {
            return this.authWrapper_.maxOperationRetryTime();
        },
        enumerable: true,
        configurable: true
    });
    Service.prototype.setMaxOperationRetryTime = function (time) {
        __WEBPACK_IMPORTED_MODULE_0__implementation_args__["g" /* validate */]('setMaxOperationRetryTime', [__WEBPACK_IMPORTED_MODULE_0__implementation_args__["c" /* nonNegativeNumberSpec */]()], arguments);
        this.authWrapper_.setMaxOperationRetryTime(time);
    };
    Object.defineProperty(Service.prototype, "app", {
        get: function () {
            return this.app_;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Service.prototype, "INTERNAL", {
        get: function () {
            return this.internals_;
        },
        enumerable: true,
        configurable: true
    });
    return Service;
}());

/**
 * @struct
 */
var ServiceInternals = /** @class */ (function () {
    function ServiceInternals(service) {
        this.service_ = service;
    }
    /**
     * Called when the associated app is deleted.
     * @see {!fbs.AuthWrapper.prototype.deleteApp}
     */
    ServiceInternals.prototype.delete = function () {
        this.service_.authWrapper_.deleteApp();
        return __WEBPACK_IMPORTED_MODULE_3__implementation_promise_external__["c" /* resolve */](undefined);
    };
    return ServiceInternals;
}());


//# sourceMappingURL=service.js.map


/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthWrapper; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__error__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__failrequest__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__location__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__promise_external__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__requestmap__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__type__ = __webpack_require__(454);







/**
 * @param app If null, getAuthToken always resolves with null.
 * @param service The storage service associated with this auth wrapper.
 *     Untyped to avoid circular type dependencies.
 * @struct
 */
var AuthWrapper = /** @class */ (function () {
    function AuthWrapper(app, maker, requestMaker, service, pool) {
        this.bucket_ = null;
        this.deleted_ = false;
        this.app_ = app;
        if (this.app_ !== null) {
            var options = this.app_.options;
            if (__WEBPACK_IMPORTED_MODULE_6__type__["a" /* isDef */](options)) {
                this.bucket_ = AuthWrapper.extractBucket_(options);
            }
        }
        this.storageRefMaker_ = maker;
        this.requestMaker_ = requestMaker;
        this.pool_ = pool;
        this.service_ = service;
        this.maxOperationRetryTime_ = __WEBPACK_IMPORTED_MODULE_0__constants__["d" /* defaultMaxOperationRetryTime */];
        this.maxUploadRetryTime_ = __WEBPACK_IMPORTED_MODULE_0__constants__["e" /* defaultMaxUploadRetryTime */];
        this.requestMap_ = new __WEBPACK_IMPORTED_MODULE_5__requestmap__["a" /* RequestMap */]();
    }
    AuthWrapper.extractBucket_ = function (config) {
        var bucketString = config[__WEBPACK_IMPORTED_MODULE_0__constants__["c" /* configOption */]] || null;
        if (bucketString == null) {
            return null;
        }
        var loc = __WEBPACK_IMPORTED_MODULE_3__location__["a" /* Location */].makeFromBucketSpec(bucketString);
        return loc.bucket;
    };
    AuthWrapper.prototype.getAuthToken = function () {
        // TODO(andysoto): remove ifDef checks after firebase-app implements stubs
        // (b/28673818).
        if (this.app_ !== null &&
            __WEBPACK_IMPORTED_MODULE_6__type__["a" /* isDef */](this.app_.INTERNAL) &&
            __WEBPACK_IMPORTED_MODULE_6__type__["a" /* isDef */](this.app_.INTERNAL.getToken)) {
            return this.app_.INTERNAL.getToken().then(function (response) {
                if (response !== null) {
                    return response.accessToken;
                }
                else {
                    return null;
                }
            }, function (_error) {
                return null;
            });
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_4__promise_external__["c" /* resolve */](null);
        }
    };
    AuthWrapper.prototype.bucket = function () {
        if (this.deleted_) {
            throw __WEBPACK_IMPORTED_MODULE_1__error__["b" /* appDeleted */]();
        }
        else {
            return this.bucket_;
        }
    };
    /**
     * The service associated with this auth wrapper. Untyped to avoid circular
     * type dependencies.
     */
    AuthWrapper.prototype.service = function () {
        return this.service_;
    };
    /**
     * Returns a new firebaseStorage.Reference object referencing this AuthWrapper
     * at the given Location.
     * @param loc The Location.
     * @return Actually a firebaseStorage.Reference, typing not allowed
     *     because of circular dependency problems.
     */
    AuthWrapper.prototype.makeStorageReference = function (loc) {
        return this.storageRefMaker_(this, loc);
    };
    AuthWrapper.prototype.makeRequest = function (requestInfo, authToken) {
        if (!this.deleted_) {
            var request = this.requestMaker_(requestInfo, authToken, this.pool_);
            this.requestMap_.addRequest(request);
            return request;
        }
        else {
            return new __WEBPACK_IMPORTED_MODULE_2__failrequest__["a" /* FailRequest */](__WEBPACK_IMPORTED_MODULE_1__error__["b" /* appDeleted */]());
        }
    };
    /**
     * Stop running requests and prevent more from being created.
     */
    AuthWrapper.prototype.deleteApp = function () {
        this.deleted_ = true;
        this.app_ = null;
        this.requestMap_.clear();
    };
    AuthWrapper.prototype.maxUploadRetryTime = function () {
        return this.maxUploadRetryTime_;
    };
    AuthWrapper.prototype.setMaxUploadRetryTime = function (time) {
        this.maxUploadRetryTime_ = time;
    };
    AuthWrapper.prototype.maxOperationRetryTime = function () {
        return this.maxOperationRetryTime_;
    };
    AuthWrapper.prototype.setMaxOperationRetryTime = function (time) {
        this.maxOperationRetryTime_ = time;
    };
    return AuthWrapper;
}());


//# sourceMappingURL=authwrapper.js.map


/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FailRequest; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__promise_external__ = __webpack_require__(457);

/**
 * A request whose promise always fails.
 * @struct
 * @template T
 */
var FailRequest = /** @class */ (function () {
    function FailRequest(error) {
        this.promise_ = __WEBPACK_IMPORTED_MODULE_0__promise_external__["b" /* reject */](error);
    }
    /** @inheritDoc */
    FailRequest.prototype.getPromise = function () {
        return this.promise_;
    };
    /** @inheritDoc */
    FailRequest.prototype.cancel = function (appDelete) {
        if (appDelete === void 0) { appDelete = false; }
    };
    return FailRequest;
}());


//# sourceMappingURL=failrequest.js.map


/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestMap; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__object__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(461);
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


/**
 * @struct
 */
var RequestMap = /** @class */ (function () {
    function RequestMap() {
        this.map_ = {};
        this.id_ = __WEBPACK_IMPORTED_MODULE_1__constants__["h" /* minSafeInteger */];
    }
    /**
     * Registers the given request with this map.
     * The request is unregistered when it completes.
     * @param r The request to register.
     */
    RequestMap.prototype.addRequest = function (r) {
        var id = this.id_;
        this.id_++;
        this.map_[id] = r;
        var self = this;
        function unmap() {
            delete self.map_[id];
        }
        r.getPromise().then(unmap, unmap);
    };
    /**
     * Cancels all registered requests.
     */
    RequestMap.prototype.clear = function () {
        __WEBPACK_IMPORTED_MODULE_0__object__["b" /* forEach */](this.map_, function (key, val) {
            if (val) {
                val.cancel(true);
            }
        });
        this.map_ = {};
    };
    return RequestMap;
}());


//# sourceMappingURL=requestmap.js.map


/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RequestEndStatus */
/* unused harmony export addAuthHeader_ */
/* unused harmony export addVersionHeader_ */
/* harmony export (immutable) */ __webpack_exports__["a"] = makeRequest;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__firebase_app__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__array__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__backoff__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__error__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__object__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__promise_external__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__type__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__url__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__xhrio__ = __webpack_require__(474);
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @fileoverview Defines methods used to actually send HTTP requests from
 * abstract representations.
 */









/**
 * @struct
 * @template T
 */
var NetworkRequest = /** @class */ (function () {
    function NetworkRequest(url, method, headers, body, successCodes, additionalRetryCodes, callback, errorCallback, timeout, progressCallback, pool) {
        this.pendingXhr_ = null;
        this.backoffId_ = null;
        this.resolve_ = null;
        this.reject_ = null;
        this.canceled_ = false;
        this.appDelete_ = false;
        this.url_ = url;
        this.method_ = method;
        this.headers_ = headers;
        this.body_ = body;
        this.successCodes_ = successCodes.slice();
        this.additionalRetryCodes_ = additionalRetryCodes.slice();
        this.callback_ = callback;
        this.errorCallback_ = errorCallback;
        this.progressCallback_ = progressCallback;
        this.timeout_ = timeout;
        this.pool_ = pool;
        var self = this;
        this.promise_ = __WEBPACK_IMPORTED_MODULE_5__promise_external__["a" /* make */](function (resolve, reject) {
            self.resolve_ = resolve;
            self.reject_ = reject;
            self.start_();
        });
    }
    /**
     * Actually starts the retry loop.
     */
    NetworkRequest.prototype.start_ = function () {
        var self = this;
        function doTheRequest(backoffCallback, canceled) {
            if (canceled) {
                backoffCallback(false, new RequestEndStatus(false, null, true));
                return;
            }
            var xhr = self.pool_.createXhrIo();
            self.pendingXhr_ = xhr;
            function progressListener(progressEvent) {
                var loaded = progressEvent.loaded;
                var total = progressEvent.lengthComputable ? progressEvent.total : -1;
                if (self.progressCallback_ !== null) {
                    self.progressCallback_(loaded, total);
                }
            }
            if (self.progressCallback_ !== null) {
                xhr.addUploadProgressListener(progressListener);
            }
            xhr
                .send(self.url_, self.method_, self.body_, self.headers_)
                .then(function (xhr) {
                if (self.progressCallback_ !== null) {
                    xhr.removeUploadProgressListener(progressListener);
                }
                self.pendingXhr_ = null;
                xhr = xhr;
                var hitServer = xhr.getErrorCode() === __WEBPACK_IMPORTED_MODULE_8__xhrio__["a" /* ErrorCode */].NO_ERROR;
                var status = xhr.getStatus();
                if (!hitServer || self.isRetryStatusCode_(status)) {
                    var wasCanceled = xhr.getErrorCode() === __WEBPACK_IMPORTED_MODULE_8__xhrio__["a" /* ErrorCode */].ABORT;
                    backoffCallback(false, new RequestEndStatus(false, null, wasCanceled));
                    return;
                }
                var successCode = __WEBPACK_IMPORTED_MODULE_1__array__["b" /* contains */](self.successCodes_, status);
                backoffCallback(true, new RequestEndStatus(successCode, xhr));
            });
        }
        /**
         * @param requestWentThrough True if the request eventually went
         *     through, false if it hit the retry limit or was canceled.
         */
        function backoffDone(requestWentThrough, status) {
            var resolve = self.resolve_;
            var reject = self.reject_;
            var xhr = status.xhr;
            if (status.wasSuccessCode) {
                try {
                    var result = self.callback_(xhr, xhr.getResponseText());
                    if (__WEBPACK_IMPORTED_MODULE_6__type__["c" /* isJustDef */](result)) {
                        resolve(result);
                    }
                    else {
                        resolve();
                    }
                }
                catch (e) {
                    reject(e);
                }
            }
            else {
                if (xhr !== null) {
                    var err = __WEBPACK_IMPORTED_MODULE_3__error__["s" /* unknown */]();
                    err.setServerResponseProp(xhr.getResponseText());
                    if (self.errorCallback_) {
                        reject(self.errorCallback_(xhr, err));
                    }
                    else {
                        reject(err);
                    }
                }
                else {
                    if (status.canceled) {
                        var err = self.appDelete_
                            ? __WEBPACK_IMPORTED_MODULE_3__error__["b" /* appDeleted */]()
                            : __WEBPACK_IMPORTED_MODULE_3__error__["c" /* canceled */]();
                        reject(err);
                    }
                    else {
                        var err = __WEBPACK_IMPORTED_MODULE_3__error__["o" /* retryLimitExceeded */]();
                        reject(err);
                    }
                }
            }
        }
        if (this.canceled_) {
            backoffDone(false, new RequestEndStatus(false, null, true));
        }
        else {
            this.backoffId_ = __WEBPACK_IMPORTED_MODULE_2__backoff__["a" /* start */](doTheRequest, backoffDone, this.timeout_);
        }
    };
    /** @inheritDoc */
    NetworkRequest.prototype.getPromise = function () {
        return this.promise_;
    };
    /** @inheritDoc */
    NetworkRequest.prototype.cancel = function (appDelete) {
        this.canceled_ = true;
        this.appDelete_ = appDelete || false;
        if (this.backoffId_ !== null) {
            __WEBPACK_IMPORTED_MODULE_2__backoff__["b" /* stop */](this.backoffId_);
        }
        if (this.pendingXhr_ !== null) {
            this.pendingXhr_.abort();
        }
    };
    NetworkRequest.prototype.isRetryStatusCode_ = function (status) {
        // The codes for which to retry came from this page:
        // https://cloud.google.com/storage/docs/exponential-backoff
        var isFiveHundredCode = status >= 500 && status < 600;
        var extraRetryCodes = [
            // Request Timeout: web server didn't receive full request in time.
            408,
            // Too Many Requests: you're getting rate-limited, basically.
            429
        ];
        var isExtraRetryCode = __WEBPACK_IMPORTED_MODULE_1__array__["b" /* contains */](extraRetryCodes, status);
        var isRequestSpecificRetryCode = __WEBPACK_IMPORTED_MODULE_1__array__["b" /* contains */](this.additionalRetryCodes_, status);
        return isFiveHundredCode || isExtraRetryCode || isRequestSpecificRetryCode;
    };
    return NetworkRequest;
}());
/**
 * A collection of information about the result of a network request.
 * @param opt_canceled Defaults to false.
 * @struct
 */
var RequestEndStatus = /** @class */ (function () {
    function RequestEndStatus(wasSuccessCode, xhr, opt_canceled) {
        this.wasSuccessCode = wasSuccessCode;
        this.xhr = xhr;
        this.canceled = !!opt_canceled;
    }
    return RequestEndStatus;
}());

function addAuthHeader_(headers, authToken) {
    if (authToken !== null && authToken.length > 0) {
        headers['Authorization'] = 'Firebase ' + authToken;
    }
}
function addVersionHeader_(headers) {
    var number = typeof __WEBPACK_IMPORTED_MODULE_0__firebase_app__["default"] !== 'undefined' ? __WEBPACK_IMPORTED_MODULE_0__firebase_app__["default"].SDK_VERSION : 'AppManager';
    headers['X-Firebase-Storage-Version'] = 'webjs/' + number;
}
/**
 * @template T
 */
function makeRequest(requestInfo, authToken, pool) {
    var queryPart = __WEBPACK_IMPORTED_MODULE_7__url__["c" /* makeQueryString */](requestInfo.urlParams);
    var url = requestInfo.url + queryPart;
    var headers = __WEBPACK_IMPORTED_MODULE_4__object__["a" /* clone */](requestInfo.headers);
    addAuthHeader_(headers, authToken);
    addVersionHeader_(headers);
    return new NetworkRequest(url, requestInfo.method, headers, requestInfo.body, requestInfo.successCodes, requestInfo.additionalRetryCodes, requestInfo.handler, requestInfo.errorHandler, requestInfo.timeout, requestInfo.progressCallback, pool);
}

//# sourceMappingURL=request.js.map


/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = start;
/* harmony export (immutable) */ __webpack_exports__["b"] = stop;
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @param f May be invoked
 *     before the function returns.
 * @param callback Get all the arguments passed to the function
 *     passed to f, including the initial boolean.
 */
function start(f, callback, timeout) {
    // TODO(andysoto): make this code cleaner (probably refactor into an actual
    // type instead of a bunch of functions with state shared in the closure)
    var waitSeconds = 1;
    // Would type this as "number" but that doesn't work for Node so ¯\_(ツ)_/¯
    var timeoutId = null;
    var hitTimeout = false;
    var cancelState = 0;
    function canceled() {
        return cancelState === 2;
    }
    var triggeredCallback = false;
    function triggerCallback() {
        if (!triggeredCallback) {
            triggeredCallback = true;
            callback.apply(null, arguments);
        }
    }
    function callWithDelay(millis) {
        timeoutId = setTimeout(function () {
            timeoutId = null;
            f(handler, canceled());
        }, millis);
    }
    function handler(success) {
        var var_args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            var_args[_i - 1] = arguments[_i];
        }
        if (triggeredCallback) {
            return;
        }
        if (success) {
            triggerCallback.apply(null, arguments);
            return;
        }
        var mustStop = canceled() || hitTimeout;
        if (mustStop) {
            triggerCallback.apply(null, arguments);
            return;
        }
        if (waitSeconds < 64) {
            /* TODO(andysoto): don't back off so quickly if we know we're offline. */
            waitSeconds *= 2;
        }
        var waitMillis;
        if (cancelState === 1) {
            cancelState = 2;
            waitMillis = 0;
        }
        else {
            waitMillis = (waitSeconds + Math.random()) * 1000;
        }
        callWithDelay(waitMillis);
    }
    var stopped = false;
    function stop(wasTimeout) {
        if (stopped) {
            return;
        }
        stopped = true;
        if (triggeredCallback) {
            return;
        }
        if (timeoutId !== null) {
            if (!wasTimeout) {
                cancelState = 2;
            }
            clearTimeout(timeoutId);
            callWithDelay(0);
        }
        else {
            if (!wasTimeout) {
                cancelState = 1;
            }
        }
    }
    callWithDelay(0);
    setTimeout(function () {
        hitTimeout = true;
        stop(true);
    }, timeout);
    return stop;
}
/**
 * Stops the retry loop from repeating.
 * If the function is currently "in between" retries, it is invoked immediately
 * with the second parameter as "true". Otherwise, it will be invoked once more
 * after the current invocation finishes iff the current invocation would have
 * triggered another retry.
 */
function stop(id) {
    id(false);
}

//# sourceMappingURL=backoff.js.map


/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuListAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_toast_service_toast_service__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_service_service__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the MenuListAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MenuListAddPage = /** @class */ (function () {
    function MenuListAddPage(navCtrl, navParams, fooding, toast, alertCtrl, camera, typeing) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fooding = fooding;
        this.toast = toast;
        this.camera = camera;
        this.typeing = typeing;
        this.food = {
            FOOD_ID: undefined,
            FOOD_NAME: undefined,
            FOOD_PRICE: undefined,
            FOOD_IMG: undefined,
            FOOD_TYPE_NAME: undefined
        };
        this.type = {
            FOOD_TYPE_ID: undefined,
            FOOD_TYPE_NAME: undefined
        };
        this.alertCtrl = alertCtrl;
        this.TypeList$ = this.typeing
            .getTypeList()
            .snapshotChanges()
            .map(function (Change) {
            return Change.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
    }
    MenuListAddPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MenuListAddPage');
    };
    /*
      addFoodItem(food:Food){
    
    
        food.FOOD_ID = 'F_' + Math.floor(Date.now() / 100);
        food.FOOD_IMG = this.food.FOOD_ID;
    
        food.FOOD_TYPE_NAME = this.type.FOOD_TYPE_NAME;
        this.fooding.addFoodItem(food).then(ref =>{
    
          this.toast.show(`${food.FOOD_NAME}  เพิ่มสำเร็จ`)
    
          this.navCtrl.setRoot('HomeAdminPage', {key:ref.key});
        });
    
        this.upload();
    
    
      }
    */
    MenuListAddPage.prototype.addFoodItem = function (food) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: this.food.FOOD_NAME,
            message: 'คุณต้องการเพิ่ม  ' + this.food.FOOD_NAME + ' ใช่หรือไม่',
            buttons: [
                {
                    text: 'ไม่ใช่',
                    handler: function () {
                        console.log('Disagree clicked');
                        _this.navCtrl.setRoot('HomeAdminPage');
                    }
                },
                {
                    text: 'ใช่',
                    handler: function () {
                        console.log('Agree clicked');
                        food.FOOD_ID = 'F_' + Math.floor(Date.now() / 100);
                        food.FOOD_IMG = _this.food.FOOD_ID;
                        food.FOOD_TYPE_NAME = _this.type.FOOD_TYPE_NAME;
                        _this.fooding.addFoodItem(food).then(function (ref) {
                            _this.toast.show(food.FOOD_NAME + "  \u0E40\u0E1E\u0E34\u0E48\u0E21\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08");
                            _this.navCtrl.setRoot('HomeAdminPage', { key: ref.key });
                        });
                        _this.upload();
                    }
                }
            ]
        });
        confirm.present();
    };
    MenuListAddPage.prototype.selectPhoto = function () {
        var _this = this;
        var cameraOptions = {
            quality: 10,
            destinationType: this.camera.DestinationType.DATA_URL,
            // In this app, dynamically set the picture source, Camera or photo gallery
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
        };
        this.camera.getPicture(cameraOptions).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            _this.captureDataUrl = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            // Handle error
        });
    };
    MenuListAddPage.prototype.upload = function () {
        var _this = this;
        var storageRef = __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.storage().ref();
        var filename = this.food.FOOD_IMG;
        // Create a reference to 'images/todays-date.jpg'
        var imageRef = storageRef.child("images/" + filename + ".jpg");
        imageRef.putString(this.captureDataUrl, __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.storage.StringFormat.DATA_URL).then(function (snapshot) {
            _this.showSuccesfulUploadAlert();
        });
    };
    MenuListAddPage.prototype.showSuccesfulUploadAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'อัพโหลดสำเร็จ',
            subTitle: 'Picture is uploaded to Firebase',
            buttons: ['OK']
        });
        alert.present();
        // clear the previous photo data in the variable
        this.captureDataUrl = "";
    };
    MenuListAddPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-menu-list-add',template:/*ion-inline-start:"G:\ChunWarayut\LungNuad\src\pages\menu-list-add\menu-list-add.html"*/'<!--\n\n  Generated template for the MenuListAddPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar color="boa">\n\n        <ion-title>menu-list-add</ion-title>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n          </button>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n\n\n    <ion-grid>\n\n        <ion-row>\n\n    \n\n            <ion-col>\n\n    \n\n            </ion-col>\n\n    \n\n          <ion-col col-auto>\n\n\n\n\n\n<!--\n\n  <ion-item>\n\n    <ion-label>รหัสอาหาร</ion-label> \n\n    <ion-input [(ngModel)]="food.FOOD_ID"></ion-input>\n\n  </ion-item>\n\n-->\n\n  <ion-item>\n\n    <ion-label>ชื่ออาหาร</ion-label> \n\n    <ion-input [(ngModel)]="food.FOOD_NAME"></ion-input>\n\n  </ion-item>\n\n  \n\n  <ion-item>\n\n    <ion-label>ประเภทอาหาร</ion-label> \n\n    <ion-select [(ngModel)]="type.FOOD_TYPE_NAME">\n\n      <ion-option *ngFor="let type of TypeList$ | async" [value]="type.FOOD_TYPE_NAME">{{type.FOOD_TYPE_NAME}}</ion-option>\n\n    </ion-select>\n\n  </ion-item>\n\n  \n\n  <ion-item>\n\n    <ion-label>ราคา</ion-label>\n\n    <ion-input [(ngModel)]="food.FOOD_PRICE"></ion-input>\n\n  </ion-item>\n\n  <!--\n\n  <ion-item>\n\n    <ion-label>ชื่อรูปภาพ</ion-label>\n\n    <ion-input [(ngModel)]="item.FOOD_IMG"></ion-input>\n\n  </ion-item>\n\n  -->\n\n  <div style="display:flex; flex-direction:column;justify-content:center">\n\n      <button ion-button color="secondary" type="button" full round large (click)="selectPhoto()">\n\n        <ion-icon name="md-image"></ion-icon>\n\n      </button>\n\n      <img [src]="captureDataUrl"  *ngIf="captureDataUrl"/>\n\n      <button ion-button block full round large (click)=addFoodItem(food) *ngIf="captureDataUrl">Add</button>\n\n    </div>\n\n\n\n     \n\n  </ion-col>\n\n     \n\n  <ion-col>\n\n    \n\n  </ion-col>\n\n\n\n</ion-row>\n\n</ion-grid>\n\n\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"G:\ChunWarayut\LungNuad\src\pages\menu-list-add\menu-list-add.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__providers_service_service__["a" /* ServiceProvider */], __WEBPACK_IMPORTED_MODULE_0__providers_toast_service_toast_service__["a" /* ToastServiceProvider */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1__providers_service_service__["a" /* ServiceProvider */]])
    ], MenuListAddPage);
    return MenuListAddPage;
}());

//# sourceMappingURL=menu-list-add.js.map

/***/ })

});
//# sourceMappingURL=1.js.map