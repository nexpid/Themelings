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
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/game_profile/native/components/GameProfileGameClaimCta.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GameProfileGameClaimCta(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var1 = var2.game;
            var9 = var2.trackAction;
            var _closure2_slot0 = var9;
            var8 = _closure1_slot4;
            var7 = var8.useCallback;
            var6 = _closure1_slot3;
            var5 = undefined;
            var3 = function* () {
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
                        var3 = 4;
                        var4 = var6[var3];
                        var3 = undefined;
                        var4 = var7.bind(var3)(var4);
                        var4 = var4.GameProfileTrackActionActions;
                        var4 = var4.ClaimGame;
                        var4 = var5.bind(var3)(var4);
                        var5 = _closure1_slot1;
                        var4 = 5;
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
            var6 = var6.bind(var5)(var3);
            var3 = new Array(1);
            var3[0] = var9;
            var6 = var7.bind(var8)(var6, var3);
            var8 = var1.linkedApplications;
            var1 = null;
            var7 = var1 == var8;
            var3 = undefined;
            if(var7) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var7 = var8.some;
            var4 = function(arg1) {
                var1 = arg1;
                var2 = var1.type;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 6;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var1 = var1.GameLinkTypes;
                var1 = var1.OFFICIAL;
                var1 = var2 === var1;
                return var1;
            };
            var3 = var7.bind(var8)(var4);
case 8:
            if(!(var1 != var3)) { _fun0001_ip = 2; continue _fun0001 }
case 10:
            var1 = null;
            if(var3) { _fun0001_ip = 11; continue _fun0001 }
case 2:
            var4 = _closure1_slot6;
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = 7;
            var2 = var11[var2];
            var2 = var10.bind(var5)(var2);
            var3 = var2.Button;
            var2 = {'variant': 'secondary', 'size': 'md'};
            var7 = 8;
            var8 = var11[var7];
            var8 = var10.bind(var5)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var7 = var11[var7];
            var7 = var10.bind(var5)(var7);
            var7 = var7.t;
            var7 = var7.mqg+to;
            var7 = var8.bind(var9)(var7);
            var2['text'] = var7;
            var2['onPress'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 11:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();