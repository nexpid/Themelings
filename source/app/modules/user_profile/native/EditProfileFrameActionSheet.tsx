// app/modules/user_profile/native/EditProfileFrameActionSheet.tsx
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var11.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var10 = 1;
    var7 = var6[var10];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.View;
    var _closure1_slot5 = var7;
    var12 = var4.StyleSheet;
    var4 = 3;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.isProfileFrameRecord;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot9 = var7;
    var7 = var4.jsxs;
    var _closure1_slot10 = var7;
    var4 = var4.Fragment;
    var _closure1_slot11 = var4;
    var4 = 7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var9['flex'] = var10;
    var10 = 8;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOW;
    var9['backgroundColor'] = var13;
    var4['container'] = var9;
    var9 = {'position': 'absolute', 'top': 4294967046, 'height': 250, 'right': 0, 'left': 0};
    var4['bounceOffset'] = var9;
    var9 = {'alignSelf': 'center', 'color': null, 'margin': 25};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.MOBILE_TEXT_HEADING_PRIMARY;
    var9['color'] = var13;
    var4['title'] = var9;
    var9 = {'overflow': 'hidden', 'height': 300, 'alignItems': 'center'};
    var4['previewContainer'] = var9;
    var9 = {};
    var15 = var12.absoluteFillObject;
    var16 = var9;
    var12 = copyDataProperties(var16, var15);
    var13 = -1;
    var12 = 'bottom';
    var9[11] = var13;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var11 = var10.BACKGROUND_BASE_LOW;
    var10 = 'color';
    var9[9] = var11;
    var4['previewGradient'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot12 = var4;
    var4 = function EditProfileFrameInner(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var7 = var2.user;
            var _closure2_slot0 = var7;
            var13 = var2.selectedProfileFrame;
            var6 = var2.setSelectedProfileFrame;
            var _closure2_slot1 = var6;
            var16 = var2.guildId;
            var _closure2_slot2 = var16;
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 19;
            var2 = var5[var2];
            var4 = undefined;
            var8 = var3.bind(var4)(var2);
            var2 = var8.useGetOrFetchCollectiblesCategoriesAndPurchases;
            var2 = var2.bind(var8)();
            var2 = 20;
            var2 = var5[var2];
            var11 = var3.bind(var4)(var2);
            var9 = var11.useStateFromStores;
            var2 = _closure1_slot6;
            var8 = new Array(1);
            var8[0] = var2;
            var2 = function() {
                var1 = _closure1_slot6;
                var1 = var1.isFetching;
                return var1;
            };
            var9 = var9.bind(var11)(var8, var2);
            var8 = _closure1_slot1;
            var2 = 21;
            var2 = var5[var2];
            var2 = var8.bind(var4)(var2);
            var14 = var2.bind(var4)();
            var2 = 9;
            var2 = var5[var2];
            var8 = var8.bind(var4)(var2);
            var2 = var7.id;
            var11 = var8.bind(var4)(var2, var16);
            var2 = 22;
            var2 = var5[var2];
            var5 = var3.bind(var4)(var2);
            var3 = var5.getProfilePreviewValue;
            var2 = {};
            var2['pendingValue'] = var13;
            var12 = null;
            var15 = var12 == var11;
            var8 = undefined;
            if(var15) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var15 = var11._userProfile;
            var17 = var12 == var15;
            var8 = undefined;
            if(var17) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var8 = var15.profileFrame;
case 2:
            var2['userValue'] = var8;
            var15 = var12 == var11;
            var8 = undefined;
            if(var15) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var11 = var11._guildMemberProfile;
            var15 = var12 == var11;
            var8 = undefined;
            if(var15) { _fun0001_ip = 5; continue _fun0001 }
case 7:
            var8 = var11.profileFrame;
case 5:
            var2['guildValue'] = var8;
            var2['guildId'] = var16;
            var15 = var3.bind(var5)(var2);
            var5 = _closure1_slot4;
            var8 = var5.useEffect;
            var3 = new Array(1);
            var3[0] = var7;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot0;
                    var7 = null;
                    var2 = var7 == var2;
                    if(var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var4 = _closure2_slot0;
                    var3 = var4.isNonUserBot;
                    var2 = var3.bind(var4)();
case 8:
                    if(var2) { _fun0002_ip = 10; continue _fun0002 }
case 11:
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
case 10:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var8.bind(var5)(var2, var3);
            var3 = var5.useCallback;
            var2 = new Array(2);
            var2[0] = var6;
            var2[1] = var16;
            var1 = function(arg1) {
                var1 = arg1;
                var7 = var1.items;
                var6 = var1.size;
                var5 = var1.selectedSkuId;
                var4 = _closure1_slot9;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 24;
                var1 = var3[var1];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var2 = var1.EditProfileFrameRow;
                var1 = {};
                var1['items'] = var7;
                var1['size'] = var6;
                var1['selectedSkuId'] = var5;
                var6 = _closure2_slot1;
                var1['setSelectedProfileFrame'] = var6;
                var5 = _closure2_slot2;
                var1['guildId'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var11 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot10;
            var2 = _closure1_slot11;
            var1 = {};
            var8 = _closure1_slot9;
            var6 = _closure1_slot14;
            var5 = {};
            var18 = var12 == var15;
            var17 = undefined;
            if(var18) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var17 = var15.skuId;
case 12:
            var5['previewSkuId'] = var17;
            var5['user'] = var7;
            var5['guildId'] = var16;
            var6 = var8.bind(var4)(var6, var5);
            var5 = new Array(3);
            var5[0] = var6;
            var16 = _closure1_slot9;
            var8 = _closure1_slot1;
            var17 = _closure1_slot2;
            var6 = 25;
            var6 = var17[var6];
            var8 = var8.bind(var4)(var6);
            var6 = {};
            var6['user'] = var7;
            var17 = var12 == var15;
            var7 = undefined;
            if(var17) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var7 = var15.skuId;
case 14:
            var6['previewSkuId'] = var7;
            var7 = _closure1_slot0;
            var15 = _closure1_slot2;
            var17 = 17;
            var18 = var15[var17];
            var18 = var7.bind(var4)(var18);
            var20 = var18.intl;
            var19 = var20.string;
            var18 = var15[var17];
            var18 = var7.bind(var4)(var18);
            var18 = var18.t;
            var18 = var18.JvNv+a;
            var18 = var19.bind(var20)(var18);
            var6['nitroJoinCTA'] = var18;
            var18 = var15[var17];
            var18 = var7.bind(var4)(var18);
            var19 = var18.intl;
            var18 = var19.string;
            var17 = var15[var17];
            var17 = var7.bind(var4)(var17);
            var17 = var17.t;
            var17 = var17.hR2psy;
            var17 = var18.bind(var19)(var17);
            var6['nitroUpgradeCTA'] = var17;
            var6 = var16.bind(var4)(var8, var6);
            var5[1] = var6;
            var8 = _closure1_slot9;
            var6 = 26;
            var6 = var15[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.EditCollectiblesPickerList;
            var6 = {};
            var6['sections'] = var14;
            var14 = var12 == var13;
            var12 = undefined;
            if(var14) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var12 = var13.skuId;
case 16:
            var6['selectedSkuId'] = var12;
            var6['renderRow'] = var11;
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var10 = 27;
            var10 = var12[var10];
            var10 = var11.bind(var4)(var10);
            var10 = var10.COLLECTIBLE_ROW_HEIGHT;
            var6['estimatedItemSize'] = var10;
            var6['isFetching'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot13 = var4;
    var4 = function ProfileFrameSectionPreview(arg1) {
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
                if(var3) { _fun0003_ip = 18; continue _fun0003 }
case 19:
                var3 = _closure2_slot0;
                var6 = var3.items;
                var3 = 0;
                var2 = var6[var3];
case 18:
                if(!(var1 == var2)) { _fun0003_ip = 20; continue _fun0003 }
case 21:
                var3 = _closure2_slot1;
                var6 = var1 == var3;
                var3 = undefined;
                if(var6) { _fun0003_ip = 22; continue _fun0003 }
case 23:
                var5 = _closure2_slot1;
                var6 = var5.items;
                var5 = 0;
                var3 = var6[var5];
case 22:
                var2 = var3;
case 20:
                var3 = _closure1_slot7;
                var3 = var3.bind(var4)(var2);
                var1 = null;
                if(!var3) { _fun0003_ip = 24; continue _fun0003 }
case 25:
                var1 = var2;
case 24:
                return var1;
            }
        };
        var11 = var3.bind(var6)(var1, var2);
        var3 = _closure1_slot10;
        var2 = _closure1_slot5;
        var1 = {};
        var6 = var10.previewContainer;
        var1['style'] = var6;
        var8 = _closure1_slot9;
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
    var _closure1_slot14 = var4;
    var4 = 31;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/native/EditProfileFrameActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function EditProfileFrameActionSheet(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var17 = var1.user;
            var18 = var1.currentProfileFrame;
            var23 = var1.guildId;
            var _closure2_slot0 = var23;
            var4 = undefined;
            var _closure2_slot1 = var4;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var1 = _closure1_slot12;
            var25 = var1.bind(var4)();
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 9;
            var1 = var5[var1];
            var3 = var3.bind(var4)(var1);
            var5 = var17.id;
            var15 = null;
            var6 = var15 != var5;
            var1 = '';
            if(!var6) { _fun0004_ip = 26; continue _fun0004 }
case 27:
            var1 = var5;
case 26:
            var3 = var3.bind(var4)(var1);
            _closure2_slot1 = var3;
            var6 = _closure1_slot4;
            var1 = var6.useState;
            var7 = var1.bind(var6)(var18);
            var5 = _closure1_slot3;
            var1 = 2;
            var5 = var5.bind(var4)(var7, var1);
            var1 = 0;
            var16 = var5[var1];
            _closure2_slot2 = var16;
            var1 = 1;
            var24 = var5[var1];
            var28 = _closure1_slot0;
            var19 = _closure1_slot2;
            var1 = 10;
            var1 = var19[var1];
            var5 = var28.bind(var4)(var1);
            var1 = var5.useBottomSheetRef;
            var1 = var1.bind(var5)();
            var20 = var1.bottomSheetRef;
            var10 = _closure1_slot1;
            var1 = 11;
            var5 = var19[var1];
            var7 = var10.bind(var4)(var5);
            var13 = 12;
            var5 = var19[var13];
            var5 = var10.bind(var4)(var5);
            var5 = var5.EDIT_PROFILE_FRAME_SHEET;
            var5 = var7.bind(var4)(var5);
            var12 = var5.analyticsLocations;
            var7 = var6.useMemo;
            var5 = new Array(2);
            var5[0] = var23;
            var5[1] = var3;
            var3 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = {};
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 12;
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
                    if(!var2) { _fun0005_ip = 26; continue _fun0005 }
case 28:
                    var5 = _closure2_slot1;
                    var5 = var6 == var5;
                    var3 = undefined;
                    if(var5) { _fun0005_ip = 27; continue _fun0005 }
case 29:
                    var5 = _closure2_slot1;
                    var4 = var5.hasPremiumCustomization;
                    var3 = var4.bind(var5)();
case 27:
                    var2 = var3;
case 26:
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
                var1 = 13;
                var3 = var3[var1];
                var1 = undefined;
                var5 = var4.bind(var1)(var3);
                var4 = var5.track;
                var2 = _closure1_slot8;
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
            var9 = var7.bind(var6)(var3, var5);
            var5 = var6.useCallback;
            var3 = new Array(2);
            var3[0] = var16;
            var3[1] = var23;
            var2 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 14;
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
                    if(!var7) { _fun0006_ip = 28; continue _fun0006 }
case 30:
                    var5 = _closure2_slot2;
case 28:
                    var2['profileFrame'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var14 = var5.bind(var6)(var2, var3);
            var3 = _closure1_slot9;
            var1 = var19[var1];
            var1 = var28.bind(var4)(var1);
            var2 = var1.AnalyticsLocationProvider;
            var1 = {};
            var1['value'] = var12;
            var7 = _closure1_slot10;
            var5 = 15;
            var5 = var19[var5];
            var5 = var28.bind(var4)(var5);
            var6 = var5.BottomSheet;
            var5 = {};
            var8 = true;
            var5['scrollable'] = var8;
            var5['ref'] = var20;
            var5['onExpand'] = var9;
            var5['startExpanded'] = var8;
            var9 = _closure1_slot5;
            var8 = {};
            var20 = var25.container;
            var8['style'] = var20;
            var20 = {};
            var21 = var25.bounceOffset;
            var20['style'] = var21;
            var21 = var3.bind(var4)(var9, var20);
            var20 = new Array(3);
            var20[0] = var21;
            var21 = 16;
            var21 = var19[var21];
            var21 = var28.bind(var4)(var21);
            var22 = var21.Heading;
            var21 = {};
            var26 = 'redesign/heading-18/bold';
            var21['variant'] = var26;
            var25 = var25.title;
            var21['style'] = var25;
            var25 = 17;
            var26 = var19[var25];
            var26 = var28.bind(var4)(var26);
            var27 = var26.intl;
            var26 = var27.string;
            var25 = var19[var25];
            var25 = var28.bind(var4)(var25);
            var25 = var25.t;
            var25 = var25.oTSa/q;
            var25 = var26.bind(var27)(var25);
            var21['children'] = var25;
            var21 = var3.bind(var4)(var22, var21);
            var20[1] = var21;
            var22 = _closure1_slot13;
            var21 = {};
            var21['user'] = var17;
            var21['selectedProfileFrame'] = var16;
            var21['setSelectedProfileFrame'] = var24;
            var21['guildId'] = var23;
            var21 = var3.bind(var4)(var22, var21);
            var20[2] = var21;
            var8['children'] = var20;
            var9 = var7.bind(var4)(var9, var8);
            var8 = new Array(2);
            var8[0] = var9;
            var9 = 18;
            var9 = var19[var9];
            var10 = var10.bind(var4)(var9);
            var9 = {};
            var9['user'] = var17;
            var19 = var15 == var18;
            var17 = undefined;
            if(var19) { _fun0004_ip = 31; continue _fun0004 }
case 32:
            var17 = var18.skuId;
case 31:
            var9['currentSkuId'] = var17;
            var17 = var15 == var16;
            var15 = undefined;
            if(var17) { _fun0004_ip = 33; continue _fun0004 }
case 34:
            var15 = var16.skuId;
case 33:
            var9['selectedSkuId'] = var15;
            var9['onApply'] = var14;
            var9['analyticsLocations'] = var12;
            var12 = _closure1_slot1;
            var11 = _closure1_slot2;
            var11 = var11[var13];
            var11 = var12.bind(var4)(var11);
            var11 = var11.EDIT_PROFILE_FRAME_SHEET;
            var9['analyticsSource'] = var11;
            var9 = var3.bind(var4)(var10, var9);
            var8[1] = var9;
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