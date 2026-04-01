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
    var4 = 25;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/row_data/embeds/coded_links/invite/GuildProfileInvite.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function createGuildProfileInvite(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var10 = arg1;
            var22 = arg2;
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var8 = 5;
            var3 = var5[var8];
            var7 = undefined;
            var3 = var4.bind(var7)(var3);
            var3 = var3.bind(var7)(var22);
            var6 = var3.colors;
            var17 = var3.baseColors;
            var4 = _closure1_slot0;
            var3 = 6;
            var3 = var5[var3];
            var9 = var4.bind(var7)(var3);
            var3 = var9.buildGuildProfileFromInvite;
            var11 = var3.bind(var9)(var10);
            var3 = 7;
            var3 = var5[var3];
            var4 = var4.bind(var7)(var3);
            var3 = var4.isThemeDark;
            var4 = var3.bind(var4)(var22);
            var5 = _closure1_slot1;
            var9 = _closure1_slot2;
            var3 = 8;
            var3 = var9[var3];
            var3 = var5.bind(var7)(var3);
            var3 = var3.unsafe_rawColors;
            if(var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var12 = var3.PRIMARY_160;
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var12 = var3.PRIMARY_660;
case 4:
            var3 = null;
            var4 = var3 != var11;
            var9 = null;
            if(!var4) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var5 = _closure1_slot0;
            var13 = _closure1_slot2;
            var4 = 9;
            var4 = var13[var4];
            var5 = var5.bind(var7)(var4);
            var4 = var5.fromGuildProfile;
            var9 = var4.bind(var5)(var11);
case 5:
            var5 = _closure1_slot0;
            var14 = _closure1_slot2;
            var4 = 10;
            var4 = var14[var4];
            var13 = var5.bind(var7)(var4);
            var4 = var13.getProfilePrimaryColor;
            var13 = var4.bind(var13)(var11);
            var4 = 11;
            var4 = var14[var4];
            var5 = var5.bind(var7)(var4);
            var4 = var5.getBackgroundForProfile;
            if(!(var3 != var13)) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var12 = var13;
case 7:
            var12 = var4.bind(var5)(var22, var12);
            var5 = _closure1_slot3;
            var4 = 2;
            var12 = var5.bind(var7)(var12, var4);
            var5 = 0;
            var18 = var12[var5];
            var4 = 1;
            var14 = var12[var4];
            var4 = var3 == var11;
            var25 = undefined;
            if(var4) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var25 = var11.memberCount;
case 9:
            if(!(var3 == var25)) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var25 = var10.approximate_member_count;
case 11:
            var4 = var3 == var11;
            var24 = undefined;
            if(var4) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var24 = var11.onlineCount;
case 13:
            if(!(var3 == var24)) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var24 = var10.approximate_presence_count;
case 15:
            var12 = var3 == var11;
            var4 = undefined;
            if(var12) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var4 = var11.icon;
case 17:
            if(!(var3 == var4)) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var4 = 13;
            var4 = var13[var4];
            var13 = var12.bind(var7)(var4);
            var12 = var13.getAcronym;
            var4 = var3 == var11;
            var15 = undefined;
            if(var4) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var15 = var11.name;
case 21:
            var16 = var3 != var15;
            var4 = '';
            if(!var16) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var4 = var15;
case 23:
            var16 = var12.bind(var13)(var4);
            var15 = undefined;
            _fun0001_ip = 25; continue _fun0001;
case 19:
            var12 = _closure1_slot1;
            var13 = _closure1_slot2;
            var4 = 12;
            var4 = var13[var4];
            var13 = var12.bind(var7)(var4);
            var12 = var13.getGuildIconURL;
            var4 = {};
            var19 = var11.id;
            var4['id'] = var19;
            var19 = var11.icon;
            var4['icon'] = var19;
            var19 = true;
            var4['canAnimate'] = var19;
            var19 = 128;
            var4['size'] = var19;
            var15 = var12.bind(var13)(var4);
            var16 = undefined;
case 25:
            var12 = var3 == var9;
            var4 = undefined;
            if(var12) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var19 = var9.features;
            var13 = var19.has;
            var12 = _closure1_slot6;
            var12 = var12.DISCOVERABLE;
            var4 = var13.bind(var19)(var12);
case 26:
            var13 = undefined;
            if(!var4) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var12 = var3 == var11;
            var4 = undefined;
            if(var12) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            var4 = var11.customBanner;
case 30:
            var4 = var3 != var4;
            var13 = undefined;
            if(!var4) { _fun0001_ip = 28; continue _fun0001 }
case 32:
            var21 = _closure1_slot1;
            var23 = _closure1_slot2;
            var4 = 12;
            var4 = var23[var4];
            var19 = var21.bind(var7)(var4);
            var12 = var19.getGuildDiscoverySplashURL;
            var4 = {};
            var20 = var11.id;
            var4['id'] = var20;
            var20 = var11.customBanner;
            var4['splash'] = var20;
            var20 = 14;
            var20 = var23[var20];
            var20 = var21.bind(var7)(var20);
            var21 = var20.bind(var7)();
            var20 = 400;
            var20 = var20 * var21;
            var4['size'] = var20;
            var4 = var12.bind(var19)(var4);
            var12 = var3 != var4;
            var13 = undefined;
            if(!var12) { _fun0001_ip = 28; continue _fun0001 }
case 33:
            var13 = var4;
case 28:
            var4 = var3 != var25;
            if(!var4) { _fun0001_ip = 34; continue _fun0001 }
case 35:
            var4 = var25 >= var8;
case 34:
            if(var4) { _fun0001_ip = 36; continue _fun0001 }
case 37:
            var8 = var3 != var24;
            if(!var8) { _fun0001_ip = 38; continue _fun0001 }
case 39:
            var8 = var24 > var5;
case 38:
            var4 = var8;
case 36:
            var20 = undefined;
            var19 = undefined;
            if(!var4) { _fun0001_ip = 40; continue _fun0001 }
case 41:
            var4 = var3 != var24;
            var8 = undefined;
            if(!var4) { _fun0001_ip = 42; continue _fun0001 }
case 43:
            var12 = _closure1_slot0;
            var26 = _closure1_slot2;
            var4 = 15;
            var21 = var26[var4];
            var21 = var12.bind(var7)(var21);
            var23 = var21.intl;
            var21 = var23.formatToPlainString;
            var4 = var26[var4];
            var4 = var12.bind(var7)(var4);
            var4 = var4.t;
            var12 = var4.LC+S+m;
            var4 = {};
            var4['membersOnline'] = var24;
            var8 = var21.bind(var23)(var12, var4);
case 42:
            var12 = var3 != var25;
            var4 = undefined;
            if(!var12) { _fun0001_ip = 44; continue _fun0001 }
case 45:
            var21 = _closure1_slot0;
            var26 = _closure1_slot2;
            var12 = 15;
            var23 = var26[var12];
            var23 = var21.bind(var7)(var23);
            var24 = var23.intl;
            var23 = var24.formatToPlainString;
            var12 = var26[var12];
            var12 = var21.bind(var7)(var12);
            var12 = var12.t;
            var21 = var12.zRl6XR;
            var12 = {};
            var12['count'] = var25;
            var4 = var23.bind(var24)(var21, var12);
case 44:
            var19 = var4;
            var20 = var8;
case 40:
            var4 = var3 != var11;
            var8 = null;
            if(!var4) { _fun0001_ip = 46; continue _fun0001 }
case 47:
            var12 = _closure1_slot0;
            var21 = _closure1_slot2;
            var4 = 16;
            var4 = var21[var4];
            var21 = var12.bind(var7)(var4);
            var12 = var21.getGuildProfileCTAType;
            var4 = var10.code;
            var8 = var12.bind(var21)(var11, var4);
case 46:
            var21 = _closure1_slot0;
            var4 = _closure1_slot2;
            var12 = 16;
            var4 = var4[var12];
            var4 = var21.bind(var7)(var4);
            var4 = var4.CTATypes;
            var4 = var4.IS_MEMBER;
            if(!(var4 !== var8)) { _fun0001_ip = 48; continue _fun0001 }
case 49:
            var21 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var12];
            var4 = var21.bind(var7)(var4);
            var4 = var4.CTATypes;
            var4 = var4.HAS_APPLICATION;
            if(!(var4 !== var8)) { _fun0001_ip = 50; continue _fun0001 }
case 51:
            var21 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var12];
            var4 = var21.bind(var7)(var4);
            var4 = var4.CTATypes;
            var4 = var4.APPLY_TO_JOIN;
            if(!(var4 !== var8)) { _fun0001_ip = 52; continue _fun0001 }
case 53:
            var21 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var12];
            var4 = var21.bind(var7)(var4);
            var4 = var4.CTATypes;
            var4 = var4.ACCEPT_ROLES;
            if(!(var4 !== var8)) { _fun0001_ip = 54; continue _fun0001 }
case 55:
            var21 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var12];
            var4 = var21.bind(var7)(var4);
            var4 = var4.CTATypes;
            var4 = var4.LURK_DISCOVERABLE;
            if(!(var4 !== var8)) { _fun0001_ip = 56; continue _fun0001 }
case 57:
            var8 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var12];
            var4 = var8.bind(var7)(var4);
            var4 = var4.CTATypes;
            var4 = var4.JOIN_VIA_INVITE;
case 56:
            var21 = _closure1_slot0;
            var23 = _closure1_slot2;
            var4 = 15;
            var8 = var23[var4];
            var8 = var21.bind(var7)(var8);
            var12 = var8.intl;
            var8 = var12.string;
            var4 = var23[var4];
            var4 = var21.bind(var7)(var4);
            var4 = var4.t;
            var4 = var4.XpeFYr;
            var21 = var8.bind(var12)(var4);
            _fun0001_ip = 58; continue _fun0001;
case 54:
            var23 = _closure1_slot0;
            var24 = _closure1_slot2;
            var4 = 15;
            var8 = var24[var4];
            var8 = var23.bind(var7)(var8);
            var12 = var8.intl;
            var8 = var12.string;
            var4 = var24[var4];
            var4 = var23.bind(var7)(var4);
            var4 = var4.t;
            var4 = var4.MMlhsr;
            var21 = var8.bind(var12)(var4);
            _fun0001_ip = 58; continue _fun0001;
case 52:
            var23 = _closure1_slot0;
            var24 = _closure1_slot2;
            var4 = 15;
            var8 = var24[var4];
            var8 = var23.bind(var7)(var8);
            var12 = var8.intl;
            var8 = var12.string;
            var4 = var24[var4];
            var4 = var23.bind(var7)(var4);
            var4 = var4.t;
            var4 = var4["7XdMW2"];
            var21 = var8.bind(var12)(var4);
            _fun0001_ip = 58; continue _fun0001;
case 50:
            var23 = _closure1_slot0;
            var24 = _closure1_slot2;
            var4 = 15;
            var8 = var24[var4];
            var8 = var23.bind(var7)(var8);
            var12 = var8.intl;
            var8 = var12.string;
            var4 = var24[var4];
            var4 = var23.bind(var7)(var4);
            var4 = var4.t;
            var4 = var4["4yfIDk"];
            var21 = var8.bind(var12)(var4);
            _fun0001_ip = 58; continue _fun0001;
case 48:
            var23 = _closure1_slot0;
            var24 = _closure1_slot2;
            var4 = 15;
            var8 = var24[var4];
            var8 = var23.bind(var7)(var8);
            var12 = var8.intl;
            var8 = var12.string;
            var4 = var24[var4];
            var4 = var23.bind(var7)(var4);
            var4 = var4.t;
            var4 = var4.IRoQXr;
            var21 = var8.bind(var12)(var4);
case 58:
            var4 = var3 != var9;
            var12 = undefined;
            if(!var4) { _fun0001_ip = 59; continue _fun0001 }
case 60:
            var8 = _closure1_slot0;
            var23 = _closure1_slot2;
            var4 = 17;
            var4 = var23[var4];
            var8 = var8.bind(var7)(var4);
            var4 = var8.getGuildBadgeImageSource;
            var12 = var4.bind(var8)(var9, var22);
case 59:
            var4 = var3 == var11;
            var9 = undefined;
            if(var4) { _fun0001_ip = 61; continue _fun0001 }
case 62:
            var22 = var11.traits;
            var4 = var3 == var22;
            var9 = undefined;
            if(var4) { _fun0001_ip = 61; continue _fun0001 }
case 63:
            var8 = var22.filter;
            var4 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = arg1;
                    var1 = null;
                    var1 = var1 != var2;
                    if(!var1) { _fun0002_ip = 64; continue _fun0002 }
case 65:
                    var3 = var2.label;
                    var2 = var3.trim;
                    var2 = var2.bind(var3)();
                    var3 = var2.length;
                    var2 = 0;
                    var1 = var3 > var2;
case 64:
                    return var1;
                }
            };
            var9 = var8.bind(var22)(var4);
case 61:
            var4 = var3 != var11;
            var8 = undefined;
            if(!var4) { _fun0001_ip = 66; continue _fun0001 }
case 67:
            var22 = _closure1_slot0;
            var26 = _closure1_slot2;
            var4 = 18;
            var4 = var26[var4];
            var25 = var22.bind(var7)(var4);
            var24 = var25.getEstablishedDate;
            var23 = _closure1_slot1;
            var4 = 19;
            var4 = var26[var4];
            var27 = var23.bind(var7)(var4);
            var23 = var27.extractTimestamp;
            var4 = var11.id;
            var23 = var23.bind(var27)(var4);
            var4 = _closure1_slot4;
            var4 = var4.locale;
            var25 = var24.bind(var25)(var23, var4);
            var4 = 15;
            var23 = var26[var4];
            var23 = var22.bind(var7)(var23);
            var24 = var23.intl;
            var23 = var24.formatToPlainString;
            var4 = var26[var4];
            var4 = var22.bind(var7)(var4);
            var4 = var4.t;
            var22 = var4.zb2Q56;
            var4 = {};
            var4['createdAtDate'] = var25;
            var8 = var23.bind(var24)(var22, var4);
case 66:
            var4 = var10.roles;
            var22 = var3 != var4;
            var4 = undefined;
            if(!var22) { _fun0001_ip = 68; continue _fun0001 }
case 69:
            var22 = var10.roles;
            var22 = var22.length;
            var22 = var22 > var5;
            var4 = undefined;
            if(!var22) { _fun0001_ip = 68; continue _fun0001 }
case 70:
            var22 = var10.guild;
            var22 = var3 != var22;
            var4 = undefined;
            if(!var22) { _fun0001_ip = 68; continue _fun0001 }
case 71:
            var22 = var10.guild;
            var22 = var22.id;
            var _closure2_slot0 = var22;
            var29 = var10.roles;
            var24 = new Array(0);
            var30 = var24;
            var28 = 0;
            var22 = arraySpread(var30, var29, var28);
            var23 = var24.sort;
            var25 = _closure1_slot0;
            var26 = _closure1_slot2;
            var22 = 20;
            var22 = var26[var22];
            var22 = var25.bind(var7)(var22);
            var22 = var22.sortInviteRoles;
            var23 = var23.bind(var24)(var22);
            var22 = var23.map;
            var1 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var4 = arg1;
                    var2 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 20;
                    var1 = var7[var1];
                    var6 = undefined;
                    var8 = var2.bind(var6)(var1);
                    var5 = var8.inviteRoleToDisplayData;
                    var1 = _closure2_slot0;
                    var5 = var5.bind(var8)(var1, var4);
                    var1 = 21;
                    var1 = var7[var1];
                    var2 = var2.bind(var6)(var1);
                    var1 = var2.getRoleIconData;
                    var7 = 16;
                    var1 = var1.bind(var2)(var5, var7);
                    var8 = null;
                    if(!(var8 == var1)) { _fun0003_ip = 72; continue _fun0003 }
case 73:
                    var1 = {};
case 72:
                    var10 = var1.customIconSrc;
                    var9 = var1.unicodeEmoji;
                    var2 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 22;
                    var1 = var5[var1];
                    var5 = var2.bind(var6)(var1);
                    var2 = var5.int2hex;
                    var11 = var4.color;
                    var12 = var8 != var11;
                    var1 = 0;
                    if(!var12) { _fun0003_ip = 74; continue _fun0003 }
case 75:
                    var1 = var11;
case 74:
                    var5 = var2.bind(var5)(var1);
                    if(!(var8 == var10)) { _fun0003_ip = 76; continue _fun0003 }
case 77:
                    var1 = var8 != var9;
                    var2 = undefined;
                    if(!var1) { _fun0003_ip = 78; continue _fun0003 }
case 76:
                    var1 = {};
                    var1['source'] = var10;
                    var10 = var8 == var9;
                    var8 = undefined;
                    if(var10) { _fun0003_ip = 79; continue _fun0003 }
case 80:
                    var8 = var9.surrogates;
case 79:
                    var1['unicodeEmoji'] = var8;
                    var8 = var4.name;
                    var1['name'] = var8;
                    var1['size'] = var7;
                    var8 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var7 = 15;
                    var9 = var11[var7];
                    var9 = var8.bind(var6)(var9);
                    var10 = var9.intl;
                    var9 = var10.formatToPlainString;
                    var7 = var11[var7];
                    var7 = var8.bind(var6)(var7);
                    var7 = var7.t;
                    var8 = var7["9+YWrE"];
                    var7 = {};
                    var11 = var4.name;
                    var7['name'] = var11;
                    var7 = var9.bind(var10)(var8, var7);
                    var1['alt'] = var7;
                    var2 = var1;
case 78:
                    var1 = {};
                    var7 = var4.id;
                    var1['id'] = var7;
                    var4 = var4.name;
                    var1['name'] = var4;
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 23;
                    var3 = var7[var3];
                    var4 = var4.bind(var6)(var3);
                    var3 = var4.processColorOrThrow;
                    var3 = var3.bind(var4)(var5);
                    var1['color'] = var3;
                    var1['roleIcon'] = var2;
                    return var1;
                }
            };
            var4 = var22.bind(var23)(var1);
case 68:
            var1 = {};
            var30 = var1;
            var29 = var17;
            var17 = copyDataProperties(var30, var29);
            var17 = _closure1_slot5;
            var22 = var17.GUILD_PROFILE_INVITE;
            var17 = 'extendedType';
            var1[16] = var22;
            var17 = 'acceptLabelText';
            var1[16] = var21;
            var17 = 'onlineText';
            var1[16] = var20;
            var17 = 'memberText';
            var1[16] = var19;
            var17 = var3 == var11;
            var19 = undefined;
            if(var17) { _fun0001_ip = 81; continue _fun0001 }
case 82:
            var19 = var11.name;
case 81:
            var17 = 'titleText';
            var1[16] = var19;
            var19 = var3 != var15;
            var17 = undefined;
            if(!var19) { _fun0001_ip = 83; continue _fun0001 }
case 84:
            var17 = var15;
case 83:
            var15 = 'thumbnailUrl';
            var1[14] = var17;
            var15 = 'thumbnailText';
            var1[14] = var16;
            var16 = var3 == var11;
            var15 = undefined;
            if(var16) { _fun0001_ip = 85; continue _fun0001 }
case 86:
            var15 = var11.description;
case 85:
            var17 = var3 != var15;
            var16 = '';
            if(!var17) { _fun0001_ip = 87; continue _fun0001 }
case 88:
            var16 = var15;
case 87:
            var15 = 'bodyText';
            var1[14] = var16;
            var16 = true;
            var15 = 'embedCanBeTapped';
            var1[14] = var16;
            var15 = 'canBeAccepted';
            var1[14] = var16;
            var15 = var10.type;
            if(!(var3 == var15)) { _fun0001_ip = 89; continue _fun0001 }
case 90:
            var10 = _closure1_slot7;
            var15 = var10.GUILD;
case 89:
            var10 = 'type';
            var1[9] = var15;
            var10 = 'inviteSplash';
            var1[9] = var13;
            var13 = _closure1_slot0;
            var15 = _closure1_slot2;
            var10 = 23;
            var16 = var15[var10];
            var17 = var13.bind(var7)(var16);
            var16 = var17.processColorOrThrow;
            var17 = var16.bind(var17)(var18);
            var16 = 'bannerColor';
            var1[15] = var17;
            var10 = var15[var10];
            var13 = var13.bind(var7)(var10);
            var10 = var13.processColorOrThrow;
            var13 = var10.bind(var13)(var14);
            var10 = 'bannerColorSecondary';
            var1[9] = var13;
            if(!(var3 == var9)) { _fun0001_ip = 91; continue _fun0001 }
case 92:
            var9 = new Array(0);
case 91:
            var9 = var9.length;
            var10 = var9 > var5;
            if(var10) { _fun0001_ip = 93; continue _fun0001 }
case 94:
            var13 = var3 == var11;
            var9 = undefined;
            if(var13) { _fun0001_ip = 95; continue _fun0001 }
case 96:
            var9 = var11.gameApplicationIds;
case 95:
            if(!(var3 == var9)) { _fun0001_ip = 97; continue _fun0001 }
case 98:
            var9 = new Array(0);
case 97:
            var9 = var9.length;
            var10 = var9 > var5;
case 93:
            var9 = 'hasProfileOverflow';
            var1[8] = var10;
            var9 = var3 != var12;
            var10 = undefined;
            if(!var9) { _fun0001_ip = 99; continue _fun0001 }
case 100:
            var11 = _closure1_slot0;
            var13 = _closure1_slot2;
            var9 = 24;
            var9 = var13[var9];
            var11 = var11.bind(var7)(var9);
            var9 = var11.getAssetUriForEmbed;
            var10 = var9.bind(var11)(var12);
case 99:
            var9 = 'badgeIconUrl';
            var1[8] = var10;
            var9 = var6.acceptLabelGreenBackgroundColor;
            var6 = 'acceptLabelBackgroundColor';
            var1[5] = var9;
            var6 = 'establishedText';
            var1[5] = var8;
            var6 = 'headerText';
            var1[5] = var3;
            var6 = 'roles';
            var1[5] = var4;
            var6 = var3 != var4;
            var3 = undefined;
            if(!var6) { _fun0001_ip = 101; continue _fun0001 }
case 102:
            var4 = var4.length;
            var4 = var4 > var5;
            var3 = undefined;
            if(!var4) { _fun0001_ip = 101; continue _fun0001 }
case 103:
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 15;
            var4 = var8[var2];
            var4 = var6.bind(var7)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var2 = var8[var2];
            var2 = var6.bind(var7)(var2);
            var2 = var2.t;
            var2 = var2.stcSfI;
            var3 = var4.bind(var5)(var2);
case 101:
            var2 = 'rolesHeadingText';
            var1[1] = var3;
            return var1;
        }
    };
    var3['createGuildProfileInvite'] = var2;
    return var1;
})();