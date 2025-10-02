// app/modules/game_console/native/GameConsoleAlertUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var8 = var6[var1];
    var2 = metroImportAll;
    var1 = undefined;
    var2 = var2.bind(var1)(var8);
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.GAME_CONSOLE_ALERT_MODAL_LOCATION;
    var _closure1_slot4 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var7 = var2.InputModes;
    var _closure1_slot5 = var7;
    var2 = var2.PlatformTypes;
    var _closure1_slot6 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.jsx;
    var _closure1_slot7 = var2;
    var2 = {};
    var7 = function maybeShowPTTAlert(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = _closure1_slot3;
            var3 = var4.getMode;
            var4 = var3.bind(var4)();
            var3 = _closure1_slot5;
            var3 = var3.PUSH_TO_TALK;
            if(!(var4 === var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 5;
            var3 = var7[var3];
            var8 = undefined;
            var5 = var6.bind(var8)(var3);
            var4 = var5.UNSAFE_isDismissibleContentDismissed;
            var3 = 6;
            var3 = var7[var3];
            var3 = var6.bind(var8)(var3);
            var3 = var3.DismissibleContent;
            var3 = var3.CONSOLE_PTT_DISABLE_ALERT;
            var3 = var4.bind(var5)(var3);
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var3 = {};
            var4 = _closure1_slot6;
            var6 = var4.XBOX;
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 7;
            var5 = var9[var2];
            var5 = var7.bind(var8)(var5);
            var11 = var5.intl;
            var10 = var11.string;
            var5 = var9[var2];
            var5 = var7.bind(var8)(var5);
            var5 = var5.t;
            var5 = var5.bVZ7v7;
            var5 = var10.bind(var11)(var5);
            var3[var6] = var5;
            var6 = var4.PLAYSTATION;
            var5 = var9[var2];
            var5 = var7.bind(var8)(var5);
            var11 = var5.intl;
            var10 = var11.string;
            var5 = var9[var2];
            var5 = var7.bind(var8)(var5);
            var5 = var5.t;
            var5 = var5.6iqUsb;
            var5 = var10.bind(var11)(var5);
            var3[var6] = var5;
            var4 = var4.PLAYSTATION_STAGING;
            var5 = var9[var2];
            var5 = var7.bind(var8)(var5);
            var6 = var5.intl;
            var5 = var6.string;
            var2 = var9[var2];
            var2 = var7.bind(var8)(var2);
            var2 = var2.t;
            var2 = var2.6iqUsb;
            var2 = var5.bind(var6)(var2);
            var3[var4] = var2;
            var2 = arg1;
            var3 = var3[var2];
            var _closure2_slot0 = var3;
            var2 = null;
            if(!(var2 != var3)) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var2 = global;
            var3 = var2.Promise;
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var12 = function(arg1) {
                var1 = arg1;
                var _closure3_slot0 = var1;
                var3 = _closure1_slot1;
                var10 = _closure1_slot2;
                var1 = 8;
                var2 = var10[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.show;
                var2 = {};
                var7 = _closure2_slot0;
                var2['title'] = var7;
                var9 = _closure1_slot0;
                var6 = 7;
                var7 = var10[var6];
                var7 = var9.bind(var1)(var7);
                var8 = var7.intl;
                var7 = var8.string;
                var6 = var10[var6];
                var6 = var9.bind(var1)(var6);
                var6 = var6.t;
                var6 = var6.bL21zs;
                var6 = var7.bind(var8)(var6);
                var2['body'] = var6;
                var5 = function onConfirm() {
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 5;
                    var2 = var6[var1];
                    var1 = undefined;
                    var4 = var5.bind(var1)(var2);
                    var3 = var4.UNSAFE_markDismissibleContentAsDismissed;
                    var2 = 6;
                    var2 = var6[var2];
                    var2 = var5.bind(var1)(var2);
                    var2 = var2.DismissibleContent;
                    var2 = var2.CONSOLE_PTT_DISABLE_ALERT;
                    var2 = var3.bind(var4)(var2);
                    var2 = _closure3_slot0;
                    var2 = var2.bind(var1)();
                    return var1;
                };
                var2['onConfirm'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var13 = var2;
            var1 = new var13[var3](var12, var11);
            var1 = var1 instanceof Object ? var1 : var2;
            _fun0001_ip = 7; continue _fun0001;
case 5:
            var2 = global;
            var3 = var2.Promise;
            var2 = var3.resolve;
            var1 = var2.bind(var3)();
case 7:
            return var1;
case 2:
            var1 = global;
            var2 = var1.Promise;
            var1 = var2.resolve;
            var1 = var1.bind(var2)();
            return var1;
        }
    };
    var2['maybeShowPTTAlert'] = var7;
    var4 = function showSelfDismissableAlert(arg1) {
        var1 = arg1;
        var7 = var1.title;
        var13 = var1.body;
        var12 = var1.errorCodeMessage;
        var1 = var1.reconnectPlatformType;
        var _closure2_slot0 = var1;
        var10 = _closure1_slot1;
        var11 = _closure1_slot2;
        var9 = 8;
        var2 = var11[var9];
        var1 = undefined;
        var4 = var10.bind(var1)(var2);
        var3 = var4.show;
        var2 = {};
        var2['title'] = var7;
        var8 = _closure1_slot7;
        var7 = _closure1_slot0;
        var6 = 9;
        var6 = var11[var6];
        var6 = var7.bind(var1)(var6);
        var7 = var6.SelfDismissibleAlertBody;
        var6 = {};
        var6['body'] = var13;
        var6['errorCodeMessage'] = var12;
        var9 = var11[var9];
        var9 = var10.bind(var1)(var9);
        var9 = var9.close;
        var6['dismissCallback'] = var9;
        var6 = var8.bind(var1)(var7, var6);
        var2['body'] = var6;
        var5 = function onConfirm() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var2 = _closure2_slot0;
                var1 = null;
                if(!(var1 != var2)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 10;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var5 = _closure2_slot0;
                var1['platformType'] = var5;
                var4 = _closure1_slot4;
                var1['location'] = var4;
                var1 = var2.bind(var3)(var1);
case 8:
                var1 = undefined;
                return var1;
            }
        };
        var2['onConfirm'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['showSelfDismissableAlert'] = var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/game_console/native/GameConsoleAlertUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();