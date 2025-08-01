// app/modules/summaries/native/SummaryActionSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
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
    var _closure1_slot3 = var4;
    var12 = 1;
    var4 = var6[var12];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var13 = 4;
    var4 = var6[var13];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticsSections;
    var _closure1_slot8 = var7;
    var4 = var4.MessageFlags;
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot10 = var7;
    var4 = var4.jsxs;
    var _closure1_slot11 = var4;
    var4 = 10;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 11;
    var14 = var6[var10];
    var14 = var11.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_PRIMARY;
    var9['backgroundColor'] = var14;
    var4['container'] = var9;
    var14 = 'center';
    var9 = {'padding': 16, 'margin': 16, 'marginBottom': 24, 'justifyContent': 'center', 'alignItems': 'center'};
    var4['summaryContainer'] = var9;
    var9 = {};
    var9['textAlign'] = var14;
    var4['summaryContent'] = var9;
    var9 = {'marginBottom': 8, 'borderRadius': null, 'border': 1, 'overflow': 'hidden', 'alignItems': 'center', 'justifyContent': 'center'};
    var14 = var6[var10];
    var14 = var11.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.round;
    var9['borderRadius'] = var14;
    var14 = var6[var10];
    var14 = var11.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BG_BRAND;
    var9['backgroundColor'] = var14;
    var4['summaryIconContainer'] = var9;
    var9 = {'margin': 8, 'width': 20, 'height': 20};
    var14 = var6[var10];
    var14 = var11.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.WHITE;
    var9['tintColor'] = var14;
    var4['summaryIcon'] = var9;
    var9 = {};
    var9['marginBottom'] = var13;
    var4['summaryTopic'] = var9;
    var9 = {};
    var9['height'] = var12;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.DIVIDER_SUBTLE;
    var9['backgroundColor'] = var10;
    var4['divider'] = var9;
    var9 = {'flexDirection': 'row', 'justifyContent': 'space-evenly', 'marginBottom': 16};
    var4['actionsContainer'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot12 = var4;
    var4 = 31;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/summaries/native/SummaryActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function SummaryActionSheet(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var18 = var2.summary;
            var _closure2_slot0 = var18;
            var2 = _closure1_slot12;
            var4 = undefined;
            var11 = var2.bind(var4)();
            var5 = _closure1_slot3;
            var3 = var5.useRef;
            var2 = null;
            var5 = var3.bind(var5)(var2);
            var7 = _closure1_slot5;
            var6 = var7.getChannel;
            var3 = var18.channelId;
            var8 = var6.bind(var7)(var3);
            var _closure2_slot1 = var8;
            var9 = _closure1_slot6;
            var7 = var9.getMessage;
            var6 = var18.channelId;
            var3 = var18.startId;
            var7 = var7.bind(var9)(var6, var3);
            var _closure2_slot2 = var7;
            var13 = var2 != var7;
            if(!var13) { _fun0001_ip = 126; continue _fun0001 }
 105:
            var6 = var7.hasFlag;
            var3 = _closure1_slot9;
            var3 = var3.HAS_THREAD;
            var13 = var6.bind(var7)(var3);
 126:
            var14 = var2 != var8;
            if(!var14) { _fun0001_ip = 137; continue _fun0001 }
 133:
            var14 = var2 != var7;
 137:
            if(!var14) { _fun0001_ip = 164; continue _fun0001 }
 140:
            var6 = var7.hasFlag;
            var3 = _closure1_slot9;
            var3 = var3.HAS_THREAD;
            var3 = var6.bind(var7)(var3);
            var14 = !var3;
 164:
            if(!var14) { _fun0001_ip = 199; continue _fun0001 }
 167:
            var6 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 12;
            var3 = var9[var3];
            var6 = var6.bind(var4)(var3);
            var3 = var6.computeCanStartPublicThread;
            var14 = var3.bind(var6)(var8, var7);
 199:
            var9 = _closure1_slot3;
            var6 = var9.useCallback;
            var3 = var2 == var8;
            var2 = undefined;
            if(var3) { _fun0001_ip = 222; continue _fun0001 }
 217:
            var2 = var8.guild_id;
 222:
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var5 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var4 = 7;
                    var2 = var1[var4];
                    var1 = undefined;
                    var5 = var5.bind(var1)(var2);
                    var2 = var5.hideActionSheet;
                    var2 = var2.bind(var5)();
                    var2 = _closure2_slot1;
                    var8 = null;
                    var5 = var8 == var2;
                    var2 = undefined;
                    if(var5) { _fun0002_ip = 62; continue _fun0002 }
 53:
                    var5 = _closure2_slot1;
                    var2 = var5.guild_id;
 62:
                    if(!(var8 != var2)) { _fun0002_ip = 164; continue _fun0002 }
 66:
                    var5 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var4 = var2[var4];
                    var6 = var5.bind(var1)(var4);
                    var5 = var6.openLazy;
                    var4 = _closure1_slot0;
                    var3 = 9;
                    var3 = var2[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = 13;
                    var3 = var2[var3];
                    var2 = var2.paths;
                    var4 = var4.bind(var1)(var3, var2);
                    var3 = {};
                    var2 = _closure2_slot1;
                    var8 = var8 == var2;
                    var2 = undefined;
                    if(var8) { _fun0002_ip = 147; continue _fun0002 }
 138:
                    var7 = _closure2_slot1;
                    var2 = var7.guild_id;
 147:
                    var3['guildId'] = var2;
                    var2 = 'GuildHighlightsNotifications';
                    var2 = var5.bind(var6)(var4, var2, var3);
 164:
                    return var1;
                }
            };
            var15 = var6.bind(var9)(var2, var3);
            var6 = _closure1_slot3;
            var9 = var6.useCallback;
            var3 = new Array(2);
            var3[0] = var18;
            var3[1] = var8;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 7;
                    var3 = var3[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.hideActionSheet;
                    var3 = var3.bind(var4)();
                    var4 = _closure2_slot1;
                    var3 = null;
                    if(!(var3 == var4)) { _fun0003_ip = 133; continue _fun0003 }
 48:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var3 = 14;
                    var3 = var9[var3];
                    var5 = var8.bind(var1)(var3);
                    var4 = var5.presentFailedToast;
                    var3 = 15;
                    var6 = var9[var3];
                    var6 = var8.bind(var1)(var6);
                    var7 = var6.intl;
                    var6 = var7.string;
                    var3 = var9[var3];
                    var3 = var8.bind(var1)(var3);
                    var3 = var3.t;
                    var3 = var3.gvkcQk;
                    var3 = var6.bind(var7)(var3);
                    var3 = var4.bind(var5)(var3);
                    _fun0003_ip = 313; continue _fun0003;
 133:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 15;
                    var6 = var5[var3];
                    var6 = var4.bind(var1)(var6);
                    var9 = var6.intl;
                    var8 = var9.formatToPlainString;
                    var3 = var5[var3];
                    var3 = var4.bind(var1)(var3);
                    var3 = var3.t;
                    var7 = var3.I3yTDg;
                    var3 = {};
                    var6 = _closure2_slot0;
                    var11 = var6.topic;
                    var3['topic'] = var11;
                    var11 = 16;
                    var11 = var5[var11];
                    var15 = var4.bind(var1)(var11);
                    var14 = var15.getChannelPermalink;
                    var10 = _closure2_slot1;
                    var19 = var10.guild_id;
                    var18 = var10.id;
                    var17 = var6.startId;
                    var16 = var6.id;
                    var20 = var15;
                    var10 = var20[var14](var19, var18, var17, var16, var15);
                    var3['url'] = var10;
                    var7 = var8.bind(var9)(var7, var3);
                    var3 = 17;
                    var3 = var5[var3];
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.showShareActionSheet;
                    var3 = {};
                    var3['message'] = var7;
                    var6 = var6.topic;
                    var3['subject'] = var6;
                    var2 = _closure1_slot8;
                    var2 = var2.SUMMARY_ACTION_SHEET;
                    var2 = var4.bind(var5)(var3, var2);
 313:
                    return var1;
                }
            };
            var19 = var9.bind(var6)(var2, var3);
            var9 = var6.useCallback;
            var3 = new Array(3);
            var3[0] = var18;
            var3[1] = var8;
            var3[2] = var7;
            var2 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 7;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.hideActionSheet;
                    var2 = var2.bind(var3)();
                    var3 = _closure2_slot1;
                    var4 = null;
                    if(!(var4 != var3)) { _fun0004_ip = 56; continue _fun0004 }
 48:
                    var3 = _closure2_slot2;
                    if(!(var4 == var3)) { _fun0004_ip = 141; continue _fun0004 }
 56:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var3 = 14;
                    var3 = var10[var3];
                    var5 = var9.bind(var1)(var3);
                    var4 = var5.presentError;
                    var3 = 15;
                    var6 = var10[var3];
                    var6 = var9.bind(var1)(var6);
                    var8 = var6.intl;
                    var6 = var8.string;
                    var3 = var10[var3];
                    var3 = var9.bind(var1)(var3);
                    var3 = var3.t;
                    var3 = var3./+DWeX;
                    var3 = var6.bind(var8)(var3);
                    var3 = var4.bind(var5)(var3);
                    _fun0004_ip = 381; continue _fun0004;
 141:
                    var9 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var4 = 18;
                    var4 = var3[var4];
                    var10 = var9.bind(var1)(var4);
                    var8 = var10.openThreadCreationForMobile;
                    var4 = _closure2_slot1;
                    var11 = _closure2_slot0;
                    var6 = var11.startId;
                    var5 = _closure1_slot8;
                    var5 = var5.SUMMARY_ACTION_SHEET;
                    var5 = var8.bind(var10)(var4, var6, var5);
                    var5 = 19;
                    var5 = var3[var5];
                    var10 = var9.bind(var1)(var5);
                    var8 = var10.changeThreadSettings;
                    var6 = var4.id;
                    var5 = {};
                    var11 = var11.topic;
                    var5['name'] = var11;
                    var5 = var8.bind(var10)(var6, var5);
                    var6 = _closure1_slot0;
                    var5 = 20;
                    var5 = var3[var5];
                    var6 = var6.bind(var1)(var5);
                    var5 = var6.navigateToCreateThread;
                    var4 = var4.guild_id;
                    var8 = 21;
                    var3 = var3[var8];
                    var10 = var9.bind(var1)(var3);
                    var9 = var10.castMessageIdAsChannelId;
                    var3 = _closure2_slot2;
                    var3 = var3.id;
                    var3 = var9.bind(var10)(var3);
                    var3 = var5.bind(var6)(var4, var3);
                    if(var3) { _fun0004_ip = 381; continue _fun0004 }
 307:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 22;
                    var3 = var6[var3];
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.transitionToGuild;
                    var3 = _closure2_slot1;
                    var3 = var3.guild_id;
                    var7 = _closure1_slot1;
                    var6 = var6[var8];
                    var7 = var7.bind(var1)(var6);
                    var6 = var7.castMessageIdAsChannelId;
                    var2 = _closure2_slot2;
                    var2 = var2.id;
                    var2 = var6.bind(var7)(var2);
                    var2 = var4.bind(var5)(var3, var2);
 381:
                    return var1;
                }
            };
            var22 = var9.bind(var6)(var2, var3);
            var3 = var6.useCallback;
            var2 = new Array(2);
            var2[0] = var8;
            var2[1] = var7;
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 7;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.hideActionSheet;
                    var2 = var2.bind(var3)();
                    var3 = _closure2_slot1;
                    var5 = null;
                    var3 = var5 != var3;
                    if(!var3) { _fun0005_ip = 59; continue _fun0005 }
 51:
                    var4 = _closure2_slot2;
                    var3 = var5 != var4;
 59:
                    if(!var3) { _fun0005_ip = 139; continue _fun0005 }
 62:
                    var4 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 22;
                    var3 = var8[var3];
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.transitionToGuild;
                    var3 = _closure2_slot1;
                    var3 = var3.guild_id;
                    var7 = _closure1_slot1;
                    var6 = 21;
                    var6 = var8[var6];
                    var7 = var7.bind(var1)(var6);
                    var6 = var7.castMessageIdAsChannelId;
                    var2 = _closure2_slot2;
                    var2 = var2.id;
                    var2 = var6.bind(var7)(var2);
                    var2 = var4.bind(var5)(var3, var2);
 139:
                    return var1;
                }
            };
            var20 = var3.bind(var6)(var1, var2);
            var3 = _closure1_slot10;
            var26 = _closure1_slot0;
            var24 = _closure1_slot2;
            var1 = 23;
            var1 = var24[var1];
            var1 = var26.bind(var4)(var1);
            var2 = var1.BottomSheet;
            var1 = {};
            var1['ref'] = var5;
            var7 = _closure1_slot11;
            var5 = 24;
            var5 = var24[var5];
            var5 = var26.bind(var4)(var5);
            var6 = var5.SafeAreaPaddingView;
            var5 = {};
            var8 = true;
            var5['bottom'] = var8;
            var10 = _closure1_slot4;
            var8 = {};
            var9 = var11.summaryContainer;
            var8['style'] = var9;
            var9 = {};
            var12 = var11.summaryIconContainer;
            var9['style'] = var12;
            var12 = 25;
            var12 = var24[var12];
            var12 = var26.bind(var4)(var12);
            var17 = var12.TopicsIcon;
            var12 = {};
            var21 = var11.summaryIcon;
            var12['style'] = var21;
            var21 = 'custom';
            var12['size'] = var21;
            var12 = var3.bind(var4)(var17, var12);
            var9['children'] = var12;
            var12 = var3.bind(var4)(var10, var9);
            var9 = new Array(3);
            var9[0] = var12;
            var12 = 26;
            var17 = var24[var12];
            var17 = var26.bind(var4)(var17);
            var21 = var17.Text;
            var17 = {'style': null, 'variant': 'heading-md/extrabold', 'color': 'header-primary'};
            var25 = var11.summaryContent;
            var23 = new Array(2);
            var23[0] = var25;
            var25 = var11.summaryTopic;
            var23[1] = var25;
            var17['style'] = var23;
            var23 = var18.topic;
            var17['children'] = var23;
            var17 = var3.bind(var4)(var21, var17);
            var9[1] = var17;
            var12 = var24[var12];
            var12 = var26.bind(var4)(var12);
            var17 = var12.Text;
            var12 = {'style': null, 'variant': 'heading-md/medium', 'color': 'header-secondary'};
            var23 = var11.summaryContent;
            var21 = new Array(1);
            var21[0] = var23;
            var12['style'] = var21;
            var18 = var18.summShort;
            var12['children'] = var18;
            var12 = var3.bind(var4)(var17, var12);
            var9[2] = var12;
            var8['children'] = var9;
            var9 = var7.bind(var4)(var10, var8);
            var8 = new Array(3);
            var8[0] = var9;
            var9 = {};
            var12 = var11.divider;
            var9['style'] = var12;
            var9 = var3.bind(var4)(var10, var9);
            var8[1] = var9;
            var9 = {};
            var11 = var11.actionsContainer;
            var9['style'] = var11;
            var12 = 27;
            var11 = var24[var12];
            var11 = var26.bind(var4)(var11);
            var18 = var11.SummaryActionSheetButton;
            var11 = {};
            var17 = 15;
            var21 = var24[var17];
            var21 = var26.bind(var4)(var21);
            var25 = var21.intl;
            var23 = var25.string;
            var21 = var24[var17];
            var21 = var26.bind(var4)(var21);
            var21 = var21.t;
            var21 = var21.NY/nlZ;
            var21 = var23.bind(var25)(var21);
            var11['label'] = var21;
            var23 = _closure1_slot1;
            var21 = 28;
            var21 = var24[var21];
            var21 = var23.bind(var4)(var21);
            var11['iconSource'] = var21;
            var11['onPress'] = var19;
            var18 = var3.bind(var4)(var18, var11);
            var11 = new Array(4);
            var11[0] = var18;
            if(!var14) { _fun0001_ip = 921; continue _fun0001 }
 813:
            var21 = _closure1_slot10;
            var27 = _closure1_slot0;
            var25 = _closure1_slot2;
            var18 = var25[var12];
            var18 = var27.bind(var4)(var18);
            var19 = var18.SummaryActionSheetButton;
            var18 = {};
            var23 = var25[var17];
            var23 = var27.bind(var4)(var23);
            var26 = var23.intl;
            var24 = var26.string;
            var23 = var25[var17];
            var23 = var27.bind(var4)(var23);
            var23 = var23.t;
            var23 = var23.rBIGBA;
            var23 = var24.bind(var26)(var23);
            var18['label'] = var23;
            var24 = _closure1_slot1;
            var23 = 29;
            var23 = var25[var23];
            var23 = var24.bind(var4)(var23);
            var18['iconSource'] = var23;
            var18['onPress'] = var22;
            var14 = var21.bind(var4)(var19, var18);
 921:
            var11[1] = var14;
            if(!var13) { _fun0001_ip = 1036; continue _fun0001 }
 928:
            var19 = _closure1_slot10;
            var25 = _closure1_slot0;
            var23 = _closure1_slot2;
            var14 = var23[var12];
            var14 = var25.bind(var4)(var14);
            var18 = var14.SummaryActionSheetButton;
            var14 = {};
            var21 = var23[var17];
            var21 = var25.bind(var4)(var21);
            var24 = var21.intl;
            var22 = var24.string;
            var21 = var23[var17];
            var21 = var25.bind(var4)(var21);
            var21 = var21.t;
            var21 = var21.39d0Wl;
            var21 = var22.bind(var24)(var21);
            var14['label'] = var21;
            var22 = _closure1_slot1;
            var21 = 29;
            var21 = var23[var21];
            var21 = var22.bind(var4)(var21);
            var14['iconSource'] = var21;
            var14['onPress'] = var20;
            var13 = var19.bind(var4)(var18, var14);
 1036:
            var11[2] = var13;
            var14 = _closure1_slot10;
            var21 = _closure1_slot0;
            var18 = _closure1_slot2;
            var12 = var18[var12];
            var12 = var21.bind(var4)(var12);
            var13 = var12.SummaryActionSheetButton;
            var12 = {};
            var19 = var18[var17];
            var19 = var21.bind(var4)(var19);
            var20 = var19.intl;
            var19 = var20.string;
            var17 = var18[var17];
            var17 = var21.bind(var4)(var17);
            var17 = var17.t;
            var17 = var17.QLkZ39;
            var17 = var19.bind(var20)(var17);
            var12['label'] = var17;
            var17 = _closure1_slot1;
            var16 = 30;
            var16 = var18[var16];
            var16 = var17.bind(var4)(var16);
            var12['iconSource'] = var16;
            var12['onPress'] = var15;
            var12 = var14.bind(var4)(var13, var12);
            var11[3] = var12;
            var9['children'] = var11;
            var9 = var7.bind(var4)(var10, var9);
            var8[2] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var4;
    var2 = function openSummaryDividerActionSheet(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var7 = arg2;
            var4 = _closure1_slot7;
            var3 = var4.findSummary;
            var1 = arg1;
            var6 = var3.bind(var4)(var1, var7);
            var1 = null;
            if(!(var1 != var6)) { _fun0006_ip = 131; continue _fun0006 }
 31:
            var4 = _closure1_slot1;
            var1 = _closure1_slot2;
            var3 = 7;
            var3 = var1[var3];
            var8 = undefined;
            var5 = var4.bind(var8)(var3);
            var4 = var5.openLazy;
            var3 = _closure1_slot0;
            var2 = 9;
            var2 = var1[var2];
            var3 = var3.bind(var8)(var2);
            var2 = 8;
            var2 = var1[var2];
            var1 = var1.paths;
            var3 = var3.bind(var8)(var2, var1);
            var1 = global;
            var1 = var1.HermesInternal;
            var2 = var1.concat;
            var1 = 'SummaryDivider';
            var2 = var2.bind(var1)(var7);
            var1 = {};
            var1['summary'] = var6;
            var1 = var4.bind(var5)(var3, var2, var1);
 131:
            var1 = undefined;
            return var1;
        }
    };
    var3['openSummaryDividerActionSheet'] = var2;
    return var1;
})();