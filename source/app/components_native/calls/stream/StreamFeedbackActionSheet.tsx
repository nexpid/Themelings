// app/components_native/calls/stream/StreamFeedbackActionSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
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
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.FeedbackType;
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.StreamIssueReportReasons;
    var _closure1_slot6 = var4;
    var7 = 5;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.jsx;
    var _closure1_slot7 = var7;
    var7 = var4.OTHER;
    var4 = new Array(1);
    var4[0] = var7;
    var _closure1_slot8 = var4;
    var4 = 17;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'components_native/calls/stream/StreamFeedbackActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function StreamFeedbackActionSheet(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var3 = var1.stream;
            var _closure2_slot0 = var3;
            var1 = var1.analyticsData;
            var _closure2_slot1 = var1;
            var8 = _closure1_slot0;
            var15 = _closure1_slot2;
            var1 = 6;
            var1 = var15[var1];
            var4 = undefined;
            var2 = var8.bind(var4)(var1);
            var1 = var2.useGetStreamApplication;
            var1 = var1.bind(var2)(var3);
            var _closure2_slot2 = var1;
            var1 = 7;
            var1 = var15[var1];
            var7 = var8.bind(var4)(var1);
            var3 = var7.useStateFromStores;
            var1 = _closure1_slot3;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var2 = _closure1_slot3;
                var1 = var2.getId;
                var2 = var1.bind(var2)();
                var1 = _closure2_slot0;
                var1 = var1.ownerId;
                var1 = var2 === var1;
                return var1;
            };
            var10 = var3.bind(var7)(var2, var1);
            var1 = 8;
            var1 = var15[var1];
            var3 = var8.bind(var4)(var1);
            var2 = var3.useCallSurveyRefreshExperiment;
            var1 = {};
            var9 = 'StreamFeedbackActionSheet';
            var1['location'] = var9;
            var1 = var2.bind(var3)(var1);
            var7 = var1.showVibesHoneypot;
            var1 = 9;
            var1 = var15[var1];
            var3 = var8.bind(var4)(var1);
            var2 = var3.useFeedbackPersistenceExperiment;
            var1 = {};
            var1['location'] = var9;
            var1 = var2.bind(var3)(var1);
            var11 = var1.showMobileOptOuts;
            var12 = 10;
            var1 = var15[var12];
            var1 = var8.bind(var4)(var1);
            var3 = var1.intl;
            var2 = var3.string;
            var1 = var15[var12];
            var1 = var8.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.5smP3d;
            var14 = var2.bind(var3)(var1);
            var1 = var15[var12];
            var1 = var8.bind(var4)(var1);
            var3 = var1.intl;
            var2 = var3.string;
            var1 = var15[var12];
            var1 = var8.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.0uxA2d;
            var9 = var2.bind(var3)(var1);
            var1 = var15[var12];
            var1 = var8.bind(var4)(var1);
            var3 = var1.intl;
            var2 = var3.string;
            var1 = var15[var12];
            var1 = var8.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.CqjnLC;
            var8 = var2.bind(var3)(var1);
            var2 = _closure1_slot1;
            var1 = 11;
            var1 = var15[var1];
            var3 = var2.bind(var4)(var1);
            var1 = {'isStreamer': false, 'isEndStream': true};
            var13 = true;
            var1['showVibesHoneypot'] = var7;
            var7 = var3.bind(var4)(var1);
            var3 = _closure1_slot7;
            var1 = 12;
            var1 = var15[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['headerLabel'] = var14;
            var1['showHeaderCloseButton'] = var13;
            var11 = !var11;
            var1['hideDontShowAgainCheckbox'] = var11;
            if(!var10) { _fun0001_ip = 408; continue _fun0001 }
 405:
            var8 = var9;
 408:
            var1['ratingsBodyLabel'] = var8;
            var11 = _closure1_slot0;
            var8 = _closure1_slot2;
            var9 = var8[var12];
            var9 = var11.bind(var4)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var8 = var8[var12];
            var8 = var11.bind(var4)(var8);
            var8 = var8.t;
            var8 = var8.XuqqwM;
            var8 = var9.bind(var10)(var8);
            var1['reasonsHeaderLabel'] = var8;
            var1['reasons'] = var7;
            var7 = _closure1_slot8;
            var1['feedbackReasons'] = var7;
            var7 = function trackOpen() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 13;
                    var3 = var3[var1];
                    var1 = undefined;
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.track;
                    var2 = _closure1_slot4;
                    var3 = var2.OPEN_POPOUT;
                    var2 = {};
                    var6 = 'Stream Feedback Sheet';
                    var2['type'] = var6;
                    var6 = _closure2_slot0;
                    var6 = var6.ownerId;
                    var2['other_user_id'] = var6;
                    var8 = _closure2_slot2;
                    var6 = null;
                    var9 = var6 != var8;
                    var8 = null;
                    if(!var9) { _fun0002_ip = 94; continue _fun0002 }
 85:
                    var9 = _closure2_slot2;
                    var8 = var9.id;
 94:
                    var2['application_id'] = var8;
                    var8 = _closure2_slot2;
                    var9 = var6 != var8;
                    var8 = null;
                    if(!var9) { _fun0002_ip = 121; continue _fun0002 }
 112:
                    var9 = _closure2_slot2;
                    var8 = var9.name;
 121:
                    var2['application_name'] = var8;
                    var8 = _closure2_slot2;
                    var8 = var6 != var8;
                    var6 = null;
                    if(!var8) { _fun0002_ip = 148; continue _fun0002 }
 139:
                    var7 = _closure2_slot2;
                    var6 = var7.id;
 148:
                    var2['game_id'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                }
            };
            var1['trackOpen'] = var7;
            var6 = function trackReport(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = arg1;
                    var5 = var3.rating;
                    var2 = var3.reason;
                    var1 = var3.dontShowAgain;
                    var8 = var3.feedback;
                    var7 = null;
                    var3 = var7 != var2;
                    var6 = null;
                    if(!var3) { _fun0003_ip = 43; continue _fun0003 }
 38:
                    var6 = var2.value;
 43:
                    if(!(var7 != var5)) { _fun0003_ip = 175; continue _fun0003 }
 50:
                    var10 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var3 = 14;
                    var3 = var9[var3];
                    var4 = undefined;
                    var10 = var10.bind(var4)(var3);
                    var3 = var10.presentFeedbackSent;
                    var3 = var3.bind(var10)();
                    var3 = _closure1_slot1;
                    var2 = 15;
                    var2 = var9[var2];
                    var3 = var3.bind(var4)(var2);
                    var2 = {};
                    var2['problem'] = var6;
                    var9 = _closure2_slot0;
                    var2['stream'] = var9;
                    var9 = var7 != var8;
                    var7 = '';
                    if(!var9) { _fun0003_ip = 134; continue _fun0003 }
 131:
                    var7 = var8;
 134:
                    var2['feedback'] = var7;
                    var7 = _closure2_slot2;
                    var2['streamApplication'] = var7;
                    var6 = _closure2_slot1;
                    var2['analyticsData'] = var6;
                    var6 = 'Stream';
                    var2['location'] = var6;
                    var2['rating'] = var5;
                    var2 = var3.bind(var4)(var2);
 175:
                    if(!var1) { _fun0003_ip = 241; continue _fun0003 }
 178:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 16;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.processOptOut;
                    var1 = {};
                    var4 = _closure1_slot5;
                    var4 = var4.STREAM;
                    var1['feedbackType'] = var4;
                    var4 = 'StreamFeedbackActionSheet';
                    var1['location'] = var4;
                    var1 = var2.bind(var3)(var1);
 241:
                    var1 = undefined;
                    return var1;
                }
            };
            var1['trackReport'] = var6;
            var5 = _closure1_slot6;
            var5 = var5.OTHER;
            var1['otherKey'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();