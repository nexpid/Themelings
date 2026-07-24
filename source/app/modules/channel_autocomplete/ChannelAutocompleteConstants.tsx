// app/modules/channel_autocomplete/ChannelAutocompleteConstants.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var4 = true;
    var5['value'] = var4;
    var4 = '__esModule';
    var4 = var6.bind(var7)(var3, var4, var5);
    var4 = new Array(0);
    var _closure1_slot0 = var4;
    var5 = /^<@\$(\d+)>/;
    var7 = var1.RegExp;
    var8 = var5.source;
    var6 = var8.replace;
    var4 = /^\^/;
    var1 = '';
    var11 = var6.bind(var8)(var4, var1);
    var1 = var7.prototype;
    var4 = Object.create(var1, {constructor: {value: var7}});
    var10 = 'g';
    var12 = var4;
    var1 = new var12[var7](var11, var10, var9);
    var4 = var1 instanceof Object ? var1 : var4;
    var _closure1_slot1 = var4;
    var6 = dependencyMap;
    var1 = 0;
    var7 = var6[var1];
    var6 = require;
    var1 = undefined;
    var8 = var6.bind(var1)(var7);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/channel_autocomplete/ChannelAutocompleteConstants.tsx';
    var6 = var7.bind(var8)(var6);
    var6 = '@';
    var3['MENTION_SENTINEL'] = var6;
    var6 = '$';
    var3['GAME_MENTION_SENTINEL'] = var6;
    var6 = '#';
    var3['CHANNEL_SENTINEL'] = var6;
    var6 = ':';
    var3['EMOJI_SENTINEL'] = var6;
    var7 = '+:';
    var3['REACTION_START_SENTINEL'] = var7;
    var3['REACTION_END_SENTINEL'] = var6;
    var6 = '/';
    var3['COMMAND_SENTINEL'] = var6;
    var6 = '@game:';
    var3['GAME_MENTION_INPUT_PREFIX'] = var6;
    var6 = function formatGameMentionRaw(arg1) {
        var1 = global;
        var1 = var1.HermesInternal;
        var4 = var1.concat;
        var3 = '<@$';
        var2 = arg1;
        var1 = '>';
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var3['formatGameMentionRaw'] = var6;
    var3['GAME_MENTION_RAW_RE'] = var5;
    var3['GAME_MENTION_RAW_RE_GLOBAL'] = var4;
    var2 = function extractGameMentionIds(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var2 = var4.includes;
            var1 = '<@$';
            var1 = var2.bind(var4)(var1);
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = _closure1_slot0;
            return var1;
case 2:
            var3 = var4.matchAll;
            var1 = _closure1_slot1;
            var7 = var3.bind(var4)(var1);
            var5 = new Array(0);
            var4 = 0;
            var8 = var5;
            var6 = 0;
            var1 = arraySpread(var8, var7, var6);
            var3 = var5.map;
            var1 = function(arg1) {
                var2 = arg1;
                var1 = 1;
                var1 = var2[var1];
                return var1;
            };
            var1 = var3.bind(var5)(var1);
            var3 = var1.length;
            if(!(!(var3 > var4))) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = _closure1_slot0;
case 4:
            return var1;
        }
    };
    var3['extractGameMentionIds'] = var2;
    return var1;
})();