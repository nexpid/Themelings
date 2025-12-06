// app/modules/game_update/useOfficialServerInvite.native.tsx
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
    var8 = var4.useCallback;
    var _closure1_slot5 = var8;
    var8 = var4.useEffect;
    var _closure1_slot6 = var8;
    var4 = var4.useState;
    var _closure1_slot7 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GuildFeatures;
    var _closure1_slot10 = var4;
    var4 = 19;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/game_update/useOfficialServerInvite.native.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var6 = var2.invite;
            var _closure2_slot0 = var6;
            var7 = var2.onJoinPress;
            var _closure2_slot1 = var7;
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 6;
            var3 = var5[var3];
            var15 = undefined;
            var8 = var4.bind(var15)(var3);
            var5 = var8.useStateFromStores;
            var3 = _closure1_slot9;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var6 = null;
                    var2 = var6 == var1;
                    var1 = undefined;
                    if(var2) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var2 = _closure2_slot0;
                    var2 = var2.guild;
                    var3 = var6 == var2;
                    var1 = undefined;
                    if(var3) { _fun0002_ip = 2; continue _fun0002 }
case 4:
                    var1 = var2.id;
case 2:
                    var1 = var6 != var1;
                    if(!var1) { _fun0002_ip = 5; continue _fun0002 }
case 6:
                    var4 = _closure1_slot9;
                    var3 = var4.isMember;
                    var2 = _closure2_slot0;
                    var8 = var6 == var2;
                    var2 = undefined;
                    if(var8) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                    var5 = _closure2_slot0;
                    var5 = var5.guild;
                    var6 = var6 == var5;
                    var2 = undefined;
                    if(var6) { _fun0002_ip = 7; continue _fun0002 }
case 9:
                    var2 = var5.id;
case 7:
                    var1 = var3.bind(var4)(var2);
case 5:
                    return var1;
                }
            };
            var4 = var5.bind(var8)(var4, var3);
            var _closure2_slot2 = var4;
            var5 = _closure1_slot5;
            var3 = new Array(3);
            var3[0] = var6;
            var3[1] = var7;
            var3[2] = var4;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var3 = null;
                    if(!(var3 != var2)) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                    var4 = _closure2_slot1;
                    var2 = undefined;
                    var2 = var4.bind(var2)();
case 10:
                    var2 = _closure2_slot2;
                    if(!var2) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                    var2 = _closure2_slot0;
                    var5 = var3 == var2;
                    var4 = undefined;
                    var2 = undefined;
                    if(var5) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                    var5 = _closure2_slot0;
                    var5 = var5.guild;
                    var6 = var3 == var5;
                    var2 = undefined;
                    if(var6) { _fun0003_ip = 14; continue _fun0003 }
case 16:
                    var2 = var5.id;
case 14:
                    if(!(var3 == var2)) { _fun0003_ip = 17; continue _fun0003 }
case 12:
                    var2 = _closure2_slot0;
                    if(!(var3 != var2)) { _fun0003_ip = 18; continue _fun0003 }
case 19:
                    var5 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 9;
                    var3 = var3[var2];
                    var2 = undefined;
                    var5 = var5.bind(var2)(var3);
                    var3 = var5.acceptInvite;
                    var2 = {};
                    var6 = _closure2_slot0;
                    var6 = var6.code;
                    var2['inviteKey'] = var6;
                    var6 = {};
                    var7 = 'Game Update Action Sheet';
                    var6['location'] = var7;
                    var2['context'] = var6;
                    var6 = true;
                    var2['skipOnboarding'] = var6;
                    var2 = var3.bind(var5)(var2);
                    _fun0003_ip = 18; continue _fun0003;
case 17:
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 7;
                    var3 = var5[var3];
                    var6 = var6.bind(var4)(var3);
                    var3 = var6.hideActionSheet;
                    var3 = var3.bind(var6)();
                    var3 = _closure1_slot0;
                    var2 = 8;
                    var2 = var5[var2];
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.transitionToGuild;
                    var1 = _closure2_slot0;
                    var1 = var1.guild;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
case 18:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var5.bind(var15)(var1, var3);
            var1 = null;
            if(!(var1 != var6)) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var5 = var6.guild;
            if(!(var1 != var5)) { _fun0001_ip = 20; continue _fun0001 }
case 22:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 10;
            var5 = var8[var5];
            var8 = var7.bind(var15)(var5);
            var7 = var8.fromInviteGuild;
            var5 = var6.guild;
            var10 = var7.bind(var8)(var5);
            var5 = var1 == var6;
            var12 = undefined;
            if(var5) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var12 = var6.approximate_presence_count;
case 23:
            var5 = var1 != var12;
            var9 = null;
            if(!var5) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var5 = 0;
            var5 = var12 > var5;
            var9 = null;
            if(!var5) { _fun0001_ip = 25; continue _fun0001 }
case 27:
            var7 = _closure1_slot0;
            var13 = _closure1_slot2;
            var5 = 11;
            var8 = var13[var5];
            var8 = var7.bind(var15)(var8);
            var11 = var8.intl;
            var8 = var11.formatToPlainString;
            var5 = var13[var5];
            var5 = var7.bind(var15)(var5);
            var5 = var5.t;
            var7 = var5.LC+S+m;
            var5 = {};
            var5['membersOnline'] = var12;
            var9 = var8.bind(var11)(var7, var5);
case 25:
            var5 = var1 == var6;
            var12 = undefined;
            if(var5) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var12 = var6.approximate_member_count;
case 28:
            if(!(var1 == var12)) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            var7 = var1 == var6;
            var5 = undefined;
            if(var7) { _fun0001_ip = 32; continue _fun0001 }
case 33:
            var6 = var6.guild;
            var7 = var1 == var6;
            var5 = undefined;
            if(var7) { _fun0001_ip = 32; continue _fun0001 }
case 34:
            var5 = var6.approximate_member_count;
case 32:
            var12 = var5;
case 30:
            var5 = var1 != var12;
            var8 = null;
            if(!var5) { _fun0001_ip = 35; continue _fun0001 }
case 36:
            var6 = _closure1_slot0;
            var13 = _closure1_slot2;
            var5 = 11;
            var7 = var13[var5];
            var7 = var6.bind(var15)(var7);
            var11 = var7.intl;
            var7 = var11.formatToPlainString;
            var5 = var13[var5];
            var5 = var6.bind(var15)(var5);
            var5 = var5.t;
            var6 = var5.zRl6XR;
            var5 = {};
            var5['count'] = var12;
            var8 = var7.bind(var11)(var6, var5);
case 35:
            var5 = var10.splash;
            var5 = var1 != var5;
            var7 = null;
            if(!var5) { _fun0001_ip = 37; continue _fun0001 }
case 38:
            var6 = _closure1_slot1;
            var14 = _closure1_slot2;
            var5 = 12;
            var5 = var14[var5];
            var11 = var6.bind(var15)(var5);
            var6 = var11.getGuildSplashURL;
            var5 = {};
            var12 = var10.id;
            var5['id'] = var12;
            var12 = var10.splash;
            var5['splash'] = var12;
            var13 = _closure1_slot0;
            var12 = 13;
            var12 = var14[var12];
            var13 = var13.bind(var15)(var12);
            var12 = var13.getDevicePixelRatio;
            var13 = var12.bind(var13)();
            var12 = 400;
            var12 = var12 * var13;
            var5['size'] = var12;
            var7 = var6.bind(var11)(var5);
case 37:
            var6 = _closure1_slot1;
            var11 = _closure1_slot2;
            var5 = 14;
            var5 = var11[var5];
            var12 = var6.bind(var15)(var5);
            var6 = var12.extractTimestamp;
            var5 = var10.id;
            var12 = var6.bind(var12)(var5);
            var6 = _closure1_slot0;
            var5 = 15;
            var5 = var11[var5];
            var11 = var6.bind(var15)(var5);
            var6 = var11.getEstablishedDate;
            var5 = _closure1_slot8;
            var5 = var5.locale;
            var14 = var6.bind(var11)(var12, var5);
            var5 = var1 != var14;
            var6 = null;
            if(!var5) { _fun0001_ip = 39; continue _fun0001 }
case 40:
            var11 = _closure1_slot0;
            var16 = _closure1_slot2;
            var5 = 11;
            var12 = var16[var5];
            var12 = var11.bind(var15)(var12);
            var13 = var12.intl;
            var12 = var13.formatToPlainString;
            var5 = var16[var5];
            var5 = var11.bind(var15)(var5);
            var5 = var5.t;
            var11 = var5.zb2Q56;
            var5 = {};
            var5['createdAtDate'] = var14;
            var6 = var12.bind(var13)(var11, var5);
case 39:
            var11 = var10.features;
            var5 = var11.has;
            var2 = _closure1_slot10;
            var2 = var2.VERIFIED;
            var5 = var5.bind(var11)(var2);
            var2 = {};
            var2['guild'] = var10;
            var2['onlineText'] = var9;
            var2['memberText'] = var8;
            var2['splashUrl'] = var7;
            var2['establishedText'] = var6;
            var2['isVerified'] = var5;
            var2['isMember'] = var4;
            var2['handleJoinPress'] = var3;
            return var2;
case 20:
            return var1;
        }
    };
    var3['useServerInviteDetails'] = var4;
    var2 = function(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var3 = var2.serverInviteUrl;
            var _closure2_slot0 = var3;
            var4 = _closure1_slot7;
            var7 = undefined;
            var5 = null;
            var8 = var4.bind(var7)(var5);
            var6 = _closure1_slot4;
            var4 = 2;
            var8 = var6.bind(var7)(var8, var4);
            var4 = 0;
            var4 = var8[var4];
            var6 = 1;
            var6 = var8[var6];
            var _closure2_slot1 = var6;
            var6 = _closure1_slot6;
            var2 = new Array(1);
            var2[0] = var3;
            var1 = function() {
                var2 = function() {
                    var4 = _closure1_slot3;
                    var3 = undefined;
                    var2 = function* (arg1) {
                        var1 = function* anon_0_(arg1) {
                            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                                StartGenerator();
                                var8 = arg1;
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0005_ip = 41; continue _fun0005 }
case 11:
                                var2 = undefined;
                                var3 = undefined;
                                var6 = null;
                                if(!(var6 != var8)) { _fun0005_ip = 24; continue _fun0005 }
case 42:
                                var7 = _closure1_slot0;
                                var9 = _closure1_slot2;
                                var5 = 16;
                                var5 = var9[var5];
                                var7 = var7.bind(var2)(var5);
                                var5 = var7.findCodedLink;
                                var5 = var5.bind(var7)(var8);
                                var3 = var5;
                                if(!(var6 != var5)) { _fun0005_ip = 24; continue _fun0005 }
case 43:
                                var5 = var3;
                                var6 = var5.type;
                                var7 = _closure1_slot0;
                                var8 = _closure1_slot2;
                                var5 = 17;
                                var5 = var8[var5];
                                var5 = var7.bind(var2)(var5);
                                var5 = var5.CodedLinkType;
                                var5 = var5.INVITE;
                                if(!(var6 === var5)) { _fun0005_ip = 24; continue _fun0005 }
case 44: // try_start_0
                                var5 = _closure1_slot1;
                                var6 = _closure1_slot2;
                                var4 = 18;
                                var4 = var6[var4];
                                var5 = var5.bind(var2)(var4);
                                var4 = var3.code;
                                var3 = 'game_update_action_sheet';
                                var3 = var5.bind(var2)(var4, var3);
                                SaveGenerator(address=152);
case 45:
                                return var3;
case 46:
                                ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                                if(var4) { _fun0005_ip = 47; continue _fun0005 }
case 48:
                                var5 = var3.invite;
                                var4 = _closure2_slot1;
                                var4 = var4.bind(var2)(var5);
case 49: // try_end0
                                _fun0005_ip = 24; continue _fun0005;
case 47:
                                return var3;
case 50: // catch_target0
                                CatchBlockStart(arg_register=2);
case 24:
                                return var2;
case 41:
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
                var1 = undefined;
                var3 = var2.bind(var1)();
                var2 = _closure2_slot0;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var1 = var6.bind(var7)(var1, var2);
            var2 = var5 == var4;
            var1 = null;
            if(var2) { _fun0004_ip = 51; continue _fun0004 }
case 52:
            var2 = var5 == var3;
            var1 = null;
            if(var2) { _fun0004_ip = 51; continue _fun0004 }
case 53:
            var2 = {};
            var2['invite'] = var4;
            var2['serverInviteUrl'] = var3;
            var1 = var2;
case 51:
            return var1;
        }
    };
    var3['useOfficialServerInvite'] = var2;
    return var1;
})();