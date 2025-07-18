// app/modules/activities/panel/native/LeaveActivityButton.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var1 = native3;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
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
    var7 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ActivityPanelModes;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot4 = var4;
    var4 = var7.memo;
    var2 = function LeaveActivityButton(arg1) {
        var1 = arg1;
        var2 = var1.selfEmbeddedActivity;
        var _closure2_slot0 = var2;
        var1 = var1.setMode;
        var _closure2_slot1 = var1;
        var4 = _closure1_slot4;
        var8 = _closure1_slot0;
        var9 = _closure1_slot2;
        var1 = 3;
        var1 = var9[var1];
        var3 = undefined;
        var1 = var8.bind(var3)(var1);
        var2 = var1.Button;
        var1 = {};
        var6 = function onPress() {
            var3 = _closure2_slot1;
            var1 = _closure1_slot3;
            var2 = var1.DISCONNECTED;
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var2 = global;
            var4 = var2.setTimeout;
            var3 = function() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 4;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.leaveActivity;
                    var2 = {};
                    var5 = _closure2_slot0;
                    var7 = null;
                    var8 = var7 == var5;
                    var5 = undefined;
                    if(var8) { _fun0001_ip = 60; continue _fun0001 }
 51:
                    var8 = _closure2_slot0;
                    var5 = var8.location;
 60:
                    var2['location'] = var5;
                    var5 = _closure2_slot0;
                    var7 = var7 == var5;
                    var5 = undefined;
                    if(var7) { _fun0001_ip = 86; continue _fun0001 }
 77:
                    var6 = _closure2_slot0;
                    var5 = var6.applicationId;
 86:
                    var2['applicationId'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var2 = 400;
            var2 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var1['onPress'] = var6;
        var6 = _closure1_slot1;
        var5 = 5;
        var5 = var9[var5];
        var5 = var6.bind(var3)(var5);
        var1['icon'] = var5;
        var5 = 6;
        var6 = var9[var5];
        var6 = var8.bind(var3)(var6);
        var10 = var6.intl;
        var7 = var10.string;
        var6 = var9[var5];
        var6 = var8.bind(var3)(var6);
        var6 = var6.t;
        var6 = var6.Hi1/aW;
        var6 = var7.bind(var10)(var6);
        var1['text'] = var6;
        var6 = var9[var5];
        var6 = var8.bind(var3)(var6);
        var7 = var6.intl;
        var6 = var7.string;
        var5 = var9[var5];
        var5 = var8.bind(var3)(var5);
        var5 = var5.t;
        var5 = var5.k0Aph4;
        var5 = var6.bind(var7)(var5);
        var1['accessibilityLabel'] = var5;
        var5 = 'destructive';
        var1['variant'] = var5;
        var5 = 'sm';
        var1['size'] = var5;
        var5 = true;
        var1['shrink'] = var5;
        var5 = 2;
        var1['maxFontSizeMultiplier'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var2 = var4.bind(var7)(var2);
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activities/panel/native/LeaveActivityButton.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();