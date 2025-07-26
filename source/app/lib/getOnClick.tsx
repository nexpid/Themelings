// app/lib/getOnClick.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function openInviteModal() {
        var1 = undefined;
        var4 = _closure1_slot16;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot15 = var1;
    var1 = function _openInviteModal() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 84; continue _fun0001 }
 7:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 11;
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
                    var2 = var4.bind(var5)(var2);
                    SaveGenerator(address=72);
 70:
                    return var2;
 72:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 81; continue _fun0001 }
 78:
                    return var3;
 81:
                    return var2;
 84:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot16 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot16 = var1;
    var1 = function _handleInviteCodedLink() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    StartGenerator();
                    var4 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 331; continue _fun0002 }
 13:
                    var6 = _closure1_slot6;
                    var5 = var6.getInvite;
                    var2 = var4.code;
                    var5 = var5.bind(var6)(var2);
                    var7 = null;
                    if(!(var7 == var5)) { _fun0002_ip = 106; continue _fun0002 }
 42:
                    var8 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var2 = 12;
                    var6 = var6[var2];
                    var2 = undefined;
                    var9 = var8.bind(var2)(var6);
                    var8 = var9.resolveInvite;
                    var6 = var4.code;
                    var2 = 'Markdown Link';
                    var2 = var8.bind(var9)(var6, var2);
                    SaveGenerator(address=91);
 89:
                    return var2;
 91:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                    if(var6) { _fun0002_ip = 328; continue _fun0002 }
 100:
                    var5 = var2.invite;
 106:
                    if(!(var7 != var5)) { _fun0002_ip = 323; continue _fun0002 }
 113:
                    var8 = var5.state;
                    var6 = _closure1_slot11;
                    var6 = var6.EXPIRED;
                    if(!(var8 !== var6)) { _fun0002_ip = 170; continue _fun0002 }
 132:
                    var8 = var5.state;
                    var6 = _closure1_slot11;
                    var6 = var6.BANNED;
                    if(!(var8 !== var6)) { _fun0002_ip = 170; continue _fun0002 }
 151:
                    var8 = var5.state;
                    var6 = _closure1_slot11;
                    var6 = var6.ERROR;
                    if(!(var8 === var6)) { _fun0002_ip = 203; continue _fun0002 }
 170:
                    var9 = _closure1_slot15;
                    var8 = var4.code;
                    var6 = undefined;
                    var6 = var9.bind(var6)(var5, var8);
                    SaveGenerator(address=191);
 189:
                    return var6;
 191:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=7);
                    if(!var8) { _fun0002_ip = 323; continue _fun0002 }
 200:
                    return var6;
 203:
                    var8 = _closure1_slot9;
                    var6 = var8.getFlattenedGuildIds;
                    var9 = var6.bind(var8)();
                    var10 = var7 == var5;
                    var6 = undefined;
                    var8 = undefined;
                    if(var10) { _fun0002_ip = 247; continue _fun0002 }
 228:
                    var10 = var5.guild;
                    var11 = var7 == var10;
                    var8 = undefined;
                    if(var11) { _fun0002_ip = 247; continue _fun0002 }
 242:
                    var8 = var10.id;
 247:
                    if(!(var7 != var8)) { _fun0002_ip = 264; continue _fun0002 }
 251:
                    var7 = var9.includes;
                    var7 = var7.bind(var9)(var8);
                    if(var7) { _fun0002_ip = 292; continue _fun0002 }
 264:
                    var7 = _closure1_slot15;
                    var4 = var4.code;
                    var4 = var7.bind(var6)(var5, var4);
                    SaveGenerator(address=283);
 281:
                    return var4;
 283:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                    if(!var7) { _fun0002_ip = 323; continue _fun0002 }
 289:
                    return var4;
 292:
                    var4 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var3 = 12;
                    var3 = var7[var3];
                    var4 = var4.bind(var6)(var3);
                    var3 = var4.transitionToInviteSync;
                    var3 = var3.bind(var4)(var5);
 323:
                    var3 = undefined;
                    return var3;
 328:
                    return var2;
 331:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot17 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot17 = var1;
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
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot10 = var7;
    var7 = var4.AppContext;
    var7 = var4.InviteStates;
    var _closure1_slot11 = var7;
    var7 = var4.Routes;
    var4 = var4.UserSettingsSections;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.CollectiblesMobileShopScreen;
    var _closure1_slot12 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.QuestsExperimentLocations;
    var _closure1_slot13 = var4;
    var4 = {};
    var4['skipExtensionCheck'] = var1;
    var7 = new Array(0);
    var4['analyticsLocations'] = var7;
    var _closure1_slot14 = var4;
    var4 = 35;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'lib/getOnClick.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getOnClick(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var9 = arg1;
            var2 = arguments[1];
            var _closure2_slot0 = var9;
            var7 = undefined;
            if(!(var2 === var7)) { _fun0003_ip = 25; continue _fun0003 }
 18:
            var2 = _closure1_slot14;
 25:
            var8 = var2.skipExtensionCheck;
            var2 = var2.analyticsLocations;
            var _closure2_slot1 = var2;
            var _closure2_slot2 = var7;
            var _closure2_slot3 = var7;
            var _closure2_slot4 = var7;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 13;
            var2 = var4[var2];
            var3 = var3.bind(var7)(var2);
            var2 = var3.findCodedLink;
            var2 = var2.bind(var3)(var9);
            _closure2_slot2 = var2;
            var4 = null;
            if(!(var4 != var2)) { _fun0003_ip = 182; continue _fun0003 }
 97:
            var5 = var2.type;
            var10 = _closure1_slot0;
            var3 = _closure1_slot2;
            var11 = 14;
            var3 = var3[var11];
            var3 = var10.bind(var7)(var3);
            var3 = var3.CodedLinkType;
            var3 = var3.INVITE;
            if(!(var5 !== var3)) { _fun0003_ip = 979; continue _fun0003 }
 141:
            var5 = var2.type;
            var10 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var11];
            var3 = var10.bind(var7)(var3);
            var3 = var3.CodedLinkType;
            var3 = var3.EMBEDDED_ACTIVITY_INVITE;
            if(!(var5 !== var3)) { _fun0003_ip = 979; continue _fun0003 }
 182:
            if(!(var4 != var2)) { _fun0003_ip = 315; continue _fun0003 }
 189:
            var5 = var2.type;
            var10 = _closure1_slot0;
            var3 = _closure1_slot2;
            var11 = 14;
            var3 = var3[var11];
            var3 = var10.bind(var7)(var3);
            var3 = var3.CodedLinkType;
            var3 = var3.APP_DIRECTORY_PROFILE;
            if(!(var5 !== var3)) { _fun0003_ip = 972; continue _fun0003 }
 233:
            var5 = var2.type;
            var10 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var11];
            var3 = var10.bind(var7)(var3);
            var3 = var3.CodedLinkType;
            var3 = var3.APP_DIRECTORY_STOREFRONT;
            if(!(var5 !== var3)) { _fun0003_ip = 972; continue _fun0003 }
 274:
            var5 = var2.type;
            var10 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var11];
            var3 = var10.bind(var7)(var3);
            var3 = var3.CodedLinkType;
            var3 = var3.APP_DIRECTORY_STOREFRONT_SKU;
            if(!(var5 !== var3)) { _fun0003_ip = 972; continue _fun0003 }
 315:
            if(!(var4 != var2)) { _fun0003_ip = 363; continue _fun0003 }
 319:
            var5 = var2.type;
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 14;
            var3 = var11[var3];
            var3 = var10.bind(var7)(var3);
            var3 = var3.CodedLinkType;
            var3 = var3.ACTIVITY_BOOKMARK;
            if(!(var5 !== var3)) { _fun0003_ip = 965; continue _fun0003 }
 363:
            if(!(var4 != var2)) { _fun0003_ip = 411; continue _fun0003 }
 367:
            var5 = var2.type;
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 14;
            var3 = var11[var3];
            var3 = var10.bind(var7)(var3);
            var3 = var3.CodedLinkType;
            var3 = var3.GUILD_PRODUCT;
            if(!(var5 !== var3)) { _fun0003_ip = 958; continue _fun0003 }
 411:
            if(!(var4 != var2)) { _fun0003_ip = 509; continue _fun0003 }
 415:
            var5 = var2.type;
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 14;
            var3 = var11[var3];
            var3 = var10.bind(var7)(var3);
            var3 = var3.CodedLinkType;
            var3 = var3.QUESTS_EMBED;
            if(!(var5 === var3)) { _fun0003_ip = 509; continue _fun0003 }
 456:
            var5 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 26;
            var3 = var10[var3];
            var10 = var5.bind(var7)(var3);
            var5 = var10.getIsEligibleForQuests;
            var3 = {};
            var11 = _closure1_slot13;
            var11 = var11.EMBED_MOBILE;
            var3['location'] = var11;
            var3 = var5.bind(var10)(var3);
            if(var3) { _fun0003_ip = 951; continue _fun0003 }
 509:
            if(!(var4 != var2)) { _fun0003_ip = 557; continue _fun0003 }
 513:
            var5 = var2.type;
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 14;
            var3 = var11[var3];
            var3 = var10.bind(var7)(var3);
            var3 = var3.CodedLinkType;
            var3 = var3.COLLECTIBLES_SHOP;
            if(!(var5 !== var3)) { _fun0003_ip = 944; continue _fun0003 }
 557:
            var5 = _closure1_slot1;
            var3 = _closure1_slot2;
            var13 = 29;
            var3 = var3[var13];
            var5 = var5.bind(var7)(var3);
            var3 = var5.toURLSafe;
            var3 = var3.bind(var5)(var9);
            if(!(var4 == var3)) { _fun0003_ip = 594; continue _fun0003 }
 592:
            var3 = {};
 594:
            var12 = var3.host;
            var17 = var3.hostname;
            var11 = var3.pathname;
            _closure2_slot3 = var11;
            var5 = var3.search;
            var3 = var3.hash;
            var14 = _closure1_slot1;
            var10 = _closure1_slot2;
            var10 = var10[var13];
            var15 = var14.bind(var7)(var10);
            var14 = var15.isDiscordHostname;
            var16 = var4 != var17;
            var10 = null;
            if(!var16) { _fun0003_ip = 662; continue _fun0003 }
 659:
            var10 = var17;
 662:
            var10 = var14.bind(var15)(var10);
            if(var10) { _fun0003_ip = 723; continue _fun0003 }
 670:
            var15 = _closure1_slot1;
            var14 = _closure1_slot2;
            var14 = var14[var13];
            var16 = var15.bind(var7)(var14);
            var15 = var16.isDiscordLocalhost;
            var18 = var4 != var12;
            var14 = null;
            if(!var18) { _fun0003_ip = 705; continue _fun0003 }
 702:
            var14 = var12;
 705:
            var18 = var4 != var17;
            var12 = null;
            if(!var18) { _fun0003_ip = 717; continue _fun0003 }
 714:
            var12 = var17;
 717:
            var10 = var15.bind(var16)(var14, var12);
 723:
            if(!(var4 != var11)) { _fun0003_ip = 764; continue _fun0003 }
 727:
            if(!var10) { _fun0003_ip = 764; continue _fun0003 }
 730:
            var12 = _closure1_slot1;
            var10 = _closure1_slot2;
            var10 = var10[var13];
            var12 = var12.bind(var7)(var10);
            var10 = var12.isAppRoute;
            var10 = var10.bind(var12)(var11);
            if(var10) { _fun0003_ip = 899; continue _fun0003 }
 764:
            if(!(var4 != var2)) { _fun0003_ip = 809; continue _fun0003 }
 768:
            var10 = var2.type;
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var2 = 14;
            var2 = var13[var2];
            var2 = var12.bind(var7)(var2);
            var2 = var2.CodedLinkType;
            var2 = var2.APP_OAUTH2_LINK;
            if(!(var10 !== var2)) { _fun0003_ip = 892; continue _fun0003 }
 809:
            var10 = _closure1_slot0;
            var12 = _closure1_slot2;
            var2 = 32;
            var2 = var12[var2];
            var10 = var10.bind(var7)(var2);
            var2 = var10.tryParseEventDetailsPath;
            var2 = var2.bind(var10)(var11);
            var2 = undefined;
            if(var8) { _fun0003_ip = 890; continue _fun0003 }
 845:
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var6 = 33;
            var6 = var10[var6];
            var8 = var8.bind(var7)(var6);
            var6 = var8.isSuspiciousDownload;
            var6 = var6.bind(var8)(var9);
            var6 = var4 == var6;
            var2 = undefined;
            if(var6) { _fun0003_ip = 890; continue _fun0003 }
 885:
            var2 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var2 = arg1;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0004_ip = 19; continue _fun0004 }
 9:
                    var1 = var2.preventDefault;
                    var1 = var1.bind(var2)();
 19:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 34;
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
 890:
            _fun0003_ip = 897; continue _fun0003;
 892:
            var2 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var2 = arg1;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0005_ip = 19; continue _fun0005 }
 9:
                    var1 = var2.preventDefault;
                    var1 = var1.bind(var2)();
 19:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var2 = 31;
                    var2 = var5[var2];
                    var3 = undefined;
                    var8 = var4.bind(var3)(var2);
                    var7 = var8.trackWithMetadata;
                    var1 = _closure1_slot10;
                    var6 = var1.APP_OAUTH2_LINK_EMBED_URL_CLICKED;
                    var2 = {};
                    var9 = _closure2_slot2;
                    var9 = var9.code;
                    var2['application_id'] = var9;
                    var2 = var7.bind(var8)(var6, var2);
                    var2 = 16;
                    var2 = var5[var2];
                    var2 = var4.bind(var3)(var2);
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var3)(var1);
                    var1 = true;
                    return var1;
                }
            };
 897:
            return var2;
 899:
            var2 = {'navigationReplace': false, 'openChannel': true};
            _closure2_slot4 = var2;
            if(!(var4 != var5)) { _fun0003_ip = 927; continue _fun0003 }
 921:
            var2['search'] = var5;
 927:
            if(!(var4 != var3)) { _fun0003_ip = 937; continue _fun0003 }
 931:
            var2['hash'] = var3;
 937:
            var2 = function(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var2 = arg1;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0006_ip = 19; continue _fun0006 }
 9:
                    var1 = var2.preventDefault;
                    var1 = var1.bind(var2)();
 19:
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 30;
                    var1 = var3[var1];
                    var4 = undefined;
                    var3 = var2.bind(var4)(var1);
                    var2 = _closure2_slot3;
                    var1 = _closure2_slot4;
                    var1 = var3.bind(var4)(var2, var1);
                    var1 = true;
                    return var1;
                }
            };
            return var2;
 944:
            var2 = function(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var3 = arg1;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0007_ip = 21; continue _fun0007 }
 11:
                    var2 = var3.preventDefault;
                    var2 = var2.bind(var3)();
 21:
                    var2 = _closure2_slot2;
                    var6 = var2.code;
                    var5 = undefined;
                    var4 = '';
                    var2 = undefined;
                    if(!(var4 !== var6)) { _fun0007_ip = 54; continue _fun0007 }
 45:
                    var3 = _closure2_slot2;
                    var2 = var3.code;
 54:
                    var _closure3_slot0 = var2;
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var3 = 25;
                    var3 = var2[var3];
                    var4 = var4.bind(var5)(var3);
                    var3 = 28;
                    var3 = var2[var3];
                    var2 = var2.paths;
                    var3 = var4.bind(var5)(var3, var2);
                    var2 = var3.then;
                    var1 = function(arg1) {
                        var1 = arg1;
                        var3 = var1.openCollectiblesShopMobile;
                        var2 = {};
                        var1 = _closure2_slot1;
                        var5 = var1.length;
                        var4 = 1;
                        var4 = var5 - var4;
                        var4 = var1[var4];
                        var2['analyticsSource'] = var4;
                        var2['analyticsLocations'] = var1;
                        var1 = _closure1_slot12;
                        var1 = var1.SHOP_ALL;
                        var2['screen'] = var1;
                        var1 = _closure3_slot0;
                        var2['initialProductSkuId'] = var1;
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
                    var1 = true;
                    return var1;
                }
            };
            return var2;
 951:
            var2 = function(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var2 = arg1;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0008_ip = 19; continue _fun0008 }
 9:
                    var1 = var2.preventDefault;
                    var1 = var1.bind(var2)();
 19:
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 27;
                    var1 = var3[var1];
                    var3 = undefined;
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.openQuestHome;
                    var1 = {};
                    var4 = _closure2_slot2;
                    var4 = var4.code;
                    var1['scrollToQuestId'] = var4;
                    var1 = var2.bind(var3)(var1);
                    var1 = true;
                    return var1;
                }
            };
            return var2;
 958:
            var2 = function(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var3 = arg1;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0009_ip = 21; continue _fun0009 }
 11:
                    var2 = var3.preventDefault;
                    var2 = var2.bind(var3)();
 21:
                    var2 = _closure2_slot2;
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
                    var3 = 25;
                    var3 = var2[var3];
                    var4 = var4.bind(var5)(var3);
                    var3 = 24;
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
 965:
            var2 = function(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var3 = arg1;
                    var7 = null;
                    if(!(var7 != var3)) { _fun0010_ip = 21; continue _fun0010 }
 11:
                    var1 = var3.preventDefault;
                    var1 = var1.bind(var3)();
 21:
                    var3 = _closure2_slot2;
                    var8 = var3.code;
                    var _closure3_slot0 = var8;
                    var1 = _closure2_slot2;
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
                    if(!var10) { _fun0010_ip = 133; continue _fun0010 }
 130:
                    var1 = var5;
 133:
                    var _closure3_slot2 = var1;
                    var5 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var1 = 18;
                    var1 = var10[var1];
                    var1 = var5.bind(var6)(var1);
                    var1 = var1.bind(var6)();
                    var _closure3_slot3 = var1;
                    var5 = _closure1_slot0;
                    var1 = 19;
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
                    if(var10) { _fun0010_ip = 340; continue _fun0010 }
 227:
                    var10 = var7 == var9;
                    var13 = undefined;
                    if(var10) { _fun0010_ip = 256; continue _fun0010 }
 236:
                    var9 = var9.bot;
                    var10 = var7 == var9;
                    var13 = undefined;
                    if(var10) { _fun0010_ip = 256; continue _fun0010 }
 251:
                    var13 = var9.id;
 256:
                    var9 = var7 != var13;
                    if(!var9) { _fun0010_ip = 338; continue _fun0010 }
 263:
                    var11 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var10 = 22;
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
                                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                    if(var2) { _fun0011_ip = 194; continue _fun0011 }
 10:
                                    var5 = _closure1_slot0;
                                    var3 = _closure1_slot2;
                                    var2 = 20;
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
 105:
                                    return var2;
 107:
                                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                                    if(var5) { _fun0011_ip = 191; continue _fun0011 }
 113:
                                    var7 = var2.customId;
                                    var5 = _closure1_slot1;
                                    var8 = _closure1_slot2;
                                    var4 = 23;
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
 191:
                                    return var2;
 194:
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
 338:
                    return var9;
 340:
                    var1 = !var1;
                    if(!var1) { _fun0010_ip = 350; continue _fun0010 }
 346:
                    var1 = var7 != var5;
 350:
                    if(!var1) { _fun0010_ip = 463; continue _fun0010 }
 353:
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var4 = 20;
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
                                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                    if(var2) { _fun0012_ip = 155; continue _fun0012 }
 10:
                                    var2 = arg1;
                                    var8 = var2.customId;
                                    var4 = undefined;
                                    SaveGenerator(address=25);
 23:
                                    return var4;
 25:
                                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                                    if(var3) { _fun0012_ip = 152; continue _fun0012 }
 31:
                                    var5 = _closure1_slot0;
                                    var6 = _closure1_slot2;
                                    var3 = 21;
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
 138:
                                    return var3;
 140:
                                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                                    if(var5) { _fun0012_ip = 149; continue _fun0012 }
 146:
                                    return var4;
 149:
                                    return var3;
 152:
                                    return var2;
 155:
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
 463:
                    return var1;
                }
            };
            return var2;
 972:
            var2 = function(arg1) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                    var2 = arg1;
                    var4 = null;
                    if(!(var4 != var2)) { _fun0013_ip = 19; continue _fun0013 }
 9:
                    var1 = var2.preventDefault;
                    var1 = var1.bind(var2)();
 19:
                    var2 = _closure2_slot2;
                    var7 = var2.code;
                    var2 = _closure2_slot2;
                    var6 = var2.type;
                    var8 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var9 = 14;
                    var5 = var3[var9];
                    var3 = undefined;
                    var5 = var8.bind(var3)(var5);
                    var5 = var5.CodedLinkType;
                    var5 = var5.APP_DIRECTORY_PROFILE;
                    if(!(var6 !== var5)) { _fun0013_ip = 174; continue _fun0013 }
 81:
                    var5 = _closure2_slot2;
                    var6 = var5.type;
                    var8 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var5 = var5[var9];
                    var5 = var8.bind(var3)(var5);
                    var5 = var5.CodedLinkType;
                    var5 = var5.APP_DIRECTORY_STOREFRONT;
                    if(!(var6 !== var5)) { _fun0013_ip = 174; continue _fun0013 }
 123:
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var5 = 15;
                    var5 = var8[var5];
                    var6 = var6.bind(var3)(var5);
                    var5 = var6.parseStorefrontSkuCodedLink;
                    var5 = var5.bind(var6)(var7);
                    if(!(var4 == var5)) { _fun0013_ip = 172; continue _fun0013 }
 158:
                    var6 = {};
                    var6['applicationId'] = var3;
                    var6['skuId'] = var3;
                    var5 = var6;
 172:
                    _fun0013_ip = 188; continue _fun0013;
 174:
                    var6 = {};
                    var6['applicationId'] = var7;
                    var6['skuId'] = var3;
                    var5 = var6;
 188:
                    var9 = var5.applicationId;
                    var5 = var5.skuId;
                    var6 = _closure1_slot8;
                    var5 = var6.getGuildId;
                    var5 = var5.bind(var6)();
                    var6 = var4 != var5;
                    var8 = undefined;
                    if(!var6) { _fun0013_ip = 225; continue _fun0013 }
 222:
                    var8 = var5;
 225:
                    if(!(var4 != var9)) { _fun0013_ip = 310; continue _fun0013 }
 229:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 17;
                    var4 = var6[var4];
                    var7 = var5.bind(var3)(var4);
                    var6 = var7.track;
                    var4 = _closure1_slot10;
                    var5 = var4.APP_DIRECTORY_PROFILE_EMBED_URL_CLICKED;
                    var4 = {};
                    var4['application_id'] = var9;
                    var9 = 'mobile_native';
                    var4['device_platform'] = var9;
                    var4['guild_id'] = var8;
                    var9 = _closure1_slot7;
                    var8 = var9.getChannelId;
                    var8 = var8.bind(var9)();
                    var4['channel_id'] = var8;
                    var4 = var6.bind(var7)(var5, var4);
 310:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var2 = 16;
                    var2 = var5[var2];
                    var2 = var4.bind(var3)(var2);
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var3)(var1);
                    var1 = true;
                    return var1;
                }
            };
            return var2;
 979:
            var1 = function(arg1) {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                    var2 = arg1;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0014_ip = 19; continue _fun0014 }
 9:
                    var1 = var2.preventDefault;
                    var1 = var1.bind(var2)();
 19:
                    var3 = _closure2_slot2;
                    var2 = function handleInviteCodedLink() {
                        var1 = undefined;
                        var4 = _closure1_slot17;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var1 = undefined;
                    var1 = var2.bind(var1)(var3);
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