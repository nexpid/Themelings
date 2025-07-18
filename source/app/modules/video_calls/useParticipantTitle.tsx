// app/modules/video_calls/useParticipantTitle.tsx
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ParticipantTypes;
    var _closure1_slot4 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/video_calls/useParticipantTitle.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1, arg2) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 2;
        var4 = var4[var3];
        var3 = undefined;
        var4 = var5.bind(var3)(var4);
        var3 = var4.useStateFromStores;
        var5 = _closure1_slot3;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var3 = _closure2_slot1;
                var1 = null;
                if(!(var1 != var3)) { _fun0001_ip = 104; continue _fun0001 }
 13:
                var3 = _closure2_slot1;
                var5 = var3.type;
                var4 = _closure1_slot4;
                var4 = var4.ACTIVITY;
                var6 = null;
                if(!(var5 === var4)) { _fun0001_ip = 65; continue _fun0001 }
 41:
                var7 = _closure1_slot3;
                var5 = var7.getApplication;
                var4 = _closure2_slot1;
                var4 = var4.applicationId;
                var6 = var5.bind(var7)(var4);
 65:
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var3 = 3;
                var3 = var5[var3];
                var5 = undefined;
                var4 = var4.bind(var5)(var3);
                var3 = _closure2_slot0;
                var2 = _closure2_slot1;
                var2 = var4.bind(var5)(var3, var2, var6);
                return var2;
 104:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();