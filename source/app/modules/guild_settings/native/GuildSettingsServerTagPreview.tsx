// app/modules/guild_settings/native/GuildSettingsServerTagPreview.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var11.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var12 = 1;
    var4 = var6[var12];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.Image;
    var _closure1_slot6 = var7;
    var4 = var4.View;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GuildTagBadgeSize;
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot10 = var7;
    var7 = var4.jsxs;
    var _closure1_slot11 = var7;
    var4 = var4.Fragment;
    var _closure1_slot12 = var4;
    var4 = 7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 8;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.space;
    var13 = var13.PX_16;
    var9['padding'] = var13;
    var4['card'] = var9;
    var9 = {};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.space;
    var13 = var13.PX_12;
    var9['marginBottom'] = var13;
    var4['notice'] = var9;
    var9 = {'flexDirection': 'row', 'columnGap': null, 'alignItems': 'flex-start'};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.space;
    var13 = var13.PX_12;
    var9['columnGap'] = var13;
    var4['message'] = var9;
    var9 = {};
    var13 = 0.5;
    var9['opacity'] = var13;
    var4['unfocused'] = var9;
    var9 = {'width': 40, 'height': 40};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.round;
    var9['borderRadius'] = var13;
    var4['avatar'] = var9;
    var9 = {};
    var9['flex'] = var12;
    var4['messageBody'] = var9;
    var9 = {'flexDirection': 'row', 'alignItems': 'center'};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.space;
    var10 = var10.PX_4;
    var9['columnGap'] = var10;
    var4['usernameRow'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot13 = var4;
    var4 = 22;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_settings/native/GuildSettingsServerTagPreview.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GuildSettingsServerTagPreview(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var10 = var2.guildId;
            var _closure2_slot0 = var10;
            var19 = var2.tag;
            var36 = var2.badge;
            var38 = var2.primaryColor;
            var37 = var2.secondaryColor;
            var20 = var2.isDirty;
            var4 = var2.variant;
            var5 = undefined;
            if(!(var4 === var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = 'card';
case 2:
            var9 = var2.onAdopted;
            var _closure2_slot1 = var9;
            var _closure2_slot2 = var5;
            var3 = _closure1_slot13;
            var7 = var3.bind(var5)();
            var6 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 9;
            var3 = var11[var3];
            var12 = var6.bind(var5)(var3);
            var8 = var12.useStateFromStores;
            var3 = _closure1_slot8;
            var6 = new Array(1);
            var6[0] = var3;
            var3 = function() {
                var2 = _closure1_slot8;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3 = var8.bind(var12)(var6, var3);
            var8 = _closure1_slot1;
            var6 = 10;
            var6 = var11[var6];
            var12 = var8.bind(var5)(var6);
            var6 = var12.useName;
            var18 = null;
            var30 = var6.bind(var12)(var10, var18, var3);
            var6 = 11;
            var6 = var11[var6];
            var11 = var8.bind(var5)(var6);
            var8 = var11.makeSource;
            var12 = var18 == var3;
            var6 = undefined;
            if(var12) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var13 = var3.getAvatarURL;
            var12 = 40;
            var6 = var13.bind(var3)(var10, var12);
case 4:
            var24 = var8.bind(var11)(var6);
            var8 = var18 == var3;
            var6 = undefined;
            if(var8) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var8 = var3.primaryGuild;
            var11 = var18 == var8;
            var6 = undefined;
            if(var11) { _fun0001_ip = 6; continue _fun0001 }
case 8:
            var6 = var8.identityGuildId;
case 6:
            var17 = var6 === var10;
            if(!var17) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var8 = var18 == var3;
            var6 = undefined;
            if(var8) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var3 = var3.primaryGuild;
            var8 = var18 == var3;
            var6 = undefined;
            if(var8) { _fun0001_ip = 11; continue _fun0001 }
case 13:
            var6 = var3.identityEnabled;
case 11:
            var3 = true;
            var17 = var3 === var6;
case 9:
            var8 = _closure1_slot5;
            var6 = var8.useState;
            var3 = false;
            var11 = var6.bind(var8)(var3);
            var6 = _closure1_slot4;
            var3 = 2;
            var6 = var6.bind(var5)(var11, var3);
            var3 = 0;
            var21 = var6[var3];
            var3 = 1;
            var3 = var6[var3];
            _closure2_slot2 = var3;
            var6 = var8.useCallback;
            var3 = _closure1_slot3;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                        var2 = _closure2_slot2;
                        var3 = undefined;
                        var7 = true;
                        var2 = var2.bind(var3)(var7);
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var2 = 12;
                        var2 = var6[var2];
                        var6 = var5.bind(var3)(var2);
                        var5 = var6.adoptGuildIdentity;
                        var2 = _closure2_slot0;
                        var2 = var5.bind(var6)(var2, var7);
                        SaveGenerator(address=66);
case 16:
                        return var2;
case 17:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                        if(var5) { _fun0002_ip = 18; continue _fun0002 }
case 19:
                        var6 = _closure2_slot2;
                        var5 = false;
                        var5 = var6.bind(var3)(var5);
                        var5 = var2.ok;
                        if(!var5) { _fun0002_ip = 20; continue _fun0002 }
case 21:
                        var6 = _closure2_slot1;
                        var5 = null;
                        if(!(var5 != var6)) { _fun0002_ip = 20; continue _fun0002 }
case 22:
                        var4 = _closure2_slot1;
                        var4 = var4.bind(var3)();
case 20:
                        return var3;
case 18:
                        return var2;
case 14:
                        return var1;
                    }
                };
                return var1;
            };
            var3 = var3.bind(var5)(var1);
            var1 = new Array(2);
            var1[0] = var10;
            var1[1] = var9;
            var16 = var6.bind(var8)(var3, var1);
            var6 = _closure1_slot11;
            var3 = _closure1_slot12;
            var1 = {};
            var10 = _closure1_slot10;
            var9 = _closure1_slot0;
            var8 = _closure1_slot2;
            var29 = 13;
            var8 = var8[var29];
            var8 = var9.bind(var5)(var8);
            var9 = var8.Text;
            var8 = {'variant': 'text-sm/medium', 'color': 'text-muted'};
            var11 = var7.notice;
            var8['style'] = var11;
            var12 = _closure1_slot0;
            var11 = _closure1_slot2;
            var26 = 14;
            var13 = var11[var26];
            var13 = var12.bind(var5)(var13);
            var14 = var13.intl;
            var13 = var14.string;
            var11 = var11[var26];
            var11 = var12.bind(var5)(var11);
            var12 = var11.t;
            if(var17) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var11 = var12.OVvzY0;
            var11 = var13.bind(var14)(var11);
            _fun0001_ip = 25; continue _fun0001;
case 23:
            var12 = var12.hRsJ7T;
            var11 = var13.bind(var14)(var12);
case 25:
            var8['children'] = var11;
            var9 = var10.bind(var5)(var9, var8);
            var8 = new Array(2);
            var8[0] = var9;
            var11 = _closure1_slot11;
            var25 = _closure1_slot0;
            var22 = _closure1_slot2;
            var9 = 15;
            var9 = var22[var9];
            var9 = var25.bind(var5)(var9);
            var10 = var9.Stack;
            var9 = {};
            var28 = _closure1_slot1;
            var12 = 8;
            var12 = var22[var12];
            var12 = var28.bind(var5)(var12);
            var12 = var12.space;
            var12 = var12.PX_12;
            var9['spacing'] = var12;
            var14 = _closure1_slot7;
            var12 = {};
            var15 = var7.message;
            var13 = new Array(2);
            var13[0] = var15;
            var15 = var7.unfocused;
            var13[1] = var15;
            var12['style'] = var13;
            var27 = _closure1_slot10;
            var23 = _closure1_slot6;
            var13 = {};
            var15 = 16;
            var15 = var22[var15];
            var15 = var28.bind(var5)(var15);
            var13['source'] = var15;
            var15 = var7.avatar;
            var13['style'] = var15;
            var28 = 'no';
            var13['importantForAccessibility'] = var28;
            var15 = var27.bind(var5)(var23, var13);
            var13 = new Array(2);
            var13[0] = var15;
            var15 = {};
            var31 = var7.messageBody;
            var15['style'] = var31;
            var31 = var22[var29];
            var31 = var25.bind(var5)(var31);
            var32 = var31.Text;
            var31 = {'variant': 'text-md/semibold', 'color': 'text-default', 'children': 'Locke'};
            var32 = var27.bind(var5)(var32, var31);
            var31 = new Array(2);
            var31[0] = var32;
            var32 = var22[var29];
            var32 = var25.bind(var5)(var32);
            var33 = var32.Text;
            var32 = {'variant': 'text-md/normal', 'color': 'text-default'};
            var34 = var22[var26];
            var34 = var25.bind(var5)(var34);
            var39 = var34.intl;
            var35 = var39.string;
            var34 = var22[var26];
            var34 = var25.bind(var5)(var34);
            var34 = var34.t;
            var34 = var34.KZQ4mF;
            var34 = var35.bind(var39)(var34);
            var32['children'] = var34;
            var32 = var27.bind(var5)(var33, var32);
            var31[1] = var32;
            var15['children'] = var31;
            var15 = var11.bind(var5)(var14, var15);
            var13[1] = var15;
            var12['children'] = var13;
            var13 = var11.bind(var5)(var14, var12);
            var12 = new Array(4);
            var12[0] = var13;
            var13 = {};
            var15 = var7.message;
            var13['style'] = var15;
            var15 = {};
            var15['source'] = var24;
            var24 = var7.avatar;
            var15['style'] = var24;
            var15['importantForAccessibility'] = var28;
            var15 = var27.bind(var5)(var23, var15);
            var23 = new Array(2);
            var23[0] = var15;
            var24 = {};
            var15 = var7.messageBody;
            var24['style'] = var15;
            var15 = {};
            var31 = var7.usernameRow;
            var15['style'] = var31;
            var22 = var22[var29];
            var22 = var25.bind(var5)(var22);
            var25 = var22.Text;
            var22 = {'variant': 'text-md/semibold', 'color': 'text-default'};
            var22['children'] = var30;
            var25 = var27.bind(var5)(var25, var22);
            var22 = new Array(2);
            var22[0] = var25;
            var25 = var18 != var19;
            if(!var25) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var27 = '';
            var25 = var27 !== var19;
case 26:
            if(!var25) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var31 = _closure1_slot10;
            var30 = _closure1_slot0;
            var32 = _closure1_slot2;
            var27 = 17;
            var27 = var32[var27];
            var27 = var30.bind(var5)(var27);
            var30 = var27.BaseGuildTagChiplet;
            var27 = {};
            var27['guildTag'] = var19;
            var33 = var18 != var36;
            var32 = undefined;
            if(!var33) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            var35 = _closure1_slot10;
            var34 = _closure1_slot0;
            var39 = _closure1_slot2;
            var33 = 18;
            var33 = var39[var33];
            var33 = var34.bind(var5)(var33);
            var34 = var33.GuildBadge;
            var33 = {};
            var33['badge'] = var36;
            var39 = var18 != var38;
            var36 = undefined;
            if(!var39) { _fun0001_ip = 32; continue _fun0001 }
case 33:
            var36 = var38;
case 32:
            var33['primaryTintColor'] = var36;
            var38 = var18 != var37;
            var36 = undefined;
            if(!var38) { _fun0001_ip = 34; continue _fun0001 }
case 35:
            var36 = var37;
case 34:
            var33['secondaryTintColor'] = var36;
            var36 = _closure1_slot9;
            var37 = var36.SIZE_12;
            var33['width'] = var37;
            var36 = var36.SIZE_12;
            var33['height'] = var36;
            var32 = var35.bind(var5)(var34, var33);
case 30:
            var27['guildBadge'] = var32;
            var25 = var31.bind(var5)(var30, var27);
case 28:
            var22[1] = var25;
            var15['children'] = var22;
            var15 = var11.bind(var5)(var14, var15);
            var27 = new Array(2);
            var27[0] = var15;
            var15 = _closure1_slot10;
            var25 = _closure1_slot0;
            var22 = _closure1_slot2;
            var30 = var22[var29];
            var30 = var25.bind(var5)(var30);
            var31 = var30.Text;
            var30 = {'variant': 'text-md/normal', 'color': 'text-default'};
            var32 = var22[var26];
            var32 = var25.bind(var5)(var32);
            var34 = var32.intl;
            var33 = var34.string;
            var32 = var22[var26];
            var32 = var25.bind(var5)(var32);
            var32 = var32.t;
            var32 = var32.LKsPRe;
            var32 = var33.bind(var34)(var32);
            var30['children'] = var32;
            var30 = var15.bind(var5)(var31, var30);
            var27[1] = var30;
            var24['children'] = var27;
            var24 = var11.bind(var5)(var14, var24);
            var23[1] = var24;
            var13['children'] = var23;
            var13 = var11.bind(var5)(var14, var13);
            var12[1] = var13;
            var23 = _closure1_slot11;
            var14 = _closure1_slot7;
            var13 = {};
            var27 = var7.message;
            var24 = new Array(2);
            var24[0] = var27;
            var27 = var7.unfocused;
            var24[1] = var27;
            var13['style'] = var24;
            var27 = _closure1_slot6;
            var24 = {};
            var31 = _closure1_slot1;
            var30 = 19;
            var30 = var22[var30];
            var30 = var31.bind(var5)(var30);
            var24['source'] = var30;
            var30 = var7.avatar;
            var24['style'] = var30;
            var24['importantForAccessibility'] = var28;
            var27 = var15.bind(var5)(var27, var24);
            var24 = new Array(2);
            var24[0] = var27;
            var27 = {};
            var28 = var7.messageBody;
            var27['style'] = var28;
            var28 = var22[var29];
            var28 = var25.bind(var5)(var28);
            var30 = var28.Text;
            var28 = {'variant': 'text-md/semibold', 'color': 'text-default', 'children': 'Phibi'};
            var30 = var15.bind(var5)(var30, var28);
            var28 = new Array(2);
            var28[0] = var30;
            var29 = var22[var29];
            var29 = var25.bind(var5)(var29);
            var30 = var29.Text;
            var29 = {'variant': 'text-md/normal', 'color': 'text-default'};
            var31 = var22[var26];
            var31 = var25.bind(var5)(var31);
            var33 = var31.intl;
            var32 = var33.string;
            var31 = var22[var26];
            var31 = var25.bind(var5)(var31);
            var31 = var31.t;
            var31 = var31.vtCg11;
            var31 = var32.bind(var33)(var31);
            var29['children'] = var31;
            var29 = var15.bind(var5)(var30, var29);
            var28[1] = var29;
            var27['children'] = var28;
            var27 = var23.bind(var5)(var14, var27);
            var24[1] = var27;
            var13['children'] = var24;
            var13 = var23.bind(var5)(var14, var13);
            var12[2] = var13;
            var13 = 20;
            var13 = var22[var13];
            var13 = var25.bind(var5)(var13);
            var14 = var13.Button;
            var13 = {};
            var23 = 'primary';
            var13['variant'] = var23;
            var23 = var22[var26];
            var23 = var25.bind(var5)(var23);
            var24 = var23.intl;
            var23 = var24.string;
            var22 = var22[var26];
            var22 = var25.bind(var5)(var22);
            var22 = var22.t;
            var22 = var22.cQDYRu;
            var22 = var23.bind(var24)(var22);
            var13['text'] = var22;
            var13['loading'] = var21;
            if(var17) { _fun0001_ip = 36; continue _fun0001 }
case 37:
            var17 = var21;
case 36:
            if(var17) { _fun0001_ip = 38; continue _fun0001 }
case 39:
            var17 = var20;
case 38:
            if(var17) { _fun0001_ip = 40; continue _fun0001 }
case 41:
            var17 = var18 == var19;
case 40:
            if(var17) { _fun0001_ip = 42; continue _fun0001 }
case 43:
            var18 = '';
            var17 = var18 === var19;
case 42:
            var13['disabled'] = var17;
            var13['onPress'] = var16;
            var13 = var15.bind(var5)(var14, var13);
            var12[3] = var13;
            var9['children'] = var12;
            var9 = var11.bind(var5)(var10, var9);
            var8[1] = var9;
            var1['children'] = var8;
            var6 = var6.bind(var5)(var3, var1);
            var3 = 'plain';
            var1 = var6;
            if(!(var3 !== var4)) { _fun0001_ip = 44; continue _fun0001 }
case 45:
            var4 = _closure1_slot10;
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 21;
            var2 = var8[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.Card;
            var2 = {'variant': 'secondary', 'radius': 16};
            var7 = var7.card;
            var2['style'] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 44:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();