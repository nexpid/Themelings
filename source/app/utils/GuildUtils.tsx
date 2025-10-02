// app/utils/GuildUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var11;
    var1 = metroImportAll;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var7;
    var1 = function requestMembersDebounced(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var _closure2_slot0 = var1;
            var1 = arg2;
            var _closure2_slot1 = var1;
            var1 = arg3;
            var _closure2_slot2 = var1;
            var4 = _closure1_slot4;
            var1 = null;
            if(!(var1 != var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = global;
            var5 = var1.clearTimeout;
            var4 = _closure1_slot4;
            var1 = undefined;
            var1 = var5.bind(var1)(var4);
case 2:
            var1 = global;
            var5 = var1.setTimeout;
            var1 = undefined;
            var4 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var5 = new Array(0);
                    var _closure3_slot0 = var5;
                    var6 = function pushGuild(arg1) {
                        var3 = _closure3_slot0;
                        var2 = var3.push;
                        var1 = arg1;
                        var1 = var1.id;
                        var1 = var2.bind(var3)(var1);
                        var1 = undefined;
                        return var1;
                    };
                    var _closure3_slot1 = var6;
                    var4 = _closure2_slot0;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var4 = global;
                    var8 = var4.Array;
                    var7 = var8.isArray;
                    var4 = _closure2_slot0;
                    var4 = var7.bind(var8)(var4);
                    if(var4) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var8 = _closure1_slot5;
                    var7 = var8.getGuild;
                    var4 = _closure2_slot0;
                    var4 = var7.bind(var8)(var4);
                    if(!(var3 != var4)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var3 = undefined;
                    var3 = var6.bind(var3)(var4);
                    _fun0002_ip = 8; continue _fun0002;
case 6:
                    var4 = _closure2_slot0;
                    var3 = var4.forEach;
                    var2 = function(arg1) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                            var3 = _closure1_slot5;
                            var2 = var3.getGuild;
                            var1 = arg1;
                            var3 = var2.bind(var3)(var1);
                            var1 = null;
                            if(!(var1 != var3)) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                            var2 = _closure3_slot1;
                            var1 = undefined;
                            var1 = var2.bind(var1)(var3);
case 10:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var2 = var3.bind(var4)(var2);
                    _fun0002_ip = 8; continue _fun0002;
case 4:
                    var3 = var5.push;
                    var4 = _closure1_slot5;
                    var2 = var4.getGuildIds;
                    var10 = var2.bind(var4)();
                    var2 = new Array(0);
                    var9 = 0;
                    var11 = var2;
                    var4 = arraySpread(var11, var10, var9);
                    var11 = var3;
                    var10 = var2;
                    var9 = var5;
                    var2 = apply(var11, var10, var9);
case 8:
                    var3 = var5.length;
                    var2 = 0;
                    if(!(var3 > var2)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var2 = 4;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.requestMembers;
                    var6 = _closure2_slot1;
                    var2 = var6.toLocaleLowerCase;
                    var2 = var2.bind(var6)();
                    var1 = _closure2_slot2;
                    var1 = var3.bind(var4)(var5, var2, var1);
case 12:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = 200;
            var2 = var5.bind(var1)(var4, var2);
            var _closure1_slot4 = var2;
            return var1;
        }
    };
    var _closure1_slot8 = var1;
    var1 = function getCachedResults(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var3 = null;
            var2 = var3 != var1;
            var6 = '';
            var5 = var6;
            if(!var2) { _fun0004_ip = 14; continue _fun0004 }
case 15:
            var5 = var1;
case 14:
            var1 = global;
            var1 = var1.HermesInternal;
            var4 = var1.concat;
            var2 = ':';
            var1 = arg2;
            var5 = var4.bind(var6)(var5, var2, var1);
            var4 = _closure1_slot7;
            var1 = var4.get;
            var1 = var1.bind(var4)(var5);
            if(!(var3 == var1)) { _fun0004_ip = 6; continue _fun0004 }
case 16:
            var4 = _closure1_slot7;
            var3 = var4.set;
            var2 = true;
            var2 = var3.bind(var4)(var5, var2);
            var2 = undefined;
            return var2;
case 6:
            return var1;
        }
    };
    var _closure1_slot9 = var1;
    var2 = function getGuildNameSuggestion(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var7 = arg1;
            var3 = _closure1_slot6;
            var1 = var3.getCurrentUser;
            var4 = var1.bind(var3)();
            var3 = _closure1_slot2;
            var5 = _closure1_slot3;
            var1 = 5;
            var1 = var5[var1];
            var6 = undefined;
            var3 = var3.bind(var6)(var1);
            var1 = var3.getName;
            var10 = var1.bind(var3)(var4);
            var8 = null;
            var3 = var8 == var10;
            var4 = '';
            var1 = var4;
            if(var3) { _fun0005_ip = 17; continue _fun0005 }
case 18:
            var3 = var10.length;
            var9 = 0;
            var1 = var4;
            if(!(var9 !== var3)) { _fun0005_ip = 17; continue _fun0005 }
case 9:
            var3 = _closure1_slot0;
            var11 = _closure1_slot3;
            var2 = 6;
            var4 = var11[var2];
            var4 = var3.bind(var6)(var4);
            var5 = var4.intl;
            var4 = var5.formatToPlainString;
            var2 = var11[var2];
            var2 = var3.bind(var6)(var2);
            var2 = var2.t;
            var3 = var2.Y6Qfjo;
            var2 = {};
            var6 = var10;
            if(!(var8 != var7)) { _fun0005_ip = 19; continue _fun0005 }
case 20:
            var7 = var7.truncateUsername;
            var6 = var10;
            if(!var7) { _fun0005_ip = 19; continue _fun0005 }
case 21:
            var8 = var10.slice;
            var7 = 20;
            var6 = var8.bind(var10)(var9, var7);
case 19:
            var2['username'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 17:
            return var1;
        }
    };
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var11.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var10 = 1;
    var4 = var7[var10];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 2;
    var4 = var7[var4];
    var9 = var11.bind(var1)(var4);
    var4 = {};
    var8 = 3;
    var8 = var7[var8];
    var8 = var11.bind(var1)(var8);
    var8 = var8.Millis;
    var8 = var8.MINUTE;
    var8 = var10 * var8;
    var4['maxAge'] = var8;
    var8 = var9.prototype;
    var8 = Object.create(var8, {constructor: {value: var9}});
    var15 = var8;
    var14 = var4;
    var4 = new var15[var9](var14, var13);
    var4 = var4 instanceof Object ? var4 : var8;
    var _closure1_slot7 = var4;
    var4 = {};
    var4['getGuildNameSuggestion'] = var2;
    var5 = function requestMembers(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var6 = arg1;
            var5 = arg2;
            var4 = arguments[2];
            var _closure2_slot0 = var5;
            var1 = undefined;
            if(!(var4 === var1)) { _fun0006_ip = 22; continue _fun0006 }
case 23:
            var4 = 10;
case 22:
            var _closure2_slot1 = var1;
            var2 = global;
            var3 = var2.Array;
            var2 = var3.isArray;
            var7 = var2.bind(var3)(var6);
            var3 = new Array(0);
            _closure2_slot1 = var3;
            if(var7) { _fun0006_ip = 24; continue _fun0006 }
case 7:
            var2 = _closure1_slot9;
            var9 = var2.bind(var1)(var6, var5);
            var2 = null;
            var9 = var2 == var9;
            var2 = false;
            if(!var9) { _fun0006_ip = 25; continue _fun0006 }
case 26:
            var2 = true;
            _fun0006_ip = 25; continue _fun0006;
case 24:
            var9 = var6.forEach;
            var8 = function(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var4 = arg1;
                    var5 = _closure1_slot9;
                    var3 = _closure2_slot0;
                    var1 = undefined;
                    var5 = var5.bind(var1)(var4, var3);
                    var3 = null;
                    if(!(var3 == var5)) { _fun0007_ip = 27; continue _fun0007 }
case 28:
                    var3 = _closure2_slot1;
                    var2 = var3.push;
                    var2 = var2.bind(var3)(var4);
case 27:
                    return var1;
                }
            };
            var8 = var9.bind(var6)(var8);
            var2 = false;
case 25:
            var9 = var3.length;
            var8 = 0;
            if(!(var9 > var8)) { _fun0006_ip = 29; continue _fun0006 }
case 30:
            if(var7) { _fun0006_ip = 31; continue _fun0006 }
case 29:
            if(!var2) { _fun0006_ip = 32; continue _fun0006 }
case 33:
            var2 = _closure1_slot8;
            var2 = var2.bind(var1)(var6, var5, var4);
            _fun0006_ip = 32; continue _fun0006;
case 31:
            var2 = _closure1_slot8;
            var2 = var2.bind(var1)(var3, var5, var4);
case 32:
            return var1;
        }
    };
    var4['requestMembers'] = var5;
    var5 = 7;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'utils/GuildUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['getGuildNameSuggestion'] = var2;
    return var1;
})();