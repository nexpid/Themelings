// app/modules/main_tabs_v2/native/tabs/messages/MessagesNewMessageWidget.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var10 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
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
    var2 = metroImportAll;
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
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var12 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 3;
            var1 = var8[var1];
            var5 = undefined;
            var3 = var12.bind(var5)(var1);
            var1 = var3.useMobileQuestDockHeight;
            var4 = var1.bind(var3)();
            var7 = _closure1_slot3;
            var6 = var7.useCallback;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
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
                    if(var2) { _fun0002_ip = 59; continue _fun0002 }
 47:
                    var3 = var3.current;
                    var2 = var4 == var3;
                    var5 = var3;
 59:
                    if(var2) { _fun0002_ip = 109; continue _fun0002 }
 62:
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
 109:
                    return var1;
                }
            };
            var1 = new Array(0);
            var3 = var6.bind(var7)(var3, var1);
            var1 = 5;
            var1 = var8[var1];
            var9 = var12.bind(var5)(var1);
            var7 = var9.useCreateDMCTAExperimentEnabled;
            var6 = {};
            var1 = true;
            var6['autoTrackExposure'] = var1;
            var1 = 'MessagesNewMessageWidget';
            var1 = var7.bind(var9)(var1, var6);
            var7 = {};
            var10 = 6;
            var6 = var8[var10];
            var6 = var12.bind(var5)(var6);
            var11 = var6.intl;
            var9 = var11.string;
            var6 = var8[var10];
            var6 = var12.bind(var5)(var6);
            var6 = var6.t;
            var6 = var6.jD1qzM;
            var6 = var9.bind(var11)(var6);
            var7['accessibilityLabel'] = var6;
            var6 = _closure1_slot1;
            var9 = 7;
            var9 = var8[var9];
            var9 = var6.bind(var5)(var9);
            var7['icon'] = var9;
            var7['onPress'] = var3;
            var3 = 2;
            var3 = var8[var3];
            var3 = var6.bind(var5)(var3);
            var3 = var3.spacing;
            var3 = var3.PX_16;
            var3 = var4 + var3;
            var7['positionBottom'] = var3;
            var4 = _closure1_slot4;
            var9 = _closure1_slot0;
            var6 = _closure1_slot2;
            if(var1) { _fun0001_ip = 263; continue _fun0001 }
 225:
            var1 = 9;
            var1 = var6[var1];
            var1 = var9.bind(var5)(var1);
            var2 = var1.FloatingActionButton;
            var1 = {};
            var14 = var1;
            var13 = var7;
            var3 = copyDataProperties(var14, var13);
            var1 = var4.bind(var5)(var2, var1);
            _fun0001_ip = 354; continue _fun0001;
 263:
            var2 = 8;
            var2 = var6[var2];
            var2 = var9.bind(var5)(var2);
            var3 = var2.CollapsibleFloatingActionButton;
            var2 = {};
            var14 = var2;
            var13 = var7;
            var7 = copyDataProperties(var14, var13);
            var7 = var6[var10];
            var7 = var9.bind(var5)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var6 = var6[var10];
            var6 = var9.bind(var5)(var6);
            var6 = var6.t;
            var6 = var6.6Urw1t;
            var7 = var7.bind(var8)(var6);
            var6 = 'text';
            var2[var6] = var7;
            var1 = var4.bind(var5)(var3, var2);
 354:
            return var1;
        }
    };
    var4 = var5.bind(var8)(var4);
    var5 = 10;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/main_tabs_v2/native/tabs/messages/MessagesNewMessageWidget.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['MESSAGES_NEW_MESSAGE_WIDGET_HEIGHT'] = var2;
    return var1;
})();