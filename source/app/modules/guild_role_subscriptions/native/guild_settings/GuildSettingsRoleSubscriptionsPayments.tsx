// app/modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionsPayments.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var8 = native3;
    var7 = native4;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var _closure1_slot3 = var6;
    var1 = function PayoutSection(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var1 = var1.guild;
            var5 = undefined;
            var _closure2_slot0 = var5;
            var3 = _closure1_slot11;
            var6 = var3.bind(var5)();
            var4 = _closure1_slot0;
            var8 = _closure1_slot3;
            var3 = 8;
            var3 = var8[var3];
            var4 = var4.bind(var5)(var3);
            var3 = var4.useNavigation;
            var3 = var3.bind(var4)();
            var7 = _closure1_slot1;
            var4 = 9;
            var4 = var8[var4];
            var8 = var7.bind(var5)(var4);
            var7 = null;
            var10 = var7 == var1;
            var4 = undefined;
            if(var10) { _fun0001_ip = 89; continue _fun0001 }
 84:
            var4 = var1.id;
 89:
            var1 = _closure1_slot9;
            var1 = var1.GUILD_ROLE_SUBSCRIPTIONS;
            var1 = var8.bind(var5)(var4, var1);
            var4 = var1.application;
            _closure2_slot0 = var4;
            var8 = var1.loading;
            var1 = var1.error;
            var12 = _closure1_slot5;
            var11 = var12.useCallback;
            var10 = _closure1_slot4;
            var9 = function* () {
                var1 = function* anon_0_() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0002_ip = 244; continue _fun0002 }
 10:
                        var2 = undefined;
                        var4 = undefined;
                        var6 = undefined;
 16: // try_start_0
                        var3 = _closure2_slot0;
                        var8 = null;
                        var5 = var8 == var3;
                        var3 = undefined;
                        if(var5) { _fun0002_ip = 61; continue _fun0002 }
 34:
                        var5 = _closure2_slot0;
                        var5 = var5.team;
                        var4 = var5;
                        var5 = var8 == var5;
                        var3 = undefined;
                        if(var5) { _fun0002_ip = 61; continue _fun0002 }
 56:
                        var3 = var4.id;
 61:
                        if(!(var8 != var3)) { _fun0002_ip = 149; continue _fun0002 }
 65:
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot3;
                        var3 = 10;
                        var3 = var5[var3];
                        var5 = var4.bind(var2)(var3);
                        var4 = var5.performRoleSubscriptionEditPayoutRedirect;
                        var3 = _closure2_slot0;
                        var9 = var8 == var3;
                        var3 = undefined;
                        if(var9) { _fun0002_ip = 134; continue _fun0002 }
 107:
                        var7 = _closure2_slot0;
                        var7 = var7.team;
                        var6 = var7;
                        var7 = var8 == var7;
                        var3 = undefined;
                        if(var7) { _fun0002_ip = 134; continue _fun0002 }
 129:
                        var3 = var6.id;
 134:
                        var3 = var4.bind(var5)(var3);
                        SaveGenerator(address=143);
 141:
                        return var3;
 143:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                        if(var4) { _fun0002_ip = 151; continue _fun0002 }
 149: // try_end0
                        _fun0002_ip = 241; continue _fun0002;
 151:
                        return var3;
 154: // catch_target0
                        CatchBlockStart(arg_register=2);
                        var5 = _closure1_slot2;
                        var9 = _closure1_slot3;
                        var4 = 11;
                        var4 = var9[var4];
                        var5 = var5.bind(var2)(var4);
                        var4 = var5.presentFailedToast;
                        var8 = _closure1_slot0;
                        var3 = 12;
                        var6 = var9[var3];
                        var6 = var8.bind(var2)(var6);
                        var7 = var6.intl;
                        var6 = var7.string;
                        var3 = var9[var3];
                        var3 = var8.bind(var2)(var3);
                        var3 = var3.t;
                        var3 = var3.R0RpRU;
                        var3 = var6.bind(var7)(var3);
                        var3 = var4.bind(var5)(var3);
 241:
                        return var2;
 244:
                        return var1;
                    }
                };
                return var1;
            };
            var10 = var10.bind(var5)(var9);
            var9 = var7 == var4;
            var13 = undefined;
            if(var9) { _fun0001_ip = 165; continue _fun0001 }
 159:
            var13 = var4.team;
 165:
            var9 = new Array(1);
            var9[0] = var13;
            var12 = var11.bind(var12)(var10, var9);
            if(var8) { _fun0001_ip = 497; continue _fun0001 }
 185:
            var1 = var7 == var1;
            if(!var1) { _fun0001_ip = 196; continue _fun0001 }
 192:
            var1 = var7 != var4;
 196:
            if(var1) { _fun0001_ip = 291; continue _fun0001 }
 199:
            var4 = _closure1_slot2;
            var11 = _closure1_slot3;
            var1 = 11;
            var1 = var11[var1];
            var7 = var4.bind(var5)(var1);
            var4 = var7.presentFailedToast;
            var10 = _closure1_slot0;
            var1 = 12;
            var8 = var11[var1];
            var8 = var10.bind(var5)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var1 = var11[var1];
            var1 = var10.bind(var5)(var1);
            var1 = var1.t;
            var1 = var1.R0RpRU;
            var1 = var8.bind(var9)(var1);
            var1 = var4.bind(var7)(var1);
            var1 = var3.pop;
            var1 = var1.bind(var3)();
 291:
            var4 = _closure1_slot10;
            var14 = _closure1_slot0;
            var16 = _closure1_slot3;
            var13 = 14;
            var1 = var16[var13];
            var1 = var14.bind(var5)(var1);
            var3 = var1.Form;
            var1 = {};
            var6 = var6.container;
            var1['style'] = var6;
            var8 = _closure1_slot10;
            var6 = var16[var13];
            var6 = var14.bind(var5)(var6);
            var7 = var6.FormSection;
            var6 = {};
            var11 = _closure1_slot10;
            var9 = var16[var13];
            var9 = var14.bind(var5)(var9);
            var10 = var9.FormRow;
            var9 = {};
            var15 = 12;
            var17 = var16[var15];
            var17 = var14.bind(var5)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var15 = var16[var15];
            var15 = var14.bind(var5)(var15);
            var15 = var15.t;
            var15 = var15.Lg8WEx;
            var15 = var17.bind(var18)(var15);
            var9['label'] = var15;
            var15 = _closure1_slot10;
            var13 = var16[var13];
            var13 = var14.bind(var5)(var13);
            var13 = var13.FormRow;
            var14 = var13.Arrow;
            var13 = {};
            var13 = var15.bind(var5)(var14, var13);
            var9['trailing'] = var13;
            var9['onPress'] = var12;
            var9 = var11.bind(var5)(var10, var9);
            var6['children'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var1['children'] = var6;
            var1 = var4.bind(var5)(var3, var1);
            _fun0001_ip = 529; continue _fun0001;
 497:
            var4 = _closure1_slot10;
            var3 = _closure1_slot1;
            var6 = _closure1_slot3;
            var2 = 13;
            var2 = var6[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var1 = var4.bind(var5)(var3, var2);
 529:
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var11 = 1;
    var4 = var6[var11];
    var7 = var7.bind(var1)(var4);
    var _closure1_slot5 = var7;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.isGuildOwner;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ApplicationTypes;
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var10['flex'] = var11;
    var4['container'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot11 = var4;
    var4 = var7.forwardRef;
    var2 = function(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var2 = arg1;
            var2 = var2.guildId;
            var _closure2_slot0 = var2;
            var4 = _closure1_slot0;
            var7 = _closure1_slot3;
            var3 = 15;
            var6 = var7[var3];
            var5 = undefined;
            var10 = var4.bind(var5)(var6);
            var9 = var10.useStateFromStores;
            var6 = _closure1_slot7;
            var8 = new Array(1);
            var8[0] = var6;
            var6 = function() {
                var3 = _closure1_slot7;
                var2 = var3.getGuild;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var6 = var9.bind(var10)(var8, var6);
            var3 = var7[var3];
            var7 = var4.bind(var5)(var3);
            var4 = var7.useStateFromStores;
            var8 = _closure1_slot8;
            var3 = new Array(1);
            var3[0] = var8;
            var1 = function() {
                var2 = _closure1_slot8;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var4 = var4.bind(var7)(var3, var1);
            var1 = null;
            var3 = var1 != var6;
            if(!var3) { _fun0003_ip = 127; continue _fun0003 }
 117:
            var1 = _closure1_slot6;
            var3 = var1.bind(var5)(var6, var4);
 127:
            var4 = _closure1_slot0;
            var7 = _closure1_slot3;
            var1 = 16;
            var1 = var7[var1];
            var4 = var4.bind(var5)(var1);
            var1 = var4.useGuildEligibleForRoleSubscriptionsMobileTeamSetup;
            var1 = var1.bind(var4)(var6);
            if(!var3) { _fun0003_ip = 167; continue _fun0003 }
 161:
            if(var1) { _fun0003_ip = 315; continue _fun0003 }
 167:
            var4 = _closure1_slot10;
            var3 = _closure1_slot1;
            var11 = _closure1_slot3;
            var1 = 17;
            var1 = var11[var1];
            var3 = var3.bind(var5)(var1);
            var1 = {};
            var10 = _closure1_slot0;
            var7 = 12;
            var8 = var11[var7];
            var8 = var10.bind(var5)(var8);
            var12 = var8.intl;
            var9 = var12.string;
            var8 = var11[var7];
            var8 = var10.bind(var5)(var8);
            var8 = var8.t;
            var8 = var8.qAMb9P;
            var8 = var9.bind(var12)(var8);
            var1['title'] = var8;
            var8 = var11[var7];
            var8 = var10.bind(var5)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var7 = var11[var7];
            var7 = var10.bind(var5)(var7);
            var7 = var7.t;
            var7 = var7.pRuzXF;
            var7 = var8.bind(var9)(var7);
            var1['description'] = var7;
            var7 = true;
            var1['brightTitle'] = var7;
            var1 = var4.bind(var5)(var3, var1);
            _fun0003_ip = 335; continue _fun0003;
 315:
            var4 = _closure1_slot10;
            var3 = _closure1_slot12;
            var2 = {};
            var2['guild'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 335:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 18;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionsPayments.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();