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
case 0:
            var2 = arg1;
            var1 = {};
            var5 = null;
            var3 = var5 == var2;
            var4 = undefined;
            var6 = undefined;
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var2.latestRequest;
            var7 = var5 == var3;
            var6 = undefined;
            if(var7) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var6 = var3.state;
case 2:
            var3 = _closure1_slot2;
            var3 = var3.REJECTED;
            var3 = var6 === var3;
            var1['isApplicationRejected'] = var3;
            var6 = var5 == var2;
            var3 = undefined;
            if(var6) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var2 = var2.rejection;
            var5 = var5 == var2;
            var3 = undefined;
            if(var5) { _fun0001_ip = 5; continue _fun0001 }
case 7:
            var3 = var2.can_reapply_at;
case 5:
            var2 = function getRequestCooldown(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var5 = arg1;
                    var2 = null;
                    if(!(var2 != var5)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
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
                    if(var4) { _fun0002_ip = 8; continue _fun0002 }
case 10:
                    if(!(!(var5 < var2))) { _fun0002_ip = 8; continue _fun0002 }
case 11:
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
                    if(!(!(var5 >= var6))) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                    var9 = 10080;
                    if(!(!(var5 >= var9))) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                    var10 = 1440;
                    if(!(!(var5 >= var10))) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                    var11 = 60;
                    if(!(!(var5 >= var11))) { _fun0002_ip = 18; continue _fun0002 }
case 19:
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
                    _fun0002_ip = 20; continue _fun0002;
case 18:
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
case 20:
                    _fun0002_ip = 21; continue _fun0002;
case 16:
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
case 21:
                    _fun0002_ip = 22; continue _fun0002;
case 14:
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
case 22:
                    _fun0002_ip = 23; continue _fun0002;
case 12:
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
case 23:
                    return var1;
case 8:
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