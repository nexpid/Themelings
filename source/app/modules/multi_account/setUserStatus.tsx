// app/modules/multi_account/setUserStatus.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _setUserStatus() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var9 = var2.nextStatus;
                    var _closure4_slot0 = var9;
                    var8 = var2.prevStatus;
                    var _closure4_slot1 = var8;
                    var7 = var2.analyticsContext;
                    var12 = var2.durationMillis;
                    var _closure4_slot2 = var12;
                    var10 = var2.disableTracking;
                    var4 = undefined;
                    if(!(var10 === var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var10 = false;
case 4:
                    SaveGenerator(address=71);
case 6:
                    return var4;
case 7:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                    var6 = null;
                    if(!(var6 == var8)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
                    var11 = _closure1_slot5;
                    var5 = var11.getStatus;
                    var5 = var5.bind(var11)();
                    _closure4_slot1 = var5;
                    var8 = var5;
case 10:
                    var13 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var11 = 4;
                    var14 = var16[var11];
                    var14 = var13.bind(var4)(var14);
                    var15 = var14.PreloadedUserSettingsActionCreators;
                    var14 = var15.updateAsync;
                    var11 = var16[var11];
                    var11 = var13.bind(var4)(var11);
                    var11 = var11.UserSettingsDelay;
                    var13 = var11.INFREQUENT_USER_ACTION;
                    var11 = 'status';
                    var3 = function(arg1) {
                        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                            var3 = arg1;
                            var6 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var5 = 5;
                            var4 = var1[var5];
                            var1 = undefined;
                            var4 = var6.bind(var1)(var4);
                            var8 = var4.StringValue;
                            var7 = var8.create;
                            var6 = {};
                            var9 = _closure4_slot0;
                            var6['value'] = var9;
                            var6 = var7.bind(var8)(var6);
                            var3['status'] = var6;
                            var7 = _closure4_slot2;
                            var6 = null;
                            var8 = var6 != var7;
                            var7 = '0';
                            if(!var8) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                            var8 = global;
                            var10 = var8.Date;
                            var9 = var10.now;
                            var10 = var9.bind(var10)();
                            var9 = _closure4_slot2;
                            var10 = var10 + var9;
                            var8 = var8.HermesInternal;
                            var9 = var8.concat;
                            var8 = '';
                            var7 = var9.bind(var8)(var10);
case 12:
                            var3['statusExpiresAtMs'] = var7;
                            var7 = _closure4_slot1;
                            var4 = _closure4_slot0;
                            if(!(var7 === var4)) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                            var4 = var3.statusCreatedAtMs;
                            if(!(var6 == var4)) { _fun0002_ip = 16; continue _fun0002 }
case 14:
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var2 = var2[var5];
                            var2 = var4.bind(var1)(var2);
                            var5 = var2.UInt64Value;
                            var4 = var5.create;
                            var2 = {};
                            var6 = global;
                            var8 = var6.Date;
                            var7 = var8.now;
                            var8 = var7.bind(var8)();
                            var6 = var6.HermesInternal;
                            var7 = var6.concat;
                            var6 = '';
                            var6 = var7.bind(var6)(var8);
                            var2['value'] = var6;
                            var2 = var4.bind(var5)(var2);
                            _fun0002_ip = 17; continue _fun0002;
case 16:
                            var2 = var3.statusCreatedAtMs;
case 17:
                            var3['statusCreatedAtMs'] = var2;
                            return var1;
                        }
                    };
                    var3 = var14.bind(var15)(var11, var3, var13);
                    SaveGenerator(address=188);
case 18:
                    return var3;
case 19:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=10);
                    if(var11) { _fun0001_ip = 20; continue _fun0001 }
case 21:
                    if(var10) { _fun0001_ip = 22; continue _fun0001 }
case 23:
                    var10 = {};
                    var10['next_status'] = var9;
                    var10['prev_status'] = var8;
                    var9 = _closure1_slot4;
                    var8 = var9.getGlobalStats;
                    var18 = var8.bind(var9)();
                    var19 = var10;
                    var8 = copyDataProperties(var19, var18);
                    var9 = var10;
                    if(!(var6 != var12)) { _fun0001_ip = 24; continue _fun0001 }
case 25:
                    var8 = {};
                    var19 = var8;
                    var18 = var10;
                    var10 = copyDataProperties(var19, var18);
                    var10 = var6 != var12;
                    var11 = null;
                    if(!var10) { _fun0001_ip = 26; continue _fun0001 }
case 27:
                    var10 = 60000;
                    var11 = var12 / var10;
case 26:
                    var10 = 'expire_duration_minutes';
                    var8[var10] = var11;
                    var9 = var8;
case 24:
                    var8 = var9;
                    if(!(var6 != var7)) { _fun0001_ip = 28; continue _fun0001 }
case 29:
                    var6 = {};
                    var19 = var6;
                    var18 = var9;
                    var9 = copyDataProperties(var19, var18);
                    var19 = var6;
                    var18 = var7;
                    var7 = copyDataProperties(var19, var18);
                    var8 = var6;
case 28:
                    var7 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var6 = 6;
                    var6 = var9[var6];
                    var7 = var7.bind(var4)(var6);
                    var6 = var7.track;
                    var5 = _closure1_slot6;
                    var5 = var5.USER_STATUS_UPDATED;
                    var5 = var6.bind(var7)(var5, var8);
case 22:
                    return var4;
case 20:
                    return var3;
case 8:
                    return var2;
case 2:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot6 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/multi_account/setUserStatus.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function setUserStatus() {
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