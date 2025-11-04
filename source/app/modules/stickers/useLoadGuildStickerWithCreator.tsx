// app/modules/stickers/useLoadGuildStickerWithCreator.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/stickers/useLoadGuildStickerWithCreator.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useLoadGuildStickersWithCreator(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var _closure2_slot0 = var1;
            var7 = _closure1_slot4;
            var5 = var7.useState;
            var4 = 'loading';
            var6 = var5.bind(var7)(var4);
            var5 = _closure1_slot3;
            var8 = undefined;
            var4 = 2;
            var6 = var5.bind(var8)(var6, var4);
            var4 = 0;
            var4 = var6[var4];
            var5 = 1;
            var5 = var6[var5];
            var _closure2_slot1 = var5;
            var6 = _closure1_slot0;
            var9 = _closure1_slot1;
            var5 = 5;
            var5 = var9[var5];
            var8 = var6.bind(var8)(var5);
            var6 = var8.useStateFromStores;
            var2 = _closure1_slot6;
            var5 = new Array(1);
            var5[0] = var2;
            var2 = function() {
                var3 = _closure1_slot6;
                var2 = var3.getStickersByGuildId;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var5 = var6.bind(var8)(var5, var2);
            var6 = var7.useEffect;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var2 = global;
                var2 = var2.AbortController;
                var3 = var2.prototype;
                var3 = Object.create(var3, {constructor: {value: var2}});
                var4 = var3;
                var2 = new var4[var2](var3);
                var2 = var2 instanceof Object ? var2 : var3;
                var _closure3_slot0 = var2;
                var2 = var2.signal;
                var _closure3_slot1 = var2;
                var2 = function() {
                    var4 = _closure1_slot2;
                    var3 = undefined;
                    var2 = function* () {
                        var1 = function* anon_0_() {
                            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0002_ip = 2; continue _fun0002 }
case 3: // try_start_0
                                var3 = _closure1_slot0;
                                var4 = _closure1_slot1;
                                var2 = 6;
                                var2 = var4[var2];
                                var6 = undefined;
                                var8 = var3.bind(var6)(var2);
                                var7 = var8.fetchGuildStickersWithCreator;
                                var5 = _closure2_slot0;
                                var2 = _closure3_slot1;
                                var2 = var7.bind(var8)(var5, var2);
                                SaveGenerator(address=62);
case 4:
                                return var2;
case 5:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                                if(var5) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                                var5 = _closure2_slot1;
                                var3 = 'success';
                                var3 = var5.bind(var6)(var3);
                                var3 = null;
                                _closure3_slot0 = var3;
case 8: // try_end0
                                _fun0002_ip = 9; continue _fun0002;
case 6:
                                return var2;
case 10: // catch_target0
                                CatchBlockStart(arg_register=1);
                                var4 = _closure2_slot1;
                                var3 = undefined;
                                var2 = 'error';
                                var2 = var4.bind(var3)(var2);
                                var2 = null;
                                _closure3_slot0 = var2;
case 9:
                                var2 = undefined;
                                return var2;
case 2:
                                return var1;
                            }
                        };
                        return var1;
                    };
                    var2 = var4.bind(var3)(var2);
                    var _closure4_slot0 = var2;
                    var1 = function() {
                        var1 = undefined;
                        var4 = _closure4_slot0;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    return var1;
                };
                var3 = undefined;
                var2 = var2.bind(var3)();
                var2 = var2.bind(var3)();
                var1 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var3 = _closure2_slot1;
                        var1 = undefined;
                        var2 = 'loading';
                        var2 = var3.bind(var1)(var2);
                        var3 = _closure3_slot0;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                        var2 = var3.abort;
                        var2 = var2.bind(var3)();
case 11:
                        return var1;
                    }
                };
                return var1;
            };
            var1 = var6.bind(var7)(var1, var2);
            var1 = 'success';
            if(!(var1 !== var4)) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var1 = {};
            var1['status'] = var4;
            _fun0001_ip = 15; continue _fun0001;
case 13:
            var2 = {};
            var2['status'] = var4;
            var4 = var5.map;
            var3 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = arg1;
                    var4 = _closure1_slot5;
                    var2 = var4.getUser;
                    var1 = var3.user_id;
                    var4 = var2.bind(var4)(var1);
                    var2 = null;
                    var1 = var3;
                    if(!(var2 != var4)) { _fun0004_ip = 4; continue _fun0004 }
case 16:
                    var2 = {};
                    var6 = var2;
                    var5 = var3;
                    var3 = copyDataProperties(var6, var5);
                    var3 = 'user';
                    var2[var3] = var4;
                    var1 = var2;
case 4:
                    return var1;
                }
            };
            var3 = var4.bind(var5)(var3);
            var2['stickers'] = var3;
            var1 = var2;
case 15:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();