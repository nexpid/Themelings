// app/modules/checkpoint/CheckpointStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
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
    var1 = function resetState() {
        var1 = {};
        _closure1_slot6 = var1;
        var1 = _closure1_slot5;
        var1 = var1.INIT;
        _closure1_slot7 = var1;
        var1 = false;
        _closure1_slot8 = var1;
        var1 = undefined;
        return var1;
    };
    var _closure1_slot12 = var1;
    var1 = global;
    var9 = var1.Object;
    var4 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var9)(var3, var1, var2);
    var13 = 0;
    var2 = var7[var13];
    var1 = undefined;
    var2 = var8.bind(var1)(var2);
    var _closure1_slot0 = var2;
    var12 = 1;
    var2 = var7[var12];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot1 = var2;
    var11 = 2;
    var2 = var7[var11];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var10 = 3;
    var2 = var7[var10];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 4;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 5;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var4 = var2.CheckpointSlides;
    var2 = {};
    var2['INIT'] = var13;
    var9 = 'INIT';
    var2[var13] = var9;
    var2['FETCHING'] = var12;
    var9 = 'FETCHING';
    var2[var12] = var9;
    var2['SUCCESS'] = var11;
    var9 = 'SUCCESS';
    var2[var11] = var9;
    var2['ERROR'] = var10;
    var9 = 'ERROR';
    var2[var10] = var9;
    var _closure1_slot5 = var2;
    var9 = {};
    var _closure1_slot6 = var9;
    var9 = var2.INIT;
    var _closure1_slot7 = var9;
    var9 = false;
    var _closure1_slot8 = var9;
    var9 = {'volume': 1, 'isMuted': false, 'highestSlideSeen': null, 'hasSeenRewatchPopover': false};
    var4 = var4.WELCOME;
    var9['highestSlideSeen'] = var4;
    var _closure1_slot9 = var9;
    var4 = {};
    var16 = var4;
    var15 = var9;
    var9 = copyDataProperties(var16, var15);
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var9 = var4.PersistedStore;
    var4 = function(arg1) {
        var4 = function CheckpointStore() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
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
                var6 = _closure1_slot3;
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
        var5 = _closure1_slot4;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot1;
        var5 = {};
        var1 = 'getState';
        var5['key'] = var1;
        var1 = function value() {
            var1 = _closure1_slot10;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(9);
        var1[0] = var5;
        var5 = {};
        var7 = 'initialize';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var4 = arg1;
                var2 = _closure1_slot12;
                var1 = undefined;
                var2 = var2.bind(var1)();
                var2 = null;
                if(!(var2 != var4)) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                var2 = {};
                var6 = _closure1_slot10;
                var7 = var2;
                var5 = copyDataProperties(var7, var6);
                var7 = var2;
                var6 = var4;
                var4 = copyDataProperties(var7, var6);
                _closure1_slot10 = var2;
case 9:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getCheckpointData';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot6;
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getFetchState';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot7;
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'volume';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot10;
            var1 = var1.volume;
            return var1;
        };
        var5['get'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'isMuted';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot10;
            var1 = var1.isMuted;
            return var1;
        };
        var5['get'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'highestSlideSeen';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot10;
            var1 = var1.highestSlideSeen;
            return var1;
        };
        var5['get'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'hasSeenRewatchPopover';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot10;
            var1 = var1.hasSeenRewatchPopover;
            return var1;
        };
        var5['get'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'hasOpenedCheckpointThisSession';
        var5['key'] = var7;
        var6 = function get() {
            var1 = _closure1_slot8;
            return var1;
        };
        var5['get'] = var6;
        var1[8] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var9 = var4.bind(var1)(var9);
    var4 = 'CheckpointStore';
    var9['displayName'] = var4;
    var9['persistKey'] = var4;
    var4 = 7;
    var4 = var7[var4];
    var16 = var8.bind(var1)(var4);
    var4 = {};
    var10 = function handleCheckpointFetchStart() {
        var1 = _closure1_slot5;
        var1 = var1.FETCHING;
        _closure1_slot7 = var1;
        var1 = undefined;
        return var1;
    };
    var4['CHECKPOINT_FETCH_START'] = var10;
    var10 = function handleCheckpointFetchSuccess(arg1) {
        var1 = arg1;
        var1 = var1.data;
        _closure1_slot6 = var1;
        var1 = _closure1_slot5;
        var1 = var1.SUCCESS;
        _closure1_slot7 = var1;
        var1 = undefined;
        return var1;
    };
    var4['CHECKPOINT_FETCH_SUCCESS'] = var10;
    var10 = function handleCheckpointFetchFailed() {
        var1 = _closure1_slot5;
        var1 = var1.ERROR;
        _closure1_slot7 = var1;
        var1 = undefined;
        return var1;
    };
    var4['CHECKPOINT_FETCH_FAILED'] = var10;
    var10 = function handleSetVolume(arg1) {
        var2 = _closure1_slot10;
        var1 = arg1;
        var1 = var1.volume;
        var2['volume'] = var1;
        var1 = undefined;
        return var1;
    };
    var4['CHECKPOINT_SET_VOLUME'] = var10;
    var10 = function handleToggleMute() {
        var2 = _closure1_slot10;
        var1 = var2.isMuted;
        var1 = !var1;
        var2['isMuted'] = var1;
        var1 = undefined;
        return var1;
    };
    var4['CHECKPOINT_TOGGLE_MUTE'] = var10;
    var10 = function handleSetHighestSlideSeen(arg1) {
        var2 = _closure1_slot10;
        var1 = arg1;
        var1 = var1.slide;
        var2['highestSlideSeen'] = var1;
        var1 = undefined;
        return var1;
    };
    var4['CHECKPOINT_SET_HIGHEST_SLIDE_SEEN'] = var10;
    var10 = function handleClosedCheckpoint() {
        var1 = true;
        _closure1_slot8 = var1;
        var1 = undefined;
        return var1;
    };
    var4['CHECKPOINT_AFTER_CLOSED'] = var10;
    var10 = function handleHasSeenRewatchPopover() {
        var2 = _closure1_slot10;
        var1 = true;
        var2['hasSeenRewatchPopover'] = var1;
        var1 = undefined;
        return var1;
    };
    var4['CHECKPOINT_SET_HAS_SEEN_REWATCH_POPOVER'] = var10;
    var5 = function handleLogout() {
        var2 = _closure1_slot12;
        var1 = undefined;
        var2 = var2.bind(var1)();
        var2 = {};
        var5 = _closure1_slot9;
        var6 = var2;
        var4 = copyDataProperties(var6, var5);
        _closure1_slot10 = var2;
        return var1;
    };
    var4['LOGOUT'] = var5;
    var5 = var9.prototype;
    var5 = Object.create(var5, {constructor: {value: var9}});
    var17 = var5;
    var15 = var4;
    var4 = new var17[var9](var16, var15, var14);
    var4 = var4 instanceof Object ? var4 : var5;
    var5 = 8;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/checkpoint/CheckpointStore.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['FetchStates'] = var2;
    return var1;
})();