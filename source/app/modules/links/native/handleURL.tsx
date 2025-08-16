// app/modules/links/native/handleURL.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 46; continue _fun0001 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 46:
            if(var2) { _fun0001_ip = 55; continue _fun0001 }
 49:
            var2 = var3.@@iterator;
 55:
            if(var2) { _fun0001_ip = 343; continue _fun0001 }
 61:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 323; continue _fun0001 }
 86:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 283; continue _fun0001 }
 96:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 270; continue _fun0001 }
 110:
            var7 = {};
            var9 = var7.toString;
            var7 = var9.call;
            var11 = var7.bind(var9)(var3);
            var10 = var11.slice;
            var9 = 8;
            var7 = -1;
            var9 = var10.bind(var11)(var9, var7);
            var7 = 'Object';
            var7 = var7 === var9;
            if(!var7) { _fun0001_ip = 163; continue _fun0001 }
 158:
            var7 = var3.constructor;
 163:
            var10 = var9;
            if(!var7) { _fun0001_ip = 179; continue _fun0001 }
 169:
            var7 = var3.constructor;
            var10 = var7.name;
 179:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 249; continue _fun0001 }
 187:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 249; continue _fun0001 }
 195:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 234; continue _fun0001 }
 205:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 247; continue _fun0001 }
 234:
            var9 = _closure1_slot9;
            var7 = var9.bind(var8)(var3, var8);
 247:
            _fun0001_ip = 265; continue _fun0001;
 249:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 265:
            var6 = var7;
            _fun0001_ip = 283; continue _fun0001;
 270:
            var7 = _closure1_slot9;
            var6 = var7.bind(var8)(var3, var8);
 283:
            var4 = var6;
            if(var4) { _fun0001_ip = 323; continue _fun0001 }
 289:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 323:
            if(!var4) { _fun0001_ip = 330; continue _fun0001 }
 326:
            _closure2_slot0 = var4;
 330:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 56; continue _fun0002 }
 20:
                    var1 = {};
                    var2 = false;
                    var1['done'] = var2;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = parseFloat(var2);
                    var4 = var2 + 1;
                    _closure2_slot1 = var4;
                    var2 = var3[var2];
                    var1['value'] = var2;
                    _fun0002_ip = 67; continue _fun0002;
 56:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
 67:
                    return var1;
                }
            };
            return var1;
 343:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot8 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 23; continue _fun0003 }
 14:
            var2 = var4.length;
            var1 = var3 > var2;
 23:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
 28:
            var2 = var4.length;
 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 70; continue _fun0003 }
 55:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 55; continue _fun0003 }
 70:
            return var1;
        }
    };
    var _closure1_slot9 = var1;
    var1 = function sanitizeURLPart(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var5 = arg1;
            var2 = null;
            var1 = var5;
            if(!(var2 != var1)) { _fun0004_ip = 44; continue _fun0004 }
 12:
            var4 = var5.replace;
            var3 = /[^\x00-\x7F]+/g;
            var2 = function(arg1) {
                var1 = global;
                var3 = var1.encodeURIComponent;
                var2 = undefined;
                var1 = arg1;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var1 = var4.bind(var5)(var3, var2);
 44:
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var1 = function _handleURL() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    StartGenerator();
                    var3 = arg1;
                    var2 = arguments[2];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                    if(var4) { _fun0005_ip = 468; continue _fun0005 }
 18:
                    var8 = var3;
                    var _closure4_slot0 = var3;
                    var3 = arg2;
                    var _closure4_slot1 = var3;
                    var3 = undefined;
                    if(!(var2 === var3)) { _fun0005_ip = 40; continue _fun0005 }
 38:
                    var2 = {};
 40:
                    var5 = var2.allowExternal;
                    if(!(var5 === var3)) { _fun0005_ip = 52; continue _fun0005 }
 50:
                    var5 = true;
 52:
                    var6 = var2.forceExternalBrowser;
                    if(!(var6 === var3)) { _fun0005_ip = 64; continue _fun0005 }
 62:
                    var6 = false;
 64:
                    var _closure4_slot2 = var6;
                    SaveGenerator(address=72);
 70:
                    return var3;
 72:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0005_ip = 465; continue _fun0005 }
 81:
                    var4 = function openInBrowser() {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                            var5 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var1 = 9;
                            var4 = var4[var1];
                            var1 = undefined;
                            var7 = var5.bind(var1)(var4);
                            var5 = var7.sanitizeUrl;
                            var4 = _closure4_slot0;
                            var4 = var5.bind(var7)(var4);
                            var9 = null;
                            if(!(var9 == var4)) { _fun0006_ip = 134; continue _fun0006 }
 51:
                            var11 = _closure1_slot0;
                            var12 = _closure1_slot2;
                            var4 = 10;
                            var4 = var12[var4];
                            var7 = var11.bind(var1)(var4);
                            var5 = var7.presentFailedToast;
                            var4 = 11;
                            var8 = var12[var4];
                            var8 = var11.bind(var1)(var8);
                            var10 = var8.intl;
                            var8 = var10.string;
                            var4 = var12[var4];
                            var4 = var11.bind(var1)(var4);
                            var4 = var4.t;
                            var4 = var4.XiqzAg;
                            var4 = var8.bind(var10)(var4);
                            var4 = var5.bind(var7)(var4);
                            _fun0006_ip = 627; continue _fun0006;
 134:
                            var4 = _closure1_slot6;
                            var5 = var4.SAFARI;
                            var8 = _closure4_slot0;
                            var7 = var8.startsWith;
                            var4 = 'https:';
                            var4 = var7.bind(var8)(var4);
                            if(var4) { _fun0006_ip = 191; continue _fun0006 }
 166:
                            var8 = _closure4_slot0;
                            var7 = var8.startsWith;
                            var4 = 'http:';
                            var4 = var7.bind(var8)(var4);
                            if(!var4) { _fun0006_ip = 334; continue _fun0006 }
 191:
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var4 = 12;
                            var4 = var8[var4];
                            var7 = var7.bind(var1)(var4);
                            var4 = var7.getBrowserManagerSelectedBrowser;
                            var4 = var4.bind(var7)();
                            var7 = _closure4_slot1;
                            var8 = var4;
                            if(!(var9 != var7)) { _fun0006_ip = 236; continue _fun0006 }
 232:
                            var8 = _closure4_slot1;
 236:
                            var7 = _closure4_slot2;
                            if(!var7) { _fun0006_ip = 257; continue _fun0006 }
 243:
                            var9 = _closure1_slot6;
                            var9 = var9.IN_APP;
                            var7 = var8 === var9;
 257:
                            var5 = var8;
                            if(!var7) { _fun0006_ip = 334; continue _fun0006 }
 263:
                            var7 = _closure1_slot6;
                            var7 = var7.IN_APP;
                            if(!(var4 === var7)) { _fun0006_ip = 331; continue _fun0006 }
 277:
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var7 = 13;
                            var7 = var9[var7];
                            var8 = var8.bind(var1)(var7);
                            var7 = var8.isIOS;
                            var7 = var7.bind(var8)();
                            var8 = _closure1_slot6;
                            if(var7) { _fun0006_ip = 322; continue _fun0006 }
 314:
                            var7 = var8.CHROME;
                            _fun0006_ip = 328; continue _fun0006;
 322:
                            var7 = var8.SAFARI;
 328:
                            var4 = var7;
 331:
                            var5 = var4;
 334:
                            var4 = _closure1_slot6;
                            var4 = var4.IN_APP;
                            if(!(var4 !== var5)) { _fun0006_ip = 493; continue _fun0006 }
 351:
                            var4 = _closure1_slot6;
                            var4 = var4.CHROME;
                            if(!(var4 !== var5)) { _fun0006_ip = 426; continue _fun0006 }
 365:
                            var4 = _closure1_slot6;
                            var4 = var4.SAFARI;
                            var5 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var4 = 12;
                            var4 = var7[var4];
                            var8 = var5.bind(var1)(var4);
                            var7 = var8.browserManagerOpenUrl;
                            var5 = _closure4_slot0;
                            var4 = _closure1_slot6;
                            var4 = var4.SAFARI;
                            var4 = var7.bind(var8)(var5, var4);
                            _fun0006_ip = 627; continue _fun0006;
 426:
                            var5 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var4 = 12;
                            var4 = var7[var4];
                            var8 = var5.bind(var1)(var4);
                            var7 = var8.browserManagerOpenUrl;
                            var5 = _closure4_slot0;
                            var4 = _closure1_slot6;
                            var4 = var4.CHROME;
                            var7 = var7.bind(var8)(var5, var4);
                            var5 = var7.catch;
                            var4 = function() {
                                var7 = _closure1_slot0;
                                var8 = _closure1_slot2;
                                var1 = 10;
                                var2 = var8[var1];
                                var1 = undefined;
                                var4 = var7.bind(var1)(var2);
                                var3 = var4.presentFailedToast;
                                var2 = 11;
                                var5 = var8[var2];
                                var5 = var7.bind(var1)(var5);
                                var6 = var5.intl;
                                var5 = var6.string;
                                var2 = var8[var2];
                                var2 = var7.bind(var1)(var2);
                                var2 = var2.t;
                                var2 = var2.HryVr6;
                                var8 = var5.bind(var6)(var2);
                                var7 = _closure4_slot0;
                                var2 = global;
                                var2 = var2.HermesInternal;
                                var6 = var2.concat;
                                var5 = '';
                                var2 = ' ';
                                var2 = var6.bind(var5)(var8, var2, var7);
                                var2 = var3.bind(var4)(var2);
                                return var1;
                            };
                            var4 = var5.bind(var7)(var4);
                            _fun0006_ip = 627; continue _fun0006;
 493:
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var7 = 12;
                            var7 = var5[var7];
                            var9 = var4.bind(var1)(var7);
                            var8 = var9.browserManagerOpenUrl;
                            var7 = _closure4_slot0;
                            var6 = _closure1_slot6;
                            var6 = var6.IN_APP;
                            var7 = var8.bind(var9)(var7, var6);
                            var6 = var7.catch;
                            var3 = function() {
                                var7 = _closure1_slot0;
                                var8 = _closure1_slot2;
                                var1 = 10;
                                var2 = var8[var1];
                                var1 = undefined;
                                var4 = var7.bind(var1)(var2);
                                var3 = var4.presentFailedToast;
                                var2 = 11;
                                var5 = var8[var2];
                                var5 = var7.bind(var1)(var5);
                                var6 = var5.intl;
                                var5 = var6.string;
                                var2 = var8[var2];
                                var2 = var7.bind(var1)(var2);
                                var2 = var2.t;
                                var2 = var2.HryVr6;
                                var8 = var5.bind(var6)(var2);
                                var7 = _closure4_slot0;
                                var2 = global;
                                var2 = var2.HermesInternal;
                                var6 = var2.concat;
                                var5 = '';
                                var2 = ' ';
                                var2 = var6.bind(var5)(var8, var2, var7);
                                var2 = var3.bind(var4)(var2);
                                return var1;
                            };
                            var3 = var6.bind(var7)(var3);
                            var3 = 13;
                            var3 = var5[var3];
                            var4 = var4.bind(var1)(var3);
                            var3 = var4.isIOS;
                            var3 = var3.bind(var4)();
                            if(!var3) { _fun0006_ip = 594; continue _fun0006 }
 580:
                            var5 = _closure1_slot5;
                            var4 = var5.isOpen;
                            var3 = var4.bind(var5)();
 594:
                            if(!var3) { _fun0006_ip = 627; continue _fun0006 }
 597:
                            var3 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var2 = 14;
                            var2 = var4[var2];
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.hideActionSheet;
                            var2 = var2.bind(var3)();
 627:
                            return var1;
                        }
                    };
                    if(var6) { _fun0005_ip = 458; continue _fun0005 }
 92:
                    var10 = /^[a-zA-Z0-9+-.]+:/;
                    var9 = var10.test;
                    var6 = var8;
                    var6 = var9.bind(var10)(var6);
                    if(var6) { _fun0005_ip = 142; continue _fun0005 }
 122:
                    var9 = var8;
                    var6 = 'https://';
                    var6 = var6 + var9;
                    var8 = var6;
                    _closure4_slot0 = var6;
 142:
                    var10 = /^https?:/i;
                    var9 = var10.test;
                    var6 = var8;
                    var6 = var9.bind(var10)(var6);
                    if(!var6) { _fun0005_ip = 289; continue _fun0005 }
 172: // try_start_0
                    var9 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var6 = 15;
                    var10 = var11[var6];
                    var14 = var9.bind(var3)(var10);
                    var13 = var14.parse;
                    var10 = var8;
                    var10 = var13.bind(var14)(var10);
                    var13 = _closure1_slot10;
                    var12 = var10.pathname;
                    var12 = var13.bind(var3)(var12);
                    var10['pathname'] = var12;
                    var12 = var10.search;
                    var12 = var13.bind(var3)(var12);
                    var10['search'] = var12;
                    var12 = var10.hash;
                    var12 = var13.bind(var3)(var12);
                    var10['hash'] = var12;
                    var6 = var11[var6];
                    var9 = var9.bind(var3)(var6);
                    var6 = var9.format;
                    var6 = var6.bind(var9)(var10);
                    var8 = var6;
                    _closure4_slot0 = var6;
 289: // try_end0
                    var9 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var6 = 16;
                    var6 = var11[var6];
                    var10 = var9.bind(var3)(var6);
                    var6 = var8;
                    var6 = var10.bind(var3)(var6);
                    var10 = var6.payload;
                    var6 = 17;
                    var6 = var11[var6];
                    var9 = var9.bind(var3)(var6);
                    var6 = {};
                    var6['payload'] = var10;
                    var10 = true;
                    var6['safe'] = var10;
                    var6 = var9.bind(var3)(var6);
                    if(var6) { _fun0005_ip = 462; continue _fun0005 }
 360:
                    if(!var5) { _fun0005_ip = 462; continue _fun0005 }
 363:
                    var6 = var8;
                    var5 = function tryHandleUniversalLink(arg1) {
                        var2 = arg1;
                        var _closure5_slot0 = var2;
                        var2 = global;
                        var3 = var2.Promise;
                        var2 = var3.prototype;
                        var2 = Object.create(var2, {constructor: {value: var3}});
                        var4 = function(arg1) {
                            var1 = arg1;
                            var _closure6_slot0 = var1;
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 5;
                            var3 = var3[var1];
                            var1 = undefined;
                            var5 = var4.bind(var1)(var3);
                            var4 = var5.tryOpenUrlAsUniversalLink;
                            var3 = _closure5_slot0;
                            var5 = var4.bind(var5)(var3);
                            var4 = var5.then;
                            var3 = function() {
                                var3 = _closure1_slot7;
                                var2 = var3.info;
                                var1 = 'Universal link opened successfully.';
                                var1 = var2.bind(var3)(var1);
                                var3 = _closure6_slot0;
                                var1 = undefined;
                                var2 = true;
                                var2 = var3.bind(var1)(var2);
                                return var1;
                            };
                            var4 = var4.bind(var5)(var3);
                            var3 = var4.catch;
                            var2 = function() {
                                var3 = _closure1_slot7;
                                var2 = var3.info;
                                var1 = 'URL is not a handled universal link.';
                                var1 = var2.bind(var3)(var1);
                                var3 = _closure6_slot0;
                                var1 = undefined;
                                var2 = false;
                                var2 = var3.bind(var1)(var2);
                                return var1;
                            };
                            var2 = var3.bind(var4)(var2);
                            return var1;
                        };
                        var5 = var2;
                        var1 = new var5[var3](var4, var3);
                        var1 = var1 instanceof Object ? var1 : var2;
                        return var1;
                    };
                    var5 = var5.bind(var3)(var6);
                    SaveGenerator(address=380);
 378:
                    return var5;
 380:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                    if(var6) { _fun0005_ip = 450; continue _fun0005 }
 386:
                    if(var5) { _fun0005_ip = 462; continue _fun0005 }
 389:
                    var9 = var8;
                    var6 = function tryHandleCustomScheme(arg1) {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                            var5 = arg1;
                            var _closure5_slot0 = var5;
                            var4 = _closure1_slot8;
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var3 = 6;
                            var3 = var7[var3];
                            var10 = undefined;
                            var3 = var6.bind(var10)(var3);
                            var3 = var3.LINKING_SCHEMAS_VALUES;
                            var9 = var4.bind(var10)(var3);
                            var6 = var9.bind(var10)();
                            var3 = var6.done;
                            var4 = null;
                            var8 = 1;
                            var7 = var5;
                            var5 = var7;
                            if(var3) { _fun0007_ip = 152; continue _fun0007 }
 72:
                            var3 = var6.value;
                            var11 = var3.regex;
                            var12 = var3.protocol;
                            var3 = var11.exec;
                            var13 = var3.bind(var11)(var7);
                            var14 = var4 == var13;
                            var11 = var7;
                            var3 = undefined;
                            if(var14) { _fun0007_ip = 116; continue _fun0007 }
 112:
                            var3 = var13[var8];
 116:
                            if(!(var4 != var3)) { _fun0007_ip = 131; continue _fun0007 }
 120:
                            var3 = var12 + var3;
                            _closure5_slot0 = var3;
                            var11 = var3;
 131:
                            var12 = var9.bind(var10)();
                            var3 = var12.done;
                            var7 = var11;
                            var6 = var12;
                            var5 = var7;
                            if(!var3) { _fun0007_ip = 72; continue _fun0007 }
 152:
                            var3 = var5.indexOf;
                            var6 = '://';
                            var7 = var3.bind(var5)(var6);
                            var3 = -1;
                            var4 = null;
                            if(!(var3 !== var7)) { _fun0007_ip = 197; continue _fun0007 }
 181:
                            var3 = var5.split;
                            var6 = var3.bind(var5)(var6);
                            var3 = 0;
                            var4 = var6[var3];
 197:
                            var3 = 'http';
                            if(!(var3 !== var4)) { _fun0007_ip = 270; continue _fun0007 }
 205:
                            var3 = 'https';
                            if(!(var3 !== var4)) { _fun0007_ip = 270; continue _fun0007 }
 213:
                            var4 = _closure1_slot7;
                            var3 = var4.info;
                            var1 = 'tryHandleCustomScheme';
                            var1 = var3.bind(var4)(var1, var5);
                            var1 = global;
                            var4 = var1.Promise;
                            var1 = var4.prototype;
                            var3 = Object.create(var1, {constructor: {value: var4}});
                            var16 = function(arg1) {
                                var1 = arg1;
                                var _closure6_slot0 = var1;
                                var4 = _closure1_slot1;
                                var3 = _closure1_slot2;
                                var1 = 5;
                                var3 = var3[var1];
                                var1 = undefined;
                                var5 = var4.bind(var1)(var3);
                                var4 = var5.tryOpenScheme;
                                var3 = _closure5_slot0;
                                var5 = var4.bind(var5)(var3);
                                var4 = var5.then;
                                var3 = function() {
                                    var3 = _closure1_slot7;
                                    var2 = var3.info;
                                    var1 = 'Custom scheme opened successfully.';
                                    var1 = var2.bind(var3)(var1);
                                    var3 = _closure6_slot0;
                                    var1 = undefined;
                                    var2 = true;
                                    var2 = var3.bind(var1)(var2);
                                    return var1;
                                };
                                var4 = var4.bind(var5)(var3);
                                var3 = var4.catch;
                                var2 = function() {
                                    var3 = _closure1_slot7;
                                    var2 = var3.info;
                                    var1 = 'Custom scheme failed to open.';
                                    var1 = var2.bind(var3)(var1);
                                    var3 = _closure6_slot0;
                                    var1 = undefined;
                                    var2 = false;
                                    var2 = var3.bind(var1)(var2);
                                    return var1;
                                };
                                var2 = var3.bind(var4)(var2);
                                return var1;
                            };
                            var17 = var3;
                            var1 = new var17[var4](var16, var15);
                            var1 = var1 instanceof Object ? var1 : var3;
                            _fun0007_ip = 303; continue _fun0007;
 270:
                            var3 = global;
                            var4 = var3.Promise;
                            var3 = var4.prototype;
                            var3 = Object.create(var3, {constructor: {value: var4}});
                            var16 = function(arg1) {
                                var3 = _closure1_slot7;
                                var2 = var3.info;
                                var1 = 'URL is not a custom scheme.';
                                var1 = var2.bind(var3)(var1);
                                var3 = arg1;
                                var1 = undefined;
                                var2 = false;
                                var2 = var3.bind(var1)(var2);
                                return var1;
                            };
                            var17 = var3;
                            var2 = new var17[var4](var16, var15);
                            var1 = var2 instanceof Object ? var2 : var3;
 303:
                            return var1;
                        }
                    };
                    var6 = var6.bind(var3)(var9);
                    SaveGenerator(address=406);
 404:
                    return var6;
 406:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=8);
                    if(var9) { _fun0005_ip = 447; continue _fun0005 }
 412:
                    if(var6) { _fun0005_ip = 462; continue _fun0005 }
 415:
                    var7 = function tryHandleWhitelistedURL(arg1) {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                            var2 = arg1;
                            var _closure5_slot0 = var2;
                            var8 = function _loop(arg1) {
                                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                                    var1 = arg1;
                                    var _closure6_slot0 = var1;
                                    var4 = _closure5_slot1;
                                    var2 = var4.exec;
                                    var1 = _closure5_slot0;
                                    var4 = var2.bind(var4)(var1);
                                    var2 = null;
                                    var1 = 0;
                                    if(!(var2 !== var4)) { _fun0009_ip = 81; continue _fun0009 }
 39:
                                    var2 = {};
                                    var4 = global;
                                    var5 = var4.Promise;
                                    var4 = var5.prototype;
                                    var4 = Object.create(var4, {constructor: {value: var5}});
                                    var6 = function(arg1) {
                                        var2 = arg1;
                                        var _closure7_slot0 = var2;
                                        var4 = _closure1_slot4;
                                        var3 = var4.canOpenURL;
                                        var2 = _closure6_slot0;
                                        var4 = var3.bind(var4)(var2);
                                        var3 = var4.then;
                                        var2 = function(arg1) {
                                            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                                                var2 = arg1;
                                                if(var2) { _fun0010_ip = 48; continue _fun0010 }
 9:
                                                var4 = _closure1_slot7;
                                                var3 = var4.info;
                                                var2 = 'Whitelisted URL, but cannot be opened (app likely not installed).';
                                                var2 = var3.bind(var4)(var2);
                                                var4 = _closure7_slot0;
                                                var3 = undefined;
                                                var2 = false;
                                                var2 = var4.bind(var3)(var2);
                                                _fun0010_ip = 102; continue _fun0010;
 48:
                                                var2 = _closure1_slot1;
                                                var3 = _closure1_slot2;
                                                var1 = 7;
                                                var1 = var3[var1];
                                                var3 = undefined;
                                                var4 = var2.bind(var3)(var1);
                                                var2 = var4.performURLNavigation;
                                                var1 = _closure5_slot0;
                                                var1 = var2.bind(var4)(var1);
                                                var2 = _closure7_slot0;
                                                var1 = true;
                                                var1 = var2.bind(var3)(var1);
 102:
                                                var1 = undefined;
                                                return var1;
                                            }
                                        };
                                        var3 = var3.bind(var4)(var2);
                                        var2 = var3.catch;
                                        var1 = function(arg1) {
                                            var4 = _closure1_slot7;
                                            var3 = var4.info;
                                            var2 = {};
                                            var1 = arg1;
                                            var2['error'] = var1;
                                            var1 = 'Whitelisted URL encountered an error.';
                                            var1 = var3.bind(var4)(var1, var2);
                                            var3 = _closure7_slot0;
                                            var1 = undefined;
                                            var2 = false;
                                            var2 = var3.bind(var1)(var2);
                                            return var1;
                                        };
                                        var1 = var2.bind(var3)(var1);
                                        var1 = undefined;
                                        return var1;
                                    };
                                    var7 = var4;
                                    var3 = new var7[var5](var6, var5);
                                    var3 = var3 instanceof Object ? var3 : var4;
                                    var2['v'] = var3;
                                    var1 = var2;
 81:
                                    return var1;
                                }
                            };
                            var3 = _closure1_slot8;
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var2 = 8;
                            var2 = var5[var2];
                            var7 = undefined;
                            var2 = var4.bind(var7)(var2);
                            var2 = var2.LINKING_WHITELIST_VALUES;
                            var6 = var3.bind(var7)(var2);
                            var3 = var6.bind(var7)();
                            var2 = var3.done;
                            var5 = 0;
                            var4 = var3;
                            if(var2) { _fun0008_ip = 128; continue _fun0008 }
 71:
                            var2 = var4.value;
                            var3 = var2.regex;
                            var _closure5_slot1 = var3;
                            var2 = var2.protocol;
                            var2 = var8.bind(var7)(var2);
                            if(!(var5 !== var2)) { _fun0008_ip = 104; continue _fun0008 }
 101:
                            if(var2) { _fun0008_ip = 121; continue _fun0008 }
 104:
                            var9 = var6.bind(var7)();
                            var3 = var9.done;
                            var4 = var9;
                            if(var3) { _fun0008_ip = 128; continue _fun0008 }
 119:
                            _fun0008_ip = 71; continue _fun0008;
 121:
                            var2 = var2.v;
                            return var2;
 128:
                            var2 = global;
                            var3 = var2.Promise;
                            var2 = var3.prototype;
                            var2 = Object.create(var2, {constructor: {value: var3}});
                            var10 = function(arg1) {
                                var3 = _closure1_slot7;
                                var2 = var3.info;
                                var1 = 'URL is not whitelisted.';
                                var1 = var2.bind(var3)(var1);
                                var3 = arg1;
                                var1 = undefined;
                                var2 = false;
                                var2 = var3.bind(var1)(var2);
                                return var1;
                            };
                            var11 = var2;
                            var1 = new var11[var3](var10, var9);
                            var1 = var1 instanceof Object ? var1 : var2;
                            return var1;
                        }
                    };
                    var7 = var7.bind(var3)(var8);
                    SaveGenerator(address=429);
 427:
                    return var7;
 429:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=7);
                    if(var8) { _fun0005_ip = 444; continue _fun0005 }
 435:
                    if(var7) { _fun0005_ip = 462; continue _fun0005 }
 438:
                    var8 = var4.bind(var3)();
                    _fun0005_ip = 462; continue _fun0005;
 444:
                    return var7;
 447:
                    return var6;
 450:
                    return var5;
 453: // catch_target0
                    CatchBlockStart(arg_register=4);
                    return var3;
 458:
                    var4 = var4.bind(var3)();
 462:
                    return var3;
 465:
                    return var2;
 468:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot11 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot11 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Linking;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.WebBrowserType;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var7.bind(var1)(var4);
    var4 = var8.prototype;
    var7 = Object.create(var4, {constructor: {value: var8}});
    var12 = 'handleURL';
    var13 = var7;
    var4 = new var13[var8](var12, var11);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot7 = var4;
    var4 = 18;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/links/native/handleURL.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function handleURL(arg1, arg2) {
        var1 = undefined;
        var4 = _closure1_slot11;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();