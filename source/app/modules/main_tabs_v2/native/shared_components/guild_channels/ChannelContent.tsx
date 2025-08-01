// app/modules/main_tabs_v2/native/shared_components/guild_channels/ChannelContent.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
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
        if(!var18) { _fun0001_ip = 229; continue _fun0001 }
 226:
        var17 = var11;
 229:
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
        if(!var17) { _fun0001_ip = 340; continue _fun0001 }
 337:
        var15 = var16;
 340:
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
        if(!var15) { _fun0001_ip = 413; continue _fun0001 }
 410:
        var14 = var11;
 413:
        var9['marginTop'] = var14;
        var4['channelTraitIcon'] = var9;
        var9 = {};
        var9['marginRight'] = var13;
        var12 = var6[var12];
        var13 = var5.bind(var1)(var12);
        var12 = var13.isAndroid;
        var12 = var12.bind(var13)();
        var10 = 0;
        if(!var12) { _fun0001_ip = 455; continue _fun0001 }
 452:
        var10 = var11;
 455:
        var9['marginTop'] = var10;
        var4['channelTraitIconMuted'] = var9;
        var4 = var7.bind(var8)(var4);
        var _closure1_slot9 = var4;
        var4 = 14;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'modules/main_tabs_v2/native/shared_components/guild_channels/ChannelContent.tsx';
        var4 = var5.bind(var6)(var4);
        var2 = function renderChannelContent(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var2 = arg1;
                var35 = var2.name;
                var15 = var2.subtitle;
                var33 = var2.unread;
                var29 = var2.resolvedUnreadSetting;
                var1 = var2.locked;
                var22 = var2.muted;
                var18 = var2.lastMessageTimestampString;
                var3 = var2.channel;
                var28 = var2.connected;
                var27 = var2.layout;
                var25 = var2.mentionCount;
                var17 = var2.mentionBadge;
                var30 = var2.isSubscriptionGated;
                var34 = var2.needSubscriptionToAccess;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 6;
                var2 = var4[var2];
                var4 = undefined;
                var5 = var5.bind(var4)(var2);
                var2 = var5.getLayoutStyles;
                var23 = var2.bind(var5)(var27);
                var24 = null;
                var32 = var24 != var3;
                if(!var32) { _fun0002_ip = 161; continue _fun0002 }
 130:
                if(var1) { _fun0002_ip = 158; continue _fun0002 }
 133:
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 7;
                var2 = var6[var2];
                var2 = var5.bind(var4)(var2);
                var1 = var2.bind(var4)(var3);
 158:
                var32 = var1;
 161:
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 8;
                var1 = var5[var1];
                var2 = var2.bind(var4)(var1);
                var1 = var2.isChannelNSFW;
                var31 = var1.bind(var2)(var3);
                var2 = _closure1_slot3;
                var1 = var2.isValidElement;
                var10 = var1.bind(var2)(var15);
                var19 = var24 != var18;
                var12 = var19;
                if(!var19) { _fun0002_ip = 221; continue _fun0002 }
 217:
                var12 = var24 == var17;
 221:
                var20 = 'text-muted';
                var36 = var20;
                if(!var22) { _fun0002_ip = 239; continue _fun0002 }
 233:
                var36 = 'interactive-muted';
 239:
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
                if(!var10) { _fun0002_ip = 318; continue _fun0002 }
 312:
                var11 = 'space-between';
 318:
                var9['justifyContent'] = var11;
                var8[1] = var9;
                var7['style'] = var8;
                var11 = _closure1_slot8;
                var9 = _closure1_slot4;
                var8 = {};
                var14 = {'flexDirection': 'row', 'paddingRight': null, 'alignItems': 'center'};
                var16 = 0;
                var21 = 0;
                if(!var12) { _fun0002_ip = 364; continue _fun0002 }
 361:
                var21 = 30;
 364:
                var14['paddingRight'] = var21;
                var8['style'] = var14;
                var26 = _closure1_slot7;
                var21 = _closure1_slot1;
                var37 = _closure1_slot2;
                var14 = 9;
                var14 = var37[var14];
                var21 = var21.bind(var4)(var14);
                var14 = {};
                var14['title'] = var35;
                var14['muted'] = var22;
                var14['unread'] = var33;
                if(!(var24 == var29)) { _fun0002_ip = 428; continue _fun0002 }
 418:
                var33 = _closure1_slot6;
                var29 = var33.ONLY_MENTIONS;
 428:
                var14['resolvedUnreadSetting'] = var29;
                var14['connected'] = var28;
                var14['layout'] = var27;
                var21 = var26.bind(var4)(var21, var14);
                var14 = new Array(2);
                var14[0] = var21;
                var21 = var32;
                if(var32) { _fun0002_ip = 466; continue _fun0002 }
 463:
                var21 = var31;
 466:
                if(!var21) { _fun0002_ip = 747; continue _fun0002 }
 472:
                var28 = _closure1_slot8;
                var27 = _closure1_slot4;
                var26 = {};
                var29 = _closure1_slot9;
                var33 = var29.channelTraits;
                var29 = new Array(2);
                var29[0] = var33;
                var33 = {};
                var35 = 1;
                var37 = var35;
                if(!var32) { _fun0002_ip = 520; continue _fun0002 }
 511:
                var37 = var35;
                if(!var31) { _fun0002_ip = 520; continue _fun0002 }
 517:
                var37 = 2;
 520:
                var35 = 14;
                var35 = var35 * var37;
                var33['maxWidth'] = var35;
                var29[1] = var33;
                var26['style'] = var29;
                if(!var32) { _fun0002_ip = 607; continue _fun0002 }
 543:
                var35 = _closure1_slot7;
                var33 = _closure1_slot0;
                var37 = _closure1_slot2;
                var29 = 10;
                var29 = var37[var29];
                var29 = var33.bind(var4)(var29);
                var33 = var29.LockIcon;
                var29 = {};
                var37 = 'xxs';
                var29['size'] = var37;
                var29['color'] = var36;
                var37 = _closure1_slot9;
                var37 = var37.channelTraitIcon;
                var29['style'] = var37;
                var32 = var35.bind(var4)(var33, var29);
 607:
                var29 = new Array(3);
                var29[0] = var32;
                if(!var31) { _fun0002_ip = 682; continue _fun0002 }
 618:
                var35 = _closure1_slot7;
                var33 = _closure1_slot0;
                var37 = _closure1_slot2;
                var32 = 11;
                var32 = var37[var32];
                var32 = var33.bind(var4)(var32);
                var33 = var32.WarningIcon;
                var32 = {};
                var37 = 'xxs';
                var32['size'] = var37;
                var32['color'] = var36;
                var36 = _closure1_slot9;
                var36 = var36.channelTraitIcon;
                var32['style'] = var36;
                var31 = var35.bind(var4)(var33, var32);
 682:
                var29[1] = var31;
                if(!var30) { _fun0002_ip = 733; continue _fun0002 }
 689:
                var33 = _closure1_slot7;
                var32 = _closure1_slot1;
                var35 = _closure1_slot2;
                var31 = 12;
                var31 = var35[var31];
                var32 = var32.bind(var4)(var31);
                var31 = {};
                var31['locked'] = var34;
                var34 = true;
                var31['isInMainTabsExperiment'] = var34;
                var30 = var33.bind(var4)(var32, var31);
 733:
                var29[2] = var30;
                var26['children'] = var29;
                var21 = var28.bind(var4)(var27, var26);
 747:
                var14[1] = var21;
                var8['children'] = var14;
                var9 = var11.bind(var4)(var9, var8);
                var8 = new Array(2);
                var8[0] = var9;
                var9 = null;
                if(!var10) { _fun0002_ip = 864; continue _fun0002 }
 774:
                var14 = _closure1_slot7;
                var11 = _closure1_slot4;
                var10 = {};
                var21 = {};
                var26 = var24 != var25;
                var24 = 0;
                if(!var26) { _fun0002_ip = 798; continue _fun0002 }
 795:
                var24 = var25;
 798:
                var24 = var24 > var16;
                var16 = 0;
                if(!var24) { _fun0002_ip = 810; continue _fun0002 }
 807:
                var16 = 20;
 810:
                var21['paddingRight'] = var16;
                var16 = new Array(2);
                var16[0] = var21;
                var21 = {};
                var23 = var23.messagePreview;
                var23 = var23.margin;
                var23 = var23.marginTop;
                var21['marginTop'] = var23;
                var16[1] = var21;
                var10['style'] = var16;
                var10['children'] = var15;
                var9 = var14.bind(var4)(var11, var10);
 864:
                var8[1] = var9;
                var7['children'] = var8;
                var8 = var6.bind(var4)(var2, var7);
                var7 = new Array(2);
                var7[0] = var8;
                var10 = _closure1_slot8;
                var9 = _closure1_slot4;
                var8 = {};
                var14 = _closure1_slot9;
                if(var12) { _fun0002_ip = 911; continue _fun0002 }
 903:
                var11 = var14.rightBox;
                _fun0002_ip = 917; continue _fun0002;
 911:
                var11 = var14.rightContentAbsolute;
 917:
                var8['style'] = var11;
                var14 = var19;
                if(!var19) { _fun0002_ip = 1033; continue _fun0002 }
 927:
                var16 = _closure1_slot7;
                var15 = _closure1_slot0;
                var21 = _closure1_slot2;
                var11 = 13;
                var11 = var21[var11];
                var11 = var15.bind(var4)(var11);
                var15 = var11.Text;
                var11 = {};
                var21 = 'text-xs/medium';
                var11['variant'] = var21;
                if(!var22) { _fun0002_ip = 975; continue _fun0002 }
 969:
                var20 = 'interactive-muted';
 975:
                var11['color'] = var20;
                var20 = {};
                var21 = 'auto';
                var20['marginLeft'] = var21;
                var21 = 1;
                if(var22) { _fun0002_ip = 1000; continue _fun0002 }
 996:
                var21 = _closure1_slot5;
 1000:
                var20['opacity'] = var21;
                var11['style'] = var20;
                var20 = 1.75;
                var11['maxFontSizeMultiplier'] = var20;
                var11['children'] = var18;
                var14 = var16.bind(var4)(var15, var11);
 1033:
                var11 = new Array(3);
                var11[0] = var14;
                var16 = _closure1_slot7;
                var15 = _closure1_slot4;
                var14 = {};
                var18 = new Array(2);
                var20 = {'alignItems': 'center', 'paddingLeft': 4};
                var18[0] = var20;
                if(!var19) { _fun0002_ip = 1088; continue _fun0002 }
 1076:
                var20 = {};
                var21 = 5;
                var20['marginTop'] = var21;
                var19 = var20;
 1088:
                var18[1] = var19;
                var14['style'] = var18;
                var14['children'] = var17;
                var14 = var16.bind(var4)(var15, var14);
                var11[1] = var14;
                if(!var12) { _fun0002_ip = 1142; continue _fun0002 }
 1113:
                var15 = _closure1_slot7;
                var14 = _closure1_slot4;
                var13 = {};
                var16 = {};
                var17 = 1;
                var16['flex'] = var17;
                var13['style'] = var16;
                var12 = var15.bind(var4)(var14, var13);
 1142:
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