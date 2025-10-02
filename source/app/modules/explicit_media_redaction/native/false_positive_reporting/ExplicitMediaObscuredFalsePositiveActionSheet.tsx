// app/modules/explicit_media_redaction/native/false_positive_reporting/ExplicitMediaObscuredFalsePositiveActionSheet.tsx
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
    var4 = var4.EXPLICIT_MEDIA_FALSE_POSITIVE_ACTION_SHEET_KEY;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/explicit_media_redaction/native/false_positive_reporting/ExplicitMediaObscuredFalsePositiveActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ExplicitMediaObscuredFalsePositiveActionSheet(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var12 = var2.channelId;
            var _closure2_slot0 = var12;
            var11 = var2.messageId;
            var _closure2_slot1 = var11;
            var10 = var2.attachmentId;
            var8 = var2.embedId;
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 3;
            var7 = var6[var2];
            var4 = undefined;
            var9 = var3.bind(var4)(var7);
            var7 = var9.useRedactableMediaAttachmentsForMessage;
            var10 = var7.bind(var9)(var12, var11, var10);
            var _closure2_slot2 = var10;
            var2 = var6[var2];
            var7 = var3.bind(var4)(var2);
            var2 = var7.useRedactableMediaEmbedsForMessage;
            var9 = var2.bind(var7)(var12, var11, var8);
            var _closure2_slot3 = var9;
            var2 = 4;
            var2 = var6[var2];
            var6 = var3.bind(var4)(var2);
            var3 = var6.useExplicitMediaActions;
            var2 = {};
            var7 = function onSuccess() {
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 5;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.handleSuccess;
                var1 = _closure1_slot4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2['onSuccess'] = var7;
            var7 = function onError() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 5;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.handleError;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2['onError'] = var7;
            var7 = function report() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 6;
                    var3 = var3[var2];
                    var2 = undefined;
                    var6 = var4.bind(var2)(var3);
                    var5 = var6.reportFalsePositive;
                    var4 = _closure2_slot0;
                    var3 = _closure2_slot1;
                    var9 = _closure2_slot2;
                    var7 = null;
                    var9 = var7 == var9;
                    if(var9) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var11 = _closure2_slot2;
                    var10 = var11.map;
                    var9 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.id;
                        return var1;
                    };
                    var2 = var10.bind(var11)(var9);
case 2:
                    if(!(var7 == var2)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var2 = new Array(0);
case 4:
                    var9 = _closure2_slot3;
                    var8 = var9.map;
                    var1 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.id;
                        return var1;
                    };
                    var1 = var8.bind(var9)(var1);
                    if(!(var7 == var1)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var1 = new Array(0);
case 6:
                    var16 = var6;
                    var15 = var4;
                    var14 = var3;
                    var13 = var2;
                    var12 = var1;
                    var1 = var16[var5](var15, var14, var13, var12, var11);
                    return var1;
                }
            };
            var2['report'] = var7;
            var2 = var3.bind(var6)(var2);
            var13 = var2.reportFalsePositive;
            var _closure2_slot4 = var13;
            var7 = var2.isReportFalsePositiveLoading;
            var3 = null;
            var2 = var3 == var10;
            var6 = undefined;
            if(var2) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var6 = var10.length;
case 8:
            var14 = var3 != var6;
            var8 = 0;
            var2 = 0;
            if(!var14) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var2 = var6;
case 10:
            var2 = var2 > var8;
            if(var2) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var14 = var3 == var9;
            var6 = undefined;
            if(var14) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var6 = var9.length;
case 14:
            var14 = var3 != var6;
            var3 = 0;
            if(!var14) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var3 = var6;
case 16:
            var2 = var3 > var8;
case 12:
            if(var2) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 7;
            var2 = var6[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.hideActionSheet;
            var2 = var2.bind(var3)();
case 18:
            var6 = _closure1_slot3;
            var3 = var6.useCallback;
            var2 = new Array(1);
            var2[0] = var13;
            var1 = function() {
                var2 = _closure2_slot4;
                var1 = undefined;
                var2 = var2.bind(var1)();
                return var1;
            };
            var6 = var3.bind(var6)(var1, var2);
            var3 = _closure1_slot5;
            var2 = _closure1_slot0;
            var13 = _closure1_slot2;
            var1 = 5;
            var1 = var13[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.ExplicitMediaFalsePositiveActionSheet;
            var1 = {};
            var1['channelId'] = var12;
            var1['messageId'] = var11;
            var1['isReportFalsePositiveLoading'] = var7;
            var12 = var10.length;
            var11 = 1;
            var7 = undefined;
            if(!(var11 === var12)) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var7 = var10[var8];
case 20:
            var1['attachmentPreview'] = var7;
            var10 = var9.length;
            var7 = undefined;
            if(!(var11 === var10)) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var7 = var9[var8];
case 22:
            var1['embedPreview'] = var7;
            var1['onConfirmPress'] = var6;
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var5 = 8;
            var5 = var7[var5];
            var5 = var6.bind(var4)(var5);
            var5 = var5.TrackMediaRedactionContext;
            var5 = var5.EXPLICIT_MEDIA_OBSCURED_FALSE_POSITIVE_FLOW;
            var1['analyticsContext'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();