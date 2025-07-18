// app/modules/app_dms/useIsAppDM.tsx
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
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_dms/useIsAppDM.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useISAppDM(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var3 = var2.context;
            var5 = undefined;
            var _closure2_slot0 = var5;
            var6 = var3.type;
            var4 = 'channel';
            var2 = undefined;
            if(!(var4 === var6)) { _fun0001_ip = 36; continue _fun0001 }
 31:
            var2 = var3.channel;
 36:
            _closure2_slot0 = var2;
            var4 = _closure1_slot0;
            var6 = _closure1_slot1;
            var3 = 1;
            var3 = var6[var3];
            var4 = var4.bind(var5)(var3);
            var3 = var4.useStateFromStores;
            var5 = _closure1_slot2;
            var2 = new Array(1);
            var2[0] = var5;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = _closure2_slot0;
                    var3 = null;
                    var1 = var3 != var1;
                    if(!var1) { _fun0002_ip = 30; continue _fun0002 }
 16:
                    var5 = _closure2_slot0;
                    var4 = var5.isDM;
                    var1 = var4.bind(var5)();
 30:
                    if(!var1) { _fun0002_ip = 55; continue _fun0002 }
 33:
                    var4 = _closure2_slot0;
                    var4 = var4.recipients;
                    var5 = var4.length;
                    var4 = 1;
                    var1 = var4 === var5;
 55:
                    if(!var1) { _fun0002_ip = 113; continue _fun0002 }
 58:
                    var5 = _closure1_slot2;
                    var4 = var5.getUser;
                    var2 = _closure2_slot0;
                    var6 = var2.recipients;
                    var2 = 0;
                    var2 = var6[var2];
                    var2 = var4.bind(var5)(var2);
                    var4 = var3 == var2;
                    var3 = undefined;
                    if(var4) { _fun0002_ip = 107; continue _fun0002 }
 101:
                    var3 = var2.bot;
 107:
                    var2 = true;
                    var1 = var2 === var3;
 113:
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();