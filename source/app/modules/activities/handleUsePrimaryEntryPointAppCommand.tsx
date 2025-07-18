// app/modules/activities/handleUsePrimaryEntryPointAppCommand.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var1 = native4;
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
                    var7 = 4;
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
                    var9 = 5;
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
                            var4 = _closure1_slot9;
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
        _closure1_slot8 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot8 = var1;
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
                    if(var3) { _fun0002_ip = 425; continue _fun0002 }
 13:
                    var8 = var2.targetApplication;
                    var18 = var2.locationObject;
                    var23 = var2.channelId;
                    var17 = var2.analyticsLocations;
                    var21 = var2.componentId;
                    var20 = var2.commandOrigin;
                    var19 = var2.sectionName;
                    var16 = var2.source;
                    var15 = var2.onExecutedCallback;
                    var14 = var2.referrerId;
                    var13 = var2.customId;
                    var12 = var2.inviterUserId;
                    var11 = var2.onConfirmActivityLaunchChecksAlertOpen;
                    var7 = undefined;
                    SaveGenerator(address=95);
 93:
                    return var7;
 95:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0002_ip = 422; continue _fun0002 }
 104:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var3 = 6;
                    var3 = var6[var3];
                    var3 = var5.bind(var7)(var3);
                    var22 = var3.bind(var7)();
                    var5 = _closure1_slot6;
                    var3 = var5.getCurrentUser;
                    var6 = var3.bind(var5)();
                    var5 = null;
                    if(!(var5 != var23)) { _fun0002_ip = 359; continue _fun0002 }
 153:
                    var9 = _closure1_slot5;
                    var3 = var9.getChannel;
                    var3 = var3.bind(var9)(var23);
                    var3 = var5 != var3;
                    if(!var3) { _fun0002_ip = 354; continue _fun0002 }
 177:
                    var6 = var5 != var6;
                    if(!var6) { _fun0002_ip = 188; continue _fun0002 }
 184:
                    var6 = var5 != var8;
 188:
                    if(!var6) { _fun0002_ip = 351; continue _fun0002 }
 194:
                    var9 = _closure1_slot2;
                    var10 = _closure1_slot3;
                    var5 = 8;
                    var5 = var10[var5];
                    var24 = var9.bind(var7)(var5);
                    var9 = var24.markActivityUsed;
                    var5 = var8.id;
                    var5 = var9.bind(var24)(var5);
                    var9 = _closure1_slot0;
                    var5 = 9;
                    var5 = var10[var5];
                    var10 = var9.bind(var7)(var5);
                    var9 = var10.runPrimaryAppCommandOrJoinEmbeddedActivity;
                    var5 = {};
                    var5['channelId'] = var23;
                    var23 = var8.id;
                    var5['applicationId'] = var23;
                    var23 = true;
                    var5['isStart'] = var23;
                    var5['embeddedActivitiesManager'] = var22;
                    var5['componentId'] = var21;
                    var5['commandOrigin'] = var20;
                    var5['sectionName'] = var19;
                    var5['locationObject'] = var18;
                    var5['analyticsLocations'] = var17;
                    var5['source'] = var16;
                    var5['onExecutedCallback'] = var15;
                    var5['referrerId'] = var14;
                    var5['customId'] = var13;
                    var5['inviterUserId'] = var12;
                    var5['onConfirmActivityLaunchChecksAlertOpen'] = var11;
                    var5 = var9.bind(var10)(var5);
                    SaveGenerator(address=342);
 340:
                    return var5;
 342:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=8);
                    var6 = var5;
                    if(var9) { _fun0002_ip = 356; continue _fun0002 }
 351:
                    var3 = var6;
 354:
                    _fun0002_ip = 419; continue _fun0002;
 356:
                    return var5;
 359:
                    var6 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var5 = 7;
                    var5 = var9[var5];
                    var5 = var6.bind(var7)(var5);
                    var7 = var5.ComponentDispatch;
                    var6 = var7.dispatch;
                    var4 = _closure1_slot7;
                    var5 = var4.SHOW_ACTIVITIES_CHANNEL_SELECTOR;
                    var4 = {};
                    var8 = var8.id;
                    var4['applicationId'] = var8;
                    var4 = var6.bind(var7)(var5, var4);
                    var3 = false;
 419:
                    return var3;
 422:
                    return var2;
 425:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot9 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot9 = var1;
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
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ComponentActions;
    var _closure1_slot7 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activities/handleUsePrimaryEntryPointAppCommand.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function handleUsePrimaryEntryPointAppCommand() {
        var1 = undefined;
        var4 = _closure1_slot8;
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