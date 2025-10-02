// app/modules/age_gate/native/AgeGateManager.tsx
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
case 0:
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
                if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var1 = var8.apply;
                var1 = var1.bind(var8)(var4, var9);
                _fun0002_ip = 8; continue _fun0002;
case 6:
                var6 = global;
                var7 = var6.Reflect;
                var6 = var7.construct;
                var5 = _closure1_slot7;
                var5 = var5.bind(var3)(var4);
                var5 = var5.constructor;
                var1 = var6.bind(var7)(var8, var9, var5);
case 8:
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
            var3 = _closure1_slot11;
            var2 = var3.getGuildId;
            var5 = var2.bind(var3)();
            var3 = _closure1_slot10;
            var2 = var3.getChannelId;
            var4 = var2.bind(var3)();
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 11;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.maybeShowAgeGate;
            var2 = var2.bind(var3)(var5, var4);
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(5);
        var1[0] = var5;
        var5 = {};
        var7 = 'handleChannelSelect';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var1 = arg1;
                var4 = var1.guildId;
                var3 = var1.channelId;
                var5 = _closure1_slot9;
                var2 = var5.getChannel;
                var5 = var2.bind(var5)(var3);
                var6 = null;
                var2 = var6 != var4;
                if(!var2) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                var7 = var6 == var5;
                var6 = undefined;
                if(var7) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                var6 = var5.type;
case 11:
                var5 = _closure1_slot14;
                var5 = var5.GUILD_VOICE;
                var2 = var6 !== var5;
case 9:
                if(!var2) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 11;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var5.bind(var1)(var2);
                var1 = var2.maybeShowAgeGate;
                var1 = var1.bind(var2)(var4, var3);
case 13:
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
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0004_ip = 15; continue _fun0004 }
case 16:
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
case 17:
                        return var2;
case 18:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(var3) { _fun0004_ip = 19; continue _fun0004 }
case 20:
                        var3 = var2.default;
                        var6 = _closure3_slot0;
                        var4 = _closure1_slot13;
                        var4 = var4.AUTH;
                        if(!(var6 === var4)) { _fun0004_ip = 21; continue _fun0004 }
case 22:
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
case 21:
                        return var3;
case 19:
                        return var2;
case 15:
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
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var1 = arg1;
                var1 = var1.guild;
                var4 = _closure1_slot11;
                var3 = var4.getGuildId;
                var6 = var3.bind(var4)();
                var4 = null;
                var3 = var4 != var6;
                if(!var3) { _fun0005_ip = 23; continue _fun0005 }
case 24:
                var5 = var1.id;
                var3 = var5 === var6;
case 23:
                if(!var3) { _fun0005_ip = 25; continue _fun0005 }
case 26:
                var6 = var1.owner_configured_content_level;
                var5 = _closure1_slot15;
                var5 = var5.AGE_RESTRICTED;
                var3 = var6 === var5;
case 25:
                if(!var3) { _fun0005_ip = 27; continue _fun0005 }
case 28:
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 11;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var5.bind(var2)(var3);
                var2 = var3.maybeShowAgeGate;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1, var4);
case 27:
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