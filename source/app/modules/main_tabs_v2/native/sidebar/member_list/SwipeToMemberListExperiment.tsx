// app/modules/main_tabs_v2/native/sidebar/member_list/SwipeToMemberListExperiment.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var8;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var1 = 0;
    var4 = var8[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var10 = var4.CommonTriggerPoints;
    var4 = 1;
    var5 = var8[var4];
    var9 = var7.bind(var1)(var5);
    var6 = var9.createExperiment;
    var5 = {'kind': 'user', 'id': '2024-12_swipe_to_view_memberlist', 'label': 'Swipe to view member list'};
    var11 = {};
    var11['defaultValue'] = var1;
    var5['defaultConfig'] = var11;
    var11 = var10.CONNECTION_OPEN_MOBILE;
    var5['commonTriggerPoint'] = var11;
    var13 = {'id': 1, 'label': 'Swipe to view member list is default'};
    var11 = {};
    var12 = 2;
    var14 = var8[var12];
    var14 = var7.bind(var1)(var14);
    var14 = var14.SwipeRightToLeftMode;
    var14 = var14.SWIPE_RIGHT_TO_LEFT_CHANNEL_DETAILS;
    var11['defaultValue'] = var14;
    var13['config'] = var11;
    var11 = new Array(1);
    var11[0] = var13;
    var5['treatments'] = var11;
    var5 = var6.bind(var9)(var5);
    var _closure1_slot2 = var5;
    var4 = var8[var4];
    var9 = var7.bind(var1)(var4);
    var6 = var9.createExperiment;
    var4 = {'kind': 'user', 'id': '2025-04_swipe_to_view_memberlist_2', 'label': 'Swipe to view member list 2'};
    var11 = {};
    var11['defaultValue'] = var1;
    var4['defaultConfig'] = var11;
    var10 = var10.CONNECTION_OPEN_MOBILE;
    var4['commonTriggerPoint'] = var10;
    var11 = {'id': 1, 'label': 'Swipe to view member list is default'};
    var10 = {};
    var12 = var8[var12];
    var12 = var7.bind(var1)(var12);
    var12 = var12.SwipeRightToLeftMode;
    var12 = var12.SWIPE_RIGHT_TO_LEFT_CHANNEL_DETAILS;
    var10['defaultValue'] = var12;
    var11['config'] = var10;
    var10 = new Array(1);
    var10[0] = var11;
    var4['treatments'] = var10;
    var4 = var6.bind(var9)(var4);
    var _closure1_slot3 = var4;
    var6 = 3;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/main_tabs_v2/native/sidebar/member_list/SwipeToMemberListExperiment.tsx';
    var6 = var7.bind(var8)(var6);
    var3['SwipeToMemberListExperiment'] = var5;
    var3['SwipeToMemberList2Experiment'] = var4;
    var4 = function useSwipeActionDefaultValue() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = _closure1_slot2;
            var3 = var4.useExperiment;
            var1 = {};
            var6 = 'hook';
            var1['location'] = var6;
            var1 = var3.bind(var4)(var1);
            var4 = var1.defaultValue;
            var5 = _closure1_slot3;
            var3 = var5.useExperiment;
            var1 = {};
            var1['location'] = var6;
            var1 = var3.bind(var5)(var1);
            var1 = var1.defaultValue;
            var3 = null;
            if(!(var3 != var4)) { _fun0001_ip = 70; continue _fun0001 }
 67:
            var1 = var4;
 70:
            if(!(var3 == var1)) { _fun0001_ip = 108; continue _fun0001 }
 74:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 2;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var2 = var2.SwipeRightToLeftMode;
            var1 = var2.SWIPE_RIGHT_TO_LEFT_REPLY;
 108:
            return var1;
        }
    };
    var3['useSwipeActionDefaultValue'] = var4;
    var2 = function getSwipeActionDefaultValue() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var4 = _closure1_slot2;
            var3 = var4.getCurrentConfig;
            var1 = {};
            var7 = 'getter';
            var1['location'] = var7;
            var1 = var3.bind(var4)(var1);
            var1 = var1.defaultValue;
            var3 = null;
            if(!(var3 == var1)) { _fun0002_ip = 67; continue _fun0002 }
 40:
            var6 = _closure1_slot3;
            var5 = var6.getCurrentConfig;
            var4 = {};
            var4['location'] = var7;
            var4 = var5.bind(var6)(var4);
            var1 = var4.defaultValue;
 67:
            if(!(var3 == var1)) { _fun0002_ip = 105; continue _fun0002 }
 71:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 2;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var2 = var2.SwipeRightToLeftMode;
            var1 = var2.SWIPE_RIGHT_TO_LEFT_REPLY;
 105:
            return var1;
        }
    };
    var3['getSwipeActionDefaultValue'] = var2;
    return var1;
})();