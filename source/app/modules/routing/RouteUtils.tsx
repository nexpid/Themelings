// app/modules/routing/RouteUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var8;
    var5 = function isPseudoGuildId(arg1) {
        var3 = _closure1_slot5;
        var2 = var3.includes;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot6 = var5;
    var1 = function paramPattern(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arguments[2];
            var5 = undefined;
            if(!(var1 === var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = {};
case 2:
            var1 = var1.optional;
            if(!(var1 === var5)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = false;
case 4:
            var4 = _closure1_slot0;
            var6 = _closure1_slot1;
            var2 = 2;
            var2 = var6[var2];
            var2 = var4.bind(var5)(var2);
            var3 = var2.UnescapedPathParam;
            var2 = 3;
            var2 = var6[var2];
            var5 = var4.bind(var5)(var2);
            var4 = var5.escapeRegExp;
            var2 = arg1;
            var8 = var4.bind(var5)(var2);
            var7 = '';
            if(!var1) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var7 = '?';
case 6:
            var1 = global;
            var1 = var1.HermesInternal;
            var6 = var1.concat;
            var14 = ':';
            var12 = '(';
            var11 = arg2;
            var10 = ')';
            var13 = var8;
            var9 = var7;
            var13 = var14[var6](var13, var12, var11, var10, var9, var8);
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var14 = var2;
            var1 = new var14[var3](var13, var12);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        }
    };
    var _closure1_slot7 = var1;
    var1 = global;
    var9 = var1.Object;
    var6 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var8[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var9 = var2.EMPTY_NUX_SERVER;
    var10 = var2.FAVORITES;
    var11 = var2.ME;
    var6 = var2.NOTIFICATIONS_INBOX;
    var2 = 1;
    var2 = var8[var2];
    var2 = var7.bind(var1)(var2);
    var12 = var2.isStaticChannelRoute;
    var _closure1_slot2 = var12;
    var2 = var2.StaticChannelRoutes;
    var _closure1_slot3 = var2;
    var2 = /^\d+$/;
    var _closure1_slot4 = var2;
    var2 = new Array(4);
    var2[0] = var11;
    var2[1] = var10;
    var2[2] = var9;
    var2[3] = var6;
    var _closure1_slot5 = var2;
    var2 = {};
    var6 = function guildId() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arguments[0];
            var5 = undefined;
            if(!(var1 === var5)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
            var1 = {};
case 2:
            var4 = var1.name;
            if(!(var4 === var5)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var4 = 'guildId';
case 8:
            var6 = var1.optional;
            if(!(var6 === var5)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var6 = false;
case 10:
            var3 = _closure1_slot7;
            var7 = _closure1_slot5;
            var2 = var7.map;
            var8 = _closure1_slot0;
            var9 = _closure1_slot1;
            var1 = 3;
            var1 = var9[var1];
            var1 = var8.bind(var5)(var1);
            var1 = var1.escapeRegExp;
            var7 = var2.bind(var7)(var1);
            var2 = var7.join;
            var1 = '|';
            var8 = var2.bind(var7)(var1);
            var1 = global;
            var1 = var1.HermesInternal;
            var7 = var1.concat;
            var2 = '';
            var1 = '|\\d+';
            var2 = var7.bind(var2)(var8, var1);
            var1 = {};
            var1['optional'] = var6;
            var1 = var3.bind(var5)(var4, var2, var1);
            return var1;
        }
    };
    var2['guildId'] = var6;
    var6 = function channelId() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arguments[0];
            var5 = undefined;
            if(!(var1 === var5)) { _fun0003_ip = 2; continue _fun0003 }
case 3:
            var1 = {};
case 2:
            var4 = var1.name;
            if(!(var4 === var5)) { _fun0003_ip = 8; continue _fun0003 }
case 9:
            var4 = 'channelId';
case 8:
            var6 = var1.optional;
            if(!(var6 === var5)) { _fun0003_ip = 10; continue _fun0003 }
case 11:
            var6 = false;
case 10:
            var3 = _closure1_slot7;
            var11 = _closure1_slot3;
            var7 = new Array(0);
            var10 = 0;
            var12 = var7;
            var2 = arraySpread(var12, var11, var10);
            var2 = var7.map;
            var8 = _closure1_slot0;
            var9 = _closure1_slot1;
            var1 = 3;
            var1 = var9[var1];
            var1 = var8.bind(var5)(var1);
            var1 = var1.escapeRegExp;
            var7 = var2.bind(var7)(var1);
            var2 = var7.join;
            var1 = '|';
            var8 = var2.bind(var7)(var1);
            var1 = global;
            var1 = var1.HermesInternal;
            var7 = var1.concat;
            var2 = '';
            var1 = '|\\d+';
            var2 = var7.bind(var2)(var8, var1);
            var1 = {};
            var1['optional'] = var6;
            var1 = var3.bind(var5)(var4, var2, var1);
            return var1;
        }
    };
    var2['channelId'] = var6;
    var6 = 4;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/routing/RouteUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var3['isPseudoGuildId'] = var5;
    var5 = function isValidGuildId(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var5 = arg1;
            var1 = null;
            var1 = var1 != var5;
            if(!var1) { _fun0004_ip = 12; continue _fun0004 }
case 13:
            var4 = _closure1_slot6;
            var2 = undefined;
            var2 = var4.bind(var2)(var5);
            var4 = !var2;
            var2 = !var4;
            if(!var4) { _fun0004_ip = 14; continue _fun0004 }
case 15:
            var4 = _closure1_slot4;
            var3 = var4.test;
            var3 = var3.bind(var4)(var5);
            var3 = !var3;
            var2 = !var3;
case 14:
            var1 = var2;
case 12:
            return var1;
        }
    };
    var3['isValidGuildId'] = var5;
    var4 = function isValidChannelId(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var5 = arg1;
            var1 = null;
            var1 = var1 == var5;
            if(var1) { _fun0005_ip = 12; continue _fun0005 }
case 13:
            var4 = _closure1_slot4;
            var2 = var4.test;
            var2 = var2.bind(var4)(var5);
            var4 = !var2;
            var2 = !var4;
            if(!var4) { _fun0005_ip = 14; continue _fun0005 }
case 16:
            var4 = _closure1_slot2;
            var3 = undefined;
            var3 = var4.bind(var3)(var5);
            var3 = !var3;
            var2 = !var3;
case 14:
            var1 = var2;
case 12:
            return var1;
        }
    };
    var3['isValidChannelId'] = var4;
    var3['RouteParam'] = var2;
    return var1;
})();