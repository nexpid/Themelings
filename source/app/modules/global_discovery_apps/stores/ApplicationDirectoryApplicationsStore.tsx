// app/modules/global_discovery_apps/stores/ApplicationDirectoryApplicationsStore.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var7 = native3;
    var3 = native6;
    var6 = native7;
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
            _closure1_slot11 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var4 = global;
    var9 = var4.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var11 = 0;
    var2 = var6[var11];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot0 = var2;
    var10 = 1;
    var2 = var6[var10];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot1 = var2;
    var9 = 2;
    var2 = var6[var9];
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
    var2 = {};
    var2['FETCHING'] = var11;
    var8 = 'FETCHING';
    var2[var11] = var8;
    var2['FETCHED'] = var10;
    var8 = 'FETCHED';
    var2[var10] = var8;
    var2['ERROR'] = var9;
    var8 = 'ERROR';
    var2[var9] = var8;
    var _closure1_slot6 = var2;
    var8 = {};
    var _closure1_slot7 = var8;
    var8 = {};
    var _closure1_slot8 = var8;
    var4 = var4.Set;
    var8 = var4.prototype;
    var8 = Object.create(var8, {constructor: {value: var4}});
    var15 = var8;
    var4 = new var15[var4](var14);
    var4 = var4 instanceof Object ? var4 : var8;
    var _closure1_slot9 = var4;
    var4 = {};
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var8 = var4.Store;
    var4 = function(arg1) {
        var4 = function ApplicationDirectoryApplicationsStore() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
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
                var1 = _closure1_slot11;
                var1 = var1.bind(var3)();
                if(var1) { _fun0002_ip = 69; continue _fun0002 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0002_ip = 105; continue _fun0002;
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
        var1 = 'getApplication';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var2 = arg1;
                var1 = null;
                if(!(var1 == var2)) { _fun0003_ip = 13; continue _fun0003 }
 9:
                var1 = undefined;
                return var1;
 13:
                var1 = _closure1_slot7;
                var1 = var1[var2];
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(9);
        var1[0] = var5;
        var5 = {};
        var7 = 'getApplicationRecord';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var4 = arg1;
                var2 = null;
                if(!(var2 != var4)) { _fun0004_ip = 24; continue _fun0004 }
 9:
                var3 = _closure1_slot7;
                var3 = var3[var4];
                if(!(var2 == var3)) { _fun0004_ip = 28; continue _fun0004 }
 24:
                var2 = undefined;
                return var2;
 28:
                var2 = _closure1_slot5;
                var1 = var2.createFromServer;
                var1 = var1.bind(var2)(var3);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getApplications';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot7;
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getApplicationFetchState';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var2 = arg1;
                var1 = null;
                if(!(var1 == var2)) { _fun0005_ip = 13; continue _fun0005 }
 9:
                var1 = undefined;
                return var1;
 13:
                var1 = _closure1_slot8;
                var1 = var1[var2];
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getApplicationFetchStates';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot8;
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'isInvalidApplication';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var4 = arg1;
                var1 = null;
                var1 = var1 != var4;
                if(!var1) { _fun0006_ip = 29; continue _fun0006 }
 12:
                var3 = _closure1_slot9;
                var2 = var3.has;
                var1 = var2.bind(var3)(var4);
 29:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'getInvalidApplicationIds';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot9;
            return var1;
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'isFetching';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = this;
            var2 = var3.getApplicationFetchState;
            var1 = arg1;
            var2 = var2.bind(var3)(var1);
            var1 = _closure1_slot6;
            var1 = var1.FETCHING;
            var1 = var2 === var1;
            return var1;
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'getApplicationLastFetchTime';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var2 = arg1;
                var1 = null;
                if(!(var1 == var2)) { _fun0007_ip = 13; continue _fun0007 }
 9:
                var1 = undefined;
                return var1;
 13:
                var1 = _closure1_slot10;
                var1 = var1[var2];
                return var1;
            }
        };
        var5['value'] = var6;
        var1[8] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var4.bind(var1)(var8);
    var4 = 'ApplicationDirectoryApplicationsStore';
    var8['displayName'] = var4;
    var4 = 7;
    var4 = var6[var4];
    var14 = var7.bind(var1)(var4);
    var4 = {};
    var9 = function handleFetchAppDirectoryApplication(arg1) {
        var1 = arg1;
        var4 = var1.applicationId;
        var2 = {};
        var5 = _closure1_slot8;
        var6 = var2;
        var3 = copyDataProperties(var6, var5);
        var3 = _closure1_slot6;
        var3 = var3.FETCHING;
        var2[var4] = var3;
        _closure1_slot8 = var2;
        var1 = undefined;
        return var1;
    };
    var4['APPLICATION_DIRECTORY_FETCH_APPLICATION'] = var9;
    var9 = function handleFetchAppDirectoryAppSuccess(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var1 = arg1;
            var3 = var1.application;
            var1 = {};
            var7 = _closure1_slot7;
            var8 = var1;
            var4 = copyDataProperties(var8, var7);
            var4 = var3.id;
            var1[var4] = var3;
            _closure1_slot7 = var1;
            var1 = {};
            var7 = _closure1_slot8;
            var8 = var1;
            var4 = copyDataProperties(var8, var7);
            var5 = var3.id;
            var4 = _closure1_slot6;
            var4 = var4.FETCHED;
            var1[var5] = var4;
            _closure1_slot8 = var1;
            var1 = global;
            var5 = var1.Date;
            var4 = var5.now;
            var6 = var4.bind(var5)();
            var4 = {};
            var7 = _closure1_slot10;
            var8 = var4;
            var5 = copyDataProperties(var8, var7);
            var5 = var3.id;
            var4[var5] = var6;
            _closure1_slot10 = var4;
            var6 = _closure1_slot9;
            var5 = var6.has;
            var4 = var3.id;
            var4 = var5.bind(var6)(var4);
            if(!var4) { _fun0008_ip = 194; continue _fun0008 }
 141:
            var5 = _closure1_slot9;
            var4 = var5.delete;
            var3 = var3.id;
            var3 = var4.bind(var5)(var3);
            var4 = var1.Set;
            var8 = _closure1_slot9;
            var3 = var4.prototype;
            var3 = Object.create(var3, {constructor: {value: var4}});
            var9 = var3;
            var1 = new var9[var4](var8, var7);
            var1 = var1 instanceof Object ? var1 : var3;
            _closure1_slot9 = var1;
 194:
            var1 = undefined;
            return var1;
        }
    };
    var4['APPLICATION_DIRECTORY_FETCH_APPLICATION_SUCCESS'] = var9;
    var5 = function handleFetchAppDirectoryAppFailure(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var1 = arg1;
            var4 = var1.applicationId;
            var1 = var1.isInvalidApplication;
            var3 = {};
            var6 = _closure1_slot8;
            var7 = var3;
            var5 = copyDataProperties(var7, var6);
            var5 = _closure1_slot6;
            var5 = var5.ERROR;
            var3[var4] = var5;
            _closure1_slot8 = var3;
            if(!var1) { _fun0009_ip = 102; continue _fun0009 }
 52:
            var3 = _closure1_slot9;
            var1 = var3.add;
            var1 = var1.bind(var3)(var4);
            var1 = global;
            var4 = var1.Set;
            var7 = _closure1_slot9;
            var3 = var4.prototype;
            var3 = Object.create(var3, {constructor: {value: var4}});
            var8 = var3;
            var1 = new var8[var4](var7, var6);
            var1 = var1 instanceof Object ? var1 : var3;
            _closure1_slot9 = var1;
 102:
            var1 = undefined;
            return var1;
        }
    };
    var4['APPLICATION_DIRECTORY_FETCH_APPLICATION_FAILURE'] = var5;
    var5 = var8.prototype;
    var5 = Object.create(var5, {constructor: {value: var8}});
    var15 = var5;
    var13 = var4;
    var4 = new var15[var8](var14, var13, var12);
    var4 = var4 instanceof Object ? var4 : var5;
    var5 = 8;
    var6 = var6[var5];
    var5 = native2;
    var7 = var5.bind(var1)(var6);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/global_discovery_apps/stores/ApplicationDirectoryApplicationsStore.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['FetchState'] = var2;
    return var1;
})();