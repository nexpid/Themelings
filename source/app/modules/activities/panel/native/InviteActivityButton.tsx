// app/modules/activities/panel/native/InviteActivityButton.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var8 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = native4;
    var1 = undefined;
    var7 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot4 = var4;
    var4 = var7.memo;
    var2 = function InviteActivityButton(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var1 = var1.applicationId;
            var _closure2_slot0 = var1;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 6;
            var1 = var3[var1];
            var5 = undefined;
            var4 = var2.bind(var5)(var1);
            var3 = var4.useStateFromStores;
            var1 = _closure1_slot3;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    var3 = var1 != var3;
                    var1 = undefined;
                    if(!var3) { _fun0002_ip = 40; continue _fun0002 }
 18:
                    var4 = _closure1_slot3;
                    var3 = var4.getApplicationActivity;
                    var2 = _closure2_slot0;
                    var1 = var3.bind(var4)(var2);
 40:
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2, var1);
            var _closure2_slot1 = var2;
            var1 = null;
            var2 = var1 == var2;
            if(var2) { _fun0001_ip = 286; continue _fun0001 }
 85:
            var4 = _closure1_slot4;
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 7;
            var2 = var10[var2];
            var2 = var9.bind(var5)(var2);
            var3 = var2.Button;
            var2 = {};
            var7 = function onPress() {
                var7 = _closure2_slot1;
                var5 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 3;
                var4 = var2[var1];
                var1 = undefined;
                var6 = var5.bind(var1)(var4);
                var5 = var6.openLazy;
                var4 = _closure1_slot0;
                var3 = 5;
                var3 = var2[var3];
                var4 = var4.bind(var1)(var3);
                var3 = 4;
                var3 = var2[var3];
                var2 = var2.paths;
                var4 = var4.bind(var1)(var3, var2);
                var8 = var7.session_id;
                var2 = global;
                var2 = var2.HermesInternal;
                var3 = var2.concat;
                var2 = 'ActivityInviteSheet-';
                var3 = var3.bind(var2)(var8);
                var2 = {};
                var2['activity'] = var7;
                var2 = var5.bind(var6)(var4, var3, var2);
                return var1;
            };
            var2['onPress'] = var7;
            var7 = _closure1_slot1;
            var6 = 8;
            var6 = var10[var6];
            var6 = var7.bind(var5)(var6);
            var2['icon'] = var6;
            var6 = 9;
            var7 = var10[var6];
            var7 = var9.bind(var5)(var7);
            var11 = var7.intl;
            var8 = var11.string;
            var7 = var10[var6];
            var7 = var9.bind(var5)(var7);
            var7 = var7.t;
            var7 = var7.OzOM/v;
            var7 = var8.bind(var11)(var7);
            var2['text'] = var7;
            var7 = var10[var6];
            var7 = var9.bind(var5)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var6 = var10[var6];
            var6 = var9.bind(var5)(var6);
            var6 = var6.t;
            var6 = var6.OzOM/v;
            var6 = var7.bind(var8)(var6);
            var2['accessibilityLabel'] = var6;
            var6 = 'secondary-overlay';
            var2['variant'] = var6;
            var6 = 'sm';
            var2['size'] = var6;
            var6 = true;
            var2['shrink'] = var6;
            var6 = 2;
            var2['maxFontSizeMultiplier'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 286:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activities/panel/native/InviteActivityButton.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();