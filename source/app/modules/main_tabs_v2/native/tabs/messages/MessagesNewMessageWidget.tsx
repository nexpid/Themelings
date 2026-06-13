// app/modules/main_tabs_v2/native/tabs/messages/MessagesNewMessageWidget.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var7;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var4);
    var1 = 0;
    var5 = var7[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var8 = var4.bind(var1)(var5);
    var _closure1_slot3 = var8;
    var4 = 1;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var5 = var4.useYouBarRightInset;
    var _closure1_slot4 = var5;
    var4 = var4.useYouBarTotalHeight;
    var _closure1_slot5 = var4;
    var5 = 2;
    var4 = var7[var5];
    var4 = var6.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var9.bind(var1)(var4);
    var4 = var4.space;
    var4 = var4.PX_16;
    var4 = var5 * var4;
    var5 = var8.memo;
    var2 = function MessagesNewMessageWidget() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var15 = _closure1_slot0;
            var11 = _closure1_slot2;
            var1 = 4;
            var1 = var11[var1];
            var4 = undefined;
            var2 = var15.bind(var4)(var1);
            var1 = var2.useMobileQuestDockHeight;
            var9 = var1.bind(var2)();
            var1 = _closure1_slot5;
            var8 = var1.bind(var4)();
            var1 = 5;
            var1 = var11[var1];
            var3 = var15.bind(var4)(var1);
            var2 = var3.useYouBarEnabled;
            var1 = 'message floating action button';
            var7 = var2.bind(var3)(var1);
            var5 = _closure1_slot3;
            var3 = var5.useCallback;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.getRootNavigationRef;
                    var3 = var2.bind(var3)();
                    var4 = null;
                    var2 = var4 == var3;
                    var5 = var3;
                    if(var2) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var3 = var3.current;
                    var2 = var4 == var3;
                    var5 = var3;
case 2:
                    if(var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var4 = var5.navigate;
                    var3 = {};
                    var2 = 'new-message';
                    var3['screen'] = var2;
                    var2 = {};
                    var6 = 'Messages New Message Widget';
                    var2['sourcePage'] = var6;
                    var3['params'] = var2;
                    var2 = 'friends';
                    var2 = var4.bind(var5)(var2, var3);
case 4:
                    return var1;
                }
            };
            var1 = new Array(0);
            var5 = var3.bind(var5)(var2, var1);
            var1 = _closure1_slot4;
            var6 = var1.bind(var4)();
            var3 = _closure1_slot6;
            var1 = 7;
            var1 = var11[var1];
            var1 = var15.bind(var4)(var1);
            var2 = var1.FloatingActionButton;
            var1 = {};
            var12 = 8;
            var13 = var11[var12];
            var13 = var15.bind(var4)(var13);
            var14 = var13.intl;
            var13 = var14.string;
            var12 = var11[var12];
            var12 = var15.bind(var4)(var12);
            var12 = var12.t;
            var12 = var12.jD1qzM;
            var12 = var13.bind(var14)(var12);
            var1['accessibilityLabel'] = var12;
            var10 = _closure1_slot1;
            var12 = 9;
            var12 = var11[var12];
            var12 = var10.bind(var4)(var12);
            var1['icon'] = var12;
            var1['onPress'] = var5;
            var5 = 3;
            var5 = var11[var5];
            var5 = var10.bind(var4)(var5);
            var5 = var5.space;
            var5 = var5.PX_16;
            var5 = var9 + var5;
            var5 = var5 + var8;
            var1['positionBottom'] = var5;
            var5 = undefined;
            if(!var7) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var5 = var6;
case 6:
            var1['positionRight'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var5.bind(var8)(var2);
    var5 = 10;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/main_tabs_v2/native/tabs/messages/MessagesNewMessageWidget.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var2;
    var2 = 56;
    var2 = var2 + var4;
    var3['MESSAGES_NEW_MESSAGE_WIDGET_HEIGHT'] = var2;
    return var1;
})();