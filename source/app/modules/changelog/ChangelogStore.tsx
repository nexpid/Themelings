// app/modules/changelog/ChangelogStore.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
            _closure1_slot19 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var1 = function handleUserSettingsProtoStoreChange() {
        var4 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 9;
        var2 = var2[var1];
        var1 = undefined;
        var2 = var4.bind(var1)(var2);
        var4 = var2.LastReceivedChangelogId;
        var2 = var4.getSetting;
        var2 = var2.bind(var4)();
        _closure1_slot16 = var2;
        return var1;
    };
    var _closure1_slot20 = var1;
    var2 = global;
    var10 = var2.Object;
    var9 = var10.defineProperty;
    var8 = {};
    var1 = true;
    var8['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var8);
    var1 = 0;
    var8 = var6[var1];
    var1 = undefined;
    var8 = var7.bind(var1)(var8);
    var _closure1_slot2 = var8;
    var8 = 1;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var8 = 2;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var8 = 3;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var8 = 4;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot6 = var8;
    var8 = 5;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot7 = var8;
    var8 = 6;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot8 = var8;
    var8 = 7;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var9 = var8.AssetType;
    var _closure1_slot9 = var9;
    var8 = var8.ChangelogLoadState;
    var _closure1_slot10 = var8;
    var8 = {};
    var _closure1_slot11 = var8;
    var8 = {};
    var _closure1_slot12 = var8;
    var8 = null;
    var _closure1_slot13 = var8;
    var _closure1_slot14 = var8;
    var _closure1_slot15 = var8;
    var _closure1_slot16 = var8;
    var _closure1_slot17 = var8;
    var2 = var2.Set;
    var8 = var2.prototype;
    var8 = Object.create(var8, {constructor: {value: var2}});
    var14 = var8;
    var2 = new var14[var2](var13);
    var2 = var2 instanceof Object ? var2 : var8;
    var _closure1_slot18 = var2;
    var2 = 10;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function ChangelogStore() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot2;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot5;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot4;
                var1 = _closure1_slot19;
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
                var6 = _closure1_slot5;
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
        var5 = _closure1_slot6;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot3;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var7 = this;
                var1 = undefined;
                var3 = undefined;
                var6 = var7.waitFor;
                var5 = _closure1_slot7;
                var4 = _closure1_slot8;
                var6 = var6.bind(var7)(var5, var4);
                var8 = var7.syncWith;
                var6 = new Array(1);
                var6[0] = var5;
                var5 = function() {
                    var1 = true;
                    return var1;
                };
                var5 = var8.bind(var7)(var6, var5);
                var6 = var7.syncWith;
                var5 = new Array(1);
                var5[0] = var4;
                var4 = _closure1_slot20;
                var4 = var6.bind(var7)(var5, var4);
                var6 = _closure1_slot0;
                var4 = _closure1_slot1;
                var5 = 8;
                var4 = var4[var5];
                var4 = var6.bind(var1)(var4);
                var7 = var4.Storage;
                var6 = var7.get;
                var4 = 'lastChangeLogDate';
                var7 = var6.bind(var7)(var4);
                var3 = var7;
                var6 = null;
                if(!(var6 != var7)) { _fun0003_ip = 205; continue _fun0003 }
 132: // try_start_0
                var6 = global;
                var7 = var6.Date;
                var10 = var3;
                var6 = var7.prototype;
                var6 = Object.create(var6, {constructor: {value: var7}});
                var11 = var6;
                var3 = new var11[var7](var10, var9);
                var3 = var3 instanceof Object ? var3 : var6;
                _closure1_slot17 = var3;
 167: // try_end0
                _fun0003_ip = 205; continue _fun0003;
 169: // catch_target0
                CatchBlockStart(arg_register=2);
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var5];
                var2 = var3.bind(var1)(var2);
                var3 = var2.Storage;
                var2 = var3.remove;
                var2 = var2.bind(var3)(var4);
 205:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(11);
        var1[0] = var5;
        var5 = {};
        var7 = 'getChangelog';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var2 = _closure1_slot11;
                var1 = arg1;
                var4 = var2[var1];
                var1 = null;
                var3 = var1 == var4;
                var2 = undefined;
                if(var3) { _fun0004_ip = 32; continue _fun0004 }
 25:
                var3 = arg2;
                var2 = var4[var3];
 32:
                var3 = var1 != var2;
                var1 = null;
                if(!var3) { _fun0004_ip = 44; continue _fun0004 }
 41:
                var1 = var2;
 44:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'latestChangelogId';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot13;
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getChangelogLoadStatus';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var3 = _closure1_slot12;
                var1 = arg1;
                var5 = var3[var1];
                var3 = null;
                var4 = var3 == var5;
                var1 = undefined;
                if(var4) { _fun0005_ip = 32; continue _fun0005 }
 25:
                var4 = arg2;
                var1 = var5[var4];
 32:
                if(!(var3 == var1)) { _fun0005_ip = 46; continue _fun0005 }
 36:
                var2 = _closure1_slot10;
                var1 = var2.NOT_LOADED;
 46:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'hasLoadedConfig';
        var5['key'] = var7;
        var7 = function value() {
            var2 = _closure1_slot15;
            var1 = null;
            var1 = var1 != var2;
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getConfig';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot15;
            return var1;
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'overrideId';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot14;
            return var1;
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'lastSeenChangelogId';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot16;
            return var1;
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'lastSeenChangelogDate';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot17;
            return var1;
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'getStateForDebugging';
        var5['key'] = var7;
        var7 = function value() {
            var1 = {};
            var3 = _closure1_slot15;
            var1['changelogConfig'] = var3;
            var3 = _closure1_slot12;
            var1['loadedChangelogs'] = var3;
            var3 = _closure1_slot16;
            var1['lastSeenChangelogId'] = var3;
            var2 = _closure1_slot17;
            var1['lastSeenChangelogDate'] = var2;
            return var1;
        };
        var5['value'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'isLocked';
        var5['key'] = var7;
        var6 = function value() {
            var1 = _closure1_slot18;
            var2 = var1.size;
            var1 = 0;
            var1 = var2 > var1;
            return var1;
        };
        var5['value'] = var6;
        var1[10] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'ChangelogStore';
    var8['displayName'] = var2;
    var2 = 11;
    var2 = var6[var2];
    var13 = var7.bind(var1)(var2);
    var2 = {};
    var9 = function handleChangeLogLock(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var1 = arg1;
            var3 = var1.key;
            var4 = _closure1_slot18;
            var2 = var4.has;
            var2 = var2.bind(var4)(var3);
            if(var2) { _fun0006_ip = 78; continue _fun0006 }
 28:
            var2 = global;
            var5 = var2.Set;
            var6 = _closure1_slot18;
            var4 = var5.prototype;
            var4 = Object.create(var4, {constructor: {value: var5}});
            var7 = var4;
            var2 = new var7[var5](var6, var5);
            var2 = var2 instanceof Object ? var2 : var4;
            _closure1_slot18 = var2;
            var1 = var2.add;
            var1 = var1.bind(var2)(var3);
            var1 = undefined;
            return var1;
 78:
            var1 = false;
            return var1;
        }
    };
    var2['CHANGE_LOG_LOCK'] = var9;
    var9 = function handleChangeLogUnlock(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var1 = arg1;
            var3 = var1.key;
            var4 = _closure1_slot18;
            var2 = var4.has;
            var2 = var2.bind(var4)(var3);
            if(var2) { _fun0007_ip = 32; continue _fun0007 }
 28:
            var2 = false;
            return var2;
 32:
            var2 = global;
            var5 = var2.Set;
            var6 = _closure1_slot18;
            var4 = var5.prototype;
            var4 = Object.create(var4, {constructor: {value: var5}});
            var7 = var4;
            var2 = new var7[var5](var6, var5);
            var2 = var2 instanceof Object ? var2 : var4;
            _closure1_slot18 = var2;
            var1 = var2.delete;
            var1 = var1.bind(var2)(var3);
            var1 = undefined;
            return var1;
        }
    };
    var2['CHANGE_LOG_UNLOCK'] = var9;
    var9 = function handleConfig(arg1) {
        var1 = arg1;
        var2 = var1.config;
        var3 = var1.latestChangelogId;
        _closure1_slot13 = var3;
        _closure1_slot15 = var2;
        var1 = undefined;
        return var1;
    };
    var2['CHANGE_LOG_SET_CONFIG'] = var9;
    var9 = function handleChangelogFetch(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var1 = arg1;
            var4 = var1.id;
            var2 = var1.changelog;
            var3 = _closure1_slot11;
            var3 = var3[var4];
            var5 = null;
            if(!(var5 == var3)) { _fun0008_ip = 41; continue _fun0008 }
 31:
            var6 = _closure1_slot11;
            var3 = {};
            var6[var4] = var3;
 41:
            var3 = _closure1_slot11;
            var7 = var3[var4];
            var6 = var2.locale;
            var3 = {};
            var3['id'] = var4;
            var8 = var2.date;
            var3['date'] = var8;
            var8 = var2.content;
            var3['body'] = var8;
            var8 = 1;
            var3['revision'] = var8;
            var8 = var2.locale;
            var3['locale'] = var8;
            var10 = var2.asset_type;
            var8 = _closure1_slot9;
            var8 = var8.YOUTUBE_VIDEO_ID;
            var9 = 'image';
            if(!(var10 === var8)) { _fun0008_ip = 130; continue _fun0008 }
 126:
            var9 = 'youtube_video_id';
 130:
            var8 = var2.asset;
            var3[var9] = var8;
            var7[var6] = var3;
            var3 = _closure1_slot12;
            var3 = var3[var4];
            if(!(var5 == var3)) { _fun0008_ip = 167; continue _fun0008 }
 157:
            var5 = _closure1_slot12;
            var3 = {};
            var5[var4] = var3;
 167:
            var3 = _closure1_slot12;
            var3 = var3[var4];
            var2 = var2.locale;
            var1 = _closure1_slot10;
            var1 = var1.LOADED_SUCCESS;
            var3[var2] = var1;
            var1 = undefined;
            return var1;
        }
    };
    var2['CHANGE_LOG_FETCH_SUCCESS'] = var9;
    var9 = function handleChangelogFetchFailed(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var1 = arg1;
            var4 = var1.id;
            var3 = var1.locale;
            var2 = _closure1_slot11;
            var2 = var2[var4];
            var5 = null;
            if(!(var5 != var2)) { _fun0009_ip = 47; continue _fun0009 }
 31:
            var2 = _closure1_slot11;
            var2 = var2[var4];
            var2 = var2[var3];
            if(!(var5 == var2)) { _fun0009_ip = 95; continue _fun0009 }
 47:
            var2 = _closure1_slot12;
            var2 = var2[var4];
            if(!(var5 == var2)) { _fun0009_ip = 69; continue _fun0009 }
 59:
            var5 = _closure1_slot12;
            var2 = {};
            var5[var4] = var2;
 69:
            var2 = _closure1_slot12;
            var2 = var2[var4];
            var1 = _closure1_slot10;
            var1 = var1.LOADED_FAILURE;
            var2[var3] = var1;
            var1 = undefined;
            return var1;
 95:
            var1 = false;
            return var1;
        }
    };
    var2['CHANGE_LOG_FETCH_FAILED'] = var9;
    var9 = function handleChangelogSetOverride(arg1) {
        var1 = arg1;
        var2 = var1.id;
        _closure1_slot14 = var2;
        var1 = undefined;
        return var1;
    };
    var2['CHANGE_LOG_SET_OVERRIDE'] = var9;
    var4 = function handleDismiss(arg1) {
        var1 = arg1;
        var5 = var1.changelogDate;
        var1 = global;
        var1 = var1.Date;
        var2 = var1.prototype;
        var2 = Object.create(var2, {constructor: {value: var1}});
        var8 = var2;
        var7 = var5;
        var1 = new var8[var1](var7, var6);
        var2 = var1 instanceof Object ? var1 : var2;
        _closure1_slot17 = var2;
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 8;
        var2 = var2[var1];
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        var4 = var2.Storage;
        var3 = var4.set;
        var2 = 'lastChangeLogDate';
        var2 = var3.bind(var4)(var2, var5);
        return var1;
    };
    var2['CHANGE_LOG_MARK_SEEN'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var14 = var4;
    var12 = var2;
    var2 = new var14[var8](var13, var12, var11);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/changelog/ChangelogStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();