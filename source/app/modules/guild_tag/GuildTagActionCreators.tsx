// app/modules/guild_tag/GuildTagActionCreators.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _adoptGuildIdentity() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 211; continue _fun0001 }
 10:
                    var10 = arg1;
                    var9 = arg2;
                    var6 = undefined;
                    var3 = undefined;
 20: // try_start_0
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 3;
                    var2 = var5[var2];
                    var2 = var4.bind(var6)(var2);
                    var5 = var2.HTTP;
                    var4 = var5.put;
                    var2 = {};
                    var7 = _closure1_slot5;
                    var7 = var7.USER_SET_GUILD_IDENTITY;
                    var2['url'] = var7;
                    var7 = {};
                    var7['identity_guild_id'] = var10;
                    var7['identity_enabled'] = var9;
                    var2['body'] = var7;
                    var7 = false;
                    var2['rejectWithError'] = var7;
                    var2 = var4.bind(var5)(var2);
                    SaveGenerator(address=101);
 99:
                    return var2;
 101:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 203; continue _fun0001 }
 107:
                    var3 = var2;
                    var4 = var2.ok;
                    if(!var4) { _fun0001_ip = 200; continue _fun0001 }
 119:
                    var5 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var4 = 4;
                    var4 = var7[var4];
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var7 = 'CURRENT_USER_UPDATE';
                    var4['type'] = var7;
                    var7 = {};
                    var9 = _closure1_slot4;
                    var8 = var9.getCurrentUser;
                    var11 = var8.bind(var9)();
                    var12 = var7;
                    var8 = copyDataProperties(var12, var11);
                    var8 = var3;
                    var11 = var8.body;
                    var12 = var7;
                    var8 = copyDataProperties(var12, var11);
                    var4['user'] = var7;
                    var4 = var5.bind(var6)(var4);
 200: // try_end0
                    return var3;
 203:
                    return var2;
 206: // catch_target0
                    CatchBlockStart(arg_register=1);
                    return var2;
 211:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot6 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Endpoints;
    var _closure1_slot5 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_tag/GuildTagActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function adoptGuildIdentity() {
        var1 = undefined;
        var4 = _closure1_slot6;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['adoptGuildIdentity'] = var2;
    return var1;
})();