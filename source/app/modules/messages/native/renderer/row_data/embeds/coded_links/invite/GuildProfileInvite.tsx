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
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot8 = var4;
    var4 = 26;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/row_data/embeds/coded_links/invite/GuildProfileInvite.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function createGuildProfileInvite(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var7 = arg1;
            var21 = arg2;
            var2 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 6;
            var1 = var4[var1];
            var9 = undefined;
            var1 = var2.bind(var9)(var1);
            var1 = var1.bind(var9)(var21);
            var2 = var1.colors;
            var16 = var1.baseColors;
            var3 = _closure1_slot0;
            var1 = 7;
            var1 = var4[var1];
            var6 = var3.bind(var9)(var1);
            var1 = var6.buildGuildProfileFromInvite;
            var11 = var1.bind(var6)(var7);
            var1 = 8;
            var1 = var4[var1];
            var3 = var3.bind(var9)(var1);
            var1 = var3.isThemeDark;
            var3 = var1.bind(var3)(var21);
            var4 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 9;
            var1 = var6[var1];
            var1 = var4.bind(var9)(var1);
            var1 = var1.unsafe_rawColors;
            if(var3) { _fun0001_ip = 133; continue _fun0001 }
 125:
            var8 = var1.PRIMARY_160;
            _fun0001_ip = 139; continue _fun0001;
 133:
            var8 = var1.PRIMARY_660;
 139:
            var3 = null;
            var1 = var3 != var11;
            var6 = null;
            if(!var1) { _fun0001_ip = 181; continue _fun0001 }
 150:
            var4 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 10;
            var1 = var10[var1];
            var4 = var4.bind(var9)(var1);
            var1 = var4.fromGuildProfile;
            var6 = var1.bind(var4)(var11);
 181:
            var4 = _closure1_slot0;
            var12 = _closure1_slot2;
            var1 = 11;
            var1 = var12[var1];
            var10 = var4.bind(var9)(var1);
            var1 = var10.getProfilePrimaryColor;
            var10 = var1.bind(var10)(var11);
            var1 = 12;
            var1 = var12[var1];
            var4 = var4.bind(var9)(var1);
            var1 = var4.getBackgroundForProfile;
            if(!(var3 != var10)) { _fun0001_ip = 237; continue _fun0001 }
 234:
            var8 = var10;
 237:
            var8 = var1.bind(var4)(var21, var8);
            var4 = _closure1_slot3;
            var1 = 2;
            var4 = var4.bind(var9)(var8, var1);
            var10 = 0;
            var17 = var4[var10];
            var1 = 1;
            var13 = var4[var1];
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
            var4 = var3 == var11;
            var1 = undefined;
            if(var4) { _fun0001_ip = 333; continue _fun0001 }
 328:
            var1 = var11.icon;
 333:
            if(!(var3 == var1)) { _fun0001_ip = 400; continue _fun0001 }
 337:
            var4 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 14;
            var1 = var8[var1];
            var8 = var4.bind(var9)(var1);
            var4 = var8.getAcronym;
            var1 = var3 == var11;
            var12 = undefined;
            if(var1) { _fun0001_ip = 377; continue _fun0001 }
 372:
            var12 = var11.name;
 377:
            var14 = var3 != var12;
            var1 = '';
            if(!var14) { _fun0001_ip = 391; continue _fun0001 }
 388:
            var1 = var12;
 391:
            var15 = var4.bind(var8)(var1);
            var14 = undefined;
            _fun0001_ip = 467; continue _fun0001;
 400:
            var4 = _closure1_slot1;
            var8 = _closure1_slot2;
            var1 = 13;
            var1 = var8[var1];
            var8 = var4.bind(var9)(var1);
            var4 = var8.getGuildIconURL;
            var1 = {};
            var12 = var11.id;
            var1['id'] = var12;
            var12 = var11.icon;
            var1['icon'] = var12;
            var12 = true;
            var1['canAnimate'] = var12;
            var12 = 128;
            var1['size'] = var12;
            var14 = var4.bind(var8)(var1);
            var15 = undefined;
 467:
            var4 = var3 == var6;
            var1 = undefined;
            if(var4) { _fun0001_ip = 502; continue _fun0001 }
 476:
            var12 = var6.features;
            var8 = var12.has;
            var4 = _closure1_slot6;
            var4 = var4.DISCOVERABLE;
            var1 = var8.bind(var12)(var4);
 502:
            var12 = undefined;
            if(!var1) { _fun0001_ip = 626; continue _fun0001 }
 507:
            var4 = var3 == var11;
            var1 = undefined;
            if(var4) { _fun0001_ip = 522; continue _fun0001 }
 516:
            var1 = var11.customBanner;
 522:
            var1 = var3 != var1;
            var12 = undefined;
            if(!var1) { _fun0001_ip = 626; continue _fun0001 }
 531:
            var19 = _closure1_slot1;
            var20 = _closure1_slot2;
            var1 = 13;
            var1 = var20[var1];
            var8 = var19.bind(var9)(var1);
            var4 = var8.getGuildDiscoverySplashURL;
            var1 = {};
            var18 = var11.id;
            var1['id'] = var18;
            var18 = var11.customBanner;
            var1['splash'] = var18;
            var18 = 15;
            var18 = var20[var18];
            var18 = var19.bind(var9)(var18);
            var19 = var18.bind(var9)();
            var18 = 400;
            var18 = var18 * var19;
            var1['size'] = var18;
            var1 = var4.bind(var8)(var1);
            var4 = var3 != var1;
            var12 = undefined;
            if(!var4) { _fun0001_ip = 626; continue _fun0001 }
 623:
            var12 = var1;
 626:
            var1 = var3 != var24;
            if(!var1) { _fun0001_ip = 640; continue _fun0001 }
 633:
            var4 = 5;
            var1 = var24 >= var4;
 640:
            if(var1) { _fun0001_ip = 657; continue _fun0001 }
 643:
            var4 = var3 != var23;
            if(!var4) { _fun0001_ip = 654; continue _fun0001 }
 650:
            var4 = var23 > var10;
 654:
            var1 = var4;
 657:
            var19 = undefined;
            var18 = undefined;
            if(!var1) { _fun0001_ip = 816; continue _fun0001 }
 667:
            var1 = var3 != var23;
            var4 = undefined;
            if(!var1) { _fun0001_ip = 739; continue _fun0001 }
 676:
            var8 = _closure1_slot0;
            var25 = _closure1_slot2;
            var1 = 16;
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
 739:
            var8 = var3 != var24;
            var1 = undefined;
            if(!var8) { _fun0001_ip = 810; continue _fun0001 }
 748:
            var20 = _closure1_slot0;
            var25 = _closure1_slot2;
            var8 = 16;
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
 810:
            var18 = var1;
            var19 = var4;
 816:
            var1 = var3 != var11;
            var4 = null;
            if(!var1) { _fun0001_ip = 856; continue _fun0001 }
 825:
            var8 = _closure1_slot0;
            var20 = _closure1_slot2;
            var1 = 17;
            var1 = var20[var1];
            var8 = var8.bind(var9)(var1);
            var1 = var8.getGuildProfileCTAType;
            var4 = var1.bind(var8)(var11);
 856:
            var20 = _closure1_slot0;
            var1 = _closure1_slot2;
            var8 = 17;
            var1 = var1[var8];
            var1 = var20.bind(var9)(var1);
            var1 = var1.CTATypes;
            var1 = var1.IS_MEMBER;
            if(!(var1 !== var4)) { _fun0001_ip = 1203; continue _fun0001 }
 895:
            var20 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var8];
            var1 = var20.bind(var9)(var1);
            var1 = var1.CTATypes;
            var1 = var1.HAS_APPLICATION;
            if(!(var1 !== var4)) { _fun0001_ip = 1146; continue _fun0001 }
 931:
            var20 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var8];
            var1 = var20.bind(var9)(var1);
            var1 = var1.CTATypes;
            var1 = var1.APPLY_TO_JOIN;
            if(!(var1 !== var4)) { _fun0001_ip = 1089; continue _fun0001 }
 967:
            var20 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var8];
            var1 = var20.bind(var9)(var1);
            var1 = var1.CTATypes;
            var1 = var1.LURK_DISCOVERABLE;
            if(!(var1 !== var4)) { _fun0001_ip = 1029; continue _fun0001 }
 1000:
            var4 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var8];
            var1 = var4.bind(var9)(var1);
            var1 = var1.CTATypes;
            var1 = var1.JOIN_VIA_INVITE;
 1029:
            var20 = _closure1_slot0;
            var22 = _closure1_slot2;
            var1 = 16;
            var4 = var22[var1];
            var4 = var20.bind(var9)(var4);
            var8 = var4.intl;
            var4 = var8.string;
            var1 = var22[var1];
            var1 = var20.bind(var9)(var1);
            var1 = var1.t;
            var1 = var1.XpeFYm;
            var20 = var4.bind(var8)(var1);
            _fun0001_ip = 1258; continue _fun0001;
 1089:
            var22 = _closure1_slot0;
            var23 = _closure1_slot2;
            var1 = 16;
            var4 = var23[var1];
            var4 = var22.bind(var9)(var4);
            var8 = var4.intl;
            var4 = var8.string;
            var1 = var23[var1];
            var1 = var22.bind(var9)(var1);
            var1 = var1.t;
            var1 = var1.7XdMW1;
            var20 = var4.bind(var8)(var1);
            _fun0001_ip = 1258; continue _fun0001;
 1146:
            var22 = _closure1_slot0;
            var23 = _closure1_slot2;
            var1 = 16;
            var4 = var23[var1];
            var4 = var22.bind(var9)(var4);
            var8 = var4.intl;
            var4 = var8.string;
            var1 = var23[var1];
            var1 = var22.bind(var9)(var1);
            var1 = var1.t;
            var1 = var1.4yfIDg;
            var20 = var4.bind(var8)(var1);
            _fun0001_ip = 1258; continue _fun0001;
 1203:
            var22 = _closure1_slot0;
            var23 = _closure1_slot2;
            var1 = 16;
            var4 = var23[var1];
            var4 = var22.bind(var9)(var4);
            var8 = var4.intl;
            var4 = var8.string;
            var1 = var23[var1];
            var1 = var22.bind(var9)(var1);
            var1 = var1.t;
            var1 = var1.IRoQXl;
            var20 = var4.bind(var8)(var1);
 1258:
            var1 = var3 != var6;
            var8 = undefined;
            if(!var1) { _fun0001_ip = 1299; continue _fun0001 }
 1267:
            var4 = _closure1_slot0;
            var22 = _closure1_slot2;
            var1 = 18;
            var1 = var22[var1];
            var4 = var4.bind(var9)(var1);
            var1 = var4.getGuildBadgeImageSource;
            var8 = var1.bind(var4)(var6, var21);
 1299:
            var1 = var3 == var11;
            var6 = undefined;
            if(var1) { _fun0001_ip = 1340; continue _fun0001 }
 1308:
            var21 = var11.traits;
            var1 = var3 == var21;
            var6 = undefined;
            if(var1) { _fun0001_ip = 1340; continue _fun0001 }
 1323:
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
 1340:
            var1 = var3 != var11;
            var4 = undefined;
            if(!var1) { _fun0001_ip = 1481; continue _fun0001 }
 1352:
            var21 = _closure1_slot0;
            var25 = _closure1_slot2;
            var1 = 19;
            var1 = var25[var1];
            var24 = var21.bind(var9)(var1);
            var23 = var24.getEstablishedDate;
            var22 = _closure1_slot1;
            var1 = 20;
            var1 = var25[var1];
            var26 = var22.bind(var9)(var1);
            var22 = var26.extractTimestamp;
            var1 = var11.id;
            var22 = var22.bind(var26)(var1);
            var1 = _closure1_slot4;
            var1 = var1.locale;
            var24 = var23.bind(var24)(var22, var1);
            var1 = 16;
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
 1481:
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
            if(var16) { _fun0001_ip = 1557; continue _fun0001 }
 1552:
            var18 = var11.name;
 1557:
            var16 = 'titleText';
            var1[var16] = var18;
            var18 = var3 != var14;
            var16 = undefined;
            if(!var18) { _fun0001_ip = 1578; continue _fun0001 }
 1575:
            var16 = var14;
 1578:
            var14 = 'thumbnailUrl';
            var1[var14] = var16;
            var14 = 'thumbnailText';
            var1[var14] = var15;
            var15 = var3 == var11;
            var14 = undefined;
            if(var15) { _fun0001_ip = 1612; continue _fun0001 }
 1607:
            var14 = var11.description;
 1612:
            var16 = var3 != var14;
            var15 = '';
            if(!var16) { _fun0001_ip = 1626; continue _fun0001 }
 1623:
            var15 = var14;
 1626:
            var14 = 'bodyText';
            var1[var14] = var15;
            var15 = true;
            var14 = 'embedCanBeTapped';
            var1[var14] = var15;
            var14 = 'canBeAccepted';
            var1[var14] = var15;
            var14 = var7.type;
            if(!(var3 == var14)) { _fun0001_ip = 1674; continue _fun0001 }
 1664:
            var7 = _closure1_slot7;
            var14 = var7.GUILD;
 1674:
            var7 = 'type';
            var1[var7] = var14;
            var7 = 'inviteSplash';
            var1[var7] = var12;
            var12 = _closure1_slot0;
            var14 = _closure1_slot2;
            var7 = 21;
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
            if(!(var3 == var6)) { _fun0001_ip = 1773; continue _fun0001 }
 1769:
            var6 = new Array(0);
 1773:
            var6 = var6.length;
            var7 = var6 > var10;
            if(var7) { _fun0001_ip = 1817; continue _fun0001 }
 1785:
            var12 = var3 == var11;
            var6 = undefined;
            if(var12) { _fun0001_ip = 1800; continue _fun0001 }
 1794:
            var6 = var11.gameApplicationIds;
 1800:
            if(!(var3 == var6)) { _fun0001_ip = 1808; continue _fun0001 }
 1804:
            var6 = new Array(0);
 1808:
            var6 = var6.length;
            var7 = var6 > var10;
 1817:
            var6 = 'hasProfileOverflow';
            var1[var6] = var7;
            var7 = var3 != var8;
            var6 = undefined;
            if(!var7) { _fun0001_ip = 1868; continue _fun0001 }
 1837:
            var7 = _closure1_slot0;
            var10 = _closure1_slot2;
            var5 = 22;
            var5 = var10[var5];
            var7 = var7.bind(var9)(var5);
            var5 = var7.getAssetUriForEmbed;
            var6 = var5.bind(var7)(var8);
 1868:
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
    var3['createGuildProfileInvite'] = var4;
    var2 = function GuildProfileInvite(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var10 = var1.invite;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 23;
            var1 = var3[var1];
            var4 = undefined;
            var5 = var2.bind(var4)(var1);
            var1 = var5.useMessageRendererTheme;
            var7 = var1.bind(var5)();
            var5 = _closure1_slot1;
            var1 = 6;
            var1 = var3[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.bind(var4)(var7);
            var16 = var1.baseColors;
            var1 = 7;
            var1 = var3[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.buildGuildProfileFromInvite;
            var9 = var1.bind(var2)(var10);
            var8 = null;
            var1 = var8 != var9;
            var2 = null;
            if(!var1) { _fun0003_ip = 136; continue _fun0003 }
 105:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 10;
            var1 = var5[var1];
            var3 = var3.bind(var4)(var1);
            var1 = var3.fromGuildProfile;
            var2 = var1.bind(var3)(var9);
 136:
            var21 = var10.approximate_member_count;
            var20 = var10.approximate_presence_count;
            var3 = var8 == var9;
            var1 = undefined;
            if(var3) { _fun0003_ip = 162; continue _fun0003 }
 157:
            var1 = var9.icon;
 162:
            if(!(var8 == var1)) { _fun0003_ip = 229; continue _fun0003 }
 166:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 14;
            var1 = var5[var1];
            var5 = var3.bind(var4)(var1);
            var3 = var5.getAcronym;
            var1 = var8 == var9;
            var11 = undefined;
            if(var1) { _fun0003_ip = 206; continue _fun0003 }
 201:
            var11 = var9.name;
 206:
            var12 = var8 != var11;
            var1 = '';
            if(!var12) { _fun0003_ip = 220; continue _fun0003 }
 217:
            var1 = var11;
 220:
            var14 = var3.bind(var5)(var1);
            var13 = undefined;
            _fun0003_ip = 314; continue _fun0003;
 229:
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 13;
            var1 = var5[var1];
            var5 = var3.bind(var4)(var1);
            var3 = var5.getGuildIconURL;
            var1 = {};
            var12 = var8 == var9;
            var11 = undefined;
            if(var12) { _fun0003_ip = 271; continue _fun0003 }
 266:
            var11 = var9.id;
 271:
            var1['id'] = var11;
            var12 = var8 == var9;
            var11 = undefined;
            if(var12) { _fun0003_ip = 289; continue _fun0003 }
 284:
            var11 = var9.icon;
 289:
            var1['icon'] = var11;
            var11 = true;
            var1['canAnimate'] = var11;
            var11 = 128;
            var1['size'] = var11;
            var13 = var3.bind(var5)(var1);
            var14 = undefined;
 314:
            var3 = _closure1_slot0;
            var11 = _closure1_slot2;
            var1 = 24;
            var1 = var11[var1];
            var12 = var3.bind(var4)(var1);
            var5 = var12.useToken;
            var15 = _closure1_slot1;
            var1 = 9;
            var1 = var11[var1];
            var1 = var15.bind(var4)(var1);
            var1 = var1.colors;
            var1 = var1.BG_BASE_TERTIARY;
            var12 = var5.bind(var12)(var1);
            var1 = 11;
            var1 = var11[var1];
            var5 = var3.bind(var4)(var1);
            var1 = var5.useProfilePrimaryColor;
            var5 = var1.bind(var5)(var9, var12);
            var1 = 12;
            var1 = var11[var1];
            var3 = var3.bind(var4)(var1);
            var1 = var3.getBackgroundForProfile;
            var5 = var1.bind(var3)(var7, var5);
            var3 = _closure1_slot3;
            var1 = 2;
            var3 = var3.bind(var4)(var5, var1);
            var7 = 0;
            var15 = var3[var7];
            var1 = 1;
            var11 = var3[var1];
            var3 = var8 == var2;
            var1 = undefined;
            if(var3) { _fun0003_ip = 481; continue _fun0003 }
 455:
            var5 = var2.features;
            var3 = var5.has;
            var2 = _closure1_slot6;
            var2 = var2.DISCOVERABLE;
            var1 = var3.bind(var5)(var2);
 481:
            var12 = undefined;
            if(!var1) { _fun0003_ip = 605; continue _fun0003 }
 486:
            var2 = var8 == var9;
            var1 = undefined;
            if(var2) { _fun0003_ip = 501; continue _fun0003 }
 495:
            var1 = var9.customBanner;
 501:
            var1 = var8 != var1;
            var12 = undefined;
            if(!var1) { _fun0003_ip = 605; continue _fun0003 }
 510:
            var17 = _closure1_slot1;
            var18 = _closure1_slot2;
            var1 = 13;
            var1 = var18[var1];
            var3 = var17.bind(var4)(var1);
            var2 = var3.getGuildDiscoverySplashURL;
            var1 = {};
            var5 = var9.id;
            var1['id'] = var5;
            var5 = var9.customBanner;
            var1['splash'] = var5;
            var5 = 15;
            var5 = var18[var5];
            var5 = var17.bind(var4)(var5);
            var17 = var5.bind(var4)();
            var5 = 400;
            var5 = var5 * var17;
            var1['size'] = var5;
            var1 = var2.bind(var3)(var1);
            var2 = var8 != var1;
            var12 = undefined;
            if(!var2) { _fun0003_ip = 605; continue _fun0003 }
 602:
            var12 = var1;
 605:
            var1 = var8 != var21;
            if(!var1) { _fun0003_ip = 619; continue _fun0003 }
 612:
            var2 = 5;
            var1 = var21 >= var2;
 619:
            if(var1) { _fun0003_ip = 636; continue _fun0003 }
 622:
            var2 = var8 != var20;
            if(!var2) { _fun0003_ip = 633; continue _fun0003 }
 629:
            var2 = var20 > var7;
 633:
            var1 = var2;
 636:
            var18 = undefined;
            var17 = undefined;
            if(!var1) { _fun0003_ip = 795; continue _fun0003 }
 646:
            var1 = var8 != var20;
            var2 = undefined;
            if(!var1) { _fun0003_ip = 718; continue _fun0003 }
 655:
            var3 = _closure1_slot0;
            var22 = _closure1_slot2;
            var1 = 16;
            var5 = var22[var1];
            var5 = var3.bind(var4)(var5);
            var19 = var5.intl;
            var5 = var19.formatToPlainString;
            var1 = var22[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.t;
            var3 = var1.LC+S+v;
            var1 = {};
            var1['membersOnline'] = var20;
            var2 = var5.bind(var19)(var3, var1);
 718:
            var3 = var8 != var21;
            var1 = undefined;
            if(!var3) { _fun0003_ip = 789; continue _fun0003 }
 727:
            var5 = _closure1_slot0;
            var22 = _closure1_slot2;
            var3 = 16;
            var19 = var22[var3];
            var19 = var5.bind(var4)(var19);
            var20 = var19.intl;
            var19 = var20.formatToPlainString;
            var3 = var22[var3];
            var3 = var5.bind(var4)(var3);
            var3 = var3.t;
            var5 = var3.zRl6XV;
            var3 = {};
            var3['count'] = var21;
            var1 = var19.bind(var20)(var5, var3);
 789:
            var17 = var1;
            var18 = var2;
 795:
            var1 = var8 != var9;
            var2 = null;
            if(!var1) { _fun0003_ip = 835; continue _fun0003 }
 804:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 17;
            var1 = var5[var1];
            var3 = var3.bind(var4)(var1);
            var1 = var3.getGuildProfileCTAType;
            var2 = var1.bind(var3)(var9);
 835:
            var5 = _closure1_slot0;
            var1 = _closure1_slot2;
            var20 = 16;
            var3 = var1[var20];
            var3 = var5.bind(var4)(var3);
            var21 = var3.intl;
            var19 = var21.string;
            var3 = var1[var20];
            var3 = var5.bind(var4)(var3);
            var3 = var3.t;
            var3 = var3.eb9gDA;
            var3 = var19.bind(var21)(var3);
            var19 = 17;
            var1 = var1[var19];
            var1 = var5.bind(var4)(var1);
            var1 = var1.CTATypes;
            var1 = var1.IS_MEMBER;
            if(!(var1 !== var2)) { _fun0003_ip = 1232; continue _fun0003 }
 923:
            var5 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var19];
            var1 = var5.bind(var4)(var1);
            var1 = var1.CTATypes;
            var1 = var1.HAS_APPLICATION;
            if(!(var1 !== var2)) { _fun0003_ip = 1178; continue _fun0003 }
 959:
            var5 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var19];
            var1 = var5.bind(var4)(var1);
            var1 = var1.CTATypes;
            var1 = var1.APPLY_TO_JOIN;
            if(!(var1 !== var2)) { _fun0003_ip = 1124; continue _fun0003 }
 995:
            var5 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var19];
            var1 = var5.bind(var4)(var1);
            var1 = var1.CTATypes;
            var1 = var1.LURK_DISCOVERABLE;
            if(!(var1 !== var2)) { _fun0003_ip = 1067; continue _fun0003 }
 1028:
            var5 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var19];
            var1 = var5.bind(var4)(var1);
            var1 = var1.CTATypes;
            var1 = var1.JOIN_VIA_INVITE;
            var19 = var3;
            if(!(var1 === var2)) { _fun0003_ip = 1284; continue _fun0003 }
 1067:
            var5 = _closure1_slot0;
            var1 = _closure1_slot2;
            var2 = var1[var20];
            var2 = var5.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var1[var20];
            var1 = var5.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.XpeFYm;
            var19 = var2.bind(var3)(var1);
            _fun0003_ip = 1284; continue _fun0003;
 1124:
            var5 = _closure1_slot0;
            var1 = _closure1_slot2;
            var2 = var1[var20];
            var2 = var5.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var1[var20];
            var1 = var5.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.7XdMW1;
            var19 = var2.bind(var3)(var1);
            _fun0003_ip = 1284; continue _fun0003;
 1178:
            var5 = _closure1_slot0;
            var1 = _closure1_slot2;
            var2 = var1[var20];
            var2 = var5.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var1[var20];
            var1 = var5.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.4yfIDg;
            var19 = var2.bind(var3)(var1);
            _fun0003_ip = 1284; continue _fun0003;
 1232:
            var5 = _closure1_slot0;
            var1 = _closure1_slot2;
            var2 = var1[var20];
            var2 = var5.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var1[var20];
            var1 = var5.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.IRoQXl;
            var19 = var2.bind(var3)(var1);
 1284:
            var1 = var8 == var9;
            var5 = undefined;
            if(var1) { _fun0003_ip = 1325; continue _fun0003 }
 1293:
            var3 = var9.traits;
            var1 = var8 == var3;
            var5 = undefined;
            if(var1) { _fun0003_ip = 1325; continue _fun0003 }
 1308:
            var2 = var3.filter;
            var1 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var2 = arg1;
                    var1 = null;
                    var1 = var1 != var2;
                    if(!var1) { _fun0004_ip = 38; continue _fun0004 }
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
            var5 = var2.bind(var3)(var1);
 1325:
            var3 = _closure1_slot8;
            var2 = _closure1_slot1;
            var20 = _closure1_slot2;
            var1 = 25;
            var1 = var20[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var24 = var1;
            var23 = var16;
            var16 = copyDataProperties(var24, var23);
            var16 = _closure1_slot5;
            var20 = var16.GUILD_PROFILE_INVITE;
            var16 = 'extendedType';
            var1[var16] = var20;
            var16 = 'headerText';
            var1[var16] = var8;
            var16 = 'acceptLabelText';
            var1[var16] = var19;
            var16 = 'onlineText';
            var1[var16] = var18;
            var16 = 'memberText';
            var1[var16] = var17;
            var16 = var8 == var9;
            var17 = undefined;
            if(var16) { _fun0003_ip = 1434; continue _fun0003 }
 1429:
            var17 = var9.name;
 1434:
            var16 = 'titleText';
            var1[var16] = var17;
            var17 = var8 != var13;
            var16 = undefined;
            if(!var17) { _fun0003_ip = 1455; continue _fun0003 }
 1452:
            var16 = var13;
 1455:
            var13 = 'thumbnailUrl';
            var1[var13] = var16;
            var13 = 'thumbnailText';
            var1[var13] = var14;
            var14 = var8 == var9;
            var13 = undefined;
            if(var14) { _fun0003_ip = 1489; continue _fun0003 }
 1484:
            var13 = var9.description;
 1489:
            var16 = var8 != var13;
            var14 = '';
            if(!var16) { _fun0003_ip = 1503; continue _fun0003 }
 1500:
            var14 = var13;
 1503:
            var13 = 'bodyText';
            var1[var13] = var14;
            var14 = true;
            var13 = 'embedCanBeTapped';
            var1[var13] = var14;
            var13 = 'canBeAccepted';
            var1[var13] = var14;
            var13 = var10.type;
            if(!(var8 == var13)) { _fun0003_ip = 1551; continue _fun0003 }
 1541:
            var10 = _closure1_slot7;
            var13 = var10.GUILD;
 1551:
            var10 = 'type';
            var1[var10] = var13;
            var10 = 'inviteSplash';
            var1[var10] = var12;
            var10 = _closure1_slot0;
            var12 = _closure1_slot2;
            var6 = 21;
            var13 = var12[var6];
            var14 = var10.bind(var4)(var13);
            var13 = var14.processColorOrThrow;
            var14 = var13.bind(var14)(var15);
            var13 = 'bannerColor';
            var1[var13] = var14;
            var6 = var12[var6];
            var10 = var10.bind(var4)(var6);
            var6 = var10.processColorOrThrow;
            var10 = var6.bind(var10)(var11);
            var6 = 'bannerColorSecondary';
            var1[var6] = var10;
            if(!(var8 == var5)) { _fun0003_ip = 1650; continue _fun0003 }
 1646:
            var5 = new Array(0);
 1650:
            var5 = var5.length;
            var6 = var5 > var7;
            if(var6) { _fun0003_ip = 1694; continue _fun0003 }
 1662:
            var10 = var8 == var9;
            var5 = undefined;
            if(var10) { _fun0003_ip = 1677; continue _fun0003 }
 1671:
            var5 = var9.gameApplicationIds;
 1677:
            if(!(var8 == var5)) { _fun0003_ip = 1685; continue _fun0003 }
 1681:
            var5 = new Array(0);
 1685:
            var5 = var5.length;
            var6 = var5 > var7;
 1694:
            var5 = 'hasProfileOverflow';
            var1[var5] = var6;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['GuildProfileInvite'] = var2;
    return var1;
})();