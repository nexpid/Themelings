// app/modules/notification_center/useNotificationCenterItemsLoader.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var7;
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
    var4 = var5.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var8 = var7[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.ReadStateTypes;
    var _closure1_slot9 = var4;
    var4 = function useNotificationCenterItemsLoader(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var17 = var1.isFocused;
            var _closure2_slot0 = var17;
            var21 = var1.navigatedAway;
            var _closure2_slot1 = var21;
            var20 = var1.isDesktop;
            var _closure2_slot2 = var20;
            var14 = var1.withMentions;
            var5 = undefined;
            if(!(var14 === var5)) { _fun0001_ip = 49; continue _fun0001 }
 47:
            var14 = false;
 49:
            var _closure2_slot3 = var14;
            var1 = var1.initialPageSize;
            var _closure2_slot4 = var1;
            var _closure2_slot5 = var5;
            var _closure2_slot6 = var5;
            var _closure2_slot7 = var5;
            var _closure2_slot8 = var5;
            var _closure2_slot9 = var5;
            var _closure2_slot10 = var5;
            var _closure2_slot11 = var5;
            var _closure2_slot12 = var5;
            var _closure2_slot13 = var5;
            var _closure2_slot14 = var5;
            var _closure2_slot15 = var5;
            var13 = _closure1_slot0;
            var19 = _closure1_slot2;
            var12 = 7;
            var2 = var19[var12];
            var7 = var13.bind(var5)(var2);
            var6 = var7.useStateFromStores;
            var2 = _closure1_slot8;
            var4 = new Array(1);
            var4[0] = var2;
            var2 = function() {
                var2 = _closure1_slot8;
                var1 = var2.shouldReload;
                var1 = var1.bind(var2)();
                return var1;
            };
            var18 = var6.bind(var7)(var4, var2);
            _closure2_slot5 = var18;
            var11 = _closure1_slot5;
            var2 = var11.useRef;
            var4 = false;
            var2 = var2.bind(var11)(var4);
            _closure2_slot6 = var2;
            var2 = var11.useState;
            var6 = var2.bind(var11)(var4);
            var4 = _closure1_slot4;
            var2 = 2;
            var6 = var4.bind(var5)(var6, var2);
            var2 = 0;
            var4 = var6[var2];
            var2 = 1;
            var2 = var6[var2];
            _closure2_slot7 = var2;
            var2 = var19[var12];
            var8 = var13.bind(var5)(var2);
            var7 = var8.useStateFromStoresObject;
            var2 = _closure1_slot7;
            var6 = new Array(1);
            var6[0] = var2;
            var2 = function() {
                var1 = {};
                var2 = _closure1_slot7;
                var3 = var2.initialized;
                var1['initialized'] = var3;
                var3 = var2.loading;
                var1['loading'] = var3;
                var3 = var2.items;
                var1['items'] = var3;
                var3 = var2.hasMore;
                var1['hasMore'] = var3;
                var3 = var2.cursor;
                var1['cursor'] = var3;
                var2 = var2.errored;
                var1['errored'] = var2;
                return var1;
            };
            var2 = var7.bind(var8)(var6, var2);
            var9 = var2.initialized;
            _closure2_slot8 = var9;
            var8 = var2.loading;
            var7 = var2.items;
            _closure2_slot9 = var7;
            var6 = var2.hasMore;
            _closure2_slot10 = var6;
            var15 = var2.cursor;
            _closure2_slot11 = var15;
            var2 = var2.errored;
            _closure2_slot12 = var2;
            var12 = var19[var12];
            var22 = var13.bind(var5)(var12);
            var16 = var22.useStateFromStoresObject;
            var12 = _closure1_slot6;
            var13 = new Array(1);
            var13[0] = var12;
            var12 = function() {
                var1 = {};
                var2 = _closure1_slot6;
                var3 = var2.everyoneFilter;
                var1['everyoneFilter'] = var3;
                var2 = var2.roleFilter;
                var1['roleFilter'] = var2;
                return var1;
            };
            var12 = var16.bind(var22)(var13, var12);
            var13 = var12.roleFilter;
            _closure2_slot13 = var13;
            var12 = var12.everyoneFilter;
            _closure2_slot14 = var12;
            var23 = var11.useEffect;
            var22 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 8;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.setNotificationCenterActive;
                var1 = true;
                var1 = var2.bind(var3)(var1);
                var1 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 8;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.setNotificationCenterActive;
                    var1 = false;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                return var1;
            };
            var16 = new Array(0);
            var16 = var23.bind(var11)(var22, var16);
            var23 = var11.useEffect;
            var22 = new Array(2);
            var22[0] = var17;
            var22[1] = var9;
            var16 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = _closure2_slot8;
                    if(!var1) { _fun0002_ip = 14; continue _fun0002 }
 10:
                    var1 = _closure2_slot0;
 14:
                    if(!var1) { _fun0002_ip = 63; continue _fun0002 }
 17:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 9;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.ackUserFeature;
                    var1 = _closure1_slot9;
                    var1 = var1.NOTIFICATION_CENTER;
                    var1 = var2.bind(var3)(var1);
 63:
                    var1 = undefined;
                    return var1;
                }
            };
            var16 = var23.bind(var11)(var16, var22);
            var16 = _closure1_slot1;
            var10 = 10;
            var10 = var19[var10];
            var10 = var16.bind(var5)(var10);
            var10 = var10.bind(var5)();
            _closure2_slot15 = var10;
            var19 = var11.useEffect;
            var16 = new Array(5);
            var16[0] = var21;
            var16[1] = var7;
            var16[2] = var20;
            var16[3] = var10;
            var16[4] = var2;
            var10 = function() {
                var1 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var1 = _closure2_slot2;
                        if(var1) { _fun0003_ip = 73; continue _fun0003 }
 10:
                        var1 = _closure2_slot1;
                        if(!var1) { _fun0003_ip = 33; continue _fun0003 }
 17:
                        var2 = _closure2_slot9;
                        var3 = var2.length;
                        var2 = 100;
                        var1 = var3 > var2;
 33:
                        if(!var1) { _fun0003_ip = 151; continue _fun0003 }
 36:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 8;
                        var2 = var2[var1];
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        var1 = var2.resetNotificationCenter;
                        var1 = var1.bind(var2)();
                        _fun0003_ip = 151; continue _fun0003;
 73:
                        var1 = _closure2_slot15;
                        var3 = undefined;
                        var1 = var1.bind(var3)();
                        var1 = !var1;
                        if(!var1) { _fun0003_ip = 115; continue _fun0003 }
 89:
                        var2 = _closure2_slot12;
                        if(var2) { _fun0003_ip = 112; continue _fun0003 }
 96:
                        var4 = _closure2_slot9;
                        var5 = var4.length;
                        var4 = 100;
                        var2 = var5 > var4;
 112:
                        var1 = var2;
 115:
                        if(!var1) { _fun0003_ip = 151; continue _fun0003 }
 118:
                        var2 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 8;
                        var1 = var4[var1];
                        var2 = var2.bind(var3)(var1);
                        var1 = var2.resetNotificationCenter;
                        var1 = var1.bind(var2)();
 151:
                        var1 = undefined;
                        return var1;
                    }
                };
                return var1;
            };
            var10 = var19.bind(var11)(var10, var16);
            var16 = var11.useEffect;
            var10 = new Array(7);
            var10[0] = var9;
            var10[1] = var18;
            var10[2] = var17;
            var10[3] = var14;
            var10[4] = var13;
            var10[5] = var12;
            var10[6] = var1;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var1 = _closure2_slot8;
                    var1 = !var1;
                    if(var1) { _fun0004_ip = 27; continue _fun0004 }
 13:
                    var2 = _closure2_slot5;
                    if(!var2) { _fun0004_ip = 24; continue _fun0004 }
 20:
                    var2 = _closure2_slot0;
 24:
                    var1 = var2;
 27:
                    if(!var1) { _fun0004_ip = 128; continue _fun0004 }
 30:
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var6 = 8;
                    var2 = var1[var6];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.fetchNotificationCenterItems;
                    var1 = {};
                    var7 = _closure2_slot4;
                    var5 = null;
                    if(!(var5 == var7)) { _fun0004_ip = 88; continue _fun0004 }
 73:
                    var7 = _closure2_slot3;
                    var5 = 20;
                    if(!var7) { _fun0004_ip = 86; continue _fun0004 }
 83:
                    var5 = var6;
 86:
                    _fun0004_ip = 92; continue _fun0004;
 88:
                    var5 = _closure2_slot4;
 92:
                    var1['limit'] = var5;
                    var5 = _closure2_slot3;
                    var1['with_mentions'] = var5;
                    var5 = _closure2_slot13;
                    var1['roles_filter'] = var5;
                    var4 = _closure2_slot14;
                    var1['everyone_filter'] = var4;
                    var1 = var2.bind(var3)(var1);
 128:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var16.bind(var11)(var1, var10);
            var10 = var11.useCallback;
            var1 = function() {
                var4 = _closure1_slot3;
                var3 = undefined;
                var2 = function* (arg1) {
                    var1 = function* anon_0_(arg1) {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0005_ip = 229; continue _fun0005 }
 10:
                            var2 = _closure2_slot6;
                            var2 = var2.current;
                            if(var2) { _fun0005_ip = 32; continue _fun0005 }
 25:
                            var4 = _closure2_slot8;
                            var2 = !var4;
 32:
                            if(var2) { _fun0005_ip = 42; continue _fun0005 }
 35:
                            var4 = _closure2_slot10;
                            var2 = !var4;
 42:
                            if(var2) { _fun0005_ip = 55; continue _fun0005 }
 45:
                            var5 = _closure2_slot11;
                            var4 = null;
                            var2 = var4 == var5;
 55:
                            if(var2) { _fun0005_ip = 74; continue _fun0005 }
 58:
                            var4 = arg1;
                            var4 = !var4;
                            if(!var4) { _fun0005_ip = 71; continue _fun0005 }
 67:
                            var4 = _closure2_slot12;
 71:
                            var2 = var4;
 74:
                            if(var2) { _fun0005_ip = 224; continue _fun0005 }
 80:
                            var2 = _closure2_slot6;
                            var4 = true;
                            var2['current'] = var4;
                            var2 = _closure2_slot7;
                            var5 = undefined;
                            var2 = var2.bind(var5)(var4);
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var8 = 8;
                            var2 = var2[var8];
                            var7 = var4.bind(var5)(var2);
                            var6 = var7.fetchNotificationCenterItems;
                            var4 = {};
                            var2 = _closure2_slot11;
                            var4['after'] = var2;
                            var9 = _closure2_slot3;
                            var4['with_mentions'] = var9;
                            var2 = _closure2_slot13;
                            var4['roles_filter'] = var2;
                            var2 = _closure2_slot14;
                            var4['everyone_filter'] = var2;
                            var2 = 20;
                            if(!var9) { _fun0005_ip = 179; continue _fun0005 }
 176:
                            var2 = var8;
 179:
                            var4['limit'] = var2;
                            var2 = function() {
                                var2 = _closure2_slot6;
                                var1 = false;
                                var2['current'] = var1;
                                var1 = undefined;
                                return var1;
                            };
                            var2 = var6.bind(var7)(var4, var2);
                            SaveGenerator(address=202);
 200:
                            return var2;
 202:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                            if(var4) { _fun0005_ip = 221; continue _fun0005 }
 208:
                            var4 = _closure2_slot7;
                            var3 = false;
                            var3 = var4.bind(var5)(var3);
                            _fun0005_ip = 224; continue _fun0005;
 221:
                            return var2;
 224:
                            var2 = undefined;
                            return var2;
 229:
                            return var1;
                        }
                    };
                    return var1;
                };
                var2 = var4.bind(var3)(var2);
                var _closure3_slot0 = var2;
                var1 = function() {
                    var1 = undefined;
                    var4 = _closure3_slot0;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                return var1;
            };
            var5 = var1.bind(var5)();
            var1 = new Array(7);
            var1[0] = var9;
            var1[1] = var6;
            var1[2] = var15;
            var1[3] = var2;
            var1[4] = var14;
            var1[5] = var13;
            var1[6] = var12;
            var5 = var10.bind(var11)(var5, var1);
            var1 = {};
            var1['initialized'] = var9;
            var1['loading'] = var8;
            var1['items'] = var7;
            var1['hasMore'] = var6;
            var1['loadMore'] = var5;
            var1['loadingMore'] = var4;
            var3 = function setReadNotifItemToAcked(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var2 = arg1;
                    var1 = var2.acked;
                    if(var1) { _fun0006_ip = 20; continue _fun0006 }
 12:
                    var1 = true;
                    var2['acked'] = var1;
 20:
                    var1 = undefined;
                    return var1;
                }
            };
            var1['setReadNotifItemToAcked'] = var3;
            var1['errored'] = var2;
            return var1;
        }
    };
    var _closure1_slot10 = var4;
    var5 = 11;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/notification_center/useNotificationCenterItemsLoader.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = 8;
    var3['PAGE_SIZE_WITH_MENTIONS'] = var5;
    var5 = 20;
    var3['PAGE_SIZE'] = var5;
    var3['useNotificationCenterItemsLoader'] = var4;
    var2 = function() {
        var3 = _closure1_slot10;
        var2 = undefined;
        var1 = {'isFocused': true, 'isDesktop': true};
        var1 = var3.bind(var2)(var1);
        var5 = var1.initialized;
        var4 = var1.loading;
        var6 = var1.items;
        var3 = var1.hasMore;
        var2 = var1.loadMore;
        var1 = {};
        var1['initialized'] = var5;
        var1['loading'] = var4;
        var5 = var6.filter;
        var4 = function(arg1) {
            var1 = arg1;
            var2 = var1.kind;
            var1 = 'notification-center-item';
            var1 = var1 === var2;
            return var1;
        };
        var4 = var5.bind(var6)(var4);
        var1['items'] = var4;
        var1['hasMore'] = var3;
        var1['loadMore'] = var2;
        return var1;
    };
    var3['useDesktopNotificationCenterItemsLoader'] = var2;
    return var1;
})();