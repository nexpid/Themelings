// app/modules/main_tabs_v2/native/NavigationHistoryStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var9;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
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
 72: // try_end0
            _fun0001_ip = 76; continue _fun0001;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot11 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var1 = function cleanDuplicatesAndAppend(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var4 = arg1;
            var _closure2_slot0 = var4;
            var5 = _closure1_slot9;
            var3 = var5.has;
            var3 = var3.bind(var5)(var4);
            if(!var3) { _fun0002_ip = 54; continue _fun0002 }
 29:
            var5 = _closure1_slot8;
            var3 = var5.filter;
            var2 = function(arg1) {
                var2 = _closure2_slot0;
                var1 = arg1;
                var1 = var1 !== var2;
                return var1;
            };
            var2 = var3.bind(var5)(var2);
            _closure1_slot8 = var2;
 54:
            var3 = _closure1_slot9;
            var2 = var3.add;
            var2 = var2.bind(var3)(var4);
            var3 = _closure1_slot8;
            var2 = var3.push;
            var2 = var2.bind(var3)(var4);
            var2 = _closure1_slot8;
            var3 = var2.length;
            var2 = 100;
            if(!(var3 > var2)) { _fun0002_ip = 112; continue _fun0002 }
 98:
            var3 = _closure1_slot8;
            var2 = var3.shift;
            var2 = var2.bind(var3)();
 112:
            var2 = _closure1_slot10;
            var1 = var2.emitChange;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var6 = global;
    var10 = var6.Object;
    var5 = var10.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var10)(var3, var1, var4);
    var1 = 0;
    var4 = var9[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var9[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var9[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var9[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var9[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var12 = var6.RegExp;
    var4 = var6.HermesInternal;
    var14 = var4.concat;
    var19 = '^(?:';
    var5 = 'channel-';
    var17 = '|';
    var4 = 'guild-';
    var15 = ')';
    var18 = var5;
    var16 = var4;
    var18 = var19[var14](var18, var17, var16, var15, var14);
    var11 = var12.prototype;
    var11 = Object.create(var11, {constructor: {value: var12}});
    var19 = var11;
    var10 = new var19[var12](var18, var17);
    var10 = var10 instanceof Object ? var10 : var11;
    var _closure1_slot7 = var10;
    var10 = new Array(0);
    var _closure1_slot8 = var10;
    var6 = var6.Set;
    var10 = var6.prototype;
    var10 = Object.create(var10, {constructor: {value: var6}});
    var19 = var10;
    var6 = new var19[var6](var18);
    var6 = var6 instanceof Object ? var6 : var10;
    var _closure1_slot9 = var6;
    var6 = 5;
    var6 = var9[var6];
    var6 = var7.bind(var1)(var6);
    var10 = var6.PersistedStore;
    var6 = function(arg1) {
        var4 = function NavigationHistoryStore() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot2;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot5;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot4;
                var1 = _closure1_slot11;
                var1 = var1.bind(var3)();
                if(var1) { _fun0003_ip = 69; continue _fun0003 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0003_ip = 105; continue _fun0003;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
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
        var5 = _closure1_slot6;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot3;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var5 = arg1;
                var1 = global;
                var4 = var1.Set;
                var3 = null;
                var6 = var3 == var5;
                var1 = undefined;
                var2 = undefined;
                if(var6) { _fun0004_ip = 30; continue _fun0004 }
 24:
                var2 = var5.history;
 30:
                if(!(var3 == var2)) { _fun0004_ip = 38; continue _fun0004 }
 34:
                var2 = new Array(0);
 38:
                var3 = var4.prototype;
                var3 = Object.create(var3, {constructor: {value: var4}});
                var10 = var3;
                var9 = var2;
                var2 = new var10[var4](var9, var8);
                var5 = var2 instanceof Object ? var2 : var3;
                _closure1_slot9 = var5;
                var2 = new Array(0);
                var7 = 0;
                var9 = var2;
                var8 = var5;
                var4 = arraySpread(var9, var8, var7);
                _closure1_slot8 = var2;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'getState';
        var5['key'] = var7;
        var7 = function value() {
            var1 = {};
            var2 = _closure1_slot8;
            var1['history'] = var2;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getLastHistory';
        var5['key'] = var7;
        var6 = function value() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var3 = arguments[0];
                var1 = undefined;
                if(!(var3 === var1)) { _fun0005_ip = 12; continue _fun0005 }
 9:
                var3 = 1;
 12:
                var2 = _closure1_slot8;
                var1 = var2.length;
                var1 = var1 - var3;
                var1 = var2[var1];
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var11 = var6.bind(var1)(var10);
    var6 = 'NavigationHistoryStore';
    var11['displayName'] = var6;
    var11['persistKey'] = var6;
    var6 = 6;
    var6 = var9[var6];
    var18 = var7.bind(var1)(var6);
    var6 = {};
    var7 = function LOGOUT() {
        var2 = new Array(0);
        _closure1_slot8 = var2;
        var2 = _closure1_slot9;
        var1 = var2.clear;
        var1 = var1.bind(var2)();
        var1 = undefined;
        return var1;
    };
    var6['LOGOUT'] = var7;
    var7 = var11.prototype;
    var7 = Object.create(var7, {constructor: {value: var11}});
    var19 = var7;
    var17 = var6;
    var6 = new var19[var11](var18, var17, var16);
    var6 = var6 instanceof Object ? var6 : var7;
    var _closure1_slot10 = var6;
    var7 = 9;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/main_tabs_v2/native/NavigationHistoryStore.tsx';
    var7 = var8.bind(var9)(var7);
    var3['default'] = var6;
    var3['CHANNEL_PREFIX'] = var5;
    var3['GUILD_PREFIX'] = var4;
    var4 = function getIdFromHistoryItem(arg1) {
        var4 = arg1;
        var3 = var4.replace;
        var2 = _closure1_slot7;
        var1 = '';
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['getIdFromHistoryItem'] = var4;
    var4 = function handleHistoryStoreNavigationChange() {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 7;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.getRootNavigationRef;
            var5 = var3.bind(var4)();
            var3 = null;
            if(!(var3 != var5)) { _fun0006_ip = 278; continue _fun0006 }
 44:
            var4 = var5.getCurrentRoute;
            var6 = var4.bind(var5)();
            if(!(var3 != var6)) { _fun0006_ip = 278; continue _fun0006 }
 61:
            var4 = var6.params;
            if(!(var3 != var4)) { _fun0006_ip = 278; continue _fun0006 }
 74:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var7 = 8;
            var4 = var4[var7];
            var5 = var5.bind(var1)(var4);
            var4 = var5.coerceChannelRoute;
            var4 = var4.bind(var5)(var6);
            if(!(var3 != var4)) { _fun0006_ip = 160; continue _fun0006 }
 109:
            var4 = var4.params;
            var10 = var4.channelId;
            var5 = _closure1_slot12;
            var4 = global;
            var4 = var4.HermesInternal;
            var9 = var4.concat;
            var8 = '';
            var4 = 'channel-';
            var4 = var9.bind(var8)(var4, var10);
            var4 = var5.bind(var1)(var4);
            _fun0006_ip = 278; continue _fun0006;
 160:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var4 = var4[var7];
            var5 = var5.bind(var1)(var4);
            var4 = var5.coerceGuildsRoute;
            var4 = var4.bind(var5)(var6);
            if(!(var3 != var4)) { _fun0006_ip = 278; continue _fun0006 }
 192:
            var5 = var4.params;
            var7 = var3 == var5;
            var6 = undefined;
            if(var7) { _fun0006_ip = 212; continue _fun0006 }
 207:
            var6 = var5.channelId;
 212:
            if(!(var3 == var6)) { _fun0006_ip = 280; continue _fun0006 }
 216:
            var4 = var4.params;
            var5 = var3 == var4;
            var8 = undefined;
            if(var5) { _fun0006_ip = 236; continue _fun0006 }
 231:
            var8 = var4.guildId;
 236:
            if(!(var3 != var8)) { _fun0006_ip = 278; continue _fun0006 }
 240:
            var4 = _closure1_slot12;
            var3 = global;
            var3 = var3.HermesInternal;
            var7 = var3.concat;
            var5 = '';
            var3 = 'guild-';
            var3 = var7.bind(var5)(var3, var8);
            var3 = var4.bind(var1)(var3);
 278:
            return var1;
 280:
            var3 = _closure1_slot12;
            var2 = global;
            var2 = var2.HermesInternal;
            var5 = var2.concat;
            var4 = '';
            var2 = 'channel-';
            var2 = var5.bind(var4)(var2, var6);
            var2 = var3.bind(var1)(var2);
            return var1;
        }
    };
    var3['handleHistoryStoreNavigationChange'] = var4;
    var2 = function getNavigationHistory() {
        var1 = _closure1_slot8;
        return var1;
    };
    var3['getNavigationHistory'] = var2;
    return var1;
})();