// app/modules/user_profile/native/EditProfileFrameActionSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var7;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var2);
    var1 = 0;
    var2 = var7[var1];
    var1 = undefined;
    var2 = var11.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var10 = 1;
    var5 = var7[var10];
    var2 = metroImportAll;
    var2 = var2.bind(var1)(var5);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var5 = var2.View;
    var _closure1_slot5 = var5;
    var5 = var2.ActivityIndicator;
    var _closure1_slot6 = var5;
    var12 = var2.StyleSheet;
    var2 = 3;
    var2 = var7[var2];
    var2 = var11.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 4;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.isProfileFrameRecord;
    var _closure1_slot8 = var2;
    var2 = 5;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.AnalyticEvents;
    var _closure1_slot9 = var2;
    var2 = 6;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var5 = var2.jsx;
    var _closure1_slot10 = var5;
    var2 = var2.jsxs;
    var _closure1_slot11 = var2;
    var2 = 7;
    var2 = var7[var2];
    var8 = var6.bind(var1)(var2);
    var5 = var8.createStyles;
    var2 = {};
    var9 = {};
    var9['flex'] = var10;
    var10 = 8;
    var13 = var7[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOW;
    var9['backgroundColor'] = var13;
    var2['container'] = var9;
    var9 = {'flexDirection': 'column', 'alignItems': 'center', 'paddingBottom': 88, 'flex': 1};
    var2['contentContainer'] = var9;
    var9 = {'position': 'absolute', 'top': 4294967046, 'height': 250, 'right': 0, 'left': 0};
    var2['bounceOffset'] = var9;
    var9 = {};
    var13 = var7[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.MOBILE_TEXT_HEADING_PRIMARY;
    var9['color'] = var13;
    var13 = 25;
    var9['margin'] = var13;
    var2['title'] = var9;
    var9 = {'width': '92%', 'marginTop': 24, 'flex': 1};
    var2['profileFramesList'] = var9;
    var9 = {'overflow': 'hidden', 'height': 300};
    var2['previewContainer'] = var9;
    var9 = {};
    var15 = var12.absoluteFillObject;
    var16 = var9;
    var12 = copyDataProperties(var16, var15);
    var13 = -1;
    var12 = 'bottom';
    var9[11] = var13;
    var10 = var7[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var11 = var10.BACKGROUND_BASE_LOW;
    var10 = 'color';
    var9[9] = var11;
    var2['previewGradient'] = var9;
    var2 = var5.bind(var8)(var2);
    var _closure1_slot12 = var2;
    var2 = function EditProfileFrameInner(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var15 = var2.user;
            var _closure2_slot0 = var15;
            var8 = var2.selectedProfileFrame;
            var _closure2_slot1 = var8;
            var1 = var2.setSelectedProfileFrame;
            var _closure2_slot2 = var1;
            var1 = var2.isFetching;
            var16 = var2.guildId;
            var _closure2_slot3 = var16;
            var7 = var2.showTitle;
            var5 = undefined;
            if(!(var7 === var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var7 = true;
case 2:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 20;
            var2 = var4[var2];
            var9 = var3.bind(var5)(var2);
            var2 = var9.useGetOrFetchCollectiblesCategoriesAndPurchases;
            var2 = var2.bind(var9)();
            var9 = _closure1_slot1;
            var2 = 21;
            var2 = var4[var2];
            var2 = var9.bind(var5)(var2);
            var12 = var2.bind(var5)();
            var2 = _closure1_slot12;
            var11 = var2.bind(var5)();
            var2 = 10;
            var2 = var4[var2];
            var9 = var9.bind(var5)(var2);
            var2 = var15.id;
            var9 = var9.bind(var5)(var2, var16);
            var2 = 22;
            var2 = var4[var2];
            var4 = var3.bind(var5)(var2);
            var3 = var4.getProfilePreviewValue;
            var2 = {};
            var2['pendingValue'] = var8;
            var13 = null;
            var14 = var13 == var9;
            var8 = undefined;
            if(var14) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var14 = var9._userProfile;
            var17 = var13 == var14;
            var8 = undefined;
            if(var17) { _fun0001_ip = 4; continue _fun0001 }
case 6:
            var8 = var14.profileFrame;
case 4:
            var2['userValue'] = var8;
            var14 = var13 == var9;
            var8 = undefined;
            if(var14) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var9 = var9._guildMemberProfile;
            var14 = var13 == var9;
            var8 = undefined;
            if(var14) { _fun0001_ip = 7; continue _fun0001 }
case 9:
            var8 = var9.profileFrame;
case 7:
            var2['guildValue'] = var8;
            var2['guildId'] = var16;
            var14 = var3.bind(var4)(var2);
            var8 = _closure1_slot4;
            var4 = var8.useEffect;
            var3 = new Array(1);
            var3[0] = var15;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot0;
                    var7 = null;
                    var2 = var7 == var2;
                    if(var2) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var4 = _closure2_slot0;
                    var3 = var4.isNonUserBot;
                    var2 = var3.bind(var4)();
case 10:
                    if(var2) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 23;
                    var2 = var4[var2];
                    var5 = undefined;
                    var4 = var3.bind(var5)(var2);
                    var6 = _closure2_slot0;
                    var3 = var6.id;
                    var2 = var6.getAvatarURL;
                    var1 = 80;
                    var2 = var2.bind(var6)(var7, var1);
                    var1 = {'withMutualGuilds': true, 'dispatchWait': true};
                    var1 = var4.bind(var5)(var3, var2, var1);
case 12:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var4.bind(var8)(var2, var3);
            if(var1) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var3 = _closure1_slot11;
            var2 = _closure1_slot5;
            var1 = {};
            var4 = var11.contentContainer;
            var1['style'] = var4;
            if(!var7) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var9 = _closure1_slot10;
            var20 = _closure1_slot0;
            var21 = _closure1_slot2;
            var4 = 24;
            var4 = var21[var4];
            var4 = var20.bind(var5)(var4);
            var8 = var4.Heading;
            var4 = {};
            var17 = 'redesign/heading-18/bold';
            var4['variant'] = var17;
            var17 = var11.title;
            var4['style'] = var17;
            var17 = 25;
            var18 = var21[var17];
            var18 = var20.bind(var5)(var18);
            var19 = var18.intl;
            var18 = var19.string;
            var17 = var21[var17];
            var17 = var20.bind(var5)(var17);
            var17 = var17.t;
            var17 = var17.oTSa/q;
            var17 = var18.bind(var19)(var17);
            var4['children'] = var17;
            var7 = var9.bind(var5)(var8, var4);
case 16:
            var4 = new Array(4);
            var4[0] = var7;
            var9 = _closure1_slot10;
            var8 = _closure1_slot14;
            var7 = {};
            var18 = var13 == var14;
            var17 = undefined;
            if(var18) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var17 = var14.skuId;
case 18:
            var7['previewSkuId'] = var17;
            var7['user'] = var15;
            var7['guildId'] = var16;
            var7 = var9.bind(var5)(var8, var7);
            var4[1] = var7;
            var9 = _closure1_slot10;
            var8 = _closure1_slot1;
            var16 = _closure1_slot2;
            var7 = 26;
            var7 = var16[var7];
            var8 = var8.bind(var5)(var7);
            var7 = {};
            var7['user'] = var15;
            var15 = var13 == var14;
            var13 = undefined;
            if(var15) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var13 = var14.skuId;
case 20:
            var7['previewSkuId'] = var13;
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var13 = 25;
            var14 = var17[var13];
            var14 = var16.bind(var5)(var14);
            var18 = var14.intl;
            var15 = var18.string;
            var14 = var17[var13];
            var14 = var16.bind(var5)(var14);
            var14 = var14.t;
            var14 = var14.JvNv+a;
            var14 = var15.bind(var18)(var14);
            var7['nitroJoinCTA'] = var14;
            var14 = var17[var13];
            var14 = var16.bind(var5)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var13 = var17[var13];
            var13 = var16.bind(var5)(var13);
            var13 = var13.t;
            var13 = var13.hR2psy;
            var13 = var14.bind(var15)(var13);
            var7['nitroUpgradeCTA'] = var13;
            var7 = var9.bind(var5)(var8, var7);
            var4[2] = var7;
            var9 = _closure1_slot10;
            var8 = _closure1_slot5;
            var7 = {};
            var11 = var11.profileFramesList;
            var7['style'] = var11;
            var11 = var12.map;
            var10 = function(arg1, arg2) {
                var5 = _closure1_slot10;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 27;
                var1 = var3[var1];
                var4 = undefined;
                var3 = var2.bind(var4)(var1);
                var2 = {};
                var6 = _closure2_slot1;
                var2['selectedProfileFrame'] = var6;
                var6 = _closure2_slot2;
                var2['setSelectedProfileFrame'] = var6;
                var6 = arg1;
                var2['section'] = var6;
                var1 = _closure2_slot3;
                var2['guildId'] = var1;
                var1 = arg2;
                var1 = var5.bind(var4)(var3, var2, var1);
                return var1;
            };
            var10 = var11.bind(var12)(var10);
            var7['children'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var4[3] = var7;
            var1['children'] = var4;
            var1 = var3.bind(var5)(var2, var1);
            _fun0001_ip = 22; continue _fun0001;
case 14:
            var4 = _closure1_slot10;
            var3 = _closure1_slot5;
            var2 = {};
            var7 = {};
            var8 = 250;
            var7['top'] = var8;
            var2['style'] = var7;
            var7 = _closure1_slot6;
            var6 = {'animating': true, 'size': 'large'};
            var6 = var4.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 22:
            return var1;
        }
    };
    var _closure1_slot13 = var2;
    var5 = function ProfileFrameSectionPreview(arg1) {
        var2 = arg1;
        var3 = var2.previewSkuId;
        var13 = var2.user;
        var12 = var2.guildId;
        var2 = _closure1_slot12;
        var4 = undefined;
        var10 = var2.bind(var4)();
        var7 = _closure1_slot1;
        var9 = _closure1_slot2;
        var2 = 28;
        var2 = var9[var2];
        var2 = var7.bind(var4)(var2);
        var2 = var2.bind(var4)(var3);
        var8 = var2.product;
        var _closure2_slot0 = var8;
        var11 = var2.purchase;
        var _closure2_slot1 = var11;
        var6 = _closure1_slot4;
        var3 = var6.useMemo;
        var2 = new Array(2);
        var2[0] = var11;
        var2[1] = var8;
        var1 = function() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var2 = _closure2_slot0;
                var1 = null;
                var3 = var1 == var2;
                var4 = undefined;
                var2 = undefined;
                if(var3) { _fun0003_ip = 23; continue _fun0003 }
case 24:
                var3 = _closure2_slot0;
                var6 = var3.items;
                var3 = 0;
                var2 = var6[var3];
case 23:
                if(!(var1 == var2)) { _fun0003_ip = 25; continue _fun0003 }
case 26:
                var3 = _closure2_slot1;
                var6 = var1 == var3;
                var3 = undefined;
                if(var6) { _fun0003_ip = 27; continue _fun0003 }
case 28:
                var5 = _closure2_slot1;
                var6 = var5.items;
                var5 = 0;
                var3 = var6[var5];
case 27:
                var2 = var3;
case 25:
                var3 = _closure1_slot8;
                var3 = var3.bind(var4)(var2);
                var1 = null;
                if(!var3) { _fun0003_ip = 29; continue _fun0003 }
case 30:
                var1 = var2;
case 29:
                return var1;
            }
        };
        var11 = var3.bind(var6)(var1, var2);
        var3 = _closure1_slot11;
        var2 = _closure1_slot5;
        var1 = {};
        var6 = var10.previewContainer;
        var1['style'] = var6;
        var8 = _closure1_slot10;
        var5 = 29;
        var5 = var9[var5];
        var6 = var7.bind(var4)(var5);
        var5 = {};
        var5['user'] = var13;
        var5['guildId'] = var12;
        var5['profileFrame'] = var11;
        var11 = 280;
        var5['maxWidth'] = var11;
        var6 = var8.bind(var4)(var6, var5);
        var5 = new Array(2);
        var5[0] = var6;
        var6 = 30;
        var6 = var9[var6];
        var7 = var7.bind(var4)(var6);
        var6 = {};
        var9 = var10.previewGradient;
        var6['style'] = var9;
        var9 = {'x': 0, 'y': 0.6};
        var6['start'] = var9;
        var9 = {'x': 0, 'y': 1};
        var6['end'] = var9;
        var9 = var10.previewGradient;
        var13 = var9.color;
        var9 = global;
        var9 = var9.HermesInternal;
        var12 = var9.concat;
        var11 = '';
        var9 = '00';
        var11 = var12.bind(var11)(var13, var9);
        var9 = new Array(2);
        var9[0] = var11;
        var10 = var10.previewGradient;
        var10 = var10.color;
        var9[1] = var10;
        var6['colors'] = var9;
        var6 = var8.bind(var4)(var7, var6);
        var5[1] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot14 = var5;
    var5 = 31;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/user_profile/native/EditProfileFrameActionSheet.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function EditProfileFrameActionSheet(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var18 = var1.user;
            var19 = var1.currentProfileFrame;
            var24 = var1.guildId;
            var _closure2_slot0 = var24;
            var4 = undefined;
            var _closure2_slot1 = var4;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var1 = _closure1_slot12;
            var23 = var1.bind(var4)();
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 9;
            var1 = var6[var1];
            var7 = var3.bind(var4)(var1);
            var5 = var7.useStateFromStoresArray;
            var1 = _closure1_slot7;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var1 = _closure1_slot7;
                var2 = var1.isFetching;
                var1 = new Array(1);
                var1[0] = var2;
                return var1;
            };
            var3 = var5.bind(var7)(var3, var1);
            var1 = _closure1_slot3;
            var5 = 1;
            var1 = var1.bind(var4)(var3, var5);
            var7 = 0;
            var25 = var1[var7];
            var3 = _closure1_slot1;
            var1 = 10;
            var1 = var6[var1];
            var3 = var3.bind(var4)(var1);
            var6 = var18.id;
            var16 = null;
            var8 = var16 != var6;
            var1 = '';
            if(!var8) { _fun0004_ip = 31; continue _fun0004 }
case 32:
            var1 = var6;
case 31:
            var3 = var3.bind(var4)(var1);
            _closure2_slot1 = var3;
            var6 = _closure1_slot4;
            var1 = var6.useState;
            var10 = var1.bind(var6)(var19);
            var8 = _closure1_slot3;
            var1 = 2;
            var1 = var8.bind(var4)(var10, var1);
            var17 = var1[var7];
            _closure2_slot2 = var17;
            var26 = var1[var5];
            var10 = _closure1_slot0;
            var20 = _closure1_slot2;
            var1 = 11;
            var1 = var20[var1];
            var5 = var10.bind(var4)(var1);
            var1 = var5.useBottomSheetRef;
            var1 = var1.bind(var5)();
            var21 = var1.bottomSheetRef;
            var12 = var1.bottomSheetClose;
            var11 = _closure1_slot1;
            var1 = 12;
            var5 = var20[var1];
            var7 = var11.bind(var4)(var5);
            var14 = 13;
            var5 = var20[var14];
            var5 = var11.bind(var4)(var5);
            var5 = var5.EDIT_PROFILE_FRAME_SHEET;
            var5 = var7.bind(var4)(var5);
            var13 = var5.analyticsLocations;
            var7 = var6.useMemo;
            var5 = new Array(2);
            var5[0] = var24;
            var5[1] = var3;
            var3 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = {};
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 13;
                    var2 = var3[var2];
                    var3 = undefined;
                    var2 = var4.bind(var3)(var2);
                    var2 = var2.EDIT_PROFILE_FRAME_SHEET;
                    var1['type'] = var2;
                    var2 = _closure2_slot0;
                    var1['guild_id'] = var2;
                    var2 = _closure2_slot1;
                    var6 = null;
                    var2 = var6 != var2;
                    if(!var2) { _fun0005_ip = 33; continue _fun0005 }
case 3:
                    var5 = _closure2_slot1;
                    var5 = var6 == var5;
                    var3 = undefined;
                    if(var5) { _fun0005_ip = 34; continue _fun0005 }
case 35:
                    var5 = _closure2_slot1;
                    var4 = var5.hasPremiumCustomization;
                    var3 = var4.bind(var5)();
case 34:
                    var2 = var3;
case 33:
                    var1['profile_has_nitro_customization'] = var2;
                    return var1;
                }
            };
            var3 = var7.bind(var6)(var3, var5);
            _closure2_slot3 = var3;
            var7 = var6.useCallback;
            var5 = new Array(1);
            var5[0] = var3;
            var3 = function() {
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 14;
                var3 = var3[var1];
                var1 = undefined;
                var5 = var4.bind(var1)(var3);
                var4 = var5.track;
                var2 = _closure1_slot9;
                var3 = var2.OPEN_POPOUT;
                var2 = {};
                var8 = _closure2_slot3;
                var9 = var2;
                var6 = copyDataProperties(var9, var8);
                var7 = true;
                var6 = 'is_fullscreen';
                var2[5] = var7;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var8 = var7.bind(var6)(var3, var5);
            var5 = var6.useCallback;
            var3 = new Array(2);
            var3[0] = var17;
            var3[1] = var24;
            var2 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 15;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.setPendingChanges;
                    var2 = {};
                    var5 = _closure2_slot0;
                    var2['guildId'] = var5;
                    var7 = _closure2_slot2;
                    var5 = null;
                    var7 = var5 != var7;
                    if(!var7) { _fun0006_ip = 3; continue _fun0006 }
case 36:
                    var5 = _closure2_slot2;
case 3:
                    var2['profileFrame'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var15 = var5.bind(var6)(var2, var3);
            var3 = _closure1_slot10;
            var1 = var20[var1];
            var1 = var10.bind(var4)(var1);
            var2 = var1.AnalyticsLocationProvider;
            var1 = {};
            var1['value'] = var13;
            var7 = _closure1_slot11;
            var5 = 16;
            var5 = var20[var5];
            var5 = var10.bind(var4)(var5);
            var6 = var5.BottomSheet;
            var5 = {'handleDisabled': true, 'scrollable': true, 'ref': null, 'onExpand': null, 'startExpanded': true};
            var5['ref'] = var21;
            var5['onExpand'] = var8;
            var8 = 17;
            var8 = var20[var8];
            var8 = var10.bind(var4)(var8);
            var10 = var8.BottomSheetScrollView;
            var8 = {};
            var21 = false;
            var8['scrollsToTop'] = var21;
            var21 = var23.container;
            var8['style'] = var21;
            var22 = _closure1_slot5;
            var21 = {};
            var23 = var23.bounceOffset;
            var21['style'] = var23;
            var22 = var3.bind(var4)(var22, var21);
            var21 = new Array(2);
            var21[0] = var22;
            var23 = _closure1_slot13;
            var22 = {};
            var22['user'] = var18;
            var22['selectedProfileFrame'] = var17;
            var22['setSelectedProfileFrame'] = var26;
            var22['isFetching'] = var25;
            var22['guildId'] = var24;
            var22 = var3.bind(var4)(var23, var22);
            var21[1] = var22;
            var8['children'] = var21;
            var10 = var7.bind(var4)(var10, var8);
            var8 = new Array(3);
            var8[0] = var10;
            var10 = 18;
            var10 = var20[var10];
            var11 = var11.bind(var4)(var10);
            var10 = {};
            var10['user'] = var18;
            var20 = var16 == var19;
            var18 = undefined;
            if(var20) { _fun0004_ip = 37; continue _fun0004 }
case 38:
            var18 = var19.skuId;
case 37:
            var10['currentSkuId'] = var18;
            var18 = var16 == var17;
            var16 = undefined;
            if(var18) { _fun0004_ip = 39; continue _fun0004 }
case 40:
            var16 = var17.skuId;
case 39:
            var10['selectedSkuId'] = var16;
            var10['onApply'] = var15;
            var10['analyticsLocations'] = var13;
            var15 = _closure1_slot1;
            var13 = _closure1_slot2;
            var14 = var13[var14];
            var14 = var15.bind(var4)(var14);
            var14 = var14.EDIT_PROFILE_FRAME_SHEET;
            var10['analyticsSource'] = var14;
            var10 = var3.bind(var4)(var11, var10);
            var8[1] = var10;
            var11 = _closure1_slot10;
            var10 = _closure1_slot0;
            var9 = 19;
            var9 = var13[var9];
            var9 = var10.bind(var4)(var9);
            var10 = var9.ActionSheetHeaderBar;
            var9 = {};
            var13 = 'floating';
            var9['variant'] = var13;
            var9['onPress'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var8[2] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var4;
    var3['EditProfileFrameInner'] = var2;
    return var1;
})();