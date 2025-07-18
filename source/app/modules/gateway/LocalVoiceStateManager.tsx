// app/modules/gateway/LocalVoiceStateManager.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
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
            _closure1_slot17 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot17 = var1;
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot13 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.ApplicationStreamStates;
    var _closure1_slot14 = var8;
    var8 = var4.ChannelTypes;
    var _closure1_slot15 = var8;
    var4 = var4.VoiceFlags;
    var _closure1_slot16 = var4;
    var4 = 17;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var4 = function LocalVoiceStateManager(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var4 = this;
                var1 = _closure1_slot3;
                var2 = _closure2_slot0;
                var3 = undefined;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot6;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot17;
                var1 = var1.bind(var3)();
                if(var1) { _fun0002_ip = 62; continue _fun0002 }
 49:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var4, var3);
                _fun0002_ip = 100; continue _fun0002;
 62:
                var6 = global;
                var8 = var6.Reflect;
                var7 = var8.construct;
                var5 = _closure1_slot6;
                var5 = var5.bind(var3)(var4);
                var6 = var5.constructor;
                var5 = new Array(0);
                var1 = var7.bind(var8)(var9, var5, var6);
 100:
                var1 = var2.bind(var3)(var4, var1);
                var2 = arg1;
                var1['socket'] = var2;
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
        var1 = 'guildId';
        var5['key'] = var1;
        var1 = function get() {
            var2 = this;
            var1 = var2.getState;
            var1 = var1.bind(var2)();
            var1 = var1.guildId;
            return var1;
        };
        var5['get'] = var1;
        var1 = new Array(7);
        var1[0] = var5;
        var5 = {};
        var7 = 'channelId';
        var5['key'] = var7;
        var7 = function get() {
            var2 = this;
            var1 = var2.getState;
            var1 = var1.bind(var2)();
            var1 = var1.channelId;
            return var1;
        };
        var5['get'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'computeVoiceFlags';
        var5['key'] = var7;
        var7 = function value() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 12;
                var2 = var5[var2];
                var6 = undefined;
                var2 = var4.bind(var6)(var2);
                var3 = var2.ClipsAllowVoiceRecording;
                var2 = var3.getSetting;
                var10 = var2.bind(var3)();
                var7 = 13;
                var2 = var5[var7];
                var9 = var4.bind(var6)(var2);
                var8 = var9.setFlag;
                var2 = _closure1_slot16;
                var3 = var2.ALLOW_VOICE_RECORDING;
                var2 = 0;
                var9 = var8.bind(var9)(var2, var3, var10);
                var3 = _closure1_slot1;
                var2 = 14;
                var2 = var5[var2];
                var3 = var3.bind(var6)(var2);
                var2 = _closure1_slot12;
                var2 = var3.bind(var6)(var2);
                var3 = 15;
                var3 = var5[var3];
                var4 = var4.bind(var6)(var3);
                var3 = var4.areClipsEnabled;
                var8 = var3.bind(var4)();
                if(!var8) { _fun0003_ip = 148; continue _fun0003 }
 128:
                var4 = _closure1_slot8;
                var3 = var4.getSettings;
                var3 = var3.bind(var4)();
                var8 = var3.clipsEnabled;
 148:
                if(!var8) { _fun0003_ip = 243; continue _fun0003 }
 151:
                var4 = _closure1_slot10;
                var3 = var4.getCurrentUserActiveStream;
                var3 = var3.bind(var4)();
                var5 = null;
                var10 = var5 == var3;
                var4 = undefined;
                if(var10) { _fun0003_ip = 181; continue _fun0003 }
 176:
                var4 = var3.state;
 181:
                var3 = _closure1_slot14;
                var3 = var3.ACTIVE;
                var3 = var4 === var3;
                if(var3) { _fun0003_ip = 240; continue _fun0003 }
 198:
                var10 = _closure1_slot10;
                var4 = var10.getCurrentUserActiveStream;
                var4 = var4.bind(var10)();
                var10 = var5 == var4;
                var5 = undefined;
                if(var10) { _fun0003_ip = 226; continue _fun0003 }
 221:
                var5 = var4.state;
 226:
                var4 = _closure1_slot14;
                var4 = var4.PAUSED;
                var3 = var5 === var4;
 240:
                var8 = var3;
 243:
                var4 = _closure1_slot8;
                var3 = var4.isDecoupledGameClippingEnabled;
                var3 = var3.bind(var4)();
                var10 = var2;
                if(!var2) { _fun0003_ip = 283; continue _fun0003 }
 263:
                var5 = _closure1_slot8;
                var4 = var5.getSettings;
                var4 = var4.bind(var5)();
                var10 = var4.decoupledClipsEnabled;
 283:
                if(!var10) { _fun0003_ip = 321; continue _fun0003 }
 286:
                var5 = _closure1_slot9;
                var4 = var5.getVisibleGame;
                var11 = var4.bind(var5)();
                var5 = null;
                var12 = var5 == var11;
                var4 = undefined;
                if(var12) { _fun0003_ip = 317; continue _fun0003 }
 311:
                var4 = var11.windowHandle;
 317:
                var10 = var5 != var4;
 321:
                if(!var10) { _fun0003_ip = 327; continue _fun0003 }
 324:
                var10 = var3;
 327:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var7];
                var5 = var4.bind(var6)(var3);
                var4 = var5.setFlag;
                var3 = _closure1_slot16;
                var3 = var3.CLIPS_ENABLED;
                if(var8) { _fun0003_ip = 366; continue _fun0003 }
 363:
                var8 = var10;
 366:
                var5 = var4.bind(var5)(var9, var3, var8);
                var4 = _closure1_slot1;
                var8 = _closure1_slot2;
                var3 = 16;
                var3 = var8[var3];
                var9 = var4.bind(var6)(var3);
                var8 = var9.getCurrentConfig;
                var4 = {};
                var3 = 'computeVoiceFlags';
                var4['location'] = var3;
                var3 = {};
                var10 = false;
                var3['autoTrackExposure'] = var10;
                var3 = var8.bind(var9)(var4, var3);
                var4 = var3.enableViewerClipping;
                if(!var4) { _fun0003_ip = 438; continue _fun0003 }
 435:
                var4 = var2;
 438:
                if(!var4) { _fun0003_ip = 461; continue _fun0003 }
 441:
                var3 = _closure1_slot8;
                var2 = var3.getSettings;
                var2 = var2.bind(var3)();
                var4 = var2.viewerClipsEnabled;
 461:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.setFlag;
                var1 = _closure1_slot16;
                var1 = var1.ALLOW_ANY_VIEWER_CLIPS;
                var1 = var2.bind(var3)(var5, var1, var4);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getInitialState';
        var5['key'] = var7;
        var7 = function value() {
            var1 = {'guildId': null, 'channelId': null, 'selfMute': null, 'selfDeaf': null, 'selfVideo': null, 'preferredRegion': null, 'preferredRegions': null, 'videoStreamParameters': null, 'flags': 0};
            var3 = _closure1_slot12;
            var2 = var3.isSelfMute;
            var2 = var2.bind(var3)();
            var1['selfMute'] = var2;
            var2 = var3.isSelfDeaf;
            var2 = var2.bind(var3)();
            var1['selfDeaf'] = var2;
            var2 = var3.isVideoEnabled;
            var2 = var2.bind(var3)();
            var1['selfVideo'] = var2;
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getNextState';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var1 = arg1;
            var3 = this;
            var4 = var1.guildId;
            var2 = var1.channelId;
            var1 = {};
            var1['guildId'] = var4;
            var1['channelId'] = var2;
            var4 = _closure1_slot12;
            var5 = var4.isSelfMute;
            var5 = var5.bind(var4)();
            var1['selfMute'] = var5;
            var5 = var4.isSelfDeaf;
            var5 = var5.bind(var4)();
            var1['selfDeaf'] = var5;
            var5 = var4.isVideoEnabled;
            var5 = var5.bind(var4)();
            var1['selfVideo'] = var5;
            var5 = _closure1_slot13;
            var2 = var5.getPreferredRegion;
            var2 = var2.bind(var5)();
            var1['preferredRegion'] = var2;
            var2 = var5.getPreferredRegions;
            var2 = var2.bind(var5)();
            var1['preferredRegions'] = var2;
            var2 = var4.getVideoStreamParameters;
            var2 = var2.bind(var4)();
            var1['videoStreamParameters'] = var2;
            var2 = var3.computeVoiceFlags;
            var2 = var2.bind(var3)();
            var1['flags'] = var2;
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'shouldCommit';
        var5['key'] = var7;
        var7 = function value() {
            var1 = this;
            var2 = var1.socket;
            var1 = var2.isSessionEstablished;
            var1 = var1.bind(var2)();
            return var1;
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'didCommit';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var1 = arg1;
                var2 = this;
                var13 = var1.guildId;
                var12 = var1.channelId;
                var11 = var1.selfMute;
                var10 = var1.selfDeaf;
                var9 = var1.selfVideo;
                var8 = var1.preferredRegion;
                var7 = var1.preferredRegions;
                var6 = var1.videoStreamParameters;
                var5 = var1.flags;
                var1 = undefined;
                if(!(var5 === var1)) { _fun0004_ip = 65; continue _fun0004 }
 63:
                var5 = 0;
 65:
                if(!var9) { _fun0004_ip = 115; continue _fun0004 }
 68:
                var14 = _closure1_slot11;
                var4 = var14.getChannel;
                var14 = var4.bind(var14)(var12);
                var4 = null;
                var15 = var4 == var14;
                var4 = undefined;
                if(var15) { _fun0004_ip = 101; continue _fun0004 }
 96:
                var4 = var14.type;
 101:
                var3 = _closure1_slot15;
                var3 = var3.GUILD_STAGE_VOICE;
                if(!(var4 !== var3)) { _fun0004_ip = 173; continue _fun0004 }
 115:
                var14 = var2.socket;
                var4 = var14.voiceStateUpdate;
                var3 = {};
                var3['guildId'] = var13;
                var3['channelId'] = var12;
                var3['selfMute'] = var11;
                var3['selfDeaf'] = var10;
                var3['selfVideo'] = var9;
                var3['preferredRegion'] = var8;
                var3['preferredRegions'] = var7;
                var3['flags'] = var5;
                var3 = var4.bind(var14)(var3);
                _fun0004_ip = 234; continue _fun0004;
 173:
                var4 = var2.socket;
                var3 = var4.voiceStateUpdate;
                var2 = {};
                var2['guildId'] = var13;
                var2['channelId'] = var12;
                var2['selfMute'] = var11;
                var2['selfDeaf'] = var10;
                var2['selfVideo'] = var9;
                var2['preferredRegion'] = var8;
                var2['preferredRegions'] = var7;
                var2['videoStreamParameters'] = var6;
                var2['flags'] = var5;
                var2 = var3.bind(var4)(var2);
 234:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[6] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = 18;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/gateway/LocalVoiceStateManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();