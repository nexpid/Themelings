// app/modules/user_profile/native/UserProfileConnections.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var13 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var7;
    var1 = function VerifiedIcon(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var7 = var1.theme;
            var1 = var1.isTwitterVerifiedAccount;
            var4 = undefined;
            if(!(var1 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = false;
case 2:
            var2 = _closure1_slot17;
            var5 = var2.bind(var4)();
            var9 = {};
            var2 = _closure1_slot16;
            var9['size'] = var2;
            var2 = var5.verifiedIcon;
            var9['style'] = var2;
            var6 = _closure1_slot0;
            var2 = _closure1_slot2;
            var3 = 12;
            var3 = var2[var3];
            var10 = var6.bind(var4)(var3);
            var6 = var10.useToken;
            var11 = _closure1_slot1;
            var3 = 10;
            var2 = var2[var3];
            var2 = var11.bind(var4)(var2);
            var2 = var2.colors;
            var2 = var2.MOBILE_TEXT_HEADING_PRIMARY;
            var15 = var6.bind(var10)(var2, var7);
            if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = _closure1_slot1;
            var2 = _closure1_slot2;
            var2 = var2[var3];
            var2 = var6.bind(var4)(var2);
            var2 = var2.unsafe_rawColors;
            var15 = var2.PLATFORM_TWITTER;
case 4:
            var6 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 13;
            var2 = var10[var2];
            var6 = var6.bind(var4)(var2);
            var2 = var6.isThemeLight;
            var2 = var2.bind(var6)(var7);
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            if(var1) { _fun0001_ip = 6; continue _fun0001 }
case 8:
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var1 = var1[var3];
            var1 = var2.bind(var4)(var1);
            var1 = var1.unsafe_rawColors;
            var10 = var1.BLACK;
            _fun0001_ip = 9; continue _fun0001;
case 6:
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var1 = var1[var3];
            var1 = var2.bind(var4)(var1);
            var1 = var1.unsafe_rawColors;
            var10 = var1.WHITE;
case 9:
            var3 = _closure1_slot14;
            var2 = _closure1_slot5;
            var1 = {};
            var5 = var5.verifiedIconContainer;
            var1['style'] = var5;
            var14 = _closure1_slot13;
            var7 = _closure1_slot0;
            var13 = _closure1_slot2;
            var6 = 8;
            var5 = var13[var6];
            var5 = var7.bind(var4)(var5);
            var11 = var5.Icon;
            var5 = {};
            var12 = _closure1_slot1;
            var16 = 14;
            var16 = var13[var16];
            var16 = var12.bind(var4)(var16);
            var5['source'] = var16;
            var5['color'] = var15;
            var18 = var5;
            var17 = var9;
            var15 = copyDataProperties(var18, var17);
            var11 = var14.bind(var4)(var11, var5);
            var5 = new Array(2);
            var5[0] = var11;
            var8 = _closure1_slot13;
            var6 = var13[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.Icon;
            var6 = {};
            var11 = 15;
            var11 = var13[var11];
            var11 = var12.bind(var4)(var11);
            var6['source'] = var11;
            var6['color'] = var10;
            var18 = var6;
            var17 = var9;
            var9 = copyDataProperties(var18, var17);
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot21 = var1;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var4);
    var16 = 0;
    var5 = var7[var16];
    var4 = metroImportAll;
    var1 = undefined;
    var8 = var4.bind(var1)(var5);
    var _closure1_slot3 = var8;
    var14 = 1;
    var4 = var7[var14];
    var4 = var6.bind(var1)(var4);
    var5 = var4.Pressable;
    var _closure1_slot4 = var5;
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var18 = var4.CARD_PADDING;
    var15 = var4.CARD_ROWS_COLUMN_GAP;
    var5 = var4.CARD_ROWS_ICON_SIZE;
    var _closure1_slot8 = var5;
    var4 = var4.CARD_ROWS_ICON_SIZE_VARIANT;
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var5 = var4.AnalyticEvents;
    var _closure1_slot10 = var5;
    var4 = var4.PlatformTypes;
    var _closure1_slot11 = var4;
    var4 = 6;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.MetadataFields;
    var _closure1_slot12 = var4;
    var4 = 7;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var5 = var4.jsx;
    var _closure1_slot13 = var5;
    var5 = var4.jsxs;
    var _closure1_slot14 = var5;
    var4 = var4.Fragment;
    var _closure1_slot15 = var4;
    var11 = 8;
    var4 = var7[var11];
    var4 = var6.bind(var1)(var4);
    var4 = var4.Icon;
    var4 = var4.Sizes;
    var9 = var4.REFRESH_SMALL_16;
    var _closure1_slot16 = var9;
    var4 = var7[var11];
    var5 = var6.bind(var1)(var4);
    var4 = var5.getIconSize;
    var12 = var4.bind(var5)(var9);
    var4 = 9;
    var4 = var7[var4];
    var9 = var6.bind(var1)(var4);
    var5 = var9.createStyles;
    var4 = {};
    var10 = {};
    var17 = 12;
    var17 = var18 - var17;
    var10['paddingBottom'] = var17;
    var4['cardContainer'] = var10;
    var10 = {};
    var10['marginBottom'] = var16;
    var4['cardTitle'] = var10;
    var10 = {'flexDirection': 'row', 'alignItems': 'center', 'columnGap': null, 'paddingVertical': 12, 'minHeight': 60};
    var10['columnGap'] = var15;
    var4['connectionRow'] = var10;
    var10 = {};
    var10['flexGrow'] = var14;
    var4['connectionInfoContainer'] = var10;
    var10 = {'flexDirection': 'row', 'alignItems': 'center', 'columnGap': 4};
    var4['connectedAccountName'] = var10;
    var10 = {'flex': 1, 'marginRight': 4};
    var4['connectedAccountNameText'] = var10;
    var10 = {};
    var10['height'] = var12;
    var10['width'] = var12;
    var4['verifiedIconContainer'] = var10;
    var10 = {'position': 'absolute', 'left': 0, 'top': 0};
    var4['verifiedIcon'] = var10;
    var10 = {'flexDirection': 'row', 'flexWrap': 'wrap', 'alignItems': 'center', 'overflow': 'hidden'};
    var4['connectionMetadata'] = var10;
    var10 = {};
    var12 = 10;
    var12 = var7[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.INTERACTIVE_TEXT_ACTIVE;
    var10['color'] = var12;
    var4['metadataItem'] = var10;
    var10 = {'flexDirection': 'row', 'alignItems': 'center', 'marginTop': 6};
    var4['poweredByContainer'] = var10;
    var10 = {};
    var12 = var7[var11];
    var13 = var6.bind(var1)(var12);
    var12 = var13.getIconSize;
    var11 = var7[var11];
    var11 = var6.bind(var1)(var11);
    var11 = var11.Icon;
    var11 = var11.Sizes;
    var11 = var11.MEDIUM;
    var11 = var12.bind(var13)(var11);
    var10['borderRadius'] = var11;
    var4['applicationIcon'] = var10;
    var4 = var5.bind(var9)(var4);
    var _closure1_slot17 = var4;
    var5 = var8.memo;
    var4 = function(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var6 = var1.userId;
            var _closure2_slot0 = var6;
            var14 = var1.account;
            var _closure2_slot1 = var14;
            var23 = var1.theme;
            var13 = var1.locale;
            var3 = var1.showMetadata;
            var4 = undefined;
            if(!(var3 === var4)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var3 = true;
case 10:
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var1 = _closure1_slot17;
            var21 = var1.bind(var4)();
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var1 = 16;
            var1 = var11[var1];
            var5 = var9.bind(var4)(var1);
            var1 = var5.useUserProfileAnalyticsContext;
            var1 = var1.bind(var5)();
            var5 = var1.trackUserProfileAction;
            _closure2_slot2 = var5;
            var10 = _closure1_slot1;
            var1 = 17;
            var1 = var11[var1];
            var7 = var10.bind(var4)(var1);
            var1 = 'UserProfileConnections';
            var1 = var7.bind(var4)(var1);
            var8 = 12;
            var7 = var11[var8];
            var17 = var9.bind(var4)(var7);
            var16 = var17.useToken;
            var7 = 10;
            var15 = var11[var7];
            var15 = var10.bind(var4)(var15);
            var15 = var15.modules;
            var15 = var15.mobile;
            var15 = var15.TABLE_ROW_LABEL_TEXT_STYLE;
            var24 = var16.bind(var17)(var15);
            var8 = var11[var8];
            var9 = var9.bind(var4)(var8);
            var8 = var9.useToken;
            var7 = var11[var7];
            var7 = var10.bind(var4)(var7);
            var7 = var7.modules;
            var7 = var7.mobile;
            var7 = var7.TABLE_ROW_LABEL_COLOR;
            var19 = var8.bind(var9)(var7);
            var8 = var14.metadata;
            var11 = null;
            if(!(var11 == var8)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var8 = {};
case 12:
            var26 = null;
            if(!var3) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var7 = 18;
            var7 = var10[var7];
            var10 = var9.bind(var4)(var7);
            var9 = var10.getCreatedAtDate;
            var7 = _closure1_slot12;
            var7 = var7.CREATED_AT;
            var7 = var8[var7];
            var26 = var9.bind(var10)(var7, var13);
case 14:
            _closure2_slot3 = var26;
            var20 = null;
            if(!var3) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var3 = {};
            var7 = var14.type;
            var3['accountType'] = var7;
            var3['metadata'] = var8;
            var7 = var21.metadataItem;
            var3['style'] = var7;
            var9 = var3.accountType;
            var13 = var3.metadata;
            var10 = var3.style;
            var3 = _closure1_slot11;
            var3 = var3.REDDIT;
            if(!(var3 !== var9)) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var3 = _closure1_slot11;
            var3 = var3.STEAM;
            if(!(var3 !== var9)) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var3 = _closure1_slot11;
            var3 = var3.BLUESKY;
            if(!(var3 !== var9)) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var3 = _closure1_slot11;
            var3 = var3.TWITTER;
            if(!(var3 !== var9)) { _fun0002_ip = 22; continue _fun0002 }
case 24:
            var3 = _closure1_slot11;
            var3 = var3.MASTODON;
            if(!(var3 !== var9)) { _fun0002_ip = 22; continue _fun0002 }
case 25:
            var3 = _closure1_slot11;
            var3 = var3.PAYPAL;
            if(!(var3 !== var9)) { _fun0002_ip = 26; continue _fun0002 }
case 27:
            var3 = _closure1_slot11;
            var3 = var3.EBAY;
            if(!(var3 !== var9)) { _fun0002_ip = 28; continue _fun0002 }
case 29:
            var3 = _closure1_slot11;
            var7 = var3.TIKTOK;
            var3 = null;
            if(!(var7 === var9)) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            var9 = _closure1_slot0;
            var15 = _closure1_slot2;
            var7 = 11;
            var7 = var15[var7];
            var9 = var9.bind(var4)(var7);
            var7 = var9.generateTikTokMetadataItems;
            var3 = var7.bind(var9)(var13, var10);
            _fun0002_ip = 30; continue _fun0002;
case 28:
            var9 = _closure1_slot0;
            var15 = _closure1_slot2;
            var7 = 11;
            var7 = var15[var7];
            var9 = var9.bind(var4)(var7);
            var7 = var9.generateEbayMetadataItems;
            var3 = var7.bind(var9)(var13, var10);
            _fun0002_ip = 30; continue _fun0002;
case 26:
            var9 = _closure1_slot0;
            var15 = _closure1_slot2;
            var7 = 11;
            var7 = var15[var7];
            var9 = var9.bind(var4)(var7);
            var7 = var9.generatePaypalMetadataItems;
            var3 = var7.bind(var9)(var13, var10);
            _fun0002_ip = 30; continue _fun0002;
case 22:
            var9 = _closure1_slot0;
            var15 = _closure1_slot2;
            var7 = 11;
            var7 = var15[var7];
            var9 = var9.bind(var4)(var7);
            var7 = var9.generateTwitterMetadataItems;
            var3 = var7.bind(var9)(var13, var10);
            _fun0002_ip = 30; continue _fun0002;
case 20:
            var9 = _closure1_slot0;
            var15 = _closure1_slot2;
            var7 = 11;
            var7 = var15[var7];
            var9 = var9.bind(var4)(var7);
            var7 = var9.generateSteamMetadataItems;
            var3 = var7.bind(var9)(var13, var10);
            _fun0002_ip = 30; continue _fun0002;
case 18:
            var9 = _closure1_slot0;
            var15 = _closure1_slot2;
            var7 = 11;
            var7 = var15[var7];
            var9 = var9.bind(var4)(var7);
            var7 = var9.generateRedditMetadataItems;
            var3 = var7.bind(var9)(var13, var10);
case 30:
            var20 = var3;
case 16:
            var17 = var11 != var20;
            if(!var17) { _fun0002_ip = 32; continue _fun0002 }
case 33:
            var7 = var20.length;
            var3 = 0;
            var17 = var7 > var3;
case 32:
            var7 = _closure1_slot1;
            var15 = _closure1_slot2;
            var3 = 19;
            var3 = var15[var3];
            var9 = var7.bind(var4)(var3);
            var7 = var9.get;
            var3 = var14.type;
            var3 = var7.bind(var9)(var3);
            _closure2_slot4 = var3;
            var13 = _closure1_slot0;
            var7 = 20;
            var7 = var15[var7];
            var10 = var13.bind(var4)(var7);
            var9 = var10.makeSource;
            var7 = 13;
            var7 = var15[var7];
            var13 = var13.bind(var4)(var7);
            var7 = var13.isThemeDark;
            var7 = var7.bind(var13)(var23);
            var15 = var11 == var3;
            if(var7) { _fun0002_ip = 34; continue _fun0002 }
case 35:
            var7 = undefined;
            if(var15) { _fun0002_ip = 36; continue _fun0002 }
case 37:
            var13 = var3.icon;
            var7 = var13.lightPNG;
case 36:
            _fun0002_ip = 38; continue _fun0002;
case 34:
            var13 = undefined;
            if(var15) { _fun0002_ip = 39; continue _fun0002 }
case 40:
            var15 = var3.icon;
            var13 = var15.darkPNG;
case 39:
            var7 = var13;
case 38:
            var15 = var9.bind(var10)(var7);
            var7 = var11 == var3;
            var10 = undefined;
            if(var7) { _fun0002_ip = 41; continue _fun0002 }
case 42:
            var7 = var3.getPlatformUserUrl;
            var7 = var11 == var7;
            var10 = undefined;
            if(var7) { _fun0002_ip = 41; continue _fun0002 }
case 43:
            var7 = var3.getPlatformUserUrl;
            var10 = var7.bind(var3)(var14);
case 41:
            _closure2_slot5 = var10;
            var9 = var14.type;
            var7 = _closure1_slot11;
            var7 = var7.TWITTER;
            var22 = var9 === var7;
            if(!var22) { _fun0002_ip = 44; continue _fun0002 }
case 45:
            var7 = _closure1_slot12;
            var7 = var7.TWITTER_VERIFIED;
            var8 = var8[var7];
            var7 = '1';
            var22 = var7 === var8;
case 44:
            var13 = _closure1_slot3;
            var8 = var13.useCallback;
            var9 = var14.type;
            var7 = new Array(4);
            var7[0] = var9;
            var7[1] = var10;
            var7[2] = var5;
            var7[3] = var6;
            var6 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot5;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0003_ip = 46; continue _fun0003 }
case 47:
                    var2 = _closure2_slot2;
                    var1 = {};
                    var3 = 'PRESS_VIEW_CONNECTED_ACCOUNT';
                    var1['action'] = var3;
                    var3 = undefined;
                    var1 = var2.bind(var3)(var1);
                    var2 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 21;
                    var1 = var6[var1];
                    var3 = var2.bind(var3)(var1);
                    var2 = var3.handleClick;
                    var1 = {};
                    var6 = _closure2_slot5;
                    var1['href'] = var6;
                    var5 = _closure2_slot1;
                    var5 = var5.type;
                    var4 = _closure1_slot11;
                    var4 = var4.DOMAIN;
                    var4 = var5 !== var4;
                    var1['trusted'] = var4;
                    var4 = function onConfirm() {
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var1 = 22;
                        var2 = var5[var1];
                        var1 = undefined;
                        var8 = var4.bind(var1)(var2);
                        var7 = var8.trackWithMetadata;
                        var2 = _closure1_slot10;
                        var6 = var2.CONNECTED_ACCOUNT_VIEWED;
                        var4 = {};
                        var9 = _closure2_slot1;
                        var9 = var9.type;
                        var4['platform_type'] = var9;
                        var9 = _closure2_slot0;
                        var4['other_user_id'] = var9;
                        var4 = var7.bind(var8)(var6, var4);
                        var4 = _closure1_slot1;
                        var3 = 23;
                        var3 = var5[var3];
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.openURL;
                        var2 = _closure2_slot5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var1['onConfirm'] = var4;
                    var1 = var2.bind(var3)(var1);
case 46:
                    var1 = undefined;
                    return var1;
                }
            };
            var9 = var8.bind(var13)(var6, var7);
            var7 = var13.useCallback;
            var8 = var14.name;
            var6 = new Array(2);
            var6[0] = var8;
            var6[1] = var5;
            var5 = function() {
                var4 = _closure2_slot2;
                var3 = {};
                var1 = 'COPY_CONNECTED_ACCOUNT';
                var3['action'] = var1;
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var5 = 24;
                var6 = var4[var5];
                var7 = var3.bind(var1)(var6);
                var6 = var7.triggerHapticFeedback;
                var5 = var4[var5];
                var5 = var3.bind(var1)(var5);
                var5 = var5.HapticFeedbackTypes;
                var5 = var5.IMPACT_LIGHT;
                var5 = var6.bind(var7)(var5);
                var5 = 25;
                var5 = var4[var5];
                var6 = var3.bind(var1)(var5);
                var5 = var6.copy;
                var2 = _closure2_slot1;
                var2 = var2.name;
                var2 = var5.bind(var6)(var2);
                var2 = 26;
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.presentCopiedToClipboard;
                var2 = var2.bind(var3)();
                return var1;
            };
            var7 = var7.bind(var13)(var5, var6);
            var8 = var13.useMemo;
            var5 = var14.name;
            var6 = new Array(3);
            var6[0] = var5;
            var6[1] = var26;
            var16 = var11 == var3;
            var5 = undefined;
            if(var16) { _fun0002_ip = 48; continue _fun0002 }
case 49:
            var5 = var3.name;
case 48:
            var6[2] = var5;
            var5 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = new Array(0);
                    var4 = var3.push;
                    var1 = _closure2_slot4;
                    var2 = null;
                    var1 = var2 == var1;
                    var8 = undefined;
                    var5 = undefined;
                    if(var1) { _fun0004_ip = 50; continue _fun0004 }
case 51:
                    var1 = _closure2_slot4;
                    var5 = var1.name;
case 50:
                    var6 = var2 != var5;
                    var1 = '';
                    if(!var6) { _fun0004_ip = 52; continue _fun0004 }
case 53:
                    var1 = var5;
case 52:
                    var1 = var4.bind(var3)(var1);
                    var4 = var3.push;
                    var1 = _closure2_slot1;
                    var1 = var1.name;
                    var1 = var4.bind(var3)(var1);
                    var1 = _closure2_slot3;
                    if(!(var2 != var1)) { _fun0004_ip = 54; continue _fun0004 }
case 55:
                    var2 = var3.push;
                    var4 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var1 = 27;
                    var5 = var9[var1];
                    var5 = var4.bind(var8)(var5);
                    var6 = var5.intl;
                    var5 = var6.formatToPlainString;
                    var1 = var9[var1];
                    var1 = var4.bind(var8)(var1);
                    var1 = var1.t;
                    var4 = var1["9rfonh"];
                    var1 = {};
                    var7 = _closure2_slot3;
                    var1['date'] = var7;
                    var1 = var5.bind(var6)(var4, var1);
                    var1 = var2.bind(var3)(var1);
case 54:
                    var2 = var3.join;
                    var1 = ', ';
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var6 = var8.bind(var13)(var5, var6);
            var8 = _closure1_slot3;
            var5 = var8.useMemo;
            var16 = var11 == var3;
            var13 = undefined;
            if(var16) { _fun0002_ip = 56; continue _fun0002 }
case 57:
            var13 = var3.name;
case 56:
            var3 = new Array(2);
            var3[0] = var13;
            var3[1] = var10;
            var2 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = _closure2_slot5;
                    var5 = null;
                    if(!(var5 == var1)) { _fun0005_ip = 5; continue _fun0005 }
case 47:
                    var2 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var1 = 27;
                    var3 = var8[var1];
                    var6 = undefined;
                    var3 = var2.bind(var6)(var3);
                    var4 = var3.intl;
                    var3 = var4.formatToPlainString;
                    var1 = var8[var1];
                    var1 = var2.bind(var6)(var1);
                    var1 = var1.t;
                    var2 = var1.OKzaN3;
                    var1 = {};
                    var8 = _closure2_slot4;
                    var8 = var5 == var8;
                    if(var8) { _fun0005_ip = 58; continue _fun0005 }
case 59:
                    var7 = _closure2_slot4;
                    var6 = var7.name;
case 58:
                    var7 = var5 != var6;
                    var5 = '';
                    if(!var7) { _fun0005_ip = 60; continue _fun0005 }
case 61:
                    var5 = var6;
case 60:
                    var1['name'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    _fun0005_ip = 62; continue _fun0005;
case 5:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 27;
                    var3 = var7[var2];
                    var5 = undefined;
                    var3 = var6.bind(var5)(var3);
                    var4 = var3.intl;
                    var3 = var4.string;
                    var2 = var7[var2];
                    var2 = var6.bind(var5)(var2);
                    var2 = var2.t;
                    var2 = var2.wuRE8M;
                    var1 = var3.bind(var4)(var2);
case 62:
                    return var1;
                }
            };
            var5 = var5.bind(var8)(var2, var3);
            if(var1) { _fun0002_ip = 63; continue _fun0002 }
case 64:
            if(!(var11 == var10)) { _fun0002_ip = 65; continue _fun0002 }
case 66:
            var3 = _closure1_slot4;
            _fun0002_ip = 67; continue _fun0002;
case 65:
            var2 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 32;
            var1 = var8[var1];
            var1 = var2.bind(var4)(var1);
            var3 = var1.PressableOpacity;
case 67:
            var2 = _closure1_slot14;
            var1 = {};
            var1['accessibilityLabel'] = var6;
            var1['accessibilityHint'] = var5;
            var8 = 'button';
            var1['accessibilityRole'] = var8;
            var13 = var11 != var10;
            var8 = undefined;
            if(!var13) { _fun0002_ip = 68; continue _fun0002 }
case 69:
            var8 = var9;
case 68:
            var1['onPress'] = var8;
            var1['onLongPress'] = var7;
            var8 = var21.connectionRow;
            var1['style'] = var8;
            var16 = _closure1_slot13;
            var31 = _closure1_slot0;
            var30 = _closure1_slot2;
            var8 = 30;
            var8 = var30[var8];
            var8 = var31.bind(var4)(var8);
            var13 = var8.BaseIconImage;
            var8 = {};
            var18 = _closure1_slot9;
            var8['size'] = var18;
            var8['source'] = var15;
            var13 = var16.bind(var4)(var13, var8);
            var8 = new Array(3);
            var8[0] = var13;
            var18 = _closure1_slot14;
            var16 = _closure1_slot5;
            var13 = {};
            var25 = var21.connectionInfoContainer;
            var13['style'] = var25;
            var29 = _closure1_slot14;
            var27 = _closure1_slot5;
            var25 = {};
            var28 = var21.connectedAccountName;
            var25['style'] = var28;
            var32 = _closure1_slot13;
            var28 = 28;
            var30 = var30[var28];
            var30 = var31.bind(var4)(var30);
            var31 = var30.Text;
            var30 = {'variant': 'text-md/semibold', 'color': 'mobile-text-heading-primary', 'style': null, 'lineClamp': 2};
            var33 = var21.connectedAccountNameText;
            var30['style'] = var33;
            var33 = var14.name;
            var30['children'] = var33;
            var31 = var32.bind(var4)(var31, var30);
            var30 = new Array(2);
            var30[0] = var31;
            var32 = var14.verified;
            var31 = null;
            if(!var32) { _fun0002_ip = 70; continue _fun0002 }
case 71:
            var34 = _closure1_slot13;
            var33 = _closure1_slot21;
            var32 = {};
            var32['theme'] = var23;
            var32['isTwitterVerifiedAccount'] = var22;
            var31 = var34.bind(var4)(var33, var32);
case 70:
            var30[1] = var31;
            var25['children'] = var30;
            var27 = var29.bind(var4)(var27, var25);
            var25 = new Array(3);
            var25[0] = var27;
            var29 = var11 != var26;
            var27 = null;
            if(!var29) { _fun0002_ip = 72; continue _fun0002 }
case 73:
            var30 = _closure1_slot13;
            var32 = _closure1_slot0;
            var35 = _closure1_slot2;
            var28 = var35[var28];
            var28 = var32.bind(var4)(var28);
            var29 = var28.Text;
            var28 = {'variant': 'text-xs/medium', 'color': 'text-muted'};
            var31 = 27;
            var33 = var35[var31];
            var33 = var32.bind(var4)(var33);
            var34 = var33.intl;
            var33 = var34.format;
            var31 = var35[var31];
            var31 = var32.bind(var4)(var31);
            var31 = var31.t;
            var32 = var31["9rfonh"];
            var31 = {};
            var31['date'] = var26;
            var31 = var33.bind(var34)(var32, var31);
            var28['children'] = var31;
            var27 = var30.bind(var4)(var29, var28);
case 72:
            var25[1] = var27;
            var27 = null;
            if(!var17) { _fun0002_ip = 74; continue _fun0002 }
case 75:
            var30 = _closure1_slot13;
            var29 = _closure1_slot5;
            var28 = {};
            var31 = var21.connectionMetadata;
            var28['style'] = var31;
            var28['children'] = var20;
            var27 = var30.bind(var4)(var29, var28);
case 74:
            var25[2] = var27;
            var13['children'] = var25;
            var13 = var18.bind(var4)(var16, var13);
            var8[1] = var13;
            var13 = var11 != var10;
            if(!var13) { _fun0002_ip = 76; continue _fun0002 }
case 77:
            var25 = _closure1_slot13;
            var18 = _closure1_slot0;
            var27 = _closure1_slot2;
            var16 = 31;
            var16 = var27[var16];
            var16 = var18.bind(var4)(var16);
            var18 = var16.LinkExternalSmallIcon;
            var16 = {};
            var27 = 'sm';
            var16['size'] = var27;
            var13 = var25.bind(var4)(var18, var16);
case 76:
            var8[2] = var13;
            var1['children'] = var8;
            var1 = var2.bind(var4)(var3, var1);
            return var1;
case 63:
            var3 = _closure1_slot14;
            var2 = _closure1_slot5;
            var1 = {};
            var8 = var21.connectedAccountName;
            var1['style'] = var8;
            var18 = _closure1_slot13;
            var16 = _closure1_slot0;
            var8 = _closure1_slot2;
            var13 = 28;
            var8 = var8[var13];
            var8 = var16.bind(var4)(var8);
            var16 = var8.Text;
            var8 = {};
            var8['variant'] = var24;
            var8['color'] = var19;
            var19 = var14.name;
            var8['children'] = var19;
            var16 = var18.bind(var4)(var16, var8);
            var8 = new Array(2);
            var8[0] = var16;
            var16 = var14.verified;
            var14 = null;
            if(!var16) { _fun0002_ip = 78; continue _fun0002 }
case 79:
            var19 = _closure1_slot13;
            var18 = _closure1_slot21;
            var16 = {};
            var16['theme'] = var23;
            var16['isTwitterVerifiedAccount'] = var22;
            var14 = var19.bind(var4)(var18, var16);
case 78:
            var8[1] = var14;
            var1['children'] = var8;
            var14 = var3.bind(var4)(var2, var1);
            if(!(var11 == var26)) { _fun0002_ip = 80; continue _fun0002 }
case 81:
            var8 = undefined;
            if(!var17) { _fun0002_ip = 82; continue _fun0002 }
case 80:
            var3 = _closure1_slot14;
            var2 = _closure1_slot15;
            var1 = {};
            var18 = var11 != var26;
            var16 = null;
            if(!var18) { _fun0002_ip = 83; continue _fun0002 }
case 84:
            var19 = _closure1_slot13;
            var23 = _closure1_slot0;
            var27 = _closure1_slot2;
            var13 = var27[var13];
            var13 = var23.bind(var4)(var13);
            var18 = var13.Text;
            var13 = {'variant': 'text-xs/medium', 'color': 'text-subtle'};
            var22 = 27;
            var24 = var27[var22];
            var24 = var23.bind(var4)(var24);
            var25 = var24.intl;
            var24 = var25.format;
            var22 = var27[var22];
            var22 = var23.bind(var4)(var22);
            var22 = var22.t;
            var23 = var22["9rfonh"];
            var22 = {};
            var22['date'] = var26;
            var22 = var24.bind(var25)(var23, var22);
            var13['children'] = var22;
            var16 = var19.bind(var4)(var18, var13);
case 83:
            var13 = new Array(2);
            var13[0] = var16;
            var16 = null;
            if(!var17) { _fun0002_ip = 85; continue _fun0002 }
case 86:
            var19 = _closure1_slot13;
            var18 = _closure1_slot5;
            var17 = {};
            var21 = var21.connectionMetadata;
            var17['style'] = var21;
            var17['children'] = var20;
            var16 = var19.bind(var4)(var18, var17);
case 85:
            var13[1] = var16;
            var1['children'] = var13;
            var8 = var3.bind(var4)(var2, var1);
case 82:
            var3 = _closure1_slot13;
            var13 = _closure1_slot0;
            var16 = _closure1_slot2;
            var1 = 29;
            var1 = var16[var1];
            var1 = var13.bind(var4)(var1);
            var2 = var1.TableRow;
            var1 = {};
            var1['label'] = var14;
            var1['subLabel'] = var8;
            var14 = _closure1_slot13;
            var8 = 30;
            var8 = var16[var8];
            var8 = var13.bind(var4)(var8);
            var13 = var8.BaseIconImage;
            var8 = {};
            var16 = _closure1_slot9;
            var8['size'] = var16;
            var8['source'] = var15;
            var8 = var14.bind(var4)(var13, var8);
            var1['icon'] = var8;
            var13 = var11 != var10;
            var8 = undefined;
            if(!var13) { _fun0002_ip = 87; continue _fun0002 }
case 88:
            var14 = _closure1_slot13;
            var13 = _closure1_slot0;
            var15 = _closure1_slot2;
            var12 = 31;
            var12 = var15[var12];
            var12 = var13.bind(var4)(var12);
            var13 = var12.LinkExternalSmallIcon;
            var12 = {};
            var15 = 'sm';
            var12['size'] = var15;
            var8 = var14.bind(var4)(var13, var12);
case 87:
            var1['trailing'] = var8;
            var8 = var7;
            if(!(var11 != var10)) { _fun0002_ip = 89; continue _fun0002 }
case 90:
            var8 = var9;
case 89:
            var1['onPress'] = var8;
            var1['onLongPress'] = var7;
            var1['accessibilityLabel'] = var6;
            var1['accessibilityHint'] = var5;
            var5 = 'button';
            var1['accessibilityRole'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var5.bind(var8)(var4);
    var _closure1_slot18 = var4;
    var5 = var8.memo;
    var4 = function(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg1;
            var6 = var1.identity;
            var3 = var1.application;
            var _closure2_slot0 = var3;
            var5 = undefined;
            var _closure2_slot2 = var5;
            var1 = _closure1_slot17;
            var13 = var1.bind(var5)();
            var4 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 16;
            var1 = var8[var1];
            var4 = var4.bind(var5)(var1);
            var1 = var4.useUserProfileAnalyticsContext;
            var1 = var1.bind(var4)();
            var4 = var1.trackUserProfileAction;
            var _closure2_slot1 = var4;
            var7 = _closure1_slot1;
            var1 = 17;
            var1 = var8[var1];
            var7 = var7.bind(var5)(var1);
            var1 = 'UserProfileConnections';
            var1 = var7.bind(var5)(var1);
            var8 = var3.getIconSource;
            var7 = _closure1_slot8;
            var14 = var8.bind(var3)(var7);
            var7 = var6.profile;
            var9 = null;
            var8 = var9 == var7;
            var6 = undefined;
            if(var8) { _fun0006_ip = 91; continue _fun0006 }
case 92:
            var6 = var7.username;
case 91:
            var7 = var9 != var6;
            var10 = '';
            if(!var7) { _fun0006_ip = 93; continue _fun0006 }
case 94:
            var10 = var6;
case 93:
            _closure2_slot2 = var10;
            var6 = _closure1_slot3;
            var8 = var6.useCallback;
            var7 = new Array(2);
            var7[0] = var10;
            var7[1] = var4;
            var4 = function() {
                var4 = _closure2_slot1;
                var3 = {};
                var1 = 'COPY_CONNECTED_ACCOUNT';
                var3['action'] = var1;
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var5 = 24;
                var6 = var4[var5];
                var7 = var3.bind(var1)(var6);
                var6 = var7.triggerHapticFeedback;
                var5 = var4[var5];
                var5 = var3.bind(var1)(var5);
                var5 = var5.HapticFeedbackTypes;
                var5 = var5.IMPACT_LIGHT;
                var5 = var6.bind(var7)(var5);
                var5 = 25;
                var5 = var4[var5];
                var6 = var3.bind(var1)(var5);
                var5 = var6.copy;
                var2 = _closure2_slot2;
                var2 = var5.bind(var6)(var2);
                var2 = 26;
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.presentCopiedToClipboard;
                var2 = var2.bind(var3)();
                return var1;
            };
            var8 = var8.bind(var6)(var4, var7);
            var11 = var6.useMemo;
            var4 = var3.name;
            var7 = new Array(2);
            var7[0] = var4;
            var7[1] = var10;
            var4 = function() {
                var3 = new Array(0);
                var4 = var3.push;
                var2 = _closure2_slot0;
                var2 = var2.name;
                var2 = var4.bind(var3)(var2);
                var2 = var3.push;
                var1 = _closure2_slot2;
                var1 = var2.bind(var3)(var1);
                var2 = var3.join;
                var1 = ', ';
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var7 = var11.bind(var6)(var4, var7);
            var4 = var6.useMemo;
            var11 = var3.name;
            var3 = new Array(1);
            var3[0] = var11;
            var2 = function() {
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 27;
                var3 = var6[var1];
                var2 = undefined;
                var3 = var5.bind(var2)(var3);
                var4 = var3.intl;
                var3 = var4.formatToPlainString;
                var1 = var6[var1];
                var1 = var5.bind(var2)(var1);
                var1 = var1.t;
                var2 = var1.OKzaN3;
                var1 = {};
                var5 = _closure2_slot0;
                var5 = var5.name;
                var1['name'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var6 = var4.bind(var6)(var2, var3);
            if(var1) { _fun0006_ip = 95; continue _fun0006 }
case 96:
            var3 = _closure1_slot14;
            var2 = _closure1_slot4;
            var1 = {};
            var1['accessibilityLabel'] = var7;
            var1['accessibilityHint'] = var6;
            var4 = 'button';
            var1['accessibilityRole'] = var4;
            var1['onLongPress'] = var8;
            var4 = var13.connectionRow;
            var1['style'] = var4;
            var4 = var9 != var14;
            var11 = null;
            if(!var4) { _fun0006_ip = 97; continue _fun0006 }
case 98:
            var16 = _closure1_slot13;
            var12 = _closure1_slot0;
            var17 = _closure1_slot2;
            var4 = 30;
            var4 = var17[var4];
            var4 = var12.bind(var5)(var4);
            var12 = var4.BaseIconImage;
            var4 = {};
            var17 = _closure1_slot9;
            var4['size'] = var17;
            var4['source'] = var14;
            var17 = var13.applicationIcon;
            var4['style'] = var17;
            var11 = var16.bind(var5)(var12, var4);
case 97:
            var4 = new Array(2);
            var4[0] = var11;
            var16 = _closure1_slot13;
            var12 = _closure1_slot5;
            var11 = {};
            var17 = var13.connectionInfoContainer;
            var11['style'] = var17;
            var19 = _closure1_slot13;
            var18 = _closure1_slot5;
            var17 = {};
            var20 = var13.connectedAccountName;
            var17['style'] = var20;
            var22 = _closure1_slot13;
            var21 = _closure1_slot0;
            var23 = _closure1_slot2;
            var20 = 28;
            var20 = var23[var20];
            var20 = var21.bind(var5)(var20);
            var21 = var20.Text;
            var20 = {'variant': 'text-md/semibold', 'color': 'mobile-text-heading-primary', 'style': null, 'lineClamp': 2};
            var23 = var13.connectedAccountNameText;
            var20['style'] = var23;
            var20['children'] = var10;
            var20 = var22.bind(var5)(var21, var20);
            var17['children'] = var20;
            var17 = var19.bind(var5)(var18, var17);
            var11['children'] = var17;
            var11 = var16.bind(var5)(var12, var11);
            var4[1] = var11;
            var1['children'] = var4;
            var1 = var3.bind(var5)(var2, var1);
            _fun0006_ip = 99; continue _fun0006;
case 95:
            var4 = _closure1_slot13;
            var3 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = 29;
            var2 = var11[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.TableRow;
            var2 = {};
            var2['label'] = var10;
            var10 = var9 != var14;
            var9 = undefined;
            if(!var10) { _fun0006_ip = 100; continue _fun0006 }
case 101:
            var12 = _closure1_slot13;
            var11 = _closure1_slot0;
            var16 = _closure1_slot2;
            var10 = 30;
            var10 = var16[var10];
            var10 = var11.bind(var5)(var10);
            var11 = var10.BaseIconImage;
            var10 = {};
            var15 = _closure1_slot9;
            var10['size'] = var15;
            var10['source'] = var14;
            var13 = var13.applicationIcon;
            var10['style'] = var13;
            var9 = var12.bind(var5)(var11, var10);
case 100:
            var2['icon'] = var9;
            var2['onPress'] = var8;
            var2['onLongPress'] = var8;
            var2['accessibilityLabel'] = var7;
            var2['accessibilityHint'] = var6;
            var6 = 'button';
            var2['accessibilityRole'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 99:
            return var1;
        }
    };
    var4 = var5.bind(var8)(var4);
    var _closure1_slot19 = var4;
    var5 = var8.memo;
    var4 = function(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = arg1;
            var9 = var1.applicationRoleConnection;
            var _closure2_slot0 = var9;
            var1 = _closure1_slot17;
            var4 = undefined;
            var2 = var1.bind(var4)();
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 17;
            var1 = var7[var1];
            var3 = var6.bind(var4)(var1);
            var1 = 'UserProfileConnections';
            var1 = var3.bind(var4)(var1);
            var8 = _closure1_slot0;
            var3 = 11;
            var3 = var7[var3];
            var8 = var8.bind(var4)(var3);
            var3 = var8.generateRoleConnectionMetadataItems;
            var15 = var3.bind(var8)(var9);
            var3 = 20;
            var3 = var7[var3];
            var7 = var6.bind(var4)(var3);
            var6 = var7.getApplicationIconSource;
            var3 = {};
            var8 = var9.application;
            var8 = var8.id;
            var3['id'] = var8;
            var8 = var9.application;
            var8 = var8.icon;
            var3['icon'] = var8;
            var8 = var6.bind(var7)(var3);
            var6 = _closure1_slot14;
            if(var1) { _fun0007_ip = 102; continue _fun0007 }
case 103:
            var3 = _closure1_slot5;
            var1 = {};
            var7 = var2.connectionRow;
            var1['style'] = var7;
            var11 = _closure1_slot13;
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var12 = 8;
            var7 = var14[var12];
            var7 = var13.bind(var4)(var7);
            var10 = var7.Icon;
            var7 = {};
            var12 = var14[var12];
            var12 = var13.bind(var4)(var12);
            var12 = var12.Icon;
            var12 = var12.Sizes;
            var12 = var12.MEDIUM;
            var7['size'] = var12;
            var7['source'] = var8;
            var12 = true;
            var7['disableColor'] = var12;
            var10 = var11.bind(var4)(var10, var7);
            var7 = new Array(2);
            var7[0] = var10;
            var12 = _closure1_slot14;
            var11 = _closure1_slot5;
            var10 = {};
            var13 = var2.connectionInfoContainer;
            var10['style'] = var13;
            var13 = var9.platform_name;
            var17 = null;
            var13 = var17 != var13;
            var14 = null;
            if(!var13) { _fun0007_ip = 104; continue _fun0007 }
case 105:
            var18 = _closure1_slot13;
            var16 = _closure1_slot0;
            var19 = _closure1_slot2;
            var13 = 28;
            var13 = var19[var13];
            var13 = var16.bind(var4)(var13);
            var16 = var13.Text;
            var13 = {'variant': 'text-md/semibold', 'color': 'mobile-text-heading-primary'};
            var19 = var9.platform_name;
            var13['children'] = var19;
            var14 = var18.bind(var4)(var16, var13);
case 104:
            var13 = new Array(4);
            var13[0] = var14;
            var14 = var9.platform_username;
            var16 = var17 != var14;
            var14 = null;
            if(!var16) { _fun0007_ip = 106; continue _fun0007 }
case 107:
            var19 = _closure1_slot13;
            var18 = _closure1_slot0;
            var20 = _closure1_slot2;
            var16 = 28;
            var16 = var20[var16];
            var16 = var18.bind(var4)(var16);
            var18 = var16.Text;
            var16 = {'variant': 'text-md/normal', 'color': 'text-default'};
            var20 = var9.platform_username;
            var16['children'] = var20;
            var14 = var19.bind(var4)(var18, var16);
case 106:
            var13[1] = var14;
            var16 = var17 != var15;
            var14 = null;
            if(!var16) { _fun0007_ip = 108; continue _fun0007 }
case 109:
            var18 = var15.length;
            var16 = 0;
            var16 = var18 > var16;
            var14 = null;
            if(!var16) { _fun0007_ip = 108; continue _fun0007 }
case 110:
            var18 = _closure1_slot13;
            var17 = _closure1_slot5;
            var16 = {};
            var19 = var2.connectionMetadata;
            var16['style'] = var19;
            var16['children'] = var15;
            var14 = var18.bind(var4)(var17, var16);
case 108:
            var13[2] = var14;
            var17 = _closure1_slot13;
            var16 = _closure1_slot5;
            var14 = {};
            var18 = var2.poweredByContainer;
            var14['style'] = var18;
            var20 = _closure1_slot13;
            var23 = _closure1_slot0;
            var26 = _closure1_slot2;
            var18 = 28;
            var18 = var26[var18];
            var18 = var23.bind(var4)(var18);
            var19 = var18.Text;
            var18 = {'variant': 'text-xs/medium', 'color': 'text-muted'};
            var21 = 27;
            var24 = var26[var21];
            var24 = var23.bind(var4)(var24);
            var25 = var24.intl;
            var24 = var25.format;
            var21 = var26[var21];
            var21 = var23.bind(var4)(var21);
            var21 = var21.t;
            var23 = var21.zIT9YA;
            var21 = {};
            var26 = function applicationHook() {
                var1 = _closure2_slot0;
                var1 = var1.application;
                var1 = var1.name;
                return var1;
            };
            var21['applicationHook'] = var26;
            var21 = var24.bind(var25)(var23, var21);
            var18['children'] = var21;
            var18 = var20.bind(var4)(var19, var18);
            var14['children'] = var18;
            var14 = var17.bind(var4)(var16, var14);
            var13[3] = var14;
            var10['children'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var7[1] = var10;
            var1['children'] = var7;
            var1 = var6.bind(var4)(var3, var1);
            return var1;
case 102:
            var3 = _closure1_slot15;
            var1 = {};
            var7 = var9.platform_name;
            var10 = null;
            var11 = var10 != var7;
            var7 = null;
            if(!var11) { _fun0007_ip = 111; continue _fun0007 }
case 112:
            var11 = var9.platform_username;
            var11 = var10 != var11;
            var7 = null;
            if(!var11) { _fun0007_ip = 111; continue _fun0007 }
case 30:
            var13 = _closure1_slot13;
            var12 = _closure1_slot0;
            var14 = _closure1_slot2;
            var11 = 28;
            var11 = var14[var11];
            var11 = var12.bind(var4)(var11);
            var12 = var11.Text;
            var11 = {'variant': 'text-xs/medium', 'color': 'text-subtle'};
            var14 = var9.platform_username;
            var11['children'] = var14;
            var7 = var13.bind(var4)(var12, var11);
case 111:
            var11 = new Array(3);
            var11[0] = var7;
            var12 = var10 != var15;
            var7 = null;
            if(!var12) { _fun0007_ip = 113; continue _fun0007 }
case 114:
            var13 = var15.length;
            var12 = 0;
            var12 = var13 > var12;
            var7 = null;
            if(!var12) { _fun0007_ip = 113; continue _fun0007 }
case 115:
            var14 = _closure1_slot13;
            var13 = _closure1_slot5;
            var12 = {};
            var16 = var2.connectionMetadata;
            var12['style'] = var16;
            var12['children'] = var15;
            var7 = var14.bind(var4)(var13, var12);
case 113:
            var11[1] = var7;
            var14 = _closure1_slot13;
            var13 = _closure1_slot5;
            var12 = {};
            var2 = var2.poweredByContainer;
            var12['style'] = var2;
            var17 = _closure1_slot13;
            var2 = _closure1_slot0;
            var7 = _closure1_slot2;
            var15 = 28;
            var15 = var7[var15];
            var15 = var2.bind(var4)(var15);
            var16 = var15.Text;
            var15 = {'variant': 'text-xs/medium', 'color': 'text-muted'};
            var18 = 27;
            var19 = var7[var18];
            var19 = var2.bind(var4)(var19);
            var21 = var19.intl;
            var20 = var21.format;
            var18 = var7[var18];
            var18 = var2.bind(var4)(var18);
            var18 = var18.t;
            var19 = var18.zIT9YA;
            var18 = {};
            var22 = function applicationHook() {
                var1 = _closure2_slot0;
                var1 = var1.application;
                var1 = var1.name;
                return var1;
            };
            var18['applicationHook'] = var22;
            var18 = var20.bind(var21)(var19, var18);
            var15['children'] = var18;
            var15 = var17.bind(var4)(var16, var15);
            var12['children'] = var15;
            var12 = var14.bind(var4)(var13, var12);
            var11[2] = var12;
            var1['children'] = var11;
            var6 = var6.bind(var4)(var3, var1);
            var3 = _closure1_slot13;
            var1 = 29;
            var1 = var7[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.TableRow;
            var1 = {};
            var7 = var9.platform_name;
            if(!(var10 == var7)) { _fun0007_ip = 116; continue _fun0007 }
case 117:
            var7 = var9.platform_username;
case 116:
            if(!(var10 == var7)) { _fun0007_ip = 118; continue _fun0007 }
case 119:
            var9 = var9.application;
            var7 = var9.name;
case 118:
            var1['label'] = var7;
            var1['subLabel'] = var6;
            var7 = _closure1_slot13;
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var9 = 8;
            var5 = var11[var9];
            var5 = var10.bind(var4)(var5);
            var6 = var5.Icon;
            var5 = {};
            var9 = var11[var9];
            var9 = var10.bind(var4)(var9);
            var9 = var9.Icon;
            var9 = var9.Sizes;
            var9 = var9.MEDIUM;
            var5['size'] = var9;
            var5['source'] = var8;
            var8 = true;
            var5['disableColor'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['icon'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var5.bind(var8)(var4);
    var _closure1_slot20 = var4;
    var5 = 39;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/user_profile/native/UserProfileConnections.tsx';
    var5 = var6.bind(var7)(var5);
    var3['ApplicationRoleConnection'] = var4;
    var4 = function UserProfileAccountConnectionsCard(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var2 = arg1;
            var5 = var2.userId;
            var _closure2_slot0 = var5;
            var11 = var2.style;
            var2 = _closure1_slot17;
            var4 = undefined;
            var8 = var2.bind(var4)();
            var9 = _closure1_slot1;
            var10 = _closure1_slot2;
            var2 = 17;
            var2 = var10[var2];
            var3 = var9.bind(var4)(var2);
            var2 = 'UserProfileConnections';
            var6 = var3.bind(var4)(var2);
            var3 = _closure1_slot0;
            var2 = 33;
            var2 = var10[var2];
            var12 = var3.bind(var4)(var2);
            var2 = var12.useThemeContext;
            var2 = var2.bind(var12)();
            var2 = var2.theme;
            var _closure2_slot1 = var2;
            var2 = 34;
            var12 = var10[var2];
            var15 = var3.bind(var4)(var12);
            var14 = var15.useStateFromStores;
            var12 = _closure1_slot6;
            var13 = new Array(1);
            var13[0] = var12;
            var12 = function() {
                var1 = _closure1_slot6;
                var1 = var1.locale;
                return var1;
            };
            var12 = var14.bind(var15)(var13, var12);
            var _closure2_slot2 = var12;
            var2 = var10[var2];
            var13 = var3.bind(var4)(var2);
            var12 = var13.useStateFromStores;
            var2 = _closure1_slot7;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var1 = _closure1_slot7;
                var1 = var1.hidePersonalInformation;
                return var1;
            };
            var2 = var12.bind(var13)(var3, var2);
            var3 = 35;
            var3 = var10[var3];
            var3 = var9.bind(var4)(var3);
            var3 = var3.bind(var4)(var5);
            var10 = var3.connections;
            var5 = var3.appIdentities;
            if(var2) { _fun0008_ip = 120; continue _fun0008 }
case 121:
            var2 = var10.length;
            var3 = 0;
            if(!(var3 === var2)) { _fun0008_ip = 122; continue _fun0008 }
case 123:
            var2 = var5.length;
            if(!(var3 !== var2)) { _fun0008_ip = 120; continue _fun0008 }
case 122:
            var9 = var10.map;
            var2 = function(arg1) {
                var1 = arg1;
                var5 = _closure1_slot13;
                var4 = _closure1_slot18;
                var3 = {};
                var3['account'] = var1;
                var6 = _closure2_slot1;
                var3['theme'] = var6;
                var6 = _closure2_slot2;
                var3['locale'] = var6;
                var2 = _closure2_slot0;
                var3['userId'] = var2;
                var2 = var1.id;
                var1 = undefined;
                var1 = var5.bind(var1)(var4, var3, var2);
                return var1;
            };
            var17 = var9.bind(var10)(var2);
            var9 = new Array(0);
            var18 = var9;
            var16 = 0;
            var16 = arraySpread(var18, var17, var16);
            var3 = var5.map;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.application;
                var1 = var1.identity;
                var5 = _closure1_slot13;
                var4 = _closure1_slot19;
                var3 = {};
                var3['identity'] = var1;
                var3['application'] = var2;
                var8 = var1.application_id;
                var7 = var1.provider_issued_user_id;
                var1 = global;
                var1 = var1.HermesInternal;
                var6 = var1.concat;
                var2 = '';
                var1 = '-';
                var2 = var6.bind(var2)(var8, var1, var7);
                var1 = undefined;
                var1 = var5.bind(var1)(var4, var3, var2);
                return var1;
            };
            var17 = var3.bind(var5)(var1);
            var18 = var9;
            var1 = arraySpread(var18, var17, var16);
            var3 = _closure1_slot13;
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var5 = 36;
            var1 = var1[var5];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var12 = var8.cardContainer;
            var10 = new Array(2);
            var10[0] = var12;
            var10[1] = var11;
            var1['style'] = var10;
            var10 = undefined;
            if(var6) { _fun0008_ip = 124; continue _fun0008 }
case 125:
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var11 = 27;
            var12 = var15[var11];
            var12 = var14.bind(var4)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var11 = var15[var11];
            var11 = var14.bind(var4)(var11);
            var11 = var11.t;
            var11 = var11["3fe7U5"];
            var10 = var12.bind(var13)(var11);
case 124:
            var1['title'] = var10;
            var8 = var8.cardTitle;
            var1['titleStyle'] = var8;
            var8 = _closure1_slot13;
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            if(var6) { _fun0008_ip = 126; continue _fun0008 }
case 127:
            var5 = var14[var5];
            var5 = var13.bind(var4)(var5);
            var6 = var5.UserProfileCardRows;
            var5 = {};
            var5['children'] = var9;
            var5 = var8.bind(var4)(var6, var5);
            _fun0008_ip = 128; continue _fun0008;
case 126:
            var6 = 37;
            var6 = var14[var6];
            var6 = var13.bind(var4)(var6);
            var7 = var6.TableRowGroup;
            var6 = {};
            var10 = true;
            var6['hasIcons'] = var10;
            var10 = 27;
            var11 = var14[var10];
            var11 = var13.bind(var4)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var10 = var14[var10];
            var10 = var13.bind(var4)(var10);
            var10 = var10.t;
            var10 = var10["3fe7U5"];
            var10 = var11.bind(var12)(var10);
            var6['title'] = var10;
            var6['children'] = var9;
            var5 = var8.bind(var4)(var7, var6);
case 128:
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
case 120:
            var1 = null;
            return var1;
        }
    };
    var3['UserProfileAccountConnectionsCard'] = var4;
    var2 = function UserProfileApplicationRoleConnectionsCard(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var2 = arg1;
            var3 = var2.userId;
            var11 = var2.style;
            var2 = _closure1_slot17;
            var4 = undefined;
            var8 = var2.bind(var4)();
            var5 = _closure1_slot1;
            var9 = _closure1_slot2;
            var2 = 17;
            var2 = var9[var2];
            var6 = var5.bind(var4)(var2);
            var2 = 'UserProfileConnections';
            var6 = var6.bind(var4)(var2);
            var2 = 38;
            var2 = var9[var2];
            var2 = var5.bind(var4)(var2);
            var3 = var2.bind(var4)(var3);
            var5 = _closure1_slot0;
            var2 = 34;
            var2 = var9[var2];
            var10 = var5.bind(var4)(var2);
            var9 = var10.useStateFromStores;
            var2 = _closure1_slot7;
            var5 = new Array(1);
            var5[0] = var2;
            var2 = function() {
                var1 = _closure1_slot7;
                var1 = var1.hidePersonalInformation;
                return var1;
            };
            var2 = var9.bind(var10)(var5, var2);
            if(var2) { _fun0009_ip = 129; continue _fun0009 }
case 130:
            var5 = var3.length;
            var2 = 0;
            if(!(var2 !== var5)) { _fun0009_ip = 129; continue _fun0009 }
case 91:
            var2 = var3.map;
            var1 = function(arg1) {
                var1 = arg1;
                var5 = _closure1_slot13;
                var4 = _closure1_slot20;
                var3 = {};
                var3['applicationRoleConnection'] = var1;
                var1 = var1.application;
                var2 = var1.id;
                var1 = undefined;
                var1 = var5.bind(var1)(var4, var3, var2);
                return var1;
            };
            var9 = var2.bind(var3)(var1);
            var3 = _closure1_slot13;
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var5 = 36;
            var1 = var1[var5];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var12 = var8.cardContainer;
            var10 = new Array(2);
            var10[0] = var12;
            var10[1] = var11;
            var1['style'] = var10;
            var10 = undefined;
            if(var6) { _fun0009_ip = 131; continue _fun0009 }
case 132:
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var11 = 27;
            var12 = var15[var11];
            var12 = var14.bind(var4)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var11 = var15[var11];
            var11 = var14.bind(var4)(var11);
            var11 = var11.t;
            var11 = var11.PHjkRE;
            var10 = var12.bind(var13)(var11);
case 131:
            var1['title'] = var10;
            var8 = var8.cardTitle;
            var1['titleStyle'] = var8;
            var8 = _closure1_slot13;
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            if(var6) { _fun0009_ip = 133; continue _fun0009 }
case 134:
            var5 = var14[var5];
            var5 = var13.bind(var4)(var5);
            var6 = var5.UserProfileCardRows;
            var5 = {};
            var5['children'] = var9;
            var5 = var8.bind(var4)(var6, var5);
            _fun0009_ip = 135; continue _fun0009;
case 133:
            var6 = 37;
            var6 = var14[var6];
            var6 = var13.bind(var4)(var6);
            var7 = var6.TableRowGroup;
            var6 = {};
            var10 = true;
            var6['hasIcons'] = var10;
            var10 = 27;
            var11 = var14[var10];
            var11 = var13.bind(var4)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var10 = var14[var10];
            var10 = var13.bind(var4)(var10);
            var10 = var10.t;
            var10 = var10.PHjkRE;
            var10 = var11.bind(var12)(var10);
            var6['title'] = var10;
            var6['children'] = var9;
            var5 = var8.bind(var4)(var7, var6);
case 135:
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
case 129:
            var1 = null;
            return var1;
        }
    };
    var3['UserProfileApplicationRoleConnectionsCard'] = var2;
    return var1;
})();