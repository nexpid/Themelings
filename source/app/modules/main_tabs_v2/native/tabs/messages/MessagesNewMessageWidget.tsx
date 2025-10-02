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
    var5 = var2.useYouBarTotalHeight;
    var _closure1_slot4 = var5;
    var2 = var2.YOU_BAR_MARGIN;
    var _closure1_slot5 = var2;
    var9 = 2;
    var2 = var7[var9];
    var2 = var6.bind(var1)(var2);
    var2 = var2.jsx;
    var _closure1_slot6 = var2;
    var2 = 3;
    var5 = var7[var2];
    var5 = var10.bind(var1)(var5);
    var5 = var5.spacing;
    var5 = var5.PX_56;
    var2 = var7[var2];
    var2 = var10.bind(var1)(var2);
    var2 = var2.spacing;
    var2 = var2.PX_16;
    var2 = var9 * var2;
    var2 = var5 + var2;
    var5 = var8.memo;
    var4 = function MessagesNewMessageWidget() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var14 = _closure1_slot0;
            var11 = _closure1_slot2;
            var1 = 4;
            var1 = var11[var1];
            var5 = undefined;
            var3 = var14.bind(var5)(var1);
            var1 = var3.useMobileQuestDockHeight;
            var8 = var1.bind(var3)();
            var1 = _closure1_slot4;
            var6 = var1.bind(var5)();
            var1 = 5;
            var1 = var11[var1];
            var4 = var14.bind(var5)(var1);
            var3 = var4.useYouBarEnabled;
            var1 = 'message floating action button';
            var4 = var3.bind(var4)(var1);
            var9 = _closure1_slot3;
            var7 = var9.useCallback;
            var3 = function() {
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
            var3 = var7.bind(var9)(var3, var1);
            var1 = 7;
            var1 = var11[var1];
            var10 = var14.bind(var5)(var1);
            var9 = var10.useCreateDMCTAExperimentEnabled;
            var7 = {};
            var1 = true;
            var7['autoTrackExposure'] = var1;
            var1 = 'MessagesNewMessageWidget';
            var1 = var9.bind(var10)(var1, var7);
            var7 = {};
            var10 = 8;
            var9 = var11[var10];
            var9 = var14.bind(var5)(var9);
            var13 = var9.intl;
            var12 = var13.string;
            var9 = var11[var10];
            var9 = var14.bind(var5)(var9);
            var9 = var9.t;
            var9 = var9.jD1qzM;
            var9 = var12.bind(var13)(var9);
            var7['accessibilityLabel'] = var9;
            var9 = _closure1_slot1;
            var12 = 9;
            var12 = var11[var12];
            var12 = var9.bind(var5)(var12);
            var7['icon'] = var12;
            var7['onPress'] = var3;
            var3 = 3;
            var3 = var11[var3];
            var3 = var9.bind(var5)(var3);
            var3 = var3.spacing;
            var3 = var3.PX_16;
            var3 = var8 + var3;
            var3 = var3 + var6;
            var7['positionBottom'] = var3;
            var3 = undefined;
            if(!var4) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = _closure1_slot5;
case 6:
            var7['positionRight'] = var3;
            var4 = _closure1_slot6;
            var9 = _closure1_slot0;
            var6 = _closure1_slot2;
            if(var1) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var1 = 11;
            var1 = var6[var1];
            var1 = var9.bind(var5)(var1);
            var2 = var1.FloatingActionButton;
            var1 = {};
            var16 = var1;
            var15 = var7;
            var3 = copyDataProperties(var16, var15);
            var1 = var4.bind(var5)(var2, var1);
            _fun0001_ip = 10; continue _fun0001;
case 8:
            var2 = 10;
            var2 = var6[var2];
            var2 = var9.bind(var5)(var2);
            var3 = var2.CollapsibleFloatingActionButton;
            var2 = {};
            var16 = var2;
            var15 = var7;
            var7 = copyDataProperties(var16, var15);
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
case 10:
            return var1;
        }
    };
    var4 = var5.bind(var8)(var4);
    var5 = 12;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/main_tabs_v2/native/tabs/messages/MessagesNewMessageWidget.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['MESSAGES_NEW_MESSAGE_WIDGET_HEIGHT'] = var2;
    return var1;
})();