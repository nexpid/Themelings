// app/modules/routing/RouteUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var1 = function paramPattern(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arguments[2];
            var5 = undefined;
            if(!(var1 === var5)) { _fun0001_ip = 11; continue _fun0001 }
 9:
            var1 = {};
 11:
            var1 = var1.optional;
            if(!(var1 === var5)) { _fun0001_ip = 23; continue _fun0001 }
 21:
            var1 = false;
 23:
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
            if(!var1) { _fun0001_ip = 89; continue _fun0001 }
 85:
            var7 = '?';
 89:
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
    var _closure1_slot8 = var1;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var2);
    var1 = 0;
    var2 = var7[var1];
    var1 = undefined;
    var2 = var6.bind(var1)(var2);
    var5 = var2.EMPTY_NUX_SERVER;
    var _closure1_slot2 = var5;
    var5 = var2.FAVORITES;
    var _closure1_slot3 = var5;
    var2 = var2.ME;
    var _closure1_slot4 = var2;
    var2 = 1;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var5 = var2.isStaticChannelRoute;
    var _closure1_slot5 = var5;
    var2 = var2.StaticChannelRoutes;
    var _closure1_slot6 = var2;
    var2 = /^\d+$/;
    var _closure1_slot7 = var2;
    var2 = {};
    var5 = function guildId() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arguments[0];
            var5 = undefined;
            if(!(var1 === var5)) { _fun0002_ip = 11; continue _fun0002 }
 9:
            var1 = {};
 11:
            var4 = var1.name;
            if(!(var4 === var5)) { _fun0002_ip = 24; continue _fun0002 }
 20:
            var4 = 'guildId';
 24:
            var6 = var1.optional;
            if(!(var6 === var5)) { _fun0002_ip = 36; continue _fun0002 }
 34:
            var6 = false;
 36:
            var3 = _closure1_slot8;
            var2 = _closure1_slot4;
            var7 = new Array(3);
            var7[0] = var2;
            var2 = _closure1_slot3;
            var7[1] = var2;
            var2 = _closure1_slot2;
            var7[2] = var2;
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
    var2['guildId'] = var5;
    var5 = function channelId() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arguments[0];
            var5 = undefined;
            if(!(var1 === var5)) { _fun0003_ip = 11; continue _fun0003 }
 9:
            var1 = {};
 11:
            var4 = var1.name;
            if(!(var4 === var5)) { _fun0003_ip = 24; continue _fun0003 }
 20:
            var4 = 'channelId';
 24:
            var6 = var1.optional;
            if(!(var6 === var5)) { _fun0003_ip = 36; continue _fun0003 }
 34:
            var6 = false;
 36:
            var3 = _closure1_slot8;
            var11 = _closure1_slot6;
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
    var2['channelId'] = var5;
    var5 = 4;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/routing/RouteUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function isValidGuildId(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var5 = arg1;
            var1 = null;
            var1 = var1 != var5;
            if(!var1) { _fun0004_ip = 71; continue _fun0004 }
 12:
            var2 = _closure1_slot4;
            var2 = var5 === var2;
            if(var2) { _fun0004_ip = 34; continue _fun0004 }
 26:
            var4 = _closure1_slot3;
            var2 = var5 === var4;
 34:
            if(var2) { _fun0004_ip = 45; continue _fun0004 }
 37:
            var4 = _closure1_slot2;
            var2 = var5 === var4;
 45:
            if(var2) { _fun0004_ip = 68; continue _fun0004 }
 48:
            var4 = _closure1_slot7;
            var3 = var4.test;
            var3 = var3.bind(var4)(var5);
            var3 = !var3;
            var2 = !var3;
 68:
            var1 = var2;
 71:
            return var1;
        }
    };
    var3['isValidGuildId'] = var5;
    var4 = function isValidChannelId(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var5 = arg1;
            var1 = null;
            var1 = var1 == var5;
            if(var1) { _fun0005_ip = 58; continue _fun0005 }
 12:
            var4 = _closure1_slot7;
            var2 = var4.test;
            var2 = var2.bind(var4)(var5);
            var4 = !var2;
            var2 = !var4;
            if(!var4) { _fun0005_ip = 55; continue _fun0005 }
 38:
            var4 = _closure1_slot5;
            var3 = undefined;
            var3 = var4.bind(var3)(var5);
            var3 = !var3;
            var2 = !var3;
 55:
            var1 = var2;
 58:
            return var1;
        }
    };
    var3['isValidChannelId'] = var4;
    var3['RouteParam'] = var2;
    return var1;
})();