// app/modules/user_profile/hooks/useNote.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _fetchNote() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    var9 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var6 = var9;
                    var2 = undefined;
                    var10 = undefined;
                    var7 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var5 = 5;
                    var4 = var4[var5];
                    var8 = var7.bind(var2)(var4);
                    var7 = var8.dispatch;
                    var4 = {};
                    var11 = 'USER_NOTE_LOAD_START';
                    var4['type'] = var11;
                    var4['userId'] = var9;
                    var4 = var7.bind(var8)(var4);
case 4: // try_start_0
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var4 = 6;
                    var4 = var8[var4];
                    var4 = var7.bind(var2)(var4);
                    var8 = var4.HTTP;
                    var7 = var8.get;
                    var4 = {'url': null, 'oldFormErrors': true, 'rejectWithError': true};
                    var12 = _closure1_slot6;
                    var11 = var12.NOTE;
                    var9 = var6;
                    var9 = var11.bind(var12)(var9);
                    var4['url'] = var9;
                    var4 = var7.bind(var8)(var4);
                    SaveGenerator(address=142);
case 5:
                    return var4;
case 6:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                    if(var7) { _fun0001_ip = 7; continue _fun0001 }
case 8:
                    var7 = var4.body;
                    var10 = var7;
                    var8 = var7.note_user_id;
                    var7 = var6;
                    if(!(var8 === var7)) { _fun0001_ip = 9; continue _fun0001 }
case 10:
                    var8 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var7 = var7[var5];
                    var9 = var8.bind(var2)(var7);
                    var8 = var9.dispatch;
                    var7 = {};
                    var11 = 'USER_NOTE_UPDATE';
                    var7['type'] = var11;
                    var11 = var6;
                    var7['id'] = var11;
                    var10 = var10.note;
                    var7['note'] = var10;
                    var7 = var8.bind(var9)(var7);
case 11: // try_end0
                    _fun0001_ip = 12; continue _fun0001;
case 9: // try_start_1
                    var7 = global;
                    var9 = var7.Error;
                    var7 = var9.prototype;
                    var8 = Object.create(var7, {constructor: {value: var9}});
                    var13 = 'Invalid response from server';
                    var14 = var8;
                    var7 = new var14[var9](var13, var12);
                    var7 = var7 instanceof Object ? var7 : var8;
                    throw var7;
case 7: // try_end1
                    return var4;
case 13: // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=3);
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var3 = var3[var5];
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var7 = 'USER_NOTE_UPDATE';
                    var3['type'] = var7;
                    var3['id'] = var6;
                    var3 = var4.bind(var5)(var3);
case 12:
                    return var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot7 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot7 = var1;
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
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Endpoints;
    var _closure1_slot6 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/hooks/useNote.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useNote(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var6 = arg1;
            var _closure2_slot0 = var6;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 4;
            var4 = var4[var1];
            var1 = undefined;
            var7 = var5.bind(var1)(var4);
            var5 = var7.useStateFromStores;
            var1 = _closure1_slot5;
            var4 = new Array(1);
            var4[0] = var1;
            var1 = function() {
                var3 = _closure1_slot5;
                var2 = var3.getNote;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var5.bind(var7)(var4, var1);
            var _closure2_slot1 = var1;
            var5 = _closure1_slot4;
            var4 = var5.useEffect;
            var3 = new Array(2);
            var3[0] = var1;
            var3[1] = var6;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 == var3)) { _fun0003_ip = 14; continue _fun0003 }
case 3:
                    var3 = _closure2_slot0;
                    var2 = function fetchNote() {
                        var1 = undefined;
                        var4 = _closure1_slot7;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var1 = undefined;
                    var1 = var2.bind(var1)(var3);
case 14:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var2, var3);
            var2 = null;
            if(!(var2 == var1)) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var1 = {'loading': true, 'note': null};
case 15:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();