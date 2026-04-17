// app/records/ApplicationRecord.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var9;
    var1 = metroImportAll;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var8;
    var1 = function _callSuper(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var6 = arg3;
            var2 = _closure1_slot7;
            var3 = undefined;
            var1 = arg2;
            var9 = var2.bind(var3)(var1);
            var2 = _closure1_slot6;
            var1 = _closure1_slot14;
            var1 = var1.bind(var3)();
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var9.apply;
            var1 = var1.bind(var9)(var4, var6);
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var7 = global;
            var8 = var7.Reflect;
            var7 = var8.construct;
            if(var6) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var6 = new Array(0);
case 5:
            var5 = _closure1_slot7;
            var5 = var5.bind(var3)(var4);
            var5 = var5.constructor;
            var1 = var7.bind(var8)(var9, var6, var5);
case 4:
            var1 = var2.bind(var3)(var4, var1);
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = function _isNativeReflectConstruct() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
case 7: // try_start_0
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
case 8: // try_end0
            _fun0002_ip = 9; continue _fun0002;
case 10: // catch_target0
            CatchBlockStart(arg_register=1);
case 9:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot14 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var4 = function createExecutable(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = arg1;
            var1 = {};
            var3 = var2.os;
            var1['os'] = var3;
            var3 = var2.name;
            var1['name'] = var3;
            var3 = var2.arguments;
            var4 = null;
            if(!(var4 != var3)) { _fun0003_ip = 11; continue _fun0003 }
case 12:
            var3 = var2.arguments;
            var1['arguments'] = var3;
case 11:
            var3 = var2.is_launcher;
            if(!(var4 != var3)) { _fun0003_ip = 5; continue _fun0003 }
case 13:
            var2 = var2.is_launcher;
            var1['isLauncher'] = var2;
case 5:
            return var1;
        }
    };
    var _closure1_slot15 = var4;
    var1 = global;
    var10 = var1.Object;
    var6 = var10.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var10)(var3, var1, var2);
    var1 = 0;
    var2 = var8[var1];
    var1 = undefined;
    var2 = var9.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 1;
    var2 = var8[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 2;
    var2 = var8[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 3;
    var2 = var8[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 4;
    var2 = var8[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 5;
    var2 = var8[var2];
    var6 = var9.bind(var1)(var2);
    var2 = 6;
    var2 = var8[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var11 = 7;
    var2 = var8[var11];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot10 = var2;
    var2 = 8;
    var2 = var8[var2];
    var2 = var7.bind(var1)(var2);
    var10 = var2.END_GAME_APPLICATION_ID;
    var9 = var2.POKER_NIGHT_APPLICATION_ID;
    var2 = 9;
    var2 = var8[var2];
    var2 = var7.bind(var1)(var2);
    var2 = var2.ApplicationTypes;
    var _closure1_slot11 = var2;
    var2 = {};
    var2[8] = var11;
    var9 = 12;
    var2[9] = var9;
    var _closure1_slot12 = var2;
    var2 = function(arg1) {
        var5 = function BasicApplicationRecord(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var3 = arg1;
                var5 = this;
                var6 = _closure1_slot4;
                var4 = _closure2_slot0;
                var2 = undefined;
                var6 = var6.bind(var2)(var5, var4);
                var1 = _closure1_slot13;
                var1 = var1.bind(var2)(var5, var4);
                var2 = var3.id;
                var1['id'] = var2;
                var2 = var3.name;
                var1['name'] = var2;
                var2 = var3.icon;
                var1['icon'] = var2;
                var2 = var3.splash;
                var1['splash'] = var2;
                var2 = var3.primarySkuId;
                var1['primarySkuId'] = var2;
                var2 = var3.thirdPartySkus;
                var4 = null;
                if(!(var4 == var2)) { _fun0004_ip = 14; continue _fun0004 }
case 15:
                var2 = new Array(0);
case 14:
                var1['thirdPartySkus'] = var2;
                var2 = var3.description;
                var1['description'] = var2;
                var2 = var3.bot;
                var1['bot'] = var2;
                var2 = var3.coverImage;
                var1['coverImage'] = var2;
                var2 = var3.type;
                var1['type'] = var2;
                var2 = var3.is_monetized;
                if(!(var4 == var2)) { _fun0004_ip = 16; continue _fun0004 }
case 17:
                var2 = var3.isMonetized;
case 16:
                var1['isMonetized'] = var2;
                var2 = var3.is_verified;
                if(!(var4 == var2)) { _fun0004_ip = 18; continue _fun0004 }
case 19:
                var2 = var3.isVerified;
case 18:
                var1['isVerified'] = var2;
                var2 = var3.role_connections_verification_url;
                if(!(var4 == var2)) { _fun0004_ip = 20; continue _fun0004 }
case 21:
                var2 = var3.roleConnectionsVerificationUrl;
case 20:
                var1['roleConnectionsVerificationUrl'] = var2;
                var2 = var3.parent_id;
                if(!(var4 == var2)) { _fun0004_ip = 22; continue _fun0004 }
case 23:
                var2 = var3.parentId;
case 22:
                var1['parentId'] = var2;
                var2 = var3.connection_entrypoint_url;
                if(!(var4 == var2)) { _fun0004_ip = 24; continue _fun0004 }
case 25:
                var2 = var3._connectionEntrypointUrl;
case 24:
                var1['_connectionEntrypointUrl'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var5;
        var6 = _closure1_slot8;
        var4 = undefined;
        var3 = arg1;
        var3 = var6.bind(var4)(var5, var3);
        var3 = _closure1_slot5;
        var6 = {};
        var2 = 'connectionEntrypointUrl';
        var6['key'] = var2;
        var2 = function get() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var2 = this;
                var4 = _closure1_slot0;
                var3 = _closure1_slot3;
                var1 = 10;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var4 = var1.default;
                var5 = ['1443349464290168976', '1443350165678198935', '1443033465766281327'];
                var3 = var5.includes;
                var1 = var2.id;
                var1 = var3.bind(var5)(var1);
                if(!var1) { _fun0005_ip = 26; continue _fun0005 }
case 27:
                var3 = var4.getConfig;
                var1 = {};
                var5 = 'ApplicationRecord';
                var1['location'] = var5;
                var1 = var3.bind(var4)(var1);
                var3 = var1.enabled;
                var1 = 'https://aes.sgp.pvp.net/providers/discord/link/v1';
                if(var3) { _fun0005_ip = 28; continue _fun0005 }
case 26:
                var1 = var2._connectionEntrypointUrl;
case 28:
                return var1;
            }
        };
        var6['get'] = var2;
        var2 = new Array(5);
        var2[0] = var6;
        var6 = {};
        var7 = 'getIconURL';
        var6['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var5 = this;
                var2 = var5.icon;
                var1 = null;
                var2 = var1 != var2;
                if(!var2) { _fun0006_ip = 29; continue _fun0006 }
case 30:
                var4 = _closure1_slot1;
                var3 = _closure1_slot3;
                var2 = 11;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.getGameAssetURL;
                var2 = {};
                var6 = var5.id;
                var2['id'] = var6;
                var5 = var5.icon;
                var2['hash'] = var5;
                var5 = arg1;
                var2['size'] = var5;
                var5 = arg2;
                var2['format'] = var5;
                var1 = var3.bind(var4)(var2);
case 29:
                return var1;
            }
        };
        var6['value'] = var7;
        var2[1] = var6;
        var6 = {};
        var7 = 'getIconSource';
        var6['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var5 = this;
                var2 = var5.icon;
                var1 = null;
                var2 = var1 != var2;
                if(!var2) { _fun0007_ip = 29; continue _fun0007 }
case 30:
                var4 = _closure1_slot1;
                var3 = _closure1_slot3;
                var2 = 11;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.getGameAssetSource;
                var2 = {};
                var6 = var5.id;
                var2['id'] = var6;
                var5 = var5.icon;
                var2['hash'] = var5;
                var5 = arg1;
                var2['size'] = var5;
                var5 = arg2;
                var2['format'] = var5;
                var1 = var3.bind(var4)(var2);
case 29:
                return var1;
            }
        };
        var6['value'] = var7;
        var2[2] = var6;
        var6 = {};
        var7 = 'getSplashURL';
        var6['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var5 = this;
                var2 = var5.splash;
                var1 = null;
                var2 = var1 != var2;
                if(!var2) { _fun0008_ip = 31; continue _fun0008 }
case 32:
                var4 = _closure1_slot1;
                var3 = _closure1_slot3;
                var2 = 11;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.getGameAssetURL;
                var2 = {};
                var6 = var5.id;
                var2['id'] = var6;
                var5 = var5.splash;
                var2['hash'] = var5;
                var5 = arg1;
                var2['size'] = var5;
                var5 = true;
                var2['keepAspectRatio'] = var5;
                var5 = arg2;
                var2['format'] = var5;
                var1 = var3.bind(var4)(var2);
case 31:
                return var1;
            }
        };
        var6['value'] = var7;
        var2[3] = var6;
        var6 = {};
        var7 = 'getCoverImageURL';
        var6['key'] = var7;
        var7 = function value(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var5 = this;
                var2 = var5.coverImage;
                var1 = null;
                var2 = var1 != var2;
                if(!var2) { _fun0009_ip = 33; continue _fun0009 }
case 32:
                var4 = _closure1_slot1;
                var3 = _closure1_slot3;
                var2 = 11;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.getApplicationIconURL;
                var2 = {};
                var6 = var5.id;
                var2['id'] = var6;
                var5 = var5.coverImage;
                var2['icon'] = var5;
                var5 = arg1;
                var2['size'] = var5;
                var5 = true;
                var2['keepAspectRatio'] = var5;
                var1 = var3.bind(var4)(var2);
case 33:
                return var1;
            }
        };
        var6['value'] = var7;
        var2[4] = var6;
        var6 = {};
        var7 = 'createFromServer';
        var6['key'] = var7;
        var1 = function value(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var2 = arg1;
                var3 = _closure2_slot0;
                var1 = {};
                var9 = var1;
                var8 = var2;
                var4 = copyDataProperties(var9, var8);
                var5 = var2.cover_image;
                var4 = 'coverImage';
                var1[3] = var5;
                var5 = var2.primary_sku_id;
                var4 = 'primarySkuId';
                var1[3] = var5;
                var4 = var2.bot;
                var5 = null;
                var4 = var5 != var4;
                if(!var4) { _fun0010_ip = 34; continue _fun0010 }
case 6:
                var7 = _closure1_slot10;
                var9 = var2.bot;
                var6 = var7.prototype;
                var6 = Object.create(var6, {constructor: {value: var7}});
                var10 = var6;
                var4 = new var10[var7](var9, var8);
                var5 = var4 instanceof Object ? var4 : var6;
case 34:
                var4 = 'bot';
                var1[3] = var5;
                var5 = var2.third_party_skus;
                var4 = 'thirdPartySkus';
                var1[3] = var5;
                var5 = var2.role_connections_verification_url;
                var4 = 'roleConnectionsVerificationUrl';
                var1[3] = var5;
                var5 = var2.parent_id;
                var4 = 'parentId';
                var1[3] = var5;
                var4 = var2.connection_entrypoint_url;
                var2 = '_connectionEntrypointUrl';
                var1[1] = var4;
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var10 = var2;
                var9 = var1;
                var1 = new var10[var3](var9, var8);
                var1 = var1 instanceof Object ? var1 : var2;
                return var1;
            }
        };
        var6['value'] = var1;
        var1 = new Array(1);
        var1[0] = var6;
        var1 = var3.bind(var4)(var5, var2, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var6);
    var5 = function(arg1) {
        var5 = function ApplicationRecord(arg1) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var3 = arg1;
                var7 = this;
                var1 = _closure1_slot4;
                var6 = _closure2_slot0;
                var2 = undefined;
                var1 = var1.bind(var2)(var7, var6);
                var4 = _closure1_slot13;
                var1 = new Array(1);
                var1[0] = var3;
                var1 = var4.bind(var2)(var7, var6, var1);
                var7 = var3.overlay;
                var4 = null;
                var6 = var4 != var7;
                if(!var6) { _fun0011_ip = 35; continue _fun0011 }
case 36:
                var6 = var7;
case 35:
                var1['overlay'] = var6;
                var7 = var3.overlayWarn;
                var6 = var4 != var7;
                if(!var6) { _fun0011_ip = 29; continue _fun0011 }
case 37:
                var6 = var7;
case 29:
                var1['overlayWarn'] = var6;
                var7 = var3.overlayCompatibilityHook;
                var6 = var4 != var7;
                if(!var6) { _fun0011_ip = 38; continue _fun0011 }
case 39:
                var6 = var7;
case 38:
                var1['overlayCompatibilityHook'] = var6;
                var6 = var3.overlayMethods;
                if(!(var4 == var6)) { _fun0011_ip = 40; continue _fun0011 }
case 41:
                var8 = _closure1_slot0;
                var9 = _closure1_slot3;
                var7 = 12;
                var7 = var9[var7];
                var7 = var8.bind(var2)(var7);
                var7 = var7.ApplicationOverlayMethodFlags;
                var6 = var7.DEFAULT;
case 40:
                var1['overlayMethods'] = var6;
                var7 = var3.hook;
                var6 = var4 == var7;
                if(var6) { _fun0011_ip = 16; continue _fun0011 }
case 42:
                var6 = var7;
case 16:
                var1['hook'] = var6;
                var6 = var3.aliases;
                if(!(var4 == var6)) { _fun0011_ip = 43; continue _fun0011 }
case 44:
                var6 = new Array(0);
case 43:
                var1['aliases'] = var6;
                var6 = var3.publishers;
                if(!(var4 == var6)) { _fun0011_ip = 21; continue _fun0011 }
case 45:
                var6 = new Array(0);
case 21:
                var1['publishers'] = var6;
                var6 = var3.developers;
                if(!(var4 == var6)) { _fun0011_ip = 46; continue _fun0011 }
case 47:
                var6 = new Array(0);
case 46:
                var1['developers'] = var6;
                var6 = var3.storeListingSkuId;
                var1['storeListingSkuId'] = var6;
                var6 = var3.guildId;
                var1['guildId'] = var6;
                var6 = var3.guild;
                var1['guild'] = var6;
                var8 = var3.executables;
                if(!(var4 == var8)) { _fun0011_ip = 48; continue _fun0011 }
case 49:
                var8 = new Array(0);
case 48:
                var7 = var8.map;
                var6 = _closure1_slot15;
                var6 = var7.bind(var8)(var6);
                var1['executables'] = var6;
                var6 = var3.hashes;
                if(!(var4 == var6)) { _fun0011_ip = 50; continue _fun0011 }
case 51:
                var6 = new Array(0);
case 50:
                var1['hashes'] = var6;
                var6 = var3.eulaId;
                var1['eulaId'] = var6;
                var6 = var3.slug;
                var1['slug'] = var6;
                var6 = _closure1_slot2;
                var7 = _closure1_slot3;
                var5 = 13;
                var5 = var7[var5];
                var7 = var6.bind(var2)(var5);
                var6 = var7.deserialize;
                var8 = var3.flags;
                var9 = var4 != var8;
                var5 = 0;
                if(!var9) { _fun0011_ip = 52; continue _fun0011 }
case 53:
                var5 = var8;
case 52:
                var5 = var6.bind(var7)(var5);
                var1['flags'] = var5;
                var5 = var3.tags;
                if(!(var4 == var5)) { _fun0011_ip = 54; continue _fun0011 }
case 55:
                var5 = new Array(0);
case 54:
                var1['tags'] = var5;
                var5 = var3.maxParticipants;
                var1['maxParticipants'] = var5;
                var5 = var3.embedded_activity_config;
                if(!(var4 == var5)) { _fun0011_ip = 56; continue _fun0011 }
case 57:
                var5 = var3.embeddedActivityConfig;
case 56:
                var1['embeddedActivityConfig'] = var5;
                var5 = var3.team;
                var1['team'] = var5;
                var5 = var3.integrationTypesConfig;
                var1['integrationTypesConfig'] = var5;
                var5 = var3.storefront_available;
                var1['storefront_available'] = var5;
                var5 = var3.termsOfServiceUrl;
                var1['termsOfServiceUrl'] = var5;
                var5 = var3.privacyPolicyUrl;
                var1['privacyPolicyUrl'] = var5;
                var5 = var3.is_discoverable;
                if(!(var4 == var5)) { _fun0011_ip = 58; continue _fun0011 }
case 59:
                var5 = var3.isDiscoverable;
case 58:
                var1['isDiscoverable'] = var5;
                var5 = var3.custom_install_url;
                if(!(var4 == var5)) { _fun0011_ip = 60; continue _fun0011 }
case 61:
                var5 = var3.customInstallUrl;
case 60:
                var1['customInstallUrl'] = var5;
                var5 = var3.install_params;
                if(!(var4 == var5)) { _fun0011_ip = 62; continue _fun0011 }
case 63:
                var5 = var3.installParams;
case 62:
                var1['installParams'] = var5;
                var5 = var3.directory_entry;
                if(!(var4 == var5)) { _fun0011_ip = 64; continue _fun0011 }
case 65:
                var5 = var3.directoryEntry;
case 64:
                var1['directoryEntry'] = var5;
                var5 = var3.categories;
                var1['categories'] = var5;
                var7 = var3.linked_games;
                var5 = var4 == var7;
                var2 = undefined;
                if(var5) { _fun0011_ip = 66; continue _fun0011 }
case 67:
                var6 = var7.map;
                var5 = function(arg1) {
                    _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                        var2 = arg1;
                        var1 = {};
                        var7 = var1;
                        var6 = var2;
                        var3 = copyDataProperties(var7, var6);
                        var4 = var2.application;
                        var3 = null;
                        var4 = var3 != var4;
                        var3 = undefined;
                        if(!var4) { _fun0012_ip = 68; continue _fun0012 }
case 69:
                        var5 = _closure2_slot0;
                        var4 = var5.createFromServer;
                        var2 = var2.application;
                        var3 = var4.bind(var5)(var2);
case 68:
                        var2 = 'application';
                        var1[1] = var3;
                        return var1;
                    }
                };
                var2 = var6.bind(var7)(var5);
case 66:
                if(!(var4 == var2)) { _fun0011_ip = 70; continue _fun0011 }
case 71:
                var2 = var3.linkedGames;
case 70:
                var1['linkedGames'] = var2;
                var2 = var3.deepLinkUri;
                if(!(var4 == var2)) { _fun0011_ip = 72; continue _fun0011 }
case 73:
                var2 = var3.deeplink_uri;
case 72:
                var1['deepLinkUri'] = var2;
                var2 = var3.applicationAccountLinkBenefitConfig;
                if(!(var4 == var2)) { _fun0011_ip = 74; continue _fun0011 }
case 75:
                var2 = var3.application_account_link_benefit_config;
case 74:
                var1['applicationAccountLinkBenefitConfig'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var5;
        var3 = _closure1_slot8;
        var4 = undefined;
        var2 = arg1;
        var2 = var3.bind(var4)(var5, var2);
        var3 = _closure1_slot5;
        var1 = {};
        var2 = 'getCanonicalGameId';
        var1['key'] = var2;
        var2 = function value() {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var2 = this;
                var4 = var2.type;
                var1 = _closure1_slot11;
                var1 = var1.GAME;
                if(!(var4 !== var1)) { _fun0013_ip = 29; continue _fun0013 }
case 76:
                var8 = var2.linkedGames;
                var1 = null;
                var5 = var1 == var8;
                var4 = undefined;
                if(var5) { _fun0013_ip = 77; continue _fun0013 }
case 78:
                var6 = var8.find;
                var5 = function(arg1) {
                    _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                        var1 = arg1;
                        var1 = var1.application;
                        var2 = null;
                        var3 = var2 == var1;
                        var2 = undefined;
                        if(var3) { _fun0014_ip = 79; continue _fun0014 }
case 80:
                        var2 = var1.type;
case 79:
                        var1 = _closure1_slot11;
                        var1 = var1.GAME;
                        var1 = var2 === var1;
                        return var1;
                    }
                };
                var5 = var6.bind(var8)(var5);
                var6 = var1 == var5;
                var4 = undefined;
                if(var6) { _fun0013_ip = 77; continue _fun0013 }
case 81:
                var4 = var5.id;
case 77:
                var5 = var1 != var4;
                var1 = null;
                if(!var5) { _fun0013_ip = 82; continue _fun0013 }
case 83:
                var1 = var4;
case 82:
                _fun0013_ip = 41; continue _fun0013;
case 29:
                var5 = _closure1_slot1;
                var4 = _closure1_slot3;
                var3 = 14;
                var4 = var4[var3];
                var3 = undefined;
                var4 = var5.bind(var3)(var4);
                var3 = var4.cast;
                var2 = var2.id;
                var1 = var3.bind(var4)(var2);
case 41:
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(6);
        var2[0] = var1;
        var1 = {};
        var6 = 'mergeFromApplicationUpdate';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                var2 = arg1;
                var4 = this;
                var3 = _closure2_slot0;
                var1 = {};
                var6 = var2.id;
                var5 = null;
                if(!(var5 == var6)) { _fun0015_ip = 69; continue _fun0015 }
case 84:
                var6 = var4.id;
case 69:
                var1['id'] = var6;
                var6 = var2.name;
                if(!(var5 == var6)) { _fun0015_ip = 11; continue _fun0015 }
case 85:
                var6 = var4.name;
case 11:
                var1['name'] = var6;
                var6 = var2.icon;
                if(!(var5 == var6)) { _fun0015_ip = 6; continue _fun0015 }
case 36:
                var6 = var4.icon;
case 6:
                var1['icon'] = var6;
                var6 = var2.splash;
                if(!(var5 == var6)) { _fun0015_ip = 29; continue _fun0015 }
case 86:
                var6 = var4.splash;
case 29:
                var1['splash'] = var6;
                var6 = var2.overlay;
                if(!(var5 == var6)) { _fun0015_ip = 87; continue _fun0015 }
case 88:
                var6 = var4.overlay;
case 87:
                var1['overlay'] = var6;
                var6 = var2.overlayWarn;
                if(!(var5 == var6)) { _fun0015_ip = 89; continue _fun0015 }
case 90:
                var6 = var4.overlayWarn;
case 89:
                var1['overlayWarn'] = var6;
                var6 = var2.overlayCompatibilityHook;
                if(!(var5 == var6)) { _fun0015_ip = 91; continue _fun0015 }
case 92:
                var6 = var4.overlayCompatibilityHook;
case 91:
                var1['overlayCompatibilityHook'] = var6;
                var6 = var2.overlayMethods;
                if(!(var5 == var6)) { _fun0015_ip = 93; continue _fun0015 }
case 94:
                var6 = var4.overlayMethods;
case 93:
                var1['overlayMethods'] = var6;
                var6 = var2.hook;
                if(!(var5 == var6)) { _fun0015_ip = 95; continue _fun0015 }
case 96:
                var6 = var4.hook;
case 95:
                var1['hook'] = var6;
                var6 = var2.aliases;
                if(!(var5 == var6)) { _fun0015_ip = 97; continue _fun0015 }
case 98:
                var6 = var4.aliases;
case 97:
                var1['aliases'] = var6;
                var6 = var2.publishers;
                if(!(var5 == var6)) { _fun0015_ip = 99; continue _fun0015 }
case 100:
                var6 = var4.publishers;
case 99:
                var1['publishers'] = var6;
                var6 = var2.developers;
                if(!(var5 == var6)) { _fun0015_ip = 101; continue _fun0015 }
case 102:
                var6 = var4.developers;
case 101:
                var1['developers'] = var6;
                var6 = var2.primarySkuId;
                if(!(var5 == var6)) { _fun0015_ip = 103; continue _fun0015 }
case 104:
                var6 = var4.primarySkuId;
case 103:
                var1['primarySkuId'] = var6;
                var6 = var2.storeListingSkuId;
                if(!(var5 == var6)) { _fun0015_ip = 105; continue _fun0015 }
case 106:
                var6 = var4.storeListingSkuId;
case 105:
                var1['storeListingSkuId'] = var6;
                var6 = var2.thirdPartySkus;
                if(!(var5 == var6)) { _fun0015_ip = 107; continue _fun0015 }
case 108:
                var6 = var4.thirdPartySkus;
case 107:
                var1['thirdPartySkus'] = var6;
                var6 = var2.guildId;
                if(!(var5 == var6)) { _fun0015_ip = 109; continue _fun0015 }
case 110:
                var6 = var4.guildId;
case 109:
                var1['guildId'] = var6;
                var6 = var2.guild;
                if(!(var5 == var6)) { _fun0015_ip = 111; continue _fun0015 }
case 112:
                var6 = var4.guild;
case 111:
                var1['guild'] = var6;
                var6 = var2.executables;
                if(!(var5 == var6)) { _fun0015_ip = 113; continue _fun0015 }
case 114:
                var6 = var4.executables;
case 113:
                var1['executables'] = var6;
                var6 = var2.hashes;
                if(!(var5 == var6)) { _fun0015_ip = 115; continue _fun0015 }
case 116:
                var6 = var4.hashes;
case 115:
                var1['hashes'] = var6;
                var6 = var2.description;
                if(!(var5 == var6)) { _fun0015_ip = 117; continue _fun0015 }
case 118:
                var6 = var4.description;
case 117:
                var1['description'] = var6;
                var6 = var2.eulaId;
                if(!(var5 == var6)) { _fun0015_ip = 119; continue _fun0015 }
case 120:
                var6 = var4.eulaId;
case 119:
                var1['eulaId'] = var6;
                var6 = var2.slug;
                if(!(var5 == var6)) { _fun0015_ip = 121; continue _fun0015 }
case 122:
                var6 = var4.slug;
case 121:
                var1['slug'] = var6;
                var6 = var2.coverImage;
                if(!(var5 == var6)) { _fun0015_ip = 123; continue _fun0015 }
case 124:
                var6 = var4.coverImage;
case 123:
                var1['coverImage'] = var6;
                var6 = var2.bot;
                if(!(var5 == var6)) { _fun0015_ip = 125; continue _fun0015 }
case 126:
                var6 = var4.bot;
case 125:
                var1['bot'] = var6;
                var6 = var2.flags;
                if(!(var5 == var6)) { _fun0015_ip = 127; continue _fun0015 }
case 128:
                var6 = var4.flags;
case 127:
                var1['flags'] = var6;
                var6 = var2.maxParticipants;
                if(!(var5 == var6)) { _fun0015_ip = 129; continue _fun0015 }
case 130:
                var6 = var4.maxParticipants;
case 129:
                var1['maxParticipants'] = var6;
                var6 = var2.tags;
                if(!(var5 == var6)) { _fun0015_ip = 131; continue _fun0015 }
case 132:
                var6 = var4.tags;
case 131:
                var1['tags'] = var6;
                var6 = var2.embeddedActivityConfig;
                if(!(var5 == var6)) { _fun0015_ip = 133; continue _fun0015 }
case 134:
                var7 = var4.embeddedActivityConfig;
                var8 = var5 != var7;
                var7 = undefined;
                if(!var8) { _fun0015_ip = 135; continue _fun0015 }
case 136:
                var8 = {};
                var10 = var4.embeddedActivityConfig;
                var11 = var8;
                var9 = copyDataProperties(var11, var10);
                var7 = var8;
case 135:
                var6 = var7;
case 133:
                var1['embeddedActivityConfig'] = var6;
                var6 = var2.type;
                if(!(var5 == var6)) { _fun0015_ip = 137; continue _fun0015 }
case 138:
                var6 = var4.type;
case 137:
                var1['type'] = var6;
                var6 = var2.team;
                if(!(var5 == var6)) { _fun0015_ip = 139; continue _fun0015 }
case 140:
                var6 = var4.team;
case 139:
                var1['team'] = var6;
                var6 = var2.roleConnectionsVerificationUrl;
                if(!(var5 == var6)) { _fun0015_ip = 141; continue _fun0015 }
case 142:
                var6 = var4.roleConnectionsVerificationUrl;
case 141:
                var1['roleConnectionsVerificationUrl'] = var6;
                var6 = var2._connectionEntrypointUrl;
                if(!(var5 == var6)) { _fun0015_ip = 143; continue _fun0015 }
case 144:
                var6 = var4._connectionEntrypointUrl;
case 143:
                var1['_connectionEntrypointUrl'] = var6;
                var6 = var2.integrationTypesConfig;
                if(!(var5 == var6)) { _fun0015_ip = 74; continue _fun0015 }
case 75:
                var6 = var4.integrationTypesConfig;
case 74:
                var1['integrationTypesConfig'] = var6;
                var6 = var2.isMonetized;
                if(!(var5 == var6)) { _fun0015_ip = 145; continue _fun0015 }
case 146:
                var6 = var4.isMonetized;
case 145:
                var1['isMonetized'] = var6;
                var6 = var2.storefront_available;
                if(!(var5 == var6)) { _fun0015_ip = 147; continue _fun0015 }
case 148:
                var6 = var4.storefront_available;
case 147:
                var1['storefront_available'] = var6;
                var6 = var2.termsOfServiceUrl;
                if(!(var5 == var6)) { _fun0015_ip = 149; continue _fun0015 }
case 150:
                var6 = var4.termsOfServiceUrl;
case 149:
                var1['termsOfServiceUrl'] = var6;
                var6 = var2.privacyPolicyUrl;
                if(!(var5 == var6)) { _fun0015_ip = 151; continue _fun0015 }
case 152:
                var6 = var4.privacyPolicyUrl;
case 151:
                var1['privacyPolicyUrl'] = var6;
                var6 = var2.isVerified;
                if(!(var5 == var6)) { _fun0015_ip = 153; continue _fun0015 }
case 154:
                var6 = var4.isVerified;
case 153:
                var1['isVerified'] = var6;
                var6 = var2.customInstallUrl;
                if(!(var5 == var6)) { _fun0015_ip = 155; continue _fun0015 }
case 156:
                var6 = var4.customInstallUrl;
case 155:
                var1['customInstallUrl'] = var6;
                var6 = var2.installParams;
                if(!(var5 == var6)) { _fun0015_ip = 157; continue _fun0015 }
case 158:
                var6 = var4.installParams;
case 157:
                var1['installParams'] = var6;
                var6 = var2.isDiscoverable;
                if(!(var5 == var6)) { _fun0015_ip = 159; continue _fun0015 }
case 160:
                var6 = var4.isDiscoverable;
case 159:
                var1['isDiscoverable'] = var6;
                var6 = var2.directoryEntry;
                if(!(var5 == var6)) { _fun0015_ip = 161; continue _fun0015 }
case 162:
                var6 = var4.directoryEntry;
case 161:
                var1['directoryEntry'] = var6;
                var6 = var2.categories;
                if(!(var5 == var6)) { _fun0015_ip = 163; continue _fun0015 }
case 164:
                var6 = var4.categories;
case 163:
                var1['categories'] = var6;
                var6 = var2.linkedGames;
                if(!(var5 == var6)) { _fun0015_ip = 165; continue _fun0015 }
case 166:
                var6 = var4.linkedGames;
case 165:
                var1['linkedGames'] = var6;
                var6 = var2.deepLinkUri;
                if(!(var5 == var6)) { _fun0015_ip = 167; continue _fun0015 }
case 168:
                var6 = var4.deepLinkUri;
case 167:
                var1['deepLinkUri'] = var6;
                var2 = var2.applicationAccountLinkBenefitConfig;
                if(!(var5 == var2)) { _fun0015_ip = 169; continue _fun0015 }
case 170:
                var2 = var4.applicationAccountLinkBenefitConfig;
case 169:
                var1['applicationAccountLinkBenefitConfig'] = var2;
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var12 = var2;
                var11 = var1;
                var1 = new var12[var3](var11, var10);
                var1 = var1 instanceof Object ? var1 : var2;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'getMaxParticipants';
        var1['key'] = var6;
        var6 = function value() {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                var3 = this;
                var2 = var3.maxParticipants;
                var1 = null;
                if(!(var1 == var2)) { _fun0016_ip = 69; continue _fun0016 }
case 171:
                var4 = _closure1_slot12;
                var3 = var3.id;
                var2 = var4[var3];
case 69:
                var3 = var1 != var2;
                var1 = 0;
                if(!var3) { _fun0016_ip = 172; continue _fun0016 }
case 173:
                var1 = var2;
case 172:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'supportsIntegrationTypes';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                var5 = 0;
                var4 = copyRestArgs(var5);
                var1 = this;
                var3 = var1.integrationTypesConfig;
                var _closure3_slot0 = var3;
                var1 = null;
                var1 = var1 != var3;
                if(!var1) { _fun0017_ip = 174; continue _fun0017 }
case 175:
                var3 = var4.every;
                var2 = function(arg1) {
                    var2 = _closure3_slot0;
                    var1 = arg1;
                    var1 = var1 in var2;
                    return var1;
                };
                var1 = var3.bind(var4)(var2);
case 174:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[3] = var1;
        var1 = {};
        var6 = 'destinationSkuId';
        var1['key'] = var6;
        var6 = function get() {
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                var2 = this;
                var3 = var2.storeListingSkuId;
                var1 = null;
                if(!(var1 == var3)) { _fun0018_ip = 176; continue _fun0018 }
case 171:
                var1 = var2.primarySkuId;
                _fun0018_ip = 177; continue _fun0018;
case 176:
                var1 = var2.storeListingSkuId;
case 177:
                return var1;
            }
        };
        var1['get'] = var6;
        var2[4] = var1;
        var1 = {};
        var8 = 'supportsOutOfProcessOverlay';
        var1['key'] = var8;
        var6 = function get() {
            var3 = _closure2_slot0;
            var2 = var3.supportsOutOfProcessOverlay;
            var1 = this;
            var1 = var1.overlayMethods;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1['get'] = var6;
        var2[5] = var1;
        var6 = {};
        var1 = 'createFromServer';
        var6['key'] = var1;
        var1 = function value(arg1) {
            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                var2 = arg1;
                var3 = _closure2_slot0;
                var1 = {};
                var14 = var1;
                var13 = var2;
                var5 = copyDataProperties(var14, var13);
                var6 = var2.cover_image;
                var5 = 'coverImage';
                var1[4] = var6;
                var6 = var2.primary_sku_id;
                var5 = 'primarySkuId';
                var1[4] = var6;
                var5 = var2.bot;
                var6 = null;
                var5 = var6 != var5;
                var7 = null;
                if(!var5) { _fun0019_ip = 28; continue _fun0019 }
case 5:
                var9 = _closure1_slot10;
                var14 = var2.bot;
                var8 = var9.prototype;
                var8 = Object.create(var8, {constructor: {value: var9}});
                var15 = var8;
                var5 = new var15[var9](var14, var13);
                var7 = var5 instanceof Object ? var5 : var8;
case 28:
                var5 = 'bot';
                var1[4] = var7;
                var7 = var2.third_party_skus;
                var5 = 'thirdPartySkus';
                var1[4] = var7;
                var7 = var2.role_connections_verification_url;
                var5 = 'roleConnectionsVerificationUrl';
                var1[4] = var7;
                var7 = var2.overlay_warn;
                var5 = 'overlayWarn';
                var1[4] = var7;
                var7 = var2.overlay_compatibility_hook;
                var5 = 'overlayCompatibilityHook';
                var1[4] = var7;
                var7 = var2.overlay_methods;
                if(!(var6 == var7)) { _fun0019_ip = 178; continue _fun0019 }
case 179:
                var9 = _closure1_slot0;
                var8 = _closure1_slot3;
                var5 = 12;
                var8 = var8[var5];
                var5 = undefined;
                var5 = var9.bind(var5)(var8);
                var5 = var5.ApplicationOverlayMethodFlags;
                var7 = var5.DEFAULT;
case 178:
                var5 = 'overlayMethods';
                var1[4] = var7;
                var7 = var2.hook;
                var5 = 'hook';
                var1[4] = var7;
                var7 = var2.store_listing_sku_id;
                var5 = 'storeListingSkuId';
                var1[4] = var7;
                var7 = var2.guild_id;
                var5 = 'guildId';
                var1[4] = var7;
                var7 = var2.guild;
                var5 = 'guild';
                var1[4] = var7;
                var5 = var2.publishers;
                if(!(var6 == var5)) { _fun0019_ip = 180; continue _fun0019 }
case 181:
                var7 = new Array(0);
                _fun0019_ip = 182; continue _fun0019;
case 180:
                var9 = var2.publishers;
                var8 = var9.map;
                var5 = _closure1_slot9;
                var5 = var5.createFromServer;
                var7 = var8.bind(var9)(var5);
case 182:
                var5 = 'publishers';
                var1[4] = var7;
                var5 = var2.developers;
                if(!(var6 == var5)) { _fun0019_ip = 183; continue _fun0019 }
case 184:
                var7 = new Array(0);
                _fun0019_ip = 185; continue _fun0019;
case 183:
                var9 = var2.developers;
                var8 = var9.map;
                var5 = _closure1_slot9;
                var5 = var5.createFromServer;
                var7 = var8.bind(var9)(var5);
case 185:
                var5 = 'developers';
                var1[4] = var7;
                var7 = var2.eula_id;
                var5 = 'eulaId';
                var1[4] = var7;
                var7 = var2.slug;
                var5 = 'slug';
                var1[4] = var7;
                var8 = _closure1_slot2;
                var7 = _closure1_slot3;
                var5 = 13;
                var7 = var7[var5];
                var5 = undefined;
                var9 = var8.bind(var5)(var7);
                var8 = var9.deserialize;
                var10 = var2.flags_new;
                if(!(var6 == var10)) { _fun0019_ip = 186; continue _fun0019 }
case 187:
                var10 = var2.flags;
case 186:
                var11 = var6 != var10;
                var7 = 0;
                if(!var11) { _fun0019_ip = 188; continue _fun0019 }
case 189:
                var7 = var10;
case 188:
                var8 = var8.bind(var9)(var7);
                var7 = 'flags';
                var1[6] = var8;
                var8 = var2.max_participants;
                var7 = 'maxParticipants';
                var1[6] = var8;
                var8 = var2.tags;
                var7 = 'tags';
                var1[6] = var8;
                var8 = var2.embedded_activity_config;
                var7 = 'embeddedActivityConfig';
                var1[6] = var8;
                var7 = var2.integration_types_config;
                var7 = var6 != var7;
                var8 = undefined;
                if(!var7) { _fun0019_ip = 190; continue _fun0019 }
case 191:
                var7 = global;
                var10 = var7.Object;
                var9 = var10.fromEntries;
                var12 = var7.Object;
                var11 = var12.entries;
                var7 = var2.integration_types_config;
                var12 = var11.bind(var12)(var7);
                var11 = var12.map;
                var7 = function(arg1) {
                    _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                        var5 = arg1;
                        var1 = var5[Symbol.iterator];
                        var5 = var1().next;
                        var3 = var5().value;
                        var2 = var1;
                        var7 = undefined;
                        var4 = var2 === var7;
                        var2 = undefined;
                        if(var4) { _fun0020_ip = 192; continue _fun0020 }
case 79:
                        var2 = var3;
case 192:
                        var3 = undefined;
                        if(var4) { _fun0020_ip = 193; continue _fun0020 }
case 194:
                        var6 = var5().value;
                        var5 = var1;
                        var5 = var5 === var7;
                        var3 = undefined;
                        var4 = var5;
                        if(var5) { _fun0020_ip = 193; continue _fun0020 }
case 2:
                        var3 = var6;
                        var4 = var5;
case 193:
                        if(var4) { _fun0020_ip = 195; continue _fun0020 }
case 196:
                        var1.return();
case 195:
                        var1 = new Array(2);
                        var1[0] = var2;
                        var2 = {};
                        var4 = null;
                        if(!(var4 == var3)) { _fun0020_ip = 86; continue _fun0020 }
case 197:
                        var3 = {};
case 86:
                        var3 = var3.oauth2_install_params;
                        var2['oauth2InstallParams'] = var3;
                        var1[1] = var2;
                        return var1;
                    }
                };
                var7 = var11.bind(var12)(var7);
                var8 = var9.bind(var10)(var7);
case 190:
                var7 = 'integrationTypesConfig';
                var1[6] = var8;
                var8 = var2.terms_of_service_url;
                var7 = 'termsOfServiceUrl';
                var1[6] = var8;
                var8 = var2.privacy_policy_url;
                var7 = 'privacyPolicyUrl';
                var1[6] = var8;
                var8 = var2.is_discoverable;
                var7 = 'isDiscoverable';
                var1[6] = var8;
                var8 = var2.directory_entry;
                var7 = 'directoryEntry';
                var1[6] = var8;
                var8 = var2.categories;
                var7 = 'categories';
                var1[6] = var8;
                var7 = var2.linked_games;
                var6 = var6 == var7;
                var5 = undefined;
                if(var6) { _fun0019_ip = 145; continue _fun0019 }
case 198:
                var6 = var7.map;
                var4 = function(arg1) {
                    _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                        var2 = arg1;
                        var1 = {};
                        var7 = var1;
                        var6 = var2;
                        var3 = copyDataProperties(var7, var6);
                        var4 = var2.application;
                        var3 = null;
                        var4 = var3 != var4;
                        var3 = undefined;
                        if(!var4) { _fun0021_ip = 68; continue _fun0021 }
case 69:
                        var5 = _closure2_slot0;
                        var4 = var5.createFromServer;
                        var2 = var2.application;
                        var3 = var4.bind(var5)(var2);
case 68:
                        var2 = 'application';
                        var1[1] = var3;
                        return var1;
                    }
                };
                var5 = var6.bind(var7)(var4);
case 145:
                var4 = 'linkedGames';
                var1[3] = var5;
                var5 = var2.deeplink_uri;
                var4 = 'deepLinkUri';
                var1[3] = var5;
                var4 = var2.application_account_link_benefit_config;
                var2 = 'applicationAccountLinkBenefitConfig';
                var1[1] = var4;
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var15 = var2;
                var14 = var1;
                var1 = new var15[var3](var14, var13);
                var1 = var1 instanceof Object ? var1 : var2;
                return var1;
            }
        };
        var6['value'] = var1;
        var1 = new Array(2);
        var1[0] = var6;
        var6 = {};
        var6['key'] = var8;
        var7 = function value(arg1) {
            _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                var2 = arg1;
                var4 = _closure1_slot0;
                var3 = _closure1_slot3;
                var1 = 12;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var1 = var1.ApplicationOverlayMethodFlags;
                var3 = var1.OUT_OF_PROCESS;
                var1 = null;
                var1 = var1 != var2;
                if(!var1) { _fun0022_ip = 193; continue _fun0022 }
case 11:
                var2 = var2 & var3;
                var1 = var2 === var3;
case 193:
                return var1;
            }
        };
        var6['value'] = var7;
        var1[1] = var6;
        var1 = var3.bind(var4)(var5, var2, var1);
        return var1;
    };
    var5 = var5.bind(var1)(var2);
    var6 = 15;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'records/ApplicationRecord.tsx';
    var6 = var7.bind(var8)(var6);
    var3['default'] = var5;
    var3['createExecutable'] = var4;
    var3['BasicApplicationRecord'] = var2;
    return var1;
})();