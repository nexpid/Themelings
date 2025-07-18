// app/modules/media_channel/useIsFirstMessageInMediaPost.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var7 = native2;
    var9 = native3;
    var3 = native6;
    var8 = native7;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var8;
    var4 = function isFirstMessageInMediaPost(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var1 = null;
            var1 = var1 != var2;
            if(!var1) { _fun0001_ip = 37; continue _fun0001 }
 12:
            var5 = _closure1_slot5;
            var4 = var2.id;
            var3 = var2.channel_id;
            var2 = undefined;
            var1 = var5.bind(var2)(var4, var3);
 37:
            return var1;
        }
    };
    var _closure1_slot4 = var4;
    var2 = function isFirstMessageIdInMediaPost(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var5 = arg2;
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 2;
            var1 = var2[var1];
            var2 = undefined;
            var3 = var3.bind(var2)(var1);
            var1 = var3.castChannelIdAsMessageId;
            var3 = var1.bind(var3)(var5);
            var1 = arg1;
            if(!(var1 === var3)) { _fun0002_ip = 130; continue _fun0002 }
 46:
            var3 = _closure1_slot3;
            var1 = var3.getChannel;
            var3 = var1.bind(var3)(var5);
            var1 = null;
            if(!(var1 != var3)) { _fun0002_ip = 126; continue _fun0002 }
 66:
            var5 = var3.isForumPost;
            var5 = var5.bind(var3)();
            if(!var5) { _fun0002_ip = 126; continue _fun0002 }
 79:
            var5 = _closure1_slot3;
            var4 = var5.getChannel;
            var3 = var3.parent_id;
            var3 = var4.bind(var5)(var3);
            var1 = var1 == var3;
            var2 = undefined;
            if(var1) { _fun0002_ip = 118; continue _fun0002 }
 108:
            var1 = var3.isMediaChannel;
            var2 = var1.bind(var3)();
 118:
            var1 = true;
            var1 = var1 === var2;
            return var1;
 126:
            var1 = false;
            return var1;
 130:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot5 = var2;
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var6);
    var1 = 0;
    var6 = var8[var1];
    var1 = undefined;
    var6 = var9.bind(var1)(var6);
    var _closure1_slot3 = var6;
    var6 = 3;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/media_channel/useIsFirstMessageInMediaPost.tsx';
    var6 = var7.bind(var8)(var6);
    var5 = function useIsFirstMessageInMediaPost(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 1;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useStateFromStores;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = new Array(0);
        var1 = function() {
            var3 = _closure1_slot4;
            var2 = _closure2_slot0;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
        };
        var1 = var4.bind(var5)(var2, var1, var3);
        return var1;
    };
    var3['useIsFirstMessageInMediaPost'] = var5;
    var3['isFirstMessageInMediaPost'] = var4;
    var3['isFirstMessageIdInMediaPost'] = var2;
    return var1;
})();