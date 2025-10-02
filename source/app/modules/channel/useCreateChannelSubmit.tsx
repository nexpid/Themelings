// app/modules/channel/useCreateChannelSubmit.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var9 = metroImportDefault;
    var5 = metroImportAll;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var5;
    var _closure1_slot3 = var7;
    var1 = global;
    var10 = var1.Object;
    var8 = var10.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var10)(var3, var1, var2);
    var8 = 0;
    var2 = var7[var8];
    var1 = undefined;
    var2 = var9.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 1;
    var2 = var7[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 2;
    var2 = var7[var2];
    var2 = var5.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 3;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var5 = var2.ChannelTypes;
    var _closure1_slot7 = var5;
    var2 = var2.Permissions;
    var _closure1_slot8 = var2;
    var2 = {};
    var2['PREMIUM_CHANNEL'] = var8;
    var5 = 'PREMIUM_CHANNEL';
    var2[var8] = var5;
    var _closure1_slot9 = var2;
    var5 = 9;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/channel/useCreateChannelSubmit.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function useCreateChannelSubmit(arg1) {
        var7 = arg1;
        var _closure2_slot0 = var7;
        var6 = _closure1_slot6;
        var4 = var6.useState;
        var3 = false;
        var3 = var4.bind(var6)(var3);
        var10 = _closure1_slot5;
        var2 = undefined;
        var9 = 2;
        var5 = var10.bind(var2)(var3, var9);
        var3 = 0;
        var4 = var5[var3];
        var8 = 1;
        var5 = var5[var8];
        var _closure2_slot1 = var5;
        var11 = var6.useState;
        var5 = {};
        var5 = var11.bind(var6)(var5);
        var5 = var10.bind(var2)(var5, var9);
        var3 = var5[var3];
        var5 = var5[var8];
        var _closure2_slot2 = var5;
        var5 = var6.useCallback;
        var1 = function() {
            var4 = _closure1_slot4;
            var3 = undefined;
            var2 = function* (arg1) {
                var1 = function* anon_0_(arg1) {
                    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                        StartGenerator();
                        var2 = arg1;
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                        if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                        var19 = var2.overwrites;
                        var16 = var2.bitrate;
                        var12 = var2.userLimit;
                        var4 = var2.createMode;
                        var21 = var2.guildId;
                        var18 = var2.name;
                        var20 = var2.channelType;
                        var17 = var2.categoryId;
                        var6 = undefined;
                        var13 = undefined;
                        var11 = undefined;
                        var10 = undefined;
                        var8 = undefined;
                        var7 = undefined;
                        var9 = undefined;
                        SaveGenerator(address=77);
case 4:
                        return var6;
case 5:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                        var3 = _closure1_slot9;
                        var3 = var3.PREMIUM_CHANNEL;
                        if(!(var4 === var3)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                        var14 = var19;
                        var4 = var14.push;
                        var3 = {};
                        var15 = var21;
                        var3['id'] = var15;
                        var22 = _closure1_slot0;
                        var23 = _closure1_slot3;
                        var15 = 4;
                        var15 = var23[var15];
                        var15 = var22.bind(var6)(var15);
                        var15 = var15.PermissionOverwriteType;
                        var15 = var15.ROLE;
                        var3['type'] = var15;
                        var15 = _closure1_slot8;
                        var15 = var15.VIEW_CHANNEL;
                        var3['deny'] = var15;
                        var22 = _closure1_slot2;
                        var15 = 5;
                        var15 = var23[var15];
                        var23 = var22.bind(var6)(var15);
                        var22 = var23.getFlag;
                        var15 = 0;
                        var15 = var22.bind(var23)(var15);
                        var3['allow'] = var15;
                        var3 = var4.bind(var14)(var3);
case 8:
                        var14 = _closure2_slot1;
                        var3 = true;
                        var3 = var14.bind(var6)(var3);
case 10: // try_start_0 // try_start_1
                        var14 = _closure1_slot1;
                        var15 = _closure1_slot3;
                        var3 = 6;
                        var3 = var15[var3];
                        var15 = var14.bind(var6)(var3);
                        var14 = var15.createChannel;
                        var3 = {};
                        var3['guildId'] = var21;
                        var3['type'] = var20;
                        var21 = var18;
                        var3['name'] = var21;
                        var3['permissionOverwrites'] = var19;
                        var3['bitrate'] = var16;
                        var3['userLimit'] = var12;
                        var12 = _closure1_slot7;
                        var19 = var12.GUILD_CATEGORY;
                        var12 = null;
                        var16 = null;
                        if(!(var20 !== var19)) { _fun0001_ip = 11; continue _fun0001 }
case 12:
                        var16 = var17;
case 11:
                        var3['parentId'] = var16;
                        var3 = var14.bind(var15)(var3);
                        SaveGenerator(address=317);
case 13:
                        return var3;
case 14:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=13);
                        if(var14) { _fun0001_ip = 15; continue _fun0001 }
case 16:
                        var13 = var3;
                        if(!(var12 != var3)) { _fun0001_ip = 17; continue _fun0001 }
case 18:
                        var13 = var13.body;
                        var11 = var13;
                        if(!(var12 == var13)) { _fun0001_ip = 19; continue _fun0001 }
case 20:
                        var13 = {};
                        _fun0001_ip = 21; continue _fun0001;
case 19:
                        var13 = var11;
case 21:
                        var11 = var13.id;
                        var10 = var11;
                        var8 = var13.guild_id;
                        if(!(var12 != var11)) { _fun0001_ip = 17; continue _fun0001 }
case 22:
                        var15 = _closure1_slot0;
                        var19 = _closure1_slot3;
                        var11 = 7;
                        var11 = var19[var11];
                        var11 = var15.bind(var6)(var11);
                        var14 = var11.AccessibilityAnnouncer;
                        var13 = var14.announce;
                        var11 = 8;
                        var16 = var19[var11];
                        var16 = var15.bind(var6)(var16);
                        var17 = var16.intl;
                        var16 = var17.formatToPlainString;
                        var11 = var19[var11];
                        var11 = var15.bind(var6)(var11);
                        var11 = var11.t;
                        var15 = var11.Wke70d;
                        var11 = {};
                        var11['name'] = var18;
                        var11 = var16.bind(var17)(var15, var11);
                        var11 = var13.bind(var14)(var11);
                        var11 = _closure2_slot0;
                        if(!(var12 != var11)) { _fun0001_ip = 17; continue _fun0001 }
case 23:
                        var11 = _closure2_slot0;
                        var8 = var11.bind(var6)(var10, var8);
case 17: // try_end0
                        _fun0001_ip = 24; continue _fun0001;
case 15: // try_end1
                        var10 = _closure2_slot1;
                        var8 = false;
                        var8 = var10.bind(var6)(var8);
                        return var3;
case 25: // try_start_2 // catch_target0
                        CatchBlockStart(arg_register=2);
                        var13 = _closure1_slot0;
                        var14 = _closure1_slot3;
                        var5 = 7;
                        var5 = var14[var5];
                        var5 = var13.bind(var6)(var5);
                        var10 = var5.AccessibilityAnnouncer;
                        var8 = var10.announce;
                        var5 = 8;
                        var11 = var14[var5];
                        var11 = var13.bind(var6)(var11);
                        var12 = var11.intl;
                        var11 = var12.string;
                        var5 = var14[var5];
                        var5 = var13.bind(var6)(var5);
                        var5 = var5.t;
                        var5 = var5.0SbUzs;
                        var5 = var11.bind(var12)(var5);
                        var5 = var8.bind(var10)(var5);
                        var5 = _closure2_slot2;
                        var3 = var3.body;
                        var9 = var3;
                        var8 = null;
                        var10 = var8 == var3;
                        var3 = undefined;
                        if(var10) { _fun0001_ip = 26; continue _fun0001 }
case 27:
                        var3 = var9.errors;
case 26:
                        var7 = var3;
                        if(!(var8 == var3)) { _fun0001_ip = 28; continue _fun0001 }
case 29:
                        var3 = {};
                        _fun0001_ip = 30; continue _fun0001;
case 28:
                        var3 = var7;
case 30:
                        var3 = var5.bind(var6)(var3);
case 24: // try_end2
                        var5 = _closure2_slot1;
                        var3 = false;
                        var3 = var5.bind(var6)(var3);
                        return var6;
case 31: // catch_target1 // catch_target2
                        CatchBlockStart(arg_register=2);
                        var5 = _closure2_slot1;
                        var4 = false;
                        var4 = var5.bind(var6)(var4);
                        throw var3;
case 6:
                        return var2;
case 2:
                        return var1;
                    }
                };
                var2 = var1.next;
                var2 = var2.bind(var1)();
                return var1;
            };
            var2 = var4.bind(var3)(var2);
            var _closure3_slot0 = var2;
            var1 = function() {
                var1 = undefined;
                var4 = _closure3_slot0;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            return var1;
        };
        var2 = var1.bind(var2)();
        var1 = new Array(1);
        var1[0] = var7;
        var2 = var5.bind(var6)(var2, var1);
        var1 = new Array(3);
        var1[0] = var4;
        var1[1] = var3;
        var1[2] = var2;
        return var1;
    };
    var3['default'] = var4;
    var3['CreateChannelMode'] = var2;
    return var1;
})();