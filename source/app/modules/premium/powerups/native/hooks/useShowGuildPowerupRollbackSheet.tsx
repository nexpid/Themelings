// app/modules/premium/powerups/native/hooks/useShowGuildPowerupRollbackSheet.tsx
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
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ContentDismissActionType;
    var _closure1_slot5 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/powerups/native/hooks/useShowGuildPowerupRollbackSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useShowGuildPowerupRollbackSheet(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arguments[2];
            var1 = undefined;
            if(!(var5 === var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = false;
case 2:
            var _closure2_slot0 = var1;
            var _closure2_slot1 = var1;
            var _closure2_slot2 = var1;
            var _closure2_slot3 = var1;
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var4 = 3;
            var4 = var7[var4];
            var7 = var6.bind(var1)(var4);
            var6 = arg1;
            var4 = arg2;
            var6 = var7.bind(var1)(var6, var4);
            var4 = var6.shouldShow;
            var7 = var6.modalConfig;
            _closure2_slot0 = var7;
            var6 = new Array(0);
            if(!var4) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var8 = null;
            var4 = var8 != var7;
case 4:
            if(!var4) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var4 = !var5;
case 6:
            if(!var4) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var5 = var6.push;
            var4 = var7.dismissibleContent;
            var4 = var5.bind(var6)(var4);
case 8:
            var5 = _closure1_slot0;
            var8 = _closure1_slot2;
            var4 = 4;
            var4 = var8[var4];
            var5 = var5.bind(var1)(var4);
            var4 = var5.useSelectedDismissibleContent;
            var6 = var4.bind(var5)(var6);
            var5 = _closure1_slot3;
            var4 = 2;
            var5 = var5.bind(var1)(var6, var4);
            var4 = 0;
            var8 = var5[var4];
            _closure2_slot1 = var8;
            var4 = 1;
            var6 = var5[var4];
            _closure2_slot2 = var6;
            var5 = _closure1_slot4;
            var4 = var5.useRef;
            var3 = false;
            var3 = var4.bind(var5)(var3);
            _closure2_slot3 = var3;
            var4 = var5.useEffect;
            var3 = new Array(3);
            var3[0] = var8;
            var3[1] = var7;
            var3[2] = var6;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot3;
                    var1 = var1.current;
                    if(var1) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var3 = _closure2_slot0;
                    var2 = null;
                    var1 = var2 == var3;
case 10:
                    if(var1) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                    var2 = _closure2_slot0;
                    var3 = var2.primaryButtonText;
                    var2 = null;
                    var1 = var2 == var3;
case 12:
                    if(var1) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                    var3 = _closure2_slot1;
                    var2 = _closure2_slot0;
                    var2 = var2.dismissibleContent;
                    var1 = var3 !== var2;
case 14:
                    if(var1) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                    var2 = _closure2_slot3;
                    var1 = true;
                    var2['current'] = var1;
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 5;
                    var1 = var3[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var6 = _closure2_slot0;
                    var6 = var6.header;
                    var1['header'] = var6;
                    var6 = _closure2_slot0;
                    var8 = var6.bodies;
                    var7 = var8.join;
                    var6 = '\n\n';
                    var6 = var7.bind(var8)(var6);
                    var1['body'] = var6;
                    var5 = _closure2_slot0;
                    var5 = var5.primaryButtonText;
                    var1['ctaText'] = var5;
                    var5 = function onCtaPress() {
                        var4 = _closure2_slot2;
                        var1 = _closure1_slot5;
                        var3 = var1.TAKE_ACTION;
                        var1 = undefined;
                        var3 = var4.bind(var1)(var3);
                        var4 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var3 = 6;
                        var3 = var6[var3];
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.hideActionSheet;
                        var5 = _closure1_slot0;
                        var2 = 5;
                        var2 = var6[var2];
                        var2 = var5.bind(var1)(var2);
                        var2 = var2.GUILD_POWERUP_ROLLBACK_SHEET_KEY;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var1['onCtaPress'] = var5;
                    var4 = function onDismiss() {
                        var3 = _closure2_slot2;
                        var1 = _closure1_slot5;
                        var2 = var1.USER_DISMISS;
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var1['onDismiss'] = var4;
                    var1 = var2.bind(var3)(var1);
case 16:
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