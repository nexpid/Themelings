// app/modules/dismissible_content/useSelectedDismissibleContentShared.tsx
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
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = native3;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ContentDismissActionType;
    var _closure1_slot4 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/dismissible_content/useSelectedDismissibleContentShared.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useSelectedDismissibleContentShared(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var6 = arg1;
            var7 = arg2;
            var3 = arguments[2];
            var _closure2_slot0 = var6;
            var _closure2_slot1 = var7;
            var1 = undefined;
            if(!(var3 === var1)) { _fun0001_ip = 27; continue _fun0001 }
 25:
            var3 = false;
 27:
            var _closure2_slot2 = var1;
            var8 = !var3;
            if(!var8) { _fun0001_ip = 43; continue _fun0001 }
 37:
            var3 = null;
            var8 = var3 != var6;
 43:
            if(!var8) { _fun0001_ip = 88; continue _fun0001 }
 46:
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var3 = 3;
            var3 = var5[var3];
            var3 = var4.bind(var1)(var3);
            var4 = var3.CONTENT_TYPES_WITH_BYPASS_FATIGUE;
            var3 = var4.has;
            var3 = var3.bind(var4)(var6);
            var8 = !var3;
 88:
            _closure2_slot2 = var8;
            var5 = _closure1_slot2;
            var4 = var5.useEffect;
            var3 = new Array(3);
            var3[0] = var8;
            var3[1] = var7;
            var3[2] = var6;
            var2 = function() {
                var1 = function() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                        var2 = _closure2_slot2;
                        if(!var2) { _fun0002_ip = 74; continue _fun0002 }
 10:
                        var3 = _closure1_slot3;
                        var5 = var3.lastDCDismissed;
                        var3 = _closure2_slot0;
                        var3 = var5 !== var3;
                        if(var3) { _fun0002_ip = 71; continue _fun0002 }
 34:
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot1;
                        var4 = 4;
                        var5 = var5[var4];
                        var4 = undefined;
                        var6 = var6.bind(var4)(var5);
                        var5 = var6.isGuildDismissibleConent;
                        var4 = _closure2_slot0;
                        var3 = var5.bind(var6)(var4);
 71:
                        var2 = var3;
 74:
                        if(!var2) { _fun0002_ip = 104; continue _fun0002 }
 77:
                        var4 = _closure2_slot1;
                        var1 = _closure1_slot4;
                        var3 = var1.AUTO_DISMISS;
                        var2 = undefined;
                        var1 = true;
                        var1 = var4.bind(var2)(var3, var1);
 104:
                        var1 = undefined;
                        return var1;
                    }
                };
                return var1;
            };
            var2 = var4.bind(var5)(var2, var3);
            return var1;
        }
    };
    var3['useSelectedDismissibleContentShared'] = var2;
    return var1;
})();