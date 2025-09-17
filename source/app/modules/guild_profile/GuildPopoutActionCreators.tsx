// app/modules/guild_profile/GuildPopoutActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _fetchGuildForPopout() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    var9 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 258; continue _fun0001 }
 13:
                    var6 = var9;
                    var7 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var5 = 2;
                    var4 = var2[var5];
                    var2 = undefined;
                    var8 = var7.bind(var2)(var4);
                    var7 = var8.dispatch;
                    var4 = {};
                    var10 = 'GUILD_POPOUT_FETCH_START';
                    var4['type'] = var10;
                    var4['guildId'] = var9;
                    var4 = var7.bind(var8)(var4);
 67: // try_start_0
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var4 = 3;
                    var4 = var8[var4];
                    var4 = var7.bind(var2)(var4);
                    var8 = var4.HTTP;
                    var7 = var8.get;
                    var4 = {'url': null, 'oldFormErrors': true, 'rejectWithError': true};
                    var11 = _closure1_slot4;
                    var10 = var11.GUILD_PREVIEW;
                    var9 = var6;
                    var9 = var10.bind(var11)(var9);
                    var4['url'] = var9;
                    var4 = var7.bind(var8)(var4);
                    SaveGenerator(address=144);
 142:
                    return var4;
 144:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                    if(var7) { _fun0001_ip = 207; continue _fun0001 }
 150:
                    var8 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var7 = var7[var5];
                    var9 = var8.bind(var2)(var7);
                    var8 = var9.dispatch;
                    var7 = {};
                    var10 = 'GUILD_POPOUT_FETCH_SUCCESS';
                    var7['type'] = var10;
                    var10 = var6;
                    var7['guildId'] = var10;
                    var10 = var4.body;
                    var7['guild'] = var10;
                    var7 = var8.bind(var9)(var7);
 205: // try_end0
                    _fun0001_ip = 255; continue _fun0001;
 207:
                    return var4;
 210: // catch_target0
                    CatchBlockStart(arg_register=3);
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var3 = var3[var5];
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var7 = 'GUILD_POPOUT_FETCH_FAILURE';
                    var3['type'] = var7;
                    var3['guildId'] = var6;
                    var3 = var4.bind(var5)(var3);
 255:
                    return var2;
 258:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot5 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot5 = var1;
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
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Endpoints;
    var _closure1_slot4 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_profile/GuildPopoutActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function fetchGuildForPopout() {
        var1 = undefined;
        var4 = _closure1_slot5;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchGuildForPopout'] = var2;
    return var1;
})();