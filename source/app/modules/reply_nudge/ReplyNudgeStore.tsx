// app/modules/reply_nudge/ReplyNudgeStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
            _closure1_slot15 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = function handleNudgeVisibilityChange() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 11;
            var1 = var2[var1];
            var2 = undefined;
            var1 = var3.bind(var2)(var1);
            var3 = var1.EnableDmReplyNudgeReminders;
            var1 = var3.getSetting;
            var3 = var1.bind(var3)();
            var1 = false;
            var3 = var1 !== var3;
            if(!var3) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var5 = 12;
            var5 = var7[var5];
            var5 = var6.bind(var2)(var5);
            var7 = var5.ReplyNudgeExperiment;
            var6 = var7.getConfig;
            var5 = {};
            var8 = 'ReplyNudgeStore';
            var5['location'] = var8;
            var5 = var6.bind(var7)(var5);
            var3 = var5.enabled;
case 6:
            var5 = _closure1_slot13;
            if(!(var5 !== var3)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            _closure1_slot13 = var3;
            return var2;
case 8:
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = function handleUserGuildSettingsUpdate() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = global;
            var3 = var1.Object;
            var2 = var3.keys;
            var1 = _closure1_slot14;
            var7 = var2.bind(var3)(var1);
            var1 = var7.length;
            var6 = 0;
            var2 = var6 < var1;
            var3 = false;
            var4 = null;
            var1 = false;
            if(!var2) { _fun0003_ip = 10; continue _fun0003 }
case 11:
            var9 = var7[var6];
            var10 = _closure1_slot11;
            var2 = var10.isChannelMuted;
            var2 = var2.bind(var10)(var4, var9);
            if(!var2) { _fun0003_ip = 12; continue _fun0003 }
case 13:
            var2 = _closure1_slot14;
            var2 = delete var2[var9];
            var3 = true;
case 12:
            var6 = var6 + 1;
            var2 = var7.length;
            var1 = var3;
            if(var6 < var2) { _fun0003_ip = 11; continue _fun0003 }
case 10:
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var8 = 3;
    var2 = var6[var8];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 7;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var2 = 8;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot10 = var2;
    var2 = 9;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot11 = var2;
    var2 = 10;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var2 = var2.Millis;
    var2 = var2.DAY;
    var2 = var8 * var2;
    var _closure1_slot12 = var2;
    var2 = false;
    var _closure1_slot13 = var2;
    var2 = {};
    var _closure1_slot14 = var2;
    var2 = 13;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.PersistedStore;
    var2 = function(arg1) {
        var4 = function ReplyNudgeStore() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot2;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot5;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot4;
                var1 = _closure1_slot15;
                var1 = var1.bind(var3)();
                if(var1) { _fun0004_ip = 14; continue _fun0004 }
case 15:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0004_ip = 16; continue _fun0004;
case 14:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 16:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot6;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot3;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var2 = arg1;
                var5 = this;
                var12 = null;
                var3 = var12 == var2;
                var1 = undefined;
                var6 = undefined;
                if(var3) { _fun0005_ip = 17; continue _fun0005 }
case 18:
                var6 = var2.nudgedChannels;
case 17:
                if(!(var12 == var6)) { _fun0005_ip = 19; continue _fun0005 }
case 20:
                var6 = {};
case 19:
                var2 = global;
                var4 = var2.Date;
                var3 = var4.now;
                var11 = var3.bind(var4)();
                var3 = {};
                var4 = var2.Object;
                var2 = var4.entries;
                var10 = var2.bind(var4)(var6);
                var2 = var10.length;
                var9 = 0;
                var4 = var9 < var2;
                var8 = 2;
                var7 = 1;
                var6 = 0;
                if(!var4) { _fun0005_ip = 21; continue _fun0005 }
case 22:
                var13 = var10[var6];
                var4 = _closure1_slot7;
                var4 = var4.bind(var1)(var13, var8);
                var13 = var4[var9];
                var4 = var4[var7];
                var14 = var12 != var4;
                if(!var14) { _fun0005_ip = 23; continue _fun0005 }
case 24:
                var16 = var11 - var4;
                var15 = _closure1_slot12;
                var14 = var16 < var15;
case 23:
                if(!var14) { _fun0005_ip = 25; continue _fun0005 }
case 26:
                var3[var13] = var4;
case 25:
                var6 = var6 + 1;
                var4 = var10.length;
                if(var6 < var4) { _fun0005_ip = 22; continue _fun0005 }
case 21:
                _closure1_slot14 = var3;
                var8 = var5.waitFor;
                var20 = _closure1_slot10;
                var7 = _closure1_slot9;
                var3 = _closure1_slot8;
                var17 = _closure1_slot11;
                var21 = var5;
                var19 = var7;
                var18 = var3;
                var4 = var21[var8](var20, var19, var18, var17, var16);
                var6 = var5.syncWith;
                var4 = new Array(2);
                var4[0] = var7;
                var4[1] = var3;
                var3 = _closure1_slot16;
                var3 = var6.bind(var5)(var4, var3);
                var4 = var5.syncWith;
                var6 = _closure1_slot11;
                var3 = new Array(1);
                var3[0] = var6;
                var2 = _closure1_slot17;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(4);
        var1[0] = var5;
        var5 = {};
        var7 = 'getState';
        var5['key'] = var7;
        var7 = function value() {
            var1 = {};
            var2 = _closure1_slot14;
            var1['nudgedChannels'] = var2;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getNudgeTimestamp';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var3 = _closure1_slot13;
                var4 = null;
                var1 = null;
                if(!var3) { _fun0006_ip = 27; continue _fun0006 }
case 28:
                var3 = _closure1_slot14;
                var2 = arg1;
                var2 = var3[var2];
                var3 = var4 != var2;
                var1 = null;
                if(!var3) { _fun0006_ip = 27; continue _fun0006 }
case 29:
                var1 = var2;
case 27:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'isChannelNudged';
        var5['key'] = var7;
        var6 = function value(arg1) {
            var3 = this;
            var2 = var3.getNudgeTimestamp;
            var1 = arg1;
            var2 = var2.bind(var3)(var1);
            var1 = null;
            var1 = var1 != var2;
            return var1;
        };
        var5['value'] = var6;
        var1[3] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'ReplyNudgeStore';
    var8['displayName'] = var2;
    var8['persistKey'] = var2;
    var2 = 14;
    var2 = var6[var2];
    var12 = var7.bind(var1)(var2);
    var2 = {};
    var9 = function handleReplyNudgeSet(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = arg1;
            var5 = var1.channelId;
            var3 = var1.timestamp;
            var6 = _closure1_slot11;
            var2 = var6.isChannelMuted;
            var1 = null;
            var1 = var2.bind(var6)(var1, var5);
            var1 = !var1;
            if(!var1) { _fun0007_ip = 13; continue _fun0007 }
case 30:
            var2 = _closure1_slot14;
            var6 = var5 in var2;
            var2 = !var6;
            if(var6) { _fun0007_ip = 31; continue _fun0007 }
case 32:
            var4 = _closure1_slot14;
            var4[var5] = var3;
            var2 = undefined;
case 31:
            var1 = var2;
case 13:
            return var1;
        }
    };
    var2['REPLY_NUDGE_SET'] = var9;
    var9 = function handleMessageCreate(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var1 = arg1;
            var1 = var1.message;
            var4 = var1.channel_id;
            var3 = _closure1_slot14;
            var3 = var4 in var3;
            if(var3) { _fun0008_ip = 19; continue _fun0008 }
case 33:
            var3 = false;
            return var3;
case 19:
            var2 = _closure1_slot14;
            var1 = var1.channel_id;
            var1 = delete var2[var1];
            var1 = undefined;
            return var1;
        }
    };
    var2['MESSAGE_CREATE'] = var9;
    var9 = function handleMessageReactionAdd(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var1 = arg1;
            var4 = var1.channelId;
            var2 = var1.userId;
            var5 = _closure1_slot10;
            var1 = var5.getId;
            var1 = var1.bind(var5)();
            var1 = var2 === var1;
            if(!var1) { _fun0009_ip = 34; continue _fun0009 }
case 27:
            var2 = _closure1_slot14;
            var2 = var4 in var2;
            if(!var2) { _fun0009_ip = 35; continue _fun0009 }
case 36:
            var3 = _closure1_slot14;
            var3 = delete var3[var4];
            var2 = undefined;
case 35:
            var1 = var2;
case 34:
            return var1;
        }
    };
    var2['MESSAGE_REACTION_ADD'] = var9;
    var9 = function handleChannelDelete(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var1 = arg1;
            var1 = var1.channel;
            var2 = var1.id;
            var3 = _closure1_slot14;
            var3 = var2 in var3;
            if(var3) { _fun0010_ip = 19; continue _fun0010 }
case 33:
            var3 = false;
            return var3;
case 19:
            var1 = _closure1_slot14;
            var1 = delete var1[var2];
            var1 = undefined;
            return var1;
        }
    };
    var2['CHANNEL_DELETE'] = var9;
    var4 = function handleLogout() {
        var1 = {};
        _closure1_slot14 = var1;
        var1 = false;
        _closure1_slot13 = var1;
        var1 = undefined;
        return var1;
    };
    var2['LOGOUT'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var13 = var4;
    var11 = var2;
    var2 = new var13[var8](var12, var11, var10);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/reply_nudge/ReplyNudgeStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();