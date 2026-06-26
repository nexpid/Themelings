// app/modules/messages/CtaButtonUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var4);
    var1 = 0;
    var5 = var7[var1];
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var5);
    var _closure1_slot2 = var4;
    var4 = {};
    var5 = 'mark_as_false_positive';
    var4['MARK_AS_FALSE_POSITIVE'] = var5;
    var5 = 'age_verification_retry';
    var4['AGE_VERIFICATION_RETRY'] = var5;
    var5 = 'connect_to_teen';
    var4['CONNECT_TO_TEEN'] = var5;
    var _closure1_slot3 = var4;
    var5 = 4;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/messages/CtaButtonUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var3['CtaButtonType'] = var4;
    var4 = function getCtaButtonType(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var6 = arg1;
            var5 = arg2;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 1;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.shouldRenderReportFalsePositiveButton;
            var3 = var3.bind(var4)(var6);
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var7 = 2;
            var3 = var3[var7];
            var4 = var4.bind(var1)(var3);
            var3 = var4.isAgeVerificationMessageWithRetryCta;
            var3 = var3.bind(var4)(var5, var6);
            if(var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var7];
            var4 = var4.bind(var1)(var3);
            var3 = var4.isAgeVerificationMessageWithConnectToTeenCta;
            var3 = var3.bind(var4)(var5, var6);
            var1 = undefined;
            if(!var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = _closure1_slot3;
            var1 = var3.CONNECT_TO_TEEN;
case 6:
            _fun0001_ip = 8; continue _fun0001;
case 4:
            var3 = _closure1_slot3;
            var1 = var3.AGE_VERIFICATION_RETRY;
case 8:
            _fun0001_ip = 9; continue _fun0001;
case 2:
            var2 = _closure1_slot3;
            var1 = var2.MARK_AS_FALSE_POSITIVE;
case 9:
            return var1;
        }
    };
    var3['getCtaButtonType'] = var4;
    var2 = function useCtaButtonType(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var9 = arg1;
            var8 = arg2;
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var1 = 1;
            var3 = var7[var1];
            var1 = undefined;
            var4 = var6.bind(var1)(var3);
            var3 = var4.useShouldRenderReportFalsePositiveButton;
            var5 = var3.bind(var4)(var9);
            var10 = 2;
            var3 = var7[var10];
            var4 = var6.bind(var1)(var3);
            var3 = var4.isAgeVerificationMessageWithRetryCta;
            var4 = var3.bind(var4)(var8, var9);
            var3 = 3;
            var3 = var7[var3];
            var11 = var6.bind(var1)(var3);
            var7 = var11.useStateFromStores;
            var3 = _closure1_slot2;
            var6 = new Array(1);
            var6[0] = var3;
            var3 = function() {
                var2 = _closure1_slot2;
                var1 = var2.getPendingConnection;
                var1 = var1.bind(var2)();
                return var1;
            };
            var6 = var7.bind(var11)(var6, var3);
            var3 = null;
            var3 = var3 != var6;
            if(!var3) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var7 = _closure1_slot0;
            var6 = _closure1_slot1;
            var6 = var6[var10];
            var7 = var7.bind(var1)(var6);
            var6 = var7.isAgeVerificationMessageWithConnectToTeenCta;
            var3 = var6.bind(var7)(var8, var9);
case 9:
            if(var5) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            if(var4) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var1 = undefined;
            if(!var3) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var3 = _closure1_slot3;
            var1 = var3.CONNECT_TO_TEEN;
case 15:
            _fun0002_ip = 17; continue _fun0002;
case 13:
            var3 = _closure1_slot3;
            var1 = var3.AGE_VERIFICATION_RETRY;
case 17:
            _fun0002_ip = 18; continue _fun0002;
case 11:
            var2 = _closure1_slot3;
            var1 = var2.MARK_AS_FALSE_POSITIVE;
case 18:
            return var1;
        }
    };
    var3['useCtaButtonType'] = var2;
    return var1;
})();