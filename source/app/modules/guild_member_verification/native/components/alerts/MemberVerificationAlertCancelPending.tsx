// app/modules/guild_member_verification/native/components/alerts/MemberVerificationAlertCancelPending.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var1 = native3;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot4 = var7;
    var7 = var4.Fragment;
    var _closure1_slot5 = var7;
    var4 = var4.jsxs;
    var _closure1_slot6 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_member_verification/native/components/alerts/MemberVerificationAlertCancelPending.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function MemberVerificationAlertCancelPending(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var5 = var4.guildId;
            var _closure2_slot0 = var5;
            var15 = var4.confirmText;
            var6 = var4.subtitleText;
            var12 = var4.onClose;
            var _closure2_slot1 = var12;
            var3 = {'guildId': 0, 'confirmText': 0, 'subtitleText': 0, 'onClose': 0};
            var16 = null;
            var23 = var3;
            var22 = null;
            var2 = silentSetPrototypeOf(var23, var22);
            var23 = {};
            var22 = var4;
            var21 = var3;
            var7 = copyDataProperties(var23, var22, var21);
            var4 = _closure1_slot3;
            var3 = var4.useCallback;
            var2 = new Array(2);
            var2[0] = var5;
            var2[1] = var12;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0002_ip = 23; continue _fun0002 }
 13:
                    var3 = _closure2_slot1;
                    var1 = undefined;
                    var1 = var3.bind(var1)();
 23:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 2;
                    var3 = var3[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.removeGuildJoinRequest;
                    var2 = _closure2_slot0;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var14 = var3.bind(var4)(var1, var2);
            var4 = _closure1_slot4;
            var2 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 3;
            var1 = var5[var1];
            var3 = undefined;
            var2 = var2.bind(var3)(var1);
            var1 = {};
            var23 = var1;
            var22 = var7;
            var7 = copyDataProperties(var23, var22);
            var9 = _closure1_slot0;
            var17 = 4;
            var7 = var5[var17];
            var7 = var9.bind(var3)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var5 = var5[var17];
            var5 = var9.bind(var3)(var5);
            var5 = var5.t;
            var5 = var5.KYiN1d;
            var7 = var7.bind(var8)(var5);
            var5 = 'header';
            var1[var5] = var7;
            if(!(var16 == var6)) { _fun0001_ip = 266; continue _fun0001 }
 212:
            var9 = _closure1_slot0;
            var5 = _closure1_slot2;
            var7 = var5[var17];
            var7 = var9.bind(var3)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var5 = var5[var17];
            var5 = var9.bind(var3)(var5);
            var5 = var5.t;
            var5 = var5.nQHxqq;
            var6 = var7.bind(var8)(var5);
 266:
            var5 = 'subtitle';
            var1[var5] = var6;
            var7 = _closure1_slot6;
            var6 = _closure1_slot5;
            var5 = {};
            var13 = _closure1_slot4;
            var11 = _closure1_slot0;
            var8 = _closure1_slot2;
            var9 = 5;
            var8 = var8[var9];
            var8 = var11.bind(var3)(var8);
            var11 = var8.Button;
            var8 = {};
            var18 = 'destructive';
            var8['variant'] = var18;
            if(!(var16 == var15)) { _fun0001_ip = 385; continue _fun0001 }
 331:
            var20 = _closure1_slot0;
            var16 = _closure1_slot2;
            var18 = var16[var17];
            var18 = var20.bind(var3)(var18);
            var19 = var18.intl;
            var18 = var19.string;
            var16 = var16[var17];
            var16 = var20.bind(var3)(var16);
            var16 = var16.t;
            var16 = var16.OzHPdX;
            var15 = var18.bind(var19)(var16);
 385:
            var8['text'] = var15;
            var8['onPress'] = var14;
            var11 = var13.bind(var3)(var11, var8);
            var8 = new Array(2);
            var8[0] = var11;
            var11 = _closure1_slot4;
            var16 = _closure1_slot0;
            var13 = _closure1_slot2;
            var9 = var13[var9];
            var9 = var16.bind(var3)(var9);
            var10 = var9.Button;
            var9 = {};
            var14 = var13[var17];
            var14 = var16.bind(var3)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var13 = var13[var17];
            var13 = var16.bind(var3)(var13);
            var13 = var13.t;
            var13 = var13.bANR0d;
            var13 = var14.bind(var15)(var13);
            var9['text'] = var13;
            var13 = 'secondary';
            var9['variant'] = var13;
            var9['onPress'] = var12;
            var9 = var11.bind(var3)(var10, var9);
            var8[1] = var9;
            var5['children'] = var8;
            var6 = var7.bind(var3)(var6, var5);
            var5 = 'buttons';
            var1[var5] = var6;
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();