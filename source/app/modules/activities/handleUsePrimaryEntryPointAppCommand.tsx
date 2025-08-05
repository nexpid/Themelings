// app/modules/activities/handleUsePrimaryEntryPointAppCommand.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var1 = metroImportAll;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var6;
    var1 = function _handleUsePrimaryEntryPointAppCommand() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=5);
                    if(var6) { _fun0001_ip = 183; continue _fun0001 }
 15:
                    var3 = var2;
                    var _closure4_slot0 = var2;
                    var8 = undefined;
                    var _closure4_slot1 = var8;
                    var5 = undefined;
                    var6 = var2.targetApplicationId;
                    var2 = null;
                    if(!(var2 != var6)) { _fun0001_ip = 178; continue _fun0001 }
 45:
                    var2 = false;
                    var5 = false;
 49: // try_start_0
                    var9 = _closure1_slot1;
                    var10 = _closure1_slot3;
                    var7 = 3;
                    var7 = var10[var7];
                    var9 = var9.bind(var8)(var7);
                    var7 = var3.targetApplicationId;
                    var3 = var3.channelId;
                    var3 = var9.bind(var8)(var7, var3);
                    SaveGenerator(address=93);
 91:
                    return var3;
 93:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                    if(var7) { _fun0001_ip = 170; continue _fun0001 }
 99:
                    _closure4_slot1 = var3;
                    var10 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var9 = 4;
                    var7 = var7[var9];
                    var10 = var10.bind(var8)(var7);
                    var7 = var10.shouldOpenActivityInPopoutWindow;
                    var5 = var7.bind(var10)();
 133: // try_end0
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var6 = var6[var9];
                    var7 = var7.bind(var8)(var6);
                    var6 = var7.wrapPreemptiveActivityPopout;
                    var4 = function() {
                        var3 = {};
                        var4 = _closure4_slot0;
                        var5 = var3;
                        var2 = copyDataProperties(var5, var4);
                        var2 = _closure4_slot1;
                        var1 = 'targetApplication';
                        var3[var1] = var2;
                        var2 = function handleUsePrimaryEntryPointAppCommandInternal() {
                            var1 = undefined;
                            var4 = _closure1_slot8;
                            var3 = var4.apply;
                            var1 = arguments;
                            var2 = var1;
                            var1 = this;
                            var1 = var3.bind(var4)(var1, var2);
                            return var1;
                        };
                        var1 = undefined;
                        var1 = var2.bind(var1)(var3);
                        return var1;
                    };
                    var4 = var6.bind(var7)(var5, var4);
                    return var4;
 170:
                    return var3;
 173: // catch_target0
                    CatchBlockStart(arg_register=2);
                    return var2;
 178:
                    var2 = false;
                    return var2;
 183:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot7 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot7 = var1;
    var1 = function _handleUsePrimaryEntryPointAppCommandInternal() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0002_ip = 369; continue _fun0002 }
 13:
                    var21 = var2.targetApplication;
                    var16 = var2.locationObject;
                    var22 = var2.channelId;
                    var15 = var2.analyticsLocations;
                    var19 = var2.componentId;
                    var18 = var2.commandOrigin;
                    var17 = var2.sectionName;
                    var14 = var2.source;
                    var13 = var2.onExecutedCallback;
                    var12 = var2.referrerId;
                    var11 = var2.customId;
                    var10 = var2.inviterUserId;
                    var9 = var2.onConfirmActivityLaunchChecksAlertOpen;
                    var8 = undefined;
                    SaveGenerator(address=95);
 93:
                    return var8;
 95:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0002_ip = 366; continue _fun0002 }
 104:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var4 = 5;
                    var4 = var6[var4];
                    var4 = var5.bind(var8)(var4);
                    var20 = var4.bind(var8)();
                    var5 = _closure1_slot6;
                    var4 = var5.getCurrentUser;
                    var6 = var4.bind(var5)();
                    var7 = null;
                    var4 = var7 != var22;
                    if(!var4) { _fun0002_ip = 360; continue _fun0002 }
 156:
                    var23 = _closure1_slot5;
                    var5 = var23.getChannel;
                    var5 = var5.bind(var23)(var22);
                    var5 = var7 != var5;
                    if(!var5) { _fun0002_ip = 357; continue _fun0002 }
 180:
                    var6 = var7 != var6;
                    if(!var6) { _fun0002_ip = 191; continue _fun0002 }
 187:
                    var6 = var7 != var21;
 191:
                    if(!var6) { _fun0002_ip = 354; continue _fun0002 }
 197:
                    var24 = _closure1_slot2;
                    var23 = _closure1_slot3;
                    var7 = 6;
                    var7 = var23[var7];
                    var25 = var24.bind(var8)(var7);
                    var24 = var25.markActivityUsed;
                    var7 = var21.id;
                    var7 = var24.bind(var25)(var7);
                    var7 = _closure1_slot0;
                    var3 = 7;
                    var3 = var23[var3];
                    var8 = var7.bind(var8)(var3);
                    var7 = var8.runPrimaryAppCommandOrJoinEmbeddedActivity;
                    var3 = {};
                    var3['channelId'] = var22;
                    var21 = var21.id;
                    var3['applicationId'] = var21;
                    var21 = true;
                    var3['isStart'] = var21;
                    var3['embeddedActivitiesManager'] = var20;
                    var3['componentId'] = var19;
                    var3['commandOrigin'] = var18;
                    var3['sectionName'] = var17;
                    var3['locationObject'] = var16;
                    var3['analyticsLocations'] = var15;
                    var3['source'] = var14;
                    var3['onExecutedCallback'] = var13;
                    var3['referrerId'] = var12;
                    var3['customId'] = var11;
                    var3['inviterUserId'] = var10;
                    var3['onConfirmActivityLaunchChecksAlertOpen'] = var9;
                    var3 = var7.bind(var8)(var3);
                    SaveGenerator(address=345);
 343:
                    return var3;
 345:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                    var6 = var3;
                    if(var7) { _fun0002_ip = 363; continue _fun0002 }
 354:
                    var5 = var6;
 357:
                    var4 = var5;
 360:
                    return var4;
 363:
                    return var3;
 366:
                    return var2;
 369:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot8 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot8 = var1;
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activities/handleUsePrimaryEntryPointAppCommand.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function handleUsePrimaryEntryPointAppCommand() {
        var1 = undefined;
        var4 = _closure1_slot7;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();