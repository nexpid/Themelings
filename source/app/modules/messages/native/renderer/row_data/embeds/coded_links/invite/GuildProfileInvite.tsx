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
 0:
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
            if(var3) { _fun0001_ip = 133; continue _fun0001 }
 125:
            var10 = var1.PRIMARY_160;
            _fun0001_ip = 139; continue _fun0001;
 133:
            var10 = var1.PRIMARY_660;
 139:
            var3 = null;
            var1 = var3 != var11;
            var6 = null;
            if(!var1) { _fun0001_ip = 181; continue _fun0001 }
 150:
            var8 = _closure1_slot0;
            var12 = _closure1_slot2;
            var1 = 9;
            var1 = var12[var1];
            var8 = var8.bind(var9)(var1);
            var1 = var8.fromGuildProfile;
            var6 = var1.bind(var8)(var11);
 181:
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
            if(!(var3 != var12)) { _fun0001_ip = 237; continue _fun0001 }
 234:
            var10 = var12;
 237:
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
            if(var1) { _fun0001_ip = 284; continue _fun0001 }
 278:
            var24 = var11.memberCount;
 284:
            if(!(var3 == var24)) { _fun0001_ip = 294; continue _fun0001 }
 288:
            var24 = var7.approximate_member_count;
 294:
            var1 = var3 == var11;
            var23 = undefined;
            if(var1) { _fun0001_ip = 309; continue _fun0001 }
 303:
            var23 = var11.onlineCount;
 309:
            if(!(var3 == var23)) { _fun0001_ip = 319; continue _fun0001 }
 313:
            var23 = var7.approximate_presence_count;
 319:
            var8 = var3 == var11;
            var1 = undefined;
            if(var8) { _fun0001_ip = 333; continue _fun0001 }
 328:
            var1 = var11.icon;
 333:
            if(!(var3 == var1)) { _fun0001_ip = 400; continue _fun0001 }
 337:
            var8 = _closure1_slot0;
            var12 = _closure1_slot2;
            var1 = 13;
            var1 = var12[var1];
            var12 = var8.bind(var9)(var1);
            var8 = var12.getAcronym;
            var1 = var3 == var11;
            var14 = undefined;
            if(var1) { _fun0001_ip = 377; continue _fun0001 }
 372:
            var14 = var11.name;
 377:
            var15 = var3 != var14;
            var1 = '';
            if(!var15) { _fun0001_ip = 391; continue _fun0001 }
 388:
            var1 = var14;
 391:
            var15 = var8.bind(var12)(var1);
            var14 = undefined;
            _fun0001_ip = 467; continue _fun0001;
 400:
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
 467:
            var8 = var3 == var6;
            var1 = undefined;
            if(var8) { _fun0001_ip = 502; continue _fun0001 }
 476:
            var18 = var6.features;
            var12 = var18.has;
            var8 = _closure1_slot6;
            var8 = var8.DISCOVERABLE;
            var1 = var12.bind(var18)(var8);
 502:
            var12 = undefined;
            if(!var1) { _fun0001_ip = 626; continue _fun0001 }
 507:
            var8 = var3 == var11;
            var1 = undefined;
            if(var8) { _fun0001_ip = 522; continue _fun0001 }
 516:
            var1 = var11.customBanner;
 522:
            var1 = var3 != var1;
            var12 = undefined;
            if(!var1) { _fun0001_ip = 626; continue _fun0001 }
 531:
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
            if(!var8) { _fun0001_ip = 626; continue _fun0001 }
 623:
            var12 = var1;
 626:
            var1 = var3 != var24;
            if(!var1) { _fun0001_ip = 637; continue _fun0001 }
 633:
            var1 = var24 >= var4;
 637:
            if(var1) { _fun0001_ip = 654; continue _fun0001 }
 640:
            var4 = var3 != var23;
            if(!var4) { _fun0001_ip = 651; continue _fun0001 }
 647:
            var4 = var23 > var10;
 651:
            var1 = var4;
 654:
            var19 = undefined;
            var18 = undefined;
            if(!var1) { _fun0001_ip = 814; continue _fun0001 }
 664:
            var1 = var3 != var23;
            var4 = undefined;
            if(!var1) { _fun0001_ip = 736; continue _fun0001 }
 673:
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
 736:
            var8 = var3 != var24;
            var1 = undefined;
            if(!var8) { _fun0001_ip = 808; continue _fun0001 }
 745:
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
 808:
            var18 = var1;
            var19 = var4;
 814:
            var1 = var3 != var11;
            var4 = null;
            if(!var1) { _fun0001_ip = 854; continue _fun0001 }
 823:
            var8 = _closure1_slot0;
            var20 = _closure1_slot2;
            var1 = 16;
            var1 = var20[var1];
            var8 = var8.bind(var9)(var1);
            var1 = var8.getGuildProfileCTAType;
            var4 = var1.bind(var8)(var11);
 854:
            var20 = _closure1_slot0;
            var1 = _closure1_slot2;
            var8 = 16;
            var1 = var1[var8];
            var1 = var20.bind(var9)(var1);
            var1 = var1.CTATypes;
            var1 = var1.IS_MEMBER;
            if(!(var1 !== var4)) { _fun0001_ip = 1201; continue _fun0001 }
 893:
            var20 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var8];
            var1 = var20.bind(var9)(var1);
            var1 = var1.CTATypes;
            var1 = var1.HAS_APPLICATION;
            if(!(var1 !== var4)) { _fun0001_ip = 1144; continue _fun0001 }
 929:
            var20 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var8];
            var1 = var20.bind(var9)(var1);
            var1 = var1.CTATypes;
            var1 = var1.APPLY_TO_JOIN;
            if(!(var1 !== var4)) { _fun0001_ip = 1087; continue _fun0001 }
 965:
            var20 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var8];
            var1 = var20.bind(var9)(var1);
            var1 = var1.CTATypes;
            var1 = var1.LURK_DISCOVERABLE;
            if(!(var1 !== var4)) { _fun0001_ip = 1027; continue _fun0001 }
 998:
            var4 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var8];
            var1 = var4.bind(var9)(var1);
            var1 = var1.CTATypes;
            var1 = var1.JOIN_VIA_INVITE;
 1027:
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
            _fun0001_ip = 1256; continue _fun0001;
 1087:
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
            _fun0001_ip = 1256; continue _fun0001;
 1144:
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
            _fun0001_ip = 1256; continue _fun0001;
 1201:
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
 1256:
            var1 = var3 != var6;
            var8 = undefined;
            if(!var1) { _fun0001_ip = 1297; continue _fun0001 }
 1265:
            var4 = _closure1_slot0;
            var22 = _closure1_slot2;
            var1 = 17;
            var1 = var22[var1];
            var4 = var4.bind(var9)(var1);
            var1 = var4.getGuildBadgeImageSource;
            var8 = var1.bind(var4)(var6, var21);
 1297:
            var1 = var3 == var11;
            var6 = undefined;
            if(var1) { _fun0001_ip = 1338; continue _fun0001 }
 1306:
            var21 = var11.traits;
            var1 = var3 == var21;
            var6 = undefined;
            if(var1) { _fun0001_ip = 1338; continue _fun0001 }
 1321:
            var4 = var21.filter;
            var1 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = arg1;
                    var1 = null;
                    var1 = var1 != var2;
                    if(!var1) { _fun0002_ip = 38; continue _fun0002 }
 12:
                    var3 = var2.label;
                    var2 = var3.trim;
                    var2 = var2.bind(var3)();
                    var3 = var2.length;
                    var2 = 0;
                    var1 = var3 > var2;
 38:
                    return var1;
                }
            };
            var6 = var4.bind(var21)(var1);
 1338:
            var1 = var3 != var11;
            var4 = undefined;
            if(!var1) { _fun0001_ip = 1479; continue _fun0001 }
 1350:
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
 1479:
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
            if(var16) { _fun0001_ip = 1559; continue _fun0001 }
 1554:
            var18 = var11.name;
 1559:
            var16 = 'titleText';
            var1[var16] = var18;
            var18 = var3 != var14;
            var16 = undefined;
            if(!var18) { _fun0001_ip = 1580; continue _fun0001 }
 1577:
            var16 = var14;
 1580:
            var14 = 'thumbnailUrl';
            var1[var14] = var16;
            var14 = 'thumbnailText';
            var1[var14] = var15;
            var15 = var3 == var11;
            var14 = undefined;
            if(var15) { _fun0001_ip = 1614; continue _fun0001 }
 1609:
            var14 = var11.description;
 1614:
            var16 = var3 != var14;
            var15 = '';
            if(!var16) { _fun0001_ip = 1628; continue _fun0001 }
 1625:
            var15 = var14;
 1628:
            var14 = 'bodyText';
            var1[var14] = var15;
            var15 = true;
            var14 = 'embedCanBeTapped';
            var1[var14] = var15;
            var14 = 'canBeAccepted';
            var1[var14] = var15;
            var14 = var7.type;
            if(!(var3 == var14)) { _fun0001_ip = 1680; continue _fun0001 }
 1670:
            var7 = _closure1_slot7;
            var14 = var7.GUILD;
 1680:
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
            if(!(var3 == var6)) { _fun0001_ip = 1779; continue _fun0001 }
 1775:
            var6 = new Array(0);
 1779:
            var6 = var6.length;
            var7 = var6 > var10;
            if(var7) { _fun0001_ip = 1823; continue _fun0001 }
 1791:
            var12 = var3 == var11;
            var6 = undefined;
            if(var12) { _fun0001_ip = 1806; continue _fun0001 }
 1800:
            var6 = var11.gameApplicationIds;
 1806:
            if(!(var3 == var6)) { _fun0001_ip = 1814; continue _fun0001 }
 1810:
            var6 = new Array(0);
 1814:
            var6 = var6.length;
            var7 = var6 > var10;
 1823:
            var6 = 'hasProfileOverflow';
            var1[var6] = var7;
            var7 = var3 != var8;
            var6 = undefined;
            if(!var7) { _fun0001_ip = 1874; continue _fun0001 }
 1843:
            var7 = _closure1_slot0;
            var10 = _closure1_slot2;
            var5 = 21;
            var5 = var10[var5];
            var7 = var7.bind(var9)(var5);
            var5 = var7.getAssetUriForEmbed;
            var6 = var5.bind(var7)(var8);
 1874:
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