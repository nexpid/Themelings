// app/modules/polls/chat/buildPlatformPollResources.native.tsx
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
    var9 = var7.bind(var1)(var4);
    var8 = var9.mapValues;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.pollStyleSets;
    var4 = function(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 2;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.createNativeStyleProperties;
        var2 = function(arg1) {
            var6 = _closure2_slot0;
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 3;
            var1 = var5[var1];
            var2 = undefined;
            var4 = var3.bind(var2)(var1);
            var1 = arg1;
            var4 = var6.bind(var2)(var4, var1);
            var1 = 0;
            var1 = var5[var1];
            var3 = var3.bind(var2)(var1);
            var2 = var3.pickBy;
            var1 = function(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    var1 = arg1;
                    var3 = typeof var1;
                    var1 = 'number';
                    var1 = var1 !== var3;
                    if(!var1) { _fun0001_ip = 25; continue _fun0001 }
 17:
                    var2 = 'boolean';
                    var1 = var2 !== var3;
 25:
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var4, var1);
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        var _closure2_slot1 = var2;
        var1 = function(arg1, arg2) {
            var6 = arg2;
            var7 = _closure2_slot0;
            var2 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 3;
            var1 = var4[var1];
            var5 = undefined;
            var1 = var2.bind(var5)(var1);
            var7 = var7.bind(var5)(var1, var6);
            var1 = 0;
            var1 = var4[var1];
            var4 = var2.bind(var5)(var1);
            var2 = var4.pickBy;
            var1 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = arg1;
                    var3 = typeof var1;
                    var1 = 'number';
                    var1 = var1 === var3;
                    if(var1) { _fun0002_ip = 25; continue _fun0002 }
 17:
                    var2 = 'boolean';
                    var1 = var2 === var3;
 25:
                    return var1;
                }
            };
            var2 = var2.bind(var4)(var7, var1);
            var1 = {};
            var4 = _closure2_slot1;
            var3 = arg1;
            var8 = var4.bind(var5)(var3, var6);
            var9 = var1;
            var3 = copyDataProperties(var9, var8);
            var9 = var1;
            var8 = var2;
            var2 = copyDataProperties(var9, var8);
            return var1;
        };
        return var1;
    };
    var4 = var8.bind(var9)(var7, var4);
    var _closure1_slot3 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/polls/chat/buildPlatformPollResources.native.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function buildPlatformPollResources(arg1, arg2) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var1 = arg2;
        var _closure2_slot1 = var1;
        var1 = {};
        var6 = _closure1_slot1;
        var7 = _closure1_slot2;
        var4 = 0;
        var4 = var7[var4];
        var5 = undefined;
        var9 = var6.bind(var5)(var4);
        var8 = var9.mapValues;
        var4 = _closure1_slot3;
        var3 = function(arg1) {
            var4 = _closure2_slot0;
            var3 = _closure2_slot1;
            var2 = arg1;
            var1 = undefined;
            var1 = var2.bind(var1)(var4, var3);
            return var1;
        };
        var3 = var8.bind(var9)(var4, var3);
        var1['styles'] = var3;
        var3 = _closure1_slot0;
        var2 = 4;
        var4 = var7[var2];
        var9 = var3.bind(var5)(var4);
        var8 = var9.getAssetUriForEmbed;
        var4 = 5;
        var4 = var7[var4];
        var4 = var6.bind(var5)(var4);
        var4 = var8.bind(var9)(var4);
        var1['selectedIcon'] = var4;
        var2 = var7[var2];
        var4 = var3.bind(var5)(var2);
        var3 = var4.getAssetUriForEmbed;
        var2 = 6;
        var2 = var7[var2];
        var2 = var6.bind(var5)(var2);
        var2 = var3.bind(var4)(var2);
        var1['checkmarkIcon'] = var2;
        return var1;
    };
    var3['buildPlatformPollResources'] = var4;
    var2 = function getAvatarUrl(arg1, arg2) {
        var6 = arg1;
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 7;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.ensureAvatarSource;
        var5 = var6.getAvatarSource;
        var4 = arg2;
        var1 = false;
        var1 = var5.bind(var6)(var4, var1);
        var1 = var2.bind(var3)(var1);
        var1 = var1.uri;
        return var1;
    };
    var3['getAvatarUrl'] = var2;
    return var1;
})();