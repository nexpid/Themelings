// app/modules/in_app_notifications/native/MessageNotificationHeader.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function LocationText(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var13 = var2.channel;
            var _closure2_slot0 = var13;
            var12 = var2.parentChannel;
            var _closure2_slot1 = var12;
            var8 = var2.author;
            var9 = var2.location;
            var4 = undefined;
            var _closure2_slot3 = var4;
            var2 = _closure1_slot11;
            var10 = var2.bind(var4)();
            var _closure2_slot2 = var10;
            var5 = null;
            var2 = var5 != var8;
            var11 = 'mobile-text-heading-primary';
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var11 = 'text-muted';
case 2:
            _closure2_slot3 = var11;
            var7 = _closure1_slot2;
            var3 = var7.useMemo;
            var2 = new Array(4);
            var2[0] = var13;
            var2[1] = var12;
            var12 = var10.icon;
            var2[2] = var12;
            var2[3] = var11;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var7 = _closure2_slot0;
                    var3 = _closure2_slot1;
                    var4 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var9 = 9;
                    var1 = var1[var9];
                    var8 = undefined;
                    var1 = var4.bind(var8)(var1);
                    var1 = var1.ChannelTypesSets;
                    var5 = var1.PRIVATE_CHANNEL;
                    var4 = var5.has;
                    var1 = var7.type;
                    var1 = var4.bind(var5)(var1);
                    var5 = undefined;
                    if(var1) { _fun0002_ip = 4; continue _fun0002 }
case 3:
                    var4 = var7.type;
                    var10 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var9];
                    var1 = var10.bind(var8)(var1);
                    var1 = var1.ChannelTypes;
                    var1 = var1.PUBLIC_THREAD;
                    if(!(var4 !== var1)) { _fun0002_ip = 5; continue _fun0002 }
case 6:
                    var4 = _closure1_slot0;
                    var10 = _closure1_slot1;
                    var1 = 12;
                    var1 = var10[var1];
                    var4 = var4.bind(var8)(var1);
                    var1 = var4.getSimpleChannelIconComponent;
                    var1 = var1.bind(var4)(var7);
                    _fun0002_ip = 7; continue _fun0002;
case 5:
                    var4 = null;
                    if(!(var4 != var3)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var4 = var3.type;
                    var7 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var3 = var3[var9];
                    var3 = var7.bind(var8)(var3);
                    var3 = var3.ChannelTypes;
                    var3 = var3.GUILD_FORUM;
                    if(!(var4 !== var3)) { _fun0002_ip = 10; continue _fun0002 }
case 8:
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var3 = 11;
                    var3 = var7[var3];
                    var3 = var4.bind(var8)(var3);
                    var3 = var3.ThreadIcon;
                    _fun0002_ip = 11; continue _fun0002;
case 10:
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot1;
                    var4 = 10;
                    var4 = var9[var4];
                    var4 = var7.bind(var8)(var4);
                    var3 = var4.ChatIcon;
case 11:
                    var1 = var3;
case 7:
                    var5 = var1;
case 4:
                    var1 = null;
                    var3 = var1 != var5;
                    if(!var3) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                    var4 = _closure1_slot2;
                    var3 = var4.createElement;
                    var2 = {};
                    var7 = _closure2_slot3;
                    var2['color'] = var7;
                    var6 = _closure2_slot2;
                    var6 = var6.icon;
                    var2['style'] = var6;
                    var1 = var3.bind(var4)(var5, var2);
case 12:
                    return var1;
                }
            };
            var7 = var3.bind(var7)(var1, var2);
            var3 = _closure1_slot8;
            var2 = _closure1_slot3;
            var1 = {};
            var12 = var10.secondaryTextContainer;
            var1['style'] = var12;
            var8 = var5 != var8;
            if(!var8) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var13 = _closure1_slot7;
            var12 = _closure1_slot0;
            var14 = _closure1_slot1;
            var5 = 7;
            var5 = var14[var5];
            var5 = var12.bind(var4)(var5);
            var12 = var5.Text;
            var5 = {'variant': 'text-md/bold', 'color': null, 'maxFontSizeMultiplier': 1.75, 'style': null, 'children': '·'};
            var5['color'] = var11;
            var14 = var10.separator;
            var5['style'] = var14;
            var8 = var13.bind(var4)(var12, var5);
case 14:
            var5 = new Array(3);
            var5[0] = var8;
            var5[1] = var7;
            var8 = _closure1_slot7;
            var7 = _closure1_slot0;
            var12 = _closure1_slot1;
            var6 = 7;
            var6 = var12[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.Text;
            var6 = {'variant': 'text-md/semibold', 'color': null, 'lineClamp': 1};
            var6['color'] = var11;
            var10 = var10.secondaryText;
            var6['style'] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var4 = global;
    var10 = var4.Object;
    var9 = var10.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var7);
    var1 = 0;
    var9 = var6[var1];
    var7 = metroImportAll;
    var1 = undefined;
    var7 = var7.bind(var1)(var9);
    var _closure1_slot2 = var7;
    var10 = 1;
    var7 = var6[var10];
    var7 = var5.bind(var1)(var7);
    var7 = var7.View;
    var _closure1_slot3 = var7;
    var11 = 2;
    var7 = var6[var11];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var7 = 3;
    var7 = var6[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot5 = var7;
    var7 = 4;
    var7 = var6[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot6 = var7;
    var7 = 5;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var8 = var7.jsx;
    var _closure1_slot7 = var8;
    var7 = var7.jsxs;
    var _closure1_slot8 = var7;
    var9 = var4.Object;
    var8 = var9.freeze;
    var7 = {};
    var12 = 12;
    var7['radius'] = var12;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot9 = var7;
    var8 = var4.Object;
    var7 = var8.freeze;
    var4 = {'top': 8, 'right': 8, 'bottom': 8, 'left': 8};
    var4 = var7.bind(var8)(var4);
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'flexDirection': 'row', 'alignItems': 'center'};
    var4['container'] = var9;
    var9 = {'flex': 1, 'flexDirection': 'row', 'alignItems': 'center'};
    var4['headerContent'] = var9;
    var9 = {};
    var9['flexShrink'] = var10;
    var4['primaryText'] = var9;
    var9 = {'flexDirection': 'row', 'alignItems': 'center', 'marginLeft': 2, 'gap': 2, 'flex': 1, 'overflow': 'hidden'};
    var4['secondaryTextContainer'] = var9;
    var9 = {};
    var9['marginHorizontal'] = var11;
    var4['separator'] = var9;
    var9 = {'width': 16, 'height': 16};
    var4['icon'] = var9;
    var9 = {};
    var9['flex'] = var10;
    var4['secondaryText'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot11 = var4;
    var4 = 17;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/in_app_notifications/native/MessageNotificationHeader.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function MessageNotificationHeader(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var20 = var1.channel;
            var19 = var1.parentChannel;
            var2 = var1.guild;
            var18 = var1.author;
            var6 = var1.expanded;
            var8 = var1.onDismiss;
            var _closure2_slot0 = var8;
            var1 = _closure1_slot11;
            var4 = undefined;
            var17 = var1.bind(var4)();
            var3 = _closure1_slot0;
            var5 = _closure1_slot1;
            var1 = 13;
            var1 = var5[var1];
            var7 = var3.bind(var4)(var1);
            var5 = var7.useStateFromStores;
            var1 = _closure1_slot4;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var1 = _closure1_slot4;
                var1 = var1.roleStyle;
                return var1;
            };
            var9 = var5.bind(var7)(var3, var1);
            var7 = null;
            var3 = var7 == var18;
            var1 = undefined;
            if(var3) { _fun0003_ip = 16; continue _fun0003 }
case 17:
            var1 = var18.colorString;
case 16:
            var5 = 'username';
            var3 = undefined;
            if(!(var5 === var9)) { _fun0003_ip = 18; continue _fun0003 }
case 19:
            var3 = var1;
case 18:
            var1 = var7 != var3;
            var22 = undefined;
            if(!var1) { _fun0003_ip = 20; continue _fun0003 }
case 21:
            var1 = {};
            var1['color'] = var3;
            var22 = var1;
case 20:
            var1 = {};
            var1['channel'] = var20;
            var1['parentChannel'] = var19;
            var1['guild'] = var2;
            var3 = var1.channel;
            var14 = var1.parentChannel;
            var2 = var1.guild;
            var9 = _closure1_slot0;
            var1 = _closure1_slot1;
            var5 = 8;
            var11 = var1[var5];
            var16 = var9.bind(var4)(var11);
            var15 = var16.computeChannelName;
            var13 = _closure1_slot6;
            var11 = _closure1_slot5;
            var11 = var15.bind(var16)(var3, var13, var11);
            var3 = var3.type;
            var13 = 9;
            var1 = var1[var13];
            var1 = var9.bind(var4)(var1);
            var1 = var1.ChannelTypes;
            var1 = var1.GROUP_DM;
            var21 = var11;
            if(!(var1 !== var3)) { _fun0003_ip = 22; continue _fun0003 }
case 23:
            var9 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var13];
            var1 = var9.bind(var4)(var1);
            var1 = var1.ChannelTypes;
            var1 = var1.GUILD_FORUM;
            if(!(var1 !== var3)) { _fun0003_ip = 24; continue _fun0003 }
case 25:
            var9 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var13];
            var1 = var9.bind(var4)(var1);
            var1 = var1.ChannelTypes;
            var1 = var1.GUILD_TEXT;
            if(!(var1 !== var3)) { _fun0003_ip = 24; continue _fun0003 }
case 26:
            var9 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var13];
            var1 = var9.bind(var4)(var1);
            var1 = var1.ChannelTypes;
            var1 = var1.GUILD_ANNOUNCEMENT;
            if(!(var1 !== var3)) { _fun0003_ip = 24; continue _fun0003 }
case 27:
            var9 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var13];
            var1 = var9.bind(var4)(var1);
            var1 = var1.ChannelTypes;
            var1 = var1.ANNOUNCEMENT_THREAD;
            if(!(var1 !== var3)) { _fun0003_ip = 28; continue _fun0003 }
case 29:
            var9 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var13];
            var1 = var9.bind(var4)(var1);
            var1 = var1.ChannelTypes;
            var1 = var1.PUBLIC_THREAD;
            if(!(var1 !== var3)) { _fun0003_ip = 28; continue _fun0003 }
case 30:
            var9 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var13];
            var1 = var9.bind(var4)(var1);
            var1 = var1.ChannelTypes;
            var1 = var1.PRIVATE_THREAD;
            var21 = null;
            if(!(var1 === var3)) { _fun0003_ip = 22; continue _fun0003 }
case 28:
            var1 = var7 != var14;
            var13 = null;
            if(!var1) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var3 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var5];
            var9 = var3.bind(var4)(var1);
            var5 = var9.computeChannelName;
            var3 = _closure1_slot6;
            var1 = _closure1_slot5;
            var13 = var5.bind(var9)(var14, var3, var1);
case 31:
            if(!(var7 == var13)) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var1 = var11;
            if(!(var7 != var2)) { _fun0003_ip = 35; continue _fun0003 }
case 36:
            var14 = var2.name;
            var3 = global;
            var3 = var3.HermesInternal;
            var9 = var3.concat;
            var5 = '';
            var3 = ', ';
            var1 = var9.bind(var5)(var11, var3, var14);
case 35:
            _fun0003_ip = 37; continue _fun0003;
case 33:
            var3 = global;
            var3 = var3.HermesInternal;
            var9 = var3.concat;
            var5 = '';
            var3 = ', ';
            var1 = var9.bind(var5)(var11, var3, var13);
case 37:
            var21 = var1;
            _fun0003_ip = 22; continue _fun0003;
case 24:
            var3 = var7 != var2;
            var1 = null;
            if(!var3) { _fun0003_ip = 38; continue _fun0003 }
case 39:
            var9 = var2.name;
            var2 = global;
            var2 = var2.HermesInternal;
            var5 = var2.concat;
            var3 = '';
            var2 = ', ';
            var1 = var5.bind(var3)(var11, var2, var9);
case 38:
            var21 = var1;
case 22:
            var3 = _closure1_slot8;
            var2 = _closure1_slot3;
            var1 = {};
            var5 = var17.container;
            var1['style'] = var5;
            var11 = _closure1_slot8;
            var9 = _closure1_slot3;
            var5 = {};
            var13 = var17.headerContent;
            var5['style'] = var13;
            var14 = var7 != var18;
            if(!var14) { _fun0003_ip = 40; continue _fun0003 }
case 41:
            var16 = _closure1_slot7;
            var15 = _closure1_slot0;
            var23 = _closure1_slot1;
            var13 = 7;
            var13 = var23[var13];
            var13 = var15.bind(var4)(var13);
            var15 = var13.Text;
            var13 = {'variant': 'text-md/semibold', 'color': 'mobile-text-heading-primary', 'lineClamp': 1};
            var23 = var17.primaryText;
            var17 = new Array(2);
            var17[0] = var23;
            var17[1] = var22;
            var13['style'] = var17;
            var17 = var18.nick;
            var13['children'] = var17;
            var14 = var16.bind(var4)(var15, var13);
case 40:
            var13 = new Array(2);
            var13[0] = var14;
            var14 = var7 != var21;
            if(!var14) { _fun0003_ip = 42; continue _fun0003 }
case 43:
            var17 = _closure1_slot7;
            var16 = _closure1_slot12;
            var15 = {};
            var15['location'] = var21;
            var15['channel'] = var20;
            var15['parentChannel'] = var19;
            var15['author'] = var18;
            var14 = var17.bind(var4)(var16, var15);
case 42:
            var13[1] = var14;
            var5['children'] = var13;
            var9 = var11.bind(var4)(var9, var5);
            var5 = new Array(2);
            var5[0] = var9;
            if(!var6) { _fun0003_ip = 44; continue _fun0003 }
case 45:
            var6 = var7 != var8;
case 44:
            if(!var6) { _fun0003_ip = 46; continue _fun0003 }
case 47:
            var9 = _closure1_slot7;
            var11 = _closure1_slot0;
            var13 = _closure1_slot1;
            var7 = 14;
            var7 = var13[var7];
            var7 = var11.bind(var4)(var7);
            var8 = var7.PressableOpacity;
            var7 = {};
            var14 = 'button';
            var7['accessibilityRole'] = var14;
            var14 = 15;
            var15 = var13[var14];
            var15 = var11.bind(var4)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var14 = var13[var14];
            var14 = var11.bind(var4)(var14);
            var14 = var14.t;
            var14 = var14.LnEgqX;
            var14 = var15.bind(var16)(var14);
            var7['accessibilityLabel'] = var14;
            var14 = _closure1_slot10;
            var7['hitSlop'] = var14;
            var14 = _closure1_slot9;
            var7['androidRippleConfig'] = var14;
            var12 = function onPress() {
                var3 = _closure2_slot0;
                var2 = undefined;
                var1 = 'close_from_expanded';
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var7['onPress'] = var12;
            var12 = _closure1_slot7;
            var10 = 16;
            var10 = var13[var10];
            var10 = var11.bind(var4)(var10);
            var11 = var10.XSmallIcon;
            var10 = {};
            var13 = 'icon-subtle';
            var10['color'] = var13;
            var13 = {'height': 20, 'width': 20};
            var10['style'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 46:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var4;
    var2 = function SimpleNotificationHeader(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var8 = var1.text;
            var14 = var1.secondaryText;
            var10 = var1.labelStyle;
            var1 = _closure1_slot11;
            var4 = undefined;
            var15 = var1.bind(var4)();
            var3 = _closure1_slot8;
            var2 = _closure1_slot3;
            var1 = {};
            var5 = var15.container;
            var1['style'] = var5;
            var7 = _closure1_slot7;
            var6 = _closure1_slot0;
            var5 = _closure1_slot1;
            var16 = 7;
            var5 = var5[var16];
            var5 = var6.bind(var4)(var5);
            var6 = var5.Text;
            var5 = {'variant': 'text-md/semibold', 'color': 'mobile-text-heading-primary', 'lineClamp': 1};
            var11 = var15.primaryText;
            var9 = new Array(2);
            var9[0] = var11;
            var9[1] = var10;
            var5['style'] = var9;
            var5['children'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var6 = null;
            var6 = var6 != var14;
            if(!var6) { _fun0004_ip = 48; continue _fun0004 }
case 49:
            var9 = _closure1_slot8;
            var8 = _closure1_slot3;
            var7 = {};
            var10 = var15.secondaryTextContainer;
            var7['style'] = var10;
            var18 = _closure1_slot7;
            var12 = _closure1_slot0;
            var11 = _closure1_slot1;
            var10 = var11[var16];
            var10 = var12.bind(var4)(var10);
            var17 = var10.Text;
            var10 = {'variant': 'text-md/bold', 'color': 'text-muted', 'maxFontSizeMultiplier': 1.75, 'style': null, 'children': '·'};
            var19 = var15.separator;
            var10['style'] = var19;
            var17 = var18.bind(var4)(var17, var10);
            var10 = new Array(2);
            var10[0] = var17;
            var13 = _closure1_slot7;
            var11 = var11[var16];
            var11 = var12.bind(var4)(var11);
            var12 = var11.Text;
            var11 = {'variant': 'text-md/semibold', 'color': 'text-muted', 'lineClamp': 1};
            var15 = var15.secondaryText;
            var11['style'] = var15;
            var11['children'] = var14;
            var11 = var13.bind(var4)(var12, var11);
            var10[1] = var11;
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 48:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['SimpleNotificationHeader'] = var2;
    return var1;
})();