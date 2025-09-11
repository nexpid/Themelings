// app/modules/polls/useTrackPollEvents.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot4 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/polls/useTrackPollEvents.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useTrackPollCreationEvents(arg1, arg2) {
        var7 = arg1;
        var6 = arg2;
        var _closure2_slot0 = var7;
        var _closure2_slot1 = var6;
        var1 = {};
        var5 = _closure1_slot3;
        var4 = var5.useCallback;
        var3 = new Array(2);
        var3[0] = var7;
        var3[1] = var6;
        var2 = function() {
            var1 = 0;
            var _closure3_slot0 = var1;
            var _closure3_slot1 = var1;
            var _closure3_slot2 = var1;
            var10 = _closure2_slot0;
            var2 = var10.forEach;
            var1 = function(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    var1 = arg1;
                    var1 = var1.image;
                    var2 = null;
                    if(!(var2 != var1)) { _fun0001_ip = 102; continue _fun0001 }
 15:
                    var3 = var1.emoji;
                    if(!(var2 == var3)) { _fun0001_ip = 84; continue _fun0001 }
 24:
                    var3 = var1.stickerId;
                    if(!(var2 == var3)) { _fun0001_ip = 64; continue _fun0001 }
 34:
                    var1 = var1.mediaAttachmentState;
                    if(!(var2 != var1)) { _fun0001_ip = 102; continue _fun0001 }
 44:
                    var3 = _closure3_slot0;
                    var1 = 1;
                    var1 = var3 + var1;
                    _closure3_slot0 = var1;
                    _fun0001_ip = 102; continue _fun0001;
 64:
                    var3 = _closure3_slot2;
                    var1 = 1;
                    var1 = var3 + var1;
                    _closure3_slot2 = var1;
                    _fun0001_ip = 102; continue _fun0001;
 84:
                    var3 = _closure3_slot1;
                    var1 = 1;
                    var1 = var3 + var1;
                    _closure3_slot1 = var1;
 102:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var2.bind(var10)(var1);
            var3 = _closure1_slot1;
            var8 = _closure1_slot2;
            var1 = 2;
            var2 = var8[var1];
            var1 = undefined;
            var5 = var3.bind(var1)(var2);
            var4 = var5.trackWithMetadata;
            var2 = _closure1_slot4;
            var3 = var2.POLL_CREATION_CANCELLED;
            var2 = {};
            var10 = var10.length;
            var2['answers_count'] = var10;
            var10 = _closure3_slot0;
            var2['attachments_count'] = var10;
            var10 = _closure3_slot1;
            var2['emojis_count'] = var10;
            var9 = _closure3_slot2;
            var2['stickers_count'] = var9;
            var7 = _closure2_slot1;
            var2['allow_multiselect'] = var7;
            var7 = _closure1_slot0;
            var6 = 3;
            var6 = var8[var6];
            var6 = var7.bind(var1)(var6);
            var6 = var6.PollLayoutTypes;
            var6 = var6.DEFAULT;
            var2['layout_type'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        };
        var2 = var4.bind(var5)(var2, var3);
        var1['trackPollCreationCancelled'] = var2;
        return var1;
    };
    var3['useTrackPollCreationEvents'] = var2;
    return var1;
})();