// app/modules/user_profile/native/UserProfileAvatarDecorationEditButton.tsx
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
    var4 = var4.ActivityIndicator;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.COLLECTIBLES_PREVIEW_SIZE;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.NOOP;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 7;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.TEXT_SUBTLE;
    var9['tintColor'] = var10;
    var4['noneIcon'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot9 = var4;
    var4 = 18;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/native/UserProfileAvatarDecorationEditButton.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function UserProfileAvatarDecorationEditButton(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var16 = var1.user;
            var _closure2_slot0 = var16;
            var15 = var1.guildId;
            var _closure2_slot1 = var15;
            var11 = var1.pendingAvatarDecoration;
            var14 = var1.isTryItOut;
            var _closure2_slot2 = var14;
            var4 = undefined;
            var _closure2_slot4 = var4;
            var1 = _closure1_slot9;
            var9 = var1.bind(var4)();
            var7 = null;
            var3 = var7 != var15;
            var _closure2_slot3 = var3;
            var5 = _closure1_slot0;
            var1 = _closure1_slot2;
            var2 = 8;
            var2 = var1[var2];
            var13 = var5.bind(var4)(var2);
            var12 = var13.useStateFromStores;
            var2 = _closure1_slot5;
            var10 = new Array(1);
            var10[0] = var2;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot3;
                    var1 = null;
                    if(!var3) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var5 = _closure1_slot5;
                    var4 = var5.getMember;
                    var3 = _closure2_slot1;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var1 = var4.bind(var5)(var3, var2);
case 2:
                    return var1;
                }
            };
            var17 = var12.bind(var13)(var10, var2);
            var10 = _closure1_slot1;
            var2 = 9;
            var2 = var1[var2];
            var2 = var10.bind(var4)(var2);
            var13 = 10;
            var1 = var1[var13];
            var10 = var5.bind(var4)(var1);
            var5 = var10.getProfilePreviewValue;
            var1 = {};
            var1['pendingValue'] = var11;
            var12 = var16.avatarDecoration;
            var1['userValue'] = var12;
            var18 = var7 == var17;
            var12 = undefined;
            if(var18) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var12 = var17.avatarDecoration;
case 4:
            var1['guildValue'] = var12;
            var1['guildId'] = var15;
            var1 = var5.bind(var10)(var1);
            var10 = var2.bind(var4)(var1);
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 11;
            var1 = var5[var1];
            var5 = var2.bind(var4)(var1);
            var2 = var5.useFetchCollectiblesProduct;
            var12 = var7 == var10;
            var1 = undefined;
            if(var12) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var1 = var10.skuId;
case 6:
            var1 = var2.bind(var5)(var1);
            var5 = var1.product;
            var1 = var1.isFetching;
            var12 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var13];
            var13 = var12.bind(var4)(var2);
            var12 = var13.useUserAvatarDecoration;
            var2 = {};
            var2['user'] = var16;
            var2['guildId'] = var15;
            var2 = var12.bind(var13)(var2);
            if(!(var4 !== var11)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var2 = var11;
case 8:
            _closure2_slot4 = var2;
            var13 = _closure1_slot3;
            var12 = var13.useCallback;
            var11 = new Array(4);
            var11[0] = var16;
            var11[1] = var15;
            var11[2] = var2;
            var11[3] = var14;
            var8 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 12;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.openAvatarDecorationActionSheet;
                var2 = {};
                var6 = _closure2_slot0;
                var2['user'] = var6;
                var6 = _closure2_slot1;
                var2['guildId'] = var6;
                var6 = _closure2_slot4;
                var2['currentAvatarDecoration'] = var6;
                var5 = _closure2_slot2;
                var2['isTryItOut'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var8 = var12.bind(var13)(var8, var11);
            var11 = var7 == var5;
            var14 = undefined;
            if(var11) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var14 = var5.name;
case 10:
            if(!(var7 == var14)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var11 = 13;
            var12 = var16[var11];
            var12 = var15.bind(var4)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var11 = var16[var11];
            var11 = var15.bind(var4)(var11);
            var11 = var11.t;
            var11 = var11.PoWNfe;
            var14 = var12.bind(var13)(var11);
case 12:
            var12 = var14;
            if(!var3) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var12 = var14;
            if(!(var7 == var2)) { _fun0001_ip = 14; continue _fun0001 }
case 16:
            var3 = _closure1_slot0;
            var15 = _closure1_slot2;
            var2 = 13;
            var11 = var15[var2];
            var11 = var3.bind(var4)(var11);
            var13 = var11.intl;
            var11 = var13.formatToPlainString;
            var2 = var15[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.t;
            var3 = var2.ep5D4i;
            var2 = {};
            var2['label'] = var14;
            var12 = var11.bind(var13)(var3, var2);
case 14:
            var3 = _closure1_slot8;
            var11 = _closure1_slot0;
            var13 = _closure1_slot2;
            var2 = 14;
            var2 = var13[var2];
            var2 = var11.bind(var4)(var2);
            var2 = var2.UserProfileEditFormButton;
            if(var1) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var1 = {};
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var11 = 13;
            var13 = var16[var11];
            var13 = var15.bind(var4)(var13);
            var14 = var13.intl;
            var13 = var14.string;
            var11 = var16[var11];
            var11 = var15.bind(var4)(var11);
            var11 = var11.t;
            var11 = var11["7v0T9P"];
            var11 = var13.bind(var14)(var11);
            var1['label'] = var11;
            var1['buttonText'] = var12;
            var11 = {};
            var11['text'] = var12;
            var1['accessibilityValue'] = var11;
            var1['onPress'] = var8;
            if(!(var7 == var5)) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var8 = _closure1_slot8;
            var7 = _closure1_slot0;
            var13 = _closure1_slot2;
            var5 = 16;
            var5 = var13[var5];
            var5 = var7.bind(var4)(var5);
            var7 = var5.Icon;
            var5 = {};
            var12 = _closure1_slot1;
            var11 = 17;
            var11 = var13[var11];
            var11 = var12.bind(var4)(var11);
            var5['source'] = var11;
            var9 = var9.noneIcon;
            var5['style'] = var9;
            var5 = var8.bind(var4)(var7, var5);
            _fun0001_ip = 21; continue _fun0001;
case 19:
            var9 = _closure1_slot8;
            var8 = _closure1_slot1;
            var11 = _closure1_slot2;
            var7 = 15;
            var7 = var11[var7];
            var8 = var8.bind(var4)(var7);
            var7 = {};
            var7['avatarDecoration'] = var10;
            var10 = _closure1_slot6;
            var7['size'] = var10;
            var10 = false;
            var7['animate'] = var10;
            var5 = var9.bind(var4)(var8, var7);
case 21:
            var1['leading'] = var5;
            _fun0001_ip = 22; continue _fun0001;
case 17:
            var5 = {};
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var7 = 13;
            var8 = var11[var7];
            var8 = var10.bind(var4)(var8);
            var12 = var8.intl;
            var9 = var12.string;
            var8 = var11[var7];
            var8 = var10.bind(var4)(var8);
            var8 = var8.t;
            var8 = var8["7v0T9P"];
            var8 = var9.bind(var12)(var8);
            var5['label'] = var8;
            var8 = var11[var7];
            var8 = var10.bind(var4)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var7 = var11[var7];
            var7 = var10.bind(var4)(var7);
            var7 = var7.t;
            var7 = var7.MKDeyL;
            var7 = var8.bind(var9)(var7);
            var5['buttonText'] = var7;
            var7 = _closure1_slot7;
            var5['onPress'] = var7;
            var9 = _closure1_slot8;
            var8 = _closure1_slot4;
            var6 = true;
            var7 = {'animating': true, 'size': 'large'};
            var7 = var9.bind(var4)(var8, var7);
            var5['leading'] = var7;
            var5['loading'] = var6;
            var5['disabled'] = var6;
            var5['hideArrow'] = var6;
            var1 = var5;
case 22:
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();