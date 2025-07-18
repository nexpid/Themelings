// app/modules/main_tabs_v2/native/tabs/messages/MessagesNewMessageWidget.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var10 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var7;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var2);
    var1 = 0;
    var5 = var7[var1];
    var2 = native4;
    var1 = undefined;
    var8 = var2.bind(var1)(var5);
    var _closure1_slot3 = var8;
    var2 = 1;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.jsx;
    var _closure1_slot4 = var2;
    var9 = 2;
    var2 = var7[var9];
    var2 = var10.bind(var1)(var2);
    var2 = var2.spacing;
    var5 = var2.PX_56;
    var2 = var7[var9];
    var2 = var10.bind(var1)(var2);
    var2 = var2.spacing;
    var2 = var2.PX_16;
    var2 = var9 * var2;
    var2 = var5 + var2;
    var5 = var8.memo;
    var4 = function MessagesNewMessageWidget() {
        var12 = _closure1_slot0;
        var8 = _closure1_slot2;
        var1 = 3;
        var1 = var8[var1];
        var4 = undefined;
        var2 = var12.bind(var4)(var1);
        var1 = var2.useMobileQuestDockHeight;
        var6 = var1.bind(var2)();
        var5 = _closure1_slot3;
        var3 = var5.useCallback;
        var2 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 4;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.getRootNavigationRef;
                var3 = var2.bind(var3)();
                var4 = null;
                var2 = var4 == var3;
                var5 = var3;
                if(var2) { _fun0001_ip = 59; continue _fun0001 }
 47:
                var3 = var3.current;
                var2 = var4 == var3;
                var5 = var3;
 59:
                if(var2) { _fun0001_ip = 98; continue _fun0001 }
 62:
                var4 = var5.navigate;
                var3 = {};
                var2 = 'new-message';
                var3['screen'] = var2;
                var2 = {};
                var3['params'] = var2;
                var2 = 'friends';
                var2 = var4.bind(var5)(var2, var3);
 98:
                return var1;
            }
        };
        var1 = new Array(0);
        var5 = var3.bind(var5)(var2, var1);
        var3 = _closure1_slot4;
        var1 = 5;
        var1 = var8[var1];
        var1 = var12.bind(var4)(var1);
        var2 = var1.FloatingActionButton;
        var1 = {};
        var9 = 6;
        var10 = var8[var9];
        var10 = var12.bind(var4)(var10);
        var11 = var10.intl;
        var10 = var11.string;
        var9 = var8[var9];
        var9 = var12.bind(var4)(var9);
        var9 = var9.t;
        var9 = var9.jD1qzM;
        var9 = var10.bind(var11)(var9);
        var1['accessibilityLabel'] = var9;
        var7 = _closure1_slot1;
        var9 = 7;
        var9 = var8[var9];
        var9 = var7.bind(var4)(var9);
        var1['icon'] = var9;
        var1['onPress'] = var5;
        var5 = 2;
        var5 = var8[var5];
        var5 = var7.bind(var4)(var5);
        var5 = var5.spacing;
        var5 = var5.PX_16;
        var5 = var6 + var5;
        var1['positionBottom'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var4 = var5.bind(var8)(var4);
    var5 = 8;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/main_tabs_v2/native/tabs/messages/MessagesNewMessageWidget.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['MESSAGES_NEW_MESSAGE_WIDGET_HEIGHT'] = var2;
    return var1;
})();