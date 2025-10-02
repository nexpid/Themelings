// app/modules/activities/utils/activityLaunchErrorUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var7;
    var1 = function _getActivityLaunchErrorInfo() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    var11 = arg1;
                    var15 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var14 = 3;
                    var4 = var2[var14];
                    var9 = undefined;
                    var4 = var7.bind(var9)(var4);
                    var6 = var4.intl;
                    var5 = var6.string;
                    var4 = var2[var14];
                    var4 = var7.bind(var9)(var4);
                    var4 = var4.t;
                    var4 = var4.IOy+Iy;
                    var12 = var5.bind(var6)(var4);
                    var4 = _closure1_slot1;
                    var18 = 4;
                    var2 = var2[var18];
                    var2 = var4.bind(var9)(var2);
                    var2 = var11 instanceof var2;
                    if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var2 = 7;
                    var2 = var5[var2];
                    var2 = var4.bind(var9)(var2);
                    var4 = var11 instanceof var2;
                    var2 = _closure1_slot7;
                    if(var4) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var16 = var2.ApiError;
                    var13 = var11.status;
                    var10 = var11.code;
                    var17 = var11.code;
                    var4 = _closure1_slot6;
                    var4 = var4.INVALID_ACTIVITY_LAUNCH_NO_ACCESS;
                    if(!(var4 !== var17)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                    var4 = _closure1_slot6;
                    var4 = var4.INVALID_ACTIVITY_LAUNCH_PREMIUM_TIER;
                    if(!(var4 !== var17)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
                    var4 = _closure1_slot6;
                    var4 = var4.INVALID_PERMISSIONS;
                    if(!(var4 !== var17)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
                    var4 = _closure1_slot6;
                    var4 = var4.INVALID_ACTIVITY_LAUNCH_AFK_CHANNEL;
                    if(!(var4 !== var17)) { _fun0001_ip = 14; continue _fun0001 }
case 15:
                    var4 = _closure1_slot6;
                    var4 = var4.INVALID_ACTIVITY_LAUNCH_AGE_GATED;
                    if(!(var4 !== var17)) { _fun0001_ip = 16; continue _fun0001 }
case 17:
                    var4 = _closure1_slot6;
                    var4 = var4.INVALID_ACTIVITY_LAUNCH_DEV_PREVIEW_GUILD_SIZE;
                    if(!(var4 !== var17)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
                    var4 = _closure1_slot6;
                    var8 = var4.ACTIVITY_CONFIGURATION_DOES_NOT_SUPPORT_PLATFORM;
                    var6 = var16;
                    var5 = var13;
                    var4 = var10;
                    var7 = var12;
                    if(!(var8 === var17)) { _fun0001_ip = 20; continue _fun0001 }
case 21:
                    var20 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var17 = var8[var14];
                    var17 = var20.bind(var9)(var17);
                    var19 = var17.intl;
                    var17 = var19.string;
                    var8 = var8[var14];
                    var8 = var20.bind(var9)(var8);
                    var8 = var8.t;
                    var8 = var8.uGDCc3;
                    var7 = var17.bind(var19)(var8);
                    var6 = var16;
                    var5 = var13;
                    var4 = var10;
                    _fun0001_ip = 20; continue _fun0001;
case 18:
                    var20 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var17 = var8[var14];
                    var17 = var20.bind(var9)(var17);
                    var19 = var17.intl;
                    var17 = var19.string;
                    var8 = var8[var14];
                    var8 = var20.bind(var9)(var8);
                    var8 = var8.t;
                    var8 = var8.RvkXdX;
                    var7 = var17.bind(var19)(var8);
                    var6 = var16;
                    var5 = var13;
                    var4 = var10;
                    _fun0001_ip = 20; continue _fun0001;
case 16:
                    var20 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var17 = var8[var14];
                    var17 = var20.bind(var9)(var17);
                    var19 = var17.intl;
                    var17 = var19.string;
                    var8 = var8[var14];
                    var8 = var20.bind(var9)(var8);
                    var8 = var8.t;
                    var8 = var8.4WuFRE;
                    var7 = var17.bind(var19)(var8);
                    var6 = var16;
                    var5 = var13;
                    var4 = var10;
                    _fun0001_ip = 20; continue _fun0001;
case 14:
                    var20 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var17 = var8[var14];
                    var17 = var20.bind(var9)(var17);
                    var19 = var17.intl;
                    var17 = var19.string;
                    var8 = var8[var14];
                    var8 = var20.bind(var9)(var8);
                    var8 = var8.t;
                    var8 = var8.j29zCg;
                    var7 = var17.bind(var19)(var8);
                    var6 = var16;
                    var5 = var13;
                    var4 = var10;
                    _fun0001_ip = 20; continue _fun0001;
case 12:
                    var20 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var17 = var8[var14];
                    var17 = var20.bind(var9)(var17);
                    var19 = var17.intl;
                    var17 = var19.string;
                    var8 = var8[var14];
                    var8 = var20.bind(var9)(var8);
                    var8 = var8.t;
                    var8 = var8.hHGrW1;
                    var7 = var17.bind(var19)(var8);
                    var6 = var16;
                    var5 = var13;
                    var4 = var10;
                    _fun0001_ip = 20; continue _fun0001;
case 10:
                    var20 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var17 = var8[var14];
                    var17 = var20.bind(var9)(var17);
                    var19 = var17.intl;
                    var17 = var19.string;
                    var8 = var8[var14];
                    var8 = var20.bind(var9)(var8);
                    var8 = var8.t;
                    var8 = var8.zxv7EB;
                    var7 = var17.bind(var19)(var8);
                    var6 = var16;
                    var5 = var13;
                    var4 = var10;
                    _fun0001_ip = 20; continue _fun0001;
case 8:
                    var20 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var17 = var8[var14];
                    var17 = var20.bind(var9)(var17);
                    var19 = var17.intl;
                    var17 = var19.string;
                    var8 = var8[var14];
                    var8 = var20.bind(var9)(var8);
                    var8 = var8.t;
                    var8 = var8.Gyzcra;
                    var7 = var17.bind(var19)(var8);
                    var6 = var16;
                    var5 = var13;
                    var4 = var10;
                    _fun0001_ip = 20; continue _fun0001;
case 6:
                    var10 = var2.CallbackError;
                    var8 = var11.reason;
                    var13 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var2 = 8;
                    var2 = var16[var2];
                    var16 = var13.bind(var9)(var2);
                    var13 = var16.interactionCallbackErrorReason;
                    var2 = var11.reason;
                    var13 = var13.bind(var16)(var2, var15);
                    var16 = null;
                    var2 = var12;
                    if(!(var16 != var13)) { _fun0001_ip = 22; continue _fun0001 }
case 23:
                    var2 = var13;
case 22:
                    var7 = var2;
                    var6 = var10;
                    var5 = undefined;
                    var4 = var8;
                    _fun0001_ip = 20; continue _fun0001;
case 4:
                    var2 = _closure1_slot7;
                    var10 = var2.ClientError;
                    var8 = var11.reason;
                    var13 = _closure1_slot4;
                    var2 = var13.getFetchState;
                    var16 = var2.bind(var13)();
                    var13 = _closure1_slot0;
                    var17 = _closure1_slot2;
                    var2 = 5;
                    var2 = var17[var2];
                    var2 = var13.bind(var9)(var2);
                    var13 = var2.DeveloperMode;
                    var2 = var13.getSetting;
                    var2 = var2.bind(var13)();
                    if(!var2) { _fun0001_ip = 24; continue _fun0001 }
case 25:
                    var13 = _closure1_slot5;
                    var13 = var13.LOADED;
                    var2 = var16 !== var13;
case 24:
                    if(!var2) { _fun0001_ip = 26; continue _fun0001 }
case 27:
                    var13 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var2 = 6;
                    var2 = var16[var2];
                    var13 = var13.bind(var9)(var2);
                    var2 = var13.fetchDeveloperApplications;
                    var2 = var2.bind(var13)();
                    SaveGenerator(address=947);
case 28:
                    return var2;
case 29:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=12);
                    if(var13) { _fun0001_ip = 30; continue _fun0001 }
case 26:
                    var16 = var11.reason;
                    var17 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var13 = var13[var18];
                    var13 = var17.bind(var9)(var13);
                    var13 = var13.Reasons;
                    var13 = var13.PRIMARY_APP_COMMAND_NOT_FOUND;
                    if(!(var13 !== var16)) { _fun0001_ip = 31; continue _fun0001 }
case 32:
                    var17 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var13 = var13[var18];
                    var13 = var17.bind(var9)(var13);
                    var13 = var13.Reasons;
                    var13 = var13.INVALID_CHANNEL;
                    if(!(var13 !== var16)) { _fun0001_ip = 33; continue _fun0001 }
case 34:
                    var17 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var13 = var13[var18];
                    var13 = var17.bind(var9)(var13);
                    var13 = var13.Reasons;
                    var13 = var13.LEGACY_LAUNCH_CLIENT_VALIDATION_FAILED;
                    var6 = var10;
                    var5 = undefined;
                    var4 = var8;
                    var7 = var12;
                    if(!(var13 === var16)) { _fun0001_ip = 20; continue _fun0001 }
case 35:
                    var5 = var11.detailCode;
                    var6 = var10;
                    var4 = var8;
                    var7 = var12;
                    _fun0001_ip = 20; continue _fun0001;
case 33:
                    var17 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var13 = var11[var14];
                    var13 = var17.bind(var9)(var13);
                    var16 = var13.intl;
                    var13 = var16.string;
                    var11 = var11[var14];
                    var11 = var17.bind(var9)(var11);
                    var11 = var11.t;
                    var11 = var11.j29zCg;
                    var7 = var13.bind(var16)(var11);
                    var6 = var10;
                    var5 = undefined;
                    var4 = var8;
                    _fun0001_ip = 20; continue _fun0001;
case 31:
                    var13 = _closure1_slot4;
                    var11 = var13.inDevModeForApplication;
                    var11 = var11.bind(var13)(var15);
                    var6 = var10;
                    var5 = undefined;
                    var4 = var8;
                    var7 = var12;
                    if(!var11) { _fun0001_ip = 20; continue _fun0001 }
case 36:
                    var13 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var11 = var3[var14];
                    var11 = var13.bind(var9)(var11);
                    var12 = var11.intl;
                    var11 = var12.string;
                    var3 = var3[var14];
                    var3 = var13.bind(var9)(var3);
                    var3 = var3.t;
                    var3 = var3.hXRXf3;
                    var7 = var11.bind(var12)(var3);
                    var6 = var10;
                    var5 = undefined;
                    var4 = var8;
case 20:
                    var3 = {};
                    var3['message'] = var7;
                    var3['errorType'] = var6;
                    var3['errorStatus'] = var5;
                    var3['errorCode'] = var4;
                    return var3;
case 30:
                    return var2;
case 2:
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
    var10 = 0;
    var4 = var7[var10];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var9 = 1;
    var4 = var7[var9];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = var7[var9];
    var4 = var6.bind(var1)(var4);
    var4 = var4.DevShelfFetchState;
    var _closure1_slot5 = var4;
    var8 = 2;
    var4 = var7[var8];
    var4 = var6.bind(var1)(var4);
    var4 = var4.AbortCodes;
    var _closure1_slot6 = var4;
    var4 = {};
    var4['ClientError'] = var10;
    var5 = 'ClientError';
    var4[var10] = var5;
    var4['CallbackError'] = var9;
    var5 = 'CallbackError';
    var4[var9] = var5;
    var4['ApiError'] = var8;
    var5 = 'ApiError';
    var4[var8] = var5;
    var _closure1_slot7 = var4;
    var5 = 9;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/activities/utils/activityLaunchErrorUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var3['ActivityLaunchFailErrorType'] = var4;
    var2 = function getActivityLaunchErrorInfo() {
        var1 = undefined;
        var4 = _closure1_slot8;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['getActivityLaunchErrorInfo'] = var2;
    return var1;
})();