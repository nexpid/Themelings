// app/modules/activities/utils/useRefocusOrLaunchActivity.tsx
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
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
    var4 = var4.FrameLayoutModes;
    var _closure1_slot7 = var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activities/utils/useRefocusOrLaunchActivity.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useRefocusOrLaunchActivity(arg1) {
        var2 = arg1;
        var10 = var2.applicationId;
        var _closure2_slot0 = var10;
        var12 = var2.analyticsLocations;
        var _closure2_slot1 = var12;
        var5 = var2.runBeforeLaunchAttempt;
        var _closure2_slot2 = var5;
        var6 = var2.runAfterLaunchAttempt;
        var _closure2_slot3 = var6;
        var4 = _closure1_slot0;
        var9 = _closure1_slot2;
        var3 = 5;
        var3 = var9[var3];
        var13 = undefined;
        var7 = var4.bind(var13)(var3);
        var3 = var7.useApplication;
        var3 = var3.bind(var7)(var10);
        var11 = var3.data;
        var _closure2_slot4 = var11;
        var3 = 6;
        var7 = var9[var3];
        var15 = var4.bind(var13)(var7);
        var14 = var15.useStateFromStores;
        var7 = _closure1_slot6;
        var8 = new Array(1);
        var8[0] = var7;
        var7 = function() {
            var2 = _closure1_slot6;
            var1 = var2.getCurrentEmbeddedActivity;
            var1 = var1.bind(var2)();
            return var1;
        };
        var8 = var14.bind(var15)(var8, var7);
        var _closure2_slot5 = var8;
        var3 = var9[var3];
        var15 = var4.bind(var13)(var3);
        var14 = var15.useStateFromStores;
        var3 = _closure1_slot5;
        var7 = new Array(1);
        var7[0] = var3;
        var3 = function() {
            var2 = _closure1_slot5;
            var1 = var2.getConnectedFrame;
            var1 = var1.bind(var2)();
            return var1;
        };
        var7 = var14.bind(var15)(var7, var3);
        var _closure2_slot6 = var7;
        var3 = 7;
        var3 = var9[var3];
        var4 = var4.bind(var13)(var3);
        var3 = var4.useCanLaunchFrame;
        var9 = var3.bind(var4)(var11);
        var _closure2_slot7 = var9;
        var4 = _closure1_slot4;
        var3 = var4.useCallback;
        var2 = _closure1_slot3;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var2 = undefined;
                    var4 = undefined;
                    var9 = undefined;
                    var3 = _closure2_slot0;
                    var5 = null;
                    if(!(var5 != var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var3 = _closure2_slot4;
                    if(!(var5 != var3)) { _fun0001_ip = 4; continue _fun0001 }
case 6:
                    var3 = _closure2_slot5;
                    var3 = var5 != var3;
                    if(!var3) { _fun0001_ip = 7; continue _fun0001 }
case 8:
                    var6 = _closure2_slot5;
                    var8 = var6.applicationId;
                    var6 = _closure2_slot0;
                    var3 = var8 === var6;
case 7:
                    var6 = _closure2_slot6;
                    if(!(var5 != var6)) { _fun0001_ip = 9; continue _fun0001 }
case 10:
                    var6 = _closure2_slot6;
                    var8 = var6.applicationId;
                    var6 = _closure2_slot0;
                    if(!(var8 !== var6)) { _fun0001_ip = 11; continue _fun0001 }
case 9:
                    if(var3) { _fun0001_ip = 12; continue _fun0001 }
case 13:
                    var3 = _closure2_slot2;
                    if(!(var5 != var3)) { _fun0001_ip = 14; continue _fun0001 }
case 15:
                    var3 = _closure2_slot2;
                    var3 = var3.bind(var2)();
case 14: // try_start_0
                    var3 = _closure2_slot7;
                    if(var3) { _fun0001_ip = 16; continue _fun0001 }
case 17:
                    var3 = _closure2_slot4;
                    var6 = var5 == var3;
                    var3 = undefined;
                    if(var6) { _fun0001_ip = 18; continue _fun0001 }
case 19:
                    var6 = _closure2_slot4;
                    var6 = var6.bot;
                    var4 = var6;
                    var6 = var5 == var6;
                    var3 = undefined;
                    if(var6) { _fun0001_ip = 18; continue _fun0001 }
case 20:
                    var3 = var4.id;
case 18:
                    if(!(var5 != var3)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 10;
                    var3 = var6[var3];
                    var6 = var4.bind(var2)(var3);
                    var4 = var6.launchActivityInBotDM;
                    var3 = {};
                    var8 = _closure2_slot0;
                    var3['appId'] = var8;
                    var8 = _closure2_slot4;
                    var10 = var5 == var8;
                    var8 = undefined;
                    if(var10) { _fun0001_ip = 23; continue _fun0001 }
case 24:
                    var10 = _closure2_slot4;
                    var10 = var10.bot;
                    var9 = var10;
                    var10 = var5 == var10;
                    var8 = undefined;
                    if(var10) { _fun0001_ip = 23; continue _fun0001 }
case 25:
                    var8 = var9.id;
case 23:
                    var3['botId'] = var8;
                    var8 = _closure2_slot1;
                    if(!(var5 == var8)) { _fun0001_ip = 26; continue _fun0001 }
case 27:
                    var8 = new Array(0);
                    _fun0001_ip = 28; continue _fun0001;
case 26:
                    var8 = _closure2_slot1;
case 28:
                    var3['analyticsLocations'] = var8;
                    var3 = var4.bind(var6)(var3);
                    SaveGenerator(address=295);
case 29:
                    return var3;
case 30:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(!var4) { _fun0001_ip = 21; continue _fun0001 }
case 31: // try_end0
                    return var3;
case 16: // try_start_1
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = 8;
                    var3 = var6[var3];
                    var6 = var4.bind(var2)(var3);
                    var4 = var6.launchFrame;
                    var3 = {};
                    var8 = _closure2_slot0;
                    var3['applicationId'] = var8;
                    var3 = var4.bind(var6)(var3);
case 21: // try_end1
                    _fun0001_ip = 32; continue _fun0001;
case 33: // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=2);
case 32:
                    var3 = _closure2_slot3;
                    if(!(var5 != var3)) { _fun0001_ip = 4; continue _fun0001 }
case 34:
                    var3 = _closure2_slot3;
                    var3 = var3.bind(var2)();
                    _fun0001_ip = 4; continue _fun0001;
case 12:
                    var3 = _closure2_slot5;
                    var4 = var3.location;
                    var6 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var3 = 9;
                    var3 = var8[var3];
                    var3 = var6.bind(var2)(var3);
                    var6 = 'guild_id';
                    var6 = var6 in var4;
                    var5 = null;
                    if(!var6) { _fun0001_ip = 35; continue _fun0001 }
case 36:
                    var5 = var4.guild_id;
case 35:
                    var3 = var3.bind(var2)(var5, var4);
                    _fun0001_ip = 4; continue _fun0001;
case 11:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 8;
                    var3 = var5[var3];
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.updateFrameLayoutMode;
                    var3 = {};
                    var7 = _closure2_slot6;
                    var7 = var7.applicationId;
                    var3['applicationId'] = var7;
                    var6 = _closure1_slot7;
                    var6 = var6.FOCUSED;
                    var3['layoutMode'] = var6;
                    var3 = var4.bind(var5)(var3);
case 4:
                    return var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var2 = var2.bind(var13)(var1);
        var1 = new Array(8);
        var1[0] = var12;
        var1[1] = var11;
        var1[2] = var10;
        var1[3] = var9;
        var1[4] = var8;
        var1[5] = var7;
        var1[6] = var6;
        var1[7] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();