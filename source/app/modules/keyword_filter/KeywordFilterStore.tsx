// app/modules/keyword_filter/KeywordFilterStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
case 2: // try_start_0
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
case 3: // try_end0
            _fun0001_ip = 4; continue _fun0001;
case 5: // catch_target0
            CatchBlockStart(arg_register=1);
case 4:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot10 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var1 = function initializeKeywordTrie() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 8;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.getKeywordFilterSetting;
            var3 = var3.bind(var4)();
            if(var3) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var4 = new Array(0);
            _fun0002_ip = 8; continue _fun0002;
case 6:
            var7 = _closure1_slot0;
            var8 = _closure1_slot1;
            var5 = 9;
            var3 = var8[var5];
            var3 = var7.bind(var1)(var3);
            var11 = var3.PROFANITY_KEYWORD_LIST;
            var3 = new Array(0);
            var10 = 0;
            var12 = var3;
            var10 = arraySpread(var12, var11, var10);
            var6 = var8[var5];
            var6 = var7.bind(var1)(var6);
            var11 = var6.SLURS_KEYWORD_LIST;
            var12 = var3;
            var10 = arraySpread(var12, var11, var10);
            var5 = var8[var5];
            var5 = var7.bind(var1)(var5);
            var11 = var5.SEXUAL_CONTENT_KEYWORD_LIST;
            var12 = var3;
            var5 = arraySpread(var12, var11, var10);
            var4 = var3;
case 8:
            var5 = _closure1_slot7;
            var3 = var5.getCurrentUser;
            var5 = var3.bind(var5)();
            var3 = null;
            if(!(var3 != var5)) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var3 = var5.isStaff;
            var3 = var3.bind(var5)();
            if(!var3) { _fun0002_ip = 9; continue _fun0002 }
case 11:
            var5 = _closure1_slot0;
            var6 = _closure1_slot1;
            var3 = 9;
            var3 = var6[var3];
            var3 = var5.bind(var1)(var3);
            var11 = var3.STAFF_ONLY_KEYWORDS;
            var5 = var4.push;
            var3 = new Array(0);
            var10 = 0;
            var12 = var3;
            var6 = arraySpread(var12, var11, var10);
            var12 = var5;
            var11 = var3;
            var10 = var4;
            var3 = apply(var12, var11, var10);
case 9:
            var5 = _closure1_slot0;
            var6 = _closure1_slot1;
            var3 = 10;
            var3 = var6[var3];
            var3 = var5.bind(var1)(var3);
            var3 = var3.Trie;
            var5 = var3.prototype;
            var5 = Object.create(var5, {constructor: {value: var3}});
            var13 = var5;
            var3 = new var13[var3](var12);
            var3 = var3 instanceof Object ? var3 : var5;
            _closure1_slot9 = var3;
            var2 = var3.addWords;
            var2 = var2.bind(var3)(var4);
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var1 = function handleConnectionOpen() {
        var2 = _closure1_slot11;
        var1 = undefined;
        var2 = var2.bind(var1)();
        return var1;
    };
    var _closure1_slot12 = var1;
    var1 = function handleOverlayInitialize() {
        var2 = _closure1_slot11;
        var1 = undefined;
        var2 = var2.bind(var1)();
        return var1;
    };
    var _closure1_slot13 = var1;
    var1 = function handleSettingsUpdate(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var2 = var1.local;
            var1 = var1.settings;
            if(!var2) { _fun0003_ip = 12; continue _fun0003 }
case 13:
            var3 = var1.type;
            var2 = _closure1_slot8;
            var2 = var2.PRELOADED_USER_SETTINGS;
            if(!(var3 === var2)) { _fun0003_ip = 12; continue _fun0003 }
case 14:
            var3 = _closure1_slot9;
            var2 = null;
            if(!(var2 != var3)) { _fun0003_ip = 15; continue _fun0003 }
case 16:
            var3 = _closure1_slot9;
            var2 = var3.clear;
            var2 = var2.bind(var3)();
case 15:
            var2 = _closure1_slot11;
            var1 = undefined;
            var2 = var2.bind(var1)();
            return var1;
case 12:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var9.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var7 = var6[var4];
    var7 = var9.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var7 = 3;
    var7 = var6[var7];
    var7 = var9.bind(var1)(var7);
    var _closure1_slot5 = var7;
    var7 = 4;
    var7 = var6[var7];
    var7 = var9.bind(var1)(var7);
    var _closure1_slot6 = var7;
    var7 = 5;
    var7 = var6[var7];
    var7 = var9.bind(var1)(var7);
    var8 = 6;
    var8 = var6[var8];
    var8 = var9.bind(var1)(var8);
    var _closure1_slot7 = var8;
    var8 = 7;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.UserSettingsTypes;
    var _closure1_slot8 = var8;
    var8 = null;
    var _closure1_slot9 = var8;
    var2 = function(arg1) {
        var4 = function KeywordFilterStore() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var5 = this;
                var1 = _closure1_slot2;
                var3 = _closure2_slot0;
                var4 = undefined;
                var1 = var1.bind(var4)(var5, var3);
                var1 = {};
                var7 = _closure1_slot12;
                var1['CONNECTION_OPEN'] = var7;
                var1['CONNECTION_OPEN_SUPPLEMENTAL'] = var7;
                var7 = function CACHE_LOADED() {
                    var2 = _closure3_slot0;
                    var1 = var2.loadCache;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var1['CACHE_LOADED'] = var7;
                var7 = _closure1_slot13;
                var1['OVERLAY_INITIALIZE'] = var7;
                var7 = _closure1_slot14;
                var1['USER_SETTINGS_PROTO_UPDATE'] = var7;
                var10 = new Array(1);
                var10[0] = var1;
                var1 = _closure1_slot5;
                var9 = var1.bind(var4)(var3);
                var3 = _closure1_slot4;
                var1 = _closure1_slot10;
                var1 = var1.bind(var4)();
                if(var1) { _fun0004_ip = 17; continue _fun0004 }
case 18:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0004_ip = 19; continue _fun0004;
case 17:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
case 19:
                var1 = var3.bind(var4)(var5, var1);
                var _closure3_slot0 = var1;
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot6;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot3;
        var5 = {};
        var1 = 'loadCache';
        var5['key'] = var1;
        var1 = function value() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var3 = this;
                var2 = var3.readSnapshot;
                var1 = _closure2_slot0;
                var1 = var1.LATEST_SNAPSHOT_VERSION;
                var1 = var2.bind(var3)(var1);
                var2 = null;
                if(!(var2 != var1)) { _fun0005_ip = 20; continue _fun0005 }
case 21:
                var3 = var1.keywordTrie;
                var3 = var2 != var3;
                var2 = null;
                if(!var3) { _fun0005_ip = 22; continue _fun0005 }
case 23:
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 10;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
                var4 = var3.Trie;
                var3 = var4.fromSnapshot;
                var1 = var1.keywordTrie;
                var2 = var3.bind(var4)(var1);
case 22:
                _closure1_slot9 = var2;
case 20:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(4);
        var1[0] = var5;
        var5 = {};
        var7 = 'takeSnapshot';
        var5['key'] = var7;
        var7 = function value() {
            var1 = {};
            var2 = _closure2_slot0;
            var2 = var2.LATEST_SNAPSHOT_VERSION;
            var1['version'] = var2;
            var2 = {};
            var3 = _closure1_slot9;
            var2['keywordTrie'] = var3;
            var1['data'] = var2;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getKeywordTrie';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot9;
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'initializeForKeywordTests';
        var5['key'] = var7;
        var6 = function value() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var4 = arguments[0];
                var1 = undefined;
                if(!(var4 === var1)) { _fun0006_ip = 24; continue _fun0006 }
case 25:
                var4 = new Array(0);
case 24:
                if(!(var4 === var1)) { _fun0006_ip = 26; continue _fun0006 }
case 27:
                var4 = new Array(0);
case 26:
                var5 = _closure1_slot9;
                var3 = null;
                if(!(var3 == var5)) { _fun0006_ip = 28; continue _fun0006 }
case 29:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var3 = 10;
                var3 = var6[var3];
                var3 = var5.bind(var1)(var3);
                var3 = var3.Trie;
                var5 = var3.prototype;
                var5 = Object.create(var5, {constructor: {value: var3}});
                var8 = var5;
                var3 = new var8[var3](var7);
                var3 = var3 instanceof Object ? var3 : var5;
                _closure1_slot9 = var3;
case 28:
                var3 = _closure1_slot9;
                var2 = var3.addWords;
                var2 = var2.bind(var3)(var4);
                return var1;
            }
        };
        var5['value'] = var6;
        var1[3] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var7);
    var7 = 'KeywordFilterStore';
    var2['displayName'] = var7;
    var2['LATEST_SNAPSHOT_VERSION'] = var4;
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var13 = var4;
    var2 = new var13[var2](var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/keyword_filter/KeywordFilterStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();