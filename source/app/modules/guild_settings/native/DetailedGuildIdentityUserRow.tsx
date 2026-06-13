// app/modules/guild_settings/native/DetailedGuildIdentityUserRow.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var7;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var2);
    var1 = 0;
    var5 = var7[var1];
    var2 = metroImportAll;
    var1 = undefined;
    var8 = var2.bind(var1)(var5);
    var2 = 1;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.View;
    var _closure1_slot3 = var2;
    var2 = 2;
    var2 = var7[var2];
    var2 = var12.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 3;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var5 = var2.jsx;
    var _closure1_slot5 = var5;
    var2 = var2.jsxs;
    var _closure1_slot6 = var2;
    var2 = 4;
    var2 = var7[var2];
    var9 = var6.bind(var1)(var2);
    var5 = var9.createStyles;
    var2 = {};
    var10 = {'flexDirection': 'row', 'alignItems': 'center'};
    var2['mainIdentity'] = var10;
    var10 = {};
    var11 = 5;
    var13 = var7[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.space;
    var13 = var13.PX_4;
    var10['marginRight'] = var13;
    var2['primaryAvatar'] = var10;
    var10 = {};
    var11 = var7[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.INTERACTIVE_TEXT_DEFAULT;
    var10['color'] = var11;
    var11 = 12;
    var10['fontSize'] = var11;
    var2['mainTag'] = var10;
    var2 = var5.bind(var9)(var2);
    var _closure1_slot7 = var2;
    var5 = var8.memo;
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var7 = var1.contentHeight;
            var2 = var1.guildId;
            var15 = var1.user;
            var1 = _closure1_slot7;
            var4 = undefined;
            var14 = var1.bind(var4)();
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 6;
            var1 = var5[var1];
            var3 = var3.bind(var4)(var1);
            var1 = var3.getNickname;
            var6 = var1.bind(var3)(var2, var4, var15);
            var12 = null;
            if(!(var12 == var6)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 7;
            var1 = var5[var1];
            var3 = var3.bind(var4)(var1);
            var1 = var3.getGlobalName;
            var6 = var1.bind(var3)(var15);
case 2:
            var1 = var15.hasAvatarForGuild;
            var10 = var1.bind(var15)(var2);
            var3 = _closure1_slot6;
            var2 = _closure1_slot3;
            var1 = {};
            var5 = {};
            var5['height'] = var7;
            var1['style'] = var5;
            var8 = _closure1_slot5;
            var7 = _closure1_slot1;
            var5 = _closure1_slot2;
            var16 = 8;
            var5 = var5[var16];
            var7 = var7.bind(var4)(var5);
            var5 = {};
            var5['user'] = var15;
            var5['nick'] = var6;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            if(var10) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var7 = var12 != var6;
            var6 = null;
            if(!var7) { _fun0001_ip = 6; continue _fun0001 }
case 4:
            var9 = _closure1_slot6;
            var8 = _closure1_slot3;
            var7 = {};
            var13 = var14.mainIdentity;
            var7['style'] = var13;
            var12 = null;
            if(!var10) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var17 = _closure1_slot5;
            var19 = _closure1_slot0;
            var20 = _closure1_slot2;
            var18 = 9;
            var10 = var20[var18];
            var10 = var19.bind(var4)(var10);
            var13 = var10.Avatar;
            var10 = {};
            var18 = var20[var18];
            var18 = var19.bind(var4)(var18);
            var18 = var18.AvatarSizes;
            var18 = var18.SIZE_16;
            var10['size'] = var18;
            var18 = var14.primaryAvatar;
            var10['style'] = var18;
            var10['user'] = var15;
            var10['guildId'] = var4;
            var12 = var17.bind(var4)(var13, var10);
case 7:
            var10 = new Array(2);
            var10[0] = var12;
            var13 = _closure1_slot5;
            var12 = _closure1_slot1;
            var11 = _closure1_slot2;
            var11 = var11[var16];
            var12 = var12.bind(var4)(var11);
            var11 = {};
            var11['user'] = var15;
            var14 = var14.mainTag;
            var11['usernameStyle'] = var14;
            var14 = true;
            var11['hideBotTag'] = var14;
            var11 = var13.bind(var4)(var12, var11);
            var10[1] = var11;
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 6:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var5.bind(var8)(var2);
    var _closure1_slot8 = var2;
    var5 = var8.memo;
    var4 = function DetailedGuildIdentityUserRow(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg1;
            var19 = var3.accessibilityLabel;
            var23 = var3.arrow;
            var17 = var3.contentHeight;
            var2 = var3.deprecatedFormRow;
            var6 = undefined;
            if(!(var2 === var6)) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var2 = false;
case 9:
            var18 = var3.disabled;
            var22 = var3.end;
            var15 = var3.guildId;
            var13 = var3.leading;
            var11 = var3.onPress;
            var9 = var3.trailing;
            var4 = var3.userId;
            var _closure2_slot0 = var4;
            var10 = var3.subLabel;
            var21 = var3.start;
            var8 = var3.accessibilityRole;
            var7 = var3.accessibilityState;
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 10;
            var3 = var5[var3];
            var5 = var4.bind(var6)(var3);
            var4 = var5.useStateFromStores;
            var14 = _closure1_slot4;
            var3 = new Array(1);
            var3[0] = var14;
            var1 = function() {
                var3 = _closure1_slot4;
                var2 = var3.getUser;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var16 = var4.bind(var5)(var3, var1);
            var14 = null;
            var3 = var14 == var16;
            var1 = null;
            if(var3) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var5 = _closure1_slot5;
            var4 = _closure1_slot0;
            var20 = _closure1_slot2;
            if(var2) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var2 = 12;
            var2 = var20[var2];
            var2 = var4.bind(var6)(var2);
            var3 = var2.TableRow;
            var2 = {};
            var2['accessibilityLabel'] = var19;
            var2['arrow'] = var23;
            var2['disabled'] = var18;
            var2['end'] = var22;
            var22 = var13;
            if(!(var14 == var13)) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var25 = _closure1_slot5;
            var27 = _closure1_slot0;
            var28 = _closure1_slot2;
            var26 = 9;
            var23 = var28[var26];
            var23 = var27.bind(var6)(var23);
            var24 = var23.Avatar;
            var23 = {};
            var29 = var16.getAvatarSource;
            var29 = var29.bind(var16)(var15);
            var23['source'] = var29;
            var26 = var28[var26];
            var26 = var27.bind(var6)(var26);
            var26 = var26.AvatarSizes;
            var26 = var26.SMALL;
            var23['size'] = var26;
            var22 = var25.bind(var6)(var24, var23);
case 15:
            var2['icon'] = var22;
            var24 = _closure1_slot5;
            var23 = _closure1_slot8;
            var22 = {};
            var22['contentHeight'] = var17;
            var22['user'] = var16;
            var22['guildId'] = var15;
            var22 = var24.bind(var6)(var23, var22);
            var2['label'] = var22;
            var2['onPress'] = var11;
            var2['start'] = var21;
            var2['subLabel'] = var10;
            var2['trailing'] = var9;
            var2['accessibilityRole'] = var8;
            var2['accessibilityState'] = var7;
            var2 = var5.bind(var6)(var3, var2);
            _fun0002_ip = 17; continue _fun0002;
case 13:
            var3 = 11;
            var3 = var20[var3];
            var3 = var4.bind(var6)(var3);
            var4 = var3.FormRow;
            var3 = {};
            var3['accessibilityLabel'] = var19;
            var3['disabled'] = var18;
            if(!(var14 == var13)) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var19 = _closure1_slot5;
            var21 = _closure1_slot0;
            var22 = _closure1_slot2;
            var20 = 9;
            var14 = var22[var20];
            var14 = var21.bind(var6)(var14);
            var18 = var14.Avatar;
            var14 = {};
            var23 = var16.getAvatarSource;
            var23 = var23.bind(var16)(var15);
            var14['source'] = var23;
            var20 = var22[var20];
            var20 = var21.bind(var6)(var20);
            var20 = var20.AvatarSizes;
            var20 = var20.SMALL;
            var14['size'] = var20;
            var13 = var19.bind(var6)(var18, var14);
case 18:
            var3['leading'] = var13;
            var14 = _closure1_slot5;
            var13 = _closure1_slot8;
            var12 = {};
            var12['contentHeight'] = var17;
            var12['user'] = var16;
            var12['guildId'] = var15;
            var12 = var14.bind(var6)(var13, var12);
            var3['label'] = var12;
            var3['onPress'] = var11;
            var3['subLabel'] = var10;
            var3['trailing'] = var9;
            var3['accessibilityRole'] = var8;
            var3['accessibilityState'] = var7;
            var2 = var5.bind(var6)(var4, var3);
case 17:
            var1 = var2;
case 11:
            return var1;
        }
    };
    var4 = var5.bind(var8)(var4);
    var5 = 13;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guild_settings/native/DetailedGuildIdentityUserRow.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['DetailedGuildIdentityUser'] = var2;
    return var1;
})();