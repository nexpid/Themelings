// app/modules/stage_channels/StageChannelUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var1 = native4;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var6;
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
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.RequestToSpeakPermissionStates;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Permissions;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.RowType;
    var _closure1_slot8 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/stage_channels/StageChannelUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function fillChunk(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg2;
            var3 = arg3;
            var6 = _closure1_slot0;
            var5 = _closure1_slot3;
            var4 = 5;
            var5 = var5[var4];
            var4 = undefined;
            var6 = var6.bind(var4)(var5);
            var5 = var6.chunk;
            var4 = arg1;
            var4 = var5.bind(var6)(var4, var2);
            var5 = null;
            if(!(var5 != var3)) { _fun0001_ip = 57; continue _fun0001 }
 54:
            var2 = var3;
 57:
            var _closure2_slot0 = var2;
            var3 = var4.reduce;
            var2 = function(arg1, arg2) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var4 = arg1;
                    var2 = arg2;
                    var5 = _closure2_slot0;
                    var3 = var2.length;
                    if(!(!(var5 <= var3))) { _fun0002_ip = 129; continue _fun0002 }
 22:
                    var3 = new Array(0);
                    var11 = var3;
                    var10 = var2;
                    var9 = 0;
                    var9 = arraySpread(var11, var10, var9);
                    var7 = global;
                    var8 = var7.Array;
                    var7 = _closure2_slot0;
                    var1 = var2.length;
                    var11 = var7 - var1;
                    var7 = var8.prototype;
                    var7 = Object.create(var7, {constructor: {value: var8}});
                    var12 = var7;
                    var1 = new var12[var8](var11, var10);
                    var8 = var1 instanceof Object ? var1 : var7;
                    var7 = var8.fill;
                    var1 = null;
                    var10 = var7.bind(var8)(var1);
                    var11 = var3;
                    var1 = arraySpread(var11, var10, var9);
                    var1 = new Array(1);
                    var11 = var1;
                    var10 = var4;
                    var9 = 0;
                    var5 = arraySpread(var11, var10, var9);
                    var1[var5] = var3;
                    var3 = 1;
                    var3 = var5 + var3;
                    return var1;
 129:
                    var1 = new Array(1);
                    var9 = 0;
                    var11 = var1;
                    var10 = var4;
                    var3 = arraySpread(var11, var10, var9);
                    var1[var3] = var2;
                    var2 = 1;
                    var2 = var3 + var2;
                    return var1;
                }
            };
            var1 = new Array(0);
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['fillChunk'] = var4;
    var4 = function summarizeUsernamesParticipating(arg1, arg2, arg3, arg4) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg2;
            var7 = arg4;
            var2 = 0;
            var4 = var1[var2];
            var5 = _closure1_slot1;
            var6 = _closure1_slot3;
            var2 = 6;
            var2 = var6[var2];
            var8 = undefined;
            var9 = var5.bind(var8)(var2);
            var6 = var9.getName;
            var5 = arg1;
            var2 = arg3;
            var10 = var6.bind(var9)(var5, var2, var4);
            var2 = null;
            if(!(var2 == var7)) { _fun0003_ip = 67; continue _fun0003 }
 62:
            var7 = var1.length;
 67:
            var9 = 1;
            if(!(var9 === var7)) { _fun0003_ip = 84; continue _fun0003 }
 74:
            var1 = var10;
            if(!(var2 == var4)) { _fun0003_ip = 225; continue _fun0003 }
 84:
            if(!(var2 != var4)) { _fun0003_ip = 160; continue _fun0003 }
 88:
            var4 = _closure1_slot0;
            var11 = _closure1_slot3;
            var2 = 7;
            var5 = var11[var2];
            var5 = var4.bind(var8)(var5);
            var6 = var5.intl;
            var5 = var6.formatToPlainString;
            var2 = var11[var2];
            var2 = var4.bind(var8)(var2);
            var2 = var2.t;
            var4 = var2.GhkJ29;
            var2 = {};
            var2['name'] = var10;
            var9 = var7 - var9;
            var2['count'] = var9;
            var2 = var5.bind(var6)(var4, var2);
            _fun0003_ip = 222; continue _fun0003;
 160:
            var4 = _closure1_slot0;
            var9 = _closure1_slot3;
            var3 = 7;
            var5 = var9[var3];
            var5 = var4.bind(var8)(var5);
            var6 = var5.intl;
            var5 = var6.formatToPlainString;
            var3 = var9[var3];
            var3 = var4.bind(var8)(var3);
            var3 = var3.t;
            var4 = var3.chmM9P;
            var3 = {};
            var3['count'] = var7;
            var2 = var5.bind(var6)(var4, var3);
 222:
            var1 = var2;
 225:
            return var1;
        }
    };
    var3['summarizeUsernamesParticipating'] = var4;
    var4 = function summarizeUsernamesParticipatingWithSpeakerNickname(arg1, arg2, arg3) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var8 = arg2;
            var7 = arg3;
            var2 = null;
            if(!(var2 == var7)) { _fun0004_ip = 20; continue _fun0004 }
 12:
            var1 = arg1;
            var7 = var1.length;
 20:
            var6 = 1;
            if(!(var6 === var7)) { _fun0004_ip = 37; continue _fun0004 }
 27:
            var1 = var8;
            if(!(var2 == var1)) { _fun0004_ip = 188; continue _fun0004 }
 37:
            if(!(var2 != var8)) { _fun0004_ip = 118; continue _fun0004 }
 41:
            var9 = _closure1_slot0;
            var10 = _closure1_slot3;
            var2 = 7;
            var4 = var10[var2];
            var3 = undefined;
            var4 = var9.bind(var3)(var4);
            var5 = var4.intl;
            var4 = var5.formatToPlainString;
            var2 = var10[var2];
            var2 = var9.bind(var3)(var2);
            var2 = var2.t;
            var3 = var2.GhkJ29;
            var2 = {};
            var2['name'] = var8;
            var6 = var7 - var6;
            var2['count'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            _fun0004_ip = 185; continue _fun0004;
 118:
            var8 = _closure1_slot0;
            var9 = _closure1_slot3;
            var3 = 7;
            var5 = var9[var3];
            var4 = undefined;
            var5 = var8.bind(var4)(var5);
            var6 = var5.intl;
            var5 = var6.formatToPlainString;
            var3 = var9[var3];
            var3 = var8.bind(var4)(var3);
            var3 = var3.t;
            var4 = var3.chmM9P;
            var3 = {};
            var3['count'] = var7;
            var2 = var5.bind(var6)(var4, var3);
 185:
            var1 = var2;
 188:
            return var1;
        }
    };
    var3['summarizeUsernamesParticipatingWithSpeakerNickname'] = var4;
    var4 = function getRemoveModeratorTooltipHint(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var3 = arg1;
            var2 = _closure1_slot8;
            var2 = var2.OWNER;
            if(!(var2 !== var3)) { _fun0005_ip = 231; continue _fun0005 }
 23:
            var2 = _closure1_slot8;
            var2 = var2.ADMINISTRATOR;
            if(!(var2 !== var3)) { _fun0005_ip = 172; continue _fun0005 }
 40:
            var2 = _closure1_slot8;
            var2 = var2.MEMBER;
            if(!(var2 !== var3)) { _fun0005_ip = 90; continue _fun0005 }
 54:
            var2 = _closure1_slot8;
            var2 = var2.ROLE;
            if(!(var2 !== var3)) { _fun0005_ip = 90; continue _fun0005 }
 68:
            var2 = _closure1_slot8;
            var2 = var2.EMPTY_STATE;
            if(!(var2 !== var3)) { _fun0005_ip = 86; continue _fun0005 }
 82:
            var2 = null;
            return var2;
 86:
            var2 = null;
            return var2;
 90:
            var6 = _closure1_slot0;
            var7 = _closure1_slot3;
            var2 = 7;
            var4 = var7[var2];
            var3 = undefined;
            var4 = var6.bind(var3)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var2 = var7[var2];
            var2 = var6.bind(var3)(var2);
            var3 = var2.t;
            var2 = arg2;
            if(var2) { _fun0005_ip = 157; continue _fun0005 }
 142:
            var2 = var3.YieyPj;
            var2 = var4.bind(var5)(var2);
            _fun0005_ip = 170; continue _fun0005;
 157:
            var3 = var3.Hw3XW1;
            var2 = var4.bind(var5)(var3);
 170:
            return var2;
 172:
            var6 = _closure1_slot0;
            var7 = _closure1_slot3;
            var2 = 7;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.eTmN5e;
            var2 = var3.bind(var4)(var2);
            return var2;
 231:
            var5 = _closure1_slot0;
            var6 = _closure1_slot3;
            var1 = 7;
            var2 = var6[var1];
            var4 = undefined;
            var2 = var5.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.icuNBA;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['getRemoveModeratorTooltipHint'] = var4;
    var2 = function getStageChannelMetadata(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var9 = arg1;
            var3 = _closure1_slot5;
            var2 = var3.getStageInstanceByChannel;
            var1 = var9.id;
            var3 = var2.bind(var3)(var1);
            var1 = {};
            var2 = var9.id;
            var1['channel_id'] = var2;
            var2 = var9.guild_id;
            var1['guild_id'] = var2;
            var4 = null;
            var7 = var4 == var3;
            var2 = undefined;
            var5 = undefined;
            if(var7) { _fun0006_ip = 65; continue _fun0006 }
 59:
            var5 = var3.topic;
 65:
            var1['topic'] = var5;
            var7 = _closure1_slot4;
            var5 = var7.getMediaSessionId;
            var5 = var5.bind(var7)();
            var1['media_session_id'] = var5;
            var7 = _closure1_slot2;
            var8 = _closure1_slot3;
            var5 = 8;
            var5 = var8[var5];
            var8 = var7.bind(var2)(var5);
            var7 = var8.canEveryoneRole;
            var5 = _closure1_slot7;
            var5 = var5.REQUEST_TO_SPEAK;
            var5 = var7.bind(var8)(var5, var9);
            var6 = _closure1_slot6;
            if(var5) { _fun0006_ip = 146; continue _fun0006 }
 138:
            var5 = var6.NO_ONE;
            _fun0006_ip = 152; continue _fun0006;
 146:
            var5 = var6.EVERYONE;
 152:
            var1['request_to_speak_state'] = var5;
            var4 = var4 == var3;
            var2 = undefined;
            if(var4) { _fun0006_ip = 173; continue _fun0006 }
 168:
            var2 = var3.id;
 173:
            var1['stage_instance_id'] = var2;
            return var1;
        }
    };
    var3['getStageChannelMetadata'] = var2;
    return var1;
})();