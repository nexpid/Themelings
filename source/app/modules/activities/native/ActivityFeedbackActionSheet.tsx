// app/modules/activities/native/ActivityFeedbackActionSheet.tsx
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
    var7 = var4.ActivityFeedbackReasons;
    var _closure1_slot3 = var7;
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
    var4 = var4.jsx;
    var _closure1_slot6 = var4;
    var8 = var7.OTHER;
    var4 = new Array(3);
    var4[0] = var8;
    var8 = var7.ADS;
    var4[1] = var8;
    var7 = var7.NOT_FUN;
    var4[2] = var7;
    var _closure1_slot7 = var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activities/native/ActivityFeedbackActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ActivityFeedbackActionSheet(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var16 = var1.activityApplication;
            var _closure2_slot0 = var16;
            var2 = var1.channel;
            var _closure2_slot1 = var2;
            var2 = var1.embeddedActivityLocation;
            var _closure2_slot2 = var2;
            var1 = var1.analyticsData;
            var _closure2_slot3 = var1;
            var2 = var16.embeddedActivityConfig;
            var1 = null;
            var3 = var1 == var2;
            var4 = undefined;
            var1 = undefined;
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var2.displays_advertisements;
case 2:
            var2 = _closure1_slot1;
            var12 = _closure1_slot2;
            var3 = 6;
            var3 = var12[var3];
            var3 = var2.bind(var4)(var3);
            var9 = true;
            var1 = var9 === var1;
            var7 = var3.bind(var4)(var9, var1);
            var3 = _closure1_slot6;
            var1 = 7;
            var1 = var12[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var11 = _closure1_slot0;
            var8 = 8;
            var10 = var12[var8];
            var10 = var11.bind(var4)(var10);
            var15 = var10.intl;
            var14 = var15.formatToPlainString;
            var10 = var12[var8];
            var10 = var11.bind(var4)(var10);
            var10 = var10.t;
            var13 = var10.QXYwoK;
            var10 = {};
            var16 = var16.name;
            var10['applicationName'] = var16;
            var10 = var14.bind(var15)(var13, var10);
            var1['headerLabel'] = var10;
            var1['showHeaderCloseButton'] = var9;
            var9 = var12[var8];
            var9 = var11.bind(var4)(var9);
            var13 = var9.intl;
            var10 = var13.string;
            var9 = var12[var8];
            var9 = var11.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.9hk2KC;
            var9 = var10.bind(var13)(var9);
            var1['ratingsBodyLabel'] = var9;
            var9 = var12[var8];
            var9 = var11.bind(var4)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var8 = var12[var8];
            var8 = var11.bind(var4)(var8);
            var8 = var8.t;
            var8 = var8.g1q5fn;
            var8 = var9.bind(var10)(var8);
            var1['reasonsHeaderLabel'] = var8;
            var1['reasons'] = var7;
            var7 = _closure1_slot7;
            var1['feedbackReasons'] = var7;
            var6 = _closure1_slot3;
            var6 = var6.OTHER;
            var1['otherKey'] = var6;
            var6 = function trackOpen() {
                var5 = _closure2_slot0;
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 5;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.track;
                var1 = _closure1_slot4;
                var2 = var1.OPEN_POPOUT;
                var1 = {};
                var6 = 'Activity Feedback Sheet';
                var1['type'] = var6;
                var6 = var5.id;
                var1['application_id'] = var6;
                var6 = var5.name;
                var1['application_name'] = var6;
                var5 = var5.id;
                var1['game_id'] = var5;
                var5 = 'Activity End';
                var1['source'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                var1 = undefined;
                return var1;
            };
            var1['trackOpen'] = var6;
            var5 = function trackReport(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = arg1;
                    var4 = var1.rating;
                    var2 = var1.reason;
                    var7 = var1.feedback;
                    var1 = var1.dontShowAgain;
                    var6 = null;
                    var3 = var6 != var2;
                    var5 = null;
                    if(!var3) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var5 = var2.value;
case 4:
                    if(!var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var2 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var1 = 5;
                    var1 = var9[var1];
                    var3 = undefined;
                    var11 = var2.bind(var3)(var1);
                    var10 = var11.track;
                    var1 = _closure1_slot4;
                    var2 = var1.ACTIVITY_REPORT_DONT_SHOW;
                    var1 = {};
                    var12 = _closure2_slot0;
                    var12 = var12.id;
                    var1['application_id'] = var12;
                    var1['rating'] = var4;
                    var1 = var10.bind(var11)(var2, var1);
                    var2 = _closure1_slot0;
                    var1 = 9;
                    var1 = var9[var1];
                    var3 = var2.bind(var3)(var1);
                    var2 = var3.processOptOut;
                    var1 = {};
                    var8 = _closure1_slot5;
                    var8 = var8.ACTIVITY;
                    var1['feedbackType'] = var8;
                    var8 = 'ActivityFeedbackActionSheet';
                    var1['location'] = var8;
                    var1 = var2.bind(var3)(var1);
case 6:
                    if(!(var6 != var4)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var9 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var2 = 10;
                    var2 = var8[var2];
                    var3 = undefined;
                    var9 = var9.bind(var3)(var2);
                    var2 = var9.presentFeedbackSent;
                    var2 = var2.bind(var9)();
                    var2 = _closure1_slot1;
                    var1 = 11;
                    var1 = var8[var1];
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var1['problem'] = var5;
                    var8 = _closure2_slot1;
                    var1['channel'] = var8;
                    var8 = _closure2_slot2;
                    var1['embeddedActivityLocation'] = var8;
                    var8 = var6 != var7;
                    var6 = '';
                    if(!var8) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var6 = var7;
case 10:
                    var1['feedback'] = var6;
                    var6 = _closure2_slot0;
                    var1['activityApplication'] = var6;
                    var5 = _closure2_slot3;
                    var1['analyticsData'] = var5;
                    var5 = 'Activity End';
                    var1['location'] = var5;
                    var1['rating'] = var4;
                    var1 = var2.bind(var3)(var1);
case 8:
                    var1 = undefined;
                    return var1;
                }
            };
            var1['trackReport'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();