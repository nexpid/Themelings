// app/actions/SurveyActionCreators.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var8 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var4 = 0;
    var7 = var6[var4];
    var1 = undefined;
    var7 = var8.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.SURVEY_REFETCH_INTERVAL;
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot5 = var7;
    var7 = var4.NoticeTypes;
    var _closure1_slot6 = var7;
    var4 = var4.Endpoints;
    var _closure1_slot7 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'actions/SurveyActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function overrideSurvey(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'SURVEY_OVERRIDE';
        var2['type'] = var5;
        var5 = arg1;
        var2['id'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['overrideSurvey'] = var4;
    var4 = function surveyHide(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var7 = arg1;
            var6 = arg2;
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 2;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var5 = 'SURVEY_HIDE';
            var2['type'] = var5;
            var2['key'] = var7;
            var2 = var3.bind(var4)(var2);
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 3;
            var2 = var4[var2];
            var5 = var3.bind(var1)(var2);
            var4 = var5.track;
            var2 = _closure1_slot5;
            if(var6) { _fun0001_ip = 120; continue _fun0001 }
 89:
            var9 = var2.APP_NOTICE_PRIMARY_CTA_OPENED;
            var3 = {};
            var10 = _closure1_slot6;
            var10 = var10.SURVEY;
            var3['notice_type'] = var10;
            var3 = var4.bind(var5)(var9, var3);
            _fun0001_ip = 161; continue _fun0001;
 120:
            var3 = var2.APP_NOTICE_CLOSED;
            var2 = {};
            var8 = _closure1_slot6;
            var8 = var8.SURVEY;
            var2['notice_type'] = var8;
            var2['survey_id'] = var7;
            var2['dismissed'] = var6;
            var2 = var4.bind(var5)(var3, var2);
 161:
            return var1;
        }
    };
    var3['surveyHide'] = var4;
    var4 = function surveyFetch(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var4 = arg1;
            var2 = arg2;
            var5 = {};
            var3 = null;
            if(!(var3 != var4)) { _fun0002_ip = 24; continue _fun0002 }
 16:
            var5['survey_override'] = var4;
 24:
            if(!(var3 != var2)) { _fun0002_ip = 36; continue _fun0002 }
 28:
            var5['disable_auto_seen'] = var2;
 36:
            var3 = _closure1_slot1;
            var9 = _closure1_slot2;
            var2 = 4;
            var2 = var9[var2];
            var8 = undefined;
            var4 = var3.bind(var8)(var2);
            var3 = var4.get;
            var2 = {};
            var7 = _closure1_slot7;
            var7 = var7.USER_SURVEY;
            var2['url'] = var7;
            var2['query'] = var5;
            var5 = {};
            var7 = _closure1_slot0;
            var6 = 5;
            var6 = var9[var6];
            var6 = var7.bind(var8)(var6);
            var6 = var6.NetworkActionNames;
            var6 = var6.USER_SURVEY_FETCH;
            var5['event'] = var6;
            var6 = function properties(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = arg1;
                    var6 = null;
                    var2 = var6 == var1;
                    var4 = undefined;
                    var5 = undefined;
                    if(var2) { _fun0003_ip = 36; continue _fun0003 }
 16:
                    var1 = var1.body;
                    var2 = var6 == var1;
                    var5 = undefined;
                    if(var2) { _fun0003_ip = 36; continue _fun0003 }
 30:
                    var5 = var1.survey;
 36:
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 6;
                    var1 = var3[var1];
                    var3 = var2.bind(var4)(var1);
                    var2 = var3.exact;
                    var1 = {};
                    var6 = var6 == var5;
                    var4 = undefined;
                    if(var6) { _fun0003_ip = 81; continue _fun0003 }
 76:
                    var4 = var5.key;
 81:
                    var1['key'] = var4;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var5['properties'] = var6;
            var2['trackedActionData'] = var5;
            var5 = false;
            var2['rejectWithError'] = var5;
            var4 = var3.bind(var4)(var2);
            var3 = var4.then;
            var2 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var6 = arg1;
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 2;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.dispatch;
                    var2 = {};
                    var5 = 'SURVEY_FETCHED';
                    var2['type'] = var5;
                    var7 = null;
                    var8 = var7 == var6;
                    var5 = undefined;
                    if(var8) { _fun0004_ip = 76; continue _fun0004 }
 56:
                    var6 = var6.body;
                    var7 = var7 == var6;
                    var5 = undefined;
                    if(var7) { _fun0004_ip = 76; continue _fun0004 }
 70:
                    var5 = var6.survey;
 76:
                    var2['survey'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var1 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 2;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.dispatch;
                var2 = {'type': 'SURVEY_FETCHED', 'survey': null};
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['surveyFetch'] = var4;
    var2 = function surveySeen(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var10 = arg1;
            var _closure2_slot0 = var10;
            var2 = _closure1_slot3;
            var1 = var2.getLastSeenTimestamp;
            var2 = var1.bind(var2)();
            var1 = null;
            if(!(var1 !== var2)) { _fun0005_ip = 71; continue _fun0005 }
 34:
            if(!(var1 != var2)) { _fun0005_ip = 67; continue _fun0005 }
 38:
            var1 = global;
            var3 = var1.Date;
            var1 = var3.now;
            var1 = var1.bind(var3)();
            var2 = var1 - var2;
            var1 = _closure1_slot4;
            if(!(!(var2 >= var1))) { _fun0005_ip = 71; continue _fun0005 }
 67:
            var1 = undefined;
            return var1;
 71:
            var2 = _closure1_slot1;
            var9 = _closure1_slot2;
            var1 = 2;
            var1 = var9[var1];
            var8 = undefined;
            var4 = var2.bind(var8)(var1);
            var3 = var4.dispatch;
            var1 = {};
            var7 = 'SURVEY_SEEN';
            var1['type'] = var7;
            var1['key'] = var10;
            var1 = var3.bind(var4)(var1);
            var1 = 4;
            var1 = var9[var1];
            var3 = var2.bind(var8)(var1);
            var2 = var3.post;
            var1 = {};
            var7 = _closure1_slot7;
            var4 = var7.USER_SURVEY_SEEN;
            var4 = var4.bind(var7)(var10);
            var1['url'] = var4;
            var4 = {};
            var7 = _closure1_slot0;
            var6 = 5;
            var6 = var9[var6];
            var6 = var7.bind(var8)(var6);
            var6 = var6.NetworkActionNames;
            var6 = var6.USER_SURVEY_SEEN;
            var4['event'] = var6;
            var5 = function properties() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 6;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.exact;
                var1 = {};
                var4 = _closure2_slot0;
                var1['key'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var4['properties'] = var5;
            var1['trackedActionData'] = var4;
            var4 = false;
            var1['rejectWithError'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['surveySeen'] = var2;
    return var1;
})();