// app/modules/main_tabs_v2/native/shared_components/guild_channels/ChannelContent.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var5 = require;
        var3 = exports;
        var6 = dependencyMap;
        var _closure1_slot0 = var5;
        var1 = metroImportDefault;
        var _closure1_slot1 = var1;
        var _closure1_slot2 = var6;
        var1 = global;
        var8 = var1.Object;
        var7 = var8.defineProperty;
        var4 = {};
        var1 = true;
        var4['value'] = var1;
        var1 = '__esModule';
        var1 = var7.bind(var8)(var3, var1, var4);
        var10 = 0;
        var7 = var6[var10];
        var4 = metroImportAll;
        var1 = undefined;
        var4 = var4.bind(var1)(var7);
        var _closure1_slot3 = var4;
        var16 = 1;
        var4 = var6[var16];
        var4 = var5.bind(var1)(var4);
        var7 = var4.View;
        var _closure1_slot4 = var7;
        var8 = var4.StyleSheet;
        var11 = 2;
        var4 = var6[var11];
        var4 = var5.bind(var1)(var4);
        var14 = var4.SUBTITLE_OPACITY_NORMAL;
        var _closure1_slot5 = var14;
        var4 = 3;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var4 = var4.UnreadSetting;
        var _closure1_slot6 = var4;
        var13 = 4;
        var4 = var6[var13];
        var4 = var5.bind(var1)(var4);
        var7 = var4.jsx;
        var _closure1_slot7 = var7;
        var4 = var4.jsxs;
        var _closure1_slot8 = var4;
        var7 = var8.create;
        var4 = {};
        var9 = {};
        var9['flex'] = var16;
        var12 = 5;
        var15 = var6[var12];
        var17 = var5.bind(var1)(var15);
        var15 = var17.isIOS;
        var18 = var15.bind(var17)();
        var15 = -1;
        var17 = var15;
        if(!var18) { _fun0001_ip = 2; continue _fun0001 }
case 3:
        var17 = var11;
case 2:
        var9['marginTop'] = var17;
        var4['channelContent'] = var9;
        var9 = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'space-between'};
        var4['channelContainer'] = var9;
        var9 = {'flexDirection': 'column', 'alignItems': 'flex-start', 'flexShrink': 1};
        var4['leftBox'] = var9;
        var9 = {'flexDirection': 'column', 'alignItems': 'flex-end'};
        var4['rightBox'] = var9;
        var9 = {'position': 'absolute', 'right': 0, 'top': 0};
        var4['rightContentAbsolute'] = var9;
        var9 = {};
        var17 = var6[var12];
        var18 = var5.bind(var1)(var17);
        var17 = var18.isAndroid;
        var17 = var17.bind(var18)();
        if(!var17) { _fun0001_ip = 4; continue _fun0001 }
case 5:
        var15 = var16;
case 4:
        var9['marginTop'] = var15;
        var15 = 8;
        var9['marginRight'] = var15;
        var4['channelIcon'] = var9;
        var9 = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center'};
        var4['channelTraits'] = var9;
        var9 = {};
        var9['opacity'] = var14;
        var9['marginRight'] = var13;
        var14 = var6[var12];
        var15 = var5.bind(var1)(var14);
        var14 = var15.isAndroid;
        var15 = var14.bind(var15)();
        var14 = 0;
        if(!var15) { _fun0001_ip = 6; continue _fun0001 }
case 7:
        var14 = var11;
case 6:
        var9['marginTop'] = var14;
        var4['channelTraitIcon'] = var9;
        var9 = {};
        var9['marginRight'] = var13;
        var12 = var6[var12];
        var13 = var5.bind(var1)(var12);
        var12 = var13.isAndroid;
        var12 = var12.bind(var13)();
        var10 = 0;
        if(!var12) { _fun0001_ip = 8; continue _fun0001 }
case 9:
        var10 = var11;
case 8:
        var9['marginTop'] = var10;
        var4['channelTraitIconMuted'] = var9;
        var4 = var7.bind(var8)(var4);
        var _closure1_slot9 = var4;
        var4 = 13;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'modules/main_tabs_v2/native/shared_components/guild_channels/ChannelContent.tsx';
        var4 = var5.bind(var6)(var4);
        var2 = function renderChannelContent(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var3 = arg1;
                var34 = var3.name;
                var15 = var3.subtitle;
                var32 = var3.unread;
                var28 = var3.resolvedUnreadSetting;
                var1 = var3.locked;
                var22 = var3.muted;
                var18 = var3.lastMessageTimestampString;
                var2 = var3.channel;
                var27 = var3.connected;
                var26 = var3.layout;
                var24 = var3.mentionCount;
                var17 = var3.mentionBadge;
                var29 = var3.isSubscriptionGated;
                var33 = var3.needSubscriptionToAccess;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 6;
                var3 = var4[var3];
                var4 = undefined;
                var5 = var5.bind(var4)(var3);
                var3 = var5.getLayoutStyles;
                var21 = var3.bind(var5)(var26);
                var23 = null;
                var31 = var23 != var2;
                if(!var31) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                if(var1) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var3 = 7;
                var3 = var6[var3];
                var3 = var5.bind(var4)(var3);
                var1 = var3.bind(var4)(var2);
case 12:
                var31 = var1;
case 10:
                var1 = var23 == var2;
                var30 = undefined;
                if(var1) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                var1 = var2.isNSFW;
                var30 = var1.bind(var2)();
case 14:
                var2 = _closure1_slot3;
                var1 = var2.isValidElement;
                var10 = var1.bind(var2)(var15);
                var19 = var23 != var18;
                var12 = var19;
                if(!var19) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                var12 = var23 == var17;
case 16:
                var3 = _closure1_slot7;
                var2 = _closure1_slot4;
                var1 = {};
                var5 = _closure1_slot9;
                var5 = var5.channelContent;
                var1['style'] = var5;
                var6 = _closure1_slot8;
                var5 = {};
                var7 = _closure1_slot9;
                var7 = var7.channelContainer;
                var5['style'] = var7;
                var7 = {};
                var8 = _closure1_slot9;
                var9 = var8.leftBox;
                var8 = new Array(2);
                var8[0] = var9;
                var9 = {};
                var11 = 'center';
                if(!var10) { _fun0002_ip = 18; continue _fun0002 }
case 19:
                var11 = 'space-between';
case 18:
                var9['justifyContent'] = var11;
                var8[1] = var9;
                var7['style'] = var8;
                var11 = _closure1_slot8;
                var9 = _closure1_slot4;
                var8 = {};
                var14 = {'flexDirection': 'row', 'paddingRight': null, 'alignItems': 'center'};
                var16 = 0;
                var20 = 0;
                if(!var12) { _fun0002_ip = 20; continue _fun0002 }
case 21:
                var20 = 30;
case 20:
                var14['paddingRight'] = var20;
                var8['style'] = var14;
                var25 = _closure1_slot7;
                var20 = _closure1_slot1;
                var35 = _closure1_slot2;
                var14 = 8;
                var14 = var35[var14];
                var20 = var20.bind(var4)(var14);
                var14 = {};
                var14['title'] = var34;
                var14['muted'] = var22;
                var14['unread'] = var32;
                if(!(var23 == var28)) { _fun0002_ip = 22; continue _fun0002 }
case 23:
                var32 = _closure1_slot6;
                var28 = var32.ONLY_MENTIONS;
case 22:
                var14['resolvedUnreadSetting'] = var28;
                var14['connected'] = var27;
                var14['layout'] = var26;
                var20 = var25.bind(var4)(var20, var14);
                var14 = new Array(2);
                var14[0] = var20;
                var20 = var31;
                if(var31) { _fun0002_ip = 24; continue _fun0002 }
case 25:
                var20 = var30;
case 24:
                if(!var20) { _fun0002_ip = 26; continue _fun0002 }
case 27:
                var27 = _closure1_slot8;
                var26 = _closure1_slot4;
                var25 = {};
                var28 = _closure1_slot9;
                var32 = var28.channelTraits;
                var28 = new Array(2);
                var28[0] = var32;
                var32 = {};
                var34 = 1;
                var35 = var34;
                if(!var31) { _fun0002_ip = 28; continue _fun0002 }
case 29:
                var35 = var34;
                if(!var30) { _fun0002_ip = 28; continue _fun0002 }
case 30:
                var35 = 2;
case 28:
                var34 = 14;
                var34 = var34 * var35;
                var32['maxWidth'] = var34;
                var28[1] = var32;
                var25['style'] = var28;
                if(!var31) { _fun0002_ip = 31; continue _fun0002 }
case 32:
                var34 = _closure1_slot7;
                var32 = _closure1_slot0;
                var35 = _closure1_slot2;
                var28 = 9;
                var28 = var35[var28];
                var28 = var32.bind(var4)(var28);
                var32 = var28.LockIcon;
                var28 = {'size': 'xxs', 'color': 'icon-muted'};
                var35 = _closure1_slot9;
                var35 = var35.channelTraitIcon;
                var28['style'] = var35;
                var31 = var34.bind(var4)(var32, var28);
case 31:
                var28 = new Array(3);
                var28[0] = var31;
                if(!var30) { _fun0002_ip = 33; continue _fun0002 }
case 34:
                var34 = _closure1_slot7;
                var32 = _closure1_slot0;
                var35 = _closure1_slot2;
                var31 = 10;
                var31 = var35[var31];
                var31 = var32.bind(var4)(var31);
                var32 = var31.WarningIcon;
                var31 = {'size': 'xxs', 'color': 'icon-muted'};
                var35 = _closure1_slot9;
                var35 = var35.channelTraitIcon;
                var31['style'] = var35;
                var30 = var34.bind(var4)(var32, var31);
case 33:
                var28[1] = var30;
                if(!var29) { _fun0002_ip = 35; continue _fun0002 }
case 36:
                var32 = _closure1_slot7;
                var31 = _closure1_slot1;
                var34 = _closure1_slot2;
                var30 = 11;
                var30 = var34[var30];
                var31 = var31.bind(var4)(var30);
                var30 = {};
                var30['locked'] = var33;
                var33 = true;
                var30['isInMainTabsExperiment'] = var33;
                var29 = var32.bind(var4)(var31, var30);
case 35:
                var28[2] = var29;
                var25['children'] = var28;
                var20 = var27.bind(var4)(var26, var25);
case 26:
                var14[1] = var20;
                var8['children'] = var14;
                var9 = var11.bind(var4)(var9, var8);
                var8 = new Array(2);
                var8[0] = var9;
                var9 = null;
                if(!var10) { _fun0002_ip = 37; continue _fun0002 }
case 38:
                var14 = _closure1_slot7;
                var11 = _closure1_slot4;
                var10 = {};
                var20 = {};
                var25 = var23 != var24;
                var23 = 0;
                if(!var25) { _fun0002_ip = 39; continue _fun0002 }
case 40:
                var23 = var24;
case 39:
                var23 = var23 > var16;
                var16 = 0;
                if(!var23) { _fun0002_ip = 41; continue _fun0002 }
case 42:
                var16 = 20;
case 41:
                var20['paddingRight'] = var16;
                var16 = new Array(2);
                var16[0] = var20;
                var20 = {};
                var21 = var21.messagePreview;
                var21 = var21.margin;
                var21 = var21.marginTop;
                var20['marginTop'] = var21;
                var16[1] = var20;
                var10['style'] = var16;
                var10['children'] = var15;
                var9 = var14.bind(var4)(var11, var10);
case 37:
                var8[1] = var9;
                var7['children'] = var8;
                var8 = var6.bind(var4)(var2, var7);
                var7 = new Array(2);
                var7[0] = var8;
                var10 = _closure1_slot8;
                var9 = _closure1_slot4;
                var8 = {};
                var14 = _closure1_slot9;
                if(var12) { _fun0002_ip = 43; continue _fun0002 }
case 44:
                var11 = var14.rightBox;
                _fun0002_ip = 45; continue _fun0002;
case 43:
                var11 = var14.rightContentAbsolute;
case 45:
                var8['style'] = var11;
                var14 = var19;
                if(!var19) { _fun0002_ip = 46; continue _fun0002 }
case 47:
                var16 = _closure1_slot7;
                var15 = _closure1_slot0;
                var20 = _closure1_slot2;
                var11 = 12;
                var11 = var20[var11];
                var11 = var15.bind(var4)(var11);
                var15 = var11.Text;
                var11 = {'variant': 'text-xs/medium', 'color': 'text-muted', 'style': null, 'maxFontSizeMultiplier': 1.75};
                var20 = {};
                var21 = 'auto';
                var20['marginLeft'] = var21;
                var21 = 1;
                if(var22) { _fun0002_ip = 48; continue _fun0002 }
case 49:
                var21 = _closure1_slot5;
case 48:
                var20['opacity'] = var21;
                var11['style'] = var20;
                var11['children'] = var18;
                var14 = var16.bind(var4)(var15, var11);
case 46:
                var11 = new Array(3);
                var11[0] = var14;
                var16 = _closure1_slot7;
                var15 = _closure1_slot4;
                var14 = {};
                var18 = new Array(2);
                var20 = {'alignItems': 'center', 'paddingLeft': 4};
                var18[0] = var20;
                if(!var19) { _fun0002_ip = 50; continue _fun0002 }
case 51:
                var20 = {};
                var21 = 5;
                var20['marginTop'] = var21;
                var19 = var20;
case 50:
                var18[1] = var19;
                var14['style'] = var18;
                var14['children'] = var17;
                var14 = var16.bind(var4)(var15, var14);
                var11[1] = var14;
                if(!var12) { _fun0002_ip = 52; continue _fun0002 }
case 53:
                var15 = _closure1_slot7;
                var14 = _closure1_slot4;
                var13 = {};
                var16 = {};
                var17 = 1;
                var16['flex'] = var17;
                var13['style'] = var16;
                var12 = var15.bind(var4)(var14, var13);
case 52:
                var11[2] = var12;
                var8['children'] = var11;
                var8 = var10.bind(var4)(var9, var8);
                var7[1] = var8;
                var5['children'] = var7;
                var5 = var6.bind(var4)(var2, var5);
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var3['renderChannelContent'] = var2;
        return var1;
    }
})();