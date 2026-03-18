// app/stores/UserSettingsModalStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
case 2: // try_start_0
            var2 = global;
            var3 = var2.Boolean;
            var3 = var3.prototype;
            var4 = var3.valueOf;
            var3 = var4.call;
            var8 = var2.Reflect;
            var7 = var8.construct;
            var6 = var2.Boolean;
            var5 = new Array(0);
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = var7.bind(var8)(var6, var5, var2);
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var _closure2_slot0 = var2;
case 3: // try_end0
            _fun0001_ip = 4; continue _fun0001;
case 5: // catch_target0
            CatchBlockStart(arg_register=1);
case 4:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot12 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var9 = function handleFormInit(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg1;
            var4 = _closure1_slot5;
            var2 = var4.getCurrentUser;
            var4 = var2.bind(var4)();
            var2 = null;
            if(!(var2 != var4)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var4 = var3.section;
            if(!(var2 == var4)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var4 = _closure1_slot6;
case 8:
            _closure1_slot6 = var4;
            var4 = var3.subsection;
            var4 = var2 != var4;
            if(!var4) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var5 = _closure1_slot6;
            var4 = var2 != var5;
case 10:
            if(!var4) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var6 = _closure1_slot7;
            var5 = _closure1_slot6;
            var4 = var3.subsection;
            var6[var5] = var4;
case 12:
            var4 = var3.scrollPosition;
            var4 = var2 != var4;
            if(!var4) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var5 = _closure1_slot6;
            var4 = var2 != var5;
case 14:
            if(!var4) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var6 = _closure1_slot8;
            var5 = _closure1_slot6;
            var4 = var3.scrollPosition;
            var6[var5] = var4;
case 16:
            var5 = var3.analyticsLocation;
            var6 = var2 != var5;
            var4 = null;
            if(!var6) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var4 = var5;
case 18:
            _closure1_slot9 = var4;
            var4 = var3.analyticsLocations;
            if(!(var2 == var4)) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var4 = new Array(0);
case 20:
            _closure1_slot10 = var4;
            var3 = var3.searchParams;
            var4 = var2 != var3;
            var2 = null;
            if(!var4) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var2 = var3;
case 22:
            _closure1_slot11 = var2;
            var2 = undefined;
            return var2;
case 6:
            var2 = _closure1_slot14;
            var1 = undefined;
            var2 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot13 = var9;
    var8 = function handleFormClose() {
        var1 = null;
        _closure1_slot6 = var1;
        var3 = {};
        _closure1_slot7 = var3;
        var3 = {};
        _closure1_slot8 = var3;
        _closure1_slot9 = var1;
        var3 = new Array(0);
        _closure1_slot10 = var3;
        _closure1_slot11 = var1;
        var1 = undefined;
        return var1;
    };
    var _closure1_slot14 = var8;
    var1 = global;
    var10 = var1.Object;
    var7 = var10.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var10)(var3, var1, var2);
    var1 = 0;
    var2 = var5[var1];
    var1 = undefined;
    var2 = var6.bind(var1)(var2);
    var _closure1_slot0 = var2;
    var2 = 1;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot1 = var2;
    var2 = 2;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 3;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 4;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 5;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = null;
    var _closure1_slot6 = var2;
    var7 = {};
    var _closure1_slot7 = var7;
    var7 = {};
    var _closure1_slot8 = var7;
    var _closure1_slot9 = var2;
    var7 = new Array(0);
    var _closure1_slot10 = var7;
    var _closure1_slot11 = var2;
    var2 = 6;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var7 = var2.Store;
    var2 = function(arg1) {
        var4 = function UserSettingsModalStore() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot0;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot3;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot2;
                var1 = _closure1_slot12;
                var1 = var1.bind(var3)();
                if(var1) { _fun0003_ip = 13; continue _fun0003 }
case 24:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0003_ip = 25; continue _fun0003;
case 13:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot3;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 25:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot4;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot1;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value() {
            var3 = this;
            var2 = var3.waitFor;
            var1 = _closure1_slot5;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(7);
        var1[0] = var5;
        var5 = {};
        var7 = 'getSection';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot6;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getSubsection';
        var5['key'] = var7;
        var7 = function value() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var3 = _closure1_slot6;
                var1 = null;
                var3 = var1 != var3;
                if(!var3) { _fun0004_ip = 7; continue _fun0004 }
case 26:
                var3 = _closure1_slot7;
                var2 = _closure1_slot6;
                var1 = var3[var2];
case 7:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getScrollPosition';
        var5['key'] = var7;
        var7 = function value() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var3 = _closure1_slot6;
                var1 = null;
                var3 = var1 != var3;
                if(!var3) { _fun0005_ip = 7; continue _fun0005 }
case 26:
                var3 = _closure1_slot8;
                var2 = _closure1_slot6;
                var1 = var3[var2];
case 7:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getAnalyticsLocation';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot9;
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getAnalyticsLocations';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot10;
            return var1;
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'getSearchParams';
        var5['key'] = var7;
        var6 = function value() {
            var1 = _closure1_slot11;
            return var1;
        };
        var5['value'] = var6;
        var1[6] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var7 = var2.bind(var1)(var7);
    var2 = 'UserSettingsModalStore';
    var7['displayName'] = var2;
    var2 = 7;
    var2 = var5[var2];
    var13 = var6.bind(var1)(var2);
    var2 = {};
    var10 = function handleFormOpen(arg1) {
        var3 = _closure1_slot13;
        var1 = undefined;
        var2 = arg1;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var2['USER_SETTINGS_MODAL_OPEN'] = var10;
    var2['USER_SETTINGS_MODAL_INIT'] = var9;
    var2['USER_SETTINGS_MODAL_CLOSE'] = var8;
    var2['LOGOUT'] = var8;
    var8 = function handleSetSection(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg1;
            var3 = var1.section;
            _closure1_slot6 = var3;
            var4 = null;
            _closure1_slot9 = var4;
            var3 = var1.analyticsLocations;
            if(!(var4 == var3)) { _fun0006_ip = 27; continue _fun0006 }
case 28:
            var3 = new Array(0);
case 27:
            _closure1_slot10 = var3;
            _closure1_slot11 = var4;
            var3 = var1.subsection;
            if(!(var4 != var3)) { _fun0006_ip = 29; continue _fun0006 }
case 30:
            var3 = _closure1_slot7;
            var2 = _closure1_slot6;
            var1 = var1.subsection;
            var3[var2] = var1;
case 29:
            var1 = undefined;
            return var1;
        }
    };
    var2['USER_SETTINGS_MODAL_SET_SECTION'] = var8;
    var8 = function handleClearSubsection(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = arg1;
            var2 = var1.forSection;
            var4 = null;
            if(!(var4 == var2)) { _fun0007_ip = 31; continue _fun0007 }
case 32:
            var3 = _closure1_slot6;
            if(!(var4 != var3)) { _fun0007_ip = 24; continue _fun0007 }
case 33:
            var3 = _closure1_slot7;
            var1 = _closure1_slot6;
            var1 = delete var3[var1];
            _fun0007_ip = 24; continue _fun0007;
case 31:
            var1 = _closure1_slot7;
            var1 = delete var1[var2];
case 24:
            var1 = undefined;
            return var1;
        }
    };
    var2['USER_SETTINGS_MODAL_CLEAR_SUBSECTION'] = var8;
    var8 = function handleClearLocation() {
        var1 = null;
        _closure1_slot9 = var1;
        var3 = new Array(0);
        _closure1_slot10 = var3;
        _closure1_slot11 = var1;
        var1 = undefined;
        return var1;
    };
    var2['USER_SETTINGS_MODAL_CLEAR_LOCATION'] = var8;
    var4 = function handleClearScrollPosition(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var1 = arg1;
            var2 = var1.forSection;
            var4 = null;
            if(!(var4 == var2)) { _fun0008_ip = 31; continue _fun0008 }
case 32:
            var3 = _closure1_slot6;
            if(!(var4 != var3)) { _fun0008_ip = 24; continue _fun0008 }
case 33:
            var3 = _closure1_slot8;
            var1 = _closure1_slot6;
            var1 = delete var3[var1];
            _fun0008_ip = 24; continue _fun0008;
case 31:
            var1 = _closure1_slot8;
            var1 = delete var1[var2];
case 24:
            var1 = undefined;
            return var1;
        }
    };
    var2['USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION'] = var4;
    var4 = var7.prototype;
    var4 = Object.create(var4, {constructor: {value: var7}});
    var14 = var4;
    var12 = var2;
    var2 = new var14[var7](var13, var12, var11);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 8;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'stores/UserSettingsModalStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();