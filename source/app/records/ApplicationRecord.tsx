// app/records/ApplicationRecord.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var8;
    var1 = function _callSuper(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var6 = arg3;
            var2 = _closure1_slot6;
            var3 = undefined;
            var1 = arg2;
            var9 = var2.bind(var3)(var1);
            var2 = _closure1_slot5;
            var1 = _closure1_slot12;
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
            var5 = _closure1_slot6;
            var5 = var5.bind(var3)(var4);
            var5 = var5.constructor;
            var1 = var7.bind(var8)(var9, var6, var5);
case 4:
            var1 = var2.bind(var3)(var4, var1);
            return var1;
        }
    };
    var _closure1_slot11 = var1;
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
            _closure1_slot12 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot12 = var1;
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
    var _closure1_slot13 = var4;
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
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var8[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var8[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var8[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 4;
    var2 = var8[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 5;
    var2 = var8[var2];
    var6 = var9.bind(var1)(var2);
    var2 = 6;
    var2 = var8[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var11 = 7;
    var2 = var8[var11];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var2 = 8;
    var2 = var8[var2];
    var2 = var7.bind(var1)(var2);
    var10 = var2.END_GAME_APPLICATION_ID;
    var9 = var2.POKER_NIGHT_APPLICATION_ID;
    var2 = {};
    var2[var9] = var11;
    var9 = 12;
    var2[var10] = var9;
    var _closure1_slot10 = var2;
    var2 = function(arg1) {
        var5 = function BasicApplicationRecord(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var3 = arg1;
                var5 = this;
                var6 = _closure1_slot3;
                var4 = _closure2_slot0;
                var2 = undefined;
                var6 = var6.bind(var2)(var5, var4);
                var1 = _closure1_slot11;
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
                var2 = var3.connectionEntrypointUrl;
case 24:
                var1['connectionEntrypointUrl'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var5;
        var6 = _closure1_slot7;
        var4 = undefined;
        var3 = arg1;
        var3 = var6.bind(var4)(var5, var3);
        var3 = _closure1_slot4;
        var6 = {};
        var2 = 'getIconURL';
        var6['key'] = var2;
        var2 = function value(arg1, arg2) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var5 = this;
                var2 = var5.icon;
                var1 = null;
                var2 = var1 != var2;
                if(!var2) { _fun0005_ip = 26; continue _fun0005 }
case 27:
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 9;
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
case 26:
                return var1;
            }
        };
        var6['value'] = var2;
        var2 = new Array(4);
        var2[0] = var6;
        var6 = {};
        var7 = 'getIconSource';
        var6['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var5 = this;
                var2 = var5.icon;
                var1 = null;
                var2 = var1 != var2;
                if(!var2) { _fun0006_ip = 26; continue _fun0006 }
case 27:
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 9;
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
case 26:
                return var1;
            }
        };
        var6['value'] = var7;
        var2[1] = var6;
        var6 = {};
        var7 = 'getSplashURL';
        var6['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var5 = this;
                var2 = var5.splash;
                var1 = null;
                var2 = var1 != var2;
                if(!var2) { _fun0007_ip = 28; continue _fun0007 }
case 29:
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 9;
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
case 28:
                return var1;
            }
        };
        var6['value'] = var7;
        var2[2] = var6;
        var6 = {};
        var7 = 'getCoverImageURL';
        var6['key'] = var7;
        var7 = function value(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var5 = this;
                var2 = var5.coverImage;
                var1 = null;
                var2 = var1 != var2;
                if(!var2) { _fun0008_ip = 30; continue _fun0008 }
case 29:
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 9;
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
                var1 = var3.bind(var4)(var2);
case 30:
                return var1;
            }
        };
        var6['value'] = var7;
        var2[3] = var6;
        var6 = {};
        var7 = 'createFromServer';
        var6['key'] = var7;
        var1 = function value(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var2 = arg1;
                var3 = _closure2_slot0;
                var1 = {};
                var9 = var1;
                var8 = var2;
                var4 = copyDataProperties(var9, var8);
                var5 = var2.cover_image;
                var4 = 'coverImage';
                var1[var4] = var5;
                var5 = var2.primary_sku_id;
                var4 = 'primarySkuId';
                var1[var4] = var5;
                var4 = var2.bot;
                var5 = null;
                var4 = var5 != var4;
                if(!var4) { _fun0009_ip = 31; continue _fun0009 }
case 6:
                var7 = _closure1_slot9;
                var9 = var2.bot;
                var6 = var7.prototype;
                var6 = Object.create(var6, {constructor: {value: var7}});
                var10 = var6;
                var4 = new var10[var7](var9, var8);
                var5 = var4 instanceof Object ? var4 : var6;
case 31:
                var4 = 'bot';
                var1[var4] = var5;
                var5 = var2.third_party_skus;
                var4 = 'thirdPartySkus';
                var1[var4] = var5;
                var5 = var2.role_connections_verification_url;
                var4 = 'roleConnectionsVerificationUrl';
                var1[var4] = var5;
                var5 = var2.parent_id;
                var4 = 'parentId';
                var1[var4] = var5;
                var4 = var2.connection_entrypoint_url;
                var2 = 'connectionEntrypointUrl';
                var1[var2] = var4;
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
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var3 = arg1;
                var7 = this;
                var1 = _closure1_slot3;
                var6 = _closure2_slot0;
                var2 = undefined;
                var1 = var1.bind(var2)(var7, var6);
                var4 = _closure1_slot11;
                var1 = new Array(1);
                var1[0] = var3;
                var1 = var4.bind(var2)(var7, var6, var1);
                var7 = var3.overlay;
                var4 = null;
                var6 = var4 != var7;
                if(!var6) { _fun0010_ip = 32; continue _fun0010 }
case 33:
                var6 = var7;
case 32:
                var1['overlay'] = var6;
                var7 = var3.overlayWarn;
                var6 = var4 != var7;
                if(!var6) { _fun0010_ip = 26; continue _fun0010 }
case 34:
                var6 = var7;
case 26:
                var1['overlayWarn'] = var6;
                var7 = var3.overlayCompatibilityHook;
                var6 = var4 != var7;
                if(!var6) { _fun0010_ip = 35; continue _fun0010 }
case 36:
                var6 = var7;
case 35:
                var1['overlayCompatibilityHook'] = var6;
                var6 = var3.overlayMethods;
                if(!(var4 == var6)) { _fun0010_ip = 37; continue _fun0010 }
case 38:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var7 = 10;
                var7 = var9[var7];
                var7 = var8.bind(var2)(var7);
                var7 = var7.ApplicationOverlayMethodFlags;
                var6 = var7.DEFAULT;
case 37:
                var1['overlayMethods'] = var6;
                var7 = var3.hook;
                var6 = var4 == var7;
                if(var6) { _fun0010_ip = 16; continue _fun0010 }
case 39:
                var6 = var7;
case 16:
                var1['hook'] = var6;
                var6 = var3.aliases;
                if(!(var4 == var6)) { _fun0010_ip = 40; continue _fun0010 }
case 41:
                var6 = new Array(0);
case 40:
                var1['aliases'] = var6;
                var6 = var3.publishers;
                if(!(var4 == var6)) { _fun0010_ip = 21; continue _fun0010 }
case 42:
                var6 = new Array(0);
case 21:
                var1['publishers'] = var6;
                var6 = var3.developers;
                if(!(var4 == var6)) { _fun0010_ip = 43; continue _fun0010 }
case 44:
                var6 = new Array(0);
case 43:
                var1['developers'] = var6;
                var6 = var3.storeListingSkuId;
                var1['storeListingSkuId'] = var6;
                var6 = var3.guildId;
                var1['guildId'] = var6;
                var6 = var3.guild;
                var1['guild'] = var6;
                var7 = var3.executables;
                if(!(var4 == var7)) { _fun0010_ip = 45; continue _fun0010 }
case 46:
                var7 = new Array(0);
case 45:
                var6 = var7.map;
                var5 = _closure1_slot13;
                var5 = var6.bind(var7)(var5);
                var1['executables'] = var5;
                var5 = var3.hashes;
                if(!(var4 == var5)) { _fun0010_ip = 47; continue _fun0010 }
case 48:
                var5 = new Array(0);
case 47:
                var1['hashes'] = var5;
                var5 = var3.eulaId;
                var1['eulaId'] = var5;
                var5 = var3.slug;
                var1['slug'] = var5;
                var6 = var3.flags;
                var7 = var4 != var6;
                var5 = 0;
                if(!var7) { _fun0010_ip = 49; continue _fun0010 }
case 50:
                var5 = var6;
case 49:
                var1['flags'] = var5;
                var5 = var3.tags;
                if(!(var4 == var5)) { _fun0010_ip = 51; continue _fun0010 }
case 52:
                var5 = new Array(0);
case 51:
                var1['tags'] = var5;
                var5 = var3.maxParticipants;
                var1['maxParticipants'] = var5;
                var5 = var3.embedded_activity_config;
                if(!(var4 == var5)) { _fun0010_ip = 53; continue _fun0010 }
case 54:
                var5 = var3.embeddedActivityConfig;
case 53:
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
                if(!(var4 == var5)) { _fun0010_ip = 55; continue _fun0010 }
case 56:
                var5 = var3.isDiscoverable;
case 55:
                var1['isDiscoverable'] = var5;
                var5 = var3.custom_install_url;
                if(!(var4 == var5)) { _fun0010_ip = 57; continue _fun0010 }
case 58:
                var5 = var3.customInstallUrl;
case 57:
                var1['customInstallUrl'] = var5;
                var5 = var3.install_params;
                if(!(var4 == var5)) { _fun0010_ip = 59; continue _fun0010 }
case 60:
                var5 = var3.installParams;
case 59:
                var1['installParams'] = var5;
                var5 = var3.directory_entry;
                if(!(var4 == var5)) { _fun0010_ip = 61; continue _fun0010 }
case 62:
                var5 = var3.directoryEntry;
case 61:
                var1['directoryEntry'] = var5;
                var5 = var3.categories;
                var1['categories'] = var5;
                var7 = var3.linked_games;
                var5 = var4 == var7;
                var2 = undefined;
                if(var5) { _fun0010_ip = 63; continue _fun0010 }
case 64:
                var6 = var7.map;
                var5 = function(arg1) {
                    _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
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
                        if(!var4) { _fun0011_ip = 65; continue _fun0011 }
case 66:
                        var5 = _closure2_slot0;
                        var4 = var5.createFromServer;
                        var2 = var2.application;
                        var3 = var4.bind(var5)(var2);
case 65:
                        var2 = 'application';
                        var1[var2] = var3;
                        return var1;
                    }
                };
                var2 = var6.bind(var7)(var5);
case 63:
                if(!(var4 == var2)) { _fun0010_ip = 67; continue _fun0010 }
case 68:
                var2 = var3.linkedGames;
case 67:
                var1['linkedGames'] = var2;
                var2 = var3.deepLinkUri;
                if(!(var4 == var2)) { _fun0010_ip = 69; continue _fun0010 }
case 70:
                var2 = var3.deeplink_uri;
case 69:
                var1['deepLinkUri'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var5;
        var3 = _closure1_slot7;
        var4 = undefined;
        var2 = arg1;
        var2 = var3.bind(var4)(var5, var2);
        var3 = _closure1_slot4;
        var1 = {};
        var2 = 'mergeFromApplicationUpdate';
        var1['key'] = var2;
        var2 = function value(arg1) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var2 = arg1;
                var4 = this;
                var3 = _closure2_slot0;
                var1 = {};
                var6 = var2.id;
                var5 = null;
                if(!(var5 == var6)) { _fun0012_ip = 66; continue _fun0012 }
case 71:
                var6 = var4.id;
case 66:
                var1['id'] = var6;
                var6 = var2.name;
                if(!(var5 == var6)) { _fun0012_ip = 11; continue _fun0012 }
case 72:
                var6 = var4.name;
case 11:
                var1['name'] = var6;
                var6 = var2.icon;
                if(!(var5 == var6)) { _fun0012_ip = 6; continue _fun0012 }
case 33:
                var6 = var4.icon;
case 6:
                var1['icon'] = var6;
                var6 = var2.splash;
                if(!(var5 == var6)) { _fun0012_ip = 26; continue _fun0012 }
case 73:
                var6 = var4.splash;
case 26:
                var1['splash'] = var6;
                var6 = var2.overlay;
                if(!(var5 == var6)) { _fun0012_ip = 74; continue _fun0012 }
case 75:
                var6 = var4.overlay;
case 74:
                var1['overlay'] = var6;
                var6 = var2.overlayWarn;
                if(!(var5 == var6)) { _fun0012_ip = 76; continue _fun0012 }
case 77:
                var6 = var4.overlayWarn;
case 76:
                var1['overlayWarn'] = var6;
                var6 = var2.overlayCompatibilityHook;
                if(!(var5 == var6)) { _fun0012_ip = 78; continue _fun0012 }
case 79:
                var6 = var4.overlayCompatibilityHook;
case 78:
                var1['overlayCompatibilityHook'] = var6;
                var6 = var2.overlayMethods;
                if(!(var5 == var6)) { _fun0012_ip = 80; continue _fun0012 }
case 81:
                var6 = var4.overlayMethods;
case 80:
                var1['overlayMethods'] = var6;
                var6 = var2.hook;
                if(!(var5 == var6)) { _fun0012_ip = 82; continue _fun0012 }
case 83:
                var6 = var4.hook;
case 82:
                var1['hook'] = var6;
                var6 = var2.aliases;
                if(!(var5 == var6)) { _fun0012_ip = 84; continue _fun0012 }
case 85:
                var6 = var4.aliases;
case 84:
                var1['aliases'] = var6;
                var6 = var2.publishers;
                if(!(var5 == var6)) { _fun0012_ip = 86; continue _fun0012 }
case 87:
                var6 = var4.publishers;
case 86:
                var1['publishers'] = var6;
                var6 = var2.developers;
                if(!(var5 == var6)) { _fun0012_ip = 88; continue _fun0012 }
case 89:
                var6 = var4.developers;
case 88:
                var1['developers'] = var6;
                var6 = var2.primarySkuId;
                if(!(var5 == var6)) { _fun0012_ip = 90; continue _fun0012 }
case 91:
                var6 = var4.primarySkuId;
case 90:
                var1['primarySkuId'] = var6;
                var6 = var2.storeListingSkuId;
                if(!(var5 == var6)) { _fun0012_ip = 92; continue _fun0012 }
case 93:
                var6 = var4.storeListingSkuId;
case 92:
                var1['storeListingSkuId'] = var6;
                var6 = var2.thirdPartySkus;
                if(!(var5 == var6)) { _fun0012_ip = 94; continue _fun0012 }
case 95:
                var6 = var4.thirdPartySkus;
case 94:
                var1['thirdPartySkus'] = var6;
                var6 = var2.guildId;
                if(!(var5 == var6)) { _fun0012_ip = 96; continue _fun0012 }
case 97:
                var6 = var4.guildId;
case 96:
                var1['guildId'] = var6;
                var6 = var2.guild;
                if(!(var5 == var6)) { _fun0012_ip = 98; continue _fun0012 }
case 99:
                var6 = var4.guild;
case 98:
                var1['guild'] = var6;
                var6 = var2.executables;
                if(!(var5 == var6)) { _fun0012_ip = 100; continue _fun0012 }
case 101:
                var6 = var4.executables;
case 100:
                var1['executables'] = var6;
                var6 = var2.hashes;
                if(!(var5 == var6)) { _fun0012_ip = 102; continue _fun0012 }
case 52:
                var6 = var4.hashes;
case 102:
                var1['hashes'] = var6;
                var6 = var2.description;
                if(!(var5 == var6)) { _fun0012_ip = 103; continue _fun0012 }
case 104:
                var6 = var4.description;
case 103:
                var1['description'] = var6;
                var6 = var2.eulaId;
                if(!(var5 == var6)) { _fun0012_ip = 105; continue _fun0012 }
case 106:
                var6 = var4.eulaId;
case 105:
                var1['eulaId'] = var6;
                var6 = var2.slug;
                if(!(var5 == var6)) { _fun0012_ip = 107; continue _fun0012 }
case 108:
                var6 = var4.slug;
case 107:
                var1['slug'] = var6;
                var6 = var2.coverImage;
                if(!(var5 == var6)) { _fun0012_ip = 109; continue _fun0012 }
case 110:
                var6 = var4.coverImage;
case 109:
                var1['coverImage'] = var6;
                var6 = var2.bot;
                if(!(var5 == var6)) { _fun0012_ip = 111; continue _fun0012 }
case 112:
                var6 = var4.bot;
case 111:
                var1['bot'] = var6;
                var6 = var2.flags;
                if(!(var5 == var6)) { _fun0012_ip = 113; continue _fun0012 }
case 114:
                var6 = var4.flags;
case 113:
                var1['flags'] = var6;
                var6 = var2.maxParticipants;
                if(!(var5 == var6)) { _fun0012_ip = 115; continue _fun0012 }
case 116:
                var6 = var4.maxParticipants;
case 115:
                var1['maxParticipants'] = var6;
                var6 = var2.tags;
                if(!(var5 == var6)) { _fun0012_ip = 117; continue _fun0012 }
case 118:
                var6 = var4.tags;
case 117:
                var1['tags'] = var6;
                var6 = var2.embeddedActivityConfig;
                if(!(var5 == var6)) { _fun0012_ip = 64; continue _fun0012 }
case 119:
                var7 = var4.embeddedActivityConfig;
                var8 = var5 != var7;
                var7 = undefined;
                if(!var8) { _fun0012_ip = 120; continue _fun0012 }
case 121:
                var8 = {};
                var10 = var4.embeddedActivityConfig;
                var11 = var8;
                var9 = copyDataProperties(var11, var10);
                var7 = var8;
case 120:
                var6 = var7;
case 64:
                var1['embeddedActivityConfig'] = var6;
                var6 = var2.type;
                if(!(var5 == var6)) { _fun0012_ip = 122; continue _fun0012 }
case 123:
                var6 = var4.type;
case 122:
                var1['type'] = var6;
                var6 = var2.team;
                if(!(var5 == var6)) { _fun0012_ip = 124; continue _fun0012 }
case 125:
                var6 = var4.team;
case 124:
                var1['team'] = var6;
                var6 = var2.roleConnectionsVerificationUrl;
                if(!(var5 == var6)) { _fun0012_ip = 126; continue _fun0012 }
case 127:
                var6 = var4.roleConnectionsVerificationUrl;
case 126:
                var1['roleConnectionsVerificationUrl'] = var6;
                var6 = var2.connectionEntrypointUrl;
                if(!(var5 == var6)) { _fun0012_ip = 128; continue _fun0012 }
case 129:
                var6 = var4.connectionEntrypointUrl;
case 128:
                var1['connectionEntrypointUrl'] = var6;
                var6 = var2.integrationTypesConfig;
                if(!(var5 == var6)) { _fun0012_ip = 130; continue _fun0012 }
case 131:
                var6 = var4.integrationTypesConfig;
case 130:
                var1['integrationTypesConfig'] = var6;
                var6 = var2.isMonetized;
                if(!(var5 == var6)) { _fun0012_ip = 132; continue _fun0012 }
case 133:
                var6 = var4.isMonetized;
case 132:
                var1['isMonetized'] = var6;
                var6 = var2.storefront_available;
                if(!(var5 == var6)) { _fun0012_ip = 134; continue _fun0012 }
case 135:
                var6 = var4.storefront_available;
case 134:
                var1['storefront_available'] = var6;
                var6 = var2.termsOfServiceUrl;
                if(!(var5 == var6)) { _fun0012_ip = 136; continue _fun0012 }
case 137:
                var6 = var4.termsOfServiceUrl;
case 136:
                var1['termsOfServiceUrl'] = var6;
                var6 = var2.privacyPolicyUrl;
                if(!(var5 == var6)) { _fun0012_ip = 138; continue _fun0012 }
case 139:
                var6 = var4.privacyPolicyUrl;
case 138:
                var1['privacyPolicyUrl'] = var6;
                var6 = var2.isVerified;
                if(!(var5 == var6)) { _fun0012_ip = 140; continue _fun0012 }
case 141:
                var6 = var4.isVerified;
case 140:
                var1['isVerified'] = var6;
                var6 = var2.customInstallUrl;
                if(!(var5 == var6)) { _fun0012_ip = 142; continue _fun0012 }
case 143:
                var6 = var4.customInstallUrl;
case 142:
                var1['customInstallUrl'] = var6;
                var6 = var2.installParams;
                if(!(var5 == var6)) { _fun0012_ip = 144; continue _fun0012 }
case 145:
                var6 = var4.installParams;
case 144:
                var1['installParams'] = var6;
                var6 = var2.isDiscoverable;
                if(!(var5 == var6)) { _fun0012_ip = 146; continue _fun0012 }
case 147:
                var6 = var4.isDiscoverable;
case 146:
                var1['isDiscoverable'] = var6;
                var6 = var2.directoryEntry;
                if(!(var5 == var6)) { _fun0012_ip = 148; continue _fun0012 }
case 149:
                var6 = var4.directoryEntry;
case 148:
                var1['directoryEntry'] = var6;
                var6 = var2.categories;
                if(!(var5 == var6)) { _fun0012_ip = 150; continue _fun0012 }
case 151:
                var6 = var4.categories;
case 150:
                var1['categories'] = var6;
                var6 = var2.linkedGames;
                if(!(var5 == var6)) { _fun0012_ip = 152; continue _fun0012 }
case 153:
                var6 = var4.linkedGames;
case 152:
                var1['linkedGames'] = var6;
                var2 = var2.deepLinkUri;
                if(!(var5 == var2)) { _fun0012_ip = 154; continue _fun0012 }
case 155:
                var2 = var4.deepLinkUri;
case 154:
                var1['deepLinkUri'] = var2;
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var12 = var2;
                var11 = var1;
                var1 = new var12[var3](var11, var10);
                var1 = var1 instanceof Object ? var1 : var2;
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(5);
        var2[0] = var1;
        var1 = {};
        var6 = 'getMaxParticipants';
        var1['key'] = var6;
        var6 = function value() {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var3 = this;
                var2 = var3.maxParticipants;
                var1 = null;
                if(!(var1 == var2)) { _fun0013_ip = 66; continue _fun0013 }
case 156:
                var4 = _closure1_slot10;
                var3 = var3.id;
                var2 = var4[var3];
case 66:
                var3 = var1 != var2;
                var1 = 0;
                if(!var3) { _fun0013_ip = 157; continue _fun0013 }
case 158:
                var1 = var2;
case 157:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'supportsIntegrationTypes';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                var5 = 0;
                var4 = copyRestArgs(var5);
                var1 = this;
                var3 = var1.integrationTypesConfig;
                var _closure3_slot0 = var3;
                var1 = null;
                var1 = var1 != var3;
                if(!var1) { _fun0014_ip = 159; continue _fun0014 }
case 160:
                var3 = var4.every;
                var2 = function(arg1) {
                    var2 = _closure3_slot0;
                    var1 = arg1;
                    var1 = var1 in var2;
                    return var1;
                };
                var1 = var3.bind(var4)(var2);
case 159:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'destinationSkuId';
        var1['key'] = var6;
        var6 = function get() {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                var2 = this;
                var3 = var2.storeListingSkuId;
                var1 = null;
                if(!(var1 == var3)) { _fun0015_ip = 161; continue _fun0015 }
case 156:
                var1 = var2.primarySkuId;
                _fun0015_ip = 162; continue _fun0015;
case 161:
                var1 = var2.storeListingSkuId;
case 162:
                return var1;
            }
        };
        var1['get'] = var6;
        var2[3] = var1;
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
        var2[4] = var1;
        var6 = {};
        var1 = 'createFromServer';
        var6['key'] = var1;
        var1 = function value(arg1) {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                var2 = arg1;
                var3 = _closure2_slot0;
                var1 = {};
                var14 = var1;
                var13 = var2;
                var5 = copyDataProperties(var14, var13);
                var6 = var2.cover_image;
                var5 = 'coverImage';
                var1[var5] = var6;
                var6 = var2.primary_sku_id;
                var5 = 'primarySkuId';
                var1[var5] = var6;
                var5 = var2.bot;
                var6 = null;
                var5 = var6 != var5;
                var7 = null;
                if(!var5) { _fun0016_ip = 163; continue _fun0016 }
case 5:
                var9 = _closure1_slot9;
                var14 = var2.bot;
                var8 = var9.prototype;
                var8 = Object.create(var8, {constructor: {value: var9}});
                var15 = var8;
                var5 = new var15[var9](var14, var13);
                var7 = var5 instanceof Object ? var5 : var8;
case 163:
                var5 = 'bot';
                var1[var5] = var7;
                var7 = var2.third_party_skus;
                var5 = 'thirdPartySkus';
                var1[var5] = var7;
                var7 = var2.role_connections_verification_url;
                var5 = 'roleConnectionsVerificationUrl';
                var1[var5] = var7;
                var7 = var2.overlay_warn;
                var5 = 'overlayWarn';
                var1[var5] = var7;
                var7 = var2.overlay_compatibility_hook;
                var5 = 'overlayCompatibilityHook';
                var1[var5] = var7;
                var7 = var2.overlay_methods;
                if(!(var6 == var7)) { _fun0016_ip = 164; continue _fun0016 }
case 165:
                var9 = _closure1_slot0;
                var8 = _closure1_slot2;
                var5 = 10;
                var8 = var8[var5];
                var5 = undefined;
                var5 = var9.bind(var5)(var8);
                var5 = var5.ApplicationOverlayMethodFlags;
                var7 = var5.DEFAULT;
case 164:
                var5 = 'overlayMethods';
                var1[var5] = var7;
                var7 = var2.hook;
                var5 = 'hook';
                var1[var5] = var7;
                var7 = var2.store_listing_sku_id;
                var5 = 'storeListingSkuId';
                var1[var5] = var7;
                var7 = var2.guild_id;
                var5 = 'guildId';
                var1[var5] = var7;
                var7 = var2.guild;
                var5 = 'guild';
                var1[var5] = var7;
                var5 = var2.publishers;
                if(!(var6 == var5)) { _fun0016_ip = 166; continue _fun0016 }
case 167:
                var7 = new Array(0);
                _fun0016_ip = 168; continue _fun0016;
case 166:
                var9 = var2.publishers;
                var8 = var9.map;
                var5 = _closure1_slot8;
                var5 = var5.createFromServer;
                var7 = var8.bind(var9)(var5);
case 168:
                var5 = 'publishers';
                var1[var5] = var7;
                var5 = var2.developers;
                if(!(var6 == var5)) { _fun0016_ip = 169; continue _fun0016 }
case 170:
                var7 = new Array(0);
                _fun0016_ip = 171; continue _fun0016;
case 169:
                var9 = var2.developers;
                var8 = var9.map;
                var5 = _closure1_slot8;
                var5 = var5.createFromServer;
                var7 = var8.bind(var9)(var5);
case 171:
                var5 = 'developers';
                var1[var5] = var7;
                var7 = var2.eula_id;
                var5 = 'eulaId';
                var1[var5] = var7;
                var7 = var2.slug;
                var5 = 'slug';
                var1[var5] = var7;
                var5 = var2.flags;
                var8 = var6 != var5;
                var7 = 0;
                if(!var8) { _fun0016_ip = 172; continue _fun0016 }
case 173:
                var7 = var5;
case 172:
                var5 = 'flags';
                var1[var5] = var7;
                var7 = var2.max_participants;
                var5 = 'maxParticipants';
                var1[var5] = var7;
                var7 = var2.tags;
                var5 = 'tags';
                var1[var5] = var7;
                var7 = var2.embedded_activity_config;
                var5 = 'embeddedActivityConfig';
                var1[var5] = var7;
                var5 = var2.integration_types_config;
                var7 = var6 != var5;
                var8 = undefined;
                if(!var7) { _fun0016_ip = 174; continue _fun0016 }
case 175:
                var7 = global;
                var10 = var7.Object;
                var9 = var10.fromEntries;
                var12 = var7.Object;
                var11 = var12.entries;
                var7 = var2.integration_types_config;
                var12 = var11.bind(var12)(var7);
                var11 = var12.map;
                var7 = function(arg1) {
                    _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                        var5 = arg1;
                        var1 = var5[Symbol.iterator];
                        var5 = var1().next;
                        var3 = var5().value;
                        var2 = var1;
                        var7 = undefined;
                        var4 = var2 === var7;
                        var2 = undefined;
                        if(var4) { _fun0017_ip = 176; continue _fun0017 }
case 177:
                        var2 = var3;
case 176:
                        var3 = undefined;
                        if(var4) { _fun0017_ip = 178; continue _fun0017 }
case 179:
                        var6 = var5().value;
                        var5 = var1;
                        var5 = var5 === var7;
                        var3 = undefined;
                        var4 = var5;
                        if(var5) { _fun0017_ip = 178; continue _fun0017 }
case 2:
                        var3 = var6;
                        var4 = var5;
case 178:
                        if(var4) { _fun0017_ip = 180; continue _fun0017 }
case 181:
                        var1.return();
case 180:
                        var1 = new Array(2);
                        var1[0] = var2;
                        var2 = {};
                        var4 = null;
                        if(!(var4 == var3)) { _fun0017_ip = 73; continue _fun0017 }
case 182:
                        var3 = {};
case 73:
                        var3 = var3.oauth2_install_params;
                        var2['oauth2InstallParams'] = var3;
                        var1[1] = var2;
                        return var1;
                    }
                };
                var7 = var11.bind(var12)(var7);
                var8 = var9.bind(var10)(var7);
case 174:
                var7 = 'integrationTypesConfig';
                var1[var7] = var8;
                var8 = var2.terms_of_service_url;
                var7 = 'termsOfServiceUrl';
                var1[var7] = var8;
                var8 = var2.privacy_policy_url;
                var7 = 'privacyPolicyUrl';
                var1[var7] = var8;
                var8 = var2.is_discoverable;
                var7 = 'isDiscoverable';
                var1[var7] = var8;
                var8 = var2.directory_entry;
                var7 = 'directoryEntry';
                var1[var7] = var8;
                var8 = var2.categories;
                var7 = 'categories';
                var1[var7] = var8;
                var7 = var2.linked_games;
                var6 = var6 == var7;
                var5 = undefined;
                if(var6) { _fun0016_ip = 183; continue _fun0016 }
case 184:
                var6 = var7.map;
                var4 = function(arg1) {
                    _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
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
                        if(!var4) { _fun0018_ip = 65; continue _fun0018 }
case 66:
                        var5 = _closure2_slot0;
                        var4 = var5.createFromServer;
                        var2 = var2.application;
                        var3 = var4.bind(var5)(var2);
case 65:
                        var2 = 'application';
                        var1[var2] = var3;
                        return var1;
                    }
                };
                var5 = var6.bind(var7)(var4);
case 183:
                var4 = 'linkedGames';
                var1[var4] = var5;
                var4 = var2.deeplink_uri;
                var2 = 'deepLinkUri';
                var1[var2] = var4;
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
            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                var2 = arg1;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 10;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var1 = var1.ApplicationOverlayMethodFlags;
                var3 = var1.OUT_OF_PROCESS;
                var1 = null;
                var1 = var1 != var2;
                if(!var1) { _fun0019_ip = 178; continue _fun0019 }
case 11:
                var2 = var2 & var3;
                var1 = var2 === var3;
case 178:
                return var1;
            }
        };
        var6['value'] = var7;
        var1[1] = var6;
        var1 = var3.bind(var4)(var5, var2, var1);
        return var1;
    };
    var5 = var5.bind(var1)(var2);
    var6 = 11;
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