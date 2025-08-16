// app/modules/quests/QuestsStore.tsx
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
            _closure1_slot33 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot33 = var1;
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
            var9 = _closure1_slot35;
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
            var7 = _closure1_slot35;
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
    var _closure1_slot34 = var1;
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
    var _closure1_slot35 = var1;
    var2 = function initializeState() {
        var1 = false;
        var _closure1_slot2 = var1;
        var _closure1_slot3 = var1;
        var _closure1_slot4 = var1;
        var1 = global;
        var2 = var1.Map;
        var4 = var2.prototype;
        var4 = Object.create(var4, {constructor: {value: var2}});
        var6 = var4;
        var2 = new var6[var2](var5);
        var2 = var2 instanceof Object ? var2 : var4;
        var _closure1_slot5 = var2;
        var2 = var1.Map;
        var4 = var2.prototype;
        var4 = Object.create(var4, {constructor: {value: var2}});
        var6 = var4;
        var2 = new var6[var2](var5);
        var2 = var2 instanceof Object ? var2 : var4;
        var _closure1_slot6 = var2;
        var2 = var1.Map;
        var4 = var2.prototype;
        var4 = Object.create(var4, {constructor: {value: var2}});
        var6 = var4;
        var2 = new var6[var2](var5);
        var2 = var2 instanceof Object ? var2 : var4;
        var _closure1_slot7 = var2;
        var2 = 0;
        var _closure1_slot8 = var2;
        var _closure1_slot9 = var2;
        var2 = var1.Set;
        var4 = var2.prototype;
        var4 = Object.create(var4, {constructor: {value: var2}});
        var6 = var4;
        var2 = new var6[var2](var5);
        var2 = var2 instanceof Object ? var2 : var4;
        var _closure1_slot10 = var2;
        var2 = var1.Set;
        var4 = var2.prototype;
        var4 = Object.create(var4, {constructor: {value: var2}});
        var6 = var4;
        var2 = new var6[var2](var5);
        var2 = var2 instanceof Object ? var2 : var4;
        var _closure1_slot11 = var2;
        var2 = var1.Set;
        var4 = var2.prototype;
        var4 = Object.create(var4, {constructor: {value: var2}});
        var6 = var4;
        var2 = new var6[var2](var5);
        var2 = var2 instanceof Object ? var2 : var4;
        var _closure1_slot12 = var2;
        var2 = var1.Set;
        var4 = var2.prototype;
        var4 = Object.create(var4, {constructor: {value: var2}});
        var6 = var4;
        var2 = new var6[var2](var5);
        var2 = var2 instanceof Object ? var2 : var4;
        var _closure1_slot13 = var2;
        var2 = var1.Map;
        var4 = var2.prototype;
        var4 = Object.create(var4, {constructor: {value: var2}});
        var6 = var4;
        var2 = new var6[var2](var5);
        var2 = var2 instanceof Object ? var2 : var4;
        _closure1_slot30 = var2;
        var2 = var1.Map;
        var4 = var2.prototype;
        var4 = Object.create(var4, {constructor: {value: var2}});
        var6 = var4;
        var2 = new var6[var2](var5);
        var2 = var2 instanceof Object ? var2 : var4;
        var _closure1_slot15 = var2;
        var2 = var1.Map;
        var4 = var2.prototype;
        var4 = Object.create(var4, {constructor: {value: var2}});
        var6 = var4;
        var2 = new var6[var2](var5);
        var2 = var2 instanceof Object ? var2 : var4;
        var _closure1_slot16 = var2;
        var2 = var1.Map;
        var4 = var2.prototype;
        var4 = Object.create(var4, {constructor: {value: var2}});
        var6 = var4;
        var2 = new var6[var2](var5);
        var2 = var2 instanceof Object ? var2 : var4;
        var _closure1_slot17 = var2;
        var2 = null;
        var _closure1_slot18 = var2;
        var4 = var1.Map;
        var5 = var4.prototype;
        var5 = Object.create(var5, {constructor: {value: var4}});
        var6 = var5;
        var4 = new var6[var4](var5);
        var4 = var4 instanceof Object ? var4 : var5;
        var _closure1_slot19 = var4;
        var4 = var1.Set;
        var5 = var4.prototype;
        var5 = Object.create(var5, {constructor: {value: var4}});
        var6 = var5;
        var4 = new var6[var4](var5);
        var4 = var4 instanceof Object ? var4 : var5;
        var _closure1_slot14 = var4;
        var4 = var1.Map;
        var5 = var4.prototype;
        var5 = Object.create(var5, {constructor: {value: var4}});
        var6 = var5;
        var4 = new var6[var4](var5);
        var4 = var4 instanceof Object ? var4 : var5;
        var _closure1_slot20 = var4;
        var1 = var1.Map;
        var4 = var1.prototype;
        var4 = Object.create(var4, {constructor: {value: var1}});
        var6 = var4;
        var1 = new var6[var1](var5);
        var1 = var1 instanceof Object ? var1 : var4;
        var _closure1_slot28 = var1;
        var4 = _closure1_slot44;
        var1 = undefined;
        var4 = var4.bind(var1)();
        var _closure1_slot29 = var2;
        return var1;
    };
    var _closure1_slot36 = var2;
    var1 = function updateQuestData(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var4 = arg1;
            var2 = arg2;
            var5 = global;
            var7 = var5.Map;
            var21 = _closure1_slot5;
            var6 = var7.prototype;
            var6 = Object.create(var6, {constructor: {value: var7}});
            var22 = var6;
            var3 = new var22[var7](var21, var20);
            var6 = var3 instanceof Object ? var3 : var6;
            _closure1_slot5 = var6;
            var3 = var6.get;
            var6 = var3.bind(var6)(var4);
            var12 = null;
            if(!(var12 != var6)) { _fun0005_ip = 403; continue _fun0005 }
 64:
            var3 = {};
            var21 = var3;
            var20 = var6;
            var6 = copyDataProperties(var21, var20);
            var21 = var3;
            var20 = var2;
            var6 = copyDataProperties(var21, var20);
            var6 = var2.userStatus;
            if(!(var12 != var6)) { _fun0005_ip = 388; continue _fun0005 }
 99:
            var6 = var5.Object;
            var5 = var6.values;
            var7 = var2.userStatus;
            var8 = var12 == var7;
            var11 = undefined;
            var2 = undefined;
            if(var8) { _fun0005_ip = 133; continue _fun0005 }
 127:
            var2 = var7.progress;
 133:
            if(!(var12 == var2)) { _fun0005_ip = 139; continue _fun0005 }
 137:
            var2 = {};
 139:
            var10 = var5.bind(var6)(var2);
            var2 = var10.length;
            var9 = 0;
            var2 = var9 < var2;
            var8 = 8;
            var7 = 7;
            var6 = undefined;
            var5 = undefined;
            if(!var2) { _fun0005_ip = 388; continue _fun0005 }
 171:
            var15 = var10[var9];
            var13 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var7];
            var13 = var13.bind(var11)(var2);
            var2 = var13.isNil;
            var2 = var2.bind(var13)(var15);
            var14 = var6;
            var13 = var5;
            if(var2) { _fun0005_ip = 367; continue _fun0005 }
 215:
            var16 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var8];
            var2 = var16.bind(var11)(var2);
            var2 = var2.FirstPartyQuestTaskTypesSets;
            var17 = var2.DESKTOP;
            var16 = var17.has;
            var2 = var15.eventName;
            var16 = var16.bind(var17)(var2);
            var2 = var5;
            if(!var16) { _fun0005_ip = 361; continue _fun0005 }
 266:
            var16 = var15.heartbeat;
            var18 = var12 == var16;
            var17 = undefined;
            if(var18) { _fun0005_ip = 287; continue _fun0005 }
 281:
            var17 = var16.lastBeatAt;
 287:
            if(!(var12 == var17)) { _fun0005_ip = 338; continue _fun0005 }
 291:
            var17 = var15.heartbeat;
            var15 = var12 == var17;
            var18 = undefined;
            if(var15) { _fun0005_ip = 312; continue _fun0005 }
 306:
            var18 = var17.lastBeatAt;
 312:
            var15 = var17;
            if(!(var12 == var18)) { _fun0005_ip = 355; continue _fun0005 }
 319:
            var19 = _closure1_slot14;
            var18 = var19.delete;
            var18 = var18.bind(var19)(var4);
            var15 = var17;
            _fun0005_ip = 355; continue _fun0005;
 338:
            var18 = _closure1_slot14;
            var17 = var18.add;
            var17 = var17.bind(var18)(var4);
            var15 = var5;
 355:
            var2 = var15;
            var6 = var16;
 361:
            var14 = var6;
            var13 = var2;
 367:
            var9 = var9 + 1;
            var2 = var10.length;
            var6 = var14;
            var5 = var13;
            if(var9 < var2) { _fun0005_ip = 171; continue _fun0005 }
 388:
            var2 = _closure1_slot5;
            var1 = var2.set;
            var1 = var1.bind(var2)(var4, var3);
 403:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot37 = var1;
    var1 = function _addRewardCode(arg1, arg2) {
        var1 = global;
        var4 = var1.Map;
        var7 = _closure1_slot15;
        var3 = var4.prototype;
        var3 = Object.create(var3, {constructor: {value: var4}});
        var8 = var3;
        var1 = new var8[var4](var7, var6);
        var1 = var1 instanceof Object ? var1 : var3;
        var5 = var1.set;
        var4 = arg1;
        var3 = arg2;
        var3 = var5.bind(var1)(var4, var3);
        _closure1_slot15 = var1;
        var1 = undefined;
        return var1;
    };
    var _closure1_slot38 = var1;
    var1 = function updateQuestRewardData(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var4 = arg1;
            var6 = arg2;
            var1 = global;
            var5 = var1.Map;
            var13 = _closure1_slot16;
            var3 = var5.prototype;
            var3 = Object.create(var3, {constructor: {value: var5}});
            var14 = var3;
            var1 = new var14[var5](var13, var12);
            var1 = var1 instanceof Object ? var1 : var3;
            var5 = var1.set;
            var3 = var6.items;
            var3 = var5.bind(var1)(var4, var3);
            _closure1_slot16 = var1;
            var3 = _closure1_slot5;
            var1 = var3.get;
            var3 = var1.bind(var3)(var4);
            var7 = null;
            var5 = var7 == var3;
            var1 = undefined;
            var9 = undefined;
            if(var5) { _fun0006_ip = 95; continue _fun0006 }
 89:
            var9 = var3.userStatus;
 95:
            if(!(var7 != var9)) { _fun0006_ip = 319; continue _fun0006 }
 102:
            var3 = var9.claimedAt;
            if(!(var7 == var3)) { _fun0006_ip = 319; continue _fun0006 }
 115:
            var3 = {};
            var3['entitlements'] = var6;
            var3 = var3.entitlements;
            var5 = var3.items;
            var3 = 0;
            var3 = var5[var3];
            var5 = var3.tenantMetadata;
            var8 = var7 == var5;
            var3 = undefined;
            if(var8) { _fun0006_ip = 167; continue _fun0006 }
 155:
            var5 = var5.questRewards;
            var3 = var5.reward;
 167:
            var5 = var7 == var3;
            var10 = undefined;
            if(var5) { _fun0006_ip = 181; continue _fun0006 }
 176:
            var10 = var3.tag;
 181:
            var8 = _closure1_slot0;
            var11 = _closure1_slot1;
            var5 = 9;
            var5 = var11[var5];
            var5 = var8.bind(var1)(var5);
            var5 = var5.QuestRewardTypes;
            var5 = var5.REWARD_CODE;
            var8 = null;
            if(!(var10 === var5)) { _fun0006_ip = 225; continue _fun0006 }
 219:
            var8 = var3.rewardCode;
 225:
            if(!(var7 != var8)) { _fun0006_ip = 239; continue _fun0006 }
 229:
            var3 = _closure1_slot38;
            var3 = var3.bind(var1)(var4, var8);
 239:
            var3 = _closure1_slot37;
            var2 = {};
            var5 = {};
            var13 = var5;
            var12 = var9;
            var9 = copyDataProperties(var13, var12);
            var9 = var6.claimedAt;
            var6 = 'claimedAt';
            var5[var6] = var9;
            var9 = var7 == var8;
            var6 = undefined;
            if(var9) { _fun0006_ip = 287; continue _fun0006 }
 281:
            var6 = var8.tier;
 287:
            var8 = var7 != var6;
            var7 = null;
            if(!var8) { _fun0006_ip = 299; continue _fun0006 }
 296:
            var7 = var6;
 299:
            var6 = 'claimedTier';
            var5[var6] = var7;
            var2['userStatus'] = var5;
            var2 = var3.bind(var1)(var4, var2);
 319:
            return var1;
        }
    };
    var _closure1_slot39 = var1;
    var1 = function maybeDeleteQuestHeartbeatFailure(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var3 = arg1;
            var4 = _closure1_slot17;
            var2 = var4.get;
            var4 = var2.bind(var4)(var3);
            var2 = null;
            if(!(var2 != var4)) { _fun0007_ip = 72; continue _fun0007 }
 26:
            var2 = global;
            var5 = var2.Map;
            var6 = _closure1_slot17;
            var4 = var5.prototype;
            var4 = Object.create(var4, {constructor: {value: var5}});
            var7 = var4;
            var2 = new var7[var5](var6, var5);
            var2 = var2 instanceof Object ? var2 : var4;
            _closure1_slot17 = var2;
            var1 = var2.delete;
            var1 = var1.bind(var2)(var3);
 72:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot40 = var1;
    var1 = function removeQuestIdFromIsEnrolling(arg1) {
        var1 = global;
        var4 = var1.Set;
        var5 = _closure1_slot10;
        var3 = var4.prototype;
        var3 = Object.create(var3, {constructor: {value: var4}});
        var6 = var3;
        var1 = new var6[var4](var5, var4);
        var1 = var1 instanceof Object ? var1 : var3;
        var4 = var1.delete;
        var3 = arg1;
        var3 = var4.bind(var1)(var3);
        _closure1_slot10 = var1;
        var1 = undefined;
        return var1;
    };
    var _closure1_slot41 = var1;
    var1 = function removeQuestIdFromIsDismissing(arg1) {
        var1 = global;
        var4 = var1.Set;
        var5 = _closure1_slot13;
        var3 = var4.prototype;
        var3 = Object.create(var3, {constructor: {value: var4}});
        var6 = var3;
        var1 = new var6[var4](var5, var4);
        var1 = var1 instanceof Object ? var1 : var3;
        var4 = var1.delete;
        var3 = arg1;
        var3 = var4.bind(var1)(var3);
        _closure1_slot13 = var1;
        var1 = undefined;
        return var1;
    };
    var _closure1_slot42 = var1;
    var1 = function checkAllQuestsExpiration() {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var1 = false;
            var _closure2_slot0 = var1;
            var1 = global;
            var5 = var1.Map;
            var7 = _closure1_slot28;
            var4 = var5.prototype;
            var4 = Object.create(var4, {constructor: {value: var5}});
            var8 = var4;
            var2 = new var8[var5](var7, var6);
            var2 = var2 instanceof Object ? var2 : var4;
            var _closure2_slot1 = var2;
            var6 = _closure1_slot5;
            var5 = var6.forEach;
            var4 = function(arg1, arg2) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var5 = arg2;
                    var3 = _closure2_slot1;
                    var1 = var3.get;
                    var3 = var1.bind(var3)(var5);
                    var1 = true;
                    if(!(var1 !== var3)) { _fun0009_ip = 119; continue _fun0009 }
 26:
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var3 = 10;
                    var4 = var4[var3];
                    var3 = undefined;
                    var6 = var6.bind(var3)(var4);
                    var4 = var6.isQuestExpired;
                    var3 = arg1;
                    var3 = var4.bind(var6)(var3);
                    var4 = _closure2_slot1;
                    if(var3) { _fun0009_ip = 104; continue _fun0009 }
 72:
                    var3 = var4.has;
                    var3 = var3.bind(var4)(var5);
                    if(var3) { _fun0009_ip = 119; continue _fun0009 }
 85:
                    var7 = _closure2_slot1;
                    var6 = var7.set;
                    var3 = false;
                    var3 = var6.bind(var7)(var5, var3);
                    _fun0009_ip = 119; continue _fun0009;
 104:
                    var3 = var4.set;
                    var3 = var3.bind(var4)(var5, var1);
                    _closure2_slot0 = var1;
 119:
                    var1 = undefined;
                    return var1;
                }
            };
            var4 = var5.bind(var6)(var4);
            var3 = _closure2_slot0;
            if(!var3) { _fun0008_ip = 91; continue _fun0008 }
 73:
            _closure1_slot28 = var2;
            var2 = _closure1_slot32;
            var1 = var2.emitChange;
            var1 = var1.bind(var2)();
 91:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot43 = var1;
    var1 = function _stopExpirationCheckInterval() {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var3 = _closure1_slot31;
            var1 = null;
            if(!(var1 !== var3)) { _fun0010_ip = 36; continue _fun0010 }
 13:
            var3 = global;
            var5 = var3.clearInterval;
            var4 = _closure1_slot31;
            var3 = undefined;
            var3 = var5.bind(var3)(var4);
            _closure1_slot31 = var1;
 36:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot44 = var1;
    var8 = global;
    var11 = var8.Object;
    var10 = var11.defineProperty;
    var9 = {};
    var1 = true;
    var9['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var9);
    var1 = 0;
    var9 = var6[var1];
    var1 = undefined;
    var9 = var7.bind(var1)(var9);
    var _closure1_slot21 = var9;
    var9 = 1;
    var9 = var6[var9];
    var9 = var7.bind(var1)(var9);
    var _closure1_slot22 = var9;
    var9 = 2;
    var9 = var6[var9];
    var9 = var7.bind(var1)(var9);
    var _closure1_slot23 = var9;
    var9 = 3;
    var9 = var6[var9];
    var9 = var7.bind(var1)(var9);
    var _closure1_slot24 = var9;
    var9 = 4;
    var9 = var6[var9];
    var9 = var7.bind(var1)(var9);
    var _closure1_slot25 = var9;
    var9 = 5;
    var9 = var6[var9];
    var9 = var7.bind(var1)(var9);
    var _closure1_slot26 = var9;
    var9 = 6;
    var9 = var6[var9];
    var9 = var5.bind(var1)(var9);
    var9 = var9.QuestsExperimentLocations;
    var _closure1_slot27 = var9;
    var8 = var8.Map;
    var9 = var8.prototype;
    var9 = Object.create(var9, {constructor: {value: var8}});
    var15 = var9;
    var8 = new var15[var8](var14);
    var8 = var8 instanceof Object ? var8 : var9;
    var _closure1_slot30 = var8;
    var8 = null;
    var _closure1_slot31 = var8;
    var2 = var2.bind(var1)();
    var2 = 13;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function QuestsStore() {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot21;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot24;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot23;
                var1 = _closure1_slot33;
                var1 = var1.bind(var3)();
                if(var1) { _fun0011_ip = 69; continue _fun0011 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0011_ip = 105; continue _fun0011;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot24;
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
        var5 = _closure1_slot25;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot22;
        var5 = {};
        var1 = 'quests';
        var5['key'] = var1;
        var1 = function get() {
            var1 = _closure1_slot5;
            return var1;
        };
        var5['get'] = var1;
        var1 = new Array(24);
        var1[0] = var5;
        var5 = {};
        var7 = 'excludedQuests';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot6;
            return var1;
        };
        var5['get'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'claimedQuests';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot7;
            return var1;
        };
        var5['get'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'isFetchingCurrentQuests';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot2;
            return var1;
        };
        var5['get'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'isFetchingClaimedQuests';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot4;
            return var1;
        };
        var5['get'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'lastFetchedCurrentQuests';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot8;
            return var1;
        };
        var5['get'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'lastFetchedQuestToDeliver';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot9;
            return var1;
        };
        var5['get'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'isFetchingQuestToDeliver';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot3;
            return var1;
        };
        var5['get'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'questDeliveryOverride';
        var5['key'] = var7;
        var7 = function get() {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                var3 = _closure1_slot5;
                var2 = var3.get;
                var5 = _closure1_slot18;
                var1 = null;
                var5 = var1 != var5;
                var1 = '';
                if(!var5) { _fun0012_ip = 33; continue _fun0012 }
 29:
                var1 = _closure1_slot18;
 33:
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var5['get'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'questToDeliverForPlacement';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot20;
            return var1;
        };
        var5['get'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'questEnrollmentBlockedUntil';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot29;
            return var1;
        };
        var5['get'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'isEnrolling';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot10;
            var2 = var3.has;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[11] = var5;
        var5 = {};
        var7 = 'isClaimingReward';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot11;
            var2 = var3.has;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[12] = var5;
        var5 = {};
        var7 = 'isFetchingRewardCode';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot12;
            var2 = var3.has;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[13] = var5;
        var5 = {};
        var7 = 'isDismissingContent';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot13;
            var2 = var3.has;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[14] = var5;
        var5 = {};
        var7 = 'getRewardCode';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot15;
            var2 = var3.get;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[15] = var5;
        var5 = {};
        var7 = 'getRewards';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot16;
            var2 = var3.get;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[16] = var5;
        var5 = {};
        var7 = 'getStreamHeartbeatFailure';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot17;
            var2 = var3.get;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[17] = var5;
        var5 = {};
        var7 = 'getQuest';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot5;
            var2 = var3.get;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[18] = var5;
        var5 = {};
        var7 = 'isProgressingOnDesktop';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot14;
            var2 = var3.has;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[19] = var5;
        var5 = {};
        var7 = 'selectedTaskPlatform';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                var3 = _closure1_slot19;
                var2 = var3.get;
                var1 = arg1;
                var2 = var2.bind(var3)(var1);
                var1 = null;
                var3 = var1 != var2;
                if(!var3) { _fun0013_ip = 32; continue _fun0013 }
 29:
                var1 = var2;
 32:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[20] = var5;
        var5 = {};
        var7 = 'getOptimisticProgress';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                var3 = _closure1_slot30;
                var2 = var3.get;
                var1 = arg1;
                var4 = var2.bind(var3)(var1);
                var1 = null;
                var2 = var1 == var4;
                var1 = undefined;
                if(var2) { _fun0014_ip = 44; continue _fun0014 }
 31:
                var3 = var4.get;
                var2 = arg2;
                var1 = var3.bind(var4)(var2);
 44:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[21] = var5;
        var5 = {};
        var7 = 'getExpiredQuestsMap';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot28;
            return var1;
        };
        var5['value'] = var7;
        var1[22] = var5;
        var5 = {};
        var7 = 'isQuestExpired';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                var3 = _closure1_slot28;
                var2 = var3.get;
                var1 = arg1;
                var2 = var2.bind(var3)(var1);
                var1 = null;
                var1 = var1 != var2;
                if(!var1) { _fun0015_ip = 32; continue _fun0015 }
 29:
                var1 = var2;
 32:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[23] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var9 = var2.bind(var1)(var8);
    var2 = 'QuestsStore';
    var9['displayName'] = var2;
    var2 = 14;
    var2 = var6[var2];
    var14 = var7.bind(var1)(var2);
    var2 = {};
    var7 = function handleLogout() {
        var3 = _closure1_slot44;
        var1 = undefined;
        var3 = var3.bind(var1)();
        var2 = _closure1_slot36;
        var2 = var2.bind(var1)();
        return var1;
    };
    var2['LOGOUT'] = var7;
    var7 = function handleFetchCurrentQuestsBegin() {
        var1 = true;
        _closure1_slot2 = var1;
        var1 = undefined;
        return var1;
    };
    var2['QUESTS_FETCH_CURRENT_QUESTS_BEGIN'] = var7;
    var7 = function handleFetchCurrentQuestsSuccess(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
            var1 = arg1;
            var8 = var1.quests;
            var5 = var1.excludedQuests;
            var6 = var1.questEnrollmentBlockedUntil;
            var4 = global;
            var2 = var4.Date;
            var1 = var2.now;
            var1 = var1.bind(var2)();
            _closure1_slot8 = var1;
            var1 = false;
            _closure1_slot2 = var1;
            var1 = var4.Map;
            var2 = var1.prototype;
            var2 = Object.create(var2, {constructor: {value: var1}});
            var26 = var2;
            var1 = new var26[var1](var25);
            var1 = var1 instanceof Object ? var1 : var2;
            _closure1_slot5 = var1;
            var1 = var4.Map;
            var2 = var1.prototype;
            var2 = Object.create(var2, {constructor: {value: var1}});
            var26 = var2;
            var1 = new var26[var1](var25);
            var2 = var1 instanceof Object ? var1 : var2;
            var7 = _closure1_slot34;
            var1 = undefined;
            var15 = var7.bind(var1)(var8);
            var8 = var15.bind(var1)();
            var7 = var8.done;
            var14 = 12;
            var13 = 'Delivered ';
            var12 = ' (';
            var11 = ')';
            var10 = 10;
            var9 = 11;
            if(var7) { _fun0016_ip = 386; continue _fun0016 }
 158:
            var7 = var8.value;
            var18 = _closure1_slot5;
            var17 = var18.set;
            var16 = var7.id;
            var16 = var17.bind(var18)(var16, var7);
            var20 = var2.set;
            var18 = var7.id;
            var19 = _closure1_slot0;
            var16 = _closure1_slot1;
            var17 = var16[var10];
            var21 = var19.bind(var1)(var17);
            var17 = var21.isQuestExpired;
            var17 = var17.bind(var21)(var7);
            var17 = var20.bind(var2)(var18, var17);
            var18 = var7.targetedContent;
            var17 = var18.includes;
            var16 = var16[var9];
            var16 = var19.bind(var1)(var16);
            var16 = var16.QuestContent;
            var16 = var16.QUEST_BAR;
            var16 = var17.bind(var18)(var16);
            if(!var16) { _fun0016_ip = 368; continue _fun0016 }
 267:
            var17 = _closure1_slot0;
            var16 = _closure1_slot1;
            var16 = var16[var14];
            var18 = var17.bind(var1)(var16);
            var17 = var18.getQuestLogger;
            var16 = {};
            var19 = _closure1_slot27;
            var19 = var19.QUESTS_STORE;
            var16['location'] = var19;
            var17 = var17.bind(var18)(var16);
            var16 = var17.log;
            var18 = var7.config;
            var18 = var18.messages;
            var25 = var18.questName;
            var23 = var7.id;
            var7 = var4.HermesInternal;
            var7 = var7.concat;
            var26 = var13;
            var24 = var12;
            var22 = var11;
            var7 = var26[var7](var25, var24, var23, var22, var21);
            var7 = var16.bind(var17)(var7);
 368:
            var16 = var15.bind(var1)();
            var7 = var16.done;
            var8 = var16;
            if(!var7) { _fun0016_ip = 158; continue _fun0016 }
 386:
            _closure1_slot28 = var2;
            var2 = var4.Map;
            var7 = var2.prototype;
            var7 = Object.create(var7, {constructor: {value: var2}});
            var26 = var7;
            var2 = new var26[var2](var25);
            var2 = var2 instanceof Object ? var2 : var7;
            _closure1_slot6 = var2;
            var2 = _closure1_slot34;
            var7 = var2.bind(var1)(var5);
            var5 = var7.bind(var1)();
            var2 = var5.done;
            if(var2) { _fun0016_ip = 481; continue _fun0016 }
 441:
            var10 = var5.value;
            var9 = _closure1_slot6;
            var8 = var9.set;
            var2 = var10.id;
            var2 = var8.bind(var9)(var2, var10);
            var8 = var7.bind(var1)();
            var2 = var8.done;
            var5 = var8;
            if(!var2) { _fun0016_ip = 441; continue _fun0016 }
 481:
            var2 = function _startExpirationCheckInterval() {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                    var2 = _closure1_slot31;
                    var1 = null;
                    if(!(var1 === var2)) { _fun0017_ip = 56; continue _fun0017 }
 13:
                    var2 = _closure1_slot43;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    var2 = global;
                    var5 = var2.setInterval;
                    var4 = function() {
                        var2 = _closure1_slot43;
                        var1 = undefined;
                        var2 = var2.bind(var1)();
                        return var1;
                    };
                    var2 = 1000;
                    var2 = var5.bind(var1)(var4, var2);
                    _closure1_slot31 = var2;
                    return var1;
 56:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var2.bind(var1)();
            var2 = null;
            var5 = var2 != var6;
            if(!var5) { _fun0016_ip = 530; continue _fun0016 }
 501:
            var4 = var4.Date;
            var5 = var4.prototype;
            var5 = Object.create(var5, {constructor: {value: var4}});
            var26 = var5;
            var25 = var6;
            var4 = new var26[var4](var25, var24);
            var2 = var4 instanceof Object ? var4 : var5;
 530:
            _closure1_slot29 = var2;
            return var1;
        }
    };
    var2['QUESTS_FETCH_CURRENT_QUESTS_SUCCESS'] = var7;
    var7 = function handleFetchCurrentQuestsFailure() {
        var1 = 0;
        _closure1_slot8 = var1;
        var1 = false;
        _closure1_slot2 = var1;
        var1 = undefined;
        return var1;
    };
    var2['QUESTS_FETCH_CURRENT_QUESTS_FAILURE'] = var7;
    var7 = function handleFetchClaimedQuestsBegin() {
        var1 = true;
        _closure1_slot4 = var1;
        var1 = undefined;
        return var1;
    };
    var2['QUESTS_FETCH_CLAIMED_QUESTS_BEGIN'] = var7;
    var7 = function handleFetchClaimedQuestsSuccess(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
            var1 = arg1;
            var3 = var1.quests;
            var1 = false;
            _closure1_slot4 = var1;
            var1 = global;
            var1 = var1.Map;
            var2 = var1.prototype;
            var2 = Object.create(var2, {constructor: {value: var1}});
            var11 = var2;
            var1 = new var11[var1](var10);
            var1 = var1 instanceof Object ? var1 : var2;
            _closure1_slot7 = var1;
            var2 = _closure1_slot34;
            var1 = undefined;
            var4 = var2.bind(var1)(var3);
            var3 = var4.bind(var1)();
            var2 = var3.done;
            if(var2) { _fun0018_ip = 113; continue _fun0018 }
 73:
            var8 = var3.value;
            var7 = _closure1_slot7;
            var6 = var7.set;
            var2 = var8.id;
            var2 = var6.bind(var7)(var2, var8);
            var6 = var4.bind(var1)();
            var2 = var6.done;
            var3 = var6;
            if(!var2) { _fun0018_ip = 73; continue _fun0018 }
 113:
            return var1;
        }
    };
    var2['QUESTS_FETCH_CLAIMED_QUESTS_SUCCESS'] = var7;
    var7 = function handleFetchClaimedQuestsFailure() {
        var1 = false;
        _closure1_slot4 = var1;
        var1 = undefined;
        return var1;
    };
    var2['QUESTS_FETCH_CLAIMED_QUESTS_FAILURE'] = var7;
    var7 = function handleFetchQuestToDeliverBegin() {
        var1 = true;
        _closure1_slot3 = var1;
        var1 = undefined;
        return var1;
    };
    var2['QUESTS_FETCH_QUEST_TO_DELIVER_BEGIN'] = var7;
    var7 = function handleFetchQuestToDeliverSuccess(arg1) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
            var1 = arg1;
            var9 = var1.quest;
            var3 = var1.placement;
            var8 = var1.adDecisionData;
            var7 = var1.adContext;
            var6 = var1.metadataRaw;
            var1 = global;
            var2 = var1.Date;
            var1 = var2.now;
            var2 = var1.bind(var2)();
            _closure1_slot9 = var2;
            var2 = false;
            _closure1_slot3 = var2;
            var2 = null;
            if(!(var2 != var9)) { _fun0019_ip = 108; continue _fun0019 }
 69:
            var5 = _closure1_slot20;
            var4 = var5.set;
            var2 = {};
            var2['quest'] = var9;
            var2['adDecisionData'] = var8;
            var2['adContext'] = var7;
            var2['metadataRaw'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            _fun0019_ip = 122; continue _fun0019;
 108:
            var2 = _closure1_slot20;
            var1 = var2.delete;
            var1 = var1.bind(var2)(var3);
 122:
            var1 = undefined;
            return var1;
        }
    };
    var2['QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS'] = var7;
    var7 = function handleFetchQuestToDeliverFailure(arg1) {
        var1 = arg1;
        var4 = var1.placement;
        var3 = _closure1_slot20;
        var1 = var3.delete;
        var1 = var1.bind(var3)(var4);
        var1 = global;
        var3 = var1.Date;
        var1 = var3.now;
        var1 = var1.bind(var3)();
        _closure1_slot9 = var1;
        var1 = false;
        _closure1_slot3 = var1;
        var1 = undefined;
        return var1;
    };
    var2['QUESTS_FETCH_QUEST_TO_DELIVER_FAILURE'] = var7;
    var7 = function handleSendHeartbeatSuccess(arg1) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
            var1 = arg1;
            var6 = var1.questId;
            var3 = var1.streamKey;
            var1 = var1.userStatus;
            var5 = _closure1_slot14;
            var4 = var5.add;
            var4 = var4.bind(var5)(var6);
            var5 = _closure1_slot37;
            var4 = {};
            var4['userStatus'] = var1;
            var1 = undefined;
            var4 = var5.bind(var1)(var6, var4);
            var4 = null;
            if(!(var4 != var3)) { _fun0020_ip = 72; continue _fun0020 }
 63:
            var2 = _closure1_slot40;
            var2 = var2.bind(var1)(var3);
 72:
            return var1;
        }
    };
    var2['QUESTS_SEND_HEARTBEAT_SUCCESS'] = var7;
    var7 = function handleSendHeartbeatFailure(arg1) {
        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
            var1 = arg1;
            var6 = var1.questId;
            var4 = var1.streamKey;
            var3 = null;
            var1 = var3 != var4;
            if(!var1) { _fun0021_ip = 45; continue _fun0021 }
 24:
            var5 = _closure1_slot17;
            var2 = var5.get;
            var2 = var2.bind(var5)(var4);
            var1 = var3 == var2;
 45:
            if(!var1) { _fun0021_ip = 132; continue _fun0021 }
 48:
            var5 = global;
            var7 = var5.Map;
            var9 = _closure1_slot17;
            var3 = var7.prototype;
            var3 = Object.create(var3, {constructor: {value: var7}});
            var10 = var3;
            var2 = new var10[var7](var9, var8);
            var3 = var2 instanceof Object ? var2 : var3;
            _closure1_slot17 = var3;
            var2 = var3.set;
            var1 = {};
            var1['questId'] = var6;
            var1['streamKey'] = var4;
            var6 = var5.Date;
            var5 = var6.now;
            var5 = var5.bind(var6)();
            var1['firstFailedAt'] = var5;
            var1 = var2.bind(var3)(var4, var1);
 132:
            var1 = undefined;
            return var1;
        }
    };
    var2['QUESTS_SEND_HEARTBEAT_FAILURE'] = var7;
    var7 = function handleEnrollBegin(arg1) {
        var1 = arg1;
        var4 = var1.questId;
        var1 = global;
        var5 = var1.Set;
        var6 = _closure1_slot10;
        var3 = var5.prototype;
        var3 = Object.create(var3, {constructor: {value: var5}});
        var7 = var3;
        var1 = new var7[var5](var6, var5);
        var1 = var1 instanceof Object ? var1 : var3;
        var3 = var1.add;
        var3 = var3.bind(var1)(var4);
        _closure1_slot10 = var1;
        var1 = undefined;
        return var1;
    };
    var2['QUESTS_ENROLL_BEGIN'] = var7;
    var7 = function handleEnrollSuccess(arg1) {
        var1 = arg1;
        var2 = var1.enrolledQuestUserStatus;
        var6 = _closure1_slot37;
        var5 = var2.questId;
        var4 = {};
        var4['userStatus'] = var2;
        var1 = undefined;
        var4 = var6.bind(var1)(var5, var4);
        var3 = _closure1_slot41;
        var2 = var2.questId;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var2['QUESTS_ENROLL_SUCCESS'] = var7;
    var7 = function handleEnrollFailure(arg1) {
        var1 = arg1;
        var3 = var1.questId;
        var2 = _closure1_slot41;
        var1 = undefined;
        var2 = var2.bind(var1)(var3);
        return var1;
    };
    var2['QUESTS_ENROLL_FAILURE'] = var7;
    var7 = function handleFetchRewardCodeBegin(arg1) {
        var1 = arg1;
        var4 = var1.questId;
        var1 = global;
        var5 = var1.Set;
        var6 = _closure1_slot12;
        var3 = var5.prototype;
        var3 = Object.create(var3, {constructor: {value: var5}});
        var7 = var3;
        var1 = new var7[var5](var6, var5);
        var1 = var1 instanceof Object ? var1 : var3;
        var3 = var1.add;
        var3 = var3.bind(var1)(var4);
        _closure1_slot12 = var1;
        var1 = undefined;
        return var1;
    };
    var2['QUESTS_FETCH_REWARD_CODE_BEGIN'] = var7;
    var7 = function handleFetchRewardCodeSuccess(arg1) {
        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
 0:
            var1 = arg1;
            var4 = var1.questId;
            var6 = var1.rewardCode;
            var1 = global;
            var5 = var1.Set;
            var10 = _closure1_slot12;
            var3 = var5.prototype;
            var3 = Object.create(var3, {constructor: {value: var5}});
            var11 = var3;
            var1 = new var11[var5](var10, var9);
            var1 = var1 instanceof Object ? var1 : var3;
            var3 = var1.delete;
            var3 = var3.bind(var1)(var4);
            _closure1_slot12 = var1;
            var3 = _closure1_slot38;
            var1 = undefined;
            var3 = var3.bind(var1)(var4, var6);
            var5 = _closure1_slot5;
            var3 = var5.get;
            var3 = var3.bind(var5)(var4);
            var8 = null;
            var5 = var8 == var3;
            var7 = undefined;
            if(var5) { _fun0022_ip = 107; continue _fun0022 }
 101:
            var7 = var3.userStatus;
 107:
            var3 = var8 != var7;
            if(!var3) { _fun0022_ip = 124; continue _fun0022 }
 114:
            var5 = var7.claimedAt;
            var3 = var8 == var5;
 124:
            if(!var3) { _fun0022_ip = 171; continue _fun0022 }
 127:
            var3 = _closure1_slot37;
            var2 = {};
            var5 = {};
            var10 = var5;
            var9 = var7;
            var7 = copyDataProperties(var10, var9);
            var7 = var6.claimedAt;
            var6 = 'claimedAt';
            var5[var6] = var7;
            var2['userStatus'] = var5;
            var2 = var3.bind(var1)(var4, var2);
 171:
            return var1;
        }
    };
    var2['QUESTS_FETCH_REWARD_CODE_SUCCESS'] = var7;
    var7 = function handleFetchRewardCodeFailure(arg1) {
        var1 = arg1;
        var4 = var1.questId;
        var1 = global;
        var5 = var1.Set;
        var6 = _closure1_slot12;
        var3 = var5.prototype;
        var3 = Object.create(var3, {constructor: {value: var5}});
        var7 = var3;
        var1 = new var7[var5](var6, var5);
        var1 = var1 instanceof Object ? var1 : var3;
        var3 = var1.delete;
        var3 = var3.bind(var1)(var4);
        _closure1_slot12 = var1;
        var1 = undefined;
        return var1;
    };
    var2['QUESTS_FETCH_REWARD_CODE_FAILURE'] = var7;
    var7 = function handleClaimRewardBegin(arg1) {
        var1 = arg1;
        var4 = var1.questId;
        var1 = global;
        var5 = var1.Set;
        var6 = _closure1_slot11;
        var3 = var5.prototype;
        var3 = Object.create(var3, {constructor: {value: var5}});
        var7 = var3;
        var1 = new var7[var5](var6, var5);
        var1 = var1 instanceof Object ? var1 : var3;
        var3 = var1.add;
        var3 = var3.bind(var1)(var4);
        _closure1_slot11 = var1;
        var1 = undefined;
        return var1;
    };
    var2['QUESTS_CLAIM_REWARD_BEGIN'] = var7;
    var7 = function handleClaimRewardSuccess(arg1) {
        var1 = arg1;
        var4 = var1.questId;
        var3 = var1.entitlements;
        var1 = global;
        var6 = var1.Set;
        var8 = _closure1_slot11;
        var5 = var6.prototype;
        var5 = Object.create(var5, {constructor: {value: var6}});
        var9 = var5;
        var2 = new var9[var6](var8, var7);
        var2 = var2 instanceof Object ? var2 : var5;
        var5 = var2.delete;
        var5 = var5.bind(var2)(var4);
        _closure1_slot11 = var2;
        var2 = _closure1_slot39;
        var1 = undefined;
        var2 = var2.bind(var1)(var4, var3);
        return var1;
    };
    var2['QUESTS_CLAIM_REWARD_SUCCESS'] = var7;
    var7 = function handleClaimRewardFailure(arg1) {
        var1 = arg1;
        var4 = var1.questId;
        var1 = global;
        var5 = var1.Set;
        var6 = _closure1_slot11;
        var3 = var5.prototype;
        var3 = Object.create(var3, {constructor: {value: var5}});
        var7 = var3;
        var1 = new var7[var5](var6, var5);
        var1 = var1 instanceof Object ? var1 : var3;
        var3 = var1.delete;
        var3 = var3.bind(var1)(var4);
        _closure1_slot11 = var1;
        var1 = undefined;
        return var1;
    };
    var2['QUESTS_CLAIM_REWARD_FAILURE'] = var7;
    var7 = function handleDismissContentBegin(arg1) {
        var1 = arg1;
        var4 = var1.questId;
        var1 = global;
        var5 = var1.Set;
        var6 = _closure1_slot13;
        var3 = var5.prototype;
        var3 = Object.create(var3, {constructor: {value: var5}});
        var7 = var3;
        var1 = new var7[var5](var6, var5);
        var1 = var1 instanceof Object ? var1 : var3;
        var3 = var1.add;
        var3 = var3.bind(var1)(var4);
        _closure1_slot13 = var1;
        var1 = undefined;
        return var1;
    };
    var2['QUESTS_DISMISS_CONTENT_BEGIN'] = var7;
    var7 = function handleDismissContentSuccess(arg1) {
        var1 = arg1;
        var2 = var1.dismissedQuestUserStatus;
        var6 = _closure1_slot37;
        var5 = var2.questId;
        var4 = {};
        var4['userStatus'] = var2;
        var1 = undefined;
        var4 = var6.bind(var1)(var5, var4);
        var3 = _closure1_slot42;
        var2 = var2.questId;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var2['QUESTS_DISMISS_CONTENT_SUCCESS'] = var7;
    var7 = function handleDismissContentFailure(arg1) {
        var1 = arg1;
        var3 = var1.questId;
        var2 = _closure1_slot42;
        var1 = undefined;
        var2 = var2.bind(var1)(var3);
        return var1;
    };
    var2['QUESTS_DISMISS_CONTENT_FAILURE'] = var7;
    var7 = function handleQuestUserStatusUpdate(arg1) {
        _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
 0:
            var1 = arg1;
            var5 = var1.user_status;
            var7 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 12;
            var4 = var2[var1];
            var1 = undefined;
            var8 = var7.bind(var1)(var4);
            var6 = var8.getQuestLogger;
            var4 = {};
            var9 = _closure1_slot27;
            var9 = var9.QUESTS_STORE;
            var4['location'] = var9;
            var6 = var6.bind(var8)(var4);
            var9 = var6.log;
            var11 = var5.quest_id;
            var4 = global;
            var8 = var4.HermesInternal;
            var10 = var8.concat;
            var8 = 'Received user status update for ';
            var8 = var10.bind(var8)(var11);
            var8 = var9.bind(var6)(var8, var5);
            var10 = 10;
            var2 = var2[var10];
            var7 = var7.bind(var1)(var2);
            var2 = var7.questUserStatusFromServer;
            var2 = var2.bind(var7)(var5);
            var9 = _closure1_slot37;
            var8 = var5.quest_id;
            var7 = {};
            var7['userStatus'] = var2;
            var7 = var9.bind(var1)(var8, var7);
            var9 = _closure1_slot5;
            var8 = var9.get;
            var7 = var5.quest_id;
            var9 = var8.bind(var9)(var7);
            var7 = null;
            if(!(var7 != var9)) { _fun0023_ip = 278; continue _fun0023 }
 175:
            var8 = _closure1_slot0;
            var7 = _closure1_slot1;
            var7 = var7[var10];
            var8 = var8.bind(var1)(var7);
            var7 = var8.isQuestExpired;
            var9 = var7.bind(var8)(var9);
            var10 = _closure1_slot28;
            var8 = var10.get;
            var7 = var5.quest_id;
            var7 = var8.bind(var10)(var7);
            if(!(var7 !== var9)) { _fun0023_ip = 278; continue _fun0023 }
 227:
            var10 = var4.Map;
            var13 = _closure1_slot28;
            var8 = var10.prototype;
            var8 = Object.create(var8, {constructor: {value: var10}});
            var14 = var8;
            var7 = new var14[var10](var13, var12);
            var8 = var7 instanceof Object ? var7 : var8;
            var7 = var8.set;
            var5 = var5.quest_id;
            var5 = var7.bind(var8)(var5, var9);
            _closure1_slot28 = var5;
 278:
            var8 = var4.Object;
            var7 = var8.keys;
            var5 = var2.progress;
            var5 = var7.bind(var8)(var5);
            var7 = var5.length;
            var5 = 0;
            var5 = var5 === var7;
            if(!var5) { _fun0023_ip = 334; continue _fun0023 }
 314:
            var9 = _closure1_slot30;
            var8 = var9.has;
            var7 = var2.questId;
            var5 = var8.bind(var9)(var7);
 334:
            if(!var5) { _fun0023_ip = 396; continue _fun0023 }
 337:
            var5 = var6.log;
            var8 = var2.questId;
            var4 = var4.HermesInternal;
            var7 = var4.concat;
            var4 = 'Removing optimistic progress for ';
            var4 = var7.bind(var4)(var8);
            var4 = var5.bind(var6)(var4);
            var4 = _closure1_slot30;
            var3 = var4.delete;
            var2 = var2.questId;
            var2 = var3.bind(var4)(var2);
 396:
            return var1;
        }
    };
    var2['QUESTS_USER_STATUS_UPDATE'] = var7;
    var7 = function handleStreamClose(arg1) {
        var1 = arg1;
        var3 = var1.streamKey;
        var2 = _closure1_slot40;
        var1 = undefined;
        var2 = var2.bind(var1)(var3);
        return var1;
    };
    var2['STREAM_CLOSE'] = var7;
    var7 = function handleDismissProgressTrackingFailureNotice(arg1) {
        var1 = arg1;
        var3 = var1.streamKey;
        var2 = _closure1_slot40;
        var1 = undefined;
        var2 = var2.bind(var1)(var3);
        return var1;
    };
    var2['QUESTS_DISMISS_PROGRESS_TRACKING_FAILURE_NOTICE'] = var7;
    var7 = function handlePreviewUpdateSuccess(arg1) {
        _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
 0:
            var1 = arg1;
            var2 = var1.previewQuestUserStatus;
            var6 = _closure1_slot37;
            var5 = var2.questId;
            var4 = {};
            var4['userStatus'] = var2;
            var1 = undefined;
            var4 = var6.bind(var1)(var5, var4);
            var5 = var2.claimedAt;
            var4 = null;
            if(!(var4 == var5)) { _fun0024_ip = 101; continue _fun0024 }
 49:
            var5 = global;
            var7 = var5.Map;
            var9 = _closure1_slot15;
            var6 = var7.prototype;
            var6 = Object.create(var6, {constructor: {value: var7}});
            var10 = var6;
            var5 = new var10[var7](var9, var8);
            var7 = var5 instanceof Object ? var5 : var6;
            _closure1_slot15 = var7;
            var6 = var7.delete;
            var5 = var2.questId;
            var5 = var6.bind(var7)(var5);
 101:
            var5 = var2.enrolledAt;
            if(!(var4 == var5)) { _fun0024_ip = 194; continue _fun0024 }
 111:
            var5 = global;
            var7 = var5.Map;
            var9 = _closure1_slot19;
            var6 = var7.prototype;
            var6 = Object.create(var6, {constructor: {value: var7}});
            var10 = var6;
            var5 = new var10[var7](var9, var8);
            var7 = var5 instanceof Object ? var5 : var6;
            _closure1_slot19 = var7;
            var6 = var7.delete;
            var5 = var2.questId;
            var5 = var6.bind(var7)(var5);
            var6 = _closure1_slot26;
            var5 = var6.getState;
            var7 = var5.bind(var6)();
            var6 = var7.resetQuest;
            var5 = var2.questId;
            var5 = var6.bind(var7)(var5);
 194:
            var7 = _closure1_slot5;
            var6 = var7.get;
            var5 = var2.questId;
            var6 = var6.bind(var7)(var5);
            if(!(var4 != var6)) { _fun0024_ip = 326; continue _fun0024 }
 218:
            var5 = _closure1_slot0;
            var7 = _closure1_slot1;
            var4 = 10;
            var4 = var7[var4];
            var5 = var5.bind(var1)(var4);
            var4 = var5.isQuestExpired;
            var6 = var4.bind(var5)(var6);
            var7 = _closure1_slot28;
            var5 = var7.get;
            var4 = var2.questId;
            var4 = var5.bind(var7)(var4);
            if(!(var4 !== var6)) { _fun0024_ip = 326; continue _fun0024 }
 273:
            var4 = global;
            var7 = var4.Map;
            var9 = _closure1_slot28;
            var5 = var7.prototype;
            var5 = Object.create(var5, {constructor: {value: var7}});
            var10 = var5;
            var4 = new var10[var7](var9, var8);
            var5 = var4 instanceof Object ? var4 : var5;
            var4 = var5.set;
            var2 = var2.questId;
            var2 = var4.bind(var5)(var2, var6);
            _closure1_slot28 = var2;
 326:
            return var1;
        }
    };
    var2['QUESTS_PREVIEW_UPDATE_SUCCESS'] = var7;
    var7 = function handleDeliveryOverride(arg1) {
        _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
 0:
            var1 = arg1;
            var3 = var1.questId;
            var4 = _closure1_slot18;
            var1 = null;
            if(!(var4 !== var3)) { _fun0025_ip = 25; continue _fun0025 }
 22:
            var1 = var3;
 25:
            _closure1_slot18 = var1;
            var1 = undefined;
            return var1;
        }
    };
    var2['QUESTS_DELIVERY_OVERRIDE'] = var7;
    var7 = function handleSelectTaskPlatform(arg1) {
        _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
 0:
            var1 = arg1;
            var3 = var1.questId;
            var5 = var1.platform;
            var1 = global;
            var6 = var1.Map;
            var8 = _closure1_slot19;
            var4 = var6.prototype;
            var4 = Object.create(var4, {constructor: {value: var6}});
            var9 = var4;
            var2 = new var9[var6](var8, var7);
            var2 = var2 instanceof Object ? var2 : var4;
            _closure1_slot19 = var2;
            var2 = null;
            if(!(var2 != var5)) { _fun0026_ip = 77; continue _fun0026 }
 60:
            var4 = _closure1_slot19;
            var2 = var4.set;
            var2 = var2.bind(var4)(var3, var5);
            _fun0026_ip = 91; continue _fun0026;
 77:
            var2 = _closure1_slot19;
            var1 = var2.delete;
            var1 = var1.bind(var2)(var3);
 91:
            var1 = undefined;
            return var1;
        }
    };
    var2['QUESTS_SELECT_TASK_PLATFORM'] = var7;
    var7 = function handleUpdateOptimisticProgress(arg1) {
        _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
 0:
            var1 = arg1;
            var4 = var1.questId;
            var6 = var1.taskEventName;
            var5 = var1.progress;
            var3 = _closure1_slot30;
            var2 = var3.get;
            var3 = var2.bind(var3)(var4);
            var2 = null;
            if(!(var2 == var3)) { _fun0027_ip = 72; continue _fun0027 }
 44:
            var2 = global;
            var2 = var2.Map;
            var7 = var2.prototype;
            var7 = Object.create(var7, {constructor: {value: var2}});
            var10 = var7;
            var2 = new var10[var2](var9);
            var3 = var2 instanceof Object ? var2 : var7;
 72:
            var2 = var3.set;
            var2 = var2.bind(var3)(var6, var5);
            var2 = _closure1_slot30;
            var1 = var2.set;
            var1 = var1.bind(var2)(var4, var3);
            var1 = undefined;
            return var1;
        }
    };
    var2['QUESTS_UPDATE_OPTIMISTIC_PROGRESS'] = var7;
    var7 = function handleResetOptimisticProgress(arg1) {
        _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
 0:
            var1 = arg1;
            var3 = var1.questId;
            var4 = _closure1_slot30;
            var2 = var4.has;
            var2 = var2.bind(var4)(var3);
            if(!var2) { _fun0028_ip = 43; continue _fun0028 }
 29:
            var4 = _closure1_slot30;
            var2 = var4.delete;
            var2 = var2.bind(var4)(var3);
 43:
            var2 = _closure1_slot26;
            var1 = var2.getState;
            var2 = var1.bind(var2)();
            var1 = var2.resetQuest;
            var1 = var1.bind(var2)(var3);
            var1 = undefined;
            return var1;
        }
    };
    var2['QUESTS_RESET_OPTIMISTIC_PROGRESS'] = var7;
    var7 = function handleUserCompletionUpdate(arg1) {
        _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
 0:
            var1 = arg1;
            var4 = var1.quest_enrollment_blocked_until;
            var2 = null;
            var1 = var2 != var4;
            if(!var1) { _fun0029_ip = 49; continue _fun0029 }
 18:
            var1 = global;
            var1 = var1.Date;
            var3 = var1.prototype;
            var3 = Object.create(var3, {constructor: {value: var1}});
            var6 = var3;
            var5 = var4;
            var1 = new var6[var1](var5, var4);
            var2 = var1 instanceof Object ? var1 : var3;
 49:
            _closure1_slot29 = var2;
            var1 = undefined;
            return var1;
        }
    };
    var2['QUESTS_USER_COMPLETION_UPDATE'] = var7;
    var7 = var9.prototype;
    var7 = Object.create(var7, {constructor: {value: var9}});
    var15 = var7;
    var13 = var2;
    var2 = new var15[var9](var14, var13, var12);
    var2 = var2 instanceof Object ? var2 : var7;
    var _closure1_slot32 = var2;
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/QuestsStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();