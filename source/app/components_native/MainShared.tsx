// app/components_native/MainShared.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var5;
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
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var4 = var4.NativeModules;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot7 = var4;
    var4 = 18;
    var4 = var6[var4];
    var8 = var7.bind(var1)(var4);
    var7 = var8.fileFinishedImporting;
    var4 = 'components_native/MainShared.tsx';
    var4 = var7.bind(var8)(var4);
    var4 = 19;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var3['BurstReactionAnimationContainer'] = var4;
    var4 = 20;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var3['MenuContainer'] = var4;
    var4 = 21;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var3['ActionSheetContainer'] = var4;
    var4 = 22;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var3['Alerts'] = var4;
    var4 = 23;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var3['SoundPlayer'] = var4;
    var4 = 24;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var3['MainViewTooltipActionSheets'] = var4;
    var4 = 25;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var3['ToastContainer'] = var4;
    var4 = function PictureInPictureGlobalContainer() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 5;
            var1 = var4[var1];
            var5 = undefined;
            var8 = var3.bind(var5)(var1);
            var7 = var8.useStateFromStores;
            var1 = _closure1_slot5;
            var6 = new Array(2);
            var6[0] = var1;
            var1 = _closure1_slot6;
            var6[1] = var1;
            var1 = function() {
                var3 = _closure1_slot5;
                var2 = var3.getChannel;
                var4 = _closure1_slot6;
                var1 = var4.getChannelId;
                var1 = var1.bind(var4)();
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var6 = var7.bind(var8)(var6, var1);
            var1 = 6;
            var1 = var4[var1];
            var8 = var3.bind(var5)(var1);
            var7 = var8.useHasPipParticipant;
            var1 = {};
            var9 = false;
            var1['isActivityViewFocused'] = var9;
            var8 = var7.bind(var8)(var1);
            var1 = 7;
            var1 = var4[var1];
            var7 = var3.bind(var5)(var1);
            var1 = var7.useIsModalOpen;
            var7 = var1.bind(var7)();
            var1 = 8;
            var1 = var4[var1];
            var3 = var3.bind(var5)(var1);
            var1 = var3.useIsVoicePanelShowing;
            var3 = var1.bind(var3)();
            var4 = null;
            var9 = var4 == var6;
            var1 = null;
            if(var9) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = null;
            if(!var8) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var1 = null;
            if(var7) { _fun0001_ip = 2; continue _fun0001 }
case 5:
            var1 = null;
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 6:
            var4 = _closure1_slot7;
            var3 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 9;
            var2 = var7[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var2['channel'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 2:
            return var1;
        }
    };
    var3['PictureInPictureGlobalContainer'] = var4;
    var4 = function useAppKeyCommands() {
        var5 = _closure1_slot3;
        var4 = var5.useMemo;
        var3 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var2 = {'input': 'k', 'modifierFlags': null, 'eventName': 'keyCommandShowQuickSwitcher'};
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 10;
                var3 = var5[var3];
                var6 = undefined;
                var4 = var4.bind(var6)(var3);
                var3 = var4.isAndroid;
                var3 = var3.bind(var4)();
                if(var3) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                var3 = _closure1_slot4;
                var3 = var3.KeyCommandsView;
                var3 = var3.keyModifierCommand;
                _fun0002_ip = 9; continue _fun0002;
case 7:
                var5 = _closure1_slot1;
                var7 = _closure1_slot2;
                var4 = 11;
                var4 = var7[var4];
                var5 = var5.bind(var6)(var4);
                var4 = var5.getConstants;
                var4 = var4.bind(var5)();
                var3 = var4.keyModifierCommand;
case 9:
                var2['modifierFlags'] = var3;
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 12;
                var3 = var7[var1];
                var3 = var5.bind(var6)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var1 = var7[var1];
                var1 = var5.bind(var6)(var1);
                var1 = var1.t;
                var1 = var1.yYsRlJ;
                var1 = var3.bind(var4)(var1);
                var2['discoverabilityTitle'] = var1;
                var1 = function onKeyCommand() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 13;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var2 = var2.bind(var1)();
                    return var1;
                };
                var2['onKeyCommand'] = var1;
                var1 = new Array(1);
                var1[0] = var2;
                return var1;
            }
        };
        var2 = new Array(0);
        var4 = var4.bind(var5)(var3, var2);
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 14;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.useKeyCommands;
        var2 = var2.bind(var3)(var4);
        return var1;
    };
    var3['useAppKeyCommands'] = var4;
    var4 = function useUpsellManager() {
        var4 = _closure1_slot3;
        var3 = var4.useEffect;
        var2 = function() {
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 15;
            var2 = var7[var1];
            var1 = undefined;
            var4 = var6.bind(var1)(var2);
            var3 = var4.init;
            var2 = {};
            var8 = _closure1_slot0;
            var5 = 7;
            var5 = var7[var5];
            var5 = var8.bind(var1)(var5);
            var5 = var5.isModalOpen;
            var2['hasModalOpen'] = var5;
            var5 = 16;
            var5 = var7[var5];
            var5 = var6.bind(var1)(var5);
            var5 = var5.open;
            var2['openModal'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var1 = new Array(0);
        var1 = var3.bind(var4)(var2, var1);
        var1 = undefined;
        return var1;
    };
    var3['useUpsellManager'] = var4;
    var2 = function useScreenReaderEnabled() {
        var4 = _closure1_slot3;
        var3 = var4.useEffect;
        var2 = function() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 17;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.checkScreenreaderEnabled;
            var2 = var2.bind(var3)();
            return var1;
        };
        var1 = new Array(0);
        var1 = var3.bind(var4)(var2, var1);
        var1 = undefined;
        return var1;
    };
    var3['useScreenReaderEnabled'] = var2;
    return var1;
})();