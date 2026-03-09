// app/modules/game_profile/native/components/GameProfileGameClaimCta.tsx
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
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.RelativeMarketingURLs;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot6 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/game_profile/native/components/GameProfileGameClaimCta.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GameProfileGameClaimCta(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var4 = var1.application;
            var10 = var1.trackAction;
            var _closure2_slot0 = var10;
            var2 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 4;
            var1 = var6[var1];
            var6 = undefined;
            var7 = var2.bind(var6)(var1);
            var2 = var7.useGameProfileClaimGameCtaEnabled;
            var1 = 'GameProfile';
            var8 = var2.bind(var7)(var1);
            var9 = _closure1_slot4;
            var7 = var9.useCallback;
            var2 = _closure1_slot3;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                        var5 = _closure2_slot0;
                        var7 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var3 = 5;
                        var4 = var6[var3];
                        var3 = undefined;
                        var4 = var7.bind(var3)(var4);
                        var4 = var4.GameProfileTrackActionActions;
                        var4 = var4.ClaimGame;
                        var4 = var5.bind(var3)(var4);
                        var5 = _closure1_slot1;
                        var4 = 6;
                        var4 = var6[var4];
                        var5 = var5.bind(var3)(var4);
                        var4 = var5.redirectDeveloperPortalWithHandoffToken;
                        var2 = _closure1_slot5;
                        var2 = var2.DEVELOPER_PORTAL_APPLICATIONS_GAME_IDENTITY;
                        var2 = var4.bind(var5)(var2);
                        SaveGenerator(address=97);
case 4:
                        return var2;
case 5:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0002_ip = 6; continue _fun0002 }
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
            var2 = var2.bind(var6)(var1);
            var1 = new Array(1);
            var1[0] = var10;
            var7 = var7.bind(var9)(var2, var1);
            var2 = null;
            var1 = null;
            if(!var8) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var9 = var4.linkedGames;
            var8 = var2 == var9;
            var4 = undefined;
            if(var8) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var8 = var9.some;
            var5 = function(arg1) {
                var1 = arg1;
                var2 = var1.type;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 7;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var1 = var1.GameLinkTypes;
                var1 = var1.OFFICIAL;
                var1 = var2 === var1;
                return var1;
            };
            var4 = var8.bind(var9)(var5);
case 10:
            if(!(var2 != var4)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var2 = null;
            if(var4) { _fun0001_ip = 14; continue _fun0001 }
case 12:
            var5 = _closure1_slot6;
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var3 = 8;
            var3 = var12[var3];
            var3 = var11.bind(var6)(var3);
            var4 = var3.Button;
            var3 = {'variant': 'secondary', 'size': 'md'};
            var8 = 9;
            var9 = var12[var8];
            var9 = var11.bind(var6)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var8 = var12[var8];
            var8 = var11.bind(var6)(var8);
            var8 = var8.t;
            var8 = var8.mqg+to;
            var8 = var9.bind(var10)(var8);
            var3['text'] = var8;
            var3['onPress'] = var7;
            var2 = var5.bind(var6)(var4, var3);
case 14:
            var1 = var2;
case 8:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();