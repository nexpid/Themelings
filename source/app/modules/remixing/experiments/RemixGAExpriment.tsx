// app/modules/remixing/experiments/RemixGAExpriment.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var1 = native3;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var8 = var5.bind(var1)(var4);
    var7 = var8.createExperiment;
    var4 = {'kind': 'user', 'id': '2023-08_remix_ga', 'label': 'Remix General Available'};
    var9 = {'canSeeRemixBadge': false, 'canRemix': false, 'isNitroPerk': false};
    var4['defaultConfig'] = var9;
    var10 = {'id': 1, 'label': 'Remix for Nitro Subscribers'};
    var9 = {'canSeeRemixBadge': true, 'canRemix': true, 'isNitroPerk': true};
    var10['config'] = var9;
    var9 = new Array(3);
    var9[0] = var10;
    var10 = {'id': 3, 'label': 'Upsell Remix for Non-Nitro Users'};
    var11 = {'canSeeRemixBadge': true, 'canRemix': false, 'isNitroPerk': true};
    var10['config'] = var11;
    var9[1] = var10;
    var10 = {'id': 5, 'label': 'Remix GA for everyone'};
    var11 = {'canSeeRemixBadge': true, 'canRemix': true, 'isNitroPerk': false};
    var10['config'] = var11;
    var9[2] = var10;
    var4['treatments'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/remixing/experiments/RemixGAExpriment.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useCanRemix(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var5 = arg1;
            var7 = {};
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 1;
            var2 = var3[var2];
            var3 = undefined;
            var2 = var4.bind(var3)(var2);
            var2 = var2.bind(var3)();
            var2 = var2.analyticsLocations;
            var7['analyticsLocations'] = var2;
            if(!var5) { _fun0001_ip = 66; continue _fun0001 }
 48:
            var2 = {};
            var4 = new Array(1);
            var4[0] = var5;
            var2['analyticsLocations'] = var4;
            var7 = var2;
 66:
            var2 = global;
            var2 = var2.Boolean;
            var6 = _closure1_slot2;
            var5 = var6.useExperiment;
            var4 = {};
            var1 = 'canRemixHook';
            var4['location'] = var1;
            var1 = {};
            var8 = true;
            var1['autoTrackExposure'] = var8;
            var1['trackExposureOptions'] = var7;
            var1 = var5.bind(var6)(var4, var1);
            var1 = var1.canRemix;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['useCanRemix'] = var4;
    var4 = function canRemix() {
        var4 = _closure1_slot2;
        var3 = var4.getCurrentConfig;
        var2 = {};
        var1 = 'canRemix';
        var2['location'] = var1;
        var1 = {};
        var5 = true;
        var1['autoTrackExposure'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        var1 = var1.canRemix;
        return var1;
    };
    var3['canRemix'] = var4;
    var4 = function canSeeRemixBadge() {
        var4 = _closure1_slot2;
        var3 = var4.getCurrentConfig;
        var2 = {};
        var1 = 'canSeeRemixBadge';
        var2['location'] = var1;
        var1 = {};
        var5 = true;
        var1['autoTrackExposure'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        var1 = var1.canSeeRemixBadge;
        return var1;
    };
    var3['canSeeRemixBadge'] = var4;
    var4 = function useCanSeeRemixBadge() {
        var4 = _closure1_slot2;
        var3 = var4.useExperiment;
        var2 = {};
        var1 = 'canSeeRemixBadge';
        var2['location'] = var1;
        var1 = {};
        var5 = true;
        var1['autoTrackExposure'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        var1 = var1.canSeeRemixBadge;
        return var1;
    };
    var3['useCanSeeRemixBadge'] = var4;
    var4 = function useIsRemixANitroPerk() {
        var1 = global;
        var3 = var1.Boolean;
        var5 = _closure1_slot2;
        var4 = var5.useExperiment;
        var2 = {};
        var1 = 'isRemixANitroPerkHook';
        var2['location'] = var1;
        var1 = {};
        var6 = true;
        var1['autoTrackExposure'] = var6;
        var1 = var4.bind(var5)(var2, var1);
        var2 = var1.isNitroPerk;
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        return var1;
    };
    var3['useIsRemixANitroPerk'] = var4;
    var2 = function useShouldUpsellRemix() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var5 = arguments[0];
            var6 = arguments[1];
            var1 = undefined;
            if(!(var5 === var1)) { _fun0002_ip = 14; continue _fun0002 }
 12:
            var5 = {};
 14:
            if(!(var6 === var1)) { _fun0002_ip = 20; continue _fun0002 }
 18:
            var6 = true;
 20:
            var4 = _closure1_slot2;
            var3 = var4.useExperiment;
            var2 = {};
            var1 = 'useShouldUpsellRemixHook';
            var2['location'] = var1;
            var1 = {};
            var1['autoTrackExposure'] = var6;
            var1['trackExposureOptions'] = var5;
            var2 = var3.bind(var4)(var2, var1);
            var1 = var2.canRemix;
            var1 = !var1;
            if(!var1) { _fun0002_ip = 81; continue _fun0002 }
 75:
            var1 = var2.isNitroPerk;
 81:
            return var1;
        }
    };
    var3['useShouldUpsellRemix'] = var2;
    return var1;
})();