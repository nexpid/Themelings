// app/modules/routing/RouteParam.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
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
            var6 = _closure1_slot2;
            var3 = 2;
            var3 = var6[var3];
            var3 = var4.bind(var5)(var3);
            var3 = var3.UnescapedPathParam;
            var4 = _closure1_slot1;
            var2 = 3;
            var2 = var6[var2];
            var4 = var4.bind(var5)(var2);
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
    var _closure1_slot5 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var5.bind(var1)(var2);
    var2 = var2.PSEUDO_GUILD_IDS;
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.StaticChannelRoutes;
    var _closure1_slot4 = var2;
    var2 = {};
    var7 = function guildId() {
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
            var3 = _closure1_slot5;
            var7 = _closure1_slot3;
            var2 = var7.map;
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var1 = 3;
            var1 = var9[var1];
            var1 = var8.bind(var5)(var1);
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
    var2['guildId'] = var7;
    var4 = function channelId() {
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
            var3 = _closure1_slot5;
            var11 = _closure1_slot4;
            var7 = new Array(0);
            var10 = 0;
            var12 = var7;
            var2 = arraySpread(var12, var11, var10);
            var2 = var7.map;
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var1 = 3;
            var1 = var9[var1];
            var1 = var8.bind(var5)(var1);
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
    var2['channelId'] = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/routing/RouteParam.tsx';
    var4 = var5.bind(var6)(var4);
    var3['RouteParam'] = var2;
    return var1;
})();