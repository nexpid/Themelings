// app/modules/media_keyboard/native/useUploadDisabled.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.DraftType;
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.MAX_UPLOAD_COUNT;
    var _closure1_slot5 = var7;
    var4 = var4.Permissions;
    var _closure1_slot6 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media_keyboard/native/useUploadDisabled.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useUploadDisabled(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 4;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var6 = _closure1_slot3;
        var2 = new Array(2);
        var2[0] = var6;
        var5 = _closure1_slot4;
        var2[1] = var5;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var6 = _closure1_slot4;
                var3 = var6.getUploads;
                var1 = _closure2_slot0;
                var2 = var1.id;
                var1 = _closure1_slot2;
                var1 = var1.ChannelMessage;
                var1 = var3.bind(var6)(var2, var1);
                var2 = var1.length;
                var1 = _closure1_slot5;
                var1 = var2 >= var1;
                if(var1) { _fun0001_ip = 154; continue _fun0001 }
 57:
                var2 = _closure2_slot0;
                var3 = var2.id;
                var7 = _closure1_slot0;
                var6 = _closure1_slot1;
                var2 = 5;
                var6 = var6[var2];
                var2 = undefined;
                var2 = var7.bind(var2)(var6);
                var2 = var2.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
                var2 = var3 === var2;
                if(var2) { _fun0001_ip = 151; continue _fun0001 }
 101:
                var6 = _closure2_slot0;
                var3 = var6.isPrivate;
                var3 = var3.bind(var6)();
                if(var3) { _fun0001_ip = 148; continue _fun0001 }
 118:
                var7 = _closure1_slot3;
                var6 = var7.can;
                var5 = _closure1_slot6;
                var5 = var5.ATTACH_FILES;
                var4 = _closure2_slot0;
                var3 = var6.bind(var7)(var5, var4);
 148:
                var2 = !var3;
 151:
                var1 = var2;
 154:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();