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
                var2 = var3.content_classification;
                if(!(var4 == var2)) { _fun0004_ip = 26; continue _fun0004 }
case 27:
                var2 = var3.contentClassification;
case 26:
                var1['contentClassification'] = var2;
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
                var5 = _closure1_slot0;
                var6 = _closure1_slot3;
                var1 = 10;
                var1 = var6[var1];
                var4 = undefined;
                var1 = var5.bind(var4)(var1);
                var3 = var1.getIsRiotSocialSDKMigrationEnabled;
                var1 = 11;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var5 = var1.getIsValorantSocialSDKEnabled;
                var7 = ['1443349464290168976', '1443350165678198935', '1443033465766281327'];
                var6 = var7.includes;
                var1 = var2.id;
                var1 = var6.bind(var7)(var1);
                if(!var1) { _fun0005_ip = 28; continue _fun0005 }
case 29:
                var6 = var2.id;
                var1 = '1443350165678198935';
                if(!(var1 === var6)) { _fun0005_ip = 30; continue _fun0005 }
case 31:
                var1 = {};
                var6 = 'ApplicationRecord';
                var1['location'] = var6;
                var1 = var5.bind(var4)(var1);
                if(!var1) { _fun0005_ip = 28; continue _fun0005 }
case 30:
                var1 = {};
                var5 = 'ApplicationRecord';
                var1['location'] = var5;
                var3 = var3.bind(var4)(var1);
                var1 = 'https://aes.sgp.pvp.net/providers/discord/link/v1';
                if(var3) { _fun0005_ip = 32; continue _fun0005 }
case 28:
                var1 = var2._connectionEntrypointUrl;
case 32:
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
                if(!var2) { _fun0006_ip = 33; continue _fun0006 }
case 34:
                var4 = _closure1_slot1;
                var3 = _closure1_slot3;
                var2 = 12;
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
case 33:
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
                if(!var2) { _fun0007_ip = 33; continue _fun0007 }
case 34:
                var4 = _closure1_slot1;
                var3 = _closure1_slot3;
                var2 = 12;
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
case 33:
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
                if(!var2) { _fun0008_ip = 35; continue _fun0008 }
case 36:
                var4 = _closure1_slot1;
                var3 = _closure1_slot3;
                var2 = 12;
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
case 35:
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
                if(!var2) { _fun0009_ip = 37; continue _fun0009 }
case 36:
                var4 = _closure1_slot1;
                var3 = _closure1_slot3;
                var2 = 12;
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
case 37:
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
                if(!var4) { _fun0010_ip = 38; continue _fun0010 }
case 6:
                var7 = _closure1_slot10;
                var9 = var2.bot;
                var6 = var7.prototype;
                var6 = Object.create(var6, {constructor: {value: var7}});
                var10 = var6;
                var4 = new var10[var7](var9, var8);
                var5 = var4 instanceof Object ? var4 : var6;
case 38:
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
                var5 = var2.connection_entrypoint_url;
                var4 = '_connectionEntrypointUrl';
                var1[3] = var5;
                var4 = var2.content_classification;
                var2 = 'contentClassification';
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
                if(!var6) { _fun0011_ip = 39; continue _fun0011 }
case 40:
                var6 = var7;
case 39:
                var1['overlay'] = var6;
                var7 = var3.overlayWarn;
                var6 = var4 != var7;
                if(!var6) { _fun0011_ip = 33; continue _fun0011 }
case 41:
                var6 = var7;
case 33:
                var1['overlayWarn'] = var6;
                var7 = var3.overlayCompatibilityHook;
                var6 = var4 != var7;
                if(!var6) { _fun0011_ip = 42; continue _fun0011 }
case 43:
                var6 = var7;
case 42:
                var1['overlayCompatibilityHook'] = var6;
                var6 = var3.overlayMethods;
                if(!(var4 == var6)) { _fun0011_ip = 44; continue _fun0011 }
case 45:
                var8 = _closure1_slot0;
                var9 = _closure1_slot3;
                var7 = 13;
                var7 = var9[var7];
                var7 = var8.bind(var2)(var7);
                var7 = var7.ApplicationOverlayMethodFlags;
                var6 = var7.DEFAULT;
case 44:
                var1['overlayMethods'] = var6;
                var7 = var3.hook;
                var6 = var4 == var7;
                if(var6) { _fun0011_ip = 16; continue _fun0011 }
case 46:
                var6 = var7;
case 16:
                var1['hook'] = var6;
                var6 = var3.aliases;
                if(!(var4 == var6)) { _fun0011_ip = 47; continue _fun0011 }
case 48:
                var6 = new Array(0);
case 47:
                var1['aliases'] = var6;
                var6 = var3.publishers;
                if(!(var4 == var6)) { _fun0011_ip = 21; continue _fun0011 }
case 49:
                var6 = new Array(0);
case 21:
                var1['publishers'] = var6;
                var6 = var3.developers;
                if(!(var4 == var6)) { _fun0011_ip = 50; continue _fun0011 }
case 51:
                var6 = new Array(0);
case 50:
                var1['developers'] = var6;
                var6 = var3.storeListingSkuId;
                var1['storeListingSkuId'] = var6;
                var6 = var3.guildId;
                var1['guildId'] = var6;
                var6 = var3.guild;
                var1['guild'] = var6;
                var8 = var3.executables;
                if(!(var4 == var8)) { _fun0011_ip = 52; continue _fun0011 }
case 53:
                var8 = new Array(0);
case 52:
                var7 = var8.map;
                var6 = _closure1_slot15;
                var6 = var7.bind(var8)(var6);
                var1['executables'] = var6;
                var6 = var3.hashes;
                if(!(var4 == var6)) { _fun0011_ip = 54; continue _fun0011 }
case 55:
                var6 = new Array(0);
case 54:
                var1['hashes'] = var6;
                var6 = var3.eulaId;
                var1['eulaId'] = var6;
                var6 = var3.slug;
                var1['slug'] = var6;
                var6 = _closure1_slot2;
                var7 = _closure1_slot3;
                var5 = 14;
                var5 = var7[var5];
                var7 = var6.bind(var2)(var5);
                var6 = var7.deserialize;
                var8 = var3.flags;
                var9 = var4 != var8;
                var5 = 0;
                if(!var9) { _fun0011_ip = 56; continue _fun0011 }
case 57:
                var5 = var8;
case 56:
                var5 = var6.bind(var7)(var5);
                var1['flags'] = var5;
                var5 = var3.tags;
                if(!(var4 == var5)) { _fun0011_ip = 58; continue _fun0011 }
case 59:
                var5 = new Array(0);
case 58:
                var1['tags'] = var5;
                var5 = var3.maxParticipants;
                var1['maxParticipants'] = var5;
                var5 = var3.embedded_activity_config;
                if(!(var4 == var5)) { _fun0011_ip = 60; continue _fun0011 }
case 61:
                var5 = var3.embeddedActivityConfig;
case 60:
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
                if(!(var4 == var5)) { _fun0011_ip = 62; continue _fun0011 }
case 63:
                var5 = var3.isDiscoverable;
case 62:
                var1['isDiscoverable'] = var5;
                var5 = var3.custom_install_url;
                if(!(var4 == var5)) { _fun0011_ip = 64; continue _fun0011 }
case 65:
                var5 = var3.customInstallUrl;
case 64:
                var1['customInstallUrl'] = var5;
                var5 = var3.install_params;
                if(!(var4 == var5)) { _fun0011_ip = 66; continue _fun0011 }
case 67:
                var5 = var3.installParams;
case 66:
                var1['installParams'] = var5;
                var5 = var3.directory_entry;
                if(!(var4 == var5)) { _fun0011_ip = 68; continue _fun0011 }
case 69:
                var5 = var3.directoryEntry;
case 68:
                var1['directoryEntry'] = var5;
                var5 = var3.categories;
                var1['categories'] = var5;
                var7 = var3.linked_games;
                var5 = var4 == var7;
                var2 = undefined;
                if(var5) { _fun0011_ip = 70; continue _fun0011 }
case 71:
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
                        if(!var4) { _fun0012_ip = 72; continue _fun0012 }
case 73:
                        var5 = _closure2_slot0;
                        var4 = var5.createFromServer;
                        var2 = var2.application;
                        var3 = var4.bind(var5)(var2);
case 72:
                        var2 = 'application';
                        var1[1] = var3;
                        return var1;
                    }
                };
                var2 = var6.bind(var7)(var5);
case 70:
                if(!(var4 == var2)) { _fun0011_ip = 74; continue _fun0011 }
case 75:
                var2 = var3.linkedGames;
case 74:
                var1['linkedGames'] = var2;
                var2 = var3.deepLinkUri;
                if(!(var4 == var2)) { _fun0011_ip = 76; continue _fun0011 }
case 77:
                var2 = var3.deeplink_uri;
case 76:
                var1['deepLinkUri'] = var2;
                var2 = var3.applicationAccountLinkBenefitConfig;
                if(!(var4 == var2)) { _fun0011_ip = 78; continue _fun0011 }
case 79:
                var2 = var3.application_account_link_benefit_config;
case 78:
                var1['applicationAccountLinkBenefitConfig'] = var2;
                var2 = var3.parentId;
                if(!(var4 == var2)) { _fun0011_ip = 80; continue _fun0011 }
case 81:
                var2 = var3.parent_id;
case 80:
                var1['parentId'] = var2;
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
                if(!(var4 !== var1)) { _fun0013_ip = 33; continue _fun0013 }
case 82:
                var8 = var2.linkedGames;
                var1 = null;
                var5 = var1 == var8;
                var4 = undefined;
                if(var5) { _fun0013_ip = 83; continue _fun0013 }
case 84:
                var6 = var8.find;
                var5 = function(arg1) {
                    _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                        var1 = arg1;
                        var1 = var1.application;
                        var2 = null;
                        var3 = var2 == var1;
                        var2 = undefined;
                        if(var3) { _fun0014_ip = 85; continue _fun0014 }
case 86:
                        var2 = var1.type;
case 85:
                        var1 = _closure1_slot11;
                        var1 = var1.GAME;
                        var1 = var2 === var1;
                        return var1;
                    }
                };
                var5 = var6.bind(var8)(var5);
                var6 = var1 == var5;
                var4 = undefined;
                if(var6) { _fun0013_ip = 83; continue _fun0013 }
case 87:
                var4 = var5.id;
case 83:
                var5 = var1 != var4;
                var1 = null;
                if(!var5) { _fun0013_ip = 88; continue _fun0013 }
case 89:
                var1 = var4;
case 88:
                _fun0013_ip = 45; continue _fun0013;
case 33:
                var5 = _closure1_slot1;
                var4 = _closure1_slot3;
                var3 = 15;
                var4 = var4[var3];
                var3 = undefined;
                var4 = var5.bind(var3)(var4);
                var3 = var4.cast;
                var2 = var2.id;
                var1 = var3.bind(var4)(var2);
case 45:
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
                if(!(var5 == var6)) { _fun0015_ip = 90; continue _fun0015 }
case 91:
                var6 = var4.id;
case 90:
                var1['id'] = var6;
                var6 = var2.name;
                if(!(var5 == var6)) { _fun0015_ip = 2; continue _fun0015 }
case 92:
                var6 = var4.name;
case 2:
                var1['name'] = var6;
                var6 = var2.icon;
                if(!(var5 == var6)) { _fun0015_ip = 93; continue _fun0015 }
case 94:
                var6 = var4.icon;
case 93:
                var1['icon'] = var6;
                var6 = var2.splash;
                if(!(var5 == var6)) { _fun0015_ip = 37; continue _fun0015 }
case 95:
                var6 = var4.splash;
case 37:
                var1['splash'] = var6;
                var6 = var2.overlay;
                if(!(var5 == var6)) { _fun0015_ip = 96; continue _fun0015 }
case 97:
                var6 = var4.overlay;
case 96:
                var1['overlay'] = var6;
                var6 = var2.overlayWarn;
                if(!(var5 == var6)) { _fun0015_ip = 98; continue _fun0015 }
case 45:
                var6 = var4.overlayWarn;
case 98:
                var1['overlayWarn'] = var6;
                var6 = var2.overlayCompatibilityHook;
                if(!(var5 == var6)) { _fun0015_ip = 99; continue _fun0015 }
case 100:
                var6 = var4.overlayCompatibilityHook;
case 99:
                var1['overlayCompatibilityHook'] = var6;
                var6 = var2.overlayMethods;
                if(!(var5 == var6)) { _fun0015_ip = 17; continue _fun0015 }
case 101:
                var6 = var4.overlayMethods;
case 17:
                var1['overlayMethods'] = var6;
                var6 = var2.hook;
                if(!(var5 == var6)) { _fun0015_ip = 102; continue _fun0015 }
case 103:
                var6 = var4.hook;
case 102:
                var1['hook'] = var6;
                var6 = var2.aliases;
                if(!(var5 == var6)) { _fun0015_ip = 49; continue _fun0015 }
case 104:
                var6 = var4.aliases;
case 49:
                var1['aliases'] = var6;
                var6 = var2.publishers;
                if(!(var5 == var6)) { _fun0015_ip = 105; continue _fun0015 }
case 106:
                var6 = var4.publishers;
case 105:
                var1['publishers'] = var6;
                var6 = var2.developers;
                if(!(var5 == var6)) { _fun0015_ip = 107; continue _fun0015 }
case 108:
                var6 = var4.developers;
case 107:
                var1['developers'] = var6;
                var6 = var2.primarySkuId;
                if(!(var5 == var6)) { _fun0015_ip = 109; continue _fun0015 }
case 110:
                var6 = var4.primarySkuId;
case 109:
                var1['primarySkuId'] = var6;
                var6 = var2.storeListingSkuId;
                if(!(var5 == var6)) { _fun0015_ip = 111; continue _fun0015 }
case 52:
                var6 = var4.storeListingSkuId;
case 111:
                var1['storeListingSkuId'] = var6;
                var6 = var2.thirdPartySkus;
                if(!(var5 == var6)) { _fun0015_ip = 112; continue _fun0015 }
case 113:
                var6 = var4.thirdPartySkus;
case 112:
                var1['thirdPartySkus'] = var6;
                var6 = var2.guildId;
                if(!(var5 == var6)) { _fun0015_ip = 114; continue _fun0015 }
case 115:
                var6 = var4.guildId;
case 114:
                var1['guildId'] = var6;
                var6 = var2.guild;
                if(!(var5 == var6)) { _fun0015_ip = 116; continue _fun0015 }
case 117:
                var6 = var4.guild;
case 116:
                var1['guild'] = var6;
                var6 = var2.executables;
                if(!(var5 == var6)) { _fun0015_ip = 118; continue _fun0015 }
case 119:
                var6 = var4.executables;
case 118:
                var1['executables'] = var6;
                var6 = var2.hashes;
                if(!(var5 == var6)) { _fun0015_ip = 120; continue _fun0015 }
case 121:
                var6 = var4.hashes;
case 120:
                var1['hashes'] = var6;
                var6 = var2.description;
                if(!(var5 == var6)) { _fun0015_ip = 122; continue _fun0015 }
case 123:
                var6 = var4.description;
case 122:
                var1['description'] = var6;
                var6 = var2.eulaId;
                if(!(var5 == var6)) { _fun0015_ip = 124; continue _fun0015 }
case 125:
                var6 = var4.eulaId;
case 124:
                var1['eulaId'] = var6;
                var6 = var2.slug;
                if(!(var5 == var6)) { _fun0015_ip = 126; continue _fun0015 }
case 127:
                var6 = var4.slug;
case 126:
                var1['slug'] = var6;
                var6 = var2.coverImage;
                if(!(var5 == var6)) { _fun0015_ip = 128; continue _fun0015 }
case 129:
                var6 = var4.coverImage;
case 128:
                var1['coverImage'] = var6;
                var6 = var2.bot;
                if(!(var5 == var6)) { _fun0015_ip = 130; continue _fun0015 }
case 131:
                var6 = var4.bot;
case 130:
                var1['bot'] = var6;
                var6 = var2.flags;
                if(!(var5 == var6)) { _fun0015_ip = 132; continue _fun0015 }
case 133:
                var6 = var4.flags;
case 132:
                var1['flags'] = var6;
                var6 = var2.maxParticipants;
                if(!(var5 == var6)) { _fun0015_ip = 134; continue _fun0015 }
case 135:
                var6 = var4.maxParticipants;
case 134:
                var1['maxParticipants'] = var6;
                var6 = var2.tags;
                if(!(var5 == var6)) { _fun0015_ip = 136; continue _fun0015 }
case 137:
                var6 = var4.tags;
case 136:
                var1['tags'] = var6;
                var6 = var2.embeddedActivityConfig;
                if(!(var5 == var6)) { _fun0015_ip = 138; continue _fun0015 }
case 139:
                var7 = var4.embeddedActivityConfig;
                var9 = var5 != var7;
                var7 = undefined;
                if(!var9) { _fun0015_ip = 140; continue _fun0015 }
case 141:
                var9 = {};
                var11 = var4.embeddedActivityConfig;
                var12 = var9;
                var10 = copyDataProperties(var12, var11);
                var7 = var9;
case 140:
                var6 = var7;
case 138:
                var1['embeddedActivityConfig'] = var6;
                var6 = var2.type;
                if(!(var5 == var6)) { _fun0015_ip = 142; continue _fun0015 }
case 143:
                var6 = var4.type;
case 142:
                var1['type'] = var6;
                var6 = var2.team;
                if(!(var5 == var6)) { _fun0015_ip = 144; continue _fun0015 }
case 145:
                var6 = var4.team;
case 144:
                var1['team'] = var6;
                var6 = var2.roleConnectionsVerificationUrl;
                if(!(var5 == var6)) { _fun0015_ip = 146; continue _fun0015 }
case 147:
                var6 = var4.roleConnectionsVerificationUrl;
case 146:
                var1['roleConnectionsVerificationUrl'] = var6;
                var6 = var2._connectionEntrypointUrl;
                if(!(var5 == var6)) { _fun0015_ip = 148; continue _fun0015 }
case 149:
                var6 = var4._connectionEntrypointUrl;
case 148:
                var1['_connectionEntrypointUrl'] = var6;
                var6 = var2.integrationTypesConfig;
                if(!(var5 == var6)) { _fun0015_ip = 150; continue _fun0015 }
case 151:
                var6 = var4.integrationTypesConfig;
case 150:
                var1['integrationTypesConfig'] = var6;
                var6 = var2.isMonetized;
                if(!(var5 == var6)) { _fun0015_ip = 152; continue _fun0015 }
case 153:
                var6 = var4.isMonetized;
case 152:
                var1['isMonetized'] = var6;
                var6 = var2.storefront_available;
                if(!(var5 == var6)) { _fun0015_ip = 154; continue _fun0015 }
case 155:
                var6 = var4.storefront_available;
case 154:
                var1['storefront_available'] = var6;
                var6 = var2.termsOfServiceUrl;
                if(!(var5 == var6)) { _fun0015_ip = 156; continue _fun0015 }
case 157:
                var6 = var4.termsOfServiceUrl;
case 156:
                var1['termsOfServiceUrl'] = var6;
                var6 = var2.privacyPolicyUrl;
                if(!(var5 == var6)) { _fun0015_ip = 158; continue _fun0015 }
case 159:
                var6 = var4.privacyPolicyUrl;
case 158:
                var1['privacyPolicyUrl'] = var6;
                var6 = var2.isVerified;
                if(!(var5 == var6)) { _fun0015_ip = 160; continue _fun0015 }
case 161:
                var6 = var4.isVerified;
case 160:
                var1['isVerified'] = var6;
                var6 = var2.customInstallUrl;
                if(!(var5 == var6)) { _fun0015_ip = 162; continue _fun0015 }
case 163:
                var6 = var4.customInstallUrl;
case 162:
                var1['customInstallUrl'] = var6;
                var6 = var2.installParams;
                if(!(var5 == var6)) { _fun0015_ip = 164; continue _fun0015 }
case 165:
                var6 = var4.installParams;
case 164:
                var1['installParams'] = var6;
                var6 = var2.isDiscoverable;
                if(!(var5 == var6)) { _fun0015_ip = 166; continue _fun0015 }
case 167:
                var6 = var4.isDiscoverable;
case 166:
                var1['isDiscoverable'] = var6;
                var6 = var2.directoryEntry;
                if(!(var5 == var6)) { _fun0015_ip = 168; continue _fun0015 }
case 169:
                var6 = var4.directoryEntry;
case 168:
                var1['directoryEntry'] = var6;
                var6 = var2.categories;
                if(!(var5 == var6)) { _fun0015_ip = 170; continue _fun0015 }
case 171:
                var6 = var4.categories;
case 170:
                var1['categories'] = var6;
                var10 = var2.linkedGames;
                var9 = var4.linkedGames;
                var _closure3_slot0 = var9;
                var6 = var9;
                if(!(var5 != var10)) { _fun0015_ip = 172; continue _fun0015 }
case 173:
                var7 = var10;
                if(!(var5 != var9)) { _fun0015_ip = 174; continue _fun0015 }
case 175:
                var9 = var10.map;
                var8 = function(arg1) {
                    _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                        var1 = arg1;
                        var _closure4_slot0 = var1;
                        var3 = var1.application;
                        var5 = null;
                        if(!(var5 == var3)) { _fun0016_ip = 176; continue _fun0016 }
case 177:
                        var4 = _closure3_slot0;
                        var3 = var4.find;
                        var2 = function(arg1) {
                            var1 = arg1;
                            var2 = var1.id;
                            var1 = _closure4_slot0;
                            var1 = var1.id;
                            var1 = var2 === var1;
                            return var1;
                        };
                        var4 = var3.bind(var4)(var2);
                        var2 = var5 == var4;
                        var3 = undefined;
                        if(var2) { _fun0016_ip = 178; continue _fun0016 }
case 2:
                        var3 = var4.application;
case 178:
                        var2 = var1;
                        if(!(var5 != var3)) { _fun0016_ip = 4; continue _fun0016 }
case 179:
                        var3 = {};
                        var7 = var3;
                        var6 = var1;
                        var5 = copyDataProperties(var7, var6);
                        var5 = var4.application;
                        var4 = 'application';
                        var3[3] = var5;
                        var2 = var3;
case 4:
                        return var2;
case 176:
                        return var1;
                    }
                };
                var7 = var9.bind(var10)(var8);
case 174:
                var6 = var7;
case 172:
                var1['linkedGames'] = var6;
                var6 = var2.deepLinkUri;
                if(!(var5 == var6)) { _fun0015_ip = 180; continue _fun0015 }
case 181:
                var6 = var4.deepLinkUri;
case 180:
                var1['deepLinkUri'] = var6;
                var6 = var2.applicationAccountLinkBenefitConfig;
                if(!(var5 == var6)) { _fun0015_ip = 182; continue _fun0015 }
case 183:
                var6 = var4.applicationAccountLinkBenefitConfig;
case 182:
                var1['applicationAccountLinkBenefitConfig'] = var6;
                var6 = var2.contentClassification;
                if(!(var5 == var6)) { _fun0015_ip = 184; continue _fun0015 }
case 185:
                var6 = var4.contentClassification;
case 184:
                var1['contentClassification'] = var6;
                var2 = var2.parentId;
                if(!(var5 == var2)) { _fun0015_ip = 186; continue _fun0015 }
case 187:
                var2 = var4.parentId;
case 186:
                var1['parentId'] = var2;
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var13 = var2;
                var12 = var1;
                var1 = new var13[var3](var12, var11);
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
            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                var3 = this;
                var2 = var3.maxParticipants;
                var1 = null;
                if(!(var1 == var2)) { _fun0017_ip = 73; continue _fun0017 }
case 188:
                var4 = _closure1_slot12;
                var3 = var3.id;
                var2 = var4[var3];
case 73:
                var3 = var1 != var2;
                var1 = 0;
                if(!var3) { _fun0017_ip = 189; continue _fun0017 }
case 190:
                var1 = var2;
case 189:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'supportsIntegrationTypes';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                var5 = 0;
                var4 = copyRestArgs(var5);
                var1 = this;
                var3 = var1.integrationTypesConfig;
                var _closure3_slot0 = var3;
                var1 = null;
                var1 = var1 != var3;
                if(!var1) { _fun0018_ip = 92; continue _fun0018 }
case 191:
                var3 = var4.every;
                var2 = function(arg1) {
                    var2 = _closure3_slot0;
                    var1 = arg1;
                    var1 = var1 in var2;
                    return var1;
                };
                var1 = var3.bind(var4)(var2);
case 92:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[3] = var1;
        var1 = {};
        var6 = 'destinationSkuId';
        var1['key'] = var6;
        var6 = function get() {
            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                var2 = this;
                var3 = var2.storeListingSkuId;
                var1 = null;
                if(!(var1 == var3)) { _fun0019_ip = 192; continue _fun0019 }
case 188:
                var1 = var2.primarySkuId;
                _fun0019_ip = 193; continue _fun0019;
case 192:
                var1 = var2.storeListingSkuId;
case 193:
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
            _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
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
                if(!var5) { _fun0020_ip = 97; continue _fun0020 }
case 5:
                var9 = _closure1_slot10;
                var14 = var2.bot;
                var8 = var9.prototype;
                var8 = Object.create(var8, {constructor: {value: var9}});
                var15 = var8;
                var5 = new var15[var9](var14, var13);
                var7 = var5 instanceof Object ? var5 : var8;
case 97:
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
                if(!(var6 == var7)) { _fun0020_ip = 194; continue _fun0020 }
case 195:
                var9 = _closure1_slot0;
                var8 = _closure1_slot3;
                var5 = 13;
                var8 = var8[var5];
                var5 = undefined;
                var5 = var9.bind(var5)(var8);
                var5 = var5.ApplicationOverlayMethodFlags;
                var7 = var5.DEFAULT;
case 194:
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
                if(!(var6 == var5)) { _fun0020_ip = 196; continue _fun0020 }
case 111:
                var7 = new Array(0);
                _fun0020_ip = 115; continue _fun0020;
case 196:
                var9 = var2.publishers;
                var8 = var9.map;
                var5 = _closure1_slot9;
                var5 = var5.createFromServer;
                var7 = var8.bind(var9)(var5);
case 115:
                var5 = 'publishers';
                var1[4] = var7;
                var5 = var2.developers;
                if(!(var6 == var5)) { _fun0020_ip = 197; continue _fun0020 }
case 198:
                var7 = new Array(0);
                _fun0020_ip = 199; continue _fun0020;
case 197:
                var9 = var2.developers;
                var8 = var9.map;
                var5 = _closure1_slot9;
                var5 = var5.createFromServer;
                var7 = var8.bind(var9)(var5);
case 199:
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
                var5 = 14;
                var7 = var7[var5];
                var5 = undefined;
                var9 = var8.bind(var5)(var7);
                var8 = var9.deserialize;
                var10 = var2.flags_new;
                if(!(var6 == var10)) { _fun0020_ip = 200; continue _fun0020 }
case 201:
                var10 = var2.flags;
case 200:
                var11 = var6 != var10;
                var7 = 0;
                if(!var11) { _fun0020_ip = 202; continue _fun0020 }
case 203:
                var7 = var10;
case 202:
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
                if(!var7) { _fun0020_ip = 204; continue _fun0020 }
case 205:
                var7 = global;
                var10 = var7.Object;
                var9 = var10.fromEntries;
                var12 = var7.Object;
                var11 = var12.entries;
                var7 = var2.integration_types_config;
                var12 = var11.bind(var12)(var7);
                var11 = var12.map;
                var7 = function(arg1) {
                    _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                        var5 = arg1;
                        var1 = var5[Symbol.iterator];
                        var5 = var1().next;
                        var3 = var5().value;
                        var2 = var1;
                        var7 = undefined;
                        var4 = var2 === var7;
                        var2 = undefined;
                        if(var4) { _fun0021_ip = 206; continue _fun0021 }
case 85:
                        var2 = var3;
case 206:
                        var3 = undefined;
                        if(var4) { _fun0021_ip = 207; continue _fun0021 }
case 208:
                        var6 = var5().value;
                        var5 = var1;
                        var5 = var5 === var7;
                        var3 = undefined;
                        var4 = var5;
                        if(var5) { _fun0021_ip = 207; continue _fun0021 }
case 2:
                        var3 = var6;
                        var4 = var5;
case 207:
                        if(var4) { _fun0021_ip = 179; continue _fun0021 }
case 209:
                        var1.return();
case 179:
                        var1 = new Array(2);
                        var1[0] = var2;
                        var2 = {};
                        var4 = null;
                        if(!(var4 == var3)) { _fun0021_ip = 210; continue _fun0021 }
case 211:
                        var3 = {};
case 210:
                        var3 = var3.oauth2_install_params;
                        var2['oauth2InstallParams'] = var3;
                        var1[1] = var2;
                        return var1;
                    }
                };
                var7 = var11.bind(var12)(var7);
                var8 = var9.bind(var10)(var7);
case 204:
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
                if(var6) { _fun0020_ip = 212; continue _fun0020 }
case 213:
                var6 = var7.map;
                var4 = function(arg1) {
                    _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
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
                        if(!var4) { _fun0022_ip = 72; continue _fun0022 }
case 73:
                        var5 = _closure2_slot0;
                        var4 = var5.createFromServer;
                        var2 = var2.application;
                        var3 = var4.bind(var5)(var2);
case 72:
                        var2 = 'application';
                        var1[1] = var3;
                        return var1;
                    }
                };
                var5 = var6.bind(var7)(var4);
case 212:
                var4 = 'linkedGames';
                var1[3] = var5;
                var5 = var2.deeplink_uri;
                var4 = 'deepLinkUri';
                var1[3] = var5;
                var5 = var2.application_account_link_benefit_config;
                var4 = 'applicationAccountLinkBenefitConfig';
                var1[3] = var5;
                var4 = var2.parent_id;
                var2 = 'parentId';
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
            _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                var2 = arg1;
                var4 = _closure1_slot0;
                var3 = _closure1_slot3;
                var1 = 13;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var1 = var1.ApplicationOverlayMethodFlags;
                var3 = var1.OUT_OF_PROCESS;
                var1 = null;
                var1 = var1 != var2;
                if(!var1) { _fun0023_ip = 207; continue _fun0023 }
case 11:
                var2 = var2 & var3;
                var1 = var2 === var3;
case 207:
                return var1;
            }
        };
        var6['value'] = var7;
        var1[1] = var6;
        var1 = var3.bind(var4)(var5, var2, var1);
        return var1;
    };
    var5 = var5.bind(var1)(var2);
    var6 = 16;
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