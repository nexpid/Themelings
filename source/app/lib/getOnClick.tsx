// app/lib/getOnClick.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function openInviteModal() {
        var1 = undefined;
        var4 = _closure1_slot19;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot18 = var1;
    var1 = function _openInviteModal() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 16;
                    var2 = var3[var2];
                    var3 = undefined;
                    var5 = var4.bind(var3)(var2);
                    var4 = var5.dispatch;
                    var2 = {};
                    var6 = 'DISPLAYED_INVITE_SHOW';
                    var2['type'] = var6;
                    var6 = arg2;
                    var2['code'] = var6;
                    var2['username'] = var3;
                    var2['deeplinkAttemptId'] = var3;
                    var6 = arg3;
                    var2['invite_instance_id'] = var6;
                    var2 = var4.bind(var5)(var2);
                    SaveGenerator(address=81);
case 4:
                    return var2;
case 5:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    return var3;
case 6:
                    return var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot19 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot19 = var1;
    var1 = function _handleInviteCodedLink() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var4 = undefined;
                    var _closure4_slot0 = var4;
                    var2 = arg1;
                    var7 = var2.code;
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var2 = 17;
                    var2 = var6[var2];
                    var6 = var5.bind(var4)(var2);
                    var5 = var6.getInviteInstanceId;
                    var2 = arg2;
                    var6 = var5.bind(var6)(var7, var2);
                    var5 = _closure1_slot8;
                    var2 = var5.getInvite;
                    var5 = var2.bind(var5)(var7);
                    var12 = null;
                    if(!(var12 == var5)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var8 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var2 = 18;
                    var2 = var9[var2];
                    var11 = var8.bind(var4)(var2);
                    var9 = var11.resolveInvite;
                    var8 = {};
                    var8['inviteInstanceId'] = var6;
                    var2 = 'Markdown Link';
                    var2 = var9.bind(var11)(var7, var2, var8);
                    SaveGenerator(address=135);
case 12:
                    return var2;
case 13:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=7);
                    if(var8) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                    var9 = var2.invite;
                    var11 = var12 != var9;
                    var8 = undefined;
                    if(!var11) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                    var8 = var9;
case 16:
                    var5 = var8;
case 10:
                    if(!(var12 != var5)) { _fun0002_ip = 18; continue _fun0002 }
case 19:
                    var9 = var5.state;
                    var8 = _closure1_slot13;
                    var8 = var8.EXPIRED;
                    if(!(var9 !== var8)) { _fun0002_ip = 20; continue _fun0002 }
case 21:
                    var9 = var5.state;
                    var8 = _closure1_slot13;
                    var8 = var8.BANNED;
                    if(!(var9 !== var8)) { _fun0002_ip = 20; continue _fun0002 }
case 22:
                    var9 = var5.state;
                    var8 = _closure1_slot13;
                    var8 = var8.ERROR;
                    if(!(var9 === var8)) { _fun0002_ip = 23; continue _fun0002 }
case 20:
                    var8 = _closure1_slot18;
                    var8 = var8.bind(var4)(var5, var7, var6);
                    SaveGenerator(address=244);
case 24:
                    return var8;
case 25:
                    ResumeGenerator(result_out_reg=7, return_bool_out_reg=8);
                    if(!var9) { _fun0002_ip = 18; continue _fun0002 }
case 26:
                    return var8;
case 23:
                    var9 = _closure1_slot11;
                    var8 = var9.getFlattenedGuildIds;
                    var11 = var8.bind(var9)();
                    var8 = var12 == var5;
                    var15 = undefined;
                    if(var8) { _fun0002_ip = 27; continue _fun0002 }
case 28:
                    var8 = var5.guild;
                    var9 = var12 == var8;
                    var15 = undefined;
                    if(var9) { _fun0002_ip = 27; continue _fun0002 }
case 29:
                    var15 = var8.id;
case 27:
                    var9 = var12 != var15;
                    if(!var9) { _fun0002_ip = 30; continue _fun0002 }
case 31:
                    var8 = var11.includes;
                    var9 = var8.bind(var11)(var15);
case 30:
                    var8 = false;
                    if(!var9) { _fun0002_ip = 32; continue _fun0002 }
case 33:
                    var11 = var5.roles;
                    var11 = var12 != var11;
                    var8 = false;
                    if(!var11) { _fun0002_ip = 32; continue _fun0002 }
case 34:
                    var11 = var5.roles;
                    var14 = var11.length;
                    var11 = 0;
                    var11 = var14 > var11;
                    var8 = false;
                    if(!var11) { _fun0002_ip = 32; continue _fun0002 }
case 35:
                    var13 = _closure1_slot6;
                    var11 = var13.getId;
                    var14 = var11.bind(var13)();
                    var13 = _closure1_slot7;
                    var11 = var13.getMember;
                    var14 = var11.bind(var13)(var15, var14);
                    var11 = global;
                    var13 = var11.Set;
                    var15 = var12 == var14;
                    var11 = undefined;
                    if(var15) { _fun0002_ip = 36; continue _fun0002 }
case 37:
                    var11 = var14.roles;
case 36:
                    if(!(var12 == var11)) { _fun0002_ip = 38; continue _fun0002 }
case 39:
                    var11 = new Array(0);
case 38:
                    var12 = var13.prototype;
                    var12 = Object.create(var12, {constructor: {value: var13}});
                    var19 = var12;
                    var18 = var11;
                    var11 = new var19[var13](var18, var17);
                    var11 = var11 instanceof Object ? var11 : var12;
                    _closure4_slot0 = var11;
                    var12 = var5.roles;
                    var11 = var12.some;
                    var10 = function(arg1) {
                        var3 = _closure4_slot0;
                        var2 = var3.has;
                        var1 = arg1;
                        var1 = var1.id;
                        var1 = var2.bind(var3)(var1);
                        var1 = !var1;
                        return var1;
                    };
                    var8 = var11.bind(var12)(var10);
case 32:
                    if(!var9) { _fun0002_ip = 40; continue _fun0002 }
case 41:
                    if(var8) { _fun0002_ip = 40; continue _fun0002 }
case 42:
                    var9 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var8 = 18;
                    var8 = var10[var8];
                    var10 = var9.bind(var4)(var8);
                    var9 = var10.transitionToInvite;
                    var8 = {};
                    var11 = true;
                    var8['forceTransition'] = var11;
                    var8 = var9.bind(var10)(var5, var8);
                    _fun0002_ip = 18; continue _fun0002;
case 40:
                    var3 = _closure1_slot18;
                    var3 = var3.bind(var4)(var5, var7, var6);
                    SaveGenerator(address=539);
case 43:
                    return var3;
case 44:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0002_ip = 45; continue _fun0002 }
case 18:
                    return var4;
case 45:
                    return var3;
case 14:
                    return var2;
case 8:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot20 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot20 = var1;
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var4 = 8;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var4 = 10;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 12;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 13;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AbortCodes;
    var7 = var4.AnalyticEvents;
    var _closure1_slot12 = var7;
    var7 = var4.AppContext;
    var7 = var4.InviteStates;
    var _closure1_slot13 = var7;
    var7 = var4.JoinGuildSources;
    var4 = var4.Routes;
    var4 = 14;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.CollectibleShopTab;
    var _closure1_slot14 = var7;
    var4 = var4.CollectiblesMobileShopScreen;
    var _closure1_slot15 = var4;
    var4 = 15;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.isGameShopPath;
    var _closure1_slot16 = var4;
    var4 = {};
    var4['skipExtensionCheck'] = var1;
    var7 = new Array(0);
    var4['analyticsLocations'] = var7;
    var _closure1_slot17 = var4;
    var4 = 47;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'lib/getOnClick.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getOnClick(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var9 = arg1;
            var2 = arguments[1];
            var _closure2_slot0 = var9;
            var7 = undefined;
            if(!(var2 === var7)) { _fun0003_ip = 46; continue _fun0003 }
case 47:
            var2 = _closure1_slot17;
case 46:
            var8 = var2.skipExtensionCheck;
            var3 = var2.analyticsLocations;
            var _closure2_slot1 = var3;
            var3 = var2.messageId;
            var _closure2_slot2 = var3;
            var2 = var2.channelId;
            var _closure2_slot3 = var7;
            var _closure2_slot4 = var7;
            var _closure2_slot5 = var7;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 24;
            var2 = var4[var2];
            var3 = var3.bind(var7)(var2);
            var2 = var3.findCodedLink;
            var2 = var2.bind(var3)(var9);
            _closure2_slot3 = var2;
            var4 = null;
            if(!(var4 != var2)) { _fun0003_ip = 48; continue _fun0003 }
case 49:
            var5 = var2.type;
            var10 = _closure1_slot0;
            var3 = _closure1_slot2;
            var11 = 25;
            var3 = var3[var11];
            var3 = var10.bind(var7)(var3);
            var3 = var3.CodedLinkType;
            var3 = var3.INVITE;
            if(!(var5 !== var3)) { _fun0003_ip = 50; continue _fun0003 }
case 51:
            var5 = var2.type;
            var10 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var11];
            var3 = var10.bind(var7)(var3);
            var3 = var3.CodedLinkType;
            var3 = var3.EMBEDDED_ACTIVITY_INVITE;
            if(!(var5 !== var3)) { _fun0003_ip = 50; continue _fun0003 }
case 48:
            if(!(var4 != var2)) { _fun0003_ip = 52; continue _fun0003 }
case 53:
            var5 = var2.type;
            var10 = _closure1_slot0;
            var3 = _closure1_slot2;
            var11 = 25;
            var3 = var3[var11];
            var3 = var10.bind(var7)(var3);
            var3 = var3.CodedLinkType;
            var3 = var3.APP_DIRECTORY_PROFILE;
            if(!(var5 !== var3)) { _fun0003_ip = 54; continue _fun0003 }
case 55:
            var5 = var2.type;
            var10 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var11];
            var3 = var10.bind(var7)(var3);
            var3 = var3.CodedLinkType;
            var3 = var3.APP_DIRECTORY_STOREFRONT;
            if(!(var5 !== var3)) { _fun0003_ip = 54; continue _fun0003 }
case 56:
            var5 = var2.type;
            var10 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var11];
            var3 = var10.bind(var7)(var3);
            var3 = var3.CodedLinkType;
            var3 = var3.APP_DIRECTORY_STOREFRONT_SKU;
            if(!(var5 !== var3)) { _fun0003_ip = 54; continue _fun0003 }
case 52:
            if(!(var4 != var2)) { _fun0003_ip = 57; continue _fun0003 }
case 58:
            var5 = var2.type;
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 25;
            var3 = var11[var3];
            var3 = var10.bind(var7)(var3);
            var3 = var3.CodedLinkType;
            var3 = var3.ACTIVITY_BOOKMARK;
            if(!(var5 !== var3)) { _fun0003_ip = 59; continue _fun0003 }
case 57:
            if(!(var4 != var2)) { _fun0003_ip = 60; continue _fun0003 }
case 61:
            var5 = var2.type;
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 25;
            var3 = var11[var3];
            var3 = var10.bind(var7)(var3);
            var3 = var3.CodedLinkType;
            var3 = var3.GUILD_PRODUCT;
            if(!(var5 !== var3)) { _fun0003_ip = 62; continue _fun0003 }
case 60:
            if(!(var4 != var2)) { _fun0003_ip = 63; continue _fun0003 }
case 64:
            var5 = var2.type;
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 25;
            var3 = var11[var3];
            var3 = var10.bind(var7)(var3);
            var3 = var3.CodedLinkType;
            var3 = var3.SOCIAL_LAYER_STOREFRONT;
            if(!(var5 !== var3)) { _fun0003_ip = 65; continue _fun0003 }
case 63:
            if(!(var4 != var2)) { _fun0003_ip = 66; continue _fun0003 }
case 67:
            var5 = var2.type;
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 25;
            var3 = var11[var3];
            var3 = var10.bind(var7)(var3);
            var3 = var3.CodedLinkType;
            var3 = var3.SOCIAL_LAYER_STOREFRONT_APP;
            if(!(var5 !== var3)) { _fun0003_ip = 68; continue _fun0003 }
case 66:
            if(!(var4 != var2)) { _fun0003_ip = 69; continue _fun0003 }
case 70:
            var5 = var2.type;
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 25;
            var3 = var11[var3];
            var3 = var10.bind(var7)(var3);
            var3 = var3.CodedLinkType;
            var3 = var3.QUESTS_EMBED;
            if(!(var5 === var3)) { _fun0003_ip = 69; continue _fun0003 }
case 71:
            var5 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 37;
            var3 = var10[var3];
            var5 = var5.bind(var7)(var3);
            var3 = var5.getIsEligibleForQuests;
            var3 = var3.bind(var5)();
            if(var3) { _fun0003_ip = 72; continue _fun0003 }
case 69:
            if(!(var4 != var2)) { _fun0003_ip = 73; continue _fun0003 }
case 74:
            var5 = var2.type;
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 25;
            var3 = var11[var3];
            var3 = var10.bind(var7)(var3);
            var3 = var3.CodedLinkType;
            var3 = var3.COLLECTIBLES_SHOP;
            if(!(var5 !== var3)) { _fun0003_ip = 75; continue _fun0003 }
case 73:
            var5 = _closure1_slot1;
            var3 = _closure1_slot2;
            var13 = 38;
            var3 = var3[var13];
            var5 = var5.bind(var7)(var3);
            var3 = var5.toURLSafe;
            var3 = var3.bind(var5)(var9);
            if(!(var4 == var3)) { _fun0003_ip = 76; continue _fun0003 }
case 77:
            var3 = {};
case 76:
            var12 = var3.host;
            var17 = var3.hostname;
            var11 = var3.pathname;
            _closure2_slot4 = var11;
            var5 = var3.search;
            var3 = var3.hash;
            var14 = _closure1_slot1;
            var10 = _closure1_slot2;
            var10 = var10[var13];
            var15 = var14.bind(var7)(var10);
            var14 = var15.isDiscordHostname;
            var16 = var4 != var17;
            var10 = null;
            if(!var16) { _fun0003_ip = 78; continue _fun0003 }
case 79:
            var10 = var17;
case 78:
            var10 = var14.bind(var15)(var10);
            if(var10) { _fun0003_ip = 80; continue _fun0003 }
case 81:
            var15 = _closure1_slot1;
            var14 = _closure1_slot2;
            var14 = var14[var13];
            var16 = var15.bind(var7)(var14);
            var15 = var16.isDiscordLocalhost;
            var18 = var4 != var12;
            var14 = null;
            if(!var18) { _fun0003_ip = 82; continue _fun0003 }
case 83:
            var14 = var12;
case 82:
            var18 = var4 != var17;
            var12 = null;
            if(!var18) { _fun0003_ip = 84; continue _fun0003 }
case 85:
            var12 = var17;
case 84:
            var10 = var15.bind(var16)(var14, var12);
case 80:
            if(!var10) { _fun0003_ip = 86; continue _fun0003 }
case 87:
            if(!(var4 != var11)) { _fun0003_ip = 86; continue _fun0003 }
case 88:
            var12 = _closure1_slot16;
            var12 = var12.bind(var7)(var11);
            if(var12) { _fun0003_ip = 89; continue _fun0003 }
case 86:
            if(!(var4 != var11)) { _fun0003_ip = 90; continue _fun0003 }
case 91:
            if(!var10) { _fun0003_ip = 90; continue _fun0003 }
case 92:
            var12 = _closure1_slot1;
            var10 = _closure1_slot2;
            var10 = var10[var13];
            var12 = var12.bind(var7)(var10);
            var10 = var12.isAppRoute;
            var10 = var10.bind(var12)(var11);
            if(var10) { _fun0003_ip = 93; continue _fun0003 }
case 90:
            if(!(var4 != var2)) { _fun0003_ip = 94; continue _fun0003 }
case 95:
            var10 = var2.type;
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var2 = 25;
            var2 = var13[var2];
            var2 = var12.bind(var7)(var2);
            var2 = var2.CodedLinkType;
            var2 = var2.APP_OAUTH2_LINK;
            if(!(var10 !== var2)) { _fun0003_ip = 96; continue _fun0003 }
case 94:
            var10 = _closure1_slot0;
            var12 = _closure1_slot2;
            var2 = 44;
            var2 = var12[var2];
            var10 = var10.bind(var7)(var2);
            var2 = var10.tryParseEventDetailsPath;
            var2 = var2.bind(var10)(var11);
            var2 = undefined;
            if(var8) { _fun0003_ip = 97; continue _fun0003 }
case 98:
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var6 = 45;
            var6 = var10[var6];
            var8 = var8.bind(var7)(var6);
            var6 = var8.isSuspiciousDownload;
            var6 = var6.bind(var8)(var9);
            var6 = var4 == var6;
            var2 = undefined;
            if(var6) { _fun0003_ip = 97; continue _fun0003 }
case 99:
            var2 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = arg1;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0004_ip = 100; continue _fun0004 }
case 101:
                    var1 = var2.preventDefault;
                    var1 = var1.bind(var2)();
case 100:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 46;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.show;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var3)(var1);
                    var1 = true;
                    return var1;
                }
            };
case 97:
            _fun0003_ip = 102; continue _fun0003;
case 96:
            var2 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var2 = arg1;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0005_ip = 100; continue _fun0005 }
case 101:
                    var1 = var2.preventDefault;
                    var1 = var1.bind(var2)();
case 100:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var2 = 43;
                    var2 = var5[var2];
                    var3 = undefined;
                    var8 = var4.bind(var3)(var2);
                    var7 = var8.trackWithMetadata;
                    var1 = _closure1_slot12;
                    var6 = var1.APP_OAUTH2_LINK_EMBED_URL_CLICKED;
                    var2 = {};
                    var9 = _closure2_slot3;
                    var9 = var9.code;
                    var2['application_id'] = var9;
                    var2 = var7.bind(var8)(var6, var2);
                    var2 = 27;
                    var2 = var5[var2];
                    var2 = var4.bind(var3)(var2);
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var3)(var1);
                    var1 = true;
                    return var1;
                }
            };
case 102:
            return var2;
case 93:
            var2 = {'navigationReplace': false, 'openChannel': true};
            _closure2_slot5 = var2;
            if(!(var4 != var5)) { _fun0003_ip = 103; continue _fun0003 }
case 104:
            var2['search'] = var5;
case 103:
            if(!(var4 != var3)) { _fun0003_ip = 105; continue _fun0003 }
case 106:
            var2['hash'] = var3;
case 105:
            var2 = function(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var2 = arg1;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0006_ip = 100; continue _fun0006 }
case 101:
                    var1 = var2.preventDefault;
                    var1 = var1.bind(var2)();
case 100:
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 22;
                    var1 = var3[var1];
                    var4 = undefined;
                    var3 = var2.bind(var4)(var1);
                    var2 = _closure2_slot4;
                    var1 = _closure2_slot5;
                    var1 = var3.bind(var4)(var2, var1);
                    var1 = true;
                    return var1;
                }
            };
            return var2;
case 89:
            var2 = function(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var2 = arg1;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0007_ip = 100; continue _fun0007 }
case 101:
                    var1 = var2.preventDefault;
                    var1 = var1.bind(var2)();
case 100:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 36;
                    var1 = var2[var1];
                    var2 = undefined;
                    var1 = var3.bind(var2)(var1);
                    var1 = var1.openSocialLayerStorefrontUnsupportedOnMobileAlert;
                    var1 = var1.bind(var2)();
                    var1 = true;
                    return var1;
                }
            };
            return var2;
case 75:
            var2 = function(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var3 = arg1;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0008_ip = 107; continue _fun0008 }
case 108:
                    var2 = var3.preventDefault;
                    var2 = var2.bind(var3)();
case 107:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var3 = 41;
                    var3 = var2[var3];
                    var5 = undefined;
                    var6 = var4.bind(var5)(var3);
                    var3 = var6.isVirtualCurrencyEnabled;
                    var3 = var3.bind(var6)();
                    var3 = var3.enabled;
                    var _closure3_slot0 = var3;
                    var3 = 20;
                    var3 = var2[var3];
                    var4 = var4.bind(var5)(var3);
                    var3 = 42;
                    var3 = var2[var3];
                    var2 = var2.paths;
                    var3 = var4.bind(var5)(var3, var2);
                    var2 = var3.then;
                    var1 = function(arg1) {
                        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                            var1 = arg1;
                            var3 = var1.openCollectiblesShopMobile;
                            var1 = _closure2_slot3;
                            var4 = var1.code;
                            var2 = var4.split;
                            var1 = '-';
                            var6 = var2.bind(var4)(var1);
                            var5 = _closure1_slot3;
                            var1 = undefined;
                            var4 = 2;
                            var4 = var5.bind(var1)(var6, var4);
                            var5 = 0;
                            var8 = var4[var5];
                            var9 = 1;
                            var5 = var4[var9];
                            var4 = '';
                            var6 = var4 !== var5;
                            var4 = _closure3_slot0;
                            if(!var4) { _fun0009_ip = 109; continue _fun0009 }
case 110:
                            var4 = _closure1_slot14;
                            var4 = var4.ORBS;
                            if(!(var8 !== var4)) { _fun0009_ip = 111; continue _fun0009 }
case 109:
                            var8 = _closure1_slot15;
                            if(var6) { _fun0009_ip = 112; continue _fun0009 }
case 113:
                            var4 = var8.FEATURED_PAGE;
                            _fun0009_ip = 114; continue _fun0009;
case 112:
                            var4 = var8.SHOP_ALL;
case 114:
                            _fun0009_ip = 115; continue _fun0009;
case 111:
                            var2 = _closure1_slot15;
                            var4 = var2.ORBS;
case 115:
                            var2 = {};
                            var7 = _closure2_slot1;
                            var8 = var7.length;
                            var8 = var8 - var9;
                            var8 = var7[var8];
                            var2['analyticsSource'] = var8;
                            var2['analyticsLocations'] = var7;
                            var2['screen'] = var4;
                            var4 = undefined;
                            if(!var6) { _fun0009_ip = 116; continue _fun0009 }
case 117:
                            var4 = var5;
case 116:
                            var2['initialProductSkuId'] = var4;
                            var2 = var3.bind(var1)(var2);
                            return var1;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
                    var1 = true;
                    return var1;
                }
            };
            return var2;
case 72:
            var2 = function(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var2 = arg1;
                    var5 = null;
                    if(!(var5 != var2)) { _fun0010_ip = 100; continue _fun0010 }
case 101:
                    var1 = var2.preventDefault;
                    var1 = var1.bind(var2)();
case 100:
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 38;
                    var1 = var3[var1];
                    var3 = undefined;
                    var6 = var2.bind(var3)(var1);
                    var2 = var6.toURLSafe;
                    var1 = _closure2_slot3;
                    var1 = var1.url;
                    var1 = var2.bind(var6)(var1);
                    if(!(var5 == var1)) { _fun0010_ip = 118; continue _fun0010 }
case 119:
                    var1 = {};
case 118:
                    var9 = var1.search;
                    var1 = var5 != var9;
                    var8 = undefined;
                    var6 = undefined;
                    if(!var1) { _fun0010_ip = 120; continue _fun0010 }
case 6:
                    var1 = global;
                    var1 = var1.URLSearchParams;
                    var2 = var1.prototype;
                    var2 = Object.create(var2, {constructor: {value: var1}});
                    var12 = var2;
                    var11 = var9;
                    var1 = new var12[var1](var11, var10);
                    var10 = var1 instanceof Object ? var1 : var2;
                    var2 = var10.get;
                    var1 = 'sort';
                    var1 = var2.bind(var10)(var1);
                    var9 = var5 != var1;
                    var2 = undefined;
                    if(!var9) { _fun0010_ip = 121; continue _fun0010 }
case 15:
                    var2 = var1;
case 121:
                    var9 = var10.get;
                    var1 = 'filter';
                    var9 = var9.bind(var10)(var1);
                    var10 = var5 != var9;
                    var1 = undefined;
                    if(!var10) { _fun0010_ip = 116; continue _fun0010 }
case 117:
                    var1 = var9;
case 116:
                    var6 = var1;
                    var8 = var2;
case 120:
                    var2 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var1 = 39;
                    var1 = var9[var1];
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.openQuestHome;
                    var1 = {};
                    var7 = _closure2_slot3;
                    var7 = var7.code;
                    var1['scrollToQuestId'] = var7;
                    var9 = var5 != var8;
                    var7 = null;
                    if(!var9) { _fun0010_ip = 122; continue _fun0010 }
case 123:
                    var7 = var8;
case 122:
                    var1['sort'] = var7;
                    var7 = var5 != var6;
                    var5 = null;
                    if(!var7) { _fun0010_ip = 124; continue _fun0010 }
case 55:
                    var5 = var6;
case 124:
                    var1['filter'] = var5;
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 40;
                    var4 = var6[var4];
                    var4 = var5.bind(var3)(var4);
                    var4 = var4.QuestContent;
                    var4 = var4.QUEST_SHARE_LINK;
                    var1['fromContent'] = var4;
                    var1 = var2.bind(var3)(var1);
                    var1 = true;
                    return var1;
                }
            };
            return var2;
case 68:
            var2 = function(arg1) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var2 = arg1;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0011_ip = 100; continue _fun0011 }
case 101:
                    var1 = var2.preventDefault;
                    var1 = var1.bind(var2)();
case 100:
                    var1 = _closure2_slot3;
                    var3 = var1.code;
                    var2 = var3.split;
                    var1 = '-';
                    var6 = var2.bind(var3)(var1);
                    var5 = _closure1_slot3;
                    var3 = undefined;
                    var2 = 2;
                    var6 = var5.bind(var3)(var6, var2);
                    var2 = 0;
                    var5 = var6[var2];
                    var2 = 1;
                    var2 = var6[var2];
                    var2 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 36;
                    var1 = var6[var1];
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.openSocialLayerStorefrontProductDetailsModal;
                    var1 = {};
                    var1['skuId'] = var5;
                    var4 = _closure2_slot1;
                    var1['analyticsLocations'] = var4;
                    var1 = var2.bind(var3)(var1);
                    var1 = true;
                    return var1;
                }
            };
            return var2;
case 65:
            var2 = function(arg1) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var2 = arg1;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0012_ip = 100; continue _fun0012 }
case 101:
                    var1 = var2.preventDefault;
                    var1 = var1.bind(var2)();
case 100:
                    var1 = _closure2_slot3;
                    var3 = var1.code;
                    var2 = var3.split;
                    var1 = '-';
                    var6 = var2.bind(var3)(var1);
                    var5 = _closure1_slot3;
                    var3 = undefined;
                    var2 = 2;
                    var6 = var5.bind(var3)(var6, var2);
                    var2 = 0;
                    var5 = var6[var2];
                    var2 = 1;
                    var2 = var6[var2];
                    var2 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 36;
                    var1 = var6[var1];
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.openSocialLayerStorefrontProductDetailsModal;
                    var1 = {};
                    var1['skuId'] = var5;
                    var4 = _closure2_slot1;
                    var1['analyticsLocations'] = var4;
                    var1 = var2.bind(var3)(var1);
                    var1 = true;
                    return var1;
                }
            };
            return var2;
case 62:
            var2 = function(arg1) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var3 = arg1;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0013_ip = 107; continue _fun0013 }
case 108:
                    var2 = var3.preventDefault;
                    var2 = var2.bind(var3)();
case 107:
                    var2 = _closure2_slot3;
                    var4 = var2.code;
                    var3 = var4.split;
                    var2 = '-';
                    var6 = var3.bind(var4)(var2);
                    var4 = _closure1_slot3;
                    var5 = undefined;
                    var3 = 2;
                    var4 = var4.bind(var5)(var6, var3);
                    var3 = 0;
                    var3 = var4[var3];
                    var _closure3_slot0 = var3;
                    var3 = 1;
                    var3 = var4[var3];
                    var _closure3_slot1 = var3;
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var3 = 20;
                    var3 = var2[var3];
                    var4 = var4.bind(var5)(var3);
                    var3 = 35;
                    var3 = var2[var3];
                    var2 = var2.paths;
                    var3 = var4.bind(var5)(var3, var2);
                    var2 = var3.then;
                    var1 = function(arg1) {
                        var1 = arg1;
                        var4 = var1.openGuildProductLink;
                        var3 = _closure3_slot0;
                        var2 = _closure3_slot1;
                        var1 = undefined;
                        var2 = var4.bind(var1)(var3, var2);
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
                    var1 = true;
                    return var1;
                }
            };
            return var2;
case 59:
            var2 = function(arg1) {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var3 = arg1;
                    var7 = null;
                    if(!(var7 != var3)) { _fun0014_ip = 107; continue _fun0014 }
case 108:
                    var1 = var3.preventDefault;
                    var1 = var1.bind(var3)();
case 107:
                    var3 = _closure2_slot3;
                    var8 = var3.code;
                    var _closure3_slot0 = var8;
                    var1 = _closure2_slot3;
                    var5 = var1.url;
                    var3 = _closure1_slot5;
                    var1 = var3.getApplication;
                    var9 = var1.bind(var3)(var8);
                    var1 = global;
                    var1 = var1.URL;
                    var3 = var1.prototype;
                    var3 = Object.create(var3, {constructor: {value: var1}});
                    var17 = var3;
                    var16 = var5;
                    var1 = new var17[var1](var16, var15);
                    var3 = var1 instanceof Object ? var1 : var3;
                    var _closure3_slot1 = var3;
                    var6 = var3.searchParams;
                    var5 = var6.get;
                    var1 = 'referrer_id';
                    var5 = var5.bind(var6)(var1);
                    var10 = var7 != var5;
                    var6 = undefined;
                    var1 = undefined;
                    if(!var10) { _fun0014_ip = 12; continue _fun0014 }
case 125:
                    var1 = var5;
case 12:
                    var _closure3_slot2 = var1;
                    var5 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var1 = 29;
                    var1 = var10[var1];
                    var1 = var5.bind(var6)(var1);
                    var1 = var1.bind(var6)();
                    var _closure3_slot3 = var1;
                    var5 = _closure1_slot0;
                    var1 = 30;
                    var1 = var10[var1];
                    var5 = var5.bind(var6)(var1);
                    var1 = var5.getPlayInContext;
                    var10 = var1.bind(var5)(var8);
                    var5 = var10.currentChannelId;
                    var _closure3_slot4 = var5;
                    var1 = var10.instanceId;
                    var _closure3_slot5 = var1;
                    var1 = var10.isCurrentlyInInstance;
                    var10 = var10.canLaunchInChannel;
                    if(var10) { _fun0014_ip = 126; continue _fun0014 }
case 127:
                    var10 = var7 == var9;
                    var13 = undefined;
                    if(var10) { _fun0014_ip = 23; continue _fun0014 }
case 128:
                    var9 = var9.bot;
                    var10 = var7 == var9;
                    var13 = undefined;
                    if(var10) { _fun0014_ip = 23; continue _fun0014 }
case 129:
                    var13 = var9.id;
case 23:
                    var9 = var7 != var13;
                    if(!var9) { _fun0014_ip = 130; continue _fun0014 }
case 131:
                    var11 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var10 = 33;
                    var10 = var12[var10];
                    var12 = var11.bind(var6)(var10);
                    var11 = var12.openPrivateChannel;
                    var10 = {};
                    var10['recipientIds'] = var13;
                    var12 = var11.bind(var12)(var10);
                    var11 = var12.then;
                    var10 = function() {
                        var4 = _closure1_slot4;
                        var3 = undefined;
                        var2 = function* (arg1) {
                            var1 = function* anon_0_(arg1) {
                                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                    if(var2) { _fun0015_ip = 132; continue _fun0015 }
case 133:
                                    var5 = _closure1_slot0;
                                    var3 = _closure1_slot2;
                                    var2 = 31;
                                    var2 = var3[var2];
                                    var3 = undefined;
                                    var9 = var5.bind(var3)(var2);
                                    var8 = var9.getCustomActivityLinkParams;
                                    var7 = _closure3_slot0;
                                    var2 = _closure3_slot1;
                                    var10 = var2.searchParams;
                                    var5 = var10.get;
                                    var2 = 'link_id';
                                    var5 = var5.bind(var10)(var2);
                                    var2 = _closure3_slot1;
                                    var11 = var2.searchParams;
                                    var10 = var11.get;
                                    var2 = 'custom_id';
                                    var2 = var10.bind(var11)(var2);
                                    var2 = var8.bind(var9)(var7, var5, var2);
                                    SaveGenerator(address=107);
case 113:
                                    return var2;
case 134:
                                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                                    if(var5) { _fun0015_ip = 21; continue _fun0015 }
case 112:
                                    var7 = var2.customId;
                                    var5 = _closure1_slot1;
                                    var8 = _closure1_slot2;
                                    var4 = 34;
                                    var4 = var8[var4];
                                    var5 = var5.bind(var3)(var4);
                                    var4 = {};
                                    var8 = _closure3_slot0;
                                    var4['targetApplicationId'] = var8;
                                    var8 = arg1;
                                    var4['channelId'] = var8;
                                    var8 = _closure2_slot1;
                                    var4['analyticsLocations'] = var8;
                                    var4['customId'] = var7;
                                    var6 = _closure3_slot2;
                                    var4['referrerId'] = var6;
                                    var4 = var5.bind(var3)(var4);
                                    return var3;
case 21:
                                    return var2;
case 132:
                                    return var1;
                                }
                            };
                            return var1;
                        };
                        var2 = var4.bind(var3)(var2);
                        var _closure4_slot0 = var2;
                        var1 = function() {
                            var1 = undefined;
                            var4 = _closure4_slot0;
                            var3 = var4.apply;
                            var1 = arguments;
                            var2 = var1;
                            var1 = this;
                            var1 = var3.bind(var4)(var1, var2);
                            return var1;
                        };
                        return var1;
                    };
                    var10 = var10.bind(var6)();
                    var12 = var11.bind(var12)(var10);
                    var11 = var12.catch;
                    var10 = function() {
                        var1 = undefined;
                        return var1;
                    };
                    var10 = var11.bind(var12)(var10);
                    var9 = true;
case 130:
                    return var9;
case 126:
                    var1 = !var1;
                    if(!var1) { _fun0014_ip = 135; continue _fun0014 }
case 136:
                    var1 = var7 != var5;
case 135:
                    if(!var1) { _fun0014_ip = 137; continue _fun0014 }
case 138:
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var4 = 31;
                    var4 = var7[var4];
                    var7 = var5.bind(var6)(var4);
                    var5 = var7.getCustomActivityLinkParams;
                    var10 = var3.searchParams;
                    var9 = var10.get;
                    var4 = 'link_id';
                    var4 = var9.bind(var10)(var4);
                    var10 = var3.searchParams;
                    var9 = var10.get;
                    var3 = 'custom_id';
                    var3 = var9.bind(var10)(var3);
                    var5 = var5.bind(var7)(var8, var4, var3);
                    var4 = var5.then;
                    var3 = function() {
                        var4 = _closure1_slot4;
                        var3 = undefined;
                        var2 = function* (arg1) {
                            var1 = function* anon_0_(arg1) {
                                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                    if(var2) { _fun0016_ip = 51; continue _fun0016 }
case 133:
                                    var2 = arg1;
                                    var8 = var2.customId;
                                    var4 = undefined;
                                    SaveGenerator(address=25);
case 139:
                                    return var4;
case 46:
                                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                                    if(var3) { _fun0016_ip = 140; continue _fun0016 }
case 141:
                                    var5 = _closure1_slot0;
                                    var6 = _closure1_slot2;
                                    var3 = 32;
                                    var3 = var6[var3];
                                    var6 = var5.bind(var4)(var3);
                                    var5 = var6.runPrimaryAppCommandOrJoinEmbeddedActivity;
                                    var3 = {};
                                    var9 = _closure3_slot4;
                                    var3['channelId'] = var9;
                                    var9 = _closure3_slot0;
                                    var3['applicationId'] = var9;
                                    var10 = _closure3_slot5;
                                    var9 = null;
                                    var9 = var9 == var10;
                                    var3['isStart'] = var9;
                                    var9 = _closure3_slot3;
                                    var3['embeddedActivitiesManager'] = var9;
                                    var3['customId'] = var8;
                                    var7 = _closure3_slot2;
                                    var3['referrerId'] = var7;
                                    var7 = _closure2_slot1;
                                    var3['analyticsLocations'] = var7;
                                    var3 = var5.bind(var6)(var3);
                                    SaveGenerator(address=140);
case 142:
                                    return var3;
case 143:
                                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                                    if(var5) { _fun0016_ip = 144; continue _fun0016 }
case 145:
                                    return var4;
case 144:
                                    return var3;
case 140:
                                    return var2;
case 51:
                                    return var1;
                                }
                            };
                            var2 = var1.next;
                            var2 = var2.bind(var1)();
                            return var1;
                        };
                        var2 = var4.bind(var3)(var2);
                        var _closure4_slot0 = var2;
                        var1 = function() {
                            var1 = undefined;
                            var4 = _closure4_slot0;
                            var3 = var4.apply;
                            var1 = arguments;
                            var2 = var1;
                            var1 = this;
                            var1 = var3.bind(var4)(var1, var2);
                            return var1;
                        };
                        return var1;
                    };
                    var3 = var3.bind(var6)();
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.catch;
                    var2 = function() {
                        var1 = undefined;
                        return var1;
                    };
                    var2 = var3.bind(var4)(var2);
                    var1 = true;
case 137:
                    return var1;
                }
            };
            return var2;
case 54:
            var2 = function(arg1) {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                    var2 = arg1;
                    var4 = null;
                    if(!(var4 != var2)) { _fun0017_ip = 100; continue _fun0017 }
case 101:
                    var1 = var2.preventDefault;
                    var1 = var1.bind(var2)();
case 100:
                    var2 = _closure2_slot3;
                    var7 = var2.code;
                    var2 = _closure2_slot3;
                    var6 = var2.type;
                    var8 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var9 = 25;
                    var5 = var3[var9];
                    var3 = undefined;
                    var5 = var8.bind(var3)(var5);
                    var5 = var5.CodedLinkType;
                    var5 = var5.APP_DIRECTORY_PROFILE;
                    if(!(var6 !== var5)) { _fun0017_ip = 116; continue _fun0017 }
case 5:
                    var5 = _closure2_slot3;
                    var6 = var5.type;
                    var8 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var5 = var5[var9];
                    var5 = var8.bind(var3)(var5);
                    var5 = var5.CodedLinkType;
                    var5 = var5.APP_DIRECTORY_STOREFRONT;
                    if(!(var6 !== var5)) { _fun0017_ip = 116; continue _fun0017 }
case 146:
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var5 = 26;
                    var5 = var8[var5];
                    var6 = var6.bind(var3)(var5);
                    var5 = var6.parseStorefrontSkuCodedLink;
                    var5 = var5.bind(var6)(var7);
                    if(!(var4 == var5)) { _fun0017_ip = 147; continue _fun0017 }
case 148:
                    var6 = {};
                    var6['applicationId'] = var3;
                    var6['skuId'] = var3;
                    var5 = var6;
case 147:
                    _fun0017_ip = 149; continue _fun0017;
case 116:
                    var6 = {};
                    var6['applicationId'] = var7;
                    var6['skuId'] = var3;
                    var5 = var6;
case 149:
                    var9 = var5.applicationId;
                    var5 = var5.skuId;
                    var6 = _closure1_slot10;
                    var5 = var6.getGuildId;
                    var5 = var5.bind(var6)();
                    var6 = var4 != var5;
                    var8 = undefined;
                    if(!var6) { _fun0017_ip = 150; continue _fun0017 }
case 151:
                    var8 = var5;
case 150:
                    if(!(var4 != var9)) { _fun0017_ip = 152; continue _fun0017 }
case 153:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 28;
                    var4 = var6[var4];
                    var7 = var5.bind(var3)(var4);
                    var6 = var7.track;
                    var4 = _closure1_slot12;
                    var5 = var4.APP_DIRECTORY_PROFILE_EMBED_URL_CLICKED;
                    var4 = {};
                    var4['application_id'] = var9;
                    var9 = 'mobile_native';
                    var4['device_platform'] = var9;
                    var4['guild_id'] = var8;
                    var9 = _closure1_slot9;
                    var8 = var9.getChannelId;
                    var8 = var8.bind(var9)();
                    var4['channel_id'] = var8;
                    var4 = var6.bind(var7)(var5, var4);
case 152:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var2 = 27;
                    var2 = var5[var2];
                    var2 = var4.bind(var3)(var2);
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var3)(var1);
                    var1 = true;
                    return var1;
                }
            };
            return var2;
case 50:
            var1 = function(arg1) {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                    var2 = arg1;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0018_ip = 100; continue _fun0018 }
case 101:
                    var1 = var2.preventDefault;
                    var1 = var1.bind(var2)();
case 100:
                    var4 = _closure2_slot3;
                    var3 = _closure2_slot2;
                    var2 = function handleInviteCodedLink() {
                        var1 = undefined;
                        var4 = _closure1_slot20;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var1 = undefined;
                    var1 = var2.bind(var1)(var4, var3);
                    var1 = true;
                    return var1;
                }
            };
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();