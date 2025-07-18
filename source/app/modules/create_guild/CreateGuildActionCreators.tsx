// app/modules/create_guild/CreateGuildActionCreators.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _createGuildFromTemplate() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2, arg3, arg4, arg5) {
            var1 = function* anon_0_(arg1, arg2, arg3, arg4, arg5) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 308; continue _fun0001 }
 10:
                    var12 = arg1;
                    var9 = arg2;
                    var8 = arg3;
                    var7 = arg4;
                    var11 = arg5;
 25: // try_start_0
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 2;
                    var2 = var4[var2];
                    var10 = undefined;
                    var4 = var3.bind(var10)(var2);
                    var3 = var4.post;
                    var2 = {};
                    var5 = _closure1_slot4;
                    var5 = var5.GUILDS;
                    var2['url'] = var5;
                    var5 = {};
                    var5['name'] = var12;
                    var5['icon'] = var9;
                    var9 = var8;
                    var12 = var9.channels;
                    var5['channels'] = var12;
                    var12 = var9.system_channel_id;
                    var5['system_channel_id'] = var12;
                    var12 = var9.roles;
                    var5['roles'] = var12;
                    var9 = var9.code;
                    var5['guild_template_code'] = var9;
                    var11 = !var11;
                    var9 = !var11;
                    if(!var11) { _fun0001_ip = 139; continue _fun0001 }
 137:
                    var9 = undefined;
 139:
                    var5['staff_only'] = var9;
                    var2['body'] = var5;
                    var5 = {};
                    var9 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var6 = 3;
                    var6 = var11[var6];
                    var6 = var9.bind(var10)(var6);
                    var6 = var6.NetworkActionNames;
                    var6 = var6.GUILD_CREATE;
                    var5['event'] = var6;
                    var6 = {};
                    var8 = var8.id;
                    var6['template_name'] = var8;
                    var6['is_community_intent'] = var7;
                    var5['properties'] = var6;
                    var2['trackedActionData'] = var5;
                    var5 = false;
                    var2['rejectWithError'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=233);
 231:
                    return var2;
 233:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 247; continue _fun0001 }
 239:
                    var3 = var2.body;
 244: // try_end0
                    return var3;
 247:
                    return var2;
 250: // catch_target0
                    CatchBlockStart(arg_register=3);
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 4;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var5.bind(var2)(var3);
                    var2 = var2.APIError;
                    var3 = var2.prototype;
                    var3 = Object.create(var3, {constructor: {value: var2}});
                    var14 = var3;
                    var13 = var4;
                    var2 = new var14[var2](var13, var12);
                    var2 = var2 instanceof Object ? var2 : var3;
                    throw var2;
 308:
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
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.Endpoints;
    var _closure1_slot4 = var2;
    var2 = {};
    var4 = function createGuildFromTemplate() {
        var1 = undefined;
        var4 = _closure1_slot5;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var2['createGuildFromTemplate'] = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/create_guild/CreateGuildActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();