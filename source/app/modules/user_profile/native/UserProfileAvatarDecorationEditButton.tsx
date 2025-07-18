// app/modules/user_profile/native/UserProfileAvatarDecorationEditButton.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var11 = native3;
    var3 = native6;
    var6 = native7;
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
    var4 = native4;
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
    var4 = var4.MOBILE_SETTINGS_AVATAR_DECORATION_SIZE;
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
    var10 = var10.HEADER_SECONDARY;
    var9['tintColor'] = var10;
    var4['noneIcon'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot9 = var4;
    var4 = 17;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/native/UserProfileAvatarDecorationEditButton.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function UserProfileAvatarDecorationEditButton(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var12 = var1.user;
            var _closure2_slot0 = var12;
            var14 = var1.guildId;
            var _closure2_slot1 = var14;
            var8 = var1.pendingAvatarDecoration;
            var4 = undefined;
            var _closure2_slot3 = var4;
            var1 = _closure1_slot9;
            var9 = var1.bind(var4)();
            var7 = null;
            var11 = var7 != var14;
            var _closure2_slot2 = var11;
            var3 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 8;
            var1 = var10[var1];
            var13 = var3.bind(var4)(var1);
            var5 = var13.useStateFromStores;
            var1 = _closure1_slot5;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure2_slot2;
                    var1 = null;
                    if(!var3) { _fun0002_ip = 44; continue _fun0002 }
 12:
                    var5 = _closure1_slot5;
                    var4 = var5.getMember;
                    var3 = _closure2_slot1;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var1 = var4.bind(var5)(var3, var2);
 44:
                    return var1;
                }
            };
            var5 = var5.bind(var13)(var3, var1);
            var3 = _closure1_slot1;
            var1 = 9;
            var1 = var10[var1];
            var3 = var3.bind(var4)(var1);
            if(!(var4 === var8)) { _fun0001_ip = 153; continue _fun0001 }
 126:
            var10 = var7 == var5;
            var1 = undefined;
            if(var10) { _fun0001_ip = 141; continue _fun0001 }
 135:
            var1 = var5.avatarDecoration;
 141:
            if(!(var7 == var1)) { _fun0001_ip = 151; continue _fun0001 }
 145:
            var1 = var12.avatarDecoration;
 151:
            _fun0001_ip = 175; continue _fun0001;
 153:
            var5 = var8;
            if(!var11) { _fun0001_ip = 172; continue _fun0001 }
 159:
            var5 = var8;
            if(!(var7 === var5)) { _fun0001_ip = 172; continue _fun0001 }
 166:
            var5 = var12.avatarDecoration;
 172:
            var1 = var5;
 175:
            var10 = var3.bind(var4)(var1);
            _closure2_slot3 = var10;
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 10;
            var1 = var5[var1];
            var5 = var3.bind(var4)(var1);
            var3 = var5.useFetchCollectiblesProduct;
            var8 = var7 == var10;
            var1 = undefined;
            if(var8) { _fun0001_ip = 225; continue _fun0001 }
 219:
            var1 = var10.skuId;
 225:
            var1 = var3.bind(var5)(var1);
            var5 = var1.product;
            var1 = var1.isFetching;
            var13 = _closure1_slot3;
            var8 = var13.useCallback;
            var3 = new Array(4);
            var3[0] = var10;
            var3[1] = var14;
            var3[2] = var11;
            var3[3] = var12;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = _closure2_slot2;
                    if(!var1) { _fun0003_ip = 66; continue _fun0003 }
 10:
                    var1 = _closure2_slot0;
                    var3 = var1.avatarDecoration;
                    var5 = null;
                    var4 = var5 == var3;
                    var1 = undefined;
                    if(var4) { _fun0003_ip = 37; continue _fun0003 }
 31:
                    var1 = var3.skuId;
 37:
                    var3 = _closure2_slot3;
                    var3 = var5 == var3;
                    var2 = undefined;
                    if(var3) { _fun0003_ip = 60; continue _fun0003 }
 50:
                    var3 = _closure2_slot3;
                    var2 = var3.skuId;
 60:
                    var5 = null;
                    if(!(var1 !== var2)) { _fun0003_ip = 70; continue _fun0003 }
 66:
                    var5 = _closure2_slot3;
 70:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 11;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.openAvatarDecorationActionSheet;
                    var2 = {};
                    var7 = _closure2_slot0;
                    var2['user'] = var7;
                    var6 = _closure2_slot1;
                    var2['guildId'] = var6;
                    var2['currentAvatarDecoration'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var8 = var8.bind(var13)(var2, var3);
            var3 = var7 == var5;
            var2 = undefined;
            if(var3) { _fun0001_ip = 298; continue _fun0001 }
 293:
            var2 = var5.name;
 298:
            var3 = var11;
            if(!var3) { _fun0001_ip = 344; continue _fun0001 }
 304:
            var14 = var7 == var5;
            var13 = undefined;
            if(var14) { _fun0001_ip = 319; continue _fun0001 }
 313:
            var13 = var5.skuId;
 319:
            var14 = var12.avatarDecoration;
            var15 = var7 == var14;
            var12 = undefined;
            if(var15) { _fun0001_ip = 340; continue _fun0001 }
 334:
            var12 = var14.skuId;
 340:
            var3 = var13 === var12;
 344:
            if(var11) { _fun0001_ip = 411; continue _fun0001 }
 347:
            var12 = var2;
            if(!(var7 == var2)) { _fun0001_ip = 409; continue _fun0001 }
 354:
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var11 = 12;
            var13 = var16[var11];
            var13 = var15.bind(var4)(var13);
            var14 = var13.intl;
            var13 = var14.string;
            var11 = var16[var11];
            var11 = var15.bind(var4)(var11);
            var11 = var11.t;
            var11 = var11.PoWNfX;
            var12 = var13.bind(var14)(var11);
 409:
            _fun0001_ip = 476; continue _fun0001;
 411:
            if(!(var7 != var2)) { _fun0001_ip = 418; continue _fun0001 }
 415:
            if(!var3) { _fun0001_ip = 473; continue _fun0001 }
 418:
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var3 = 12;
            var11 = var15[var3];
            var11 = var14.bind(var4)(var11);
            var13 = var11.intl;
            var11 = var13.string;
            var3 = var15[var3];
            var3 = var14.bind(var4)(var3);
            var3 = var3.t;
            var3 = var3.CHf9iI;
            var2 = var11.bind(var13)(var3);
 473:
            var12 = var2;
 476:
            var3 = _closure1_slot8;
            var11 = _closure1_slot0;
            var13 = _closure1_slot2;
            var2 = 13;
            var2 = var13[var2];
            var2 = var11.bind(var4)(var2);
            var2 = var2.UserProfileEditFormButton;
            if(var1) { _fun0001_ip = 761; continue _fun0001 }
 512:
            var1 = {};
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var11 = 12;
            var13 = var15[var11];
            var13 = var14.bind(var4)(var13);
            var17 = var13.intl;
            var16 = var17.string;
            var13 = var15[var11];
            var13 = var14.bind(var4)(var13);
            var13 = var13.t;
            var13 = var13.7v0T9P;
            var13 = var16.bind(var17)(var13);
            var1['label'] = var13;
            var1['buttonText'] = var12;
            var1['accessibilityLabel'] = var12;
            var12 = var15[var11];
            var12 = var14.bind(var4)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var11 = var15[var11];
            var11 = var14.bind(var4)(var11);
            var11 = var11.t;
            var11 = var11.JdF9wc;
            var11 = var12.bind(var13)(var11);
            var1['accessibilityHint'] = var11;
            var1['onPress'] = var8;
            if(!(var7 == var5)) { _fun0001_ip = 699; continue _fun0001 }
 639:
            var8 = _closure1_slot8;
            var12 = _closure1_slot1;
            var13 = _closure1_slot2;
            var5 = 15;
            var5 = var13[var5];
            var7 = var12.bind(var4)(var5);
            var5 = {};
            var11 = 16;
            var11 = var13[var11];
            var11 = var12.bind(var4)(var11);
            var5['source'] = var11;
            var9 = var9.noneIcon;
            var5['style'] = var9;
            var5 = var8.bind(var4)(var7, var5);
            _fun0001_ip = 751; continue _fun0001;
 699:
            var9 = _closure1_slot8;
            var8 = _closure1_slot1;
            var11 = _closure1_slot2;
            var7 = 14;
            var7 = var11[var7];
            var8 = var8.bind(var4)(var7);
            var7 = {};
            var7['avatarDecoration'] = var10;
            var10 = _closure1_slot6;
            var7['size'] = var10;
            var10 = false;
            var7['animate'] = var10;
            var5 = var9.bind(var4)(var8, var7);
 751:
            var1['leading'] = var5;
            _fun0001_ip = 1018; continue _fun0001;
 761:
            var5 = {};
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var7 = 12;
            var8 = var11[var7];
            var8 = var10.bind(var4)(var8);
            var12 = var8.intl;
            var9 = var12.string;
            var8 = var11[var7];
            var8 = var10.bind(var4)(var8);
            var8 = var8.t;
            var8 = var8.7v0T9P;
            var8 = var9.bind(var12)(var8);
            var5['label'] = var8;
            var8 = var11[var7];
            var8 = var10.bind(var4)(var8);
            var12 = var8.intl;
            var9 = var12.string;
            var8 = var11[var7];
            var8 = var10.bind(var4)(var8);
            var8 = var8.t;
            var8 = var8.MKDeyM;
            var8 = var9.bind(var12)(var8);
            var5['buttonText'] = var8;
            var8 = var11[var7];
            var8 = var10.bind(var4)(var8);
            var12 = var8.intl;
            var9 = var12.string;
            var8 = var11[var7];
            var8 = var10.bind(var4)(var8);
            var8 = var8.t;
            var8 = var8.ZTNur6;
            var8 = var9.bind(var12)(var8);
            var5['accessibilityLabel'] = var8;
            var8 = var11[var7];
            var8 = var10.bind(var4)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var7 = var11[var7];
            var7 = var10.bind(var4)(var7);
            var7 = var7.t;
            var7 = var7.JdF9wc;
            var7 = var8.bind(var9)(var7);
            var5['accessibilityHint'] = var7;
            var7 = _closure1_slot7;
            var5['onPress'] = var7;
            var9 = _closure1_slot8;
            var8 = _closure1_slot4;
            var6 = true;
            var7 = {'animating': true, 'size': 'large'};
            var7 = var9.bind(var4)(var8, var7);
            var5['leading'] = var7;
            var5['disabled'] = var6;
            var1 = var5;
 1018:
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();