// app/modules/stage_channels/StageChannelNewUserManager.tsx
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
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.STAGE_AUDIENCE_NOTICE_SHOWN_STORAGE_KEY;
    var _closure1_slot12 = var4;
    var4 = 12;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var4 = function StageChannelNewUserManager(arg1) {
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
                var1 = _closure1_slot7;
                var9 = var1.bind(var4)(var3);
                var3 = _closure1_slot6;
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
                var6 = _closure1_slot7;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
 120:
                var1 = var3.bind(var4)(var5, var1);
                var _closure3_slot0 = var1;
                var2 = function(arg1) {
                    var1 = arg1;
                    var3 = var1.voiceStates;
                    var2 = var3.forEach;
                    var1 = function(arg1) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                            var6 = arg1;
                            var1 = var6.channelId;
                            var5 = null;
                            if(!(var5 != var1)) { _fun0003_ip = 240; continue _fun0003 }
 17:
                            var3 = var6.userId;
                            var4 = _closure1_slot9;
                            var2 = var4.getId;
                            var2 = var2.bind(var4)();
                            if(!(var3 === var2)) { _fun0003_ip = 240; continue _fun0003 }
 46:
                            var3 = _closure3_slot0;
                            var2 = var3.terminate;
                            var2 = var2.bind(var3)();
                            var7 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var2 = 9;
                            var3 = var3[var2];
                            var4 = undefined;
                            var3 = var7.bind(var4)(var3);
                            var9 = var3.Storage;
                            var8 = var9.get;
                            var7 = _closure1_slot12;
                            var3 = false;
                            var3 = var8.bind(var9)(var7, var3);
                            if(var3) { _fun0003_ip = 240; continue _fun0003 }
 114:
                            var7 = _closure1_slot10;
                            var3 = var7.getVoiceChannelId;
                            var3 = var3.bind(var7)();
                            var5 = var5 != var3;
                            if(!var5) { _fun0003_ip = 144; continue _fun0003 }
 135:
                            var7 = var6.channelId;
                            var5 = var7 === var3;
 144:
                            if(!var5) { _fun0003_ip = 170; continue _fun0003 }
 147:
                            var8 = _closure1_slot11;
                            var7 = var8.isAudienceMember;
                            var6 = var6.userId;
                            var5 = var7.bind(var8)(var6, var3);
 170:
                            if(!var5) { _fun0003_ip = 240; continue _fun0003 }
 173:
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot3;
                            var2 = var5[var2];
                            var2 = var6.bind(var4)(var2);
                            var8 = var2.Storage;
                            var7 = var8.set;
                            var6 = _closure1_slot12;
                            var2 = true;
                            var2 = var7.bind(var8)(var6, var2);
                            var2 = _closure1_slot2;
                            var1 = 10;
                            var1 = var5[var1];
                            var2 = var2.bind(var4)(var1);
                            var1 = var2.openStageChannelAudienceNoticeModal;
                            var1 = var1.bind(var2)(var3);
 240:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                };
                var1['handleVoiceStateUpdates'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot8;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot5;
        var5 = {};
        var1 = '_initialize';
        var5['key'] = var1;
        var1 = function value() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot3;
            var1 = 11;
            var2 = var2[var1];
            var1 = undefined;
            var5 = var3.bind(var1)(var2);
            var4 = var5.subscribe;
            var2 = this;
            var3 = var2.handleVoiceStateUpdates;
            var2 = 'VOICE_STATE_UPDATES';
            var2 = var4.bind(var5)(var2, var3);
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(2);
        var1[0] = var5;
        var5 = {};
        var7 = '_terminate';
        var5['key'] = var7;
        var6 = function value() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot3;
            var1 = 11;
            var2 = var2[var1];
            var1 = undefined;
            var5 = var3.bind(var1)(var2);
            var4 = var5.unsubscribe;
            var2 = this;
            var3 = var2.handleVoiceStateUpdates;
            var2 = 'VOICE_STATE_UPDATES';
            var2 = var4.bind(var5)(var2, var3);
            return var1;
        };
        var5['value'] = var6;
        var1[1] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var13 = var4;
    var2 = new var13[var2](var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/stage_channels/StageChannelNewUserManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();