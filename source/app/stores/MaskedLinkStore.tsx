// app/stores/MaskedLinkStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
        var5 = require;
        var7 = metroImportDefault;
        var3 = exports;
        var6 = dependencyMap;
        var _closure1_slot0 = var5;
        var _closure1_slot1 = var7;
        var _closure1_slot2 = var6;
        var1 = function _isNativeReflectConstruct() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
 2: // try_start_0
                var2 = global;
                var3 = var2.Boolean;
                var3 = var3.prototype;
                var4 = var3.valueOf;
                var3 = var4.call;
                var8 = var2.Reflect;
                var7 = var8.construct;
                var6 = var2.Boolean;
                var5 = new Array(0);
                var2 = function() {
                    var1 = undefined;
                    return var1;
                };
                var2 = var7.bind(var8)(var6, var5, var2);
                var2 = var3.bind(var4)(var2);
                var2 = !var2;
                var _closure2_slot0 = var2;
 70: // try_end0
                _fun0002_ip = 74; continue _fun0002;
 72: // catch_target0
                CatchBlockStart(arg_register=1);
 74:
                var2 = function _isNativeReflectConstruct() {
                    var1 = _closure2_slot0;
                    var1 = !var1;
                    var1 = !var1;
                    return var1;
                };
                _closure1_slot12 = var2;
                var1 = undefined;
                var1 = var2.bind(var1)();
                return var1;
            }
        };
        var _closure1_slot12 = var1;
        var1 = function _isTrustedDomain(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 6;
                var1 = var4[var1];
                var6 = undefined;
                var4 = var3.bind(var6)(var1);
                var3 = var4.getHostname;
                var1 = arg1;
                var4 = var3.bind(var4)(var1);
                var1 = global;
                var3 = var1.window;
                var3 = var3.GLOBAL_ENV;
                var3 = var3.CDN_HOST;
                if(!(var3 !== var4)) { _fun0003_ip = 226; continue _fun0003 }
 66:
                var3 = var1.window;
                var3 = var3.GLOBAL_ENV;
                var3 = var3.INVITE_HOST;
                if(!(var3 !== var4)) { _fun0003_ip = 226; continue _fun0003 }
 91:
                var3 = var1.window;
                var3 = var3.GLOBAL_ENV;
                var3 = var3.GIFT_CODE_HOST;
                if(!(var3 !== var4)) { _fun0003_ip = 226; continue _fun0003 }
 113:
                var3 = var1.window;
                var3 = var3.GLOBAL_ENV;
                var3 = var3.GUILD_TEMPLATE_HOST;
                if(!(var3 !== var4)) { _fun0003_ip = 226; continue _fun0003 }
 135:
                var3 = _closure1_slot11;
                if(!(var3 !== var4)) { _fun0003_ip = 226; continue _fun0003 }
 143:
                var1 = var1.location;
                var1 = var1.hostname;
                if(!(var1 !== var4)) { _fun0003_ip = 226; continue _fun0003 }
 159:
                var3 = _closure1_slot8;
                var1 = var3.includes;
                var1 = var1.bind(var3)(var4);
                if(var1) { _fun0003_ip = 207; continue _fun0003 }
 176:
                var5 = _closure1_slot1;
                var7 = _closure1_slot2;
                var3 = 7;
                var3 = var7[var3];
                var5 = var5.bind(var6)(var3);
                var3 = var5.isDiscordHostname;
                var1 = var3.bind(var5)(var4);
 207:
                if(var1) { _fun0003_ip = 224; continue _fun0003 }
 210:
                var3 = _closure1_slot9;
                var2 = var3.has;
                var1 = var2.bind(var3)(var4);
 224:
                return var1;
 226:
                var1 = true;
                return var1;
            }
        };
        var _closure1_slot13 = var1;
        var1 = function _isTrustedProtocol(arg1) {
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 6;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.getProtocol;
            var2 = arg1;
            var3 = var3.bind(var4)(var2);
            var2 = _closure1_slot10;
            var1 = var2.has;
            var1 = var1.bind(var2)(var3);
            return var1;
        };
        var _closure1_slot14 = var1;
        var2 = global;
        var10 = var2.Object;
        var9 = var10.defineProperty;
        var8 = {};
        var1 = true;
        var8['value'] = var1;
        var1 = '__esModule';
        var1 = var9.bind(var10)(var3, var1, var8);
        var1 = 0;
        var8 = var6[var1];
        var1 = undefined;
        var8 = var7.bind(var1)(var8);
        var _closure1_slot3 = var8;
        var8 = 1;
        var8 = var6[var8];
        var8 = var7.bind(var1)(var8);
        var _closure1_slot4 = var8;
        var8 = 2;
        var8 = var6[var8];
        var8 = var7.bind(var1)(var8);
        var _closure1_slot5 = var8;
        var8 = 3;
        var8 = var6[var8];
        var8 = var7.bind(var1)(var8);
        var _closure1_slot6 = var8;
        var8 = 4;
        var8 = var6[var8];
        var8 = var7.bind(var1)(var8);
        var _closure1_slot7 = var8;
        var8 = 5;
        var8 = var6[var8];
        var8 = var5.bind(var1)(var8);
        var8 = var8.SPOTIFY_HOSTNAMES;
        var _closure1_slot8 = var8;
        var8 = var2.Set;
        var9 = var8.prototype;
        var9 = Object.create(var9, {constructor: {value: var8}});
        var15 = var9;
        var8 = new var15[var8](var14);
        var8 = var8 instanceof Object ? var8 : var9;
        var _closure1_slot9 = var8;
        var8 = var2.Set;
        var9 = var8.prototype;
        var9 = Object.create(var9, {constructor: {value: var8}});
        var15 = var9;
        var8 = new var15[var8](var14);
        var8 = var8 instanceof Object ? var8 : var9;
        var _closure1_slot10 = var8;
        var2 = var2.window;
        var2 = var2.GLOBAL_ENV;
        var11 = var2.MEDIA_PROXY_ENDPOINT;
        var2 = null;
        var8 = var2 == var11;
        var2 = undefined;
        if(var8) { _fun0001_ip = 298; continue _fun0001 }
 277:
        var10 = var11.replace;
        var9 = '//';
        var8 = '';
        var2 = var10.bind(var11)(var9, var8);
 298:
        var _closure1_slot11 = var2;
        var2 = 9;
        var2 = var6[var2];
        var2 = var7.bind(var1)(var2);
        var8 = var2.Store;
        var2 = function(arg1) {
            var4 = function MaskedLinkStore() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var4 = this;
                    var3 = undefined;
                    var5 = undefined;
                    var1 = _closure1_slot3;
                    var2 = _closure2_slot0;
                    var1 = var1.bind(var3)(var4, var2);
                    var1 = _closure1_slot6;
                    var9 = var1.bind(var3)(var2);
                    var2 = _closure1_slot5;
                    var1 = _closure1_slot12;
                    var1 = var1.bind(var3)();
                    if(var1) { _fun0004_ip = 69; continue _fun0004 }
 51:
                    var7 = var9.apply;
                    var5 = arguments;
                    var1 = var5;
                    var1 = var7.bind(var9)(var4, var1);
                    _fun0004_ip = 105; continue _fun0004;
 69:
                    var7 = global;
                    var8 = var7.Reflect;
                    var7 = var8.construct;
                    var6 = _closure1_slot6;
                    var6 = var6.bind(var3)(var4);
                    var6 = var6.constructor;
                    var5 = arguments;
                    var1 = var7.bind(var8)(var9, var5, var6);
 105:
                    var1 = var2.bind(var3)(var4, var1);
                    return var1;
                }
            };
            var _closure2_slot0 = var4;
            var5 = _closure1_slot7;
            var3 = undefined;
            var2 = arg1;
            var2 = var5.bind(var3)(var4, var2);
            var2 = _closure1_slot4;
            var5 = {};
            var1 = 'initialize';
            var5['key'] = var1;
            var1 = function value() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 8;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var4.bind(var1)(var2);
                    var5 = var2.Storage;
                    var4 = var5.get;
                    var2 = 'MaskedLinkStore';
                    var5 = var4.bind(var5)(var2);
                    var6 = null;
                    if(!(var6 == var5)) { _fun0005_ip = 55; continue _fun0005 }
 53:
                    var5 = {};
 55:
                    var2 = global;
                    var7 = var2.Array;
                    var4 = var7.isArray;
                    var4 = var4.bind(var7)(var5);
                    var8 = var5;
                    if(var4) { _fun0005_ip = 212; continue _fun0005 }
 82:
                    var11 = var8.trustedDomains;
                    var10 = var8.trustedProtocols;
                    var7 = var2.Set;
                    var5 = var6 != var11;
                    var4 = null;
                    if(!var5) { _fun0005_ip = 125; continue _fun0005 }
 109:
                    var9 = var2.Array;
                    var5 = var9.from;
                    var4 = var5.bind(var9)(var11);
 125:
                    var5 = var7.prototype;
                    var5 = Object.create(var5, {constructor: {value: var7}});
                    var13 = var5;
                    var12 = var4;
                    var4 = new var13[var7](var12, var11);
                    var4 = var4 instanceof Object ? var4 : var5;
                    _closure1_slot9 = var4;
                    var7 = var2.Set;
                    var5 = var6 != var10;
                    var4 = null;
                    if(!var5) { _fun0005_ip = 183; continue _fun0005 }
 167:
                    var9 = var2.Array;
                    var5 = var9.from;
                    var4 = var5.bind(var9)(var10);
 183:
                    var5 = var7.prototype;
                    var5 = Object.create(var5, {constructor: {value: var7}});
                    var13 = var5;
                    var12 = var4;
                    var4 = new var13[var7](var12, var11);
                    var4 = var4 instanceof Object ? var4 : var5;
                    _closure1_slot10 = var4;
                    _fun0005_ip = 300; continue _fun0005;
 212:
                    var4 = var2.Set;
                    var5 = var6 != var8;
                    var6 = null;
                    if(!var5) { _fun0005_ip = 243; continue _fun0005 }
 227:
                    var7 = var2.Array;
                    var5 = var7.from;
                    var6 = var5.bind(var7)(var8);
 243:
                    var5 = var4.prototype;
                    var5 = Object.create(var5, {constructor: {value: var4}});
                    var13 = var5;
                    var12 = var6;
                    var4 = new var13[var4](var12, var11);
                    var4 = var4 instanceof Object ? var4 : var5;
                    _closure1_slot9 = var4;
                    var2 = var2.Set;
                    var4 = var2.prototype;
                    var4 = Object.create(var4, {constructor: {value: var2}});
                    var13 = var4;
                    var2 = new var13[var2](var12);
                    var2 = var2 instanceof Object ? var2 : var4;
                    _closure1_slot10 = var2;
 300:
                    return var1;
                }
            };
            var5['value'] = var1;
            var1 = new Array(3);
            var1[0] = var5;
            var5 = {};
            var7 = 'isTrustedDomain';
            var5['key'] = var7;
            var7 = function value(arg1) {
                var3 = _closure1_slot13;
                var2 = undefined;
                var1 = arg1;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var5['value'] = var7;
            var1[1] = var5;
            var5 = {};
            var7 = 'isTrustedProtocol';
            var5['key'] = var7;
            var6 = function value(arg1) {
                var3 = _closure1_slot14;
                var2 = undefined;
                var1 = arg1;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var5['value'] = var6;
            var1[2] = var5;
            var1 = var2.bind(var3)(var4, var1);
            return var1;
        };
        var8 = var2.bind(var1)(var8);
        var2 = 'MaskedLinkStore';
        var8['displayName'] = var2;
        var2 = 10;
        var2 = var6[var2];
        var14 = var7.bind(var1)(var2);
        var2 = {};
        var9 = function handleAddTrustedDomain(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var1 = arg1;
                var9 = var1.url;
                var3 = _closure1_slot13;
                var1 = undefined;
                var3 = var3.bind(var1)(var9);
                if(var3) { _fun0006_ip = 127; continue _fun0006 }
 25:
                var7 = _closure1_slot9;
                var6 = var7.add;
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 6;
                var3 = var5[var3];
                var8 = var4.bind(var1)(var3);
                var3 = var8.getHostname;
                var3 = var3.bind(var8)(var9);
                var3 = var6.bind(var7)(var3);
                var3 = 8;
                var3 = var5[var3];
                var3 = var4.bind(var1)(var3);
                var5 = var3.Storage;
                var4 = var5.set;
                var3 = {};
                var6 = _closure1_slot9;
                var3['trustedDomains'] = var6;
                var2 = _closure1_slot10;
                var3['trustedProtocols'] = var2;
                var2 = 'MaskedLinkStore';
                var2 = var4.bind(var5)(var2, var3);
                return var1;
 127:
                var1 = false;
                return var1;
            }
        };
        var2['MASKED_LINK_ADD_TRUSTED_DOMAIN'] = var9;
        var4 = function handleAddTrustedProtocol(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var1 = arg1;
                var9 = var1.url;
                var3 = _closure1_slot14;
                var1 = undefined;
                var3 = var3.bind(var1)(var9);
                if(var3) { _fun0007_ip = 127; continue _fun0007 }
 25:
                var7 = _closure1_slot10;
                var6 = var7.add;
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 6;
                var3 = var5[var3];
                var8 = var4.bind(var1)(var3);
                var3 = var8.getProtocol;
                var3 = var3.bind(var8)(var9);
                var3 = var6.bind(var7)(var3);
                var3 = 8;
                var3 = var5[var3];
                var3 = var4.bind(var1)(var3);
                var5 = var3.Storage;
                var4 = var5.set;
                var3 = {};
                var6 = _closure1_slot9;
                var3['trustedDomains'] = var6;
                var2 = _closure1_slot10;
                var3['trustedProtocols'] = var2;
                var2 = 'MaskedLinkStore';
                var2 = var4.bind(var5)(var2, var3);
                return var1;
 127:
                var1 = false;
                return var1;
            }
        };
        var2['MASKED_LINK_ADD_TRUSTED_PROTOCOL'] = var4;
        var4 = var8.prototype;
        var4 = Object.create(var4, {constructor: {value: var8}});
        var15 = var4;
        var13 = var2;
        var2 = new var15[var8](var14, var13, var12);
        var2 = var2 instanceof Object ? var2 : var4;
        var4 = 11;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'stores/MaskedLinkStore.tsx';
        var4 = var5.bind(var6)(var4);
        var3['default'] = var2;
        return var1;
    }
})();