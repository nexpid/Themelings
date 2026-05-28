// app/modules/quests/UnenrolledActivityQuestStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
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
            _closure1_slot9 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot9 = var1;
    var2 = global;
    var9 = var2.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var7);
    var1 = 0;
    var7 = var5[var1];
    var1 = undefined;
    var7 = var6.bind(var1)(var7);
    var _closure1_slot2 = var7;
    var7 = 1;
    var7 = var5[var7];
    var7 = var6.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var7 = 2;
    var7 = var5[var7];
    var7 = var6.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var7 = 3;
    var7 = var5[var7];
    var7 = var6.bind(var1)(var7);
    var _closure1_slot5 = var7;
    var7 = 4;
    var7 = var5[var7];
    var7 = var6.bind(var1)(var7);
    var _closure1_slot6 = var7;
    var8 = var2.Set;
    var7 = var8.prototype;
    var13 = Object.create(var7, {constructor: {value: var8}});
    var7 = new var13[var8](var12);
    var2 = var2.Set;
    var7 = var2.prototype;
    var7 = Object.create(var7, {constructor: {value: var2}});
    var13 = var7;
    var2 = new var13[var2](var12);
    var2 = var2 instanceof Object ? var2 : var7;
    var _closure1_slot7 = var2;
    var2 = false;
    var _closure1_slot8 = var2;
    var2 = 6;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var7 = var2.PersistedStore;
    var2 = function(arg1) {
        var4 = function UnenrolledActivityQuestStore() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
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
                var1 = _closure1_slot9;
                var1 = var1.bind(var3)();
                if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0002_ip = 8; continue _fun0002;
case 6:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 8:
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
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var5 = arg1;
                var1 = global;
                var6 = var1.Set;
                var2 = null;
                var4 = var2 == var5;
                var1 = undefined;
                var3 = undefined;
                if(var4) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                var3 = var5.dismissedQuestIds;
case 9:
                if(!(var2 == var3)) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                var3 = new Array(0);
case 11:
                var4 = var6.prototype;
                var4 = Object.create(var4, {constructor: {value: var6}});
                var8 = var4;
                var7 = var3;
                var3 = new var8[var6](var7, var6);
                var4 = var3 instanceof Object ? var3 : var4;
                _closure1_slot7 = var4;
                var6 = var2 == var5;
                var4 = undefined;
                if(var6) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                var4 = var5.autoEnroll;
case 13:
                var2 = var2 != var4;
                if(!var2) { _fun0003_ip = 15; continue _fun0003 }
case 16:
                var2 = var4;
case 15:
                _closure1_slot8 = var2;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(4);
        var1[0] = var5;
        var5 = {};
        var7 = 'getState';
        var5['key'] = var7;
        var7 = function value() {
            var1 = {};
            var7 = _closure1_slot7;
            var3 = new Array(0);
            var6 = 0;
            var8 = var3;
            var4 = arraySpread(var8, var7, var6);
            var1['dismissedQuestIds'] = var3;
            var2 = _closure1_slot8;
            var1['autoEnroll'] = var2;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'isDismissed';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var4 = arg1;
                var1 = null;
                var1 = var1 != var4;
                if(!var1) { _fun0004_ip = 17; continue _fun0004 }
case 18:
                var3 = _closure1_slot7;
                var2 = var3.has;
                var1 = var2.bind(var3)(var4);
case 17:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getDismissedQuestIds';
        var5['key'] = var7;
        var6 = function value() {
            var1 = _closure1_slot7;
            return var1;
        };
        var5['value'] = var6;
        var1[3] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var7 = var2.bind(var1)(var7);
    var2 = 'UnenrolledActivityQuestStore';
    var7['displayName'] = var2;
    var7['persistKey'] = var2;
    var2 = 7;
    var2 = var5[var2];
    var12 = var6.bind(var1)(var2);
    var2 = {};
    var8 = function handleDismissUnenrolledActivityQuest(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = _closure1_slot7;
            var3 = var2.size;
            var2 = 20;
            if(!(var3 >= var2)) { _fun0005_ip = 19; continue _fun0005 }
case 20:
            var2 = global;
            var5 = var2.Array;
            var4 = var5.from;
            var3 = _closure1_slot7;
            var5 = var4.bind(var5)(var3);
            var4 = var5.sort;
            var7 = _closure1_slot0;
            var6 = _closure1_slot1;
            var3 = 5;
            var6 = var6[var3];
            var3 = undefined;
            var3 = var7.bind(var3)(var6);
            var3 = var3.compare;
            var5 = var4.bind(var5)(var3);
            var4 = var5.slice;
            var7 = var2.Math;
            var6 = var7.floor;
            var3 = 10;
            var3 = var6.bind(var7)(var3);
            var5 = var4.bind(var5)(var3);
            var4 = var2.Set;
            var3 = var5.map;
            var2 = function(arg1) {
                var2 = arg1;
                var1 = var2.toString;
                var1 = var1.bind(var2)();
                return var1;
            };
            var8 = var3.bind(var5)(var2);
            var3 = var4.prototype;
            var3 = Object.create(var3, {constructor: {value: var4}});
            var9 = var3;
            var2 = new var9[var4](var8, var7);
            var2 = var2 instanceof Object ? var2 : var3;
            _closure1_slot7 = var2;
case 19:
            var3 = _closure1_slot7;
            var2 = var3.add;
            var1 = arg1;
            var1 = var1.questId;
            var1 = var2.bind(var3)(var1);
            var1 = true;
            return var1;
        }
    };
    var2['UNENROLLED_ACTIVITY_QUEST_DISMISS'] = var8;
    var4 = function handleSetAutoEnroll(arg1) {
        var1 = arg1;
        var2 = var1.autoEnroll;
        _closure1_slot8 = var2;
        var1 = true;
        return var1;
    };
    var2['UNENROLLED_ACTIVITY_QUEST_AUTO_ENROLL'] = var4;
    var4 = var7.prototype;
    var4 = Object.create(var4, {constructor: {value: var7}});
    var13 = var4;
    var11 = var2;
    var2 = new var13[var7](var12, var11, var10);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 8;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/UnenrolledActivityQuestStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();