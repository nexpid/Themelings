// app/modules/voice_panel/native/controls/activities/ActivityItemMissingCard.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = function ActivityItemEmptyCard(arg1) {
        var2 = arg1;
        var3 = var2.activity;
        var _closure2_slot0 = var3;
        var9 = var2.application;
        var _closure2_slot1 = var9;
        var2 = _closure1_slot8;
        var4 = undefined;
        var5 = var2.bind(var4)();
        var10 = _closure1_slot4;
        var8 = var10.useContext;
        var7 = _closure1_slot1;
        var11 = _closure1_slot2;
        var2 = 6;
        var2 = var11[var2];
        var2 = var7.bind(var4)(var2);
        var2 = var8.bind(var10)(var2);
        var10 = var2.channelId;
        var _closure2_slot2 = var10;
        var8 = var2.layoutManager;
        var2 = var8.getTargetDimensions;
        var2 = var2.bind(var8)(var4);
        var14 = var2.width;
        var13 = var2.height;
        var2 = 7;
        var2 = var11[var2];
        var2 = var7.bind(var4)(var2);
        var2 = var2.bind(var4)();
        var15 = var2.analyticsLocations;
        var _closure2_slot3 = var15;
        var12 = _closure1_slot4;
        var8 = var12.useCallback;
        var2 = _closure1_slot3;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 8;
                    var2 = var3[var2];
                    var3 = undefined;
                    var5 = var4.bind(var3)(var2);
                    var4 = var5.maybeJoinEmbeddedActivity;
                    var2 = {};
                    var7 = _closure2_slot2;
                    var2['channelId'] = var7;
                    var7 = _closure2_slot1;
                    var8 = var7.id;
                    var2['applicationId'] = var8;
                    var8 = _closure2_slot0;
                    var8 = var8.launchId;
                    var2['launchId'] = var8;
                    var2['inputApplication'] = var7;
                    var6 = _closure2_slot3;
                    var2['analyticsLocations'] = var6;
                    var2 = var4.bind(var5)(var2);
                    SaveGenerator(address=102);
case 4:
                    return var2;
case 5:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    return var3;
case 6:
                    return var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var2 = var2.bind(var4)(var1);
        var16 = var3.launchId;
        var1 = new Array(4);
        var1[0] = var16;
        var1[1] = var15;
        var1[2] = var9;
        var1[3] = var10;
        var8 = var8.bind(var12)(var2, var1);
        var1 = 9;
        var1 = var11[var1];
        var2 = var7.bind(var4)(var1);
        var1 = {};
        var3 = var3.applicationId;
        var1['applicationId'] = var3;
        var1['size'] = var14;
        var3 = ['embedded_background'];
        var1['names'] = var3;
        var15 = var2.bind(var4)(var1);
        var3 = _closure1_slot7;
        var2 = _closure1_slot0;
        var1 = 10;
        var1 = var11[var1];
        var1 = var2.bind(var4)(var1);
        var2 = var1.PressableOpacity;
        var1 = {};
        var12 = 0.7;
        var1['activeOpacity'] = var12;
        var1['onPress'] = var8;
        var5 = var5.disabledActivity;
        var1['style'] = var5;
        var12 = _closure1_slot6;
        var5 = 11;
        var5 = var11[var5];
        var8 = var7.bind(var4)(var5);
        var5 = {};
        var5['imageBackground'] = var15;
        var13 = var14 / var13;
        var5['aspectRatio'] = var13;
        var8 = var12.bind(var4)(var8, var5);
        var5 = new Array(2);
        var5[0] = var8;
        var8 = _closure1_slot6;
        var6 = 12;
        var6 = var11[var6];
        var7 = var7.bind(var4)(var6);
        var6 = {};
        var6['channelId'] = var10;
        var10 = var9.id;
        var6['applicationId'] = var10;
        var9 = var9.name;
        var6['applicationName'] = var9;
        var6 = var8.bind(var4)(var7, var6);
        var5[1] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot9 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var12.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ActivityIndicator;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot6 = var8;
    var4 = var4.jsxs;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {'width': '100%', 'height': '100%', 'alignItems': 'center', 'justifyContent': 'center'};
    var11 = 5;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_SECONDARY;
    var10['backgroundColor'] = var13;
    var4['loadingActivity'] = var10;
    var10 = {'width': '100%', 'height': '100%'};
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_SECONDARY;
    var10['backgroundColor'] = var11;
    var4['disabledActivity'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot8 = var4;
    var4 = var7.memo;
    var2 = function ActivityItemMissingCard(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var8 = var1.activity;
            var4 = var1.application;
            var1 = _closure1_slot8;
            var5 = undefined;
            var7 = var1.bind(var5)();
            var1 = null;
            if(!(var1 != var8)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            if(!(var1 != var4)) { _fun0002_ip = 8; continue _fun0002 }
case 10:
            var3 = _closure1_slot6;
            var2 = _closure1_slot9;
            var1 = {};
            var1['activity'] = var8;
            var1['application'] = var4;
            var1 = var3.bind(var5)(var2, var1);
            _fun0002_ip = 11; continue _fun0002;
case 8:
            var4 = _closure1_slot6;
            var3 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 13;
            var2 = var8[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var7 = var7.loadingActivity;
            var2['style'] = var7;
            var8 = _closure1_slot6;
            var7 = _closure1_slot5;
            var6 = {};
            var9 = 'large';
            var6['size'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 11:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_panel/native/controls/activities/ActivityItemMissingCard.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();