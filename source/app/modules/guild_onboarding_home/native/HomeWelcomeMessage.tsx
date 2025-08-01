// app/modules/guild_onboarding_home/native/HomeWelcomeMessage.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = function replaceUsernameVariable(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var8 = arg1;
            var3 = arg2;
            var16 = arg3;
            var2 = var3.split;
            var1 = /\[@username\]/g;
            var2 = var2.bind(var3)(var1);
            var1 = new Array(0);
            var3 = var2.length;
            var9 = 1;
            var3 = var3 - var9;
            var11 = 19;
            var7 = undefined;
            var10 = 'text-sm/normal';
            var14 = 'text-sm/bold';
            var13 = global;
            var12 = '@';
            var6 = '';
            var5 = '-user';
            var15 = 0;
            if(!(var15 < var3)) { _fun0001_ip = 266; continue _fun0001 }
 94:
            var19 = var1.push;
            var21 = _closure1_slot8;
            var18 = _closure1_slot0;
            var3 = _closure1_slot2;
            var17 = var3[var11];
            var17 = var18.bind(var7)(var17);
            var20 = var17.Text;
            var17 = {};
            var17['variant'] = var10;
            var22 = var8.message;
            var17['style'] = var22;
            var22 = var2[var15];
            var17['children'] = var22;
            var17 = var21.bind(var7)(var20, var17, var15);
            var17 = var19.bind(var1)(var17);
            var17 = var1.push;
            var20 = _closure1_slot8;
            var3 = var3[var11];
            var3 = var18.bind(var7)(var3);
            var19 = var3.Text;
            var18 = {};
            var18['variant'] = var14;
            var3 = var8.message;
            var18['style'] = var3;
            var3 = var13.HermesInternal;
            var3 = var3.concat;
            var3 = var3.bind(var12)(var16);
            var18['children'] = var3;
            var3 = var13.HermesInternal;
            var3 = var3.concat;
            var3 = var3.bind(var6)(var15, var5);
            var3 = var20.bind(var7)(var19, var18, var3);
            var3 = var17.bind(var1)(var3);
            var15 = var15 + 1;
            var3 = var2.length;
            var3 = var3 - var9;
            if(var15 < var3) { _fun0001_ip = 94; continue _fun0001 }
 266:
            var3 = var1.push;
            var6 = _closure1_slot8;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var11];
            var4 = var5.bind(var7)(var4);
            var5 = var4.Text;
            var4 = {};
            var4['variant'] = var10;
            var8 = var8.message;
            var4['style'] = var8;
            var8 = var2.length;
            var8 = var8 - var9;
            var8 = var2[var8];
            var4['children'] = var8;
            var2 = var2.length;
            var2 = var6.bind(var7)(var5, var4, var2);
            var2 = var3.bind(var1)(var2);
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var10 = 4;
    var4 = var6[var10];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot8 = var7;
    var4 = var4.jsxs;
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var11 = 'relative';
    var9['position'] = var11;
    var4['relativeContainer'] = var9;
    var9 = {'marginHorizontal': 12, 'marginVertical': 16, 'borderRadius': null, 'padding': 2, 'display': 'flex', 'flexDirection': 'column'};
    var11 = 7;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.sm;
    var9['borderRadius'] = var13;
    var4['welcomeContainer'] = var9;
    var9 = {'borderRadius': null, 'backgroundColor': null, 'paddingHorizontal': 12, 'paddingBottom': 12, 'paddingTop': 4};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.sm;
    var9['borderRadius'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_PRIMARY;
    var9['backgroundColor'] = var13;
    var4['welcomeContent'] = var9;
    var9 = {'position': 'absolute', 'zIndex': 2, 'top': 0, 'left': 28, 'width': 40, 'height': 40};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.round;
    var9['borderRadius'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_PRIMARY;
    var9['backgroundColor'] = var13;
    var4['avatarBackground'] = var9;
    var9 = {'position': 'absolute', 'top': 4294967294, 'zIndex': 4294967295, 'left': 26, 'width': 44, 'height': 44};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.round;
    var9['borderRadius'] = var13;
    var4['avatarBorder'] = var9;
    var9 = {'position': 'absolute', 'top': 0, 'zIndex': 3, 'left': 28};
    var4['avatar'] = var9;
    var9 = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center', 'marginBottom': 4, 'paddingLeft': 44};
    var4['adminUsernameContainer'] = var9;
    var9 = {};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.HEADER_PRIMARY;
    var9['color'] = var13;
    var13 = 8;
    var9['paddingLeft'] = var13;
    var4['adminUsername'] = var9;
    var9 = {};
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.TEXT_NORMAL;
    var9['color'] = var11;
    var4['message'] = var9;
    var9 = {};
    var9['marginLeft'] = var10;
    var4['icon'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot10 = var4;
    var4 = 23;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_onboarding_home/native/HomeWelcomeMessage.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function HomeWelcomeMessage(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var31 = var1.guildId;
            var _closure2_slot0 = var31;
            var5 = undefined;
            var _closure2_slot3 = var5;
            var1 = _closure1_slot10;
            var23 = var1.bind(var5)();
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 8;
            var1 = var6[var2];
            var10 = var7.bind(var5)(var1);
            var9 = var10.useStateFromStores;
            var1 = _closure1_slot6;
            var8 = new Array(1);
            var8[0] = var1;
            var4 = function() {
                var2 = _closure1_slot6;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var24 = var9.bind(var10)(var8, var4);
            var4 = var6[var2];
            var10 = var7.bind(var5)(var4);
            var9 = var10.useStateFromStores;
            var4 = _closure1_slot7;
            var8 = new Array(1);
            var8[0] = var4;
            var4 = function() {
                var3 = _closure1_slot7;
                var2 = var3.getWelcomeMessage;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var21 = var9.bind(var10)(var8, var4);
            var _closure2_slot1 = var21;
            var4 = var6[var2];
            var8 = var7.bind(var5)(var4);
            var7 = var8.useStateFromStores;
            var4 = new Array(1);
            var4[0] = var1;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure1_slot6;
                    var2 = var3.getUser;
                    var5 = _closure2_slot1;
                    var1 = null;
                    var5 = var1 == var5;
                    var1 = undefined;
                    if(var5) { _fun0003_ip = 47; continue _fun0003 }
 31:
                    var4 = _closure2_slot1;
                    var5 = var4.authorIds;
                    var4 = 0;
                    var1 = var5[var4];
 47:
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var30 = var7.bind(var8)(var4, var1);
            var _closure2_slot2 = var30;
            var4 = _closure1_slot1;
            var1 = 9;
            var1 = var6[var1];
            var6 = var4.bind(var5)(var1);
            var1 = null;
            var7 = var1 == var30;
            var4 = undefined;
            if(var7) { _fun0002_ip = 195; continue _fun0002 }
 190:
            var4 = var30.id;
 195:
            var7 = var6.bind(var5)(var4, var31);
            var6 = _closure1_slot1;
            var8 = _closure1_slot2;
            var4 = 10;
            var4 = var8[var4];
            var6 = var6.bind(var5)(var4);
            var4 = {};
            var4['user'] = var30;
            var4['displayProfile'] = var7;
            var4 = var6.bind(var5)(var4);
            var6 = var4.theme;
            var16 = var4.primaryColor;
            var14 = var4.secondaryColor;
            var13 = ['#B8CDFF', '#8CD9FF'];
            var7 = _closure1_slot0;
            var2 = var8[var2];
            var10 = var7.bind(var5)(var2);
            var9 = var10.useStateFromStores;
            var2 = _closure1_slot5;
            var4 = new Array(1);
            var4[0] = var2;
            var2 = function() {
                var3 = _closure1_slot5;
                var2 = var3.getGuild;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var9.bind(var10)(var4, var2);
            _closure2_slot3 = var2;
            var4 = 11;
            var4 = var8[var4];
            var8 = var7.bind(var5)(var4);
            var7 = var8.useSubscribeGuildMembers;
            var4 = {};
            var10 = var1 == var21;
            var9 = undefined;
            if(var10) { _fun0002_ip = 346; continue _fun0002 }
 340:
            var9 = var21.authorIds;
 346:
            if(!(var1 == var9)) { _fun0002_ip = 354; continue _fun0002 }
 350:
            var9 = new Array(0);
 354:
            var4[var31] = var9;
            var4 = var7.bind(var8)(var4);
            var8 = _closure1_slot3;
            var7 = var8.useEffect;
            var4 = new Array(2);
            var4[0] = var30;
            var4[1] = var2;
            var3 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var1 = _closure2_slot2;
                    var8 = null;
                    var1 = var8 == var1;
                    if(var1) { _fun0004_ip = 30; continue _fun0004 }
 16:
                    var3 = _closure2_slot2;
                    var2 = var3.isNonUserBot;
                    var1 = var2.bind(var3)();
 30:
                    if(var1) { _fun0004_ip = 146; continue _fun0004 }
 33:
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 12;
                    var1 = var3[var1];
                    var5 = undefined;
                    var4 = var2.bind(var5)(var1);
                    var9 = _closure2_slot2;
                    var3 = var9.id;
                    var6 = var9.getAvatarURL;
                    var1 = _closure2_slot3;
                    var1 = var8 == var1;
                    var2 = undefined;
                    if(var1) { _fun0004_ip = 95; continue _fun0004 }
 86:
                    var1 = _closure2_slot3;
                    var2 = var1.id;
 95:
                    var1 = 80;
                    var2 = var6.bind(var9)(var2, var1);
                    var1 = {};
                    var6 = true;
                    var1['dispatchWait'] = var6;
                    var6 = _closure2_slot3;
                    var8 = var8 == var6;
                    var6 = undefined;
                    if(var8) { _fun0004_ip = 135; continue _fun0004 }
 126:
                    var7 = _closure2_slot3;
                    var6 = var7.id;
 135:
                    var1['guildId'] = var6;
                    var1 = var4.bind(var5)(var3, var2, var1);
 146:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var7.bind(var8)(var3, var4);
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 13;
            var3 = var7[var3];
            var4 = var4.bind(var5)(var3);
            var3 = var4.useName;
            var20 = var3.bind(var4)(var24);
            if(!(var1 != var21)) { _fun0002_ip = 1164; continue _fun0002 }
 436:
            if(!(var1 != var24)) { _fun0002_ip = 1164; continue _fun0002 }
 443:
            if(!(var1 != var30)) { _fun0002_ip = 1164; continue _fun0002 }
 450:
            var19 = var1 != var2;
            if(!var19) { _fun0002_ip = 472; continue _fun0002 }
 457:
            var3 = var2.ownerId;
            var2 = var30.id;
            var19 = var3 === var2;
 472:
            var4 = _closure1_slot8;
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 14;
            var2 = var7[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.ThemeContextProvider;
            var2 = {};
            var2['theme'] = var6;
            var2['primaryColor'] = var16;
            var2['secondaryColor'] = var14;
            var8 = _closure1_slot9;
            var7 = _closure1_slot4;
            var6 = {};
            var9 = var23.relativeContainer;
            var6['style'] = var9;
            var9 = var30.avatarDecoration;
            var9 = var1 == var9;
            var10 = null;
            if(!var9) { _fun0002_ip = 644; continue _fun0002 }
 553:
            var12 = _closure1_slot8;
            var11 = _closure1_slot4;
            var9 = {};
            var17 = var23.avatarBorder;
            var15 = new Array(2);
            var15[0] = var17;
            var17 = {};
            if(!(var1 == var16)) { _fun0002_ip = 591; continue _fun0002 }
 583:
            var18 = 0;
            var18 = var13[var18];
            _fun0002_ip = 626; continue _fun0002;
 591:
            var26 = _closure1_slot0;
            var27 = _closure1_slot2;
            var25 = 15;
            var25 = var27[var25];
            var27 = var26.bind(var5)(var25);
            var26 = var27.int2rgba;
            var25 = 1;
            var18 = var26.bind(var27)(var16, var25);
 626:
            var17['backgroundColor'] = var18;
            var15[1] = var17;
            var9['style'] = var15;
            var10 = var12.bind(var5)(var11, var9);
 644:
            var9 = new Array(4);
            var9[0] = var10;
            var11 = _closure1_slot8;
            var15 = _closure1_slot4;
            var10 = {};
            var12 = var23.avatarBackground;
            var10['style'] = var12;
            var10 = var11.bind(var5)(var15, var10);
            var9[1] = var10;
            var12 = _closure1_slot8;
            var29 = _closure1_slot1;
            var32 = _closure1_slot2;
            var10 = 16;
            var10 = var32[var10];
            var11 = var29.bind(var5)(var10);
            var10 = {};
            var17 = var23.avatar;
            var10['style'] = var17;
            var10['user'] = var30;
            var18 = _closure1_slot0;
            var17 = 17;
            var17 = var32[var17];
            var17 = var18.bind(var5)(var17);
            var17 = var17.AvatarSizes;
            var17 = var17.NORMAL;
            var10['size'] = var17;
            var28 = true;
            var10['disableStatus'] = var28;
            var10 = var12.bind(var5)(var11, var10);
            var9[2] = var10;
            var12 = _closure1_slot8;
            var10 = 18;
            var10 = var32[var10];
            var11 = var29.bind(var5)(var10);
            var10 = {};
            var17 = var23.welcomeContainer;
            var10['containerStyle'] = var17;
            var10['primaryColor'] = var16;
            var10['secondaryColor'] = var14;
            var10['fallbackBackground'] = var13;
            var14 = _closure1_slot9;
            var13 = {};
            var16 = var23.welcomeContent;
            var13['style'] = var16;
            var16 = {};
            var17 = var23.adminUsernameContainer;
            var16['style'] = var17;
            var26 = _closure1_slot8;
            var25 = 19;
            var17 = var32[var25];
            var17 = var18.bind(var5)(var17);
            var18 = var17.Text;
            var17 = {};
            var27 = var23.adminUsername;
            var17['style'] = var27;
            var27 = 'text-md/semibold';
            var17['variant'] = var27;
            var27 = 20;
            var27 = var32[var27];
            var29 = var29.bind(var5)(var27);
            var27 = var29.getName;
            var27 = var27.bind(var29)(var31, var1, var30);
            var17['children'] = var27;
            var18 = var26.bind(var5)(var18, var17);
            var17 = new Array(2);
            var17[0] = var18;
            var18 = null;
            if(!var19) { _fun0002_ip = 1019; continue _fun0002 }
 932:
            var27 = _closure1_slot8;
            var30 = _closure1_slot1;
            var31 = _closure1_slot2;
            var29 = 21;
            var19 = var31[var29];
            var26 = var30.bind(var5)(var19);
            var19 = {};
            var29 = var31[var29];
            var29 = var30.bind(var5)(var29);
            var29 = var29.Sizes;
            var29 = var29.REFRESH_SMALL_16;
            var19['size'] = var29;
            var29 = var23.icon;
            var19['style'] = var29;
            var29 = 22;
            var29 = var31[var29];
            var29 = var30.bind(var5)(var29);
            var19['source'] = var29;
            var19['disableColor'] = var28;
            var18 = var27.bind(var5)(var26, var19);
 1019:
            var17[1] = var18;
            var16['children'] = var17;
            var17 = var14.bind(var5)(var15, var16);
            var16 = new Array(2);
            var16[0] = var17;
            var19 = _closure1_slot8;
            var18 = _closure1_slot0;
            var17 = _closure1_slot2;
            var17 = var17[var25];
            var17 = var18.bind(var5)(var17);
            var18 = var17.Text;
            var17 = {};
            var25 = 'text-sm/normal';
            var17['variant'] = var25;
            var22 = _closure1_slot11;
            var21 = var21.message;
            if(!(var1 == var20)) { _fun0002_ip = 1097; continue _fun0002 }
 1092:
            var20 = var24.username;
 1097:
            var20 = var22.bind(var5)(var23, var21, var20);
            var17['children'] = var20;
            var17 = var19.bind(var5)(var18, var17);
            var16[1] = var17;
            var13['children'] = var16;
            var13 = var14.bind(var5)(var15, var13);
            var10['children'] = var13;
            var10 = var12.bind(var5)(var11, var10);
            var9[3] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
 1164:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();