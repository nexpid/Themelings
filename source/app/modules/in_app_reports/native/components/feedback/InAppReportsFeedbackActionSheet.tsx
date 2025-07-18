// app/modules/in_app_reports/native/components/feedback/InAppReportsFeedbackActionSheet.tsx
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
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/in_app_reports/native/components/feedback/InAppReportsFeedbackActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function InAppReportsFeedbackActionSheet(arg1) {
        var1 = arg1;
        var2 = var1.reportId;
        var _closure2_slot0 = var2;
        var1 = var1.reportType;
        var _closure2_slot1 = var1;
        var2 = _closure1_slot1;
        var12 = _closure1_slot2;
        var3 = 4;
        var3 = var12[var3];
        var4 = undefined;
        var3 = var2.bind(var4)(var3);
        var7 = var3.bind(var4)();
        var11 = _closure1_slot0;
        var3 = 5;
        var3 = var12[var3];
        var8 = var11.bind(var4)(var3);
        var6 = var8.improperGetEnglishIntlMessageText;
        var3 = 'CALL_FEEDBACK_OPTION_OTHER';
        var6 = var6.bind(var8)(var3);
        var3 = _closure1_slot5;
        var1 = 6;
        var1 = var12[var1];
        var2 = var2.bind(var4)(var1);
        var1 = {'headerLabel': null, 'showHeaderCloseButton': true, 'hideDontShowAgainCheckbox': true};
        var8 = 7;
        var9 = var12[var8];
        var9 = var11.bind(var4)(var9);
        var13 = var9.intl;
        var10 = var13.string;
        var9 = var12[var8];
        var9 = var11.bind(var4)(var9);
        var9 = var9.t;
        var9 = var9.MP5lDg;
        var9 = var10.bind(var13)(var9);
        var1['headerLabel'] = var9;
        var9 = var12[var8];
        var9 = var11.bind(var4)(var9);
        var13 = var9.intl;
        var10 = var13.string;
        var9 = var12[var8];
        var9 = var11.bind(var4)(var9);
        var9 = var9.t;
        var9 = var9.7Ct0Dg;
        var9 = var10.bind(var13)(var9);
        var1['ratingsBodyLabel'] = var9;
        var9 = var12[var8];
        var9 = var11.bind(var4)(var9);
        var10 = var9.intl;
        var9 = var10.string;
        var8 = var12[var8];
        var8 = var11.bind(var4)(var8);
        var8 = var8.t;
        var8 = var8.FJmoxM;
        var8 = var9.bind(var10)(var8);
        var1['reasonsHeaderLabel'] = var8;
        var1['reasons'] = var7;
        var7 = new Array(1);
        var7[0] = var6;
        var1['feedbackReasons'] = var7;
        var1['otherKey'] = var6;
        var6 = function trackOpen() {
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 8;
            var3 = var3[var1];
            var1 = undefined;
            var5 = var4.bind(var1)(var3);
            var4 = var5.track;
            var2 = _closure1_slot3;
            var3 = var2.IAR_FEEDBACK_MODAL_VIEWED;
            var2 = {};
            var7 = _closure2_slot0;
            var2['report_id'] = var7;
            var6 = _closure2_slot1;
            var2['report_type'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        };
        var1['trackOpen'] = var6;
        var5 = function trackReport(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var2 = arg1;
                var4 = var2.rating;
                var1 = var2.reason;
                var9 = var2.feedback;
                var5 = var2.dontShowAgain;
                var3 = null;
                var2 = var3 != var1;
                var8 = null;
                if(!var2) { _fun0001_ip = 43; continue _fun0001 }
 38:
                var8 = var1.value;
 43:
                var7 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 9;
                var6 = var6[var1];
                var1 = undefined;
                var7 = var7.bind(var1)(var6);
                var6 = {};
                var6['rating'] = var4;
                var6['problem'] = var8;
                var10 = var3 != var9;
                var8 = '';
                if(!var10) { _fun0001_ip = 94; continue _fun0001 }
 91:
                var8 = var9;
 94:
                var6['feedback'] = var8;
                var9 = _closure2_slot0;
                var6['reportId'] = var9;
                var8 = _closure2_slot1;
                var6['reportType'] = var8;
                var8 = var3 != var5;
                if(!var8) { _fun0001_ip = 130; continue _fun0001 }
 127:
                var8 = var5;
 130:
                var6['dontShowAgain'] = var8;
                var6 = var7.bind(var1)(var6);
                if(!var5) { _fun0001_ip = 201; continue _fun0001 }
 143:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var5 = 10;
                var5 = var7[var5];
                var7 = var6.bind(var1)(var5);
                var6 = var7.processOptOut;
                var5 = {};
                var8 = _closure1_slot4;
                var8 = var8.IN_APP_REPORTS;
                var5['feedbackType'] = var8;
                var8 = 'InAppReportsFeedbackActionSheet';
                var5['location'] = var8;
                var5 = var6.bind(var7)(var5);
 201:
                if(!(var3 != var4)) { _fun0001_ip = 235; continue _fun0001 }
 205:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 11;
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.presentFeedbackSent;
                var2 = var2.bind(var3)();
 235:
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