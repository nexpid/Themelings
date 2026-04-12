// app/modules/quests/AdContentSeenStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
            _closure1_slot10 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot10 = var1;
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
            var9 = _closure1_slot12;
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
            var7 = _closure1_slot12;
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
    var _closure1_slot11 = var1;
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
    var _closure1_slot12 = var1;
    var1 = function getOrCreateSet(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var5 = arg1;
            var2 = _closure1_slot9;
            var1 = var2.get;
            var1 = var1.bind(var2)(var5);
            var2 = null;
            if(!(var2 == var1)) { _fun0005_ip = 3; continue _fun0005 }
case 40:
            var2 = global;
            var2 = var2.Set;
            var4 = var2.prototype;
            var4 = Object.create(var4, {constructor: {value: var2}});
            var8 = var4;
            var2 = new var8[var2](var7);
            var2 = var2 instanceof Object ? var2 : var4;
            var4 = _closure1_slot9;
            var3 = var4.set;
            var3 = var3.bind(var4)(var5, var2);
            var1 = var2;
case 3:
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = function syncWithQuestStore() {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = _closure1_slot8;
            var14 = var1.quests;
            var3 = _closure1_slot13;
            var4 = _closure1_slot0;
            var1 = _closure1_slot1;
            var6 = 7;
            var1 = var1[var6];
            var10 = undefined;
            var1 = var4.bind(var10)(var1);
            var1 = var1.AdCreativeType;
            var1 = var1.QUEST;
            var13 = var3.bind(var10)(var1);
            var1 = _closure1_slot11;
            var17 = var1.bind(var10)(var14);
            var3 = var17.bind(var10)();
            var1 = var3.done;
            var4 = 0;
            var8 = null;
            var12 = 8;
            var16 = 2;
            var11 = 1;
            var7 = var3;
            var5 = undefined;
            var3 = false;
            var15 = false;
            if(var1) { _fun0006_ip = 41; continue _fun0006 }
case 42:
            var18 = var7.value;
            var1 = _closure1_slot7;
            var1 = var1.bind(var10)(var18, var16);
            var18 = var1[var4];
            var19 = var1[var11];
            var1 = var13.has;
            var1 = var1.bind(var13)(var18);
            if(var1) { _fun0006_ip = 43; continue _fun0006 }
case 44:
            var21 = _closure1_slot0;
            var20 = _closure1_slot1;
            var20 = var20[var12];
            var21 = var21.bind(var10)(var20);
            var20 = var21.isQuestExpired;
            var1 = var20.bind(var21)(var19);
case 43:
            if(var1) { _fun0006_ip = 45; continue _fun0006 }
case 21:
            var19 = var19.userStatus;
            var20 = var8 == var19;
            if(var20) { _fun0006_ip = 25; continue _fun0006 }
case 46:
            var21 = var19.enrolledAt;
            var21 = var8 == var21;
            if(!var21) { _fun0006_ip = 26; continue _fun0006 }
case 24:
            var22 = var19.completedAt;
            var21 = var8 == var22;
case 26:
            if(!var21) { _fun0006_ip = 47; continue _fun0006 }
case 48:
            var22 = var19.claimedAt;
            var21 = var8 == var22;
case 47:
            if(!var21) { _fun0006_ip = 49; continue _fun0006 }
case 50:
            var22 = var19.dismissedQuestContent;
            var21 = var4 === var22;
case 49:
            var20 = var21;
case 25:
            var1 = var20;
            var5 = var19;
case 45:
            if(var1) { _fun0006_ip = 51; continue _fun0006 }
case 52:
            var1 = var13.add;
            var1 = var1.bind(var13)(var18);
            var3 = true;
case 51:
            var19 = var17.bind(var10)();
            var1 = var19.done;
            var7 = var19;
            var15 = var3;
            if(!var1) { _fun0006_ip = 42; continue _fun0006 }
case 41:
            var1 = _closure1_slot8;
            var1 = var1.lastFetchedCurrentQuests;
            var11 = var15;
            if(!(var4 !== var1)) { _fun0006_ip = 53; continue _fun0006 }
case 54:
            var1 = var14.size;
            var11 = var15;
            if(!(var1 > var4)) { _fun0006_ip = 53; continue _fun0006 }
case 55:
            var1 = _closure1_slot11;
            var7 = var1.bind(var10)(var13);
            var3 = var7.bind(var10)();
            var1 = var3.done;
            var5 = var15;
            var11 = var5;
            if(var1) { _fun0006_ip = 53; continue _fun0006 }
case 56:
            var15 = var3.value;
            var1 = var14.get;
            var18 = var1.bind(var14)(var15);
            var1 = var8 == var18;
            if(var1) { _fun0006_ip = 57; continue _fun0006 }
case 58:
            var17 = _closure1_slot0;
            var16 = _closure1_slot1;
            var16 = var16[var12];
            var17 = var17.bind(var10)(var16);
            var16 = var17.isQuestExpired;
            var1 = var16.bind(var17)(var18);
case 57:
            if(!var1) { _fun0006_ip = 59; continue _fun0006 }
case 60:
            var1 = var13.delete;
            var1 = var1.bind(var13)(var15);
            var5 = true;
case 59:
            var16 = var7.bind(var10)();
            var1 = var16.done;
            var3 = var16;
            var11 = var5;
            if(!var1) { _fun0006_ip = 56; continue _fun0006 }
case 53:
            var3 = _closure1_slot13;
            var5 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var6];
            var1 = var5.bind(var10)(var1);
            var1 = var1.AdCreativeType;
            var1 = var1.QUEST_HOME_HERO;
            var7 = var3.bind(var10)(var1);
            var3 = _closure1_slot8;
            var1 = var3.getLastFetchedQuestHomeHero;
            var3 = var1.bind(var3)();
            var1 = var11;
            if(!(var8 != var3)) { _fun0006_ip = 61; continue _fun0006 }
case 62:
            var3 = var7.size;
            var1 = var11;
            if(!(var3 > var4)) { _fun0006_ip = 61; continue _fun0006 }
case 63:
            var4 = _closure1_slot8;
            var3 = var4.getQuestHomeHero;
            var6 = var3.bind(var4)();
            var2 = _closure1_slot11;
            var5 = var2.bind(var10)(var7);
            var3 = var5.bind(var10)();
            var2 = var3.done;
            var4 = var11;
            var1 = var4;
            if(var2) { _fun0006_ip = 61; continue _fun0006 }
case 64:
            var11 = var3.value;
            var2 = var8 != var6;
            if(!var2) { _fun0006_ip = 65; continue _fun0006 }
case 66:
            var12 = var6.id;
            var2 = var11 === var12;
case 65:
            if(var2) { _fun0006_ip = 67; continue _fun0006 }
case 68:
            var2 = var7.delete;
            var2 = var2.bind(var7)(var11);
            var4 = true;
case 67:
            var12 = var5.bind(var10)();
            var2 = var12.done;
            var3 = var12;
            var1 = var4;
            if(!var2) { _fun0006_ip = 64; continue _fun0006 }
case 61:
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var2 = global;
    var10 = var2.Object;
    var9 = var10.defineProperty;
    var8 = {};
    var1 = true;
    var8['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var8);
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
    var2 = var2.Map;
    var8 = var2.prototype;
    var8 = Object.create(var8, {constructor: {value: var2}});
    var14 = var8;
    var2 = new var14[var2](var13);
    var2 = var2 instanceof Object ? var2 : var8;
    var _closure1_slot9 = var2;
    var2 = 9;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.PersistedStore;
    var2 = function(arg1) {
        var4 = function AdContentSeenStore() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot2;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot5;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot4;
                var1 = _closure1_slot10;
                var1 = var1.bind(var3)();
                if(var1) { _fun0007_ip = 69; continue _fun0007 }
case 70:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0007_ip = 71; continue _fun0007;
case 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 71:
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
        var1 = function value(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var2 = arg1;
                var4 = this;
                var5 = var4.waitFor;
                var3 = _closure1_slot8;
                var3 = var5.bind(var4)(var3);
                var10 = global;
                var3 = var10.Map;
                var5 = var3.prototype;
                var5 = Object.create(var5, {constructor: {value: var3}});
                var18 = var5;
                var3 = new var18[var3](var17);
                var3 = var3 instanceof Object ? var3 : var5;
                _closure1_slot9 = var3;
                var3 = null;
                if(!(var3 != var2)) { _fun0008_ip = 72; continue _fun0008 }
case 73:
                var5 = var10.Object;
                var3 = var5.entries;
                var2 = var2.seenContentIds;
                var9 = var3.bind(var5)(var2);
                var2 = var9.length;
                var8 = 0;
                var2 = var8 < var2;
                var7 = undefined;
                var6 = 2;
                var5 = 1;
                var3 = 0;
                if(!var2) { _fun0008_ip = 72; continue _fun0008 }
case 74:
                var11 = var9[var3];
                var2 = _closure1_slot7;
                var2 = var2.bind(var7)(var11, var6);
                var11 = var2[var8];
                var15 = var2[var5];
                var13 = _closure1_slot9;
                var12 = var13.set;
                var2 = var10.Number;
                var11 = var2.bind(var7)(var11);
                var2 = var10.Set;
                var14 = var2.prototype;
                var14 = Object.create(var14, {constructor: {value: var2}});
                var18 = var14;
                var17 = var15;
                var2 = new var18[var2](var17, var16);
                var2 = var2 instanceof Object ? var2 : var14;
                var2 = var12.bind(var13)(var11, var2);
                var3 = var3 + 1;
                var2 = var9.length;
                if(var3 < var2) { _fun0008_ip = 74; continue _fun0008 }
case 72:
                var3 = var4.syncWith;
                var5 = _closure1_slot8;
                var2 = new Array(1);
                var2[0] = var5;
                var1 = _closure1_slot14;
                var1 = var3.bind(var4)(var2, var1);
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'getState';
        var5['key'] = var7;
        var7 = function value() {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var2 = {};
                var3 = _closure1_slot11;
                var1 = _closure1_slot9;
                var9 = undefined;
                var8 = var3.bind(var9)(var1);
                var3 = var8.bind(var9)();
                var1 = var3.done;
                var7 = 2;
                var6 = 0;
                var5 = 1;
                var4 = global;
                if(var1) { _fun0009_ip = 75; continue _fun0009 }
case 76:
                var11 = var3.value;
                var1 = _closure1_slot7;
                var1 = var1.bind(var9)(var11, var7);
                var11 = var1[var6];
                var13 = var1[var5];
                var12 = var4.Array;
                var1 = var12.from;
                var1 = var1.bind(var12)(var13);
                var2[var11] = var1;
                var11 = var8.bind(var9)();
                var1 = var11.done;
                var3 = var11;
                if(!var1) { _fun0009_ip = 76; continue _fun0009 }
case 75:
                var1 = {};
                var1['seenContentIds'] = var2;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'hasSeen';
        var5['key'] = var7;
        var6 = function value(arg1, arg2) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var3 = _closure1_slot9;
                var2 = var3.get;
                var1 = arg1;
                var5 = var2.bind(var3)(var1);
                var1 = null;
                var3 = var1 == var5;
                var2 = undefined;
                if(var3) { _fun0010_ip = 77; continue _fun0010 }
case 78:
                var4 = var5.has;
                var3 = arg2;
                var2 = var4.bind(var5)(var3);
case 77:
                var1 = var1 != var2;
                if(!var1) { _fun0010_ip = 79; continue _fun0010 }
case 70:
                var1 = var2;
case 79:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'AdContentSeenStore';
    var8['displayName'] = var2;
    var8['persistKey'] = var2;
    var2 = 10;
    var2 = var6[var2];
    var13 = var7.bind(var1)(var2);
    var2 = {};
    var9 = function handleMarkSeen(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var1 = arg1;
            var4 = _closure1_slot13;
            var3 = var1.adCreativeType;
            var8 = undefined;
            var7 = var4.bind(var8)(var3);
            var2 = _closure1_slot11;
            var1 = var1.contentIds;
            var6 = var2.bind(var8)(var1);
            var3 = var6.bind(var8)();
            var2 = var3.done;
            var4 = var3;
            var3 = false;
            var1 = false;
            if(var2) { _fun0011_ip = 71; continue _fun0011 }
case 80:
            var9 = var4.value;
            var2 = var7.has;
            var2 = var2.bind(var7)(var9);
            if(var2) { _fun0011_ip = 81; continue _fun0011 }
case 82:
            var2 = var7.add;
            var2 = var2.bind(var7)(var9);
            var3 = true;
case 81:
            var10 = var6.bind(var8)();
            var2 = var10.done;
            var4 = var10;
            var1 = var3;
            if(!var2) { _fun0011_ip = 80; continue _fun0011 }
case 71:
            return var1;
        }
    };
    var2['AD_CONTENT_MARK_SEEN'] = var9;
    var4 = function handleMarkUnseen(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var1 = arg1;
            var5 = _closure1_slot9;
            var4 = var5.get;
            var3 = var1.adCreativeType;
            var8 = var4.bind(var5)(var3);
            var3 = null;
            if(!(var3 != var8)) { _fun0012_ip = 83; continue _fun0012 }
case 84:
            var2 = _closure1_slot11;
            var1 = var1.contentIds;
            var7 = undefined;
            var6 = var2.bind(var7)(var1);
            var3 = var6.bind(var7)();
            var2 = var3.done;
            var4 = var3;
            var3 = false;
            var1 = false;
            if(var2) { _fun0012_ip = 85; continue _fun0012 }
case 86:
            var9 = var4.value;
            var2 = var8.has;
            var2 = var2.bind(var8)(var9);
            if(!var2) { _fun0012_ip = 87; continue _fun0012 }
case 13:
            var2 = var8.delete;
            var2 = var2.bind(var8)(var9);
            var3 = true;
case 87:
            var10 = var6.bind(var7)();
            var2 = var10.done;
            var4 = var10;
            var1 = var3;
            if(!var2) { _fun0012_ip = 86; continue _fun0012 }
case 85:
            return var1;
case 83:
            var1 = false;
            return var1;
        }
    };
    var2['AD_CONTENT_MARK_UNSEEN'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var14 = var4;
    var12 = var2;
    var2 = new var14[var8](var13, var12, var11);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/AdContentSeenStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();