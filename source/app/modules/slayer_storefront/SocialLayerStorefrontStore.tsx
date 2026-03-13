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
            _closure1_slot16 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = function getUserKey(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg1;
            var1 = var3.length;
            var2 = 0;
            if(!(var2 !== var1)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var4 = var3.length;
            var1 = 1;
            if(!(!(var4 > var1))) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var1 = var3[var2];
            _fun0002_ip = 10; continue _fun0002;
case 8:
            var4 = new Array(0);
            var7 = var4;
            var6 = var3;
            var5 = 0;
            var2 = arraySpread(var7, var6, var5);
            var3 = var4.join;
            var2 = ',';
            var1 = var3.bind(var4)(var2);
case 10:
            return var1;
case 6:
            var1 = global;
            var3 = var1.Error;
            var1 = var3.prototype;
            var2 = Object.create(var1, {constructor: {value: var3}});
            var7 = 'No user IDs provided';
            var8 = var2;
            var1 = new var8[var3](var7, var6);
            var1 = var1 instanceof Object ? var1 : var2;
            throw var1;
        }
    };
    var _closure1_slot17 = var1;
    var1 = function handleUserSettingsStoreUpdate() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var3 = _closure1_slot0;
            var1 = _closure1_slot6;
            var1 = var1.locale;
            if(!(var3 !== var1)) { _fun0003_ip = 11; continue _fun0003 }
case 12:
            var1 = _closure1_slot6;
            var1 = var1.locale;
            var _closure1_slot0 = var1;
            var1 = {};
            _closure1_slot8 = var1;
            var1 = {};
            _closure1_slot9 = var1;
            var1 = {};
            _closure1_slot10 = var1;
            var1 = undefined;
            return var1;
case 11:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot18 = var1;
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
    var2 = var2.Set;
    var7 = var2.prototype;
    var7 = Object.create(var7, {constructor: {value: var2}});
    var13 = var7;
    var2 = new var13[var2](var12);
    var2 = var2 instanceof Object ? var2 : var7;
    var _closure1_slot14 = var2;
    var2 = {};
    var7 = 'idle';
    var2['state'] = var7;
    var _closure1_slot15 = var2;
    var2 = 7;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var7 = var2.Store;
    var2 = function(arg1) {
        var4 = function SocialLayerStorefrontStore() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
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
                var1 = _closure1_slot16;
                var1 = var1.bind(var3)();
                if(var1) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0004_ip = 15; continue _fun0004;
case 13:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot4;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 15:
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
            var1 = _closure1_slot18;
            var1 = var4.bind(var5)(var3, var1);
            var1 = _closure1_slot6;
            var1 = var1.locale;
            _closure1_slot0 = var1;
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(10);
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
        var7 = 'getStorefrontState';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = _closure1_slot8;
            var1 = arg1;
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'recommendationsByApplicationsAndUsers';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var5 = arg2;
                var1 = null;
                if(!(var1 != var5)) { _fun0005_ip = 16; continue _fun0005 }
case 17:
                var3 = var5.length;
                var2 = 0;
                if(!(var2 === var3)) { _fun0005_ip = 18; continue _fun0005 }
case 16:
                var2 = undefined;
                return var2;
case 18:
                var4 = _closure1_slot10;
                var3 = arg1;
                var3 = var4[var3];
                var6 = var1 == var3;
                var4 = undefined;
                var1 = undefined;
                if(var6) { _fun0005_ip = 10; continue _fun0005 }
case 19:
                var2 = _closure1_slot17;
                var2 = var2.bind(var4)(var5);
                var1 = var3[var2];
case 10:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getAnnouncement';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = _closure1_slot11;
            var1 = arg1;
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getConfig';
        var5['key'] = var7;
        var7 = function value() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var1 = _closure1_slot15;
                var4 = var1.state;
                var3 = 'success';
                var1 = null;
                if(!(var3 === var4)) { _fun0006_ip = 20; continue _fun0006 }
case 21:
                var2 = _closure1_slot15;
                var1 = var2.config;
case 20:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'getConfigFetchState';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot15;
            return var1;
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'getSKUEligibility';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var2 = _closure1_slot12;
                var1 = arg1;
                var2 = var2[var1];
                var1 = null;
                var3 = var1 == var2;
                var1 = undefined;
                if(var3) { _fun0007_ip = 22; continue _fun0007 }
case 23:
                var1 = var2.state;
case 22:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'getSKUEligibilityEntry';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = _closure1_slot12;
            var1 = arg1;
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'getNormalizedSKUEligibility';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var2 = _closure1_slot12;
                var1 = arg1;
                var1 = var2[var1];
                var2 = null;
                var3 = var2 == var1;
                var2 = undefined;
                if(var3) { _fun0008_ip = 22; continue _fun0008 }
case 23:
                var2 = var1.state;
case 22:
                var1 = 'ineligible';
                var1 = var1 !== var2;
                return var1;
            }
        };
        var5['value'] = var6;
        var1[9] = var5;
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
        _closure1_slot10 = var1;
        var1 = {};
        _closure1_slot12 = var1;
        var1 = {};
        _closure1_slot13 = var1;
        var1 = global;
        var1 = var1.Set;
        var3 = var1.prototype;
        var3 = Object.create(var3, {constructor: {value: var1}});
        var4 = var3;
        var1 = new var4[var1](var3);
        var1 = var1 instanceof Object ? var1 : var3;
        _closure1_slot14 = var1;
        var1 = {};
        var3 = 'idle';
        var1['state'] = var3;
        _closure1_slot15 = var1;
        var1 = undefined;
        return var1;
    };
    var2['LOGOUT'] = var8;
    var8 = function handlePostConnectionOpen() {
        var1 = {};
        _closure1_slot12 = var1;
        var1 = {};
        _closure1_slot13 = var1;
        var1 = global;
        var1 = var1.Set;
        var3 = var1.prototype;
        var3 = Object.create(var3, {constructor: {value: var1}});
        var4 = var3;
        var1 = new var4[var1](var3);
        var1 = var1 instanceof Object ? var1 : var3;
        _closure1_slot14 = var1;
        var1 = undefined;
        return var1;
    };
    var2['POST_CONNECTION_OPEN'] = var8;
    var8 = function handleEntitlementCreate(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var1 = arg1;
            var1 = var1.entitlement;
            var4 = _closure1_slot12;
            var2 = var1.sku_id;
            var4 = var4[var2];
            var2 = null;
            if(!(var2 != var4)) { _fun0009_ip = 24; continue _fun0009 }
case 8:
            var2 = {};
            var5 = _closure1_slot12;
            var6 = var2;
            var4 = copyDataProperties(var6, var5);
            _closure1_slot12 = var2;
            var1 = var1.sku_id;
            var1 = delete var2[var1];
            var1 = undefined;
            return var1;
case 24:
            var1 = false;
            return var1;
        }
    };
    var2['ENTITLEMENT_CREATE'] = var8;
    var8 = function handleInteractionFailure(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var1 = arg1;
            var3 = var1.interactionId;
            var2 = null;
            if(!(var2 != var3)) { _fun0010_ip = 25; continue _fun0010 }
case 26:
            var4 = _closure1_slot13;
            var5 = var4[var3];
            if(!(var2 != var5)) { _fun0010_ip = 27; continue _fun0010 }
case 28:
            var2 = {};
            var6 = _closure1_slot12;
            var7 = var2;
            var4 = copyDataProperties(var7, var6);
            var4 = {'state': 'error', 'reason': 'interaction_failure'};
            var2[var5] = var4;
            _closure1_slot12 = var2;
            var2 = _closure1_slot13;
            var2 = delete var2[var3];
            var2 = undefined;
            return var2;
case 27:
            var2 = global;
            var5 = var2.Object;
            var4 = var5.values;
            var2 = _closure1_slot12;
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
            if(!var2) { _fun0010_ip = 29; continue _fun0010 }
case 30:
            var2 = _closure1_slot14;
            var4 = var2.size;
            var2 = 25;
            if(!(var4 >= var2)) { _fun0010_ip = 31; continue _fun0010 }
case 32:
            var4 = _closure1_slot14;
            var2 = var4.values;
            var4 = var2.bind(var4)();
            var2 = var4.next;
            var2 = var2.bind(var4)();
            var5 = var2.value;
            var4 = _closure1_slot14;
            var2 = var4.delete;
            var2 = var2.bind(var4)(var5);
case 31:
            var2 = _closure1_slot14;
            var1 = var2.add;
            var1 = var1.bind(var2)(var3);
case 29:
            var1 = false;
            return var1;
case 25:
            var1 = false;
            return var1;
        }
    };
    var2['INTERACTION_FAILURE'] = var8;
    var8 = function handleInteractionSuccess(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var1 = arg1;
            var2 = var1.interactionId;
            var3 = _closure1_slot13;
            var4 = var3[var2];
            var3 = null;
            if(!(var3 != var4)) { _fun0011_ip = 33; continue _fun0011 }
case 9:
            var1 = _closure1_slot13;
            var1 = delete var1[var2];
            var1 = undefined;
            return var1;
case 33:
            var1 = false;
            return var1;
        }
    };
    var2['INTERACTION_SUCCESS'] = var8;
    var8 = function handleSocialLayerStorefrontLoad(arg1) {
        var1 = arg1;
        var4 = var1.guildId;
        var1 = _closure1_slot9;
        var7 = var1[var4];
        var3 = _closure1_slot9;
        var1 = {};
        var8 = var1;
        var5 = copyDataProperties(var8, var7);
        var6 = 'loading';
        var5 = 'state';
        var1[var5] = var6;
        var3[var4] = var1;
        var1 = {};
        var7 = _closure1_slot9;
        var8 = var1;
        var3 = copyDataProperties(var8, var7);
        _closure1_slot9 = var1;
        var1 = undefined;
        return var1;
    };
    var2['SOCIAL_LAYER_STOREFRONT_LOAD'] = var8;
    var8 = function handleSocialLayerStorefrontLoadSuccess(arg1) {
        var1 = arg1;
        var4 = var1.guildId;
        var5 = var1.storefront;
        var3 = _closure1_slot9;
        var1 = {};
        var1['storefront'] = var5;
        var5 = 'fetched';
        var1['state'] = var5;
        var5 = global;
        var6 = var5.Date;
        var5 = var6.now;
        var5 = var5.bind(var6)();
        var1['fetchedAt'] = var5;
        var3[var4] = var1;
        var1 = {};
        var7 = _closure1_slot9;
        var8 = var1;
        var3 = copyDataProperties(var8, var7);
        _closure1_slot9 = var1;
        var1 = undefined;
        return var1;
    };
    var2['SOCIAL_LAYER_STOREFRONT_LOAD_SUCCESS'] = var8;
    var8 = function handleSocialLayerStorefrontPartialLoadSuccess(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var1 = arg1;
            var5 = var1.guildId;
            var6 = var1.storefront;
            var1 = _closure1_slot9;
            var9 = var1[var5];
            var4 = null;
            var7 = var4 == var9;
            var1 = undefined;
            var2 = undefined;
            if(var7) { _fun0012_ip = 34; continue _fun0012 }
case 33:
            var2 = var9.storefront;
case 34:
            if(!(var4 == var2)) { _fun0012_ip = 35; continue _fun0012 }
case 36:
            var4 = _closure1_slot9;
            var2 = {'storefront': null, 'state': 'partially-fetched', 'fetchedAt': null};
            var2['storefront'] = var6;
            var4[var5] = var2;
            _fun0012_ip = 37; continue _fun0012;
case 35:
            var4 = _closure1_slot9;
            var2 = {};
            var11 = var2;
            var10 = var9;
            var7 = copyDataProperties(var11, var10);
            var7 = {};
            var10 = var9.storefront;
            var11 = var7;
            var8 = copyDataProperties(var11, var10);
            var8 = {};
            var9 = var9.storefront;
            var10 = var9.assets;
            var11 = var8;
            var9 = copyDataProperties(var11, var10);
            var10 = var6.assets;
            var11 = var8;
            var6 = copyDataProperties(var11, var10);
            var6 = 'assets';
            var7[var6] = var8;
            var6 = 'storefront';
            var2[var6] = var7;
            var4[var5] = var2;
case 37:
            var2 = {};
            var10 = _closure1_slot9;
            var11 = var2;
            var4 = copyDataProperties(var11, var10);
            _closure1_slot9 = var2;
            return var1;
        }
    };
    var2['SOCIAL_LAYER_STOREFRONT_PARTIAL_LOAD_SUCCESS'] = var8;
    var8 = function handleSocialLayerStorefrontLoadFailure(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var1 = arg1;
            var4 = var1.guildId;
            var3 = var1.eager;
            var1 = _closure1_slot9;
            if(var3) { _fun0013_ip = 38; continue _fun0013 }
case 18:
            var3 = {'storefront': null, 'state': 'error'};
            var5 = global;
            var6 = var5.Date;
            var5 = var6.now;
            var5 = var5.bind(var6)();
            var3['fetchedAt'] = var5;
            var1[var4] = var3;
            _fun0013_ip = 39; continue _fun0013;
case 38:
            var5 = var1[var4];
            var3 = null;
            var6 = var3 == var5;
            var7 = undefined;
            if(var6) { _fun0013_ip = 40; continue _fun0013 }
case 27:
            var7 = var5.state;
case 40:
            var6 = 'loading';
            if(!(var6 === var7)) { _fun0013_ip = 41; continue _fun0013 }
case 42:
            var6 = var3 == var5;
            var1 = undefined;
            if(var6) { _fun0013_ip = 43; continue _fun0013 }
case 44:
            var1 = var5.storefront;
case 43:
            if(!(var3 == var1)) { _fun0013_ip = 45; continue _fun0013 }
case 41:
            var1 = _closure1_slot9;
            var1 = delete var1[var4];
            _fun0013_ip = 39; continue _fun0013;
case 45:
            var3 = _closure1_slot9;
            var1 = {};
            var9 = var1;
            var8 = var5;
            var5 = copyDataProperties(var9, var8);
            var6 = 'fetched';
            var5 = 'state';
            var1[var5] = var6;
            var3[var4] = var1;
case 39:
            var1 = {};
            var8 = _closure1_slot9;
            var9 = var1;
            var3 = copyDataProperties(var9, var8);
            _closure1_slot9 = var1;
            var1 = undefined;
            return var1;
        }
    };
    var2['SOCIAL_LAYER_STOREFRONT_LOAD_FAILURE'] = var8;
    var8 = function handleSetSocialLayerStorefrontState(arg1) {
        var1 = arg1;
        var4 = var1.guildId;
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
    var8 = function handleSocialLayerStorefrontRecommendationsFetchSuccess(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var2 = arg1;
            var11 = var2.skus;
            var10 = var2.skusToRecommendationReasons;
            var7 = var2.userIds;
            var1 = var2.application;
            var9 = var2.numItemsRequested;
            var3 = {};
            var12 = _closure1_slot10;
            var13 = var3;
            var4 = copyDataProperties(var13, var12);
            var5 = var1.id;
            var4 = {};
            var6 = _closure1_slot10;
            var1 = var1.id;
            var1 = var6[var1];
            var6 = null;
            if(!(var6 == var1)) { _fun0014_ip = 4; continue _fun0014 }
case 5:
            var1 = {};
case 4:
            var13 = var4;
            var12 = var1;
            var1 = copyDataProperties(var13, var12);
            var6 = _closure1_slot17;
            var1 = undefined;
            var7 = var6.bind(var1)(var7);
            var6 = {};
            var8 = 'success';
            var6['state'] = var8;
            var8 = {};
            var8['skus'] = var11;
            var8['skusToRecommendationReasons'] = var10;
            var8['numItemsRequested'] = var9;
            var6['data'] = var8;
            var8 = global;
            var9 = var8.Date;
            var8 = var9.now;
            var8 = var8.bind(var9)();
            var6['fetchedAt'] = var8;
            var4[var7] = var6;
            var3[var5] = var4;
            _closure1_slot10 = var3;
            return var1;
        }
    };
    var2['SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_FETCH_SUCCESS'] = var8;
    var8 = function handleSocialLayerStorefrontRecommendationsFetchFailure(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var1 = arg1;
            var5 = var1.applicationId;
            var4 = var1.userIds;
            var2 = _closure1_slot17;
            var1 = undefined;
            var7 = var2.bind(var1)(var4);
            var2 = _closure1_slot10;
            var2 = var2[var5];
            var8 = null;
            if(!(var8 != var2)) { _fun0015_ip = 46; continue _fun0015 }
case 47:
            var2 = _closure1_slot10;
            var2 = var2[var5];
            var2 = var2[var7];
            if(!(var8 != var2)) { _fun0015_ip = 46; continue _fun0015 }
case 48:
            var2 = _closure1_slot10;
            var2 = var2[var5];
            var2 = var2[var7];
            var4 = var2.state;
            var2 = 'success';
            if(!(var2 !== var4)) { _fun0015_ip = 49; continue _fun0015 }
case 46:
            var2 = {};
            var10 = _closure1_slot10;
            var11 = var2;
            var4 = copyDataProperties(var11, var10);
            var4 = {};
            var6 = _closure1_slot10;
            var6 = var6[var5];
            if(!(var8 == var6)) { _fun0015_ip = 50; continue _fun0015 }
case 51:
            var6 = {};
case 50:
            var11 = var4;
            var10 = var6;
            var6 = copyDataProperties(var11, var10);
            var6 = {};
            var8 = 'error';
            var6['state'] = var8;
            var8 = global;
            var9 = var8.Date;
            var8 = var9.now;
            var8 = var8.bind(var9)();
            var6['fetchedAt'] = var8;
            var4[var7] = var6;
            var2[var5] = var4;
            _closure1_slot10 = var2;
            return var1;
case 49:
            var1 = false;
            return var1;
        }
    };
    var2['SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_FETCH_FAILURE'] = var8;
    var8 = function handleSocialLayerStorefrontRecommendationsFetchStart(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var1 = arg1;
            var5 = var1.applicationId;
            var7 = var1.userIds;
            var3 = {};
            var9 = _closure1_slot10;
            var10 = var3;
            var1 = copyDataProperties(var10, var9);
            var4 = {};
            var1 = _closure1_slot10;
            var1 = var1[var5];
            var6 = null;
            if(!(var6 == var1)) { _fun0016_ip = 36; continue _fun0016 }
case 52:
            var1 = {};
case 36:
            var10 = var4;
            var9 = var1;
            var1 = copyDataProperties(var10, var9);
            var6 = _closure1_slot17;
            var1 = undefined;
            var7 = var6.bind(var1)(var7);
            var6 = {};
            var8 = 'loading';
            var6['state'] = var8;
            var4[var7] = var6;
            var3[var5] = var4;
            _closure1_slot10 = var3;
            return var1;
        }
    };
    var2['SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_FETCH_START'] = var8;
    var8 = function handleSocialLayerStorefrontAnnouncementFetchStart(arg1) {
        var1 = arg1;
        var3 = var1.guildId;
        var2 = {};
        var5 = _closure1_slot11;
        var6 = var2;
        var4 = copyDataProperties(var6, var5);
        _closure1_slot11 = var2;
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
        var6 = _closure1_slot11;
        var7 = var2;
        var5 = copyDataProperties(var7, var6);
        _closure1_slot11 = var2;
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
        var5 = _closure1_slot11;
        var6 = var2;
        var4 = copyDataProperties(var6, var5);
        _closure1_slot11 = var2;
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
        _closure1_slot15 = var2;
        var1 = undefined;
        return var1;
    };
    var2['SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_START'] = var8;
    var8 = function handleStorefrontConfigFetchSuccess(arg1) {
        var1 = arg1;
        var1 = var1.config;
        var2 = {};
        var3 = 'success';
        var2['state'] = var3;
        var2['config'] = var1;
        var1 = global;
        var3 = var1.Date;
        var1 = var3.now;
        var1 = var1.bind(var3)();
        var2['fetchedAt'] = var1;
        _closure1_slot15 = var2;
        var1 = undefined;
        return var1;
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
        _closure1_slot15 = var2;
        var1 = undefined;
        return var1;
    };
    var2['SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_FAILURE'] = var8;
    var8 = function handleSKUPurchaseEligibilityCheckStart(arg1) {
        var1 = arg1;
        var4 = var1.skuId;
        var2 = {};
        var6 = _closure1_slot12;
        var7 = var2;
        var3 = copyDataProperties(var7, var6);
        var3 = {};
        var5 = 'checking';
        var3['state'] = var5;
        var2[var4] = var3;
        _closure1_slot12 = var2;
        var1 = undefined;
        return var1;
    };
    var2['SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_START'] = var8;
    var8 = function handleSKUPurchaseEligibilityCheckCreate(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var1 = arg1;
            var6 = var1.skuId;
            var7 = var1.interactionId;
            var1 = _closure1_slot12;
            var1 = var1[var6];
            var2 = null;
            var3 = var2 == var1;
            var2 = undefined;
            if(var3) { _fun0017_ip = 53; continue _fun0017 }
case 54:
            var2 = var1.state;
case 53:
            var1 = 'checking';
            var1 = var1 === var2;
            if(!var1) { _fun0017_ip = 55; continue _fun0017 }
case 56:
            var3 = _closure1_slot14;
            var2 = var3.has;
            var2 = var2.bind(var3)(var7);
            if(var2) { _fun0017_ip = 27; continue _fun0017 }
case 13:
            var2 = _closure1_slot13;
            var2[var7] = var6;
            var2 = undefined;
            _fun0017_ip = 57; continue _fun0017;
case 27:
            var5 = _closure1_slot14;
            var3 = var5.delete;
            var3 = var3.bind(var5)(var7);
            var3 = {};
            var8 = _closure1_slot12;
            var9 = var3;
            var5 = copyDataProperties(var9, var8);
            var5 = {'state': 'error', 'reason': 'interaction_failure'};
            var3[var6] = var5;
            _closure1_slot12 = var3;
            var2 = undefined;
case 57:
            var1 = var2;
case 55:
            return var1;
        }
    };
    var2['SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_CREATE'] = var8;
    var8 = function handleSKUPurchaseEligibilityCheckFailure(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
            var2 = arg1;
            var5 = var2.skuId;
            var7 = var2.reason;
            var1 = undefined;
            if(!(var7 === var1)) { _fun0018_ip = 9; continue _fun0018 }
case 16:
            var7 = 'http_error';
case 9:
            var6 = var2.httpStatus;
            var2 = _closure1_slot12;
            var2 = var2[var5];
            var4 = null;
            var8 = var4 == var2;
            var4 = undefined;
            if(var8) { _fun0018_ip = 58; continue _fun0018 }
case 59:
            var4 = var2.state;
case 58:
            var2 = 'checking';
            if(!(var2 !== var4)) { _fun0018_ip = 60; continue _fun0018 }
case 61:
            var2 = 'interaction_deadline';
            if(!(var2 !== var7)) { _fun0018_ip = 62; continue _fun0018 }
case 60:
            var2 = {};
            var9 = _closure1_slot12;
            var10 = var2;
            var4 = copyDataProperties(var10, var9);
            var4 = {};
            var8 = 'error';
            var4['state'] = var8;
            var4['reason'] = var7;
            var4['httpStatus'] = var6;
            var2[var5] = var4;
            _closure1_slot12 = var2;
            return var1;
case 62:
            var1 = false;
            return var1;
        }
    };
    var2['SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_FAILURE'] = var8;
    var4 = function handleSKUPurchaseEligibilityResponse(arg1) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
            var1 = arg1;
            var4 = var1.skuId;
            var6 = var1.recipientId;
            var3 = var1.eligible;
            var5 = var1.ineligibleReason;
            var7 = _closure1_slot7;
            var1 = var7.getId;
            var1 = var1.bind(var7)();
            if(!(var1 === var6)) { _fun0019_ip = 63; continue _fun0019 }
case 64:
            var1 = {};
            var8 = _closure1_slot12;
            var9 = var1;
            var6 = copyDataProperties(var9, var8);
            if(var3) { _fun0019_ip = 65; continue _fun0019 }
case 24:
            var3 = {};
            var6 = 'ineligible';
            var3['state'] = var6;
            var3['ineligibleReason'] = var5;
            _fun0019_ip = 66; continue _fun0019;
case 65:
            var5 = {};
            var6 = 'eligible';
            var5['state'] = var6;
            var3 = var5;
case 66:
            var1[var4] = var3;
            _closure1_slot12 = var1;
            var1 = undefined;
            return var1;
case 63:
            var1 = false;
            return var1;
        }
    };
    var2['SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_RESPONSE'] = var4;
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