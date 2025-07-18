// app/modules/user_profile/hooks/native/useTrackUserProfileActivityView.tsx
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.useEffect;
    var _closure1_slot3 = var8;
    var4 = var4.useState;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/hooks/native/useTrackUserProfileActivityView.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useTrackUserProfileActivityView(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var3 = var1.userId;
            var _closure2_slot0 = var3;
            var5 = var1.onAction;
            var _closure2_slot1 = var5;
            var1 = undefined;
            var _closure2_slot3 = var1;
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var4 = 3;
            var4 = var7[var4];
            var8 = var6.bind(var1)(var4);
            var7 = var8.useStateFromStores;
            var4 = _closure1_slot5;
            var6 = new Array(1);
            var6[0] = var4;
            var4 = function() {
                var3 = _closure1_slot5;
                var2 = var3.isFetchingUserOutbox;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var6 = var7.bind(var8)(var6, var4);
            var7 = _closure1_slot4;
            var4 = false;
            var8 = var7.bind(var1)(var4);
            var7 = _closure1_slot2;
            var4 = 2;
            var8 = var7.bind(var1)(var8, var4);
            var4 = 0;
            var4 = var8[var4];
            var7 = 1;
            var7 = var8[var7];
            var _closure2_slot2 = var7;
            var6 = !var6;
            if(!var6) { _fun0001_ip = 131; continue _fun0001 }
 128:
            var6 = !var4;
 131:
            _closure2_slot3 = var6;
            var4 = _closure1_slot3;
            var3 = new Array(2);
            var3[0] = var6;
            var3[1] = var5;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot3;
                    if(!var2) { _fun0002_ip = 44; continue _fun0002 }
 10:
                    var4 = _closure2_slot1;
                    var2 = {};
                    var3 = 'VIEW_ACTIVITY_CARD';
                    var2['action'] = var3;
                    var3 = undefined;
                    var2 = var4.bind(var3)(var2);
                    var2 = _closure2_slot2;
                    var1 = true;
                    var1 = var2.bind(var3)(var1);
 44:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var4.bind(var1)(var2, var3);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();