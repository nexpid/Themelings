// app/modules/dismissible_content/DismissibleContentUnsafeUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var4 = function UNSAFE_isDismissibleContentDismissed(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var5 = arg1;
            var1 = arguments[1];
            var6 = undefined;
            if(!(var1 === var6)) { _fun0001_ip = 14; continue _fun0001 }
 12:
            var1 = false;
 14:
            if(var1) { _fun0001_ip = 58; continue _fun0001 }
 17:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 2;
            var1 = var3[var1];
            var2 = var2.bind(var6)(var1);
            var1 = var2.disableNewUserDismissibleContent;
            var1 = var1.bind(var2)(var5);
            if(!var1) { _fun0001_ip = 58; continue _fun0001 }
 54:
            var1 = true;
            return var1;
 58:
            var1 = _closure1_slot4;
            var1 = var1.settings;
            var3 = var1.userContent;
            var1 = null;
            var7 = var1 == var3;
            var4 = undefined;
            if(var7) { _fun0001_ip = 94; continue _fun0001 }
 88:
            var4 = var3.dismissedContents;
 94:
            var1 = var1 != var4;
            if(!var1) { _fun0001_ip = 133; continue _fun0001 }
 101:
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 3;
            var2 = var7[var2];
            var3 = var3.bind(var6)(var2);
            var2 = var3.hasBit;
            var1 = var2.bind(var3)(var4, var5);
 133:
            return var1;
        }
    };
    var _closure1_slot5 = var4;
    var1 = function _UNSAFE_markDismissibleContentAsDismissed() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    StartGenerator();
                    var8 = arg1;
                    var7 = arguments[1];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 157; continue _fun0002 }
 16:
                    var3 = undefined;
                    if(!(var7 === var3)) { _fun0002_ip = 24; continue _fun0002 }
 22:
                    var7 = {};
 24:
                    SaveGenerator(address=28);
 26:
                    return var3;
 28:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0002_ip = 154; continue _fun0002 }
 34:
                    var6 = _closure1_slot5;
                    var4 = true;
                    var4 = var6.bind(var3)(var8, var4);
                    if(var4) { _fun0002_ip = 151; continue _fun0002 }
 52:
                    var6 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var9 = 5;
                    var4 = var10[var9];
                    var11 = var6.bind(var3)(var4);
                    var4 = var11.markDismissibleContentAsDismissedPreProcessing;
                    var4 = var4.bind(var11)(var8, var7);
                    var4 = 6;
                    var4 = var10[var4];
                    var6 = var6.bind(var3)(var4);
                    var4 = var6.addDismissedContent;
                    var4 = var4.bind(var6)(var8);
                    SaveGenerator(address=111);
 109:
                    return var4;
 111:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(var6) { _fun0002_ip = 148; continue _fun0002 }
 117:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var5 = var5[var9];
                    var6 = var6.bind(var3)(var5);
                    var5 = var6.markDismissibleContentAsDismissedPostProcessing;
                    var5 = var5.bind(var6)(var8, var7);
                    _fun0002_ip = 151; continue _fun0002;
 148:
                    return var4;
 151:
                    return var3;
 154:
                    return var2;
 157:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot6 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot6 = var1;
    var1 = function _UNSAFE_markSingleUseGuildDismissibleContentAsDismissed() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    StartGenerator();
                    var8 = arg1;
                    var7 = arguments[2];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 141; continue _fun0003 }
 16:
                    var4 = undefined;
                    if(!(var7 === var4)) { _fun0003_ip = 24; continue _fun0003 }
 22:
                    var7 = {};
 24:
                    SaveGenerator(address=28);
 26:
                    return var4;
 28:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0003_ip = 138; continue _fun0003 }
 34:
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var9 = 5;
                    var10 = var3[var9];
                    var11 = var6.bind(var4)(var10);
                    var10 = var11.markDismissibleContentAsDismissedPreProcessing;
                    var10 = var10.bind(var11)(var8, var7);
                    var3 = var3[var9];
                    var10 = var6.bind(var4)(var3);
                    var6 = var10.UNSAFE_addGuildDismissedContent;
                    var3 = arg2;
                    var3 = var6.bind(var10)(var8, var3);
                    SaveGenerator(address=97);
 95:
                    return var3;
 97:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(var6) { _fun0003_ip = 135; continue _fun0003 }
 103:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var5 = var5[var9];
                    var6 = var6.bind(var4)(var5);
                    var5 = var6.markDismissibleContentAsDismissedPostProcessing;
                    var5 = var5.bind(var6)(var8, var7);
                    return var4;
 135:
                    return var3;
 138:
                    return var2;
 141:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot7 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot7 = var1;
    var1 = function _UNSAFE_markTimeRecurringGuildDismissibleContentAsDismissed() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    StartGenerator();
                    var8 = arg1;
                    var7 = arguments[2];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 141; continue _fun0004 }
 16:
                    var4 = undefined;
                    if(!(var7 === var4)) { _fun0004_ip = 24; continue _fun0004 }
 22:
                    var7 = {};
 24:
                    SaveGenerator(address=28);
 26:
                    return var4;
 28:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0004_ip = 138; continue _fun0004 }
 34:
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var9 = 5;
                    var10 = var3[var9];
                    var11 = var6.bind(var4)(var10);
                    var10 = var11.markDismissibleContentAsDismissedPreProcessing;
                    var10 = var10.bind(var11)(var8, var7);
                    var3 = var3[var9];
                    var10 = var6.bind(var4)(var3);
                    var6 = var10.UNSAFE_addTimeRecurringGuildDismissedContent;
                    var3 = arg2;
                    var3 = var6.bind(var10)(var8, var3);
                    SaveGenerator(address=97);
 95:
                    return var3;
 97:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(var6) { _fun0004_ip = 135; continue _fun0004 }
 103:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var5 = var5[var9];
                    var6 = var6.bind(var4)(var5);
                    var5 = var6.markDismissibleContentAsDismissedPostProcessing;
                    var5 = var5.bind(var6)(var8, var7);
                    return var4;
 135:
                    return var3;
 138:
                    return var2;
 141:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot8 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot8 = var1;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 8;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/dismissible_content/DismissibleContentUnsafeUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var3['UNSAFE_isDismissibleContentDismissed'] = var4;
    var4 = function UNSAFE_useIsDismissibleContentDismissed(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 4;
        var4 = var4[var3];
        var3 = undefined;
        var4 = var5.bind(var3)(var4);
        var3 = var4.useStateFromStores;
        var5 = _closure1_slot4;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            var3 = _closure1_slot5;
            var2 = _closure2_slot0;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['UNSAFE_useIsDismissibleContentDismissed'] = var4;
    var4 = function UNSAFE_markDismissibleContentAsDismissed() {
        var1 = undefined;
        var4 = _closure1_slot6;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['UNSAFE_markDismissibleContentAsDismissed'] = var4;
    var4 = function UNSAFE_isSnowflakeBoundDismissibleContentDismissed(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var5 = arg1;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 2;
            var1 = var3[var1];
            var6 = undefined;
            var2 = var2.bind(var6)(var1);
            var1 = var2.disableNewUserDismissibleContent;
            var1 = var1.bind(var2)(var5);
            if(var1) { _fun0005_ip = 157; continue _fun0005 }
 42:
            var1 = _closure1_slot4;
            var1 = var1.settings;
            var1 = var1.userContent;
            var3 = null;
            var7 = var3 == var1;
            var2 = undefined;
            if(var7) { _fun0005_ip = 94; continue _fun0005 }
 69:
            var1 = var1.recurringDismissibleContentStates;
            var1 = var1[var5];
            var5 = var3 == var1;
            var2 = undefined;
            if(var5) { _fun0005_ip = 94; continue _fun0005 }
 88:
            var2 = var1.lastDismissedObjectId;
 94:
            var1 = {};
            var3 = var3 != var2;
            if(!var3) { _fun0005_ip = 145; continue _fun0005 }
 103:
            var5 = _closure1_slot1;
            var7 = _closure1_slot2;
            var4 = 7;
            var4 = var7[var4];
            var6 = var5.bind(var6)(var4);
            var5 = var6.compare;
            var4 = arg2;
            var5 = var5.bind(var6)(var4, var2);
            var4 = 1;
            var3 = var4 !== var5;
 145:
            var1['isDismissed'] = var3;
            var1['lastDismissedSnowflakeId'] = var2;
            return var1;
 157:
            var1 = {'isDismissed': true, 'lastDismissedSnowflakeId': null};
            return var1;
        }
    };
    var3['UNSAFE_isSnowflakeBoundDismissibleContentDismissed'] = var4;
    var4 = function UNSAFE_markSingleUseGuildDismissibleContentAsDismissed() {
        var1 = undefined;
        var4 = _closure1_slot7;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['UNSAFE_markSingleUseGuildDismissibleContentAsDismissed'] = var4;
    var2 = function UNSAFE_markTimeRecurringGuildDismissibleContentAsDismissed() {
        var1 = undefined;
        var4 = _closure1_slot8;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['UNSAFE_markTimeRecurringGuildDismissibleContentAsDismissed'] = var2;
    return var1;
})();