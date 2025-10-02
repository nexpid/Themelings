// app/modules/self_mod/ChannelSafetyWarningsStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
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
            _closure1_slot11 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var1 = function processChannel(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var2 = var1.safetyWarnings;
            var4 = null;
            if(!(var4 != var2)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var6 = _closure1_slot9;
            var3 = var1.id;
            var6[var3] = var2;
            var6 = var2.some;
            var3 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = arg1;
                    var4 = var3.type;
                    var1 = _closure1_slot7;
                    var1 = var1.INAPPROPRIATE_CONVERSATION_TIER_1;
                    var1 = var4 === var1;
                    if(var1) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                    var5 = var3.type;
                    var4 = _closure1_slot7;
                    var4 = var4.INAPPROPRIATE_CONVERSATION_TIER_2;
                    var1 = var5 === var4;
case 8:
                    if(!var1) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                    var5 = var3.dismiss_timestamp;
                    var4 = null;
                    var1 = var4 != var5;
case 10:
                    if(!var1) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                    var7 = var3.dismiss_timestamp;
                    var4 = global;
                    var3 = var4.Date;
                    var5 = var3.prototype;
                    var5 = Object.create(var5, {constructor: {value: var3}});
                    var8 = var5;
                    var3 = new var8[var3](var7, var6);
                    var5 = var3 instanceof Object ? var3 : var5;
                    var3 = var5.getTime;
                    var3 = var3.bind(var5)();
                    var5 = var4.Date;
                    var4 = var5.now;
                    var4 = var4.bind(var5)();
                    var2 = _closure1_slot6;
                    var2 = var4 - var2;
                    var2 = var3 > var2;
                    var1 = !var2;
case 12:
                    return var1;
                }
            };
            var3 = var6.bind(var2)(var3);
            var6 = _closure1_slot10;
            if(var3) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var5 = var6.delete;
            var3 = var1.id;
            var3 = var5.bind(var6)(var3);
            _fun0002_ip = 6; continue _fun0002;
case 14:
            var5 = var6.add;
            var3 = var1.id;
            var3 = var5.bind(var6)(var3);
case 6:
            if(!(var4 == var2)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var5 = _closure1_slot9;
            var3 = var1.id;
            var3 = var5[var3];
            if(!(var4 != var3)) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var4 = _closure1_slot9;
            var3 = var1.id;
            var3 = delete var4[var3];
case 18:
            var3 = _closure1_slot10;
            var2 = var3.delete;
            var1 = var1.id;
            var1 = var2.bind(var3)(var1);
case 16:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var10 = function handleConnectionOpen() {
        var2 = {};
        _closure1_slot9 = var2;
        var2 = global;
        var3 = var2.Object;
        var2 = var3.values;
        var4 = _closure1_slot5;
        var1 = var4.getMutablePrivateChannels;
        var1 = var1.bind(var4)();
        var3 = var2.bind(var3)(var1);
        var2 = var3.forEach;
        var1 = function(arg1) {
            var3 = _closure1_slot12;
            var1 = undefined;
            var2 = arg1;
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var5 = global;
    var9 = var5.Object;
    var4 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var9)(var3, var1, var2);
    var12 = 0;
    var2 = var7[var12];
    var1 = undefined;
    var2 = var8.bind(var1)(var2);
    var _closure1_slot0 = var2;
    var11 = 1;
    var2 = var7[var11];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot1 = var2;
    var14 = 2;
    var2 = var7[var14];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var13 = 3;
    var2 = var7[var13];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var9 = 4;
    var2 = var7[var9];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var4 = 5;
    var2 = var7[var4];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 6;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var2 = var2.Millis;
    var2 = var2.SECOND;
    var2 = var4 * var2;
    var _closure1_slot6 = var2;
    var4 = {};
    var4['STRANGER_DANGER'] = var11;
    var2 = 'STRANGER_DANGER';
    var4[var11] = var2;
    var4['INAPPROPRIATE_CONVERSATION_TIER_1'] = var14;
    var2 = 'INAPPROPRIATE_CONVERSATION_TIER_1';
    var4[var14] = var2;
    var4['INAPPROPRIATE_CONVERSATION_TIER_2'] = var13;
    var2 = 'INAPPROPRIATE_CONVERSATION_TIER_2';
    var4[var13] = var2;
    var4['LIKELY_ATO'] = var9;
    var2 = 'LIKELY_ATO';
    var4[var9] = var2;
    var _closure1_slot7 = var4;
    var2 = {};
    var2['UPVOTE'] = var12;
    var9 = 'UPVOTE';
    var2[var12] = var9;
    var2['DOWNVOTE'] = var11;
    var9 = 'DOWNVOTE';
    var2[var11] = var9;
    var9 = new Array(0);
    var _closure1_slot8 = var9;
    var9 = {};
    var _closure1_slot9 = var9;
    var5 = var5.Set;
    var9 = var5.prototype;
    var9 = Object.create(var9, {constructor: {value: var5}});
    var18 = var9;
    var5 = new var18[var5](var17);
    var5 = var5 instanceof Object ? var5 : var9;
    var _closure1_slot10 = var5;
    var5 = 7;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var9 = var5.Store;
    var5 = function(arg1) {
        var4 = function ChannelSafetyWarningsStore() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot0;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot3;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot2;
                var1 = _closure1_slot11;
                var1 = var1.bind(var3)();
                if(var1) { _fun0004_ip = 20; continue _fun0004 }
case 21:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0004_ip = 22; continue _fun0004;
case 20:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot3;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 22:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot4;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot1;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value() {
            var3 = this;
            var2 = var3.waitFor;
            var1 = _closure1_slot5;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(4);
        var1[0] = var5;
        var5 = {};
        var7 = 'getChannelSafetyWarning';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var1 = arg2;
                var _closure3_slot0 = var1;
                var3 = _closure1_slot9;
                var1 = arg1;
                var4 = var3[var1];
                var1 = null;
                var3 = var1 == var4;
                var1 = undefined;
                if(var3) { _fun0005_ip = 11; continue _fun0005 }
case 23:
                var3 = var4.find;
                var2 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.id;
                    var1 = _closure3_slot0;
                    var1 = var2 === var1;
                    return var1;
                };
                var1 = var3.bind(var4)(var2);
case 11:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getChannelSafetyWarnings';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var3 = _closure1_slot9;
                var1 = arg1;
                var1 = var3[var1];
                var3 = null;
                if(!(var3 == var1)) { _fun0006_ip = 24; continue _fun0006 }
case 25:
                var1 = _closure1_slot8;
case 24:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'hasShownInitialTooltipForChannel';
        var5['key'] = var7;
        var6 = function value(arg1) {
            var3 = _closure1_slot10;
            var2 = var3.has;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var6;
        var1[3] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var9 = var5.bind(var1)(var9);
    var5 = 8;
    var5 = var7[var5];
    var17 = var8.bind(var1)(var5);
    var5 = {};
    var11 = function handleChannelCreate(arg1) {
        var3 = _closure1_slot12;
        var1 = arg1;
        var2 = var1.channel;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var5['CHANNEL_CREATE'] = var11;
    var11 = function handleChannelDelete(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = arg1;
            var1 = var1.channel;
            var4 = _closure1_slot9;
            var3 = var1.id;
            var4 = var4[var3];
            var3 = null;
            if(!(var3 != var4)) { _fun0007_ip = 26; continue _fun0007 }
case 27:
            var4 = _closure1_slot9;
            var3 = var1.id;
            var3 = delete var4[var3];
case 26:
            var3 = _closure1_slot10;
            var2 = var3.delete;
            var1 = var1.id;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        }
    };
    var5['CHANNEL_DELETE'] = var11;
    var11 = function handleChannelUpdates(arg1) {
        var1 = arg1;
        var3 = var1.channels;
        var2 = var3.forEach;
        var1 = function(arg1) {
            var3 = _closure1_slot12;
            var1 = undefined;
            var2 = arg1;
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var5['CHANNEL_UPDATES'] = var11;
    var5['CONNECTION_OPEN'] = var10;
    var5['CONNECTION_OPEN_SUPPLEMENTAL'] = var10;
    var10 = function handleChannelSafetyWarningFeedback(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var2 = arg1;
            var3 = var2.channelId;
            var4 = var2.warningId;
            var _closure2_slot0 = var4;
            var2 = var2.feedbackType;
            var _closure2_slot1 = var2;
            var4 = _closure1_slot9;
            var5 = var4[var3];
            var4 = null;
            if(!(var4 != var5)) { _fun0008_ip = 3; continue _fun0008 }
case 8:
            var2 = _closure1_slot9;
            var4 = var5.map;
            var1 = function(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var4 = arg1;
                    var5 = var4.id;
                    var2 = _closure2_slot0;
                    var1 = var4;
                    if(!(var5 === var2)) { _fun0009_ip = 11; continue _fun0009 }
case 28:
                    var2 = {};
                    var7 = var2;
                    var6 = var4;
                    var4 = copyDataProperties(var7, var6);
                    var4 = _closure2_slot1;
                    var3 = 'feedback_type';
                    var2[var3] = var4;
                    var1 = var2;
case 11:
                    return var1;
                }
            };
            var1 = var4.bind(var5)(var1);
            var2[var3] = var1;
case 3:
            var1 = undefined;
            return var1;
        }
    };
    var5['CHANNEL_SAFETY_WARNING_FEEDBACK'] = var10;
    var10 = function handleClearChannelSafetyWarnings(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var1 = arg1;
            var3 = var1.channelId;
            var2 = _closure1_slot9;
            var5 = var2[var3];
            var4 = _closure1_slot10;
            var2 = var4.delete;
            var2 = var2.bind(var4)(var3);
            var2 = null;
            if(!(var2 != var5)) { _fun0010_ip = 29; continue _fun0010 }
case 30:
            var2 = _closure1_slot9;
            var4 = var5.map;
            var1 = function(arg1) {
                var1 = {};
                var4 = arg1;
                var5 = var1;
                var2 = copyDataProperties(var5, var4);
                var3 = undefined;
                var2 = 'dismiss_timestamp';
                var1[var2] = var3;
                return var1;
            };
            var1 = var4.bind(var5)(var1);
            var2[var3] = var1;
case 29:
            var1 = undefined;
            return var1;
        }
    };
    var5['CLEAR_CHANNEL_SAFETY_WARNINGS'] = var10;
    var10 = function handleDismissChannelSafetyWarnings(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var1 = arg1;
            var4 = var1.channelId;
            var1 = var1.warningIds;
            var _closure2_slot0 = var1;
            var1 = undefined;
            var _closure2_slot1 = var1;
            var5 = _closure1_slot9;
            var6 = var5[var4];
            var5 = null;
            if(!(var5 != var6)) { _fun0011_ip = 31; continue _fun0011 }
case 26:
            var5 = global;
            var5 = var5.Date;
            var7 = var5.prototype;
            var7 = Object.create(var7, {constructor: {value: var5}});
            var9 = var7;
            var5 = new var9[var5](var8);
            var7 = var5 instanceof Object ? var5 : var7;
            var5 = var7.toISOString;
            var5 = var5.bind(var7)();
            _closure2_slot1 = var5;
            var3 = _closure1_slot9;
            var5 = var6.map;
            var2 = function(arg1) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var4 = arg1;
                    var5 = _closure2_slot0;
                    var2 = var5.includes;
                    var1 = var4.id;
                    var2 = var2.bind(var5)(var1);
                    var1 = var4;
                    if(!var2) { _fun0012_ip = 32; continue _fun0012 }
case 33:
                    var2 = {};
                    var7 = var2;
                    var6 = var4;
                    var4 = copyDataProperties(var7, var6);
                    var4 = _closure2_slot1;
                    var3 = 'dismiss_timestamp';
                    var2[var3] = var4;
                    var1 = var2;
case 32:
                    return var1;
                }
            };
            var2 = var5.bind(var6)(var2);
            var3[var4] = var2;
case 31:
            return var1;
        }
    };
    var5['DISMISS_CHANNEL_SAFETY_WARNINGS'] = var10;
    var6 = function handleAcknowledgeChannelSafetyWarningTooltip(arg1) {
        var1 = arg1;
        var3 = var1.channelId;
        var2 = _closure1_slot10;
        var1 = var2.add;
        var1 = var1.bind(var2)(var3);
        var1 = undefined;
        return var1;
    };
    var5['ACKNOWLEDGE_CHANNEL_SAFETY_WARNING_TOOLTIP'] = var6;
    var6 = var9.prototype;
    var6 = Object.create(var6, {constructor: {value: var9}});
    var18 = var6;
    var16 = var5;
    var5 = new var18[var9](var17, var16, var15);
    var5 = var5 instanceof Object ? var5 : var6;
    var6 = 9;
    var7 = var7[var6];
    var6 = require;
    var8 = var6.bind(var1)(var7);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/self_mod/ChannelSafetyWarningsStore.tsx';
    var6 = var7.bind(var8)(var6);
    var3['default'] = var5;
    var3['SafetyWarningTypes'] = var4;
    var3['SafetyWarningFeedbackTypes'] = var2;
    return var1;
})();