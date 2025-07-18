// app/modules/applications/AppDMsUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _openAndLaunchAppDM() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    var4 = arg1;
                    var8 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 737; continue _fun0001 }
 18:
                    var12 = var4;
                    var2 = var8;
                    var _closure4_slot0 = var8;
                    var9 = arg3;
                    var3 = undefined;
                    var10 = undefined;
                    var13 = undefined;
                    var5 = undefined;
                    var11 = undefined;
                    var6 = var4.id;
                    var6 = var8.bind(var3)(var6);
                    var4 = var4.bot;
                    var10 = var4;
                    var6 = null;
                    if(!(var6 == var4)) { _fun0001_ip = 196; continue _fun0001 }
 69: // try_start_0
                    var15 = _closure1_slot6;
                    var14 = var15.getApplication;
                    var4 = var12;
                    var4 = var4.id;
                    var4 = var14.bind(var15)(var4);
                    var13 = var4;
                    var14 = var6 == var4;
                    var4 = undefined;
                    if(var14) { _fun0001_ip = 113; continue _fun0001 }
 107:
                    var4 = var13.bot;
 113:
                    var10 = var4;
                    if(!(var6 == var4)) { _fun0001_ip = 196; continue _fun0001 }
 120:
                    var13 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var4 = 5;
                    var4 = var14[var4];
                    var14 = var13.bind(var3)(var4);
                    var13 = var14.fetchApplication;
                    var4 = var12;
                    var4 = var4.id;
                    var4 = var13.bind(var14)(var4);
                    SaveGenerator(address=163);
 161:
                    return var4;
 163:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=12);
                    if(var13) { _fun0001_ip = 722; continue _fun0001 }
 172:
                    var12 = var4;
                    var13 = _closure1_slot4;
                    var8 = var13.createFromServer;
                    var8 = var8.bind(var13)(var4);
                    var10 = var8.bot;
 196: // try_end0
                    var8 = var10;
                    if(!(var6 == var8)) { _fun0001_ip = 216; continue _fun0001 }
 203:
                    var8 = var2;
                    var8 = var8.bind(var3)(var3);
                    _fun0001_ip = 690; continue _fun0001;
 216:
                    var15 = _closure1_slot5;
                    var14 = var15.getDMFromUserId;
                    var13 = var10;
                    var13 = var13.id;
                    var13 = var14.bind(var15)(var13);
                    var5 = var6 == var13;
                    var11 = undefined;
 248: // try_start_1
                    var14 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var13 = 6;
                    var13 = var15[var13];
                    var14 = var14.bind(var3)(var13);
                    var13 = var14.shouldOpenActivityInPopoutWindow;
                    var13 = var13.bind(var14)();
                    var17 = _closure1_slot1;
                    var18 = _closure1_slot2;
                    var14 = 7;
                    var14 = var18[var14];
                    var15 = var17.bind(var3)(var14);
                    if(var13) { _fun0001_ip = 376; continue _fun0001 }
 301:
                    var14 = var15.openPrivateChannel;
                    var13 = {};
                    var16 = var10;
                    var19 = var16.id;
                    var16 = new Array(1);
                    var16[0] = var19;
                    var13['recipientIds'] = var16;
                    var16 = 8;
                    var16 = var18[var16];
                    var16 = var17.bind(var3)(var16);
                    var16 = var16.APP_DMS_QUICK_LAUNCHER;
                    var13['location'] = var16;
                    var14 = var14.bind(var15)(var13);
                    SaveGenerator(address=361);
 359:
                    return var14;
 361:
                    ResumeGenerator(result_out_reg=13, return_bool_out_reg=12);
                    var16 = var13;
                    var13 = var14;
                    if(!var16) { _fun0001_ip = 405; continue _fun0001 }
 373: // try_end1
                    return var14;
 376: // try_start_2
                    var14 = var15.getOrEnsurePrivateChannel;
                    var10 = var10.id;
                    var10 = var14.bind(var15)(var10);
                    SaveGenerator(address=396);
 394:
                    return var10;
 396:
                    ResumeGenerator(result_out_reg=9, return_bool_out_reg=13);
                    var13 = var10;
                    if(var14) { _fun0001_ip = 410; continue _fun0001 }
 405:
                    var11 = var13;
 408: // try_end2
                    _fun0001_ip = 423; continue _fun0001;
 410:
                    return var10;
 413: // catch_target1 // catch_target2
                    CatchBlockStart(arg_register=9);
                    var10 = var2;
                    var10 = var10.bind(var3)(var3);
 423:
                    var13 = _closure1_slot1;
                    var14 = _closure1_slot2;
                    var10 = 9;
                    var10 = var14[var10];
                    var15 = var13.bind(var3)(var10);
                    var14 = var15.track;
                    var10 = _closure1_slot7;
                    var13 = var10.APP_DMS_QUICK_LAUNCHER_CLICKED;
                    var10 = {};
                    var16 = var12;
                    var16 = var16.id;
                    var10['application_id'] = var16;
                    var10['is_new_dm'] = var5;
                    var5 = var11;
                    var10['channel_id'] = var5;
                    var10 = var14.bind(var15)(var13, var10);
                    if(!(var6 != var5)) { _fun0001_ip = 709; continue _fun0001 }
 500: // try_start_3
                    var6 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var5 = 10;
                    var5 = var10[var5];
                    var10 = var6.bind(var3)(var5);
                    var6 = var11;
                    var5 = var12;
                    var5 = var5.id;
                    var5 = var10.bind(var3)(var6, var5);
                    SaveGenerator(address=541);
 539:
                    return var5;
 541:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                    if(var6) { _fun0001_ip = 549; continue _fun0001 }
 547: // try_end3
                    _fun0001_ip = 589; continue _fun0001;
 549:
                    return var5;
 552: // catch_target3
                    CatchBlockStart(arg_register=4);
                    var6 = var5.message;
                    var10 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var5 = 10;
                    var5 = var13[var5];
                    var5 = var10.bind(var3)(var5);
                    var5 = var5.NO_PRIMARY_APP_COMMAND_ERROR;
                    if(!(var6 !== var5)) { _fun0001_ip = 696; continue _fun0001 }
 589:
                    var6 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var5 = 11;
                    var5 = var10[var5];
                    var6 = var6.bind(var3)(var5);
                    var5 = {};
                    var12 = var12.id;
                    var5['targetApplicationId'] = var12;
                    var5['channelId'] = var11;
                    var5['analyticsLocations'] = var9;
                    var9 = _closure1_slot0;
                    var8 = 12;
                    var8 = var10[var8];
                    var8 = var9.bind(var3)(var8);
                    var8 = var8.CommandOrigin;
                    var8 = var8.APP_DMS_ENTRY_POINT_COMMAND_BUTTON;
                    var5['commandOrigin'] = var8;
                    var7 = function onExecutedCallback() {
                        var2 = _closure4_slot0;
                        var1 = undefined;
                        var2 = var2.bind(var1)(var1);
                        return var1;
                    };
                    var5['onExecutedCallback'] = var7;
                    var5 = var6.bind(var3)(var5);
                    SaveGenerator(address=684);
 682:
                    return var5;
 684:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                    if(var6) { _fun0001_ip = 693; continue _fun0001 }
 690:
                    return var3;
 693:
                    return var5;
 696:
                    var5 = var2;
                    var5 = var5.bind(var3)(var3);
                    var5 = undefined;
                    return var5;
 709:
                    var5 = var2;
                    var5 = var5.bind(var3)(var3);
                    var5 = undefined;
                    return var5;
 722:
                    return var4;
 725: // catch_target0
                    CatchBlockStart(arg_register=3);
                    var2 = var2.bind(var3)(var3);
                    var2 = undefined;
                    return var2;
 737:
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
    var4 = var4.AnalyticEvents;
    var _closure1_slot7 = var4;
    var4 = 16;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/applications/AppDMsUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function openAndLaunchAppDM() {
        var1 = undefined;
        var4 = _closure1_slot8;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['openAndLaunchAppDM'] = var4;
    var4 = function updateShowPlayAgainSetting(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = arg1;
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 13;
            var4 = var4[var1];
            var1 = undefined;
            var6 = var5.bind(var1)(var4);
            var5 = var6.updatedUnsyncedSettings;
            var4 = {};
            var4['showPlayAgain'] = var3;
            var4 = var5.bind(var6)(var4);
            if(var3) { _fun0002_ip = 99; continue _fun0002 }
 49:
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 9;
            var3 = var5[var3];
            var5 = var4.bind(var1)(var3);
            var4 = var5.track;
            var2 = _closure1_slot7;
            var3 = var2.APP_DMS_QUICK_LAUNCHER_HIDDEN;
            var2 = {};
            var6 = arg2;
            var2['source'] = var6;
            var2 = var4.bind(var5)(var3, var2);
 99:
            return var1;
        }
    };
    var3['updateShowPlayAgainSetting'] = var4;
    var2 = function useAppDMFrecentApps() {
        var7 = _closure1_slot0;
        var8 = _closure1_slot2;
        var1 = 14;
        var1 = var8[var1];
        var6 = undefined;
        var3 = var7.bind(var6)(var1);
        var2 = var3.useAppLauncherFrecentApps;
        var1 = {'context': null, 'onlyActivityApps': true, 'allowCommandFetch': true, 'includeAuthorizedAppsAndFetch': false};
        var4 = {};
        var5 = 'contextless';
        var4['type'] = var5;
        var1['context'] = var4;
        var1 = var2.bind(var3)(var1);
        var5 = var1.frecentApps;
        var2 = var1.loading;
        var1 = {};
        var4 = var5.map;
        var3 = function(arg1) {
            var1 = arg1;
            var1 = var1.application;
            return var1;
        };
        var5 = var4.bind(var5)(var3);
        var4 = var5.filter;
        var3 = 15;
        var3 = var8[var3];
        var3 = var7.bind(var6)(var3);
        var3 = var3.isNotNullish;
        var3 = var4.bind(var5)(var3);
        var1['frecentApps'] = var3;
        var1['loading'] = var2;
        return var1;
    };
    var3['useAppDMFrecentApps'] = var2;
    return var1;
})();