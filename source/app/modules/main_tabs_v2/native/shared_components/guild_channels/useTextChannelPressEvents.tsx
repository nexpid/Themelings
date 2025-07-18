// app/modules/main_tabs_v2/native/shared_components/guild_channels/useTextChannelPressEvents.tsx
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
    var8 = var6[var1];
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/shared_components/guild_channels/useTextChannelPressEvents.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useTextChannelPressEvents(arg1, arg2) {
        var6 = arg1;
        var3 = arg2;
        var _closure2_slot0 = var6;
        var _closure2_slot1 = var3;
        var1 = {};
        var5 = _closure1_slot3;
        var7 = var5.useCallback;
        var8 = var6.id;
        var4 = new Array(3);
        var4[0] = var8;
        var8 = var6.guild_id;
        var4[1] = var8;
        var4[2] = var3;
        var3 = function() {
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 2;
            var2 = var5[var1];
            var1 = undefined;
            var9 = var4.bind(var1)(var2);
            var8 = var9.preload;
            var2 = _closure2_slot0;
            var7 = var2.guild_id;
            var4 = var2.id;
            var4 = var8.bind(var9)(var7, var4);
            var4 = _closure1_slot0;
            var3 = 3;
            var3 = var5[var3];
            var5 = var4.bind(var1)(var3);
            var4 = var5.transitionToChannel;
            var3 = var2.id;
            var2 = {};
            var6 = _closure2_slot1;
            var2['navigationReplace'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        };
        var3 = var7.bind(var5)(var3, var4);
        var1['onPress'] = var3;
        var4 = var5.useCallback;
        var3 = new Array(1);
        var3[0] = var6;
        var2 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var5 = _closure1_slot4;
                var4 = var5.getChannel;
                var3 = _closure2_slot0;
                var3 = var3.parent_id;
                var4 = var4.bind(var5)(var3);
                var3 = null;
                if(!(var3 != var4)) { _fun0001_ip = 66; continue _fun0001 }
 36:
                var3 = var4.isForumLikeChannel;
                var3 = var3.bind(var4)();
                if(!var3) { _fun0001_ip = 66; continue _fun0001 }
 49:
                var5 = _closure2_slot0;
                var3 = var5.isForumPost;
                var3 = var3.bind(var5)();
                if(var3) { _fun0001_ip = 165; continue _fun0001 }
 66:
                var5 = _closure2_slot0;
                var3 = var5.isThread;
                var3 = var3.bind(var5)();
                if(var3) { _fun0001_ip = 127; continue _fun0001 }
 83:
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 6;
                var5 = var5[var3];
                var3 = undefined;
                var6 = var6.bind(var3)(var5);
                var5 = var6.openChannelLongPressActionSheet;
                var3 = _closure2_slot0;
                var3 = var3.id;
                var3 = var5.bind(var6)(var3);
                _fun0001_ip = 197; continue _fun0001;
 127:
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var3 = 5;
                var3 = var6[var3];
                var6 = undefined;
                var5 = var5.bind(var6)(var3);
                var3 = _closure2_slot0;
                var3 = var3.id;
                var3 = var5.bind(var6)(var3);
                _fun0001_ip = 197; continue _fun0001;
 165:
                var5 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 4;
                var2 = var3[var2];
                var3 = undefined;
                var2 = var5.bind(var3)(var2);
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1, var4);
 197:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var4.bind(var5)(var2, var3);
        var1['onLongPress'] = var2;
        var2 = 32;
        var1['unstable_pressDelay'] = var2;
        return var1;
    };
    var3['useTextChannelPressEvents'] = var2;
    return var1;
})();