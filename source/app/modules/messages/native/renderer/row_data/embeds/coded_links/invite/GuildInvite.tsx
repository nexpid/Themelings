// app/modules/messages/native/renderer/row_data/embeds/coded_links/invite/GuildInvite.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var8 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var4 = function GuildInviteDisabled(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var2 = var2.invite;
            var _closure2_slot0 = var2;
            var4 = undefined;
            var _closure2_slot2 = var4;
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 14;
            var3 = var8[var3];
            var7 = var6.bind(var4)(var3);
            var3 = var7.useMessageRendererTheme;
            var7 = var3.bind(var7)();
            var3 = 12;
            var3 = var8[var3];
            var6 = var6.bind(var4)(var3);
            var3 = var6.useEmbedThemeColors;
            var3 = var3.bind(var6)(var7);
            var6 = var3.colors;
            var10 = var3.baseColors;
            var9 = _closure1_slot3;
            var8 = var9.useMemo;
            var3 = var2.guild;
            var7 = new Array(1);
            var7[0] = var3;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = _closure2_slot0;
                    var3 = var1.guild;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0002_ip = 66; continue _fun0002 }
 21:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 22;
                    var4 = var4[var3];
                    var3 = undefined;
                    var4 = var5.bind(var3)(var4);
                    var3 = var4.fromInviteGuild;
                    var2 = _closure2_slot0;
                    var2 = var2.guild;
                    var1 = var3.bind(var4)(var2);
 66:
                    return var1;
                }
            };
            var12 = var8.bind(var9)(var3, var7);
            var _closure2_slot1 = var12;
            var2 = var2.channel;
            var9 = null;
            var3 = var9 == var2;
            var11 = undefined;
            if(var3) { _fun0001_ip = 146; continue _fun0001 }
 141:
            var11 = var2.id;
 146:
            _closure2_slot2 = var11;
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 26;
            var2 = var7[var2];
            var8 = var3.bind(var4)(var2);
            var7 = var8.useStateFromStores;
            var2 = _closure1_slot9;
            var3 = new Array(2);
            var3[0] = var2;
            var2 = _closure1_slot10;
            var3[1] = var2;
            var2 = new Array(2);
            var2[0] = var12;
            var2[1] = var11;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    if(!(var1 == var3)) { _fun0003_ip = 64; continue _fun0003 }
 13:
                    var4 = _closure1_slot10;
                    var3 = var4.getGuild;
                    var7 = _closure1_slot9;
                    var6 = var7.getChannel;
                    var5 = _closure2_slot2;
                    var5 = var6.bind(var7)(var5);
                    var6 = var1 == var5;
                    var1 = undefined;
                    if(var6) { _fun0003_ip = 57; continue _fun0003 }
 52:
                    var1 = var5.guild_id;
 57:
                    var1 = var3.bind(var4)(var1);
                    _fun0003_ip = 68; continue _fun0003;
 64:
                    var1 = _closure2_slot1;
 68:
                    return var1;
                }
            };
            var11 = var7.bind(var8)(var3, var1, var2);
            var1 = var9 != var11;
            var8 = undefined;
            if(!var1) { _fun0001_ip = 244; continue _fun0001 }
 228:
            var3 = _closure1_slot6;
            var2 = 48;
            var1 = false;
            var8 = var3.bind(var4)(var11, var2, var1);
 244:
            var1 = var9 != var11;
            var7 = undefined;
            if(!var1) { _fun0001_ip = 262; continue _fun0001 }
 253:
            var1 = _closure1_slot7;
            var7 = var1.bind(var4)(var11);
 262:
            var3 = _closure1_slot19;
            var15 = _closure1_slot1;
            var16 = _closure1_slot2;
            var1 = 15;
            var1 = var16[var1];
            var2 = var15.bind(var4)(var1);
            var1 = {};
            var20 = var1;
            var19 = var10;
            var10 = copyDataProperties(var20, var19);
            var10 = _closure1_slot12;
            var12 = var10.GUILD_INVITE_DISABLED;
            var10 = 'extendedType';
            var1[var10] = var12;
            var13 = _closure1_slot0;
            var10 = 13;
            var12 = var16[var10];
            var12 = var13.bind(var4)(var12);
            var17 = var12.intl;
            var14 = var17.string;
            var12 = var16[var10];
            var12 = var13.bind(var4)(var12);
            var12 = var12.t;
            var12 = var12.Hyx2Fx;
            var14 = var14.bind(var17)(var12);
            var12 = var14.toUpperCase;
            var14 = var12.bind(var14)();
            var12 = 'headerText';
            var1[var12] = var14;
            var12 = var16[var10];
            var12 = var13.bind(var4)(var12);
            var17 = var12.intl;
            var14 = var17.string;
            var12 = var16[var10];
            var12 = var13.bind(var4)(var12);
            var12 = var12.t;
            var12 = var12.tQ4AnJ;
            var14 = var14.bind(var17)(var12);
            var12 = 'titleText';
            var1[var12] = var14;
            var12 = 16;
            var12 = var16[var12];
            var14 = var13.bind(var4)(var12);
            var13 = var14.processColorOrThrow;
            var12 = 17;
            var12 = var16[var12];
            var12 = var15.bind(var4)(var12);
            var12 = var12.unsafe_rawColors;
            var12 = var12.RED_345;
            var13 = var13.bind(var14)(var12);
            var12 = 'titleColor';
            var1[var12] = var13;
            var13 = var9 == var11;
            var12 = undefined;
            if(var13) { _fun0001_ip = 509; continue _fun0001 }
 504:
            var12 = var11.name;
 509:
            if(!(var9 == var12)) { _fun0001_ip = 565; continue _fun0001 }
 513:
            var15 = _closure1_slot0;
            var11 = _closure1_slot2;
            var13 = var11[var10];
            var13 = var15.bind(var4)(var13);
            var14 = var13.intl;
            var13 = var14.string;
            var11 = var11[var10];
            var11 = var15.bind(var4)(var11);
            var11 = var11.t;
            var11 = var11.wBceYG;
            var12 = var13.bind(var14)(var11);
 565:
            var11 = 'guildName';
            var1[var11] = var12;
            var11 = _closure1_slot0;
            var14 = _closure1_slot2;
            var12 = var14[var10];
            var12 = var11.bind(var4)(var12);
            var15 = var12.intl;
            var13 = var15.string;
            var12 = var14[var10];
            var12 = var11.bind(var4)(var12);
            var12 = var12.t;
            var12 = var12.x+XpjI;
            var13 = var13.bind(var15)(var12);
            var12 = 'subtitle';
            var1[var12] = var13;
            var12 = var14[var10];
            var12 = var11.bind(var4)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var10 = var14[var10];
            var10 = var11.bind(var4)(var10);
            var10 = var10.t;
            var10 = var10.4FlZq6;
            var12 = var12.bind(var13)(var10);
            var10 = 'helpCenterArticleLabel';
            var1[var10] = var12;
            var13 = _closure1_slot1;
            var10 = 23;
            var10 = var14[var10];
            var15 = var13.bind(var4)(var10);
            var12 = var15.getArticleURL;
            var10 = _closure1_slot13;
            var10 = var10.INVITE_DISABLED;
            var12 = var12.bind(var15)(var10);
            var10 = 'helpCenterArticleURL';
            var1[var10] = var12;
            var10 = 'guildIcon';
            var1[var10] = var8;
            var10 = 24;
            var10 = var14[var10];
            var12 = var11.bind(var4)(var10);
            var11 = var12.getAssetUriForEmbed;
            var10 = 25;
            var10 = var14[var10];
            var10 = var13.bind(var4)(var10);
            var11 = var11.bind(var12)(var10);
            var10 = 'thumbnailUrl';
            var1[var10] = var11;
            var9 = var9 != var8;
            var8 = undefined;
            if(var9) { _fun0001_ip = 803; continue _fun0001 }
 800:
            var8 = var7;
 803:
            var7 = 'thumbnailText';
            var1[var7] = var8;
            var7 = var6.subtitleColor;
            var6 = 'subtitleColor';
            var1[var6] = var7;
            var5 = _closure1_slot18;
            var6 = var5.GUILD;
            var5 = 'type';
            var1[var5] = var6;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot20 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var9 = var7[var1];
    var5 = native4;
    var1 = undefined;
    var5 = var5.bind(var1)(var9);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.Image;
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.createChannelRecordFromInvite;
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var9 = var5.getGuildIconURL;
    var _closure1_slot6 = var9;
    var5 = var5.getGuildAcronym;
    var _closure1_slot7 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot8 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot9 = var5;
    var5 = 6;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot10 = var5;
    var5 = 7;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot11 = var5;
    var5 = 8;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.CodedLinkExtendedType;
    var _closure1_slot12 = var5;
    var5 = 9;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.HelpdeskArticles;
    var _closure1_slot13 = var8;
    var8 = var5.ChannelTypes;
    var _closure1_slot14 = var8;
    var8 = var5.GuildFeatures;
    var _closure1_slot15 = var8;
    var5 = var5.AbortCodes;
    var _closure1_slot16 = var5;
    var5 = 10;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.InviteTargetTypes;
    var _closure1_slot17 = var8;
    var5 = var5.InviteTypes;
    var _closure1_slot18 = var5;
    var5 = 11;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.jsx;
    var _closure1_slot19 = var5;
    var5 = 36;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/messages/native/renderer/row_data/embeds/coded_links/invite/GuildInvite.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function createResolvingGuildInvite(arg1) {
        var2 = _closure1_slot1;
        var10 = _closure1_slot2;
        var1 = 12;
        var1 = var10[var1];
        var9 = undefined;
        var2 = var2.bind(var9)(var1);
        var1 = arg1;
        var1 = var2.bind(var9)(var1);
        var4 = var1.colors;
        var11 = var1.baseColors;
        var1 = {};
        var8 = _closure1_slot0;
        var5 = 13;
        var6 = var10[var5];
        var6 = var8.bind(var9)(var6);
        var7 = var6.intl;
        var6 = var7.string;
        var5 = var10[var5];
        var5 = var8.bind(var9)(var5);
        var5 = var5.t;
        var5 = var5.N/g9Z2;
        var6 = var6.bind(var7)(var5);
        var5 = var6.toUpperCase;
        var5 = var5.bind(var6)();
        var1['headerText'] = var5;
        var5 = var4.resolvingGradientEnd;
        var1['resolvingGradientEnd'] = var5;
        var4 = var4.resolvingGradientStart;
        var1['resolvingGradientStart'] = var4;
        var3 = _closure1_slot18;
        var3 = var3.GUILD;
        var1['type'] = var3;
        var12 = var1;
        var2 = copyDataProperties(var12, var11);
        return var1;
    };
    var3['createResolvingGuildInvite'] = var5;
    var5 = function GuildInviteResolving() {
        var11 = _closure1_slot0;
        var12 = _closure1_slot2;
        var1 = 14;
        var1 = var12[var1];
        var4 = undefined;
        var2 = var11.bind(var4)(var1);
        var1 = var2.useMessageRendererTheme;
        var3 = var1.bind(var2)();
        var1 = 12;
        var1 = var12[var1];
        var2 = var11.bind(var4)(var1);
        var1 = var2.useEmbedThemeColors;
        var1 = var1.bind(var2)(var3);
        var7 = var1.colors;
        var13 = var1.baseColors;
        var3 = _closure1_slot19;
        var2 = _closure1_slot1;
        var1 = 15;
        var1 = var12[var1];
        var2 = var2.bind(var4)(var1);
        var1 = {};
        var8 = 13;
        var9 = var12[var8];
        var9 = var11.bind(var4)(var9);
        var10 = var9.intl;
        var9 = var10.string;
        var8 = var12[var8];
        var8 = var11.bind(var4)(var8);
        var8 = var8.t;
        var8 = var8.N/g9Z2;
        var9 = var9.bind(var10)(var8);
        var8 = var9.toUpperCase;
        var8 = var8.bind(var9)();
        var1['headerText'] = var8;
        var8 = var7.resolvingGradientEnd;
        var1['resolvingGradientEnd'] = var8;
        var7 = var7.resolvingGradientStart;
        var1['resolvingGradientStart'] = var7;
        var6 = _closure1_slot18;
        var6 = var6.GUILD;
        var1['type'] = var6;
        var14 = var1;
        var5 = copyDataProperties(var14, var13);
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['GuildInviteResolving'] = var5;
    var5 = function createExpiredGuildInvite(arg1, arg2, arg3) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var12 = arg1;
            var5 = arg2;
            var8 = arg3;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 12;
            var1 = var4[var1];
            var9 = undefined;
            var1 = var3.bind(var9)(var1);
            var4 = var1.bind(var9)(var8);
            var3 = var4.colors;
            var1 = {};
            var16 = var4.baseColors;
            var17 = var1;
            var4 = copyDataProperties(var17, var16);
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var4 = 13;
            var10 = var6[var4];
            var10 = var7.bind(var9)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var6 = var6[var4];
            var6 = var7.bind(var9)(var6);
            var6 = var6.t;
            if(var5) { _fun0004_ip = 119; continue _fun0004 }
 106:
            var7 = var6.YVub5+;
            var7 = var10.bind(var11)(var7);
            _fun0004_ip = 130; continue _fun0004;
 119:
            var6 = var6.C89OLC;
            var7 = var10.bind(var11)(var6);
 130:
            var6 = var7.toUpperCase;
            var7 = var6.bind(var7)();
            var6 = 'headerText';
            var1[var6] = var7;
            var7 = _closure1_slot0;
            var13 = _closure1_slot2;
            var6 = 16;
            var6 = var13[var6];
            var10 = var7.bind(var9)(var6);
            var7 = var10.processColorOrThrow;
            var11 = _closure1_slot1;
            var6 = 17;
            var6 = var13[var6];
            var6 = var11.bind(var9)(var6);
            var6 = var6.unsafe_rawColors;
            var6 = var6.RED_400;
            var7 = var7.bind(var10)(var6);
            var6 = 'titleColor';
            var1[var6] = var7;
            if(var5) { _fun0004_ip = 396; continue _fun0004 }
 222:
            var7 = var12.author;
            var6 = null;
            var10 = var6 == var7;
            var5 = undefined;
            if(var10) { _fun0004_ip = 244; continue _fun0004 }
 239:
            var5 = var7.username;
 244:
            if(!(var6 == var5)) { _fun0004_ip = 302; continue _fun0004 }
 248:
            var10 = _closure1_slot0;
            var5 = _closure1_slot2;
            var6 = var5[var4];
            var6 = var10.bind(var9)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var5 = var5[var4];
            var5 = var10.bind(var9)(var5);
            var5 = var5.t;
            var5 = var5.SMJr+f;
            var6 = var6.bind(var7)(var5);
            _fun0004_ip = 394; continue _fun0004;
 302:
            var7 = _closure1_slot0;
            var15 = _closure1_slot2;
            var5 = var15[var4];
            var5 = var7.bind(var9)(var5);
            var11 = var5.intl;
            var10 = var11.formatToPlainString;
            var5 = var15[var4];
            var5 = var7.bind(var9)(var5);
            var5 = var5.t;
            var7 = var5.9Akp1t;
            var5 = {};
            var14 = _closure1_slot1;
            var13 = 18;
            var13 = var15[var13];
            var14 = var14.bind(var9)(var13);
            var13 = var14.getFormattedName;
            var12 = var12.author;
            var12 = var13.bind(var14)(var12);
            var5['username'] = var12;
            var6 = var10.bind(var11)(var7, var5);
 394:
            _fun0004_ip = 448; continue _fun0004;
 396:
            var11 = _closure1_slot0;
            var5 = _closure1_slot2;
            var7 = var5[var4];
            var7 = var11.bind(var9)(var7);
            var10 = var7.intl;
            var7 = var10.string;
            var5 = var5[var4];
            var5 = var11.bind(var9)(var5);
            var5 = var5.t;
            var5 = var5.F/OLvL;
            var6 = var7.bind(var10)(var5);
 448:
            var5 = 'subtitle';
            var1[var5] = var6;
            var7 = _closure1_slot0;
            var10 = _closure1_slot2;
            var5 = var10[var4];
            var5 = var7.bind(var9)(var5);
            var6 = var5.intl;
            var5 = var6.string;
            var4 = var10[var4];
            var4 = var7.bind(var9)(var4);
            var4 = var4.t;
            var4 = var4.Jhx/ub;
            var5 = var5.bind(var6)(var4);
            var4 = 'titleText';
            var1[var4] = var5;
            var6 = _closure1_slot4;
            var5 = var6.resolveAssetSource;
            var4 = 19;
            var4 = var10[var4];
            var7 = var7.bind(var9)(var4);
            var4 = var7.isThemeDark;
            var4 = var4.bind(var7)(var8);
            var8 = _closure1_slot1;
            var10 = _closure1_slot2;
            if(var4) { _fun0004_ip = 576; continue _fun0004 }
 562:
            var4 = 21;
            var4 = var10[var4];
            var4 = var8.bind(var9)(var4);
            _fun0004_ip = 588; continue _fun0004;
 576:
            var7 = 20;
            var7 = var10[var7];
            var4 = var8.bind(var9)(var7);
 588:
            var4 = var5.bind(var6)(var4);
            var5 = var4.uri;
            var4 = 'thumbnailUrl';
            var1[var4] = var5;
            var5 = var3.thumbnailBackgroundColor;
            var4 = 'thumbnailBackgroundColor';
            var1[var4] = var5;
            var4 = var3.subtitleColor;
            var3 = 'subtitleColor';
            var1[var3] = var4;
            var2 = _closure1_slot18;
            var3 = var2.GUILD;
            var2 = 'type';
            var1[var2] = var3;
            return var1;
        }
    };
    var3['createExpiredGuildInvite'] = var5;
    var5 = function GuildInviteExpired(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = arg1;
            var14 = var1.message;
            var10 = var1.isOwnInvite;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 14;
            var1 = var3[var1];
            var4 = undefined;
            var6 = var2.bind(var4)(var1);
            var1 = var6.useMessageRendererTheme;
            var11 = var1.bind(var6)();
            var1 = 12;
            var1 = var3[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.useEmbedThemeColors;
            var1 = var1.bind(var2)(var11);
            var6 = var1.colors;
            var7 = var1.baseColors;
            var1 = var14.author;
            var9 = null;
            var2 = var9 == var1;
            var8 = undefined;
            if(var2) { _fun0005_ip = 105; continue _fun0005 }
 100:
            var8 = var1.username;
 105:
            var3 = _closure1_slot19;
            var2 = _closure1_slot1;
            var12 = _closure1_slot2;
            var1 = 15;
            var1 = var12[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var19 = var1;
            var18 = var7;
            var7 = copyDataProperties(var19, var18);
            var13 = _closure1_slot0;
            var12 = _closure1_slot2;
            var7 = 13;
            var15 = var12[var7];
            var15 = var13.bind(var4)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var12 = var12[var7];
            var12 = var13.bind(var4)(var12);
            var12 = var12.t;
            if(var10) { _fun0005_ip = 201; continue _fun0005 }
 188:
            var13 = var12.YVub5+;
            var13 = var15.bind(var16)(var13);
            _fun0005_ip = 212; continue _fun0005;
 201:
            var12 = var12.C89OLC;
            var13 = var15.bind(var16)(var12);
 212:
            var12 = var13.toUpperCase;
            var13 = var12.bind(var13)();
            var12 = 'headerText';
            var1[var12] = var13;
            var13 = _closure1_slot0;
            var17 = _closure1_slot2;
            var12 = 16;
            var12 = var17[var12];
            var15 = var13.bind(var4)(var12);
            var13 = var15.processColorOrThrow;
            var16 = _closure1_slot1;
            var12 = 17;
            var12 = var17[var12];
            var12 = var16.bind(var4)(var12);
            var12 = var12.unsafe_rawColors;
            var12 = var12.RED_400;
            var13 = var13.bind(var15)(var12);
            var12 = 'titleColor';
            var1[var12] = var13;
            if(var10) { _fun0005_ip = 456; continue _fun0005 }
 304:
            if(!(var9 == var8)) { _fun0005_ip = 362; continue _fun0005 }
 308:
            var12 = _closure1_slot0;
            var8 = _closure1_slot2;
            var9 = var8[var7];
            var9 = var12.bind(var4)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var8 = var8[var7];
            var8 = var12.bind(var4)(var8);
            var8 = var8.t;
            var8 = var8.SMJr+f;
            var9 = var9.bind(var10)(var8);
            _fun0005_ip = 454; continue _fun0005;
 362:
            var10 = _closure1_slot0;
            var17 = _closure1_slot2;
            var8 = var17[var7];
            var8 = var10.bind(var4)(var8);
            var13 = var8.intl;
            var12 = var13.formatToPlainString;
            var8 = var17[var7];
            var8 = var10.bind(var4)(var8);
            var8 = var8.t;
            var10 = var8.9Akp1t;
            var8 = {};
            var16 = _closure1_slot1;
            var15 = 18;
            var15 = var17[var15];
            var16 = var16.bind(var4)(var15);
            var15 = var16.getFormattedName;
            var14 = var14.author;
            var14 = var15.bind(var16)(var14);
            var8['username'] = var14;
            var9 = var12.bind(var13)(var10, var8);
 454:
            _fun0005_ip = 508; continue _fun0005;
 456:
            var13 = _closure1_slot0;
            var8 = _closure1_slot2;
            var10 = var8[var7];
            var10 = var13.bind(var4)(var10);
            var12 = var10.intl;
            var10 = var12.string;
            var8 = var8[var7];
            var8 = var13.bind(var4)(var8);
            var8 = var8.t;
            var8 = var8.F/OLvL;
            var9 = var10.bind(var12)(var8);
 508:
            var8 = 'subtitle';
            var1[var8] = var9;
            var10 = _closure1_slot0;
            var12 = _closure1_slot2;
            var8 = var12[var7];
            var8 = var10.bind(var4)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var7 = var12[var7];
            var7 = var10.bind(var4)(var7);
            var7 = var7.t;
            var7 = var7.Jhx/ub;
            var8 = var8.bind(var9)(var7);
            var7 = 'titleText';
            var1[var7] = var8;
            var9 = _closure1_slot4;
            var8 = var9.resolveAssetSource;
            var7 = 19;
            var7 = var12[var7];
            var10 = var10.bind(var4)(var7);
            var7 = var10.isThemeDark;
            var7 = var7.bind(var10)(var11);
            var11 = _closure1_slot1;
            var12 = _closure1_slot2;
            if(var7) { _fun0005_ip = 636; continue _fun0005 }
 622:
            var7 = 21;
            var7 = var12[var7];
            var7 = var11.bind(var4)(var7);
            _fun0005_ip = 648; continue _fun0005;
 636:
            var10 = 20;
            var10 = var12[var10];
            var7 = var11.bind(var4)(var10);
 648:
            var7 = var8.bind(var9)(var7);
            var8 = var7.uri;
            var7 = 'thumbnailUrl';
            var1[var7] = var8;
            var8 = var6.thumbnailBackgroundColor;
            var7 = 'thumbnailBackgroundColor';
            var1[var7] = var8;
            var7 = var6.subtitleColor;
            var6 = 'subtitleColor';
            var1[var6] = var7;
            var5 = _closure1_slot18;
            var6 = var5.GUILD;
            var5 = 'type';
            var1[var5] = var6;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['GuildInviteExpired'] = var5;
    var5 = function createDisabledGuildInvite(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var1 = arg1;
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 12;
            var3 = var5[var3];
            var8 = undefined;
            var4 = var4.bind(var8)(var3);
            var3 = arg2;
            var4 = var4.bind(var8)(var3);
            var3 = var4.colors;
            var6 = var4.baseColors;
            var5 = var1.guild;
            var4 = null;
            if(!(var4 == var5)) { _fun0006_ip = 121; continue _fun0006 }
 58:
            var9 = _closure1_slot10;
            var7 = var9.getGuild;
            var11 = _closure1_slot9;
            var10 = var11.getChannel;
            var12 = var1.channel;
            var13 = var4 == var12;
            var5 = undefined;
            if(var13) { _fun0006_ip = 95; continue _fun0006 }
 90:
            var5 = var12.id;
 95:
            var10 = var10.bind(var11)(var5);
            var11 = var4 == var10;
            var5 = undefined;
            if(var11) { _fun0006_ip = 114; continue _fun0006 }
 109:
            var5 = var10.guild_id;
 114:
            var7 = var7.bind(var9)(var5);
            _fun0006_ip = 157; continue _fun0006;
 121:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var5 = 22;
            var5 = var10[var5];
            var9 = var9.bind(var8)(var5);
            var5 = var9.fromInviteGuild;
            var1 = var1.guild;
            var7 = var5.bind(var9)(var1);
 157:
            var1 = var4 != var7;
            var5 = undefined;
            if(!var1) { _fun0006_ip = 182; continue _fun0006 }
 166:
            var10 = _closure1_slot6;
            var9 = 48;
            var1 = false;
            var5 = var10.bind(var8)(var7, var9, var1);
 182:
            var1 = {};
            var16 = var1;
            var15 = var6;
            var6 = copyDataProperties(var16, var15);
            var6 = _closure1_slot12;
            var9 = var6.GUILD_INVITE_DISABLED;
            var6 = 'extendedType';
            var1[var6] = var9;
            var10 = _closure1_slot0;
            var13 = _closure1_slot2;
            var6 = 13;
            var9 = var13[var6];
            var9 = var10.bind(var8)(var9);
            var12 = var9.intl;
            var11 = var12.string;
            var9 = var13[var6];
            var9 = var10.bind(var8)(var9);
            var9 = var9.t;
            var9 = var9.Hyx2Fx;
            var11 = var11.bind(var12)(var9);
            var9 = var11.toUpperCase;
            var11 = var9.bind(var11)();
            var9 = 'headerText';
            var1[var9] = var11;
            var9 = var13[var6];
            var9 = var10.bind(var8)(var9);
            var12 = var9.intl;
            var11 = var12.string;
            var9 = var13[var6];
            var9 = var10.bind(var8)(var9);
            var9 = var9.t;
            var9 = var9.tQ4AnJ;
            var11 = var11.bind(var12)(var9);
            var9 = 'titleText';
            var1[var9] = var11;
            var9 = 16;
            var9 = var13[var9];
            var11 = var10.bind(var8)(var9);
            var10 = var11.processColorOrThrow;
            var12 = _closure1_slot1;
            var9 = 17;
            var9 = var13[var9];
            var9 = var12.bind(var8)(var9);
            var9 = var9.unsafe_rawColors;
            var9 = var9.RED_345;
            var10 = var10.bind(var11)(var9);
            var9 = 'titleColor';
            var1[var9] = var10;
            var9 = var4 == var7;
            var10 = undefined;
            if(var9) { _fun0006_ip = 413; continue _fun0006 }
 408:
            var10 = var7.name;
 413:
            if(!(var4 == var10)) { _fun0006_ip = 469; continue _fun0006 }
 417:
            var13 = _closure1_slot0;
            var9 = _closure1_slot2;
            var11 = var9[var6];
            var11 = var13.bind(var8)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var9 = var9[var6];
            var9 = var13.bind(var8)(var9);
            var9 = var9.t;
            var9 = var9.wBceYG;
            var10 = var11.bind(var12)(var9);
 469:
            var9 = 'guildName';
            var1[var9] = var10;
            var12 = _closure1_slot0;
            var10 = _closure1_slot2;
            var9 = var10[var6];
            var9 = var12.bind(var8)(var9);
            var13 = var9.intl;
            var11 = var13.string;
            var9 = var10[var6];
            var9 = var12.bind(var8)(var9);
            var9 = var9.t;
            var9 = var9.x+XpjI;
            var11 = var11.bind(var13)(var9);
            var9 = 'subtitle';
            var1[var9] = var11;
            var9 = var10[var6];
            var9 = var12.bind(var8)(var9);
            var11 = var9.intl;
            var9 = var11.string;
            var6 = var10[var6];
            var6 = var12.bind(var8)(var6);
            var6 = var6.t;
            var6 = var6.4FlZq6;
            var9 = var9.bind(var11)(var6);
            var6 = 'helpCenterArticleLabel';
            var1[var6] = var9;
            var9 = _closure1_slot1;
            var6 = 23;
            var6 = var10[var6];
            var10 = var9.bind(var8)(var6);
            var9 = var10.getArticleURL;
            var6 = _closure1_slot13;
            var6 = var6.INVITE_DISABLED;
            var9 = var9.bind(var10)(var6);
            var6 = 'helpCenterArticleURL';
            var1[var6] = var9;
            var6 = var4 != var5;
            var9 = undefined;
            if(!var6) { _fun0006_ip = 654; continue _fun0006 }
 651:
            var9 = var5;
 654:
            var6 = 'guildIcon';
            var1[var6] = var9;
            var9 = _closure1_slot0;
            var12 = _closure1_slot2;
            var6 = 24;
            var6 = var12[var6];
            var10 = var9.bind(var8)(var6);
            var9 = var10.getAssetUriForEmbed;
            var11 = _closure1_slot1;
            var6 = 25;
            var6 = var12[var6];
            var6 = var11.bind(var8)(var6);
            var9 = var9.bind(var10)(var6);
            var6 = 'thumbnailUrl';
            var1[var6] = var9;
            var6 = var4 != var5;
            var5 = undefined;
            if(var6) { _fun0006_ip = 749; continue _fun0006 }
 728:
            var6 = var4 != var7;
            var4 = undefined;
            if(!var6) { _fun0006_ip = 746; continue _fun0006 }
 737:
            var6 = _closure1_slot7;
            var4 = var6.bind(var8)(var7);
 746:
            var5 = var4;
 749:
            var4 = 'thumbnailText';
            var1[var4] = var5;
            var4 = var3.subtitleColor;
            var3 = 'subtitleColor';
            var1[var3] = var4;
            var2 = _closure1_slot18;
            var3 = var2.GUILD;
            var2 = 'type';
            var1[var2] = var3;
            return var1;
        }
    };
    var3['createDisabledGuildInvite'] = var5;
    var3['GuildInviteDisabled'] = var4;
    var4 = function createErroredGuildInvite(arg1, arg2, arg3) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var8 = arg3;
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 12;
            var1 = var6[var1];
            var9 = undefined;
            var1 = var3.bind(var9)(var1);
            var1 = var1.bind(var9)(var8);
            var3 = var1.colors;
            var5 = var1.baseColors;
            var7 = _closure1_slot11;
            var4 = var7.getInviteError;
            var1 = arg1;
            var10 = var4.bind(var7)(var1);
            var4 = _closure1_slot0;
            var1 = 27;
            var1 = var6[var1];
            var7 = var4.bind(var9)(var1);
            var6 = var7.getDescriptiveInviteError;
            var4 = null;
            var11 = var4 == var10;
            var1 = undefined;
            if(var11) { _fun0007_ip = 100; continue _fun0007 }
 95:
            var1 = var10.code;
 100:
            var6 = var6.bind(var7)(var1);
            var1 = {};
            var16 = var1;
            var15 = var5;
            var5 = copyDataProperties(var16, var15);
            var7 = _closure1_slot0;
            var5 = _closure1_slot2;
            var11 = 13;
            var12 = var5[var11];
            var12 = var7.bind(var9)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var5 = var5[var11];
            var5 = var7.bind(var9)(var5);
            var5 = var5.t;
            var7 = arg2;
            if(var7) { _fun0007_ip = 180; continue _fun0007 }
 167:
            var7 = var5.YVub5+;
            var7 = var12.bind(var13)(var7);
            _fun0007_ip = 191; continue _fun0007;
 180:
            var5 = var5.C89OLC;
            var7 = var12.bind(var13)(var5);
 191:
            var5 = var7.toUpperCase;
            var7 = var5.bind(var7)();
            var5 = 'headerText';
            var1[var5] = var7;
            var7 = _closure1_slot0;
            var14 = _closure1_slot2;
            var5 = 16;
            var5 = var14[var5];
            var12 = var7.bind(var9)(var5);
            var7 = var12.processColorOrThrow;
            var13 = _closure1_slot1;
            var5 = 17;
            var5 = var14[var5];
            var5 = var13.bind(var9)(var5);
            var5 = var5.unsafe_rawColors;
            var5 = var5.RED_400;
            var7 = var7.bind(var12)(var5);
            var5 = 'titleColor';
            var1[var5] = var7;
            var5 = var4 == var6;
            var7 = undefined;
            if(var5) { _fun0007_ip = 291; continue _fun0007 }
 286:
            var7 = var6.description;
 291:
            if(!(var4 == var7)) { _fun0007_ip = 312; continue _fun0007 }
 295:
            var12 = var4 == var10;
            var5 = undefined;
            if(var12) { _fun0007_ip = 309; continue _fun0007 }
 304:
            var5 = var10.message;
 309:
            var7 = var5;
 312:
            var5 = 'subtitle';
            var1[var5] = var7;
            var7 = var4 == var6;
            var5 = undefined;
            if(var7) { _fun0007_ip = 335; continue _fun0007 }
 330:
            var5 = var6.title;
 335:
            if(!(var4 == var5)) { _fun0007_ip = 391; continue _fun0007 }
 339:
            var10 = _closure1_slot0;
            var4 = _closure1_slot2;
            var6 = var4[var11];
            var6 = var10.bind(var9)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var4 = var4[var11];
            var4 = var10.bind(var9)(var4);
            var4 = var4.t;
            var4 = var4.Jhx/ub;
            var5 = var6.bind(var7)(var4);
 391:
            var4 = 'titleText';
            var1[var4] = var5;
            var6 = _closure1_slot4;
            var5 = var6.resolveAssetSource;
            var7 = _closure1_slot0;
            var10 = _closure1_slot2;
            var4 = 19;
            var4 = var10[var4];
            var7 = var7.bind(var9)(var4);
            var4 = var7.isThemeDark;
            var4 = var4.bind(var7)(var8);
            var8 = _closure1_slot1;
            var10 = _closure1_slot2;
            if(var4) { _fun0007_ip = 466; continue _fun0007 }
 452:
            var4 = 21;
            var4 = var10[var4];
            var4 = var8.bind(var9)(var4);
            _fun0007_ip = 478; continue _fun0007;
 466:
            var7 = 20;
            var7 = var10[var7];
            var4 = var8.bind(var9)(var7);
 478:
            var4 = var5.bind(var6)(var4);
            var5 = var4.uri;
            var4 = 'thumbnailUrl';
            var1[var4] = var5;
            var5 = var3.thumbnailBackgroundColor;
            var4 = 'thumbnailBackgroundColor';
            var1[var4] = var5;
            var4 = var3.subtitleColor;
            var3 = 'subtitleColor';
            var1[var3] = var4;
            var2 = _closure1_slot18;
            var3 = var2.GUILD;
            var2 = 'type';
            var1[var2] = var3;
            return var1;
        }
    };
    var3['createErroredGuildInvite'] = var4;
    var4 = function GuildInviteErrored(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var1 = arg1;
            var5 = var1.invite;
            var _closure2_slot0 = var5;
            var11 = var1.isOwnInvite;
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 14;
            var3 = var8[var3];
            var4 = undefined;
            var7 = var6.bind(var4)(var3);
            var3 = var7.useMessageRendererTheme;
            var12 = var3.bind(var7)();
            var3 = 12;
            var3 = var8[var3];
            var7 = var6.bind(var4)(var3);
            var3 = var7.useEmbedThemeColors;
            var3 = var3.bind(var7)(var12);
            var7 = var3.colors;
            var9 = var3.baseColors;
            var3 = 26;
            var3 = var8[var3];
            var10 = var6.bind(var4)(var3);
            var8 = var10.useStateFromStores;
            var3 = _closure1_slot11;
            var6 = new Array(1);
            var6[0] = var3;
            var13 = var5.code;
            var3 = new Array(1);
            var3[0] = var13;
            var2 = function() {
                var3 = _closure1_slot11;
                var2 = var3.getInviteError;
                var1 = _closure2_slot0;
                var1 = var1.code;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var13 = var8.bind(var10)(var6, var2, var3);
            var8 = null;
            var2 = var8 == var13;
            var3 = undefined;
            if(var2) { _fun0008_ip = 160; continue _fun0008 }
 155:
            var3 = var13.code;
 160:
            var2 = _closure1_slot16;
            var2 = var2.INVITES_DISABLED;
            if(!(var3 !== var2)) { _fun0008_ip = 693; continue _fun0008 }
 177:
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 27;
            var2 = var6[var2];
            var6 = var3.bind(var4)(var2);
            var3 = var6.getDescriptiveInviteError;
            var10 = var8 == var13;
            var2 = undefined;
            if(var10) { _fun0008_ip = 217; continue _fun0008 }
 212:
            var2 = var13.code;
 217:
            var10 = var3.bind(var6)(var2);
            var6 = _closure1_slot19;
            var3 = _closure1_slot1;
            var14 = _closure1_slot2;
            var2 = 15;
            var2 = var14[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var20 = var2;
            var19 = var9;
            var9 = copyDataProperties(var20, var19);
            var17 = _closure1_slot0;
            var9 = _closure1_slot2;
            var14 = 13;
            var15 = var9[var14];
            var15 = var17.bind(var4)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var9 = var9[var14];
            var9 = var17.bind(var4)(var9);
            var9 = var9.t;
            if(var11) { _fun0008_ip = 318; continue _fun0008 }
 305:
            var11 = var9.YVub5+;
            var11 = var15.bind(var16)(var11);
            _fun0008_ip = 329; continue _fun0008;
 318:
            var9 = var9.C89OLC;
            var11 = var15.bind(var16)(var9);
 329:
            var9 = var11.toUpperCase;
            var11 = var9.bind(var11)();
            var9 = 'headerText';
            var2[var9] = var11;
            var11 = _closure1_slot0;
            var17 = _closure1_slot2;
            var9 = 16;
            var9 = var17[var9];
            var15 = var11.bind(var4)(var9);
            var11 = var15.processColorOrThrow;
            var16 = _closure1_slot1;
            var9 = 17;
            var9 = var17[var9];
            var9 = var16.bind(var4)(var9);
            var9 = var9.unsafe_rawColors;
            var9 = var9.RED_400;
            var11 = var11.bind(var15)(var9);
            var9 = 'titleColor';
            var2[var9] = var11;
            var9 = var8 == var10;
            var11 = undefined;
            if(var9) { _fun0008_ip = 429; continue _fun0008 }
 424:
            var11 = var10.description;
 429:
            if(!(var8 == var11)) { _fun0008_ip = 450; continue _fun0008 }
 433:
            var15 = var8 == var13;
            var9 = undefined;
            if(var15) { _fun0008_ip = 447; continue _fun0008 }
 442:
            var9 = var13.message;
 447:
            var11 = var9;
 450:
            var9 = 'subtitle';
            var2[var9] = var11;
            var11 = var8 == var10;
            var9 = undefined;
            if(var11) { _fun0008_ip = 473; continue _fun0008 }
 468:
            var9 = var10.title;
 473:
            if(!(var8 == var9)) { _fun0008_ip = 529; continue _fun0008 }
 477:
            var13 = _closure1_slot0;
            var8 = _closure1_slot2;
            var10 = var8[var14];
            var10 = var13.bind(var4)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var8 = var8[var14];
            var8 = var13.bind(var4)(var8);
            var8 = var8.t;
            var8 = var8.Jhx/ub;
            var9 = var10.bind(var11)(var8);
 529:
            var8 = 'titleText';
            var2[var8] = var9;
            var10 = _closure1_slot4;
            var9 = var10.resolveAssetSource;
            var11 = _closure1_slot0;
            var13 = _closure1_slot2;
            var8 = 19;
            var8 = var13[var8];
            var11 = var11.bind(var4)(var8);
            var8 = var11.isThemeDark;
            var8 = var8.bind(var11)(var12);
            var12 = _closure1_slot1;
            var13 = _closure1_slot2;
            if(var8) { _fun0008_ip = 604; continue _fun0008 }
 590:
            var8 = 21;
            var8 = var13[var8];
            var8 = var12.bind(var4)(var8);
            _fun0008_ip = 616; continue _fun0008;
 604:
            var11 = 20;
            var11 = var13[var11];
            var8 = var12.bind(var4)(var11);
 616:
            var8 = var9.bind(var10)(var8);
            var9 = var8.uri;
            var8 = 'thumbnailUrl';
            var2[var8] = var9;
            var9 = var7.thumbnailBackgroundColor;
            var8 = 'thumbnailBackgroundColor';
            var2[var8] = var9;
            var8 = var7.subtitleColor;
            var7 = 'subtitleColor';
            var2[var7] = var8;
            var7 = _closure1_slot18;
            var8 = var7.GUILD;
            var7 = 'type';
            var2[var7] = var8;
            var2 = var6.bind(var4)(var3, var2);
            return var2;
 693:
            var3 = _closure1_slot19;
            var2 = _closure1_slot20;
            var1 = {};
            var1['invite'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['GuildInviteErrored'] = var4;
    var4 = function createGuildInvite(arg1, arg2, arg3) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var4 = arg1;
            var25 = arg3;
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 12;
            var1 = var5[var1];
            var6 = undefined;
            var1 = var3.bind(var6)(var1);
            var1 = var1.bind(var6)(var25);
            var9 = var1.colors;
            var16 = var1.baseColors;
            var1 = var4.guild;
            var3 = null;
            var1 = var3 != var1;
            var24 = null;
            if(!var1) { _fun0009_ip = 87; continue _fun0009 }
 63:
            var7 = _closure1_slot10;
            var5 = var7.getGuild;
            var1 = var4.guild;
            var1 = var1.id;
            var24 = var5.bind(var7)(var1);
 87:
            var5 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 28;
            var1 = var7[var1];
            var1 = var5.bind(var6)(var1);
            var1 = var1.bind(var6)(var4);
            var8 = var1.channel;
            var5 = var3 != var8;
            if(!var5) { _fun0009_ip = 134; continue _fun0009 }
 124:
            var1 = var8.isGuildVocal;
            var5 = var1.bind(var8)();
 134:
            var7 = var3 == var8;
            var1 = undefined;
            if(var7) { _fun0009_ip = 153; continue _fun0009 }
 143:
            var7 = var8.isGuildStageVoice;
            var1 = var7.bind(var8)();
 153:
            var22 = var3 != var1;
            if(!var22) { _fun0009_ip = 163; continue _fun0009 }
 160:
            var22 = var1;
 163:
            var12 = var4.target_user;
            var7 = var4.target_type;
            var34 = var4.approximate_member_count;
            var37 = var4.approximate_presence_count;
            var1 = _closure1_slot17;
            var1 = var1.STREAM;
            var11 = var7 === var1;
            var1 = var4.guild;
            var1 = var3 != var1;
            if(!var1) { _fun0009_ip = 217; continue _fun0009 }
 213:
            var1 = var3 == var24;
 217:
            var10 = true;
            var21 = true;
            if(!var1) { _fun0009_ip = 262; continue _fun0009 }
 224:
            var7 = _closure1_slot0;
            var13 = _closure1_slot2;
            var1 = 22;
            var1 = var13[var1];
            var13 = var7.bind(var6)(var1);
            var7 = var13.fromInviteGuild;
            var1 = var4.guild;
            var24 = var7.bind(var13)(var1);
            var21 = false;
 262:
            var7 = _closure1_slot0;
            var13 = _closure1_slot2;
            var1 = 29;
            var1 = var13[var1];
            var14 = var7.bind(var6)(var1);
            var13 = var14.getHeaderTextForInvite;
            var7 = {};
            var7['isVoiceChannel'] = var5;
            var1 = arg2;
            var7['isOwnInvite'] = var1;
            var1 = var3 == var24;
            var15 = undefined;
            if(var1) { _fun0009_ip = 338; continue _fun0009 }
 312:
            var18 = var24.features;
            var17 = var18.has;
            var1 = _closure1_slot15;
            var1 = var1.HUB;
            var15 = var17.bind(var18)(var1);
 338:
            var1 = var3 != var15;
            if(!var1) { _fun0009_ip = 348; continue _fun0009 }
 345:
            var1 = var15;
 348:
            var7['isHubGuild'] = var1;
            var7['isStream'] = var11;
            var7['isStage'] = var22;
            var15 = _closure1_slot0;
            var17 = _closure1_slot2;
            var1 = 30;
            var1 = var17[var1];
            var19 = var15.bind(var6)(var1);
            var18 = var19.hasFlag;
            var15 = var4.flags;
            var20 = var3 != var15;
            var1 = 0;
            var17 = 0;
            if(!var20) { _fun0009_ip = 408; continue _fun0009 }
 405:
            var17 = var15;
 408:
            var20 = _closure1_slot0;
            var23 = _closure1_slot2;
            var15 = 31;
            var15 = var23[var15];
            var15 = var20.bind(var6)(var15);
            var15 = var15.GuildInviteFlags;
            var15 = var15.IS_GUEST_INVITE;
            var15 = var18.bind(var19)(var17, var15);
            var7['isGuest'] = var15;
            var23 = var13.bind(var14)(var7);
            var7 = var3 == var24;
            var28 = undefined;
            if(var7) { _fun0009_ip = 470; continue _fun0009 }
 465:
            var28 = var24.name;
 470:
            var13 = var3 == var24;
            var7 = undefined;
            if(var13) { _fun0009_ip = 484; continue _fun0009 }
 479:
            var7 = var24.icon;
 484:
            if(!(var3 == var7)) { _fun0009_ip = 510; continue _fun0009 }
 488:
            var7 = var3 != var24;
            var26 = undefined;
            if(!var7) { _fun0009_ip = 506; continue _fun0009 }
 497:
            var7 = _closure1_slot7;
            var26 = var7.bind(var6)(var24);
 506:
            var27 = undefined;
            _fun0009_ip = 593; continue _fun0009;
 510:
            var13 = _closure1_slot1;
            var14 = _closure1_slot2;
            var7 = 32;
            var7 = var14[var7];
            var14 = var13.bind(var6)(var7);
            var13 = var14.getGuildIconURL;
            var7 = {};
            var17 = var3 == var24;
            var15 = undefined;
            if(var17) { _fun0009_ip = 552; continue _fun0009 }
 547:
            var15 = var24.id;
 552:
            var7['id'] = var15;
            var17 = var3 == var24;
            var15 = undefined;
            if(var17) { _fun0009_ip = 570; continue _fun0009 }
 565:
            var15 = var24.icon;
 570:
            var7['icon'] = var15;
            var7['canAnimate'] = var10;
            var15 = 128;
            var7['size'] = var15;
            var27 = var13.bind(var14)(var7);
            var26 = undefined;
 593:
            var13 = var3 == var24;
            var7 = undefined;
            if(var13) { _fun0009_ip = 608; continue _fun0009 }
 602:
            var7 = var24.splash;
 608:
            var13 = var3 != var7;
            var7 = undefined;
            if(!var13) { _fun0009_ip = 712; continue _fun0009 }
 617:
            var18 = _closure1_slot1;
            var19 = _closure1_slot2;
            var13 = 32;
            var13 = var19[var13];
            var15 = var18.bind(var6)(var13);
            var14 = var15.getGuildSplashURL;
            var13 = {};
            var17 = var24.id;
            var13['id'] = var17;
            var17 = var24.splash;
            var13['splash'] = var17;
            var17 = 33;
            var17 = var19[var17];
            var17 = var18.bind(var6)(var17);
            var18 = var17.bind(var6)();
            var17 = 400;
            var17 = var17 * var18;
            var13['size'] = var17;
            var13 = var14.bind(var15)(var13);
            var14 = var3 != var13;
            var7 = undefined;
            if(!var14) { _fun0009_ip = 712; continue _fun0009 }
 709:
            var7 = var13;
 712:
            if(var5) { _fun0009_ip = 1118; continue _fun0009 }
 718:
            if(!(var3 != var8)) { _fun0009_ip = 744; continue _fun0009 }
 722:
            var14 = var8.type;
            var13 = _closure1_slot14;
            var13 = var13.GUILD_STAGE_VOICE;
            if(!(var14 !== var13)) { _fun0009_ip = 1029; continue _fun0009 }
 744:
            if(!(var3 != var34)) { _fun0009_ip = 758; continue _fun0009 }
 748:
            var13 = 5;
            if(!(!(var34 >= var13))) { _fun0009_ip = 892; continue _fun0009 }
 758:
            if(!(var3 != var37)) { _fun0009_ip = 769; continue _fun0009 }
 762:
            if(!(!(var37 > var1))) { _fun0009_ip = 892; continue _fun0009 }
 769:
            var30 = var3 != var8;
            var29 = '';
            var20 = undefined;
            var19 = undefined;
            var18 = undefined;
            var17 = var28;
            var13 = var27;
            var14 = var26;
            var1 = var21;
            var15 = var29;
            if(!var30) { _fun0009_ip = 1465; continue _fun0009 }
 804:
            var32 = _closure1_slot4;
            var31 = var32.resolveAssetSource;
            var33 = _closure1_slot0;
            var35 = _closure1_slot2;
            var30 = 34;
            var30 = var35[var30];
            var33 = var33.bind(var6)(var30);
            var30 = var33.getChannelIcon;
            var30 = var30.bind(var33)(var8);
            var31 = var31.bind(var32)(var30);
            var32 = var3 == var31;
            var30 = undefined;
            if(var32) { _fun0009_ip = 865; continue _fun0009 }
 859:
            var30 = var31.uri;
 865:
            var18 = var30;
            var20 = undefined;
            var19 = undefined;
            var17 = var28;
            var13 = var27;
            var14 = var26;
            var1 = var21;
            var15 = var29;
            _fun0009_ip = 1465; continue _fun0009;
 892:
            var30 = _closure1_slot0;
            var35 = _closure1_slot2;
            var29 = 13;
            var31 = var35[var29];
            var31 = var30.bind(var6)(var31);
            var36 = var31.intl;
            var33 = var36.formatToPlainString;
            var31 = var35[var29];
            var31 = var30.bind(var6)(var31);
            var31 = var31.t;
            var32 = var31.LC+S+v;
            var31 = {};
            var31['membersOnline'] = var37;
            var20 = var33.bind(var36)(var32, var31);
            var32 = var35[var29];
            var32 = var30.bind(var6)(var32);
            var33 = var32.intl;
            var32 = var33.formatToPlainString;
            var29 = var35[var29];
            var29 = var30.bind(var6)(var29);
            var29 = var29.t;
            var30 = var29.zRl6XV;
            var29 = {};
            var29['count'] = var34;
            var19 = var32.bind(var33)(var30, var29);
            var15 = '';
            var18 = undefined;
            var17 = var28;
            var13 = var27;
            var14 = var26;
            var1 = var21;
            _fun0009_ip = 1465; continue _fun0009;
 1029:
            var31 = _closure1_slot4;
            var30 = var31.resolveAssetSource;
            var32 = _closure1_slot0;
            var33 = _closure1_slot2;
            var29 = 34;
            var29 = var33[var29];
            var32 = var32.bind(var6)(var29);
            var29 = var32.getChannelIcon;
            var29 = var29.bind(var32)(var8);
            var29 = var30.bind(var31)(var29);
            var31 = var3 == var29;
            var30 = undefined;
            if(var31) { _fun0009_ip = 1090; continue _fun0009 }
 1084:
            var30 = var29.uri;
 1090:
            var15 = '';
            var18 = var30;
            var20 = undefined;
            var19 = undefined;
            var17 = var28;
            var13 = var27;
            var14 = var26;
            var1 = var21;
            _fun0009_ip = 1465; continue _fun0009;
 1118:
            if(!var21) { _fun0009_ip = 1128; continue _fun0009 }
 1121:
            if(!(var3 != var12)) { _fun0009_ip = 1128; continue _fun0009 }
 1125:
            if(var11) { _fun0009_ip = 1217; continue _fun0009 }
 1128:
            var30 = _closure1_slot4;
            var29 = var30.resolveAssetSource;
            var31 = _closure1_slot0;
            var32 = _closure1_slot2;
            var11 = 34;
            var11 = var32[var11];
            var31 = var31.bind(var6)(var11);
            var11 = var31.getChannelIcon;
            var11 = var11.bind(var31)(var8);
            var11 = var29.bind(var30)(var11);
            var30 = var3 == var11;
            var29 = undefined;
            if(var30) { _fun0009_ip = 1189; continue _fun0009 }
 1183:
            var29 = var11.uri;
 1189:
            var15 = '';
            var18 = var29;
            var20 = undefined;
            var19 = undefined;
            var17 = var28;
            var13 = var27;
            var14 = var26;
            var1 = var21;
            _fun0009_ip = 1465; continue _fun0009;
 1217:
            var26 = _closure1_slot4;
            var21 = var26.resolveAssetSource;
            var33 = _closure1_slot1;
            var30 = _closure1_slot2;
            var11 = 32;
            var11 = var30[var11];
            var27 = var33.bind(var6)(var11);
            var11 = var27.getUserAvatarSource;
            var11 = var11.bind(var27)(var12);
            var11 = var21.bind(var26)(var11);
            var21 = var11.uri;
            var27 = _closure1_slot0;
            var11 = 13;
            var26 = var30[var11];
            var26 = var27.bind(var6)(var26);
            var31 = var26.intl;
            var29 = var31.formatToPlainString;
            var26 = var30[var11];
            var26 = var27.bind(var6)(var26);
            var26 = var26.t;
            var28 = var26.QmlLEh;
            var26 = {};
            var32 = 18;
            var32 = var30[var32];
            var33 = var33.bind(var6)(var32);
            var32 = var33.getFormattedName;
            var32 = var32.bind(var33)(var12);
            var26['name'] = var32;
            var26 = var29.bind(var31)(var28, var26);
            var28 = var30[var11];
            var28 = var27.bind(var6)(var28);
            var29 = var28.intl;
            var28 = var29.formatToPlainString;
            var11 = var30[var11];
            var11 = var27.bind(var6)(var11);
            var11 = var11.t;
            var27 = var11.u0vaDA;
            var11 = {};
            var31 = var3 == var24;
            var30 = undefined;
            if(var31) { _fun0009_ip = 1405; continue _fun0009 }
 1400:
            var30 = var24.name;
 1405:
            var11['guildName'] = var30;
            var15 = var28.bind(var29)(var27, var11);
            var29 = _closure1_slot8;
            var28 = var29.getActiveStreamForUser;
            var27 = var12.id;
            var12 = var8.getGuildId;
            var12 = var12.bind(var8)();
            var12 = var28.bind(var29)(var27, var12);
            var1 = var3 != var12;
            var20 = undefined;
            var19 = undefined;
            var18 = undefined;
            var17 = var26;
            var13 = var21;
            var14 = undefined;
 1465:
            if(var5) { _fun0009_ip = 1615; continue _fun0009 }
 1471:
            if(var1) { _fun0009_ip = 1546; continue _fun0009 }
 1474:
            var11 = var9.acceptLabelGreenColor;
            var12 = var9.acceptLabelGreenBackgroundColor;
            var26 = _closure1_slot0;
            var27 = _closure1_slot2;
            var1 = 13;
            var5 = var27[var1];
            var5 = var26.bind(var6)(var5);
            var21 = var5.intl;
            var5 = var21.string;
            var1 = var27[var1];
            var1 = var26.bind(var6)(var1);
            var1 = var1.t;
            var1 = var1.XpeFYm;
            var21 = var5.bind(var21)(var1);
            _fun0009_ip = 1707; continue _fun0009;
 1546:
            var11 = var9.acceptLabelDisabledColor;
            var12 = var9.acceptLabelDisabledBackgroundColor;
            var29 = _closure1_slot0;
            var30 = _closure1_slot2;
            var26 = 13;
            var27 = var30[var26];
            var27 = var29.bind(var6)(var27);
            var28 = var27.intl;
            var27 = var28.string;
            var26 = var30[var26];
            var26 = var29.bind(var6)(var26);
            var26 = var26.t;
            var26 = var26.cEnaW1;
            var21 = var27.bind(var28)(var26);
            _fun0009_ip = 1707; continue _fun0009;
 1615:
            var5 = var9.acceptLabelGreenColor;
            var1 = var9.acceptLabelGreenBackgroundColor;
            var29 = _closure1_slot0;
            var30 = _closure1_slot2;
            var26 = 13;
            var27 = var30[var26];
            var27 = var29.bind(var6)(var27);
            var28 = var27.intl;
            var27 = var28.string;
            var26 = var30[var26];
            var26 = var29.bind(var6)(var26);
            var26 = var26.t;
            if(var22) { _fun0009_ip = 1687; continue _fun0009 }
 1674:
            var22 = var26.gpqgam;
            var22 = var27.bind(var28)(var22);
            _fun0009_ip = 1698; continue _fun0009;
 1687:
            var26 = var26.7vb2cX;
            var22 = var27.bind(var28)(var26);
 1698:
            var21 = var22;
            var11 = var5;
            var12 = var1;
 1707:
            var1 = var3 != var24;
            var5 = undefined;
            if(!var1) { _fun0009_ip = 1748; continue _fun0009 }
 1716:
            var22 = _closure1_slot0;
            var26 = _closure1_slot2;
            var1 = 35;
            var1 = var26[var1];
            var22 = var22.bind(var6)(var1);
            var1 = var22.getGuildBadgeImageSource;
            var5 = var1.bind(var22)(var24, var25);
 1748:
            var1 = {};
            var39 = var1;
            var38 = var16;
            var16 = copyDataProperties(var39, var38);
            var16 = var3 != var23;
            var22 = undefined;
            if(!var16) { _fun0009_ip = 1779; continue _fun0009 }
 1769:
            var16 = var23.toUpperCase;
            var22 = var16.bind(var23)();
 1779:
            var16 = 'headerText';
            var1[var16] = var22;
            var22 = var9.headerColor;
            var16 = 'headerColor';
            var1[var16] = var22;
            var16 = 'acceptLabelText';
            var1[var16] = var21;
            var16 = 'onlineText';
            var1[var16] = var20;
            var16 = 'memberText';
            var1[var16] = var19;
            var16 = 'channelIcon';
            var1[var16] = var18;
            var16 = 'titleText';
            var1[var16] = var17;
            var17 = var9.titleColor;
            var16 = 'titleColor';
            var1[var16] = var17;
            var17 = var3 != var13;
            var16 = undefined;
            if(!var17) { _fun0009_ip = 1879; continue _fun0009 }
 1876:
            var16 = var13;
 1879:
            var13 = 'thumbnailUrl';
            var1[var13] = var16;
            var13 = 'thumbnailText';
            var1[var13] = var14;
            var13 = 'subtitle';
            var1[var13] = var15;
            var14 = '';
            var13 = undefined;
            if(!(var14 !== var15)) { _fun0009_ip = 1924; continue _fun0009 }
 1918:
            var13 = var9.subtitleColor;
 1924:
            var9 = 'subtitleColor';
            var1[var9] = var13;
            var9 = 'acceptLabelBackgroundColor';
            var1[var9] = var12;
            var9 = 'acceptLabelBorderColor';
            var1[var9] = var6;
            var9 = 'acceptLabelColor';
            var1[var9] = var11;
            var9 = 'embedCanBeTapped';
            var1[var9] = var10;
            var9 = 'canBeAccepted';
            var1[var9] = var10;
            var10 = var3 != var8;
            var9 = undefined;
            if(!var10) { _fun0009_ip = 1994; continue _fun0009 }
 1989:
            var9 = var8.name;
 1994:
            var8 = 'channelName';
            var1[var8] = var9;
            var8 = var4.type;
            if(!(var3 == var8)) { _fun0009_ip = 2022; continue _fun0009 }
 2012:
            var4 = _closure1_slot18;
            var8 = var4.GUILD;
 2022:
            var4 = 'type';
            var1[var4] = var8;
            var4 = 'inviteSplash';
            var1[var4] = var7;
            var4 = var3 != var5;
            var3 = undefined;
            if(!var4) { _fun0009_ip = 2082; continue _fun0009 }
 2051:
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 24;
            var2 = var7[var2];
            var4 = var4.bind(var6)(var2);
            var2 = var4.getAssetUriForEmbed;
            var3 = var2.bind(var4)(var5);
 2082:
            var2 = 'badgeIconUrl';
            var1[var2] = var3;
            return var1;
        }
    };
    var3['createGuildInvite'] = var4;
    var2 = function GuildInvite(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var1 = arg1;
            var7 = var1.invite;
            var _closure2_slot0 = var7;
            var2 = var1.isOwnInvite;
            var4 = undefined;
            var _closure2_slot1 = var4;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 14;
            var1 = var6[var1];
            var8 = var3.bind(var4)(var1);
            var1 = var8.useMessageRendererTheme;
            var23 = var1.bind(var8)();
            var1 = 12;
            var1 = var6[var1];
            var3 = var3.bind(var4)(var1);
            var1 = var3.useEmbedThemeColors;
            var1 = var1.bind(var3)(var23);
            var11 = var1.colors;
            var17 = var1.baseColors;
            var3 = var7.guild;
            var6 = null;
            var8 = var6 == var3;
            var1 = undefined;
            if(var8) { _fun0010_ip = 127; continue _fun0010 }
 122:
            var1 = var3.id;
 127:
            _closure2_slot1 = var1;
            var8 = _closure1_slot0;
            var3 = _closure1_slot2;
            var15 = 26;
            var3 = var3[var15];
            var12 = var8.bind(var4)(var3);
            var10 = var12.useStateFromStores;
            var3 = _closure1_slot10;
            var8 = new Array(1);
            var8[0] = var3;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var3 = _closure1_slot10;
                var2 = var3.getGuild;
                var1 = _closure2_slot1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var13 = var10.bind(var12)(var8, var1, var3);
            _closure2_slot2 = var13;
            var10 = _closure1_slot3;
            var8 = var10.useMemo;
            var1 = var7.guild;
            var3 = new Array(2);
            var3[0] = var1;
            var3[1] = var13;
            var1 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                    var1 = _closure2_slot2;
                    var3 = null;
                    if(!(var3 == var1)) { _fun0011_ip = 78; continue _fun0011 }
 13:
                    var1 = _closure2_slot0;
                    var1 = var1.guild;
                    var3 = var3 != var1;
                    var5 = undefined;
                    var1 = undefined;
                    if(!var3) { _fun0011_ip = 76; continue _fun0011 }
 33:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 22;
                    var3 = var6[var3];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.fromInviteGuild;
                    var3 = _closure2_slot0;
                    var3 = var3.guild;
                    var1 = var4.bind(var5)(var3);
 76:
                    _fun0011_ip = 82; continue _fun0011;
 78:
                    var1 = _closure2_slot2;
 82:
                    return var1;
                }
            };
            var3 = var8.bind(var10)(var1, var3);
            var12 = _closure1_slot3;
            var10 = var12.useMemo;
            var1 = var7.channel;
            var8 = new Array(1);
            var8[0] = var1;
            var1 = function() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                    var1 = _closure2_slot0;
                    var3 = var1.channel;
                    var1 = null;
                    var3 = var1 != var3;
                    var4 = undefined;
                    var1 = undefined;
                    if(!var3) { _fun0012_ip = 46; continue _fun0012 }
 25:
                    var3 = _closure1_slot5;
                    var2 = _closure2_slot0;
                    var2 = var2.channel;
                    var1 = var3.bind(var4)(var2);
 46:
                    return var1;
                }
            };
            var10 = var10.bind(var12)(var1, var8);
            var8 = var6 != var10;
            if(!var8) { _fun0010_ip = 279; continue _fun0010 }
 269:
            var1 = var10.isGuildVocal;
            var8 = var1.bind(var10)();
 279:
            var1 = var6 != var10;
            if(!var1) { _fun0010_ip = 296; continue _fun0010 }
 286:
            var12 = var10.isGuildStageVoice;
            var1 = var12.bind(var10)();
 296:
            var33 = var7.target_user;
            var14 = var7.target_type;
            var34 = var7.approximate_member_count;
            var37 = var7.approximate_presence_count;
            var12 = _closure1_slot17;
            var12 = var12.STREAM;
            var12 = var14 === var12;
            var16 = _closure1_slot0;
            var18 = _closure1_slot2;
            var14 = 29;
            var14 = var18[var14];
            var18 = var16.bind(var4)(var14);
            var16 = var18.getHeaderTextForInvite;
            var14 = {};
            var14['isVoiceChannel'] = var8;
            var14['isOwnInvite'] = var2;
            var2 = var6 == var3;
            var19 = undefined;
            if(var2) { _fun0010_ip = 407; continue _fun0010 }
 381:
            var21 = var3.features;
            var20 = var21.has;
            var2 = _closure1_slot15;
            var2 = var2.HUB;
            var19 = var20.bind(var21)(var2);
 407:
            var2 = var6 != var19;
            if(!var2) { _fun0010_ip = 417; continue _fun0010 }
 414:
            var2 = var19;
 417:
            var14['isHubGuild'] = var2;
            var14['isStream'] = var12;
            var14['isStage'] = var1;
            var19 = _closure1_slot0;
            var20 = _closure1_slot2;
            var2 = 30;
            var2 = var20[var2];
            var22 = var19.bind(var4)(var2);
            var21 = var22.hasFlag;
            var19 = var7.flags;
            var24 = var6 != var19;
            var2 = 0;
            var20 = 0;
            if(!var24) { _fun0010_ip = 477; continue _fun0010 }
 474:
            var20 = var19;
 477:
            var24 = _closure1_slot0;
            var25 = _closure1_slot2;
            var19 = 31;
            var19 = var25[var19];
            var19 = var24.bind(var4)(var19);
            var19 = var19.GuildInviteFlags;
            var19 = var19.IS_GUEST_INVITE;
            var19 = var21.bind(var22)(var20, var19);
            var14['isGuest'] = var19;
            var24 = var16.bind(var18)(var14);
            var14 = var6 == var3;
            var27 = undefined;
            if(var14) { _fun0010_ip = 539; continue _fun0010 }
 534:
            var27 = var3.name;
 539:
            var22 = var6 != var13;
            if(var22) { _fun0010_ip = 555; continue _fun0010 }
 546:
            var13 = var7.guild;
            var22 = var6 == var13;
 555:
            var13 = var6 == var33;
            var18 = undefined;
            if(var13) { _fun0010_ip = 569; continue _fun0010 }
 564:
            var18 = var33.id;
 569:
            _closure2_slot3 = var18;
            var19 = null;
            if(!var8) { _fun0010_ip = 598; continue _fun0010 }
 578:
            var19 = null;
            if(!var22) { _fun0010_ip = 598; continue _fun0010 }
 583:
            var19 = null;
            if(!var12) { _fun0010_ip = 598; continue _fun0010 }
 588:
            var13 = var10.getGuildId;
            var19 = var13.bind(var10)();
 598:
            _closure2_slot4 = var19;
            var14 = _closure1_slot0;
            var13 = _closure1_slot2;
            var13 = var13[var15];
            var16 = var14.bind(var4)(var13);
            var15 = var16.useStateFromStores;
            var13 = _closure1_slot8;
            var14 = new Array(1);
            var14[0] = var13;
            var13 = new Array(2);
            var13[0] = var19;
            var13[1] = var18;
            var9 = function() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                    var1 = _closure2_slot4;
                    var3 = null;
                    var1 = var3 != var1;
                    if(!var1) { _fun0013_ip = 24; continue _fun0013 }
 16:
                    var4 = _closure2_slot3;
                    var1 = var3 != var4;
 24:
                    if(!var1) { _fun0013_ip = 58; continue _fun0013 }
 27:
                    var6 = _closure1_slot8;
                    var5 = var6.getActiveStreamForUser;
                    var4 = _closure2_slot3;
                    var2 = _closure2_slot4;
                    var2 = var5.bind(var6)(var4, var2);
                    var1 = var3 != var2;
 58:
                    return var1;
                }
            };
            var13 = var15.bind(var16)(var14, var9, var13);
            var14 = var6 == var3;
            var9 = undefined;
            if(var14) { _fun0010_ip = 674; continue _fun0010 }
 669:
            var9 = var3.icon;
 674:
            if(!(var6 == var9)) { _fun0010_ip = 700; continue _fun0010 }
 678:
            var9 = var6 != var3;
            var25 = undefined;
            if(!var9) { _fun0010_ip = 696; continue _fun0010 }
 687:
            var9 = _closure1_slot7;
            var25 = var9.bind(var4)(var3);
 696:
            var26 = undefined;
            _fun0010_ip = 767; continue _fun0010;
 700:
            var14 = _closure1_slot1;
            var15 = _closure1_slot2;
            var9 = 32;
            var9 = var15[var9];
            var15 = var14.bind(var4)(var9);
            var14 = var15.getGuildIconURL;
            var9 = {};
            var16 = var3.id;
            var9['id'] = var16;
            var16 = var3.icon;
            var9['icon'] = var16;
            var16 = true;
            var9['canAnimate'] = var16;
            var16 = 128;
            var9['size'] = var16;
            var26 = var14.bind(var15)(var9);
            var25 = undefined;
 767:
            var14 = var6 == var3;
            var9 = undefined;
            if(var14) { _fun0010_ip = 782; continue _fun0010 }
 776:
            var9 = var3.splash;
 782:
            var14 = var6 != var9;
            var9 = undefined;
            if(!var14) { _fun0010_ip = 886; continue _fun0010 }
 791:
            var19 = _closure1_slot1;
            var20 = _closure1_slot2;
            var14 = 32;
            var14 = var20[var14];
            var16 = var19.bind(var4)(var14);
            var15 = var16.getGuildSplashURL;
            var14 = {};
            var18 = var3.id;
            var14['id'] = var18;
            var18 = var3.splash;
            var14['splash'] = var18;
            var18 = 33;
            var18 = var20[var18];
            var18 = var19.bind(var4)(var18);
            var19 = var18.bind(var4)();
            var18 = 400;
            var18 = var18 * var19;
            var14['size'] = var18;
            var14 = var15.bind(var16)(var14);
            var15 = var6 != var14;
            var9 = undefined;
            if(!var15) { _fun0010_ip = 886; continue _fun0010 }
 883:
            var9 = var14;
 886:
            if(var8) { _fun0010_ip = 1292; continue _fun0010 }
 892:
            if(!(var6 != var10)) { _fun0010_ip = 918; continue _fun0010 }
 896:
            var15 = var10.type;
            var14 = _closure1_slot14;
            var14 = var14.GUILD_STAGE_VOICE;
            if(!(var15 !== var14)) { _fun0010_ip = 1203; continue _fun0010 }
 918:
            if(!(var6 != var34)) { _fun0010_ip = 932; continue _fun0010 }
 922:
            var14 = 5;
            if(!(!(var34 >= var14))) { _fun0010_ip = 1066; continue _fun0010 }
 932:
            if(!(var6 != var37)) { _fun0010_ip = 943; continue _fun0010 }
 936:
            if(!(!(var37 > var2))) { _fun0010_ip = 1066; continue _fun0010 }
 943:
            var29 = var6 != var10;
            var28 = '';
            var21 = undefined;
            var20 = undefined;
            var19 = undefined;
            var18 = var27;
            var14 = var26;
            var15 = var25;
            var2 = var22;
            var16 = var28;
            if(!var29) { _fun0010_ip = 1607; continue _fun0010 }
 978:
            var31 = _closure1_slot4;
            var30 = var31.resolveAssetSource;
            var32 = _closure1_slot0;
            var35 = _closure1_slot2;
            var29 = 34;
            var29 = var35[var29];
            var32 = var32.bind(var4)(var29);
            var29 = var32.getChannelIcon;
            var29 = var29.bind(var32)(var10);
            var30 = var30.bind(var31)(var29);
            var31 = var6 == var30;
            var29 = undefined;
            if(var31) { _fun0010_ip = 1039; continue _fun0010 }
 1033:
            var29 = var30.uri;
 1039:
            var19 = var29;
            var21 = undefined;
            var20 = undefined;
            var18 = var27;
            var14 = var26;
            var15 = var25;
            var2 = var22;
            var16 = var28;
            _fun0010_ip = 1607; continue _fun0010;
 1066:
            var29 = _closure1_slot0;
            var35 = _closure1_slot2;
            var28 = 13;
            var30 = var35[var28];
            var30 = var29.bind(var4)(var30);
            var36 = var30.intl;
            var32 = var36.formatToPlainString;
            var30 = var35[var28];
            var30 = var29.bind(var4)(var30);
            var30 = var30.t;
            var31 = var30.LC+S+v;
            var30 = {};
            var30['membersOnline'] = var37;
            var21 = var32.bind(var36)(var31, var30);
            var31 = var35[var28];
            var31 = var29.bind(var4)(var31);
            var32 = var31.intl;
            var31 = var32.formatToPlainString;
            var28 = var35[var28];
            var28 = var29.bind(var4)(var28);
            var28 = var28.t;
            var29 = var28.zRl6XV;
            var28 = {};
            var28['count'] = var34;
            var20 = var31.bind(var32)(var29, var28);
            var16 = '';
            var19 = undefined;
            var18 = var27;
            var14 = var26;
            var15 = var25;
            var2 = var22;
            _fun0010_ip = 1607; continue _fun0010;
 1203:
            var30 = _closure1_slot4;
            var29 = var30.resolveAssetSource;
            var31 = _closure1_slot0;
            var32 = _closure1_slot2;
            var28 = 34;
            var28 = var32[var28];
            var31 = var31.bind(var4)(var28);
            var28 = var31.getChannelIcon;
            var28 = var28.bind(var31)(var10);
            var28 = var29.bind(var30)(var28);
            var30 = var6 == var28;
            var29 = undefined;
            if(var30) { _fun0010_ip = 1264; continue _fun0010 }
 1258:
            var29 = var28.uri;
 1264:
            var16 = '';
            var19 = var29;
            var21 = undefined;
            var20 = undefined;
            var18 = var27;
            var14 = var26;
            var15 = var25;
            var2 = var22;
            _fun0010_ip = 1607; continue _fun0010;
 1292:
            if(!var22) { _fun0010_ip = 1302; continue _fun0010 }
 1295:
            if(!(var6 != var33)) { _fun0010_ip = 1302; continue _fun0010 }
 1299:
            if(var12) { _fun0010_ip = 1391; continue _fun0010 }
 1302:
            var29 = _closure1_slot4;
            var28 = var29.resolveAssetSource;
            var30 = _closure1_slot0;
            var31 = _closure1_slot2;
            var12 = 34;
            var12 = var31[var12];
            var30 = var30.bind(var4)(var12);
            var12 = var30.getChannelIcon;
            var12 = var12.bind(var30)(var10);
            var12 = var28.bind(var29)(var12);
            var29 = var6 == var12;
            var28 = undefined;
            if(var29) { _fun0010_ip = 1363; continue _fun0010 }
 1357:
            var28 = var12.uri;
 1363:
            var16 = '';
            var19 = var28;
            var21 = undefined;
            var20 = undefined;
            var18 = var27;
            var14 = var26;
            var15 = var25;
            var2 = var22;
            _fun0010_ip = 1607; continue _fun0010;
 1391:
            var25 = _closure1_slot4;
            var22 = var25.resolveAssetSource;
            var32 = _closure1_slot1;
            var29 = _closure1_slot2;
            var12 = 32;
            var12 = var29[var12];
            var26 = var32.bind(var4)(var12);
            var12 = var26.getUserAvatarSource;
            var12 = var12.bind(var26)(var33);
            var12 = var22.bind(var25)(var12);
            var22 = var12.uri;
            var26 = _closure1_slot0;
            var12 = 13;
            var25 = var29[var12];
            var25 = var26.bind(var4)(var25);
            var30 = var25.intl;
            var28 = var30.formatToPlainString;
            var25 = var29[var12];
            var25 = var26.bind(var4)(var25);
            var25 = var25.t;
            var27 = var25.QmlLEh;
            var25 = {};
            var31 = 18;
            var31 = var29[var31];
            var32 = var32.bind(var4)(var31);
            var31 = var32.getFormattedName;
            var31 = var31.bind(var32)(var33);
            var25['name'] = var31;
            var25 = var28.bind(var30)(var27, var25);
            var27 = var29[var12];
            var27 = var26.bind(var4)(var27);
            var28 = var27.intl;
            var27 = var28.formatToPlainString;
            var12 = var29[var12];
            var12 = var26.bind(var4)(var12);
            var12 = var12.t;
            var26 = var12.u0vaDA;
            var12 = {};
            var30 = var6 == var3;
            var29 = undefined;
            if(var30) { _fun0010_ip = 1579; continue _fun0010 }
 1574:
            var29 = var3.name;
 1579:
            var12['guildName'] = var29;
            var16 = var27.bind(var28)(var26, var12);
            var21 = undefined;
            var20 = undefined;
            var19 = undefined;
            var18 = var25;
            var14 = var22;
            var15 = undefined;
            var2 = var13;
 1607:
            if(var8) { _fun0010_ip = 1757; continue _fun0010 }
 1613:
            if(var2) { _fun0010_ip = 1688; continue _fun0010 }
 1616:
            var12 = var11.acceptLabelGreenColor;
            var13 = var11.acceptLabelGreenBackgroundColor;
            var25 = _closure1_slot0;
            var26 = _closure1_slot2;
            var2 = 13;
            var8 = var26[var2];
            var8 = var25.bind(var4)(var8);
            var22 = var8.intl;
            var8 = var22.string;
            var2 = var26[var2];
            var2 = var25.bind(var4)(var2);
            var2 = var2.t;
            var2 = var2.XpeFYm;
            var22 = var8.bind(var22)(var2);
            _fun0010_ip = 1849; continue _fun0010;
 1688:
            var12 = var11.acceptLabelDisabledColor;
            var13 = var11.acceptLabelDisabledBackgroundColor;
            var28 = _closure1_slot0;
            var29 = _closure1_slot2;
            var2 = 13;
            var26 = var29[var2];
            var26 = var28.bind(var4)(var26);
            var27 = var26.intl;
            var26 = var27.string;
            var2 = var29[var2];
            var2 = var28.bind(var4)(var2);
            var2 = var2.t;
            var2 = var2.cEnaW1;
            var22 = var26.bind(var27)(var2);
            _fun0010_ip = 1849; continue _fun0010;
 1757:
            var8 = var11.acceptLabelGreenColor;
            var2 = var11.acceptLabelGreenBackgroundColor;
            var28 = _closure1_slot0;
            var29 = _closure1_slot2;
            var25 = 13;
            var26 = var29[var25];
            var26 = var28.bind(var4)(var26);
            var27 = var26.intl;
            var26 = var27.string;
            var25 = var29[var25];
            var25 = var28.bind(var4)(var25);
            var25 = var25.t;
            if(var1) { _fun0010_ip = 1829; continue _fun0010 }
 1816:
            var1 = var25.gpqgam;
            var1 = var26.bind(var27)(var1);
            _fun0010_ip = 1840; continue _fun0010;
 1829:
            var25 = var25.7vb2cX;
            var1 = var26.bind(var27)(var25);
 1840:
            var22 = var1;
            var12 = var8;
            var13 = var2;
 1849:
            var1 = var6 != var3;
            var8 = undefined;
            if(!var1) { _fun0010_ip = 1890; continue _fun0010 }
 1858:
            var2 = _closure1_slot0;
            var25 = _closure1_slot2;
            var1 = 35;
            var1 = var25[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.getGuildBadgeImageSource;
            var8 = var1.bind(var2)(var3, var23);
 1890:
            var3 = _closure1_slot19;
            var2 = _closure1_slot1;
            var23 = _closure1_slot2;
            var1 = 15;
            var1 = var23[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var40 = var1;
            var39 = var17;
            var17 = copyDataProperties(var40, var39);
            var17 = var6 != var24;
            var23 = undefined;
            if(!var17) { _fun0010_ip = 1945; continue _fun0010 }
 1935:
            var17 = var24.toUpperCase;
            var23 = var17.bind(var24)();
 1945:
            var17 = 'headerText';
            var1[var17] = var23;
            var23 = var11.headerColor;
            var17 = 'headerColor';
            var1[var17] = var23;
            var17 = 'acceptLabelText';
            var1[var17] = var22;
            var17 = 'onlineText';
            var1[var17] = var21;
            var17 = 'memberText';
            var1[var17] = var20;
            var17 = 'channelIcon';
            var1[var17] = var19;
            var17 = 'titleText';
            var1[var17] = var18;
            var18 = var11.titleColor;
            var17 = 'titleColor';
            var1[var17] = var18;
            var18 = var6 != var14;
            var17 = undefined;
            if(!var18) { _fun0010_ip = 2045; continue _fun0010 }
 2042:
            var17 = var14;
 2045:
            var14 = 'thumbnailUrl';
            var1[var14] = var17;
            var14 = 'thumbnailText';
            var1[var14] = var15;
            var14 = 'subtitle';
            var1[var14] = var16;
            var15 = '';
            var14 = undefined;
            if(!(var15 !== var16)) { _fun0010_ip = 2090; continue _fun0010 }
 2084:
            var14 = var11.subtitleColor;
 2090:
            var11 = 'subtitleColor';
            var1[var11] = var14;
            var11 = 'acceptLabelBackgroundColor';
            var1[var11] = var13;
            var11 = 'acceptLabelBorderColor';
            var1[var11] = var4;
            var11 = 'acceptLabelColor';
            var1[var11] = var12;
            var12 = true;
            var11 = 'embedCanBeTapped';
            var1[var11] = var12;
            var11 = 'canBeAccepted';
            var1[var11] = var12;
            var12 = var6 != var10;
            var11 = undefined;
            if(!var12) { _fun0010_ip = 2162; continue _fun0010 }
 2157:
            var11 = var10.name;
 2162:
            var10 = 'channelName';
            var1[var10] = var11;
            var10 = var7.type;
            if(!(var6 == var10)) { _fun0010_ip = 2190; continue _fun0010 }
 2180:
            var7 = _closure1_slot18;
            var10 = var7.GUILD;
 2190:
            var7 = 'type';
            var1[var7] = var10;
            var7 = 'inviteSplash';
            var1[var7] = var9;
            var7 = var6 != var8;
            var6 = undefined;
            if(!var7) { _fun0010_ip = 2250; continue _fun0010 }
 2219:
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var5 = 24;
            var5 = var9[var5];
            var7 = var7.bind(var4)(var5);
            var5 = var7.getAssetUriForEmbed;
            var6 = var5.bind(var7)(var8);
 2250:
            var5 = 'badgeIconUrl';
            var1[var5] = var6;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['GuildInvite'] = var2;
    return var1;
})();