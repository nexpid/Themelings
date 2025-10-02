// app/modules/guild_identity/native/EditGuildIdentityAvatar.tsx
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.UPLOAD_MEDIUM_SIZE;
    var _closure1_slot9 = var7;
    var7 = var4.AnalyticsSections;
    var _closure1_slot10 = var7;
    var7 = var4.AnalyticsObjects;
    var _closure1_slot11 = var7;
    var4 = var4.UpsellTypes;
    var _closure1_slot12 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.PremiumUpsellTypes;
    var _closure1_slot13 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot14 = var7;
    var4 = var4.jsxs;
    var _closure1_slot15 = var4;
    var4 = 9;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'position': 'absolute', 'right': 0};
    var4['editAvatarIcon'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot16 = var4;
    var4 = function handleChangeAvatar(arg1) {
        var5 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 10;
        var4 = var3[var1];
        var1 = undefined;
        var6 = var5.bind(var1)(var4);
        var5 = var6.openLazy;
        var8 = _closure1_slot0;
        var4 = 12;
        var4 = var3[var4];
        var8 = var8.bind(var1)(var4);
        var4 = 11;
        var4 = var3[var4];
        var3 = var3.paths;
        var4 = var8.bind(var1)(var4, var3);
        var3 = {};
        var8 = _closure1_slot4;
        var7 = function* () {
            var1 = function* anon_0_() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var5 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 13;
                    var2 = var3[var2];
                    var3 = undefined;
                    var6 = var5.bind(var3)(var2);
                    var5 = var6.openImagePicker;
                    var2 = {};
                    var7 = _closure1_slot9;
                    var2['size'] = var7;
                    var2 = var5.bind(var6)(var2);
                    SaveGenerator(address=60);
case 4:
                    return var2;
case 5:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var11 = var2.base64;
                    var5 = null;
                    if(!(var5 != var11)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var10 = 14;
                    var5 = var6[var10];
                    var9 = var7.bind(var3)(var5);
                    var8 = var9.createPendingImage;
                    var5 = {};
                    var5['imageUri'] = var11;
                    var10 = var6[var10];
                    var11 = var7.bind(var3)(var10);
                    var10 = var11.generateAvatarDescription;
                    var10 = var10.bind(var11)();
                    var5['description'] = var10;
                    var8 = var8.bind(var9)(var5);
                    var5 = 15;
                    var5 = var6[var5];
                    var7 = var7.bind(var3)(var5);
                    var5 = var7.setPendingAvatar;
                    var5 = var5.bind(var7)(var8);
                    var5 = _closure1_slot1;
                    var4 = 10;
                    var4 = var6[var4];
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.hideActionSheet;
                    var4 = var4.bind(var5)();
case 8:
                    return var3;
case 6:
                    return var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var7 = var8.bind(var1)(var7);
        var _closure2_slot0 = var7;
        var7 = function() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var3['handleUploadAvatarSelect'] = var7;
        var2 = function handleRemoveAvatarSelect() {
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 15;
            var3 = var4[var1];
            var1 = undefined;
            var6 = var5.bind(var1)(var3);
            var5 = var6.setPendingAvatar;
            var3 = null;
            var3 = var5.bind(var6)(var3);
            var3 = _closure1_slot1;
            var2 = 10;
            var2 = var4[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.hideActionSheet;
            var2 = var2.bind(var3)();
            return var1;
        };
        var3['handleRemoveAvatarSelect'] = var2;
        var2 = false;
        var3['showAnimatedAvatarUpsell'] = var2;
        var2 = arg1;
        var3['showRemoveAvatar'] = var2;
        var2 = 'Change Avatar';
        var2 = var5.bind(var6)(var4, var2, var3);
        return var1;
    };
    var _closure1_slot17 = var4;
    var4 = 26;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_identity/native/EditGuildIdentityAvatar.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function EditGuildIdentityAvatar(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var16 = var2.userId;
            var19 = var2.guildId;
            var _closure2_slot0 = var19;
            var7 = var2.disabled;
            var13 = var2.disableStatus;
            var5 = undefined;
            if(!(var13 === var5)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var13 = true;
case 10:
            var9 = var2.style;
            var14 = var2.statusStyle;
            var12 = var2.avatarStyle;
            var _closure2_slot1 = var5;
            var _closure2_slot2 = var5;
            var _closure2_slot3 = var5;
            var _closure2_slot4 = var5;
            var _closure2_slot5 = var5;
            var2 = _closure1_slot16;
            var11 = var2.bind(var5)();
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 16;
            var6 = var4[var2];
            var17 = var3.bind(var5)(var6);
            var15 = var17.useStateFromStores;
            var6 = _closure1_slot7;
            var10 = new Array(1);
            var10[0] = var6;
            var6 = function() {
                var2 = _closure1_slot7;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var20 = var15.bind(var17)(var10, var6);
            _closure2_slot1 = var20;
            var6 = var4[var2];
            var17 = var3.bind(var5)(var6);
            var15 = var17.useStateFromStoresArray;
            var6 = _closure1_slot8;
            var10 = new Array(1);
            var10[0] = var6;
            var6 = function() {
                var3 = _closure1_slot8;
                var1 = var3.getPendingAvatar;
                var2 = var1.bind(var3)();
                var1 = new Array(2);
                var1[0] = var2;
                var2 = var3.getPendingAvatarDecoration;
                var2 = var2.bind(var3)();
                var1[1] = var2;
                return var1;
            };
            var15 = var15.bind(var17)(var10, var6);
            var10 = _closure1_slot3;
            var6 = 2;
            var10 = var10.bind(var5)(var15, var6);
            var6 = 0;
            var18 = var10[var6];
            var6 = 1;
            var15 = var10[var6];
            var2 = var4[var2];
            var17 = var3.bind(var5)(var2);
            var10 = var17.useStateFromStores;
            var2 = _closure1_slot6;
            var6 = new Array(1);
            var6[0] = var2;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = _closure2_slot1;
                    var7 = null;
                    var2 = var7 != var1;
                    var1 = null;
                    if(!var2) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                    var5 = _closure1_slot6;
                    var4 = var5.getMember;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var7 = var7 == var2;
                    var2 = undefined;
                    if(var7) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                    var6 = _closure2_slot1;
                    var2 = var6.id;
case 14:
                    var1 = var4.bind(var5)(var3, var2);
case 12:
                    return var1;
                }
            };
            var22 = var10.bind(var17)(var6, var2);
            _closure2_slot2 = var22;
            var2 = 14;
            var2 = var4[var2];
            var10 = var3.bind(var5)(var2);
            var6 = var10.getPendingAvatarSrc;
            var2 = {};
            var2['userId'] = var16;
            var2['image'] = var18;
            var17 = var6.bind(var10)(var2);
            var6 = _closure1_slot1;
            var2 = 17;
            var2 = var4[var2];
            var6 = var6.bind(var5)(var2);
            var2 = var6.canUsePremiumGuildMemberProfile;
            var21 = var2.bind(var6)(var20);
            _closure2_slot3 = var21;
            var2 = 18;
            var2 = var4[var2];
            var4 = var3.bind(var5)(var2);
            var3 = var4.showRemoveAvatar;
            var16 = null;
            var6 = var16 == var22;
            var2 = undefined;
            if(var6) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var2 = var22.avatar;
case 16:
            var10 = var3.bind(var4)(var18, var2);
            _closure2_slot4 = var10;
            var4 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 19;
            var2 = var6[var2];
            var3 = var4.bind(var5)(var2);
            var2 = 20;
            var2 = var6[var2];
            var2 = var4.bind(var5)(var2);
            var2 = var2.EDIT_AVATAR;
            var2 = var3.bind(var5)(var2);
            var6 = var2.analyticsLocations;
            _closure2_slot5 = var6;
            var4 = _closure1_slot5;
            var3 = var4.useCallback;
            var2 = new Array(5);
            var2[0] = var22;
            var2[1] = var20;
            var2[2] = var21;
            var2[3] = var10;
            var2[4] = var6;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = _closure2_slot2;
                    var4 = null;
                    var2 = var4 != var2;
                    if(!var2) { _fun0004_ip = 18; continue _fun0004 }
case 19:
                    var3 = _closure2_slot1;
                    var2 = var4 != var3;
case 18:
                    if(!var2) { _fun0004_ip = 20; continue _fun0004 }
case 21:
                    var3 = _closure2_slot3;
                    if(var3) { _fun0004_ip = 22; continue _fun0004 }
case 23:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var3 = 21;
                    var4 = var4[var3];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.handleShowUpsellAlert;
                    var3 = {};
                    var6 = _closure1_slot12;
                    var6 = var6.PREMIUM_GUILD_PROFILE;
                    var3['initialUpsellKey'] = var6;
                    var6 = {};
                    var7 = _closure1_slot10;
                    var7 = var7.PREMIUM_GUILD_MEMBER_PROFILE;
                    var6['section'] = var7;
                    var7 = _closure1_slot11;
                    var7 = var7.EDIT_GUILD_PROFILE_AVATAR;
                    var6['object'] = var7;
                    var3['analyticsLocation'] = var6;
                    var6 = _closure2_slot5;
                    var3['analyticsLocations'] = var6;
                    var6 = {};
                    var7 = _closure1_slot13;
                    var7 = var7.PREMIUM_GUILD_IDENTITY_MODAL;
                    var6['type'] = var7;
                    var3['analyticsProperties'] = var6;
                    var3 = var4.bind(var5)(var3);
                    _fun0004_ip = 20; continue _fun0004;
case 22:
                    var3 = _closure1_slot17;
                    var2 = _closure2_slot4;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
case 20:
                    var1 = undefined;
                    return var1;
                }
            };
            var6 = var3.bind(var4)(var1, var2);
            var2 = var16 == var20;
            var1 = null;
            if(var2) { _fun0002_ip = 24; continue _fun0002 }
case 25:
            var4 = _closure1_slot15;
            var22 = _closure1_slot0;
            var21 = _closure1_slot2;
            var2 = 22;
            var2 = var21[var2];
            var2 = var22.bind(var5)(var2);
            var3 = var2.PressableOpacity;
            var2 = {};
            var2['style'] = var9;
            var2['disabled'] = var7;
            var2['onPress'] = var6;
            var6 = 'button';
            var2['accessibilityRole'] = var6;
            var6 = 23;
            var9 = var21[var6];
            var9 = var22.bind(var5)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var6 = var21[var6];
            var6 = var22.bind(var5)(var6);
            var6 = var6.t;
            var6 = var6.70lEQU;
            var6 = var9.bind(var10)(var6);
            var2['accessibilityLabel'] = var6;
            var10 = _closure1_slot14;
            var9 = _closure1_slot1;
            var6 = 24;
            var6 = var21[var6];
            var9 = var9.bind(var5)(var6);
            var6 = {};
            var6['user'] = var20;
            var18 = var16 === var18;
            var16 = undefined;
            if(var18) { _fun0002_ip = 26; continue _fun0002 }
case 27:
            var16 = var19;
case 26:
            var6['guildId'] = var16;
            var16 = undefined;
            if(var18) { _fun0002_ip = 28; continue _fun0002 }
case 29:
            var16 = var17;
case 28:
            var6['pendingAvatarSrc'] = var16;
            var6['pendingAvatarDecoration'] = var15;
            var6['statusStyle'] = var14;
            var6['disableStatus'] = var13;
            var6['style'] = var12;
            var9 = var10.bind(var5)(var9, var6);
            var6 = new Array(2);
            var6[0] = var9;
            var7 = !var7;
            if(!var7) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            var10 = _closure1_slot14;
            var9 = _closure1_slot1;
            var12 = _closure1_slot2;
            var8 = 25;
            var8 = var12[var8];
            var9 = var9.bind(var5)(var8);
            var8 = {};
            var11 = var11.editAvatarIcon;
            var8['style'] = var11;
            var7 = var10.bind(var5)(var9, var8);
case 30:
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 24:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();