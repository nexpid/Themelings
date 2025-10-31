// app/stores/PermissionVADStore.tsx
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
            _closure1_slot19 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var9 = function handleUpdateVADPermission() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = _closure1_slot12;
            var1 = var2.getChannelId;
            var7 = var1.bind(var2)();
            var9 = null;
            var2 = var9 == var7;
            var1 = false;
            var5 = true;
            var4 = false;
            if(var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var3 = _closure1_slot9;
            var2 = var3.getChannel;
            var12 = var2.bind(var3)(var7);
            var8 = _closure1_slot13;
            var7 = var8.getVoiceState;
            var2 = var9 == var12;
            var10 = undefined;
            var3 = undefined;
            if(var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var2 = var12.getGuildId;
            var3 = var2.bind(var12)();
case 8:
            var11 = _closure1_slot8;
            var2 = var11.getId;
            var2 = var2.bind(var11)();
            var8 = var7.bind(var8)(var3, var2);
            var3 = _closure1_slot10;
            var2 = var3.getMode;
            var3 = var2.bind(var3)();
            var2 = _closure1_slot14;
            var2 = var2.VOICE_ACTIVITY;
            var2 = var3 === var2;
            var7 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 12;
            var3 = var11[var3];
            var10 = var7.bind(var10)(var3);
            var7 = var10.getPushToTalkLatchingExperimentConfig;
            var3 = {'location': 'doPTT', 'autoTrackExposure': false};
            var3 = var7.bind(var10)(var3);
            var7 = var3.enableLatching;
            if(!var7) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var10 = _closure1_slot10;
            var3 = var10.getModeOptions;
            var3 = var3.bind(var10)();
            var7 = var3.pttLatchingEnabled;
case 10:
            var3 = var2;
            if(var2) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var3 = var7;
case 12:
            var3 = !var3;
            if(var3) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var3 = var9 == var12;
case 14:
            if(var3) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var7 = var12.isPrivate;
            var3 = var7.bind(var12)();
case 16:
            if(var3) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var7 = var12.isGuildStageVoice;
            var3 = var7.bind(var12)();
case 18:
            if(var3) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var11 = _closure1_slot11;
            var10 = var11.can;
            var7 = _closure1_slot15;
            var7 = var7.USE_VAD;
            var3 = var10.bind(var11)(var7, var12);
case 20:
            if(var3) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var7 = var9 == var8;
            if(var7) { _fun0002_ip = 24; continue _fun0002 }
case 25:
            var10 = var8.suppress;
            var10 = !var10;
            var7 = !var10;
case 24:
            if(var7) { _fun0002_ip = 26; continue _fun0002 }
case 27:
            var8 = var8.requestToSpeakTimestamp;
            var7 = var9 != var8;
case 26:
            var3 = var7;
case 22:
            var5 = var3;
            var4 = var2;
case 6:
            var3 = var5;
            if(var5) { _fun0002_ip = 28; continue _fun0002 }
case 29:
            var3 = !var4;
case 28:
            var2 = var5;
            if(var2) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            var2 = var4;
case 30:
            var4 = _closure1_slot16;
            if(!(var4 === var5)) { _fun0002_ip = 32; continue _fun0002 }
case 33:
            var4 = _closure1_slot17;
            if(!(var4 !== var2)) { _fun0002_ip = 34; continue _fun0002 }
case 32:
            _closure1_slot18 = var3;
            _closure1_slot16 = var3;
            _closure1_slot17 = var2;
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 13;
            var3 = var3[var2];
            var2 = undefined;
            var5 = var4.bind(var2)(var3);
            var4 = var5.dispatch;
            var3 = {};
            var7 = 'SET_VAD_PERMISSION';
            var3['type'] = var7;
            var7 = _closure1_slot16;
            var3['hasPermission'] = var7;
            var6 = _closure1_slot17;
            var3['hasLatchPermission'] = var6;
            var3 = var4.bind(var5)(var3);
            return var2;
case 34:
            return var1;
        }
    };
    var _closure1_slot20 = var9;
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
    var _closure1_slot3 = var8;
    var8 = 1;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var8 = 2;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var8 = 3;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot6 = var8;
    var8 = 4;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot7 = var8;
    var8 = 5;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot8 = var8;
    var8 = 6;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot9 = var8;
    var8 = 7;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot10 = var8;
    var8 = 8;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot11 = var8;
    var8 = 9;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot12 = var8;
    var8 = 10;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot13 = var8;
    var8 = 11;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var10 = var8.InputModes;
    var _closure1_slot14 = var10;
    var8 = var8.Permissions;
    var _closure1_slot15 = var8;
    var _closure1_slot16 = var2;
    var _closure1_slot17 = var2;
    var _closure1_slot18 = var2;
    var2 = 14;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function PermissionVADStore() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
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
                var1 = _closure1_slot19;
                var1 = var1.bind(var3)();
                if(var1) { _fun0003_ip = 35; continue _fun0003 }
case 36:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0003_ip = 37; continue _fun0003;
case 35:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 37:
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
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value() {
            var8 = this;
            var7 = var8.waitFor;
            var14 = _closure1_slot8;
            var13 = _closure1_slot9;
            var12 = _closure1_slot10;
            var11 = _closure1_slot11;
            var10 = _closure1_slot12;
            var9 = _closure1_slot13;
            var15 = var8;
            var1 = var15[var7](var14, var13, var12, var11, var10, var9, var8);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(4);
        var1[0] = var5;
        var5 = {};
        var7 = 'shouldShowWarning';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot18;
            var1 = !var1;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'canUseVoiceActivity';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot16;
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'canUseLatching';
        var5['key'] = var7;
        var6 = function value() {
            var1 = _closure1_slot17;
            return var1;
        };
        var5['value'] = var6;
        var1[3] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'PermissionVADStore';
    var8['displayName'] = var2;
    var2 = 13;
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
case 0:
                var1 = arg1;
                var3 = var1.userId;
                var4 = _closure1_slot8;
                var1 = var4.getId;
                var1 = var1.bind(var4)();
                var1 = var3 === var1;
                if(!var1) { _fun0004_ip = 38; continue _fun0004 }
case 39:
                var3 = _closure1_slot20;
                var2 = undefined;
                var1 = var3.bind(var2)();
case 38:
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['VOICE_STATE_UPDATES'] = var9;
    var9 = function handleUnclearWarning() {
        var1 = _closure1_slot16;
        _closure1_slot18 = var1;
        var1 = undefined;
        return var1;
    };
    var2['AUDIO_TOGGLE_SELF_MUTE'] = var9;
    var4 = function handleClearWarning() {
        var1 = true;
        _closure1_slot18 = var1;
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
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'stores/PermissionVADStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();