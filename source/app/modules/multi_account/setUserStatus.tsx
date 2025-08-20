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
 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 343; continue _fun0001 }
 15:
                    var9 = var2.nextStatus;
                    var _closure4_slot0 = var9;
                    var8 = var2.prevStatus;
                    var7 = var2.analyticsContext;
                    var12 = var2.durationMillis;
                    var _closure4_slot1 = var12;
                    var4 = undefined;
                    SaveGenerator(address=53);
 51:
                    return var4;
 53:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 340; continue _fun0001 }
 62:
                    var6 = null;
                    if(!(var6 == var8)) { _fun0001_ip = 85; continue _fun0001 }
 68:
                    var10 = _closure1_slot5;
                    var5 = var10.getStatus;
                    var8 = var5.bind(var10)();
 85:
                    var11 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var10 = 4;
                    var13 = var15[var10];
                    var13 = var11.bind(var4)(var13);
                    var14 = var13.PreloadedUserSettingsActionCreators;
                    var13 = var14.updateAsync;
                    var10 = var15[var10];
                    var10 = var11.bind(var4)(var10);
                    var10 = var10.UserSettingsDelay;
                    var11 = var10.INFREQUENT_USER_ACTION;
                    var10 = 'status';
                    var3 = function(arg1) {
                        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                            var3 = arg1;
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 5;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var4.bind(var1)(var2);
                            var6 = var2.StringValue;
                            var4 = var6.create;
                            var2 = {};
                            var7 = _closure4_slot0;
                            var2['value'] = var7;
                            var2 = var4.bind(var6)(var2);
                            var3['status'] = var2;
                            var4 = _closure4_slot1;
                            var2 = null;
                            var4 = var2 != var4;
                            var2 = '0';
                            if(!var4) { _fun0002_ip = 127; continue _fun0002 }
 82:
                            var4 = global;
                            var7 = var4.Date;
                            var6 = var7.now;
                            var6 = var6.bind(var7)();
                            var5 = _closure4_slot1;
                            var6 = var6 + var5;
                            var4 = var4.HermesInternal;
                            var5 = var4.concat;
                            var4 = '';
                            var2 = var5.bind(var4)(var6);
 127:
                            var3['statusExpiresAtMs'] = var2;
                            return var1;
                        }
                    };
                    var3 = var13.bind(var14)(var10, var3, var11);
                    SaveGenerator(address=161);
 159:
                    return var3;
 161:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=9);
                    if(var10) { _fun0001_ip = 337; continue _fun0001 }
 170:
                    var10 = {};
                    var10['next_status'] = var9;
                    var10['prev_status'] = var8;
                    var9 = _closure1_slot4;
                    var8 = var9.getGlobalStats;
                    var17 = var8.bind(var9)();
                    var18 = var10;
                    var8 = copyDataProperties(var18, var17);
                    var9 = var10;
                    if(!(var6 != var12)) { _fun0001_ip = 261; continue _fun0001 }
 216:
                    var8 = {};
                    var18 = var8;
                    var17 = var10;
                    var10 = copyDataProperties(var18, var17);
                    var10 = var6 != var12;
                    var11 = null;
                    if(!var10) { _fun0001_ip = 247; continue _fun0001 }
 237:
                    var10 = 60000;
                    var11 = var12 / var10;
 247:
                    var10 = 'expire_duration_minutes';
                    var8[var10] = var11;
                    var9 = var8;
 261:
                    var8 = var9;
                    if(!(var6 != var7)) { _fun0001_ip = 293; continue _fun0001 }
 268:
                    var6 = {};
                    var18 = var6;
                    var17 = var9;
                    var9 = copyDataProperties(var18, var17);
                    var18 = var6;
                    var17 = var7;
                    var7 = copyDataProperties(var18, var17);
                    var8 = var6;
 293:
                    var7 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var6 = 6;
                    var6 = var9[var6];
                    var7 = var7.bind(var4)(var6);
                    var6 = var7.track;
                    var5 = _closure1_slot6;
                    var5 = var5.USER_STATUS_UPDATED;
                    var5 = var6.bind(var7)(var5, var8);
                    return var4;
 337:
                    return var3;
 340:
                    return var2;
 343:
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