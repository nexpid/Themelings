// app/modules/profile_customization/native/DefaultName.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = function getAccessibilityLabel(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var1 = var3.bot;
            var5 = '';
            var4 = var5;
            if(!var1) { _fun0001_ip = 105; continue _fun0001 }
 19:
            var1 = var3.isSystemUser;
            var6 = var1.bind(var3)();
            var9 = _closure1_slot1;
            var2 = _closure1_slot2;
            var8 = 4;
            var2 = var2[var8];
            var7 = undefined;
            var2 = var9.bind(var7)(var2);
            var2 = var2.Types;
            if(var6) { _fun0001_ip = 71; continue _fun0001 }
 63:
            var6 = var2.BOT;
            _fun0001_ip = 77; continue _fun0001;
 71:
            var6 = var2.SYSTEM_DM;
 77:
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var8];
            var2 = var2.bind(var7)(var1);
            var1 = var2.getBotLabel;
            var4 = var1.bind(var2)(var6);
 105:
            var6 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 5;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var6.bind(var1)(var2);
            var1 = var2.getUserTag;
            var3 = var1.bind(var2)(var3);
            var1 = global;
            var1 = var1.HermesInternal;
            var2 = var1.concat;
            var1 = ', ';
            var1 = var2.bind(var5)(var3, var1, var4);
            return var1;
        }
    };
    var _closure1_slot7 = var1;
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
    var10 = 1;
    var4 = var6[var10];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot4 = var7;
    var4 = var4.jsxs;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var9['flex'] = var10;
    var4['flex'] = var9;
    var9 = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center', 'flexWrap': 'wrap', 'position': 'relative'};
    var4['defaultNameContainer'] = var9;
    var9 = {'flexDirection': 'row', 'flexWrap': 'wrap', 'alignItems': 'flex-start'};
    var4['usernameContainer'] = var9;
    var9 = {};
    var10 = 6;
    var9['marginRight'] = var10;
    var4['username'] = var9;
    var9 = {};
    var10 = 8;
    var9['marginLeft'] = var10;
    var4['botTag'] = var9;
    var9 = {'flex': 1, 'flexDirection': 'row', 'alignItems': 'center', 'marginTop': 4};
    var4['AKAContainer'] = var9;
    var9 = {'position': 'absolute', 'top': 2, 'left': 0};
    var4['defaultAvatar'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot6 = var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/profile_customization/native/DefaultName.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function DefaultName(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var5 = arg1;
            var11 = var5.user;
            var8 = var5.guildId;
            var12 = var5.canShowNicknames;
            var2 = var5.showGuildAvatar;
            var14 = var5.onPress;
            var25 = var5.renderRightArrow;
            var9 = var5.accessibilityHint;
            var3 = var5.overrideDiscriminator;
            var1 = var5.forcePomelo;
            var4 = undefined;
            if(!(var1 === var4)) { _fun0002_ip = 62; continue _fun0002 }
 60:
            var1 = false;
 62:
            var22 = var5.lineClamp;
            var27 = var5.textVariant;
            if(!(var27 === var4)) { _fun0002_ip = 84; continue _fun0002 }
 78:
            var27 = 'heading-xl/extrabold';
 84:
            var21 = var5.hideSubname;
            var5 = _closure1_slot6;
            var10 = var5.bind(var4)();
            var5 = var11.hasAvatarForGuild;
            var13 = var5.bind(var11)(var8);
            if(var13) { _fun0002_ip = 118; continue _fun0002 }
 115:
            var13 = var2;
 118:
            var23 = '';
            if(!var13) { _fun0002_ip = 143; continue _fun0002 }
 125:
            var6 = '\xa0';
            var5 = var6.repeat;
            var2 = 5;
            var23 = var5.bind(var6)(var2);
 143:
            var2 = var11.hasUniqueUsername;
            var26 = var2.bind(var11)();
            if(var26) { _fun0002_ip = 159; continue _fun0002 }
 156:
            var26 = var1;
 159:
            if(var26) { _fun0002_ip = 196; continue _fun0002 }
 162:
            var1 = null;
            if(!(var1 == var3)) { _fun0002_ip = 174; continue _fun0002 }
 168:
            var3 = var11.discriminator;
 174:
            var1 = global;
            var1 = var1.HermesInternal;
            var2 = var1.concat;
            var1 = '#';
            var26 = var2.bind(var1)(var3);
 196:
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var19 = 4;
            var1 = var1[var19];
            var1 = var2.bind(var4)(var1);
            var1 = var1.Types;
            var18 = var1.BOT;
            var1 = var11.isSystemUser;
            var1 = var1.bind(var11)();
            if(!var1) { _fun0002_ip = 270; continue _fun0002 }
 241:
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var1 = var1[var19];
            var1 = var2.bind(var4)(var1);
            var1 = var1.Types;
            var18 = var1.SYSTEM_DM;
 270:
            var3 = _closure1_slot5;
            var2 = _closure1_slot3;
            var1 = {};
            var5 = var10.flex;
            var1['style'] = var5;
            var6 = _closure1_slot0;
            var15 = _closure1_slot2;
            var5 = 6;
            var5 = var15[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.PressableOpacity;
            var5 = {};
            var15 = var10.defaultNameContainer;
            var5['style'] = var15;
            var5['onPress'] = var14;
            var14 = 'header';
            var5['accessibilityRole'] = var14;
            var14 = _closure1_slot7;
            var14 = var14.bind(var4)(var11);
            var5['accessibilityLabel'] = var14;
            var5['accessibilityHint'] = var9;
            var9 = null;
            var14 = null;
            if(!var13) { _fun0002_ip = 450; continue _fun0002 }
 364:
            var16 = _closure1_slot4;
            var15 = _closure1_slot1;
            var24 = _closure1_slot2;
            var17 = 7;
            var13 = var24[var17];
            var15 = var15.bind(var4)(var13);
            var13 = {};
            var20 = _closure1_slot0;
            var17 = var24[var17];
            var17 = var20.bind(var4)(var17);
            var17 = var17.AvatarSizes;
            var17 = var17.XSMALL;
            var13['size'] = var17;
            var13['user'] = var11;
            var13['guildId'] = var4;
            var17 = true;
            var13['animate'] = var17;
            var17 = var10.defaultAvatar;
            var13['style'] = var17;
            var14 = var16.bind(var4)(var15, var13);
 450:
            var13 = new Array(3);
            var13[0] = var14;
            var16 = _closure1_slot5;
            var15 = _closure1_slot3;
            var14 = {};
            var17 = var10.usernameContainer;
            var14['style'] = var17;
            var20 = _closure1_slot0;
            var17 = _closure1_slot2;
            var24 = 8;
            var17 = var17[var24];
            var17 = var20.bind(var4)(var17);
            var20 = var17.Text;
            var17 = {};
            var28 = var10.username;
            var17['style'] = var28;
            var17['variant'] = var27;
            var27 = 'header-primary';
            var17['color'] = var27;
            var17['lineClamp'] = var22;
            var22 = new Array(2);
            var22[0] = var23;
            var23 = var11.username;
            var22[1] = var23;
            var17['children'] = var22;
            var20 = var16.bind(var4)(var20, var17);
            var17 = new Array(2);
            var17[0] = var20;
            var20 = null;
            if(var21) { _fun0002_ip = 686; continue _fun0002 }
 573:
            var23 = _closure1_slot5;
            var22 = _closure1_slot0;
            var21 = _closure1_slot2;
            var21 = var21[var24];
            var21 = var22.bind(var4)(var21);
            var22 = var21.Text;
            var21 = {'variant': 'heading-xl/medium', 'color': 'header-secondary'};
            var24 = new Array(2);
            var24[0] = var26;
            if(!var25) { _fun0002_ip = 672; continue _fun0002 }
 624:
            var28 = _closure1_slot4;
            var30 = _closure1_slot1;
            var31 = _closure1_slot2;
            var26 = 9;
            var26 = var31[var26];
            var27 = var30.bind(var4)(var26);
            var26 = {};
            var29 = 10;
            var29 = var31[var29];
            var29 = var30.bind(var4)(var29);
            var26['source'] = var29;
            var25 = var28.bind(var4)(var27, var26);
 672:
            var24[1] = var25;
            var21['children'] = var24;
            var20 = var23.bind(var4)(var22, var21);
 686:
            var17[1] = var20;
            var14['children'] = var17;
            var14 = var16.bind(var4)(var15, var14);
            var13[1] = var14;
            var15 = var11.bot;
            var14 = null;
            if(!var15) { _fun0002_ip = 773; continue _fun0002 }
 715:
            var17 = _closure1_slot4;
            var16 = _closure1_slot1;
            var15 = _closure1_slot2;
            var15 = var15[var19];
            var16 = var16.bind(var4)(var15);
            var15 = {};
            var19 = var10.botTag;
            var15['style'] = var19;
            var15['type'] = var18;
            var18 = var11.isVerifiedBot;
            var18 = var18.bind(var11)();
            var15['verified'] = var18;
            var14 = var17.bind(var4)(var16, var15);
 773:
            var13[2] = var14;
            var5['children'] = var13;
            var6 = var3.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var6 = null;
            if(!var12) { _fun0002_ip = 864; continue _fun0002 }
 800:
            var8 = var9 == var8;
            var6 = null;
            if(!var8) { _fun0002_ip = 864; continue _fun0002 }
 809:
            var8 = var9 != var11;
            var6 = null;
            if(!var8) { _fun0002_ip = 864; continue _fun0002 }
 818:
            var9 = _closure1_slot4;
            var8 = _closure1_slot1;
            var12 = _closure1_slot2;
            var7 = 11;
            var7 = var12[var7];
            var8 = var8.bind(var4)(var7);
            var7 = {};
            var7['user'] = var11;
            var10 = var10.AKAContainer;
            var7['style'] = var10;
            var6 = var9.bind(var4)(var8, var7);
 864:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();