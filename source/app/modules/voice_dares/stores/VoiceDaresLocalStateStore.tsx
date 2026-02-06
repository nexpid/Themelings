// app/modules/voice_dares/stores/VoiceDaresLocalStateStore.tsx
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
    var1 = function updateLocalVoiceDare(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = arg1;
            var2 = null;
            var1 = var2 == var4;
            if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 7;
            var3 = var3[var1];
            var1 = undefined;
            var3 = var5.bind(var1)(var3);
            var1 = var3.encodeVoiceDareToFields;
            var2 = var1.bind(var3)(var4);
case 6:
            var6 = _closure1_slot1;
            var8 = _closure1_slot2;
            var5 = 8;
            var1 = var8[var5];
            var7 = undefined;
            var9 = var6.bind(var7)(var1);
            var1 = _closure1_slot9;
            var1 = var9.bind(var7)(var1, var4);
            var5 = var8[var5];
            var6 = var6.bind(var7)(var5);
            var5 = _closure1_slot10;
            var5 = var6.bind(var7)(var5, var2);
            var1 = !var1;
            if(var1) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var1 = !var5;
case 8:
            if(!var1) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            _closure1_slot9 = var4;
            _closure1_slot10 = var2;
            var1 = true;
case 10:
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = function clearLocalVoiceDare() {
        var3 = _closure1_slot12;
        var2 = undefined;
        var1 = null;
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var _closure1_slot13 = var1;
    var1 = function generateShortId() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var7 = '';
            var5 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var4 = global;
            var3 = 62;
            var2 = 8;
            var6 = 0;
case 12:
            var8 = var5.charAt;
            var10 = var4.Math;
            var9 = var10.floor;
            var11 = var4.Math;
            var1 = var11.random;
            var1 = var1.bind(var11)();
            var1 = var3 * var1;
            var1 = var9.bind(var10)(var1);
            var1 = var8.bind(var5)(var1);
            var1 = var7 + var1;
            var6 = var6 + 1;
            var7 = var1;
            if(var6 < var2) { _fun0003_ip = 12; continue _fun0003 }
case 13:
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = function createVoiceDareFromOffer(arg1, arg2, arg3) {
        var5 = _closure1_slot16;
        var4 = undefined;
        var3 = arg1;
        var2 = arg2;
        var1 = arg3;
        var1 = var5.bind(var4)(var3, var2, var1);
        return var1;
    };
    var _closure1_slot15 = var1;
    var1 = function createVoiceDareFromBase(arg1, arg2, arg3) {
        var1 = {};
        var5 = arg1;
        var6 = var1;
        var2 = copyDataProperties(var6, var5);
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 6;
        var3 = var3[var2];
        var2 = undefined;
        var2 = var4.bind(var2)(var3);
        var2 = var2.VoiceDareMessageKind;
        var3 = var2.STATE;
        var2 = 'messageKind';
        var1[var2] = var3;
        var3 = arg2;
        var2 = 'phase';
        var1[var2] = var3;
        var3 = arg3;
        var2 = 'startedAtMs';
        var1[var2] = var3;
        return var1;
    };
    var _closure1_slot16 = var1;
    var1 = function createVoiceDareCommandFromBase(arg1, arg2) {
        var1 = {};
        var5 = arg1;
        var6 = var1;
        var2 = copyDataProperties(var6, var5);
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 6;
        var3 = var3[var2];
        var2 = undefined;
        var2 = var4.bind(var2)(var3);
        var2 = var2.VoiceDareMessageKind;
        var3 = var2.COMMAND;
        var2 = 'messageKind';
        var1[var2] = var3;
        var3 = arg2;
        var2 = 'commandType';
        var1[var2] = var3;
        return var1;
    };
    var _closure1_slot17 = var1;
    var1 = function normalizePrompt(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var1 = var2.trim;
            var5 = var1.bind(var2)();
            var4 = var5.length;
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var7 = 6;
            var1 = var1[var7];
            var6 = undefined;
            var1 = var3.bind(var6)(var1);
            var3 = var1.VOICE_DARE_MAX_PROMPT_LENGTH;
            var1 = var5;
            if(!(!(var4 <= var3))) { _fun0004_ip = 14; continue _fun0004 }
case 15:
            var4 = var5.slice;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var7];
            var2 = var3.bind(var6)(var2);
            var3 = var2.VOICE_DARE_MAX_PROMPT_LENGTH;
            var2 = 0;
            var1 = var4.bind(var5)(var2, var3);
case 14:
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var1 = function getSpicinessRank(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var3 = arg1;
            var6 = _closure1_slot0;
            var1 = _closure1_slot2;
            var5 = 6;
            var4 = var1[var5];
            var1 = undefined;
            var4 = var6.bind(var1)(var4);
            var4 = var4.VoiceDareSpiciness;
            var4 = var4.MILD;
            if(!(var4 !== var3)) { _fun0005_ip = 16; continue _fun0005 }
case 17:
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var5];
            var4 = var6.bind(var1)(var4);
            var4 = var4.VoiceDareSpiciness;
            var4 = var4.SPICY;
            if(!(var4 !== var3)) { _fun0005_ip = 18; continue _fun0005 }
case 19:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var5];
            var2 = var4.bind(var1)(var2);
            var2 = var2.VoiceDareSpiciness;
            var2 = var2.UNHINGED;
            if(!(var2 !== var3)) { _fun0005_ip = 20; continue _fun0005 }
case 21:
            return var1;
case 20:
            var1 = 2;
            return var1;
case 18:
            var1 = 1;
            return var1;
case 16:
            var1 = 0;
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var1 = function isVoiceDaresEnabled() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 9;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.getVoiceDaresExperimentConfig;
        var1 = 'VoiceDaresLocalStateStore';
        var1 = var2.bind(var3)(var1);
        var1 = var1.enabled;
        return var1;
    };
    var _closure1_slot20 = var1;
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
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.ActivityTypes;
    var _closure1_slot8 = var2;
    var2 = null;
    var _closure1_slot9 = var2;
    var _closure1_slot10 = var2;
    var2 = 10;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function VoiceDaresLocalStateStore() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot3;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot6;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot11;
                var1 = var1.bind(var3)();
                if(var1) { _fun0006_ip = 22; continue _fun0006 }
case 23:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0006_ip = 24; continue _fun0006;
case 22:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 24:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'getLocalVoiceDare';
        var5['key'] = var1;
        var1 = function value() {
            var1 = _closure1_slot9;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'getFieldDistribution';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot10;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getVoiceDareCustomStatusActivity';
        var5['key'] = var7;
        var6 = function value() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var1 = _closure1_slot10;
                var4 = null;
                var2 = var4 == var1;
                var1 = null;
                if(var2) { _fun0007_ip = 25; continue _fun0007 }
case 26:
                var6 = _closure1_slot10;
                var2 = var6.state;
                var2 = var4 != var2;
                var3 = '';
                if(!var2) { _fun0007_ip = 3; continue _fun0007 }
case 27:
                var8 = var6.state;
                var2 = global;
                var2 = var2.HermesInternal;
                var7 = var2.concat;
                var2 = '\u2063';
                var3 = var7.bind(var2)(var8);
case 3:
                var2 = {};
                var5 = _closure1_slot8;
                var5 = var5.CUSTOM_STATUS;
                var2['type'] = var5;
                var7 = var6.name;
                var8 = var4 != var7;
                var5 = 'Custom Status';
                if(!var8) { _fun0007_ip = 28; continue _fun0007 }
case 29:
                var5 = var7;
case 28:
                var2['name'] = var5;
                var2['state'] = var3;
                var3 = var6.details;
                if(!(var4 == var3)) { _fun0007_ip = 30; continue _fun0007 }
case 31:
                var3 = {};
                _fun0007_ip = 32; continue _fun0007;
case 30:
                var5 = {};
                var7 = var6.details;
                var5['details'] = var7;
                var3 = var5;
case 32:
                var10 = var2;
                var9 = var3;
                var3 = copyDataProperties(var10, var9);
                var3 = var6.partyId;
                if(!(var4 == var3)) { _fun0007_ip = 33; continue _fun0007 }
case 34:
                var3 = {};
                _fun0007_ip = 35; continue _fun0007;
case 33:
                var4 = {};
                var5 = {};
                var6 = var6.partyId;
                var5['id'] = var6;
                var4['party'] = var5;
                var3 = var4;
case 35:
                var10 = var2;
                var9 = var3;
                var3 = copyDataProperties(var10, var9);
                var1 = var2;
case 25:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'VoiceDaresLocalStateStore';
    var8['displayName'] = var2;
    var2 = 11;
    var2 = var6[var2];
    var12 = var7.bind(var1)(var2);
    var2 = {};
    var9 = function handleLocalOffer(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var1 = _closure1_slot20;
            var4 = undefined;
            var1 = var1.bind(var4)();
            if(var1) { _fun0008_ip = 36; continue _fun0008 }
case 37:
            var1 = _closure1_slot13;
            var1 = var1.bind(var4)();
            _fun0008_ip = 15; continue _fun0008;
case 36:
            var3 = _closure1_slot12;
            var2 = arg1;
            var5 = var2.voiceDare;
            var2 = function createOfferFromPayload(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var5 = arg1;
                    var13 = var5.durationSec;
                    var1 = global;
                    var3 = var1.Number;
                    var2 = var3.isFinite;
                    var2 = var2.bind(var3)(var13);
                    if(var2) { _fun0009_ip = 38; continue _fun0009 }
case 39:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 6;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var3 = var2.VOICE_DARE_DEFAULT_DURATION_MIN;
                    var2 = 60;
                    var4 = var2 * var3;
                    _fun0009_ip = 40; continue _fun0009;
case 38:
                    var8 = var1.Math;
                    var7 = var8.max;
                    var14 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var2 = 6;
                    var3 = var15[var2];
                    var12 = undefined;
                    var3 = var14.bind(var12)(var3);
                    var3 = var3.VOICE_DARE_MIN_DURATION_MIN;
                    var9 = 60;
                    var3 = var9 * var3;
                    var11 = var1.Math;
                    var10 = var11.min;
                    var2 = var15[var2];
                    var2 = var14.bind(var12)(var2);
                    var2 = var2.VOICE_DARE_MAX_DURATION_MIN;
                    var9 = var9 * var2;
                    var12 = var1.Math;
                    var2 = var12.floor;
                    var2 = var2.bind(var12)(var13);
                    var2 = var10.bind(var11)(var9, var2);
                    var4 = var7.bind(var8)(var3, var2);
case 40:
                    var13 = var5.failAfterHours;
                    var3 = var1.Number;
                    var2 = var3.isFinite;
                    var2 = var2.bind(var3)(var13);
                    if(var2) { _fun0009_ip = 41; continue _fun0009 }
case 42:
                    var7 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 6;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var7.bind(var2)(var3);
                    var3 = var2.VOICE_DARE_DEFAULT_FAIL_AFTER_HOURS;
                    _fun0009_ip = 43; continue _fun0009;
case 41:
                    var8 = var1.Math;
                    var7 = var8.max;
                    var14 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var9 = 6;
                    var2 = var15[var9];
                    var12 = undefined;
                    var2 = var14.bind(var12)(var2);
                    var2 = var2.VOICE_DARE_MIN_FAIL_AFTER_HOURS;
                    var11 = var1.Math;
                    var10 = var11.min;
                    var9 = var15[var9];
                    var9 = var14.bind(var12)(var9);
                    var9 = var9.VOICE_DARE_MAX_FAIL_AFTER_HOURS;
                    var12 = var1.Math;
                    var1 = var12.floor;
                    var1 = var1.bind(var12)(var13);
                    var1 = var10.bind(var11)(var9, var1);
                    var3 = var7.bind(var8)(var2, var1);
case 43:
                    var2 = var5.spiciness;
                    var1 = function normalizeSpiciness(arg1) {
                        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                            var2 = arg1;
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var1 = 6;
                            var1 = var5[var1];
                            var5 = undefined;
                            var1 = var4.bind(var5)(var1);
                            var1 = var1.VoiceDareSpiciness;
                            var1 = var1.UNHINGED;
                            var3 = _closure1_slot19;
                            var4 = var3.bind(var5)(var2);
                            var3 = var3.bind(var5)(var1);
                            var4 = var4 - var3;
                            var3 = 0;
                            if(!(var4 <= var3)) { _fun0010_ip = 44; continue _fun0010 }
case 45:
                            var1 = var2;
case 44:
                            return var1;
                        }
                    };
                    var7 = undefined;
                    var2 = var1.bind(var7)(var2);
                    var1 = {};
                    var8 = _closure1_slot14;
                    var8 = var8.bind(var7)();
                    var1['dareId'] = var8;
                    var8 = var5.guildId;
                    var1['guildId'] = var8;
                    var8 = var5.channelId;
                    var1['channelId'] = var8;
                    var8 = var5.senderId;
                    var1['senderId'] = var8;
                    var8 = var5.targetId;
                    var1['targetId'] = var8;
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var8 = 6;
                    var8 = var10[var8];
                    var8 = var9.bind(var7)(var8);
                    var8 = var8.VoiceDareMessageKind;
                    var8 = var8.OFFER;
                    var1['messageKind'] = var8;
                    var8 = var5.kind;
                    var1['kind'] = var8;
                    var6 = _closure1_slot18;
                    var5 = var5.prompt;
                    var5 = var6.bind(var7)(var5);
                    var1['prompt'] = var5;
                    var1['durationSec'] = var4;
                    var1['failAfterHours'] = var3;
                    var1['spiciness'] = var2;
                    return var1;
                }
            };
            var2 = var2.bind(var4)(var5);
            var1 = var3.bind(var4)(var2);
case 15:
            return var1;
        }
    };
    var2['VOICE_DARES_LOCAL_OFFERED'] = var9;
    var9 = function handleLocalAcceptOffer(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var2 = _closure1_slot20;
            var3 = undefined;
            var2 = var2.bind(var3)();
            if(var2) { _fun0011_ip = 36; continue _fun0011 }
case 37:
            var2 = _closure1_slot13;
            var2 = var2.bind(var3)();
            return var2;
case 36:
            var2 = global;
            var4 = var2.Date;
            var2 = var4.now;
            var6 = var2.bind(var4)();
            var2 = _closure1_slot12;
            var5 = _closure1_slot15;
            var4 = arg1;
            var4 = var4.voiceDare;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 6;
            var1 = var8[var1];
            var1 = var7.bind(var3)(var1);
            var1 = var1.VoiceDarePhase;
            var1 = var1.RUNNING;
            var1 = var5.bind(var3)(var4, var1, var6);
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var2['VOICE_DARES_LOCAL_ACCEPT_OFFER'] = var9;
    var9 = function handleLocalDeclineOffer(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var1 = _closure1_slot20;
            var4 = undefined;
            var1 = var1.bind(var4)();
            if(var1) { _fun0012_ip = 36; continue _fun0012 }
case 37:
            var1 = _closure1_slot13;
            var1 = var1.bind(var4)();
            _fun0012_ip = 46; continue _fun0012;
case 36:
            var3 = _closure1_slot12;
            var6 = _closure1_slot15;
            var5 = arg1;
            var5 = var5.voiceDare;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 6;
            var2 = var8[var2];
            var2 = var7.bind(var4)(var2);
            var2 = var2.VoiceDarePhase;
            var2 = var2.CANCELLED;
            var2 = var6.bind(var4)(var5, var2);
            var1 = var3.bind(var4)(var2);
case 46:
            return var1;
        }
    };
    var2['VOICE_DARES_LOCAL_DECLINE_OFFER'] = var9;
    var9 = function handleLocalComplete(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var1 = _closure1_slot20;
            var4 = undefined;
            var1 = var1.bind(var4)();
            if(var1) { _fun0013_ip = 36; continue _fun0013 }
case 37:
            var1 = _closure1_slot13;
            var1 = var1.bind(var4)();
            _fun0013_ip = 46; continue _fun0013;
case 36:
            var3 = _closure1_slot12;
            var6 = _closure1_slot16;
            var5 = arg1;
            var5 = var5.voiceDare;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 6;
            var2 = var8[var2];
            var2 = var7.bind(var4)(var2);
            var2 = var2.VoiceDarePhase;
            var2 = var2.COMPLETED;
            var2 = var6.bind(var4)(var5, var2);
            var1 = var3.bind(var4)(var2);
case 46:
            return var1;
        }
    };
    var2['VOICE_DARES_LOCAL_COMPLETE'] = var9;
    var9 = function handleLocalChickenOut(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var1 = _closure1_slot20;
            var4 = undefined;
            var1 = var1.bind(var4)();
            if(var1) { _fun0014_ip = 36; continue _fun0014 }
case 37:
            var1 = _closure1_slot13;
            var1 = var1.bind(var4)();
            _fun0014_ip = 46; continue _fun0014;
case 36:
            var3 = _closure1_slot12;
            var6 = _closure1_slot16;
            var5 = arg1;
            var5 = var5.voiceDare;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 6;
            var2 = var8[var2];
            var2 = var7.bind(var4)(var2);
            var2 = var2.VoiceDarePhase;
            var2 = var2.FAILED;
            var2 = var6.bind(var4)(var5, var2);
            var1 = var3.bind(var4)(var2);
case 46:
            return var1;
        }
    };
    var2['VOICE_DARES_LOCAL_CHICKEN_OUT'] = var9;
    var9 = function handleLocalRequestComplete(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var1 = _closure1_slot20;
            var4 = undefined;
            var1 = var1.bind(var4)();
            if(var1) { _fun0015_ip = 36; continue _fun0015 }
case 37:
            var1 = _closure1_slot13;
            var1 = var1.bind(var4)();
            _fun0015_ip = 46; continue _fun0015;
case 36:
            var3 = _closure1_slot12;
            var6 = _closure1_slot17;
            var5 = arg1;
            var5 = var5.voiceDare;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 6;
            var2 = var8[var2];
            var2 = var7.bind(var4)(var2);
            var2 = var2.VoiceDareCommandType;
            var2 = var2.COMPLETE_REQUESTED;
            var2 = var6.bind(var4)(var5, var2);
            var1 = var3.bind(var4)(var2);
case 46:
            return var1;
        }
    };
    var2['VOICE_DARES_LOCAL_REQUEST_COMPLETE'] = var9;
    var9 = function handleLocalRequestCancel(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var1 = _closure1_slot20;
            var4 = undefined;
            var1 = var1.bind(var4)();
            if(var1) { _fun0016_ip = 36; continue _fun0016 }
case 37:
            var1 = _closure1_slot13;
            var1 = var1.bind(var4)();
            _fun0016_ip = 46; continue _fun0016;
case 36:
            var3 = _closure1_slot12;
            var6 = _closure1_slot17;
            var5 = arg1;
            var5 = var5.voiceDare;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 6;
            var2 = var8[var2];
            var2 = var7.bind(var4)(var2);
            var2 = var2.VoiceDareCommandType;
            var2 = var2.CANCEL_REQUESTED;
            var2 = var6.bind(var4)(var5, var2);
            var1 = var3.bind(var4)(var2);
case 46:
            return var1;
        }
    };
    var2['VOICE_DARES_LOCAL_REQUEST_CANCEL'] = var9;
    var9 = function handleLocalCancelOffer(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var6 = arg1;
            var1 = _closure1_slot9;
            var7 = null;
            var1 = var7 != var1;
            if(!var1) { _fun0017_ip = 47; continue _fun0017 }
case 48:
            var2 = _closure1_slot9;
            var3 = var2.messageKind;
            var8 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 6;
            var2 = var5[var2];
            var5 = undefined;
            var2 = var8.bind(var5)(var2);
            var2 = var2.VoiceDareMessageKind;
            var2 = var2.OFFER;
            var2 = var3 === var2;
            if(!var2) { _fun0017_ip = 18; continue _fun0017 }
case 3:
            var3 = var6.dareId;
            var3 = var7 == var3;
            if(var3) { _fun0017_ip = 49; continue _fun0017 }
case 50:
            var7 = _closure1_slot9;
            var7 = var7.dareId;
            var6 = var6.dareId;
            var3 = var7 === var6;
case 49:
            if(!var3) { _fun0017_ip = 11; continue _fun0017 }
case 51:
            var4 = _closure1_slot13;
            var3 = var4.bind(var5)();
case 11:
            var2 = var3;
case 18:
            var1 = var2;
case 47:
            return var1;
        }
    };
    var2['VOICE_DARES_LOCAL_CANCEL_OFFER'] = var9;
    var9 = function handleLocalCleared() {
        var2 = _closure1_slot13;
        var1 = undefined;
        var1 = var2.bind(var1)();
        return var1;
    };
    var2['VOICE_DARES_LOCAL_CLEARED'] = var9;
    var4 = function handleLogout() {
        var2 = _closure1_slot13;
        var1 = undefined;
        var1 = var2.bind(var1)();
        return var1;
    };
    var2['LOGOUT'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var13 = var4;
    var11 = var2;
    var2 = new var13[var8](var12, var11, var10);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_dares/stores/VoiceDaresLocalStateStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();