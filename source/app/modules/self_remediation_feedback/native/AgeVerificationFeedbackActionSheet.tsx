// app/modules/self_remediation_feedback/native/AgeVerificationFeedbackActionSheet.tsx
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
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = native4;
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
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/self_remediation_feedback/native/AgeVerificationFeedbackActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function AgeVerificationFeedbackActionSheet(arg1) {
        var1 = arg1;
        var1 = var1.didStartVerification;
        var _closure2_slot0 = var1;
        var14 = _closure1_slot1;
        var15 = _closure1_slot2;
        var2 = 4;
        var2 = var15[var2];
        var4 = undefined;
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
            var1 = 5;
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
 0:
                var1 = arg1;
                var4 = var1.rating;
                var10 = var1.feedback;
                var11 = var1.reason;
                var9 = null;
                var3 = var9 == var4;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var5 = 6;
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
                if(!var12) { _fun0001_ip = 97; continue _fun0001 }
 94:
                var5 = var4;
 97:
                var12 = var9 != var10;
                var4 = null;
                if(!var12) { _fun0001_ip = 109; continue _fun0001 }
 106:
                var4 = var10;
 109:
                var12 = var9 == var11;
                var10 = undefined;
                if(var12) { _fun0001_ip = 123; continue _fun0001 }
 118:
                var10 = var11.value;
 123:
                var11 = var9 != var10;
                var9 = null;
                if(!var11) { _fun0001_ip = 135; continue _fun0001 }
 132:
                var9 = var10;
 135:
                var19 = var7;
                var18 = var5;
                var17 = var4;
                var16 = var9;
                var15 = var3;
                var14 = var8;
                var4 = var19[var6](var18, var17, var16, var15, var14, var13);
                if(var3) { _fun0001_ip = 190; continue _fun0001 }
 160:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 7;
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.presentFeedbackSent;
                var2 = var2.bind(var3)();
 190:
                return var1;
            }
        };
        var6 = var3.bind(var6)(var1, var2);
        var3 = _closure1_slot7;
        var1 = 8;
        var1 = var15[var1];
        var2 = var14.bind(var4)(var1);
        var1 = {'headerLabel': null, 'showHeaderCloseButton': true, 'hideDontShowAgainCheckbox': true};
        var13 = _closure1_slot0;
        var12 = 9;
        var11 = var15[var12];
        var11 = var13.bind(var4)(var11);
        var18 = var11.intl;
        var17 = var18.string;
        var11 = 10;
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
 0:
                var2 = arg1;
                var1 = null;
                var3 = var1 == var2;
                if(var3) { _fun0002_ip = 164; continue _fun0002 }
 15:
                var4 = var2.value;
                var2 = _closure1_slot4;
                var2 = var2.SOMETHING_ELSE;
                if(!(var4 !== var2)) { _fun0002_ip = 100; continue _fun0002 }
 37:
                var4 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 9;
                var2 = var8[var2];
                var7 = undefined;
                var2 = var4.bind(var7)(var2);
                var5 = var2.intl;
                var4 = var5.string;
                var6 = _closure1_slot1;
                var2 = 10;
                var2 = var8[var2];
                var2 = var6.bind(var7)(var2);
                var2 = var2.zApKaW;
                var2 = var4.bind(var5)(var2);
                _fun0002_ip = 161; continue _fun0002;
 100:
                var5 = _closure1_slot0;
                var8 = _closure1_slot2;
                var4 = 9;
                var4 = var8[var4];
                var7 = undefined;
                var4 = var5.bind(var7)(var4);
                var5 = var4.intl;
                var4 = var5.string;
                var6 = _closure1_slot1;
                var3 = 10;
                var3 = var8[var3];
                var3 = var6.bind(var7)(var3);
                var3 = var3.Q5cQ4+;
                var2 = var4.bind(var5)(var3);
 161:
                var1 = var2;
 164:
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