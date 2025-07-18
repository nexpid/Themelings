// app/modules/guild_member_verification/native/components/alerts/MemberVerificationAlertRejected.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
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
    var4 = native4;
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
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_member_verification/native/components/alerts/MemberVerificationAlertRejected.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function MemberVerificationAlertRejected(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var5 = arg1;
            var11 = var5.guildId;
            var _closure2_slot0 = var11;
            var9 = var5.secondaryButton;
            var10 = var5.onClose;
            var _closure2_slot1 = var10;
            var4 = {'guildId': 0, 'secondaryButton': 0, 'onClose': 0};
            var1 = null;
            var21 = var4;
            var20 = null;
            var3 = silentSetPrototypeOf(var21, var20);
            var21 = {};
            var20 = var5;
            var19 = var4;
            var6 = copyDataProperties(var21, var20, var19);
            var4 = undefined;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 6;
            var3 = var8[var3];
            var7 = var7.bind(var4)(var3);
            var3 = var7.useCurrentUserGuildJoinRequest;
            var3 = var3.bind(var7)(var11);
            var7 = var1 == var3;
            var12 = undefined;
            if(var7) { _fun0001_ip = 126; continue _fun0001 }
 120:
            var12 = var3.rejectionReason;
 126:
            var8 = _closure1_slot0;
            var14 = _closure1_slot2;
            var7 = 7;
            var3 = var14[var7];
            var16 = var8.bind(var4)(var3);
            var15 = var16.useStateFromStores;
            var3 = _closure1_slot6;
            var13 = new Array(1);
            var13[0] = var3;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure1_slot6;
                    var1 = var2.getCurrentUser;
                    var2 = var1.bind(var2)();
                    var1 = null;
                    var3 = var1 == var2;
                    var1 = undefined;
                    if(var3) { _fun0002_ip = 32; continue _fun0002 }
 27:
                    var1 = var2.id;
 32:
                    return var1;
                }
            };
            var3 = var15.bind(var16)(var13, var3);
            _closure2_slot2 = var3;
            var13 = var14[var7];
            var18 = var8.bind(var4)(var13);
            var17 = var18.useStateFromStores;
            var13 = _closure1_slot7;
            var16 = new Array(1);
            var16[0] = var13;
            var15 = new Array(1);
            var15[0] = var11;
            var13 = function() {
                var3 = _closure1_slot7;
                var2 = var3.getJoinRequestGuild;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var13 = var17.bind(var18)(var16, var13, var15);
            var7 = var14[var7];
            var15 = var8.bind(var4)(var7);
            var14 = var15.useStateFromStores;
            var7 = _closure1_slot5;
            var8 = new Array(1);
            var8[0] = var7;
            var7 = new Array(2);
            var7[0] = var3;
            var7[1] = var11;
            var3 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure2_slot2;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0003_ip = 43; continue _fun0003 }
 16:
                    var5 = _closure1_slot5;
                    var4 = var5.getMember;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot2;
                    var1 = var4.bind(var5)(var3, var2);
 43:
                    return var1;
                }
            };
            var14 = var14.bind(var15)(var8, var3, var7);
            _closure2_slot3 = var14;
            var8 = _closure1_slot4;
            var7 = var8.useCallback;
            var3 = _closure1_slot3;
            var2 = function* () {
                var1 = function* anon_0_() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0004_ip = 203; continue _fun0004 }
 10:
                        var2 = _closure2_slot3;
                        var5 = null;
                        if(!(var5 != var2)) { _fun0004_ip = 36; continue _fun0004 }
 23:
                        var2 = _closure2_slot3;
                        var2 = var2.isPending;
                        if(var2) { _fun0004_ip = 89; continue _fun0004 }
 36:
                        var6 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var2 = 8;
                        var3 = var3[var2];
                        var2 = undefined;
                        var6 = var6.bind(var2)(var3);
                        var3 = var6.resetGuildJoinRequest;
                        var2 = _closure2_slot0;
                        var2 = var3.bind(var6)(var2);
                        SaveGenerator(address=80);
 78:
                        return var2;
 80:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(!var3) { _fun0004_ip = 139; continue _fun0004 }
 86:
                        return var2;
 89:
                        var6 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var2 = 8;
                        var3 = var3[var2];
                        var2 = undefined;
                        var6 = var6.bind(var2)(var3);
                        var3 = var6.removeGuildJoinRequest;
                        var2 = _closure2_slot0;
                        var2 = var3.bind(var6)(var2);
                        SaveGenerator(address=133);
 131:
                        return var2;
 133:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(var3) { _fun0004_ip = 200; continue _fun0004 }
 139:
                        var3 = _closure2_slot1;
                        if(!(var5 != var3)) { _fun0004_ip = 157; continue _fun0004 }
 147:
                        var5 = _closure2_slot1;
                        var3 = undefined;
                        var3 = var5.bind(var3)();
 157:
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var3 = 9;
                        var5 = var5[var3];
                        var3 = undefined;
                        var6 = var6.bind(var3)(var5);
                        var5 = var6.openMemberVerificationModal;
                        var4 = _closure2_slot0;
                        var4 = var5.bind(var6)(var4);
                        return var3;
 200:
                        return var2;
 203:
                        return var1;
                    }
                };
                return var1;
            };
            var3 = var3.bind(var4)(var2);
            var2 = new Array(3);
            var2[0] = var11;
            var15 = var1 == var14;
            var11 = undefined;
            if(var15) { _fun0001_ip = 324; continue _fun0001 }
 318:
            var11 = var14.isPending;
 324:
            var2[1] = var11;
            var2[2] = var10;
            var11 = var7.bind(var8)(var3, var2);
            var3 = var1 == var13;
            var2 = undefined;
            if(var3) { _fun0001_ip = 352; continue _fun0001 }
 347:
            var2 = var13.name;
 352:
            if(!(var1 == var2)) { _fun0001_ip = 415; continue _fun0001 }
 356:
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 10;
            var3 = var10[var2];
            var3 = var8.bind(var4)(var3);
            var7 = var3.intl;
            var3 = var7.string;
            var2 = var10[var2];
            var2 = var8.bind(var4)(var2);
            var2 = var2.t;
            var2 = var2.gBPcuL;
            var8 = var3.bind(var7)(var2);
            _fun0001_ip = 485; continue _fun0001;
 415:
            var3 = _closure1_slot0;
            var14 = _closure1_slot2;
            var2 = 10;
            var7 = var14[var2];
            var7 = var3.bind(var4)(var7);
            var10 = var7.intl;
            var7 = var10.formatToPlainString;
            var2 = var14[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.t;
            var3 = var2.P+/gzM;
            var2 = {};
            var13 = var13.name;
            var2['guildName'] = var13;
            var8 = var7.bind(var10)(var3, var2);
 485:
            var1 = var1 != var12;
            var7 = undefined;
            if(!var1) { _fun0001_ip = 569; continue _fun0001 }
 494:
            var1 = '';
            var7 = undefined;
            if(!(var1 !== var12)) { _fun0001_ip = 569; continue _fun0001 }
 504:
            var2 = _closure1_slot0;
            var13 = _closure1_slot2;
            var1 = 10;
            var3 = var13[var1];
            var3 = var2.bind(var4)(var3);
            var10 = var3.intl;
            var3 = var10.formatToPlainString;
            var1 = var13[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.t;
            var2 = var1.fU5PPD;
            var1 = {};
            var1['rejectionReason'] = var12;
            var7 = var3.bind(var10)(var2, var1);
 569:
            var3 = _closure1_slot8;
            var2 = _closure1_slot1;
            var16 = _closure1_slot2;
            var1 = 11;
            var1 = var16[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var21 = var1;
            var20 = var6;
            var6 = copyDataProperties(var21, var20);
            var15 = _closure1_slot0;
            var6 = 12;
            var6 = var16[var6];
            var6 = var15.bind(var4)(var6);
            var10 = var6.XSmallIcon;
            var6 = 'icon';
            var1[var6] = var10;
            var6 = 'header';
            var1[var6] = var8;
            var6 = 'subtitle';
            var1[var6] = var7;
            var7 = _closure1_slot10;
            var6 = _closure1_slot9;
            var5 = {};
            var8 = 13;
            var8 = var16[var8];
            var8 = var15.bind(var4)(var8);
            var10 = var8.Button;
            var8 = {};
            var12 = 'secondary';
            var8['variant'] = var12;
            var12 = 10;
            var13 = var16[var12];
            var13 = var15.bind(var4)(var13);
            var14 = var13.intl;
            var13 = var14.string;
            var12 = var16[var12];
            var12 = var15.bind(var4)(var12);
            var12 = var12.t;
            var12 = var12.rpFCLi;
            var12 = var13.bind(var14)(var12);
            var8['text'] = var12;
            var8['onPress'] = var11;
            var10 = var3.bind(var4)(var10, var8);
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