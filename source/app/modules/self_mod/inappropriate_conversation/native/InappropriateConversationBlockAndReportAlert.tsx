// app/modules/self_mod/inappropriate_conversation/native/InappropriateConversationBlockAndReportAlert.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var2 = function InappropriateConversationBlockAndReportAlert(arg1) {
        var5 = arg1;
        var11 = var5.channelId;
        var _closure2_slot0 = var11;
        var14 = var5.warningId;
        var _closure2_slot1 = var14;
        var4 = var5.warningType;
        var _closure2_slot2 = var4;
        var12 = var5.senderId;
        var _closure2_slot3 = var12;
        var2 = var5.analyticsBlockContext;
        var _closure2_slot4 = var2;
        var6 = var5.analyticsBlockAndReportContext;
        var _closure2_slot5 = var6;
        var3 = var5.analyticsCancelContext;
        var _closure2_slot6 = var3;
        var10 = var5.onClose;
        var13 = var5.onDismiss;
        var _closure2_slot7 = var13;
        var9 = _closure1_slot3;
        var8 = var9.useCallback;
        var7 = new Array(4);
        var7[0] = var11;
        var7[1] = var14;
        var7[2] = var12;
        var7[3] = var4;
        var4 = function(arg1) {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 2;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.trackCtaEvent;
            var2 = {};
            var6 = _closure2_slot0;
            var2['channelId'] = var6;
            var6 = _closure2_slot1;
            var2['warningId'] = var6;
            var6 = _closure2_slot3;
            var2['senderId'] = var6;
            var5 = _closure2_slot2;
            var2['warningType'] = var5;
            var5 = arg1;
            var2['cta'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var9 = var8.bind(var9)(var4, var7);
        var _closure2_slot8 = var9;
        var8 = _closure1_slot3;
        var7 = var8.useCallback;
        var4 = new Array(2);
        var4[0] = var9;
        var4[1] = var3;
        var3 = function() {
            var3 = _closure2_slot8;
            var2 = _closure2_slot6;
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var8 = var7.bind(var8)(var3, var4);
        var7 = _closure1_slot3;
        var4 = var7.useCallback;
        var3 = new Array(3);
        var3[0] = var13;
        var3[1] = var9;
        var3[2] = var2;
        var2 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var3 = _closure2_slot7;
                var2 = null;
                if(!(var2 != var3)) { _fun0001_ip = 23; continue _fun0001 }
 13:
                var3 = _closure2_slot7;
                var2 = undefined;
                var2 = var3.bind(var2)();
 23:
                var3 = _closure2_slot8;
                var2 = _closure2_slot4;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            }
        };
        var7 = var4.bind(var7)(var2, var3);
        var4 = _closure1_slot3;
        var3 = var4.useCallback;
        var2 = new Array(3);
        var2[0] = var13;
        var2[1] = var9;
        var2[2] = var6;
        var1 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var3 = _closure2_slot7;
                var2 = null;
                if(!(var2 != var3)) { _fun0002_ip = 23; continue _fun0002 }
 13:
                var3 = _closure2_slot7;
                var2 = undefined;
                var2 = var3.bind(var2)();
 23:
                var3 = _closure2_slot8;
                var2 = _closure2_slot5;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            }
        };
        var6 = var3.bind(var4)(var1, var2);
        var4 = _closure1_slot4;
        var2 = _closure1_slot1;
        var9 = _closure1_slot2;
        var1 = 3;
        var1 = var9[var1];
        var3 = undefined;
        var2 = var2.bind(var3)(var1);
        var1 = {};
        var1['userId'] = var12;
        var1['channelId'] = var11;
        var1['onClose'] = var10;
        var1['onCancel'] = var8;
        var1['onBlock'] = var7;
        var1['onBlockAndReport'] = var6;
        var6 = 'primary';
        var1['blockButtonVariant'] = var6;
        var8 = _closure1_slot0;
        var5 = 4;
        var6 = var9[var5];
        var6 = var8.bind(var3)(var6);
        var7 = var6.intl;
        var6 = var7.string;
        var5 = var9[var5];
        var5 = var8.bind(var3)(var5);
        var5 = var5.t;
        var5 = var5.5NhTvr;
        var5 = var6.bind(var7)(var5);
        var1['description'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot4 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/self_mod/inappropriate_conversation/native/InappropriateConversationBlockAndReportAlert.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    var3['InappropriateConversationBlockAndReportAlert'] = var2;
    return var1;
})();