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
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 2:
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3.@@iterator;
case 4:
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
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
            if(!var7) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var7 = var3.constructor;
case 14:
            var10 = var9;
            if(!var7) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var7 = var3.constructor;
            var10 = var7.name;
case 16:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 20:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 23; continue _fun0001 }
case 21:
            var9 = _closure1_slot9;
            var7 = var9.bind(var8)(var3, var8);
case 23:
            _fun0001_ip = 24; continue _fun0001;
case 18:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 24:
            var6 = var7;
            _fun0001_ip = 10; continue _fun0001;
case 12:
            var7 = _closure1_slot9;
            var6 = var7.bind(var8)(var3, var8);
case 10:
            var4 = var6;
            if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 25:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 8:
            if(!var4) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            _closure2_slot0 = var4;
case 26:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 28; continue _fun0002 }
case 29:
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
                    _fun0002_ip = 30; continue _fun0002;
case 28:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 30:
                    return var1;
                }
            };
            return var1;
case 6:
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
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var2 = var4.length;
            var1 = var3 > var2;
case 31:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var2 = var4.length;
case 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 35; continue _fun0003 }
case 4:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 4; continue _fun0003 }
case 35:
            return var1;
        }
    };
    var _closure1_slot9 = var1;
    var1 = function sanitizeURLPart(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var5 = arg1;
            var2 = null;
            var1 = var5;
            if(!(var2 != var1)) { _fun0004_ip = 36; continue _fun0004 }
case 37:
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
case 36:
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
case 0:
                    StartGenerator();
                    var3 = arg1;
                    var2 = arguments[2];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                    if(var4) { _fun0005_ip = 38; continue _fun0005 }
case 39:
                    var8 = var3;
                    var _closure4_slot0 = var3;
                    var3 = arg2;
                    var _closure4_slot1 = var3;
                    var3 = undefined;
                    if(!(var2 === var3)) { _fun0005_ip = 40; continue _fun0005 }
case 41:
                    var2 = {};
case 40:
                    var5 = var2.allowExternal;
                    if(!(var5 === var3)) { _fun0005_ip = 42; continue _fun0005 }
case 43:
                    var5 = true;
case 42:
                    var6 = var2.forceExternalBrowser;
                    if(!(var6 === var3)) { _fun0005_ip = 44; continue _fun0005 }
case 45:
                    var6 = false;
case 44:
                    var _closure4_slot2 = var6;
                    SaveGenerator(address=72);
case 35:
                    return var3;
case 46:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0005_ip = 47; continue _fun0005 }
case 48:
                    var4 = function openInBrowser() {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
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
                            if(!(var9 == var4)) { _fun0006_ip = 49; continue _fun0006 }
case 50:
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
                            _fun0006_ip = 51; continue _fun0006;
case 49:
                            var4 = _closure1_slot6;
                            var5 = var4.SAFARI;
                            var8 = _closure4_slot0;
                            var7 = var8.startsWith;
                            var4 = 'https:';
                            var4 = var7.bind(var8)(var4);
                            if(var4) { _fun0006_ip = 52; continue _fun0006 }
case 53:
                            var8 = _closure4_slot0;
                            var7 = var8.startsWith;
                            var4 = 'http:';
                            var4 = var7.bind(var8)(var4);
                            if(!var4) { _fun0006_ip = 54; continue _fun0006 }
case 52:
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var4 = 12;
                            var4 = var8[var4];
                            var7 = var7.bind(var1)(var4);
                            var4 = var7.getBrowserManagerSelectedBrowser;
                            var4 = var4.bind(var7)();
                            var7 = _closure4_slot1;
                            var8 = var4;
                            if(!(var9 != var7)) { _fun0006_ip = 55; continue _fun0006 }
case 56:
                            var8 = _closure4_slot1;
case 55:
                            var7 = _closure4_slot2;
                            if(!var7) { _fun0006_ip = 57; continue _fun0006 }
case 58:
                            var9 = _closure1_slot6;
                            var9 = var9.IN_APP;
                            var7 = var8 === var9;
case 57:
                            var5 = var8;
                            if(!var7) { _fun0006_ip = 54; continue _fun0006 }
case 59:
                            var7 = _closure1_slot6;
                            var7 = var7.IN_APP;
                            if(!(var4 === var7)) { _fun0006_ip = 60; continue _fun0006 }
case 61:
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var7 = 13;
                            var7 = var9[var7];
                            var8 = var8.bind(var1)(var7);
                            var7 = var8.isIOS;
                            var7 = var7.bind(var8)();
                            var8 = _closure1_slot6;
                            if(var7) { _fun0006_ip = 62; continue _fun0006 }
case 63:
                            var7 = var8.CHROME;
                            _fun0006_ip = 64; continue _fun0006;
case 62:
                            var7 = var8.SAFARI;
case 64:
                            var4 = var7;
case 60:
                            var5 = var4;
case 54:
                            var4 = _closure1_slot6;
                            var4 = var4.IN_APP;
                            if(!(var4 !== var5)) { _fun0006_ip = 65; continue _fun0006 }
case 66:
                            var4 = _closure1_slot6;
                            var4 = var4.CHROME;
                            if(!(var4 !== var5)) { _fun0006_ip = 67; continue _fun0006 }
case 68:
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
                            _fun0006_ip = 51; continue _fun0006;
case 67:
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
                            _fun0006_ip = 51; continue _fun0006;
case 65:
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
                            if(!var3) { _fun0006_ip = 69; continue _fun0006 }
case 70:
                            var5 = _closure1_slot5;
                            var4 = var5.isOpen;
                            var3 = var4.bind(var5)();
case 69:
                            if(!var3) { _fun0006_ip = 51; continue _fun0006 }
case 71:
                            var3 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var2 = 14;
                            var2 = var4[var2];
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.hideActionSheet;
                            var2 = var2.bind(var3)();
case 51:
                            return var1;
                        }
                    };
                    if(var6) { _fun0005_ip = 72; continue _fun0005 }
case 73:
                    var10 = /^[a-zA-Z0-9+-.]+:/;
                    var9 = var10.test;
                    var6 = var8;
                    var6 = var9.bind(var10)(var6);
                    if(var6) { _fun0005_ip = 74; continue _fun0005 }
case 75:
                    var9 = var8;
                    var6 = 'https://';
                    var6 = var6 + var9;
                    var8 = var6;
                    _closure4_slot0 = var6;
case 74:
                    var10 = /^https?:/i;
                    var9 = var10.test;
                    var6 = var8;
                    var6 = var9.bind(var10)(var6);
                    if(!var6) { _fun0005_ip = 25; continue _fun0005 }
case 76: // try_start_0
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
case 25: // try_end0
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
                    if(var6) { _fun0005_ip = 77; continue _fun0005 }
case 78:
                    if(!var5) { _fun0005_ip = 77; continue _fun0005 }
case 79:
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
case 80:
                    return var5;
case 81:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                    if(var6) { _fun0005_ip = 82; continue _fun0005 }
case 83:
                    if(var5) { _fun0005_ip = 77; continue _fun0005 }
case 84:
                    var9 = var8;
                    var6 = function tryHandleCustomScheme(arg1) {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
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
                            if(var3) { _fun0007_ip = 85; continue _fun0007 }
case 46:
                            var3 = var6.value;
                            var11 = var3.regex;
                            var12 = var3.protocol;
                            var3 = var11.exec;
                            var13 = var3.bind(var11)(var7);
                            var14 = var4 == var13;
                            var11 = var7;
                            var3 = undefined;
                            if(var14) { _fun0007_ip = 86; continue _fun0007 }
case 87:
                            var3 = var13[var8];
case 86:
                            if(!(var4 != var3)) { _fun0007_ip = 88; continue _fun0007 }
case 89:
                            var3 = var12 + var3;
                            _closure5_slot0 = var3;
                            var11 = var3;
case 88:
                            var12 = var9.bind(var10)();
                            var3 = var12.done;
                            var7 = var11;
                            var6 = var12;
                            var5 = var7;
                            if(!var3) { _fun0007_ip = 46; continue _fun0007 }
case 85:
                            var3 = var5.indexOf;
                            var6 = '://';
                            var7 = var3.bind(var5)(var6);
                            var3 = -1;
                            var4 = null;
                            if(!(var3 !== var7)) { _fun0007_ip = 90; continue _fun0007 }
case 91:
                            var3 = var5.split;
                            var6 = var3.bind(var5)(var6);
                            var3 = 0;
                            var4 = var6[var3];
case 90:
                            var3 = 'http';
                            if(!(var3 !== var4)) { _fun0007_ip = 12; continue _fun0007 }
case 22:
                            var3 = 'https';
                            if(!(var3 !== var4)) { _fun0007_ip = 12; continue _fun0007 }
case 92:
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
                            _fun0007_ip = 93; continue _fun0007;
case 12:
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
case 93:
                            return var1;
                        }
                    };
                    var6 = var6.bind(var3)(var9);
                    SaveGenerator(address=406);
case 94:
                    return var6;
case 95:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=8);
                    if(var9) { _fun0005_ip = 96; continue _fun0005 }
case 97:
                    if(var6) { _fun0005_ip = 77; continue _fun0005 }
case 98:
                    var7 = function tryHandleWhitelistedURL(arg1) {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                            var2 = arg1;
                            var _closure5_slot0 = var2;
                            var8 = function _loop(arg1) {
                                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                                    var1 = arg1;
                                    var _closure6_slot0 = var1;
                                    var4 = _closure5_slot1;
                                    var2 = var4.exec;
                                    var1 = _closure5_slot0;
                                    var4 = var2.bind(var4)(var1);
                                    var2 = null;
                                    var1 = 0;
                                    if(!(var2 !== var4)) { _fun0009_ip = 48; continue _fun0009 }
case 99:
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
case 0:
                                                var2 = arg1;
                                                if(var2) { _fun0010_ip = 100; continue _fun0010 }
case 101:
                                                var4 = _closure1_slot7;
                                                var3 = var4.info;
                                                var2 = 'Whitelisted URL, but cannot be opened (app likely not installed).';
                                                var2 = var3.bind(var4)(var2);
                                                var4 = _closure7_slot0;
                                                var3 = undefined;
                                                var2 = false;
                                                var2 = var4.bind(var3)(var2);
                                                _fun0010_ip = 102; continue _fun0010;
case 100:
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
case 102:
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
case 48:
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
                            if(var2) { _fun0008_ip = 103; continue _fun0008 }
case 104:
                            var2 = var4.value;
                            var3 = var2.regex;
                            var _closure5_slot1 = var3;
                            var2 = var2.protocol;
                            var2 = var8.bind(var7)(var2);
                            if(!(var5 !== var2)) { _fun0008_ip = 105; continue _fun0008 }
case 106:
                            if(var2) { _fun0008_ip = 107; continue _fun0008 }
case 105:
                            var9 = var6.bind(var7)();
                            var3 = var9.done;
                            var4 = var9;
                            if(var3) { _fun0008_ip = 103; continue _fun0008 }
case 108:
                            _fun0008_ip = 104; continue _fun0008;
case 107:
                            var2 = var2.v;
                            return var2;
case 103:
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
case 109:
                    return var7;
case 110:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=7);
                    if(var8) { _fun0005_ip = 111; continue _fun0005 }
case 112:
                    if(var7) { _fun0005_ip = 77; continue _fun0005 }
case 113:
                    var8 = var4.bind(var3)();
                    _fun0005_ip = 77; continue _fun0005;
case 111:
                    return var7;
case 96:
                    return var6;
case 82:
                    return var5;
case 114: // catch_target0
                    CatchBlockStart(arg_register=4);
                    return var3;
case 72:
                    var4 = var4.bind(var3)();
case 77:
                    return var3;
case 47:
                    return var2;
case 38:
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