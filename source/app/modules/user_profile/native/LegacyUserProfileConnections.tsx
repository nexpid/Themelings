// app/modules/user_profile/native/LegacyUserProfileConnections.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var9 = native2;
    var17 = native3;
    var3 = native6;
    var10 = native7;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var17;
    var _closure1_slot2 = var10;
    var6 = function ConnectedUserAccount(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var28 = var4.account;
            var _closure2_slot0 = var28;
            var2 = var4.theme;
            var12 = var4.locale;
            var10 = var4.userId;
            var _closure2_slot1 = var10;
            var9 = var4.style;
            var3 = var4.showMetadata;
            var7 = var4.showInvisibleIcon;
            var4 = undefined;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var20 = null;
            if(!(var20 == var3)) { _fun0001_ip = 71; continue _fun0001 }
 69:
            var3 = true;
 71:
            var5 = _closure1_slot17;
            var22 = var5.bind(var4)();
            var11 = var28.metadata;
            if(!(var20 == var11)) { _fun0001_ip = 94; continue _fun0001 }
 92:
            var11 = {};
 94:
            var29 = null;
            if(!var3) { _fun0001_ip = 145; continue _fun0001 }
 99:
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 12;
            var5 = var8[var5];
            var8 = var6.bind(var4)(var5);
            var6 = var8.getCreatedAtDate;
            var5 = _closure1_slot13;
            var5 = var5.CREATED_AT;
            var5 = var11[var5];
            var29 = var6.bind(var8)(var5, var12);
 145:
            var21 = undefined;
            var5 = undefined;
            if(!var3) { _fun0001_ip = 634; continue _fun0001 }
 155:
            var6 = var28.type;
            var3 = _closure1_slot11;
            var3 = var3.REDDIT;
            if(!(var3 !== var6)) { _fun0001_ip = 594; continue _fun0001 }
 177:
            var3 = _closure1_slot11;
            var3 = var3.STEAM;
            if(!(var3 !== var6)) { _fun0001_ip = 552; continue _fun0001 }
 194:
            var3 = _closure1_slot11;
            var3 = var3.BLUESKY;
            if(!(var3 !== var6)) { _fun0001_ip = 432; continue _fun0001 }
 211:
            var3 = _closure1_slot11;
            var3 = var3.MASTODON;
            if(!(var3 !== var6)) { _fun0001_ip = 432; continue _fun0001 }
 228:
            var3 = _closure1_slot11;
            var3 = var3.TWITTER;
            if(!(var3 !== var6)) { _fun0001_ip = 432; continue _fun0001 }
 245:
            var3 = _closure1_slot11;
            var3 = var3.PAYPAL;
            if(!(var3 !== var6)) { _fun0001_ip = 387; continue _fun0001 }
 262:
            var3 = _closure1_slot11;
            var3 = var3.EBAY;
            if(!(var3 !== var6)) { _fun0001_ip = 342; continue _fun0001 }
 276:
            var3 = _closure1_slot11;
            var3 = var3.TIKTOK;
            var21 = undefined;
            var5 = undefined;
            if(!(var3 === var6)) { _fun0001_ip = 634; continue _fun0001 }
 297:
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 13;
            var3 = var8[var3];
            var8 = var6.bind(var4)(var3);
            var6 = var8.generateTikTokMetadataItems;
            var3 = var22.metadataItem;
            var21 = var6.bind(var8)(var11, var3);
            var5 = undefined;
            _fun0001_ip = 634; continue _fun0001;
 342:
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 13;
            var3 = var8[var3];
            var8 = var6.bind(var4)(var3);
            var6 = var8.generateEbayMetadataItems;
            var3 = var22.metadataItem;
            var21 = var6.bind(var8)(var11, var3);
            var5 = undefined;
            _fun0001_ip = 634; continue _fun0001;
 387:
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 13;
            var3 = var8[var3];
            var8 = var6.bind(var4)(var3);
            var6 = var8.generatePaypalMetadataItems;
            var3 = var22.metadataItem;
            var21 = var6.bind(var8)(var11, var3);
            var5 = undefined;
            _fun0001_ip = 634; continue _fun0001;
 432:
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 13;
            var3 = var8[var3];
            var8 = var6.bind(var4)(var3);
            var6 = var8.generateTwitterMetadataItems;
            var3 = var22.metadataItem;
            var6 = var6.bind(var8)(var11, var3);
            var3 = _closure1_slot13;
            var3 = var3.TWITTER_VERIFIED;
            var8 = var11[var3];
            var3 = '1';
            var21 = var6;
            var5 = undefined;
            if(!(var3 === var8)) { _fun0001_ip = 634; continue _fun0001 }
 502:
            var8 = _closure1_slot1;
            var12 = _closure1_slot2;
            var3 = 14;
            var3 = var12[var3];
            var12 = var8.bind(var4)(var3);
            var8 = var12.get;
            var3 = _closure1_slot11;
            var3 = var3.TWITTER;
            var3 = var8.bind(var12)(var3);
            var5 = var3.color;
            var21 = var6;
            _fun0001_ip = 634; continue _fun0001;
 552:
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 13;
            var3 = var8[var3];
            var8 = var6.bind(var4)(var3);
            var6 = var8.generateSteamMetadataItems;
            var3 = var22.metadataItem;
            var21 = var6.bind(var8)(var11, var3);
            var5 = undefined;
            _fun0001_ip = 634; continue _fun0001;
 594:
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 13;
            var3 = var8[var3];
            var8 = var6.bind(var4)(var3);
            var6 = var8.generateRedditMetadataItems;
            var3 = var22.metadataItem;
            var21 = var6.bind(var8)(var11, var3);
            var5 = undefined;
 634:
            var6 = _closure1_slot1;
            var13 = _closure1_slot2;
            var3 = 14;
            var3 = var13[var3];
            var8 = var6.bind(var4)(var3);
            var6 = var8.get;
            var3 = var28.type;
            var3 = var6.bind(var8)(var3);
            _closure2_slot2 = var3;
            var12 = _closure1_slot0;
            var6 = 15;
            var6 = var13[var6];
            var11 = var12.bind(var4)(var6);
            var8 = var11.makeSource;
            var6 = 16;
            var6 = var13[var6];
            var12 = var12.bind(var4)(var6);
            var6 = var12.isThemeDark;
            var6 = var6.bind(var12)(var2);
            var13 = var20 == var3;
            if(var6) { _fun0001_ip = 743; continue _fun0001 }
 725:
            var6 = undefined;
            if(var13) { _fun0001_ip = 741; continue _fun0001 }
 730:
            var12 = var3.icon;
            var6 = var12.lightPNG;
 741:
            _fun0001_ip = 762; continue _fun0001;
 743:
            var12 = undefined;
            if(var13) { _fun0001_ip = 759; continue _fun0001 }
 748:
            var13 = var3.icon;
            var12 = var13.darkPNG;
 759:
            var6 = var12;
 762:
            var15 = var8.bind(var11)(var6);
            var8 = var20 == var3;
            var6 = undefined;
            if(var8) { _fun0001_ip = 802; continue _fun0001 }
 776:
            var8 = var3.getPlatformUserUrl;
            var8 = var20 == var8;
            var6 = undefined;
            if(var8) { _fun0001_ip = 802; continue _fun0001 }
 791:
            var8 = var3.getPlatformUserUrl;
            var6 = var8.bind(var3)(var28);
 802:
            _closure2_slot3 = var6;
            if(!(var20 != var7)) { _fun0001_ip = 813; continue _fun0001 }
 810:
            if(var7) { _fun0001_ip = 882; continue _fun0001 }
 813:
            var7 = var20 != var6;
            var12 = null;
            if(!var7) { _fun0001_ip = 940; continue _fun0001 }
 822:
            var11 = _closure1_slot14;
            var14 = _closure1_slot1;
            var16 = _closure1_slot2;
            var7 = 17;
            var7 = var16[var7];
            var8 = var14.bind(var4)(var7);
            var7 = {};
            var13 = var22.connectedAccountOpenLink;
            var7['style'] = var13;
            var13 = 19;
            var13 = var16[var13];
            var13 = var14.bind(var4)(var13);
            var7['source'] = var13;
            var12 = var11.bind(var4)(var8, var7);
            _fun0001_ip = 940; continue _fun0001;
 882:
            var11 = _closure1_slot14;
            var14 = _closure1_slot1;
            var16 = _closure1_slot2;
            var7 = 17;
            var7 = var16[var7];
            var8 = var14.bind(var4)(var7);
            var7 = {};
            var13 = var22.connectedAccountOpenHide;
            var7['style'] = var13;
            var13 = 18;
            var13 = var16[var13];
            var13 = var14.bind(var4)(var13);
            var7['source'] = var13;
            var12 = var11.bind(var4)(var8, var7);
 940:
            var14 = _closure1_slot0;
            var11 = _closure1_slot2;
            var13 = 20;
            var7 = var11[var13];
            var19 = var14.bind(var4)(var7);
            var17 = var19.useToken;
            var16 = _closure1_slot1;
            var8 = 11;
            var7 = var11[var8];
            var7 = var16.bind(var4)(var7);
            var7 = var7.colors;
            var7 = var7.INTERACTIVE_MUTED;
            var7 = var17.bind(var19)(var7, var2);
            var13 = var11[var13];
            var14 = var14.bind(var4)(var13);
            var13 = var14.useToken;
            var11 = var11[var8];
            var11 = var16.bind(var4)(var11);
            var11 = var11.colors;
            var11 = var11.INTERACTIVE_ACTIVE;
            if(!(var20 != var5)) { _fun0001_ip = 1048; continue _fun0001 }
 1038:
            var16 = _closure1_slot12;
            var2 = var16.DARK;
 1048:
            var16 = var13.bind(var14)(var11, var2);
            var14 = var7;
            if(!(var20 != var5)) { _fun0001_ip = 1092; continue _fun0001 }
 1061:
            var7 = _closure1_slot1;
            var2 = _closure1_slot2;
            var2 = var2[var8];
            var2 = var7.bind(var4)(var2);
            var2 = var2.unsafe_rawColors;
            var16 = var2.WHITE_500;
            var14 = var5;
 1092:
            var2 = var28.verified;
            var25 = null;
            if(!var2) { _fun0001_ip = 1311; continue _fun0001 }
 1106:
            var7 = _closure1_slot15;
            var5 = _closure1_slot5;
            var2 = {};
            var8 = var22.verifiedCheckContainer;
            var2['style'] = var8;
            var13 = _closure1_slot14;
            var19 = _closure1_slot1;
            var23 = _closure1_slot2;
            var17 = 17;
            var8 = var23[var17];
            var11 = var19.bind(var4)(var8);
            var8 = {};
            var24 = var22.verifiedCheck;
            var8['style'] = var24;
            var24 = var23[var17];
            var24 = var19.bind(var4)(var24);
            var24 = var24.Sizes;
            var24 = var24.REFRESH_SMALL_16;
            var8['size'] = var24;
            var24 = 21;
            var24 = var23[var24];
            var24 = var19.bind(var4)(var24);
            var8['source'] = var24;
            var8['color'] = var14;
            var11 = var13.bind(var4)(var11, var8);
            var8 = new Array(2);
            var8[0] = var11;
            var14 = _closure1_slot14;
            var11 = var23[var17];
            var13 = var19.bind(var4)(var11);
            var11 = {};
            var24 = var22.verifiedCheck;
            var11['style'] = var24;
            var17 = var23[var17];
            var17 = var19.bind(var4)(var17);
            var17 = var17.Sizes;
            var17 = var17.REFRESH_SMALL_16;
            var11['size'] = var17;
            var17 = 22;
            var17 = var23[var17];
            var17 = var19.bind(var4)(var17);
            var11['source'] = var17;
            var11['color'] = var16;
            var11 = var14.bind(var4)(var13, var11);
            var8[1] = var11;
            var2['children'] = var8;
            var25 = var7.bind(var4)(var5, var2);
 1311:
            var8 = _closure1_slot3;
            var7 = var8.useCallback;
            var2 = var28.name;
            var5 = new Array(1);
            var5[0] = var2;
            var2 = function() {
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 23;
                var5 = var4[var2];
                var1 = undefined;
                var6 = var3.bind(var1)(var5);
                var5 = var6.triggerHapticFeedback;
                var2 = var4[var2];
                var2 = var3.bind(var1)(var2);
                var2 = var2.HapticFeedbackTypes;
                var2 = var2.IMPACT_LIGHT;
                var2 = var5.bind(var6)(var2);
                var2 = 24;
                var2 = var4[var2];
                var6 = var3.bind(var1)(var2);
                var5 = var6.copy;
                var2 = _closure2_slot0;
                var2 = var2.name;
                var2 = var5.bind(var6)(var2);
                var2 = 25;
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.presentCopiedToClipboard;
                var2 = var2.bind(var3)();
                return var1;
            };
            var5 = var7.bind(var8)(var2, var5);
            var8 = _closure1_slot3;
            var7 = var8.useMemo;
            var11 = var20 == var3;
            var2 = undefined;
            if(var11) { _fun0001_ip = 1369; continue _fun0001 }
 1364:
            var2 = var3.name;
 1369:
            var3 = new Array(2);
            var3[0] = var2;
            var3[1] = var6;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = _closure2_slot3;
                    var5 = null;
                    if(!(var5 == var1)) { _fun0002_ip = 116; continue _fun0002 }
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
                    var8 = _closure2_slot2;
                    var8 = var5 == var8;
                    if(var8) { _fun0002_ip = 90; continue _fun0002 }
 81:
                    var7 = _closure2_slot2;
                    var6 = var7.name;
 90:
                    var7 = var5 != var6;
                    var5 = '';
                    if(!var7) { _fun0002_ip = 104; continue _fun0002 }
 101:
                    var5 = var6;
 104:
                    var1['name'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    _fun0002_ip = 176; continue _fun0002;
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
            var8 = var7.bind(var8)(var2, var3);
            var7 = _closure1_slot3;
            var3 = var7.useCallback;
            var11 = var28.type;
            var2 = new Array(3);
            var2[0] = var11;
            var2[1] = var6;
            var2[2] = var10;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = _closure2_slot3;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0003_ip = 102; continue _fun0003 }
 13:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 27;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.handleClick;
                    var1 = {};
                    var6 = _closure2_slot3;
                    var1['href'] = var6;
                    var5 = _closure2_slot0;
                    var5 = var5.type;
                    var4 = _closure1_slot11;
                    var4 = var4.DOMAIN;
                    var4 = var5 !== var4;
                    var1['trusted'] = var4;
                    var4 = function onConfirm() {
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var1 = 28;
                        var2 = var5[var1];
                        var1 = undefined;
                        var8 = var4.bind(var1)(var2);
                        var7 = var8.trackWithMetadata;
                        var2 = _closure1_slot10;
                        var6 = var2.CONNECTED_ACCOUNT_VIEWED;
                        var4 = {};
                        var9 = _closure2_slot0;
                        var9 = var9.type;
                        var4['platform_type'] = var9;
                        var9 = _closure2_slot1;
                        var4['other_user_id'] = var9;
                        var4 = var7.bind(var8)(var6, var4);
                        var4 = _closure1_slot1;
                        var3 = 29;
                        var3 = var5[var3];
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.openURL;
                        var2 = _closure2_slot3;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var1['onConfirm'] = var4;
                    var1 = var2.bind(var3)(var1);
 102:
                    var1 = undefined;
                    return var1;
                }
            };
            var7 = var3.bind(var7)(var1, var2);
            if(!(var20 == var6)) { _fun0001_ip = 1447; continue _fun0001 }
 1441:
            var3 = _closure1_slot4;
            _fun0001_ip = 1473; continue _fun0001;
 1447:
            var2 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 30;
            var1 = var10[var1];
            var1 = var2.bind(var4)(var1);
            var3 = var1.PressableOpacity;
 1473:
            var2 = _closure1_slot14;
            var1 = {};
            var1['accessibilityLabel'] = var8;
            var8 = 'button';
            var1['accessibilityRole'] = var8;
            var8 = var20 != var6;
            var6 = undefined;
            if(!var8) { _fun0001_ip = 1503; continue _fun0001 }
 1500:
            var6 = var7;
 1503:
            var1['onPress'] = var6;
            var1['onLongPress'] = var5;
            var7 = _closure1_slot14;
            var6 = _closure1_slot5;
            var5 = {};
            var10 = var22.connectedAccountContainer;
            var8 = new Array(2);
            var8[0] = var10;
            var8[1] = var9;
            var5['style'] = var8;
            var10 = _closure1_slot15;
            var9 = _closure1_slot5;
            var8 = {};
            var11 = var22.connectedAccount;
            var8['style'] = var11;
            var14 = _closure1_slot14;
            var17 = _closure1_slot1;
            var24 = _closure1_slot2;
            var16 = 17;
            var11 = var24[var16];
            var13 = var17.bind(var4)(var11);
            var11 = {};
            var16 = var24[var16];
            var16 = var17.bind(var4)(var16);
            var16 = var16.Sizes;
            var16 = var16.MEDIUM;
            var11['size'] = var16;
            var11['source'] = var15;
            var15 = true;
            var11['disableColor'] = var15;
            var13 = var14.bind(var4)(var13, var11);
            var11 = new Array(3);
            var11[0] = var13;
            var15 = _closure1_slot15;
            var14 = _closure1_slot5;
            var13 = {};
            var16 = var22.connectedAccountNameContainer;
            var13['style'] = var16;
            var23 = _closure1_slot15;
            var17 = _closure1_slot5;
            var16 = {};
            var19 = var22.connectedAccountName;
            var16['style'] = var19;
            var27 = _closure1_slot14;
            var26 = _closure1_slot0;
            var19 = 31;
            var24 = var24[var19];
            var24 = var26.bind(var4)(var24);
            var26 = var24.Text;
            var24 = {};
            var30 = 'text-md/semibold';
            var24['variant'] = var30;
            var30 = var22.connectedAccountNameText;
            var24['style'] = var30;
            var28 = var28.name;
            var24['children'] = var28;
            var26 = var27.bind(var4)(var26, var24);
            var24 = new Array(2);
            var24[0] = var26;
            var24[1] = var25;
            var16['children'] = var24;
            var17 = var23.bind(var4)(var17, var16);
            var16 = new Array(3);
            var16[0] = var17;
            var23 = var20 != var29;
            var17 = null;
            if(!var23) { _fun0001_ip = 1892; continue _fun0001 }
 1779:
            var24 = _closure1_slot14;
            var26 = _closure1_slot0;
            var30 = _closure1_slot2;
            var19 = var30[var19];
            var19 = var26.bind(var4)(var19);
            var23 = var19.Text;
            var19 = {};
            var25 = 'heading-deprecated-12/medium';
            var19['variant'] = var25;
            var25 = var22.connectedAccountNameCreatedAtText;
            var19['style'] = var25;
            var25 = 26;
            var27 = var30[var25];
            var27 = var26.bind(var4)(var27);
            var28 = var27.intl;
            var27 = var28.format;
            var25 = var30[var25];
            var25 = var26.bind(var4)(var25);
            var25 = var25.t;
            var26 = var25.9rfonp;
            var25 = {};
            var25['date'] = var29;
            var25 = var27.bind(var28)(var26, var25);
            var19['children'] = var25;
            var17 = var24.bind(var4)(var23, var19);
 1892:
            var16[1] = var17;
            var19 = var20 != var21;
            var17 = null;
            if(!var19) { _fun0001_ip = 1951; continue _fun0001 }
 1905:
            var23 = var21.length;
            var19 = 0;
            var19 = var23 > var19;
            var17 = null;
            if(!var19) { _fun0001_ip = 1951; continue _fun0001 }
 1921:
            var20 = _closure1_slot14;
            var19 = _closure1_slot5;
            var18 = {};
            var22 = var22.connectedAccountChildren;
            var18['style'] = var22;
            var18['children'] = var21;
            var17 = var20.bind(var4)(var19, var18);
 1951:
            var16[2] = var17;
            var13['children'] = var16;
            var13 = var15.bind(var4)(var14, var13);
            var11[1] = var13;
            var11[2] = var12;
            var8['children'] = var11;
            var8 = var10.bind(var4)(var9, var8);
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var2.bind(var4)(var3, var1);
            return var1;
        }
    };
    var5 = function ConnectedApplicationUserRoleAccount(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var17 = var1.applicationRoleConnection;
            var _closure2_slot0 = var17;
            var6 = var1.style;
            var1 = _closure1_slot17;
            var4 = undefined;
            var13 = var1.bind(var4)();
            var _closure2_slot1 = var13;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 13;
            var1 = var3[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.generateRoleConnectionMetadataItems;
            var11 = var1.bind(var2)(var17);
            var3 = _closure1_slot15;
            var2 = _closure1_slot5;
            var1 = {};
            var7 = var13.connectedAccountContainer;
            var5 = new Array(2);
            var5[0] = var7;
            var5[1] = var6;
            var1['style'] = var5;
            var5 = var17.platform_name;
            var8 = null;
            var5 = var8 != var5;
            var6 = null;
            if(!var5) { _fun0004_ip = 176; continue _fun0004 }
 117:
            var9 = _closure1_slot14;
            var7 = _closure1_slot0;
            var12 = _closure1_slot2;
            var5 = 31;
            var5 = var12[var5];
            var5 = var7.bind(var4)(var5);
            var7 = var5.Text;
            var5 = {'variant': 'eyebrow', 'color': 'interactive-normal'};
            var12 = var17.platform_name;
            var5['children'] = var12;
            var6 = var9.bind(var4)(var7, var5);
 176:
            var5 = new Array(4);
            var5[0] = var6;
            var9 = _closure1_slot14;
            var7 = _closure1_slot5;
            var6 = {};
            var12 = var13.appConnectionNameContainer;
            var6['style'] = var12;
            var12 = var17.platform_username;
            var14 = var8 != var12;
            var12 = null;
            if(!var14) { _fun0004_ip = 278; continue _fun0004 }
 219:
            var16 = _closure1_slot14;
            var15 = _closure1_slot0;
            var18 = _closure1_slot2;
            var14 = 31;
            var14 = var18[var14];
            var14 = var15.bind(var4)(var14);
            var15 = var14.Text;
            var14 = {'variant': 'text-md/semibold', 'color': 'interactive-active'};
            var17 = var17.platform_username;
            var14['children'] = var17;
            var12 = var16.bind(var4)(var15, var14);
 278:
            var6['children'] = var12;
            var6 = var9.bind(var4)(var7, var6);
            var5[1] = var6;
            var7 = var8 != var11;
            var6 = null;
            if(!var7) { _fun0004_ip = 347; continue _fun0004 }
 301:
            var9 = var11.length;
            var7 = 0;
            var7 = var9 > var7;
            var6 = null;
            if(!var7) { _fun0004_ip = 347; continue _fun0004 }
 317:
            var9 = _closure1_slot14;
            var8 = _closure1_slot5;
            var7 = {};
            var12 = var13.connectedAccountChildren;
            var7['style'] = var12;
            var7['children'] = var11;
            var6 = var9.bind(var4)(var8, var7);
 347:
            var5[2] = var6;
            var8 = _closure1_slot15;
            var7 = _closure1_slot5;
            var6 = {};
            var9 = {};
            var11 = 'row';
            var9['flexDirection'] = var11;
            var6['style'] = var9;
            var12 = _closure1_slot14;
            var11 = _closure1_slot5;
            var9 = {};
            var13 = var13.connectedAccountPoweredByContainer;
            var9['style'] = var13;
            var15 = _closure1_slot14;
            var17 = _closure1_slot0;
            var21 = _closure1_slot2;
            var13 = 31;
            var13 = var21[var13];
            var13 = var17.bind(var4)(var13);
            var14 = var13.Text;
            var13 = {'variant': 'text-xs/normal', 'color': 'text-muted'};
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
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var4 = _closure1_slot15;
                    var3 = _closure1_slot5;
                    var2 = {};
                    var5 = _closure2_slot1;
                    var5 = var5.connectedAccountPoweredByText;
                    var2['style'] = var5;
                    var5 = _closure2_slot0;
                    var5 = var5.application;
                    var5 = var5.bot;
                    var6 = null;
                    var5 = var6 != var5;
                    if(!var5) { _fun0005_ip = 181; continue _fun0005 }
 57:
                    var10 = _closure1_slot14;
                    var7 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var11 = 32;
                    var5 = var13[var11];
                    var8 = undefined;
                    var7 = var7.bind(var8)(var5);
                    var5 = {};
                    var12 = _closure2_slot1;
                    var12 = var12.connectedAccountPoweredByAvatar;
                    var5['style'] = var12;
                    var15 = _closure1_slot7;
                    var12 = _closure2_slot0;
                    var12 = var12.application;
                    var17 = var12.bot;
                    var14 = var15.prototype;
                    var14 = Object.create(var14, {constructor: {value: var15}});
                    var18 = var14;
                    var12 = new var18[var15](var17, var16);
                    var12 = var12 instanceof Object ? var12 : var14;
                    var5['user'] = var12;
                    var12 = _closure1_slot0;
                    var11 = var13[var11];
                    var11 = var12.bind(var8)(var11);
                    var11 = var11.AvatarSizes;
                    var11 = var11.SIZE_16;
                    var5['size'] = var11;
                    var5['guildId'] = var8;
                    var6 = var10.bind(var8)(var7, var5);
 181:
                    var5 = new Array(2);
                    var5[0] = var6;
                    var8 = _closure1_slot14;
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 31;
                    var6 = var6[var1];
                    var1 = undefined;
                    var6 = var7.bind(var1)(var6);
                    var7 = var6.Text;
                    var6 = {'variant': 'text-xs/normal', 'color': 'text-normal'};
                    var9 = _closure2_slot0;
                    var9 = var9.application;
                    var9 = var9.name;
                    var6['children'] = var9;
                    var6 = var8.bind(var1)(var7, var6);
                    var5[1] = var6;
                    var2['children'] = var5;
                    var1 = var4.bind(var1)(var3, var2);
                    return var1;
                }
            };
            var16['applicationHook'] = var20;
            var16 = var18.bind(var19)(var17, var16);
            var13['children'] = var16;
            var13 = var15.bind(var4)(var14, var13);
            var9['children'] = var13;
            var11 = var12.bind(var4)(var11, var9);
            var9 = new Array(2);
            var9[0] = var11;
            var12 = _closure1_slot14;
            var11 = _closure1_slot5;
            var10 = {};
            var13 = {};
            var14 = 1;
            var13['flexGrow'] = var14;
            var10['style'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var9[1] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[3] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = function useAppplicationRoleConnectionItems(arg1, arg2) {
        var3 = arg1;
        var2 = arg2;
        var _closure2_slot0 = var2;
        var6 = _closure1_slot0;
        var7 = _closure1_slot2;
        var4 = 33;
        var4 = var7[var4];
        var5 = undefined;
        var8 = var6.bind(var5)(var4);
        var4 = var8.useThemeContext;
        var4 = var4.bind(var8)();
        var4 = var4.theme;
        var _closure2_slot1 = var4;
        var4 = 34;
        var4 = var7[var4];
        var6 = var6.bind(var5)(var4);
        var5 = var6.useStateFromStores;
        var2 = _closure1_slot6;
        var4 = new Array(1);
        var4[0] = var2;
        var2 = function() {
            var1 = _closure1_slot6;
            var1 = var1.locale;
            return var1;
        };
        var2 = var5.bind(var6)(var4, var2);
        var _closure2_slot2 = var2;
        var2 = var3.map;
        var1 = function(arg1, arg2) {
            var5 = _closure1_slot14;
            var2 = _closure1_slot3;
            var4 = var2.Fragment;
            var3 = {};
            var7 = _closure1_slot14;
            var6 = _closure1_slot19;
            var1 = {};
            var2 = arg1;
            var1['applicationRoleConnection'] = var2;
            var8 = _closure2_slot1;
            var1['theme'] = var8;
            var8 = _closure2_slot2;
            var1['locale'] = var8;
            var2 = _closure2_slot0;
            var1['style'] = var2;
            var2 = undefined;
            var1 = var7.bind(var2)(var6, var1);
            var3['children'] = var1;
            var1 = arg2;
            var1 = var5.bind(var2)(var4, var3, var1);
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot22 = var4;
    var2 = function useConnectedAccountItems(arg1, arg2, arg3) {
        var4 = arg1;
        var2 = arg2;
        var _closure2_slot0 = var2;
        var2 = arg3;
        var _closure2_slot1 = var2;
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var3 = 33;
        var7 = var6[var3];
        var3 = undefined;
        var8 = var5.bind(var3)(var7);
        var7 = var8.useThemeContext;
        var7 = var7.bind(var8)();
        var7 = var7.theme;
        var _closure2_slot2 = var7;
        var7 = 34;
        var7 = var6[var7];
        var9 = var5.bind(var3)(var7);
        var8 = var9.useStateFromStores;
        var2 = _closure1_slot6;
        var7 = new Array(1);
        var7[0] = var2;
        var2 = function() {
            var1 = _closure1_slot6;
            var1 = var1.locale;
            return var1;
        };
        var2 = var8.bind(var9)(var7, var2);
        var _closure2_slot3 = var2;
        var2 = 35;
        var2 = var6[var2];
        var5 = var5.bind(var3)(var2);
        var3 = var5.usePlatformAllowed;
        var2 = {};
        var6 = true;
        var2['forUserProfile'] = var6;
        var2 = var3.bind(var5)(var2);
        var _closure2_slot4 = var2;
        var3 = var4.filter;
        var2 = function(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 14;
                var1 = var3[var1];
                var4 = undefined;
                var3 = var2.bind(var4)(var1);
                var2 = var3.get;
                var1 = arg1;
                var1 = var1.type;
                var3 = var2.bind(var3)(var1);
                var1 = null;
                var1 = var1 != var3;
                if(!var1) { _fun0006_ip = 64; continue _fun0006 }
 52:
                var2 = _closure2_slot4;
                var1 = var2.bind(var4)(var3);
 64:
                return var1;
            }
        };
        var3 = var3.bind(var4)(var2);
        var2 = var3.map;
        var1 = function(arg1, arg2) {
            var5 = _closure1_slot14;
            var2 = _closure1_slot3;
            var4 = var2.Fragment;
            var3 = {};
            var7 = _closure1_slot14;
            var6 = _closure1_slot18;
            var1 = {};
            var2 = arg1;
            var1['account'] = var2;
            var8 = _closure2_slot2;
            var1['theme'] = var8;
            var8 = _closure2_slot3;
            var1['locale'] = var8;
            var8 = _closure2_slot0;
            var1['userId'] = var8;
            var2 = _closure2_slot1;
            var1['style'] = var2;
            var2 = undefined;
            var1 = var7.bind(var2)(var6, var1);
            var3['children'] = var1;
            var1 = arg2;
            var1 = var5.bind(var2)(var4, var3, var1);
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot23 = var2;
    var1 = global;
    var12 = var1.Object;
    var11 = var12.defineProperty;
    var8 = {};
    var1 = true;
    var8['value'] = var1;
    var1 = '__esModule';
    var1 = var11.bind(var12)(var3, var1, var8);
    var1 = 0;
    var11 = var10[var1];
    var8 = native4;
    var1 = undefined;
    var11 = var8.bind(var1)(var11);
    var _closure1_slot3 = var11;
    var8 = 1;
    var8 = var10[var8];
    var8 = var9.bind(var1)(var8);
    var12 = var8.Pressable;
    var _closure1_slot4 = var12;
    var8 = var8.View;
    var _closure1_slot5 = var8;
    var18 = 2;
    var8 = var10[var18];
    var8 = var17.bind(var1)(var8);
    var _closure1_slot6 = var8;
    var8 = 3;
    var8 = var10[var8];
    var8 = var17.bind(var1)(var8);
    var _closure1_slot7 = var8;
    var15 = 4;
    var8 = var10[var15];
    var8 = var17.bind(var1)(var8);
    var _closure1_slot8 = var8;
    var8 = 5;
    var8 = var10[var8];
    var8 = var17.bind(var1)(var8);
    var _closure1_slot9 = var8;
    var8 = 6;
    var8 = var10[var8];
    var8 = var9.bind(var1)(var8);
    var12 = var8.AnalyticEvents;
    var _closure1_slot10 = var12;
    var12 = var8.PlatformTypes;
    var _closure1_slot11 = var12;
    var8 = var8.ThemeTypes;
    var _closure1_slot12 = var8;
    var8 = 7;
    var8 = var10[var8];
    var8 = var9.bind(var1)(var8);
    var8 = var8.MetadataFields;
    var _closure1_slot13 = var8;
    var8 = 8;
    var8 = var10[var8];
    var8 = var9.bind(var1)(var8);
    var16 = var8.FORM_ROW_VERTICAL_PADDING;
    var8 = 9;
    var8 = var10[var8];
    var8 = var9.bind(var1)(var8);
    var12 = var8.jsx;
    var _closure1_slot14 = var12;
    var12 = var8.jsxs;
    var _closure1_slot15 = var12;
    var8 = var8.Fragment;
    var _closure1_slot16 = var8;
    var19 = 10;
    var8 = var10[var19];
    var13 = var9.bind(var1)(var8);
    var12 = var13.createStyles;
    var8 = {};
    var14 = {};
    var14['paddingHorizontal'] = var19;
    var16 = var16 / var18;
    var14['paddingVertical'] = var16;
    var8['connectedAccountContainer'] = var14;
    var14 = {'flexDirection': 'row', 'alignItems': 'center'};
    var8['connectedAccount'] = var14;
    var14 = {'flex': 1, 'marginLeft': 8};
    var8['connectedAccountNameContainer'] = var14;
    var14 = {'flexDirection': 'row', 'alignItems': 'center'};
    var8['connectedAccountName'] = var14;
    var14 = {};
    var16 = 11;
    var18 = var10[var16];
    var18 = var17.bind(var1)(var18);
    var18 = var18.colors;
    var18 = var18.INTERACTIVE_ACTIVE;
    var14['color'] = var18;
    var8['connectedAccountNameText'] = var14;
    var14 = {};
    var18 = var10[var16];
    var18 = var17.bind(var1)(var18);
    var18 = var18.colors;
    var18 = var18.HEADER_SECONDARY;
    var14['color'] = var18;
    var8['connectedAccountNameCreatedAtText'] = var14;
    var14 = {'height': 24, 'width': 24};
    var19 = {};
    var18 = '135deg';
    var19['rotate'] = var18;
    var18 = new Array(1);
    var18[0] = var19;
    var14['transform'] = var18;
    var18 = var10[var16];
    var18 = var17.bind(var1)(var18);
    var18 = var18.colors;
    var18 = var18.INTERACTIVE_ACTIVE;
    var14['tintColor'] = var18;
    var8['connectedAccountOpenLink'] = var14;
    var14 = {'alignSelf': 'flex-start', 'margin': 4, 'height': 16, 'width': 16};
    var18 = var10[var16];
    var18 = var17.bind(var1)(var18);
    var18 = var18.colors;
    var18 = var18.INTERACTIVE_NORMAL;
    var14['tintColor'] = var18;
    var8['connectedAccountOpenHide'] = var14;
    var14 = {'flex': 1, 'flexDirection': 'row', 'alignItems': 'center'};
    var8['discordMemberCreatedAt'] = var14;
    var14 = {'width': 32, 'height': 32, 'backgroundColor': null, 'borderRadius': null, 'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'center'};
    var18 = var10[var16];
    var18 = var17.bind(var1)(var18);
    var18 = var18.colors;
    var18 = var18.BACKGROUND_MODIFIER_HOVER;
    var14['backgroundColor'] = var18;
    var18 = var10[var16];
    var18 = var17.bind(var1)(var18);
    var18 = var18.radii;
    var18 = var18.lg;
    var14['borderRadius'] = var18;
    var8['discordMemberCreatedAtIcon'] = var14;
    var14 = {};
    var18 = var10[var16];
    var18 = var17.bind(var1)(var18);
    var18 = var18.colors;
    var18 = var18.HEADER_SECONDARY;
    var14['color'] = var18;
    var8['discordMemberCreatedAtLabel'] = var14;
    var14 = {'fontSize': 12, 'fontWeight': '500'};
    var18 = var10[var16];
    var18 = var17.bind(var1)(var18);
    var18 = var18.colors;
    var18 = var18.HEADER_PRIMARY;
    var14['color'] = var18;
    var8['discordMemberCreatedAtValue'] = var14;
    var14 = {'marginLeft': 4, 'height': 16, 'width': 16};
    var8['verifiedCheckContainer'] = var14;
    var14 = {'position': 'absolute', 'left': 0, 'top': 0};
    var8['verifiedCheck'] = var14;
    var14 = {'flexDirection': 'row', 'flexWrap': 'wrap', 'alignItems': 'center', 'overflow': 'hidden'};
    var8['connectedAccountChildren'] = var14;
    var14 = {};
    var18 = var10[var16];
    var18 = var17.bind(var1)(var18);
    var18 = var18.colors;
    var18 = var18.INTERACTIVE_ACTIVE;
    var14['color'] = var18;
    var8['metadataItem'] = var14;
    var14 = {};
    var18 = 40;
    var14['marginLeft'] = var18;
    var8['formDivider'] = var14;
    var14 = {'flex': 1, 'flexDirection': 'row', 'alignItems': 'center', 'marginTop': 4};
    var8['appConnectionNameContainer'] = var14;
    var14 = {'flexDirection': 'row', 'alignItems': 'center', 'backgroundColor': null, 'borderRadius': null, 'borderWidth': 1, 'borderColor': null, 'paddingHorizontal': 8, 'paddingVertical': 4, 'marginTop': 12};
    var18 = var10[var16];
    var18 = var17.bind(var1)(var18);
    var18 = var18.colors;
    var18 = var18.BACKGROUND_TERTIARY;
    var14['backgroundColor'] = var18;
    var18 = var10[var16];
    var18 = var17.bind(var1)(var18);
    var18 = var18.radii;
    var18 = var18.sm;
    var14['borderRadius'] = var18;
    var16 = var10[var16];
    var16 = var17.bind(var1)(var16);
    var16 = var16.colors;
    var16 = var16.BACKGROUND_MODIFIER_ACCENT;
    var14['borderColor'] = var16;
    var8['connectedAccountPoweredByContainer'] = var14;
    var14 = {};
    var14['marginRight'] = var15;
    var8['connectedAccountPoweredByAvatar'] = var14;
    var14 = {'marginTop': 4294967292, 'alignItems': 'center', 'flexDirection': 'row'};
    var8['connectedAccountPoweredByText'] = var14;
    var8 = var12.bind(var13)(var8);
    var _closure1_slot17 = var8;
    var8 = var11.memo;
    var8 = var8.bind(var11)(var6);
    var _closure1_slot18 = var8;
    var8 = var11.memo;
    var8 = var8.bind(var11)(var5);
    var _closure1_slot19 = var8;
    var8 = new Array(0);
    var _closure1_slot20 = var8;
    var8 = new Array(0);
    var _closure1_slot21 = var8;
    var8 = 37;
    var8 = var10[var8];
    var10 = var9.bind(var1)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'modules/user_profile/native/LegacyUserProfileConnections.tsx';
    var8 = var9.bind(var10)(var8);
    var7 = function LegacyUserProfileConnections(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var1 = arg1;
            var1 = var1.user;
            var _closure2_slot0 = var1;
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 34;
            var4 = var7[var3];
            var5 = undefined;
            var10 = var6.bind(var5)(var4);
            var9 = var10.useStateFromStores;
            var4 = _closure1_slot9;
            var8 = new Array(1);
            var8[0] = var4;
            var4 = function() {
                var3 = _closure1_slot9;
                var2 = var3.getUserProfile;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var4 = var9.bind(var10)(var8, var4);
            var _closure2_slot1 = var4;
            var3 = var7[var3];
            var8 = var6.bind(var5)(var3);
            var7 = var8.useStateFromStores;
            var3 = _closure1_slot8;
            var6 = new Array(1);
            var6[0] = var3;
            var3 = function() {
                var1 = _closure1_slot8;
                var1 = var1.hidePersonalInformation;
                return var1;
            };
            var3 = var7.bind(var8)(var6, var3);
            var10 = _closure1_slot3;
            var9 = var10.useMemo;
            var6 = null;
            var8 = var6 == var4;
            var7 = undefined;
            if(var8) { _fun0007_ip = 138; continue _fun0007 }
 132:
            var7 = var4.applicationRoleConnections;
 138:
            var8 = new Array(1);
            var8[0] = var7;
            var7 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var1 = _closure2_slot1;
                    var2 = null;
                    var4 = var2 == var1;
                    var1 = undefined;
                    if(var4) { _fun0008_ip = 28; continue _fun0008 }
 18:
                    var3 = _closure2_slot1;
                    var1 = var3.applicationRoleConnections;
 28:
                    if(!(var2 == var1)) { _fun0008_ip = 39; continue _fun0008 }
 32:
                    var1 = _closure1_slot21;
 39:
                    return var1;
                }
            };
            var7 = var9.bind(var10)(var7, var8);
            var9 = _closure1_slot3;
            var8 = var9.useMemo;
            var12 = var6 == var4;
            var10 = undefined;
            if(var12) { _fun0007_ip = 183; continue _fun0007 }
 177:
            var10 = var4.connectedAccounts;
 183:
            var4 = new Array(1);
            var4[0] = var10;
            var2 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var1 = _closure2_slot1;
                    var2 = null;
                    var4 = var2 == var1;
                    var1 = undefined;
                    if(var4) { _fun0009_ip = 28; continue _fun0009 }
 18:
                    var3 = _closure2_slot1;
                    var1 = var3.connectedAccounts;
 28:
                    if(!(var2 == var1)) { _fun0009_ip = 39; continue _fun0009 }
 32:
                    var1 = _closure1_slot20;
 39:
                    return var1;
                }
            };
            var2 = var8.bind(var9)(var2, var4);
            var4 = _closure1_slot22;
            var12 = var4.bind(var5)(var7);
            var4 = _closure1_slot23;
            var1 = var1.id;
            var10 = var4.bind(var5)(var2, var1);
            var1 = null;
            if(var3) { _fun0007_ip = 499; continue _fun0007 }
 236:
            var2 = var2.length;
            var8 = 0;
            var1 = null;
            if(!(var8 !== var2)) { _fun0007_ip = 499; continue _fun0007 }
 252:
            var4 = _closure1_slot15;
            var3 = _closure1_slot16;
            var2 = {};
            var7 = var6 != var12;
            if(!var7) { _fun0007_ip = 278; continue _fun0007 }
 269:
            var6 = var12.length;
            var7 = var6 > var8;
 278:
            if(!var7) { _fun0007_ip = 379; continue _fun0007 }
 281:
            var9 = _closure1_slot14;
            var8 = _closure1_slot1;
            var17 = _closure1_slot2;
            var6 = 36;
            var6 = var17[var6];
            var8 = var8.bind(var5)(var6);
            var6 = {};
            var16 = _closure1_slot0;
            var13 = 26;
            var14 = var17[var13];
            var14 = var16.bind(var5)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var13 = var17[var13];
            var13 = var16.bind(var5)(var13);
            var13 = var13.t;
            var13 = var13.PHjkRE;
            var13 = var14.bind(var15)(var13);
            var6['title'] = var13;
            var13 = true;
            var6['showContainer'] = var13;
            var6['children'] = var12;
            var7 = var9.bind(var5)(var8, var6);
 379:
            var6 = new Array(2);
            var6[0] = var7;
            var9 = _closure1_slot14;
            var8 = _closure1_slot1;
            var15 = _closure1_slot2;
            var7 = 36;
            var7 = var15[var7];
            var8 = var8.bind(var5)(var7);
            var7 = {};
            var14 = _closure1_slot0;
            var11 = 26;
            var12 = var15[var11];
            var12 = var14.bind(var5)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var11 = var15[var11];
            var11 = var14.bind(var5)(var11);
            var11 = var11.t;
            var11 = var11.3fe7U1;
            var11 = var12.bind(var13)(var11);
            var7['title'] = var11;
            var11 = true;
            var7['showContainer'] = var11;
            var7['children'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 499:
            return var1;
        }
    };
    var3['default'] = var7;
    var3['ConnectedUserAccount'] = var6;
    var3['ConnectedApplicationUserRoleAccount'] = var5;
    var3['useAppplicationRoleConnectionItems'] = var4;
    var3['useConnectedAccountItems'] = var2;
    return var1;
})();