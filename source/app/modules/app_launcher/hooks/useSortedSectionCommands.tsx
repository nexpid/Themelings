// app/modules/app_launcher/hooks/useSortedSectionCommands.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var7 = metroImportAll;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.CommandListSortOrder;
    var _closure1_slot5 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_launcher/hooks/useSortedSectionCommands.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useSortedSectionCommands(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var9 = var1.sectionId;
            var _closure2_slot0 = var9;
            var1 = var1.commandsByActiveSection;
            var _closure2_slot1 = var1;
            var11 = _closure1_slot4;
            var3 = var11.useState;
            var7 = _closure1_slot5;
            var2 = var7.ALPHABETICAL;
            var4 = var3.bind(var11)(var2);
            var3 = _closure1_slot3;
            var10 = undefined;
            var2 = 2;
            var3 = var3.bind(var10)(var4, var2);
            var2 = 0;
            var5 = var3[var2];
            var2 = 1;
            var4 = var3[var2];
            var _closure2_slot2 = var4;
            var3 = var11.useMemo;
            var2 = new Array(2);
            var2[0] = var1;
            var2[1] = var9;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var2 = var3.find;
                    var1 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.section;
                        var2 = var1.id;
                        var1 = _closure2_slot0;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var3 = var2.bind(var3)(var1);
                    var2 = null;
                    var4 = var2 == var3;
                    var1 = undefined;
                    if(var4) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var1 = var3.data;
case 2:
                    if(!(var2 == var1)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var1 = new Array(0);
case 4:
                    return var1;
                }
            };
            var1 = var3.bind(var11)(var1, var2);
            var3 = {};
            var3['alphabeticalSortedCommands'] = var1;
            var2 = function usePopularSortedCommands(arg1) {
                var2 = arg1;
                var5 = var2.alphabeticalSortedCommands;
                var _closure3_slot0 = var5;
                var4 = _closure1_slot4;
                var3 = var4.useMemo;
                var2 = new Array(1);
                var2[0] = var5;
                var1 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var1 = _closure3_slot0;
                        var3 = var1.length;
                        var1 = 1;
                        if(!(!(var3 <= var1))) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                        var1 = false;
                        var _closure4_slot0 = var1;
                        var6 = _closure3_slot0;
                        var5 = var6.map;
                        var3 = function(arg1, arg2) {
                            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                                var2 = arg1;
                                var1 = _closure4_slot0;
                                if(var1) { _fun0004_ip = 8; continue _fun0004 }
case 9:
                                var5 = var2.global_popularity_rank;
                                var4 = null;
                                var1 = var4 != var5;
case 8:
                                _closure4_slot0 = var1;
                                var1 = {};
                                var1['command'] = var2;
                                var2 = arg2;
                                var1['alphabeticalSortIndex'] = var2;
                                return var1;
                            }
                        };
                        var6 = var5.bind(var6)(var3);
                        var5 = _closure4_slot0;
                        var3 = {};
                        if(var5) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                        var5 = _closure3_slot0;
                        var3['popularSortedCommands'] = var5;
                        var3['canSort'] = var1;
                        var1 = var3;
                        _fun0003_ip = 12; continue _fun0003;
case 10:
                        var7 = var6.sort;
                        var5 = function(arg1, arg2) {
                            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                                var4 = arg1;
                                var3 = arg2;
                                var1 = var4.command;
                                var2 = var1.global_popularity_rank;
                                var1 = var3.command;
                                var1 = var1.global_popularity_rank;
                                var5 = null;
                                if(!(var5 != var2)) { _fun0005_ip = 13; continue _fun0005 }
case 14:
                                if(!(var5 == var1)) { _fun0005_ip = 15; continue _fun0005 }
case 13:
                                if(!(var5 == var2)) { _fun0005_ip = 16; continue _fun0005 }
case 17:
                                if(!(var5 != var1)) { _fun0005_ip = 18; continue _fun0005 }
case 19:
                                var5 = 1;
                                return var5;
case 16:
                                var5 = -1;
                                return var5;
case 15:
                                if(!(var2 === var1)) { _fun0005_ip = 20; continue _fun0005 }
case 18:
                                var4 = var4.alphabeticalSortIndex;
                                var3 = var3.alphabeticalSortIndex;
                                var3 = var4 - var3;
                                return var3;
case 20:
                                var1 = var2 - var1;
                                return var1;
                            }
                        };
                        var5 = var7.bind(var6)(var5);
                        var5 = var6.map;
                        var4 = function(arg1) {
                            var1 = arg1;
                            var1 = var1.command;
                            return var1;
                        };
                        var4 = var5.bind(var6)(var4);
                        var3['popularSortedCommands'] = var4;
                        var4 = true;
                        var3['canSort'] = var4;
                        var1 = var3;
case 12:
                        return var1;
case 6:
                        var1 = {};
                        var2 = _closure3_slot0;
                        var1['popularSortedCommands'] = var2;
                        var2 = false;
                        var1['canSort'] = var2;
                        return var1;
                    }
                };
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var2 = var2.bind(var10)(var3);
            var3 = var2.popularSortedCommands;
            var2 = var2.canSort;
            var _closure2_slot3 = var2;
            var12 = var11.useEffect;
            var10 = new Array(1);
            var10[0] = var9;
            var9 = function() {
                var3 = _closure1_slot1;
                var8 = _closure1_slot2;
                var1 = 3;
                var2 = var8[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.getApplication;
                var3 = _closure2_slot0;
                var2 = {};
                var7 = _closure1_slot0;
                var6 = 4;
                var6 = var8[var6];
                var6 = var7.bind(var1)(var6);
                var6 = var6.Millis;
                var6 = var6.DAY;
                var2['dontRefetchMs'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var9 = var12.bind(var11)(var9, var10);
            var10 = var11.useLayoutEffect;
            var9 = new Array(1);
            var9[0] = var2;
            var8 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var2 = _closure2_slot3;
                    if(!var2) { _fun0006_ip = 21; continue _fun0006 }
case 22:
                    var3 = _closure2_slot2;
                    var1 = _closure1_slot5;
                    var2 = var1.POPULAR;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
case 21:
                    var1 = undefined;
                    return var1;
                }
            };
            var8 = var10.bind(var11)(var8, var9);
            var7 = var7.POPULAR;
            if(!(var7 !== var5)) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var6 = _closure1_slot5;
            var6 = var6.ALPHABETICAL;
            var3 = var1;
case 23:
            var1 = {};
            var1['sortOrder'] = var5;
            var1['setSortOrder'] = var4;
            var1['commands'] = var3;
            var1['canSort'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();