// app/modules/user_profile/native/UserProfileFrameEditButton.tsx
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
    var12 = 0;
    var4 = var6[var12];
    var1 = undefined;
    var4 = var11.bind(var1)(var4);
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
    var4 = var5.bind(var1)(var4);
    var14 = var4.COLLECTIBLES_PREVIEW_SIZE;
    var _closure1_slot6 = var14;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ContentDismissActionType;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.NOOP;
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot9 = var4;
    var10 = 7;
    var4 = var6[var10];
    var4 = var11.bind(var1)(var4);
    var4 = var4.space;
    var13 = var4.PX_4;
    var _closure1_slot10 = var13;
    var4 = 8;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var9['height'] = var14;
    var9['width'] = var14;
    var9['paddingVertical'] = var13;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_MOD_MUTED;
    var9['backgroundColor'] = var13;
    var13 = 'center';
    var9['justifyContent'] = var13;
    var9['alignItems'] = var13;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.xs;
    var9['borderRadius'] = var13;
    var13 = 'hidden';
    var9['overflow'] = var13;
    var4['previewContainer'] = var9;
    var9 = {};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.TEXT_SUBTLE;
    var9['tintColor'] = var13;
    var4['noneIcon'] = var9;
    var9 = {};
    var9['paddingTop'] = var12;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.space;
    var10 = var10.PX_4;
    var9['marginLeft'] = var10;
    var4['newBadge'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot11 = var4;
    var4 = 24;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/native/UserProfileFrameEditButton.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function UserProfileFrameEditButton(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var20 = var1.displayProfile;
            var19 = var1.user;
            var _closure2_slot0 = var19;
            var11 = var1.pendingProfileFrame;
            var3 = var1.guildId;
            var _closure2_slot1 = var3;
            var4 = undefined;
            var _closure2_slot3 = var4;
            var1 = _closure1_slot11;
            var10 = var1.bind(var4)();
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var5 = 9;
            var5 = var1[var5];
            var9 = var2.bind(var4)(var5);
            var8 = var9.useCanViewProfileFramesInCollectiblesShop;
            var5 = 'UserProfileFrameEditButton';
            var9 = var8.bind(var9)(var5);
            var5 = 10;
            var5 = var1[var5];
            var12 = var2.bind(var4)(var5);
            var8 = var12.useSelectedDismissibleContent;
            var14 = 11;
            var5 = var1[var14];
            var5 = var2.bind(var4)(var5);
            var5 = var5.DismissibleContent;
            var13 = var5.PROFILE_FRAME_USER_PROFILE_NEW_BADGE;
            var5 = new Array(1);
            var5[0] = var13;
            var8 = var8.bind(var12)(var5);
            var5 = _closure1_slot3;
            var17 = 2;
            var8 = var5.bind(var4)(var8, var17);
            var15 = 0;
            var13 = var8[var15];
            var5 = 1;
            var18 = var8[var5];
            var _closure2_slot2 = var18;
            var16 = 12;
            var1 = var1[var16];
            var8 = var2.bind(var4)(var1);
            var2 = var8.getProfilePreviewValue;
            var1 = {};
            var1['pendingValue'] = var11;
            var5 = null;
            var21 = var5 == var20;
            var12 = undefined;
            if(var21) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var21 = var20._userProfile;
            var22 = var5 == var21;
            var12 = undefined;
            if(var22) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var12 = var21.profileFrame;
case 2:
            var1['userValue'] = var12;
            var21 = var5 == var20;
            var12 = undefined;
            if(var21) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var20 = var20._guildMemberProfile;
            var21 = var5 == var20;
            var12 = undefined;
            if(var21) { _fun0001_ip = 5; continue _fun0001 }
case 7:
            var12 = var20.profileFrame;
case 5:
            var1['guildValue'] = var12;
            var1['guildId'] = var3;
            var12 = var2.bind(var8)(var1);
            var2 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 13;
            var1 = var8[var1];
            var8 = var2.bind(var4)(var1);
            var2 = var8.useFetchCollectiblesProduct;
            var20 = var5 == var12;
            var1 = undefined;
            if(var20) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var1 = var12.skuId;
case 8:
            var1 = var2.bind(var8)(var1);
            var8 = var1.product;
            var1 = var1.isFetching;
            var2 = var5 == var8;
            var20 = undefined;
            if(var2) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var2 = var8.items;
            var2 = var2[var15];
            var12 = var5 == var2;
            var20 = undefined;
            if(var12) { _fun0001_ip = 10; continue _fun0001 }
case 12:
            var20 = var2.type;
case 10:
            var12 = _closure1_slot0;
            var21 = _closure1_slot2;
            var2 = 14;
            var2 = var21[var2];
            var2 = var12.bind(var4)(var2);
            var2 = var2.CollectiblesItemType;
            var2 = var2.PROFILE_FRAME;
            var12 = undefined;
            if(!(var20 === var2)) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var2 = var8.items;
            var12 = var2[var15];
case 13:
            var15 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var16];
            var16 = var15.bind(var4)(var2);
            var15 = var16.useUserProfileFrame;
            var2 = {};
            var2['user'] = var19;
            var2['guildId'] = var3;
            var2 = var15.bind(var16)(var2);
            if(!(var4 !== var11)) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var2 = var11;
case 15:
            _closure2_slot3 = var2;
            var16 = _closure1_slot4;
            var15 = var16.useCallback;
            var11 = new Array(4);
            var11[0] = var2;
            var11[1] = var3;
            var11[2] = var19;
            var11[3] = var18;
            var7 = function() {
                var5 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 15;
                var4 = var3[var1];
                var1 = undefined;
                var8 = var5.bind(var1)(var4);
                var7 = var8.openLazy;
                var5 = _closure1_slot0;
                var4 = 17;
                var4 = var3[var4];
                var5 = var5.bind(var1)(var4);
                var4 = 16;
                var4 = var3[var4];
                var3 = var3.paths;
                var6 = var5.bind(var1)(var4, var3);
                var5 = {};
                var4 = _closure2_slot0;
                var5['user'] = var4;
                var4 = _closure2_slot3;
                var5['currentProfileFrame'] = var4;
                var4 = _closure2_slot1;
                var5['guildId'] = var4;
                var4 = 'Profile Frame';
                var4 = var7.bind(var8)(var6, var4, var5);
                var3 = _closure2_slot2;
                var2 = _closure1_slot7;
                var2 = var2.TAKE_ACTION;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var7 = var15.bind(var16)(var7, var11);
            if(var9) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            return var5;
case 17:
            var9 = var5 == var8;
            var15 = undefined;
            if(var9) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var15 = var8.name;
case 19:
            if(!(var5 == var15)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var16 = _closure1_slot0;
            var18 = _closure1_slot2;
            var8 = 18;
            var9 = var18[var8];
            var9 = var16.bind(var4)(var9);
            var11 = var9.intl;
            var9 = var11.string;
            var8 = var18[var8];
            var8 = var16.bind(var4)(var8);
            var8 = var8.t;
            var8 = var8.PoWNfe;
            var15 = var9.bind(var11)(var8);
case 21:
            var9 = var15;
            if(!(var5 != var3)) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var9 = var15;
            if(!(var5 == var2)) { _fun0001_ip = 23; continue _fun0001 }
case 25:
            var3 = _closure1_slot0;
            var16 = _closure1_slot2;
            var2 = 18;
            var8 = var16[var2];
            var8 = var3.bind(var4)(var8);
            var11 = var8.intl;
            var8 = var11.formatToPlainString;
            var2 = var16[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.t;
            var3 = var2.ep5D4i;
            var2 = {};
            var2['label'] = var15;
            var9 = var8.bind(var11)(var3, var2);
case 23:
            var3 = _closure1_slot9;
            var8 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = 19;
            var2 = var11[var2];
            var2 = var8.bind(var4)(var2);
            var2 = var2.UserProfileEditFormButton;
            if(var1) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var1 = {};
            var11 = _closure1_slot0;
            var8 = _closure1_slot2;
            var22 = 18;
            var15 = var8[var22];
            var15 = var11.bind(var4)(var15);
            var18 = var15.intl;
            var16 = var18.string;
            var15 = var8[var22];
            var15 = var11.bind(var4)(var15);
            var15 = var15.t;
            var15 = var15.GWrZOd;
            var15 = var16.bind(var18)(var15);
            var1['label'] = var15;
            var8 = var8[var14];
            var8 = var11.bind(var4)(var8);
            var8 = var8.DismissibleContent;
            var11 = var8.PROFILE_FRAME_USER_PROFILE_NEW_BADGE;
            var8 = undefined;
            if(!(var13 === var11)) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var14 = _closure1_slot9;
            var13 = _closure1_slot5;
            var11 = {};
            var15 = true;
            var11['aria-hidden'] = var15;
            var21 = _closure1_slot0;
            var18 = _closure1_slot2;
            var15 = 21;
            var15 = var18[var15];
            var15 = var21.bind(var4)(var15);
            var16 = var15.TextBadge;
            var15 = {};
            var19 = var18[var22];
            var19 = var21.bind(var4)(var19);
            var20 = var19.intl;
            var19 = var20.string;
            var18 = var18[var22];
            var18 = var21.bind(var4)(var18);
            var18 = var18.t;
            var18 = var18.y2b7CA;
            var18 = var19.bind(var20)(var18);
            var15['text'] = var18;
            var18 = var10.newBadge;
            var15['style'] = var18;
            var15 = var14.bind(var4)(var16, var15);
            var11['children'] = var15;
            var8 = var14.bind(var4)(var13, var11);
case 28:
            var1['labelTrailing'] = var8;
            var1['buttonText'] = var9;
            var8 = {};
            var8['text'] = var9;
            var1['accessibilityValue'] = var8;
            var1['onPress'] = var7;
            if(!(var5 == var12)) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            var8 = _closure1_slot9;
            var7 = _closure1_slot0;
            var13 = _closure1_slot2;
            var5 = 21;
            var5 = var13[var5];
            var5 = var7.bind(var4)(var5);
            var7 = var5.Icon;
            var5 = {};
            var11 = _closure1_slot1;
            var9 = 23;
            var9 = var13[var9];
            var9 = var11.bind(var4)(var9);
            var5['source'] = var9;
            var9 = var10.noneIcon;
            var5['style'] = var9;
            var5 = var8.bind(var4)(var7, var5);
            _fun0001_ip = 32; continue _fun0001;
case 30:
            var9 = _closure1_slot9;
            var8 = _closure1_slot5;
            var7 = {};
            var10 = var10.previewContainer;
            var7['style'] = var10;
            var13 = _closure1_slot1;
            var14 = _closure1_slot2;
            var10 = 22;
            var10 = var14[var10];
            var11 = var13.bind(var4)(var10);
            var10 = {};
            var10['profileFrame'] = var12;
            var16 = _closure1_slot6;
            var12 = 7;
            var15 = var14[var12];
            var15 = var13.bind(var4)(var15);
            var15 = var15.space;
            var15 = var15.PX_8;
            var15 = var17 * var15;
            var15 = var16 - var15;
            var10['previewWidth'] = var15;
            var15 = _closure1_slot10;
            var15 = var17 * var15;
            var15 = var16 - var15;
            var10['previewHeight'] = var15;
            var12 = var14[var12];
            var12 = var13.bind(var4)(var12);
            var12 = var12.colors;
            var12 = var12.BACKGROUND_SURFACE_HIGH;
            var10['profileBackgroundColor'] = var12;
            var10 = var9.bind(var4)(var11, var10);
            var7['children'] = var10;
            var5 = var9.bind(var4)(var8, var7);
case 32:
            var1['leading'] = var5;
            _fun0001_ip = 33; continue _fun0001;
case 26:
            var5 = {};
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var9 = 18;
            var10 = var8[var9];
            var10 = var7.bind(var4)(var10);
            var12 = var10.intl;
            var11 = var12.string;
            var10 = var8[var9];
            var10 = var7.bind(var4)(var10);
            var10 = var10.t;
            var10 = var10.GWrZOd;
            var10 = var11.bind(var12)(var10);
            var5['label'] = var10;
            var10 = var8[var9];
            var10 = var7.bind(var4)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var9 = var8[var9];
            var9 = var7.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.MKDeyL;
            var9 = var10.bind(var11)(var9);
            var5['buttonText'] = var9;
            var9 = _closure1_slot8;
            var5['onPress'] = var9;
            var9 = _closure1_slot9;
            var6 = 20;
            var6 = var8[var6];
            var6 = var7.bind(var4)(var6);
            var8 = var6.ActivityIndicator;
            var6 = true;
            var7 = {'animating': true, 'size': 'large'};
            var7 = var9.bind(var4)(var8, var7);
            var5['leading'] = var7;
            var5['loading'] = var6;
            var5['disabled'] = var6;
            var5['hideArrow'] = var6;
            var1 = var5;
case 33:
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();