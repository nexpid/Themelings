// app/stores/UserSettingsModalStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
 2: // try_start_0
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
 70: // try_end0
            _fun0001_ip = 74; continue _fun0001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot18 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var11 = function handleFormInit(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = arg1;
            var4 = _closure1_slot5;
            var2 = var4.getCurrentUser;
            var8 = var2.bind(var4)();
            var2 = null;
            if(!(var2 != var8)) { _fun0002_ip = 346; continue _fun0002 }
 28:
            var4 = var3.section;
            if(!(var2 == var4)) { _fun0002_ip = 41; continue _fun0002 }
 37:
            var4 = _closure1_slot9;
 41:
            _closure1_slot9 = var4;
            var4 = var3.subsection;
            var4 = var2 != var4;
            if(!var4) { _fun0002_ip = 66; continue _fun0002 }
 58:
            var5 = _closure1_slot9;
            var4 = var2 != var5;
 66:
            if(!var4) { _fun0002_ip = 87; continue _fun0002 }
 69:
            var6 = _closure1_slot10;
            var5 = _closure1_slot9;
            var4 = var3.subsection;
            var6[var5] = var4;
 87:
            var4 = var3.scrollPosition;
            var4 = var2 != var4;
            if(!var4) { _fun0002_ip = 108; continue _fun0002 }
 100:
            var5 = _closure1_slot9;
            var4 = var2 != var5;
 108:
            if(!var4) { _fun0002_ip = 129; continue _fun0002 }
 111:
            var6 = _closure1_slot11;
            var5 = _closure1_slot9;
            var4 = var3.scrollPosition;
            var6[var5] = var4;
 129:
            var4 = var3.openWithoutBackstack;
            var4 = !var4;
            var4 = !var4;
            _closure1_slot14 = var4;
            var4 = _closure1_slot6;
            var4 = var4.OPEN;
            _closure1_slot8 = var4;
            var4 = {};
            _closure1_slot12 = var4;
            var5 = {};
            var4 = _closure1_slot7;
            var6 = var4.ACCOUNT;
            var4 = {};
            var7 = var8.id;
            var4['userId'] = var7;
            var7 = var8.username;
            var4['username'] = var7;
            var7 = var8.discriminator;
            var4['discriminator'] = var7;
            var7 = var8.email;
            var4['email'] = var7;
            var7 = var8.avatar;
            var4['avatar'] = var7;
            var7 = '';
            var4['password'] = var7;
            var4['newPassword'] = var2;
            var7 = var8.isClaimed;
            var7 = var7.bind(var8)();
            var4['claimed'] = var7;
            var5[var6] = var4;
            var4 = {};
            var10 = var4;
            var9 = var5;
            var5 = copyDataProperties(var10, var9);
            _closure1_slot13 = var4;
            var5 = var3.analyticsLocation;
            var6 = var2 != var5;
            var4 = null;
            if(!var6) { _fun0002_ip = 298; continue _fun0002 }
 295:
            var4 = var5;
 298:
            _closure1_slot15 = var4;
            var4 = var3.analyticsLocations;
            if(!(var2 == var4)) { _fun0002_ip = 316; continue _fun0002 }
 312:
            var4 = new Array(0);
 316:
            _closure1_slot16 = var4;
            var3 = var3.searchParams;
            var4 = var2 != var3;
            var2 = null;
            if(!var4) { _fun0002_ip = 338; continue _fun0002 }
 335:
            var2 = var3;
 338:
            _closure1_slot17 = var2;
            var2 = undefined;
            return var2;
 346:
            var2 = _closure1_slot20;
            var1 = undefined;
            var2 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot19 = var11;
    var10 = function handleFormClose() {
        var1 = _closure1_slot6;
        var1 = var1.CLOSED;
        _closure1_slot8 = var1;
        var1 = null;
        _closure1_slot13 = var1;
        _closure1_slot9 = var1;
        var3 = {};
        _closure1_slot10 = var3;
        var3 = {};
        _closure1_slot11 = var3;
        _closure1_slot15 = var1;
        var3 = new Array(0);
        _closure1_slot16 = var3;
        _closure1_slot17 = var1;
        var1 = undefined;
        return var1;
    };
    var _closure1_slot20 = var10;
    var9 = function handleFormSubmitComplete() {
        var1 = _closure1_slot6;
        var1 = var1.OPEN;
        _closure1_slot8 = var1;
        var1 = {};
        _closure1_slot12 = var1;
        var1 = undefined;
        return var1;
    };
    var _closure1_slot21 = var9;
    var1 = global;
    var12 = var1.Object;
    var8 = var12.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var12)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot0 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot1 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 6;
    var2 = var6[var2];
    var8 = var5.bind(var1)(var2);
    var2 = var8.FormStates;
    var _closure1_slot6 = var2;
    var8 = var8.UserSettingsSections;
    var _closure1_slot7 = var8;
    var2 = var2.CLOSED;
    var _closure1_slot8 = var2;
    var2 = null;
    var _closure1_slot9 = var2;
    var8 = {};
    var _closure1_slot10 = var8;
    var8 = {};
    var _closure1_slot11 = var8;
    var8 = {};
    var _closure1_slot12 = var8;
    var _closure1_slot13 = var2;
    var8 = false;
    var _closure1_slot14 = var8;
    var _closure1_slot15 = var2;
    var8 = new Array(0);
    var _closure1_slot16 = var8;
    var _closure1_slot17 = var2;
    var2 = 7;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function UserSettingsModalStore() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot0;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot3;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot2;
                var1 = _closure1_slot18;
                var1 = var1.bind(var3)();
                if(var1) { _fun0003_ip = 69; continue _fun0003 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0003_ip = 105; continue _fun0003;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot3;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
 105:
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
        var1 = new Array(11);
        var1[0] = var5;
        var5 = {};
        var7 = 'getSection';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot9;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getSubsection';
        var5['key'] = var7;
        var7 = function value() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var3 = _closure1_slot9;
                var1 = null;
                var3 = var1 != var3;
                if(!var3) { _fun0004_ip = 28; continue _fun0004 }
 16:
                var3 = _closure1_slot10;
                var2 = _closure1_slot9;
                var1 = var3[var2];
 28:
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
 0:
                var3 = _closure1_slot9;
                var1 = null;
                var3 = var1 != var3;
                if(!var3) { _fun0005_ip = 28; continue _fun0005 }
 16:
                var3 = _closure1_slot11;
                var2 = _closure1_slot9;
                var1 = var3[var2];
 28:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getAnalyticsLocation';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot15;
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getAnalyticsLocations';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot16;
            return var1;
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'getErrors';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot12;
            return var1;
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'getSubmitting';
        var5['key'] = var7;
        var7 = function value() {
            var2 = _closure1_slot8;
            var1 = _closure1_slot6;
            var1 = var1.SUBMITTING;
            var1 = var2 === var1;
            return var1;
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'getSettings';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot13;
            return var1;
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'getOpenWithoutBackstack';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot14;
            return var1;
        };
        var5['value'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'getSearchParams';
        var5['key'] = var7;
        var6 = function value() {
            var1 = _closure1_slot17;
            return var1;
        };
        var5['value'] = var6;
        var1[10] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'UserSettingsModalStore';
    var8['displayName'] = var2;
    var2 = 8;
    var2 = var6[var2];
    var15 = var7.bind(var1)(var2);
    var2 = {};
    var12 = function handleFormOpen(arg1) {
        var3 = _closure1_slot19;
        var1 = undefined;
        var2 = arg1;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var2['USER_SETTINGS_MODAL_OPEN'] = var12;
    var2['USER_SETTINGS_MODAL_INIT'] = var11;
    var2['USER_SETTINGS_MODAL_CLOSE'] = var10;
    var2['LOGOUT'] = var10;
    var10 = function handleFormSubmit() {
        var1 = _closure1_slot6;
        var1 = var1.SUBMITTING;
        _closure1_slot8 = var1;
        var1 = undefined;
        return var1;
    };
    var2['USER_SETTINGS_MODAL_SUBMIT'] = var10;
    var10 = function handleFormSubmitFailure(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var3 = _closure1_slot8;
            var1 = _closure1_slot6;
            var1 = var1.SUBMITTING;
            if(!(var3 === var1)) { _fun0006_ip = 74; continue _fun0006 }
 21:
            var1 = _closure1_slot6;
            var1 = var1.OPEN;
            _closure1_slot8 = var1;
            var1 = _closure1_slot7;
            var1 = var1.ACCOUNT;
            _closure1_slot9 = var1;
            var1 = arg1;
            var1 = var1.errors;
            var3 = null;
            if(!(var3 == var1)) { _fun0006_ip = 66; continue _fun0006 }
 64:
            var1 = {};
 66:
            _closure1_slot12 = var1;
            var1 = undefined;
            return var1;
 74:
            var1 = false;
            return var1;
        }
    };
    var2['USER_SETTINGS_MODAL_SUBMIT_FAILURE'] = var10;
    var10 = function handleSetSection(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var1 = arg1;
            var3 = var1.section;
            _closure1_slot9 = var3;
            var4 = null;
            _closure1_slot15 = var4;
            var3 = var1.analyticsLocations;
            if(!(var4 == var3)) { _fun0007_ip = 35; continue _fun0007 }
 31:
            var3 = new Array(0);
 35:
            _closure1_slot16 = var3;
            var3 = var1.subsection;
            if(!(var4 != var3)) { _fun0007_ip = 67; continue _fun0007 }
 49:
            var3 = _closure1_slot10;
            var2 = _closure1_slot9;
            var1 = var1.subsection;
            var3[var2] = var1;
 67:
            var1 = undefined;
            return var1;
        }
    };
    var2['USER_SETTINGS_MODAL_SET_SECTION'] = var10;
    var10 = function handleClearSubsection(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var1 = arg1;
            var2 = var1.forSection;
            var4 = null;
            if(!(var4 == var2)) { _fun0008_ip = 40; continue _fun0008 }
 15:
            var3 = _closure1_slot9;
            if(!(var4 != var3)) { _fun0008_ip = 51; continue _fun0008 }
 26:
            var3 = _closure1_slot10;
            var1 = _closure1_slot9;
            var1 = delete var3[var1];
            _fun0008_ip = 51; continue _fun0008;
 40:
            var1 = _closure1_slot10;
            var1 = delete var1[var2];
 51:
            var1 = undefined;
            return var1;
        }
    };
    var2['USER_SETTINGS_MODAL_CLEAR_SUBSECTION'] = var10;
    var10 = function handleClearScrollPosition(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var1 = arg1;
            var2 = var1.forSection;
            var4 = null;
            if(!(var4 == var2)) { _fun0009_ip = 40; continue _fun0009 }
 15:
            var3 = _closure1_slot9;
            if(!(var4 != var3)) { _fun0009_ip = 51; continue _fun0009 }
 26:
            var3 = _closure1_slot11;
            var1 = _closure1_slot9;
            var1 = delete var3[var1];
            _fun0009_ip = 51; continue _fun0009;
 40:
            var1 = _closure1_slot11;
            var1 = delete var1[var2];
 51:
            var1 = undefined;
            return var1;
        }
    };
    var2['USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION'] = var10;
    var10 = function handleUpdateAccount(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var1 = arg1;
            var4 = var1.settings;
            var3 = _closure1_slot13;
            var2 = null;
            if(!(var2 == var3)) { _fun0010_ip = 28; continue _fun0010 }
 22:
            var2 = {};
            _closure1_slot13 = var2;
 28:
            var3 = _closure1_slot13;
            var2 = _closure1_slot7;
            var2 = var2.ACCOUNT;
            var6 = var3[var2];
            var3 = _closure1_slot13;
            var1 = _closure1_slot7;
            var2 = var1.ACCOUNT;
            var1 = {};
            var7 = var1;
            var5 = copyDataProperties(var7, var6);
            var7 = var1;
            var6 = var4;
            var4 = copyDataProperties(var7, var6);
            var3[var2] = var1;
            var1 = undefined;
            return var1;
        }
    };
    var2['USER_SETTINGS_MODAL_UPDATE_ACCOUNT'] = var10;
    var2['USER_SETTINGS_MODAL_SUBMIT_COMPLETE'] = var9;
    var4 = function handleFormReset() {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
            var2 = _closure1_slot5;
            var1 = var2.getCurrentUser;
            var7 = var1.bind(var2)();
            var2 = _closure1_slot21;
            var1 = undefined;
            var2 = var2.bind(var1)();
            var6 = null;
            if(!(var6 != var7)) { _fun0011_ip = 147; continue _fun0011 }
 32:
            var4 = {};
            var2 = _closure1_slot7;
            var5 = var2.ACCOUNT;
            var2 = {};
            var8 = var7.id;
            var2['userId'] = var8;
            var8 = var7.username;
            var2['username'] = var8;
            var8 = var7.discriminator;
            var2['discriminator'] = var8;
            var8 = var7.email;
            var2['email'] = var8;
            var8 = var7.avatar;
            var2['avatar'] = var8;
            var8 = '';
            var2['password'] = var8;
            var2['newPassword'] = var6;
            var6 = var7.isClaimed;
            var6 = var6.bind(var7)();
            var2['claimed'] = var6;
            var4[var5] = var2;
            var2 = {};
            var10 = var2;
            var9 = var4;
            var4 = copyDataProperties(var10, var9);
            _closure1_slot13 = var2;
 147:
            return var1;
        }
    };
    var2['USER_SETTINGS_MODAL_RESET'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var16 = var4;
    var14 = var2;
    var2 = new var16[var8](var15, var14, var13);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'stores/UserSettingsModalStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();