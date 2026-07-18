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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticsSections;
    var _closure1_slot6 = var7;
    var7 = var4.AnalyticsObjects;
    var _closure1_slot7 = var7;
    var4 = var4.UpsellTypes;
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.PremiumUpsellTypes;
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot10 = var7;
    var4 = var4.jsxs;
    var _closure1_slot11 = var4;
    var4 = 6;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'position': 'absolute', 'right': 0};
    var4['editAvatarIcon'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot12 = var4;
    var4 = 26;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_identity/native/EditGuildIdentityAvatar.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function EditGuildIdentityAvatar(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var23 = var2.userId;
            var19 = var2.guildId;
            var _closure2_slot0 = var19;
            var7 = var2.disabled;
            var13 = var2.disableStatus;
            var5 = undefined;
            if(!(var13 === var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var13 = true;
case 2:
            var9 = var2.style;
            var14 = var2.statusStyle;
            var12 = var2.avatarStyle;
            var _closure2_slot1 = var5;
            var _closure2_slot2 = var5;
            var _closure2_slot3 = var5;
            var _closure2_slot4 = var5;
            var _closure2_slot5 = var5;
            var _closure2_slot6 = var5;
            var _closure2_slot7 = var5;
            var _closure2_slot8 = var5;
            var _closure2_slot9 = var5;
            var2 = _closure1_slot12;
            var11 = var2.bind(var5)();
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 7;
            var6 = var4[var2];
            var16 = var3.bind(var5)(var6);
            var15 = var16.useStateFromStores;
            var6 = _closure1_slot5;
            var10 = new Array(1);
            var10[0] = var6;
            var6 = function() {
                var2 = _closure1_slot5;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var20 = var15.bind(var16)(var10, var6);
            _closure2_slot1 = var20;
            var2 = var4[var2];
            var15 = var3.bind(var5)(var2);
            var10 = var15.useStateFromStores;
            var2 = _closure1_slot4;
            var6 = new Array(1);
            var6[0] = var2;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot1;
                    var7 = null;
                    var2 = var7 != var1;
                    var1 = null;
                    if(!var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var5 = _closure1_slot4;
                    var4 = var5.getMember;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var7 = var7 == var2;
                    var2 = undefined;
                    if(var7) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var6 = _closure2_slot1;
                    var2 = var6.id;
case 6:
                    var1 = var4.bind(var5)(var3, var2);
case 4:
                    return var1;
                }
            };
            var26 = var10.bind(var15)(var6, var2);
            _closure2_slot2 = var26;
            var16 = _closure1_slot1;
            var2 = 8;
            var2 = var4[var2];
            var6 = var16.bind(var5)(var2);
            var2 = 9;
            var2 = var4[var2];
            var2 = var16.bind(var5)(var2);
            var2 = var2.EDIT_AVATAR;
            var2 = var6.bind(var5)(var2);
            var21 = var2.analyticsLocations;
            _closure2_slot3 = var21;
            var2 = 10;
            var2 = var4[var2];
            var6 = var16.bind(var5)(var2);
            var2 = {};
            var2['guildId'] = var19;
            var2['analyticsLocations'] = var21;
            var2 = var6.bind(var5)(var2);
            var18 = var2.pendingAvatar;
            var15 = var2.pendingAvatarDecoration;
            var6 = var2.setPendingAvatar;
            _closure2_slot4 = var6;
            var2 = 11;
            var2 = var4[var2];
            var10 = var16.bind(var5)(var2);
            var2 = {};
            var2['guildId'] = var19;
            var2['analyticsLocations'] = var21;
            var10 = var10.bind(var5)(var2);
            _closure2_slot5 = var10;
            var2 = 12;
            var2 = var4[var2];
            var22 = var3.bind(var5)(var2);
            var17 = var22.getPendingAvatarSrc;
            var2 = {};
            var2['userId'] = var23;
            var2['image'] = var18;
            var17 = var17.bind(var22)(var2);
            var2 = 13;
            var22 = var4[var2];
            var23 = var16.bind(var5)(var22);
            var22 = var23.canUsePremiumGuildMemberProfile;
            var25 = var22.bind(var23)(var20);
            _closure2_slot6 = var25;
            var2 = var4[var2];
            var16 = var16.bind(var5)(var2);
            var2 = var16.canUseAnimatedAvatar;
            var2 = var2.bind(var16)(var20);
            var24 = !var2;
            _closure2_slot7 = var24;
            var2 = 14;
            var2 = var4[var2];
            var4 = var3.bind(var5)(var2);
            var3 = var4.showRemoveAvatar;
            var16 = null;
            var22 = var16 == var26;
            var2 = undefined;
            if(var22) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var2 = var26.avatar;
case 8:
            var23 = var3.bind(var4)(var18, var2);
            _closure2_slot8 = var23;
            var22 = var15;
            if(!(var5 === var22)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var3 = var16 == var26;
            var2 = undefined;
            if(var3) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var2 = var26.avatarDecoration;
case 12:
            var22 = var2;
case 10:
            _closure2_slot9 = var22;
            var4 = _closure1_slot3;
            var3 = var4.useCallback;
            var2 = new Array(10);
            var2[0] = var19;
            var2[1] = var26;
            var2[2] = var20;
            var2[3] = var25;
            var2[4] = var24;
            var2[5] = var23;
            var2[6] = var22;
            var2[7] = var21;
            var2[8] = var10;
            var2[9] = var6;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot2;
                    var4 = null;
                    var2 = var4 != var2;
                    if(!var2) { _fun0003_ip = 14; continue _fun0003 }
case 5:
                    var3 = _closure2_slot1;
                    var2 = var4 != var3;
case 14:
                    if(!var2) { _fun0003_ip = 15; continue _fun0003 }
case 16:
                    var4 = _closure2_slot6;
                    var5 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    if(var4) { _fun0003_ip = 17; continue _fun0003 }
case 18:
                    var4 = 15;
                    var7 = var2[var4];
                    var4 = undefined;
                    var8 = var5.bind(var4)(var7);
                    var7 = var8.handleShowUpsellAlert;
                    var4 = {};
                    var9 = _closure1_slot8;
                    var9 = var9.PREMIUM_GUILD_PROFILE;
                    var4['initialUpsellKey'] = var9;
                    var9 = {};
                    var10 = _closure1_slot6;
                    var10 = var10.PREMIUM_GUILD_MEMBER_PROFILE;
                    var9['section'] = var10;
                    var10 = _closure1_slot7;
                    var10 = var10.EDIT_GUILD_PROFILE_AVATAR;
                    var9['object'] = var10;
                    var4['analyticsLocation'] = var9;
                    var9 = _closure2_slot3;
                    var4['analyticsLocations'] = var9;
                    var9 = {};
                    var10 = _closure1_slot9;
                    var10 = var10.PREMIUM_GUILD_IDENTITY_MODAL;
                    var9['type'] = var10;
                    var4['analyticsProperties'] = var9;
                    var4 = var7.bind(var8)(var4);
                    _fun0003_ip = 15; continue _fun0003;
case 17:
                    var4 = 16;
                    var4 = var2[var4];
                    var8 = undefined;
                    var5 = var5.bind(var8)(var4);
                    var4 = var5.openLazy;
                    var7 = _closure1_slot0;
                    var3 = 18;
                    var3 = var2[var3];
                    var7 = var7.bind(var8)(var3);
                    var3 = 17;
                    var3 = var2[var3];
                    var2 = var2.paths;
                    var3 = var7.bind(var8)(var3, var2);
                    var2 = {};
                    var7 = _closure2_slot5;
                    var2['handleUploadAvatarSelect'] = var7;
                    var7 = function handleRemoveAvatarSelect() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 16;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.hideActionSheet;
                        var2 = var2.bind(var3)();
                        var3 = _closure2_slot4;
                        var2 = null;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var2['handleRemoveAvatarSelect'] = var7;
                    var7 = function handleUploadGIFAvatarSelect() {
                        var4 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var3 = 16;
                        var5 = var8[var3];
                        var1 = undefined;
                        var6 = var4.bind(var1)(var5);
                        var5 = var6.hideActionSheet;
                        var5 = var5.bind(var6)();
                        var3 = var8[var3];
                        var6 = var4.bind(var1)(var3);
                        var5 = var6.openLazy;
                        var7 = _closure1_slot0;
                        var2 = 18;
                        var2 = var8[var2];
                        var4 = var7.bind(var1)(var2);
                        var2 = 19;
                        var3 = var8[var2];
                        var2 = var8.paths;
                        var4 = var4.bind(var1)(var3, var2);
                        var3 = {};
                        var2 = 20;
                        var9 = var8[var2];
                        var9 = var7.bind(var1)(var9);
                        var9 = var9.ProfileAssetType;
                        var9 = var9.AVATAR;
                        var3['profileAssetType'] = var9;
                        var2 = var8[var2];
                        var2 = var7.bind(var1)(var2);
                        var2 = var2.GIFSelectionContext;
                        var2 = var2.PROFILE_EDIT;
                        var3['selectionContext'] = var2;
                        var2 = _closure2_slot0;
                        var3['guildId'] = var2;
                        var2 = 'Select GIF Avatar';
                        var2 = var5.bind(var6)(var4, var2, var3);
                        return var1;
                    };
                    var2['handleUploadGIFAvatarSelect'] = var7;
                    var6 = function handleEditAvatarDecorationSelect() {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                            var2 = _closure2_slot1;
                            var1 = null;
                            if(!(var1 != var2)) { _fun0004_ip = 19; continue _fun0004 }
case 20:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 21;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.openAvatarDecorationActionSheet;
                            var1 = {};
                            var5 = _closure2_slot1;
                            var1['user'] = var5;
                            var5 = _closure2_slot0;
                            var1['guildId'] = var5;
                            var5 = _closure2_slot9;
                            var1['currentAvatarDecoration'] = var5;
                            var4 = _closure2_slot3;
                            var1['analyticsLocations'] = var4;
                            var1 = var2.bind(var3)(var1);
case 19:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var2['handleEditAvatarDecorationSelect'] = var6;
                    var6 = _closure2_slot7;
                    var2['showAnimatedAvatarUpsell'] = var6;
                    var1 = _closure2_slot8;
                    var2['showRemoveAvatar'] = var1;
                    var1 = 'Change Avatar';
                    var1 = var4.bind(var5)(var3, var1, var2);
case 15:
                    var1 = undefined;
                    return var1;
                }
            };
            var6 = var3.bind(var4)(var1, var2);
            var2 = var16 == var20;
            var1 = null;
            if(var2) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var4 = _closure1_slot11;
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
            var6 = var6["70lEQe"];
            var6 = var9.bind(var10)(var6);
            var2['accessibilityLabel'] = var6;
            var10 = _closure1_slot10;
            var9 = _closure1_slot1;
            var6 = 24;
            var6 = var21[var6];
            var9 = var9.bind(var5)(var6);
            var6 = {};
            var6['user'] = var20;
            var18 = var16 === var18;
            var16 = undefined;
            if(var18) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var16 = var19;
case 23:
            var6['guildId'] = var16;
            var16 = undefined;
            if(var18) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var16 = var17;
case 25:
            var6['pendingAvatarSrc'] = var16;
            var6['pendingAvatarDecoration'] = var15;
            var6['statusStyle'] = var14;
            var6['disableStatus'] = var13;
            var6['style'] = var12;
            var9 = var10.bind(var5)(var9, var6);
            var6 = new Array(2);
            var6[0] = var9;
            var7 = !var7;
            if(!var7) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            var10 = _closure1_slot10;
            var9 = _closure1_slot1;
            var12 = _closure1_slot2;
            var8 = 25;
            var8 = var12[var8];
            var9 = var9.bind(var5)(var8);
            var8 = {};
            var11 = var11.editAvatarIcon;
            var8['style'] = var11;
            var7 = var10.bind(var5)(var9, var8);
case 27:
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 21:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();