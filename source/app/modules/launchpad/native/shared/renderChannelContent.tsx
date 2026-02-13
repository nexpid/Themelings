// app/modules/launchpad/native/shared/renderChannelContent.tsx
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
        var1 = function ChannelContent(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var3 = arg1;
                var38 = var3.name;
                var22 = var3.subtitle;
                var36 = var3.unread;
                var31 = var3.resolvedUnreadSetting;
                var1 = var3.locked;
                var23 = var3.muted;
                var19 = var3.lastMessageTimestampString;
                var2 = var3.channel;
                var32 = var3.channelCategoryName;
                var30 = var3.connected;
                var28 = var3.mentionCount;
                var18 = var3.mentionBadge;
                var33 = var3.isSubscriptionGated;
                var37 = var3.needSubscriptionToAccess;
                var3 = _closure1_slot9;
                var4 = undefined;
                var15 = var3.bind(var4)();
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var3 = 7;
                var3 = var6[var3];
                var3 = var5.bind(var4)(var3);
                var26 = var3.bind(var4)();
                var27 = null;
                var35 = var27 != var2;
                if(!var35) { _fun0002_ip = 2; continue _fun0002 }
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
                var35 = var1;
case 2:
                var1 = var27 == var2;
                var34 = undefined;
                if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var1 = var2.isNSFW;
                var34 = var1.bind(var2)();
case 6:
                var2 = _closure1_slot3;
                var1 = var2.isValidElement;
                var16 = var1.bind(var2)(var22);
                var20 = var27 != var19;
                var13 = var20;
                if(!var20) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                var13 = var27 == var18;
case 8:
                var3 = _closure1_slot7;
                var2 = _closure1_slot4;
                var1 = {};
                var5 = var15.channelContent;
                var1['style'] = var5;
                var7 = _closure1_slot8;
                var6 = _closure1_slot4;
                var5 = {};
                var8 = var15.channelContainer;
                var5['style'] = var8;
                var10 = _closure1_slot8;
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
                var17 = _closure1_slot8;
                var12 = _closure1_slot4;
                var11 = {};
                var21 = {'flexDirection': 'row', 'paddingRight': null, 'alignItems': 'center'};
                var24 = 0;
                var25 = 0;
                if(!var13) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                var25 = 30;
case 12:
                var21['paddingRight'] = var25;
                var11['style'] = var21;
                var29 = _closure1_slot7;
                var25 = _closure1_slot1;
                var39 = _closure1_slot2;
                var21 = 9;
                var21 = var39[var21];
                var25 = var25.bind(var4)(var21);
                var21 = {};
                var21['title'] = var38;
                var21['muted'] = var23;
                var21['unread'] = var36;
                if(!(var27 == var31)) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                var36 = _closure1_slot6;
                var31 = var36.ONLY_MENTIONS;
case 14:
                var21['resolvedUnreadSetting'] = var31;
                var21['connected'] = var30;
                var25 = var29.bind(var4)(var25, var21);
                var21 = new Array(3);
                var21[0] = var25;
                var29 = var27 != var32;
                var25 = null;
                if(!var29) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                var31 = _closure1_slot7;
                var30 = _closure1_slot0;
                var36 = _closure1_slot2;
                var29 = 10;
                var29 = var36[var29];
                var29 = var30.bind(var4)(var29);
                var30 = var29.Text;
                var29 = {'variant': 'text-xs/bold', 'color': 'text-muted'};
                var36 = {};
                var38 = 4;
                var36['marginRight'] = var38;
                var29['style'] = var36;
                var29['children'] = var32;
                var25 = var31.bind(var4)(var30, var29);
case 16:
                var21[1] = var25;
                var25 = var35;
                if(var35) { _fun0002_ip = 18; continue _fun0002 }
case 19:
                var25 = var34;
case 18:
                if(!var25) { _fun0002_ip = 20; continue _fun0002 }
case 21:
                var31 = _closure1_slot8;
                var30 = _closure1_slot4;
                var29 = {};
                var36 = var15.channelTraits;
                var32 = new Array(2);
                var32[0] = var36;
                var36 = {};
                var38 = 1;
                var39 = var38;
                if(!var35) { _fun0002_ip = 22; continue _fun0002 }
case 23:
                var39 = var38;
                if(!var34) { _fun0002_ip = 22; continue _fun0002 }
case 24:
                var39 = 2;
case 22:
                var38 = 14;
                var38 = var38 * var39;
                var36['maxWidth'] = var38;
                var32[1] = var36;
                var29['style'] = var32;
                if(!var35) { _fun0002_ip = 25; continue _fun0002 }
case 26:
                var38 = _closure1_slot7;
                var36 = _closure1_slot0;
                var39 = _closure1_slot2;
                var32 = 11;
                var32 = var39[var32];
                var32 = var36.bind(var4)(var32);
                var36 = var32.LockIcon;
                var32 = {'size': 'xxs', 'color': 'icon-muted'};
                var39 = var15.channelTraitIcon;
                var32['style'] = var39;
                var35 = var38.bind(var4)(var36, var32);
case 25:
                var32 = new Array(3);
                var32[0] = var35;
                if(!var34) { _fun0002_ip = 27; continue _fun0002 }
case 28:
                var38 = _closure1_slot7;
                var36 = _closure1_slot0;
                var39 = _closure1_slot2;
                var35 = 12;
                var35 = var39[var35];
                var35 = var36.bind(var4)(var35);
                var36 = var35.WarningIcon;
                var35 = {'size': 'xxs', 'color': 'icon-muted'};
                var39 = var15.channelTraitIcon;
                var35['style'] = var39;
                var34 = var38.bind(var4)(var36, var35);
case 27:
                var32[1] = var34;
                if(!var33) { _fun0002_ip = 29; continue _fun0002 }
case 30:
                var36 = _closure1_slot7;
                var35 = _closure1_slot1;
                var38 = _closure1_slot2;
                var34 = 13;
                var34 = var38[var34];
                var35 = var35.bind(var4)(var34);
                var34 = {};
                var34['locked'] = var37;
                var37 = true;
                var34['isInMainTabsExperiment'] = var37;
                var33 = var36.bind(var4)(var35, var34);
case 29:
                var32[2] = var33;
                var29['children'] = var32;
                var25 = var31.bind(var4)(var30, var29);
case 20:
                var21[2] = var25;
                var11['children'] = var21;
                var12 = var17.bind(var4)(var12, var11);
                var11 = new Array(2);
                var11[0] = var12;
                var12 = null;
                if(!var16) { _fun0002_ip = 31; continue _fun0002 }
case 32:
                var21 = _closure1_slot7;
                var17 = _closure1_slot4;
                var16 = {};
                var25 = {};
                var29 = var27 != var28;
                var27 = 0;
                if(!var29) { _fun0002_ip = 33; continue _fun0002 }
case 34:
                var27 = var28;
case 33:
                var27 = var27 > var24;
                var24 = 0;
                if(!var27) { _fun0002_ip = 35; continue _fun0002 }
case 36:
                var24 = 20;
case 35:
                var25['paddingRight'] = var24;
                var24 = new Array(2);
                var24[0] = var25;
                var25 = {};
                var26 = var26.messagePreview;
                var26 = var26.margin;
                var26 = var26.marginTop;
                var25['marginTop'] = var26;
                var24[1] = var25;
                var16['style'] = var24;
                var16['children'] = var22;
                var12 = var21.bind(var4)(var17, var16);
case 31:
                var11[1] = var12;
                var8['children'] = var11;
                var9 = var10.bind(var4)(var9, var8);
                var8 = new Array(2);
                var8[0] = var9;
                var11 = _closure1_slot8;
                var10 = _closure1_slot4;
                var9 = {};
                if(var13) { _fun0002_ip = 37; continue _fun0002 }
case 38:
                var12 = var15.rightBox;
                _fun0002_ip = 39; continue _fun0002;
case 37:
                var12 = var15.rightContentAbsolute;
case 39:
                var9['style'] = var12;
                var15 = var20;
                if(!var20) { _fun0002_ip = 40; continue _fun0002 }
case 41:
                var17 = _closure1_slot7;
                var16 = _closure1_slot0;
                var21 = _closure1_slot2;
                var12 = 10;
                var12 = var21[var12];
                var12 = var16.bind(var4)(var12);
                var16 = var12.Text;
                var12 = {'variant': 'text-xs/medium', 'color': 'text-muted', 'style': null, 'maxFontSizeMultiplier': 1.75};
                var21 = {};
                var22 = 'auto';
                var21['marginLeft'] = var22;
                var22 = 1;
                if(var23) { _fun0002_ip = 42; continue _fun0002 }
case 43:
                var22 = _closure1_slot5;
case 42:
                var21['opacity'] = var22;
                var12['style'] = var21;
                var12['children'] = var19;
                var15 = var17.bind(var4)(var16, var12);
case 40:
                var12 = new Array(3);
                var12[0] = var15;
                var17 = _closure1_slot7;
                var16 = _closure1_slot4;
                var15 = {};
                var19 = new Array(2);
                var21 = {'alignItems': 'center', 'paddingLeft': 4};
                var19[0] = var21;
                if(!var20) { _fun0002_ip = 44; continue _fun0002 }
case 45:
                var21 = {};
                var22 = 5;
                var21['marginTop'] = var22;
                var20 = var21;
case 44:
                var19[1] = var20;
                var15['style'] = var19;
                var15['children'] = var18;
                var15 = var17.bind(var4)(var16, var15);
                var12[1] = var15;
                if(!var13) { _fun0002_ip = 46; continue _fun0002 }
case 47:
                var16 = _closure1_slot7;
                var15 = _closure1_slot4;
                var14 = {};
                var17 = {};
                var18 = 1;
                var17['flex'] = var18;
                var14['style'] = var17;
                var13 = var16.bind(var4)(var15, var14);
case 46:
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
        var _closure1_slot10 = var1;
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
        if(!var16) { _fun0001_ip = 48; continue _fun0001 }
case 49:
        var15 = var11;
case 48:
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
        if(!var12) { _fun0001_ip = 50; continue _fun0001 }
case 51:
        var10 = var11;
case 50:
        var9['marginTop'] = var10;
        var4['channelTraitIcon'] = var9;
        var4 = var7.bind(var8)(var4);
        var _closure1_slot9 = var4;
        var4 = 14;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'modules/launchpad/native/shared/renderChannelContent.tsx';
        var4 = var5.bind(var6)(var4);
        var2 = function renderChannelContent(arg1) {
            var4 = _closure1_slot7;
            var3 = _closure1_slot10;
            var2 = {};
            var5 = arg1;
            var6 = var2;
            var1 = copyDataProperties(var6, var5);
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var3['default'] = var2;
        return var1;
    }
})();