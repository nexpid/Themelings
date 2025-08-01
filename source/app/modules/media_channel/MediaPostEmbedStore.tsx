// app/modules/media_channel/MediaPostEmbedStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
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
 72: // try_end0
            _fun0001_ip = 76; continue _fun0001;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot8 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot8 = var1;
    var1 = global;
    var8 = var1.Object;
    var4 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var8)(var3, var1, var2);
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
    var8 = 3;
    var2 = var6[var8];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = {};
    var2['NOT_FETCHED'] = var11;
    var4 = 'NOT_FETCHED';
    var2[var11] = var4;
    var2['FETCHING'] = var10;
    var4 = 'FETCHING';
    var2[var10] = var4;
    var2['FETCHED'] = var9;
    var4 = 'FETCHED';
    var2[var9] = var4;
    var2['FAILED'] = var8;
    var4 = 'FAILED';
    var2[var8] = var4;
    var _closure1_slot5 = var2;
    var4 = {};
    var _closure1_slot6 = var4;
    var4 = {};
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var8 = var4.Store;
    var4 = function(arg1) {
        var4 = function MediaPostEmbedStore() {
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
                var1 = _closure1_slot8;
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
        var1 = 'getMediaPostEmbed';
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
                var1 = _closure1_slot6;
                var1 = var1[var2];
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'getEmbedFetchState';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var3 = _closure1_slot7;
                var1 = arg1;
                var1 = var3[var1];
                var3 = null;
                if(!(var3 == var1)) { _fun0004_ip = 30; continue _fun0004 }
 20:
                var2 = _closure1_slot5;
                var1 = var2.NOT_FETCHED;
 30:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getMediaPostEmbeds';
        var5['key'] = var7;
        var6 = function value() {
            var1 = _closure1_slot6;
            return var1;
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var4.bind(var1)(var8);
    var4 = 'MediaPostEmbedStore';
    var8['displayName'] = var4;
    var4 = 6;
    var4 = var6[var4];
    var14 = var7.bind(var1)(var4);
    var4 = {};
    var9 = function handleConnectionOpen() {
        var1 = {};
        _closure1_slot6 = var1;
        var1 = {};
        _closure1_slot7 = var1;
        var1 = undefined;
        return var1;
    };
    var4['CONNECTION_OPEN'] = var9;
    var9 = function handleFetchMediaPostEmbed(arg1) {
        var1 = arg1;
        var3 = var1.threadId;
        var2 = _closure1_slot7;
        var1 = _closure1_slot5;
        var1 = var1.FETCHING;
        var2[var3] = var1;
        var1 = undefined;
        return var1;
    };
    var4['MEDIA_POST_EMBED_FETCH'] = var9;
    var9 = function handleFetchMediaPostEmbedSuccess(arg1) {
        var1 = arg1;
        var3 = var1.threadId;
        var4 = var1.mediaPostEmbed;
        var2 = {};
        var6 = _closure1_slot6;
        var7 = var2;
        var5 = copyDataProperties(var7, var6);
        var2[var3] = var4;
        _closure1_slot6 = var2;
        var2 = _closure1_slot7;
        var1 = _closure1_slot5;
        var1 = var1.FETCHED;
        var2[var3] = var1;
        var1 = undefined;
        return var1;
    };
    var4['MEDIA_POST_EMBED_FETCH_SUCCESS'] = var9;
    var9 = function handleFetchMediaPostFailure(arg1) {
        var1 = arg1;
        var3 = var1.threadId;
        var2 = _closure1_slot7;
        var1 = _closure1_slot5;
        var1 = var1.FAILED;
        var2[var3] = var1;
        var1 = undefined;
        return var1;
    };
    var4['MEDIA_POST_EMBED_FETCH_FAILURE'] = var9;
    var5 = function handleLogout(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = arg1;
            var1 = var1.isSwitchingAccount;
            if(var1) { _fun0005_ip = 27; continue _fun0005 }
 12:
            var1 = {};
            _closure1_slot6 = var1;
            var1 = {};
            _closure1_slot7 = var1;
 27:
            var1 = undefined;
            return var1;
        }
    };
    var4['LOGOUT'] = var5;
    var5 = var8.prototype;
    var5 = Object.create(var5, {constructor: {value: var8}});
    var15 = var5;
    var13 = var4;
    var4 = new var15[var8](var14, var13, var12);
    var4 = var4 instanceof Object ? var4 : var5;
    var5 = 7;
    var6 = var6[var5];
    var5 = require;
    var7 = var5.bind(var1)(var6);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/media_channel/MediaPostEmbedStore.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['FetchState'] = var2;
    return var1;
})();