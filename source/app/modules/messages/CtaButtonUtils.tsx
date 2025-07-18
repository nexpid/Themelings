// app/modules/messages/CtaButtonUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var3 = native6;
    var5 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var4 = {};
    var1 = 'mark_as_false_positive';
    var4['MARK_AS_FALSE_POSITIVE'] = var1;
    var1 = 'age_verification_retry';
    var4['AGE_VERIFICATION_RETRY'] = var1;
    var _closure1_slot2 = var4;
    var1 = 2;
    var5 = var5[var1];
    var1 = undefined;
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/messages/CtaButtonUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var3['CtaButtonType'] = var4;
    var4 = function getCtaButtonType(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var6 = arg1;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 0;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.shouldRenderReportFalsePositiveButton;
            var3 = var3.bind(var4)(var6);
            if(var3) { _fun0001_ip = 93; continue _fun0001 }
 41:
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var3 = 1;
            var3 = var5[var3];
            var5 = var4.bind(var1)(var3);
            var4 = var5.isAgeVerificationMessageWithRetryCta;
            var3 = arg2;
            var3 = var4.bind(var5)(var3, var6);
            var1 = undefined;
            if(!var3) { _fun0001_ip = 91; continue _fun0001 }
 81:
            var3 = _closure1_slot2;
            var1 = var3.AGE_VERIFICATION_RETRY;
 91:
            _fun0001_ip = 103; continue _fun0001;
 93:
            var2 = _closure1_slot2;
            var1 = var2.MARK_AS_FALSE_POSITIVE;
 103:
            return var1;
        }
    };
    var3['getCtaButtonType'] = var4;
    var2 = function useCtaButtonType(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var7 = arg1;
            var5 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 0;
            var3 = var6[var1];
            var1 = undefined;
            var4 = var5.bind(var1)(var3);
            var3 = var4.useShouldRenderReportFalsePositiveButton;
            var4 = var3.bind(var4)(var7);
            var3 = 1;
            var3 = var6[var3];
            var6 = var5.bind(var1)(var3);
            var5 = var6.isAgeVerificationMessageWithRetryCta;
            var3 = arg2;
            var3 = var5.bind(var6)(var3, var7);
            if(var4) { _fun0002_ip = 85; continue _fun0002 }
 68:
            var1 = undefined;
            if(!var3) { _fun0002_ip = 83; continue _fun0002 }
 73:
            var3 = _closure1_slot2;
            var1 = var3.AGE_VERIFICATION_RETRY;
 83:
            _fun0002_ip = 95; continue _fun0002;
 85:
            var2 = _closure1_slot2;
            var1 = var2.MARK_AS_FALSE_POSITIVE;
 95:
            return var1;
        }
    };
    var3['useCtaButtonType'] = var2;
    return var1;
})();