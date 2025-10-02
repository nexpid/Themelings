// app/modules/threads/ThreadMemberListHooks.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.StatusTypes;
    var _closure1_slot6 = var4;
    var4 = new Array(0);
    var _closure1_slot7 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/threads/ThreadMemberListHooks.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useThreadMemberListSections(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg2;
            var2 = arg1;
            var _closure2_slot0 = var2;
            var _closure2_slot1 = var5;
            var4 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 4;
            var3 = var7[var3];
            var6 = undefined;
            var4 = var4.bind(var6)(var3);
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot1;
                    var4 = null;
                    var5 = var4 == var1;
                    var1 = undefined;
                    var3 = undefined;
                    if(var5) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var5 = _closure2_slot1;
                    var3 = var5.id;
case 2:
                    if(!(var4 != var3)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 5;
                    var3 = var8[var3];
                    var6 = var7.bind(var1)(var3);
                    var5 = var6.subscribeChannel;
                    var3 = _closure2_slot1;
                    var4 = var3.id;
                    var3 = _closure2_slot0;
                    var2 = 6;
                    var2 = var8[var2];
                    var2 = var7.bind(var1)(var2);
                    var2 = var2.DEFAULT_RANGES;
                    var2 = var5.bind(var6)(var4, var3, var2);
case 4:
                    return var1;
                }
            };
            var3 = var4.bind(var6)(var3);
            var4 = _closure1_slot0;
            var3 = 7;
            var8 = var7[var3];
            var11 = var4.bind(var6)(var8);
            var10 = var11.useStateFromStores;
            var8 = _closure1_slot4;
            var9 = new Array(1);
            var9[0] = var8;
            var8 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    if(!(var1 == var3)) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                    var1 = new Array(0);
                    _fun0003_ip = 8; continue _fun0003;
case 6:
                    var4 = _closure1_slot4;
                    var3 = var4.getSortedRoles;
                    var2 = _closure2_slot1;
                    var2 = var2.id;
                    var1 = var3.bind(var4)(var2);
case 8:
                    return var1;
                }
            };
            var10 = var10.bind(var11)(var9, var8);
            var _closure2_slot2 = var10;
            var3 = var7[var3];
            var7 = var4.bind(var6)(var3);
            var6 = var7.useStateFromStoresObject;
            var3 = _closure1_slot5;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                var1 = {};
                var4 = _closure1_slot5;
                var2 = var4.getMemberListVersion;
                var3 = _closure2_slot0;
                var2 = var2.bind(var4)(var3);
                var1['version'] = var2;
                var2 = var4.getMemberListSections;
                var2 = var2.bind(var4)(var3);
                var1['members'] = var2;
                return var1;
            };
            var3 = var6.bind(var7)(var4, var3);
            var9 = var3.version;
            var4 = var3.members;
            var _closure2_slot3 = var4;
            var3 = null;
            var8 = var3 == var5;
            var _closure2_slot4 = var8;
            var7 = _closure1_slot3;
            var6 = var7.useMemo;
            var5 = new Array(4);
            var5[0] = var10;
            var5[1] = var4;
            var5[2] = var9;
            var5[3] = var8;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure2_slot4;
                    if(var3) { _fun0004_ip = 9; continue _fun0004 }
case 10:
                    var4 = _closure2_slot2;
                    var3 = var4.filter;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.hoist;
                        return var1;
                    };
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.map;
                    var2 = function(arg1) {
                        var2 = arg1;
                        var1 = {};
                        var3 = var2.id;
                        var1['id'] = var3;
                        var2 = var2.name;
                        var1['label'] = var2;
                        return var1;
                    };
                    var3 = var3.bind(var4)(var2);
                    var5 = var3.push;
                    var4 = {};
                    var7 = _closure1_slot6;
                    var6 = var7.ONLINE;
                    var4['id'] = var6;
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var6 = 8;
                    var2 = var11[var6];
                    var9 = undefined;
                    var2 = var10.bind(var9)(var2);
                    var12 = var2.intl;
                    var8 = var12.string;
                    var2 = var11[var6];
                    var2 = var10.bind(var9)(var2);
                    var2 = var2.t;
                    var2 = var2.WbGtnJ;
                    var2 = var8.bind(var12)(var2);
                    var4['label'] = var2;
                    var2 = {};
                    var7 = var7.OFFLINE;
                    var2['id'] = var7;
                    var7 = var11[var6];
                    var7 = var10.bind(var9)(var7);
                    var8 = var7.intl;
                    var7 = var8.string;
                    var6 = var11[var6];
                    var6 = var10.bind(var9)(var6);
                    var6 = var6.t;
                    var6 = var6.Vv0abG;
                    var6 = var7.bind(var8)(var6);
                    var2['label'] = var6;
                    var2 = var5.bind(var3)(var4, var2);
                    var2 = var3.map;
                    var1 = function(arg1) {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                            var1 = arg1;
                            var2 = var1.id;
                            var3 = var1.label;
                            var1 = {};
                            var1['label'] = var3;
                            var3 = _closure2_slot3;
                            var4 = null;
                            var6 = var4 == var3;
                            var3 = undefined;
                            if(var6) { _fun0005_ip = 11; continue _fun0005 }
case 12:
                            var5 = _closure2_slot3;
                            var5 = var5[var2];
                            var6 = var4 == var5;
                            var3 = undefined;
                            if(var6) { _fun0005_ip = 11; continue _fun0005 }
case 13:
                            var3 = var5.userIds;
case 11:
                            if(!(var4 == var3)) { _fun0005_ip = 14; continue _fun0005 }
case 15:
                            var3 = new Array(0);
case 14:
                            var1['userIds'] = var3;
                            var1['id'] = var2;
                            var1['roleId'] = var2;
                            return var1;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
                    return var1;
case 9:
                    var1 = _closure1_slot7;
                    return var1;
                }
            };
            var1 = var6.bind(var7)(var1, var5);
            if(!(var3 == var4)) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var1 = _closure1_slot7;
case 16:
            return var1;
        }
    };
    var3['useThreadMemberListSections'] = var2;
    return var1;
})();