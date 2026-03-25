// app/modules/user_profile/native/UserProfileEffectEditButton.tsx
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
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var12 = var4.PROFILE_EFFECT_ASPECT_RATIO;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.NOOP;
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot6 = var7;
    var4 = var4.jsxs;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'height': 50, 'width': 50, 'borderRadius': null, 'overflow': 'hidden'};
    var10 = 6;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.xs;
    var9['borderRadius'] = var13;
    var4['profileEffectPreviewContainer'] = var9;
    var9 = {};
    var9['aspectRatio'] = var12;
    var12 = '100%';
    var9['width'] = var12;
    var4['sampleProfile'] = var9;
    var9 = {};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.TEXT_SUBTLE;
    var9['tintColor'] = var10;
    var4['noneIcon'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot8 = var4;
    var4 = 20;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/native/UserProfileEffectEditButton.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function UserProfileEffectEditButton(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var14 = var1.displayProfile;
            var13 = var1.user;
            var _closure2_slot0 = var13;
            var7 = var1.pendingProfileEffect;
            var8 = var1.guildId;
            var _closure2_slot1 = var8;
            var12 = var1.isTryItOut;
            var _closure2_slot2 = var12;
            var4 = undefined;
            var _closure2_slot3 = var4;
            var1 = _closure1_slot8;
            var16 = var1.bind(var4)();
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var11 = 7;
            var1 = var1[var11];
            var9 = var2.bind(var4)(var1);
            var2 = var9.getProfilePreviewValue;
            var1 = {};
            var1['pendingValue'] = var7;
            var5 = null;
            var15 = var5 == var14;
            var10 = undefined;
            if(var15) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var15 = var14._userProfile;
            var17 = var5 == var15;
            var10 = undefined;
            if(var17) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var10 = var15.profileEffect;
case 2:
            var1['userValue'] = var10;
            var15 = var5 == var14;
            var10 = undefined;
            if(var15) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var14 = var14._guildMemberProfile;
            var15 = var5 == var14;
            var10 = undefined;
            if(var15) { _fun0001_ip = 5; continue _fun0001 }
case 7:
            var10 = var14.profileEffect;
case 5:
            var1['guildValue'] = var10;
            var1['guildId'] = var8;
            var14 = var2.bind(var9)(var1);
            var2 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 8;
            var1 = var9[var1];
            var9 = var2.bind(var4)(var1);
            var2 = var9.useFetchCollectiblesProduct;
            var10 = var5 == var14;
            var1 = undefined;
            if(var10) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var1 = var14.skuId;
case 8:
            var1 = var2.bind(var9)(var1);
            var9 = var1.product;
            var1 = var1.isFetching;
            var10 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var11];
            var11 = var10.bind(var4)(var2);
            var10 = var11.useUserProfileEffect;
            var2 = {};
            var2['user'] = var13;
            var2['guildId'] = var8;
            var2 = var10.bind(var11)(var2);
            if(!(var4 !== var7)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var2 = var7;
case 10:
            _closure2_slot3 = var2;
            var11 = _closure1_slot3;
            var10 = var11.useCallback;
            var7 = new Array(4);
            var7[0] = var2;
            var7[1] = var8;
            var7[2] = var13;
            var7[3] = var12;
            var3 = function() {
                var5 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 9;
                var4 = var2[var1];
                var1 = undefined;
                var6 = var5.bind(var1)(var4);
                var5 = var6.openLazy;
                var4 = _closure1_slot0;
                var3 = 11;
                var3 = var2[var3];
                var4 = var4.bind(var1)(var3);
                var3 = 10;
                var3 = var2[var3];
                var2 = var2.paths;
                var4 = var4.bind(var1)(var3, var2);
                var3 = {};
                var7 = _closure2_slot0;
                var3['user'] = var7;
                var7 = _closure2_slot3;
                var3['currentProfileEffect'] = var7;
                var7 = _closure2_slot1;
                var3['guildId'] = var7;
                var2 = _closure2_slot2;
                var3['isTryItOut'] = var2;
                var2 = 'Profile Effect';
                var2 = var5.bind(var6)(var4, var2, var3);
                return var1;
            };
            var7 = var10.bind(var11)(var3, var7);
            var10 = var5 == var9;
            var3 = undefined;
            if(var10) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var3 = var9.name;
case 12:
            if(!(var5 == var3)) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var9 = 12;
            var10 = var13[var9];
            var10 = var12.bind(var4)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var9 = var13[var9];
            var9 = var12.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.PoWNfe;
            var3 = var10.bind(var11)(var9);
case 14:
            var10 = var3;
            if(!(var5 != var8)) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var10 = var3;
            if(!(var5 == var2)) { _fun0001_ip = 16; continue _fun0001 }
case 18:
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = 12;
            var3 = var11[var2];
            var3 = var9.bind(var4)(var3);
            var8 = var3.intl;
            var3 = var8.string;
            var2 = var11[var2];
            var2 = var9.bind(var4)(var2);
            var2 = var2.t;
            var2 = var2.CHf9iJ;
            var10 = var3.bind(var8)(var2);
case 16:
            var3 = _closure1_slot6;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 13;
            var2 = var9[var2];
            var2 = var8.bind(var4)(var2);
            var2 = var2.UserProfileEditFormButton;
            if(var1) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var1 = {};
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var8 = 12;
            var9 = var12[var8];
            var9 = var11.bind(var4)(var9);
            var15 = var9.intl;
            var13 = var15.string;
            var9 = var12[var8];
            var9 = var11.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.wR5wOo;
            var9 = var13.bind(var15)(var9);
            var1['label'] = var9;
            var1['buttonText'] = var10;
            var9 = {};
            var9['text'] = var10;
            var1['accessibilityValue'] = var9;
            var9 = var12[var8];
            var9 = var11.bind(var4)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var8 = var12[var8];
            var8 = var11.bind(var4)(var8);
            var8 = var8.t;
            var8 = var8.Xz9c91;
            var8 = var9.bind(var10)(var8);
            var1['accessibilityHint'] = var8;
            var1['onPress'] = var7;
            if(!(var5 == var14)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var8 = _closure1_slot6;
            var10 = _closure1_slot1;
            var11 = _closure1_slot2;
            var5 = 18;
            var5 = var11[var5];
            var7 = var10.bind(var4)(var5);
            var5 = {};
            var9 = 19;
            var9 = var11[var9];
            var9 = var10.bind(var4)(var9);
            var5['source'] = var9;
            var9 = var16.noneIcon;
            var5['style'] = var9;
            var5 = var8.bind(var4)(var7, var5);
            _fun0001_ip = 23; continue _fun0001;
case 21:
            var9 = _closure1_slot7;
            var8 = _closure1_slot4;
            var7 = {};
            var10 = var16.profileEffectPreviewContainer;
            var7['style'] = var10;
            var13 = _closure1_slot6;
            var12 = _closure1_slot1;
            var15 = _closure1_slot2;
            var10 = 15;
            var10 = var15[var10];
            var11 = var12.bind(var4)(var10);
            var10 = {};
            var17 = {};
            var18 = 16;
            var18 = var15[var18];
            var18 = var12.bind(var4)(var18);
            var17['uri'] = var18;
            var10['source'] = var17;
            var16 = var16.sampleProfile;
            var10['style'] = var16;
            var16 = 'cover';
            var10['resizeMode'] = var16;
            var11 = var13.bind(var4)(var11, var10);
            var10 = new Array(2);
            var10[0] = var11;
            var11 = 17;
            var11 = var15[var11];
            var12 = var12.bind(var4)(var11);
            var11 = {'skuId': null, 'bannerAdjustment': 0, 'useThumbnail': true};
            var14 = var14.skuId;
            var11['skuId'] = var14;
            var11 = var13.bind(var4)(var12, var11);
            var10[1] = var11;
            var7['children'] = var10;
            var5 = var9.bind(var4)(var8, var7);
case 23:
            var1['leading'] = var5;
            _fun0001_ip = 24; continue _fun0001;
case 19:
            var5 = {};
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var9 = 12;
            var10 = var8[var9];
            var10 = var7.bind(var4)(var10);
            var12 = var10.intl;
            var11 = var12.string;
            var10 = var8[var9];
            var10 = var7.bind(var4)(var10);
            var10 = var10.t;
            var10 = var10.wR5wOo;
            var10 = var11.bind(var12)(var10);
            var5['label'] = var10;
            var10 = var8[var9];
            var10 = var7.bind(var4)(var10);
            var12 = var10.intl;
            var11 = var12.string;
            var10 = var8[var9];
            var10 = var7.bind(var4)(var10);
            var10 = var10.t;
            var10 = var10.MKDeyL;
            var10 = var11.bind(var12)(var10);
            var5['buttonText'] = var10;
            var10 = var8[var9];
            var10 = var7.bind(var4)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var9 = var8[var9];
            var9 = var7.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.Xz9c91;
            var9 = var10.bind(var11)(var9);
            var5['accessibilityHint'] = var9;
            var9 = _closure1_slot5;
            var5['onPress'] = var9;
            var9 = _closure1_slot6;
            var6 = 14;
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
case 24:
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();