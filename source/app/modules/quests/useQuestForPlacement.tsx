// app/modules/quests/useQuestForPlacement.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function maybeRefreshAd(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var5 = arg2;
            var6 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 3;
            var3 = var3[var1];
            var1 = undefined;
            var6 = var6.bind(var1)(var3);
            var3 = var6.getState;
            var6 = var3.bind(var6)();
            var3 = 'active';
            if(!(var3 === var6)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = null;
            var3 = var3 != var4;
            if(!var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = var4.fetchedAt;
            var4 = var4.ttlMillis;
            var6 = var6 + var4;
            var4 = global;
            var7 = var4.Date;
            var4 = var7.now;
            var4 = var4.bind(var7)();
            var3 = var6 >= var4;
case 4:
            if(var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = _closure1_slot5;
            var4 = var6.isFetchingQuestToDeliverByPlacement;
            var3 = var4.bind(var6)(var5);
case 6:
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 8:
            var4 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 4;
            var3 = var6[var3];
            var6 = var4.bind(var1)(var3);
            var4 = var6.getConfig;
            var3 = {};
            var7 = 'maybeRefreshAd';
            var3['location'] = var7;
            var3 = var4.bind(var6)(var3);
            var3 = var3.enableNewRequestBehavior;
            if(!var3) { _fun0001_ip = 2; continue _fun0001 }
case 9:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 5;
            var6 = var4[var2];
            var7 = var3.bind(var1)(var6);
            var6 = var7.fetchCurrentQuests;
            var6 = var6.bind(var7)();
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.fetchQuestToDeliver;
            var2 = arg3;
            var2 = var3.bind(var4)(var5, var2);
case 2:
            return var1;
        }
    };
    var _closure1_slot7 = var1;
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
    var8 = var4.useEffect;
    var _closure1_slot3 = var8;
    var4 = var4.useRef;
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var4 = var4.Millis;
    var7 = var4.MINUTE;
    var4 = 10;
    var4 = var4 * var7;
    var _closure1_slot6 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/useQuestForPlacement.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useQuestForAdPlacement(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var9 = arg1;
            var _closure2_slot0 = var9;
            var1 = _closure1_slot4;
            var7 = undefined;
            var5 = null;
            var1 = var1.bind(var7)(var5);
            var _closure2_slot1 = var1;
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 6;
            var1 = var8[var3];
            var12 = var6.bind(var7)(var1);
            var11 = var12.useStateFromStores;
            var1 = _closure1_slot5;
            var10 = new Array(1);
            var10[0] = var1;
            var1 = function() {
                var1 = _closure1_slot5;
                var1 = var1.questDeliveryOverride;
                return var1;
            };
            var1 = var11.bind(var12)(var10, var1);
            var _closure2_slot2 = var1;
            var10 = var8[var3];
            var13 = var6.bind(var7)(var10);
            var12 = var13.useStateFromStores;
            var10 = _closure1_slot5;
            var11 = new Array(1);
            var11[0] = var10;
            var10 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = _closure1_slot5;
                    var3 = var1.questAdDecisionByPlacement;
                    var2 = var3.get;
                    var1 = _closure2_slot0;
                    var2 = var2.bind(var3)(var1);
                    var1 = null;
                    var3 = var1 != var2;
                    if(!var3) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                    var1 = var2;
case 10:
                    return var1;
                }
            };
            var10 = var12.bind(var13)(var11, var10);
            var _closure2_slot3 = var10;
            var3 = var8[var3];
            var11 = var6.bind(var7)(var3);
            var8 = var11.useStateFromStores;
            var3 = _closure1_slot5;
            var6 = new Array(1);
            var6[0] = var3;
            var3 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = _closure2_slot3;
                    var4 = null;
                    var3 = var4 == var1;
                    var1 = undefined;
                    if(var3) { _fun0004_ip = 12; continue _fun0004 }
case 13:
                    var3 = _closure2_slot3;
                    var1 = var3.questId;
case 12:
                    var3 = var4 != var1;
                    var1 = null;
                    if(!var3) { _fun0004_ip = 14; continue _fun0004 }
case 15:
                    var3 = _closure1_slot5;
                    var5 = var3.quests;
                    var3 = var5.get;
                    var2 = _closure2_slot3;
                    var2 = var2.questId;
                    var2 = var3.bind(var5)(var2);
                    var3 = var4 != var2;
                    var1 = null;
                    if(!var3) { _fun0004_ip = 14; continue _fun0004 }
case 16:
                    var1 = var2;
case 14:
                    return var1;
                }
            };
            var3 = var8.bind(var11)(var6, var3);
            var8 = _closure1_slot3;
            var6 = new Array(3);
            var6[0] = var10;
            var6[1] = var9;
            var6[2] = var1;
            var2 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var3 = var3.current;
                    var4 = null;
                    if(!(var4 != var3)) { _fun0005_ip = 17; continue _fun0005 }
case 18:
                    var3 = global;
                    var6 = var3.clearInterval;
                    var3 = _closure2_slot1;
                    var5 = var3.current;
                    var3 = undefined;
                    var3 = var6.bind(var3)(var5);
case 17:
                    var3 = _closure2_slot2;
                    if(!(var4 != var3)) { _fun0005_ip = 19; continue _fun0005 }
case 3:
                    var3 = undefined;
                    return var3;
case 19:
                    var8 = _closure1_slot7;
                    var7 = _closure2_slot3;
                    var5 = _closure2_slot0;
                    var6 = undefined;
                    var4 = 'questBar-open';
                    var4 = var8.bind(var6)(var7, var5, var4);
                    var2 = _closure2_slot1;
                    var4 = global;
                    var5 = var4.setInterval;
                    var4 = _closure1_slot6;
                    var3 = function() {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                            var5 = _closure1_slot7;
                            var1 = _closure1_slot5;
                            var4 = var1.questAdDecisionByPlacement;
                            var3 = var4.get;
                            var2 = _closure2_slot0;
                            var2 = var3.bind(var4)(var2);
                            var4 = null;
                            var3 = var4 != var2;
                            if(!var3) { _fun0006_ip = 20; continue _fun0006 }
case 21:
                            var4 = var2;
case 20:
                            var3 = _closure2_slot0;
                            var1 = undefined;
                            var2 = 'questBar-interval';
                            var2 = var5.bind(var1)(var4, var3, var2);
                            return var1;
                        }
                    };
                    var3 = var5.bind(var6)(var3, var4);
                    var2['current'] = var3;
                    var2 = var2.current;
                    var _closure3_slot0 = var2;
                    var1 = function() {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                            var3 = _closure3_slot0;
                            var2 = null;
                            if(!(var2 != var3)) { _fun0007_ip = 22; continue _fun0007 }
case 23:
                            var2 = global;
                            var3 = var2.clearInterval;
                            var2 = _closure3_slot0;
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
case 22:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    return var1;
                }
            };
            var2 = var8.bind(var7)(var2, var6);
            if(!(var5 == var1)) { _fun0002_ip = 24; continue _fun0002 }
case 25:
            var6 = var5 == var3;
            var2 = null;
            if(var6) { _fun0002_ip = 26; continue _fun0002 }
case 27:
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var4 = 7;
            var4 = var8[var4];
            var6 = var6.bind(var7)(var4);
            var4 = var6.isQuestExpired;
            var4 = var4.bind(var6)(var3);
            var2 = null;
            if(var4) { _fun0002_ip = 26; continue _fun0002 }
case 28:
            var2 = var3;
case 26:
            var1 = var2;
case 24:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();