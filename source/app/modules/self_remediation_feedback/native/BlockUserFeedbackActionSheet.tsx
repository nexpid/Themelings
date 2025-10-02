// app/modules/self_remediation_feedback/native/BlockUserFeedbackActionSheet.tsx
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
    var7 = var5.bind(var1)(var4);
    var4 = var7.BlockUserFeedbackReasons;
    var _closure1_slot4 = var4;
    var7 = var7.getBlockUserFeedbackOptions;
    var _closure1_slot5 = var7;
    var7 = 2;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.AnalyticEvents;
    var _closure1_slot6 = var7;
    var7 = 3;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.jsx;
    var _closure1_slot7 = var7;
    var7 = var4.SOMETHING_ELSE;
    var4 = new Array(1);
    var4[0] = var7;
    var _closure1_slot8 = var4;
    var4 = function trackOpen() {
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 4;
        var3 = var3[var1];
        var1 = undefined;
        var5 = var4.bind(var1)(var3);
        var4 = var5.track;
        var2 = _closure1_slot6;
        var3 = var2.OPEN_POPOUT;
        var2 = {};
        var6 = 'Block User Feedback';
        var2['type'] = var6;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var _closure1_slot9 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/self_remediation_feedback/native/BlockUserFeedbackActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function BlockUserFeedbackActionSheet() {
        var2 = _closure1_slot1;
        var8 = _closure1_slot2;
        var1 = 5;
        var1 = var8[var1];
        var4 = undefined;
        var3 = var2.bind(var4)(var1);
        var1 = _closure1_slot5;
        var7 = var3.bind(var4)(var1);
        var9 = _closure1_slot3;
        var5 = var9.useCallback;
        var3 = function(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var1 = arg1;
                var3 = var1.rating;
                var2 = null;
                var1 = var2 != var3;
                if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var1 = var2 != var3;
case 2:
                if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 6;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.presentFeedbackSent;
                var1 = var1.bind(var2)();
case 4:
                var1 = undefined;
                return var1;
            }
        };
        var1 = new Array(0);
        var5 = var5.bind(var9)(var3, var1);
        var3 = _closure1_slot7;
        var1 = 7;
        var1 = var8[var1];
        var2 = var2.bind(var4)(var1);
        var1 = {'headerLabel': 'header goes here', 'showHeaderCloseButton': true, 'hideDontShowAgainCheckbox': true, 'ratingsBodyLabel': 'body goes here', 'reasonsHeaderLabel': 'section header goes here'};
        var1['reasons'] = var7;
        var7 = _closure1_slot8;
        var1['feedbackReasons'] = var7;
        var7 = _closure1_slot4;
        var7 = var7.SOMETHING_ELSE;
        var1['otherKey'] = var7;
        var6 = _closure1_slot9;
        var1['trackOpen'] = var6;
        var1['trackReport'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();