// app/components_native/chat/ChatBeginningRow.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = function ChatBeginningRowIcon(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var1 = var2.isPrivate;
            var3 = var2.isThread;
            var4 = var2.isNSFW;
            var9 = var2.isForumPost;
            var2 = _closure1_slot45;
            var4 = undefined;
            var5 = var2.bind(var4)();
            var2 = {};
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            if(var9) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            if(var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            if(var1) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var1 = 32;
            var1 = var7[var1];
            var1 = var6.bind(var4)(var1);
            var1 = var1.TextIcon;
            var2['IconComponent'] = var1;
            var1 = 29;
            var1 = var7[var1];
            var1 = var6.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.GK18KJ;
            var2['label'] = var1;
            var1 = var2;
            _fun0001_ip = 8; continue _fun0001;
case 6:
            var3 = 31;
            var3 = var7[var3];
            var3 = var6.bind(var4)(var3);
            var3 = var3.TextLockIcon;
            var2['IconComponent'] = var3;
            var3 = 29;
            var3 = var7[var3];
            var3 = var6.bind(var4)(var3);
            var3 = var3.t;
            var3 = var3.GK18KJ;
            var2['label'] = var3;
            var1 = var2;
case 8:
            _fun0001_ip = 9; continue _fun0001;
case 4:
            var3 = 30;
            var3 = var7[var3];
            var3 = var6.bind(var4)(var3);
            var3 = var3.ThreadIcon;
            var2['IconComponent'] = var3;
            var3 = 29;
            var3 = var7[var3];
            var3 = var6.bind(var4)(var3);
            var3 = var3.t;
            var3 = var3["7Xm5QI"];
            var2['label'] = var3;
            var1 = var2;
case 9:
            _fun0001_ip = 10; continue _fun0001;
case 2:
            var3 = 28;
            var3 = var7[var3];
            var3 = var6.bind(var4)(var3);
            var3 = var3.ChatIcon;
            var2['IconComponent'] = var3;
            var3 = 29;
            var3 = var7[var3];
            var3 = var6.bind(var4)(var3);
            var3 = var3.t;
            var3 = var3.Y4REmB;
            var2['label'] = var3;
            var1 = var2;
case 10:
            var7 = var1.IconComponent;
            var10 = var1.label;
            var3 = _closure1_slot42;
            var2 = _closure1_slot7;
            var1 = {};
            var5 = var5.iconContainer;
            var1['style'] = var5;
            var6 = _closure1_slot42;
            var5 = {'size': 'lg', 'color': 'icon-strong'};
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var8 = 29;
            var8 = var11[var8];
            var8 = var9.bind(var4)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var8 = var8.bind(var9)(var10);
            var5['accessibilityLabel'] = var8;
            var5 = var6.bind(var4)(var7, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot47 = var1;
    var1 = function ChatBeginningRowHeader(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var16 = var1.title;
            var10 = var1.subtitle;
            var15 = var1.isPrivate;
            var12 = var1.isThread;
            var17 = var1.isNSFW;
            var20 = var1.isForumPost;
            var2 = var1.subtitleLink;
            var _closure2_slot0 = var2;
            var1 = _closure1_slot45;
            var4 = undefined;
            var11 = var1.bind(var4)();
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 33;
            var1 = var5[var1];
            var3 = var3.bind(var4)(var1);
            var1 = var3.useIsScreenReaderEnabled;
            var1 = var1.bind(var3)();
            var6 = null;
            var14 = var6 != var2;
            if(!var14) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var14 = var1;
case 11:
            var3 = _closure1_slot44;
            var2 = _closure1_slot43;
            var1 = {};
            var9 = _closure1_slot42;
            var8 = _closure1_slot47;
            var5 = {};
            var5['isNSFW'] = var17;
            var5['isPrivate'] = var15;
            var5['isThread'] = var12;
            var5['isForumPost'] = var20;
            var8 = var9.bind(var4)(var8, var5);
            var5 = new Array(3);
            var5[0] = var8;
            var15 = _closure1_slot42;
            var9 = _closure1_slot0;
            var8 = _closure1_slot2;
            var12 = 34;
            var8 = var8[var12];
            var8 = var9.bind(var4)(var8);
            var9 = var8.Text;
            var8 = {'style': null, 'accessibilityRole': 'header', 'variant': 'heading-xl/extrabold', 'color': 'mobile-text-heading-primary'};
            var18 = var11.title;
            var17 = new Array(2);
            var17[0] = var18;
            var18 = {};
            var19 = 8;
            if(!var20) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var19 = 0;
case 13:
            var18['marginBottom'] = var19;
            var17[1] = var18;
            var8['style'] = var17;
            var8['children'] = var16;
            var8 = var15.bind(var4)(var9, var8);
            var5[1] = var8;
            var6 = var6 != var10;
            if(!var6) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var9 = _closure1_slot42;
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var12];
            var7 = var8.bind(var4)(var7);
            var8 = var7.Text;
            var7 = {};
            var12 = undefined;
            if(!var14) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var12 = 'link';
case 17:
            var7['accessibilityRole'] = var12;
            var12 = undefined;
            if(!var14) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var12 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 35;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.openURL;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
case 19:
            var7['onPress'] = var12;
            var11 = var11.subtitle;
            var7['style'] = var11;
            var11 = 'text-md/medium';
            var7['variant'] = var11;
            var11 = 'text-default';
            var7['color'] = var11;
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 15:
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot48 = var1;
    var1 = function LinkManageButtons(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var5 = var1.canManageRoles;
            var6 = var1.canEdit;
            var7 = var1.isPrivate;
            var2 = var1.channel;
            var _closure2_slot0 = var2;
            var8 = var1.theme;
            var1 = _closure1_slot45;
            var4 = undefined;
            var14 = var1.bind(var4)();
            var2 = _closure1_slot0;
            var12 = _closure1_slot2;
            var1 = 36;
            var1 = var12[var1];
            var3 = var2.bind(var4)(var1);
            var2 = var3.useToken;
            var9 = _closure1_slot1;
            var1 = 27;
            var1 = var12[var1];
            var1 = var9.bind(var4)(var1);
            var1 = var1.colors;
            var1 = var1.TEXT_LINK;
            var15 = var2.bind(var3)(var1, var8);
            var3 = _closure1_slot44;
            var2 = _closure1_slot7;
            var1 = {};
            var8 = var14.ctaContainer;
            var1['style'] = var8;
            if(!var7) { _fun0003_ip = 21; continue _fun0003 }
case 22:
            var7 = var5;
case 21:
            if(!var7) { _fun0003_ip = 23; continue _fun0003 }
case 24:
            var9 = _closure1_slot44;
            var21 = _closure1_slot0;
            var22 = _closure1_slot2;
            var5 = 37;
            var5 = var22[var5];
            var5 = var21.bind(var4)(var5);
            var8 = var5.PressableOpacity;
            var5 = {};
            var12 = 'button';
            var5['accessibilityRole'] = var12;
            var12 = function onPress() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 38;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.openAddMembersActionSheet;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var5['onPress'] = var12;
            var13 = var14.ctaButton;
            var12 = new Array(2);
            var12[0] = var13;
            var13 = var14.subtitle;
            var12[1] = var13;
            var5['style'] = var12;
            var16 = _closure1_slot42;
            var17 = 39;
            var12 = var22[var17];
            var12 = var21.bind(var4)(var12);
            var13 = var12.Icon;
            var12 = {};
            var19 = _closure1_slot1;
            var18 = 40;
            var18 = var22[var18];
            var18 = var19.bind(var4)(var18);
            var12['source'] = var18;
            var17 = var22[var17];
            var17 = var21.bind(var4)(var17);
            var17 = var17.IconSizes;
            var17 = var17.REFRESH_SMALL_16;
            var12['size'] = var17;
            var12['color'] = var15;
            var13 = var16.bind(var4)(var13, var12);
            var12 = new Array(2);
            var12[0] = var13;
            var17 = _closure1_slot42;
            var13 = 34;
            var13 = var22[var13];
            var13 = var21.bind(var4)(var13);
            var16 = var13.Text;
            var13 = {'style': null, 'variant': 'text-sm/medium', 'color': 'text-link'};
            var19 = var14.ctaLabel;
            var18 = new Array(2);
            var18[0] = var19;
            var19 = var14.ctaAddRoles;
            var18[1] = var19;
            var13['style'] = var18;
            var18 = 29;
            var19 = var22[var18];
            var19 = var21.bind(var4)(var19);
            var20 = var19.intl;
            var19 = var20.string;
            var18 = var22[var18];
            var18 = var21.bind(var4)(var18);
            var18 = var18.t;
            var18 = var18.dMJ3Y6;
            var18 = var19.bind(var20)(var18);
            var13['children'] = var18;
            var13 = var17.bind(var4)(var16, var13);
            var12[1] = var13;
            var5['children'] = var12;
            var7 = var9.bind(var4)(var8, var5);
case 23:
            var5 = new Array(2);
            var5[0] = var7;
            if(!var6) { _fun0003_ip = 25; continue _fun0003 }
case 26:
            var9 = _closure1_slot44;
            var17 = _closure1_slot0;
            var18 = _closure1_slot2;
            var7 = 37;
            var7 = var18[var7];
            var7 = var17.bind(var4)(var7);
            var8 = var7.PressableOpacity;
            var7 = {};
            var12 = 'button';
            var7['accessibilityRole'] = var12;
            var10 = function onPress() {
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 41;
                var6 = var4[var2];
                var1 = undefined;
                var7 = var3.bind(var1)(var6);
                var6 = var7.setSection;
                var5 = _closure1_slot28;
                var5 = var5.OVERVIEW;
                var5 = var6.bind(var7)(var5);
                var2 = var4[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.open;
                var2 = _closure2_slot0;
                var2 = var2.id;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var7['onPress'] = var10;
            var12 = var14.ctaButton;
            var10 = new Array(2);
            var10[0] = var12;
            var12 = var14.subtitle;
            var10[1] = var12;
            var7['style'] = var10;
            var13 = _closure1_slot42;
            var10 = 42;
            var10 = var18[var10];
            var10 = var17.bind(var4)(var10);
            var12 = var10.PencilIcon;
            var10 = {};
            var16 = 'xs';
            var10['size'] = var16;
            var10['color'] = var15;
            var12 = var13.bind(var4)(var12, var10);
            var10 = new Array(2);
            var10[0] = var12;
            var13 = _closure1_slot42;
            var11 = 34;
            var11 = var18[var11];
            var11 = var17.bind(var4)(var11);
            var12 = var11.Text;
            var11 = {'style': null, 'variant': 'text-sm/medium', 'color': 'text-link'};
            var15 = var14.ctaLabel;
            var14 = new Array(1);
            var14[0] = var15;
            var11['style'] = var14;
            var14 = 29;
            var15 = var18[var14];
            var15 = var17.bind(var4)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var14 = var18[var14];
            var14 = var17.bind(var4)(var14);
            var14 = var14.t;
            var14 = var14.GE1Tlo;
            var14 = var15.bind(var16)(var14);
            var11['children'] = var14;
            var11 = var13.bind(var4)(var12, var11);
            var10[1] = var11;
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 25:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot49 = var1;
    var1 = function ThreadOwner(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var3 = var1.userId;
            var _closure2_slot0 = var3;
            var10 = var1.guildId;
            var _closure2_slot1 = var10;
            var3 = _closure1_slot45;
            var4 = undefined;
            var15 = var3.bind(var4)();
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 43;
            var6 = var7[var3];
            var11 = var5.bind(var4)(var6);
            var9 = var11.useStateFromStores;
            var6 = _closure1_slot24;
            var8 = new Array(1);
            var8[0] = var6;
            var6 = function() {
                var3 = _closure1_slot24;
                var2 = var3.getUser;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var11 = var9.bind(var11)(var8, var6);
            var6 = var7[var3];
            var12 = var5.bind(var4)(var6);
            var9 = var12.useStateFromStores;
            var6 = _closure1_slot19;
            var8 = new Array(1);
            var8[0] = var6;
            var6 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0005_ip = 27; continue _fun0005 }
case 28:
                    var5 = _closure1_slot19;
                    var4 = var5.getMember;
                    var3 = _closure2_slot1;
                    var2 = _closure2_slot0;
                    var1 = var4.bind(var5)(var3, var2);
case 27:
                    return var1;
                }
            };
            var6 = var9.bind(var12)(var8, var6);
            var3 = var7[var3];
            var7 = var5.bind(var4)(var3);
            var5 = var7.useStateFromStores;
            var8 = _closure1_slot8;
            var3 = new Array(1);
            var3[0] = var8;
            var2 = function() {
                var1 = _closure1_slot8;
                var1 = var1.roleStyle;
                return var1;
            };
            var12 = var5.bind(var7)(var3, var2);
            var2 = null;
            var5 = var2 == var6;
            var3 = undefined;
            if(var5) { _fun0004_ip = 29; continue _fun0004 }
case 30:
            var3 = var6.nick;
case 29:
            if(!(var2 == var3)) { _fun0004_ip = 31; continue _fun0004 }
case 32:
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var5 = 44;
            var5 = var8[var5];
            var7 = var7.bind(var4)(var5);
            var5 = var7.getName;
            var3 = var5.bind(var7)(var11);
case 31:
            var7 = var2 != var3;
            var5 = '???';
            if(!var7) { _fun0004_ip = 33; continue _fun0004 }
case 34:
            var5 = var3;
case 33:
            var3 = var2 == var6;
            var7 = undefined;
            if(var3) { _fun0004_ip = 35; continue _fun0004 }
case 36:
            var7 = var6.colorString;
case 35:
            var8 = var2 != var7;
            var3 = null;
            if(!var8) { _fun0004_ip = 37; continue _fun0004 }
case 38:
            var3 = var7;
case 37:
            var8 = var2 == var6;
            var7 = undefined;
            if(var8) { _fun0004_ip = 39; continue _fun0004 }
case 40:
            var7 = var6.colorStrings;
case 39:
            var8 = var2 != var7;
            var6 = null;
            if(!var8) { _fun0004_ip = 41; continue _fun0004 }
case 42:
            var6 = var7;
case 41:
            var9 = _closure1_slot0;
            var13 = _closure1_slot2;
            var7 = 45;
            var8 = var13[var7];
            var14 = var9.bind(var4)(var8);
            var8 = var14.useProcessColorStringsArray;
            var8 = var8.bind(var14)(var6);
            var7 = var13[var7];
            var9 = var9.bind(var4)(var7);
            var7 = var9.useIsRoleStyleAndRoleColorsEligibleForERC;
            var13 = var2 == var11;
            var16 = var6;
            var6 = undefined;
            if(var13) { _fun0004_ip = 43; continue _fun0004 }
case 44:
            var6 = var11.id;
case 43:
            var22 = var9;
            var21 = var10;
            var20 = var6;
            var19 = var12;
            var18 = var8;
            var9 = var22[var7](var21, var20, var19, var18, var17);
            var6 = 'username';
            if(!(var6 !== var12)) { _fun0004_ip = 45; continue _fun0004 }
case 46:
            var10 = _closure1_slot44;
            var7 = _closure1_slot43;
            var6 = {};
            var11 = 'dot';
            var12 = var11 === var12;
            if(!var12) { _fun0004_ip = 47; continue _fun0004 }
case 48:
            var12 = var2 != var3;
case 47:
            if(!var12) { _fun0004_ip = 49; continue _fun0004 }
case 50:
            var14 = _closure1_slot42;
            var13 = _closure1_slot0;
            var17 = _closure1_slot2;
            var11 = 39;
            var11 = var17[var11];
            var11 = var13.bind(var4)(var11);
            var13 = var11.RoleDot;
            var11 = {};
            var11['color'] = var3;
            var11['colors'] = var16;
            var15 = var15.threadCreatorRoleDot;
            var11['containerStyles'] = var15;
            var12 = var14.bind(var4)(var13, var11);
case 49:
            var11 = new Array(2);
            var11[0] = var12;
            var14 = _closure1_slot42;
            var13 = _closure1_slot0;
            var15 = _closure1_slot2;
            var12 = 34;
            var12 = var15[var12];
            var12 = var13.bind(var4)(var12);
            var13 = var12.Text;
            var12 = {'variant': 'text-md/semibold', 'color': 'text-default'};
            var12['children'] = var5;
            var12 = var14.bind(var4)(var13, var12);
            var11[1] = var12;
            var6['children'] = var11;
            var6 = var10.bind(var4)(var7, var6);
            return var6;
case 45:
            var2 = var2 != var3;
            var6 = undefined;
            if(!var2) { _fun0004_ip = 51; continue _fun0004 }
case 52:
            var2 = {};
            var2['color'] = var3;
            var6 = var2;
case 51:
            var3 = _closure1_slot42;
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var1 = 34;
            var1 = var11[var1];
            var1 = var10.bind(var4)(var1);
            var2 = var1.Text;
            var1 = {};
            var7 = 46;
            var7 = var11[var7];
            var10 = var10.bind(var4)(var7);
            var7 = var10.isFabric;
            var7 = var7.bind(var10)();
            var7 = !var7;
            var1['experimental_useNativeText'] = var7;
            var7 = undefined;
            if(!var9) { _fun0004_ip = 53; continue _fun0004 }
case 54:
            var7 = var8;
case 53:
            var1['gradientColors'] = var7;
            var1['style'] = var6;
            var6 = 'text-md/semibold';
            var1['variant'] = var6;
            var6 = 'text-default';
            var1['color'] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot50 = var1;
    var1 = function ChatBeginningRowThread(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg1;
            var12 = var1.channel;
            var _closure2_slot0 = var12;
            var1 = _closure1_slot45;
            var5 = undefined;
            var11 = var1.bind(var5)();
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 47;
            var1 = var3[var1];
            var1 = var2.bind(var5)(var1);
            var15 = var1.bind(var5)(var12);
            var2 = _closure1_slot0;
            var1 = 48;
            var1 = var3[var1];
            var4 = var2.bind(var5)(var1);
            var1 = var4.isPrivateGuildChannel;
            var14 = var1.bind(var4)(var12);
            var1 = 49;
            var1 = var3[var1];
            var4 = var2.bind(var5)(var1);
            var1 = var4.useAppliedTags;
            var18 = var1.bind(var4)(var12);
            var1 = 43;
            var1 = var3[var1];
            var4 = var2.bind(var5)(var1);
            var3 = var4.useStateFromStoresObject;
            var1 = _closure1_slot10;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var3 = _closure1_slot10;
                var2 = var3.getMessage;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var3.bind(var4)(var2, var1);
            var9 = var1.firstMessage;
            var1 = var12.threadMetadata;
            var10 = null;
            var2 = var10 == var1;
            var1 = null;
            if(var2) { _fun0006_ip = 55; continue _fun0006 }
case 56:
            var4 = _closure1_slot44;
            var3 = _closure1_slot43;
            var2 = {};
            var13 = _closure1_slot42;
            var7 = _closure1_slot48;
            var6 = {};
            var16 = var12.isNSFW;
            var16 = var16.bind(var12)();
            var6['isNSFW'] = var16;
            var6['title'] = var15;
            var6['isPrivate'] = var14;
            var14 = true;
            var6['isThread'] = var14;
            var14 = var12.isForumPost;
            var14 = var14.bind(var12)();
            var6['isForumPost'] = var14;
            var7 = var13.bind(var5)(var7, var6);
            var6 = new Array(4);
            var6[0] = var7;
            var7 = var12.isForumPost;
            var13 = var7.bind(var12)();
            var7 = null;
            if(!var13) { _fun0006_ip = 57; continue _fun0006 }
case 58:
            var14 = var18.length;
            var13 = 0;
            var13 = var14 > var13;
            var7 = null;
            if(!var13) { _fun0006_ip = 57; continue _fun0006 }
case 59:
            var15 = _closure1_slot42;
            var14 = _closure1_slot7;
            var13 = {};
            var16 = var11.tagContainer;
            var13['style'] = var16;
            var17 = var18.map;
            var16 = function(arg1) {
                var1 = arg1;
                var5 = _closure1_slot42;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 50;
                var2 = var4[var2];
                var4 = undefined;
                var2 = var3.bind(var4)(var2);
                var3 = var2.AppliedForumTagPill;
                var2 = {};
                var2['tag'] = var1;
                var1 = var1.id;
                var1 = var5.bind(var4)(var3, var2, var1);
                return var1;
            };
            var16 = var17.bind(var18)(var16);
            var13['children'] = var16;
            var7 = var15.bind(var5)(var14, var13);
case 57:
            var6[1] = var7;
            var7 = var12.isForumPost;
            var7 = var7.bind(var12)();
            var7 = !var7;
            if(!var7) { _fun0006_ip = 60; continue _fun0006 }
case 61:
            var15 = _closure1_slot42;
            var17 = _closure1_slot0;
            var21 = _closure1_slot2;
            var13 = 34;
            var13 = var21[var13];
            var13 = var17.bind(var5)(var13);
            var14 = var13.Text;
            var13 = {'style': null, 'variant': 'text-md/medium', 'color': 'text-default'};
            var16 = var11.threadDetails;
            var13['style'] = var16;
            var16 = 29;
            var18 = var21[var16];
            var18 = var17.bind(var5)(var18);
            var19 = var18.intl;
            var18 = var19.format;
            var16 = var21[var16];
            var16 = var17.bind(var5)(var16);
            var16 = var16.t;
            var17 = var16.imPXd5;
            var16 = {};
            var20 = function usernameHook(arg1, arg2) {
                var5 = _closure1_slot42;
                var4 = _closure1_slot50;
                var3 = {};
                var1 = _closure2_slot0;
                var2 = var1.ownerId;
                var3['userId'] = var2;
                var1 = var1.guild_id;
                var3['guildId'] = var1;
                var2 = undefined;
                var1 = arg2;
                var1 = var5.bind(var2)(var4, var3, var1);
                return var1;
            };
            var16['usernameHook'] = var20;
            var16 = var18.bind(var19)(var17, var16);
            var13['children'] = var16;
            var7 = var15.bind(var5)(var14, var13);
case 60:
            var6[2] = var7;
            var7 = var12.isForumPost;
            var12 = var7.bind(var12)();
            var7 = null;
            if(!var12) { _fun0006_ip = 62; continue _fun0006 }
case 63:
            var9 = var10 == var9;
            var7 = null;
            if(!var9) { _fun0006_ip = 62; continue _fun0006 }
case 64:
            var10 = _closure1_slot42;
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var8 = 34;
            var8 = var15[var8];
            var8 = var14.bind(var5)(var8);
            var9 = var8.Text;
            var8 = {'style': null, 'variant': 'text-md/medium', 'color': 'text-default'};
            var11 = var11.threadDetails;
            var8['style'] = var11;
            var11 = 29;
            var12 = var15[var11];
            var12 = var14.bind(var5)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var11 = var15[var11];
            var11 = var14.bind(var5)(var11);
            var11 = var11.t;
            var11 = var11.mE3KJN;
            var11 = var12.bind(var13)(var11);
            var8['children'] = var11;
            var7 = var10.bind(var5)(var9, var8);
case 62:
            var6[3] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 55:
            return var1;
        }
    };
    var _closure1_slot51 = var1;
    var1 = function ChatBeginningRowGuildNonDefaultChannel(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = arg1;
            var10 = var1.guild;
            var11 = var1.channel;
            var _closure2_slot0 = var11;
            var13 = _closure1_slot1;
            var1 = _closure1_slot2;
            var2 = 47;
            var3 = var1[var2];
            var4 = undefined;
            var5 = var13.bind(var4)(var3);
            var3 = true;
            var9 = var5.bind(var4)(var11, var3);
            var2 = var1[var2];
            var3 = var13.bind(var4)(var2);
            var2 = false;
            var19 = var3.bind(var4)(var11, var2);
            var5 = _closure1_slot21;
            var3 = var5.can;
            var2 = _closure1_slot33;
            var2 = var2.MANAGE_CHANNELS;
            var8 = var3.bind(var5)(var2, var11);
            var5 = _closure1_slot21;
            var3 = var5.can;
            var2 = _closure1_slot33;
            var2 = var2.MANAGE_ROLES;
            var15 = var3.bind(var5)(var2, var11);
            var5 = _closure1_slot21;
            var3 = var5.can;
            var2 = _closure1_slot33;
            var2 = var2.READ_MESSAGE_HISTORY;
            var3 = var3.bind(var5)(var2, var11);
            var2 = _closure1_slot0;
            var5 = 48;
            var5 = var1[var5];
            var12 = var2.bind(var4)(var5);
            var5 = var12.isPrivateGuildChannel;
            var12 = var5.bind(var12)(var11);
            var5 = 51;
            var5 = var1[var5];
            var5 = var13.bind(var4)(var5);
            var14 = var5.bind(var4)();
            var17 = 29;
            var5 = var1[var17];
            var5 = var2.bind(var4)(var5);
            var13 = var5.intl;
            var5 = var13.formatToPlainString;
            var1 = var1[var17];
            var1 = var2.bind(var4)(var1);
            var1 = var1.t;
            var2 = var1.q0tgLe;
            var1 = {};
            var1['channelName'] = var9;
            var16 = var5.bind(var13)(var2, var1);
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var5 = var1[var17];
            var5 = var2.bind(var4)(var5);
            var5 = var5.intl;
            if(var12) { _fun0007_ip = 65; continue _fun0007 }
case 66:
            if(var3) { _fun0007_ip = 67; continue _fun0007 }
case 68:
            var18 = var5.format;
            var3 = var1[var17];
            var3 = var2.bind(var4)(var3);
            var3 = var3.t;
            var13 = var3.hPVEQG;
            var3 = {};
            var3['channelName'] = var19;
            var13 = var18.bind(var5)(var13, var3);
            _fun0007_ip = 69; continue _fun0007;
case 67:
            var19 = var5.formatToPlainString;
            var3 = var1[var17];
            var3 = var2.bind(var4)(var3);
            var3 = var3.t;
            var18 = var3.JHKUGB;
            var3 = {};
            var3['channelName'] = var9;
            var13 = var19.bind(var5)(var18, var3);
case 69:
            _fun0007_ip = 70; continue _fun0007;
case 65:
            var3 = var5.format;
            var1 = var1[var17];
            var1 = var2.bind(var4)(var1);
            var1 = var1.t;
            var2 = var1.QuwqjG;
            var1 = {};
            var1['channelName'] = var9;
            var6 = function topicHook() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 52;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.parseTopic;
                var1 = _closure2_slot0;
                var3 = var1.topic;
                var2 = {};
                var1 = var1.id;
                var2['channelId'] = var1;
                var1 = true;
                var1 = var4.bind(var5)(var3, var1, var2);
                return var1;
            };
            var1['topicHook'] = var6;
            var13 = var3.bind(var5)(var2, var1);
case 70:
            var3 = _closure1_slot44;
            var2 = _closure1_slot43;
            var1 = {};
            var9 = _closure1_slot42;
            var6 = _closure1_slot48;
            var5 = {};
            var5['title'] = var16;
            var5['subtitle'] = var13;
            var5['isPrivate'] = var12;
            var6 = var9.bind(var4)(var6, var5);
            var5 = new Array(3);
            var5[0] = var6;
            var13 = _closure1_slot42;
            var9 = _closure1_slot49;
            var6 = {};
            var6['canManageRoles'] = var15;
            var6['canEdit'] = var8;
            var6['isPrivate'] = var12;
            var6['channel'] = var11;
            var6['theme'] = var14;
            var6 = var13.bind(var4)(var9, var6);
            var5[1] = var6;
            var6 = null;
            if(!var12) { _fun0007_ip = 71; continue _fun0007 }
case 72:
            var6 = null;
            if(!var8) { _fun0007_ip = 71; continue _fun0007 }
case 73:
            var9 = _closure1_slot42;
            var8 = _closure1_slot1;
            var12 = _closure1_slot2;
            var7 = 53;
            var7 = var12[var7];
            var8 = var8.bind(var4)(var7);
            var7 = {};
            var7['channel'] = var11;
            var7['guild'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 71:
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot52 = var1;
    var1 = function ChatBeginningRowGuild(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var2 = arg1;
            var7 = var2.guild;
            var _closure2_slot0 = var7;
            var6 = var2.channel;
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 43;
            var3 = var5[var3];
            var5 = undefined;
            var8 = var4.bind(var5)(var3);
            var4 = var8.useStateFromStores;
            var9 = _closure1_slot18;
            var3 = new Array(1);
            var3[0] = var9;
            var1 = function() {
                var3 = _closure1_slot18;
                var2 = var3.getDefaultChannel;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var4.bind(var8)(var3, var1);
            var8 = _closure1_slot21;
            var4 = var8.can;
            var3 = _closure1_slot33;
            var3 = var3.READ_MESSAGE_HISTORY;
            var3 = var4.bind(var8)(var3, var6);
            if(!var3) { _fun0008_ip = 74; continue _fun0008 }
case 75:
            var3 = null;
            var4 = var3 == var1;
            var3 = undefined;
            if(var4) { _fun0008_ip = 76; continue _fun0008 }
case 77:
            var3 = var1.id;
case 76:
            var1 = var6.id;
            if(!(var3 !== var1)) { _fun0008_ip = 78; continue _fun0008 }
case 74:
            var4 = _closure1_slot42;
            var3 = _closure1_slot52;
            var1 = {};
            var1['guild'] = var7;
            var1['channel'] = var6;
            var1 = var4.bind(var5)(var3, var1);
            _fun0008_ip = 79; continue _fun0008;
case 78:
            var4 = _closure1_slot42;
            var3 = _closure1_slot46;
            var2 = {};
            var2['guild'] = var7;
            var2['channel'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 79:
            return var1;
        }
    };
    var _closure1_slot53 = var1;
    var1 = function DMSpamButton(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var1 = arg1;
            var9 = var1.channel;
            var _closure2_slot0 = var9;
            var2 = var1.user;
            var6 = var1.showingSpamBanner;
            var7 = _closure1_slot0;
            var4 = _closure1_slot2;
            var3 = 67;
            var3 = var4[var3];
            var4 = undefined;
            var8 = var7.bind(var4)(var3);
            var7 = var8.useDMMessageToReport;
            var3 = var2.id;
            var10 = var2.bot;
            var2 = true;
            var2 = var2 === var10;
            var2 = var7.bind(var8)(var9, var3, var2);
            var7 = var2.message;
            var _closure2_slot1 = var7;
            var3 = var2.isReportable;
            var2 = var2.isLoaded;
            if(var6) { _fun0009_ip = 80; continue _fun0009 }
case 81:
            if(!var3) { _fun0009_ip = 80; continue _fun0009 }
case 82:
            var6 = null;
            if(!(var6 == var7)) { _fun0009_ip = 83; continue _fun0009 }
case 76:
            if(var2) { _fun0009_ip = 80; continue _fun0009 }
case 83:
            var3 = _closure1_slot42;
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var1 = 70;
            var1 = var12[var1];
            var1 = var11.bind(var4)(var1);
            var2 = var1.Button;
            var1 = {'size': 'sm', 'variant': 'destructive'};
            var8 = 29;
            var9 = var12[var8];
            var9 = var11.bind(var4)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var8 = var12[var8];
            var8 = var11.bind(var4)(var8);
            var8 = var8.t;
            var8 = var8.HHZmDn;
            var8 = var9.bind(var10)(var8);
            var1['text'] = var8;
            var6 = var6 == var7;
            var1['disabled'] = var6;
            var5 = function onPress() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0010_ip = 84; continue _fun0010 }
case 85:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 68;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.showReportModalForFirstDM;
                    var2 = _closure2_slot1;
                    var1 = function() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 69;
                        var2 = var2[var1];
                        var1 = undefined;
                        var5 = var3.bind(var1)(var2);
                        var4 = var5.closePrivateChannel;
                        var2 = _closure2_slot0;
                        var3 = var2.id;
                        var2 = true;
                        var2 = var4.bind(var5)(var3, var2);
                        return var1;
                    };
                    var1 = var3.bind(var4)(var2, var1);
case 84:
                    var1 = undefined;
                    return var1;
                }
            };
            var1['onPress'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
case 80:
            var1 = null;
            return var1;
        }
    };
    var _closure1_slot54 = var1;
    var1 = function ManageAppButton(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var3 = arg1;
            var1 = var3.user;
            var2 = var3.application;
            var _closure2_slot0 = var2;
            var4 = var3.channel;
            var _closure2_slot1 = var4;
            var3 = var3.oauth2Token;
            var _closure2_slot2 = var3;
            var3 = _closure1_slot45;
            var5 = undefined;
            var10 = var3.bind(var5)();
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 43;
            var3 = var7[var3];
            var8 = var4.bind(var5)(var3);
            var7 = var8.useStateFromStores;
            var3 = _closure1_slot9;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                var2 = _closure1_slot9;
                var1 = var2.getSelfEmbeddedActivities;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3 = var7.bind(var8)(var4, var3);
            var _closure2_slot3 = var3;
            var4 = var1.bot;
            var3 = null;
            var1 = null;
            if(!var4) { _fun0011_ip = 86; continue _fun0011 }
case 87:
            var2 = var3 != var2;
            var1 = null;
            if(!var2) { _fun0011_ip = 86; continue _fun0011 }
case 22:
            var4 = _closure1_slot42;
            var14 = _closure1_slot0;
            var13 = _closure1_slot2;
            var2 = 70;
            var2 = var13[var2];
            var2 = var14.bind(var5)(var2);
            var3 = var2.Button;
            var2 = {'size': 'sm', 'variant': 'secondary'};
            var7 = 29;
            var8 = var13[var7];
            var8 = var14.bind(var5)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var7 = var13[var7];
            var7 = var14.bind(var5)(var7);
            var7 = var7.t;
            var7 = var7["5S3sQF"];
            var7 = var8.bind(var9)(var7);
            var2['text'] = var7;
            var9 = _closure1_slot42;
            var12 = 39;
            var7 = var13[var12];
            var7 = var14.bind(var5)(var7);
            var8 = var7.Icon;
            var7 = {};
            var12 = var13[var12];
            var12 = var14.bind(var5)(var12);
            var12 = var12.Icon;
            var12 = var12.Sizes;
            var12 = var12.SMALL;
            var7['size'] = var12;
            var12 = _closure1_slot1;
            var11 = 71;
            var11 = var13[var11];
            var11 = var12.bind(var5)(var11);
            var7['source'] = var11;
            var10 = var10.appDMButtonIcon;
            var7['style'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var2['icon'] = var7;
            var6 = function onPress() {
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 72;
                var3 = var5[var1];
                var1 = undefined;
                var10 = var4.bind(var1)(var3);
                var9 = var10.openAlert;
                var11 = _closure1_slot42;
                var4 = _closure1_slot1;
                var3 = 73;
                var3 = var5[var3];
                var8 = var4.bind(var1)(var3);
                var3 = {};
                var7 = _closure2_slot0;
                var3['application'] = var7;
                var12 = _closure2_slot2;
                var12 = var12.scopes;
                var3['scopes'] = var12;
                var12 = function onDelete() {
                    _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var1 = 74;
                        var2 = var4[var1];
                        var1 = undefined;
                        var7 = var3.bind(var1)(var2);
                        var6 = var7.delete;
                        var2 = _closure2_slot2;
                        var2 = var2.id;
                        var2 = var6.bind(var7)(var2);
                        var7 = _closure2_slot3;
                        var6 = var7.get;
                        var2 = _closure2_slot0;
                        var2 = var2.id;
                        var7 = var6.bind(var7)(var2);
                        var2 = 75;
                        var2 = var4[var2];
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.leaveActivity;
                        var2 = {};
                        var6 = null;
                        var8 = var6 == var7;
                        var6 = undefined;
                        if(var8) { _fun0012_ip = 88; continue _fun0012 }
case 89:
                        var6 = var7.location;
case 88:
                        var2['location'] = var6;
                        var5 = _closure2_slot0;
                        var5 = var5.id;
                        var2['applicationId'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    }
                };
                var3['onDelete'] = var12;
                var8 = var11.bind(var1)(var8, var3);
                var3 = 'confirm-delete-authed-app';
                var3 = var9.bind(var10)(var3, var8);
                var3 = 76;
                var3 = var5[var3];
                var5 = var4.bind(var1)(var3);
                var4 = var5.track;
                var2 = _closure1_slot25;
                var3 = var2.APP_MANAGE_CTA_CLICKED;
                var2 = {};
                var7 = var7.id;
                var2['application_id'] = var7;
                var6 = _closure2_slot1;
                var7 = var6.id;
                var2['channel_id'] = var7;
                var6 = var6.type;
                var2['channel_type'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var2['onPress'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 86:
            return var1;
        }
    };
    var _closure1_slot55 = var1;
    var1 = function MuteAppButton(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var1 = arg1;
            var2 = var1.channel;
            var _closure2_slot0 = var2;
            var1 = var1.user;
            var2 = _closure1_slot45;
            var5 = undefined;
            var10 = var2.bind(var5)();
            var _closure2_slot1 = var10;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 43;
            var2 = var4[var2];
            var7 = var3.bind(var5)(var2);
            var4 = var7.useStateFromStores;
            var2 = _closure1_slot23;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var4 = _closure1_slot23;
                var3 = var4.isChannelMuted;
                var1 = _closure2_slot0;
                var2 = var1.id;
                var1 = null;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var13 = var4.bind(var7)(var3, var2);
            var _closure2_slot2 = var13;
            var2 = var1.bot;
            var1 = null;
            if(!var2) { _fun0013_ip = 90; continue _fun0013 }
case 91:
            var4 = _closure1_slot42;
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 70;
            var2 = var7[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.Button;
            var2 = {};
            var7 = 'sm';
            var2['size'] = var7;
            var7 = 'destructive';
            if(!var13) { _fun0013_ip = 92; continue _fun0013 }
case 93:
            var7 = 'secondary';
case 92:
            var2['variant'] = var7;
            var8 = _closure1_slot0;
            var14 = _closure1_slot2;
            var7 = 29;
            var9 = var14[var7];
            var9 = var8.bind(var5)(var9);
            var11 = var9.intl;
            var9 = var11.string;
            var7 = var14[var7];
            var7 = var8.bind(var5)(var7);
            var8 = var7.t;
            if(var13) { _fun0013_ip = 94; continue _fun0013 }
case 95:
            var7 = var8.w4m945;
            var7 = var9.bind(var11)(var7);
            _fun0013_ip = 96; continue _fun0013;
case 94:
            var8 = var8.YqAjXy;
            var7 = var9.bind(var11)(var8);
case 96:
            var2['text'] = var7;
            var9 = _closure1_slot42;
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var11 = 39;
            var7 = var15[var11];
            var7 = var14.bind(var5)(var7);
            var8 = var7.Icon;
            var7 = {};
            var11 = var15[var11];
            var11 = var14.bind(var5)(var11);
            var11 = var11.Icon;
            var11 = var11.Sizes;
            var11 = var11.SMALL;
            var7['size'] = var11;
            var14 = _closure1_slot1;
            var16 = _closure1_slot2;
            if(var13) { _fun0013_ip = 97; continue _fun0013 }
case 98:
            var11 = 78;
            var11 = var16[var11];
            _fun0013_ip = 99; continue _fun0013;
case 97:
            var15 = 77;
            var11 = var16[var15];
case 99:
            var11 = var14.bind(var5)(var11);
            var7['source'] = var11;
            var11 = undefined;
            if(var13) { _fun0013_ip = 100; continue _fun0013 }
case 101:
            var13 = _closure1_slot1;
            var14 = _closure1_slot2;
            var12 = 27;
            var12 = var14[var12];
            var12 = var13.bind(var5)(var12);
            var12 = var12.unsafe_rawColors;
            var11 = var12.WHITE;
case 100:
            var7['color'] = var11;
            var10 = var10.appDMButtonIcon;
            var7['style'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var2['icon'] = var7;
            var6 = function onPress() {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var4 = _closure2_slot2;
                    var2 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    if(var4) { _fun0014_ip = 75; continue _fun0014 }
case 102:
                    var4 = 82;
                    var4 = var9[var4];
                    var10 = undefined;
                    var8 = var2.bind(var10)(var4);
                    var7 = var8.openLazy;
                    var5 = _closure1_slot0;
                    var4 = 84;
                    var4 = var9[var4];
                    var6 = var5.bind(var10)(var4);
                    var4 = 83;
                    var5 = var9[var4];
                    var4 = var9.paths;
                    var6 = var6.bind(var10)(var5, var4);
                    var5 = {};
                    var4 = _closure2_slot0;
                    var5['channel'] = var4;
                    var4 = 'MessageNotificationChannelActionSheet';
                    var4 = var7.bind(var8)(var6, var4, var5);
                    _fun0014_ip = 59; continue _fun0014;
case 75:
                    var4 = 79;
                    var4 = var9[var4];
                    var8 = undefined;
                    var10 = var2.bind(var8)(var4);
                    var6 = var10.updateChannelOverrideSettings;
                    var3 = _closure2_slot0;
                    var13 = var3.id;
                    var4 = {};
                    var3 = false;
                    var4['muted'] = var3;
                    var7 = _closure1_slot0;
                    var1 = 80;
                    var1 = var9[var1];
                    var1 = var7.bind(var8)(var1);
                    var1 = var1.NotificationLabels;
                    var11 = var1.Unmuted;
                    var14 = null;
                    var15 = var10;
                    var12 = var4;
                    var1 = var15[var6](var14, var13, var12, var11, var10);
                    var1 = 81;
                    var1 = var9[var1];
                    var3 = var2.bind(var8)(var1);
                    var2 = var3.open;
                    var1 = {};
                    var4 = 'NOTIFICATIONS_UNMUTED';
                    var1['key'] = var4;
                    var4 = 29;
                    var5 = var9[var4];
                    var5 = var7.bind(var8)(var5);
                    var6 = var5.intl;
                    var5 = var6.string;
                    var4 = var9[var4];
                    var4 = var7.bind(var8)(var4);
                    var4 = var4.t;
                    var4 = var4["/6kulz"];
                    var4 = var5.bind(var6)(var4);
                    var1['content'] = var4;
                    var4 = function icon() {
                        var4 = _closure1_slot42;
                        var3 = _closure1_slot7;
                        var2 = {};
                        var8 = _closure2_slot1;
                        var1 = var8.unmutedNotificationContainer;
                        var2['style'] = var1;
                        var7 = _closure1_slot42;
                        var6 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var1 = 39;
                        var5 = var11[var1];
                        var1 = undefined;
                        var5 = var6.bind(var1)(var5);
                        var6 = var5.Icon;
                        var5 = {};
                        var10 = _closure1_slot1;
                        var9 = 78;
                        var9 = var11[var9];
                        var9 = var10.bind(var1)(var9);
                        var5['source'] = var9;
                        var9 = 27;
                        var9 = var11[var9];
                        var9 = var10.bind(var1)(var9);
                        var9 = var9.unsafe_rawColors;
                        var9 = var9.WHITE;
                        var5['color'] = var9;
                        var8 = var8.unmutedNotification;
                        var5['style'] = var8;
                        var5 = var7.bind(var1)(var6, var5);
                        var2['children'] = var5;
                        var1 = var4.bind(var1)(var3, var2);
                        return var1;
                    };
                    var1['icon'] = var4;
                    var1 = var2.bind(var3)(var1);
case 59:
                    var1 = undefined;
                    return var1;
                }
            };
            var2['onPress'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 90:
            return var1;
        }
    };
    var _closure1_slot56 = var1;
    var1 = function ChatBeginningRowDM(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var1 = arg1;
            var25 = var1.channel;
            var _closure2_slot0 = var25;
            var6 = var1.showingSpamBanner;
            var5 = undefined;
            var _closure2_slot4 = var5;
            var _closure2_slot5 = var5;
            var _closure2_slot6 = var5;
            var _closure2_slot7 = var5;
            var _closure2_slot8 = var5;
            var20 = function handleCopyUserTag() {
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 89;
                var2 = var4[var1];
                var1 = undefined;
                var6 = var3.bind(var1)(var2);
                var5 = var6.copy;
                var2 = _closure2_slot7;
                var2 = var5.bind(var6)(var2);
                var2 = 58;
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.presentUsernameCopied;
                var2 = var2.bind(var3)();
                return var1;
            };
            var1 = _closure1_slot45;
            var10 = var1.bind(var5)();
            var _closure2_slot1 = var10;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 85;
            var1 = var3[var1];
            var1 = var2.bind(var5)(var1);
            var1 = var1.bind(var5)();
            var1 = var1.analyticsLocations;
            var _closure2_slot2 = var1;
            var4 = _closure1_slot0;
            var7 = 43;
            var1 = var3[var7];
            var9 = var4.bind(var5)(var1);
            var8 = var9.useStateFromStores;
            var1 = _closure1_slot24;
            var4 = new Array(1);
            var4[0] = var1;
            var1 = function() {
                var3 = _closure1_slot24;
                var2 = var3.getUser;
                var4 = _closure2_slot0;
                var1 = var4.getRecipientId;
                var1 = var1.bind(var4)();
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var27 = var8.bind(var9)(var4, var1);
            var _closure2_slot3 = var27;
            var1 = 86;
            var1 = var3[var1];
            var3 = var2.bind(var5)(var1);
            var1 = null;
            var4 = var1 == var27;
            var2 = undefined;
            if(var4) { _fun0015_ip = 103; continue _fun0015 }
case 56:
            var2 = var27.id;
case 103:
            if(!(var1 == var2)) { _fun0015_ip = 104; continue _fun0015 }
case 105:
            var2 = _closure1_slot29;
case 104:
            var26 = var3.bind(var5)(var2);
            _closure2_slot4 = var26;
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var3 = var2[var7];
            var12 = var4.bind(var5)(var3);
            var9 = var12.useStateFromStoresObject;
            var3 = _closure1_slot15;
            var8 = new Array(1);
            var8[0] = var3;
            var3 = function() {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    var1 = {};
                    var5 = _closure1_slot15;
                    var4 = var5.getNewestTokenForApplication;
                    var7 = _closure2_slot4;
                    var3 = null;
                    var7 = var3 == var7;
                    var3 = undefined;
                    if(var7) { _fun0016_ip = 106; continue _fun0016 }
case 107:
                    var6 = _closure2_slot4;
                    var3 = var6.id;
case 106:
                    var3 = var4.bind(var5)(var3);
                    var1['authorizedAppToken'] = var3;
                    var3 = _closure1_slot15;
                    var2 = var3.getFetchState;
                    var2 = var2.bind(var3)();
                    var1['authorizedAppsFetchState'] = var2;
                    return var1;
                }
            };
            var3 = var9.bind(var12)(var8, var3);
            var24 = var3.authorizedAppToken;
            var3 = var3.authorizedAppsFetchState;
            _closure2_slot5 = var3;
            var2 = var2[var7];
            var9 = var4.bind(var5)(var2);
            var8 = var9.useStateFromStores;
            var2 = _closure1_slot12;
            var7 = new Array(1);
            var7[0] = var2;
            var4 = new Array(1);
            var4[0] = var27;
            var2 = function() {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                    var3 = _closure2_slot3;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0017_ip = 27; continue _fun0017 }
case 28:
                    var4 = _closure1_slot12;
                    var3 = var4.getMutualGuilds;
                    var2 = _closure2_slot3;
                    var2 = var2.id;
                    var1 = var3.bind(var4)(var2);
case 27:
                    return var1;
                }
            };
            var2 = var8.bind(var9)(var7, var2, var4);
            _closure2_slot6 = var2;
            var2 = var25.isSystemDM;
            var2 = var2.bind(var25)();
            var9 = _closure1_slot5;
            var8 = var9.useEffect;
            var7 = new Array(2);
            var7[0] = var27;
            var7[1] = var25;
            var4 = function() {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                    var2 = _closure2_slot3;
                    var8 = null;
                    if(!(var8 != var2)) { _fun0018_ip = 11; continue _fun0018 }
case 85:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 87;
                    var2 = var4[var2];
                    var5 = undefined;
                    var4 = var3.bind(var5)(var2);
                    var7 = _closure2_slot3;
                    var3 = var7.id;
                    var6 = var7.getAvatarURL;
                    var2 = _closure2_slot0;
                    var8 = var8 == var2;
                    var2 = undefined;
                    if(var8) { _fun0018_ip = 108; continue _fun0018 }
case 109:
                    var1 = _closure2_slot0;
                    var2 = var1.guild_id;
case 108:
                    var1 = 80;
                    var2 = var6.bind(var7)(var2, var1);
                    var1 = {'withMutualGuilds': true, 'dispatchWait': true};
                    var1 = var4.bind(var5)(var3, var2, var1);
case 11:
                    var1 = undefined;
                    return var1;
                }
            };
            var4 = var8.bind(var9)(var4, var7);
            var8 = _closure1_slot5;
            var7 = var8.useEffect;
            var4 = var1 == var27;
            var9 = undefined;
            if(var4) { _fun0015_ip = 110; continue _fun0015 }
case 111:
            var9 = var27.bot;
case 110:
            var4 = new Array(3);
            var4[0] = var9;
            var4[1] = var24;
            var4[2] = var3;
            var3 = function() {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                    var3 = _closure2_slot3;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0019_ip = 112; continue _fun0019 }
case 28:
                    var3 = _closure2_slot3;
                    var1 = var3.bot;
case 112:
                    if(!var1) { _fun0019_ip = 113; continue _fun0019 }
case 114:
                    var3 = _closure2_slot5;
                    var2 = _closure1_slot16;
                    var2 = var2.NOT_FETCHED;
                    var1 = var3 === var2;
case 113:
                    if(!var1) { _fun0019_ip = 115; continue _fun0019 }
case 116:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 74;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.fetch;
                    var1 = var1.bind(var2)();
case 115:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var7.bind(var8)(var3, var4);
            if(!(var1 != var27)) { _fun0015_ip = 117; continue _fun0015 }
case 70:
            var7 = _closure1_slot1;
            var3 = _closure1_slot2;
            var4 = 44;
            var8 = var3[var4];
            var12 = var7.bind(var5)(var8);
            var9 = var12.getUserTag;
            var8 = {'decoration': 'never', 'identifiable': 'always'};
            var19 = var9.bind(var12)(var27, var8);
            _closure2_slot7 = var19;
            var4 = var3[var4];
            var7 = var7.bind(var5)(var4);
            var4 = var7.getName;
            var28 = var4.bind(var7)(var27);
            var8 = _closure1_slot0;
            var18 = 29;
            var4 = var3[var18];
            var4 = var8.bind(var5)(var4);
            var7 = var4.intl;
            var4 = var7.string;
            var3 = var3[var18];
            var3 = var8.bind(var5)(var3);
            var3 = var3.t;
            var3 = var3.Rzvnig;
            var12 = var4.bind(var7)(var3);
            if(var2) { _fun0015_ip = 118; continue _fun0015 }
case 119:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var4 = var2[var18];
            var4 = var3.bind(var5)(var4);
            var7 = var4.intl;
            var4 = var7.formatToPlainString;
            var2 = var2[var18];
            var2 = var3.bind(var5)(var2);
            var2 = var2.t;
            var3 = var2.Q56TRC;
            var2 = {};
            var2['username'] = var28;
            var12 = var4.bind(var7)(var3, var2);
case 118:
            var2 = function handleOpenMutualGuilds() {
                var5 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 82;
                var4 = var2[var1];
                var1 = undefined;
                var6 = var5.bind(var1)(var4);
                var5 = var6.openLazy;
                var4 = _closure1_slot0;
                var3 = 84;
                var3 = var2[var3];
                var4 = var4.bind(var1)(var3);
                var3 = 90;
                var3 = var2[var3];
                var2 = var2.paths;
                var4 = var4.bind(var1)(var3, var2);
                var3 = {};
                var2 = _closure2_slot3;
                var3['user'] = var2;
                var2 = function onPressMutualGuild(arg1) {
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 91;
                    var3 = var5[var1];
                    var1 = undefined;
                    var7 = var4.bind(var1)(var3);
                    var6 = var7.trackUserProfileAction;
                    var3 = {};
                    var8 = 'PRESS_MUTUAL_GUILD';
                    var3['action'] = var8;
                    var3 = var6.bind(var7)(var3);
                    var3 = 92;
                    var3 = var5[var3];
                    var6 = var4.bind(var1)(var3);
                    var4 = var6.transitionToGuild;
                    var3 = arg1;
                    var3 = var4.bind(var6)(var3);
                    var4 = _closure1_slot1;
                    var3 = 82;
                    var3 = var5[var3];
                    var6 = var4.bind(var1)(var3);
                    var3 = var6.hideActionSheet;
                    var3 = var3.bind(var6)();
                    var3 = 93;
                    var3 = var5[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.popWithKey;
                    var2 = _closure1_slot40;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var3['onPressMutualGuild'] = var2;
                var2 = 'MutualGuildsActionSheet';
                var2 = var5.bind(var6)(var4, var2, var3);
                return var1;
            };
            _closure2_slot8 = var2;
            var4 = _closure1_slot42;
            var3 = _closure1_slot54;
            var2 = {};
            var2['channel'] = var25;
            var2['user'] = var27;
            var2['showingSpamBanner'] = var6;
            var16 = var4.bind(var5)(var3, var2);
            var4 = _closure1_slot44;
            var3 = _closure1_slot43;
            var2 = {};
            var9 = _closure1_slot42;
            var17 = _closure1_slot0;
            var15 = _closure1_slot2;
            var8 = 37;
            var6 = var15[var8];
            var6 = var17.bind(var5)(var6);
            var7 = var6.PressableOpacity;
            var6 = {};
            var22 = 'button';
            var6['accessibilityRole'] = var22;
            var13 = function onPress() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 88;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = {};
                var5 = _closure2_slot3;
                var5 = var5.id;
                var2['userId'] = var5;
                var5 = _closure2_slot0;
                var5 = var5.id;
                var2['channelId'] = var5;
                var4 = _closure2_slot2;
                var2['sourceAnalyticsLocations'] = var4;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var6['onPress'] = var13;
            var13 = var15[var18];
            var13 = var17.bind(var5)(var13);
            var23 = var13.intl;
            var14 = var23.string;
            var13 = var15[var18];
            var13 = var17.bind(var5)(var13);
            var13 = var13.t;
            var13 = var13.iXAna6;
            var13 = var14.bind(var23)(var13);
            var6['accessibilityLabel'] = var13;
            var23 = _closure1_slot42;
            var29 = 39;
            var13 = var15[var29];
            var13 = var17.bind(var5)(var13);
            var14 = var13.Avatar;
            var13 = {};
            var30 = var10.avatar;
            var13['style'] = var30;
            var13['user'] = var27;
            var30 = var25.guild_id;
            var13['guildId'] = var30;
            var29 = var15[var29];
            var29 = var17.bind(var5)(var29);
            var29 = var29.AvatarSizes;
            var29 = var29.XXLARGE;
            var13['size'] = var29;
            var29 = var27.avatarDecoration;
            var13['avatarDecoration'] = var29;
            var13 = var23.bind(var5)(var14, var13);
            var6['children'] = var13;
            var7 = var9.bind(var5)(var7, var6);
            var6 = new Array(7);
            var6[0] = var7;
            var14 = _closure1_slot42;
            var7 = var15[var8];
            var7 = var17.bind(var5)(var7);
            var9 = var7.PressableOpacity;
            var7 = {};
            var7['accessibilityRole'] = var22;
            var7['onPress'] = var20;
            var13 = var15[var18];
            var13 = var17.bind(var5)(var13);
            var29 = var13.intl;
            var23 = var29.string;
            var13 = var15[var18];
            var13 = var17.bind(var5)(var13);
            var13 = var13.t;
            var13 = var13.y5MwJy;
            var13 = var23.bind(var29)(var13);
            var7['accessibilityHint'] = var13;
            var23 = _closure1_slot42;
            var13 = 34;
            var15 = var15[var13];
            var15 = var17.bind(var5)(var15);
            var17 = var15.Text;
            var15 = {'variant': 'heading-xxl/extrabold', 'color': 'mobile-text-heading-primary'};
            var15['children'] = var28;
            var15 = var23.bind(var5)(var17, var15);
            var7['children'] = var15;
            var7 = var14.bind(var5)(var9, var7);
            var6[1] = var7;
            var9 = var27.isProvisional;
            var7 = null;
            if(var9) { _fun0015_ip = 120; continue _fun0015 }
case 121:
            var14 = _closure1_slot42;
            var17 = _closure1_slot0;
            var15 = _closure1_slot2;
            var8 = var15[var8];
            var8 = var17.bind(var5)(var8);
            var9 = var8.PressableOpacity;
            var8 = {};
            var8['accessibilityRole'] = var22;
            var8['onPress'] = var20;
            var20 = var15[var18];
            var20 = var17.bind(var5)(var20);
            var22 = var20.intl;
            var20 = var22.string;
            var18 = var15[var18];
            var18 = var17.bind(var5)(var18);
            var18 = var18.t;
            var18 = var18.y5MwJy;
            var18 = var20.bind(var22)(var18);
            var8['accessibilityHint'] = var18;
            var18 = _closure1_slot42;
            var15 = var15[var13];
            var15 = var17.bind(var5)(var15);
            var17 = var15.Text;
            var15 = {'variant': 'heading-lg/medium', 'color': 'text-default'};
            var15['children'] = var19;
            var15 = var18.bind(var5)(var17, var15);
            var8['children'] = var15;
            var7 = var14.bind(var5)(var9, var8);
case 120:
            var6[2] = var7;
            var9 = _closure1_slot42;
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var13];
            var7 = var8.bind(var5)(var7);
            var8 = var7.Text;
            var7 = {'style': null, 'variant': 'text-md/medium', 'color': 'text-default'};
            var13 = var10.dmBeginningMessage;
            var7['style'] = var13;
            var7['children'] = var12;
            var7 = var9.bind(var5)(var8, var7);
            var6[3] = var7;
            var8 = var27.isProvisional;
            var7 = null;
            if(!var8) { _fun0015_ip = 122; continue _fun0015 }
case 123:
            var12 = _closure1_slot42;
            var9 = _closure1_slot0;
            var13 = _closure1_slot2;
            var8 = 100;
            var8 = var13[var8];
            var8 = var9.bind(var5)(var8);
            var9 = var8.ChatProvisionalAccountExplainerCard;
            var8 = {};
            var13 = var10.provisionalAccountExplainer;
            var8['style'] = var13;
            var13 = var27.id;
            var8['userId'] = var13;
            var13 = 14;
            var8['iconSize'] = var13;
            var7 = var12.bind(var5)(var9, var8);
case 122:
            var6[4] = var7;
            var7 = function() {
                _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                    var2 = _closure2_slot6;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0020_ip = 124; continue _fun0020 }
case 125:
                    var1 = _closure2_slot6;
                    var2 = var1.length;
                    var1 = 1;
                    if(!(!(var2 < var1))) { _fun0020_ip = 124; continue _fun0020 }
case 126:
                    var1 = _closure2_slot6;
                    var13 = var1.length;
                    var4 = _closure2_slot6;
                    var3 = var4.slice;
                    var2 = 5;
                    var1 = var13 > var2;
                    if(!var1) { _fun0020_ip = 127; continue _fun0020 }
case 128:
                    var2 = 4;
case 127:
                    var1 = 0;
                    var15 = var3.bind(var4)(var1, var2);
                    var4 = _closure1_slot44;
                    var10 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var1 = 37;
                    var1 = var14[var1];
                    var3 = undefined;
                    var1 = var10.bind(var3)(var1);
                    var2 = var1.PressableOpacity;
                    var1 = {};
                    var7 = 'button';
                    var1['accessibilityRole'] = var7;
                    var7 = _closure2_slot8;
                    var1['onPress'] = var7;
                    var9 = _closure2_slot1;
                    var5 = var9.mutualGuildsContainer;
                    var1['style'] = var5;
                    var8 = _closure1_slot42;
                    var5 = 94;
                    var5 = var14[var5];
                    var5 = var10.bind(var3)(var5);
                    var7 = var5.GuildIconPile;
                    var5 = {};
                    var12 = 95;
                    var12 = var14[var12];
                    var12 = var10.bind(var3)(var12);
                    var12 = var12.GuildIconSizes;
                    var12 = var12.SMALL;
                    var5['size'] = var12;
                    var16 = var15.map;
                    var12 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.guild;
                        var1 = var1.name;
                        return var1;
                    };
                    var12 = var16.bind(var15)(var12);
                    var5['names'] = var12;
                    var5['totalCount'] = var13;
                    var12 = var15.map;
                    var11 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.guild;
                        var5 = _closure1_slot42;
                        var3 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var6 = 95;
                        var2 = var8[var6];
                        var4 = undefined;
                        var3 = var3.bind(var4)(var2);
                        var2 = {};
                        var2['guild'] = var1;
                        var7 = _closure1_slot0;
                        var6 = var8[var6];
                        var6 = var7.bind(var4)(var6);
                        var6 = var6.GuildIconSizes;
                        var6 = var6.SMALL;
                        var2['size'] = var6;
                        var1 = var1.id;
                        var1 = var5.bind(var4)(var3, var2, var1);
                        return var1;
                    };
                    var11 = var12.bind(var15)(var11);
                    var5['children'] = var11;
                    var7 = var8.bind(var3)(var7, var5);
                    var5 = new Array(2);
                    var5[0] = var7;
                    var8 = _closure1_slot42;
                    var6 = 34;
                    var6 = var14[var6];
                    var6 = var10.bind(var3)(var6);
                    var7 = var6.Text;
                    var6 = {'style': null, 'variant': 'text-sm/medium', 'color': 'text-default'};
                    var9 = var9.mutualGuildsLabel;
                    var6['style'] = var9;
                    var9 = 29;
                    var11 = var14[var9];
                    var11 = var10.bind(var3)(var11);
                    var12 = var11.intl;
                    var11 = var12.format;
                    var9 = var14[var9];
                    var9 = var10.bind(var3)(var9);
                    var9 = var9.t;
                    var10 = var9.eE3oep;
                    var9 = {};
                    var9['count'] = var13;
                    var9 = var11.bind(var12)(var10, var9);
                    var6['children'] = var9;
                    var6 = var8.bind(var3)(var7, var6);
                    var5[1] = var6;
                    var1['children'] = var5;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
case 124:
                    var1 = undefined;
                    return var1;
                }
            };
            var7 = var7.bind(var5)();
            var6[5] = var7;
            var9 = _closure1_slot42;
            var8 = _closure1_slot7;
            var7 = {};
            var10 = var10.dmButtonRow;
            var7['style'] = var10;
            var10 = var27.isNonUserBot;
            var12 = var10.bind(var27)();
            var10 = null;
            if(var12) { _fun0015_ip = 129; continue _fun0015 }
case 130:
            var12 = var27.bot;
            if(var12) { _fun0015_ip = 131; continue _fun0015 }
case 132:
            var13 = _closure1_slot42;
            var12 = {};
            var12['reportButton'] = var16;
            var11 = function RelationshipButtons(arg1) {
                _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                    var1 = arg1;
                    var10 = var1.reportButton;
                    var8 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 43;
                    var1 = var5[var1];
                    var4 = undefined;
                    var6 = var8.bind(var4)(var1);
                    var3 = var6.useStateFromStores;
                    var1 = _closure1_slot22;
                    var2 = new Array(1);
                    var2[0] = var1;
                    var1 = function() {
                        var3 = _closure1_slot22;
                        var2 = var3.getRelationshipType;
                        var1 = _closure2_slot3;
                        var1 = var1.id;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var9 = var3.bind(var6)(var2, var1);
                    var14 = function handleBlock() {
                        var5 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 82;
                        var4 = var3[var1];
                        var1 = undefined;
                        var6 = var5.bind(var1)(var4);
                        var5 = var6.openLazy;
                        var7 = _closure1_slot0;
                        var4 = 84;
                        var4 = var3[var4];
                        var7 = var7.bind(var1)(var4);
                        var4 = 99;
                        var4 = var3[var4];
                        var3 = var3.paths;
                        var4 = var7.bind(var1)(var4, var3);
                        var3 = _closure1_slot41;
                        var2 = {};
                        var8 = _closure2_slot3;
                        var8 = var8.id;
                        var2['userId'] = var8;
                        var7 = _closure2_slot0;
                        var7 = var7.id;
                        var2['channelId'] = var7;
                        var2 = var5.bind(var6)(var4, var3, var2);
                        return var1;
                    };
                    var3 = _closure1_slot42;
                    var11 = 70;
                    var1 = var5[var11];
                    var1 = var8.bind(var4)(var1);
                    var2 = var1.Button;
                    var1 = {'text': null, 'size': 'sm', 'variant': 'secondary'};
                    var19 = 29;
                    var6 = var5[var19];
                    var6 = var8.bind(var4)(var6);
                    var7 = var6.intl;
                    var6 = var7.string;
                    var5 = var5[var19];
                    var5 = var8.bind(var4)(var5);
                    var5 = var5.t;
                    var5 = var5.l4Emac;
                    var5 = var6.bind(var7)(var5);
                    var1['text'] = var5;
                    var1['onPress'] = var14;
                    var7 = var3.bind(var4)(var2, var1);
                    var1 = _closure1_slot34;
                    var1 = var1.PENDING_INCOMING;
                    if(!(var9 !== var1)) { _fun0021_ip = 133; continue _fun0021 }
case 134:
                    var3 = _closure1_slot44;
                    var2 = _closure1_slot43;
                    var1 = {};
                    var5 = _closure1_slot34;
                    var5 = var5.NONE;
                    if(!(var5 !== var9)) { _fun0021_ip = 135; continue _fun0021 }
case 136:
                    var5 = _closure1_slot34;
                    var5 = var5.FRIEND;
                    if(!(var5 !== var9)) { _fun0021_ip = 137; continue _fun0021 }
case 33:
                    var5 = _closure1_slot34;
                    var5 = var5.BLOCKED;
                    if(!(var5 !== var9)) { _fun0021_ip = 138; continue _fun0021 }
case 139:
                    var5 = _closure1_slot34;
                    var5 = var5.PENDING_OUTGOING;
                    var6 = null;
                    if(!(var5 === var9)) { _fun0021_ip = 140; continue _fun0021 }
case 40:
                    var13 = _closure1_slot42;
                    var18 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var5 = var15[var11];
                    var5 = var18.bind(var4)(var5);
                    var8 = var5.Button;
                    var5 = {'text': null, 'size': 'sm', 'variant': 'active', 'disabled': true};
                    var16 = var15[var19];
                    var16 = var18.bind(var4)(var16);
                    var17 = var16.intl;
                    var16 = var17.string;
                    var15 = var15[var19];
                    var15 = var18.bind(var4)(var15);
                    var15 = var15.t;
                    var15 = var15.xMH6vD;
                    var15 = var16.bind(var17)(var15);
                    var5['text'] = var15;
                    var5['onPress'] = var4;
                    var6 = var13.bind(var4)(var8, var5);
                    _fun0021_ip = 140; continue _fun0021;
case 138:
                    var13 = _closure1_slot42;
                    var18 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var5 = var15[var11];
                    var5 = var18.bind(var4)(var5);
                    var8 = var5.Button;
                    var5 = {'text': null, 'size': 'sm', 'variant': 'secondary'};
                    var16 = var15[var19];
                    var16 = var18.bind(var4)(var16);
                    var17 = var16.intl;
                    var16 = var17.string;
                    var15 = var15[var19];
                    var15 = var18.bind(var4)(var15);
                    var15 = var15.t;
                    var15 = var15.XyHpKH;
                    var15 = var16.bind(var17)(var15);
                    var5['text'] = var15;
                    var15 = function handleUnblock() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 96;
                        var2 = var2[var1];
                        var1 = undefined;
                        var5 = var3.bind(var1)(var2);
                        var4 = var5.unblockUser;
                        var2 = _closure2_slot3;
                        var3 = var2.id;
                        var2 = {};
                        var6 = _closure1_slot26;
                        var6 = var6.DM_CHANNEL;
                        var2['location'] = var6;
                        var2 = var4.bind(var5)(var3, var2);
                        return var1;
                    };
                    var5['onPress'] = var15;
                    var6 = var13.bind(var4)(var8, var5);
                    _fun0021_ip = 140; continue _fun0021;
case 137:
                    var13 = _closure1_slot42;
                    var18 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var5 = var15[var11];
                    var5 = var18.bind(var4)(var5);
                    var8 = var5.Button;
                    var5 = {'text': null, 'size': 'sm', 'variant': 'secondary'};
                    var16 = var15[var19];
                    var16 = var18.bind(var4)(var16);
                    var17 = var16.intl;
                    var16 = var17.string;
                    var15 = var15[var19];
                    var15 = var18.bind(var4)(var15);
                    var15 = var15.t;
                    var15 = var15.cvSt1J;
                    var15 = var16.bind(var17)(var15);
                    var5['text'] = var15;
                    var15 = function handleRemoveFriend() {
                        var3 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var1 = 98;
                        var2 = var7[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.confirmRemoveFriend;
                        var2 = {};
                        var6 = _closure1_slot1;
                        var5 = 44;
                        var5 = var7[var5];
                        var7 = var6.bind(var1)(var5);
                        var6 = var7.getName;
                        var5 = _closure2_slot3;
                        var5 = var6.bind(var7)(var5);
                        var2['userDisplayName'] = var5;
                        var5 = function onConfirm() {
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 96;
                            var2 = var2[var1];
                            var1 = undefined;
                            var5 = var3.bind(var1)(var2);
                            var4 = var5.removeFriend;
                            var2 = _closure2_slot3;
                            var3 = var2.id;
                            var2 = {};
                            var6 = _closure1_slot26;
                            var6 = var6.DM_CHANNEL;
                            var2['location'] = var6;
                            var2 = var4.bind(var5)(var3, var2);
                            return var1;
                        };
                        var2['onConfirm'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var5['onPress'] = var15;
                    var6 = var13.bind(var4)(var8, var5);
                    _fun0021_ip = 140; continue _fun0021;
case 135:
                    var13 = _closure2_slot3;
                    var5 = null;
                    if(!(var5 != var13)) { _fun0021_ip = 54; continue _fun0021 }
case 141:
                    var8 = _closure2_slot3;
                    var8 = var8.bot;
                    var5 = null;
                    if(var8) { _fun0021_ip = 142; continue _fun0021 }
case 54:
                    var15 = _closure1_slot42;
                    var21 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var8 = var16[var11];
                    var8 = var21.bind(var4)(var8);
                    var13 = var8.Button;
                    var8 = {'text': null, 'size': 'sm', 'variant': 'active'};
                    var17 = var16[var19];
                    var17 = var21.bind(var4)(var17);
                    var18 = var17.intl;
                    var17 = var18.string;
                    var16 = var16[var19];
                    var16 = var21.bind(var4)(var16);
                    var16 = var16.t;
                    var16 = var16.PMsq/b;
                    var16 = var17.bind(var18)(var16);
                    var8['text'] = var16;
                    var16 = function handleAddFriend() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 96;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.addRelationship;
                        var2 = {};
                        var5 = _closure2_slot3;
                        var5 = var5.id;
                        var2['userId'] = var5;
                        var5 = {};
                        var6 = _closure1_slot26;
                        var6 = var6.DM_CHANNEL;
                        var5['location'] = var6;
                        var2['context'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var8['onPress'] = var16;
                    var5 = var15.bind(var4)(var13, var8);
case 142:
                    var6 = var5;
case 140:
                    var5 = new Array(3);
                    var5[0] = var6;
                    var6 = _closure1_slot34;
                    var8 = var6.BLOCKED;
                    var6 = null;
                    if(!(var9 !== var8)) { _fun0021_ip = 143; continue _fun0021 }
case 144:
                    var6 = var7;
case 143:
                    var5[1] = var6;
                    var5[2] = var10;
                    var1['children'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
case 133:
                    var3 = _closure1_slot44;
                    var2 = _closure1_slot7;
                    var1 = {};
                    var9 = _closure2_slot1;
                    var5 = var9.pendingIncoming;
                    var1['style'] = var5;
                    var7 = _closure1_slot42;
                    var18 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var5 = 34;
                    var5 = var15[var5];
                    var5 = var18.bind(var4)(var5);
                    var6 = var5.Text;
                    var5 = {'variant': 'text-sm/normal', 'color': 'text-default'};
                    var8 = var15[var19];
                    var8 = var18.bind(var4)(var8);
                    var17 = var8.intl;
                    var16 = var17.format;
                    var8 = var15[var19];
                    var8 = var18.bind(var4)(var8);
                    var8 = var8.t;
                    var13 = var8.uIomXw;
                    var8 = {};
                    var23 = _closure1_slot1;
                    var22 = 44;
                    var22 = var15[var22];
                    var23 = var23.bind(var4)(var22);
                    var22 = var23.getName;
                    var21 = _closure2_slot3;
                    var21 = var22.bind(var23)(var21);
                    var8['username'] = var21;
                    var8 = var16.bind(var17)(var13, var8);
                    var5['children'] = var8;
                    var6 = var7.bind(var4)(var6, var5);
                    var5 = new Array(2);
                    var5[0] = var6;
                    var8 = _closure1_slot44;
                    var7 = _closure1_slot7;
                    var6 = {};
                    var9 = var9.pendingIncomingButtons;
                    var6['style'] = var9;
                    var16 = _closure1_slot42;
                    var9 = var15[var11];
                    var9 = var18.bind(var4)(var9);
                    var13 = var9.Button;
                    var9 = {'text': null, 'size': 'sm', 'variant': 'active'};
                    var17 = var15[var19];
                    var17 = var18.bind(var4)(var17);
                    var22 = var17.intl;
                    var21 = var22.string;
                    var17 = var15[var19];
                    var17 = var18.bind(var4)(var17);
                    var17 = var17.t;
                    var17 = var17["+WbSn5"];
                    var17 = var21.bind(var22)(var17);
                    var9['text'] = var17;
                    var17 = function onPress() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 97;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.maybeConfirmFriendRequestAccept;
                        var2 = {};
                        var6 = _closure2_slot3;
                        var6 = var6.id;
                        var2['userId'] = var6;
                        var5 = _closure1_slot26;
                        var5 = var5.DM_CHANNEL;
                        var2['location'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var9['onPress'] = var17;
                    var13 = var16.bind(var4)(var13, var9);
                    var9 = new Array(4);
                    var9[0] = var13;
                    var17 = _closure1_slot42;
                    var13 = var15[var11];
                    var13 = var18.bind(var4)(var13);
                    var16 = var13.Button;
                    var13 = {'text': null, 'size': 'sm', 'variant': 'secondary'};
                    var21 = var15[var19];
                    var21 = var18.bind(var4)(var21);
                    var23 = var21.intl;
                    var22 = var23.string;
                    var21 = var15[var19];
                    var21 = var18.bind(var4)(var21);
                    var21 = var21.t;
                    var21 = var21.rQSndv;
                    var21 = var22.bind(var23)(var21);
                    var13['text'] = var21;
                    var20 = function onPress() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 96;
                        var2 = var2[var1];
                        var1 = undefined;
                        var5 = var3.bind(var1)(var2);
                        var4 = var5.cancelFriendRequest;
                        var2 = _closure2_slot3;
                        var3 = var2.id;
                        var2 = {};
                        var6 = _closure1_slot26;
                        var6 = var6.DM_CHANNEL;
                        var2['location'] = var6;
                        var2 = var4.bind(var5)(var3, var2);
                        return var1;
                    };
                    var13['onPress'] = var20;
                    var13 = var17.bind(var4)(var16, var13);
                    var9[1] = var13;
                    var13 = _closure1_slot42;
                    var11 = var15[var11];
                    var11 = var18.bind(var4)(var11);
                    var12 = var11.Button;
                    var11 = {'text': null, 'size': 'sm', 'variant': 'secondary'};
                    var16 = var15[var19];
                    var16 = var18.bind(var4)(var16);
                    var17 = var16.intl;
                    var16 = var17.string;
                    var15 = var15[var19];
                    var15 = var18.bind(var4)(var15);
                    var15 = var15.t;
                    var15 = var15.l4Emac;
                    var15 = var16.bind(var17)(var15);
                    var11['text'] = var15;
                    var11['onPress'] = var14;
                    var11 = var13.bind(var4)(var12, var11);
                    var9[2] = var11;
                    var9[3] = var10;
                    var6['children'] = var9;
                    var6 = var8.bind(var4)(var7, var6);
                    var5[1] = var6;
                    var1['children'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                }
            };
            var11 = var13.bind(var5)(var11, var12);
            _fun0015_ip = 145; continue _fun0015;
case 131:
            var14 = _closure1_slot44;
            var13 = _closure1_slot43;
            var12 = {};
            var15 = var1 != var24;
            var17 = null;
            if(!var15) { _fun0015_ip = 146; continue _fun0015 }
case 147:
            var15 = var1 != var26;
            var17 = null;
            if(!var15) { _fun0015_ip = 146; continue _fun0015 }
case 148:
            var19 = _closure1_slot44;
            var18 = _closure1_slot43;
            var15 = {};
            var23 = _closure1_slot42;
            var22 = _closure1_slot56;
            var20 = {};
            var20['channel'] = var25;
            var20['user'] = var27;
            var22 = var23.bind(var5)(var22, var20);
            var20 = new Array(2);
            var20[0] = var22;
            var23 = _closure1_slot42;
            var22 = _closure1_slot55;
            var21 = {};
            var21['user'] = var27;
            var21['application'] = var26;
            var21['channel'] = var25;
            var21['oauth2Token'] = var24;
            var21 = var23.bind(var5)(var22, var21);
            var20[1] = var21;
            var15['children'] = var20;
            var17 = var19.bind(var5)(var18, var15);
case 146:
            var15 = new Array(2);
            var15[0] = var17;
            var15[1] = var16;
            var12['children'] = var15;
            var11 = var14.bind(var5)(var13, var12);
case 145:
            var10 = var11;
case 129:
            var7['children'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[6] = var7;
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 117:
            return var1;
        }
    };
    var _closure1_slot57 = var1;
    var1 = function ChatBeginningRowButton(arg1) {
        var2 = arg1;
        var10 = var2.title;
        var9 = var2.subtitle;
        var15 = var2.IconComponent;
        var14 = var2.iconVariant;
        var1 = var2.style;
        var17 = var2.onPress;
        var8 = var2.trailing;
        var4 = _closure1_slot42;
        var3 = _closure1_slot7;
        var2 = {};
        var2['style'] = var1;
        var7 = _closure1_slot42;
        var12 = _closure1_slot0;
        var16 = _closure1_slot2;
        var11 = 101;
        var5 = var16[var11];
        var1 = undefined;
        var5 = var12.bind(var1)(var5);
        var6 = var5.RowButton;
        var5 = {};
        var5['onPress'] = var17;
        var13 = _closure1_slot42;
        var11 = var16[var11];
        var11 = var12.bind(var1)(var11);
        var11 = var11.RowButton;
        var12 = var11.Icon;
        var11 = {};
        var11['IconComponent'] = var15;
        var11['variant'] = var14;
        var11 = var13.bind(var1)(var12, var11);
        var5['icon'] = var11;
        var5['label'] = var10;
        var5['subLabel'] = var9;
        var5['trailing'] = var8;
        var5 = var7.bind(var1)(var6, var5);
        var2['children'] = var5;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var _closure1_slot58 = var1;
    var1 = function ChatBeginningRowGroupDM(arg1) {
        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
            var2 = arg1;
            var15 = var2.channel;
            var _closure2_slot0 = var15;
            var2 = _closure1_slot45;
            var4 = undefined;
            var21 = var2.bind(var4)();
            var9 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 47;
            var2 = var6[var2];
            var2 = var9.bind(var4)(var2);
            var24 = var2.bind(var4)(var15);
            var3 = _closure1_slot5;
            var2 = var3.useState;
            var11 = false;
            var5 = var2.bind(var3)(var11);
            var3 = _closure1_slot3;
            var2 = 2;
            var3 = var3.bind(var4)(var5, var2);
            var2 = 0;
            var18 = var3[var2];
            var _closure2_slot1 = var18;
            var2 = 1;
            var13 = var3[var2];
            var _closure2_slot2 = var13;
            var8 = _closure1_slot0;
            var2 = 43;
            var2 = var6[var2];
            var7 = var8.bind(var4)(var2);
            var5 = var7.useStateFromStores;
            var2 = _closure1_slot22;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var2 = _closure1_slot22;
                var1 = var2.getRelationshipCount;
                var2 = var1.bind(var2)();
                var1 = 0;
                var1 = var2 > var1;
                return var1;
            };
            var23 = var5.bind(var7)(var3, var2);
            var7 = _closure1_slot5;
            var5 = var7.useCallback;
            var3 = new Array(1);
            var3[0] = var15;
            var2 = function() {
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 102;
                var3 = var3[var1];
                var1 = undefined;
                var5 = var4.bind(var1)(var3);
                var4 = var5.navigateToNewGroupDM;
                var3 = _closure2_slot0;
                var3 = var3.id;
                var2 = _closure1_slot27;
                var2 = var2.CHANNEL_TEXT_AREA;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var2 = var5.bind(var7)(var2, var3);
            var _closure2_slot3 = var2;
            var10 = _closure1_slot5;
            var7 = var10.useCallback;
            var5 = _closure1_slot4;
            var3 = function* () {
                var1 = function* anon_0_() {
                    _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0023_ip = 149; continue _fun0023 }
case 150:
                        var2 = _closure2_slot1;
                        if(var2) { _fun0023_ip = 151; continue _fun0023 }
case 152:
                        var4 = _closure2_slot2;
                        var5 = undefined;
                        var2 = true;
                        var2 = var4.bind(var5)(var2);
                        var6 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var2 = 103;
                        var2 = var7[var2];
                        var8 = var6.bind(var5)(var2);
                        var7 = var8.mobileCreateInvite;
                        var6 = _closure2_slot0;
                        var2 = _closure1_slot32;
                        var2 = var2.GROUP_DM;
                        var2 = var7.bind(var8)(var6, var2);
                        SaveGenerator(address=89);
case 153:
                        return var2;
case 154:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                        if(var6) { _fun0023_ip = 155; continue _fun0023 }
case 156:
                        var6 = null;
                        if(!(var6 != var2)) { _fun0023_ip = 157; continue _fun0023 }
case 89:
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var6 = 63;
                        var6 = var8[var6];
                        var9 = var7.bind(var5)(var6);
                        var8 = var9.handleCopy;
                        var12 = _closure2_slot0;
                        var4 = _closure1_slot32;
                        var11 = var4.GROUP_DM;
                        var10 = false;
                        var14 = var9;
                        var13 = var2;
                        var4 = var14[var8](var13, var12, var11, var10, var9);
case 157:
                        var4 = _closure2_slot2;
                        var3 = false;
                        var3 = var4.bind(var5)(var3);
                        _fun0023_ip = 151; continue _fun0023;
case 155:
                        return var2;
case 151:
                        var2 = undefined;
                        return var2;
case 149:
                        return var1;
                    }
                };
                return var1;
            };
            var5 = var5.bind(var4)(var3);
            var3 = new Array(3);
            var3[0] = var15;
            var3[1] = var18;
            var3[2] = var13;
            var7 = var7.bind(var10)(var5, var3);
            var _closure2_slot4 = var7;
            var10 = _closure1_slot5;
            var5 = var10.useCallback;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 104;
                    var3 = var7[var1];
                    var1 = undefined;
                    var5 = var6.bind(var1)(var3);
                    var4 = var5.UNSAFE_isDismissibleContentDismissed;
                    var3 = 105;
                    var3 = var7[var3];
                    var3 = var6.bind(var1)(var3);
                    var3 = var3.DismissibleContent;
                    var3 = var3.GDM_INVITE_REMINDER;
                    var3 = var4.bind(var5)(var3);
                    if(var3) { _fun0024_ip = 91; continue _fun0024 }
case 84:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 106;
                    var2 = var4[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = {};
                    var4 = _closure2_slot3;
                    var2['onClick'] = var4;
                    var2 = var3.bind(var1)(var2);
                    _fun0024_ip = 158; continue _fun0024;
case 91:
                    var2 = _closure2_slot3;
                    var2 = var2.bind(var1)();
case 158:
                    return var1;
                }
            };
            var19 = var5.bind(var10)(var2, var3);
            var5 = _closure1_slot5;
            var3 = var5.useCallback;
            var2 = new Array(1);
            var2[0] = var7;
            var1 = function() {
                _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 104;
                    var3 = var7[var1];
                    var1 = undefined;
                    var5 = var6.bind(var1)(var3);
                    var4 = var5.UNSAFE_isDismissibleContentDismissed;
                    var3 = 105;
                    var3 = var7[var3];
                    var3 = var6.bind(var1)(var3);
                    var3 = var3.DismissibleContent;
                    var3 = var3.GDM_INVITE_REMINDER;
                    var3 = var4.bind(var5)(var3);
                    if(var3) { _fun0025_ip = 91; continue _fun0025 }
case 84:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 106;
                    var2 = var4[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = {};
                    var4 = _closure2_slot4;
                    var2['onClick'] = var4;
                    var2 = var3.bind(var1)(var2);
                    _fun0025_ip = 158; continue _fun0025;
case 91:
                    var2 = _closure2_slot4;
                    var2 = var2.bind(var1)();
case 158:
                    return var1;
                }
            };
            var17 = var3.bind(var5)(var1, var2);
            var2 = var15.id;
            var1 = 107;
            var1 = var6[var1];
            var1 = var8.bind(var4)(var1);
            var1 = var1.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
            var7 = var2 === var1;
            var3 = _closure1_slot44;
            var2 = _closure1_slot7;
            var1 = {};
            var5 = var21.centerHeader;
            var1['style'] = var5;
            var10 = _closure1_slot42;
            var5 = 108;
            var5 = var6[var5];
            var9 = var9.bind(var4)(var5);
            var5 = {};
            var13 = var21.avatarRedesign;
            var5['style'] = var13;
            var5['channel'] = var15;
            var13 = 39;
            var13 = var6[var13];
            var13 = var8.bind(var4)(var13);
            var13 = var13.AvatarSizes;
            var13 = var13.XXLARGE;
            var5['size'] = var13;
            var5['accessible'] = var11;
            var9 = var10.bind(var4)(var9, var5);
            var5 = new Array(4);
            var5[0] = var9;
            var9 = _closure1_slot42;
            var10 = 34;
            var6 = var6[var10];
            var6 = var8.bind(var4)(var6);
            var8 = var6.Text;
            var6 = {};
            var11 = var21.dmTitle;
            var6['style'] = var11;
            var11 = null;
            var14 = var11 != var24;
            var16 = 'heading-xxl/extrabold';
            var13 = var16;
            if(!var14) { _fun0022_ip = 159; continue _fun0022 }
case 160:
            var20 = var24.length;
            var14 = 40;
            var14 = var20 > var14;
            var13 = var16;
            if(!var14) { _fun0022_ip = 159; continue _fun0022 }
case 161:
            var13 = 'heading-lg/extrabold';
case 159:
            var6['variant'] = var13;
            var13 = 'mobile-text-heading-primary';
            var6['color'] = var13;
            var6['children'] = var24;
            var6 = var9.bind(var4)(var8, var6);
            var5[1] = var6;
            var9 = _closure1_slot42;
            var8 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var10];
            var6 = var8.bind(var4)(var6);
            var8 = var6.Text;
            var6 = {'style': null, 'variant': 'text-md/medium', 'color': 'text-default'};
            var10 = var21.gdmText;
            var6['style'] = var10;
            var14 = _closure1_slot0;
            var13 = _closure1_slot2;
            var22 = 29;
            var10 = var13[var22];
            var10 = var14.bind(var4)(var10);
            var20 = var10.intl;
            if(var7) { _fun0022_ip = 162; continue _fun0022 }
case 118:
            var16 = var20.string;
            var10 = var13[var22];
            var10 = var14.bind(var4)(var10);
            var10 = var10.t;
            var10 = var10["0Q7uk0"];
            var10 = var16.bind(var20)(var10);
            _fun0022_ip = 163; continue _fun0022;
case 162:
            var16 = var20.format;
            var13 = var13[var22];
            var13 = var14.bind(var4)(var13);
            var13 = var13.t;
            var14 = var13.MFwcqO;
            var13 = {};
            var13['name'] = var24;
            var10 = var16.bind(var20)(var14, var13);
case 163:
            var6['children'] = var10;
            var6 = var9.bind(var4)(var8, var6);
            var5[2] = var6;
            var6 = null;
            if(var7) { _fun0022_ip = 164; continue _fun0022 }
case 165:
            var9 = _closure1_slot44;
            var8 = _closure1_slot43;
            var7 = {};
            var13 = null;
            if(!var23) { _fun0022_ip = 166; continue _fun0022 }
case 167:
            var16 = _closure1_slot42;
            var14 = _closure1_slot58;
            var10 = {};
            var20 = var21.gdmInviteFriends;
            var10['style'] = var20;
            var10['onPress'] = var19;
            var25 = _closure1_slot0;
            var19 = _closure1_slot2;
            var20 = 109;
            var20 = var19[var20];
            var20 = var25.bind(var4)(var20);
            var20 = var20.GroupPlusIcon;
            var10['IconComponent'] = var20;
            var20 = 'default';
            var10['iconVariant'] = var20;
            var20 = var19[var22];
            var20 = var25.bind(var4)(var20);
            var24 = var20.intl;
            var20 = var24.string;
            var19 = var19[var22];
            var19 = var25.bind(var4)(var19);
            var19 = var19.t;
            var19 = var19.LR+Ptf;
            var19 = var20.bind(var24)(var19);
            var10['title'] = var19;
            var13 = var16.bind(var4)(var14, var10);
case 166:
            var10 = new Array(3);
            var10[0] = var13;
            var16 = _closure1_slot42;
            var14 = _closure1_slot58;
            var13 = {};
            var20 = var21.gdmShareInviteLink;
            var19 = new Array(2);
            var19[0] = var20;
            var20 = null;
            if(var23) { _fun0022_ip = 168; continue _fun0022 }
case 169:
            var20 = var21.gdmShareInviteLinkNoRelationships;
case 168:
            var19[1] = var20;
            var13['style'] = var19;
            var13['onPress'] = var17;
            var21 = _closure1_slot0;
            var17 = _closure1_slot2;
            var19 = 110;
            var19 = var17[var19];
            var19 = var21.bind(var4)(var19);
            var19 = var19.LinkIcon;
            var13['IconComponent'] = var19;
            var19 = var17[var22];
            var19 = var21.bind(var4)(var19);
            var23 = var19.intl;
            var20 = var23.string;
            var19 = var17[var22];
            var19 = var21.bind(var4)(var19);
            var19 = var19.t;
            var19 = var19["3XVNyt"];
            var19 = var20.bind(var23)(var19);
            var13['title'] = var19;
            var19 = var17[var22];
            var19 = var21.bind(var4)(var19);
            var20 = var19.intl;
            var19 = var20.string;
            var17 = var17[var22];
            var17 = var21.bind(var4)(var17);
            var17 = var17.t;
            var17 = var17.qa9CQu;
            var17 = var19.bind(var20)(var17);
            var13['subtitle'] = var17;
            var17 = null;
            if(!var18) { _fun0022_ip = 170; continue _fun0022 }
case 171:
            var20 = _closure1_slot42;
            var19 = _closure1_slot6;
            var18 = {};
            var17 = var20.bind(var4)(var19, var18);
case 170:
            var13['trailing'] = var17;
            var13 = var16.bind(var4)(var14, var13);
            var10[1] = var13;
            var14 = var15.hasFlag;
            var13 = _closure1_slot37;
            var13 = var13.IS_JOIN_REQUEST_INTERVIEW_CHANNEL;
            var13 = var14.bind(var15)(var13);
            var11 = null;
            if(!var13) { _fun0022_ip = 172; continue _fun0022 }
case 173:
            var14 = _closure1_slot42;
            var13 = _closure1_slot1;
            var16 = _closure1_slot2;
            var12 = 111;
            var12 = var16[var12];
            var13 = var13.bind(var4)(var12);
            var12 = {};
            var15 = var15.id;
            var12['channelId'] = var15;
            var11 = var14.bind(var4)(var13, var12);
case 172:
            var10[2] = var11;
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 164:
            var5[3] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot59 = var1;
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
    var4 = var12.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var10 = 2;
    var7 = var6[var10];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.ActivityIndicator;
    var _closure1_slot6 = var7;
    var4 = var4.View;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var15 = 8;
    var4 = var6[var15];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.THREAD_CHANNEL_TYPES;
    var _closure1_slot13 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.isGuildOwner;
    var _closure1_slot14 = var4;
    var4 = 11;
    var7 = var6[var4];
    var7 = var12.bind(var1)(var7);
    var _closure1_slot15 = var7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.FetchState;
    var _closure1_slot16 = var4;
    var14 = 12;
    var4 = var6[var14];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot17 = var4;
    var4 = 13;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot18 = var4;
    var4 = 14;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot19 = var4;
    var4 = 15;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot20 = var4;
    var17 = 16;
    var4 = var6[var17];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot21 = var4;
    var4 = 17;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot22 = var4;
    var4 = 18;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot23 = var4;
    var4 = 19;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot24 = var4;
    var13 = 20;
    var4 = var6[var13];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot25 = var7;
    var7 = var4.AnalyticsPages;
    var _closure1_slot26 = var7;
    var7 = var4.AnalyticsSections;
    var _closure1_slot27 = var7;
    var7 = var4.ChannelSettingsSections;
    var _closure1_slot28 = var7;
    var7 = var4.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot29 = var7;
    var7 = var4.GuildSettingsSections;
    var _closure1_slot30 = var7;
    var7 = var4.HelpdeskArticles;
    var _closure1_slot31 = var7;
    var7 = var4.InstantInviteSources;
    var _closure1_slot32 = var7;
    var7 = var4.Permissions;
    var _closure1_slot33 = var7;
    var7 = var4.RelationshipTypes;
    var _closure1_slot34 = var7;
    var7 = var4.UPLOAD_MEDIUM_SIZE;
    var _closure1_slot35 = var7;
    var4 = var4.WELCOME_OLD_GUILD_AGE_THRESHOLD;
    var _closure1_slot36 = var4;
    var4 = 21;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ChannelFlags;
    var _closure1_slot37 = var4;
    var4 = 22;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticsActions;
    var _closure1_slot38 = var7;
    var4 = var4.AnalyticsSetupTypes;
    var _closure1_slot39 = var4;
    var4 = 23;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MOBILE_MESSAGE_REQUESTS_MODAL_KEY;
    var _closure1_slot40 = var4;
    var18 = 24;
    var4 = var6[var18];
    var4 = var5.bind(var1)(var4);
    var4 = var4.BLOCK_CONFIRMATION_ACTION_SHEET_KEY;
    var _closure1_slot41 = var4;
    var4 = 25;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot42 = var7;
    var7 = var4.Fragment;
    var _closure1_slot43 = var7;
    var4 = var4.jsxs;
    var _closure1_slot44 = var4;
    var4 = 26;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'position': 'absolute', 'width': '100%'};
    var4['container'] = var9;
    var9 = {'paddingVertical': 8, 'paddingHorizontal': 12};
    var4['contentWrapper'] = var9;
    var9 = {};
    var9['marginTop'] = var17;
    var4['title'] = var9;
    var9 = {'marginBottom': 16, 'lineHeight': 20};
    var4['subtitle'] = var9;
    var9 = {'borderRadius': null, 'marginTop': 16, 'width': '100%'};
    var11 = 27;
    var16 = var6[var11];
    var16 = var12.bind(var1)(var16);
    var16 = var16.radii;
    var16 = var16.lg;
    var9['borderRadius'] = var16;
    var4['gdmInviteFriends'] = var9;
    var9 = {'borderRadius': null, 'marginTop': 8, 'width': '100%'};
    var16 = var6[var11];
    var16 = var12.bind(var1)(var16);
    var16 = var16.radii;
    var16 = var16.lg;
    var9['borderRadius'] = var16;
    var4['gdmShareInviteLink'] = var9;
    var9 = {};
    var9['marginTop'] = var17;
    var4['gdmShareInviteLinkNoRelationships'] = var9;
    var9 = {};
    var9['marginLeft'] = var15;
    var4['ctaLabel'] = var9;
    var9 = {'flexDirection': 'row', 'flexWrap': 'wrap'};
    var4['ctaContainer'] = var9;
    var16 = 'center';
    var9 = {'flexDirection': 'row', 'alignItems': 'center'};
    var4['ctaButton'] = var9;
    var9 = {};
    var9['paddingRight'] = var18;
    var4['ctaAddRoles'] = var9;
    var9 = {};
    var9['marginBottom'] = var17;
    var4['avatar'] = var9;
    var9 = {};
    var9['marginBottom'] = var17;
    var4['avatarRedesign'] = var9;
    var9 = {'paddingHorizontal': 8, 'alignItems': 'center'};
    var4['centerHeader'] = var9;
    var9 = {};
    var9['textAlign'] = var16;
    var4['gdmText'] = var9;
    var9 = {'marginBottom': 8, 'textAlign': 'center'};
    var4['dmTitle'] = var9;
    var9 = {};
    var9['marginTop'] = var15;
    var4['dmBeginningMessage'] = var9;
    var9 = {};
    var9['marginTop'] = var14;
    var4['provisionalAccountExplainer'] = var9;
    var9 = {'marginTop': 8, 'marginLeft': 8, 'height': 26};
    var4['mutualGuildsLabel'] = var9;
    var9 = {'flexDirection': 'row', 'alignItems': 'center', 'marginTop': 6};
    var4['mutualGuildsContainer'] = var9;
    var9 = {'width': 64, 'height': 64, 'borderRadius': null, 'backgroundColor': null, 'justifyContent': 'center', 'alignItems': 'center'};
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.xxl;
    var9['borderRadius'] = var14;
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_MOD_MUTED;
    var9['backgroundColor'] = var14;
    var4['iconContainer'] = var9;
    var9 = {};
    var9['lineHeight'] = var13;
    var4['threadDetails'] = var9;
    var9 = {'paddingRight': 4, 'paddingTop': 2};
    var4['threadCreatorRoleDot'] = var9;
    var9 = {'marginTop': 8, 'display': 'flex', 'flexDirection': 'row', 'flexWrap': 'wrap'};
    var4['tagContainer'] = var9;
    var9 = {'borderRadius': null, 'backgroundColor': null, 'height': 24, 'width': 24, 'padding': 4, 'alignContent': 'center'};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.round;
    var9['borderRadius'] = var13;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.STATUS_POSITIVE;
    var9['backgroundColor'] = var11;
    var4['unmutedNotificationContainer'] = var9;
    var9 = {'width': 16, 'height': 16};
    var4['unmutedNotification'] = var9;
    var9 = {'marginTop': 16, 'flexDirection': 'row', 'flexWrap': 'wrap', 'alignItems': 'center', 'gap': 8};
    var4['dmButtonRow'] = var9;
    var9 = {'flexDirection': 'column', 'gap': 8};
    var4['pendingIncoming'] = var9;
    var9 = {'flexDirection': 'row', 'flexWrap': 'wrap', 'gap': 8};
    var4['pendingIncomingButtons'] = var9;
    var9 = {};
    var9['marginRight'] = var10;
    var4['appDMButtonIcon'] = var9;
    var9 = {'width': 32, 'height': 32};
    var4['formCtaIcon'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot45 = var4;
    var4 = function ChatBeginningRowGuildDefaultChannel(arg1) {
        _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
            var1 = arg1;
            var10 = var1.guild;
            var _closure2_slot0 = var10;
            var19 = var1.channel;
            var _closure2_slot1 = var19;
            var4 = undefined;
            var _closure2_slot2 = var4;
            var1 = function _addServerIcon() {
                var4 = undefined;
                var1 = undefined;
                var3 = _closure1_slot4;
                var2 = function* () {
                    var1 = function* anon_0_() {
                        _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0027_ip = 174; continue _fun0027 }
case 150:
                            var6 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var8 = 59;
                            var2 = var7[var8];
                            var3 = undefined;
                            var10 = var6.bind(var3)(var2);
                            var9 = var10.init;
                            var2 = _closure2_slot2;
                            var2 = var9.bind(var10)(var2);
                            var2 = 60;
                            var2 = var7[var2];
                            var7 = var6.bind(var3)(var2);
                            var6 = var7.openImagePicker;
                            var2 = {};
                            var9 = _closure1_slot35;
                            var2['size'] = var9;
                            var2 = var6.bind(var7)(var2);
                            SaveGenerator(address=90);
case 115:
                            return var2;
case 175:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                            if(var6) { _fun0027_ip = 176; continue _fun0027 }
case 177:
                            var12 = var2.base64;
                            var6 = null;
                            if(!(var6 != var12)) { _fun0027_ip = 103; continue _fun0027 }
case 178:
                            var7 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var9 = var6[var8];
                            var11 = var7.bind(var3)(var9);
                            var10 = var11.updateIcon;
                            var9 = _closure2_slot2;
                            var9 = var10.bind(var11)(var9, var12);
                            var6 = var6[var8];
                            var7 = var7.bind(var3)(var6);
                            var6 = var7.open;
                            var5 = _closure2_slot2;
                            var4 = _closure1_slot30;
                            var4 = var4.LANDING;
                            var4 = var6.bind(var7)(var5, var4);
case 103:
                            return var3;
case 176:
                            return var2;
case 174:
                            return var1;
                        }
                    };
                    return var1;
                };
                var4 = var3.bind(var4)(var2);
                _closure2_slot4 = var4;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var _closure2_slot4 = var1;
            var1 = var10.id;
            _closure2_slot2 = var1;
            var1 = _closure1_slot45;
            var16 = var1.bind(var4)();
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var1 = 54;
            var2 = var13[var1];
            var3 = var12.bind(var4)(var2);
            var2 = var3.useCompletedStates;
            var2 = var2.bind(var3)(var10);
            var15 = var2.guildPopulated;
            var18 = var2.guildPersonalized;
            var1 = var13[var1];
            var2 = var12.bind(var4)(var1);
            var1 = var2.usePermissions;
            var1 = var1.bind(var2)(var19, var10);
            var2 = var1.canInvite;
            var3 = var1.canManageGuild;
            var5 = 43;
            var1 = var13[var5];
            var9 = var12.bind(var4)(var1);
            var8 = var9.useStateFromStores;
            var1 = _closure1_slot24;
            var6 = new Array(1);
            var6[0] = var1;
            var1 = function() {
                var2 = _closure1_slot24;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var9 = var8.bind(var9)(var6, var1);
            var6 = _closure1_slot1;
            var1 = 55;
            var1 = var13[var1];
            var14 = var6.bind(var4)(var1);
            var8 = null;
            var11 = var8 != var9;
            var1 = 'ChatBeginningRowGuildDefaultChannel: currentUser cannot be undefined';
            var1 = var14.bind(var4)(var11, var1);
            var1 = _closure1_slot14;
            var9 = var1.bind(var4)(var10, var9);
            var1 = 56;
            var1 = var13[var1];
            var11 = var6.bind(var4)(var1);
            var6 = var11.extractTimestamp;
            var1 = var10.id;
            var11 = var6.bind(var11)(var1);
            var1 = global;
            var14 = var1.Date;
            var6 = var14.now;
            var14 = var6.bind(var14)();
            var6 = _closure1_slot36;
            var6 = var14 - var6;
            var14 = var11 < var6;
            var6 = 48;
            var6 = var13[var6];
            var11 = var12.bind(var4)(var6);
            var6 = var11.isPrivateGuildChannel;
            var11 = var6.bind(var11)(var19);
            var6 = 57;
            var6 = var13[var6];
            var19 = var12.bind(var4)(var6);
            var6 = var19.useIsEligibleForGuildProgress;
            var6 = var6.bind(var19)(var10);
            var5 = var13[var5];
            var19 = var12.bind(var4)(var5);
            var13 = var19.useStateFromStoresObject;
            var5 = _closure1_slot11;
            var12 = new Array(1);
            var12[0] = var5;
            var5 = function() {
                var2 = _closure1_slot11;
                var1 = var2.getErrors;
                var1 = var1.bind(var2)();
                return var1;
            };
            var5 = var13.bind(var19)(var12, var5);
            var _closure2_slot3 = var5;
            var19 = _closure1_slot5;
            var13 = var19.useLayoutEffect;
            var5 = var5.message;
            var12 = new Array(1);
            var12[0] = var5;
            var5 = function() {
                _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
                    var2 = _closure2_slot3;
                    var3 = var2.message;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0028_ip = 84; continue _fun0028 }
case 125:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 58;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.presentError;
                    var1 = _closure2_slot3;
                    var1 = var1.message;
                    var1 = var2.bind(var3)(var1);
case 84:
                    var1 = undefined;
                    return var1;
                }
            };
            var5 = var13.bind(var19)(var5, var12);
            var12 = undefined;
            if(!var3) { _fun0026_ip = 179; continue _fun0026 }
case 70:
            var13 = _closure1_slot42;
            var21 = _closure1_slot1;
            var23 = _closure1_slot2;
            var3 = 61;
            var3 = var23[var3];
            var5 = var21.bind(var4)(var3);
            var3 = {};
            var19 = function addServerIcon() {
                var1 = undefined;
                var4 = _closure2_slot4;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var3['onPress'] = var19;
            var19 = {};
            var20 = 62;
            var20 = var23[var20];
            var20 = var21.bind(var4)(var20);
            var19['uri'] = var20;
            var3['source'] = var19;
            var19 = var16.formCtaIcon;
            var3['iconStyle'] = var19;
            var22 = _closure1_slot0;
            var19 = 29;
            var20 = var23[var19];
            var20 = var22.bind(var4)(var20);
            var21 = var20.intl;
            var20 = var21.string;
            var19 = var23[var19];
            var19 = var22.bind(var4)(var19);
            var19 = var19.t;
            var19 = var19.Yhi9/N;
            var19 = var20.bind(var21)(var19);
            var3['title'] = var19;
            var3['isCompleted'] = var18;
            var18 = _closure1_slot39;
            var18 = var18.CHANNEL_WELCOME;
            var3['analyticsSetupType'] = var18;
            var18 = _closure1_slot38;
            var18 = var18.PERSONALIZE_SERVER;
            var3['analyticsAction'] = var18;
            var12 = var13.bind(var4)(var5, var3);
case 179:
            var13 = undefined;
            if(!var2) { _fun0026_ip = 180; continue _fun0026 }
case 181:
            var5 = _closure1_slot42;
            var19 = _closure1_slot1;
            var20 = _closure1_slot2;
            var2 = 61;
            var2 = var20[var2];
            var3 = var19.bind(var4)(var2);
            var2 = {};
            var17 = function inviteFriends() {
                _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var3 = var1.vanityURLCode;
                    var1 = null;
                    if(!(var1 == var3)) { _fun0029_ip = 182; continue _fun0029 }
case 183:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 63;
                    var3 = var3[var1];
                    var1 = undefined;
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.showInstantInviteActionSheet;
                    var3 = _closure2_slot1;
                    var1 = {};
                    var6 = _closure1_slot32;
                    var6 = var6.WELCOME_MESSAGE;
                    var1['source'] = var6;
                    var1 = var4.bind(var5)(var3, var1);
                    _fun0029_ip = 184; continue _fun0029;
case 182:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 63;
                    var4 = var4[var3];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.showVanityUrlInviteActionSheet;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var1 = _closure1_slot32;
                    var1 = var1.WELCOME_MESSAGE;
                    var1 = var4.bind(var5)(var3, var2, var1);
case 184:
                    var1 = undefined;
                    return var1;
                }
            };
            var2['onPress'] = var17;
            var17 = {};
            var18 = 64;
            var18 = var20[var18];
            var18 = var19.bind(var4)(var18);
            var17['uri'] = var18;
            var2['source'] = var17;
            var16 = var16.formCtaIcon;
            var2['iconStyle'] = var16;
            var19 = _closure1_slot0;
            var16 = 29;
            var17 = var20[var16];
            var17 = var19.bind(var4)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var16 = var20[var16];
            var16 = var19.bind(var4)(var16);
            var16 = var16.t;
            var16 = var16.q9n0Ta;
            var16 = var17.bind(var18)(var16);
            var2['title'] = var16;
            var2['isCompleted'] = var15;
            var15 = _closure1_slot39;
            var15 = var15.CHANNEL_WELCOME;
            var2['analyticsSetupType'] = var15;
            var15 = _closure1_slot38;
            var15 = var15.INVITE;
            var2['analyticsAction'] = var15;
            var13 = var5.bind(var4)(var3, var2);
case 180:
            var15 = _closure1_slot0;
            var2 = _closure1_slot2;
            var21 = 29;
            var3 = var2[var21];
            var3 = var15.bind(var4)(var3);
            var5 = var3.intl;
            var3 = var5.string;
            var2 = var2[var21];
            var2 = var15.bind(var4)(var2);
            var2 = var2.t;
            if(var14) { _fun0026_ip = 185; continue _fun0026 }
case 186:
            if(var9) { _fun0026_ip = 187; continue _fun0026 }
case 188:
            var9 = var2.ezm+/j;
            var9 = var3.bind(var5)(var9);
            _fun0026_ip = 189; continue _fun0026;
case 187:
            var14 = var2["1ach9C"];
            var9 = var3.bind(var5)(var14);
case 189:
            _fun0026_ip = 190; continue _fun0026;
case 185:
            var2 = var2.gwyU/J;
            var9 = var3.bind(var5)(var2);
case 190:
            var15 = !var6;
            if(!var15) { _fun0026_ip = 191; continue _fun0026 }
case 192:
            var2 = var8 != var13;
            if(var2) { _fun0026_ip = 193; continue _fun0026 }
case 194:
            var2 = var8 != var12;
case 193:
            var15 = var2;
case 191:
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 65;
            var2 = var5[var2];
            var5 = var3.bind(var4)(var2);
            var3 = var5.getArticleURL;
            var2 = _closure1_slot31;
            var2 = var2.GUILD_GETTING_STARTED;
            var5 = var3.bind(var5)(var2);
            var1 = var1.HermesInternal;
            var3 = var1.concat;
            var2 = '';
            var1 = '?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-new-user&utm_content=--t%3Apm';
            var14 = var3.bind(var2)(var5, var1);
            var3 = _closure1_slot44;
            var2 = _closure1_slot43;
            var1 = {};
            var5 = new Array(2);
            var5[0] = var9;
            var8 = null;
            if(!var15) { _fun0026_ip = 195; continue _fun0026 }
case 196:
            var17 = _closure1_slot44;
            var16 = _closure1_slot43;
            var9 = {};
            var19 = _closure1_slot0;
            var18 = _closure1_slot2;
            var20 = var18[var21];
            var20 = var19.bind(var4)(var20);
            var22 = var20.intl;
            var20 = var22.format;
            var18 = var18[var21];
            var18 = var19.bind(var4)(var18);
            var18 = var18.t;
            var19 = var18.UOtD32;
            var18 = {};
            var18['guideURL'] = var14;
            var19 = var20.bind(var22)(var19, var18);
            var18 = [' '];
            var18[1] = var19;
            var9['children'] = var18;
            var8 = var17.bind(var4)(var16, var9);
case 195:
            var5[1] = var8;
            var1['children'] = var5;
            var16 = var3.bind(var4)(var2, var1);
            var3 = _closure1_slot44;
            var1 = _closure1_slot5;
            var2 = var1.Fragment;
            var1 = {};
            var9 = _closure1_slot42;
            var8 = _closure1_slot48;
            var5 = {};
            var18 = _closure1_slot0;
            var17 = _closure1_slot2;
            var19 = var17[var21];
            var19 = var18.bind(var4)(var19);
            var20 = var19.intl;
            var19 = var20.formatToPlainString;
            var17 = var17[var21];
            var17 = var18.bind(var4)(var17);
            var17 = var17.t;
            var18 = var17.j59F/c;
            var17 = {};
            var21 = var10.name;
            var17['guildName'] = var21;
            var17 = var19.bind(var20)(var18, var17);
            var5['title'] = var17;
            var5['subtitle'] = var16;
            var5['isPrivate'] = var11;
            var11 = undefined;
            if(!var15) { _fun0026_ip = 197; continue _fun0026 }
case 198:
            var11 = var14;
case 197:
            var5['subtitleLink'] = var11;
            var8 = var9.bind(var4)(var8, var5);
            var5 = new Array(2);
            var5[0] = var8;
            if(var6) { _fun0026_ip = 199; continue _fun0026 }
case 200:
            var9 = _closure1_slot44;
            var8 = _closure1_slot43;
            var6 = {};
            var11 = new Array(2);
            var11[0] = var13;
            var11[1] = var12;
            var6['children'] = var11;
            var6 = var9.bind(var4)(var8, var6);
            _fun0026_ip = 201; continue _fun0026;
case 199:
            var9 = _closure1_slot42;
            var8 = _closure1_slot1;
            var11 = _closure1_slot2;
            var7 = 66;
            var7 = var11[var7];
            var8 = var8.bind(var4)(var7);
            var7 = {};
            var7['guild'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 201:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot46 = var4;
    var4 = 113;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'components_native/chat/ChatBeginningRow.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ChatBeginningRow(arg1) {
        _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
case 0:
            var3 = arg1;
            var9 = var3.channelId;
            var _closure2_slot0 = var9;
            var2 = var3.guildId;
            var _closure2_slot1 = var2;
            var2 = var3.shouldRender;
            var15 = var3.showingSpamBanner;
            var3 = _closure1_slot45;
            var4 = undefined;
            var12 = var3.bind(var4)();
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 43;
            var8 = var7[var3];
            var13 = var5.bind(var4)(var8);
            var11 = var13.useStateFromStores;
            var8 = _closure1_slot17;
            var10 = new Array(1);
            var10[0] = var8;
            var8 = function() {
                var3 = _closure1_slot17;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var11 = var11.bind(var13)(var10, var8);
            var3 = var7[var3];
            var8 = var5.bind(var4)(var3);
            var7 = var8.useStateFromStores;
            var3 = _closure1_slot20;
            var5 = new Array(1);
            var5[0] = var3;
            var3 = function() {
                var3 = _closure1_slot20;
                var2 = var3.getGuild;
                var1 = _closure2_slot1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var16 = var7.bind(var8)(var5, var3);
            var5 = _closure1_slot5;
            var3 = var5.useState;
            var7 = var3.bind(var5)(var4);
            var5 = _closure1_slot3;
            var3 = 2;
            var5 = var5.bind(var4)(var7, var3);
            var13 = 0;
            var14 = var5[var13];
            var3 = 1;
            var3 = var5[var3];
            var _closure2_slot2 = var3;
            if(!var2) { _fun0030_ip = 202; continue _fun0030 }
case 104:
            var3 = null;
            var2 = var3 != var11;
case 202:
            var5 = null;
            var10 = null;
            if(!var2) { _fun0030_ip = 15; continue _fun0030 }
case 203:
            var7 = _closure1_slot13;
            var3 = var7.has;
            var2 = var11.type;
            var2 = var3.bind(var7)(var2);
            if(var2) { _fun0030_ip = 204; continue _fun0030 }
case 9:
            var2 = var11.isDM;
            var2 = var2.bind(var11)();
            if(var2) { _fun0030_ip = 205; continue _fun0030 }
case 206:
            var2 = var11.isGroupDM;
            var2 = var2.bind(var11)();
            if(var2) { _fun0030_ip = 42; continue _fun0030 }
case 207:
            var3 = var5 != var16;
            var2 = null;
            if(!var3) { _fun0030_ip = 208; continue _fun0030 }
case 209:
            var8 = _closure1_slot42;
            var7 = _closure1_slot53;
            var3 = {};
            var3['guild'] = var16;
            var3['channel'] = var11;
            var2 = var8.bind(var4)(var7, var3);
case 208:
            _fun0030_ip = 210; continue _fun0030;
case 42:
            var8 = _closure1_slot42;
            var7 = _closure1_slot59;
            var3 = {};
            var3['channel'] = var11;
            var2 = var8.bind(var4)(var7, var3);
case 210:
            _fun0030_ip = 211; continue _fun0030;
case 205:
            var8 = _closure1_slot42;
            var7 = _closure1_slot57;
            var3 = {};
            var3['channel'] = var11;
            var3['showingSpamBanner'] = var15;
            var2 = var8.bind(var4)(var7, var3);
case 211:
            _fun0030_ip = 61; continue _fun0030;
case 204:
            var8 = _closure1_slot42;
            var7 = _closure1_slot51;
            var3 = {};
            var3['channel'] = var11;
            var2 = var8.bind(var4)(var7, var3);
case 61:
            var10 = var2;
case 15:
            var7 = _closure1_slot5;
            var3 = var7.useCallback;
            var2 = function(arg1) {
                var1 = arg1;
                var1 = var1.nativeEvent;
                var1 = var1.layout;
                var1 = var1.height;
                var _closure3_slot0 = var1;
                var3 = _closure2_slot2;
                var1 = undefined;
                var2 = function(arg1) {
                    _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
case 0:
                        var1 = arg1;
                        var2 = null;
                        if(!(var2 != var1)) { _fun0031_ip = 212; continue _fun0031 }
case 213:
                        var2 = global;
                        var4 = var2.Math;
                        var3 = var4.abs;
                        var2 = _closure3_slot0;
                        var2 = var1 - var2;
                        var3 = var3.bind(var4)(var2);
                        var2 = 1;
                        if(!(!(var3 < var2))) { _fun0031_ip = 116; continue _fun0031 }
case 212:
                        var1 = _closure3_slot0;
case 116:
                        return var1;
                    }
                };
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var1 = new Array(0);
            var11 = var3.bind(var7)(var2, var1);
            var3 = _closure1_slot42;
            var2 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 112;
            var1 = var7[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var8 = var12.container;
            var7 = new Array(2);
            var7[0] = var8;
            var8 = {};
            var15 = var5 != var10;
            var13 = 0;
            if(!var15) { _fun0030_ip = 214; continue _fun0030 }
case 215:
            var13 = var14;
case 214:
            var8['height'] = var13;
            var7[1] = var8;
            var1['style'] = var7;
            var5 = var5 != var10;
            if(!var5) { _fun0030_ip = 216; continue _fun0030 }
case 217:
            var8 = _closure1_slot42;
            var7 = _closure1_slot7;
            var6 = {};
            var12 = var12.contentWrapper;
            var6['style'] = var12;
            var6['onLayout'] = var11;
            var6['children'] = var10;
            var5 = var8.bind(var4)(var7, var6, var9);
case 216:
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();