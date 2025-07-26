// app/modules/self_remediation_feedback/SelfRemediationFeedbackUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
    var4 = var5.bind(var1)(var4);
    var8 = var4.AgeVerificationSurveyEntrypoints;
    var _closure1_slot5 = var8;
    var4 = var4.IGNORE_USER_FEEDBACK_COOLDOWN_MS;
    var _closure1_slot6 = var4;
    var9 = 3;
    var4 = var6[var9];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot7 = var4;
    var4 = 4;
    var8 = var6[var4];
    var8 = var7.bind(var1)(var8);
    var8 = var8.Millis;
    var8 = var8.DAY;
    var8 = var9 * var8;
    var _closure1_slot8 = var8;
    var8 = var6[var4];
    var8 = var7.bind(var1)(var8);
    var8 = var8.Millis;
    var8 = var8.WEEK;
    var _closure1_slot9 = var8;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var4 = var4.Millis;
    var4 = var4.DAYS_30;
    var _closure1_slot10 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/self_remediation_feedback/SelfRemediationFeedbackUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var3 = 5;
            var4 = var4[var3];
            var3 = undefined;
            var5 = var5.bind(var3)(var4);
            var4 = var5.isEligibleForBlockUserFeedbackExperiment;
            var3 = 'block_user_feedback_utils';
            var3 = var4.bind(var5)(var3);
            if(var3) { _fun0001_ip = 51; continue _fun0001 }
 47:
            var3 = false;
            return var3;
 51:
            var3 = _closure1_slot3;
            var2 = var3.getSinces;
            var4 = var2.bind(var3)();
            var _closure2_slot0 = var4;
            var2 = global;
            var3 = var2.Object;
            var2 = var3.keys;
            var3 = var2.bind(var3)(var4);
            var2 = var3.some;
            var1 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var5 = arg1;
                    var1 = global;
                    var3 = var1.Date;
                    var2 = var3.now;
                    var2 = var2.bind(var3)();
                    var4 = var1.Date;
                    var3 = var4.parse;
                    var1 = _closure2_slot0;
                    var1 = var1[var5];
                    var1 = var3.bind(var4)(var1);
                    var3 = var2 - var1;
                    var4 = _closure1_slot3;
                    var1 = var4.isBlocked;
                    var1 = var1.bind(var4)(var5);
                    if(!var1) { _fun0002_ip = 81; continue _fun0002 }
 73:
                    var4 = _closure1_slot9;
                    var1 = var3 > var4;
 81:
                    if(!var1) { _fun0002_ip = 92; continue _fun0002 }
 84:
                    var2 = _closure1_slot10;
                    var1 = var3 < var2;
 92:
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['isEligibleForBlockNotice'] = var4;
    var4 = function(arg1, arg2, arg3, arg4) {
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 6;
        var3 = var3[var1];
        var1 = undefined;
        var5 = var4.bind(var1)(var3);
        var4 = var5.track;
        var2 = _closure1_slot7;
        var3 = var2.BLOCK_USER_FEEDBACK_SUBMITTED;
        var2 = {};
        var6 = arg1;
        var2['rating'] = var6;
        var6 = arg2;
        var2['feedback'] = var6;
        var6 = arg3;
        var2['reason'] = var6;
        var6 = arg4;
        var2['skipped'] = var6;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var3['trackBlockUserFeedback'] = var4;
    var4 = function() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 7;
            var3 = var5[var3];
            var8 = undefined;
            var5 = var4.bind(var8)(var3);
            var4 = var5.isEligibleForIgnoreUserFeedbackExperiment;
            var3 = 'ignore_user_feedback_utils';
            var3 = var4.bind(var5)(var3);
            var4 = var3.enabled;
            var3 = var3.shouldGetShorterIgnoreDuration;
            if(var4) { _fun0003_ip = 62; continue _fun0003 }
 58:
            var4 = false;
            return var4;
 62:
            var5 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 8;
            var4 = var9[var4];
            var7 = var5.bind(var8)(var4);
            var6 = var7.isTimeRecurringDismissibleContentDismissed;
            var4 = 9;
            var4 = var9[var4];
            var4 = var5.bind(var8)(var4);
            var4 = var4.DismissibleContent;
            var5 = var4.NAGBAR_NOTICE_IGNORE_USER_FEEDBACK;
            var4 = {};
            var8 = _closure1_slot6;
            var4['cooldownDurationMs'] = var8;
            var4 = var6.bind(var7)(var5, var4);
            var4 = var4.isDismissed;
            if(var4) { _fun0003_ip = 213; continue _fun0003 }
 138:
            if(var3) { _fun0003_ip = 147; continue _fun0003 }
 141:
            var3 = _closure1_slot9;
            _fun0003_ip = 151; continue _fun0003;
 147:
            var3 = _closure1_slot8;
 151:
            var _closure2_slot0 = var3;
            var3 = _closure1_slot4;
            var2 = var3.getIgnoreTimestamps;
            var4 = var2.bind(var3)();
            var _closure2_slot1 = var4;
            var2 = global;
            var3 = var2.Object;
            var2 = var3.keys;
            var3 = var2.bind(var3)(var4);
            var2 = var3.some;
            var1 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var6 = arg1;
                    var1 = global;
                    var3 = var1.Date;
                    var2 = var3.now;
                    var2 = var2.bind(var3)();
                    var5 = var1.Number;
                    var1 = _closure2_slot1;
                    var3 = var1[var6];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var3);
                    var3 = var2 - var1;
                    var5 = _closure1_slot3;
                    var1 = var5.isIgnored;
                    var1 = var1.bind(var5)(var6);
                    if(!var1) { _fun0004_ip = 77; continue _fun0004 }
 69:
                    var4 = _closure2_slot0;
                    var1 = var3 > var4;
 77:
                    if(!var1) { _fun0004_ip = 88; continue _fun0004 }
 80:
                    var2 = _closure1_slot10;
                    var1 = var3 < var2;
 88:
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var1;
 213:
            var1 = false;
            return var1;
        }
    };
    var3['isEligibleForIgnoreNotice'] = var4;
    var4 = function(arg1, arg2, arg3, arg4) {
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 6;
        var3 = var3[var1];
        var1 = undefined;
        var5 = var4.bind(var1)(var3);
        var4 = var5.track;
        var2 = _closure1_slot7;
        var3 = var2.IGNORE_USER_FEEDBACK_SUBMITTED;
        var2 = {};
        var6 = arg1;
        var2['rating'] = var6;
        var6 = arg2;
        var2['feedback'] = var6;
        var6 = arg3;
        var2['reason'] = var6;
        var6 = arg4;
        var2['skipped'] = var6;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var3['trackIgnoreUserFeedback'] = var4;
    var4 = function(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 9;
            var3 = var3[var1];
            var1 = undefined;
            var1 = var4.bind(var1)(var3);
            var1 = var1.DismissibleContent;
            var3 = var1.AGE_VERIFICATION_SURVEY_MODAL_CLOSE;
            var1 = arg1;
            if(!(var1 !== var3)) { _fun0005_ip = 56; continue _fun0005 }
 44:
            var1 = _closure1_slot5;
            var1 = var1.GET_STARTED;
            _fun0005_ip = 66; continue _fun0005;
 56:
            var2 = _closure1_slot5;
            var1 = var2.KID_STARTED;
 66:
            return var1;
        }
    };
    var3['getAgeVerificationSurveyEntrypoint'] = var4;
    var2 = function(arg1, arg2, arg3, arg4, arg5) {
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 6;
        var3 = var3[var1];
        var1 = undefined;
        var5 = var4.bind(var1)(var3);
        var4 = var5.track;
        var2 = _closure1_slot7;
        var3 = var2.AGE_VERIFICATION_FEEDBACK_SUBMITTED;
        var2 = {};
        var6 = arg1;
        var2['rating'] = var6;
        var6 = arg2;
        var2['feedback'] = var6;
        var6 = arg3;
        var2['reason'] = var6;
        var6 = arg4;
        var2['skipped'] = var6;
        var6 = arg5;
        var2['entrypoint'] = var6;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var3['trackAgeVerificationFeedback'] = var2;
    return var1;
})();