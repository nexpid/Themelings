// app/modules/in_app_notifications/native/MessageNotificationHeader.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
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
            var8 = var2.parentChannel;
            var _closure2_slot1 = var8;
            var3 = var2.guild;
            var9 = var2.author;
            var5 = undefined;
            var _closure2_slot3 = var5;
            var2 = _closure1_slot9;
            var11 = var2.bind(var5)();
            var _closure2_slot2 = var11;
            var2 = {};
            var2['channel'] = var13;
            var2['parentChannel'] = var8;
            var2['guild'] = var3;
            var4 = var2.channel;
            var17 = var2.parentChannel;
            var3 = var2.guild;
            var6 = _closure1_slot0;
            var2 = _closure1_slot1;
            var12 = 8;
            var10 = var2[var12];
            var16 = var6.bind(var5)(var10);
            var15 = var16.computeChannelName;
            var14 = _closure1_slot6;
            var10 = _closure1_slot5;
            var14 = var15.bind(var16)(var4, var14, var10);
            var4 = var4.type;
            var15 = 9;
            var2 = var2[var15];
            var2 = var6.bind(var5)(var2);
            var2 = var2.ChannelTypes;
            var2 = var2.GROUP_DM;
            var10 = var14;
            if(!(var2 !== var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var15];
            var2 = var6.bind(var5)(var2);
            var2 = var2.ChannelTypes;
            var2 = var2.GUILD_TEXT;
            if(!(var2 !== var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var15];
            var2 = var6.bind(var5)(var2);
            var2 = var2.ChannelTypes;
            var2 = var2.GUILD_ANNOUNCEMENT;
            if(!(var2 !== var4)) { _fun0001_ip = 4; continue _fun0001 }
case 6:
            var6 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var15];
            var2 = var6.bind(var5)(var2);
            var2 = var2.ChannelTypes;
            var2 = var2.ANNOUNCEMENT_THREAD;
            if(!(var2 !== var4)) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var6 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var15];
            var2 = var6.bind(var5)(var2);
            var2 = var2.ChannelTypes;
            var2 = var2.PUBLIC_THREAD;
            if(!(var2 !== var4)) { _fun0001_ip = 7; continue _fun0001 }
case 9:
            var6 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var15];
            var2 = var6.bind(var5)(var2);
            var2 = var2.ChannelTypes;
            var2 = var2.PRIVATE_THREAD;
            var10 = null;
            if(!(var2 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 7:
            var4 = null;
            var2 = var4 != var17;
            var15 = null;
            if(!var2) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var6 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var12];
            var16 = var6.bind(var5)(var2);
            var12 = var16.computeChannelName;
            var6 = _closure1_slot6;
            var2 = _closure1_slot5;
            var15 = var12.bind(var16)(var17, var6, var2);
case 10:
            if(!(var4 == var15)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var2 = var14;
            if(!(var4 != var3)) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var16 = var3.name;
            var4 = global;
            var4 = var4.HermesInternal;
            var12 = var4.concat;
            var6 = '';
            var4 = ', ';
            var2 = var12.bind(var6)(var14, var4, var16);
case 14:
            _fun0001_ip = 16; continue _fun0001;
case 12:
            var4 = global;
            var4 = var4.HermesInternal;
            var12 = var4.concat;
            var6 = '';
            var4 = ', ';
            var2 = var12.bind(var6)(var14, var4, var15);
case 16:
            var10 = var2;
            _fun0001_ip = 2; continue _fun0001;
case 4:
            var2 = null;
            var4 = var2 != var3;
            if(!var4) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var12 = var3.name;
            var3 = global;
            var3 = var3.HermesInternal;
            var6 = var3.concat;
            var4 = '';
            var3 = ', ';
            var2 = var6.bind(var4)(var14, var3, var12);
case 17:
            var10 = var2;
case 2:
            var6 = null;
            var2 = var6 != var9;
            var12 = 'mobile-text-heading-primary';
            if(!var2) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var12 = 'text-muted';
case 19:
            _closure2_slot3 = var12;
            var4 = _closure1_slot2;
            var3 = var4.useMemo;
            var2 = new Array(4);
            var2[0] = var13;
            var2[1] = var8;
            var8 = var11.icon;
            var2[2] = var8;
            var2[3] = var12;
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
                    if(var1) { _fun0002_ip = 21; continue _fun0002 }
case 22:
                    var4 = var7.type;
                    var10 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var9];
                    var1 = var10.bind(var8)(var1);
                    var1 = var1.ChannelTypes;
                    var1 = var1.PUBLIC_THREAD;
                    if(!(var4 !== var1)) { _fun0002_ip = 23; continue _fun0002 }
case 24:
                    var4 = _closure1_slot0;
                    var10 = _closure1_slot1;
                    var1 = 12;
                    var1 = var10[var1];
                    var4 = var4.bind(var8)(var1);
                    var1 = var4.getSimpleChannelIconComponent;
                    var1 = var1.bind(var4)(var7);
                    _fun0002_ip = 25; continue _fun0002;
case 23:
                    var4 = null;
                    if(!(var4 != var3)) { _fun0002_ip = 26; continue _fun0002 }
case 27:
                    var4 = var3.type;
                    var7 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var3 = var3[var9];
                    var3 = var7.bind(var8)(var3);
                    var3 = var3.ChannelTypes;
                    var3 = var3.GUILD_FORUM;
                    if(!(var4 !== var3)) { _fun0002_ip = 28; continue _fun0002 }
case 26:
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var3 = 11;
                    var3 = var7[var3];
                    var3 = var4.bind(var8)(var3);
                    var3 = var3.ThreadIcon;
                    _fun0002_ip = 29; continue _fun0002;
case 28:
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot1;
                    var4 = 10;
                    var4 = var9[var4];
                    var4 = var7.bind(var8)(var4);
                    var3 = var4.ChatIcon;
case 29:
                    var1 = var3;
case 25:
                    var5 = var1;
case 21:
                    var1 = null;
                    var3 = var1 != var5;
                    if(!var3) { _fun0002_ip = 30; continue _fun0002 }
case 31:
                    var4 = _closure1_slot2;
                    var3 = var4.createElement;
                    var2 = {};
                    var7 = _closure2_slot3;
                    var2['color'] = var7;
                    var6 = _closure2_slot2;
                    var6 = var6.icon;
                    var2['style'] = var6;
                    var1 = var3.bind(var4)(var5, var2);
case 30:
                    return var1;
                }
            };
            var8 = var3.bind(var4)(var1, var2);
            var2 = var6 == var10;
            var1 = null;
            if(var2) { _fun0001_ip = 32; continue _fun0001 }
case 33:
            var4 = _closure1_slot8;
            var3 = _closure1_slot3;
            var2 = {};
            var13 = var11.secondaryTextContainer;
            var2['style'] = var13;
            var9 = var6 != var9;
            if(!var9) { _fun0001_ip = 34; continue _fun0001 }
case 35:
            var14 = _closure1_slot7;
            var13 = _closure1_slot0;
            var15 = _closure1_slot1;
            var6 = 7;
            var6 = var15[var6];
            var6 = var13.bind(var5)(var6);
            var13 = var6.Text;
            var6 = {'variant': 'text-md/bold', 'color': null, 'maxFontSizeMultiplier': 1.75, 'style': null, 'children': '·'};
            var6['color'] = var12;
            var15 = var11.separator;
            var6['style'] = var15;
            var9 = var14.bind(var5)(var13, var6);
case 34:
            var6 = new Array(3);
            var6[0] = var9;
            var6[1] = var8;
            var9 = _closure1_slot7;
            var8 = _closure1_slot0;
            var13 = _closure1_slot1;
            var7 = 7;
            var7 = var13[var7];
            var7 = var8.bind(var5)(var7);
            var8 = var7.Text;
            var7 = {'variant': 'text-md/semibold', 'color': null, 'lineClamp': 1};
            var7['color'] = var12;
            var11 = var11.secondaryText;
            var7['style'] = var11;
            var7['children'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[2] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 32:
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot2 = var4;
    var10 = 1;
    var4 = var6[var10];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var11 = 2;
    var4 = var6[var11];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot7 = var7;
    var4 = var4.jsxs;
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'flexDirection': 'row', 'alignItems': 'center'};
    var4['container'] = var9;
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
    var _closure1_slot9 = var4;
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/in_app_notifications/native/MessageNotificationHeader.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function MessageNotificationHeader(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var12 = var1.channel;
            var11 = var1.parentChannel;
            var10 = var1.guild;
            var9 = var1.author;
            var1 = _closure1_slot9;
            var4 = undefined;
            var15 = var1.bind(var4)();
            var2 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 13;
            var1 = var3[var1];
            var5 = var2.bind(var4)(var1);
            var3 = var5.useStateFromStores;
            var1 = _closure1_slot4;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var1 = _closure1_slot4;
                var1 = var1.roleStyle;
                return var1;
            };
            var7 = var3.bind(var5)(var2, var1);
            var5 = null;
            var2 = var5 == var9;
            var1 = undefined;
            if(var2) { _fun0003_ip = 36; continue _fun0003 }
case 37:
            var1 = var9.colorString;
case 36:
            var3 = 'username';
            var2 = undefined;
            if(!(var3 === var7)) { _fun0003_ip = 38; continue _fun0003 }
case 39:
            var2 = var1;
case 38:
            var1 = var5 != var2;
            var16 = undefined;
            if(!var1) { _fun0003_ip = 40; continue _fun0003 }
case 41:
            var1 = {};
            var1['color'] = var2;
            var16 = var1;
case 40:
            var3 = _closure1_slot8;
            var2 = _closure1_slot3;
            var1 = {};
            var7 = var15.container;
            var1['style'] = var7;
            var7 = var5 != var9;
            if(!var7) { _fun0003_ip = 42; continue _fun0003 }
case 43:
            var13 = _closure1_slot7;
            var8 = _closure1_slot0;
            var14 = _closure1_slot1;
            var5 = 7;
            var5 = var14[var5];
            var5 = var8.bind(var4)(var5);
            var8 = var5.Text;
            var5 = {'variant': 'text-md/semibold', 'color': 'mobile-text-heading-primary', 'lineClamp': 1};
            var14 = new Array(2);
            var14[0] = var16;
            var15 = var15.primaryText;
            var14[1] = var15;
            var5['style'] = var14;
            var14 = var9.nick;
            var5['children'] = var14;
            var7 = var13.bind(var4)(var8, var5);
case 42:
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot7;
            var7 = _closure1_slot10;
            var6 = {};
            var6['channel'] = var12;
            var6['parentChannel'] = var11;
            var6['guild'] = var10;
            var6['author'] = var9;
            var6 = var8.bind(var4)(var7, var6);
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
            var1 = _closure1_slot9;
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
            if(!var6) { _fun0004_ip = 44; continue _fun0004 }
case 45:
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
case 44:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['SimpleNotificationHeader'] = var2;
    return var1;
})();