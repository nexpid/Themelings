// app/modules/slayer_storefront/SocialLayerStorefrontStore.tsx
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
            _closure1_slot26 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot26 = var1;
    var1 = function getGuildAndApplicationId(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg1;
            var1 = {};
            var2 = var3.type;
            var4 = 'guild';
            if(!(var4 !== var2)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var5 = _closure1_slot20;
            var2 = var3.applicationId;
            var2 = var5[var2];
            _fun0002_ip = 8; continue _fun0002;
case 6:
            var2 = var3.guildId;
case 8:
            var1['guildId'] = var2;
            var2 = var3.type;
            if(!(var4 !== var2)) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var2 = var3.applicationId;
            _fun0002_ip = 11; continue _fun0002;
case 9:
            var4 = _closure1_slot19;
            var3 = var3.guildId;
            var2 = var4[var3];
case 11:
            var1['applicationId'] = var2;
            return var1;
        }
    };
    var _closure1_slot27 = var1;
    var1 = function updateStorefrontFetchState(arg1, arg2, arg3) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var6 = arg1;
            var3 = arg2;
            var4 = arg3;
            var1 = null;
            if(!(var1 != var6)) { _fun0003_ip = 12; continue _fun0003 }
case 13:
            var5 = _closure1_slot9;
            var2 = {};
            var8 = var5[var6];
            var9 = var2;
            var7 = copyDataProperties(var9, var8);
            var9 = var2;
            var8 = var4;
            var7 = copyDataProperties(var9, var8);
            var5[var6] = var2;
case 12:
            if(!(var1 != var3)) { _fun0003_ip = 14; continue _fun0003 }
case 15:
            var2 = _closure1_slot10;
            var1 = {};
            var8 = var2[var3];
            var9 = var1;
            var5 = copyDataProperties(var9, var8);
            var9 = var1;
            var8 = var4;
            var4 = copyDataProperties(var9, var8);
            var2[var3] = var1;
case 14:
            var1 = {};
            var8 = _closure1_slot9;
            var9 = var1;
            var3 = copyDataProperties(var9, var8);
            _closure1_slot9 = var1;
            var1 = {};
            var8 = _closure1_slot10;
            var9 = var1;
            var3 = copyDataProperties(var9, var8);
            _closure1_slot10 = var1;
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot28 = var1;
    var1 = function handleUserSettingsStoreUpdate() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var3 = _closure1_slot0;
            var1 = _closure1_slot6;
            var1 = var1.locale;
            if(!(var3 !== var1)) { _fun0004_ip = 16; continue _fun0004 }
case 17:
            var1 = _closure1_slot6;
            var1 = var1.locale;
            var _closure1_slot0 = var1;
            var1 = {};
            _closure1_slot8 = var1;
            var1 = {};
            _closure1_slot9 = var1;
            var1 = {};
            _closure1_slot10 = var1;
            var1 = {};
            _closure1_slot11 = var1;
            var1 = {};
            _closure1_slot12 = var1;
            var1 = undefined;
            return var1;
case 16:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot29 = var1;
    var2 = global;
    var9 = var2.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var7);
    var1 = 0;
    var7 = var5[var1];
    var1 = undefined;
    var7 = var6.bind(var1)(var7);
    var _closure1_slot1 = var7;
    var7 = 1;
    var7 = var5[var7];
    var7 = var6.bind(var1)(var7);
    var _closure1_slot2 = var7;
    var7 = 2;
    var7 = var5[var7];
    var7 = var6.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var7 = 3;
    var7 = var5[var7];
    var7 = var6.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var7 = 4;
    var7 = var5[var7];
    var7 = var6.bind(var1)(var7);
    var _closure1_slot5 = var7;
    var7 = 5;
    var7 = var5[var7];
    var7 = var6.bind(var1)(var7);
    var _closure1_slot6 = var7;
    var7 = 6;
    var7 = var5[var7];
    var7 = var6.bind(var1)(var7);
    var _closure1_slot7 = var7;
    var7 = {};
    var _closure1_slot8 = var7;
    var7 = {};
    var _closure1_slot9 = var7;
    var7 = {};
    var _closure1_slot10 = var7;
    var7 = {};
    var _closure1_slot11 = var7;
    var7 = {};
    var _closure1_slot12 = var7;
    var7 = {};
    var _closure1_slot13 = var7;
    var7 = {};
    var _closure1_slot14 = var7;
    var7 = {};
    var _closure1_slot15 = var7;
    var7 = var2.Set;
    var8 = var7.prototype;
    var8 = Object.create(var8, {constructor: {value: var7}});
    var13 = var8;
    var7 = new var13[var7](var12);
    var7 = var7 instanceof Object ? var7 : var8;
    var _closure1_slot16 = var7;
    var8 = {};
    var7 = 'idle';
    var8['state'] = var7;
    var _closure1_slot17 = var8;
    var8 = var2.Set;
    var9 = var8.prototype;
    var9 = Object.create(var9, {constructor: {value: var8}});
    var13 = var9;
    var8 = new var13[var8](var12);
    var8 = var8 instanceof Object ? var8 : var9;
    var _closure1_slot18 = var8;
    var8 = {};
    var _closure1_slot19 = var8;
    var8 = {};
    var _closure1_slot20 = var8;
    var8 = {};
    var _closure1_slot21 = var8;
    var8 = {};
    var _closure1_slot22 = var8;
    var2 = var2.Set;
    var8 = var2.prototype;
    var8 = Object.create(var8, {constructor: {value: var2}});
    var13 = var8;
    var2 = new var13[var2](var12);
    var2 = var2 instanceof Object ? var2 : var8;
    var _closure1_slot23 = var2;
    var2 = null;
    var _closure1_slot24 = var2;
    var2 = {};
    var2['state'] = var7;
    var _closure1_slot25 = var2;
    var2 = 7;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var7 = var2.Store;
    var2 = function(arg1) {
        var4 = function SocialLayerStorefrontStore() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot1;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot4;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot3;
                var1 = _closure1_slot26;
                var1 = var1.bind(var3)();
                if(var1) { _fun0005_ip = 16; continue _fun0005 }
case 18:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0005_ip = 19; continue _fun0005;
case 16:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot4;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 19:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot5;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot2;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value() {
            var5 = this;
            var4 = var5.waitFor;
            var3 = _closure1_slot7;
            var1 = _closure1_slot6;
            var1 = var4.bind(var5)(var3, var1);
            var4 = var5.syncWith;
            var1 = _closure1_slot6;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = _closure1_slot29;
            var1 = var4.bind(var5)(var3, var1);
            var1 = _closure1_slot6;
            var1 = var1.locale;
            _closure1_slot0 = var1;
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(22);
        var1[0] = var5;
        var5 = {};
        var7 = 'getStorefrontData';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = _closure1_slot9;
            var1 = arg1;
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getStorefrontDataForApplicationId';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = _closure1_slot10;
            var1 = arg1;
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getStorefrontFetchState';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var4 = _closure1_slot27;
                var1 = undefined;
                var3 = arg1;
                var4 = var4.bind(var1)(var3);
                var3 = var4.guildId;
                var5 = var4.applicationId;
                var4 = null;
                if(!(var4 == var3)) { _fun0006_ip = 20; continue _fun0006 }
case 21:
                var4 = var4 != var5;
                var1 = undefined;
                if(!var4) { _fun0006_ip = 22; continue _fun0006 }
case 23:
                var4 = _closure1_slot10;
                var1 = var4[var5];
case 22:
                _fun0006_ip = 24; continue _fun0006;
case 20:
                var2 = _closure1_slot9;
                var1 = var2[var3];
case 24:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getSkuAssets';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot11;
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getStorefrontMetadata';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = _closure1_slot12;
            var1 = arg1;
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'getStorefrontState';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var2 = arg1;
                var1 = null;
                if(!(var1 == var2)) { _fun0007_ip = 25; continue _fun0007 }
case 26:
                var1 = undefined;
                return var1;
case 25:
                var1 = _closure1_slot8;
                var1 = var1[var2];
                return var1;
            }
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'getAnnouncement';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = _closure1_slot13;
            var1 = arg1;
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'getConfig';
        var5['key'] = var7;
        var7 = function value() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var1 = _closure1_slot17;
                var4 = var1.state;
                var3 = 'success';
                var1 = null;
                if(!(var3 === var4)) { _fun0008_ip = 27; continue _fun0008 }
case 28:
                var2 = _closure1_slot17;
                var1 = var2.config;
case 27:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'getConfigForApplicationId';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = _closure1_slot22;
            var1 = arg1;
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'getApplicationIdFromDetectableId';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = _closure1_slot21;
            var1 = arg1;
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'getDetectableIdsToApplicationIds';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot21;
            return var1;
        };
        var5['value'] = var7;
        var1[11] = var5;
        var5 = {};
        var7 = 'getGuildIdFromApplicationId';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var3 = arg1;
                var1 = null;
                var2 = var1 != var3;
                var1 = undefined;
                if(!var2) { _fun0009_ip = 29; continue _fun0009 }
case 30:
                var2 = _closure1_slot20;
                var1 = var2[var3];
case 29:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[12] = var5;
        var5 = {};
        var7 = 'getApplicationIdFromGuildId';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var3 = arg1;
                var1 = null;
                var2 = var1 != var3;
                var1 = undefined;
                if(!var2) { _fun0010_ip = 29; continue _fun0010 }
case 30:
                var2 = _closure1_slot19;
                var1 = var2[var3];
case 29:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[13] = var5;
        var5 = {};
        var7 = 'getConfigFetchState';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot17;
            return var1;
        };
        var5['value'] = var7;
        var1[14] = var5;
        var5 = {};
        var7 = 'getStorefrontApplicationIds';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot18;
            return var1;
        };
        var5['value'] = var7;
        var1[15] = var5;
        var5 = {};
        var7 = 'getStorefrontGuildIds';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot23;
            return var1;
        };
        var5['value'] = var7;
        var1[16] = var5;
        var5 = {};
        var7 = 'getSKUEligibility';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var2 = _closure1_slot14;
                var1 = arg1;
                var2 = var2[var1];
                var1 = null;
                var3 = var1 == var2;
                var1 = undefined;
                if(var3) { _fun0011_ip = 31; continue _fun0011 }
case 29:
                var1 = var2.state;
case 31:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[17] = var5;
        var5 = {};
        var7 = 'getSKUEligibilityEntry';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = _closure1_slot14;
            var1 = arg1;
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var7;
        var1[18] = var5;
        var5 = {};
        var7 = 'getNormalizedSKUEligibility';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var2 = _closure1_slot14;
                var1 = arg1;
                var1 = var2[var1];
                var2 = null;
                var3 = var2 == var1;
                var2 = undefined;
                if(var3) { _fun0012_ip = 31; continue _fun0012 }
case 29:
                var2 = var1.state;
case 31:
                var1 = 'ineligible';
                var1 = var1 !== var2;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[19] = var5;
        var5 = {};
        var7 = 'getAnnouncementModalConfig';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot24;
            return var1;
        };
        var5['value'] = var7;
        var1[20] = var5;
        var5 = {};
        var7 = 'getStorefrontAffinity';
        var5['key'] = var7;
        var6 = function value() {
            var1 = _closure1_slot25;
            return var1;
        };
        var5['value'] = var6;
        var1[21] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var7 = var2.bind(var1)(var7);
    var2 = 'SocialLayerStorefrontStore';
    var7['displayName'] = var2;
    var2 = 8;
    var2 = var5[var2];
    var12 = var6.bind(var1)(var2);
    var2 = {};
    var8 = function handleLogout() {
        var1 = {};
        _closure1_slot11 = var1;
        var1 = {};
        _closure1_slot12 = var1;
        var1 = {};
        _closure1_slot14 = var1;
        var1 = {};
        _closure1_slot15 = var1;
        var1 = {};
        _closure1_slot10 = var1;
        var1 = {};
        _closure1_slot9 = var1;
        var1 = global;
        var3 = var1.Set;
        var4 = var3.prototype;
        var4 = Object.create(var4, {constructor: {value: var3}});
        var6 = var4;
        var3 = new var6[var3](var5);
        var3 = var3 instanceof Object ? var3 : var4;
        _closure1_slot16 = var3;
        var4 = {};
        var3 = 'idle';
        var4['state'] = var3;
        _closure1_slot17 = var4;
        var4 = var1.Set;
        var5 = var4.prototype;
        var5 = Object.create(var5, {constructor: {value: var4}});
        var6 = var5;
        var4 = new var6[var4](var5);
        var4 = var4 instanceof Object ? var4 : var5;
        _closure1_slot18 = var4;
        var4 = {};
        _closure1_slot19 = var4;
        var4 = {};
        _closure1_slot20 = var4;
        var4 = {};
        _closure1_slot21 = var4;
        var4 = {};
        _closure1_slot22 = var4;
        var1 = var1.Set;
        var4 = var1.prototype;
        var4 = Object.create(var4, {constructor: {value: var1}});
        var6 = var4;
        var1 = new var6[var1](var5);
        var1 = var1 instanceof Object ? var1 : var4;
        _closure1_slot23 = var1;
        var1 = null;
        _closure1_slot24 = var1;
        var1 = {};
        var1['state'] = var3;
        _closure1_slot25 = var1;
        var1 = undefined;
        return var1;
    };
    var2['LOGOUT'] = var8;
    var8 = function handleStorefrontPromotionIdOverrideSet() {
        var1 = {};
        _closure1_slot10 = var1;
        var1 = {};
        _closure1_slot9 = var1;
        var1 = undefined;
        return var1;
    };
    var2['STOREFRONT_PROMOTION_ID_OVERRIDE_SET'] = var8;
    var8 = function handlePostConnectionOpen() {
        var1 = {};
        _closure1_slot14 = var1;
        var1 = {};
        _closure1_slot15 = var1;
        var1 = global;
        var1 = var1.Set;
        var3 = var1.prototype;
        var3 = Object.create(var3, {constructor: {value: var1}});
        var4 = var3;
        var1 = new var4[var1](var3);
        var1 = var1 instanceof Object ? var1 : var3;
        _closure1_slot16 = var1;
        var1 = undefined;
        return var1;
    };
    var2['POST_CONNECTION_OPEN'] = var8;
    var8 = function handleEntitlementCreate(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var1 = arg1;
            var1 = var1.entitlement;
            var4 = _closure1_slot14;
            var2 = var1.sku_id;
            var4 = var4[var2];
            var2 = null;
            if(!(var2 != var4)) { _fun0013_ip = 32; continue _fun0013 }
case 27:
            var2 = {};
            var5 = _closure1_slot14;
            var6 = var2;
            var4 = copyDataProperties(var6, var5);
            _closure1_slot14 = var2;
            var1 = var1.sku_id;
            var1 = delete var2[var1];
            var1 = undefined;
            return var1;
case 32:
            var1 = false;
            return var1;
        }
    };
    var2['ENTITLEMENT_CREATE'] = var8;
    var8 = function handleInteractionFailure(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var1 = arg1;
            var3 = var1.interactionId;
            var2 = null;
            if(!(var2 != var3)) { _fun0014_ip = 33; continue _fun0014 }
case 7:
            var4 = _closure1_slot15;
            var5 = var4[var3];
            if(!(var2 != var5)) { _fun0014_ip = 34; continue _fun0014 }
case 21:
            var2 = {};
            var6 = _closure1_slot14;
            var7 = var2;
            var4 = copyDataProperties(var7, var6);
            var4 = {'state': 'error', 'reason': 'interaction_failure'};
            var2[4] = var4;
            _closure1_slot14 = var2;
            var2 = _closure1_slot15;
            var2 = delete var2[var3];
            var2 = undefined;
            return var2;
case 34:
            var2 = global;
            var5 = var2.Object;
            var4 = var5.values;
            var2 = _closure1_slot14;
            var5 = var4.bind(var5)(var2);
            var4 = var5.some;
            var2 = function(arg1) {
                var1 = arg1;
                var2 = var1.state;
                var1 = 'checking';
                var1 = var1 === var2;
                return var1;
            };
            var2 = var4.bind(var5)(var2);
            if(!var2) { _fun0014_ip = 35; continue _fun0014 }
case 36:
            var2 = _closure1_slot16;
            var4 = var2.size;
            var2 = 25;
            if(!(var4 >= var2)) { _fun0014_ip = 37; continue _fun0014 }
case 38:
            var4 = _closure1_slot16;
            var2 = var4.values;
            var4 = var2.bind(var4)();
            var2 = var4.next;
            var2 = var2.bind(var4)();
            var5 = var2.value;
            var4 = _closure1_slot16;
            var2 = var4.delete;
            var2 = var2.bind(var4)(var5);
case 37:
            var2 = _closure1_slot16;
            var1 = var2.add;
            var1 = var1.bind(var2)(var3);
case 35:
            var1 = false;
            return var1;
case 33:
            var1 = false;
            return var1;
        }
    };
    var2['INTERACTION_FAILURE'] = var8;
    var8 = function handleInteractionSuccess(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var1 = arg1;
            var2 = var1.interactionId;
            var3 = _closure1_slot15;
            var4 = var3[var2];
            var3 = null;
            if(!(var3 != var4)) { _fun0015_ip = 39; continue _fun0015 }
case 40:
            var1 = _closure1_slot15;
            var1 = delete var1[var2];
            var1 = undefined;
            return var1;
case 39:
            var1 = false;
            return var1;
        }
    };
    var2['INTERACTION_SUCCESS'] = var8;
    var8 = function handleSocialLayerStorefrontLoad(arg1) {
        var1 = arg1;
        var4 = var1.guildOrApplicationId;
        var2 = _closure1_slot27;
        var1 = undefined;
        var2 = var2.bind(var1)(var4);
        var5 = _closure1_slot28;
        var4 = var2.guildId;
        var3 = var2.applicationId;
        var2 = {};
        var6 = 'loading';
        var2['state'] = var6;
        var2 = var5.bind(var1)(var4, var3, var2);
        return var1;
    };
    var2['SOCIAL_LAYER_STOREFRONT_LOAD'] = var8;
    var8 = function handleSocialLayerStorefrontLoadSuccess(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var2 = arg1;
            var1 = var2.guildOrApplicationId;
            var4 = var2.storefront;
            var3 = var1.type;
            var2 = 'guild';
            if(!(var2 !== var3)) { _fun0016_ip = 12; continue _fun0016 }
case 41:
            var3 = _closure1_slot27;
            var2 = undefined;
            var2 = var3.bind(var2)(var1);
            var8 = var2.guildId;
            _fun0016_ip = 10; continue _fun0016;
case 12:
            var8 = var1.guildId;
case 10:
            var5 = null;
            var1 = var5 != var8;
            if(!var1) { _fun0016_ip = 42; continue _fun0016 }
case 32:
            var2 = _closure1_slot19;
            var2 = var2[var8];
            var1 = var5 == var2;
case 42:
            if(!var1) { _fun0016_ip = 43; continue _fun0016 }
case 34:
            var3 = _closure1_slot19;
            var1 = var4.applicationId;
            var3[var8] = var1;
            var1 = {};
            var11 = _closure1_slot19;
            var12 = var1;
            var3 = copyDataProperties(var12, var11);
            _closure1_slot19 = var1;
case 43:
            var1 = var4.applicationId;
            var1 = var5 != var1;
            if(!var1) { _fun0016_ip = 44; continue _fun0016 }
case 45:
            var1 = var5 != var8;
case 44:
            if(!var1) { _fun0016_ip = 46; continue _fun0016 }
case 47:
            var3 = _closure1_slot20;
            var2 = var4.applicationId;
            var2 = var3[var2];
            var1 = var5 == var2;
case 46:
            if(!var1) { _fun0016_ip = 48; continue _fun0016 }
case 49:
            var3 = _closure1_slot20;
            var1 = var4.applicationId;
            var3[var1] = var8;
            var1 = {};
            var11 = _closure1_slot20;
            var12 = var1;
            var3 = copyDataProperties(var12, var11);
            _closure1_slot20 = var1;
case 48:
            var7 = _closure1_slot28;
            var6 = var4.applicationId;
            var2 = {};
            var1 = 'fetched';
            var2['state'] = var1;
            var1 = global;
            var9 = var1.Date;
            var1 = var9.now;
            var1 = var1.bind(var9)();
            var2['fetchedAt'] = var1;
            var2['storefront'] = var4;
            var1 = undefined;
            var2 = var7.bind(var1)(var8, var6, var2);
            var2 = var4.assets;
            if(!(var5 != var2)) { _fun0016_ip = 50; continue _fun0016 }
case 51:
            var2 = {};
            var11 = _closure1_slot11;
            var12 = var2;
            var5 = copyDataProperties(var12, var11);
            var11 = var4.assets;
            var12 = var2;
            var4 = copyDataProperties(var12, var11);
            _closure1_slot11 = var2;
case 50:
            return var1;
        }
    };
    var2['SOCIAL_LAYER_STOREFRONT_LOAD_SUCCESS'] = var8;
    var8 = function handleSocialLayerStorefrontPartialLoadSuccess(arg1) {
        var1 = arg1;
        var3 = var1.assets;
        var2 = {};
        var5 = _closure1_slot11;
        var6 = var2;
        var4 = copyDataProperties(var6, var5);
        var6 = var2;
        var5 = var3;
        var3 = copyDataProperties(var6, var5);
        _closure1_slot11 = var2;
        var1 = undefined;
        return var1;
    };
    var2['SOCIAL_LAYER_STOREFRONT_PARTIAL_LOAD_SUCCESS'] = var8;
    var8 = function handleSocialLayerStorefrontMetadataLoadSuccess(arg1) {
        var1 = arg1;
        var4 = var1.applicationId;
        var3 = var1.storefrontMetadata;
        var2 = {};
        var6 = _closure1_slot12;
        var7 = var2;
        var5 = copyDataProperties(var7, var6);
        var2[3] = var3;
        _closure1_slot12 = var2;
        var1 = undefined;
        return var1;
    };
    var2['SOCIAL_LAYER_STOREFRONT_METADATA_LOAD_SUCCESS'] = var8;
    var8 = function handleSocialLayerStorefrontLoadFailure(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var1 = arg1;
            var4 = var1.guildOrApplicationId;
            var7 = var1.eager;
            var3 = _closure1_slot27;
            var1 = undefined;
            var3 = var3.bind(var1)(var4);
            var5 = var3.guildId;
            var4 = var3.applicationId;
            var3 = null;
            if(!(var3 == var5)) { _fun0017_ip = 52; continue _fun0017 }
case 53:
            var8 = var3 != var4;
            var6 = undefined;
            if(!var8) { _fun0017_ip = 54; continue _fun0017 }
case 10:
            var8 = _closure1_slot10;
            var6 = var8[var4];
case 54:
            _fun0017_ip = 5; continue _fun0017;
case 52:
            var8 = _closure1_slot9;
            var6 = var8[var5];
case 5:
            if(!(var3 != var6)) { _fun0017_ip = 55; continue _fun0017 }
case 56:
            if(var7) { _fun0017_ip = 57; continue _fun0017 }
case 58:
            var8 = _closure1_slot28;
            var7 = {};
            var9 = 'error';
            var7['state'] = var9;
            var9 = global;
            var10 = var9.Date;
            var9 = var10.now;
            var9 = var9.bind(var10)();
            var7['fetchedAt'] = var9;
            var7['storefront'] = var1;
            var7 = var8.bind(var1)(var5, var4, var7);
            _fun0017_ip = 59; continue _fun0017;
case 57:
            var8 = var6.state;
            var7 = 'loading';
            if(!(var7 === var8)) { _fun0017_ip = 60; continue _fun0017 }
case 61:
            var6 = var6.storefront;
            if(!(var3 == var6)) { _fun0017_ip = 62; continue _fun0017 }
case 60:
            if(!(var3 != var5)) { _fun0017_ip = 63; continue _fun0017 }
case 64:
            var6 = _closure1_slot9;
            var6 = delete var6[var5];
case 63:
            if(!(var3 != var4)) { _fun0017_ip = 65; continue _fun0017 }
case 66:
            var3 = _closure1_slot10;
            var3 = delete var3[var4];
case 65:
            var3 = {};
            var12 = _closure1_slot9;
            var13 = var3;
            var6 = copyDataProperties(var13, var12);
            _closure1_slot9 = var3;
            var3 = {};
            var12 = _closure1_slot10;
            var13 = var3;
            var6 = copyDataProperties(var13, var12);
            _closure1_slot10 = var3;
            _fun0017_ip = 59; continue _fun0017;
case 62:
            var3 = _closure1_slot28;
            var2 = {};
            var6 = 'fetched';
            var2['state'] = var6;
            var2 = var3.bind(var1)(var5, var4, var2);
case 59:
            return var1;
case 55:
            var1 = false;
            return var1;
        }
    };
    var2['SOCIAL_LAYER_STOREFRONT_LOAD_FAILURE'] = var8;
    var8 = function handleSetSocialLayerStorefrontState(arg1) {
        var1 = arg1;
        var4 = var1.applicationId;
        var6 = var1.pageIndex;
        var5 = var1.skuId;
        var3 = _closure1_slot8;
        var1 = {};
        var1['activePage'] = var6;
        var1['activeSkuId'] = var5;
        var3[var4] = var1;
        var1 = {};
        var7 = _closure1_slot8;
        var8 = var1;
        var3 = copyDataProperties(var8, var7);
        _closure1_slot8 = var1;
        var1 = undefined;
        return var1;
    };
    var2['SET_SOCIAL_LAYER_STOREFRONT_STATE'] = var8;
    var8 = function handleSocialLayerStorefrontAnnouncementFetchStart(arg1) {
        var1 = arg1;
        var3 = var1.guildId;
        var2 = {};
        var5 = _closure1_slot13;
        var6 = var2;
        var4 = copyDataProperties(var6, var5);
        _closure1_slot13 = var2;
        var1 = {};
        var4 = 'loading';
        var1['state'] = var4;
        var2[var3] = var1;
        var1 = undefined;
        return var1;
    };
    var2['SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_START'] = var8;
    var8 = function handleSocialLayerStorefrontAnnouncementFetchSuccess(arg1) {
        var1 = arg1;
        var3 = var1.guildId;
        var4 = var1.announcement;
        var2 = {};
        var6 = _closure1_slot13;
        var7 = var2;
        var5 = copyDataProperties(var7, var6);
        _closure1_slot13 = var2;
        var1 = {};
        var5 = 'success';
        var1['state'] = var5;
        var1['announcement'] = var4;
        var2[var3] = var1;
        var1 = undefined;
        return var1;
    };
    var2['SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_SUCCESS'] = var8;
    var8 = function handleSocialLayerStorefrontAnnouncementFetchFailure(arg1) {
        var1 = arg1;
        var3 = var1.guildId;
        var2 = {};
        var5 = _closure1_slot13;
        var6 = var2;
        var4 = copyDataProperties(var6, var5);
        _closure1_slot13 = var2;
        var1 = {};
        var4 = 'error';
        var1['state'] = var4;
        var2[var3] = var1;
        var1 = undefined;
        return var1;
    };
    var2['SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_FAILURE'] = var8;
    var8 = function handleStorefrontConfigFetchStart() {
        var2 = {};
        var1 = 'loading';
        var2['state'] = var1;
        _closure1_slot17 = var2;
        var1 = undefined;
        return var1;
    };
    var2['SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_START'] = var8;
    var8 = function handleStorefrontConfigFetchSuccess(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
            var1 = arg1;
            var1 = var1.config;
            var5 = {};
            var2 = 'success';
            var5['state'] = var2;
            var5['config'] = var1;
            var4 = global;
            var6 = var4.Date;
            var2 = var6.now;
            var2 = var2.bind(var6)();
            var5['fetchedAt'] = var2;
            _closure1_slot17 = var5;
            var7 = var4.Set;
            var8 = var1.storefronts;
            var6 = var8.map;
            var5 = function(arg1) {
                var1 = arg1;
                var1 = var1.applicationId;
                return var1;
            };
            var10 = var6.bind(var8)(var5);
            var6 = var7.prototype;
            var6 = Object.create(var6, {constructor: {value: var7}});
            var11 = var6;
            var5 = new var11[var7](var10, var9);
            var5 = var5 instanceof Object ? var5 : var6;
            _closure1_slot18 = var5;
            var6 = var4.Set;
            var7 = var1.storefronts;
            var5 = var7.filter;
            var4 = function(arg1) {
                var1 = arg1;
                var2 = var1.guildId;
                var1 = null;
                var1 = var1 != var2;
                return var1;
            };
            var7 = var5.bind(var7)(var4);
            var5 = var7.map;
            var4 = function(arg1) {
                var1 = arg1;
                var1 = var1.guildId;
                return var1;
            };
            var10 = var5.bind(var7)(var4);
            var5 = var6.prototype;
            var5 = Object.create(var5, {constructor: {value: var6}});
            var11 = var5;
            var4 = new var11[var6](var10, var9);
            var4 = var4 instanceof Object ? var4 : var5;
            _closure1_slot23 = var4;
            var7 = var1.storefronts;
            var6 = var7.reduce;
            var5 = function(arg1, arg2) {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                    var1 = arg1;
                    var2 = arg2;
                    var4 = var2.guildId;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0019_ip = 67; continue _fun0019 }
case 68:
                    var3 = var2.guildId;
                    var2 = var2.applicationId;
                    var1[var3] = var2;
case 67:
                    return var1;
                }
            };
            var4 = {};
            var4 = var6.bind(var7)(var5, var4);
            _closure1_slot19 = var4;
            var7 = var1.storefronts;
            var6 = var7.reduce;
            var5 = function(arg1, arg2) {
                _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                    var1 = arg1;
                    var2 = arg2;
                    var4 = var2.guildId;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0020_ip = 69; continue _fun0020 }
case 68:
                    var4 = var2.applicationId;
                    var3 = var2.guildId;
                    var1[var4] = var3;
                    var3 = var2.gameId;
                    var2 = var2.guildId;
                    var1[var3] = var2;
case 69:
                    return var1;
                }
            };
            var4 = {};
            var4 = var6.bind(var7)(var5, var4);
            _closure1_slot20 = var4;
            var7 = var1.storefronts;
            var6 = var7.reduce;
            var5 = function(arg1, arg2) {
                var1 = arg1;
                var2 = arg2;
                var4 = var2.gameId;
                var3 = var2.applicationId;
                var1[var4] = var3;
                var3 = var2.applicationId;
                var2 = var2.applicationId;
                var1[var3] = var2;
                return var1;
            };
            var4 = {};
            var4 = var6.bind(var7)(var5, var4);
            _closure1_slot21 = var4;
            var6 = var1.storefronts;
            var5 = var6.reduce;
            var4 = function(arg1, arg2) {
                var1 = arg1;
                var3 = arg2;
                var2 = var3.applicationId;
                var1[var2] = var3;
                return var1;
            };
            var3 = {};
            var3 = var5.bind(var6)(var4, var3);
            _closure1_slot22 = var3;
            var3 = var1.announcementModalConfig;
            var1 = null;
            var4 = var1 != var3;
            if(!var4) { _fun0018_ip = 70; continue _fun0018 }
case 71:
            var1 = var3;
case 70:
            _closure1_slot24 = var1;
            var1 = undefined;
            return var1;
        }
    };
    var2['SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_SUCCESS'] = var8;
    var8 = function handleStorefrontConfigFetchFailure() {
        var2 = {};
        var1 = 'error';
        var2['state'] = var1;
        var1 = global;
        var3 = var1.Date;
        var1 = var3.now;
        var1 = var1.bind(var3)();
        var2['fetchedAt'] = var1;
        _closure1_slot17 = var2;
        var1 = undefined;
        return var1;
    };
    var2['SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_FAILURE'] = var8;
    var8 = function handleSKUPurchaseEligibilityCheckStart(arg1) {
        var1 = arg1;
        var4 = var1.skuId;
        var2 = {};
        var6 = _closure1_slot14;
        var7 = var2;
        var3 = copyDataProperties(var7, var6);
        var3 = {};
        var5 = 'checking';
        var3['state'] = var5;
        var2[3] = var3;
        _closure1_slot14 = var2;
        var1 = undefined;
        return var1;
    };
    var2['SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_START'] = var8;
    var8 = function handleSKUPurchaseEligibilityCheckCreate(arg1) {
        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
            var1 = arg1;
            var6 = var1.skuId;
            var7 = var1.interactionId;
            var1 = _closure1_slot14;
            var1 = var1[var6];
            var2 = null;
            var3 = var2 == var1;
            var2 = undefined;
            if(var3) { _fun0021_ip = 8; continue _fun0021 }
case 6:
            var2 = var1.state;
case 8:
            var1 = 'checking';
            var1 = var1 === var2;
            if(!var1) { _fun0021_ip = 72; continue _fun0021 }
case 20:
            var3 = _closure1_slot16;
            var2 = var3.has;
            var2 = var2.bind(var3)(var7);
            if(var2) { _fun0021_ip = 34; continue _fun0021 }
case 16:
            var2 = _closure1_slot15;
            var2[var7] = var6;
            var2 = undefined;
            _fun0021_ip = 47; continue _fun0021;
case 34:
            var5 = _closure1_slot16;
            var3 = var5.delete;
            var3 = var3.bind(var5)(var7);
            var3 = {};
            var8 = _closure1_slot14;
            var9 = var3;
            var5 = copyDataProperties(var9, var8);
            var5 = {'state': 'error', 'reason': 'interaction_failure'};
            var3[5] = var5;
            _closure1_slot14 = var3;
            var2 = undefined;
case 47:
            var1 = var2;
case 72:
            return var1;
        }
    };
    var2['SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_CREATE'] = var8;
    var8 = function handleSKUPurchaseEligibilityCheckFailure(arg1) {
        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
            var2 = arg1;
            var5 = var2.skuId;
            var7 = var2.reason;
            var1 = undefined;
            if(!(var7 === var1)) { _fun0022_ip = 40; continue _fun0022 }
case 73:
            var7 = 'http_error';
case 40:
            var6 = var2.httpStatus;
            var2 = _closure1_slot14;
            var2 = var2[var5];
            var4 = null;
            var8 = var4 == var2;
            var4 = undefined;
            if(var8) { _fun0022_ip = 74; continue _fun0022 }
case 10:
            var4 = var2.state;
case 74:
            var2 = 'checking';
            if(!(var2 !== var4)) { _fun0022_ip = 11; continue _fun0022 }
case 75:
            var2 = 'interaction_deadline';
            if(!(var2 !== var7)) { _fun0022_ip = 76; continue _fun0022 }
case 11:
            var2 = {};
            var9 = _closure1_slot14;
            var10 = var2;
            var4 = copyDataProperties(var10, var9);
            var4 = {};
            var8 = 'error';
            var4['state'] = var8;
            var4['reason'] = var7;
            var4['httpStatus'] = var6;
            var2[4] = var4;
            _closure1_slot14 = var2;
            return var1;
case 76:
            var1 = false;
            return var1;
        }
    };
    var2['SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_FAILURE'] = var8;
    var8 = function handleSKUPurchaseEligibilityResponse(arg1) {
        _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
            var1 = arg1;
            var4 = var1.skuId;
            var6 = var1.recipientId;
            var3 = var1.eligible;
            var5 = var1.ineligibleReason;
            var7 = _closure1_slot7;
            var1 = var7.getId;
            var1 = var1.bind(var7)();
            if(!(var1 === var6)) { _fun0023_ip = 77; continue _fun0023 }
case 78:
            var1 = {};
            var8 = _closure1_slot14;
            var9 = var1;
            var6 = copyDataProperties(var9, var8);
            if(var3) { _fun0023_ip = 79; continue _fun0023 }
case 32:
            var3 = {};
            var6 = 'ineligible';
            var3['state'] = var6;
            var3['ineligibleReason'] = var5;
            _fun0023_ip = 80; continue _fun0023;
case 79:
            var5 = {};
            var6 = 'eligible';
            var5['state'] = var6;
            var3 = var5;
case 80:
            var1[3] = var3;
            _closure1_slot14 = var1;
            var1 = undefined;
            return var1;
case 77:
            var1 = false;
            return var1;
        }
    };
    var2['SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_RESPONSE'] = var8;
    var8 = function handleSocialLayerStorefrontAffinityFetchStart() {
        var2 = {};
        var1 = 'loading';
        var2['state'] = var1;
        _closure1_slot25 = var2;
        var1 = undefined;
        return var1;
    };
    var2['SOCIAL_LAYER_STOREFRONT_AFFINITY_FETCH_START'] = var8;
    var8 = function handleSocialLayerStorefrontAffinityFetchSuccess(arg1) {
        var1 = arg1;
        var1 = var1.affinity;
        var2 = {};
        var3 = 'success';
        var2['state'] = var3;
        var2['affinity'] = var1;
        _closure1_slot25 = var2;
        var1 = undefined;
        return var1;
    };
    var2['SOCIAL_LAYER_STOREFRONT_AFFINITY_FETCH_SUCCESS'] = var8;
    var4 = function handleSocialLayerStorefrontAffinityFetchFailure() {
        var2 = {};
        var1 = 'error';
        var2['state'] = var1;
        _closure1_slot25 = var2;
        var1 = undefined;
        return var1;
    };
    var2['SOCIAL_LAYER_STOREFRONT_AFFINITY_FETCH_FAILURE'] = var4;
    var4 = var7.prototype;
    var4 = Object.create(var4, {constructor: {value: var7}});
    var13 = var4;
    var11 = var2;
    var2 = new var13[var7](var12, var11, var10);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 9;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/slayer_storefront/SocialLayerStorefrontStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();