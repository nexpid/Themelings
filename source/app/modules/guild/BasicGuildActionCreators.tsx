// app/modules/guild/BasicGuildActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = function _fetchBasicGuild() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    var6 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 400; continue _fun0001 }
 13:
                    var3 = var6;
                    var5 = _closure1_slot4;
                    var2 = var5.getGuild;
                    var2 = var2.bind(var5)(var6);
                    var5 = null;
                    if(!(var5 == var2)) { _fun0001_ip = 395; continue _fun0001 }
 42:
                    var7 = _closure1_slot5;
                    var6 = var7.getGuildOrStatus;
                    var2 = var3;
                    var2 = var6.bind(var7)(var2);
                    if(!(var5 == var2)) { _fun0001_ip = 395; continue _fun0001 }
 69:
                    var6 = _closure1_slot7;
                    var5 = var6.has;
                    var2 = var3;
                    var2 = var5.bind(var6)(var2);
                    if(var2) { _fun0001_ip = 395; continue _fun0001 }
 92:
                    var5 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var7 = 4;
                    var2 = var2[var7];
                    var6 = undefined;
                    var9 = var5.bind(var6)(var2);
                    var5 = var9.dispatch;
                    var2 = {};
                    var8 = 'BASIC_GUILD_FETCH';
                    var2['type'] = var8;
                    var8 = var3;
                    var2['guildId'] = var8;
                    var2 = var5.bind(var9)(var2);
                    var5 = _closure1_slot7;
                    var2 = var5.add;
                    var2 = var2.bind(var5)(var8);
 157: // try_start_0 // try_start_1
                    var5 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var2 = 5;
                    var2 = var8[var2];
                    var2 = var5.bind(var6)(var2);
                    var8 = var2.HTTP;
                    var5 = var8.get;
                    var2 = {};
                    var11 = _closure1_slot6;
                    var10 = var11.GUILD_BASIC;
                    var9 = var3;
                    var9 = var10.bind(var11)(var9);
                    var2['url'] = var9;
                    var9 = true;
                    var2['rejectWithError'] = var9;
                    var2 = var5.bind(var8)(var2);
                    SaveGenerator(address=226);
 224:
                    return var2;
 226:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 290; continue _fun0001 }
 232:
                    var10 = var2.body;
                    var8 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var5 = var5[var7];
                    var9 = var8.bind(var6)(var5);
                    var8 = var9.dispatch;
                    var5 = {};
                    var11 = 'BASIC_GUILD_FETCH_SUCCESS';
                    var5['type'] = var11;
                    var11 = var3;
                    var5['guildId'] = var11;
                    var5['guildInfo'] = var10;
                    var5 = var8.bind(var9)(var5);
 288: // try_end0
                    _fun0001_ip = 358; continue _fun0001;
 290: // try_end1
                    var9 = _closure1_slot7;
                    var8 = var9.delete;
                    var5 = var3;
                    var5 = var8.bind(var9)(var5);
                    return var2;
 310: // try_start_2 // catch_target0
                    CatchBlockStart(arg_register=1);
                    var5 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var2 = var2[var7];
                    var6 = var5.bind(var6)(var2);
                    var5 = var6.dispatch;
                    var2 = {};
                    var7 = 'BASIC_GUILD_FETCH_FAILURE';
                    var2['type'] = var7;
                    var7 = var3;
                    var2['guildId'] = var7;
                    var2 = var5.bind(var6)(var2);
 358: // try_end2
                    var6 = _closure1_slot7;
                    var5 = var6.delete;
                    var2 = var3;
                    var2 = var5.bind(var6)(var2);
                    _fun0001_ip = 395; continue _fun0001;
 377: // catch_target1 // catch_target2
                    CatchBlockStart(arg_register=1);
                    var5 = _closure1_slot7;
                    var4 = var5.delete;
                    var3 = var4.bind(var5)(var3);
                    throw var2;
 395:
                    var2 = undefined;
                    return var2;
 400:
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
    var4 = global;
    var10 = var4.Object;
    var9 = var10.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var7);
    var1 = 0;
    var7 = var6[var1];
    var1 = undefined;
    var7 = var8.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var7 = 1;
    var7 = var6[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var7 = 2;
    var7 = var6[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot5 = var7;
    var7 = 3;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.Endpoints;
    var _closure1_slot6 = var7;
    var4 = var4.Set;
    var7 = var4.prototype;
    var7 = Object.create(var7, {constructor: {value: var4}});
    var14 = var7;
    var4 = new var14[var4](var13);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot7 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild/BasicGuildActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function fetchBasicGuild() {
        var1 = undefined;
        var4 = _closure1_slot8;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchBasicGuild'] = var2;
    return var1;
})();