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
        var1 = function ChannelContentComponent(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var3 = arg1;
                var38 = var3.name;
                var22 = var3.subtitle;
                var35 = var3.unread;
                var31 = var3.resolvedUnreadSetting;
                var1 = var3.locked;
                var37 = var3.muted;
                var19 = var3.lastMessageTimestampString;
                var2 = var3.channel;
                var30 = var3.connected;
                var29 = var3.layout;
                var27 = var3.mentionCount;
                var18 = var3.mentionBadge;
                var32 = var3.isSubscriptionGated;
                var36 = var3.needSubscriptionToAccess;
                var3 = _closure1_slot8;
                var4 = undefined;
                var15 = var3.bind(var4)();
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 7;
                var3 = var6[var3];
                var5 = var5.bind(var4)(var3);
                var3 = var5.getLayoutStyles;
                var25 = var3.bind(var5)(var29);
                var26 = null;
                var34 = var26 != var2;
                if(!var34) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                if(var1) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var3 = 8;
                var3 = var6[var3];
                var3 = var5.bind(var4)(var3);
                var1 = var3.bind(var4)(var2);
case 4:
                var34 = var1;
case 2:
                var1 = var26 == var2;
                var33 = undefined;
                if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var1 = var2.isNSFW;
                var33 = var1.bind(var2)();
case 6:
                var2 = _closure1_slot3;
                var1 = var2.isValidElement;
                var16 = var1.bind(var2)(var22);
                var20 = var26 != var19;
                var13 = var20;
                if(!var20) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                var13 = var26 == var18;
case 8:
                var3 = _closure1_slot6;
                var2 = _closure1_slot4;
                var1 = {};
                var5 = var15.channelContent;
                var1['style'] = var5;
                var7 = _closure1_slot7;
                var6 = _closure1_slot4;
                var5 = {};
                var8 = var15.channelContainer;
                var5['style'] = var8;
                var10 = _closure1_slot7;
                var9 = _closure1_slot4;
                var8 = {};
                var12 = var15.leftBox;
                var11 = new Array(2);
                var11[0] = var12;
                var12 = {};
                var17 = 'center';
                if(!var16) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                var17 = 'space-between';
case 10:
                var12['justifyContent'] = var17;
                var11[1] = var12;
                var8['style'] = var11;
                var17 = _closure1_slot7;
                var12 = _closure1_slot4;
                var11 = {};
                var21 = {'flexDirection': 'row', 'paddingRight': null, 'alignItems': 'center'};
                var23 = 0;
                var24 = 0;
                if(!var13) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                var24 = 30;
case 12:
                var21['paddingRight'] = var24;
                var11['style'] = var21;
                var28 = _closure1_slot6;
                var24 = _closure1_slot1;
                var39 = _closure1_slot2;
                var21 = 9;
                var21 = var39[var21];
                var24 = var24.bind(var4)(var21);
                var21 = {};
                var21['title'] = var38;
                var21['muted'] = var37;
                var21['unread'] = var35;
                if(!(var26 == var31)) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                var35 = _closure1_slot5;
                var31 = var35.ONLY_MENTIONS;
case 14:
                var21['resolvedUnreadSetting'] = var31;
                var21['connected'] = var30;
                var21['layout'] = var29;
                var24 = var28.bind(var4)(var24, var21);
                var21 = new Array(2);
                var21[0] = var24;
                var24 = var34;
                if(var34) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                var24 = var33;
case 16:
                if(!var24) { _fun0002_ip = 18; continue _fun0002 }
case 19:
                var30 = _closure1_slot7;
                var29 = _closure1_slot4;
                var28 = {};
                var35 = var15.channelTraits;
                var31 = new Array(2);
                var31[0] = var35;
                var35 = {};
                var37 = 1;
                var38 = var37;
                if(!var34) { _fun0002_ip = 20; continue _fun0002 }
case 21:
                var38 = var37;
                if(!var33) { _fun0002_ip = 20; continue _fun0002 }
case 22:
                var38 = 2;
case 20:
                var37 = 14;
                var37 = var37 * var38;
                var35['maxWidth'] = var37;
                var31[1] = var35;
                var28['style'] = var31;
                if(!var34) { _fun0002_ip = 23; continue _fun0002 }
case 24:
                var37 = _closure1_slot6;
                var35 = _closure1_slot0;
                var38 = _closure1_slot2;
                var31 = 10;
                var31 = var38[var31];
                var31 = var35.bind(var4)(var31);
                var35 = var31.LockIcon;
                var31 = {'size': 'xxs', 'color': 'icon-muted'};
                var38 = var15.channelTraitIcon;
                var31['style'] = var38;
                var34 = var37.bind(var4)(var35, var31);
case 23:
                var31 = new Array(3);
                var31[0] = var34;
                if(!var33) { _fun0002_ip = 25; continue _fun0002 }
case 26:
                var37 = _closure1_slot6;
                var35 = _closure1_slot0;
                var38 = _closure1_slot2;
                var34 = 11;
                var34 = var38[var34];
                var34 = var35.bind(var4)(var34);
                var35 = var34.WarningIcon;
                var34 = {'size': 'xxs', 'color': 'icon-muted'};
                var38 = var15.channelTraitIcon;
                var34['style'] = var38;
                var33 = var37.bind(var4)(var35, var34);
case 25:
                var31[1] = var33;
                if(!var32) { _fun0002_ip = 27; continue _fun0002 }
case 28:
                var35 = _closure1_slot6;
                var34 = _closure1_slot1;
                var37 = _closure1_slot2;
                var33 = 12;
                var33 = var37[var33];
                var34 = var34.bind(var4)(var33);
                var33 = {};
                var33['locked'] = var36;
                var36 = true;
                var33['isInMainTabsExperiment'] = var36;
                var32 = var35.bind(var4)(var34, var33);
case 27:
                var31[2] = var32;
                var28['children'] = var31;
                var24 = var30.bind(var4)(var29, var28);
case 18:
                var21[1] = var24;
                var11['children'] = var21;
                var12 = var17.bind(var4)(var12, var11);
                var11 = new Array(2);
                var11[0] = var12;
                var12 = null;
                if(!var16) { _fun0002_ip = 29; continue _fun0002 }
case 30:
                var21 = _closure1_slot6;
                var17 = _closure1_slot4;
                var16 = {};
                var24 = {};
                var28 = var26 != var27;
                var26 = 0;
                if(!var28) { _fun0002_ip = 31; continue _fun0002 }
case 32:
                var26 = var27;
case 31:
                var26 = var26 > var23;
                var23 = 0;
                if(!var26) { _fun0002_ip = 33; continue _fun0002 }
case 34:
                var23 = 20;
case 33:
                var24['paddingRight'] = var23;
                var23 = new Array(2);
                var23[0] = var24;
                var24 = {};
                var25 = var25.messagePreview;
                var25 = var25.margin;
                var25 = var25.marginTop;
                var24['marginTop'] = var25;
                var23[1] = var24;
                var16['style'] = var23;
                var16['children'] = var22;
                var12 = var21.bind(var4)(var17, var16);
case 29:
                var11[1] = var12;
                var8['children'] = var11;
                var9 = var10.bind(var4)(var9, var8);
                var8 = new Array(2);
                var8[0] = var9;
                var11 = _closure1_slot7;
                var10 = _closure1_slot4;
                var9 = {};
                if(var13) { _fun0002_ip = 35; continue _fun0002 }
case 36:
                var12 = var15.rightBox;
                _fun0002_ip = 37; continue _fun0002;
case 35:
                var12 = var15.rightContentAbsolute;
case 37:
                var9['style'] = var12;
                var15 = var20;
                if(!var20) { _fun0002_ip = 38; continue _fun0002 }
case 39:
                var17 = _closure1_slot6;
                var16 = _closure1_slot0;
                var21 = _closure1_slot2;
                var12 = 13;
                var12 = var21[var12];
                var12 = var16.bind(var4)(var12);
                var16 = var12.Text;
                var12 = {'variant': 'text-xs/medium', 'color': 'text-muted', 'style': null, 'maxFontSizeMultiplier': 1.75};
                var21 = {};
                var22 = 'auto';
                var21['marginLeft'] = var22;
                var12['style'] = var21;
                var12['children'] = var19;
                var15 = var17.bind(var4)(var16, var12);
case 38:
                var12 = new Array(3);
                var12[0] = var15;
                var17 = _closure1_slot6;
                var16 = _closure1_slot4;
                var15 = {};
                var19 = new Array(2);
                var21 = {'alignItems': 'center', 'paddingLeft': 4};
                var19[0] = var21;
                if(!var20) { _fun0002_ip = 40; continue _fun0002 }
case 41:
                var21 = {};
                var22 = 5;
                var21['marginTop'] = var22;
                var20 = var21;
case 40:
                var19[1] = var20;
                var15['style'] = var19;
                var15['children'] = var18;
                var15 = var17.bind(var4)(var16, var15);
                var12[1] = var15;
                if(!var13) { _fun0002_ip = 42; continue _fun0002 }
case 43:
                var16 = _closure1_slot6;
                var15 = _closure1_slot4;
                var14 = {};
                var17 = {};
                var18 = 1;
                var17['flex'] = var18;
                var14['style'] = var17;
                var13 = var16.bind(var4)(var15, var14);
case 42:
                var12[2] = var13;
                var9['children'] = var12;
                var9 = var11.bind(var4)(var10, var9);
                var8[1] = var9;
                var5['children'] = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var _closure1_slot9 = var1;
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
        var12 = 1;
        var4 = var6[var12];
        var4 = var5.bind(var1)(var4);
        var4 = var4.View;
        var _closure1_slot4 = var4;
        var11 = 2;
        var4 = var6[var11];
        var4 = var5.bind(var1)(var4);
        var14 = var4.SUBTITLE_OPACITY_NORMAL;
        var4 = 3;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var4 = var4.UnreadSetting;
        var _closure1_slot5 = var4;
        var13 = 4;
        var4 = var6[var13];
        var4 = var5.bind(var1)(var4);
        var7 = var4.jsx;
        var _closure1_slot6 = var7;
        var4 = var4.jsxs;
        var _closure1_slot7 = var4;
        var4 = 5;
        var4 = var6[var4];
        var8 = var5.bind(var1)(var4);
        var7 = var8.createStyles;
        var4 = {};
        var9 = {};
        var9['flex'] = var12;
        var12 = 6;
        var15 = var6[var12];
        var16 = var5.bind(var1)(var15);
        var15 = var16.isIOS;
        var16 = var15.bind(var16)();
        var15 = -1;
        if(!var16) { _fun0001_ip = 44; continue _fun0001 }
case 45:
        var15 = var11;
case 44:
        var9['marginTop'] = var15;
        var4['channelContent'] = var9;
        var9 = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'space-between'};
        var4['channelContainer'] = var9;
        var9 = {'flexDirection': 'column', 'alignItems': 'flex-start', 'flexShrink': 1};
        var4['leftBox'] = var9;
        var9 = {'flexDirection': 'column', 'alignItems': 'flex-end'};
        var4['rightBox'] = var9;
        var9 = {'position': 'absolute', 'right': 0, 'top': 0};
        var4['rightContentAbsolute'] = var9;
        var9 = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center'};
        var4['channelTraits'] = var9;
        var9 = {};
        var9['opacity'] = var14;
        var9['marginRight'] = var13;
        var12 = var6[var12];
        var13 = var5.bind(var1)(var12);
        var12 = var13.isAndroid;
        var12 = var12.bind(var13)();
        var10 = 0;
        if(!var12) { _fun0001_ip = 46; continue _fun0001 }
case 47:
        var10 = var11;
case 46:
        var9['marginTop'] = var10;
        var4['channelTraitIcon'] = var9;
        var4 = var7.bind(var8)(var4);
        var _closure1_slot8 = var4;
        var4 = 14;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'modules/main_tabs_v2/native/shared_components/guild_channels/ChannelContent.tsx';
        var4 = var5.bind(var6)(var4);
        var2 = function renderChannelContent(arg1) {
            var4 = _closure1_slot6;
            var3 = _closure1_slot9;
            var2 = {};
            var5 = arg1;
            var6 = var2;
            var1 = copyDataProperties(var6, var5);
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var3['renderChannelContent'] = var2;
        return var1;
    }
})();