// app/modules/activities/useDispatchOpenActivity.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var3 = native6;
    var5 = native7;
    var1 = native3;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var5;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var4);
    var1 = 0;
    var6 = var5[var1];
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var6);
    var _closure1_slot2 = var4;
    var4 = 2;
    var5 = var5[var4];
    var4 = native2;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activities/useDispatchOpenActivity.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useDispatchOpenActivity(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var6 = var1.connectedEmbeddedActivity;
            var _closure2_slot0 = var6;
            var1 = undefined;
            var _closure2_slot1 = var1;
            var3 = null;
            var3 = var3 == var6;
            var7 = undefined;
            if(var3) { _fun0001_ip = 37; continue _fun0001 }
 32:
            var7 = var6.applicationId;
 37:
            _closure2_slot1 = var7;
            var5 = _closure1_slot2;
            var4 = var5.useEffect;
            var3 = new Array(2);
            var3[0] = var7;
            var3[1] = var6;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = _closure2_slot0;
                    var3 = null;
                    var1 = var3 != var1;
                    if(!var1) { _fun0002_ip = 24; continue _fun0002 }
 16:
                    var2 = _closure2_slot1;
                    var1 = var3 != var2;
 24:
                    if(!var1) { _fun0002_ip = 93; continue _fun0002 }
 27:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 1;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.dispatch;
                    var1 = {};
                    var5 = 'EMBEDDED_ACTIVITY_OPEN';
                    var1['type'] = var5;
                    var5 = _closure2_slot0;
                    var5 = var5.location;
                    var1['location'] = var5;
                    var4 = _closure2_slot1;
                    var1['applicationId'] = var4;
                    var1 = var2.bind(var3)(var1);
 93:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var2, var3);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();