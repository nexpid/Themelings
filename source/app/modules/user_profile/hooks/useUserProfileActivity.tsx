// app/modules/user_profile/hooks/useUserProfileActivity.tsx
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.useMemo;
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ActivityTypes;
    var _closure1_slot7 = var4;
    var4 = new Array(0);
    var _closure1_slot8 = var4;
    var4 = new Array(0);
    var _closure1_slot9 = var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/hooks/useUserProfileActivity.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useUserProfileActivity(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var7 = arg1;
            var _closure2_slot0 = var7;
            var5 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 5;
            var2 = var8[var2];
            var6 = undefined;
            var9 = var5.bind(var6)(var2);
            var3 = var9.useUserProfileModalRecentActivityExperiment;
            var2 = {};
            var10 = 'useUserProfileActivity';
            var2['location'] = var10;
            var2 = var3.bind(var9)(var2);
            var2 = var2.recentActivityTabEnabled;
            var _closure2_slot1 = var2;
            var2 = 6;
            var3 = var8[var2];
            var11 = var5.bind(var6)(var3);
            var10 = var11.useStateFromStores;
            var3 = _closure1_slot5;
            var9 = new Array(1);
            var9[0] = var3;
            var3 = function() {
                var2 = _closure1_slot5;
                var1 = var2.getId;
                var2 = var1.bind(var2)();
                var1 = _closure2_slot0;
                var1 = var2 === var1;
                return var1;
            };
            var3 = var10.bind(var11)(var9, var3);
            var _closure2_slot2 = var3;
            var9 = _closure1_slot1;
            var3 = 7;
            var3 = var8[var3];
            var3 = var9.bind(var6)(var3);
            var3 = var3.bind(var6)(var7);
            var7 = var8[var2];
            var11 = var5.bind(var6)(var7);
            var10 = var11.useStateFromStores;
            var7 = _closure1_slot6;
            var9 = new Array(1);
            var9[0] = var7;
            var7 = function() {
                var3 = _closure1_slot6;
                var2 = var3.getActivities;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var7 = var10.bind(var11)(var9, var7);
            var _closure2_slot3 = var7;
            var2 = var8[var2];
            var9 = var5.bind(var6)(var2);
            var8 = var9.useStateFromStores;
            var2 = _closure1_slot4;
            var5 = new Array(1);
            var5[0] = var2;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = _closure2_slot2;
                    if(var1) { _fun0002_ip = 19; continue _fun0002 }
 10:
                    var3 = _closure2_slot1;
                    var1 = undefined;
                    if(!var3) { _fun0002_ip = 41; continue _fun0002 }
 19:
                    var4 = _closure1_slot4;
                    var3 = var4.getUserOutbox;
                    var2 = _closure2_slot0;
                    var1 = var3.bind(var4)(var2);
 41:
                    return var1;
                }
            };
            var2 = var8.bind(var9)(var5, var2);
            var _closure2_slot4 = var2;
            var5 = _closure1_slot3;
            var4 = new Array(2);
            var4[0] = var7;
            var7 = null;
            var8 = var7 == var2;
            var7 = undefined;
            if(var8) { _fun0001_ip = 249; continue _fun0001 }
 243:
            var7 = var2.entries;
 249:
            var4[1] = var7;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 8;
                    var4 = var4[var2];
                    var2 = undefined;
                    var8 = var5.bind(var2)(var4);
                    var7 = var8.uniqWith;
                    var9 = _closure2_slot3;
                    var6 = var9.filter;
                    var4 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.type;
                        var1 = _closure1_slot7;
                        var1 = var1.CUSTOM_STATUS;
                        var1 = var2 !== var1;
                        return var1;
                    };
                    var6 = var6.bind(var9)(var4);
                    var4 = function(arg1, arg2) {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                            var4 = arg1;
                            var3 = arg2;
                            var1 = var4.application_id;
                            var6 = null;
                            var1 = var6 != var1;
                            if(!var1) { _fun0004_ip = 31; continue _fun0004 }
 21:
                            var2 = var3.application_id;
                            var1 = var6 != var2;
 31:
                            if(!var1) { _fun0004_ip = 50; continue _fun0004 }
 34:
                            var5 = var4.application_id;
                            var2 = var3.application_id;
                            var1 = var5 === var2;
 50:
                            if(var1) { _fun0004_ip = 94; continue _fun0004 }
 53:
                            var2 = var4.name;
                            var2 = var6 != var2;
                            if(!var2) { _fun0004_ip = 74; continue _fun0004 }
 65:
                            var5 = var3.name;
                            var2 = var6 != var5;
 74:
                            if(!var2) { _fun0004_ip = 91; continue _fun0004 }
 77:
                            var4 = var4.name;
                            var3 = var3.name;
                            var2 = var4 === var3;
 91:
                            var1 = var2;
 94:
                            return var1;
                        }
                    };
                    var6 = var7.bind(var8)(var6, var4);
                    var _closure3_slot0 = var6;
                    var7 = _closure2_slot4;
                    var4 = null;
                    var7 = var4 == var7;
                    if(var7) { _fun0003_ip = 114; continue _fun0003 }
 87:
                    var5 = _closure2_slot4;
                    var7 = var5.entries;
                    var5 = var7.filter;
                    var1 = function(arg1) {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                            var3 = arg1;
                            var _closure4_slot0 = var3;
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var1 = 9;
                            var1 = var6[var1];
                            var6 = undefined;
                            var5 = var5.bind(var6)(var1);
                            var1 = var5.isEntryLive;
                            var1 = var1.bind(var5)(var3);
                            var1 = !var1;
                            if(!var1) { _fun0005_ip = 239; continue _fun0005 }
 54:
                            var8 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var7 = 10;
                            var5 = var5[var7];
                            var8 = var8.bind(var6)(var5);
                            var5 = var8.isListenedSessionEntry;
                            var5 = var5.bind(var8)(var3);
                            if(var5) { _fun0005_ip = 179; continue _fun0005 }
 88:
                            var8 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var5 = var5[var7];
                            var8 = var8.bind(var6)(var5);
                            var5 = var8.isWatchedMediaEntry;
                            var5 = var5.bind(var8)(var3);
                            if(var5) { _fun0005_ip = 149; continue _fun0005 }
 119:
                            var5 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var2 = var2[var7];
                            var5 = var5.bind(var6)(var2);
                            var2 = var5.isRecentActivityEntry;
                            var2 = var2.bind(var5)(var3);
                            _fun0005_ip = 177; continue _fun0005;
 149:
                            var7 = _closure3_slot0;
                            var6 = var7.some;
                            var5 = function(arg1) {
                                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                                    var5 = arg1;
                                    var1 = null;
                                    var1 = var1 != var5;
                                    if(!var1) { _fun0006_ip = 56; continue _fun0006 }
 12:
                                    var4 = _closure1_slot0;
                                    var3 = _closure1_slot2;
                                    var2 = 11;
                                    var3 = var3[var2];
                                    var2 = undefined;
                                    var4 = var4.bind(var2)(var3);
                                    var3 = var4.isMatchingWatchActivity;
                                    var2 = _closure4_slot0;
                                    var1 = var3.bind(var4)(var2, var5);
 56:
                                    return var1;
                                }
                            };
                            var5 = var6.bind(var7)(var5);
                            var2 = !var5;
 177:
                            _fun0005_ip = 236; continue _fun0005;
 179:
                            var3 = var3.extra;
                            var3 = var3.entries;
                            var5 = var3.length;
                            var3 = 0;
                            var3 = var5 > var3;
                            if(!var3) { _fun0005_ip = 233; continue _fun0005 }
 205:
                            var6 = _closure3_slot0;
                            var5 = var6.some;
                            var4 = function(arg1) {
                                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                                    var5 = arg1;
                                    var1 = null;
                                    var1 = var1 != var5;
                                    if(!var1) { _fun0007_ip = 56; continue _fun0007 }
 12:
                                    var4 = _closure1_slot0;
                                    var3 = _closure1_slot2;
                                    var2 = 11;
                                    var3 = var3[var2];
                                    var2 = undefined;
                                    var4 = var4.bind(var2)(var3);
                                    var3 = var4.isMatchingListeningActivity;
                                    var2 = _closure4_slot0;
                                    var1 = var3.bind(var4)(var2, var5);
 56:
                                    return var1;
                                }
                            };
                            var4 = var5.bind(var6)(var4);
                            var3 = !var4;
 233:
                            var2 = var3;
 236:
                            var1 = var2;
 239:
                            return var1;
                        }
                    };
                    var2 = var5.bind(var7)(var1);
 114:
                    var1 = {};
                    var7 = var6.length;
                    var5 = 0;
                    if(!(var5 === var7)) { _fun0003_ip = 131; continue _fun0003 }
 127:
                    var6 = _closure1_slot8;
 131:
                    var1['live'] = var6;
                    if(!(var4 != var2)) { _fun0003_ip = 149; continue _fun0003 }
 140:
                    var4 = var2.length;
                    if(!(var5 === var4)) { _fun0003_ip = 153; continue _fun0003 }
 149:
                    var2 = _closure1_slot9;
 153:
                    var1['recent'] = var2;
                    return var1;
                }
            };
            var4 = var5.bind(var6)(var1, var4);
            var1 = {};
            var5 = var4.live;
            var1['live'] = var5;
            var4 = var4.recent;
            var1['recent'] = var4;
            var1['stream'] = var3;
            var1['outbox'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();