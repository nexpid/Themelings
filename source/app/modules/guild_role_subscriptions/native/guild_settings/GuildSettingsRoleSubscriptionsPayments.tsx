// app/modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionsPayments.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var7 = metroImportAll;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var _closure1_slot3 = var6;
    var1 = function PayoutSection(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
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
            if(var10) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var1.id;
case 2:
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
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                        var2 = undefined;
                        var4 = undefined;
                        var6 = undefined;
case 6: // try_start_0
                        var3 = _closure2_slot0;
                        var8 = null;
                        var5 = var8 == var3;
                        var3 = undefined;
                        if(var5) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                        var5 = _closure2_slot0;
                        var5 = var5.team;
                        var4 = var5;
                        var5 = var8 == var5;
                        var3 = undefined;
                        if(var5) { _fun0002_ip = 7; continue _fun0002 }
case 9:
                        var3 = var4.id;
case 7:
                        if(!(var8 != var3)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot3;
                        var3 = 10;
                        var3 = var5[var3];
                        var5 = var4.bind(var2)(var3);
                        var4 = var5.performRoleSubscriptionEditPayoutRedirect;
                        var3 = _closure2_slot0;
                        var9 = var8 == var3;
                        var3 = undefined;
                        if(var9) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                        var7 = _closure2_slot0;
                        var7 = var7.team;
                        var6 = var7;
                        var7 = var8 == var7;
                        var3 = undefined;
                        if(var7) { _fun0002_ip = 12; continue _fun0002 }
case 14:
                        var3 = var6.id;
case 12:
                        var3 = var4.bind(var5)(var3);
                        SaveGenerator(address=143);
case 15:
                        return var3;
case 16:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                        if(var4) { _fun0002_ip = 17; continue _fun0002 }
case 10: // try_end0
                        _fun0002_ip = 18; continue _fun0002;
case 17:
                        return var3;
case 19: // catch_target0
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
case 18:
                        return var2;
case 4:
                        return var1;
                    }
                };
                return var1;
            };
            var10 = var10.bind(var5)(var9);
            var9 = var7 == var4;
            var13 = undefined;
            if(var9) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var13 = var4.team;
case 20:
            var9 = new Array(1);
            var9[0] = var13;
            var12 = var11.bind(var12)(var10, var9);
            if(var8) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var1 = var7 == var1;
            if(!var1) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var1 = var7 != var4;
case 24:
            if(var1) { _fun0001_ip = 26; continue _fun0001 }
case 27:
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
case 26:
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
            _fun0001_ip = 28; continue _fun0001;
case 22:
            var4 = _closure1_slot10;
            var3 = _closure1_slot1;
            var6 = _closure1_slot3;
            var2 = 13;
            var2 = var6[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var1 = var4.bind(var5)(var3, var2);
case 28:
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
case 0:
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
            if(!var3) { _fun0003_ip = 29; continue _fun0003 }
case 30:
            var1 = _closure1_slot6;
            var3 = var1.bind(var5)(var6, var4);
case 29:
            var4 = _closure1_slot0;
            var7 = _closure1_slot3;
            var1 = 16;
            var1 = var7[var1];
            var4 = var4.bind(var5)(var1);
            var1 = var4.useGuildEligibleForRoleSubscriptionsMobileTeamSetup;
            var1 = var1.bind(var4)(var6);
            if(!var3) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            if(var1) { _fun0003_ip = 33; continue _fun0003 }
case 31:
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
            _fun0003_ip = 34; continue _fun0003;
case 33:
            var4 = _closure1_slot10;
            var3 = _closure1_slot12;
            var2 = {};
            var2['guild'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 34:
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