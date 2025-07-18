// app/modules/messages/isRemix.tsx
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.MessageAttachmentFlags;
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/isRemix.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var4 = null;
            var3 = var4 == var2;
            if(var3) { _fun0001_ip = 22; continue _fun0001 }
 12:
            var1 = var2.attachments;
            var3 = var4 == var1;
 22:
            if(var3) { _fun0001_ip = 43; continue _fun0001 }
 25:
            var1 = var2.attachments;
            var4 = var1.length;
            var1 = 1;
            var3 = var4 < var1;
 43:
            var1 = !var3;
            if(var3) { _fun0001_ip = 73; continue _fun0001 }
 49:
            var4 = var2.attachments;
            var3 = var4.some;
            var2 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = arg1;
                    var2 = var3.flags;
                    var1 = null;
                    var1 = var1 != var2;
                    if(!var1) { _fun0002_ip = 69; continue _fun0002 }
 17:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var4 = 1;
                    var5 = var5[var4];
                    var4 = undefined;
                    var5 = var6.bind(var4)(var5);
                    var4 = var5.hasFlag;
                    var3 = var3.flags;
                    var2 = _closure1_slot2;
                    var2 = var2.IS_REMIX;
                    var1 = var4.bind(var5)(var3, var2);
 69:
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var2);
 73:
            return var1;
        }
    };
    var3['isRemix'] = var2;
    return var1;
})();