// app/modules/voice_calls/native/action_sheet/VoiceFeedbackActionSheet.tsx
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
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.FeedbackType;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = function trackOpen() {
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 4;
        var3 = var3[var1];
        var1 = undefined;
        var5 = var4.bind(var1)(var3);
        var4 = var5.track;
        var2 = _closure1_slot3;
        var3 = var2.OPEN_POPOUT;
        var2 = {};
        var6 = 'Call Session Feedback';
        var2['type'] = var6;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var _closure1_slot6 = var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_calls/native/action_sheet/VoiceFeedbackActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function VoiceFeedbackActionSheet(arg1) {
        var1 = arg1;
        var1 = var1.analyticsData;
        var _closure2_slot0 = var1;
        var14 = _closure1_slot0;
        var11 = _closure1_slot2;
        var1 = 5;
        var1 = var11[var1];
        var4 = undefined;
        var3 = var14.bind(var4)(var1);
        var2 = var3.improperGetEnglishIntlMessageText;
        var1 = 'CALL_FEEDBACK_OPTION_OTHER';
        var7 = var2.bind(var3)(var1);
        var8 = 6;
        var1 = var11[var8];
        var1 = var14.bind(var4)(var1);
        var3 = var1.intl;
        var2 = var3.string;
        var1 = var11[var8];
        var1 = var14.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.Ss6tlZ;
        var10 = var2.bind(var3)(var1);
        var1 = var11[var8];
        var1 = var14.bind(var4)(var1);
        var3 = var1.intl;
        var2 = var3.string;
        var1 = var11[var8];
        var1 = var14.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.tLi4cX;
        var12 = var2.bind(var3)(var1);
        var3 = _closure1_slot5;
        var9 = _closure1_slot1;
        var1 = 7;
        var1 = var11[var1];
        var2 = var9.bind(var4)(var1);
        var1 = {};
        var1['headerLabel'] = var10;
        var10 = true;
        var1['showHeaderCloseButton'] = var10;
        var1['ratingsBodyLabel'] = var12;
        var12 = var11[var8];
        var12 = var14.bind(var4)(var12);
        var13 = var12.intl;
        var12 = var13.string;
        var8 = var11[var8];
        var8 = var14.bind(var4)(var8);
        var8 = var8.t;
        var8 = var8.FJmoxM;
        var8 = var12.bind(var13)(var8);
        var1['reasonsHeaderLabel'] = var8;
        var8 = 8;
        var8 = var11[var8];
        var9 = var9.bind(var4)(var8);
        var8 = {};
        var8['isMobile'] = var10;
        var8 = var9.bind(var4)(var8);
        var1['reasons'] = var8;
        var8 = new Array(1);
        var8[0] = var7;
        var1['feedbackReasons'] = var8;
        var1['otherKey'] = var7;
        var6 = _closure1_slot6;
        var1['trackOpen'] = var6;
        var5 = function trackReport(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var2 = arg1;
                var4 = var2.rating;
                var1 = var2.reason;
                var5 = var2.dontShowAgain;
                var10 = var2.feedback;
                var3 = null;
                var2 = var3 != var1;
                var11 = null;
                var9 = null;
                if(!var2) { _fun0001_ip = 50; continue _fun0001 }
 40:
                var11 = var1.code;
                var9 = var1.value;
 50:
                var7 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 9;
                var6 = var6[var1];
                var1 = undefined;
                var8 = var7.bind(var1)(var6);
                var6 = _closure1_slot3;
                var7 = var6.CALL_REPORT_PROBLEM;
                var6 = {};
                var6['rating'] = var4;
                var6['reasonCode'] = var11;
                var6['reasonDescription'] = var9;
                var11 = var3 != var10;
                var9 = '';
                if(!var11) { _fun0001_ip = 116; continue _fun0001 }
 113:
                var9 = var10;
 116:
                var6['feedback'] = var9;
                var9 = _closure2_slot0;
                var6['analyticsData'] = var9;
                var6 = var8.bind(var1)(var7, var6);
                if(!var5) { _fun0001_ip = 200; continue _fun0001 }
 142:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var5 = 10;
                var5 = var7[var5];
                var7 = var6.bind(var1)(var5);
                var6 = var7.processOptOut;
                var5 = {};
                var8 = _closure1_slot4;
                var8 = var8.VOICE;
                var5['feedbackType'] = var8;
                var8 = 'VoiceFeedbackActionSheet';
                var5['location'] = var8;
                var5 = var6.bind(var7)(var5);
 200:
                if(!(var3 != var4)) { _fun0001_ip = 234; continue _fun0001 }
 204:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 11;
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.presentFeedbackSent;
                var2 = var2.bind(var3)();
 234:
                return var1;
            }
        };
        var1['trackReport'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();