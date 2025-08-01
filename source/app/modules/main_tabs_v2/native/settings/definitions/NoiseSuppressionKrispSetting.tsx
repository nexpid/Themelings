// app/modules/main_tabs_v2/native/settings/definitions/NoiseSuppressionKrispSetting.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var2);
    var1 = 0;
    var7 = var6[var1];
    var2 = metroImportDefault;
    var1 = undefined;
    var2 = var2.bind(var1)(var7);
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var7 = var2.MobileSetting;
    var2 = {};
    var8 = 2;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.RendererType;
    var8 = var8.RADIO;
    var2['type'] = var8;
    var8 = function title() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot1;
        var1 = 5;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.t8QhiY;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['title'] = var8;
    var7 = var7.VOICE;
    var2['parent'] = var7;
    var7 = function useNoiseSuppressionKrispSettingValue() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var4 = 3;
            var1 = var7[var4];
            var5 = undefined;
            var11 = var6.bind(var5)(var1);
            var10 = var11.useStateFromStores;
            var8 = _closure1_slot2;
            var9 = new Array(1);
            var9[0] = var8;
            var1 = function() {
                var2 = _closure1_slot2;
                var1 = var2.getNoiseSuppression;
                var1 = var1.bind(var2)();
                return var1;
            };
            var1 = var10.bind(var11)(var9, var1);
            var4 = var7[var4];
            var7 = var6.bind(var5)(var4);
            var6 = var7.useStateFromStores;
            var4 = new Array(1);
            var4[0] = var8;
            var3 = function() {
                var2 = _closure1_slot2;
                var1 = var2.getNoiseCancellation;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3 = var6.bind(var7)(var4, var3);
            var4 = _closure1_slot0;
            var6 = _closure1_slot1;
            var2 = 4;
            var2 = var6[var2];
            var2 = var4.bind(var5)(var2);
            var2 = var2.NoiseSuppressionOpt;
            if(var3) { _fun0001_ip = 140; continue _fun0001 }
 121:
            if(var1) { _fun0001_ip = 132; continue _fun0001 }
 124:
            var1 = var2.NONE;
            _fun0001_ip = 138; continue _fun0001;
 132:
            var1 = var2.STANDARD;
 138:
            _fun0001_ip = 146; continue _fun0001;
 140:
            var1 = var2.KRISP;
 146:
            return var1;
        }
    };
    var2['useValue'] = var7;
    var7 = function onNoiseSuppressionKrispValueSettingChange(arg1) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 4;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.handleNoiseSuppressionChange;
        var2 = arg1;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['onValueChange'] = var7;
    var7 = function useNoiseSuppressionKrispSettingOptions() {
        var2 = {};
        var7 = _closure1_slot0;
        var8 = _closure1_slot1;
        var4 = 4;
        var1 = var8[var4];
        var6 = undefined;
        var1 = var7.bind(var6)(var1);
        var1 = var1.NoiseSuppressionOpt;
        var1 = var1.KRISP;
        var2['value'] = var1;
        var3 = 5;
        var1 = var8[var3];
        var1 = var7.bind(var6)(var1);
        var9 = var1.intl;
        var5 = var9.string;
        var1 = var8[var3];
        var1 = var7.bind(var6)(var1);
        var1 = var1.t;
        var1 = var1.rdoNzs;
        var1 = var5.bind(var9)(var1);
        var2['label'] = var1;
        var1 = new Array(3);
        var1[0] = var2;
        var2 = {};
        var5 = var8[var4];
        var5 = var7.bind(var6)(var5);
        var5 = var5.NoiseSuppressionOpt;
        var5 = var5.STANDARD;
        var2['value'] = var5;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var10 = var5.intl;
        var9 = var10.string;
        var5 = var8[var3];
        var5 = var7.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.qXeYHx;
        var5 = var9.bind(var10)(var5);
        var2['label'] = var5;
        var1[1] = var2;
        var2 = {};
        var4 = var8[var4];
        var4 = var7.bind(var6)(var4);
        var4 = var4.NoiseSuppressionOpt;
        var4 = var4.NONE;
        var2['value'] = var4;
        var4 = var8[var3];
        var4 = var7.bind(var6)(var4);
        var5 = var4.intl;
        var4 = var5.string;
        var3 = var8[var3];
        var3 = var7.bind(var6)(var3);
        var3 = var3.t;
        var3 = var3.wkYAl5;
        var3 = var4.bind(var5)(var3);
        var2['label'] = var3;
        var1[2] = var2;
        return var1;
    };
    var2['useOptions'] = var7;
    var7 = function useHasNoiseSuppressionKrispSetting() {
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 3;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var1 = _closure1_slot2;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() {
            var2 = _closure1_slot2;
            var1 = var2.isNoiseCancellationSupported;
            var1 = var1.bind(var2)();
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var2['usePredicate'] = var7;
    var4 = function additionalSearchTerms() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot1;
        var1 = 5;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.hmfkCg;
        var2 = var2.bind(var3)(var1);
        var1 = new Array(1);
        var1[0] = var2;
        return var1;
    };
    var2['additionalSearchTerms'] = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/settings/definitions/NoiseSuppressionKrispSetting.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();