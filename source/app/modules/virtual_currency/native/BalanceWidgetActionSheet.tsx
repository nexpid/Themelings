// app/modules/virtual_currency/native/BalanceWidgetActionSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
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
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.View;
    var _closure1_slot4 = var7;
    var7 = var4.TouchableOpacity;
    var _closure1_slot5 = var7;
    var4 = var4.Platform;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot6 = var7;
    var7 = var4.Fonts;
    var _closure1_slot7 = var7;
    var4 = var4.HelpdeskArticles;
    var _closure1_slot8 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ContentDismissActionType;
    var _closure1_slot9 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot10 = var7;
    var4 = var4.jsxs;
    var _closure1_slot11 = var4;
    var4 = 26;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = function(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var1 = {};
            var2 = {'flex': 1, 'flexDirection': 'column', 'gap': null, 'minWidth': '100%'};
            var9 = _closure1_slot1;
            var6 = _closure1_slot2;
            var8 = 13;
            var5 = var6[var8];
            var7 = undefined;
            var5 = var9.bind(var7)(var5);
            var5 = var5.spacing;
            var5 = var5.PX_12;
            var2['gap'] = var5;
            var5 = var6[var8];
            var5 = var9.bind(var7)(var5);
            var5 = var5.spacing;
            var5 = var5.PX_12;
            var2['paddingTop'] = var5;
            var5 = var6[var8];
            var5 = var9.bind(var7)(var5);
            var5 = var5.spacing;
            var5 = var5.PX_16;
            var2['paddingHorizontal'] = var5;
            var1['actions'] = var2;
            var2 = {'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'center', 'gap': null, 'flexWrap': 'wrap'};
            var5 = 'center';
            var6 = var6[var8];
            var6 = var9.bind(var7)(var6);
            var6 = var6.spacing;
            var6 = var6.PX_8;
            var2['gap'] = var6;
            var1['balanceHeader'] = var2;
            var2 = {};
            var2['color'] = var4;
            var9 = 36;
            var2['fontSize'] = var9;
            var6 = 44;
            var11 = 'android';
            var10 = arg2;
            if(!(var11 === var10)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = var9;
case 2:
            var2['lineHeight'] = var6;
            var2['textAlignVertical'] = var5;
            var1['balanceText'] = var2;
            var2 = {'width': '100%', 'height': '100%', 'alignItems': 'center', 'flex': 1};
            var6 = _closure1_slot1;
            var5 = _closure1_slot2;
            var9 = var5[var8];
            var9 = var6.bind(var7)(var9);
            var9 = var9.spacing;
            var9 = var9.PX_16;
            var2['marginBottom'] = var9;
            var1['content'] = var2;
            var2 = {'width': '100%', 'paddingTop': null, 'paddingBottom': null, 'alignItems': 'center', 'position': 'relative', 'flexDirection': 'column'};
            var9 = var5[var8];
            var9 = var6.bind(var7)(var9);
            var9 = var9.spacing;
            var9 = var9.PX_12;
            var2['paddingTop'] = var9;
            var9 = var5[var8];
            var9 = var6.bind(var7)(var9);
            var9 = var9.spacing;
            var9 = var9.PX_16;
            var2['paddingBottom'] = var9;
            var1['header'] = var2;
            var2 = {'width': 32, 'height': 32, 'backgroundColor': null, 'borderRadius': null, 'justifyContent': 'center', 'alignItems': 'center'};
            var9 = var5[var8];
            var9 = var6.bind(var7)(var9);
            var9 = var9.colors;
            var9 = var9.REDESIGN_BUTTON_TERTIARY_BACKGROUND;
            var2['backgroundColor'] = var9;
            var9 = var5[var8];
            var9 = var6.bind(var7)(var9);
            var9 = var9.radii;
            var9 = var9.round;
            var2['borderRadius'] = var9;
            var1['infoIconBackground'] = var2;
            var2 = {};
            var9 = 'absolute';
            var2['position'] = var9;
            var9 = var5[var8];
            var9 = var6.bind(var7)(var9);
            var9 = var9.spacing;
            var9 = var9.PX_16;
            var2['left'] = var9;
            var9 = var5[var8];
            var9 = var6.bind(var7)(var9);
            var9 = var9.spacing;
            var9 = var9.PX_16;
            var2['top'] = var9;
            var9 = 10;
            var2['zIndex'] = var9;
            var1['infoIconContainer'] = var2;
            var2 = {'position': 'absolute', 'top': 0, 'left': 0, 'right': 0, 'borderRadius': null, 'bottom': 4294967196};
            var9 = var5[var8];
            var9 = var6.bind(var7)(var9);
            var9 = var9.radii;
            var9 = var9.xl;
            var2['borderRadius'] = var9;
            var1['promotionalBackground'] = var2;
            var2 = {'flex': 1, 'height': 428};
            var1['promotionalBackgroundContainer'] = var2;
            var2 = {'width': '100%', 'height': '100%'};
            var1['promotionalBannerAsset'] = var2;
            var2 = {'width': '100%', 'height': 144};
            var9 = var5[var8];
            var9 = var6.bind(var7)(var9);
            var9 = var9.spacing;
            var9 = var9.PX_12;
            var2['gap'] = var9;
            var5 = var5[var8];
            var5 = var6.bind(var7)(var5);
            var5 = var5.spacing;
            var5 = var5.PX_64;
            var2['marginBottom'] = var5;
            var1['promotionalBannerContainer'] = var2;
            var2 = {'color': null, 'fontFamily': null, 'fontWeight': '600', 'fontSize': 16, 'lineHeight': 20, 'textAlign': 'center'};
            var2['color'] = var4;
            var3 = _closure1_slot7;
            var3 = var3.PRIMARY_BOLD;
            var2['fontFamily'] = var3;
            var1['promotionalBannerText'] = var2;
            return var1;
        }
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot12 = var4;
    var4 = 27;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/virtual_currency/native/BalanceWidgetActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var27 = var1.balance;
            var _closure2_slot0 = var27;
            var5 = var1.themeOverride;
            var21 = var1.primaryButtonConfig;
            var18 = var1.secondaryButtonConfig;
            var1 = var1.source;
            var _closure2_slot1 = var1;
            var6 = _closure1_slot3;
            var1 = var6.useRef;
            var20 = null;
            var7 = var1.bind(var6)(var20);
            var _closure2_slot2 = var7;
            var3 = var6.useCallback;
            var2 = function() {
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 9;
                var3 = var6[var1];
                var1 = undefined;
                var3 = var5.bind(var1)(var3);
                var4 = 10;
                var4 = var6[var4];
                var5 = var5.bind(var1)(var4);
                var4 = var5.getArticleURL;
                var2 = _closure1_slot8;
                var2 = var2.ORBS_FAQ;
                var2 = var4.bind(var5)(var2);
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var1 = new Array(0);
            var19 = var3.bind(var6)(var2, var1);
            var2 = var6.useContext;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 11;
            var1 = var4[var1];
            var4 = undefined;
            var1 = var3.bind(var4)(var1);
            var1 = var1.AccessibilityPreferencesContext;
            var1 = var2.bind(var6)(var1);
            var1 = var1.reducedMotion;
            var22 = var1.enabled;
            var3 = var6.useMemo;
            var2 = new Array(1);
            var2[0] = var27;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot0;
                    var1 = null;
                    var4 = var1 != var2;
                    var3 = 0;
                    if(!var4) { _fun0003_ip = 4; continue _fun0003 }
case 5:
                    var3 = var2;
case 4:
                    var2 = 4100;
                    var2 = var3 > var2;
                    var1 = null;
                    if(!var2) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                    var2 = {};
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 5;
                    var3 = var8[var3];
                    var6 = undefined;
                    var3 = var7.bind(var6)(var3);
                    var3 = var3.default;
                    var2['backgroundVideo'] = var3;
                    var3 = 6;
                    var3 = var8[var3];
                    var3 = var7.bind(var6)(var3);
                    var3 = var3.default;
                    var2['backgroundImage'] = var3;
                    var3 = 7;
                    var3 = var8[var3];
                    var3 = var7.bind(var6)(var3);
                    var3 = var3.default;
                    var2['bannerImage'] = var3;
                    var3 = 8;
                    var4 = var8[var3];
                    var4 = var7.bind(var6)(var4);
                    var5 = var4.intl;
                    var4 = var5.string;
                    var3 = var8[var3];
                    var3 = var7.bind(var6)(var3);
                    var3 = var3.t;
                    var3 = var3.LaMEFL;
                    var3 = var4.bind(var5)(var3);
                    var2['bannerText'] = var3;
                    var1 = var2;
case 6:
                    return var1;
                }
            };
            var24 = var3.bind(var6)(var1, var2);
            var1 = var4 === var5;
            if(!var1) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var1 = var20 != var24;
case 8:
            if(!var1) { _fun0002_ip = 10; continue _fun0002 }
case 6:
            var5 = 'dark';
case 10:
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 12;
            var1 = var8[var1];
            var3 = var6.bind(var4)(var1);
            var2 = var3.useToken;
            var9 = _closure1_slot1;
            var30 = 13;
            var1 = var8[var30];
            var1 = var9.bind(var4)(var1);
            var1 = var1.colors;
            var1 = var1.MOBILE_TEXT_HEADING_PRIMARY;
            var23 = var2.bind(var3)(var1, var5);
            var2 = _closure1_slot12;
            var1 = 'android';
            var15 = var2.bind(var4)(var23, var1);
            var9 = _closure1_slot3;
            var3 = var9.useEffect;
            var2 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var4 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 14;
                    var3 = var2[var1];
                    var1 = undefined;
                    var7 = var4.bind(var1)(var3);
                    var5 = var7.track;
                    var3 = _closure1_slot6;
                    var4 = var3.ORB_BALANCE_ACTION_SHEET_ACTION;
                    var3 = {};
                    var8 = 'VIEW';
                    var3['type'] = var8;
                    var9 = _closure2_slot1;
                    var3['source'] = var9;
                    var8 = _closure2_slot0;
                    var3['balance'] = var8;
                    var3 = var5.bind(var7)(var4, var3);
                    var8 = _closure1_slot0;
                    var4 = 15;
                    var3 = var2[var4];
                    var5 = var8.bind(var1)(var3);
                    var3 = var5.UNSAFE_isDismissibleContentDismissed;
                    var7 = 16;
                    var2 = var2[var7];
                    var2 = var8.bind(var1)(var2);
                    var2 = var2.DismissibleContent;
                    var2 = var2.VIRTUAL_CURRENCY_MOBILE_ONBOARDING_PILL;
                    var2 = var3.bind(var5)(var2);
                    if(var2) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var4 = var2[var4];
                    var5 = var3.bind(var1)(var4);
                    var4 = var5.UNSAFE_markDismissibleContentAsDismissed;
                    var2 = var2[var7];
                    var2 = var3.bind(var1)(var2);
                    var2 = var2.DismissibleContent;
                    var3 = var2.VIRTUAL_CURRENCY_MOBILE_ONBOARDING_PILL;
                    var2 = {};
                    var6 = _closure1_slot9;
                    var6 = var6.AUTO_DISMISS;
                    var2['dismissAction'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
case 11:
                    return var1;
                }
            };
            var1 = new Array(0);
            var1 = var3.bind(var9)(var2, var1);
            var3 = _closure1_slot10;
            var1 = 17;
            var1 = var8[var1];
            var1 = var6.bind(var4)(var1);
            var2 = var1.ThemeContextProvider;
            var1 = {};
            var1['theme'] = var5;
            var5 = 18;
            var5 = var8[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.BottomSheet;
            var5 = {};
            var5['ref'] = var7;
            var25 = true;
            var5['startExpanded'] = var25;
            var7 = function handleComponent() {
                var4 = _closure1_slot10;
                var3 = _closure1_slot4;
                var2 = undefined;
                var1 = {};
                var1 = var4.bind(var2)(var3, var1);
                return var1;
            };
            var5['handleComponent'] = var7;
            var13 = false;
            var5['handleDisabled'] = var13;
            var9 = _closure1_slot11;
            var8 = _closure1_slot4;
            var7 = {};
            var11 = var15.content;
            var10 = new Array(2);
            var10[0] = var11;
            var11 = var20 != var24;
            if(!var11) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var12 = var24.backgroundVideo;
            var11 = var20 != var12;
case 13:
            if(!var11) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var12 = var24.backgroundImage;
            var11 = var20 != var12;
case 15:
            if(!var11) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var11 = var15.promotionalBackgroundContainer;
case 17:
            var10[1] = var11;
            var7['style'] = var10;
            var11 = var20 != var24;
            if(!var11) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var10 = var24.backgroundVideo;
            var11 = var20 != var10;
case 19:
            if(!var11) { _fun0002_ip = 21; continue _fun0002 }
case 22:
            var10 = var24.backgroundImage;
            var11 = var20 != var10;
case 21:
            if(!var11) { _fun0002_ip = 23; continue _fun0002 }
case 24:
            var17 = _closure1_slot10;
            if(var22) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            var12 = _closure1_slot0;
            var26 = _closure1_slot2;
            var10 = 20;
            var10 = var26[var10];
            var10 = var12.bind(var4)(var10);
            var12 = var10.VideoComponent;
            var10 = {};
            var26 = {};
            var28 = var24.backgroundVideo;
            var26['uri'] = var28;
            var10['source'] = var26;
            var26 = var24.backgroundImage;
            var10['poster'] = var26;
            var26 = var15.promotionalBackground;
            var10['style'] = var26;
            var10['muted'] = var25;
            var10['pauseWhileAppInactive'] = var25;
            var10['paused'] = var22;
            var22 = 'cover';
            var10['posterResizeMode'] = var22;
            var10['resizeMode'] = var22;
            var10['preventsDisplaySleepDuringVideoPlayback'] = var13;
            var10 = var17.bind(var4)(var12, var10);
            _fun0002_ip = 27; continue _fun0002;
case 25:
            var13 = _closure1_slot1;
            var22 = _closure1_slot2;
            var12 = 19;
            var12 = var22[var12];
            var13 = var13.bind(var4)(var12);
            var12 = {};
            var22 = {};
            var25 = var24.backgroundImage;
            var22['uri'] = var25;
            var12['source'] = var22;
            var22 = var15.promotionalBackground;
            var12['style'] = var22;
            var22 = 'cover';
            var12['resizeMode'] = var22;
            var10 = var17.bind(var4)(var13, var12);
case 27:
            var11 = var10;
case 23:
            var10 = new Array(6);
            var10[0] = var11;
            var13 = _closure1_slot10;
            var28 = _closure1_slot0;
            var29 = _closure1_slot2;
            var11 = 21;
            var11 = var29[var11];
            var11 = var28.bind(var4)(var11);
            var12 = var11.ActionSheetHeaderBar;
            var11 = {};
            var16 = function onPress() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = _closure2_slot2;
                    var2 = var1.current;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0005_ip = 28; continue _fun0005 }
case 5:
                    var1 = var2.closeActionSheet;
                    var1 = var1.bind(var2)();
case 28:
                    var1 = undefined;
                    return var1;
                }
            };
            var11['onPress'] = var16;
            var11 = var13.bind(var4)(var12, var11);
            var10[1] = var11;
            var12 = _closure1_slot4;
            var11 = {};
            var16 = var15.infoIconContainer;
            var11['style'] = var16;
            var17 = _closure1_slot5;
            var16 = {};
            var16['onPress'] = var19;
            var19 = 'button';
            var16['accessibilityRole'] = var19;
            var26 = 8;
            var19 = var29[var26];
            var19 = var28.bind(var4)(var19);
            var25 = var19.intl;
            var22 = var25.string;
            var19 = var29[var26];
            var19 = var28.bind(var4)(var19);
            var19 = var19.t;
            var19 = var19.B1oJtQ;
            var19 = var22.bind(var25)(var19);
            var16['accessibilityLabel'] = var19;
            var19 = {};
            var22 = var15.infoIconBackground;
            var19['style'] = var22;
            var22 = 22;
            var22 = var29[var22];
            var22 = var28.bind(var4)(var22);
            var25 = var22.CircleQuestionIcon;
            var22 = {};
            var31 = 'sm';
            var22['size'] = var31;
            var31 = _closure1_slot1;
            var30 = var29[var30];
            var30 = var31.bind(var4)(var30);
            var30 = var30.colors;
            var30 = var30.INTERACTIVE_TEXT_DEFAULT;
            var22['color'] = var30;
            var22 = var13.bind(var4)(var25, var22);
            var19['children'] = var22;
            var19 = var13.bind(var4)(var12, var19);
            var16['children'] = var19;
            var16 = var13.bind(var4)(var17, var16);
            var11['children'] = var16;
            var11 = var13.bind(var4)(var12, var11);
            var10[2] = var11;
            var11 = {};
            var16 = var15.header;
            var11['style'] = var16;
            var17 = _closure1_slot11;
            var16 = {};
            var19 = var15.balanceHeader;
            var16['style'] = var19;
            var19 = 23;
            var19 = var29[var19];
            var19 = var28.bind(var4)(var19);
            var22 = var19.OrbsIcon;
            var19 = {};
            var25 = 'lg';
            var19['size'] = var25;
            var19['color'] = var23;
            var22 = var13.bind(var4)(var22, var19);
            var19 = new Array(2);
            var19[0] = var22;
            var25 = 24;
            var22 = var29[var25];
            var22 = var28.bind(var4)(var22);
            var23 = var22.Text;
            var22 = {};
            var30 = 'display-md';
            var22['variant'] = var30;
            var30 = var15.balanceText;
            var22['style'] = var30;
            var30 = var29[var26];
            var30 = var28.bind(var4)(var30);
            var31 = var30.intl;
            var30 = var31.formatToPlainString;
            var26 = var29[var26];
            var26 = var28.bind(var4)(var26);
            var26 = var26.t;
            var29 = var26.W4DfeF;
            var28 = {};
            var33 = var20 != var27;
            var32 = 0;
            if(!var33) { _fun0002_ip = 29; continue _fun0002 }
case 30:
            var32 = var27;
case 29:
            var28['orbAmount'] = var32;
            var28 = var30.bind(var31)(var29, var28);
            var22['accessibilityLabel'] = var28;
            var28 = var20 != var27;
            var26 = 0;
            if(!var28) { _fun0002_ip = 31; continue _fun0002 }
case 32:
            var26 = var27;
case 31:
            var22['children'] = var26;
            var22 = var13.bind(var4)(var23, var22);
            var19[1] = var22;
            var16['children'] = var19;
            var16 = var17.bind(var4)(var12, var16);
            var11['children'] = var16;
            var11 = var13.bind(var4)(var12, var11);
            var10[3] = var11;
            var11 = var20 != var24;
            if(!var11) { _fun0002_ip = 33; continue _fun0002 }
case 34:
            var12 = var24.bannerImage;
            var11 = var20 != var12;
case 33:
            if(!var11) { _fun0002_ip = 35; continue _fun0002 }
case 36:
            var16 = _closure1_slot11;
            var13 = _closure1_slot4;
            var12 = {};
            var17 = var15.promotionalBannerContainer;
            var12['style'] = var17;
            var22 = _closure1_slot10;
            var19 = _closure1_slot1;
            var23 = _closure1_slot2;
            var17 = 19;
            var17 = var23[var17];
            var19 = var19.bind(var4)(var17);
            var17 = {};
            var23 = {};
            var26 = var24.bannerImage;
            var23['uri'] = var26;
            var17['source'] = var23;
            var23 = var15.promotionalBannerAsset;
            var17['style'] = var23;
            var23 = 'contain';
            var17['resizeMode'] = var23;
            var19 = var22.bind(var4)(var19, var17);
            var17 = new Array(2);
            var17[0] = var19;
            var19 = var24.bannerText;
            var19 = var20 != var19;
            if(!var19) { _fun0002_ip = 37; continue _fun0002 }
case 38:
            var22 = var24.bannerText;
            var20 = '';
            var19 = var20 !== var22;
case 37:
            if(!var19) { _fun0002_ip = 39; continue _fun0002 }
case 40:
            var23 = _closure1_slot10;
            var22 = _closure1_slot0;
            var20 = _closure1_slot2;
            var20 = var20[var25];
            var20 = var22.bind(var4)(var20);
            var22 = var20.Text;
            var20 = {};
            var25 = 'heading-xl/medium';
            var20['variant'] = var25;
            var25 = var15.promotionalBannerText;
            var20['style'] = var25;
            var24 = var24.bannerText;
            var20['children'] = var24;
            var19 = var23.bind(var4)(var22, var20);
case 39:
            var17[1] = var19;
            var12['children'] = var17;
            var11 = var16.bind(var4)(var13, var12);
case 35:
            var10[4] = var11;
            var13 = _closure1_slot11;
            var12 = _closure1_slot4;
            var11 = {};
            var15 = var15.actions;
            var11['style'] = var15;
            var17 = _closure1_slot10;
            var16 = _closure1_slot0;
            var19 = _closure1_slot2;
            var15 = 25;
            var14 = var19[var15];
            var14 = var16.bind(var4)(var14);
            var20 = var14.Button;
            var14 = {'text': null, 'variant': 'primary', 'size': 'lg'};
            var22 = var21.buttonText;
            var14['text'] = var22;
            var21 = var21.onButtonPress;
            var14['onPress'] = var21;
            var20 = var17.bind(var4)(var20, var14);
            var14 = new Array(2);
            var14[0] = var20;
            var15 = var19[var15];
            var15 = var16.bind(var4)(var15);
            var16 = var15.Button;
            var15 = {'text': null, 'variant': 'tertiary', 'size': 'lg'};
            var19 = var18.buttonText;
            var15['text'] = var19;
            var18 = var18.onButtonPress;
            var15['onPress'] = var18;
            var15 = var17.bind(var4)(var16, var15);
            var14[1] = var15;
            var11['children'] = var14;
            var11 = var13.bind(var4)(var12, var11);
            var10[5] = var11;
            var7['children'] = var10;
            var7 = var9.bind(var4)(var8, var7);
            var5['children'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();