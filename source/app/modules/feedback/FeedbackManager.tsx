// app/modules/feedback/FeedbackManager.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
case 2: // try_start_0
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
case 3: // try_end0
            _fun0001_ip = 4; continue _fun0001;
case 5: // catch_target0
            CatchBlockStart(arg_register=1);
case 4:
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
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 6:
            if(var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var2 = var3.@@iterator;
case 8:
            if(var2) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var7 = {};
            var9 = var7.toString;
            var7 = var9.call;
            var11 = var7.bind(var9)(var3);
            var10 = var11.slice;
            var9 = 8;
            var7 = -1;
            var9 = var10.bind(var11)(var9, var7);
            var7 = 'Object';
            var7 = var7 === var9;
            if(!var7) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var7 = var3.constructor;
case 18:
            var10 = var9;
            if(!var7) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var7 = var3.constructor;
            var10 = var7.name;
case 20:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0002_ip = 22; continue _fun0002 }
case 24:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0002_ip = 27; continue _fun0002 }
case 25:
            var9 = _closure1_slot15;
            var7 = var9.bind(var8)(var3, var8);
case 27:
            _fun0002_ip = 28; continue _fun0002;
case 22:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 28:
            var6 = var7;
            _fun0002_ip = 14; continue _fun0002;
case 16:
            var7 = _closure1_slot15;
            var6 = var7.bind(var8)(var3, var8);
case 14:
            var4 = var6;
            if(var4) { _fun0002_ip = 12; continue _fun0002 }
case 29:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 12:
            if(!var4) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            _closure2_slot0 = var4;
case 30:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0003_ip = 32; continue _fun0003 }
case 33:
                    var1 = {};
                    var2 = false;
                    var1['done'] = var2;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = parseFloat(var2);
                    var4 = var2 + 1;
                    _closure2_slot1 = var4;
                    var2 = var3[var2];
                    var1['value'] = var2;
                    _fun0003_ip = 34; continue _fun0003;
case 32:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 34:
                    return var1;
                }
            };
            return var1;
case 10:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0004_ip = 35; continue _fun0004 }
case 36:
            var2 = var4.length;
            var1 = var3 > var2;
case 35:
            var2 = undefined;
            if(!var1) { _fun0004_ip = 37; continue _fun0004 }
case 38:
            var2 = var4.length;
case 37:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0004_ip = 39; continue _fun0004 }
case 8:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0004_ip = 8; continue _fun0004 }
case 39:
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = function optOutEligibilityCheck(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = arg1;
            var _closure2_slot0 = var2;
            var5 = _closure1_slot0;
            var3 = _closure1_slot1;
            var7 = 11;
            var3 = var3[var7];
            var6 = undefined;
            var3 = var5.bind(var6)(var3);
            var5 = var3.InAppFeedbackStates;
            var3 = var5.getSetting;
            var5 = var3.bind(var5)();
            var3 = var2.feedbackType;
            var5 = var5[var3];
            var3 = null;
            var9 = var3 == var5;
            var8 = undefined;
            if(var9) { _fun0005_ip = 40; continue _fun0005 }
case 41:
            var8 = var5.optOutExpiryTime;
case 40:
            var3 = var3 != var8;
            if(!var3) { _fun0005_ip = 42; continue _fun0005 }
case 43:
            var5 = global;
            var9 = var5.Number;
            var5 = var9.isNaN;
            var5 = var5.bind(var9)(var8);
            var3 = !var5;
case 42:
            if(!var3) { _fun0005_ip = 44; continue _fun0005 }
case 45:
            var5 = global;
            var9 = var5.Date;
            var5 = var9.now;
            var5 = var5.bind(var9)();
            var3 = var5 < var8;
case 44:
            var8 = _closure1_slot7;
            var5 = var8.hasHotspot;
            var2 = var2.hotspot;
            var2 = var5.bind(var8)(var2);
            var2 = !var2;
            var5 = var2;
            if(!var5) { _fun0005_ip = 18; continue _fun0005 }
case 46:
            var5 = !var3;
case 18:
            if(!var5) { _fun0005_ip = 47; continue _fun0005 }
case 48:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var4 = var4[var7];
            var4 = var5.bind(var6)(var4);
            var5 = var4.InAppFeedbackStates;
            var4 = var5.updateSetting;
            var1 = function(arg1) {
                var5 = arg1;
                var1 = {};
                var7 = var1;
                var6 = var5;
                var2 = copyDataProperties(var7, var6);
                var4 = _closure2_slot0;
                var3 = var4.feedbackType;
                var2 = {};
                var4 = var4.feedbackType;
                var6 = var5[var4];
                var7 = var2;
                var4 = copyDataProperties(var7, var6);
                var5 = _closure1_slot11;
                var4 = 'optOutExpiryTime';
                var2[var4] = var5;
                var1[var3] = var2;
                return var1;
            };
            var1 = var4.bind(var5)(var1);
case 47:
            var1 = !var3;
            if(var3) { _fun0005_ip = 49; continue _fun0005 }
case 50:
            var1 = !var2;
case 49:
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = function triggerRateEligibilityCheck(arg1) {
        var1 = global;
        var2 = var1.Math;
        var1 = var2.random;
        var2 = var1.bind(var2)();
        var1 = arg1;
        var1 = var1.chance;
        var1 = var2 < var1;
        return var1;
    };
    var _closure1_slot17 = var1;
    var1 = function recencyEligibilityCheck(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var3 = arg2;
            var _closure2_slot0 = var3;
            var5 = _closure1_slot0;
            var2 = _closure1_slot1;
            var10 = 11;
            var2 = var2[var10];
            var4 = undefined;
            var2 = var5.bind(var4)(var2);
            var5 = var2.InAppFeedbackStates;
            var2 = var5.getSetting;
            var5 = var2.bind(var5)();
            var2 = var3.feedbackType;
            var5 = var5[var2];
            var2 = null;
            var8 = var2 == var5;
            var6 = undefined;
            if(var8) { _fun0006_ip = 40; continue _fun0006 }
case 41:
            var6 = var5.lastImpressionTime;
case 40:
            var _closure2_slot1 = var4;
            var8 = var2 != var6;
            if(!var8) { _fun0006_ip = 17; continue _fun0006 }
case 51:
            var5 = global;
            var9 = var5.Number;
            var5 = var9.isNaN;
            var5 = var5.bind(var9)(var6);
            var8 = !var5;
case 17:
            if(var8) { _fun0006_ip = 52; continue _fun0006 }
case 53:
            var5 = var3.storageKey;
            var8 = var2 == var5;
case 52:
            var5 = undefined;
            if(var8) { _fun0006_ip = 28; continue _fun0006 }
case 54:
            var9 = _closure1_slot0;
            var11 = _closure1_slot1;
            var8 = 12;
            var8 = var11[var8];
            var8 = var9.bind(var4)(var8);
            var9 = var8.Storage;
            var8 = var9.get;
            var3 = var3.storageKey;
            var8 = var8.bind(var9)(var3);
            var9 = var2 != var8;
            var3 = undefined;
            if(!var9) { _fun0006_ip = 55; continue _fun0006 }
case 56:
            var3 = var8;
case 55:
            _closure2_slot1 = var3;
            var8 = var2 == var3;
            if(var8) { _fun0006_ip = 57; continue _fun0006 }
case 58:
            var9 = global;
            var11 = var9.Number;
            var9 = var11.isNaN;
            var8 = var9.bind(var11)(var3);
case 57:
            var5 = var3;
            if(var8) { _fun0006_ip = 28; continue _fun0006 }
case 59:
            var9 = _closure1_slot0;
            var8 = _closure1_slot1;
            var8 = var8[var10];
            var8 = var9.bind(var4)(var8);
            var9 = var8.InAppFeedbackStates;
            var8 = var9.updateSetting;
            var7 = function(arg1) {
                var6 = arg1;
                var1 = {};
                var8 = var1;
                var7 = var6;
                var2 = copyDataProperties(var8, var7);
                var5 = _closure2_slot0;
                var3 = var5.feedbackType;
                var2 = {};
                var5 = var5.feedbackType;
                var7 = var6[var5];
                var8 = var2;
                var5 = copyDataProperties(var8, var7);
                var5 = _closure2_slot1;
                var4 = 'lastImpressionTime';
                var2[var4] = var5;
                var1[var3] = var2;
                return var1;
            };
            var7 = var8.bind(var9)(var7);
            var5 = var3;
case 28:
            var3 = _closure1_slot0;
            var7 = _closure1_slot1;
            var1 = 13;
            var1 = var7[var1];
            var4 = var3.bind(var4)(var1);
            var3 = var4.max;
            var1 = new Array(2);
            var1[0] = var6;
            var1[1] = var5;
            var1 = var3.bind(var4)(var1);
            var3 = var2 != var1;
            var2 = 0;
            if(!var3) { _fun0006_ip = 60; continue _fun0006 }
case 61:
            var2 = var1;
case 60:
            var1 = arg1;
            var1 = var1.cooldown;
            var2 = var2 + var1;
            var1 = global;
            var3 = var1.Date;
            var1 = var3.now;
            var1 = var1.bind(var3)();
            var1 = var2 < var1;
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var1 = function groupRecencyEligibilityCheck(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var6 = arg1;
            var _closure2_slot0 = var6;
            var2 = _closure1_slot14;
            var3 = global;
            var7 = var3.Object;
            var4 = var7.values;
            var3 = _closure1_slot12;
            var4 = var4.bind(var7)(var3);
            var3 = var4.filter;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.group;
                var1 = _closure2_slot0;
                var1 = var1.group;
                var1 = var2 === var1;
                return var1;
            };
            var1 = var3.bind(var4)(var1);
            var4 = undefined;
            var3 = var2.bind(var4)(var1);
            var2 = var3.bind(var4)();
            var1 = var2.done;
            if(var1) { _fun0007_ip = 62; continue _fun0007 }
case 5:
            var7 = var2.value;
            var1 = _closure1_slot18;
            var1 = var1.bind(var4)(var6, var7);
            if(var1) { _fun0007_ip = 15; continue _fun0007 }
case 63:
            var1 = false;
            return var1;
case 15:
            var7 = var3.bind(var4)();
            var1 = var7.done;
            var2 = var7;
            if(!var1) { _fun0007_ip = 5; continue _fun0007 }
case 62:
            var1 = true;
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var20 = function voiceEligibilityCheck() {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var3 = _closure1_slot8;
            var1 = var3.getWasEverRtcConnected;
            var1 = var1.bind(var3)();
            var1 = !var1;
            if(var1) { _fun0008_ip = 64; continue _fun0008 }
case 35:
            var3 = _closure1_slot8;
            var2 = var3.getWasEverMultiParticipant;
            var1 = var2.bind(var3)();
case 64:
            return var1;
        }
    };
    var1 = global;
    var9 = var1.Object;
    var5 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var7[var1];
    var1 = undefined;
    var2 = var8.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 2;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 3;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 4;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 5;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 6;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 7;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var2 = 8;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var12 = var2.FeedbackGroup;
    var10 = var2.FeedbackType;
    var5 = var2.FeedbackTypePrecedence;
    var _closure1_slot10 = var5;
    var2 = var2.MAX_REPRESENTABLE_DATE;
    var _closure1_slot11 = var2;
    var13 = {'chance': 0.2, 'cooldown': 86400000};
    var2 = {};
    var9 = var10.VOICE;
    var5 = {};
    var23 = var5;
    var22 = var13;
    var11 = copyDataProperties(var23, var22);
    var11 = var12.AV;
    var18 = 'group';
    var5[var18] = var11;
    var11 = 9;
    var14 = var7[var11];
    var14 = var6.bind(var1)(var14);
    var14 = var14.HotspotLocations;
    var14 = var14.VOICE_CALL_FEEDBACK;
    var17 = 'hotspot';
    var5[var17] = var14;
    var14 = 'lastVoiceFeedback';
    var16 = 'storageKey';
    var5[var16] = var14;
    var14 = var10.VOICE;
    var15 = 'feedbackType';
    var5[var15] = var14;
    var19 = new Array(1);
    var19[0] = var20;
    var14 = 'eligibilityChecks';
    var5[var14] = var19;
    var2[var9] = var5;
    var9 = var10.STREAM;
    var5 = {};
    var23 = var5;
    var22 = var13;
    var19 = copyDataProperties(var23, var22);
    var19 = var12.AV;
    var5[var18] = var19;
    var19 = var7[var11];
    var19 = var6.bind(var1)(var19);
    var19 = var19.HotspotLocations;
    var19 = var19.REPORT_PROBLEM_POST_STREAM;
    var5[var17] = var19;
    var19 = 'lastStreamFeedback';
    var5[var16] = var19;
    var19 = var10.STREAM;
    var5[var15] = var19;
    var2[var9] = var5;
    var9 = var10.VIDEO_BACKGROUND;
    var5 = {};
    var23 = var5;
    var22 = var13;
    var19 = copyDataProperties(var23, var22);
    var19 = var12.AV;
    var5[var18] = var19;
    var19 = var7[var11];
    var19 = var6.bind(var1)(var19);
    var19 = var19.HotspotLocations;
    var19 = var19.VIDEO_BACKGROUND_FEEDBACK;
    var5[var17] = var19;
    var19 = 'lastVideoBackgroundFeedback';
    var5[var16] = var19;
    var19 = var10.VIDEO_BACKGROUND;
    var5[var15] = var19;
    var2[var9] = var5;
    var9 = var10.ACTIVITY;
    var5 = {'cooldown': 0, 'chance': 0.5, 'group': null, 'hotspot': null, 'storageKey': 'lastActivityFeedback'};
    var19 = var12.AV;
    var5['group'] = var19;
    var19 = var7[var11];
    var19 = var6.bind(var1)(var19);
    var19 = var19.HotspotLocations;
    var19 = var19.POST_ACTIVITY_FEEDBACK;
    var5['hotspot'] = var19;
    var19 = var10.ACTIVITY;
    var5['feedbackType'] = var19;
    var2[var9] = var5;
    var9 = var10.IN_APP_REPORTS;
    var5 = {'cooldown': 172800000, 'chance': 0.5, 'group': null, 'hotspot': null, 'storageKey': 'inAppReportsFeedback'};
    var19 = var12.SAFETY;
    var5['group'] = var19;
    var19 = var7[var11];
    var19 = var6.bind(var1)(var19);
    var19 = var19.HotspotLocations;
    var19 = var19.IN_APP_REPORTS_FEEDBACK;
    var5['hotspot'] = var19;
    var19 = var10.IN_APP_REPORTS;
    var5['feedbackType'] = var19;
    var2[var9] = var5;
    var9 = var10.USER_DM_MUTE;
    var5 = {'cooldown': 604800000, 'chance': 1, 'group': null, 'hotspot': null, 'storageKey': 'userDmMute'};
    var19 = var12.SAFETY;
    var5['group'] = var19;
    var19 = var7[var11];
    var19 = var6.bind(var1)(var19);
    var19 = var19.HotspotLocations;
    var19 = var19.USER_DM_MUTE_FEEDBACK;
    var5['hotspot'] = var19;
    var19 = var10.USER_DM_MUTE;
    var5['feedbackType'] = var19;
    var2[var9] = var5;
    var9 = var10.BLOCK_USER;
    var5 = {'cooldown': 0, 'chance': 1, 'group': null, 'hotspot': null, 'storageKey': 'blockUser'};
    var19 = var12.SAFETY;
    var5['group'] = var19;
    var19 = var7[var11];
    var19 = var6.bind(var1)(var19);
    var19 = var19.HotspotLocations;
    var19 = var19.BLOCK_USER_FEEDBACK;
    var5['hotspot'] = var19;
    var19 = var10.BLOCK_USER;
    var5['feedbackType'] = var19;
    var2[var9] = var5;
    var9 = var10.VOICE_FILTER;
    var5 = {};
    var23 = var5;
    var22 = var13;
    var19 = copyDataProperties(var23, var22);
    var19 = var12.AV;
    var5[var18] = var19;
    var19 = var7[var11];
    var19 = var6.bind(var1)(var19);
    var19 = var19.HotspotLocations;
    var19 = var19.VOICE_FILTER_FEEDBACK;
    var5[var17] = var19;
    var19 = 'lastVoiceFilterFeedback';
    var5[var16] = var19;
    var19 = var10.VOICE_FILTER;
    var5[var15] = var19;
    var19 = new Array(1);
    var19[0] = var20;
    var5[var14] = var19;
    var2[var9] = var5;
    var9 = var10.SEARCH_RESULTS;
    var5 = {};
    var23 = var5;
    var22 = var13;
    var13 = copyDataProperties(var23, var22);
    var13 = var12.SEARCH;
    var5[var18] = var13;
    var13 = var7[var11];
    var13 = var6.bind(var1)(var13);
    var13 = var13.HotspotLocations;
    var13 = var13.SEARCH_RESULTS_FEEDBACK;
    var5[var17] = var13;
    var13 = 'searchResultsFeedback';
    var5[var16] = var13;
    var13 = var10.SEARCH_RESULTS;
    var5[var15] = var13;
    var13 = new Array(1);
    var15 = function searchResultsEligibilityCheck() {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var4 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 14;
            var1 = var6[var1];
            var3 = undefined;
            var7 = var4.bind(var3)(var1);
            var2 = var7.getIsSearchResultsFeedbackExperimentEnabled;
            var1 = {};
            var5 = 'FeedbackManager';
            var1['location'] = var5;
            var1 = var2.bind(var7)(var1);
            var2 = 15;
            var2 = var6[var2];
            var4 = var4.bind(var3)(var2);
            var3 = var4.getIsSearchDesktopXDMFeedbackEnabled;
            var2 = {};
            var2['location'] = var5;
            var2 = var3.bind(var4)(var2);
            if(var1) { _fun0009_ip = 65; continue _fun0009 }
case 66:
            var1 = var2;
case 65:
            return var1;
        }
    };
    var13[0] = var15;
    var5[var14] = var13;
    var2[var9] = var5;
    var9 = var10.AGE_VERIFICATION;
    var5 = {'cooldown': 0, 'chance': 1, 'group': null, 'hotspot': null, 'storageKey': 'ageVerificationFeedback'};
    var12 = var12.SAFETY;
    var5['group'] = var12;
    var11 = var7[var11];
    var11 = var6.bind(var1)(var11);
    var11 = var11.HotspotLocations;
    var11 = var11.AGE_VERIFICATION_FEEDBACK;
    var5['hotspot'] = var11;
    var10 = var10.AGE_VERIFICATION;
    var5['feedbackType'] = var10;
    var2[var9] = var5;
    var _closure1_slot12 = var2;
    var5 = 16;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var4 = function(arg1) {
        var4 = function FeedbackManager(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var6 = this;
                var14 = 0;
                var1 = copyRestArgs(var14);
                var8 = _closure1_slot2;
                var4 = _closure2_slot0;
                var5 = undefined;
                var8 = var8.bind(var5)(var6, var4);
                var11 = new Array(0);
                var14 = var11;
                var13 = var1;
                var12 = 0;
                var1 = arraySpread(var14, var13, var12);
                var1 = _closure1_slot5;
                var10 = var1.bind(var5)(var4);
                var4 = _closure1_slot4;
                var1 = _closure1_slot13;
                var1 = var1.bind(var5)();
                if(var1) { _fun0010_ip = 13; continue _fun0010 }
case 67:
                var1 = var10.apply;
                var1 = var1.bind(var10)(var6, var11);
                _fun0010_ip = 68; continue _fun0010;
case 13:
                var7 = global;
                var9 = var7.Reflect;
                var8 = var9.construct;
                var7 = _closure1_slot5;
                var7 = var7.bind(var5)(var6);
                var7 = var7.constructor;
                var1 = var8.bind(var9)(var10, var11, var7);
case 68:
                var1 = var4.bind(var5)(var6, var1);
                var _closure3_slot0 = var1;
                var4 = null;
                var1['feedbackTypeToShow'] = var4;
                var4 = _closure1_slot0;
                var6 = _closure1_slot1;
                var3 = 13;
                var3 = var6[var3];
                var5 = var4.bind(var5)(var3);
                var4 = var5.debounce;
                var3 = function(arg1, arg2) {
                    _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                        var4 = arg2;
                        var2 = _closure3_slot0;
                        var2 = var2.feedbackTypeToShow;
                        var3 = null;
                        if(!(var3 == var2)) { _fun0011_ip = 69; continue _fun0011 }
case 70:
                        if(!(var3 != var4)) { _fun0011_ip = 67; continue _fun0011 }
case 71:
                        var2 = undefined;
                        var2 = var4.bind(var2)();
                        _fun0011_ip = 67; continue _fun0011;
case 69:
                        var1 = _closure3_slot0;
                        var5 = var1.feedbackTypeToShow;
                        var4 = function updateLastFeedbackDate(arg1) {
                            var1 = arg1;
                            var _closure5_slot0 = var1;
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var1 = 11;
                            var3 = var3[var1];
                            var1 = undefined;
                            var3 = var4.bind(var1)(var3);
                            var4 = var3.InAppFeedbackStates;
                            var3 = var4.updateSetting;
                            var2 = function(arg1) {
                                var4 = arg1;
                                var1 = {};
                                var7 = var1;
                                var6 = var4;
                                var2 = copyDataProperties(var7, var6);
                                var3 = _closure5_slot0;
                                var2 = {};
                                var6 = var4[var3];
                                var7 = var2;
                                var4 = copyDataProperties(var7, var6);
                                var4 = global;
                                var5 = var4.Date;
                                var4 = var5.now;
                                var5 = var4.bind(var5)();
                                var4 = 'lastImpressionTime';
                                var2[var4] = var5;
                                var1[var3] = var2;
                                return var1;
                            };
                            var2 = var3.bind(var4)(var2);
                            return var1;
                        };
                        var2 = undefined;
                        var4 = var4.bind(var2)(var5);
                        var1['feedbackTypeToShow'] = var3;
                        var1 = arg1;
                        var1 = var1.bind(var2)();
case 67:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2 = 200;
                var2 = var4.bind(var5)(var3, var2);
                var1['showFeedbackModalDebounced'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var6 = _closure1_slot6;
        var3 = undefined;
        var5 = arg1;
        var5 = var6.bind(var3)(var4, var5);
        var2 = _closure1_slot3;
        var5 = {};
        var6 = 'possiblyShowFeedbackModal';
        var5['key'] = var6;
        var1 = function value(arg1, arg2, arg3) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var3 = arg1;
                var2 = arg3;
                var5 = this;
                var4 = function feedbackTypeIsEligibleToBeShown(arg1) {
                    _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                        var6 = arg1;
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot1;
                        var3 = 10;
                        var4 = var4[var3];
                        var3 = undefined;
                        var5 = var5.bind(var3)(var4);
                        var4 = var5.getFeedbackSurveyEligibilityOverrideConfig;
                        var3 = {};
                        var7 = 'FeedbackManager';
                        var3['location'] = var7;
                        var3 = var4.bind(var5)(var3);
                        var3 = var3.overrideEligibility;
                        if(var3) { _fun0013_ip = 56; continue _fun0013 }
case 72:
                        var4 = _closure1_slot9;
                        var3 = var4.getFeedbackConfig;
                        var4 = var3.bind(var4)(var6);
                        var3 = null;
                        if(!(var3 == var4)) { _fun0013_ip = 73; continue _fun0013 }
case 74:
                        var5 = _closure1_slot12;
                        var4 = var5[var6];
case 73:
                        var _closure4_slot0 = var4;
                        var4 = var4.eligibilityChecks;
                        if(!(var3 == var4)) { _fun0013_ip = 53; continue _fun0013 }
case 45:
                        var4 = new Array(0);
case 53:
                        var3 = _closure1_slot17;
                        var5 = new Array(3);
                        var5[0] = var3;
                        var3 = _closure1_slot16;
                        var5[1] = var3;
                        var1 = _closure1_slot19;
                        var5[2] = var1;
                        var3 = var5.every;
                        var1 = function(arg1) {
                            var3 = _closure4_slot0;
                            var2 = arg1;
                            var1 = undefined;
                            var1 = var2.bind(var1)(var3);
                            return var1;
                        };
                        var1 = var3.bind(var5)(var1);
                        if(!var1) { _fun0013_ip = 75; continue _fun0013 }
case 76:
                        var3 = var4.every;
                        var2 = function(arg1) {
                            var3 = _closure4_slot0;
                            var2 = arg1;
                            var1 = undefined;
                            var1 = var2.bind(var1)(var3);
                            return var1;
                        };
                        var1 = var3.bind(var4)(var2);
case 75:
                        return var1;
case 56:
                        var1 = true;
                        return var1;
                    }
                };
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                if(!var4) { _fun0012_ip = 51; continue _fun0012 }
case 38:
                var6 = var5.feedbackTypeToShow;
                var4 = null;
                if(!(var4 != var6)) { _fun0012_ip = 77; continue _fun0012 }
case 78:
                var4 = _closure1_slot10;
                var6 = var5.feedbackTypeToShow;
                var6 = var4[var6];
                var4 = var4[var3];
                if(!(!(var6 < var4))) { _fun0012_ip = 51; continue _fun0012 }
case 77:
                var5['feedbackTypeToShow'] = var3;
                var4 = var5.showFeedbackModalDebounced;
                var3 = arg2;
                var3 = var4.bind(var5)(var3, var2);
                _fun0012_ip = 79; continue _fun0012;
case 51:
                var3 = null;
                if(!(var3 != var2)) { _fun0012_ip = 79; continue _fun0012 }
case 80:
                var2 = var2.bind(var1)();
case 79:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(1);
        var1[0] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = 17;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/feedback/FeedbackManager.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['FeedbackConfig'] = var2;
    return var1;
})();