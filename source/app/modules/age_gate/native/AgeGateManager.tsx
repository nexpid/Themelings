// app/modules/age_gate/native/AgeGateManager.tsx
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
            _closure1_slot16 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot16 = var1;
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
    var8 = var4.EXISTING_USER_AGE_GATE_MODAL_KEY;
    var _closure1_slot12 = var8;
    var4 = var4.AgeGateSource;
    var _closure1_slot13 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.ChannelTypes;
    var _closure1_slot14 = var8;
    var4 = var4.GuildNSFWContentLevel;
    var _closure1_slot15 = var4;
    var4 = 16;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var4 = function AgeGateManager(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var4 = this;
                var12 = 0;
                var1 = copyRestArgs(var12);
                var7 = _closure1_slot4;
                var2 = _closure2_slot0;
                var3 = undefined;
                var7 = var7.bind(var3)(var4, var2);
                var9 = new Array(0);
                var12 = var9;
                var11 = var1;
                var10 = 0;
                var1 = arraySpread(var12, var11, var10);
                var1 = _closure1_slot7;
                var8 = var1.bind(var3)(var2);
                var2 = _closure1_slot6;
                var1 = _closure1_slot16;
                var1 = var1.bind(var3)();
                if(var1) { _fun0002_ip = 84; continue _fun0002 }
 71:
                var1 = var8.apply;
                var1 = var1.bind(var8)(var4, var9);
                _fun0002_ip = 118; continue _fun0002;
 84:
                var6 = global;
                var7 = var6.Reflect;
                var6 = var7.construct;
                var5 = _closure1_slot7;
                var5 = var5.bind(var3)(var4);
                var5 = var5.constructor;
                var1 = var6.bind(var7)(var8, var9, var5);
 118:
                var1 = var2.bind(var3)(var4, var1);
                var2 = {};
                var3 = var1.handlePostConnectionOpen;
                var2['POST_CONNECTION_OPEN'] = var3;
                var3 = var1.handleChannelSelect;
                var2['CHANNEL_SELECT'] = var3;
                var3 = var1.handleAgeGateModalOpen;
                var2['AGE_GATE_MODAL_OPEN'] = var3;
                var3 = var1.handleAgeGateModalClose;
                var2['AGE_GATE_MODAL_CLOSE'] = var3;
                var3 = var1.handleGuildUpdate;
                var2['GUILD_UPDATE'] = var3;
                var1['actions'] = var2;
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
        var1 = 'handlePostConnectionOpen';
        var5['key'] = var1;
        var1 = function value() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var3 = _closure1_slot11;
                var1 = var3.getGuildId;
                var5 = var1.bind(var3)();
                var3 = _closure1_slot10;
                var1 = var3.getChannelId;
                var4 = var1.bind(var3)();
                var7 = _closure1_slot0;
                var1 = _closure1_slot2;
                var6 = 11;
                var3 = var1[var6];
                var1 = undefined;
                var7 = var7.bind(var1)(var3);
                var3 = var7.isCurrentUserMissingDateOfBirth;
                var3 = var3.bind(var7)();
                if(!var3) { _fun0003_ip = 95; continue _fun0003 }
 66:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var3 = var3.bind(var1)(var2);
                var2 = var3.maybeShowAgeGate;
                var2 = var2.bind(var3)(var5, var4);
 95:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(5);
        var1[0] = var5;
        var5 = {};
        var7 = 'handleChannelSelect';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var1 = arg1;
                var5 = var1.guildId;
                var4 = var1.channelId;
                var3 = _closure1_slot9;
                var2 = var3.getChannel;
                var3 = var2.bind(var3)(var4);
                var6 = null;
                var2 = var6 != var5;
                if(!var2) { _fun0004_ip = 67; continue _fun0004 }
 39:
                var7 = var6 == var3;
                var6 = undefined;
                if(var7) { _fun0004_ip = 53; continue _fun0004 }
 48:
                var6 = var3.type;
 53:
                var3 = _closure1_slot14;
                var3 = var3.GUILD_VOICE;
                var2 = var6 !== var3;
 67:
                if(!var2) { _fun0004_ip = 102; continue _fun0004 }
 70:
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 11;
                var6 = var6[var3];
                var3 = undefined;
                var6 = var7.bind(var3)(var6);
                var3 = var6.isCurrentUserMissingDateOfBirth;
                var2 = var3.bind(var6)();
 102:
                if(!var2) { _fun0004_ip = 150; continue _fun0004 }
 105:
                var6 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 11;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var6.bind(var2)(var3);
                var2 = var3.maybeShowAgeGate;
                var1 = _closure1_slot13;
                var1 = var1.NSFW_CHANNEL;
                var1 = var2.bind(var3)(var5, var4, var1);
 150:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'handleAgeGateModalOpen';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var1 = arg1;
            var7 = var1.source;
            var _closure3_slot0 = var7;
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 12;
            var4 = var4[var1];
            var1 = undefined;
            var6 = var5.bind(var1)(var4);
            var5 = var6.pushLazy;
            var4 = _closure1_slot3;
            var3 = function* () {
                var1 = function* anon_0_() {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0005_ip = 140; continue _fun0005 }
 10:
                        var4 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var3 = 14;
                        var3 = var2[var3];
                        var7 = undefined;
                        var4 = var4.bind(var7)(var3);
                        var3 = 13;
                        var3 = var2[var3];
                        var2 = var2.paths;
                        var2 = var4.bind(var7)(var3, var2);
                        SaveGenerator(address=57);
 55:
                        return var2;
 57:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(var3) { _fun0005_ip = 137; continue _fun0005 }
 63:
                        var3 = var2.default;
                        var6 = _closure3_slot0;
                        var4 = _closure1_slot13;
                        var4 = var4.AUTH;
                        if(!(var6 === var4)) { _fun0005_ip = 134; continue _fun0005 }
 89:
                        var4 = {};
                        var6 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var5 = 15;
                        var5 = var8[var5];
                        var5 = var6.bind(var7)(var5);
                        var5 = var5.ModalAnimation;
                        var5 = var5.SLIDE_IN_OUT;
                        var4['animation'] = var5;
                        var3['modalConfig'] = var4;
 134:
                        return var3;
 137:
                        return var2;
 140:
                        return var1;
                    }
                };
                return var1;
            };
            var4 = var4.bind(var1)(var3);
            var3 = {};
            var3['source'] = var7;
            var2 = _closure1_slot12;
            var2 = var5.bind(var6)(var4, var3, var2);
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'handleAgeGateModalClose';
        var5['key'] = var7;
        var7 = function value() {
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 12;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.popWithKey;
            var2 = _closure1_slot12;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'handleGuildUpdate';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var1 = arg1;
                var1 = var1.guild;
                var4 = _closure1_slot11;
                var3 = var4.getGuildId;
                var6 = var3.bind(var4)();
                var4 = null;
                var3 = var4 != var6;
                if(!var3) { _fun0006_ip = 43; continue _fun0006 }
 34:
                var5 = var1.id;
                var3 = var5 === var6;
 43:
                if(!var3) { _fun0006_ip = 66; continue _fun0006 }
 46:
                var6 = var1.nsfw_level;
                var5 = _closure1_slot15;
                var5 = var5.AGE_RESTRICTED;
                var3 = var6 === var5;
 66:
                if(!var3) { _fun0006_ip = 108; continue _fun0006 }
 69:
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 11;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var5.bind(var2)(var3);
                var2 = var3.maybeShowAgeGate;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1, var4);
 108:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var6;
        var1[4] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var13 = var4;
    var2 = new var13[var2](var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 17;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/age_gate/native/AgeGateManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();