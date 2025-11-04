// app/modules/app_launcher/hooks/useAppsInThisServer.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportAll;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var7;
    var _closure1_slot3 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.useGuildIndexState;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.DISCOVERY_COMMANDS_QUERY_LIMIT;
    var _closure1_slot6 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_launcher/hooks/useAppsInThisServer.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useAppsInThisServer(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var9 = var1.context;
            var8 = undefined;
            var _closure2_slot0 = var8;
            var _closure2_slot1 = var8;
            var _closure2_slot2 = var8;
            var _closure2_slot3 = var8;
            var2 = var9.type;
            var1 = 'channel';
            var3 = undefined;
            if(!(var1 === var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var9.channel;
case 2:
            var2 = _closure1_slot5;
            var10 = null;
            var6 = var10 == var3;
            var1 = undefined;
            if(var6) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = var3.guild_id;
case 4:
            var7 = true;
            var2 = var2.bind(var8)(var1, var7);
            _closure2_slot0 = var2;
            var3 = _closure1_slot2;
            var14 = _closure1_slot3;
            var1 = 3;
            var1 = var14[var1];
            var6 = var3.bind(var8)(var1);
            var3 = var6.useDiscovery;
            var1 = {};
            var1['context'] = var9;
            var9 = {};
            var13 = _closure1_slot0;
            var12 = 4;
            var11 = var14[var12];
            var11 = var13.bind(var8)(var11);
            var11 = var11.ApplicationCommandType;
            var15 = var11.CHAT;
            var11 = new Array(2);
            var11[0] = var15;
            var12 = var14[var12];
            var12 = var13.bind(var8)(var12);
            var12 = var12.ApplicationCommandType;
            var12 = var12.PRIMARY_ENTRY_POINT;
            var11[1] = var12;
            var9['commandTypes'] = var11;
            var1['filters'] = var9;
            var9 = {'placeholderCount': 0, 'limit': null, 'includeFrecency': true};
            var11 = _closure1_slot6;
            var9['limit'] = var11;
            var1['options'] = var9;
            var1['allowFetch'] = var7;
            var3 = var3.bind(var6)(var1);
            var1 = var3.commandsByActiveSection;
            _closure2_slot1 = var1;
            var3 = var3.loading;
            var9 = _closure1_slot4;
            var7 = var9.useMemo;
            var6 = new Array(1);
            var6[0] = var1;
            var1 = function() {
                var4 = _closure2_slot1;
                var3 = var4.reduce;
                var1 = global;
                var1 = var1.Set;
                var2 = var1.prototype;
                var2 = Object.create(var2, {constructor: {value: var1}});
                var7 = var2;
                var1 = new var7[var1](var6);
                var2 = var1 instanceof Object ? var1 : var2;
                var1 = function(arg1, arg2) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        var1 = arg1;
                        var3 = arg2;
                        var2 = var3.section;
                        var3 = var3.data;
                        var4 = var3.length;
                        var3 = 0;
                        if(!(var4 > var3)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                        var3 = var1.add;
                        var2 = var2.id;
                        var2 = var3.bind(var1)(var2);
case 6:
                        return var1;
                    }
                };
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var1 = var7.bind(var9)(var1, var6);
            _closure2_slot2 = var1;
            var7 = var9.useMemo;
            var6 = var2.result;
            var11 = var10 == var6;
            var10 = undefined;
            if(var11) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var10 = var6.sections;
case 8:
            var6 = new Array(2);
            var6[0] = var10;
            var6[1] = var1;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = global;
                    var4 = var2.Object;
                    var3 = var4.values;
                    var2 = _closure2_slot0;
                    var6 = var2.result;
                    var5 = null;
                    var7 = var5 == var6;
                    var2 = undefined;
                    if(var7) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                    var2 = var6.sections;
case 10:
                    if(!(var5 == var2)) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                    var2 = {};
case 12:
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.map;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.descriptor;
                        return var1;
                    };
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.filter;
                    var1 = function(arg1) {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                            var2 = arg1;
                            var3 = var2.id;
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot3;
                            var1 = 5;
                            var4 = var4[var1];
                            var1 = undefined;
                            var1 = var5.bind(var1)(var4);
                            var1 = var1.BUILT_IN_SECTIONS;
                            var3 = var3 in var1;
                            var1 = !var3;
                            if(var3) { _fun0004_ip = 4; continue _fun0004 }
case 13:
                            var4 = _closure2_slot2;
                            var3 = var4.has;
                            var2 = var2.id;
                            var1 = var3.bind(var4)(var2);
case 4:
                            return var1;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var7 = var7.bind(var9)(var1, var6);
            var6 = _closure1_slot0;
            var9 = _closure1_slot3;
            var1 = 6;
            var1 = var9[var1];
            var6 = var6.bind(var8)(var1);
            var1 = var6.useSortApplicationsViaFrecency;
            var8 = var1.bind(var6)(var7);
            _closure2_slot3 = var8;
            var1 = {};
            var7 = _closure1_slot4;
            var6 = var7.useMemo;
            var5 = new Array(1);
            var5[0] = var8;
            var4 = function() {
                var4 = _closure1_slot1;
                var3 = _closure1_slot3;
                var2 = 7;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.compact;
                var6 = _closure2_slot3;
                var5 = var6.map;
                var2 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.application;
                    return var1;
                };
                var2 = var5.bind(var6)(var2);
                var3 = var3.bind(var4)(var2);
                var2 = var3.map;
                var1 = function(arg1) {
                    var1 = {};
                    var2 = arg1;
                    var1['application'] = var2;
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var4 = var6.bind(var7)(var4, var5);
            var1['appsInThisServer'] = var4;
            var2 = var2.fetchState;
            var2 = var2.fetching;
            if(var2) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var2 = var3;
case 14:
            var1['isLoading'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();