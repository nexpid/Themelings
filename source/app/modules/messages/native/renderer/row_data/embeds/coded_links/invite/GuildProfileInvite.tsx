// app/modules/messages/native/renderer/row_data/embeds/coded_links/invite/GuildProfileInvite.tsx
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
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.CodedLinkExtendedType;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GuildFeatures;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.InviteTypes;
    var _closure1_slot7 = var4;
    var4 = 22;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/row_data/embeds/coded_links/invite/GuildProfileInvite.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function createGuildProfileInvite(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var7 = arg1;
            var21 = arg2;
            var2 = _closure1_slot1;
            var6 = _closure1_slot2;
            var4 = 5;
            var1 = var6[var4];
            var9 = undefined;
            var1 = var2.bind(var9)(var1);
            var1 = var1.bind(var9)(var21);
            var2 = var1.colors;
            var16 = var1.baseColors;
            var3 = _closure1_slot0;
            var1 = 6;
            var1 = var6[var1];
            var8 = var3.bind(var9)(var1);
            var1 = var8.buildGuildProfileFromInvite;
            var11 = var1.bind(var8)(var7);
            var1 = 7;
            var1 = var6[var1];
            var3 = var3.bind(var9)(var1);
            var1 = var3.isThemeDark;
            var3 = var1.bind(var3)(var21);
            var6 = _closure1_slot1;
            var8 = _closure1_slot2;
            var1 = 8;
            var1 = var8[var1];
            var1 = var6.bind(var9)(var1);
            var1 = var1.unsafe_rawColors;
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var10 = var1.PRIMARY_160;
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var10 = var1.PRIMARY_660;
case 4:
            var3 = null;
            var1 = var3 != var11;
            var6 = null;
            if(!var1) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var8 = _closure1_slot0;
            var12 = _closure1_slot2;
            var1 = 9;
            var1 = var12[var1];
            var8 = var8.bind(var9)(var1);
            var1 = var8.fromGuildProfile;
            var6 = var1.bind(var8)(var11);
case 5:
            var8 = _closure1_slot0;
            var13 = _closure1_slot2;
            var1 = 10;
            var1 = var13[var1];
            var12 = var8.bind(var9)(var1);
            var1 = var12.getProfilePrimaryColor;
            var12 = var1.bind(var12)(var11);
            var1 = 11;
            var1 = var13[var1];
            var8 = var8.bind(var9)(var1);
            var1 = var8.getBackgroundForProfile;
            if(!(var3 != var12)) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var10 = var12;
case 7:
            var10 = var1.bind(var8)(var21, var10);
            var8 = _closure1_slot3;
            var1 = 2;
            var8 = var8.bind(var9)(var10, var1);
            var10 = 0;
            var17 = var8[var10];
            var1 = 1;
            var13 = var8[var1];
            var1 = var3 == var11;
            var24 = undefined;
            if(var1) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var24 = var11.memberCount;
case 9:
            if(!(var3 == var24)) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var24 = var7.approximate_member_count;
case 11:
            var1 = var3 == var11;
            var23 = undefined;
            if(var1) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var23 = var11.onlineCount;
case 13:
            if(!(var3 == var23)) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var23 = var7.approximate_presence_count;
case 15:
            var8 = var3 == var11;
            var1 = undefined;
            if(var8) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var1 = var11.icon;
case 17:
            if(!(var3 == var1)) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var8 = _closure1_slot0;
            var12 = _closure1_slot2;
            var1 = 13;
            var1 = var12[var1];
            var12 = var8.bind(var9)(var1);
            var8 = var12.getAcronym;
            var1 = var3 == var11;
            var14 = undefined;
            if(var1) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var14 = var11.name;
case 21:
            var15 = var3 != var14;
            var1 = '';
            if(!var15) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var1 = var14;
case 23:
            var15 = var8.bind(var12)(var1);
            var14 = undefined;
            _fun0001_ip = 25; continue _fun0001;
case 19:
            var8 = _closure1_slot1;
            var12 = _closure1_slot2;
            var1 = 12;
            var1 = var12[var1];
            var12 = var8.bind(var9)(var1);
            var8 = var12.getGuildIconURL;
            var1 = {};
            var18 = var11.id;
            var1['id'] = var18;
            var18 = var11.icon;
            var1['icon'] = var18;
            var18 = true;
            var1['canAnimate'] = var18;
            var18 = 128;
            var1['size'] = var18;
            var14 = var8.bind(var12)(var1);
            var15 = undefined;
case 25:
            var8 = var3 == var6;
            var1 = undefined;
            if(var8) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var18 = var6.features;
            var12 = var18.has;
            var8 = _closure1_slot6;
            var8 = var8.DISCOVERABLE;
            var1 = var12.bind(var18)(var8);
case 26:
            var12 = undefined;
            if(!var1) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var8 = var3 == var11;
            var1 = undefined;
            if(var8) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            var1 = var11.customBanner;
case 30:
            var1 = var3 != var1;
            var12 = undefined;
            if(!var1) { _fun0001_ip = 28; continue _fun0001 }
case 32:
            var20 = _closure1_slot1;
            var22 = _closure1_slot2;
            var1 = 12;
            var1 = var22[var1];
            var18 = var20.bind(var9)(var1);
            var8 = var18.getGuildDiscoverySplashURL;
            var1 = {};
            var19 = var11.id;
            var1['id'] = var19;
            var19 = var11.customBanner;
            var1['splash'] = var19;
            var19 = 14;
            var19 = var22[var19];
            var19 = var20.bind(var9)(var19);
            var20 = var19.bind(var9)();
            var19 = 400;
            var19 = var19 * var20;
            var1['size'] = var19;
            var1 = var8.bind(var18)(var1);
            var8 = var3 != var1;
            var12 = undefined;
            if(!var8) { _fun0001_ip = 28; continue _fun0001 }
case 33:
            var12 = var1;
case 28:
            var1 = var3 != var24;
            if(!var1) { _fun0001_ip = 34; continue _fun0001 }
case 35:
            var1 = var24 >= var4;
case 34:
            if(var1) { _fun0001_ip = 36; continue _fun0001 }
case 37:
            var4 = var3 != var23;
            if(!var4) { _fun0001_ip = 38; continue _fun0001 }
case 39:
            var4 = var23 > var10;
case 38:
            var1 = var4;
case 36:
            var19 = undefined;
            var18 = undefined;
            if(!var1) { _fun0001_ip = 40; continue _fun0001 }
case 41:
            var1 = var3 != var23;
            var4 = undefined;
            if(!var1) { _fun0001_ip = 42; continue _fun0001 }
case 43:
            var8 = _closure1_slot0;
            var25 = _closure1_slot2;
            var1 = 15;
            var20 = var25[var1];
            var20 = var8.bind(var9)(var20);
            var22 = var20.intl;
            var20 = var22.formatToPlainString;
            var1 = var25[var1];
            var1 = var8.bind(var9)(var1);
            var1 = var1.t;
            var8 = var1.LC+S+v;
            var1 = {};
            var1['membersOnline'] = var23;
            var4 = var20.bind(var22)(var8, var1);
case 42:
            var8 = var3 != var24;
            var1 = undefined;
            if(!var8) { _fun0001_ip = 44; continue _fun0001 }
case 45:
            var20 = _closure1_slot0;
            var25 = _closure1_slot2;
            var8 = 15;
            var22 = var25[var8];
            var22 = var20.bind(var9)(var22);
            var23 = var22.intl;
            var22 = var23.formatToPlainString;
            var8 = var25[var8];
            var8 = var20.bind(var9)(var8);
            var8 = var8.t;
            var20 = var8.zRl6XV;
            var8 = {};
            var8['count'] = var24;
            var1 = var22.bind(var23)(var20, var8);
case 44:
            var18 = var1;
            var19 = var4;
case 40:
            var1 = var3 != var11;
            var4 = null;
            if(!var1) { _fun0001_ip = 46; continue _fun0001 }
case 47:
            var8 = _closure1_slot0;
            var20 = _closure1_slot2;
            var1 = 16;
            var1 = var20[var1];
            var8 = var8.bind(var9)(var1);
            var1 = var8.getGuildProfileCTAType;
            var4 = var1.bind(var8)(var11);
case 46:
            var20 = _closure1_slot0;
            var1 = _closure1_slot2;
            var8 = 16;
            var1 = var1[var8];
            var1 = var20.bind(var9)(var1);
            var1 = var1.CTATypes;
            var1 = var1.IS_MEMBER;
            if(!(var1 !== var4)) { _fun0001_ip = 48; continue _fun0001 }
case 49:
            var20 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var8];
            var1 = var20.bind(var9)(var1);
            var1 = var1.CTATypes;
            var1 = var1.HAS_APPLICATION;
            if(!(var1 !== var4)) { _fun0001_ip = 50; continue _fun0001 }
case 51:
            var20 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var8];
            var1 = var20.bind(var9)(var1);
            var1 = var1.CTATypes;
            var1 = var1.APPLY_TO_JOIN;
            if(!(var1 !== var4)) { _fun0001_ip = 52; continue _fun0001 }
case 53:
            var20 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var8];
            var1 = var20.bind(var9)(var1);
            var1 = var1.CTATypes;
            var1 = var1.LURK_DISCOVERABLE;
            if(!(var1 !== var4)) { _fun0001_ip = 54; continue _fun0001 }
case 55:
            var4 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var8];
            var1 = var4.bind(var9)(var1);
            var1 = var1.CTATypes;
            var1 = var1.JOIN_VIA_INVITE;
case 54:
            var20 = _closure1_slot0;
            var22 = _closure1_slot2;
            var1 = 15;
            var4 = var22[var1];
            var4 = var20.bind(var9)(var4);
            var8 = var4.intl;
            var4 = var8.string;
            var1 = var22[var1];
            var1 = var20.bind(var9)(var1);
            var1 = var1.t;
            var1 = var1.XpeFYm;
            var20 = var4.bind(var8)(var1);
            _fun0001_ip = 56; continue _fun0001;
case 52:
            var22 = _closure1_slot0;
            var23 = _closure1_slot2;
            var1 = 15;
            var4 = var23[var1];
            var4 = var22.bind(var9)(var4);
            var8 = var4.intl;
            var4 = var8.string;
            var1 = var23[var1];
            var1 = var22.bind(var9)(var1);
            var1 = var1.t;
            var1 = var1.7XdMW1;
            var20 = var4.bind(var8)(var1);
            _fun0001_ip = 56; continue _fun0001;
case 50:
            var22 = _closure1_slot0;
            var23 = _closure1_slot2;
            var1 = 15;
            var4 = var23[var1];
            var4 = var22.bind(var9)(var4);
            var8 = var4.intl;
            var4 = var8.string;
            var1 = var23[var1];
            var1 = var22.bind(var9)(var1);
            var1 = var1.t;
            var1 = var1.4yfIDg;
            var20 = var4.bind(var8)(var1);
            _fun0001_ip = 56; continue _fun0001;
case 48:
            var22 = _closure1_slot0;
            var23 = _closure1_slot2;
            var1 = 15;
            var4 = var23[var1];
            var4 = var22.bind(var9)(var4);
            var8 = var4.intl;
            var4 = var8.string;
            var1 = var23[var1];
            var1 = var22.bind(var9)(var1);
            var1 = var1.t;
            var1 = var1.IRoQXl;
            var20 = var4.bind(var8)(var1);
case 56:
            var1 = var3 != var6;
            var8 = undefined;
            if(!var1) { _fun0001_ip = 57; continue _fun0001 }
case 58:
            var4 = _closure1_slot0;
            var22 = _closure1_slot2;
            var1 = 17;
            var1 = var22[var1];
            var4 = var4.bind(var9)(var1);
            var1 = var4.getGuildBadgeImageSource;
            var8 = var1.bind(var4)(var6, var21);
case 57:
            var1 = var3 == var11;
            var6 = undefined;
            if(var1) { _fun0001_ip = 59; continue _fun0001 }
case 60:
            var21 = var11.traits;
            var1 = var3 == var21;
            var6 = undefined;
            if(var1) { _fun0001_ip = 59; continue _fun0001 }
case 61:
            var4 = var21.filter;
            var1 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = arg1;
                    var1 = null;
                    var1 = var1 != var2;
                    if(!var1) { _fun0002_ip = 62; continue _fun0002 }
case 63:
                    var3 = var2.label;
                    var2 = var3.trim;
                    var2 = var2.bind(var3)();
                    var3 = var2.length;
                    var2 = 0;
                    var1 = var3 > var2;
case 62:
                    return var1;
                }
            };
            var6 = var4.bind(var21)(var1);
case 59:
            var1 = var3 != var11;
            var4 = undefined;
            if(!var1) { _fun0001_ip = 64; continue _fun0001 }
case 65:
            var21 = _closure1_slot0;
            var25 = _closure1_slot2;
            var1 = 18;
            var1 = var25[var1];
            var24 = var21.bind(var9)(var1);
            var23 = var24.getEstablishedDate;
            var22 = _closure1_slot1;
            var1 = 19;
            var1 = var25[var1];
            var26 = var22.bind(var9)(var1);
            var22 = var26.extractTimestamp;
            var1 = var11.id;
            var22 = var22.bind(var26)(var1);
            var1 = _closure1_slot4;
            var1 = var1.locale;
            var24 = var23.bind(var24)(var22, var1);
            var1 = 15;
            var22 = var25[var1];
            var22 = var21.bind(var9)(var22);
            var23 = var22.intl;
            var22 = var23.formatToPlainString;
            var1 = var25[var1];
            var1 = var21.bind(var9)(var1);
            var1 = var1.t;
            var21 = var1.zb2Q5+;
            var1 = {};
            var1['createdAtDate'] = var24;
            var4 = var22.bind(var23)(var21, var1);
case 64:
            var1 = {};
            var28 = var1;
            var27 = var16;
            var16 = copyDataProperties(var28, var27);
            var16 = _closure1_slot5;
            var21 = var16.GUILD_PROFILE_INVITE;
            var16 = 'extendedType';
            var1[var16] = var21;
            var16 = 'acceptLabelText';
            var1[var16] = var20;
            var16 = 'onlineText';
            var1[var16] = var19;
            var16 = 'memberText';
            var1[var16] = var18;
            var16 = var3 == var11;
            var18 = undefined;
            if(var16) { _fun0001_ip = 66; continue _fun0001 }
case 67:
            var18 = var11.name;
case 66:
            var16 = 'titleText';
            var1[var16] = var18;
            var18 = var3 != var14;
            var16 = undefined;
            if(!var18) { _fun0001_ip = 68; continue _fun0001 }
case 69:
            var16 = var14;
case 68:
            var14 = 'thumbnailUrl';
            var1[var14] = var16;
            var14 = 'thumbnailText';
            var1[var14] = var15;
            var15 = var3 == var11;
            var14 = undefined;
            if(var15) { _fun0001_ip = 70; continue _fun0001 }
case 71:
            var14 = var11.description;
case 70:
            var16 = var3 != var14;
            var15 = '';
            if(!var16) { _fun0001_ip = 72; continue _fun0001 }
case 73:
            var15 = var14;
case 72:
            var14 = 'bodyText';
            var1[var14] = var15;
            var15 = true;
            var14 = 'embedCanBeTapped';
            var1[var14] = var15;
            var14 = 'canBeAccepted';
            var1[var14] = var15;
            var14 = var7.type;
            if(!(var3 == var14)) { _fun0001_ip = 74; continue _fun0001 }
case 75:
            var7 = _closure1_slot7;
            var14 = var7.GUILD;
case 74:
            var7 = 'type';
            var1[var7] = var14;
            var7 = 'inviteSplash';
            var1[var7] = var12;
            var12 = _closure1_slot0;
            var14 = _closure1_slot2;
            var7 = 20;
            var15 = var14[var7];
            var16 = var12.bind(var9)(var15);
            var15 = var16.processColorOrThrow;
            var16 = var15.bind(var16)(var17);
            var15 = 'bannerColor';
            var1[var15] = var16;
            var7 = var14[var7];
            var12 = var12.bind(var9)(var7);
            var7 = var12.processColorOrThrow;
            var12 = var7.bind(var12)(var13);
            var7 = 'bannerColorSecondary';
            var1[var7] = var12;
            if(!(var3 == var6)) { _fun0001_ip = 76; continue _fun0001 }
case 77:
            var6 = new Array(0);
case 76:
            var6 = var6.length;
            var7 = var6 > var10;
            if(var7) { _fun0001_ip = 78; continue _fun0001 }
case 79:
            var12 = var3 == var11;
            var6 = undefined;
            if(var12) { _fun0001_ip = 80; continue _fun0001 }
case 81:
            var6 = var11.gameApplicationIds;
case 80:
            if(!(var3 == var6)) { _fun0001_ip = 82; continue _fun0001 }
case 83:
            var6 = new Array(0);
case 82:
            var6 = var6.length;
            var7 = var6 > var10;
case 78:
            var6 = 'hasProfileOverflow';
            var1[var6] = var7;
            var7 = var3 != var8;
            var6 = undefined;
            if(!var7) { _fun0001_ip = 84; continue _fun0001 }
case 85:
            var7 = _closure1_slot0;
            var10 = _closure1_slot2;
            var5 = 21;
            var5 = var10[var5];
            var7 = var7.bind(var9)(var5);
            var5 = var7.getAssetUriForEmbed;
            var6 = var5.bind(var7)(var8);
case 84:
            var5 = 'badgeIconUrl';
            var1[var5] = var6;
            var5 = var2.acceptLabelGreenBackgroundColor;
            var2 = 'acceptLabelBackgroundColor';
            var1[var2] = var5;
            var2 = 'establishedText';
            var1[var2] = var4;
            var2 = 'headerText';
            var1[var2] = var3;
            return var1;
        }
    };
    var3['createGuildProfileInvite'] = var2;
    return var1;
})();