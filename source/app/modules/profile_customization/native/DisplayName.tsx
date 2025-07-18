// app/modules/profile_customization/native/DisplayName.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var11 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = function getAccessibilityLabel(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var1 = var3.bot;
            var7 = '';
            var6 = var7;
            if(!var1) { _fun0001_ip = 105; continue _fun0001 }
 19:
            var1 = var3.isSystemUser;
            var4 = var1.bind(var3)();
            var9 = _closure1_slot1;
            var2 = _closure1_slot2;
            var8 = 5;
            var2 = var2[var8];
            var5 = undefined;
            var2 = var9.bind(var5)(var2);
            var2 = var2.Types;
            if(var4) { _fun0001_ip = 71; continue _fun0001 }
 63:
            var4 = var2.BOT;
            _fun0001_ip = 77; continue _fun0001;
 71:
            var4 = var2.SYSTEM_DM;
 77:
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var8];
            var2 = var2.bind(var5)(var1);
            var1 = var2.getBotLabel;
            var6 = var1.bind(var2)(var4);
 105:
            var4 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 6;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var4.bind(var1)(var2);
            var1 = var2.getUserTag;
            var10 = var1.bind(var2)(var3);
            var1 = global;
            var1 = var1.HermesInternal;
            var4 = var1.concat;
            var14 = arg2;
            var13 = ', ';
            var11 = ' ';
            var15 = var7;
            var12 = var6;
            var1 = var15[var4](var14, var13, var12, var11, var10, var9);
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
    var12 = 0;
    var7 = var6[var12];
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
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
    var10 = 'relative';
    var9 = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center', 'flexWrap': 'wrap', 'position': 'relative'};
    var4['usernameContainer'] = var9;
    var9 = {};
    var13 = 6;
    var9['marginRight'] = var13;
    var4['username'] = var9;
    var9 = {};
    var9['marginLeft'] = var12;
    var4['botTag'] = var9;
    var9 = {'position': 'absolute', 'left': 0, 'top': 0};
    var4['subAvatar'] = var9;
    var9 = {};
    var9['position'] = var10;
    var4['subNameContainer'] = var9;
    var9 = {'flex': 1, 'flexDirection': 'row', 'alignItems': 'center', 'marginTop': 8};
    var4['AKAContainer'] = var9;
    var9 = {};
    var10 = 12;
    var9['fontSize'] = var10;
    var10 = 4;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.unsafe_rawColors;
    var10 = var10.RED_400;
    var9['color'] = var10;
    var4['errorText'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot6 = var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/profile_customization/native/DisplayName.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function DisplayName(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var14 = var2.user;
            var21 = var2.channelNickname;
            var11 = var2.guildId;
            var1 = var2.showGuildAvatar;
            var6 = var2.onPress;
            var5 = var2.accessibilityHint;
            var15 = var2.canShowNicknames;
            var18 = var2.renderRightArrow;
            var27 = var2.error;
            var23 = var2.lineClamp;
            var4 = undefined;
            if(!(var23 === var4)) { _fun0002_ip = 68; continue _fun0002 }
 65:
            var23 = 2;
 68:
            var17 = var2.textVariant;
            if(!(var17 === var4)) { _fun0002_ip = 84; continue _fun0002 }
 78:
            var17 = 'heading-xl/extrabold';
 84:
            var16 = var2.hideSubname;
            var2 = _closure1_slot6;
            var13 = var2.bind(var4)();
            var2 = var14.hasAvatarForGuild;
            var19 = var2.bind(var14)(var11);
            if(var19) { _fun0002_ip = 118; continue _fun0002 }
 115:
            var19 = var1;
 118:
            var22 = '';
            var24 = var22;
            if(!var19) { _fun0002_ip = 146; continue _fun0002 }
 128:
            var3 = '\xa0';
            var2 = var3.repeat;
            var1 = 9;
            var24 = var2.bind(var3)(var1);
 146:
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var28 = 5;
            var1 = var1[var28];
            var1 = var2.bind(var4)(var1);
            var1 = var1.Types;
            var26 = var1.BOT;
            var1 = var14.isSystemUser;
            var1 = var1.bind(var14)();
            if(!var1) { _fun0002_ip = 220; continue _fun0002 }
 191:
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var1 = var1[var28];
            var1 = var2.bind(var4)(var1);
            var1 = var1.Types;
            var26 = var1.SYSTEM_DM;
 220:
            var3 = _closure1_slot4;
            var12 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 7;
            var1 = var9[var1];
            var1 = var12.bind(var4)(var1);
            var2 = var1.PressableOpacity;
            var1 = {};
            var7 = 'header';
            var1['accessibilityRole'] = var7;
            var1['onPress'] = var6;
            var6 = _closure1_slot7;
            var6 = var6.bind(var4)(var14, var21);
            var1['accessibilityLabel'] = var6;
            var1['accessibilityHint'] = var5;
            var7 = _closure1_slot5;
            var6 = _closure1_slot3;
            var5 = {};
            var8 = {};
            var20 = var13.usernameContainer;
            var8['style'] = var20;
            var20 = 8;
            var9 = var9[var20];
            var9 = var12.bind(var4)(var9);
            var12 = var9.Text;
            var9 = {};
            var25 = var13.username;
            var9['style'] = var25;
            var9['lineClamp'] = var23;
            var9['variant'] = var17;
            var17 = 'header-primary';
            var9['color'] = var17;
            var17 = new Array(2);
            var17[0] = var21;
            if(!var18) { _fun0002_ip = 411; continue _fun0002 }
 363:
            var29 = _closure1_slot4;
            var31 = _closure1_slot1;
            var32 = _closure1_slot2;
            var21 = 9;
            var21 = var32[var21];
            var25 = var31.bind(var4)(var21);
            var21 = {};
            var30 = 10;
            var30 = var32[var30];
            var30 = var31.bind(var4)(var30);
            var21['source'] = var30;
            var18 = var29.bind(var4)(var25, var21);
 411:
            var17[1] = var18;
            var9['children'] = var17;
            var12 = var7.bind(var4)(var12, var9);
            var9 = new Array(2);
            var9[0] = var12;
            var18 = var14.bot;
            var12 = null;
            var17 = null;
            if(!var18) { _fun0002_ip = 504; continue _fun0002 }
 446:
            var25 = _closure1_slot4;
            var21 = _closure1_slot1;
            var18 = _closure1_slot2;
            var18 = var18[var28];
            var21 = var21.bind(var4)(var18);
            var18 = {};
            var28 = var13.botTag;
            var18['style'] = var28;
            var18['type'] = var26;
            var26 = var14.isVerifiedBot;
            var26 = var26.bind(var14)();
            var18['verified'] = var26;
            var17 = var25.bind(var4)(var21, var18);
 504:
            var9[1] = var17;
            var8['children'] = var9;
            var9 = var7.bind(var4)(var6, var8);
            var8 = new Array(3);
            var8[0] = var9;
            var9 = null;
            if(var16) { _fun0002_ip = 841; continue _fun0002 }
 534:
            var18 = _closure1_slot5;
            var17 = _closure1_slot3;
            var16 = {};
            var21 = var13.subNameContainer;
            var16['style'] = var21;
            var21 = null;
            if(!var19) { _fun0002_ip = 645; continue _fun0002 }
 559:
            var26 = _closure1_slot4;
            var25 = _closure1_slot1;
            var30 = _closure1_slot2;
            var28 = 11;
            var19 = var30[var28];
            var25 = var25.bind(var4)(var19);
            var19 = {};
            var29 = var13.subAvatar;
            var19['style'] = var29;
            var29 = _closure1_slot0;
            var28 = var30[var28];
            var28 = var29.bind(var4)(var28);
            var28 = var28.AvatarSizes;
            var28 = var28.SIZE_16;
            var19['size'] = var28;
            var19['user'] = var14;
            var19['guildId'] = var4;
            var28 = true;
            var19['animate'] = var28;
            var21 = var26.bind(var4)(var25, var19);
 645:
            var19 = new Array(3);
            var19[0] = var21;
            var25 = var12 != var27;
            var21 = null;
            if(!var25) { _fun0002_ip = 728; continue _fun0002 }
 662:
            var21 = null;
            if(!(var22 !== var27)) { _fun0002_ip = 728; continue _fun0002 }
 668:
            var26 = _closure1_slot4;
            var25 = _closure1_slot0;
            var22 = _closure1_slot2;
            var22 = var22[var20];
            var22 = var25.bind(var4)(var22);
            var25 = var22.Text;
            var22 = {'variant': 'text-xs/normal', 'color': 'status-danger'};
            var28 = var13.errorText;
            var22['style'] = var28;
            var22['children'] = var27;
            var21 = var26.bind(var4)(var25, var22);
 728:
            var19[1] = var21;
            var22 = _closure1_slot5;
            var21 = _closure1_slot0;
            var26 = _closure1_slot2;
            var20 = var26[var20];
            var20 = var21.bind(var4)(var20);
            var21 = var20.Text;
            var20 = {'lineClamp': null, 'variant': 'text-xs/normal', 'color': 'header-primary'};
            var20['lineClamp'] = var23;
            var23 = new Array(2);
            var23[0] = var24;
            var25 = _closure1_slot1;
            var24 = 6;
            var24 = var26[var24];
            var25 = var25.bind(var4)(var24);
            var24 = var25.getUserTag;
            var24 = var24.bind(var25)(var14);
            var23[1] = var24;
            var20['children'] = var23;
            var20 = var22.bind(var4)(var21, var20);
            var19[2] = var20;
            var16['children'] = var19;
            var9 = var18.bind(var4)(var17, var16);
 841:
            var8[1] = var9;
            var9 = null;
            if(!var15) { _fun0002_ip = 914; continue _fun0002 }
 850:
            var11 = var12 == var11;
            var9 = null;
            if(!var11) { _fun0002_ip = 914; continue _fun0002 }
 859:
            var11 = var12 != var14;
            var9 = null;
            if(!var11) { _fun0002_ip = 914; continue _fun0002 }
 868:
            var12 = _closure1_slot4;
            var11 = _closure1_slot1;
            var15 = _closure1_slot2;
            var10 = 12;
            var10 = var15[var10];
            var11 = var11.bind(var4)(var10);
            var10 = {};
            var10['user'] = var14;
            var13 = var13.AKAContainer;
            var10['style'] = var13;
            var9 = var12.bind(var4)(var11, var10);
 914:
            var8[2] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();