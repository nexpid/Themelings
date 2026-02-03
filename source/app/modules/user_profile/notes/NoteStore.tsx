// app/modules/user_profile/notes/NoteStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
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
            _closure1_slot6 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot6 = var1;
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
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot1 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.TypeTag;
    var4 = var4.constructInPlace;
    var _closure1_slot5 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.LibdiscoreStore;
    var4 = function(arg1) {
        var4 = function NoteStore(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var4 = this;
                var12 = 0;
                var1 = copyRestArgs(var12);
                var7 = _closure1_slot0;
                var2 = _closure2_slot0;
                var3 = undefined;
                var7 = var7.bind(var3)(var4, var2);
                var9 = new Array(0);
                var12 = var9;
                var11 = var1;
                var10 = 0;
                var1 = arraySpread(var12, var11, var10);
                var1 = _closure1_slot3;
                var8 = var1.bind(var3)(var2);
                var2 = _closure1_slot2;
                var1 = _closure1_slot6;
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
                var5 = _closure1_slot3;
                var5 = var5.bind(var3)(var4);
                var5 = var5.constructor;
                var1 = var6.bind(var7)(var8, var9, var5);
case 8:
                var1 = var2.bind(var3)(var4, var1);
                var3 = var1.addKVDatabase;
                var2 = 'notes';
                var2 = var3.bind(var1)(var2);
                var1['database'] = var2;
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
        var1 = 'getNote';
        var5['key'] = var1;
        var1 = function value(arg1) {
            var1 = this;
            var3 = var1.database;
            var2 = var3.get;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(2);
        var1[0] = var5;
        var5 = {};
        var7 = 'stateWrapper';
        var5['key'] = var7;
        var6 = function value() {
            var1 = this;
            var1 = var1.database;
            return var1;
        };
        var5['value'] = var6;
        var1[1] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var4.bind(var1)(var7);
    var4 = 'NoteStore';
    var8['displayName'] = var4;
    var7 = {};
    var4 = function CONNECTION_OPEN(arg1, arg2) {
        var2 = arg2;
        var1 = var2.clear;
        var1 = var1.bind(var2)();
        return var1;
    };
    var7['CONNECTION_OPEN'] = var4;
    var4 = function OVERLAY_INITIALIZE(arg1, arg2) {
        var2 = arg2;
        var1 = var2.clear;
        var1 = var1.bind(var2)();
        return var1;
    };
    var7['OVERLAY_INITIALIZE'] = var4;
    var4 = function USER_NOTE_UPDATE(arg1, arg2) {
        var1 = arg1;
        var5 = arg2;
        var4 = var5.set;
        var3 = var1.id;
        var7 = _closure1_slot5;
        var6 = {};
        var2 = false;
        var6['loading'] = var2;
        var1 = var1.note;
        var6['note'] = var1;
        var1 = undefined;
        var2 = 'Note';
        var2 = var7.bind(var1)(var2, var6);
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var7['USER_NOTE_UPDATE'] = var4;
    var2 = function USER_NOTE_LOAD_START(arg1, arg2) {
        var5 = arg2;
        var4 = var5.set;
        var1 = arg1;
        var3 = var1.userId;
        var7 = _closure1_slot5;
        var1 = undefined;
        var6 = 'Note';
        var2 = {'loading': true, 'note': null};
        var2 = var7.bind(var1)(var6, var2);
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var7['USER_NOTE_LOAD_START'] = var2;
    var2 = 7;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var4 = var2.LibdiscoreBatchStoreRefactorExperiment;
    var2 = var4.getCachedBridgedStoreMode;
    var11 = var2.bind(var4)();
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var13 = var4;
    var12 = var7;
    var2 = new var13[var8](var12, var11, var10);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/notes/NoteStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    var2 = 'Note';
    var3['NoteRecordTypeTag'] = var2;
    return var1;
})();