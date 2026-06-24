// app/modules/stickers/StickersStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
            _closure1_slot15 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = function loadSavedGuildStickers() {
        var1 = undefined;
        var4 = _closure1_slot17;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot16 = var1;
    var1 = function _loadSavedGuildStickers() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot8;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var3 = undefined;
                    var _closure4_slot0 = var3;
                    var6 = _closure1_slot14;
                    var5 = _closure1_slot13;
                    var5 = var5.Unloaded;
                    if(!(var6 === var5)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var5 = 10;
                    var5 = var7[var5];
                    var6 = var6.bind(var3)(var5);
                    var5 = var6.database;
                    var6 = var5.bind(var6)();
                    _closure4_slot0 = var6;
                    var5 = null;
                    if(!(var5 != var6)) { _fun0002_ip = 8; continue _fun0002 }
case 10:
                    var6 = _closure1_slot13;
                    var6 = var6.Loaded;
                    _closure1_slot14 = var6;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var6 = 11;
                    var6 = var8[var6];
                    var8 = var7.bind(var3)(var6);
                    var7 = var8.tryLoadOrResetCacheGatewayAsync;
                    var6 = 'StickerStore.loadSavedGuildStickers';
                    var2 = function() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 12;
                        var2 = var2[var1];
                        var1 = undefined;
                        var5 = var3.bind(var1)(var2);
                        var4 = var5.timeAsync;
                        var3 = '💾';
                        var2 = 'loadSavedGuildStickers';
                        var1 = function() {
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 13;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.getAsync;
                            var1 = _closure4_slot0;
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        };
                        var1 = var4.bind(var5)(var3, var2, var1);
                        return var1;
                    };
                    var2 = var7.bind(var8)(var6, var2);
                    SaveGenerator(address=143);
case 11:
                    return var2;
case 12:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                    if(var6) { _fun0002_ip = 13; continue _fun0002 }
case 14:
                    if(!(var5 != var2)) { _fun0002_ip = 8; continue _fun0002 }
case 15:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 14;
                    var4 = var6[var4];
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var7 = 'CACHED_STICKERS_LOADED';
                    var4['type'] = var7;
                    var4['stickers'] = var2;
                    var4 = var5.bind(var6)(var4);
case 8:
                    return var3;
case 13:
                    return var2;
case 6:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot17 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot17 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var10 = 0;
    var2 = var6[var10];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var9 = 1;
    var2 = var6[var9];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var2 = 7;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot10 = var2;
    var2 = 8;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot11 = var2;
    var2 = 9;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot12 = var2;
    var2 = {};
    var2['Unloaded'] = var10;
    var8 = 'Unloaded';
    var2[var10] = var8;
    var2['Loaded'] = var9;
    var8 = 'Loaded';
    var2[var9] = var8;
    var _closure1_slot13 = var2;
    var2 = var2.Unloaded;
    var _closure1_slot14 = var2;
    var2 = 15;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function StickersStore() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot3;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot6;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot15;
                var1 = var1.bind(var3)();
                if(var1) { _fun0003_ip = 16; continue _fun0003 }
case 17:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0003_ip = 18; continue _fun0003;
case 16:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 18:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value() {
            var4 = this;
            var6 = var4.waitFor;
            var10 = _closure1_slot9;
            var5 = _closure1_slot11;
            var8 = _closure1_slot10;
            var1 = _closure1_slot12;
            var11 = var4;
            var9 = var5;
            var7 = var1;
            var2 = var11[var6](var10, var9, var8, var7, var6);
            var3 = var4.syncWith;
            var2 = new Array(2);
            var2[0] = var5;
            var2[1] = var1;
            var1 = function() {
                var1 = true;
                return var1;
            };
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(14);
        var1[0] = var5;
        var5 = {};
        var7 = 'isLoaded';
        var5['key'] = var7;
        var7 = function get() {
            var2 = _closure1_slot14;
            var1 = _closure1_slot13;
            var1 = var1.Unloaded;
            var1 = var2 !== var1;
            return var1;
        };
        var5['get'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'loadState';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot14;
            return var1;
        };
        var5['get'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getStickerMetadataArrays';
        var5['key'] = var7;
        var7 = function value() {
            var3 = _closure1_slot16;
            var1 = undefined;
            var1 = var3.bind(var1)();
            var3 = _closure1_slot11;
            var1 = var3.getStickerMetadataMap;
            var3 = var1.bind(var3)();
            var1 = new Array(2);
            var1[0] = var3;
            var3 = _closure1_slot12;
            var2 = var3.getStickerMetadataMap;
            var2 = var2.bind(var3)();
            var1[1] = var2;
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'hasLoadedStickerPacks';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot12;
            var1 = var1.hasLoadedStickerPacks;
            return var1;
        };
        var5['get'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'isFetchingStickerPacks';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot12;
            var1 = var1.isFetchingStickerPacks;
            return var1;
        };
        var5['get'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'getStickerById';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var4 = arg1;
                var3 = _closure1_slot16;
                var1 = undefined;
                var1 = var3.bind(var1)();
                var3 = _closure1_slot11;
                var1 = var3.getStickerById;
                var1 = var1.bind(var3)(var4);
                var3 = null;
                if(!(var3 == var1)) { _fun0004_ip = 19; continue _fun0004 }
case 20:
                var3 = _closure1_slot12;
                var2 = var3.getStickerById;
                var1 = var2.bind(var3)(var4);
case 19:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'getStickerPack';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot12;
            var2 = var3.getStickerPack;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'getPremiumPacks';
        var5['key'] = var7;
        var7 = function value() {
            var2 = _closure1_slot12;
            var1 = var2.getPremiumPacks;
            var1 = var1.bind(var2)();
            return var1;
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'isPremiumPack';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot12;
            var2 = var3.isPremiumPack;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'getRawStickersByGuild';
        var5['key'] = var7;
        var7 = function value() {
            var2 = _closure1_slot11;
            var1 = var2.getAllGuildStickers;
            var1 = var1.bind(var2)();
            return var1;
        };
        var5['value'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'getAllGuildStickers';
        var5['key'] = var7;
        var7 = function value() {
            var3 = _closure1_slot16;
            var2 = undefined;
            var2 = var3.bind(var2)();
            var2 = _closure1_slot11;
            var1 = var2.getAllGuildStickers;
            var1 = var1.bind(var2)();
            return var1;
        };
        var5['value'] = var7;
        var1[11] = var5;
        var5 = {};
        var7 = 'getAllPackStickers';
        var5['key'] = var7;
        var7 = function value() {
            var2 = _closure1_slot12;
            var1 = var2.getAllPackStickers;
            var1 = var1.bind(var2)();
            return var1;
        };
        var5['value'] = var7;
        var1[12] = var5;
        var5 = {};
        var7 = 'getStickersByGuildId';
        var5['key'] = var7;
        var6 = function value(arg1) {
            var3 = _closure1_slot16;
            var2 = undefined;
            var2 = var3.bind(var2)();
            var3 = _closure1_slot11;
            var2 = var3.getStickersByGuildId;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var6;
        var1[13] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'StickersStore';
    var8['displayName'] = var2;
    var2 = 14;
    var2 = var6[var2];
    var13 = var7.bind(var1)(var2);
    var2 = {};
    var9 = function handleBackgroundSync() {
        var1 = _closure1_slot13;
        var1 = var1.Unloaded;
        _closure1_slot14 = var1;
        var1 = undefined;
        return var1;
    };
    var2['BACKGROUND_SYNC'] = var9;
    var9 = function handleConnectionOpen(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var3 = var1.guilds;
            var1 = var1.unavailableGuilds;
            var2 = var1.length;
            var1 = 0;
            if(!(var1 === var2)) { _fun0005_ip = 21; continue _fun0005 }
case 22:
            var2 = var3.every;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.stickers;
                var2 = var1.op;
                var1 = 'full_sync';
                var1 = var1 === var2;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            if(var1) { _fun0005_ip = 23; continue _fun0005 }
case 21:
            var1 = _closure1_slot13;
            var2 = var1.Unloaded;
            _fun0005_ip = 24; continue _fun0005;
case 23:
            var1 = _closure1_slot13;
            var2 = var1.Loaded;
case 24:
            _closure1_slot14 = var2;
            var1 = undefined;
            return var1;
        }
    };
    var2['CONNECTION_OPEN'] = var9;
    var4 = function handleLogout() {
        var1 = _closure1_slot13;
        var1 = var1.Unloaded;
        _closure1_slot14 = var1;
        var1 = undefined;
        return var1;
    };
    var2['LOGOUT'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var14 = var4;
    var12 = var2;
    var2 = new var14[var8](var13, var12, var11);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 16;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/stickers/StickersStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();