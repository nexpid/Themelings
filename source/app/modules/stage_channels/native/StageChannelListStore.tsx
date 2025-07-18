// app/modules/stage_channels/native/StageChannelListStore.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
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
    var7 = var6[var1];
    var4 = native3;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = native4;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createWithEqualityFn;
    var4 = function(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var1 = {'showActiveSpeakerPill': false, 'setShowActiveSpeakerPill': null, 'listRef': null};
        var3 = function setShowActiveSpeakerPill(arg1) {
            var2 = arg1;
            var _closure3_slot0 = var2;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 3;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var4.bind(var2)(var3);
            var2 = var3.batchUpdates;
            var1 = function() {
                var3 = _closure2_slot0;
                var2 = {};
                var1 = _closure3_slot0;
                var2['showActiveSpeakerPill'] = var1;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1['setShowActiveSpeakerPill'] = var3;
        var2 = function setListRef(arg1) {
            var2 = arg1;
            var _closure3_slot0 = var2;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 3;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var4.bind(var2)(var3);
            var2 = var3.batchUpdates;
            var1 = function() {
                var3 = _closure2_slot0;
                var2 = {};
                var1 = _closure3_slot0;
                var2['listRef'] = var1;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1['setListRef'] = var2;
        return var1;
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot4 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/stage_channels/native/StageChannelListStore.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useActiveSpeakerPillScrollHandler() {
        var5 = _closure1_slot4;
        var4 = _closure1_slot0;
        var6 = _closure1_slot1;
        var1 = 4;
        var1 = var6[var1];
        var6 = undefined;
        var1 = var4.bind(var6)(var1);
        var4 = var1.shallow;
        var1 = function(arg1) {
            var2 = arg1;
            var3 = var2.listRef;
            var1 = new Array(2);
            var1[0] = var3;
            var2 = var2.setListRef;
            var1[1] = var2;
            return var1;
        };
        var5 = var5.bind(var6)(var1, var4);
        var4 = _closure1_slot2;
        var1 = 2;
        var4 = var4.bind(var6)(var5, var1);
        var1 = 0;
        var6 = var4[var1];
        var _closure2_slot0 = var6;
        var1 = 1;
        var1 = var4[var1];
        var _closure2_slot1 = var1;
        var5 = _closure1_slot3;
        var4 = var5.useCallback;
        var3 = new Array(1);
        var3[0] = var1;
        var1 = function(arg1) {
            var3 = _closure2_slot1;
            var1 = undefined;
            var2 = arg1;
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var3 = var4.bind(var5)(var1, var3);
        var1 = new Array(2);
        var1[0] = var3;
        var4 = var5.useCallback;
        var3 = new Array(1);
        var3[0] = var6;
        var2 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var3 = _closure2_slot0;
                var2 = null;
                if(!(var2 != var3)) { _fun0001_ip = 42; continue _fun0001 }
 13:
                var3 = _closure2_slot0;
                var2 = var3.scrollToLocation;
                var1 = {'section': 0, 'item': 0, 'animated': true};
                var1 = var2.bind(var3)(var1);
 42:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var4.bind(var5)(var2, var3);
        var1[1] = var2;
        return var1;
    };
    var3['useActiveSpeakerPillScrollHandler'] = var4;
    var2 = function useActiveSpeakerPillState() {
        var4 = _closure1_slot4;
        var2 = _closure1_slot0;
        var3 = _closure1_slot1;
        var1 = 4;
        var1 = var3[var1];
        var3 = undefined;
        var1 = var2.bind(var3)(var1);
        var2 = var1.shallow;
        var1 = function(arg1) {
            var2 = arg1;
            var3 = var2.showActiveSpeakerPill;
            var1 = new Array(2);
            var1[0] = var3;
            var2 = var2.setShowActiveSpeakerPill;
            var1[1] = var2;
            return var1;
        };
        var1 = var4.bind(var3)(var1, var2);
        return var1;
    };
    var3['useActiveSpeakerPillState'] = var2;
    return var1;
})();