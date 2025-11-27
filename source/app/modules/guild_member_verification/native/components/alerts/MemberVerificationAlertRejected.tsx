// app/modules/guild_member_verification/native/components/alerts/MemberVerificationAlertRejected.tsx
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
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot8 = var7;
    var7 = var4.Fragment;
    var _closure1_slot9 = var7;
    var4 = var4.jsxs;
    var _closure1_slot10 = var4;
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_member_verification/native/components/alerts/MemberVerificationAlertRejected.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function MemberVerificationAlertRejected(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var13 = var4.guildId;
            var _closure2_slot0 = var13;
            var9 = var4.secondaryButton;
            var7 = var4.onClose;
            var _closure2_slot1 = var7;
            var3 = {'guildId': 0, 'secondaryButton': 0, 'onClose': 0};
            var10 = null;
            var23 = var3;
            var22 = null;
            var2 = silentSetPrototypeOf(var23, var22);
            var23 = {};
            var22 = var4;
            var21 = var3;
            var5 = copyDataProperties(var23, var22, var21);
            var4 = undefined;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 6;
            var2 = var6[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.useCurrentUserGuildJoinRequest;
            var2 = var2.bind(var3)(var13);
            var3 = var10 == var2;
            var15 = undefined;
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var15 = var2.rejectionReason;
case 2:
            var6 = _closure1_slot0;
            var16 = _closure1_slot2;
            var3 = 7;
            var2 = var16[var3];
            var14 = var6.bind(var4)(var2);
            var12 = var14.useStateFromStores;
            var2 = _closure1_slot6;
            var11 = new Array(1);
            var11[0] = var2;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure1_slot6;
                    var1 = var2.getCurrentUser;
                    var2 = var1.bind(var2)();
                    var1 = null;
                    var3 = var1 == var2;
                    var1 = undefined;
                    if(var3) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var1 = var2.id;
case 4:
                    return var1;
                }
            };
            var2 = var12.bind(var14)(var11, var2);
            _closure2_slot2 = var2;
            var11 = 8;
            var11 = var16[var11];
            var12 = var6.bind(var4)(var11);
            var11 = var12.useCanReapplyToRejectedMemberVerificationApplication;
            var12 = var11.bind(var12)(var13);
            var11 = var12.canReapply;
            var14 = var12.isLoading;
            var12 = var16[var3];
            var20 = var6.bind(var4)(var12);
            var19 = var20.useStateFromStores;
            var12 = _closure1_slot7;
            var18 = new Array(1);
            var18[0] = var12;
            var17 = new Array(1);
            var17[0] = var13;
            var12 = function() {
                var3 = _closure1_slot7;
                var2 = var3.getJoinRequestGuild;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var12 = var19.bind(var20)(var18, var12, var17);
            var3 = var16[var3];
            var17 = var6.bind(var4)(var3);
            var16 = var17.useStateFromStores;
            var3 = _closure1_slot5;
            var6 = new Array(1);
            var6[0] = var3;
            var3 = new Array(2);
            var3[0] = var2;
            var3[1] = var13;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure2_slot2;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                    var5 = _closure1_slot5;
                    var4 = var5.getMember;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot2;
                    var1 = var4.bind(var5)(var3, var2);
case 6:
                    return var1;
                }
            };
            var16 = var16.bind(var17)(var6, var2, var3);
            _closure2_slot3 = var16;
            var6 = _closure1_slot4;
            var3 = var6.useCallback;
            var2 = _closure1_slot3;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0004_ip = 8; continue _fun0004 }
case 9:
                        var2 = _closure2_slot3;
                        var5 = null;
                        if(!(var5 != var2)) { _fun0004_ip = 10; continue _fun0004 }
case 11:
                        var2 = _closure2_slot3;
                        var2 = var2.isPending;
                        if(var2) { _fun0004_ip = 12; continue _fun0004 }
case 10:
                        var6 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var2 = 9;
                        var3 = var3[var2];
                        var2 = undefined;
                        var6 = var6.bind(var2)(var3);
                        var3 = var6.resetGuildJoinRequest;
                        var2 = _closure2_slot0;
                        var2 = var3.bind(var6)(var2);
                        SaveGenerator(address=80);
case 13:
                        return var2;
case 14:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(!var3) { _fun0004_ip = 15; continue _fun0004 }
case 16:
                        return var2;
case 12:
                        var6 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var2 = 9;
                        var3 = var3[var2];
                        var2 = undefined;
                        var6 = var6.bind(var2)(var3);
                        var3 = var6.removeGuildJoinRequest;
                        var2 = _closure2_slot0;
                        var2 = var3.bind(var6)(var2);
                        SaveGenerator(address=133);
case 17:
                        return var2;
case 18:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(var3) { _fun0004_ip = 19; continue _fun0004 }
case 15:
                        var3 = _closure2_slot1;
                        if(!(var5 != var3)) { _fun0004_ip = 20; continue _fun0004 }
case 21:
                        var5 = _closure2_slot1;
                        var3 = undefined;
                        var3 = var5.bind(var3)();
case 20:
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var3 = 10;
                        var5 = var5[var3];
                        var3 = undefined;
                        var6 = var6.bind(var3)(var5);
                        var5 = var6.openMemberVerificationModal;
                        var4 = _closure2_slot0;
                        var4 = var5.bind(var6)(var4);
                        return var3;
case 19:
                        return var2;
case 8:
                        return var1;
                    }
                };
                return var1;
            };
            var2 = var2.bind(var4)(var1);
            var1 = new Array(3);
            var1[0] = var13;
            var17 = var10 == var16;
            var13 = undefined;
            if(var17) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var13 = var16.isPending;
case 22:
            var1[1] = var13;
            var1[2] = var7;
            var13 = var3.bind(var6)(var2, var1);
            var2 = var10 == var12;
            var1 = undefined;
            if(var2) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var1 = var12.name;
case 24:
            if(!(var10 == var1)) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 11;
            var2 = var7[var1];
            var2 = var6.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var7[var1];
            var1 = var6.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.gBPcuP;
            var7 = var2.bind(var3)(var1);
            _fun0001_ip = 28; continue _fun0001;
case 26:
            var2 = _closure1_slot0;
            var16 = _closure1_slot2;
            var1 = 11;
            var3 = var16[var1];
            var3 = var2.bind(var4)(var3);
            var6 = var3.intl;
            var3 = var6.formatToPlainString;
            var1 = var16[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.t;
            var2 = var1.P+/gzA;
            var1 = {};
            var12 = var12.name;
            var1['guildName'] = var12;
            var7 = var3.bind(var6)(var2, var1);
case 28:
            var1 = var10 != var15;
            var6 = undefined;
            if(!var1) { _fun0001_ip = 29; continue _fun0001 }
case 30:
            var1 = '';
            var6 = undefined;
            if(!(var1 !== var15)) { _fun0001_ip = 29; continue _fun0001 }
case 31:
            var2 = _closure1_slot0;
            var16 = _closure1_slot2;
            var1 = 11;
            var3 = var16[var1];
            var3 = var2.bind(var4)(var3);
            var12 = var3.intl;
            var3 = var12.formatToPlainString;
            var1 = var16[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.t;
            var2 = var1.fU5PPM;
            var1 = {};
            var1['rejectionReason'] = var15;
            var6 = var3.bind(var12)(var2, var1);
case 29:
            var3 = _closure1_slot8;
            var2 = _closure1_slot1;
            var15 = _closure1_slot2;
            var1 = 12;
            var1 = var15[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var23 = var1;
            var22 = var5;
            var5 = copyDataProperties(var23, var22);
            var12 = _closure1_slot0;
            var5 = 13;
            var5 = var15[var5];
            var5 = var12.bind(var4)(var5);
            var12 = var5.XSmallIcon;
            var5 = 'icon';
            var1[var5] = var12;
            var5 = 'header';
            var1[var5] = var7;
            var5 = 'subtitle';
            var1[var5] = var6;
            var7 = _closure1_slot10;
            var6 = _closure1_slot9;
            var5 = {};
            if(var11) { _fun0001_ip = 32; continue _fun0001 }
case 33:
            var10 = null;
            if(!var14) { _fun0001_ip = 34; continue _fun0001 }
case 32:
            var12 = _closure1_slot8;
            var17 = _closure1_slot0;
            var18 = _closure1_slot2;
            var8 = 14;
            var8 = var18[var8];
            var8 = var17.bind(var4)(var8);
            var11 = var8.Button;
            var8 = {};
            var8['loading'] = var14;
            var8['disabled'] = var14;
            var14 = 'secondary';
            var8['variant'] = var14;
            var14 = 11;
            var15 = var18[var14];
            var15 = var17.bind(var4)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var14 = var18[var14];
            var14 = var17.bind(var4)(var14);
            var14 = var14.t;
            var14 = var14.rpFCLs;
            var14 = var15.bind(var16)(var14);
            var8['text'] = var14;
            var8['onPress'] = var13;
            var10 = var12.bind(var4)(var11, var8);
case 34:
            var8 = new Array(2);
            var8[0] = var10;
            var8[1] = var9;
            var5['children'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = 'buttons';
            var1[var5] = var6;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();