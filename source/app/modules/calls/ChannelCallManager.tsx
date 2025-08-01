// app/modules/calls/ChannelCallManager.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
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
            _closure1_slot19 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot19 = var1;
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
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 6;
    var4 = var6[var4];
    var8 = var7.bind(var1)(var4);
    var4 = 7;
    var4 = var6[var4];
    var9 = var7.bind(var1)(var4);
    var _closure1_slot8 = var9;
    var4 = 8;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var4 = 12;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot13 = var4;
    var4 = 13;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot14 = var4;
    var4 = 14;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot15 = var4;
    var4 = 15;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot16 = var4;
    var4 = 16;
    var4 = var6[var4];
    var11 = var5.bind(var1)(var4);
    var10 = var11.createSoundForPack;
    var4 = var9.getSoundpack;
    var9 = var4.bind(var9)();
    var4 = 'call_calling';
    var4 = var10.bind(var11)(var4, var9);
    var _closure1_slot17 = var4;
    var4 = 'outboundRingingGuildUserIds';
    var4 = var8.bind(var1)(var4);
    var _closure1_slot18 = var4;
    var4 = 17;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var4 = function ChannelCallManager(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var6 = this;
                var14 = 0;
                var1 = copyRestArgs(var14);
                var8 = _closure1_slot2;
                var4 = _closure2_slot0;
                var5 = undefined;
                var8 = var8.bind(var5)(var6, var4);
                var11 = new Array(0);
                var14 = var11;
                var13 = var1;
                var12 = 0;
                var1 = arraySpread(var14, var13, var12);
                var1 = _closure1_slot5;
                var10 = var1.bind(var5)(var4);
                var4 = _closure1_slot4;
                var1 = _closure1_slot19;
                var1 = var1.bind(var5)();
                if(var1) { _fun0002_ip = 86; continue _fun0002 }
 73:
                var1 = var10.apply;
                var1 = var1.bind(var10)(var6, var11);
                _fun0002_ip = 120; continue _fun0002;
 86:
                var7 = global;
                var9 = var7.Reflect;
                var8 = var9.construct;
                var7 = _closure1_slot5;
                var7 = var7.bind(var5)(var6);
                var7 = var7.constructor;
                var1 = var8.bind(var9)(var10, var11, var7);
 120:
                var1 = var4.bind(var5)(var6, var1);
                var _closure3_slot0 = var1;
                var7 = global;
                var6 = var7.Object;
                var5 = var6.defineProperty;
                var4 = _closure1_slot18;
                var3 = {};
                var8 = true;
                var3['writable'] = var8;
                var7 = var7.Set;
                var8 = var7.prototype;
                var8 = Object.create(var8, {constructor: {value: var7}});
                var15 = var8;
                var7 = new var15[var7](var14);
                var7 = var7 instanceof Object ? var7 : var8;
                var3['value'] = var7;
                var3 = var5.bind(var6)(var1, var4, var3);
                var3 = {};
                var4 = function GUILD_LOCAL_RING_START(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.handleGuildRingStart;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var3['GUILD_LOCAL_RING_START'] = var4;
                var4 = function GUILD_RING_STOP(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.handleGuildRingStop;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var3['GUILD_RING_STOP'] = var4;
                var1['actions'] = var3;
                var3 = function(arg1, arg2) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var4 = _closure1_slot14;
                        var3 = var4.getCurrentClientVoiceChannelId;
                        var2 = arg2;
                        var4 = var3.bind(var4)(var2);
                        var3 = null;
                        var2 = var3 != var4;
                        if(!var2) { _fun0003_ip = 52; continue _fun0003 }
 30:
                        var6 = _closure1_slot15;
                        var5 = var6.countVoiceStatesForChannel;
                        var6 = var5.bind(var6)(var4);
                        var5 = 2;
                        var2 = var6 >= var5;
 52:
                        if(!(var3 != var4)) { _fun0003_ip = 116; continue _fun0003 }
 56:
                        if(var2) { _fun0003_ip = 116; continue _fun0003 }
 59:
                        var2 = arg1;
                        if(!var2) { _fun0003_ip = 116; continue _fun0003 }
 65:
                        var4 = _closure1_slot11;
                        var3 = var4.isSoundDisabled;
                        var2 = 'call_calling';
                        var2 = var3.bind(var4)(var2);
                        if(var2) { _fun0003_ip = 116; continue _fun0003 }
 87:
                        var2 = _closure1_slot13;
                        var2 = var2.disableSounds;
                        if(var2) { _fun0003_ip = 116; continue _fun0003 }
 100:
                        var3 = _closure1_slot17;
                        var2 = var3.loop;
                        var2 = var2.bind(var3)();
                        _fun0003_ip = 130; continue _fun0003;
 116:
                        var2 = _closure1_slot17;
                        var1 = var2.stop;
                        var1 = var1.bind(var2)();
 130:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['_handleRing'] = var3;
                var3 = function() {
                    var2 = _closure1_slot17;
                    var1 = var2.stop;
                    var1 = var1.bind(var2)();
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 16;
                    var2 = var2[var1];
                    var1 = undefined;
                    var6 = var4.bind(var1)(var2);
                    var5 = var6.createSoundForPack;
                    var4 = _closure1_slot8;
                    var2 = var4.getSoundpack;
                    var4 = var2.bind(var4)();
                    var2 = 'call_calling';
                    var2 = var5.bind(var6)(var2, var4);
                    _closure1_slot17 = var2;
                    return var1;
                };
                var1['handleSoundpackUpdate'] = var3;
                var3 = function() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                        var2 = _closure1_slot12;
                        var1 = var2.getVoiceChannelId;
                        var3 = var1.bind(var2)();
                        var2 = _closure1_slot10;
                        var1 = var2.getChannel;
                        var3 = var1.bind(var2)(var3);
                        var5 = null;
                        var4 = var5 == var3;
                        var1 = undefined;
                        var2 = undefined;
                        if(var4) { _fun0004_ip = 49; continue _fun0004 }
 44:
                        var2 = var3.guild_id;
 49:
                        var3 = var5 != var2;
                        var5 = null;
                        if(!var3) { _fun0004_ip = 61; continue _fun0004 }
 58:
                        var5 = var2;
 61:
                        var3 = _closure1_slot9;
                        var2 = var3.getCalls;
                        var4 = var2.bind(var3)();
                        var3 = var4.some;
                        var2 = function(arg1) {
                            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                                var2 = arg1;
                                var1 = var2.ringing;
                                var3 = var1.length;
                                var1 = 0;
                                var1 = var3 > var1;
                                if(!var1) { _fun0005_ip = 52; continue _fun0005 }
 23:
                                var5 = _closure1_slot14;
                                var4 = var5.getCurrentClientVoiceChannelId;
                                var3 = null;
                                var3 = var4.bind(var5)(var3);
                                var2 = var2.channelId;
                                var1 = var3 === var2;
 52:
                                return var1;
                            }
                        };
                        var2 = var3.bind(var4)(var2);
                        var4 = _closure3_slot0;
                        var3 = var4._handleRing;
                        if(var2) { _fun0004_ip = 146; continue _fun0004 }
 113:
                        var8 = _closure1_slot7;
                        var6 = _closure3_slot0;
                        var7 = _closure1_slot18;
                        var6 = var8.bind(var1)(var6, var7);
                        var6 = var6[var7];
                        var7 = var6.size;
                        var6 = 0;
                        var2 = var7 > var6;
 146:
                        var2 = var3.bind(var4)(var2, var5);
                        return var1;
                    }
                };
                var1['handleRingUpdate'] = var3;
                var3 = function(arg1) {
                    var1 = arg1;
                    var3 = var1.ringing;
                    var5 = var1.guildId;
                    var2 = var3.forEach;
                    var1 = function(arg1) {
                        var4 = _closure1_slot7;
                        var2 = _closure3_slot0;
                        var3 = _closure1_slot18;
                        var1 = undefined;
                        var2 = var4.bind(var1)(var2, var3);
                        var4 = var2[var3];
                        var3 = var4.add;
                        var2 = arg1;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
                    var4 = _closure3_slot0;
                    var3 = var4._handleRing;
                    var2 = _closure1_slot7;
                    var6 = _closure1_slot18;
                    var1 = undefined;
                    var2 = var2.bind(var1)(var4, var6);
                    var2 = var2[var6];
                    var6 = var2.size;
                    var2 = 0;
                    var2 = var6 > var2;
                    var2 = var3.bind(var4)(var2, var5);
                    return var1;
                };
                var1['handleGuildRingStart'] = var3;
                var3 = function(arg1) {
                    var1 = arg1;
                    var3 = var1.ringing;
                    var5 = var1.guildId;
                    var2 = var3.forEach;
                    var1 = function(arg1) {
                        var4 = _closure1_slot7;
                        var2 = _closure3_slot0;
                        var3 = _closure1_slot18;
                        var1 = undefined;
                        var2 = var4.bind(var1)(var2, var3);
                        var4 = var2[var3];
                        var3 = var4.delete;
                        var2 = arg1;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
                    var4 = _closure3_slot0;
                    var3 = var4._handleRing;
                    var2 = _closure1_slot7;
                    var6 = _closure1_slot18;
                    var1 = undefined;
                    var2 = var2.bind(var1)(var4, var6);
                    var2 = var2[var6];
                    var6 = var2.size;
                    var2 = 0;
                    var2 = var6 > var2;
                    var2 = var3.bind(var4)(var2, var5);
                    return var1;
                };
                var1['handleGuildRingStop'] = var3;
                var2 = function() {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                        var4 = _closure1_slot12;
                        var3 = var4.getVoiceChannelId;
                        var9 = var3.bind(var4)();
                        var6 = _closure1_slot7;
                        var4 = _closure3_slot0;
                        var5 = _closure1_slot18;
                        var7 = undefined;
                        var4 = var6.bind(var7)(var4, var5);
                        var4 = var4[var5];
                        var4 = var4.size;
                        var5 = 0;
                        var6 = var4 > var5;
                        if(!var6) { _fun0006_ip = 250; continue _fun0006 }
 63:
                        var4 = null;
                        if(!(var4 == var9)) { _fun0006_ip = 75; continue _fun0006 }
 69:
                        if(var6) { _fun0006_ip = 252; continue _fun0006 }
 75:
                        if(!(var4 != var9)) { _fun0006_ip = 250; continue _fun0006 }
 82:
                        var8 = _closure1_slot16;
                        var6 = var8.getGuildRingingUsers;
                        var6 = var6.bind(var8)(var9);
                        var _closure4_slot0 = var6;
                        var6 = global;
                        var9 = var6.Set;
                        var10 = _closure1_slot7;
                        var6 = _closure3_slot0;
                        var8 = _closure1_slot18;
                        var6 = var10.bind(var7)(var6, var8);
                        var12 = var6[var8];
                        var10 = new Array(0);
                        var13 = var10;
                        var11 = 0;
                        var6 = arraySpread(var13, var12, var11);
                        var8 = var10.filter;
                        var6 = function(arg1) {
                            var3 = _closure4_slot0;
                            var2 = var3.has;
                            var1 = arg1;
                            var1 = var2.bind(var3)(var1);
                            var1 = !var1;
                            return var1;
                        };
                        var13 = var8.bind(var10)(var6);
                        var8 = var9.prototype;
                        var8 = Object.create(var8, {constructor: {value: var9}});
                        var14 = var8;
                        var6 = new var14[var9](var13, var12);
                        var8 = var6 instanceof Object ? var6 : var8;
                        var6 = var8.size;
                        if(!(var6 > var5)) { _fun0006_ip = 250; continue _fun0006 }
 190:
                        var6 = var8.forEach;
                        var1 = function(arg1) {
                            var4 = _closure1_slot7;
                            var2 = _closure3_slot0;
                            var3 = _closure1_slot18;
                            var1 = undefined;
                            var2 = var4.bind(var1)(var2, var3);
                            var4 = var2[var3];
                            var3 = var4.delete;
                            var2 = arg1;
                            var2 = var3.bind(var4)(var2);
                            return var1;
                        };
                        var1 = var6.bind(var8)(var1);
                        var8 = _closure3_slot0;
                        var6 = var8._handleRing;
                        var1 = _closure1_slot7;
                        var9 = _closure1_slot18;
                        var1 = var1.bind(var7)(var8, var9);
                        var1 = var1[var9];
                        var1 = var1.size;
                        var1 = var1 > var5;
                        var1 = var6.bind(var8)(var1, var4);
 250:
                        return var7;
 252:
                        var1 = _closure1_slot7;
                        var3 = _closure3_slot0;
                        var6 = _closure1_slot18;
                        var8 = var1.bind(var7)(var3, var6);
                        var2 = global;
                        var2 = var2.Set;
                        var9 = var2.prototype;
                        var9 = Object.create(var9, {constructor: {value: var2}});
                        var14 = var9;
                        var2 = new var14[var2](var13);
                        var2 = var2 instanceof Object ? var2 : var9;
                        var8[var6] = var2;
                        var2 = var3._handleRing;
                        var1 = var1.bind(var7)(var3, var6);
                        var1 = var1[var6];
                        var1 = var1.size;
                        var1 = var1 > var5;
                        var1 = var2.bind(var3)(var1, var4);
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleChannelRTCStoreChange'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var6 = _closure1_slot6;
        var3 = undefined;
        var5 = arg1;
        var5 = var6.bind(var3)(var4, var5);
        var2 = _closure1_slot3;
        var5 = {};
        var6 = '_initialize';
        var5['key'] = var6;
        var1 = function value() {
            var2 = this;
            var1 = global;
            var1 = var1.Map;
            var3 = var1.prototype;
            var3 = Object.create(var3, {constructor: {value: var1}});
            var9 = var3;
            var1 = new var9[var1](var8);
            var6 = var1 instanceof Object ? var1 : var3;
            var5 = var6.set;
            var4 = _closure1_slot9;
            var3 = var2.handleRingUpdate;
            var6 = var5.bind(var6)(var4, var3);
            var5 = var6.set;
            var4 = _closure1_slot11;
            var3 = var2.handleRingUpdate;
            var6 = var5.bind(var6)(var4, var3);
            var5 = var6.set;
            var4 = _closure1_slot13;
            var3 = var2.handleRingUpdate;
            var6 = var5.bind(var6)(var4, var3);
            var5 = var6.set;
            var4 = _closure1_slot14;
            var3 = var2.handleRingUpdate;
            var6 = var5.bind(var6)(var4, var3);
            var5 = var6.set;
            var4 = _closure1_slot16;
            var3 = var2.handleChannelRTCStoreChange;
            var5 = var5.bind(var6)(var4, var3);
            var4 = var5.set;
            var3 = _closure1_slot8;
            var1 = var2.handleSoundpackUpdate;
            var1 = var4.bind(var5)(var3, var1);
            var2['stores'] = var1;
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(1);
        var1[0] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var15 = var4;
    var2 = new var15[var2](var14);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 18;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/calls/ChannelCallManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();