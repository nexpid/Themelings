// app/modules/guild_rooms/GuildRoomActionCreators.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var11 = require;
        var3 = exports;
        var10 = dependencyMap;
        var1 = metroImportAll;
        var _closure1_slot0 = var1;
        var _closure1_slot1 = var10;
        var1 = function _guildRoomConnect() {
            var5 = undefined;
            var1 = undefined;
            var4 = _closure1_slot2;
            var3 = function* (arg1, arg2, arg3) {
                var1 = function* anon_0_(arg1, arg2, arg3) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=4);
                        if(var5) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                        var4 = arg1;
                        var3 = arg2;
                        var2 = arg3;
case 4: // try_start_0
                        var7 = _closure1_slot0;
                        var6 = _closure1_slot1;
                        var5 = 1;
                        var6 = var6[var5];
                        var5 = undefined;
                        var6 = var7.bind(var5)(var6);
                        var5 = var6.guildRoomConnect;
                        var2 = var5.bind(var6)(var4, var3, var2);
                        SaveGenerator(address=58);
case 5:
                        return var2;
case 6:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(var3) { _fun0002_ip = 7; continue _fun0002 }
case 8: // try_end0
                        _fun0002_ip = 9; continue _fun0002;
case 7:
                        return var2;
case 10: // catch_target0
                        CatchBlockStart(arg_register=1);
case 9:
                        var2 = undefined;
                        return var2;
case 2:
                        return var1;
                    }
                };
                return var1;
            };
            var4 = var4.bind(var5)(var3);
            _closure1_slot3 = var4;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var _closure1_slot3 = var1;
        var1 = function _guildRoomUpdate() {
            var5 = undefined;
            var1 = undefined;
            var4 = _closure1_slot2;
            var3 = function* (arg1, arg2, arg3) {
                var1 = function* anon_0_(arg1, arg2, arg3) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=4);
                        if(var5) { _fun0003_ip = 2; continue _fun0003 }
case 3:
                        var4 = arg1;
                        var3 = arg2;
                        var2 = arg3;
case 4: // try_start_0
                        var7 = _closure1_slot0;
                        var6 = _closure1_slot1;
                        var5 = 1;
                        var6 = var6[var5];
                        var5 = undefined;
                        var6 = var7.bind(var5)(var6);
                        var5 = var6.guildRoomUpdate;
                        var2 = var5.bind(var6)(var4, var3, var2);
                        SaveGenerator(address=58);
case 5:
                        return var2;
case 6:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(var3) { _fun0003_ip = 7; continue _fun0003 }
case 8: // try_end0
                        _fun0003_ip = 9; continue _fun0003;
case 7:
                        return var2;
case 10: // catch_target0
                        CatchBlockStart(arg_register=1);
case 9:
                        var2 = undefined;
                        return var2;
case 2:
                        return var1;
                    }
                };
                return var1;
            };
            var4 = var4.bind(var5)(var3);
            _closure1_slot4 = var4;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var _closure1_slot4 = var1;
        var1 = global;
        var6 = var1.Object;
        var5 = var6.defineProperty;
        var4 = {};
        var1 = true;
        var4['value'] = var1;
        var1 = '__esModule';
        var1 = var5.bind(var6)(var3, var1, var4);
        var1 = 0;
        var5 = var10[var1];
        var4 = metroImportDefault;
        var1 = undefined;
        var4 = var4.bind(var1)(var5);
        var _closure1_slot2 = var4;
        var4 = 2;
        var4 = var10[var4];
        var12 = var11.bind(var1)(var4);
        var5 = var12.fileFinishedImporting;
        var4 = 'modules/guild_rooms/GuildRoomActionCreators.native.tsx';
        var4 = var5.bind(var12)(var4);
        var5 = 1;
        var4 = var10[var5];
        var8 = var11.bind(var1)(var4);
        for(var4 in var8)
case 11:
        {
case 12:
            var13 = var4;
            var12 = var10[var5];
            var12 = var11.bind(var1)(var12);
            var12 = var12[var13];
            var3[var13] = var12;
            _fun0001_ip = 11; continue _fun0001;
        }
case 13:
        var4 = function guildRoomConnect() {
            var1 = undefined;
            var4 = _closure1_slot3;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var3['guildRoomConnect'] = var4;
        var2 = function guildRoomUpdate() {
            var1 = undefined;
            var4 = _closure1_slot4;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var3['guildRoomUpdate'] = var2;
        return var1;
    }
})();