// app/stores/PermissionVADStore.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
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
            _closure1_slot17 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var9 = function handleUpdateVADPermission() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = _closure1_slot11;
            var1 = var2.getChannelId;
            var4 = var1.bind(var2)();
            var6 = null;
            var2 = var6 == var4;
            var1 = true;
            if(var2) { _fun0002_ip = 225; continue _fun0002 }
 31:
            var3 = _closure1_slot8;
            var2 = var3.getChannel;
            var9 = var2.bind(var3)(var4);
            var7 = _closure1_slot12;
            var4 = var7.getVoiceState;
            var2 = var6 == var9;
            var3 = undefined;
            if(var2) { _fun0002_ip = 74; continue _fun0002 }
 64:
            var2 = var9.getGuildId;
            var3 = var2.bind(var9)();
 74:
            var8 = _closure1_slot7;
            var2 = var8.getId;
            var2 = var2.bind(var8)();
            var4 = var4.bind(var7)(var3, var2);
            var3 = _closure1_slot9;
            var2 = var3.getMode;
            var3 = var2.bind(var3)();
            var2 = _closure1_slot13;
            var2 = var2.VOICE_ACTIVITY;
            var2 = var3 !== var2;
            if(var2) { _fun0002_ip = 129; continue _fun0002 }
 125:
            var2 = var6 == var9;
 129:
            if(var2) { _fun0002_ip = 142; continue _fun0002 }
 132:
            var3 = var9.isPrivate;
            var2 = var3.bind(var9)();
 142:
            if(var2) { _fun0002_ip = 155; continue _fun0002 }
 145:
            var3 = var9.isGuildStageVoice;
            var2 = var3.bind(var9)();
 155:
            if(var2) { _fun0002_ip = 184; continue _fun0002 }
 158:
            var8 = _closure1_slot10;
            var7 = var8.can;
            var3 = _closure1_slot14;
            var3 = var3.USE_VAD;
            var2 = var7.bind(var8)(var3, var9);
 184:
            if(var2) { _fun0002_ip = 222; continue _fun0002 }
 187:
            var3 = var6 == var4;
            if(var3) { _fun0002_ip = 206; continue _fun0002 }
 194:
            var7 = var4.suppress;
            var7 = !var7;
            var3 = !var7;
 206:
            if(var3) { _fun0002_ip = 219; continue _fun0002 }
 209:
            var4 = var4.requestToSpeakTimestamp;
            var3 = var6 != var4;
 219:
            var2 = var3;
 222:
            var1 = var2;
 225:
            var2 = _closure1_slot15;
            if(!(var2 !== var1)) { _fun0002_ip = 296; continue _fun0002 }
 233:
            _closure1_slot16 = var1;
            _closure1_slot15 = var1;
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 12;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var6 = 'SET_VAD_PERMISSION';
            var2['type'] = var6;
            var5 = _closure1_slot15;
            var2['hasPermission'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
 296:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot18 = var9;
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var8 = {};
    var2 = true;
    var8['value'] = var2;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var8);
    var1 = 0;
    var8 = var6[var1];
    var1 = undefined;
    var8 = var7.bind(var1)(var8);
    var _closure1_slot2 = var8;
    var8 = 1;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var8 = 2;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var8 = 3;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var8 = 4;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot6 = var8;
    var8 = 5;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot7 = var8;
    var8 = 6;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot8 = var8;
    var8 = 7;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot9 = var8;
    var8 = 8;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot10 = var8;
    var8 = 9;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot11 = var8;
    var8 = 10;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot12 = var8;
    var8 = 11;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var10 = var8.InputModes;
    var _closure1_slot13 = var10;
    var8 = var8.Permissions;
    var _closure1_slot14 = var8;
    var _closure1_slot15 = var2;
    var _closure1_slot16 = var2;
    var2 = 13;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function PermissionVADStore() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot2;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot5;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot4;
                var1 = _closure1_slot17;
                var1 = var1.bind(var3)();
                if(var1) { _fun0003_ip = 69; continue _fun0003 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0003_ip = 105; continue _fun0003;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
 105:
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
        var1 = function value() {
            var6 = this;
            var5 = var6.waitFor;
            var10 = _closure1_slot10;
            var9 = _closure1_slot9;
            var8 = _closure1_slot11;
            var7 = _closure1_slot12;
            var11 = var6;
            var1 = var11[var5](var10, var9, var8, var7, var6);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'shouldShowWarning';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot16;
            var1 = !var1;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'canUseVoiceActivity';
        var5['key'] = var7;
        var6 = function value() {
            var1 = _closure1_slot15;
            return var1;
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'PermissionVADStore';
    var8['displayName'] = var2;
    var2 = 12;
    var2 = var6[var2];
    var14 = var7.bind(var1)(var2);
    var2 = {};
    var2['RTC_CONNECTION_STATE'] = var9;
    var2['MEDIA_ENGINE_SET_AUDIO_ENABLED'] = var9;
    var2['AUDIO_SET_MODE'] = var9;
    var2['CHANNEL_UPDATES'] = var9;
    var2['THREAD_UPDATE'] = var9;
    var2['GUILD_ROLE_UPDATE'] = var9;
    var2['GUILD_MEMBER_UPDATE'] = var9;
    var2['IMPERSONATE_UPDATE'] = var9;
    var2['IMPERSONATE_STOP'] = var9;
    var9 = function handleVoiceStateUpdates(arg1) {
        var1 = arg1;
        var3 = var1.voiceStates;
        var2 = var3.some;
        var1 = function(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var1 = arg1;
                var3 = var1.userId;
                var4 = _closure1_slot7;
                var1 = var4.getId;
                var1 = var1.bind(var4)();
                var1 = var3 === var1;
                if(!var1) { _fun0004_ip = 42; continue _fun0004 }
 32:
                var3 = _closure1_slot18;
                var2 = undefined;
                var1 = var3.bind(var2)();
 42:
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['VOICE_STATE_UPDATES'] = var9;
    var9 = function handleUnclearWarning() {
        var1 = _closure1_slot15;
        _closure1_slot16 = var1;
        var1 = undefined;
        return var1;
    };
    var2['AUDIO_TOGGLE_SELF_MUTE'] = var9;
    var4 = function handleClearWarning() {
        var1 = true;
        _closure1_slot16 = var1;
        var1 = undefined;
        return var1;
    };
    var2['PERMISSION_CLEAR_VAD_WARNING'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var15 = var4;
    var13 = var2;
    var2 = new var15[var8](var14, var13, var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'stores/PermissionVADStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();