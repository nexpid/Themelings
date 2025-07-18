// app/modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionsGroupEdit.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var8 = native3;
    var7 = native4;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var _closure1_slot3 = var6;
    var1 = function GuildSettingsRoleSubscriptionsGroupEditInner(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var24 = var2.guildId;
            var _closure2_slot0 = var24;
            var4 = undefined;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var _closure2_slot10 = var4;
            var _closure2_slot11 = var4;
            var _closure2_slot12 = var4;
            var5 = _closure1_slot0;
            var7 = _closure1_slot3;
            var2 = 6;
            var2 = var7[var2];
            var3 = var5.bind(var4)(var2);
            var2 = var3.useNavigation;
            var20 = var2.bind(var3)();
            var _closure2_slot1 = var20;
            var2 = 7;
            var3 = var7[var2];
            var5 = var5.bind(var4)(var3);
            var3 = var5.useSubscriptionsSettings;
            var13 = var3.bind(var5)(var24);
            var _closure2_slot2 = var13;
            var5 = _closure1_slot1;
            var3 = 8;
            var3 = var7[var3];
            var3 = var5.bind(var4)(var3);
            var3 = var3.bind(var4)(var24);
            var21 = var3.isFullServerGating;
            var _closure2_slot3 = var21;
            var3 = 9;
            var3 = var7[var3];
            var5 = var5.bind(var4)(var3);
            var3 = _closure1_slot8;
            var3 = var3.GUILD_ROLE_SUBSCRIPTIONS;
            var3 = var5.bind(var4)(var24, var3);
            var25 = var3.application;
            var5 = _closure1_slot6;
            var3 = var5.useState;
            var10 = null;
            var5 = var3.bind(var5)(var10);
            var3 = _closure1_slot5;
            var14 = 2;
            var3 = var3.bind(var4)(var5, var14);
            var5 = 0;
            var22 = var3[var5];
            var _closure2_slot4 = var22;
            var7 = 1;
            var12 = var3[var7];
            var _closure2_slot5 = var12;
            var9 = _closure1_slot6;
            var8 = var9.useState;
            var3 = var10 == var13;
            var11 = undefined;
            if(var3) { _fun0001_ip = 245; continue _fun0001 }
 240:
            var11 = var13.description;
 245:
            var15 = var10 != var11;
            var3 = undefined;
            if(!var15) { _fun0001_ip = 257; continue _fun0001 }
 254:
            var3 = var11;
 257:
            var8 = var8.bind(var9)(var3);
            var3 = _closure1_slot5;
            var3 = var3.bind(var4)(var8, var14);
            var11 = var3[var5];
            _closure2_slot6 = var11;
            var9 = var3[var7];
            var8 = _closure1_slot6;
            var3 = var8.useState;
            var8 = var3.bind(var8)(var21);
            var3 = _closure1_slot5;
            var3 = var3.bind(var4)(var8, var14);
            var17 = var3[var5];
            _closure2_slot7 = var17;
            var16 = var3[var7];
            var3 = _closure1_slot0;
            var7 = _closure1_slot3;
            var2 = var7[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.useUpdateSubscriptionsSettings;
            var2 = var2.bind(var3)();
            var18 = var2.loading;
            _closure2_slot8 = var18;
            var23 = var2.updateSubscriptionsSettings;
            _closure2_slot9 = var23;
            var8 = var2.error;
            _closure2_slot10 = var8;
            var3 = _closure1_slot1;
            var2 = 10;
            var2 = var7[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2 = var3.bind(var4)(var2);
            var7 = var2.insets;
            var19 = var10 != var22;
            if(var19) { _fun0001_ip = 452; continue _fun0001 }
 412:
            var2 = var10 != var11;
            if(!var2) { _fun0001_ip = 437; continue _fun0001 }
 419:
            var14 = var10 == var13;
            var3 = undefined;
            if(var14) { _fun0001_ip = 433; continue _fun0001 }
 428:
            var3 = var13.description;
 433:
            var2 = var11 !== var3;
 437:
            if(!var2) { _fun0001_ip = 449; continue _fun0001 }
 440:
            var3 = var11.length;
            var2 = var5 !== var3;
 449:
            var19 = var2;
 452:
            if(var19) { _fun0001_ip = 459; continue _fun0001 }
 455:
            var19 = var21 !== var17;
 459:
            _closure2_slot11 = var19;
            var14 = var22;
            if(!(var10 == var14)) { _fun0001_ip = 560; continue _fun0001 }
 470:
            var3 = var10 == var13;
            var2 = undefined;
            if(var3) { _fun0001_ip = 485; continue _fun0001 }
 479:
            var2 = var13.cover_image_asset;
 485:
            var3 = var10 != var2;
            var2 = null;
            if(!var3) { _fun0001_ip = 557; continue _fun0001 }
 494:
            var3 = var10 != var25;
            var2 = null;
            if(!var3) { _fun0001_ip = 557; continue _fun0001 }
 503:
            var5 = _closure1_slot2;
            var15 = _closure1_slot3;
            var3 = 11;
            var3 = var15[var3];
            var15 = var5.bind(var4)(var3);
            var5 = var15.getSource;
            var3 = {};
            var25 = var25.id;
            var3['application_id'] = var25;
            var25 = var13.cover_image_asset;
            var3['image_asset'] = var25;
            var2 = var5.bind(var15)(var3);
 557:
            var14 = var2;
 560:
            var15 = _closure1_slot6;
            var5 = var15.useCallback;
            var3 = _closure1_slot4;
            var2 = function* () {
                var1 = function* anon_0_() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0002_ip = 217; continue _fun0002 }
 10:
                        var7 = {};
                        var2 = _closure2_slot6;
                        var5 = null;
                        var2 = var5 != var2;
                        if(!var2) { _fun0002_ip = 58; continue _fun0002 }
 28:
                        var6 = _closure2_slot6;
                        var3 = _closure2_slot2;
                        var8 = var5 == var3;
                        var3 = undefined;
                        if(var8) { _fun0002_ip = 54; continue _fun0002 }
 45:
                        var8 = _closure2_slot2;
                        var3 = var8.description;
 54:
                        var2 = var6 !== var3;
 58:
                        if(!var2) { _fun0002_ip = 76; continue _fun0002 }
 61:
                        var3 = _closure2_slot6;
                        var6 = var3.length;
                        var3 = 0;
                        var2 = var3 !== var6;
 76:
                        if(!var2) { _fun0002_ip = 89; continue _fun0002 }
 79:
                        var2 = _closure2_slot6;
                        var7['description'] = var2;
 89:
                        var2 = _closure2_slot4;
                        if(!(var5 != var2)) { _fun0002_ip = 113; continue _fun0002 }
 97:
                        var2 = _closure2_slot4;
                        var2 = var2.uri;
                        var7['cover_image'] = var2;
 113:
                        var3 = _closure2_slot3;
                        var2 = _closure2_slot7;
                        if(!(var3 !== var2)) { _fun0002_ip = 137; continue _fun0002 }
 125:
                        var2 = _closure2_slot7;
                        var7['full_server_gate'] = var2;
 137:
                        var6 = _closure1_slot1;
                        var3 = _closure1_slot3;
                        var2 = 12;
                        var3 = var3[var2];
                        var2 = undefined;
                        var6 = var6.bind(var2)(var3);
                        var3 = var6.isEmpty;
                        var3 = var3.bind(var6)(var7);
                        if(var3) { _fun0002_ip = 214; continue _fun0002 }
 176:
                        var6 = _closure2_slot9;
                        var3 = _closure2_slot0;
                        var3 = var6.bind(var2)(var3, var7);
                        SaveGenerator(address=194);
 192:
                        return var3;
 194:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                        if(var6) { _fun0002_ip = 211; continue _fun0002 }
 200:
                        var4 = _closure2_slot5;
                        var4 = var4.bind(var2)(var5);
                        _fun0002_ip = 214; continue _fun0002;
 211:
                        return var3;
 214:
                        return var2;
 217:
                        return var1;
                    }
                };
                return var1;
            };
            var3 = var3.bind(var4)(var2);
            var2 = new Array(7);
            var2[0] = var11;
            var2[1] = var24;
            var2[2] = var23;
            var2[3] = var13;
            var2[4] = var22;
            var2[5] = var17;
            var2[6] = var21;
            var2 = var5.bind(var15)(var3, var2);
            _closure2_slot12 = var2;
            var15 = _closure1_slot6;
            var5 = var15.useLayoutEffect;
            var3 = new Array(4);
            var3[0] = var20;
            var3[1] = var19;
            var3[2] = var18;
            var3[3] = var2;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure2_slot1;
                    var2 = var3.setOptions;
                    var1 = {};
                    var6 = _closure2_slot8;
                    if(var6) { _fun0003_ip = 49; continue _fun0003 }
 24:
                    var4 = _closure2_slot11;
                    if(var4) { _fun0003_ip = 40; continue _fun0003 }
 31:
                    var4 = function() {
                        var1 = null;
                        return var1;
                    };
                    _fun0003_ip = 47; continue _fun0003;
 40:
                    var4 = function() {
                        var4 = _closure1_slot9;
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot3;
                        var1 = 14;
                        var1 = var9[var1];
                        var3 = undefined;
                        var1 = var8.bind(var3)(var1);
                        var2 = var1.HeaderActionButton;
                        var1 = {};
                        var5 = 15;
                        var6 = var9[var5];
                        var6 = var8.bind(var3)(var6);
                        var7 = var6.intl;
                        var6 = var7.string;
                        var5 = var9[var5];
                        var5 = var8.bind(var3)(var5);
                        var5 = var5.t;
                        var5 = var5.R3BPHx;
                        var5 = var6.bind(var7)(var5);
                        var1['text'] = var5;
                        var5 = _closure2_slot12;
                        var1['onPress'] = var5;
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    };
 47:
                    _fun0003_ip = 56; continue _fun0003;
 49:
                    var4 = function() {
                        var4 = _closure1_slot9;
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var1 = 13;
                        var1 = var3[var1];
                        var3 = undefined;
                        var1 = var2.bind(var3)(var1);
                        var2 = var1.HeaderSubmittingIndicator;
                        var1 = {};
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    };
 56:
                    var1['headerRight'] = var4;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var5.bind(var15)(var2, var3);
            var5 = _closure1_slot6;
            var3 = var5.useEffect;
            var2 = new Array(1);
            var2[0] = var8;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var2 = _closure2_slot10;
                    var5 = null;
                    if(!(var5 != var2)) { _fun0004_ip = 122; continue _fun0004 }
 13:
                    var3 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var2 = 16;
                    var2 = var6[var2];
                    var8 = undefined;
                    var3 = var3.bind(var8)(var2);
                    var2 = var3.presentError;
                    var6 = _closure2_slot10;
                    var1 = var6.getAnyErrorMessage;
                    var1 = var1.bind(var6)();
                    if(!(var5 == var1)) { _fun0004_ip = 117; continue _fun0004 }
 62:
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var4 = 15;
                    var5 = var9[var4];
                    var5 = var7.bind(var8)(var5);
                    var6 = var5.intl;
                    var5 = var6.string;
                    var4 = var9[var4];
                    var4 = var7.bind(var8)(var4);
                    var4 = var4.t;
                    var4 = var4.ZUEGFh;
                    var1 = var5.bind(var6)(var4);
 117:
                    var1 = var2.bind(var3)(var1);
 122:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot10;
            var2 = _closure1_slot7;
            var1 = {};
            var5 = {};
            var18 = var7.bottom;
            var7 = _closure1_slot1;
            var15 = _closure1_slot3;
            var8 = 17;
            var8 = var15[var8];
            var8 = var7.bind(var4)(var8);
            var8 = var8.spacing;
            var8 = var8.PX_16;
            var8 = var18 + var8;
            var5['paddingBottom'] = var8;
            var1['contentContainerStyle'] = var5;
            var8 = _closure1_slot9;
            var5 = 18;
            var5 = var15[var5];
            var7 = var7.bind(var4)(var5);
            var5 = {};
            var5['isFullServerGating'] = var17;
            var5['onChange'] = var16;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot9;
            var7 = _closure1_slot0;
            var6 = 19;
            var6 = var15[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.Content;
            var6 = {};
            var6['cover'] = var14;
            var6['setCover'] = var12;
            if(!(var10 == var11)) { _fun0001_ip = 862; continue _fun0001 }
 845:
            var14 = var10 == var13;
            var12 = undefined;
            if(var14) { _fun0001_ip = 859; continue _fun0001 }
 854:
            var12 = var13.description;
 859:
            var11 = var12;
 862:
            var12 = var10 != var11;
            var10 = '';
            if(!var12) { _fun0001_ip = 876; continue _fun0001 }
 873:
            var10 = var11;
 876:
            var6['description'] = var10;
            var6['setDescription'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ScrollView;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ApplicationTypes;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot9 = var7;
    var4 = var4.jsxs;
    var _closure1_slot10 = var4;
    var4 = 21;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionsGroupEdit.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GuildSettingsRoleSubscriptionsGroupEdit(arg1) {
        var1 = arg1;
        var8 = var1.guildId;
        var4 = _closure1_slot9;
        var2 = _closure1_slot1;
        var3 = _closure1_slot3;
        var1 = 20;
        var1 = var3[var1];
        var3 = undefined;
        var2 = var2.bind(var3)(var1);
        var1 = {};
        var1['guildId'] = var8;
        var7 = _closure1_slot9;
        var6 = _closure1_slot11;
        var5 = {};
        var5['guildId'] = var8;
        var5 = var7.bind(var3)(var6, var5);
        var1['children'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();