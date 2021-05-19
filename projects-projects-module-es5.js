var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["projects-projects-module"], {
        /***/ "./node_modules/@angular/common/fesm2015/http.js": 
        /*!*******************************************************!*\
          !*** ./node_modules/@angular/common/fesm2015/http.js ***!
          \*******************************************************/
        /*! exports provided: ɵangular_packages_common_http_http_a, ɵangular_packages_common_http_http_b, ɵangular_packages_common_http_http_c, ɵangular_packages_common_http_http_d, ɵangular_packages_common_http_http_g, ɵangular_packages_common_http_http_h, ɵangular_packages_common_http_http_e, ɵangular_packages_common_http_http_f, HttpBackend, HttpHandler, HttpClient, HttpHeaders, HTTP_INTERCEPTORS, JsonpClientBackend, JsonpInterceptor, HttpClientJsonpModule, HttpClientModule, HttpClientXsrfModule, ɵHttpInterceptingHandler, HttpParams, HttpUrlEncodingCodec, HttpRequest, HttpErrorResponse, HttpEventType, HttpHeaderResponse, HttpResponse, HttpResponseBase, HttpXhrBackend, XhrFactory, HttpXsrfTokenExtractor */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_a", function () { return NoopInterceptor; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_b", function () { return JsonpCallbackContext; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_c", function () { return jsonpCallbackContext; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_d", function () { return BrowserXhr; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_g", function () { return HttpXsrfCookieExtractor; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_h", function () { return HttpXsrfInterceptor; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_e", function () { return XSRF_COOKIE_NAME; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_f", function () { return XSRF_HEADER_NAME; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpBackend", function () { return HttpBackend; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpHandler", function () { return HttpHandler; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpClient", function () { return HttpClient; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpHeaders", function () { return HttpHeaders; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTTP_INTERCEPTORS", function () { return HTTP_INTERCEPTORS; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonpClientBackend", function () { return JsonpClientBackend; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonpInterceptor", function () { return JsonpInterceptor; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpClientJsonpModule", function () { return HttpClientJsonpModule; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpClientModule", function () { return HttpClientModule; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpClientXsrfModule", function () { return HttpClientXsrfModule; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵHttpInterceptingHandler", function () { return HttpInterceptingHandler; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpParams", function () { return HttpParams; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpUrlEncodingCodec", function () { return HttpUrlEncodingCodec; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpRequest", function () { return HttpRequest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpErrorResponse", function () { return HttpErrorResponse; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpEventType", function () { return HttpEventType; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpHeaderResponse", function () { return HttpHeaderResponse; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpResponse", function () { return HttpResponse; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpResponseBase", function () { return HttpResponseBase; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpXhrBackend", function () { return HttpXhrBackend; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XhrFactory", function () { return XhrFactory; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpXsrfTokenExtractor", function () { return HttpXsrfTokenExtractor; });
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /**
             * @license Angular v8.2.10
             * (c) 2010-2019 Google LLC. https://angular.io/
             * License: MIT
             */
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * @license
             * Copyright Google Inc. All Rights Reserved.
             *
             * Use of this source code is governed by an MIT-style license that can be
             * found in the LICENSE file at https://angular.io/license
             */
            /**
             * Transforms an `HttpRequest` into a stream of `HttpEvent`s, one of which will likely be a
             * `HttpResponse`.
             *
             * `HttpHandler` is injectable. When injected, the handler instance dispatches requests to the
             * first interceptor in the chain, which dispatches to the second, etc, eventually reaching the
             * `HttpBackend`.
             *
             * In an `HttpInterceptor`, the `HttpHandler` parameter is the next interceptor in the chain.
             *
             * \@publicApi
             * @abstract
             */
            var HttpHandler = /** @class */ (function () {
                function HttpHandler() {
                }
                return HttpHandler;
            }());
            if (false) { }
            /**
             * A final `HttpHandler` which will dispatch the request via browser HTTP APIs to a backend.
             *
             * Interceptors sit between the `HttpClient` interface and the `HttpBackend`.
             *
             * When injected, `HttpBackend` dispatches requests directly to the backend, without going
             * through the interceptor chain.
             *
             * \@publicApi
             * @abstract
             */
            var HttpBackend = /** @class */ (function () {
                function HttpBackend() {
                }
                return HttpBackend;
            }());
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * @license
             * Copyright Google Inc. All Rights Reserved.
             *
             * Use of this source code is governed by an MIT-style license that can be
             * found in the LICENSE file at https://angular.io/license
             */
            /**
             * @record
             */
            function Update() { }
            if (false) { }
            /**
             * Represents the header configuration options for an HTTP request.
             *
             * Instances should be assumed immutable with lazy parsing.
             *
             * \@publicApi
             */
            var HttpHeaders = /** @class */ (function () {
                /**
                 * Constructs a new HTTP header object with the given values.
                 * @param {?=} headers
                 */
                function HttpHeaders(headers) {
                    var _this = this;
                    /**
                     * Internal map of lowercased header names to the normalized
                     * form of the name (the form seen first).
                     */
                    this.normalizedNames = new Map();
                    /**
                     * Queued updates to be materialized the next initialization.
                     */
                    this.lazyUpdate = null;
                    if (!headers) {
                        this.headers = new Map();
                    }
                    else if (typeof headers === 'string') {
                        this.lazyInit = ( /**
                         * @return {?}
                         */function () {
                            _this.headers = new Map();
                            headers.split('\n').forEach(( /**
                             * @param {?} line
                             * @return {?}
                             */function (/**
                             * @param {?} line
                             * @return {?}
                             */ line) {
                                /** @type {?} */
                                var index = line.indexOf(':');
                                if (index > 0) {
                                    /** @type {?} */
                                    var name = line.slice(0, index);
                                    /** @type {?} */
                                    var key = name.toLowerCase();
                                    /** @type {?} */
                                    var value = line.slice(index + 1).trim();
                                    _this.maybeSetNormalizedName(name, key);
                                    if (_this.headers.has(key)) {
                                        ( /** @type {?} */(_this.headers.get(key))).push(value);
                                    }
                                    else {
                                        _this.headers.set(key, [value]);
                                    }
                                }
                            }));
                        });
                    }
                    else {
                        this.lazyInit = ( /**
                         * @return {?}
                         */function () {
                            _this.headers = new Map();
                            Object.keys(headers).forEach(( /**
                             * @param {?} name
                             * @return {?}
                             */function (/**
                             * @param {?} name
                             * @return {?}
                             */ name) {
                                /** @type {?} */
                                var values = headers[name];
                                /** @type {?} */
                                var key = name.toLowerCase();
                                if (typeof values === 'string') {
                                    values = [values];
                                }
                                if (values.length > 0) {
                                    _this.headers.set(key, values);
                                    _this.maybeSetNormalizedName(name, key);
                                }
                            }));
                        });
                    }
                }
                /**
                 * Checks for existence of a header by a given name.
                 *
                 * @param {?} name The header name to check for existence.
                 *
                 * @return {?} Whether the header exits.
                 */
                HttpHeaders.prototype.has = function (name) {
                    this.init();
                    return this.headers.has(name.toLowerCase());
                };
                /**
                 * Retrieves the first header value that matches a given name.
                 *
                 * @param {?} name The header name to retrieve.
                 *
                 * @return {?} A string if the header exists, null otherwise
                 */
                HttpHeaders.prototype.get = function (name) {
                    this.init();
                    /** @type {?} */
                    var values = this.headers.get(name.toLowerCase());
                    return values && values.length > 0 ? values[0] : null;
                };
                /**
                 * Retrieves the names of the headers.
                 *
                 * @return {?} A list of header names.
                 */
                HttpHeaders.prototype.keys = function () {
                    this.init();
                    return Array.from(this.normalizedNames.values());
                };
                /**
                 * Retrieves a list of header values for a given header name.
                 *
                 * @param {?} name The header name from which to retrieve the values.
                 *
                 * @return {?} A string of values if the header exists, null otherwise.
                 */
                HttpHeaders.prototype.getAll = function (name) {
                    this.init();
                    return this.headers.get(name.toLowerCase()) || null;
                };
                /**
                 * Appends a new header value to the existing set of
                 * header values.
                 *
                 * @param {?} name The header name for which to append the values.
                 *
                 * @param {?} value
                 * @return {?} A clone of the HTTP header object with the value appended.
                 */
                HttpHeaders.prototype.append = function (name, value) {
                    return this.clone({ name: name, value: value, op: 'a' });
                };
                /**
                 * Sets a header value for a given name. If the header name already exists,
                 * its value is replaced with the given value.
                 *
                 * @param {?} name The header name.
                 * @param {?} value The value to set or overide for a given name.
                 *
                 * @return {?} A clone of the HTTP header object with the newly set header value.
                 */
                HttpHeaders.prototype.set = function (name, value) {
                    return this.clone({ name: name, value: value, op: 's' });
                };
                /**
                 * Deletes all header values for a given name.
                 *
                 * @param {?} name The header name.
                 * @param {?=} value The header values to delete for a given name.
                 *
                 * @return {?} A clone of the HTTP header object.
                 */
                HttpHeaders.prototype.delete = function (name, value) {
                    return this.clone({ name: name, value: value, op: 'd' });
                };
                /**
                 * @private
                 * @param {?} name
                 * @param {?} lcName
                 * @return {?}
                 */
                HttpHeaders.prototype.maybeSetNormalizedName = function (name, lcName) {
                    if (!this.normalizedNames.has(lcName)) {
                        this.normalizedNames.set(lcName, name);
                    }
                };
                /**
                 * @private
                 * @return {?}
                 */
                HttpHeaders.prototype.init = function () {
                    var _this = this;
                    if (!!this.lazyInit) {
                        if (this.lazyInit instanceof HttpHeaders) {
                            this.copyFrom(this.lazyInit);
                        }
                        else {
                            this.lazyInit();
                        }
                        this.lazyInit = null;
                        if (!!this.lazyUpdate) {
                            this.lazyUpdate.forEach(( /**
                             * @param {?} update
                             * @return {?}
                             */function (/**
                             * @param {?} update
                             * @return {?}
                             */ update) { return _this.applyUpdate(update); }));
                            this.lazyUpdate = null;
                        }
                    }
                };
                /**
                 * @private
                 * @param {?} other
                 * @return {?}
                 */
                HttpHeaders.prototype.copyFrom = function (other) {
                    var _this = this;
                    other.init();
                    Array.from(other.headers.keys()).forEach(( /**
                     * @param {?} key
                     * @return {?}
                     */function (/**
                     * @param {?} key
                     * @return {?}
                     */ key) {
                        _this.headers.set(key, ( /** @type {?} */(other.headers.get(key))));
                        _this.normalizedNames.set(key, ( /** @type {?} */(other.normalizedNames.get(key))));
                    }));
                };
                /**
                 * @private
                 * @param {?} update
                 * @return {?}
                 */
                HttpHeaders.prototype.clone = function (update) {
                    /** @type {?} */
                    var clone = new HttpHeaders();
                    clone.lazyInit =
                        (!!this.lazyInit && this.lazyInit instanceof HttpHeaders) ? this.lazyInit : this;
                    clone.lazyUpdate = (this.lazyUpdate || []).concat([update]);
                    return clone;
                };
                /**
                 * @private
                 * @param {?} update
                 * @return {?}
                 */
                HttpHeaders.prototype.applyUpdate = function (update) {
                    /** @type {?} */
                    var key = update.name.toLowerCase();
                    switch (update.op) {
                        case 'a':
                        case 's':
                            /** @type {?} */
                            var value = ( /** @type {?} */(update.value));
                            if (typeof value === 'string') {
                                value = [value];
                            }
                            if (value.length === 0) {
                                return;
                            }
                            this.maybeSetNormalizedName(update.name, key);
                            /** @type {?} */
                            var base = (update.op === 'a' ? this.headers.get(key) : undefined) || [];
                            base.push.apply(base, value);
                            this.headers.set(key, base);
                            break;
                        case 'd':
                            /** @type {?} */
                            var toDelete_1 = ( /** @type {?} */(update.value));
                            if (!toDelete_1) {
                                this.headers.delete(key);
                                this.normalizedNames.delete(key);
                            }
                            else {
                                /** @type {?} */
                                var existing = this.headers.get(key);
                                if (!existing) {
                                    return;
                                }
                                existing = existing.filter(( /**
                                 * @param {?} value
                                 * @return {?}
                                 */function (/**
                                 * @param {?} value
                                 * @return {?}
                                 */ value) { return toDelete_1.indexOf(value) === -1; }));
                                if (existing.length === 0) {
                                    this.headers.delete(key);
                                    this.normalizedNames.delete(key);
                                }
                                else {
                                    this.headers.set(key, existing);
                                }
                            }
                            break;
                    }
                };
                /**
                 * \@internal
                 * @param {?} fn
                 * @return {?}
                 */
                HttpHeaders.prototype.forEach = function (fn) {
                    var _this = this;
                    this.init();
                    Array.from(this.normalizedNames.keys())
                        .forEach(( /**
                 * @param {?} key
                 * @return {?}
                 */function (/**
                 * @param {?} key
                 * @return {?}
                 */ key) { return fn(( /** @type {?} */(_this.normalizedNames.get(key))), ( /** @type {?} */(_this.headers.get(key)))); }));
                };
                return HttpHeaders;
            }());
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * @license
             * Copyright Google Inc. All Rights Reserved.
             *
             * Use of this source code is governed by an MIT-style license that can be
             * found in the LICENSE file at https://angular.io/license
             */
            /**
             * A codec for encoding and decoding parameters in URLs.
             *
             * Used by `HttpParams`.
             *
             * \@publicApi
             *
             * @record
             */
            function HttpParameterCodec() { }
            if (false) { }
            /**
             * Provides encoding and decoding of URL parameter and query-string values.
             *
             * Serializes and parses URL parameter keys and values to encode and decode them.
             * If you pass URL query parameters without encoding,
             * the query parameters can be misinterpreted at the receiving end.
             *
             *
             * \@publicApi
             */
            var HttpUrlEncodingCodec = /** @class */ (function () {
                function HttpUrlEncodingCodec() {
                }
                /**
                 * Encodes a key name for a URL parameter or query-string.
                 * @param {?} key The key name.
                 * @return {?} The encoded key name.
                 */
                HttpUrlEncodingCodec.prototype.encodeKey = function (key) { return standardEncoding(key); };
                /**
                 * Encodes the value of a URL parameter or query-string.
                 * @param {?} value The value.
                 * @return {?} The encoded value.
                 */
                HttpUrlEncodingCodec.prototype.encodeValue = function (value) { return standardEncoding(value); };
                /**
                 * Decodes an encoded URL parameter or query-string key.
                 * @param {?} key The encoded key name.
                 * @return {?} The decoded key name.
                 */
                HttpUrlEncodingCodec.prototype.decodeKey = function (key) { return decodeURIComponent(key); };
                /**
                 * Decodes an encoded URL parameter or query-string value.
                 * @param {?} value The encoded value.
                 * @return {?} The decoded value.
                 */
                HttpUrlEncodingCodec.prototype.decodeValue = function (value) { return decodeURIComponent(value); };
                return HttpUrlEncodingCodec;
            }());
            /**
             * @param {?} rawParams
             * @param {?} codec
             * @return {?}
             */
            function paramParser(rawParams, codec) {
                /** @type {?} */
                var map = new Map();
                if (rawParams.length > 0) {
                    /** @type {?} */
                    var params = rawParams.split('&');
                    params.forEach(( /**
                     * @param {?} param
                     * @return {?}
                     */function (param) {
                        /** @type {?} */
                        var eqIdx = param.indexOf('=');
                        var _a = eqIdx == -1 ?
                            [codec.decodeKey(param), ''] :
                            [codec.decodeKey(param.slice(0, eqIdx)), codec.decodeValue(param.slice(eqIdx + 1))], key = _a[0], val = _a[1];
                        /** @type {?} */
                        var list = map.get(key) || [];
                        list.push(val);
                        map.set(key, list);
                    }));
                }
                return map;
            }
            /**
             * @param {?} v
             * @return {?}
             */
            function standardEncoding(v) {
                return encodeURIComponent(v)
                    .replace(/%40/gi, '@')
                    .replace(/%3A/gi, ':')
                    .replace(/%24/gi, '$')
                    .replace(/%2C/gi, ',')
                    .replace(/%3B/gi, ';')
                    .replace(/%2B/gi, '+')
                    .replace(/%3D/gi, '=')
                    .replace(/%3F/gi, '?')
                    .replace(/%2F/gi, '/');
            }
            /**
             * @record
             */
            function Update$1() { }
            if (false) { }
            /**
             * Options used to construct an `HttpParams` instance.
             *
             * \@publicApi
             * @record
             */
            function HttpParamsOptions() { }
            if (false) { }
            /**
             * An HTTP request/response body that represents serialized parameters,
             * per the MIME type `application/x-www-form-urlencoded`.
             *
             * This class is immutable; all mutation operations return a new instance.
             *
             * \@publicApi
             */
            var HttpParams = /** @class */ (function () {
                /**
                 * @param {?=} options
                 */
                function HttpParams(options) {
                    var _this = this;
                    if (options === void 0) { options = ( /** @type {?} */({})); }
                    this.updates = null;
                    this.cloneFrom = null;
                    this.encoder = options.encoder || new HttpUrlEncodingCodec();
                    if (!!options.fromString) {
                        if (!!options.fromObject) {
                            throw new Error("Cannot specify both fromString and fromObject.");
                        }
                        this.map = paramParser(options.fromString, this.encoder);
                    }
                    else if (!!options.fromObject) {
                        this.map = new Map();
                        Object.keys(options.fromObject).forEach(( /**
                         * @param {?} key
                         * @return {?}
                         */function (/**
                         * @param {?} key
                         * @return {?}
                         */ key) {
                            /** @type {?} */
                            var value = (( /** @type {?} */(options.fromObject)))[key];
                            ( /** @type {?} */(_this.map)).set(key, Array.isArray(value) ? value : [value]);
                        }));
                    }
                    else {
                        this.map = null;
                    }
                }
                /**
                 * Reports whether the body includes one or more values for a given parameter.
                 * @param {?} param The parameter name.
                 * @return {?} True if the parameter has one or more values,
                 * false if it has no value or is not present.
                 */
                HttpParams.prototype.has = function (param) {
                    this.init();
                    return ( /** @type {?} */(this.map)).has(param);
                };
                /**
                 * Retrieves the first value for a parameter.
                 * @param {?} param The parameter name.
                 * @return {?} The first value of the given parameter,
                 * or `null` if the parameter is not present.
                 */
                HttpParams.prototype.get = function (param) {
                    this.init();
                    /** @type {?} */
                    var res = ( /** @type {?} */(this.map)).get(param);
                    return !!res ? res[0] : null;
                };
                /**
                 * Retrieves all values for a  parameter.
                 * @param {?} param The parameter name.
                 * @return {?} All values in a string array,
                 * or `null` if the parameter not present.
                 */
                HttpParams.prototype.getAll = function (param) {
                    this.init();
                    return ( /** @type {?} */(this.map)).get(param) || null;
                };
                /**
                 * Retrieves all the parameters for this body.
                 * @return {?} The parameter names in a string array.
                 */
                HttpParams.prototype.keys = function () {
                    this.init();
                    return Array.from(( /** @type {?} */(this.map)).keys());
                };
                /**
                 * Appends a new value to existing values for a parameter.
                 * @param {?} param The parameter name.
                 * @param {?} value The new value to add.
                 * @return {?} A new body with the appended value.
                 */
                HttpParams.prototype.append = function (param, value) { return this.clone({ param: param, value: value, op: 'a' }); };
                /**
                 * Replaces the value for a parameter.
                 * @param {?} param The parameter name.
                 * @param {?} value The new value.
                 * @return {?} A new body with the new value.
                 */
                HttpParams.prototype.set = function (param, value) { return this.clone({ param: param, value: value, op: 's' }); };
                /**
                 * Removes a given value or all values from a parameter.
                 * @param {?} param The parameter name.
                 * @param {?=} value The value to remove, if provided.
                 * @return {?} A new body with the given value removed, or with all values
                 * removed if no value is specified.
                 */
                HttpParams.prototype.delete = function (param, value) { return this.clone({ param: param, value: value, op: 'd' }); };
                /**
                 * Serializes the body to an encoded string, where key-value pairs (separated by `=`) are
                 * separated by `&`s.
                 * @return {?}
                 */
                HttpParams.prototype.toString = function () {
                    var _this = this;
                    this.init();
                    return this.keys()
                        .map(( /**
                 * @param {?} key
                 * @return {?}
                 */function (/**
                 * @param {?} key
                 * @return {?}
                 */ key) {
                        /** @type {?} */
                        var eKey = _this.encoder.encodeKey(key);
                        return ( /** @type {?} */(( /** @type {?} */(_this.map)).get(key))).map(( /**
                         * @param {?} value
                         * @return {?}
                         */function (/**
                         * @param {?} value
                         * @return {?}
                         */ value) { return eKey + '=' + _this.encoder.encodeValue(value); }))
                            .join('&');
                    }))
                        .join('&');
                };
                /**
                 * @private
                 * @param {?} update
                 * @return {?}
                 */
                HttpParams.prototype.clone = function (update) {
                    /** @type {?} */
                    var clone = new HttpParams(( /** @type {?} */({ encoder: this.encoder })));
                    clone.cloneFrom = this.cloneFrom || this;
                    clone.updates = (this.updates || []).concat([update]);
                    return clone;
                };
                /**
                 * @private
                 * @return {?}
                 */
                HttpParams.prototype.init = function () {
                    var _this = this;
                    if (this.map === null) {
                        this.map = new Map();
                    }
                    if (this.cloneFrom !== null) {
                        this.cloneFrom.init();
                        this.cloneFrom.keys().forEach(( /**
                         * @param {?} key
                         * @return {?}
                         */function (/**
                         * @param {?} key
                         * @return {?}
                         */ key) { return ( /** @type {?} */(_this.map)).set(key, ( /** @type {?} */(( /** @type {?} */(( /** @type {?} */(_this.cloneFrom)).map)).get(key)))); }));
                        ( /** @type {?} */(this.updates)).forEach(( /**
                         * @param {?} update
                         * @return {?}
                         */function (/**
                         * @param {?} update
                         * @return {?}
                         */ update) {
                            switch (update.op) {
                                case 'a':
                                case 's':
                                    /** @type {?} */
                                    var base = (update.op === 'a' ? ( /** @type {?} */(_this.map)).get(update.param) : undefined) || [];
                                    base.push(( /** @type {?} */(update.value)));
                                    ( /** @type {?} */(_this.map)).set(update.param, base);
                                    break;
                                case 'd':
                                    if (update.value !== undefined) {
                                        /** @type {?} */
                                        var base_1 = ( /** @type {?} */(_this.map)).get(update.param) || [];
                                        /** @type {?} */
                                        var idx = base_1.indexOf(update.value);
                                        if (idx !== -1) {
                                            base_1.splice(idx, 1);
                                        }
                                        if (base_1.length > 0) {
                                            ( /** @type {?} */(_this.map)).set(update.param, base_1);
                                        }
                                        else {
                                            ( /** @type {?} */(_this.map)).delete(update.param);
                                        }
                                    }
                                    else {
                                        ( /** @type {?} */(_this.map)).delete(update.param);
                                        break;
                                    }
                            }
                        }));
                        this.cloneFrom = this.updates = null;
                    }
                };
                return HttpParams;
            }());
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Construction interface for `HttpRequest`s.
             *
             * All values are optional and will override default values if provided.
             * @record
             */
            function HttpRequestInit() { }
            if (false) { }
            /**
             * Determine whether the given HTTP method may include a body.
             * @param {?} method
             * @return {?}
             */
            function mightHaveBody(method) {
                switch (method) {
                    case 'DELETE':
                    case 'GET':
                    case 'HEAD':
                    case 'OPTIONS':
                    case 'JSONP':
                        return false;
                    default:
                        return true;
                }
            }
            /**
             * Safely assert whether the given value is an ArrayBuffer.
             *
             * In some execution environments ArrayBuffer is not defined.
             * @param {?} value
             * @return {?}
             */
            function isArrayBuffer(value) {
                return typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer;
            }
            /**
             * Safely assert whether the given value is a Blob.
             *
             * In some execution environments Blob is not defined.
             * @param {?} value
             * @return {?}
             */
            function isBlob(value) {
                return typeof Blob !== 'undefined' && value instanceof Blob;
            }
            /**
             * Safely assert whether the given value is a FormData instance.
             *
             * In some execution environments FormData is not defined.
             * @param {?} value
             * @return {?}
             */
            function isFormData(value) {
                return typeof FormData !== 'undefined' && value instanceof FormData;
            }
            /**
             * An outgoing HTTP request with an optional typed body.
             *
             * `HttpRequest` represents an outgoing request, including URL, method,
             * headers, body, and other request configuration options. Instances should be
             * assumed to be immutable. To modify a `HttpRequest`, the `clone`
             * method should be used.
             *
             * \@publicApi
             * @template T
             */
            var HttpRequest = /** @class */ (function () {
                /**
                 * @param {?} method
                 * @param {?} url
                 * @param {?=} third
                 * @param {?=} fourth
                 */
                function HttpRequest(method, url, third, fourth) {
                    this.url = url;
                    /**
                     * The request body, or `null` if one isn't set.
                     *
                     * Bodies are not enforced to be immutable, as they can include a reference to any
                     * user-defined data type. However, interceptors should take care to preserve
                     * idempotence by treating them as such.
                     */
                    this.body = null;
                    /**
                     * Whether this request should be made in a way that exposes progress events.
                     *
                     * Progress events are expensive (change detection runs on each event) and so
                     * they should only be requested if the consumer intends to monitor them.
                     */
                    this.reportProgress = false;
                    /**
                     * Whether this request should be sent with outgoing credentials (cookies).
                     */
                    this.withCredentials = false;
                    /**
                     * The expected response type of the server.
                     *
                     * This is used to parse the response appropriately before returning it to
                     * the requestee.
                     */
                    this.responseType = 'json';
                    this.method = method.toUpperCase();
                    // Next, need to figure out which argument holds the HttpRequestInit
                    // options, if any.
                    /** @type {?} */
                    var options;
                    // Check whether a body argument is expected. The only valid way to omit
                    // the body argument is to use a known no-body method like GET.
                    if (mightHaveBody(this.method) || !!fourth) {
                        // Body is the third argument, options are the fourth.
                        this.body = (third !== undefined) ? ( /** @type {?} */(third)) : null;
                        options = fourth;
                    }
                    else {
                        // No body required, options are the third argument. The body stays null.
                        options = ( /** @type {?} */(third));
                    }
                    // If options have been passed, interpret them.
                    if (options) {
                        // Normalize reportProgress and withCredentials.
                        this.reportProgress = !!options.reportProgress;
                        this.withCredentials = !!options.withCredentials;
                        // Override default response type of 'json' if one is provided.
                        if (!!options.responseType) {
                            this.responseType = options.responseType;
                        }
                        // Override headers if they're provided.
                        if (!!options.headers) {
                            this.headers = options.headers;
                        }
                        if (!!options.params) {
                            this.params = options.params;
                        }
                    }
                    // If no headers have been passed in, construct a new HttpHeaders instance.
                    if (!this.headers) {
                        this.headers = new HttpHeaders();
                    }
                    // If no parameters have been passed in, construct a new HttpUrlEncodedParams instance.
                    if (!this.params) {
                        this.params = new HttpParams();
                        this.urlWithParams = url;
                    }
                    else {
                        // Encode the parameters to a string in preparation for inclusion in the URL.
                        /** @type {?} */
                        var params = this.params.toString();
                        if (params.length === 0) {
                            // No parameters, the visible URL is just the URL given at creation time.
                            this.urlWithParams = url;
                        }
                        else {
                            // Does the URL already have query parameters? Look for '?'.
                            /** @type {?} */
                            var qIdx = url.indexOf('?');
                            // There are 3 cases to handle:
                            // 1) No existing parameters -> append '?' followed by params.
                            // 2) '?' exists and is followed by existing query string ->
                            //    append '&' followed by params.
                            // 3) '?' exists at the end of the url -> append params directly.
                            // This basically amounts to determining the character, if any, with
                            // which to join the URL and parameters.
                            /** @type {?} */
                            var sep = qIdx === -1 ? '?' : (qIdx < url.length - 1 ? '&' : '');
                            this.urlWithParams = url + sep + params;
                        }
                    }
                }
                /**
                 * Transform the free-form body into a serialized format suitable for
                 * transmission to the server.
                 * @return {?}
                 */
                HttpRequest.prototype.serializeBody = function () {
                    // If no body is present, no need to serialize it.
                    if (this.body === null) {
                        return null;
                    }
                    // Check whether the body is already in a serialized form. If so,
                    // it can just be returned directly.
                    if (isArrayBuffer(this.body) || isBlob(this.body) || isFormData(this.body) ||
                        typeof this.body === 'string') {
                        return this.body;
                    }
                    // Check whether the body is an instance of HttpUrlEncodedParams.
                    if (this.body instanceof HttpParams) {
                        return this.body.toString();
                    }
                    // Check whether the body is an object or array, and serialize with JSON if so.
                    if (typeof this.body === 'object' || typeof this.body === 'boolean' ||
                        Array.isArray(this.body)) {
                        return JSON.stringify(this.body);
                    }
                    // Fall back on toString() for everything else.
                    return (( /** @type {?} */(this.body))).toString();
                };
                /**
                 * Examine the body and attempt to infer an appropriate MIME type
                 * for it.
                 *
                 * If no such type can be inferred, this method will return `null`.
                 * @return {?}
                 */
                HttpRequest.prototype.detectContentTypeHeader = function () {
                    // An empty body has no content type.
                    if (this.body === null) {
                        return null;
                    }
                    // FormData bodies rely on the browser's content type assignment.
                    if (isFormData(this.body)) {
                        return null;
                    }
                    // Blobs usually have their own content type. If it doesn't, then
                    // no type can be inferred.
                    if (isBlob(this.body)) {
                        return this.body.type || null;
                    }
                    // Array buffers have unknown contents and thus no type can be inferred.
                    if (isArrayBuffer(this.body)) {
                        return null;
                    }
                    // Technically, strings could be a form of JSON data, but it's safe enough
                    // to assume they're plain strings.
                    if (typeof this.body === 'string') {
                        return 'text/plain';
                    }
                    // `HttpUrlEncodedParams` has its own content-type.
                    if (this.body instanceof HttpParams) {
                        return 'application/x-www-form-urlencoded;charset=UTF-8';
                    }
                    // Arrays, objects, and numbers will be encoded as JSON.
                    if (typeof this.body === 'object' || typeof this.body === 'number' ||
                        Array.isArray(this.body)) {
                        return 'application/json';
                    }
                    // No type could be inferred.
                    return null;
                };
                /**
                 * @param {?=} update
                 * @return {?}
                 */
                HttpRequest.prototype.clone = function (update) {
                    if (update === void 0) { update = {}; }
                    // For method, url, and responseType, take the current value unless
                    // it is overridden in the update hash.
                    /** @type {?} */
                    var method = update.method || this.method;
                    /** @type {?} */
                    var url = update.url || this.url;
                    /** @type {?} */
                    var responseType = update.responseType || this.responseType;
                    // The body is somewhat special - a `null` value in update.body means
                    // whatever current body is present is being overridden with an empty
                    // body, whereas an `undefined` value in update.body implies no
                    // override.
                    /** @type {?} */
                    var body = (update.body !== undefined) ? update.body : this.body;
                    // Carefully handle the boolean options to differentiate between
                    // `false` and `undefined` in the update args.
                    /** @type {?} */
                    var withCredentials = (update.withCredentials !== undefined) ? update.withCredentials : this.withCredentials;
                    /** @type {?} */
                    var reportProgress = (update.reportProgress !== undefined) ? update.reportProgress : this.reportProgress;
                    // Headers and params may be appended to if `setHeaders` or
                    // `setParams` are used.
                    /** @type {?} */
                    var headers = update.headers || this.headers;
                    /** @type {?} */
                    var params = update.params || this.params;
                    // Check whether the caller has asked to add headers.
                    if (update.setHeaders !== undefined) {
                        // Set every requested header.
                        headers =
                            Object.keys(update.setHeaders)
                                .reduce(( /**
                         * @param {?} headers
                         * @param {?} name
                         * @return {?}
                         */function (headers, name) { return headers.set(name, ( /** @type {?} */(update.setHeaders))[name]); }), headers);
                    }
                    // Check whether the caller has asked to set params.
                    if (update.setParams) {
                        // Set every requested param.
                        params = Object.keys(update.setParams)
                            .reduce(( /**
                     * @param {?} params
                     * @param {?} param
                     * @return {?}
                     */function (params, param) { return params.set(param, ( /** @type {?} */(update.setParams))[param]); }), params);
                    }
                    // Finally, construct the new HttpRequest using the pieces from above.
                    return new HttpRequest(method, url, body, {
                        params: params, headers: headers, reportProgress: reportProgress, responseType: responseType, withCredentials: withCredentials,
                    });
                };
                return HttpRequest;
            }());
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @enum {number} */
            var HttpEventType = {
                /**
                 * The request was sent out over the wire.
                 */
                Sent: 0,
                /**
                 * An upload progress event was received.
                 */
                UploadProgress: 1,
                /**
                 * The response status code and headers were received.
                 */
                ResponseHeader: 2,
                /**
                 * A download progress event was received.
                 */
                DownloadProgress: 3,
                /**
                 * The full response including the body was received.
                 */
                Response: 4,
                /**
                 * A custom event from an interceptor or a backend.
                 */
                User: 5,
            };
            HttpEventType[HttpEventType.Sent] = 'Sent';
            HttpEventType[HttpEventType.UploadProgress] = 'UploadProgress';
            HttpEventType[HttpEventType.ResponseHeader] = 'ResponseHeader';
            HttpEventType[HttpEventType.DownloadProgress] = 'DownloadProgress';
            HttpEventType[HttpEventType.Response] = 'Response';
            HttpEventType[HttpEventType.User] = 'User';
            /**
             * Base interface for progress events.
             *
             * \@publicApi
             * @record
             */
            function HttpProgressEvent() { }
            if (false) { }
            /**
             * A download progress event.
             *
             * \@publicApi
             * @record
             */
            function HttpDownloadProgressEvent() { }
            if (false) { }
            /**
             * An upload progress event.
             *
             * \@publicApi
             * @record
             */
            function HttpUploadProgressEvent() { }
            if (false) { }
            /**
             * An event indicating that the request was sent to the server. Useful
             * when a request may be retried multiple times, to distinguish between
             * retries on the final event stream.
             *
             * \@publicApi
             * @record
             */
            function HttpSentEvent() { }
            if (false) { }
            /**
             * A user-defined event.
             *
             * Grouping all custom events under this type ensures they will be handled
             * and forwarded by all implementations of interceptors.
             *
             * \@publicApi
             * @record
             * @template T
             */
            function HttpUserEvent() { }
            if (false) { }
            /**
             * An error that represents a failed attempt to JSON.parse text coming back
             * from the server.
             *
             * It bundles the Error object with the actual response body that failed to parse.
             *
             *
             * @record
             */
            function HttpJsonParseError() { }
            if (false) { }
            /**
             * Base class for both `HttpResponse` and `HttpHeaderResponse`.
             *
             * \@publicApi
             * @abstract
             */
            var HttpResponseBase = /** @class */ (function () {
                /**
                 * Super-constructor for all responses.
                 *
                 * The single parameter accepted is an initialization hash. Any properties
                 * of the response passed there will override the default values.
                 * @param {?} init
                 * @param {?=} defaultStatus
                 * @param {?=} defaultStatusText
                 */
                function HttpResponseBase(init, defaultStatus, defaultStatusText) {
                    if (defaultStatus === void 0) { defaultStatus = 200; }
                    if (defaultStatusText === void 0) { defaultStatusText = 'OK'; }
                    // If the hash has values passed, use them to initialize the response.
                    // Otherwise use the default values.
                    this.headers = init.headers || new HttpHeaders();
                    this.status = init.status !== undefined ? init.status : defaultStatus;
                    this.statusText = init.statusText || defaultStatusText;
                    this.url = init.url || null;
                    // Cache the ok value to avoid defining a getter.
                    this.ok = this.status >= 200 && this.status < 300;
                }
                return HttpResponseBase;
            }());
            if (false) { }
            /**
             * A partial HTTP response which only includes the status and header data,
             * but no response body.
             *
             * `HttpHeaderResponse` is a `HttpEvent` available on the response
             * event stream, only when progress events are requested.
             *
             * \@publicApi
             */
            var HttpHeaderResponse = /** @class */ (function (_super) {
                __extends(HttpHeaderResponse, _super);
                /**
                 * Create a new `HttpHeaderResponse` with the given parameters.
                 * @param {?=} init
                 */
                function HttpHeaderResponse(init) {
                    if (init === void 0) { init = {}; }
                    var _this = _super.call(this, init) || this;
                    _this.type = HttpEventType.ResponseHeader;
                    return _this;
                }
                /**
                 * Copy this `HttpHeaderResponse`, overriding its contents with the
                 * given parameter hash.
                 * @param {?=} update
                 * @return {?}
                 */
                HttpHeaderResponse.prototype.clone = function (update) {
                    if (update === void 0) { update = {}; }
                    // Perform a straightforward initialization of the new HttpHeaderResponse,
                    // overriding the current parameters with new ones if given.
                    return new HttpHeaderResponse({
                        headers: update.headers || this.headers,
                        status: update.status !== undefined ? update.status : this.status,
                        statusText: update.statusText || this.statusText,
                        url: update.url || this.url || undefined,
                    });
                };
                return HttpHeaderResponse;
            }(HttpResponseBase));
            if (false) { }
            /**
             * A full HTTP response, including a typed response body (which may be `null`
             * if one was not returned).
             *
             * `HttpResponse` is a `HttpEvent` available on the response event
             * stream.
             *
             * \@publicApi
             * @template T
             */
            var HttpResponse = /** @class */ (function (_super) {
                __extends(HttpResponse, _super);
                /**
                 * Construct a new `HttpResponse`.
                 * @param {?=} init
                 */
                function HttpResponse(init) {
                    if (init === void 0) { init = {}; }
                    var _this = _super.call(this, init) || this;
                    _this.type = HttpEventType.Response;
                    _this.body = init.body !== undefined ? init.body : null;
                    return _this;
                }
                /**
                 * @param {?=} update
                 * @return {?}
                 */
                HttpResponse.prototype.clone = function (update) {
                    if (update === void 0) { update = {}; }
                    return new HttpResponse({
                        body: (update.body !== undefined) ? update.body : this.body,
                        headers: update.headers || this.headers,
                        status: (update.status !== undefined) ? update.status : this.status,
                        statusText: update.statusText || this.statusText,
                        url: update.url || this.url || undefined,
                    });
                };
                return HttpResponse;
            }(HttpResponseBase));
            if (false) { }
            /**
             * A response that represents an error or failure, either from a
             * non-successful HTTP status, an error while executing the request,
             * or some other failure which occurred during the parsing of the response.
             *
             * Any error returned on the `Observable` response stream will be
             * wrapped in an `HttpErrorResponse` to provide additional context about
             * the state of the HTTP layer when the error occurred. The error property
             * will contain either a wrapped Error object or the error response returned
             * from the server.
             *
             * \@publicApi
             */
            var HttpErrorResponse = /** @class */ (function (_super) {
                __extends(HttpErrorResponse, _super);
                /**
                 * @param {?} init
                 */
                function HttpErrorResponse(init) {
                    var _this = 
                    // Initialize with a default status of 0 / Unknown Error.
                    _super.call(this, init, 0, 'Unknown Error') || this;
                    _this.name = 'HttpErrorResponse';
                    /**
                     * Errors are never okay, even when the status code is in the 2xx success range.
                     */
                    _this.ok = false;
                    // If the response was successful, then this was a parse error. Otherwise, it was
                    // a protocol-level failure of some sort. Either the request failed in transit
                    // or the server returned an unsuccessful status code.
                    if (_this.status >= 200 && _this.status < 300) {
                        _this.message = "Http failure during parsing for " + (init.url || '(unknown url)');
                    }
                    else {
                        _this.message =
                            "Http failure response for " + (init.url || '(unknown url)') + ": " + init.status + " " + init.statusText;
                    }
                    _this.error = init.error || null;
                    return _this;
                }
                return HttpErrorResponse;
            }(HttpResponseBase));
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Constructs an instance of `HttpRequestOptions<T>` from a source `HttpMethodOptions` and
             * the given `body`. This function clones the object and adds the body.
             *
             * Note that the `responseType` *options* value is a String that identifies the
             * single data type of the response.
             * A single overload version of the method handles each response type.
             * The value of `responseType` cannot be a union, as the combined signature could imply.
             *
             * @template T
             * @param {?} options
             * @param {?} body
             * @return {?}
             */
            function addBody(options, body) {
                return {
                    body: body,
                    headers: options.headers,
                    observe: options.observe,
                    params: options.params,
                    reportProgress: options.reportProgress,
                    responseType: options.responseType,
                    withCredentials: options.withCredentials,
                };
            }
            /**
             * Performs HTTP requests.
             * This service is available as an injectable class, with methods to perform HTTP requests.
             * Each request method has multiple signatures, and the return type varies based on
             * the signature that is called (mainly the values of `observe` and `responseType`).
             *
             * Note that the `responseType` *options* value is a String that identifies the
             * single data type of the response.
             * A single overload version of the method handles each response type.
             * The value of `responseType` cannot be a union, as the combined signature could imply.
             *
             * \@usageNotes
             * Sample HTTP requests for the [Tour of Heroes](/tutorial/toh-pt0) application.
             *
             * ### HTTP Request Example
             *
             * ```
             *  // GET heroes whose name contains search term
             * searchHeroes(term: string): observable<Hero[]>{
             *
             *  const params = new HttpParams({fromString: 'name=term'});
             *    return this.httpClient.request('GET', this.heroesUrl, {responseType:'json', params});
             * }
             * ```
             * ### JSONP Example
             * ```
             * requestJsonp(url, callback = 'callback') {
             *  return this.httpClient.jsonp(this.heroesURL, callback);
             * }
             * ```
             *
             * ### PATCH Example
             * ```
             * // PATCH one of the heroes' name
             * patchHero (id: number, heroName: string): Observable<{}> {
             * const url = `${this.heroesUrl}/${id}`;   // PATCH api/heroes/42
             *  return this.httpClient.patch(url, {name: heroName}, httpOptions)
             *    .pipe(catchError(this.handleError('patchHero')));
             * }
             * ```
             *
             * @see [HTTP Guide](guide/http)
             *
             * \@publicApi
             */
            var HttpClient = /** @class */ (function () {
                /**
                 * @param {?} handler
                 */
                function HttpClient(handler) {
                    this.handler = handler;
                }
                /**
                 * Constructs an observable for a generic HTTP request that, when subscribed,
                 * fires the request through the chain of registered interceptors and on to the
                 * server.
                 *
                 * You can pass an `HttpRequest` directly as the only parameter. In this case,
                 * the call returns an observable of the raw `HttpEvent` stream.
                 *
                 * Alternatively you can pass an HTTP method as the first parameter,
                 * a URL string as the second, and an options hash containing the request body as the third.
                 * See `addBody()`. In this case, the specified `responseType` and `observe` options determine the
                 * type of returned observable.
                 *   * The `responseType` value determines how a successful response body is parsed.
                 *   * If `responseType` is the default `json`, you can pass a type interface for the resulting
                 * object as a type parameter to the call.
                 *
                 * The `observe` value determines the return type, according to what you are interested in
                 * observing.
                 *   * An `observe` value of events returns an observable of the raw `HttpEvent` stream, including
                 * progress events by default.
                 *   * An `observe` value of response returns an observable of `HttpResponse<T>`,
                 * where the `T` parameter depends on the `responseType` and any optionally provided type
                 * parameter.
                 *   * An `observe` value of body returns an observable of `<T>` with the same `T` body type.
                 *
                 * @param {?} first
                 * @param {?=} url
                 * @param {?=} options
                 * @return {?}
                 */
                HttpClient.prototype.request = function (first, url, options) {
                    var _this = this;
                    if (options === void 0) { options = {}; }
                    /** @type {?} */
                    var req;
                    // First, check whether the primary argument is an instance of `HttpRequest`.
                    if (first instanceof HttpRequest) {
                        // It is. The other arguments must be undefined (per the signatures) and can be
                        // ignored.
                        req = ( /** @type {?} */(first));
                    }
                    else {
                        // It's a string, so it represents a URL. Construct a request based on it,
                        // and incorporate the remaining arguments (assuming `GET` unless a method is
                        // provided.
                        // Figure out the headers.
                        /** @type {?} */
                        var headers = undefined;
                        if (options.headers instanceof HttpHeaders) {
                            headers = options.headers;
                        }
                        else {
                            headers = new HttpHeaders(options.headers);
                        }
                        // Sort out parameters.
                        /** @type {?} */
                        var params = undefined;
                        if (!!options.params) {
                            if (options.params instanceof HttpParams) {
                                params = options.params;
                            }
                            else {
                                params = new HttpParams(( /** @type {?} */({ fromObject: options.params })));
                            }
                        }
                        // Construct the request.
                        req = new HttpRequest(first, ( /** @type {?} */(url)), (options.body !== undefined ? options.body : null), {
                            headers: headers,
                            params: params,
                            reportProgress: options.reportProgress,
                            // By default, JSON is assumed to be returned for all calls.
                            responseType: options.responseType || 'json',
                            withCredentials: options.withCredentials,
                        });
                    }
                    // Start with an Observable.of() the initial request, and run the handler (which
                    // includes all interceptors) inside a concatMap(). This way, the handler runs
                    // inside an Observable chain, which causes interceptors to be re-run on every
                    // subscription (this also makes retries re-run the handler, including interceptors).
                    /** @type {?} */
                    var events$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])(( /**
                     * @param {?} req
                     * @return {?}
                     */function (req) { return _this.handler.handle(req); })));
                    // If coming via the API signature which accepts a previously constructed HttpRequest,
                    // the only option is to get the event stream. Otherwise, return the event stream if
                    // that is what was requested.
                    if (first instanceof HttpRequest || options.observe === 'events') {
                        return events$;
                    }
                    // The requested stream contains either the full response or the body. In either
                    // case, the first step is to filter the event stream to extract a stream of
                    // responses(s).
                    /** @type {?} */
                    var res$ = ( /** @type {?} */(events$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(( /**
                     * @param {?} event
                     * @return {?}
                     */function (event) { return event instanceof HttpResponse; })))));
                    // Decide which stream to return.
                    switch (options.observe || 'body') {
                        case 'body':
                            // The requested stream is the body. Map the response stream to the response
                            // body. This could be done more simply, but a misbehaving interceptor might
                            // transform the response body into a different format and ignore the requested
                            // responseType. Guard against this by validating that the response is of the
                            // requested type.
                            switch (req.responseType) {
                                case 'arraybuffer':
                                    return res$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(( /**
                                     * @param {?} res
                                     * @return {?}
                                     */function (res) {
                                        // Validate that the body is an ArrayBuffer.
                                        if (res.body !== null && !(res.body instanceof ArrayBuffer)) {
                                            throw new Error('Response is not an ArrayBuffer.');
                                        }
                                        return res.body;
                                    })));
                                case 'blob':
                                    return res$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(( /**
                                     * @param {?} res
                                     * @return {?}
                                     */function (res) {
                                        // Validate that the body is a Blob.
                                        if (res.body !== null && !(res.body instanceof Blob)) {
                                            throw new Error('Response is not a Blob.');
                                        }
                                        return res.body;
                                    })));
                                case 'text':
                                    return res$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(( /**
                                     * @param {?} res
                                     * @return {?}
                                     */function (res) {
                                        // Validate that the body is a string.
                                        if (res.body !== null && typeof res.body !== 'string') {
                                            throw new Error('Response is not a string.');
                                        }
                                        return res.body;
                                    })));
                                case 'json':
                                default:
                                    // No validation needed for JSON responses, as they can be of any type.
                                    return res$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(( /**
                                     * @param {?} res
                                     * @return {?}
                                     */function (res) { return res.body; })));
                            }
                        case 'response':
                            // The response stream was requested directly, so return it.
                            return res$;
                        default:
                            // Guard against new future observe types being added.
                            throw new Error("Unreachable: unhandled observe type " + options.observe + "}");
                    }
                };
                /**
                 * Constructs an observable that, when subscribed, causes the configured
                 * `DELETE` request to execute on the server. See the individual overloads for
                 * details on the return type.
                 *
                 * @param {?} url     The endpoint URL.
                 * @param {?=} options The HTTP options to send with the request.
                 *
                 * @return {?}
                 */
                HttpClient.prototype.delete = function (url, options) {
                    if (options === void 0) { options = {}; }
                    return this.request('DELETE', url, ( /** @type {?} */(options)));
                };
                /**
                 * Constructs an observable that, when subscribed, causes the configured
                 * `GET` request to execute on the server. See the individual overloads for
                 * details on the return type.
                 * @param {?} url
                 * @param {?=} options
                 * @return {?}
                 */
                HttpClient.prototype.get = function (url, options) {
                    if (options === void 0) { options = {}; }
                    return this.request('GET', url, ( /** @type {?} */(options)));
                };
                /**
                 * Constructs an observable that, when subscribed, causes the configured
                 * `HEAD` request to execute on the server. The `HEAD` method returns
                 * meta information about the resource without transferring the
                 * resource itself. See the individual overloads for
                 * details on the return type.
                 * @param {?} url
                 * @param {?=} options
                 * @return {?}
                 */
                HttpClient.prototype.head = function (url, options) {
                    if (options === void 0) { options = {}; }
                    return this.request('HEAD', url, ( /** @type {?} */(options)));
                };
                /**
                 * Constructs an `Observable` that, when subscribed, causes a request with the special method
                 * `JSONP` to be dispatched via the interceptor pipeline.
                 * The [JSONP pattern](https://en.wikipedia.org/wiki/JSONP) works around limitations of certain
                 * API endpoints that don't support newer,
                 * and preferable [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) protocol.
                 * JSONP treats the endpoint API as a JavaScript file and tricks the browser to process the
                 * requests even if the API endpoint is not located on the same domain (origin) as the client-side
                 * application making the request.
                 * The endpoint API must support JSONP callback for JSONP requests to work.
                 * The resource API returns the JSON response wrapped in a callback function.
                 * You can pass the callback function name as one of the query parameters.
                 * Note that JSONP requests can only be used with `GET` requests.
                 *
                 * @template T
                 * @param {?} url The resource URL.
                 * @param {?} callbackParam The callback function name.
                 *
                 * @return {?}
                 */
                HttpClient.prototype.jsonp = function (url, callbackParam) {
                    return this.request('JSONP', url, {
                        params: new HttpParams().append(callbackParam, 'JSONP_CALLBACK'),
                        observe: 'body',
                        responseType: 'json',
                    });
                };
                /**
                 * Constructs an `Observable` that, when subscribed, causes the configured
                 * `OPTIONS` request to execute on the server. This method allows the client
                 * to determine the supported HTTP methods and other capabilites of an endpoint,
                 * without implying a resource action. See the individual overloads for
                 * details on the return type.
                 * @param {?} url
                 * @param {?=} options
                 * @return {?}
                 */
                HttpClient.prototype.options = function (url, options) {
                    if (options === void 0) { options = {}; }
                    return this.request('OPTIONS', url, ( /** @type {?} */(options)));
                };
                /**
                 * Constructs an observable that, when subscribed, causes the configured
                 * `PATCH` request to execute on the server. See the individual overloads for
                 * details on the return type.
                 * @param {?} url
                 * @param {?} body
                 * @param {?=} options
                 * @return {?}
                 */
                HttpClient.prototype.patch = function (url, body, options) {
                    if (options === void 0) { options = {}; }
                    return this.request('PATCH', url, addBody(options, body));
                };
                /**
                 * Constructs an observable that, when subscribed, causes the configured
                 * `POST` request to execute on the server. The server responds with the location of
                 * the replaced resource. See the individual overloads for
                 * details on the return type.
                 * @param {?} url
                 * @param {?} body
                 * @param {?=} options
                 * @return {?}
                 */
                HttpClient.prototype.post = function (url, body, options) {
                    if (options === void 0) { options = {}; }
                    return this.request('POST', url, addBody(options, body));
                };
                /**
                 * Constructs an observable that, when subscribed, causes the configured
                 * `PUT` request to execute on the server. The `PUT` method replaces an existing resource
                 * with a new set of values.
                 * See the individual overloads for details on the return type.
                 * @param {?} url
                 * @param {?} body
                 * @param {?=} options
                 * @return {?}
                 */
                HttpClient.prototype.put = function (url, body, options) {
                    if (options === void 0) { options = {}; }
                    return this.request('PUT', url, addBody(options, body));
                };
                return HttpClient;
            }());
            HttpClient.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
            ];
            /** @nocollapse */
            HttpClient.ctorParameters = function () { return [
                { type: HttpHandler }
            ]; };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Intercepts and handles an `HttpRequest` or `HttpResponse`.
             *
             * Most interceptors transform the outgoing request before passing it to the
             * next interceptor in the chain, by calling `next.handle(transformedReq)`.
             * An interceptor may transform the
             * response event stream as well, by applying additional RxJS operators on the stream
             * returned by `next.handle()`.
             *
             * More rarely, an interceptor may handle the request entirely,
             * and compose a new event stream instead of invoking `next.handle()`. This is an
             * acceptable behavior, but keep in mind that further interceptors will be skipped entirely.
             *
             * It is also rare but valid for an interceptor to return multiple responses on the
             * event stream for a single request.
             *
             * \@publicApi
             *
             * @see [HTTP Guide](guide/http#intercepting-requests-and-responses)
             *
             * \@usageNotes
             *
             * To use the same instance of `HttpInterceptors` for the entire app, import the `HttpClientModule`
             * only in your `AppModule`, and add the interceptors to the root application injector .
             * If you import `HttpClientModule` multiple times across different modules (for example, in lazy
             * loading modules), each import creates a new copy of the `HttpClientModule`, which overwrites the interceptors
             * provided in the root module.
             *
             * @record
             */
            function HttpInterceptor() { }
            if (false) { }
            /**
             * `HttpHandler` which applies an `HttpInterceptor` to an `HttpRequest`.
             *
             *
             */
            var HttpInterceptorHandler = /** @class */ (function () {
                /**
                 * @param {?} next
                 * @param {?} interceptor
                 */
                function HttpInterceptorHandler(next, interceptor) {
                    this.next = next;
                    this.interceptor = interceptor;
                }
                /**
                 * @param {?} req
                 * @return {?}
                 */
                HttpInterceptorHandler.prototype.handle = function (req) {
                    return this.interceptor.intercept(req, this.next);
                };
                return HttpInterceptorHandler;
            }());
            if (false) { }
            /**
             * A multi-provider token that represents the array of registered
             * `HttpInterceptor` objects.
             *
             * \@publicApi
             * @type {?}
             */
            var HTTP_INTERCEPTORS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('HTTP_INTERCEPTORS');
            var NoopInterceptor = /** @class */ (function () {
                function NoopInterceptor() {
                }
                /**
                 * @param {?} req
                 * @param {?} next
                 * @return {?}
                 */
                NoopInterceptor.prototype.intercept = function (req, next) {
                    return next.handle(req);
                };
                return NoopInterceptor;
            }());
            NoopInterceptor.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
            ];
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            // Every request made through JSONP needs a callback name that's unique across the
            // whole page. Each request is assigned an id and the callback name is constructed
            // from that. The next id to be assigned is tracked in a global variable here that
            // is shared among all applications on the page.
            /** @type {?} */
            var nextRequestId = 0;
            // Error text given when a JSONP script is injected, but doesn't invoke the callback
            // passed in its URL.
            /** @type {?} */
            var JSONP_ERR_NO_CALLBACK = 'JSONP injected script did not invoke callback.';
            // Error text given when a request is passed to the JsonpClientBackend that doesn't
            // have a request method JSONP.
            /** @type {?} */
            var JSONP_ERR_WRONG_METHOD = 'JSONP requests must use JSONP request method.';
            /** @type {?} */
            var JSONP_ERR_WRONG_RESPONSE_TYPE = 'JSONP requests must use Json response type.';
            /**
             * DI token/abstract type representing a map of JSONP callbacks.
             *
             * In the browser, this should always be the `window` object.
             *
             *
             * @abstract
             */
            var JsonpCallbackContext = /** @class */ (function () {
                function JsonpCallbackContext() {
                }
                return JsonpCallbackContext;
            }());
            /**
             * Processes an `HttpRequest` with the JSONP method,
             * by performing JSONP style requests.
             * @see `HttpHandler`
             * @see `HttpXhrBackend`
             *
             * \@publicApi
             */
            var JsonpClientBackend = /** @class */ (function () {
                /**
                 * @param {?} callbackMap
                 * @param {?} document
                 */
                function JsonpClientBackend(callbackMap, document) {
                    this.callbackMap = callbackMap;
                    this.document = document;
                }
                /**
                 * Get the name of the next callback method, by incrementing the global `nextRequestId`.
                 * @private
                 * @return {?}
                 */
                JsonpClientBackend.prototype.nextCallback = function () { return "ng_jsonp_callback_" + nextRequestId++; };
                /**
                 * Processes a JSONP request and returns an event stream of the results.
                 * @param {?} req The request object.
                 * @return {?} An observable of the response events.
                 *
                 */
                JsonpClientBackend.prototype.handle = function (req) {
                    var _this = this;
                    // Firstly, check both the method and response type. If either doesn't match
                    // then the request was improperly routed here and cannot be handled.
                    if (req.method !== 'JSONP') {
                        throw new Error(JSONP_ERR_WRONG_METHOD);
                    }
                    else if (req.responseType !== 'json') {
                        throw new Error(JSONP_ERR_WRONG_RESPONSE_TYPE);
                    }
                    // Everything else happens inside the Observable boundary.
                    return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](( /**
                     * @param {?} observer
                     * @return {?}
                     */function (observer) {
                        // The first step to make a request is to generate the callback name, and replace the
                        // callback placeholder in the URL with the name. Care has to be taken here to ensure
                        // a trailing &, if matched, gets inserted back into the URL in the correct place.
                        /** @type {?} */
                        var callback = _this.nextCallback();
                        /** @type {?} */
                        var url = req.urlWithParams.replace(/=JSONP_CALLBACK(&|$)/, "=" + callback + "$1");
                        // Construct the <script> tag and point it at the URL.
                        /** @type {?} */
                        var node = _this.document.createElement('script');
                        node.src = url;
                        // A JSONP request requires waiting for multiple callbacks. These variables
                        // are closed over and track state across those callbacks.
                        // The response object, if one has been received, or null otherwise.
                        /** @type {?} */
                        var body = null;
                        // Whether the response callback has been called.
                        /** @type {?} */
                        var finished = false;
                        // Whether the request has been cancelled (and thus any other callbacks)
                        // should be ignored.
                        /** @type {?} */
                        var cancelled = false;
                        // Set the response callback in this.callbackMap (which will be the window
                        // object in the browser. The script being loaded via the <script> tag will
                        // eventually call this callback.
                        _this.callbackMap[callback] = ( /**
                         * @param {?=} data
                         * @return {?}
                         */function (data) {
                            // Data has been received from the JSONP script. Firstly, delete this callback.
                            delete _this.callbackMap[callback];
                            // Next, make sure the request wasn't cancelled in the meantime.
                            if (cancelled) {
                                return;
                            }
                            // Set state to indicate data was received.
                            body = data;
                            finished = true;
                        });
                        // cleanup() is a utility closure that removes the <script> from the page and
                        // the response callback from the window. This logic is used in both the
                        // success, error, and cancellation paths, so it's extracted out for convenience.
                        /** @type {?} */
                        var cleanup = ( /**
                         * @return {?}
                         */function () {
                            // Remove the <script> tag if it's still on the page.
                            if (node.parentNode) {
                                node.parentNode.removeChild(node);
                            }
                            // Remove the response callback from the callbackMap (window object in the
                            // browser).
                            delete _this.callbackMap[callback];
                        });
                        // onLoad() is the success callback which runs after the response callback
                        // if the JSONP script loads successfully. The event itself is unimportant.
                        // If something went wrong, onLoad() may run without the response callback
                        // having been invoked.
                        /** @type {?} */
                        var onLoad = ( /**
                         * @param {?} event
                         * @return {?}
                         */function (event) {
                            // Do nothing if the request has been cancelled.
                            if (cancelled) {
                                return;
                            }
                            // Cleanup the page.
                            cleanup();
                            // Check whether the response callback has run.
                            if (!finished) {
                                // It hasn't, something went wrong with the request. Return an error via
                                // the Observable error path. All JSONP errors have status 0.
                                observer.error(new HttpErrorResponse({
                                    url: url,
                                    status: 0,
                                    statusText: 'JSONP Error',
                                    error: new Error(JSONP_ERR_NO_CALLBACK),
                                }));
                                return;
                            }
                            // Success. body either contains the response body or null if none was
                            // returned.
                            observer.next(new HttpResponse({
                                body: body,
                                status: 200,
                                statusText: 'OK', url: url,
                            }));
                            // Complete the stream, the response is over.
                            observer.complete();
                        });
                        // onError() is the error callback, which runs if the script returned generates
                        // a Javascript error. It emits the error via the Observable error channel as
                        // a HttpErrorResponse.
                        /** @type {?} */
                        var onError = ( /**
                         * @param {?} error
                         * @return {?}
                         */function (error) {
                            // If the request was already cancelled, no need to emit anything.
                            if (cancelled) {
                                return;
                            }
                            cleanup();
                            // Wrap the error in a HttpErrorResponse.
                            observer.error(new HttpErrorResponse({
                                error: error,
                                status: 0,
                                statusText: 'JSONP Error', url: url,
                            }));
                        });
                        // Subscribe to both the success (load) and error events on the <script> tag,
                        // and add it to the page.
                        node.addEventListener('load', onLoad);
                        node.addEventListener('error', onError);
                        _this.document.body.appendChild(node);
                        // The request has now been successfully sent.
                        observer.next({ type: HttpEventType.Sent });
                        // Cancellation handler.
                        return ( /**
                         * @return {?}
                         */function () {
                            // Track the cancellation so event listeners won't do anything even if already scheduled.
                            cancelled = true;
                            // Remove the event listeners so they won't run if the events later fire.
                            node.removeEventListener('load', onLoad);
                            node.removeEventListener('error', onError);
                            // And finally, clean up the page.
                            cleanup();
                        });
                    }));
                };
                return JsonpClientBackend;
            }());
            JsonpClientBackend.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
            ];
            /** @nocollapse */
            JsonpClientBackend.ctorParameters = function () { return [
                { type: JsonpCallbackContext },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"],] }] }
            ]; };
            if (false) { }
            /**
             * Identifies requests with the method JSONP and
             * shifts them to the `JsonpClientBackend`.
             *
             * @see `HttpInterceptor`
             *
             * \@publicApi
             */
            var JsonpInterceptor = /** @class */ (function () {
                /**
                 * @param {?} jsonp
                 */
                function JsonpInterceptor(jsonp) {
                    this.jsonp = jsonp;
                }
                /**
                 * Identifies and handles a given JSONP request.
                 * @param {?} req The outgoing request object to handle.
                 * @param {?} next The next interceptor in the chain, or the backend
                 * if no interceptors remain in the chain.
                 * @return {?} An observable of the event stream.
                 */
                JsonpInterceptor.prototype.intercept = function (req, next) {
                    if (req.method === 'JSONP') {
                        return this.jsonp.handle(( /** @type {?} */(req)));
                    }
                    // Fall through for normal HTTP requests.
                    return next.handle(req);
                };
                return JsonpInterceptor;
            }());
            JsonpInterceptor.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
            ];
            /** @nocollapse */
            JsonpInterceptor.ctorParameters = function () { return [
                { type: JsonpClientBackend }
            ]; };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @type {?} */
            var XSSI_PREFIX = /^\)\]\}',?\n/;
            /**
             * Determine an appropriate URL for the response, by checking either
             * XMLHttpRequest.responseURL or the X-Request-URL header.
             * @param {?} xhr
             * @return {?}
             */
            function getResponseUrl(xhr) {
                if ('responseURL' in xhr && xhr.responseURL) {
                    return xhr.responseURL;
                }
                if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
                    return xhr.getResponseHeader('X-Request-URL');
                }
                return null;
            }
            /**
             * A wrapper around the `XMLHttpRequest` constructor.
             *
             * \@publicApi
             * @abstract
             */
            var XhrFactory = /** @class */ (function () {
                function XhrFactory() {
                }
                return XhrFactory;
            }());
            if (false) { }
            /**
             * A factory for `HttpXhrBackend` that uses the `XMLHttpRequest` browser API.
             *
             */
            var BrowserXhr = /** @class */ (function () {
                function BrowserXhr() {
                }
                /**
                 * @return {?}
                 */
                BrowserXhr.prototype.build = function () { return ( /** @type {?} */((new XMLHttpRequest()))); };
                return BrowserXhr;
            }());
            BrowserXhr.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
            ];
            /** @nocollapse */
            BrowserXhr.ctorParameters = function () { return []; };
            /**
             * Tracks a response from the server that does not yet have a body.
             * @record
             */
            function PartialResponse() { }
            if (false) { }
            /**
             * Uses `XMLHttpRequest` to send requests to a backend server.
             * @see `HttpHandler`
             * @see `JsonpClientBackend`
             *
             * \@publicApi
             */
            var HttpXhrBackend = /** @class */ (function () {
                /**
                 * @param {?} xhrFactory
                 */
                function HttpXhrBackend(xhrFactory) {
                    this.xhrFactory = xhrFactory;
                }
                /**
                 * Processes a request and returns a stream of response events.
                 * @param {?} req The request object.
                 * @return {?} An observable of the response events.
                 */
                HttpXhrBackend.prototype.handle = function (req) {
                    var _this = this;
                    // Quick check to give a better error message when a user attempts to use
                    // HttpClient.jsonp() without installing the JsonpClientModule
                    if (req.method === 'JSONP') {
                        throw new Error("Attempted to construct Jsonp request without JsonpClientModule installed.");
                    }
                    // Everything happens on Observable subscription.
                    return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](( /**
                     * @param {?} observer
                     * @return {?}
                     */function (observer) {
                        // Start by setting up the XHR object with request method, URL, and withCredentials flag.
                        /** @type {?} */
                        var xhr = _this.xhrFactory.build();
                        xhr.open(req.method, req.urlWithParams);
                        if (!!req.withCredentials) {
                            xhr.withCredentials = true;
                        }
                        // Add all the requested headers.
                        req.headers.forEach(( /**
                         * @param {?} name
                         * @param {?} values
                         * @return {?}
                         */function (name, values) { return xhr.setRequestHeader(name, values.join(',')); }));
                        // Add an Accept header if one isn't present already.
                        if (!req.headers.has('Accept')) {
                            xhr.setRequestHeader('Accept', 'application/json, text/plain, */*');
                        }
                        // Auto-detect the Content-Type header if one isn't present already.
                        if (!req.headers.has('Content-Type')) {
                            /** @type {?} */
                            var detectedType = req.detectContentTypeHeader();
                            // Sometimes Content-Type detection fails.
                            if (detectedType !== null) {
                                xhr.setRequestHeader('Content-Type', detectedType);
                            }
                        }
                        // Set the responseType if one was requested.
                        if (req.responseType) {
                            /** @type {?} */
                            var responseType = req.responseType.toLowerCase();
                            // JSON responses need to be processed as text. This is because if the server
                            // returns an XSSI-prefixed JSON response, the browser will fail to parse it,
                            // xhr.response will be null, and xhr.responseText cannot be accessed to
                            // retrieve the prefixed JSON data in order to strip the prefix. Thus, all JSON
                            // is parsed by first requesting text and then applying JSON.parse.
                            xhr.responseType = ( /** @type {?} */(((responseType !== 'json') ? responseType : 'text')));
                        }
                        // Serialize the request body if one is present. If not, this will be set to null.
                        /** @type {?} */
                        var reqBody = req.serializeBody();
                        // If progress events are enabled, response headers will be delivered
                        // in two events - the HttpHeaderResponse event and the full HttpResponse
                        // event. However, since response headers don't change in between these
                        // two events, it doesn't make sense to parse them twice. So headerResponse
                        // caches the data extracted from the response whenever it's first parsed,
                        // to ensure parsing isn't duplicated.
                        /** @type {?} */
                        var headerResponse = null;
                        // partialFromXhr extracts the HttpHeaderResponse from the current XMLHttpRequest
                        // state, and memoizes it into headerResponse.
                        /** @type {?} */
                        var partialFromXhr = ( /**
                         * @return {?}
                         */function () {
                            if (headerResponse !== null) {
                                return headerResponse;
                            }
                            // Read status and normalize an IE9 bug (http://bugs.jquery.com/ticket/1450).
                            /** @type {?} */
                            var status = xhr.status === 1223 ? 204 : xhr.status;
                            /** @type {?} */
                            var statusText = xhr.statusText || 'OK';
                            // Parse headers from XMLHttpRequest - this step is lazy.
                            /** @type {?} */
                            var headers = new HttpHeaders(xhr.getAllResponseHeaders());
                            // Read the response URL from the XMLHttpResponse instance and fall back on the
                            // request URL.
                            /** @type {?} */
                            var url = getResponseUrl(xhr) || req.url;
                            // Construct the HttpHeaderResponse and memoize it.
                            headerResponse = new HttpHeaderResponse({ headers: headers, status: status, statusText: statusText, url: url });
                            return headerResponse;
                        });
                        // Next, a few closures are defined for the various events which XMLHttpRequest can
                        // emit. This allows them to be unregistered as event listeners later.
                        // First up is the load event, which represents a response being fully available.
                        /** @type {?} */
                        var onLoad = ( /**
                         * @return {?}
                         */function () {
                            // Read response state from the memoized partial data.
                            var _a = partialFromXhr(), headers = _a.headers, status = _a.status, statusText = _a.statusText, url = _a.url;
                            // The body will be read out if present.
                            /** @type {?} */
                            var body = null;
                            if (status !== 204) {
                                // Use XMLHttpRequest.response if set, responseText otherwise.
                                body = (typeof xhr.response === 'undefined') ? xhr.responseText : xhr.response;
                            }
                            // Normalize another potential bug (this one comes from CORS).
                            if (status === 0) {
                                status = !!body ? 200 : 0;
                            }
                            // ok determines whether the response will be transmitted on the event or
                            // error channel. Unsuccessful status codes (not 2xx) will always be errors,
                            // but a successful status code can still result in an error if the user
                            // asked for JSON data and the body cannot be parsed as such.
                            /** @type {?} */
                            var ok = status >= 200 && status < 300;
                            // Check whether the body needs to be parsed as JSON (in many cases the browser
                            // will have done that already).
                            if (req.responseType === 'json' && typeof body === 'string') {
                                // Save the original body, before attempting XSSI prefix stripping.
                                /** @type {?} */
                                var originalBody = body;
                                body = body.replace(XSSI_PREFIX, '');
                                try {
                                    // Attempt the parse. If it fails, a parse error should be delivered to the user.
                                    body = body !== '' ? JSON.parse(body) : null;
                                }
                                catch (error) {
                                    // Since the JSON.parse failed, it's reasonable to assume this might not have been a
                                    // JSON response. Restore the original body (including any XSSI prefix) to deliver
                                    // a better error response.
                                    body = originalBody;
                                    // If this was an error request to begin with, leave it as a string, it probably
                                    // just isn't JSON. Otherwise, deliver the parsing error to the user.
                                    if (ok) {
                                        // Even though the response status was 2xx, this is still an error.
                                        ok = false;
                                        // The parse error contains the text of the body that failed to parse.
                                        body = ( /** @type {?} */({ error: error, text: body }));
                                    }
                                }
                            }
                            if (ok) {
                                // A successful response is delivered on the event stream.
                                observer.next(new HttpResponse({
                                    body: body,
                                    headers: headers,
                                    status: status,
                                    statusText: statusText,
                                    url: url || undefined,
                                }));
                                // The full body has been received and delivered, no further events
                                // are possible. This request is complete.
                                observer.complete();
                            }
                            else {
                                // An unsuccessful request is delivered on the error channel.
                                observer.error(new HttpErrorResponse({
                                    // The error in this case is the response body (error from the server).
                                    error: body,
                                    headers: headers,
                                    status: status,
                                    statusText: statusText,
                                    url: url || undefined,
                                }));
                            }
                        });
                        // The onError callback is called when something goes wrong at the network level.
                        // Connection timeout, DNS error, offline, etc. These are actual errors, and are
                        // transmitted on the error channel.
                        /** @type {?} */
                        var onError = ( /**
                         * @param {?} error
                         * @return {?}
                         */function (error) {
                            var url = partialFromXhr().url;
                            /** @type {?} */
                            var res = new HttpErrorResponse({
                                error: error,
                                status: xhr.status || 0,
                                statusText: xhr.statusText || 'Unknown Error',
                                url: url || undefined,
                            });
                            observer.error(res);
                        });
                        // The sentHeaders flag tracks whether the HttpResponseHeaders event
                        // has been sent on the stream. This is necessary to track if progress
                        // is enabled since the event will be sent on only the first download
                        // progerss event.
                        /** @type {?} */
                        var sentHeaders = false;
                        // The download progress event handler, which is only registered if
                        // progress events are enabled.
                        /** @type {?} */
                        var onDownProgress = ( /**
                         * @param {?} event
                         * @return {?}
                         */function (event) {
                            // Send the HttpResponseHeaders event if it hasn't been sent already.
                            if (!sentHeaders) {
                                observer.next(partialFromXhr());
                                sentHeaders = true;
                            }
                            // Start building the download progress event to deliver on the response
                            // event stream.
                            /** @type {?} */
                            var progressEvent = {
                                type: HttpEventType.DownloadProgress,
                                loaded: event.loaded,
                            };
                            // Set the total number of bytes in the event if it's available.
                            if (event.lengthComputable) {
                                progressEvent.total = event.total;
                            }
                            // If the request was for text content and a partial response is
                            // available on XMLHttpRequest, include it in the progress event
                            // to allow for streaming reads.
                            if (req.responseType === 'text' && !!xhr.responseText) {
                                progressEvent.partialText = xhr.responseText;
                            }
                            // Finally, fire the event.
                            observer.next(progressEvent);
                        });
                        // The upload progress event handler, which is only registered if
                        // progress events are enabled.
                        /** @type {?} */
                        var onUpProgress = ( /**
                         * @param {?} event
                         * @return {?}
                         */function (event) {
                            // Upload progress events are simpler. Begin building the progress
                            // event.
                            /** @type {?} */
                            var progress = {
                                type: HttpEventType.UploadProgress,
                                loaded: event.loaded,
                            };
                            // If the total number of bytes being uploaded is available, include
                            // it.
                            if (event.lengthComputable) {
                                progress.total = event.total;
                            }
                            // Send the event.
                            observer.next(progress);
                        });
                        // By default, register for load and error events.
                        xhr.addEventListener('load', onLoad);
                        xhr.addEventListener('error', onError);
                        // Progress events are only enabled if requested.
                        if (req.reportProgress) {
                            // Download progress is always enabled if requested.
                            xhr.addEventListener('progress', onDownProgress);
                            // Upload progress depends on whether there is a body to upload.
                            if (reqBody !== null && xhr.upload) {
                                xhr.upload.addEventListener('progress', onUpProgress);
                            }
                        }
                        // Fire the request, and notify the event stream that it was fired.
                        xhr.send(( /** @type {?} */(reqBody)));
                        observer.next({ type: HttpEventType.Sent });
                        // This is the return from the Observable function, which is the
                        // request cancellation handler.
                        return ( /**
                         * @return {?}
                         */function () {
                            // On a cancellation, remove all registered event listeners.
                            xhr.removeEventListener('error', onError);
                            xhr.removeEventListener('load', onLoad);
                            if (req.reportProgress) {
                                xhr.removeEventListener('progress', onDownProgress);
                                if (reqBody !== null && xhr.upload) {
                                    xhr.upload.removeEventListener('progress', onUpProgress);
                                }
                            }
                            // Finally, abort the in-flight request.
                            xhr.abort();
                        });
                    }));
                };
                return HttpXhrBackend;
            }());
            HttpXhrBackend.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
            ];
            /** @nocollapse */
            HttpXhrBackend.ctorParameters = function () { return [
                { type: XhrFactory }
            ]; };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @type {?} */
            var XSRF_COOKIE_NAME = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('XSRF_COOKIE_NAME');
            /** @type {?} */
            var XSRF_HEADER_NAME = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('XSRF_HEADER_NAME');
            /**
             * Retrieves the current XSRF token to use with the next outgoing request.
             *
             * \@publicApi
             * @abstract
             */
            var HttpXsrfTokenExtractor = /** @class */ (function () {
                function HttpXsrfTokenExtractor() {
                }
                return HttpXsrfTokenExtractor;
            }());
            if (false) { }
            /**
             * `HttpXsrfTokenExtractor` which retrieves the token from a cookie.
             */
            var HttpXsrfCookieExtractor = /** @class */ (function () {
                /**
                 * @param {?} doc
                 * @param {?} platform
                 * @param {?} cookieName
                 */
                function HttpXsrfCookieExtractor(doc, platform, cookieName) {
                    this.doc = doc;
                    this.platform = platform;
                    this.cookieName = cookieName;
                    this.lastCookieString = '';
                    this.lastToken = null;
                    /**
                     * \@internal for testing
                     */
                    this.parseCount = 0;
                }
                /**
                 * @return {?}
                 */
                HttpXsrfCookieExtractor.prototype.getToken = function () {
                    if (this.platform === 'server') {
                        return null;
                    }
                    /** @type {?} */
                    var cookieString = this.doc.cookie || '';
                    if (cookieString !== this.lastCookieString) {
                        this.parseCount++;
                        this.lastToken = Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["ɵparseCookieValue"])(cookieString, this.cookieName);
                        this.lastCookieString = cookieString;
                    }
                    return this.lastToken;
                };
                return HttpXsrfCookieExtractor;
            }());
            HttpXsrfCookieExtractor.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
            ];
            /** @nocollapse */
            HttpXsrfCookieExtractor.ctorParameters = function () { return [
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"],] }] },
                { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] }] },
                { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [XSRF_COOKIE_NAME,] }] }
            ]; };
            if (false) { }
            /**
             * `HttpInterceptor` which adds an XSRF token to eligible outgoing requests.
             */
            var HttpXsrfInterceptor = /** @class */ (function () {
                /**
                 * @param {?} tokenService
                 * @param {?} headerName
                 */
                function HttpXsrfInterceptor(tokenService, headerName) {
                    this.tokenService = tokenService;
                    this.headerName = headerName;
                }
                /**
                 * @param {?} req
                 * @param {?} next
                 * @return {?}
                 */
                HttpXsrfInterceptor.prototype.intercept = function (req, next) {
                    /** @type {?} */
                    var lcUrl = req.url.toLowerCase();
                    // Skip both non-mutating requests and absolute URLs.
                    // Non-mutating requests don't require a token, and absolute URLs require special handling
                    // anyway as the cookie set
                    // on our origin is not the same as the token expected by another origin.
                    if (req.method === 'GET' || req.method === 'HEAD' || lcUrl.startsWith('http://') ||
                        lcUrl.startsWith('https://')) {
                        return next.handle(req);
                    }
                    /** @type {?} */
                    var token = this.tokenService.getToken();
                    // Be careful not to overwrite an existing header of the same name.
                    if (token !== null && !req.headers.has(this.headerName)) {
                        req = req.clone({ headers: req.headers.set(this.headerName, token) });
                    }
                    return next.handle(req);
                };
                return HttpXsrfInterceptor;
            }());
            HttpXsrfInterceptor.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
            ];
            /** @nocollapse */
            HttpXsrfInterceptor.ctorParameters = function () { return [
                { type: HttpXsrfTokenExtractor },
                { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [XSRF_HEADER_NAME,] }] }
            ]; };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * An injectable `HttpHandler` that applies multiple interceptors
             * to a request before passing it to the given `HttpBackend`.
             *
             * The interceptors are loaded lazily from the injector, to allow
             * interceptors to themselves inject classes depending indirectly
             * on `HttpInterceptingHandler` itself.
             * @see `HttpInterceptor`
             */
            var HttpInterceptingHandler = /** @class */ (function () {
                /**
                 * @param {?} backend
                 * @param {?} injector
                 */
                function HttpInterceptingHandler(backend, injector) {
                    this.backend = backend;
                    this.injector = injector;
                    this.chain = null;
                }
                /**
                 * @param {?} req
                 * @return {?}
                 */
                HttpInterceptingHandler.prototype.handle = function (req) {
                    if (this.chain === null) {
                        /** @type {?} */
                        var interceptors = this.injector.get(HTTP_INTERCEPTORS, []);
                        this.chain = interceptors.reduceRight(( /**
                         * @param {?} next
                         * @param {?} interceptor
                         * @return {?}
                         */function (next, interceptor) { return new HttpInterceptorHandler(next, interceptor); }), this.backend);
                    }
                    return this.chain.handle(req);
                };
                return HttpInterceptingHandler;
            }());
            HttpInterceptingHandler.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
            ];
            /** @nocollapse */
            HttpInterceptingHandler.ctorParameters = function () { return [
                { type: HttpBackend },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }
            ]; };
            if (false) { }
            /**
             * Constructs an `HttpHandler` that applies interceptors
             * to a request before passing it to the given `HttpBackend`.
             *
             * Use as a factory function within `HttpClientModule`.
             *
             *
             * @param {?} backend
             * @param {?=} interceptors
             * @return {?}
             */
            function interceptingHandler(backend, interceptors) {
                if (interceptors === void 0) { interceptors = []; }
                if (!interceptors) {
                    return backend;
                }
                return interceptors.reduceRight(( /**
                 * @param {?} next
                 * @param {?} interceptor
                 * @return {?}
                 */function (next, interceptor) { return new HttpInterceptorHandler(next, interceptor); }), backend);
            }
            /**
             * Factory function that determines where to store JSONP callbacks.
             *
             * Ordinarily JSONP callbacks are stored on the `window` object, but this may not exist
             * in test environments. In that case, callbacks are stored on an anonymous object instead.
             *
             *
             * @return {?}
             */
            function jsonpCallbackContext() {
                if (typeof window === 'object') {
                    return window;
                }
                return {};
            }
            /**
             * Configures XSRF protection support for outgoing requests.
             *
             * For a server that supports a cookie-based XSRF protection system,
             * use directly to configure XSRF protection with the correct
             * cookie and header names.
             *
             * If no names are supplied, the default cookie name is `XSRF-TOKEN`
             * and the default header name is `X-XSRF-TOKEN`.
             *
             * \@publicApi
             */
            var HttpClientXsrfModule = /** @class */ (function () {
                function HttpClientXsrfModule() {
                }
                /**
                 * Disable the default XSRF protection.
                 * @return {?}
                 */
                HttpClientXsrfModule.disable = function () {
                    return {
                        ngModule: HttpClientXsrfModule,
                        providers: [
                            { provide: HttpXsrfInterceptor, useClass: NoopInterceptor },
                        ],
                    };
                };
                /**
                 * Configure XSRF protection.
                 * @param {?=} options An object that can specify either or both
                 * cookie name or header name.
                 * - Cookie name default is `XSRF-TOKEN`.
                 * - Header name default is `X-XSRF-TOKEN`.
                 *
                 * @return {?}
                 */
                HttpClientXsrfModule.withOptions = function (options) {
                    if (options === void 0) { options = {}; }
                    return {
                        ngModule: HttpClientXsrfModule,
                        providers: [
                            options.cookieName ? { provide: XSRF_COOKIE_NAME, useValue: options.cookieName } : [],
                            options.headerName ? { provide: XSRF_HEADER_NAME, useValue: options.headerName } : [],
                        ],
                    };
                };
                return HttpClientXsrfModule;
            }());
            HttpClientXsrfModule.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                            providers: [
                                HttpXsrfInterceptor,
                                { provide: HTTP_INTERCEPTORS, useExisting: HttpXsrfInterceptor, multi: true },
                                { provide: HttpXsrfTokenExtractor, useClass: HttpXsrfCookieExtractor },
                                { provide: XSRF_COOKIE_NAME, useValue: 'XSRF-TOKEN' },
                                { provide: XSRF_HEADER_NAME, useValue: 'X-XSRF-TOKEN' },
                            ],
                        },] }
            ];
            /**
             * Configures the [dependency injector](guide/glossary#injector) for `HttpClient`
             * with supporting services for XSRF. Automatically imported by `HttpClientModule`.
             *
             * You can add interceptors to the chain behind `HttpClient` by binding them to the
             * multiprovider for built-in [DI token](guide/glossary#di-token) `HTTP_INTERCEPTORS`.
             *
             * \@publicApi
             */
            var HttpClientModule = /** @class */ (function () {
                function HttpClientModule() {
                }
                return HttpClientModule;
            }());
            HttpClientModule.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                            /**
                             * Optional configuration for XSRF protection.
                             */
                            imports: [
                                HttpClientXsrfModule.withOptions({
                                    cookieName: 'XSRF-TOKEN',
                                    headerName: 'X-XSRF-TOKEN',
                                }),
                            ],
                            /**
                             * Configures the [dependency injector](guide/glossary#injector) where it is imported
                             * with supporting services for HTTP communications.
                             */
                            providers: [
                                HttpClient,
                                { provide: HttpHandler, useClass: HttpInterceptingHandler },
                                HttpXhrBackend,
                                { provide: HttpBackend, useExisting: HttpXhrBackend },
                                BrowserXhr,
                                { provide: XhrFactory, useExisting: BrowserXhr },
                            ],
                        },] }
            ];
            /**
             * Configures the [dependency injector](guide/glossary#injector) for `HttpClient`
             * with supporting services for JSONP.
             * Without this module, Jsonp requests reach the backend
             * with method JSONP, where they are rejected.
             *
             * You can add interceptors to the chain behind `HttpClient` by binding them to the
             * multiprovider for built-in [DI token](guide/glossary#di-token) `HTTP_INTERCEPTORS`.
             *
             * \@publicApi
             */
            var HttpClientJsonpModule = /** @class */ (function () {
                function HttpClientJsonpModule() {
                }
                return HttpClientJsonpModule;
            }());
            HttpClientJsonpModule.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                            providers: [
                                JsonpClientBackend,
                                { provide: JsonpCallbackContext, useFactory: jsonpCallbackContext },
                                { provide: HTTP_INTERCEPTORS, useClass: JsonpInterceptor, multi: true },
                            ],
                        },] }
            ];
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Generated bundle index. Do not edit.
             */
            //# sourceMappingURL=http.js.map
            /***/ 
        }),
        /***/ "./node_modules/@angular/forms/fesm2015/forms.js": 
        /*!*******************************************************!*\
          !*** ./node_modules/@angular/forms/fesm2015/forms.js ***!
          \*******************************************************/
        /*! exports provided: ɵangular_packages_forms_forms_d, ɵInternalFormsSharedModule, ɵangular_packages_forms_forms_c, ɵangular_packages_forms_forms_a, ɵangular_packages_forms_forms_b, ɵangular_packages_forms_forms_e, ɵangular_packages_forms_forms_f, ɵangular_packages_forms_forms_g, ɵangular_packages_forms_forms_h, ɵangular_packages_forms_forms_i, ɵangular_packages_forms_forms_j, ɵangular_packages_forms_forms_k, ɵangular_packages_forms_forms_l, ɵangular_packages_forms_forms_z, ɵNgNoValidate, ɵangular_packages_forms_forms_m, ɵangular_packages_forms_forms_n, ɵangular_packages_forms_forms_o, ɵangular_packages_forms_forms_p, ɵangular_packages_forms_forms_q, ɵangular_packages_forms_forms_r, ɵangular_packages_forms_forms_s, ɵangular_packages_forms_forms_t, ɵangular_packages_forms_forms_v, ɵangular_packages_forms_forms_u, ɵangular_packages_forms_forms_w, ɵangular_packages_forms_forms_y, ɵNgSelectMultipleOption, ɵangular_packages_forms_forms_x, ɵangular_packages_forms_forms_bb, ɵangular_packages_forms_forms_bc, ɵangular_packages_forms_forms_be, ɵangular_packages_forms_forms_bd, ɵangular_packages_forms_forms_bf, ɵangular_packages_forms_forms_ba, AbstractControlDirective, AbstractFormGroupDirective, CheckboxControlValueAccessor, ControlContainer, NG_VALUE_ACCESSOR, COMPOSITION_BUFFER_MODE, DefaultValueAccessor, NgControl, NgControlStatus, NgControlStatusGroup, NgForm, NgFormSelectorWarning, NgModel, NgModelGroup, NumberValueAccessor, RadioControlValueAccessor, RangeValueAccessor, FormControlDirective, FormControlName, FormGroupDirective, FormArrayName, FormGroupName, NgSelectOption, SelectControlValueAccessor, SelectMultipleControlValueAccessor, CheckboxRequiredValidator, EmailValidator, MaxLengthValidator, MinLengthValidator, PatternValidator, RequiredValidator, FormBuilder, AbstractControl, FormArray, FormControl, FormGroup, NG_ASYNC_VALIDATORS, NG_VALIDATORS, Validators, VERSION, FormsModule, ReactiveFormsModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_d", function () { return ɵInternalFormsSharedModule; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵInternalFormsSharedModule", function () { return ɵInternalFormsSharedModule; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_c", function () { return REACTIVE_DRIVEN_DIRECTIVES; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_a", function () { return SHARED_FORM_DIRECTIVES; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_b", function () { return TEMPLATE_DRIVEN_DIRECTIVES; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_e", function () { return CHECKBOX_VALUE_ACCESSOR; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_f", function () { return DEFAULT_VALUE_ACCESSOR; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_g", function () { return AbstractControlStatus; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_h", function () { return ngControlStatusHost; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_i", function () { return formDirectiveProvider; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_j", function () { return NG_FORM_SELECTOR_WARNING; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_k", function () { return formControlBinding; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_l", function () { return modelGroupProvider; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_z", function () { return ɵNgNoValidate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵNgNoValidate", function () { return ɵNgNoValidate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_m", function () { return NUMBER_VALUE_ACCESSOR; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_n", function () { return RADIO_VALUE_ACCESSOR; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_o", function () { return RadioControlRegistry; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_p", function () { return RANGE_VALUE_ACCESSOR; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_q", function () { return NG_MODEL_WITH_FORM_CONTROL_WARNING; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_r", function () { return formControlBinding$1; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_s", function () { return controlNameBinding; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_t", function () { return formDirectiveProvider$1; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_v", function () { return formArrayNameProvider; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_u", function () { return formGroupNameProvider; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_w", function () { return SELECT_VALUE_ACCESSOR; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_y", function () { return ɵNgSelectMultipleOption; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵNgSelectMultipleOption", function () { return ɵNgSelectMultipleOption; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_x", function () { return SELECT_MULTIPLE_VALUE_ACCESSOR; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_bb", function () { return CHECKBOX_REQUIRED_VALIDATOR; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_bc", function () { return EMAIL_VALIDATOR; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_be", function () { return MAX_LENGTH_VALIDATOR; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_bd", function () { return MIN_LENGTH_VALIDATOR; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_bf", function () { return PATTERN_VALIDATOR; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_ba", function () { return REQUIRED_VALIDATOR; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractControlDirective", function () { return AbstractControlDirective; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractFormGroupDirective", function () { return AbstractFormGroupDirective; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxControlValueAccessor", function () { return CheckboxControlValueAccessor; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlContainer", function () { return ControlContainer; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NG_VALUE_ACCESSOR", function () { return NG_VALUE_ACCESSOR; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPOSITION_BUFFER_MODE", function () { return COMPOSITION_BUFFER_MODE; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultValueAccessor", function () { return DefaultValueAccessor; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgControl", function () { return NgControl; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgControlStatus", function () { return NgControlStatus; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgControlStatusGroup", function () { return NgControlStatusGroup; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgForm", function () { return NgForm; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgFormSelectorWarning", function () { return NgFormSelectorWarning; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgModel", function () { return NgModel; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgModelGroup", function () { return NgModelGroup; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberValueAccessor", function () { return NumberValueAccessor; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioControlValueAccessor", function () { return RadioControlValueAccessor; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangeValueAccessor", function () { return RangeValueAccessor; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormControlDirective", function () { return FormControlDirective; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormControlName", function () { return FormControlName; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormGroupDirective", function () { return FormGroupDirective; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormArrayName", function () { return FormArrayName; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormGroupName", function () { return FormGroupName; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgSelectOption", function () { return NgSelectOption; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectControlValueAccessor", function () { return SelectControlValueAccessor; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectMultipleControlValueAccessor", function () { return SelectMultipleControlValueAccessor; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxRequiredValidator", function () { return CheckboxRequiredValidator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailValidator", function () { return EmailValidator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaxLengthValidator", function () { return MaxLengthValidator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinLengthValidator", function () { return MinLengthValidator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatternValidator", function () { return PatternValidator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequiredValidator", function () { return RequiredValidator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormBuilder", function () { return FormBuilder; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractControl", function () { return AbstractControl; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormArray", function () { return FormArray; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormControl", function () { return FormControl; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormGroup", function () { return FormGroup; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NG_ASYNC_VALIDATORS", function () { return NG_ASYNC_VALIDATORS; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NG_VALIDATORS", function () { return NG_VALIDATORS; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Validators", function () { return Validators; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION", function () { return VERSION; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsModule", function () { return FormsModule; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactiveFormsModule", function () { return ReactiveFormsModule; });
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /**
             * @license Angular v8.2.10
             * (c) 2010-2019 Google LLC. https://angular.io/
             * License: MIT
             */
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * \@description
             * Defines an interface that acts as a bridge between the Angular forms API and a
             * native element in the DOM.
             *
             * Implement this interface to create a custom form control directive
             * that integrates with Angular forms.
             *
             * @see DefaultValueAccessor
             *
             * \@publicApi
             * @record
             */
            function ControlValueAccessor() { }
            if (false) { }
            /**
             * Used to provide a `ControlValueAccessor` for form controls.
             *
             * See `DefaultValueAccessor` for how to implement one.
             *
             * \@publicApi
             * @type {?}
             */
            var NG_VALUE_ACCESSOR = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('NgValueAccessor');
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @type {?} */
            var CHECKBOX_VALUE_ACCESSOR = {
                provide: NG_VALUE_ACCESSOR,
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                 * @return {?}
                 */function () { return CheckboxControlValueAccessor; })),
                multi: true,
            };
            /**
             * \@description
             * A `ControlValueAccessor` for writing a value and listening to changes on a checkbox input
             * element.
             *
             * \@usageNotes
             *
             * ### Using a checkbox with a reactive form.
             *
             * The following example shows how to use a checkbox with a reactive form.
             *
             * ```ts
             * const rememberLoginControl = new FormControl();
             * ```
             *
             * ```
             * <input type="checkbox" [formControl]="rememberLoginControl">
             * ```
             *
             * \@ngModule ReactiveFormsModule
             * \@ngModule FormsModule
             * \@publicApi
             */
            var CheckboxControlValueAccessor = /** @class */ (function () {
                /**
                 * @param {?} _renderer
                 * @param {?} _elementRef
                 */
                function CheckboxControlValueAccessor(_renderer, _elementRef) {
                    this._renderer = _renderer;
                    this._elementRef = _elementRef;
                    /**
                     * \@description
                     * The registered callback function called when a change event occurs on the input element.
                     */
                    this.onChange = ( /**
                     * @param {?} _
                     * @return {?}
                     */function (_) { });
                    /**
                     * \@description
                     * The registered callback function called when a blur event occurs on the input element.
                     */
                    this.onTouched = ( /**
                     * @return {?}
                     */function () { });
                }
                /**
                 * Sets the "checked" property on the input element.
                 *
                 * @param {?} value The checked value
                 * @return {?}
                 */
                CheckboxControlValueAccessor.prototype.writeValue = function (value) {
                    this._renderer.setProperty(this._elementRef.nativeElement, 'checked', value);
                };
                /**
                 * \@description
                 * Registers a function called when the control value changes.
                 *
                 * @param {?} fn The callback function
                 * @return {?}
                 */
                CheckboxControlValueAccessor.prototype.registerOnChange = function (fn) { this.onChange = fn; };
                /**
                 * \@description
                 * Registers a function called when the control is touched.
                 *
                 * @param {?} fn The callback function
                 * @return {?}
                 */
                CheckboxControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
                /**
                 * Sets the "disabled" property on the input element.
                 *
                 * @param {?} isDisabled The disabled value
                 * @return {?}
                 */
                CheckboxControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
                    this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
                };
                return CheckboxControlValueAccessor;
            }());
            CheckboxControlValueAccessor.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: 'input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]',
                            host: { '(change)': 'onChange($event.target.checked)', '(blur)': 'onTouched()' },
                            providers: [CHECKBOX_VALUE_ACCESSOR]
                        },] }
            ];
            /** @nocollapse */
            CheckboxControlValueAccessor.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
            ]; };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @type {?} */
            var DEFAULT_VALUE_ACCESSOR = {
                provide: NG_VALUE_ACCESSOR,
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                 * @return {?}
                 */function () { return DefaultValueAccessor; })),
                multi: true
            };
            /**
             * We must check whether the agent is Android because composition events
             * behave differently between iOS and Android.
             * @return {?}
             */
            function _isAndroid() {
                /** @type {?} */
                var userAgent = Object(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["ɵgetDOM"])() ? Object(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["ɵgetDOM"])().getUserAgent() : '';
                return /android (\d+)/.test(userAgent.toLowerCase());
            }
            /**
             * \@description
             * Provide this token to control if form directives buffer IME input until
             * the "compositionend" event occurs.
             * \@publicApi
             * @type {?}
             */
            var COMPOSITION_BUFFER_MODE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('CompositionEventMode');
            /**
             * \@description
             * The default `ControlValueAccessor` for writing a value and listening to changes on input
             * elements. The accessor is used by the `FormControlDirective`, `FormControlName`, and
             * `NgModel` directives.
             *
             * \@usageNotes
             *
             * ### Using the default value accessor
             *
             * The following example shows how to use an input element that activates the default value accessor
             * (in this case, a text field).
             *
             * ```ts
             * const firstNameControl = new FormControl();
             * ```
             *
             * ```
             * <input type="text" [formControl]="firstNameControl">
             * ```
             *
             * \@ngModule ReactiveFormsModule
             * \@ngModule FormsModule
             * \@publicApi
             */
            var DefaultValueAccessor = /** @class */ (function () {
                /**
                 * @param {?} _renderer
                 * @param {?} _elementRef
                 * @param {?} _compositionMode
                 */
                function DefaultValueAccessor(_renderer, _elementRef, _compositionMode) {
                    this._renderer = _renderer;
                    this._elementRef = _elementRef;
                    this._compositionMode = _compositionMode;
                    /**
                     * \@description
                     * The registered callback function called when an input event occurs on the input element.
                     */
                    this.onChange = ( /**
                     * @param {?} _
                     * @return {?}
                     */function (_) { });
                    /**
                     * \@description
                     * The registered callback function called when a blur event occurs on the input element.
                     */
                    this.onTouched = ( /**
                     * @return {?}
                     */function () { });
                    /**
                     * Whether the user is creating a composition string (IME events).
                     */
                    this._composing = false;
                    if (this._compositionMode == null) {
                        this._compositionMode = !_isAndroid();
                    }
                }
                /**
                 * Sets the "value" property on the input element.
                 *
                 * @param {?} value The checked value
                 * @return {?}
                 */
                DefaultValueAccessor.prototype.writeValue = function (value) {
                    /** @type {?} */
                    var normalizedValue = value == null ? '' : value;
                    this._renderer.setProperty(this._elementRef.nativeElement, 'value', normalizedValue);
                };
                /**
                 * \@description
                 * Registers a function called when the control value changes.
                 *
                 * @param {?} fn The callback function
                 * @return {?}
                 */
                DefaultValueAccessor.prototype.registerOnChange = function (fn) { this.onChange = fn; };
                /**
                 * \@description
                 * Registers a function called when the control is touched.
                 *
                 * @param {?} fn The callback function
                 * @return {?}
                 */
                DefaultValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
                /**
                 * Sets the "disabled" property on the input element.
                 *
                 * @param {?} isDisabled The disabled value
                 * @return {?}
                 */
                DefaultValueAccessor.prototype.setDisabledState = function (isDisabled) {
                    this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
                };
                /**
                 * \@internal
                 * @param {?} value
                 * @return {?}
                 */
                DefaultValueAccessor.prototype._handleInput = function (value) {
                    if (!this._compositionMode || (this._compositionMode && !this._composing)) {
                        this.onChange(value);
                    }
                };
                /**
                 * \@internal
                 * @return {?}
                 */
                DefaultValueAccessor.prototype._compositionStart = function () { this._composing = true; };
                /**
                 * \@internal
                 * @param {?} value
                 * @return {?}
                 */
                DefaultValueAccessor.prototype._compositionEnd = function (value) {
                    this._composing = false;
                    this._compositionMode && this.onChange(value);
                };
                return DefaultValueAccessor;
            }());
            DefaultValueAccessor.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: 'input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]',
                            // TODO: vsavkin replace the above selector with the one below it once
                            // https://github.com/angular/angular/issues/3011 is implemented
                            // selector: '[ngModel],[formControl],[formControlName]',
                            host: {
                                '(input)': '$any(this)._handleInput($event.target.value)',
                                '(blur)': 'onTouched()',
                                '(compositionstart)': '$any(this)._compositionStart()',
                                '(compositionend)': '$any(this)._compositionEnd($event.target.value)'
                            },
                            providers: [DEFAULT_VALUE_ACCESSOR]
                        },] }
            ];
            /** @nocollapse */
            DefaultValueAccessor.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
                { type: Boolean, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [COMPOSITION_BUFFER_MODE,] }] }
            ]; };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * @license
             * Copyright Google Inc. All Rights Reserved.
             *
             * Use of this source code is governed by an MIT-style license that can be
             * found in the LICENSE file at https://angular.io/license
             */
            /**
             * \@description
             * Base class for control directives.
             *
             * This class is only used internally in the `ReactiveFormsModule` and the `FormsModule`.
             *
             * \@publicApi
             * @abstract
             */
            var AbstractControlDirective = /** @class */ (function () {
                function AbstractControlDirective() {
                }
                Object.defineProperty(AbstractControlDirective.prototype, "value", {
                    /**
                     * \@description
                     * Reports the value of the control if it is present, otherwise null.
                     * @return {?}
                     */
                    get: function () { return this.control ? this.control.value : null; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractControlDirective.prototype, "valid", {
                    /**
                     * \@description
                     * Reports whether the control is valid. A control is considered valid if no
                     * validation errors exist with the current value.
                     * If the control is not present, null is returned.
                     * @return {?}
                     */
                    get: function () { return this.control ? this.control.valid : null; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractControlDirective.prototype, "invalid", {
                    /**
                     * \@description
                     * Reports whether the control is invalid, meaning that an error exists in the input value.
                     * If the control is not present, null is returned.
                     * @return {?}
                     */
                    get: function () { return this.control ? this.control.invalid : null; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractControlDirective.prototype, "pending", {
                    /**
                     * \@description
                     * Reports whether a control is pending, meaning that that async validation is occurring and
                     * errors are not yet available for the input value. If the control is not present, null is
                     * returned.
                     * @return {?}
                     */
                    get: function () { return this.control ? this.control.pending : null; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractControlDirective.prototype, "disabled", {
                    /**
                     * \@description
                     * Reports whether the control is disabled, meaning that the control is disabled
                     * in the UI and is exempt from validation checks and excluded from aggregate
                     * values of ancestor controls. If the control is not present, null is returned.
                     * @return {?}
                     */
                    get: function () { return this.control ? this.control.disabled : null; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractControlDirective.prototype, "enabled", {
                    /**
                     * \@description
                     * Reports whether the control is enabled, meaning that the control is included in ancestor
                     * calculations of validity or value. If the control is not present, null is returned.
                     * @return {?}
                     */
                    get: function () { return this.control ? this.control.enabled : null; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractControlDirective.prototype, "errors", {
                    /**
                     * \@description
                     * Reports the control's validation errors. If the control is not present, null is returned.
                     * @return {?}
                     */
                    get: function () { return this.control ? this.control.errors : null; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractControlDirective.prototype, "pristine", {
                    /**
                     * \@description
                     * Reports whether the control is pristine, meaning that the user has not yet changed
                     * the value in the UI. If the control is not present, null is returned.
                     * @return {?}
                     */
                    get: function () { return this.control ? this.control.pristine : null; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractControlDirective.prototype, "dirty", {
                    /**
                     * \@description
                     * Reports whether the control is dirty, meaning that the user has changed
                     * the value in the UI. If the control is not present, null is returned.
                     * @return {?}
                     */
                    get: function () { return this.control ? this.control.dirty : null; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractControlDirective.prototype, "touched", {
                    /**
                     * \@description
                     * Reports whether the control is touched, meaning that the user has triggered
                     * a `blur` event on it. If the control is not present, null is returned.
                     * @return {?}
                     */
                    get: function () { return this.control ? this.control.touched : null; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractControlDirective.prototype, "status", {
                    /**
                     * \@description
                     * Reports the validation status of the control. Possible values include:
                     * 'VALID', 'INVALID', 'DISABLED', and 'PENDING'.
                     * If the control is not present, null is returned.
                     * @return {?}
                     */
                    get: function () { return this.control ? this.control.status : null; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractControlDirective.prototype, "untouched", {
                    /**
                     * \@description
                     * Reports whether the control is untouched, meaning that the user has not yet triggered
                     * a `blur` event on it. If the control is not present, null is returned.
                     * @return {?}
                     */
                    get: function () { return this.control ? this.control.untouched : null; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractControlDirective.prototype, "statusChanges", {
                    /**
                     * \@description
                     * Returns a multicasting observable that emits a validation status whenever it is
                     * calculated for the control. If the control is not present, null is returned.
                     * @return {?}
                     */
                    get: function () {
                        return this.control ? this.control.statusChanges : null;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractControlDirective.prototype, "valueChanges", {
                    /**
                     * \@description
                     * Returns a multicasting observable of value changes for the control that emits every time the
                     * value of the control changes in the UI or programmatically.
                     * If the control is not present, null is returned.
                     * @return {?}
                     */
                    get: function () {
                        return this.control ? this.control.valueChanges : null;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractControlDirective.prototype, "path", {
                    /**
                     * \@description
                     * Returns an array that represents the path from the top-level form to this control.
                     * Each index is the string name of the control on that level.
                     * @return {?}
                     */
                    get: function () { return null; },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * \@description
                 * Resets the control with the provided value if the control is present.
                 * @param {?=} value
                 * @return {?}
                 */
                AbstractControlDirective.prototype.reset = function (value) {
                    if (value === void 0) { value = undefined; }
                    if (this.control)
                        this.control.reset(value);
                };
                /**
                 * \@description
                 * Reports whether the control with the given path has the error specified.
                 *
                 * \@usageNotes
                 * For example, for the following `FormGroup`:
                 *
                 * ```
                 * form = new FormGroup({
                 *   address: new FormGroup({ street: new FormControl() })
                 * });
                 * ```
                 *
                 * The path to the 'street' control from the root form would be 'address' -> 'street'.
                 *
                 * It can be provided to this method in one of two formats:
                 *
                 * 1. An array of string control names, e.g. `['address', 'street']`
                 * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
                 *
                 * If no path is given, this method checks for the error on the current control.
                 *
                 * @param {?} errorCode The code of the error to check
                 * @param {?=} path A list of control names that designates how to move from the current control
                 * to the control that should be queried for errors.
                 *
                 * @return {?} whether the given error is present in the control at the given path.
                 *
                 * If the control is not present, false is returned.
                 */
                AbstractControlDirective.prototype.hasError = function (errorCode, path) {
                    return this.control ? this.control.hasError(errorCode, path) : false;
                };
                /**
                 * \@description
                 * Reports error data for the control with the given path.
                 *
                 * \@usageNotes
                 * For example, for the following `FormGroup`:
                 *
                 * ```
                 * form = new FormGroup({
                 *   address: new FormGroup({ street: new FormControl() })
                 * });
                 * ```
                 *
                 * The path to the 'street' control from the root form would be 'address' -> 'street'.
                 *
                 * It can be provided to this method in one of two formats:
                 *
                 * 1. An array of string control names, e.g. `['address', 'street']`
                 * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
                 *
                 * @param {?} errorCode The code of the error to check
                 * @param {?=} path A list of control names that designates how to move from the current control
                 * to the control that should be queried for errors.
                 *
                 * @return {?} error data for that particular error. If the control or error is not present,
                 * null is returned.
                 */
                AbstractControlDirective.prototype.getError = function (errorCode, path) {
                    return this.control ? this.control.getError(errorCode, path) : null;
                };
                return AbstractControlDirective;
            }());
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * \@description
             * A base class for directives that contain multiple registered instances of `NgControl`.
             * Only used by the forms module.
             *
             * \@publicApi
             * @abstract
             */
            var ControlContainer = /** @class */ (function (_super) {
                __extends(ControlContainer, _super);
                function ControlContainer() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                Object.defineProperty(ControlContainer.prototype, "formDirective", {
                    /**
                     * \@description
                     * The top-level form directive for the control.
                     * @return {?}
                     */
                    get: function () { return null; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ControlContainer.prototype, "path", {
                    /**
                     * \@description
                     * The path to this group.
                     * @return {?}
                     */
                    get: function () { return null; },
                    enumerable: true,
                    configurable: true
                });
                return ControlContainer;
            }(AbstractControlDirective));
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * @return {?}
             */
            function unimplemented() {
                throw new Error('unimplemented');
            }
            /**
             * \@description
             * A base class that all control `FormControl`-based directives extend. It binds a `FormControl`
             * object to a DOM element.
             *
             * \@publicApi
             * @abstract
             */
            var NgControl = /** @class */ (function (_super) {
                __extends(NgControl, _super);
                function NgControl() {
                    var _this = _super.apply(this, arguments) || this;
                    /**
                     * \@description
                     * The parent form for the control.
                     *
                     * \@internal
                     */
                    _this._parent = null;
                    /**
                     * \@description
                     * The name for the control
                     */
                    _this.name = null;
                    /**
                     * \@description
                     * The value accessor for the control
                     */
                    _this.valueAccessor = null;
                    /**
                     * \@description
                     * The uncomposed array of synchronous validators for the control
                     *
                     * \@internal
                     */
                    _this._rawValidators = [];
                    /**
                     * \@description
                     * The uncomposed array of async validators for the control
                     *
                     * \@internal
                     */
                    _this._rawAsyncValidators = [];
                    return _this;
                }
                Object.defineProperty(NgControl.prototype, "validator", {
                    /**
                     * \@description
                     * The registered synchronous validator function for the control
                     *
                     * @throws An exception that this method is not implemented
                     * @return {?}
                     */
                    get: function () { return ( /** @type {?} */(unimplemented())); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(NgControl.prototype, "asyncValidator", {
                    /**
                     * \@description
                     * The registered async validator function for the control
                     *
                     * @throws An exception that this method is not implemented
                     * @return {?}
                     */
                    get: function () { return ( /** @type {?} */(unimplemented())); },
                    enumerable: true,
                    configurable: true
                });
                return NgControl;
            }(AbstractControlDirective));
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var AbstractControlStatus = /** @class */ (function () {
                /**
                 * @param {?} cd
                 */
                function AbstractControlStatus(cd) {
                    this._cd = cd;
                }
                Object.defineProperty(AbstractControlStatus.prototype, "ngClassUntouched", {
                    /**
                     * @return {?}
                     */
                    get: function () { return this._cd.control ? this._cd.control.untouched : false; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractControlStatus.prototype, "ngClassTouched", {
                    /**
                     * @return {?}
                     */
                    get: function () { return this._cd.control ? this._cd.control.touched : false; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractControlStatus.prototype, "ngClassPristine", {
                    /**
                     * @return {?}
                     */
                    get: function () { return this._cd.control ? this._cd.control.pristine : false; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractControlStatus.prototype, "ngClassDirty", {
                    /**
                     * @return {?}
                     */
                    get: function () { return this._cd.control ? this._cd.control.dirty : false; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractControlStatus.prototype, "ngClassValid", {
                    /**
                     * @return {?}
                     */
                    get: function () { return this._cd.control ? this._cd.control.valid : false; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractControlStatus.prototype, "ngClassInvalid", {
                    /**
                     * @return {?}
                     */
                    get: function () { return this._cd.control ? this._cd.control.invalid : false; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractControlStatus.prototype, "ngClassPending", {
                    /**
                     * @return {?}
                     */
                    get: function () { return this._cd.control ? this._cd.control.pending : false; },
                    enumerable: true,
                    configurable: true
                });
                return AbstractControlStatus;
            }());
            if (false) { }
            /** @type {?} */
            var ngControlStatusHost = {
                '[class.ng-untouched]': 'ngClassUntouched',
                '[class.ng-touched]': 'ngClassTouched',
                '[class.ng-pristine]': 'ngClassPristine',
                '[class.ng-dirty]': 'ngClassDirty',
                '[class.ng-valid]': 'ngClassValid',
                '[class.ng-invalid]': 'ngClassInvalid',
                '[class.ng-pending]': 'ngClassPending',
            };
            /**
             * \@description
             * Directive automatically applied to Angular form controls that sets CSS classes
             * based on control status.
             *
             * \@usageNotes
             *
             * ### CSS classes applied
             *
             * The following classes are applied as the properties become true:
             *
             * * ng-valid
             * * ng-invalid
             * * ng-pending
             * * ng-pristine
             * * ng-dirty
             * * ng-untouched
             * * ng-touched
             *
             * \@ngModule ReactiveFormsModule
             * \@ngModule FormsModule
             * \@publicApi
             */
            var NgControlStatus = /** @class */ (function (_super) {
                __extends(NgControlStatus, _super);
                /**
                 * @param {?} cd
                 */
                function NgControlStatus(cd) {
                    return _super.call(this, cd) || this;
                }
                return NgControlStatus;
            }(AbstractControlStatus));
            NgControlStatus.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[formControlName],[ngModel],[formControl]', host: ngControlStatusHost },] }
            ];
            /** @nocollapse */
            NgControlStatus.ctorParameters = function () { return [
                { type: NgControl, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }] }
            ]; };
            /**
             * \@description
             * Directive automatically applied to Angular form groups that sets CSS classes
             * based on control status (valid/invalid/dirty/etc).
             *
             * @see `NgControlStatus`
             *
             * \@ngModule ReactiveFormsModule
             * \@ngModule FormsModule
             * \@publicApi
             */
            var NgControlStatusGroup = /** @class */ (function (_super) {
                __extends(NgControlStatusGroup, _super);
                /**
                 * @param {?} cd
                 */
                function NgControlStatusGroup(cd) {
                    return _super.call(this, cd) || this;
                }
                return NgControlStatusGroup;
            }(AbstractControlStatus));
            NgControlStatusGroup.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: '[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]',
                            host: ngControlStatusHost
                        },] }
            ];
            /** @nocollapse */
            NgControlStatusGroup.ctorParameters = function () { return [
                { type: ControlContainer, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }] }
            ]; };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * @param {?} value
             * @return {?}
             */
            function isEmptyInputValue(value) {
                // we don't check for string here so it also works with arrays
                return value == null || value.length === 0;
            }
            /**
             * \@description
             * An `InjectionToken` for registering additional synchronous validators used with `AbstractControl`s.
             *
             * @see `NG_ASYNC_VALIDATORS`
             *
             * \@usageNotes
             *
             * ### Providing a custom validator
             *
             * The following example registers a custom validator directive. Adding the validator to the
             * existing collection of validators requires the `multi: true` option.
             *
             * ```typescript
             * \@Directive({
             *   selector: '[customValidator]',
             *   providers: [{provide: NG_VALIDATORS, useExisting: CustomValidatorDirective, multi: true}]
             * })
             * class CustomValidatorDirective implements Validator {
             *   validate(control: AbstractControl): ValidationErrors | null {
             *     return { 'custom': true };
             *   }
             * }
             * ```
             *
             * \@publicApi
             * @type {?}
             */
            var NG_VALIDATORS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('NgValidators');
            /**
             * \@description
             * An `InjectionToken` for registering additional asynchronous validators used with `AbstractControl`s.
             *
             * @see `NG_VALIDATORS`
             *
             * \@publicApi
             * @type {?}
             */
            var NG_ASYNC_VALIDATORS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('NgAsyncValidators');
            /**
             * A regular expression that matches valid e-mail addresses.
             *
             * At a high level, this regexp matches e-mail addresses of the format `local-part\@tld`, where:
             * - `local-part` consists of one or more of the allowed characters (alphanumeric and some
             *   punctuation symbols).
             * - `local-part` cannot begin or end with a period (`.`).
             * - `local-part` cannot be longer than 64 characters.
             * - `tld` consists of one or more `labels` separated by periods (`.`). For example `localhost` or
             *   `foo.com`.
             * - A `label` consists of one or more of the allowed characters (alphanumeric, dashes (`-`) and
             *   periods (`.`)).
             * - A `label` cannot begin or end with a dash (`-`) or a period (`.`).
             * - A `label` cannot be longer than 63 characters.
             * - The whole address cannot be longer than 254 characters.
             *
             * ## Implementation background
             *
             * This regexp was ported over from AngularJS (see there for git history):
             * https://github.com/angular/angular.js/blob/c133ef836/src/ng/directive/input.js#L27
             * It is based on the
             * [WHATWG version](https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address) with
             * some enhancements to incorporate more RFC rules (such as rules related to domain names and the
             * lengths of different parts of the address). The main differences from the WHATWG version are:
             *   - Disallow `local-part` to begin or end with a period (`.`).
             *   - Disallow `local-part` length to exceed 64 characters.
             *   - Disallow total address length to exceed 254 characters.
             *
             * See [this commit](https://github.com/angular/angular.js/commit/f3f5cf72e) for more details.
             * @type {?}
             */
            var EMAIL_REGEXP = /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
            /**
             * \@description
             * Provides a set of built-in validators that can be used by form controls.
             *
             * A validator is a function that processes a `FormControl` or collection of
             * controls and returns an error map or null. A null map means that validation has passed.
             *
             * @see [Form Validation](/guide/form-validation)
             *
             * \@publicApi
             */
            var Validators = /** @class */ (function () {
                function Validators() {
                }
                /**
                 * \@description
                 * Validator that requires the control's value to be greater than or equal to the provided number.
                 * The validator exists only as a function and not as a directive.
                 *
                 * \@usageNotes
                 *
                 * ### Validate against a minimum of 3
                 *
                 * ```typescript
                 * const control = new FormControl(2, Validators.min(3));
                 *
                 * console.log(control.errors); // {min: {min: 3, actual: 2}}
                 * ```
                 *
                 * @see `updateValueAndValidity()`
                 *
                 * @param {?} min
                 * @return {?} A validator function that returns an error map with the
                 * `min` property if the validation check fails, otherwise `null`.
                 *
                 */
                Validators.min = function (min) {
                    return ( /**
                     * @param {?} control
                     * @return {?}
                     */function (control) {
                        if (isEmptyInputValue(control.value) || isEmptyInputValue(min)) {
                            return null; // don't validate empty values to allow optional controls
                        }
                        /** @type {?} */
                        var value = parseFloat(control.value);
                        // Controls with NaN values after parsing should be treated as not having a
                        // minimum, per the HTML forms spec: https://www.w3.org/TR/html5/forms.html#attr-input-min
                        return !isNaN(value) && value < min ? { 'min': { 'min': min, 'actual': control.value } } : null;
                    });
                };
                /**
                 * \@description
                 * Validator that requires the control's value to be less than or equal to the provided number.
                 * The validator exists only as a function and not as a directive.
                 *
                 * \@usageNotes
                 *
                 * ### Validate against a maximum of 15
                 *
                 * ```typescript
                 * const control = new FormControl(16, Validators.max(15));
                 *
                 * console.log(control.errors); // {max: {max: 15, actual: 16}}
                 * ```
                 *
                 * @see `updateValueAndValidity()`
                 *
                 * @param {?} max
                 * @return {?} A validator function that returns an error map with the
                 * `max` property if the validation check fails, otherwise `null`.
                 *
                 */
                Validators.max = function (max) {
                    return ( /**
                     * @param {?} control
                     * @return {?}
                     */function (control) {
                        if (isEmptyInputValue(control.value) || isEmptyInputValue(max)) {
                            return null; // don't validate empty values to allow optional controls
                        }
                        /** @type {?} */
                        var value = parseFloat(control.value);
                        // Controls with NaN values after parsing should be treated as not having a
                        // maximum, per the HTML forms spec: https://www.w3.org/TR/html5/forms.html#attr-input-max
                        return !isNaN(value) && value > max ? { 'max': { 'max': max, 'actual': control.value } } : null;
                    });
                };
                /**
                 * \@description
                 * Validator that requires the control have a non-empty value.
                 *
                 * \@usageNotes
                 *
                 * ### Validate that the field is non-empty
                 *
                 * ```typescript
                 * const control = new FormControl('', Validators.required);
                 *
                 * console.log(control.errors); // {required: true}
                 * ```
                 *
                 * @see `updateValueAndValidity()`
                 *
                 * @param {?} control
                 * @return {?} An error map with the `required` property
                 * if the validation check fails, otherwise `null`.
                 *
                 */
                Validators.required = function (control) {
                    return isEmptyInputValue(control.value) ? { 'required': true } : null;
                };
                /**
                 * \@description
                 * Validator that requires the control's value be true. This validator is commonly
                 * used for required checkboxes.
                 *
                 * \@usageNotes
                 *
                 * ### Validate that the field value is true
                 *
                 * ```typescript
                 * const control = new FormControl('', Validators.requiredTrue);
                 *
                 * console.log(control.errors); // {required: true}
                 * ```
                 *
                 * @see `updateValueAndValidity()`
                 *
                 * @param {?} control
                 * @return {?} An error map that contains the `required` property
                 * set to `true` if the validation check fails, otherwise `null`.
                 *
                 */
                Validators.requiredTrue = function (control) {
                    return control.value === true ? null : { 'required': true };
                };
                /**
                 * \@description
                 * Validator that requires the control's value pass an email validation test.
                 *
                 * Tests the value using a [regular expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
                 * pattern suitable for common usecases. The pattern is based on the definition of a valid email
                 * address in the [WHATWG HTML specification](https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address)
                 * with some enhancements to incorporate more RFC rules (such as rules related to domain names and
                 * the lengths of different parts of the address).
                 *
                 * The differences from the WHATWG version include:
                 * - Disallow `local-part` (the part before the `\@` symbol) to begin or end with a period (`.`).
                 * - Disallow `local-part` to be longer than 64 characters.
                 * - Disallow the whole address to be longer than 254 characters.
                 *
                 * If this pattern does not satisfy your business needs, you can use `Validators.pattern()` to
                 * validate the value against a different pattern.
                 *
                 * \@usageNotes
                 *
                 * ### Validate that the field matches a valid email pattern
                 *
                 * ```typescript
                 * const control = new FormControl('bad\@', Validators.email);
                 *
                 * console.log(control.errors); // {email: true}
                 * ```
                 *
                 * @see `updateValueAndValidity()`
                 *
                 * @param {?} control
                 * @return {?} An error map with the `email` property
                 * if the validation check fails, otherwise `null`.
                 *
                 */
                Validators.email = function (control) {
                    if (isEmptyInputValue(control.value)) {
                        return null; // don't validate empty values to allow optional controls
                    }
                    return EMAIL_REGEXP.test(control.value) ? null : { 'email': true };
                };
                /**
                 * \@description
                 * Validator that requires the length of the control's value to be greater than or equal
                 * to the provided minimum length. This validator is also provided by default if you use the
                 * the HTML5 `minlength` attribute.
                 *
                 * \@usageNotes
                 *
                 * ### Validate that the field has a minimum of 3 characters
                 *
                 * ```typescript
                 * const control = new FormControl('ng', Validators.minLength(3));
                 *
                 * console.log(control.errors); // {minlength: {requiredLength: 3, actualLength: 2}}
                 * ```
                 *
                 * ```html
                 * <input minlength="5">
                 * ```
                 *
                 * @see `updateValueAndValidity()`
                 *
                 * @param {?} minLength
                 * @return {?} A validator function that returns an error map with the
                 * `minlength` if the validation check fails, otherwise `null`.
                 *
                 */
                Validators.minLength = function (minLength) {
                    return ( /**
                     * @param {?} control
                     * @return {?}
                     */function (control) {
                        if (isEmptyInputValue(control.value)) {
                            return null; // don't validate empty values to allow optional controls
                        }
                        /** @type {?} */
                        var length = control.value ? control.value.length : 0;
                        return length < minLength ?
                            { 'minlength': { 'requiredLength': minLength, 'actualLength': length } } :
                            null;
                    });
                };
                /**
                 * \@description
                 * Validator that requires the length of the control's value to be less than or equal
                 * to the provided maximum length. This validator is also provided by default if you use the
                 * the HTML5 `maxlength` attribute.
                 *
                 * \@usageNotes
                 *
                 * ### Validate that the field has maximum of 5 characters
                 *
                 * ```typescript
                 * const control = new FormControl('Angular', Validators.maxLength(5));
                 *
                 * console.log(control.errors); // {maxlength: {requiredLength: 5, actualLength: 7}}
                 * ```
                 *
                 * ```html
                 * <input maxlength="5">
                 * ```
                 *
                 * @see `updateValueAndValidity()`
                 *
                 * @param {?} maxLength
                 * @return {?} A validator function that returns an error map with the
                 * `maxlength` property if the validation check fails, otherwise `null`.
                 *
                 */
                Validators.maxLength = function (maxLength) {
                    return ( /**
                     * @param {?} control
                     * @return {?}
                     */function (control) {
                        /** @type {?} */
                        var length = control.value ? control.value.length : 0;
                        return length > maxLength ?
                            { 'maxlength': { 'requiredLength': maxLength, 'actualLength': length } } :
                            null;
                    });
                };
                /**
                 * \@description
                 * Validator that requires the control's value to match a regex pattern. This validator is also
                 * provided by default if you use the HTML5 `pattern` attribute.
                 *
                 * \@usageNotes
                 *
                 * ### Validate that the field only contains letters or spaces
                 *
                 * ```typescript
                 * const control = new FormControl('1', Validators.pattern('[a-zA-Z ]*'));
                 *
                 * console.log(control.errors); // {pattern: {requiredPattern: '^[a-zA-Z ]*$', actualValue: '1'}}
                 * ```
                 *
                 * ```html
                 * <input pattern="[a-zA-Z ]*">
                 * ```
                 *
                 * @see `updateValueAndValidity()`
                 *
                 * @param {?} pattern A regular expression to be used as is to test the values, or a string.
                 * If a string is passed, the `^` character is prepended and the `$` character is
                 * appended to the provided string (if not already present), and the resulting regular
                 * expression is used to test the values.
                 *
                 * @return {?} A validator function that returns an error map with the
                 * `pattern` property if the validation check fails, otherwise `null`.
                 *
                 */
                Validators.pattern = function (pattern) {
                    if (!pattern)
                        return Validators.nullValidator;
                    /** @type {?} */
                    var regex;
                    /** @type {?} */
                    var regexStr;
                    if (typeof pattern === 'string') {
                        regexStr = '';
                        if (pattern.charAt(0) !== '^')
                            regexStr += '^';
                        regexStr += pattern;
                        if (pattern.charAt(pattern.length - 1) !== '$')
                            regexStr += '$';
                        regex = new RegExp(regexStr);
                    }
                    else {
                        regexStr = pattern.toString();
                        regex = pattern;
                    }
                    return ( /**
                     * @param {?} control
                     * @return {?}
                     */function (control) {
                        if (isEmptyInputValue(control.value)) {
                            return null; // don't validate empty values to allow optional controls
                        }
                        /** @type {?} */
                        var value = control.value;
                        return regex.test(value) ? null :
                            { 'pattern': { 'requiredPattern': regexStr, 'actualValue': value } };
                    });
                };
                /**
                 * \@description
                 * Validator that performs no operation.
                 *
                 * @see `updateValueAndValidity()`
                 *
                 * @param {?} control
                 * @return {?}
                 */
                Validators.nullValidator = function (control) { return null; };
                /**
                 * @param {?} validators
                 * @return {?}
                 */
                Validators.compose = function (validators) {
                    if (!validators)
                        return null;
                    /** @type {?} */
                    var presentValidators = ( /** @type {?} */(validators.filter(isPresent)));
                    if (presentValidators.length == 0)
                        return null;
                    return ( /**
                     * @param {?} control
                     * @return {?}
                     */function (control) {
                        return _mergeErrors(_executeValidators(control, presentValidators));
                    });
                };
                /**
                 * \@description
                 * Compose multiple async validators into a single function that returns the union
                 * of the individual error objects for the provided control.
                 *
                 * @see `updateValueAndValidity()`
                 *
                 * @param {?} validators
                 * @return {?} A validator function that returns an error map with the
                 * merged error objects of the async validators if the validation check fails, otherwise `null`.
                 *
                 */
                Validators.composeAsync = function (validators) {
                    if (!validators)
                        return null;
                    /** @type {?} */
                    var presentValidators = ( /** @type {?} */(validators.filter(isPresent)));
                    if (presentValidators.length == 0)
                        return null;
                    return ( /**
                     * @param {?} control
                     * @return {?}
                     */function (control) {
                        /** @type {?} */
                        var observables = _executeAsyncValidators(control, presentValidators).map(toObservable);
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(observables).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(_mergeErrors));
                    });
                };
                return Validators;
            }());
            /**
             * @param {?} o
             * @return {?}
             */
            function isPresent(o) {
                return o != null;
            }
            /**
             * @param {?} r
             * @return {?}
             */
            function toObservable(r) {
                /** @type {?} */
                var obs = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵisPromise"])(r) ? Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(r) : r;
                if (!(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵisObservable"])(obs))) {
                    throw new Error("Expected validator to return Promise or Observable.");
                }
                return obs;
            }
            /**
             * @param {?} control
             * @param {?} validators
             * @return {?}
             */
            function _executeValidators(control, validators) {
                return validators.map(( /**
                 * @param {?} v
                 * @return {?}
                 */function (/**
                 * @param {?} v
                 * @return {?}
                 */ v) { return v(control); }));
            }
            /**
             * @param {?} control
             * @param {?} validators
             * @return {?}
             */
            function _executeAsyncValidators(control, validators) {
                return validators.map(( /**
                 * @param {?} v
                 * @return {?}
                 */function (/**
                 * @param {?} v
                 * @return {?}
                 */ v) { return v(control); }));
            }
            /**
             * @param {?} arrayOfErrors
             * @return {?}
             */
            function _mergeErrors(arrayOfErrors) {
                /** @type {?} */
                var res = arrayOfErrors.reduce(( /**
                 * @param {?} res
                 * @param {?} errors
                 * @return {?}
                 */function (res, errors) {
                    return errors != null ? Object.assign({}, ( /** @type {?} */(res)), errors) : ( /** @type {?} */(res));
                }), {});
                return Object.keys(res).length === 0 ? null : res;
            }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * @license
             * Copyright Google Inc. All Rights Reserved.
             *
             * Use of this source code is governed by an MIT-style license that can be
             * found in the LICENSE file at https://angular.io/license
             */
            /**
             * @param {?} validator
             * @return {?}
             */
            function normalizeValidator(validator) {
                if ((( /** @type {?} */(validator))).validate) {
                    return ( /**
                     * @param {?} c
                     * @return {?}
                     */function (c) { return (( /** @type {?} */(validator))).validate(c); });
                }
                else {
                    return ( /** @type {?} */(validator));
                }
            }
            /**
             * @param {?} validator
             * @return {?}
             */
            function normalizeAsyncValidator(validator) {
                if ((( /** @type {?} */(validator))).validate) {
                    return ( /**
                     * @param {?} c
                     * @return {?}
                     */function (c) { return (( /** @type {?} */(validator))).validate(c); });
                }
                else {
                    return ( /** @type {?} */(validator));
                }
            }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @type {?} */
            var NUMBER_VALUE_ACCESSOR = {
                provide: NG_VALUE_ACCESSOR,
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                 * @return {?}
                 */function () { return NumberValueAccessor; })),
                multi: true
            };
            /**
             * \@description
             * The `ControlValueAccessor` for writing a number value and listening to number input changes.
             * The value accessor is used by the `FormControlDirective`, `FormControlName`, and  `NgModel`
             * directives.
             *
             * \@usageNotes
             *
             * ### Using a number input with a reactive form.
             *
             * The following example shows how to use a number input with a reactive form.
             *
             * ```ts
             * const totalCountControl = new FormControl();
             * ```
             *
             * ```
             * <input type="number" [formControl]="totalCountControl">
             * ```
             *
             * \@ngModule ReactiveFormsModule
             * \@ngModule FormsModule
             * \@publicApi
             */
            var NumberValueAccessor = /** @class */ (function () {
                /**
                 * @param {?} _renderer
                 * @param {?} _elementRef
                 */
                function NumberValueAccessor(_renderer, _elementRef) {
                    this._renderer = _renderer;
                    this._elementRef = _elementRef;
                    /**
                     * \@description
                     * The registered callback function called when a change or input event occurs on the input
                     * element.
                     */
                    this.onChange = ( /**
                     * @param {?} _
                     * @return {?}
                     */function (_) { });
                    /**
                     * \@description
                     * The registered callback function called when a blur event occurs on the input element.
                     */
                    this.onTouched = ( /**
                     * @return {?}
                     */function () { });
                }
                /**
                 * Sets the "value" property on the input element.
                 *
                 * @param {?} value The checked value
                 * @return {?}
                 */
                NumberValueAccessor.prototype.writeValue = function (value) {
                    // The value needs to be normalized for IE9, otherwise it is set to 'null' when null
                    /** @type {?} */
                    var normalizedValue = value == null ? '' : value;
                    this._renderer.setProperty(this._elementRef.nativeElement, 'value', normalizedValue);
                };
                /**
                 * \@description
                 * Registers a function called when the control value changes.
                 *
                 * @param {?} fn The callback function
                 * @return {?}
                 */
                NumberValueAccessor.prototype.registerOnChange = function (fn) {
                    this.onChange = ( /**
                     * @param {?} value
                     * @return {?}
                     */function (value) { fn(value == '' ? null : parseFloat(value)); });
                };
                /**
                 * \@description
                 * Registers a function called when the control is touched.
                 *
                 * @param {?} fn The callback function
                 * @return {?}
                 */
                NumberValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
                /**
                 * Sets the "disabled" property on the input element.
                 *
                 * @param {?} isDisabled The disabled value
                 * @return {?}
                 */
                NumberValueAccessor.prototype.setDisabledState = function (isDisabled) {
                    this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
                };
                return NumberValueAccessor;
            }());
            NumberValueAccessor.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: 'input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]',
                            host: {
                                '(change)': 'onChange($event.target.value)',
                                '(input)': 'onChange($event.target.value)',
                                '(blur)': 'onTouched()'
                            },
                            providers: [NUMBER_VALUE_ACCESSOR]
                        },] }
            ];
            /** @nocollapse */
            NumberValueAccessor.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
            ]; };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @type {?} */
            var RADIO_VALUE_ACCESSOR = {
                provide: NG_VALUE_ACCESSOR,
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                 * @return {?}
                 */function () { return RadioControlValueAccessor; })),
                multi: true
            };
            /**
             * \@description
             * Class used by Angular to track radio buttons. For internal use only.
             */
            var RadioControlRegistry = /** @class */ (function () {
                function RadioControlRegistry() {
                    this._accessors = [];
                }
                /**
                 * \@description
                 * Adds a control to the internal registry. For internal use only.
                 * @param {?} control
                 * @param {?} accessor
                 * @return {?}
                 */
                RadioControlRegistry.prototype.add = function (control, accessor) {
                    this._accessors.push([control, accessor]);
                };
                /**
                 * \@description
                 * Removes a control from the internal registry. For internal use only.
                 * @param {?} accessor
                 * @return {?}
                 */
                RadioControlRegistry.prototype.remove = function (accessor) {
                    for (var i = this._accessors.length - 1; i >= 0; --i) {
                        if (this._accessors[i][1] === accessor) {
                            this._accessors.splice(i, 1);
                            return;
                        }
                    }
                };
                /**
                 * \@description
                 * Selects a radio button. For internal use only.
                 * @param {?} accessor
                 * @return {?}
                 */
                RadioControlRegistry.prototype.select = function (accessor) {
                    var _this = this;
                    this._accessors.forEach(( /**
                     * @param {?} c
                     * @return {?}
                     */function (c) {
                        if (_this._isSameGroup(c, accessor) && c[1] !== accessor) {
                            c[1].fireUncheck(accessor.value);
                        }
                    }));
                };
                /**
                 * @private
                 * @param {?} controlPair
                 * @param {?} accessor
                 * @return {?}
                 */
                RadioControlRegistry.prototype._isSameGroup = function (controlPair, accessor) {
                    if (!controlPair[0].control)
                        return false;
                    return controlPair[0]._parent === accessor._control._parent &&
                        controlPair[1].name === accessor.name;
                };
                return RadioControlRegistry;
            }());
            RadioControlRegistry.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
            ];
            if (false) { }
            /**
             * \@description
             * The `ControlValueAccessor` for writing radio control values and listening to radio control
             * changes. The value accessor is used by the `FormControlDirective`, `FormControlName`, and
             * `NgModel` directives.
             *
             * \@usageNotes
             *
             * ### Using radio buttons with reactive form directives
             *
             * The follow example shows how to use radio buttons in a reactive form. When using radio buttons in
             * a reactive form, radio buttons in the same group should have the same `formControlName`.
             * Providing a `name` attribute is optional.
             *
             * {\@example forms/ts/reactiveRadioButtons/reactive_radio_button_example.ts region='Reactive'}
             *
             * \@ngModule ReactiveFormsModule
             * \@ngModule FormsModule
             * \@publicApi
             */
            var RadioControlValueAccessor = /** @class */ (function () {
                /**
                 * @param {?} _renderer
                 * @param {?} _elementRef
                 * @param {?} _registry
                 * @param {?} _injector
                 */
                function RadioControlValueAccessor(_renderer, _elementRef, _registry, _injector) {
                    this._renderer = _renderer;
                    this._elementRef = _elementRef;
                    this._registry = _registry;
                    this._injector = _injector;
                    /**
                     * \@description
                     * The registered callback function called when a change event occurs on the input element.
                     */
                    this.onChange = ( /**
                     * @return {?}
                     */function () { });
                    /**
                     * \@description
                     * The registered callback function called when a blur event occurs on the input element.
                     */
                    this.onTouched = ( /**
                     * @return {?}
                     */function () { });
                }
                /**
                 * \@description
                 * A lifecycle method called when the directive is initialized. For internal use only.
                 * @return {?}
                 */
                RadioControlValueAccessor.prototype.ngOnInit = function () {
                    this._control = this._injector.get(NgControl);
                    this._checkName();
                    this._registry.add(this._control, this);
                };
                /**
                 * \@description
                 * Lifecycle method called before the directive's instance is destroyed. For internal use only.
                 * @return {?}
                 */
                RadioControlValueAccessor.prototype.ngOnDestroy = function () { this._registry.remove(this); };
                /**
                 * \@description
                 * Sets the "checked" property value on the radio input element.
                 *
                 * @param {?} value The checked value
                 * @return {?}
                 */
                RadioControlValueAccessor.prototype.writeValue = function (value) {
                    this._state = value === this.value;
                    this._renderer.setProperty(this._elementRef.nativeElement, 'checked', this._state);
                };
                /**
                 * \@description
                 * Registers a function called when the control value changes.
                 *
                 * @param {?} fn The callback function
                 * @return {?}
                 */
                RadioControlValueAccessor.prototype.registerOnChange = function (fn) {
                    var _this = this;
                    this._fn = fn;
                    this.onChange = ( /**
                     * @return {?}
                     */function () {
                        fn(_this.value);
                        _this._registry.select(_this);
                    });
                };
                /**
                 * Sets the "value" on the radio input element and unchecks it.
                 *
                 * @param {?} value
                 * @return {?}
                 */
                RadioControlValueAccessor.prototype.fireUncheck = function (value) { this.writeValue(value); };
                /**
                 * \@description
                 * Registers a function called when the control is touched.
                 *
                 * @param {?} fn The callback function
                 * @return {?}
                 */
                RadioControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
                /**
                 * Sets the "disabled" property on the input element.
                 *
                 * @param {?} isDisabled The disabled value
                 * @return {?}
                 */
                RadioControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
                    this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
                };
                /**
                 * @private
                 * @return {?}
                 */
                RadioControlValueAccessor.prototype._checkName = function () {
                    if (this.name && this.formControlName && this.name !== this.formControlName) {
                        this._throwNameError();
                    }
                    if (!this.name && this.formControlName)
                        this.name = this.formControlName;
                };
                /**
                 * @private
                 * @return {?}
                 */
                RadioControlValueAccessor.prototype._throwNameError = function () {
                    throw new Error("\n      If you define both a name and a formControlName attribute on your radio button, their values\n      must match. Ex: <input type=\"radio\" formControlName=\"food\" name=\"food\">\n    ");
                };
                return RadioControlValueAccessor;
            }());
            RadioControlValueAccessor.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: 'input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]',
                            host: { '(change)': 'onChange()', '(blur)': 'onTouched()' },
                            providers: [RADIO_VALUE_ACCESSOR]
                        },] }
            ];
            /** @nocollapse */
            RadioControlValueAccessor.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
                { type: RadioControlRegistry },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }
            ]; };
            RadioControlValueAccessor.propDecorators = {
                name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                formControlName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
            };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @type {?} */
            var RANGE_VALUE_ACCESSOR = {
                provide: NG_VALUE_ACCESSOR,
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                 * @return {?}
                 */function () { return RangeValueAccessor; })),
                multi: true
            };
            /**
             * \@description
             * The `ControlValueAccessor` for writing a range value and listening to range input changes.
             * The value accessor is used by the `FormControlDirective`, `FormControlName`, and  `NgModel`
             * directives.
             *
             * \@usageNotes
             *
             * ### Using a range input with a reactive form
             *
             * The following example shows how to use a range input with a reactive form.
             *
             * ```ts
             * const ageControl = new FormControl();
             * ```
             *
             * ```
             * <input type="range" [formControl]="ageControl">
             * ```
             *
             * \@ngModule ReactiveFormsModule
             * \@ngModule FormsModule
             * \@publicApi
             */
            var RangeValueAccessor = /** @class */ (function () {
                /**
                 * @param {?} _renderer
                 * @param {?} _elementRef
                 */
                function RangeValueAccessor(_renderer, _elementRef) {
                    this._renderer = _renderer;
                    this._elementRef = _elementRef;
                    /**
                     * \@description
                     * The registered callback function called when a change or input event occurs on the input
                     * element.
                     */
                    this.onChange = ( /**
                     * @param {?} _
                     * @return {?}
                     */function (_) { });
                    /**
                     * \@description
                     * The registered callback function called when a blur event occurs on the input element.
                     */
                    this.onTouched = ( /**
                     * @return {?}
                     */function () { });
                }
                /**
                 * Sets the "value" property on the input element.
                 *
                 * @param {?} value The checked value
                 * @return {?}
                 */
                RangeValueAccessor.prototype.writeValue = function (value) {
                    this._renderer.setProperty(this._elementRef.nativeElement, 'value', parseFloat(value));
                };
                /**
                 * \@description
                 * Registers a function called when the control value changes.
                 *
                 * @param {?} fn The callback function
                 * @return {?}
                 */
                RangeValueAccessor.prototype.registerOnChange = function (fn) {
                    this.onChange = ( /**
                     * @param {?} value
                     * @return {?}
                     */function (value) { fn(value == '' ? null : parseFloat(value)); });
                };
                /**
                 * \@description
                 * Registers a function called when the control is touched.
                 *
                 * @param {?} fn The callback function
                 * @return {?}
                 */
                RangeValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
                /**
                 * Sets the "disabled" property on the range input element.
                 *
                 * @param {?} isDisabled The disabled value
                 * @return {?}
                 */
                RangeValueAccessor.prototype.setDisabledState = function (isDisabled) {
                    this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
                };
                return RangeValueAccessor;
            }());
            RangeValueAccessor.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: 'input[type=range][formControlName],input[type=range][formControl],input[type=range][ngModel]',
                            host: {
                                '(change)': 'onChange($event.target.value)',
                                '(input)': 'onChange($event.target.value)',
                                '(blur)': 'onTouched()'
                            },
                            providers: [RANGE_VALUE_ACCESSOR]
                        },] }
            ];
            /** @nocollapse */
            RangeValueAccessor.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
            ]; };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * @license
             * Copyright Google Inc. All Rights Reserved.
             *
             * Use of this source code is governed by an MIT-style license that can be
             * found in the LICENSE file at https://angular.io/license
             */
            /** @type {?} */
            var FormErrorExamples = {
                formControlName: "\n    <div [formGroup]=\"myGroup\">\n      <input formControlName=\"firstName\">\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       firstName: new FormControl()\n    });",
                formGroupName: "\n    <div [formGroup]=\"myGroup\">\n       <div formGroupName=\"person\">\n          <input formControlName=\"firstName\">\n       </div>\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       person: new FormGroup({ firstName: new FormControl() })\n    });",
                formArrayName: "\n    <div [formGroup]=\"myGroup\">\n      <div formArrayName=\"cities\">\n        <div *ngFor=\"let city of cityArray.controls; index as i\">\n          <input [formControlName]=\"i\">\n        </div>\n      </div>\n    </div>\n\n    In your class:\n\n    this.cityArray = new FormArray([new FormControl('SF')]);\n    this.myGroup = new FormGroup({\n      cities: this.cityArray\n    });",
                ngModelGroup: "\n    <form>\n       <div ngModelGroup=\"person\">\n          <input [(ngModel)]=\"person.name\" name=\"firstName\">\n       </div>\n    </form>",
                ngModelWithFormGroup: "\n    <div [formGroup]=\"myGroup\">\n       <input formControlName=\"firstName\">\n       <input [(ngModel)]=\"showMoreControls\" [ngModelOptions]=\"{standalone: true}\">\n    </div>\n  "
            };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var ReactiveErrors = /** @class */ (function () {
                function ReactiveErrors() {
                }
                /**
                 * @return {?}
                 */
                ReactiveErrors.controlParentException = function () {
                    throw new Error("formControlName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      " + FormErrorExamples.formControlName);
                };
                /**
                 * @return {?}
                 */
                ReactiveErrors.ngModelGroupException = function () {
                    throw new Error("formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents\n       that also have a \"form\" prefix: formGroupName, formArrayName, or formGroup.\n\n       Option 1:  Update the parent to be formGroupName (reactive form strategy)\n\n        " + FormErrorExamples.formGroupName + "\n\n        Option 2: Use ngModel instead of formControlName (template-driven strategy)\n\n        " + FormErrorExamples.ngModelGroup);
                };
                /**
                 * @return {?}
                 */
                ReactiveErrors.missingFormException = function () {
                    throw new Error("formGroup expects a FormGroup instance. Please pass one in.\n\n       Example:\n\n       " + FormErrorExamples.formControlName);
                };
                /**
                 * @return {?}
                 */
                ReactiveErrors.groupParentException = function () {
                    throw new Error("formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup\n      directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      " + FormErrorExamples.formGroupName);
                };
                /**
                 * @return {?}
                 */
                ReactiveErrors.arrayParentException = function () {
                    throw new Error("formArrayName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n        Example:\n\n        " + FormErrorExamples.formArrayName);
                };
                /**
                 * @return {?}
                 */
                ReactiveErrors.disabledAttrWarning = function () {
                    console.warn("\n      It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true\n      when you set up this control in your component class, the disabled attribute will actually be set in the DOM for\n      you. We recommend using this approach to avoid 'changed after checked' errors.\n       \n      Example: \n      form = new FormGroup({\n        first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),\n        last: new FormControl('Drew', Validators.required)\n      });\n    ");
                };
                /**
                 * @param {?} directiveName
                 * @return {?}
                 */
                ReactiveErrors.ngModelWarning = function (directiveName) {
                    console.warn("\n    It looks like you're using ngModel on the same form field as " + directiveName + ". \n    Support for using the ngModel input property and ngModelChange event with \n    reactive form directives has been deprecated in Angular v6 and will be removed \n    in Angular v7.\n    \n    For more information on this, see our API docs here:\n    https://angular.io/api/forms/" + (directiveName === 'formControl' ? 'FormControlDirective'
                        : 'FormControlName') + "#use-with-ngmodel\n    ");
                };
                return ReactiveErrors;
            }());
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @type {?} */
            var SELECT_VALUE_ACCESSOR = {
                provide: NG_VALUE_ACCESSOR,
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                 * @return {?}
                 */function () { return SelectControlValueAccessor; })),
                multi: true
            };
            /**
             * @param {?} id
             * @param {?} value
             * @return {?}
             */
            function _buildValueString(id, value) {
                if (id == null)
                    return "" + value;
                if (value && typeof value === 'object')
                    value = 'Object';
                return (id + ": " + value).slice(0, 50);
            }
            /**
             * @param {?} valueString
             * @return {?}
             */
            function _extractId(valueString) {
                return valueString.split(':')[0];
            }
            /**
             * \@description
             * The `ControlValueAccessor` for writing select control values and listening to select control
             * changes. The value accessor is used by the `FormControlDirective`, `FormControlName`, and
             * `NgModel` directives.
             *
             * \@usageNotes
             *
             * ### Using select controls in a reactive form
             *
             * The following examples show how to use a select control in a reactive form.
             *
             * {\@example forms/ts/reactiveSelectControl/reactive_select_control_example.ts region='Component'}
             *
             * ### Using select controls in a template-driven form
             *
             * To use a select in a template-driven form, simply add an `ngModel` and a `name`
             * attribute to the main `<select>` tag.
             *
             * {\@example forms/ts/selectControl/select_control_example.ts region='Component'}
             *
             * ### Customizing option selection
             *
             * Angular uses object identity to select option. It's possible for the identities of items
             * to change while the data does not. This can happen, for example, if the items are produced
             * from an RPC to the server, and that RPC is re-run. Even if the data hasn't changed, the
             * second response will produce objects with different identities.
             *
             * To customize the default option comparison algorithm, `<select>` supports `compareWith` input.
             * `compareWith` takes a **function** which has two arguments: `option1` and `option2`.
             * If `compareWith` is given, Angular selects option by the return value of the function.
             *
             * ```ts
             * const selectedCountriesControl = new FormControl();
             * ```
             *
             * ```
             * <select [compareWith]="compareFn"  [formControl]="selectedCountriesControl">
             *     <option *ngFor="let country of countries" [ngValue]="country">
             *         {{country.name}}
             *     </option>
             * </select>
             *
             * compareFn(c1: Country, c2: Country): boolean {
             *     return c1 && c2 ? c1.id === c2.id : c1 === c2;
             * }
             * ```
             *
             * **Note:** We listen to the 'change' event because 'input' events aren't fired
             * for selects in Firefox and IE:
             * https://bugzilla.mozilla.org/show_bug.cgi?id=1024350
             * https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/4660045/
             *
             * \@ngModule ReactiveFormsModule
             * \@ngModule FormsModule
             * \@publicApi
             */
            var SelectControlValueAccessor = /** @class */ (function () {
                /**
                 * @param {?} _renderer
                 * @param {?} _elementRef
                 */
                function SelectControlValueAccessor(_renderer, _elementRef) {
                    this._renderer = _renderer;
                    this._elementRef = _elementRef;
                    /**
                     * \@internal
                     */
                    this._optionMap = new Map();
                    /**
                     * \@internal
                     */
                    this._idCounter = 0;
                    /**
                     * \@description
                     * The registered callback function called when a change event occurs on the input element.
                     */
                    this.onChange = ( /**
                     * @param {?} _
                     * @return {?}
                     */function (_) { });
                    /**
                     * \@description
                     * The registered callback function called when a blur event occurs on the input element.
                     */
                    this.onTouched = ( /**
                     * @return {?}
                     */function () { });
                    this._compareWith = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵlooseIdentical"];
                }
                Object.defineProperty(SelectControlValueAccessor.prototype, "compareWith", {
                    /**
                     * \@description
                     * Tracks the option comparison algorithm for tracking identities when
                     * checking for changes.
                     * @param {?} fn
                     * @return {?}
                     */
                    set: function (fn) {
                        if (typeof fn !== 'function') {
                            throw new Error("compareWith must be a function, but received " + JSON.stringify(fn));
                        }
                        this._compareWith = fn;
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Sets the "value" property on the input element. The "selectedIndex"
                 * property is also set if an ID is provided on the option element.
                 *
                 * @param {?} value The checked value
                 * @return {?}
                 */
                SelectControlValueAccessor.prototype.writeValue = function (value) {
                    this.value = value;
                    /** @type {?} */
                    var id = this._getOptionId(value);
                    if (id == null) {
                        this._renderer.setProperty(this._elementRef.nativeElement, 'selectedIndex', -1);
                    }
                    /** @type {?} */
                    var valueString = _buildValueString(id, value);
                    this._renderer.setProperty(this._elementRef.nativeElement, 'value', valueString);
                };
                /**
                 * \@description
                 * Registers a function called when the control value changes.
                 *
                 * @param {?} fn The callback function
                 * @return {?}
                 */
                SelectControlValueAccessor.prototype.registerOnChange = function (fn) {
                    var _this = this;
                    this.onChange = ( /**
                     * @param {?} valueString
                     * @return {?}
                     */function (valueString) {
                        _this.value = _this._getOptionValue(valueString);
                        fn(_this.value);
                    });
                };
                /**
                 * \@description
                 * Registers a function called when the control is touched.
                 *
                 * @param {?} fn The callback function
                 * @return {?}
                 */
                SelectControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
                /**
                 * Sets the "disabled" property on the select input element.
                 *
                 * @param {?} isDisabled The disabled value
                 * @return {?}
                 */
                SelectControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
                    this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
                };
                /**
                 * \@internal
                 * @return {?}
                 */
                SelectControlValueAccessor.prototype._registerOption = function () { return (this._idCounter++).toString(); };
                /**
                 * \@internal
                 * @param {?} value
                 * @return {?}
                 */
                SelectControlValueAccessor.prototype._getOptionId = function (value) {
                    for (var _i = 0, _a = Array.from(this._optionMap.keys()); _i < _a.length; _i++) {
                        var id = _a[_i];
                        if (this._compareWith(this._optionMap.get(id), value))
                            return id;
                    }
                    return null;
                };
                /**
                 * \@internal
                 * @param {?} valueString
                 * @return {?}
                 */
                SelectControlValueAccessor.prototype._getOptionValue = function (valueString) {
                    /** @type {?} */
                    var id = _extractId(valueString);
                    return this._optionMap.has(id) ? this._optionMap.get(id) : valueString;
                };
                return SelectControlValueAccessor;
            }());
            SelectControlValueAccessor.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: 'select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]',
                            host: { '(change)': 'onChange($event.target.value)', '(blur)': 'onTouched()' },
                            providers: [SELECT_VALUE_ACCESSOR]
                        },] }
            ];
            /** @nocollapse */
            SelectControlValueAccessor.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
            ]; };
            SelectControlValueAccessor.propDecorators = {
                compareWith: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
            };
            if (false) { }
            /**
             * \@description
             * Marks `<option>` as dynamic, so Angular can be notified when options change.
             *
             * @see `SelectControlValueAccessor`
             *
             * \@ngModule ReactiveFormsModule
             * \@ngModule FormsModule
             * \@publicApi
             */
            var NgSelectOption = /** @class */ (function () {
                /**
                 * @param {?} _element
                 * @param {?} _renderer
                 * @param {?} _select
                 */
                function NgSelectOption(_element, _renderer, _select) {
                    this._element = _element;
                    this._renderer = _renderer;
                    this._select = _select;
                    if (this._select)
                        this.id = this._select._registerOption();
                }
                Object.defineProperty(NgSelectOption.prototype, "ngValue", {
                    /**
                     * \@description
                     * Tracks the value bound to the option element. Unlike the value binding,
                     * ngValue supports binding to objects.
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        if (this._select == null)
                            return;
                        this._select._optionMap.set(this.id, value);
                        this._setElementValue(_buildValueString(this.id, value));
                        this._select.writeValue(this._select.value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(NgSelectOption.prototype, "value", {
                    /**
                     * \@description
                     * Tracks simple string values bound to the option element.
                     * For objects, use the `ngValue` input binding.
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        this._setElementValue(value);
                        if (this._select)
                            this._select.writeValue(this._select.value);
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * \@internal
                 * @param {?} value
                 * @return {?}
                 */
                NgSelectOption.prototype._setElementValue = function (value) {
                    this._renderer.setProperty(this._element.nativeElement, 'value', value);
                };
                /**
                 * \@description
                 * Lifecycle method called before the directive's instance is destroyed. For internal use only.
                 * @return {?}
                 */
                NgSelectOption.prototype.ngOnDestroy = function () {
                    if (this._select) {
                        this._select._optionMap.delete(this.id);
                        this._select.writeValue(this._select.value);
                    }
                };
                return NgSelectOption;
            }());
            NgSelectOption.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: 'option' },] }
            ];
            /** @nocollapse */
            NgSelectOption.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
                { type: SelectControlValueAccessor, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"] }] }
            ]; };
            NgSelectOption.propDecorators = {
                ngValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ngValue',] }],
                value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['value',] }]
            };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @type {?} */
            var SELECT_MULTIPLE_VALUE_ACCESSOR = {
                provide: NG_VALUE_ACCESSOR,
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                 * @return {?}
                 */function () { return SelectMultipleControlValueAccessor; })),
                multi: true
            };
            /**
             * @param {?} id
             * @param {?} value
             * @return {?}
             */
            function _buildValueString$1(id, value) {
                if (id == null)
                    return "" + value;
                if (typeof value === 'string')
                    value = "'" + value + "'";
                if (value && typeof value === 'object')
                    value = 'Object';
                return (id + ": " + value).slice(0, 50);
            }
            /**
             * @param {?} valueString
             * @return {?}
             */
            function _extractId$1(valueString) {
                return valueString.split(':')[0];
            }
            /**
             * Mock interface for HTML Options
             * @record
             */
            function HTMLOption() { }
            if (false) { }
            /**
             * Mock interface for HTMLCollection
             * @abstract
             */
            var HTMLCollection = /** @class */ (function () {
                function HTMLCollection() {
                }
                return HTMLCollection;
            }());
            if (false) { }
            /**
             * \@description
             * The `ControlValueAccessor` for writing multi-select control values and listening to multi-select control
             * changes. The value accessor is used by the `FormControlDirective`, `FormControlName`, and `NgModel`
             * directives.
             *
             * @see `SelectControlValueAccessor`
             *
             * \@usageNotes
             *
             * ### Using a multi-select control
             *
             * The follow example shows you how to use a multi-select control with a reactive form.
             *
             * ```ts
             * const countryControl = new FormControl();
             * ```
             *
             * ```
             * <select multiple name="countries" [formControl]="countryControl">
             *   <option *ngFor="let country of countries" [ngValue]="country">
             *     {{ country.name }}
             *   </option>
             * </select>
             * ```
             *
             * ### Customizing option selection
             *
             * To customize the default option comparison algorithm, `<select>` supports `compareWith` input.
             * See the `SelectControlValueAccessor` for usage.
             *
             * \@ngModule ReactiveFormsModule
             * \@ngModule FormsModule
             * \@publicApi
             */
            var SelectMultipleControlValueAccessor = /** @class */ (function () {
                /**
                 * @param {?} _renderer
                 * @param {?} _elementRef
                 */
                function SelectMultipleControlValueAccessor(_renderer, _elementRef) {
                    this._renderer = _renderer;
                    this._elementRef = _elementRef;
                    /**
                     * \@internal
                     */
                    this._optionMap = new Map();
                    /**
                     * \@internal
                     */
                    this._idCounter = 0;
                    /**
                     * \@description
                     * The registered callback function called when a change event occurs on the input element.
                     */
                    this.onChange = ( /**
                     * @param {?} _
                     * @return {?}
                     */function (_) { });
                    /**
                     * \@description
                     * The registered callback function called when a blur event occurs on the input element.
                     */
                    this.onTouched = ( /**
                     * @return {?}
                     */function () { });
                    this._compareWith = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵlooseIdentical"];
                }
                Object.defineProperty(SelectMultipleControlValueAccessor.prototype, "compareWith", {
                    /**
                     * \@description
                     * Tracks the option comparison algorithm for tracking identities when
                     * checking for changes.
                     * @param {?} fn
                     * @return {?}
                     */
                    set: function (fn) {
                        if (typeof fn !== 'function') {
                            throw new Error("compareWith must be a function, but received " + JSON.stringify(fn));
                        }
                        this._compareWith = fn;
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * \@description
                 * Sets the "value" property on one or of more
                 * of the select's options.
                 *
                 * @param {?} value The value
                 * @return {?}
                 */
                SelectMultipleControlValueAccessor.prototype.writeValue = function (value) {
                    var _this = this;
                    this.value = value;
                    /** @type {?} */
                    var optionSelectedStateSetter;
                    if (Array.isArray(value)) {
                        // convert values to ids
                        /** @type {?} */
                        var ids_1 = value.map(( /**
                         * @param {?} v
                         * @return {?}
                         */function (v) { return _this._getOptionId(v); }));
                        optionSelectedStateSetter = ( /**
                         * @param {?} opt
                         * @param {?} o
                         * @return {?}
                         */function (opt, o) { opt._setSelected(ids_1.indexOf(o.toString()) > -1); });
                    }
                    else {
                        optionSelectedStateSetter = ( /**
                         * @param {?} opt
                         * @param {?} o
                         * @return {?}
                         */function (opt, o) { opt._setSelected(false); });
                    }
                    this._optionMap.forEach(optionSelectedStateSetter);
                };
                /**
                 * \@description
                 * Registers a function called when the control value changes
                 * and writes an array of the selected options.
                 *
                 * @param {?} fn The callback function
                 * @return {?}
                 */
                SelectMultipleControlValueAccessor.prototype.registerOnChange = function (fn) {
                    var _this = this;
                    this.onChange = ( /**
                     * @param {?} _
                     * @return {?}
                     */function (_) {
                        /** @type {?} */
                        var selected = [];
                        if (_.hasOwnProperty('selectedOptions')) {
                            /** @type {?} */
                            var options = _.selectedOptions;
                            for (var i = 0; i < options.length; i++) {
                                /** @type {?} */
                                var opt = options.item(i);
                                /** @type {?} */
                                var val = _this._getOptionValue(opt.value);
                                selected.push(val);
                            }
                        }
                        // Degrade on IE
                        else {
                            /** @type {?} */
                            var options = ( /** @type {?} */(_.options));
                            for (var i = 0; i < options.length; i++) {
                                /** @type {?} */
                                var opt = options.item(i);
                                if (opt.selected) {
                                    /** @type {?} */
                                    var val = _this._getOptionValue(opt.value);
                                    selected.push(val);
                                }
                            }
                        }
                        _this.value = selected;
                        fn(selected);
                    });
                };
                /**
                 * \@description
                 * Registers a function called when the control is touched.
                 *
                 * @param {?} fn The callback function
                 * @return {?}
                 */
                SelectMultipleControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
                /**
                 * Sets the "disabled" property on the select input element.
                 *
                 * @param {?} isDisabled The disabled value
                 * @return {?}
                 */
                SelectMultipleControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
                    this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
                };
                /**
                 * \@internal
                 * @param {?} value
                 * @return {?}
                 */
                SelectMultipleControlValueAccessor.prototype._registerOption = function (value) {
                    /** @type {?} */
                    var id = (this._idCounter++).toString();
                    this._optionMap.set(id, value);
                    return id;
                };
                /**
                 * \@internal
                 * @param {?} value
                 * @return {?}
                 */
                SelectMultipleControlValueAccessor.prototype._getOptionId = function (value) {
                    for (var _i = 0, _a = Array.from(this._optionMap.keys()); _i < _a.length; _i++) {
                        var id = _a[_i];
                        if (this._compareWith(( /** @type {?} */(this._optionMap.get(id)))._value, value))
                            return id;
                    }
                    return null;
                };
                /**
                 * \@internal
                 * @param {?} valueString
                 * @return {?}
                 */
                SelectMultipleControlValueAccessor.prototype._getOptionValue = function (valueString) {
                    /** @type {?} */
                    var id = _extractId$1(valueString);
                    return this._optionMap.has(id) ? ( /** @type {?} */(this._optionMap.get(id)))._value : valueString;
                };
                return SelectMultipleControlValueAccessor;
            }());
            SelectMultipleControlValueAccessor.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: 'select[multiple][formControlName],select[multiple][formControl],select[multiple][ngModel]',
                            host: { '(change)': 'onChange($event.target)', '(blur)': 'onTouched()' },
                            providers: [SELECT_MULTIPLE_VALUE_ACCESSOR]
                        },] }
            ];
            /** @nocollapse */
            SelectMultipleControlValueAccessor.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
            ]; };
            SelectMultipleControlValueAccessor.propDecorators = {
                compareWith: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
            };
            if (false) { }
            /**
             * \@description
             * Marks `<option>` as dynamic, so Angular can be notified when options change.
             *
             * @see `SelectMultipleControlValueAccessor`
             *
             * \@ngModule ReactiveFormsModule
             * \@ngModule FormsModule
             * \@publicApi
             */
            var ɵNgSelectMultipleOption = /** @class */ (function () {
                /**
                 * @param {?} _element
                 * @param {?} _renderer
                 * @param {?} _select
                 */
                function ɵNgSelectMultipleOption(_element, _renderer, _select) {
                    this._element = _element;
                    this._renderer = _renderer;
                    this._select = _select;
                    if (this._select) {
                        this.id = this._select._registerOption(this);
                    }
                }
                Object.defineProperty(ɵNgSelectMultipleOption.prototype, "ngValue", {
                    /**
                     * \@description
                     * Tracks the value bound to the option element. Unlike the value binding,
                     * ngValue supports binding to objects.
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        if (this._select == null)
                            return;
                        this._value = value;
                        this._setElementValue(_buildValueString$1(this.id, value));
                        this._select.writeValue(this._select.value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ɵNgSelectMultipleOption.prototype, "value", {
                    /**
                     * \@description
                     * Tracks simple string values bound to the option element.
                     * For objects, use the `ngValue` input binding.
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        if (this._select) {
                            this._value = value;
                            this._setElementValue(_buildValueString$1(this.id, value));
                            this._select.writeValue(this._select.value);
                        }
                        else {
                            this._setElementValue(value);
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * \@internal
                 * @param {?} value
                 * @return {?}
                 */
                ɵNgSelectMultipleOption.prototype._setElementValue = function (value) {
                    this._renderer.setProperty(this._element.nativeElement, 'value', value);
                };
                /**
                 * \@internal
                 * @param {?} selected
                 * @return {?}
                 */
                ɵNgSelectMultipleOption.prototype._setSelected = function (selected) {
                    this._renderer.setProperty(this._element.nativeElement, 'selected', selected);
                };
                /**
                 * \@description
                 * Lifecycle method called before the directive's instance is destroyed. For internal use only.
                 * @return {?}
                 */
                ɵNgSelectMultipleOption.prototype.ngOnDestroy = function () {
                    if (this._select) {
                        this._select._optionMap.delete(this.id);
                        this._select.writeValue(this._select.value);
                    }
                };
                return ɵNgSelectMultipleOption;
            }());
            ɵNgSelectMultipleOption.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: 'option' },] }
            ];
            /** @nocollapse */
            ɵNgSelectMultipleOption.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
                { type: SelectMultipleControlValueAccessor, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"] }] }
            ]; };
            ɵNgSelectMultipleOption.propDecorators = {
                ngValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ngValue',] }],
                value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['value',] }]
            };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * @param {?} name
             * @param {?} parent
             * @return {?}
             */
            function controlPath(name, parent) {
                return ( /** @type {?} */(parent.path)).concat([name]);
            }
            /**
             * @param {?} control
             * @param {?} dir
             * @return {?}
             */
            function setUpControl(control, dir) {
                if (!control)
                    _throwError(dir, 'Cannot find control with');
                if (!dir.valueAccessor)
                    _throwError(dir, 'No value accessor for form control with');
                control.validator = Validators.compose([( /** @type {?} */(control.validator)), dir.validator]);
                control.asyncValidator = Validators.composeAsync([( /** @type {?} */(control.asyncValidator)), dir.asyncValidator]);
                ( /** @type {?} */(dir.valueAccessor)).writeValue(control.value);
                setUpViewChangePipeline(control, dir);
                setUpModelChangePipeline(control, dir);
                setUpBlurPipeline(control, dir);
                if (( /** @type {?} */(dir.valueAccessor)).setDisabledState) {
                    control.registerOnDisabledChange(( /**
                     * @param {?} isDisabled
                     * @return {?}
                     */function (isDisabled) { ( /** @type {?} */(( /** @type {?} */(dir.valueAccessor)).setDisabledState))(isDisabled); }));
                }
                // re-run validation when validator binding changes, e.g. minlength=3 -> minlength=4
                dir._rawValidators.forEach(( /**
                 * @param {?} validator
                 * @return {?}
                 */function (validator) {
                    if ((( /** @type {?} */(validator))).registerOnValidatorChange)
                        ( /** @type {?} */((( /** @type {?} */(validator))).registerOnValidatorChange))(( /**
                         * @return {?}
                         */function () { return control.updateValueAndValidity(); }));
                }));
                dir._rawAsyncValidators.forEach(( /**
                 * @param {?} validator
                 * @return {?}
                 */function (validator) {
                    if ((( /** @type {?} */(validator))).registerOnValidatorChange)
                        ( /** @type {?} */((( /** @type {?} */(validator))).registerOnValidatorChange))(( /**
                         * @return {?}
                         */function () { return control.updateValueAndValidity(); }));
                }));
            }
            /**
             * @param {?} control
             * @param {?} dir
             * @return {?}
             */
            function cleanUpControl(control, dir) {
                ( /** @type {?} */(dir.valueAccessor)).registerOnChange(( /**
                 * @return {?}
                 */function () { return _noControlError(dir); }));
                ( /** @type {?} */(dir.valueAccessor)).registerOnTouched(( /**
                 * @return {?}
                 */function () { return _noControlError(dir); }));
                dir._rawValidators.forEach(( /**
                 * @param {?} validator
                 * @return {?}
                 */function (validator) {
                    if (validator.registerOnValidatorChange) {
                        validator.registerOnValidatorChange(null);
                    }
                }));
                dir._rawAsyncValidators.forEach(( /**
                 * @param {?} validator
                 * @return {?}
                 */function (validator) {
                    if (validator.registerOnValidatorChange) {
                        validator.registerOnValidatorChange(null);
                    }
                }));
                if (control)
                    control._clearChangeFns();
            }
            /**
             * @param {?} control
             * @param {?} dir
             * @return {?}
             */
            function setUpViewChangePipeline(control, dir) {
                ( /** @type {?} */(dir.valueAccessor)).registerOnChange(( /**
                 * @param {?} newValue
                 * @return {?}
                 */function (newValue) {
                    control._pendingValue = newValue;
                    control._pendingChange = true;
                    control._pendingDirty = true;
                    if (control.updateOn === 'change')
                        updateControl(control, dir);
                }));
            }
            /**
             * @param {?} control
             * @param {?} dir
             * @return {?}
             */
            function setUpBlurPipeline(control, dir) {
                ( /** @type {?} */(dir.valueAccessor)).registerOnTouched(( /**
                 * @return {?}
                 */function () {
                    control._pendingTouched = true;
                    if (control.updateOn === 'blur' && control._pendingChange)
                        updateControl(control, dir);
                    if (control.updateOn !== 'submit')
                        control.markAsTouched();
                }));
            }
            /**
             * @param {?} control
             * @param {?} dir
             * @return {?}
             */
            function updateControl(control, dir) {
                if (control._pendingDirty)
                    control.markAsDirty();
                control.setValue(control._pendingValue, { emitModelToViewChange: false });
                dir.viewToModelUpdate(control._pendingValue);
                control._pendingChange = false;
            }
            /**
             * @param {?} control
             * @param {?} dir
             * @return {?}
             */
            function setUpModelChangePipeline(control, dir) {
                control.registerOnChange(( /**
                 * @param {?} newValue
                 * @param {?} emitModelEvent
                 * @return {?}
                 */function (newValue, emitModelEvent) {
                    // control -> view
                    ( /** @type {?} */(dir.valueAccessor)).writeValue(newValue);
                    // control -> ngModel
                    if (emitModelEvent)
                        dir.viewToModelUpdate(newValue);
                }));
            }
            /**
             * @param {?} control
             * @param {?} dir
             * @return {?}
             */
            function setUpFormContainer(control, dir) {
                if (control == null)
                    _throwError(dir, 'Cannot find control with');
                control.validator = Validators.compose([control.validator, dir.validator]);
                control.asyncValidator = Validators.composeAsync([control.asyncValidator, dir.asyncValidator]);
            }
            /**
             * @param {?} dir
             * @return {?}
             */
            function _noControlError(dir) {
                return _throwError(dir, 'There is no FormControl instance attached to form control element with');
            }
            /**
             * @param {?} dir
             * @param {?} message
             * @return {?}
             */
            function _throwError(dir, message) {
                /** @type {?} */
                var messageEnd;
                if (( /** @type {?} */(dir.path)).length > 1) {
                    messageEnd = "path: '" + ( /** @type {?} */(dir.path)).join(' -> ') + "'";
                }
                else if (( /** @type {?} */(dir.path))[0]) {
                    messageEnd = "name: '" + dir.path + "'";
                }
                else {
                    messageEnd = 'unspecified name attribute';
                }
                throw new Error(message + " " + messageEnd);
            }
            /**
             * @param {?} validators
             * @return {?}
             */
            function composeValidators(validators) {
                return validators != null ? Validators.compose(validators.map(normalizeValidator)) : null;
            }
            /**
             * @param {?} validators
             * @return {?}
             */
            function composeAsyncValidators(validators) {
                return validators != null ? Validators.composeAsync(validators.map(normalizeAsyncValidator)) :
                    null;
            }
            /**
             * @param {?} changes
             * @param {?} viewModel
             * @return {?}
             */
            function isPropertyUpdated(changes, viewModel) {
                if (!changes.hasOwnProperty('model'))
                    return false;
                /** @type {?} */
                var change = changes['model'];
                if (change.isFirstChange())
                    return true;
                return !Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵlooseIdentical"])(viewModel, change.currentValue);
            }
            /** @type {?} */
            var BUILTIN_ACCESSORS = [
                CheckboxControlValueAccessor,
                RangeValueAccessor,
                NumberValueAccessor,
                SelectControlValueAccessor,
                SelectMultipleControlValueAccessor,
                RadioControlValueAccessor,
            ];
            /**
             * @param {?} valueAccessor
             * @return {?}
             */
            function isBuiltInAccessor(valueAccessor) {
                return BUILTIN_ACCESSORS.some(( /**
                 * @param {?} a
                 * @return {?}
                 */function (/**
                 * @param {?} a
                 * @return {?}
                 */ a) { return valueAccessor.constructor === a; }));
            }
            /**
             * @param {?} form
             * @param {?} directives
             * @return {?}
             */
            function syncPendingControls(form, directives) {
                form._syncPendingControls();
                directives.forEach(( /**
                 * @param {?} dir
                 * @return {?}
                 */function (/**
                 * @param {?} dir
                 * @return {?}
                 */ dir) {
                    /** @type {?} */
                    var control = ( /** @type {?} */(dir.control));
                    if (control.updateOn === 'submit' && control._pendingChange) {
                        dir.viewToModelUpdate(control._pendingValue);
                        control._pendingChange = false;
                    }
                }));
            }
            // TODO: vsavkin remove it once https://github.com/angular/angular/issues/3011 is implemented
            /**
             * @param {?} dir
             * @param {?} valueAccessors
             * @return {?}
             */
            function selectValueAccessor(dir, valueAccessors) {
                if (!valueAccessors)
                    return null;
                if (!Array.isArray(valueAccessors))
                    _throwError(dir, 'Value accessor was not provided as an array for form control with');
                /** @type {?} */
                var defaultAccessor = undefined;
                /** @type {?} */
                var builtinAccessor = undefined;
                /** @type {?} */
                var customAccessor = undefined;
                valueAccessors.forEach(( /**
                 * @param {?} v
                 * @return {?}
                 */function (v) {
                    if (v.constructor === DefaultValueAccessor) {
                        defaultAccessor = v;
                    }
                    else if (isBuiltInAccessor(v)) {
                        if (builtinAccessor)
                            _throwError(dir, 'More than one built-in value accessor matches form control with');
                        builtinAccessor = v;
                    }
                    else {
                        if (customAccessor)
                            _throwError(dir, 'More than one custom value accessor matches form control with');
                        customAccessor = v;
                    }
                }));
                if (customAccessor)
                    return customAccessor;
                if (builtinAccessor)
                    return builtinAccessor;
                if (defaultAccessor)
                    return defaultAccessor;
                _throwError(dir, 'No valid value accessor for form control with');
                return null;
            }
            /**
             * @template T
             * @param {?} list
             * @param {?} el
             * @return {?}
             */
            function removeDir(list, el) {
                /** @type {?} */
                var index = list.indexOf(el);
                if (index > -1)
                    list.splice(index, 1);
            }
            // TODO(kara): remove after deprecation period
            /**
             * @param {?} name
             * @param {?} type
             * @param {?} instance
             * @param {?} warningConfig
             * @return {?}
             */
            function _ngModelWarning(name, type, instance, warningConfig) {
                if (!Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])() || warningConfig === 'never')
                    return;
                if (((warningConfig === null || warningConfig === 'once') && !type._ngModelWarningSentOnce) ||
                    (warningConfig === 'always' && !instance._ngModelWarningSent)) {
                    ReactiveErrors.ngModelWarning(name);
                    type._ngModelWarningSentOnce = true;
                    instance._ngModelWarningSent = true;
                }
            }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Reports that a FormControl is valid, meaning that no errors exist in the input value.
             *
             * @see `status`
             * @type {?}
             */
            var VALID = 'VALID';
            /**
             * Reports that a FormControl is invalid, meaning that an error exists in the input value.
             *
             * @see `status`
             * @type {?}
             */
            var INVALID = 'INVALID';
            /**
             * Reports that a FormControl is pending, meaning that that async validation is occurring and
             * errors are not yet available for the input value.
             *
             * @see `markAsPending`
             * @see `status`
             * @type {?}
             */
            var PENDING = 'PENDING';
            /**
             * Reports that a FormControl is disabled, meaning that the control is exempt from ancestor
             * calculations of validity or value.
             *
             * @see `markAsDisabled`
             * @see `status`
             * @type {?}
             */
            var DISABLED = 'DISABLED';
            /**
             * @param {?} control
             * @param {?} path
             * @param {?} delimiter
             * @return {?}
             */
            function _find(control, path, delimiter) {
                if (path == null)
                    return null;
                if (!(path instanceof Array)) {
                    path = (( /** @type {?} */(path))).split(delimiter);
                }
                if (path instanceof Array && (path.length === 0))
                    return null;
                return (( /** @type {?} */(path))).reduce(( /**
                 * @param {?} v
                 * @param {?} name
                 * @return {?}
                 */function (v, name) {
                    if (v instanceof FormGroup) {
                        return v.controls.hasOwnProperty(( /** @type {?} */(name))) ? v.controls[name] : null;
                    }
                    if (v instanceof FormArray) {
                        return v.at(( /** @type {?} */(name))) || null;
                    }
                    return null;
                }), control);
            }
            /**
             * @param {?=} validatorOrOpts
             * @return {?}
             */
            function coerceToValidator(validatorOrOpts) {
                /** @type {?} */
                var validator = ( /** @type {?} */((isOptionsObj(validatorOrOpts) ? (( /** @type {?} */(validatorOrOpts))).validators :
                    validatorOrOpts)));
                return Array.isArray(validator) ? composeValidators(validator) : validator || null;
            }
            /**
             * @param {?=} asyncValidator
             * @param {?=} validatorOrOpts
             * @return {?}
             */
            function coerceToAsyncValidator(asyncValidator, validatorOrOpts) {
                /** @type {?} */
                var origAsyncValidator = ( /** @type {?} */((isOptionsObj(validatorOrOpts) ? (( /** @type {?} */(validatorOrOpts))).asyncValidators :
                    asyncValidator)));
                return Array.isArray(origAsyncValidator) ? composeAsyncValidators(origAsyncValidator) :
                    origAsyncValidator || null;
            }
            /**
             * Interface for options provided to an `AbstractControl`.
             *
             * \@publicApi
             * @record
             */
            function AbstractControlOptions() { }
            if (false) { }
            /**
             * @param {?=} validatorOrOpts
             * @return {?}
             */
            function isOptionsObj(validatorOrOpts) {
                return validatorOrOpts != null && !Array.isArray(validatorOrOpts) &&
                    typeof validatorOrOpts === 'object';
            }
            /**
             * This is the base class for `FormControl`, `FormGroup`, and `FormArray`.
             *
             * It provides some of the shared behavior that all controls and groups of controls have, like
             * running validators, calculating status, and resetting state. It also defines the properties
             * that are shared between all sub-classes, like `value`, `valid`, and `dirty`. It shouldn't be
             * instantiated directly.
             *
             * @see [Forms Guide](/guide/forms)
             * @see [Reactive Forms Guide](/guide/reactive-forms)
             * @see [Dynamic Forms Guide](/guide/dynamic-form)
             *
             * \@publicApi
             * @abstract
             */
            var AbstractControl = /** @class */ (function () {
                /**
                 * Initialize the AbstractControl instance.
                 *
                 * @param {?} validator The function that determines the synchronous validity of this control.
                 * @param {?} asyncValidator The function that determines the asynchronous validity of this
                 * control.
                 */
                function AbstractControl(validator, asyncValidator) {
                    this.validator = validator;
                    this.asyncValidator = asyncValidator;
                    /**
                     * \@internal
                     */
                    this._onCollectionChange = ( /**
                     * @return {?}
                     */function () { });
                    /**
                     * A control is `pristine` if the user has not yet changed
                     * the value in the UI.
                     *
                     * @return True if the user has not yet changed the value in the UI; compare `dirty`.
                     * Programmatic changes to a control's value do not mark it dirty.
                     */
                    this.pristine = true;
                    /**
                     * True if the control is marked as `touched`.
                     *
                     * A control is marked `touched` once the user has triggered
                     * a `blur` event on it.
                     */
                    this.touched = false;
                    /**
                     * \@internal
                     */
                    this._onDisabledChange = [];
                }
                Object.defineProperty(AbstractControl.prototype, "parent", {
                    /**
                     * The parent control.
                     * @return {?}
                     */
                    get: function () { return this._parent; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractControl.prototype, "valid", {
                    /**
                     * A control is `valid` when its `status` is `VALID`.
                     *
                     * @see {\@link AbstractControl.status}
                     *
                     * @return {?} True if the control has passed all of its validation tests,
                     * false otherwise.
                     */
                    get: function () { return this.status === VALID; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractControl.prototype, "invalid", {
                    /**
                     * A control is `invalid` when its `status` is `INVALID`.
                     *
                     * @see {\@link AbstractControl.status}
                     *
                     * @return {?} True if this control has failed one or more of its validation checks,
                     * false otherwise.
                     */
                    get: function () { return this.status === INVALID; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractControl.prototype, "pending", {
                    /**
                     * A control is `pending` when its `status` is `PENDING`.
                     *
                     * @see {\@link AbstractControl.status}
                     *
                     * @return {?} True if this control is in the process of conducting a validation check,
                     * false otherwise.
                     */
                    get: function () { return this.status == PENDING; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractControl.prototype, "disabled", {
                    /**
                     * A control is `disabled` when its `status` is `DISABLED`.
                     *
                     * Disabled controls are exempt from validation checks and
                     * are not included in the aggregate value of their ancestor
                     * controls.
                     *
                     * @see {\@link AbstractControl.status}
                     *
                     * @return {?} True if the control is disabled, false otherwise.
                     */
                    get: function () { return this.status === DISABLED; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractControl.prototype, "enabled", {
                    /**
                     * A control is `enabled` as long as its `status` is not `DISABLED`.
                     *
                     * @see {\@link AbstractControl.status}
                     *
                     * @return {?} True if the control has any status other than 'DISABLED',
                     * false if the status is 'DISABLED'.
                     *
                     */
                    get: function () { return this.status !== DISABLED; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractControl.prototype, "dirty", {
                    /**
                     * A control is `dirty` if the user has changed the value
                     * in the UI.
                     *
                     * @return {?} True if the user has changed the value of this control in the UI; compare `pristine`.
                     * Programmatic changes to a control's value do not mark it dirty.
                     */
                    get: function () { return !this.pristine; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractControl.prototype, "untouched", {
                    /**
                     * True if the control has not been marked as touched
                     *
                     * A control is `untouched` if the user has not yet triggered
                     * a `blur` event on it.
                     * @return {?}
                     */
                    get: function () { return !this.touched; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractControl.prototype, "updateOn", {
                    /**
                     * Reports the update strategy of the `AbstractControl` (meaning
                     * the event on which the control updates itself).
                     * Possible values: `'change'` | `'blur'` | `'submit'`
                     * Default value: `'change'`
                     * @return {?}
                     */
                    get: function () {
                        return this._updateOn ? this._updateOn : (this.parent ? this.parent.updateOn : 'change');
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Sets the synchronous validators that are active on this control.  Calling
                 * this overwrites any existing sync validators.
                 *
                 * When you add or remove a validator at run time, you must call
                 * `updateValueAndValidity()` for the new validation to take effect.
                 *
                 * @param {?} newValidator
                 * @return {?}
                 */
                AbstractControl.prototype.setValidators = function (newValidator) {
                    this.validator = coerceToValidator(newValidator);
                };
                /**
                 * Sets the async validators that are active on this control. Calling this
                 * overwrites any existing async validators.
                 *
                 * When you add or remove a validator at run time, you must call
                 * `updateValueAndValidity()` for the new validation to take effect.
                 *
                 * @param {?} newValidator
                 * @return {?}
                 */
                AbstractControl.prototype.setAsyncValidators = function (newValidator) {
                    this.asyncValidator = coerceToAsyncValidator(newValidator);
                };
                /**
                 * Empties out the sync validator list.
                 *
                 * When you add or remove a validator at run time, you must call
                 * `updateValueAndValidity()` for the new validation to take effect.
                 *
                 * @return {?}
                 */
                AbstractControl.prototype.clearValidators = function () { this.validator = null; };
                /**
                 * Empties out the async validator list.
                 *
                 * When you add or remove a validator at run time, you must call
                 * `updateValueAndValidity()` for the new validation to take effect.
                 *
                 * @return {?}
                 */
                AbstractControl.prototype.clearAsyncValidators = function () { this.asyncValidator = null; };
                /**
                 * Marks the control as `touched`. A control is touched by focus and
                 * blur events that do not change the value.
                 *
                 * @see `markAsUntouched()` / `markAsDirty()` / `markAsPristine()`
                 *
                 * @param {?=} opts Configuration options that determine how the control propagates changes
                 * and emits events events after marking is applied.
                 * * `onlySelf`: When true, mark only this control. When false or not supplied,
                 * marks all direct ancestors. Default is false.
                 * @return {?}
                 */
                AbstractControl.prototype.markAsTouched = function (opts) {
                    if (opts === void 0) { opts = {}; }
                    (( /** @type {?} */(this))).touched = true;
                    if (this._parent && !opts.onlySelf) {
                        this._parent.markAsTouched(opts);
                    }
                };
                /**
                 * Marks the control and all its descendant controls as `touched`.
                 * @see `markAsTouched()`
                 * @return {?}
                 */
                AbstractControl.prototype.markAllAsTouched = function () {
                    this.markAsTouched({ onlySelf: true });
                    this._forEachChild(( /**
                     * @param {?} control
                     * @return {?}
                     */function (control) { return control.markAllAsTouched(); }));
                };
                /**
                 * Marks the control as `untouched`.
                 *
                 * If the control has any children, also marks all children as `untouched`
                 * and recalculates the `touched` status of all parent controls.
                 *
                 * @see `markAsTouched()` / `markAsDirty()` / `markAsPristine()`
                 *
                 * @param {?=} opts Configuration options that determine how the control propagates changes
                 * and emits events after the marking is applied.
                 * * `onlySelf`: When true, mark only this control. When false or not supplied,
                 * marks all direct ancestors. Default is false.
                 * @return {?}
                 */
                AbstractControl.prototype.markAsUntouched = function (opts) {
                    if (opts === void 0) { opts = {}; }
                    (( /** @type {?} */(this))).touched = false;
                    this._pendingTouched = false;
                    this._forEachChild(( /**
                     * @param {?} control
                     * @return {?}
                     */function (control) { control.markAsUntouched({ onlySelf: true }); }));
                    if (this._parent && !opts.onlySelf) {
                        this._parent._updateTouched(opts);
                    }
                };
                /**
                 * Marks the control as `dirty`. A control becomes dirty when
                 * the control's value is changed through the UI; compare `markAsTouched`.
                 *
                 * @see `markAsTouched()` / `markAsUntouched()` / `markAsPristine()`
                 *
                 * @param {?=} opts Configuration options that determine how the control propagates changes
                 * and emits events after marking is applied.
                 * * `onlySelf`: When true, mark only this control. When false or not supplied,
                 * marks all direct ancestors. Default is false.
                 * @return {?}
                 */
                AbstractControl.prototype.markAsDirty = function (opts) {
                    if (opts === void 0) { opts = {}; }
                    (( /** @type {?} */(this))).pristine = false;
                    if (this._parent && !opts.onlySelf) {
                        this._parent.markAsDirty(opts);
                    }
                };
                /**
                 * Marks the control as `pristine`.
                 *
                 * If the control has any children, marks all children as `pristine`,
                 * and recalculates the `pristine` status of all parent
                 * controls.
                 *
                 * @see `markAsTouched()` / `markAsUntouched()` / `markAsDirty()`
                 *
                 * @param {?=} opts Configuration options that determine how the control emits events after
                 * marking is applied.
                 * * `onlySelf`: When true, mark only this control. When false or not supplied,
                 * marks all direct ancestors. Default is false..
                 * @return {?}
                 */
                AbstractControl.prototype.markAsPristine = function (opts) {
                    if (opts === void 0) { opts = {}; }
                    (( /** @type {?} */(this))).pristine = true;
                    this._pendingDirty = false;
                    this._forEachChild(( /**
                     * @param {?} control
                     * @return {?}
                     */function (control) { control.markAsPristine({ onlySelf: true }); }));
                    if (this._parent && !opts.onlySelf) {
                        this._parent._updatePristine(opts);
                    }
                };
                /**
                 * Marks the control as `pending`.
                 *
                 * A control is pending while the control performs async validation.
                 *
                 * @see {\@link AbstractControl.status}
                 *
                 * @param {?=} opts Configuration options that determine how the control propagates changes and
                 * emits events after marking is applied.
                 * * `onlySelf`: When true, mark only this control. When false or not supplied,
                 * marks all direct ancestors. Default is false..
                 * * `emitEvent`: When true or not supplied (the default), the `statusChanges`
                 * observable emits an event with the latest status the control is marked pending.
                 * When false, no events are emitted.
                 *
                 * @return {?}
                 */
                AbstractControl.prototype.markAsPending = function (opts) {
                    if (opts === void 0) { opts = {}; }
                    (( /** @type {?} */(this))).status = PENDING;
                    if (opts.emitEvent !== false) {
                        (( /** @type {?} */(this.statusChanges))).emit(this.status);
                    }
                    if (this._parent && !opts.onlySelf) {
                        this._parent.markAsPending(opts);
                    }
                };
                /**
                 * Disables the control. This means the control is exempt from validation checks and
                 * excluded from the aggregate value of any parent. Its status is `DISABLED`.
                 *
                 * If the control has children, all children are also disabled.
                 *
                 * @see {\@link AbstractControl.status}
                 *
                 * @param {?=} opts Configuration options that determine how the control propagates
                 * changes and emits events after the control is disabled.
                 * * `onlySelf`: When true, mark only this control. When false or not supplied,
                 * marks all direct ancestors. Default is false..
                 * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
                 * `valueChanges`
                 * observables emit events with the latest status and value when the control is disabled.
                 * When false, no events are emitted.
                 * @return {?}
                 */
                AbstractControl.prototype.disable = function (opts) {
                    if (opts === void 0) { opts = {}; }
                    // If parent has been marked artificially dirty we don't want to re-calculate the
                    // parent's dirtiness based on the children.
                    /** @type {?} */
                    var skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);
                    (( /** @type {?} */(this))).status = DISABLED;
                    (( /** @type {?} */(this))).errors = null;
                    this._forEachChild(( /**
                     * @param {?} control
                     * @return {?}
                     */function (control) { control.disable(Object.assign({}, opts, { onlySelf: true })); }));
                    this._updateValue();
                    if (opts.emitEvent !== false) {
                        (( /** @type {?} */(this.valueChanges))).emit(this.value);
                        (( /** @type {?} */(this.statusChanges))).emit(this.status);
                    }
                    this._updateAncestors(Object.assign({}, opts, { skipPristineCheck: skipPristineCheck }));
                    this._onDisabledChange.forEach(( /**
                     * @param {?} changeFn
                     * @return {?}
                     */function (changeFn) { return changeFn(true); }));
                };
                /**
                 * Enables the control. This means the control is included in validation checks and
                 * the aggregate value of its parent. Its status recalculates based on its value and
                 * its validators.
                 *
                 * By default, if the control has children, all children are enabled.
                 *
                 * @see {\@link AbstractControl.status}
                 *
                 * @param {?=} opts Configure options that control how the control propagates changes and
                 * emits events when marked as untouched
                 * * `onlySelf`: When true, mark only this control. When false or not supplied,
                 * marks all direct ancestors. Default is false..
                 * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
                 * `valueChanges`
                 * observables emit events with the latest status and value when the control is enabled.
                 * When false, no events are emitted.
                 * @return {?}
                 */
                AbstractControl.prototype.enable = function (opts) {
                    if (opts === void 0) { opts = {}; }
                    // If parent has been marked artificially dirty we don't want to re-calculate the
                    // parent's dirtiness based on the children.
                    /** @type {?} */
                    var skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);
                    (( /** @type {?} */(this))).status = VALID;
                    this._forEachChild(( /**
                     * @param {?} control
                     * @return {?}
                     */function (control) { control.enable(Object.assign({}, opts, { onlySelf: true })); }));
                    this.updateValueAndValidity({ onlySelf: true, emitEvent: opts.emitEvent });
                    this._updateAncestors(Object.assign({}, opts, { skipPristineCheck: skipPristineCheck }));
                    this._onDisabledChange.forEach(( /**
                     * @param {?} changeFn
                     * @return {?}
                     */function (changeFn) { return changeFn(false); }));
                };
                /**
                 * @private
                 * @param {?} opts
                 * @return {?}
                 */
                AbstractControl.prototype._updateAncestors = function (opts) {
                    if (this._parent && !opts.onlySelf) {
                        this._parent.updateValueAndValidity(opts);
                        if (!opts.skipPristineCheck) {
                            this._parent._updatePristine();
                        }
                        this._parent._updateTouched();
                    }
                };
                /**
                 * @param {?} parent Sets the parent of the control
                 * @return {?}
                 */
                AbstractControl.prototype.setParent = function (parent) { this._parent = parent; };
                /**
                 * Recalculates the value and validation status of the control.
                 *
                 * By default, it also updates the value and validity of its ancestors.
                 *
                 * @param {?=} opts Configuration options determine how the control propagates changes and emits events
                 * after updates and validity checks are applied.
                 * * `onlySelf`: When true, only update this control. When false or not supplied,
                 * update all direct ancestors. Default is false..
                 * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
                 * `valueChanges`
                 * observables emit events with the latest status and value when the control is updated.
                 * When false, no events are emitted.
                 * @return {?}
                 */
                AbstractControl.prototype.updateValueAndValidity = function (opts) {
                    if (opts === void 0) { opts = {}; }
                    this._setInitialStatus();
                    this._updateValue();
                    if (this.enabled) {
                        this._cancelExistingSubscription();
                        (( /** @type {?} */(this))).errors = this._runValidator();
                        (( /** @type {?} */(this))).status = this._calculateStatus();
                        if (this.status === VALID || this.status === PENDING) {
                            this._runAsyncValidator(opts.emitEvent);
                        }
                    }
                    if (opts.emitEvent !== false) {
                        (( /** @type {?} */(this.valueChanges))).emit(this.value);
                        (( /** @type {?} */(this.statusChanges))).emit(this.status);
                    }
                    if (this._parent && !opts.onlySelf) {
                        this._parent.updateValueAndValidity(opts);
                    }
                };
                /**
                 * \@internal
                 * @param {?=} opts
                 * @return {?}
                 */
                AbstractControl.prototype._updateTreeValidity = function (opts) {
                    if (opts === void 0) { opts = { emitEvent: true }; }
                    this._forEachChild(( /**
                     * @param {?} ctrl
                     * @return {?}
                     */function (ctrl) { return ctrl._updateTreeValidity(opts); }));
                    this.updateValueAndValidity({ onlySelf: true, emitEvent: opts.emitEvent });
                };
                /**
                 * @private
                 * @return {?}
                 */
                AbstractControl.prototype._setInitialStatus = function () {
                    (( /** @type {?} */(this))).status = this._allControlsDisabled() ? DISABLED : VALID;
                };
                /**
                 * @private
                 * @return {?}
                 */
                AbstractControl.prototype._runValidator = function () {
                    return this.validator ? this.validator(this) : null;
                };
                /**
                 * @private
                 * @param {?=} emitEvent
                 * @return {?}
                 */
                AbstractControl.prototype._runAsyncValidator = function (emitEvent) {
                    var _this = this;
                    if (this.asyncValidator) {
                        (( /** @type {?} */(this))).status = PENDING;
                        /** @type {?} */
                        var obs = toObservable(this.asyncValidator(this));
                        this._asyncValidationSubscription =
                            obs.subscribe(( /**
                             * @param {?} errors
                             * @return {?}
                             */function (errors) { return _this.setErrors(errors, { emitEvent: emitEvent }); }));
                    }
                };
                /**
                 * @private
                 * @return {?}
                 */
                AbstractControl.prototype._cancelExistingSubscription = function () {
                    if (this._asyncValidationSubscription) {
                        this._asyncValidationSubscription.unsubscribe();
                    }
                };
                /**
                 * Sets errors on a form control when running validations manually, rather than automatically.
                 *
                 * Calling `setErrors` also updates the validity of the parent control.
                 *
                 * \@usageNotes
                 * ### Manually set the errors for a control
                 *
                 * ```
                 * const login = new FormControl('someLogin');
                 * login.setErrors({
                 *   notUnique: true
                 * });
                 *
                 * expect(login.valid).toEqual(false);
                 * expect(login.errors).toEqual({ notUnique: true });
                 *
                 * login.setValue('someOtherLogin');
                 *
                 * expect(login.valid).toEqual(true);
                 * ```
                 * @param {?} errors
                 * @param {?=} opts
                 * @return {?}
                 */
                AbstractControl.prototype.setErrors = function (errors, opts) {
                    if (opts === void 0) { opts = {}; }
                    (( /** @type {?} */(this))).errors = errors;
                    this._updateControlsErrors(opts.emitEvent !== false);
                };
                /**
                 * Retrieves a child control given the control's name or path.
                 *
                 * \@usageNotes
                 * ### Retrieve a nested control
                 *
                 * For example, to get a `name` control nested within a `person` sub-group:
                 *
                 * * `this.form.get('person.name');`
                 *
                 * -OR-
                 *
                 * * `this.form.get(['person', 'name']);`
                 * @param {?} path A dot-delimited string or array of string/number values that define the path to the
                 * control.
                 *
                 * @return {?}
                 */
                AbstractControl.prototype.get = function (path) { return _find(this, path, '.'); };
                /**
                 * \@description
                 * Reports error data for the control with the given path.
                 *
                 * \@usageNotes
                 * For example, for the following `FormGroup`:
                 *
                 * ```
                 * form = new FormGroup({
                 *   address: new FormGroup({ street: new FormControl() })
                 * });
                 * ```
                 *
                 * The path to the 'street' control from the root form would be 'address' -> 'street'.
                 *
                 * It can be provided to this method in one of two formats:
                 *
                 * 1. An array of string control names, e.g. `['address', 'street']`
                 * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
                 *
                 * @param {?} errorCode The code of the error to check
                 * @param {?=} path A list of control names that designates how to move from the current control
                 * to the control that should be queried for errors.
                 *
                 * @return {?} error data for that particular error. If the control or error is not present,
                 * null is returned.
                 */
                AbstractControl.prototype.getError = function (errorCode, path) {
                    /** @type {?} */
                    var control = path ? this.get(path) : this;
                    return control && control.errors ? control.errors[errorCode] : null;
                };
                /**
                 * \@description
                 * Reports whether the control with the given path has the error specified.
                 *
                 * \@usageNotes
                 * For example, for the following `FormGroup`:
                 *
                 * ```
                 * form = new FormGroup({
                 *   address: new FormGroup({ street: new FormControl() })
                 * });
                 * ```
                 *
                 * The path to the 'street' control from the root form would be 'address' -> 'street'.
                 *
                 * It can be provided to this method in one of two formats:
                 *
                 * 1. An array of string control names, e.g. `['address', 'street']`
                 * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
                 *
                 * If no path is given, this method checks for the error on the current control.
                 *
                 * @param {?} errorCode The code of the error to check
                 * @param {?=} path A list of control names that designates how to move from the current control
                 * to the control that should be queried for errors.
                 *
                 * @return {?} whether the given error is present in the control at the given path.
                 *
                 * If the control is not present, false is returned.
                 */
                AbstractControl.prototype.hasError = function (errorCode, path) {
                    return !!this.getError(errorCode, path);
                };
                Object.defineProperty(AbstractControl.prototype, "root", {
                    /**
                     * Retrieves the top-level ancestor of this control.
                     * @return {?}
                     */
                    get: function () {
                        /** @type {?} */
                        var x = this;
                        while (x._parent) {
                            x = x._parent;
                        }
                        return x;
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * \@internal
                 * @param {?} emitEvent
                 * @return {?}
                 */
                AbstractControl.prototype._updateControlsErrors = function (emitEvent) {
                    (( /** @type {?} */(this))).status = this._calculateStatus();
                    if (emitEvent) {
                        (( /** @type {?} */(this.statusChanges))).emit(this.status);
                    }
                    if (this._parent) {
                        this._parent._updateControlsErrors(emitEvent);
                    }
                };
                /**
                 * \@internal
                 * @return {?}
                 */
                AbstractControl.prototype._initObservables = function () {
                    (( /** @type {?} */(this))).valueChanges = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
                    (( /** @type {?} */(this))).statusChanges = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
                };
                /**
                 * @private
                 * @return {?}
                 */
                AbstractControl.prototype._calculateStatus = function () {
                    if (this._allControlsDisabled())
                        return DISABLED;
                    if (this.errors)
                        return INVALID;
                    if (this._anyControlsHaveStatus(PENDING))
                        return PENDING;
                    if (this._anyControlsHaveStatus(INVALID))
                        return INVALID;
                    return VALID;
                };
                /**
                 * \@internal
                 * @param {?} status
                 * @return {?}
                 */
                AbstractControl.prototype._anyControlsHaveStatus = function (status) {
                    return this._anyControls(( /**
                     * @param {?} control
                     * @return {?}
                     */function (control) { return control.status === status; }));
                };
                /**
                 * \@internal
                 * @return {?}
                 */
                AbstractControl.prototype._anyControlsDirty = function () {
                    return this._anyControls(( /**
                     * @param {?} control
                     * @return {?}
                     */function (control) { return control.dirty; }));
                };
                /**
                 * \@internal
                 * @return {?}
                 */
                AbstractControl.prototype._anyControlsTouched = function () {
                    return this._anyControls(( /**
                     * @param {?} control
                     * @return {?}
                     */function (control) { return control.touched; }));
                };
                /**
                 * \@internal
                 * @param {?=} opts
                 * @return {?}
                 */
                AbstractControl.prototype._updatePristine = function (opts) {
                    if (opts === void 0) { opts = {}; }
                    (( /** @type {?} */(this))).pristine = !this._anyControlsDirty();
                    if (this._parent && !opts.onlySelf) {
                        this._parent._updatePristine(opts);
                    }
                };
                /**
                 * \@internal
                 * @param {?=} opts
                 * @return {?}
                 */
                AbstractControl.prototype._updateTouched = function (opts) {
                    if (opts === void 0) { opts = {}; }
                    (( /** @type {?} */(this))).touched = this._anyControlsTouched();
                    if (this._parent && !opts.onlySelf) {
                        this._parent._updateTouched(opts);
                    }
                };
                /**
                 * \@internal
                 * @param {?} formState
                 * @return {?}
                 */
                AbstractControl.prototype._isBoxedValue = function (formState) {
                    return typeof formState === 'object' && formState !== null &&
                        Object.keys(formState).length === 2 && 'value' in formState && 'disabled' in formState;
                };
                /**
                 * \@internal
                 * @param {?} fn
                 * @return {?}
                 */
                AbstractControl.prototype._registerOnCollectionChange = function (fn) { this._onCollectionChange = fn; };
                /**
                 * \@internal
                 * @param {?=} opts
                 * @return {?}
                 */
                AbstractControl.prototype._setUpdateStrategy = function (opts) {
                    if (isOptionsObj(opts) && (( /** @type {?} */(opts))).updateOn != null) {
                        this._updateOn = ( /** @type {?} */((( /** @type {?} */(opts))).updateOn));
                    }
                };
                /**
                 * Check to see if parent has been marked artificially dirty.
                 *
                 * \@internal
                 * @private
                 * @param {?=} onlySelf
                 * @return {?}
                 */
                AbstractControl.prototype._parentMarkedDirty = function (onlySelf) {
                    /** @type {?} */
                    var parentDirty = this._parent && this._parent.dirty;
                    return !onlySelf && parentDirty && !this._parent._anyControlsDirty();
                };
                return AbstractControl;
            }());
            if (false) { }
            /**
             * Tracks the value and validation status of an individual form control.
             *
             * This is one of the three fundamental building blocks of Angular forms, along with
             * `FormGroup` and `FormArray`. It extends the `AbstractControl` class that
             * implements most of the base functionality for accessing the value, validation status,
             * user interactions and events.
             *
             * @see `AbstractControl`
             * @see [Reactive Forms Guide](guide/reactive-forms)
             * @see [Usage Notes](#usage-notes)
             *
             * \@usageNotes
             *
             * ### Initializing Form Controls
             *
             * Instantiate a `FormControl`, with an initial value.
             *
             * ```ts
             * const control = new FormControl('some value');
             * console.log(control.value);     // 'some value'
             * ```
             *
             * The following example initializes the control with a form state object. The `value`
             * and `disabled` keys are required in this case.
             *
             * ```ts
             * const control = new FormControl({ value: 'n/a', disabled: true });
             * console.log(control.value);     // 'n/a'
             * console.log(control.status);    // 'DISABLED'
             * ```
             *
             * The following example initializes the control with a sync validator.
             *
             * ```ts
             * const control = new FormControl('', Validators.required);
             * console.log(control.value);      // ''
             * console.log(control.status);     // 'INVALID'
             * ```
             *
             * The following example initializes the control using an options object.
             *
             * ```ts
             * const control = new FormControl('', {
             *    validators: Validators.required,
             *    asyncValidators: myAsyncValidator
             * });
             * ```
             *
             * ### Configure the control to update on a blur event
             *
             * Set the `updateOn` option to `'blur'` to update on the blur `event`.
             *
             * ```ts
             * const control = new FormControl('', { updateOn: 'blur' });
             * ```
             *
             * ### Configure the control to update on a submit event
             *
             * Set the `updateOn` option to `'submit'` to update on a submit `event`.
             *
             * ```ts
             * const control = new FormControl('', { updateOn: 'submit' });
             * ```
             *
             * ### Reset the control back to an initial value
             *
             * You reset to a specific form state by passing through a standalone
             * value or a form state object that contains both a value and a disabled state
             * (these are the only two properties that cannot be calculated).
             *
             * ```ts
             * const control = new FormControl('Nancy');
             *
             * console.log(control.value); // 'Nancy'
             *
             * control.reset('Drew');
             *
             * console.log(control.value); // 'Drew'
             * ```
             *
             * ### Reset the control back to an initial value and disabled
             *
             * ```
             * const control = new FormControl('Nancy');
             *
             * console.log(control.value); // 'Nancy'
             * console.log(control.status); // 'VALID'
             *
             * control.reset({ value: 'Drew', disabled: true });
             *
             * console.log(control.value); // 'Drew'
             * console.log(control.status); // 'DISABLED'
             * ```
             *
             * \@publicApi
             */
            var FormControl = /** @class */ (function (_super) {
                __extends(FormControl, _super);
                /**
                 * Creates a new `FormControl` instance.
                 *
                 * @param {?=} formState Initializes the control with an initial value,
                 * or an object that defines the initial value and disabled state.
                 *
                 * @param {?=} validatorOrOpts A synchronous validator function, or an array of
                 * such functions, or an `AbstractControlOptions` object that contains validation functions
                 * and a validation trigger.
                 *
                 * @param {?=} asyncValidator A single async validator or array of async validator functions
                 *
                 */
                function FormControl(formState, validatorOrOpts, asyncValidator) {
                    if (formState === void 0) { formState = null; }
                    var _this = _super.call(this, coerceToValidator(validatorOrOpts), coerceToAsyncValidator(asyncValidator, validatorOrOpts)) || this;
                    /**
                     * \@internal
                     */
                    _this._onChange = [];
                    _this._applyFormState(formState);
                    _this._setUpdateStrategy(validatorOrOpts);
                    _this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
                    _this._initObservables();
                    return _this;
                }
                /**
                 * Sets a new value for the form control.
                 *
                 * @param {?} value The new value for the control.
                 * @param {?=} options Configuration options that determine how the control propagates changes
                 * and emits events when the value changes.
                 * The configuration options are passed to the {\@link AbstractControl#updateValueAndValidity
                 * updateValueAndValidity} method.
                 *
                 * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
                 * false.
                 * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
                 * `valueChanges`
                 * observables emit events with the latest status and value when the control value is updated.
                 * When false, no events are emitted.
                 * * `emitModelToViewChange`: When true or not supplied  (the default), each change triggers an
                 * `onChange` event to
                 * update the view.
                 * * `emitViewToModelChange`: When true or not supplied (the default), each change triggers an
                 * `ngModelChange`
                 * event to update the model.
                 *
                 * @return {?}
                 */
                FormControl.prototype.setValue = function (value, options) {
                    var _this = this;
                    if (options === void 0) { options = {}; }
                    (( /** @type {?} */(this))).value = this._pendingValue = value;
                    if (this._onChange.length && options.emitModelToViewChange !== false) {
                        this._onChange.forEach(( /**
                         * @param {?} changeFn
                         * @return {?}
                         */function (changeFn) { return changeFn(_this.value, options.emitViewToModelChange !== false); }));
                    }
                    this.updateValueAndValidity(options);
                };
                /**
                 * Patches the value of a control.
                 *
                 * This function is functionally the same as {\@link FormControl#setValue setValue} at this level.
                 * It exists for symmetry with {\@link FormGroup#patchValue patchValue} on `FormGroups` and
                 * `FormArrays`, where it does behave differently.
                 *
                 * @see `setValue` for options
                 * @param {?} value
                 * @param {?=} options
                 * @return {?}
                 */
                FormControl.prototype.patchValue = function (value, options) {
                    if (options === void 0) { options = {}; }
                    this.setValue(value, options);
                };
                /**
                 * Resets the form control, marking it `pristine` and `untouched`, and setting
                 * the value to null.
                 *
                 * @param {?=} formState Resets the control with an initial value,
                 * or an object that defines the initial value and disabled state.
                 *
                 * @param {?=} options Configuration options that determine how the control propagates changes
                 * and emits events after the value changes.
                 *
                 * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
                 * false.
                 * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
                 * `valueChanges`
                 * observables emit events with the latest status and value when the control is reset.
                 * When false, no events are emitted.
                 *
                 * @return {?}
                 */
                FormControl.prototype.reset = function (formState, options) {
                    if (formState === void 0) { formState = null; }
                    if (options === void 0) { options = {}; }
                    this._applyFormState(formState);
                    this.markAsPristine(options);
                    this.markAsUntouched(options);
                    this.setValue(this.value, options);
                    this._pendingChange = false;
                };
                /**
                 * \@internal
                 * @return {?}
                 */
                FormControl.prototype._updateValue = function () { };
                /**
                 * \@internal
                 * @param {?} condition
                 * @return {?}
                 */
                FormControl.prototype._anyControls = function (condition) { return false; };
                /**
                 * \@internal
                 * @return {?}
                 */
                FormControl.prototype._allControlsDisabled = function () { return this.disabled; };
                /**
                 * Register a listener for change events.
                 *
                 * @param {?} fn The method that is called when the value changes
                 * @return {?}
                 */
                FormControl.prototype.registerOnChange = function (fn) { this._onChange.push(fn); };
                /**
                 * \@internal
                 * @return {?}
                 */
                FormControl.prototype._clearChangeFns = function () {
                    this._onChange = [];
                    this._onDisabledChange = [];
                    this._onCollectionChange = ( /**
                     * @return {?}
                     */function () { });
                };
                /**
                 * Register a listener for disabled events.
                 *
                 * @param {?} fn The method that is called when the disabled status changes.
                 * @return {?}
                 */
                FormControl.prototype.registerOnDisabledChange = function (fn) {
                    this._onDisabledChange.push(fn);
                };
                /**
                 * \@internal
                 * @param {?} cb
                 * @return {?}
                 */
                FormControl.prototype._forEachChild = function (cb) { };
                /**
                 * \@internal
                 * @return {?}
                 */
                FormControl.prototype._syncPendingControls = function () {
                    if (this.updateOn === 'submit') {
                        if (this._pendingDirty)
                            this.markAsDirty();
                        if (this._pendingTouched)
                            this.markAsTouched();
                        if (this._pendingChange) {
                            this.setValue(this._pendingValue, { onlySelf: true, emitModelToViewChange: false });
                            return true;
                        }
                    }
                    return false;
                };
                /**
                 * @private
                 * @param {?} formState
                 * @return {?}
                 */
                FormControl.prototype._applyFormState = function (formState) {
                    if (this._isBoxedValue(formState)) {
                        (( /** @type {?} */(this))).value = this._pendingValue = formState.value;
                        formState.disabled ? this.disable({ onlySelf: true, emitEvent: false }) :
                            this.enable({ onlySelf: true, emitEvent: false });
                    }
                    else {
                        (( /** @type {?} */(this))).value = this._pendingValue = formState;
                    }
                };
                return FormControl;
            }(AbstractControl));
            if (false) { }
            /**
             * Tracks the value and validity state of a group of `FormControl` instances.
             *
             * A `FormGroup` aggregates the values of each child `FormControl` into one object,
             * with each control name as the key.  It calculates its status by reducing the status values
             * of its children. For example, if one of the controls in a group is invalid, the entire
             * group becomes invalid.
             *
             * `FormGroup` is one of the three fundamental building blocks used to define forms in Angular,
             * along with `FormControl` and `FormArray`.
             *
             * When instantiating a `FormGroup`, pass in a collection of child controls as the first
             * argument. The key for each child registers the name for the control.
             *
             * \@usageNotes
             *
             * ### Create a form group with 2 controls
             *
             * ```
             * const form = new FormGroup({
             *   first: new FormControl('Nancy', Validators.minLength(2)),
             *   last: new FormControl('Drew'),
             * });
             *
             * console.log(form.value);   // {first: 'Nancy', last; 'Drew'}
             * console.log(form.status);  // 'VALID'
             * ```
             *
             * ### Create a form group with a group-level validator
             *
             * You include group-level validators as the second arg, or group-level async
             * validators as the third arg. These come in handy when you want to perform validation
             * that considers the value of more than one child control.
             *
             * ```
             * const form = new FormGroup({
             *   password: new FormControl('', Validators.minLength(2)),
             *   passwordConfirm: new FormControl('', Validators.minLength(2)),
             * }, passwordMatchValidator);
             *
             *
             * function passwordMatchValidator(g: FormGroup) {
             *    return g.get('password').value === g.get('passwordConfirm').value
             *       ? null : {'mismatch': true};
             * }
             * ```
             *
             * Like `FormControl` instances, you choose to pass in
             * validators and async validators as part of an options object.
             *
             * ```
             * const form = new FormGroup({
             *   password: new FormControl('')
             *   passwordConfirm: new FormControl('')
             * }, { validators: passwordMatchValidator, asyncValidators: otherValidator });
             * ```
             *
             * ### Set the updateOn property for all controls in a form group
             *
             * The options object is used to set a default value for each child
             * control's `updateOn` property. If you set `updateOn` to `'blur'` at the
             * group level, all child controls default to 'blur', unless the child
             * has explicitly specified a different `updateOn` value.
             *
             * ```ts
             * const c = new FormGroup({
             *   one: new FormControl()
             * }, { updateOn: 'blur' });
             * ```
             *
             * \@publicApi
             */
            var FormGroup = /** @class */ (function (_super) {
                __extends(FormGroup, _super);
                /**
                 * Creates a new `FormGroup` instance.
                 *
                 * @param {?} controls A collection of child controls. The key for each child is the name
                 * under which it is registered.
                 *
                 * @param {?=} validatorOrOpts A synchronous validator function, or an array of
                 * such functions, or an `AbstractControlOptions` object that contains validation functions
                 * and a validation trigger.
                 *
                 * @param {?=} asyncValidator A single async validator or array of async validator functions
                 *
                 */
                function FormGroup(controls, validatorOrOpts, asyncValidator) {
                    var _this = _super.call(this, coerceToValidator(validatorOrOpts), coerceToAsyncValidator(asyncValidator, validatorOrOpts)) || this;
                    _this.controls = controls;
                    _this._initObservables();
                    _this._setUpdateStrategy(validatorOrOpts);
                    _this._setUpControls();
                    _this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
                    return _this;
                }
                /**
                 * Registers a control with the group's list of controls.
                 *
                 * This method does not update the value or validity of the control.
                 * Use {\@link FormGroup#addControl addControl} instead.
                 *
                 * @param {?} name The control name to register in the collection
                 * @param {?} control Provides the control for the given name
                 * @return {?}
                 */
                FormGroup.prototype.registerControl = function (name, control) {
                    if (this.controls[name])
                        return this.controls[name];
                    this.controls[name] = control;
                    control.setParent(this);
                    control._registerOnCollectionChange(this._onCollectionChange);
                    return control;
                };
                /**
                 * Add a control to this group.
                 *
                 * This method also updates the value and validity of the control.
                 *
                 * @param {?} name The control name to add to the collection
                 * @param {?} control Provides the control for the given name
                 * @return {?}
                 */
                FormGroup.prototype.addControl = function (name, control) {
                    this.registerControl(name, control);
                    this.updateValueAndValidity();
                    this._onCollectionChange();
                };
                /**
                 * Remove a control from this group.
                 *
                 * @param {?} name The control name to remove from the collection
                 * @return {?}
                 */
                FormGroup.prototype.removeControl = function (name) {
                    if (this.controls[name])
                        this.controls[name]._registerOnCollectionChange(( /**
                         * @return {?}
                         */function () { }));
                    delete (this.controls[name]);
                    this.updateValueAndValidity();
                    this._onCollectionChange();
                };
                /**
                 * Replace an existing control.
                 *
                 * @param {?} name The control name to replace in the collection
                 * @param {?} control Provides the control for the given name
                 * @return {?}
                 */
                FormGroup.prototype.setControl = function (name, control) {
                    if (this.controls[name])
                        this.controls[name]._registerOnCollectionChange(( /**
                         * @return {?}
                         */function () { }));
                    delete (this.controls[name]);
                    if (control)
                        this.registerControl(name, control);
                    this.updateValueAndValidity();
                    this._onCollectionChange();
                };
                /**
                 * Check whether there is an enabled control with the given name in the group.
                 *
                 * Reports false for disabled controls. If you'd like to check for existence in the group
                 * only, use {\@link AbstractControl#get get} instead.
                 *
                 * @param {?} controlName The control name to check for existence in the collection
                 *
                 * @return {?} false for disabled controls, true otherwise.
                 */
                FormGroup.prototype.contains = function (controlName) {
                    return this.controls.hasOwnProperty(controlName) && this.controls[controlName].enabled;
                };
                /**
                 * Sets the value of the `FormGroup`. It accepts an object that matches
                 * the structure of the group, with control names as keys.
                 *
                 * \@usageNotes
                 * ### Set the complete value for the form group
                 *
                 * ```
                 * const form = new FormGroup({
                 *   first: new FormControl(),
                 *   last: new FormControl()
                 * });
                 *
                 * console.log(form.value);   // {first: null, last: null}
                 *
                 * form.setValue({first: 'Nancy', last: 'Drew'});
                 * console.log(form.value);   // {first: 'Nancy', last: 'Drew'}
                 * ```
                 *
                 * @throws When strict checks fail, such as setting the value of a control
                 * that doesn't exist or if you excluding the value of a control.
                 *
                 * @param {?} value The new value for the control that matches the structure of the group.
                 * @param {?=} options Configuration options that determine how the control propagates changes
                 * and emits events after the value changes.
                 * The configuration options are passed to the {\@link AbstractControl#updateValueAndValidity
                 * updateValueAndValidity} method.
                 *
                 * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
                 * false.
                 * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
                 * `valueChanges`
                 * observables emit events with the latest status and value when the control value is updated.
                 * When false, no events are emitted.
                 * @return {?}
                 */
                FormGroup.prototype.setValue = function (value, options) {
                    var _this = this;
                    if (options === void 0) { options = {}; }
                    this._checkAllValuesPresent(value);
                    Object.keys(value).forEach(( /**
                     * @param {?} name
                     * @return {?}
                     */function (/**
                     * @param {?} name
                     * @return {?}
                     */ name) {
                        _this._throwIfControlMissing(name);
                        _this.controls[name].setValue(value[name], { onlySelf: true, emitEvent: options.emitEvent });
                    }));
                    this.updateValueAndValidity(options);
                };
                /**
                 * Patches the value of the `FormGroup`. It accepts an object with control
                 * names as keys, and does its best to match the values to the correct controls
                 * in the group.
                 *
                 * It accepts both super-sets and sub-sets of the group without throwing an error.
                 *
                 * \@usageNotes
                 * ### Patch the value for a form group
                 *
                 * ```
                 * const form = new FormGroup({
                 *    first: new FormControl(),
                 *    last: new FormControl()
                 * });
                 * console.log(form.value);   // {first: null, last: null}
                 *
                 * form.patchValue({first: 'Nancy'});
                 * console.log(form.value);   // {first: 'Nancy', last: null}
                 * ```
                 *
                 * @param {?} value The object that matches the structure of the group.
                 * @param {?=} options Configuration options that determine how the control propagates changes and
                 * emits events after the value is patched.
                 * * `onlySelf`: When true, each change only affects this control and not its parent. Default is
                 * true.
                 * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
                 * `valueChanges`
                 * observables emit events with the latest status and value when the control value is updated.
                 * When false, no events are emitted.
                 * The configuration options are passed to the {\@link AbstractControl#updateValueAndValidity
                 * updateValueAndValidity} method.
                 * @return {?}
                 */
                FormGroup.prototype.patchValue = function (value, options) {
                    var _this = this;
                    if (options === void 0) { options = {}; }
                    Object.keys(value).forEach(( /**
                     * @param {?} name
                     * @return {?}
                     */function (/**
                     * @param {?} name
                     * @return {?}
                     */ name) {
                        if (_this.controls[name]) {
                            _this.controls[name].patchValue(value[name], { onlySelf: true, emitEvent: options.emitEvent });
                        }
                    }));
                    this.updateValueAndValidity(options);
                };
                /**
                 * Resets the `FormGroup`, marks all descendants are marked `pristine` and `untouched`, and
                 * the value of all descendants to null.
                 *
                 * You reset to a specific form state by passing in a map of states
                 * that matches the structure of your form, with control names as keys. The state
                 * is a standalone value or a form state object with both a value and a disabled
                 * status.
                 *
                 * \@usageNotes
                 *
                 * ### Reset the form group values
                 *
                 * ```ts
                 * const form = new FormGroup({
                 *   first: new FormControl('first name'),
                 *   last: new FormControl('last name')
                 * });
                 *
                 * console.log(form.value);  // {first: 'first name', last: 'last name'}
                 *
                 * form.reset({ first: 'name', last: 'last name' });
                 *
                 * console.log(form.value);  // {first: 'name', last: 'last name'}
                 * ```
                 *
                 * ### Reset the form group values and disabled status
                 *
                 * ```
                 * const form = new FormGroup({
                 *   first: new FormControl('first name'),
                 *   last: new FormControl('last name')
                 * });
                 *
                 * form.reset({
                 *   first: {value: 'name', disabled: true},
                 *   last: 'last'
                 * });
                 *
                 * console.log(this.form.value);  // {first: 'name', last: 'last name'}
                 * console.log(this.form.get('first').status);  // 'DISABLED'
                 * ```
                 * @param {?=} value Resets the control with an initial value,
                 * or an object that defines the initial value and disabled state.
                 *
                 * @param {?=} options Configuration options that determine how the control propagates changes
                 * and emits events when the group is reset.
                 * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
                 * false.
                 * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
                 * `valueChanges`
                 * observables emit events with the latest status and value when the control is reset.
                 * When false, no events are emitted.
                 * The configuration options are passed to the {\@link AbstractControl#updateValueAndValidity
                 * updateValueAndValidity} method.
                 *
                 * @return {?}
                 */
                FormGroup.prototype.reset = function (value, options) {
                    if (value === void 0) { value = {}; }
                    if (options === void 0) { options = {}; }
                    this._forEachChild(( /**
                     * @param {?} control
                     * @param {?} name
                     * @return {?}
                     */function (control, name) {
                        control.reset(value[name], { onlySelf: true, emitEvent: options.emitEvent });
                    }));
                    this._updatePristine(options);
                    this._updateTouched(options);
                    this.updateValueAndValidity(options);
                };
                /**
                 * The aggregate value of the `FormGroup`, including any disabled controls.
                 *
                 * Retrieves all values regardless of disabled status.
                 * The `value` property is the best way to get the value of the group, because
                 * it excludes disabled controls in the `FormGroup`.
                 * @return {?}
                 */
                FormGroup.prototype.getRawValue = function () {
                    return this._reduceChildren({}, ( /**
                     * @param {?} acc
                     * @param {?} control
                     * @param {?} name
                     * @return {?}
                     */function (acc, control, name) {
                        acc[name] = control instanceof FormControl ? control.value : (( /** @type {?} */(control))).getRawValue();
                        return acc;
                    }));
                };
                /**
                 * \@internal
                 * @return {?}
                 */
                FormGroup.prototype._syncPendingControls = function () {
                    /** @type {?} */
                    var subtreeUpdated = this._reduceChildren(false, ( /**
                     * @param {?} updated
                     * @param {?} child
                     * @return {?}
                     */function (updated, child) {
                        return child._syncPendingControls() ? true : updated;
                    }));
                    if (subtreeUpdated)
                        this.updateValueAndValidity({ onlySelf: true });
                    return subtreeUpdated;
                };
                /**
                 * \@internal
                 * @param {?} name
                 * @return {?}
                 */
                FormGroup.prototype._throwIfControlMissing = function (name) {
                    if (!Object.keys(this.controls).length) {
                        throw new Error("\n        There are no form controls registered with this group yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
                    }
                    if (!this.controls[name]) {
                        throw new Error("Cannot find form control with name: " + name + ".");
                    }
                };
                /**
                 * \@internal
                 * @param {?} cb
                 * @return {?}
                 */
                FormGroup.prototype._forEachChild = function (cb) {
                    var _this = this;
                    Object.keys(this.controls).forEach(( /**
                     * @param {?} k
                     * @return {?}
                     */function (/**
                     * @param {?} k
                     * @return {?}
                     */ k) { return cb(_this.controls[k], k); }));
                };
                /**
                 * \@internal
                 * @return {?}
                 */
                FormGroup.prototype._setUpControls = function () {
                    var _this = this;
                    this._forEachChild(( /**
                     * @param {?} control
                     * @return {?}
                     */function (control) {
                        control.setParent(_this);
                        control._registerOnCollectionChange(_this._onCollectionChange);
                    }));
                };
                /**
                 * \@internal
                 * @return {?}
                 */
                FormGroup.prototype._updateValue = function () { (( /** @type {?} */(this))).value = this._reduceValue(); };
                /**
                 * \@internal
                 * @param {?} condition
                 * @return {?}
                 */
                FormGroup.prototype._anyControls = function (condition) {
                    var _this = this;
                    /** @type {?} */
                    var res = false;
                    this._forEachChild(( /**
                     * @param {?} control
                     * @param {?} name
                     * @return {?}
                     */function (control, name) {
                        res = res || (_this.contains(name) && condition(control));
                    }));
                    return res;
                };
                /**
                 * \@internal
                 * @return {?}
                 */
                FormGroup.prototype._reduceValue = function () {
                    var _this = this;
                    return this._reduceChildren({}, ( /**
                     * @param {?} acc
                     * @param {?} control
                     * @param {?} name
                     * @return {?}
                     */function (acc, control, name) {
                        if (control.enabled || _this.disabled) {
                            acc[name] = control.value;
                        }
                        return acc;
                    }));
                };
                /**
                 * \@internal
                 * @param {?} initValue
                 * @param {?} fn
                 * @return {?}
                 */
                FormGroup.prototype._reduceChildren = function (initValue, fn) {
                    /** @type {?} */
                    var res = initValue;
                    this._forEachChild(( /**
                     * @param {?} control
                     * @param {?} name
                     * @return {?}
                     */function (control, name) { res = fn(res, control, name); }));
                    return res;
                };
                /**
                 * \@internal
                 * @return {?}
                 */
                FormGroup.prototype._allControlsDisabled = function () {
                    for (var _i = 0, _a = Object.keys(this.controls); _i < _a.length; _i++) {
                        var controlName = _a[_i];
                        if (this.controls[controlName].enabled) {
                            return false;
                        }
                    }
                    return Object.keys(this.controls).length > 0 || this.disabled;
                };
                /**
                 * \@internal
                 * @param {?} value
                 * @return {?}
                 */
                FormGroup.prototype._checkAllValuesPresent = function (value) {
                    this._forEachChild(( /**
                     * @param {?} control
                     * @param {?} name
                     * @return {?}
                     */function (control, name) {
                        if (value[name] === undefined) {
                            throw new Error("Must supply a value for form control with name: '" + name + "'.");
                        }
                    }));
                };
                return FormGroup;
            }(AbstractControl));
            if (false) { }
            /**
             * Tracks the value and validity state of an array of `FormControl`,
             * `FormGroup` or `FormArray` instances.
             *
             * A `FormArray` aggregates the values of each child `FormControl` into an array.
             * It calculates its status by reducing the status values of its children. For example, if one of
             * the controls in a `FormArray` is invalid, the entire array becomes invalid.
             *
             * `FormArray` is one of the three fundamental building blocks used to define forms in Angular,
             * along with `FormControl` and `FormGroup`.
             *
             * \@usageNotes
             *
             * ### Create an array of form controls
             *
             * ```
             * const arr = new FormArray([
             *   new FormControl('Nancy', Validators.minLength(2)),
             *   new FormControl('Drew'),
             * ]);
             *
             * console.log(arr.value);   // ['Nancy', 'Drew']
             * console.log(arr.status);  // 'VALID'
             * ```
             *
             * ### Create a form array with array-level validators
             *
             * You include array-level validators and async validators. These come in handy
             * when you want to perform validation that considers the value of more than one child
             * control.
             *
             * The two types of validators are passed in separately as the second and third arg
             * respectively, or together as part of an options object.
             *
             * ```
             * const arr = new FormArray([
             *   new FormControl('Nancy'),
             *   new FormControl('Drew')
             * ], {validators: myValidator, asyncValidators: myAsyncValidator});
             * ```
             *
             * ### Set the updateOn property for all controls in a form array
             *
             * The options object is used to set a default value for each child
             * control's `updateOn` property. If you set `updateOn` to `'blur'` at the
             * array level, all child controls default to 'blur', unless the child
             * has explicitly specified a different `updateOn` value.
             *
             * ```ts
             * const arr = new FormArray([
             *    new FormControl()
             * ], {updateOn: 'blur'});
             * ```
             *
             * ### Adding or removing controls from a form array
             *
             * To change the controls in the array, use the `push`, `insert`, `removeAt` or `clear` methods
             * in `FormArray` itself. These methods ensure the controls are properly tracked in the
             * form's hierarchy. Do not modify the array of `AbstractControl`s used to instantiate
             * the `FormArray` directly, as that result in strange and unexpected behavior such
             * as broken change detection.
             *
             * \@publicApi
             */
            var FormArray = /** @class */ (function (_super) {
                __extends(FormArray, _super);
                /**
                 * Creates a new `FormArray` instance.
                 *
                 * @param {?} controls An array of child controls. Each child control is given an index
                 * where it is registered.
                 *
                 * @param {?=} validatorOrOpts A synchronous validator function, or an array of
                 * such functions, or an `AbstractControlOptions` object that contains validation functions
                 * and a validation trigger.
                 *
                 * @param {?=} asyncValidator A single async validator or array of async validator functions
                 *
                 */
                function FormArray(controls, validatorOrOpts, asyncValidator) {
                    var _this = _super.call(this, coerceToValidator(validatorOrOpts), coerceToAsyncValidator(asyncValidator, validatorOrOpts)) || this;
                    _this.controls = controls;
                    _this._initObservables();
                    _this._setUpdateStrategy(validatorOrOpts);
                    _this._setUpControls();
                    _this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
                    return _this;
                }
                /**
                 * Get the `AbstractControl` at the given `index` in the array.
                 *
                 * @param {?} index Index in the array to retrieve the control
                 * @return {?}
                 */
                FormArray.prototype.at = function (index) { return this.controls[index]; };
                /**
                 * Insert a new `AbstractControl` at the end of the array.
                 *
                 * @param {?} control Form control to be inserted
                 * @return {?}
                 */
                FormArray.prototype.push = function (control) {
                    this.controls.push(control);
                    this._registerControl(control);
                    this.updateValueAndValidity();
                    this._onCollectionChange();
                };
                /**
                 * Insert a new `AbstractControl` at the given `index` in the array.
                 *
                 * @param {?} index Index in the array to insert the control
                 * @param {?} control Form control to be inserted
                 * @return {?}
                 */
                FormArray.prototype.insert = function (index, control) {
                    this.controls.splice(index, 0, control);
                    this._registerControl(control);
                    this.updateValueAndValidity();
                };
                /**
                 * Remove the control at the given `index` in the array.
                 *
                 * @param {?} index Index in the array to remove the control
                 * @return {?}
                 */
                FormArray.prototype.removeAt = function (index) {
                    if (this.controls[index])
                        this.controls[index]._registerOnCollectionChange(( /**
                         * @return {?}
                         */function () { }));
                    this.controls.splice(index, 1);
                    this.updateValueAndValidity();
                };
                /**
                 * Replace an existing control.
                 *
                 * @param {?} index Index in the array to replace the control
                 * @param {?} control The `AbstractControl` control to replace the existing control
                 * @return {?}
                 */
                FormArray.prototype.setControl = function (index, control) {
                    if (this.controls[index])
                        this.controls[index]._registerOnCollectionChange(( /**
                         * @return {?}
                         */function () { }));
                    this.controls.splice(index, 1);
                    if (control) {
                        this.controls.splice(index, 0, control);
                        this._registerControl(control);
                    }
                    this.updateValueAndValidity();
                    this._onCollectionChange();
                };
                Object.defineProperty(FormArray.prototype, "length", {
                    /**
                     * Length of the control array.
                     * @return {?}
                     */
                    get: function () { return this.controls.length; },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Sets the value of the `FormArray`. It accepts an array that matches
                 * the structure of the control.
                 *
                 * This method performs strict checks, and throws an error if you try
                 * to set the value of a control that doesn't exist or if you exclude the
                 * value of a control.
                 *
                 * \@usageNotes
                 * ### Set the values for the controls in the form array
                 *
                 * ```
                 * const arr = new FormArray([
                 *   new FormControl(),
                 *   new FormControl()
                 * ]);
                 * console.log(arr.value);   // [null, null]
                 *
                 * arr.setValue(['Nancy', 'Drew']);
                 * console.log(arr.value);   // ['Nancy', 'Drew']
                 * ```
                 *
                 * @param {?} value Array of values for the controls
                 * @param {?=} options Configure options that determine how the control propagates changes and
                 * emits events after the value changes
                 *
                 * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
                 * is false.
                 * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
                 * `valueChanges`
                 * observables emit events with the latest status and value when the control value is updated.
                 * When false, no events are emitted.
                 * The configuration options are passed to the {\@link AbstractControl#updateValueAndValidity
                 * updateValueAndValidity} method.
                 * @return {?}
                 */
                FormArray.prototype.setValue = function (value, options) {
                    var _this = this;
                    if (options === void 0) { options = {}; }
                    this._checkAllValuesPresent(value);
                    value.forEach(( /**
                     * @param {?} newValue
                     * @param {?} index
                     * @return {?}
                     */function (newValue, index) {
                        _this._throwIfControlMissing(index);
                        _this.at(index).setValue(newValue, { onlySelf: true, emitEvent: options.emitEvent });
                    }));
                    this.updateValueAndValidity(options);
                };
                /**
                 * Patches the value of the `FormArray`. It accepts an array that matches the
                 * structure of the control, and does its best to match the values to the correct
                 * controls in the group.
                 *
                 * It accepts both super-sets and sub-sets of the array without throwing an error.
                 *
                 * \@usageNotes
                 * ### Patch the values for controls in a form array
                 *
                 * ```
                 * const arr = new FormArray([
                 *    new FormControl(),
                 *    new FormControl()
                 * ]);
                 * console.log(arr.value);   // [null, null]
                 *
                 * arr.patchValue(['Nancy']);
                 * console.log(arr.value);   // ['Nancy', null]
                 * ```
                 *
                 * @param {?} value Array of latest values for the controls
                 * @param {?=} options Configure options that determine how the control propagates changes and
                 * emits events after the value changes
                 *
                 * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
                 * is false.
                 * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
                 * `valueChanges`
                 * observables emit events with the latest status and value when the control value is updated.
                 * When false, no events are emitted.
                 * The configuration options are passed to the {\@link AbstractControl#updateValueAndValidity
                 * updateValueAndValidity} method.
                 * @return {?}
                 */
                FormArray.prototype.patchValue = function (value, options) {
                    var _this = this;
                    if (options === void 0) { options = {}; }
                    value.forEach(( /**
                     * @param {?} newValue
                     * @param {?} index
                     * @return {?}
                     */function (newValue, index) {
                        if (_this.at(index)) {
                            _this.at(index).patchValue(newValue, { onlySelf: true, emitEvent: options.emitEvent });
                        }
                    }));
                    this.updateValueAndValidity(options);
                };
                /**
                 * Resets the `FormArray` and all descendants are marked `pristine` and `untouched`, and the
                 * value of all descendants to null or null maps.
                 *
                 * You reset to a specific form state by passing in an array of states
                 * that matches the structure of the control. The state is a standalone value
                 * or a form state object with both a value and a disabled status.
                 *
                 * \@usageNotes
                 * ### Reset the values in a form array
                 *
                 * ```ts
                 * const arr = new FormArray([
                 *    new FormControl(),
                 *    new FormControl()
                 * ]);
                 * arr.reset(['name', 'last name']);
                 *
                 * console.log(this.arr.value);  // ['name', 'last name']
                 * ```
                 *
                 * ### Reset the values in a form array and the disabled status for the first control
                 *
                 * ```
                 * this.arr.reset([
                 *   {value: 'name', disabled: true},
                 *   'last'
                 * ]);
                 *
                 * console.log(this.arr.value);  // ['name', 'last name']
                 * console.log(this.arr.get(0).status);  // 'DISABLED'
                 * ```
                 *
                 * @param {?=} value Array of values for the controls
                 * @param {?=} options Configure options that determine how the control propagates changes and
                 * emits events after the value changes
                 *
                 * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
                 * is false.
                 * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
                 * `valueChanges`
                 * observables emit events with the latest status and value when the control is reset.
                 * When false, no events are emitted.
                 * The configuration options are passed to the {\@link AbstractControl#updateValueAndValidity
                 * updateValueAndValidity} method.
                 * @return {?}
                 */
                FormArray.prototype.reset = function (value, options) {
                    if (value === void 0) { value = []; }
                    if (options === void 0) { options = {}; }
                    this._forEachChild(( /**
                     * @param {?} control
                     * @param {?} index
                     * @return {?}
                     */function (control, index) {
                        control.reset(value[index], { onlySelf: true, emitEvent: options.emitEvent });
                    }));
                    this._updatePristine(options);
                    this._updateTouched(options);
                    this.updateValueAndValidity(options);
                };
                /**
                 * The aggregate value of the array, including any disabled controls.
                 *
                 * Reports all values regardless of disabled status.
                 * For enabled controls only, the `value` property is the best way to get the value of the array.
                 * @return {?}
                 */
                FormArray.prototype.getRawValue = function () {
                    return this.controls.map(( /**
                     * @param {?} control
                     * @return {?}
                     */function (control) {
                        return control instanceof FormControl ? control.value : (( /** @type {?} */(control))).getRawValue();
                    }));
                };
                /**
                 * Remove all controls in the `FormArray`.
                 *
                 * \@usageNotes
                 * ### Remove all elements from a FormArray
                 *
                 * ```ts
                 * const arr = new FormArray([
                 *    new FormControl(),
                 *    new FormControl()
                 * ]);
                 * console.log(arr.length);  // 2
                 *
                 * arr.clear();
                 * console.log(arr.length);  // 0
                 * ```
                 *
                 * It's a simpler and more efficient alternative to removing all elements one by one:
                 *
                 * ```ts
                 * const arr = new FormArray([
                 *    new FormControl(),
                 *    new FormControl()
                 * ]);
                 *
                 * while (arr.length) {
                 *    arr.removeAt(0);
                 * }
                 * ```
                 * @return {?}
                 */
                FormArray.prototype.clear = function () {
                    if (this.controls.length < 1)
                        return;
                    this._forEachChild(( /**
                     * @param {?} control
                     * @return {?}
                     */function (control) { return control._registerOnCollectionChange(( /**
                     * @return {?}
                     */function () { })); }));
                    this.controls.splice(0);
                    this.updateValueAndValidity();
                };
                /**
                 * \@internal
                 * @return {?}
                 */
                FormArray.prototype._syncPendingControls = function () {
                    /** @type {?} */
                    var subtreeUpdated = this.controls.reduce(( /**
                     * @param {?} updated
                     * @param {?} child
                     * @return {?}
                     */function (updated, child) {
                        return child._syncPendingControls() ? true : updated;
                    }), false);
                    if (subtreeUpdated)
                        this.updateValueAndValidity({ onlySelf: true });
                    return subtreeUpdated;
                };
                /**
                 * \@internal
                 * @param {?} index
                 * @return {?}
                 */
                FormArray.prototype._throwIfControlMissing = function (index) {
                    if (!this.controls.length) {
                        throw new Error("\n        There are no form controls registered with this array yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
                    }
                    if (!this.at(index)) {
                        throw new Error("Cannot find form control at index " + index);
                    }
                };
                /**
                 * \@internal
                 * @param {?} cb
                 * @return {?}
                 */
                FormArray.prototype._forEachChild = function (cb) {
                    this.controls.forEach(( /**
                     * @param {?} control
                     * @param {?} index
                     * @return {?}
                     */function (control, index) { cb(control, index); }));
                };
                /**
                 * \@internal
                 * @return {?}
                 */
                FormArray.prototype._updateValue = function () {
                    var _this = this;
                    (( /** @type {?} */(this))).value =
                        this.controls.filter(( /**
                         * @param {?} control
                         * @return {?}
                         */function (control) { return control.enabled || _this.disabled; }))
                            .map(( /**
                     * @param {?} control
                     * @return {?}
                     */function (control) { return control.value; }));
                };
                /**
                 * \@internal
                 * @param {?} condition
                 * @return {?}
                 */
                FormArray.prototype._anyControls = function (condition) {
                    return this.controls.some(( /**
                     * @param {?} control
                     * @return {?}
                     */function (control) { return control.enabled && condition(control); }));
                };
                /**
                 * \@internal
                 * @return {?}
                 */
                FormArray.prototype._setUpControls = function () {
                    var _this = this;
                    this._forEachChild(( /**
                     * @param {?} control
                     * @return {?}
                     */function (control) { return _this._registerControl(control); }));
                };
                /**
                 * \@internal
                 * @param {?} value
                 * @return {?}
                 */
                FormArray.prototype._checkAllValuesPresent = function (value) {
                    this._forEachChild(( /**
                     * @param {?} control
                     * @param {?} i
                     * @return {?}
                     */function (control, i) {
                        if (value[i] === undefined) {
                            throw new Error("Must supply a value for form control at index: " + i + ".");
                        }
                    }));
                };
                /**
                 * \@internal
                 * @return {?}
                 */
                FormArray.prototype._allControlsDisabled = function () {
                    for (var _i = 0, _a = this.controls; _i < _a.length; _i++) {
                        var control = _a[_i];
                        if (control.enabled)
                            return false;
                    }
                    return this.controls.length > 0 || this.disabled;
                };
                /**
                 * @private
                 * @param {?} control
                 * @return {?}
                 */
                FormArray.prototype._registerControl = function (control) {
                    control.setParent(this);
                    control._registerOnCollectionChange(this._onCollectionChange);
                };
                return FormArray;
            }(AbstractControl));
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @type {?} */
            var formDirectiveProvider = {
                provide: ControlContainer,
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                 * @return {?}
                 */function () { return NgForm; }))
            };
            var ɵ0 = /**
             * @return {?}
             */ function () { return Promise.resolve(null); };
            /** @type {?} */
            var resolvedPromise = ((ɵ0))();
            /**
             * \@description
             * Creates a top-level `FormGroup` instance and binds it to a form
             * to track aggregate form value and validation status.
             *
             * As soon as you import the `FormsModule`, this directive becomes active by default on
             * all `<form>` tags.  You don't need to add a special selector.
             *
             * You optionally export the directive into a local template variable using `ngForm` as the key
             * (ex: `#myForm="ngForm"`). This is optional, but useful.  Many properties from the underlying
             * `FormGroup` instance are duplicated on the directive itself, so a reference to it
             * gives you access to the aggregate value and validity status of the form, as well as
             * user interaction properties like `dirty` and `touched`.
             *
             * To register child controls with the form, use `NgModel` with a `name`
             * attribute. You may use `NgModelGroup` to create sub-groups within the form.
             *
             * If necessary, listen to the directive's `ngSubmit` event to be notified when the user has
             * triggered a form submission. The `ngSubmit` event emits the original form
             * submission event.
             *
             * In template driven forms, all `<form>` tags are automatically tagged as `NgForm`.
             * To import the `FormsModule` but skip its usage in some forms,
             * for example, to use native HTML5 validation, add the `ngNoForm` and the `<form>`
             * tags won't create an `NgForm` directive. In reactive forms, using `ngNoForm` is
             * unnecessary because the `<form>` tags are inert. In that case, you would
             * refrain from using the `formGroup` directive.
             *
             * \@usageNotes
             *
             * ### Migrating from deprecated ngForm selector
             *
             * Support for using `ngForm` element selector has been deprecated in Angular v6 and will be removed
             * in Angular v9.
             *
             * This has been deprecated to keep selectors consistent with other core Angular selectors,
             * as element selectors are typically written in kebab-case.
             *
             * Now deprecated:
             * ```html
             * <ngForm #myForm="ngForm">
             * ```
             *
             * After:
             * ```html
             * <ng-form #myForm="ngForm">
             * ```
             *
             * ### Listening for form submission
             *
             * The following example shows how to capture the form values from the "ngSubmit" event.
             *
             * {\@example forms/ts/simpleForm/simple_form_example.ts region='Component'}
             *
             * ### Setting the update options
             *
             * The following example shows you how to change the "updateOn" option from its default using
             * ngFormOptions.
             *
             * ```html
             * <form [ngFormOptions]="{updateOn: 'blur'}">
             *    <input name="one" ngModel>  <!-- this ngModel will update on blur -->
             * </form>
             * ```
             *
             * \@ngModule FormsModule
             * \@publicApi
             */
            var NgForm = /** @class */ (function (_super) {
                __extends(NgForm, _super);
                /**
                 * @param {?} validators
                 * @param {?} asyncValidators
                 */
                function NgForm(validators, asyncValidators) {
                    var _this = _super.call(this) || this;
                    /**
                     * \@description
                     * Returns whether the form submission has been triggered.
                     */
                    _this.submitted = false;
                    _this._directives = [];
                    /**
                     * \@description
                     * Event emitter for the "ngSubmit" event
                     */
                    _this.ngSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
                    _this.form =
                        new FormGroup({}, composeValidators(validators), composeAsyncValidators(asyncValidators));
                    return _this;
                }
                /**
                 * \@description
                 * Lifecycle method called after the view is initialized. For internal use only.
                 * @return {?}
                 */
                NgForm.prototype.ngAfterViewInit = function () { this._setUpdateStrategy(); };
                Object.defineProperty(NgForm.prototype, "formDirective", {
                    /**
                     * \@description
                     * The directive instance.
                     * @return {?}
                     */
                    get: function () { return this; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(NgForm.prototype, "control", {
                    /**
                     * \@description
                     * The internal `FormGroup` instance.
                     * @return {?}
                     */
                    get: function () { return this.form; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(NgForm.prototype, "path", {
                    /**
                     * \@description
                     * Returns an array representing the path to this group. Because this directive
                     * always lives at the top level of a form, it is always an empty array.
                     * @return {?}
                     */
                    get: function () { return []; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(NgForm.prototype, "controls", {
                    /**
                     * \@description
                     * Returns a map of the controls in this group.
                     * @return {?}
                     */
                    get: function () { return this.form.controls; },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * \@description
                 * Method that sets up the control directive in this group, re-calculates its value
                 * and validity, and adds the instance to the internal list of directives.
                 *
                 * @param {?} dir The `NgModel` directive instance.
                 * @return {?}
                 */
                NgForm.prototype.addControl = function (dir) {
                    var _this = this;
                    resolvedPromise.then(( /**
                     * @return {?}
                     */function () {
                        /** @type {?} */
                        var container = _this._findContainer(dir.path);
                        (( /** @type {?} */(dir))).control =
                            ( /** @type {?} */(container.registerControl(dir.name, dir.control)));
                        setUpControl(dir.control, dir);
                        dir.control.updateValueAndValidity({ emitEvent: false });
                        _this._directives.push(dir);
                    }));
                };
                /**
                 * \@description
                 * Retrieves the `FormControl` instance from the provided `NgModel` directive.
                 *
                 * @param {?} dir The `NgModel` directive instance.
                 * @return {?}
                 */
                NgForm.prototype.getControl = function (dir) { return ( /** @type {?} */(this.form.get(dir.path))); };
                /**
                 * \@description
                 * Removes the `NgModel` instance from the internal list of directives
                 *
                 * @param {?} dir The `NgModel` directive instance.
                 * @return {?}
                 */
                NgForm.prototype.removeControl = function (dir) {
                    var _this = this;
                    resolvedPromise.then(( /**
                     * @return {?}
                     */function () {
                        /** @type {?} */
                        var container = _this._findContainer(dir.path);
                        if (container) {
                            container.removeControl(dir.name);
                        }
                        removeDir(_this._directives, dir);
                    }));
                };
                /**
                 * \@description
                 * Adds a new `NgModelGroup` directive instance to the form.
                 *
                 * @param {?} dir The `NgModelGroup` directive instance.
                 * @return {?}
                 */
                NgForm.prototype.addFormGroup = function (dir) {
                    var _this = this;
                    resolvedPromise.then(( /**
                     * @return {?}
                     */function () {
                        /** @type {?} */
                        var container = _this._findContainer(dir.path);
                        /** @type {?} */
                        var group = new FormGroup({});
                        setUpFormContainer(group, dir);
                        container.registerControl(dir.name, group);
                        group.updateValueAndValidity({ emitEvent: false });
                    }));
                };
                /**
                 * \@description
                 * Removes the `NgModelGroup` directive instance from the form.
                 *
                 * @param {?} dir The `NgModelGroup` directive instance.
                 * @return {?}
                 */
                NgForm.prototype.removeFormGroup = function (dir) {
                    var _this = this;
                    resolvedPromise.then(( /**
                     * @return {?}
                     */function () {
                        /** @type {?} */
                        var container = _this._findContainer(dir.path);
                        if (container) {
                            container.removeControl(dir.name);
                        }
                    }));
                };
                /**
                 * \@description
                 * Retrieves the `FormGroup` for a provided `NgModelGroup` directive instance
                 *
                 * @param {?} dir The `NgModelGroup` directive instance.
                 * @return {?}
                 */
                NgForm.prototype.getFormGroup = function (dir) { return ( /** @type {?} */(this.form.get(dir.path))); };
                /**
                 * Sets the new value for the provided `NgControl` directive.
                 *
                 * @param {?} dir The `NgControl` directive instance.
                 * @param {?} value The new value for the directive's control.
                 * @return {?}
                 */
                NgForm.prototype.updateModel = function (dir, value) {
                    var _this = this;
                    resolvedPromise.then(( /**
                     * @return {?}
                     */function () {
                        /** @type {?} */
                        var ctrl = ( /** @type {?} */(_this.form.get(( /** @type {?} */(dir.path)))));
                        ctrl.setValue(value);
                    }));
                };
                /**
                 * \@description
                 * Sets the value for this `FormGroup`.
                 *
                 * @param {?} value The new value
                 * @return {?}
                 */
                NgForm.prototype.setValue = function (value) { this.control.setValue(value); };
                /**
                 * \@description
                 * Method called when the "submit" event is triggered on the form.
                 * Triggers the `ngSubmit` emitter to emit the "submit" event as its payload.
                 *
                 * @param {?} $event The "submit" event object
                 * @return {?}
                 */
                NgForm.prototype.onSubmit = function ($event) {
                    (( /** @type {?} */(this))).submitted = true;
                    syncPendingControls(this.form, this._directives);
                    this.ngSubmit.emit($event);
                    return false;
                };
                /**
                 * \@description
                 * Method called when the "reset" event is triggered on the form.
                 * @return {?}
                 */
                NgForm.prototype.onReset = function () { this.resetForm(); };
                /**
                 * \@description
                 * Resets the form to an initial value and resets its submitted status.
                 *
                 * @param {?=} value The new value for the form.
                 * @return {?}
                 */
                NgForm.prototype.resetForm = function (value) {
                    if (value === void 0) { value = undefined; }
                    this.form.reset(value);
                    (( /** @type {?} */(this))).submitted = false;
                };
                /**
                 * @private
                 * @return {?}
                 */
                NgForm.prototype._setUpdateStrategy = function () {
                    if (this.options && this.options.updateOn != null) {
                        this.form._updateOn = this.options.updateOn;
                    }
                };
                /**
                 * \@internal
                 * @param {?} path
                 * @return {?}
                 */
                NgForm.prototype._findContainer = function (path) {
                    path.pop();
                    return path.length ? ( /** @type {?} */(this.form.get(path))) : this.form;
                };
                return NgForm;
            }(ControlContainer));
            NgForm.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: 'form:not([ngNoForm]):not([formGroup]),ngForm,ng-form,[ngForm]',
                            providers: [formDirectiveProvider],
                            host: { '(submit)': 'onSubmit($event)', '(reset)': 'onReset()' },
                            outputs: ['ngSubmit'],
                            exportAs: 'ngForm'
                        },] }
            ];
            /** @nocollapse */
            NgForm.ctorParameters = function () { return [
                { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_VALIDATORS,] }] },
                { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_ASYNC_VALIDATORS,] }] }
            ]; };
            NgForm.propDecorators = {
                options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ngFormOptions',] }]
            };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var TemplateDrivenErrors = /** @class */ (function () {
                function TemplateDrivenErrors() {
                }
                /**
                 * @return {?}
                 */
                TemplateDrivenErrors.modelParentException = function () {
                    throw new Error("\n      ngModel cannot be used to register form controls with a parent formGroup directive.  Try using\n      formGroup's partner directive \"formControlName\" instead.  Example:\n\n      " + FormErrorExamples.formControlName + "\n\n      Or, if you'd like to avoid registering this form control, indicate that it's standalone in ngModelOptions:\n\n      Example:\n\n      " + FormErrorExamples.ngModelWithFormGroup);
                };
                /**
                 * @return {?}
                 */
                TemplateDrivenErrors.formGroupNameException = function () {
                    throw new Error("\n      ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.\n\n      Option 1: Use formControlName instead of ngModel (reactive strategy):\n\n      " + FormErrorExamples.formGroupName + "\n\n      Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):\n\n      " + FormErrorExamples.ngModelGroup);
                };
                /**
                 * @return {?}
                 */
                TemplateDrivenErrors.missingNameException = function () {
                    throw new Error("If ngModel is used within a form tag, either the name attribute must be set or the form\n      control must be defined as 'standalone' in ngModelOptions.\n\n      Example 1: <input [(ngModel)]=\"person.firstName\" name=\"first\">\n      Example 2: <input [(ngModel)]=\"person.firstName\" [ngModelOptions]=\"{standalone: true}\">");
                };
                /**
                 * @return {?}
                 */
                TemplateDrivenErrors.modelGroupParentException = function () {
                    throw new Error("\n      ngModelGroup cannot be used with a parent formGroup directive.\n\n      Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):\n\n      " + FormErrorExamples.formGroupName + "\n\n      Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):\n\n      " + FormErrorExamples.ngModelGroup);
                };
                /**
                 * @return {?}
                 */
                TemplateDrivenErrors.ngFormWarning = function () {
                    console.warn("\n    It looks like you're using 'ngForm'.\n\n    Support for using the 'ngForm' element selector has been deprecated in Angular v6 and will be removed\n    in Angular v9.\n\n    Use 'ng-form' instead.\n\n    Before:\n    <ngForm #myForm=\"ngForm\">\n\n    After:\n    <ng-form #myForm=\"ngForm\">\n    ");
                };
                return TemplateDrivenErrors;
            }());
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * \@description
             * `InjectionToken` to provide to turn off the warning when using 'ngForm' deprecated selector.
             * @type {?}
             */
            var NG_FORM_SELECTOR_WARNING = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('NgFormSelectorWarning');
            /**
             * This directive is solely used to display warnings when the deprecated `ngForm` selector is used.
             *
             * @deprecated in Angular v6 and will be removed in Angular v9.
             * \@ngModule FormsModule
             * \@publicApi
             */
            var NgFormSelectorWarning = /** @class */ (function () {
                /**
                 * @param {?} ngFormWarning
                 */
                function NgFormSelectorWarning(ngFormWarning) {
                    if (((!ngFormWarning || ngFormWarning === 'once') && !NgFormSelectorWarning._ngFormWarning) ||
                        ngFormWarning === 'always') {
                        TemplateDrivenErrors.ngFormWarning();
                        NgFormSelectorWarning._ngFormWarning = true;
                    }
                }
                return NgFormSelectorWarning;
            }());
            /**
             * Static property used to track whether the deprecation warning for this selector has been sent.
             * Used to support warning config of "once".
             *
             * \@internal
             */
            NgFormSelectorWarning._ngFormWarning = false;
            NgFormSelectorWarning.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: 'ngForm' },] }
            ];
            /** @nocollapse */
            NgFormSelectorWarning.ctorParameters = function () { return [
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_FORM_SELECTOR_WARNING,] }] }
            ]; };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * \@description
             * A base class for code shared between the `NgModelGroup` and `FormGroupName` directives.
             *
             * \@publicApi
             */
            var AbstractFormGroupDirective = /** @class */ (function (_super) {
                __extends(AbstractFormGroupDirective, _super);
                function AbstractFormGroupDirective() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                /**
                 * \@description
                 * An internal callback method triggered on the instance after the inputs are set.
                 * Registers the group with its parent group.
                 * @return {?}
                 */
                AbstractFormGroupDirective.prototype.ngOnInit = function () {
                    this._checkParentType();
                    ( /** @type {?} */(this.formDirective)).addFormGroup(this);
                };
                /**
                 * \@description
                 * An internal callback method triggered before the instance is destroyed.
                 * Removes the group from its parent group.
                 * @return {?}
                 */
                AbstractFormGroupDirective.prototype.ngOnDestroy = function () {
                    if (this.formDirective) {
                        this.formDirective.removeFormGroup(this);
                    }
                };
                Object.defineProperty(AbstractFormGroupDirective.prototype, "control", {
                    /**
                     * \@description
                     * The `FormGroup` bound to this directive.
                     * @return {?}
                     */
                    get: function () { return ( /** @type {?} */(this.formDirective)).getFormGroup(this); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractFormGroupDirective.prototype, "path", {
                    /**
                     * \@description
                     * The path to this group from the top-level directive.
                     * @return {?}
                     */
                    get: function () { return controlPath(this.name, this._parent); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractFormGroupDirective.prototype, "formDirective", {
                    /**
                     * \@description
                     * The top-level directive for this group if present, otherwise null.
                     * @return {?}
                     */
                    get: function () { return this._parent ? this._parent.formDirective : null; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractFormGroupDirective.prototype, "validator", {
                    /**
                     * \@description
                     * The synchronous validators registered with this group.
                     * @return {?}
                     */
                    get: function () { return composeValidators(this._validators); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractFormGroupDirective.prototype, "asyncValidator", {
                    /**
                     * \@description
                     * The async validators registered with this group.
                     * @return {?}
                     */
                    get: function () {
                        return composeAsyncValidators(this._asyncValidators);
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * \@internal
                 * @return {?}
                 */
                AbstractFormGroupDirective.prototype._checkParentType = function () { };
                return AbstractFormGroupDirective;
            }(ControlContainer));
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @type {?} */
            var modelGroupProvider = {
                provide: ControlContainer,
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                 * @return {?}
                 */function () { return NgModelGroup; }))
            };
            /**
             * \@description
             * Creates and binds a `FormGroup` instance to a DOM element.
             *
             * This directive can only be used as a child of `NgForm` (within `<form>` tags).
             *
             * Use this directive to validate a sub-group of your form separately from the
             * rest of your form, or if some values in your domain model make more sense
             * to consume together in a nested object.
             *
             * Provide a name for the sub-group and it will become the key
             * for the sub-group in the form's full value. If you need direct access, export the directive into
             * a local template variable using `ngModelGroup` (ex: `#myGroup="ngModelGroup"`).
             *
             * \@usageNotes
             *
             * ### Consuming controls in a grouping
             *
             * The following example shows you how to combine controls together in a sub-group
             * of the form.
             *
             * {\@example forms/ts/ngModelGroup/ng_model_group_example.ts region='Component'}
             *
             * \@ngModule FormsModule
             * \@publicApi
             */
            var NgModelGroup = /** @class */ (function (_super) {
                __extends(NgModelGroup, _super);
                /**
                 * @param {?} parent
                 * @param {?} validators
                 * @param {?} asyncValidators
                 */
                function NgModelGroup(parent, validators, asyncValidators) {
                    var _this = _super.call(this) || this;
                    _this._parent = parent;
                    _this._validators = validators;
                    _this._asyncValidators = asyncValidators;
                    return _this;
                }
                /**
                 * \@internal
                 * @return {?}
                 */
                NgModelGroup.prototype._checkParentType = function () {
                    if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm)) {
                        TemplateDrivenErrors.modelGroupParentException();
                    }
                };
                return NgModelGroup;
            }(AbstractFormGroupDirective));
            NgModelGroup.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[ngModelGroup]', providers: [modelGroupProvider], exportAs: 'ngModelGroup' },] }
            ];
            /** @nocollapse */
            NgModelGroup.ctorParameters = function () { return [
                { type: ControlContainer, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"] }] },
                { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_VALIDATORS,] }] },
                { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_ASYNC_VALIDATORS,] }] }
            ]; };
            NgModelGroup.propDecorators = {
                name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ngModelGroup',] }]
            };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @type {?} */
            var formControlBinding = {
                provide: NgControl,
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                 * @return {?}
                 */function () { return NgModel; }))
            };
            var ɵ0$1 = /**
             * @return {?}
             */ function () { return Promise.resolve(null); };
            /**
             * `ngModel` forces an additional change detection run when its inputs change:
             * E.g.:
             * ```
             * <div>{{myModel.valid}}</div>
             * <input [(ngModel)]="myValue" #myModel="ngModel">
             * ```
             * I.e. `ngModel` can export itself on the element and then be used in the template.
             * Normally, this would result in expressions before the `input` that use the exported directive
             * to have and old value as they have been
             * dirty checked before. As this is a very common case for `ngModel`, we added this second change
             * detection run.
             *
             * Notes:
             * - this is just one extra run no matter how many `ngModel` have been changed.
             * - this is a general problem when using `exportAs` for directives!
             * @type {?}
             */
            var resolvedPromise$1 = ((ɵ0$1))();
            /**
             * \@description
             * Creates a `FormControl` instance from a domain model and binds it
             * to a form control element.
             *
             * The `FormControl` instance tracks the value, user interaction, and
             * validation status of the control and keeps the view synced with the model. If used
             * within a parent form, the directive also registers itself with the form as a child
             * control.
             *
             * This directive is used by itself or as part of a larger form. Use the
             * `ngModel` selector to activate it.
             *
             * It accepts a domain model as an optional `Input`. If you have a one-way binding
             * to `ngModel` with `[]` syntax, changing the value of the domain model in the component
             * class sets the value in the view. If you have a two-way binding with `[()]` syntax
             * (also known as 'banana-box syntax'), the value in the UI always syncs back to
             * the domain model in your class.
             *
             * To inspect the properties of the associated `FormControl` (like validity state),
             * export the directive into a local template variable using `ngModel` as the key (ex: `#myVar="ngModel"`).
             * You then access the control using the directive's `control` property,
             * but most properties used (like `valid` and `dirty`) fall through to the control anyway for direct access.
             * See a full list of properties directly available in `AbstractControlDirective`.
             *
             * @see `RadioControlValueAccessor`
             * @see `SelectControlValueAccessor`
             *
             * \@usageNotes
             *
             * ### Using ngModel on a standalone control
             *
             * The following examples show a simple standalone control using `ngModel`:
             *
             * {\@example forms/ts/simpleNgModel/simple_ng_model_example.ts region='Component'}
             *
             * When using the `ngModel` within `<form>` tags, you'll also need to supply a `name` attribute
             * so that the control can be registered with the parent form under that name.
             *
             * In the context of a parent form, it's often unnecessary to include one-way or two-way binding,
             * as the parent form syncs the value for you. You access its properties by exporting it into a
             * local template variable using `ngForm` such as (`#f="ngForm"`). Use the variable where
             * needed on form submission.
             *
             * If you do need to populate initial values into your form, using a one-way binding for
             * `ngModel` tends to be sufficient as long as you use the exported form's value rather
             * than the domain model's value on submit.
             *
             * ### Using ngModel within a form
             *
             * The following example shows controls using `ngModel` within a form:
             *
             * {\@example forms/ts/simpleForm/simple_form_example.ts region='Component'}
             *
             * ### Using a standalone ngModel within a group
             *
             * The following example shows you how to use a standalone ngModel control
             * within a form. This controls the display of the form, but doesn't contain form data.
             *
             * ```html
             * <form>
             *   <input name="login" ngModel placeholder="Login">
             *   <input type="checkbox" ngModel [ngModelOptions]="{standalone: true}"> Show more options?
             * </form>
             * <!-- form value: {login: ''} -->
             * ```
             *
             * ### Setting the ngModel name attribute through options
             *
             * The following example shows you an alternate way to set the name attribute. The name attribute is used
             * within a custom form component, and the name `\@Input` property serves a different purpose.
             *
             * ```html
             * <form>
             *   <my-person-control name="Nancy" ngModel [ngModelOptions]="{name: 'user'}">
             *   </my-person-control>
             * </form>
             * <!-- form value: {user: ''} -->
             * ```
             *
             * \@ngModule FormsModule
             * \@publicApi
             */
            var NgModel = /** @class */ (function (_super) {
                __extends(NgModel, _super);
                /**
                 * @param {?} parent
                 * @param {?} validators
                 * @param {?} asyncValidators
                 * @param {?} valueAccessors
                 */
                function NgModel(parent, validators, asyncValidators, valueAccessors) {
                    var _this = _super.call(this) || this;
                    _this.control = new FormControl();
                    /**
                     * \@internal
                     */
                    _this._registered = false;
                    /**
                     * \@description
                     * Event emitter for producing the `ngModelChange` event after
                     * the view model updates.
                     */
                    _this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
                    _this._parent = parent;
                    _this._rawValidators = validators || [];
                    _this._rawAsyncValidators = asyncValidators || [];
                    _this.valueAccessor = selectValueAccessor(_this, valueAccessors);
                    return _this;
                }
                /**
                 * \@description
                 * A lifecycle method called when the directive's inputs change. For internal use
                 * only.
                 *
                 * @param {?} changes A object of key/value pairs for the set of changed inputs.
                 * @return {?}
                 */
                NgModel.prototype.ngOnChanges = function (changes) {
                    this._checkForErrors();
                    if (!this._registered)
                        this._setUpControl();
                    if ('isDisabled' in changes) {
                        this._updateDisabled(changes);
                    }
                    if (isPropertyUpdated(changes, this.viewModel)) {
                        this._updateValue(this.model);
                        this.viewModel = this.model;
                    }
                };
                /**
                 * \@description
                 * Lifecycle method called before the directive's instance is destroyed. For internal
                 * use only.
                 * @return {?}
                 */
                NgModel.prototype.ngOnDestroy = function () { this.formDirective && this.formDirective.removeControl(this); };
                Object.defineProperty(NgModel.prototype, "path", {
                    /**
                     * \@description
                     * Returns an array that represents the path from the top-level form to this control.
                     * Each index is the string name of the control on that level.
                     * @return {?}
                     */
                    get: function () {
                        return this._parent ? controlPath(this.name, this._parent) : [this.name];
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(NgModel.prototype, "formDirective", {
                    /**
                     * \@description
                     * The top-level directive for this control if present, otherwise null.
                     * @return {?}
                     */
                    get: function () { return this._parent ? this._parent.formDirective : null; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(NgModel.prototype, "validator", {
                    /**
                     * \@description
                     * Synchronous validator function composed of all the synchronous validators
                     * registered with this directive.
                     * @return {?}
                     */
                    get: function () { return composeValidators(this._rawValidators); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(NgModel.prototype, "asyncValidator", {
                    /**
                     * \@description
                     * Async validator function composed of all the async validators registered with this
                     * directive.
                     * @return {?}
                     */
                    get: function () {
                        return composeAsyncValidators(this._rawAsyncValidators);
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * \@description
                 * Sets the new value for the view model and emits an `ngModelChange` event.
                 *
                 * @param {?} newValue The new value emitted by `ngModelChange`.
                 * @return {?}
                 */
                NgModel.prototype.viewToModelUpdate = function (newValue) {
                    this.viewModel = newValue;
                    this.update.emit(newValue);
                };
                /**
                 * @private
                 * @return {?}
                 */
                NgModel.prototype._setUpControl = function () {
                    this._setUpdateStrategy();
                    this._isStandalone() ? this._setUpStandalone() :
                        this.formDirective.addControl(this);
                    this._registered = true;
                };
                /**
                 * @private
                 * @return {?}
                 */
                NgModel.prototype._setUpdateStrategy = function () {
                    if (this.options && this.options.updateOn != null) {
                        this.control._updateOn = this.options.updateOn;
                    }
                };
                /**
                 * @private
                 * @return {?}
                 */
                NgModel.prototype._isStandalone = function () {
                    return !this._parent || !!(this.options && this.options.standalone);
                };
                /**
                 * @private
                 * @return {?}
                 */
                NgModel.prototype._setUpStandalone = function () {
                    setUpControl(this.control, this);
                    this.control.updateValueAndValidity({ emitEvent: false });
                };
                /**
                 * @private
                 * @return {?}
                 */
                NgModel.prototype._checkForErrors = function () {
                    if (!this._isStandalone()) {
                        this._checkParentType();
                    }
                    this._checkName();
                };
                /**
                 * @private
                 * @return {?}
                 */
                NgModel.prototype._checkParentType = function () {
                    if (!(this._parent instanceof NgModelGroup) &&
                        this._parent instanceof AbstractFormGroupDirective) {
                        TemplateDrivenErrors.formGroupNameException();
                    }
                    else if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm)) {
                        TemplateDrivenErrors.modelParentException();
                    }
                };
                /**
                 * @private
                 * @return {?}
                 */
                NgModel.prototype._checkName = function () {
                    if (this.options && this.options.name)
                        this.name = this.options.name;
                    if (!this._isStandalone() && !this.name) {
                        TemplateDrivenErrors.missingNameException();
                    }
                };
                /**
                 * @private
                 * @param {?} value
                 * @return {?}
                 */
                NgModel.prototype._updateValue = function (value) {
                    var _this = this;
                    resolvedPromise$1.then(( /**
                     * @return {?}
                     */function () { _this.control.setValue(value, { emitViewToModelChange: false }); }));
                };
                /**
                 * @private
                 * @param {?} changes
                 * @return {?}
                 */
                NgModel.prototype._updateDisabled = function (changes) {
                    var _this = this;
                    /** @type {?} */
                    var disabledValue = changes['isDisabled'].currentValue;
                    /** @type {?} */
                    var isDisabled = disabledValue === '' || (disabledValue && disabledValue !== 'false');
                    resolvedPromise$1.then(( /**
                     * @return {?}
                     */function () {
                        if (isDisabled && !_this.control.disabled) {
                            _this.control.disable();
                        }
                        else if (!isDisabled && _this.control.disabled) {
                            _this.control.enable();
                        }
                    }));
                };
                return NgModel;
            }(NgControl));
            NgModel.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: '[ngModel]:not([formControlName]):not([formControl])',
                            providers: [formControlBinding],
                            exportAs: 'ngModel'
                        },] }
            ];
            /** @nocollapse */
            NgModel.ctorParameters = function () { return [
                { type: ControlContainer, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"] }] },
                { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_VALIDATORS,] }] },
                { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_ASYNC_VALIDATORS,] }] },
                { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_VALUE_ACCESSOR,] }] }
            ]; };
            NgModel.propDecorators = {
                name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                isDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['disabled',] }],
                model: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ngModel',] }],
                options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ngModelOptions',] }],
                update: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['ngModelChange',] }]
            };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * \@description
             *
             * Adds `novalidate` attribute to all forms by default.
             *
             * `novalidate` is used to disable browser's native form validation.
             *
             * If you want to use native validation with Angular forms, just add `ngNativeValidate` attribute:
             *
             * ```
             * <form ngNativeValidate></form>
             * ```
             *
             * \@publicApi
             * \@ngModule ReactiveFormsModule
             * \@ngModule FormsModule
             */
            var ɵNgNoValidate = /** @class */ (function () {
                function ɵNgNoValidate() {
                }
                return ɵNgNoValidate;
            }());
            ɵNgNoValidate.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: 'form:not([ngNoForm]):not([ngNativeValidate])',
                            host: { 'novalidate': '' },
                        },] }
            ];
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Token to provide to turn off the ngModel warning on formControl and formControlName.
             * @type {?}
             */
            var NG_MODEL_WITH_FORM_CONTROL_WARNING = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('NgModelWithFormControlWarning');
            /** @type {?} */
            var formControlBinding$1 = {
                provide: NgControl,
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                 * @return {?}
                 */function () { return FormControlDirective; }))
            };
            /**
             * \@description
             * * Syncs a standalone `FormControl` instance to a form control element.
             *
             * @see [Reactive Forms Guide](guide/reactive-forms)
             * @see `FormControl`
             * @see `AbstractControl`
             *
             * \@usageNotes
             *
             * ### Registering a single form control
             *
             * The following examples shows how to register a standalone control and set its value.
             *
             * {\@example forms/ts/simpleFormControl/simple_form_control_example.ts region='Component'}
             *
             * ### Use with ngModel
             *
             * Support for using the `ngModel` input property and `ngModelChange` event with reactive
             * form directives has been deprecated in Angular v6 and will be removed in Angular v7.
             *
             * Now deprecated:
             *
             * ```html
             * <input [formControl]="control" [(ngModel)]="value">
             * ```
             *
             * ```ts
             * this.value = 'some value';
             * ```
             *
             * This has been deprecated for a few reasons. First, developers have found this pattern
             * confusing. It seems like the actual `ngModel` directive is being used, but in fact it's
             * an input/output property named `ngModel` on the reactive form directive that simply
             * approximates (some of) its behavior. Specifically, it allows getting/setting the value
             * and intercepting value events. However, some of `ngModel`'s other features - like
             * delaying updates with`ngModelOptions` or exporting the directive - simply don't work,
             * which has understandably caused some confusion.
             *
             * In addition, this pattern mixes template-driven and reactive forms strategies, which
             * we generally don't recommend because it doesn't take advantage of the full benefits of
             * either strategy. Setting the value in the template violates the template-agnostic
             * principles behind reactive forms, whereas adding a `FormControl`/`FormGroup` layer in
             * the class removes the convenience of defining forms in the template.
             *
             * To update your code before v7, you'll want to decide whether to stick with reactive form
             * directives (and get/set values using reactive forms patterns) or switch over to
             * template-driven directives.
             *
             * After (choice 1 - use reactive forms):
             *
             * ```html
             * <input [formControl]="control">
             * ```
             *
             * ```ts
             * this.control.setValue('some value');
             * ```
             *
             * After (choice 2 - use template-driven forms):
             *
             * ```html
             * <input [(ngModel)]="value">
             * ```
             *
             * ```ts
             * this.value = 'some value';
             * ```
             *
             * By default, when you use this pattern, you will see a deprecation warning once in dev
             * mode. You can choose to silence this warning by providing a config for
             * `ReactiveFormsModule` at import time:
             *
             * ```ts
             * imports: [
             *   ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'});
             * ]
             * ```
             *
             * Alternatively, you can choose to surface a separate warning for each instance of this
             * pattern with a config value of `"always"`. This may help to track down where in the code
             * the pattern is being used as the code is being updated.
             *
             * \@ngModule ReactiveFormsModule
             * \@publicApi
             */
            var FormControlDirective = /** @class */ (function (_super) {
                __extends(FormControlDirective, _super);
                /**
                 * @param {?} validators
                 * @param {?} asyncValidators
                 * @param {?} valueAccessors
                 * @param {?} _ngModelWarningConfig
                 */
                function FormControlDirective(validators, asyncValidators, valueAccessors, _ngModelWarningConfig) {
                    var _this = _super.call(this) || this;
                    _this._ngModelWarningConfig = _ngModelWarningConfig;
                    /**
                     * @deprecated as of v6
                     */
                    _this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
                    /**
                     * \@description
                     * Instance property used to track whether an ngModel warning has been sent out for this
                     * particular `FormControlDirective` instance. Used to support warning config of "always".
                     *
                     * \@internal
                     */
                    _this._ngModelWarningSent = false;
                    _this._rawValidators = validators || [];
                    _this._rawAsyncValidators = asyncValidators || [];
                    _this.valueAccessor = selectValueAccessor(_this, valueAccessors);
                    return _this;
                }
                Object.defineProperty(FormControlDirective.prototype, "isDisabled", {
                    /**
                     * \@description
                     * Triggers a warning that this input should not be used with reactive forms.
                     * @param {?} isDisabled
                     * @return {?}
                     */
                    set: function (isDisabled) { ReactiveErrors.disabledAttrWarning(); },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * \@description
                 * A lifecycle method called when the directive's inputs change. For internal use
                 * only.
                 *
                 * @param {?} changes A object of key/value pairs for the set of changed inputs.
                 * @return {?}
                 */
                FormControlDirective.prototype.ngOnChanges = function (changes) {
                    if (this._isControlChanged(changes)) {
                        setUpControl(this.form, this);
                        if (this.control.disabled && ( /** @type {?} */(this.valueAccessor)).setDisabledState) {
                            ( /** @type {?} */(( /** @type {?} */(this.valueAccessor)).setDisabledState))(true);
                        }
                        this.form.updateValueAndValidity({ emitEvent: false });
                    }
                    if (isPropertyUpdated(changes, this.viewModel)) {
                        _ngModelWarning('formControl', FormControlDirective, this, this._ngModelWarningConfig);
                        this.form.setValue(this.model);
                        this.viewModel = this.model;
                    }
                };
                Object.defineProperty(FormControlDirective.prototype, "path", {
                    /**
                     * \@description
                     * Returns an array that represents the path from the top-level form to this control.
                     * Each index is the string name of the control on that level.
                     * @return {?}
                     */
                    get: function () { return []; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FormControlDirective.prototype, "validator", {
                    /**
                     * \@description
                     * Synchronous validator function composed of all the synchronous validators
                     * registered with this directive.
                     * @return {?}
                     */
                    get: function () { return composeValidators(this._rawValidators); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FormControlDirective.prototype, "asyncValidator", {
                    /**
                     * \@description
                     * Async validator function composed of all the async validators registered with this
                     * directive.
                     * @return {?}
                     */
                    get: function () {
                        return composeAsyncValidators(this._rawAsyncValidators);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FormControlDirective.prototype, "control", {
                    /**
                     * \@description
                     * The `FormControl` bound to this directive.
                     * @return {?}
                     */
                    get: function () { return this.form; },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * \@description
                 * Sets the new value for the view model and emits an `ngModelChange` event.
                 *
                 * @param {?} newValue The new value for the view model.
                 * @return {?}
                 */
                FormControlDirective.prototype.viewToModelUpdate = function (newValue) {
                    this.viewModel = newValue;
                    this.update.emit(newValue);
                };
                /**
                 * @private
                 * @param {?} changes
                 * @return {?}
                 */
                FormControlDirective.prototype._isControlChanged = function (changes) {
                    return changes.hasOwnProperty('form');
                };
                return FormControlDirective;
            }(NgControl));
            /**
             * \@description
             * Static property used to track whether any ngModel warnings have been sent across
             * all instances of FormControlDirective. Used to support warning config of "once".
             *
             * \@internal
             */
            FormControlDirective._ngModelWarningSentOnce = false;
            FormControlDirective.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[formControl]', providers: [formControlBinding$1], exportAs: 'ngForm' },] }
            ];
            /** @nocollapse */
            FormControlDirective.ctorParameters = function () { return [
                { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_VALIDATORS,] }] },
                { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_ASYNC_VALIDATORS,] }] },
                { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_VALUE_ACCESSOR,] }] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_MODEL_WITH_FORM_CONTROL_WARNING,] }] }
            ]; };
            FormControlDirective.propDecorators = {
                form: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['formControl',] }],
                isDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['disabled',] }],
                model: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ngModel',] }],
                update: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['ngModelChange',] }]
            };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @type {?} */
            var formDirectiveProvider$1 = {
                provide: ControlContainer,
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                 * @return {?}
                 */function () { return FormGroupDirective; }))
            };
            /**
             * \@description
             *
             * Binds an existing `FormGroup` to a DOM element.
             *
             * This directive accepts an existing `FormGroup` instance. It will then use this
             * `FormGroup` instance to match any child `FormControl`, `FormGroup`,
             * and `FormArray` instances to child `FormControlName`, `FormGroupName`,
             * and `FormArrayName` directives.
             *
             * @see [Reactive Forms Guide](guide/reactive-forms)
             * @see `AbstractControl`
             *
             * ### Register Form Group
             *
             * The following example registers a `FormGroup` with first name and last name controls,
             * and listens for the *ngSubmit* event when the button is clicked.
             *
             * {\@example forms/ts/simpleFormGroup/simple_form_group_example.ts region='Component'}
             *
             * \@ngModule ReactiveFormsModule
             * \@publicApi
             */
            var FormGroupDirective = /** @class */ (function (_super) {
                __extends(FormGroupDirective, _super);
                /**
                 * @param {?} _validators
                 * @param {?} _asyncValidators
                 */
                function FormGroupDirective(_validators, _asyncValidators) {
                    var _this = _super.call(this) || this;
                    _this._validators = _validators;
                    _this._asyncValidators = _asyncValidators;
                    /**
                     * \@description
                     * Reports whether the form submission has been triggered.
                     */
                    _this.submitted = false;
                    /**
                     * \@description
                     * Tracks the list of added `FormControlName` instances
                     */
                    _this.directives = [];
                    /**
                     * \@description
                     * Tracks the `FormGroup` bound to this directive.
                     */
                    _this.form = ( /** @type {?} */(null));
                    /**
                     * \@description
                     * Emits an event when the form submission has been triggered.
                     */
                    _this.ngSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
                    return _this;
                }
                /**
                 * \@description
                 * A lifecycle method called when the directive's inputs change. For internal use only.
                 *
                 * @param {?} changes A object of key/value pairs for the set of changed inputs.
                 * @return {?}
                 */
                FormGroupDirective.prototype.ngOnChanges = function (changes) {
                    this._checkFormPresent();
                    if (changes.hasOwnProperty('form')) {
                        this._updateValidators();
                        this._updateDomValue();
                        this._updateRegistrations();
                    }
                };
                Object.defineProperty(FormGroupDirective.prototype, "formDirective", {
                    /**
                     * \@description
                     * Returns this directive's instance.
                     * @return {?}
                     */
                    get: function () { return this; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FormGroupDirective.prototype, "control", {
                    /**
                     * \@description
                     * Returns the `FormGroup` bound to this directive.
                     * @return {?}
                     */
                    get: function () { return this.form; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FormGroupDirective.prototype, "path", {
                    /**
                     * \@description
                     * Returns an array representing the path to this group. Because this directive
                     * always lives at the top level of a form, it always an empty array.
                     * @return {?}
                     */
                    get: function () { return []; },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * \@description
                 * Method that sets up the control directive in this group, re-calculates its value
                 * and validity, and adds the instance to the internal list of directives.
                 *
                 * @param {?} dir The `FormControlName` directive instance.
                 * @return {?}
                 */
                FormGroupDirective.prototype.addControl = function (dir) {
                    /** @type {?} */
                    var ctrl = this.form.get(dir.path);
                    setUpControl(ctrl, dir);
                    ctrl.updateValueAndValidity({ emitEvent: false });
                    this.directives.push(dir);
                    return ctrl;
                };
                /**
                 * \@description
                 * Retrieves the `FormControl` instance from the provided `FormControlName` directive
                 *
                 * @param {?} dir The `FormControlName` directive instance.
                 * @return {?}
                 */
                FormGroupDirective.prototype.getControl = function (dir) { return ( /** @type {?} */(this.form.get(dir.path))); };
                /**
                 * \@description
                 * Removes the `FormControlName` instance from the internal list of directives
                 *
                 * @param {?} dir The `FormControlName` directive instance.
                 * @return {?}
                 */
                FormGroupDirective.prototype.removeControl = function (dir) { removeDir(this.directives, dir); };
                /**
                 * Adds a new `FormGroupName` directive instance to the form.
                 *
                 * @param {?} dir The `FormGroupName` directive instance.
                 * @return {?}
                 */
                FormGroupDirective.prototype.addFormGroup = function (dir) {
                    /** @type {?} */
                    var ctrl = this.form.get(dir.path);
                    setUpFormContainer(ctrl, dir);
                    ctrl.updateValueAndValidity({ emitEvent: false });
                };
                /**
                 * No-op method to remove the form group.
                 *
                 * @param {?} dir The `FormGroupName` directive instance.
                 * @return {?}
                 */
                FormGroupDirective.prototype.removeFormGroup = function (dir) { };
                /**
                 * \@description
                 * Retrieves the `FormGroup` for a provided `FormGroupName` directive instance
                 *
                 * @param {?} dir The `FormGroupName` directive instance.
                 * @return {?}
                 */
                FormGroupDirective.prototype.getFormGroup = function (dir) { return ( /** @type {?} */(this.form.get(dir.path))); };
                /**
                 * Adds a new `FormArrayName` directive instance to the form.
                 *
                 * @param {?} dir The `FormArrayName` directive instance.
                 * @return {?}
                 */
                FormGroupDirective.prototype.addFormArray = function (dir) {
                    /** @type {?} */
                    var ctrl = this.form.get(dir.path);
                    setUpFormContainer(ctrl, dir);
                    ctrl.updateValueAndValidity({ emitEvent: false });
                };
                /**
                 * No-op method to remove the form array.
                 *
                 * @param {?} dir The `FormArrayName` directive instance.
                 * @return {?}
                 */
                FormGroupDirective.prototype.removeFormArray = function (dir) { };
                /**
                 * \@description
                 * Retrieves the `FormArray` for a provided `FormArrayName` directive instance.
                 *
                 * @param {?} dir The `FormArrayName` directive instance.
                 * @return {?}
                 */
                FormGroupDirective.prototype.getFormArray = function (dir) { return ( /** @type {?} */(this.form.get(dir.path))); };
                /**
                 * Sets the new value for the provided `FormControlName` directive.
                 *
                 * @param {?} dir The `FormControlName` directive instance.
                 * @param {?} value The new value for the directive's control.
                 * @return {?}
                 */
                FormGroupDirective.prototype.updateModel = function (dir, value) {
                    /** @type {?} */
                    var ctrl = ( /** @type {?} */(this.form.get(dir.path)));
                    ctrl.setValue(value);
                };
                /**
                 * \@description
                 * Method called with the "submit" event is triggered on the form.
                 * Triggers the `ngSubmit` emitter to emit the "submit" event as its payload.
                 *
                 * @param {?} $event The "submit" event object
                 * @return {?}
                 */
                FormGroupDirective.prototype.onSubmit = function ($event) {
                    (( /** @type {?} */(this))).submitted = true;
                    syncPendingControls(this.form, this.directives);
                    this.ngSubmit.emit($event);
                    return false;
                };
                /**
                 * \@description
                 * Method called when the "reset" event is triggered on the form.
                 * @return {?}
                 */
                FormGroupDirective.prototype.onReset = function () { this.resetForm(); };
                /**
                 * \@description
                 * Resets the form to an initial value and resets its submitted status.
                 *
                 * @param {?=} value The new value for the form.
                 * @return {?}
                 */
                FormGroupDirective.prototype.resetForm = function (value) {
                    if (value === void 0) { value = undefined; }
                    this.form.reset(value);
                    (( /** @type {?} */(this))).submitted = false;
                };
                /**
                 * \@internal
                 * @return {?}
                 */
                FormGroupDirective.prototype._updateDomValue = function () {
                    var _this = this;
                    this.directives.forEach(( /**
                     * @param {?} dir
                     * @return {?}
                     */function (/**
                     * @param {?} dir
                     * @return {?}
                     */ dir) {
                        /** @type {?} */
                        var newCtrl = _this.form.get(dir.path);
                        if (dir.control !== newCtrl) {
                            cleanUpControl(dir.control, dir);
                            if (newCtrl)
                                setUpControl(newCtrl, dir);
                            (( /** @type {?} */(dir))).control = newCtrl;
                        }
                    }));
                    this.form._updateTreeValidity({ emitEvent: false });
                };
                /**
                 * @private
                 * @return {?}
                 */
                FormGroupDirective.prototype._updateRegistrations = function () {
                    var _this = this;
                    this.form._registerOnCollectionChange(( /**
                     * @return {?}
                     */function () { return _this._updateDomValue(); }));
                    if (this._oldForm)
                        this._oldForm._registerOnCollectionChange(( /**
                         * @return {?}
                         */function () { }));
                    this._oldForm = this.form;
                };
                /**
                 * @private
                 * @return {?}
                 */
                FormGroupDirective.prototype._updateValidators = function () {
                    /** @type {?} */
                    var sync = composeValidators(this._validators);
                    this.form.validator = Validators.compose([( /** @type {?} */(this.form.validator)), ( /** @type {?} */(sync))]);
                    /** @type {?} */
                    var async = composeAsyncValidators(this._asyncValidators);
                    this.form.asyncValidator = Validators.composeAsync([( /** @type {?} */(this.form.asyncValidator)), ( /** @type {?} */(async))]);
                };
                /**
                 * @private
                 * @return {?}
                 */
                FormGroupDirective.prototype._checkFormPresent = function () {
                    if (!this.form) {
                        ReactiveErrors.missingFormException();
                    }
                };
                return FormGroupDirective;
            }(ControlContainer));
            FormGroupDirective.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: '[formGroup]',
                            providers: [formDirectiveProvider$1],
                            host: { '(submit)': 'onSubmit($event)', '(reset)': 'onReset()' },
                            exportAs: 'ngForm'
                        },] }
            ];
            /** @nocollapse */
            FormGroupDirective.ctorParameters = function () { return [
                { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_VALIDATORS,] }] },
                { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_ASYNC_VALIDATORS,] }] }
            ]; };
            FormGroupDirective.propDecorators = {
                form: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['formGroup',] }],
                ngSubmit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
            };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @type {?} */
            var formGroupNameProvider = {
                provide: ControlContainer,
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                 * @return {?}
                 */function () { return FormGroupName; }))
            };
            /**
             * \@description
             *
             * Syncs a nested `FormGroup` to a DOM element.
             *
             * This directive can only be used with a parent `FormGroupDirective`.
             *
             * It accepts the string name of the nested `FormGroup` to link, and
             * looks for a `FormGroup` registered with that name in the parent
             * `FormGroup` instance you passed into `FormGroupDirective`.
             *
             * Use nested form groups to validate a sub-group of a
             * form separately from the rest or to group the values of certain
             * controls into their own nested object.
             *
             * @see [Reactive Forms Guide](guide/reactive-forms)
             *
             * \@usageNotes
             *
             * ### Access the group by name
             *
             * The following example uses the {\@link AbstractControl#get get} method to access the
             * associated `FormGroup`
             *
             * ```ts
             *   this.form.get('name');
             * ```
             *
             * ### Access individual controls in the group
             *
             * The following example uses the {\@link AbstractControl#get get} method to access
             * individual controls within the group using dot syntax.
             *
             * ```ts
             *   this.form.get('name.first');
             * ```
             *
             * ### Register a nested `FormGroup`.
             *
             * The following example registers a nested *name* `FormGroup` within an existing `FormGroup`,
             * and provides methods to retrieve the nested `FormGroup` and individual controls.
             *
             * {\@example forms/ts/nestedFormGroup/nested_form_group_example.ts region='Component'}
             *
             * \@ngModule ReactiveFormsModule
             * \@publicApi
             */
            var FormGroupName = /** @class */ (function (_super) {
                __extends(FormGroupName, _super);
                /**
                 * @param {?} parent
                 * @param {?} validators
                 * @param {?} asyncValidators
                 */
                function FormGroupName(parent, validators, asyncValidators) {
                    var _this = _super.call(this) || this;
                    _this._parent = parent;
                    _this._validators = validators;
                    _this._asyncValidators = asyncValidators;
                    return _this;
                }
                /**
                 * \@internal
                 * @return {?}
                 */
                FormGroupName.prototype._checkParentType = function () {
                    if (_hasInvalidParent(this._parent)) {
                        ReactiveErrors.groupParentException();
                    }
                };
                return FormGroupName;
            }(AbstractFormGroupDirective));
            FormGroupName.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[formGroupName]', providers: [formGroupNameProvider] },] }
            ];
            /** @nocollapse */
            FormGroupName.ctorParameters = function () { return [
                { type: ControlContainer, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"] }] },
                { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_VALIDATORS,] }] },
                { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_ASYNC_VALIDATORS,] }] }
            ]; };
            FormGroupName.propDecorators = {
                name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['formGroupName',] }]
            };
            if (false) { }
            /** @type {?} */
            var formArrayNameProvider = {
                provide: ControlContainer,
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                 * @return {?}
                 */function () { return FormArrayName; }))
            };
            /**
             * \@description
             *
             * Syncs a nested `FormArray` to a DOM element.
             *
             * This directive is designed to be used with a parent `FormGroupDirective` (selector:
             * `[formGroup]`).
             *
             * It accepts the string name of the nested `FormArray` you want to link, and
             * will look for a `FormArray` registered with that name in the parent
             * `FormGroup` instance you passed into `FormGroupDirective`.
             *
             * @see [Reactive Forms Guide](guide/reactive-forms)
             * @see `AbstractControl`
             *
             * \@usageNotes
             *
             * ### Example
             *
             * {\@example forms/ts/nestedFormArray/nested_form_array_example.ts region='Component'}
             *
             * \@ngModule ReactiveFormsModule
             * \@publicApi
             */
            var FormArrayName = /** @class */ (function (_super) {
                __extends(FormArrayName, _super);
                /**
                 * @param {?} parent
                 * @param {?} validators
                 * @param {?} asyncValidators
                 */
                function FormArrayName(parent, validators, asyncValidators) {
                    var _this = _super.call(this) || this;
                    _this._parent = parent;
                    _this._validators = validators;
                    _this._asyncValidators = asyncValidators;
                    return _this;
                }
                /**
                 * \@description
                 * A lifecycle method called when the directive's inputs are initialized. For internal use only.
                 *
                 * @throws If the directive does not have a valid parent.
                 * @return {?}
                 */
                FormArrayName.prototype.ngOnInit = function () {
                    this._checkParentType();
                    ( /** @type {?} */(this.formDirective)).addFormArray(this);
                };
                /**
                 * \@description
                 * A lifecycle method called before the directive's instance is destroyed. For internal use only.
                 * @return {?}
                 */
                FormArrayName.prototype.ngOnDestroy = function () {
                    if (this.formDirective) {
                        this.formDirective.removeFormArray(this);
                    }
                };
                Object.defineProperty(FormArrayName.prototype, "control", {
                    /**
                     * \@description
                     * The `FormArray` bound to this directive.
                     * @return {?}
                     */
                    get: function () { return ( /** @type {?} */(this.formDirective)).getFormArray(this); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FormArrayName.prototype, "formDirective", {
                    /**
                     * \@description
                     * The top-level directive for this group if present, otherwise null.
                     * @return {?}
                     */
                    get: function () {
                        return this._parent ? ( /** @type {?} */(this._parent.formDirective)) : null;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FormArrayName.prototype, "path", {
                    /**
                     * \@description
                     * Returns an array that represents the path from the top-level form to this control.
                     * Each index is the string name of the control on that level.
                     * @return {?}
                     */
                    get: function () { return controlPath(this.name, this._parent); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FormArrayName.prototype, "validator", {
                    /**
                     * \@description
                     * Synchronous validator function composed of all the synchronous validators registered with this
                     * directive.
                     * @return {?}
                     */
                    get: function () { return composeValidators(this._validators); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FormArrayName.prototype, "asyncValidator", {
                    /**
                     * \@description
                     * Async validator function composed of all the async validators registered with this directive.
                     * @return {?}
                     */
                    get: function () {
                        return composeAsyncValidators(this._asyncValidators);
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * @private
                 * @return {?}
                 */
                FormArrayName.prototype._checkParentType = function () {
                    if (_hasInvalidParent(this._parent)) {
                        ReactiveErrors.arrayParentException();
                    }
                };
                return FormArrayName;
            }(ControlContainer));
            FormArrayName.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[formArrayName]', providers: [formArrayNameProvider] },] }
            ];
            /** @nocollapse */
            FormArrayName.ctorParameters = function () { return [
                { type: ControlContainer, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"] }] },
                { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_VALIDATORS,] }] },
                { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_ASYNC_VALIDATORS,] }] }
            ]; };
            FormArrayName.propDecorators = {
                name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['formArrayName',] }]
            };
            if (false) { }
            /**
             * @param {?} parent
             * @return {?}
             */
            function _hasInvalidParent(parent) {
                return !(parent instanceof FormGroupName) && !(parent instanceof FormGroupDirective) &&
                    !(parent instanceof FormArrayName);
            }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @type {?} */
            var controlNameBinding = {
                provide: NgControl,
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                 * @return {?}
                 */function () { return FormControlName; }))
            };
            /**
             * \@description
             * Syncs a `FormControl` in an existing `FormGroup` to a form control
             * element by name.
             *
             * @see [Reactive Forms Guide](guide/reactive-forms)
             * @see `FormControl`
             * @see `AbstractControl`
             *
             * \@usageNotes
             *
             * ### Register `FormControl` within a group
             *
             * The following example shows how to register multiple form controls within a form group
             * and set their value.
             *
             * {\@example forms/ts/simpleFormGroup/simple_form_group_example.ts region='Component'}
             *
             * To see `formControlName` examples with different form control types, see:
             *
             * * Radio buttons: `RadioControlValueAccessor`
             * * Selects: `SelectControlValueAccessor`
             *
             * ### Use with ngModel
             *
             * Support for using the `ngModel` input property and `ngModelChange` event with reactive
             * form directives has been deprecated in Angular v6 and will be removed in Angular v7.
             *
             * Now deprecated:
             *
             * ```html
             * <form [formGroup]="form">
             *   <input formControlName="first" [(ngModel)]="value">
             * </form>
             * ```
             *
             * ```ts
             * this.value = 'some value';
             * ```
             *
             * This has been deprecated for a few reasons. First, developers have found this pattern
             * confusing. It seems like the actual `ngModel` directive is being used, but in fact it's
             * an input/output property named `ngModel` on the reactive form directive that simply
             * approximates (some of) its behavior. Specifically, it allows getting/setting the value
             * and intercepting value events. However, some of `ngModel`'s other features - like
             * delaying updates with`ngModelOptions` or exporting the directive - simply don't work,
             * which has understandably caused some confusion.
             *
             * In addition, this pattern mixes template-driven and reactive forms strategies, which
             * we generally don't recommend because it doesn't take advantage of the full benefits of
             * either strategy. Setting the value in the template violates the template-agnostic
             * principles behind reactive forms, whereas adding a `FormControl`/`FormGroup` layer in
             * the class removes the convenience of defining forms in the template.
             *
             * To update your code before v7, you'll want to decide whether to stick with reactive form
             * directives (and get/set values using reactive forms patterns) or switch over to
             * template-driven directives.
             *
             * After (choice 1 - use reactive forms):
             *
             * ```html
             * <form [formGroup]="form">
             *   <input formControlName="first">
             * </form>
             * ```
             *
             * ```ts
             * this.form.get('first').setValue('some value');
             * ```
             *
             * After (choice 2 - use template-driven forms):
             *
             * ```html
             * <input [(ngModel)]="value">
             * ```
             *
             * ```ts
             * this.value = 'some value';
             * ```
             *
             * By default, when you use this pattern, you will see a deprecation warning once in dev
             * mode. You can choose to silence this warning by providing a config for
             * `ReactiveFormsModule` at import time:
             *
             * ```ts
             * imports: [
             *   ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'})
             * ]
             * ```
             *
             * Alternatively, you can choose to surface a separate warning for each instance of this
             * pattern with a config value of `"always"`. This may help to track down where in the code
             * the pattern is being used as the code is being updated.
             *
             * \@ngModule ReactiveFormsModule
             * \@publicApi
             */
            var FormControlName = /** @class */ (function (_super) {
                __extends(FormControlName, _super);
                /**
                 * @param {?} parent
                 * @param {?} validators
                 * @param {?} asyncValidators
                 * @param {?} valueAccessors
                 * @param {?} _ngModelWarningConfig
                 */
                function FormControlName(parent, validators, asyncValidators, valueAccessors, _ngModelWarningConfig) {
                    var _this = _super.call(this) || this;
                    _this._ngModelWarningConfig = _ngModelWarningConfig;
                    _this._added = false;
                    /**
                     * @deprecated as of v6
                     */
                    _this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
                    /**
                     * \@description
                     * Instance property used to track whether an ngModel warning has been sent out for this
                     * particular FormControlName instance. Used to support warning config of "always".
                     *
                     * \@internal
                     */
                    _this._ngModelWarningSent = false;
                    _this._parent = parent;
                    _this._rawValidators = validators || [];
                    _this._rawAsyncValidators = asyncValidators || [];
                    _this.valueAccessor = selectValueAccessor(_this, valueAccessors);
                    return _this;
                }
                Object.defineProperty(FormControlName.prototype, "isDisabled", {
                    /**
                     * \@description
                     * Triggers a warning that this input should not be used with reactive forms.
                     * @param {?} isDisabled
                     * @return {?}
                     */
                    set: function (isDisabled) { ReactiveErrors.disabledAttrWarning(); },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * \@description
                 * A lifecycle method called when the directive's inputs change. For internal use only.
                 *
                 * @param {?} changes A object of key/value pairs for the set of changed inputs.
                 * @return {?}
                 */
                FormControlName.prototype.ngOnChanges = function (changes) {
                    if (!this._added)
                        this._setUpControl();
                    if (isPropertyUpdated(changes, this.viewModel)) {
                        _ngModelWarning('formControlName', FormControlName, this, this._ngModelWarningConfig);
                        this.viewModel = this.model;
                        this.formDirective.updateModel(this, this.model);
                    }
                };
                /**
                 * \@description
                 * Lifecycle method called before the directive's instance is destroyed. For internal use only.
                 * @return {?}
                 */
                FormControlName.prototype.ngOnDestroy = function () {
                    if (this.formDirective) {
                        this.formDirective.removeControl(this);
                    }
                };
                /**
                 * \@description
                 * Sets the new value for the view model and emits an `ngModelChange` event.
                 *
                 * @param {?} newValue The new value for the view model.
                 * @return {?}
                 */
                FormControlName.prototype.viewToModelUpdate = function (newValue) {
                    this.viewModel = newValue;
                    this.update.emit(newValue);
                };
                Object.defineProperty(FormControlName.prototype, "path", {
                    /**
                     * \@description
                     * Returns an array that represents the path from the top-level form to this control.
                     * Each index is the string name of the control on that level.
                     * @return {?}
                     */
                    get: function () { return controlPath(this.name, ( /** @type {?} */(this._parent))); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FormControlName.prototype, "formDirective", {
                    /**
                     * \@description
                     * The top-level directive for this group if present, otherwise null.
                     * @return {?}
                     */
                    get: function () { return this._parent ? this._parent.formDirective : null; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FormControlName.prototype, "validator", {
                    /**
                     * \@description
                     * Synchronous validator function composed of all the synchronous validators
                     * registered with this directive.
                     * @return {?}
                     */
                    get: function () { return composeValidators(this._rawValidators); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FormControlName.prototype, "asyncValidator", {
                    /**
                     * \@description
                     * Async validator function composed of all the async validators registered with this
                     * directive.
                     * @return {?}
                     */
                    get: function () {
                        return ( /** @type {?} */(composeAsyncValidators(this._rawAsyncValidators)));
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * @private
                 * @return {?}
                 */
                FormControlName.prototype._checkParentType = function () {
                    if (!(this._parent instanceof FormGroupName) &&
                        this._parent instanceof AbstractFormGroupDirective) {
                        ReactiveErrors.ngModelGroupException();
                    }
                    else if (!(this._parent instanceof FormGroupName) && !(this._parent instanceof FormGroupDirective) &&
                        !(this._parent instanceof FormArrayName)) {
                        ReactiveErrors.controlParentException();
                    }
                };
                /**
                 * @private
                 * @return {?}
                 */
                FormControlName.prototype._setUpControl = function () {
                    this._checkParentType();
                    (( /** @type {?} */(this))).control = this.formDirective.addControl(this);
                    if (this.control.disabled && ( /** @type {?} */(this.valueAccessor)).setDisabledState) {
                        ( /** @type {?} */(( /** @type {?} */(this.valueAccessor)).setDisabledState))(true);
                    }
                    this._added = true;
                };
                return FormControlName;
            }(NgControl));
            /**
             * \@description
             * Static property used to track whether any ngModel warnings have been sent across
             * all instances of FormControlName. Used to support warning config of "once".
             *
             * \@internal
             */
            FormControlName._ngModelWarningSentOnce = false;
            FormControlName.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[formControlName]', providers: [controlNameBinding] },] }
            ];
            /** @nocollapse */
            FormControlName.ctorParameters = function () { return [
                { type: ControlContainer, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"] }] },
                { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_VALIDATORS,] }] },
                { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_ASYNC_VALIDATORS,] }] },
                { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_VALUE_ACCESSOR,] }] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_MODEL_WITH_FORM_CONTROL_WARNING,] }] }
            ]; };
            FormControlName.propDecorators = {
                name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['formControlName',] }],
                isDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['disabled',] }],
                model: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ngModel',] }],
                update: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['ngModelChange',] }]
            };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * \@description
             * An interface implemented by classes that perform synchronous validation.
             *
             * \@usageNotes
             *
             * ### Provide a custom validator
             *
             * The following example implements the `Validator` interface to create a
             * validator directive with a custom error key.
             *
             * ```typescript
             * \@Directive({
             *   selector: '[customValidator]',
             *   providers: [{provide: NG_VALIDATORS, useExisting: CustomValidatorDirective, multi: true}]
             * })
             * class CustomValidatorDirective implements Validator {
             *   validate(control: AbstractControl): ValidationErrors|null {
             *     return {'custom': true};
             *   }
             * }
             * ```
             *
             * \@publicApi
             * @record
             */
            function Validator() { }
            if (false) { }
            /**
             * \@description
             * An interface implemented by classes that perform asynchronous validation.
             *
             * \@usageNotes
             *
             * ### Provide a custom async validator directive
             *
             * The following example implements the `AsyncValidator` interface to create an
             * async validator directive with a custom error key.
             *
             * ```typescript
             * import { of as observableOf } from 'rxjs';
             *
             * \@Directive({
             *   selector: '[customAsyncValidator]',
             *   providers: [{provide: NG_ASYNC_VALIDATORS, useExisting: CustomAsyncValidatorDirective, multi:
             * true}]
             * })
             * class CustomAsyncValidatorDirective implements AsyncValidator {
             *   validate(control: AbstractControl): Observable<ValidationErrors|null> {
             *     return observableOf({'custom': true});
             *   }
             * }
             * ```
             *
             * \@publicApi
             * @record
             */
            function AsyncValidator() { }
            if (false) { }
            /**
             * \@description
             * Provider which adds `RequiredValidator` to the `NG_VALIDATORS` multi-provider list.
             * @type {?}
             */
            var REQUIRED_VALIDATOR = {
                provide: NG_VALIDATORS,
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                 * @return {?}
                 */function () { return RequiredValidator; })),
                multi: true
            };
            /**
             * \@description
             * Provider which adds `CheckboxRequiredValidator` to the `NG_VALIDATORS` multi-provider list.
             * @type {?}
             */
            var CHECKBOX_REQUIRED_VALIDATOR = {
                provide: NG_VALIDATORS,
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                 * @return {?}
                 */function () { return CheckboxRequiredValidator; })),
                multi: true
            };
            /**
             * \@description
             * A directive that adds the `required` validator to any controls marked with the
             * `required` attribute. The directive is provided with the `NG_VALIDATORS` multi-provider list.
             *
             * @see [Form Validation](guide/form-validation)
             *
             * \@usageNotes
             *
             * ### Adding a required validator using template-driven forms
             *
             * ```
             * <input name="fullName" ngModel required>
             * ```
             *
             * \@ngModule FormsModule
             * \@ngModule ReactiveFormsModule
             * \@publicApi
             */
            var RequiredValidator = /** @class */ (function () {
                function RequiredValidator() {
                }
                Object.defineProperty(RequiredValidator.prototype, "required", {
                    /**
                     * \@description
                     * Tracks changes to the required attribute bound to this directive.
                     * @return {?}
                     */
                    get: function () { return this._required; },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        this._required = value != null && value !== false && "" + value !== 'false';
                        if (this._onChange)
                            this._onChange();
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * \@description
                 * Method that validates whether the control is empty.
                 * Returns the validation result if enabled, otherwise null.
                 * @param {?} control
                 * @return {?}
                 */
                RequiredValidator.prototype.validate = function (control) {
                    return this.required ? Validators.required(control) : null;
                };
                /**
                 * \@description
                 * Registers a callback function to call when the validator inputs change.
                 *
                 * @param {?} fn The callback function
                 * @return {?}
                 */
                RequiredValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
                return RequiredValidator;
            }());
            RequiredValidator.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: ':not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]',
                            providers: [REQUIRED_VALIDATOR],
                            host: { '[attr.required]': 'required ? "" : null' }
                        },] }
            ];
            RequiredValidator.propDecorators = {
                required: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
            };
            if (false) { }
            /**
             * A Directive that adds the `required` validator to checkbox controls marked with the
             * `required` attribute. The directive is provided with the `NG_VALIDATORS` multi-provider list.
             *
             * @see [Form Validation](guide/form-validation)
             *
             * \@usageNotes
             *
             * ### Adding a required checkbox validator using template-driven forms
             *
             * The following example shows how to add a checkbox required validator to an input attached to an ngModel binding.
             *
             * ```
             * <input type="checkbox" name="active" ngModel required>
             * ```
             *
             * \@publicApi
             * \@ngModule FormsModule
             * \@ngModule ReactiveFormsModule
             */
            var CheckboxRequiredValidator = /** @class */ (function (_super) {
                __extends(CheckboxRequiredValidator, _super);
                function CheckboxRequiredValidator() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                /**
                 * \@description
                 * Method that validates whether or not the checkbox has been checked.
                 * Returns the validation result if enabled, otherwise null.
                 * @param {?} control
                 * @return {?}
                 */
                CheckboxRequiredValidator.prototype.validate = function (control) {
                    return this.required ? Validators.requiredTrue(control) : null;
                };
                return CheckboxRequiredValidator;
            }(RequiredValidator));
            CheckboxRequiredValidator.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: 'input[type=checkbox][required][formControlName],input[type=checkbox][required][formControl],input[type=checkbox][required][ngModel]',
                            providers: [CHECKBOX_REQUIRED_VALIDATOR],
                            host: { '[attr.required]': 'required ? "" : null' }
                        },] }
            ];
            /**
             * \@description
             * Provider which adds `EmailValidator` to the `NG_VALIDATORS` multi-provider list.
             * @type {?}
             */
            var EMAIL_VALIDATOR = {
                provide: NG_VALIDATORS,
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                 * @return {?}
                 */function () { return EmailValidator; })),
                multi: true
            };
            /**
             * A directive that adds the `email` validator to controls marked with the
             * `email` attribute. The directive is provided with the `NG_VALIDATORS` multi-provider list.
             *
             * @see [Form Validation](guide/form-validation)
             *
             * \@usageNotes
             *
             * ### Adding an email validator
             *
             * The following example shows how to add an email validator to an input attached to an ngModel binding.
             *
             * ```
             * <input type="email" name="email" ngModel email>
             * <input type="email" name="email" ngModel email="true">
             * <input type="email" name="email" ngModel [email]="true">
             * ```
             *
             * \@publicApi
             * \@ngModule FormsModule
             * \@ngModule ReactiveFormsModule
             */
            var EmailValidator = /** @class */ (function () {
                function EmailValidator() {
                }
                Object.defineProperty(EmailValidator.prototype, "email", {
                    /**
                     * \@description
                     * Tracks changes to the email attribute bound to this directive.
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        this._enabled = value === '' || value === true || value === 'true';
                        if (this._onChange)
                            this._onChange();
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * \@description
                 * Method that validates whether an email address is valid.
                 * Returns the validation result if enabled, otherwise null.
                 * @param {?} control
                 * @return {?}
                 */
                EmailValidator.prototype.validate = function (control) {
                    return this._enabled ? Validators.email(control) : null;
                };
                /**
                 * \@description
                 * Registers a callback function to call when the validator inputs change.
                 *
                 * @param {?} fn The callback function
                 * @return {?}
                 */
                EmailValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
                return EmailValidator;
            }());
            EmailValidator.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: '[email][formControlName],[email][formControl],[email][ngModel]',
                            providers: [EMAIL_VALIDATOR]
                        },] }
            ];
            EmailValidator.propDecorators = {
                email: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
            };
            if (false) { }
            /**
             * \@description
             * A function that receives a control and synchronously returns a map of
             * validation errors if present, otherwise null.
             *
             * \@publicApi
             * @record
             */
            function ValidatorFn() { }
            /**
             * \@description
             * A function that receives a control and returns a Promise or observable
             * that emits validation errors if present, otherwise null.
             *
             * \@publicApi
             * @record
             */
            function AsyncValidatorFn() { }
            /**
             * \@description
             * Provider which adds `MinLengthValidator` to the `NG_VALIDATORS` multi-provider list.
             * @type {?}
             */
            var MIN_LENGTH_VALIDATOR = {
                provide: NG_VALIDATORS,
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                 * @return {?}
                 */function () { return MinLengthValidator; })),
                multi: true
            };
            /**
             * A directive that adds minimum length validation to controls marked with the
             * `minlength` attribute. The directive is provided with the `NG_VALIDATORS` mult-provider list.
             *
             * @see [Form Validation](guide/form-validation)
             *
             * \@usageNotes
             *
             * ### Adding a minimum length validator
             *
             * The following example shows how to add a minimum length validator to an input attached to an
             * ngModel binding.
             *
             * ```html
             * <input name="firstName" ngModel minlength="4">
             * ```
             *
             * \@ngModule ReactiveFormsModule
             * \@ngModule FormsModule
             * \@publicApi
             */
            var MinLengthValidator = /** @class */ (function () {
                function MinLengthValidator() {
                }
                /**
                 * \@description
                 * A lifecycle method called when the directive's inputs change. For internal use
                 * only.
                 *
                 * @param {?} changes A object of key/value pairs for the set of changed inputs.
                 * @return {?}
                 */
                MinLengthValidator.prototype.ngOnChanges = function (changes) {
                    if ('minlength' in changes) {
                        this._createValidator();
                        if (this._onChange)
                            this._onChange();
                    }
                };
                /**
                 * \@description
                 * Method that validates whether the value meets a minimum length
                 * requirement. Returns the validation result if enabled, otherwise null.
                 * @param {?} control
                 * @return {?}
                 */
                MinLengthValidator.prototype.validate = function (control) {
                    return this.minlength == null ? null : this._validator(control);
                };
                /**
                 * \@description
                 * Registers a callback function to call when the validator inputs change.
                 *
                 * @param {?} fn The callback function
                 * @return {?}
                 */
                MinLengthValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
                /**
                 * @private
                 * @return {?}
                 */
                MinLengthValidator.prototype._createValidator = function () {
                    this._validator = Validators.minLength(parseInt(this.minlength, 10));
                };
                return MinLengthValidator;
            }());
            MinLengthValidator.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: '[minlength][formControlName],[minlength][formControl],[minlength][ngModel]',
                            providers: [MIN_LENGTH_VALIDATOR],
                            host: { '[attr.minlength]': 'minlength ? minlength : null' }
                        },] }
            ];
            MinLengthValidator.propDecorators = {
                minlength: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
            };
            if (false) { }
            /**
             * \@description
             * Provider which adds `MaxLengthValidator` to the `NG_VALIDATORS` multi-provider list.
             * @type {?}
             */
            var MAX_LENGTH_VALIDATOR = {
                provide: NG_VALIDATORS,
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                 * @return {?}
                 */function () { return MaxLengthValidator; })),
                multi: true
            };
            /**
             * A directive that adds max length validation to controls marked with the
             * `maxlength` attribute. The directive is provided with the `NG_VALIDATORS` multi-provider list.
             *
             * @see [Form Validation](guide/form-validation)
             *
             * \@usageNotes
             *
             * ### Adding a maximum length validator
             *
             * The following example shows how to add a maximum length validator to an input attached to an
             * ngModel binding.
             *
             * ```html
             * <input name="firstName" ngModel maxlength="25">
             * ```
             *
             * \@ngModule ReactiveFormsModule
             * \@ngModule FormsModule
             * \@publicApi
             */
            var MaxLengthValidator = /** @class */ (function () {
                function MaxLengthValidator() {
                }
                /**
                 * \@description
                 * A lifecycle method called when the directive's inputs change. For internal use
                 * only.
                 *
                 * @param {?} changes A object of key/value pairs for the set of changed inputs.
                 * @return {?}
                 */
                MaxLengthValidator.prototype.ngOnChanges = function (changes) {
                    if ('maxlength' in changes) {
                        this._createValidator();
                        if (this._onChange)
                            this._onChange();
                    }
                };
                /**
                 * \@description
                 * Method that validates whether the value exceeds
                 * the maximum length requirement.
                 * @param {?} control
                 * @return {?}
                 */
                MaxLengthValidator.prototype.validate = function (control) {
                    return this.maxlength != null ? this._validator(control) : null;
                };
                /**
                 * \@description
                 * Registers a callback function to call when the validator inputs change.
                 *
                 * @param {?} fn The callback function
                 * @return {?}
                 */
                MaxLengthValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
                /**
                 * @private
                 * @return {?}
                 */
                MaxLengthValidator.prototype._createValidator = function () {
                    this._validator = Validators.maxLength(parseInt(this.maxlength, 10));
                };
                return MaxLengthValidator;
            }());
            MaxLengthValidator.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: '[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]',
                            providers: [MAX_LENGTH_VALIDATOR],
                            host: { '[attr.maxlength]': 'maxlength ? maxlength : null' }
                        },] }
            ];
            MaxLengthValidator.propDecorators = {
                maxlength: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
            };
            if (false) { }
            /**
             * \@description
             * Provider which adds `PatternValidator` to the `NG_VALIDATORS` multi-provider list.
             * @type {?}
             */
            var PATTERN_VALIDATOR = {
                provide: NG_VALIDATORS,
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                 * @return {?}
                 */function () { return PatternValidator; })),
                multi: true
            };
            /**
             * \@description
             * A directive that adds regex pattern validation to controls marked with the
             * `pattern` attribute. The regex must match the entire control value.
             * The directive is provided with the `NG_VALIDATORS` multi-provider list.
             *
             * @see [Form Validation](guide/form-validation)
             *
             * \@usageNotes
             *
             * ### Adding a pattern validator
             *
             * The following example shows how to add a pattern validator to an input attached to an
             * ngModel binding.
             *
             * ```html
             * <input name="firstName" ngModel pattern="[a-zA-Z ]*">
             * ```
             *
             * \@ngModule ReactiveFormsModule
             * \@ngModule FormsModule
             * \@publicApi
             */
            var PatternValidator = /** @class */ (function () {
                function PatternValidator() {
                }
                /**
                 * \@description
                 * A lifecycle method called when the directive's inputs change. For internal use
                 * only.
                 *
                 * @param {?} changes A object of key/value pairs for the set of changed inputs.
                 * @return {?}
                 */
                PatternValidator.prototype.ngOnChanges = function (changes) {
                    if ('pattern' in changes) {
                        this._createValidator();
                        if (this._onChange)
                            this._onChange();
                    }
                };
                /**
                 * \@description
                 * Method that validates whether the value matches the
                 * the pattern requirement.
                 * @param {?} control
                 * @return {?}
                 */
                PatternValidator.prototype.validate = function (control) { return this._validator(control); };
                /**
                 * \@description
                 * Registers a callback function to call when the validator inputs change.
                 *
                 * @param {?} fn The callback function
                 * @return {?}
                 */
                PatternValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
                /**
                 * @private
                 * @return {?}
                 */
                PatternValidator.prototype._createValidator = function () { this._validator = Validators.pattern(this.pattern); };
                return PatternValidator;
            }());
            PatternValidator.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: '[pattern][formControlName],[pattern][formControl],[pattern][ngModel]',
                            providers: [PATTERN_VALIDATOR],
                            host: { '[attr.pattern]': 'pattern ? pattern : null' }
                        },] }
            ];
            PatternValidator.propDecorators = {
                pattern: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
            };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @type {?} */
            var SHARED_FORM_DIRECTIVES = [
                ɵNgNoValidate,
                NgSelectOption,
                ɵNgSelectMultipleOption,
                DefaultValueAccessor,
                NumberValueAccessor,
                RangeValueAccessor,
                CheckboxControlValueAccessor,
                SelectControlValueAccessor,
                SelectMultipleControlValueAccessor,
                RadioControlValueAccessor,
                NgControlStatus,
                NgControlStatusGroup,
                RequiredValidator,
                MinLengthValidator,
                MaxLengthValidator,
                PatternValidator,
                CheckboxRequiredValidator,
                EmailValidator,
            ];
            /** @type {?} */
            var TEMPLATE_DRIVEN_DIRECTIVES = [NgModel, NgModelGroup, NgForm, NgFormSelectorWarning];
            /** @type {?} */
            var REACTIVE_DRIVEN_DIRECTIVES = [FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName];
            /**
             * Internal module used for sharing directives between FormsModule and ReactiveFormsModule
             */
            var ɵInternalFormsSharedModule = /** @class */ (function () {
                function ɵInternalFormsSharedModule() {
                }
                return ɵInternalFormsSharedModule;
            }());
            ɵInternalFormsSharedModule.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                            declarations: SHARED_FORM_DIRECTIVES,
                            exports: SHARED_FORM_DIRECTIVES,
                        },] }
            ];
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * @param {?} options
             * @return {?}
             */
            function isAbstractControlOptions(options) {
                return (( /** @type {?} */(options))).asyncValidators !== undefined ||
                    (( /** @type {?} */(options))).validators !== undefined ||
                    (( /** @type {?} */(options))).updateOn !== undefined;
            }
            /**
             * \@description
             * Creates an `AbstractControl` from a user-specified configuration.
             *
             * The `FormBuilder` provides syntactic sugar that shortens creating instances of a `FormControl`,
             * `FormGroup`, or `FormArray`. It reduces the amount of boilerplate needed to build complex
             * forms.
             *
             * @see [Reactive Forms Guide](/guide/reactive-forms)
             *
             * \@publicApi
             */
            var FormBuilder = /** @class */ (function () {
                function FormBuilder() {
                }
                /**
                 * \@description
                 * Construct a new `FormGroup` instance.
                 *
                 * @param {?} controlsConfig A collection of child controls. The key for each child is the name
                 * under which it is registered.
                 *
                 * @param {?=} options Configuration options object for the `FormGroup`. The object can
                 * have two shapes:
                 *
                 * 1) `AbstractControlOptions` object (preferred), which consists of:
                 * * `validators`: A synchronous validator function, or an array of validator functions
                 * * `asyncValidators`: A single async validator or array of async validator functions
                 * * `updateOn`: The event upon which the control should be updated (options: 'change' | 'blur' |
                 * submit')
                 *
                 * 2) Legacy configuration object, which consists of:
                 * * `validator`: A synchronous validator function, or an array of validator functions
                 * * `asyncValidator`: A single async validator or array of async validator functions
                 *
                 * @return {?}
                 */
                FormBuilder.prototype.group = function (controlsConfig, options) {
                    if (options === void 0) { options = null; }
                    /** @type {?} */
                    var controls = this._reduceControls(controlsConfig);
                    /** @type {?} */
                    var validators = null;
                    /** @type {?} */
                    var asyncValidators = null;
                    /** @type {?} */
                    var updateOn = undefined;
                    if (options != null) {
                        if (isAbstractControlOptions(options)) {
                            // `options` are `AbstractControlOptions`
                            validators = options.validators != null ? options.validators : null;
                            asyncValidators = options.asyncValidators != null ? options.asyncValidators : null;
                            updateOn = options.updateOn != null ? options.updateOn : undefined;
                        }
                        else {
                            // `options` are legacy form group options
                            validators = options['validator'] != null ? options['validator'] : null;
                            asyncValidators = options['asyncValidator'] != null ? options['asyncValidator'] : null;
                        }
                    }
                    return new FormGroup(controls, { asyncValidators: asyncValidators, updateOn: updateOn, validators: validators });
                };
                /**
                 * \@description
                 * Construct a new `FormControl` with the given state, validators and options.
                 *
                 * \@usageNotes
                 *
                 * ### Initialize a control as disabled
                 *
                 * The following example returns a control with an initial value in a disabled state.
                 *
                 * <code-example path="forms/ts/formBuilder/form_builder_example.ts" region="disabled-control">
                 * </code-example>
                 * @param {?} formState Initializes the control with an initial state value, or
                 * with an object that contains both a value and a disabled status.
                 *
                 * @param {?=} validatorOrOpts A synchronous validator function, or an array of
                 * such functions, or an `AbstractControlOptions` object that contains
                 * validation functions and a validation trigger.
                 *
                 * @param {?=} asyncValidator A single async validator or array of async validator
                 * functions.
                 *
                 * @return {?}
                 */
                FormBuilder.prototype.control = function (formState, validatorOrOpts, asyncValidator) {
                    return new FormControl(formState, validatorOrOpts, asyncValidator);
                };
                /**
                 * Constructs a new `FormArray` from the given array of configurations,
                 * validators and options.
                 *
                 * @param {?} controlsConfig An array of child controls or control configs. Each
                 * child control is given an index when it is registered.
                 *
                 * @param {?=} validatorOrOpts A synchronous validator function, or an array of
                 * such functions, or an `AbstractControlOptions` object that contains
                 * validation functions and a validation trigger.
                 *
                 * @param {?=} asyncValidator A single async validator or array of async validator
                 * functions.
                 * @return {?}
                 */
                FormBuilder.prototype.array = function (controlsConfig, validatorOrOpts, asyncValidator) {
                    var _this = this;
                    /** @type {?} */
                    var controls = controlsConfig.map(( /**
                     * @param {?} c
                     * @return {?}
                     */function (/**
                     * @param {?} c
                     * @return {?}
                     */ c) { return _this._createControl(c); }));
                    return new FormArray(controls, validatorOrOpts, asyncValidator);
                };
                /**
                 * \@internal
                 * @param {?} controlsConfig
                 * @return {?}
                 */
                FormBuilder.prototype._reduceControls = function (controlsConfig) {
                    var _this = this;
                    /** @type {?} */
                    var controls = {};
                    Object.keys(controlsConfig).forEach(( /**
                     * @param {?} controlName
                     * @return {?}
                     */function (/**
                     * @param {?} controlName
                     * @return {?}
                     */ controlName) {
                        controls[controlName] = _this._createControl(controlsConfig[controlName]);
                    }));
                    return controls;
                };
                /**
                 * \@internal
                 * @param {?} controlConfig
                 * @return {?}
                 */
                FormBuilder.prototype._createControl = function (controlConfig) {
                    if (controlConfig instanceof FormControl || controlConfig instanceof FormGroup ||
                        controlConfig instanceof FormArray) {
                        return controlConfig;
                    }
                    else if (Array.isArray(controlConfig)) {
                        /** @type {?} */
                        var value = controlConfig[0];
                        /** @type {?} */
                        var validator = controlConfig.length > 1 ? controlConfig[1] : null;
                        /** @type {?} */
                        var asyncValidator = controlConfig.length > 2 ? controlConfig[2] : null;
                        return this.control(value, validator, asyncValidator);
                    }
                    else {
                        return this.control(controlConfig);
                    }
                };
                return FormBuilder;
            }());
            FormBuilder.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
            ];
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * \@publicApi
             * @type {?}
             */
            var VERSION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Version"]('8.2.10');
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Exports the required providers and directives for template-driven forms,
             * making them available for import by NgModules that import this module.
             *
             * @see [Forms Guide](/guide/forms)
             *
             * \@publicApi
             */
            var FormsModule = /** @class */ (function () {
                function FormsModule() {
                }
                /**
                 * \@description
                 * Provides options for configuring the template-driven forms module.
                 *
                 * @param {?} opts An object of configuration options
                 * * `warnOnDeprecatedNgFormSelector` Configures when to emit a warning when the deprecated
                 * `ngForm` selector is used.
                 * @return {?}
                 */
                FormsModule.withConfig = function (opts) {
                    return {
                        ngModule: FormsModule,
                        providers: [{ provide: NG_FORM_SELECTOR_WARNING, useValue: opts.warnOnDeprecatedNgFormSelector }]
                    };
                };
                return FormsModule;
            }());
            FormsModule.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                            declarations: TEMPLATE_DRIVEN_DIRECTIVES,
                            providers: [RadioControlRegistry],
                            exports: [ɵInternalFormsSharedModule, TEMPLATE_DRIVEN_DIRECTIVES]
                        },] }
            ];
            /**
             * Exports the required infrastructure and directives for reactive forms,
             * making them available for import by NgModules that import this module.
             * @see [Forms](guide/reactive-forms)
             *
             * @see [Reactive Forms Guide](/guide/reactive-forms)
             *
             * \@publicApi
             */
            var ReactiveFormsModule = /** @class */ (function () {
                function ReactiveFormsModule() {
                }
                /**
                 * \@description
                 * Provides options for configuring the reactive forms module.
                 *
                 * @param {?} opts An object of configuration options
                 * * `warnOnNgModelWithFormControl` Configures when to emit a warning when an `ngModel`
                 * binding is used with reactive form directives.
                 * @return {?}
                 */
                ReactiveFormsModule.withConfig = function (opts) {
                    return {
                        ngModule: ReactiveFormsModule,
                        providers: [{
                                provide: NG_MODEL_WITH_FORM_CONTROL_WARNING,
                                useValue: opts.warnOnNgModelWithFormControl
                            }]
                    };
                };
                return ReactiveFormsModule;
            }());
            ReactiveFormsModule.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                            declarations: [REACTIVE_DRIVEN_DIRECTIVES],
                            providers: [FormBuilder, RadioControlRegistry],
                            exports: [ɵInternalFormsSharedModule, REACTIVE_DRIVEN_DIRECTIVES]
                        },] }
            ];
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Generated bundle index. Do not edit.
             */
            //# sourceMappingURL=forms.js.map
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/projects/project-creator/project-creator.component.html": 
        /*!*********************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/projects/project-creator/project-creator.component.html ***!
          \*********************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-project-form submitLabel=\"Create a New Project\" (projectSubmitted)=\"onProjectCreated($event)\"></app-project-form>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/projects/project-detail/project-detail.component.html": 
        /*!*******************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/projects/project-detail/project-detail.component.html ***!
          \*******************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <pre>{{project | json}}</pre>\n</div>\n\n<div *ngIf=\"pageMode !== 'edit'\">\n  <button [routerLink]=\"['.']\" [queryParams]=\"{'mode': 'edit'}\">Edit</button>\n  <button (click)=\"deleteProject()\">Delete</button>\n  <button (click)=\"missionDone()\">See All Projects</button>\n</div>\n\n<div *ngIf=\"pageMode === 'edit' && project\">\n  <app-project-form [project]=\"project\" submitLabel=\"Update\" (projectSubmitted)=\"onProjectSubmitted($event)\"></app-project-form>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/projects/project-form/project-form.component.html": 
        /*!***************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/projects/project-form/project-form.component.html ***!
          \***************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"projectFormGroup\" (ngSubmit)=\"onSubmit(projectFormGroup.value)\">\n  <input formControlName=\"id\" type=\"text\">\n  <input formControlName=\"name\" type=\"text\">\n  <input formControlName=\"status\" type=\"text\">\n  <input formControlName=\"description\" type=\"text\">\n  <input formControlName=\"owner\" type=\"text\">\n\n  <button type=\"submit\">{{submitLabel}}</button>\n</form>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/projects/projects-list-item/projects-list-item.component.html": 
        /*!***************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/projects/projects-list-item/projects-list-item.component.html ***!
          \***************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<span>ID: {{project.id}} </span>\n<span>NAME: {{project.name}} </span>\n<span>STATUS: {{project.status}}</span>\n<hr>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/projects/projects-list/projects-list.component.html": 
        /*!*****************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/projects/projects-list/projects-list.component.html ***!
          \*****************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<button (click)=\"goToProjectCreator()\">Create a Project</button>\n\n<p>Here's the list of projects:</p>\n\n<div *ngFor=\"let project of projects$ | async\" class=\"project-list-item-container\" (click)=\"goToProject(project)\">\n  <app-projects-list-item [project]=\"project\"></app-projects-list-item>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/projects/projects.component.html": 
        /*!**********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/projects/projects.component.html ***!
          \**********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<router-outlet (activate)=\"onActivated($event)\"></router-outlet>\n");
            /***/ 
        }),
        /***/ "./src/app/pages/projects/project-creator/project-creator.component.scss": 
        /*!*******************************************************************************!*\
          !*** ./src/app/pages/projects/project-creator/project-creator.component.scss ***!
          \*******************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2plY3RzL3Byb2plY3QtY3JlYXRvci9wcm9qZWN0LWNyZWF0b3IuY29tcG9uZW50LnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/pages/projects/project-creator/project-creator.component.ts": 
        /*!*****************************************************************************!*\
          !*** ./src/app/pages/projects/project-creator/project-creator.component.ts ***!
          \*****************************************************************************/
        /*! exports provided: ProjectCreatorComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectCreatorComponent", function () { return ProjectCreatorComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var ProjectCreatorComponent = /** @class */ (function () {
                function ProjectCreatorComponent(router) {
                    var _this = this;
                    this.router = router;
                    this.createSuccess = function () {
                        _this.router.navigate(['./projects']);
                    };
                    this.createError = function () {
                        alert("Please try again later!");
                    };
                    this.projectCreated = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                }
                ProjectCreatorComponent.prototype.ngOnInit = function () {
                    this.createCallbacks = {
                        success: this.createSuccess,
                        error: this.createError
                    };
                };
                ProjectCreatorComponent.prototype.onProjectCreated = function (project) {
                    var projectMeta = {
                        project: project,
                        callbacks: this.createCallbacks
                    };
                    this.projectCreated.emit(projectMeta);
                };
                return ProjectCreatorComponent;
            }());
            ProjectCreatorComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], ProjectCreatorComponent.prototype, "projectCreated", void 0);
            ProjectCreatorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-project-creator',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./project-creator.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/projects/project-creator/project-creator.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./project-creator.component.scss */ "./src/app/pages/projects/project-creator/project-creator.component.scss")).default]
                })
            ], ProjectCreatorComponent);
            /***/ 
        }),
        /***/ "./src/app/pages/projects/project-detail/project-detail.component.scss": 
        /*!*****************************************************************************!*\
          !*** ./src/app/pages/projects/project-detail/project-detail.component.scss ***!
          \*****************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2plY3RzL3Byb2plY3QtZGV0YWlsL3Byb2plY3QtZGV0YWlsLmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/pages/projects/project-detail/project-detail.component.ts": 
        /*!***************************************************************************!*\
          !*** ./src/app/pages/projects/project-detail/project-detail.component.ts ***!
          \***************************************************************************/
        /*! exports provided: ProjectDetailComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectDetailComponent", function () { return ProjectDetailComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            var ProjectDetailComponent = /** @class */ (function () {
                function ProjectDetailComponent(activatedRoute, router) {
                    var _this = this;
                    this.activatedRoute = activatedRoute;
                    this.router = router;
                    // is written with arrow notation to be able to get access to `this`.
                    this.updateSuccess = function () {
                        var queryParams = {
                            // setting the param to null will remove it from the query string.
                            mode: null
                        };
                        _this.router.navigate([], {
                            relativeTo: _this.activatedRoute,
                            queryParams: queryParams,
                            queryParamsHandling: 'merge'
                        });
                    };
                    this.deleteSuccess = function () {
                        _this.router.navigate(['/projects']);
                    };
                    this.projectId = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.projectUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.projectDeleted = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.done = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["ReplaySubject"](1);
                }
                ProjectDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    // why not using `this.activatedRoute.params.pipe(...)` ?
                    // because by using the pipe we're actually generating an observable, it won't produce
                    // the actual value immediately, it'll produce the value once it's assigned
                    // to a variable and it's consumed in the UI or in the code
                    this.activatedRoute.params.subscribe(function (params) {
                        _this.projectId.emit(params.id);
                    });
                    this.activatedRoute
                        .queryParams
                        .subscribe(function (queryParams) { return _this.pageMode = queryParams.mode; });
                    this.project$
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroyed$)).subscribe(function (project) { return _this.project = project; });
                    this.updateCallbacks = {
                        success: this.updateSuccess
                    };
                    this.deleteCallbacks = {
                        success: this.deleteSuccess
                    };
                };
                ProjectDetailComponent.prototype.onProjectSubmitted = function (project) {
                    this.projectUpdated.emit({
                        project: project,
                        callbacks: this.updateCallbacks
                    });
                };
                ProjectDetailComponent.prototype.deleteProject = function () {
                    var confirmProjectDeletion = confirm("Are you sure you wanna delete the project?").valueOf();
                    if (confirmProjectDeletion) {
                        var projectMeta = {
                            project: this.project,
                            callbacks: this.deleteCallbacks
                        };
                        this.projectDeleted.emit(projectMeta);
                    }
                };
                ProjectDetailComponent.prototype.missionDone = function () {
                    this.done.emit();
                };
                ProjectDetailComponent.prototype.ngOnDestroy = function () {
                    this.destroyed$.next(true);
                    this.destroyed$.complete();
                };
                return ProjectDetailComponent;
            }());
            ProjectDetailComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ProjectDetailComponent.prototype, "project$", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], ProjectDetailComponent.prototype, "projectId", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], ProjectDetailComponent.prototype, "projectUpdated", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], ProjectDetailComponent.prototype, "projectDeleted", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], ProjectDetailComponent.prototype, "done", void 0);
            ProjectDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-project-detail',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./project-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/projects/project-detail/project-detail.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./project-detail.component.scss */ "./src/app/pages/projects/project-detail/project-detail.component.scss")).default]
                })
            ], ProjectDetailComponent);
            /***/ 
        }),
        /***/ "./src/app/pages/projects/project-form/project-form.component.scss": 
        /*!*************************************************************************!*\
          !*** ./src/app/pages/projects/project-form/project-form.component.scss ***!
          \*************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2plY3RzL3Byb2plY3QtZm9ybS9wcm9qZWN0LWZvcm0uY29tcG9uZW50LnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/pages/projects/project-form/project-form.component.ts": 
        /*!***********************************************************************!*\
          !*** ./src/app/pages/projects/project-form/project-form.component.ts ***!
          \***********************************************************************/
        /*! exports provided: ProjectFormComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectFormComponent", function () { return ProjectFormComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _store_projects_store_models_project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../store/projects-store/models/project */ "./src/app/store/projects-store/models/project.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            var ProjectFormComponent = /** @class */ (function () {
                function ProjectFormComponent() {
                    this.project = new _store_projects_store_models_project__WEBPACK_IMPORTED_MODULE_2__["Project"]();
                    this.submitLabel = 'Create';
                    this.projectSubmitted = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                }
                ProjectFormComponent.prototype.ngOnInit = function () {
                    this.projectFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
                        id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.project.id),
                        name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.project.name),
                        status: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.project.status),
                        description: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.project.description),
                        owner: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.project.owner)
                    });
                };
                ProjectFormComponent.prototype.onSubmit = function (project) {
                    this.projectSubmitted.emit(project);
                };
                return ProjectFormComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ProjectFormComponent.prototype, "project", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ProjectFormComponent.prototype, "submitLabel", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], ProjectFormComponent.prototype, "projectSubmitted", void 0);
            ProjectFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-project-form',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./project-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/projects/project-form/project-form.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./project-form.component.scss */ "./src/app/pages/projects/project-form/project-form.component.scss")).default]
                })
            ], ProjectFormComponent);
            /***/ 
        }),
        /***/ "./src/app/pages/projects/projects-list-item/projects-list-item.component.scss": 
        /*!*************************************************************************************!*\
          !*** ./src/app/pages/projects/projects-list-item/projects-list-item.component.scss ***!
          \*************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2plY3RzL3Byb2plY3RzLWxpc3QtaXRlbS9wcm9qZWN0cy1saXN0LWl0ZW0uY29tcG9uZW50LnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/pages/projects/projects-list-item/projects-list-item.component.ts": 
        /*!***********************************************************************************!*\
          !*** ./src/app/pages/projects/projects-list-item/projects-list-item.component.ts ***!
          \***********************************************************************************/
        /*! exports provided: ProjectsListItemComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsListItemComponent", function () { return ProjectsListItemComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ProjectsListItemComponent = /** @class */ (function () {
                function ProjectsListItemComponent() {
                }
                ProjectsListItemComponent.prototype.ngOnInit = function () {
                };
                return ProjectsListItemComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ProjectsListItemComponent.prototype, "project", void 0);
            ProjectsListItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-projects-list-item',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./projects-list-item.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/projects/projects-list-item/projects-list-item.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./projects-list-item.component.scss */ "./src/app/pages/projects/projects-list-item/projects-list-item.component.scss")).default]
                })
            ], ProjectsListItemComponent);
            /***/ 
        }),
        /***/ "./src/app/pages/projects/projects-list/projects-list.component.scss": 
        /*!***************************************************************************!*\
          !*** ./src/app/pages/projects/projects-list/projects-list.component.scss ***!
          \***************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".project-list-item-container:hover {\n  background-color: darkgray;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvbGliL2plbmtpbnMvd29ya3NwYWNlL2hhbWlkZXYtYW5ndWxhci02MTcyLXNyY19kZXYvc3JjL2FwcC9wYWdlcy9wcm9qZWN0cy9wcm9qZWN0cy1saXN0L3Byb2plY3RzLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Byb2plY3RzL3Byb2plY3RzLWxpc3QvcHJvamVjdHMtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLDBCQUFBO0VBQ0EsZUFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvamVjdHMvcHJvamVjdHMtbGlzdC9wcm9qZWN0cy1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2plY3QtbGlzdC1pdGVtLWNvbnRhaW5lciB7XG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmF5O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxufVxuIiwiLnByb2plY3QtbGlzdC1pdGVtLWNvbnRhaW5lcjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmF5O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/pages/projects/projects-list/projects-list.component.ts": 
        /*!*************************************************************************!*\
          !*** ./src/app/pages/projects/projects-list/projects-list.component.ts ***!
          \*************************************************************************/
        /*! exports provided: ProjectsListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsListComponent", function () { return ProjectsListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var ProjectsListComponent = /** @class */ (function () {
                function ProjectsListComponent(router) {
                    this.router = router;
                }
                ProjectsListComponent.prototype.ngOnInit = function () {
                };
                ProjectsListComponent.prototype.goToProject = function (project) {
                    this.router.navigate(['./projects', project.id]);
                };
                ProjectsListComponent.prototype.goToProjectCreator = function () {
                    this.router.navigate(['./projects/create']);
                };
                return ProjectsListComponent;
            }());
            ProjectsListComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            ProjectsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-projects-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./projects-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/projects/projects-list/projects-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./projects-list.component.scss */ "./src/app/pages/projects/projects-list/projects-list.component.scss")).default]
                })
            ], ProjectsListComponent);
            /***/ 
        }),
        /***/ "./src/app/pages/projects/projects-routing.module.ts": 
        /*!***********************************************************!*\
          !*** ./src/app/pages/projects/projects-routing.module.ts ***!
          \***********************************************************/
        /*! exports provided: ProjectsRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsRoutingModule", function () { return ProjectsRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _projects_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projects.component */ "./src/app/pages/projects/projects.component.ts");
            /* harmony import */ var _projects_list_projects_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projects-list/projects-list.component */ "./src/app/pages/projects/projects-list/projects-list.component.ts");
            /* harmony import */ var _project_detail_project_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./project-detail/project-detail.component */ "./src/app/pages/projects/project-detail/project-detail.component.ts");
            /* harmony import */ var _project_creator_project_creator_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./project-creator/project-creator.component */ "./src/app/pages/projects/project-creator/project-creator.component.ts");
            var routes = [{
                    path: '',
                    component: _projects_component__WEBPACK_IMPORTED_MODULE_4__["ProjectsComponent"],
                    children: [{
                            path: '',
                            component: _projects_list_projects_list_component__WEBPACK_IMPORTED_MODULE_5__["ProjectsListComponent"]
                        }, {
                            path: 'create',
                            component: _project_creator_project_creator_component__WEBPACK_IMPORTED_MODULE_7__["ProjectCreatorComponent"]
                        }, {
                            path: ':id',
                            component: _project_detail_project_detail_component__WEBPACK_IMPORTED_MODULE_6__["ProjectDetailComponent"]
                        }]
                }];
            var ProjectsRoutingModule = /** @class */ (function () {
                function ProjectsRoutingModule() {
                }
                return ProjectsRoutingModule;
            }());
            ProjectsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
                    ],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
                })
            ], ProjectsRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/pages/projects/projects.component.scss": 
        /*!********************************************************!*\
          !*** ./src/app/pages/projects/projects.component.scss ***!
          \********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/pages/projects/projects.component.ts": 
        /*!******************************************************!*\
          !*** ./src/app/pages/projects/projects.component.ts ***!
          \******************************************************/
        /*! exports provided: ProjectsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function () { return ProjectsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _projects_list_projects_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects-list/projects-list.component */ "./src/app/pages/projects/projects-list/projects-list.component.ts");
            /* harmony import */ var _store_projects_store_services_projects_facade_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/projects-store/services/projects-facade.service */ "./src/app/store/projects-store/services/projects-facade.service.ts");
            /* harmony import */ var _project_detail_project_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project-detail/project-detail.component */ "./src/app/pages/projects/project-detail/project-detail.component.ts");
            /* harmony import */ var _project_creator_project_creator_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./project-creator/project-creator.component */ "./src/app/pages/projects/project-creator/project-creator.component.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var ProjectsComponent = /** @class */ (function () {
                function ProjectsComponent(projectsFacadeService, router) {
                    this.projectsFacadeService = projectsFacadeService;
                    this.router = router;
                }
                ProjectsComponent.prototype.ngOnInit = function () {
                    this.initializationCore();
                    this.loadProjects();
                };
                // the reason for providing this initialization function is because the moment that we need to set the internal route's data
                // is NOT necessarily AFTER running the current component's ngOnInit
                // alternatively we could put this initialization stuff in the constructor or as a value for the class property but it
                // doesn't make sense because the initialization code could be complicated
                // which is not suitable to be places in the constructor or as a value for the class property
                ProjectsComponent.prototype.initializationCore = function () {
                    this.projects$ = this.projectsFacadeService.projects$;
                    this.selectedProjectsIds$ = this.projectsFacadeService.selectedProjectsIds$;
                    this.currentProject$ = this.projectsFacadeService.currentProject$;
                };
                ProjectsComponent.prototype.loadProjects = function () {
                    this.projectsFacadeService.loadProjects();
                };
                ProjectsComponent.prototype.selectProjectsIds = function (projectIds) {
                    this.projectsFacadeService.selectProjectsIds(projectIds);
                };
                ProjectsComponent.prototype.loadProject = function (projectId) {
                    this.projectsFacadeService.loadProject(projectId);
                };
                ProjectsComponent.prototype.updateProject = function (projectMeta) {
                    this.projectsFacadeService.updateProject(projectMeta.project, projectMeta.callbacks);
                };
                ProjectsComponent.prototype.createProject = function (projectMeta) {
                    this.projectsFacadeService.createProject(projectMeta.project, projectMeta.callbacks);
                };
                ProjectsComponent.prototype.deleteProject = function (projectMeta) {
                    this.projectsFacadeService.deleteProject(projectMeta.project, projectMeta.callbacks);
                };
                ProjectsComponent.prototype.projectDetailPageDone = function () {
                    this.router.navigate(['./projects']);
                    this.projectsFacadeService.resetCurrentProject();
                };
                ProjectsComponent.prototype.projectListComponentManager = function (projectsListComponent) {
                    projectsListComponent.projects$ = this.projects$;
                };
                ProjectsComponent.prototype.projectDetailComponentManager = function (projectDetailComponent) {
                    var _this = this;
                    projectDetailComponent.project$ = this.currentProject$;
                    projectDetailComponent.projectId.subscribe(function (projectId) {
                        _this.selectProjectsIds([projectId]);
                        _this.loadProject(projectId);
                    });
                    projectDetailComponent.projectUpdated.subscribe(function (projectMeta) { return _this.updateProject(projectMeta); });
                    projectDetailComponent.projectDeleted.subscribe(function (projectMeta) { return _this.deleteProject(projectMeta); });
                    projectDetailComponent.done.subscribe(function () { return _this.projectDetailPageDone(); });
                };
                ProjectsComponent.prototype.projectCreatorComponentManager = function (projectCreatorComponent) {
                    var _this = this;
                    projectCreatorComponent.projectCreated.subscribe(function (projectMeta) { return _this.createProject(projectMeta); });
                };
                // TODO: another way of handling the communication between the route components is using a singleton service and
                //  if it's necessary to make sure that data is available before loading the route, you can use the resolve
                //  in the routing-module.ts
                ProjectsComponent.prototype.onActivated = function (componentReference) {
                    this.initializationCore();
                    if (componentReference instanceof _projects_list_projects_list_component__WEBPACK_IMPORTED_MODULE_2__["ProjectsListComponent"]) {
                        this.projectListComponentManager(componentReference);
                    }
                    else if (componentReference instanceof _project_detail_project_detail_component__WEBPACK_IMPORTED_MODULE_4__["ProjectDetailComponent"]) {
                        this.projectDetailComponentManager(componentReference);
                    }
                    else if (componentReference instanceof _project_creator_project_creator_component__WEBPACK_IMPORTED_MODULE_5__["ProjectCreatorComponent"]) {
                        this.projectCreatorComponentManager(componentReference);
                    }
                };
                return ProjectsComponent;
            }());
            ProjectsComponent.ctorParameters = function () { return [
                { type: _store_projects_store_services_projects_facade_service__WEBPACK_IMPORTED_MODULE_3__["ProjectsFacadeService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
            ]; };
            ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-projects',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./projects.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/projects/projects.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./projects.component.scss */ "./src/app/pages/projects/projects.component.scss")).default]
                })
            ], ProjectsComponent);
            /***/ 
        }),
        /***/ "./src/app/pages/projects/projects.module.ts": 
        /*!***************************************************!*\
          !*** ./src/app/pages/projects/projects.module.ts ***!
          \***************************************************/
        /*! exports provided: ProjectsModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsModule", function () { return ProjectsModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _projects_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects.component */ "./src/app/pages/projects/projects.component.ts");
            /* harmony import */ var _projects_list_projects_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projects-list/projects-list.component */ "./src/app/pages/projects/projects-list/projects-list.component.ts");
            /* harmony import */ var _projects_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projects-routing.module */ "./src/app/pages/projects/projects-routing.module.ts");
            /* harmony import */ var _store_projects_store_projects_store_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/projects-store/projects-store.module */ "./src/app/store/projects-store/projects-store.module.ts");
            /* harmony import */ var _project_form_project_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./project-form/project-form.component */ "./src/app/pages/projects/project-form/project-form.component.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _projects_list_item_projects_list_item_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./projects-list-item/projects-list-item.component */ "./src/app/pages/projects/projects-list-item/projects-list-item.component.ts");
            /* harmony import */ var _project_detail_project_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./project-detail/project-detail.component */ "./src/app/pages/projects/project-detail/project-detail.component.ts");
            /* harmony import */ var _project_creator_project_creator_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./project-creator/project-creator.component */ "./src/app/pages/projects/project-creator/project-creator.component.ts");
            var ProjectsModule = /** @class */ (function () {
                function ProjectsModule() {
                }
                return ProjectsModule;
            }());
            ProjectsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_projects_component__WEBPACK_IMPORTED_MODULE_3__["ProjectsComponent"], _projects_list_projects_list_component__WEBPACK_IMPORTED_MODULE_4__["ProjectsListComponent"], _project_form_project_form_component__WEBPACK_IMPORTED_MODULE_7__["ProjectFormComponent"], _projects_list_item_projects_list_item_component__WEBPACK_IMPORTED_MODULE_9__["ProjectsListItemComponent"], _project_detail_project_detail_component__WEBPACK_IMPORTED_MODULE_10__["ProjectDetailComponent"], _project_creator_project_creator_component__WEBPACK_IMPORTED_MODULE_11__["ProjectCreatorComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _projects_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProjectsRoutingModule"],
                        _store_projects_store_projects_store_module__WEBPACK_IMPORTED_MODULE_6__["ProjectsStoreModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]
                    ]
                })
            ], ProjectsModule);
            /***/ 
        }),
        /***/ "./src/app/store/projects-store/actions/projects.actions.ts": 
        /*!******************************************************************!*\
          !*** ./src/app/store/projects-store/actions/projects.actions.ts ***!
          \******************************************************************/
        /*! exports provided: ProjectsActionTypes, LoadProjectsAction, LoadProjectsSuccessAction, LoadProjectAction, LoadProjectSuccessAction, UpdateProjectAction, UpdateProjectSuccessAction, CreateProjectAction, CreateProjectSuccessAction, DeleteProjectAction, DeleteProjectSuccessAction, TakeSnapshotAction, DestroySnapshotAction, RollbackRecentChangeAction, ResetCurrentProjectAction, SelectProjectsIdsAction */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsActionTypes", function () { return ProjectsActionTypes; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadProjectsAction", function () { return LoadProjectsAction; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadProjectsSuccessAction", function () { return LoadProjectsSuccessAction; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadProjectAction", function () { return LoadProjectAction; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadProjectSuccessAction", function () { return LoadProjectSuccessAction; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateProjectAction", function () { return UpdateProjectAction; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateProjectSuccessAction", function () { return UpdateProjectSuccessAction; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateProjectAction", function () { return CreateProjectAction; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateProjectSuccessAction", function () { return CreateProjectSuccessAction; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteProjectAction", function () { return DeleteProjectAction; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteProjectSuccessAction", function () { return DeleteProjectSuccessAction; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TakeSnapshotAction", function () { return TakeSnapshotAction; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DestroySnapshotAction", function () { return DestroySnapshotAction; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RollbackRecentChangeAction", function () { return RollbackRecentChangeAction; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetCurrentProjectAction", function () { return ResetCurrentProjectAction; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectProjectsIdsAction", function () { return SelectProjectsIdsAction; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var ProjectsActionTypes;
            (function (ProjectsActionTypes) {
                ProjectsActionTypes["LoadProjects"] = "[Projects] Load Projects";
                ProjectsActionTypes["LoadProjectsSuccess"] = "[Projects] Load Projects Success";
                ProjectsActionTypes["LoadProject"] = "[Projects] Load Project";
                ProjectsActionTypes["LoadProjectSuccess"] = "[Projects] Load Project Success";
                ProjectsActionTypes["UpdateProject"] = "[Projects] Update Project";
                ProjectsActionTypes["UpdateProjectSuccess"] = "[Projects] Update Project Success";
                ProjectsActionTypes["CreateProject"] = "[Projects] Create Project";
                ProjectsActionTypes["CreateProjectSuccess"] = "[Projects] Create Project Success";
                ProjectsActionTypes["DeleteProject"] = "[Projects] Delete Project";
                ProjectsActionTypes["DeleteProjectSuccess"] = "[Projects] Delete Project Success";
                ProjectsActionTypes["TakeSnapshot"] = "[Projects] Take Snapshot";
                ProjectsActionTypes["DestroySnapshot"] = "[Projects] Destroy Snapshot";
                ProjectsActionTypes["RollbackRecentChange"] = "[Projects] Rollback Recent Change";
                ProjectsActionTypes["ResetCurrentProject"] = "[Projects] Reset Current Project";
                ProjectsActionTypes["SelectProjectsIds"] = "[Projects] Select Projects Ids";
            })(ProjectsActionTypes || (ProjectsActionTypes = {}));
            var LoadProjectsAction = /** @class */ (function () {
                function LoadProjectsAction() {
                    this.type = ProjectsActionTypes.LoadProjects;
                }
                return LoadProjectsAction;
            }());
            var LoadProjectsSuccessAction = /** @class */ (function () {
                function LoadProjectsSuccessAction(payload) {
                    this.payload = payload;
                    this.type = ProjectsActionTypes.LoadProjectsSuccess;
                }
                return LoadProjectsSuccessAction;
            }());
            var LoadProjectAction = /** @class */ (function () {
                function LoadProjectAction(payload) {
                    this.payload = payload;
                    this.type = ProjectsActionTypes.LoadProject;
                }
                return LoadProjectAction;
            }());
            var LoadProjectSuccessAction = /** @class */ (function () {
                function LoadProjectSuccessAction(payload) {
                    this.payload = payload;
                    this.type = ProjectsActionTypes.LoadProjectSuccess;
                }
                return LoadProjectSuccessAction;
            }());
            var UpdateProjectAction = /** @class */ (function () {
                function UpdateProjectAction(payload) {
                    this.payload = payload;
                    this.type = ProjectsActionTypes.UpdateProject;
                }
                return UpdateProjectAction;
            }());
            var UpdateProjectSuccessAction = /** @class */ (function () {
                function UpdateProjectSuccessAction(payload) {
                    this.payload = payload;
                    this.type = ProjectsActionTypes.UpdateProjectSuccess;
                }
                return UpdateProjectSuccessAction;
            }());
            var CreateProjectAction = /** @class */ (function () {
                function CreateProjectAction(payload) {
                    this.payload = payload;
                    this.type = ProjectsActionTypes.CreateProject;
                }
                return CreateProjectAction;
            }());
            var CreateProjectSuccessAction = /** @class */ (function () {
                function CreateProjectSuccessAction(payload) {
                    this.payload = payload;
                    this.type = ProjectsActionTypes.CreateProjectSuccess;
                }
                return CreateProjectSuccessAction;
            }());
            var DeleteProjectAction = /** @class */ (function () {
                function DeleteProjectAction(payload) {
                    this.payload = payload;
                    this.type = ProjectsActionTypes.DeleteProject;
                }
                return DeleteProjectAction;
            }());
            var DeleteProjectSuccessAction = /** @class */ (function () {
                function DeleteProjectSuccessAction(payload) {
                    this.payload = payload;
                    this.type = ProjectsActionTypes.DeleteProjectSuccess;
                }
                return DeleteProjectSuccessAction;
            }());
            var TakeSnapshotAction = /** @class */ (function () {
                function TakeSnapshotAction() {
                    this.type = ProjectsActionTypes.TakeSnapshot;
                }
                return TakeSnapshotAction;
            }());
            var DestroySnapshotAction = /** @class */ (function () {
                function DestroySnapshotAction() {
                    this.type = ProjectsActionTypes.DestroySnapshot;
                }
                return DestroySnapshotAction;
            }());
            var RollbackRecentChangeAction = /** @class */ (function () {
                function RollbackRecentChangeAction() {
                    this.type = ProjectsActionTypes.RollbackRecentChange;
                }
                return RollbackRecentChangeAction;
            }());
            var ResetCurrentProjectAction = /** @class */ (function () {
                function ResetCurrentProjectAction() {
                    this.type = ProjectsActionTypes.ResetCurrentProject;
                }
                return ResetCurrentProjectAction;
            }());
            var SelectProjectsIdsAction = /** @class */ (function () {
                function SelectProjectsIdsAction(payload) {
                    this.payload = payload;
                    this.type = ProjectsActionTypes.SelectProjectsIds;
                }
                return SelectProjectsIdsAction;
            }());
            /***/ 
        }),
        /***/ "./src/app/store/projects-store/effects/projects.effects.ts": 
        /*!******************************************************************!*\
          !*** ./src/app/store/projects-store/effects/projects.effects.ts ***!
          \******************************************************************/
        /*! exports provided: ProjectsEffects */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsEffects", function () { return ProjectsEffects; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
            /* harmony import */ var _actions_projects_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/projects.actions */ "./src/app/store/projects-store/actions/projects.actions.ts");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _services_projects_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/projects.service */ "./src/app/store/projects-store/services/projects.service.ts");
            /* harmony import */ var _services_projects_facade_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/projects-facade.service */ "./src/app/store/projects-store/services/projects-facade.service.ts");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            // TODO: Also check https://github.com/johnpapa/ngrx-demo
            var ProjectsEffects = /** @class */ (function () {
                function ProjectsEffects(actions$, projectsService, projectsFacadeService) {
                    var _this = this;
                    this.actions$ = actions$;
                    this.projectsService = projectsService;
                    this.projectsFacadeService = projectsFacadeService;
                    this.loadProjectsAction$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_projects_actions__WEBPACK_IMPORTED_MODULE_3__["ProjectsActionTypes"].LoadProjects), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (action) { return _this.projectsService.loadProjects()
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (projects) { return new _actions_projects_actions__WEBPACK_IMPORTED_MODULE_3__["LoadProjectsSuccessAction"](projects); })); }));
                    this.loadProjectAction$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_projects_actions__WEBPACK_IMPORTED_MODULE_3__["ProjectsActionTypes"].LoadProject), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (action) { return _this.projectsService.loadProject(action.payload)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (project) { return new _actions_projects_actions__WEBPACK_IMPORTED_MODULE_3__["LoadProjectSuccessAction"](project); })); }));
                    this.updateProjectAction$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_projects_actions__WEBPACK_IMPORTED_MODULE_3__["ProjectsActionTypes"].UpdateProject), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (action) { return _this.projectsService.updateProject(action.payload)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (project) {
                        _this.projectsFacadeService.callbacks.success();
                        return new _actions_projects_actions__WEBPACK_IMPORTED_MODULE_3__["UpdateProjectSuccessAction"](project);
                    })); }));
                    // TODO: the commented section is transformed to the following Effect to implement the Eagerly updating and
                    //  Rolling back in case something is not right in the server communication process
                    // @Effect()
                    // createProjectAction$ = this.actions$.pipe(
                    //   ofType(ProjectsActionTypes.CreateProject),
                    //   switchMap((action: CreateProjectAction) => this.projectsService.createProject(action.payload)
                    //     .pipe(
                    //       map((project: Project) => {
                    //         this.projectsFacadeService.callbacks.success();
                    //         return new CreateProjectSuccessAction(project);
                    //       })
                    //   ))
                    // );
                    this.createProjectAction$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_projects_actions__WEBPACK_IMPORTED_MODULE_3__["ProjectsActionTypes"].CreateProject), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (action) {
                        _this.projectsFacadeService.callbacks.success();
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["concat"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(new _actions_projects_actions__WEBPACK_IMPORTED_MODULE_3__["TakeSnapshotAction"]()), Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(new _actions_projects_actions__WEBPACK_IMPORTED_MODULE_3__["CreateProjectSuccessAction"](action.payload)), _this.projectsService.createProject(action.payload)
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () { return rxjs__WEBPACK_IMPORTED_MODULE_7__["EMPTY"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(3), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
                            _this.projectsFacadeService.callbacks.error();
                            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(new _actions_projects_actions__WEBPACK_IMPORTED_MODULE_3__["RollbackRecentChangeAction"]());
                        })), Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(new _actions_projects_actions__WEBPACK_IMPORTED_MODULE_3__["DestroySnapshotAction"]()));
                    }));
                    this.deleteProjectAction$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_projects_actions__WEBPACK_IMPORTED_MODULE_3__["ProjectsActionTypes"].DeleteProject), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (action) { return _this.projectsService.deleteProject(action.payload)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function () {
                        _this.projectsFacadeService.callbacks.success();
                        return new _actions_projects_actions__WEBPACK_IMPORTED_MODULE_3__["DeleteProjectSuccessAction"](action.payload);
                    })); }));
                }
                return ProjectsEffects;
            }());
            ProjectsEffects.ctorParameters = function () { return [
                { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
                { type: _services_projects_service__WEBPACK_IMPORTED_MODULE_5__["ProjectsService"] },
                { type: _services_projects_facade_service__WEBPACK_IMPORTED_MODULE_6__["ProjectsFacadeService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
            ], ProjectsEffects.prototype, "loadProjectsAction$", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
            ], ProjectsEffects.prototype, "loadProjectAction$", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
            ], ProjectsEffects.prototype, "updateProjectAction$", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
            ], ProjectsEffects.prototype, "createProjectAction$", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
            ], ProjectsEffects.prototype, "deleteProjectAction$", void 0);
            ProjectsEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], ProjectsEffects);
            /***/ 
        }),
        /***/ "./src/app/store/projects-store/models/project.ts": 
        /*!********************************************************!*\
          !*** ./src/app/store/projects-store/models/project.ts ***!
          \********************************************************/
        /*! exports provided: Project */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Project", function () { return Project; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var Project = /** @class */ (function () {
                function Project() {
                }
                return Project;
            }());
            /***/ 
        }),
        /***/ "./src/app/store/projects-store/projects-store.module.ts": 
        /*!***************************************************************!*\
          !*** ./src/app/store/projects-store/projects-store.module.ts ***!
          \***************************************************************/
        /*! exports provided: ProjectsStoreModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsStoreModule", function () { return ProjectsStoreModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
            /* harmony import */ var _reducers_projects_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reducers/projects.reducer */ "./src/app/store/projects-store/reducers/projects.reducer.ts");
            /* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
            /* harmony import */ var _effects_projects_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./effects/projects.effects */ "./src/app/store/projects-store/effects/projects.effects.ts");
            /* harmony import */ var _services_projects_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/projects.service */ "./src/app/store/projects-store/services/projects.service.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var ProjectsStoreModule = /** @class */ (function () {
                function ProjectsStoreModule() {
                }
                return ProjectsStoreModule;
            }());
            ProjectsStoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                        _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forFeature(_reducers_projects_reducer__WEBPACK_IMPORTED_MODULE_4__["projectsFeatureKey"], _reducers_projects_reducer__WEBPACK_IMPORTED_MODULE_4__["reducer"]),
                        _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["EffectsModule"].forFeature([_effects_projects_effects__WEBPACK_IMPORTED_MODULE_6__["ProjectsEffects"]])
                    ],
                    providers: [
                        _services_projects_service__WEBPACK_IMPORTED_MODULE_7__["ProjectsService"]
                    ]
                })
            ], ProjectsStoreModule);
            /***/ 
        }),
        /***/ "./src/app/store/projects-store/reducers/projects.reducer.ts": 
        /*!*******************************************************************!*\
          !*** ./src/app/store/projects-store/reducers/projects.reducer.ts ***!
          \*******************************************************************/
        /*! exports provided: projectsFeatureKey, initialStateCore, initialState, reducer */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projectsFeatureKey", function () { return projectsFeatureKey; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialStateCore", function () { return initialStateCore; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function () { return initialState; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function () { return reducer; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _actions_projects_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/projects.actions */ "./src/app/store/projects-store/actions/projects.actions.ts");
            var projectsFeatureKey = 'projects';
            var initialStateCore = {
                projects: [],
                currentProject: null,
                selectedProjectsIds: null
            };
            var initialState = Object.assign({}, initialStateCore, { snapshot: initialStateCore });
            var updateProject = function (state, updatedProject) {
                return state.projects.map(function (project) { return project.id === updatedProject.id ? updatedProject : project; });
            };
            var updateCurrentProject = function (state, project) {
                return state.currentProject ?
                    state.currentProject.id === project.id ?
                        project :
                        state.currentProject :
                    state.currentProject;
            };
            var createProject = function (state, createdProject) {
                state.projects.push(createdProject);
                return state.projects;
            };
            var deleteProject = function (state, deletedProject) {
                return state.projects.filter(function (project) { return project.id !== deletedProject.id; });
            };
            var takeSnapshot = function (state) {
                return {
                    projects: JSON.parse(JSON.stringify(state.projects)),
                    currentProject: JSON.parse(JSON.stringify(state.currentProject)),
                    selectedProjectsIds: JSON.parse(JSON.stringify(state.selectedProjectsIds)),
                };
            };
            var destroySnapshot = function () {
                return initialStateCore;
            };
            function reducer(state, action) {
                if (state === void 0) { state = initialState; }
                switch (action.type) {
                    case _actions_projects_actions__WEBPACK_IMPORTED_MODULE_1__["ProjectsActionTypes"].LoadProjectsSuccess:
                        return Object.assign({}, state, { projects: action.payload });
                    case _actions_projects_actions__WEBPACK_IMPORTED_MODULE_1__["ProjectsActionTypes"].SelectProjectsIds:
                        return Object.assign({}, state, { selectedProjectsIds: action.payload });
                    case _actions_projects_actions__WEBPACK_IMPORTED_MODULE_1__["ProjectsActionTypes"].LoadProjectSuccess:
                        return Object.assign({}, state, { currentProject: action.payload });
                    case _actions_projects_actions__WEBPACK_IMPORTED_MODULE_1__["ProjectsActionTypes"].UpdateProjectSuccess:
                        return Object.assign({}, state, { projects: updateProject(state, action.payload), currentProject: updateCurrentProject(state, action.payload) });
                    case _actions_projects_actions__WEBPACK_IMPORTED_MODULE_1__["ProjectsActionTypes"].CreateProjectSuccess:
                        return Object.assign({}, state, { projects: createProject(state, action.payload), currentProject: updateCurrentProject(state, action.payload) });
                    case _actions_projects_actions__WEBPACK_IMPORTED_MODULE_1__["ProjectsActionTypes"].DeleteProjectSuccess:
                        return Object.assign({}, state, { projects: deleteProject(state, action.payload), currentProject: null });
                    case _actions_projects_actions__WEBPACK_IMPORTED_MODULE_1__["ProjectsActionTypes"].TakeSnapshot:
                        return Object.assign({}, state, { snapshot: takeSnapshot(state) });
                    case _actions_projects_actions__WEBPACK_IMPORTED_MODULE_1__["ProjectsActionTypes"].DestroySnapshot:
                        return Object.assign({}, state, { snapshot: destroySnapshot() });
                    case _actions_projects_actions__WEBPACK_IMPORTED_MODULE_1__["ProjectsActionTypes"].RollbackRecentChange:
                        return Object.assign({}, state, state.snapshot);
                    case _actions_projects_actions__WEBPACK_IMPORTED_MODULE_1__["ProjectsActionTypes"].ResetCurrentProject:
                        return Object.assign({}, state, { currentProject: null });
                    default:
                        return state;
                }
            }
            /***/ 
        }),
        /***/ "./src/app/store/projects-store/selectors/projects.selectors.ts": 
        /*!**********************************************************************!*\
          !*** ./src/app/store/projects-store/selectors/projects.selectors.ts ***!
          \**********************************************************************/
        /*! exports provided: selectSelectedProjectsIds, selectProjects, selectCurrentProject */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSelectedProjectsIds", function () { return selectSelectedProjectsIds; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectProjects", function () { return selectProjects; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCurrentProject", function () { return selectCurrentProject; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
            /* harmony import */ var _reducers_projects_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/projects.reducer */ "./src/app/store/projects-store/reducers/projects.reducer.ts");
            var projectsFeatureSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createFeatureSelector"])(_reducers_projects_reducer__WEBPACK_IMPORTED_MODULE_2__["projectsFeatureKey"]);
            var getSelectedProjectsIds = function (state) { return state.selectedProjectsIds; };
            var getProjects = function (state) { return state.projects; };
            var getCurrentProject = function (state) { return state.currentProject; };
            var selectSelectedProjectsIds = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(projectsFeatureSelector, getSelectedProjectsIds);
            var selectProjects = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(projectsFeatureSelector, getProjects);
            var selectCurrentProject = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(projectsFeatureSelector, getCurrentProject);
            /***/ 
        }),
        /***/ "./src/app/store/projects-store/services/projects-facade.service.ts": 
        /*!**************************************************************************!*\
          !*** ./src/app/store/projects-store/services/projects-facade.service.ts ***!
          \**************************************************************************/
        /*! exports provided: ProjectsFacadeService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsFacadeService", function () { return ProjectsFacadeService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
            /* harmony import */ var _selectors_projects_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../selectors/projects.selectors */ "./src/app/store/projects-store/selectors/projects.selectors.ts");
            /* harmony import */ var _actions_projects_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/projects.actions */ "./src/app/store/projects-store/actions/projects.actions.ts");
            // TODO: Also check https://github.com/johnpapa/ngrx-demo
            var ProjectsFacadeService = /** @class */ (function () {
                function ProjectsFacadeService(store) {
                    this.store = store;
                    this.projects$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_selectors_projects_selectors__WEBPACK_IMPORTED_MODULE_3__["selectProjects"]));
                    this.selectedProjectsIds$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_selectors_projects_selectors__WEBPACK_IMPORTED_MODULE_3__["selectSelectedProjectsIds"]));
                    this.currentProject$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_selectors_projects_selectors__WEBPACK_IMPORTED_MODULE_3__["selectCurrentProject"]));
                    this.projectDefaultCallbacks = {
                        success: function () { },
                        error: function () { }
                    };
                }
                ProjectsFacadeService.prototype.loadProjects = function () {
                    this.store.dispatch(new _actions_projects_actions__WEBPACK_IMPORTED_MODULE_4__["LoadProjectsAction"]());
                };
                ProjectsFacadeService.prototype.loadProject = function (projectId) {
                    this.store.dispatch(new _actions_projects_actions__WEBPACK_IMPORTED_MODULE_4__["LoadProjectAction"](projectId));
                };
                ProjectsFacadeService.prototype.registerCallbacks = function (callbacks) {
                    this.callbacks = Object.assign({}, this.projectDefaultCallbacks, callbacks);
                };
                ProjectsFacadeService.prototype.updateProject = function (project, callbacks) {
                    this.registerCallbacks(callbacks);
                    this.store.dispatch(new _actions_projects_actions__WEBPACK_IMPORTED_MODULE_4__["UpdateProjectAction"](project));
                };
                ProjectsFacadeService.prototype.createProject = function (project, callbacks) {
                    this.registerCallbacks(callbacks);
                    this.store.dispatch(new _actions_projects_actions__WEBPACK_IMPORTED_MODULE_4__["CreateProjectAction"](project));
                };
                ProjectsFacadeService.prototype.deleteProject = function (project, callbacks) {
                    this.registerCallbacks(callbacks);
                    this.store.dispatch(new _actions_projects_actions__WEBPACK_IMPORTED_MODULE_4__["DeleteProjectAction"](project));
                };
                ProjectsFacadeService.prototype.resetCurrentProject = function () {
                    this.store.dispatch(new _actions_projects_actions__WEBPACK_IMPORTED_MODULE_4__["ResetCurrentProjectAction"]());
                };
                ProjectsFacadeService.prototype.selectProjectsIds = function (projectIds) {
                    this.store.dispatch(new _actions_projects_actions__WEBPACK_IMPORTED_MODULE_4__["SelectProjectsIdsAction"](projectIds));
                };
                return ProjectsFacadeService;
            }());
            ProjectsFacadeService.ctorParameters = function () { return [
                { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
            ]; };
            ProjectsFacadeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], ProjectsFacadeService);
            /***/ 
        }),
        /***/ "./src/app/store/projects-store/services/projects.service.ts": 
        /*!*******************************************************************!*\
          !*** ./src/app/store/projects-store/services/projects.service.ts ***!
          \*******************************************************************/
        /*! exports provided: ProjectsService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsService", function () { return ProjectsService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
            /* harmony import */ var _reducers_projects_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/projects.reducer */ "./src/app/store/projects-store/reducers/projects.reducer.ts");
            var ProjectsService_1;
            var ProjectsService = ProjectsService_1 = /** @class */ (function () {
                function ProjectsService(http) {
                    this.http = http;
                }
                ProjectsService.getProjectsUrl = function () {
                    return _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/" + _reducers_projects_reducer__WEBPACK_IMPORTED_MODULE_4__["projectsFeatureKey"];
                };
                ProjectsService.getProjectUrl = function (projectId) {
                    return ProjectsService_1.getProjectsUrl() + "/" + projectId;
                };
                ProjectsService.prototype.loadProjects = function (params) {
                    return this.http.get(ProjectsService_1.getProjectsUrl(), params);
                };
                ProjectsService.prototype.loadProject = function (projectId) {
                    return this.http.get(ProjectsService_1.getProjectUrl(projectId));
                };
                ProjectsService.prototype.updateProject = function (project) {
                    return this.http.put(ProjectsService_1.getProjectUrl(project.id), project);
                };
                ProjectsService.prototype.createProject = function (project) {
                    return this.http.post(ProjectsService_1.getProjectsUrl(), project);
                };
                ProjectsService.prototype.deleteProject = function (project) {
                    return this.http.delete(ProjectsService_1.getProjectUrl(project.id));
                };
                return ProjectsService;
            }());
            ProjectsService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            ProjectsService = ProjectsService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], ProjectsService);
            /***/ 
        })
    }]);
//# sourceMappingURL=projects-projects-module-es2015.js.map
//# sourceMappingURL=projects-projects-module-es5.js.map
//# sourceMappingURL=projects-projects-module-es5.js.map