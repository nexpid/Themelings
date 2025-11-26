// app/modules/user_settings/native/defs/DoubleTapToReactSetting.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var7 = var1.Object;
    var4 = var7.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var7)(var3, var1, var2);
    var1 = 0;
    var4 = var6[var1];
    var2 = metroImportDefault;
    var1 = undefined;
    var2 = var2.bind(var1)(var4);
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var9 = var2.MobileSetting;
    var2 = 2;
    var2 = var6[var2];
    var7 = var5.bind(var1)(var2);
    var4 = var7.createToggle;
    var2 = {};
    var10 = function title() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot1;
        var1 = 3;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.4qhAjx;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['title'] = var10;
    var9 = var9.CHAT;
    var2['parent'] = var9;
    var9 = function useValue() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 4;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var2 = var1.DoubleTapReactionEmoji;
        var1 = var2.useSetting;
        var1 = var1.bind(var2)();
        var1 = var1.disableDoubleTap;
        var1 = !var1;
        return var1;
    };
    var2['useValue'] = var9;
    var9 = function onValueChange(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 5;
            var3 = var3[var1];
            var1 = undefined;
            var5 = var4.bind(var1)(var3);
            var4 = var5.reactionEmojiFromProtoValue;
            var3 = _closure1_slot2;
            var3 = var3.settings;
            var6 = var3.textAndImages;
            var7 = null;
            var8 = var7 == var6;
            var3 = undefined;
            if(var8) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var6.defaultReactionEmoji;
case 2:
            if(!(var7 == var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = {};
case 4:
            var3 = var4.bind(var5)(var3);
            var8 = var3.id;
            var6 = var3.name;
            var5 = var3.animated;
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 4;
            var2 = var4[var2];
            var2 = var3.bind(var1)(var2);
            var4 = var2.DoubleTapReactionEmoji;
            var3 = var4.updateSetting;
            var2 = {};
            var9 = arg1;
            var9 = !var9;
            var2['disableDoubleTap'] = var9;
            var9 = var7 != var8;
            var7 = undefined;
            if(!var9) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var7 = var8;
case 6:
            var2['emojiId'] = var7;
            var2['emojiName'] = var6;
            var2['animated'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var2['onValueChange'] = var9;
    var8 = function usePredicate() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 6;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.useDoubleTapToReactExperiment;
        var2 = {};
        var1 = false;
        var2['autoTrackExposure'] = var1;
        var1 = 'DoubleTapToReactSetting';
        var1 = var3.bind(var4)(var1, var2);
        var1 = var1.enabled;
        return var1;
    };
    var2['usePredicate'] = var8;
    var2 = var4.bind(var7)(var2);
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/native/defs/DoubleTapToReactSetting.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();