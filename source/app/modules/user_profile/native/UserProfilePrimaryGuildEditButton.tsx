// app/modules/user_profile/native/UserProfilePrimaryGuildEditButton.tsx
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
    var12 = 0;
    var4 = var6[var12];
    var1 = undefined;
    var4 = var11.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = native4;
    var4 = var4.bind(var1)(var7);
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ContentDismissActionType;
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GuildTagBadgeSize;
    var _closure1_slot7 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot8 = var4;
    var4 = 7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'paddingHorizontal': 6, 'paddingVertical': 2, 'columnGap': 4};
    var10 = 8;
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
    var _closure1_slot9 = var4;
    var4 = 25;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/native/UserProfilePrimaryGuildEditButton.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function UserProfilePrimaryGuildEditButton(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var3 = var1.user;
            var6 = var1.disabled;
            var16 = var1.tagStyle;
            var1 = var1.pendingPrimaryGuildId;
            var5 = undefined;
            var _closure2_slot0 = var5;
            var _closure2_slot1 = var5;
            var _closure2_slot2 = var5;
            var _closure2_slot3 = var5;
            var _closure2_slot4 = var5;
            var2 = _closure1_slot9;
            var14 = var2.bind(var5)();
            if(!(var5 === var1)) { _fun0001_ip = 119; continue _fun0001 }
 64:
            var8 = var3.primaryGuild;
            var4 = null;
            var9 = var4 != var8;
            var2 = null;
            if(!var9) { _fun0001_ip = 116; continue _fun0001 }
 81:
            var8 = var8.identityEnabled;
            var2 = null;
            if(!var8) { _fun0001_ip = 116; continue _fun0001 }
 92:
            var8 = var3.primaryGuild;
            var9 = var4 == var8;
            var4 = undefined;
            if(var9) { _fun0001_ip = 113; continue _fun0001 }
 107:
            var4 = var8.identityGuildId;
 113:
            var2 = var4;
 116:
            var1 = var2;
 119:
            _closure2_slot0 = var1;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 9;
            var2 = var9[var2];
            var12 = var8.bind(var5)(var2);
            var10 = var12.useStateFromStores;
            var2 = _closure1_slot5;
            var4 = new Array(1);
            var4[0] = var2;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var3 = _closure1_slot5;
                var2 = var3.getGuild;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var17 = var10.bind(var12)(var4, var1, var2);
            _closure2_slot1 = var17;
            var1 = 10;
            var1 = var9[var1];
            var4 = var8.bind(var5)(var1);
            var2 = var4.useSelectedDismissibleContent;
            var22 = 11;
            var1 = var9[var22];
            var1 = var8.bind(var5)(var1);
            var1 = var1.DismissibleContent;
            var10 = var1.GUILD_TAG_USER_PROFILE_NEW_BADGE;
            var1 = new Array(1);
            var1[0] = var10;
            var4 = var2.bind(var4)(var1);
            var2 = _closure1_slot3;
            var1 = 2;
            var1 = var2.bind(var5)(var4, var1);
            var4 = 0;
            var21 = var1[var4];
            var2 = 1;
            var1 = var1[var2];
            _closure2_slot2 = var1;
            var1 = 12;
            var1 = var9[var1];
            var8 = var8.bind(var5)(var1);
            var1 = var8.useUserAvailableGuildsWithTags;
            var1 = var1.bind(var8)();
            _closure2_slot3 = var1;
            var1 = var1.length;
            var10 = var1 > var4;
            var1 = function handleSelectPrimaryGuild(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 13;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.setPendingPrimaryGuildId;
                var2 = arg1;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            _closure2_slot4 = var1;
            var1 = null;
            if(!(var1 != var3)) { _fun0001_ip = 1149; continue _fun0001 }
 326:
            if(!var10) { _fun0001_ip = 1149; continue _fun0001 }
 332:
            var3 = var1 == var17;
            var13 = undefined;
            if(var3) { _fun0001_ip = 347; continue _fun0001 }
 341:
            var13 = var17.profile;
 347:
            var12 = var1 != var17;
            if(!var12) { _fun0001_ip = 429; continue _fun0001 }
 354:
            var4 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 14;
            var3 = var8[var3];
            var15 = var4.bind(var5)(var3);
            var9 = var15.getGuildTagBadgeUrl;
            var8 = var17.id;
            var4 = var1 == var13;
            var3 = undefined;
            if(var4) { _fun0001_ip = 400; continue _fun0001 }
 394:
            var3 = var13.badge;
 400:
            var18 = var1 != var3;
            var4 = undefined;
            if(!var18) { _fun0001_ip = 412; continue _fun0001 }
 409:
            var4 = var3;
 412:
            var3 = _closure1_slot7;
            var3 = var3.SIZE_24;
            var12 = var9.bind(var15)(var8, var4, var3);
 429:
            var8 = var1 != var17;
            var15 = _closure1_slot0;
            var3 = _closure1_slot2;
            var20 = 15;
            var4 = var3[var20];
            var4 = var15.bind(var5)(var4);
            var9 = var4.intl;
            var4 = var9.string;
            var3 = var3[var20];
            var3 = var15.bind(var5)(var3);
            var3 = var3.t;
            if(var10) { _fun0001_ip = 495; continue _fun0001 }
 480:
            var10 = var3.NGHYUl;
            var10 = var4.bind(var9)(var10);
            _fun0001_ip = 508; continue _fun0001;
 495:
            var3 = var3.ECv27+;
            var10 = var4.bind(var9)(var3);
 508:
            if(!var8) { _fun0001_ip = 516; continue _fun0001 }
 511:
            var10 = var17.name;
 516:
            var9 = var10;
            if(!(var1 != var13)) { _fun0001_ip = 558; continue _fun0001 }
 523:
            var18 = var13.tag;
            var3 = global;
            var3 = var3.HermesInternal;
            var15 = var3.concat;
            var4 = '';
            var3 = ', ';
            var9 = var15.bind(var4)(var10, var3, var18);
 558:
            var4 = _closure1_slot0;
            var15 = _closure1_slot2;
            var3 = 16;
            var3 = var15[var3];
            var4 = var4.bind(var5)(var3);
            var3 = var4.isAndroid;
            var4 = var3.bind(var4)();
            var3 = 4;
            if(!var4) { _fun0001_ip = 596; continue _fun0001 }
 593:
            var3 = var2;
 596:
            var19 = _closure1_slot0;
            var18 = _closure1_slot2;
            var2 = 17;
            var2 = var18[var2];
            var2 = var19.bind(var5)(var2);
            var2 = var2.TextStyleSheet;
            var2 = var2.text-md/semibold;
            var2 = var2.fontSize;
            var15 = var2 + var3;
            var4 = _closure1_slot8;
            var2 = 18;
            var2 = var18[var2];
            var2 = var19.bind(var5)(var2);
            var3 = var2.UserProfileEditFormButton;
            var2 = {};
            var23 = var18[var20];
            var23 = var19.bind(var5)(var23);
            var25 = var23.intl;
            var24 = var25.string;
            var23 = var18[var20];
            var23 = var19.bind(var5)(var23);
            var23 = var23.t;
            var23 = var23.DUD+5u;
            var23 = var24.bind(var25)(var23);
            var2['label'] = var23;
            var18 = var18[var22];
            var18 = var19.bind(var5)(var18);
            var18 = var18.DismissibleContent;
            var19 = var18.GUILD_TAG_USER_PROFILE_NEW_BADGE;
            var18 = undefined;
            if(!(var21 === var19)) { _fun0001_ip = 858; continue _fun0001 }
 739:
            var22 = _closure1_slot8;
            var21 = _closure1_slot4;
            var19 = {};
            var23 = true;
            var19['aria-hidden'] = var23;
            var28 = _closure1_slot0;
            var25 = _closure1_slot2;
            var23 = 19;
            var23 = var25[var23];
            var23 = var28.bind(var5)(var23);
            var24 = var23.TextBadge;
            var23 = {};
            var26 = var25[var20];
            var26 = var28.bind(var5)(var26);
            var27 = var26.intl;
            var26 = var27.string;
            var25 = var25[var20];
            var25 = var28.bind(var5)(var25);
            var25 = var25.t;
            var25 = var25.y2b7CA;
            var25 = var26.bind(var27)(var25);
            var23['text'] = var25;
            var25 = var14.newBadge;
            var23['style'] = var25;
            var23 = var22.bind(var5)(var24, var23);
            var19['children'] = var23;
            var18 = var22.bind(var5)(var21, var19);
 858:
            var2['labelTrailing'] = var18;
            var2['buttonText'] = var10;
            var2['accessibilityLabel'] = var9;
            var19 = _closure1_slot0;
            var9 = _closure1_slot2;
            var10 = var9[var20];
            var10 = var19.bind(var5)(var10);
            var18 = var10.intl;
            var10 = var18.string;
            var9 = var9[var20];
            var9 = var19.bind(var5)(var9);
            var9 = var9.t;
            var9 = var9.Xz9c9/;
            var9 = var10.bind(var18)(var9);
            var2['accessibilityHint'] = var9;
            var7 = function onPress() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var5 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 20;
                    var4 = var3[var1];
                    var1 = undefined;
                    var8 = var5.bind(var1)(var4);
                    var7 = var8.openLazy;
                    var5 = _closure1_slot0;
                    var4 = 22;
                    var4 = var3[var4];
                    var5 = var5.bind(var1)(var4);
                    var4 = 21;
                    var4 = var3[var4];
                    var3 = var3.paths;
                    var6 = var5.bind(var1)(var4, var3);
                    var5 = {};
                    var4 = _closure2_slot3;
                    var5['availableGuilds'] = var4;
                    var9 = _closure2_slot1;
                    var4 = null;
                    var9 = var4 != var9;
                    if(!var9) { _fun0002_ip = 96; continue _fun0002 }
 92:
                    var4 = _closure2_slot1;
 96:
                    var5['userPrimaryGuild'] = var4;
                    var4 = _closure2_slot4;
                    var5['onSelectGuild'] = var4;
                    var4 = 'UserPrimaryGuildListBottomSheet';
                    var4 = var7.bind(var8)(var6, var4, var5);
                    var3 = _closure2_slot2;
                    var2 = _closure1_slot6;
                    var2 = var2.TAKE_ACTION;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var2['onPress'] = var7;
            var7 = null;
            if(!var8) { _fun0001_ip = 981; continue _fun0001 }
 945:
            var10 = _closure1_slot8;
            var9 = _closure1_slot1;
            var18 = _closure1_slot2;
            var8 = 23;
            var8 = var18[var8];
            var9 = var9.bind(var5)(var8);
            var8 = {};
            var8['guild'] = var17;
            var7 = var10.bind(var5)(var9, var8);
 981:
            var2['leading'] = var7;
            var8 = var1 != var13;
            var7 = null;
            if(!var8) { _fun0001_ip = 1132; continue _fun0001 }
 998:
            var10 = _closure1_slot8;
            var9 = _closure1_slot0;
            var17 = _closure1_slot2;
            var8 = 24;
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
            if(!var15) { _fun0001_ip = 1081; continue _fun0001 }
 1078:
            var13 = var14;
 1081:
            var8['guildTag'] = var13;
            var8['guildBadge'] = var12;
            var11 = _closure1_slot7;
            var11 = var11.SIZE_16;
            var8['badgeSize'] = var11;
            var11 = 'text-md/semibold';
            var8['textVariant'] = var11;
            var11 = 'header-secondary';
            var8['textColor'] = var11;
            var7 = var10.bind(var5)(var9, var8);
 1132:
            var2['trailing'] = var7;
            var2['disabled'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
 1149:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();