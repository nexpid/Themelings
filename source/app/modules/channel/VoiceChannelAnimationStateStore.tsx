// app/modules/channel/VoiceChannelAnimationStateStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
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
            _closure1_slot13 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 6:
            if(var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var2 = var3["@@iterator"];
case 8:
            if(var2) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var7 = {};
            var9 = var7.toString;
            var7 = var9.call;
            var11 = var7.bind(var9)(var3);
            var10 = var11.slice;
            var9 = 8;
            var7 = -1;
            var9 = var10.bind(var11)(var9, var7);
            var7 = 'Object';
            var7 = var7 === var9;
            if(!var7) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var7 = var3.constructor;
case 18:
            var10 = var9;
            if(!var7) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var7 = var3.constructor;
            var10 = var7.name;
case 20:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0002_ip = 22; continue _fun0002 }
case 24:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0002_ip = 27; continue _fun0002 }
case 25:
            var9 = _closure1_slot15;
            var7 = var9.bind(var8)(var3, var8);
case 27:
            _fun0002_ip = 28; continue _fun0002;
case 22:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 28:
            var6 = var7;
            _fun0002_ip = 14; continue _fun0002;
case 16:
            var7 = _closure1_slot15;
            var6 = var7.bind(var8)(var3, var8);
case 14:
            var4 = var6;
            if(var4) { _fun0002_ip = 12; continue _fun0002 }
case 29:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 12:
            if(!var4) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            _closure2_slot0 = var4;
case 30:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0003_ip = 32; continue _fun0003 }
case 33:
                    var1 = {};
                    var2 = false;
                    var1['done'] = var2;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = parseFloat(var2);
                    var4 = var2 + 1;
                    _closure2_slot1 = var4;
                    var2 = var3[var2];
                    var1['value'] = var2;
                    _fun0003_ip = 34; continue _fun0003;
case 32:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 34:
                    return var1;
                }
            };
            return var1;
case 10:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0004_ip = 35; continue _fun0004 }
case 36:
            var2 = var4.length;
            var1 = var3 > var2;
case 35:
            var2 = undefined;
            if(!var1) { _fun0004_ip = 37; continue _fun0004 }
case 38:
            var2 = var4.length;
case 37:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0004_ip = 39; continue _fun0004 }
case 8:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0004_ip = 8; continue _fun0004 }
case 39:
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = function clearAnimationTimer(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = arg1;
            var3 = _closure1_slot10;
            var4 = var3[var2];
            var3 = null;
            if(!(var3 != var4)) { _fun0005_ip = 40; continue _fun0005 }
case 33:
            var3 = global;
            var5 = var3.clearTimeout;
            var3 = _closure1_slot10;
            var4 = var3[var2];
            var3 = undefined;
            var3 = var5.bind(var3)(var4);
            var1 = _closure1_slot10;
            var1 = delete var1[var2];
case 40:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = function scheduleTransitionToGentleAmbient(arg1) {
        var4 = arg1;
        var _closure2_slot0 = var4;
        var5 = _closure1_slot16;
        var1 = undefined;
        var5 = var5.bind(var1)(var4);
        var3 = _closure1_slot10;
        var5 = global;
        var6 = var5.setTimeout;
        var5 = function() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var4 = _closure1_slot9;
                var3 = _closure2_slot0;
                var6 = var4[var3];
                var3 = null;
                if(!(var3 != var6)) { _fun0006_ip = 41; continue _fun0006 }
case 42:
                var5 = _closure1_slot9;
                var4 = _closure2_slot0;
                var3 = {};
                var9 = var3;
                var8 = var6;
                var6 = copyDataProperties(var9, var8);
                var6 = _closure1_slot8;
                var7 = var6.GENTLE_AMBIENT;
                var6 = 'style';
                var3[var6] = var7;
                var5[var4] = var3;
                var4 = _closure1_slot12;
                var3 = var4.emitChange;
                var3 = var3.bind(var4)();
case 41:
                var2 = _closure1_slot10;
                var1 = _closure2_slot0;
                var1 = delete var2[var1];
                var1 = undefined;
                return var1;
            }
        };
        var2 = 2000;
        var2 = var6.bind(var1)(var5, var2);
        var3[var4] = var2;
        return var1;
    };
    var _closure1_slot17 = var1;
    var1 = function resetAllState() {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var6 = global;
            var4 = var6.Object;
            var2 = var4.keys;
            var1 = _closure1_slot10;
            var5 = var2.bind(var4)(var1);
            var1 = var5.length;
            var4 = 0;
            var2 = var4 < var1;
            var1 = undefined;
            if(!var2) { _fun0007_ip = 4; continue _fun0007 }
case 43:
            var8 = var5[var4];
            var7 = var6.clearTimeout;
            var2 = _closure1_slot10;
            var2 = var2[var8];
            var2 = var7.bind(var1)(var2);
            var4 = var4 + 1;
            var2 = var5.length;
            if(var4 < var2) { _fun0007_ip = 43; continue _fun0007 }
case 4:
            var2 = {};
            _closure1_slot10 = var2;
            var2 = {};
            _closure1_slot9 = var2;
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var1 = function updateChannelAnimationState(arg1, arg2) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var4 = arg1;
            var1 = _closure1_slot9;
            var8 = var1[var4];
            var1 = null;
            var5 = var1 == var8;
            var3 = undefined;
            var7 = undefined;
            if(var5) { _fun0008_ip = 37; continue _fun0008 }
case 44:
            var7 = var8.userCount;
case 37:
            var9 = var1 != var7;
            var6 = 0;
            var5 = 0;
            if(!var9) { _fun0008_ip = 45; continue _fun0008 }
case 46:
            var5 = var7;
case 45:
            var7 = global;
            var10 = var7.Math;
            var9 = var10.max;
            var7 = arg2;
            var7 = var5 + var7;
            var7 = var9.bind(var10)(var6, var7);
            if(!(var6 === var5)) { _fun0008_ip = 47; continue _fun0008 }
case 48:
            if(!(!(var7 > var6))) { _fun0008_ip = 49; continue _fun0008 }
case 47:
            if(!(var5 > var6)) { _fun0008_ip = 50; continue _fun0008 }
case 51:
            if(!(!(var7 > var5))) { _fun0008_ip = 52; continue _fun0008 }
case 50:
            if(!(var6 !== var7)) { _fun0008_ip = 53; continue _fun0008 }
case 15:
            var1 = var1 != var8;
            if(!var1) { _fun0008_ip = 54; continue _fun0008 }
case 55:
            var1 = var7 !== var5;
case 54:
            if(!var1) { _fun0008_ip = 56; continue _fun0008 }
case 17:
            var6 = _closure1_slot9;
            var5 = {};
            var12 = var5;
            var11 = var8;
            var8 = copyDataProperties(var12, var11);
            var8 = 'userCount';
            var5[var8] = var7;
            var6[var4] = var5;
            var1 = true;
case 56:
            _fun0008_ip = 57; continue _fun0008;
case 53:
            var5 = _closure1_slot16;
            var5 = var5.bind(var3)(var4);
            var5 = _closure1_slot9;
            var5 = delete var5[var4];
            var1 = true;
case 57:
            _fun0008_ip = 58; continue _fun0008;
case 52:
            var6 = _closure1_slot9;
            var5 = {};
            var8 = _closure1_slot8;
            var8 = var8.HIGH_CONTRAST;
            var5['style'] = var8;
            var5['userCount'] = var7;
            var6[var4] = var5;
            var5 = _closure1_slot17;
            var5 = var5.bind(var3)(var4);
            var1 = true;
case 58:
            _fun0008_ip = 59; continue _fun0008;
case 49:
            var6 = _closure1_slot9;
            var5 = {};
            var8 = _closure1_slot8;
            var8 = var8.GENTLE_AMBIENT_WITH_INTRO;
            var5['style'] = var8;
            var5['userCount'] = var7;
            var6[var4] = var5;
            var2 = _closure1_slot17;
            var2 = var2.bind(var3)(var4);
            var1 = true;
case 59:
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var7 = function handleConnectionOpenOrLogout() {
        var2 = _closure1_slot18;
        var1 = undefined;
        var1 = var2.bind(var1)();
        var1 = true;
        return var1;
    };
    var1 = global;
    var9 = var1.Object;
    var4 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var8.bind(var1)(var2);
    var _closure1_slot0 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot1 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 7;
    var2 = var6[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = {};
    var4 = 'GENTLE_AMBIENT';
    var2['GENTLE_AMBIENT'] = var4;
    var4 = 'GENTLE_AMBIENT_WITH_INTRO';
    var2['GENTLE_AMBIENT_WITH_INTRO'] = var4;
    var4 = 'HIGH_CONTRAST';
    var2['HIGH_CONTRAST'] = var4;
    var _closure1_slot8 = var2;
    var4 = {};
    var _closure1_slot9 = var4;
    var4 = {};
    var _closure1_slot10 = var4;
    var4 = null;
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var9 = var4.Store;
    var4 = function(arg1) {
        var4 = function VoiceChannelAnimationStateStoreClass() {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot0;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot3;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot2;
                var1 = _closure1_slot13;
                var1 = var1.bind(var3)();
                if(var1) { _fun0009_ip = 60; continue _fun0009 }
case 40:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0009_ip = 61; continue _fun0009;
case 60:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot3;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 61:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot4;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot1;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value() {
            var4 = this;
            var3 = var4.waitFor;
            var2 = _closure1_slot7;
            var1 = _closure1_slot6;
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'getAnimationStyle';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var3 = _closure1_slot9;
                var1 = arg1;
                var4 = var3[var1];
                var3 = null;
                var5 = var3 == var4;
                var1 = undefined;
                if(var5) { _fun0010_ip = 7; continue _fun0010 }
case 62:
                var1 = var4.style;
case 7:
                if(!(var3 == var1)) { _fun0010_ip = 46; continue _fun0010 }
case 63:
                var2 = _closure1_slot8;
                var1 = var2.GENTLE_AMBIENT;
case 46:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getUserCount';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var2 = _closure1_slot9;
                var1 = arg1;
                var3 = var2[var1];
                var1 = null;
                var4 = var1 == var3;
                var2 = undefined;
                if(var4) { _fun0011_ip = 64; continue _fun0011 }
case 62:
                var2 = var3.userCount;
case 64:
                var3 = var1 != var2;
                var1 = 0;
                if(!var3) { _fun0011_ip = 65; continue _fun0011 }
case 66:
                var1 = var2;
case 65:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var9 = var4.bind(var1)(var9);
    var4 = 'VoiceChannelAnimationStateStore';
    var9['displayName'] = var4;
    var4 = 9;
    var4 = var6[var4];
    var13 = var8.bind(var1)(var4);
    var4 = {};
    var10 = function handleVoiceStateUpdates(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var1 = arg1;
            var2 = var1.voiceStates;
            var3 = _closure1_slot6;
            var1 = var3.getGuildId;
            var12 = var1.bind(var3)();
            var1 = _closure1_slot11;
            var1 = var12 !== var1;
            if(!var1) { _fun0012_ip = 65; continue _fun0012 }
case 67:
            var3 = null;
            var1 = var3 != var12;
case 65:
            if(!var1) { _fun0012_ip = 68; continue _fun0012 }
case 6:
            _closure1_slot11 = var12;
case 68:
            var3 = {};
            var1 = _closure1_slot14;
            var10 = undefined;
            var7 = var1.bind(var10)(var2);
            var2 = var7.bind(var10)();
            var1 = var2.done;
            var9 = 1;
            var6 = null;
            var8 = 0;
            var5 = var2;
            var4 = undefined;
            var2 = undefined;
            if(var1) { _fun0012_ip = 69; continue _fun0012 }
case 50:
            var1 = var5.value;
            var15 = var1.guildId;
            var14 = var4;
            var13 = var2;
            if(!(var15 === var12)) { _fun0012_ip = 70; continue _fun0012 }
case 71:
            var15 = var1.oldChannelId;
            if(!(var6 != var15)) { _fun0012_ip = 72; continue _fun0012 }
case 73:
            var17 = var1.oldChannelId;
            var15 = var1.oldChannelId;
            var15 = var3[var15];
            var18 = var6 != var15;
            var16 = 0;
            if(!var18) { _fun0012_ip = 74; continue _fun0012 }
case 75:
            var16 = var15;
case 74:
            var16 = var16 - var9;
            var3[var17] = var16;
            var4 = var15;
case 72:
            var15 = var1.channelId;
            var14 = var4;
            var13 = var2;
            if(!(var6 != var15)) { _fun0012_ip = 70; continue _fun0012 }
case 76:
            var16 = var1.channelId;
            var1 = var1.channelId;
            var1 = var3[var1];
            var17 = var6 != var1;
            var15 = 0;
            if(!var17) { _fun0012_ip = 77; continue _fun0012 }
case 78:
            var15 = var1;
case 77:
            var15 = var15 + var9;
            var3[var16] = var15;
            var14 = var4;
            var13 = var1;
case 70:
            var15 = var7.bind(var10)();
            var1 = var15.done;
            var4 = var14;
            var2 = var13;
            var5 = var15;
            if(!var1) { _fun0012_ip = 50; continue _fun0012 }
case 69:
            var1 = global;
            var2 = var1.Object;
            var1 = var2.entries;
            var7 = var1.bind(var2)(var3);
            var1 = var7.length;
            var2 = var8 < var1;
            var4 = false;
            var5 = 2;
            var3 = 0;
            var1 = false;
            if(!var2) { _fun0012_ip = 79; continue _fun0012 }
case 80:
            var12 = var7[var3];
            var2 = _closure1_slot5;
            var2 = var2.bind(var10)(var12, var5);
            var13 = _closure1_slot19;
            var12 = var2[var8];
            var2 = var2[var9];
            var2 = var13.bind(var10)(var12, var2);
            if(!var2) { _fun0012_ip = 81; continue _fun0012 }
case 82:
            var4 = true;
case 81:
            var3 = var3 + 1;
            var2 = var7.length;
            var1 = var4;
            if(var3 < var2) { _fun0012_ip = 80; continue _fun0012 }
case 79:
            return var1;
        }
    };
    var4['VOICE_STATE_UPDATES'] = var10;
    var10 = function handleChannelSelect(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var1 = arg1;
            var3 = var1.guildId;
            var1 = _closure1_slot11;
            if(!(var3 !== var1)) { _fun0013_ip = 83; continue _fun0013 }
case 84:
            var11 = null;
            if(!(var11 != var3)) { _fun0013_ip = 85; continue _fun0013 }
case 64:
            _closure1_slot11 = var3;
            var1 = _closure1_slot18;
            var7 = undefined;
            var1 = var1.bind(var7)();
            var2 = _closure1_slot7;
            var1 = var2.getVoiceStates;
            var5 = var1.bind(var2)(var3);
            var3 = {};
            var1 = global;
            var4 = var1.Object;
            var2 = var4.values;
            var10 = var2.bind(var4)(var5);
            var2 = var10.length;
            var6 = 0;
            var2 = var6 < var2;
            var5 = 1;
            var9 = 0;
            var4 = undefined;
            if(!var2) { _fun0013_ip = 18; continue _fun0013 }
case 86:
            var2 = var10[var9];
            var12 = var2.channelId;
            if(!(var11 != var12)) { _fun0013_ip = 87; continue _fun0013 }
case 88:
            var13 = var2.channelId;
            var2 = var2.channelId;
            var2 = var3[var2];
            var14 = var11 != var2;
            var12 = 0;
            if(!var14) { _fun0013_ip = 89; continue _fun0013 }
case 90:
            var12 = var2;
case 89:
            var12 = var12 + var5;
            var3[var13] = var12;
            var4 = var2;
case 87:
            var9 = var9 + 1;
            var2 = var10.length;
            if(var9 < var2) { _fun0013_ip = 86; continue _fun0013 }
case 18:
            var2 = var1.Object;
            var1 = var2.entries;
            var4 = var1.bind(var2)(var3);
            var1 = var4.length;
            var1 = var6 < var1;
            var3 = 2;
            var2 = 0;
            if(!var1) { _fun0013_ip = 91; continue _fun0013 }
case 92:
            var9 = var4[var2];
            var1 = _closure1_slot5;
            var1 = var1.bind(var7)(var9, var3);
            var10 = var1[var6];
            var11 = var1[var5];
            if(!(var11 > var6)) { _fun0013_ip = 93; continue _fun0013 }
case 94:
            var9 = _closure1_slot9;
            var1 = {};
            var12 = _closure1_slot8;
            var12 = var12.GENTLE_AMBIENT;
            var1['style'] = var12;
            var1['userCount'] = var11;
            var9[var10] = var1;
case 93:
            var2 = var2 + 1;
            var1 = var4.length;
            if(var2 < var1) { _fun0013_ip = 92; continue _fun0013 }
case 91:
            var1 = true;
            return var1;
case 85:
            var1 = false;
            return var1;
case 83:
            var1 = false;
            return var1;
        }
    };
    var4['CHANNEL_SELECT'] = var10;
    var4['CONNECTION_OPEN'] = var7;
    var4['LOGOUT'] = var7;
    var7 = var9.prototype;
    var7 = Object.create(var7, {constructor: {value: var9}});
    var14 = var7;
    var12 = var4;
    var4 = new var14[var9](var13, var12, var11);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot12 = var4;
    var5 = 10;
    var6 = var6[var5];
    var5 = require;
    var7 = var5.bind(var1)(var6);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/channel/VoiceChannelAnimationStateStore.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['AnimationStyle'] = var2;
    return var1;
})();