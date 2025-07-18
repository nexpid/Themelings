// app/modules/user_profile/native/UserProfileConnections.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var12 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var7;
    var1 = function VerifiedIcon(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var6 = var1.theme;
            var1 = var1.isTwitterVerifiedAccount;
            var4 = undefined;
            if(!(var1 === var4)) { _fun0001_ip = 22; continue _fun0001 }
 20:
            var1 = false;
 22:
            var2 = _closure1_slot16;
            var5 = var2.bind(var4)();
            var9 = {};
            var2 = _closure1_slot15;
            var9['size'] = var2;
            var2 = var5.verifiedIcon;
            var9['style'] = var2;
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 12;
            var2 = var8[var2];
            var8 = var3.bind(var4)(var2);
            var3 = var8.useToken;
            var2 = _closure1_slot11;
            var2 = var2.HEADER_PRIMARY;
            var14 = var3.bind(var8)(var2, var6);
            if(!var1) { _fun0001_ip = 129; continue _fun0001 }
 98:
            var3 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 10;
            var2 = var8[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.unsafe_rawColors;
            var14 = var2.TWITTER;
 129:
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 13;
            var2 = var8[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.isThemeLight;
            var2 = var2.bind(var3)(var6);
            if(var2) { _fun0001_ip = 199; continue _fun0001 }
 163:
            if(var1) { _fun0001_ip = 199; continue _fun0001 }
 166:
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 10;
            var1 = var3[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.unsafe_rawColors;
            var10 = var1.BLACK;
            _fun0001_ip = 230; continue _fun0001;
 199:
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 10;
            var1 = var3[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.unsafe_rawColors;
            var10 = var1.WHITE;
 230:
            var3 = _closure1_slot14;
            var2 = _closure1_slot5;
            var1 = {};
            var5 = var5.verifiedIconContainer;
            var1['style'] = var5;
            var11 = _closure1_slot13;
            var12 = _closure1_slot1;
            var13 = _closure1_slot2;
            var6 = 8;
            var5 = var13[var6];
            var8 = var12.bind(var4)(var5);
            var5 = {};
            var15 = 14;
            var15 = var13[var15];
            var15 = var12.bind(var4)(var15);
            var5['source'] = var15;
            var5['color'] = var14;
            var17 = var5;
            var16 = var9;
            var14 = copyDataProperties(var17, var16);
            var8 = var11.bind(var4)(var8, var5);
            var5 = new Array(2);
            var5[0] = var8;
            var8 = _closure1_slot13;
            var6 = var13[var6];
            var7 = var12.bind(var4)(var6);
            var6 = {};
            var11 = 15;
            var11 = var13[var11];
            var11 = var12.bind(var4)(var11);
            var6['source'] = var11;
            var6['color'] = var10;
            var17 = var6;
            var16 = var9;
            var9 = copyDataProperties(var17, var16);
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var4);
    var15 = 0;
    var5 = var7[var15];
    var4 = native4;
    var1 = undefined;
    var8 = var4.bind(var1)(var5);
    var _closure1_slot3 = var8;
    var13 = 1;
    var4 = var7[var13];
    var4 = var6.bind(var1)(var4);
    var5 = var4.Pressable;
    var _closure1_slot4 = var5;
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var17 = var4.CARD_PADDING;
    var14 = var4.CARD_ROWS_COLUMN_GAP;
    var4 = var4.CARD_ROWS_ICON_SIZE_VARIANT;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var5 = var4.AnalyticEvents;
    var _closure1_slot9 = var5;
    var5 = var4.PlatformTypes;
    var _closure1_slot10 = var5;
    var4 = var4.ThemeColor;
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
    var4 = var4.jsxs;
    var _closure1_slot14 = var4;
    var4 = 8;
    var5 = var7[var4];
    var5 = var12.bind(var1)(var5);
    var5 = var5.Sizes;
    var9 = var5.REFRESH_SMALL_16;
    var _closure1_slot15 = var9;
    var4 = var7[var4];
    var5 = var6.bind(var1)(var4);
    var4 = var5.getIconSize;
    var11 = var4.bind(var5)(var9);
    var4 = 9;
    var4 = var7[var4];
    var9 = var6.bind(var1)(var4);
    var5 = var9.createStyles;
    var4 = {};
    var10 = {};
    var16 = 12;
    var16 = var17 - var16;
    var10['paddingBottom'] = var16;
    var4['cardContainer'] = var10;
    var10 = {};
    var10['marginBottom'] = var15;
    var4['cardTitle'] = var10;
    var10 = {'flexDirection': 'row', 'alignItems': 'center', 'columnGap': null, 'paddingVertical': 12, 'minHeight': 60};
    var10['columnGap'] = var14;
    var4['connectionRow'] = var10;
    var10 = {};
    var10['flexGrow'] = var13;
    var4['connectionInfoContainer'] = var10;
    var10 = {'flexDirection': 'row', 'alignItems': 'center', 'columnGap': 4};
    var4['connectedAccountName'] = var10;
    var10 = {};
    var10['height'] = var11;
    var10['width'] = var11;
    var4['verifiedIconContainer'] = var10;
    var10 = {'position': 'absolute', 'left': 0, 'top': 0};
    var4['verifiedIcon'] = var10;
    var10 = {'flexDirection': 'row', 'flexWrap': 'wrap', 'alignItems': 'center', 'overflow': 'hidden'};
    var4['connectionMetadata'] = var10;
    var10 = {};
    var11 = 10;
    var11 = var7[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.INTERACTIVE_ACTIVE;
    var10['color'] = var11;
    var4['metadataItem'] = var10;
    var10 = {'flexDirection': 'row', 'alignItems': 'center', 'marginTop': 6};
    var4['poweredByContainer'] = var10;
    var4 = var5.bind(var9)(var4);
    var _closure1_slot16 = var4;
    var5 = var8.memo;
    var4 = function(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var5 = var2.userId;
            var _closure2_slot0 = var5;
            var20 = var2.account;
            var _closure2_slot1 = var20;
            var26 = var2.theme;
            var12 = var2.locale;
            var2 = var2.showMetadata;
            var4 = undefined;
            if(!(var2 === var4)) { _fun0002_ip = 49; continue _fun0002 }
 47:
            var2 = true;
 49:
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var3 = _closure1_slot16;
            var18 = var3.bind(var4)();
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 16;
            var3 = var8[var3];
            var6 = var6.bind(var4)(var3);
            var3 = var6.useUserProfileAnalyticsContext;
            var3 = var3.bind(var6)();
            var3 = var3.trackUserProfileAction;
            _closure2_slot2 = var3;
            var10 = var20.metadata;
            var8 = null;
            if(!(var8 == var10)) { _fun0002_ip = 130; continue _fun0002 }
 128:
            var10 = {};
 130:
            var24 = null;
            if(!var2) { _fun0002_ip = 181; continue _fun0002 }
 135:
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var6 = 17;
            var6 = var11[var6];
            var11 = var9.bind(var4)(var6);
            var9 = var11.getCreatedAtDate;
            var6 = _closure1_slot12;
            var6 = var6.CREATED_AT;
            var6 = var10[var6];
            var24 = var9.bind(var11)(var6, var12);
 181:
            _closure2_slot3 = var24;
            var17 = null;
            if(!var2) { _fun0002_ip = 580; continue _fun0002 }
 193:
            var2 = {};
            var6 = var20.type;
            var2['accountType'] = var6;
            var2['metadata'] = var10;
            var6 = var18.metadataItem;
            var2['style'] = var6;
            var9 = var2.accountType;
            var12 = var2.metadata;
            var11 = var2.style;
            var2 = _closure1_slot10;
            var2 = var2.REDDIT;
            if(!(var2 !== var9)) { _fun0002_ip = 545; continue _fun0002 }
 254:
            var2 = _closure1_slot10;
            var2 = var2.STEAM;
            if(!(var2 !== var9)) { _fun0002_ip = 511; continue _fun0002 }
 271:
            var2 = _closure1_slot10;
            var2 = var2.BLUESKY;
            if(!(var2 !== var9)) { _fun0002_ip = 477; continue _fun0002 }
 288:
            var2 = _closure1_slot10;
            var2 = var2.TWITTER;
            if(!(var2 !== var9)) { _fun0002_ip = 477; continue _fun0002 }
 305:
            var2 = _closure1_slot10;
            var2 = var2.MASTODON;
            if(!(var2 !== var9)) { _fun0002_ip = 477; continue _fun0002 }
 322:
            var2 = _closure1_slot10;
            var2 = var2.PAYPAL;
            if(!(var2 !== var9)) { _fun0002_ip = 443; continue _fun0002 }
 336:
            var2 = _closure1_slot10;
            var2 = var2.EBAY;
            if(!(var2 !== var9)) { _fun0002_ip = 406; continue _fun0002 }
 350:
            var2 = _closure1_slot10;
            var6 = var2.TIKTOK;
            var2 = null;
            if(!(var6 === var9)) { _fun0002_ip = 577; continue _fun0002 }
 369:
            var9 = _closure1_slot0;
            var13 = _closure1_slot2;
            var6 = 11;
            var6 = var13[var6];
            var9 = var9.bind(var4)(var6);
            var6 = var9.generateTikTokMetadataItems;
            var2 = var6.bind(var9)(var12, var11);
            _fun0002_ip = 577; continue _fun0002;
 406:
            var9 = _closure1_slot0;
            var13 = _closure1_slot2;
            var6 = 11;
            var6 = var13[var6];
            var9 = var9.bind(var4)(var6);
            var6 = var9.generateEbayMetadataItems;
            var2 = var6.bind(var9)(var12, var11);
            _fun0002_ip = 577; continue _fun0002;
 443:
            var9 = _closure1_slot0;
            var13 = _closure1_slot2;
            var6 = 11;
            var6 = var13[var6];
            var9 = var9.bind(var4)(var6);
            var6 = var9.generatePaypalMetadataItems;
            var2 = var6.bind(var9)(var12, var11);
            _fun0002_ip = 577; continue _fun0002;
 477:
            var9 = _closure1_slot0;
            var13 = _closure1_slot2;
            var6 = 11;
            var6 = var13[var6];
            var9 = var9.bind(var4)(var6);
            var6 = var9.generateTwitterMetadataItems;
            var2 = var6.bind(var9)(var12, var11);
            _fun0002_ip = 577; continue _fun0002;
 511:
            var9 = _closure1_slot0;
            var13 = _closure1_slot2;
            var6 = 11;
            var6 = var13[var6];
            var9 = var9.bind(var4)(var6);
            var6 = var9.generateSteamMetadataItems;
            var2 = var6.bind(var9)(var12, var11);
            _fun0002_ip = 577; continue _fun0002;
 545:
            var9 = _closure1_slot0;
            var13 = _closure1_slot2;
            var6 = 11;
            var6 = var13[var6];
            var9 = var9.bind(var4)(var6);
            var6 = var9.generateRedditMetadataItems;
            var2 = var6.bind(var9)(var12, var11);
 577:
            var17 = var2;
 580:
            var14 = var8 != var17;
            if(!var14) { _fun0002_ip = 598; continue _fun0002 }
 587:
            var6 = var17.length;
            var2 = 0;
            var14 = var6 > var2;
 598:
            var6 = _closure1_slot1;
            var13 = _closure1_slot2;
            var2 = 18;
            var2 = var13[var2];
            var9 = var6.bind(var4)(var2);
            var6 = var9.get;
            var2 = var20.type;
            var2 = var6.bind(var9)(var2);
            _closure2_slot4 = var2;
            var12 = _closure1_slot0;
            var6 = 19;
            var6 = var13[var6];
            var11 = var12.bind(var4)(var6);
            var9 = var11.makeSource;
            var6 = 13;
            var6 = var13[var6];
            var12 = var12.bind(var4)(var6);
            var6 = var12.isThemeDark;
            var6 = var6.bind(var12)(var26);
            var13 = var8 == var2;
            if(var6) { _fun0002_ip = 707; continue _fun0002 }
 689:
            var6 = undefined;
            if(var13) { _fun0002_ip = 705; continue _fun0002 }
 694:
            var12 = var2.icon;
            var6 = var12.lightPNG;
 705:
            _fun0002_ip = 726; continue _fun0002;
 707:
            var12 = undefined;
            if(var13) { _fun0002_ip = 723; continue _fun0002 }
 712:
            var13 = var2.icon;
            var12 = var13.darkPNG;
 723:
            var6 = var12;
 726:
            var11 = var9.bind(var11)(var6);
            var9 = var8 == var2;
            var6 = undefined;
            if(var9) { _fun0002_ip = 766; continue _fun0002 }
 740:
            var9 = var2.getPlatformUserUrl;
            var9 = var8 == var9;
            var6 = undefined;
            if(var9) { _fun0002_ip = 766; continue _fun0002 }
 755:
            var9 = var2.getPlatformUserUrl;
            var6 = var9.bind(var2)(var20);
 766:
            _closure2_slot5 = var6;
            var12 = var20.type;
            var9 = _closure1_slot10;
            var9 = var9.TWITTER;
            var25 = var12 === var9;
            if(!var25) { _fun0002_ip = 816; continue _fun0002 }
 792:
            var9 = _closure1_slot12;
            var9 = var9.TWITTER_VERIFIED;
            var10 = var10[var9];
            var9 = '1';
            var25 = var9 === var10;
 816:
            var13 = _closure1_slot3;
            var10 = var13.useCallback;
            var12 = var20.type;
            var9 = new Array(4);
            var9[0] = var12;
            var9[1] = var6;
            var9[2] = var3;
            var9[3] = var5;
            var5 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = _closure2_slot5;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0003_ip = 123; continue _fun0003 }
 13:
                    var2 = _closure2_slot2;
                    var1 = {};
                    var3 = 'PRESS_VIEW_CONNECTED_ACCOUNT';
                    var1['action'] = var3;
                    var3 = undefined;
                    var1 = var2.bind(var3)(var1);
                    var2 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 20;
                    var1 = var6[var1];
                    var3 = var2.bind(var3)(var1);
                    var2 = var3.handleClick;
                    var1 = {};
                    var6 = _closure2_slot5;
                    var1['href'] = var6;
                    var5 = _closure2_slot1;
                    var5 = var5.type;
                    var4 = _closure1_slot10;
                    var4 = var4.DOMAIN;
                    var4 = var5 !== var4;
                    var1['trusted'] = var4;
                    var4 = function onConfirm() {
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var1 = 21;
                        var2 = var5[var1];
                        var1 = undefined;
                        var8 = var4.bind(var1)(var2);
                        var7 = var8.trackWithMetadata;
                        var2 = _closure1_slot9;
                        var6 = var2.CONNECTED_ACCOUNT_VIEWED;
                        var4 = {};
                        var9 = _closure2_slot1;
                        var9 = var9.type;
                        var4['platform_type'] = var9;
                        var9 = _closure2_slot0;
                        var4['other_user_id'] = var9;
                        var4 = var7.bind(var8)(var6, var4);
                        var4 = _closure1_slot1;
                        var3 = 22;
                        var3 = var5[var3];
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.openURL;
                        var2 = _closure2_slot5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var1['onConfirm'] = var4;
                    var1 = var2.bind(var3)(var1);
 123:
                    var1 = undefined;
                    return var1;
                }
            };
            var10 = var10.bind(var13)(var5, var9);
            var9 = var13.useCallback;
            var12 = var20.name;
            var5 = new Array(2);
            var5[0] = var12;
            var5[1] = var3;
            var3 = function() {
                var4 = _closure2_slot2;
                var3 = {};
                var1 = 'COPY_CONNECTED_ACCOUNT';
                var3['action'] = var1;
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var5 = 23;
                var6 = var4[var5];
                var7 = var3.bind(var1)(var6);
                var6 = var7.triggerHapticFeedback;
                var5 = var4[var5];
                var5 = var3.bind(var1)(var5);
                var5 = var5.HapticFeedbackTypes;
                var5 = var5.IMPACT_LIGHT;
                var5 = var6.bind(var7)(var5);
                var5 = 24;
                var5 = var4[var5];
                var6 = var3.bind(var1)(var5);
                var5 = var6.copy;
                var2 = _closure2_slot1;
                var2 = var2.name;
                var2 = var5.bind(var6)(var2);
                var2 = 25;
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.presentCopiedToClipboard;
                var2 = var2.bind(var3)();
                return var1;
            };
            var5 = var9.bind(var13)(var3, var5);
            var12 = var13.useMemo;
            var3 = var20.name;
            var9 = new Array(3);
            var9[0] = var3;
            var9[1] = var24;
            var15 = var8 == var2;
            var3 = undefined;
            if(var15) { _fun0002_ip = 934; continue _fun0002 }
 929:
            var3 = var2.name;
 934:
            var9[2] = var3;
            var3 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var3 = new Array(0);
                    var4 = var3.push;
                    var1 = _closure2_slot4;
                    var2 = null;
                    var1 = var2 == var1;
                    var8 = undefined;
                    var5 = undefined;
                    if(var1) { _fun0004_ip = 38; continue _fun0004 }
 29:
                    var1 = _closure2_slot4;
                    var5 = var1.name;
 38:
                    var6 = var2 != var5;
                    var1 = '';
                    if(!var6) { _fun0004_ip = 52; continue _fun0004 }
 49:
                    var1 = var5;
 52:
                    var1 = var4.bind(var3)(var1);
                    var4 = var3.push;
                    var1 = _closure2_slot1;
                    var1 = var1.name;
                    var1 = var4.bind(var3)(var1);
                    var1 = _closure2_slot3;
                    if(!(var2 != var1)) { _fun0004_ip = 164; continue _fun0004 }
 84:
                    var2 = var3.push;
                    var4 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var1 = 26;
                    var5 = var9[var1];
                    var5 = var4.bind(var8)(var5);
                    var6 = var5.intl;
                    var5 = var6.formatToPlainString;
                    var1 = var9[var1];
                    var1 = var4.bind(var8)(var1);
                    var1 = var1.t;
                    var4 = var1.9rfonp;
                    var1 = {};
                    var7 = _closure2_slot3;
                    var1['date'] = var7;
                    var1 = var5.bind(var6)(var4, var1);
                    var1 = var2.bind(var3)(var1);
 164:
                    var2 = var3.join;
                    var1 = ', ';
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var12 = var12.bind(var13)(var3, var9);
            var9 = _closure1_slot3;
            var3 = var9.useMemo;
            var15 = var8 == var2;
            var13 = undefined;
            if(var15) { _fun0002_ip = 974; continue _fun0002 }
 969:
            var13 = var2.name;
 974:
            var2 = new Array(2);
            var2[0] = var13;
            var2[1] = var6;
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var1 = _closure2_slot5;
                    var5 = null;
                    if(!(var5 == var1)) { _fun0005_ip = 116; continue _fun0005 }
 13:
                    var2 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var1 = 26;
                    var3 = var8[var1];
                    var6 = undefined;
                    var3 = var2.bind(var6)(var3);
                    var4 = var3.intl;
                    var3 = var4.formatToPlainString;
                    var1 = var8[var1];
                    var1 = var2.bind(var6)(var1);
                    var1 = var1.t;
                    var2 = var1.OKzaNz;
                    var1 = {};
                    var8 = _closure2_slot4;
                    var8 = var5 == var8;
                    if(var8) { _fun0005_ip = 90; continue _fun0005 }
 81:
                    var7 = _closure2_slot4;
                    var6 = var7.name;
 90:
                    var7 = var5 != var6;
                    var5 = '';
                    if(!var7) { _fun0005_ip = 104; continue _fun0005 }
 101:
                    var5 = var6;
 104:
                    var1['name'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    _fun0005_ip = 176; continue _fun0005;
 116:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 26;
                    var3 = var7[var2];
                    var5 = undefined;
                    var3 = var6.bind(var5)(var3);
                    var4 = var3.intl;
                    var3 = var4.string;
                    var2 = var7[var2];
                    var2 = var6.bind(var5)(var2);
                    var2 = var2.t;
                    var2 = var2.wuRE8P;
                    var1 = var3.bind(var4)(var2);
 176:
                    return var1;
                }
            };
            var9 = var3.bind(var9)(var1, var2);
            if(!(var8 == var6)) { _fun0002_ip = 1009; continue _fun0002 }
 1003:
            var3 = _closure1_slot4;
            _fun0002_ip = 1035; continue _fun0002;
 1009:
            var2 = _closure1_slot0;
            var13 = _closure1_slot2;
            var1 = 27;
            var1 = var13[var1];
            var1 = var2.bind(var4)(var1);
            var3 = var1.PressableOpacity;
 1035:
            var2 = _closure1_slot14;
            var1 = {};
            var1['accessibilityLabel'] = var12;
            var1['accessibilityHint'] = var9;
            var9 = 'button';
            var1['accessibilityRole'] = var9;
            var12 = var8 != var6;
            var9 = undefined;
            if(!var12) { _fun0002_ip = 1070; continue _fun0002 }
 1067:
            var9 = var10;
 1070:
            var1['onPress'] = var9;
            var1['onLongPress'] = var5;
            var5 = var18.connectionRow;
            var1['style'] = var5;
            var10 = _closure1_slot13;
            var21 = _closure1_slot0;
            var19 = _closure1_slot2;
            var5 = 28;
            var5 = var19[var5];
            var5 = var21.bind(var4)(var5);
            var9 = var5.BaseIconImage;
            var5 = {};
            var12 = _closure1_slot8;
            var5['size'] = var12;
            var5['source'] = var11;
            var9 = var10.bind(var4)(var9, var5);
            var5 = new Array(3);
            var5[0] = var9;
            var11 = _closure1_slot14;
            var10 = _closure1_slot5;
            var9 = {};
            var12 = var18.connectionInfoContainer;
            var9['style'] = var12;
            var16 = _closure1_slot14;
            var13 = _closure1_slot5;
            var12 = {};
            var15 = var18.connectedAccountName;
            var12['style'] = var15;
            var22 = _closure1_slot13;
            var15 = 29;
            var19 = var19[var15];
            var19 = var21.bind(var4)(var19);
            var21 = var19.Text;
            var19 = {'variant': 'text-md/semibold', 'color': 'header-primary'};
            var23 = var20.name;
            var19['children'] = var23;
            var21 = var22.bind(var4)(var21, var19);
            var19 = new Array(2);
            var19[0] = var21;
            var21 = var20.verified;
            var20 = null;
            if(!var21) { _fun0002_ip = 1281; continue _fun0002 }
 1256:
            var23 = _closure1_slot13;
            var22 = _closure1_slot19;
            var21 = {};
            var21['theme'] = var26;
            var21['isTwitterVerifiedAccount'] = var25;
            var20 = var23.bind(var4)(var22, var21);
 1281:
            var19[1] = var20;
            var12['children'] = var19;
            var13 = var16.bind(var4)(var13, var12);
            var12 = new Array(3);
            var12[0] = var13;
            var16 = var8 != var24;
            var13 = null;
            if(!var16) { _fun0002_ip = 1417; continue _fun0002 }
 1312:
            var19 = _closure1_slot13;
            var21 = _closure1_slot0;
            var25 = _closure1_slot2;
            var15 = var25[var15];
            var15 = var21.bind(var4)(var15);
            var16 = var15.Text;
            var15 = {'variant': 'text-xs/medium', 'color': 'text-muted'};
            var20 = 26;
            var22 = var25[var20];
            var22 = var21.bind(var4)(var22);
            var23 = var22.intl;
            var22 = var23.format;
            var20 = var25[var20];
            var20 = var21.bind(var4)(var20);
            var20 = var20.t;
            var21 = var20.9rfonp;
            var20 = {};
            var20['date'] = var24;
            var20 = var22.bind(var23)(var21, var20);
            var15['children'] = var20;
            var13 = var19.bind(var4)(var16, var15);
 1417:
            var12[1] = var13;
            var13 = null;
            if(!var14) { _fun0002_ip = 1456; continue _fun0002 }
 1426:
            var16 = _closure1_slot13;
            var15 = _closure1_slot5;
            var14 = {};
            var18 = var18.connectionMetadata;
            var14['style'] = var18;
            var14['children'] = var17;
            var13 = var16.bind(var4)(var15, var14);
 1456:
            var12[2] = var13;
            var9['children'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var5[1] = var9;
            var6 = var8 != var6;
            if(!var6) { _fun0002_ip = 1527; continue _fun0002 }
 1481:
            var9 = _closure1_slot13;
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var7 = 30;
            var7 = var10[var7];
            var7 = var8.bind(var4)(var7);
            var8 = var7.LinkExternalSmallIcon;
            var7 = {};
            var10 = 'sm';
            var7['size'] = var10;
            var6 = var9.bind(var4)(var8, var7);
 1527:
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var2.bind(var4)(var3, var1);
            return var1;
        }
    };
    var4 = var5.bind(var8)(var4);
    var _closure1_slot17 = var4;
    var5 = var8.memo;
    var4 = function(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var1 = arg1;
            var18 = var1.applicationRoleConnection;
            var _closure2_slot0 = var18;
            var1 = _closure1_slot16;
            var4 = undefined;
            var14 = var1.bind(var4)();
            var2 = _closure1_slot0;
            var11 = _closure1_slot2;
            var1 = 11;
            var1 = var11[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.generateRoleConnectionMetadataItems;
            var16 = var1.bind(var2)(var18);
            var10 = _closure1_slot1;
            var1 = 19;
            var1 = var11[var1];
            var3 = var10.bind(var4)(var1);
            var2 = var3.getApplicationIconSource;
            var1 = {};
            var5 = var18.application;
            var5 = var5.id;
            var1['id'] = var5;
            var5 = var18.application;
            var5 = var5.icon;
            var1['icon'] = var5;
            var8 = var2.bind(var3)(var1);
            var3 = _closure1_slot14;
            var2 = _closure1_slot5;
            var1 = {};
            var5 = var14.connectionRow;
            var1['style'] = var5;
            var7 = _closure1_slot13;
            var9 = 8;
            var5 = var11[var9];
            var6 = var10.bind(var4)(var5);
            var5 = {};
            var9 = var11[var9];
            var9 = var10.bind(var4)(var9);
            var9 = var9.Sizes;
            var9 = var9.MEDIUM;
            var5['size'] = var9;
            var5['source'] = var8;
            var8 = true;
            var5['disableColor'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot14;
            var7 = _closure1_slot5;
            var6 = {};
            var9 = var14.connectionInfoContainer;
            var6['style'] = var9;
            var9 = var18.platform_name;
            var12 = null;
            var9 = var12 != var9;
            var10 = null;
            if(!var9) { _fun0006_ip = 300; continue _fun0006 }
 241:
            var15 = _closure1_slot13;
            var11 = _closure1_slot0;
            var17 = _closure1_slot2;
            var9 = 29;
            var9 = var17[var9];
            var9 = var11.bind(var4)(var9);
            var11 = var9.Text;
            var9 = {'variant': 'text-md/semibold', 'color': 'header-primary'};
            var17 = var18.platform_name;
            var9['children'] = var17;
            var10 = var15.bind(var4)(var11, var9);
 300:
            var9 = new Array(4);
            var9[0] = var10;
            var10 = var18.platform_username;
            var11 = var12 != var10;
            var10 = null;
            if(!var11) { _fun0006_ip = 382; continue _fun0006 }
 323:
            var17 = _closure1_slot13;
            var15 = _closure1_slot0;
            var19 = _closure1_slot2;
            var11 = 29;
            var11 = var19[var11];
            var11 = var15.bind(var4)(var11);
            var15 = var11.Text;
            var11 = {'variant': 'text-md/normal', 'color': 'text-normal'};
            var18 = var18.platform_username;
            var11['children'] = var18;
            var10 = var17.bind(var4)(var15, var11);
 382:
            var9[1] = var10;
            var11 = var12 != var16;
            var10 = null;
            if(!var11) { _fun0006_ip = 441; continue _fun0006 }
 395:
            var15 = var16.length;
            var11 = 0;
            var11 = var15 > var11;
            var10 = null;
            if(!var11) { _fun0006_ip = 441; continue _fun0006 }
 411:
            var15 = _closure1_slot13;
            var12 = _closure1_slot5;
            var11 = {};
            var17 = var14.connectionMetadata;
            var11['style'] = var17;
            var11['children'] = var16;
            var10 = var15.bind(var4)(var12, var11);
 441:
            var9[2] = var10;
            var12 = _closure1_slot13;
            var11 = _closure1_slot5;
            var10 = {};
            var14 = var14.poweredByContainer;
            var10['style'] = var14;
            var15 = _closure1_slot13;
            var17 = _closure1_slot0;
            var21 = _closure1_slot2;
            var13 = 29;
            var13 = var21[var13];
            var13 = var17.bind(var4)(var13);
            var14 = var13.Text;
            var13 = {'variant': 'text-xs/medium', 'color': 'text-muted'};
            var16 = 26;
            var18 = var21[var16];
            var18 = var17.bind(var4)(var18);
            var19 = var18.intl;
            var18 = var19.format;
            var16 = var21[var16];
            var16 = var17.bind(var4)(var16);
            var16 = var16.t;
            var17 = var16.zIT9YG;
            var16 = {};
            var20 = function applicationHook() {
                var1 = _closure2_slot0;
                var1 = var1.application;
                var1 = var1.name;
                return var1;
            };
            var16['applicationHook'] = var20;
            var16 = var18.bind(var19)(var17, var16);
            var13['children'] = var16;
            var13 = var15.bind(var4)(var14, var13);
            var10['children'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var9[3] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var5.bind(var8)(var4);
    var _closure1_slot18 = var4;
    var5 = 36;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/user_profile/native/UserProfileConnections.tsx';
    var5 = var6.bind(var7)(var5);
    var3['ApplicationRoleConnection'] = var4;
    var4 = function UserProfileAccountConnectionsCard(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var1 = arg1;
            var4 = var1.userId;
            var _closure2_slot0 = var4;
            var13 = var1.style;
            var1 = _closure1_slot16;
            var5 = undefined;
            var12 = var1.bind(var5)();
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 31;
            var1 = var3[var1];
            var6 = var2.bind(var5)(var1);
            var1 = var6.useThemeContext;
            var1 = var1.bind(var6)();
            var1 = var1.theme;
            var _closure2_slot1 = var1;
            var6 = _closure1_slot1;
            var1 = 32;
            var1 = var3[var1];
            var1 = var6.bind(var5)(var1);
            var11 = var1.bind(var5)(var4);
            var1 = 33;
            var4 = var3[var1];
            var10 = var2.bind(var5)(var4);
            var7 = var10.useStateFromStores;
            var4 = _closure1_slot6;
            var6 = new Array(1);
            var6[0] = var4;
            var4 = function() {
                var1 = _closure1_slot6;
                var1 = var1.locale;
                return var1;
            };
            var4 = var7.bind(var10)(var6, var4);
            var _closure2_slot2 = var4;
            var1 = var3[var1];
            var4 = var2.bind(var5)(var1);
            var3 = var4.useStateFromStores;
            var1 = _closure1_slot7;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var1 = _closure1_slot7;
                var1 = var1.hidePersonalInformation;
                return var1;
            };
            var2 = var3.bind(var4)(var2, var1);
            var1 = null;
            if(var2) { _fun0007_ip = 373; continue _fun0007 }
 185:
            var3 = var11.length;
            var2 = 0;
            var1 = null;
            if(!(var2 !== var3)) { _fun0007_ip = 373; continue _fun0007 }
 201:
            var4 = _closure1_slot13;
            var3 = _closure1_slot1;
            var10 = _closure1_slot2;
            var6 = 34;
            var2 = var10[var6];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var14 = var12.cardContainer;
            var7 = new Array(2);
            var7[0] = var14;
            var7[1] = var13;
            var2['style'] = var7;
            var7 = _closure1_slot0;
            var13 = 26;
            var14 = var10[var13];
            var14 = var7.bind(var5)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var13 = var10[var13];
            var13 = var7.bind(var5)(var13);
            var13 = var13.t;
            var13 = var13.3fe7U1;
            var13 = var14.bind(var15)(var13);
            var2['title'] = var13;
            var12 = var12.cardTitle;
            var2['titleStyle'] = var12;
            var8 = _closure1_slot13;
            var6 = var10[var6];
            var6 = var7.bind(var5)(var6);
            var7 = var6.UserProfileCardRows;
            var6 = {};
            var10 = var11.map;
            var9 = function(arg1) {
                var1 = arg1;
                var5 = _closure1_slot13;
                var4 = _closure1_slot17;
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
            var9 = var10.bind(var11)(var9);
            var6['children'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 373:
            return var1;
        }
    };
    var3['UserProfileAccountConnectionsCard'] = var4;
    var2 = function UserProfileApplicationRoleConnectionsCard(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var1 = arg1;
            var2 = var1.userId;
            var13 = var1.style;
            var1 = _closure1_slot16;
            var5 = undefined;
            var12 = var1.bind(var5)();
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 35;
            var1 = var3[var1];
            var1 = var4.bind(var5)(var1);
            var11 = var1.bind(var5)(var2);
            var2 = _closure1_slot0;
            var1 = 33;
            var1 = var3[var1];
            var4 = var2.bind(var5)(var1);
            var3 = var4.useStateFromStores;
            var1 = _closure1_slot7;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var1 = _closure1_slot7;
                var1 = var1.hidePersonalInformation;
                return var1;
            };
            var2 = var3.bind(var4)(var2, var1);
            var1 = null;
            if(var2) { _fun0008_ip = 295; continue _fun0008 }
 107:
            var3 = var11.length;
            var2 = 0;
            var1 = null;
            if(!(var2 !== var3)) { _fun0008_ip = 295; continue _fun0008 }
 123:
            var4 = _closure1_slot13;
            var3 = _closure1_slot1;
            var10 = _closure1_slot2;
            var6 = 34;
            var2 = var10[var6];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var14 = var12.cardContainer;
            var7 = new Array(2);
            var7[0] = var14;
            var7[1] = var13;
            var2['style'] = var7;
            var7 = _closure1_slot0;
            var13 = 26;
            var14 = var10[var13];
            var14 = var7.bind(var5)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var13 = var10[var13];
            var13 = var7.bind(var5)(var13);
            var13 = var13.t;
            var13 = var13.PHjkRE;
            var13 = var14.bind(var15)(var13);
            var2['title'] = var13;
            var12 = var12.cardTitle;
            var2['titleStyle'] = var12;
            var8 = _closure1_slot13;
            var6 = var10[var6];
            var6 = var7.bind(var5)(var6);
            var7 = var6.UserProfileCardRows;
            var6 = {};
            var10 = var11.map;
            var9 = function(arg1) {
                var1 = arg1;
                var5 = _closure1_slot13;
                var4 = _closure1_slot18;
                var3 = {};
                var3['applicationRoleConnection'] = var1;
                var1 = var1.application;
                var2 = var1.id;
                var1 = undefined;
                var1 = var5.bind(var1)(var4, var3, var2);
                return var1;
            };
            var9 = var10.bind(var11)(var9);
            var6['children'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 295:
            return var1;
        }
    };
    var3['UserProfileApplicationRoleConnectionsCard'] = var2;
    return var1;
})();