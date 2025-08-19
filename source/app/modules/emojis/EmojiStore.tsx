// app/modules/emojis/EmojiStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var8;
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
 70: // try_end0
            _fun0001_ip = 74; continue _fun0001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot43 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot43 = var1;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0002_ip = 46; continue _fun0002 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 46:
            if(var2) { _fun0002_ip = 55; continue _fun0002 }
 49:
            var2 = var3.@@iterator;
 55:
            if(var2) { _fun0002_ip = 343; continue _fun0002 }
 61:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0002_ip = 323; continue _fun0002 }
 86:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0002_ip = 283; continue _fun0002 }
 96:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0002_ip = 270; continue _fun0002 }
 110:
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
            if(!var7) { _fun0002_ip = 163; continue _fun0002 }
 158:
            var7 = var3.constructor;
 163:
            var10 = var9;
            if(!var7) { _fun0002_ip = 179; continue _fun0002 }
 169:
            var7 = var3.constructor;
            var10 = var7.name;
 179:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0002_ip = 249; continue _fun0002 }
 187:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0002_ip = 249; continue _fun0002 }
 195:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0002_ip = 234; continue _fun0002 }
 205:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0002_ip = 247; continue _fun0002 }
 234:
            var9 = _closure1_slot45;
            var7 = var9.bind(var8)(var3, var8);
 247:
            _fun0002_ip = 265; continue _fun0002;
 249:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 265:
            var6 = var7;
            _fun0002_ip = 283; continue _fun0002;
 270:
            var7 = _closure1_slot45;
            var6 = var7.bind(var8)(var3, var8);
 283:
            var4 = var6;
            if(var4) { _fun0002_ip = 323; continue _fun0002 }
 289:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 323:
            if(!var4) { _fun0002_ip = 330; continue _fun0002 }
 326:
            _closure2_slot0 = var4;
 330:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0003_ip = 56; continue _fun0003 }
 20:
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
                    _fun0003_ip = 67; continue _fun0003;
 56:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
 67:
                    return var1;
                }
            };
            return var1;
 343:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot44 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0004_ip = 23; continue _fun0004 }
 14:
            var2 = var4.length;
            var1 = var3 > var2;
 23:
            var2 = undefined;
            if(!var1) { _fun0004_ip = 33; continue _fun0004 }
 28:
            var2 = var4.length;
 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0004_ip = 70; continue _fun0004 }
 55:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0004_ip = 55; continue _fun0004 }
 70:
            return var1;
        }
    };
    var _closure1_slot45 = var1;
    var1 = function getUsableEmoji(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var7 = arg1;
            var1 = _closure1_slot47;
            var4 = undefined;
            var1 = var1.bind(var4)();
            var5 = var1[var7];
            var3 = null;
            var6 = var3 != var5;
            var1 = undefined;
            if(!var6) { _fun0005_ip = 73; continue _fun0005 }
 31:
            var2 = _closure1_slot36;
            var6 = var2[var5];
            var5 = var3 == var6;
            var2 = undefined;
            if(var5) { _fun0005_ip = 61; continue _fun0005 }
 48:
            var5 = var6.getUsableEmoji;
            var2 = var5.bind(var6)(var7);
 61:
            var3 = var3 != var2;
            var1 = undefined;
            if(!var3) { _fun0005_ip = 73; continue _fun0005 }
 70:
            var1 = var2;
 73:
            return var1;
        }
    };
    var _closure1_slot46 = var1;
    var1 = function getEmojiToGroupId() {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var2 = _closure1_slot48;
            var11 = undefined;
            var2 = var2.bind(var11)();
            var3 = _closure1_slot37;
            var2 = null;
            if(!(var2 == var3)) { _fun0006_ip = 123; continue _fun0006 }
 23:
            var2 = {};
            _closure1_slot37 = var2;
            var9 = _closure1_slot36;
            for(var6 in var9)
 41:
            {
 50:
                var5 = var6;
                var3 = _closure1_slot44;
                var2 = _closure1_slot36;
                var2 = var2[var5];
                var2 = var2.rawEmojis;
                var4 = var3.bind(var11)(var2);
                var3 = var4.bind(var11)();
                var2 = var3.done;
                if(var2) { _fun0006_ip = 41; continue _fun0006 }
 88:
                var2 = var3.value;
                var12 = _closure1_slot37;
                var2 = var2.id;
                var12[var2] = var5;
                var12 = var4.bind(var11)();
                var2 = var12.done;
                var3 = var12;
                if(var2) { _fun0006_ip = 41; continue _fun0006 }
 121:
                _fun0006_ip = 88; continue _fun0006;
            }
 123:
            var1 = _closure1_slot37;
            return var1;
        }
    };
    var _closure1_slot47 = var1;
    var1 = function loadSavedEmojis() {
        var1 = undefined;
        var4 = _closure1_slot49;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot48 = var1;
    var1 = function _loadSavedEmojis() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot7;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0007_ip = 223; continue _fun0007 }
 12:
                    var3 = undefined;
                    var _closure4_slot0 = var3;
                    var6 = _closure1_slot34;
                    var5 = _closure1_slot33;
                    var5 = var5.Unloaded;
                    if(!(var6 === var5)) { _fun0007_ip = 217; continue _fun0007 }
 42:
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var5 = 28;
                    var5 = var7[var5];
                    var6 = var6.bind(var3)(var5);
                    var5 = var6.database;
                    var6 = var5.bind(var6)();
                    _closure4_slot0 = var6;
                    var5 = null;
                    if(!(var5 != var6)) { _fun0007_ip = 217; continue _fun0007 }
 85:
                    var6 = _closure1_slot33;
                    var6 = var6.Loading;
                    _closure1_slot34 = var6;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var6 = 29;
                    var6 = var8[var6];
                    var8 = var7.bind(var3)(var6);
                    var7 = var8.tryLoadOrResetCacheGatewayAsync;
                    var6 = 'EmojiStore.loadSavedEmojis';
                    var2 = function() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 30;
                        var2 = var2[var1];
                        var1 = undefined;
                        var5 = var3.bind(var1)(var2);
                        var4 = var5.timeAsync;
                        var3 = '💾';
                        var2 = 'loadSavedEmojis';
                        var1 = function() {
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 31;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.getAsync;
                            var1 = _closure4_slot0;
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        };
                        var1 = var4.bind(var5)(var3, var2, var1);
                        return var1;
                    };
                    var2 = var7.bind(var8)(var6, var2);
                    SaveGenerator(address=146);
 144:
                    return var2;
 146:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                    if(var6) { _fun0007_ip = 220; continue _fun0007 }
 152:
                    var6 = _closure1_slot33;
                    var6 = var6.Loaded;
                    _closure1_slot34 = var6;
                    if(!(var5 != var2)) { _fun0007_ip = 217; continue _fun0007 }
 170:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 32;
                    var4 = var6[var4];
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var7 = 'CACHED_EMOJIS_LOADED';
                    var4['type'] = var7;
                    var4['emojis'] = var2;
                    var4 = var5.bind(var6)(var4);
 217:
                    return var3;
 220:
                    return var2;
 223:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot49 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot49 = var1;
    var10 = function createEmojiFrecency(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 33;
        var3 = var3[var1];
        var1 = undefined;
        var3 = var4.bind(var1)(var3);
        var1 = {};
        var4 = function computeBonus() {
            var1 = 100;
            return var1;
        };
        var1['computeBonus'] = var4;
        var4 = function computeWeight(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                var3 = arg1;
                var1 = 3;
                var2 = var3 <= var1;
                var1 = 100;
                if(var2) { _fun0008_ip = 71; continue _fun0008 }
 16:
                var2 = 15;
                var2 = var3 <= var2;
                var1 = 70;
                if(var2) { _fun0008_ip = 71; continue _fun0008 }
 29:
                var4 = 30;
                var2 = var3 <= var4;
                var1 = 50;
                if(var2) { _fun0008_ip = 71; continue _fun0008 }
 42:
                var2 = 45;
                var2 = var3 <= var2;
                var1 = var4;
                if(var2) { _fun0008_ip = 71; continue _fun0008 }
 55:
                var2 = 80;
                var2 = var3 <= var2;
                var1 = 1;
                if(!var2) { _fun0008_ip = 71; continue _fun0008 }
 68:
                var1 = 10;
 71:
                return var1;
            }
        };
        var1['computeWeight'] = var4;
        var4 = function lookupKey(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var4 = arg1;
                var5 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 22;
                var1 = var3[var1];
                var3 = undefined;
                var5 = var5.bind(var3)(var1);
                var1 = var5.getByName;
                var1 = var1.bind(var5)(var4);
                var5 = null;
                if(!(var5 == var1)) { _fun0009_ip = 54; continue _fun0009 }
 45:
                var2 = _closure1_slot46;
                var1 = var2.bind(var3)(var4);
 54:
                return var1;
            }
        };
        var1['lookupKey'] = var4;
        var2 = function afterCompute() {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                var2 = _closure2_slot0;
                var1 = undefined;
                var2 = var2.bind(var1)();
                var8 = _closure1_slot27;
                var3 = new Array(0);
                var7 = 0;
                var9 = var3;
                var4 = arraySpread(var9, var8, var7);
                _closure1_slot35 = var3;
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var3 = 25;
                var3 = var5[var3];
                var6 = var4.bind(var1)(var3);
                var5 = var6.some;
                var4 = _closure1_slot36;
                var3 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.usableEmojis;
                    var2 = var1.length;
                    var1 = 0;
                    var1 = var2 > var1;
                    return var1;
                };
                var3 = var5.bind(var6)(var4, var3);
                if(var3) { _fun0010_ip = 127; continue _fun0010 }
 83:
                var5 = _closure1_slot35;
                var4 = var5.splice;
                var6 = _closure1_slot27;
                var3 = var6.indexOf;
                var2 = _closure1_slot24;
                var2 = var2.CUSTOM;
                var3 = var3.bind(var6)(var2);
                var2 = 1;
                var2 = var4.bind(var5)(var3, var2);
 127:
                return var1;
            }
        };
        var1['afterCompute'] = var2;
        var2 = 42;
        var1['numFrequentlyItems'] = var2;
        var2 = var3.prototype;
        var2 = Object.create(var2, {constructor: {value: var3}});
        var6 = var2;
        var5 = var1;
        var1 = new var6[var3](var5, var4);
        var1 = var1 instanceof Object ? var1 : var2;
        return var1;
    };
    var1 = function deleteEverything() {
        var1 = {};
        _closure1_slot36 = var1;
        var1 = {};
        _closure1_slot37 = var1;
        var3 = _closure1_slot40;
        var1 = var3.reset;
        var1 = var1.bind(var3)();
        var3 = _closure1_slot39;
        var1 = var3.clear;
        var1 = var1.bind(var3)();
        var1 = _closure1_slot33;
        var1 = var1.Unloaded;
        _closure1_slot34 = var1;
        var1 = undefined;
        return var1;
    };
    var _closure1_slot50 = var1;
    var1 = function deleteGuildEmoji(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
            var2 = arg1;
            var3 = _closure1_slot36;
            var4 = var3[var2];
            var3 = null;
            if(!(var3 != var4)) { _fun0011_ip = 28; continue _fun0011 }
 20:
            var1 = _closure1_slot36;
            var1 = delete var1[var2];
 28:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot51 = var1;
    var1 = function rebuildEmojis() {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
            var2 = null;
            _closure1_slot37 = var2;
            var3 = _closure1_slot40;
            var2 = var3.reset;
            var2 = var2.bind(var3)();
            var3 = _closure1_slot34;
            var2 = _closure1_slot33;
            var2 = var2.Loaded;
            var2 = var3 !== var2;
            if(!var2) { _fun0012_ip = 62; continue _fun0012 }
 44:
            var4 = _closure1_slot34;
            var3 = _closure1_slot33;
            var3 = var3.MaybeLoaded;
            var2 = var4 !== var3;
 62:
            if(var2) { _fun0012_ip = 93; continue _fun0012 }
 65:
            var3 = _closure1_slot41;
            var2 = var3.compute;
            var2 = var2.bind(var3)();
            var2 = _closure1_slot42;
            var1 = var2.compute;
            var1 = var1.bind(var2)();
 93:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot52 = var1;
    var1 = function updateGuildEmoji(arg1, arg2) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
            var4 = arg1;
            var8 = arg2;
            var2 = _closure1_slot51;
            var1 = undefined;
            var2 = var2.bind(var1)(var4);
            var3 = _closure1_slot40;
            var2 = var3.clear;
            var2 = var2.bind(var3)(var4);
            var3 = null;
            if(!(var3 != var8)) { _fun0013_ip = 132; continue _fun0013 }
 41:
            var6 = _closure1_slot19;
            var2 = var6.getCurrentUser;
            var2 = var2.bind(var6)();
            if(!(var3 != var2)) { _fun0013_ip = 132; continue _fun0013 }
 58:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 39;
            var3 = var7[var3];
            var6 = var6.bind(var1)(var3);
            var3 = var6.canUseRoleSubscriptionIAP;
            var9 = var3.bind(var6)(var4);
            var3 = _closure1_slot36;
            var6 = _closure1_slot29;
            var11 = var2.id;
            var5 = var6.prototype;
            var5 = Object.create(var5, {constructor: {value: var6}});
            var13 = var5;
            var12 = var4;
            var10 = var8;
            var2 = new var13[var6](var12, var11, var10, var9, var8);
            var2 = var2 instanceof Object ? var2 : var5;
            var3[var4] = var2;
 132:
            return var1;
        }
    };
    var _closure1_slot53 = var1;
    var1 = function handleUserSettingsProtoStoreChange() {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
            var1 = _closure1_slot13;
            var1 = var1.settings;
            var4 = var1.textAndImages;
            var3 = null;
            var6 = var3 == var4;
            var1 = undefined;
            var7 = undefined;
            if(var6) { _fun0014_ip = 54; continue _fun0014 }
 34:
            var4 = var4.diversitySurrogate;
            var6 = var3 == var4;
            var7 = undefined;
            if(var6) { _fun0014_ip = 54; continue _fun0014 }
 49:
            var7 = var4.value;
 54:
            if(!(var3 != var7)) { _fun0014_ip = 89; continue _fun0014 }
 58:
            var6 = _closure1_slot1;
            var8 = _closure1_slot2;
            var4 = 22;
            var4 = var8[var4];
            var6 = var6.bind(var1)(var4);
            var4 = var6.setDefaultDiversitySurrogate;
            var4 = var4.bind(var6)(var7);
 89:
            var6 = _closure1_slot40;
            var4 = var6.reset;
            var4 = var4.bind(var6)();
            var4 = _closure1_slot13;
            var4 = var4.frecencyWithoutFetchingLatest;
            var6 = var4.emojiFrecency;
            var7 = var3 == var6;
            var9 = undefined;
            if(var7) { _fun0014_ip = 134; continue _fun0014 }
 128:
            var9 = var6.emojis;
 134:
            if(!(var3 == var9)) { _fun0014_ip = 140; continue _fun0014 }
 138:
            var9 = {};
 140:
            var4 = var4.emojiReactionFrecency;
            var7 = var3 == var4;
            var6 = undefined;
            if(var7) { _fun0014_ip = 161; continue _fun0014 }
 155:
            var6 = var4.emojis;
 161:
            if(!(var3 == var6)) { _fun0014_ip = 167; continue _fun0014 }
 165:
            var6 = {};
 167:
            var12 = _closure1_slot41;
            var11 = var12.overwriteHistory;
            var8 = _closure1_slot1;
            var7 = _closure1_slot2;
            var4 = 25;
            var3 = var7[var4];
            var13 = var8.bind(var1)(var3);
            var10 = var13.mapValues;
            var3 = function(arg1) {
                var2 = arg1;
                var1 = {};
                var6 = var1;
                var5 = var2;
                var3 = copyDataProperties(var6, var5);
                var4 = var2.recentUses;
                var3 = var4.map;
                var2 = global;
                var2 = var2.Number;
                var4 = var3.bind(var4)(var2);
                var3 = var4.filter;
                var2 = function(arg1) {
                    var2 = arg1;
                    var1 = 0;
                    var1 = var2 > var1;
                    return var1;
                };
                var3 = var3.bind(var4)(var2);
                var2 = 'recentUses';
                var1[var2] = var3;
                return var1;
            };
            var10 = var10.bind(var13)(var9, var3);
            var3 = _closure1_slot28;
            var3 = var3.pendingUsages;
            var3 = var11.bind(var12)(var10, var3);
            var11 = _closure1_slot42;
            var10 = var11.overwriteHistory;
            var3 = var7[var4];
            var12 = var8.bind(var1)(var3);
            var3 = var12.mapValues;
            var2 = function(arg1) {
                var2 = arg1;
                var1 = {};
                var6 = var1;
                var5 = var2;
                var3 = copyDataProperties(var6, var5);
                var4 = var2.recentUses;
                var3 = var4.map;
                var2 = global;
                var2 = var2.Number;
                var4 = var3.bind(var4)(var2);
                var3 = var4.filter;
                var2 = function(arg1) {
                    var2 = arg1;
                    var1 = 0;
                    var1 = var2 > var1;
                    return var1;
                };
                var3 = var3.bind(var4)(var2);
                var2 = 'recentUses';
                var1[var2] = var3;
                return var1;
            };
            var3 = var3.bind(var12)(var6, var2);
            var2 = _closure1_slot28;
            var2 = var2.emojiReactionPendingUsages;
            var2 = var10.bind(var11)(var3, var2);
            var2 = 40;
            var2 = var7[var2];
            var11 = var8.bind(var1)(var2);
            var10 = var11.getCurrentConfig;
            var3 = {};
            var13 = 'populateInitialFrecencyData';
            var3['location'] = var13;
            var2 = {};
            var12 = true;
            var2['autoTrackExposure'] = var12;
            var2 = var10.bind(var11)(var3, var2);
            var3 = var2.canSplitFrecencyList;
            var11 = _closure1_slot0;
            var10 = 36;
            var2 = var7[var10];
            var14 = var11.bind(var1)(var2);
            var12 = var14.getCanUseReactionFrecency;
            var2 = {'location': 'populateInitialFrecencyData', 'autoTrackExposure': true};
            var2 = var12.bind(var14)(var2);
            var10 = var7[var10];
            var10 = var11.bind(var1)(var10);
            var12 = var10.RetriggerReactionFrecencyAlgorithmsExperiment;
            var11 = var12.trackExposure;
            var10 = {};
            var10['location'] = var13;
            var10 = var11.bind(var12)(var10);
            var7 = var7[var4];
            var8 = var8.bind(var1)(var7);
            var7 = var8.isEmpty;
            var7 = var7.bind(var8)(var9);
            if(!var7) { _fun0014_ip = 550; continue _fun0014 }
 429:
            var8 = _closure1_slot1;
            var7 = _closure1_slot2;
            var7 = var7[var4];
            var9 = var8.bind(var1)(var7);
            var8 = var9.isEmpty;
            var7 = _closure1_slot28;
            var7 = var7.pendingUsages;
            var7 = var8.bind(var9)(var7);
            if(!var7) { _fun0014_ip = 550; continue _fun0014 }
 470:
            var9 = _closure1_slot13;
            var8 = var9.hasLoaded;
            var7 = _closure1_slot25;
            var7 = var7.FRECENCY_AND_FAVORITES_SETTINGS;
            var7 = var8.bind(var9)(var7);
            if(!var7) { _fun0014_ip = 550; continue _fun0014 }
 498:
            var9 = ['thumbsup', 'thumbsup', 'eyes', 'eyes', 'laughing', 'laughing', 'watermelon', 'fork_and_knife', 'yum', 'weary', 'tired_face', 'poop', '100'];
            var7 = var9.length;
            var8 = 0;
            var7 = var8 < var7;
            if(!var7) { _fun0014_ip = 550; continue _fun0014 }
 520:
            var11 = var9[var8];
            var10 = _closure1_slot41;
            var7 = var10.track;
            var7 = var7.bind(var10)(var11);
            var8 = var8 + 1;
            var7 = var9.length;
            if(var8 < var7) { _fun0014_ip = 520; continue _fun0014 }
 550:
            if(var3) { _fun0014_ip = 559; continue _fun0014 }
 553:
            if(!var2) { _fun0014_ip = 716; continue _fun0014 }
 559:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var2 = var2[var4];
            var3 = var3.bind(var1)(var2);
            var2 = var3.isEmpty;
            var2 = var2.bind(var3)(var6);
            if(!var2) { _fun0014_ip = 716; continue _fun0014 }
 593:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var2 = var2[var4];
            var4 = var3.bind(var1)(var2);
            var3 = var4.isEmpty;
            var2 = _closure1_slot28;
            var2 = var2.emojiReactionPendingUsages;
            var2 = var3.bind(var4)(var2);
            if(!var2) { _fun0014_ip = 716; continue _fun0014 }
 634:
            var4 = _closure1_slot13;
            var3 = var4.hasLoaded;
            var2 = _closure1_slot25;
            var2 = var2.FRECENCY_AND_FAVORITES_SETTINGS;
            var2 = var3.bind(var4)(var2);
            if(!var2) { _fun0014_ip = 716; continue _fun0014 }
 662:
            var4 = ['100', '100', 'thumbsup', 'thumbsup', 'thumbsdown', 'thumbsdown', 'heart', 'point_up', 'eyes', 'weary', 'laughing', 'white_check_mark', 'x'];
            var2 = var4.length;
            var3 = 0;
            var2 = var3 < var2;
            if(!var2) { _fun0014_ip = 716; continue _fun0014 }
 686:
            var7 = var4[var3];
            var6 = _closure1_slot42;
            var2 = var6.track;
            var2 = var2.bind(var6)(var7);
            var3 = var3 + 1;
            var2 = var4.length;
            if(var3 < var2) { _fun0014_ip = 686; continue _fun0014 }
 716:
            return var1;
        }
    };
    var _closure1_slot54 = var1;
    var1 = function handleExperimentsChange() {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
            var1 = _closure1_slot10;
            var1 = var1.hasLoadedExperiments;
            if(!var1) { _fun0015_ip = 164; continue _fun0015 }
 19:
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 36;
            var1 = var6[var1];
            var5 = undefined;
            var7 = var3.bind(var5)(var1);
            var4 = var7.getCurrentConfig;
            var3 = {};
            var1 = 'handleExperimentsChange';
            var3['location'] = var1;
            var1 = {};
            var8 = true;
            var1['autoTrackExposure'] = var8;
            var1 = var4.bind(var7)(var3, var1);
            var1 = var1.frecencyAlgorithm;
            var4 = _closure1_slot0;
            var3 = 33;
            var7 = var6[var3];
            var7 = var4.bind(var5)(var7);
            var7 = var7.weightFunctions;
            var7 = var7[var1];
            var3 = var6[var3];
            var3 = var4.bind(var5)(var3);
            var3 = var3.frecencyAlgorithms;
            var6 = var3[var1];
            var3 = _closure1_slot26;
            if(!(var1 !== var3)) { _fun0015_ip = 160; continue _fun0015 }
 133:
            var5 = _closure1_slot42;
            var4 = var5.replaceEntryComputeFunctions;
            var3 = 'original';
            var3 = var3 !== var1;
            var3 = var4.bind(var5)(var7, var6, var3);
 160:
            _closure1_slot26 = var1;
 164:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot55 = var1;
    var1 = function trackUsage(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
            var1 = arg1;
            var8 = null;
            if(!(var8 != var1)) { _fun0016_ip = 226; continue _fun0016 }
 12:
            var3 = _closure1_slot44;
            var7 = undefined;
            var6 = var3.bind(var7)(var1);
            var4 = var6.bind(var7)();
            var3 = var4.done;
            var5 = global;
            if(var3) { _fun0016_ip = 148; continue _fun0016 }
 40:
            var3 = var4.value;
            var11 = var3.id;
            if(!(var8 == var11)) { _fun0016_ip = 60; continue _fun0016 }
 54:
            var11 = var3.uniqueName;
 60:
            if(!(var8 == var11)) { _fun0016_ip = 69; continue _fun0016 }
 64:
            var11 = var3.name;
 69:
            if(!(var8 != var11)) { _fun0016_ip = 133; continue _fun0016 }
 73:
            var9 = _closure1_slot41;
            var3 = var9.track;
            var3 = var3.bind(var9)(var11);
            var3 = _closure1_slot28;
            var10 = var3.pendingUsages;
            var9 = var10.push;
            var3 = {};
            var3['key'] = var11;
            var12 = var5.Date;
            var11 = var12.now;
            var11 = var11.bind(var12)();
            var3['timestamp'] = var11;
            var3 = var9.bind(var10)(var3);
 133:
            var9 = var6.bind(var7)();
            var3 = var9.done;
            var4 = var9;
            if(!var3) { _fun0016_ip = 40; continue _fun0016 }
 148:
            var3 = var1.length;
            var1 = 0;
            var1 = var3 > var1;
            var3 = !var1;
            if(!var1) { _fun0016_ip = 207; continue _fun0016 }
 165:
            var5 = _closure1_slot34;
            var4 = _closure1_slot33;
            var4 = var4.Loaded;
            var4 = var5 !== var4;
            if(!var4) { _fun0016_ip = 204; continue _fun0016 }
 186:
            var6 = _closure1_slot34;
            var5 = _closure1_slot33;
            var5 = var5.MaybeLoaded;
            var4 = var6 !== var5;
 204:
            var3 = var4;
 207:
            if(var3) { _fun0016_ip = 224; continue _fun0016 }
 210:
            var3 = _closure1_slot41;
            var2 = var3.compute;
            var2 = var2.bind(var3)();
 224:
            return var1;
 226:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot56 = var1;
    var11 = function handleRoleUpdate(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
            var1 = arg1;
            var5 = var1.guildId;
            var1 = var1.role;
            var4 = var1.id;
            var3 = _closure1_slot16;
            var1 = var3.getRole;
            var7 = var1.bind(var3)(var5, var4);
            var3 = null;
            if(!(var3 != var7)) { _fun0017_ip = 123; continue _fun0017 }
 44:
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 41;
            var4 = var4[var1];
            var1 = undefined;
            var6 = var6.bind(var1)(var4);
            var4 = var6.isSubscriptionRole;
            var4 = var4.bind(var6)(var7);
            if(!var4) { _fun0017_ip = 123; continue _fun0017 }
 80:
            var4 = _closure1_slot36;
            var6 = var4[var5];
            var4 = _closure1_slot53;
            var7 = var3 == var6;
            var3 = undefined;
            if(var7) { _fun0017_ip = 107; continue _fun0017 }
 101:
            var3 = var6.emojis;
 107:
            var3 = var4.bind(var1)(var5, var3);
            var2 = _closure1_slot52;
            var2 = var2.bind(var1)();
            return var1;
 123:
            var1 = false;
            return var1;
        }
    };
    var2 = global;
    var12 = var2.Object;
    var5 = var12.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var12)(var3, var1, var4);
    var13 = 0;
    var4 = var8[var13];
    var1 = undefined;
    var4 = var9.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var16 = 1;
    var4 = var8[var16];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var15 = 2;
    var4 = var8[var15];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var14 = 3;
    var4 = var8[var14];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var8[var4];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var8[var4];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var8[var4];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var8[var4];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var8[var4];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 9;
    var4 = var8[var4];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var4 = 10;
    var4 = var8[var4];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot13 = var4;
    var4 = 11;
    var4 = var8[var4];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot14 = var4;
    var4 = 12;
    var4 = var8[var4];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot15 = var4;
    var4 = 13;
    var4 = var8[var4];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot16 = var4;
    var4 = 14;
    var4 = var8[var4];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot17 = var4;
    var4 = 15;
    var4 = var8[var4];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot18 = var4;
    var4 = 16;
    var4 = var8[var4];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot19 = var4;
    var4 = 17;
    var4 = var8[var4];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot20 = var4;
    var4 = 18;
    var4 = var8[var4];
    var4 = var7.bind(var1)(var4);
    var5 = var4.EmojiDisabledReasons;
    var _closure1_slot21 = var5;
    var4 = var4.EmojiIntention;
    var _closure1_slot22 = var4;
    var4 = 19;
    var4 = var8[var4];
    var4 = var7.bind(var1)(var4);
    var4 = var4.NULL_STRING_GUILD_ID;
    var _closure1_slot23 = var4;
    var4 = 20;
    var4 = var8[var4];
    var4 = var7.bind(var1)(var4);
    var4 = var4.EmojiCategories;
    var _closure1_slot24 = var4;
    var5 = 21;
    var5 = var8[var5];
    var5 = var7.bind(var1)(var5);
    var5 = var5.UserSettingsTypes;
    var _closure1_slot25 = var5;
    var5 = 'original';
    var _closure1_slot26 = var5;
    var12 = var4.TOP_GUILD_EMOJI;
    var5 = var12.toString;
    var5 = var5.bind(var12)();
    var12 = new Array(4);
    var12[0] = var5;
    var17 = var4.FAVORITES;
    var5 = var17.toString;
    var5 = var5.bind(var17)();
    var12[1] = var5;
    var17 = var4.RECENT;
    var5 = var17.toString;
    var5 = var5.bind(var17)();
    var12[2] = var5;
    var5 = var4.CUSTOM;
    var4 = var5.toString;
    var4 = var4.bind(var5)();
    var12[3] = var4;
    var5 = var12.concat;
    var4 = 22;
    var4 = var8[var4];
    var17 = var9.bind(var1)(var4);
    var4 = var17.getCategories;
    var4 = var4.bind(var17)();
    var12 = var5.bind(var12)(var4);
    var _closure1_slot27 = var12;
    var4 = {};
    var5 = new Array(0);
    var4['pendingUsages'] = var5;
    var5 = new Array(0);
    var4['emojiReactionPendingUsages'] = var5;
    var5 = var2.Set;
    var17 = var5.prototype;
    var17 = Object.create(var17, {constructor: {value: var5}});
    var23 = var17;
    var5 = new var23[var5](var22);
    var5 = var5 instanceof Object ? var5 : var17;
    var4['expandedSectionsByGuildIds'] = var5;
    var _closure1_slot28 = var4;
    var4 = function() {
        var4 = _closure1_slot9;
        var3 = function GuildEmojis(arg1, arg2, arg3) {
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
                var3 = arguments[3];
                var2 = this;
                var1 = undefined;
                if(!(var3 === var1)) { _fun0018_ip = 14; continue _fun0018 }
 12:
                var3 = false;
 14:
                var5 = _closure1_slot8;
                var4 = _closure2_slot0;
                var4 = var5.bind(var1)(var2, var4);
                var4 = true;
                var2['_dirty'] = var4;
                var4 = {};
                var2['_emojiMap'] = var4;
                var4 = new Array(0);
                var2['_emoticons'] = var4;
                var4 = new Array(0);
                var2['_usableEmojis'] = var4;
                var4 = false;
                var2['_canSeeServerSubIAP'] = var4;
                var4 = 0;
                var2['_totalUsable'] = var4;
                var4 = arg1;
                var2['id'] = var4;
                var4 = arg2;
                var2['_userId'] = var4;
                var4 = arg3;
                var2['_emojis'] = var4;
                var2['_canSeeServerSubIAP'] = var3;
                return var1;
            }
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'getEmoji';
        var1['key'] = var2;
        var2 = function value(arg1) {
            var1 = this;
            var2 = var1.build;
            var2 = var2.bind(var1)();
            var2 = var1._emojiMap;
            var1 = arg1;
            var1 = var2[var1];
            return var1;
        };
        var1['value'] = var2;
        var2 = new Array(8);
        var2[0] = var1;
        var1 = {};
        var6 = 'getUsableEmoji';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
                var5 = this;
                var2 = var5.getEmoji;
                var1 = arg1;
                var2 = var2.bind(var5)(var1);
                var4 = null;
                var3 = var4 != var2;
                var1 = null;
                if(!var3) { _fun0019_ip = 47; continue _fun0019 }
 28:
                var3 = var5.isUsable;
                var3 = var3.bind(var5)(var2);
                var1 = null;
                if(!var3) { _fun0019_ip = 47; continue _fun0019 }
 44:
                var1 = var2;
 47:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'isUsable';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
                var5 = arg1;
                var4 = this;
                var _closure3_slot0 = var5;
                var1 = var5.roles;
                var3 = var1.length;
                var1 = 0;
                if(!(var1 !== var3)) { _fun0020_ip = 184; continue _fun0020 }
 32:
                var8 = _closure1_slot14;
                var7 = var8.getMember;
                var3 = var4.id;
                var1 = var4._userId;
                var3 = var7.bind(var8)(var3, var1);
                var1 = null;
                var1 = var1 != var3;
                if(!var1) { _fun0020_ip = 182; continue _fun0020 }
 71:
                var7 = var3.roles;
                var3 = var7.some;
                var2 = function(arg1) {
                    var1 = _closure3_slot0;
                    var3 = var1.roles;
                    var2 = var3.includes;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var2 = var3.bind(var7)(var2);
                var3 = !var2;
                var2 = !var3;
                if(!var3) { _fun0020_ip = 179; continue _fun0020 }
 102:
                var8 = _closure1_slot0;
                var7 = _closure1_slot2;
                var3 = 23;
                var7 = var7[var3];
                var3 = undefined;
                var7 = var8.bind(var3)(var7);
                var3 = var7.isPurchasableRoleSubscriptionEmoji;
                var3 = var3.bind(var7)(var5);
                var7 = !var3;
                var3 = !var7;
                if(var7) { _fun0020_ip = 176; continue _fun0020 }
 144:
                var4 = var4._canSeeServerSubIAP;
                if(var4) { _fun0020_ip = 173; continue _fun0020 }
 153:
                var7 = _closure1_slot11;
                var6 = var7.getUserIsAdmin;
                var5 = var5.guildId;
                var4 = var6.bind(var7)(var5);
 173:
                var3 = var4;
 176:
                var2 = var3;
 179:
                var1 = var2;
 182:
                return var1;
 184:
                var1 = true;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'rawEmojis';
        var1['key'] = var6;
        var6 = function get() {
            var1 = this;
            var1 = var1._emojis;
            return var1;
        };
        var1['get'] = var6;
        var2[3] = var1;
        var1 = {};
        var6 = 'emojis';
        var1['key'] = var6;
        var6 = function get() {
            var1 = this;
            var2 = var1.build;
            var2 = var2.bind(var1)();
            var1 = var1._emojis;
            return var1;
        };
        var1['get'] = var6;
        var2[4] = var1;
        var1 = {};
        var6 = 'emoticons';
        var1['key'] = var6;
        var6 = function get() {
            var1 = this;
            var2 = var1.build;
            var2 = var2.bind(var1)();
            var1 = var1._emoticons;
            return var1;
        };
        var1['get'] = var6;
        var2[5] = var1;
        var1 = {};
        var6 = 'usableEmojis';
        var1['key'] = var6;
        var6 = function get() {
            var1 = this;
            var2 = var1.build;
            var2 = var2.bind(var1)();
            var1 = var1._usableEmojis;
            return var1;
        };
        var1['get'] = var6;
        var2[6] = var1;
        var1 = {};
        var6 = 'build';
        var1['key'] = var6;
        var5 = function value() {
            _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
                var2 = this;
                var _closure3_slot0 = var2;
                var3 = var2._dirty;
                if(!var3) { _fun0021_ip = 146; continue _fun0021 }
 21:
                var3 = false;
                var2['_dirty'] = var3;
                var5 = var2._emojis;
                var4 = var5.forEach;
                var3 = function(arg1) {
                    var4 = arg1;
                    var3 = var4.name;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var2 = var1.concat;
                    var1 = ':';
                    var1 = var2.bind(var1)(var3, var1);
                    var4['allNamesString'] = var1;
                    var2 = _closure3_slot0;
                    var1 = var2.id;
                    var4['guildId'] = var1;
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 24;
                    var3 = var3[var1];
                    var1 = undefined;
                    var3 = var5.bind(var1)(var3);
                    var3 = var3.EmojiTypes;
                    var3 = var3.GUILD;
                    var4['type'] = var3;
                    var3 = var2._emojiMap;
                    var2 = var4.id;
                    var3[var2] = var4;
                    return var1;
                };
                var3 = var4.bind(var5)(var3);
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var3 = 25;
                var4 = var4[var3];
                var3 = undefined;
                var6 = var5.bind(var3)(var4);
                var5 = var6.sortBy;
                var7 = var2._emojis;
                var4 = var7.filter;
                var3 = function(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.isUsable;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var4 = var4.bind(var7)(var3);
                var3 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.name;
                    return var1;
                };
                var3 = var5.bind(var6)(var4, var3);
                var2['_usableEmojis'] = var3;
                var4 = var2._usableEmojis;
                var3 = var4.filter;
                var1 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.require_colons;
                    var1 = !var1;
                    return var1;
                };
                var1 = var3.bind(var4)(var1);
                var2['_emoticons'] = var1;
 146:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var5;
        var2[7] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var4 = var4.bind(var1)();
    var _closure1_slot29 = var4;
    var4 = 26;
    var4 = var8[var4];
    var17 = var9.bind(var1)(var4);
    var5 = var17.fromTimestamp;
    var18 = var2.Date;
    var4 = var18.now;
    var18 = var4.bind(var18)();
    var4 = 27;
    var4 = var8[var4];
    var4 = var9.bind(var1)(var4);
    var4 = var4.Millis;
    var19 = var4.DAY;
    var4 = 60;
    var4 = var4 * var19;
    var4 = var18 - var4;
    var4 = var5.bind(var17)(var4);
    var _closure1_slot30 = var4;
    var4 = new Array(0);
    var _closure1_slot31 = var4;
    var4 = new Array(0);
    var _closure1_slot32 = var4;
    var4 = {};
    var4['Unloaded'] = var13;
    var5 = 'Unloaded';
    var4[var13] = var5;
    var4['MaybeLoaded'] = var16;
    var5 = 'MaybeLoaded';
    var4[var16] = var5;
    var4['Loading'] = var15;
    var5 = 'Loading';
    var4[var15] = var5;
    var4['Loaded'] = var14;
    var5 = 'Loaded';
    var4[var14] = var5;
    var _closure1_slot33 = var4;
    var5 = var4.Unloaded;
    var _closure1_slot34 = var5;
    var5 = new Array(0);
    var22 = var5;
    var21 = var12;
    var20 = 0;
    var12 = arraySpread(var22, var21, var20);
    var _closure1_slot35 = var5;
    var5 = {};
    var _closure1_slot36 = var5;
    var5 = {};
    var _closure1_slot37 = var5;
    var5 = null;
    var _closure1_slot38 = var5;
    var2 = var2.Map;
    var12 = var2.prototype;
    var12 = Object.create(var12, {constructor: {value: var2}});
    var23 = var12;
    var2 = new var23[var2](var22);
    var2 = var2 instanceof Object ? var2 : var12;
    var _closure1_slot39 = var2;
    var2 = function() {
        var5 = function EmojiDisambiguations(arg1) {
            var3 = this;
            var _closure3_slot0 = var3;
            var5 = _closure1_slot8;
            var4 = _closure2_slot0;
            var1 = undefined;
            var4 = var5.bind(var1)(var3, var4);
            var4 = null;
            var3['emoticonRegex'] = var4;
            var3['frequentlyUsed'] = var4;
            var3['favorites'] = var4;
            var3['favoriteNamesAndIds'] = var4;
            var3['topEmojis'] = var4;
            var3['escapedEmoticonNames'] = var4;
            var3['disambiguatedEmoji'] = var4;
            var3['newlyAddedEmoji'] = var4;
            var3['frequentlyUsedReactionEmojis'] = var4;
            var2 = function(arg1) {
                _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
 0:
                    var1 = arg1;
                    var5 = null;
                    if(!(var5 != var1)) { _fun0022_ip = 126; continue _fun0022 }
 9:
                    var3 = _closure3_slot0;
                    var2 = var3.rebuildFavoriteEmojisWithoutFetchingLatest;
                    var2 = var2.bind(var3)();
                    var3 = var2.favoriteNamesAndIds;
                    var2 = var1.id;
                    if(!(var5 == var2)) { _fun0022_ip = 109; continue _fun0022 }
 41:
                    var6 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 22;
                    var4 = var4[var2];
                    var2 = undefined;
                    var6 = var6.bind(var2)(var4);
                    var4 = var6.convertSurrogateToBase;
                    var2 = var1.surrogates;
                    var4 = var4.bind(var6)(var2);
                    var2 = var1;
                    if(!(var5 != var4)) { _fun0022_ip = 92; continue _fun0022 }
 89:
                    var2 = var4;
 92:
                    var4 = var3.has;
                    var2 = var2.name;
                    var2 = var4.bind(var3)(var2);
                    return var2;
 109:
                    var2 = var3.has;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
                    return var1;
 126:
                    var1 = false;
                    return var1;
                }
            };
            var3['isFavoriteEmojiWithoutFetchingLatest'] = var2;
            var2 = arg1;
            var3['guildId'] = var2;
            return var1;
        };
        var _closure2_slot0 = var5;
        var4 = _closure1_slot9;
        var1 = {};
        var2 = 'ensureDisambiguated';
        var1['key'] = var2;
        var2 = function value() {
            _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
 0:
                var2 = this;
                var3 = var2.disambiguatedEmoji;
                var1 = null;
                if(!(var1 == var3)) { _fun0023_ip = 25; continue _fun0023 }
 15:
                var1 = var2._buildDisambiguatedCustomEmoji;
                var1 = var1.bind(var2)();
 25:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var2;
        var3 = new Array(18);
        var3[0] = var1;
        var1 = {};
        var2 = 'getDisambiguatedEmoji';
        var1['key'] = var2;
        var2 = function value() {
            _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
 0:
                var1 = this;
                var3 = var1.disambiguatedEmoji;
                var2 = null;
                if(!(var2 == var3)) { _fun0024_ip = 25; continue _fun0024 }
 15:
                var2 = var1._buildDisambiguatedCustomEmoji;
                var2 = var2.bind(var1)();
 25:
                var1 = var1.disambiguatedEmoji;
                return var1;
            }
        };
        var1['value'] = var2;
        var3[1] = var1;
        var1 = {};
        var2 = 'getCustomEmoji';
        var1['key'] = var2;
        var2 = function value() {
            _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
 0:
                var1 = this;
                var3 = var1.customEmojis;
                var2 = null;
                if(!(var2 == var3)) { _fun0025_ip = 25; continue _fun0025 }
 15:
                var2 = var1._buildDisambiguatedCustomEmoji;
                var2 = var2.bind(var1)();
 25:
                var1 = var1.customEmojis;
                return var1;
            }
        };
        var1['value'] = var2;
        var3[2] = var1;
        var1 = {};
        var2 = 'getGroupedCustomEmoji';
        var1['key'] = var2;
        var2 = function value() {
            _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
 0:
                var1 = this;
                var3 = var1.groupedCustomEmojis;
                var2 = null;
                if(!(var2 == var3)) { _fun0026_ip = 25; continue _fun0026 }
 15:
                var2 = var1._buildDisambiguatedCustomEmoji;
                var2 = var2.bind(var1)();
 25:
                var1 = var1.groupedCustomEmojis;
                return var1;
            }
        };
        var1['value'] = var2;
        var3[3] = var1;
        var1 = {};
        var2 = 'getByName';
        var1['key'] = var2;
        var2 = function value(arg1) {
            _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
 0:
                var2 = arg1;
                var1 = this;
                var3 = var1.emojisByName;
                var5 = null;
                var3 = var5 != var3;
                if(!var3) { _fun0027_ip = 31; continue _fun0027 }
 21:
                var4 = var1.unicodeAliases;
                var3 = var5 != var4;
 31:
                if(var3) { _fun0027_ip = 44; continue _fun0027 }
 34:
                var3 = var1._buildDisambiguatedCustomEmoji;
                var3 = var3.bind(var1)();
 44:
                var3 = global;
                var4 = var3.Object;
                var4 = var4.prototype;
                var6 = var4.hasOwnProperty;
                var5 = var6.call;
                var4 = var1.emojisByName;
                var4 = var5.bind(var6)(var4, var2);
                if(var4) { _fun0027_ip = 183; continue _fun0027 }
 83:
                var4 = var3.Object;
                var4 = var4.prototype;
                var6 = var4.hasOwnProperty;
                var5 = var6.call;
                var4 = var1.unicodeAliases;
                var4 = var5.bind(var6)(var4, var2);
                if(!var4) { _fun0027_ip = 167; continue _fun0027 }
 120:
                var4 = var1.unicodeAliases;
                var4 = var4[var2];
                var3 = var3.Object;
                var3 = var3.prototype;
                var6 = var3.hasOwnProperty;
                var5 = var6.call;
                var3 = var1.emojisByName;
                var3 = var5.bind(var6)(var3, var4);
                if(var3) { _fun0027_ip = 171; continue _fun0027 }
 167:
                var3 = undefined;
                return var3;
 171:
                var3 = var1.emojisByName;
                var3 = var3[var4];
                return var3;
 183:
                var1 = var1.emojisByName;
                var1 = var1[var2];
                return var1;
            }
        };
        var1['value'] = var2;
        var3[4] = var1;
        var1 = {};
        var2 = 'getEmoticonByName';
        var1['key'] = var2;
        var2 = function value(arg1) {
            _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
 0:
                var2 = arg1;
                var1 = this;
                var4 = var1.emoticonsByName;
                var3 = null;
                if(!(var3 == var4)) { _fun0028_ip = 28; continue _fun0028 }
 18:
                var3 = var1._buildDisambiguatedCustomEmoji;
                var3 = var3.bind(var1)();
 28:
                var3 = global;
                var3 = var3.Object;
                var3 = var3.prototype;
                var5 = var3.hasOwnProperty;
                var4 = var5.call;
                var3 = var1.emoticonsByName;
                var3 = var4.bind(var5)(var3, var2);
                if(var3) { _fun0028_ip = 71; continue _fun0028 }
 67:
                var3 = undefined;
                return var3;
 71:
                var1 = var1.emoticonsByName;
                var1 = var1[var2];
                return var1;
            }
        };
        var1['value'] = var2;
        var3[5] = var1;
        var1 = {};
        var2 = 'getById';
        var1['key'] = var2;
        var2 = function value(arg1) {
            _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
 0:
                var2 = arg1;
                var1 = this;
                var4 = var1.emojisById;
                var3 = null;
                if(!(var3 == var4)) { _fun0029_ip = 28; continue _fun0029 }
 18:
                var3 = var1._buildDisambiguatedCustomEmoji;
                var3 = var3.bind(var1)();
 28:
                var3 = global;
                var3 = var3.Object;
                var3 = var3.prototype;
                var5 = var3.hasOwnProperty;
                var4 = var5.call;
                var3 = var1.emojisById;
                var3 = var4.bind(var5)(var3, var2);
                if(var3) { _fun0029_ip = 71; continue _fun0029 }
 67:
                var3 = undefined;
                return var3;
 71:
                var1 = var1.emojisById;
                var1 = var1[var2];
                return var1;
            }
        };
        var1['value'] = var2;
        var3[6] = var1;
        var1 = {};
        var2 = 'getCustomEmoticonRegex';
        var1['key'] = var2;
        var2 = function value() {
            _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
 0:
                var1 = this;
                var2 = var1.escapedEmoticonNames;
                var4 = null;
                if(!(var4 == var2)) { _fun0030_ip = 25; continue _fun0030 }
 15:
                var2 = var1._buildDisambiguatedCustomEmoji;
                var2 = var2.bind(var1)();
 25:
                var2 = var1.emoticonRegex;
                var2 = var4 == var2;
                if(!var2) { _fun0030_ip = 48; continue _fun0030 }
 38:
                var3 = var1.escapedEmoticonNames;
                var2 = var4 != var3;
 48:
                if(!var2) { _fun0030_ip = 65; continue _fun0030 }
 51:
                var4 = var1.escapedEmoticonNames;
                var3 = '';
                var2 = var3 !== var4;
 65:
                if(!var2) { _fun0030_ip = 137; continue _fun0030 }
 68:
                var2 = global;
                var4 = var2.RegExp;
                var6 = var1.escapedEmoticonNames;
                var2 = var2.HermesInternal;
                var5 = var2.concat;
                var3 = '^\\b(';
                var2 = ')\\b';
                var8 = var5.bind(var3)(var6, var2);
                var3 = var4.prototype;
                var3 = Object.create(var3, {constructor: {value: var4}});
                var9 = var3;
                var2 = new var9[var4](var8, var7);
                var2 = var2 instanceof Object ? var2 : var3;
                var1['emoticonRegex'] = var2;
 137:
                var1 = var1.emoticonRegex;
                return var1;
            }
        };
        var1['value'] = var2;
        var3[7] = var1;
        var1 = {};
        var2 = 'getFrequentlyUsedEmojisWithoutFetchingLatest';
        var1['key'] = var2;
        var2 = function value() {
            _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
 0:
                var1 = this;
                var _closure3_slot0 = var1;
                var2 = var1.ensureDisambiguated;
                var2 = var2.bind(var1)();
                var4 = var1.frequentlyUsed;
                var2 = null;
                if(!(var2 == var4)) { _fun0031_ip = 157; continue _fun0031 }
 34:
                var4 = _closure1_slot41;
                var5 = var4.frequently;
                var4 = var5.map;
                var3 = function(arg1) {
                    _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
 0:
                        var2 = arg1;
                        var3 = var2.id;
                        var1 = null;
                        if(!(var1 == var3)) { _fun0032_ip = 57; continue _fun0032 }
 14:
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 22;
                        var3 = var3[var1];
                        var1 = undefined;
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.getByName;
                        var1 = var2.name;
                        var1 = var3.bind(var4)(var1);
                        _fun0032_ip = 80; continue _fun0032;
 57:
                        var4 = _closure3_slot0;
                        var3 = var4.getById;
                        var2 = var2.id;
                        var1 = var3.bind(var4)(var2);
 80:
                        return var1;
                    }
                };
                var7 = var4.bind(var5)(var3);
                var5 = var7.filter;
                var8 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 34;
                var3 = var6[var3];
                var4 = undefined;
                var3 = var8.bind(var4)(var3);
                var3 = var3.isNotNullish;
                var3 = var5.bind(var7)(var3);
                var5 = _closure1_slot1;
                var2 = 35;
                var2 = var6[var2];
                var2 = var5.bind(var4)(var2);
                var3 = var2.bind(var4)(var3);
                var2 = var3.values;
                var10 = var2.bind(var3)();
                var2 = new Array(0);
                var9 = 0;
                var11 = var2;
                var3 = arraySpread(var11, var10, var9);
                var1['frequentlyUsed'] = var2;
                var2 = var1.frequentlyUsed;
                return var2;
 157:
                var1 = var1.frequentlyUsed;
                return var1;
            }
        };
        var1['value'] = var2;
        var3[8] = var1;
        var1 = {};
        var2 = 'getFrequentlyUsedReactionEmojisWithoutFetchingLatest';
        var1['key'] = var2;
        var2 = function value() {
            _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
 0:
                var1 = this;
                var _closure3_slot0 = var1;
                var2 = var1.ensureDisambiguated;
                var2 = var2.bind(var1)();
                var4 = var1.frequentlyUsedReactionEmojis;
                var2 = null;
                if(!(var2 == var4)) { _fun0033_ip = 157; continue _fun0033 }
 34:
                var4 = _closure1_slot42;
                var5 = var4.frequently;
                var4 = var5.map;
                var3 = function(arg1) {
                    _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
 0:
                        var2 = arg1;
                        var3 = var2.id;
                        var1 = null;
                        if(!(var1 == var3)) { _fun0034_ip = 57; continue _fun0034 }
 14:
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 22;
                        var3 = var3[var1];
                        var1 = undefined;
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.getByName;
                        var1 = var2.name;
                        var1 = var3.bind(var4)(var1);
                        _fun0034_ip = 80; continue _fun0034;
 57:
                        var4 = _closure3_slot0;
                        var3 = var4.getById;
                        var2 = var2.id;
                        var1 = var3.bind(var4)(var2);
 80:
                        return var1;
                    }
                };
                var7 = var4.bind(var5)(var3);
                var5 = var7.filter;
                var8 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 34;
                var3 = var6[var3];
                var4 = undefined;
                var3 = var8.bind(var4)(var3);
                var3 = var3.isNotNullish;
                var3 = var5.bind(var7)(var3);
                var5 = _closure1_slot1;
                var2 = 35;
                var2 = var6[var2];
                var2 = var5.bind(var4)(var2);
                var3 = var2.bind(var4)(var3);
                var2 = var3.values;
                var10 = var2.bind(var3)();
                var2 = new Array(0);
                var9 = 0;
                var11 = var2;
                var3 = arraySpread(var11, var10, var9);
                var1['frequentlyUsedReactionEmojis'] = var2;
                var2 = var1.frequentlyUsedReactionEmojis;
                return var2;
 157:
                var1 = var1.frequentlyUsedReactionEmojis;
                return var1;
            }
        };
        var1['value'] = var2;
        var3[9] = var1;
        var1 = {};
        var2 = 'rebuildFavoriteEmojisWithoutFetchingLatest';
        var1['key'] = var2;
        var2 = function value() {
            _fun0035: for(var _fun0035_ip = 0; ; ) switch(_fun0035_ip) {
 0:
                var2 = this;
                var _closure3_slot0 = var2;
                var1 = var2.ensureDisambiguated;
                var1 = var1.bind(var2)();
                var1 = var2.favorites;
                var5 = null;
                if(!(var5 != var1)) { _fun0035_ip = 44; continue _fun0035 }
 31:
                var1 = var2.favoriteNamesAndIds;
                if(!(var5 == var1)) { _fun0035_ip = 257; continue _fun0035 }
 44:
                var4 = _closure1_slot13;
                var4 = var4.frecencyWithoutFetchingLatest;
                var7 = var4.favoriteEmojis;
                var8 = var5 == var7;
                var4 = undefined;
                var6 = undefined;
                if(var8) { _fun0035_ip = 80; continue _fun0035 }
 74:
                var6 = var7.emojis;
 80:
                if(!(var5 == var6)) { _fun0035_ip = 88; continue _fun0035 }
 84:
                var6 = new Array(0);
 88:
                var5 = var6.map;
                var3 = function(arg1) {
                    _fun0036: for(var _fun0036_ip = 0; ; ) switch(_fun0036_ip) {
 0:
                        var4 = arg1;
                        var2 = _closure3_slot0;
                        var1 = var2.getById;
                        var1 = var1.bind(var2)(var4);
                        var2 = null;
                        if(!(var2 == var1)) { _fun0036_ip = 63; continue _fun0036 }
 27:
                        var5 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var2 = 22;
                        var3 = var3[var2];
                        var2 = undefined;
                        var3 = var5.bind(var2)(var3);
                        var2 = var3.getByName;
                        var1 = var2.bind(var3)(var4);
 63:
                        return var1;
                    }
                };
                var7 = var5.bind(var6)(var3);
                var5 = var7.filter;
                var8 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 34;
                var3 = var6[var3];
                var3 = var8.bind(var4)(var3);
                var3 = var3.isNotNullish;
                var3 = var5.bind(var7)(var3);
                var5 = _closure1_slot1;
                var1 = 35;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var3 = var1.bind(var4)(var3);
                var1 = var3.values;
                var10 = var1.bind(var3)();
                var1 = new Array(0);
                var9 = 0;
                var11 = var1;
                var4 = arraySpread(var11, var10, var9);
                var2['favorites'] = var1;
                var1 = global;
                var4 = var1.Set;
                var1 = var3.keys;
                var11 = var1.bind(var3)();
                var3 = var4.prototype;
                var3 = Object.create(var3, {constructor: {value: var4}});
                var12 = var3;
                var1 = new var12[var4](var11, var10);
                var1 = var1 instanceof Object ? var1 : var3;
                var2['favoriteNamesAndIds'] = var1;
                var1 = {};
                var3 = var2.favorites;
                var1['favorites'] = var3;
                var3 = var2.favoriteNamesAndIds;
                var1['favoriteNamesAndIds'] = var3;
                return var1;
 257:
                var1 = {};
                var3 = var2.favorites;
                var1['favorites'] = var3;
                var2 = var2.favoriteNamesAndIds;
                var1['favoriteNamesAndIds'] = var2;
                return var1;
            }
        };
        var1['value'] = var2;
        var3[10] = var1;
        var1 = {};
        var2 = 'favoriteEmojisWithoutFetchingLatest';
        var1['key'] = var2;
        var2 = function get() {
            var2 = this;
            var1 = var2.rebuildFavoriteEmojisWithoutFetchingLatest;
            var1 = var1.bind(var2)();
            var1 = var1.favorites;
            return var1;
        };
        var1['get'] = var2;
        var3[11] = var1;
        var1 = {};
        var2 = 'getEmojiInPriorityOrderWithoutFetchingLatest';
        var1['key'] = var2;
        var2 = function value() {
            _fun0037: for(var _fun0037_ip = 0; ; ) switch(_fun0037_ip) {
 0:
                var2 = this;
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var4 = 36;
                var3 = var8[var4];
                var5 = undefined;
                var10 = var6.bind(var5)(var3);
                var9 = var10.getCanUseReactionFrecency;
                var7 = 'getEmojiInPriorityOrderWithoutFetchingLatest';
                var3 = {'location': 'getEmojiInPriorityOrderWithoutFetchingLatest', 'autoTrackExposure': true};
                var3 = var9.bind(var10)(var3);
                var4 = var8[var4];
                var4 = var6.bind(var5)(var4);
                var6 = var4.RetriggerReactionFrecencyAlgorithmsExperiment;
                var5 = var6.trackExposure;
                var4 = {};
                var4['location'] = var7;
                var4 = var5.bind(var6)(var4);
                if(var3) { _fun0037_ip = 108; continue _fun0037 }
 96:
                var3 = var2.getFrequentlyUsedEmojisWithoutFetchingLatest;
                var4 = var3.bind(var2)();
                _fun0037_ip = 118; continue _fun0037;
 108:
                var3 = var2.getFrequentlyUsedReactionEmojisWithoutFetchingLatest;
                var4 = var3.bind(var2)();
 118:
                var3 = global;
                var3 = var3.Set;
                var5 = var3.prototype;
                var5 = Object.create(var5, {constructor: {value: var3}});
                var12 = var5;
                var3 = new var12[var3](var11);
                var3 = var3 instanceof Object ? var3 : var5;
                var _closure3_slot0 = var3;
                var3 = var2.favoriteEmojisWithoutFetchingLatest;
                var2 = var3.concat;
                var3 = var2.bind(var3)(var4);
                var2 = var3.filter;
                var1 = function(arg1) {
                    _fun0038: for(var _fun0038_ip = 0; ; ) switch(_fun0038_ip) {
 0:
                        var4 = arg1;
                        var3 = _closure3_slot0;
                        var1 = var3.has;
                        var1 = var1.bind(var3)(var4);
                        var1 = !var1;
                        if(!var1) { _fun0038_ip = 42; continue _fun0038 }
 26:
                        var3 = _closure3_slot0;
                        var2 = var3.add;
                        var2 = var2.bind(var3)(var4);
                        var1 = true;
 42:
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var1['value'] = var2;
        var3[12] = var1;
        var1 = {};
        var2 = 'getTopEmojiWithoutFetchingLatest';
        var1['key'] = var2;
        var2 = function value(arg1) {
            _fun0039: for(var _fun0039_ip = 0; ; ) switch(_fun0039_ip) {
 0:
                var6 = arg1;
                var2 = this;
                var _closure3_slot0 = var2;
                var1 = var2.ensureDisambiguated;
                var1 = var1.bind(var2)();
                var1 = var2.topEmojis;
                var5 = null;
                if(!(var5 == var1)) { _fun0039_ip = 190; continue _fun0039 }
 37:
                var7 = _closure1_slot39;
                var4 = var7.get;
                var8 = var4.bind(var7)(var6);
                var7 = _closure1_slot20;
                var4 = var7.getTopEmojiIdsByGuildId;
                var7 = var4.bind(var7)(var6);
                if(!(var5 == var8)) { _fun0039_ip = 79; continue _fun0039 }
 75:
                if(!(var5 != var7)) { _fun0039_ip = 198; continue _fun0039 }
 79:
                var9 = var5 == var8;
                var4 = undefined;
                if(var9) { _fun0039_ip = 94; continue _fun0039 }
 88:
                var4 = var8.emojiIds;
 94:
                if(!(var5 != var4)) { _fun0039_ip = 101; continue _fun0039 }
 98:
                var7 = var4;
 101:
                var5 = var7.map;
                var4 = function(arg1) {
                    _fun0040: for(var _fun0040_ip = 0; ; ) switch(_fun0040_ip) {
 0:
                        var7 = arg1;
                        var2 = _closure3_slot0;
                        var1 = var2.getById;
                        var1 = var1.bind(var2)(var7);
                        var2 = null;
                        if(!(var2 == var1)) { _fun0040_ip = 86; continue _fun0040 }
 27:
                        var6 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var2 = 22;
                        var3 = var8[var2];
                        var5 = undefined;
                        var4 = var6.bind(var5)(var3);
                        var3 = var4.getByName;
                        var2 = var8[var2];
                        var6 = var6.bind(var5)(var2);
                        var5 = var6.convertSurrogateToName;
                        var2 = false;
                        var2 = var5.bind(var6)(var7, var2);
                        var1 = var3.bind(var4)(var2);
 86:
                        return var1;
                    }
                };
                var8 = var5.bind(var7)(var4);
                var5 = new Array(0);
                var _closure3_slot1 = var5;
                var7 = var8.forEach;
                var4 = function(arg1) {
                    _fun0041: for(var _fun0041_ip = 0; ; ) switch(_fun0041_ip) {
 0:
                        var3 = arg1;
                        var1 = null;
                        if(!(var1 != var3)) { _fun0041_ip = 26; continue _fun0041 }
 9:
                        var2 = _closure3_slot1;
                        var1 = var2.push;
                        var1 = var1.bind(var2)(var3);
 26:
                        var1 = undefined;
                        return var1;
                    }
                };
                var4 = var7.bind(var8)(var4);
                var4 = var2.getNewlyAddedEmojiForGuild;
                var7 = var4.bind(var2)(var6);
                var6 = var7.map;
                var4 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.id;
                    return var1;
                };
                var4 = var6.bind(var7)(var4);
                var _closure3_slot2 = var4;
                var4 = var5.filter;
                var3 = function(arg1) {
                    var3 = _closure3_slot2;
                    var2 = var3.includes;
                    var1 = arg1;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
                    var1 = !var1;
                    return var1;
                };
                var3 = var4.bind(var5)(var3);
                var2['topEmojis'] = var3;
 190:
                var2 = var2.topEmojis;
                return var2;
 198:
                var1 = _closure1_slot31;
                return var1;
            }
        };
        var1['value'] = var2;
        var3[13] = var1;
        var1 = {};
        var2 = 'getNewlyAddedEmojiForGuild';
        var1['key'] = var2;
        var2 = function value(arg1) {
            _fun0042: for(var _fun0042_ip = 0; ; ) switch(_fun0042_ip) {
 0:
                var1 = this;
                var2 = var1.ensureDisambiguated;
                var2 = var2.bind(var1)();
                var3 = var1.newlyAddedEmoji;
                var2 = null;
                if(!(var2 != var3)) { _fun0042_ip = 51; continue _fun0042 }
 25:
                var3 = var1.newlyAddedEmoji;
                var1 = arg1;
                var1 = var3[var1];
                if(!(var2 == var1)) { _fun0042_ip = 49; continue _fun0042 }
 42:
                var1 = _closure1_slot31;
 49:
                return var1;
 51:
                var1 = _closure1_slot31;
                return var1;
            }
        };
        var1['value'] = var2;
        var3[14] = var1;
        var1 = {};
        var2 = 'getEscapedCustomEmoticonNames';
        var1['key'] = var2;
        var2 = function value() {
            _fun0043: for(var _fun0043_ip = 0; ; ) switch(_fun0043_ip) {
 0:
                var1 = this;
                var3 = var1.escapedEmoticonNames;
                var2 = null;
                if(!(var2 == var3)) { _fun0043_ip = 25; continue _fun0043 }
 15:
                var2 = var1._buildDisambiguatedCustomEmoji;
                var2 = var2.bind(var1)();
 25:
                var1 = var1.escapedEmoticonNames;
                return var1;
            }
        };
        var1['value'] = var2;
        var3[15] = var1;
        var1 = {};
        var2 = 'nameMatchesChain';
        var1['key'] = var2;
        var2 = function value(arg1) {
            var5 = this;
            var2 = arg1;
            var _closure3_slot0 = var2;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 25;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = var5.getDisambiguatedEmoji;
            var2 = var2.bind(var5)();
            var3 = var3.bind(var4)(var2);
            var2 = var3.filter;
            var1 = function(arg1) {
                _fun0044: for(var _fun0044_ip = 0; ; ) switch(_fun0044_ip) {
 0:
                    var1 = arg1;
                    var6 = var1.names;
                    var8 = var1.name;
                    var2 = null;
                    var1 = var2 != var6;
                    if(!var1) { _fun0044_ip = 66; continue _fun0044 }
 22:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var3 = 25;
                    var4 = var4[var3];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.some;
                    var3 = _closure3_slot0;
                    var1 = var4.bind(var5)(var6, var3);
 66:
                    var3 = var2 != var8;
                    if(!var3) { _fun0044_ip = 87; continue _fun0044 }
 73:
                    var5 = _closure3_slot0;
                    var4 = undefined;
                    var3 = var5.bind(var4)(var8);
 87:
                    var2 = var2 != var8;
                    if(!var2) { _fun0044_ip = 161; continue _fun0044 }
 94:
                    var9 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var4 = 25;
                    var4 = var10[var4];
                    var5 = undefined;
                    var7 = var9.bind(var5)(var4);
                    var6 = var7.some;
                    var4 = 37;
                    var4 = var10[var4];
                    var5 = var9.bind(var5)(var4);
                    var4 = var5.getTermsForEmoji;
                    var5 = var4.bind(var5)(var8);
                    var4 = _closure3_slot0;
                    var2 = var6.bind(var7)(var5, var4);
 161:
                    if(var1) { _fun0044_ip = 167; continue _fun0044 }
 164:
                    var1 = var3;
 167:
                    if(var1) { _fun0044_ip = 173; continue _fun0044 }
 170:
                    var1 = var2;
 173:
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1['value'] = var2;
        var3[16] = var1;
        var1 = {};
        var2 = '_buildDisambiguatedCustomEmoji';
        var1['key'] = var2;
        var2 = function value() {
            _fun0045: for(var _fun0045_ip = 0; ; ) switch(_fun0045_ip) {
 0:
                var3 = this;
                var _closure3_slot0 = var3;
                var1 = {};
                var _closure3_slot1 = var1;
                var5 = new Array(0);
                var _closure3_slot2 = var5;
                var13 = null;
                var3['emoticonRegex'] = var13;
                var3['frequentlyUsed'] = var13;
                var3['frequentlyUsedReactionEmojis'] = var13;
                var1 = new Array(0);
                var3['disambiguatedEmoji'] = var1;
                var1 = global;
                var6 = var1.Object;
                var4 = var6.create;
                var4 = var4.bind(var6)(var13);
                var3['unicodeAliases'] = var4;
                var6 = var1.Object;
                var4 = var6.create;
                var4 = var4.bind(var6)(var13);
                var3['customEmojis'] = var4;
                var6 = var1.Object;
                var4 = var6.create;
                var4 = var4.bind(var6)(var13);
                var3['groupedCustomEmojis'] = var4;
                var6 = var1.Object;
                var4 = var6.create;
                var4 = var4.bind(var6)(var13);
                var3['emoticonsByName'] = var4;
                var6 = var1.Object;
                var4 = var6.create;
                var4 = var4.bind(var6)(var13);
                var3['emojisByName'] = var4;
                var6 = var1.Object;
                var4 = var6.create;
                var4 = var4.bind(var6)(var13);
                var3['emojisById'] = var4;
                var4 = var1.Object;
                var1 = var4.create;
                var1 = var1.bind(var4)(var13);
                var3['newlyAddedEmoji'] = var1;
                var8 = function disambiguateEmoji(arg1) {
                    _fun0046: for(var _fun0046_ip = 0; ; ) switch(_fun0046_ip) {
 0:
                        var9 = arg1;
                        var _closure4_slot0 = var9;
                        var11 = var9.name;
                        var3 = _closure3_slot1;
                        var3 = var3[var11];
                        var4 = null;
                        var5 = var4 != var3;
                        var7 = 0;
                        var13 = 0;
                        if(!var5) { _fun0046_ip = 41; continue _fun0046 }
 38:
                        var13 = var3;
 41:
                        var5 = _closure3_slot1;
                        var8 = 1;
                        var3 = var13 + var8;
                        var5[var11] = var3;
                        var3 = var9;
                        if(!(var13 > var7)) { _fun0046_ip = 158; continue _fun0046 }
 63:
                        var6 = global;
                        var5 = var6.HermesInternal;
                        var12 = var5.concat;
                        var10 = '';
                        var5 = '~';
                        var10 = var12.bind(var10)(var11, var5, var13);
                        var5 = {};
                        var16 = var5;
                        var15 = var9;
                        var9 = copyDataProperties(var16, var15);
                        var9 = 'name';
                        var5[var9] = var10;
                        var9 = 'originalName';
                        var5[var9] = var11;
                        var6 = var6.HermesInternal;
                        var9 = var6.concat;
                        var6 = ':';
                        var9 = var9.bind(var6)(var10, var6);
                        var6 = 'allNamesString';
                        var5[var6] = var9;
                        _closure4_slot0 = var5;
                        var3 = var5;
 158:
                        var5 = _closure3_slot0;
                        var6 = var5.emojisByName;
                        var5 = var3.name;
                        var6[var5] = var3;
                        var5 = 'names';
                        var5 = var5 in var3;
                        if(!var5) { _fun0046_ip = 222; continue _fun0046 }
 188:
                        var6 = var3.names;
                        if(!(var4 != var6)) { _fun0046_ip = 222; continue _fun0046 }
 197:
                        var5 = var6.slice;
                        var6 = var5.bind(var6)(var8);
                        var5 = var6.forEach;
                        var2 = function(arg1) {
                            var1 = _closure3_slot0;
                            var3 = var1.unicodeAliases;
                            var1 = _closure4_slot0;
                            var1 = var1.name;
                            var2 = arg1;
                            var3[var2] = var1;
                            return var1;
                        };
                        var2 = var5.bind(var6)(var2);
 222:
                        var2 = var3.id;
                        if(!(var4 != var2)) { _fun0046_ip = 515; continue _fun0046 }
 234:
                        var2 = _closure3_slot0;
                        var6 = var2.emojisById;
                        var5 = var3.id;
                        var6[var5] = var3;
                        var5 = var2.customEmojis;
                        var2 = var3.name;
                        var5[var2] = var3;
                        var9 = var3.type;
                        var5 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var2 = 24;
                        var2 = var8[var2];
                        var10 = undefined;
                        var2 = var5.bind(var10)(var2);
                        var2 = var2.EmojiTypes;
                        var8 = var2.GUILD;
                        var5 = undefined;
                        var2 = undefined;
                        if(!(var9 === var8)) { _fun0046_ip = 325; continue _fun0046 }
 318:
                        var5 = var3.guildId;
                        var2 = true;
 325:
                        if(!(var4 != var5)) { _fun0046_ip = 515; continue _fun0046 }
 332:
                        var8 = _closure3_slot0;
                        var8 = var8.groupedCustomEmojis;
                        var8 = var8[var5];
                        if(!(var4 == var8)) { _fun0046_ip = 374; continue _fun0046 }
 350:
                        var8 = _closure3_slot0;
                        var9 = var8.groupedCustomEmojis;
                        var8 = new Array(1);
                        var8[0] = var3;
                        var9[var5] = var8;
                        _fun0046_ip = 398; continue _fun0046;
 374:
                        var8 = _closure3_slot0;
                        var8 = var8.groupedCustomEmojis;
                        var9 = var8[var5];
                        var8 = var9.push;
                        var8 = var8.bind(var9)(var3);
 398:
                        if(!var2) { _fun0046_ip = 446; continue _fun0046 }
 401:
                        var9 = _closure1_slot1;
                        var11 = _closure1_slot2;
                        var8 = 26;
                        var8 = var11[var8];
                        var10 = var9.bind(var10)(var8);
                        var9 = var10.compare;
                        var8 = var3.id;
                        var6 = _closure1_slot30;
                        var6 = var9.bind(var10)(var8, var6);
                        var2 = var6 >= var7;
 446:
                        if(!var2) { _fun0046_ip = 515; continue _fun0046 }
 449:
                        var2 = _closure3_slot0;
                        var2 = var2.newlyAddedEmoji;
                        var2 = var2[var5];
                        if(!(var4 == var2)) { _fun0046_ip = 491; continue _fun0046 }
 467:
                        var2 = _closure3_slot0;
                        var6 = var2.newlyAddedEmoji;
                        var2 = new Array(1);
                        var2[0] = var3;
                        var6[var5] = var2;
                        _fun0046_ip = 515; continue _fun0046;
 491:
                        var2 = _closure3_slot0;
                        var2 = var2.newlyAddedEmoji;
                        var5 = var2[var5];
                        var2 = var5.push;
                        var2 = var2.bind(var5)(var3);
 515:
                        var2 = _closure3_slot0;
                        var2 = var2.disambiguatedEmoji;
                        if(!(var4 == var2)) { _fun0046_ip = 543; continue _fun0046 }
 529:
                        var4 = _closure3_slot0;
                        var2 = new Array(0);
                        var4['disambiguatedEmoji'] = var2;
 543:
                        var1 = _closure3_slot0;
                        var2 = var1.disambiguatedEmoji;
                        var1 = var2.push;
                        var1 = var1.bind(var2)(var3);
                        var1 = undefined;
                        return var1;
                    }
                };
                var _closure3_slot3 = var8;
                var1 = function disambiguateEmoticon(arg1) {
                    _fun0047: for(var _fun0047_ip = 0; ; ) switch(_fun0047_ip) {
 0:
                        var3 = arg1;
                        var1 = global;
                        var1 = var1.Object;
                        var1 = var1.prototype;
                        var6 = var1.hasOwnProperty;
                        var5 = var6.call;
                        var2 = _closure3_slot0;
                        var4 = var2.emoticonsByName;
                        var2 = var3.name;
                        var2 = var5.bind(var6)(var4, var2);
                        if(var2) { _fun0047_ip = 128; continue _fun0047 }
 54:
                        var5 = _closure3_slot2;
                        var4 = var5.push;
                        var7 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var2 = 38;
                        var6 = var6[var2];
                        var2 = undefined;
                        var7 = var7.bind(var2)(var6);
                        var6 = var7.escape;
                        var2 = var3.name;
                        var2 = var6.bind(var7)(var2);
                        var2 = var4.bind(var5)(var2);
                        var1 = _closure3_slot0;
                        var2 = var1.emoticonsByName;
                        var1 = var3.name;
                        var2[var1] = var3;
 128:
                        var1 = undefined;
                        return var1;
                    }
                };
                var _closure3_slot4 = var1;
                var7 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 22;
                var6 = var6[var1];
                var1 = undefined;
                var7 = var7.bind(var1)(var6);
                var6 = var7.forEach;
                var6 = var6.bind(var7)(var8);
                var7 = function addGuildEmoji(arg1) {
                    _fun0048: for(var _fun0048_ip = 0; ; ) switch(_fun0048_ip) {
 0:
                        var4 = arg1;
                        var2 = _closure1_slot36;
                        var3 = null;
                        if(!(var3 == var4)) { _fun0048_ip = 20; continue _fun0048 }
 16:
                        var4 = _closure1_slot23;
 20:
                        var2 = var2[var4];
                        if(!(var3 != var2)) { _fun0048_ip = 108; continue _fun0048 }
 28:
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var3 = 25;
                        var1 = var6[var3];
                        var4 = undefined;
                        var10 = var5.bind(var4)(var1);
                        var9 = var10.each;
                        var8 = var2.usableEmojis;
                        var7 = _closure3_slot3;
                        var7 = var9.bind(var10)(var8, var7);
                        var3 = var6[var3];
                        var4 = var5.bind(var4)(var3);
                        var3 = var4.each;
                        var2 = var2.emoticons;
                        var1 = _closure3_slot4;
                        var1 = var3.bind(var4)(var2, var1);
 108:
                        var1 = undefined;
                        return var1;
                    }
                };
                var _closure3_slot5 = var7;
                var6 = var3.guildId;
                var6 = var7.bind(var1)(var6);
                var11 = var3.newlyAddedEmoji;
                var7 = 0;
                var6 = 3;
                for(var8 in var11)
 300:
                {
 309:
                    var16 = var8;
                    var14 = var3.newlyAddedEmoji;
                    var14 = var14[var16];
                    if(!(var13 == var14)) { _fun0045_ip = 342; continue _fun0045 }
 326:
                    var15 = var3.newlyAddedEmoji;
                    var14 = new Array(0);
                    var15[var16] = var14;
                    _fun0045_ip = 300; continue _fun0045;
 342:
                    var15 = var3.newlyAddedEmoji;
                    var14 = var3.newlyAddedEmoji;
                    var18 = var14[var16];
                    var17 = var18.sort;
                    var14 = function(arg1, arg2) {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 26;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.compare;
                        var1 = arg2;
                        var2 = var1.id;
                        var1 = arg1;
                        var1 = var1.id;
                        var1 = var3.bind(var4)(var2, var1);
                        return var1;
                    };
                    var17 = var17.bind(var18)(var14);
                    var14 = var17.slice;
                    var14 = var14.bind(var17)(var7, var6);
                    var15[var16] = var14;
                    _fun0045_ip = 300; continue _fun0045;
                }
 391:
                var6 = _closure1_slot18;
                var4 = var6.getFlattenedGuildIds;
                var6 = var4.bind(var6)();
                var4 = var6.forEach;
                var2 = function(arg1) {
                    _fun0049: for(var _fun0049_ip = 0; ; ) switch(_fun0049_ip) {
 0:
                        var3 = arg1;
                        var2 = _closure3_slot0;
                        var2 = var2.guildId;
                        if(!(var3 !== var2)) { _fun0049_ip = 30; continue _fun0049 }
 19:
                        var2 = _closure3_slot5;
                        var1 = undefined;
                        var1 = var2.bind(var1)(var3);
 30:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2 = var4.bind(var6)(var2);
                var4 = var5.join;
                var2 = '|';
                var2 = var4.bind(var5)(var2);
                var3['escapedEmoticonNames'] = var2;
                return var1;
            }
        };
        var1['value'] = var2;
        var3[17] = var1;
        var1 = {};
        var2 = 'get';
        var1['key'] = var2;
        var2 = function value(arg1) {
            _fun0050: for(var _fun0050_ip = 0; ; ) switch(_fun0050_ip) {
 0:
                var2 = arg1;
                var1 = undefined;
                if(!(var1 === var2)) { _fun0050_ip = 11; continue _fun0050 }
 9:
                var2 = null;
 11:
                var3 = _closure2_slot0;
                var4 = var3._lastInstance;
                var3 = null;
                var3 = var3 != var4;
                if(!var3) { _fun0050_ip = 52; continue _fun0050 }
 33:
                var4 = _closure2_slot0;
                var4 = var4._lastInstance;
                var4 = var4.guildId;
                var3 = var4 === var2;
 52:
                if(var3) { _fun0050_ip = 88; continue _fun0050 }
 55:
                var3 = _closure2_slot0;
                var4 = var3.prototype;
                var4 = Object.create(var4, {constructor: {value: var3}});
                var6 = var4;
                var5 = var2;
                var2 = new var6[var3](var5, var4);
                var2 = var2 instanceof Object ? var2 : var4;
                var3['_lastInstance'] = var2;
 88:
                var1 = _closure2_slot0;
                var1 = var1._lastInstance;
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(6);
        var2[0] = var1;
        var1 = {};
        var7 = 'reset';
        var1['key'] = var7;
        var7 = function value() {
            var2 = _closure2_slot0;
            var1 = null;
            var2['_lastInstance'] = var1;
            var1 = undefined;
            return var1;
        };
        var1['value'] = var7;
        var2[1] = var1;
        var1 = {};
        var7 = 'resetFrequentlyUsed';
        var1['key'] = var7;
        var7 = function value() {
            _fun0051: for(var _fun0051_ip = 0; ; ) switch(_fun0051_ip) {
 0:
                var2 = _closure2_slot0;
                var3 = var2._lastInstance;
                var2 = null;
                if(!(var2 != var3)) { _fun0051_ip = 35; continue _fun0051 }
 19:
                var1 = _closure2_slot0;
                var1 = var1._lastInstance;
                var1['frequentlyUsed'] = var2;
 35:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var7;
        var2[2] = var1;
        var1 = {};
        var7 = 'resetFrequentlyUsedReactionEmojis';
        var1['key'] = var7;
        var7 = function value() {
            _fun0052: for(var _fun0052_ip = 0; ; ) switch(_fun0052_ip) {
 0:
                var2 = _closure2_slot0;
                var3 = var2._lastInstance;
                var2 = null;
                if(!(var2 != var3)) { _fun0052_ip = 35; continue _fun0052 }
 19:
                var1 = _closure2_slot0;
                var1 = var1._lastInstance;
                var1['frequentlyUsedReactionEmojis'] = var2;
 35:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var7;
        var2[3] = var1;
        var1 = {};
        var7 = 'resetFavorites';
        var1['key'] = var7;
        var7 = function value() {
            _fun0053: for(var _fun0053_ip = 0; ; ) switch(_fun0053_ip) {
 0:
                var2 = _closure2_slot0;
                var3 = var2._lastInstance;
                var2 = null;
                if(!(var2 != var3)) { _fun0053_ip = 47; continue _fun0053 }
 19:
                var1 = _closure2_slot0;
                var3 = var1._lastInstance;
                var3['favorites'] = var2;
                var1 = var1._lastInstance;
                var1['favoriteNamesAndIds'] = var2;
 47:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var7;
        var2[4] = var1;
        var1 = {};
        var7 = 'clear';
        var1['key'] = var7;
        var6 = function value(arg1) {
            _fun0054: for(var _fun0054_ip = 0; ; ) switch(_fun0054_ip) {
 0:
                var2 = _closure2_slot0;
                var3 = var2._lastInstance;
                var2 = null;
                var3 = var2 != var3;
                if(!var3) { _fun0054_ip = 44; continue _fun0054 }
 22:
                var4 = _closure2_slot0;
                var4 = var4._lastInstance;
                var5 = var4.guildId;
                var4 = arg1;
                var3 = var5 === var4;
 44:
                if(!var3) { _fun0054_ip = 57; continue _fun0054 }
 47:
                var1 = _closure2_slot0;
                var1['_lastInstance'] = var2;
 57:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[5] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var5, var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var _closure1_slot40 = var2;
    var2['_lastInstance'] = var5;
    var5 = var2.resetFrequentlyUsed;
    var5 = var10.bind(var1)(var5);
    var _closure1_slot41 = var5;
    var5 = var2.resetFrequentlyUsedReactionEmojis;
    var5 = var10.bind(var1)(var5);
    var _closure1_slot42 = var5;
    var5 = 44;
    var5 = var8[var5];
    var5 = var9.bind(var1)(var5);
    var10 = var5.PersistedStore;
    var5 = function(arg1) {
        var4 = function EmojiStore() {
            _fun0055: for(var _fun0055_ip = 0; ; ) switch(_fun0055_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot8;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot4;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot3;
                var1 = _closure1_slot43;
                var1 = var1.bind(var3)();
                if(var1) { _fun0055_ip = 69; continue _fun0055 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0055_ip = 105; continue _fun0055;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot4;
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
        var5 = _closure1_slot5;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot9;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0056: for(var _fun0056_ip = 0; ; ) switch(_fun0056_ip) {
 0:
                var3 = arg1;
                var5 = this;
                var15 = var5.waitFor;
                var6 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 28;
                var4 = var4[var1];
                var1 = undefined;
                var25 = var6.bind(var1)(var4);
                var24 = _closure1_slot15;
                var23 = _closure1_slot14;
                var22 = _closure1_slot17;
                var21 = _closure1_slot12;
                var20 = _closure1_slot11;
                var19 = _closure1_slot20;
                var18 = _closure1_slot19;
                var17 = _closure1_slot10;
                var16 = _closure1_slot16;
                var26 = var5;
                var4 = var26[var15](var25, var24, var23, var22, var21, var20, var19, var18, var17, var16, var15);
                var6 = null;
                if(!(var6 != var3)) { _fun0056_ip = 192; continue _fun0056 }
 86:
                var4 = var3.pendingUsages;
                if(!(var6 != var4)) { _fun0056_ip = 112; continue _fun0056 }
 96:
                var7 = _closure1_slot28;
                var4 = var3.pendingUsages;
                var7['pendingUsages'] = var4;
 112:
                var4 = var3.emojiReactionPendingUsages;
                if(!(var6 != var4)) { _fun0056_ip = 138; continue _fun0056 }
 122:
                var7 = _closure1_slot28;
                var4 = var3.emojiReactionPendingUsages;
                var7['emojiReactionPendingUsages'] = var4;
 138:
                var4 = var3.expandedSectionsByGuildIds;
                if(!(var6 != var4)) { _fun0056_ip = 192; continue _fun0056 }
 148:
                var4 = _closure1_slot28;
                var6 = global;
                var7 = var6.Set;
                var25 = var3.expandedSectionsByGuildIds;
                var6 = var7.prototype;
                var6 = Object.create(var6, {constructor: {value: var7}});
                var26 = var6;
                var3 = new var26[var7](var25, var24);
                var3 = var3 instanceof Object ? var3 : var6;
                var4['expandedSectionsByGuildIds'] = var3;
 192:
                var6 = var5.syncWith;
                var3 = _closure1_slot13;
                var4 = new Array(1);
                var4[0] = var3;
                var3 = _closure1_slot54;
                var3 = var6.bind(var5)(var4, var3);
                var4 = var5.syncWith;
                var6 = _closure1_slot10;
                var3 = new Array(1);
                var3[0] = var6;
                var2 = _closure1_slot55;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(23);
        var1[0] = var5;
        var5 = {};
        var7 = 'getState';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot28;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'loadState';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot34;
            return var1;
        };
        var5['get'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'hasPendingUsage';
        var5['key'] = var7;
        var7 = function value() {
            _fun0057: for(var _fun0057_ip = 0; ; ) switch(_fun0057_ip) {
 0:
                var1 = _closure1_slot28;
                var1 = var1.pendingUsages;
                var1 = var1.length;
                var3 = 0;
                var1 = var1 > var3;
                if(var1) { _fun0057_ip = 46; continue _fun0057 }
 27:
                var2 = _closure1_slot28;
                var2 = var2.emojiReactionPendingUsages;
                var2 = var2.length;
                var1 = var2 > var3;
 46:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'expandedSectionsByGuildIds';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot28;
            var1 = var1.expandedSectionsByGuildIds;
            return var1;
        };
        var5['get'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'categories';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot35;
            return var1;
        };
        var5['get'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'diversitySurrogate';
        var5['key'] = var7;
        var7 = function get() {
            _fun0058: for(var _fun0058_ip = 0; ; ) switch(_fun0058_ip) {
 0:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 22;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.getDefaultDiversitySurrogate;
                var2 = var1.bind(var2)();
                var1 = null;
                var3 = var1 != var2;
                var1 = '';
                if(!var3) { _fun0058_ip = 51; continue _fun0058 }
 48:
                var1 = var2;
 51:
                return var1;
            }
        };
        var5['get'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'emojiFrecencyWithoutFetchingLatest';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot41;
            return var1;
        };
        var5['get'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'emojiReactionFrecencyWithoutFetchingLatest';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot42;
            return var1;
        };
        var5['get'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'getGuildEmoji';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0059: for(var _fun0059_ip = 0; ; ) switch(_fun0059_ip) {
 0:
                var6 = arg1;
                var3 = _closure1_slot48;
                var1 = undefined;
                var3 = var3.bind(var1)();
                var3 = null;
                var5 = var3 == var6;
                var4 = undefined;
                if(var5) { _fun0059_ip = 35; continue _fun0059 }
 27:
                var5 = _closure1_slot36;
                var4 = var5[var6];
 35:
                var5 = var3 == var4;
                var1 = undefined;
                if(var5) { _fun0059_ip = 50; continue _fun0059 }
 44:
                var1 = var4.emojis;
 50:
                if(!(var3 == var1)) { _fun0059_ip = 58; continue _fun0059 }
 54:
                var1 = _closure1_slot32;
 58:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'getUsableGuildEmoji';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0060: for(var _fun0060_ip = 0; ; ) switch(_fun0060_ip) {
 0:
                var3 = _closure1_slot48;
                var1 = undefined;
                var3 = var3.bind(var1)();
                var4 = _closure1_slot36;
                var3 = arg1;
                var4 = var4[var3];
                var3 = null;
                var5 = var3 == var4;
                if(var5) { _fun0060_ip = 39; continue _fun0060 }
 33:
                var1 = var4.usableEmojis;
 39:
                if(!(var3 == var1)) { _fun0060_ip = 47; continue _fun0060 }
 43:
                var1 = _closure1_slot32;
 47:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'getGuilds';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot36;
            return var1;
        };
        var5['value'] = var7;
        var1[11] = var5;
        var5 = {};
        var7 = 'getDisambiguatedEmojiContext';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot48;
            var2 = undefined;
            var2 = var3.bind(var2)();
            var3 = _closure1_slot40;
            var2 = var3.get;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[12] = var5;
        var5 = {};
        var7 = 'getSearchResultsOrder';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0061: for(var _fun0061_ip = 0; ; ) switch(_fun0061_ip) {
 0:
                var8 = arg1;
                var3 = arg2;
                var5 = arg3;
                var2 = arg4;
                var _closure3_slot0 = var2;
                var2 = var3.toLowerCase;
                var10 = var2.bind(var3)();
                var _closure3_slot1 = var10;
                var4 = _closure1_slot1;
                var6 = _closure1_slot2;
                var3 = 38;
                var3 = var6[var3];
                var7 = undefined;
                var9 = var4.bind(var7)(var3);
                var3 = var9.escape;
                var13 = var3.bind(var9)(var10);
                var3 = 40;
                var3 = var6[var3];
                var11 = var4.bind(var7)(var3);
                var10 = var11.getCurrentConfig;
                var4 = {};
                var9 = 'getSearchResultsOrder';
                var4['location'] = var9;
                var3 = {};
                var12 = true;
                var3['autoTrackExposure'] = var12;
                var3 = var10.bind(var11)(var4, var3);
                var3 = var3.canSplitFrecencyList;
                var _closure3_slot2 = var3;
                var4 = _closure1_slot0;
                var3 = 36;
                var10 = var6[var3];
                var12 = var4.bind(var7)(var10);
                var11 = var12.getCanUseReactionFrecency;
                var10 = {'location': 'getSearchResultsOrder', 'autoTrackExposure': true};
                var10 = var11.bind(var12)(var10);
                var _closure3_slot3 = var10;
                var3 = var6[var3];
                var3 = var4.bind(var7)(var3);
                var6 = var3.RetriggerReactionFrecencyAlgorithmsExperiment;
                var4 = var6.trackExposure;
                var3 = {};
                var3['location'] = var9;
                var3 = var4.bind(var6)(var3);
                var6 = var8.length;
                var4 = 0;
                var3 = var8;
                if(!(var6 > var4)) { _fun0061_ip = 434; continue _fun0061 }
 215:
                var6 = global;
                var12 = var6.RegExp;
                var9 = var6.HermesInternal;
                var10 = var9.concat;
                var9 = '^';
                var16 = var10.bind(var9)(var13);
                var9 = var12.prototype;
                var10 = Object.create(var9, {constructor: {value: var12}});
                var15 = 'i';
                var17 = var10;
                var9 = new var17[var12](var16, var15, var14);
                var10 = var9 instanceof Object ? var9 : var10;
                var11 = var6.RegExp;
                var6 = var6.HermesInternal;
                var12 = var6.concat;
                var9 = '(^|_|[A-Z])';
                var6 = 's?([A-Z]|_|$)';
                var16 = var12.bind(var9)(var13, var6);
                var9 = var11.prototype;
                var9 = Object.create(var9, {constructor: {value: var11}});
                var17 = var9;
                var6 = new var17[var11](var16, var15);
                var11 = var6 instanceof Object ? var6 : var9;
                var9 = var11.test;
                var6 = var9.bind;
                var6 = var6.bind(var9)(var11);
                var _closure3_slot4 = var6;
                var9 = var10.test;
                var6 = var9.bind;
                var6 = var6.bind(var9)(var10);
                var _closure3_slot5 = var6;
                var6 = function score(arg1) {
                    _fun0062: for(var _fun0062_ip = 0; ; ) switch(_fun0062_ip) {
 0:
                        var9 = arg1;
                        var6 = arguments[1];
                        var8 = undefined;
                        if(!(var6 === var8)) { _fun0062_ip = 15; continue _fun0062 }
 12:
                        var6 = var9;
 15:
                        var2 = null;
                        if(!(var2 != var9)) { _fun0062_ip = 205; continue _fun0062 }
 24:
                        if(!(var2 != var6)) { _fun0062_ip = 205; continue _fun0062 }
 31:
                        var1 = var9.toLowerCase;
                        var5 = var1.bind(var9)();
                        var1 = _closure3_slot1;
                        var7 = 0;
                        if(!(var5 === var1)) { _fun0062_ip = 57; continue _fun0062 }
 54:
                        var7 = 4;
 57:
                        var1 = _closure3_slot4;
                        var1 = var1.bind(var8)(var5);
                        if(var1) { _fun0062_ip = 83; continue _fun0062 }
 69:
                        var1 = _closure3_slot4;
                        var1 = var1.bind(var8)(var9);
                        var5 = 0;
                        if(!var1) { _fun0062_ip = 86; continue _fun0062 }
 83:
                        var5 = 2;
 86:
                        var1 = _closure3_slot5;
                        var1 = var1.bind(var8)(var9);
                        var3 = 0;
                        if(!var1) { _fun0062_ip = 103; continue _fun0062 }
 100:
                        var3 = 1;
 103:
                        var1 = 1;
                        var1 = var1 + var7;
                        var1 = var1 + var5;
                        var3 = var1 + var3;
                        var7 = _closure3_slot0;
                        var5 = _closure1_slot22;
                        var5 = var5.REACTION;
                        if(!(var7 === var5)) { _fun0062_ip = 153; continue _fun0062 }
 139:
                        var5 = _closure3_slot2;
                        if(var5) { _fun0062_ip = 170; continue _fun0062 }
 146:
                        var4 = _closure3_slot3;
                        if(var4) { _fun0062_ip = 170; continue _fun0062 }
 153:
                        var5 = _closure1_slot41;
                        var4 = var5.getScore;
                        var4 = var4.bind(var5)(var6);
                        _fun0062_ip = 185; continue _fun0062;
 170:
                        var5 = _closure1_slot42;
                        var1 = var5.getScore;
                        var4 = var1.bind(var5)(var6);
 185:
                        var1 = var3;
                        if(!(var2 != var4)) { _fun0062_ip = 203; continue _fun0062 }
 192:
                        var2 = 100;
                        var2 = var4 / var2;
                        var1 = var3 * var2;
 203:
                        return var1;
 205:
                        var1 = 0;
                        return var1;
                    }
                };
                var _closure3_slot6 = var6;
                var6 = _closure1_slot1;
                var9 = _closure1_slot2;
                var2 = 25;
                var2 = var9[var2];
                var7 = var6.bind(var7)(var2);
                var6 = var7.orderBy;
                var2 = new Array(2);
                var9 = function(arg1) {
                    _fun0063: for(var _fun0063_ip = 0; ; ) switch(_fun0063_ip) {
 0:
                        var2 = arg1;
                        var3 = var2.names;
                        var1 = null;
                        if(!(var1 == var3)) { _fun0063_ip = 41; continue _fun0063 }
 14:
                        var5 = _closure3_slot6;
                        var4 = var2.name;
                        var3 = var2.id;
                        var1 = undefined;
                        var1 = var5.bind(var1)(var4, var3);
                        _fun0063_ip = 66; continue _fun0063;
 41:
                        var4 = _closure3_slot6;
                        var3 = var2.names;
                        var2 = 0;
                        var3 = var3[var2];
                        var2 = undefined;
                        var1 = var4.bind(var2)(var3);
 66:
                        return var1;
                    }
                };
                var2[0] = var9;
                var1 = function(arg1) {
                    _fun0064: for(var _fun0064_ip = 0; ; ) switch(_fun0064_ip) {
 0:
                        var2 = arg1;
                        var3 = var2.names;
                        var1 = null;
                        if(!(var1 == var3)) { _fun0064_ip = 21; continue _fun0064 }
 14:
                        var1 = var2.name;
                        _fun0064_ip = 32; continue _fun0064;
 21:
                        var3 = var2.names;
                        var2 = 0;
                        var1 = var3[var2];
 32:
                        return var1;
                    }
                };
                var2[1] = var1;
                var1 = ['desc', 'asc'];
                var3 = var6.bind(var7)(var8, var2, var1);
 434:
                var1 = var3;
                if(!(var5 > var4)) { _fun0061_ip = 452; continue _fun0061 }
 441:
                var2 = var3.slice;
                var1 = var2.bind(var3)(var4, var5);
 452:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[13] = var5;
        var5 = {};
        var7 = 'searchWithoutFetchingLatest';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0065: for(var _fun0065_ip = 0; ; ) switch(_fun0065_ip) {
 0:
                var2 = arg1;
                var7 = this;
                var10 = var2.channel;
                var _closure3_slot0 = var10;
                var6 = var2.query;
                var8 = var2.count;
                var13 = undefined;
                if(!(var8 === var13)) { _fun0065_ip = 36; continue _fun0065 }
 34:
                var8 = 0;
 36:
                var5 = var2.intention;
                var _closure3_slot1 = var5;
                var3 = var2.includeExternalGuilds;
                if(!(var3 === var13)) { _fun0065_ip = 58; continue _fun0065 }
 56:
                var3 = true;
 58:
                var _closure3_slot2 = var3;
                var4 = var2.matchComparator;
                var2 = var2.showOnlyUnicode;
                var _closure3_slot3 = var2;
                var _closure3_slot4 = var13;
                var3 = _closure1_slot48;
                var3 = var3.bind(var13)();
                var3 = var6.toLowerCase;
                var11 = var3.bind(var6)();
                var9 = var11.replaceAll;
                var3 = /[ _]/g;
                var12 = '';
                var11 = var9.bind(var11)(var3, var12);
                var9 = _closure1_slot1;
                var14 = _closure1_slot2;
                var3 = 38;
                var3 = var14[var3];
                var9 = var9.bind(var13)(var3);
                var3 = var9.escape;
                var11 = var3.bind(var9)(var11);
                var9 = null;
                if(!(var9 == var4)) { _fun0065_ip = 227; continue _fun0065 }
 170:
                var3 = global;
                var13 = var3.RegExp;
                var3 = var3.HermesInternal;
                var3 = var3.concat;
                var18 = var3.bind(var12)(var11);
                var3 = var13.prototype;
                var11 = Object.create(var3, {constructor: {value: var13}});
                var17 = 'i';
                var19 = var11;
                var3 = new var19[var13](var18, var17, var16);
                var3 = var3 instanceof Object ? var3 : var11;
                _closure3_slot4 = var3;
                var4 = function r(arg1) {
                    var6 = arg1;
                    var3 = _closure3_slot4;
                    var2 = var3.test;
                    var5 = var6.replaceAll;
                    var4 = '_';
                    var1 = '';
                    var1 = var5.bind(var6)(var4, var1);
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
 227:
                var3 = var9 != var10;
                var9 = null;
                if(!var3) { _fun0065_ip = 246; continue _fun0065 }
 236:
                var3 = var10.getGuildId;
                var9 = var3.bind(var10)();
 246:
                var3 = _closure1_slot40;
                var2 = var3.get;
                var3 = var2.bind(var3)(var9);
                var2 = var3.nameMatchesChain;
                var4 = var2.bind(var3)(var4);
                var3 = var4.reduce;
                var2 = {};
                var9 = new Array(0);
                var2['unlocked'] = var9;
                var9 = new Array(0);
                var2['locked'] = var9;
                var1 = function(arg1, arg2) {
                    _fun0066: for(var _fun0066_ip = 0; ; ) switch(_fun0066_ip) {
 0:
                        var1 = arg1;
                        var4 = arg2;
                        var3 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var2 = 43;
                        var2 = var6[var2];
                        var8 = undefined;
                        var7 = var3.bind(var8)(var2);
                        var6 = var7.getEmojiUnavailableReason;
                        var2 = {};
                        var2['emoji'] = var4;
                        var9 = _closure3_slot0;
                        var2['channel'] = var9;
                        var9 = _closure3_slot1;
                        var2['intention'] = var9;
                        var9 = _closure3_slot2;
                        var2['forceIncludeExternalGuilds'] = var9;
                        var6 = var6.bind(var7)(var2);
                        var2 = _closure1_slot21;
                        var2 = var2.PREMIUM_LOCKED;
                        if(!(var6 === var2)) { _fun0066_ip = 117; continue _fun0066 }
 92:
                        var2 = _closure3_slot3;
                        if(var2) { _fun0066_ip = 117; continue _fun0066 }
 99:
                        var7 = var1.locked;
                        var2 = var7.push;
                        var2 = var2.bind(var7)(var4);
                        _fun0066_ip = 196; continue _fun0066;
 117:
                        var2 = null;
                        var2 = var2 != var6;
                        if(var2) { _fun0066_ip = 177; continue _fun0066 }
 126:
                        var3 = _closure3_slot3;
                        if(!var3) { _fun0066_ip = 174; continue _fun0066 }
 133:
                        var6 = var4.type;
                        var7 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var5 = 24;
                        var5 = var9[var5];
                        var5 = var7.bind(var8)(var5);
                        var5 = var5.EmojiTypes;
                        var5 = var5.UNICODE;
                        var3 = var6 !== var5;
 174:
                        var2 = var3;
 177:
                        if(var2) { _fun0066_ip = 196; continue _fun0066 }
 180:
                        var3 = var1.unlocked;
                        var2 = var3.push;
                        var2 = var2.bind(var3)(var4);
 196:
                        return var1;
                    }
                };
                var2 = var3.bind(var4)(var1, var2);
                var1 = {};
                var4 = var7.getSearchResultsOrder;
                var18 = var2.unlocked;
                var19 = var7;
                var17 = var6;
                var16 = var8;
                var15 = var5;
                var3 = var19[var4](var18, var17, var16, var15, var14);
                var1['unlocked'] = var3;
                var4 = var7.getSearchResultsOrder;
                var18 = var2.locked;
                var16 = 0;
                var19 = var7;
                var17 = var6;
                var15 = var5;
                var2 = var19[var4](var18, var17, var16, var15, var14);
                var1['locked'] = var2;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[14] = var5;
        var5 = {};
        var7 = 'getUsableCustomEmojiById';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = _closure1_slot48;
            var3 = undefined;
            var2 = var2.bind(var3)();
            var2 = _closure1_slot46;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[15] = var5;
        var5 = {};
        var7 = 'getCustomEmojiById';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0067: for(var _fun0067_ip = 0; ; ) switch(_fun0067_ip) {
 0:
                var7 = arg1;
                var1 = _closure1_slot48;
                var4 = undefined;
                var1 = var1.bind(var4)();
                var1 = _closure1_slot47;
                var1 = var1.bind(var4)();
                var5 = var1[var7];
                var3 = null;
                var6 = var3 != var5;
                var1 = undefined;
                if(!var6) { _fun0067_ip = 79; continue _fun0067 }
 39:
                var2 = _closure1_slot36;
                var6 = var2[var5];
                var5 = var3 == var6;
                var2 = undefined;
                if(var5) { _fun0067_ip = 67; continue _fun0067 }
 56:
                var5 = var6.getEmoji;
                var2 = var5.bind(var6)(var7);
 67:
                var3 = var3 != var2;
                var1 = undefined;
                if(!var3) { _fun0067_ip = 79; continue _fun0067 }
 76:
                var1 = var2;
 79:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[16] = var5;
        var5 = {};
        var7 = 'getTopEmoji';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0068: for(var _fun0068_ip = 0; ; ) switch(_fun0068_ip) {
 0:
                var3 = arg1;
                var1 = null;
                if(!(var1 != var3)) { _fun0068_ip = 51; continue _fun0068 }
 9:
                var4 = _closure1_slot48;
                var2 = undefined;
                var2 = var4.bind(var2)();
                var2 = _closure1_slot40;
                var1 = var2.get;
                var2 = var1.bind(var2)(var3);
                var1 = var2.getTopEmojiWithoutFetchingLatest;
                var1 = var1.bind(var2)(var3);
                _fun0068_ip = 58; continue _fun0068;
 51:
                var1 = _closure1_slot31;
 58:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[17] = var5;
        var5 = {};
        var7 = 'getNewlyAddedEmoji';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0069: for(var _fun0069_ip = 0; ; ) switch(_fun0069_ip) {
 0:
                var3 = arg1;
                var1 = null;
                if(!(var1 != var3)) { _fun0069_ip = 49; continue _fun0069 }
 9:
                var4 = _closure1_slot48;
                var2 = undefined;
                var2 = var4.bind(var2)();
                var2 = _closure1_slot40;
                var1 = var2.get;
                var2 = var1.bind(var2)(var3);
                var1 = var2.getNewlyAddedEmojiForGuild;
                var1 = var1.bind(var2)(var3);
                _fun0069_ip = 56; continue _fun0069;
 49:
                var1 = _closure1_slot31;
 56:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[18] = var5;
        var5 = {};
        var7 = 'getTopEmojisMetadata';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot39;
            var2 = var3.get;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[19] = var5;
        var5 = {};
        var7 = 'getEmojiAutosuggestion';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0070: for(var _fun0070_ip = 0; ; ) switch(_fun0070_ip) {
 0:
                var3 = this;
                var2 = _closure1_slot38;
                var1 = null;
                if(!(var1 != var2)) { _fun0070_ip = 31; continue _fun0070 }
 16:
                var1 = _closure1_slot38;
                var1 = var1.length;
                var4 = 0;
                if(!(!(var1 > var4))) { _fun0070_ip = 37; continue _fun0070 }
 31:
                var1 = new Array(0);
                return var1;
 37:
                var2 = var3.searchWithoutFetchingLatest;
                var1 = {};
                var6 = arg1;
                var1['channel'] = var6;
                var6 = 10;
                var1['count'] = var6;
                var6 = _closure1_slot38;
                var1['query'] = var6;
                var5 = _closure1_slot22;
                var5 = var5.CHAT;
                var1['intention'] = var5;
                var1 = var2.bind(var3)(var1);
                var6 = var1.locked;
                var2 = var1.unlocked;
                var1 = var2.slice;
                var3 = 5;
                var8 = var1.bind(var2)(var4, var3);
                var2 = new Array(0);
                var9 = var2;
                var7 = 0;
                var7 = arraySpread(var9, var8, var7);
                var1 = var6.slice;
                var8 = var1.bind(var6)(var4, var3);
                var9 = var2;
                var1 = arraySpread(var9, var8, var7);
                var1 = var2.slice;
                var1 = var1.bind(var2)(var4, var3);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[20] = var5;
        var5 = {};
        var7 = 'hasUsableEmojiInAnyGuild';
        var5['key'] = var7;
        var7 = function value() {
            var2 = _closure1_slot48;
            var4 = undefined;
            var2 = var2.bind(var4)();
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 26;
            var2 = var5[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.keys;
            var1 = _closure1_slot36;
            var3 = var2.bind(var3)(var1);
            var2 = var3.some;
            var1 = function(arg1) {
                var2 = _closure1_slot36;
                var1 = arg1;
                var1 = var2[var1];
                var1 = var1.usableEmojis;
                var2 = var1.length;
                var1 = 0;
                var1 = var2 > var1;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[21] = var5;
        var5 = {};
        var7 = 'hasFavoriteEmojis';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0071: for(var _fun0071_ip = 0; ; ) switch(_fun0071_ip) {
 0:
                var3 = _closure1_slot40;
                var2 = var3.get;
                var1 = arg1;
                var2 = var2.bind(var3)(var1);
                var1 = null;
                var1 = var1 != var2;
                if(!var1) { _fun0071_ip = 46; continue _fun0071 }
 29:
                var2 = var2.favoriteEmojisWithoutFetchingLatest;
                var3 = var2.length;
                var2 = 0;
                var1 = var3 > var2;
 46:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[22] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var10 = var5.bind(var1)(var10);
    var5 = 'EmojiStore';
    var10['displayName'] = var5;
    var5 = 'EmojiStoreV2';
    var10['persistKey'] = var5;
    var5 = new Array(1);
    var12 = function(arg1) {
        var1 = {};
        var3 = arg1;
        var4 = var1;
        var2 = copyDataProperties(var4, var3);
        return var1;
    };
    var5[0] = var12;
    var10['migrations'] = var5;
    var5 = 32;
    var5 = var8[var5];
    var22 = var9.bind(var1)(var5);
    var5 = {};
    var12 = function handleLogout() {
        var3 = _closure1_slot28;
        var2 = new Array(0);
        var3['pendingUsages'] = var2;
        var2 = _closure1_slot28;
        var1 = new Array(0);
        var2['emojiReactionPendingUsages'] = var1;
        var1 = undefined;
        return var1;
    };
    var5['LOGOUT'] = var12;
    var12 = function handleBackgroundSync() {
        var2 = _closure1_slot50;
        var1 = undefined;
        var2 = var2.bind(var1)();
        return var1;
    };
    var5['BACKGROUND_SYNC'] = var12;
    var12 = function handleConnectionOpen(arg1) {
        _fun0072: for(var _fun0072_ip = 0; ; ) switch(_fun0072_ip) {
 0:
            var3 = arg1;
            var4 = _closure1_slot50;
            var1 = undefined;
            var4 = var4.bind(var1)();
            var5 = _closure1_slot44;
            var4 = var3.guilds;
            var6 = var5.bind(var1)(var4);
            var5 = var6.bind(var1)();
            var4 = var5.done;
            if(var4) { _fun0072_ip = 90; continue _fun0072 }
 43:
            var4 = var5.value;
            var8 = _closure1_slot53;
            var7 = var4.id;
            var4 = var4.emojis;
            var4 = var4.items;
            var4 = var8.bind(var1)(var7, var4);
            var7 = var6.bind(var1)();
            var4 = var7.done;
            var5 = var7;
            if(!var4) { _fun0072_ip = 43; continue _fun0072 }
 90:
            var5 = var3.guilds;
            var4 = var5.every;
            var3 = function(arg1) {
                var1 = arg1;
                var1 = var1.emojis;
                var2 = var1.items;
                var1 = null;
                var1 = var1 != var2;
                return var1;
            };
            var3 = var4.bind(var5)(var3);
            var4 = _closure1_slot33;
            if(var3) { _fun0072_ip = 129; continue _fun0072 }
 121:
            var3 = var4.Unloaded;
            _fun0072_ip = 135; continue _fun0072;
 129:
            var3 = var4.MaybeLoaded;
 135:
            _closure1_slot34 = var3;
            var2 = _closure1_slot52;
            var2 = var2.bind(var1)();
            return var1;
        }
    };
    var5['CONNECTION_OPEN'] = var12;
    var12 = function handleOverlayInitialize(arg1) {
        _fun0073: for(var _fun0073_ip = 0; ; ) switch(_fun0073_ip) {
 0:
            var8 = arg1;
            var3 = _closure1_slot50;
            var1 = undefined;
            var3 = var3.bind(var1)();
            var6 = var8.emojis;
            for(var3 in var6)
 30:
            {
 39:
                var11 = var3;
                var10 = _closure1_slot53;
                var9 = var8.emojis;
                var9 = var9[var11];
                var9 = var10.bind(var1)(var11, var9);
                _fun0073_ip = 30; continue _fun0073;
            }
 64:
            var3 = _closure1_slot33;
            var3 = var3.MaybeLoaded;
            _closure1_slot34 = var3;
            var2 = _closure1_slot52;
            var2 = var2.bind(var1)();
            return var1;
        }
    };
    var5['OVERLAY_INITIALIZE'] = var12;
    var12 = function handleCachedEmojisLoaded(arg1) {
        _fun0074: for(var _fun0074_ip = 0; ; ) switch(_fun0074_ip) {
 0:
            var1 = arg1;
            var4 = var1.emojis;
            var3 = _closure1_slot44;
            var1 = undefined;
            var9 = var3.bind(var1)(var4);
            var4 = var9.bind(var1)();
            var3 = var4.done;
            var8 = 2;
            var7 = 0;
            var6 = 1;
            var5 = global;
            if(var3) { _fun0074_ip = 139; continue _fun0074 }
 45:
            var10 = var4.value;
            var3 = _closure1_slot6;
            var3 = var3.bind(var1)(var10, var8);
            var11 = var3[var7];
            var10 = var3[var6];
            var13 = var5.Object;
            var12 = var13.hasOwn;
            var3 = _closure1_slot36;
            var3 = var12.bind(var13)(var3, var11);
            var3 = !var3;
            if(!var3) { _fun0074_ip = 111; continue _fun0074 }
 96:
            var13 = _closure1_slot15;
            var12 = var13.isMember;
            var3 = var12.bind(var13)(var11);
 111:
            if(!var3) { _fun0074_ip = 124; continue _fun0074 }
 114:
            var3 = _closure1_slot53;
            var3 = var3.bind(var1)(var11, var10);
 124:
            var10 = var9.bind(var1)();
            var3 = var10.done;
            var4 = var10;
            if(!var3) { _fun0074_ip = 45; continue _fun0074 }
 139:
            var2 = _closure1_slot52;
            var2 = var2.bind(var1)();
            return var1;
        }
    };
    var5['CACHED_EMOJIS_LOADED'] = var12;
    var12 = function handleGuildMemberUpdate(arg1) {
        _fun0075: for(var _fun0075_ip = 0; ; ) switch(_fun0075_ip) {
 0:
            var1 = arg1;
            var5 = var1.guildId;
            var1 = var1.user;
            var6 = var1.id;
            var3 = _closure1_slot19;
            var1 = var3.getCurrentUser;
            var7 = var1.bind(var3)();
            var3 = null;
            var8 = var3 == var7;
            var1 = undefined;
            var4 = undefined;
            if(var8) { _fun0075_ip = 52; continue _fun0075 }
 47:
            var4 = var7.id;
 52:
            if(!(var6 === var4)) { _fun0075_ip = 97; continue _fun0075 }
 56:
            var4 = _closure1_slot36;
            var6 = var4[var5];
            var4 = _closure1_slot53;
            var7 = var3 == var6;
            var3 = undefined;
            if(var7) { _fun0075_ip = 83; continue _fun0075 }
 77:
            var3 = var6.usableEmojis;
 83:
            var3 = var4.bind(var1)(var5, var3);
            var2 = _closure1_slot52;
            var2 = var2.bind(var1)();
 97:
            return var1;
        }
    };
    var5['GUILD_MEMBER_UPDATE'] = var12;
    var12 = function handleGuildCreate(arg1) {
        _fun0076: for(var _fun0076_ip = 0; ; ) switch(_fun0076_ip) {
 0:
            var1 = arg1;
            var4 = _closure1_slot34;
            var3 = _closure1_slot33;
            var3 = var3.MaybeLoaded;
            var3 = var4 === var3;
            if(!var3) { _fun0076_ip = 51; continue _fun0076 }
 27:
            var4 = var1.guild;
            var4 = var4.emojis;
            var5 = var4.op;
            var4 = 'update';
            var3 = var4 === var5;
 51:
            if(!var3) { _fun0076_ip = 77; continue _fun0076 }
 54:
            var4 = var1.guild;
            var4 = var4.emojis;
            var5 = var4.items;
            var4 = null;
            var3 = var4 == var5;
 77:
            if(!var3) { _fun0076_ip = 94; continue _fun0076 }
 80:
            var3 = _closure1_slot33;
            var3 = var3.Unloaded;
            _closure1_slot34 = var3;
 94:
            var5 = _closure1_slot53;
            var3 = var1.guild;
            var4 = var3.id;
            var1 = var1.guild;
            var1 = var1.emojis;
            var3 = var1.items;
            var1 = undefined;
            var3 = var5.bind(var1)(var4, var3);
            var2 = _closure1_slot52;
            var2 = var2.bind(var1)();
            return var1;
        }
    };
    var5['GUILD_CREATE'] = var12;
    var12 = function handleGuildUpdate(arg1) {
        var1 = arg1;
        var5 = _closure1_slot53;
        var3 = var1.guild;
        var4 = var3.id;
        var1 = var1.guild;
        var3 = var1.emojis;
        var1 = undefined;
        var3 = var5.bind(var1)(var4, var3);
        var2 = _closure1_slot52;
        var2 = var2.bind(var1)();
        return var1;
    };
    var5['GUILD_UPDATE'] = var12;
    var12 = function handleGuildEmojiUpdated(arg1) {
        var1 = arg1;
        var5 = var1.guildId;
        var4 = var1.emojis;
        var3 = _closure1_slot53;
        var1 = undefined;
        var3 = var3.bind(var1)(var5, var4);
        var2 = _closure1_slot52;
        var2 = var2.bind(var1)();
        return var1;
    };
    var5['GUILD_EMOJIS_UPDATE'] = var12;
    var12 = function handleGuildDelete(arg1) {
        var1 = arg1;
        var3 = var1.guild;
        var5 = _closure1_slot51;
        var4 = var3.id;
        var1 = undefined;
        var4 = var5.bind(var1)(var4);
        var5 = _closure1_slot39;
        var4 = var5.delete;
        var3 = var3.id;
        var3 = var4.bind(var5)(var3);
        var2 = _closure1_slot52;
        var2 = var2.bind(var1)();
        return var1;
    };
    var5['GUILD_DELETE'] = var12;
    var12 = function handleAddReaction(arg1) {
        _fun0077: for(var _fun0077_ip = 0; ; ) switch(_fun0077_ip) {
 0:
            var2 = arg1;
            var1 = var2.optimistic;
            if(var1) { _fun0077_ip = 16; continue _fun0077 }
 12:
            var1 = false;
            return var1;
 16:
            var1 = var2.emoji;
            var1 = var1.id;
            var9 = null;
            if(!(var9 != var1)) { _fun0077_ip = 54; continue _fun0077 }
 33:
            var1 = var2.emoji;
            var3 = var1.id;
            var1 = '0';
            if(!(var1 === var3)) { _fun0077_ip = 126; continue _fun0077 }
 54:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 22;
            var3 = var7[var1];
            var5 = undefined;
            var4 = var6.bind(var5)(var3);
            var3 = var4.getByName;
            var1 = var7[var1];
            var7 = var6.bind(var5)(var1);
            var6 = var7.convertSurrogateToName;
            var1 = var2.emoji;
            var5 = var1.name;
            var1 = false;
            var1 = var6.bind(var7)(var5, var1);
            var1 = var3.bind(var4)(var1);
            _fun0077_ip = 132; continue _fun0077;
 126:
            var1 = var2.emoji;
 132:
            if(!(var9 != var1)) { _fun0077_ip = 390; continue _fun0077 }
 139:
            var3 = new Array(1);
            var3[0] = var1;
            if(!(var9 != var3)) { _fun0077_ip = 366; continue _fun0077 }
 154:
            var4 = _closure1_slot44;
            var8 = undefined;
            var7 = var4.bind(var8)(var3);
            var5 = var7.bind(var8)();
            var4 = var5.done;
            var6 = global;
            if(var4) { _fun0077_ip = 290; continue _fun0077 }
 182:
            var4 = var5.value;
            var12 = var4.id;
            if(!(var9 == var12)) { _fun0077_ip = 202; continue _fun0077 }
 196:
            var12 = var4.uniqueName;
 202:
            if(!(var9 == var12)) { _fun0077_ip = 211; continue _fun0077 }
 206:
            var12 = var4.name;
 211:
            if(!(var9 != var12)) { _fun0077_ip = 275; continue _fun0077 }
 215:
            var10 = _closure1_slot42;
            var4 = var10.track;
            var4 = var4.bind(var10)(var12);
            var4 = _closure1_slot28;
            var11 = var4.emojiReactionPendingUsages;
            var10 = var11.push;
            var4 = {};
            var4['key'] = var12;
            var13 = var6.Date;
            var12 = var13.now;
            var12 = var12.bind(var13)();
            var4['timestamp'] = var12;
            var4 = var10.bind(var11)(var4);
 275:
            var10 = var7.bind(var8)();
            var4 = var10.done;
            var5 = var10;
            if(!var4) { _fun0077_ip = 182; continue _fun0077 }
 290:
            var4 = var3.length;
            var3 = 0;
            var4 = var4 > var3;
            var3 = !var4;
            if(!var4) { _fun0077_ip = 349; continue _fun0077 }
 307:
            var5 = _closure1_slot34;
            var4 = _closure1_slot33;
            var4 = var4.Loaded;
            var4 = var5 !== var4;
            if(!var4) { _fun0077_ip = 346; continue _fun0077 }
 328:
            var6 = _closure1_slot34;
            var5 = _closure1_slot33;
            var5 = var5.MaybeLoaded;
            var4 = var6 !== var5;
 346:
            var3 = var4;
 349:
            if(var3) { _fun0077_ip = 366; continue _fun0077 }
 352:
            var3 = _closure1_slot42;
            var2 = var3.compute;
            var2 = var2.bind(var3)();
 366:
            var3 = _closure1_slot56;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            return var1;
 390:
            var1 = false;
            return var1;
        }
    };
    var5['MESSAGE_REACTION_ADD'] = var12;
    var12 = function handleTrackUsage(arg1) {
        var1 = arg1;
        var3 = var1.emojiUsed;
        var2 = _closure1_slot56;
        var1 = undefined;
        var2 = var2.bind(var1)(var3);
        return var1;
    };
    var5['EMOJI_TRACK_USAGE'] = var12;
    var12 = function handleUserSettingsProtoUpdate(arg1) {
        _fun0078: for(var _fun0078_ip = 0; ; ) switch(_fun0078_ip) {
 0:
            var1 = arg1;
            var2 = var1.settings;
            var5 = var2.type;
            var3 = var1.wasSaved;
            var6 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 37;
            var4 = var4[var1];
            var1 = undefined;
            var7 = var6.bind(var1)(var4);
            var6 = var7.setEmojiLocale;
            var4 = _closure1_slot12;
            var4 = var4.locale;
            var4 = var6.bind(var7)(var4);
            var4 = _closure1_slot25;
            var4 = var4.FRECENCY_AND_FAVORITES_SETTINGS;
            if(!(var5 === var4)) { _fun0078_ip = 113; continue _fun0078 }
 80:
            if(!var3) { _fun0078_ip = 113; continue _fun0078 }
 83:
            var4 = _closure1_slot28;
            var3 = new Array(0);
            var4['pendingUsages'] = var3;
            var3 = _closure1_slot28;
            var2 = new Array(0);
            var3['emojiReactionPendingUsages'] = var2;
            return var1;
 113:
            var1 = false;
            return var1;
        }
    };
    var5['USER_SETTINGS_PROTO_UPDATE'] = var12;
    var5['GUILD_ROLE_CREATE'] = var11;
    var5['GUILD_ROLE_UPDATE'] = var11;
    var11 = function handleTopEmojisLoaded(arg1) {
        var1 = arg1;
        var5 = var1.guildId;
        var8 = var1.topEmojisMetadata;
        var4 = _closure1_slot39;
        var3 = var4.set;
        var2 = {};
        var7 = var8.map;
        var6 = function(arg1) {
            var1 = arg1;
            var1 = var1.emojiId;
            return var1;
        };
        var6 = var7.bind(var8)(var6);
        var2['emojiIds'] = var6;
        var8 = _closure1_slot1;
        var9 = _closure1_slot2;
        var6 = 42;
        var7 = var9[var6];
        var1 = undefined;
        var7 = var8.bind(var1)(var7);
        var6 = var9[var6];
        var6 = var8.bind(var1)(var6);
        var6 = var6.bind(var1)();
        var9 = var7.bind(var1)(var6);
        var8 = var9.add;
        var7 = 1;
        var6 = 'days';
        var7 = var8.bind(var9)(var7, var6);
        var6 = var7.valueOf;
        var6 = var6.bind(var7)();
        var2['topEmojisTTL'] = var6;
        var2 = var3.bind(var4)(var5, var2);
        return var1;
    };
    var5['TOP_EMOJIS_FETCH_SUCCESS'] = var11;
    var11 = function handleEmojiAutosuggestionUpdate(arg1) {
        var1 = arg1;
        var2 = var1.text;
        _closure1_slot38 = var2;
        var1 = undefined;
        return var1;
    };
    var5['EMOJI_AUTOSUGGESTION_UPDATE'] = var11;
    var6 = function toggleGuildExpandedState(arg1) {
        _fun0079: for(var _fun0079_ip = 0; ; ) switch(_fun0079_ip) {
 0:
            var1 = arg1;
            var3 = var1.guildId;
            var1 = global;
            var5 = var1.Set;
            var1 = _closure1_slot28;
            var7 = var1.expandedSectionsByGuildIds;
            var4 = var5.prototype;
            var4 = Object.create(var4, {constructor: {value: var5}});
            var8 = var4;
            var1 = new var8[var5](var7, var6);
            var4 = var1 instanceof Object ? var1 : var4;
            var1 = _closure1_slot28;
            var5 = var1.expandedSectionsByGuildIds;
            var1 = var5.has;
            var1 = var1.bind(var5)(var3);
            if(var1) { _fun0079_ip = 84; continue _fun0079 }
 72:
            var1 = var4.add;
            var1 = var1.bind(var4)(var3);
            _fun0079_ip = 94; continue _fun0079;
 84:
            var1 = var4.delete;
            var1 = var1.bind(var4)(var3);
 94:
            var1 = {};
            var6 = _closure1_slot28;
            var7 = var1;
            var3 = copyDataProperties(var7, var6);
            var3 = 'expandedSectionsByGuildIds';
            var1[var3] = var4;
            _closure1_slot28 = var1;
            var1 = undefined;
            return var1;
        }
    };
    var5['TOGGLE_GUILD_EXPANDED_STATE'] = var6;
    var6 = var10.prototype;
    var6 = Object.create(var6, {constructor: {value: var10}});
    var23 = var6;
    var21 = var5;
    var5 = new var23[var10](var22, var21, var20);
    var5 = var5 instanceof Object ? var5 : var6;
    var6 = 45;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/emojis/EmojiStore.tsx';
    var6 = var7.bind(var8)(var6);
    var3['default'] = var5;
    var3['LoadState'] = var4;
    var3['EmojiDisambiguations'] = var2;
    return var1;
})();