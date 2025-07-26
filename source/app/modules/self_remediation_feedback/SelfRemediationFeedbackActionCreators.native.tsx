// app/modules/self_remediation_feedback/SelfRemediationFeedbackActionCreators.native.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var1 = native3;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var5.bind(var1)(var2);
    var2 = var2.AGE_VERIFICATION_SURVEY_DISMISSIBLE_CONTENT;
    var _closure1_slot3 = var2;
    var2 = {};
    var7 = function maybeOpenBlockUserFeedback(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var5 = var1.location;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 1;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.isEligibleForBlockUserFeedbackExperiment;
            var3 = var3.bind(var4)(var5);
            if(!var3) { _fun0001_ip = 89; continue _fun0001 }
 47:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 2;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var5 = 'BLOCK_USER_SHOW_FEEDBACK';
            var2['type'] = var5;
            var2 = var3.bind(var4)(var2);
 89:
            return var1;
        }
    };
    var2['maybeOpenBlockUserFeedback'] = var7;
    var4 = function maybeOpenAgeVerificationUserFeedback(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var6 = var1.location;
            var5 = var1.visibleContent;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 3;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.isEligibleForAgeVerificationFeedbackExperiment;
            var3 = var3.bind(var4)(var6);
            if(!var3) { _fun0002_ip = 59; continue _fun0002 }
 53:
            var4 = null;
            var3 = var4 != var5;
 59:
            if(!var3) { _fun0002_ip = 76; continue _fun0002 }
 62:
            var6 = _closure1_slot3;
            var4 = var6.includes;
            var3 = var4.bind(var6)(var5);
 76:
            if(!var3) { _fun0002_ip = 126; continue _fun0002 }
 79:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 2;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var6 = 'AGE_VERIFICATION_SHOW_FEEDBACK';
            var2['type'] = var6;
            var2['dismissibleContent'] = var5;
            var2 = var3.bind(var4)(var2);
 126:
            return var1;
        }
    };
    var2['maybeOpenAgeVerificationUserFeedback'] = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/self_remediation_feedback/SelfRemediationFeedbackActionCreators.native.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();