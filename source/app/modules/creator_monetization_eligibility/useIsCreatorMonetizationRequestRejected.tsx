// app/modules/creator_monetization_eligibility/useIsCreatorMonetizationRequestRejected.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.CreatorMonetizationApplicationState;
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/creator_monetization_eligibility/useIsCreatorMonetizationRequestRejected.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useIsCreatorMonetizationRequestRejected(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var1 = {};
            var5 = null;
            var3 = var5 == var2;
            var4 = undefined;
            var6 = undefined;
            if(var3) { _fun0001_ip = 38; continue _fun0001 }
 18:
            var3 = var2.latestRequest;
            var7 = var5 == var3;
            var6 = undefined;
            if(var7) { _fun0001_ip = 38; continue _fun0001 }
 33:
            var6 = var3.state;
 38:
            var3 = _closure1_slot2;
            var3 = var3.REJECTED;
            var3 = var6 === var3;
            var1['isApplicationRejected'] = var3;
            var6 = var5 == var2;
            var3 = undefined;
            if(var6) { _fun0001_ip = 92; continue _fun0001 }
 69:
            var2 = var2.rejection;
            var5 = var5 == var2;
            var3 = undefined;
            if(var5) { _fun0001_ip = 92; continue _fun0001 }
 84:
            var3 = var2.can_reapply_at;
 92:
            var2 = function getRequestCooldown(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var5 = arg1;
                    var2 = null;
                    if(!(var2 != var5)) { _fun0002_ip = 521; continue _fun0002 }
 14:
                    var3 = global;
                    var4 = var3.Date;
                    var2 = var4.parse;
                    var5 = var2.bind(var4)(var5);
                    var4 = var3.Date;
                    var2 = var4.now;
                    var2 = var2.bind(var4)();
                    var4 = var3.isNaN;
                    var8 = undefined;
                    var4 = var4.bind(var8)(var5);
                    if(var4) { _fun0002_ip = 521; continue _fun0002 }
 67:
                    if(!(!(var5 < var2))) { _fun0002_ip = 521; continue _fun0002 }
 74:
                    var4 = var3.Math;
                    var3 = var4.round;
                    var5 = var5 - var2;
                    var2 = 60000;
                    var2 = var5 / var2;
                    var5 = var3.bind(var4)(var2);
                    var _closure3_slot0 = var5;
                    var7 = function roundByInterval(arg1) {
                        var1 = global;
                        var3 = var1.Math;
                        var2 = var3.round;
                        var4 = _closure3_slot0;
                        var1 = arg1;
                        var1 = var4 / var1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var6 = 43200;
                    if(!(!(var5 >= var6))) { _fun0002_ip = 448; continue _fun0002 }
 128:
                    var9 = 10080;
                    if(!(!(var5 >= var9))) { _fun0002_ip = 375; continue _fun0002 }
 141:
                    var10 = 1440;
                    if(!(!(var5 >= var10))) { _fun0002_ip = 302; continue _fun0002 }
 154:
                    var11 = 60;
                    if(!(!(var5 >= var11))) { _fun0002_ip = 229; continue _fun0002 }
 161:
                    var2 = _closure1_slot0;
                    var12 = _closure1_slot1;
                    var1 = 1;
                    var3 = var12[var1];
                    var3 = var2.bind(var8)(var3);
                    var4 = var3.intl;
                    var3 = var4.formatToPlainString;
                    var1 = var12[var1];
                    var1 = var2.bind(var8)(var1);
                    var1 = var1.t;
                    var2 = var1.iXLF9f;
                    var1 = {};
                    var1['minutes'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    _fun0002_ip = 300; continue _fun0002;
 229:
                    var3 = _closure1_slot0;
                    var12 = _closure1_slot1;
                    var2 = 1;
                    var4 = var12[var2];
                    var4 = var3.bind(var8)(var4);
                    var5 = var4.intl;
                    var4 = var5.formatToPlainString;
                    var2 = var12[var2];
                    var2 = var3.bind(var8)(var2);
                    var2 = var2.t;
                    var3 = var2.xCjYxM;
                    var2 = {};
                    var11 = var7.bind(var8)(var11);
                    var2['hours'] = var11;
                    var1 = var4.bind(var5)(var3, var2);
 300:
                    _fun0002_ip = 373; continue _fun0002;
 302:
                    var3 = _closure1_slot0;
                    var11 = _closure1_slot1;
                    var2 = 1;
                    var4 = var11[var2];
                    var4 = var3.bind(var8)(var4);
                    var5 = var4.intl;
                    var4 = var5.formatToPlainString;
                    var2 = var11[var2];
                    var2 = var3.bind(var8)(var2);
                    var2 = var2.t;
                    var3 = var2.k2UNz8;
                    var2 = {};
                    var10 = var7.bind(var8)(var10);
                    var2['days'] = var10;
                    var1 = var4.bind(var5)(var3, var2);
 373:
                    _fun0002_ip = 446; continue _fun0002;
 375:
                    var3 = _closure1_slot0;
                    var10 = _closure1_slot1;
                    var2 = 1;
                    var4 = var10[var2];
                    var4 = var3.bind(var8)(var4);
                    var5 = var4.intl;
                    var4 = var5.formatToPlainString;
                    var2 = var10[var2];
                    var2 = var3.bind(var8)(var2);
                    var2 = var2.t;
                    var3 = var2.EmoBDw;
                    var2 = {};
                    var9 = var7.bind(var8)(var9);
                    var2['weeks'] = var9;
                    var1 = var4.bind(var5)(var3, var2);
 446:
                    _fun0002_ip = 519; continue _fun0002;
 448:
                    var3 = _closure1_slot0;
                    var9 = _closure1_slot1;
                    var2 = 1;
                    var4 = var9[var2];
                    var4 = var3.bind(var8)(var4);
                    var5 = var4.intl;
                    var4 = var5.formatToPlainString;
                    var2 = var9[var2];
                    var2 = var3.bind(var8)(var2);
                    var2 = var2.t;
                    var3 = var2.kridzM;
                    var2 = {};
                    var6 = var7.bind(var8)(var6);
                    var2['months'] = var6;
                    var1 = var4.bind(var5)(var3, var2);
 519:
                    return var1;
 521:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var2.bind(var4)(var3);
            var1['requestCooldownDuration'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();