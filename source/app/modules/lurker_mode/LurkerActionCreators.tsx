// app/modules/lurker_mode/LurkerActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var4 = function stopLurkingAll() {
        var1 = undefined;
        var4 = _closure1_slot8;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot7 = var4;
    var1 = function _stopLurkingAll() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    var8 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 169; continue _fun0001 }
 15:
                    var _closure4_slot0 = var8;
                    var5 = _closure1_slot5;
                    var4 = var5.lurkingGuildIds;
                    var6 = var4.bind(var5)();
                    var5 = var6.filter;
                    var4 = function(arg1) {
                        var3 = _closure4_slot0;
                        var2 = var3.includes;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        var1 = !var1;
                        return var1;
                    };
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.length;
                    var4 = 0;
                    if(!(var4 !== var5)) { _fun0001_ip = 161; continue _fun0001 }
 64:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 4;
                    var3 = var5[var3];
                    var7 = undefined;
                    var5 = var4.bind(var7)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var9 = 'GUILD_STOP_LURKING';
                    var3['type'] = var9;
                    var3['ignoredGuildIds'] = var8;
                    var3 = var4.bind(var5)(var3);
                    var3 = global;
                    var4 = var3.Promise;
                    var3 = var4.all;
                    var5 = var6.map;
                    var2 = function() {
                        var4 = _closure1_slot3;
                        var3 = undefined;
                        var2 = function* (arg1) {
                            var1 = function* anon_0_(arg1) {
                                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                    if(var2) { _fun0002_ip = 188; continue _fun0002 }
 10:
                                    var7 = arg1;
                                    var2 = undefined;
                                    var6 = undefined;
                                    var5 = _closure1_slot5;
                                    var4 = var5.getLurkingSource;
                                    var6 = var4.bind(var5)();
 34: // try_start_0
                                    var5 = _closure1_slot0;
                                    var8 = _closure1_slot2;
                                    var4 = 5;
                                    var4 = var8[var4];
                                    var4 = var5.bind(var2)(var4);
                                    var8 = var4.HTTP;
                                    var5 = var8.del;
                                    var4 = {};
                                    var11 = _closure1_slot6;
                                    var10 = var11.GUILD_LEAVE;
                                    var9 = var7;
                                    var9 = var10.bind(var11)(var9);
                                    var4['url'] = var9;
                                    var10 = {};
                                    var9 = true;
                                    var10['lurking'] = var9;
                                    var4['body'] = var10;
                                    var4['oldFormErrors'] = var9;
                                    var4['rejectWithError'] = var9;
                                    var4 = var5.bind(var8)(var4);
                                    SaveGenerator(address=120);
 118:
                                    return var4;
 120:
                                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                                    if(var5) { _fun0002_ip = 128; continue _fun0002 }
 126: // try_end0
                                    _fun0002_ip = 185; continue _fun0002;
 128:
                                    return var4;
 131: // catch_target0
                                    CatchBlockStart(arg_register=3);
                                    var4 = _closure1_slot1;
                                    var5 = _closure1_slot2;
                                    var3 = 4;
                                    var3 = var5[var3];
                                    var5 = var4.bind(var2)(var3);
                                    var4 = var5.dispatch;
                                    var3 = {};
                                    var8 = 'GUILD_STOP_LURKING_FAILURE';
                                    var3['type'] = var8;
                                    var3['lurkingGuildId'] = var7;
                                    var3['lurkingSource'] = var6;
                                    var3 = var4.bind(var5)(var3);
 185:
                                    return var2;
 188:
                                    return var1;
                                }
                            };
                            return var1;
                        };
                        var2 = var4.bind(var3)(var2);
                        var _closure5_slot0 = var2;
                        var1 = function() {
                            var1 = undefined;
                            var4 = _closure5_slot0;
                            var3 = var4.apply;
                            var1 = arguments;
                            var2 = var1;
                            var1 = this;
                            var1 = var3.bind(var4)(var1, var2);
                            return var1;
                        };
                        return var1;
                    };
                    var2 = var2.bind(var7)();
                    var2 = var5.bind(var6)(var2);
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=155);
 153:
                    return var2;
 155:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 166; continue _fun0001 }
 161:
                    var3 = undefined;
                    return var3;
 166:
                    return var2;
 169:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot8 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot8 = var1;
    var1 = function _stopLurking() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    StartGenerator();
                    var5 = arguments[0];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 171; continue _fun0003 }
 13:
                    var4 = undefined;
                    if(!(var5 === var4)) { _fun0003_ip = 21; continue _fun0003 }
 19:
                    var5 = null;
 21:
                    SaveGenerator(address=25);
 23:
                    return var4;
 25:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0003_ip = 168; continue _fun0003 }
 34:
                    var7 = _closure1_slot5;
                    var6 = var7.lurkingGuildIds;
                    var7 = var6.bind(var7)();
                    var8 = var7.length;
                    var6 = 0;
                    if(!(var6 !== var8)) { _fun0003_ip = 162; continue _fun0003 }
 62:
                    var6 = null;
                    if(!(var6 != var5)) { _fun0003_ip = 81; continue _fun0003 }
 68:
                    var6 = var7.includes;
                    var6 = var6.bind(var7)(var5);
                    if(var6) { _fun0003_ip = 162; continue _fun0003 }
 81:
                    var7 = new Array(2);
                    var7[0] = var5;
                    var6 = _closure1_slot4;
                    var5 = var6.getGuildId;
                    var5 = var5.bind(var6)();
                    var7[1] = var5;
                    var6 = var7.filter;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var5 = 6;
                    var5 = var9[var5];
                    var5 = var8.bind(var4)(var5);
                    var5 = var5.isNotNullish;
                    var5 = var6.bind(var7)(var5);
                    var3 = _closure1_slot7;
                    var3 = var3.bind(var4)(var5);
                    SaveGenerator(address=156);
 154:
                    return var3;
 156:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0003_ip = 165; continue _fun0003 }
 162:
                    return var4;
 165:
                    return var3;
 168:
                    return var2;
 171:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot9 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot9 = var1;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.Endpoints;
    var _closure1_slot6 = var5;
    var5 = 7;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/lurker_mode/LurkerActionCreators.tsx';
    var5 = var6.bind(var7)(var5);
    var3['stopLurkingAll'] = var4;
    var2 = function stopLurking() {
        var1 = undefined;
        var4 = _closure1_slot9;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['stopLurking'] = var2;
    return var1;
})();