// app/modules/forwarding/native/ForwardModalUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
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
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot4 = var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/forwarding/native/ForwardModalUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = 'forward-modal';
    var3['FORWARD_MODAL_KEY'] = var4;
    var4 = function openForwardModal(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var11 = var2.message;
            var8 = var2.source;
            var10 = var2.initialSelectedDestinations;
            var1 = undefined;
            if(!(var10 === var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var10 = new Array(0);
case 2:
            var9 = var2.forwardOptions;
            var3 = var2.customSendHandler;
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 2;
            var2 = var6[var2];
            var7 = var4.bind(var1)(var2);
            var2 = var7.dismissKeyboard;
            var2 = var2.bind(var7)();
            var2 = 3;
            var2 = var6[var2];
            var13 = var4.bind(var1)(var2);
            var12 = var13.trackForwardStart;
            var7 = var11.channel_id;
            var2 = var11.id;
            var2 = var12.bind(var13)(var7, var2, var8);
            var2 = 4;
            var2 = var6[var2];
            var4 = var4.bind(var1)(var2);
            var2 = var4.getIsWindowLarge;
            var2 = var2.bind(var4)();
            if(!var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 5;
            var4 = var7[var4];
            var6 = var6.bind(var1)(var4);
            var4 = var6.isIOS;
            var2 = var4.bind(var6)();
case 4:
            var7 = _closure1_slot1;
            var4 = _closure1_slot2;
            var6 = 6;
            var6 = var4[var6];
            var7 = var7.bind(var1)(var6);
            var6 = var7.pushLazy;
            var12 = _closure1_slot0;
            var5 = 8;
            var5 = var4[var5];
            var12 = var12.bind(var1)(var5);
            var5 = 7;
            var5 = var4[var5];
            var4 = var4.paths;
            var5 = var12.bind(var1)(var5, var4);
            var4 = {};
            var4['message'] = var11;
            var4['initialSelectedDestinations'] = var10;
            var4['forwardOptions'] = var9;
            var4['source'] = var8;
            var4['customSendHandler'] = var3;
            var3 = undefined;
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var2 = {};
            var8 = 'modal';
            var2['presentation'] = var8;
            var3 = var2;
case 6:
            var15 = 'forward-modal';
            var18 = var7;
            var17 = var5;
            var16 = var4;
            var14 = var3;
            var2 = var18[var6](var17, var16, var15, var14, var13);
            return var1;
        }
    };
    var3['openForwardModal'] = var4;
    var4 = function closeForwardModal() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 6;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.popWithKey;
        var2 = 'forward-modal';
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['closeForwardModal'] = var4;
    var2 = function showForwardFailedAlertModal(arg1) {
        var1 = arg1;
        var9 = var1.message;
        var8 = var1.failedDestinations;
        var7 = var1.forwardOptions;
        var4 = _closure1_slot3;
        var3 = var4.lazy;
        var1 = function() {
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var2 = 8;
            var2 = var1[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = 9;
            var2 = var1[var2];
            var1 = var1.paths;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var6 = var3.bind(var4)(var1);
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 10;
        var3 = var3[var1];
        var1 = undefined;
        var5 = var4.bind(var1)(var3);
        var4 = var5.openAlert;
        var3 = _closure1_slot4;
        var2 = {};
        var2['message'] = var9;
        var2['failedDestinations'] = var8;
        var2['forwardOptions'] = var7;
        var3 = var3.bind(var1)(var6, var2);
        var2 = 'forward-failed-alert-modal';
        var2 = var4.bind(var5)(var2, var3);
        return var1;
    };
    var3['showForwardFailedAlertModal'] = var2;
    return var1;
})();