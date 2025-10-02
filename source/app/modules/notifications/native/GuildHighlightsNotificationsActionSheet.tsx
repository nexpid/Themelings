// app/modules/notifications/native/GuildHighlightsNotificationsActionSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = function GuildPill(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var10 = var1.guild;
            var1 = _closure1_slot14;
            var4 = undefined;
            var9 = var1.bind(var4)();
            var3 = _closure1_slot12;
            var2 = _closure1_slot5;
            var1 = {};
            var5 = var9.guildPill;
            var1['style'] = var5;
            var12 = _closure1_slot11;
            var7 = _closure1_slot1;
            var11 = _closure1_slot2;
            var13 = 10;
            var5 = var11[var13];
            var8 = var7.bind(var4)(var5);
            var5 = {};
            var5['guild'] = var10;
            var7 = _closure1_slot0;
            var13 = var11[var13];
            var13 = var7.bind(var4)(var13);
            var13 = var13.GuildIconSizes;
            var13 = var13.SMALL_32;
            var5['size'] = var13;
            var13 = true;
            var5['animate'] = var13;
            var8 = var12.bind(var4)(var8, var5);
            var5 = new Array(2);
            var5[0] = var8;
            var8 = _closure1_slot11;
            var6 = 11;
            var6 = var11[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.Text;
            var6 = {'style': null, 'variant': 'heading-md/semibold', 'color': 'header-primary'};
            var9 = var9.guildName;
            var6['style'] = var9;
            var9 = null;
            var11 = var9 == var10;
            var9 = undefined;
            if(var11) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var9 = var10.name;
case 2:
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = function isFeedbackComplete(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var3 = null;
            if(!(var3 == var1)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var1 = {};
case 4:
            var4 = var1.rating;
            var2 = var1.reason;
            var1 = _closure1_slot10;
            var1 = var1.GOOD;
            var1 = var4 === var1;
            if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var1 = var3 != var2;
case 6:
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = function isFeedbackGood(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var2 = null;
            if(!(var2 == var1)) { _fun0003_ip = 4; continue _fun0003 }
case 5:
            var1 = {};
case 4:
            var2 = var1.rating;
            var1 = _closure1_slot10;
            var1 = var1.GOOD;
            var1 = var2 === var1;
            return var1;
        }
    };
    var _closure1_slot17 = var1;
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
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var13 = 4;
    var4 = var6[var13];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.HelpdeskArticles;
    var _closure1_slot8 = var7;
    var4 = var4.HighlightSettings;
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.FeedbackRating;
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot11 = var7;
    var4 = var4.jsxs;
    var _closure1_slot12 = var4;
    var10 = 8;
    var4 = var6[var10];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var11 = 'center';
    var9 = {'padding': 24, 'alignItems': 'center', 'justifyContent': 'center'};
    var4['contentContainer'] = var9;
    var9 = {'alignItems': 'center', 'paddingBottom': 24};
    var4['header'] = var9;
    var9 = {};
    var9['marginBottom'] = var13;
    var4['headerTitle'] = var9;
    var9 = {};
    var9['textAlign'] = var11;
    var4['centerText'] = var9;
    var9 = {'marginTop': 16, 'alignItems': 'stretch', 'alignSelf': 'stretch', 'paddingBottom': 16};
    var4['feedback'] = var9;
    var9 = {'height': 40, 'textAlign': 'center', 'textAlignVertical': 'center'};
    var4['thanks'] = var9;
    var9 = {'flex': 1, 'backgroundColor': null, 'marginVertical': 8, 'padding': 0};
    var11 = 9;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_SECONDARY;
    var9['backgroundColor'] = var13;
    var4['settings'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot13 = var4;
    var4 = var6[var10];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'flexDirection': 'row', 'padding': 8, 'marginBottom': 16, 'backgroundColor': null, 'alignItems': 'center', 'justifyContent': 'center'};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.GUILD_NOTIFICATIONS_BOTTOM_SHEET_PILL_BACKGROUND;
    var9['backgroundColor'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.round;
    var9['borderRadius'] = var13;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.shadows;
    var15 = var11.SHADOW_LOW;
    var16 = var9;
    var11 = copyDataProperties(var16, var15);
    var4['guildPill'] = var9;
    var9 = {};
    var9['paddingHorizontal'] = var10;
    var4['guildName'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot14 = var4;
    var4 = 27;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/notifications/native/GuildHighlightsNotificationsActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function SummaryFeedbackActionSheet(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var1 = var2.guildId;
            var _closure2_slot0 = var1;
            var16 = var2.feedbackSettings;
            var _closure2_slot1 = var16;
            var2 = _closure1_slot13;
            var4 = undefined;
            var17 = var2.bind(var4)();
            var11 = _closure1_slot4;
            var2 = var11.useRef;
            var14 = null;
            var6 = var2.bind(var11)(var14);
            var _closure2_slot2 = var6;
            var2 = var11.useState;
            var2 = var2.bind(var11)(var4);
            var9 = _closure1_slot3;
            var8 = 2;
            var2 = var9.bind(var4)(var2, var8);
            var5 = 0;
            var15 = var2[var5];
            var _closure2_slot3 = var15;
            var3 = 1;
            var2 = var2[var3];
            var _closure2_slot4 = var2;
            var2 = var11.useState;
            var10 = false;
            var2 = var2.bind(var11)(var10);
            var2 = var9.bind(var4)(var2, var8);
            var7 = var2[var5];
            var _closure2_slot5 = var7;
            var2 = var2[var3];
            var _closure2_slot6 = var2;
            var2 = var11.useState;
            var2 = var2.bind(var11)(var10);
            var2 = var9.bind(var4)(var2, var8);
            var10 = var2[var5];
            var2 = var2[var3];
            var _closure2_slot7 = var2;
            var8 = var11.useCallback;
            var3 = new Array(2);
            var3[0] = var7;
            var3[1] = var16;
            var2 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var4 = arg1;
                    var2 = _closure2_slot5;
                    if(var2) { _fun0005_ip = 8; continue _fun0005 }
case 9:
                    var5 = null;
                    var6 = var5 == var4;
                    var3 = undefined;
                    if(var6) { _fun0005_ip = 10; continue _fun0005 }
case 11:
                    var3 = var4.rating;
case 10:
                    var2 = var5 == var3;
case 8:
                    if(var2) { _fun0005_ip = 12; continue _fun0005 }
case 13:
                    var2 = _closure2_slot1;
                    var5 = null;
                    var2 = var5 == var2;
                    if(var2) { _fun0005_ip = 14; continue _fun0005 }
case 15:
                    var3 = _closure2_slot1;
                    var3 = var3.onFeedbackCompleted;
                    var2 = var5 == var3;
case 14:
                    if(var2) { _fun0005_ip = 16; continue _fun0005 }
case 17:
                    var3 = _closure2_slot1;
                    var2 = var3.onFeedbackCompleted;
                    var2 = var2.bind(var3)(var4);
case 16:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 12;
                    var2 = var3[var2];
                    var3 = undefined;
                    var4 = var4.bind(var3)(var2);
                    var2 = var4.handleSurveyCleanup;
                    var2 = var2.bind(var4)();
                    var2 = _closure2_slot6;
                    var1 = true;
                    var1 = var2.bind(var3)(var1);
case 12:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var8.bind(var11)(var2, var3);
            var _closure2_slot8 = var2;
            var9 = var11.useEffect;
            var8 = new Array(2);
            var8[0] = var15;
            var8[1] = var2;
            var3 = function() {
                var1 = function() {
                    var3 = _closure2_slot8;
                    var2 = _closure2_slot3;
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                return var1;
            };
            var3 = var9.bind(var11)(var3, var8);
            var8 = var11.useCallback;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var5 = arg1;
                    var2 = _closure2_slot4;
                    var1 = undefined;
                    var2 = var2.bind(var1)(var5);
                    var4 = _closure1_slot16;
                    var4 = var4.bind(var1)(var5);
                    if(var4) { _fun0006_ip = 18; continue _fun0006 }
case 19:
                    var6 = _closure2_slot7;
                    var4 = true;
                    var4 = var6.bind(var1)(var4);
                    _fun0006_ip = 20; continue _fun0006;
case 18:
                    var4 = _closure2_slot8;
                    var4 = var4.bind(var1)(var5);
                    var4 = _closure2_slot7;
                    var3 = false;
                    var3 = var4.bind(var1)(var3);
case 20:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 12;
                    var2 = var4[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.handleSurveyCleanup;
                    var2 = var2.bind(var3)();
                    return var1;
                }
            };
            var8 = var8.bind(var11)(var2, var3);
            var9 = var11.useCallback;
            var3 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var2 = _closure2_slot2;
                    var3 = var2.current;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0007_ip = 21; continue _fun0007 }
case 22:
                    var2 = var3.expandActionSheet;
                    var2 = var2.bind(var3)();
case 21:
                    var3 = _closure2_slot7;
                    var1 = undefined;
                    var2 = false;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var2 = new Array(0);
            var9 = var9.bind(var11)(var3, var2);
            var3 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = 13;
            var2 = var11[var2];
            var12 = var3.bind(var4)(var2);
            var11 = var12.useStateFromStoresObject;
            var2 = _closure1_slot7;
            var3 = new Array(2);
            var3[0] = var2;
            var2 = _closure1_slot6;
            var3[1] = var2;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var1 = {};
                var5 = _closure1_slot6;
                var3 = var5.getGuild;
                var4 = _closure2_slot0;
                var3 = var3.bind(var5)(var4);
                var1['guild'] = var3;
                var3 = _closure1_slot7;
                var2 = var3.isMuted;
                var2 = var2.bind(var3)(var4);
                var1['muted'] = var2;
                var2 = var3.getNotifyHighlights;
                var2 = var2.bind(var3)(var4);
                var1['notifyHighlights'] = var2;
                return var1;
            };
            var1 = var11.bind(var12)(var3, var1, var2);
            var20 = var1.guild;
            var24 = var1.muted;
            var26 = var1.notifyHighlights;
            var2 = var14 == var16;
            var1 = undefined;
            if(var2) { _fun0004_ip = 23; continue _fun0004 }
case 24:
            var1 = var16.reasons;
case 23:
            var1 = var14 != var1;
            var22 = null;
            if(!var1) { _fun0004_ip = 25; continue _fun0004 }
case 26:
            var2 = _closure1_slot16;
            var2 = var2.bind(var4)(var15);
            var11 = _closure1_slot11;
            var21 = _closure1_slot0;
            var23 = _closure1_slot2;
            if(var2) { _fun0004_ip = 27; continue _fun0004 }
case 28:
            var2 = 15;
            var2 = var23[var2];
            var2 = var21.bind(var4)(var2);
            var3 = var2.FeedbackForm;
            var2 = {};
            var12 = 14;
            var18 = var23[var12];
            var18 = var21.bind(var4)(var18);
            var27 = var18.intl;
            var25 = var27.string;
            var18 = var23[var12];
            var18 = var21.bind(var4)(var18);
            var18 = var18.t;
            var18 = var18.Yzl7Oj;
            var18 = var25.bind(var27)(var18);
            var2['ratingsBodyLabel'] = var18;
            var18 = var23[var12];
            var18 = var21.bind(var4)(var18);
            var25 = var18.intl;
            var18 = var25.string;
            var12 = var23[var12];
            var12 = var21.bind(var4)(var12);
            var12 = var12.t;
            var12 = var12.g1q5fn;
            var12 = var18.bind(var25)(var12);
            var2['reasonsHeaderLabel'] = var12;
            var18 = var14 == var16;
            var12 = undefined;
            if(var18) { _fun0004_ip = 29; continue _fun0004 }
case 30:
            var12 = var16.reasons;
case 29:
            if(!(var14 == var12)) { _fun0004_ip = 31; continue _fun0004 }
case 32:
            var12 = new Array(0);
case 31:
            var2['reasons'] = var12;
            if(!(var14 == var16)) { _fun0004_ip = 33; continue _fun0004 }
case 34:
            var12 = function() {
                var1 = undefined;
                return var1;
            };
            _fun0004_ip = 35; continue _fun0004;
case 33:
            var12 = var16.onFeedbackShown;
case 35:
            var2['trackOpen'] = var12;
            var2['onFeedbackChanged'] = var8;
            var2 = var11.bind(var4)(var3, var2);
            _fun0004_ip = 36; continue _fun0004;
case 27:
            var3 = 11;
            var3 = var23[var3];
            var3 = var21.bind(var4)(var3);
            var8 = var3.Text;
            var3 = {'style': null, 'variant': 'heading-md/semibold', 'color': 'text-brand'};
            var16 = var17.centerText;
            var12 = new Array(2);
            var12[0] = var16;
            var16 = var17.thanks;
            var12[1] = var16;
            var3['style'] = var12;
            var12 = 14;
            var16 = var23[var12];
            var16 = var21.bind(var4)(var16);
            var18 = var16.intl;
            var16 = var18.string;
            var12 = var23[var12];
            var12 = var21.bind(var4)(var12);
            var12 = var12.t;
            var12 = var12.kZbFIC;
            var12 = var16.bind(var18)(var12);
            var3['children'] = var12;
            var2 = var11.bind(var4)(var8, var3);
case 36:
            var22 = var2;
case 25:
            var3 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 16;
            var2 = var8[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var3 = var2.bottom;
            var5 = 0;
            if(!var1) { _fun0004_ip = 37; continue _fun0004 }
case 38:
            var2 = 148;
            if(!var7) { _fun0004_ip = 39; continue _fun0004 }
case 40:
            var2 = 64;
case 39:
            var5 = var2;
case 37:
            var2 = 316;
            var2 = var2 + var5;
            var5 = var2 + var3;
            var7 = !var1;
            if(!var1) { _fun0004_ip = 41; continue _fun0004 }
case 42:
            var1 = _closure1_slot16;
            var7 = var1.bind(var4)(var15);
case 41:
            if(var7) { _fun0004_ip = 43; continue _fun0004 }
case 44:
            var2 = var14 == var15;
            var1 = undefined;
            if(var2) { _fun0004_ip = 45; continue _fun0004 }
case 46:
            var1 = var15.rating;
case 45:
            var7 = var14 == var1;
case 43:
            var3 = _closure1_slot11;
            var2 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 17;
            var1 = var8[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.BottomSheet;
            var1 = {};
            var8 = true;
            var1['scrollable'] = var8;
            var1['ref'] = var6;
            var6 = undefined;
            if(!var7) { _fun0004_ip = 47; continue _fun0004 }
case 48:
            var6 = var5;
case 47:
            var1['contentHeight'] = var6;
            var1['startHeight'] = var5;
            var7 = _closure1_slot11;
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 18;
            var5 = var8[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.BottomSheetScrollView;
            var5 = {};
            var8 = var17.contentContainer;
            var5['contentContainerStyle'] = var8;
            var8 = undefined;
            if(!var10) { _fun0004_ip = 49; continue _fun0004 }
case 50:
            var8 = var9;
case 49:
            var5['onLayout'] = var8;
            var10 = _closure1_slot12;
            var9 = _closure1_slot5;
            var8 = {};
            var11 = {};
            var12 = var17.header;
            var11['style'] = var12;
            var18 = _closure1_slot11;
            var16 = _closure1_slot15;
            var12 = {};
            var12['guild'] = var20;
            var12 = var18.bind(var4)(var16, var12);
            var16 = new Array(3);
            var16[0] = var12;
            var21 = _closure1_slot11;
            var27 = _closure1_slot0;
            var32 = _closure1_slot2;
            var12 = 11;
            var12 = var32[var12];
            var12 = var27.bind(var4)(var12);
            var18 = var12.Text;
            var12 = {'style': null, 'variant': 'heading-lg/semibold', 'color': 'header-primary'};
            var20 = var17.headerTitle;
            var12['style'] = var20;
            var20 = 14;
            var23 = var32[var20];
            var23 = var27.bind(var4)(var23);
            var28 = var23.intl;
            var25 = var28.string;
            var23 = var32[var20];
            var23 = var27.bind(var4)(var23);
            var23 = var23.t;
            var23 = var23.o8Bypq;
            var23 = var25.bind(var28)(var23);
            var12['children'] = var23;
            var12 = var21.bind(var4)(var18, var12);
            var16[1] = var12;
            var23 = _closure1_slot11;
            var12 = 19;
            var18 = var32[var12];
            var18 = var27.bind(var4)(var18);
            var21 = var18.TextWithIOSLinkWorkaround;
            var18 = {'style': null, 'variant': 'text-md/medium', 'color': 'header-secondary'};
            var25 = var17.centerText;
            var18['style'] = var25;
            var25 = var32[var20];
            var25 = var27.bind(var4)(var25);
            var29 = var25.intl;
            var28 = var29.format;
            var25 = var32[var20];
            var25 = var27.bind(var4)(var25);
            var25 = var25.t;
            var27 = var25.enfuur;
            var25 = {};
            var31 = _closure1_slot1;
            var30 = 20;
            var30 = var32[var30];
            var32 = var31.bind(var4)(var30);
            var31 = var32.getArticleURL;
            var30 = _closure1_slot8;
            var30 = var30.HIGHLIGHTS_NOTIFICATIONS;
            var30 = var31.bind(var32)(var30);
            var25['helpUrl'] = var30;
            var25 = var28.bind(var29)(var27, var25);
            var18['children'] = var25;
            var18 = var23.bind(var4)(var21, var18);
            var16[2] = var18;
            var11['children'] = var16;
            var16 = var10.bind(var4)(var9, var11);
            var11 = new Array(4);
            var11[0] = var16;
            var14 = var14 != var22;
            if(!var14) { _fun0004_ip = 51; continue _fun0004 }
case 52:
            var21 = _closure1_slot11;
            var18 = _closure1_slot1;
            var23 = _closure1_slot2;
            var16 = 21;
            var16 = var23[var16];
            var16 = var18.bind(var4)(var16);
            var18 = var16.View;
            var16 = {};
            var23 = var17.feedback;
            var16['style'] = var23;
            var16['children'] = var22;
            var14 = var21.bind(var4)(var18, var16);
case 51:
            var11[1] = var14;
            var14 = _closure1_slot17;
            var15 = var14.bind(var4)(var15);
            var14 = !var15;
            if(var15) { _fun0004_ip = 53; continue _fun0004 }
case 54:
            var18 = _closure1_slot11;
            var29 = _closure1_slot0;
            var25 = _closure1_slot2;
            var15 = 22;
            var15 = var25[var15];
            var15 = var29.bind(var4)(var15);
            var16 = var15.Card;
            var15 = {'style': null, 'shadow': 'low', 'border': 'subtle'};
            var21 = var17.settings;
            var15['style'] = var21;
            var23 = _closure1_slot11;
            var21 = 23;
            var21 = var25[var21];
            var21 = var29.bind(var4)(var21);
            var22 = var21.FormSwitchRow;
            var21 = {};
            var21['disabled'] = var24;
            var27 = var25[var20];
            var27 = var29.bind(var4)(var27);
            var28 = var27.intl;
            var27 = var28.string;
            var25 = var25[var20];
            var25 = var29.bind(var4)(var25);
            var25 = var25.t;
            var25 = var25.MVi7LS;
            var25 = var27.bind(var28)(var25);
            var21['label'] = var25;
            if(var24) { _fun0004_ip = 55; continue _fun0004 }
case 56:
            var25 = _closure1_slot9;
            var25 = var25.DISABLED;
            var24 = var26 === var25;
case 55:
            var21['value'] = var24;
            var24 = function onValueChange(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var2 = arg1;
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 24;
                    var3 = var3[var1];
                    var1 = undefined;
                    var6 = var4.bind(var1)(var3);
                    var5 = var6.updateGuildNotificationSettings;
                    var4 = _closure2_slot0;
                    var3 = {};
                    var9 = _closure1_slot9;
                    if(var2) { _fun0008_ip = 57; continue _fun0008 }
case 15:
                    var8 = var9.ENABLED;
                    _fun0008_ip = 14; continue _fun0008;
case 57:
                    var8 = var9.DISABLED;
case 14:
                    var3['notify_highlights'] = var8;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var7 = 25;
                    var7 = var9[var7];
                    var7 = var8.bind(var1)(var7);
                    var8 = var7.NotificationLabel;
                    var7 = var8.highlights;
                    var2 = !var2;
                    var2 = var7.bind(var8)(var2);
                    var2 = var5.bind(var6)(var4, var3, var2);
                    return var1;
                }
            };
            var21['onValueChange'] = var24;
            var21 = var23.bind(var4)(var22, var21);
            var15['children'] = var21;
            var14 = var18.bind(var4)(var16, var15);
case 53:
            var11[2] = var14;
            var14 = _closure1_slot11;
            var16 = _closure1_slot0;
            var15 = _closure1_slot2;
            var12 = var15[var12];
            var12 = var16.bind(var4)(var12);
            var13 = var12.TextWithIOSLinkWorkaround;
            var12 = {'style': null, 'variant': 'text-sm/medium', 'color': 'header-secondary'};
            var17 = var17.centerText;
            var12['style'] = var17;
            var17 = var15[var20];
            var17 = var16.bind(var4)(var17);
            var18 = var17.intl;
            var17 = var18.format;
            var15 = var15[var20];
            var15 = var16.bind(var4)(var15);
            var15 = var15.t;
            var16 = var15.F9rfLS;
            var15 = {};
            var19 = function notifSettingsHook() {
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 26;
                var2 = var4[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var2 = var5.hideActionSheet;
                var2 = var2.bind(var5)();
                var2 = 24;
                var2 = var4[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.open;
                var2 = _closure2_slot0;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var15['notifSettingsHook'] = var19;
            var15 = var17.bind(var18)(var16, var15);
            var12['children'] = var15;
            var12 = var14.bind(var4)(var13, var12);
            var11[3] = var12;
            var8['children'] = var11;
            var8 = var10.bind(var4)(var9, var8);
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