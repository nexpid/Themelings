// app/modules/messages/native/renderer/RowGenerator.tsx
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
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.RowType;
    var _closure1_slot6 = var7;
    var7 = var4.SeparatorType;
    var _closure1_slot7 = var7;
    var4 = var4.LoadingType;
    var _closure1_slot8 = var4;
    var4 = {'constrainedWidth': 0, 'animatingStickerMessageId': null, 'forcedTheme': null, 'shouldObscureSpoiler': true, 'shouldDisableInteractiveComponents': true, 'shouldFilterKeywords': false};
    var7 = 4;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var11 = var7.DEFAULT_OPTIONS;
    var12 = var4;
    var7 = copyDataProperties(var12, var11);
    var _closure1_slot9 = var4;
    var2 = function() {
        var4 = _closure1_slot4;
        var3 = function RowManager() {
            var3 = this;
            var5 = _closure1_slot3;
            var4 = _closure2_slot0;
            var1 = undefined;
            var4 = var5.bind(var1)(var3, var4);
            var2 = _closure1_slot9;
            var3['options'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'setOptions';
        var1['key'] = var2;
        var2 = function value(arg1) {
            var3 = this;
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 5;
            var4 = var4[var1];
            var1 = undefined;
            var8 = var5.bind(var1)(var4);
            var7 = var8.merge;
            var11 = _closure1_slot9;
            var10 = var3.options;
            var12 = {};
            var9 = arg1;
            var13 = var8;
            var2 = var13[var7](var12, var11, var10, var9, var8);
            var3['options'] = var2;
            return var1;
        };
        var1['value'] = var2;
        var2 = new Array(2);
        var2[0] = var1;
        var1 = {};
        var6 = 'generate';
        var1['key'] = var6;
        var5 = function value(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var5 = arg1;
                var4 = this;
                var8 = var5.rowType;
                var1 = var4.options;
                var3 = var1.forcedTheme;
                var1 = null;
                if(!(var1 == var3)) { _fun0001_ip = 42; continue _fun0001 }
 29:
                var1 = _closure1_slot5;
                var3 = var1.theme;
 42:
                var2 = _closure1_slot6;
                var2 = var2.BLOCKED_GROUP;
                if(!(var2 !== var8)) { _fun0001_ip = 318; continue _fun0001 }
 62:
                var2 = _closure1_slot6;
                var2 = var2.IGNORED_GROUP;
                if(!(var2 !== var8)) { _fun0001_ip = 318; continue _fun0001 }
 79:
                var2 = _closure1_slot6;
                var2 = var2.MESSAGE;
                if(!(var2 !== var8)) { _fun0001_ip = 276; continue _fun0001 }
 96:
                var2 = _closure1_slot7;
                var2 = var2.DAY;
                if(!(var2 !== var8)) { _fun0001_ip = 240; continue _fun0001 }
 113:
                var2 = _closure1_slot7;
                var2 = var2.UNREAD;
                if(!(var2 !== var8)) { _fun0001_ip = 240; continue _fun0001 }
 127:
                var2 = _closure1_slot7;
                var2 = var2.SUMMARY;
                if(!(var2 !== var8)) { _fun0001_ip = 240; continue _fun0001 }
 141:
                var2 = _closure1_slot8;
                var2 = var2.LOAD_BEFORE;
                if(!(var2 !== var8)) { _fun0001_ip = 204; continue _fun0001 }
 155:
                var2 = _closure1_slot8;
                var2 = var2.LOAD_AFTER;
                if(!(var2 !== var8)) { _fun0001_ip = 204; continue _fun0001 }
 169:
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 10;
                var6 = var6[var2];
                var2 = undefined;
                var7 = var7.bind(var2)(var6);
                var6 = var7.assertNever;
                var6 = var6.bind(var7)(var8);
                return var2;
 204:
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 9;
                var6 = var6[var2];
                var2 = undefined;
                var6 = var7.bind(var2)(var6);
                var2 = var6.generateLoadingRowData;
                var2 = var2.bind(var6)(var5, var3);
                return var2;
 240:
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 8;
                var6 = var6[var2];
                var2 = undefined;
                var6 = var7.bind(var2)(var6);
                var2 = var6.generateSeparatorRowData;
                var2 = var2.bind(var6)(var5, var3);
                return var2;
 276:
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 7;
                var6 = var6[var2];
                var2 = undefined;
                var7 = var7.bind(var2)(var6);
                var6 = var7.generateMessageRowData;
                var2 = var4.options;
                var2 = var6.bind(var7)(var5, var2, var3);
                return var2;
 318:
                var6 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 6;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var6.bind(var1)(var2);
                var1 = var2.generateBlockedGroupRowData;
                var1 = var1.bind(var2)(var5, var3, var4);
                return var1;
            }
        };
        var1['value'] = var5;
        var2[1] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/RowGenerator.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();