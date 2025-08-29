// app/modules/user_profile/native/EditUserProfileAvatar.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot5 = var7;
    var4 = var4.jsxs;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'position': 'absolute', 'right': 4294967293};
    var4['editIcon'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot7 = var4;
    var4 = {};
    var7 = 'function EditUserProfileAvatarTsx1(){const{rotation}=this.__closure;return{transform:[{rotateZ:rotation.get()+"deg"}]};}';
    var4['code'] = var7;
    var _closure1_slot8 = var4;
    var4 = 25;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/native/EditUserProfileAvatar.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function EditUserProfileAvatar(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var22 = var2.user;
            var _closure2_slot0 = var22;
            var16 = var2.disabled;
            var20 = var2.statusStyle;
            var17 = var2.style;
            var23 = var2.avatarStyle;
            var13 = var2.editIconStyle;
            var12 = var2.disableStatus;
            var4 = undefined;
            if(!(var12 === var4)) { _fun0001_ip = 58; continue _fun0001 }
 56:
            var12 = true;
 58:
            var7 = var2.isTryItOut;
            if(!(var7 === var4)) { _fun0001_ip = 70; continue _fun0001 }
 68:
            var7 = false;
 70:
            var _closure2_slot1 = var7;
            var3 = var2.autoStartEditFlow;
            if(!(var3 === var4)) { _fun0001_ip = 86; continue _fun0001 }
 84:
            var3 = false;
 86:
            var _closure2_slot2 = var3;
            var11 = var2.size;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var _closure2_slot10 = var4;
            var _closure2_slot11 = var4;
            var2 = _closure1_slot7;
            var10 = var2.bind(var4)();
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 4;
            var2 = var6[var2];
            var8 = var5.bind(var4)(var2);
            var2 = 5;
            var2 = var6[var2];
            var2 = var5.bind(var4)(var2);
            var2 = var2.EDIT_AVATAR;
            var2 = var8.bind(var4)(var2);
            var27 = var2.analyticsLocations;
            _closure2_slot3 = var27;
            var2 = 6;
            var2 = var6[var2];
            var5 = var5.bind(var4)(var2);
            var2 = var5.canUseAnimatedAvatar;
            var2 = var2.bind(var5)(var22);
            var15 = !var2;
            if(!var15) { _fun0001_ip = 227; continue _fun0001 }
 224:
            var15 = !var7;
 227:
            _closure2_slot4 = var15;
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 7;
            var2 = var6[var2];
            var5 = var5.bind(var4)(var2);
            var2 = {};
            var2['isTryItOut'] = var7;
            var2['analyticsLocations'] = var27;
            var2 = var5.bind(var4)(var2);
            var26 = var2.pendingAvatar;
            _closure2_slot5 = var26;
            var8 = var2.pendingAvatarDecoration;
            var24 = var2.setPendingAvatar;
            _closure2_slot6 = var24;
            var5 = _closure1_slot0;
            var2 = 8;
            var2 = var6[var2];
            var6 = var5.bind(var4)(var2);
            var5 = var6.getPendingAvatarSrc;
            var2 = {};
            var14 = var22.id;
            var2['userId'] = var14;
            var2['image'] = var26;
            var21 = var5.bind(var6)(var2);
            var5 = var8;
            if(!(var4 === var5)) { _fun0001_ip = 350; continue _fun0001 }
 344:
            var5 = var22.avatarDecoration;
 350:
            _closure2_slot7 = var5;
            var2 = _closure1_slot1;
            var19 = _closure1_slot2;
            var6 = 9;
            var6 = var19[var6];
            var14 = var2.bind(var4)(var6);
            var6 = {};
            var6['isTryItOut'] = var7;
            var6['analyticsLocations'] = var27;
            var18 = var14.bind(var4)(var6);
            _closure2_slot8 = var18;
            var25 = _closure1_slot3;
            var14 = var25.useCallback;
            var6 = new Array(8);
            var6[0] = var22;
            var6[1] = var27;
            var6[2] = var26;
            var6[3] = var24;
            var6[4] = var18;
            var6[5] = var15;
            var6[6] = var5;
            var6[7] = var7;
            var5 = function() {
                var4 = _closure1_slot1;
                var9 = _closure1_slot2;
                var1 = 10;
                var3 = var9[var1];
                var1 = undefined;
                var6 = var4.bind(var1)(var3);
                var5 = var6.openLazy;
                var8 = _closure1_slot0;
                var2 = 12;
                var2 = var9[var2];
                var4 = var8.bind(var1)(var2);
                var2 = 11;
                var3 = var9[var2];
                var2 = var9.paths;
                var4 = var4.bind(var1)(var3, var2);
                var3 = {};
                var10 = _closure2_slot4;
                var3['showAnimatedAvatarUpsell'] = var10;
                var10 = function handleRemoveAvatarSelect() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 10;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.hideActionSheet;
                    var2 = var2.bind(var3)();
                    var3 = _closure2_slot6;
                    var2 = null;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var3['handleRemoveAvatarSelect'] = var10;
                var10 = _closure2_slot8;
                var3['handleUploadAvatarSelect'] = var10;
                var10 = function handleUploadGIFAvatarSelect() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                        var3 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var2 = 10;
                        var4 = var8[var2];
                        var1 = undefined;
                        var5 = var3.bind(var1)(var4);
                        var4 = var5.hideActionSheet;
                        var4 = var4.bind(var5)();
                        var2 = var8[var2];
                        var6 = var3.bind(var1)(var2);
                        var5 = var6.openLazy;
                        var10 = _closure1_slot0;
                        var2 = 12;
                        var2 = var8[var2];
                        var4 = var10.bind(var1)(var2);
                        var2 = 13;
                        var3 = var8[var2];
                        var2 = var8.paths;
                        var4 = var4.bind(var1)(var3, var2);
                        var3 = {};
                        var9 = _closure2_slot0;
                        var3['user'] = var9;
                        var9 = 14;
                        var8 = var8[var9];
                        var8 = var10.bind(var1)(var8);
                        var8 = var8.ProfileAssetType;
                        var8 = var8.AVATAR;
                        var3['profileAssetType'] = var8;
                        var2 = _closure2_slot1;
                        var8 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var7 = var7[var9];
                        var7 = var8.bind(var1)(var7);
                        var7 = var7.GIFSelectionContext;
                        if(var2) { _fun0002_ip = 164; continue _fun0002 }
 156:
                        var2 = var7.PROFILE_EDIT;
                        _fun0002_ip = 170; continue _fun0002;
 164:
                        var2 = var7.PROFILE_TRY_IT_OUT;
 170:
                        var3['selectionContext'] = var2;
                        var2 = 'Select GIF Avatar';
                        var2 = var5.bind(var6)(var4, var2, var3);
                        return var1;
                    }
                };
                var3['handleUploadGIFAvatarSelect'] = var10;
                var7 = function handleEditAvatarDecorationSelect() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 15;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.openAvatarDecorationActionSheet;
                    var2 = {};
                    var6 = _closure2_slot0;
                    var2['user'] = var6;
                    var6 = _closure2_slot7;
                    var2['currentAvatarDecoration'] = var6;
                    var5 = _closure2_slot3;
                    var2['analyticsLocations'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var3['handleEditAvatarDecorationSelect'] = var7;
                var7 = 16;
                var7 = var9[var7];
                var9 = var8.bind(var1)(var7);
                var8 = var9.showRemoveAvatar;
                var7 = _closure2_slot5;
                var2 = _closure2_slot0;
                var2 = var2.avatar;
                var2 = var8.bind(var9)(var7, var2);
                var3['showRemoveAvatar'] = var2;
                var2 = 'Change Avatar';
                var2 = var5.bind(var6)(var4, var2, var3);
                return var1;
            };
            var6 = var14.bind(var25)(var5, var6);
            _closure2_slot9 = var6;
            var14 = var25.useRef;
            var5 = false;
            var5 = var14.bind(var25)(var5);
            _closure2_slot10 = var5;
            var14 = var25.useEffect;
            var5 = new Array(3);
            var5[0] = var22;
            var5[1] = var3;
            var5[2] = var6;
            var3 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = _closure2_slot2;
                    if(!var2) { _fun0003_ip = 22; continue _fun0003 }
 10:
                    var3 = _closure2_slot10;
                    var3 = var3.current;
                    var2 = !var3;
 22:
                    if(!var2) { _fun0003_ip = 47; continue _fun0003 }
 25:
                    var3 = _closure2_slot10;
                    var2 = true;
                    var3['current'] = var2;
                    var2 = _closure2_slot9;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
 47:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var14.bind(var25)(var3, var5);
            var18 = _closure1_slot0;
            var3 = 17;
            var3 = var19[var3];
            var15 = var18.bind(var4)(var3);
            var14 = var15.useStateFromStores;
            var3 = _closure1_slot4;
            var5 = new Array(1);
            var5[0] = var3;
            var3 = function() {
                var1 = _closure1_slot4;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var5 = var14.bind(var15)(var5, var3);
            var15 = 18;
            var3 = var19[var15];
            var24 = var18.bind(var4)(var3);
            var14 = var24.useSharedValue;
            var3 = 0;
            var26 = var14.bind(var24)(var3);
            _closure2_slot11 = var26;
            var3 = var19[var15];
            var24 = var18.bind(var4)(var3);
            var14 = var24.useAnimatedStyle;
            var3 = function C() {
                var1 = {};
                var3 = {};
                var4 = _closure2_slot11;
                var2 = var4.get;
                var6 = var2.bind(var4)();
                var2 = global;
                var2 = var2.HermesInternal;
                var5 = var2.concat;
                var4 = '';
                var2 = 'deg';
                var2 = var5.bind(var4)(var6, var2);
                var3['rotateZ'] = var2;
                var2 = new Array(1);
                var2[0] = var3;
                var1['transform'] = var2;
                return var1;
            };
            var27 = {};
            var27['rotation'] = var26;
            var3['__closure'] = var27;
            var27 = 13368223692459.0;
            var3['__workletHash'] = var27;
            var27 = _closure1_slot8;
            var3['__initData'] = var27;
            var14 = var14.bind(var24)(var3);
            var24 = var25.useEffect;
            var3 = new Array(1);
            var3[0] = var26;
            var1 = function() {
                var3 = _closure2_slot11;
                var2 = var3.set;
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var1 = 18;
                var4 = var13[var1];
                var11 = undefined;
                var6 = var12.bind(var11)(var4);
                var5 = var6.withRepeat;
                var4 = 19;
                var4 = var13[var4];
                var8 = var12.bind(var11)(var4);
                var7 = var8.withTiming;
                var4 = {};
                var9 = 3000;
                var4['duration'] = var9;
                var9 = var13[var1];
                var9 = var12.bind(var11)(var9);
                var10 = var9.Easing;
                var9 = var10.inOut;
                var1 = var13[var1];
                var1 = var12.bind(var11)(var1);
                var1 = var1.Easing;
                var1 = var1.quad;
                var1 = var9.bind(var10)(var1);
                var4['easing'] = var1;
                var1 = 360;
                var4 = var7.bind(var8)(var1, var4);
                var1 = -1;
                var1 = var5.bind(var6)(var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 18;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.cancelAnimation;
                    var1 = _closure2_slot11;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                return var1;
            };
            var1 = var24.bind(var25)(var1, var3);
            var3 = _closure1_slot5;
            var1 = 20;
            var1 = var19[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['style'] = var23;
            var1['user'] = var22;
            var1['pendingAvatarSrc'] = var21;
            var1['pendingAvatarDecoration'] = var8;
            var1['statusStyle'] = var20;
            var1['disableStatus'] = var12;
            var1['size'] = var11;
            var12 = var3.bind(var4)(var2, var1);
            var3 = _closure1_slot6;
            var1 = 21;
            var1 = var19[var1];
            var1 = var18.bind(var4)(var1);
            var2 = var1.PressableOpacity;
            var1 = {};
            var1['style'] = var17;
            var1['disabled'] = var16;
            var1['onPress'] = var6;
            var6 = 'button';
            var1['accessibilityRole'] = var6;
            var6 = 22;
            var16 = var19[var6];
            var16 = var18.bind(var4)(var16);
            var17 = var16.intl;
            var16 = var17.string;
            var6 = var19[var6];
            var6 = var18.bind(var4)(var6);
            var6 = var6.t;
            var6 = var6.MUgHIC;
            var6 = var16.bind(var17)(var6);
            var1['accessibilityLabel'] = var6;
            var6 = var12;
            if(!var7) { _fun0001_ip = 890; continue _fun0001 }
 833:
            var7 = null;
            var6 = var12;
            if(!(var7 == var8)) { _fun0001_ip = 890; continue _fun0001 }
 842:
            var6 = var12;
            if(var5) { _fun0001_ip = 890; continue _fun0001 }
 848:
            var8 = _closure1_slot5;
            var7 = _closure1_slot1;
            var5 = _closure1_slot2;
            var5 = var5[var15];
            var5 = var7.bind(var4)(var5);
            var7 = var5.View;
            var5 = {};
            var5['style'] = var14;
            var5['children'] = var12;
            var6 = var8.bind(var4)(var7, var5);
 890:
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot5;
            var7 = _closure1_slot1;
            var12 = _closure1_slot2;
            var6 = 23;
            var6 = var12[var6];
            var7 = var7.bind(var4)(var6);
            var6 = {};
            var14 = var10.editIcon;
            var10 = new Array(2);
            var10[0] = var14;
            var10[1] = var13;
            var6['style'] = var10;
            var10 = _closure1_slot0;
            var9 = 24;
            var9 = var12[var9];
            var9 = var10.bind(var4)(var9);
            var9 = var9.AvatarSizes;
            var10 = var9.EDIT_AVATAR_DECORATION;
            var9 = 'xs';
            if(!(var11 === var10)) { _fun0001_ip = 986; continue _fun0001 }
 982:
            var9 = 'sm';
 986:
            var6['size'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();