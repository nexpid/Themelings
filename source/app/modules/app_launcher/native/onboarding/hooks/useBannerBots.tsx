// app/modules/app_launcher/native/onboarding/hooks/useBannerBots.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
            var9 = _closure1_slot6;
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
            var7 = _closure1_slot6;
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
    var _closure1_slot5 = var1;
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
    var _closure1_slot6 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_launcher/native/onboarding/hooks/useBannerBots.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useBannerBots(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var4 = var2.context;
            var15 = undefined;
            var _closure2_slot0 = var15;
            var3 = {};
            var3['context'] = var4;
            var2 = function useAppsMap(arg1) {
                var2 = arg1;
                var6 = var2.context;
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 5;
                var4 = var4[var3];
                var3 = undefined;
                var5 = var5.bind(var3)(var4);
                var4 = var5.useApplicationsInContext;
                var3 = {'context': null, 'onlyWithCommands': true, 'includeBuiltIn': false, 'includeEmbeddedApps': false, 'includeNonEmbeddedApps': true};
                var3['context'] = var6;
                var3 = var4.bind(var5)(var3);
                var5 = var3.apps;
                var _closure3_slot0 = var5;
                var4 = _closure1_slot2;
                var3 = var4.useMemo;
                var2 = new Array(1);
                var2[0] = var5;
                var1 = function() {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        var1 = global;
                        var1 = var1.Map;
                        var2 = var1.prototype;
                        var2 = Object.create(var2, {constructor: {value: var1}});
                        var10 = var2;
                        var1 = new var10[var1](var9);
                        var1 = var1 instanceof Object ? var1 : var2;
                        var3 = _closure1_slot5;
                        var2 = _closure3_slot0;
                        var5 = undefined;
                        var4 = var3.bind(var5)(var2);
                        var3 = var4.bind(var5)();
                        var2 = var3.done;
                        if(var2) { _fun0005_ip = 36; continue _fun0005 }
case 7:
                        var7 = var3.value;
                        var6 = var1.set;
                        var2 = var7.id;
                        var2 = var6.bind(var1)(var2, var7);
                        var6 = var4.bind(var5)();
                        var2 = var6.done;
                        var3 = var6;
                        if(!var2) { _fun0005_ip = 7; continue _fun0005 }
case 36:
                        return var1;
                    }
                };
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var14 = var2.bind(var15)(var3);
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var3 = 5;
            var3 = var7[var3];
            var8 = var6.bind(var15)(var3);
            var5 = var8.useApplicationsInContext;
            var3 = {'context': null, 'onlyWithCommands': true, 'includeBuiltIn': false, 'includeEmbeddedApps': false, 'includeNonEmbeddedApps': true};
            var3['context'] = var4;
            var9 = true;
            var3 = var5.bind(var8)(var3);
            var8 = var3.apps;
            var5 = {};
            var5['context'] = var4;
            var3 = function useCommandsMap(arg1) {
                var2 = arg1;
                var6 = var2.context;
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 5;
                var4 = var4[var3];
                var3 = undefined;
                var5 = var5.bind(var3)(var4);
                var4 = var5.useApplicationCommandsInContext;
                var3 = {};
                var3['context'] = var6;
                var6 = false;
                var3['includeBuiltIn'] = var6;
                var3 = var4.bind(var5)(var3);
                var5 = var3.commands;
                var _closure3_slot0 = var5;
                var4 = _closure1_slot2;
                var3 = var4.useMemo;
                var2 = new Array(1);
                var2[0] = var5;
                var1 = function() {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var1 = global;
                        var1 = var1.Map;
                        var2 = var1.prototype;
                        var2 = Object.create(var2, {constructor: {value: var1}});
                        var10 = var2;
                        var1 = new var10[var1](var9);
                        var1 = var1 instanceof Object ? var1 : var2;
                        var3 = _closure1_slot5;
                        var2 = _closure3_slot0;
                        var5 = undefined;
                        var4 = var3.bind(var5)(var2);
                        var3 = var4.bind(var5)();
                        var2 = var3.done;
                        if(var2) { _fun0006_ip = 36; continue _fun0006 }
case 7:
                        var7 = var3.value;
                        var6 = var1.set;
                        var2 = var7.id;
                        var2 = var6.bind(var1)(var2, var7);
                        var6 = var4.bind(var5)();
                        var2 = var6.done;
                        var3 = var6;
                        if(!var2) { _fun0006_ip = 7; continue _fun0006 }
case 36:
                        return var1;
                    }
                };
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var13 = var3.bind(var15)(var5);
            var5 = {};
            var5['context'] = var4;
            var3 = function useFrecencyCommandIds(arg1) {
                var2 = arg1;
                var6 = var2.context;
                var _closure3_slot0 = var6;
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var2 = 3;
                var7 = var5[var2];
                var2 = undefined;
                var8 = var4.bind(var2)(var7);
                var7 = var8.useStateFromStores;
                var9 = _closure1_slot3;
                var3 = new Array(1);
                var3[0] = var9;
                var1 = function() {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                        var3 = _closure1_slot3;
                        var2 = var3.getGuild;
                        var1 = _closure3_slot0;
                        var4 = var1.channel;
                        var1 = null;
                        var5 = var1 == var4;
                        var1 = undefined;
                        if(var5) { _fun0007_ip = 37; continue _fun0007 }
case 38:
                        var1 = var4.guild_id;
case 37:
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    }
                };
                var1 = var7.bind(var8)(var3, var1);
                var3 = {};
                var6 = var6.channel;
                var3['channel'] = var6;
                var3['guild'] = var1;
                var1 = 4;
                var1 = var5[var1];
                var2 = var4.bind(var2)(var1);
                var1 = var2.useTopCommands;
                var1 = var1.bind(var2)(var3);
                return var1;
            };
            var3 = var3.bind(var15)(var5);
            var5 = 6;
            var5 = var7[var5];
            var7 = var6.bind(var15)(var5);
            var6 = var7.useActivityApplications;
            var5 = {};
            var11 = var4.channel;
            var4 = null;
            var12 = var4 == var11;
            var10 = undefined;
            if(var12) { _fun0004_ip = 39; continue _fun0004 }
case 40:
            var10 = var11.guild_id;
case 39:
            var5['guildId'] = var10;
            var5['fetchesShelf'] = var9;
            var5 = var6.bind(var7)(var5);
            var7 = _closure1_slot0;
            var9 = _closure1_slot1;
            var6 = 3;
            var6 = var9[var6];
            var10 = var7.bind(var15)(var6);
            var9 = var10.useStateFromStores;
            var6 = _closure1_slot4;
            var7 = new Array(1);
            var7[0] = var6;
            var6 = function() {
                var2 = _closure1_slot4;
                var1 = var2.getRecentApplicationCommandMetadata;
                var1 = var1.bind(var2)();
                return var1;
            };
            var6 = var9.bind(var10)(var7, var6);
            var9 = var4 != var6;
            var7 = null;
            if(!var9) { _fun0004_ip = 41; continue _fun0004 }
case 42:
            var9 = var14.get;
            var6 = var6.applicationId;
            var7 = var9.bind(var14)(var6);
case 41:
            _closure2_slot0 = var7;
            var2 = _closure1_slot5;
            var12 = var2.bind(var15)(var3);
            var3 = var12.bind(var15)();
            var2 = var3.done;
            var11 = var7;
            var9 = var3;
            var6 = undefined;
            var3 = undefined;
            var7 = var11;
            var10 = undefined;
            if(var2) { _fun0004_ip = 43; continue _fun0004 }
case 44:
            var16 = var9.value;
            var2 = var13.get;
            var2 = var2.bind(var13)(var16);
            var16 = var11;
            var17 = var6;
            if(!(var4 != var2)) { _fun0004_ip = 45; continue _fun0004 }
case 46:
            var18 = var14.get;
            var2 = var2.applicationId;
            var2 = var18.bind(var14)(var2);
            var16 = var11;
            var17 = var6;
            var3 = var2;
            if(!(var4 != var2)) { _fun0004_ip = 45; continue _fun0004 }
case 47:
            if(!(var4 != var11)) { _fun0004_ip = 48; continue _fun0004 }
case 49:
            var19 = var2.id;
            var20 = var4 == var11;
            var18 = undefined;
            if(var20) { _fun0004_ip = 50; continue _fun0004 }
case 51:
            var18 = var11.id;
case 50:
            var16 = var11;
            var17 = var16;
            var3 = var2;
            var7 = var17;
            var10 = var3;
            if(!(var19 === var18)) { _fun0004_ip = 43; continue _fun0004 }
case 52:
            _fun0004_ip = 45; continue _fun0004;
case 48:
            _closure2_slot0 = var2;
            var16 = var2;
            var17 = var6;
            var3 = var16;
case 45:
            var18 = var12.bind(var15)();
            var2 = var18.done;
            var11 = var16;
            var6 = var17;
            var9 = var18;
            var7 = var11;
            var10 = undefined;
            if(!var2) { _fun0004_ip = 44; continue _fun0004 }
case 43:
            if(!(var4 != var7)) { _fun0004_ip = 53; continue _fun0004 }
case 54:
            var6 = var7;
            var2 = var10;
            if(!(var4 == var10)) { _fun0004_ip = 55; continue _fun0004 }
case 56:
            var9 = var8.find;
            var3 = function(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var1 = arg1;
                    var2 = var1.id;
                    var3 = _closure2_slot0;
                    var1 = null;
                    var4 = var1 == var3;
                    var1 = undefined;
                    if(var4) { _fun0008_ip = 57; continue _fun0008 }
case 58:
                    var1 = var3.id;
case 57:
                    var1 = var2 !== var1;
                    return var1;
                }
            };
            var2 = var9.bind(var8)(var3);
            var6 = var7;
            _fun0004_ip = 55; continue _fun0004;
case 53:
            var9 = var8.length;
            var3 = 0;
            if(!(var9 > var3)) { _fun0004_ip = 59; continue _fun0004 }
case 60:
            var3 = var8[var3];
            _closure2_slot0 = var3;
            var7 = var3;
case 59:
            var9 = var8.length;
            var3 = 1;
            var6 = var7;
            var2 = var10;
            if(!(var9 > var3)) { _fun0004_ip = 55; continue _fun0004 }
case 61:
            var2 = var8[var3];
            var6 = var7;
case 55:
            if(!(var4 != var6)) { _fun0004_ip = 62; continue _fun0004 }
case 63:
            var3 = var6;
            if(!(var4 == var2)) { _fun0004_ip = 64; continue _fun0004 }
case 65:
            var4 = 0;
            var2 = var5[var4];
            var3 = var6;
            _fun0004_ip = 64; continue _fun0004;
case 62:
            var4 = 0;
            var4 = var5[var4];
            _closure2_slot0 = var4;
            var1 = 1;
            var2 = var5[var1];
            var3 = var4;
case 64:
            var1 = {};
            var1['firstBotApplication'] = var3;
            var1['secondBotApplication'] = var2;
            return var1;
        }
    };
    var3['useBannerBots'] = var2;
    return var1;
})();