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
                    var10 = var2.disableTracking;
                    var4 = undefined;
                    if(!(var10 === var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var10 = false;
case 4:
                    var _closure4_slot2 = var4;
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
                    var5 = var6 != var12;
                    var11 = '0';
                    var14 = var11;
                    if(!var5) { _fun0001_ip = 12; continue _fun0001 }
case 13:
                    var5 = global;
                    var15 = var5.Date;
                    var13 = var15.now;
                    var13 = var13.bind(var15)();
                    var15 = var13 + var12;
                    var5 = var5.HermesInternal;
                    var13 = var5.concat;
                    var5 = '';
                    var14 = var13.bind(var5)(var15);
case 12:
                    _closure4_slot2 = var14;
                    var15 = _closure1_slot0;
                    var18 = _closure1_slot2;
                    var13 = 7;
                    var16 = var18[var13];
                    var16 = var15.bind(var4)(var16);
                    var17 = var16.PreloadedUserSettingsActionCreators;
                    var16 = var17.updateAsync;
                    var13 = var18[var13];
                    var13 = var15.bind(var4)(var13);
                    var13 = var13.UserSettingsDelay;
                    var15 = var13.INFREQUENT_USER_ACTION;
                    var13 = 'status';
                    var3 = function(arg1) {
                        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                            var3 = arg1;
                            var6 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var5 = 8;
                            var4 = var1[var5];
                            var1 = undefined;
                            var4 = var6.bind(var1)(var4);
                            var9 = var4.StringValue;
                            var8 = var9.create;
                            var7 = {};
                            var6 = _closure4_slot0;
                            var7['value'] = var6;
                            var7 = var8.bind(var9)(var7);
                            var3['status'] = var7;
                            var7 = _closure4_slot2;
                            var3['statusExpiresAtMs'] = var7;
                            var4 = _closure4_slot1;
                            if(!(var4 === var6)) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                            var6 = var3.statusCreatedAtMs;
                            var4 = null;
                            if(!(var4 == var6)) { _fun0002_ip = 16; continue _fun0002 }
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
                    var3 = var16.bind(var17)(var13, var3, var15);
                    SaveGenerator(address=249);
case 18:
                    return var3;
case 19:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=12);
                    if(var13) { _fun0001_ip = 20; continue _fun0001 }
case 21:
                    var15 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var13 = 4;
                    var13 = var16[var13];
                    var15 = var15.bind(var4)(var13);
                    var13 = var15.humanizeStatus;
                    var17 = var13.bind(var15)(var9);
                    if(!(var11 !== var14)) { _fun0001_ip = 22; continue _fun0001 }
case 23:
                    var13 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var11 = 6;
                    var11 = var15[var11];
                    var13 = var13.bind(var4)(var11);
                    var11 = var13.getStatusExpiryParts;
                    var11 = var11.bind(var13)(var14);
                    var13 = var11.kind;
                    var16 = var11.dateString;
                    var18 = var11.timeString;
                    var11 = 'today';
                    if(!(var11 !== var13)) { _fun0001_ip = 24; continue _fun0001 }
case 25:
                    var13 = _closure1_slot0;
                    var19 = _closure1_slot2;
                    var11 = 5;
                    var14 = var19[var11];
                    var14 = var13.bind(var4)(var14);
                    var15 = var14.intl;
                    var14 = var15.formatToPlainString;
                    var11 = var19[var11];
                    var11 = var13.bind(var4)(var11);
                    var11 = var11.t;
                    var13 = var11.J+GJHv;
                    var11 = {};
                    var11['statusLabel'] = var17;
                    var11['dateString'] = var16;
                    var11['timeString'] = var18;
                    var14 = var14.bind(var15)(var13, var11);
                    _fun0001_ip = 26; continue _fun0001;
case 24:
                    var13 = _closure1_slot0;
                    var19 = _closure1_slot2;
                    var11 = 5;
                    var15 = var19[var11];
                    var15 = var13.bind(var4)(var15);
                    var16 = var15.intl;
                    var15 = var16.formatToPlainString;
                    var11 = var19[var11];
                    var11 = var13.bind(var4)(var11);
                    var11 = var11.t;
                    var13 = var11.r50t/S;
                    var11 = {};
                    var11['statusLabel'] = var17;
                    var11['timeString'] = var18;
                    var14 = var15.bind(var16)(var13, var11);
case 26:
                    _fun0001_ip = 27; continue _fun0001;
case 22:
                    var13 = _closure1_slot0;
                    var18 = _closure1_slot2;
                    var11 = 5;
                    var15 = var18[var11];
                    var15 = var13.bind(var4)(var15);
                    var16 = var15.intl;
                    var15 = var16.formatToPlainString;
                    var11 = var18[var11];
                    var11 = var13.bind(var4)(var11);
                    var11 = var11.t;
                    var13 = var11.dO2aLi;
                    var11 = {};
                    var11['statusLabel'] = var17;
                    var14 = var15.bind(var16)(var13, var11);
case 27:
                    var13 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var11 = 9;
                    var11 = var15[var11];
                    var11 = var13.bind(var4)(var11);
                    var13 = var11.AccessibilityAnnouncer;
                    var11 = var13.announce;
                    var11 = var11.bind(var13)(var14);
                    if(var10) { _fun0001_ip = 28; continue _fun0001 }
case 29:
                    var10 = {};
                    var10['next_status'] = var9;
                    var10['prev_status'] = var8;
                    var9 = _closure1_slot4;
                    var8 = var9.getGlobalStats;
                    var21 = var8.bind(var9)();
                    var22 = var10;
                    var8 = copyDataProperties(var22, var21);
                    var9 = var10;
                    if(!(var6 != var12)) { _fun0001_ip = 30; continue _fun0001 }
case 31:
                    var8 = {};
                    var22 = var8;
                    var21 = var10;
                    var10 = copyDataProperties(var22, var21);
                    var10 = var6 != var12;
                    var11 = null;
                    if(!var10) { _fun0001_ip = 32; continue _fun0001 }
case 33:
                    var10 = 60000;
                    var11 = var12 / var10;
case 32:
                    var10 = 'expire_duration_minutes';
                    var8[var10] = var11;
                    var9 = var8;
case 30:
                    var8 = var9;
                    if(!(var6 != var7)) { _fun0001_ip = 34; continue _fun0001 }
case 35:
                    var6 = {};
                    var22 = var6;
                    var21 = var9;
                    var9 = copyDataProperties(var22, var21);
                    var22 = var6;
                    var21 = var7;
                    var7 = copyDataProperties(var22, var21);
                    var8 = var6;
case 34:
                    var7 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var6 = 10;
                    var6 = var9[var6];
                    var7 = var7.bind(var4)(var6);
                    var6 = var7.track;
                    var5 = _closure1_slot6;
                    var5 = var5.USER_STATUS_UPDATED;
                    var5 = var6.bind(var7)(var5, var8);
case 28:
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
    var4 = 11;
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