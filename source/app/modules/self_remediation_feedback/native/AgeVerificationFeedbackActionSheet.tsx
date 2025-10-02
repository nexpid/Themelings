// app/modules/self_remediation_feedback/native/AgeVerificationFeedbackActionSheet.tsx
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
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AgeVerificationFeedbackReasons;
    var _closure1_slot4 = var7;
    var4 = var4.getAgeVerificationFeedbackOptions;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot7 = var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/self_remediation_feedback/native/AgeVerificationFeedbackActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function AgeVerificationFeedbackActionSheet(arg1) {
        var1 = arg1;
        var1 = var1.dismissibleContent;
        var _closure2_slot0 = var1;
        var13 = _closure1_slot0;
        var15 = _closure1_slot2;
        var2 = 4;
        var2 = var15[var2];
        var4 = undefined;
        var6 = var13.bind(var4)(var2);
        var3 = var6.useSelectedDismissibleContent;
        var2 = new Array(1);
        var2[0] = var1;
        var2 = var3.bind(var6)(var2);
        var14 = _closure1_slot1;
        var2 = 5;
        var2 = var15[var2];
        var3 = var14.bind(var4)(var2);
        var2 = _closure1_slot5;
        var2 = var2.bind(var4)(var1);
        var10 = var3.bind(var4)(var2);
        var _closure2_slot1 = var10;
        var6 = _closure1_slot3;
        var7 = var6.useMemo;
        var3 = new Array(1);
        var3[0] = var10;
        var2 = function() {
            var3 = _closure2_slot1;
            var2 = var3.map;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.value;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var9 = var7.bind(var6)(var2, var3);
        var7 = var6.useCallback;
        var3 = function() {
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 6;
            var3 = var3[var1];
            var1 = undefined;
            var5 = var4.bind(var1)(var3);
            var4 = var5.track;
            var2 = _closure1_slot6;
            var3 = var2.OPEN_MODAL;
            var2 = {};
            var6 = 'Age Verification User Feedback';
            var2['type'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        };
        var2 = new Array(0);
        var7 = var7.bind(var6)(var3, var2);
        var3 = var6.useCallback;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var1 = arg1;
                var4 = var1.rating;
                var10 = var1.feedback;
                var11 = var1.reason;
                var9 = null;
                var3 = var9 == var4;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var5 = 7;
                var8 = var7[var5];
                var1 = undefined;
                var13 = var6.bind(var1)(var8);
                var12 = var13.getAgeVerificationSurveyEntrypoint;
                var8 = _closure2_slot0;
                var8 = var12.bind(var13)(var8);
                var5 = var7[var5];
                var7 = var6.bind(var1)(var5);
                var6 = var7.trackAgeVerificationFeedback;
                var12 = var9 != var4;
                var5 = null;
                if(!var12) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var5 = var4;
case 2:
                var12 = var9 != var10;
                var4 = null;
                if(!var12) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var4 = var10;
case 4:
                var12 = var9 == var11;
                var10 = undefined;
                if(var12) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                var10 = var11.value;
case 6:
                var11 = var9 != var10;
                var9 = null;
                if(!var11) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                var9 = var10;
case 8:
                var19 = var7;
                var18 = var5;
                var17 = var4;
                var16 = var9;
                var15 = var3;
                var14 = var8;
                var4 = var19[var6](var18, var17, var16, var15, var14, var13);
                if(var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 8;
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.presentFeedbackSent;
                var2 = var2.bind(var3)();
case 10:
                return var1;
            }
        };
        var6 = var3.bind(var6)(var1, var2);
        var3 = _closure1_slot7;
        var1 = 9;
        var1 = var15[var1];
        var2 = var14.bind(var4)(var1);
        var1 = {'headerLabel': null, 'showHeaderCloseButton': true, 'hideDontShowAgainCheckbox': true};
        var12 = 10;
        var11 = var15[var12];
        var11 = var13.bind(var4)(var11);
        var18 = var11.intl;
        var17 = var18.string;
        var11 = 11;
        var16 = var15[var11];
        var16 = var14.bind(var4)(var16);
        var16 = var16.RqoA4u;
        var16 = var17.bind(var18)(var16);
        var1['headerLabel'] = var16;
        var16 = var15[var12];
        var16 = var13.bind(var4)(var16);
        var18 = var16.intl;
        var17 = var18.string;
        var16 = var15[var11];
        var16 = var14.bind(var4)(var16);
        var16 = var16.RPb8Zm;
        var16 = var17.bind(var18)(var16);
        var1['ratingsBodyLabel'] = var16;
        var12 = var15[var12];
        var12 = var13.bind(var4)(var12);
        var13 = var12.intl;
        var12 = var13.string;
        var11 = var15[var11];
        var11 = var14.bind(var4)(var11);
        var11 = var11.KZw6kp;
        var11 = var12.bind(var13)(var11);
        var1['reasonsHeaderLabel'] = var11;
        var1['reasons'] = var10;
        var1['feedbackReasons'] = var9;
        var8 = _closure1_slot4;
        var8 = var8.SOMETHING_ELSE;
        var1['otherKey'] = var8;
        var1['trackOpen'] = var7;
        var1['trackReport'] = var6;
        var5 = function getFreeformDescription(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var2 = arg1;
                var1 = null;
                var3 = var1 == var2;
                if(var3) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                var4 = var2.value;
                var2 = _closure1_slot4;
                var2 = var2.SOMETHING_ELSE;
                if(!(var4 !== var2)) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                var4 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 10;
                var2 = var8[var2];
                var7 = undefined;
                var2 = var4.bind(var7)(var2);
                var5 = var2.intl;
                var4 = var5.string;
                var6 = _closure1_slot1;
                var2 = 11;
                var2 = var8[var2];
                var2 = var6.bind(var7)(var2);
                var2 = var2.zApKaW;
                var2 = var4.bind(var5)(var2);
                _fun0002_ip = 16; continue _fun0002;
case 14:
                var5 = _closure1_slot0;
                var8 = _closure1_slot2;
                var4 = 10;
                var4 = var8[var4];
                var7 = undefined;
                var4 = var5.bind(var7)(var4);
                var5 = var4.intl;
                var4 = var5.string;
                var6 = _closure1_slot1;
                var3 = 11;
                var3 = var8[var3];
                var3 = var6.bind(var7)(var3);
                var3 = var3.Q5cQ4+;
                var2 = var4.bind(var5)(var3);
case 16:
                var1 = var2;
case 12:
                return var1;
            }
        };
        var1['getFreeformDescription'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();