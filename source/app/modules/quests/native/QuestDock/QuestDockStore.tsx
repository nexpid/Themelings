// app/modules/quests/native/QuestDock/QuestDockStore.tsx
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
            _closure1_slot11 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.QuestDockMode;
    var _closure1_slot9 = var2;
    var2 = var2.COLLAPSED;
    var _closure1_slot2 = var2;
    var2 = null;
    var _closure1_slot3 = var2;
    var2 = false;
    var _closure1_slot10 = var2;
    var2 = 7;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.PersistedStore;
    var2 = function(arg1) {
        var4 = function QuestDockStore() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot4;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot7;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot6;
                var1 = _closure1_slot11;
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
                var6 = _closure1_slot7;
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
        var5 = _closure1_slot8;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot5;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var1 = arg1;
                var2 = null;
                if(!(var2 != var1)) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                var1 = var1.questDockSoftDismissedAt;
                _closure1_slot3 = var1;
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 6;
                var3 = var3[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.isSoftDismissed;
                var1 = _closure1_slot3;
                var1 = var3.bind(var4)(var1);
                var3 = _closure1_slot9;
                if(var1) { _fun0003_ip = 5; continue _fun0003 }
case 11:
                var1 = var3.COLLAPSED;
                _fun0003_ip = 12; continue _fun0003;
case 5:
                var1 = var3.SOFT_DISMISSED;
case 12:
                _closure1_slot2 = var1;
case 9:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(5);
        var1[0] = var5;
        var5 = {};
        var7 = 'getState';
        var5['key'] = var7;
        var7 = function value() {
            var1 = {};
            var3 = _closure1_slot2;
            var1['prevRestingQuestDockMode'] = var3;
            var2 = _closure1_slot3;
            var1['questDockSoftDismissedAt'] = var2;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'prevRestingQuestDockMode';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot2;
            return var1;
        };
        var5['get'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'questDockSoftDismissedAt';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot3;
            return var1;
        };
        var5['get'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'isVisible';
        var5['key'] = var7;
        var6 = function get() {
            var1 = _closure1_slot10;
            return var1;
        };
        var5['get'] = var6;
        var1[4] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'QuestDockStore';
    var8['displayName'] = var2;
    var8['persistKey'] = var2;
    var2 = 8;
    var2 = var6[var2];
    var12 = var7.bind(var1)(var2);
    var2 = {};
    var9 = function handlePrevRestingQuestDockModeUpdate(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var4 = var2.mode;
            var1 = _closure1_slot2;
            var1 = var4 !== var1;
            var4 = var2.mode;
            _closure1_slot2 = var4;
            if(!var1) { _fun0004_ip = 13; continue _fun0004 }
case 14:
            var5 = var2.mode;
            var2 = _closure1_slot9;
            var4 = var2.SOFT_DISMISSED;
            var2 = null;
            if(!(var5 === var4)) { _fun0004_ip = 6; continue _fun0004 }
case 15:
            var4 = global;
            var5 = var4.Date;
            var4 = var5.now;
            var2 = var4.bind(var5)();
case 6:
            _closure1_slot3 = var2;
case 13:
            return var1;
        }
    };
    var2['QUESTS_PREV_RESTING_QUEST_DOCK_MODE_UPDATE'] = var9;
    var9 = function handleResetSoftDismissal() {
        var1 = _closure1_slot9;
        var1 = var1.COLLAPSED;
        _closure1_slot2 = var1;
        var1 = null;
        _closure1_slot3 = var1;
        var1 = undefined;
        return var1;
    };
    var2['QUESTS_DOCK_RESET_SOFT_DISMISSAL'] = var9;
    var4 = function handleQuestDockVisibilityOverrideUpdate(arg1) {
        var1 = arg1;
        var2 = var1.isVisible;
        _closure1_slot10 = var2;
        var1 = undefined;
        return var1;
    };
    var2['QUESTS_DOCK_OVERRIDE_VISIBILITY_UPDATE'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var13 = var4;
    var11 = var2;
    var2 = new var13[var8](var12, var11, var10);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/native/QuestDock/QuestDockStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();