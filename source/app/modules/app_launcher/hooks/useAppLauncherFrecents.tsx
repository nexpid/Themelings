// app/modules/app_launcher/hooks/useAppLauncherFrecents.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var8 = metroImportAll;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var8;
    var _closure1_slot3 = var6;
    var1 = function useFrecentApps(arg1) {
        var2 = arg1;
        var7 = var2.sectionDescriptors;
        var6 = var2.context;
        var _closure2_slot0 = var6;
        var8 = var2.onlyActivityApps;
        var _closure2_slot1 = var8;
        var14 = var2.includeAuthorizedAppsAndFetch;
        var _closure2_slot2 = var14;
        var10 = _closure1_slot0;
        var11 = _closure1_slot3;
        var3 = 7;
        var5 = var11[var3];
        var4 = undefined;
        var13 = var10.bind(var4)(var5);
        var12 = var13.useStateFromStores;
        var5 = _closure1_slot5;
        var9 = new Array(1);
        var9[0] = var5;
        var5 = function() {
            var2 = _closure1_slot5;
            var1 = var2.getFetchState;
            var1 = var1.bind(var2)();
            return var1;
        };
        var5 = var12.bind(var13)(var9, var5);
        var _closure2_slot3 = var5;
        var13 = _closure1_slot4;
        var12 = var13.useEffect;
        var9 = new Array(2);
        var9[0] = var14;
        var9[1] = var5;
        var5 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var1 = _closure2_slot2;
                if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var3 = _closure2_slot3;
                var2 = _closure1_slot6;
                var2 = var2.NOT_FETCHED;
                var1 = var3 === var2;
case 2:
                if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var3 = _closure1_slot1;
                var2 = _closure1_slot3;
                var1 = 8;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.fetch;
                var1 = var1.bind(var2)();
case 4:
                var1 = undefined;
                return var1;
            }
        };
        var5 = var12.bind(var13)(var5, var9);
        var3 = var11[var3];
        var12 = var10.bind(var4)(var3);
        var9 = var12.useStateFromStoresArray;
        var3 = _closure1_slot5;
        var5 = new Array(1);
        var5[0] = var3;
        var3 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var1 = _closure2_slot2;
                if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 3:
                var1 = new Array(0);
                _fun0002_ip = 7; continue _fun0002;
case 6:
                var3 = _closure1_slot5;
                var2 = var3.getNewestTokens;
                var4 = var2.bind(var3)();
                var3 = var4.filter;
                var2 = function(arg1) {
                    var1 = arg1;
                    var3 = var1.scopes;
                    var2 = var3.includes;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var1 = 9;
                    var4 = var4[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var4);
                    var1 = var1.OAuth2Scopes;
                    var1 = var1.APPLICATIONS_COMMANDS;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1 = var3.bind(var4)(var2);
case 7:
                return var1;
            }
        };
        var9 = var9.bind(var12)(var5, var3);
        var5 = var7.filter;
        var3 = function(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var3 = arg1;
                var4 = var3.id;
                var1 = _closure1_slot9;
                var1 = var1.FRECENCY;
                var1 = var4 !== var1;
                if(!var1) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                var3 = var3.id;
                var2 = _closure1_slot9;
                var2 = var2.BUILT_IN;
                var1 = var3 !== var2;
case 8:
                return var1;
            }
        };
        var7 = var5.bind(var7)(var3);
        var5 = var6.type;
        var3 = 'contextless';
        var3 = var3 === var5;
        var _closure2_slot4 = var3;
        var13 = _closure1_slot4;
        var12 = var13.useMemo;
        var5 = new Array(1);
        var5[0] = var3;
        var3 = function() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var1 = new Array(0);
                var2 = _closure2_slot4;
                if(!var2) { _fun0004_ip = 2; continue _fun0004 }
case 10:
                var3 = var1.push;
                var2 = _closure1_slot8;
                var2 = var3.bind(var1)(var2);
case 2:
                return var1;
            }
        };
        var5 = var12.bind(var13)(var3, var5);
        var _closure2_slot5 = var5;
        var3 = 10;
        var3 = var11[var3];
        var4 = var10.bind(var4)(var3);
        var3 = var4.useSortApplicationsViaFrecency;
        var7 = var3.bind(var4)(var7, var9);
        var _closure2_slot6 = var7;
        var4 = _closure1_slot4;
        var3 = var4.useMemo;
        var2 = new Array(4);
        var2[0] = var8;
        var2[1] = var7;
        var2[2] = var6;
        var2[3] = var5;
        var1 = function() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var1 = _closure2_slot1;
                var5 = _closure2_slot6;
                var4 = var5.filter;
                if(var1) { _fun0005_ip = 11; continue _fun0005 }
case 12:
                var1 = function(arg1) {
                    var3 = _closure2_slot5;
                    var2 = var3.includes;
                    var1 = arg1;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
                    var1 = !var1;
                    return var1;
                };
                var1 = var4.bind(var5)(var1);
                _fun0005_ip = 13; continue _fun0005;
case 11:
                var3 = function(arg1) {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var2 = arg1;
                        var1 = var2.application;
                        var3 = null;
                        var1 = var3 != var1;
                        if(!var1) { _fun0006_ip = 14; continue _fun0006 }
case 15:
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot3;
                        var4 = 11;
                        var5 = var5[var4];
                        var4 = undefined;
                        var6 = var6.bind(var4)(var5);
                        var5 = var6.isEmbeddedApp;
                        var4 = var2.application;
                        var1 = var5.bind(var6)(var4);
case 14:
                        if(!var1) { _fun0006_ip = 16; continue _fun0006 }
case 17:
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot3;
                        var4 = 12;
                        var5 = var5[var4];
                        var4 = undefined;
                        var6 = var6.bind(var4)(var5);
                        var5 = var6.queryForPrimaryAppCommand;
                        var4 = _closure2_slot0;
                        var2 = var2.id;
                        var2 = var5.bind(var6)(var4, var2);
                        var1 = var3 != var2;
case 16:
                        return var1;
                    }
                };
                var4 = var4.bind(var5)(var3);
                var3 = var4.filter;
                var2 = function(arg1) {
                    var3 = _closure2_slot5;
                    var2 = var3.includes;
                    var1 = arg1;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
                    var1 = !var1;
                    return var1;
                };
                var1 = var3.bind(var4)(var2);
case 13:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot12 = var1;
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
    var _closure1_slot4 = var4;
    var4 = 1;
    var8 = var6[var4];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.FetchState;
    var _closure1_slot6 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.WATCH_YOUTUBE_PROD_APP_ID;
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.BuiltInSectionId;
    var _closure1_slot9 = var7;
    var7 = var4.DISCOVERY_COMMANDS_QUERY_LIMIT;
    var4 = {};
    var9 = 5;
    var8 = var6[var9];
    var8 = var5.bind(var1)(var8);
    var8 = var8.ApplicationCommandType;
    var10 = var8.CHAT;
    var8 = new Array(2);
    var8[0] = var10;
    var9 = var6[var9];
    var9 = var5.bind(var1)(var9);
    var9 = var9.ApplicationCommandType;
    var9 = var9.PRIMARY_ENTRY_POINT;
    var8[1] = var9;
    var4['commandTypes'] = var8;
    var _closure1_slot10 = var4;
    var4 = {'placeholderCount': 0, 'limit': null, 'includeFrecency': true};
    var4['limit'] = var7;
    var _closure1_slot11 = var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_launcher/hooks/useAppLauncherFrecents.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useAppLauncherFrecentCommandsAndApps(arg1) {
        var1 = arg1;
        var8 = var1.context;
        var7 = var1.onlyActivityApps;
        var _closure2_slot0 = var7;
        var2 = _closure1_slot2;
        var11 = _closure1_slot3;
        var1 = 6;
        var1 = var11[var1];
        var5 = undefined;
        var9 = var2.bind(var5)(var1);
        var2 = var9.useDiscovery;
        var1 = {};
        var1['context'] = var8;
        var6 = _closure1_slot10;
        var1['filters'] = var6;
        var6 = _closure1_slot11;
        var1['options'] = var6;
        var6 = true;
        var1['allowFetch'] = var6;
        var9 = var2.bind(var9)(var1);
        var14 = var9.commands;
        var _closure2_slot1 = var14;
        var13 = var9.commandsByActiveSection;
        var _closure2_slot2 = var13;
        var2 = var9.sectionDescriptors;
        var1 = var9.filterSection;
        var _closure2_slot3 = var1;
        var9 = var9.loading;
        var15 = _closure1_slot4;
        var12 = var15.useEffect;
        var10 = new Array(1);
        var10[0] = var1;
        var1 = function() {
            var3 = _closure2_slot3;
            var1 = _closure1_slot9;
            var2 = var1.FRECENCY;
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var1 = var12.bind(var15)(var1, var10);
        var10 = _closure1_slot0;
        var1 = 7;
        var1 = var11[var1];
        var12 = var10.bind(var5)(var1);
        var11 = var12.useStateFromStores;
        var1 = _closure1_slot7;
        var10 = new Array(1);
        var10[0] = var1;
        var1 = function() {
            var2 = _closure1_slot7;
            var1 = var2.getLastUsedCommandId;
            var1 = var1.bind(var2)();
            return var1;
        };
        var12 = var11.bind(var12)(var10, var1);
        var _closure2_slot4 = var12;
        var1 = {};
        var1['loading'] = var9;
        var11 = _closure1_slot4;
        var10 = var11.useMemo;
        var9 = new Array(4);
        var9[0] = var14;
        var9[1] = var13;
        var9[2] = var12;
        var9[3] = var7;
        var4 = function() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var2 = _closure2_slot0;
                if(var2) { _fun0007_ip = 18; continue _fun0007 }
case 19:
                var4 = _closure2_slot2;
                var2 = 0;
                var4 = var4[var2];
                var2 = null;
                var6 = var2 == var4;
                var5 = undefined;
                if(var6) { _fun0007_ip = 20; continue _fun0007 }
case 21:
                var5 = var4.data;
case 20:
                if(!(var2 == var5)) { _fun0007_ip = 22; continue _fun0007 }
case 23:
                var5 = new Array(0);
case 22:
                var6 = _closure2_slot1;
                var4 = var6.find;
                var1 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.id;
                    var1 = _closure2_slot4;
                    var1 = var2 === var1;
                    return var1;
                };
                var4 = var4.bind(var6)(var1);
                var1 = var5;
                if(!(var2 != var4)) { _fun0007_ip = 24; continue _fun0007 }
case 25:
                var2 = new Array(1);
                var2[0] = var4;
                var4 = var5.filter;
                var3 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.id;
                    var1 = _closure2_slot4;
                    var1 = var2 !== var1;
                    return var1;
                };
                var8 = var4.bind(var5)(var3);
                var7 = 1;
                var9 = var2;
                var3 = arraySpread(var9, var8, var7);
                var1 = var2;
case 24:
                return var1;
case 18:
                var1 = new Array(0);
                return var1;
            }
        };
        var4 = var10.bind(var11)(var4, var9);
        var1['frecencyCommands'] = var4;
        var4 = _closure1_slot12;
        var3 = {};
        var3['sectionDescriptors'] = var2;
        var3['context'] = var8;
        var3['onlyActivityApps'] = var7;
        var3['includeAuthorizedAppsAndFetch'] = var6;
        var3 = var4.bind(var5)(var3);
        var1['frecentApps'] = var3;
        var1['sectionDescriptors'] = var2;
        return var1;
    };
    var3['default'] = var4;
    var2 = function useAppLauncherFrecentApps(arg1) {
        var1 = arg1;
        var7 = var1.context;
        var6 = var1.onlyActivityApps;
        var9 = var1.allowCommandFetch;
        var5 = var1.includeAuthorizedAppsAndFetch;
        var3 = _closure1_slot2;
        var4 = _closure1_slot3;
        var1 = 6;
        var1 = var4[var1];
        var4 = undefined;
        var8 = var3.bind(var4)(var1);
        var3 = var8.useDiscovery;
        var1 = {};
        var1['context'] = var7;
        var10 = _closure1_slot10;
        var1['filters'] = var10;
        var10 = _closure1_slot11;
        var1['options'] = var10;
        var1['allowFetch'] = var9;
        var3 = var3.bind(var8)(var1);
        var8 = var3.sectionDescriptors;
        var1 = {};
        var3 = var3.loading;
        var1['loading'] = var3;
        var3 = _closure1_slot12;
        var2 = {};
        var2['sectionDescriptors'] = var8;
        var2['context'] = var7;
        var2['onlyActivityApps'] = var6;
        var2['includeAuthorizedAppsAndFetch'] = var5;
        var2 = var3.bind(var4)(var2);
        var1['frecentApps'] = var2;
        return var1;
    };
    var3['useAppLauncherFrecentApps'] = var2;
    return var1;
})();