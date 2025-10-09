// app/modules/guilds_bar/native/GuildsBarCreateJoinButton.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var2 = function handleCreateJoinGuildPress() {
        var1 = undefined;
        var4 = _closure1_slot11;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot10 = var2;
    var1 = function _handleCreateJoinGuildPress() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var6 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var5 = 7;
                    var3 = var2[var5];
                    var4 = undefined;
                    var6 = var6.bind(var4)(var3);
                    var3 = 6;
                    var3 = var2[var3];
                    var2 = var2.paths;
                    var2 = var6.bind(var4)(var3, var2);
                    SaveGenerator(address=57);
case 4:
                    return var2;
case 5:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var8 = var2.default;
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var5 = var3[var5];
                    var6 = var6.bind(var4)(var5);
                    var5 = 8;
                    var5 = var3[var5];
                    var3 = var3.paths;
                    var3 = var6.bind(var4)(var5, var3);
                    SaveGenerator(address=110);
case 8:
                    return var3;
case 9:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 10; continue _fun0001 }
case 11:
                    var6 = var3.default;
                    var7 = var8.acknowledgeTooltip;
                    var5 = _closure1_slot5;
                    var5 = var5.GUILD_TOOLTIP;
                    var5 = var7.bind(var8)(var5);
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var5 = 9;
                    var5 = var8[var5];
                    var7 = var7.bind(var4)(var5);
                    var5 = var7.isAtGuildCapAndNonPremium;
                    var5 = var5.bind(var7)();
                    if(var5) { _fun0001_ip = 12; continue _fun0001 }
case 13:
                    var5 = var6.openCreateGuildModal;
                    var5 = var5.bind(var6)();
                    _fun0001_ip = 14; continue _fun0001;
case 12:
                    var10 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var5 = 10;
                    var5 = var11[var5];
                    var7 = var10.bind(var4)(var5);
                    var6 = var7.handleShowUpsellAlert;
                    var5 = {};
                    var8 = _closure1_slot6;
                    var8 = var8.GUILD_CAP;
                    var5['initialUpsellKey'] = var8;
                    var8 = {};
                    var12 = _closure1_slot4;
                    var12 = var12.CREATE_JOIN_GUILD_MODAL;
                    var8['page'] = var12;
                    var5['analyticsLocation'] = var8;
                    var8 = 11;
                    var8 = var11[var8];
                    var8 = var10.bind(var4)(var8);
                    var10 = var8.NEW_GUILD_BUTTON;
                    var8 = new Array(1);
                    var8[0] = var10;
                    var5['analyticsLocations'] = var8;
                    var8 = {};
                    var9 = _closure1_slot7;
                    var9 = var9.GUILD_CAP_MODAL_UPSELL;
                    var8['type'] = var9;
                    var5['analyticsProperties'] = var8;
                    var5 = var6.bind(var7)(var5);
case 14:
                    return var4;
case 10:
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
        _closure1_slot11 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot11 = var1;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var12 = 0;
    var5 = var7[var12];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var8 = var7[var5];
    var5 = metroImportAll;
    var8 = var5.bind(var1)(var8);
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var10 = var5.StyleSheet;
    var5 = 3;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var9 = var5.AnalyticsPages;
    var _closure1_slot4 = var9;
    var9 = var5.TooltipNames;
    var _closure1_slot5 = var9;
    var5 = var5.UpsellTypes;
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.PremiumUpsellTypes;
    var _closure1_slot7 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.jsx;
    var _closure1_slot8 = var5;
    var9 = var10.create;
    var5 = {};
    var11 = {};
    var11['marginTop'] = var12;
    var5['marginOverrides'] = var11;
    var5 = var9.bind(var10)(var5);
    var _closure1_slot9 = var5;
    var5 = var8.memo;
    var4 = function GuildsBarCreateJoinButton() {
        var4 = _closure1_slot8;
        var7 = _closure1_slot1;
        var10 = _closure1_slot2;
        var1 = 12;
        var1 = var10[var1];
        var3 = undefined;
        var2 = var7.bind(var3)(var1);
        var1 = {};
        var6 = 13;
        var6 = var10[var6];
        var6 = var7.bind(var3)(var6);
        var1['iconSource'] = var6;
        var6 = _closure1_slot10;
        var1['onPress'] = var6;
        var9 = _closure1_slot0;
        var6 = 14;
        var7 = var10[var6];
        var7 = var9.bind(var3)(var7);
        var8 = var7.intl;
        var7 = var8.string;
        var6 = var10[var6];
        var6 = var9.bind(var3)(var6);
        var6 = var6.t;
        var6 = var6.l5WIbW;
        var6 = var7.bind(var8)(var6);
        var1['accessibilityLabel'] = var6;
        var5 = _closure1_slot9;
        var5 = var5.marginOverrides;
        var1['style'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var4 = var5.bind(var8)(var4);
    var5 = 15;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guilds_bar/native/GuildsBarCreateJoinButton.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['handleCreateJoinGuildPress'] = var2;
    return var1;
})();