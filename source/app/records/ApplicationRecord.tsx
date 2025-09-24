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
 0:
            var4 = arg1;
            var6 = arg3;
            var2 = _closure1_slot6;
            var3 = undefined;
            var1 = arg2;
            var9 = var2.bind(var3)(var1);
            var2 = _closure1_slot5;
            var1 = _closure1_slot12;
            var1 = var1.bind(var3)();
            if(var1) { _fun0001_ip = 51; continue _fun0001 }
 38:
            var1 = var9.apply;
            var1 = var1.bind(var9)(var4, var6);
            _fun0001_ip = 92; continue _fun0001;
 51:
            var7 = global;
            var8 = var7.Reflect;
            var7 = var8.construct;
            if(var6) { _fun0001_ip = 71; continue _fun0001 }
 67:
            var6 = new Array(0);
 71:
            var5 = _closure1_slot6;
            var5 = var5.bind(var3)(var4);
            var5 = var5.constructor;
            var1 = var7.bind(var8)(var9, var6, var5);
 92:
            var1 = var2.bind(var3)(var4, var1);
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var1 = function _isNativeReflectConstruct() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
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
            _fun0002_ip = 74; continue _fun0002;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
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
 0:
            var2 = arg1;
            var1 = {};
            var3 = var2.os;
            var1['os'] = var3;
            var3 = var2.name;
            var1['name'] = var3;
            var3 = var2.arguments;
            var4 = null;
            if(!(var4 != var3)) { _fun0003_ip = 49; continue _fun0003 }
 37:
            var3 = var2.arguments;
            var1['arguments'] = var3;
 49:
            var3 = var2.is_launcher;
            if(!(var4 != var3)) { _fun0003_ip = 71; continue _fun0003 }
 59:
            var2 = var2.is_launcher;
            var1['isLauncher'] = var2;
 71:
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
 0:
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
                if(!(var4 == var2)) { _fun0004_ip = 111; continue _fun0004 }
 107:
                var2 = new Array(0);
 111:
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
                if(!(var4 == var2)) { _fun0004_ip = 179; continue _fun0004 }
 173:
                var2 = var3.isMonetized;
 179:
                var1['isMonetized'] = var2;
                var2 = var3.is_verified;
                if(!(var4 == var2)) { _fun0004_ip = 203; continue _fun0004 }
 197:
                var2 = var3.isVerified;
 203:
                var1['isVerified'] = var2;
                var2 = var3.role_connections_verification_url;
                if(!(var4 == var2)) { _fun0004_ip = 225; continue _fun0004 }
 219:
                var2 = var3.roleConnectionsVerificationUrl;
 225:
                var1['roleConnectionsVerificationUrl'] = var2;
                var2 = var3.parent_id;
                if(!(var4 == var2)) { _fun0004_ip = 247; continue _fun0004 }
 241:
                var2 = var3.parentId;
 247:
                var1['parentId'] = var2;
                var2 = var3.connection_entrypoint_url;
                if(!(var4 == var2)) { _fun0004_ip = 269; continue _fun0004 }
 263:
                var2 = var3.connectionEntrypointUrl;
 269:
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
 0:
                var5 = this;
                var2 = var5.icon;
                var1 = null;
                var2 = var1 != var2;
                if(!var2) { _fun0005_ip = 87; continue _fun0005 }
 17:
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
 87:
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
 0:
                var5 = this;
                var2 = var5.icon;
                var1 = null;
                var2 = var1 != var2;
                if(!var2) { _fun0006_ip = 87; continue _fun0006 }
 17:
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
 87:
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
 0:
                var5 = this;
                var2 = var5.splash;
                var1 = null;
                var2 = var1 != var2;
                if(!var2) { _fun0007_ip = 96; continue _fun0007 }
 18:
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
 96:
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
 0:
                var5 = this;
                var2 = var5.coverImage;
                var1 = null;
                var2 = var1 != var2;
                if(!var2) { _fun0008_ip = 82; continue _fun0008 }
 18:
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
 82:
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
 0:
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
                if(!var4) { _fun0009_ip = 100; continue _fun0009 }
 67:
                var7 = _closure1_slot9;
                var9 = var2.bot;
                var6 = var7.prototype;
                var6 = Object.create(var6, {constructor: {value: var7}});
                var10 = var6;
                var4 = new var10[var7](var9, var8);
                var5 = var4 instanceof Object ? var4 : var6;
 100:
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
 0:
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
                if(!var6) { _fun0010_ip = 65; continue _fun0010 }
 62:
                var6 = var7;
 65:
                var1['overlay'] = var6;
                var7 = var3.overlayWarn;
                var6 = var4 != var7;
                if(!var6) { _fun0010_ip = 87; continue _fun0010 }
 84:
                var6 = var7;
 87:
                var1['overlayWarn'] = var6;
                var7 = var3.overlayCompatibilityHook;
                var6 = var4 != var7;
                if(!var6) { _fun0010_ip = 109; continue _fun0010 }
 106:
                var6 = var7;
 109:
                var1['overlayCompatibilityHook'] = var6;
                var6 = var3.overlayMethods;
                if(!(var4 == var6)) { _fun0010_ip = 157; continue _fun0010 }
 125:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var7 = 10;
                var7 = var9[var7];
                var7 = var8.bind(var2)(var7);
                var7 = var7.ApplicationOverlayMethodFlags;
                var6 = var7.DEFAULT;
 157:
                var1['overlayMethods'] = var6;
                var7 = var3.hook;
                var6 = var4 == var7;
                if(var6) { _fun0010_ip = 179; continue _fun0010 }
 176:
                var6 = var7;
 179:
                var1['hook'] = var6;
                var6 = var3.aliases;
                if(!(var4 == var6)) { _fun0010_ip = 199; continue _fun0010 }
 195:
                var6 = new Array(0);
 199:
                var1['aliases'] = var6;
                var6 = var3.publishers;
                if(!(var4 == var6)) { _fun0010_ip = 219; continue _fun0010 }
 215:
                var6 = new Array(0);
 219:
                var1['publishers'] = var6;
                var6 = var3.developers;
                if(!(var4 == var6)) { _fun0010_ip = 239; continue _fun0010 }
 235:
                var6 = new Array(0);
 239:
                var1['developers'] = var6;
                var6 = var3.storeListingSkuId;
                var1['storeListingSkuId'] = var6;
                var6 = var3.guildId;
                var1['guildId'] = var6;
                var6 = var3.guild;
                var1['guild'] = var6;
                var7 = var3.executables;
                if(!(var4 == var7)) { _fun0010_ip = 293; continue _fun0010 }
 289:
                var7 = new Array(0);
 293:
                var6 = var7.map;
                var5 = _closure1_slot13;
                var5 = var6.bind(var7)(var5);
                var1['executables'] = var5;
                var5 = var3.hashes;
                if(!(var4 == var5)) { _fun0010_ip = 327; continue _fun0010 }
 323:
                var5 = new Array(0);
 327:
                var1['hashes'] = var5;
                var5 = var3.eulaId;
                var1['eulaId'] = var5;
                var5 = var3.slug;
                var1['slug'] = var5;
                var6 = var3.flags;
                var7 = var4 != var6;
                var5 = 0;
                if(!var7) { _fun0010_ip = 374; continue _fun0010 }
 371:
                var5 = var6;
 374:
                var1['flags'] = var5;
                var5 = var3.tags;
                if(!(var4 == var5)) { _fun0010_ip = 394; continue _fun0010 }
 390:
                var5 = new Array(0);
 394:
                var1['tags'] = var5;
                var5 = var3.maxParticipants;
                var1['maxParticipants'] = var5;
                var5 = var3.embedded_activity_config;
                if(!(var4 == var5)) { _fun0010_ip = 428; continue _fun0010 }
 422:
                var5 = var3.embeddedActivityConfig;
 428:
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
                if(!(var4 == var5)) { _fun0010_ip = 510; continue _fun0010 }
 504:
                var5 = var3.isDiscoverable;
 510:
                var1['isDiscoverable'] = var5;
                var5 = var3.custom_install_url;
                if(!(var4 == var5)) { _fun0010_ip = 532; continue _fun0010 }
 526:
                var5 = var3.customInstallUrl;
 532:
                var1['customInstallUrl'] = var5;
                var5 = var3.install_params;
                if(!(var4 == var5)) { _fun0010_ip = 554; continue _fun0010 }
 548:
                var5 = var3.installParams;
 554:
                var1['installParams'] = var5;
                var5 = var3.directory_entry;
                if(!(var4 == var5)) { _fun0010_ip = 576; continue _fun0010 }
 570:
                var5 = var3.directoryEntry;
 576:
                var1['directoryEntry'] = var5;
                var5 = var3.categories;
                var1['categories'] = var5;
                var7 = var3.linked_games;
                var5 = var4 == var7;
                var2 = undefined;
                if(var5) { _fun0010_ip = 626; continue _fun0010 }
 609:
                var6 = var7.map;
                var5 = function(arg1) {
                    _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                        var2 = arg1;
                        var1 = {};
                        var7 = var1;
                        var6 = var2;
                        var3 = copyDataProperties(var7, var6);
                        var4 = var2.application;
                        var3 = null;
                        var4 = var3 != var4;
                        var3 = undefined;
                        if(!var4) { _fun0011_ip = 54; continue _fun0011 }
 31:
                        var5 = _closure2_slot0;
                        var4 = var5.createFromServer;
                        var2 = var2.application;
                        var3 = var4.bind(var5)(var2);
 54:
                        var2 = 'application';
                        var1[var2] = var3;
                        return var1;
                    }
                };
                var2 = var6.bind(var7)(var5);
 626:
                if(!(var4 == var2)) { _fun0010_ip = 636; continue _fun0010 }
 630:
                var2 = var3.linkedGames;
 636:
                var1['linkedGames'] = var2;
                var2 = var3.deepLinkUri;
                if(!(var4 == var2)) { _fun0010_ip = 658; continue _fun0010 }
 652:
                var2 = var3.deeplink_uri;
 658:
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
 0:
                var2 = arg1;
                var4 = this;
                var3 = _closure2_slot0;
                var1 = {};
                var6 = var2.id;
                var5 = null;
                if(!(var5 == var6)) { _fun0012_ip = 31; continue _fun0012 }
 26:
                var6 = var4.id;
 31:
                var1['id'] = var6;
                var6 = var2.name;
                if(!(var5 == var6)) { _fun0012_ip = 49; continue _fun0012 }
 44:
                var6 = var4.name;
 49:
                var1['name'] = var6;
                var6 = var2.icon;
                if(!(var5 == var6)) { _fun0012_ip = 67; continue _fun0012 }
 62:
                var6 = var4.icon;
 67:
                var1['icon'] = var6;
                var6 = var2.splash;
                if(!(var5 == var6)) { _fun0012_ip = 87; continue _fun0012 }
 81:
                var6 = var4.splash;
 87:
                var1['splash'] = var6;
                var6 = var2.overlay;
                if(!(var5 == var6)) { _fun0012_ip = 108; continue _fun0012 }
 102:
                var6 = var4.overlay;
 108:
                var1['overlay'] = var6;
                var6 = var2.overlayWarn;
                if(!(var5 == var6)) { _fun0012_ip = 129; continue _fun0012 }
 123:
                var6 = var4.overlayWarn;
 129:
                var1['overlayWarn'] = var6;
                var6 = var2.overlayCompatibilityHook;
                if(!(var5 == var6)) { _fun0012_ip = 150; continue _fun0012 }
 144:
                var6 = var4.overlayCompatibilityHook;
 150:
                var1['overlayCompatibilityHook'] = var6;
                var6 = var2.overlayMethods;
                if(!(var5 == var6)) { _fun0012_ip = 171; continue _fun0012 }
 165:
                var6 = var4.overlayMethods;
 171:
                var1['overlayMethods'] = var6;
                var6 = var2.hook;
                if(!(var5 == var6)) { _fun0012_ip = 192; continue _fun0012 }
 186:
                var6 = var4.hook;
 192:
                var1['hook'] = var6;
                var6 = var2.aliases;
                if(!(var5 == var6)) { _fun0012_ip = 213; continue _fun0012 }
 207:
                var6 = var4.aliases;
 213:
                var1['aliases'] = var6;
                var6 = var2.publishers;
                if(!(var5 == var6)) { _fun0012_ip = 234; continue _fun0012 }
 228:
                var6 = var4.publishers;
 234:
                var1['publishers'] = var6;
                var6 = var2.developers;
                if(!(var5 == var6)) { _fun0012_ip = 255; continue _fun0012 }
 249:
                var6 = var4.developers;
 255:
                var1['developers'] = var6;
                var6 = var2.primarySkuId;
                if(!(var5 == var6)) { _fun0012_ip = 276; continue _fun0012 }
 270:
                var6 = var4.primarySkuId;
 276:
                var1['primarySkuId'] = var6;
                var6 = var2.storeListingSkuId;
                if(!(var5 == var6)) { _fun0012_ip = 297; continue _fun0012 }
 291:
                var6 = var4.storeListingSkuId;
 297:
                var1['storeListingSkuId'] = var6;
                var6 = var2.thirdPartySkus;
                if(!(var5 == var6)) { _fun0012_ip = 318; continue _fun0012 }
 312:
                var6 = var4.thirdPartySkus;
 318:
                var1['thirdPartySkus'] = var6;
                var6 = var2.guildId;
                if(!(var5 == var6)) { _fun0012_ip = 337; continue _fun0012 }
 332:
                var6 = var4.guildId;
 337:
                var1['guildId'] = var6;
                var6 = var2.guild;
                if(!(var5 == var6)) { _fun0012_ip = 355; continue _fun0012 }
 350:
                var6 = var4.guild;
 355:
                var1['guild'] = var6;
                var6 = var2.executables;
                if(!(var5 == var6)) { _fun0012_ip = 375; continue _fun0012 }
 369:
                var6 = var4.executables;
 375:
                var1['executables'] = var6;
                var6 = var2.hashes;
                if(!(var5 == var6)) { _fun0012_ip = 396; continue _fun0012 }
 390:
                var6 = var4.hashes;
 396:
                var1['hashes'] = var6;
                var6 = var2.description;
                if(!(var5 == var6)) { _fun0012_ip = 415; continue _fun0012 }
 410:
                var6 = var4.description;
 415:
                var1['description'] = var6;
                var6 = var2.eulaId;
                if(!(var5 == var6)) { _fun0012_ip = 435; continue _fun0012 }
 429:
                var6 = var4.eulaId;
 435:
                var1['eulaId'] = var6;
                var6 = var2.slug;
                if(!(var5 == var6)) { _fun0012_ip = 456; continue _fun0012 }
 450:
                var6 = var4.slug;
 456:
                var1['slug'] = var6;
                var6 = var2.coverImage;
                if(!(var5 == var6)) { _fun0012_ip = 477; continue _fun0012 }
 471:
                var6 = var4.coverImage;
 477:
                var1['coverImage'] = var6;
                var6 = var2.bot;
                if(!(var5 == var6)) { _fun0012_ip = 498; continue _fun0012 }
 492:
                var6 = var4.bot;
 498:
                var1['bot'] = var6;
                var6 = var2.flags;
                if(!(var5 == var6)) { _fun0012_ip = 517; continue _fun0012 }
 512:
                var6 = var4.flags;
 517:
                var1['flags'] = var6;
                var6 = var2.maxParticipants;
                if(!(var5 == var6)) { _fun0012_ip = 537; continue _fun0012 }
 531:
                var6 = var4.maxParticipants;
 537:
                var1['maxParticipants'] = var6;
                var6 = var2.tags;
                if(!(var5 == var6)) { _fun0012_ip = 558; continue _fun0012 }
 552:
                var6 = var4.tags;
 558:
                var1['tags'] = var6;
                var6 = var2.embeddedActivityConfig;
                if(!(var5 == var6)) { _fun0012_ip = 609; continue _fun0012 }
 573:
                var7 = var4.embeddedActivityConfig;
                var8 = var5 != var7;
                var7 = undefined;
                if(!var8) { _fun0012_ip = 606; continue _fun0012 }
 588:
                var8 = {};
                var10 = var4.embeddedActivityConfig;
                var11 = var8;
                var9 = copyDataProperties(var11, var10);
                var7 = var8;
 606:
                var6 = var7;
 609:
                var1['embeddedActivityConfig'] = var6;
                var6 = var2.type;
                if(!(var5 == var6)) { _fun0012_ip = 628; continue _fun0012 }
 623:
                var6 = var4.type;
 628:
                var1['type'] = var6;
                var6 = var2.team;
                if(!(var5 == var6)) { _fun0012_ip = 648; continue _fun0012 }
 642:
                var6 = var4.team;
 648:
                var1['team'] = var6;
                var6 = var2.roleConnectionsVerificationUrl;
                if(!(var5 == var6)) { _fun0012_ip = 669; continue _fun0012 }
 663:
                var6 = var4.roleConnectionsVerificationUrl;
 669:
                var1['roleConnectionsVerificationUrl'] = var6;
                var6 = var2.integrationTypesConfig;
                if(!(var5 == var6)) { _fun0012_ip = 690; continue _fun0012 }
 684:
                var6 = var4.integrationTypesConfig;
 690:
                var1['integrationTypesConfig'] = var6;
                var6 = var2.isMonetized;
                if(!(var5 == var6)) { _fun0012_ip = 711; continue _fun0012 }
 705:
                var6 = var4.isMonetized;
 711:
                var1['isMonetized'] = var6;
                var6 = var2.storefront_available;
                if(!(var5 == var6)) { _fun0012_ip = 732; continue _fun0012 }
 726:
                var6 = var4.storefront_available;
 732:
                var1['storefront_available'] = var6;
                var6 = var2.termsOfServiceUrl;
                if(!(var5 == var6)) { _fun0012_ip = 753; continue _fun0012 }
 747:
                var6 = var4.termsOfServiceUrl;
 753:
                var1['termsOfServiceUrl'] = var6;
                var6 = var2.privacyPolicyUrl;
                if(!(var5 == var6)) { _fun0012_ip = 774; continue _fun0012 }
 768:
                var6 = var4.privacyPolicyUrl;
 774:
                var1['privacyPolicyUrl'] = var6;
                var6 = var2.isVerified;
                if(!(var5 == var6)) { _fun0012_ip = 795; continue _fun0012 }
 789:
                var6 = var4.isVerified;
 795:
                var1['isVerified'] = var6;
                var6 = var2.customInstallUrl;
                if(!(var5 == var6)) { _fun0012_ip = 816; continue _fun0012 }
 810:
                var6 = var4.customInstallUrl;
 816:
                var1['customInstallUrl'] = var6;
                var6 = var2.installParams;
                if(!(var5 == var6)) { _fun0012_ip = 837; continue _fun0012 }
 831:
                var6 = var4.installParams;
 837:
                var1['installParams'] = var6;
                var6 = var2.isDiscoverable;
                if(!(var5 == var6)) { _fun0012_ip = 858; continue _fun0012 }
 852:
                var6 = var4.isDiscoverable;
 858:
                var1['isDiscoverable'] = var6;
                var6 = var2.directoryEntry;
                if(!(var5 == var6)) { _fun0012_ip = 879; continue _fun0012 }
 873:
                var6 = var4.directoryEntry;
 879:
                var1['directoryEntry'] = var6;
                var6 = var2.categories;
                if(!(var5 == var6)) { _fun0012_ip = 900; continue _fun0012 }
 894:
                var6 = var4.categories;
 900:
                var1['categories'] = var6;
                var6 = var2.linkedGames;
                if(!(var5 == var6)) { _fun0012_ip = 921; continue _fun0012 }
 915:
                var6 = var4.linkedGames;
 921:
                var1['linkedGames'] = var6;
                var2 = var2.deepLinkUri;
                if(!(var5 == var2)) { _fun0012_ip = 942; continue _fun0012 }
 936:
                var2 = var4.deepLinkUri;
 942:
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
 0:
                var3 = this;
                var2 = var3.maxParticipants;
                var1 = null;
                if(!(var1 == var2)) { _fun0013_ip = 31; continue _fun0013 }
 15:
                var4 = _closure1_slot10;
                var3 = var3.id;
                var2 = var4[var3];
 31:
                var3 = var1 != var2;
                var1 = 0;
                if(!var3) { _fun0013_ip = 43; continue _fun0013 }
 40:
                var1 = var2;
 43:
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
 0:
                var5 = 0;
                var4 = copyRestArgs(var5);
                var1 = this;
                var3 = var1.integrationTypesConfig;
                var _closure3_slot0 = var3;
                var1 = null;
                var1 = var1 != var3;
                if(!var1) { _fun0014_ip = 46; continue _fun0014 }
 30:
                var3 = var4.every;
                var2 = function(arg1) {
                    var2 = _closure3_slot0;
                    var1 = arg1;
                    var1 = var1 in var2;
                    return var1;
                };
                var1 = var3.bind(var4)(var2);
 46:
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
 0:
                var2 = this;
                var3 = var2.storeListingSkuId;
                var1 = null;
                if(!(var1 == var3)) { _fun0015_ip = 23; continue _fun0015 }
 15:
                var1 = var2.primarySkuId;
                _fun0015_ip = 29; continue _fun0015;
 23:
                var1 = var2.storeListingSkuId;
 29:
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
 0:
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
                if(!var5) { _fun0016_ip = 104; continue _fun0016 }
 71:
                var9 = _closure1_slot9;
                var14 = var2.bot;
                var8 = var9.prototype;
                var8 = Object.create(var8, {constructor: {value: var9}});
                var15 = var8;
                var5 = new var15[var9](var14, var13);
                var7 = var5 instanceof Object ? var5 : var8;
 104:
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
                if(!(var6 == var7)) { _fun0016_ip = 220; continue _fun0016 }
 183:
                var9 = _closure1_slot0;
                var8 = _closure1_slot2;
                var5 = 10;
                var8 = var8[var5];
                var5 = undefined;
                var5 = var9.bind(var5)(var8);
                var5 = var5.ApplicationOverlayMethodFlags;
                var7 = var5.DEFAULT;
 220:
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
                if(!(var6 == var5)) { _fun0016_ip = 305; continue _fun0016 }
 299:
                var7 = new Array(0);
                _fun0016_ip = 334; continue _fun0016;
 305:
                var9 = var2.publishers;
                var8 = var9.map;
                var5 = _closure1_slot8;
                var5 = var5.createFromServer;
                var7 = var8.bind(var9)(var5);
 334:
                var5 = 'publishers';
                var1[var5] = var7;
                var5 = var2.developers;
                if(!(var6 == var5)) { _fun0016_ip = 359; continue _fun0016 }
 353:
                var7 = new Array(0);
                _fun0016_ip = 388; continue _fun0016;
 359:
                var9 = var2.developers;
                var8 = var9.map;
                var5 = _closure1_slot8;
                var5 = var5.createFromServer;
                var7 = var8.bind(var9)(var5);
 388:
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
                if(!var8) { _fun0016_ip = 446; continue _fun0016 }
 443:
                var7 = var5;
 446:
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
                if(!var7) { _fun0016_ip = 572; continue _fun0016 }
 515:
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
 0:
                        var5 = arg1;
                        var1 = var5[Symbol.iterator];
                        var5 = var1().next;
                        var3 = var5().value;
                        var2 = var1;
                        var7 = undefined;
                        var4 = var2 === var7;
                        var2 = undefined;
                        if(var4) { _fun0017_ip = 27; continue _fun0017 }
 24:
                        var2 = var3;
 27:
                        var3 = undefined;
                        if(var4) { _fun0017_ip = 57; continue _fun0017 }
 32:
                        var6 = var5().value;
                        var5 = var1;
                        var5 = var5 === var7;
                        var3 = undefined;
                        var4 = var5;
                        if(var5) { _fun0017_ip = 57; continue _fun0017 }
 51:
                        var3 = var6;
                        var4 = var5;
 57:
                        if(var4) { _fun0017_ip = 63; continue _fun0017 }
 60:
                        var1.return();
 63:
                        var1 = new Array(2);
                        var1[0] = var2;
                        var2 = {};
                        var4 = null;
                        if(!(var4 == var3)) { _fun0017_ip = 81; continue _fun0017 }
 79:
                        var3 = {};
 81:
                        var3 = var3.oauth2_install_params;
                        var2['oauth2InstallParams'] = var3;
                        var1[1] = var2;
                        return var1;
                    }
                };
                var7 = var11.bind(var12)(var7);
                var8 = var9.bind(var10)(var7);
 572:
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
                if(var6) { _fun0016_ip = 686; continue _fun0016 }
 671:
                var6 = var7.map;
                var4 = function(arg1) {
                    _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
                        var2 = arg1;
                        var1 = {};
                        var7 = var1;
                        var6 = var2;
                        var3 = copyDataProperties(var7, var6);
                        var4 = var2.application;
                        var3 = null;
                        var4 = var3 != var4;
                        var3 = undefined;
                        if(!var4) { _fun0018_ip = 54; continue _fun0018 }
 31:
                        var5 = _closure2_slot0;
                        var4 = var5.createFromServer;
                        var2 = var2.application;
                        var3 = var4.bind(var5)(var2);
 54:
                        var2 = 'application';
                        var1[var2] = var3;
                        return var1;
                    }
                };
                var5 = var6.bind(var7)(var4);
 686:
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
 0:
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
                if(!var1) { _fun0019_ip = 57; continue _fun0019 }
 49:
                var2 = var2 & var3;
                var1 = var2 === var3;
 57:
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