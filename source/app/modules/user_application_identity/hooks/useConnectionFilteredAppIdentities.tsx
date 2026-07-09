// app/modules/user_application_identity/hooks/useConnectionFilteredAppIdentities.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.APPLICATION_IDENTITY_CONNECTIONS_ALLOWED_APPLICATIONS;
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_application_identity/hooks/useConnectionFilteredAppIdentities.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useConnectionFilteredAppIdentities(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arguments[1];
            var5 = undefined;
            if(!(var1 === var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = {};
case 2:
            var _closure2_slot0 = var5;
            var _closure2_slot1 = var5;
            var1 = var1.includeHidden;
            var6 = var5 !== var1;
            if(!var6) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = var1;
case 4:
            _closure2_slot0 = var6;
            var4 = _closure1_slot0;
            var7 = _closure1_slot1;
            var1 = 2;
            var1 = var7[var1];
            var5 = var4.bind(var5)(var1);
            var4 = var5.useUserApplicationIdentities;
            var1 = arg1;
            var1 = var4.bind(var5)(var1);
            var4 = var1.isLoading;
            var7 = var1.data;
            _closure2_slot1 = var7;
            var1 = {};
            var1['isLoading'] = var4;
            var5 = _closure1_slot2;
            var4 = var5.useMemo;
            var3 = new Array(2);
            var3[0] = var7;
            var3[1] = var6;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 == var3)) { _fun0002_ip = 6; continue _fun0002 }
case 2:
                    var3 = new Array(0);
                    _fun0002_ip = 7; continue _fun0002;
case 6:
                    var3 = _closure2_slot1;
case 7:
                    var2 = var3.filter;
                    var1 = function(arg1) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                            var2 = arg1;
                            var _closure4_slot0 = var2;
                            var4 = _closure1_slot3;
                            var3 = var4.some;
                            var1 = function(arg1) {
                                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                                    var4 = arg1;
                                    var2 = var4.applicationId;
                                    var1 = _closure4_slot0;
                                    var1 = var1.application_id;
                                    var1 = var2 === var1;
                                    if(!var1) { _fun0004_ip = 8; continue _fun0004 }
case 9:
                                    var3 = var4.getMigrationExperimentEnabled;
                                    var2 = 'useConnectionFilteredAppIdentities';
                                    var1 = var3.bind(var4)(var2);
case 8:
                                    return var1;
                                }
                            };
                            var1 = var3.bind(var4)(var1);
                            if(!var1) { _fun0003_ip = 10; continue _fun0003 }
case 4:
                            var4 = var2.profile;
                            var3 = null;
                            var1 = var3 != var4;
case 10:
                            if(!var1) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                            var3 = var2.profile;
                            var4 = var3.username;
                            var3 = null;
                            var1 = var3 != var4;
case 11:
                            if(!var1) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                            var2 = var2.profile;
                            var3 = var2.connection_visible;
                            var2 = true;
                            var2 = var2 === var3;
                            if(var2) { _fun0003_ip = 15; continue _fun0003 }
case 16:
                            var2 = _closure2_slot0;
case 15:
                            var1 = var2;
case 13:
                            return var1;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var2, var3);
            var1['filteredAppIdentities'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();