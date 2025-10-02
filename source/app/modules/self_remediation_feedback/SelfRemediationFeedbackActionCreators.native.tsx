// app/modules/self_remediation_feedback/SelfRemediationFeedbackActionCreators.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
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
case 0:
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
            if(!var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
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
case 2:
            return var1;
        }
    };
    var2['maybeOpenBlockUserFeedback'] = var7;
    var4 = function maybeOpenAgeVerificationUserFeedback(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
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
            if(!var3) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var4 = null;
            var3 = var4 != var5;
case 4:
            if(!var3) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var6 = _closure1_slot3;
            var4 = var6.includes;
            var3 = var4.bind(var6)(var5);
case 6:
            if(!var3) { _fun0002_ip = 8; continue _fun0002 }
case 9:
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
case 8:
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