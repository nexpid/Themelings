// app/modules/feedback/native/FeedbackManager.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
 2: // try_start_0
            var2 = global;
            var3 = var2.Boolean;
            var3 = var3.prototype;
            var4 = var3.valueOf;
            var3 = var4.call;
            var8 = var2.Reflect;
            var7 = var8.construct;
            var6 = var2.Boolean;
            var5 = new Array(0);
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = var7.bind(var8)(var6, var5, var2);
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var _closure2_slot0 = var2;
 72: // try_end0
            _fun0001_ip = 76; continue _fun0001;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot13 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot13 = var1;
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.FeedbackType;
    var _closure1_slot12 = var4;
    var4 = 21;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var3 = function FeedbackManager(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var5 = this;
                var13 = 0;
                var1 = copyRestArgs(var13);
                var8 = _closure1_slot4;
                var3 = _closure2_slot0;
                var4 = undefined;
                var8 = var8.bind(var4)(var5, var3);
                var10 = new Array(0);
                var13 = var10;
                var12 = var1;
                var11 = 0;
                var1 = arraySpread(var13, var12, var11);
                var1 = _closure1_slot6;
                var9 = var1.bind(var4)(var3);
                var3 = _closure1_slot5;
                var1 = _closure1_slot13;
                var1 = var1.bind(var4)();
                if(var1) { _fun0002_ip = 86; continue _fun0002 }
 73:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0002_ip = 120; continue _fun0002;
 86:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
 120:
                var1 = var3.bind(var4)(var5, var1);
                var _closure3_slot0 = var1;
                var3 = {};
                var4 = function VOICE_CHANNEL_SHOW_FEEDBACK(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.handleShowVoiceFeedback;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var3['VOICE_CHANNEL_SHOW_FEEDBACK'] = var4;
                var4 = function STREAM_CLOSE(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.handleShowStreamFeedback;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var3['STREAM_CLOSE'] = var4;
                var4 = function EMBEDDED_ACTIVITY_CLOSE(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.handleShowActivityFeedback;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var3['EMBEDDED_ACTIVITY_CLOSE'] = var4;
                var4 = function IN_APP_REPORTS_SHOW_FEEDBACK(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.handleInAppReportsFeedback;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var3['IN_APP_REPORTS_SHOW_FEEDBACK'] = var4;
                var4 = function BLOCK_USER_SHOW_FEEDBACK() {
                    var2 = _closure3_slot0;
                    var1 = var2.handleBlockUserFeedback;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var3['BLOCK_USER_SHOW_FEEDBACK'] = var4;
                var4 = function AGE_VERIFICATION_SHOW_FEEDBACK(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.handleAgeVerificationFeedback;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var3['AGE_VERIFICATION_SHOW_FEEDBACK'] = var4;
                var1['actions'] = var3;
                var3 = function(arg1) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var2 = arg1;
                        var3 = var2.streamKey;
                        var _closure4_slot0 = var3;
                        var2 = var2.canShowFeedback;
                        if(!var2) { _fun0003_ip = 63; continue _fun0003 }
 24:
                        var4 = _closure3_slot0;
                        var3 = var4.possiblyShowFeedbackModal;
                        var2 = _closure1_slot12;
                        var2 = var2.STREAM;
                        var1 = function() {
                            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                                var5 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var1 = 10;
                                var4 = var4[var1];
                                var1 = undefined;
                                var6 = var5.bind(var1)(var4);
                                var5 = var6.decodeStreamKey;
                                var4 = _closure4_slot0;
                                var4 = var5.bind(var6)(var4);
                                var _closure5_slot0 = var4;
                                var6 = _closure1_slot9;
                                var5 = var6.getChannel;
                                var4 = var4.channelId;
                                var6 = var5.bind(var6)(var4);
                                var4 = null;
                                if(!(var4 != var6)) { _fun0004_ip = 90; continue _fun0004 }
 74:
                                var5 = var6.isGuildStageVoice;
                                var5 = var5.bind(var6)();
                                if(var5) { _fun0004_ip = 275; continue _fun0004 }
 90:
                                var8 = _closure1_slot11;
                                var6 = var8.getVideoStats;
                                var5 = _closure4_slot0;
                                var5 = var6.bind(var8)(var5);
                                if(!(var4 == var5)) { _fun0004_ip = 115; continue _fun0004 }
 113:
                                var5 = {};
 115:
                                var4 = {};
                                var8 = _closure1_slot11;
                                var6 = var8.getMediaSessionId;
                                var7 = _closure4_slot0;
                                var6 = var6.bind(var8)(var7);
                                var4['media_session_id'] = var6;
                                var6 = var8.getRtcConnectionId;
                                var6 = var6.bind(var8)(var7);
                                var4['rtc_connection_id'] = var6;
                                var6 = var8.getRegion;
                                var6 = var6.bind(var8)(var7);
                                var4['stream_region'] = var6;
                                var6 = var8.getMaxViewers;
                                var6 = var6.bind(var8)(var7);
                                var4['max_viewers'] = var6;
                                var10 = var4;
                                var9 = var5;
                                var5 = copyDataProperties(var10, var9);
                                var _closure5_slot1 = var4;
                                var4 = _closure1_slot0;
                                var5 = _closure1_slot2;
                                var3 = 12;
                                var3 = var5[var3];
                                var7 = var4.bind(var1)(var3);
                                var3 = 11;
                                var6 = var5[var3];
                                var3 = var5.paths;
                                var3 = var7.bind(var1)(var6, var3);
                                var _closure5_slot2 = var3;
                                var3 = 13;
                                var3 = var5[var3];
                                var4 = var4.bind(var1)(var3);
                                var3 = var4.runAfterInteractions;
                                var2 = function() {
                                    var3 = _closure1_slot1;
                                    var2 = _closure1_slot2;
                                    var1 = 14;
                                    var2 = var2[var1];
                                    var1 = undefined;
                                    var6 = var3.bind(var1)(var2);
                                    var5 = var6.openLazy;
                                    var4 = _closure5_slot2;
                                    var8 = _closure4_slot0;
                                    var2 = global;
                                    var2 = var2.HermesInternal;
                                    var3 = var2.concat;
                                    var2 = 'StreamFeedback';
                                    var3 = var3.bind(var2)(var8);
                                    var2 = {};
                                    var8 = _closure5_slot0;
                                    var2['stream'] = var8;
                                    var7 = _closure5_slot1;
                                    var2['analyticsData'] = var7;
                                    var2 = var5.bind(var6)(var4, var3, var2);
                                    return var1;
                                };
                                var2 = var3.bind(var4)(var2);
 275:
                                return var1;
                            }
                        };
                        var1 = var3.bind(var4)(var2, var1);
 63:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleShowStreamFeedback'] = var3;
                var3 = function(arg1) {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                        var1 = arg1;
                        var6 = var1.applicationId;
                        var _closure4_slot0 = var6;
                        var8 = var1.location;
                        var _closure4_slot1 = var8;
                        var5 = var1.showFeedback;
                        var4 = _closure1_slot8;
                        var1 = var4.getApplication;
                        var6 = var1.bind(var4)(var6);
                        var _closure4_slot2 = var6;
                        var7 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 15;
                        var4 = var4[var1];
                        var1 = undefined;
                        var7 = var7.bind(var1)(var4);
                        var4 = var7.getEmbeddedActivityLocationChannelId;
                        var8 = var4.bind(var7)(var8);
                        var7 = _closure1_slot9;
                        var4 = var7.getChannel;
                        var4 = var4.bind(var7)(var8);
                        var _closure4_slot3 = var4;
                        var4 = null;
                        var4 = var4 != var6;
                        if(!var4) { _fun0005_ip = 114; continue _fun0005 }
 111:
                        var4 = var5;
 114:
                        if(!var4) { _fun0005_ip = 153; continue _fun0005 }
 117:
                        var5 = _closure3_slot0;
                        var4 = var5.possiblyShowFeedbackModal;
                        var3 = _closure1_slot12;
                        var3 = var3.ACTIVITY;
                        var2 = function() {
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var1 = 12;
                            var3 = var5[var1];
                            var1 = undefined;
                            var8 = var4.bind(var1)(var3);
                            var3 = 16;
                            var7 = var5[var3];
                            var3 = var5.paths;
                            var3 = var8.bind(var1)(var7, var3);
                            var _closure5_slot0 = var3;
                            var3 = {};
                            var7 = _closure1_slot10;
                            var6 = var7.getMediaSessionId;
                            var6 = var6.bind(var7)();
                            var3['media_session_id'] = var6;
                            var6 = var7.getRTCConnectionId;
                            var6 = var6.bind(var7)();
                            var3['rtc_connection_id'] = var6;
                            var _closure5_slot1 = var3;
                            var3 = 13;
                            var3 = var5[var3];
                            var4 = var4.bind(var1)(var3);
                            var3 = var4.runAfterInteractions;
                            var2 = function() {
                                var3 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var1 = 14;
                                var2 = var2[var1];
                                var1 = undefined;
                                var6 = var3.bind(var1)(var2);
                                var5 = var6.openLazy;
                                var4 = _closure5_slot0;
                                var7 = _closure4_slot1;
                                var11 = var7.id;
                                var10 = _closure4_slot0;
                                var2 = global;
                                var2 = var2.HermesInternal;
                                var3 = var2.concat;
                                var2 = 'ActivityFeedback';
                                var3 = var3.bind(var2)(var11, var10);
                                var2 = {};
                                var9 = _closure5_slot1;
                                var2['analyticsData'] = var9;
                                var9 = _closure4_slot2;
                                var2['activityApplication'] = var9;
                                var8 = _closure4_slot3;
                                var2['channel'] = var8;
                                var2['embeddedActivityLocation'] = var7;
                                var2 = var5.bind(var6)(var4, var3, var2);
                                return var1;
                            };
                            var2 = var3.bind(var4)(var2);
                            return var1;
                        };
                        var2 = var4.bind(var5)(var3, var2);
 153:
                        return var1;
                    }
                };
                var1['handleShowActivityFeedback'] = var3;
                var3 = function(arg1) {
                    var2 = arg1;
                    var2 = var2.analyticsData;
                    var _closure4_slot0 = var2;
                    var4 = _closure3_slot0;
                    var3 = var4.possiblyShowFeedbackModal;
                    var2 = _closure1_slot12;
                    var2 = var2.VOICE;
                    var1 = function() {
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var1 = 12;
                        var3 = var5[var1];
                        var1 = undefined;
                        var7 = var4.bind(var1)(var3);
                        var3 = 17;
                        var6 = var5[var3];
                        var3 = var5.paths;
                        var3 = var7.bind(var1)(var6, var3);
                        var _closure5_slot0 = var3;
                        var3 = 13;
                        var3 = var5[var3];
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.runAfterInteractions;
                        var2 = function() {
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 14;
                            var2 = var2[var1];
                            var1 = undefined;
                            var6 = var3.bind(var1)(var2);
                            var5 = var6.openLazy;
                            var4 = _closure5_slot0;
                            var7 = _closure4_slot0;
                            var8 = var7.channel_id;
                            var2 = global;
                            var2 = var2.HermesInternal;
                            var3 = var2.concat;
                            var2 = 'VoiceFeedback';
                            var3 = var3.bind(var2)(var8);
                            var2 = {};
                            var2['analyticsData'] = var7;
                            var2 = var5.bind(var6)(var4, var3, var2);
                            return var1;
                        };
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var1 = var3.bind(var4)(var2, var1);
                    var1 = undefined;
                    return var1;
                };
                var1['handleShowVoiceFeedback'] = var3;
                var3 = function(arg1) {
                    var2 = arg1;
                    var3 = var2.reportId;
                    var _closure4_slot0 = var3;
                    var2 = var2.reportType;
                    var _closure4_slot1 = var2;
                    var4 = _closure3_slot0;
                    var3 = var4.possiblyShowFeedbackModal;
                    var2 = _closure1_slot12;
                    var2 = var2.IN_APP_REPORTS;
                    var1 = function() {
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var1 = 12;
                        var3 = var5[var1];
                        var1 = undefined;
                        var7 = var4.bind(var1)(var3);
                        var3 = 18;
                        var6 = var5[var3];
                        var3 = var5.paths;
                        var3 = var7.bind(var1)(var6, var3);
                        var _closure5_slot0 = var3;
                        var3 = 13;
                        var3 = var5[var3];
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.runAfterInteractions;
                        var2 = function() {
                            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                                var3 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var1 = 14;
                                var2 = var2[var1];
                                var1 = undefined;
                                var6 = var3.bind(var1)(var2);
                                var5 = var6.openLazy;
                                var4 = _closure5_slot0;
                                var9 = _closure4_slot1;
                                var3 = _closure4_slot0;
                                var2 = null;
                                var2 = var2 != var3;
                                var8 = '';
                                if(!var2) { _fun0006_ip = 66; continue _fun0006 }
 62:
                                var8 = _closure4_slot0;
 66:
                                var2 = global;
                                var2 = var2.HermesInternal;
                                var3 = var2.concat;
                                var2 = 'ReportingFeedback';
                                var3 = var3.bind(var2)(var9, var8);
                                var2 = {};
                                var8 = _closure4_slot0;
                                var2['reportId'] = var8;
                                var7 = _closure4_slot1;
                                var2['reportType'] = var7;
                                var2 = var5.bind(var6)(var4, var3, var2);
                                return var1;
                            }
                        };
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var1 = var3.bind(var4)(var2, var1);
                    var1 = undefined;
                    return var1;
                };
                var1['handleInAppReportsFeedback'] = var3;
                var3 = function() {
                    var4 = _closure3_slot0;
                    var3 = var4.possiblyShowFeedbackModal;
                    var1 = _closure1_slot12;
                    var2 = var1.BLOCK_USER;
                    var1 = function() {
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var1 = 12;
                        var3 = var5[var1];
                        var1 = undefined;
                        var7 = var4.bind(var1)(var3);
                        var3 = 19;
                        var6 = var5[var3];
                        var3 = var5.paths;
                        var3 = var7.bind(var1)(var6, var3);
                        var _closure5_slot0 = var3;
                        var3 = 13;
                        var3 = var5[var3];
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.runAfterInteractions;
                        var2 = function() {
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 14;
                            var2 = var2[var1];
                            var1 = undefined;
                            var6 = var3.bind(var1)(var2);
                            var5 = var6.openLazy;
                            var4 = _closure5_slot0;
                            var3 = 'BlockUserFeedback';
                            var2 = {};
                            var2 = var5.bind(var6)(var4, var3, var2);
                            return var1;
                        };
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var1 = var3.bind(var4)(var2, var1);
                    var1 = undefined;
                    return var1;
                };
                var1['handleBlockUserFeedback'] = var3;
                var2 = function(arg1) {
                    var2 = arg1;
                    var2 = var2.dismissibleContent;
                    var _closure4_slot0 = var2;
                    var4 = _closure3_slot0;
                    var3 = var4.possiblyShowFeedbackModal;
                    var2 = _closure1_slot12;
                    var2 = var2.AGE_VERIFICATION;
                    var1 = function() {
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var1 = 12;
                        var3 = var5[var1];
                        var1 = undefined;
                        var7 = var4.bind(var1)(var3);
                        var3 = 20;
                        var6 = var5[var3];
                        var3 = var5.paths;
                        var3 = var7.bind(var1)(var6, var3);
                        var _closure5_slot0 = var3;
                        var3 = 13;
                        var3 = var5[var3];
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.runAfterInteractions;
                        var2 = function() {
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 14;
                            var2 = var2[var1];
                            var1 = undefined;
                            var6 = var3.bind(var1)(var2);
                            var5 = var6.openLazy;
                            var4 = _closure5_slot0;
                            var3 = {};
                            var2 = _closure4_slot0;
                            var3['dismissibleContent'] = var2;
                            var2 = 'AgeVerificationFeedback';
                            var2 = var5.bind(var6)(var4, var2, var3);
                            return var1;
                        };
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var1 = var3.bind(var4)(var2, var1);
                    var1 = undefined;
                    return var1;
                };
                var1['handleAgeVerificationFeedback'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot7;
        var2 = undefined;
        var4 = arg1;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot3;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var13 = var4;
    var2 = new var13[var2](var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 22;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/feedback/native/FeedbackManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();