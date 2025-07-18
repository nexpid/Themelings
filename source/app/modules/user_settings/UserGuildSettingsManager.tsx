// app/modules/user_settings/UserGuildSettingsManager.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
 2: // try_start_0
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
 70: // try_end0
            _fun0001_ip = 74; continue _fun0001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot16 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = function handleConnectionOpen() {
        var2 = {};
        var4 = _closure1_slot8;
        var3 = var4.getCollapsedCategories;
        var5 = var3.bind(var4)();
        var6 = var2;
        var3 = copyDataProperties(var6, var5);
        _closure1_slot13 = var2;
        var1 = undefined;
        return var1;
    };
    var _closure1_slot17 = var1;
    var1 = function scheduleSync() {
        var2 = global;
        var5 = var2.clearTimeout;
        var4 = _closure1_slot14;
        var1 = undefined;
        var4 = var5.bind(var1)(var4);
        var5 = var2.setTimeout;
        var4 = _closure1_slot15;
        var2 = function() {
            var3 = _closure1_slot21;
            var2 = undefined;
            var1 = {};
            var1 = var3.bind(var2)(var1);
            return var1;
        };
        var2 = var5.bind(var1)(var2, var4);
        _closure1_slot14 = var2;
        return var1;
    };
    var _closure1_slot18 = var1;
    var1 = function saveUserGuildSettings() {
        var1 = undefined;
        var4 = _closure1_slot20;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot19 = var1;
    var1 = function _saveUserGuildSettings() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot7;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    StartGenerator();
                    var6 = arg1;
                    var5 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 177; continue _fun0002 }
 16:
                    var8 = null;
                    if(!(var8 != var6)) { _fun0002_ip = 83; continue _fun0002 }
 22:
                    var2 = _closure1_slot12;
                    if(!(var6 !== var2)) { _fun0002_ip = 83; continue _fun0002 }
 33:
                    var4 = _closure1_slot21;
                    if(!(var8 == var5)) { _fun0002_ip = 45; continue _fun0002 }
 41:
                    var3 = {};
                    _fun0002_ip = 63; continue _fun0002;
 45:
                    var2 = {};
                    if(!(var8 == var6)) { _fun0002_ip = 55; continue _fun0002 }
 51:
                    var6 = _closure1_slot12;
 55:
                    var2[var6] = var5;
                    var3 = var2;
 63:
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    SaveGenerator(address=74);
 72:
                    return var2;
 74:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(!var3) { _fun0002_ip = 169; continue _fun0002 }
 80:
                    return var2;
 83:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 10;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var4 = var2.HTTP;
                    var3 = var4.patch;
                    var2 = {};
                    var8 = _closure1_slot10;
                    var7 = var8.USER_GUILD_SETTINGS;
                    var6 = _closure1_slot12;
                    var6 = var7.bind(var8)(var6);
                    var2['url'] = var6;
                    var2['body'] = var5;
                    var5 = false;
                    var2['rejectWithError'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=163);
 161:
                    return var2;
 163:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0002_ip = 174; continue _fun0002 }
 169:
                    var3 = undefined;
                    return var3;
 174:
                    return var2;
 177:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot20 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot20 = var1;
    var1 = function saveUserGuildSettingsBulk() {
        var1 = undefined;
        var4 = _closure1_slot22;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot21 = var1;
    var1 = function _saveUserGuildSettingsBulk() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot7;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    StartGenerator();
                    var7 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 522; continue _fun0003 }
 13:
                    var2 = global;
                    var4 = var2.clearTimeout;
                    var3 = _closure1_slot14;
                    var5 = undefined;
                    var3 = var4.bind(var5)(var3);
                    var3 = var2.Object;
                    var2 = var3.keys;
                    var2 = var2.bind(var3)(var7);
                    var3 = var2.length;
                    var2 = 0;
                    var2 = var2 !== var3;
                    var4 = _closure1_slot8;
                    var3 = var4.getCollapsedCategories;
                    var4 = var3.bind(var4)();
                    var3 = {};
                    var9 = _closure1_slot8;
                    var8 = var9.getCollapsedCategories;
                    var13 = var8.bind(var9)();
                    var11 = var13;
                    var15 = true;
                    for(var8 in var11)
 105:
                    {
 114:
                        var14 = var8;
                        var17 = var13[var14];
                        var16 = _closure1_slot13;
                        var16 = var16[var14];
                        if(var17 === var16) { _fun0003_ip = 105; continue _fun0003 }
 133:
                        var3[var14] = var15;
                        _fun0003_ip = 105; continue _fun0003;
                    }
 139:
                    var11 = _closure1_slot13;
                    for(var8 in var11)
 151:
                    {
 160:
                        var14 = var8;
                        var17 = var13[var14];
                        var16 = _closure1_slot13;
                        var16 = var16[var14];
                        if(var17 === var16) { _fun0003_ip = 151; continue _fun0003 }
 179:
                        var3[var14] = var15;
                        _fun0003_ip = 151; continue _fun0003;
                    }
 185:
                    var13 = var3;
                    var9 = 'collapsed';
                    var8 = null;
                    var3 = var2;
                    var2 = var3;
                    for(var10 in var13)
 211:
                    {
                        var2 = var3;
 226:
                        var18 = var10;
                        var17 = _closure1_slot9;
                        var16 = var17.getChannel;
                        var19 = var16.bind(var17)(var18);
                        var16 = var8 != var19;
                        if(!var16) { _fun0003_ip = 259; continue _fun0003 }
 250:
                        var17 = var19.guild_id;
                        var16 = var8 != var17;
 259:
                        if(!var16) { _fun0003_ip = 211; continue _fun0003 }
 262:
                        var16 = var19.guild_id;
                        var16 = var16 in var7;
                        if(var16) { _fun0003_ip = 285; continue _fun0003 }
 274:
                        var17 = var19.guild_id;
                        var16 = {};
                        var7[var17] = var16;
 285:
                        var16 = var19.guild_id;
                        var16 = var7[var16];
                        var16 = var16.channel_overrides;
                        if(!(var8 == var16)) { _fun0003_ip = 321; continue _fun0003 }
 304:
                        var16 = var19.guild_id;
                        var17 = var7[var16];
                        var16 = {};
                        var17['channel_overrides'] = var16;
 321:
                        var16 = var19.guild_id;
                        var16 = var7[var16];
                        var18 = var16.channel_overrides;
                        var17 = var19.id;
                        var16 = {};
                        var20 = var19.guild_id;
                        var20 = var7[var20];
                        var21 = var20.channel_overrides;
                        var20 = var19.id;
                        var22 = var21[var20];
                        var23 = var16;
                        var20 = copyDataProperties(var23, var22);
                        var19 = var19.id;
                        var19 = var19 in var4;
                        var16[var9] = var19;
                        var18[var17] = var16;
                        var3 = true;
                        _fun0003_ip = 211; continue _fun0003;
                    }
 399:
                    if(var2) { _fun0003_ip = 408; continue _fun0003 }
 402:
                    var3 = new Array(0);
                    _fun0003_ip = 516; continue _fun0003;
 408:
                    var2 = {};
                    var23 = var2;
                    var22 = var4;
                    var4 = copyDataProperties(var23, var22);
                    _closure1_slot13 = var2;
                    var2 = _closure1_slot11;
                    var2 = delete var7[var2];
                    var4 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var2 = 10;
                    var2 = var8[var2];
                    var2 = var4.bind(var5)(var2);
                    var5 = var2.HTTP;
                    var4 = var5.patch;
                    var2 = {};
                    var6 = _closure1_slot10;
                    var6 = var6.USER_GUILD_SETTINGS_BULK;
                    var2['url'] = var6;
                    var6 = {};
                    var6['guilds'] = var7;
                    var2['body'] = var6;
                    var6 = false;
                    var2['rejectWithError'] = var6;
                    var2 = var4.bind(var5)(var2);
                    SaveGenerator(address=505);
 503:
                    return var2;
 505:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0003_ip = 519; continue _fun0003 }
 511:
                    var3 = var2.body;
 516:
                    return var3;
 519:
                    return var2;
 522:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot22 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot22 = var1;
    var1 = function handleUserGuildSettingsFullUpdate() {
        var2 = {};
        var4 = _closure1_slot8;
        var3 = var4.getCollapsedCategories;
        var5 = var3.bind(var4)();
        var6 = var2;
        var3 = copyDataProperties(var6, var5);
        _closure1_slot13 = var2;
        var1 = undefined;
        return var1;
    };
    var _closure1_slot23 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var4 = 0;
    var8 = var6[var4];
    var1 = undefined;
    var8 = var7.bind(var1)(var8);
    var _closure1_slot2 = var8;
    var8 = 1;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var8 = 2;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var8 = 3;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var8 = 4;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot6 = var8;
    var8 = 5;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot7 = var8;
    var8 = 6;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot8 = var8;
    var8 = 7;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot9 = var8;
    var8 = 8;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var9 = var8.Endpoints;
    var _closure1_slot10 = var9;
    var9 = var8.FAVORITES;
    var _closure1_slot11 = var9;
    var8 = var8.ME;
    var _closure1_slot12 = var8;
    var8 = {};
    var _closure1_slot13 = var8;
    var _closure1_slot14 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var4 = var4.Millis;
    var8 = var4.SECOND;
    var4 = 15;
    var4 = var4 * var8;
    var _closure1_slot15 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var3 = function UserGuildSettingsManager(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var5 = this;
                var13 = 0;
                var1 = copyRestArgs(var13);
                var7 = _closure1_slot3;
                var3 = _closure2_slot0;
                var4 = undefined;
                var7 = var7.bind(var4)(var5, var3);
                var10 = new Array(0);
                var13 = var10;
                var12 = var1;
                var11 = 0;
                var1 = arraySpread(var13, var12, var11);
                var1 = _closure1_slot5;
                var9 = var1.bind(var4)(var3);
                var3 = _closure1_slot4;
                var1 = _closure1_slot16;
                var1 = var1.bind(var4)();
                if(var1) { _fun0004_ip = 84; continue _fun0004 }
 71:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0004_ip = 118; continue _fun0004;
 84:
                var6 = global;
                var8 = var6.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
 118:
                var1 = var3.bind(var4)(var5, var1);
                var3 = {};
                var4 = _closure1_slot18;
                var3['CATEGORY_COLLAPSE'] = var4;
                var3['CATEGORY_EXPAND'] = var4;
                var3['CATEGORY_COLLAPSE_ALL'] = var4;
                var3['CATEGORY_EXPAND_ALL'] = var4;
                var4 = _closure1_slot17;
                var3['POST_CONNECTION_OPEN'] = var4;
                var4 = _closure1_slot23;
                var3['USER_GUILD_SETTINGS_FULL_UPDATE'] = var4;
                var1['actions'] = var3;
                var3 = _closure1_slot19;
                var1['saveUserGuildSettings'] = var3;
                var2 = _closure1_slot21;
                var1['saveUserGuildSettingsBulk'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot6;
        var2 = undefined;
        var4 = arg1;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot2;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var13 = var4;
    var2 = new var13[var2](var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/UserGuildSettingsManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();