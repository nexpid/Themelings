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
    var4 = var4.jsxs;
    var _closure1_slot11 = var4;
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
    var _closure1_slot12 = var4;
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
            var6 = var2.guildId;
            var _closure2_slot0 = var6;
            var16 = var2.tag;
            var35 = var2.badge;
            var37 = var2.primaryColor;
            var36 = var2.secondaryColor;
            var17 = var2.isDirty;
            var4 = undefined;
            var _closure2_slot1 = var4;
            var2 = _closure1_slot12;
            var25 = var2.bind(var4)();
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 9;
            var2 = var7[var2];
            var8 = var3.bind(var4)(var2);
            var5 = var8.useStateFromStores;
            var2 = _closure1_slot8;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var2 = _closure1_slot8;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = var5.bind(var8)(var3, var2);
            var5 = _closure1_slot1;
            var3 = 10;
            var3 = var7[var3];
            var8 = var5.bind(var4)(var3);
            var3 = var8.useName;
            var15 = null;
            var29 = var3.bind(var8)(var6, var15, var2);
            var3 = 11;
            var3 = var7[var3];
            var7 = var5.bind(var4)(var3);
            var5 = var7.makeSource;
            var8 = var15 == var2;
            var3 = undefined;
            if(var8) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var9 = var2.getAvatarURL;
            var8 = 40;
            var3 = var9.bind(var2)(var6, var8);
case 2:
            var21 = var5.bind(var7)(var3);
            var5 = var15 == var2;
            var3 = undefined;
            if(var5) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = var2.primaryGuild;
            var7 = var15 == var5;
            var3 = undefined;
            if(var7) { _fun0001_ip = 4; continue _fun0001 }
case 6:
            var3 = var5.identityGuildId;
case 4:
            var14 = var3 === var6;
            if(!var14) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var5 = var15 == var2;
            var3 = undefined;
            if(var5) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var2 = var2.primaryGuild;
            var5 = var15 == var2;
            var3 = undefined;
            if(var5) { _fun0001_ip = 9; continue _fun0001 }
case 11:
            var3 = var2.identityEnabled;
case 9:
            var2 = true;
            var14 = var2 === var3;
case 7:
            var5 = _closure1_slot5;
            var3 = var5.useState;
            var2 = false;
            var7 = var3.bind(var5)(var2);
            var3 = _closure1_slot4;
            var2 = 2;
            var3 = var3.bind(var4)(var7, var2);
            var2 = 0;
            var18 = var3[var2];
            var2 = 1;
            var2 = var3[var2];
            _closure2_slot1 = var2;
            var3 = var5.useCallback;
            var2 = _closure1_slot3;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                        var2 = _closure2_slot1;
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
case 14:
                        return var2;
case 15:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                        if(var5) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                        var5 = _closure2_slot1;
                        var4 = false;
                        var4 = var5.bind(var3)(var4);
                        return var3;
case 16:
                        return var2;
case 12:
                        return var1;
                    }
                };
                return var1;
            };
            var2 = var2.bind(var4)(var1);
            var1 = new Array(1);
            var1[0] = var6;
            var13 = var3.bind(var5)(var2, var1);
            var3 = _closure1_slot11;
            var7 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 13;
            var1 = var5[var1];
            var1 = var7.bind(var4)(var1);
            var2 = var1.Card;
            var1 = {'variant': 'secondary', 'radius': 16};
            var6 = 16;
            var8 = var25.card;
            var1['style'] = var8;
            var8 = _closure1_slot10;
            var26 = 14;
            var5 = var5[var26];
            var5 = var7.bind(var4)(var5);
            var7 = var5.Text;
            var5 = {'variant': 'text-sm/medium', 'color': 'text-muted'};
            var9 = var25.notice;
            var5['style'] = var9;
            var10 = _closure1_slot0;
            var9 = _closure1_slot2;
            var23 = 15;
            var11 = var9[var23];
            var11 = var10.bind(var4)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var9 = var9[var23];
            var9 = var10.bind(var4)(var9);
            var10 = var9.t;
            if(var14) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var9 = var10.OVvzY0;
            var9 = var11.bind(var12)(var9);
            _fun0001_ip = 20; continue _fun0001;
case 18:
            var10 = var10.hRsJ7T;
            var9 = var11.bind(var12)(var10);
case 20:
            var5['children'] = var9;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot11;
            var22 = _closure1_slot0;
            var19 = _closure1_slot2;
            var6 = var19[var6];
            var6 = var22.bind(var4)(var6);
            var7 = var6.Stack;
            var6 = {};
            var27 = _closure1_slot1;
            var9 = 8;
            var9 = var19[var9];
            var9 = var27.bind(var4)(var9);
            var9 = var9.space;
            var9 = var9.PX_12;
            var6['spacing'] = var9;
            var11 = _closure1_slot7;
            var9 = {};
            var12 = var25.message;
            var10 = new Array(2);
            var10[0] = var12;
            var12 = var25.unfocused;
            var10[1] = var12;
            var9['style'] = var10;
            var24 = _closure1_slot10;
            var20 = _closure1_slot6;
            var10 = {};
            var12 = 17;
            var12 = var19[var12];
            var12 = var27.bind(var4)(var12);
            var10['source'] = var12;
            var12 = var25.avatar;
            var10['style'] = var12;
            var27 = 'no';
            var10['importantForAccessibility'] = var27;
            var12 = var24.bind(var4)(var20, var10);
            var10 = new Array(2);
            var10[0] = var12;
            var12 = {};
            var30 = var25.messageBody;
            var12['style'] = var30;
            var30 = var19[var26];
            var30 = var22.bind(var4)(var30);
            var31 = var30.Text;
            var30 = {'variant': 'text-md/semibold', 'color': 'text-default', 'children': 'Locke'};
            var31 = var24.bind(var4)(var31, var30);
            var30 = new Array(2);
            var30[0] = var31;
            var31 = var19[var26];
            var31 = var22.bind(var4)(var31);
            var32 = var31.Text;
            var31 = {'variant': 'text-md/normal', 'color': 'text-default'};
            var33 = var19[var23];
            var33 = var22.bind(var4)(var33);
            var38 = var33.intl;
            var34 = var38.string;
            var33 = var19[var23];
            var33 = var22.bind(var4)(var33);
            var33 = var33.t;
            var33 = var33.KZQ4mF;
            var33 = var34.bind(var38)(var33);
            var31['children'] = var33;
            var31 = var24.bind(var4)(var32, var31);
            var30[1] = var31;
            var12['children'] = var30;
            var12 = var8.bind(var4)(var11, var12);
            var10[1] = var12;
            var9['children'] = var10;
            var10 = var8.bind(var4)(var11, var9);
            var9 = new Array(4);
            var9[0] = var10;
            var10 = {};
            var12 = var25.message;
            var10['style'] = var12;
            var12 = {};
            var12['source'] = var21;
            var21 = var25.avatar;
            var12['style'] = var21;
            var12['importantForAccessibility'] = var27;
            var12 = var24.bind(var4)(var20, var12);
            var20 = new Array(2);
            var20[0] = var12;
            var21 = {};
            var12 = var25.messageBody;
            var21['style'] = var12;
            var12 = {};
            var30 = var25.usernameRow;
            var12['style'] = var30;
            var19 = var19[var26];
            var19 = var22.bind(var4)(var19);
            var22 = var19.Text;
            var19 = {'variant': 'text-md/semibold', 'color': 'text-default'};
            var19['children'] = var29;
            var22 = var24.bind(var4)(var22, var19);
            var19 = new Array(2);
            var19[0] = var22;
            var22 = var15 != var16;
            if(!var22) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var24 = '';
            var22 = var24 !== var16;
case 21:
            if(!var22) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var30 = _closure1_slot10;
            var29 = _closure1_slot0;
            var31 = _closure1_slot2;
            var24 = 18;
            var24 = var31[var24];
            var24 = var29.bind(var4)(var24);
            var29 = var24.BaseGuildTagChiplet;
            var24 = {};
            var24['guildTag'] = var16;
            var32 = var15 != var35;
            var31 = undefined;
            if(!var32) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var34 = _closure1_slot10;
            var33 = _closure1_slot0;
            var38 = _closure1_slot2;
            var32 = 19;
            var32 = var38[var32];
            var32 = var33.bind(var4)(var32);
            var33 = var32.GuildBadge;
            var32 = {};
            var32['badge'] = var35;
            var38 = var15 != var37;
            var35 = undefined;
            if(!var38) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            var35 = var37;
case 27:
            var32['primaryTintColor'] = var35;
            var37 = var15 != var36;
            var35 = undefined;
            if(!var37) { _fun0001_ip = 29; continue _fun0001 }
case 30:
            var35 = var36;
case 29:
            var32['secondaryTintColor'] = var35;
            var35 = _closure1_slot9;
            var36 = var35.SIZE_12;
            var32['width'] = var36;
            var35 = var35.SIZE_12;
            var32['height'] = var35;
            var31 = var34.bind(var4)(var33, var32);
case 25:
            var24['guildBadge'] = var31;
            var22 = var30.bind(var4)(var29, var24);
case 23:
            var19[1] = var22;
            var12['children'] = var19;
            var12 = var8.bind(var4)(var11, var12);
            var24 = new Array(2);
            var24[0] = var12;
            var12 = _closure1_slot10;
            var22 = _closure1_slot0;
            var19 = _closure1_slot2;
            var29 = var19[var26];
            var29 = var22.bind(var4)(var29);
            var30 = var29.Text;
            var29 = {'variant': 'text-md/normal', 'color': 'text-default'};
            var31 = var19[var23];
            var31 = var22.bind(var4)(var31);
            var33 = var31.intl;
            var32 = var33.string;
            var31 = var19[var23];
            var31 = var22.bind(var4)(var31);
            var31 = var31.t;
            var31 = var31.LKsPRe;
            var31 = var32.bind(var33)(var31);
            var29['children'] = var31;
            var29 = var12.bind(var4)(var30, var29);
            var24[1] = var29;
            var21['children'] = var24;
            var21 = var8.bind(var4)(var11, var21);
            var20[1] = var21;
            var10['children'] = var20;
            var10 = var8.bind(var4)(var11, var10);
            var9[1] = var10;
            var20 = _closure1_slot11;
            var11 = _closure1_slot7;
            var10 = {};
            var24 = var25.message;
            var21 = new Array(2);
            var21[0] = var24;
            var24 = var25.unfocused;
            var21[1] = var24;
            var10['style'] = var21;
            var24 = _closure1_slot6;
            var21 = {};
            var29 = _closure1_slot1;
            var28 = 20;
            var28 = var19[var28];
            var28 = var29.bind(var4)(var28);
            var21['source'] = var28;
            var28 = var25.avatar;
            var21['style'] = var28;
            var21['importantForAccessibility'] = var27;
            var24 = var12.bind(var4)(var24, var21);
            var21 = new Array(2);
            var21[0] = var24;
            var24 = {};
            var25 = var25.messageBody;
            var24['style'] = var25;
            var25 = var19[var26];
            var25 = var22.bind(var4)(var25);
            var27 = var25.Text;
            var25 = {'variant': 'text-md/semibold', 'color': 'text-default', 'children': 'Phibi'};
            var27 = var12.bind(var4)(var27, var25);
            var25 = new Array(2);
            var25[0] = var27;
            var26 = var19[var26];
            var26 = var22.bind(var4)(var26);
            var27 = var26.Text;
            var26 = {'variant': 'text-md/normal', 'color': 'text-default'};
            var28 = var19[var23];
            var28 = var22.bind(var4)(var28);
            var30 = var28.intl;
            var29 = var30.string;
            var28 = var19[var23];
            var28 = var22.bind(var4)(var28);
            var28 = var28.t;
            var28 = var28.vtCg11;
            var28 = var29.bind(var30)(var28);
            var26['children'] = var28;
            var26 = var12.bind(var4)(var27, var26);
            var25[1] = var26;
            var24['children'] = var25;
            var24 = var20.bind(var4)(var11, var24);
            var21[1] = var24;
            var10['children'] = var21;
            var10 = var20.bind(var4)(var11, var10);
            var9[2] = var10;
            var10 = 21;
            var10 = var19[var10];
            var10 = var22.bind(var4)(var10);
            var11 = var10.Button;
            var10 = {};
            var20 = 'primary';
            var10['variant'] = var20;
            var20 = var19[var23];
            var20 = var22.bind(var4)(var20);
            var21 = var20.intl;
            var20 = var21.string;
            var19 = var19[var23];
            var19 = var22.bind(var4)(var19);
            var19 = var19.t;
            var19 = var19.cQDYRu;
            var19 = var20.bind(var21)(var19);
            var10['text'] = var19;
            var10['loading'] = var18;
            if(var14) { _fun0001_ip = 31; continue _fun0001 }
case 32:
            var14 = var18;
case 31:
            if(var14) { _fun0001_ip = 33; continue _fun0001 }
case 34:
            var14 = var17;
case 33:
            if(var14) { _fun0001_ip = 35; continue _fun0001 }
case 36:
            var14 = var15 == var16;
case 35:
            if(var14) { _fun0001_ip = 37; continue _fun0001 }
case 38:
            var15 = '';
            var14 = var15 === var16;
case 37:
            var10['disabled'] = var14;
            var10['onPress'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var9[3] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();