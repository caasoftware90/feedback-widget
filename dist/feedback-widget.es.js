import { defineComponent as cl, ref as Kr, onMounted as hl, createElementBlock as kt, openBlock as xt, createElementVNode as Qe, createCommentVNode as dl, withModifiers as fl, Fragment as Gr, toDisplayString as Un, renderList as eo, normalizeClass as pl, createApp as ml } from "vue";
/**
 * @license
 * Copyright 2017 Google LLC
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
 * @license
 * Copyright 2017 Google LLC
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
const Jo = function(n) {
  const t = [];
  let e = 0;
  for (let r = 0; r < n.length; r++) {
    let i = n.charCodeAt(r);
    i < 128 ? t[e++] = i : i < 2048 ? (t[e++] = i >> 6 | 192, t[e++] = i & 63 | 128) : (i & 64512) === 55296 && r + 1 < n.length && (n.charCodeAt(r + 1) & 64512) === 56320 ? (i = 65536 + ((i & 1023) << 10) + (n.charCodeAt(++r) & 1023), t[e++] = i >> 18 | 240, t[e++] = i >> 12 & 63 | 128, t[e++] = i >> 6 & 63 | 128, t[e++] = i & 63 | 128) : (t[e++] = i >> 12 | 224, t[e++] = i >> 6 & 63 | 128, t[e++] = i & 63 | 128);
  }
  return t;
}, gl = function(n) {
  const t = [];
  let e = 0, r = 0;
  for (; e < n.length; ) {
    const i = n[e++];
    if (i < 128)
      t[r++] = String.fromCharCode(i);
    else if (i > 191 && i < 224) {
      const o = n[e++];
      t[r++] = String.fromCharCode((i & 31) << 6 | o & 63);
    } else if (i > 239 && i < 365) {
      const o = n[e++], u = n[e++], c = n[e++], h = ((i & 7) << 18 | (o & 63) << 12 | (u & 63) << 6 | c & 63) - 65536;
      t[r++] = String.fromCharCode(55296 + (h >> 10)), t[r++] = String.fromCharCode(56320 + (h & 1023));
    } else {
      const o = n[e++], u = n[e++];
      t[r++] = String.fromCharCode((i & 15) << 12 | (o & 63) << 6 | u & 63);
    }
  }
  return t.join("");
}, Zo = {
  /**
   * Maps bytes to characters.
   */
  byteToCharMap_: null,
  /**
   * Maps characters to bytes.
   */
  charToByteMap_: null,
  /**
   * Maps bytes to websafe characters.
   * @private
   */
  byteToCharMapWebSafe_: null,
  /**
   * Maps websafe characters to bytes.
   * @private
   */
  charToByteMapWebSafe_: null,
  /**
   * Our default alphabet, shared between
   * ENCODED_VALS and ENCODED_VALS_WEBSAFE
   */
  ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
  /**
   * Our default alphabet. Value 64 (=) is special; it means "nothing."
   */
  get ENCODED_VALS() {
    return this.ENCODED_VALS_BASE + "+/=";
  },
  /**
   * Our websafe alphabet.
   */
  get ENCODED_VALS_WEBSAFE() {
    return this.ENCODED_VALS_BASE + "-_.";
  },
  /**
   * Whether this browser supports the atob and btoa functions. This extension
   * started at Mozilla but is now implemented by many browsers. We use the
   * ASSUME_* variables to avoid pulling in the full useragent detection library
   * but still allowing the standard per-browser compilations.
   *
   */
  HAS_NATIVE_SUPPORT: typeof atob == "function",
  /**
   * Base64-encode an array of bytes.
   *
   * @param input An array of bytes (numbers with
   *     value in [0, 255]) to encode.
   * @param webSafe Boolean indicating we should use the
   *     alternative alphabet.
   * @return The base64 encoded string.
   */
  encodeByteArray(n, t) {
    if (!Array.isArray(n))
      throw Error("encodeByteArray takes an array as a parameter");
    this.init_();
    const e = t ? this.byteToCharMapWebSafe_ : this.byteToCharMap_, r = [];
    for (let i = 0; i < n.length; i += 3) {
      const o = n[i], u = i + 1 < n.length, c = u ? n[i + 1] : 0, h = i + 2 < n.length, f = h ? n[i + 2] : 0, m = o >> 2, w = (o & 3) << 4 | c >> 4;
      let R = (c & 15) << 2 | f >> 6, V = f & 63;
      h || (V = 64, u || (R = 64)), r.push(e[m], e[w], e[R], e[V]);
    }
    return r.join("");
  },
  /**
   * Base64-encode a string.
   *
   * @param input A string to encode.
   * @param webSafe If true, we should use the
   *     alternative alphabet.
   * @return The base64 encoded string.
   */
  encodeString(n, t) {
    return this.HAS_NATIVE_SUPPORT && !t ? btoa(n) : this.encodeByteArray(Jo(n), t);
  },
  /**
   * Base64-decode a string.
   *
   * @param input to decode.
   * @param webSafe True if we should use the
   *     alternative alphabet.
   * @return string representing the decoded value.
   */
  decodeString(n, t) {
    return this.HAS_NATIVE_SUPPORT && !t ? atob(n) : gl(this.decodeStringToByteArray(n, t));
  },
  /**
   * Base64-decode a string.
   *
   * In base-64 decoding, groups of four characters are converted into three
   * bytes.  If the encoder did not apply padding, the input length may not
   * be a multiple of 4.
   *
   * In this case, the last group will have fewer than 4 characters, and
   * padding will be inferred.  If the group has one or two characters, it decodes
   * to one byte.  If the group has three characters, it decodes to two bytes.
   *
   * @param input Input to decode.
   * @param webSafe True if we should use the web-safe alphabet.
   * @return bytes representing the decoded value.
   */
  decodeStringToByteArray(n, t) {
    this.init_();
    const e = t ? this.charToByteMapWebSafe_ : this.charToByteMap_, r = [];
    for (let i = 0; i < n.length; ) {
      const o = e[n.charAt(i++)], c = i < n.length ? e[n.charAt(i)] : 0;
      ++i;
      const f = i < n.length ? e[n.charAt(i)] : 64;
      ++i;
      const w = i < n.length ? e[n.charAt(i)] : 64;
      if (++i, o == null || c == null || f == null || w == null)
        throw new _l();
      const R = o << 2 | c >> 4;
      if (r.push(R), f !== 64) {
        const V = c << 4 & 240 | f >> 2;
        if (r.push(V), w !== 64) {
          const D = f << 6 & 192 | w;
          r.push(D);
        }
      }
    }
    return r;
  },
  /**
   * Lazy static initialization function. Called before
   * accessing any of the static map variables.
   * @private
   */
  init_() {
    if (!this.byteToCharMap_) {
      this.byteToCharMap_ = {}, this.charToByteMap_ = {}, this.byteToCharMapWebSafe_ = {}, this.charToByteMapWebSafe_ = {};
      for (let n = 0; n < this.ENCODED_VALS.length; n++)
        this.byteToCharMap_[n] = this.ENCODED_VALS.charAt(n), this.charToByteMap_[this.byteToCharMap_[n]] = n, this.byteToCharMapWebSafe_[n] = this.ENCODED_VALS_WEBSAFE.charAt(n), this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]] = n, n >= this.ENCODED_VALS_BASE.length && (this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)] = n, this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)] = n);
    }
  }
};
class _l extends Error {
  constructor() {
    super(...arguments), this.name = "DecodeBase64StringError";
  }
}
const yl = function(n) {
  const t = Jo(n);
  return Zo.encodeByteArray(t, !0);
}, Yn = function(n) {
  return yl(n).replace(/\./g, "");
}, El = function(n) {
  try {
    return Zo.decodeString(n, !0);
  } catch (t) {
    console.error("base64Decode failed: ", t);
  }
  return null;
};
/**
 * @license
 * Copyright 2022 Google LLC
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
function vl() {
  if (typeof self < "u")
    return self;
  if (typeof window < "u")
    return window;
  if (typeof global < "u")
    return global;
  throw new Error("Unable to locate global object.");
}
/**
 * @license
 * Copyright 2022 Google LLC
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
const Tl = () => vl().__FIREBASE_DEFAULTS__, Il = () => {
  if (typeof process > "u" || typeof process.env > "u")
    return;
  const n = process.env.__FIREBASE_DEFAULTS__;
  if (n)
    return JSON.parse(n);
}, wl = () => {
  if (typeof document > "u")
    return;
  let n;
  try {
    n = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
  } catch {
    return;
  }
  const t = n && El(n[1]);
  return t && JSON.parse(t);
}, Is = () => {
  try {
    return Tl() || Il() || wl();
  } catch (n) {
    console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);
    return;
  }
}, Al = (n) => {
  var t, e;
  return (e = (t = Is()) === null || t === void 0 ? void 0 : t.emulatorHosts) === null || e === void 0 ? void 0 : e[n];
}, Rl = (n) => {
  const t = Al(n);
  if (!t)
    return;
  const e = t.lastIndexOf(":");
  if (e <= 0 || e + 1 === t.length)
    throw new Error(`Invalid host ${t} with no separate hostname and port!`);
  const r = parseInt(t.substring(e + 1), 10);
  return t[0] === "[" ? [t.substring(1, e - 1), r] : [t.substring(0, e), r];
}, ta = () => {
  var n;
  return (n = Is()) === null || n === void 0 ? void 0 : n.config;
};
/**
 * @license
 * Copyright 2017 Google LLC
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
class Pl {
  constructor() {
    this.reject = () => {
    }, this.resolve = () => {
    }, this.promise = new Promise((t, e) => {
      this.resolve = t, this.reject = e;
    });
  }
  /**
   * Our API internals are not promisified and cannot because our callback APIs have subtle expectations around
   * invoking promises inline, which Promises are forbidden to do. This method accepts an optional node-style callback
   * and returns a node-style callback which will resolve or reject the Deferred's promise.
   */
  wrapCallback(t) {
    return (e, r) => {
      e ? this.reject(e) : this.resolve(r), typeof t == "function" && (this.promise.catch(() => {
      }), t.length === 1 ? t(e) : t(e, r));
    };
  }
}
/**
 * @license
 * Copyright 2021 Google LLC
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
function Sl(n, t) {
  if (n.uid)
    throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');
  const e = {
    alg: "none",
    type: "JWT"
  }, r = t || "demo-project", i = n.iat || 0, o = n.sub || n.user_id;
  if (!o)
    throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");
  const u = Object.assign({
    // Set all required fields to decent defaults
    iss: `https://securetoken.google.com/${r}`,
    aud: r,
    iat: i,
    exp: i + 3600,
    auth_time: i,
    sub: o,
    user_id: o,
    firebase: {
      sign_in_provider: "custom",
      identities: {}
    }
  }, n);
  return [
    Yn(JSON.stringify(e)),
    Yn(JSON.stringify(u)),
    ""
  ].join(".");
}
/**
 * @license
 * Copyright 2017 Google LLC
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
function Vl() {
  return typeof navigator < "u" && typeof navigator.userAgent == "string" ? navigator.userAgent : "";
}
function Cl() {
  var n;
  const t = (n = Is()) === null || n === void 0 ? void 0 : n.forceEnvironment;
  if (t === "node")
    return !0;
  if (t === "browser")
    return !1;
  try {
    return Object.prototype.toString.call(global.process) === "[object process]";
  } catch {
    return !1;
  }
}
function bl() {
  return !Cl() && !!navigator.userAgent && navigator.userAgent.includes("Safari") && !navigator.userAgent.includes("Chrome");
}
function Dl() {
  try {
    return typeof indexedDB == "object";
  } catch {
    return !1;
  }
}
function Nl() {
  return new Promise((n, t) => {
    try {
      let e = !0;
      const r = "validate-browser-context-for-indexeddb-analytics-module", i = self.indexedDB.open(r);
      i.onsuccess = () => {
        i.result.close(), e || self.indexedDB.deleteDatabase(r), n(!0);
      }, i.onupgradeneeded = () => {
        e = !1;
      }, i.onerror = () => {
        var o;
        t(((o = i.error) === null || o === void 0 ? void 0 : o.message) || "");
      };
    } catch (e) {
      t(e);
    }
  });
}
/**
 * @license
 * Copyright 2017 Google LLC
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
const kl = "FirebaseError";
class Pe extends Error {
  constructor(t, e, r) {
    super(e), this.code = t, this.customData = r, this.name = kl, Object.setPrototypeOf(this, Pe.prototype), Error.captureStackTrace && Error.captureStackTrace(this, ea.prototype.create);
  }
}
class ea {
  constructor(t, e, r) {
    this.service = t, this.serviceName = e, this.errors = r;
  }
  create(t, ...e) {
    const r = e[0] || {}, i = `${this.service}/${t}`, o = this.errors[t], u = o ? xl(o, r) : "Error", c = `${this.serviceName}: ${u} (${i}).`;
    return new Pe(i, c, r);
  }
}
function xl(n, t) {
  return n.replace(Ol, (e, r) => {
    const i = t[r];
    return i != null ? String(i) : `<${r}?>`;
  });
}
const Ol = /\{\$([^}]+)}/g;
function es(n, t) {
  if (n === t)
    return !0;
  const e = Object.keys(n), r = Object.keys(t);
  for (const i of e) {
    if (!r.includes(i))
      return !1;
    const o = n[i], u = t[i];
    if (no(o) && no(u)) {
      if (!es(o, u))
        return !1;
    } else if (o !== u)
      return !1;
  }
  for (const i of r)
    if (!e.includes(i))
      return !1;
  return !0;
}
function no(n) {
  return n !== null && typeof n == "object";
}
/**
 * @license
 * Copyright 2021 Google LLC
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
function ye(n) {
  return n && n._delegate ? n._delegate : n;
}
class sn {
  /**
   *
   * @param name The public service name, e.g. app, auth, firestore, database
   * @param instanceFactory Service factory responsible for creating the public interface
   * @param type whether the service provided by the component is public or private
   */
  constructor(t, e, r) {
    this.name = t, this.instanceFactory = e, this.type = r, this.multipleInstances = !1, this.serviceProps = {}, this.instantiationMode = "LAZY", this.onInstanceCreated = null;
  }
  setInstantiationMode(t) {
    return this.instantiationMode = t, this;
  }
  setMultipleInstances(t) {
    return this.multipleInstances = t, this;
  }
  setServiceProps(t) {
    return this.serviceProps = t, this;
  }
  setInstanceCreatedCallback(t) {
    return this.onInstanceCreated = t, this;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
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
const ee = "[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
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
class Ml {
  constructor(t, e) {
    this.name = t, this.container = e, this.component = null, this.instances = /* @__PURE__ */ new Map(), this.instancesDeferred = /* @__PURE__ */ new Map(), this.instancesOptions = /* @__PURE__ */ new Map(), this.onInitCallbacks = /* @__PURE__ */ new Map();
  }
  /**
   * @param identifier A provider can provide multiple instances of a service
   * if this.component.multipleInstances is true.
   */
  get(t) {
    const e = this.normalizeInstanceIdentifier(t);
    if (!this.instancesDeferred.has(e)) {
      const r = new Pl();
      if (this.instancesDeferred.set(e, r), this.isInitialized(e) || this.shouldAutoInitialize())
        try {
          const i = this.getOrInitializeService({
            instanceIdentifier: e
          });
          i && r.resolve(i);
        } catch {
        }
    }
    return this.instancesDeferred.get(e).promise;
  }
  getImmediate(t) {
    var e;
    const r = this.normalizeInstanceIdentifier(t == null ? void 0 : t.identifier), i = (e = t == null ? void 0 : t.optional) !== null && e !== void 0 ? e : !1;
    if (this.isInitialized(r) || this.shouldAutoInitialize())
      try {
        return this.getOrInitializeService({
          instanceIdentifier: r
        });
      } catch (o) {
        if (i)
          return null;
        throw o;
      }
    else {
      if (i)
        return null;
      throw Error(`Service ${this.name} is not available`);
    }
  }
  getComponent() {
    return this.component;
  }
  setComponent(t) {
    if (t.name !== this.name)
      throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);
    if (this.component)
      throw Error(`Component for ${this.name} has already been provided`);
    if (this.component = t, !!this.shouldAutoInitialize()) {
      if (Fl(t))
        try {
          this.getOrInitializeService({ instanceIdentifier: ee });
        } catch {
        }
      for (const [e, r] of this.instancesDeferred.entries()) {
        const i = this.normalizeInstanceIdentifier(e);
        try {
          const o = this.getOrInitializeService({
            instanceIdentifier: i
          });
          r.resolve(o);
        } catch {
        }
      }
    }
  }
  clearInstance(t = ee) {
    this.instancesDeferred.delete(t), this.instancesOptions.delete(t), this.instances.delete(t);
  }
  // app.delete() will call this method on every provider to delete the services
  // TODO: should we mark the provider as deleted?
  async delete() {
    const t = Array.from(this.instances.values());
    await Promise.all([
      ...t.filter((e) => "INTERNAL" in e).map((e) => e.INTERNAL.delete()),
      ...t.filter((e) => "_delete" in e).map((e) => e._delete())
    ]);
  }
  isComponentSet() {
    return this.component != null;
  }
  isInitialized(t = ee) {
    return this.instances.has(t);
  }
  getOptions(t = ee) {
    return this.instancesOptions.get(t) || {};
  }
  initialize(t = {}) {
    const { options: e = {} } = t, r = this.normalizeInstanceIdentifier(t.instanceIdentifier);
    if (this.isInitialized(r))
      throw Error(`${this.name}(${r}) has already been initialized`);
    if (!this.isComponentSet())
      throw Error(`Component ${this.name} has not been registered yet`);
    const i = this.getOrInitializeService({
      instanceIdentifier: r,
      options: e
    });
    for (const [o, u] of this.instancesDeferred.entries()) {
      const c = this.normalizeInstanceIdentifier(o);
      r === c && u.resolve(i);
    }
    return i;
  }
  /**
   *
   * @param callback - a function that will be invoked  after the provider has been initialized by calling provider.initialize().
   * The function is invoked SYNCHRONOUSLY, so it should not execute any longrunning tasks in order to not block the program.
   *
   * @param identifier An optional instance identifier
   * @returns a function to unregister the callback
   */
  onInit(t, e) {
    var r;
    const i = this.normalizeInstanceIdentifier(e), o = (r = this.onInitCallbacks.get(i)) !== null && r !== void 0 ? r : /* @__PURE__ */ new Set();
    o.add(t), this.onInitCallbacks.set(i, o);
    const u = this.instances.get(i);
    return u && t(u, i), () => {
      o.delete(t);
    };
  }
  /**
   * Invoke onInit callbacks synchronously
   * @param instance the service instance`
   */
  invokeOnInitCallbacks(t, e) {
    const r = this.onInitCallbacks.get(e);
    if (r)
      for (const i of r)
        try {
          i(t, e);
        } catch {
        }
  }
  getOrInitializeService({ instanceIdentifier: t, options: e = {} }) {
    let r = this.instances.get(t);
    if (!r && this.component && (r = this.component.instanceFactory(this.container, {
      instanceIdentifier: Ll(t),
      options: e
    }), this.instances.set(t, r), this.instancesOptions.set(t, e), this.invokeOnInitCallbacks(r, t), this.component.onInstanceCreated))
      try {
        this.component.onInstanceCreated(this.container, t, r);
      } catch {
      }
    return r || null;
  }
  normalizeInstanceIdentifier(t = ee) {
    return this.component ? this.component.multipleInstances ? t : ee : t;
  }
  shouldAutoInitialize() {
    return !!this.component && this.component.instantiationMode !== "EXPLICIT";
  }
}
function Ll(n) {
  return n === ee ? void 0 : n;
}
function Fl(n) {
  return n.instantiationMode === "EAGER";
}
/**
 * @license
 * Copyright 2019 Google LLC
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
class Ul {
  constructor(t) {
    this.name = t, this.providers = /* @__PURE__ */ new Map();
  }
  /**
   *
   * @param component Component being added
   * @param overwrite When a component with the same name has already been registered,
   * if overwrite is true: overwrite the existing component with the new component and create a new
   * provider with the new component. It can be useful in tests where you want to use different mocks
   * for different tests.
   * if overwrite is false: throw an exception
   */
  addComponent(t) {
    const e = this.getProvider(t.name);
    if (e.isComponentSet())
      throw new Error(`Component ${t.name} has already been registered with ${this.name}`);
    e.setComponent(t);
  }
  addOrOverwriteComponent(t) {
    this.getProvider(t.name).isComponentSet() && this.providers.delete(t.name), this.addComponent(t);
  }
  /**
   * getProvider provides a type safe interface where it can only be called with a field name
   * present in NameServiceMapping interface.
   *
   * Firebase SDKs providing services should extend NameServiceMapping interface to register
   * themselves.
   */
  getProvider(t) {
    if (this.providers.has(t))
      return this.providers.get(t);
    const e = new Ml(t, this);
    return this.providers.set(t, e), e;
  }
  getProviders() {
    return Array.from(this.providers.values());
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
var q;
(function(n) {
  n[n.DEBUG = 0] = "DEBUG", n[n.VERBOSE = 1] = "VERBOSE", n[n.INFO = 2] = "INFO", n[n.WARN = 3] = "WARN", n[n.ERROR = 4] = "ERROR", n[n.SILENT = 5] = "SILENT";
})(q || (q = {}));
const Bl = {
  debug: q.DEBUG,
  verbose: q.VERBOSE,
  info: q.INFO,
  warn: q.WARN,
  error: q.ERROR,
  silent: q.SILENT
}, ql = q.INFO, jl = {
  [q.DEBUG]: "log",
  [q.VERBOSE]: "log",
  [q.INFO]: "info",
  [q.WARN]: "warn",
  [q.ERROR]: "error"
}, $l = (n, t, ...e) => {
  if (t < n.logLevel)
    return;
  const r = (/* @__PURE__ */ new Date()).toISOString(), i = jl[t];
  if (i)
    console[i](`[${r}]  ${n.name}:`, ...e);
  else
    throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);
};
class na {
  /**
   * Gives you an instance of a Logger to capture messages according to
   * Firebase's logging scheme.
   *
   * @param name The name that the logs will be associated with
   */
  constructor(t) {
    this.name = t, this._logLevel = ql, this._logHandler = $l, this._userLogHandler = null;
  }
  get logLevel() {
    return this._logLevel;
  }
  set logLevel(t) {
    if (!(t in q))
      throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);
    this._logLevel = t;
  }
  // Workaround for setter/getter having to be the same type.
  setLogLevel(t) {
    this._logLevel = typeof t == "string" ? Bl[t] : t;
  }
  get logHandler() {
    return this._logHandler;
  }
  set logHandler(t) {
    if (typeof t != "function")
      throw new TypeError("Value assigned to `logHandler` must be a function");
    this._logHandler = t;
  }
  get userLogHandler() {
    return this._userLogHandler;
  }
  set userLogHandler(t) {
    this._userLogHandler = t;
  }
  /**
   * The functions below are all based on the `console` interface
   */
  debug(...t) {
    this._userLogHandler && this._userLogHandler(this, q.DEBUG, ...t), this._logHandler(this, q.DEBUG, ...t);
  }
  log(...t) {
    this._userLogHandler && this._userLogHandler(this, q.VERBOSE, ...t), this._logHandler(this, q.VERBOSE, ...t);
  }
  info(...t) {
    this._userLogHandler && this._userLogHandler(this, q.INFO, ...t), this._logHandler(this, q.INFO, ...t);
  }
  warn(...t) {
    this._userLogHandler && this._userLogHandler(this, q.WARN, ...t), this._logHandler(this, q.WARN, ...t);
  }
  error(...t) {
    this._userLogHandler && this._userLogHandler(this, q.ERROR, ...t), this._logHandler(this, q.ERROR, ...t);
  }
}
const zl = (n, t) => t.some((e) => n instanceof e);
let ro, so;
function Kl() {
  return ro || (ro = [
    IDBDatabase,
    IDBObjectStore,
    IDBIndex,
    IDBCursor,
    IDBTransaction
  ]);
}
function Gl() {
  return so || (so = [
    IDBCursor.prototype.advance,
    IDBCursor.prototype.continue,
    IDBCursor.prototype.continuePrimaryKey
  ]);
}
const ra = /* @__PURE__ */ new WeakMap(), ns = /* @__PURE__ */ new WeakMap(), sa = /* @__PURE__ */ new WeakMap(), Wr = /* @__PURE__ */ new WeakMap(), ws = /* @__PURE__ */ new WeakMap();
function Wl(n) {
  const t = new Promise((e, r) => {
    const i = () => {
      n.removeEventListener("success", o), n.removeEventListener("error", u);
    }, o = () => {
      e(zt(n.result)), i();
    }, u = () => {
      r(n.error), i();
    };
    n.addEventListener("success", o), n.addEventListener("error", u);
  });
  return t.then((e) => {
    e instanceof IDBCursor && ra.set(e, n);
  }).catch(() => {
  }), ws.set(t, n), t;
}
function Hl(n) {
  if (ns.has(n))
    return;
  const t = new Promise((e, r) => {
    const i = () => {
      n.removeEventListener("complete", o), n.removeEventListener("error", u), n.removeEventListener("abort", u);
    }, o = () => {
      e(), i();
    }, u = () => {
      r(n.error || new DOMException("AbortError", "AbortError")), i();
    };
    n.addEventListener("complete", o), n.addEventListener("error", u), n.addEventListener("abort", u);
  });
  ns.set(n, t);
}
let rs = {
  get(n, t, e) {
    if (n instanceof IDBTransaction) {
      if (t === "done")
        return ns.get(n);
      if (t === "objectStoreNames")
        return n.objectStoreNames || sa.get(n);
      if (t === "store")
        return e.objectStoreNames[1] ? void 0 : e.objectStore(e.objectStoreNames[0]);
    }
    return zt(n[t]);
  },
  set(n, t, e) {
    return n[t] = e, !0;
  },
  has(n, t) {
    return n instanceof IDBTransaction && (t === "done" || t === "store") ? !0 : t in n;
  }
};
function Ql(n) {
  rs = n(rs);
}
function Yl(n) {
  return n === IDBDatabase.prototype.transaction && !("objectStoreNames" in IDBTransaction.prototype) ? function(t, ...e) {
    const r = n.call(Hr(this), t, ...e);
    return sa.set(r, t.sort ? t.sort() : [t]), zt(r);
  } : Gl().includes(n) ? function(...t) {
    return n.apply(Hr(this), t), zt(ra.get(this));
  } : function(...t) {
    return zt(n.apply(Hr(this), t));
  };
}
function Xl(n) {
  return typeof n == "function" ? Yl(n) : (n instanceof IDBTransaction && Hl(n), zl(n, Kl()) ? new Proxy(n, rs) : n);
}
function zt(n) {
  if (n instanceof IDBRequest)
    return Wl(n);
  if (Wr.has(n))
    return Wr.get(n);
  const t = Xl(n);
  return t !== n && (Wr.set(n, t), ws.set(t, n)), t;
}
const Hr = (n) => ws.get(n);
function Jl(n, t, { blocked: e, upgrade: r, blocking: i, terminated: o } = {}) {
  const u = indexedDB.open(n, t), c = zt(u);
  return r && u.addEventListener("upgradeneeded", (h) => {
    r(zt(u.result), h.oldVersion, h.newVersion, zt(u.transaction), h);
  }), e && u.addEventListener("blocked", (h) => e(
    // Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
    h.oldVersion,
    h.newVersion,
    h
  )), c.then((h) => {
    o && h.addEventListener("close", () => o()), i && h.addEventListener("versionchange", (f) => i(f.oldVersion, f.newVersion, f));
  }).catch(() => {
  }), c;
}
const Zl = ["get", "getKey", "getAll", "getAllKeys", "count"], tc = ["put", "add", "delete", "clear"], Qr = /* @__PURE__ */ new Map();
function io(n, t) {
  if (!(n instanceof IDBDatabase && !(t in n) && typeof t == "string"))
    return;
  if (Qr.get(t))
    return Qr.get(t);
  const e = t.replace(/FromIndex$/, ""), r = t !== e, i = tc.includes(e);
  if (
    // Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
    !(e in (r ? IDBIndex : IDBObjectStore).prototype) || !(i || Zl.includes(e))
  )
    return;
  const o = async function(u, ...c) {
    const h = this.transaction(u, i ? "readwrite" : "readonly");
    let f = h.store;
    return r && (f = f.index(c.shift())), (await Promise.all([
      f[e](...c),
      i && h.done
    ]))[0];
  };
  return Qr.set(t, o), o;
}
Ql((n) => ({
  ...n,
  get: (t, e, r) => io(t, e) || n.get(t, e, r),
  has: (t, e) => !!io(t, e) || n.has(t, e)
}));
/**
 * @license
 * Copyright 2019 Google LLC
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
class ec {
  constructor(t) {
    this.container = t;
  }
  // In initial implementation, this will be called by installations on
  // auth token refresh, and installations will send this string.
  getPlatformInfoString() {
    return this.container.getProviders().map((e) => {
      if (nc(e)) {
        const r = e.getImmediate();
        return `${r.library}/${r.version}`;
      } else
        return null;
    }).filter((e) => e).join(" ");
  }
}
function nc(n) {
  const t = n.getComponent();
  return (t == null ? void 0 : t.type) === "VERSION";
}
const ss = "@firebase/app", oo = "0.10.13";
/**
 * @license
 * Copyright 2019 Google LLC
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
const Mt = new na("@firebase/app"), rc = "@firebase/app-compat", sc = "@firebase/analytics-compat", ic = "@firebase/analytics", oc = "@firebase/app-check-compat", ac = "@firebase/app-check", uc = "@firebase/auth", lc = "@firebase/auth-compat", cc = "@firebase/database", hc = "@firebase/data-connect", dc = "@firebase/database-compat", fc = "@firebase/functions", pc = "@firebase/functions-compat", mc = "@firebase/installations", gc = "@firebase/installations-compat", _c = "@firebase/messaging", yc = "@firebase/messaging-compat", Ec = "@firebase/performance", vc = "@firebase/performance-compat", Tc = "@firebase/remote-config", Ic = "@firebase/remote-config-compat", wc = "@firebase/storage", Ac = "@firebase/storage-compat", Rc = "@firebase/firestore", Pc = "@firebase/vertexai-preview", Sc = "@firebase/firestore-compat", Vc = "firebase", Cc = "10.14.1";
/**
 * @license
 * Copyright 2019 Google LLC
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
const is = "[DEFAULT]", bc = {
  [ss]: "fire-core",
  [rc]: "fire-core-compat",
  [ic]: "fire-analytics",
  [sc]: "fire-analytics-compat",
  [ac]: "fire-app-check",
  [oc]: "fire-app-check-compat",
  [uc]: "fire-auth",
  [lc]: "fire-auth-compat",
  [cc]: "fire-rtdb",
  [hc]: "fire-data-connect",
  [dc]: "fire-rtdb-compat",
  [fc]: "fire-fn",
  [pc]: "fire-fn-compat",
  [mc]: "fire-iid",
  [gc]: "fire-iid-compat",
  [_c]: "fire-fcm",
  [yc]: "fire-fcm-compat",
  [Ec]: "fire-perf",
  [vc]: "fire-perf-compat",
  [Tc]: "fire-rc",
  [Ic]: "fire-rc-compat",
  [wc]: "fire-gcs",
  [Ac]: "fire-gcs-compat",
  [Rc]: "fire-fst",
  [Sc]: "fire-fst-compat",
  [Pc]: "fire-vertex",
  "fire-js": "fire-js",
  [Vc]: "fire-js-all"
};
/**
 * @license
 * Copyright 2019 Google LLC
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
const Xn = /* @__PURE__ */ new Map(), Dc = /* @__PURE__ */ new Map(), os = /* @__PURE__ */ new Map();
function ao(n, t) {
  try {
    n.container.addComponent(t);
  } catch (e) {
    Mt.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`, e);
  }
}
function Jn(n) {
  const t = n.name;
  if (os.has(t))
    return Mt.debug(`There were multiple attempts to register component ${t}.`), !1;
  os.set(t, n);
  for (const e of Xn.values())
    ao(e, n);
  for (const e of Dc.values())
    ao(e, n);
  return !0;
}
function Nc(n, t) {
  const e = n.container.getProvider("heartbeat").getImmediate({ optional: !0 });
  return e && e.triggerHeartbeat(), n.container.getProvider(t);
}
/**
 * @license
 * Copyright 2019 Google LLC
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
const kc = {
  "no-app": "No Firebase App '{$appName}' has been created - call initializeApp() first",
  "bad-app-name": "Illegal App name: '{$appName}'",
  "duplicate-app": "Firebase App named '{$appName}' already exists with different options or config",
  "app-deleted": "Firebase App named '{$appName}' already deleted",
  "server-app-deleted": "Firebase Server App has been deleted",
  "no-options": "Need to provide options, when not being deployed to hosting via source.",
  "invalid-app-argument": "firebase.{$appName}() takes either no argument or a Firebase App instance.",
  "invalid-log-argument": "First argument to `onLog` must be null or a function.",
  "idb-open": "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
  "idb-get": "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
  "idb-set": "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
  "idb-delete": "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",
  "finalization-registry-not-supported": "FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",
  "invalid-server-app-environment": "FirebaseServerApp is not for use in browser environments."
}, Kt = new ea("app", "Firebase", kc);
/**
 * @license
 * Copyright 2019 Google LLC
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
class xc {
  constructor(t, e, r) {
    this._isDeleted = !1, this._options = Object.assign({}, t), this._config = Object.assign({}, e), this._name = e.name, this._automaticDataCollectionEnabled = e.automaticDataCollectionEnabled, this._container = r, this.container.addComponent(new sn(
      "app",
      () => this,
      "PUBLIC"
      /* ComponentType.PUBLIC */
    ));
  }
  get automaticDataCollectionEnabled() {
    return this.checkDestroyed(), this._automaticDataCollectionEnabled;
  }
  set automaticDataCollectionEnabled(t) {
    this.checkDestroyed(), this._automaticDataCollectionEnabled = t;
  }
  get name() {
    return this.checkDestroyed(), this._name;
  }
  get options() {
    return this.checkDestroyed(), this._options;
  }
  get config() {
    return this.checkDestroyed(), this._config;
  }
  get container() {
    return this._container;
  }
  get isDeleted() {
    return this._isDeleted;
  }
  set isDeleted(t) {
    this._isDeleted = t;
  }
  /**
   * This function will throw an Error if the App has already been deleted -
   * use before performing API actions on the App.
   */
  checkDestroyed() {
    if (this.isDeleted)
      throw Kt.create("app-deleted", { appName: this._name });
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
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
const Oc = Cc;
function ia(n, t = {}) {
  let e = n;
  typeof t != "object" && (t = { name: t });
  const r = Object.assign({ name: is, automaticDataCollectionEnabled: !1 }, t), i = r.name;
  if (typeof i != "string" || !i)
    throw Kt.create("bad-app-name", {
      appName: String(i)
    });
  if (e || (e = ta()), !e)
    throw Kt.create(
      "no-options"
      /* AppError.NO_OPTIONS */
    );
  const o = Xn.get(i);
  if (o) {
    if (es(e, o.options) && es(r, o.config))
      return o;
    throw Kt.create("duplicate-app", { appName: i });
  }
  const u = new Ul(i);
  for (const h of os.values())
    u.addComponent(h);
  const c = new xc(e, r, u);
  return Xn.set(i, c), c;
}
function Mc(n = is) {
  const t = Xn.get(n);
  if (!t && n === is && ta())
    return ia();
  if (!t)
    throw Kt.create("no-app", { appName: n });
  return t;
}
function ge(n, t, e) {
  var r;
  let i = (r = bc[n]) !== null && r !== void 0 ? r : n;
  e && (i += `-${e}`);
  const o = i.match(/\s|\//), u = t.match(/\s|\//);
  if (o || u) {
    const c = [
      `Unable to register library "${i}" with version "${t}":`
    ];
    o && c.push(`library name "${i}" contains illegal characters (whitespace or "/")`), o && u && c.push("and"), u && c.push(`version name "${t}" contains illegal characters (whitespace or "/")`), Mt.warn(c.join(" "));
    return;
  }
  Jn(new sn(
    `${i}-version`,
    () => ({ library: i, version: t }),
    "VERSION"
    /* ComponentType.VERSION */
  ));
}
/**
 * @license
 * Copyright 2021 Google LLC
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
const Lc = "firebase-heartbeat-database", Fc = 1, on = "firebase-heartbeat-store";
let Yr = null;
function oa() {
  return Yr || (Yr = Jl(Lc, Fc, {
    upgrade: (n, t) => {
      switch (t) {
        case 0:
          try {
            n.createObjectStore(on);
          } catch (e) {
            console.warn(e);
          }
      }
    }
  }).catch((n) => {
    throw Kt.create("idb-open", {
      originalErrorMessage: n.message
    });
  })), Yr;
}
async function Uc(n) {
  try {
    const e = (await oa()).transaction(on), r = await e.objectStore(on).get(aa(n));
    return await e.done, r;
  } catch (t) {
    if (t instanceof Pe)
      Mt.warn(t.message);
    else {
      const e = Kt.create("idb-get", {
        originalErrorMessage: t == null ? void 0 : t.message
      });
      Mt.warn(e.message);
    }
  }
}
async function uo(n, t) {
  try {
    const r = (await oa()).transaction(on, "readwrite");
    await r.objectStore(on).put(t, aa(n)), await r.done;
  } catch (e) {
    if (e instanceof Pe)
      Mt.warn(e.message);
    else {
      const r = Kt.create("idb-set", {
        originalErrorMessage: e == null ? void 0 : e.message
      });
      Mt.warn(r.message);
    }
  }
}
function aa(n) {
  return `${n.name}!${n.options.appId}`;
}
/**
 * @license
 * Copyright 2021 Google LLC
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
const Bc = 1024, qc = 30 * 24 * 60 * 60 * 1e3;
class jc {
  constructor(t) {
    this.container = t, this._heartbeatsCache = null;
    const e = this.container.getProvider("app").getImmediate();
    this._storage = new zc(e), this._heartbeatsCachePromise = this._storage.read().then((r) => (this._heartbeatsCache = r, r));
  }
  /**
   * Called to report a heartbeat. The function will generate
   * a HeartbeatsByUserAgent object, update heartbeatsCache, and persist it
   * to IndexedDB.
   * Note that we only store one heartbeat per day. So if a heartbeat for today is
   * already logged, subsequent calls to this function in the same day will be ignored.
   */
  async triggerHeartbeat() {
    var t, e;
    try {
      const i = this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(), o = lo();
      return ((t = this._heartbeatsCache) === null || t === void 0 ? void 0 : t.heartbeats) == null && (this._heartbeatsCache = await this._heartbeatsCachePromise, ((e = this._heartbeatsCache) === null || e === void 0 ? void 0 : e.heartbeats) == null) || this._heartbeatsCache.lastSentHeartbeatDate === o || this._heartbeatsCache.heartbeats.some((u) => u.date === o) ? void 0 : (this._heartbeatsCache.heartbeats.push({ date: o, agent: i }), this._heartbeatsCache.heartbeats = this._heartbeatsCache.heartbeats.filter((u) => {
        const c = new Date(u.date).valueOf();
        return Date.now() - c <= qc;
      }), this._storage.overwrite(this._heartbeatsCache));
    } catch (r) {
      Mt.warn(r);
    }
  }
  /**
   * Returns a base64 encoded string which can be attached to the heartbeat-specific header directly.
   * It also clears all heartbeats from memory as well as in IndexedDB.
   *
   * NOTE: Consuming product SDKs should not send the header if this method
   * returns an empty string.
   */
  async getHeartbeatsHeader() {
    var t;
    try {
      if (this._heartbeatsCache === null && await this._heartbeatsCachePromise, ((t = this._heartbeatsCache) === null || t === void 0 ? void 0 : t.heartbeats) == null || this._heartbeatsCache.heartbeats.length === 0)
        return "";
      const e = lo(), { heartbeatsToSend: r, unsentEntries: i } = $c(this._heartbeatsCache.heartbeats), o = Yn(JSON.stringify({ version: 2, heartbeats: r }));
      return this._heartbeatsCache.lastSentHeartbeatDate = e, i.length > 0 ? (this._heartbeatsCache.heartbeats = i, await this._storage.overwrite(this._heartbeatsCache)) : (this._heartbeatsCache.heartbeats = [], this._storage.overwrite(this._heartbeatsCache)), o;
    } catch (e) {
      return Mt.warn(e), "";
    }
  }
}
function lo() {
  return (/* @__PURE__ */ new Date()).toISOString().substring(0, 10);
}
function $c(n, t = Bc) {
  const e = [];
  let r = n.slice();
  for (const i of n) {
    const o = e.find((u) => u.agent === i.agent);
    if (o) {
      if (o.dates.push(i.date), co(e) > t) {
        o.dates.pop();
        break;
      }
    } else if (e.push({
      agent: i.agent,
      dates: [i.date]
    }), co(e) > t) {
      e.pop();
      break;
    }
    r = r.slice(1);
  }
  return {
    heartbeatsToSend: e,
    unsentEntries: r
  };
}
class zc {
  constructor(t) {
    this.app = t, this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck();
  }
  async runIndexedDBEnvironmentCheck() {
    return Dl() ? Nl().then(() => !0).catch(() => !1) : !1;
  }
  /**
   * Read all heartbeats.
   */
  async read() {
    if (await this._canUseIndexedDBPromise) {
      const e = await Uc(this.app);
      return e != null && e.heartbeats ? e : { heartbeats: [] };
    } else
      return { heartbeats: [] };
  }
  // overwrite the storage with the provided heartbeats
  async overwrite(t) {
    var e;
    if (await this._canUseIndexedDBPromise) {
      const i = await this.read();
      return uo(this.app, {
        lastSentHeartbeatDate: (e = t.lastSentHeartbeatDate) !== null && e !== void 0 ? e : i.lastSentHeartbeatDate,
        heartbeats: t.heartbeats
      });
    } else
      return;
  }
  // add heartbeats
  async add(t) {
    var e;
    if (await this._canUseIndexedDBPromise) {
      const i = await this.read();
      return uo(this.app, {
        lastSentHeartbeatDate: (e = t.lastSentHeartbeatDate) !== null && e !== void 0 ? e : i.lastSentHeartbeatDate,
        heartbeats: [
          ...i.heartbeats,
          ...t.heartbeats
        ]
      });
    } else
      return;
  }
}
function co(n) {
  return Yn(
    // heartbeatsCache wrapper properties
    JSON.stringify({ version: 2, heartbeats: n })
  ).length;
}
/**
 * @license
 * Copyright 2019 Google LLC
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
function Kc(n) {
  Jn(new sn(
    "platform-logger",
    (t) => new ec(t),
    "PRIVATE"
    /* ComponentType.PRIVATE */
  )), Jn(new sn(
    "heartbeat",
    (t) => new jc(t),
    "PRIVATE"
    /* ComponentType.PRIVATE */
  )), ge(ss, oo, n), ge(ss, oo, "esm2017"), ge("fire-js", "");
}
Kc("");
var Gc = "firebase", Wc = "10.14.1";
/**
 * @license
 * Copyright 2020 Google LLC
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
ge(Gc, Wc, "app");
var ho = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/
var re, ua;
(function() {
  var n;
  /** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */
  function t(v, p) {
    function _() {
    }
    _.prototype = p.prototype, v.D = p.prototype, v.prototype = new _(), v.prototype.constructor = v, v.C = function(y, E, I) {
      for (var g = Array(arguments.length - 2), bt = 2; bt < arguments.length; bt++) g[bt - 2] = arguments[bt];
      return p.prototype[E].apply(y, g);
    };
  }
  function e() {
    this.blockSize = -1;
  }
  function r() {
    this.blockSize = -1, this.blockSize = 64, this.g = Array(4), this.B = Array(this.blockSize), this.o = this.h = 0, this.s();
  }
  t(r, e), r.prototype.s = function() {
    this.g[0] = 1732584193, this.g[1] = 4023233417, this.g[2] = 2562383102, this.g[3] = 271733878, this.o = this.h = 0;
  };
  function i(v, p, _) {
    _ || (_ = 0);
    var y = Array(16);
    if (typeof p == "string") for (var E = 0; 16 > E; ++E) y[E] = p.charCodeAt(_++) | p.charCodeAt(_++) << 8 | p.charCodeAt(_++) << 16 | p.charCodeAt(_++) << 24;
    else for (E = 0; 16 > E; ++E) y[E] = p[_++] | p[_++] << 8 | p[_++] << 16 | p[_++] << 24;
    p = v.g[0], _ = v.g[1], E = v.g[2];
    var I = v.g[3], g = p + (I ^ _ & (E ^ I)) + y[0] + 3614090360 & 4294967295;
    p = _ + (g << 7 & 4294967295 | g >>> 25), g = I + (E ^ p & (_ ^ E)) + y[1] + 3905402710 & 4294967295, I = p + (g << 12 & 4294967295 | g >>> 20), g = E + (_ ^ I & (p ^ _)) + y[2] + 606105819 & 4294967295, E = I + (g << 17 & 4294967295 | g >>> 15), g = _ + (p ^ E & (I ^ p)) + y[3] + 3250441966 & 4294967295, _ = E + (g << 22 & 4294967295 | g >>> 10), g = p + (I ^ _ & (E ^ I)) + y[4] + 4118548399 & 4294967295, p = _ + (g << 7 & 4294967295 | g >>> 25), g = I + (E ^ p & (_ ^ E)) + y[5] + 1200080426 & 4294967295, I = p + (g << 12 & 4294967295 | g >>> 20), g = E + (_ ^ I & (p ^ _)) + y[6] + 2821735955 & 4294967295, E = I + (g << 17 & 4294967295 | g >>> 15), g = _ + (p ^ E & (I ^ p)) + y[7] + 4249261313 & 4294967295, _ = E + (g << 22 & 4294967295 | g >>> 10), g = p + (I ^ _ & (E ^ I)) + y[8] + 1770035416 & 4294967295, p = _ + (g << 7 & 4294967295 | g >>> 25), g = I + (E ^ p & (_ ^ E)) + y[9] + 2336552879 & 4294967295, I = p + (g << 12 & 4294967295 | g >>> 20), g = E + (_ ^ I & (p ^ _)) + y[10] + 4294925233 & 4294967295, E = I + (g << 17 & 4294967295 | g >>> 15), g = _ + (p ^ E & (I ^ p)) + y[11] + 2304563134 & 4294967295, _ = E + (g << 22 & 4294967295 | g >>> 10), g = p + (I ^ _ & (E ^ I)) + y[12] + 1804603682 & 4294967295, p = _ + (g << 7 & 4294967295 | g >>> 25), g = I + (E ^ p & (_ ^ E)) + y[13] + 4254626195 & 4294967295, I = p + (g << 12 & 4294967295 | g >>> 20), g = E + (_ ^ I & (p ^ _)) + y[14] + 2792965006 & 4294967295, E = I + (g << 17 & 4294967295 | g >>> 15), g = _ + (p ^ E & (I ^ p)) + y[15] + 1236535329 & 4294967295, _ = E + (g << 22 & 4294967295 | g >>> 10), g = p + (E ^ I & (_ ^ E)) + y[1] + 4129170786 & 4294967295, p = _ + (g << 5 & 4294967295 | g >>> 27), g = I + (_ ^ E & (p ^ _)) + y[6] + 3225465664 & 4294967295, I = p + (g << 9 & 4294967295 | g >>> 23), g = E + (p ^ _ & (I ^ p)) + y[11] + 643717713 & 4294967295, E = I + (g << 14 & 4294967295 | g >>> 18), g = _ + (I ^ p & (E ^ I)) + y[0] + 3921069994 & 4294967295, _ = E + (g << 20 & 4294967295 | g >>> 12), g = p + (E ^ I & (_ ^ E)) + y[5] + 3593408605 & 4294967295, p = _ + (g << 5 & 4294967295 | g >>> 27), g = I + (_ ^ E & (p ^ _)) + y[10] + 38016083 & 4294967295, I = p + (g << 9 & 4294967295 | g >>> 23), g = E + (p ^ _ & (I ^ p)) + y[15] + 3634488961 & 4294967295, E = I + (g << 14 & 4294967295 | g >>> 18), g = _ + (I ^ p & (E ^ I)) + y[4] + 3889429448 & 4294967295, _ = E + (g << 20 & 4294967295 | g >>> 12), g = p + (E ^ I & (_ ^ E)) + y[9] + 568446438 & 4294967295, p = _ + (g << 5 & 4294967295 | g >>> 27), g = I + (_ ^ E & (p ^ _)) + y[14] + 3275163606 & 4294967295, I = p + (g << 9 & 4294967295 | g >>> 23), g = E + (p ^ _ & (I ^ p)) + y[3] + 4107603335 & 4294967295, E = I + (g << 14 & 4294967295 | g >>> 18), g = _ + (I ^ p & (E ^ I)) + y[8] + 1163531501 & 4294967295, _ = E + (g << 20 & 4294967295 | g >>> 12), g = p + (E ^ I & (_ ^ E)) + y[13] + 2850285829 & 4294967295, p = _ + (g << 5 & 4294967295 | g >>> 27), g = I + (_ ^ E & (p ^ _)) + y[2] + 4243563512 & 4294967295, I = p + (g << 9 & 4294967295 | g >>> 23), g = E + (p ^ _ & (I ^ p)) + y[7] + 1735328473 & 4294967295, E = I + (g << 14 & 4294967295 | g >>> 18), g = _ + (I ^ p & (E ^ I)) + y[12] + 2368359562 & 4294967295, _ = E + (g << 20 & 4294967295 | g >>> 12), g = p + (_ ^ E ^ I) + y[5] + 4294588738 & 4294967295, p = _ + (g << 4 & 4294967295 | g >>> 28), g = I + (p ^ _ ^ E) + y[8] + 2272392833 & 4294967295, I = p + (g << 11 & 4294967295 | g >>> 21), g = E + (I ^ p ^ _) + y[11] + 1839030562 & 4294967295, E = I + (g << 16 & 4294967295 | g >>> 16), g = _ + (E ^ I ^ p) + y[14] + 4259657740 & 4294967295, _ = E + (g << 23 & 4294967295 | g >>> 9), g = p + (_ ^ E ^ I) + y[1] + 2763975236 & 4294967295, p = _ + (g << 4 & 4294967295 | g >>> 28), g = I + (p ^ _ ^ E) + y[4] + 1272893353 & 4294967295, I = p + (g << 11 & 4294967295 | g >>> 21), g = E + (I ^ p ^ _) + y[7] + 4139469664 & 4294967295, E = I + (g << 16 & 4294967295 | g >>> 16), g = _ + (E ^ I ^ p) + y[10] + 3200236656 & 4294967295, _ = E + (g << 23 & 4294967295 | g >>> 9), g = p + (_ ^ E ^ I) + y[13] + 681279174 & 4294967295, p = _ + (g << 4 & 4294967295 | g >>> 28), g = I + (p ^ _ ^ E) + y[0] + 3936430074 & 4294967295, I = p + (g << 11 & 4294967295 | g >>> 21), g = E + (I ^ p ^ _) + y[3] + 3572445317 & 4294967295, E = I + (g << 16 & 4294967295 | g >>> 16), g = _ + (E ^ I ^ p) + y[6] + 76029189 & 4294967295, _ = E + (g << 23 & 4294967295 | g >>> 9), g = p + (_ ^ E ^ I) + y[9] + 3654602809 & 4294967295, p = _ + (g << 4 & 4294967295 | g >>> 28), g = I + (p ^ _ ^ E) + y[12] + 3873151461 & 4294967295, I = p + (g << 11 & 4294967295 | g >>> 21), g = E + (I ^ p ^ _) + y[15] + 530742520 & 4294967295, E = I + (g << 16 & 4294967295 | g >>> 16), g = _ + (E ^ I ^ p) + y[2] + 3299628645 & 4294967295, _ = E + (g << 23 & 4294967295 | g >>> 9), g = p + (E ^ (_ | ~I)) + y[0] + 4096336452 & 4294967295, p = _ + (g << 6 & 4294967295 | g >>> 26), g = I + (_ ^ (p | ~E)) + y[7] + 1126891415 & 4294967295, I = p + (g << 10 & 4294967295 | g >>> 22), g = E + (p ^ (I | ~_)) + y[14] + 2878612391 & 4294967295, E = I + (g << 15 & 4294967295 | g >>> 17), g = _ + (I ^ (E | ~p)) + y[5] + 4237533241 & 4294967295, _ = E + (g << 21 & 4294967295 | g >>> 11), g = p + (E ^ (_ | ~I)) + y[12] + 1700485571 & 4294967295, p = _ + (g << 6 & 4294967295 | g >>> 26), g = I + (_ ^ (p | ~E)) + y[3] + 2399980690 & 4294967295, I = p + (g << 10 & 4294967295 | g >>> 22), g = E + (p ^ (I | ~_)) + y[10] + 4293915773 & 4294967295, E = I + (g << 15 & 4294967295 | g >>> 17), g = _ + (I ^ (E | ~p)) + y[1] + 2240044497 & 4294967295, _ = E + (g << 21 & 4294967295 | g >>> 11), g = p + (E ^ (_ | ~I)) + y[8] + 1873313359 & 4294967295, p = _ + (g << 6 & 4294967295 | g >>> 26), g = I + (_ ^ (p | ~E)) + y[15] + 4264355552 & 4294967295, I = p + (g << 10 & 4294967295 | g >>> 22), g = E + (p ^ (I | ~_)) + y[6] + 2734768916 & 4294967295, E = I + (g << 15 & 4294967295 | g >>> 17), g = _ + (I ^ (E | ~p)) + y[13] + 1309151649 & 4294967295, _ = E + (g << 21 & 4294967295 | g >>> 11), g = p + (E ^ (_ | ~I)) + y[4] + 4149444226 & 4294967295, p = _ + (g << 6 & 4294967295 | g >>> 26), g = I + (_ ^ (p | ~E)) + y[11] + 3174756917 & 4294967295, I = p + (g << 10 & 4294967295 | g >>> 22), g = E + (p ^ (I | ~_)) + y[2] + 718787259 & 4294967295, E = I + (g << 15 & 4294967295 | g >>> 17), g = _ + (I ^ (E | ~p)) + y[9] + 3951481745 & 4294967295, v.g[0] = v.g[0] + p & 4294967295, v.g[1] = v.g[1] + (E + (g << 21 & 4294967295 | g >>> 11)) & 4294967295, v.g[2] = v.g[2] + E & 4294967295, v.g[3] = v.g[3] + I & 4294967295;
  }
  r.prototype.u = function(v, p) {
    p === void 0 && (p = v.length);
    for (var _ = p - this.blockSize, y = this.B, E = this.h, I = 0; I < p; ) {
      if (E == 0) for (; I <= _; ) i(this, v, I), I += this.blockSize;
      if (typeof v == "string") {
        for (; I < p; )
          if (y[E++] = v.charCodeAt(I++), E == this.blockSize) {
            i(this, y), E = 0;
            break;
          }
      } else for (; I < p; ) if (y[E++] = v[I++], E == this.blockSize) {
        i(this, y), E = 0;
        break;
      }
    }
    this.h = E, this.o += p;
  }, r.prototype.v = function() {
    var v = Array((56 > this.h ? this.blockSize : 2 * this.blockSize) - this.h);
    v[0] = 128;
    for (var p = 1; p < v.length - 8; ++p) v[p] = 0;
    var _ = 8 * this.o;
    for (p = v.length - 8; p < v.length; ++p) v[p] = _ & 255, _ /= 256;
    for (this.u(v), v = Array(16), p = _ = 0; 4 > p; ++p) for (var y = 0; 32 > y; y += 8) v[_++] = this.g[p] >>> y & 255;
    return v;
  };
  function o(v, p) {
    var _ = c;
    return Object.prototype.hasOwnProperty.call(_, v) ? _[v] : _[v] = p(v);
  }
  function u(v, p) {
    this.h = p;
    for (var _ = [], y = !0, E = v.length - 1; 0 <= E; E--) {
      var I = v[E] | 0;
      y && I == p || (_[E] = I, y = !1);
    }
    this.g = _;
  }
  var c = {};
  function h(v) {
    return -128 <= v && 128 > v ? o(v, function(p) {
      return new u([p | 0], 0 > p ? -1 : 0);
    }) : new u([v | 0], 0 > v ? -1 : 0);
  }
  function f(v) {
    if (isNaN(v) || !isFinite(v)) return w;
    if (0 > v) return b(f(-v));
    for (var p = [], _ = 1, y = 0; v >= _; y++) p[y] = v / _ | 0, _ *= 4294967296;
    return new u(p, 0);
  }
  function m(v, p) {
    if (v.length == 0) throw Error("number format error: empty string");
    if (p = p || 10, 2 > p || 36 < p) throw Error("radix out of range: " + p);
    if (v.charAt(0) == "-") return b(m(v.substring(1), p));
    if (0 <= v.indexOf("-")) throw Error('number format error: interior "-" character');
    for (var _ = f(Math.pow(p, 8)), y = w, E = 0; E < v.length; E += 8) {
      var I = Math.min(8, v.length - E), g = parseInt(v.substring(E, E + I), p);
      8 > I ? (I = f(Math.pow(p, I)), y = y.j(I).add(f(g))) : (y = y.j(_), y = y.add(f(g)));
    }
    return y;
  }
  var w = h(0), R = h(1), V = h(16777216);
  n = u.prototype, n.m = function() {
    if (O(this)) return -b(this).m();
    for (var v = 0, p = 1, _ = 0; _ < this.g.length; _++) {
      var y = this.i(_);
      v += (0 <= y ? y : 4294967296 + y) * p, p *= 4294967296;
    }
    return v;
  }, n.toString = function(v) {
    if (v = v || 10, 2 > v || 36 < v) throw Error("radix out of range: " + v);
    if (D(this)) return "0";
    if (O(this)) return "-" + b(this).toString(v);
    for (var p = f(Math.pow(v, 6)), _ = this, y = ""; ; ) {
      var E = rt(_, p).g;
      _ = K(_, E.j(p));
      var I = ((0 < _.g.length ? _.g[0] : _.h) >>> 0).toString(v);
      if (_ = E, D(_)) return I + y;
      for (; 6 > I.length; ) I = "0" + I;
      y = I + y;
    }
  }, n.i = function(v) {
    return 0 > v ? 0 : v < this.g.length ? this.g[v] : this.h;
  };
  function D(v) {
    if (v.h != 0) return !1;
    for (var p = 0; p < v.g.length; p++) if (v.g[p] != 0) return !1;
    return !0;
  }
  function O(v) {
    return v.h == -1;
  }
  n.l = function(v) {
    return v = K(this, v), O(v) ? -1 : D(v) ? 0 : 1;
  };
  function b(v) {
    for (var p = v.g.length, _ = [], y = 0; y < p; y++) _[y] = ~v.g[y];
    return new u(_, ~v.h).add(R);
  }
  n.abs = function() {
    return O(this) ? b(this) : this;
  }, n.add = function(v) {
    for (var p = Math.max(this.g.length, v.g.length), _ = [], y = 0, E = 0; E <= p; E++) {
      var I = y + (this.i(E) & 65535) + (v.i(E) & 65535), g = (I >>> 16) + (this.i(E) >>> 16) + (v.i(E) >>> 16);
      y = g >>> 16, I &= 65535, g &= 65535, _[E] = g << 16 | I;
    }
    return new u(_, _[_.length - 1] & -2147483648 ? -1 : 0);
  };
  function K(v, p) {
    return v.add(b(p));
  }
  n.j = function(v) {
    if (D(this) || D(v)) return w;
    if (O(this)) return O(v) ? b(this).j(b(v)) : b(b(this).j(v));
    if (O(v)) return b(this.j(b(v)));
    if (0 > this.l(V) && 0 > v.l(V)) return f(this.m() * v.m());
    for (var p = this.g.length + v.g.length, _ = [], y = 0; y < 2 * p; y++) _[y] = 0;
    for (y = 0; y < this.g.length; y++) for (var E = 0; E < v.g.length; E++) {
      var I = this.i(y) >>> 16, g = this.i(y) & 65535, bt = v.i(E) >>> 16, Ne = v.i(E) & 65535;
      _[2 * y + 2 * E] += g * Ne, G(_, 2 * y + 2 * E), _[2 * y + 2 * E + 1] += I * Ne, G(_, 2 * y + 2 * E + 1), _[2 * y + 2 * E + 1] += g * bt, G(_, 2 * y + 2 * E + 1), _[2 * y + 2 * E + 2] += I * bt, G(_, 2 * y + 2 * E + 2);
    }
    for (y = 0; y < p; y++) _[y] = _[2 * y + 1] << 16 | _[2 * y];
    for (y = p; y < 2 * p; y++) _[y] = 0;
    return new u(_, 0);
  };
  function G(v, p) {
    for (; (v[p] & 65535) != v[p]; ) v[p + 1] += v[p] >>> 16, v[p] &= 65535, p++;
  }
  function H(v, p) {
    this.g = v, this.h = p;
  }
  function rt(v, p) {
    if (D(p)) throw Error("division by zero");
    if (D(v)) return new H(w, w);
    if (O(v)) return p = rt(b(v), p), new H(b(p.g), b(p.h));
    if (O(p)) return p = rt(v, b(p)), new H(b(p.g), p.h);
    if (30 < v.g.length) {
      if (O(v) || O(p)) throw Error("slowDivide_ only works with positive integers.");
      for (var _ = R, y = p; 0 >= y.l(v); ) _ = Ct(_), y = Ct(y);
      var E = it(_, 1), I = it(y, 1);
      for (y = it(y, 2), _ = it(_, 2); !D(y); ) {
        var g = I.add(y);
        0 >= g.l(v) && (E = E.add(_), I = g), y = it(y, 1), _ = it(_, 1);
      }
      return p = K(v, E.j(p)), new H(E, p);
    }
    for (E = w; 0 <= v.l(p); ) {
      for (_ = Math.max(1, Math.floor(v.m() / p.m())), y = Math.ceil(Math.log(_) / Math.LN2), y = 48 >= y ? 1 : Math.pow(2, y - 48), I = f(_), g = I.j(p); O(g) || 0 < g.l(v); ) _ -= y, I = f(_), g = I.j(p);
      D(I) && (I = R), E = E.add(I), v = K(v, g);
    }
    return new H(E, v);
  }
  n.A = function(v) {
    return rt(this, v).h;
  }, n.and = function(v) {
    for (var p = Math.max(this.g.length, v.g.length), _ = [], y = 0; y < p; y++) _[y] = this.i(y) & v.i(y);
    return new u(_, this.h & v.h);
  }, n.or = function(v) {
    for (var p = Math.max(this.g.length, v.g.length), _ = [], y = 0; y < p; y++) _[y] = this.i(y) | v.i(y);
    return new u(_, this.h | v.h);
  }, n.xor = function(v) {
    for (var p = Math.max(this.g.length, v.g.length), _ = [], y = 0; y < p; y++) _[y] = this.i(y) ^ v.i(y);
    return new u(_, this.h ^ v.h);
  };
  function Ct(v) {
    for (var p = v.g.length + 1, _ = [], y = 0; y < p; y++) _[y] = v.i(y) << 1 | v.i(y - 1) >>> 31;
    return new u(_, v.h);
  }
  function it(v, p) {
    var _ = p >> 5;
    p %= 32;
    for (var y = v.g.length - _, E = [], I = 0; I < y; I++) E[I] = 0 < p ? v.i(I + _) >>> p | v.i(I + _ + 1) << 32 - p : v.i(I + _);
    return new u(E, v.h);
  }
  r.prototype.digest = r.prototype.v, r.prototype.reset = r.prototype.s, r.prototype.update = r.prototype.u, ua = r, u.prototype.add = u.prototype.add, u.prototype.multiply = u.prototype.j, u.prototype.modulo = u.prototype.A, u.prototype.compare = u.prototype.l, u.prototype.toNumber = u.prototype.m, u.prototype.toString = u.prototype.toString, u.prototype.getBits = u.prototype.i, u.fromNumber = f, u.fromString = m, re = u;
}).apply(typeof ho < "u" ? ho : typeof self < "u" ? self : typeof window < "u" ? window : {});
var Bn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/
var la, Xe, ca, Kn, as, ha, da, fa;
(function() {
  var n, t = typeof Object.defineProperties == "function" ? Object.defineProperty : function(s, a, l) {
    return s == Array.prototype || s == Object.prototype || (s[a] = l.value), s;
  };
  function e(s) {
    s = [typeof globalThis == "object" && globalThis, s, typeof window == "object" && window, typeof self == "object" && self, typeof Bn == "object" && Bn];
    for (var a = 0; a < s.length; ++a) {
      var l = s[a];
      if (l && l.Math == Math) return l;
    }
    throw Error("Cannot find global object");
  }
  var r = e(this);
  function i(s, a) {
    if (a) t: {
      var l = r;
      s = s.split(".");
      for (var d = 0; d < s.length - 1; d++) {
        var T = s[d];
        if (!(T in l)) break t;
        l = l[T];
      }
      s = s[s.length - 1], d = l[s], a = a(d), a != d && a != null && t(l, s, { configurable: !0, writable: !0, value: a });
    }
  }
  function o(s, a) {
    s instanceof String && (s += "");
    var l = 0, d = !1, T = { next: function() {
      if (!d && l < s.length) {
        var A = l++;
        return { value: a(A, s[A]), done: !1 };
      }
      return d = !0, { done: !0, value: void 0 };
    } };
    return T[Symbol.iterator] = function() {
      return T;
    }, T;
  }
  i("Array.prototype.values", function(s) {
    return s || function() {
      return o(this, function(a, l) {
        return l;
      });
    };
  });
  /** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */
  var u = u || {}, c = this || self;
  function h(s) {
    var a = typeof s;
    return a = a != "object" ? a : s ? Array.isArray(s) ? "array" : a : "null", a == "array" || a == "object" && typeof s.length == "number";
  }
  function f(s) {
    var a = typeof s;
    return a == "object" && s != null || a == "function";
  }
  function m(s, a, l) {
    return s.call.apply(s.bind, arguments);
  }
  function w(s, a, l) {
    if (!s) throw Error();
    if (2 < arguments.length) {
      var d = Array.prototype.slice.call(arguments, 2);
      return function() {
        var T = Array.prototype.slice.call(arguments);
        return Array.prototype.unshift.apply(T, d), s.apply(a, T);
      };
    }
    return function() {
      return s.apply(a, arguments);
    };
  }
  function R(s, a, l) {
    return R = Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? m : w, R.apply(null, arguments);
  }
  function V(s, a) {
    var l = Array.prototype.slice.call(arguments, 1);
    return function() {
      var d = l.slice();
      return d.push.apply(d, arguments), s.apply(this, d);
    };
  }
  function D(s, a) {
    function l() {
    }
    l.prototype = a.prototype, s.aa = a.prototype, s.prototype = new l(), s.prototype.constructor = s, s.Qb = function(d, T, A) {
      for (var C = Array(arguments.length - 2), W = 2; W < arguments.length; W++) C[W - 2] = arguments[W];
      return a.prototype[T].apply(d, C);
    };
  }
  function O(s) {
    const a = s.length;
    if (0 < a) {
      const l = Array(a);
      for (let d = 0; d < a; d++) l[d] = s[d];
      return l;
    }
    return [];
  }
  function b(s, a) {
    for (let l = 1; l < arguments.length; l++) {
      const d = arguments[l];
      if (h(d)) {
        const T = s.length || 0, A = d.length || 0;
        s.length = T + A;
        for (let C = 0; C < A; C++) s[T + C] = d[C];
      } else s.push(d);
    }
  }
  class K {
    constructor(a, l) {
      this.i = a, this.j = l, this.h = 0, this.g = null;
    }
    get() {
      let a;
      return 0 < this.h ? (this.h--, a = this.g, this.g = a.next, a.next = null) : a = this.i(), a;
    }
  }
  function G(s) {
    return /^[\s\xa0]*$/.test(s);
  }
  function H() {
    var s = c.navigator;
    return s && (s = s.userAgent) ? s : "";
  }
  function rt(s) {
    return rt[" "](s), s;
  }
  rt[" "] = function() {
  };
  var Ct = H().indexOf("Gecko") != -1 && !(H().toLowerCase().indexOf("webkit") != -1 && H().indexOf("Edge") == -1) && !(H().indexOf("Trident") != -1 || H().indexOf("MSIE") != -1) && H().indexOf("Edge") == -1;
  function it(s, a, l) {
    for (const d in s) a.call(l, s[d], d, s);
  }
  function v(s, a) {
    for (const l in s) a.call(void 0, s[l], l, s);
  }
  function p(s) {
    const a = {};
    for (const l in s) a[l] = s[l];
    return a;
  }
  const _ = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
  function y(s, a) {
    let l, d;
    for (let T = 1; T < arguments.length; T++) {
      d = arguments[T];
      for (l in d) s[l] = d[l];
      for (let A = 0; A < _.length; A++) l = _[A], Object.prototype.hasOwnProperty.call(d, l) && (s[l] = d[l]);
    }
  }
  function E(s) {
    var a = 1;
    s = s.split(":");
    const l = [];
    for (; 0 < a && s.length; ) l.push(s.shift()), a--;
    return s.length && l.push(s.join(":")), l;
  }
  function I(s) {
    c.setTimeout(() => {
      throw s;
    }, 0);
  }
  function g() {
    var s = Tr;
    let a = null;
    return s.g && (a = s.g, s.g = s.g.next, s.g || (s.h = null), a.next = null), a;
  }
  class bt {
    constructor() {
      this.h = this.g = null;
    }
    add(a, l) {
      const d = Ne.get();
      d.set(a, l), this.h ? this.h.next = d : this.g = d, this.h = d;
    }
  }
  var Ne = new K(() => new Cu(), (s) => s.reset());
  class Cu {
    constructor() {
      this.next = this.g = this.h = null;
    }
    set(a, l) {
      this.h = a, this.g = l, this.next = null;
    }
    reset() {
      this.next = this.g = this.h = null;
    }
  }
  let ke, xe = !1, Tr = new bt(), ei = () => {
    const s = c.Promise.resolve(void 0);
    ke = () => {
      s.then(bu);
    };
  };
  var bu = () => {
    for (var s; s = g(); ) {
      try {
        s.h.call(s.g);
      } catch (l) {
        I(l);
      }
      var a = Ne;
      a.j(s), 100 > a.h && (a.h++, s.next = a.g, a.g = s);
    }
    xe = !1;
  };
  function Ut() {
    this.s = this.s, this.C = this.C;
  }
  Ut.prototype.s = !1, Ut.prototype.ma = function() {
    this.s || (this.s = !0, this.N());
  }, Ut.prototype.N = function() {
    if (this.C) for (; this.C.length; ) this.C.shift()();
  };
  function ht(s, a) {
    this.type = s, this.g = this.target = a, this.defaultPrevented = !1;
  }
  ht.prototype.h = function() {
    this.defaultPrevented = !0;
  };
  var Du = function() {
    if (!c.addEventListener || !Object.defineProperty) return !1;
    var s = !1, a = Object.defineProperty({}, "passive", { get: function() {
      s = !0;
    } });
    try {
      const l = () => {
      };
      c.addEventListener("test", l, a), c.removeEventListener("test", l, a);
    } catch {
    }
    return s;
  }();
  function Oe(s, a) {
    if (ht.call(this, s ? s.type : ""), this.relatedTarget = this.g = this.target = null, this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0, this.key = "", this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1, this.state = null, this.pointerId = 0, this.pointerType = "", this.i = null, s) {
      var l = this.type = s.type, d = s.changedTouches && s.changedTouches.length ? s.changedTouches[0] : null;
      if (this.target = s.target || s.srcElement, this.g = a, a = s.relatedTarget) {
        if (Ct) {
          t: {
            try {
              rt(a.nodeName);
              var T = !0;
              break t;
            } catch {
            }
            T = !1;
          }
          T || (a = null);
        }
      } else l == "mouseover" ? a = s.fromElement : l == "mouseout" && (a = s.toElement);
      this.relatedTarget = a, d ? (this.clientX = d.clientX !== void 0 ? d.clientX : d.pageX, this.clientY = d.clientY !== void 0 ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.clientX = s.clientX !== void 0 ? s.clientX : s.pageX, this.clientY = s.clientY !== void 0 ? s.clientY : s.pageY, this.screenX = s.screenX || 0, this.screenY = s.screenY || 0), this.button = s.button, this.key = s.key || "", this.ctrlKey = s.ctrlKey, this.altKey = s.altKey, this.shiftKey = s.shiftKey, this.metaKey = s.metaKey, this.pointerId = s.pointerId || 0, this.pointerType = typeof s.pointerType == "string" ? s.pointerType : Nu[s.pointerType] || "", this.state = s.state, this.i = s, s.defaultPrevented && Oe.aa.h.call(this);
    }
  }
  D(Oe, ht);
  var Nu = { 2: "touch", 3: "pen", 4: "mouse" };
  Oe.prototype.h = function() {
    Oe.aa.h.call(this);
    var s = this.i;
    s.preventDefault ? s.preventDefault() : s.returnValue = !1;
  };
  var vn = "closure_listenable_" + (1e6 * Math.random() | 0), ku = 0;
  function xu(s, a, l, d, T) {
    this.listener = s, this.proxy = null, this.src = a, this.type = l, this.capture = !!d, this.ha = T, this.key = ++ku, this.da = this.fa = !1;
  }
  function Tn(s) {
    s.da = !0, s.listener = null, s.proxy = null, s.src = null, s.ha = null;
  }
  function In(s) {
    this.src = s, this.g = {}, this.h = 0;
  }
  In.prototype.add = function(s, a, l, d, T) {
    var A = s.toString();
    s = this.g[A], s || (s = this.g[A] = [], this.h++);
    var C = wr(s, a, d, T);
    return -1 < C ? (a = s[C], l || (a.fa = !1)) : (a = new xu(a, this.src, A, !!d, T), a.fa = l, s.push(a)), a;
  };
  function Ir(s, a) {
    var l = a.type;
    if (l in s.g) {
      var d = s.g[l], T = Array.prototype.indexOf.call(d, a, void 0), A;
      (A = 0 <= T) && Array.prototype.splice.call(d, T, 1), A && (Tn(a), s.g[l].length == 0 && (delete s.g[l], s.h--));
    }
  }
  function wr(s, a, l, d) {
    for (var T = 0; T < s.length; ++T) {
      var A = s[T];
      if (!A.da && A.listener == a && A.capture == !!l && A.ha == d) return T;
    }
    return -1;
  }
  var Ar = "closure_lm_" + (1e6 * Math.random() | 0), Rr = {};
  function ni(s, a, l, d, T) {
    if (Array.isArray(a)) {
      for (var A = 0; A < a.length; A++) ni(s, a[A], l, d, T);
      return null;
    }
    return l = ii(l), s && s[vn] ? s.K(a, l, f(d) ? !!d.capture : !1, T) : Ou(s, a, l, !1, d, T);
  }
  function Ou(s, a, l, d, T, A) {
    if (!a) throw Error("Invalid event type");
    var C = f(T) ? !!T.capture : !!T, W = Sr(s);
    if (W || (s[Ar] = W = new In(s)), l = W.add(a, l, d, C, A), l.proxy) return l;
    if (d = Mu(), l.proxy = d, d.src = s, d.listener = l, s.addEventListener) Du || (T = C), T === void 0 && (T = !1), s.addEventListener(a.toString(), d, T);
    else if (s.attachEvent) s.attachEvent(si(a.toString()), d);
    else if (s.addListener && s.removeListener) s.addListener(d);
    else throw Error("addEventListener and attachEvent are unavailable.");
    return l;
  }
  function Mu() {
    function s(l) {
      return a.call(s.src, s.listener, l);
    }
    const a = Lu;
    return s;
  }
  function ri(s, a, l, d, T) {
    if (Array.isArray(a)) for (var A = 0; A < a.length; A++) ri(s, a[A], l, d, T);
    else d = f(d) ? !!d.capture : !!d, l = ii(l), s && s[vn] ? (s = s.i, a = String(a).toString(), a in s.g && (A = s.g[a], l = wr(A, l, d, T), -1 < l && (Tn(A[l]), Array.prototype.splice.call(A, l, 1), A.length == 0 && (delete s.g[a], s.h--)))) : s && (s = Sr(s)) && (a = s.g[a.toString()], s = -1, a && (s = wr(a, l, d, T)), (l = -1 < s ? a[s] : null) && Pr(l));
  }
  function Pr(s) {
    if (typeof s != "number" && s && !s.da) {
      var a = s.src;
      if (a && a[vn]) Ir(a.i, s);
      else {
        var l = s.type, d = s.proxy;
        a.removeEventListener ? a.removeEventListener(l, d, s.capture) : a.detachEvent ? a.detachEvent(si(l), d) : a.addListener && a.removeListener && a.removeListener(d), (l = Sr(a)) ? (Ir(l, s), l.h == 0 && (l.src = null, a[Ar] = null)) : Tn(s);
      }
    }
  }
  function si(s) {
    return s in Rr ? Rr[s] : Rr[s] = "on" + s;
  }
  function Lu(s, a) {
    if (s.da) s = !0;
    else {
      a = new Oe(a, this);
      var l = s.listener, d = s.ha || s.src;
      s.fa && Pr(s), s = l.call(d, a);
    }
    return s;
  }
  function Sr(s) {
    return s = s[Ar], s instanceof In ? s : null;
  }
  var Vr = "__closure_events_fn_" + (1e9 * Math.random() >>> 0);
  function ii(s) {
    return typeof s == "function" ? s : (s[Vr] || (s[Vr] = function(a) {
      return s.handleEvent(a);
    }), s[Vr]);
  }
  function dt() {
    Ut.call(this), this.i = new In(this), this.M = this, this.F = null;
  }
  D(dt, Ut), dt.prototype[vn] = !0, dt.prototype.removeEventListener = function(s, a, l, d) {
    ri(this, s, a, l, d);
  };
  function yt(s, a) {
    var l, d = s.F;
    if (d) for (l = []; d; d = d.F) l.push(d);
    if (s = s.M, d = a.type || a, typeof a == "string") a = new ht(a, s);
    else if (a instanceof ht) a.target = a.target || s;
    else {
      var T = a;
      a = new ht(d, s), y(a, T);
    }
    if (T = !0, l) for (var A = l.length - 1; 0 <= A; A--) {
      var C = a.g = l[A];
      T = wn(C, d, !0, a) && T;
    }
    if (C = a.g = s, T = wn(C, d, !0, a) && T, T = wn(C, d, !1, a) && T, l) for (A = 0; A < l.length; A++) C = a.g = l[A], T = wn(C, d, !1, a) && T;
  }
  dt.prototype.N = function() {
    if (dt.aa.N.call(this), this.i) {
      var s = this.i, a;
      for (a in s.g) {
        for (var l = s.g[a], d = 0; d < l.length; d++) Tn(l[d]);
        delete s.g[a], s.h--;
      }
    }
    this.F = null;
  }, dt.prototype.K = function(s, a, l, d) {
    return this.i.add(String(s), a, !1, l, d);
  }, dt.prototype.L = function(s, a, l, d) {
    return this.i.add(String(s), a, !0, l, d);
  };
  function wn(s, a, l, d) {
    if (a = s.i.g[String(a)], !a) return !0;
    a = a.concat();
    for (var T = !0, A = 0; A < a.length; ++A) {
      var C = a[A];
      if (C && !C.da && C.capture == l) {
        var W = C.listener, ot = C.ha || C.src;
        C.fa && Ir(s.i, C), T = W.call(ot, d) !== !1 && T;
      }
    }
    return T && !d.defaultPrevented;
  }
  function oi(s, a, l) {
    if (typeof s == "function") l && (s = R(s, l));
    else if (s && typeof s.handleEvent == "function") s = R(s.handleEvent, s);
    else throw Error("Invalid listener argument");
    return 2147483647 < Number(a) ? -1 : c.setTimeout(s, a || 0);
  }
  function ai(s) {
    s.g = oi(() => {
      s.g = null, s.i && (s.i = !1, ai(s));
    }, s.l);
    const a = s.h;
    s.h = null, s.m.apply(null, a);
  }
  class Fu extends Ut {
    constructor(a, l) {
      super(), this.m = a, this.l = l, this.h = null, this.i = !1, this.g = null;
    }
    j(a) {
      this.h = arguments, this.g ? this.i = !0 : ai(this);
    }
    N() {
      super.N(), this.g && (c.clearTimeout(this.g), this.g = null, this.i = !1, this.h = null);
    }
  }
  function Me(s) {
    Ut.call(this), this.h = s, this.g = {};
  }
  D(Me, Ut);
  var ui = [];
  function li(s) {
    it(s.g, function(a, l) {
      this.g.hasOwnProperty(l) && Pr(a);
    }, s), s.g = {};
  }
  Me.prototype.N = function() {
    Me.aa.N.call(this), li(this);
  }, Me.prototype.handleEvent = function() {
    throw Error("EventHandler.handleEvent not implemented");
  };
  var Cr = c.JSON.stringify, Uu = c.JSON.parse, Bu = class {
    stringify(s) {
      return c.JSON.stringify(s, void 0);
    }
    parse(s) {
      return c.JSON.parse(s, void 0);
    }
  };
  function br() {
  }
  br.prototype.h = null;
  function ci(s) {
    return s.h || (s.h = s.i());
  }
  function hi() {
  }
  var Le = { OPEN: "a", kb: "b", Ja: "c", wb: "d" };
  function Dr() {
    ht.call(this, "d");
  }
  D(Dr, ht);
  function Nr() {
    ht.call(this, "c");
  }
  D(Nr, ht);
  var Xt = {}, di = null;
  function An() {
    return di = di || new dt();
  }
  Xt.La = "serverreachability";
  function fi(s) {
    ht.call(this, Xt.La, s);
  }
  D(fi, ht);
  function Fe(s) {
    const a = An();
    yt(a, new fi(a));
  }
  Xt.STAT_EVENT = "statevent";
  function pi(s, a) {
    ht.call(this, Xt.STAT_EVENT, s), this.stat = a;
  }
  D(pi, ht);
  function Et(s) {
    const a = An();
    yt(a, new pi(a, s));
  }
  Xt.Ma = "timingevent";
  function mi(s, a) {
    ht.call(this, Xt.Ma, s), this.size = a;
  }
  D(mi, ht);
  function Ue(s, a) {
    if (typeof s != "function") throw Error("Fn must not be null and must be a function");
    return c.setTimeout(function() {
      s();
    }, a);
  }
  function Be() {
    this.g = !0;
  }
  Be.prototype.xa = function() {
    this.g = !1;
  };
  function qu(s, a, l, d, T, A) {
    s.info(function() {
      if (s.g) if (A)
        for (var C = "", W = A.split("&"), ot = 0; ot < W.length; ot++) {
          var j = W[ot].split("=");
          if (1 < j.length) {
            var ft = j[0];
            j = j[1];
            var pt = ft.split("_");
            C = 2 <= pt.length && pt[1] == "type" ? C + (ft + "=" + j + "&") : C + (ft + "=redacted&");
          }
        }
      else C = null;
      else C = A;
      return "XMLHTTP REQ (" + d + ") [attempt " + T + "]: " + a + `
` + l + `
` + C;
    });
  }
  function ju(s, a, l, d, T, A, C) {
    s.info(function() {
      return "XMLHTTP RESP (" + d + ") [ attempt " + T + "]: " + a + `
` + l + `
` + A + " " + C;
    });
  }
  function le(s, a, l, d) {
    s.info(function() {
      return "XMLHTTP TEXT (" + a + "): " + zu(s, l) + (d ? " " + d : "");
    });
  }
  function $u(s, a) {
    s.info(function() {
      return "TIMEOUT: " + a;
    });
  }
  Be.prototype.info = function() {
  };
  function zu(s, a) {
    if (!s.g) return a;
    if (!a) return null;
    try {
      var l = JSON.parse(a);
      if (l) {
        for (s = 0; s < l.length; s++) if (Array.isArray(l[s])) {
          var d = l[s];
          if (!(2 > d.length)) {
            var T = d[1];
            if (Array.isArray(T) && !(1 > T.length)) {
              var A = T[0];
              if (A != "noop" && A != "stop" && A != "close") for (var C = 1; C < T.length; C++) T[C] = "";
            }
          }
        }
      }
      return Cr(l);
    } catch {
      return a;
    }
  }
  var Rn = { NO_ERROR: 0, gb: 1, tb: 2, sb: 3, nb: 4, rb: 5, ub: 6, Ia: 7, TIMEOUT: 8, xb: 9 }, gi = { lb: "complete", Hb: "success", Ja: "error", Ia: "abort", zb: "ready", Ab: "readystatechange", TIMEOUT: "timeout", vb: "incrementaldata", yb: "progress", ob: "downloadprogress", Pb: "uploadprogress" }, kr;
  function Pn() {
  }
  D(Pn, br), Pn.prototype.g = function() {
    return new XMLHttpRequest();
  }, Pn.prototype.i = function() {
    return {};
  }, kr = new Pn();
  function Bt(s, a, l, d) {
    this.j = s, this.i = a, this.l = l, this.R = d || 1, this.U = new Me(this), this.I = 45e3, this.H = null, this.o = !1, this.m = this.A = this.v = this.L = this.F = this.S = this.B = null, this.D = [], this.g = null, this.C = 0, this.s = this.u = null, this.X = -1, this.J = !1, this.O = 0, this.M = null, this.W = this.K = this.T = this.P = !1, this.h = new _i();
  }
  function _i() {
    this.i = null, this.g = "", this.h = !1;
  }
  var yi = {}, xr = {};
  function Or(s, a, l) {
    s.L = 1, s.v = bn(Dt(a)), s.m = l, s.P = !0, Ei(s, null);
  }
  function Ei(s, a) {
    s.F = Date.now(), Sn(s), s.A = Dt(s.v);
    var l = s.A, d = s.R;
    Array.isArray(d) || (d = [String(d)]), ki(l.i, "t", d), s.C = 0, l = s.j.J, s.h = new _i(), s.g = Xi(s.j, l ? a : null, !s.m), 0 < s.O && (s.M = new Fu(R(s.Y, s, s.g), s.O)), a = s.U, l = s.g, d = s.ca;
    var T = "readystatechange";
    Array.isArray(T) || (T && (ui[0] = T.toString()), T = ui);
    for (var A = 0; A < T.length; A++) {
      var C = ni(l, T[A], d || a.handleEvent, !1, a.h || a);
      if (!C) break;
      a.g[C.key] = C;
    }
    a = s.H ? p(s.H) : {}, s.m ? (s.u || (s.u = "POST"), a["Content-Type"] = "application/x-www-form-urlencoded", s.g.ea(
      s.A,
      s.u,
      s.m,
      a
    )) : (s.u = "GET", s.g.ea(s.A, s.u, null, a)), Fe(), qu(s.i, s.u, s.A, s.l, s.R, s.m);
  }
  Bt.prototype.ca = function(s) {
    s = s.target;
    const a = this.M;
    a && Nt(s) == 3 ? a.j() : this.Y(s);
  }, Bt.prototype.Y = function(s) {
    try {
      if (s == this.g) t: {
        const pt = Nt(this.g);
        var a = this.g.Ba();
        const de = this.g.Z();
        if (!(3 > pt) && (pt != 3 || this.g && (this.h.h || this.g.oa() || Bi(this.g)))) {
          this.J || pt != 4 || a == 7 || (a == 8 || 0 >= de ? Fe(3) : Fe(2)), Mr(this);
          var l = this.g.Z();
          this.X = l;
          e: if (vi(this)) {
            var d = Bi(this.g);
            s = "";
            var T = d.length, A = Nt(this.g) == 4;
            if (!this.h.i) {
              if (typeof TextDecoder > "u") {
                Jt(this), qe(this);
                var C = "";
                break e;
              }
              this.h.i = new c.TextDecoder();
            }
            for (a = 0; a < T; a++) this.h.h = !0, s += this.h.i.decode(d[a], { stream: !(A && a == T - 1) });
            d.length = 0, this.h.g += s, this.C = 0, C = this.h.g;
          } else C = this.g.oa();
          if (this.o = l == 200, ju(this.i, this.u, this.A, this.l, this.R, pt, l), this.o) {
            if (this.T && !this.K) {
              e: {
                if (this.g) {
                  var W, ot = this.g;
                  if ((W = ot.g ? ot.g.getResponseHeader("X-HTTP-Initial-Response") : null) && !G(W)) {
                    var j = W;
                    break e;
                  }
                }
                j = null;
              }
              if (l = j) le(this.i, this.l, l, "Initial handshake response via X-HTTP-Initial-Response"), this.K = !0, Lr(this, l);
              else {
                this.o = !1, this.s = 3, Et(12), Jt(this), qe(this);
                break t;
              }
            }
            if (this.P) {
              l = !0;
              let wt;
              for (; !this.J && this.C < C.length; ) if (wt = Ku(this, C), wt == xr) {
                pt == 4 && (this.s = 4, Et(14), l = !1), le(this.i, this.l, null, "[Incomplete Response]");
                break;
              } else if (wt == yi) {
                this.s = 4, Et(15), le(this.i, this.l, C, "[Invalid Chunk]"), l = !1;
                break;
              } else le(this.i, this.l, wt, null), Lr(this, wt);
              if (vi(this) && this.C != 0 && (this.h.g = this.h.g.slice(this.C), this.C = 0), pt != 4 || C.length != 0 || this.h.h || (this.s = 1, Et(16), l = !1), this.o = this.o && l, !l) le(this.i, this.l, C, "[Invalid Chunked Response]"), Jt(this), qe(this);
              else if (0 < C.length && !this.W) {
                this.W = !0;
                var ft = this.j;
                ft.g == this && ft.ba && !ft.M && (ft.j.info("Great, no buffering proxy detected. Bytes received: " + C.length), $r(ft), ft.M = !0, Et(11));
              }
            } else le(this.i, this.l, C, null), Lr(this, C);
            pt == 4 && Jt(this), this.o && !this.J && (pt == 4 ? Wi(this.j, this) : (this.o = !1, Sn(this)));
          } else ul(this.g), l == 400 && 0 < C.indexOf("Unknown SID") ? (this.s = 3, Et(12)) : (this.s = 0, Et(13)), Jt(this), qe(this);
        }
      }
    } catch {
    } finally {
    }
  };
  function vi(s) {
    return s.g ? s.u == "GET" && s.L != 2 && s.j.Ca : !1;
  }
  function Ku(s, a) {
    var l = s.C, d = a.indexOf(`
`, l);
    return d == -1 ? xr : (l = Number(a.substring(l, d)), isNaN(l) ? yi : (d += 1, d + l > a.length ? xr : (a = a.slice(d, d + l), s.C = d + l, a)));
  }
  Bt.prototype.cancel = function() {
    this.J = !0, Jt(this);
  };
  function Sn(s) {
    s.S = Date.now() + s.I, Ti(s, s.I);
  }
  function Ti(s, a) {
    if (s.B != null) throw Error("WatchDog timer not null");
    s.B = Ue(R(s.ba, s), a);
  }
  function Mr(s) {
    s.B && (c.clearTimeout(s.B), s.B = null);
  }
  Bt.prototype.ba = function() {
    this.B = null;
    const s = Date.now();
    0 <= s - this.S ? ($u(this.i, this.A), this.L != 2 && (Fe(), Et(17)), Jt(this), this.s = 2, qe(this)) : Ti(this, this.S - s);
  };
  function qe(s) {
    s.j.G == 0 || s.J || Wi(s.j, s);
  }
  function Jt(s) {
    Mr(s);
    var a = s.M;
    a && typeof a.ma == "function" && a.ma(), s.M = null, li(s.U), s.g && (a = s.g, s.g = null, a.abort(), a.ma());
  }
  function Lr(s, a) {
    try {
      var l = s.j;
      if (l.G != 0 && (l.g == s || Fr(l.h, s))) {
        if (!s.K && Fr(l.h, s) && l.G == 3) {
          try {
            var d = l.Da.g.parse(a);
          } catch {
            d = null;
          }
          if (Array.isArray(d) && d.length == 3) {
            var T = d;
            if (T[0] == 0) {
              t:
                if (!l.u) {
                  if (l.g) if (l.g.F + 3e3 < s.F) Mn(l), xn(l);
                  else break t;
                  jr(l), Et(18);
                }
            } else l.za = T[1], 0 < l.za - l.T && 37500 > T[2] && l.F && l.v == 0 && !l.C && (l.C = Ue(R(l.Za, l), 6e3));
            if (1 >= Ai(l.h) && l.ca) {
              try {
                l.ca();
              } catch {
              }
              l.ca = void 0;
            }
          } else te(l, 11);
        } else if ((s.K || l.g == s) && Mn(l), !G(a)) for (T = l.Da.g.parse(a), a = 0; a < T.length; a++) {
          let j = T[a];
          if (l.T = j[0], j = j[1], l.G == 2) if (j[0] == "c") {
            l.K = j[1], l.ia = j[2];
            const ft = j[3];
            ft != null && (l.la = ft, l.j.info("VER=" + l.la));
            const pt = j[4];
            pt != null && (l.Aa = pt, l.j.info("SVER=" + l.Aa));
            const de = j[5];
            de != null && typeof de == "number" && 0 < de && (d = 1.5 * de, l.L = d, l.j.info("backChannelRequestTimeoutMs_=" + d)), d = l;
            const wt = s.g;
            if (wt) {
              const Fn = wt.g ? wt.g.getResponseHeader("X-Client-Wire-Protocol") : null;
              if (Fn) {
                var A = d.h;
                A.g || Fn.indexOf("spdy") == -1 && Fn.indexOf("quic") == -1 && Fn.indexOf("h2") == -1 || (A.j = A.l, A.g = /* @__PURE__ */ new Set(), A.h && (Ur(A, A.h), A.h = null));
              }
              if (d.D) {
                const zr = wt.g ? wt.g.getResponseHeader("X-HTTP-Session-Id") : null;
                zr && (d.ya = zr, Q(d.I, d.D, zr));
              }
            }
            l.G = 3, l.l && l.l.ua(), l.ba && (l.R = Date.now() - s.F, l.j.info("Handshake RTT: " + l.R + "ms")), d = l;
            var C = s;
            if (d.qa = Yi(d, d.J ? d.ia : null, d.W), C.K) {
              Ri(d.h, C);
              var W = C, ot = d.L;
              ot && (W.I = ot), W.B && (Mr(W), Sn(W)), d.g = C;
            } else Ki(d);
            0 < l.i.length && On(l);
          } else j[0] != "stop" && j[0] != "close" || te(l, 7);
          else l.G == 3 && (j[0] == "stop" || j[0] == "close" ? j[0] == "stop" ? te(l, 7) : qr(l) : j[0] != "noop" && l.l && l.l.ta(j), l.v = 0);
        }
      }
      Fe(4);
    } catch {
    }
  }
  var Gu = class {
    constructor(s, a) {
      this.g = s, this.map = a;
    }
  };
  function Ii(s) {
    this.l = s || 10, c.PerformanceNavigationTiming ? (s = c.performance.getEntriesByType("navigation"), s = 0 < s.length && (s[0].nextHopProtocol == "hq" || s[0].nextHopProtocol == "h2")) : s = !!(c.chrome && c.chrome.loadTimes && c.chrome.loadTimes() && c.chrome.loadTimes().wasFetchedViaSpdy), this.j = s ? this.l : 1, this.g = null, 1 < this.j && (this.g = /* @__PURE__ */ new Set()), this.h = null, this.i = [];
  }
  function wi(s) {
    return s.h ? !0 : s.g ? s.g.size >= s.j : !1;
  }
  function Ai(s) {
    return s.h ? 1 : s.g ? s.g.size : 0;
  }
  function Fr(s, a) {
    return s.h ? s.h == a : s.g ? s.g.has(a) : !1;
  }
  function Ur(s, a) {
    s.g ? s.g.add(a) : s.h = a;
  }
  function Ri(s, a) {
    s.h && s.h == a ? s.h = null : s.g && s.g.has(a) && s.g.delete(a);
  }
  Ii.prototype.cancel = function() {
    if (this.i = Pi(this), this.h) this.h.cancel(), this.h = null;
    else if (this.g && this.g.size !== 0) {
      for (const s of this.g.values()) s.cancel();
      this.g.clear();
    }
  };
  function Pi(s) {
    if (s.h != null) return s.i.concat(s.h.D);
    if (s.g != null && s.g.size !== 0) {
      let a = s.i;
      for (const l of s.g.values()) a = a.concat(l.D);
      return a;
    }
    return O(s.i);
  }
  function Wu(s) {
    if (s.V && typeof s.V == "function") return s.V();
    if (typeof Map < "u" && s instanceof Map || typeof Set < "u" && s instanceof Set) return Array.from(s.values());
    if (typeof s == "string") return s.split("");
    if (h(s)) {
      for (var a = [], l = s.length, d = 0; d < l; d++) a.push(s[d]);
      return a;
    }
    a = [], l = 0;
    for (d in s) a[l++] = s[d];
    return a;
  }
  function Hu(s) {
    if (s.na && typeof s.na == "function") return s.na();
    if (!s.V || typeof s.V != "function") {
      if (typeof Map < "u" && s instanceof Map) return Array.from(s.keys());
      if (!(typeof Set < "u" && s instanceof Set)) {
        if (h(s) || typeof s == "string") {
          var a = [];
          s = s.length;
          for (var l = 0; l < s; l++) a.push(l);
          return a;
        }
        a = [], l = 0;
        for (const d in s) a[l++] = d;
        return a;
      }
    }
  }
  function Si(s, a) {
    if (s.forEach && typeof s.forEach == "function") s.forEach(a, void 0);
    else if (h(s) || typeof s == "string") Array.prototype.forEach.call(s, a, void 0);
    else for (var l = Hu(s), d = Wu(s), T = d.length, A = 0; A < T; A++) a.call(void 0, d[A], l && l[A], s);
  }
  var Vi = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");
  function Qu(s, a) {
    if (s) {
      s = s.split("&");
      for (var l = 0; l < s.length; l++) {
        var d = s[l].indexOf("="), T = null;
        if (0 <= d) {
          var A = s[l].substring(0, d);
          T = s[l].substring(d + 1);
        } else A = s[l];
        a(A, T ? decodeURIComponent(T.replace(/\+/g, " ")) : "");
      }
    }
  }
  function Zt(s) {
    if (this.g = this.o = this.j = "", this.s = null, this.m = this.l = "", this.h = !1, s instanceof Zt) {
      this.h = s.h, Vn(this, s.j), this.o = s.o, this.g = s.g, Cn(this, s.s), this.l = s.l;
      var a = s.i, l = new ze();
      l.i = a.i, a.g && (l.g = new Map(a.g), l.h = a.h), Ci(this, l), this.m = s.m;
    } else s && (a = String(s).match(Vi)) ? (this.h = !1, Vn(this, a[1] || "", !0), this.o = je(a[2] || ""), this.g = je(a[3] || "", !0), Cn(this, a[4]), this.l = je(a[5] || "", !0), Ci(this, a[6] || "", !0), this.m = je(a[7] || "")) : (this.h = !1, this.i = new ze(null, this.h));
  }
  Zt.prototype.toString = function() {
    var s = [], a = this.j;
    a && s.push($e(a, bi, !0), ":");
    var l = this.g;
    return (l || a == "file") && (s.push("//"), (a = this.o) && s.push($e(a, bi, !0), "@"), s.push(encodeURIComponent(String(l)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), l = this.s, l != null && s.push(":", String(l))), (l = this.l) && (this.g && l.charAt(0) != "/" && s.push("/"), s.push($e(l, l.charAt(0) == "/" ? Ju : Xu, !0))), (l = this.i.toString()) && s.push("?", l), (l = this.m) && s.push("#", $e(l, tl)), s.join("");
  };
  function Dt(s) {
    return new Zt(s);
  }
  function Vn(s, a, l) {
    s.j = l ? je(a, !0) : a, s.j && (s.j = s.j.replace(/:$/, ""));
  }
  function Cn(s, a) {
    if (a) {
      if (a = Number(a), isNaN(a) || 0 > a) throw Error("Bad port number " + a);
      s.s = a;
    } else s.s = null;
  }
  function Ci(s, a, l) {
    a instanceof ze ? (s.i = a, el(s.i, s.h)) : (l || (a = $e(a, Zu)), s.i = new ze(a, s.h));
  }
  function Q(s, a, l) {
    s.i.set(a, l);
  }
  function bn(s) {
    return Q(s, "zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ Date.now()).toString(36)), s;
  }
  function je(s, a) {
    return s ? a ? decodeURI(s.replace(/%25/g, "%2525")) : decodeURIComponent(s) : "";
  }
  function $e(s, a, l) {
    return typeof s == "string" ? (s = encodeURI(s).replace(a, Yu), l && (s = s.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), s) : null;
  }
  function Yu(s) {
    return s = s.charCodeAt(0), "%" + (s >> 4 & 15).toString(16) + (s & 15).toString(16);
  }
  var bi = /[#\/\?@]/g, Xu = /[#\?:]/g, Ju = /[#\?]/g, Zu = /[#\?@]/g, tl = /#/g;
  function ze(s, a) {
    this.h = this.g = null, this.i = s || null, this.j = !!a;
  }
  function qt(s) {
    s.g || (s.g = /* @__PURE__ */ new Map(), s.h = 0, s.i && Qu(s.i, function(a, l) {
      s.add(decodeURIComponent(a.replace(/\+/g, " ")), l);
    }));
  }
  n = ze.prototype, n.add = function(s, a) {
    qt(this), this.i = null, s = ce(this, s);
    var l = this.g.get(s);
    return l || this.g.set(s, l = []), l.push(a), this.h += 1, this;
  };
  function Di(s, a) {
    qt(s), a = ce(s, a), s.g.has(a) && (s.i = null, s.h -= s.g.get(a).length, s.g.delete(a));
  }
  function Ni(s, a) {
    return qt(s), a = ce(s, a), s.g.has(a);
  }
  n.forEach = function(s, a) {
    qt(this), this.g.forEach(function(l, d) {
      l.forEach(function(T) {
        s.call(a, T, d, this);
      }, this);
    }, this);
  }, n.na = function() {
    qt(this);
    const s = Array.from(this.g.values()), a = Array.from(this.g.keys()), l = [];
    for (let d = 0; d < a.length; d++) {
      const T = s[d];
      for (let A = 0; A < T.length; A++) l.push(a[d]);
    }
    return l;
  }, n.V = function(s) {
    qt(this);
    let a = [];
    if (typeof s == "string") Ni(this, s) && (a = a.concat(this.g.get(ce(this, s))));
    else {
      s = Array.from(this.g.values());
      for (let l = 0; l < s.length; l++) a = a.concat(s[l]);
    }
    return a;
  }, n.set = function(s, a) {
    return qt(this), this.i = null, s = ce(this, s), Ni(this, s) && (this.h -= this.g.get(s).length), this.g.set(s, [a]), this.h += 1, this;
  }, n.get = function(s, a) {
    return s ? (s = this.V(s), 0 < s.length ? String(s[0]) : a) : a;
  };
  function ki(s, a, l) {
    Di(s, a), 0 < l.length && (s.i = null, s.g.set(ce(s, a), O(l)), s.h += l.length);
  }
  n.toString = function() {
    if (this.i) return this.i;
    if (!this.g) return "";
    const s = [], a = Array.from(this.g.keys());
    for (var l = 0; l < a.length; l++) {
      var d = a[l];
      const A = encodeURIComponent(String(d)), C = this.V(d);
      for (d = 0; d < C.length; d++) {
        var T = A;
        C[d] !== "" && (T += "=" + encodeURIComponent(String(C[d]))), s.push(T);
      }
    }
    return this.i = s.join("&");
  };
  function ce(s, a) {
    return a = String(a), s.j && (a = a.toLowerCase()), a;
  }
  function el(s, a) {
    a && !s.j && (qt(s), s.i = null, s.g.forEach(function(l, d) {
      var T = d.toLowerCase();
      d != T && (Di(this, d), ki(this, T, l));
    }, s)), s.j = a;
  }
  function nl(s, a) {
    const l = new Be();
    if (c.Image) {
      const d = new Image();
      d.onload = V(jt, l, "TestLoadImage: loaded", !0, a, d), d.onerror = V(jt, l, "TestLoadImage: error", !1, a, d), d.onabort = V(jt, l, "TestLoadImage: abort", !1, a, d), d.ontimeout = V(jt, l, "TestLoadImage: timeout", !1, a, d), c.setTimeout(function() {
        d.ontimeout && d.ontimeout();
      }, 1e4), d.src = s;
    } else a(!1);
  }
  function rl(s, a) {
    const l = new Be(), d = new AbortController(), T = setTimeout(() => {
      d.abort(), jt(l, "TestPingServer: timeout", !1, a);
    }, 1e4);
    fetch(s, { signal: d.signal }).then((A) => {
      clearTimeout(T), A.ok ? jt(l, "TestPingServer: ok", !0, a) : jt(l, "TestPingServer: server error", !1, a);
    }).catch(() => {
      clearTimeout(T), jt(l, "TestPingServer: error", !1, a);
    });
  }
  function jt(s, a, l, d, T) {
    try {
      T && (T.onload = null, T.onerror = null, T.onabort = null, T.ontimeout = null), d(l);
    } catch {
    }
  }
  function sl() {
    this.g = new Bu();
  }
  function il(s, a, l) {
    const d = l || "";
    try {
      Si(s, function(T, A) {
        let C = T;
        f(T) && (C = Cr(T)), a.push(d + A + "=" + encodeURIComponent(C));
      });
    } catch (T) {
      throw a.push(d + "type=" + encodeURIComponent("_badmap")), T;
    }
  }
  function Dn(s) {
    this.l = s.Ub || null, this.j = s.eb || !1;
  }
  D(Dn, br), Dn.prototype.g = function() {
    return new Nn(this.l, this.j);
  }, Dn.prototype.i = /* @__PURE__ */ function(s) {
    return function() {
      return s;
    };
  }({});
  function Nn(s, a) {
    dt.call(this), this.D = s, this.o = a, this.m = void 0, this.status = this.readyState = 0, this.responseType = this.responseText = this.response = this.statusText = "", this.onreadystatechange = null, this.u = new Headers(), this.h = null, this.B = "GET", this.A = "", this.g = !1, this.v = this.j = this.l = null;
  }
  D(Nn, dt), n = Nn.prototype, n.open = function(s, a) {
    if (this.readyState != 0) throw this.abort(), Error("Error reopening a connection");
    this.B = s, this.A = a, this.readyState = 1, Ge(this);
  }, n.send = function(s) {
    if (this.readyState != 1) throw this.abort(), Error("need to call open() first. ");
    this.g = !0;
    const a = { headers: this.u, method: this.B, credentials: this.m, cache: void 0 };
    s && (a.body = s), (this.D || c).fetch(new Request(this.A, a)).then(this.Sa.bind(this), this.ga.bind(this));
  }, n.abort = function() {
    this.response = this.responseText = "", this.u = new Headers(), this.status = 0, this.j && this.j.cancel("Request was aborted.").catch(() => {
    }), 1 <= this.readyState && this.g && this.readyState != 4 && (this.g = !1, Ke(this)), this.readyState = 0;
  }, n.Sa = function(s) {
    if (this.g && (this.l = s, this.h || (this.status = this.l.status, this.statusText = this.l.statusText, this.h = s.headers, this.readyState = 2, Ge(this)), this.g && (this.readyState = 3, Ge(this), this.g))) if (this.responseType === "arraybuffer") s.arrayBuffer().then(this.Qa.bind(this), this.ga.bind(this));
    else if (typeof c.ReadableStream < "u" && "body" in s) {
      if (this.j = s.body.getReader(), this.o) {
        if (this.responseType) throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');
        this.response = [];
      } else this.response = this.responseText = "", this.v = new TextDecoder();
      xi(this);
    } else s.text().then(this.Ra.bind(this), this.ga.bind(this));
  };
  function xi(s) {
    s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s));
  }
  n.Pa = function(s) {
    if (this.g) {
      if (this.o && s.value) this.response.push(s.value);
      else if (!this.o) {
        var a = s.value ? s.value : new Uint8Array(0);
        (a = this.v.decode(a, { stream: !s.done })) && (this.response = this.responseText += a);
      }
      s.done ? Ke(this) : Ge(this), this.readyState == 3 && xi(this);
    }
  }, n.Ra = function(s) {
    this.g && (this.response = this.responseText = s, Ke(this));
  }, n.Qa = function(s) {
    this.g && (this.response = s, Ke(this));
  }, n.ga = function() {
    this.g && Ke(this);
  };
  function Ke(s) {
    s.readyState = 4, s.l = null, s.j = null, s.v = null, Ge(s);
  }
  n.setRequestHeader = function(s, a) {
    this.u.append(s, a);
  }, n.getResponseHeader = function(s) {
    return this.h && this.h.get(s.toLowerCase()) || "";
  }, n.getAllResponseHeaders = function() {
    if (!this.h) return "";
    const s = [], a = this.h.entries();
    for (var l = a.next(); !l.done; ) l = l.value, s.push(l[0] + ": " + l[1]), l = a.next();
    return s.join(`\r
`);
  };
  function Ge(s) {
    s.onreadystatechange && s.onreadystatechange.call(s);
  }
  Object.defineProperty(Nn.prototype, "withCredentials", { get: function() {
    return this.m === "include";
  }, set: function(s) {
    this.m = s ? "include" : "same-origin";
  } });
  function Oi(s) {
    let a = "";
    return it(s, function(l, d) {
      a += d, a += ":", a += l, a += `\r
`;
    }), a;
  }
  function Br(s, a, l) {
    t: {
      for (d in l) {
        var d = !1;
        break t;
      }
      d = !0;
    }
    d || (l = Oi(l), typeof s == "string" ? l != null && encodeURIComponent(String(l)) : Q(s, a, l));
  }
  function J(s) {
    dt.call(this), this.headers = /* @__PURE__ */ new Map(), this.o = s || null, this.h = !1, this.v = this.g = null, this.D = "", this.m = 0, this.l = "", this.j = this.B = this.u = this.A = !1, this.I = null, this.H = "", this.J = !1;
  }
  D(J, dt);
  var ol = /^https?$/i, al = ["POST", "PUT"];
  n = J.prototype, n.Ha = function(s) {
    this.J = s;
  }, n.ea = function(s, a, l, d) {
    if (this.g) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.D + "; newUri=" + s);
    a = a ? a.toUpperCase() : "GET", this.D = s, this.l = "", this.m = 0, this.A = !1, this.h = !0, this.g = this.o ? this.o.g() : kr.g(), this.v = this.o ? ci(this.o) : ci(kr), this.g.onreadystatechange = R(this.Ea, this);
    try {
      this.B = !0, this.g.open(a, String(s), !0), this.B = !1;
    } catch (A) {
      Mi(this, A);
      return;
    }
    if (s = l || "", l = new Map(this.headers), d) if (Object.getPrototypeOf(d) === Object.prototype) for (var T in d) l.set(T, d[T]);
    else if (typeof d.keys == "function" && typeof d.get == "function") for (const A of d.keys()) l.set(A, d.get(A));
    else throw Error("Unknown input type for opt_headers: " + String(d));
    d = Array.from(l.keys()).find((A) => A.toLowerCase() == "content-type"), T = c.FormData && s instanceof c.FormData, !(0 <= Array.prototype.indexOf.call(al, a, void 0)) || d || T || l.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
    for (const [A, C] of l) this.g.setRequestHeader(A, C);
    this.H && (this.g.responseType = this.H), "withCredentials" in this.g && this.g.withCredentials !== this.J && (this.g.withCredentials = this.J);
    try {
      Ui(this), this.u = !0, this.g.send(s), this.u = !1;
    } catch (A) {
      Mi(this, A);
    }
  };
  function Mi(s, a) {
    s.h = !1, s.g && (s.j = !0, s.g.abort(), s.j = !1), s.l = a, s.m = 5, Li(s), kn(s);
  }
  function Li(s) {
    s.A || (s.A = !0, yt(s, "complete"), yt(s, "error"));
  }
  n.abort = function(s) {
    this.g && this.h && (this.h = !1, this.j = !0, this.g.abort(), this.j = !1, this.m = s || 7, yt(this, "complete"), yt(this, "abort"), kn(this));
  }, n.N = function() {
    this.g && (this.h && (this.h = !1, this.j = !0, this.g.abort(), this.j = !1), kn(this, !0)), J.aa.N.call(this);
  }, n.Ea = function() {
    this.s || (this.B || this.u || this.j ? Fi(this) : this.bb());
  }, n.bb = function() {
    Fi(this);
  };
  function Fi(s) {
    if (s.h && typeof u < "u" && (!s.v[1] || Nt(s) != 4 || s.Z() != 2)) {
      if (s.u && Nt(s) == 4) oi(s.Ea, 0, s);
      else if (yt(s, "readystatechange"), Nt(s) == 4) {
        s.h = !1;
        try {
          const C = s.Z();
          t: switch (C) {
            case 200:
            case 201:
            case 202:
            case 204:
            case 206:
            case 304:
            case 1223:
              var a = !0;
              break t;
            default:
              a = !1;
          }
          var l;
          if (!(l = a)) {
            var d;
            if (d = C === 0) {
              var T = String(s.D).match(Vi)[1] || null;
              !T && c.self && c.self.location && (T = c.self.location.protocol.slice(0, -1)), d = !ol.test(T ? T.toLowerCase() : "");
            }
            l = d;
          }
          if (l) yt(s, "complete"), yt(s, "success");
          else {
            s.m = 6;
            try {
              var A = 2 < Nt(s) ? s.g.statusText : "";
            } catch {
              A = "";
            }
            s.l = A + " [" + s.Z() + "]", Li(s);
          }
        } finally {
          kn(s);
        }
      }
    }
  }
  function kn(s, a) {
    if (s.g) {
      Ui(s);
      const l = s.g, d = s.v[0] ? () => {
      } : null;
      s.g = null, s.v = null, a || yt(s, "ready");
      try {
        l.onreadystatechange = d;
      } catch {
      }
    }
  }
  function Ui(s) {
    s.I && (c.clearTimeout(s.I), s.I = null);
  }
  n.isActive = function() {
    return !!this.g;
  };
  function Nt(s) {
    return s.g ? s.g.readyState : 0;
  }
  n.Z = function() {
    try {
      return 2 < Nt(this) ? this.g.status : -1;
    } catch {
      return -1;
    }
  }, n.oa = function() {
    try {
      return this.g ? this.g.responseText : "";
    } catch {
      return "";
    }
  }, n.Oa = function(s) {
    if (this.g) {
      var a = this.g.responseText;
      return s && a.indexOf(s) == 0 && (a = a.substring(s.length)), Uu(a);
    }
  };
  function Bi(s) {
    try {
      if (!s.g) return null;
      if ("response" in s.g) return s.g.response;
      switch (s.H) {
        case "":
        case "text":
          return s.g.responseText;
        case "arraybuffer":
          if ("mozResponseArrayBuffer" in s.g) return s.g.mozResponseArrayBuffer;
      }
      return null;
    } catch {
      return null;
    }
  }
  function ul(s) {
    const a = {};
    s = (s.g && 2 <= Nt(s) && s.g.getAllResponseHeaders() || "").split(`\r
`);
    for (let d = 0; d < s.length; d++) {
      if (G(s[d])) continue;
      var l = E(s[d]);
      const T = l[0];
      if (l = l[1], typeof l != "string") continue;
      l = l.trim();
      const A = a[T] || [];
      a[T] = A, A.push(l);
    }
    v(a, function(d) {
      return d.join(", ");
    });
  }
  n.Ba = function() {
    return this.m;
  }, n.Ka = function() {
    return typeof this.l == "string" ? this.l : String(this.l);
  };
  function We(s, a, l) {
    return l && l.internalChannelParams && l.internalChannelParams[s] || a;
  }
  function qi(s) {
    this.Aa = 0, this.i = [], this.j = new Be(), this.ia = this.qa = this.I = this.W = this.g = this.ya = this.D = this.H = this.m = this.S = this.o = null, this.Ya = this.U = 0, this.Va = We("failFast", !1, s), this.F = this.C = this.u = this.s = this.l = null, this.X = !0, this.za = this.T = -1, this.Y = this.v = this.B = 0, this.Ta = We("baseRetryDelayMs", 5e3, s), this.cb = We("retryDelaySeedMs", 1e4, s), this.Wa = We("forwardChannelMaxRetries", 2, s), this.wa = We("forwardChannelRequestTimeoutMs", 2e4, s), this.pa = s && s.xmlHttpFactory || void 0, this.Xa = s && s.Tb || void 0, this.Ca = s && s.useFetchStreams || !1, this.L = void 0, this.J = s && s.supportsCrossDomainXhr || !1, this.K = "", this.h = new Ii(s && s.concurrentRequestLimit), this.Da = new sl(), this.P = s && s.fastHandshake || !1, this.O = s && s.encodeInitMessageHeaders || !1, this.P && this.O && (this.O = !1), this.Ua = s && s.Rb || !1, s && s.xa && this.j.xa(), s && s.forceLongPolling && (this.X = !1), this.ba = !this.P && this.X && s && s.detectBufferingProxy || !1, this.ja = void 0, s && s.longPollingTimeout && 0 < s.longPollingTimeout && (this.ja = s.longPollingTimeout), this.ca = void 0, this.R = 0, this.M = !1, this.ka = this.A = null;
  }
  n = qi.prototype, n.la = 8, n.G = 1, n.connect = function(s, a, l, d) {
    Et(0), this.W = s, this.H = a || {}, l && d !== void 0 && (this.H.OSID = l, this.H.OAID = d), this.F = this.X, this.I = Yi(this, null, this.W), On(this);
  };
  function qr(s) {
    if (ji(s), s.G == 3) {
      var a = s.U++, l = Dt(s.I);
      if (Q(l, "SID", s.K), Q(l, "RID", a), Q(l, "TYPE", "terminate"), He(s, l), a = new Bt(s, s.j, a), a.L = 2, a.v = bn(Dt(l)), l = !1, c.navigator && c.navigator.sendBeacon) try {
        l = c.navigator.sendBeacon(a.v.toString(), "");
      } catch {
      }
      !l && c.Image && (new Image().src = a.v, l = !0), l || (a.g = Xi(a.j, null), a.g.ea(a.v)), a.F = Date.now(), Sn(a);
    }
    Qi(s);
  }
  function xn(s) {
    s.g && ($r(s), s.g.cancel(), s.g = null);
  }
  function ji(s) {
    xn(s), s.u && (c.clearTimeout(s.u), s.u = null), Mn(s), s.h.cancel(), s.s && (typeof s.s == "number" && c.clearTimeout(s.s), s.s = null);
  }
  function On(s) {
    if (!wi(s.h) && !s.s) {
      s.s = !0;
      var a = s.Ga;
      ke || ei(), xe || (ke(), xe = !0), Tr.add(a, s), s.B = 0;
    }
  }
  function ll(s, a) {
    return Ai(s.h) >= s.h.j - (s.s ? 1 : 0) ? !1 : s.s ? (s.i = a.D.concat(s.i), !0) : s.G == 1 || s.G == 2 || s.B >= (s.Va ? 0 : s.Wa) ? !1 : (s.s = Ue(R(s.Ga, s, a), Hi(s, s.B)), s.B++, !0);
  }
  n.Ga = function(s) {
    if (this.s) if (this.s = null, this.G == 1) {
      if (!s) {
        this.U = Math.floor(1e5 * Math.random()), s = this.U++;
        const T = new Bt(this, this.j, s);
        let A = this.o;
        if (this.S && (A ? (A = p(A), y(A, this.S)) : A = this.S), this.m !== null || this.O || (T.H = A, A = null), this.P) t: {
          for (var a = 0, l = 0; l < this.i.length; l++) {
            e: {
              var d = this.i[l];
              if ("__data__" in d.map && (d = d.map.__data__, typeof d == "string")) {
                d = d.length;
                break e;
              }
              d = void 0;
            }
            if (d === void 0) break;
            if (a += d, 4096 < a) {
              a = l;
              break t;
            }
            if (a === 4096 || l === this.i.length - 1) {
              a = l + 1;
              break t;
            }
          }
          a = 1e3;
        }
        else a = 1e3;
        a = zi(this, T, a), l = Dt(this.I), Q(l, "RID", s), Q(l, "CVER", 22), this.D && Q(l, "X-HTTP-Session-Id", this.D), He(this, l), A && (this.O ? a = "headers=" + encodeURIComponent(String(Oi(A))) + "&" + a : this.m && Br(l, this.m, A)), Ur(this.h, T), this.Ua && Q(l, "TYPE", "init"), this.P ? (Q(l, "$req", a), Q(l, "SID", "null"), T.T = !0, Or(T, l, null)) : Or(T, l, a), this.G = 2;
      }
    } else this.G == 3 && (s ? $i(this, s) : this.i.length == 0 || wi(this.h) || $i(this));
  };
  function $i(s, a) {
    var l;
    a ? l = a.l : l = s.U++;
    const d = Dt(s.I);
    Q(d, "SID", s.K), Q(d, "RID", l), Q(d, "AID", s.T), He(s, d), s.m && s.o && Br(d, s.m, s.o), l = new Bt(s, s.j, l, s.B + 1), s.m === null && (l.H = s.o), a && (s.i = a.D.concat(s.i)), a = zi(s, l, 1e3), l.I = Math.round(0.5 * s.wa) + Math.round(0.5 * s.wa * Math.random()), Ur(s.h, l), Or(l, d, a);
  }
  function He(s, a) {
    s.H && it(s.H, function(l, d) {
      Q(a, d, l);
    }), s.l && Si({}, function(l, d) {
      Q(a, d, l);
    });
  }
  function zi(s, a, l) {
    l = Math.min(s.i.length, l);
    var d = s.l ? R(s.l.Na, s.l, s) : null;
    t: {
      var T = s.i;
      let A = -1;
      for (; ; ) {
        const C = ["count=" + l];
        A == -1 ? 0 < l ? (A = T[0].g, C.push("ofs=" + A)) : A = 0 : C.push("ofs=" + A);
        let W = !0;
        for (let ot = 0; ot < l; ot++) {
          let j = T[ot].g;
          const ft = T[ot].map;
          if (j -= A, 0 > j) A = Math.max(0, T[ot].g - 100), W = !1;
          else try {
            il(ft, C, "req" + j + "_");
          } catch {
            d && d(ft);
          }
        }
        if (W) {
          d = C.join("&");
          break t;
        }
      }
    }
    return s = s.i.splice(0, l), a.D = s, d;
  }
  function Ki(s) {
    if (!s.g && !s.u) {
      s.Y = 1;
      var a = s.Fa;
      ke || ei(), xe || (ke(), xe = !0), Tr.add(a, s), s.v = 0;
    }
  }
  function jr(s) {
    return s.g || s.u || 3 <= s.v ? !1 : (s.Y++, s.u = Ue(R(s.Fa, s), Hi(s, s.v)), s.v++, !0);
  }
  n.Fa = function() {
    if (this.u = null, Gi(this), this.ba && !(this.M || this.g == null || 0 >= this.R)) {
      var s = 2 * this.R;
      this.j.info("BP detection timer enabled: " + s), this.A = Ue(R(this.ab, this), s);
    }
  }, n.ab = function() {
    this.A && (this.A = null, this.j.info("BP detection timeout reached."), this.j.info("Buffering proxy detected and switch to long-polling!"), this.F = !1, this.M = !0, Et(10), xn(this), Gi(this));
  };
  function $r(s) {
    s.A != null && (c.clearTimeout(s.A), s.A = null);
  }
  function Gi(s) {
    s.g = new Bt(s, s.j, "rpc", s.Y), s.m === null && (s.g.H = s.o), s.g.O = 0;
    var a = Dt(s.qa);
    Q(a, "RID", "rpc"), Q(a, "SID", s.K), Q(a, "AID", s.T), Q(a, "CI", s.F ? "0" : "1"), !s.F && s.ja && Q(a, "TO", s.ja), Q(a, "TYPE", "xmlhttp"), He(s, a), s.m && s.o && Br(a, s.m, s.o), s.L && (s.g.I = s.L);
    var l = s.g;
    s = s.ia, l.L = 1, l.v = bn(Dt(a)), l.m = null, l.P = !0, Ei(l, s);
  }
  n.Za = function() {
    this.C != null && (this.C = null, xn(this), jr(this), Et(19));
  };
  function Mn(s) {
    s.C != null && (c.clearTimeout(s.C), s.C = null);
  }
  function Wi(s, a) {
    var l = null;
    if (s.g == a) {
      Mn(s), $r(s), s.g = null;
      var d = 2;
    } else if (Fr(s.h, a)) l = a.D, Ri(s.h, a), d = 1;
    else return;
    if (s.G != 0) {
      if (a.o) if (d == 1) {
        l = a.m ? a.m.length : 0, a = Date.now() - a.F;
        var T = s.B;
        d = An(), yt(d, new mi(d, l)), On(s);
      } else Ki(s);
      else if (T = a.s, T == 3 || T == 0 && 0 < a.X || !(d == 1 && ll(s, a) || d == 2 && jr(s))) switch (l && 0 < l.length && (a = s.h, a.i = a.i.concat(l)), T) {
        case 1:
          te(s, 5);
          break;
        case 4:
          te(s, 10);
          break;
        case 3:
          te(s, 6);
          break;
        default:
          te(s, 2);
      }
    }
  }
  function Hi(s, a) {
    let l = s.Ta + Math.floor(Math.random() * s.cb);
    return s.isActive() || (l *= 2), l * a;
  }
  function te(s, a) {
    if (s.j.info("Error code " + a), a == 2) {
      var l = R(s.fb, s), d = s.Xa;
      const T = !d;
      d = new Zt(d || "//www.google.com/images/cleardot.gif"), c.location && c.location.protocol == "http" || Vn(d, "https"), bn(d), T ? nl(d.toString(), l) : rl(d.toString(), l);
    } else Et(2);
    s.G = 0, s.l && s.l.sa(a), Qi(s), ji(s);
  }
  n.fb = function(s) {
    s ? (this.j.info("Successfully pinged google.com"), Et(2)) : (this.j.info("Failed to ping google.com"), Et(1));
  };
  function Qi(s) {
    if (s.G = 0, s.ka = [], s.l) {
      const a = Pi(s.h);
      (a.length != 0 || s.i.length != 0) && (b(s.ka, a), b(s.ka, s.i), s.h.i.length = 0, O(s.i), s.i.length = 0), s.l.ra();
    }
  }
  function Yi(s, a, l) {
    var d = l instanceof Zt ? Dt(l) : new Zt(l);
    if (d.g != "") a && (d.g = a + "." + d.g), Cn(d, d.s);
    else {
      var T = c.location;
      d = T.protocol, a = a ? a + "." + T.hostname : T.hostname, T = +T.port;
      var A = new Zt(null);
      d && Vn(A, d), a && (A.g = a), T && Cn(A, T), l && (A.l = l), d = A;
    }
    return l = s.D, a = s.ya, l && a && Q(d, l, a), Q(d, "VER", s.la), He(s, d), d;
  }
  function Xi(s, a, l) {
    if (a && !s.J) throw Error("Can't create secondary domain capable XhrIo object.");
    return a = s.Ca && !s.pa ? new J(new Dn({ eb: l })) : new J(s.pa), a.Ha(s.J), a;
  }
  n.isActive = function() {
    return !!this.l && this.l.isActive(this);
  };
  function Ji() {
  }
  n = Ji.prototype, n.ua = function() {
  }, n.ta = function() {
  }, n.sa = function() {
  }, n.ra = function() {
  }, n.isActive = function() {
    return !0;
  }, n.Na = function() {
  };
  function Ln() {
  }
  Ln.prototype.g = function(s, a) {
    return new vt(s, a);
  };
  function vt(s, a) {
    dt.call(this), this.g = new qi(a), this.l = s, this.h = a && a.messageUrlParams || null, s = a && a.messageHeaders || null, a && a.clientProtocolHeaderRequired && (s ? s["X-Client-Protocol"] = "webchannel" : s = { "X-Client-Protocol": "webchannel" }), this.g.o = s, s = a && a.initMessageHeaders || null, a && a.messageContentType && (s ? s["X-WebChannel-Content-Type"] = a.messageContentType : s = { "X-WebChannel-Content-Type": a.messageContentType }), a && a.va && (s ? s["X-WebChannel-Client-Profile"] = a.va : s = { "X-WebChannel-Client-Profile": a.va }), this.g.S = s, (s = a && a.Sb) && !G(s) && (this.g.m = s), this.v = a && a.supportsCrossDomainXhr || !1, this.u = a && a.sendRawJson || !1, (a = a && a.httpSessionIdParam) && !G(a) && (this.g.D = a, s = this.h, s !== null && a in s && (s = this.h, a in s && delete s[a])), this.j = new he(this);
  }
  D(vt, dt), vt.prototype.m = function() {
    this.g.l = this.j, this.v && (this.g.J = !0), this.g.connect(this.l, this.h || void 0);
  }, vt.prototype.close = function() {
    qr(this.g);
  }, vt.prototype.o = function(s) {
    var a = this.g;
    if (typeof s == "string") {
      var l = {};
      l.__data__ = s, s = l;
    } else this.u && (l = {}, l.__data__ = Cr(s), s = l);
    a.i.push(new Gu(a.Ya++, s)), a.G == 3 && On(a);
  }, vt.prototype.N = function() {
    this.g.l = null, delete this.j, qr(this.g), delete this.g, vt.aa.N.call(this);
  };
  function Zi(s) {
    Dr.call(this), s.__headers__ && (this.headers = s.__headers__, this.statusCode = s.__status__, delete s.__headers__, delete s.__status__);
    var a = s.__sm__;
    if (a) {
      t: {
        for (const l in a) {
          s = l;
          break t;
        }
        s = void 0;
      }
      (this.i = s) && (s = this.i, a = a !== null && s in a ? a[s] : void 0), this.data = a;
    } else this.data = s;
  }
  D(Zi, Dr);
  function to() {
    Nr.call(this), this.status = 1;
  }
  D(to, Nr);
  function he(s) {
    this.g = s;
  }
  D(he, Ji), he.prototype.ua = function() {
    yt(this.g, "a");
  }, he.prototype.ta = function(s) {
    yt(this.g, new Zi(s));
  }, he.prototype.sa = function(s) {
    yt(this.g, new to());
  }, he.prototype.ra = function() {
    yt(this.g, "b");
  }, Ln.prototype.createWebChannel = Ln.prototype.g, vt.prototype.send = vt.prototype.o, vt.prototype.open = vt.prototype.m, vt.prototype.close = vt.prototype.close, fa = function() {
    return new Ln();
  }, da = function() {
    return An();
  }, ha = Xt, as = { mb: 0, pb: 1, qb: 2, Jb: 3, Ob: 4, Lb: 5, Mb: 6, Kb: 7, Ib: 8, Nb: 9, PROXY: 10, NOPROXY: 11, Gb: 12, Cb: 13, Db: 14, Bb: 15, Eb: 16, Fb: 17, ib: 18, hb: 19, jb: 20 }, Rn.NO_ERROR = 0, Rn.TIMEOUT = 8, Rn.HTTP_ERROR = 6, Kn = Rn, gi.COMPLETE = "complete", ca = gi, hi.EventType = Le, Le.OPEN = "a", Le.CLOSE = "b", Le.ERROR = "c", Le.MESSAGE = "d", dt.prototype.listen = dt.prototype.K, Xe = hi, J.prototype.listenOnce = J.prototype.L, J.prototype.getLastError = J.prototype.Ka, J.prototype.getLastErrorCode = J.prototype.Ba, J.prototype.getStatus = J.prototype.Z, J.prototype.getResponseJson = J.prototype.Oa, J.prototype.getResponseText = J.prototype.oa, J.prototype.send = J.prototype.ea, J.prototype.setWithCredentials = J.prototype.Ha, la = J;
}).apply(typeof Bn < "u" ? Bn : typeof self < "u" ? self : typeof window < "u" ? window : {});
const fo = "@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
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
class gt {
  constructor(t) {
    this.uid = t;
  }
  isAuthenticated() {
    return this.uid != null;
  }
  /**
   * Returns a key representing this user, suitable for inclusion in a
   * dictionary.
   */
  toKey() {
    return this.isAuthenticated() ? "uid:" + this.uid : "anonymous-user";
  }
  isEqual(t) {
    return t.uid === this.uid;
  }
}
gt.UNAUTHENTICATED = new gt(null), // TODO(mikelehen): Look into getting a proper uid-equivalent for
// non-FirebaseAuth providers.
gt.GOOGLE_CREDENTIALS = new gt("google-credentials-uid"), gt.FIRST_PARTY = new gt("first-party-uid"), gt.MOCK_USER = new gt("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
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
let Se = "10.14.0";
/**
 * @license
 * Copyright 2017 Google LLC
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
const se = new na("@firebase/firestore");
function Ye() {
  return se.logLevel;
}
function k(n, ...t) {
  if (se.logLevel <= q.DEBUG) {
    const e = t.map(As);
    se.debug(`Firestore (${Se}): ${n}`, ...e);
  }
}
function Lt(n, ...t) {
  if (se.logLevel <= q.ERROR) {
    const e = t.map(As);
    se.error(`Firestore (${Se}): ${n}`, ...e);
  }
}
function Ee(n, ...t) {
  if (se.logLevel <= q.WARN) {
    const e = t.map(As);
    se.warn(`Firestore (${Se}): ${n}`, ...e);
  }
}
function As(n) {
  if (typeof n == "string") return n;
  try {
    /**
    * @license
    * Copyright 2020 Google LLC
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
    return function(e) {
      return JSON.stringify(e);
    }(n);
  } catch {
    return n;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
function M(n = "Unexpected state") {
  const t = `FIRESTORE (${Se}) INTERNAL ASSERTION FAILED: ` + n;
  throw Lt(t), new Error(t);
}
function z(n, t) {
  n || M();
}
function F(n, t) {
  return n;
}
/**
 * @license
 * Copyright 2017 Google LLC
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
const P = {
  // Causes are copied from:
  // https://github.com/grpc/grpc/blob/bceec94ea4fc5f0085d81235d8e1c06798dc341a/include/grpc%2B%2B/impl/codegen/status_code_enum.h
  /** Not an error; returned on success. */
  OK: "ok",
  /** The operation was cancelled (typically by the caller). */
  CANCELLED: "cancelled",
  /** Unknown error or an error from a different error domain. */
  UNKNOWN: "unknown",
  /**
   * Client specified an invalid argument. Note that this differs from
   * FAILED_PRECONDITION. INVALID_ARGUMENT indicates arguments that are
   * problematic regardless of the state of the system (e.g., a malformed file
   * name).
   */
  INVALID_ARGUMENT: "invalid-argument",
  /**
   * Deadline expired before operation could complete. For operations that
   * change the state of the system, this error may be returned even if the
   * operation has completed successfully. For example, a successful response
   * from a server could have been delayed long enough for the deadline to
   * expire.
   */
  DEADLINE_EXCEEDED: "deadline-exceeded",
  /** Some requested entity (e.g., file or directory) was not found. */
  NOT_FOUND: "not-found",
  /**
   * Some entity that we attempted to create (e.g., file or directory) already
   * exists.
   */
  ALREADY_EXISTS: "already-exists",
  /**
   * The caller does not have permission to execute the specified operation.
   * PERMISSION_DENIED must not be used for rejections caused by exhausting
   * some resource (use RESOURCE_EXHAUSTED instead for those errors).
   * PERMISSION_DENIED must not be used if the caller cannot be identified
   * (use UNAUTHENTICATED instead for those errors).
   */
  PERMISSION_DENIED: "permission-denied",
  /**
   * The request does not have valid authentication credentials for the
   * operation.
   */
  UNAUTHENTICATED: "unauthenticated",
  /**
   * Some resource has been exhausted, perhaps a per-user quota, or perhaps the
   * entire file system is out of space.
   */
  RESOURCE_EXHAUSTED: "resource-exhausted",
  /**
   * Operation was rejected because the system is not in a state required for
   * the operation's execution. For example, directory to be deleted may be
   * non-empty, an rmdir operation is applied to a non-directory, etc.
   *
   * A litmus test that may help a service implementor in deciding
   * between FAILED_PRECONDITION, ABORTED, and UNAVAILABLE:
   *  (a) Use UNAVAILABLE if the client can retry just the failing call.
   *  (b) Use ABORTED if the client should retry at a higher-level
   *      (e.g., restarting a read-modify-write sequence).
   *  (c) Use FAILED_PRECONDITION if the client should not retry until
   *      the system state has been explicitly fixed. E.g., if an "rmdir"
   *      fails because the directory is non-empty, FAILED_PRECONDITION
   *      should be returned since the client should not retry unless
   *      they have first fixed up the directory by deleting files from it.
   *  (d) Use FAILED_PRECONDITION if the client performs conditional
   *      REST Get/Update/Delete on a resource and the resource on the
   *      server does not match the condition. E.g., conflicting
   *      read-modify-write on the same resource.
   */
  FAILED_PRECONDITION: "failed-precondition",
  /**
   * The operation was aborted, typically due to a concurrency issue like
   * sequencer check failures, transaction aborts, etc.
   *
   * See litmus test above for deciding between FAILED_PRECONDITION, ABORTED,
   * and UNAVAILABLE.
   */
  ABORTED: "aborted",
  /**
   * Operation was attempted past the valid range. E.g., seeking or reading
   * past end of file.
   *
   * Unlike INVALID_ARGUMENT, this error indicates a problem that may be fixed
   * if the system state changes. For example, a 32-bit file system will
   * generate INVALID_ARGUMENT if asked to read at an offset that is not in the
   * range [0,2^32-1], but it will generate OUT_OF_RANGE if asked to read from
   * an offset past the current file size.
   *
   * There is a fair bit of overlap between FAILED_PRECONDITION and
   * OUT_OF_RANGE. We recommend using OUT_OF_RANGE (the more specific error)
   * when it applies so that callers who are iterating through a space can
   * easily look for an OUT_OF_RANGE error to detect when they are done.
   */
  OUT_OF_RANGE: "out-of-range",
  /** Operation is not implemented or not supported/enabled in this service. */
  UNIMPLEMENTED: "unimplemented",
  /**
   * Internal errors. Means some invariants expected by underlying System has
   * been broken. If you see one of these errors, Something is very broken.
   */
  INTERNAL: "internal",
  /**
   * The service is currently unavailable. This is a most likely a transient
   * condition and may be corrected by retrying with a backoff.
   *
   * See litmus test above for deciding between FAILED_PRECONDITION, ABORTED,
   * and UNAVAILABLE.
   */
  UNAVAILABLE: "unavailable",
  /** Unrecoverable data loss or corruption. */
  DATA_LOSS: "data-loss"
};
class N extends Pe {
  /** @hideconstructor */
  constructor(t, e) {
    super(t, e), this.code = t, this.message = e, // HACK: We write a toString property directly because Error is not a real
    // class and so inheritance does not work correctly. We could alternatively
    // do the same "back-door inheritance" trick that FirebaseError does.
    this.toString = () => `${this.name}: [code=${this.code}]: ${this.message}`;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class Gt {
  constructor() {
    this.promise = new Promise((t, e) => {
      this.resolve = t, this.reject = e;
    });
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class pa {
  constructor(t, e) {
    this.user = e, this.type = "OAuth", this.headers = /* @__PURE__ */ new Map(), this.headers.set("Authorization", `Bearer ${t}`);
  }
}
class Hc {
  getToken() {
    return Promise.resolve(null);
  }
  invalidateToken() {
  }
  start(t, e) {
    t.enqueueRetryable(() => e(gt.UNAUTHENTICATED));
  }
  shutdown() {
  }
}
class Qc {
  constructor(t) {
    this.token = t, /**
     * Stores the listener registered with setChangeListener()
     * This isn't actually necessary since the UID never changes, but we use this
     * to verify the listen contract is adhered to in tests.
     */
    this.changeListener = null;
  }
  getToken() {
    return Promise.resolve(this.token);
  }
  invalidateToken() {
  }
  start(t, e) {
    this.changeListener = e, // Fire with initial user.
    t.enqueueRetryable(() => e(this.token.user));
  }
  shutdown() {
    this.changeListener = null;
  }
}
class Yc {
  constructor(t) {
    this.t = t, /** Tracks the current User. */
    this.currentUser = gt.UNAUTHENTICATED, /**
     * Counter used to detect if the token changed while a getToken request was
     * outstanding.
     */
    this.i = 0, this.forceRefresh = !1, this.auth = null;
  }
  start(t, e) {
    z(this.o === void 0);
    let r = this.i;
    const i = (h) => this.i !== r ? (r = this.i, e(h)) : Promise.resolve();
    let o = new Gt();
    this.o = () => {
      this.i++, this.currentUser = this.u(), o.resolve(), o = new Gt(), t.enqueueRetryable(() => i(this.currentUser));
    };
    const u = () => {
      const h = o;
      t.enqueueRetryable(async () => {
        await h.promise, await i(this.currentUser);
      });
    }, c = (h) => {
      k("FirebaseAuthCredentialsProvider", "Auth detected"), this.auth = h, this.o && (this.auth.addAuthTokenListener(this.o), u());
    };
    this.t.onInit((h) => c(h)), // Our users can initialize Auth right after Firestore, so we give it
    // a chance to register itself with the component framework before we
    // determine whether to start up in unauthenticated mode.
    setTimeout(() => {
      if (!this.auth) {
        const h = this.t.getImmediate({
          optional: !0
        });
        h ? c(h) : (
          // If auth is still not available, proceed with `null` user
          (k("FirebaseAuthCredentialsProvider", "Auth not yet detected"), o.resolve(), o = new Gt())
        );
      }
    }, 0), u();
  }
  getToken() {
    const t = this.i, e = this.forceRefresh;
    return this.forceRefresh = !1, this.auth ? this.auth.getToken(e).then((r) => (
      // Cancel the request since the token changed while the request was
      // outstanding so the response is potentially for a previous user (which
      // user, we can't be sure).
      this.i !== t ? (k("FirebaseAuthCredentialsProvider", "getToken aborted due to token change."), this.getToken()) : r ? (z(typeof r.accessToken == "string"), new pa(r.accessToken, this.currentUser)) : null
    )) : Promise.resolve(null);
  }
  invalidateToken() {
    this.forceRefresh = !0;
  }
  shutdown() {
    this.auth && this.o && this.auth.removeAuthTokenListener(this.o), this.o = void 0;
  }
  // Auth.getUid() can return null even with a user logged in. It is because
  // getUid() is synchronous, but the auth code populating Uid is asynchronous.
  // This method should only be called in the AuthTokenListener callback
  // to guarantee to get the actual user.
  u() {
    const t = this.auth && this.auth.getUid();
    return z(t === null || typeof t == "string"), new gt(t);
  }
}
class Xc {
  constructor(t, e, r) {
    this.l = t, this.h = e, this.P = r, this.type = "FirstParty", this.user = gt.FIRST_PARTY, this.I = /* @__PURE__ */ new Map();
  }
  /**
   * Gets an authorization token, using a provided factory function, or return
   * null.
   */
  T() {
    return this.P ? this.P() : null;
  }
  get headers() {
    this.I.set("X-Goog-AuthUser", this.l);
    const t = this.T();
    return t && this.I.set("Authorization", t), this.h && this.I.set("X-Goog-Iam-Authorization-Token", this.h), this.I;
  }
}
class Jc {
  constructor(t, e, r) {
    this.l = t, this.h = e, this.P = r;
  }
  getToken() {
    return Promise.resolve(new Xc(this.l, this.h, this.P));
  }
  start(t, e) {
    t.enqueueRetryable(() => e(gt.FIRST_PARTY));
  }
  shutdown() {
  }
  invalidateToken() {
  }
}
class Zc {
  constructor(t) {
    this.value = t, this.type = "AppCheck", this.headers = /* @__PURE__ */ new Map(), t && t.length > 0 && this.headers.set("x-firebase-appcheck", this.value);
  }
}
class th {
  constructor(t) {
    this.A = t, this.forceRefresh = !1, this.appCheck = null, this.R = null;
  }
  start(t, e) {
    z(this.o === void 0);
    const r = (o) => {
      o.error != null && k("FirebaseAppCheckTokenProvider", `Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);
      const u = o.token !== this.R;
      return this.R = o.token, k("FirebaseAppCheckTokenProvider", `Received ${u ? "new" : "existing"} token.`), u ? e(o.token) : Promise.resolve();
    };
    this.o = (o) => {
      t.enqueueRetryable(() => r(o));
    };
    const i = (o) => {
      k("FirebaseAppCheckTokenProvider", "AppCheck detected"), this.appCheck = o, this.o && this.appCheck.addTokenListener(this.o);
    };
    this.A.onInit((o) => i(o)), // Our users can initialize AppCheck after Firestore, so we give it
    // a chance to register itself with the component framework.
    setTimeout(() => {
      if (!this.appCheck) {
        const o = this.A.getImmediate({
          optional: !0
        });
        o ? i(o) : (
          // If AppCheck is still not available, proceed without it.
          k("FirebaseAppCheckTokenProvider", "AppCheck not yet detected")
        );
      }
    }, 0);
  }
  getToken() {
    const t = this.forceRefresh;
    return this.forceRefresh = !1, this.appCheck ? this.appCheck.getToken(t).then((e) => e ? (z(typeof e.token == "string"), this.R = e.token, new Zc(e.token)) : null) : Promise.resolve(null);
  }
  invalidateToken() {
    this.forceRefresh = !0;
  }
  shutdown() {
    this.appCheck && this.o && this.appCheck.removeTokenListener(this.o), this.o = void 0;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
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
function eh(n) {
  const t = (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    typeof self < "u" && (self.crypto || self.msCrypto)
  ), e = new Uint8Array(n);
  if (t && typeof t.getRandomValues == "function") t.getRandomValues(e);
  else
    for (let r = 0; r < n; r++) e[r] = Math.floor(256 * Math.random());
  return e;
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class ma {
  static newId() {
    const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", e = Math.floor(256 / t.length) * t.length;
    let r = "";
    for (; r.length < 20; ) {
      const i = eh(40);
      for (let o = 0; o < i.length; ++o)
        r.length < 20 && i[o] < e && (r += t.charAt(i[o] % t.length));
    }
    return r;
  }
}
function $(n, t) {
  return n < t ? -1 : n > t ? 1 : 0;
}
function ve(n, t, e) {
  return n.length === t.length && n.every((r, i) => e(r, t[i]));
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class nt {
  /**
   * Creates a new timestamp.
   *
   * @param seconds - The number of seconds of UTC time since Unix epoch
   *     1970-01-01T00:00:00Z. Must be from 0001-01-01T00:00:00Z to
   *     9999-12-31T23:59:59Z inclusive.
   * @param nanoseconds - The non-negative fractions of a second at nanosecond
   *     resolution. Negative second values with fractions must still have
   *     non-negative nanoseconds values that count forward in time. Must be
   *     from 0 to 999,999,999 inclusive.
   */
  constructor(t, e) {
    if (this.seconds = t, this.nanoseconds = e, e < 0) throw new N(P.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + e);
    if (e >= 1e9) throw new N(P.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + e);
    if (t < -62135596800) throw new N(P.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t);
    if (t >= 253402300800) throw new N(P.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t);
  }
  /**
   * Creates a new timestamp with the current date, with millisecond precision.
   *
   * @returns a new timestamp representing the current date.
   */
  static now() {
    return nt.fromMillis(Date.now());
  }
  /**
   * Creates a new timestamp from the given date.
   *
   * @param date - The date to initialize the `Timestamp` from.
   * @returns A new `Timestamp` representing the same point in time as the given
   *     date.
   */
  static fromDate(t) {
    return nt.fromMillis(t.getTime());
  }
  /**
   * Creates a new timestamp from the given number of milliseconds.
   *
   * @param milliseconds - Number of milliseconds since Unix epoch
   *     1970-01-01T00:00:00Z.
   * @returns A new `Timestamp` representing the same point in time as the given
   *     number of milliseconds.
   */
  static fromMillis(t) {
    const e = Math.floor(t / 1e3), r = Math.floor(1e6 * (t - 1e3 * e));
    return new nt(e, r);
  }
  /**
   * Converts a `Timestamp` to a JavaScript `Date` object. This conversion
   * causes a loss of precision since `Date` objects only support millisecond
   * precision.
   *
   * @returns JavaScript `Date` object representing the same point in time as
   *     this `Timestamp`, with millisecond precision.
   */
  toDate() {
    return new Date(this.toMillis());
  }
  /**
   * Converts a `Timestamp` to a numeric timestamp (in milliseconds since
   * epoch). This operation causes a loss of precision.
   *
   * @returns The point in time corresponding to this timestamp, represented as
   *     the number of milliseconds since Unix epoch 1970-01-01T00:00:00Z.
   */
  toMillis() {
    return 1e3 * this.seconds + this.nanoseconds / 1e6;
  }
  _compareTo(t) {
    return this.seconds === t.seconds ? $(this.nanoseconds, t.nanoseconds) : $(this.seconds, t.seconds);
  }
  /**
   * Returns true if this `Timestamp` is equal to the provided one.
   *
   * @param other - The `Timestamp` to compare against.
   * @returns true if this `Timestamp` is equal to the provided one.
   */
  isEqual(t) {
    return t.seconds === this.seconds && t.nanoseconds === this.nanoseconds;
  }
  /** Returns a textual representation of this `Timestamp`. */
  toString() {
    return "Timestamp(seconds=" + this.seconds + ", nanoseconds=" + this.nanoseconds + ")";
  }
  /** Returns a JSON-serializable representation of this `Timestamp`. */
  toJSON() {
    return {
      seconds: this.seconds,
      nanoseconds: this.nanoseconds
    };
  }
  /**
   * Converts this object to a primitive string, which allows `Timestamp` objects
   * to be compared using the `>`, `<=`, `>=` and `>` operators.
   */
  valueOf() {
    const t = this.seconds - -62135596800;
    return String(t).padStart(12, "0") + "." + String(this.nanoseconds).padStart(9, "0");
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class L {
  constructor(t) {
    this.timestamp = t;
  }
  static fromTimestamp(t) {
    return new L(t);
  }
  static min() {
    return new L(new nt(0, 0));
  }
  static max() {
    return new L(new nt(253402300799, 999999999));
  }
  compareTo(t) {
    return this.timestamp._compareTo(t.timestamp);
  }
  isEqual(t) {
    return this.timestamp.isEqual(t.timestamp);
  }
  /** Returns a number representation of the version for use in spec tests. */
  toMicroseconds() {
    return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3;
  }
  toString() {
    return "SnapshotVersion(" + this.timestamp.toString() + ")";
  }
  toTimestamp() {
    return this.timestamp;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class an {
  constructor(t, e, r) {
    e === void 0 ? e = 0 : e > t.length && M(), r === void 0 ? r = t.length - e : r > t.length - e && M(), this.segments = t, this.offset = e, this.len = r;
  }
  get length() {
    return this.len;
  }
  isEqual(t) {
    return an.comparator(this, t) === 0;
  }
  child(t) {
    const e = this.segments.slice(this.offset, this.limit());
    return t instanceof an ? t.forEach((r) => {
      e.push(r);
    }) : e.push(t), this.construct(e);
  }
  /** The index of one past the last segment of the path. */
  limit() {
    return this.offset + this.length;
  }
  popFirst(t) {
    return t = t === void 0 ? 1 : t, this.construct(this.segments, this.offset + t, this.length - t);
  }
  popLast() {
    return this.construct(this.segments, this.offset, this.length - 1);
  }
  firstSegment() {
    return this.segments[this.offset];
  }
  lastSegment() {
    return this.get(this.length - 1);
  }
  get(t) {
    return this.segments[this.offset + t];
  }
  isEmpty() {
    return this.length === 0;
  }
  isPrefixOf(t) {
    if (t.length < this.length) return !1;
    for (let e = 0; e < this.length; e++) if (this.get(e) !== t.get(e)) return !1;
    return !0;
  }
  isImmediateParentOf(t) {
    if (this.length + 1 !== t.length) return !1;
    for (let e = 0; e < this.length; e++) if (this.get(e) !== t.get(e)) return !1;
    return !0;
  }
  forEach(t) {
    for (let e = this.offset, r = this.limit(); e < r; e++) t(this.segments[e]);
  }
  toArray() {
    return this.segments.slice(this.offset, this.limit());
  }
  static comparator(t, e) {
    const r = Math.min(t.length, e.length);
    for (let i = 0; i < r; i++) {
      const o = t.get(i), u = e.get(i);
      if (o < u) return -1;
      if (o > u) return 1;
    }
    return t.length < e.length ? -1 : t.length > e.length ? 1 : 0;
  }
}
class Y extends an {
  construct(t, e, r) {
    return new Y(t, e, r);
  }
  canonicalString() {
    return this.toArray().join("/");
  }
  toString() {
    return this.canonicalString();
  }
  /**
   * Returns a string representation of this path
   * where each path segment has been encoded with
   * `encodeURIComponent`.
   */
  toUriEncodedString() {
    return this.toArray().map(encodeURIComponent).join("/");
  }
  /**
   * Creates a resource path from the given slash-delimited string. If multiple
   * arguments are provided, all components are combined. Leading and trailing
   * slashes from all components are ignored.
   */
  static fromString(...t) {
    const e = [];
    for (const r of t) {
      if (r.indexOf("//") >= 0) throw new N(P.INVALID_ARGUMENT, `Invalid segment (${r}). Paths must not contain // in them.`);
      e.push(...r.split("/").filter((i) => i.length > 0));
    }
    return new Y(e);
  }
  static emptyPath() {
    return new Y([]);
  }
}
const nh = /^[_a-zA-Z][_a-zA-Z0-9]*$/;
class ut extends an {
  construct(t, e, r) {
    return new ut(t, e, r);
  }
  /**
   * Returns true if the string could be used as a segment in a field path
   * without escaping.
   */
  static isValidIdentifier(t) {
    return nh.test(t);
  }
  canonicalString() {
    return this.toArray().map((t) => (t = t.replace(/\\/g, "\\\\").replace(/`/g, "\\`"), ut.isValidIdentifier(t) || (t = "`" + t + "`"), t)).join(".");
  }
  toString() {
    return this.canonicalString();
  }
  /**
   * Returns true if this field references the key of a document.
   */
  isKeyField() {
    return this.length === 1 && this.get(0) === "__name__";
  }
  /**
   * The field designating the key of a document.
   */
  static keyField() {
    return new ut(["__name__"]);
  }
  /**
   * Parses a field string from the given server-formatted string.
   *
   * - Splitting the empty string is not allowed (for now at least).
   * - Empty segments within the string (e.g. if there are two consecutive
   *   separators) are not allowed.
   *
   * TODO(b/37244157): we should make this more strict. Right now, it allows
   * non-identifier path components, even if they aren't escaped.
   */
  static fromServerFormat(t) {
    const e = [];
    let r = "", i = 0;
    const o = () => {
      if (r.length === 0) throw new N(P.INVALID_ARGUMENT, `Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);
      e.push(r), r = "";
    };
    let u = !1;
    for (; i < t.length; ) {
      const c = t[i];
      if (c === "\\") {
        if (i + 1 === t.length) throw new N(P.INVALID_ARGUMENT, "Path has trailing escape character: " + t);
        const h = t[i + 1];
        if (h !== "\\" && h !== "." && h !== "`") throw new N(P.INVALID_ARGUMENT, "Path has invalid escape sequence: " + t);
        r += h, i += 2;
      } else c === "`" ? (u = !u, i++) : c !== "." || u ? (r += c, i++) : (o(), i++);
    }
    if (o(), u) throw new N(P.INVALID_ARGUMENT, "Unterminated ` in path: " + t);
    return new ut(e);
  }
  static emptyPath() {
    return new ut([]);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class x {
  constructor(t) {
    this.path = t;
  }
  static fromPath(t) {
    return new x(Y.fromString(t));
  }
  static fromName(t) {
    return new x(Y.fromString(t).popFirst(5));
  }
  static empty() {
    return new x(Y.emptyPath());
  }
  get collectionGroup() {
    return this.path.popLast().lastSegment();
  }
  /** Returns true if the document is in the specified collectionId. */
  hasCollectionId(t) {
    return this.path.length >= 2 && this.path.get(this.path.length - 2) === t;
  }
  /** Returns the collection group (i.e. the name of the parent collection) for this key. */
  getCollectionGroup() {
    return this.path.get(this.path.length - 2);
  }
  /** Returns the fully qualified path to the parent collection. */
  getCollectionPath() {
    return this.path.popLast();
  }
  isEqual(t) {
    return t !== null && Y.comparator(this.path, t.path) === 0;
  }
  toString() {
    return this.path.toString();
  }
  static comparator(t, e) {
    return Y.comparator(t.path, e.path);
  }
  static isDocumentKey(t) {
    return t.length % 2 == 0;
  }
  /**
   * Creates and returns a new document key with the given segments.
   *
   * @param segments - The segments of the path to the document
   * @returns A new instance of DocumentKey
   */
  static fromSegments(t) {
    return new x(new Y(t.slice()));
  }
}
function rh(n, t) {
  const e = n.toTimestamp().seconds, r = n.toTimestamp().nanoseconds + 1, i = L.fromTimestamp(r === 1e9 ? new nt(e + 1, 0) : new nt(e, r));
  return new Ht(i, x.empty(), t);
}
function sh(n) {
  return new Ht(n.readTime, n.key, -1);
}
class Ht {
  constructor(t, e, r) {
    this.readTime = t, this.documentKey = e, this.largestBatchId = r;
  }
  /** Returns an offset that sorts before all regular offsets. */
  static min() {
    return new Ht(L.min(), x.empty(), -1);
  }
  /** Returns an offset that sorts after all regular offsets. */
  static max() {
    return new Ht(L.max(), x.empty(), -1);
  }
}
function ih(n, t) {
  let e = n.readTime.compareTo(t.readTime);
  return e !== 0 ? e : (e = x.comparator(n.documentKey, t.documentKey), e !== 0 ? e : $(n.largestBatchId, t.largestBatchId));
}
/**
 * @license
 * Copyright 2020 Google LLC
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
const oh = "The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";
class ah {
  constructor() {
    this.onCommittedListeners = [];
  }
  addOnCommittedListener(t) {
    this.onCommittedListeners.push(t);
  }
  raiseOnCommittedEvent() {
    this.onCommittedListeners.forEach((t) => t());
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
async function fn(n) {
  if (n.code !== P.FAILED_PRECONDITION || n.message !== oh) throw n;
  k("LocalStore", "Unexpectedly lost primary lease");
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class S {
  constructor(t) {
    this.nextCallback = null, this.catchCallback = null, // When the operation resolves, we'll set result or error and mark isDone.
    this.result = void 0, this.error = void 0, this.isDone = !1, // Set to true when .then() or .catch() are called and prevents additional
    // chaining.
    this.callbackAttached = !1, t((e) => {
      this.isDone = !0, this.result = e, this.nextCallback && // value should be defined unless T is Void, but we can't express
      // that in the type system.
      this.nextCallback(e);
    }, (e) => {
      this.isDone = !0, this.error = e, this.catchCallback && this.catchCallback(e);
    });
  }
  catch(t) {
    return this.next(void 0, t);
  }
  next(t, e) {
    return this.callbackAttached && M(), this.callbackAttached = !0, this.isDone ? this.error ? this.wrapFailure(e, this.error) : this.wrapSuccess(t, this.result) : new S((r, i) => {
      this.nextCallback = (o) => {
        this.wrapSuccess(t, o).next(r, i);
      }, this.catchCallback = (o) => {
        this.wrapFailure(e, o).next(r, i);
      };
    });
  }
  toPromise() {
    return new Promise((t, e) => {
      this.next(t, e);
    });
  }
  wrapUserFunction(t) {
    try {
      const e = t();
      return e instanceof S ? e : S.resolve(e);
    } catch (e) {
      return S.reject(e);
    }
  }
  wrapSuccess(t, e) {
    return t ? this.wrapUserFunction(() => t(e)) : S.resolve(e);
  }
  wrapFailure(t, e) {
    return t ? this.wrapUserFunction(() => t(e)) : S.reject(e);
  }
  static resolve(t) {
    return new S((e, r) => {
      e(t);
    });
  }
  static reject(t) {
    return new S((e, r) => {
      r(t);
    });
  }
  static waitFor(t) {
    return new S((e, r) => {
      let i = 0, o = 0, u = !1;
      t.forEach((c) => {
        ++i, c.next(() => {
          ++o, u && o === i && e();
        }, (h) => r(h));
      }), u = !0, o === i && e();
    });
  }
  /**
   * Given an array of predicate functions that asynchronously evaluate to a
   * boolean, implements a short-circuiting `or` between the results. Predicates
   * will be evaluated until one of them returns `true`, then stop. The final
   * result will be whether any of them returned `true`.
   */
  static or(t) {
    let e = S.resolve(!1);
    for (const r of t) e = e.next((i) => i ? S.resolve(i) : r());
    return e;
  }
  static forEach(t, e) {
    const r = [];
    return t.forEach((i, o) => {
      r.push(e.call(this, i, o));
    }), this.waitFor(r);
  }
  /**
   * Concurrently map all array elements through asynchronous function.
   */
  static mapArray(t, e) {
    return new S((r, i) => {
      const o = t.length, u = new Array(o);
      let c = 0;
      for (let h = 0; h < o; h++) {
        const f = h;
        e(t[f]).next((m) => {
          u[f] = m, ++c, c === o && r(u);
        }, (m) => i(m));
      }
    });
  }
  /**
   * An alternative to recursive PersistencePromise calls, that avoids
   * potential memory problems from unbounded chains of promises.
   *
   * The `action` will be called repeatedly while `condition` is true.
   */
  static doWhile(t, e) {
    return new S((r, i) => {
      const o = () => {
        t() === !0 ? e().next(() => {
          o();
        }, i) : r();
      };
      o();
    });
  }
}
function uh(n) {
  const t = n.match(/Android ([\d.]+)/i), e = t ? t[1].split(".").slice(0, 2).join(".") : "-1";
  return Number(e);
}
function pn(n) {
  return n.name === "IndexedDbTransactionError";
}
/**
 * @license
 * Copyright 2018 Google LLC
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
class Rs {
  constructor(t, e) {
    this.previousValue = t, e && (e.sequenceNumberHandler = (r) => this.ie(r), this.se = (r) => e.writeSequenceNumber(r));
  }
  ie(t) {
    return this.previousValue = Math.max(t, this.previousValue), this.previousValue;
  }
  next() {
    const t = ++this.previousValue;
    return this.se && this.se(t), t;
  }
}
Rs.oe = -1;
function lr(n) {
  return n == null;
}
function Zn(n) {
  return n === 0 && 1 / n == -1 / 0;
}
function lh(n) {
  return typeof n == "number" && Number.isInteger(n) && !Zn(n) && n <= Number.MAX_SAFE_INTEGER && n >= Number.MIN_SAFE_INTEGER;
}
/**
 * @license
 * Copyright 2017 Google LLC
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
function po(n) {
  let t = 0;
  for (const e in n) Object.prototype.hasOwnProperty.call(n, e) && t++;
  return t;
}
function Ve(n, t) {
  for (const e in n) Object.prototype.hasOwnProperty.call(n, e) && t(e, n[e]);
}
function ga(n) {
  for (const t in n) if (Object.prototype.hasOwnProperty.call(n, t)) return !1;
  return !0;
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class X {
  constructor(t, e) {
    this.comparator = t, this.root = e || at.EMPTY;
  }
  // Returns a copy of the map, with the specified key/value added or replaced.
  insert(t, e) {
    return new X(this.comparator, this.root.insert(t, e, this.comparator).copy(null, null, at.BLACK, null, null));
  }
  // Returns a copy of the map, with the specified key removed.
  remove(t) {
    return new X(this.comparator, this.root.remove(t, this.comparator).copy(null, null, at.BLACK, null, null));
  }
  // Returns the value of the node with the given key, or null.
  get(t) {
    let e = this.root;
    for (; !e.isEmpty(); ) {
      const r = this.comparator(t, e.key);
      if (r === 0) return e.value;
      r < 0 ? e = e.left : r > 0 && (e = e.right);
    }
    return null;
  }
  // Returns the index of the element in this sorted map, or -1 if it doesn't
  // exist.
  indexOf(t) {
    let e = 0, r = this.root;
    for (; !r.isEmpty(); ) {
      const i = this.comparator(t, r.key);
      if (i === 0) return e + r.left.size;
      i < 0 ? r = r.left : (
        // Count all nodes left of the node plus the node itself
        (e += r.left.size + 1, r = r.right)
      );
    }
    return -1;
  }
  isEmpty() {
    return this.root.isEmpty();
  }
  // Returns the total number of nodes in the map.
  get size() {
    return this.root.size;
  }
  // Returns the minimum key in the map.
  minKey() {
    return this.root.minKey();
  }
  // Returns the maximum key in the map.
  maxKey() {
    return this.root.maxKey();
  }
  // Traverses the map in key order and calls the specified action function
  // for each key/value pair. If action returns true, traversal is aborted.
  // Returns the first truthy value returned by action, or the last falsey
  // value returned by action.
  inorderTraversal(t) {
    return this.root.inorderTraversal(t);
  }
  forEach(t) {
    this.inorderTraversal((e, r) => (t(e, r), !1));
  }
  toString() {
    const t = [];
    return this.inorderTraversal((e, r) => (t.push(`${e}:${r}`), !1)), `{${t.join(", ")}}`;
  }
  // Traverses the map in reverse key order and calls the specified action
  // function for each key/value pair. If action returns true, traversal is
  // aborted.
  // Returns the first truthy value returned by action, or the last falsey
  // value returned by action.
  reverseTraversal(t) {
    return this.root.reverseTraversal(t);
  }
  // Returns an iterator over the SortedMap.
  getIterator() {
    return new qn(this.root, null, this.comparator, !1);
  }
  getIteratorFrom(t) {
    return new qn(this.root, t, this.comparator, !1);
  }
  getReverseIterator() {
    return new qn(this.root, null, this.comparator, !0);
  }
  getReverseIteratorFrom(t) {
    return new qn(this.root, t, this.comparator, !0);
  }
}
class qn {
  constructor(t, e, r, i) {
    this.isReverse = i, this.nodeStack = [];
    let o = 1;
    for (; !t.isEmpty(); ) if (o = e ? r(t.key, e) : 1, // flip the comparison if we're going in reverse
    e && i && (o *= -1), o < 0)
      t = this.isReverse ? t.left : t.right;
    else {
      if (o === 0) {
        this.nodeStack.push(t);
        break;
      }
      this.nodeStack.push(t), t = this.isReverse ? t.right : t.left;
    }
  }
  getNext() {
    let t = this.nodeStack.pop();
    const e = {
      key: t.key,
      value: t.value
    };
    if (this.isReverse) for (t = t.left; !t.isEmpty(); ) this.nodeStack.push(t), t = t.right;
    else for (t = t.right; !t.isEmpty(); ) this.nodeStack.push(t), t = t.left;
    return e;
  }
  hasNext() {
    return this.nodeStack.length > 0;
  }
  peek() {
    if (this.nodeStack.length === 0) return null;
    const t = this.nodeStack[this.nodeStack.length - 1];
    return {
      key: t.key,
      value: t.value
    };
  }
}
class at {
  constructor(t, e, r, i, o) {
    this.key = t, this.value = e, this.color = r ?? at.RED, this.left = i ?? at.EMPTY, this.right = o ?? at.EMPTY, this.size = this.left.size + 1 + this.right.size;
  }
  // Returns a copy of the current node, optionally replacing pieces of it.
  copy(t, e, r, i, o) {
    return new at(t ?? this.key, e ?? this.value, r ?? this.color, i ?? this.left, o ?? this.right);
  }
  isEmpty() {
    return !1;
  }
  // Traverses the tree in key order and calls the specified action function
  // for each node. If action returns true, traversal is aborted.
  // Returns the first truthy value returned by action, or the last falsey
  // value returned by action.
  inorderTraversal(t) {
    return this.left.inorderTraversal(t) || t(this.key, this.value) || this.right.inorderTraversal(t);
  }
  // Traverses the tree in reverse key order and calls the specified action
  // function for each node. If action returns true, traversal is aborted.
  // Returns the first truthy value returned by action, or the last falsey
  // value returned by action.
  reverseTraversal(t) {
    return this.right.reverseTraversal(t) || t(this.key, this.value) || this.left.reverseTraversal(t);
  }
  // Returns the minimum node in the tree.
  min() {
    return this.left.isEmpty() ? this : this.left.min();
  }
  // Returns the maximum key in the tree.
  minKey() {
    return this.min().key;
  }
  // Returns the maximum key in the tree.
  maxKey() {
    return this.right.isEmpty() ? this.key : this.right.maxKey();
  }
  // Returns new tree, with the key/value added.
  insert(t, e, r) {
    let i = this;
    const o = r(t, i.key);
    return i = o < 0 ? i.copy(null, null, null, i.left.insert(t, e, r), null) : o === 0 ? i.copy(null, e, null, null, null) : i.copy(null, null, null, null, i.right.insert(t, e, r)), i.fixUp();
  }
  removeMin() {
    if (this.left.isEmpty()) return at.EMPTY;
    let t = this;
    return t.left.isRed() || t.left.left.isRed() || (t = t.moveRedLeft()), t = t.copy(null, null, null, t.left.removeMin(), null), t.fixUp();
  }
  // Returns new tree, with the specified item removed.
  remove(t, e) {
    let r, i = this;
    if (e(t, i.key) < 0) i.left.isEmpty() || i.left.isRed() || i.left.left.isRed() || (i = i.moveRedLeft()), i = i.copy(null, null, null, i.left.remove(t, e), null);
    else {
      if (i.left.isRed() && (i = i.rotateRight()), i.right.isEmpty() || i.right.isRed() || i.right.left.isRed() || (i = i.moveRedRight()), e(t, i.key) === 0) {
        if (i.right.isEmpty()) return at.EMPTY;
        r = i.right.min(), i = i.copy(r.key, r.value, null, null, i.right.removeMin());
      }
      i = i.copy(null, null, null, null, i.right.remove(t, e));
    }
    return i.fixUp();
  }
  isRed() {
    return this.color;
  }
  // Returns new tree after performing any needed rotations.
  fixUp() {
    let t = this;
    return t.right.isRed() && !t.left.isRed() && (t = t.rotateLeft()), t.left.isRed() && t.left.left.isRed() && (t = t.rotateRight()), t.left.isRed() && t.right.isRed() && (t = t.colorFlip()), t;
  }
  moveRedLeft() {
    let t = this.colorFlip();
    return t.right.left.isRed() && (t = t.copy(null, null, null, null, t.right.rotateRight()), t = t.rotateLeft(), t = t.colorFlip()), t;
  }
  moveRedRight() {
    let t = this.colorFlip();
    return t.left.left.isRed() && (t = t.rotateRight(), t = t.colorFlip()), t;
  }
  rotateLeft() {
    const t = this.copy(null, null, at.RED, null, this.right.left);
    return this.right.copy(null, null, this.color, t, null);
  }
  rotateRight() {
    const t = this.copy(null, null, at.RED, this.left.right, null);
    return this.left.copy(null, null, this.color, null, t);
  }
  colorFlip() {
    const t = this.left.copy(null, null, !this.left.color, null, null), e = this.right.copy(null, null, !this.right.color, null, null);
    return this.copy(null, null, !this.color, t, e);
  }
  // For testing.
  checkMaxDepth() {
    const t = this.check();
    return Math.pow(2, t) <= this.size + 1;
  }
  // In a balanced RB tree, the black-depth (number of black nodes) from root to
  // leaves is equal on both sides.  This function verifies that or asserts.
  check() {
    if (this.isRed() && this.left.isRed() || this.right.isRed()) throw M();
    const t = this.left.check();
    if (t !== this.right.check()) throw M();
    return t + (this.isRed() ? 0 : 1);
  }
}
at.EMPTY = null, at.RED = !0, at.BLACK = !1;
at.EMPTY = new // Represents an empty node (a leaf node in the Red-Black Tree).
class {
  constructor() {
    this.size = 0;
  }
  get key() {
    throw M();
  }
  get value() {
    throw M();
  }
  get color() {
    throw M();
  }
  get left() {
    throw M();
  }
  get right() {
    throw M();
  }
  // Returns a copy of the current node.
  copy(t, e, r, i, o) {
    return this;
  }
  // Returns a copy of the tree, with the specified key/value added.
  insert(t, e, r) {
    return new at(t, e);
  }
  // Returns a copy of the tree, with the specified key removed.
  remove(t, e) {
    return this;
  }
  isEmpty() {
    return !0;
  }
  inorderTraversal(t) {
    return !1;
  }
  reverseTraversal(t) {
    return !1;
  }
  minKey() {
    return null;
  }
  maxKey() {
    return null;
  }
  isRed() {
    return !1;
  }
  // For testing.
  checkMaxDepth() {
    return !0;
  }
  check() {
    return 0;
  }
}();
/**
 * @license
 * Copyright 2017 Google LLC
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
class lt {
  constructor(t) {
    this.comparator = t, this.data = new X(this.comparator);
  }
  has(t) {
    return this.data.get(t) !== null;
  }
  first() {
    return this.data.minKey();
  }
  last() {
    return this.data.maxKey();
  }
  get size() {
    return this.data.size;
  }
  indexOf(t) {
    return this.data.indexOf(t);
  }
  /** Iterates elements in order defined by "comparator" */
  forEach(t) {
    this.data.inorderTraversal((e, r) => (t(e), !1));
  }
  /** Iterates over `elem`s such that: range[0] &lt;= elem &lt; range[1]. */
  forEachInRange(t, e) {
    const r = this.data.getIteratorFrom(t[0]);
    for (; r.hasNext(); ) {
      const i = r.getNext();
      if (this.comparator(i.key, t[1]) >= 0) return;
      e(i.key);
    }
  }
  /**
   * Iterates over `elem`s such that: start &lt;= elem until false is returned.
   */
  forEachWhile(t, e) {
    let r;
    for (r = e !== void 0 ? this.data.getIteratorFrom(e) : this.data.getIterator(); r.hasNext(); )
      if (!t(r.getNext().key)) return;
  }
  /** Finds the least element greater than or equal to `elem`. */
  firstAfterOrEqual(t) {
    const e = this.data.getIteratorFrom(t);
    return e.hasNext() ? e.getNext().key : null;
  }
  getIterator() {
    return new mo(this.data.getIterator());
  }
  getIteratorFrom(t) {
    return new mo(this.data.getIteratorFrom(t));
  }
  /** Inserts or updates an element */
  add(t) {
    return this.copy(this.data.remove(t).insert(t, !0));
  }
  /** Deletes an element */
  delete(t) {
    return this.has(t) ? this.copy(this.data.remove(t)) : this;
  }
  isEmpty() {
    return this.data.isEmpty();
  }
  unionWith(t) {
    let e = this;
    return e.size < t.size && (e = t, t = this), t.forEach((r) => {
      e = e.add(r);
    }), e;
  }
  isEqual(t) {
    if (!(t instanceof lt) || this.size !== t.size) return !1;
    const e = this.data.getIterator(), r = t.data.getIterator();
    for (; e.hasNext(); ) {
      const i = e.getNext().key, o = r.getNext().key;
      if (this.comparator(i, o) !== 0) return !1;
    }
    return !0;
  }
  toArray() {
    const t = [];
    return this.forEach((e) => {
      t.push(e);
    }), t;
  }
  toString() {
    const t = [];
    return this.forEach((e) => t.push(e)), "SortedSet(" + t.toString() + ")";
  }
  copy(t) {
    const e = new lt(this.comparator);
    return e.data = t, e;
  }
}
class mo {
  constructor(t) {
    this.iter = t;
  }
  getNext() {
    return this.iter.getNext().key;
  }
  hasNext() {
    return this.iter.hasNext();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
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
class At {
  constructor(t) {
    this.fields = t, // TODO(dimond): validation of FieldMask
    // Sort the field mask to support `FieldMask.isEqual()` and assert below.
    t.sort(ut.comparator);
  }
  static empty() {
    return new At([]);
  }
  /**
   * Returns a new FieldMask object that is the result of adding all the given
   * fields paths to this field mask.
   */
  unionWith(t) {
    let e = new lt(ut.comparator);
    for (const r of this.fields) e = e.add(r);
    for (const r of t) e = e.add(r);
    return new At(e.toArray());
  }
  /**
   * Verifies that `fieldPath` is included by at least one field in this field
   * mask.
   *
   * This is an O(n) operation, where `n` is the size of the field mask.
   */
  covers(t) {
    for (const e of this.fields) if (e.isPrefixOf(t)) return !0;
    return !1;
  }
  isEqual(t) {
    return ve(this.fields, t.fields, (e, r) => e.isEqual(r));
  }
}
/**
 * @license
 * Copyright 2023 Google LLC
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
class _a extends Error {
  constructor() {
    super(...arguments), this.name = "Base64DecodeError";
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
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
class ct {
  constructor(t) {
    this.binaryString = t;
  }
  static fromBase64String(t) {
    const e = function(i) {
      try {
        return atob(i);
      } catch (o) {
        throw typeof DOMException < "u" && o instanceof DOMException ? new _a("Invalid base64 string: " + o) : o;
      }
    }(t);
    return new ct(e);
  }
  static fromUint8Array(t) {
    const e = (
      /**
      * Helper function to convert an Uint8array to a binary string.
      */
      function(i) {
        let o = "";
        for (let u = 0; u < i.length; ++u) o += String.fromCharCode(i[u]);
        return o;
      }(t)
    );
    return new ct(e);
  }
  [Symbol.iterator]() {
    let t = 0;
    return {
      next: () => t < this.binaryString.length ? {
        value: this.binaryString.charCodeAt(t++),
        done: !1
      } : {
        value: void 0,
        done: !0
      }
    };
  }
  toBase64() {
    return function(e) {
      return btoa(e);
    }(this.binaryString);
  }
  toUint8Array() {
    return function(e) {
      const r = new Uint8Array(e.length);
      for (let i = 0; i < e.length; i++) r[i] = e.charCodeAt(i);
      return r;
    }(this.binaryString);
  }
  approximateByteSize() {
    return 2 * this.binaryString.length;
  }
  compareTo(t) {
    return $(this.binaryString, t.binaryString);
  }
  isEqual(t) {
    return this.binaryString === t.binaryString;
  }
}
ct.EMPTY_BYTE_STRING = new ct("");
const ch = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);
function Qt(n) {
  if (z(!!n), typeof n == "string") {
    let t = 0;
    const e = ch.exec(n);
    if (z(!!e), e[1]) {
      let i = e[1];
      i = (i + "000000000").substr(0, 9), t = Number(i);
    }
    const r = new Date(n);
    return {
      seconds: Math.floor(r.getTime() / 1e3),
      nanos: t
    };
  }
  return {
    seconds: Z(n.seconds),
    nanos: Z(n.nanos)
  };
}
function Z(n) {
  return typeof n == "number" ? n : typeof n == "string" ? Number(n) : 0;
}
function ie(n) {
  return typeof n == "string" ? ct.fromBase64String(n) : ct.fromUint8Array(n);
}
/**
 * @license
 * Copyright 2020 Google LLC
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
function Ps(n) {
  var t, e;
  return ((e = (((t = n == null ? void 0 : n.mapValue) === null || t === void 0 ? void 0 : t.fields) || {}).__type__) === null || e === void 0 ? void 0 : e.stringValue) === "server_timestamp";
}
function Ss(n) {
  const t = n.mapValue.fields.__previous_value__;
  return Ps(t) ? Ss(t) : t;
}
function un(n) {
  const t = Qt(n.mapValue.fields.__local_write_time__.timestampValue);
  return new nt(t.seconds, t.nanos);
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class hh {
  /**
   * Constructs a DatabaseInfo using the provided host, databaseId and
   * persistenceKey.
   *
   * @param databaseId - The database to use.
   * @param appId - The Firebase App Id.
   * @param persistenceKey - A unique identifier for this Firestore's local
   * storage (used in conjunction with the databaseId).
   * @param host - The Firestore backend host to connect to.
   * @param ssl - Whether to use SSL when connecting.
   * @param forceLongPolling - Whether to use the forceLongPolling option
   * when using WebChannel as the network transport.
   * @param autoDetectLongPolling - Whether to use the detectBufferingProxy
   * option when using WebChannel as the network transport.
   * @param longPollingOptions Options that configure long-polling.
   * @param useFetchStreams Whether to use the Fetch API instead of
   * XMLHTTPRequest
   */
  constructor(t, e, r, i, o, u, c, h, f) {
    this.databaseId = t, this.appId = e, this.persistenceKey = r, this.host = i, this.ssl = o, this.forceLongPolling = u, this.autoDetectLongPolling = c, this.longPollingOptions = h, this.useFetchStreams = f;
  }
}
class ln {
  constructor(t, e) {
    this.projectId = t, this.database = e || "(default)";
  }
  static empty() {
    return new ln("", "");
  }
  get isDefaultDatabase() {
    return this.database === "(default)";
  }
  isEqual(t) {
    return t instanceof ln && t.projectId === this.projectId && t.database === this.database;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
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
const jn = {
  mapValue: {}
};
function oe(n) {
  return "nullValue" in n ? 0 : "booleanValue" in n ? 1 : "integerValue" in n || "doubleValue" in n ? 2 : "timestampValue" in n ? 3 : "stringValue" in n ? 5 : "bytesValue" in n ? 6 : "referenceValue" in n ? 7 : "geoPointValue" in n ? 8 : "arrayValue" in n ? 9 : "mapValue" in n ? Ps(n) ? 4 : fh(n) ? 9007199254740991 : dh(n) ? 10 : 11 : M();
}
function Vt(n, t) {
  if (n === t) return !0;
  const e = oe(n);
  if (e !== oe(t)) return !1;
  switch (e) {
    case 0:
    case 9007199254740991:
      return !0;
    case 1:
      return n.booleanValue === t.booleanValue;
    case 4:
      return un(n).isEqual(un(t));
    case 3:
      return function(i, o) {
        if (typeof i.timestampValue == "string" && typeof o.timestampValue == "string" && i.timestampValue.length === o.timestampValue.length)
          return i.timestampValue === o.timestampValue;
        const u = Qt(i.timestampValue), c = Qt(o.timestampValue);
        return u.seconds === c.seconds && u.nanos === c.nanos;
      }(n, t);
    case 5:
      return n.stringValue === t.stringValue;
    case 6:
      return function(i, o) {
        return ie(i.bytesValue).isEqual(ie(o.bytesValue));
      }(n, t);
    case 7:
      return n.referenceValue === t.referenceValue;
    case 8:
      return function(i, o) {
        return Z(i.geoPointValue.latitude) === Z(o.geoPointValue.latitude) && Z(i.geoPointValue.longitude) === Z(o.geoPointValue.longitude);
      }(n, t);
    case 2:
      return function(i, o) {
        if ("integerValue" in i && "integerValue" in o) return Z(i.integerValue) === Z(o.integerValue);
        if ("doubleValue" in i && "doubleValue" in o) {
          const u = Z(i.doubleValue), c = Z(o.doubleValue);
          return u === c ? Zn(u) === Zn(c) : isNaN(u) && isNaN(c);
        }
        return !1;
      }(n, t);
    case 9:
      return ve(n.arrayValue.values || [], t.arrayValue.values || [], Vt);
    case 10:
    case 11:
      return function(i, o) {
        const u = i.mapValue.fields || {}, c = o.mapValue.fields || {};
        if (po(u) !== po(c)) return !1;
        for (const h in u) if (u.hasOwnProperty(h) && (c[h] === void 0 || !Vt(u[h], c[h]))) return !1;
        return !0;
      }(n, t);
    default:
      return M();
  }
}
function cn(n, t) {
  return (n.values || []).find((e) => Vt(e, t)) !== void 0;
}
function Te(n, t) {
  if (n === t) return 0;
  const e = oe(n), r = oe(t);
  if (e !== r) return $(e, r);
  switch (e) {
    case 0:
    case 9007199254740991:
      return 0;
    case 1:
      return $(n.booleanValue, t.booleanValue);
    case 2:
      return function(o, u) {
        const c = Z(o.integerValue || o.doubleValue), h = Z(u.integerValue || u.doubleValue);
        return c < h ? -1 : c > h ? 1 : c === h ? 0 : (
          // one or both are NaN.
          isNaN(c) ? isNaN(h) ? 0 : -1 : 1
        );
      }(n, t);
    case 3:
      return go(n.timestampValue, t.timestampValue);
    case 4:
      return go(un(n), un(t));
    case 5:
      return $(n.stringValue, t.stringValue);
    case 6:
      return function(o, u) {
        const c = ie(o), h = ie(u);
        return c.compareTo(h);
      }(n.bytesValue, t.bytesValue);
    case 7:
      return function(o, u) {
        const c = o.split("/"), h = u.split("/");
        for (let f = 0; f < c.length && f < h.length; f++) {
          const m = $(c[f], h[f]);
          if (m !== 0) return m;
        }
        return $(c.length, h.length);
      }(n.referenceValue, t.referenceValue);
    case 8:
      return function(o, u) {
        const c = $(Z(o.latitude), Z(u.latitude));
        return c !== 0 ? c : $(Z(o.longitude), Z(u.longitude));
      }(n.geoPointValue, t.geoPointValue);
    case 9:
      return _o(n.arrayValue, t.arrayValue);
    case 10:
      return function(o, u) {
        var c, h, f, m;
        const w = o.fields || {}, R = u.fields || {}, V = (c = w.value) === null || c === void 0 ? void 0 : c.arrayValue, D = (h = R.value) === null || h === void 0 ? void 0 : h.arrayValue, O = $(((f = V == null ? void 0 : V.values) === null || f === void 0 ? void 0 : f.length) || 0, ((m = D == null ? void 0 : D.values) === null || m === void 0 ? void 0 : m.length) || 0);
        return O !== 0 ? O : _o(V, D);
      }(n.mapValue, t.mapValue);
    case 11:
      return function(o, u) {
        if (o === jn.mapValue && u === jn.mapValue) return 0;
        if (o === jn.mapValue) return 1;
        if (u === jn.mapValue) return -1;
        const c = o.fields || {}, h = Object.keys(c), f = u.fields || {}, m = Object.keys(f);
        h.sort(), m.sort();
        for (let w = 0; w < h.length && w < m.length; ++w) {
          const R = $(h[w], m[w]);
          if (R !== 0) return R;
          const V = Te(c[h[w]], f[m[w]]);
          if (V !== 0) return V;
        }
        return $(h.length, m.length);
      }(n.mapValue, t.mapValue);
    default:
      throw M();
  }
}
function go(n, t) {
  if (typeof n == "string" && typeof t == "string" && n.length === t.length) return $(n, t);
  const e = Qt(n), r = Qt(t), i = $(e.seconds, r.seconds);
  return i !== 0 ? i : $(e.nanos, r.nanos);
}
function _o(n, t) {
  const e = n.values || [], r = t.values || [];
  for (let i = 0; i < e.length && i < r.length; ++i) {
    const o = Te(e[i], r[i]);
    if (o) return o;
  }
  return $(e.length, r.length);
}
function Ie(n) {
  return us(n);
}
function us(n) {
  return "nullValue" in n ? "null" : "booleanValue" in n ? "" + n.booleanValue : "integerValue" in n ? "" + n.integerValue : "doubleValue" in n ? "" + n.doubleValue : "timestampValue" in n ? function(e) {
    const r = Qt(e);
    return `time(${r.seconds},${r.nanos})`;
  }(n.timestampValue) : "stringValue" in n ? n.stringValue : "bytesValue" in n ? function(e) {
    return ie(e).toBase64();
  }(n.bytesValue) : "referenceValue" in n ? function(e) {
    return x.fromName(e).toString();
  }(n.referenceValue) : "geoPointValue" in n ? function(e) {
    return `geo(${e.latitude},${e.longitude})`;
  }(n.geoPointValue) : "arrayValue" in n ? function(e) {
    let r = "[", i = !0;
    for (const o of e.values || []) i ? i = !1 : r += ",", r += us(o);
    return r + "]";
  }(n.arrayValue) : "mapValue" in n ? function(e) {
    const r = Object.keys(e.fields || {}).sort();
    let i = "{", o = !0;
    for (const u of r) o ? o = !1 : i += ",", i += `${u}:${us(e.fields[u])}`;
    return i + "}";
  }(n.mapValue) : M();
}
function yo(n, t) {
  return {
    referenceValue: `projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`
  };
}
function ls(n) {
  return !!n && "integerValue" in n;
}
function Vs(n) {
  return !!n && "arrayValue" in n;
}
function Eo(n) {
  return !!n && "nullValue" in n;
}
function vo(n) {
  return !!n && "doubleValue" in n && isNaN(Number(n.doubleValue));
}
function Gn(n) {
  return !!n && "mapValue" in n;
}
function dh(n) {
  var t, e;
  return ((e = (((t = n == null ? void 0 : n.mapValue) === null || t === void 0 ? void 0 : t.fields) || {}).__type__) === null || e === void 0 ? void 0 : e.stringValue) === "__vector__";
}
function tn(n) {
  if (n.geoPointValue) return {
    geoPointValue: Object.assign({}, n.geoPointValue)
  };
  if (n.timestampValue && typeof n.timestampValue == "object") return {
    timestampValue: Object.assign({}, n.timestampValue)
  };
  if (n.mapValue) {
    const t = {
      mapValue: {
        fields: {}
      }
    };
    return Ve(n.mapValue.fields, (e, r) => t.mapValue.fields[e] = tn(r)), t;
  }
  if (n.arrayValue) {
    const t = {
      arrayValue: {
        values: []
      }
    };
    for (let e = 0; e < (n.arrayValue.values || []).length; ++e) t.arrayValue.values[e] = tn(n.arrayValue.values[e]);
    return t;
  }
  return Object.assign({}, n);
}
function fh(n) {
  return (((n.mapValue || {}).fields || {}).__type__ || {}).stringValue === "__max__";
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class Tt {
  constructor(t) {
    this.value = t;
  }
  static empty() {
    return new Tt({
      mapValue: {}
    });
  }
  /**
   * Returns the value at the given path or null.
   *
   * @param path - the path to search
   * @returns The value at the path or null if the path is not set.
   */
  field(t) {
    if (t.isEmpty()) return this.value;
    {
      let e = this.value;
      for (let r = 0; r < t.length - 1; ++r) if (e = (e.mapValue.fields || {})[t.get(r)], !Gn(e)) return null;
      return e = (e.mapValue.fields || {})[t.lastSegment()], e || null;
    }
  }
  /**
   * Sets the field to the provided value.
   *
   * @param path - The field path to set.
   * @param value - The value to set.
   */
  set(t, e) {
    this.getFieldsMap(t.popLast())[t.lastSegment()] = tn(e);
  }
  /**
   * Sets the provided fields to the provided values.
   *
   * @param data - A map of fields to values (or null for deletes).
   */
  setAll(t) {
    let e = ut.emptyPath(), r = {}, i = [];
    t.forEach((u, c) => {
      if (!e.isImmediateParentOf(c)) {
        const h = this.getFieldsMap(e);
        this.applyChanges(h, r, i), r = {}, i = [], e = c.popLast();
      }
      u ? r[c.lastSegment()] = tn(u) : i.push(c.lastSegment());
    });
    const o = this.getFieldsMap(e);
    this.applyChanges(o, r, i);
  }
  /**
   * Removes the field at the specified path. If there is no field at the
   * specified path, nothing is changed.
   *
   * @param path - The field path to remove.
   */
  delete(t) {
    const e = this.field(t.popLast());
    Gn(e) && e.mapValue.fields && delete e.mapValue.fields[t.lastSegment()];
  }
  isEqual(t) {
    return Vt(this.value, t.value);
  }
  /**
   * Returns the map that contains the leaf element of `path`. If the parent
   * entry does not yet exist, or if it is not a map, a new map will be created.
   */
  getFieldsMap(t) {
    let e = this.value;
    e.mapValue.fields || (e.mapValue = {
      fields: {}
    });
    for (let r = 0; r < t.length; ++r) {
      let i = e.mapValue.fields[t.get(r)];
      Gn(i) && i.mapValue.fields || (i = {
        mapValue: {
          fields: {}
        }
      }, e.mapValue.fields[t.get(r)] = i), e = i;
    }
    return e.mapValue.fields;
  }
  /**
   * Modifies `fieldsMap` by adding, replacing or deleting the specified
   * entries.
   */
  applyChanges(t, e, r) {
    Ve(e, (i, o) => t[i] = o);
    for (const i of r) delete t[i];
  }
  clone() {
    return new Tt(tn(this.value));
  }
}
function ya(n) {
  const t = [];
  return Ve(n.fields, (e, r) => {
    const i = new ut([e]);
    if (Gn(r)) {
      const o = ya(r.mapValue).fields;
      if (o.length === 0)
        t.push(i);
      else
        for (const u of o) t.push(i.child(u));
    } else
      t.push(i);
  }), new At(t);
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class _t {
  constructor(t, e, r, i, o, u, c) {
    this.key = t, this.documentType = e, this.version = r, this.readTime = i, this.createTime = o, this.data = u, this.documentState = c;
  }
  /**
   * Creates a document with no known version or data, but which can serve as
   * base document for mutations.
   */
  static newInvalidDocument(t) {
    return new _t(
      t,
      0,
      /* version */
      L.min(),
      /* readTime */
      L.min(),
      /* createTime */
      L.min(),
      Tt.empty(),
      0
      /* DocumentState.SYNCED */
    );
  }
  /**
   * Creates a new document that is known to exist with the given data at the
   * given version.
   */
  static newFoundDocument(t, e, r, i) {
    return new _t(
      t,
      1,
      /* version */
      e,
      /* readTime */
      L.min(),
      /* createTime */
      r,
      i,
      0
      /* DocumentState.SYNCED */
    );
  }
  /** Creates a new document that is known to not exist at the given version. */
  static newNoDocument(t, e) {
    return new _t(
      t,
      2,
      /* version */
      e,
      /* readTime */
      L.min(),
      /* createTime */
      L.min(),
      Tt.empty(),
      0
      /* DocumentState.SYNCED */
    );
  }
  /**
   * Creates a new document that is known to exist at the given version but
   * whose data is not known (e.g. a document that was updated without a known
   * base document).
   */
  static newUnknownDocument(t, e) {
    return new _t(
      t,
      3,
      /* version */
      e,
      /* readTime */
      L.min(),
      /* createTime */
      L.min(),
      Tt.empty(),
      2
      /* DocumentState.HAS_COMMITTED_MUTATIONS */
    );
  }
  /**
   * Changes the document type to indicate that it exists and that its version
   * and data are known.
   */
  convertToFoundDocument(t, e) {
    return !this.createTime.isEqual(L.min()) || this.documentType !== 2 && this.documentType !== 0 || (this.createTime = t), this.version = t, this.documentType = 1, this.data = e, this.documentState = 0, this;
  }
  /**
   * Changes the document type to indicate that it doesn't exist at the given
   * version.
   */
  convertToNoDocument(t) {
    return this.version = t, this.documentType = 2, this.data = Tt.empty(), this.documentState = 0, this;
  }
  /**
   * Changes the document type to indicate that it exists at a given version but
   * that its data is not known (e.g. a document that was updated without a known
   * base document).
   */
  convertToUnknownDocument(t) {
    return this.version = t, this.documentType = 3, this.data = Tt.empty(), this.documentState = 2, this;
  }
  setHasCommittedMutations() {
    return this.documentState = 2, this;
  }
  setHasLocalMutations() {
    return this.documentState = 1, this.version = L.min(), this;
  }
  setReadTime(t) {
    return this.readTime = t, this;
  }
  get hasLocalMutations() {
    return this.documentState === 1;
  }
  get hasCommittedMutations() {
    return this.documentState === 2;
  }
  get hasPendingWrites() {
    return this.hasLocalMutations || this.hasCommittedMutations;
  }
  isValidDocument() {
    return this.documentType !== 0;
  }
  isFoundDocument() {
    return this.documentType === 1;
  }
  isNoDocument() {
    return this.documentType === 2;
  }
  isUnknownDocument() {
    return this.documentType === 3;
  }
  isEqual(t) {
    return t instanceof _t && this.key.isEqual(t.key) && this.version.isEqual(t.version) && this.documentType === t.documentType && this.documentState === t.documentState && this.data.isEqual(t.data);
  }
  mutableCopy() {
    return new _t(this.key, this.documentType, this.version, this.readTime, this.createTime, this.data.clone(), this.documentState);
  }
  toString() {
    return `Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`;
  }
}
/**
 * @license
 * Copyright 2022 Google LLC
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
class tr {
  constructor(t, e) {
    this.position = t, this.inclusive = e;
  }
}
function To(n, t, e) {
  let r = 0;
  for (let i = 0; i < n.position.length; i++) {
    const o = t[i], u = n.position[i];
    if (o.field.isKeyField() ? r = x.comparator(x.fromName(u.referenceValue), e.key) : r = Te(u, e.data.field(o.field)), o.dir === "desc" && (r *= -1), r !== 0) break;
  }
  return r;
}
function Io(n, t) {
  if (n === null) return t === null;
  if (t === null || n.inclusive !== t.inclusive || n.position.length !== t.position.length) return !1;
  for (let e = 0; e < n.position.length; e++)
    if (!Vt(n.position[e], t.position[e])) return !1;
  return !0;
}
/**
 * @license
 * Copyright 2022 Google LLC
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
class er {
  constructor(t, e = "asc") {
    this.field = t, this.dir = e;
  }
}
function ph(n, t) {
  return n.dir === t.dir && n.field.isEqual(t.field);
}
/**
 * @license
 * Copyright 2022 Google LLC
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
class Ea {
}
class et extends Ea {
  constructor(t, e, r) {
    super(), this.field = t, this.op = e, this.value = r;
  }
  /**
   * Creates a filter based on the provided arguments.
   */
  static create(t, e, r) {
    return t.isKeyField() ? e === "in" || e === "not-in" ? this.createKeyFieldInFilter(t, e, r) : new gh(t, e, r) : e === "array-contains" ? new Eh(t, r) : e === "in" ? new vh(t, r) : e === "not-in" ? new Th(t, r) : e === "array-contains-any" ? new Ih(t, r) : new et(t, e, r);
  }
  static createKeyFieldInFilter(t, e, r) {
    return e === "in" ? new _h(t, r) : new yh(t, r);
  }
  matches(t) {
    const e = t.data.field(this.field);
    return this.op === "!=" ? e !== null && this.matchesComparison(Te(e, this.value)) : e !== null && oe(this.value) === oe(e) && this.matchesComparison(Te(e, this.value));
  }
  matchesComparison(t) {
    switch (this.op) {
      case "<":
        return t < 0;
      case "<=":
        return t <= 0;
      case "==":
        return t === 0;
      case "!=":
        return t !== 0;
      case ">":
        return t > 0;
      case ">=":
        return t >= 0;
      default:
        return M();
    }
  }
  isInequality() {
    return [
      "<",
      "<=",
      ">",
      ">=",
      "!=",
      "not-in"
      /* Operator.NOT_IN */
    ].indexOf(this.op) >= 0;
  }
  getFlattenedFilters() {
    return [this];
  }
  getFilters() {
    return [this];
  }
}
class Rt extends Ea {
  constructor(t, e) {
    super(), this.filters = t, this.op = e, this.ae = null;
  }
  /**
   * Creates a filter based on the provided arguments.
   */
  static create(t, e) {
    return new Rt(t, e);
  }
  matches(t) {
    return va(this) ? this.filters.find((e) => !e.matches(t)) === void 0 : this.filters.find((e) => e.matches(t)) !== void 0;
  }
  getFlattenedFilters() {
    return this.ae !== null || (this.ae = this.filters.reduce((t, e) => t.concat(e.getFlattenedFilters()), [])), this.ae;
  }
  // Returns a mutable copy of `this.filters`
  getFilters() {
    return Object.assign([], this.filters);
  }
}
function va(n) {
  return n.op === "and";
}
function Ta(n) {
  return mh(n) && va(n);
}
function mh(n) {
  for (const t of n.filters) if (t instanceof Rt) return !1;
  return !0;
}
function cs(n) {
  if (n instanceof et)
    return n.field.canonicalString() + n.op.toString() + Ie(n.value);
  if (Ta(n))
    return n.filters.map((t) => cs(t)).join(",");
  {
    const t = n.filters.map((e) => cs(e)).join(",");
    return `${n.op}(${t})`;
  }
}
function Ia(n, t) {
  return n instanceof et ? function(r, i) {
    return i instanceof et && r.op === i.op && r.field.isEqual(i.field) && Vt(r.value, i.value);
  }(n, t) : n instanceof Rt ? function(r, i) {
    return i instanceof Rt && r.op === i.op && r.filters.length === i.filters.length ? r.filters.reduce((o, u, c) => o && Ia(u, i.filters[c]), !0) : !1;
  }(n, t) : void M();
}
function wa(n) {
  return n instanceof et ? function(e) {
    return `${e.field.canonicalString()} ${e.op} ${Ie(e.value)}`;
  }(n) : n instanceof Rt ? function(e) {
    return e.op.toString() + " {" + e.getFilters().map(wa).join(" ,") + "}";
  }(n) : "Filter";
}
class gh extends et {
  constructor(t, e, r) {
    super(t, e, r), this.key = x.fromName(r.referenceValue);
  }
  matches(t) {
    const e = x.comparator(t.key, this.key);
    return this.matchesComparison(e);
  }
}
class _h extends et {
  constructor(t, e) {
    super(t, "in", e), this.keys = Aa("in", e);
  }
  matches(t) {
    return this.keys.some((e) => e.isEqual(t.key));
  }
}
class yh extends et {
  constructor(t, e) {
    super(t, "not-in", e), this.keys = Aa("not-in", e);
  }
  matches(t) {
    return !this.keys.some((e) => e.isEqual(t.key));
  }
}
function Aa(n, t) {
  var e;
  return (((e = t.arrayValue) === null || e === void 0 ? void 0 : e.values) || []).map((r) => x.fromName(r.referenceValue));
}
class Eh extends et {
  constructor(t, e) {
    super(t, "array-contains", e);
  }
  matches(t) {
    const e = t.data.field(this.field);
    return Vs(e) && cn(e.arrayValue, this.value);
  }
}
class vh extends et {
  constructor(t, e) {
    super(t, "in", e);
  }
  matches(t) {
    const e = t.data.field(this.field);
    return e !== null && cn(this.value.arrayValue, e);
  }
}
class Th extends et {
  constructor(t, e) {
    super(t, "not-in", e);
  }
  matches(t) {
    if (cn(this.value.arrayValue, {
      nullValue: "NULL_VALUE"
    })) return !1;
    const e = t.data.field(this.field);
    return e !== null && !cn(this.value.arrayValue, e);
  }
}
class Ih extends et {
  constructor(t, e) {
    super(t, "array-contains-any", e);
  }
  matches(t) {
    const e = t.data.field(this.field);
    return !(!Vs(e) || !e.arrayValue.values) && e.arrayValue.values.some((r) => cn(this.value.arrayValue, r));
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
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
class wh {
  constructor(t, e = null, r = [], i = [], o = null, u = null, c = null) {
    this.path = t, this.collectionGroup = e, this.orderBy = r, this.filters = i, this.limit = o, this.startAt = u, this.endAt = c, this.ue = null;
  }
}
function wo(n, t = null, e = [], r = [], i = null, o = null, u = null) {
  return new wh(n, t, e, r, i, o, u);
}
function Cs(n) {
  const t = F(n);
  if (t.ue === null) {
    let e = t.path.canonicalString();
    t.collectionGroup !== null && (e += "|cg:" + t.collectionGroup), e += "|f:", e += t.filters.map((r) => cs(r)).join(","), e += "|ob:", e += t.orderBy.map((r) => function(o) {
      return o.field.canonicalString() + o.dir;
    }(r)).join(","), lr(t.limit) || (e += "|l:", e += t.limit), t.startAt && (e += "|lb:", e += t.startAt.inclusive ? "b:" : "a:", e += t.startAt.position.map((r) => Ie(r)).join(",")), t.endAt && (e += "|ub:", e += t.endAt.inclusive ? "a:" : "b:", e += t.endAt.position.map((r) => Ie(r)).join(",")), t.ue = e;
  }
  return t.ue;
}
function bs(n, t) {
  if (n.limit !== t.limit || n.orderBy.length !== t.orderBy.length) return !1;
  for (let e = 0; e < n.orderBy.length; e++) if (!ph(n.orderBy[e], t.orderBy[e])) return !1;
  if (n.filters.length !== t.filters.length) return !1;
  for (let e = 0; e < n.filters.length; e++) if (!Ia(n.filters[e], t.filters[e])) return !1;
  return n.collectionGroup === t.collectionGroup && !!n.path.isEqual(t.path) && !!Io(n.startAt, t.startAt) && Io(n.endAt, t.endAt);
}
function hs(n) {
  return x.isDocumentKey(n.path) && n.collectionGroup === null && n.filters.length === 0;
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class mn {
  /**
   * Initializes a Query with a path and optional additional query constraints.
   * Path must currently be empty if this is a collection group query.
   */
  constructor(t, e = null, r = [], i = [], o = null, u = "F", c = null, h = null) {
    this.path = t, this.collectionGroup = e, this.explicitOrderBy = r, this.filters = i, this.limit = o, this.limitType = u, this.startAt = c, this.endAt = h, this.ce = null, // The corresponding `Target` of this `Query` instance, for use with
    // non-aggregate queries.
    this.le = null, // The corresponding `Target` of this `Query` instance, for use with
    // aggregate queries. Unlike targets for non-aggregate queries,
    // aggregate query targets do not contain normalized order-bys, they only
    // contain explicit order-bys.
    this.he = null, this.startAt, this.endAt;
  }
}
function Ah(n, t, e, r, i, o, u, c) {
  return new mn(n, t, e, r, i, o, u, c);
}
function Ra(n) {
  return new mn(n);
}
function Ao(n) {
  return n.filters.length === 0 && n.limit === null && n.startAt == null && n.endAt == null && (n.explicitOrderBy.length === 0 || n.explicitOrderBy.length === 1 && n.explicitOrderBy[0].field.isKeyField());
}
function Pa(n) {
  return n.collectionGroup !== null;
}
function en(n) {
  const t = F(n);
  if (t.ce === null) {
    t.ce = [];
    const e = /* @__PURE__ */ new Set();
    for (const o of t.explicitOrderBy) t.ce.push(o), e.add(o.field.canonicalString());
    const r = t.explicitOrderBy.length > 0 ? t.explicitOrderBy[t.explicitOrderBy.length - 1].dir : "asc";
    (function(u) {
      let c = new lt(ut.comparator);
      return u.filters.forEach((h) => {
        h.getFlattenedFilters().forEach((f) => {
          f.isInequality() && (c = c.add(f.field));
        });
      }), c;
    })(t).forEach((o) => {
      e.has(o.canonicalString()) || o.isKeyField() || t.ce.push(new er(o, r));
    }), // Add the document key field to the last if it is not explicitly ordered.
    e.has(ut.keyField().canonicalString()) || t.ce.push(new er(ut.keyField(), r));
  }
  return t.ce;
}
function Pt(n) {
  const t = F(n);
  return t.le || (t.le = Rh(t, en(n))), t.le;
}
function Rh(n, t) {
  if (n.limitType === "F") return wo(n.path, n.collectionGroup, t, n.filters, n.limit, n.startAt, n.endAt);
  {
    t = t.map((i) => {
      const o = i.dir === "desc" ? "asc" : "desc";
      return new er(i.field, o);
    });
    const e = n.endAt ? new tr(n.endAt.position, n.endAt.inclusive) : null, r = n.startAt ? new tr(n.startAt.position, n.startAt.inclusive) : null;
    return wo(n.path, n.collectionGroup, t, n.filters, n.limit, e, r);
  }
}
function ds(n, t) {
  const e = n.filters.concat([t]);
  return new mn(n.path, n.collectionGroup, n.explicitOrderBy.slice(), e, n.limit, n.limitType, n.startAt, n.endAt);
}
function fs(n, t, e) {
  return new mn(n.path, n.collectionGroup, n.explicitOrderBy.slice(), n.filters.slice(), t, e, n.startAt, n.endAt);
}
function cr(n, t) {
  return bs(Pt(n), Pt(t)) && n.limitType === t.limitType;
}
function Sa(n) {
  return `${Cs(Pt(n))}|lt:${n.limitType}`;
}
function fe(n) {
  return `Query(target=${function(e) {
    let r = e.path.canonicalString();
    return e.collectionGroup !== null && (r += " collectionGroup=" + e.collectionGroup), e.filters.length > 0 && (r += `, filters: [${e.filters.map((i) => wa(i)).join(", ")}]`), lr(e.limit) || (r += ", limit: " + e.limit), e.orderBy.length > 0 && (r += `, orderBy: [${e.orderBy.map((i) => function(u) {
      return `${u.field.canonicalString()} (${u.dir})`;
    }(i)).join(", ")}]`), e.startAt && (r += ", startAt: ", r += e.startAt.inclusive ? "b:" : "a:", r += e.startAt.position.map((i) => Ie(i)).join(",")), e.endAt && (r += ", endAt: ", r += e.endAt.inclusive ? "a:" : "b:", r += e.endAt.position.map((i) => Ie(i)).join(",")), `Target(${r})`;
  }(Pt(n))}; limitType=${n.limitType})`;
}
function hr(n, t) {
  return t.isFoundDocument() && function(r, i) {
    const o = i.key.path;
    return r.collectionGroup !== null ? i.key.hasCollectionId(r.collectionGroup) && r.path.isPrefixOf(o) : x.isDocumentKey(r.path) ? r.path.isEqual(o) : r.path.isImmediateParentOf(o);
  }(n, t) && function(r, i) {
    for (const o of en(r))
      if (!o.field.isKeyField() && i.data.field(o.field) === null) return !1;
    return !0;
  }(n, t) && function(r, i) {
    for (const o of r.filters) if (!o.matches(i)) return !1;
    return !0;
  }(n, t) && function(r, i) {
    return !(r.startAt && !/**
    * Returns true if a document sorts before a bound using the provided sort
    * order.
    */
    function(u, c, h) {
      const f = To(u, c, h);
      return u.inclusive ? f <= 0 : f < 0;
    }(r.startAt, en(r), i) || r.endAt && !function(u, c, h) {
      const f = To(u, c, h);
      return u.inclusive ? f >= 0 : f > 0;
    }(r.endAt, en(r), i));
  }(n, t);
}
function Ph(n) {
  return n.collectionGroup || (n.path.length % 2 == 1 ? n.path.lastSegment() : n.path.get(n.path.length - 2));
}
function Va(n) {
  return (t, e) => {
    let r = !1;
    for (const i of en(n)) {
      const o = Sh(i, t, e);
      if (o !== 0) return o;
      r = r || i.field.isKeyField();
    }
    return 0;
  };
}
function Sh(n, t, e) {
  const r = n.field.isKeyField() ? x.comparator(t.key, e.key) : function(o, u, c) {
    const h = u.data.field(o), f = c.data.field(o);
    return h !== null && f !== null ? Te(h, f) : M();
  }(n.field, t, e);
  switch (n.dir) {
    case "asc":
      return r;
    case "desc":
      return -1 * r;
    default:
      return M();
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class Ce {
  constructor(t, e) {
    this.mapKeyFn = t, this.equalsFn = e, /**
     * The inner map for a key/value pair. Due to the possibility of collisions we
     * keep a list of entries that we do a linear search through to find an actual
     * match. Note that collisions should be rare, so we still expect near
     * constant time lookups in practice.
     */
    this.inner = {}, /** The number of entries stored in the map */
    this.innerSize = 0;
  }
  /** Get a value for this key, or undefined if it does not exist. */
  get(t) {
    const e = this.mapKeyFn(t), r = this.inner[e];
    if (r !== void 0) {
      for (const [i, o] of r) if (this.equalsFn(i, t)) return o;
    }
  }
  has(t) {
    return this.get(t) !== void 0;
  }
  /** Put this key and value in the map. */
  set(t, e) {
    const r = this.mapKeyFn(t), i = this.inner[r];
    if (i === void 0) return this.inner[r] = [[t, e]], void this.innerSize++;
    for (let o = 0; o < i.length; o++) if (this.equalsFn(i[o][0], t))
      return void (i[o] = [t, e]);
    i.push([t, e]), this.innerSize++;
  }
  /**
   * Remove this key from the map. Returns a boolean if anything was deleted.
   */
  delete(t) {
    const e = this.mapKeyFn(t), r = this.inner[e];
    if (r === void 0) return !1;
    for (let i = 0; i < r.length; i++) if (this.equalsFn(r[i][0], t)) return r.length === 1 ? delete this.inner[e] : r.splice(i, 1), this.innerSize--, !0;
    return !1;
  }
  forEach(t) {
    Ve(this.inner, (e, r) => {
      for (const [i, o] of r) t(i, o);
    });
  }
  isEmpty() {
    return ga(this.inner);
  }
  size() {
    return this.innerSize;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
const Vh = new X(x.comparator);
function Ft() {
  return Vh;
}
const Ca = new X(x.comparator);
function Je(...n) {
  let t = Ca;
  for (const e of n) t = t.insert(e.key, e);
  return t;
}
function ba(n) {
  let t = Ca;
  return n.forEach((e, r) => t = t.insert(e, r.overlayedDocument)), t;
}
function ne() {
  return nn();
}
function Da() {
  return nn();
}
function nn() {
  return new Ce((n) => n.toString(), (n, t) => n.isEqual(t));
}
const Ch = new X(x.comparator), bh = new lt(x.comparator);
function U(...n) {
  let t = bh;
  for (const e of n) t = t.add(e);
  return t;
}
const Dh = new lt($);
function Nh() {
  return Dh;
}
/**
 * @license
 * Copyright 2020 Google LLC
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
function Ds(n, t) {
  if (n.useProto3Json) {
    if (isNaN(t)) return {
      doubleValue: "NaN"
    };
    if (t === 1 / 0) return {
      doubleValue: "Infinity"
    };
    if (t === -1 / 0) return {
      doubleValue: "-Infinity"
    };
  }
  return {
    doubleValue: Zn(t) ? "-0" : t
  };
}
function Na(n) {
  return {
    integerValue: "" + n
  };
}
function kh(n, t) {
  return lh(t) ? Na(t) : Ds(n, t);
}
/**
 * @license
 * Copyright 2018 Google LLC
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
class dr {
  constructor() {
    this._ = void 0;
  }
}
function xh(n, t, e) {
  return n instanceof nr ? function(i, o) {
    const u = {
      fields: {
        __type__: {
          stringValue: "server_timestamp"
        },
        __local_write_time__: {
          timestampValue: {
            seconds: i.seconds,
            nanos: i.nanoseconds
          }
        }
      }
    };
    return o && Ps(o) && (o = Ss(o)), o && (u.fields.__previous_value__ = o), {
      mapValue: u
    };
  }(e, t) : n instanceof hn ? xa(n, t) : n instanceof dn ? Oa(n, t) : function(i, o) {
    const u = ka(i, o), c = Ro(u) + Ro(i.Pe);
    return ls(u) && ls(i.Pe) ? Na(c) : Ds(i.serializer, c);
  }(n, t);
}
function Oh(n, t, e) {
  return n instanceof hn ? xa(n, t) : n instanceof dn ? Oa(n, t) : e;
}
function ka(n, t) {
  return n instanceof rr ? (
    /** Returns true if `value` is either an IntegerValue or a DoubleValue. */
    function(r) {
      return ls(r) || function(o) {
        return !!o && "doubleValue" in o;
      }(r);
    }(t) ? t : {
      integerValue: 0
    }
  ) : null;
}
class nr extends dr {
}
class hn extends dr {
  constructor(t) {
    super(), this.elements = t;
  }
}
function xa(n, t) {
  const e = Ma(t);
  for (const r of n.elements) e.some((i) => Vt(i, r)) || e.push(r);
  return {
    arrayValue: {
      values: e
    }
  };
}
class dn extends dr {
  constructor(t) {
    super(), this.elements = t;
  }
}
function Oa(n, t) {
  let e = Ma(t);
  for (const r of n.elements) e = e.filter((i) => !Vt(i, r));
  return {
    arrayValue: {
      values: e
    }
  };
}
class rr extends dr {
  constructor(t, e) {
    super(), this.serializer = t, this.Pe = e;
  }
}
function Ro(n) {
  return Z(n.integerValue || n.doubleValue);
}
function Ma(n) {
  return Vs(n) && n.arrayValue.values ? n.arrayValue.values.slice() : [];
}
function Mh(n, t) {
  return n.field.isEqual(t.field) && function(r, i) {
    return r instanceof hn && i instanceof hn || r instanceof dn && i instanceof dn ? ve(r.elements, i.elements, Vt) : r instanceof rr && i instanceof rr ? Vt(r.Pe, i.Pe) : r instanceof nr && i instanceof nr;
  }(n.transform, t.transform);
}
class Lh {
  constructor(t, e) {
    this.version = t, this.transformResults = e;
  }
}
class Ot {
  constructor(t, e) {
    this.updateTime = t, this.exists = e;
  }
  /** Creates a new empty Precondition. */
  static none() {
    return new Ot();
  }
  /** Creates a new Precondition with an exists flag. */
  static exists(t) {
    return new Ot(void 0, t);
  }
  /** Creates a new Precondition based on a version a document exists at. */
  static updateTime(t) {
    return new Ot(t);
  }
  /** Returns whether this Precondition is empty. */
  get isNone() {
    return this.updateTime === void 0 && this.exists === void 0;
  }
  isEqual(t) {
    return this.exists === t.exists && (this.updateTime ? !!t.updateTime && this.updateTime.isEqual(t.updateTime) : !t.updateTime);
  }
}
function Wn(n, t) {
  return n.updateTime !== void 0 ? t.isFoundDocument() && t.version.isEqual(n.updateTime) : n.exists === void 0 || n.exists === t.isFoundDocument();
}
class fr {
}
function La(n, t) {
  if (!n.hasLocalMutations || t && t.fields.length === 0) return null;
  if (t === null) return n.isNoDocument() ? new Ua(n.key, Ot.none()) : new gn(n.key, n.data, Ot.none());
  {
    const e = n.data, r = Tt.empty();
    let i = new lt(ut.comparator);
    for (let o of t.fields) if (!i.has(o)) {
      let u = e.field(o);
      u === null && o.length > 1 && (o = o.popLast(), u = e.field(o)), u === null ? r.delete(o) : r.set(o, u), i = i.add(o);
    }
    return new ae(n.key, r, new At(i.toArray()), Ot.none());
  }
}
function Fh(n, t, e) {
  n instanceof gn ? function(i, o, u) {
    const c = i.value.clone(), h = So(i.fieldTransforms, o, u.transformResults);
    c.setAll(h), o.convertToFoundDocument(u.version, c).setHasCommittedMutations();
  }(n, t, e) : n instanceof ae ? function(i, o, u) {
    if (!Wn(i.precondition, o))
      return void o.convertToUnknownDocument(u.version);
    const c = So(i.fieldTransforms, o, u.transformResults), h = o.data;
    h.setAll(Fa(i)), h.setAll(c), o.convertToFoundDocument(u.version, h).setHasCommittedMutations();
  }(n, t, e) : function(i, o, u) {
    o.convertToNoDocument(u.version).setHasCommittedMutations();
  }(0, t, e);
}
function rn(n, t, e, r) {
  return n instanceof gn ? function(o, u, c, h) {
    if (!Wn(o.precondition, u))
      return c;
    const f = o.value.clone(), m = Vo(o.fieldTransforms, h, u);
    return f.setAll(m), u.convertToFoundDocument(u.version, f).setHasLocalMutations(), null;
  }(n, t, e, r) : n instanceof ae ? function(o, u, c, h) {
    if (!Wn(o.precondition, u)) return c;
    const f = Vo(o.fieldTransforms, h, u), m = u.data;
    return m.setAll(Fa(o)), m.setAll(f), u.convertToFoundDocument(u.version, m).setHasLocalMutations(), c === null ? null : c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map((w) => w.field));
  }(n, t, e, r) : function(o, u, c) {
    return Wn(o.precondition, u) ? (u.convertToNoDocument(u.version).setHasLocalMutations(), null) : c;
  }(n, t, e);
}
function Uh(n, t) {
  let e = null;
  for (const r of n.fieldTransforms) {
    const i = t.data.field(r.field), o = ka(r.transform, i || null);
    o != null && (e === null && (e = Tt.empty()), e.set(r.field, o));
  }
  return e || null;
}
function Po(n, t) {
  return n.type === t.type && !!n.key.isEqual(t.key) && !!n.precondition.isEqual(t.precondition) && !!function(r, i) {
    return r === void 0 && i === void 0 || !(!r || !i) && ve(r, i, (o, u) => Mh(o, u));
  }(n.fieldTransforms, t.fieldTransforms) && (n.type === 0 ? n.value.isEqual(t.value) : n.type !== 1 || n.data.isEqual(t.data) && n.fieldMask.isEqual(t.fieldMask));
}
class gn extends fr {
  constructor(t, e, r, i = []) {
    super(), this.key = t, this.value = e, this.precondition = r, this.fieldTransforms = i, this.type = 0;
  }
  getFieldMask() {
    return null;
  }
}
class ae extends fr {
  constructor(t, e, r, i, o = []) {
    super(), this.key = t, this.data = e, this.fieldMask = r, this.precondition = i, this.fieldTransforms = o, this.type = 1;
  }
  getFieldMask() {
    return this.fieldMask;
  }
}
function Fa(n) {
  const t = /* @__PURE__ */ new Map();
  return n.fieldMask.fields.forEach((e) => {
    if (!e.isEmpty()) {
      const r = n.data.field(e);
      t.set(e, r);
    }
  }), t;
}
function So(n, t, e) {
  const r = /* @__PURE__ */ new Map();
  z(n.length === e.length);
  for (let i = 0; i < e.length; i++) {
    const o = n[i], u = o.transform, c = t.data.field(o.field);
    r.set(o.field, Oh(u, c, e[i]));
  }
  return r;
}
function Vo(n, t, e) {
  const r = /* @__PURE__ */ new Map();
  for (const i of n) {
    const o = i.transform, u = e.data.field(i.field);
    r.set(i.field, xh(o, u, t));
  }
  return r;
}
class Ua extends fr {
  constructor(t, e) {
    super(), this.key = t, this.precondition = e, this.type = 2, this.fieldTransforms = [];
  }
  getFieldMask() {
    return null;
  }
}
class Bh extends fr {
  constructor(t, e) {
    super(), this.key = t, this.precondition = e, this.type = 3, this.fieldTransforms = [];
  }
  getFieldMask() {
    return null;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class qh {
  /**
   * @param batchId - The unique ID of this mutation batch.
   * @param localWriteTime - The original write time of this mutation.
   * @param baseMutations - Mutations that are used to populate the base
   * values when this mutation is applied locally. This can be used to locally
   * overwrite values that are persisted in the remote document cache. Base
   * mutations are never sent to the backend.
   * @param mutations - The user-provided mutations in this mutation batch.
   * User-provided mutations are applied both locally and remotely on the
   * backend.
   */
  constructor(t, e, r, i) {
    this.batchId = t, this.localWriteTime = e, this.baseMutations = r, this.mutations = i;
  }
  /**
   * Applies all the mutations in this MutationBatch to the specified document
   * to compute the state of the remote document
   *
   * @param document - The document to apply mutations to.
   * @param batchResult - The result of applying the MutationBatch to the
   * backend.
   */
  applyToRemoteDocument(t, e) {
    const r = e.mutationResults;
    for (let i = 0; i < this.mutations.length; i++) {
      const o = this.mutations[i];
      o.key.isEqual(t.key) && Fh(o, t, r[i]);
    }
  }
  /**
   * Computes the local view of a document given all the mutations in this
   * batch.
   *
   * @param document - The document to apply mutations to.
   * @param mutatedFields - Fields that have been updated before applying this mutation batch.
   * @returns A `FieldMask` representing all the fields that are mutated.
   */
  applyToLocalView(t, e) {
    for (const r of this.baseMutations) r.key.isEqual(t.key) && (e = rn(r, t, e, this.localWriteTime));
    for (const r of this.mutations) r.key.isEqual(t.key) && (e = rn(r, t, e, this.localWriteTime));
    return e;
  }
  /**
   * Computes the local view for all provided documents given the mutations in
   * this batch. Returns a `DocumentKey` to `Mutation` map which can be used to
   * replace all the mutation applications.
   */
  applyToLocalDocumentSet(t, e) {
    const r = Da();
    return this.mutations.forEach((i) => {
      const o = t.get(i.key), u = o.overlayedDocument;
      let c = this.applyToLocalView(u, o.mutatedFields);
      c = e.has(i.key) ? null : c;
      const h = La(u, c);
      h !== null && r.set(i.key, h), u.isValidDocument() || u.convertToNoDocument(L.min());
    }), r;
  }
  keys() {
    return this.mutations.reduce((t, e) => t.add(e.key), U());
  }
  isEqual(t) {
    return this.batchId === t.batchId && ve(this.mutations, t.mutations, (e, r) => Po(e, r)) && ve(this.baseMutations, t.baseMutations, (e, r) => Po(e, r));
  }
}
class Ns {
  constructor(t, e, r, i) {
    this.batch = t, this.commitVersion = e, this.mutationResults = r, this.docVersions = i;
  }
  /**
   * Creates a new MutationBatchResult for the given batch and results. There
   * must be one result for each mutation in the batch. This static factory
   * caches a document=&gt;version mapping (docVersions).
   */
  static from(t, e, r) {
    z(t.mutations.length === r.length);
    let i = /* @__PURE__ */ function() {
      return Ch;
    }();
    const o = t.mutations;
    for (let u = 0; u < o.length; u++) i = i.insert(o[u].key, r[u].version);
    return new Ns(t, e, r, i);
  }
}
/**
 * @license
 * Copyright 2022 Google LLC
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
class jh {
  constructor(t, e) {
    this.largestBatchId = t, this.mutation = e;
  }
  getKey() {
    return this.mutation.key;
  }
  isEqual(t) {
    return t !== null && this.mutation === t.mutation;
  }
  toString() {
    return `Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class $h {
  constructor(t, e) {
    this.count = t, this.unchangedNames = e;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
var tt, B;
function zh(n) {
  switch (n) {
    default:
      return M();
    case P.CANCELLED:
    case P.UNKNOWN:
    case P.DEADLINE_EXCEEDED:
    case P.RESOURCE_EXHAUSTED:
    case P.INTERNAL:
    case P.UNAVAILABLE:
    case P.UNAUTHENTICATED:
      return !1;
    case P.INVALID_ARGUMENT:
    case P.NOT_FOUND:
    case P.ALREADY_EXISTS:
    case P.PERMISSION_DENIED:
    case P.FAILED_PRECONDITION:
    case P.ABORTED:
    case P.OUT_OF_RANGE:
    case P.UNIMPLEMENTED:
    case P.DATA_LOSS:
      return !0;
  }
}
function Ba(n) {
  if (n === void 0)
    return Lt("GRPC error has no .code"), P.UNKNOWN;
  switch (n) {
    case tt.OK:
      return P.OK;
    case tt.CANCELLED:
      return P.CANCELLED;
    case tt.UNKNOWN:
      return P.UNKNOWN;
    case tt.DEADLINE_EXCEEDED:
      return P.DEADLINE_EXCEEDED;
    case tt.RESOURCE_EXHAUSTED:
      return P.RESOURCE_EXHAUSTED;
    case tt.INTERNAL:
      return P.INTERNAL;
    case tt.UNAVAILABLE:
      return P.UNAVAILABLE;
    case tt.UNAUTHENTICATED:
      return P.UNAUTHENTICATED;
    case tt.INVALID_ARGUMENT:
      return P.INVALID_ARGUMENT;
    case tt.NOT_FOUND:
      return P.NOT_FOUND;
    case tt.ALREADY_EXISTS:
      return P.ALREADY_EXISTS;
    case tt.PERMISSION_DENIED:
      return P.PERMISSION_DENIED;
    case tt.FAILED_PRECONDITION:
      return P.FAILED_PRECONDITION;
    case tt.ABORTED:
      return P.ABORTED;
    case tt.OUT_OF_RANGE:
      return P.OUT_OF_RANGE;
    case tt.UNIMPLEMENTED:
      return P.UNIMPLEMENTED;
    case tt.DATA_LOSS:
      return P.DATA_LOSS;
    default:
      return M();
  }
}
(B = tt || (tt = {}))[B.OK = 0] = "OK", B[B.CANCELLED = 1] = "CANCELLED", B[B.UNKNOWN = 2] = "UNKNOWN", B[B.INVALID_ARGUMENT = 3] = "INVALID_ARGUMENT", B[B.DEADLINE_EXCEEDED = 4] = "DEADLINE_EXCEEDED", B[B.NOT_FOUND = 5] = "NOT_FOUND", B[B.ALREADY_EXISTS = 6] = "ALREADY_EXISTS", B[B.PERMISSION_DENIED = 7] = "PERMISSION_DENIED", B[B.UNAUTHENTICATED = 16] = "UNAUTHENTICATED", B[B.RESOURCE_EXHAUSTED = 8] = "RESOURCE_EXHAUSTED", B[B.FAILED_PRECONDITION = 9] = "FAILED_PRECONDITION", B[B.ABORTED = 10] = "ABORTED", B[B.OUT_OF_RANGE = 11] = "OUT_OF_RANGE", B[B.UNIMPLEMENTED = 12] = "UNIMPLEMENTED", B[B.INTERNAL = 13] = "INTERNAL", B[B.UNAVAILABLE = 14] = "UNAVAILABLE", B[B.DATA_LOSS = 15] = "DATA_LOSS";
/**
 * @license
 * Copyright 2023 Google LLC
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
function Kh() {
  return new TextEncoder();
}
/**
 * @license
 * Copyright 2022 Google LLC
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
const Gh = new re([4294967295, 4294967295], 0);
function Co(n) {
  const t = Kh().encode(n), e = new ua();
  return e.update(t), new Uint8Array(e.digest());
}
function bo(n) {
  const t = new DataView(n.buffer), e = t.getUint32(
    0,
    /* littleEndian= */
    !0
  ), r = t.getUint32(
    4,
    /* littleEndian= */
    !0
  ), i = t.getUint32(
    8,
    /* littleEndian= */
    !0
  ), o = t.getUint32(
    12,
    /* littleEndian= */
    !0
  );
  return [new re([e, r], 0), new re([i, o], 0)];
}
class ks {
  constructor(t, e, r) {
    if (this.bitmap = t, this.padding = e, this.hashCount = r, e < 0 || e >= 8) throw new Ze(`Invalid padding: ${e}`);
    if (r < 0) throw new Ze(`Invalid hash count: ${r}`);
    if (t.length > 0 && this.hashCount === 0)
      throw new Ze(`Invalid hash count: ${r}`);
    if (t.length === 0 && e !== 0)
      throw new Ze(`Invalid padding when bitmap length is 0: ${e}`);
    this.Ie = 8 * t.length - e, // Set the bit count in Integer to avoid repetition in mightContain().
    this.Te = re.fromNumber(this.Ie);
  }
  // Calculate the ith hash value based on the hashed 64bit integers,
  // and calculate its corresponding bit index in the bitmap to be checked.
  Ee(t, e, r) {
    let i = t.add(e.multiply(re.fromNumber(r)));
    return i.compare(Gh) === 1 && (i = new re([i.getBits(0), i.getBits(1)], 0)), i.modulo(this.Te).toNumber();
  }
  // Return whether the bit on the given index in the bitmap is set to 1.
  de(t) {
    return (this.bitmap[Math.floor(t / 8)] & 1 << t % 8) != 0;
  }
  mightContain(t) {
    if (this.Ie === 0) return !1;
    const e = Co(t), [r, i] = bo(e);
    for (let o = 0; o < this.hashCount; o++) {
      const u = this.Ee(r, i, o);
      if (!this.de(u)) return !1;
    }
    return !0;
  }
  /** Create bloom filter for testing purposes only. */
  static create(t, e, r) {
    const i = t % 8 == 0 ? 0 : 8 - t % 8, o = new Uint8Array(Math.ceil(t / 8)), u = new ks(o, i, e);
    return r.forEach((c) => u.insert(c)), u;
  }
  insert(t) {
    if (this.Ie === 0) return;
    const e = Co(t), [r, i] = bo(e);
    for (let o = 0; o < this.hashCount; o++) {
      const u = this.Ee(r, i, o);
      this.Ae(u);
    }
  }
  Ae(t) {
    const e = Math.floor(t / 8), r = t % 8;
    this.bitmap[e] |= 1 << r;
  }
}
class Ze extends Error {
  constructor() {
    super(...arguments), this.name = "BloomFilterError";
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class pr {
  constructor(t, e, r, i, o) {
    this.snapshotVersion = t, this.targetChanges = e, this.targetMismatches = r, this.documentUpdates = i, this.resolvedLimboDocuments = o;
  }
  /**
   * HACK: Views require RemoteEvents in order to determine whether the view is
   * CURRENT, but secondary tabs don't receive remote events. So this method is
   * used to create a synthesized RemoteEvent that can be used to apply a
   * CURRENT status change to a View, for queries executed in a different tab.
   */
  // PORTING NOTE: Multi-tab only
  static createSynthesizedRemoteEventForCurrentChange(t, e, r) {
    const i = /* @__PURE__ */ new Map();
    return i.set(t, _n.createSynthesizedTargetChangeForCurrentChange(t, e, r)), new pr(L.min(), i, new X($), Ft(), U());
  }
}
class _n {
  constructor(t, e, r, i, o) {
    this.resumeToken = t, this.current = e, this.addedDocuments = r, this.modifiedDocuments = i, this.removedDocuments = o;
  }
  /**
   * This method is used to create a synthesized TargetChanges that can be used to
   * apply a CURRENT status change to a View (for queries executed in a different
   * tab) or for new queries (to raise snapshots with correct CURRENT status).
   */
  static createSynthesizedTargetChangeForCurrentChange(t, e, r) {
    return new _n(r, e, U(), U(), U());
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class Hn {
  constructor(t, e, r, i) {
    this.Re = t, this.removedTargetIds = e, this.key = r, this.Ve = i;
  }
}
class qa {
  constructor(t, e) {
    this.targetId = t, this.me = e;
  }
}
class ja {
  constructor(t, e, r = ct.EMPTY_BYTE_STRING, i = null) {
    this.state = t, this.targetIds = e, this.resumeToken = r, this.cause = i;
  }
}
class Do {
  constructor() {
    this.fe = 0, /**
     * Keeps track of the document changes since the last raised snapshot.
     *
     * These changes are continuously updated as we receive document updates and
     * always reflect the current set of changes against the last issued snapshot.
     */
    this.ge = ko(), /** See public getters for explanations of these fields. */
    this.pe = ct.EMPTY_BYTE_STRING, this.ye = !1, /**
     * Whether this target state should be included in the next snapshot. We
     * initialize to true so that newly-added targets are included in the next
     * RemoteEvent.
     */
    this.we = !0;
  }
  /**
   * Whether this target has been marked 'current'.
   *
   * 'Current' has special meaning in the RPC protocol: It implies that the
   * Watch backend has sent us all changes up to the point at which the target
   * was added and that the target is consistent with the rest of the watch
   * stream.
   */
  get current() {
    return this.ye;
  }
  /** The last resume token sent to us for this target. */
  get resumeToken() {
    return this.pe;
  }
  /** Whether this target has pending target adds or target removes. */
  get Se() {
    return this.fe !== 0;
  }
  /** Whether we have modified any state that should trigger a snapshot. */
  get be() {
    return this.we;
  }
  /**
   * Applies the resume token to the TargetChange, but only when it has a new
   * value. Empty resumeTokens are discarded.
   */
  De(t) {
    t.approximateByteSize() > 0 && (this.we = !0, this.pe = t);
  }
  /**
   * Creates a target change from the current set of changes.
   *
   * To reset the document changes after raising this snapshot, call
   * `clearPendingChanges()`.
   */
  ve() {
    let t = U(), e = U(), r = U();
    return this.ge.forEach((i, o) => {
      switch (o) {
        case 0:
          t = t.add(i);
          break;
        case 2:
          e = e.add(i);
          break;
        case 1:
          r = r.add(i);
          break;
        default:
          M();
      }
    }), new _n(this.pe, this.ye, t, e, r);
  }
  /**
   * Resets the document changes and sets `hasPendingChanges` to false.
   */
  Ce() {
    this.we = !1, this.ge = ko();
  }
  Fe(t, e) {
    this.we = !0, this.ge = this.ge.insert(t, e);
  }
  Me(t) {
    this.we = !0, this.ge = this.ge.remove(t);
  }
  xe() {
    this.fe += 1;
  }
  Oe() {
    this.fe -= 1, z(this.fe >= 0);
  }
  Ne() {
    this.we = !0, this.ye = !0;
  }
}
class Wh {
  constructor(t) {
    this.Le = t, /** The internal state of all tracked targets. */
    this.Be = /* @__PURE__ */ new Map(), /** Keeps track of the documents to update since the last raised snapshot. */
    this.ke = Ft(), /** A mapping of document keys to their set of target IDs. */
    this.qe = No(), /**
     * A map of targets with existence filter mismatches. These targets are
     * known to be inconsistent and their listens needs to be re-established by
     * RemoteStore.
     */
    this.Qe = new X($);
  }
  /**
   * Processes and adds the DocumentWatchChange to the current set of changes.
   */
  Ke(t) {
    for (const e of t.Re) t.Ve && t.Ve.isFoundDocument() ? this.$e(e, t.Ve) : this.Ue(e, t.key, t.Ve);
    for (const e of t.removedTargetIds) this.Ue(e, t.key, t.Ve);
  }
  /** Processes and adds the WatchTargetChange to the current set of changes. */
  We(t) {
    this.forEachTarget(t, (e) => {
      const r = this.Ge(e);
      switch (t.state) {
        case 0:
          this.ze(e) && r.De(t.resumeToken);
          break;
        case 1:
          r.Oe(), r.Se || // We have a freshly added target, so we need to reset any state
          // that we had previously. This can happen e.g. when remove and add
          // back a target for existence filter mismatches.
          r.Ce(), r.De(t.resumeToken);
          break;
        case 2:
          r.Oe(), r.Se || this.removeTarget(e);
          break;
        case 3:
          this.ze(e) && (r.Ne(), r.De(t.resumeToken));
          break;
        case 4:
          this.ze(e) && // Reset the target and synthesizes removes for all existing
          // documents. The backend will re-add any documents that still
          // match the target before it sends the next global snapshot.
          (this.je(e), r.De(t.resumeToken));
          break;
        default:
          M();
      }
    });
  }
  /**
   * Iterates over all targetIds that the watch change applies to: either the
   * targetIds explicitly listed in the change or the targetIds of all currently
   * active targets.
   */
  forEachTarget(t, e) {
    t.targetIds.length > 0 ? t.targetIds.forEach(e) : this.Be.forEach((r, i) => {
      this.ze(i) && e(i);
    });
  }
  /**
   * Handles existence filters and synthesizes deletes for filter mismatches.
   * Targets that are invalidated by filter mismatches are added to
   * `pendingTargetResets`.
   */
  He(t) {
    const e = t.targetId, r = t.me.count, i = this.Je(e);
    if (i) {
      const o = i.target;
      if (hs(o)) if (r === 0) {
        const u = new x(o.path);
        this.Ue(e, u, _t.newNoDocument(u, L.min()));
      } else z(r === 1);
      else {
        const u = this.Ye(e);
        if (u !== r) {
          const c = this.Ze(t), h = c ? this.Xe(c, t, u) : 1;
          if (h !== 0) {
            this.je(e);
            const f = h === 2 ? "TargetPurposeExistenceFilterMismatchBloom" : "TargetPurposeExistenceFilterMismatch";
            this.Qe = this.Qe.insert(e, f);
          }
        }
      }
    }
  }
  /**
   * Parse the bloom filter from the "unchanged_names" field of an existence
   * filter.
   */
  Ze(t) {
    const e = t.me.unchangedNames;
    if (!e || !e.bits) return null;
    const { bits: { bitmap: r = "", padding: i = 0 }, hashCount: o = 0 } = e;
    let u, c;
    try {
      u = ie(r).toUint8Array();
    } catch (h) {
      if (h instanceof _a) return Ee("Decoding the base64 bloom filter in existence filter failed (" + h.message + "); ignoring the bloom filter and falling back to full re-query."), null;
      throw h;
    }
    try {
      c = new ks(u, i, o);
    } catch (h) {
      return Ee(h instanceof Ze ? "BloomFilter error: " : "Applying bloom filter failed: ", h), null;
    }
    return c.Ie === 0 ? null : c;
  }
  /**
   * Apply bloom filter to remove the deleted documents, and return the
   * application status.
   */
  Xe(t, e, r) {
    return e.me.count === r - this.nt(t, e.targetId) ? 0 : 2;
  }
  /**
   * Filter out removed documents based on bloom filter membership result and
   * return number of documents removed.
   */
  nt(t, e) {
    const r = this.Le.getRemoteKeysForTarget(e);
    let i = 0;
    return r.forEach((o) => {
      const u = this.Le.tt(), c = `projects/${u.projectId}/databases/${u.database}/documents/${o.path.canonicalString()}`;
      t.mightContain(c) || (this.Ue(
        e,
        o,
        /*updatedDocument=*/
        null
      ), i++);
    }), i;
  }
  /**
   * Converts the currently accumulated state into a remote event at the
   * provided snapshot version. Resets the accumulated changes before returning.
   */
  rt(t) {
    const e = /* @__PURE__ */ new Map();
    this.Be.forEach((o, u) => {
      const c = this.Je(u);
      if (c) {
        if (o.current && hs(c.target)) {
          const h = new x(c.target.path);
          this.ke.get(h) !== null || this.it(u, h) || this.Ue(u, h, _t.newNoDocument(h, t));
        }
        o.be && (e.set(u, o.ve()), o.Ce());
      }
    });
    let r = U();
    this.qe.forEach((o, u) => {
      let c = !0;
      u.forEachWhile((h) => {
        const f = this.Je(h);
        return !f || f.purpose === "TargetPurposeLimboResolution" || (c = !1, !1);
      }), c && (r = r.add(o));
    }), this.ke.forEach((o, u) => u.setReadTime(t));
    const i = new pr(t, e, this.Qe, this.ke, r);
    return this.ke = Ft(), this.qe = No(), this.Qe = new X($), i;
  }
  /**
   * Adds the provided document to the internal list of document updates and
   * its document key to the given target's mapping.
   */
  // Visible for testing.
  $e(t, e) {
    if (!this.ze(t)) return;
    const r = this.it(t, e.key) ? 2 : 0;
    this.Ge(t).Fe(e.key, r), this.ke = this.ke.insert(e.key, e), this.qe = this.qe.insert(e.key, this.st(e.key).add(t));
  }
  /**
   * Removes the provided document from the target mapping. If the
   * document no longer matches the target, but the document's state is still
   * known (e.g. we know that the document was deleted or we received the change
   * that caused the filter mismatch), the new document can be provided
   * to update the remote document cache.
   */
  // Visible for testing.
  Ue(t, e, r) {
    if (!this.ze(t)) return;
    const i = this.Ge(t);
    this.it(t, e) ? i.Fe(
      e,
      1
      /* ChangeType.Removed */
    ) : (
      // The document may have entered and left the target before we raised a
      // snapshot, so we can just ignore the change.
      i.Me(e)
    ), this.qe = this.qe.insert(e, this.st(e).delete(t)), r && (this.ke = this.ke.insert(e, r));
  }
  removeTarget(t) {
    this.Be.delete(t);
  }
  /**
   * Returns the current count of documents in the target. This includes both
   * the number of documents that the LocalStore considers to be part of the
   * target as well as any accumulated changes.
   */
  Ye(t) {
    const e = this.Ge(t).ve();
    return this.Le.getRemoteKeysForTarget(t).size + e.addedDocuments.size - e.removedDocuments.size;
  }
  /**
   * Increment the number of acks needed from watch before we can consider the
   * server to be 'in-sync' with the client's active targets.
   */
  xe(t) {
    this.Ge(t).xe();
  }
  Ge(t) {
    let e = this.Be.get(t);
    return e || (e = new Do(), this.Be.set(t, e)), e;
  }
  st(t) {
    let e = this.qe.get(t);
    return e || (e = new lt($), this.qe = this.qe.insert(t, e)), e;
  }
  /**
   * Verifies that the user is still interested in this target (by calling
   * `getTargetDataForTarget()`) and that we are not waiting for pending ADDs
   * from watch.
   */
  ze(t) {
    const e = this.Je(t) !== null;
    return e || k("WatchChangeAggregator", "Detected inactive target", t), e;
  }
  /**
   * Returns the TargetData for an active target (i.e. a target that the user
   * is still interested in that has no outstanding target change requests).
   */
  Je(t) {
    const e = this.Be.get(t);
    return e && e.Se ? null : this.Le.ot(t);
  }
  /**
   * Resets the state of a Watch target to its initial state (e.g. sets
   * 'current' to false, clears the resume token and removes its target mapping
   * from all documents).
   */
  je(t) {
    this.Be.set(t, new Do()), this.Le.getRemoteKeysForTarget(t).forEach((e) => {
      this.Ue(
        t,
        e,
        /*updatedDocument=*/
        null
      );
    });
  }
  /**
   * Returns whether the LocalStore considers the document to be part of the
   * specified target.
   */
  it(t, e) {
    return this.Le.getRemoteKeysForTarget(t).has(e);
  }
}
function No() {
  return new X(x.comparator);
}
function ko() {
  return new X(x.comparator);
}
const Hh = {
  asc: "ASCENDING",
  desc: "DESCENDING"
}, Qh = {
  "<": "LESS_THAN",
  "<=": "LESS_THAN_OR_EQUAL",
  ">": "GREATER_THAN",
  ">=": "GREATER_THAN_OR_EQUAL",
  "==": "EQUAL",
  "!=": "NOT_EQUAL",
  "array-contains": "ARRAY_CONTAINS",
  in: "IN",
  "not-in": "NOT_IN",
  "array-contains-any": "ARRAY_CONTAINS_ANY"
}, Yh = {
  and: "AND",
  or: "OR"
};
class Xh {
  constructor(t, e) {
    this.databaseId = t, this.useProto3Json = e;
  }
}
function ps(n, t) {
  return n.useProto3Json || lr(t) ? t : {
    value: t
  };
}
function sr(n, t) {
  return n.useProto3Json ? `${new Date(1e3 * t.seconds).toISOString().replace(/\.\d*/, "").replace("Z", "")}.${("000000000" + t.nanoseconds).slice(-9)}Z` : {
    seconds: "" + t.seconds,
    nanos: t.nanoseconds
  };
}
function $a(n, t) {
  return n.useProto3Json ? t.toBase64() : t.toUint8Array();
}
function Jh(n, t) {
  return sr(n, t.toTimestamp());
}
function St(n) {
  return z(!!n), L.fromTimestamp(function(e) {
    const r = Qt(e);
    return new nt(r.seconds, r.nanos);
  }(n));
}
function xs(n, t) {
  return ms(n, t).canonicalString();
}
function ms(n, t) {
  const e = function(i) {
    return new Y(["projects", i.projectId, "databases", i.database]);
  }(n).child("documents");
  return t === void 0 ? e : e.child(t);
}
function za(n) {
  const t = Y.fromString(n);
  return z(Qa(t)), t;
}
function gs(n, t) {
  return xs(n.databaseId, t.path);
}
function Xr(n, t) {
  const e = za(t);
  if (e.get(1) !== n.databaseId.projectId) throw new N(P.INVALID_ARGUMENT, "Tried to deserialize key from different project: " + e.get(1) + " vs " + n.databaseId.projectId);
  if (e.get(3) !== n.databaseId.database) throw new N(P.INVALID_ARGUMENT, "Tried to deserialize key from different database: " + e.get(3) + " vs " + n.databaseId.database);
  return new x(Ga(e));
}
function Ka(n, t) {
  return xs(n.databaseId, t);
}
function Zh(n) {
  const t = za(n);
  return t.length === 4 ? Y.emptyPath() : Ga(t);
}
function _s(n) {
  return new Y(["projects", n.databaseId.projectId, "databases", n.databaseId.database]).canonicalString();
}
function Ga(n) {
  return z(n.length > 4 && n.get(4) === "documents"), n.popFirst(5);
}
function xo(n, t, e) {
  return {
    name: gs(n, t),
    fields: e.value.mapValue.fields
  };
}
function td(n, t) {
  let e;
  if ("targetChange" in t) {
    t.targetChange;
    const r = function(f) {
      return f === "NO_CHANGE" ? 0 : f === "ADD" ? 1 : f === "REMOVE" ? 2 : f === "CURRENT" ? 3 : f === "RESET" ? 4 : M();
    }(t.targetChange.targetChangeType || "NO_CHANGE"), i = t.targetChange.targetIds || [], o = function(f, m) {
      return f.useProto3Json ? (z(m === void 0 || typeof m == "string"), ct.fromBase64String(m || "")) : (z(m === void 0 || // Check if the value is an instance of both Buffer and Uint8Array,
      // despite the fact that Buffer extends Uint8Array. In some
      // environments, such as jsdom, the prototype chain of Buffer
      // does not indicate that it extends Uint8Array.
      m instanceof Buffer || m instanceof Uint8Array), ct.fromUint8Array(m || new Uint8Array()));
    }(n, t.targetChange.resumeToken), u = t.targetChange.cause, c = u && function(f) {
      const m = f.code === void 0 ? P.UNKNOWN : Ba(f.code);
      return new N(m, f.message || "");
    }(u);
    e = new ja(r, i, o, c || null);
  } else if ("documentChange" in t) {
    t.documentChange;
    const r = t.documentChange;
    r.document, r.document.name, r.document.updateTime;
    const i = Xr(n, r.document.name), o = St(r.document.updateTime), u = r.document.createTime ? St(r.document.createTime) : L.min(), c = new Tt({
      mapValue: {
        fields: r.document.fields
      }
    }), h = _t.newFoundDocument(i, o, u, c), f = r.targetIds || [], m = r.removedTargetIds || [];
    e = new Hn(f, m, h.key, h);
  } else if ("documentDelete" in t) {
    t.documentDelete;
    const r = t.documentDelete;
    r.document;
    const i = Xr(n, r.document), o = r.readTime ? St(r.readTime) : L.min(), u = _t.newNoDocument(i, o), c = r.removedTargetIds || [];
    e = new Hn([], c, u.key, u);
  } else if ("documentRemove" in t) {
    t.documentRemove;
    const r = t.documentRemove;
    r.document;
    const i = Xr(n, r.document), o = r.removedTargetIds || [];
    e = new Hn([], o, i, null);
  } else {
    if (!("filter" in t)) return M();
    {
      t.filter;
      const r = t.filter;
      r.targetId;
      const { count: i = 0, unchangedNames: o } = r, u = new $h(i, o), c = r.targetId;
      e = new qa(c, u);
    }
  }
  return e;
}
function ed(n, t) {
  let e;
  if (t instanceof gn) e = {
    update: xo(n, t.key, t.value)
  };
  else if (t instanceof Ua) e = {
    delete: gs(n, t.key)
  };
  else if (t instanceof ae) e = {
    update: xo(n, t.key, t.data),
    updateMask: cd(t.fieldMask)
  };
  else {
    if (!(t instanceof Bh)) return M();
    e = {
      verify: gs(n, t.key)
    };
  }
  return t.fieldTransforms.length > 0 && (e.updateTransforms = t.fieldTransforms.map((r) => function(o, u) {
    const c = u.transform;
    if (c instanceof nr) return {
      fieldPath: u.field.canonicalString(),
      setToServerValue: "REQUEST_TIME"
    };
    if (c instanceof hn) return {
      fieldPath: u.field.canonicalString(),
      appendMissingElements: {
        values: c.elements
      }
    };
    if (c instanceof dn) return {
      fieldPath: u.field.canonicalString(),
      removeAllFromArray: {
        values: c.elements
      }
    };
    if (c instanceof rr) return {
      fieldPath: u.field.canonicalString(),
      increment: c.Pe
    };
    throw M();
  }(0, r))), t.precondition.isNone || (e.currentDocument = function(i, o) {
    return o.updateTime !== void 0 ? {
      updateTime: Jh(i, o.updateTime)
    } : o.exists !== void 0 ? {
      exists: o.exists
    } : M();
  }(n, t.precondition)), e;
}
function nd(n, t) {
  return n && n.length > 0 ? (z(t !== void 0), n.map((e) => function(i, o) {
    let u = i.updateTime ? St(i.updateTime) : St(o);
    return u.isEqual(L.min()) && // The Firestore Emulator currently returns an update time of 0 for
    // deletes of non-existing documents (rather than null). This breaks the
    // test "get deleted doc while offline with source=cache" as NoDocuments
    // with version 0 are filtered by IndexedDb's RemoteDocumentCache.
    // TODO(#2149): Remove this when Emulator is fixed
    (u = St(o)), new Lh(u, i.transformResults || []);
  }(e, t))) : [];
}
function rd(n, t) {
  return {
    documents: [Ka(n, t.path)]
  };
}
function sd(n, t) {
  const e = {
    structuredQuery: {}
  }, r = t.path;
  let i;
  t.collectionGroup !== null ? (i = r, e.structuredQuery.from = [{
    collectionId: t.collectionGroup,
    allDescendants: !0
  }]) : (i = r.popLast(), e.structuredQuery.from = [{
    collectionId: r.lastSegment()
  }]), e.parent = Ka(n, i);
  const o = function(f) {
    if (f.length !== 0)
      return Ha(Rt.create(
        f,
        "and"
        /* CompositeOperator.AND */
      ));
  }(t.filters);
  o && (e.structuredQuery.where = o);
  const u = function(f) {
    if (f.length !== 0)
      return f.map((m) => (
        // visible for testing
        function(R) {
          return {
            field: pe(R.field),
            direction: ad(R.dir)
          };
        }(m)
      ));
  }(t.orderBy);
  u && (e.structuredQuery.orderBy = u);
  const c = ps(n, t.limit);
  return c !== null && (e.structuredQuery.limit = c), t.startAt && (e.structuredQuery.startAt = function(f) {
    return {
      before: f.inclusive,
      values: f.position
    };
  }(t.startAt)), t.endAt && (e.structuredQuery.endAt = function(f) {
    return {
      before: !f.inclusive,
      values: f.position
    };
  }(t.endAt)), {
    _t: e,
    parent: i
  };
}
function id(n) {
  let t = Zh(n.parent);
  const e = n.structuredQuery, r = e.from ? e.from.length : 0;
  let i = null;
  if (r > 0) {
    z(r === 1);
    const m = e.from[0];
    m.allDescendants ? i = m.collectionId : t = t.child(m.collectionId);
  }
  let o = [];
  e.where && (o = function(w) {
    const R = Wa(w);
    return R instanceof Rt && Ta(R) ? R.getFilters() : [R];
  }(e.where));
  let u = [];
  e.orderBy && (u = function(w) {
    return w.map((R) => function(D) {
      return new er(
        me(D.field),
        // visible for testing
        function(b) {
          switch (b) {
            case "ASCENDING":
              return "asc";
            case "DESCENDING":
              return "desc";
            default:
              return;
          }
        }(D.direction)
      );
    }(R));
  }(e.orderBy));
  let c = null;
  e.limit && (c = function(w) {
    let R;
    return R = typeof w == "object" ? w.value : w, lr(R) ? null : R;
  }(e.limit));
  let h = null;
  e.startAt && (h = function(w) {
    const R = !!w.before, V = w.values || [];
    return new tr(V, R);
  }(e.startAt));
  let f = null;
  return e.endAt && (f = function(w) {
    const R = !w.before, V = w.values || [];
    return new tr(V, R);
  }(e.endAt)), Ah(t, i, u, o, c, "F", h, f);
}
function od(n, t) {
  const e = function(i) {
    switch (i) {
      case "TargetPurposeListen":
        return null;
      case "TargetPurposeExistenceFilterMismatch":
        return "existence-filter-mismatch";
      case "TargetPurposeExistenceFilterMismatchBloom":
        return "existence-filter-mismatch-bloom";
      case "TargetPurposeLimboResolution":
        return "limbo-document";
      default:
        return M();
    }
  }(t.purpose);
  return e == null ? null : {
    "goog-listen-tags": e
  };
}
function Wa(n) {
  return n.unaryFilter !== void 0 ? function(e) {
    switch (e.unaryFilter.op) {
      case "IS_NAN":
        const r = me(e.unaryFilter.field);
        return et.create(r, "==", {
          doubleValue: NaN
        });
      case "IS_NULL":
        const i = me(e.unaryFilter.field);
        return et.create(i, "==", {
          nullValue: "NULL_VALUE"
        });
      case "IS_NOT_NAN":
        const o = me(e.unaryFilter.field);
        return et.create(o, "!=", {
          doubleValue: NaN
        });
      case "IS_NOT_NULL":
        const u = me(e.unaryFilter.field);
        return et.create(u, "!=", {
          nullValue: "NULL_VALUE"
        });
      default:
        return M();
    }
  }(n) : n.fieldFilter !== void 0 ? function(e) {
    return et.create(me(e.fieldFilter.field), function(i) {
      switch (i) {
        case "EQUAL":
          return "==";
        case "NOT_EQUAL":
          return "!=";
        case "GREATER_THAN":
          return ">";
        case "GREATER_THAN_OR_EQUAL":
          return ">=";
        case "LESS_THAN":
          return "<";
        case "LESS_THAN_OR_EQUAL":
          return "<=";
        case "ARRAY_CONTAINS":
          return "array-contains";
        case "IN":
          return "in";
        case "NOT_IN":
          return "not-in";
        case "ARRAY_CONTAINS_ANY":
          return "array-contains-any";
        default:
          return M();
      }
    }(e.fieldFilter.op), e.fieldFilter.value);
  }(n) : n.compositeFilter !== void 0 ? function(e) {
    return Rt.create(e.compositeFilter.filters.map((r) => Wa(r)), function(i) {
      switch (i) {
        case "AND":
          return "and";
        case "OR":
          return "or";
        default:
          return M();
      }
    }(e.compositeFilter.op));
  }(n) : M();
}
function ad(n) {
  return Hh[n];
}
function ud(n) {
  return Qh[n];
}
function ld(n) {
  return Yh[n];
}
function pe(n) {
  return {
    fieldPath: n.canonicalString()
  };
}
function me(n) {
  return ut.fromServerFormat(n.fieldPath);
}
function Ha(n) {
  return n instanceof et ? function(e) {
    if (e.op === "==") {
      if (vo(e.value)) return {
        unaryFilter: {
          field: pe(e.field),
          op: "IS_NAN"
        }
      };
      if (Eo(e.value)) return {
        unaryFilter: {
          field: pe(e.field),
          op: "IS_NULL"
        }
      };
    } else if (e.op === "!=") {
      if (vo(e.value)) return {
        unaryFilter: {
          field: pe(e.field),
          op: "IS_NOT_NAN"
        }
      };
      if (Eo(e.value)) return {
        unaryFilter: {
          field: pe(e.field),
          op: "IS_NOT_NULL"
        }
      };
    }
    return {
      fieldFilter: {
        field: pe(e.field),
        op: ud(e.op),
        value: e.value
      }
    };
  }(n) : n instanceof Rt ? function(e) {
    const r = e.getFilters().map((i) => Ha(i));
    return r.length === 1 ? r[0] : {
      compositeFilter: {
        op: ld(e.op),
        filters: r
      }
    };
  }(n) : M();
}
function cd(n) {
  const t = [];
  return n.fields.forEach((e) => t.push(e.canonicalString())), {
    fieldPaths: t
  };
}
function Qa(n) {
  return n.length >= 4 && n.get(0) === "projects" && n.get(2) === "databases";
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class $t {
  constructor(t, e, r, i, o = L.min(), u = L.min(), c = ct.EMPTY_BYTE_STRING, h = null) {
    this.target = t, this.targetId = e, this.purpose = r, this.sequenceNumber = i, this.snapshotVersion = o, this.lastLimboFreeSnapshotVersion = u, this.resumeToken = c, this.expectedCount = h;
  }
  /** Creates a new target data instance with an updated sequence number. */
  withSequenceNumber(t) {
    return new $t(this.target, this.targetId, this.purpose, t, this.snapshotVersion, this.lastLimboFreeSnapshotVersion, this.resumeToken, this.expectedCount);
  }
  /**
   * Creates a new target data instance with an updated resume token and
   * snapshot version.
   */
  withResumeToken(t, e) {
    return new $t(
      this.target,
      this.targetId,
      this.purpose,
      this.sequenceNumber,
      e,
      this.lastLimboFreeSnapshotVersion,
      t,
      /* expectedCount= */
      null
    );
  }
  /**
   * Creates a new target data instance with an updated expected count.
   */
  withExpectedCount(t) {
    return new $t(this.target, this.targetId, this.purpose, this.sequenceNumber, this.snapshotVersion, this.lastLimboFreeSnapshotVersion, this.resumeToken, t);
  }
  /**
   * Creates a new target data instance with an updated last limbo free
   * snapshot version number.
   */
  withLastLimboFreeSnapshotVersion(t) {
    return new $t(this.target, this.targetId, this.purpose, this.sequenceNumber, this.snapshotVersion, t, this.resumeToken, this.expectedCount);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class hd {
  constructor(t) {
    this.ct = t;
  }
}
function dd(n) {
  const t = id({
    parent: n.parent,
    structuredQuery: n.structuredQuery
  });
  return n.limitType === "LAST" ? fs(
    t,
    t.limit,
    "L"
    /* LimitType.Last */
  ) : t;
}
/**
 * @license
 * Copyright 2019 Google LLC
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
class fd {
  constructor() {
    this.un = new pd();
  }
  addToCollectionParentIndex(t, e) {
    return this.un.add(e), S.resolve();
  }
  getCollectionParents(t, e) {
    return S.resolve(this.un.getEntries(e));
  }
  addFieldIndex(t, e) {
    return S.resolve();
  }
  deleteFieldIndex(t, e) {
    return S.resolve();
  }
  deleteAllFieldIndexes(t) {
    return S.resolve();
  }
  createTargetIndexes(t, e) {
    return S.resolve();
  }
  getDocumentsMatchingTarget(t, e) {
    return S.resolve(null);
  }
  getIndexType(t, e) {
    return S.resolve(
      0
      /* IndexType.NONE */
    );
  }
  getFieldIndexes(t, e) {
    return S.resolve([]);
  }
  getNextCollectionGroupToUpdate(t) {
    return S.resolve(null);
  }
  getMinOffset(t, e) {
    return S.resolve(Ht.min());
  }
  getMinOffsetFromCollectionGroup(t, e) {
    return S.resolve(Ht.min());
  }
  updateCollectionGroup(t, e, r) {
    return S.resolve();
  }
  updateIndexEntries(t, e) {
    return S.resolve();
  }
}
class pd {
  constructor() {
    this.index = {};
  }
  // Returns false if the entry already existed.
  add(t) {
    const e = t.lastSegment(), r = t.popLast(), i = this.index[e] || new lt(Y.comparator), o = !i.has(r);
    return this.index[e] = i.add(r), o;
  }
  has(t) {
    const e = t.lastSegment(), r = t.popLast(), i = this.index[e];
    return i && i.has(r);
  }
  getEntries(t) {
    return (this.index[t] || new lt(Y.comparator)).toArray();
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class we {
  constructor(t) {
    this.Ln = t;
  }
  next() {
    return this.Ln += 2, this.Ln;
  }
  static Bn() {
    return new we(0);
  }
  static kn() {
    return new we(-1);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class md {
  constructor() {
    this.changes = new Ce((t) => t.toString(), (t, e) => t.isEqual(e)), this.changesApplied = !1;
  }
  /**
   * Buffers a `RemoteDocumentCache.addEntry()` call.
   *
   * You can only modify documents that have already been retrieved via
   * `getEntry()/getEntries()` (enforced via IndexedDbs `apply()`).
   */
  addEntry(t) {
    this.assertNotApplied(), this.changes.set(t.key, t);
  }
  /**
   * Buffers a `RemoteDocumentCache.removeEntry()` call.
   *
   * You can only remove documents that have already been retrieved via
   * `getEntry()/getEntries()` (enforced via IndexedDbs `apply()`).
   */
  removeEntry(t, e) {
    this.assertNotApplied(), this.changes.set(t, _t.newInvalidDocument(t).setReadTime(e));
  }
  /**
   * Looks up an entry in the cache. The buffered changes will first be checked,
   * and if no buffered change applies, this will forward to
   * `RemoteDocumentCache.getEntry()`.
   *
   * @param transaction - The transaction in which to perform any persistence
   *     operations.
   * @param documentKey - The key of the entry to look up.
   * @returns The cached document or an invalid document if we have nothing
   * cached.
   */
  getEntry(t, e) {
    this.assertNotApplied();
    const r = this.changes.get(e);
    return r !== void 0 ? S.resolve(r) : this.getFromCache(t, e);
  }
  /**
   * Looks up several entries in the cache, forwarding to
   * `RemoteDocumentCache.getEntry()`.
   *
   * @param transaction - The transaction in which to perform any persistence
   *     operations.
   * @param documentKeys - The keys of the entries to look up.
   * @returns A map of cached documents, indexed by key. If an entry cannot be
   *     found, the corresponding key will be mapped to an invalid document.
   */
  getEntries(t, e) {
    return this.getAllFromCache(t, e);
  }
  /**
   * Applies buffered changes to the underlying RemoteDocumentCache, using
   * the provided transaction.
   */
  apply(t) {
    return this.assertNotApplied(), this.changesApplied = !0, this.applyChanges(t);
  }
  /** Helper to assert this.changes is not null  */
  assertNotApplied() {
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
 * @license
 * Copyright 2022 Google LLC
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
class gd {
  constructor(t, e) {
    this.overlayedDocument = t, this.mutatedFields = e;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class _d {
  constructor(t, e, r, i) {
    this.remoteDocumentCache = t, this.mutationQueue = e, this.documentOverlayCache = r, this.indexManager = i;
  }
  /**
   * Get the local view of the document identified by `key`.
   *
   * @returns Local view of the document or null if we don't have any cached
   * state for it.
   */
  getDocument(t, e) {
    let r = null;
    return this.documentOverlayCache.getOverlay(t, e).next((i) => (r = i, this.remoteDocumentCache.getEntry(t, e))).next((i) => (r !== null && rn(r.mutation, i, At.empty(), nt.now()), i));
  }
  /**
   * Gets the local view of the documents identified by `keys`.
   *
   * If we don't have cached state for a document in `keys`, a NoDocument will
   * be stored for that key in the resulting set.
   */
  getDocuments(t, e) {
    return this.remoteDocumentCache.getEntries(t, e).next((r) => this.getLocalViewOfDocuments(t, r, U()).next(() => r));
  }
  /**
   * Similar to `getDocuments`, but creates the local view from the given
   * `baseDocs` without retrieving documents from the local store.
   *
   * @param transaction - The transaction this operation is scoped to.
   * @param docs - The documents to apply local mutations to get the local views.
   * @param existenceStateChanged - The set of document keys whose existence state
   *   is changed. This is useful to determine if some documents overlay needs
   *   to be recalculated.
   */
  getLocalViewOfDocuments(t, e, r = U()) {
    const i = ne();
    return this.populateOverlays(t, i, e).next(() => this.computeViews(t, e, i, r).next((o) => {
      let u = Je();
      return o.forEach((c, h) => {
        u = u.insert(c, h.overlayedDocument);
      }), u;
    }));
  }
  /**
   * Gets the overlayed documents for the given document map, which will include
   * the local view of those documents and a `FieldMask` indicating which fields
   * are mutated locally, `null` if overlay is a Set or Delete mutation.
   */
  getOverlayedDocuments(t, e) {
    const r = ne();
    return this.populateOverlays(t, r, e).next(() => this.computeViews(t, e, r, U()));
  }
  /**
   * Fetches the overlays for {@code docs} and adds them to provided overlay map
   * if the map does not already contain an entry for the given document key.
   */
  populateOverlays(t, e, r) {
    const i = [];
    return r.forEach((o) => {
      e.has(o) || i.push(o);
    }), this.documentOverlayCache.getOverlays(t, i).next((o) => {
      o.forEach((u, c) => {
        e.set(u, c);
      });
    });
  }
  /**
   * Computes the local view for the given documents.
   *
   * @param docs - The documents to compute views for. It also has the base
   *   version of the documents.
   * @param overlays - The overlays that need to be applied to the given base
   *   version of the documents.
   * @param existenceStateChanged - A set of documents whose existence states
   *   might have changed. This is used to determine if we need to re-calculate
   *   overlays from mutation queues.
   * @return A map represents the local documents view.
   */
  computeViews(t, e, r, i) {
    let o = Ft();
    const u = nn(), c = function() {
      return nn();
    }();
    return e.forEach((h, f) => {
      const m = r.get(f.key);
      i.has(f.key) && (m === void 0 || m.mutation instanceof ae) ? o = o.insert(f.key, f) : m !== void 0 ? (u.set(f.key, m.mutation.getFieldMask()), rn(m.mutation, f, m.mutation.getFieldMask(), nt.now())) : (
        // no overlay exists
        // Using EMPTY to indicate there is no overlay for the document.
        u.set(f.key, At.empty())
      );
    }), this.recalculateAndSaveOverlays(t, o).next((h) => (h.forEach((f, m) => u.set(f, m)), e.forEach((f, m) => {
      var w;
      return c.set(f, new gd(m, (w = u.get(f)) !== null && w !== void 0 ? w : null));
    }), c));
  }
  recalculateAndSaveOverlays(t, e) {
    const r = nn();
    let i = new X((u, c) => u - c), o = U();
    return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t, e).next((u) => {
      for (const c of u) c.keys().forEach((h) => {
        const f = e.get(h);
        if (f === null) return;
        let m = r.get(h) || At.empty();
        m = c.applyToLocalView(f, m), r.set(h, m);
        const w = (i.get(c.batchId) || U()).add(h);
        i = i.insert(c.batchId, w);
      });
    }).next(() => {
      const u = [], c = i.getReverseIterator();
      for (; c.hasNext(); ) {
        const h = c.getNext(), f = h.key, m = h.value, w = Da();
        m.forEach((R) => {
          if (!o.has(R)) {
            const V = La(e.get(R), r.get(R));
            V !== null && w.set(R, V), o = o.add(R);
          }
        }), u.push(this.documentOverlayCache.saveOverlays(t, f, w));
      }
      return S.waitFor(u);
    }).next(() => r);
  }
  /**
   * Recalculates overlays by reading the documents from remote document cache
   * first, and saves them after they are calculated.
   */
  recalculateAndSaveOverlaysForDocumentKeys(t, e) {
    return this.remoteDocumentCache.getEntries(t, e).next((r) => this.recalculateAndSaveOverlays(t, r));
  }
  /**
   * Performs a query against the local view of all documents.
   *
   * @param transaction - The persistence transaction.
   * @param query - The query to match documents against.
   * @param offset - Read time and key to start scanning by (exclusive).
   * @param context - A optional tracker to keep a record of important details
   *   during database local query execution.
   */
  getDocumentsMatchingQuery(t, e, r, i) {
    return function(u) {
      return x.isDocumentKey(u.path) && u.collectionGroup === null && u.filters.length === 0;
    }(e) ? this.getDocumentsMatchingDocumentQuery(t, e.path) : Pa(e) ? this.getDocumentsMatchingCollectionGroupQuery(t, e, r, i) : this.getDocumentsMatchingCollectionQuery(t, e, r, i);
  }
  /**
   * Given a collection group, returns the next documents that follow the provided offset, along
   * with an updated batch ID.
   *
   * <p>The documents returned by this method are ordered by remote version from the provided
   * offset. If there are no more remote documents after the provided offset, documents with
   * mutations in order of batch id from the offset are returned. Since all documents in a batch are
   * returned together, the total number of documents returned can exceed {@code count}.
   *
   * @param transaction
   * @param collectionGroup The collection group for the documents.
   * @param offset The offset to index into.
   * @param count The number of documents to return
   * @return A LocalWriteResult with the documents that follow the provided offset and the last processed batch id.
   */
  getNextDocuments(t, e, r, i) {
    return this.remoteDocumentCache.getAllFromCollectionGroup(t, e, r, i).next((o) => {
      const u = i - o.size > 0 ? this.documentOverlayCache.getOverlaysForCollectionGroup(t, e, r.largestBatchId, i - o.size) : S.resolve(ne());
      let c = -1, h = o;
      return u.next((f) => S.forEach(f, (m, w) => (c < w.largestBatchId && (c = w.largestBatchId), o.get(m) ? S.resolve() : this.remoteDocumentCache.getEntry(t, m).next((R) => {
        h = h.insert(m, R);
      }))).next(() => this.populateOverlays(t, f, o)).next(() => this.computeViews(t, h, f, U())).next((m) => ({
        batchId: c,
        changes: ba(m)
      })));
    });
  }
  getDocumentsMatchingDocumentQuery(t, e) {
    return this.getDocument(t, new x(e)).next((r) => {
      let i = Je();
      return r.isFoundDocument() && (i = i.insert(r.key, r)), i;
    });
  }
  getDocumentsMatchingCollectionGroupQuery(t, e, r, i) {
    const o = e.collectionGroup;
    let u = Je();
    return this.indexManager.getCollectionParents(t, o).next((c) => S.forEach(c, (h) => {
      const f = function(w, R) {
        return new mn(
          R,
          /*collectionGroup=*/
          null,
          w.explicitOrderBy.slice(),
          w.filters.slice(),
          w.limit,
          w.limitType,
          w.startAt,
          w.endAt
        );
      }(e, h.child(o));
      return this.getDocumentsMatchingCollectionQuery(t, f, r, i).next((m) => {
        m.forEach((w, R) => {
          u = u.insert(w, R);
        });
      });
    }).next(() => u));
  }
  getDocumentsMatchingCollectionQuery(t, e, r, i) {
    let o;
    return this.documentOverlayCache.getOverlaysForCollection(t, e.path, r.largestBatchId).next((u) => (o = u, this.remoteDocumentCache.getDocumentsMatchingQuery(t, e, r, o, i))).next((u) => {
      o.forEach((h, f) => {
        const m = f.getKey();
        u.get(m) === null && (u = u.insert(m, _t.newInvalidDocument(m)));
      });
      let c = Je();
      return u.forEach((h, f) => {
        const m = o.get(h);
        m !== void 0 && rn(m.mutation, f, At.empty(), nt.now()), // Finally, insert the documents that still match the query
        hr(e, f) && (c = c.insert(h, f));
      }), c;
    });
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
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
class yd {
  constructor(t) {
    this.serializer = t, this.hr = /* @__PURE__ */ new Map(), this.Pr = /* @__PURE__ */ new Map();
  }
  getBundleMetadata(t, e) {
    return S.resolve(this.hr.get(e));
  }
  saveBundleMetadata(t, e) {
    return this.hr.set(
      e.id,
      /** Decodes a BundleMetadata proto into a BundleMetadata object. */
      function(i) {
        return {
          id: i.id,
          version: i.version,
          createTime: St(i.createTime)
        };
      }(e)
    ), S.resolve();
  }
  getNamedQuery(t, e) {
    return S.resolve(this.Pr.get(e));
  }
  saveNamedQuery(t, e) {
    return this.Pr.set(e.name, function(i) {
      return {
        name: i.name,
        query: dd(i.bundledQuery),
        readTime: St(i.readTime)
      };
    }(e)), S.resolve();
  }
}
/**
 * @license
 * Copyright 2022 Google LLC
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
class Ed {
  constructor() {
    this.overlays = new X(x.comparator), this.Ir = /* @__PURE__ */ new Map();
  }
  getOverlay(t, e) {
    return S.resolve(this.overlays.get(e));
  }
  getOverlays(t, e) {
    const r = ne();
    return S.forEach(e, (i) => this.getOverlay(t, i).next((o) => {
      o !== null && r.set(i, o);
    })).next(() => r);
  }
  saveOverlays(t, e, r) {
    return r.forEach((i, o) => {
      this.ht(t, e, o);
    }), S.resolve();
  }
  removeOverlaysForBatchId(t, e, r) {
    const i = this.Ir.get(r);
    return i !== void 0 && (i.forEach((o) => this.overlays = this.overlays.remove(o)), this.Ir.delete(r)), S.resolve();
  }
  getOverlaysForCollection(t, e, r) {
    const i = ne(), o = e.length + 1, u = new x(e.child("")), c = this.overlays.getIteratorFrom(u);
    for (; c.hasNext(); ) {
      const h = c.getNext().value, f = h.getKey();
      if (!e.isPrefixOf(f.path)) break;
      f.path.length === o && h.largestBatchId > r && i.set(h.getKey(), h);
    }
    return S.resolve(i);
  }
  getOverlaysForCollectionGroup(t, e, r, i) {
    let o = new X((f, m) => f - m);
    const u = this.overlays.getIterator();
    for (; u.hasNext(); ) {
      const f = u.getNext().value;
      if (f.getKey().getCollectionGroup() === e && f.largestBatchId > r) {
        let m = o.get(f.largestBatchId);
        m === null && (m = ne(), o = o.insert(f.largestBatchId, m)), m.set(f.getKey(), f);
      }
    }
    const c = ne(), h = o.getIterator();
    for (; h.hasNext() && (h.getNext().value.forEach((f, m) => c.set(f, m)), !(c.size() >= i)); )
      ;
    return S.resolve(c);
  }
  ht(t, e, r) {
    const i = this.overlays.get(r.key);
    if (i !== null) {
      const u = this.Ir.get(i.largestBatchId).delete(r.key);
      this.Ir.set(i.largestBatchId, u);
    }
    this.overlays = this.overlays.insert(r.key, new jh(e, r));
    let o = this.Ir.get(e);
    o === void 0 && (o = U(), this.Ir.set(e, o)), this.Ir.set(e, o.add(r.key));
  }
}
/**
 * @license
 * Copyright 2024 Google LLC
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
class vd {
  constructor() {
    this.sessionToken = ct.EMPTY_BYTE_STRING;
  }
  getSessionToken(t) {
    return S.resolve(this.sessionToken);
  }
  setSessionToken(t, e) {
    return this.sessionToken = e, S.resolve();
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class Os {
  constructor() {
    this.Tr = new lt(st.Er), // A set of outstanding references to a document sorted by target id.
    this.dr = new lt(st.Ar);
  }
  /** Returns true if the reference set contains no references. */
  isEmpty() {
    return this.Tr.isEmpty();
  }
  /** Adds a reference to the given document key for the given ID. */
  addReference(t, e) {
    const r = new st(t, e);
    this.Tr = this.Tr.add(r), this.dr = this.dr.add(r);
  }
  /** Add references to the given document keys for the given ID. */
  Rr(t, e) {
    t.forEach((r) => this.addReference(r, e));
  }
  /**
   * Removes a reference to the given document key for the given
   * ID.
   */
  removeReference(t, e) {
    this.Vr(new st(t, e));
  }
  mr(t, e) {
    t.forEach((r) => this.removeReference(r, e));
  }
  /**
   * Clears all references with a given ID. Calls removeRef() for each key
   * removed.
   */
  gr(t) {
    const e = new x(new Y([])), r = new st(e, t), i = new st(e, t + 1), o = [];
    return this.dr.forEachInRange([r, i], (u) => {
      this.Vr(u), o.push(u.key);
    }), o;
  }
  pr() {
    this.Tr.forEach((t) => this.Vr(t));
  }
  Vr(t) {
    this.Tr = this.Tr.delete(t), this.dr = this.dr.delete(t);
  }
  yr(t) {
    const e = new x(new Y([])), r = new st(e, t), i = new st(e, t + 1);
    let o = U();
    return this.dr.forEachInRange([r, i], (u) => {
      o = o.add(u.key);
    }), o;
  }
  containsKey(t) {
    const e = new st(t, 0), r = this.Tr.firstAfterOrEqual(e);
    return r !== null && t.isEqual(r.key);
  }
}
class st {
  constructor(t, e) {
    this.key = t, this.wr = e;
  }
  /** Compare by key then by ID */
  static Er(t, e) {
    return x.comparator(t.key, e.key) || $(t.wr, e.wr);
  }
  /** Compare by ID then by key */
  static Ar(t, e) {
    return $(t.wr, e.wr) || x.comparator(t.key, e.key);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class Td {
  constructor(t, e) {
    this.indexManager = t, this.referenceDelegate = e, /**
     * The set of all mutations that have been sent but not yet been applied to
     * the backend.
     */
    this.mutationQueue = [], /** Next value to use when assigning sequential IDs to each mutation batch. */
    this.Sr = 1, /** An ordered mapping between documents and the mutations batch IDs. */
    this.br = new lt(st.Er);
  }
  checkEmpty(t) {
    return S.resolve(this.mutationQueue.length === 0);
  }
  addMutationBatch(t, e, r, i) {
    const o = this.Sr;
    this.Sr++, this.mutationQueue.length > 0 && this.mutationQueue[this.mutationQueue.length - 1];
    const u = new qh(o, e, r, i);
    this.mutationQueue.push(u);
    for (const c of i) this.br = this.br.add(new st(c.key, o)), this.indexManager.addToCollectionParentIndex(t, c.key.path.popLast());
    return S.resolve(u);
  }
  lookupMutationBatch(t, e) {
    return S.resolve(this.Dr(e));
  }
  getNextMutationBatchAfterBatchId(t, e) {
    const r = e + 1, i = this.vr(r), o = i < 0 ? 0 : i;
    return S.resolve(this.mutationQueue.length > o ? this.mutationQueue[o] : null);
  }
  getHighestUnacknowledgedBatchId() {
    return S.resolve(this.mutationQueue.length === 0 ? -1 : this.Sr - 1);
  }
  getAllMutationBatches(t) {
    return S.resolve(this.mutationQueue.slice());
  }
  getAllMutationBatchesAffectingDocumentKey(t, e) {
    const r = new st(e, 0), i = new st(e, Number.POSITIVE_INFINITY), o = [];
    return this.br.forEachInRange([r, i], (u) => {
      const c = this.Dr(u.wr);
      o.push(c);
    }), S.resolve(o);
  }
  getAllMutationBatchesAffectingDocumentKeys(t, e) {
    let r = new lt($);
    return e.forEach((i) => {
      const o = new st(i, 0), u = new st(i, Number.POSITIVE_INFINITY);
      this.br.forEachInRange([o, u], (c) => {
        r = r.add(c.wr);
      });
    }), S.resolve(this.Cr(r));
  }
  getAllMutationBatchesAffectingQuery(t, e) {
    const r = e.path, i = r.length + 1;
    let o = r;
    x.isDocumentKey(o) || (o = o.child(""));
    const u = new st(new x(o), 0);
    let c = new lt($);
    return this.br.forEachWhile((h) => {
      const f = h.key.path;
      return !!r.isPrefixOf(f) && // Rows with document keys more than one segment longer than the query
      // path can't be matches. For example, a query on 'rooms' can't match
      // the document /rooms/abc/messages/xyx.
      // TODO(mcg): we'll need a different scanner when we implement
      // ancestor queries.
      (f.length === i && (c = c.add(h.wr)), !0);
    }, u), S.resolve(this.Cr(c));
  }
  Cr(t) {
    const e = [];
    return t.forEach((r) => {
      const i = this.Dr(r);
      i !== null && e.push(i);
    }), e;
  }
  removeMutationBatch(t, e) {
    z(this.Fr(e.batchId, "removed") === 0), this.mutationQueue.shift();
    let r = this.br;
    return S.forEach(e.mutations, (i) => {
      const o = new st(i.key, e.batchId);
      return r = r.delete(o), this.referenceDelegate.markPotentiallyOrphaned(t, i.key);
    }).next(() => {
      this.br = r;
    });
  }
  On(t) {
  }
  containsKey(t, e) {
    const r = new st(e, 0), i = this.br.firstAfterOrEqual(r);
    return S.resolve(e.isEqual(i && i.key));
  }
  performConsistencyCheck(t) {
    return this.mutationQueue.length, S.resolve();
  }
  /**
   * Finds the index of the given batchId in the mutation queue and asserts that
   * the resulting index is within the bounds of the queue.
   *
   * @param batchId - The batchId to search for
   * @param action - A description of what the caller is doing, phrased in passive
   * form (e.g. "acknowledged" in a routine that acknowledges batches).
   */
  Fr(t, e) {
    return this.vr(t);
  }
  /**
   * Finds the index of the given batchId in the mutation queue. This operation
   * is O(1).
   *
   * @returns The computed index of the batch with the given batchId, based on
   * the state of the queue. Note this index can be negative if the requested
   * batchId has already been removed from the queue or past the end of the
   * queue if the batchId is larger than the last added batch.
   */
  vr(t) {
    return this.mutationQueue.length === 0 ? 0 : t - this.mutationQueue[0].batchId;
  }
  /**
   * A version of lookupMutationBatch that doesn't return a promise, this makes
   * other functions that uses this code easier to read and more efficient.
   */
  Dr(t) {
    const e = this.vr(t);
    return e < 0 || e >= this.mutationQueue.length ? null : this.mutationQueue[e];
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class Id {
  /**
   * @param sizer - Used to assess the size of a document. For eager GC, this is
   * expected to just return 0 to avoid unnecessarily doing the work of
   * calculating the size.
   */
  constructor(t) {
    this.Mr = t, /** Underlying cache of documents and their read times. */
    this.docs = function() {
      return new X(x.comparator);
    }(), /** Size of all cached documents. */
    this.size = 0;
  }
  setIndexManager(t) {
    this.indexManager = t;
  }
  /**
   * Adds the supplied entry to the cache and updates the cache size as appropriate.
   *
   * All calls of `addEntry`  are required to go through the RemoteDocumentChangeBuffer
   * returned by `newChangeBuffer()`.
   */
  addEntry(t, e) {
    const r = e.key, i = this.docs.get(r), o = i ? i.size : 0, u = this.Mr(e);
    return this.docs = this.docs.insert(r, {
      document: e.mutableCopy(),
      size: u
    }), this.size += u - o, this.indexManager.addToCollectionParentIndex(t, r.path.popLast());
  }
  /**
   * Removes the specified entry from the cache and updates the cache size as appropriate.
   *
   * All calls of `removeEntry` are required to go through the RemoteDocumentChangeBuffer
   * returned by `newChangeBuffer()`.
   */
  removeEntry(t) {
    const e = this.docs.get(t);
    e && (this.docs = this.docs.remove(t), this.size -= e.size);
  }
  getEntry(t, e) {
    const r = this.docs.get(e);
    return S.resolve(r ? r.document.mutableCopy() : _t.newInvalidDocument(e));
  }
  getEntries(t, e) {
    let r = Ft();
    return e.forEach((i) => {
      const o = this.docs.get(i);
      r = r.insert(i, o ? o.document.mutableCopy() : _t.newInvalidDocument(i));
    }), S.resolve(r);
  }
  getDocumentsMatchingQuery(t, e, r, i) {
    let o = Ft();
    const u = e.path, c = new x(u.child("")), h = this.docs.getIteratorFrom(c);
    for (; h.hasNext(); ) {
      const { key: f, value: { document: m } } = h.getNext();
      if (!u.isPrefixOf(f.path)) break;
      f.path.length > u.length + 1 || ih(sh(m), r) <= 0 || (i.has(m.key) || hr(e, m)) && (o = o.insert(m.key, m.mutableCopy()));
    }
    return S.resolve(o);
  }
  getAllFromCollectionGroup(t, e, r, i) {
    M();
  }
  Or(t, e) {
    return S.forEach(this.docs, (r) => e(r));
  }
  newChangeBuffer(t) {
    return new wd(this);
  }
  getSize(t) {
    return S.resolve(this.size);
  }
}
class wd extends md {
  constructor(t) {
    super(), this.cr = t;
  }
  applyChanges(t) {
    const e = [];
    return this.changes.forEach((r, i) => {
      i.isValidDocument() ? e.push(this.cr.addEntry(t, i)) : this.cr.removeEntry(r);
    }), S.waitFor(e);
  }
  getFromCache(t, e) {
    return this.cr.getEntry(t, e);
  }
  getAllFromCache(t, e) {
    return this.cr.getEntries(t, e);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class Ad {
  constructor(t) {
    this.persistence = t, /**
     * Maps a target to the data about that target
     */
    this.Nr = new Ce((e) => Cs(e), bs), /** The last received snapshot version. */
    this.lastRemoteSnapshotVersion = L.min(), /** The highest numbered target ID encountered. */
    this.highestTargetId = 0, /** The highest sequence number encountered. */
    this.Lr = 0, /**
     * A ordered bidirectional mapping between documents and the remote target
     * IDs.
     */
    this.Br = new Os(), this.targetCount = 0, this.kr = we.Bn();
  }
  forEachTarget(t, e) {
    return this.Nr.forEach((r, i) => e(i)), S.resolve();
  }
  getLastRemoteSnapshotVersion(t) {
    return S.resolve(this.lastRemoteSnapshotVersion);
  }
  getHighestSequenceNumber(t) {
    return S.resolve(this.Lr);
  }
  allocateTargetId(t) {
    return this.highestTargetId = this.kr.next(), S.resolve(this.highestTargetId);
  }
  setTargetsMetadata(t, e, r) {
    return r && (this.lastRemoteSnapshotVersion = r), e > this.Lr && (this.Lr = e), S.resolve();
  }
  Kn(t) {
    this.Nr.set(t.target, t);
    const e = t.targetId;
    e > this.highestTargetId && (this.kr = new we(e), this.highestTargetId = e), t.sequenceNumber > this.Lr && (this.Lr = t.sequenceNumber);
  }
  addTargetData(t, e) {
    return this.Kn(e), this.targetCount += 1, S.resolve();
  }
  updateTargetData(t, e) {
    return this.Kn(e), S.resolve();
  }
  removeTargetData(t, e) {
    return this.Nr.delete(e.target), this.Br.gr(e.targetId), this.targetCount -= 1, S.resolve();
  }
  removeTargets(t, e, r) {
    let i = 0;
    const o = [];
    return this.Nr.forEach((u, c) => {
      c.sequenceNumber <= e && r.get(c.targetId) === null && (this.Nr.delete(u), o.push(this.removeMatchingKeysForTargetId(t, c.targetId)), i++);
    }), S.waitFor(o).next(() => i);
  }
  getTargetCount(t) {
    return S.resolve(this.targetCount);
  }
  getTargetData(t, e) {
    const r = this.Nr.get(e) || null;
    return S.resolve(r);
  }
  addMatchingKeys(t, e, r) {
    return this.Br.Rr(e, r), S.resolve();
  }
  removeMatchingKeys(t, e, r) {
    this.Br.mr(e, r);
    const i = this.persistence.referenceDelegate, o = [];
    return i && e.forEach((u) => {
      o.push(i.markPotentiallyOrphaned(t, u));
    }), S.waitFor(o);
  }
  removeMatchingKeysForTargetId(t, e) {
    return this.Br.gr(e), S.resolve();
  }
  getMatchingKeysForTargetId(t, e) {
    const r = this.Br.yr(e);
    return S.resolve(r);
  }
  containsKey(t, e) {
    return S.resolve(this.Br.containsKey(e));
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class Rd {
  /**
   * The constructor accepts a factory for creating a reference delegate. This
   * allows both the delegate and this instance to have strong references to
   * each other without having nullable fields that would then need to be
   * checked or asserted on every access.
   */
  constructor(t, e) {
    this.qr = {}, this.overlays = {}, this.Qr = new Rs(0), this.Kr = !1, this.Kr = !0, this.$r = new vd(), this.referenceDelegate = t(this), this.Ur = new Ad(this), this.indexManager = new fd(), this.remoteDocumentCache = function(i) {
      return new Id(i);
    }((r) => this.referenceDelegate.Wr(r)), this.serializer = new hd(e), this.Gr = new yd(this.serializer);
  }
  start() {
    return Promise.resolve();
  }
  shutdown() {
    return this.Kr = !1, Promise.resolve();
  }
  get started() {
    return this.Kr;
  }
  setDatabaseDeletedListener() {
  }
  setNetworkEnabled() {
  }
  getIndexManager(t) {
    return this.indexManager;
  }
  getDocumentOverlayCache(t) {
    let e = this.overlays[t.toKey()];
    return e || (e = new Ed(), this.overlays[t.toKey()] = e), e;
  }
  getMutationQueue(t, e) {
    let r = this.qr[t.toKey()];
    return r || (r = new Td(e, this.referenceDelegate), this.qr[t.toKey()] = r), r;
  }
  getGlobalsCache() {
    return this.$r;
  }
  getTargetCache() {
    return this.Ur;
  }
  getRemoteDocumentCache() {
    return this.remoteDocumentCache;
  }
  getBundleCache() {
    return this.Gr;
  }
  runTransaction(t, e, r) {
    k("MemoryPersistence", "Starting transaction:", t);
    const i = new Pd(this.Qr.next());
    return this.referenceDelegate.zr(), r(i).next((o) => this.referenceDelegate.jr(i).next(() => o)).toPromise().then((o) => (i.raiseOnCommittedEvent(), o));
  }
  Hr(t, e) {
    return S.or(Object.values(this.qr).map((r) => () => r.containsKey(t, e)));
  }
}
class Pd extends ah {
  constructor(t) {
    super(), this.currentSequenceNumber = t;
  }
}
class Ms {
  constructor(t) {
    this.persistence = t, /** Tracks all documents that are active in Query views. */
    this.Jr = new Os(), /** The list of documents that are potentially GCed after each transaction. */
    this.Yr = null;
  }
  static Zr(t) {
    return new Ms(t);
  }
  get Xr() {
    if (this.Yr) return this.Yr;
    throw M();
  }
  addReference(t, e, r) {
    return this.Jr.addReference(r, e), this.Xr.delete(r.toString()), S.resolve();
  }
  removeReference(t, e, r) {
    return this.Jr.removeReference(r, e), this.Xr.add(r.toString()), S.resolve();
  }
  markPotentiallyOrphaned(t, e) {
    return this.Xr.add(e.toString()), S.resolve();
  }
  removeTarget(t, e) {
    this.Jr.gr(e.targetId).forEach((i) => this.Xr.add(i.toString()));
    const r = this.persistence.getTargetCache();
    return r.getMatchingKeysForTargetId(t, e.targetId).next((i) => {
      i.forEach((o) => this.Xr.add(o.toString()));
    }).next(() => r.removeTargetData(t, e));
  }
  zr() {
    this.Yr = /* @__PURE__ */ new Set();
  }
  jr(t) {
    const e = this.persistence.getRemoteDocumentCache().newChangeBuffer();
    return S.forEach(this.Xr, (r) => {
      const i = x.fromPath(r);
      return this.ei(t, i).next((o) => {
        o || e.removeEntry(i, L.min());
      });
    }).next(() => (this.Yr = null, e.apply(t)));
  }
  updateLimboDocument(t, e) {
    return this.ei(t, e).next((r) => {
      r ? this.Xr.delete(e.toString()) : this.Xr.add(e.toString());
    });
  }
  Wr(t) {
    return 0;
  }
  ei(t, e) {
    return S.or([() => S.resolve(this.Jr.containsKey(e)), () => this.persistence.getTargetCache().containsKey(t, e), () => this.persistence.Hr(t, e)]);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class Ls {
  constructor(t, e, r, i) {
    this.targetId = t, this.fromCache = e, this.$i = r, this.Ui = i;
  }
  static Wi(t, e) {
    let r = U(), i = U();
    for (const o of e.docChanges) switch (o.type) {
      case 0:
        r = r.add(o.doc.key);
        break;
      case 1:
        i = i.add(o.doc.key);
    }
    return new Ls(t, e.fromCache, r, i);
  }
}
/**
 * @license
 * Copyright 2023 Google LLC
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
class Sd {
  constructor() {
    this._documentReadCount = 0;
  }
  get documentReadCount() {
    return this._documentReadCount;
  }
  incrementDocumentReadCount(t) {
    this._documentReadCount += t;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
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
class Vd {
  constructor() {
    this.Gi = !1, this.zi = !1, /**
     * SDK only decides whether it should create index when collection size is
     * larger than this.
     */
    this.ji = 100, this.Hi = /**
    * This cost represents the evaluation result of
    * (([index, docKey] + [docKey, docContent]) per document in the result set)
    * / ([docKey, docContent] per documents in full collection scan) coming from
    * experiment [enter PR experiment URL here].
    */
    function() {
      return bl() ? 8 : uh(Vl()) > 0 ? 6 : 4;
    }();
  }
  /** Sets the document view to query against. */
  initialize(t, e) {
    this.Ji = t, this.indexManager = e, this.Gi = !0;
  }
  /** Returns all local documents matching the specified query. */
  getDocumentsMatchingQuery(t, e, r, i) {
    const o = {
      result: null
    };
    return this.Yi(t, e).next((u) => {
      o.result = u;
    }).next(() => {
      if (!o.result) return this.Zi(t, e, i, r).next((u) => {
        o.result = u;
      });
    }).next(() => {
      if (o.result) return;
      const u = new Sd();
      return this.Xi(t, e, u).next((c) => {
        if (o.result = c, this.zi) return this.es(t, e, u, c.size);
      });
    }).next(() => o.result);
  }
  es(t, e, r, i) {
    return r.documentReadCount < this.ji ? (Ye() <= q.DEBUG && k("QueryEngine", "SDK will not create cache indexes for query:", fe(e), "since it only creates cache indexes for collection contains", "more than or equal to", this.ji, "documents"), S.resolve()) : (Ye() <= q.DEBUG && k("QueryEngine", "Query:", fe(e), "scans", r.documentReadCount, "local documents and returns", i, "documents as results."), r.documentReadCount > this.Hi * i ? (Ye() <= q.DEBUG && k("QueryEngine", "The SDK decides to create cache indexes for query:", fe(e), "as using cache indexes may help improve performance."), this.indexManager.createTargetIndexes(t, Pt(e))) : S.resolve());
  }
  /**
   * Performs an indexed query that evaluates the query based on a collection's
   * persisted index values. Returns `null` if an index is not available.
   */
  Yi(t, e) {
    if (Ao(e))
      return S.resolve(null);
    let r = Pt(e);
    return this.indexManager.getIndexType(t, r).next((i) => i === 0 ? null : (e.limit !== null && i === 1 && // We cannot apply a limit for targets that are served using a partial
    // index. If a partial index will be used to serve the target, the
    // query may return a superset of documents that match the target
    // (e.g. if the index doesn't include all the target's filters), or
    // may return the correct set of documents in the wrong order (e.g. if
    // the index doesn't include a segment for one of the orderBys).
    // Therefore, a limit should not be applied in such cases.
    (e = fs(
      e,
      null,
      "F"
      /* LimitType.First */
    ), r = Pt(e)), this.indexManager.getDocumentsMatchingTarget(t, r).next((o) => {
      const u = U(...o);
      return this.Ji.getDocuments(t, u).next((c) => this.indexManager.getMinOffset(t, r).next((h) => {
        const f = this.ts(e, c);
        return this.ns(e, f, u, h.readTime) ? this.Yi(t, fs(
          e,
          null,
          "F"
          /* LimitType.First */
        )) : this.rs(t, f, e, h);
      }));
    })));
  }
  /**
   * Performs a query based on the target's persisted query mapping. Returns
   * `null` if the mapping is not available or cannot be used.
   */
  Zi(t, e, r, i) {
    return Ao(e) || i.isEqual(L.min()) ? S.resolve(null) : this.Ji.getDocuments(t, r).next((o) => {
      const u = this.ts(e, o);
      return this.ns(e, u, r, i) ? S.resolve(null) : (Ye() <= q.DEBUG && k("QueryEngine", "Re-using previous result from %s to execute query: %s", i.toString(), fe(e)), this.rs(t, u, e, rh(i, -1)).next((c) => c));
    });
  }
  /** Applies the query filter and sorting to the provided documents.  */
  ts(t, e) {
    let r = new lt(Va(t));
    return e.forEach((i, o) => {
      hr(t, o) && (r = r.add(o));
    }), r;
  }
  /**
   * Determines if a limit query needs to be refilled from cache, making it
   * ineligible for index-free execution.
   *
   * @param query - The query.
   * @param sortedPreviousResults - The documents that matched the query when it
   * was last synchronized, sorted by the query's comparator.
   * @param remoteKeys - The document keys that matched the query at the last
   * snapshot.
   * @param limboFreeSnapshotVersion - The version of the snapshot when the
   * query was last synchronized.
   */
  ns(t, e, r, i) {
    if (t.limit === null)
      return !1;
    if (r.size !== e.size)
      return !0;
    const o = t.limitType === "F" ? e.last() : e.first();
    return !!o && (o.hasPendingWrites || o.version.compareTo(i) > 0);
  }
  Xi(t, e, r) {
    return Ye() <= q.DEBUG && k("QueryEngine", "Using full collection scan to execute query:", fe(e)), this.Ji.getDocumentsMatchingQuery(t, e, Ht.min(), r);
  }
  /**
   * Combines the results from an indexed execution with the remaining documents
   * that have not yet been indexed.
   */
  rs(t, e, r, i) {
    return this.Ji.getDocumentsMatchingQuery(t, r, i).next((o) => (
      // Merge with existing results
      (e.forEach((u) => {
        o = o.insert(u.key, u);
      }), o)
    ));
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
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
class Cd {
  constructor(t, e, r, i) {
    this.persistence = t, this.ss = e, this.serializer = i, /**
     * Maps a targetID to data about its target.
     *
     * PORTING NOTE: We are using an immutable data structure on Web to make re-runs
     * of `applyRemoteEvent()` idempotent.
     */
    this.os = new X($), /** Maps a target to its targetID. */
    // TODO(wuandy): Evaluate if TargetId can be part of Target.
    this._s = new Ce((o) => Cs(o), bs), /**
     * A per collection group index of the last read time processed by
     * `getNewDocumentChanges()`.
     *
     * PORTING NOTE: This is only used for multi-tab synchronization.
     */
    this.us = /* @__PURE__ */ new Map(), this.cs = t.getRemoteDocumentCache(), this.Ur = t.getTargetCache(), this.Gr = t.getBundleCache(), this.ls(r);
  }
  ls(t) {
    this.documentOverlayCache = this.persistence.getDocumentOverlayCache(t), this.indexManager = this.persistence.getIndexManager(t), this.mutationQueue = this.persistence.getMutationQueue(t, this.indexManager), this.localDocuments = new _d(this.cs, this.mutationQueue, this.documentOverlayCache, this.indexManager), this.cs.setIndexManager(this.indexManager), this.ss.initialize(this.localDocuments, this.indexManager);
  }
  collectGarbage(t) {
    return this.persistence.runTransaction("Collect garbage", "readwrite-primary", (e) => t.collect(e, this.os));
  }
}
function bd(n, t, e, r) {
  return new Cd(n, t, e, r);
}
async function Ya(n, t) {
  const e = F(n);
  return await e.persistence.runTransaction("Handle user change", "readonly", (r) => {
    let i;
    return e.mutationQueue.getAllMutationBatches(r).next((o) => (i = o, e.ls(t), e.mutationQueue.getAllMutationBatches(r))).next((o) => {
      const u = [], c = [];
      let h = U();
      for (const f of i) {
        u.push(f.batchId);
        for (const m of f.mutations) h = h.add(m.key);
      }
      for (const f of o) {
        c.push(f.batchId);
        for (const m of f.mutations) h = h.add(m.key);
      }
      return e.localDocuments.getDocuments(r, h).next((f) => ({
        hs: f,
        removedBatchIds: u,
        addedBatchIds: c
      }));
    });
  });
}
function Dd(n, t) {
  const e = F(n);
  return e.persistence.runTransaction("Acknowledge batch", "readwrite-primary", (r) => {
    const i = t.batch.keys(), o = e.cs.newChangeBuffer({
      trackRemovals: !0
    });
    return function(c, h, f, m) {
      const w = f.batch, R = w.keys();
      let V = S.resolve();
      return R.forEach((D) => {
        V = V.next(() => m.getEntry(h, D)).next((O) => {
          const b = f.docVersions.get(D);
          z(b !== null), O.version.compareTo(b) < 0 && (w.applyToRemoteDocument(O, f), O.isValidDocument() && // We use the commitVersion as the readTime rather than the
          // document's updateTime since the updateTime is not advanced
          // for updates that do not modify the underlying document.
          (O.setReadTime(f.commitVersion), m.addEntry(O)));
        });
      }), V.next(() => c.mutationQueue.removeMutationBatch(h, w));
    }(e, r, t, o).next(() => o.apply(r)).next(() => e.mutationQueue.performConsistencyCheck(r)).next(() => e.documentOverlayCache.removeOverlaysForBatchId(r, i, t.batch.batchId)).next(() => e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r, function(c) {
      let h = U();
      for (let f = 0; f < c.mutationResults.length; ++f)
        c.mutationResults[f].transformResults.length > 0 && (h = h.add(c.batch.mutations[f].key));
      return h;
    }(t))).next(() => e.localDocuments.getDocuments(r, i));
  });
}
function Xa(n) {
  const t = F(n);
  return t.persistence.runTransaction("Get last remote snapshot version", "readonly", (e) => t.Ur.getLastRemoteSnapshotVersion(e));
}
function Nd(n, t) {
  const e = F(n), r = t.snapshotVersion;
  let i = e.os;
  return e.persistence.runTransaction("Apply remote event", "readwrite-primary", (o) => {
    const u = e.cs.newChangeBuffer({
      trackRemovals: !0
    });
    i = e.os;
    const c = [];
    t.targetChanges.forEach((m, w) => {
      const R = i.get(w);
      if (!R) return;
      c.push(e.Ur.removeMatchingKeys(o, m.removedDocuments, w).next(() => e.Ur.addMatchingKeys(o, m.addedDocuments, w)));
      let V = R.withSequenceNumber(o.currentSequenceNumber);
      t.targetMismatches.get(w) !== null ? V = V.withResumeToken(ct.EMPTY_BYTE_STRING, L.min()).withLastLimboFreeSnapshotVersion(L.min()) : m.resumeToken.approximateByteSize() > 0 && (V = V.withResumeToken(m.resumeToken, r)), i = i.insert(w, V), // Update the target data if there are target changes (or if
      // sufficient time has passed since the last update).
      /**
      * Returns true if the newTargetData should be persisted during an update of
      * an active target. TargetData should always be persisted when a target is
      * being released and should not call this function.
      *
      * While the target is active, TargetData updates can be omitted when nothing
      * about the target has changed except metadata like the resume token or
      * snapshot version. Occasionally it's worth the extra write to prevent these
      * values from getting too stale after a crash, but this doesn't have to be
      * too frequent.
      */
      function(O, b, K) {
        return O.resumeToken.approximateByteSize() === 0 || b.snapshotVersion.toMicroseconds() - O.snapshotVersion.toMicroseconds() >= 3e8 ? !0 : K.addedDocuments.size + K.modifiedDocuments.size + K.removedDocuments.size > 0;
      }(R, V, m) && c.push(e.Ur.updateTargetData(o, V));
    });
    let h = Ft(), f = U();
    if (t.documentUpdates.forEach((m) => {
      t.resolvedLimboDocuments.has(m) && c.push(e.persistence.referenceDelegate.updateLimboDocument(o, m));
    }), // Each loop iteration only affects its "own" doc, so it's safe to get all
    // the remote documents in advance in a single call.
    c.push(kd(o, u, t.documentUpdates).next((m) => {
      h = m.Ps, f = m.Is;
    })), !r.isEqual(L.min())) {
      const m = e.Ur.getLastRemoteSnapshotVersion(o).next((w) => e.Ur.setTargetsMetadata(o, o.currentSequenceNumber, r));
      c.push(m);
    }
    return S.waitFor(c).next(() => u.apply(o)).next(() => e.localDocuments.getLocalViewOfDocuments(o, h, f)).next(() => h);
  }).then((o) => (e.os = i, o));
}
function kd(n, t, e) {
  let r = U(), i = U();
  return e.forEach((o) => r = r.add(o)), t.getEntries(n, r).next((o) => {
    let u = Ft();
    return e.forEach((c, h) => {
      const f = o.get(c);
      h.isFoundDocument() !== f.isFoundDocument() && (i = i.add(c)), // Note: The order of the steps below is important, since we want
      // to ensure that rejected limbo resolutions (which fabricate
      // NoDocuments with SnapshotVersion.min()) never add documents to
      // cache.
      h.isNoDocument() && h.version.isEqual(L.min()) ? (
        // NoDocuments with SnapshotVersion.min() are used in manufactured
        // events. We remove these documents from cache since we lost
        // access.
        (t.removeEntry(c, h.readTime), u = u.insert(c, h))
      ) : !f.isValidDocument() || h.version.compareTo(f.version) > 0 || h.version.compareTo(f.version) === 0 && f.hasPendingWrites ? (t.addEntry(h), u = u.insert(c, h)) : k("LocalStore", "Ignoring outdated watch update for ", c, ". Current version:", f.version, " Watch version:", h.version);
    }), {
      Ps: u,
      Is: i
    };
  });
}
function xd(n, t) {
  const e = F(n);
  return e.persistence.runTransaction("Get next mutation batch", "readonly", (r) => (t === void 0 && (t = -1), e.mutationQueue.getNextMutationBatchAfterBatchId(r, t)));
}
function Od(n, t) {
  const e = F(n);
  return e.persistence.runTransaction("Allocate target", "readwrite", (r) => {
    let i;
    return e.Ur.getTargetData(r, t).next((o) => o ? (
      // This target has been listened to previously, so reuse the
      // previous targetID.
      // TODO(mcg): freshen last accessed date?
      (i = o, S.resolve(i))
    ) : e.Ur.allocateTargetId(r).next((u) => (i = new $t(t, u, "TargetPurposeListen", r.currentSequenceNumber), e.Ur.addTargetData(r, i).next(() => i))));
  }).then((r) => {
    const i = e.os.get(r.targetId);
    return (i === null || r.snapshotVersion.compareTo(i.snapshotVersion) > 0) && (e.os = e.os.insert(r.targetId, r), e._s.set(t, r.targetId)), r;
  });
}
async function ys(n, t, e) {
  const r = F(n), i = r.os.get(t), o = e ? "readwrite" : "readwrite-primary";
  try {
    e || await r.persistence.runTransaction("Release target", o, (u) => r.persistence.referenceDelegate.removeTarget(u, i));
  } catch (u) {
    if (!pn(u)) throw u;
    k("LocalStore", `Failed to update sequence numbers for target ${t}: ${u}`);
  }
  r.os = r.os.remove(t), r._s.delete(i.target);
}
function Oo(n, t, e) {
  const r = F(n);
  let i = L.min(), o = U();
  return r.persistence.runTransaction(
    "Execute query",
    "readwrite",
    // Use readwrite instead of readonly so indexes can be created
    // Use readwrite instead of readonly so indexes can be created
    (u) => function(h, f, m) {
      const w = F(h), R = w._s.get(m);
      return R !== void 0 ? S.resolve(w.os.get(R)) : w.Ur.getTargetData(f, m);
    }(r, u, Pt(t)).next((c) => {
      if (c) return i = c.lastLimboFreeSnapshotVersion, r.Ur.getMatchingKeysForTargetId(u, c.targetId).next((h) => {
        o = h;
      });
    }).next(() => r.ss.getDocumentsMatchingQuery(u, t, e ? i : L.min(), e ? o : U())).next((c) => (Md(r, Ph(t), c), {
      documents: c,
      Ts: o
    }))
  );
}
function Md(n, t, e) {
  let r = n.us.get(t) || L.min();
  e.forEach((i, o) => {
    o.readTime.compareTo(r) > 0 && (r = o.readTime);
  }), n.us.set(t, r);
}
class Mo {
  constructor() {
    this.activeTargetIds = Nh();
  }
  fs(t) {
    this.activeTargetIds = this.activeTargetIds.add(t);
  }
  gs(t) {
    this.activeTargetIds = this.activeTargetIds.delete(t);
  }
  /**
   * Converts this entry into a JSON-encoded format we can use for WebStorage.
   * Does not encode `clientId` as it is part of the key in WebStorage.
   */
  Vs() {
    const t = {
      activeTargetIds: this.activeTargetIds.toArray(),
      updateTimeMs: Date.now()
    };
    return JSON.stringify(t);
  }
}
class Ld {
  constructor() {
    this.so = new Mo(), this.oo = {}, this.onlineStateHandler = null, this.sequenceNumberHandler = null;
  }
  addPendingMutation(t) {
  }
  updateMutationState(t, e, r) {
  }
  addLocalQueryTarget(t, e = !0) {
    return e && this.so.fs(t), this.oo[t] || "not-current";
  }
  updateQueryState(t, e, r) {
    this.oo[t] = e;
  }
  removeLocalQueryTarget(t) {
    this.so.gs(t);
  }
  isLocalQueryTarget(t) {
    return this.so.activeTargetIds.has(t);
  }
  clearQueryState(t) {
    delete this.oo[t];
  }
  getAllActiveQueryTargets() {
    return this.so.activeTargetIds;
  }
  isActiveQueryTarget(t) {
    return this.so.activeTargetIds.has(t);
  }
  start() {
    return this.so = new Mo(), Promise.resolve();
  }
  handleUserChange(t, e, r) {
  }
  setOnlineState(t) {
  }
  shutdown() {
  }
  writeSequenceNumber(t) {
  }
  notifyBundleLoaded(t) {
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
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
class Fd {
  _o(t) {
  }
  shutdown() {
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
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
class Lo {
  constructor() {
    this.ao = () => this.uo(), this.co = () => this.lo(), this.ho = [], this.Po();
  }
  _o(t) {
    this.ho.push(t);
  }
  shutdown() {
    window.removeEventListener("online", this.ao), window.removeEventListener("offline", this.co);
  }
  Po() {
    window.addEventListener("online", this.ao), window.addEventListener("offline", this.co);
  }
  uo() {
    k("ConnectivityMonitor", "Network connectivity changed: AVAILABLE");
    for (const t of this.ho) t(
      0
      /* NetworkStatus.AVAILABLE */
    );
  }
  lo() {
    k("ConnectivityMonitor", "Network connectivity changed: UNAVAILABLE");
    for (const t of this.ho) t(
      1
      /* NetworkStatus.UNAVAILABLE */
    );
  }
  // TODO(chenbrian): Consider passing in window either into this component or
  // here for testing via FakeWindow.
  /** Checks that all used attributes of window are available. */
  static D() {
    return typeof window < "u" && window.addEventListener !== void 0 && window.removeEventListener !== void 0;
  }
}
/**
 * @license
 * Copyright 2023 Google LLC
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
let $n = null;
function Jr() {
  return $n === null ? $n = function() {
    return 268435456 + Math.round(2147483648 * Math.random());
  }() : $n++, "0x" + $n.toString(16);
}
/**
 * @license
 * Copyright 2020 Google LLC
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
const Ud = {
  BatchGetDocuments: "batchGet",
  Commit: "commit",
  RunQuery: "runQuery",
  RunAggregationQuery: "runAggregationQuery"
};
/**
 * @license
 * Copyright 2017 Google LLC
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
class Bd {
  constructor(t) {
    this.Io = t.Io, this.To = t.To;
  }
  Eo(t) {
    this.Ao = t;
  }
  Ro(t) {
    this.Vo = t;
  }
  mo(t) {
    this.fo = t;
  }
  onMessage(t) {
    this.po = t;
  }
  close() {
    this.To();
  }
  send(t) {
    this.Io(t);
  }
  yo() {
    this.Ao();
  }
  wo() {
    this.Vo();
  }
  So(t) {
    this.fo(t);
  }
  bo(t) {
    this.po(t);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
const mt = "WebChannelConnection";
class qd extends /**
 * Base class for all Rest-based connections to the backend (WebChannel and
 * HTTP).
 */
class {
  constructor(e) {
    this.databaseInfo = e, this.databaseId = e.databaseId;
    const r = e.ssl ? "https" : "http", i = encodeURIComponent(this.databaseId.projectId), o = encodeURIComponent(this.databaseId.database);
    this.Do = r + "://" + e.host, this.vo = `projects/${i}/databases/${o}`, this.Co = this.databaseId.database === "(default)" ? `project_id=${i}` : `project_id=${i}&database_id=${o}`;
  }
  get Fo() {
    return !1;
  }
  Mo(e, r, i, o, u) {
    const c = Jr(), h = this.xo(e, r.toUriEncodedString());
    k("RestConnection", `Sending RPC '${e}' ${c}:`, h, i);
    const f = {
      "google-cloud-resource-prefix": this.vo,
      "x-goog-request-params": this.Co
    };
    return this.Oo(f, o, u), this.No(e, h, f, i).then((m) => (k("RestConnection", `Received RPC '${e}' ${c}: `, m), m), (m) => {
      throw Ee("RestConnection", `RPC '${e}' ${c} failed with error: `, m, "url: ", h, "request:", i), m;
    });
  }
  Lo(e, r, i, o, u, c) {
    return this.Mo(e, r, i, o, u);
  }
  /**
   * Modifies the headers for a request, adding any authorization token if
   * present and any additional headers for the request.
   */
  Oo(e, r, i) {
    e["X-Goog-Api-Client"] = // SDK_VERSION is updated to different value at runtime depending on the entry point,
    // so we need to get its value when we need it in a function.
    function() {
      return "gl-js/ fire/" + Se;
    }(), // Content-Type: text/plain will avoid preflight requests which might
    // mess with CORS and redirects by proxies. If we add custom headers
    // we will need to change this code to potentially use the $httpOverwrite
    // parameter supported by ESF to avoid triggering preflight requests.
    e["Content-Type"] = "text/plain", this.databaseInfo.appId && (e["X-Firebase-GMPID"] = this.databaseInfo.appId), r && r.headers.forEach((o, u) => e[u] = o), i && i.headers.forEach((o, u) => e[u] = o);
  }
  xo(e, r) {
    const i = Ud[e];
    return `${this.Do}/v1/${r}:${i}`;
  }
  /**
   * Closes and cleans up any resources associated with the connection. This
   * implementation is a no-op because there are no resources associated
   * with the RestConnection that need to be cleaned up.
   */
  terminate() {
  }
} {
  constructor(t) {
    super(t), this.forceLongPolling = t.forceLongPolling, this.autoDetectLongPolling = t.autoDetectLongPolling, this.useFetchStreams = t.useFetchStreams, this.longPollingOptions = t.longPollingOptions;
  }
  No(t, e, r, i) {
    const o = Jr();
    return new Promise((u, c) => {
      const h = new la();
      h.setWithCredentials(!0), h.listenOnce(ca.COMPLETE, () => {
        try {
          switch (h.getLastErrorCode()) {
            case Kn.NO_ERROR:
              const m = h.getResponseJson();
              k(mt, `XHR for RPC '${t}' ${o} received:`, JSON.stringify(m)), u(m);
              break;
            case Kn.TIMEOUT:
              k(mt, `RPC '${t}' ${o} timed out`), c(new N(P.DEADLINE_EXCEEDED, "Request time out"));
              break;
            case Kn.HTTP_ERROR:
              const w = h.getStatus();
              if (k(mt, `RPC '${t}' ${o} failed with status:`, w, "response text:", h.getResponseText()), w > 0) {
                let R = h.getResponseJson();
                Array.isArray(R) && (R = R[0]);
                const V = R == null ? void 0 : R.error;
                if (V && V.status && V.message) {
                  const D = function(b) {
                    const K = b.toLowerCase().replace(/_/g, "-");
                    return Object.values(P).indexOf(K) >= 0 ? K : P.UNKNOWN;
                  }(V.status);
                  c(new N(D, V.message));
                } else c(new N(P.UNKNOWN, "Server responded with status " + h.getStatus()));
              } else
                c(new N(P.UNAVAILABLE, "Connection failed."));
              break;
            default:
              M();
          }
        } finally {
          k(mt, `RPC '${t}' ${o} completed.`);
        }
      });
      const f = JSON.stringify(i);
      k(mt, `RPC '${t}' ${o} sending request:`, i), h.send(e, "POST", f, r, 15);
    });
  }
  Bo(t, e, r) {
    const i = Jr(), o = [this.Do, "/", "google.firestore.v1.Firestore", "/", t, "/channel"], u = fa(), c = da(), h = {
      // Required for backend stickiness, routing behavior is based on this
      // parameter.
      httpSessionIdParam: "gsessionid",
      initMessageHeaders: {},
      messageUrlParams: {
        // This param is used to improve routing and project isolation by the
        // backend and must be included in every request.
        database: `projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`
      },
      sendRawJson: !0,
      supportsCrossDomainXhr: !0,
      internalChannelParams: {
        // Override the default timeout (randomized between 10-20 seconds) since
        // a large write batch on a slow internet connection may take a long
        // time to send to the backend. Rather than have WebChannel impose a
        // tight timeout which could lead to infinite timeouts and retries, we
        // set it very large (5-10 minutes) and rely on the browser's builtin
        // timeouts to kick in if the request isn't working.
        forwardChannelRequestTimeoutMs: 6e5
      },
      forceLongPolling: this.forceLongPolling,
      detectBufferingProxy: this.autoDetectLongPolling
    }, f = this.longPollingOptions.timeoutSeconds;
    f !== void 0 && (h.longPollingTimeout = Math.round(1e3 * f)), this.useFetchStreams && (h.useFetchStreams = !0), this.Oo(h.initMessageHeaders, e, r), // Sending the custom headers we just added to request.initMessageHeaders
    // (Authorization, etc.) will trigger the browser to make a CORS preflight
    // request because the XHR will no longer meet the criteria for a "simple"
    // CORS request:
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#Simple_requests
    // Therefore to avoid the CORS preflight request (an extra network
    // roundtrip), we use the encodeInitMessageHeaders option to specify that
    // the headers should instead be encoded in the request's POST payload,
    // which is recognized by the webchannel backend.
    h.encodeInitMessageHeaders = !0;
    const m = o.join("");
    k(mt, `Creating RPC '${t}' stream ${i}: ${m}`, h);
    const w = u.createWebChannel(m, h);
    let R = !1, V = !1;
    const D = new Bd({
      Io: (b) => {
        V ? k(mt, `Not sending because RPC '${t}' stream ${i} is closed:`, b) : (R || (k(mt, `Opening RPC '${t}' stream ${i} transport.`), w.open(), R = !0), k(mt, `RPC '${t}' stream ${i} sending:`, b), w.send(b));
      },
      To: () => w.close()
    }), O = (b, K, G) => {
      b.listen(K, (H) => {
        try {
          G(H);
        } catch (rt) {
          setTimeout(() => {
            throw rt;
          }, 0);
        }
      });
    };
    return O(w, Xe.EventType.OPEN, () => {
      V || (k(mt, `RPC '${t}' stream ${i} transport opened.`), D.yo());
    }), O(w, Xe.EventType.CLOSE, () => {
      V || (V = !0, k(mt, `RPC '${t}' stream ${i} transport closed`), D.So());
    }), O(w, Xe.EventType.ERROR, (b) => {
      V || (V = !0, Ee(mt, `RPC '${t}' stream ${i} transport errored:`, b), D.So(new N(P.UNAVAILABLE, "The operation could not be completed")));
    }), O(w, Xe.EventType.MESSAGE, (b) => {
      var K;
      if (!V) {
        const G = b.data[0];
        z(!!G);
        const H = G, rt = H.error || ((K = H[0]) === null || K === void 0 ? void 0 : K.error);
        if (rt) {
          k(mt, `RPC '${t}' stream ${i} received error:`, rt);
          const Ct = rt.status;
          let it = (
            /**
            * Maps an error Code from a GRPC status identifier like 'NOT_FOUND'.
            *
            * @returns The Code equivalent to the given status string or undefined if
            *     there is no match.
            */
            function(_) {
              const y = tt[_];
              if (y !== void 0) return Ba(y);
            }(Ct)
          ), v = rt.message;
          it === void 0 && (it = P.INTERNAL, v = "Unknown error status: " + Ct + " with message " + rt.message), // Mark closed so no further events are propagated
          V = !0, D.So(new N(it, v)), w.close();
        } else k(mt, `RPC '${t}' stream ${i} received:`, G), D.bo(G);
      }
    }), O(c, ha.STAT_EVENT, (b) => {
      b.stat === as.PROXY ? k(mt, `RPC '${t}' stream ${i} detected buffering proxy`) : b.stat === as.NOPROXY && k(mt, `RPC '${t}' stream ${i} detected no buffering proxy`);
    }), setTimeout(() => {
      D.wo();
    }, 0), D;
  }
}
function Zr() {
  return typeof document < "u" ? document : null;
}
/**
 * @license
 * Copyright 2020 Google LLC
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
function mr(n) {
  return new Xh(
    n,
    /* useProto3Json= */
    !0
  );
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class Ja {
  constructor(t, e, r = 1e3, i = 1.5, o = 6e4) {
    this.ui = t, this.timerId = e, this.ko = r, this.qo = i, this.Qo = o, this.Ko = 0, this.$o = null, /** The last backoff attempt, as epoch milliseconds. */
    this.Uo = Date.now(), this.reset();
  }
  /**
   * Resets the backoff delay.
   *
   * The very next backoffAndWait() will have no delay. If it is called again
   * (i.e. due to an error), initialDelayMs (plus jitter) will be used, and
   * subsequent ones will increase according to the backoffFactor.
   */
  reset() {
    this.Ko = 0;
  }
  /**
   * Resets the backoff delay to the maximum delay (e.g. for use after a
   * RESOURCE_EXHAUSTED error).
   */
  Wo() {
    this.Ko = this.Qo;
  }
  /**
   * Returns a promise that resolves after currentDelayMs, and increases the
   * delay for any subsequent attempts. If there was a pending backoff operation
   * already, it will be canceled.
   */
  Go(t) {
    this.cancel();
    const e = Math.floor(this.Ko + this.zo()), r = Math.max(0, Date.now() - this.Uo), i = Math.max(0, e - r);
    i > 0 && k("ExponentialBackoff", `Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`), this.$o = this.ui.enqueueAfterDelay(this.timerId, i, () => (this.Uo = Date.now(), t())), // Apply backoff factor to determine next delay and ensure it is within
    // bounds.
    this.Ko *= this.qo, this.Ko < this.ko && (this.Ko = this.ko), this.Ko > this.Qo && (this.Ko = this.Qo);
  }
  jo() {
    this.$o !== null && (this.$o.skipDelay(), this.$o = null);
  }
  cancel() {
    this.$o !== null && (this.$o.cancel(), this.$o = null);
  }
  /** Returns a random value in the range [-currentBaseMs/2, currentBaseMs/2] */
  zo() {
    return (Math.random() - 0.5) * this.Ko;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class Za {
  constructor(t, e, r, i, o, u, c, h) {
    this.ui = t, this.Ho = r, this.Jo = i, this.connection = o, this.authCredentialsProvider = u, this.appCheckCredentialsProvider = c, this.listener = h, this.state = 0, /**
     * A close count that's incremented every time the stream is closed; used by
     * getCloseGuardedDispatcher() to invalidate callbacks that happen after
     * close.
     */
    this.Yo = 0, this.Zo = null, this.Xo = null, this.stream = null, /**
     * Count of response messages received.
     */
    this.e_ = 0, this.t_ = new Ja(t, e);
  }
  /**
   * Returns true if start() has been called and no error has occurred. True
   * indicates the stream is open or in the process of opening (which
   * encompasses respecting backoff, getting auth tokens, and starting the
   * actual RPC). Use isOpen() to determine if the stream is open and ready for
   * outbound requests.
   */
  n_() {
    return this.state === 1 || this.state === 5 || this.r_();
  }
  /**
   * Returns true if the underlying RPC is open (the onOpen() listener has been
   * called) and the stream is ready for outbound requests.
   */
  r_() {
    return this.state === 2 || this.state === 3;
  }
  /**
   * Starts the RPC. Only allowed if isStarted() returns false. The stream is
   * not immediately ready for use: onOpen() will be invoked when the RPC is
   * ready for outbound requests, at which point isOpen() will return true.
   *
   * When start returns, isStarted() will return true.
   */
  start() {
    this.e_ = 0, this.state !== 4 ? this.auth() : this.i_();
  }
  /**
   * Stops the RPC. This call is idempotent and allowed regardless of the
   * current isStarted() state.
   *
   * When stop returns, isStarted() and isOpen() will both return false.
   */
  async stop() {
    this.n_() && await this.close(
      0
      /* PersistentStreamState.Initial */
    );
  }
  /**
   * After an error the stream will usually back off on the next attempt to
   * start it. If the error warrants an immediate restart of the stream, the
   * sender can use this to indicate that the receiver should not back off.
   *
   * Each error will call the onClose() listener. That function can decide to
   * inhibit backoff if required.
   */
  s_() {
    this.state = 0, this.t_.reset();
  }
  /**
   * Marks this stream as idle. If no further actions are performed on the
   * stream for one minute, the stream will automatically close itself and
   * notify the stream's onClose() handler with Status.OK. The stream will then
   * be in a !isStarted() state, requiring the caller to start the stream again
   * before further use.
   *
   * Only streams that are in state 'Open' can be marked idle, as all other
   * states imply pending network operations.
   */
  o_() {
    this.r_() && this.Zo === null && (this.Zo = this.ui.enqueueAfterDelay(this.Ho, 6e4, () => this.__()));
  }
  /** Sends a message to the underlying stream. */
  a_(t) {
    this.u_(), this.stream.send(t);
  }
  /** Called by the idle timer when the stream should close due to inactivity. */
  async __() {
    if (this.r_())
      return this.close(
        0
        /* PersistentStreamState.Initial */
      );
  }
  /** Marks the stream as active again. */
  u_() {
    this.Zo && (this.Zo.cancel(), this.Zo = null);
  }
  /** Cancels the health check delayed operation. */
  c_() {
    this.Xo && (this.Xo.cancel(), this.Xo = null);
  }
  /**
   * Closes the stream and cleans up as necessary:
   *
   * * closes the underlying GRPC stream;
   * * calls the onClose handler with the given 'error';
   * * sets internal stream state to 'finalState';
   * * adjusts the backoff timer based on the error
   *
   * A new stream can be opened by calling start().
   *
   * @param finalState - the intended state of the stream after closing.
   * @param error - the error the connection was closed with.
   */
  async close(t, e) {
    this.u_(), this.c_(), this.t_.cancel(), // Invalidates any stream-related callbacks (e.g. from auth or the
    // underlying stream), guaranteeing they won't execute.
    this.Yo++, t !== 4 ? (
      // If this is an intentional close ensure we don't delay our next connection attempt.
      this.t_.reset()
    ) : e && e.code === P.RESOURCE_EXHAUSTED ? (
      // Log the error. (Probably either 'quota exceeded' or 'max queue length reached'.)
      (Lt(e.toString()), Lt("Using maximum backoff delay to prevent overloading the backend."), this.t_.Wo())
    ) : e && e.code === P.UNAUTHENTICATED && this.state !== 3 && // "unauthenticated" error means the token was rejected. This should rarely
    // happen since both Auth and AppCheck ensure a sufficient TTL when we
    // request a token. If a user manually resets their system clock this can
    // fail, however. In this case, we should get a Code.UNAUTHENTICATED error
    // before we received the first message and we need to invalidate the token
    // to ensure that we fetch a new token.
    (this.authCredentialsProvider.invalidateToken(), this.appCheckCredentialsProvider.invalidateToken()), // Clean up the underlying stream because we are no longer interested in events.
    this.stream !== null && (this.l_(), this.stream.close(), this.stream = null), // This state must be assigned before calling onClose() to allow the callback to
    // inhibit backoff or otherwise manipulate the state in its non-started state.
    this.state = t, // Notify the listener that the stream closed.
    await this.listener.mo(e);
  }
  /**
   * Can be overridden to perform additional cleanup before the stream is closed.
   * Calling super.tearDown() is not required.
   */
  l_() {
  }
  auth() {
    this.state = 1;
    const t = this.h_(this.Yo), e = this.Yo;
    Promise.all([this.authCredentialsProvider.getToken(), this.appCheckCredentialsProvider.getToken()]).then(([r, i]) => {
      this.Yo === e && // Normally we'd have to schedule the callback on the AsyncQueue.
      // However, the following calls are safe to be called outside the
      // AsyncQueue since they don't chain asynchronous calls
      this.P_(r, i);
    }, (r) => {
      t(() => {
        const i = new N(P.UNKNOWN, "Fetching auth token failed: " + r.message);
        return this.I_(i);
      });
    });
  }
  P_(t, e) {
    const r = this.h_(this.Yo);
    this.stream = this.T_(t, e), this.stream.Eo(() => {
      r(() => this.listener.Eo());
    }), this.stream.Ro(() => {
      r(() => (this.state = 2, this.Xo = this.ui.enqueueAfterDelay(this.Jo, 1e4, () => (this.r_() && (this.state = 3), Promise.resolve())), this.listener.Ro()));
    }), this.stream.mo((i) => {
      r(() => this.I_(i));
    }), this.stream.onMessage((i) => {
      r(() => ++this.e_ == 1 ? this.E_(i) : this.onNext(i));
    });
  }
  i_() {
    this.state = 5, this.t_.Go(async () => {
      this.state = 0, this.start();
    });
  }
  // Visible for tests
  I_(t) {
    return k("PersistentStream", `close with error: ${t}`), this.stream = null, this.close(4, t);
  }
  /**
   * Returns a "dispatcher" function that dispatches operations onto the
   * AsyncQueue but only runs them if closeCount remains unchanged. This allows
   * us to turn auth / stream callbacks into no-ops if the stream is closed /
   * re-opened, etc.
   */
  h_(t) {
    return (e) => {
      this.ui.enqueueAndForget(() => this.Yo === t ? e() : (k("PersistentStream", "stream callback skipped by getCloseGuardedDispatcher."), Promise.resolve()));
    };
  }
}
class jd extends Za {
  constructor(t, e, r, i, o, u) {
    super(t, "listen_stream_connection_backoff", "listen_stream_idle", "health_check_timeout", e, r, i, u), this.serializer = o;
  }
  T_(t, e) {
    return this.connection.Bo("Listen", t, e);
  }
  E_(t) {
    return this.onNext(t);
  }
  onNext(t) {
    this.t_.reset();
    const e = td(this.serializer, t), r = function(o) {
      if (!("targetChange" in o)) return L.min();
      const u = o.targetChange;
      return u.targetIds && u.targetIds.length ? L.min() : u.readTime ? St(u.readTime) : L.min();
    }(t);
    return this.listener.d_(e, r);
  }
  /**
   * Registers interest in the results of the given target. If the target
   * includes a resumeToken it will be included in the request. Results that
   * affect the target will be streamed back as WatchChange messages that
   * reference the targetId.
   */
  A_(t) {
    const e = {};
    e.database = _s(this.serializer), e.addTarget = function(o, u) {
      let c;
      const h = u.target;
      if (c = hs(h) ? {
        documents: rd(o, h)
      } : {
        query: sd(o, h)._t
      }, c.targetId = u.targetId, u.resumeToken.approximateByteSize() > 0) {
        c.resumeToken = $a(o, u.resumeToken);
        const f = ps(o, u.expectedCount);
        f !== null && (c.expectedCount = f);
      } else if (u.snapshotVersion.compareTo(L.min()) > 0) {
        c.readTime = sr(o, u.snapshotVersion.toTimestamp());
        const f = ps(o, u.expectedCount);
        f !== null && (c.expectedCount = f);
      }
      return c;
    }(this.serializer, t);
    const r = od(this.serializer, t);
    r && (e.labels = r), this.a_(e);
  }
  /**
   * Unregisters interest in the results of the target associated with the
   * given targetId.
   */
  R_(t) {
    const e = {};
    e.database = _s(this.serializer), e.removeTarget = t, this.a_(e);
  }
}
class $d extends Za {
  constructor(t, e, r, i, o, u) {
    super(t, "write_stream_connection_backoff", "write_stream_idle", "health_check_timeout", e, r, i, u), this.serializer = o;
  }
  /**
   * Tracks whether or not a handshake has been successfully exchanged and
   * the stream is ready to accept mutations.
   */
  get V_() {
    return this.e_ > 0;
  }
  // Override of PersistentStream.start
  start() {
    this.lastStreamToken = void 0, super.start();
  }
  l_() {
    this.V_ && this.m_([]);
  }
  T_(t, e) {
    return this.connection.Bo("Write", t, e);
  }
  E_(t) {
    return z(!!t.streamToken), this.lastStreamToken = t.streamToken, // The first response is always the handshake response
    z(!t.writeResults || t.writeResults.length === 0), this.listener.f_();
  }
  onNext(t) {
    z(!!t.streamToken), this.lastStreamToken = t.streamToken, // A successful first write response means the stream is healthy,
    // Note, that we could consider a successful handshake healthy, however,
    // the write itself might be causing an error we want to back off from.
    this.t_.reset();
    const e = nd(t.writeResults, t.commitTime), r = St(t.commitTime);
    return this.listener.g_(r, e);
  }
  /**
   * Sends an initial streamToken to the server, performing the handshake
   * required to make the StreamingWrite RPC work. Subsequent
   * calls should wait until onHandshakeComplete was called.
   */
  p_() {
    const t = {};
    t.database = _s(this.serializer), this.a_(t);
  }
  /** Sends a group of mutations to the Firestore backend to apply. */
  m_(t) {
    const e = {
      streamToken: this.lastStreamToken,
      writes: t.map((r) => ed(this.serializer, r))
    };
    this.a_(e);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class zd extends class {
} {
  constructor(t, e, r, i) {
    super(), this.authCredentials = t, this.appCheckCredentials = e, this.connection = r, this.serializer = i, this.y_ = !1;
  }
  w_() {
    if (this.y_) throw new N(P.FAILED_PRECONDITION, "The client has already been terminated.");
  }
  /** Invokes the provided RPC with auth and AppCheck tokens. */
  Mo(t, e, r, i) {
    return this.w_(), Promise.all([this.authCredentials.getToken(), this.appCheckCredentials.getToken()]).then(([o, u]) => this.connection.Mo(t, ms(e, r), i, o, u)).catch((o) => {
      throw o.name === "FirebaseError" ? (o.code === P.UNAUTHENTICATED && (this.authCredentials.invalidateToken(), this.appCheckCredentials.invalidateToken()), o) : new N(P.UNKNOWN, o.toString());
    });
  }
  /** Invokes the provided RPC with streamed results with auth and AppCheck tokens. */
  Lo(t, e, r, i, o) {
    return this.w_(), Promise.all([this.authCredentials.getToken(), this.appCheckCredentials.getToken()]).then(([u, c]) => this.connection.Lo(t, ms(e, r), i, u, c, o)).catch((u) => {
      throw u.name === "FirebaseError" ? (u.code === P.UNAUTHENTICATED && (this.authCredentials.invalidateToken(), this.appCheckCredentials.invalidateToken()), u) : new N(P.UNKNOWN, u.toString());
    });
  }
  terminate() {
    this.y_ = !0, this.connection.terminate();
  }
}
class Kd {
  constructor(t, e) {
    this.asyncQueue = t, this.onlineStateHandler = e, /** The current OnlineState. */
    this.state = "Unknown", /**
     * A count of consecutive failures to open the stream. If it reaches the
     * maximum defined by MAX_WATCH_STREAM_FAILURES, we'll set the OnlineState to
     * Offline.
     */
    this.S_ = 0, /**
     * A timer that elapses after ONLINE_STATE_TIMEOUT_MS, at which point we
     * transition from OnlineState.Unknown to OnlineState.Offline without waiting
     * for the stream to actually fail (MAX_WATCH_STREAM_FAILURES times).
     */
    this.b_ = null, /**
     * Whether the client should log a warning message if it fails to connect to
     * the backend (initially true, cleared after a successful stream, or if we've
     * logged the message already).
     */
    this.D_ = !0;
  }
  /**
   * Called by RemoteStore when a watch stream is started (including on each
   * backoff attempt).
   *
   * If this is the first attempt, it sets the OnlineState to Unknown and starts
   * the onlineStateTimer.
   */
  v_() {
    this.S_ === 0 && (this.C_(
      "Unknown"
      /* OnlineState.Unknown */
    ), this.b_ = this.asyncQueue.enqueueAfterDelay("online_state_timeout", 1e4, () => (this.b_ = null, this.F_("Backend didn't respond within 10 seconds."), this.C_(
      "Offline"
      /* OnlineState.Offline */
    ), Promise.resolve())));
  }
  /**
   * Updates our OnlineState as appropriate after the watch stream reports a
   * failure. The first failure moves us to the 'Unknown' state. We then may
   * allow multiple failures (based on MAX_WATCH_STREAM_FAILURES) before we
   * actually transition to the 'Offline' state.
   */
  M_(t) {
    this.state === "Online" ? this.C_(
      "Unknown"
      /* OnlineState.Unknown */
    ) : (this.S_++, this.S_ >= 1 && (this.x_(), this.F_(`Connection failed 1 times. Most recent error: ${t.toString()}`), this.C_(
      "Offline"
      /* OnlineState.Offline */
    )));
  }
  /**
   * Explicitly sets the OnlineState to the specified state.
   *
   * Note that this resets our timers / failure counters, etc. used by our
   * Offline heuristics, so must not be used in place of
   * handleWatchStreamStart() and handleWatchStreamFailure().
   */
  set(t) {
    this.x_(), this.S_ = 0, t === "Online" && // We've connected to watch at least once. Don't warn the developer
    // about being offline going forward.
    (this.D_ = !1), this.C_(t);
  }
  C_(t) {
    t !== this.state && (this.state = t, this.onlineStateHandler(t));
  }
  F_(t) {
    const e = `Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;
    this.D_ ? (Lt(e), this.D_ = !1) : k("OnlineStateTracker", e);
  }
  x_() {
    this.b_ !== null && (this.b_.cancel(), this.b_ = null);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class Gd {
  constructor(t, e, r, i, o) {
    this.localStore = t, this.datastore = e, this.asyncQueue = r, this.remoteSyncer = {}, /**
     * A list of up to MAX_PENDING_WRITES writes that we have fetched from the
     * LocalStore via fillWritePipeline() and have or will send to the write
     * stream.
     *
     * Whenever writePipeline.length > 0 the RemoteStore will attempt to start or
     * restart the write stream. When the stream is established the writes in the
     * pipeline will be sent in order.
     *
     * Writes remain in writePipeline until they are acknowledged by the backend
     * and thus will automatically be re-sent if the stream is interrupted /
     * restarted before they're acknowledged.
     *
     * Write responses from the backend are linked to their originating request
     * purely based on order, and so we can just shift() writes from the front of
     * the writePipeline as we receive responses.
     */
    this.O_ = [], /**
     * A mapping of watched targets that the client cares about tracking and the
     * user has explicitly called a 'listen' for this target.
     *
     * These targets may or may not have been sent to or acknowledged by the
     * server. On re-establishing the listen stream, these targets should be sent
     * to the server. The targets removed with unlistens are removed eagerly
     * without waiting for confirmation from the listen stream.
     */
    this.N_ = /* @__PURE__ */ new Map(), /**
     * A set of reasons for why the RemoteStore may be offline. If empty, the
     * RemoteStore may start its network connections.
     */
    this.L_ = /* @__PURE__ */ new Set(), /**
     * Event handlers that get called when the network is disabled or enabled.
     *
     * PORTING NOTE: These functions are used on the Web client to create the
     * underlying streams (to support tree-shakeable streams). On Android and iOS,
     * the streams are created during construction of RemoteStore.
     */
    this.B_ = [], this.k_ = o, this.k_._o((u) => {
      r.enqueueAndForget(async () => {
        ue(this) && (k("RemoteStore", "Restarting streams for network reachability change."), await async function(h) {
          const f = F(h);
          f.L_.add(
            4
            /* OfflineCause.ConnectivityChange */
          ), await yn(f), f.q_.set(
            "Unknown"
            /* OnlineState.Unknown */
          ), f.L_.delete(
            4
            /* OfflineCause.ConnectivityChange */
          ), await gr(f);
        }(this));
      });
    }), this.q_ = new Kd(r, i);
  }
}
async function gr(n) {
  if (ue(n)) for (const t of n.B_) await t(
    /* enabled= */
    !0
  );
}
async function yn(n) {
  for (const t of n.B_) await t(
    /* enabled= */
    !1
  );
}
function tu(n, t) {
  const e = F(n);
  e.N_.has(t.targetId) || // Mark this as something the client is currently listening for.
  (e.N_.set(t.targetId, t), qs(e) ? (
    // The listen will be sent in onWatchStreamOpen
    Bs(e)
  ) : be(e).r_() && Us(e, t));
}
function Fs(n, t) {
  const e = F(n), r = be(e);
  e.N_.delete(t), r.r_() && eu(e, t), e.N_.size === 0 && (r.r_() ? r.o_() : ue(e) && // Revert to OnlineState.Unknown if the watch stream is not open and we
  // have no listeners, since without any listens to send we cannot
  // confirm if the stream is healthy and upgrade to OnlineState.Online.
  e.q_.set(
    "Unknown"
    /* OnlineState.Unknown */
  ));
}
function Us(n, t) {
  if (n.Q_.xe(t.targetId), t.resumeToken.approximateByteSize() > 0 || t.snapshotVersion.compareTo(L.min()) > 0) {
    const e = n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;
    t = t.withExpectedCount(e);
  }
  be(n).A_(t);
}
function eu(n, t) {
  n.Q_.xe(t), be(n).R_(t);
}
function Bs(n) {
  n.Q_ = new Wh({
    getRemoteKeysForTarget: (t) => n.remoteSyncer.getRemoteKeysForTarget(t),
    ot: (t) => n.N_.get(t) || null,
    tt: () => n.datastore.serializer.databaseId
  }), be(n).start(), n.q_.v_();
}
function qs(n) {
  return ue(n) && !be(n).n_() && n.N_.size > 0;
}
function ue(n) {
  return F(n).L_.size === 0;
}
function nu(n) {
  n.Q_ = void 0;
}
async function Wd(n) {
  n.q_.set(
    "Online"
    /* OnlineState.Online */
  );
}
async function Hd(n) {
  n.N_.forEach((t, e) => {
    Us(n, t);
  });
}
async function Qd(n, t) {
  nu(n), // If we still need the watch stream, retry the connection.
  qs(n) ? (n.q_.M_(t), Bs(n)) : (
    // No need to restart watch stream because there are no active targets.
    // The online state is set to unknown because there is no active attempt
    // at establishing a connection
    n.q_.set(
      "Unknown"
      /* OnlineState.Unknown */
    )
  );
}
async function Yd(n, t, e) {
  if (
    // Mark the client as online since we got a message from the server
    n.q_.set(
      "Online"
      /* OnlineState.Online */
    ), t instanceof ja && t.state === 2 && t.cause
  )
    try {
      await /** Handles an error on a target */
      async function(i, o) {
        const u = o.cause;
        for (const c of o.targetIds)
          i.N_.has(c) && (await i.remoteSyncer.rejectListen(c, u), i.N_.delete(c), i.Q_.removeTarget(c));
      }(n, t);
    } catch (r) {
      k("RemoteStore", "Failed to remove targets %s: %s ", t.targetIds.join(","), r), await ir(n, r);
    }
  else if (t instanceof Hn ? n.Q_.Ke(t) : t instanceof qa ? n.Q_.He(t) : n.Q_.We(t), !e.isEqual(L.min())) try {
    const r = await Xa(n.localStore);
    e.compareTo(r) >= 0 && // We have received a target change with a global snapshot if the snapshot
    // version is not equal to SnapshotVersion.min().
    await /**
    * Takes a batch of changes from the Datastore, repackages them as a
    * RemoteEvent, and passes that on to the listener, which is typically the
    * SyncEngine.
    */
    function(o, u) {
      const c = o.Q_.rt(u);
      return c.targetChanges.forEach((h, f) => {
        if (h.resumeToken.approximateByteSize() > 0) {
          const m = o.N_.get(f);
          m && o.N_.set(f, m.withResumeToken(h.resumeToken, u));
        }
      }), // Re-establish listens for the targets that have been invalidated by
      // existence filter mismatches.
      c.targetMismatches.forEach((h, f) => {
        const m = o.N_.get(h);
        if (!m)
          return;
        o.N_.set(h, m.withResumeToken(ct.EMPTY_BYTE_STRING, m.snapshotVersion)), // Cause a hard reset by unwatching and rewatching immediately, but
        // deliberately don't send a resume token so that we get a full update.
        eu(o, h);
        const w = new $t(m.target, h, f, m.sequenceNumber);
        Us(o, w);
      }), o.remoteSyncer.applyRemoteEvent(c);
    }(n, e);
  } catch (r) {
    k("RemoteStore", "Failed to raise snapshot:", r), await ir(n, r);
  }
}
async function ir(n, t, e) {
  if (!pn(t)) throw t;
  n.L_.add(
    1
    /* OfflineCause.IndexedDbFailed */
  ), // Disable network and raise offline snapshots
  await yn(n), n.q_.set(
    "Offline"
    /* OnlineState.Offline */
  ), e || // Use a simple read operation to determine if IndexedDB recovered.
  // Ideally, we would expose a health check directly on SimpleDb, but
  // RemoteStore only has access to persistence through LocalStore.
  (e = () => Xa(n.localStore)), // Probe IndexedDB periodically and re-enable network
  n.asyncQueue.enqueueRetryable(async () => {
    k("RemoteStore", "Retrying IndexedDB access"), await e(), n.L_.delete(
      1
      /* OfflineCause.IndexedDbFailed */
    ), await gr(n);
  });
}
function ru(n, t) {
  return t().catch((e) => ir(n, e, t));
}
async function _r(n) {
  const t = F(n), e = Yt(t);
  let r = t.O_.length > 0 ? t.O_[t.O_.length - 1].batchId : -1;
  for (; Xd(t); ) try {
    const i = await xd(t.localStore, r);
    if (i === null) {
      t.O_.length === 0 && e.o_();
      break;
    }
    r = i.batchId, Jd(t, i);
  } catch (i) {
    await ir(t, i);
  }
  su(t) && iu(t);
}
function Xd(n) {
  return ue(n) && n.O_.length < 10;
}
function Jd(n, t) {
  n.O_.push(t);
  const e = Yt(n);
  e.r_() && e.V_ && e.m_(t.mutations);
}
function su(n) {
  return ue(n) && !Yt(n).n_() && n.O_.length > 0;
}
function iu(n) {
  Yt(n).start();
}
async function Zd(n) {
  Yt(n).p_();
}
async function tf(n) {
  const t = Yt(n);
  for (const e of n.O_) t.m_(e.mutations);
}
async function ef(n, t, e) {
  const r = n.O_.shift(), i = Ns.from(r, t, e);
  await ru(n, () => n.remoteSyncer.applySuccessfulWrite(i)), // It's possible that with the completion of this mutation another
  // slot has freed up.
  await _r(n);
}
async function nf(n, t) {
  t && Yt(n).V_ && // This error affects the actual write.
  await async function(r, i) {
    if (function(u) {
      return zh(u) && u !== P.ABORTED;
    }(i.code)) {
      const o = r.O_.shift();
      Yt(r).s_(), await ru(r, () => r.remoteSyncer.rejectFailedWrite(o.batchId, i)), // It's possible that with the completion of this mutation
      // another slot has freed up.
      await _r(r);
    }
  }(n, t), // The write stream might have been started by refilling the write
  // pipeline for failed writes
  su(n) && iu(n);
}
async function Fo(n, t) {
  const e = F(n);
  e.asyncQueue.verifyOperationInProgress(), k("RemoteStore", "RemoteStore received new credentials");
  const r = ue(e);
  e.L_.add(
    3
    /* OfflineCause.CredentialChange */
  ), await yn(e), r && // Don't set the network status to Unknown if we are offline.
  e.q_.set(
    "Unknown"
    /* OnlineState.Unknown */
  ), await e.remoteSyncer.handleCredentialChange(t), e.L_.delete(
    3
    /* OfflineCause.CredentialChange */
  ), await gr(e);
}
async function rf(n, t) {
  const e = F(n);
  t ? (e.L_.delete(
    2
    /* OfflineCause.IsSecondary */
  ), await gr(e)) : t || (e.L_.add(
    2
    /* OfflineCause.IsSecondary */
  ), await yn(e), e.q_.set(
    "Unknown"
    /* OnlineState.Unknown */
  ));
}
function be(n) {
  return n.K_ || // Create stream (but note that it is not started yet).
  (n.K_ = function(e, r, i) {
    const o = F(e);
    return o.w_(), new jd(r, o.connection, o.authCredentials, o.appCheckCredentials, o.serializer, i);
  }(n.datastore, n.asyncQueue, {
    Eo: Wd.bind(null, n),
    Ro: Hd.bind(null, n),
    mo: Qd.bind(null, n),
    d_: Yd.bind(null, n)
  }), n.B_.push(async (t) => {
    t ? (n.K_.s_(), qs(n) ? Bs(n) : n.q_.set(
      "Unknown"
      /* OnlineState.Unknown */
    )) : (await n.K_.stop(), nu(n));
  })), n.K_;
}
function Yt(n) {
  return n.U_ || // Create stream (but note that it is not started yet).
  (n.U_ = function(e, r, i) {
    const o = F(e);
    return o.w_(), new $d(r, o.connection, o.authCredentials, o.appCheckCredentials, o.serializer, i);
  }(n.datastore, n.asyncQueue, {
    Eo: () => Promise.resolve(),
    Ro: Zd.bind(null, n),
    mo: nf.bind(null, n),
    f_: tf.bind(null, n),
    g_: ef.bind(null, n)
  }), n.B_.push(async (t) => {
    t ? (n.U_.s_(), // This will start the write stream if necessary.
    await _r(n)) : (await n.U_.stop(), n.O_.length > 0 && (k("RemoteStore", `Stopping write stream with ${n.O_.length} pending writes`), n.O_ = []));
  })), n.U_;
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class js {
  constructor(t, e, r, i, o) {
    this.asyncQueue = t, this.timerId = e, this.targetTimeMs = r, this.op = i, this.removalCallback = o, this.deferred = new Gt(), this.then = this.deferred.promise.then.bind(this.deferred.promise), // It's normal for the deferred promise to be canceled (due to cancellation)
    // and so we attach a dummy catch callback to avoid
    // 'UnhandledPromiseRejectionWarning' log spam.
    this.deferred.promise.catch((u) => {
    });
  }
  get promise() {
    return this.deferred.promise;
  }
  /**
   * Creates and returns a DelayedOperation that has been scheduled to be
   * executed on the provided asyncQueue after the provided delayMs.
   *
   * @param asyncQueue - The queue to schedule the operation on.
   * @param id - A Timer ID identifying the type of operation this is.
   * @param delayMs - The delay (ms) before the operation should be scheduled.
   * @param op - The operation to run.
   * @param removalCallback - A callback to be called synchronously once the
   *   operation is executed or canceled, notifying the AsyncQueue to remove it
   *   from its delayedOperations list.
   *   PORTING NOTE: This exists to prevent making removeDelayedOperation() and
   *   the DelayedOperation class public.
   */
  static createAndSchedule(t, e, r, i, o) {
    const u = Date.now() + r, c = new js(t, e, u, i, o);
    return c.start(r), c;
  }
  /**
   * Starts the timer. This is called immediately after construction by
   * createAndSchedule().
   */
  start(t) {
    this.timerHandle = setTimeout(() => this.handleDelayElapsed(), t);
  }
  /**
   * Queues the operation to run immediately (if it hasn't already been run or
   * canceled).
   */
  skipDelay() {
    return this.handleDelayElapsed();
  }
  /**
   * Cancels the operation if it hasn't already been executed or canceled. The
   * promise will be rejected.
   *
   * As long as the operation has not yet been run, calling cancel() provides a
   * guarantee that the operation will not be run.
   */
  cancel(t) {
    this.timerHandle !== null && (this.clearTimeout(), this.deferred.reject(new N(P.CANCELLED, "Operation cancelled" + (t ? ": " + t : ""))));
  }
  handleDelayElapsed() {
    this.asyncQueue.enqueueAndForget(() => this.timerHandle !== null ? (this.clearTimeout(), this.op().then((t) => this.deferred.resolve(t))) : Promise.resolve());
  }
  clearTimeout() {
    this.timerHandle !== null && (this.removalCallback(this), clearTimeout(this.timerHandle), this.timerHandle = null);
  }
}
function $s(n, t) {
  if (Lt("AsyncQueue", `${t}: ${n}`), pn(n)) return new N(P.UNAVAILABLE, `${t}: ${n}`);
  throw n;
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class _e {
  /** The default ordering is by key if the comparator is omitted */
  constructor(t) {
    this.comparator = t ? (e, r) => t(e, r) || x.comparator(e.key, r.key) : (e, r) => x.comparator(e.key, r.key), this.keyedMap = Je(), this.sortedSet = new X(this.comparator);
  }
  /**
   * Returns an empty copy of the existing DocumentSet, using the same
   * comparator.
   */
  static emptySet(t) {
    return new _e(t.comparator);
  }
  has(t) {
    return this.keyedMap.get(t) != null;
  }
  get(t) {
    return this.keyedMap.get(t);
  }
  first() {
    return this.sortedSet.minKey();
  }
  last() {
    return this.sortedSet.maxKey();
  }
  isEmpty() {
    return this.sortedSet.isEmpty();
  }
  /**
   * Returns the index of the provided key in the document set, or -1 if the
   * document key is not present in the set;
   */
  indexOf(t) {
    const e = this.keyedMap.get(t);
    return e ? this.sortedSet.indexOf(e) : -1;
  }
  get size() {
    return this.sortedSet.size;
  }
  /** Iterates documents in order defined by "comparator" */
  forEach(t) {
    this.sortedSet.inorderTraversal((e, r) => (t(e), !1));
  }
  /** Inserts or updates a document with the same key */
  add(t) {
    const e = this.delete(t.key);
    return e.copy(e.keyedMap.insert(t.key, t), e.sortedSet.insert(t, null));
  }
  /** Deletes a document with a given key */
  delete(t) {
    const e = this.get(t);
    return e ? this.copy(this.keyedMap.remove(t), this.sortedSet.remove(e)) : this;
  }
  isEqual(t) {
    if (!(t instanceof _e) || this.size !== t.size) return !1;
    const e = this.sortedSet.getIterator(), r = t.sortedSet.getIterator();
    for (; e.hasNext(); ) {
      const i = e.getNext().key, o = r.getNext().key;
      if (!i.isEqual(o)) return !1;
    }
    return !0;
  }
  toString() {
    const t = [];
    return this.forEach((e) => {
      t.push(e.toString());
    }), t.length === 0 ? "DocumentSet ()" : `DocumentSet (
  ` + t.join(`  
`) + `
)`;
  }
  copy(t, e) {
    const r = new _e();
    return r.comparator = this.comparator, r.keyedMap = t, r.sortedSet = e, r;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class Uo {
  constructor() {
    this.W_ = new X(x.comparator);
  }
  track(t) {
    const e = t.doc.key, r = this.W_.get(e);
    r ? (
      // Merge the new change with the existing change.
      t.type !== 0 && r.type === 3 ? this.W_ = this.W_.insert(e, t) : t.type === 3 && r.type !== 1 ? this.W_ = this.W_.insert(e, {
        type: r.type,
        doc: t.doc
      }) : t.type === 2 && r.type === 2 ? this.W_ = this.W_.insert(e, {
        type: 2,
        doc: t.doc
      }) : t.type === 2 && r.type === 0 ? this.W_ = this.W_.insert(e, {
        type: 0,
        doc: t.doc
      }) : t.type === 1 && r.type === 0 ? this.W_ = this.W_.remove(e) : t.type === 1 && r.type === 2 ? this.W_ = this.W_.insert(e, {
        type: 1,
        doc: r.doc
      }) : t.type === 0 && r.type === 1 ? this.W_ = this.W_.insert(e, {
        type: 2,
        doc: t.doc
      }) : (
        // This includes these cases, which don't make sense:
        // Added->Added
        // Removed->Removed
        // Modified->Added
        // Removed->Modified
        // Metadata->Added
        // Removed->Metadata
        M()
      )
    ) : this.W_ = this.W_.insert(e, t);
  }
  G_() {
    const t = [];
    return this.W_.inorderTraversal((e, r) => {
      t.push(r);
    }), t;
  }
}
class Ae {
  constructor(t, e, r, i, o, u, c, h, f) {
    this.query = t, this.docs = e, this.oldDocs = r, this.docChanges = i, this.mutatedKeys = o, this.fromCache = u, this.syncStateChanged = c, this.excludesMetadataChanges = h, this.hasCachedResults = f;
  }
  /** Returns a view snapshot as if all documents in the snapshot were added. */
  static fromInitialDocuments(t, e, r, i, o) {
    const u = [];
    return e.forEach((c) => {
      u.push({
        type: 0,
        doc: c
      });
    }), new Ae(
      t,
      e,
      _e.emptySet(e),
      u,
      r,
      i,
      /* syncStateChanged= */
      !0,
      /* excludesMetadataChanges= */
      !1,
      o
    );
  }
  get hasPendingWrites() {
    return !this.mutatedKeys.isEmpty();
  }
  isEqual(t) {
    if (!(this.fromCache === t.fromCache && this.hasCachedResults === t.hasCachedResults && this.syncStateChanged === t.syncStateChanged && this.mutatedKeys.isEqual(t.mutatedKeys) && cr(this.query, t.query) && this.docs.isEqual(t.docs) && this.oldDocs.isEqual(t.oldDocs))) return !1;
    const e = this.docChanges, r = t.docChanges;
    if (e.length !== r.length) return !1;
    for (let i = 0; i < e.length; i++) if (e[i].type !== r[i].type || !e[i].doc.isEqual(r[i].doc)) return !1;
    return !0;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class sf {
  constructor() {
    this.z_ = void 0, this.j_ = [];
  }
  // Helper methods that checks if the query has listeners that listening to remote store
  H_() {
    return this.j_.some((t) => t.J_());
  }
}
class of {
  constructor() {
    this.queries = Bo(), this.onlineState = "Unknown", this.Y_ = /* @__PURE__ */ new Set();
  }
  terminate() {
    (function(e, r) {
      const i = F(e), o = i.queries;
      i.queries = Bo(), o.forEach((u, c) => {
        for (const h of c.j_) h.onError(r);
      });
    })(this, new N(P.ABORTED, "Firestore shutting down"));
  }
}
function Bo() {
  return new Ce((n) => Sa(n), cr);
}
async function af(n, t) {
  const e = F(n);
  let r = 3;
  const i = t.query;
  let o = e.queries.get(i);
  o ? !o.H_() && t.J_() && // Query has been listening to local cache, and tries to add a new listener sourced from watch.
  (r = 2) : (o = new sf(), r = t.J_() ? 0 : 1);
  try {
    switch (r) {
      case 0:
        o.z_ = await e.onListen(
          i,
          /** enableRemoteListen= */
          !0
        );
        break;
      case 1:
        o.z_ = await e.onListen(
          i,
          /** enableRemoteListen= */
          !1
        );
        break;
      case 2:
        await e.onFirstRemoteStoreListen(i);
    }
  } catch (u) {
    const c = $s(u, `Initialization of query '${fe(t.query)}' failed`);
    return void t.onError(c);
  }
  e.queries.set(i, o), o.j_.push(t), // Run global snapshot listeners if a consistent snapshot has been emitted.
  t.Z_(e.onlineState), o.z_ && t.X_(o.z_) && zs(e);
}
async function uf(n, t) {
  const e = F(n), r = t.query;
  let i = 3;
  const o = e.queries.get(r);
  if (o) {
    const u = o.j_.indexOf(t);
    u >= 0 && (o.j_.splice(u, 1), o.j_.length === 0 ? i = t.J_() ? 0 : 1 : !o.H_() && t.J_() && // The removed listener is the last one that sourced from watch.
    (i = 2));
  }
  switch (i) {
    case 0:
      return e.queries.delete(r), e.onUnlisten(
        r,
        /** disableRemoteListen= */
        !0
      );
    case 1:
      return e.queries.delete(r), e.onUnlisten(
        r,
        /** disableRemoteListen= */
        !1
      );
    case 2:
      return e.onLastRemoteStoreUnlisten(r);
    default:
      return;
  }
}
function lf(n, t) {
  const e = F(n);
  let r = !1;
  for (const i of t) {
    const o = i.query, u = e.queries.get(o);
    if (u) {
      for (const c of u.j_) c.X_(i) && (r = !0);
      u.z_ = i;
    }
  }
  r && zs(e);
}
function cf(n, t, e) {
  const r = F(n), i = r.queries.get(t);
  if (i) for (const o of i.j_) o.onError(e);
  r.queries.delete(t);
}
function zs(n) {
  n.Y_.forEach((t) => {
    t.next();
  });
}
var Es, qo;
(qo = Es || (Es = {})).ea = "default", /** Listen to changes in cache only */
qo.Cache = "cache";
class hf {
  constructor(t, e, r) {
    this.query = t, this.ta = e, /**
     * Initial snapshots (e.g. from cache) may not be propagated to the wrapped
     * observer. This flag is set to true once we've actually raised an event.
     */
    this.na = !1, this.ra = null, this.onlineState = "Unknown", this.options = r || {};
  }
  /**
   * Applies the new ViewSnapshot to this listener, raising a user-facing event
   * if applicable (depending on what changed, whether the user has opted into
   * metadata-only changes, etc.). Returns true if a user-facing event was
   * indeed raised.
   */
  X_(t) {
    if (!this.options.includeMetadataChanges) {
      const r = [];
      for (const i of t.docChanges) i.type !== 3 && r.push(i);
      t = new Ae(
        t.query,
        t.docs,
        t.oldDocs,
        r,
        t.mutatedKeys,
        t.fromCache,
        t.syncStateChanged,
        /* excludesMetadataChanges= */
        !0,
        t.hasCachedResults
      );
    }
    let e = !1;
    return this.na ? this.ia(t) && (this.ta.next(t), e = !0) : this.sa(t, this.onlineState) && (this.oa(t), e = !0), this.ra = t, e;
  }
  onError(t) {
    this.ta.error(t);
  }
  /** Returns whether a snapshot was raised. */
  Z_(t) {
    this.onlineState = t;
    let e = !1;
    return this.ra && !this.na && this.sa(this.ra, t) && (this.oa(this.ra), e = !0), e;
  }
  sa(t, e) {
    if (!t.fromCache || !this.J_()) return !0;
    const r = e !== "Offline";
    return (!this.options._a || !r) && (!t.docs.isEmpty() || t.hasCachedResults || e === "Offline");
  }
  ia(t) {
    if (t.docChanges.length > 0) return !0;
    const e = this.ra && this.ra.hasPendingWrites !== t.hasPendingWrites;
    return !(!t.syncStateChanged && !e) && this.options.includeMetadataChanges === !0;
  }
  oa(t) {
    t = Ae.fromInitialDocuments(t.query, t.docs, t.mutatedKeys, t.fromCache, t.hasCachedResults), this.na = !0, this.ta.next(t);
  }
  J_() {
    return this.options.source !== Es.Cache;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class ou {
  constructor(t) {
    this.key = t;
  }
}
class au {
  constructor(t) {
    this.key = t;
  }
}
class df {
  constructor(t, e) {
    this.query = t, this.Ta = e, this.Ea = null, this.hasCachedResults = !1, /**
     * A flag whether the view is current with the backend. A view is considered
     * current after it has seen the current flag from the backend and did not
     * lose consistency within the watch stream (e.g. because of an existence
     * filter mismatch).
     */
    this.current = !1, /** Documents in the view but not in the remote target */
    this.da = U(), /** Document Keys that have local changes */
    this.mutatedKeys = U(), this.Aa = Va(t), this.Ra = new _e(this.Aa);
  }
  /**
   * The set of remote documents that the server has told us belongs to the target associated with
   * this view.
   */
  get Va() {
    return this.Ta;
  }
  /**
   * Iterates over a set of doc changes, applies the query limit, and computes
   * what the new results should be, what the changes were, and whether we may
   * need to go back to the local cache for more results. Does not make any
   * changes to the view.
   * @param docChanges - The doc changes to apply to this view.
   * @param previousChanges - If this is being called with a refill, then start
   *        with this set of docs and changes instead of the current view.
   * @returns a new set of docs, changes, and refill flag.
   */
  ma(t, e) {
    const r = e ? e.fa : new Uo(), i = e ? e.Ra : this.Ra;
    let o = e ? e.mutatedKeys : this.mutatedKeys, u = i, c = !1;
    const h = this.query.limitType === "F" && i.size === this.query.limit ? i.last() : null, f = this.query.limitType === "L" && i.size === this.query.limit ? i.first() : null;
    if (t.inorderTraversal((m, w) => {
      const R = i.get(m), V = hr(this.query, w) ? w : null, D = !!R && this.mutatedKeys.has(R.key), O = !!V && (V.hasLocalMutations || // We only consider committed mutations for documents that were
      // mutated during the lifetime of the view.
      this.mutatedKeys.has(V.key) && V.hasCommittedMutations);
      let b = !1;
      R && V ? R.data.isEqual(V.data) ? D !== O && (r.track({
        type: 3,
        doc: V
      }), b = !0) : this.ga(R, V) || (r.track({
        type: 2,
        doc: V
      }), b = !0, (h && this.Aa(V, h) > 0 || f && this.Aa(V, f) < 0) && // This doc moved from inside the limit to outside the limit.
      // That means there may be some other doc in the local cache
      // that should be included instead.
      (c = !0)) : !R && V ? (r.track({
        type: 0,
        doc: V
      }), b = !0) : R && !V && (r.track({
        type: 1,
        doc: R
      }), b = !0, (h || f) && // A doc was removed from a full limit query. We'll need to
      // requery from the local cache to see if we know about some other
      // doc that should be in the results.
      (c = !0)), b && (V ? (u = u.add(V), o = O ? o.add(m) : o.delete(m)) : (u = u.delete(m), o = o.delete(m)));
    }), this.query.limit !== null) for (; u.size > this.query.limit; ) {
      const m = this.query.limitType === "F" ? u.last() : u.first();
      u = u.delete(m.key), o = o.delete(m.key), r.track({
        type: 1,
        doc: m
      });
    }
    return {
      Ra: u,
      fa: r,
      ns: c,
      mutatedKeys: o
    };
  }
  ga(t, e) {
    return t.hasLocalMutations && e.hasCommittedMutations && !e.hasLocalMutations;
  }
  /**
   * Updates the view with the given ViewDocumentChanges and optionally updates
   * limbo docs and sync state from the provided target change.
   * @param docChanges - The set of changes to make to the view's docs.
   * @param limboResolutionEnabled - Whether to update limbo documents based on
   *        this change.
   * @param targetChange - A target change to apply for computing limbo docs and
   *        sync state.
   * @param targetIsPendingReset - Whether the target is pending to reset due to
   *        existence filter mismatch. If not explicitly specified, it is treated
   *        equivalently to `false`.
   * @returns A new ViewChange with the given docs, changes, and sync state.
   */
  // PORTING NOTE: The iOS/Android clients always compute limbo document changes.
  applyChanges(t, e, r, i) {
    const o = this.Ra;
    this.Ra = t.Ra, this.mutatedKeys = t.mutatedKeys;
    const u = t.fa.G_();
    u.sort((m, w) => function(V, D) {
      const O = (b) => {
        switch (b) {
          case 0:
            return 1;
          case 2:
          case 3:
            return 2;
          case 1:
            return 0;
          default:
            return M();
        }
      };
      return O(V) - O(D);
    }(m.type, w.type) || this.Aa(m.doc, w.doc)), this.pa(r), i = i != null && i;
    const c = e && !i ? this.ya() : [], h = this.da.size === 0 && this.current && !i ? 1 : 0, f = h !== this.Ea;
    return this.Ea = h, u.length !== 0 || f ? {
      snapshot: new Ae(
        this.query,
        t.Ra,
        o,
        u,
        t.mutatedKeys,
        h === 0,
        f,
        /* excludesMetadataChanges= */
        !1,
        !!r && r.resumeToken.approximateByteSize() > 0
      ),
      wa: c
    } : {
      wa: c
    };
  }
  /**
   * Applies an OnlineState change to the view, potentially generating a
   * ViewChange if the view's syncState changes as a result.
   */
  Z_(t) {
    return this.current && t === "Offline" ? (
      // If we're offline, set `current` to false and then call applyChanges()
      // to refresh our syncState and generate a ViewChange as appropriate. We
      // are guaranteed to get a new TargetChange that sets `current` back to
      // true once the client is back online.
      (this.current = !1, this.applyChanges(
        {
          Ra: this.Ra,
          fa: new Uo(),
          mutatedKeys: this.mutatedKeys,
          ns: !1
        },
        /* limboResolutionEnabled= */
        !1
      ))
    ) : {
      wa: []
    };
  }
  /**
   * Returns whether the doc for the given key should be in limbo.
   */
  Sa(t) {
    return !this.Ta.has(t) && // The local store doesn't think it's a result, so it shouldn't be in limbo.
    !!this.Ra.has(t) && !this.Ra.get(t).hasLocalMutations;
  }
  /**
   * Updates syncedDocuments, current, and limbo docs based on the given change.
   * Returns the list of changes to which docs are in limbo.
   */
  pa(t) {
    t && (t.addedDocuments.forEach((e) => this.Ta = this.Ta.add(e)), t.modifiedDocuments.forEach((e) => {
    }), t.removedDocuments.forEach((e) => this.Ta = this.Ta.delete(e)), this.current = t.current);
  }
  ya() {
    if (!this.current) return [];
    const t = this.da;
    this.da = U(), this.Ra.forEach((r) => {
      this.Sa(r.key) && (this.da = this.da.add(r.key));
    });
    const e = [];
    return t.forEach((r) => {
      this.da.has(r) || e.push(new au(r));
    }), this.da.forEach((r) => {
      t.has(r) || e.push(new ou(r));
    }), e;
  }
  /**
   * Update the in-memory state of the current view with the state read from
   * persistence.
   *
   * We update the query view whenever a client's primary status changes:
   * - When a client transitions from primary to secondary, it can miss
   *   LocalStorage updates and its query views may temporarily not be
   *   synchronized with the state on disk.
   * - For secondary to primary transitions, the client needs to update the list
   *   of `syncedDocuments` since secondary clients update their query views
   *   based purely on synthesized RemoteEvents.
   *
   * @param queryResult.documents - The documents that match the query according
   * to the LocalStore.
   * @param queryResult.remoteKeys - The keys of the documents that match the
   * query according to the backend.
   *
   * @returns The ViewChange that resulted from this synchronization.
   */
  // PORTING NOTE: Multi-tab only.
  ba(t) {
    this.Ta = t.Ts, this.da = U();
    const e = this.ma(t.documents);
    return this.applyChanges(
      e,
      /* limboResolutionEnabled= */
      !0
    );
  }
  /**
   * Returns a view snapshot as if this query was just listened to. Contains
   * a document add for every existing document and the `fromCache` and
   * `hasPendingWrites` status of the already established view.
   */
  // PORTING NOTE: Multi-tab only.
  Da() {
    return Ae.fromInitialDocuments(this.query, this.Ra, this.mutatedKeys, this.Ea === 0, this.hasCachedResults);
  }
}
class ff {
  constructor(t, e, r) {
    this.query = t, this.targetId = e, this.view = r;
  }
}
class pf {
  constructor(t) {
    this.key = t, /**
     * Set to true once we've received a document. This is used in
     * getRemoteKeysForTarget() and ultimately used by WatchChangeAggregator to
     * decide whether it needs to manufacture a delete event for the target once
     * the target is CURRENT.
     */
    this.va = !1;
  }
}
class mf {
  constructor(t, e, r, i, o, u) {
    this.localStore = t, this.remoteStore = e, this.eventManager = r, this.sharedClientState = i, this.currentUser = o, this.maxConcurrentLimboResolutions = u, this.Ca = {}, this.Fa = new Ce((c) => Sa(c), cr), this.Ma = /* @__PURE__ */ new Map(), /**
     * The keys of documents that are in limbo for which we haven't yet started a
     * limbo resolution query. The strings in this set are the result of calling
     * `key.path.canonicalString()` where `key` is a `DocumentKey` object.
     *
     * The `Set` type was chosen because it provides efficient lookup and removal
     * of arbitrary elements and it also maintains insertion order, providing the
     * desired queue-like FIFO semantics.
     */
    this.xa = /* @__PURE__ */ new Set(), /**
     * Keeps track of the target ID for each document that is in limbo with an
     * active target.
     */
    this.Oa = new X(x.comparator), /**
     * Keeps track of the information about an active limbo resolution for each
     * active target ID that was started for the purpose of limbo resolution.
     */
    this.Na = /* @__PURE__ */ new Map(), this.La = new Os(), /** Stores user completion handlers, indexed by User and BatchId. */
    this.Ba = {}, /** Stores user callbacks waiting for all pending writes to be acknowledged. */
    this.ka = /* @__PURE__ */ new Map(), this.qa = we.kn(), this.onlineState = "Unknown", // The primary state is set to `true` or `false` immediately after Firestore
    // startup. In the interim, a client should only be considered primary if
    // `isPrimary` is true.
    this.Qa = void 0;
  }
  get isPrimaryClient() {
    return this.Qa === !0;
  }
}
async function gf(n, t, e = !0) {
  const r = fu(n);
  let i;
  const o = r.Fa.get(t);
  return o ? (
    // PORTING NOTE: With Multi-Tab Web, it is possible that a query view
    // already exists when EventManager calls us for the first time. This
    // happens when the primary tab is already listening to this query on
    // behalf of another tab and the user of the primary also starts listening
    // to the query. EventManager will not have an assigned target ID in this
    // case and calls `listen` to obtain this ID.
    (r.sharedClientState.addLocalQueryTarget(o.targetId), i = o.view.Da())
  ) : i = await uu(
    r,
    t,
    e,
    /** shouldInitializeView= */
    !0
  ), i;
}
async function _f(n, t) {
  const e = fu(n);
  await uu(
    e,
    t,
    /** shouldListenToRemote= */
    !0,
    /** shouldInitializeView= */
    !1
  );
}
async function uu(n, t, e, r) {
  const i = await Od(n.localStore, Pt(t)), o = i.targetId, u = n.sharedClientState.addLocalQueryTarget(o, e);
  let c;
  return r && (c = await yf(n, t, o, u === "current", i.resumeToken)), n.isPrimaryClient && e && tu(n.remoteStore, i), c;
}
async function yf(n, t, e, r, i) {
  n.Ka = (w, R, V) => async function(O, b, K, G) {
    let H = b.view.ma(K);
    H.ns && // The query has a limit and some docs were removed, so we need
    // to re-run the query against the local store to make sure we
    // didn't lose any good docs that had been past the limit.
    (H = await Oo(
      O.localStore,
      b.query,
      /* usePreviousResults= */
      !1
    ).then(({ documents: v }) => b.view.ma(v, H)));
    const rt = G && G.targetChanges.get(b.targetId), Ct = G && G.targetMismatches.get(b.targetId) != null, it = b.view.applyChanges(
      H,
      /* limboResolutionEnabled= */
      O.isPrimaryClient,
      rt,
      Ct
    );
    return $o(O, b.targetId, it.wa), it.snapshot;
  }(n, w, R, V);
  const o = await Oo(
    n.localStore,
    t,
    /* usePreviousResults= */
    !0
  ), u = new df(t, o.Ts), c = u.ma(o.documents), h = _n.createSynthesizedTargetChangeForCurrentChange(e, r && n.onlineState !== "Offline", i), f = u.applyChanges(
    c,
    /* limboResolutionEnabled= */
    n.isPrimaryClient,
    h
  );
  $o(n, e, f.wa);
  const m = new ff(t, e, u);
  return n.Fa.set(t, m), n.Ma.has(e) ? n.Ma.get(e).push(t) : n.Ma.set(e, [t]), f.snapshot;
}
async function Ef(n, t, e) {
  const r = F(n), i = r.Fa.get(t), o = r.Ma.get(i.targetId);
  if (o.length > 1) return r.Ma.set(i.targetId, o.filter((u) => !cr(u, t))), void r.Fa.delete(t);
  r.isPrimaryClient ? (r.sharedClientState.removeLocalQueryTarget(i.targetId), r.sharedClientState.isActiveQueryTarget(i.targetId) || await ys(
    r.localStore,
    i.targetId,
    /*keepPersistedTargetData=*/
    !1
  ).then(() => {
    r.sharedClientState.clearQueryState(i.targetId), e && Fs(r.remoteStore, i.targetId), vs(r, i.targetId);
  }).catch(fn)) : (vs(r, i.targetId), await ys(
    r.localStore,
    i.targetId,
    /*keepPersistedTargetData=*/
    !0
  ));
}
async function vf(n, t) {
  const e = F(n), r = e.Fa.get(t), i = e.Ma.get(r.targetId);
  e.isPrimaryClient && i.length === 1 && // PORTING NOTE: Unregister the target ID with local Firestore client as
  // watch target.
  (e.sharedClientState.removeLocalQueryTarget(r.targetId), Fs(e.remoteStore, r.targetId));
}
async function Tf(n, t, e) {
  const r = Vf(n);
  try {
    const i = await function(u, c) {
      const h = F(u), f = nt.now(), m = c.reduce((V, D) => V.add(D.key), U());
      let w, R;
      return h.persistence.runTransaction("Locally write mutations", "readwrite", (V) => {
        let D = Ft(), O = U();
        return h.cs.getEntries(V, m).next((b) => {
          D = b, D.forEach((K, G) => {
            G.isValidDocument() || (O = O.add(K));
          });
        }).next(() => h.localDocuments.getOverlayedDocuments(V, D)).next((b) => {
          w = b;
          const K = [];
          for (const G of c) {
            const H = Uh(G, w.get(G.key).overlayedDocument);
            H != null && // NOTE: The base state should only be applied if there's some
            // existing document to override, so use a Precondition of
            // exists=true
            K.push(new ae(G.key, H, ya(H.value.mapValue), Ot.exists(!0)));
          }
          return h.mutationQueue.addMutationBatch(V, f, K, c);
        }).next((b) => {
          R = b;
          const K = b.applyToLocalDocumentSet(w, O);
          return h.documentOverlayCache.saveOverlays(V, b.batchId, K);
        });
      }).then(() => ({
        batchId: R.batchId,
        changes: ba(w)
      }));
    }(r.localStore, t);
    r.sharedClientState.addPendingMutation(i.batchId), function(u, c, h) {
      let f = u.Ba[u.currentUser.toKey()];
      f || (f = new X($)), f = f.insert(c, h), u.Ba[u.currentUser.toKey()] = f;
    }(r, i.batchId, e), await En(r, i.changes), await _r(r.remoteStore);
  } catch (i) {
    const o = $s(i, "Failed to persist write");
    e.reject(o);
  }
}
async function lu(n, t) {
  const e = F(n);
  try {
    const r = await Nd(e.localStore, t);
    t.targetChanges.forEach((i, o) => {
      const u = e.Na.get(o);
      u && // Since this is a limbo resolution lookup, it's for a single document
      // and it could be added, modified, or removed, but not a combination.
      (z(i.addedDocuments.size + i.modifiedDocuments.size + i.removedDocuments.size <= 1), i.addedDocuments.size > 0 ? u.va = !0 : i.modifiedDocuments.size > 0 ? z(u.va) : i.removedDocuments.size > 0 && (z(u.va), u.va = !1));
    }), await En(e, r, t);
  } catch (r) {
    await fn(r);
  }
}
function jo(n, t, e) {
  const r = F(n);
  if (r.isPrimaryClient && e === 0 || !r.isPrimaryClient && e === 1) {
    const i = [];
    r.Fa.forEach((o, u) => {
      const c = u.view.Z_(t);
      c.snapshot && i.push(c.snapshot);
    }), function(u, c) {
      const h = F(u);
      h.onlineState = c;
      let f = !1;
      h.queries.forEach((m, w) => {
        for (const R of w.j_)
          R.Z_(c) && (f = !0);
      }), f && zs(h);
    }(r.eventManager, t), i.length && r.Ca.d_(i), r.onlineState = t, r.isPrimaryClient && r.sharedClientState.setOnlineState(t);
  }
}
async function If(n, t, e) {
  const r = F(n);
  r.sharedClientState.updateQueryState(t, "rejected", e);
  const i = r.Na.get(t), o = i && i.key;
  if (o) {
    let u = new X(x.comparator);
    u = u.insert(o, _t.newNoDocument(o, L.min()));
    const c = U().add(o), h = new pr(
      L.min(),
      /* targetChanges= */
      /* @__PURE__ */ new Map(),
      /* targetMismatches= */
      new X($),
      u,
      c
    );
    await lu(r, h), // Since this query failed, we won't want to manually unlisten to it.
    // We only remove it from bookkeeping after we successfully applied the
    // RemoteEvent. If `applyRemoteEvent()` throws, we want to re-listen to
    // this query when the RemoteStore restarts the Watch stream, which should
    // re-trigger the target failure.
    r.Oa = r.Oa.remove(o), r.Na.delete(t), Ks(r);
  } else await ys(
    r.localStore,
    t,
    /* keepPersistedTargetData */
    !1
  ).then(() => vs(r, t, e)).catch(fn);
}
async function wf(n, t) {
  const e = F(n), r = t.batch.batchId;
  try {
    const i = await Dd(e.localStore, t);
    hu(
      e,
      r,
      /*error=*/
      null
    ), cu(e, r), e.sharedClientState.updateMutationState(r, "acknowledged"), await En(e, i);
  } catch (i) {
    await fn(i);
  }
}
async function Af(n, t, e) {
  const r = F(n);
  try {
    const i = await function(u, c) {
      const h = F(u);
      return h.persistence.runTransaction("Reject batch", "readwrite-primary", (f) => {
        let m;
        return h.mutationQueue.lookupMutationBatch(f, c).next((w) => (z(w !== null), m = w.keys(), h.mutationQueue.removeMutationBatch(f, w))).next(() => h.mutationQueue.performConsistencyCheck(f)).next(() => h.documentOverlayCache.removeOverlaysForBatchId(f, m, c)).next(() => h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f, m)).next(() => h.localDocuments.getDocuments(f, m));
      });
    }(r.localStore, t);
    hu(r, t, e), cu(r, t), r.sharedClientState.updateMutationState(t, "rejected", e), await En(r, i);
  } catch (i) {
    await fn(i);
  }
}
function cu(n, t) {
  (n.ka.get(t) || []).forEach((e) => {
    e.resolve();
  }), n.ka.delete(t);
}
function hu(n, t, e) {
  const r = F(n);
  let i = r.Ba[r.currentUser.toKey()];
  if (i) {
    const o = i.get(t);
    o && (e ? o.reject(e) : o.resolve(), i = i.remove(t)), r.Ba[r.currentUser.toKey()] = i;
  }
}
function vs(n, t, e = null) {
  n.sharedClientState.removeLocalQueryTarget(t);
  for (const r of n.Ma.get(t)) n.Fa.delete(r), e && n.Ca.$a(r, e);
  n.Ma.delete(t), n.isPrimaryClient && n.La.gr(t).forEach((r) => {
    n.La.containsKey(r) || // We removed the last reference for this key
    du(n, r);
  });
}
function du(n, t) {
  n.xa.delete(t.path.canonicalString());
  const e = n.Oa.get(t);
  e !== null && (Fs(n.remoteStore, e), n.Oa = n.Oa.remove(t), n.Na.delete(e), Ks(n));
}
function $o(n, t, e) {
  for (const r of e) r instanceof ou ? (n.La.addReference(r.key, t), Rf(n, r)) : r instanceof au ? (k("SyncEngine", "Document no longer in limbo: " + r.key), n.La.removeReference(r.key, t), n.La.containsKey(r.key) || // We removed the last reference for this key
  du(n, r.key)) : M();
}
function Rf(n, t) {
  const e = t.key, r = e.path.canonicalString();
  n.Oa.get(e) || n.xa.has(r) || (k("SyncEngine", "New document in limbo: " + e), n.xa.add(r), Ks(n));
}
function Ks(n) {
  for (; n.xa.size > 0 && n.Oa.size < n.maxConcurrentLimboResolutions; ) {
    const t = n.xa.values().next().value;
    n.xa.delete(t);
    const e = new x(Y.fromString(t)), r = n.qa.next();
    n.Na.set(r, new pf(e)), n.Oa = n.Oa.insert(e, r), tu(n.remoteStore, new $t(Pt(Ra(e.path)), r, "TargetPurposeLimboResolution", Rs.oe));
  }
}
async function En(n, t, e) {
  const r = F(n), i = [], o = [], u = [];
  r.Fa.isEmpty() || (r.Fa.forEach((c, h) => {
    u.push(r.Ka(h, t, e).then((f) => {
      var m;
      if ((f || e) && r.isPrimaryClient) {
        const w = f ? !f.fromCache : (m = e == null ? void 0 : e.targetChanges.get(h.targetId)) === null || m === void 0 ? void 0 : m.current;
        r.sharedClientState.updateQueryState(h.targetId, w ? "current" : "not-current");
      }
      if (f) {
        i.push(f);
        const w = Ls.Wi(h.targetId, f);
        o.push(w);
      }
    }));
  }), await Promise.all(u), r.Ca.d_(i), await async function(h, f) {
    const m = F(h);
    try {
      await m.persistence.runTransaction("notifyLocalViewChanges", "readwrite", (w) => S.forEach(f, (R) => S.forEach(R.$i, (V) => m.persistence.referenceDelegate.addReference(w, R.targetId, V)).next(() => S.forEach(R.Ui, (V) => m.persistence.referenceDelegate.removeReference(w, R.targetId, V)))));
    } catch (w) {
      if (!pn(w)) throw w;
      k("LocalStore", "Failed to update sequence numbers: " + w);
    }
    for (const w of f) {
      const R = w.targetId;
      if (!w.fromCache) {
        const V = m.os.get(R), D = V.snapshotVersion, O = V.withLastLimboFreeSnapshotVersion(D);
        m.os = m.os.insert(R, O);
      }
    }
  }(r.localStore, o));
}
async function Pf(n, t) {
  const e = F(n);
  if (!e.currentUser.isEqual(t)) {
    k("SyncEngine", "User change. New user:", t.toKey());
    const r = await Ya(e.localStore, t);
    e.currentUser = t, // Fails tasks waiting for pending writes requested by previous user.
    function(o, u) {
      o.ka.forEach((c) => {
        c.forEach((h) => {
          h.reject(new N(P.CANCELLED, u));
        });
      }), o.ka.clear();
    }(e, "'waitForPendingWrites' promise is rejected due to a user change."), // TODO(b/114226417): Consider calling this only in the primary tab.
    e.sharedClientState.handleUserChange(t, r.removedBatchIds, r.addedBatchIds), await En(e, r.hs);
  }
}
function Sf(n, t) {
  const e = F(n), r = e.Na.get(t);
  if (r && r.va) return U().add(r.key);
  {
    let i = U();
    const o = e.Ma.get(t);
    if (!o) return i;
    for (const u of o) {
      const c = e.Fa.get(u);
      i = i.unionWith(c.view.Va);
    }
    return i;
  }
}
function fu(n) {
  const t = F(n);
  return t.remoteStore.remoteSyncer.applyRemoteEvent = lu.bind(null, t), t.remoteStore.remoteSyncer.getRemoteKeysForTarget = Sf.bind(null, t), t.remoteStore.remoteSyncer.rejectListen = If.bind(null, t), t.Ca.d_ = lf.bind(null, t.eventManager), t.Ca.$a = cf.bind(null, t.eventManager), t;
}
function Vf(n) {
  const t = F(n);
  return t.remoteStore.remoteSyncer.applySuccessfulWrite = wf.bind(null, t), t.remoteStore.remoteSyncer.rejectFailedWrite = Af.bind(null, t), t;
}
class or {
  constructor() {
    this.kind = "memory", this.synchronizeTabs = !1;
  }
  async initialize(t) {
    this.serializer = mr(t.databaseInfo.databaseId), this.sharedClientState = this.Wa(t), this.persistence = this.Ga(t), await this.persistence.start(), this.localStore = this.za(t), this.gcScheduler = this.ja(t, this.localStore), this.indexBackfillerScheduler = this.Ha(t, this.localStore);
  }
  ja(t, e) {
    return null;
  }
  Ha(t, e) {
    return null;
  }
  za(t) {
    return bd(this.persistence, new Vd(), t.initialUser, this.serializer);
  }
  Ga(t) {
    return new Rd(Ms.Zr, this.serializer);
  }
  Wa(t) {
    return new Ld();
  }
  async terminate() {
    var t, e;
    (t = this.gcScheduler) === null || t === void 0 || t.stop(), (e = this.indexBackfillerScheduler) === null || e === void 0 || e.stop(), this.sharedClientState.shutdown(), await this.persistence.shutdown();
  }
}
or.provider = {
  build: () => new or()
};
class Ts {
  async initialize(t, e) {
    this.localStore || (this.localStore = t.localStore, this.sharedClientState = t.sharedClientState, this.datastore = this.createDatastore(e), this.remoteStore = this.createRemoteStore(e), this.eventManager = this.createEventManager(e), this.syncEngine = this.createSyncEngine(
      e,
      /* startAsPrimary=*/
      !t.synchronizeTabs
    ), this.sharedClientState.onlineStateHandler = (r) => jo(
      this.syncEngine,
      r,
      1
      /* OnlineStateSource.SharedClientState */
    ), this.remoteStore.remoteSyncer.handleCredentialChange = Pf.bind(null, this.syncEngine), await rf(this.remoteStore, this.syncEngine.isPrimaryClient));
  }
  createEventManager(t) {
    return function() {
      return new of();
    }();
  }
  createDatastore(t) {
    const e = mr(t.databaseInfo.databaseId), r = function(o) {
      return new qd(o);
    }(t.databaseInfo);
    return function(o, u, c, h) {
      return new zd(o, u, c, h);
    }(t.authCredentials, t.appCheckCredentials, r, e);
  }
  createRemoteStore(t) {
    return function(r, i, o, u, c) {
      return new Gd(r, i, o, u, c);
    }(this.localStore, this.datastore, t.asyncQueue, (e) => jo(
      this.syncEngine,
      e,
      0
      /* OnlineStateSource.RemoteStore */
    ), function() {
      return Lo.D() ? new Lo() : new Fd();
    }());
  }
  createSyncEngine(t, e) {
    return function(i, o, u, c, h, f, m) {
      const w = new mf(i, o, u, c, h, f);
      return m && (w.Qa = !0), w;
    }(this.localStore, this.remoteStore, this.eventManager, this.sharedClientState, t.initialUser, t.maxConcurrentLimboResolutions, e);
  }
  async terminate() {
    var t, e;
    await async function(i) {
      const o = F(i);
      k("RemoteStore", "RemoteStore shutting down."), o.L_.add(
        5
        /* OfflineCause.Shutdown */
      ), await yn(o), o.k_.shutdown(), // Set the OnlineState to Unknown (rather than Offline) to avoid potentially
      // triggering spurious listener events with cached data, etc.
      o.q_.set(
        "Unknown"
        /* OnlineState.Unknown */
      );
    }(this.remoteStore), (t = this.datastore) === null || t === void 0 || t.terminate(), (e = this.eventManager) === null || e === void 0 || e.terminate();
  }
}
Ts.provider = {
  build: () => new Ts()
};
/**
 * @license
 * Copyright 2020 Google LLC
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
 * @license
 * Copyright 2017 Google LLC
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
class Cf {
  constructor(t) {
    this.observer = t, /**
     * When set to true, will not raise future events. Necessary to deal with
     * async detachment of listener.
     */
    this.muted = !1;
  }
  next(t) {
    this.muted || this.observer.next && this.Ya(this.observer.next, t);
  }
  error(t) {
    this.muted || (this.observer.error ? this.Ya(this.observer.error, t) : Lt("Uncaught Error in snapshot listener:", t.toString()));
  }
  Za() {
    this.muted = !0;
  }
  Ya(t, e) {
    setTimeout(() => {
      this.muted || t(e);
    }, 0);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class bf {
  constructor(t, e, r, i, o) {
    this.authCredentials = t, this.appCheckCredentials = e, this.asyncQueue = r, this.databaseInfo = i, this.user = gt.UNAUTHENTICATED, this.clientId = ma.newId(), this.authCredentialListener = () => Promise.resolve(), this.appCheckCredentialListener = () => Promise.resolve(), this._uninitializedComponentsProvider = o, this.authCredentials.start(r, async (u) => {
      k("FirestoreClient", "Received user=", u.uid), await this.authCredentialListener(u), this.user = u;
    }), this.appCheckCredentials.start(r, (u) => (k("FirestoreClient", "Received new app check token=", u), this.appCheckCredentialListener(u, this.user)));
  }
  get configuration() {
    return {
      asyncQueue: this.asyncQueue,
      databaseInfo: this.databaseInfo,
      clientId: this.clientId,
      authCredentials: this.authCredentials,
      appCheckCredentials: this.appCheckCredentials,
      initialUser: this.user,
      maxConcurrentLimboResolutions: 100
    };
  }
  setCredentialChangeListener(t) {
    this.authCredentialListener = t;
  }
  setAppCheckTokenChangeListener(t) {
    this.appCheckCredentialListener = t;
  }
  terminate() {
    this.asyncQueue.enterRestrictedMode();
    const t = new Gt();
    return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async () => {
      try {
        this._onlineComponents && await this._onlineComponents.terminate(), this._offlineComponents && await this._offlineComponents.terminate(), // The credentials provider must be terminated after shutting down the
        // RemoteStore as it will prevent the RemoteStore from retrieving auth
        // tokens.
        this.authCredentials.shutdown(), this.appCheckCredentials.shutdown(), t.resolve();
      } catch (e) {
        const r = $s(e, "Failed to shutdown persistence");
        t.reject(r);
      }
    }), t.promise;
  }
}
async function ts(n, t) {
  n.asyncQueue.verifyOperationInProgress(), k("FirestoreClient", "Initializing OfflineComponentProvider");
  const e = n.configuration;
  await t.initialize(e);
  let r = e.initialUser;
  n.setCredentialChangeListener(async (i) => {
    r.isEqual(i) || (await Ya(t.localStore, i), r = i);
  }), // When a user calls clearPersistence() in one client, all other clients
  // need to be terminated to allow the delete to succeed.
  t.persistence.setDatabaseDeletedListener(() => n.terminate()), n._offlineComponents = t;
}
async function zo(n, t) {
  n.asyncQueue.verifyOperationInProgress();
  const e = await Df(n);
  k("FirestoreClient", "Initializing OnlineComponentProvider"), await t.initialize(e, n.configuration), // The CredentialChangeListener of the online component provider takes
  // precedence over the offline component provider.
  n.setCredentialChangeListener((r) => Fo(t.remoteStore, r)), n.setAppCheckTokenChangeListener((r, i) => Fo(t.remoteStore, i)), n._onlineComponents = t;
}
async function Df(n) {
  if (!n._offlineComponents) if (n._uninitializedComponentsProvider) {
    k("FirestoreClient", "Using user provided OfflineComponentProvider");
    try {
      await ts(n, n._uninitializedComponentsProvider._offline);
    } catch (t) {
      const e = t;
      if (!function(i) {
        return i.name === "FirebaseError" ? i.code === P.FAILED_PRECONDITION || i.code === P.UNIMPLEMENTED : !(typeof DOMException < "u" && i instanceof DOMException) || // When the browser is out of quota we could get either quota exceeded
        // or an aborted error depending on whether the error happened during
        // schema migration.
        i.code === 22 || i.code === 20 || // Firefox Private Browsing mode disables IndexedDb and returns
        // INVALID_STATE for any usage.
        i.code === 11;
      }(e)) throw e;
      Ee("Error using user provided cache. Falling back to memory cache: " + e), await ts(n, new or());
    }
  } else k("FirestoreClient", "Using default OfflineComponentProvider"), await ts(n, new or());
  return n._offlineComponents;
}
async function pu(n) {
  return n._onlineComponents || (n._uninitializedComponentsProvider ? (k("FirestoreClient", "Using user provided OnlineComponentProvider"), await zo(n, n._uninitializedComponentsProvider._online)) : (k("FirestoreClient", "Using default OnlineComponentProvider"), await zo(n, new Ts()))), n._onlineComponents;
}
function Nf(n) {
  return pu(n).then((t) => t.syncEngine);
}
async function kf(n) {
  const t = await pu(n), e = t.eventManager;
  return e.onListen = gf.bind(null, t.syncEngine), e.onUnlisten = Ef.bind(null, t.syncEngine), e.onFirstRemoteStoreListen = _f.bind(null, t.syncEngine), e.onLastRemoteStoreUnlisten = vf.bind(null, t.syncEngine), e;
}
function xf(n, t, e = {}) {
  const r = new Gt();
  return n.asyncQueue.enqueueAndForget(async () => function(o, u, c, h, f) {
    const m = new Cf({
      next: (R) => {
        m.Za(), u.enqueueAndForget(() => uf(o, w)), R.fromCache && h.source === "server" ? f.reject(new N(P.UNAVAILABLE, 'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')) : f.resolve(R);
      },
      error: (R) => f.reject(R)
    }), w = new hf(c, m, {
      includeMetadataChanges: !0,
      _a: !0
    });
    return af(o, w);
  }(await kf(n), n.asyncQueue, t, e, r)), r.promise;
}
/**
 * @license
 * Copyright 2023 Google LLC
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
function mu(n) {
  const t = {};
  return n.timeoutSeconds !== void 0 && (t.timeoutSeconds = n.timeoutSeconds), t;
}
/**
 * @license
 * Copyright 2020 Google LLC
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
const Ko = /* @__PURE__ */ new Map();
/**
 * @license
 * Copyright 2017 Google LLC
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
function gu(n, t, e) {
  if (!e) throw new N(P.INVALID_ARGUMENT, `Function ${n}() cannot be called with an empty ${t}.`);
}
function Of(n, t, e, r) {
  if (t === !0 && r === !0) throw new N(P.INVALID_ARGUMENT, `${n} and ${e} cannot be used together.`);
}
function Go(n) {
  if (!x.isDocumentKey(n)) throw new N(P.INVALID_ARGUMENT, `Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`);
}
function Wo(n) {
  if (x.isDocumentKey(n)) throw new N(P.INVALID_ARGUMENT, `Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`);
}
function yr(n) {
  if (n === void 0) return "undefined";
  if (n === null) return "null";
  if (typeof n == "string") return n.length > 20 && (n = `${n.substring(0, 20)}...`), JSON.stringify(n);
  if (typeof n == "number" || typeof n == "boolean") return "" + n;
  if (typeof n == "object") {
    if (n instanceof Array) return "an array";
    {
      const t = (
        /** try to get the constructor name for an object. */
        function(r) {
          return r.constructor ? r.constructor.name : null;
        }(n)
      );
      return t ? `a custom ${t} object` : "an object";
    }
  }
  return typeof n == "function" ? "a function" : M();
}
function ar(n, t) {
  if ("_delegate" in n && // Unwrap Compat types
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (n = n._delegate), !(n instanceof t)) {
    if (t.name === n.constructor.name) throw new N(P.INVALID_ARGUMENT, "Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");
    {
      const e = yr(n);
      throw new N(P.INVALID_ARGUMENT, `Expected type '${t.name}', but it was: ${e}`);
    }
  }
  return n;
}
/**
 * @license
 * Copyright 2020 Google LLC
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
class Ho {
  constructor(t) {
    var e, r;
    if (t.host === void 0) {
      if (t.ssl !== void 0) throw new N(P.INVALID_ARGUMENT, "Can't provide ssl option if host option is not set");
      this.host = "firestore.googleapis.com", this.ssl = !0;
    } else this.host = t.host, this.ssl = (e = t.ssl) === null || e === void 0 || e;
    if (this.credentials = t.credentials, this.ignoreUndefinedProperties = !!t.ignoreUndefinedProperties, this.localCache = t.localCache, t.cacheSizeBytes === void 0) this.cacheSizeBytes = 41943040;
    else {
      if (t.cacheSizeBytes !== -1 && t.cacheSizeBytes < 1048576) throw new N(P.INVALID_ARGUMENT, "cacheSizeBytes must be at least 1048576");
      this.cacheSizeBytes = t.cacheSizeBytes;
    }
    Of("experimentalForceLongPolling", t.experimentalForceLongPolling, "experimentalAutoDetectLongPolling", t.experimentalAutoDetectLongPolling), this.experimentalForceLongPolling = !!t.experimentalForceLongPolling, this.experimentalForceLongPolling ? this.experimentalAutoDetectLongPolling = !1 : t.experimentalAutoDetectLongPolling === void 0 ? this.experimentalAutoDetectLongPolling = !0 : (
      // For backwards compatibility, coerce the value to boolean even though
      // the TypeScript compiler has narrowed the type to boolean already.
      // noinspection PointlessBooleanExpressionJS
      this.experimentalAutoDetectLongPolling = !!t.experimentalAutoDetectLongPolling
    ), this.experimentalLongPollingOptions = mu((r = t.experimentalLongPollingOptions) !== null && r !== void 0 ? r : {}), function(o) {
      if (o.timeoutSeconds !== void 0) {
        if (isNaN(o.timeoutSeconds)) throw new N(P.INVALID_ARGUMENT, `invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);
        if (o.timeoutSeconds < 5) throw new N(P.INVALID_ARGUMENT, `invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);
        if (o.timeoutSeconds > 30) throw new N(P.INVALID_ARGUMENT, `invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`);
      }
    }(this.experimentalLongPollingOptions), this.useFetchStreams = !!t.useFetchStreams;
  }
  isEqual(t) {
    return this.host === t.host && this.ssl === t.ssl && this.credentials === t.credentials && this.cacheSizeBytes === t.cacheSizeBytes && this.experimentalForceLongPolling === t.experimentalForceLongPolling && this.experimentalAutoDetectLongPolling === t.experimentalAutoDetectLongPolling && function(r, i) {
      return r.timeoutSeconds === i.timeoutSeconds;
    }(this.experimentalLongPollingOptions, t.experimentalLongPollingOptions) && this.ignoreUndefinedProperties === t.ignoreUndefinedProperties && this.useFetchStreams === t.useFetchStreams;
  }
}
class Er {
  /** @hideconstructor */
  constructor(t, e, r, i) {
    this._authCredentials = t, this._appCheckCredentials = e, this._databaseId = r, this._app = i, /**
     * Whether it's a Firestore or Firestore Lite instance.
     */
    this.type = "firestore-lite", this._persistenceKey = "(lite)", this._settings = new Ho({}), this._settingsFrozen = !1, // A task that is assigned when the terminate() is invoked and resolved when
    // all components have shut down. Otherwise, Firestore is not terminated,
    // which can mean either the FirestoreClient is in the process of starting,
    // or restarting.
    this._terminateTask = "notTerminated";
  }
  /**
   * The {@link @firebase/app#FirebaseApp} associated with this `Firestore` service
   * instance.
   */
  get app() {
    if (!this._app) throw new N(P.FAILED_PRECONDITION, "Firestore was not initialized using the Firebase SDK. 'app' is not available");
    return this._app;
  }
  get _initialized() {
    return this._settingsFrozen;
  }
  get _terminated() {
    return this._terminateTask !== "notTerminated";
  }
  _setSettings(t) {
    if (this._settingsFrozen) throw new N(P.FAILED_PRECONDITION, "Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");
    this._settings = new Ho(t), t.credentials !== void 0 && (this._authCredentials = function(r) {
      if (!r) return new Hc();
      switch (r.type) {
        case "firstParty":
          return new Jc(r.sessionIndex || "0", r.iamToken || null, r.authTokenFactory || null);
        case "provider":
          return r.client;
        default:
          throw new N(P.INVALID_ARGUMENT, "makeAuthCredentialsProvider failed due to invalid credential type");
      }
    }(t.credentials));
  }
  _getSettings() {
    return this._settings;
  }
  _freezeSettings() {
    return this._settingsFrozen = !0, this._settings;
  }
  _delete() {
    return this._terminateTask === "notTerminated" && (this._terminateTask = this._terminate()), this._terminateTask;
  }
  async _restart() {
    this._terminateTask === "notTerminated" ? await this._terminate() : this._terminateTask = "notTerminated";
  }
  /** Returns a JSON-serializable representation of this `Firestore` instance. */
  toJSON() {
    return {
      app: this._app,
      databaseId: this._databaseId,
      settings: this._settings
    };
  }
  /**
   * Terminates all components used by this client. Subclasses can override
   * this method to clean up their own dependencies, but must also call this
   * method.
   *
   * Only ever called once.
   */
  _terminate() {
    return function(e) {
      const r = Ko.get(e);
      r && (k("ComponentProvider", "Removing Datastore"), Ko.delete(e), r.terminate());
    }(this), Promise.resolve();
  }
}
function Mf(n, t, e, r = {}) {
  var i;
  const o = (n = ar(n, Er))._getSettings(), u = `${t}:${e}`;
  if (o.host !== "firestore.googleapis.com" && o.host !== u && Ee("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."), n._setSettings(Object.assign(Object.assign({}, o), {
    host: u,
    ssl: !1
  })), r.mockUserToken) {
    let c, h;
    if (typeof r.mockUserToken == "string") c = r.mockUserToken, h = gt.MOCK_USER;
    else {
      c = Sl(r.mockUserToken, (i = n._app) === null || i === void 0 ? void 0 : i.options.projectId);
      const f = r.mockUserToken.sub || r.mockUserToken.user_id;
      if (!f) throw new N(P.INVALID_ARGUMENT, "mockUserToken must contain 'sub' or 'user_id' field!");
      h = new gt(f);
    }
    n._authCredentials = new Qc(new pa(c, h));
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
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
class De {
  // This is the lite version of the Query class in the main SDK.
  /** @hideconstructor protected */
  constructor(t, e, r) {
    this.converter = e, this._query = r, /** The type of this Firestore reference. */
    this.type = "query", this.firestore = t;
  }
  withConverter(t) {
    return new De(this.firestore, t, this._query);
  }
}
class It {
  /** @hideconstructor */
  constructor(t, e, r) {
    this.converter = e, this._key = r, /** The type of this Firestore reference. */
    this.type = "document", this.firestore = t;
  }
  get _path() {
    return this._key.path;
  }
  /**
   * The document's identifier within its collection.
   */
  get id() {
    return this._key.path.lastSegment();
  }
  /**
   * A string representing the path of the referenced document (relative
   * to the root of the database).
   */
  get path() {
    return this._key.path.canonicalString();
  }
  /**
   * The collection this `DocumentReference` belongs to.
   */
  get parent() {
    return new Wt(this.firestore, this.converter, this._key.path.popLast());
  }
  withConverter(t) {
    return new It(this.firestore, t, this._key);
  }
}
class Wt extends De {
  /** @hideconstructor */
  constructor(t, e, r) {
    super(t, e, Ra(r)), this._path = r, /** The type of this Firestore reference. */
    this.type = "collection";
  }
  /** The collection's identifier. */
  get id() {
    return this._query.path.lastSegment();
  }
  /**
   * A string representing the path of the referenced collection (relative
   * to the root of the database).
   */
  get path() {
    return this._query.path.canonicalString();
  }
  /**
   * A reference to the containing `DocumentReference` if this is a
   * subcollection. If this isn't a subcollection, the reference is null.
   */
  get parent() {
    const t = this._path.popLast();
    return t.isEmpty() ? null : new It(
      this.firestore,
      /* converter= */
      null,
      new x(t)
    );
  }
  withConverter(t) {
    return new Wt(this.firestore, t, this._path);
  }
}
function _u(n, t, ...e) {
  if (n = ye(n), gu("collection", "path", t), n instanceof Er) {
    const r = Y.fromString(t, ...e);
    return Wo(r), new Wt(
      n,
      /* converter= */
      null,
      r
    );
  }
  {
    if (!(n instanceof It || n instanceof Wt)) throw new N(P.INVALID_ARGUMENT, "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");
    const r = n._path.child(Y.fromString(t, ...e));
    return Wo(r), new Wt(
      n.firestore,
      /* converter= */
      null,
      r
    );
  }
}
function Lf(n, t, ...e) {
  if (n = ye(n), // We allow omission of 'pathString' but explicitly prohibit passing in both
  // 'undefined' and 'null'.
  arguments.length === 1 && (t = ma.newId()), gu("doc", "path", t), n instanceof Er) {
    const r = Y.fromString(t, ...e);
    return Go(r), new It(
      n,
      /* converter= */
      null,
      new x(r)
    );
  }
  {
    if (!(n instanceof It || n instanceof Wt)) throw new N(P.INVALID_ARGUMENT, "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");
    const r = n._path.child(Y.fromString(t, ...e));
    return Go(r), new It(n.firestore, n instanceof Wt ? n.converter : null, new x(r));
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
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
class Qo {
  constructor(t = Promise.resolve()) {
    this.Pu = [], // Is this AsyncQueue being shut down? Once it is set to true, it will not
    // be changed again.
    this.Iu = !1, // Operations scheduled to be queued in the future. Operations are
    // automatically removed after they are run or canceled.
    this.Tu = [], // visible for testing
    this.Eu = null, // Flag set while there's an outstanding AsyncQueue operation, used for
    // assertion sanity-checks.
    this.du = !1, // Enabled during shutdown on Safari to prevent future access to IndexedDB.
    this.Au = !1, // List of TimerIds to fast-forward delays for.
    this.Ru = [], // Backoff timer used to schedule retries for retryable operations
    this.t_ = new Ja(
      this,
      "async_queue_retry"
      /* TimerId.AsyncQueueRetry */
    ), // Visibility handler that triggers an immediate retry of all retryable
    // operations. Meant to speed up recovery when we regain file system access
    // after page comes into foreground.
    this.Vu = () => {
      const r = Zr();
      r && k("AsyncQueue", "Visibility state changed to " + r.visibilityState), this.t_.jo();
    }, this.mu = t;
    const e = Zr();
    e && typeof e.addEventListener == "function" && e.addEventListener("visibilitychange", this.Vu);
  }
  get isShuttingDown() {
    return this.Iu;
  }
  /**
   * Adds a new operation to the queue without waiting for it to complete (i.e.
   * we ignore the Promise result).
   */
  enqueueAndForget(t) {
    this.enqueue(t);
  }
  enqueueAndForgetEvenWhileRestricted(t) {
    this.fu(), // eslint-disable-next-line @typescript-eslint/no-floating-promises
    this.gu(t);
  }
  enterRestrictedMode(t) {
    if (!this.Iu) {
      this.Iu = !0, this.Au = t || !1;
      const e = Zr();
      e && typeof e.removeEventListener == "function" && e.removeEventListener("visibilitychange", this.Vu);
    }
  }
  enqueue(t) {
    if (this.fu(), this.Iu)
      return new Promise(() => {
      });
    const e = new Gt();
    return this.gu(() => this.Iu && this.Au ? Promise.resolve() : (t().then(e.resolve, e.reject), e.promise)).then(() => e.promise);
  }
  enqueueRetryable(t) {
    this.enqueueAndForget(() => (this.Pu.push(t), this.pu()));
  }
  /**
   * Runs the next operation from the retryable queue. If the operation fails,
   * reschedules with backoff.
   */
  async pu() {
    if (this.Pu.length !== 0) {
      try {
        await this.Pu[0](), this.Pu.shift(), this.t_.reset();
      } catch (t) {
        if (!pn(t)) throw t;
        k("AsyncQueue", "Operation failed with retryable error: " + t);
      }
      this.Pu.length > 0 && // If there are additional operations, we re-schedule `retryNextOp()`.
      // This is necessary to run retryable operations that failed during
      // their initial attempt since we don't know whether they are already
      // enqueued. If, for example, `op1`, `op2`, `op3` are enqueued and `op1`
      // needs to  be re-run, we will run `op1`, `op1`, `op2` using the
      // already enqueued calls to `retryNextOp()`. `op3()` will then run in the
      // call scheduled here.
      // Since `backoffAndRun()` cancels an existing backoff and schedules a
      // new backoff on every call, there is only ever a single additional
      // operation in the queue.
      this.t_.Go(() => this.pu());
    }
  }
  gu(t) {
    const e = this.mu.then(() => (this.du = !0, t().catch((r) => {
      this.Eu = r, this.du = !1;
      const i = (
        /**
        * Chrome includes Error.message in Error.stack. Other browsers do not.
        * This returns expected output of message + stack when available.
        * @param error - Error or FirestoreError
        */
        function(u) {
          let c = u.message || "";
          return u.stack && (c = u.stack.includes(u.message) ? u.stack : u.message + `
` + u.stack), c;
        }(r)
      );
      throw Lt("INTERNAL UNHANDLED ERROR: ", i), r;
    }).then((r) => (this.du = !1, r))));
    return this.mu = e, e;
  }
  enqueueAfterDelay(t, e, r) {
    this.fu(), // Fast-forward delays for timerIds that have been overridden.
    this.Ru.indexOf(t) > -1 && (e = 0);
    const i = js.createAndSchedule(this, t, e, r, (o) => this.yu(o));
    return this.Tu.push(i), i;
  }
  fu() {
    this.Eu && M();
  }
  verifyOperationInProgress() {
  }
  /**
   * Waits until all currently queued tasks are finished executing. Delayed
   * operations are not run.
   */
  async wu() {
    let t;
    do
      t = this.mu, await t;
    while (t !== this.mu);
  }
  /**
   * For Tests: Determine if a delayed operation with a particular TimerId
   * exists.
   */
  Su(t) {
    for (const e of this.Tu) if (e.timerId === t) return !0;
    return !1;
  }
  /**
   * For Tests: Runs some or all delayed operations early.
   *
   * @param lastTimerId - Delayed operations up to and including this TimerId
   * will be drained. Pass TimerId.All to run all delayed operations.
   * @returns a Promise that resolves once all operations have been run.
   */
  bu(t) {
    return this.wu().then(() => {
      this.Tu.sort((e, r) => e.targetTimeMs - r.targetTimeMs);
      for (const e of this.Tu) if (e.skipDelay(), t !== "all" && e.timerId === t) break;
      return this.wu();
    });
  }
  /**
   * For Tests: Skip all subsequent delays for a timer id.
   */
  Du(t) {
    this.Ru.push(t);
  }
  /** Called once a DelayedOperation is run or canceled. */
  yu(t) {
    const e = this.Tu.indexOf(t);
    this.Tu.splice(e, 1);
  }
}
class Gs extends Er {
  /** @hideconstructor */
  constructor(t, e, r, i) {
    super(t, e, r, i), /**
     * Whether it's a {@link Firestore} or Firestore Lite instance.
     */
    this.type = "firestore", this._queue = new Qo(), this._persistenceKey = (i == null ? void 0 : i.name) || "[DEFAULT]";
  }
  async _terminate() {
    if (this._firestoreClient) {
      const t = this._firestoreClient.terminate();
      this._queue = new Qo(t), this._firestoreClient = void 0, await t;
    }
  }
}
function Ff(n, t) {
  const e = typeof n == "object" ? n : Mc(), r = typeof n == "string" ? n : "(default)", i = Nc(e, "firestore").getImmediate({
    identifier: r
  });
  if (!i._initialized) {
    const o = Rl("firestore");
    o && Mf(i, ...o);
  }
  return i;
}
function yu(n) {
  if (n._terminated) throw new N(P.FAILED_PRECONDITION, "The client has already been terminated.");
  return n._firestoreClient || Uf(n), n._firestoreClient;
}
function Uf(n) {
  var t, e, r;
  const i = n._freezeSettings(), o = function(c, h, f, m) {
    return new hh(c, h, f, m.host, m.ssl, m.experimentalForceLongPolling, m.experimentalAutoDetectLongPolling, mu(m.experimentalLongPollingOptions), m.useFetchStreams);
  }(n._databaseId, ((t = n._app) === null || t === void 0 ? void 0 : t.options.appId) || "", n._persistenceKey, i);
  n._componentsProvider || !((e = i.localCache) === null || e === void 0) && e._offlineComponentProvider && (!((r = i.localCache) === null || r === void 0) && r._onlineComponentProvider) && (n._componentsProvider = {
    _offline: i.localCache._offlineComponentProvider,
    _online: i.localCache._onlineComponentProvider
  }), n._firestoreClient = new bf(n._authCredentials, n._appCheckCredentials, n._queue, o, n._componentsProvider && function(c) {
    const h = c == null ? void 0 : c._online.build();
    return {
      _offline: c == null ? void 0 : c._offline.build(h),
      _online: h
    };
  }(n._componentsProvider));
}
/**
 * @license
 * Copyright 2020 Google LLC
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
class Re {
  /** @hideconstructor */
  constructor(t) {
    this._byteString = t;
  }
  /**
   * Creates a new `Bytes` object from the given Base64 string, converting it to
   * bytes.
   *
   * @param base64 - The Base64 string used to create the `Bytes` object.
   */
  static fromBase64String(t) {
    try {
      return new Re(ct.fromBase64String(t));
    } catch (e) {
      throw new N(P.INVALID_ARGUMENT, "Failed to construct data from Base64 string: " + e);
    }
  }
  /**
   * Creates a new `Bytes` object from the given Uint8Array.
   *
   * @param array - The Uint8Array used to create the `Bytes` object.
   */
  static fromUint8Array(t) {
    return new Re(ct.fromUint8Array(t));
  }
  /**
   * Returns the underlying bytes as a Base64-encoded string.
   *
   * @returns The Base64-encoded string created from the `Bytes` object.
   */
  toBase64() {
    return this._byteString.toBase64();
  }
  /**
   * Returns the underlying bytes in a new `Uint8Array`.
   *
   * @returns The Uint8Array created from the `Bytes` object.
   */
  toUint8Array() {
    return this._byteString.toUint8Array();
  }
  /**
   * Returns a string representation of the `Bytes` object.
   *
   * @returns A string representation of the `Bytes` object.
   */
  toString() {
    return "Bytes(base64: " + this.toBase64() + ")";
  }
  /**
   * Returns true if this `Bytes` object is equal to the provided one.
   *
   * @param other - The `Bytes` object to compare against.
   * @returns true if this `Bytes` object is equal to the provided one.
   */
  isEqual(t) {
    return this._byteString.isEqual(t._byteString);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
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
class Ws {
  /**
   * Creates a `FieldPath` from the provided field names. If more than one field
   * name is provided, the path will point to a nested field in a document.
   *
   * @param fieldNames - A list of field names.
   */
  constructor(...t) {
    for (let e = 0; e < t.length; ++e) if (t[e].length === 0) throw new N(P.INVALID_ARGUMENT, "Invalid field name at argument $(i + 1). Field names must not be empty.");
    this._internalPath = new ut(t);
  }
  /**
   * Returns true if this `FieldPath` is equal to the provided one.
   *
   * @param other - The `FieldPath` to compare against.
   * @returns true if this `FieldPath` is equal to the provided one.
   */
  isEqual(t) {
    return this._internalPath.isEqual(t._internalPath);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
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
class Eu {
  /**
   * @param _methodName - The public API endpoint that returns this class.
   * @hideconstructor
   */
  constructor(t) {
    this._methodName = t;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
class Hs {
  /**
   * Creates a new immutable `GeoPoint` object with the provided latitude and
   * longitude values.
   * @param latitude - The latitude as number between -90 and 90.
   * @param longitude - The longitude as number between -180 and 180.
   */
  constructor(t, e) {
    if (!isFinite(t) || t < -90 || t > 90) throw new N(P.INVALID_ARGUMENT, "Latitude must be a number between -90 and 90, but was: " + t);
    if (!isFinite(e) || e < -180 || e > 180) throw new N(P.INVALID_ARGUMENT, "Longitude must be a number between -180 and 180, but was: " + e);
    this._lat = t, this._long = e;
  }
  /**
   * The latitude of this `GeoPoint` instance.
   */
  get latitude() {
    return this._lat;
  }
  /**
   * The longitude of this `GeoPoint` instance.
   */
  get longitude() {
    return this._long;
  }
  /**
   * Returns true if this `GeoPoint` is equal to the provided one.
   *
   * @param other - The `GeoPoint` to compare against.
   * @returns true if this `GeoPoint` is equal to the provided one.
   */
  isEqual(t) {
    return this._lat === t._lat && this._long === t._long;
  }
  /** Returns a JSON-serializable representation of this GeoPoint. */
  toJSON() {
    return {
      latitude: this._lat,
      longitude: this._long
    };
  }
  /**
   * Actually private to JS consumers of our API, so this function is prefixed
   * with an underscore.
   */
  _compareTo(t) {
    return $(this._lat, t._lat) || $(this._long, t._long);
  }
}
/**
 * @license
 * Copyright 2024 Google LLC
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
class Qs {
  /**
   * @private
   * @internal
   */
  constructor(t) {
    this._values = (t || []).map((e) => e);
  }
  /**
   * Returns a copy of the raw number array form of the vector.
   */
  toArray() {
    return this._values.map((t) => t);
  }
  /**
   * Returns `true` if the two VectorValue has the same raw number arrays, returns `false` otherwise.
   */
  isEqual(t) {
    return function(r, i) {
      if (r.length !== i.length) return !1;
      for (let o = 0; o < r.length; ++o) if (r[o] !== i[o]) return !1;
      return !0;
    }(this._values, t._values);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
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
const Bf = /^__.*__$/;
class qf {
  constructor(t, e, r) {
    this.data = t, this.fieldMask = e, this.fieldTransforms = r;
  }
  toMutation(t, e) {
    return this.fieldMask !== null ? new ae(t, this.data, this.fieldMask, e, this.fieldTransforms) : new gn(t, this.data, e, this.fieldTransforms);
  }
}
function vu(n) {
  switch (n) {
    case 0:
    case 2:
    case 1:
      return !0;
    case 3:
    case 4:
      return !1;
    default:
      throw M();
  }
}
class Ys {
  /**
   * Initializes a ParseContext with the given source and path.
   *
   * @param settings - The settings for the parser.
   * @param databaseId - The database ID of the Firestore instance.
   * @param serializer - The serializer to use to generate the Value proto.
   * @param ignoreUndefinedProperties - Whether to ignore undefined properties
   * rather than throw.
   * @param fieldTransforms - A mutable list of field transforms encountered
   * while parsing the data.
   * @param fieldMask - A mutable list of field paths encountered while parsing
   * the data.
   *
   * TODO(b/34871131): We don't support array paths right now, so path can be
   * null to indicate the context represents any location within an array (in
   * which case certain features will not work and errors will be somewhat
   * compromised).
   */
  constructor(t, e, r, i, o, u) {
    this.settings = t, this.databaseId = e, this.serializer = r, this.ignoreUndefinedProperties = i, // Minor hack: If fieldTransforms is undefined, we assume this is an
    // external call and we need to validate the entire path.
    o === void 0 && this.vu(), this.fieldTransforms = o || [], this.fieldMask = u || [];
  }
  get path() {
    return this.settings.path;
  }
  get Cu() {
    return this.settings.Cu;
  }
  /** Returns a new context with the specified settings overwritten. */
  Fu(t) {
    return new Ys(Object.assign(Object.assign({}, this.settings), t), this.databaseId, this.serializer, this.ignoreUndefinedProperties, this.fieldTransforms, this.fieldMask);
  }
  Mu(t) {
    var e;
    const r = (e = this.path) === null || e === void 0 ? void 0 : e.child(t), i = this.Fu({
      path: r,
      xu: !1
    });
    return i.Ou(t), i;
  }
  Nu(t) {
    var e;
    const r = (e = this.path) === null || e === void 0 ? void 0 : e.child(t), i = this.Fu({
      path: r,
      xu: !1
    });
    return i.vu(), i;
  }
  Lu(t) {
    return this.Fu({
      path: void 0,
      xu: !0
    });
  }
  Bu(t) {
    return ur(t, this.settings.methodName, this.settings.ku || !1, this.path, this.settings.qu);
  }
  /** Returns 'true' if 'fieldPath' was traversed when creating this context. */
  contains(t) {
    return this.fieldMask.find((e) => t.isPrefixOf(e)) !== void 0 || this.fieldTransforms.find((e) => t.isPrefixOf(e.field)) !== void 0;
  }
  vu() {
    if (this.path) for (let t = 0; t < this.path.length; t++) this.Ou(this.path.get(t));
  }
  Ou(t) {
    if (t.length === 0) throw this.Bu("Document fields must not be empty");
    if (vu(this.Cu) && Bf.test(t)) throw this.Bu('Document fields cannot begin and end with "__"');
  }
}
class jf {
  constructor(t, e, r) {
    this.databaseId = t, this.ignoreUndefinedProperties = e, this.serializer = r || mr(t);
  }
  /** Creates a new top-level parse context. */
  Qu(t, e, r, i = !1) {
    return new Ys({
      Cu: t,
      methodName: e,
      qu: r,
      path: ut.emptyPath(),
      xu: !1,
      ku: i
    }, this.databaseId, this.serializer, this.ignoreUndefinedProperties);
  }
}
function Tu(n) {
  const t = n._freezeSettings(), e = mr(n._databaseId);
  return new jf(n._databaseId, !!t.ignoreUndefinedProperties, e);
}
function $f(n, t, e, r, i, o = {}) {
  const u = n.Qu(o.merge || o.mergeFields ? 2 : 0, t, e, i);
  Au("Data must be an object, but it was:", u, r);
  const c = Iu(r, u);
  let h, f;
  if (o.merge) h = new At(u.fieldMask), f = u.fieldTransforms;
  else if (o.mergeFields) {
    const m = [];
    for (const w of o.mergeFields) {
      const R = Kf(t, w, e);
      if (!u.contains(R)) throw new N(P.INVALID_ARGUMENT, `Field '${R}' is specified in your field mask but missing from your input data.`);
      Wf(m, R) || m.push(R);
    }
    h = new At(m), f = u.fieldTransforms.filter((w) => h.covers(w.field));
  } else h = null, f = u.fieldTransforms;
  return new qf(new Tt(c), h, f);
}
function zf(n, t, e, r = !1) {
  return Xs(e, n.Qu(r ? 4 : 3, t));
}
function Xs(n, t) {
  if (wu(
    // Unwrap the API type from the Compat SDK. This will return the API type
    // from firestore-exp.
    n = ye(n)
  )) return Au("Unsupported field value:", t, n), Iu(n, t);
  if (n instanceof Eu)
    return function(r, i) {
      if (!vu(i.Cu)) throw i.Bu(`${r._methodName}() can only be used with update() and set()`);
      if (!i.path) throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);
      const o = r._toFieldTransform(i);
      o && i.fieldTransforms.push(o);
    }(n, t), null;
  if (n === void 0 && t.ignoreUndefinedProperties)
    return null;
  if (
    // If context.path is null we are inside an array and we don't support
    // field mask paths more granular than the top-level array.
    t.path && t.fieldMask.push(t.path), n instanceof Array
  ) {
    if (t.settings.xu && t.Cu !== 4) throw t.Bu("Nested arrays are not supported");
    return function(r, i) {
      const o = [];
      let u = 0;
      for (const c of r) {
        let h = Xs(c, i.Lu(u));
        h == null && // Just include nulls in the array for fields being replaced with a
        // sentinel.
        (h = {
          nullValue: "NULL_VALUE"
        }), o.push(h), u++;
      }
      return {
        arrayValue: {
          values: o
        }
      };
    }(n, t);
  }
  return function(r, i) {
    if ((r = ye(r)) === null) return {
      nullValue: "NULL_VALUE"
    };
    if (typeof r == "number") return kh(i.serializer, r);
    if (typeof r == "boolean") return {
      booleanValue: r
    };
    if (typeof r == "string") return {
      stringValue: r
    };
    if (r instanceof Date) {
      const o = nt.fromDate(r);
      return {
        timestampValue: sr(i.serializer, o)
      };
    }
    if (r instanceof nt) {
      const o = new nt(r.seconds, 1e3 * Math.floor(r.nanoseconds / 1e3));
      return {
        timestampValue: sr(i.serializer, o)
      };
    }
    if (r instanceof Hs) return {
      geoPointValue: {
        latitude: r.latitude,
        longitude: r.longitude
      }
    };
    if (r instanceof Re) return {
      bytesValue: $a(i.serializer, r._byteString)
    };
    if (r instanceof It) {
      const o = i.databaseId, u = r.firestore._databaseId;
      if (!u.isEqual(o)) throw i.Bu(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${o.projectId}/${o.database}`);
      return {
        referenceValue: xs(r.firestore._databaseId || i.databaseId, r._key.path)
      };
    }
    if (r instanceof Qs)
      return function(u, c) {
        return {
          mapValue: {
            fields: {
              __type__: {
                stringValue: "__vector__"
              },
              value: {
                arrayValue: {
                  values: u.toArray().map((h) => {
                    if (typeof h != "number") throw c.Bu("VectorValues must only contain numeric values.");
                    return Ds(c.serializer, h);
                  })
                }
              }
            }
          }
        };
      }(r, i);
    throw i.Bu(`Unsupported field value: ${yr(r)}`);
  }(n, t);
}
function Iu(n, t) {
  const e = {};
  return ga(n) ? (
    // If we encounter an empty object, we explicitly add it to the update
    // mask to ensure that the server creates a map entry.
    t.path && t.path.length > 0 && t.fieldMask.push(t.path)
  ) : Ve(n, (r, i) => {
    const o = Xs(i, t.Mu(r));
    o != null && (e[r] = o);
  }), {
    mapValue: {
      fields: e
    }
  };
}
function wu(n) {
  return !(typeof n != "object" || n === null || n instanceof Array || n instanceof Date || n instanceof nt || n instanceof Hs || n instanceof Re || n instanceof It || n instanceof Eu || n instanceof Qs);
}
function Au(n, t, e) {
  if (!wu(e) || !function(i) {
    return typeof i == "object" && i !== null && (Object.getPrototypeOf(i) === Object.prototype || Object.getPrototypeOf(i) === null);
  }(e)) {
    const r = yr(e);
    throw r === "an object" ? t.Bu(n + " a custom object") : t.Bu(n + " " + r);
  }
}
function Kf(n, t, e) {
  if (
    // If required, replace the FieldPath Compat class with the firestore-exp
    // FieldPath.
    (t = ye(t)) instanceof Ws
  ) return t._internalPath;
  if (typeof t == "string") return Ru(n, t);
  throw ur(
    "Field path arguments must be of type string or ",
    n,
    /* hasConverter= */
    !1,
    /* path= */
    void 0,
    e
  );
}
const Gf = new RegExp("[~\\*/\\[\\]]");
function Ru(n, t, e) {
  if (t.search(Gf) >= 0) throw ur(
    `Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,
    n,
    /* hasConverter= */
    !1,
    /* path= */
    void 0,
    e
  );
  try {
    return new Ws(...t.split("."))._internalPath;
  } catch {
    throw ur(
      `Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,
      n,
      /* hasConverter= */
      !1,
      /* path= */
      void 0,
      e
    );
  }
}
function ur(n, t, e, r, i) {
  const o = r && !r.isEmpty(), u = i !== void 0;
  let c = `Function ${t}() called with invalid data`;
  e && (c += " (via `toFirestore()`)"), c += ". ";
  let h = "";
  return (o || u) && (h += " (found", o && (h += ` in field ${r}`), u && (h += ` in document ${i}`), h += ")"), new N(P.INVALID_ARGUMENT, c + n + h);
}
function Wf(n, t) {
  return n.some((e) => e.isEqual(t));
}
/**
 * @license
 * Copyright 2020 Google LLC
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
class Pu {
  // Note: This class is stripped down version of the DocumentSnapshot in
  // the legacy SDK. The changes are:
  // - No support for SnapshotMetadata.
  // - No support for SnapshotOptions.
  /** @hideconstructor protected */
  constructor(t, e, r, i, o) {
    this._firestore = t, this._userDataWriter = e, this._key = r, this._document = i, this._converter = o;
  }
  /** Property of the `DocumentSnapshot` that provides the document's ID. */
  get id() {
    return this._key.path.lastSegment();
  }
  /**
   * The `DocumentReference` for the document included in the `DocumentSnapshot`.
   */
  get ref() {
    return new It(this._firestore, this._converter, this._key);
  }
  /**
   * Signals whether or not the document at the snapshot's location exists.
   *
   * @returns true if the document exists.
   */
  exists() {
    return this._document !== null;
  }
  /**
   * Retrieves all fields in the document as an `Object`. Returns `undefined` if
   * the document doesn't exist.
   *
   * @returns An `Object` containing all fields in the document or `undefined`
   * if the document doesn't exist.
   */
  data() {
    if (this._document) {
      if (this._converter) {
        const t = new Hf(
          this._firestore,
          this._userDataWriter,
          this._key,
          this._document,
          /* converter= */
          null
        );
        return this._converter.fromFirestore(t);
      }
      return this._userDataWriter.convertValue(this._document.data.value);
    }
  }
  /**
   * Retrieves the field specified by `fieldPath`. Returns `undefined` if the
   * document or field doesn't exist.
   *
   * @param fieldPath - The path (for example 'foo' or 'foo.bar') to a specific
   * field.
   * @returns The data at the specified field location or undefined if no such
   * field exists in the document.
   */
  // We are using `any` here to avoid an explicit cast by our users.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  get(t) {
    if (this._document) {
      const e = this._document.data.field(Js("DocumentSnapshot.get", t));
      if (e !== null) return this._userDataWriter.convertValue(e);
    }
  }
}
class Hf extends Pu {
  /**
   * Retrieves all fields in the document as an `Object`.
   *
   * @override
   * @returns An `Object` containing all fields in the document.
   */
  data() {
    return super.data();
  }
}
function Js(n, t) {
  return typeof t == "string" ? Ru(n, t) : t instanceof Ws ? t._internalPath : t._delegate._internalPath;
}
/**
 * @license
 * Copyright 2020 Google LLC
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
function Qf(n) {
  if (n.limitType === "L" && n.explicitOrderBy.length === 0) throw new N(P.UNIMPLEMENTED, "limitToLast() queries require specifying at least one orderBy() clause");
}
class Zs {
}
class Yf extends Zs {
}
function Xf(n, t, ...e) {
  let r = [];
  t instanceof Zs && r.push(t), r = r.concat(e), function(o) {
    const u = o.filter((h) => h instanceof ti).length, c = o.filter((h) => h instanceof vr).length;
    if (u > 1 || u > 0 && c > 0) throw new N(P.INVALID_ARGUMENT, "InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.");
  }(r);
  for (const i of r) n = i._apply(n);
  return n;
}
class vr extends Yf {
  /**
   * @internal
   */
  constructor(t, e, r) {
    super(), this._field = t, this._op = e, this._value = r, /** The type of this query constraint */
    this.type = "where";
  }
  static _create(t, e, r) {
    return new vr(t, e, r);
  }
  _apply(t) {
    const e = this._parse(t);
    return Su(t._query, e), new De(t.firestore, t.converter, ds(t._query, e));
  }
  _parse(t) {
    const e = Tu(t.firestore);
    return function(o, u, c, h, f, m, w) {
      let R;
      if (f.isKeyField()) {
        if (m === "array-contains" || m === "array-contains-any") throw new N(P.INVALID_ARGUMENT, `Invalid Query. You can't perform '${m}' queries on documentId().`);
        if (m === "in" || m === "not-in") {
          Xo(w, m);
          const V = [];
          for (const D of w) V.push(Yo(h, o, D));
          R = {
            arrayValue: {
              values: V
            }
          };
        } else R = Yo(h, o, w);
      } else m !== "in" && m !== "not-in" && m !== "array-contains-any" || Xo(w, m), R = zf(
        c,
        u,
        w,
        /* allowArrays= */
        m === "in" || m === "not-in"
      );
      return et.create(f, m, R);
    }(t._query, "where", e, t.firestore._databaseId, this._field, this._op, this._value);
  }
}
function Jf(n, t, e) {
  const r = t, i = Js("where", n);
  return vr._create(i, r, e);
}
class ti extends Zs {
  /**
   * @internal
   */
  constructor(t, e) {
    super(), this.type = t, this._queryConstraints = e;
  }
  static _create(t, e) {
    return new ti(t, e);
  }
  _parse(t) {
    const e = this._queryConstraints.map((r) => r._parse(t)).filter((r) => r.getFilters().length > 0);
    return e.length === 1 ? e[0] : Rt.create(e, this._getOperator());
  }
  _apply(t) {
    const e = this._parse(t);
    return e.getFilters().length === 0 ? t : (function(i, o) {
      let u = i;
      const c = o.getFlattenedFilters();
      for (const h of c) Su(u, h), u = ds(u, h);
    }(t._query, e), new De(t.firestore, t.converter, ds(t._query, e)));
  }
  _getQueryConstraints() {
    return this._queryConstraints;
  }
  _getOperator() {
    return this.type === "and" ? "and" : "or";
  }
}
function Yo(n, t, e) {
  if (typeof (e = ye(e)) == "string") {
    if (e === "") throw new N(P.INVALID_ARGUMENT, "Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");
    if (!Pa(t) && e.indexOf("/") !== -1) throw new N(P.INVALID_ARGUMENT, `Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);
    const r = t.path.child(Y.fromString(e));
    if (!x.isDocumentKey(r)) throw new N(P.INVALID_ARGUMENT, `Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);
    return yo(n, new x(r));
  }
  if (e instanceof It) return yo(n, e._key);
  throw new N(P.INVALID_ARGUMENT, `Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${yr(e)}.`);
}
function Xo(n, t) {
  if (!Array.isArray(n) || n.length === 0) throw new N(P.INVALID_ARGUMENT, `Invalid Query. A non-empty array is required for '${t.toString()}' filters.`);
}
function Su(n, t) {
  const e = function(i, o) {
    for (const u of i) for (const c of u.getFlattenedFilters()) if (o.indexOf(c.op) >= 0) return c.op;
    return null;
  }(n.filters, function(i) {
    switch (i) {
      case "!=":
        return [
          "!=",
          "not-in"
          /* Operator.NOT_IN */
        ];
      case "array-contains-any":
      case "in":
        return [
          "not-in"
          /* Operator.NOT_IN */
        ];
      case "not-in":
        return [
          "array-contains-any",
          "in",
          "not-in",
          "!="
          /* Operator.NOT_EQUAL */
        ];
      default:
        return [];
    }
  }(t.op));
  if (e !== null)
    throw e === t.op ? new N(P.INVALID_ARGUMENT, `Invalid query. You cannot use more than one '${t.op.toString()}' filter.`) : new N(P.INVALID_ARGUMENT, `Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`);
}
class Zf {
  convertValue(t, e = "none") {
    switch (oe(t)) {
      case 0:
        return null;
      case 1:
        return t.booleanValue;
      case 2:
        return Z(t.integerValue || t.doubleValue);
      case 3:
        return this.convertTimestamp(t.timestampValue);
      case 4:
        return this.convertServerTimestamp(t, e);
      case 5:
        return t.stringValue;
      case 6:
        return this.convertBytes(ie(t.bytesValue));
      case 7:
        return this.convertReference(t.referenceValue);
      case 8:
        return this.convertGeoPoint(t.geoPointValue);
      case 9:
        return this.convertArray(t.arrayValue, e);
      case 11:
        return this.convertObject(t.mapValue, e);
      case 10:
        return this.convertVectorValue(t.mapValue);
      default:
        throw M();
    }
  }
  convertObject(t, e) {
    return this.convertObjectMap(t.fields, e);
  }
  /**
   * @internal
   */
  convertObjectMap(t, e = "none") {
    const r = {};
    return Ve(t, (i, o) => {
      r[i] = this.convertValue(o, e);
    }), r;
  }
  /**
   * @internal
   */
  convertVectorValue(t) {
    var e, r, i;
    const o = (i = (r = (e = t.fields) === null || e === void 0 ? void 0 : e.value.arrayValue) === null || r === void 0 ? void 0 : r.values) === null || i === void 0 ? void 0 : i.map((u) => Z(u.doubleValue));
    return new Qs(o);
  }
  convertGeoPoint(t) {
    return new Hs(Z(t.latitude), Z(t.longitude));
  }
  convertArray(t, e) {
    return (t.values || []).map((r) => this.convertValue(r, e));
  }
  convertServerTimestamp(t, e) {
    switch (e) {
      case "previous":
        const r = Ss(t);
        return r == null ? null : this.convertValue(r, e);
      case "estimate":
        return this.convertTimestamp(un(t));
      default:
        return null;
    }
  }
  convertTimestamp(t) {
    const e = Qt(t);
    return new nt(e.seconds, e.nanos);
  }
  convertDocumentKey(t, e) {
    const r = Y.fromString(t);
    z(Qa(r));
    const i = new ln(r.get(1), r.get(3)), o = new x(r.popFirst(5));
    return i.isEqual(e) || // TODO(b/64130202): Somehow support foreign references.
    Lt(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`), o;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
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
function tp(n, t, e) {
  let r;
  return r = n ? n.toFirestore(t) : t, r;
}
/**
 * @license
 * Copyright 2020 Google LLC
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
class zn {
  /** @hideconstructor */
  constructor(t, e) {
    this.hasPendingWrites = t, this.fromCache = e;
  }
  /**
   * Returns true if this `SnapshotMetadata` is equal to the provided one.
   *
   * @param other - The `SnapshotMetadata` to compare against.
   * @returns true if this `SnapshotMetadata` is equal to the provided one.
   */
  isEqual(t) {
    return this.hasPendingWrites === t.hasPendingWrites && this.fromCache === t.fromCache;
  }
}
class ep extends Pu {
  /** @hideconstructor protected */
  constructor(t, e, r, i, o, u) {
    super(t, e, r, i, u), this._firestore = t, this._firestoreImpl = t, this.metadata = o;
  }
  /**
   * Returns whether or not the data exists. True if the document exists.
   */
  exists() {
    return super.exists();
  }
  /**
   * Retrieves all fields in the document as an `Object`. Returns `undefined` if
   * the document doesn't exist.
   *
   * By default, `serverTimestamp()` values that have not yet been
   * set to their final value will be returned as `null`. You can override
   * this by passing an options object.
   *
   * @param options - An options object to configure how data is retrieved from
   * the snapshot (for example the desired behavior for server timestamps that
   * have not yet been set to their final value).
   * @returns An `Object` containing all fields in the document or `undefined` if
   * the document doesn't exist.
   */
  data(t = {}) {
    if (this._document) {
      if (this._converter) {
        const e = new Qn(
          this._firestore,
          this._userDataWriter,
          this._key,
          this._document,
          this.metadata,
          /* converter= */
          null
        );
        return this._converter.fromFirestore(e, t);
      }
      return this._userDataWriter.convertValue(this._document.data.value, t.serverTimestamps);
    }
  }
  /**
   * Retrieves the field specified by `fieldPath`. Returns `undefined` if the
   * document or field doesn't exist.
   *
   * By default, a `serverTimestamp()` that has not yet been set to
   * its final value will be returned as `null`. You can override this by
   * passing an options object.
   *
   * @param fieldPath - The path (for example 'foo' or 'foo.bar') to a specific
   * field.
   * @param options - An options object to configure how the field is retrieved
   * from the snapshot (for example the desired behavior for server timestamps
   * that have not yet been set to their final value).
   * @returns The data at the specified field location or undefined if no such
   * field exists in the document.
   */
  // We are using `any` here to avoid an explicit cast by our users.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  get(t, e = {}) {
    if (this._document) {
      const r = this._document.data.field(Js("DocumentSnapshot.get", t));
      if (r !== null) return this._userDataWriter.convertValue(r, e.serverTimestamps);
    }
  }
}
class Qn extends ep {
  /**
   * Retrieves all fields in the document as an `Object`.
   *
   * By default, `serverTimestamp()` values that have not yet been
   * set to their final value will be returned as `null`. You can override
   * this by passing an options object.
   *
   * @override
   * @param options - An options object to configure how data is retrieved from
   * the snapshot (for example the desired behavior for server timestamps that
   * have not yet been set to their final value).
   * @returns An `Object` containing all fields in the document.
   */
  data(t = {}) {
    return super.data(t);
  }
}
class np {
  /** @hideconstructor */
  constructor(t, e, r, i) {
    this._firestore = t, this._userDataWriter = e, this._snapshot = i, this.metadata = new zn(i.hasPendingWrites, i.fromCache), this.query = r;
  }
  /** An array of all the documents in the `QuerySnapshot`. */
  get docs() {
    const t = [];
    return this.forEach((e) => t.push(e)), t;
  }
  /** The number of documents in the `QuerySnapshot`. */
  get size() {
    return this._snapshot.docs.size;
  }
  /** True if there are no documents in the `QuerySnapshot`. */
  get empty() {
    return this.size === 0;
  }
  /**
   * Enumerates all of the documents in the `QuerySnapshot`.
   *
   * @param callback - A callback to be called with a `QueryDocumentSnapshot` for
   * each document in the snapshot.
   * @param thisArg - The `this` binding for the callback.
   */
  forEach(t, e) {
    this._snapshot.docs.forEach((r) => {
      t.call(e, new Qn(this._firestore, this._userDataWriter, r.key, r, new zn(this._snapshot.mutatedKeys.has(r.key), this._snapshot.fromCache), this.query.converter));
    });
  }
  /**
   * Returns an array of the documents changes since the last snapshot. If this
   * is the first snapshot, all documents will be in the list as 'added'
   * changes.
   *
   * @param options - `SnapshotListenOptions` that control whether metadata-only
   * changes (i.e. only `DocumentSnapshot.metadata` changed) should trigger
   * snapshot events.
   */
  docChanges(t = {}) {
    const e = !!t.includeMetadataChanges;
    if (e && this._snapshot.excludesMetadataChanges) throw new N(P.INVALID_ARGUMENT, "To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");
    return this._cachedChanges && this._cachedChangesIncludeMetadataChanges === e || (this._cachedChanges = /** Calculates the array of `DocumentChange`s for a given `ViewSnapshot`. */
    function(i, o) {
      if (i._snapshot.oldDocs.isEmpty()) {
        let u = 0;
        return i._snapshot.docChanges.map((c) => {
          const h = new Qn(i._firestore, i._userDataWriter, c.doc.key, c.doc, new zn(i._snapshot.mutatedKeys.has(c.doc.key), i._snapshot.fromCache), i.query.converter);
          return c.doc, {
            type: "added",
            doc: h,
            oldIndex: -1,
            newIndex: u++
          };
        });
      }
      {
        let u = i._snapshot.oldDocs;
        return i._snapshot.docChanges.filter((c) => o || c.type !== 3).map((c) => {
          const h = new Qn(i._firestore, i._userDataWriter, c.doc.key, c.doc, new zn(i._snapshot.mutatedKeys.has(c.doc.key), i._snapshot.fromCache), i.query.converter);
          let f = -1, m = -1;
          return c.type !== 0 && (f = u.indexOf(c.doc.key), u = u.delete(c.doc.key)), c.type !== 1 && (u = u.add(c.doc), m = u.indexOf(c.doc.key)), {
            type: rp(c.type),
            doc: h,
            oldIndex: f,
            newIndex: m
          };
        });
      }
    }(this, e), this._cachedChangesIncludeMetadataChanges = e), this._cachedChanges;
  }
}
function rp(n) {
  switch (n) {
    case 0:
      return "added";
    case 2:
    case 3:
      return "modified";
    case 1:
      return "removed";
    default:
      return M();
  }
}
class sp extends Zf {
  constructor(t) {
    super(), this.firestore = t;
  }
  convertBytes(t) {
    return new Re(t);
  }
  convertReference(t) {
    const e = this.convertDocumentKey(t, this.firestore._databaseId);
    return new It(
      this.firestore,
      /* converter= */
      null,
      e
    );
  }
}
function ip(n) {
  n = ar(n, De);
  const t = ar(n.firestore, Gs), e = yu(t), r = new sp(t);
  return Qf(n._query), xf(e, n._query).then((i) => new np(t, r, n, i));
}
function op(n, t) {
  const e = ar(n.firestore, Gs), r = Lf(n), i = tp(n.converter, t);
  return ap(e, [$f(Tu(n.firestore), "addDoc", r._key, i, n.converter !== null, {}).toMutation(r._key, Ot.exists(!1))]).then(() => r);
}
function ap(n, t) {
  return function(r, i) {
    const o = new Gt();
    return r.asyncQueue.enqueueAndForget(async () => Tf(await Nf(r), i, o)), o.promise;
  }(yu(n), t);
}
(function(t, e = !0) {
  (function(i) {
    Se = i;
  })(Oc), Jn(new sn("firestore", (r, { instanceIdentifier: i, options: o }) => {
    const u = r.getProvider("app").getImmediate(), c = new Gs(new Yc(r.getProvider("auth-internal")), new th(r.getProvider("app-check-internal")), function(f, m) {
      if (!Object.prototype.hasOwnProperty.apply(f.options, ["projectId"])) throw new N(P.INVALID_ARGUMENT, '"projectId" not provided in firebase.initializeApp.');
      return new ln(f.options.projectId, m);
    }(u, i), u);
    return o = Object.assign({
      useFetchStreams: e
    }, o), c._setSettings(o), c;
  }, "PUBLIC").setMultipleInstances(!0)), ge(fo, "4.7.3", t), // BUILD_TARGET will be replaced by values like esm5, esm2017, cjs5, etc during the compilation
  ge(fo, "4.7.3", "esm2017");
})();
const up = {
  apiKey: "YOUR_FIREBASE_API_KEY",
  authDomain: "yourapp.firebaseapp.com",
  projectId: "yourapp"
}, lp = ia(up), Vu = Ff(lp), cp = async (n) => {
  const t = Xf(_u(Vu, "surveys"), Jf("licenseKey", "==", n)), e = await ip(t);
  return e.empty ? null : e.docs[0].data();
}, hp = async (n, t, e) => {
  await op(_u(Vu, "responses"), {
    licenseKey: n,
    projectId: t,
    answers: e,
    createdAt: Date.now()
  });
}, dp = { class: "fb-modal-content" }, fp = { key: 0 }, pp = ["onClick"], mp = { key: 2 }, gp = /* @__PURE__ */ cl({
  __name: "FeedbackWidget",
  props: {
    license: {},
    project: {}
  },
  setup(n) {
    const t = n, e = Kr(!1), r = Kr(!0), i = Kr(null);
    hl(async () => {
      i.value = await cp(t.license), r.value = !1;
    });
    const o = (c, h) => {
      i.value.questions[c].answer = h;
    }, u = async () => {
      const c = i.value.questions.map((h) => ({
        text: h.text,
        answer: h.answer || null
      }));
      await hp(t.license, t.project, c), alert("Teşekkürler! 🎉"), e.value = !1;
    };
    return (c, h) => (xt(), kt("div", null, [
      Qe("button", {
        class: "fb-btn",
        onClick: h[0] || (h[0] = (f) => e.value = !0)
      }, "Feedback"),
      e.value ? (xt(), kt("div", {
        key: 0,
        class: "fb-modal",
        onClick: h[1] || (h[1] = fl((f) => e.value = !1, ["self"]))
      }, [
        Qe("div", dp, [
          r.value ? (xt(), kt("h3", fp, "Yükleniyor...")) : i.value ? (xt(), kt(Gr, { key: 1 }, [
            Qe("h3", null, Un(i.value.title), 1),
            (xt(!0), kt(Gr, null, eo(i.value.questions, (f, m) => (xt(), kt("div", {
              key: m,
              class: "fb-question"
            }, [
              Qe("strong", null, Un(m + 1) + ". " + Un(f.text), 1),
              (xt(!0), kt(Gr, null, eo(f.options, (w, R) => (xt(), kt("div", {
                key: R,
                class: pl(["fb-option", { selected: f.answer === w }]),
                onClick: (V) => o(m, w)
              }, Un(w), 11, pp))), 128))
            ]))), 128)),
            Qe("button", {
              class: "fb-submit",
              onClick: u
            }, "Gönder")
          ], 64)) : (xt(), kt("h3", mp, "Aktif anket bulunamadı."))
        ])
      ])) : dl("", !0)
    ]));
  }
}), _p = (n, t) => {
  const e = n.__vccOpts || n;
  for (const [r, i] of t)
    e[r] = i;
  return e;
}, yp = /* @__PURE__ */ _p(gp, [["__scopeId", "data-v-196bedd1"]]), Ep = (n, t) => {
  const e = document.createElement("div");
  document.body.appendChild(e), ml(yp, { license: n, project: t }).mount(e);
};
if (typeof window < "u") {
  const n = document.currentScript;
  if (n) {
    const t = n.getAttribute("data-license") || "", e = n.getAttribute("data-project") || "";
    Ep(t, e);
  }
}
export {
  Ep as mount
};
