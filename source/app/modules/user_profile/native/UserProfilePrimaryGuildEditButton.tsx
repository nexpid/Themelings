// app/modules/user_profile/native/UserProfilePrimaryGuildEditButton.tsx
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
    var7 = var6[var12];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GuildTagBadgeSize;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'paddingHorizontal': 6, 'paddingVertical': 2, 'columnGap': 4};
    var10 = 5;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.sm;
    var9['borderRadius'] = var13;
    var4['tag'] = var9;
    var9 = {};
    var9['paddingTop'] = var12;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_4;
    var9['marginLeft'] = var10;
    var4['newBadge'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot6 = var4;
    var4 = 19;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/native/UserProfilePrimaryGuildEditButton.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function UserProfilePrimaryGuildEditButton(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var2 = var1.user;
            var6 = var1.disabled;
            var16 = var1.tagStyle;
            var1 = var1.pendingPrimaryGuildId;
            var5 = undefined;
            var _closure2_slot0 = var5;
            var _closure2_slot1 = var5;
            var _closure2_slot2 = var5;
            var _closure2_slot3 = var5;
            var3 = _closure1_slot6;
            var14 = var3.bind(var5)();
            if(!(var5 === var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var8 = var2.primaryGuild;
            var4 = null;
            var9 = var4 != var8;
            var3 = null;
            if(!var9) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var8 = var8.identityEnabled;
            var3 = null;
            if(!var8) { _fun0001_ip = 4; continue _fun0001 }
case 6:
            var8 = var2.primaryGuild;
            var9 = var4 == var8;
            var4 = undefined;
            if(var9) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var4 = var8.identityGuildId;
case 7:
            var3 = var4;
case 4:
            var1 = var3;
case 2:
            _closure2_slot0 = var1;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var8 = 6;
            var8 = var4[var8];
            var12 = var3.bind(var5)(var8);
            var10 = var12.useStateFromStores;
            var8 = _closure1_slot3;
            var9 = new Array(1);
            var9[0] = var8;
            var8 = new Array(1);
            var8[0] = var1;
            var1 = function() {
                var3 = _closure1_slot3;
                var2 = var3.getGuild;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var17 = var10.bind(var12)(var9, var1, var8);
            _closure2_slot1 = var17;
            var1 = 7;
            var1 = var4[var1];
            var3 = var3.bind(var5)(var1);
            var1 = var3.useUserAvailableGuildsWithTags;
            var1 = var1.bind(var3)();
            _closure2_slot2 = var1;
            var3 = var1.length;
            var1 = 0;
            var9 = var3 > var1;
            var1 = function handleSelectPrimaryGuild(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 8;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.setPendingPrimaryGuildId;
                var2 = arg1;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            _closure2_slot3 = var1;
            var1 = null;
            if(!(var1 != var2)) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            if(!var9) { _fun0001_ip = 9; continue _fun0001 }
case 11:
            var2 = var1 == var17;
            var13 = undefined;
            if(var2) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var13 = var17.profile;
case 12:
            var12 = var1 != var17;
            if(!var12) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 9;
            var2 = var4[var2];
            var10 = var3.bind(var5)(var2);
            var8 = var10.getGuildTagBadgeUrl;
            var4 = var17.id;
            var3 = var1 == var13;
            var2 = undefined;
            if(var3) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var2 = var13.badge;
case 16:
            var15 = var1 != var2;
            var3 = undefined;
            if(!var15) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var3 = var2;
case 18:
            var2 = _closure1_slot4;
            var2 = var2.SIZE_24;
            var12 = var8.bind(var10)(var4, var3, var2);
case 14:
            var8 = var1 != var17;
            var10 = _closure1_slot0;
            var2 = _closure1_slot2;
            var20 = 10;
            var3 = var2[var20];
            var3 = var10.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var2[var20];
            var2 = var10.bind(var5)(var2);
            var2 = var2.t;
            if(var9) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var9 = var2.NGHYUv;
            var18 = var3.bind(var4)(var9);
            _fun0001_ip = 22; continue _fun0001;
case 20:
            var2 = var2.ECv270;
            var18 = var3.bind(var4)(var2);
case 22:
            if(!var8) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var18 = var17.name;
case 23:
            var10 = var18;
            if(!(var1 != var13)) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var9 = var13.tag;
            var2 = global;
            var2 = var2.HermesInternal;
            var4 = var2.concat;
            var3 = '';
            var2 = ', ';
            var10 = var4.bind(var3)(var18, var2, var9);
case 25:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 11;
            var2 = var4[var2];
            var3 = var3.bind(var5)(var2);
            var2 = var3.isAndroid;
            var2 = var2.bind(var3)();
            var3 = 4;
            if(!var2) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            var3 = 1;
case 27:
            var19 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 12;
            var2 = var9[var2];
            var2 = var19.bind(var5)(var2);
            var2 = var2.TextStyleSheet;
            var2 = var2.text-md/semibold;
            var2 = var2.fontSize;
            var15 = var2 + var3;
            var4 = _closure1_slot5;
            var2 = 13;
            var2 = var9[var2];
            var2 = var19.bind(var5)(var2);
            var3 = var2.UserProfileEditFormButton;
            var2 = {};
            var21 = var9[var20];
            var21 = var19.bind(var5)(var21);
            var23 = var21.intl;
            var22 = var23.string;
            var21 = var9[var20];
            var21 = var19.bind(var5)(var21);
            var21 = var21.t;
            var21 = var21.DUD+5n;
            var21 = var22.bind(var23)(var21);
            var2['label'] = var21;
            var2['buttonText'] = var18;
            var2['accessibilityLabel'] = var10;
            var10 = var9[var20];
            var10 = var19.bind(var5)(var10);
            var18 = var10.intl;
            var10 = var18.string;
            var9 = var9[var20];
            var9 = var19.bind(var5)(var9);
            var9 = var9.t;
            var9 = var9.Xz9c91;
            var9 = var10.bind(var18)(var9);
            var2['accessibilityHint'] = var9;
            var7 = function onPress() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var5 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 14;
                    var4 = var2[var1];
                    var1 = undefined;
                    var6 = var5.bind(var1)(var4);
                    var5 = var6.openLazy;
                    var4 = _closure1_slot0;
                    var3 = 16;
                    var3 = var2[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = 15;
                    var3 = var2[var3];
                    var2 = var2.paths;
                    var4 = var4.bind(var1)(var3, var2);
                    var3 = {};
                    var7 = _closure2_slot2;
                    var3['availableGuilds'] = var7;
                    var8 = _closure2_slot1;
                    var7 = null;
                    var8 = var7 != var8;
                    if(!var8) { _fun0002_ip = 29; continue _fun0002 }
case 30:
                    var7 = _closure2_slot1;
case 29:
                    var3['userPrimaryGuild'] = var7;
                    var2 = _closure2_slot3;
                    var3['onSelectGuild'] = var2;
                    var2 = 'UserPrimaryGuildListBottomSheet';
                    var2 = var5.bind(var6)(var4, var2, var3);
                    return var1;
                }
            };
            var2['onPress'] = var7;
            var7 = null;
            if(!var8) { _fun0001_ip = 31; continue _fun0001 }
case 32:
            var10 = _closure1_slot5;
            var9 = _closure1_slot1;
            var18 = _closure1_slot2;
            var8 = 17;
            var8 = var18[var8];
            var9 = var9.bind(var5)(var8);
            var8 = {};
            var8['guild'] = var17;
            var7 = var10.bind(var5)(var9, var8);
case 31:
            var2['leading'] = var7;
            var8 = var1 != var13;
            var7 = null;
            if(!var8) { _fun0001_ip = 33; continue _fun0001 }
case 34:
            var10 = _closure1_slot5;
            var9 = _closure1_slot0;
            var17 = _closure1_slot2;
            var8 = 18;
            var8 = var17[var8];
            var8 = var9.bind(var5)(var8);
            var9 = var8.BaseGuildTagChiplet;
            var8 = {};
            var17 = var14.tag;
            var14 = new Array(2);
            var14[0] = var17;
            var14[1] = var16;
            var8['containerStyles'] = var14;
            var14 = {};
            var14['lineHeight'] = var15;
            var8['textStyle'] = var14;
            var14 = var13.tag;
            var15 = var1 != var14;
            var13 = undefined;
            if(!var15) { _fun0001_ip = 35; continue _fun0001 }
case 36:
            var13 = var14;
case 35:
            var8['guildTag'] = var13;
            var8['guildBadge'] = var12;
            var11 = _closure1_slot4;
            var11 = var11.SIZE_16;
            var8['badgeSize'] = var11;
            var11 = 'text-md/semibold';
            var8['textVariant'] = var11;
            var11 = 'text-default';
            var8['textColor'] = var11;
            var7 = var10.bind(var5)(var9, var8);
case 33:
            var2['trailing'] = var7;
            var2['disabled'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 9:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();